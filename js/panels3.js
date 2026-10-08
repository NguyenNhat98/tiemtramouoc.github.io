/**
 * Menu Home (3/3): Vườn cây · Thú cưng · Khởi nghiệp · Sảnh Trà · Đánh giá · Tổng kết · Bạn bè · Sưu tầm.
 */
import {
  ITEMS, SEEDS, PLOTS, PLOTS_START, plotCost, PETS, PET_CARE, PET_DECOR, LOCATIONS, LOCATION_COST, SEASONS, DAY_EVENTS, GACHA, SECRET_RECIPES, GIFT_COST, NPC_FRIENDS, WEATHERS,
} from './config.js';
import {
  S, markDirty, requestSave, esc, fmt, fmtK, sum, sfx, clamp, rand, randInt, pick, chance, wpick, emit, $,
} from './core.js';
import * as E from './econ.js';
import { toast, fxSpark, fxText, openModal, alertBox, bindActions, plHTML, aggregate, confirmBox } from './ui.js';

/* ===== VƯỜN CÂY ===== */
const seedDef = (id) => SEEDS.find((s) => s.id === id);
function plotHTML(i) {
  const g = S.garden;
  if (i >= g.unlocked) return `<button class="plot locked" data-act="punlock" aria-label="Mở khóa ô đất"><span>🔒</span><small>${fmtK(plotCost(i + 1))}</small></button>`;
  const p = g.plots[i];
  if (!p.seed) return `<button class="plot empty" data-act="plant" data-i="${i}" aria-label="Ô đất trống"><span>🟫</span><small>Trống</small></button>`;
  const sd = seedDef(p.seed);
  const left = sd.days - p.grown;
  if (left <= 0) return `<button class="plot ready" data-act="harv1" data-i="${i}" aria-label="Thu hoạch"><span>${sd.icon}</span><small>Chín rồi!</small></button>`;
  return `<button class="plot grow" data-act="plant" data-i="${i}" aria-label="Đang lớn"><span>${p.grown ? '🌿' : '🌱'}</span><small>${left} ngày</small></button>`;
}
function harvest(i) {
  const p = S.garden.plots[i], sd = p?.seed && seedDef(p.seed);
  if (!sd || p.grown < sd.days) return 0;
  const q = randInt(sd.yield[0], sd.yield[1]);
  const id = sd.gives;
  if (!S.unlocked[id]) { S.unlocked[id] = true; S.onMenu[id] = true; }
  E.addStock(id, q);
  p.seed = null; p.grown = 0;
  return q;
}
const vuon = {
  html() {
    const g = S.garden;
    const growing = g.plots.slice(0, g.unlocked).filter((p) => p.seed && p.grown < seedDef(p.seed).days).length;
    const ready = g.plots.slice(0, g.unlocked).filter((p) => p.seed && p.grown >= seedDef(p.seed).days).length;
    const empty = g.plots.slice(0, g.unlocked).filter((p) => !p.seed).length;
    const sel = S.subtab.seed || SEEDS[0].id;
    return `<div class="farm-h"><h4>🪴 NÔNG TRẠI ORGANIC (${PLOTS} MẢNH ĐẤT)</h4><p>Mảnh đất nông trại xanh mướt với ${PLOTS} luống đất màu mỡ. Nhấn vào từng mảnh đất để gieo hạt, tưới nước và thu hoạch nông sản sạch miễn phí vào kho tiệm trà!</p></div>
      <div class="plots">${Array.from({ length: PLOTS }, (_, i) => plotHTML(i)).join('')}</div>
      <div class="farm-btns"><button class="btn blue" data-act="water"><b>Tưới Nước</b><small>${growing} ô cây${g.watered ? ' · đã tưới' : ''}</small></button><button class="btn orange" data-act="harvest"><b>Thu Hoạch</b><small>${ready ? ready + ' ô chín' : 'Chờ quả chín'}</small></button>
        <button class="btn green" data-act="replant"><b>Trồng Lại</b><small>${empty} ô trống</small></button><button class="btn purple" data-act="shop"><b>Cửa Hàng</b><small>Hạt giống</small></button></div>
      <div class="seedbox"><b>🎒 Kho túi hạt giống của bạn:</b> <small>Đã mở: ${g.unlocked}/${PLOTS} mảnh</small>
        <div class="seeds">${SEEDS.map((s) => `<button class="seed ${sel === s.id ? 'on' : ''}" data-act="selseed" data-id="${s.id}"><span>${s.icon}</span><b>${s.name}</b><em>${g.seeds[s.id] || 0}</em></button>`).join('')}</div>
        <small class="muted">Chạm một ô đất trống để gieo hạt đang chọn. Cây lớn thêm mỗi ngày nếu bạn đã tưới nước.</small></div>`;
  },
  acts: {
    selseed: (t) => { S.subtab.seed = t.dataset.id; markDirty('panel'); },
    plant: (t) => {
      const i = +t.dataset.i, p = S.garden.plots[i];
      if (p.seed) return toast('Cây đang lớn, hãy kiên nhẫn 🌱', '');
      const id = S.subtab.seed || SEEDS[0].id;
      if (!(S.garden.seeds[id] > 0)) return toast('Hết hạt giống này, vào Cửa Hàng mua thêm!', 'err');
      S.garden.seeds[id]--; p.seed = id; p.grown = 0; sfx('pop'); markDirty('panel'); requestSave();
    },
    harv1: (t) => { const q = harvest(+t.dataset.i); if (q) { sfx('success'); fxSpark(t, 8); toast(`Thu hoạch +${q} phần nguyên liệu!`, 'ok'); markDirty('panel'); requestSave(); } },
    harvest: () => {
      let n = 0, items = {};
      S.garden.plots.forEach((p, i) => { const s = p.seed && seedDef(p.seed); if (s && p.grown >= s.days) { const k = s.gives; const q = harvest(i); n++; items[k] = (items[k] || 0) + q; } });
      if (!n) return toast('Chưa có ô nào chín', 'err');
      sfx('success'); toast('Thu hoạch: ' + Object.entries(items).map(([k, q]) => `${ITEMS[k].icon}+${q}`).join(' '), 'ok'); markDirty('panel'); requestSave();
    },
    water: () => {
      const g = S.garden;
      if (!g.plots.some((p) => p.seed)) return toast('Chưa có cây nào để tưới', 'err');
      g.watered = true; sfx('pour'); toast('💧 Đã tưới nước! Cây sẽ lớn thêm khi sang ngày mới.', 'ok'); markDirty('panel');
    },
    replant: () => {
      const id = S.subtab.seed || SEEDS[0].id;
      let n = 0;
      for (let i = 0; i < S.garden.unlocked; i++) { const p = S.garden.plots[i]; if (!p.seed && S.garden.seeds[id] > 0) { p.seed = id; p.grown = 0; S.garden.seeds[id]--; n++; } }
      if (!n) return toast('Không có ô trống hoặc đã hết hạt giống', 'err');
      sfx('pop'); toast(`Đã trồng ${n} ô`, 'ok'); markDirty('panel'); requestSave();
    },
    punlock: () => {
      const g = S.garden, cost = plotCost(g.unlocked + 1);
      confirmBox('Mở thêm mảnh đất?', `Mở ô số ${g.unlocked + 1} với giá ${fmtK(cost)}.`, () => { if (S.money < cost) return toast('Không đủ tiền', 'err'); S.money -= cost; g.unlocked++; sfx('unlock'); markDirty('hud', 'panel'); requestSave(); }, 'Mở khóa');
    },
    shop: () => {
      const m = openModal({ id: 'seedshop', cls: 'small', html: `<h3 class="m-title">🛒 Cửa hàng hạt giống</h3>${SEEDS.map((s) => `<div class="nrow"><span class="k-ico">${s.icon}</span><div class="k-main"><b>${s.name}</b><small>Lớn trong ${s.days} ngày · thu ${s.yield[0]}-${s.yield[1]} phần ${ITEMS[s.gives].name}</small></div><button class="btn gold sm" data-act="buy" data-id="${s.id}">${fmtK(s.price)}</button></div>`).join('')}<button class="btn ghost block" data-act="x">Đóng</button>` });
      bindActions(m.body, { buy: (t) => { const s = seedDef(t.dataset.id); if (S.money < s.price) return toast('Không đủ tiền', 'err'); S.money -= s.price; S.garden.seeds[s.id] = (S.garden.seeds[s.id] || 0) + 1; sfx('coin'); markDirty('hud', 'panel'); toast(`+1 ${s.name}`, 'ok'); requestSave(); }, x: () => m.close() });
    },
  },
};

/* ===== THÚ CƯNG ===== */
const bar = (v) => `<div class="bar ${v < 30 ? 'danger' : v < 60 ? 'warn' : ''}"><i style="width:${Math.round(v)}%"></i></div>`;
function petCard(k) {
  const p = PETS[k];
  const can = k === 'capybara' ? E.secretCount() >= p.secret : true;
  const sel = (S.subtab.pet || 'shiba') === k;
  return `<button class="petchip ${sel ? 'on' : ''}" data-act="petsel" data-k="${k}">${p.icon} ${p.name.split(' ').slice(0, 2).join(' ')} ${can ? '' : '<em>(Chưa mở)</em>'}</button>`;
}
const thucung = {
  html() {
    if (S.pet) {
      const p = S.pet, info = PETS[p.kind];
      const act = E.petActive();
      return `<div class="petcard owned"><div class="pet-big">${info.icon}</div><h4>${info.name}</h4><p class="muted">${act ? '✅ Buff đang kích hoạt (mọi chỉ số ≥ 60 trung bình)' : '⚠️ Cần chăm sóc để kích hoạt buff (trung bình ≥ 60)'}</p>
        <div class="pstats">${[['hunger', '🍖 No'], ['joy', '💗 Vui vẻ'], ['clean', '🛁 Sạch sẽ'], ['energy', '😴 Khỏe']].map(([k, l]) => `<div class="ps"><span>${l}</span>${bar(p[k])}<b>${Math.round(p[k])}</b></div>`).join('')}</div>
        <div class="pcare">${PET_CARE.map((c) => `<button class="btn soft" data-act="care" data-id="${c.id}">${c.icon}<br/>${c.name}${c.cost ? `<small>${fmtK(c.cost)}</small>` : ''}</button>`).join('')}</div>
        <div class="buffs">${info.buffs.map((b) => `<p>${b}</p>`).join('')}</div>
        <p class="muted">Decor đã mua: ${Object.keys(S.petDecor).length}/${PET_DECOR.length} · mua thêm ở Nâng cấp › Decor Thú Cưng.</p></div>
        ${S.pet2 ? `<div class="petcard owned"><div class="pet-big">🦫</div><h4>${PETS.capybara.name} <span class="chip green">Nuôi chung</span></h4>${PETS.capybara.buffs.map((b) => `<p>${b}</p>`).join('')}</div>` : ''}
        ${!S.pet2 && E.secretCount() >= 7 ? '<button class="btn pri block" data-act="capy">🦫 Nhận nuôi Cáp Bi (miễn phí)</button>' : ''}`;
    }
    const k = S.subtab.pet || 'shiba';
    const p = PETS[k];
    const sc = E.secretCount();
    const body = k === 'capybara' ? `<div class="petcard cap"><div class="pet-big">🦫</div><h4>🦫 CÁP BI ĐIỀM ĐẠM (CAPYBARA)</h4><p>Thú cưng độc bản quý hiếm dành riêng cho Nhà Sáng Tạo Tiệm Trà Sữa Tinh Hoa! <b>Kết hợp trọn vẹn cả sức mạnh của Chó và Mèo</b>, đặc biệt có thể nuôi chung song song cùng 1 Tó hoặc 1 Mèo!</p>
        <div class="buffs"><b>4 ĐẶC QUYỀN TỐI THƯỢNG CỦA CÁP PI:</b>${p.buffs.map((b) => `<p>${b}</p>`).join('')}</div>
        <div class="cond"><b>⭐ Điều kiện mở khóa: ${p.secret} Công thức độc bản</b><div class="bar"><i style="width:${sc / p.secret * 100}%"></i></div><small>Bạn đã sáng tạo ${sc}/${p.secret} công thức độc bản trong Sổ Tay Sưu Tầm. Cần thêm ${Math.max(0, p.secret - sc)} công thức nữa để mở khóa Cáp Bi!</small></div>
        <button class="btn ${sc >= p.secret ? 'pri' : 'soft'} block" data-act="${sc >= p.secret ? 'capy' : 'goto'}" data-to="suutam">${sc >= p.secret ? '🦫 Nhận nuôi Cáp Bi' : '📖 Đến Mục Sưu Tầm Sáng Tạo Công Thức (' + sc + '/' + p.secret + ')'}</button></div>`
      : `<div class="petcard"><div class="pet-big">${p.icon}</div><h4>🏡 CĂN PHÒNG THÚ CƯNG MƠ ƯỚC</h4><p>Bạn được chọn <b>1 trong 2 bé cưng</b> để đồng hành cùng tiệm của mình. Hãy chọn người bạn phù hợp nhất với chiến lược kinh doanh của bạn! <small>Sau khi chọn, bạn có thể đổi lại bé kia nhưng cấp thú cưng sẽ bị reset về cấp 1!</small></p>
        <div class="buffs"><h5>${p.icon} ${p.name}</h5>${p.buffs.map((b) => `<p>${b}</p>`).join('')}</div>
        <div class="adopt"><b>Phí nhận nuôi ${p.icon} ${p.name}:</b> <span class="money">${fmt(p.adopt)}</span><p>Tiền két quán hiện có: ${fmtK(S.money)} ${S.money >= p.adopt ? '✅' : `❌ (Cần thêm ${fmtK(p.adopt - S.money)})`}</p></div>
        <button class="btn ${S.money >= p.adopt ? 'pri' : 'ghost'} block" data-act="adopt" data-k="${k}">🐾 Nhận Nuôi ${p.name} (${fmtK(p.adopt)})</button></div>`;
    return `<div class="petrow">${['shiba', 'meo', 'capybara'].map(petCard).join('')}</div>${body}`;
  },
  acts: {
    petsel: (t) => { S.subtab.pet = t.dataset.k; markDirty('panel'); },
    goto: (t) => emit('goto', t.dataset.to),
    adopt: (t) => {
      const k = t.dataset.k, p = PETS[k];
      if (S.money < p.adopt) return toast('Không đủ tiền nhận nuôi', 'err');
      confirmBox('Nhận nuôi ' + p.name + '?', `Phí ${fmtK(p.adopt)}. Bé sẽ đồng hành cùng quán.`, () => { S.money -= p.adopt; S.pet = { kind: k, hunger: 80, joy: 80, clean: 80, energy: 80 }; sfx('level'); markDirty('hud', 'panel', 'tiles'); requestSave(); toast('🐾 Chào mừng thành viên mới!', 'gold'); }, 'Nhận nuôi');
    },
    capy: () => { if (E.secretCount() < 7) return; S.pet2 = { kind: 'capybara' }; S.pet = S.pet || { kind: 'capybara', hunger: 80, joy: 80, clean: 80, energy: 80 }; sfx('level'); markDirty('panel', 'tiles'); requestSave(); toast('🦫 Cáp Bi đã về quán!', 'gold'); },
    care: (t) => {
      const c = PET_CARE.find((x) => x.id === t.dataset.id);
      if (S.money < c.cost) return toast('Không đủ tiền', 'err');
      S.money -= c.cost;
      const boost = S.petDecor.app ? 1.3 : 1;
      S.pet[c.stat] = clamp(S.pet[c.stat] + c.gain * boost, 0, 100);
      sfx('pop'); fxText('+' + c.name, t, 'g'); markDirty('hud', 'panel'); requestSave();
    },
  },
};

/* ===== KHỞI NGHIỆP ===== */
const MAP_PATH = '30,5 45,4 58,10 65,16 62,22 55,26 52,32 56,38 62,44 66,50 68,56 66,62 63,68 66,74 68,80 64,86 58,92 52,96 46,98 40,96 38,90 42,84 50,80 52,72 50,64 44,58 40,50 38,42 40,34 34,28 30,22 26,16 24,10';
function locCard(id) {
  const l = LOCATIONS[id];
  const here = S.location === id;
  return `<div class="loccard ${here ? 'here' : ''}" id="loc-${id}"><div class="loc-img ${id}">${sceneHTML(id)}<span class="loc-tag">${l.icon} ${esc(l.tag)}</span><h4>${l.icon} ${esc(l.name)}</h4></div>
    <div class="loc-body"><i class="slogan">"${esc(l.slogan)}"</i><p>${esc(l.desc)}</p>
    <div class="pro"><b>🟢 Lợi Thế Kinh Doanh (Ưu Điểm):</b>${l.pro.map((x) => `<p>• ${esc(x)}</p>`).join('')}</div>
    ${l.con.length ? `<div class="con"><b>🔴 Thử Thách Vận Hành (Khó Khăn):</b>${l.con.map((x) => `<p>• ${esc(x)}</p>`).join('')}</div>` : ''}
    <button class="btn ${here ? 'ghost' : 'pri'} block" data-act="startup" data-id="${id}" ${here ? 'disabled' : ''}>${here ? '✅ Đang Đặt Quán Tại Đây' : `🚀 Khởi Nghiệp Tại ${l.name} · ${fmtK(LOCATION_COST)}`}</button></div></div>`;
}
const SCENES = {
  goc: [['🏡', 46, 64, 8], ['🌳', 16, 44, 8], ['🪴', 80, 34, 8], ['🧋', 30, 30, 6]],
  hanoi: [['🏯', 60, 60, 10], ['🌸', 14, 36, 10], ['🛕', 82, 44, 10], ['🏮', 38, 26, 60], ['🪷', 46, 28, 4]],
  hcm: [['🏙️', 58, 74, 8], ['🌇', 16, 50, 12], ['🛵', 36, 30, 4], ['🌆', 84, 46, 8]],
  hue: [['🏯', 54, 70, 8], ['🌸', 18, 36, 8], ['🛶', 82, 30, 4], ['🏮', 36, 26, 56]],
  danang: [['🌉', 54, 72, 6], ['🏖️', 16, 44, 6], ['⛱️', 84, 32, 6], ['🌊', 36, 30, 2]],
  sapa: [['🏔️', 48, 80, 4], ['🌾', 16, 40, 6], ['☁️', 80, 30, 54], ['🌲', 86, 38, 6], ['🍵', 30, 28, 4]],
  halong: [['⛵', 46, 50, 14], ['🏝️', 18, 52, 6], ['🪨', 76, 42, 6], ['🌊', 50, 30, 2]],
  bmt: [['☕', 22, 42, 8], ['🌳', 56, 58, 8], ['🐘', 82, 44, 6], ['🌿', 38, 30, 4]],
  canTho: [['🛶', 40, 46, 6], ['🍍', 16, 36, 8], ['🥥', 80, 36, 8], ['🌴', 60, 58, 8]],
  caMau: [['🦀', 22, 38, 6], ['🌳', 54, 54, 8], ['🦐', 80, 30, 6], ['🌊', 38, 28, 2]],
  hoangSa: [['🏝️', 46, 66, 6], ['🌴', 22, 46, 8], ['⚓', 82, 34, 6], ['🚢', 66, 36, 34]],
};
const sceneHTML = (id) => `<div class="loc-scene" aria-hidden="true">${(SCENES[id] || []).map(([e, x, sz, b]) => `<span style="left:${x}%;font-size:${sz}px;bottom:${b}px">${e}</span>`).join('')}</div>`;
const VM_BANDS = [['#f7e7c0', 0, 24], ['#f3e0b4', 24, 44], ['#f9e9c6', 44, 60], ['#f4e2b8', 60, 100]];
const vmapSvg = () => `<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
  <defs><clipPath id="vnclip"><polygon points="${MAP_PATH}"/></clipPath>
    <pattern id="vwave" width="6" height="4" patternUnits="userSpaceOnUse"><path d="M0 2 Q1.5 0 3 2 T6 2" fill="none" stroke="#9cc7cf" stroke-width=".25" opacity=".7"/></pattern></defs>
  <rect width="100" height="100" fill="#eedfb4"/>
  <rect width="100" height="100" fill="url(#vwave)" opacity="0"/>
  <polygon points="45,0 45,4 58,10 65,16 62,22 55,26 52,32 56,38 62,44 66,50 68,56 66,62 63,68 66,74 68,80 64,86 58,92 52,96 46,98 40,100 100,100 100,0" class="sea"/>
  <polygon points="45,0 45,4 58,10 65,16 62,22 55,26 52,32 56,38 62,44 66,50 68,56 66,62 63,68 66,74 68,80 64,86 58,92 52,96 46,98 40,100 100,100 100,0" fill="url(#vwave)"/>
  <polygon points="${MAP_PATH}" fill="none" stroke="#b9dde2" stroke-width="2.4" stroke-linejoin="round" opacity=".7"/>
  <g clip-path="url(#vnclip)">${VM_BANDS.map(([c, y0, y1]) => `<rect x="0" y="${y0}" width="100" height="${y1 - y0}" fill="${c}"/>`).join('')}
    <path d="M30 20 L40 25 L46 22 M40 25 L42 34 L50 36 M42 34 L40 44 M50 36 L56 40 M44 58 L54 60 M54 60 L60 64 M50 70 L58 72 M52 80 L58 82 M46 90 L54 90" class="prov"/>
    <path d="M36 18 Q44 26 41 33 T47 39" class="river"/><path d="M46 70 Q52 78 50 86 T56 96" class="river"/>
  </g>
  <polygon points="${MAP_PATH}" class="land"/>
  <g class="isl"><circle cx="86" cy="53" r="1"/><circle cx="83" cy="55" r=".8"/><circle cx="89" cy="56" r=".7"/><circle cx="85" cy="72" r=".9"/><circle cx="89" cy="76" r=".8"/><circle cx="83" cy="78" r=".7"/><circle cx="91" cy="80" r=".9"/><circle cx="34" cy="90" r="1.6"/></g>
</svg>
<span class="vm-d vm-lbl" style="left:80%;top:38%">BIỂN ĐÔNG</span><span class="vm-d vm-lbl dim" style="left:12%;top:6%">TRUNG QUỐC</span><span class="vm-d vm-lbl dim" style="left:12%;top:46%">LÀO</span><span class="vm-d vm-lbl dim" style="left:16%;top:78%">CAMPUCHIA</span><span class="vm-d vm-lbl dim" style="left:16%;top:97%">VỊNH THÁI LAN</span>
<span class="vm-d" style="left:20%;top:11%;font-size:26px">⛰️</span><span class="vm-d" style="left:12%;top:20%;font-size:20px">🌲</span><span class="vm-d" style="left:30%;top:32%;font-size:22px">🌿</span><span class="vm-d" style="left:34%;top:60%;font-size:22px">🌳</span>
<span class="vm-d vm-boat" style="left:82%;top:24%">⛵</span><span class="vm-d vm-boat" style="left:76%;top:62%;animation-delay:-1.5s">🚢</span><span class="vm-d vm-boat" style="left:72%;top:92%;animation-delay:-3s">🛶</span>
<span class="vm-d" style="left:88%;top:8%;font-size:26px">🧭</span><span class="vm-d" style="left:74%;top:47%;font-size:16px">🐚</span><span class="vm-d" style="left:90%;top:90%;font-size:22px">🐙</span>
<div class="vm-legend"><span>📍 Quán trà</span><span>🏝️ Đảo</span></div>`;

const khoinghiep = {
  html() {
    const pins = Object.entries(LOCATIONS).map(([id, l]) => `<button class="pin ${S.location === id ? 'on' : ''}" style="left:${l.map[0]}%;top:${l.map[1]}%" data-act="pin" data-id="${id}" aria-label="${esc(l.name)}"><span>${l.icon}</span><small>${esc(l.name)}</small></button>`).join('');
    const cur = LOCATIONS[S.location];
    return `<div class="cur-loc"><span class="chip y">🏠 TIỆM TRÀ GỐC (BAN ĐẦU)</span><span class="chip green">⭐ ĐANG KINH DOANH</span><h4>${cur.icon} ${esc(cur.name)}</h4><i>"${esc(cur.slogan)}"</i><p>${esc(cur.desc)}</p></div>
      <h4 class="subh">Bản Đồ Khởi Nghiệp Xuyên Việt</h4><p class="muted">Chạm vào các biểu tượng ghim trên bản đồ hoặc danh sách bên dưới để chọn địa điểm mở quán. Mỗi tỉnh thành mang lại lợi thế doanh thu và thử thách vận hành độc bản!</p>
      <div class="vmap">${vmapSvg()}${pins}</div>
      <h4 class="subh">Danh Sách Địa Điểm Kinh Doanh</h4>${Object.keys(LOCATIONS).map(locCard).join('')}`;
  },
  acts: {
    pin: (t) => {
      const el = document.getElementById('loc-' + t.dataset.id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el?.classList.add('flash'); setTimeout(() => el?.classList.remove('flash'), 1400);
    },
    startup: (t) => {
      const l = LOCATIONS[t.dataset.id];
      if (S.money < LOCATION_COST) return toast('Không đủ tiền khởi nghiệp', 'err');
      confirmBox(`Khởi nghiệp tại ${l.name}?`, `Chi phí ${fmtK(LOCATION_COST)}. Quán chuyển sang vùng mới: đổi thời tiết, lợi thế và thử thách vận hành.`, () => {
        S.money -= LOCATION_COST; S.location = t.dataset.id; S.forecast = []; E.ensureForecast(); sfx('level');
        markDirty('hud', 'panel', 'board', 'view'); requestSave(); toast(`🚀 Đã khởi nghiệp tại ${l.name}!`, 'gold');
      }, 'Khởi nghiệp');
    },
  },
};

/* ===== SẢNH TRÀ (xem trước ở Home) ===== */
const sanh = {
  html() {
    const b = E.bonus();
    return `<div class="lobby-top"><div class="lobby-stat"><span>👥 Chờ: <b>0</b> khách</span><span>🪑 Bàn: <b>0/${b.tables}</b> bàn</span><span>💰 <b>${fmtK(S.money)}</b></span></div></div>
      <div class="lcard"><div class="lc-h"><h4>🧋 Quầy Pha Chế & Hàng Chờ</h4><span class="pill">Tối đa ${b.queue} khách</span></div><p class="muted">Khách tự động đến xếp hàng (tối đa ${b.queue} khách chờ). Mở rộng quầy ở Nâng cấp › Trang bị để chờ được nhiều hơn.</p><div class="lobby-q"><span class="lq">🙂</span><span class="lq">😀</span><span class="lq">🧑</span><span class="lq dim">＋</span></div></div>
      <div class="lcard"><div class="lc-h"><h4>🪑 Khu Bàn Ghế Khách Ngồi</h4><span class="pill y">🪑 +10% ngồi tại quán</span></div><p class="muted">Khách chỉ vào ngồi khi bàn được dọn sạch ✨ — trong ca bán bấm <b>Ra sảnh →</b> để dọn bàn dơ nhận tiền boa!</p>
        <div class="tables">${Array.from({ length: b.tables }, (_, i) => `<div class="tbl free"><span class="t-ico">✨</span><small>Bàn ${i + 1}</small></div>`).join('')}</div>
        <button class="btn gold block" data-act="goto" data-to="nangcap">🛠️ Nâng cấp bàn ghế</button></div>`;
  },
  acts: { goto: (t) => { S.subtab.nc = 'trangbi'; emit('goto', t.dataset.to); } },
};

/* ===== ĐÁNH GIÁ ===== */
const danhgia = {
  html() {
    const rv = S.reviews;
    const dist = [5, 4, 3, 2, 1].map((s) => [s, rv.filter((r) => r.stars === s).length]);
    const mx = Math.max(1, ...dist.map((d) => d[1]));
    return `<div class="rvhead"><div class="big-r">${S.rating.toFixed(1).replace('.', ',')}<small>/5</small></div><div><span class="stars lg">${Array.from({ length: 5 }, (_, i) => `<i class="${i < Math.round(S.rating) ? 'on' : ''}">★</i>`).join('')}</span><small>${S.ratingCount} lượt đánh giá · ${rv.length} gần nhất</small></div></div>
      <div class="dist">${dist.map(([s, n]) => `<div class="dr"><span>${s}★</span><div class="bar"><i style="width:${n / mx * 100}%"></i></div><b>${n}</b></div>`).join('')}</div>
      ${rv.length ? rv.slice(0, 30).map((r) => `<div class="review"><span class="r-av">${r.av}</span><div class="grow"><div class="r-h"><b>${esc(r.name)}</b><span class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</span></div><p>${esc(r.text)}</p><small>Ngày ${r.day}</small></div></div>`).join('') : '<div class="emptybox">⭐<b>Chưa có đánh giá</b><p>Mở cửa và phục vụ khách để nhận đánh giá đầu tiên!</p></div>'}`;
  },
  acts: {},
};

/* ===== TỔNG KẾT ===== */
function periodEntries(mode, idx) {
  const hs = S.history;
  const len = mode === 'day' ? 1 : mode === 'week' ? 7 : 30;
  const end = hs.length - idx * len;
  const start = Math.max(0, end - len);
  return { list: hs.slice(start, end), label: mode === 'day' ? (hs[end - 1] ? `Ngày ${hs[end - 1].day}` : '—') : mode === 'week' ? `Tuần ${Math.ceil(Math.max(1, hs.length - idx * 7) / 7)}` : `Tháng ${Math.ceil(Math.max(1, hs.length - idx * 30) / 30)}`, can: { prev: start > 0, next: idx > 0 } };
}
const tongket = {
  html() {
    const mode = S.subtab.tk || 'day';
    const idx = S.subtab.tkIdx || 0;
    const per = periodEntries(mode, idx);
    const a = aggregate(per.list);
    const ev = mode === 'day' && per.list[0] ? DAY_EVENTS.find((e) => e.id === (per.list[0].event || 'normal')) : null;
    return `<div class="tabs">${[['day', 'Theo ngày'], ['week', 'Theo tuần'], ['month', 'Theo tháng']].map(([id, l]) => `<button class="tab ${mode === id ? 'on' : ''}" data-act="tkmode" data-v="${id}">${l}</button>`).join('')}</div>
      <div class="navr"><button class="rb" data-act="tkprev" ${per.can.prev ? '' : 'disabled'}>‹</button><b>${esc(per.label)}</b><button class="rb" data-act="tknext" ${per.can.next ? '' : 'disabled'}>›</button></div>
      ${ev ? `<div class="evline">${ev.icon} Sự kiện: <b>${esc(ev.name)}</b></div>` : ''}
      ${per.list.length ? `<div class="day-stats"><div><b>${a.cups}</b><span>ly bán</span></div><div><b>${a.left}</b><span>khách bỏ về</span></div><div><b>${a.avgStars ? a.avgStars.toFixed(1) : '–'}★</b><span>đánh giá</span></div></div>${plHTML(a, per.label)}` : '<div class="emptybox">📊<b>Chưa có dữ liệu</b><p>Hoàn thành ít nhất một ngày bán hàng để xem báo cáo.</p></div>'}`;
  },
  acts: {
    tkmode: (t) => { S.subtab.tk = t.dataset.v; S.subtab.tkIdx = 0; markDirty('panel'); },
    tkprev: () => { S.subtab.tkIdx = (S.subtab.tkIdx || 0) + 1; markDirty('panel'); },
    tknext: () => { S.subtab.tkIdx = Math.max(0, (S.subtab.tkIdx || 0) - 1); markDirty('panel'); },
  },
};

/* ===== BẠN BÈ ===== */
const banbe = {
  html() {
    const f = S.friends;
    const list = [...NPC_FRIENDS.map((x) => ({ ...x })), ...f.list];
    const board = [{ id: 'me', name: S.shopName + ' (Bạn)', av: '⭐', rich: S.money, rating: S.rating }, ...list].sort((a, b) => b.rich - a.rich);
    return `<div class="codecard"><small>Mã mời của bạn</small><b>${f.code}</b><button class="btn soft sm" data-act="copycode">📋 Sao chép</button></div>
      <div class="addf"><input id="friendCode" placeholder="Nhập mã bạn bè (TTN-XXXXX)" aria-label="Mã bạn bè"><button class="btn pri sm" data-act="addf">Thêm bạn</button></div>
      <h5 class="grp">👥 Danh sách bạn bè (${list.length})</h5>
      ${list.map((x) => `<div class="frow"><span class="r-av">${x.av}</span><div class="grow"><b>${esc(x.name)}</b><small>⭐ ${x.rating.toFixed(1)} · 💰 ${fmtK(x.rich)}</small></div><button class="btn ${f.gifted[x.id] === S.day ? 'ghost' : 'gold'} sm" data-act="visit" data-id="${x.id}" ${f.gifted[x.id] === S.day ? 'disabled' : ''}>${f.gifted[x.id] === S.day ? 'Đã thăm' : '🎁 Thăm quán'}</button></div>`).join('')}
      <h5 class="grp">🏆 Bảng xếp hạng tài sản</h5>${board.map((x, i) => `<div class="dl ${x.id === 'me' ? 'me' : ''}"><span>${i + 1}. ${x.av} ${esc(x.name)}</span><b>${fmtK(x.rich)}</b></div>`).join('')}`;
  },
  acts: {
    copycode: async () => { try { await navigator.clipboard.writeText(S.friends.code); toast('Đã sao chép mã mời!', 'ok'); } catch (e) { toast('Mã của bạn: ' + S.friends.code, 'ok'); } },
    addf: () => {
      const v = ($('#friendCode')?.value || '').trim().toUpperCase();
      if (!/^TTN-[A-Z0-9]{3,8}$/.test(v)) return toast('Mã bạn bè không hợp lệ (dạng TTN-XXXXX)', 'err');
      if (v === S.friends.code) return toast('Đó là mã của bạn!', 'err');
      if (S.friends.list.some((x) => x.id === v)) return toast('Đã là bạn rồi', 'err');
      S.friends.list.push({ id: v, name: 'Bạn ' + v, av: pick(['🐻', '🦊', '🐰', '🐼']), rating: +rand(3.8, 4.9).toFixed(1), rich: Math.round(rand(2e5, 4e6)) });
      toast('Đã kết bạn!', 'ok'); sfx('success'); markDirty('panel'); requestSave();
    },
    visit: (t) => {
      const id = t.dataset.id, gift = randInt(5, 20) * 1000;
      S.friends.gifted[id] = S.day; S.money += gift; S.followers += randInt(10, 80);
      toast(`🎁 Bạn tặng quà! +${fmtK(gift)}`, 'gold'); sfx('coin'); markDirty('hud', 'panel'); requestSave();
    },
  },
};

/* ===== SƯU TẦM ===== */
function openPack() {
  const c = S.collection;
  if (c.packs <= 0) return null;
  c.packs--;
  const out = [];
  for (let i = 0; i < 3; i++) {
    const r = wpick(GACHA.weights);
    const idxs = GACHA.rarities.map((x, k) => (x === r ? k : -1)).filter((k) => k >= 0);
    const k = pick(idxs);
    const dup = !!c.owned[k];
    c.owned[k] = (c.owned[k] || 0) + 1;
    if (dup) E.addStock('tcDen', 3);
    out.push({ k, r, dup });
  }
  const sec = SECRET_RECIPES.filter((s) => !c.secrets[s.id]);
  let secret = null;
  if (sec.length && chance(0.12)) { secret = pick(sec); c.secrets[secret.id] = true; }
  markDirty('panel', 'hud');
  requestSave();
  return { out, secret };
}
export const openCardPack = openPack;
const suutam = {
  html() {
    const c = S.collection;
    const owned = Object.keys(c.owned).length;
    return `<div class="colhead"><h4>🎴 SỔ TAY SƯU TẦM & GACHA NGUYÊN LIỆU</h4><p>Đã có <b>${owned}/${GACHA.names.length}</b> thẻ · Công thức độc bản <b>${E.secretCount()}/${SECRET_RECIPES.length}</b> · Thưởng: +${Math.min(20, owned * 0.3).toFixed(1)}% doanh thu</p>
      <div class="row2"><button class="btn gold" data-act="pack" ${c.packs > 0 ? '' : 'disabled'}>🎁 Mở túi quà (${c.packs})</button><button class="btn soft" data-act="buypack">🛒 Mua túi (${fmtK(GIFT_COST)})</button></div></div>
      <h5 class="grp">📖 Công thức độc bản</h5><div class="secrets">${SECRET_RECIPES.map((s) => `<div class="secret ${c.secrets[s.id] ? 'got' : ''}"><span>${c.secrets[s.id] ? s.icon : '🔒'}</span><b>${c.secrets[s.id] ? esc(s.name) : '???'}</b><small>${c.secrets[s.id] ? esc(s.desc) : 'Chưa khám phá'}</small></div>`).join('')}</div>
      <h5 class="grp">🧺 Thẻ nguyên liệu</h5><div class="cards">${GACHA.names.map((n, k) => `<div class="gcard r${GACHA.rarities[k]} ${c.owned[k] ? '' : 'unk'}"><span>${c.owned[k] ? GACHA.icons[k] : '❔'}</span><b>${c.owned[k] ? n : '???'}</b><small>${GACHA.rarityName[GACHA.rarities[k]]}${c.owned[k] > 1 ? ' ×' + c.owned[k] : ''}</small></div>`).join('')}</div>`;
  },
  acts: {
    pack: () => {
      const r = openPack();
      if (!r) return;
      sfx('unlock');
      const m = openModal({ cls: 'small', html: `<h3 class="m-title">✨ Phát hiện mới!</h3><div class="cards">${r.out.map(({ k, dup }) => `<div class="gcard r${GACHA.rarities[k]} flip"><span>${GACHA.icons[k]}</span><b>${GACHA.names[k]}</b><small>${GACHA.rarityName[GACHA.rarities[k]]}${dup ? ' · trùng (+3 TC đen)' : ' · MỚI!'}</small></div>`).join('')}</div>${r.secret ? `<div class="secret got big"><span>${r.secret.icon}</span><b>Công thức độc bản: ${esc(r.secret.name)}</b><small>${esc(r.secret.desc)}</small></div>` : ''}<button class="btn pri block" data-act="x">Tuyệt! ✨</button>` });
      bindActions(m.body, { x: () => m.close() });
      fxSpark($('.gcard', m.body), 10);
    },
    buypack: () => { if (S.money < GIFT_COST) return toast('Không đủ tiền', 'err'); S.money -= GIFT_COST; S.collection.packs++; sfx('coin'); markDirty('hud', 'panel'); },
  },
};

export const PANELS3 = { vuon, thucung, khoinghiep, sanh, danhgia, tongket, banbe, suutam };
void PLOTS_START; void SEASONS; void WEATHERS; void sum; void alertBox; void $;
