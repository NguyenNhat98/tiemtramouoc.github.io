/** Regions and silhouettes from the supplied cartoon sprite sheet. */
const SOURCE = 'assets/sell/cartoon-sheet.png';
const teaColumns = { traSua: 0, matcha: 1, hongTra: 2, lucTra: 3, olong: 4, traThai: 5 };
// Closest illustrations are intentional for ingredients absent from the sheet.
// Crop off the baked-in labels: the visible name always comes from game data.
const topCells = {
  tcDen: [0, 0], tcTrang: [0, 1], tcVang: [0, 2], tcSoi: [2, 2], tcNo: [0, 5],
  cuNang: [2, 3], thachTc: [1, 2], suongSao: [0, 9], thachCf: [0, 7],
  fCheese: [1, 3], fMatcha: [1, 5], fMuoi: [0, 8], fUbe: [2, 0],
  pmVien: [1, 6], pmTuoi: [1, 6], thachPm: [2, 1],
};
let artId = 0;
const TEA_MASK = [[35,0],[66,0],[69,8],[97,12],[100,24],[100,43],[94,44],[94,86],[72,92],[64,100],[40,100],[33,92],[7,86],[7,44],[0,43],[0,24],[3,12],[32,8]];
const CUP_MASK = [[0,7],[12,0],[88,0],[100,7],[90,24],[81,92],[70,100],[30,100],[19,92],[10,24]];
function region(rect, cls = '', mask = null) {
  const [x, y, width, height] = rect;
  const id = `sale-art-${artId++}`;
  const clip = mask ? `<defs><clipPath id="${id}"><polygon points="${mask.map(([px, py]) => `${px * width / 100},${py * height / 100}`).join(' ')}"/></clipPath></defs>` : '';
  return `<svg class="sale-art ${cls}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false" xmlns:xlink="http://www.w3.org/1999/xlink">${clip}<image href="${SOURCE}" xlink:href="${SOURCE}" x="${-x}" y="${-y}" width="1536" height="1024" ${mask ? `clip-path="url(#${id})"` : ''}/></svg>`;
}
export function teaArt(id) {
  return region([13 + teaColumns[id] * 129, 17, 123, 246], '', TEA_MASK);
}
export function toppingArt(id) {
  const [row, col] = topCells[id];
  return region([16 + col * 133.5, 395 + row * 108, 120, 64], '', [[7,0],[93,0],[100,10],[100,100],[0,100],[0,10]]);
}
export function stackArt(size) {
  return region(size === 'L' ? [912, 53, 115, 304] : [785, 100, 117, 255], '', [[16,0],[84,0],[89,31],[94,58],[100,61],[100,97],[94,100],[6,100],[0,97],[0,61],[6,58],[11,31]]);
}
export function sealerArt() {
  return region([1287, 18, 231, 366], '', [[23,0],[43,4],[79,0],[96,10],[100,36],[95,85],[88,100],[11,100],[6,93],[6,40],[0,23],[11,4]]);
}
export function cupArt() {
  return region([15, 781, 95, 122], 'cup-sprite', CUP_MASK);
}
const pourColumn = (tea) => ({ traSua: 0, matcha: 1, lucTra: 3, hongTra: 2, olong: 3, traThai: 4 }[tea] ?? 0);
export function pourArt(tea) {
  return region([321 + pourColumn(tea) * 126, 716, 73, 72], 'pour-sprite', [[0,100],[0,62],[6,34],[18,12],[37,0],[60,0],[88,20],[96,46],[67,38],[48,35],[39,44],[29,63],[24,100]]);
}
export function splashArt(tea) {
  return region([14 + pourColumn(tea) * 137, 920, 124, 90], 'tea-splash-sprite', [[0,70],[8,47],[21,32],[17,15],[34,5],[41,36],[54,21],[68,9],[80,3],[98,17],[91,39],[75,52],[99,56],[93,78],[63,91],[34,98],[10,91]]);
}
