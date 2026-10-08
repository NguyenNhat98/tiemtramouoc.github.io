/**
 * Vỏ giao diện: header, modal, toast, hiệu ứng bay, cài đặt, tạm dừng, intro, tổng quan cuối ngày.
 */
import { ITEMS, LOCATIONS, SEASONS, WEATHERS, THEMES, SHIFT_MINUTES, CHANGELOG, VERSION, SHIFT_START_H } from './config.js';
import {
  S, on, emit, markDirty, requestSave, saveGame, setPaused, isPaused, applyVolumes, restartMusic, listBackups, restoreBackup, exportCode, importCode,
  wipeSave, $, $$, h, esc, fmt, fmtK, fmtClock, rand, sum, wait, sfx, replaceState, newState, clamp,
} from './core.js';
import * as E from './econ.js';
import { SH, closeNow, nextDay } from './sell.js';

/* ===== Delegation ===== */
export function bindActions(root, map) {
  root.addEventListener('click', (e) => {
    const t = e.target.closest('[data-act]');
    if (!t || !root.contains(t) || t.disabled) return;
    const fn = map[t.dataset.act];
    if (fn) { sfx('click'); fn(t, e); }
  });
}

/* ===== Toast ===== */
export function toast(msg, type = '', dur = 2300) {
  const root = $('#toasts');
  if (!root) return;
  const t = h(`<div class="toast ${type}">${esc(msg)}</div>`);
  root.appendChild(t);
  while (root.children.length > 3) root.firstElementChild.remove();
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 260); }, dur);
}

/* ===== FX ===== */
const centerOf = (t) => {
  if (!t) return { x: innerWidth / 2, y: innerHeight / 2 };
  if (typeof t.x === 'number') return t;
  const r = t.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
};
export function fxText(text, target, cls = '') {
  const { x, y } = centerOf(target);
  const f = h(`<div class="fx-float ${cls}" style="left:${x}px;top:${y}px">${esc(text)}</div>`);
  $('#fx').appendChild(f);
  setTimeout(() => f.remove(), 1000);
}
export function fxCoins(target, n = 5) {
  const from = centerOf(target);
  const to = centerOf($('[data-money]'));
  for (let i = 0; i < n; i++) {
    const sx = from.x + rand(-18, 18), sy = from.y + rand(-8, 8);
    const c = h(`<div class="fx-coin" style="left:${sx}px;top:${sy}px;--dx:${to.x - sx}px;--dy:${to.y - sy}px;animation-delay:${i * 45}ms">🪙</div>`);
    $('#fx').appendChild(c);
    setTimeout(() => c.remove(), 950 + i * 45);
  }
}
export function fxSpark(target, n = 8) {
  const { x, y } = centerOf(target);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2, d = rand(24, 56);
    const s = h(`<div class="fx-spark" style="left:${x}px;top:${y}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px">✨</div>`);
    $('#fx').appendChild(s);
    setTimeout(() => s.remove(), 760);
  }
}

/* ===== Modal (stack) ===== */
const stack = [];
export function openModal({ html: body, cls = '', title = '', onClose = null, closable = true, id = '' }) {
  if (id) { const ex = stack.find((m) => m.id === id); if (ex) { ex.body.innerHTML = body; return ex; } }
  const back = h(`<div class="modal-back"><div class="modal ${cls}" role="dialog" aria-modal="true" aria-label="${esc(title)}">
    ${closable ? '<button class="modal-x" data-modal-x aria-label="Đóng">✕</button>' : ''}<div class="modal-body"></div></div></div>`);
  const bodyEl = $('.modal-body', back);
  bodyEl.innerHTML = body;
  $('#modal').appendChild(back);
  const m = { id, el: back, body: bodyEl, close };
  function close() {
    const i = stack.indexOf(m);
    if (i < 0) return;
    stack.splice(i, 1);
    back.remove();
    if (!stack.length) $('#modal').classList.remove('on');
    onClose?.();
  }
  $('[data-modal-x]', back)?.addEventListener('click', () => { sfx('click'); close(); });
  back.addEventListener('click', (e) => { if (e.target === back && closable) close(); });
  stack.push(m);
  $('#modal').classList.add('on');
  return m;
}
export const closeTopModal = () => stack[stack.length - 1]?.close();
export const closeAllModals = () => { while (stack.length) stack[stack.length - 1].close(); };
export const isModalOpen = (id) => (id ? stack.some((m) => m.id === id) : stack.length > 0);
export function confirmBox(title, msg, onYes, yes = 'Đồng ý', danger = false) {
  const m = openModal({ html: `<h3 class="m-title">${esc(title)}</h3><p class="m-text">${msg}</p>
    <div class="m-row"><button class="btn ghost" data-act="no">Hủy</button><button class="btn ${danger ? 'danger' : 'pri'}" data-act="yes">${esc(yes)}</button></div>`, cls: 'small' });
  bindActions(m.body, { no: () => m.close(), yes: () => { m.close(); onYes(); } });
  return m;
}
export function alertBox(title, body, btn = 'Đã hiểu') {
  const m = openModal({ html: `<h3 class="m-title">${title}</h3><div class="m-text">${body}</div><button class="btn pri block" data-act="ok">${esc(btn)}</button>`, cls: 'small' });
  bindActions(m.body, { ok: () => m.close() });
  return m;
}

/* ===== Logo ===== */
export function logoHTML(size = 56, cls = '') {
  const l = S.logo;
  const inner = l.img ? `<img src="${l.img}" alt="Logo quán" />` : `<span>${l.emoji}</span>`;
  return `<span class="logo-c ${cls}" style="--sz:${size}px">${inner}</span>`;
}
export function applyTheme() {
  document.documentElement.dataset.theme = S.settings.theme || 'cream';
  document.documentElement.dataset.season = S.season || 'spring';
}

/* ===== Header ===== */
export function renderHud() {
  const el = $('#hud');
  if (!el) return;
  const w = E.weatherOf();
  const se = SEASONS[S.season];
  const sell = S.phase === 'sell';
  const sub = sell ? '⏰ <span id="clock">' + fmtClock(SH.hour) + '</span>' : S.phase === 'end' ? 'Hết ngày' : 'Chuẩn bị';
  const full = S.rating;
  const stars = Array.from({ length: 5 }, (_, i) => `<i class="${i + 1 <= Math.round(full) ? 'on' : ''}">★</i>`).join('');
  el.innerHTML = `
    <div class="hud-l">
      <button class="hbtn ${sell ? 'pause' : ''}" data-act="${sell ? 'pause' : 'settings'}" aria-label="${sell ? 'Tạm dừng' : 'Cài đặt'}">${sell ? '⏸' : '⚙️'}</button>
      <button class="hbtn" data-act="${sell ? 'settings' : 'guide'}" aria-label="${sell ? 'Cài đặt' : 'Hướng dẫn'}">${sell ? '⚙️' : '📖'}</button>
    </div>
    <div class="hud-day"><b>Ngày ${S.day}</b> <span class="hud-sub">${sub}</span>
      <button class="wx" data-act="forecast" aria-label="Dự báo thời tiết">${w.icon} ${se.name} · ${S.temp}°C</button></div>
    <div class="hud-c"><small>${esc(S.shopName)}</small><b data-money>${fmtK(S.money)}</b></div>
    <div class="hud-r">
      <div class="hud-r-btns"><button class="chip-btn orange" data-act="branchTop">Chi nhánh</button><button class="chip-btn gold" data-act="collectTop">Sưu tầm</button></div>
      <div class="hud-rate"><span class="stars">${stars}</span><small>${S.rating.toFixed(1).replace('.', ',')} · ${S.ratingCount} ĐG</small></div>
    </div>`;
}
export function updateClock() {
  const c = $('#clock');
  if (c && SH.on) c.textContent = fmtClock(SH.hour);
}
let hudActs = {};
export function setHudActions(a) { hudActs = a; }
export function initHud() {
  bindActions($('#hud'), new Proxy({}, { get: (_, k) => hudActs[k] }));
}

/* ===== Báo cáo P&L ===== */
export function aggregate(entries) {
  const a = { rev: 0, cogs: 0, rent: 0, util: 0, wage: 0, tax: 0, branch: 0, fran: 0, interest: 0, profit: 0, cups: 0, left: 0, online: 0, stars: [], days: entries.length };
  for (const e of entries) {
    for (const k of ['rev', 'cogs', 'rent', 'util', 'wage', 'tax', 'branch', 'fran', 'interest', 'profit', 'cups', 'left', 'online']) a[k] += e[k] || 0;
    if (e.stars) a.stars.push(e.stars);
  }
  a.avgStars = a.stars.length ? sum(a.stars) / a.stars.length : 0;
  return a;
}
const pct = (x, t) => (t > 0 ? (x / t * 100) : 0);
export function plHTML(a, label) {
  const loss = a.profit < 0;
  const cost = a.cogs + a.rent + a.util + a.wage;
  const base = Math.max(a.rev, cost, 1);
  const cg = pct(a.cogs, base), pe = pct(a.wage, base), ma = pct(a.rent + a.util, base);
  const lossPct = loss ? Math.max(0, 100 - cg - pe - ma) : 0;
  const cogsPct = pct(a.cogs, a.rev), wagePct = pct(a.wage, a.rev);
  const unit = a.cups > 0 ? (a.rev - a.cogs) / a.cups : 0;
  const fixed = (a.rent + a.util + a.wage) / Math.max(1, a.days);
  const be = unit > 0 ? Math.ceil(fixed / unit) : 0;
  const soldPerDay = a.cups / Math.max(1, a.days);
  const cogsCls = a.rev > 0 && cogsPct >= 28 && cogsPct <= 32 ? 'good' : 'warn';
  const wageCls = a.rev > 0 && wagePct >= 15 && wagePct <= 20 ? 'good' : a.wage === 0 ? 'neutral' : 'warn';
  return `<section class="pl">
    <div class="pl-head"><div><small class="pl-k">📊 BÁO CÁO P&L CHUẨN F&B</small><h4>Phân Tích Lỗ Lãi & Điểm Hòa Vốn</h4></div><span class="pl-chip">${esc(label)}</span></div>
    <div class="pl-line"><span>Cơ cấu doanh thu (${fmtK(a.rev)})</span><b class="${loss ? 'neg' : 'pos'}">${loss ? 'Lỗ' : 'Lãi'}: ${fmtK(a.profit)} (${pct(Math.abs(a.profit), Math.max(1, a.rev)).toFixed(1)}%)</b></div>
    <div class="pl-bar"><i style="width:${cg}%;background:#ff8a3d"></i><i style="width:${pe}%;background:#3d9bff"></i><i style="width:${ma}%;background:#8b5cf6"></i><i style="width:${lossPct}%;background:#ef4444"></i></div>
    <div class="pl-legend"><span><i style="background:#ff8a3d"></i> Nguyên liệu: ${cogsPct.toFixed(1)}% (${fmtK(a.cogs)})</span><span><i style="background:#3d9bff"></i> Nhân sự: ${wagePct.toFixed(1)}% (${fmtK(a.wage)})</span><span><i style="background:#8b5cf6"></i> Mặt bằng: ${pct(a.rent + a.util, a.rev).toFixed(1)}% (${fmtK(a.rent + a.util)})</span><span><i style="background:#ef4444"></i> Lỗ: ${loss ? pct(-a.profit, a.rev).toFixed(1) : '0.0'}%</span></div>
    <div class="pl-cards">
      <div class="pl-card ${cogsCls}"><small>📦 COGS Nguyên liệu</small><em>Chuẩn: 28% – 32%</em><b>${cogsPct.toFixed(1)}%</b><span>${fmtK(a.cogs)}</span><p>${cogsCls === 'good' ? '🟢 Chuẩn vàng F&B (28–32%)' : '🟠 Lệch chuẩn F&B'}</p></div>
      <div class="pl-card ${wageCls}"><small>👥 Chi phí nhân sự</small><em>Chuẩn: 15% – 20%</em><b>${wagePct.toFixed(1)}%</b><span>${fmtK(a.wage)}</span><p>${a.wage === 0 ? '⚪ Chưa phát sinh' : wageCls === 'good' ? '🟢 Chuẩn' : '🟠 Lệch chuẩn'}</p></div>
      <div class="pl-card ${soldPerDay >= be ? 'good' : 'bad'}"><small>🎯 Điểm hòa vốn</small><em>Chi phí cố định/ngày</em><b>${be} ly</b><span>Đã bán: ${Math.round(soldPerDay)} ly</span><p>${soldPerDay >= be ? '🟢 Đã vượt hòa vốn' : `🔴 Chưa hòa vốn (Thiếu ${Math.max(0, be - Math.round(soldPerDay))} ly)`}</p></div>
    </div>
    <div class="pl-diag ${loss ? 'bad' : 'good'}"><b>🩺 Bác sĩ F&B chẩn đoán:</b><p>${loss ? `Tổng chi phí (${fmtK(cost)}) vượt doanh thu (${fmtK(a.rev)}). Quán thiếu ${Math.max(0, be - Math.round(soldPerDay))} ly để đạt điểm hòa vốn.` : `Quán đang có lãi ${fmtK(a.profit)}. Hãy giữ COGS trong khoảng 28–32% và duy trì rating cao để tăng khách.`}</p></div>
  </section>`;
}
export function dayLines(T) {
  const rows = [
    ['💵 Doanh thu quán chính', '+' + fmtK(T.rev + T.tips), 'pos'],
    ['🧾 Chi phí quán chính', '−' + fmtK(T.cogs + T.rent + T.util + T.wage + (T.tax || 0)), 'neg'],
    ['📦 Tiền nhập nguyên liệu', '−' + fmtK(T.purchase), 'sub'],
    ['🏠 Mặt bằng', '−' + fmtK(T.rent), 'sub'],
    ['⚡ Điện nước', '−' + fmtK(T.util), 'sub'],
  ];
  if (T.wage) rows.push(['👥 Lương nhân viên', '−' + fmtK(T.wage), 'sub']);
  if (T.branch) rows.push(['🏪 Chi nhánh (ròng)', (T.branch >= 0 ? '+' : '−') + fmtK(Math.abs(T.branch)), T.branch >= 0 ? 'pos' : 'neg']);
  if (T.fran) rows.push(['🤝 Nhượng quyền (royalty)', '+' + fmtK(T.fran), 'pos']);
  if (T.interest) rows.push(['🏦 Lãi ngân hàng', '+' + fmtK(T.interest), 'pos']);
  rows.push(['📈 Lãi', (T.profit >= 0 ? '+' : '−') + fmtK(Math.abs(T.profit)), T.profit >= 0 ? 'pos big' : 'neg big']);
  rows.push(['🗄️ Két', fmtK(S.money), 'big']);
  return rows.map(([l, v, c]) => `<div class="dl ${c}"><span>${l}</span><b>${v}</b></div>`).join('');
}

/* ===== Tổng quan cuối ngày ===== */
export function openDaySummary() {
  const T = S.today;
  const tomorrow = S.forecast.find((f) => f.day === S.day + 1) || E.rollWeatherFor(S.day + 1);
  const tw = WEATHERS[tomorrow.weather];
  const agg = aggregate([{ ...T, stars: T.avgStars }]);
  agg.profit = T.profit; agg.rev = T.rev + T.tips;
  const m = openModal({
    cls: 'day', closable: false, id: 'day', html: `
    <div class="day-moon">🌙<small>⭐</small></div>
    <h2 class="day-title">Hết ngày ${S.day}</h2>
    <div class="day-stats"><div><b>${T.cups}</b><span>🧋</span></div><div><b>${T.left}</b><span>😶</span></div><div><b>${T.avgStars ? T.avgStars.toFixed(1) : '–'}</b><span>⭐</span></div></div>
    ${plHTML(agg, 'Ngày ' + S.day)}
    <div class="dls">${dayLines(T)}</div>
    <div class="tomorrow">📅 <b>Ngày mai:</b> ${esc(tw.tip)}</div>
    <button class="btn ghost block" data-act="sum">📊 Tổng kết</button>
    <button class="btn pri block" data-act="next">Ngày ${S.day + 1} ➜</button>`,
  });
  bindActions(m.body, {
    sum: () => { m.close(); nextDay(); S.tab = 'tongket'; markDirty('view', 'panel'); sfx('success'); emit('goto', 'tongket'); },
    next: () => { m.close(); nextDay(); sfx('success'); },
  });
}

/* ===== Tạm dừng ===== */
function sliderRow(label, key, icon) {
  const v = Math.round(S.settings[key] * 100);
  return `<div class="vol"><div class="vol-h"><b>${icon} ${label}</b><span class="pct" data-pct="${key}">${v}%</span></div>
    <div class="vol-r"><button class="rb" data-act="vol-" data-k="${key}">−</button><input type="range" min="0" max="100" value="${v}" data-slider="${key}" aria-label="${label}"><button class="rb" data-act="vol+" data-k="${key}">＋</button><button class="rb" data-act="mute" data-k="${key}">${v ? '🔊' : '🔇'}</button></div></div>`;
}
function bindSliders(m) {
  const set = (k, v) => {
    S.settings[k] = clamp(v, 0, 1);
    const sl = $(`[data-slider="${k}"]`, m.body); if (sl) sl.value = Math.round(S.settings[k] * 100);
    const p = $(`[data-pct="${k}"]`, m.body); if (p) p.textContent = Math.round(S.settings[k] * 100) + '%';
    applyVolumes(); if (k === 'music') restartMusic(); requestSave();
  };
  $$('[data-slider]', m.body).forEach((s) => s.addEventListener('input', () => set(s.dataset.slider, s.value / 100)));
  return { 'vol-': (t) => set(t.dataset.k, S.settings[t.dataset.k] - 0.1), 'vol+': (t) => set(t.dataset.k, S.settings[t.dataset.k] + 0.1), mute: (t) => set(t.dataset.k, S.settings[t.dataset.k] > 0 ? 0 : 0.7) };
}
export function openPause() {
  if (isModalOpen('pause')) return;
  setPaused(true);
  const left = Math.max(0, Math.round(SH.total - SH.t));
  const m = openModal({
    id: 'pause', cls: 'pause', closable: false, onClose: () => setPaused(false), html: `
    <div class="pause-ico">⏸</div><h2 class="day-title">Tạm dừng ca bán</h2>
    <p class="m-text center">Còn ${left}s · ${SH.queue.length} khách đang chờ</p>
    <div class="box">${sliderRow('Nhạc nền quán', 'music', '🎵')}${sliderRow('Âm thanh pha chế & SFX', 'sfx', '🧋')}</div>
    <button class="btn pri block" data-act="resume">▶ Chơi tiếp</button>
    <button class="btn pri block" data-act="close">Đóng cửa hôm nay</button>` });
  const acts = bindSliders(m);
  bindActions(m.body, {
    ...acts, resume: () => m.close(),
    close: () => confirmBox('Đóng cửa hôm nay?', 'Khách đang chờ sẽ ra về và ca bán kết thúc ngay.', () => { m.close(); closeNow(); }, 'Đóng cửa', true),
  });
}

/* ===== Cài đặt ===== */
export function openSettings() {
  const sell = S.phase === 'sell';
  if (sell) setPaused(true);
  const row = (act, icon, label, value = '') => `<button class="set-row" data-act="${act}"><span class="si">${icon}</span><b>${label}</b><em>${value}</em></button>`;
  const m = openModal({
    id: 'settings', cls: 'settings', onClose: () => { if (sell && !isModalOpen('pause')) setPaused(false); }, html: `
    <h2 class="set-title">⚙️ Cài đặt</h2>
    ${row('guide', '📖', 'Hướng dẫn')}
    ${row('news', '🎁', 'Có gì mới', 'v' + VERSION)}
    ${row('update', '🔄', 'Cập nhật bản mới', 'Tải lại web & xoá bộ nhớ đệm')}
    ${row('hints', '🧭', 'Chỉ dẫn từng bước', S.settings.hints ? 'Tự động' : 'Tắt')}
    ${row('shiftMin', '⏱️', 'Thời gian bán mỗi ngày', `${S.settings.shiftMinNext} phút · áp dụng từ ngày sau`)}
    ${row('theme', '🎨', 'Màu giao diện', THEMES[S.settings.theme].name)}
    <div class="box">${sliderRow('Nhạc nền quán', 'music', '🎵')}${sliderRow('Âm thanh pha chế & SFX', 'sfx', '🧋')}</div>
    ${row('style', '🎼', 'Nhạc nền & Mùa', S.settings.style === 'lofi' ? 'Lofi Chill Quán Cafe' : S.settings.style === 'vui' ? 'Vui nhộn' : 'Tắt nhạc')}
    ${row('export', '📦', 'Sao lưu tiến trình', S.savedAt ? 'Đã lưu' : 'Chưa sao lưu')}
    ${row('backups', '🗂️', 'Khôi phục bản tự lưu', `Game tự lưu ${listBackups().length} cuối ngày gần nhất`)}
    ${row('import', '🔑', 'Khôi phục từ mã')}
    ${row('reset', '↩️', 'Chơi lại từ đầu')}
    <button class="btn pri block" data-act="close">Đóng</button>` });
  const sliders = bindSliders(m);
  const refresh = () => { m.close(); openSettings(); };
  bindActions(m.body, {
    ...sliders, close: () => m.close(), guide: () => openGuide(), news: () => alertBox('🎁 Có gì mới', CHANGELOG.map((c) => `<p>• ${esc(c)}</p>`).join('')),
    update: () => confirmBox('Cập nhật bản mới', 'Lưu game và tải lại trang để lấy bản mới nhất?', () => { saveGame(); location.reload(); }),
    hints: () => { S.settings.hints = !S.settings.hints; requestSave(); refresh(); },
    shiftMin: () => { const i = SHIFT_MINUTES.indexOf(S.settings.shiftMinNext); S.settings.shiftMinNext = SHIFT_MINUTES[(i + 1) % SHIFT_MINUTES.length]; requestSave(); refresh(); },
    theme: () => { const k = Object.keys(THEMES); S.settings.theme = k[(k.indexOf(S.settings.theme) + 1) % k.length]; applyTheme(); requestSave(); refresh(); },
    style: () => { const k = ['lofi', 'vui', 'off']; S.settings.style = k[(k.indexOf(S.settings.style) + 1) % k.length]; restartMusic(); requestSave(); refresh(); },
    export: () => openExport(), import: () => openImport(), backups: () => openBackups(),
    reset: () => confirmBox('Chơi lại từ đầu?', 'Toàn bộ tiến trình sẽ bị xoá vĩnh viễn. Bạn chắc chắn chứ?', () => { closeAllModals(); wipeSave(); applyTheme(); emit('reset'); }, 'Xoá & chơi lại', true),
  });
}
function openExport() {
  const code = exportCode();
  const m = openModal({ cls: 'small', html: `<h3 class="m-title">📦 Mã sao lưu</h3><p class="m-text">Sao chép mã bên dưới và cất ở nơi an toàn. Dán vào "Khôi phục từ mã" để chơi tiếp trên máy khác.</p>
    <textarea class="code" readonly data-code>${code}</textarea><button class="btn pri block" data-act="copy">📋 Sao chép</button><button class="btn ghost block" data-act="x">Đóng</button>` });
  bindActions(m.body, {
    copy: async () => { try { await navigator.clipboard.writeText(code); toast('Đã sao chép mã!', 'ok'); } catch (e) { $('[data-code]', m.body).select(); document.execCommand?.('copy'); toast('Đã chọn mã, hãy sao chép', 'ok'); } },
    x: () => m.close(),
  });
}
function openImport() {
  const m = openModal({ cls: 'small', html: `<h3 class="m-title">🔑 Khôi phục từ mã</h3><textarea class="code" data-code placeholder="Dán mã TTM3.… vào đây"></textarea>
    <button class="btn pri block" data-act="go">Khôi phục</button><button class="btn ghost block" data-act="x">Hủy</button>` });
  bindActions(m.body, {
    go: () => { if (importCode($('[data-code]', m.body).value)) { closeAllModals(); applyTheme(); emit('reset'); toast('Khôi phục thành công!', 'ok'); } else toast('Mã không hợp lệ', 'err'); },
    x: () => m.close(),
  });
}
function openBackups() {
  const list = listBackups();
  const m = openModal({ cls: 'small', html: `<h3 class="m-title">🗂️ Bản tự lưu</h3>${list.length ? list.map((b) => `<button class="set-row" data-act="rb" data-i="${b.i}"><span class="si">💾</span><b>Ngày ${b.day} · ${fmtK(b.money)}</b><em>${new Date(b.t).toLocaleString('vi-VN')}</em></button>`).join('') : '<p class="m-text center">Chưa có bản tự lưu nào. Game tự lưu vào cuối mỗi ngày.</p>'}
    <button class="btn ghost block" data-act="x">Đóng</button>` });
  bindActions(m.body, {
    rb: (t) => confirmBox('Khôi phục bản này?', 'Tiến trình hiện tại sẽ bị thay thế.', () => { if (restoreBackup(+t.dataset.i)) { closeAllModals(); applyTheme(); emit('reset'); toast('Đã khôi phục!', 'ok'); } }),
    x: () => m.close(),
  });
}

/* ===== Hướng dẫn ===== */
export function openGuide() {
  const step = (ico, title, body) => `<div class="g-step"><div class="g-ico">${ico}</div><div class="g-txt"><b>${title}</b><p>${body}</p></div></div>`;
  const m = openModal({ id: 'guide', cls: 'settings', html: `<h2 class="set-title">📖 Hướng dẫn chơi</h2>
    <div class="guide rich">
    <div class="g-sec"><h4>🏠 1. Chuẩn bị mỗi ngày</h4>
      ${step('📦', 'Vào Kho', 'Chọn số lượng <b>Trà 🫖</b>, <b>Topping 🧋</b> và <b>Dụng cụ 🥤</b> (ly, đá, đường) cần dùng cho ngày hôm nay.')}
      ${step('🛒', 'Nấu & nhập', 'Bấm nút hồng <b>Nấu & nhập</b> ở đáy màn hình để trả tiền nhập hàng. Nút đỏ ⚠️ nghĩa là còn thiếu nguyên liệu.')}
      ${step('🏮', 'Mở cửa', 'Đủ nguyên liệu thì bấm <b>Mở cửa</b> để bắt đầu ca bán hàng.')}</div>
    <div class="g-sec"><h4>🧋 2. Pha ly khi bán hàng</h4>
      ${step('👤', 'Đọc đơn', 'Khách hiện bong bóng thoại: size, loại trà, hương, topping. Vòng xanh quanh avatar là <b>độ kiên nhẫn</b>.')}
      ${step('🥤', 'Lấy ly', 'Chạm đúng <b>chồng ly M hoặc L</b> trên quầy trà.')}
      ${step('🫖', 'Rót trà', 'Chạm <b>bình trà</b> để rót, chạm lần nữa để dừng khi thanh tới <b>vùng vàng</b>.')}
      ${step('🍯', 'Hương & topping', 'Chạm <b>chai hương</b> (nếu có) rồi chạm các khay <b>topping</b> khách yêu cầu.')}
      ${step('🔒', 'Đóng nắp', 'Chạm <b>máy đóng nắp</b> bên phải, chờ đèn READY.')}
      ${step('🤝', 'Giao khách', 'Chạm <b>ly hoàn thiện</b> trên thớt để giao. Đúng + nhanh = nhiều sao và tiền boa!')}</div>
    <div class="g-sec"><h4>💡 3. Mẹo hay</h4>
      ${step('👆', 'Đổi khách', 'Chạm avatar trên mái hiên để phục vụ khách ưu tiên (người sắp hết kiên nhẫn).')}
      ${step('🗑️', 'Làm sai?', 'Chạm <b>thùng rác</b> để đổ ly rồi pha lại.')}
      ${step('⭐', 'Đánh giá', 'Sao cao thì khách đông hơn. Bàn bẩn ở Sảnh nhớ dọn để có thêm khách ngồi.')}</div>
    <div class="g-sec"><h4>🚀 4. Lớn dần</h4>
      ${step('🛠️', 'Nâng cấp & nhân sự', 'Nâng cấp quầy, <b>thuê nhân viên</b> – khách sẽ đến nhanh và đông hơn khi quán có tiền và đội ngũ.')}
      ${step('🗺️', 'Khởi nghiệp & chi nhánh', 'Mở chi nhánh, khởi nghiệp xuyên Việt, chạy quảng cáo, nuôi thú cưng, đóng thuế nhận buff, gửi tiết kiệm.')}
      ${step('💵', 'Giá bán', 'Đừng đẩy giá quá cao — trà trên 50k, topping trên 20k sẽ làm khách bỏ đi (trừ khi có Quản lý tập sự).')}</div>
    </div>
    <button class="btn blue block" data-act="replay">🎓 Xem hướng dẫn tương tác từng bước</button>
    <button class="btn pri block" data-act="x" style="margin-top:6px">Đã hiểu</button>` });
  bindActions(m.body, { x: () => m.close(), replay: () => { m.close(); emit('tutorial:replay'); } });
}

/* ===== Dự báo thời tiết ===== */
export function openForecast() {
  const ev = E.eventOf();
  const loc = LOCATIONS[S.location];
  const m = openModal({ cls: 'small', html: `<h3 class="m-title">🌦️ Thời tiết & Mùa</h3>
    <p class="m-text center">${loc.icon} ${esc(loc.name)} · ${SEASONS[S.season].icon} Mùa ${SEASONS[S.season].name}</p>
    ${S.forecast.slice(0, 4).map((f, i) => { const w = WEATHERS[f.weather]; return `<div class="wx-row"><span class="wi">${w.icon}</span><div><b>${i === 0 ? 'Hôm nay' : 'Ngày ' + f.day} · ${f.temp}°C — ${w.name}</b><small>${esc(w.tip)}</small></div></div>`; }).join('')}
    <div class="wx-row ev"><span class="wi">${ev.icon}</span><div><b>Sự kiện hôm nay: ${esc(ev.name)}</b><small>${esc(ev.desc)}</small></div></div>
    <button class="btn pri block" data-act="x">Đóng</button>` });
  bindActions(m.body, { x: () => m.close() });
}

/* ===== Toàn màn hình (ẩn thanh địa chỉ trình duyệt) ===== */
export function goFullscreen() {
  try {
    const d = document.documentElement;
    if (document.fullscreenElement || document.webkitFullscreenElement) return;
    const f = d.requestFullscreen || d.webkitRequestFullscreen || d.msRequestFullscreen;
    if (f) { const r = f.call(d, { navigationUI: 'hide' }); if (r && r.catch) r.catch(() => {}); }
    screen.orientation?.lock?.('portrait').catch(() => {});
  } catch (e) { /* trình duyệt không cho: bỏ qua */ }
}
/** Chạm bất kỳ đâu lần đầu → vào toàn màn hình (nếu người chơi bấm ra ngoài). */
document.addEventListener('pointerup', () => goFullscreen(), { once: true, passive: true });

/* ===== Intro ===== */
export function showIntro(onPlay) {
  const el = $('#intro');
  el.hidden = false;
  const hasSave = S.started;
  el.innerHTML = `
    <div class="intro-sky"><span class="star">⭐</span><span class="cloud c1">☁️</span><span class="cloud c2">☁️</span><span class="bubble-tea">🧋</span><span class="pearl">⚫</span><span class="spark" style="left:30%;top:9%">✨</span><span class="spark" style="right:24%;top:20%;animation-delay:-1s">✨</span><span class="spark" style="left:16%;top:30%;animation-delay:-1.7s">✨</span></div>
    <div class="intro-awning"></div>
    <div class="lanterns"><span>🏮</span><span>🏮</span><span>🏮</span></div>
    <h1 class="intro-title">Tiệm Trà<br/>Mơ Ước</h1>
    <div class="intro-counter">
      <div class="cups"><span>🥤</span><span>🧋</span><span>🍵</span><span>🧃</span></div>
      <div class="cat">😺<small>z z z</small></div>
      <div class="plants"><span>🌵</span><span>🪴</span></div>
    </div>
    <p class="intro-tag">Pha trà, đón khách, mở tiệm nhỏ của riêng bạn</p>
    <div class="intro-info">${esc(S.shopName)} · Ngày ${S.day} · ${fmtK(S.money)}</div>
    <button class="btn pri big" data-act="play">${hasSave ? 'Chơi tiếp' : 'Chơi mới'}</button>
    <button class="link" data-act="guide">Hướng dẫn</button>
    <small class="ver">${VERSION}</small>`;
  bindActions(el, { play: () => { goFullscreen(); el.hidden = true; onPlay(); }, guide: () => { goFullscreen(); openGuide(); } });
}
void ITEMS; void SHIFT_START_H; void wait; void replaceState; void newState; void fmt; void on; void E;
