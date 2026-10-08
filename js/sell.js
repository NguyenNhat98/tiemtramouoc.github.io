/**
 * Engine ca bán hàng: khách, order, pha ly (lấy ly → rót → hương → topping → đóng nắp → phục vụ),
 * nhân viên tự động, đơn online, sảnh bàn ghế, kết ca & sang ngày.
 */
import {
  ITEMS, TEAS, FLAVORS, TOPS, ARCHETYPES, STAFF, APPS, APP_FEE, BRANCHES, FRANCHISE, BANK, PETS, PET_DECOR, SEEDS,
  SHIFT_START_H, SHIFT_END_H, LOCATIONS, DAY_EVENTS, ADS, FEED_POSTS, FEED_AUTHORS, SECRET_RECIPES,
} from './config.js';
import { S, emit, on, markDirty, requestSave, saveGame, saveBackup, freshToday, clamp, rand, randInt, pick, chance, wpick, sum } from './core.js';
import * as E from './econ.js';

export const SH = { on: false };

/* ===== Sinh khách ===== */
function spawnPlan(n, total) {
  // Giờ cao điểm 11–13h và 17–19h đông hơn, nhưng khách đến ĐỀU (chia theo phân vị + nhiễu nhỏ), không dồn cục.
  const seg = [[10, 11, 1], [11, 13, 1.7], [13, 17, 1], [17, 19, 1.7], [19, 22, 1.1]];
  const tot = sum(seg, (s) => (s[1] - s[0]) * s[2]);
  const hourAt = (q) => {
    let r = q * tot;
    for (const [a, b, w] of seg) { const m = (b - a) * w; if (r <= m) return a + r / w; r -= m; }
    return 22;
  };
  const times = [];
  const minGap = Math.max(5, total / Math.max(n, 1) * 0.35);
  for (let i = 0; i < n; i++) {
    const q = clamp((i + 0.5 + rand(-0.28, 0.28)) / n, 0, 0.999);
    let t = ((hourAt(q) - 10) / 12) * total * 0.94 + 4;
    if (times.length && t - times[times.length - 1] < minGap) t = times[times.length - 1] + minGap;
    times.push(t);
  }
  return times;
}

export function makeOrder() {
  const b = E.bonus();
  const w = E.weatherOf();
  const ev = E.eventOf();
  const tw = {};
  for (const t of TEAS) {
    if (!S.onMenu[t] || !S.unlocked[t]) continue;
    let x = E.priceWeight(t) * (E.stockQty(t) > 0 ? 1 : 0.2);
    const tp = ITEMS[t].temp;
    if ((w.coldBias || ev.coldBias) && tp === 'cold') x *= 1.5;
    if (w.warmBias && tp === 'warm') x *= 1.8;
    if (ev.hotItem === t) x *= 2;
    tw[t] = x;
  }
  const tea = wpick(tw) || TEAS.find((t) => S.onMenu[t]) || 'traSua';
  const size = chance(0.3 * E.sizeLWeight() * ((w.coldBias || ev.coldBias) ? 1.5 : 1)) ? 'L' : 'M';
  let flavor = null;
  const fw = {};
  for (const f of FLAVORS) if (S.onMenu[f] && S.unlocked[f]) fw[f] = E.priceWeight(f) * (E.stockQty(f) > 0 ? 1 : 0.15);
  if (Object.keys(fw).length && chance(0.45)) flavor = wpick(fw) || null;
  const tw2 = {};
  for (const t of TOPS) if (S.onMenu[t] && S.unlocked[t]) tw2[t] = E.priceWeight(t) * (E.stockQty(t) > 0 ? 1 : 0.15);
  const nT = Math.min(Object.keys(tw2).length, +wpick({ 0: 20, 1: 45, 2: 25, 3: 8, 4: 2 }));
  const tops = [];
  const pool = { ...tw2 };
  for (let i = 0; i < nT; i++) { const t = wpick(pool); if (!t) break; tops.push(t); delete pool[t]; }
  return { tea, size, flavor, tops };
}
function orderText(arch, o) {
  const drink = ITEMS[o.tea].name.toLowerCase() + (o.flavor ? ` vị ${ITEMS[o.flavor].name.toLowerCase()}` : '');
  const tops = o.tops.length ? ' với ' + o.tops.map((t) => ITEMS[t].name.toLowerCase()).join(' và ') : '';
  return pick(arch.lines).replace('{drink}', drink).replace('{size}', 'size ' + o.size).replace('{tops}', tops);
}
export function orderPrice(o) {
  return E.priceOf(o.tea) + (o.flavor ? E.priceOf(o.flavor) : 0) + sum(o.tops, (t) => E.priceOf(t)) + (o.size === 'L' ? E.priceOf('sizeL') : 0);
}

let cid = 1;
function newCustomer(opts = {}) {
  const b = E.bonus();
  const keys = {};
  for (const [k, a] of Object.entries(ARCHETYPES)) {
    if (k === 'reviewer' && !opts.reviewer) continue;
    keys[k] = a.w * (E.eventOf().student && (k === 'sinhVien' || k === 'be') ? 2 : 1);
  }
  const key = opts.reviewer ? 'reviewer' : wpick(keys);
  const a = ARCHETYPES[key];
  const order = makeOrder();
  const maxP = (62 * a.patience * (1 + b.patience)) * (opts.online ? 1.2 : 1);
  return {
    id: cid++, key, tag: a.tag, avatar: pick(a.avatars), order, text: orderText(a, order),
    p: maxP, maxP, online: !!opts.online, app: opts.app || null, hard: a.hard + b.hardCust - b.badRev, born: SH.t,
  };
}

/* ===== Vòng đời ca ===== */
export function startShift() {
  if (SH.on) return 'Đang trong ca';
  const chk = E.openMissing();
  if (!chk.canOpen) return 'Chưa đủ nguyên liệu để mở cửa';
  const total = S.settings.shiftMin * 60;
  const n = E.expectedCustomers();
  Object.assign(SH, {
    on: true, total, t: 0, hour: SHIFT_START_H, queue: [], sel: null, plan: spawnPlan(n, total), pi: 0, expected: n,
    served: 0, left: 0, rev: 0, tip: 0, board: null, onlineQ: [], onlineNext: rand(12, 25), tables: [], view: 'counter',
    staffT: {}, jobs: [], over: 0, fb: [], buyT: 0, fin: false, critic: E.eventOf().critic ? { at: total * rand(0.35, 0.6), done: false } : null,
    sat: 0, cupsDone: 0,
  });
  // Lần đầu: có sẵn 1 khách để hướng dẫn minh họa ngay (đơn giản, không topping).
  if (S.settings.tut && S.settings.tut.sell === false) {
    const c = newCustomer(); c.order.tops = []; c.order.flavor = null; c.text = orderText(ARCHETYPES[c.key], c.order);
    SH.queue.push(c); SH.pi = Math.min(SH.pi + 1, SH.plan.length);
  }
  const nt = E.bonus().tables;
  for (let i = 0; i < nt; i++) SH.tables.push({ s: 'free', t: 0 });
  S.phase = 'sell';
  S.started = true;
  markDirty('view', 'hud');
  emit('shift:start');
  return null;
}
export const frontCustomer = () => SH.queue.find((c) => c.id === SH.sel) || SH.queue[0] || null;
export function selectCustomer(id) {
  if (!SH.queue.some((c) => c.id === id)) return;
  SH.sel = id;
  emit('sel');
}
function removeCust(c) {
  SH.queue = SH.queue.filter((x) => x !== c);
  if (SH.sel === c.id) SH.sel = null;
  SH.jobs = SH.jobs.filter((j) => j.cid !== c.id);
  emit('queue');
}
function customerLeaves(c, why) {
  removeCust(c);
  SH.left++; S.today.left++;
  if (why === 'patience') {
    const stars = chance(0.5) ? 1 : 2;
    pushReview(c, stars, 'Chờ lâu quá nên mình đành bỏ về...');
    emit('left', c);
  }
}
const REV_TEXT = {
  5: ['Ly trà chuẩn vị luôn, nhân viên dễ thương, sẽ quay lại nhé!', 'Pha nhanh, đúng order từng chút một. 10 điểm!', 'Quán xinh, trà ngon, topping tươi. Chấm 5 sao!'],
  4: ['Trà ngon, chờ hơi lâu một chút nhưng xứng đáng.', 'Ổn áp, lần sau mình sẽ ghé tiếp.', 'Ly đẹp, vị ổn, giá hợp lý.'],
  3: ['Tạm được, mong lần sau chuẩn vị hơn.', 'Hơi nhạt so với mong đợi, ly cũng chưa đầy.', 'Bình thường, không có gì đặc biệt.'],
  2: ['Ly bị sai so với order của mình rồi 😕', 'Chờ khá lâu mà ly lại sai topping.', 'Hơi thất vọng, quán cần cẩn thận hơn.'],
  1: ['Sai hẳn món mình gọi, buồn ghê.', 'Chờ mãi không tới lượt, mình về đây.', 'Trải nghiệm tệ, mong quán rút kinh nghiệm.'],
};
function pushReview(c, stars, text) {
  const weight = c.key === 'reviewer' ? 3 : 1;
  for (let i = 0; i < weight; i++) {
    S.reviews.unshift({ stars, name: c.tag, av: c.avatar, text: text || pick(REV_TEXT[stars]), day: S.day });
  }
  if (S.reviews.length > 200) S.reviews.length = 200;
  S.ratingCount += 1;
  S.rating = clamp((40 + sum(S.reviews, (r) => r.stars)) / (10 + S.reviews.length), 1, 5);
  S.today.stars.push(stars);
  markDirty('hud');
}

/* ===== Hành động pha chế của người chơi ===== */
export function pickCup(size) {
  if (!SH.on) return 'Chưa mở cửa';
  if (SH.board) return 'Đang có ly trên thớt';
  const cupId = size === 'L' ? 'lyL' : 'lyM';
  if (E.stockQty(cupId) < 1) return `Hết ly size ${size === 'L' ? 'L' : 'M'} rồi!`;
  E.take(cupId, 1);
  SH.board = { size, tea: null, fill: 0, flavor: null, tops: [], phase: 'cup', sealT: 0, pouring: false, spill: 0, auto: null };
  const staffPour = STAFF.filter((s) => S.staff[s.id] && (s.kind === 'pour' || s.kind === 'manager'));
  if (staffPour.length) {
    const c = frontCustomer();
    if (c) SH.board.auto = { cid: c.id, t: 1.1, topsLeft: staffPour.some((s) => s.kind === 'manager') ? [...c.order.tops] : [], st: staffPour[0] };
  }
  emit('cup:pick', size);
  return null;
}
export function startPour(tea) {
  const b = SH.board;
  if (!b || b.phase !== 'cup') return 'Hãy lấy ly trước';
  if (b.tea && b.tea !== tea) return 'Ly đã rót loại trà khác';
  if (b.fill >= 1.25) return 'Ly đầy rồi';
  if (!b.tea) {
    if (E.stockQty(tea) < 1) return `Hết ${ITEMS[tea].name}!`;
    E.take(tea, 1);
    b.tea = tea;
  }
  b.pouring = true;
  emit('pour:start', tea);
  return null;
}
export function stopPour() {
  const b = SH.board;
  if (!b || !b.pouring) return;
  b.pouring = false;
  emit('pour:stop');
}
export function addFlavor(id) {
  const b = SH.board;
  if (!b || b.phase !== 'cup') return 'Hãy lấy ly trước';
  if (b.flavor) return 'Ly đã có hương';
  if (E.stockQty(id) < 1) return `Hết ${ITEMS[id].name}!`;
  E.take(id, 1);
  b.flavor = id;
  emit('flavor', id);
  return null;
}
export function addTop(id) {
  const b = SH.board;
  if (!b || b.phase !== 'cup') return 'Hãy lấy ly trước';
  if (b.tops.includes(id)) return 'Ly đã có topping này';
  if (b.tops.length >= 4) return 'Tối đa 4 topping';
  if (E.stockQty(id) < 1) return `Hết ${ITEMS[id].name}!`;
  E.take(id, 1);
  b.tops.push(id);
  emit('top', id);
  return null;
}
export function sealCup() {
  const b = SH.board;
  if (!b || b.phase !== 'cup') return 'Chưa có ly để đóng nắp';
  if (!b.tea || b.fill < 0.2) return 'Ly chưa có trà';
  if (b.pouring) stopPour();
  if (E.stockQty('da') > 0) E.take('da', 1);
  if (E.stockQty('duong') > 0) E.take('duong', 1);
  b.phase = 'sealing';
  b.sealT = 1.2 * (1 - E.bonus().seal);
  b.sealMax = b.sealT;
  emit('seal:start');
  return null;
}
export function trashCup() {
  if (!SH.board) return;
  SH.board = null;
  S.today.waste += 3000;
  emit('trash');
}
/** Chấm điểm ly so với order của khách. */
export function evaluate(board, c) {
  const o = c.order;
  const issues = [];
  let stars = 5;
  if (board.tea !== o.tea) { stars -= 3; issues.push('sai loại trà'); }
  if (board.size !== o.size) { stars -= 2; issues.push('sai size'); }
  if ((board.flavor || null) !== (o.flavor || null)) { stars -= 1; issues.push(board.flavor ? 'thừa/sai hương' : 'thiếu hương'); }
  const miss = o.tops.filter((t) => !board.tops.includes(t)).length;
  const extra = board.tops.filter((t) => !o.tops.includes(t)).length;
  if (miss + extra) { stars -= Math.min(2, miss + extra); issues.push('sai topping'); }
  if (board.fill < 0.75) { stars -= 1; issues.push('ly lưng'); }
  if (board.spill > 0) { stars -= 1; issues.push('rót tràn'); }
  if (c.p / c.maxP < 0.2) { stars -= 1; issues.push('chờ lâu'); }
  if (stars >= 4 && chance(clamp(c.hard * 0.5, 0, 0.5))) { stars -= 1; issues.push('khách khó tính'); }
  return { stars: clamp(stars, 1, 5), issues };
}
const PAY = { 1: 0.3, 2: 0.55, 3: 0.8, 4: 1, 5: 1 };
export function serve(forced) {
  const b = SH.board;
  const c = forced?.c || frontCustomer();
  if (!c) return 'Chưa có khách';
  const board = forced?.board || b;
  if (!board || (board.phase !== 'ready' && !forced)) return 'Ly chưa đóng nắp xong';
  const ev = evaluate(board, c);
  const res = settle(c, board, ev.stars, ev.issues, !!forced);
  if (!forced) SH.board = null;
  return res;
}
/** Tính tiền, review, tip, ngồi sảnh. */
function settle(c, board, stars, issues, byStaff) {
  const bn = E.bonus();
  const unit = E.priceOf(board.tea) + (board.flavor ? E.priceOf(board.flavor) : 0) + sum(board.tops, (t) => E.priceOf(t)) + (board.size === 'L' ? E.priceOf('sizeL') : 0);
  const arch = ARCHETYPES[c.key];
  let bill = unit * PAY[stars] * arch.bill * (1 + bn.bill + (bn.billTeas[board.tea] || 0));
  if (SH.hour >= 20) bill *= 1 + bn.lateBill;
  if (c.online) bill *= 1.15;
  let luck = false;
  if (chance(0.015 + bn.lucky * 0.1)) { bill *= 2; luck = true; }
  let tip = 0;
  if (stars >= 4) {
    const coldPen = ITEMS[board.tea].temp === 'cold' ? bn.coldTip : 0;
    tip = bill * 0.12 * arch.tip * (stars === 5 ? 1.5 : 1) * Math.max(0, 1 + bn.tip + coldPen);
    if (byStaff) tip *= 0.5;
  }
  let pay = Math.round(bill);
  tip = Math.round(tip);
  if (c.online) {
    const fee = Math.round(pay * APP_FEE);
    pay -= fee;
    S.today.online += pay + tip;
  }
  S.money += pay + tip;
  S.today.rev += pay;
  S.today.tips += tip;
  S.today.cups += 1;
  SH.rev += pay + tip; SH.tip += tip; SH.served++; SH.cupsDone++;
  pushReview(c, stars, null);
  S.followers += Math.round((stars >= 4 ? 3 : 0) + (E.equipLevel('qcMxh') * 2));
  removeCust(c);
  // Ngồi sảnh
  let seat = null;
  if (!c.online && !byStaff && chance(0.4)) {
    const free = SH.tables.findIndex((t) => t.s === 'free');
    if (free >= 0) { SH.tables[free] = { s: 'busy', t: rand(16, 28), av: c.avatar }; seat = free; const extra = Math.round(bill * 0.1); S.money += extra; S.today.rev += extra; SH.rev += extra; }
  }
  const out = { stars, pay, tip, issues, luck, seat, cust: c, byStaff };
  emit('served', out);
  markDirty('hud');
  requestSave();
  return out;
}
export function cleanTable(i) {
  const t = SH.tables[i];
  if (!t || t.s !== 'dirty') return false;
  SH.tables[i] = { s: 'free', t: 0 };
  const tip = randInt(1, 3) * 1000;
  S.money += tip; S.today.tips += tip; SH.tip += tip; SH.rev += tip;
  emit('table:clean', { i, tip });
  markDirty('hud');
  return true;
}

/* ===== Online ===== */
function spawnOnline() {
  const open = APPS.filter((a) => S.apps[a.id]);
  if (!open.length) return;
  SH.onlineQ.push({ id: cid++, app: pick(open), exp: 22, o: makeOrder() });
  emit('online:new');
}
export function acceptOnline(id) {
  const q = SH.onlineQ.find((x) => x.id === id);
  if (!q) return 'Đơn đã hết hạn';
  if (SH.queue.length >= E.bonus().queue + 2) return 'Hàng chờ đã đầy';
  SH.onlineQ = SH.onlineQ.filter((x) => x !== q);
  const c = newCustomer({ online: true, app: q.app });
  c.order = q.o; c.avatar = '📱'; c.tag = `📱 ${q.app.name}`; c.text = `Đơn ${q.app.name}: ${ITEMS[q.o.tea].name} size ${q.o.size}${q.o.flavor ? ' vị ' + ITEMS[q.o.flavor].name.toLowerCase() : ''}${q.o.tops.length ? ' + ' + q.o.tops.map((t) => ITEMS[t].name.toLowerCase()).join(', ') : ''}. Giao nhanh giúp nhé!`;
  SH.queue.push(c);
  emit('queue');
  return null;
}

/* ===== Nhân viên tự động ===== */
function staffStep(dt) {
  const b = E.bonus();
  const speedMul = 1 / (1 + b.speedStaff) * (S.staff.meKetTinh ? 0.8 : 1);
  for (const st of STAFF) {
    if (!S.staff[st.id]) continue;
    if (st.kind === 'auto' || st.kind === 'online') {
      const key = st.id;
      const busy = SH.jobs.find((j) => j.by === key);
      if (busy) {
        busy.t -= dt;
        if (busy.t <= 0) { finishJob(busy, st, b); SH.jobs = SH.jobs.filter((j) => j !== busy); }
        continue;
      }
      const free = SH.queue.filter((c) => !SH.jobs.some((j) => j.cid === c.id));
      const front = frontCustomer();
      let cand = null;
      if (st.kind === 'online') cand = free.find((c) => c.online);
      else if (SH.queue.length >= (st.minQueue || 1)) cand = free.filter((c) => !c.online && !(SH.board && c === front)).sort((x, y) => x.p - y.p)[0];
      if (cand) {
        const need = needs(cand.order);
        if (!canTake(need)) continue;
        SH.jobs.push({ by: key, cid: cand.id, t: st.sec * speedMul });
        for (const [id, n] of need) E.take(id, n);
      }
    } else if (st.kind === 'buyer') {
      SH.buyT += dt;
      if (SH.buyT >= 4) {
        SH.buyT = 0;
        const want = [...TEAS.filter((t) => S.onMenu[t]), ...TOPS.filter((t) => S.onMenu[t]), 'lyM', 'lyL', 'da', 'duong'];
        for (const id of want) {
          if (E.stockQty(id) === 0) {
            const q = 8, cost = Math.round(E.unitCost(id) * q * 1.1);
            if (S.money >= cost) { S.money -= cost; S.today.purchase += cost; E.addStock(id, q); emit('buyer', id); markDirty('hud'); break; }
          }
        }
      }
    }
  }
}
const needs = (o) => [[o.size === 'L' ? 'lyL' : 'lyM', 1], [o.tea, 1], ...(o.flavor ? [[o.flavor, 1]] : []), ...o.tops.map((t) => [t, 1]), ['da', 1], ['duong', 1]];
const canTake = (list) => list.every(([id, n]) => E.stockQty(id) >= n);
function finishJob(job, st, b) {
  const c = SH.queue.find((x) => x.id === job.cid);
  if (!c) return;
  const err = clamp(st.err * (1 - b.errReduce), 0, 1);
  const board = { tea: c.order.tea, size: c.order.size, flavor: c.order.flavor, tops: [...c.order.tops], fill: 1, spill: 0, phase: 'ready' };
  let forceStars = null;
  if (chance(err)) { board.size = board.size === 'M' ? 'L' : 'M'; forceStars = 3; }
  serveStaff(c, board, forceStars);
}
function serveStaff(c, board, forceStars) {
  const ev = evaluate(board, c);
  settle(c, board, forceStars ? Math.min(forceStars, ev.stars) : Math.min(ev.stars, 5), ev.issues, true);
}

/* ===== Cập nhật mỗi frame ===== */
export function updateShift(dt) {
  if (!SH.on || S.phase !== 'sell') return;
  SH.t += dt;
  SH.hour = SHIFT_START_H + (Math.min(SH.t, SH.total) / SH.total) * (SHIFT_END_H - SHIFT_START_H);
  const b = E.bonus();
  const maxQ = b.queue;
  // sinh khách theo lịch
  while (SH.pi < SH.plan.length && SH.t >= SH.plan[SH.pi] && SH.t < SH.total) {
    SH.pi++;
    if (SH.queue.length >= maxQ) { SH.left++; S.today.left++; emit('balk'); continue; }
    SH.queue.push(newCustomer());
    emit('queue'); emit('ding');
  }
  if (SH.critic && !SH.critic.done && SH.t >= SH.critic.at && SH.queue.length < maxQ) {
    SH.critic.done = true;
    SH.queue.push(newCustomer({ reviewer: true }));
    emit('queue');
  }
  // online
  if (S.settings && E.onlineEnabled() && SH.t < SH.total * 0.95) {
    SH.onlineNext -= dt;
    if (SH.onlineNext <= 0) { SH.onlineNext = rand(16, 34) / Math.max(0.3, 1 + b.online); spawnOnline(); }
  }
  for (const q of SH.onlineQ) q.exp -= dt;
  const before = SH.onlineQ.length;
  SH.onlineQ = SH.onlineQ.filter((q) => q.exp > 0);
  if (before !== SH.onlineQ.length) emit('online:new');
  // kiên nhẫn
  for (const c of [...SH.queue]) {
    if (SH.jobs.some((j) => j.cid === c.id)) { c.p -= dt * 0.4; } else c.p -= dt;
    if (c.p <= 0) customerLeaves(c, 'patience');
  }
  // thớt
  const bd = SH.board;
  if (bd) {
    if (bd.pouring) {
      const rate = 0.55 * (1 + b.pour + b.speedStaff);
      bd.fill += rate * dt;
      if (bd.fill > 1.0) { bd.spill += (bd.fill - 1.0) * 0.5; }
      if (bd.fill >= 1.25) { bd.fill = 1.25; bd.pouring = false; emit('pour:stop'); }
    }
    if (bd.phase === 'sealing') {
      bd.sealT -= dt;
      if (bd.sealT <= 0) { bd.phase = 'ready'; emit('seal:done'); }
    }
    if (bd.auto) {
      const a = bd.auto;
      a.t -= dt;
      const c = SH.queue.find((x) => x.id === a.cid);
      if (!c) bd.auto = null;
      else if (a.t <= 0) {
        if (!bd.tea && E.stockQty(c.order.tea) > 0) {
          E.take(c.order.tea, 1); bd.tea = c.order.tea;
          const error = chance(a.st.err * (1 - b.errReduce));
          bd.fill = error ? 0.6 : 0.95;
          if (c.order.flavor && E.stockQty(c.order.flavor) > 0 && !bd.flavor) { E.take(c.order.flavor, 1); bd.flavor = c.order.flavor; }
          emit('auto:pour');
          a.t = 0.7;
        } else if (a.topsLeft.length) {
          const t = a.topsLeft.shift();
          if (E.stockQty(t) > 0 && !bd.tops.includes(t)) { E.take(t, 1); bd.tops.push(t); emit('top', t); }
          a.t = 0.5;
        } else bd.auto = null;
      }
    }
  }
  // bàn
  for (let i = 0; i < SH.tables.length; i++) {
    const t = SH.tables[i];
    if (t.s === 'busy') { t.t -= dt; if (t.t <= 0) { SH.tables[i] = { s: 'dirty', t: 0 }; emit('tables'); } }
  }
  staffStep(dt);
  // kết ca
  if (SH.t >= SH.total) {
    SH.over += dt;
    if (SH.queue.length === 0 || SH.over > 22) finishShift(false);
  }
}
export function closeNow() {
  if (!SH.on) return;
  SH.queue.forEach((c) => { SH.left++; S.today.left++; });
  SH.queue = [];
  finishShift(true);
}

/* ===== Kết ca & kế toán ===== */
function branchDaily() {
  const bn = E.bonus();
  let net = 0, rev = 0;
  for (const [id, br] of Object.entries(S.branches)) {
    const def = BRANCHES.find((x) => x.id === id);
    if (!def) continue;
    const adB = S.social.ad && S.day <= S.social.ad.endsDay ? ADS.find((a) => a.id === S.social.ad.id).branch : 0;
    const r = rand(def.rev[0], def.rev[1]) * (0.8 + S.rating * 0.05) * (1 + bn.branch + adB) * (1 + 0.1 * (br.staff || 0));
    const ing = r * rand(def.ing[0], def.ing[1]);
    const wage = (br.staff || 0) * 150000;
    const p = r - ing - wage - def.rent;
    br.profit = p; br.rev = (br.rev || 0) + r; br.days = (br.days || 0) + 1; br.last = { r, ing, wage, rent: def.rent, p };
    net += p; rev += r;
  }
  return { net, rev };
}
function franchiseDaily() {
  const n = S.franchise.count;
  if (!n) return 0;
  const bn = E.bonus();
  return Math.round(sum(Array.from({ length: n }), () => rand(FRANCHISE.revRange[0], FRANCHISE.revRange[1]) * FRANCHISE.royalty * (1 + bn.branch)));
}
function finishShift(early) {
  if (SH.fin) return;
  SH.fin = true;
  SH.on = false;
  const T = S.today;
  // Nhân viên ca đêm xử lý nốt: bỏ qua
  const ex = E.expireStock();
  T.rent = E.rentToday();
  T.util = E.utilityToday();
  T.wage = E.staffWagePerDay() + (S.staff.chuBa ? Math.round(T.rev * 0.01) : 0);
  const br = branchDaily();
  T.branch = Math.round(br.net);
  T.fran = franchiseDaily();
  let interest = 0;
  if (S.bank.balance > 0) { interest = Math.round(S.bank.balance * BANK.interest * (S.rating >= 4.5 ? 1 + BANK.starBonus : 1)); S.bank.balance = Math.min(BANK.max, S.bank.balance + interest); S.bank.shifts++; }
  T.interest = interest;
  S.money = Math.max(0, S.money - T.rent - T.util - T.wage + T.branch + T.fran);
  T.profit = T.rev + T.tips - T.cogs - T.rent - T.util - T.wage - T.tax + T.branch + T.fran + T.interest;
  T.avgStars = T.stars.length ? sum(T.stars) / T.stars.length : 0;
  T.expired = ex.list;
  T.cash = S.money;
  T.event = S.eventId; T.weather = S.weather;
  S.history.push({ day: S.day, rev: T.rev + T.tips, cogs: T.cogs, rent: T.rent, util: T.util, wage: T.wage, tax: T.tax, branch: T.branch, fran: T.fran, interest, profit: T.profit, cups: T.cups, left: T.left, stars: T.avgStars, online: T.online, event: S.eventId });
  if (S.history.length > 400) S.history.shift();
  S.kpi.shifts++;
  for (const k of Object.keys(S.staff)) S.staff[k].shifts = (S.staff[k].shifts || 0) + 1;
  S.phase = 'end';
  S.last = { early };
  saveBackup();
  saveGame();
  markDirty('view', 'hud');
  emit('shift:end', T);
}

/** Sang ngày mới. */
export function nextDay() {
  S.day++;
  E.ensureForecast();
  S.eventId = E.pickEvent();
  S.today = freshToday();
  S.lastUsed = {};
  S.social.videosToday = 0;
  S.pearl.playsDay = 0;
  S.crush.playedToday = false;
  // vườn
  const g = S.garden;
  for (const p of g.plots) if (p.seed) { if (g.watered) p.grown++; }
  g.watered = false;
  // thú cưng
  if (S.pet) {
    const decay = (k, v) => Math.max(0, S.pet[k] - v);
    const d = (id, f) => (S.petDecor[id] ? f : 1);
    S.pet.hunger = decay('hunger', 25 * d('bat', 0.8));
    S.pet.joy = decay('joy', 15 * d('xit', 0.75));
    S.pet.clean = decay('clean', 12 * d('say', 0.75));
    S.pet.energy = decay('energy', 20 * d('sofa', 0.75));
  }
  // KPI chu kỳ 7 ca
  if (S.kpi.shifts >= 7) { S.kpi.shifts = 0; emit('kpi:cycle'); }
  S.phase = 'home';
  S.plan = {};
  Object.assign(SH, { on: false, fin: false });
  markDirty('view', 'hud', 'panel', 'cta');
  emit('day:next');
  saveGame();
}
export function resetShiftRuntime() { Object.assign(SH, { on: false, fin: false }); }

/** Sinh bài đăng MXH hằng ngày (gọi khi sang ngày mở app MXH). */
export function genPost() {
  const t = pick(FEED_POSTS), a = pick(FEED_AUTHORS);
  return { ...t, author: a, day: S.day, views: randInt(20, 180) + 'K', likes: randInt(2, 20) + 'K' };
}
void LOCATIONS; void DAY_EVENTS; void PETS; void PET_DECOR; void SEEDS; void SECRET_RECIPES; void on; void saveGame;
