/**
 * Màn hình bán hàng: khách + bong bóng thoại, quầy trà, thớt pha ly, khay topping, máy đóng nắp,
 * sảnh bàn ghế. Mọi bước đều có hiệu ứng (lấy ly, rót trà, bỏ topping, đóng nắp, giao ly).
 */
import { ITEMS, TEAS, FLAVORS, TOPS, SIZE_L_PRICE } from './config.js';
import { S, on, emit, markDirty, $, $$, h, esc, fmtK, sfx, clamp, wait, sum, rand } from './core.js';
import * as E from './econ.js';
import * as G from './sell.js';
import { SH } from './sell.js';
import { toast, fxText, fxCoins, fxSpark, bindActions, logoHTML, openModal, updateClock } from './ui.js';

/* ===== Hình ly ===== */
const sizePx = { M: [54, 76], L: [64, 90] };
export function cupHTML(c, { mini = false, stamp = true } = {}) {
  const [w, hgt] = sizePx[c.size || 'M'];
  const k = mini ? 0.55 : 1;
  const tea = c.tea ? ITEMS[c.tea] : null;
  const fl = c.flavor ? ITEMS[c.flavor] : null;
  const fill = clamp((c.fill ?? 0) / 1.0, 0, 1.15);
  const liq = tea ? `linear-gradient(${tea.color}, ${tea.color}${fl ? '' : ''})` : 'transparent';
  const flav = fl ? `<i class="c-flav" style="background:${fl.color}"></i>` : '';
  const tops = (c.tops || []).map((t) => `<i class="c-top" style="background-color:${ITEMS[t].color}"></i>`.repeat(3)).join('');
  const lid = c.phase === 'ready' ? '<i class="c-lid"></i>' : '';
  const straw = c.phase === 'ready' ? '<i class="c-straw"></i>' : '';
  const st = stamp && !mini && E.equipLevel('nhanDien') > 0 ? `<span class="c-stamp">${logoHTML(20)}</span>` : '';
  return `<div class="cup ${c.phase || ''}" style="width:${w * k}px;height:${hgt * k}px">
    <div class="c-body"><div class="c-liq" style="height:${Math.min(100, fill * 86)}%;background:${liq}">${flav}</div><div class="c-tops">${tops}</div></div>
    ${lid}${straw}${st}</div>`;
}
function orderCup(o) {
  return cupHTML({ size: o.size, tea: o.tea, flavor: o.flavor, tops: o.tops, fill: 0.95, phase: 'ready' }, { mini: true, stamp: false });
}

/* ===== Dựng màn hình ===== */
let root = null;
export function renderSell() {
  const view = $('#view');
  if (S.phase !== 'sell') return;
  if (SH.view === 'lobby') return renderLobby(view);
  view.innerHTML = `<div class="sell" id="sell">
    <div class="queue-row" id="qrow"></div>
    <div class="cust-zone">
      <div class="cust-av" id="cav"></div>
      <div class="bubble" id="cbub"></div>
    </div>
    <div class="hint" id="hint"></div>
    <div class="shelf">
      <div class="tag-w">QUẦY TRÀ</div>
      <div class="shelf-row">
        <div class="stacks">
          <button class="stack" data-act="cup" data-size="M" aria-label="Lấy ly size M"><div class="cupstack m"><i class="rim"></i></div><b>M</b><span class="cnt" data-cnt="lyM">0</span></button>
          <button class="stack big" data-act="cup" data-size="L" aria-label="Lấy ly size L"><div class="cupstack l"><i class="rim"></i></div><b>L</b><span class="cnt" data-cnt="lyL">0</span></button>
        </div>
        <div class="disps" id="disps">${TEAS.map(dispHTML).join('')}</div>
      </div>
      <div class="flav-row" id="flavs"></div>
    </div>
    <div class="work">
      <div class="work-row">
        <div class="work-l">
          <div class="tag-w sm">PHA LY</div>
          <div class="board" id="wboard"><div class="cupslot" id="cupslot" data-act="boardTap"></div>
            <div class="board-txt" id="boardTxt">Lấy ly<br/>M hoặc L</div>
            <div class="pourbar" id="pourbar"><div class="pb-zone"></div><i id="pbFill"></i></div></div>
        </div>
        <button class="sealer" id="sealer" data-act="seal" aria-label="Máy đóng nắp"><div class="sl-head"></div><div class="sl-lid"></div><div class="sl-body"><span class="sl-led">READY</span><div class="sl-knobs"><i></i><i></i></div></div><div class="sl-slot"></div></button>
        <div class="work-side">
          <button class="phone" data-act="phone" aria-label="Đơn online"><span>📱</span><b id="phoneBadge">0</b></button>
          <button class="trash" data-act="trash" aria-label="Thùng rác">🗑️</button>
        </div>
      </div>
      <div class="trays" id="trays"></div>
    </div>
    <div class="foot"><button class="btn pri lobby-go" data-act="lobby" id="lobbyGo">Ra sảnh → <span id="lobbyCnt">0/0</span></button></div>
    <div class="stream" id="stream"></div>
  </div>`;
  root = $('#sell');
  fillTrays();
  fillFlavors();
  refreshQueue();
  refreshCustomer();
  bindActions(root, sellActs);
  frameSell(0, true);
}
function dispHTML(t) {
  const it = ITEMS[t];
  const locked = !S.unlocked[t];
  const off = S.unlocked[t] && !S.onMenu[t];
  return `<button class="disp ${locked ? 'locked' : ''} ${off ? 'off' : ''}" data-act="disp" data-tea="${t}" aria-label="${it.name}" ${locked ? 'data-locked="1"' : ''}>
    <i class="jlid"></i><div class="jar"><i class="jl" style="background:${it.color}"></i><span class="lab">${it.short}</span>${locked ? '<em class="lk">🔒</em>' : ''}</div><div class="tap"><i class="drip" style="background:${it.color}"></i></div>
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
    const dots = `<i style="background-color:${it.color}"></i>`.repeat(14);
    return `<button class="tray ${locked ? 'locked' : ''} ${off ? 'off' : ''}" data-act="top" data-t="${t}" aria-label="${it.name}"><div class="pile">${dots}</div>${locked ? '<em class="lk">🔒</em>' : ''}<small>${it.name.replace('Trân châu ', 'TC ').replace('Thạch ', 'Th. ')}</small><span class="cnt" data-cnt="${t}">0</span></button>`;
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
  flav: (t) => { const e = G.addFlavor(t.dataset.f); if (e) { toast(e, 'err'); sfx('error'); } else { sfx('drop'); dropFx(t, '#fff'); } },
  top: (t) => {
    const id = t.dataset.t;
    if (!S.unlocked[id]) return toast('Mở khóa trong Nâng cấp › Topping', 'err');
    if (!S.onMenu[id]) return toast('Món đang tắt khỏi menu', 'err');
    const e = G.addTop(id);
    if (e) { toast(e, 'err'); sfx('error'); } else dropFx(t, ITEMS[id].color);
  },
  seal: () => { const e = G.sealCup(); if (e) { toast(e, 'err'); sfx('error'); } },
  boardTap: () => { if (SH.board?.phase === 'ready') doServe(); },
  trash: () => { if (SH.board) { G.trashCup(); sfx('pop'); toast('Đã đổ ly', ''); } },
  phone: () => openOnlineList(),
  lobby: () => { SH.view = 'lobby'; markDirty('view'); },
  sel: (t) => G.selectCustomer(+t.dataset.cid),
};
function doServe() {
  const cupEl = $('#cupslot .cup');
  const front = G.frontCustomer();
  const r = G.serve();
  if (typeof r === 'string') { toast(r, 'err'); sfx('error'); return; }
  const target = $('#cav') || undefined;
  if (cupEl && target) {
    const a = cupEl.getBoundingClientRect(), b = target.getBoundingClientRect();
    const clone = cupEl.cloneNode(true);
    clone.style.cssText = `position:fixed;left:${a.left}px;top:${a.top}px;z-index:80;pointer-events:none`;
    document.body.appendChild(clone);
    clone.animate([{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${b.left - a.left}px,${b.top - a.top + 20}px) scale(.5)`, opacity: 0.1 }], { duration: 480, easing: 'ease-in' }).onfinish = () => clone.remove();
  }
  const anchor = target || $('#hud');
  const star = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
  fxText(`+${fmtK(r.pay)}${r.tip ? ' (+' + fmtK(r.tip) + ' boa)' : ''}`, anchor, '');
  setTimeout(() => fxText(star, anchor, r.stars >= 4 ? 'g' : r.stars <= 2 ? 'r' : ''), 220);
  if (r.issues.length) setTimeout(() => fxText(r.issues.slice(0, 2).join(', '), anchor, 'r'), 520);
  if (r.luck) setTimeout(() => fxText('🍀 MAY MẮN ×2!', anchor, 'g'), 700);
  fxCoins(anchor, r.stars >= 4 ? 7 : 3);
  if (r.stars >= 5) fxSpark(anchor, 10);
  sfx(r.stars >= 4 ? 'success' : 'sad');
  sfx('coin');
  void front;
}

/* ===== Hiệu ứng bước ===== */
function dropFx(fromEl, color) {
  sfx('drop');
  const slot = $('#cupslot');
  if (!fromEl || !slot) return;
  const cupEl = $('.cup', slot) || slot;
  const a = fromEl.getBoundingClientRect(), b = cupEl.getBoundingClientRect();
  // trân châu rơi tới mặt trà trong ly thì biến mất: trà càng đầy thì biến mất càng sớm (càng gần miệng ly)
  const liq = cupEl.querySelector?.('.c-liq');
  const lr = liq ? liq.getBoundingClientRect() : null;
  const surfaceY = lr && lr.height > 2 ? lr.top + 3 : b.bottom - 8;
  const n = 5, STEPS = 22, SPLIT = 0.62;
  for (let k = 0; k < n; k++) {
    const sx = a.left + a.width / 2 + rand(-10, 10), sy = a.top + a.height / 2;
    const ball = h(`<div class="fx-ball" style="left:${sx - 7}px;top:${sy - 7}px;background-color:${color}"></div>`);
    document.body.appendChild(ball);
    // đích 1: bay vòng lên trên miệng ly · đích 2: rơi thẳng xuống lòng ly
    const rx = b.left + b.width / 2 + rand(-b.width * 0.18, b.width * 0.18) - sx, ry = b.top - 16 - sy;
    const dy2 = surfaceY - (sy + ry);
    const rise = Math.max(40, Math.min(90, Math.abs(ry) * 0.35 + 36));
    const frames = [];
    for (let i = 0; i <= STEPS; i++) {
      const t = i / STEPS;
      let x, y, sc = 1, op = 1;
      if (t <= SPLIT) {
        const u = t / SPLIT;
        x = rx * (1 - Math.pow(1 - u, 2));
        y = ry * u - rise * 4 * u * (1 - u);
        sc = 1 + 0.15 * Math.sin(u * Math.PI);
      } else {
        const u = (t - SPLIT) / (1 - SPLIT);
        x = rx; y = ry + dy2 * u * u;
        sc = 1 - 0.25 * u; op = u > 0.85 ? 1 - (u - 0.85) / 0.15 : 1;
      }
      frames.push({ transform: `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) scale(${sc.toFixed(2)})`, opacity: op, offset: t });
    }
    ball.animate(frames, { duration: 820, delay: k * 95, easing: 'linear', fill: 'backwards' }).onfinish = () => {
      ball.remove();
      if (k === 0) { slot.classList.remove('plop'); void slot.offsetWidth; slot.classList.add('plop'); }
      if (k === n - 1) splash(slot, color, surfaceY);
    };
  }
}
/** Vòng sóng + giọt bắn tại miệng ly. */
function splash(cup, color, atY) {
  const r = cup.getBoundingClientRect();
  const x = r.left + r.width / 2, y = atY ?? r.top + r.height * 0.5;
  fxSpark({ x, y }, 5);
  const ring = h(`<div class="fx-ripple" style="left:${x}px;top:${y}px;border-color:${color}"></div>`);
  document.body.appendChild(ring);
  setTimeout(() => ring.remove(), 520);
}
function flyCupIn(size) {
  const slot = $('#cupslot'), cupEl = slot?.firstElementChild;
  const stack = $(`.stack[data-size="${size}"]`);
  if (!cupEl || !stack) return;
  const a = stack.getBoundingClientRect(), b = cupEl.getBoundingClientRect();
  cupEl.animate([
    { transform: `translate(${a.left + a.width / 2 - (b.left + b.width / 2)}px,${a.top - b.top - 10}px) scale(.6) rotate(-18deg)`, opacity: 0.2 },
    { transform: 'translate(0,0) scale(1) rotate(0)', opacity: 1 },
  ], { duration: 420, easing: 'cubic-bezier(.3,1.35,.55,1)' });
}
function sealAnim() {
  const cupEl = $('#cupslot .cup'), sealer = $('#sealer');
  if (!cupEl || !sealer) return;
  const dur = Math.max(600, (SH.board?.sealMax || 1.2) * 1000);
  const r = cupEl.getBoundingClientRect();
  sealer.classList.add('press');
  // nắp rơi xuống miệng ly, rồi ép nhẹ
  const lid = h(`<div class="fx-lid" style="left:${r.left - 3}px;top:${r.top - 6}px;width:${r.width + 6}px"></div>`);
  document.body.appendChild(lid);
  lid.animate([
    { transform: 'translateY(-64px) scaleX(.86)', opacity: 0, offset: 0 },
    { transform: 'translateY(-44px) scaleX(.92)', opacity: 1, offset: 0.2 },
    { transform: 'translateY(0) scaleX(1)', opacity: 1, offset: 0.62, easing: 'cubic-bezier(.4,0,1,.7)' },
    { transform: 'translateY(4px) scaleX(1.04)', opacity: 1, offset: 0.74 },
    { transform: 'translateY(0) scaleX(1)', opacity: 1, offset: 0.86 },
    { transform: 'translateY(0) scaleX(1)', opacity: 1, offset: 1 },
  ], { duration: dur, easing: 'ease-out' }).onfinish = () => lid.remove();
  cupEl.animate([
    { transform: 'none', offset: 0 }, { transform: 'none', offset: 0.6 },
    { transform: 'scale(1.05,.93)', offset: 0.72 }, { transform: 'scale(.99,1.03)', offset: 0.86 }, { transform: 'none', offset: 1 },
  ], { duration: dur, easing: 'ease-out' });
  setTimeout(() => sealer.classList.remove('press'), dur);
  sfx('seal');
}
on('cup:pick', (size) => { setTimeout(() => { updateBoard(true); flyCupIn(size); sfx('cup'); }, 0); });
on('seal:start', () => { updateBoard(true); sealAnim(); });
on('seal:done', () => { sfx('ding'); updateBoard(true); const cs = $('#cupslot'); if (cs) { fxSpark({ x: cs.getBoundingClientRect().left + cs.offsetWidth / 2, y: cs.getBoundingClientRect().top + cs.offsetHeight * 0.35 }, 6); cs.classList.remove('plop'); void cs.offsetWidth; cs.classList.add('plop'); } const s = $('#sealer'); s?.classList.add('ding'); setTimeout(() => s?.classList.remove('ding'), 600); });
on('top', () => updateBoard(true));
on('flavor', () => updateBoard(true));
on('auto:pour', () => updateBoard(true));
on('trash', () => updateBoard(true));
on('queue', () => { if (SH.on && S.phase === 'sell' && SH.view === 'counter') { refreshQueue(); refreshCustomer(); } });
on('sel', () => { refreshQueue(); refreshCustomer(); });
on('served', () => { updateBoard(true); refreshQueue(); refreshCustomer(); });
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
  row.innerHTML = SH.queue.map((c) => `<button class="qav ${front === c ? 'on' : ''}" data-act="sel" data-cid="${c.id}" aria-label="Khách ${esc(c.tag)}"><span class="ring" data-ring="${c.id}" style="--p:${(c.p / c.maxP * 100).toFixed(0)}"></span><b>${c.avatar}</b></button>`).join('') || '<span class="q-empty">Chưa có khách...</span>';
}
function refreshCustomer() {
  const av = $('#cav'), bub = $('#cbub');
  if (!av) return;
  const c = G.frontCustomer();
  if (!c) {
    av.innerHTML = '<span class="idle">☕</span>';
    bub.innerHTML = '<div class="btxt dim">Quầy đang vắng... chuẩn bị ly nước thật ngon nhé!</div>';
    return;
  }
  const o = c.order;
  av.innerHTML = `<span class="face">${c.avatar}</span>`;
  bub.innerHTML = `<div class="b-row">${orderCup(o)}<div><span class="atag">${esc(c.tag)}</span><div class="btxt">${esc(c.text)}</div></div></div>
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
  const liq = slot.querySelector('.c-liq');
  if (liq) liq.style.height = `${Math.min(100, b.fill * 86)}%`;
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
  // vòi rót + dòng chảy
  const st = $('#stream');
  const b = SH.board;
  if (b?.pouring && b.tea) {
    const d = $(`.disp[data-tea="${b.tea}"] .tap`), cup = $('#cupslot');
    if (d && cup && st) {
      const a = d.getBoundingClientRect(), c2 = cup.getBoundingClientRect(), r0 = root.getBoundingClientRect();
      st.style.cssText = `display:block;left:${a.left + a.width / 2 - 3 - r0.left}px;top:${a.bottom - r0.top}px;height:${Math.max(0, c2.top + c2.height * 0.2 - a.bottom)}px;background-color:${ITEMS[b.tea].color};color:${ITEMS[b.tea].color}`;
      if (Math.random() < 0.15) sfx('pour');
    }
  } else if (st) st.style.display = 'none';
  if (cntT <= 0 || force) {
    cntT = 0.25;
    for (const el of $$('[data-cnt]', root)) {
      const id = el.dataset.cnt, q = E.stockQty(id);
      el.textContent = q; el.parentElement.classList.toggle('empty', q === 0);
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
