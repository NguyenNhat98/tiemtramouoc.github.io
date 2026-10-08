/**
 * Hạ tầng: event bus, tiện ích, GameState, lưu/khôi phục, game loop, âm thanh tổng hợp.
 */
import { SAVE_KEY, SAVE_VERSION, IDS, ITEMS, START_MONEY, PLOTS, PLOTS_START, SHIFT_START_H } from './config.js';

/* ===== Event bus ===== */
const listeners = new Map();
export function on(ev, cb) {
  if (!listeners.has(ev)) listeners.set(ev, new Set());
  listeners.get(ev).add(cb);
  return () => listeners.get(ev)?.delete(cb);
}
export function emit(ev, data) {
  for (const cb of [...(listeners.get(ev) || [])]) {
    try { cb(data); } catch (e) { console.error(`[bus] ${ev}`, e); }
  }
}

/* ===== Tiện ích ===== */
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const rand = (a, b) => Math.random() * (b - a) + a;
export const randInt = (a, b) => Math.floor(rand(a, b + 1));
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const chance = (p) => Math.random() < p;
export const sum = (arr, f = (x) => x) => arr.reduce((s, x) => s + f(x), 0);
export function wpick(weights) {
  const es = Object.entries(weights).filter(([, w]) => w > 0);
  let r = Math.random() * es.reduce((s, [, w]) => s + w, 0);
  for (const [k, w] of es) { r -= w; if (r <= 0) return k; }
  return es.length ? es[es.length - 1][0] : undefined;
}
const trimNum = (n, d) => String(Number(n.toFixed(d))).replace('.', ',');
/** Định dạng tiền ngắn: 4,5k · 1,5tr · 2,3 tỷ. */
export function fmtK(n) {
  const v = Number(n) || 0, a = Math.abs(v);
  if (a >= 1e9) return trimNum(v / 1e9, 2) + ' tỷ';
  if (a >= 1e6) return trimNum(v / 1e6, 2) + 'tr';
  if (a >= 1e3) return trimNum(v / 1e3, 1) + 'k';
  return Math.round(v) + 'đ';
}
export const fmt = (n) => {
  const v = Math.round(Number(n) || 0);
  return (v < 0 ? '-' : '') + Math.abs(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
};
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
export function h(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}
export const wait = (ms) => new Promise((r) => setTimeout(r, ms));
export const pad2 = (n) => String(n).padStart(2, '0');
export const fmtClock = (hh) => `${pad2(Math.floor(hh))}:${pad2(Math.floor((hh % 1) * 60 / 10) * 10)}`;

/* ===== GameState ===== */
export function newState() {
  const stock = {}, unlocked = {}, onMenu = {}, prices = {};
  for (const id of IDS) {
    stock[id] = [];
    unlocked[id] = ITEMS[id].unlock === 0;
    onMenu[id] = ITEMS[id].unlock === 0 && ITEMS[id].kind !== 'supply';
    if (ITEMS[id].price) prices[id] = ITEMS[id].price;
  }
  prices.sizeL = 7000;
  const plots = [];
  for (let i = 0; i < PLOTS; i++) plots.push({ seed: null, water: 0, grown: 0 });
  return {
    v: SAVE_VERSION,
    shopName: 'Tiệm Trà Mơ Ước',
    logo: { emoji: '🧋', img: null },
    stamp: { frame: 'round', textStyle: 'straight', bg: '#ffffff', slogan: 'Trà sữa mỗi ngày', icon: '🧋', img: null },
    day: 1, money: START_MONEY, phase: 'home', tab: 'kho', subtab: {},
    location: 'goc', season: 'spring', weather: 'sunny', temp: 25, eventId: 'trend', forecast: [],
    rating: 4.0, reviews: [], ratingCount: 0, followers: 144,
    stock, unlocked, onMenu, prices, plan: {}, lastUsed: {},
    cat: { tra: 0, huong: 0, top: 0, nv: 0, online: 0 }, equip: {}, apps: {},
    staff: {}, kpi: { shifts: 0 },
    pet: null, petDecor: {},
    garden: { plots, unlocked: PLOTS_START, seeds: {}, watered: false },
    branches: {}, franchise: { count: 0 },
    social: { ad: null, videosToday: 0, posts: [], viral: 0 },
    tax: { until: 0, last: 0, paid: 0, rate: 0.1 },
    bank: { balance: 0, principal: 0, since: 0, shifts: 0 },
    today: freshToday(),
    history: [],
    collection: { owned: {}, secrets: {}, packs: 1 },
    friends: { code: 'TTN-' + Math.random().toString(36).slice(2, 7).toUpperCase(), list: [], gifted: {} },
    crush: { level: 1, best: 0, perm: 0, gifts: 0 },
    pearl: { best: 0, playsDay: 0 },
    settings: { music: 0.7, sfx: 0.8, style: 'lofi', haptic: 2, hints: true, shiftMin: 4, shiftMinNext: 4, theme: 'cream', tutorialDone: false },
    firstRun: true, started: false,
    savedAt: Date.now(),
  };
}
export function freshToday() {
  return { rev: 0, tips: 0, online: 0, cogs: 0, rent: 0, util: 0, wage: 0, tax: 0, purchase: 0, cups: 0, left: 0, stars: [], waste: 0, branch: 0, fran: 0, interest: 0 };
}
export const S = newState();
export function replaceState(next) {
  for (const k of Object.keys(S)) delete S[k];
  Object.assign(S, next);
}

/* ===== Dirty flags ===== */
const dirty = new Set();
export const markDirty = (...k) => k.forEach((x) => dirty.add(x));
export const consumeDirty = () => { const o = [...dirty]; dirty.clear(); return o; };

/* ===== Save / Load ===== */
let storageOk = true;
function store() {
  if (!storageOk) return null;
  try { const s = window.localStorage; s.getItem(SAVE_KEY); return s; } catch (e) { storageOk = false; return null; }
}
const BK = SAVE_KEY + '_bk';
export function saveGame() {
  S.savedAt = Date.now();
  const st = store();
  if (!st) return false;
  try { st.setItem(SAVE_KEY, JSON.stringify({ v: SAVE_VERSION, t: Date.now(), s: S })); return true; } catch (e) { return false; }
}
let pend = null;
export function requestSave() {
  if (pend) return;
  pend = setTimeout(() => { pend = null; saveGame(); }, 700);
}
/** Lưu bản tự lưu cuối ngày (giữ 3 bản gần nhất). */
export function saveBackup() {
  const st = store();
  if (!st) return;
  try {
    const list = JSON.parse(st.getItem(BK) || '[]');
    list.unshift({ t: Date.now(), day: S.day, money: S.money, s: JSON.stringify(S) });
    st.setItem(BK, JSON.stringify(list.slice(0, 3)));
  } catch (e) { /* bỏ qua */ }
}
export function listBackups() {
  try { return JSON.parse(store()?.getItem(BK) || '[]').map((b, i) => ({ i, t: b.t, day: b.day, money: b.money })); } catch (e) { return []; }
}
function normalize(raw) {
  const d = newState();
  const s = { ...d, ...raw };
  for (const k of ['logo', 'stamp', 'cat', 'garden', 'social', 'tax', 'bank', 'collection', 'friends', 'crush', 'pearl', 'settings', 'kpi', 'forecast']) {
    if (d[k] && typeof d[k] === 'object' && !Array.isArray(d[k])) s[k] = { ...d[k], ...(raw[k] || {}) };
  }
  for (const k of ['stock', 'unlocked', 'onMenu', 'prices']) s[k] = { ...d[k], ...(raw[k] || {}) };
  // bản cũ dùng chung một kho "ly": chia đôi cho size M và L
  if (raw.stock && Array.isArray(raw.stock.ly) && !raw.stock.lyM && !raw.stock.lyL) {
    const lots = raw.stock.ly.filter((l) => l && l.q > 0);
    s.stock.lyM = lots.map((l) => ({ ...l, q: Math.ceil(l.q / 2) }));
    s.stock.lyL = lots.map((l) => ({ ...l, q: Math.floor(l.q / 2) })).filter((l) => l.q > 0);
  }
  for (const id of IDS) if (!Array.isArray(s.stock[id])) s.stock[id] = [];
  s.stock = Object.fromEntries(IDS.map((id) => [id, s.stock[id].filter((l) => l && l.q > 0)]));
  if (!Array.isArray(s.garden.plots) || s.garden.plots.length < PLOTS) s.garden.plots = d.garden.plots;
  s.money = Math.max(0, Number(s.money) || 0);
  s.rating = clamp(Number(s.rating) || 4, 1, 5);
  if (s.phase === 'sell') s.phase = 'home';
  s.today = { ...freshToday(), ...(raw.today || {}) };
  return s;
}
export function loadGame() {
  const st = store();
  if (!st) return false;
  try {
    const raw = st.getItem(SAVE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    replaceState(normalize(data.s));
    return true;
  } catch (e) { console.warn('[save] hỏng', e); return false; }
}
export function restoreBackup(i) {
  try {
    const b = JSON.parse(store().getItem(BK) || '[]')[i];
    if (!b) return false;
    replaceState(normalize(JSON.parse(b.s)));
    saveGame();
    return true;
  } catch (e) { return false; }
}
export function exportCode() {
  const json = JSON.stringify({ v: SAVE_VERSION, s: S });
  return 'TTM3.' + btoa(unescape(encodeURIComponent(json)));
}
export function importCode(code) {
  try {
    const c = String(code).trim();
    if (!c.startsWith('TTM3.')) return false;
    const data = JSON.parse(decodeURIComponent(escape(atob(c.slice(5)))));
    replaceState(normalize(data.s));
    saveGame();
    return true;
  } catch (e) { return false; }
}
export function wipeSave() {
  try { store()?.removeItem(SAVE_KEY); store()?.removeItem(BK); } catch (e) { /* bỏ qua */ }
  replaceState(newState());
}

/* ===== Game loop ===== */
const updaters = [], renderers = new Map(), frames = [];
let last = 0, running = false, paused = false, speed = 1;
export const registerUpdate = (f) => updaters.push(f);
export const registerRenderer = (k, f) => renderers.set(k, f);
export const registerFrame = (f) => frames.push(f);
function loop(ts) {
  if (!running) return;
  const dt = Math.min((ts - last) / 1000, 0.25);
  last = ts;
  if (!paused) for (const f of updaters) { try { f(dt * speed); } catch (e) { console.error('[loop] update', e); } }
  for (const k of consumeDirty()) { try { renderers.get(k)?.(); } catch (e) { console.error('[loop] render ' + k, e); } }
  for (const f of frames) { try { f(dt); } catch (e) { console.error('[loop] frame', e); } }
  requestAnimationFrame(loop);
}
export function startLoop() { if (running) return; running = true; last = performance.now(); requestAnimationFrame(loop); }
export const setPaused = (v) => { paused = !!v; };
export const isPaused = () => paused;
export const setSpeed = (v) => { speed = v; };
export function flushRender() { for (const k of consumeDirty()) { try { renderers.get(k)?.(); } catch (e) { console.error(e); } } }

/* ===== Âm thanh (Web Audio, không cần file) ===== */
let actx = null, master = null, mgain = null, musicTimer = null, mstep = 0, unlocked = false;
function ctx() {
  if (actx) return actx;
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    actx = new AC();
    master = actx.createGain(); master.connect(actx.destination);
    mgain = actx.createGain(); mgain.connect(actx.destination);
    applyVolumes();
  } catch (e) { actx = null; }
  return actx;
}
export function applyVolumes() {
  if (!master) return;
  master.gain.value = 0.45 * S.settings.sfx;
  mgain.gain.value = 0.16 * S.settings.music;
}
function tone(f, d, type = 'sine', vol = 1, when = 0, dest = null) {
  if (!actx) return;
  try {
    const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime + when;
    o.type = type; o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g).connect(dest || master);
    o.start(t); o.stop(t + d + 0.05);
  } catch (e) { /* bỏ qua */ }
}
const SFX = {
  click: () => tone(660, 0.06, 'triangle', 0.5),
  pop: () => tone(440, 0.06, 'square', 0.25),
  cup: () => { tone(300, 0.08, 'triangle', 0.6); tone(420, 0.06, 'triangle', 0.4, 0.05); },
  pour: () => tone(520 + Math.random() * 60, 0.09, 'sine', 0.18),
  drop: () => { tone(880, 0.05, 'sine', 0.4); tone(660, 0.07, 'sine', 0.3, 0.04); },
  seal: () => { tone(160, 0.12, 'sawtooth', 0.5); tone(900, 0.1, 'square', 0.25, 0.14); },
  ding: () => { tone(1568, 0.25, 'sine', 0.5); tone(2093, 0.3, 'sine', 0.3, 0.05); },
  coin: () => { tone(1040, 0.08, 'square', 0.3); tone(1310, 0.13, 'square', 0.3, 0.07); },
  success: () => { tone(523, 0.1, 'triangle'); tone(659, 0.1, 'triangle', 1, 0.09); tone(784, 0.18, 'triangle', 1, 0.18); },
  error: () => { tone(215, 0.14, 'sawtooth', 0.4); tone(175, 0.2, 'sawtooth', 0.4, 0.11); },
  sad: () => { tone(392, 0.14, 'sine'); tone(310, 0.26, 'sine', 1, 0.13); },
  sparkle: () => [1560, 1980, 2350].forEach((f, i) => tone(f, 0.09, 'sine', 0.45, i * 0.05)),
  unlock: () => { tone(700, 0.11, 'sine'); tone(930, 0.11, 'sine', 1, 0.1); tone(1170, 0.22, 'sine', 1, 0.2); },
  level: () => [523, 659, 784, 1046, 1318].forEach((f, i) => tone(f, 0.2, 'triangle', 1, i * 0.08)),
  bell: () => { tone(1760, 0.3, 'sine', 0.4); tone(2217, 0.4, 'sine', 0.25, 0.02); },
  match: () => { tone(600 + Math.random() * 300, 0.1, 'triangle', 0.5); },
  boom: () => { tone(120, 0.25, 'sawtooth', 0.5); tone(80, 0.3, 'square', 0.35, 0.05); },
  /* --- Trân Châu Nổ --- */
  // nổ lách tách nhỏ (nhóm 2-3 viên), tông ngẫu nhiên nhẹ
  pearlPop: () => { const f = 700 + Math.random() * 200; tone(f, 0.05, 'square', 0.22); tone(f * 1.5, 0.07, 'triangle', 0.3, 0.03); tone(f * 2, 0.05, 'sine', 0.2, 0.06); },
  // nổ vừa (4-5 viên): tông cao hơn, 4 nốt tách liên tiếp
  pearlPop2: () => [880, 1100, 1320, 1760].forEach((f, i) => tone(f * (1 + Math.random() * 0.03), 0.06, i % 2 ? 'triangle' : 'square', 0.28, i * 0.035)),
  // nổ lớn (≥6 viên)
  pearlBoom: () => { tone(110, 0.22, 'sawtooth', 0.45); tone(70, 0.3, 'square', 0.3, 0.03); [1046, 1318, 1568, 2093].forEach((f, i) => tone(f, 0.12, 'triangle', 0.35, 0.05 + i * 0.045)); },
  fly: () => { [400, 520, 680].forEach((f, i) => tone(f, 0.07, 'sine', 0.16, i * 0.03)); },
  swoosh: () => { [900, 700, 520, 380].forEach((f, i) => tone(f, 0.06, 'sine', 0.14, i * 0.025)); },
  bounce: () => { tone(220, 0.07, 'sine', 0.35); tone(330, 0.05, 'triangle', 0.18, 0.05); },
  // arpeggio combo tăng dần theo cấp: gọi sfx('combo2') ... sfx('combo6')
  combo: () => [659, 784, 988].forEach((f, i) => tone(f, 0.1, 'triangle', 0.4, i * 0.06)),
  ...Object.fromEntries([2, 3, 4, 5, 6].map((l) => ['combo' + l, () => { const b = 523 * Math.pow(1.122, l * 2); [1, 1.25, 1.5, 2, 2.5].slice(0, l + 1).forEach((m, i) => tone(b * m, 0.12, 'triangle', 0.42, i * 0.055)); }])),
  collect: () => { tone(1200, 0.06, 'sine', 0.3); tone(1600, 0.1, 'sine', 0.3, 0.06); },
  win: () => { [523, 659, 784, 1046, 784, 1046, 1318].forEach((f, i) => tone(f, 0.18, 'triangle', 0.55, i * 0.09)); tone(1568, 0.5, 'sine', 0.3, 0.65); },
  lose: () => { [440, 392, 330, 262].forEach((f, i) => tone(f, 0.2, 'sine', 0.5, i * 0.13)); },
};
/* ===== Rung (haptics): mức 0 tắt · 1 nhẹ · 2 vừa · 3 mạnh ===== */
const HAPTIC_MUL = [0, 0.6, 1, 1.7];
const HAPTIC = {
  click: 8, pop: 10, cup: 14, drop: 10, seal: [20, 30, 40], ding: 22, coin: 12, success: [15, 40, 25], error: [40, 30, 40], sad: 30,
  sparkle: 8, unlock: [20, 30, 20], level: [15, 30, 15, 30, 30], bell: 16, match: 12, boom: [40, 20, 60],
  pour: 0, combo: [14, 24, 20], bounce: 8, fly: 6, swoosh: 8, collect: [10, 20, 10],
};
/** Rung theo mức đã chọn. `pattern` là số ms hoặc mảng [rung, nghỉ, rung...]. */
export function buzz(pattern = 10) {
  const m = HAPTIC_MUL[S.settings.haptic ?? 2] || 0;
  if (pattern === 0) return;
  if (!m || !navigator.vibrate) return;
  const arr = Array.isArray(pattern) ? pattern : [pattern];
  try { navigator.vibrate(arr.map((v, i) => (i % 2 === 0 ? Math.max(4, Math.round(v * m)) : v))); } catch (e) { /* thiết bị không hỗ trợ */ }
}
export const sfx = (n) => { buzz(HAPTIC[n] ?? 8); if (unlocked && S.settings.sfx > 0) SFX[n]?.(); };
const STYLES = {
  lofi: { ms: 420, mel: [523, 0, 659, 0, 587, 0, 523, 0, 440, 0, 523, 659, 587, 0, 0, 0], bass: [131, 0, 0, 0, 175, 0, 0, 0, 147, 0, 0, 0, 196, 0, 0, 0], type: 'sine' },
  vui: { ms: 260, mel: [659, 784, 880, 784, 659, 523, 587, 659, 698, 880, 784, 698, 659, 587, 523, 0], bass: [262, 0, 262, 0, 349, 0, 349, 0, 294, 0, 294, 0, 392, 0, 392, 0], type: 'triangle' },
};
export function restartMusic() {
  if (musicTimer) clearInterval(musicTimer);
  musicTimer = null;
  const st = STYLES[S.settings.style];
  if (!unlocked || !actx || !st || S.settings.music <= 0) return;
  musicTimer = setInterval(() => {
    const i = mstep++ % st.mel.length;
    if (st.mel[i]) tone(st.mel[i], st.ms / 1000 * 0.9, st.type, 0.5, 0, mgain);
    if (st.bass[i]) tone(st.bass[i], st.ms / 1000 * 1.8, 'sine', 0.4, 0, mgain);
  }, st.ms);
}
export function initAudio() {
  const once = () => {
    if (unlocked) return;
    unlocked = true;
    const c = ctx();
    if (c?.state === 'suspended') c.resume().catch(() => {});
    restartMusic();
    window.removeEventListener('pointerdown', once);
    window.removeEventListener('keydown', once);
  };
  window.addEventListener('pointerdown', once);
  window.addEventListener('keydown', once);
}
export const gameHour = (t, total, startH = SHIFT_START_H, endH = 22) => startH + (t / total) * (endH - startH);
