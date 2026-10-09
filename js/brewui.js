/**
 * Màn hình bán hàng: khách + bong bóng thoại, quầy trà, thớt pha ly, khay topping, máy đóng nắp,
 * sảnh bàn ghế. Mọi bước đều có hiệu ứng (lấy ly, rót trà, bỏ topping, đóng nắp, giao ly).
 */
import { ITEMS, TEAS, FLAVORS, TOPS, SIZE_L_PRICE, STAFF } from './config.js';
import { S, on, emit, markDirty, $, $$, h, esc, fmtK, sfx, clamp, wait, sum, rand } from './core.js';
import * as E from './econ.js';
import * as G from './sell.js';
import { SH } from './sell.js';
import { toast, fxText, fxCoins, fxSpark, bindActions, logoHTML, openModal, isModalOpen, updateClock } from './ui.js';
import { sellSceneHTML, updateSceneTime } from './scenes.js';
import { teaArt, toppingArt, stackArt, sealerArt, cupSvg, setCupFill, customerArt } from './sell-art.js';

/* ===== Hình ly ===== */
const sizePx = { M: [54, 76], L: [64, 90] };
/** Số viên đã CHẠM vào ly của từng topping đang bay (chưa có trong map = đã hiện đủ 3 viên). */
let topShown = {};
let topShownBoard = null;
const shownFor = (c) => {
  if (c !== SH.board) return [];
  if (topShownBoard !== c) { topShown = {}; topShownBoard = c; }
  return (c.tops || []).map((_, i) => topShown[i]);
};
export function cupHTML(c, { mini = false, stamp = true } = {}) {
  const [w, hgt] = sizePx[c.size || 'M'];
  const k = mini ? 0.78 : 1;
  const tea = c.tea ? ITEMS[c.tea] : null;
  const fl = c.flavor ? ITEMS[c.flavor] : null;
  const fill = clamp(c.fill ?? 0, 0, 1.15);
  const lid = c.phase === 'ready' ? 'on' : c.phase === 'sealing' ? 'drop' : '';
  const svg = cupSvg({ fill, tea: tea ? tea.color : null, flavor: fl ? fl.color : null, tops: (c.tops || []).map((t) => ITEMS[t].color), shown: shownFor(c), lid, straw: c.phase === 'ready' });
  const st = stamp && !mini && E.equipLevel('nhanDien') > 0 ? `<span class="c-stamp">${logoHTML(20)}</span>` : '';
  const seal = Math.round(Math.max(500, (c.sealMax || 1.2) * 1000 * 0.8));
  return `<div class="cup ${c.phase || ''}" style="width:${w * k}px;height:${hgt * k}px;--seal-ms:${seal}ms">${svg}${st}</div>`;
}
function orderCup(o) {
  return cupHTML({ size: o.size, tea: o.tea, flavor: o.flavor, tops: o.tops, fill: 0.95, phase: 'ready' }, { mini: true, stamp: false });
}

/* ===== Dựng màn hình ===== */
let root = null;
let brewFxGeneration = 0;
function clearBrewFx() {
  brewFxGeneration++;
  const layer = $('#brewfx'); if (layer) layer.textContent = '';
  $$('.fx-lid').forEach((el) => el.remove());
  const fx = $('#fx'); if (fx) fx.textContent = '';
}
function brewFxLayer() {
  let layer = $('#brewfx');
  if (!layer) { layer = h('<div id="brewfx" aria-hidden="true"></div>'); $('#app').appendChild(layer); }
  return layer;
}
const canShowBrewFx = () => S.phase === 'sell' && SH.view === 'counter' && !isModalOpen();
on('modal:open', clearBrewFx);
on('shift:end', clearBrewFx);
export function renderSell() {
  clearBrewFx();
  const view = $('#view');
  if (S.phase !== 'sell') return;
  if (SH.view === 'lobby') return renderLobby(view);
  view.innerHTML = `<div class="sell" id="sell" data-night="${SH.hour >= 17 ? '1' : ''}">
    ${sellSceneHTML(SH.hour)}
    <div class="queue-row" id="qrow"></div>
    <div class="cust-zone">
      <div class="cust-av" id="cav"></div>
      <div class="bubble" id="cbub"></div>
    </div>
    <div class="hint" id="hint"></div>
    <div class="shelf">
      <div class="shelf-head"><div class="tag-w">QUẦY TRÀ</div><div class="staff-strip" id="staffStrip">${staffStripHTML()}</div></div>
      <div class="shelf-row">
        <div class="stacks">
          <button class="stack" data-act="cup" data-size="M" aria-label="Lấy ly size M"><div class="cupstack image-stack m">${stackArt('M')}</div><b>M</b><span class="cnt" data-cnt="lyM">0</span></button>
          <button class="stack big" data-act="cup" data-size="L" aria-label="Lấy ly size L"><div class="cupstack image-stack l">${stackArt('L')}</div><b>L</b><span class="cnt" data-cnt="lyL">0</span></button>
        </div>
        <div class="disps" id="disps">${TEAS.map(dispHTML).join('')}</div>
      </div>

    </div>
    <div class="work">
      <div class="work-row">
        <div class="work-l">
          <div class="tag-w sm">PHA LY</div>
          <div class="board" id="wboard"><div class="cupslot" id="cupslot" data-act="boardTap"></div>
            <div class="board-txt" id="boardTxt">Lấy ly<br/>M hoặc L</div>
            <div class="pourbar" id="pourbar"><div class="pb-zone"></div><i id="pbFill"></i></div></div>
        </div>
        <button class="sealer image-sealer" id="sealer" data-act="seal" aria-label="Máy đóng nắp">${sealerArt()}<span class="sl-led">READY</span></button>
        <div class="work-side">
          <button class="phone" data-act="phone" aria-label="Đơn online"><span>📱</span><b id="phoneBadge">0</b></button>
          <button class="trash" data-act="trash" aria-label="Thùng rác">🗑️</button>
        </div>
      </div>
      <div class="flav-row" id="flavs"></div><div class="trays" id="trays"></div>
    </div>
    <div class="foot"><button class="btn pri lobby-go" data-act="lobby" id="lobbyGo">Ra sảnh → <span id="lobbyCnt">0/0</span></button></div>
    <div class="stream" id="stream"><i class="st-gloss"></i><span class="st-spl"><i></i><i></i><i></i><i></i><i></i></span><span class="st-ring"></span><span class="st-ring r2"></span></div>
  </div>`;
  root = $('#sell');
  fillTrays();
  fillFlavors();
  refreshQueue();
  refreshCustomer();
  bindActions(root, sellActs);
  $('#staffStrip')?.addEventListener('click', (e) => { const b = e.target.closest('.stf'); if (!b) return; sfx('click'); b.classList.add('tip'); clearTimeout(b._tm); b._tm = setTimeout(() => b.classList.remove('tip'), 1800); });
  frameSell(0, true);
}
/* ===== Nhân viên đã thuê hiện ngay trên quầy: đang pha (vòng tiến độ) hay đang rảnh ===== */
const STAFF_ICON = { thuViec: '🦊', phaChe: '🐰', online: '🐼', quanLy: '🐻', genZ: '🦄', svDem: '🦉', meKetTinh: '🦋', diCho: '🧺', chuBa: '👮' };
const staffStripHTML = () => STAFF.filter((st) => S.staff[st.id]).map((st) => `<button class="stf idle" data-stf="${st.id}" data-tip="${esc(st.name)}" aria-label="${esc(st.name)}">${STAFF_ICON[st.id] || st.icon}<b></b></button>`).join('');
function staffStatus(st) {
  const job = SH.jobs.find((j) => j.by === st.id);
  if (job) return { cls: 'work', p: clamp((1 - job.t / Math.max(0.5, st.sec)) * 100, 4, 100), txt: `${st.name}: đang pha món cho khách` };
  if (st.kind === 'auto' || st.kind === 'online') return { cls: 'idle', p: 0, txt: `${st.name}: ${st.kind === 'online' ? 'chờ đơn online' : 'đang rảnh, chờ khách'}` };
  if (st.kind === 'buyer') return { cls: 'idle', p: 0, txt: `${st.name}: canh kho, hết hàng sẽ đi chợ` };
  if (st.id === 'chuBa') return { cls: 'idle', p: 0, txt: `${st.name}: đang canh gác quán` };
  if (st.id === 'meKetTinh') return { cls: 'idle', p: 0, txt: `${st.name}: đang quay video quảng bá` };
  return { cls: 'idle', p: 0, txt: st.name };
}
function updateStaffStrip() {
  for (const el of $$('#staffStrip .stf')) {
    const st = STAFF.find((x) => x.id === el.dataset.stf);
    if (!st) continue;
    const s = staffStatus(st);
    el.classList.toggle('work', s.cls === 'work'); el.classList.toggle('idle', s.cls !== 'work');
    el.style.setProperty('--p', s.p.toFixed(0));
    el.dataset.tip = s.txt;
  }
}
function dispHTML(t) {
  const it = ITEMS[t];
  const locked = !S.unlocked[t];
  const off = S.unlocked[t] && !S.onMenu[t];
  return `<button class="disp ${locked ? 'locked' : ''} ${off ? 'off' : ''}" data-act="disp" data-tea="${t}" aria-label="${it.name}" ${locked ? 'data-locked="1"' : ''}>
    <div class="jar image-jar">${teaArt(t)}${locked ? '<em class="lk">🔒</em>' : ''}<span class="tap image-tap"><i class="drip" style="background:${it.color}"></i></span></div>
    <span class="cnt" data-cnt="${t}">0</span></button>`;
}
function fillFlavors() {
  const list = FLAVORS.filter((f) => S.unlocked[f] && S.onMenu[f]);
  $('#flavs').innerHTML = list.length ? `<span class="tag-w sm">HƯƠNG</span>` + list.map((f) => `<button class="fbtn" data-act="flav" data-f="${f}" aria-label="${ITEMS[f].name}"><i style="background:${ITEMS[f].color}"></i><b>${ITEMS[f].icon}</b><span class="cnt" data-cnt="${f}">0</span></button>`).join('') : '';
}
function fillTrays() {
  const order = [...TOPS].sort((a, b) => (S.unlocked[b] && S.onMenu[b] ? 1 : 0) - (S.unlocked[a] && S.onMenu[a] ? 1 : 0));
  const slots = Math.max(12, Math.ceil(order.length / 4) * 4);
  $('#trays').innerHTML = order.slice(0, slots).map((t) => {
    const it = ITEMS[t];
    const locked = !S.unlocked[t], off = S.unlocked[t] && !S.onMenu[t];
    return `<button class="tray image-tray ${locked ? 'locked' : ''} ${off ? 'off' : ''}" data-act="top" data-t="${t}" aria-label="${it.name}"><div class="pile">${toppingArt(t)}</div>${locked ? '<em class="lk">🔒</em>' : ''}<small>${it.name.replace('Trân châu ', 'TC ').replace('Thạch ', 'Th. ')}</small><span class="cnt" data-cnt="${t}">0</span></button>`;
  }).join('');
}

/* ===== Hành động ===== */
const sellActs = {
  cup: (t) => { const e = G.pickCup(t.dataset.size); if (e) { toast(e, 'err'); sfx('error'); } },
  disp: (t) => {
    const id = t.dataset.tea;
    if (!S.unlocked[id]) return toast('Mở khóa trong Nâng cấp › Trà', 'err');
    if (!S.onMenu[id]) return toast('Món đang tắt khỏi menu', 'err');
    const b = SH.board;
    if (b?.pouring) { G.stopPour(); return; }
    const e = G.startPour(id);
    if (e) { toast(e, 'err'); sfx('error'); }
  },
  flav: (t) => { const e = G.addFlavor(t.dataset.f); if (e) { toast(e, 'err'); sfx('error'); } else dropFx(t, '#fff'); },
  top: (t) => {
    const id = t.dataset.t;
    if (!S.unlocked[id]) return toast('Mở khóa trong Nâng cấp › Topping', 'err');
    if (!S.onMenu[id]) return toast('Món đang tắt khỏi menu', 'err');
    const b = SH.board;
    let idx = -1;
    if (b) { if (topShownBoard !== b) { topShown = {}; topShownBoard = b; } idx = b.tops.length; topShown[idx] = 0; }
    const e = G.addTop(id);
    if (e) { if (idx >= 0) delete topShown[idx]; toast(e, 'err'); sfx('error'); } else dropFx(t, ITEMS[id].color, idx);
  },
  seal: () => { const e = G.sealCup(); if (e) { toast(e, 'err'); sfx('error'); } },
  boardTap: () => { if (SH.board?.phase === 'ready') doServe(); },
  trash: () => { if (SH.board) { G.trashCup(); sfx('pop'); toast('Đã đổ ly', ''); } },
  reject: () => { const c = G.frontCustomer(); const e = G.rejectCustomer(); if (e) { toast(e, 'err'); return; } sfx('sad'); toast(`Đã từ chối đơn của ${c.tag}`, 'err', 1400); },
  phone: () => openOnlineList(),
  lobby: () => { SH.view = 'lobby'; markDirty('view'); },
  sel: (t) => G.selectCustomer(+t.dataset.cid),
};
let serveHold = false;
/** Hoạt ảnh bằng requestAnimationFrame: step(t) với t từ 0 đến 1, xong thì gọi done. */
function tween(ms, step, done) {
  const t0 = performance.now();
  const f = (now) => {
    const t = Math.min(1, (now - t0) / ms);
    step(t);
    if (t < 1) requestAnimationFrame(f); else if (done) done();
  };
  requestAnimationFrame(f);
}
const THANKS = [
  null, ['😕', 'Hơi thất vọng...'], ['😕', 'Hơi thất vọng...'], ['🙂', 'Cũng được, cảm ơn!'], ['😊', 'Ngon, cảm ơn bạn!'], ['🥰', 'Ngon tuyệt vời, cảm ơn!'],
];
const REFUSED = ['😠', 'Sai món rồi, tôi không nhận!'];
const DISCOUNTED = ['😒', 'Sai món, thôi bán rẻ tôi lấy!'];
/** Hiện chữ / xu / tia sáng trong lớp hiệu ứng quầy (nằm dưới hộp thoại). */
function floatText(text, x, y, cls = '') {
  const el = h(`<div class="fx-float ${cls}" style="left:${x}px;top:${y}px">${esc(text)}</div>`);
  brewFxLayer().appendChild(el);
  setTimeout(() => el.remove(), 1100);
}
function flyCoins(from, n) {
  const money = $('[data-money]');
  if (!money) return;
  const mr = money.getBoundingClientRect(), tx = mr.left + mr.width / 2, ty = mr.top + mr.height / 2;
  for (let i = 0; i < n; i++) {
    const sx = from.x + rand(-16, 16), sy = from.y + rand(-8, 8);
    const c = h(`<div class="fx-coin" style="left:${sx}px;top:${sy}px;--dx:${tx - sx}px;--dy:${ty - sy}px;animation-delay:${i * 50}ms">🪙</div>`);
    brewFxLayer().appendChild(c);
    setTimeout(() => c.remove(), 1000 + i * 50);
  }
}
function doServe() {
  if (serveHold) return;
  const cupEl = $('#cupslot .cup');
  const av = $('#cav'), bub = $('#cbub');
  const show = canShowBrewFx() && cupEl && av;
  const from = cupEl ? cupEl.getBoundingClientRect() : null;
  serveHold = true; // giữ khách cũ trên màn hình đến khi ly được trao xong
  const r = G.serve();
  if (typeof r === 'string') { serveHold = false; toast(r, 'err'); sfx('error'); return; }
  const finish = () => { serveHold = false; if (SH.on && S.phase === 'sell' && SH.view === 'counter') refreshCustomer(); };
  if (!show) { finish(); return; }
  const to = av.getBoundingClientRect();
  const tx = to.left + to.width / 2, ty = to.top + to.height * 0.55;
  const dx = tx - (from.left + from.width / 2), dy = ty - (from.top + from.height / 2);
  const generation = brewFxGeneration;
  // bản sao ly bay cung tròn sang tay khách, nhỏ dần rồi "đáp" vào tay
  const clone = cupEl.cloneNode(true);
  clone.style.cssText = `position:fixed;left:${from.left}px;top:${from.top}px;width:${from.width}px;height:${from.height}px;margin:0;pointer-events:none;transition:none;will-change:transform,opacity`;
  brewFxLayer().appendChild(clone);
  cupEl.style.visibility = 'hidden';
  const DUR = r.refused ? 900 : 640;
  const alive = () => generation === brewFxGeneration && clone.isConnected;
  tween(DUR, (t) => {
    if (!alive()) return;
    // ly bị từ chối: bay tới khách rồi bị đẩy ngược lại
    const e = r.refused ? Math.sin(Math.PI * Math.min(1, t * 1.05)) * 0.9 : (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    clone.style.transform = `translate(${(dx * e).toFixed(1)}px,${(dy * e - 46 * 4 * t * (1 - t)).toFixed(1)}px) scale(${(1 - 0.4 * e).toFixed(3)}) rotate(${(-10 + 16 * e).toFixed(1)}deg)`;
  }, () => {
    // chạm tay khách: ly nhún một cái, nhỏ dần rồi biến mất
    if (!r.refused) {
      tween(300, (t) => {
        if (!alive()) return;
        const up = Math.sin(Math.min(1, t * 1.6) * Math.PI) * 6;
        clone.style.transform = `translate(${dx}px,${(dy - up - 16 * t).toFixed(1)}px) scale(${(0.6 * (1 - 0.75 * t) + 0.1 * Math.sin(Math.PI * Math.min(1, t * 2))).toFixed(3)}) rotate(6deg)`;
        clone.style.opacity = String(1 - t);
      }, () => clone.remove());
    } else clone.remove();
    if (generation !== brewFxGeneration) { finish(); return; }
    const [emo, msg] = r.refused ? REFUSED : r.discount ? DISCOUNTED : (THANKS[r.stars] || THANKS[3]);
    const face = $('.face', av);
    if (face) { face.classList.remove('thanks', 'sad'); void face.offsetWidth; face.classList.add(r.stars <= 2 ? 'sad' : 'thanks'); }
    if (bub) bub.innerHTML = `<div class="thanks-msg"><span class="thanks-emo">${emo}</span><div><b>${msg}</b><small>${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</small></div></div>`;
    if (r.refused) { floatText('❌ Khách không nhận ly', tx, to.top + 6, 'r'); sfx('sad'); setTimeout(finish, 900); return; }
    floatText(`+${fmtK(r.pay)}${r.tip ? ' (+' + fmtK(r.tip) + ' boa)' : ''}${r.discount ? ' · bán rẻ −30%' : ''}`, tx, to.top + 6, '');
    setTimeout(() => floatText('★'.repeat(r.stars) + '☆'.repeat(5 - r.stars), tx, to.top - 14, r.stars >= 4 ? 'g' : r.stars <= 2 ? 'r' : ''), 200);
    if (r.issues.length) setTimeout(() => floatText(r.issues.slice(0, 2).join(', '), tx, to.top + 26, 'r'), 480);
    if (r.luck) setTimeout(() => floatText('🍀 MAY MẮN ×2!', tx, to.top + 44, 'g'), 650);
    flyCoins({ x: tx, y: ty }, r.stars >= 4 ? 7 : 3);
    fxSpark({ x: tx, y: ty }, r.stars >= 5 ? 10 : 5);
    sfx(r.stars >= 4 ? 'reward' : 'sad');
    setTimeout(finish, 900);
  });
}

/* ===== Hiệu ứng bước ===== */
function dropFx(fromEl, color, idx = -1) {
  sfx('drop');
  const slot = $('#cupslot');
  const reveal = (count) => {
    if (idx < 0 || SH.board !== topShownBoard) return;
    if (count >= 3) delete topShown[idx]; else topShown[idx] = count;
    updateBoard(true);
  };
  if (!fromEl || !slot || !canShowBrewFx()) { reveal(3); return; }
  const generation = brewFxGeneration, board = SH.board;
  const a = fromEl.getBoundingClientRect();
  const n = 5, DUR = 820, GAP = 95, SPLIT = 0.62;
  const balls = [];
  for (let k = 0; k < n; k++) {
    const sx = a.left + a.width / 2 + rand(-10, 10), sy = a.top + a.height / 2;
    const el = h(`<div class="fx-ball" style="left:${sx - 7}px;top:${sy - 7}px;background-color:${color};opacity:0"></div>`);
    brewFxLayer().appendChild(el);
    balls.push({ el, k, sx, sy, jit: rand(-9, 9), rise: 34 + rand(0, 22), done: false });
  }
  const t0 = performance.now();
  let surfaceY = 0;
  // vị trí ly đo lại MỖI khung hình: ly đang trượt về/ra thì trân châu bay theo đúng ly
  const frame = (now) => {
    if (generation !== brewFxGeneration || !slot.isConnected || !canShowBrewFx() || SH.board !== board) {
      balls.forEach((o) => o.el.remove()); reveal(3); return;
    }
    const cupEl = slot.querySelector('.cup') || slot;
    const cr = cupEl.getBoundingClientRect();
    const liq = cupEl.querySelector?.('.c-liq');
    const lr = liq ? liq.getBoundingClientRect() : null;
    surfaceY = lr && lr.height > 2 ? lr.top + 3 : cr.bottom - 8;
    const cx = cr.left + cr.width / 2, rimY = cr.top - 16;
    let alive = false;
    for (const o of balls) {
      if (o.done) continue;
      const u = (now - t0 - o.k * GAP) / DUR;
      if (u < 0) { alive = true; continue; }
      if (u >= 1) {
        o.done = true; o.el.remove();
        reveal(Math.round((o.k + 1) * 3 / n));
        if (o.k === 0) { slot.classList.remove('plop'); void slot.offsetWidth; slot.classList.add('plop'); }
        if (o.k === n - 1) splash(slot, color, surfaceY);
        continue;
      }
      alive = true;
      const ex = cx + o.jit;
      let x, y, sc = 1, op = 1;
      if (u <= SPLIT) {
        const w = u / SPLIT;
        x = o.sx + (ex - o.sx) * (1 - (1 - w) * (1 - w));
        y = o.sy + (rimY - o.sy) * w - o.rise * 4 * w * (1 - w);
        sc = 1 + 0.15 * Math.sin(w * Math.PI);
      } else {
        const w = (u - SPLIT) / (1 - SPLIT);
        x = ex; y = rimY + (surfaceY - rimY) * w * w;
        sc = 1 - 0.25 * w; op = w > 0.85 ? 1 - (w - 0.85) / 0.15 : 1;
      }
      o.el.style.opacity = op;
      o.el.style.transform = `translate(${(x - o.sx).toFixed(1)}px,${(y - o.sy).toFixed(1)}px) scale(${sc.toFixed(2)})`;
    }
    if (alive) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}
/** Vòng sóng + giọt bắn tại miệng ly. */
function splash(cup, color, atY) {
  if (!canShowBrewFx() || !cup.isConnected) return;
  const r = cup.getBoundingClientRect();
  const x = r.left + r.width / 2, y = atY ?? r.top + r.height * 0.5;
  fxSpark({ x, y }, 5);
  const ring = h(`<div class="fx-ripple" style="left:${x}px;top:${y}px;border-color:${color}"></div>`);
  brewFxLayer().appendChild(ring);
  setTimeout(() => ring.remove(), 520);
}
function flyCupIn(size) {
  const slot = $('#cupslot'), cupEl = slot?.firstElementChild;
  if (!cupEl || !canShowBrewFx()) return;
  cupEl.animate([
    { transform: 'scale(.45)', opacity: 0.15 },
    { transform: 'scale(.8)', opacity: 0.65, offset: .6 },
    { transform: 'scale(1)', opacity: 1 },
  ], { duration: 360, easing: 'ease-out' });
}
function sealAnim() {
  const cupEl = $('#cupslot .cup'), sealer = $('#sealer');
  if (!cupEl || !sealer || !canShowBrewFx()) return;
  const dur = Math.max(600, (SH.board?.sealMax || 1.2) * 1000);
  sealer.classList.add('press');
  cupEl.animate([
    { transform: 'none', offset: 0 }, { transform: 'none', offset: 0.6 },
    { transform: 'scale(1.05,.93)', offset: 0.72 }, { transform: 'scale(.99,1.03)', offset: 0.86 }, { transform: 'none', offset: 1 },
  ], { duration: dur, easing: 'ease-out' });
  setTimeout(() => sealer.classList.remove('press'), dur);
  sfx('seal');
}
on('cup:pick', (size) => {
  const board = SH.board;
  setTimeout(() => {
    if (SH.board !== board || !canShowBrewFx() || board.phase !== 'cup') return;
    updateBoard(true); flyCupIn(size); sfx('cup');
  }, 0);
});
on('seal:start', () => { updateBoard(true); sealAnim(); });
on('seal:done', () => { sfx('ding'); updateBoard(true); const cs = $('#cupslot'); if (cs) { fxSpark({ x: cs.getBoundingClientRect().left + cs.offsetWidth / 2, y: cs.getBoundingClientRect().top + cs.offsetHeight * 0.35 }, 6); cs.classList.remove('plop'); void cs.offsetWidth; cs.classList.add('plop'); } const s = $('#sealer'); s?.classList.add('ding'); setTimeout(() => s?.classList.remove('ding'), 600); });
on('top', () => updateBoard(true));
on('flavor', () => updateBoard(true));
on('auto:pour', () => updateBoard(true));
on('trash', () => updateBoard(true));
on('queue', () => { if (SH.on && S.phase === 'sell' && SH.view === 'counter') { refreshQueue(); refreshCustomer(); } });
on('sel', () => { refreshQueue(); refreshCustomer(); });
on('served', () => { updateBoard(true); refreshQueue(); if (!serveHold) refreshCustomer(); });
on('left', (c) => { toast(`${c.tag} bỏ về vì chờ quá lâu 😢`, 'err', 1500); sfx('sad'); });
on('balk', () => toast('Hàng chờ đầy, có khách bỏ đi 😶', 'err', 1200));
on('ding', () => sfx('bell'));
on('buyer', (id) => toast(`🧺 Nhân viên đi chợ vừa mua ${ITEMS[id].name}`, '', 1500));
on('online:new', () => updatePhone());
on('table:clean', ({ i, tip }) => { if (SH.view === 'lobby') { markDirty('view'); fxText(`+${fmtK(tip)}`, $(`[data-table="${i}"]`)); sfx('coin'); } });
on('tables', () => { if (SH.view === 'lobby') markDirty('view'); else updateLobbyBtn(); });

/* ===== Cập nhật từng phần ===== */
function refreshQueue() {
  const row = $('#qrow');
  if (!row) return;
  const front = G.frontCustomer();
  row.innerHTML = SH.queue.map((c) => `<button class="qav ${front === c ? 'on' : ''}" data-act="sel" data-cid="${c.id}" aria-label="Khách ${esc(c.tag)}"><span class="ring" data-ring="${c.id}" style="--p:${(c.p / c.maxP * 100).toFixed(0)}"></span><b>${c.online ? c.avatar : customerArt(c.key) || c.avatar}</b></button>`).join('') || '<span class="q-empty">Chưa có khách...</span>';
}
function refreshCustomer() {
  const av = $('#cav'), bub = $('#cbub');
  if (!av || serveHold) return;
  const c = G.frontCustomer();
  if (!c) {
    av.innerHTML = '<span class="idle">☕</span>';
    bub.innerHTML = '<div class="btxt dim">Quầy đang vắng... chuẩn bị ly nước thật ngon nhé!</div>';
    return;
  }
  av.classList.remove('enter'); bub.classList.remove('enter'); void av.offsetWidth; av.classList.add('enter'); bub.classList.add('enter');
  const o = c.order;
  av.innerHTML = `<span class="face">${c.online ? c.avatar : customerArt(c.key) || c.avatar}</span>`;
  bub.innerHTML = `<button class="rej" data-act="reject" aria-label="Từ chối đơn">✖ Từ chối</button><div class="b-row">${orderCup(o)}<div><span class="atag">${esc(c.tag)}</span><div class="btxt">${esc(c.text)}</div></div></div>
    <div class="pat"><span>KIÊN NHẪN</span><div class="bar" id="patBar"><i style="width:${(c.p / c.maxP * 100).toFixed(0)}%"></i></div></div>`;
}
function updateBoard(force) {
  const slot = $('#cupslot'), txt = $('#boardTxt'), bar = $('#pourbar');
  if (!slot) return;
  const b = SH.board;
  if (!b) { slot.innerHTML = ''; txt.style.display = ''; bar.classList.remove('on'); return; }
  txt.style.display = 'none';
  bar.classList.add('on');
  const sig = `${b.phase}|${b.tea}|${b.flavor}|${b.tops.join(',')}|${b.size}`;
  if (force || slot.dataset.sig !== sig) {
    slot.dataset.sig = sig;
    slot.innerHTML = cupHTML(b);
  }
  setCupFill(slot.querySelector('.cup'), b.fill);
  $('#pbFill').style.width = `${clamp(b.fill / 1.25 * 100, 0, 100)}%`;
  $('#pbFill').className = b.fill > 1.02 ? 'over' : b.fill >= 0.85 ? 'ok' : '';
  slot.classList.toggle('ready', b.phase === 'ready');
}
function updatePhone() {
  const bd = $('#phoneBadge');
  if (!bd) return;
  bd.textContent = SH.onlineQ.length;
  bd.parentElement.classList.toggle('has', SH.onlineQ.length > 0);
}
function updateLobbyBtn() {
  const c = $('#lobbyCnt');
  if (!c) return;
  const dirty = SH.tables.filter((t) => t.s === 'dirty').length;
  c.textContent = `${SH.tables.filter((t) => t.s === 'busy').length}/${SH.tables.length}`;
  $('#lobbyGo')?.classList.toggle('alert', dirty > 0);
}
function hintText() {
  if (!S.settings.hints) return '';
  const c = G.frontCustomer();
  if (!c) return 'Chờ khách ghé quầy...';
  const o = c.order, b = SH.board;
  if (!b) return `Bước 1: chạm chồng ly ${o.size}`;
  if (b.phase === 'sealing') return 'Đang đóng nắp...';
  if (b.phase === 'ready') return 'Xong rồi! Chạm ly để giao cho khách';
  if (b.pouring) return 'Chạm lần nữa để dừng khi thanh tới vùng vàng';
  if (!b.tea) return `Bước 2: chạm bình ${ITEMS[o.tea].name} để rót`;
  if (b.size !== o.size) return `Khách muốn size ${o.size}, đổ ly (🗑️) và lấy lại nhé`;
  if (b.tea !== o.tea) return `Sai trà! Khách muốn ${ITEMS[o.tea].name}`;
  if (o.flavor && !b.flavor) return `Bước 3: chạm chai hương ${ITEMS[o.flavor].name}`;
  const miss = o.tops.filter((t) => !b.tops.includes(t));
  if (miss.length) return `Bước 4: thêm topping ${miss.map((t) => ITEMS[t].name).join(', ')}`;
  return 'Bước 5: chạm MÁY ĐÓNG NẮP ở bên phải';
}
let cntT = 0;
export function frameSell(dt, force) {
  if (S.phase !== 'sell') return;
  updateClock();
  if (SH.view === 'lobby') { lobbyFrame(); return; }
  if (!root || !root.isConnected) return;
  cntT -= dt;
  const front = G.frontCustomer();
  const bar = $('#patBar > i');
  if (bar && front) {
    const r = front.p / front.maxP;
    bar.style.width = `${(r * 100).toFixed(0)}%`;
    bar.parentElement.className = `bar ${r < 0.25 ? 'danger' : r < 0.55 ? 'warn' : ''}`;
  }
  for (const c of SH.queue) { const rg = $(`[data-ring="${c.id}"]`); if (rg) rg.style.setProperty('--p', (c.p / c.maxP * 100).toFixed(0)); }
  const hint = $('#hint');
  if (hint) { const t = hintText(); if (hint.textContent !== t) hint.textContent = t; hint.style.display = t ? '' : 'none'; }
  updateBoard(false);
  // vòi rót + dòng chảy: ly trượt sang đứng dưới đúng vòi của bình đang rót (tính một lần khi bắt đầu rót)
  const st = $('#stream');
  const b = SH.board;
  const slot = $('#cupslot');
  slot?.classList.toggle('pouring-art', !!b?.pouring);
  if (b?.pouring && b.tea && slot) {
    const d = $(`.disp[data-tea="${b.tea}"] .tap`);
    if (d && st) {
      const a = d.getBoundingClientRect(), r0 = root.getBoundingClientRect();
      const tapX = a.left + a.width / 2;
      if (slot._pour?.tea !== b.tea) {
        // vị trí gốc của khung ly lấy từ offset (không bị ảnh hưởng bởi transform đang chạy)
        const board = slot.offsetParent, br = board.getBoundingClientRect();
        const baseL = br.left + board.clientLeft + slot.offsetLeft, baseT = br.top + board.clientTop + slot.offsetTop;
        const cupEl = slot.querySelector('.cup');
        const cupW = cupEl ? cupEl.offsetWidth : 60, cupH = cupEl ? cupEl.offsetHeight : 80;
        const cupTop = baseT + slot.offsetHeight - 6 - cupH;
        const vw = document.documentElement.clientWidth;
        const cx = clamp(tapX, br.left + cupW / 2 + 8, br.right - cupW / 2 - 8);
        const nx = Math.round(cx - (baseL + slot.offsetWidth / 2)), ny = 0;
        slot.style.transform = `translate(${nx}px,${ny}px)`;
        slot.classList.add('under-tap');
        slot._pour = { tea: b.tea, t0: performance.now(), lastSfx: performance.now(), mouthY: cupTop + ny + 4 };
      }
      const P = slot._pour;
      if (performance.now() - P.t0 > 380) {
        // dòng trà đi qua miệng ly (chỉ mờ đi) và dừng đúng mặt nước trà trong ly, như rót vào cốc thủy tinh
        const cupEl = slot.querySelector('.cup');
        const mouth = cupEl.getBoundingClientRect();
        const liq = cupEl.querySelector('.c-liq');
        const lr = liq ? liq.getBoundingClientRect() : null;
        const surfaceY = lr && lr.height > 2 ? lr.top + 2 : mouth.bottom - 8;
        const rimY = mouth.top + mouth.height * 0.12;
        const dx = mouth.left + mouth.width / 2 - tapX, dy = Math.max(10, surfaceY - a.bottom);
        const len = Math.hypot(dx, dy);
        const rim = clamp((rimY - a.bottom) / dy, 0, 1) * 100;
        st.style.cssText = `display:block;left:${tapX - 3.5 - r0.left}px;top:${a.bottom - 2 - r0.top}px;height:${len}px;--rim:${rim.toFixed(1)}%;transform-origin:50% 0;transform:rotate(${-Math.atan2(dx, dy) * 180 / Math.PI}deg);background-color:${ITEMS[b.tea].color};color:${ITEMS[b.tea].color}`;
        if (performance.now() - P.lastSfx > 1100) { P.lastSfx = performance.now(); sfx('pour'); }
      } else st.style.display = 'none';
    }
  } else {
    if (st) st.style.display = 'none';
    if (slot?._pour) { slot._pour = null; slot.style.transform = ''; slot.classList.remove('under-tap'); }
  }
  if (cntT <= 0 || force) {
    cntT = 0.25;
    updateStaffStrip();
    updateSceneTime(SH.hour);
    for (const el of $$('[data-cnt]', root)) {
      const id = el.dataset.cnt, q = E.stockQty(id);
      el.textContent = q; el.parentElement.classList.toggle('empty', q === 0);
      el.parentElement.classList.toggle('exp-soon', q > 0 && E.expiringToday(id) > 0); // topping/trà sắp hết hạn hôm nay
    }
    updatePhone();
    updateLobbyBtn();
    for (const d of $$('.disp', root)) d.classList.toggle('pouring', !!(b?.pouring && b.tea === d.dataset.tea));
  }
}

/* ===== Đơn online ===== */
function openOnlineList() {
  const draw = () => {
    if (!SH.onlineQ.length) return '<p class="m-text center">Chưa có đơn online nào. Cần mở app trong Nâng cấp › Online.</p>';
    return SH.onlineQ.map((q) => `<div class="on-row"><span class="on-app" style="background:${q.app.color}">${q.app.name[0]}</span><div class="grow"><b>${q.app.name}</b><small>${ITEMS[q.o.tea].name} ${q.o.size}${q.o.flavor ? ' · ' + ITEMS[q.o.flavor].name : ''}${q.o.tops.length ? ' · ' + q.o.tops.length + ' topping' : ''}</small></div><button class="btn pri sm" data-act="acc" data-id="${q.id}">Nhận · ${Math.ceil(q.exp)}s</button></div>`).join('');
  };
  const m = openModal({ id: 'online', cls: 'small', html: `<h3 class="m-title">📱 Đơn online</h3><div id="onl">${draw()}</div><button class="btn ghost block" data-act="x">Đóng</button>` });
  bindActions(m.body, { acc: (t) => { const e = G.acceptOnline(+t.dataset.id); if (e) toast(e, 'err'); else { toast('Đã nhận đơn!', 'ok'); $('#onl', m.body).innerHTML = draw(); } }, x: () => m.close() });
}

/* ===== Sảnh ===== */
function renderLobby(view) {
  const busy = SH.tables.filter((t) => t.s === 'busy').length;
  view.innerHTML = `<div class="lobby" id="lobby">
    <div class="lobby-top"><button class="btn pri" data-act="back">← Vào quầy<br/>pha chế</button>
      <div class="lobby-stat"><span>👥 Chờ: <b>${SH.queue.length}</b> khách</span><span>🪑 Bàn: <b>${busy}/${SH.tables.length}</b> bàn</span><span>💰 <b>${fmtK(S.money)}</b></span></div></div>
    <div class="lcard"><div class="lc-h"><h4>🧋 Quầy Pha Chế & Hàng Chờ</h4><span class="pill">Đang chờ: ${SH.queue.length} người</span></div>
      <p class="muted">Khách tự động đến xếp hàng (tối đa ${E.bonus().queue} khách chờ).</p>
      <div class="lobby-q">${SH.queue.map((c) => `<span class="lq">${c.avatar}</span>`).join('') || '<em>Chưa có khách xếp hàng</em>'}</div></div>
    <div class="lcard"><div class="lc-h"><h4>🪑 Khu Bàn Ghế Khách Ngồi</h4><span class="pill y">🪑 +10% ngồi tại quán</span></div>
      <p class="muted">Khách chỉ vào ngồi khi bàn được dọn sạch ✨ — chạm bàn dơ để dọn.</p>
      <div class="tables">${SH.tables.map((t, i) => `<button class="tbl ${t.s}" data-act="table" data-i="${i}" data-table="${i}" aria-label="Bàn ${i + 1}"><span class="t-ico">${t.s === 'busy' ? (t.av || '🧑') : t.s === 'dirty' ? '🧹' : '✨'}</span><small>${t.s === 'busy' ? 'Đang ngồi' : t.s === 'dirty' ? 'Dọn bàn!' : 'Bàn sạch'}</small></button>`).join('')}</div></div>
  </div>`;
  bindActions($('#lobby'), {
    back: () => { SH.view = 'counter'; markDirty('view'); },
    table: (t) => G.cleanTable(+t.dataset.i),
  });
}
let lobbyT = 0;
function lobbyFrame() {
  lobbyT++;
  if (lobbyT % 20 === 0 && $('#lobby')) {
    const busy = SH.tables.filter((t) => t.s === 'busy').length;
    const st = $('.lobby-stat'); if (st) st.innerHTML = `<span>👥 Chờ: <b>${SH.queue.length}</b> khách</span><span>🪑 Bàn: <b>${busy}/${SH.tables.length}</b> bàn</span><span>💰 <b>${fmtK(S.money)}</b></span>`;
  }
}
void SIZE_L_PRICE; void sum; void wait; void emit;
