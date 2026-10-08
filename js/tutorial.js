/**
 * Hướng dẫn lần đầu dạng "coach mark": làm sáng một vùng giao diện + bong bóng giải thích từng bước.
 * Luôn có nút "Bỏ qua hướng dẫn". Hai chặng: 'home' (chuẩn bị) và 'sell' (ca bán hàng đầu tiên).
 */
import { S, $, h, esc, setPaused, requestSave, sfx } from './core.js';

const STEPS = {
  home: [
    { sel: '.tile[data-tab="kho"]', ico: '📦', t: 'Bước 1 · Chọn nguyên liệu', d: 'Mở <b>Kho</b>, chọn số lượng <b>Trà</b>, <b>Topping</b> và <b>Dụng cụ</b> bạn muốn dùng hôm nay bằng nút − / +.' },
    { sel: '#cta .cta-btn', ico: '🛒', t: 'Bước 2 · Nhập nguyên liệu', d: 'Bấm nút <b>Nấu & nhập</b> để trả tiền và đưa nguyên liệu vào kho. Nút đỏ ⚠️ nghĩa là bạn còn thiếu món bắt buộc.' },
    { sel: '#cta .cta-btn', ico: '🏮', t: 'Bước 3 · Mở cửa', d: 'Khi đủ nguyên liệu, nút đổi thành <b>Mở cửa</b>. Bấm để bắt đầu ca bán hàng!' },
  ],
  sell: [
    { sel: '.cust-zone', ico: '👤', t: 'Bước 4 · Khách gọi món', d: 'Khách hiện <b>bong bóng thoại</b> cho biết size, loại trà, hương và topping. Thanh <b>Kiên nhẫn</b> cạn là khách bỏ đi.' },
    { sel: '.stacks', ico: '🥤', t: 'Lấy ly', d: 'Chạm đúng <b>chồng ly M hoặc L</b> mà khách yêu cầu.' },
    { sel: '#disps', ico: '🫖', t: 'Rót trà', d: 'Chạm <b>bình trà</b> để rót, chạm lần nữa để dừng khi thanh chạy tới <b>vùng vàng</b>.' },
    { sel: '#trays', ico: '🧋', t: 'Thêm topping', d: 'Chạm các <b>khay topping</b> khách muốn (và chai hương nếu có).' },
    { sel: '#sealer', ico: '🔒', t: 'Đóng nắp', d: 'Chạm <b>máy đóng nắp</b>, chờ đèn READY rồi chạm <b>ly hoàn thiện</b> trên thớt để giao khách.' },
    { sel: '#lobbyGo', ico: '🪑', t: 'Ra sảnh', d: 'Sảnh có bàn ghế: dọn bàn bẩn để khách ngồi tại quán và boa thêm. Chúc bạn một ngày bán đắt hàng! 🎉' },
  ],
};

let cur = null;

function ensureUi() {
  let el = $('#coach');
  if (el) return el;
  el = h('<div id="coach" class="coach" hidden><div class="coach-ring"></div><div class="coach-card"></div></div>');
  document.body.appendChild(el);
  return el;
}
function targetOf(step) {
  return step.sel.split(',').map((q) => document.querySelector(q.trim())).find((n) => n && n.offsetParent !== null) || null;
}
function place() {
  if (!cur) return;
  const el = $('#coach'), ring = el.querySelector('.coach-ring'), card = el.querySelector('.coach-card');
  const st = STEPS[cur.phase][cur.i];
  const t = targetOf(st);
  if (t) {
    const r = t.getBoundingClientRect();
    ring.style.cssText = `display:block;left:${r.left - 5}px;top:${r.top - 5}px;width:${r.width + 10}px;height:${r.height + 10}px`;
    const ch = card.offsetHeight || 160;
    const below = r.bottom + 12 + ch < innerHeight;
    card.style.top = below ? `${r.bottom + 12}px` : `${Math.max(8, r.top - 12 - ch)}px`;
  } else {
    ring.style.display = 'none';
    card.style.top = `${Math.max(8, (innerHeight - (card.offsetHeight || 160)) / 2)}px`;
  }
  cur.raf = requestAnimationFrame(place);
}
function show() {
  const el = ensureUi(), card = el.querySelector('.coach-card');
  const steps = STEPS[cur.phase], st = steps[cur.i], last = cur.i === steps.length - 1;
  el.hidden = false;
  card.innerHTML = `<div class="coach-h"><span class="coach-ico">${st.ico}</span><div><small>HƯỚNG DẪN ${cur.i + 1}/${steps.length}</small><b>${esc(st.t)}</b></div></div>
    <p>${st.d}</p>
    <div class="coach-dots">${steps.map((_, k) => `<i class="${k === cur.i ? 'on' : k < cur.i ? 'done' : ''}"></i>`).join('')}</div>
    <div class="coach-btns"><button class="btn ghost sm" data-c="skip">Bỏ qua hướng dẫn</button><button class="btn pri sm" data-c="next">${last ? 'Xong ✓' : 'Tiếp →'}</button></div>`;
  card.querySelector('[data-c="skip"]').onclick = () => { sfx('click'); end(true); };
  card.querySelector('[data-c="next"]').onclick = () => { sfx('click'); if (last) end(false); else { cur.i++; show(); } };
  cancelAnimationFrame(cur.raf);
  place();
}
function end(skipped) {
  if (!cur) return;
  cancelAnimationFrame(cur.raf);
  const phase = cur.phase;
  if (phase === 'sell') setPaused(false);
  cur = null;
  const el = $('#coach'); if (el) el.hidden = true;
  S.settings.tut = S.settings.tut || {};
  S.settings.tut[phase] = true;
  if (skipped) { S.settings.tut.home = true; S.settings.tut.sell = true; }
  requestSave();
}
export function startTutorial(phase) {
  if (cur) end(false);
  cur = { phase, i: 0, raf: 0 };
  if (phase === 'sell') setPaused(true);
  show();
}
/** Gọi khi vừa tạo game mới: bật cờ hướng dẫn. */
export function armTutorial() { S.settings.tut = { home: false, sell: false }; requestSave(); }
export function replayTutorial() { S.settings.tut = { home: false, sell: false }; requestSave(); startTutorial(S.phase === 'sell' ? 'sell' : 'home'); }
export function maybeTutorial(phase) {
  const t = S.settings.tut;
  if (!t || t[phase] || cur) return;
  startTutorial(phase);
}
export const tutorialActive = () => !!cur;
