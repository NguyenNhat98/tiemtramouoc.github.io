/** Hình vẽ cho quầy bán hàng: sprite đã tách riêng từng hình + ly trà sữa vẽ bằng SVG. */
const DIR = 'assets/sell/sprites/';
const img = (name, cls = '') => `<img class="sale-art ${cls}" src="${DIR}${name}.png" alt="" draggable="false" decoding="async">`;

// Chân dung khách theo thứ tự từ trái sang phải trên sprite sheet.
const customerCells = {
  sinhVien: 1, vanPhong: 2, genZ: 0, bac: 4,
  vip: 8, macCa: 9, reviewer: 2, be: 6,
};
const TEAS = ['traSua', 'matcha', 'hongTra', 'lucTra', 'olong', 'traThai'];
// Món chưa có hình riêng dùng hình gần giống (tên và luật tiêu hao vẫn theo dữ liệu game).
const TOPS = ['tcDen', 'tcTrang', 'tcVang', 'tcSoi', 'tcNo', 'cuNang', 'thachTc', 'suongSao', 'thachCf', 'fCheese', 'fMatcha', 'fMuoi', 'fUbe', 'pmVien', 'thachPm'];
const TOP_ALIAS = { pmTuoi: 'pmVien' };

export function customerArt(key) {
  if (!Object.prototype.hasOwnProperty.call(customerCells, key)) return '';
  return img(`customer-${customerCells[key]}`, 'customer-sprite');
}
export function teaArt(id) { return img(`tea-${TEAS.includes(id) ? id : 'traSua'}`); }
export function toppingArt(id) {
  const k = TOP_ALIAS[id] || id;
  return img(`top-${TOPS.includes(k) ? k : 'tcDen'}`);
}
export function stackArt(size) { return img(size === 'L' ? 'stack-L' : 'stack-M'); }
export function sealerArt() { return img('sealer'); }
const POUR = { traSua: 'brown', matcha: 'green', hongTra: 'orange', lucTra: 'green', olong: 'yellow', traThai: 'orange' };
export function pourArt(tea) { return img(`pour-${POUR[tea] || 'brown'}`, 'pour-sprite'); }
export function splashArt(tea) { return img(`splash-${TEAS.includes(tea) ? tea : 'traSua'}`, 'tea-splash-sprite'); }

/* ===== Ly trà sữa SVG: nước, topping nằm gọn trong lòng ly; nắp và ống hút khớp miệng ly ===== */
let cupUid = 0;
// Lòng ly (hệ toạ độ 78 x 104): miệng y=12 rộng 6..72, đáy y=96 rộng 16..62.
const BODY_IN = 'M7.6 13 L17.4 95.5 Q39 101 60.6 95.5 L70.4 13 Z';
const Y_TOP = 14, Y_BOT = 97;
const wallL = (y) => 6 + 10 * (y - 12) / 84;
const wallR = (y) => 72 - 10 * (y - 12) / 84;
const surfaceOf = (fill) => Y_BOT - (Y_BOT - Y_TOP) * Math.min(1, Math.max(0, fill) * 0.86);

/** Cập nhật mực nước khi đang rót (không vẽ lại cả ly). */
export function setCupFill(cupEl, fill) {
  const liq = cupEl && cupEl.querySelector('.c-liq');
  if (!liq) return;
  const y = surfaceOf(fill);
  liq.setAttribute('y', y.toFixed(1)); liq.setAttribute('height', (110 - y).toFixed(1));
  const top = cupEl.querySelector('.c-liq-top');
  if (top) top.setAttribute('y', y.toFixed(1));
  const surf = cupEl.querySelector('.c-surf');
  if (surf) { surf.setAttribute('cy', y.toFixed(1)); surf.style.opacity = fill > 0.02 ? 1 : 0; }
}

/** opts: { fill, tea (màu), flavor (màu), tops: [màu...], lid: '' | 'drop' | 'on', straw: bool } */
export function cupSvg(opts) {
  const { fill = 0, tea = null, flavor = null, tops = [], lid = '', straw = false } = opts;
  const id = `cup${cupUid++}`;
  const y = surfaceOf(tea ? fill : 0);
  // topping xếp từ đáy lên, mỗi hàng 5 viên so le
  const balls = [];
  let n = 0;
  for (const c of tops) {
    for (let k = 0; k < 3; k++, n++) {
      const row = Math.floor(n / 5), col = n % 5;
      const yy = 91 - row * 6.6;
      const xx = Math.max(wallL(yy) + 4.2, Math.min(wallR(yy) - 4.2, 39 + (col - 2) * 8.2 + (row % 2 ? 4.1 : 0)));
      balls.push(`<circle cx="${xx.toFixed(1)}" cy="${yy.toFixed(1)}" r="3.7" fill="${c}"/><circle cx="${(xx - 1.2).toFixed(1)}" cy="${(yy - 1.3).toFixed(1)}" r="1.1" fill="#fff" opacity=".55"/>`);
    }
  }
  const liquid = tea ? `<rect class="c-liq" x="0" y="${y.toFixed(1)}" width="78" height="${(110 - y).toFixed(1)}" fill="${tea}"/>
      <rect class="c-liq-top" x="0" y="${y.toFixed(1)}" width="78" height="14" fill="url(#${id}g)"/>
      ${flavor ? `<rect class="c-flav" x="0" y="64" width="78" height="40" fill="${flavor}" opacity=".5"/>` : ''}
      <ellipse class="c-surf" cx="39" cy="${y.toFixed(1)}" rx="31.5" ry="3.1" fill="#fff" fill-opacity=".38" style="opacity:${fill > 0.02 ? 1 : 0}"/>` : '';
  const lidSvg = lid ? `<g class="c-lidg ${lid === 'drop' ? 'drop' : ''}">
      <path d="M8 10 Q39 -10 70 10 Z" fill="rgba(255,255,255,.62)" stroke="#cdbda7" stroke-width="1.2"/>
      <path d="M17 8 Q27 -1 36 -1" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/>
      <rect x="3.5" y="8.2" width="71" height="6.2" rx="3.1" fill="#fffdf8" stroke="#cdbda7" stroke-width="1.2"/>
    </g>` : '';
  const strawSvg = straw ? '<g class="c-strawg"><line x1="41" y1="92" x2="54" y2="-22" stroke="#ff7fa0" stroke-width="5" stroke-linecap="round"/><line x1="41" y1="92" x2="54" y2="-22" stroke="#fff" stroke-width="5" stroke-dasharray="4 5" opacity=".9"/></g>' : '';
  return `<svg class="cup-svg" viewBox="0 0 78 104" width="100%" height="100%" overflow="visible" preserveAspectRatio="xMidYMax meet" aria-hidden="true" focusable="false">
    <defs><clipPath id="${id}c"><path d="${BODY_IN}"/></clipPath>
      <linearGradient id="${id}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".32"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
    <ellipse cx="39" cy="100" rx="25" ry="3.2" fill="rgba(60,35,10,.16)"/>
    <g clip-path="url(#${id}c)">${liquid}${balls.join('')}</g>
    ${strawSvg}
    <path d="M6 12 L16 96 Q39 103 62 96 L72 12" fill="rgba(235,245,252,.2)" stroke="rgba(121,88,64,.9)" stroke-width="2" stroke-linejoin="round"/>
    <path d="M12.5 20 L19 82" stroke="#fff" stroke-width="3.2" stroke-linecap="round" opacity=".55"/>
    <path d="M66 24 L61 62" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".4"/>
    <ellipse cx="39" cy="12" rx="33" ry="4.6" fill="rgba(255,255,255,.28)" stroke="rgba(121,88,64,.9)" stroke-width="1.6"/>
    ${lidSvg}
  </svg>`;
}
