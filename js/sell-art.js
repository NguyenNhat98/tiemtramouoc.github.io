/** Crops used by the daily counter from the supplied kawaii sprite sheet. */
const SOURCE = 'assets/sell/kawaii-sheet.png';

// Character portraits along the top of the sheet, ordered left to right.
const customerCells = {
  sinhVien: 1, vanPhong: 2, genZ: 0, bac: 4,
  vip: 8, macCa: 9, reviewer: 2, be: 6,
};

const teaCells = {
  traSua: [13, 316, 111, 173], matcha: [125, 316, 115, 173],
  hongTra: [239, 316, 117, 173], lucTra: [356, 316, 116, 173],
  olong: [472, 316, 116, 173], traThai: [587, 316, 118, 173],
};

// Ingredient crops omit the printed labels so the game name remains authoritative.
const topCells = {
  tcDen: [14, 620, 76, 59], tcTrang: [91, 620, 75, 59], tcVang: [168, 620, 78, 59],
  tcSoi: [927, 702, 85, 59], tcNo: [412, 620, 81, 59], cuNang: [496, 620, 82, 59],
  thachTc: [14, 701, 80, 60], suongSao: [759, 620, 83, 59], thachCf: [582, 620, 84, 59],
  fCheese: [258, 490, 62, 126], fMatcha: [284, 701, 84, 60], fMuoi: [331, 490, 62, 126], fUbe: [740, 701, 83, 60],
  pmVien: [375, 701, 83, 60], pmTuoi: [375, 701, 83, 60], thachPm: [669, 620, 86, 59],
};

let artId = 0;
function region(rect, cls = '', mask = null) {
  const [x, y, width, height] = rect;
  const id = `sale-art-${artId++}`;
  const clip = mask ? `<defs><clipPath id="${id}"><polygon points="${mask.map(([px, py]) => `${px * width / 100},${py * height / 100}`).join(' ')}"/></clipPath></defs>` : `<defs><clipPath id="${id}"><rect width="${width}" height="${height}"/></clipPath></defs>`;
  return `<svg class="sale-art ${cls}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" xmlns:xlink="http://www.w3.org/1999/xlink">${clip}<image href="${SOURCE}" xlink:href="${SOURCE}" x="${-x}" y="${-y}" width="1536" height="1024" clip-path="url(#${id})"/></svg>`;
}

export function customerArt(key) {
  if (!Object.prototype.hasOwnProperty.call(customerCells, key)) return '';
  const i = customerCells[key];
  return region([i * 112 + 8, 78, 108, 106], 'customer-sprite');
}
export function teaArt(id) { return region(teaCells[id] || teaCells.traSua); }
export function toppingArt(id) { return region(topCells[id] || topCells.tcDen); }
export function stackArt(size) {
  return region(size === 'L' ? [141, 217, 104, 100] : [20, 217, 109, 100]);
}
export function sealerArt() { return region([1100, 486, 232, 296]); }
export function cupArt() {
  // A transparent outline lets live liquid, flavor and topping layers remain visible.
  return '<svg class="sale-art cup-sprite" viewBox="0 0 78 101" aria-hidden="true"><path d="M5 10 L15 90 Q39 105 63 90 L73 10" fill="none" stroke="#795840" stroke-width="2.5"/><ellipse cx="39" cy="10" rx="34" ry="8" fill="rgba(255,255,255,.18)" stroke="#795840" stroke-width="2.5"/><path d="M14 24 L21 80" stroke="white" opacity=".6" stroke-width="3" stroke-linecap="round"/></svg>';
}
const pourCells = { traSua: [1230, 205], matcha: [1334, 205], hongTra: [1230, 205], lucTra: [1334, 205], olong: [1230, 205], traThai: [1334, 205] };
export function pourArt(tea) {
  const [x, y] = pourCells[tea] || pourCells.traSua;
  return region([x, y, 82, 226], 'pour-sprite');
}
export function splashArt(tea) {
  const x = ({ traSua: 15, hongTra: 100, matcha: 178, lucTra: 254, olong: 333, traThai: 410 })[tea] || 15;
  return region([x, 876, 76, 59], 'tea-splash-sprite');
}
