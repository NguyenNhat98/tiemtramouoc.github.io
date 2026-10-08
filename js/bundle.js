(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // js/config.js
  var DEBUG = true;
  var VERSION = "3.1.0";
  var SAVE_KEY = "tiemTraMoUoc3";
  var SAVE_VERSION = 1;
  var SHIFT_START_H = 10;
  var SHIFT_END_H = 22;
  var QUEUE_BASE = 5;
  var START_MONEY = 4e5;
  var BASE_RENT = 4e4;
  var BASE_UTILITY = 28e3;
  var DAYS_PER_SEASON = 7;
  var ITEMS = {
    traSua: { name: "Tr\xE0 s\u1EEFa", kind: "tea", icon: "\u{1F9CB}", color: "#c9a06f", cost: 4500, life: 3, price: 25e3, unlock: 0, temp: "cold", short: "TR\xC0 S\u1EEEA" },
    matcha: { name: "Matcha", kind: "tea", icon: "\u{1F375}", color: "#8fbf6a", cost: 6e3, life: 3, price: 3e4, unlock: 0, temp: "cold", short: "MATCHA" },
    hongTra: { name: "H\u1ED3ng tr\xE0", kind: "tea", icon: "\u{1FAD6}", color: "#b5563c", cost: 1500, life: 3, price: 22e3, unlock: 15e4, temp: "warm", short: "H\u1ED2NG TR\xC0" },
    lucTra: { name: "L\u1EE5c tr\xE0", kind: "tea", icon: "\u{1F343}", color: "#b9c46a", cost: 1500, life: 3, price: 22e3, unlock: 15e4, temp: "cold", short: "L\u1EE4C TR\xC0" },
    olong: { name: "Tr\xE0 \xF4 long", kind: "tea", icon: "\u{1F3F5}\uFE0F", color: "#a9744a", cost: 2500, life: 3, price: 28e3, unlock: 25e4, temp: "warm", short: "\xD4 LONG" },
    traThai: { name: "Tr\xE0 s\u1EEFa Th\xE1i", kind: "tea", icon: "\u{1F9E1}", color: "#e8894a", cost: 5e3, life: 3, price: 3e4, unlock: 3e5, temp: "cold", short: "TR\xC0 TH\xC1I" },
    vai: { name: "V\u1EA3i", kind: "flavor", icon: "\u{1F338}", color: "#f3d7cf", cost: 4400, life: 7, price: 8e3, unlock: 2e5 },
    dao: { name: "\u0110\xE0o", kind: "flavor", icon: "\u{1F351}", color: "#f5b66b", cost: 4400, life: 7, price: 8e3, unlock: 2e5 },
    dau: { name: "D\xE2u", kind: "flavor", icon: "\u{1F353}", color: "#f07c95", cost: 4400, life: 7, price: 8e3, unlock: 2e5 },
    nho: { name: "Nho", kind: "flavor", icon: "\u{1F347}", color: "#8e5aa8", cost: 4400, life: 7, price: 9e3, unlock: 2e5 },
    oi: { name: "\u1ED4i", kind: "flavor", icon: "\u{1F348}", color: "#f4a3a0", cost: 4400, life: 7, price: 8e3, unlock: 2e5 },
    xoai: { name: "Xo\xE0i", kind: "flavor", icon: "\u{1F96D}", color: "#f2c14e", cost: 4400, life: 7, price: 9e3, unlock: 2e5 },
    mangCau: { name: "M\xE3ng c\u1EA7u", kind: "flavor", icon: "\u{1F34F}", color: "#cfe3b0", cost: 4400, life: 7, price: 1e4, unlock: 2e5 },
    tao: { name: "T\xE1o", kind: "flavor", icon: "\u{1F34E}", color: "#d8e36b", cost: 4400, life: 7, price: 8e3, unlock: 2e5 },
    chanh: { name: "Chanh", kind: "flavor", icon: "\u{1F34B}", color: "#e6e27a", cost: 4400, life: 7, price: 5e3, unlock: 2e5 },
    me: { name: "Me", kind: "flavor", icon: "\u{1F7E4}", color: "#9c6b3c", cost: 4400, life: 7, price: 7e3, unlock: 2e5 },
    duaGang: { name: "D\u01B0a gang", kind: "flavor", icon: "\u{1F348}", color: "#f6c79a", cost: 4400, life: 7, price: 1e4, unlock: 2e5 },
    choco: { name: "Chocolate", kind: "flavor", icon: "\u{1F36B}", color: "#5b3a29", cost: 4400, life: 7, price: 1e4, unlock: 2e5 },
    bacHa: { name: "B\u1EA1c h\xE0", kind: "flavor", icon: "\u{1F33F}", color: "#9fe0c0", cost: 4400, life: 7, price: 8e3, unlock: 25e4 },
    tcDen: { name: "Tr\xE2n ch\xE2u \u0111en", kind: "top", group: "Tr\xE2n ch\xE2u", icon: "\u26AB", color: "#2b1d14", cost: 2e3, life: 2, price: 6e3, unlock: 0 },
    tcTrang: { name: "Tr\xE2n ch\xE2u tr\u1EAFng", kind: "top", group: "Tr\xE2n ch\xE2u", icon: "\u26AA", color: "#f4efe4", cost: 1500, life: 4, price: 5e3, unlock: 0 },
    tcVang: { name: "Tr\xE2n ch\xE2u ho\xE0ng kim", kind: "top", group: "Tr\xE2n ch\xE2u", icon: "\u{1F7E1}", color: "#e0a526", cost: 2500, life: 2, price: 8e3, unlock: 2e5 },
    tcSoi: { name: "Tr\xE2n ch\xE2u s\u1EE3i", kind: "top", group: "Tr\xE2n ch\xE2u", icon: "\u{1F7E0}", color: "#a8744e", cost: 2500, life: 2, price: 8e3, unlock: 25e4 },
    tcNo: { name: "Tr\xE2n ch\xE2u n\u1ED5", kind: "top", group: "Tr\xE2n ch\xE2u", icon: "\u{1F534}", color: "#f28fb0", cost: 3500, life: 3, price: 9e3, unlock: 3e5 },
    cuNang: { name: "Th\u1EA1ch c\u1EE7 n\u0103ng", kind: "top", group: "Th\u1EA1ch", icon: "\u{1F7E2}", color: "#9fd49a", cost: 2e3, life: 3, price: 7e3, unlock: 2e5 },
    thachTc: { name: "Th\u1EA1ch tr\xE1i c\xE2y", kind: "top", group: "Th\u1EA1ch", icon: "\u{1F7E7}", color: "#f5a0b8", cost: 2e3, life: 3, price: 6e3, unlock: 2e5 },
    suongSao: { name: "S\u01B0\u01A1ng s\xE1o", kind: "top", group: "Th\u1EA1ch", icon: "\u2B1B", color: "#1f2a24", cost: 1500, life: 3, price: 6e3, unlock: 15e4 },
    thachCf: { name: "Th\u1EA1ch c\xE0 ph\xEA", kind: "top", group: "Th\u1EA1ch", icon: "\u{1F7EB}", color: "#5a3a26", cost: 2e3, life: 3, price: 7e3, unlock: 2e5 },
    fCheese: { name: "Foam cheese", kind: "top", group: "Foam", icon: "\u{1F9C0}", color: "#f7d35c", cost: 3500, life: 2, price: 1e4, unlock: 3e5 },
    fMatcha: { name: "Foam matcha", kind: "top", group: "Foam", icon: "\u{1F348}", color: "#b6d48f", cost: 4e3, life: 2, price: 1e4, unlock: 35e4 },
    fMuoi: { name: "Foam mu\u1ED1i", kind: "top", group: "Foam", icon: "\u{1F90D}", color: "#f4efe4", cost: 3e3, life: 2, price: 9e3, unlock: 3e5 },
    fUbe: { name: "Foam ube", kind: "top", group: "Foam", icon: "\u{1F49C}", color: "#b894d8", cost: 4500, life: 2, price: 12e3, unlock: 4e5 },
    pmVien: { name: "Ph\xF4 mai vi\xEAn", kind: "top", group: "Ph\xF4 mai", icon: "\u{1F7E8}", color: "#f7d56b", cost: 4e3, life: 3, price: 1e4, unlock: 35e4 },
    pmTuoi: { name: "Ph\xF4 mai t\u01B0\u01A1i", kind: "top", group: "Ph\xF4 mai", icon: "\u2B1C", color: "#fff1c2", cost: 5e3, life: 3, price: 12e3, unlock: 4e5 },
    thachPm: { name: "Th\u1EA1ch ph\xF4 mai", kind: "top", group: "Ph\xF4 mai", icon: "\u{1F536}", color: "#f5e3a0", cost: 3e3, life: 3, price: 9e3, unlock: 3e5 },
    lyM: { name: "Ly size M + \u1ED1ng h\xFAt", kind: "supply", icon: "\u{1F964}", color: "#dcd5c8", cost: 1500, life: 0, unlock: 0 },
    lyL: { name: "Ly size L + \u1ED1ng h\xFAt", kind: "supply", icon: "\u{1F964}", color: "#dcd5c8", cost: 1500, life: 0, unlock: 0 },
    da: { name: "\u0110\xE1 vi\xEAn", kind: "supply", icon: "\u{1F9CA}", color: "#cfe8f5", cost: 1e3, life: 2, unlock: 0 },
    duong: { name: "N\u01B0\u1EDBc \u0111\u01B0\u1EDDng", kind: "supply", icon: "\u{1F36F}", color: "#e8c25a", cost: 500, life: 7, unlock: 0 }
  };
  var IDS = Object.keys(ITEMS);
  var byKind = (k) => IDS.filter((i) => ITEMS[i].kind === k);
  var TEAS = byKind("tea");
  var FLAVORS = byKind("flavor");
  var TOPS = byKind("top");
  var SUPPLIES = byKind("supply");
  var TOP_GROUPS = ["Tr\xE2n ch\xE2u", "Th\u1EA1ch", "Foam", "Ph\xF4 mai"];
  var FLAVOR_BOTTLE = 45;
  var SIZE_L_CAP = 5e4;
  var LOCATIONS = {
    goc: {
      name: "Ti\u1EC7m Tr\xE0 Ban \u0110\u1EA7u",
      short: "Ti\u1EC7m g\u1ED1c",
      icon: "\u{1F3E1}",
      tag: "Ti\u1EC7m Tr\xE0 C\u0169",
      slogan: "Kh\xF4ng gian \u1EA5m c\xFAng, kinh doanh b\xECnh y\xEAn",
      desc: "C\u0103n ti\u1EC7m tr\xE0 m\u1ED9c m\u1EA1c quen thu\u1ED9c thu\u1EDF m\u1EDBi m\u1EDF qu\xE1n. Kh\xF4ng b\u1ECB \xE1p l\u1EF1c th\u1EED th\xE1ch v\xF9ng mi\u1EC1n, bu\xF4n b\xE1n th\u01B0 th\xE1i theo nh\u1ECBp \u0111\u1ED9 nguy\xEAn b\u1EA3n.",
      pro: ["Kh\xF4ng gian nguy\xEAn b\u1EA3n th\xE2n quen: qu\u1EA7y pha ch\u1EBF g\u1ED7 kinh \u0111i\u1EC3n", "Kh\xF4ng \xE1p d\u1EE5ng b\u1EA5t k\u1EF3 chi ph\xED v\u1EADn h\xE0nh hay b\u1EA5t l\u1EE3i v\xF9ng mi\u1EC1n n\xE0o"],
      con: ["Kh\xF4ng h\u01B0\u1EDFng c\xE1c \u0111i\u1EC3m th\u01B0\u1EDFng \u0111\u1EB7c th\xF9 doanh thu c\u1EE7a c\xE1c t\u1EC9nh th\xE0nh"],
      fx: {},
      pool: null,
      map: [53.6, 57.1]
    },
    hanoi: {
      name: "H\xE0 N\u1ED9i",
      icon: "\u{1F3DB}\uFE0F",
      tag: "Th\u1EE7 \u0110\xF4",
      slogan: "Ng\xE0n n\u0103m v\u0103n hi\u1EBFn & tr\xE0 sen h\u1ED3 T\xE2y",
      desc: "Th\u1EE7 \u0111\xF4 s\xF4i \u0111\u1ED9ng v\u1EDBi n\xE9t v\u0103n h\xF3a th\u01B0\u1EDFng tr\xE0 tinh t\u1EBF. Kh\xE1ch h\xE0ng s\u1EB5n s\xE0ng chi m\u1EA1nh tay cho \u0111\u1ED3 u\u1ED1ng chu\u1EA9n v\u1ECB.",
      pro: ["L\u01B0\u1EE3ng kh\xE1ch gh\xE9 qu\xE1n +15%", "Ti\u1EC1n boa nh\u1EADn \u0111\u01B0\u1EE3c +15%"],
      con: ["Kh\xE1ch kh\xF3 t\xEDnh +5%", "C\u1ED1c ch\xE1y/h\u1ECFng \u22121\u2605"],
      fx: { traffic: 0.15, tip: 0.15, hardCust: 0.05 },
      pool: { sunny: 25, cloudy: 40, rain: 20, cold: 15 },
      map: [30.8, 17.5]
    },
    hcm: {
      name: "TP. H\u1ED3 Ch\xED Minh",
      icon: "\u{1F3D9}\uFE0F",
      tag: "\u0110\xF4ng Nam B\u1ED9",
      slogan: "H\xF2n ng\u1ECDc Vi\u1EC5n \u0110\xF4ng kh\xF4ng bao gi\u1EDD ng\u1EE7",
      desc: "\u0110\u1EA1i \u0111\xF4 th\u1ECB s\xF4i \u0111\u1ED9ng v\xE0 s\u1EA7m u\u1EA5t b\u1EADc nh\u1EA5t c\u1EA3 n\u01B0\u1EDBc. Kh\xE1ch h\xE0ng tr\u1EBB trung, th\xEDch order online v\xE0 tr\xE0 s\u1EEFa \u0111\xEAm.",
      pro: ["Sau 20h: +25% gi\xE1 tr\u1ECB \u0111\u01A1n", "\u0110\u01A1n tr\u1EF1c tuy\u1EBFn (Online) +20%"],
      con: ["Sau 20h kh\xE1ch kh\xF3 t\xEDnh +10%", "\u0110i\u1EC7n n\u01B0\u1EDBc +20%"],
      fx: { lateBill: 0.25, online: 0.2, utility: 0.2 },
      pool: { sunny: 40, hot: 30, rain: 25, cloudy: 5 },
      map: [37.6, 77.8]
    },
    hue: {
      name: "C\u1ED1 \u0111\xF4 Hu\u1EBF",
      icon: "\u{1F3EF}",
      tag: "C\u1ED1 \u0110\xF4 Mi\u1EC1n Trung",
      slogan: "C\u1ED1 \u0111\xF4 tr\u1EA7m m\u1EB7c & tr\xE0 cung \u0111\xECnh thanh tao",
      desc: "V\xF9ng \u0111\u1EA5t kinh k\u1EF3 th\u01A1 m\u1ED9ng v\u1EDBi truy\u1EC1n th\u1ED1ng tr\xE0 cung \u0111\xECnh, nh\u1ECBp s\u1ED1ng t\u1EEB t\u1ED1n, tao nh\xE3.",
      pro: ["Kh\xE1ch ki\xEAn nh\u1EABn +25%", "Tr\xE0 \u0111\u1EB7c s\u1EA3n (Olong) +20% gi\xE1 tr\u1ECB \u0111\u01A1n"],
      con: ["Tr\u1EDDi m\u01B0a \u221220% l\u01B0\u1EE3ng kh\xE1ch", "Tr\u1EDDi m\u01B0a \u221220% \u0111\u01A1n tr\u1EF1c tuy\u1EBFn (Online)"],
      fx: { patience: 0.25, billTeas: { olong: 0.2 }, rainTraffic: -0.2, rainOnline: -0.2 },
      pool: { cloudy: 35, rain: 40, sunny: 20, cold: 5 },
      map: [44.7, 44.4]
    },
    danang: {
      name: "\u0110\xE0 N\u1EB5ng",
      icon: "\u{1F309}",
      tag: "Duy\xEAn H\u1EA3i Nam Trung B\u1ED9",
      slogan: "Th\xE0nh ph\u1ED1 \u0111\xE1ng s\u1ED1ng & c\u1EA7u R\u1ED3ng ph\u1ED3n hoa",
      desc: "\u0110\xF4 th\u1ECB du l\u1ECBch tr\u1EBB trung, v\u0103n minh v\xE0 m\u1EBFn kh\xE1ch b\xEAn b\u1EDD s\xF4ng H\xE0n th\u01A1 m\u1ED9ng.",
      pro: ["0% ti\u1EC1n gi\u1EA3", "x2 \u0111i\u1EC3m combo nhanh"],
      con: ["Kh\xE1ch nh\u1EA1y gi\xE1: t\u0103ng gi\xE1 \u2192 \u221210% kh\u1EA3 n\u0103ng mua", "Kh\xF4ng c\xF3 th\u01B0\u1EDFng doanh thu tr\u1EF1c ti\u1EBFp"],
      fx: { priceSens: 0.1, comboX2: 1 },
      pool: { sunny: 45, cloudy: 25, rain: 15, hot: 15 },
      map: [49.6, 46.8]
    },
    sapa: {
      name: "Sa Pa",
      icon: "\u{1F3D4}\uFE0F",
      tag: "T\xE2y B\u1EAFc",
      slogan: "X\u1EE9 s\u1EDF s\u01B0\u01A1ng m\xF9 & \u0111\u1ED3i ch\xE8 T\xE2y B\u1EAFc",
      desc: "Th\u1ECB tr\u1EA5n trong s\u01B0\u01A1ng v\u1EDBi kh\xED h\u1EADu se l\u1EA1nh quanh n\u0103m. Kh\xE1ch du l\u1ECBch y\xEAu th\xEDch nh\u1EEFng ly tr\xE0 n\xF3ng h\u1ED5i, tr\xE0 th\u1EA3o m\u1ED9c \u1EA5m b\u1EE5ng.",
      pro: ["Tr\xE0 n\xF3ng (H\u1ED3ng/L\u1EE5c tr\xE0/N\xF3ng) +20% gi\xE1 tr\u1ECB \u0111\u01A1n", "Kh\xE1ch ng\u1EAFm c\u1EA3nh +20% ki\xEAn nh\u1EABn"],
      con: ["Chi ph\xED nguy\xEAn li\u1EC7u v\u1EADn chuy\u1EC3n +15%", "\u0110\u1ED3 u\u1ED1ng l\u1EA1nh \u221215% ti\u1EC1n boa"],
      fx: { billTeas: { hongTra: 0.2, lucTra: 0.2, olong: 0.2 }, patience: 0.2, ingCost: 0.15, coldTip: -0.15 },
      pool: { cold: 45, cloudy: 30, rain: 20, sunny: 5 },
      map: [14.7, 9.8]
    },
    halong: {
      name: "H\u1EA1 Long",
      icon: "\u26F5",
      tag: "\u0110\xF4ng B\u1EAFc",
      slogan: "K\u1EF3 quan v\u1ECBnh bi\u1EC3n & du kh\xE1ch b\u1ED1n ph\u01B0\u01A1ng",
      desc: "Th\xE0nh ph\u1ED1 di s\u1EA3n v\u1EDBi l\u01B0\u1EE3ng du kh\xE1ch qu\u1ED1c t\u1EBF v\xE0 kh\xE1ch ngh\u1EC9 d\u01B0\u1EE1ng t\u1EA5p n\u1EADp su\u1ED1t c\xE1c m\xF9a l\u1EC5 h\u1ED9i du l\u1ECBch.",
      pro: ["Kh\xE1ch du l\u1ECBch +25% ti\u1EC1n boa", "\u0110o\xE0n kh\xE1ch du l\u1ECBch (\u0110\u01A1n l\u1EDBn) +10% gi\xE1 tr\u1ECB"],
      con: ["M\u01B0a b\xE3o \u221225% l\u01B0\u1EE3ng kh\xE1ch", "L\u01B0\u1EE3ng kh\xE1ch ph\u1EE5 thu\u1ED9c m\xF9a du l\u1ECBch"],
      fx: { tip: 0.25, bill: 0.1, rainTraffic: -0.25 },
      pool: { sunny: 35, cloudy: 25, rain: 30, cold: 10 },
      map: [40.6, 17.9]
    },
    bmt: {
      name: "Bu\xF4n Ma Thu\u1ED9t",
      icon: "\u2615",
      tag: "T\xE2y Nguy\xEAn \u0110\u1EA1i Ng\xE0n",
      slogan: "\u0110\u1EA1i ng\xE0n \u0111\u1EA5t \u0111\u1ECF b\u1EA1t ng\xE0n h\u01B0\u01A1ng c\xE0 ph\xEA",
      desc: "Th\u1EE7 ph\u1EE7 c\xE0 ph\xEA ng\u1EADp tr\xE0n n\u1EAFng gi\xF3 T\xE2y Nguy\xEAn, kh\u1EA9u v\u1ECB ng\u01B0\u1EDDi d\xE2n th\xEDch s\u1EF1 \u0111\u1EADm \u0111\xE0, b\xE9o ng\u1EADy.",
      pro: ["Tr\xE0 s\u1EEFa, Tr\xE0 s\u1EEFa Th\xE1i / Foam cheese / Tr\xE2n ch\xE2u \u0111en +20% gi\xE1 tr\u1ECB \u0111\u01A1n", "M\u1EB7t b\u1EB1ng \u221225%"],
      con: ["\u0110\u01A1n tr\u1EF1c tuy\u1EBFn (Online) \u221230%", "Kh\xE1ch ch\u1EE7 y\u1EBFu mua tr\u1EF1c ti\u1EBFp"],
      fx: { billTeas: { traSua: 0.2, traThai: 0.2 }, rent: -0.25, online: -0.3 },
      pool: { sunny: 50, cloudy: 25, hot: 15, rain: 10 },
      map: [48.3, 66.6]
    },
    canTho: {
      name: "C\u1EA7n Th\u01A1",
      icon: "\u{1F6F6}",
      tag: "Mi\u1EC1n T\xE2y S\xF4ng N\u01B0\u1EDBc",
      slogan: "Ch\u1EE3 n\u1ED5i C\xE1i R\u0103ng & tr\xE1i c\xE2y b\u1ED1n m\xF9a",
      desc: "Th\u1EE7 ph\u1EE7 mi\u1EC1n T\xE2y v\u1EDBi tr\xE1i c\xE2y t\u01B0\u01A1i ngon r\u1EBB, nh\u1ECBp s\u1ED1ng ch\u1EADm r\xE3i tr\xEAn s\xF4ng n\u01B0\u1EDBc.",
      pro: ["Chi ph\xED nguy\xEAn li\u1EC7u \u221215%", "L\u01B0\u1EE3ng kh\xE1ch gh\xE9 qu\xE1n +8%"],
      con: ["N\u1EAFng n\xF3ng khi\u1EBFn kh\xE1ch \xEDt ki\xEAn nh\u1EABn \u221210%", "\u0110\u01A1n tr\u1EF1c tuy\u1EBFn \u221210%"],
      fx: { ingCost: -0.15, traffic: 0.08, patience: -0.1, online: -0.1 },
      pool: { sunny: 40, hot: 30, rain: 25, cloudy: 5 },
      map: [30.2, 82.1]
    },
    caMau: {
      name: "C\xE0 Mau",
      icon: "\u{1F980}",
      tag: "\u0110\u1EA5t M\u0169i",
      slogan: "C\u1EF1c Nam T\u1ED5 qu\u1ED1c, r\u1EEBng \u0111\u01B0\u1EDBc v\xE0 t\xF4m cua",
      desc: "V\xF9ng \u0111\u1EA5t cu\u1ED1i tr\u1EDDi v\u1EDBi thi\xEAn nhi\xEAn hoang s\u01A1, ng\u01B0\u1EDDi d\xE2n ch\xE2n ch\u1EA5t, \xEDt kh\xE1ch v\xE3ng lai nh\u01B0ng qu\xFD qu\xE1n quen.",
      pro: ["M\u1EB7t b\u1EB1ng \u221235%", "\u0110i\u1EC7n n\u01B0\u1EDBc \u221215%", "Kh\xE1ch quen: ti\u1EC1n boa +10%"],
      con: ["L\u01B0\u1EE3ng kh\xE1ch gh\xE9 qu\xE1n \u221210%", "M\u01B0a l\u1EDBn th\u01B0\u1EDDng xuy\xEAn"],
      fx: { rent: -0.35, utility: -0.15, tip: 0.1, traffic: -0.1 },
      pool: { rain: 40, sunny: 30, cloudy: 20, hot: 10 },
      map: [23.8, 87.2]
    },
    hoangSa: {
      name: "Ho\xE0ng Sa \u2013 Tr\u01B0\u1EDDng Sa",
      icon: "\u{1F3DD}\uFE0F",
      tag: "Qu\u1EA7n \u0110\u1EA3o Thi\xEAng Li\xEAng",
      slogan: "Tr\xE0 gi\u1EEFa bi\u1EC3n kh\u01A1i, chi\u1EBFn s\u0129 v\xE0 ng\u01B0 d\xE2n",
      desc: "Qu\xE1n tr\xE0 n\u01A1i \u0111\u1EA7u s\xF3ng ng\u1ECDn gi\xF3. Kh\xE1ch l\xE0 chi\u1EBFn s\u0129 v\xE0 ng\u01B0 d\xE2n qu\xFD t\u1EEBng ly tr\xE0 ng\u1ECDt, ti\u1EC1n boa h\u1EADu h\u0129nh.",
      pro: ["Ti\u1EC1n boa +40%", "Kh\xE1ch ki\xEAn nh\u1EABn +30%"],
      con: ["Chi ph\xED nguy\xEAn li\u1EC7u v\u1EADn chuy\u1EC3n +30%", "L\u01B0\u1EE3ng kh\xE1ch gh\xE9 qu\xE1n \u221225%", "\u0110\u01A1n tr\u1EF1c tuy\u1EBFn kh\xF4ng kh\u1EA3 d\u1EE5ng (\u2212100%)"],
      fx: { tip: 0.4, patience: 0.3, ingCost: 0.3, traffic: -0.25, online: -1 },
      pool: { sunny: 35, rain: 30, hot: 20, cloudy: 15 },
      map: [77.6, 44.1]
    }
  };
  var LOCATION_COST = 1e6;
  var SEASONS = {
    spring: { name: "Xu\xE2n", icon: "\u{1F338}", temp: [20, 28], pool: { sunny: 40, cloudy: 30, rain: 25, hot: 0, cold: 5 } },
    summer: { name: "H\u1EA1", icon: "\u{1F31E}", temp: [28, 38], pool: { sunny: 35, cloudy: 15, rain: 18, hot: 32, cold: 0 } },
    autumn: { name: "Thu", icon: "\u{1F341}", temp: [18, 27], pool: { sunny: 35, cloudy: 35, rain: 20, hot: 0, cold: 10 } },
    winter: { name: "\u0110\xF4ng", icon: "\u26C4", temp: [8, 17], pool: { sunny: 20, cloudy: 30, rain: 15, hot: 0, cold: 35 } }
  };
  var SEASON_ORDER = ["spring", "summer", "autumn", "winter"];
  var WEATHERS = {
    sunny: { name: "N\u1EAFng \u0111\u1EB9p", icon: "\u2600\uFE0F", traffic: 0.1, tip: "N\u1EAFng \u0111\u1EB9p d\u1ECBu m\xE1t! Kh\xE1ch d\u1EA1o ph\u1ED1 gh\xE9 qu\xE1n t\u1EA5p n\u1EADp (+10%), ki\xEAn nh\u1EABn h\u01A1n" },
    cloudy: { name: "Nhi\u1EC1u m\xE2y", icon: "\u26C5", traffic: 0, tip: "Tr\u1EDDi nhi\u1EC1u m\xE2y d\u1EC5 ch\u1ECBu, m\u1ED9t ng\xE0y b\xE1n h\xE0ng b\xECnh th\u01B0\u1EDDng" },
    rain: { name: "M\u01B0a r\xE0o", icon: "\u{1F327}\uFE0F", traffic: -0.15, online: 0.3, tip: "Tr\u1EDDi m\u01B0a: kh\xE1ch t\u1EA1i qu\u1EA7y gi\u1EA3m 15% nh\u01B0ng \u0111\u01A1n online t\u0103ng 30%" },
    hot: { name: "N\u1EAFng n\xF3ng", icon: "\u{1F975}", traffic: 0.05, coldBias: 1, tip: "Tr\u1EDDi n\xF3ng b\u1EE9c: kh\xE1ch \u01B0a \u0111\u1ED3 l\u1EA1nh, nhi\u1EC1u \u0111\xE1, size L" },
    cold: { name: "Se l\u1EA1nh", icon: "\u{1F976}", traffic: -0.05, warmBias: 1, tip: "Tr\u1EDDi se l\u1EA1nh: kh\xE1ch chu\u1ED9ng tr\xE0 n\xF3ng, h\u1ED3ng tr\xE0, \xF4 long" }
  };
  var DAY_EVENTS = [
    { id: "trend", icon: "\u{1F4C8}", name: "M\xF3n hot tr\xEAn m\u1EA1ng", desc: "tr\xE0 s\u1EEFa \u0111\u01B0\u1EE3c g\u1ECDi nhi\u1EC1u g\u1EA5p \u0111\xF4i, kh\xE1ch t\xF2 m\xF2 gh\xE9 qu\xE1n (+25%)", traffic: 0.25, hotItem: "traSua" },
    { id: "festival", icon: "\u{1F389}", name: "Ng\xE0y h\u1ED9i ph\u1ED1 tr\xE0", desc: "ph\u1ED1 \u0111\xF4ng vui, l\u01B0\u1EE3ng kh\xE1ch t\u0103ng m\u1EA1nh (+30%)", traffic: 0.3 },
    { id: "school", icon: "\u{1F392}", name: "Ng\xE0y tan h\u1ECDc s\u1EDBm", desc: "h\u1ECDc sinh, sinh vi\xEAn \u0111\u1ED5 v\u1EC1 \u0111\xF4ng (+20%), gi\xE1 tr\u1ECB \u0111\u01A1n th\u1EA5p h\u01A1n", traffic: 0.2, bill: -0.05, student: true },
    { id: "payday", icon: "\u{1F4B5}", name: "Ng\xE0y ph\xE1t l\u01B0\u01A1ng", desc: "d\xE2n v\u0103n ph\xF2ng tho\u1EA3i m\xE1i chi ti\xEAu: ti\u1EC1n boa +25%", tip: 0.25 },
    { id: "heat", icon: "\u{1F525}", name: "\u0110\u1EE3t n\xF3ng \u0111\u1EC9nh \u0111i\u1EC3m", desc: "\u0111\u1ED3 l\u1EA1nh, nhi\u1EC1u \u0111\xE1 b\xE1n ch\u1EA1y (+15% kh\xE1ch)", traffic: 0.15, coldBias: 1 },
    { id: "quiet", icon: "\u{1F319}", name: "Ng\xE0y th\u01B0 th\u1EA3", desc: "kh\xE1ch \xEDt h\u01A1n (\u221215%) nh\u01B0ng ki\xEAn nh\u1EABn h\u01A1n (+20%)", traffic: -0.15, patience: 0.2 },
    { id: "critic", icon: "\u{1F4F8}", name: "Food reviewer gh\xE9 qu\xE1n", desc: "m\u1ED9t reviewer n\u1ED5i ti\u1EBFng s\u1EBD ch\u1EA5m \u0111i\u1EC3m qu\xE1n \u2014 c\u1EA9n th\u1EADn t\u1EEBng ly!", traffic: 0.05, critic: true },
    { id: "normal", icon: "\u{1F324}\uFE0F", name: "M\u1ED9t ng\xE0y b\xECnh th\u01B0\u1EDDng", desc: "kh\xF4ng c\xF3 s\u1EF1 ki\u1EC7n \u0111\u1EB7c bi\u1EC7t, c\u1EE9 pha tr\xE0 th\u1EADt ngon!", traffic: 0 }
  ];
  var ARCHETYPES = {
    sinhVien: {
      name: "Sinh vi\xEAn",
      tag: "\u{1F393} Sinh vi\xEAn",
      avatars: ["\u{1F9D1}\u200D\u{1F393}", "\u{1F469}\u200D\u{1F393}", "\u{1F9D2}"],
      patience: 0.9,
      bill: 0.95,
      tip: 0.5,
      hard: 0.1,
      w: 24,
      lines: ["Ch\u1EE7 qu\xE1n \u01A1i cho em 1 ly {drink} {size}{tops}, t\xEDnh gi\xE1 sinh vi\xEAn gi\xF9m em nha!", "Em mu\u1ED1n {drink} {size}{tops}, nhanh gi\xF9m em k\u1EBBo tr\u1EC5 gi\u1EDD h\u1ECDc \u1EA1!"]
    },
    vanPhong: {
      name: "D\xE2n v\u0103n ph\xF2ng",
      tag: "\u{1F4BC} V\u0103n ph\xF2ng",
      avatars: ["\u{1F468}\u200D\u{1F4BC}", "\u{1F469}\u200D\u{1F4BC}", "\u{1F9D1}\u200D\u{1F4BB}"],
      patience: 0.75,
      bill: 1.05,
      tip: 1.2,
      hard: 0.2,
      w: 22,
      lines: ["Cho t\xF4i 1 ly {drink} {size}{tops}, pha nhanh gi\xFAp t\xF4i, s\u1EAFp h\u1ECDp r\u1ED3i.", "M\u1ED9t {drink} {size}{tops} nh\xE9, nh\u1EDB \u0111\xF3ng n\u1EAFp k\u1EF9 \u0111\u1EC3 mang l\xEAn v\u0103n ph\xF2ng."]
    },
    genZ: {
      name: "Gen Z",
      tag: "\u2728 Gen Z",
      avatars: ["\u{1F9D1}\u200D\u{1F3A4}", "\u{1F467}", "\u{1F466}"],
      patience: 0.85,
      bill: 1,
      tip: 0.8,
      hard: 0.3,
      w: 20,
      lines: ["Cho m\xECnh 1 ly {drink} {size}{tops} nha, ch\u1EE5p \u1EA3nh s\u1ED1ng \u1EA3o cho \u0111\u1EB9p \xE1!", "Ly {drink} {size}{tops} nh\xE9 ch\u1EE7 qu\xE1n, m\xECnh check-in xong s\u1EBD \u0111\u0103ng story li\u1EC1n!"]
    },
    bac: {
      name: "B\xE1c l\u1EDBn tu\u1ED5i",
      tag: "\u{1F474} B\xE1c",
      avatars: ["\u{1F474}", "\u{1F475}", "\u{1F9D3}"],
      patience: 1.35,
      bill: 1,
      tip: 1.1,
      hard: 0.05,
      w: 12,
      lines: ["Ch\xE1u \u01A1i, cho b\xE1c 1 ly {drink} {size}{tops}, c\u1EE9 t\u1EEB t\u1EEB th\xF4i nh\xE9.", "B\xE1c l\u1EA5y ly {drink} {size}{tops} ch\xE1u nh\xE9, \u0111\u1EEBng ng\u1ECDt qu\xE1 nha."]
    },
    vip: {
      name: "Kh\xE1ch VIP",
      tag: "\u{1F451} VIP",
      avatars: ["\u{1F574}\uFE0F", "\u{1F935}", "\u{1F478}"],
      patience: 0.8,
      bill: 1.15,
      tip: 2.2,
      hard: 0.35,
      w: 5,
      lines: ["Cho t\xF4i 1 ly {drink} {size}{tops}, t\xF4i tr\u1EA3 gi\xE1 cao n\u1EBFu ngon.", "M\u1ED9t {drink} {size}{tops}, l\xE0m c\u1EA9n th\u1EADn, qu\xE1n n\xE0o c\u0169ng ch\u01B0a l\xE0m t\xF4i h\xE0i l\xF2ng."]
    },
    macCa: {
      name: "Kh\xE1ch m\u1EB7c c\u1EA3",
      tag: "\u{1F4B8} M\u1EB7c c\u1EA3",
      avatars: ["\u{1F9D4}", "\u{1F469}\u200D\u{1F9B0}", "\u{1F468}\u200D\u{1F9B2}"],
      patience: 1.1,
      bill: 0.88,
      tip: 0.2,
      hard: 0.15,
      w: 9,
      lines: ["Ch\u1EE7 qu\xE1n \u01A1i, cho 1 ly {drink} {size}{tops}, b\u1EDBt cho t\xF4i ch\xFAt x\xEDu nha?", "L\u1EA5y 1 {drink} {size}{tops}, kh\xE1ch quen r\u1ED3i, t\xEDnh r\u1EBB cho nh\xE9!"]
    },
    reviewer: {
      name: "Food reviewer",
      tag: "\u{1F4F8} Reviewer",
      avatars: ["\u{1F9D1}\u200D\u{1F373}", "\u{1F4F7}"],
      patience: 0.8,
      bill: 1.1,
      tip: 1.5,
      hard: 0.5,
      w: 3,
      lines: ["Cho m\xECnh 1 ly {drink} {size}{tops}, m\xECnh \u0111ang quay review \u0111\xF3 nha!", "M\xECnh l\u1EA5y {drink} {size}{tops}, m\xECnh s\u1EBD ch\u1EA5m \u0111i\u1EC3m t\u1EEBng chi ti\u1EBFt nh\xE9!"]
    },
    be: {
      name: "B\xE9 tan h\u1ECDc",
      tag: "\u{1F388} B\xE9",
      avatars: ["\u{1F9D2}", "\u{1F467}", "\u{1F466}"],
      patience: 0.8,
      bill: 0.9,
      tip: 0.3,
      hard: 0.1,
      w: 8,
      lines: ["C\xF4/ch\xFA \u01A1i cho con 1 ly {drink} {size}{tops} \u1EA1!", "Con mu\u1ED1n u\u1ED1ng {drink} {size}{tops}, m\u1EB9 cho ti\u1EC1n r\u1ED3i \u1EA1!"]
    }
  };
  var CATEGORIES = {
    tra: { name: "Tr\xE0", icon: "\u{1F375}", desc: "T\u0103ng 0,5% t\u1EC9 l\u1EC7 kh\xE1ch gh\xE9 qu\xE1n m\u1ED7i c\u1EA5p.", key: "traffic", per: 5e-3 },
    huong: { name: "H\u01B0\u01A1ng", icon: "\u{1F353}", desc: "T\u0103ng 0,5% th\u1EDDi gian ki\xEAn nh\u1EABn ch\u1EDD m\u1ED7i c\u1EA5p.", key: "patience", per: 5e-3 },
    top: { name: "Topping", icon: "\u26AB", desc: "Gi\u1EA3m 0,5% t\u1EC9 l\u1EC7 \u0111\xE1nh gi\xE1 x\u1EA5u/k\xE9m m\u1ED7i c\u1EA5p.", key: "badRev", per: 5e-3 },
    nv: { name: "Nh\xE2n vi\xEAn", icon: "\u{1F3C6}", desc: "T\u0103ng 1% t\u1ED1c \u0111\u1ED9 l\xE0m vi\u1EC7c c\u1EE7a nh\xE2n vi\xEAn m\u1ED7i c\u1EA5p.", key: "speedStaff", per: 0.01 },
    online: { name: "Online", icon: "\u{1F4F2}", desc: "T\u0103ng 1% t\u1EA7n su\u1EA5t n\u1ED5 \u0111\u01A1n online m\u1ED7i c\u1EA5p.", key: "online", per: 0.01 }
  };
  var ONLINE_GATE = { profit: 15e6, orders: 60, rating: 4 };
  var catCost = (lvl) => Math.round(1e3 * Math.pow(1.55, lvl) / 100) * 100;
  var EQUIP = [
    { id: "binhRot", icon: "\u{1F3FA}", name: "B\xECnh r\xF3t tr\xE0", tiers: [{ n: "B\xECnh r\xF3t th\u1EE7y tinh", c: 0, d: "R\xF3t tr\xE0 nhanh h\u01A1n 10%" }, { n: "B\xECnh r\xF3t inox", c: 1e7, d: "R\xF3t nhanh h\u01A1n 25%" }, { n: "B\xECnh r\xF3t t\u1EF1 \u0111\u1ED9ng", c: 35e6, d: "R\xF3t nhanh h\u01A1n 45%, \xEDt tr\xE0n" }], key: "pour", vals: [0.1, 0.25, 0.45] },
    { id: "mayNap", icon: "\u{1F3ED}", name: "M\xE1y \u0111\xF3ng n\u1EAFp", tiers: [{ n: "M\xE1y \u0111\xF3ng n\u1EAFp b\xE1n t\u1EF1 \u0111\u1ED9ng", c: 0, d: "\u0110\xF3ng n\u1EAFp 1,2 gi\xE2y" }, { n: "M\xE1y \u0111\xF3ng n\u1EAFp t\u1EF1 \u0111\u1ED9ng", c: 12e6, d: "\u0110\xF3ng n\u1EAFp nhanh h\u01A1n 30%" }, { n: "M\xE1y \u0111\xF3ng n\u1EAFp 2 \u0111\u1EA7u", c: 4e7, d: "\u0110\xF3ng n\u1EAFp nhanh h\u01A1n 55%" }], key: "seal", vals: [0, 0.3, 0.55] },
    { id: "khayTop", icon: "\u{1F9F0}", name: "Khay topping", tiers: [{ n: "Khay inox", c: 0, d: "Ti\u1EBFt ki\u1EC7m 3% topping" }, { n: "Khay gi\u1EEF nhi\u1EC7t", c: 8e6, d: "Ti\u1EBFt ki\u1EC7m 8% topping, h\u1EA1n d\xF9ng +0" }, { n: "Khay b\u1EA3o qu\u1EA3n", c: 3e7, d: "Ti\u1EBFt ki\u1EC7m 15% topping" }], key: "topSave", vals: [0.03, 0.08, 0.15] },
    { id: "boDungCu", icon: "\u{1F944}", name: "Ly, \u0111\u01B0\u1EDDng, \u0111\xE1", tiers: [{ n: "B\u1ED9 d\u1EE5ng c\u1EE5 ti\xEAu chu\u1EA9n", c: 0, d: "Kh\xE1ch h\xE0i l\xF2ng +5% ti\u1EC1n boa" }, { n: "B\u1ED9 \u0111\u1ECBnh l\u01B0\u1EE3ng chu\u1EA9n", c: 6e6, d: "Ti\u1EC1n boa +12%" }, { n: "B\u1ED9 pha ch\u1EBF chuy\xEAn nghi\u1EC7p", c: 25e6, d: "Ti\u1EC1n boa +25%" }], key: "tip", vals: [0.05, 0.12, 0.25] },
    { id: "tuLanh", icon: "\u2744\uFE0F", name: "T\u1EE7 l\u1EA1nh", tiers: [{ n: "T\u1EE7 l\u1EA1nh th\u01B0\u1EDDng", c: 5e5, d: "H\u1EA1n d\xF9ng nguy\xEAn li\u1EC7u +1 ng\xE0y" }, { n: "T\u1EE7 l\u1EA1nh inverter", c: 3e6, d: "H\u1EA1n d\xF9ng +2 ng\xE0y" }, { n: "Kho l\u1EA1nh mini", c: 15e6, d: "H\u1EA1n d\xF9ng +3 ng\xE0y" }], key: "life", vals: [1, 2, 3] },
    { id: "mascot", icon: "\u{1F43B}", name: "Mascot qu\xE1n", tiers: [{ n: "G\u1EA5u b\xF4ng mascot", c: 6e5, d: "Th\xEAm 3% kh\xE1ch" }, { n: "Mascot nh\xFAn nh\u1EA3y", c: 5e6, d: "Th\xEAm 6% kh\xE1ch" }, { n: "Mascot ng\u01B0\u1EDDi \u0111i ph\xE1t t\u1EDD r\u01A1i", c: 2e7, d: "Th\xEAm 10% kh\xE1ch" }], key: "traffic", vals: [0.03, 0.06, 0.1] },
    { id: "led", icon: "\u{1F4A1}", name: "Bi\u1EC3n hi\u1EC7u \u0111\xE8n LED", tiers: [{ n: "Bi\u1EC3n hi\u1EC7u LED nh\u1ECF", c: 4e5, d: "Thu h\xFAt th\xEAm 4% kh\xE1ch" }, { n: "Bi\u1EC3n hi\u1EC7u LED neon", c: 4e6, d: "Thu h\xFAt th\xEAm 8% kh\xE1ch" }, { n: "Bi\u1EC3n LED 3D", c: 18e6, d: "Thu h\xFAt th\xEAm 12% kh\xE1ch" }], key: "traffic", vals: [0.04, 0.08, 0.12] },
    { id: "banGhe", icon: "\u{1FA91}", name: "B\xE0n gh\u1EBF cho kh\xE1ch ng\u1ED3i", tiers: [{ n: "B\xE0n gh\u1EBF nh\u1EF1a", c: 5e5, d: "Th\xEAm 2 b\xE0n (t\u1ED5ng 4 \u2192 6)" }, { n: "B\xE0n gh\u1EBF g\u1ED7", c: 4e6, d: "Th\xEAm 2 b\xE0n n\u1EEFa, kh\xE1ch ng\u1ED3i +10%" }, { n: "B\xE0n gh\u1EBF cao c\u1EA5p", c: 2e7, d: "Th\xEAm 2 b\xE0n n\u1EEFa, kh\xE1ch ng\u1ED3i +20%" }], key: "tables", vals: [2, 4, 6] },
    { id: "xeMay", icon: "\u{1F6F5}", name: "Xe m\xE1y giao h\xE0ng", tiers: [{ n: "Xe m\xE1y c\u0169", c: 8e5, d: "\u0110\u01A1n online +10%" }, { n: "Xe m\xE1y \u0111i\u1EC7n", c: 6e6, d: "\u0110\u01A1n online +20%" }, { n: "\u0110\u1ED9i xe giao 3 ng\u01B0\u1EDDi", c: 25e6, d: "\u0110\u01A1n online +35%" }], key: "online", vals: [0.1, 0.2, 0.35] },
    { id: "qcMxh", icon: "\u{1F4F2}", name: "Qu\u1EA3ng c\xE1o m\u1EA1ng x\xE3 h\u1ED9i", tiers: [{ n: "Fanpage c\u01A1 b\u1EA3n", c: 5e5, d: "Kh\xE1ch +3%, follower t\u0103ng \u0111\u1EC1u" }, { n: "K\xEAnh TikTok chuy\xEAn nghi\u1EC7p", c: 5e6, d: "Kh\xE1ch +6%, follower nhanh h\u01A1n" }, { n: "Agency ch\u0103m s\xF3c k\xEAnh", c: 22e6, d: "Kh\xE1ch +10%, follower r\u1EA5t nhanh" }], key: "traffic", vals: [0.03, 0.06, 0.1] },
    { id: "quay", icon: "\u{1F4D0}", name: "M\u1EDF r\u1ED9ng qu\u1EA7y", tiers: [{ n: "Qu\u1EA7y d\xE0i th\xEAm 1m", c: 5e5, d: "H\xE0ng ch\u1EDD t\u1ED1i \u0111a 6 kh\xE1ch" }, { n: "Qu\u1EA7y ch\u1EEF L", c: 45e5, d: "H\xE0ng ch\u1EDD t\u1ED1i \u0111a 7 kh\xE1ch" }, { n: "Qu\u1EA7y m\u1EDF 2 m\u1EB7t", c: 18e6, d: "H\xE0ng ch\u1EDD t\u1ED1i \u0111a 8 kh\xE1ch" }], key: "queue", vals: [1, 2, 3] },
    { id: "tang", icon: "\u{1F3EC}", name: "N\xE2ng t\u1EA7ng", tiers: [{ n: "T\u1EA7ng l\u1EEDng", c: 2e6, d: "Ph\u1EE5c v\u1EE5 c\xF9ng l\xFAc +10 kh\xE1ch/ng\xE0y" }, { n: "T\u1EA7ng 2 r\u1ED9ng r\xE3i", c: 15e6, d: "Th\xEAm 20 kh\xE1ch/ng\xE0y d\u1EF1 ki\u1EBFn" }, { n: "S\xE2n th\u01B0\u1EE3ng chill", c: 5e7, d: "Th\xEAm 35 kh\xE1ch/ng\xE0y d\u1EF1 ki\u1EBFn" }], key: "extraCust", vals: [4, 8, 14] },
    { id: "mayLanh", icon: "\u{1F9CA}", name: "M\xE1y l\u1EA1nh", tiers: [{ n: "Qu\u1EA1t tr\u1EA7n h\u01A1i n\u01B0\u1EDBc", c: 1e6, d: "Kh\xE1ch ki\xEAn nh\u1EABn h\u01A1n 8%" }, { n: "M\xE1y l\u1EA1nh treo t\u01B0\u1EDDng", c: 8e6, d: "Ki\xEAn nh\u1EABn +15%" }, { n: "H\u1EC7 th\u1ED1ng \u0111i\u1EC1u h\xF2a trung t\xE2m", c: 3e7, d: "Ki\xEAn nh\u1EABn +25%" }], key: "patience", vals: [0.08, 0.15, 0.25], util: [0.05, 0.1, 0.2] },
    { id: "nhanDien", icon: "\u{1F3F7}\uFE0F", name: "B\u1ED9 nh\u1EADn di\u1EC7n th\u01B0\u01A1ng hi\u1EC7u", tiers: [{ n: "Tem ly & menu th\u01B0\u01A1ng hi\u1EC7u", c: 7e5, d: "Ti\u1EC1n boa +5%, tem ly in logo" }, { n: "\u0110\u1ED3ng ph\u1EE5c & t\xFAi gi\u1EA5y", c: 6e6, d: "Ti\u1EC1n boa +10%, kh\xE1ch +3%" }, { n: "Th\u01B0\u01A1ng hi\u1EC7u chu\u1ED7i", c: 25e6, d: "Ti\u1EC1n boa +15%, kh\xE1ch +6%" }], key: "brand", vals: [0.05, 0.1, 0.15] },
    { id: "tablet", icon: "\u{1F4DF}", name: "Tablet nh\u1EADn \u0111\u01A1n online", tiers: [{ n: "Tablet #1", c: 3e5, d: "M\u1EDF 1 app giao h\xE0ng" }, { n: "Tablet #2", c: 6e5, d: "M\u1EDF th\xEAm 1 app giao h\xE0ng" }, { n: "Tablet #3", c: 12e5, d: "M\u1EDF th\xEAm 1 app giao h\xE0ng" }, { n: "Tablet #4", c: 24e5, d: "M\u1EDF th\xEAm 1 app giao h\xE0ng" }], key: "tablets", vals: [1, 2, 3, 4] }
  ];
  var APPS = [
    { id: "soppi", name: "Soppi", color: "#ff7a3d" },
    { id: "topTop", name: "T\xF3p T\xF3p", color: "#e8416a" },
    { id: "biiiii", name: "Biiiii", color: "#3d9bff" },
    { id: "goRap", name: "G\u1EDD R\xE1p", color: "#3dbd6b" }
  ];
  var APP_FEE = 0.2;
  var PET_DECOR = [
    { id: "sofa", icon: "\u{1F6CB}\uFE0F", name: "Sofa Th\u01B0 Gi\xE3n Cho B\xE9", desc: "Gh\u1EBF sofa n\u1EC7m \xEAm \xE1i, ph\u1EE5c h\u1ED3i n\u0103ng l\u01B0\u1EE3ng nhanh h\u01A1n.", cost: 25e5, fx: "Gi\u1EA3m 25% t\u1ED1c \u0111\u1ED9 m\u1EA5t n\u0103ng l\u01B0\u1EE3ng" },
    { id: "bat", icon: "\u{1F372}", name: "B\xE1t \u0102n H\u1EA1t & Pate C\xE1 Ng\u1EEB", desc: "Th\u1EE9c \u0103n dinh d\u01B0\u1EE1ng, no l\xE2u h\u01A1n.", cost: 18e5, fx: "+20 \u0111\u1ED9 no & +10 Vui v\u1EBB" },
    { id: "bien", icon: "\u{1FAA7}", name: "Bi\u1EC3n G\u1ED7 X\u01B0\u01A1ng Treo T\u01B0\u1EDDng", desc: "B\u1EA3ng hi\u1EC7u th\xFA c\u01B0ng trang tr\xED qu\xE1n.", cost: 12e5, fx: "+10% Ti\u1EC1n Tip to\xE0n qu\xE1n" },
    { id: "voi", icon: "\u{1F6BF}", name: "V\xF2i Sen Massage B\u1ECDt M\u1ECBn", desc: "T\u1EAFm nhanh s\u1EA1ch h\u01A1n, b\xE9 vui h\u01A1n.", cost: 3e6, fx: "+30 S\u1EA1ch & +10 Vui v\u1EBB" },
    { id: "say", icon: "\u{1F4A8}", name: "M\xE1y S\u1EA5y L\xF4ng T\u1EA1o Ki\u1EC3u", desc: "Gi\u1EEF b\u1ED9 l\xF4ng lu\xF4n m\u01B0\u1EE3t.", cost: 22e5, fx: "Gi\u1EA3m 25% t\u1ED1c \u0111\u1ED9 m\u1EA5t S\u1EA1ch" },
    { id: "xit", icon: "\u{1F9F4}", name: "B\xECnh X\u1ECBt D\u1EA7u H\u01B0\u01A1ng Hoa", desc: "M\xF9i th\u01A1m d\u1ECBu m\xE1t.", cost: 15e5, fx: "Gi\u1EA3m 25% t\u1ED1c \u0111\u1ED9 m\u1EA5t Vui v\u1EBB" },
    { id: "khan", icon: "\u{1F9E3}", name: "Kh\u0103n Bandana \u0110\u1ECF May M\u1EAFn", desc: "T\u0103ng t\u1EC9 l\u1EC7 may m\u1EAFn c\u1EE7a to\xE0n qu\xE1n.", cost: 2e6, fx: "+8% Doanh thu to\xE0n chu\u1ED7i" },
    { id: "kim", icon: "\u2702\uFE0F", name: "K\xECm B\u1EA5m M\xF3ng Chuy\xEAn D\u1EE5ng", desc: "Gi\u1EEF m\xF3ng s\u1EA1ch, b\xE9 tho\u1EA3i m\xE1i.", cost: 9e5, fx: "+10 EXP ch\u0103m s\xF3c m\u1ED7i l\u1EA7n ch\u01A1i" },
    { id: "sua", icon: "\u{1F9FC}", name: "S\u1EEFa T\u1EAFm Th\u1EA3o D\u01B0\u1EE3c Ve Tr\xE0o", desc: "S\u1EA1ch bong, \u0111u\u1ED5i ve.", cost: 17e5, fx: "B\u1EA3o v\u1EC7 ch\u1EC9 s\u1ED1 kh\u1ECFi t\u1EE5t \u0111\u1ED9t ng\u1ED9t" },
    { id: "app", icon: "\u{1F4F1}", name: "App Smart Pet Spa Booking", desc: "\u0110\u1EB7t l\u1ECBch spa th\xFA c\u01B0ng th\xF4ng minh.", cost: 42e5, fx: "+30% t\u1ED1c \u0111\u1ED9 ch\u0103m s\xF3c" }
  ];
  var PETS = {
    shiba: {
      name: "T\xF3 Shiba V\xE0ng",
      icon: "\u{1F415}",
      adopt: 1e7,
      desc: "Th\u1EA7n t\xE0i Qu\xE1n ch\xEDnh, check-in h\xFAt kh\xE1ch, ki\xEAn nh\u1EABn.",
      buffs: ["\u{1F4B0} Th\u1EA7n t\xE0i Qu\xE1n ch\xEDnh: t\u0103ng +15% \u2192 +25% doanh thu & ti\u1EC1n Tip tr\xEAn m\u1ED7i bill b\xE1n tr\u1EF1c ti\u1EBFp.", "\u{1F31F} Check-in h\xFAt kh\xE1ch: kh\xE1ch th\xEDch check-in c\xF9ng c\xFAn, t\u0103ng \u0111i\u1EC3m \u0111\xE1nh gi\xE1 5\u2605.", "\u{1F497} Ki\xEAn nh\u1EABn: kh\xE1ch ki\xEAn nh\u1EABn \u0111\u1EE3i th\xEAm +15% th\u1EDDi gian khi th\u1EA5y b\xE9 c\xFAn vui."],
      fx: { bill: 0.2, patience: 0.15, tip: 0.1 }
    },
    meo: {
      name: "M\xE8o M\u01B0\u1EDBp Chi\xEAu T\xE0i",
      icon: "\u{1F408}",
      adopt: 1e7,
      desc: "Th\u1EA7n t\xE0i chi nh\xE1nh & nh\u01B0\u1EE3ng quy\u1EC1n, gi\u1EA3m r\u1EE7i ro.",
      buffs: ["\u{1F3E2} Th\u1EA7n t\xE0i Chi nh\xE1nh: t\u0103ng +20% \u2192 +35% doanh thu c\xE1c chi nh\xE1nh tr\u1EF1c thu\u1ED9c & nh\u01B0\u1EE3ng quy\u1EC1n.", "\u{1F4C8} V\u01B0\u1EE3ng kh\xED chu\u1ED7i ti\u1EC1n: ti\u1EBFng l\xE0nh \u0111\u1ED3n xa, c\xE1c \u0111\u1ED1i t\xE1c kinh doanh ph\u1EA3i tr\u1EA3 ph\xED l\u1EA1c.", "\u{1F6E1}\uFE0F B\u1EA3o v\u1EC7 chi nh\xE1nh: gi\u1EA3m 50% nguy c\u01A1 thua l\u1ED7 c\u1EE7a chu\u1ED7i chi nh\xE1nh nh\u01B0\u1EE3ng quy\u1EC1n."],
      fx: { branch: 0.25 }
    },
    capybara: {
      name: "C\xE1p Bi \u0110i\u1EC1m \u0110\u1EA1m",
      icon: "\u{1F9AB}",
      adopt: 0,
      secret: 7,
      desc: "Th\xFA c\u01B0ng \u0111\u1ED9c b\u1EA3n qu\xFD hi\u1EBFm \u2014 nu\xF4i chung c\xF9ng Ch\xF3/M\xE8o.",
      buffs: ["\u{1F3C6} Qu\xE1n ch\xEDnh: T\u0103ng +7% doanh thu v\xE0 +10% ti\u1EC1n Tip tr\xEAn m\u1ED7i bill b\xE1n tr\u1EF1c ti\u1EBFp.", "\u{1F3E2} Chu\u1ED7i chi nh\xE1nh: T\u0103ng +10% doanh thu chi nh\xE1nh & gi\u1EA3m 30% r\u1EE7i ro/l\u1ED7 c\u1EE7a chu\u1ED7i.", "\u{1F3F7}\uFE0F B\xE1n nguy\xEAn li\u1EC7u th\u1EEBa: T\u0103ng +10% gi\xE1 b\xE1n nguy\xEAn li\u1EC7u, kh\xE1ch v\u1EABn kh\xF4ng c\xF2n lo h\u1ECFng.", "\u2728 V\u1EADn may Ly tr\xE0: T\u0103ng +2% t\u1EC9 l\u1EC7 b\u1ED9c ph\xE1t \xD72 ~ \xD75 gi\xE1 tr\u1ECB ly m\u1ED7i khi kh\xE1ch th\u01B0\u1EDFng th\u1EE9c t\u1EA1i qu\xE1n."],
      fx: { bill: 0.07, tip: 0.1, branch: 0.1 }
    }
  };
  var PET_CARE = [
    { id: "feed", icon: "\u{1F356}", name: "Cho \u0103n", cost: 2e4, stat: "hunger", gain: 35 },
    { id: "play", icon: "\u{1F3BE}", name: "Ch\u01A1i c\xF9ng", cost: 0, stat: "joy", gain: 30 },
    { id: "bath", icon: "\u{1F6C1}", name: "T\u1EAFm r\u1EEDa", cost: 15e3, stat: "clean", gain: 40 },
    { id: "sleep", icon: "\u{1F634}", name: "Cho ng\u1EE7", cost: 0, stat: "energy", gain: 45 }
  ];
  var STAFF = [
    { id: "thuViec", name: "L\xE2m Ph\u01B0\u1EDBc", role: "Th\u1EED vi\u1EC7c ch\xEDnh th\u1EE9c", icon: "\u{1F98A}", hire: 5e5, wage: 165e3, sec: 6.5, err: 0.1, desc: "Nh\xE2n vi\xEAn r\xF3t tr\xE0, h\u01B0\u01A1ng, \u0111\u01B0\u1EDDng, \u0111\xE1. B\u1EA1n l\u1EA5y ly, b\u1ECF topping v\xE0 d\xE1n n\u1EAFp. 10% sai bill, h\u1ECFng th\xEC \u0111\u1ED5 b\u1ECF l\xE0m l\u1EA1i. Kh\xF4ng th\u1EC3 thu\xEA c\xF9ng Qu\u1EA3n l\xFD t\u1EADp s\u1EF1, Gen Z v\xE0 SV ca \u0111\xEAm. L\u01B0\u01A1ng 165k/ng\xE0y.", excl: ["quanLy", "genZ", "svDem"], kind: "pour" },
    { id: "phaChe", name: "L\xFD Gia Huy", role: "Nh\xE2n vi\xEAn pha ch\u1EBF", icon: "\u{1F98A}", hire: 2e6, wage: 2e5, sec: 4.2, err: 0.08, desc: "Nh\u1EADn tr\u1ECDn \u0111\u01A1n c\u1EE7a kh\xE1ch ch\u1EDD l\xE2u nh\u1EA5t v\xE0 pha h\u1EBFt c\xE1c ly khi qu\u1EA7y c\xF3 t\u1EEB 2 kh\xE1ch tr\u1EDF l\xEAn. H\u01B0\u1EDFng to\xE0n b\u1ED9 ti\u1EC1n tip khi k\xEDch ho\u1EA1t. L\u01B0\u01A1ng 200k/ng\xE0y + 40k/h sau 22h. T\u1ED1c \u0111\u1ED9: 1500ms/ly.", need: { day: 30 }, kind: "auto", minQueue: 2 },
    { id: "online", name: "Ho\xE0ng Minh", role: "Nh\xE2n vi\xEAn \u0111\u01A1n online", icon: "\u{1F98A}", hire: 15e5, wage: 25e4, sec: 3.4, err: 0.05, desc: "Ch\u1EC9 l\xE0m \u0111\u01A1n online: nh\u1EADn tr\u1ECDn \u0111\u01A1n v\xE0 pha h\u1EBFt c\xE1c ly. \u0110\xF4i khi l\xE0m h\u1ECFng ly 1%, h\u1ECFng th\xEC \u0111\u1ED5 b\u1ECF l\xE0m l\u1EA1i. L\u01B0\u01A1ng 250k/ng\xE0y. T\u1ED1c \u0111\u1ED9: 1000ms/ly.", need: { online: true }, kind: "online" },
    { id: "quanLy", name: "\u0110inh Nh\xE2n", role: "Qu\u1EA3n l\xFD t\u1EADp s\u1EF1 (Qu\u1EA3n gia)", icon: "\u{1F98A}", hire: 75e4, wage: 2e5, sec: 5.5, err: 0.06, desc: "Nh\xE2n vi\xEAn r\xF3t tr\xE0, h\u01B0\u01A1ng, \u0111\u01B0\u1EDDng, \u0111\xE1, m\xFAc topping. B\u1EA1n ch\u1EC9 l\u1EA5y ly v\xE0 d\xE1n n\u1EAFp. 5% sai bill h\u1ECFng \u0111\u1ED5 b\u1ECF. \u0110\xF4i khi r\xF3t tr\xE0 kh\xF4ng \u0111\u1EA7y, ch\u1EE7 ti\u1EC7m ph\u1EA3i r\xF3t b\xF9. Gi\xFAp t\u0103ng gi\xE1 an to\xE0n (Qu\u1EA3n Gia). L\u01B0\u01A1ng 200k/ng\xE0y. T\u1ED1c \u0111\u1ED9: 280ms.", excl: ["thuViec"], kind: "manager", safePrice: true },
    { id: "genZ", name: "Nh\xE2n vi\xEAn Gen Z", role: "Nh\xE2n vi\xEAn Gen Z", icon: "\u{1F98A}", hire: 1e6, wage: 275e3, sec: 3, err: 0.12, desc: "Pha ch\u1EBF si\xEAu t\u1ED1c t\u1EEB A-Z. M\u1ED7i khi l\xE0m 100 ly s\u1EBD d\u1ED7i 10s, ch\u1EE7 ti\u1EC7m ph\u1EA3i d\u1ED7 d\xE0nh n\u1EBFu kh\xF4ng s\u1EBD ngh\u1EC9 vi\u1EC7c. M\u1ED7i ng\xE0y \u0111\xE1 bill 1 l\u1EA7n, n\u1EBFu b\u1EAFt \u0111\u01B0\u1EE3c s\u1EBD tr\u1EA3 l\u1EA1i ti\u1EC1n bill. L\u01B0\u01A1ng 275k/ng\xE0y. T\u1ED1c \u0111\u1ED9: 200ms.", excl: ["thuViec"], kind: "auto", minQueue: 1 },
    { id: "diCho", name: "Nh\xE2n vi\xEAn \u0111i ch\u1EE3", role: "Nh\xE2n vi\xEAn \u0111i ch\u1EE3", icon: "\u{1F9FA}", hire: 18e5, wage: 18e4, sec: 99, err: 0, desc: "Khi h\u1EBFt nguy\xEAn li\u1EC7u (tr\xE0 s\u1EEFa, topping, ly, \u0111\xE1\u2026), t\u1EF1 ch\u1EA1y \u0111i ch\u1EE3 mua v\u1EC1 b\xE1n ngay trong ca. N\u1EBFu \u0111i ch\u1EE3 nhi\u1EC1u l\u1EA7n trong ng\xE0y c\xF3 th\u1EC3 khai gian h\xF3a \u0111\u01A1n \u0111\xFAt t\xFAi ri\xEAng, ho\u1EB7c mua tr\xFAng \u0111\u1ED3 h\u1EBFt h\u1EA1n g\xE2y ng\u1ED9 \u0111\u1ED9c. L\u01B0\u01A1ng 180k/ng\xE0y.", need: { full: true }, kind: "buyer" },
    { id: "svDem", name: "Sinh vi\xEAn cu\u1ED1i th\xE1ng", role: "Sinh vi\xEAn cu\u1ED1i th\xE1ng", icon: "\u{1F98A}", hire: 8e5, wage: 3e5, sec: 3.6, err: 0.1, desc: "Ch\u1EC9 l\xE0m ca \u0111\xEAm 22h\u20136h: nh\u1EADn tr\u1ECDn \u0111\u01A1n v\xE0 pha h\u1EBFt c\xE1c ly \u0111ang ch\u1EDD. C\xF3 th\u1EC3 nh\u1EA7m size. Sau 2h s\xE1ng t\xFAng ti\u1EC1n mu\u1ED1n b\xE1n trang b\u1ECB c\u1EA7n ch\u1EE7 ti\u1EC7m ng\u0103n c\u1EA3n. L\u01B0\u01A1ng 300k/ch\u1EC9 l\xE0m ca \u0111\xEAm.", excl: ["thuViec"], kind: "night" },
    { id: "meKetTinh", name: "Nh\xE2n vi\xEAn Me k\u1EBFt tinh", role: "Marketing", icon: "\u{1F98A}", hire: 15e5, wage: 35e4, sec: 99, err: 0, desc: "T\u1EF1 \u0111\u1ED9ng quay & \u0111\u0103ng video TikTok viral li\xEAn t\u1EE5c cho qu\xE1n thay v\xEC ch\u1EE7 qu\xE1n ph\u1EA3i t\u1EF1 quay, thu h\xFAt followers v\xE0 buff m\u1EA1nh l\u01B0\u1EE3ng kh\xE1ch gh\xE9 qu\xE1n (+45%). Gi\u1EA3m 20% th\u1EDDi gian pha c\u1EE7a to\xE0n b\u1ED9 nh\xE2n vi\xEAn. T\u1EF1 \u0111\u1ED9ng ph\u1EA3n h\u1ED3i m\u1ECDi \u0111\xE1nh gi\xE1 & n\xE2ng sao. T\u1EF1 \u0111\u1ED9ng \u0111\xF3ng thu\u1EBF duy tr\xEC buff 72h li\xEAn t\u1EE5c. L\u01B0\u01A1ng 350k/ng\xE0y.", kind: "marketing", fxTraffic: 0.45 },
    { id: "chuBa", name: "Ch\xFA Ba", role: "Ch\xFA b\u1EA3o v\u1EC7", icon: "\u{1F46E}", hire: 3e6, wage: 3e5, sec: 99, err: 0, desc: "B\u1EA3o v\u1EC7 ti\u1EC7m to\xE0n di\u1EC7n: 100% kh\xF4ng bao gi\u1EDD b\u1ECB ti\u1EC1n gi\u1EA3, tr\u1ED9m c\u1EAFp k\xE9t, l\u1EEBa \u0111\u1EA3o, b\xF9ng ti\u1EC1n; ng\u0103n 100% kh\xE1ch \u0103n qu\u1EF5t; gi\u1EA3m 50% t\u1EC9 l\u1EC7 sai s\xF3t c\u1EE7a nh\xE2n vi\xEAn. L\u01B0\u01A1ng: 300k/ng\xE0y + 1% doanh thu. C\xF3 th\u1EC3 n\u1ED9p \u0111\u01A1n xin ngh\u1EC9 vi\u1EC7c.", need: { secret: 1 }, kind: "guard", fxErr: 0.5, revPct: 0.01 }
  ];
  var BRANCHES = [
    { id: "truong", name: "C\u1ED5ng Tr\u01B0\u1EDDng H\u1ECDc", icon: "\u{1F3EB}", cost: 15e6, rent: 4e5, ing: [0.3, 0.42], rev: [56e4, 98e4], unit: "kh\xE1ch h\u1ECDc sinh \u2013 sinh vi\xEAn", desc: "T\u1EADp trung \u0111\u1ED3ng \u0111\u1EA3o h\u1ECDc sinh \u2013 sinh vi\xEAn, ti\xEAu th\u1EE5 tr\xE0 s\u1EEFa kh\xF4ng gi\u1EDBi h\u1EA1n t\u1EA1o t\u0103ng tr\u01B0\u1EDFng +15% kh\xE1ch qu\xE1n ch\xEDnh.", bonus: "+15% kh\xE1ch qu\xE1n ch\xEDnh" },
    { id: "cnc", name: "Khu C\xF4ng Ngh\u1EC7 Cao", icon: "\u{1F4BB}", cost: 35e6, rent: 9e5, ing: [0.3, 0.3], rev: [141e4, 224e4], unit: "d\xE2n v\u0103n ph\xF2ng & IT", desc: "D\xE2n v\u0103n ph\xF2ng & IT order theo nh\xF3m l\u1EDBn, \u0111\u01A1n online chi\u1EBFm 25%. Doanh thu \u1ED5n \u0111\u1ECBnh h\xE0ng ng\xE0y.", bonus: "+10% \u0111\u01A1n online" },
    { id: "tttm", name: "Trung T\xE2m Th\u01B0\u01A1ng M\u1EA1i (TTTM)", icon: "\u{1F3EC}", cost: 6e7, rent: 18e5, ing: [0.3, 0.3], rev: [315e4, 49e5], unit: "kh\xE1ch mua s\u1EAFm", desc: "T\u1ED5ng c\u1EE5c TTTM cao c\u1EA5p, kh\xE1ch h\xE0ng ch\u1ECBu chi, th\u01B0\u01A1ng hi\u1EC7u n\xE2ng t\u1EA7m uy t\xEDn r\xF5 r\u1EC7t.", bonus: "+uy t\xEDn" },
    { id: "phoDiBo", name: "Ph\u1ED1 \u0110i B\u1ED9", icon: "\u{1F6B6}", cost: 12e7, rent: 35e5, ing: [0.3, 0.3], rev: [63e5, 105e5], unit: "kh\xE1ch du l\u1ECBch", desc: "M\u1EB7t ti\u1EC1n ph\u1ED1 \u0111i b\u1ED9 s\u1EA7m u\u1EA5t, \u0111\xEAm h\xE8 \u0111\xF4ng ngh\u1ECBt, doanh thu cao nh\u1EA5t to\xE0n h\u1EC7 th\u1ED1ng.", bonus: "+M\u1EB7t b\u1EB1ng cao nh\u1EA5t" }
  ];
  var FRANCHISE = { fee: 1e8, royalty: 0.1, needRating: 4.5, needFollowers: 5e4, max: 5, revRange: [6e5, 12e5] };
  var ADS = [
    { id: "fb", icon: "\u{1F4F1}", name: "Ch\u1EA1y Facebook Ads \u0110\u1ECBa Ph\u01B0\u01A1ng", desc: "Qu\u1EA3ng c\xE1o c\u1EAFm \u0111\u1EC1 xu\u1EA5t ng\u01B0\u1EDDi d\xF9ng khu v\u1EF1c xung quanh ti\u1EC7m trong 3 ng\xE0y (+30% kh\xE1ch qu\xE1n ch\xEDnh, +12% doanh thu chi nh\xE1nh & nh\u01B0\u1EE3ng quy\u1EC1n, +1.500 Followers, t\u1EF1 \u0111\u1ED9ng \u0111\u0103ng 1 b\xE0i/ng\xE0y l\xEAn MXH)", cost: 5e5, days: 3, traffic: 0.3, branch: 0.12, followers: 1500, posts: 1, videos: 1 },
    { id: "tt", icon: "\u{1F3B5}", name: "Ch\u1EA1y Video TikTok Ads Viral", desc: "\u0110\u1EA9y video pha ch\u1EBF tri\u1EC7u view l\xEAn For You Page trong 3 ng\xE0y (+60% kh\xE1ch qu\xE1n ch\xEDnh, +28% doanh thu chi nh\xE1nh & nh\u01B0\u1EE3ng quy\u1EC1n, +8.000 Followers, t\u1EF1 \u0111\u1ED9ng \u0111\u0103ng 2 b\xE0i/ng\xE0y l\xEAn MXH)", cost: 2e6, days: 3, traffic: 0.6, branch: 0.28, followers: 8e3, posts: 2, videos: 2 },
    { id: "kol", icon: "\u{1F451}", name: "Thu\xEA KOL / Food Reviewer Tri\u1EC7u Follower", desc: "KOL \u1EA9m th\u1EF1c tr\u1EA3i nghi\u1EC7m v\xE0 khen h\u1EBFt l\u1EDDi trong 5 ng\xE0y (+100% kh\xE1ch qu\xE1n ch\xEDnh, +48% doanh thu chi nh\xE1nh & nh\u01B0\u1EE3ng quy\u1EC1n, +30.000 Followers, t\u1EF1 \u0111\u1ED9ng \u0111\u0103ng 3 b\xE0i/ng\xE0y l\xEAn MXH)", cost: 8e6, days: 5, traffic: 1, branch: 0.48, followers: 3e4, posts: 3, videos: 3 },
    { id: "bb", icon: "\u{1F306}", name: "Treo Bi\u1EC3n Billboard Ng\xE3 T\u01B0 Tr\u1ECDng \u0110i\u1EC3m", desc: "B\u1EA3ng hi\u1EC7u LED kh\u1ED5ng l\u1ED3 r\u1EF1c s\xE1ng 7 ng\xE0y \u0111\xEAm (+150% kh\xE1ch qu\xE1n ch\xEDnh, +72% doanh thu chi nh\xE1nh & nh\u01B0\u1EE3ng quy\u1EC1n, +80.000 Followers, t\u1EF1 \u0111\u1ED9ng \u0111\u0103ng 4 b\xE0i/ng\xE0y l\xEAn MXH)", cost: 25e6, days: 7, traffic: 1.5, branch: 0.72, followers: 8e4, posts: 4, videos: 4 }
  ];
  var FEED_AUTHORS = [
    { name: "Th\xE1nh \u0102n V\u1EB7t H\xE0 N\u1ED9i", av: "\u{1F9D1}\u200D\u{1F3A4}", badge: "Reviewer 5\u2605 Tri\u1EC7u View", tag: "TikTok" },
    { name: "M\xE8o B\xE9o Review", av: "\u{1F431}", badge: "Food blogger", tag: "Reels" },
    { name: "H\u1ED9i M\xEA Tr\xE0 S\u1EEFa", av: "\u{1F9CB}", badge: "C\u1ED9ng \u0111\u1ED3ng 200K", tag: "Facebook" },
    { name: "B\u1EA1n Gen Z S\u1ED1ng \u1EA2o", av: "\u{1F933}", badge: "KOC", tag: "TikTok" }
  ];
  var FEED_POSTS = [
    { pov: "POV: Th\xE1ch \u0111\u1EA5u ch\u1EE7 ti\u1EC7m l\xE0m chi\u1EBFc ly tr\xE0 s\u1EEFa to nh\u1EA5t l\u1ECBch s\u1EED qu\xE1n!", user: "H\xF4m nay m\xECnh th\xE1ch \u0111\u1EA5u qu\xE1n l\xE0m chi\u1EBFc ly to nh\u1EA5t c\xF3 th\u1EC3, cho m\xECnh full h\u1EBFt t\u1EA5t c\u1EA3 c\xE1c lo\u1EA1i topping c\xF3 trong qu\u1EA7y!", owner: "Nh\u1EADn th\xE1ch \u0111\u1EA5u li\u1EC1n! 1 L\xEDt tr\xE0 s\u1EEFa nguy\xEAn ch\u1EA5t \u0111\u1EADm \u0111\xE0 k\xE8m tr\xE2n ch\xE2u \u0111en, ph\xF4 mai d\u1EBBo, pudding tr\u1EE9ng v\xE0 th\u1EA1ch c\u1EE7 n\u0103ng tr\xE0n vi\u1EC1n!", reply: "U l\xE0 tr\u1EDDi c\xE1i ly n\u1EB7ng nh\u01B0 qu\u1EA3 t\u1EA1 tay! H\xFAt ng\u1EE5m n\xE0o l\xE0 ng\u1EADp ng\u1EE5a topping ng\u1EE5m \u0111\xF3, ph\xEA ch\u1EEF \xEA k\xE9o d\xE0i! X\u1EE9ng \u0111\xE1ng tri\u1EC7u view! \u{1F525}", sound: "Nh\u1EA1c K\u1ECBch T\xEDnh - Sound Th\u1EED Th\xE1ch TikTok", tags: ["#challenge", "#lykhonglo", "#trasuakhonglo", "#viral", "#fyp"] },
    { pov: "POV: B\u1EA1n ch\u1ECDn nh\u1EA7m \u0111\u01B0\u1EDDng 100% v\xE0 ph\u1EA3i u\u1ED1ng cho h\u1EBFt", user: "Order 100% \u0111\u01B0\u1EDDng r\u1ED3i m\u1EDBi bi\u1EBFt sai l\u1EA7m c\u1EE1 n\xE0o, ng\u1ECDt ki\u1EC3u ch\u1EA1m \u0111\xE1y r\u0103ng lu\xF4n tr\u1EDDi \u01A1i!", owner: 'B\u1EA1n \u01A1i l\u1EA7n sau c\u1EE9 n\xF3i "\xEDt ng\u1ECDt" l\xE0 b\xEAn m\xECnh gi\u1EA3m \u0111\u01B0\u1EDDng li\u1EC1n nh\xE9, th\u01B0\u01A1ng!', reply: "C\u01B0\u1EDDi x\u1EC9u \u{1F602} Cho em xin menu \xEDt \u0111\u01B0\u1EDDng v\u1EDBi \u1EA1!", sound: "Sound Ng\u1ECDt L\u1ECBm Tim", tags: ["#ngotlim", "#trasua", "#review", "#fyp"] },
    { pov: "Review th\u1EADt l\xF2ng: qu\xE1n tr\xE0 nh\u1ECF m\xE0 ly n\xE0o c\u0169ng ch\u1EC9n chu", user: "M\xECnh gh\xE9 qu\xE1n n\xE0y 3 l\u1EA7n r\u1ED3i, l\u1EA7n n\xE0o ly c\u0169ng \u0111\u1EA7y, topping t\u01B0\u01A1i, b\u1EA1n nh\xE2n vi\xEAn d\u1EC5 th\u01B0\u01A1ng l\u1EAFm!", owner: "C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 tin t\u01B0\u1EDFng! Qu\xE1n s\u1EBD c\u1ED1 g\u1EAFng gi\u1EEF v\u1EEFng ch\u1EA5t l\u01B0\u1EE3ng \u1EA1 \u2764\uFE0F", reply: "\u0110\xFAng lu\xF4n, h\xF4m qua m\xECnh c\u0169ng gh\xE9, tr\xE2n ch\xE2u dai ngon x\u1EC9u.", sound: "Lofi Chill Qu\xE1n Cafe", tags: ["#reviewquan", "#trasuangon", "#chill"] },
    { pov: "Ng\xE0y m\u01B0a ng\u1ED3i qu\xE1n tr\xE0, c\u1EA7m ly n\xF3ng h\u1ED5i th\u1EA5y \u0111\u1EDDi b\xECnh y\xEAn", user: "Tr\u1EDDi m\u01B0a n\xEAn m\xECnh tr\u1ED1n v\xE0o qu\xE1n tr\xE0, ly h\u1ED3ng tr\xE0 n\xF3ng b\u1EE5ng \u1EA5m h\u1EBFt c\u1EA3 ng\u01B0\u1EDDi.", owner: "M\u01B0a th\xEC c\u1EE9 gh\xE9 qu\xE1n tr\xFA ch\xE2n, b\xEAn m\xECnh lu\xF4n c\xF3 tr\xE0 n\xF3ng ch\u1EDD b\u1EA1n nh\xE9 \u2614", reply: "M\xEA c\xE1i vibe qu\xE1n gh\xEA, ch\u1ED7 ng\u1ED3i xinh x\u1EC9u.", sound: "Rainy Day Lofi", tags: ["#ngaymua", "#traNong", "#chill"] },
    { pov: "Th\u1EED th\xE1ch 10 v\u1ECB topping trong 1 ly: c\xF3 n\xEAn th\u1EED?", user: "M\xECnh b\u1EAFt \u0111\u1EA7u th\u1EED th\xE1ch 10 topping trong 1 ly, k\u1EBFt qu\u1EA3 khi\u1EBFn c\u1EA3 team c\u01B0\u1EDDi kh\xF4ng ng\u1EADm \u0111\u01B0\u1EE3c m\u1ED3m.", owner: "B\xEAn m\xECnh gi\u1EDBi h\u1EA1n 4 topping/ly n\xEAn b\u1EA1n nh\u1EDB ch\u1ECDn m\xF3n t\u1EE7 nh\xE9 \u{1F606}", reply: "Ch\u1EC9 4 th\xF4i sao \u{1F62D} cho 5 \u0111\u01B0\u1EE3c kh\xF4ng ch\u1EE7 qu\xE1n!", sound: "Funny Beat TikTok", tags: ["#thachthuc", "#topping", "#hai"] }
  ];
  var SEEDS = [
    { id: "dauTay", name: "D\xE2u T\xE2y \u0110\xE0 L\u1EA1t", icon: "\u{1F353}", price: 15e3, days: 2, yield: [20, 30], gives: "dau" },
    { id: "daoTien", name: "\u0110\xE0o Ti\xEAn Gi\xF2n Ng\u1ECDt", icon: "\u{1F351}", price: 15e3, days: 2, yield: [20, 30], gives: "dao" },
    { id: "xoaiCat", name: "Xo\xE0i C\xE1t H\xF2a L\u1ED9c", icon: "\u{1F96D}", price: 18e3, days: 3, yield: [22, 32], gives: "xoai" },
    { id: "bupTra", name: "B\xFAp Tr\xE0 Xanh C\u1ED5 Th\u1EE5", icon: "\u{1F333}", price: 2e4, days: 3, yield: [25, 35], gives: "lucTra" },
    { id: "bacHaSeed", name: "B\u1EA1c H\xE0 Th\u01A1m", icon: "\u{1F33F}", price: 1e4, days: 1, yield: [15, 25], gives: "bacHa" },
    { id: "chanhVang", name: "Chanh V\xE0ng Qu\xFD T\u1ED9c", icon: "\u{1F34B}", price: 12e3, days: 1, yield: [18, 28], gives: "chanh" }
  ];
  var PLOTS = 16;
  var PLOTS_START = 6;
  var plotCost = (n) => Math.round(6e4 * Math.pow(1.25, n - PLOTS_START) / 1e3) * 1e3;
  var TAX = { minRate: 0.05, maxRate: 0.15, hours: 72, traffic: 0.15, speed: 0.15, theft: 0.15, lucky: 0.15 };
  var BANK = { interest: 0.01, lockShifts: 7, max: 99e9, starBonus: 0.1, bigBonus: 0.05 };
  var SECRET_RECIPES = [
    { id: "s1", name: "Tr\xE0 Hoa M\u01A1 S\u01B0\u01A1ng", icon: "\u{1F338}", desc: "H\u01B0\u01A1ng m\u01A1 r\u1EEBng d\u1ECBu nh\u1EB9." },
    { id: "s2", name: "S\u1EEFa Tuy\u1EBFt N\xFAi Cao", icon: "\u{1F3D4}\uFE0F", desc: "S\u1EEFa l\u1EA1nh t\u1EA1o l\u1EDBp foam tuy\u1EBFt." },
    { id: "s3", name: "Tr\xE0 \u0110\xE0o Cam S\u1EA3 V\xE0ng", icon: "\u{1F34A}", desc: "C\xF4ng th\u1EE9c gia truy\u1EC1n." },
    { id: "s4", name: "Matcha C\u1ED5 \u0110i\u1EC3n Kyoto", icon: "\u{1F375}", desc: "Matcha nghi\u1EC1n \u0111\xE1." },
    { id: "s5", name: "Tr\xE2n Ch\xE2u M\u1EADt Ong R\u1EEBng", icon: "\u{1F36F}", desc: "Tr\xE2n ch\xE2u n\u1EA5u m\u1EADt." },
    { id: "s6", name: "Tr\xE0 \xD4 Long H\u1ED3ng Ng\u1ECDc", icon: "\u{1F48E}", desc: "\xD4 long \u1EE7 hoa h\u1ED3ng." },
    { id: "s7", name: "B\xED K\xEDp S\u01B0\u01A1ng S\xE1o Tr\u0103ng R\u1EB1m", icon: "\u{1F315}", desc: "S\u01B0\u01A1ng s\xE1o tr\u0103ng r\u1EB1m." }
  ];
  var GIFT_COST = 3e4;
  var GACHA = {
    names: ["L\xE1 tr\xE0 non", "S\u1EEFa t\u01B0\u01A1i", "\u0110\u01B0\u1EDDng m\xEDa", "\u0110\xE1 b\xE0o", "Ly gi\u1EA5y xinh", "\u1ED0ng h\xFAt tre", "\u0110\xE0o ti\xEAn", "V\u1EA3i \u0111\u1EA7u m\xF9a", "N\u1ED3i tr\xE2n ch\xE2u", "Flan nh\xE0 l\xE0m", "\u1EA4m tr\xE0 g\u1ED1m", "Matcha th\u01B0\u1EE3ng h\u1EA1ng", "\xD4 long n\xFAi cao", "Foam m\xE2y tr\u1EDDi", "D\u1EA5u ch\xE2n th\xFA c\u01B0ng", "Tr\xE0 hoa ng\xE0n c\xE1nh", "Tr\xE2n ch\xE2u ng\u1ECDc b\xEDch", "Ly tr\xE0 sao b\u0103ng"],
    icons: ["\u{1F343}", "\u{1F95B}", "\u{1F36C}", "\u{1F9CA}", "\u{1F964}", "\u{1F38B}", "\u{1F351}", "\u{1F338}", "\u{1F372}", "\u{1F36E}", "\u{1FAD6}", "\u{1F375}", "\u{1F3D4}\uFE0F", "\u2601\uFE0F", "\u{1F43E}", "\u{1F4AE}", "\u{1F48E}", "\u{1F320}"],
    rarities: ["C", "C", "C", "C", "C", "C", "U", "U", "U", "U", "U", "R", "R", "R", "E", "E", "L", "L"],
    weights: { C: 52, U: 28, R: 13, E: 5.5, L: 1.5 },
    rarityName: { C: "Th\u01B0\u1EDDng", U: "Kh\xE1 hi\u1EBFm", R: "Hi\u1EBFm", E: "C\u1EF1c hi\u1EBFm", L: "Huy\u1EC1n tho\u1EA1i" }
  };
  var NPC_FRIENDS = [
    { id: "f1", name: "Qu\xE1n Nh\xE0 B\xE0 Ngo\u1EA1i", av: "\u{1F475}", rating: 4.6, rich: 24e5 },
    { id: "f2", name: "Tr\xE0 S\u1EEFa M\xE2y H\u1ED3ng", av: "\u2601\uFE0F", rating: 4.3, rich: 11e5 },
    { id: "f3", name: "C\u1EEDa H\xE0ng M\xE8o Mun", av: "\u{1F408}\u200D\u2B1B", rating: 4.8, rich: 56e5 },
    { id: "f4", name: "Ti\u1EC7m Gi\xF3 Bi\u1EC3n", av: "\u{1F30A}", rating: 4.1, rich: 75e4 }
  ];
  var THEMES = {
    cream: { name: "Kem s\u1EEFa", bg: "#FDF0DF", card: "#FFFAF2", accent: "#EE7A96", accent2: "#F5A3B7", soft: "#FFE1E8" },
    nau: { name: "N\xE2u c\xE0 ph\xEA", bg: "#F1E6DA", card: "#FBF5EE", accent: "#9A6444", accent2: "#C79A7A", soft: "#EBD9C8" },
    socola: { name: "S\xF4 c\xF4 la", bg: "#EADFD3", card: "#F8F1EA", accent: "#6B4226", accent2: "#A27B5C", soft: "#E0CDBB" },
    dau: { name: "H\u1ED3ng d\xE2u", bg: "#FFEFF3", card: "#FFF8FA", accent: "#E0507F", accent2: "#F29AB5", soft: "#FFD6E2" },
    camdao: { name: "Cam \u0111\xE0o", bg: "#FFF0E2", card: "#FFF8F0", accent: "#EA8A55", accent2: "#F5B592", soft: "#FFDFC8" },
    thai: { name: "Tr\xE0 Th\xE1i", bg: "#FFF1DE", card: "#FFF8EC", accent: "#E07B39", accent2: "#F0A870", soft: "#FFDDBA" },
    chanh: { name: "V\xE0ng chanh", bg: "#FBF8DC", card: "#FFFDF0", accent: "#C9AA2E", accent2: "#E0CC6A", soft: "#F4EDB0" },
    matcha: { name: "Xanh matcha", bg: "#EEF4E2", card: "#F8FBEF", accent: "#5FA95F", accent2: "#98CC98", soft: "#D7EFD9" },
    bacha: { name: "B\u1EA1c h\xE0", bg: "#E8F6F1", card: "#F5FBF9", accent: "#4FAF93", accent2: "#8DCDB8", soft: "#CDEDE3" },
    bien: { name: "Xanh bi\u1EC3n", bg: "#E9F2FB", card: "#F6FAFE", accent: "#4A8BD0", accent2: "#8DB8E6", soft: "#D0E3F6" },
    khoai: { name: "T\xEDm khoai m\xF4n", bg: "#F0EAFA", card: "#F9F6FD", accent: "#8F6BC8", accent2: "#B79BE0", soft: "#E1D5F4" },
    dem: { name: "\u0110\xEAm d\u1ECBu", bg: "#2B2540", card: "#3A3356", accent: "#E58CB3", accent2: "#F0B0CC", soft: "#51477A", dark: true }
  };
  var LOGO_ICONS = ["\u{1F9CB}", "\u{1F98A}", "\u{1F427}", "\u{1F43B}", "\u{1F994}", "\u{1F425}", "\u{1F98C}", "\u{1F989}", "\u{1F422}", "\u{1F439}", "\u{1F98B}", "\u{1F99D}", "\u{1F43B}", "\u{1F430}", "\u{1F43C}", "\u{1F353}", "\u{1F34A}", "\u{1F96D}", "\u{1F48E}", "\u{1F308}", "\u2601\uFE0F", "\u2600\uFE0F", "\u{1F319}", "\u{1F388}", "\u{1F381}", "\u{1F370}", "\u{1F366}", "\u{1F9C1}", "\u{1F369}", "\u{1F36A}", "\u{1F497}", "\u2B50", "\u2728", "\u{1F451}", "\u{1F380}"];
  var STAMP_COLORS = ["#ffffff", "#fde8cf", "#ffd6e0", "#d6f2e4", "#8b5a3c", "#2f2a3a", "#ffe08a", "#e3d6ff"];
  var SLOGANS = ["Tr\xE0 s\u1EEFa m\u1ED7i ng\xE0y", "Ngon t\u1EEB gi\u1ECDt \u0111\u1EA7u", "Pha b\u1EB1ng c\u1EA3 tr\xE1i tim", "Nh\u1ECF m\xE0 c\xF3 v\xF5", "Chill c\xF9ng tr\xE0 s\u1EEFa", "B\u1ECF tr\u1ED1ng"];
  var SHIFT_MINUTES = [3, 4, 5];
  var CHANGELOG = [
    "v3.1: To\xE0n m\xE0n h\xECnh, m\xE0n m\u1EDF \u0111\u1EA7u g\u1ECDn \u0111\u1EB9p, h\u01B0\u1EDBng d\u1EABn chi ti\u1EBFt + h\u01B0\u1EDBng d\u1EABn l\u1EA7n \u0111\u1EA7u (c\xF3 b\u1ECF qua), qu\u1EA7y pha ch\u1EBF v\u1EBD l\u1EA1i, b\u1EA3n \u0111\u1ED3 & th\u1EBB \u0111\u1ECBa \u0111i\u1EC3m c\xF3 h\xECnh n\u1EC1n, kh\xE1ch \u0111\u1EBFn \u0111\u1EC1u v\xE0 ch\u1EADm h\u01A1n, hi\u1EC7u \u1EE9ng n\u1ED5/combo m\u01B0\u1EE3t h\u01A1n, s\u1EEDa t\u1EA3i logo.",
    "v3.0: L\xE0m l\u1EA1i to\xE0n b\u1ED9 giao di\u1EC7n & v\xF2ng ch\u01A1i theo k\u1ECBch b\u1EA3n chi ti\u1EBFt (15 menu, pha ch\u1EBF c\xF3 hi\u1EC7u \u1EE9ng, s\u1EA3nh tr\xE0, chi nh\xE1nh, nh\xE2n s\u1EF1\u2026).",
    "Th\xEAm 2 mini game: Milk Tea Crush v\xE0 Tr\xE2n Ch\xE2u N\u1ED5.",
    "Th\xEAm kh\u1EDFi nghi\u1EC7p xuy\xEAn Vi\u1EC7t v\u1EDBi 10 \u0111\u1ECBa \u0111i\u1EC3m, th\xFA c\u01B0ng, v\u01B0\u1EDDn c\xE2y 16 \xF4."
  ];

  // js/core.js
  var listeners = /* @__PURE__ */ new Map();
  function on(ev, cb) {
    if (!listeners.has(ev)) listeners.set(ev, /* @__PURE__ */ new Set());
    listeners.get(ev).add(cb);
    return () => listeners.get(ev)?.delete(cb);
  }
  function emit(ev, data) {
    for (const cb of [...listeners.get(ev) || []]) {
      try {
        cb(data);
      } catch (e) {
        console.error(`[bus] ${ev}`, e);
      }
    }
  }
  var clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  var rand = (a, b) => Math.random() * (b - a) + a;
  var randInt = (a, b) => Math.floor(rand(a, b + 1));
  var pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  var chance = (p) => Math.random() < p;
  var sum = (arr, f = (x) => x) => arr.reduce((s, x) => s + f(x), 0);
  function wpick(weights) {
    const es = Object.entries(weights).filter(([, w]) => w > 0);
    let r = Math.random() * es.reduce((s, [, w]) => s + w, 0);
    for (const [k, w] of es) {
      r -= w;
      if (r <= 0) return k;
    }
    return es.length ? es[es.length - 1][0] : void 0;
  }
  var trimNum = (n, d) => String(Number(n.toFixed(d))).replace(".", ",");
  function fmtK(n) {
    const v = Number(n) || 0, a = Math.abs(v);
    if (a >= 1e9) return trimNum(v / 1e9, 2) + " t\u1EF7";
    if (a >= 1e6) return trimNum(v / 1e6, 2) + "tr";
    if (a >= 1e3) return trimNum(v / 1e3, 1) + "k";
    return Math.round(v) + "\u0111";
  }
  var fmt = (n) => {
    const v = Math.round(Number(n) || 0);
    return (v < 0 ? "-" : "") + Math.abs(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "\u0111";
  };
  var esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  var $ = (sel, root2 = document) => root2.querySelector(sel);
  var $$ = (sel, root2 = document) => [...root2.querySelectorAll(sel)];
  function h(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  var wait = (ms) => new Promise((r) => setTimeout(r, ms));
  var pad2 = (n) => String(n).padStart(2, "0");
  var fmtClock = (hh) => `${pad2(Math.floor(hh))}:${pad2(Math.floor(hh % 1 * 60 / 10) * 10)}`;
  function newState() {
    const stock = {}, unlocked2 = {}, onMenu = {}, prices = {};
    for (const id of IDS) {
      stock[id] = [];
      unlocked2[id] = ITEMS[id].unlock === 0;
      onMenu[id] = ITEMS[id].unlock === 0 && ITEMS[id].kind !== "supply";
      if (ITEMS[id].price) prices[id] = ITEMS[id].price;
    }
    prices.sizeL = 7e3;
    const plots = [];
    for (let i = 0; i < PLOTS; i++) plots.push({ seed: null, water: 0, grown: 0 });
    return {
      v: SAVE_VERSION,
      shopName: "Ti\u1EC7m Tr\xE0 M\u01A1 \u01AF\u1EDBc",
      logo: { emoji: "\u{1F9CB}", img: null },
      stamp: { frame: "round", textStyle: "straight", bg: "#ffffff", slogan: "Tr\xE0 s\u1EEFa m\u1ED7i ng\xE0y", icon: "\u{1F9CB}", img: null },
      day: 1,
      money: START_MONEY,
      phase: "home",
      tab: "kho",
      subtab: {},
      location: "goc",
      season: "spring",
      weather: "sunny",
      temp: 25,
      eventId: "trend",
      forecast: [],
      rating: 4,
      reviews: [],
      ratingCount: 0,
      followers: 144,
      stock,
      unlocked: unlocked2,
      onMenu,
      prices,
      plan: {},
      lastUsed: {},
      cat: { tra: 0, huong: 0, top: 0, nv: 0, online: 0 },
      equip: {},
      apps: {},
      staff: {},
      kpi: { shifts: 0 },
      pet: null,
      petDecor: {},
      garden: { plots, unlocked: PLOTS_START, seeds: {}, watered: false },
      branches: {},
      franchise: { count: 0 },
      social: { ad: null, videosToday: 0, posts: [], viral: 0 },
      tax: { until: 0, last: 0, paid: 0, rate: 0.1 },
      bank: { balance: 0, principal: 0, since: 0, shifts: 0 },
      today: freshToday(),
      history: [],
      collection: { owned: {}, secrets: {}, packs: 1 },
      friends: { code: "TTN-" + Math.random().toString(36).slice(2, 7).toUpperCase(), list: [], gifted: {} },
      crush: { level: 1, best: 0, perm: 0, gifts: 0 },
      pearl: { best: 0, playsDay: 0 },
      settings: { music: 0.7, sfx: 0.8, style: "lofi", haptic: 2, hints: true, shiftMin: 4, shiftMinNext: 4, theme: "cream", tutorialDone: false },
      firstRun: true,
      started: false,
      savedAt: Date.now()
    };
  }
  function freshToday() {
    return { rev: 0, tips: 0, online: 0, cogs: 0, rent: 0, util: 0, wage: 0, tax: 0, purchase: 0, cups: 0, left: 0, stars: [], waste: 0, branch: 0, fran: 0, interest: 0 };
  }
  var S = newState();
  function replaceState(next) {
    for (const k of Object.keys(S)) delete S[k];
    Object.assign(S, next);
  }
  var dirty = /* @__PURE__ */ new Set();
  var markDirty = (...k) => k.forEach((x) => dirty.add(x));
  var consumeDirty = () => {
    const o = [...dirty];
    dirty.clear();
    return o;
  };
  var storageOk = true;
  function store() {
    if (!storageOk) return null;
    try {
      const s = window.localStorage;
      s.getItem(SAVE_KEY);
      return s;
    } catch (e) {
      storageOk = false;
      return null;
    }
  }
  var BK = SAVE_KEY + "_bk";
  function saveGame() {
    S.savedAt = Date.now();
    const st = store();
    if (!st) return false;
    try {
      st.setItem(SAVE_KEY, JSON.stringify({ v: SAVE_VERSION, t: Date.now(), s: S }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var pend = null;
  function requestSave() {
    if (pend) return;
    pend = setTimeout(() => {
      pend = null;
      saveGame();
    }, 700);
  }
  function saveBackup() {
    const st = store();
    if (!st) return;
    try {
      const list = JSON.parse(st.getItem(BK) || "[]");
      list.unshift({ t: Date.now(), day: S.day, money: S.money, s: JSON.stringify(S) });
      st.setItem(BK, JSON.stringify(list.slice(0, 3)));
    } catch (e) {
    }
  }
  function listBackups() {
    try {
      return JSON.parse(store()?.getItem(BK) || "[]").map((b, i) => ({ i, t: b.t, day: b.day, money: b.money }));
    } catch (e) {
      return [];
    }
  }
  function normalize(raw) {
    const d = newState();
    const s = { ...d, ...raw };
    for (const k of ["logo", "stamp", "cat", "garden", "social", "tax", "bank", "collection", "friends", "crush", "pearl", "settings", "kpi", "forecast"]) {
      if (d[k] && typeof d[k] === "object" && !Array.isArray(d[k])) s[k] = { ...d[k], ...raw[k] || {} };
    }
    for (const k of ["stock", "unlocked", "onMenu", "prices"]) s[k] = { ...d[k], ...raw[k] || {} };
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
    if (s.phase === "sell") s.phase = "home";
    s.today = { ...freshToday(), ...raw.today || {} };
    return s;
  }
  function loadGame() {
    const st = store();
    if (!st) return false;
    try {
      const raw = st.getItem(SAVE_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      replaceState(normalize(data.s));
      return true;
    } catch (e) {
      console.warn("[save] h\u1ECFng", e);
      return false;
    }
  }
  function restoreBackup(i) {
    try {
      const b = JSON.parse(store().getItem(BK) || "[]")[i];
      if (!b) return false;
      replaceState(normalize(JSON.parse(b.s)));
      saveGame();
      return true;
    } catch (e) {
      return false;
    }
  }
  function exportCode() {
    const json = JSON.stringify({ v: SAVE_VERSION, s: S });
    return "TTM3." + btoa(unescape(encodeURIComponent(json)));
  }
  function importCode(code) {
    try {
      const c = String(code).trim();
      if (!c.startsWith("TTM3.")) return false;
      const data = JSON.parse(decodeURIComponent(escape(atob(c.slice(5)))));
      replaceState(normalize(data.s));
      saveGame();
      return true;
    } catch (e) {
      return false;
    }
  }
  function wipeSave() {
    try {
      store()?.removeItem(SAVE_KEY);
      store()?.removeItem(BK);
    } catch (e) {
    }
    replaceState(newState());
  }
  var updaters = [];
  var renderers = /* @__PURE__ */ new Map();
  var frames = [];
  var last = 0;
  var running = false;
  var paused = false;
  var speed = 1;
  var registerUpdate = (f) => updaters.push(f);
  var registerRenderer = (k, f) => renderers.set(k, f);
  var registerFrame = (f) => frames.push(f);
  function loop(ts) {
    if (!running) return;
    const dt = Math.min((ts - last) / 1e3, 0.25);
    last = ts;
    if (!paused) for (const f of updaters) {
      try {
        f(dt * speed);
      } catch (e) {
        console.error("[loop] update", e);
      }
    }
    for (const k of consumeDirty()) {
      try {
        renderers.get(k)?.();
      } catch (e) {
        console.error("[loop] render " + k, e);
      }
    }
    for (const f of frames) {
      try {
        f(dt);
      } catch (e) {
        console.error("[loop] frame", e);
      }
    }
    requestAnimationFrame(loop);
  }
  function startLoop() {
    if (running) return;
    running = true;
    last = performance.now();
    requestAnimationFrame(loop);
  }
  var setPaused = (v) => {
    paused = !!v;
  };
  var setSpeed = (v) => {
    speed = v;
  };
  function flushRender() {
    for (const k of consumeDirty()) {
      try {
        renderers.get(k)?.();
      } catch (e) {
        console.error(e);
      }
    }
  }
  var actx = null;
  var master = null;
  var mgain = null;
  var musicTimer = null;
  var mstep = 0;
  var unlocked = false;
  function ctx() {
    if (actx) return actx;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      actx = new AC();
      master = actx.createGain();
      master.connect(actx.destination);
      mgain = actx.createGain();
      mgain.connect(actx.destination);
      applyVolumes();
    } catch (e) {
      actx = null;
    }
    return actx;
  }
  function applyVolumes() {
    if (!master) return;
    master.gain.value = 0.45 * S.settings.sfx;
    mgain.gain.value = 0.16 * S.settings.music;
  }
  function tone(f, d, type = "sine", vol = 1, when = 0, dest = null) {
    if (!actx) return;
    try {
      const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime + when;
      o.type = type;
      o.frequency.value = f;
      g.gain.setValueAtTime(1e-4, t);
      g.gain.exponentialRampToValueAtTime(Math.max(2e-4, vol), t + 0.012);
      g.gain.exponentialRampToValueAtTime(1e-4, t + d);
      o.connect(g).connect(dest || master);
      o.start(t);
      o.stop(t + d + 0.05);
    } catch (e) {
    }
  }
  var SFX = {
    click: () => tone(660, 0.06, "triangle", 0.5),
    pop: () => tone(440, 0.06, "square", 0.25),
    cup: () => {
      tone(300, 0.08, "triangle", 0.6);
      tone(420, 0.06, "triangle", 0.4, 0.05);
    },
    pour: () => tone(520 + Math.random() * 60, 0.09, "sine", 0.18),
    drop: () => {
      tone(880, 0.05, "sine", 0.4);
      tone(660, 0.07, "sine", 0.3, 0.04);
    },
    seal: () => {
      tone(160, 0.12, "sawtooth", 0.5);
      tone(900, 0.1, "square", 0.25, 0.14);
    },
    ding: () => {
      tone(1568, 0.25, "sine", 0.5);
      tone(2093, 0.3, "sine", 0.3, 0.05);
    },
    coin: () => {
      tone(1040, 0.08, "square", 0.3);
      tone(1310, 0.13, "square", 0.3, 0.07);
    },
    success: () => {
      tone(523, 0.1, "triangle");
      tone(659, 0.1, "triangle", 1, 0.09);
      tone(784, 0.18, "triangle", 1, 0.18);
    },
    error: () => {
      tone(215, 0.14, "sawtooth", 0.4);
      tone(175, 0.2, "sawtooth", 0.4, 0.11);
    },
    sad: () => {
      tone(392, 0.14, "sine");
      tone(310, 0.26, "sine", 1, 0.13);
    },
    sparkle: () => [1560, 1980, 2350].forEach((f, i) => tone(f, 0.09, "sine", 0.45, i * 0.05)),
    unlock: () => {
      tone(700, 0.11, "sine");
      tone(930, 0.11, "sine", 1, 0.1);
      tone(1170, 0.22, "sine", 1, 0.2);
    },
    level: () => [523, 659, 784, 1046, 1318].forEach((f, i) => tone(f, 0.2, "triangle", 1, i * 0.08)),
    bell: () => {
      tone(1760, 0.3, "sine", 0.4);
      tone(2217, 0.4, "sine", 0.25, 0.02);
    },
    match: () => {
      tone(600 + Math.random() * 300, 0.1, "triangle", 0.5);
    },
    boom: () => {
      tone(120, 0.25, "sawtooth", 0.5);
      tone(80, 0.3, "square", 0.35, 0.05);
    },
    /* --- Trân Châu Nổ --- */
    // nổ lách tách nhỏ (nhóm 2-3 viên), tông ngẫu nhiên nhẹ
    pearlPop: () => {
      const f = 700 + Math.random() * 200;
      tone(f, 0.05, "square", 0.22);
      tone(f * 1.5, 0.07, "triangle", 0.3, 0.03);
      tone(f * 2, 0.05, "sine", 0.2, 0.06);
    },
    // nổ vừa (4-5 viên): tông cao hơn, 4 nốt tách liên tiếp
    pearlPop2: () => [880, 1100, 1320, 1760].forEach((f, i) => tone(f * (1 + Math.random() * 0.03), 0.06, i % 2 ? "triangle" : "square", 0.28, i * 0.035)),
    // nổ lớn (≥6 viên)
    pearlBoom: () => {
      tone(110, 0.22, "sawtooth", 0.45);
      tone(70, 0.3, "square", 0.3, 0.03);
      [1046, 1318, 1568, 2093].forEach((f, i) => tone(f, 0.12, "triangle", 0.35, 0.05 + i * 0.045));
    },
    fly: () => {
      [400, 520, 680].forEach((f, i) => tone(f, 0.07, "sine", 0.16, i * 0.03));
    },
    swoosh: () => {
      [900, 700, 520, 380].forEach((f, i) => tone(f, 0.06, "sine", 0.14, i * 0.025));
    },
    bounce: () => {
      tone(220, 0.07, "sine", 0.35);
      tone(330, 0.05, "triangle", 0.18, 0.05);
    },
    // arpeggio combo tăng dần theo cấp: gọi sfx('combo2') ... sfx('combo6')
    combo: () => [659, 784, 988].forEach((f, i) => tone(f, 0.1, "triangle", 0.4, i * 0.06)),
    ...Object.fromEntries([2, 3, 4, 5, 6].map((l) => ["combo" + l, () => {
      const b = 523 * Math.pow(1.122, l * 2);
      [1, 1.25, 1.5, 2, 2.5].slice(0, l + 1).forEach((m, i) => tone(b * m, 0.12, "triangle", 0.42, i * 0.055));
    }])),
    collect: () => {
      tone(1200, 0.06, "sine", 0.3);
      tone(1600, 0.1, "sine", 0.3, 0.06);
    },
    win: () => {
      [523, 659, 784, 1046, 784, 1046, 1318].forEach((f, i) => tone(f, 0.18, "triangle", 0.55, i * 0.09));
      tone(1568, 0.5, "sine", 0.3, 0.65);
    },
    lose: () => {
      [440, 392, 330, 262].forEach((f, i) => tone(f, 0.2, "sine", 0.5, i * 0.13));
    }
  };
  var HAPTIC_MUL = [0, 0.6, 1, 1.7];
  var HAPTIC = {
    click: 8,
    pop: 10,
    cup: 14,
    drop: 10,
    seal: [20, 30, 40],
    ding: 22,
    coin: 12,
    success: [15, 40, 25],
    error: [40, 30, 40],
    sad: 30,
    sparkle: 8,
    unlock: [20, 30, 20],
    level: [15, 30, 15, 30, 30],
    bell: 16,
    match: 12,
    boom: [40, 20, 60],
    pour: 0,
    combo: [14, 24, 20],
    bounce: 8,
    fly: 6,
    swoosh: 8,
    collect: [10, 20, 10]
  };
  function buzz(pattern = 10) {
    const m = HAPTIC_MUL[S.settings.haptic ?? 2] || 0;
    if (pattern === 0) return;
    if (!m || !navigator.vibrate) return;
    const arr = Array.isArray(pattern) ? pattern : [pattern];
    try {
      navigator.vibrate(arr.map((v, i) => i % 2 === 0 ? Math.max(4, Math.round(v * m)) : v));
    } catch (e) {
    }
  }
  var sfx = (n) => {
    buzz(HAPTIC[n] ?? 8);
    if (unlocked && S.settings.sfx > 0) SFX[n]?.();
  };
  var STYLES = {
    lofi: { ms: 420, mel: [523, 0, 659, 0, 587, 0, 523, 0, 440, 0, 523, 659, 587, 0, 0, 0], bass: [131, 0, 0, 0, 175, 0, 0, 0, 147, 0, 0, 0, 196, 0, 0, 0], type: "sine" },
    vui: { ms: 260, mel: [659, 784, 880, 784, 659, 523, 587, 659, 698, 880, 784, 698, 659, 587, 523, 0], bass: [262, 0, 262, 0, 349, 0, 349, 0, 294, 0, 294, 0, 392, 0, 392, 0], type: "triangle" }
  };
  function restartMusic() {
    if (musicTimer) clearInterval(musicTimer);
    musicTimer = null;
    const st = STYLES[S.settings.style];
    if (!unlocked || !actx || !st || S.settings.music <= 0) return;
    musicTimer = setInterval(() => {
      const i = mstep++ % st.mel.length;
      if (st.mel[i]) tone(st.mel[i], st.ms / 1e3 * 0.9, st.type, 0.5, 0, mgain);
      if (st.bass[i]) tone(st.bass[i], st.ms / 1e3 * 1.8, "sine", 0.4, 0, mgain);
    }, st.ms);
  }
  function initAudio() {
    const once = () => {
      if (unlocked) return;
      unlocked = true;
      const c = ctx();
      if (c?.state === "suspended") c.resume().catch(() => {
      });
      restartMusic();
      window.removeEventListener("pointerdown", once);
      window.removeEventListener("keydown", once);
    };
    window.addEventListener("pointerdown", once);
    window.addEventListener("keydown", once);
  }

  // js/econ.js
  var econ_exports = {};
  __export(econ_exports, {
    MAX_SECRET: () => MAX_SECRET,
    addStock: () => addStock,
    appsOpen: () => appsOpen,
    bonus: () => bonus,
    buyCategory: () => buyCategory,
    buyDecor: () => buyDecor,
    buyEquip: () => buyEquip,
    commitPlan: () => commitPlan,
    costOf: () => costOf,
    ensureForecast: () => ensureForecast,
    equipLevel: () => equipLevel,
    equipNext: () => equipNext,
    eventOf: () => eventOf,
    expectedCustomers: () => expectedCustomers,
    expireStock: () => expireStock,
    expiringToday: () => expiringToday,
    fire: () => fire,
    hasStaff: () => hasStaff,
    hire: () => hire,
    hireBlock: () => hireBlock,
    lifeBonus: () => lifeBonus,
    lifeDays: () => lifeDays,
    nearestExpiry: () => nearestExpiry,
    onlineEnabled: () => onlineEnabled,
    onlineProgress: () => onlineProgress,
    openMissing: () => openMissing,
    petActive: () => petActive,
    pickEvent: () => pickEvent,
    planTotal: () => planTotal,
    priceFactor: () => priceFactor,
    priceLimit: () => priceLimit,
    priceOf: () => priceOf,
    priceWeight: () => priceWeight,
    rentToday: () => rentToday,
    rollWeatherFor: () => rollWeatherFor,
    safePrice: () => safePrice,
    seasonOf: () => seasonOf,
    secretCount: () => secretCount,
    setPlan: () => setPlan,
    setPrice: () => setPrice,
    sizeLWeight: () => sizeLWeight,
    staffCount: () => staffCount,
    staffWagePerDay: () => staffWagePerDay,
    stockQty: () => stockQty,
    tabletsOwned: () => tabletsOwned,
    take: () => take,
    taxActive: () => taxActive,
    toggleApp: () => toggleApp,
    toggleMenu: () => toggleMenu,
    unitCost: () => unitCost,
    unitSize: () => unitSize,
    unlockItem: () => unlockItem,
    utilityToday: () => utilityToday,
    weatherOf: () => weatherOf
  });
  var seasonOf = (day) => SEASON_ORDER[Math.floor((day - 1) / DAYS_PER_SEASON) % 4];
  function rollWeatherFor(day) {
    const se = SEASONS[seasonOf(day)];
    const loc = LOCATIONS[S.location];
    const pool = loc?.pool || se.pool;
    const id = wpick(pool) || "sunny";
    const [lo, hi] = se.temp;
    let t = randInt(lo, hi);
    if (id === "hot") t = hi + randInt(0, 3);
    if (id === "cold") t = lo - randInt(0, 3);
    if (id === "rain") t -= 2;
    return { day, weather: id, temp: t };
  }
  function ensureForecast() {
    S.forecast = (S.forecast || []).filter((f) => f.day >= S.day);
    for (let d = S.day; d <= S.day + 3; d++) if (!S.forecast.some((f) => f.day === d)) S.forecast.push(rollWeatherFor(d));
    S.forecast.sort((a, b) => a.day - b.day);
    S.weather = S.forecast[0].weather;
    S.temp = S.forecast[0].temp;
    S.season = seasonOf(S.day);
  }
  function pickEvent() {
    const pool = DAY_EVENTS.map((e) => ({ e, w: e.id === "normal" ? 3 : 1 }));
    let r = Math.random() * sum(pool, (p) => p.w);
    for (const p of pool) {
      r -= p.w;
      if (r <= 0) return p.e.id;
    }
    return "normal";
  }
  var eventOf = () => DAY_EVENTS.find((e) => e.id === S.eventId) || DAY_EVENTS[DAY_EVENTS.length - 1];
  var weatherOf = () => WEATHERS[S.weather] || WEATHERS.sunny;
  function equipLevel(id) {
    const eq = EQUIP.find((e) => e.id === id);
    const v = S.equip[id];
    if (v === void 0) return eq && eq.tiers[0].c === 0 ? 1 : 0;
    return v;
  }
  var hasStaff = (id) => !!S.staff[id];
  var staffCount = () => Object.keys(S.staff).length;
  var safePrice = () => hasStaff("quanLy");
  var taxActive = () => Date.now() < S.tax.until;
  var tabletsOwned = () => equipLevel("tablet");
  var appsOpen = () => Object.values(S.apps).filter(Boolean).length;
  var onlineEnabled = () => appsOpen() > 0;
  var secretCount = () => Object.keys(S.collection.secrets).length;
  function petActive() {
    const p = S.pet;
    if (!p) return false;
    return (p.hunger + p.joy + p.clean + p.energy) / 4 >= 60;
  }
  function bonus() {
    const b = {
      traffic: 0,
      tip: 0,
      patience: 0,
      bill: 0,
      online: 0,
      rent: 0,
      utility: 0,
      ingCost: 0,
      priceSens: 0,
      hardCust: 0,
      branch: 0,
      lateBill: 0,
      rainTraffic: 0,
      rainOnline: 0,
      coldTip: 0,
      billTeas: {},
      errReduce: 0,
      queue: QUEUE_BASE,
      tables: 4,
      extraCust: 0,
      pour: 0,
      seal: 0,
      life: 0,
      topSave: 0,
      speedStaff: 0,
      theft: 0,
      lucky: 0,
      comboX2: 0,
      badRev: 0
    };
    const add = (fx) => {
      if (!fx) return;
      for (const [k, v] of Object.entries(fx)) {
        if (k === "billTeas") {
          for (const [t, x] of Object.entries(v)) b.billTeas[t] = (b.billTeas[t] || 0) + x;
        } else if (k in b && typeof v === "number") b[k] += v;
      }
    };
    add(LOCATIONS[S.location]?.fx);
    const ev = eventOf();
    add({ traffic: ev.traffic || 0, tip: ev.tip || 0, patience: ev.patience || 0, bill: ev.bill || 0 });
    const w = weatherOf();
    b.traffic += w.traffic || 0;
    b.online += w.online || 0;
    if (S.weather === "rain") {
      b.traffic += b.rainTraffic;
      b.online += b.rainOnline;
    }
    b.traffic += S.cat.tra * CATEGORIES.tra.per;
    b.patience += S.cat.huong * CATEGORIES.huong.per;
    b.badRev += S.cat.top * CATEGORIES.top.per;
    b.speedStaff += (S.cat.nv || 0) * CATEGORIES.nv.per;
    b.online += (S.cat.online || 0) * CATEGORIES.online.per;
    for (const eq of EQUIP) {
      const lv = equipLevel(eq.id);
      if (lv <= 0) continue;
      const v = eq.vals[Math.min(lv, eq.vals.length) - 1];
      if (eq.key === "brand") {
        b.tip += v;
        b.traffic += lv >= 2 ? lv === 2 ? 0.03 : 0.06 : 0;
      } else if (eq.key === "queue") b.queue += v;
      else if (eq.key === "tables") b.tables = 4 + v;
      else if (eq.key === "extraCust") b.extraCust += v;
      else if (eq.key === "tablets") {
      } else if (eq.key in b) b[eq.key] += v;
      if (eq.util) b.utility += eq.util[Math.min(lv, eq.util.length) - 1];
    }
    for (const st of STAFF) {
      if (!S.staff[st.id]) continue;
      if (st.kind === "marketing") b.traffic += st.fxTraffic;
      if (st.kind === "guard") {
        b.errReduce += st.fxErr;
        b.theft = 1;
      }
    }
    if (taxActive()) {
      b.traffic += TAX.traffic;
      b.speedStaff += TAX.speed;
      b.theft += TAX.theft;
      b.lucky += TAX.lucky;
    }
    if (S.social.ad && S.day <= S.social.ad.endsDay) b.traffic += ADS.find((a) => a.id === S.social.ad.id)?.traffic || 0;
    if (petActive()) {
      const fx = PETS[S.pet.kind]?.fx || {};
      b.bill += fx.bill || 0;
      b.tip += fx.tip || 0;
      b.patience += fx.patience || 0;
      b.branch += fx.branch || 0;
      if (S.petDecor.bien) b.tip += 0.1;
      if (S.petDecor.khan) {
        b.bill += 0.08;
        b.branch += 0.08;
      }
    }
    b.bill += S.crush.perm;
    b.bill += Math.min(0.2, Object.keys(S.collection.owned).length * 3e-3);
    const active = staffCount();
    b.traffic += Math.min(0.08, active * 0.01);
    return b;
  }
  function priceOf(id) {
    return S.prices[id] ?? ITEMS[id]?.price ?? 0;
  }
  function setPrice(id, v) {
    v = Math.round(v);
    if (id === "sizeL") v = clamp(v, 0, SIZE_L_CAP);
    else v = clamp(v, 0, 2e5);
    S.prices[id] = v;
    requestSave();
  }
  function priceLimit(id) {
    const k = id === "sizeL" ? "size" : ITEMS[id].kind;
    const m = safePrice() ? 1.5 : 1;
    if (k === "tea") return { warn: 5e4 * m, hard: 12e4 };
    if (k === "size") return { warn: 2e4 * m, hard: SIZE_L_CAP };
    return { warn: 2e4 * m, hard: 3e4 * m };
  }
  function priceFactor() {
    let f = 1;
    const teas = TEAS.filter((t) => S.onMenu[t]);
    for (const t of teas) if (priceOf(t) > priceLimit(t).warn) f = Math.min(f, 0.2);
    const m = safePrice() ? 1.5 : 1;
    const maxTea = teas.length ? Math.max(...teas.map(priceOf)) : 0;
    if (maxTea > 12e4 * m) f = Math.min(f, 0.4);
    const sens = bonus().priceSens;
    if (sens > 0) {
      const over = teas.length ? sum(teas, (t) => Math.max(0, priceOf(t) / ITEMS[t].price - 1)) / teas.length : 0;
      f *= 1 - clamp(over * sens * 4, 0, sens * 3);
    }
    return f;
  }
  function priceWeight(id) {
    const k = ITEMS[id].kind;
    if (k === "tea") return priceOf(id) > priceLimit(id).warn ? 0.2 : 1;
    const lim = priceLimit(id);
    const p = priceOf(id);
    if (p > lim.hard) return 0;
    if (p > lim.warn) return 0.2;
    return 1;
  }
  function sizeLWeight() {
    const p = priceOf("sizeL");
    const lim = priceLimit("sizeL");
    if (p > lim.hard) return 0;
    return p > lim.warn ? 0.1 : 1;
  }
  var lifeBonus = () => bonus().life;
  var stockQty = (id) => sum(S.stock[id] || [], (l) => l.q);
  function costOf(id) {
    const b = bonus();
    const it = ITEMS[id];
    let c = it.cost * (1 + b.ingCost);
    if (it.kind === "top") c *= 1 - b.topSave;
    return c;
  }
  function addStock(id, q) {
    const it = ITEMS[id];
    if (!it || q <= 0) return;
    const exp = it.life ? S.day + it.life - 1 + lifeBonus() : -1;
    let lot = S.stock[id].find((l) => l.exp === exp);
    if (lot) lot.q += q;
    else S.stock[id].push({ q, exp });
    S.stock[id].sort((a, b) => (a.exp === -1 ? 1e9 : a.exp) - (b.exp === -1 ? 1e9 : b.exp));
  }
  function take(id, n = 1) {
    if (stockQty(id) < n) return false;
    let left = n;
    for (const l of S.stock[id]) {
      const t = Math.min(l.q, left);
      l.q -= t;
      left -= t;
      if (left <= 0) break;
    }
    S.stock[id] = S.stock[id].filter((l) => l.q > 0);
    S.today.cogs += costOf(id) * n;
    S.lastUsed[id] = (S.lastUsed[id] || 0) + n;
    return true;
  }
  function expireStock() {
    let waste = 0;
    const list = [];
    for (const id of IDS) {
      const bad = S.stock[id].filter((l) => l.exp !== -1 && l.exp <= S.day);
      const q = sum(bad, (l) => l.q);
      if (q > 0) {
        waste += q * costOf(id);
        list.push({ id, q });
      }
      S.stock[id] = S.stock[id].filter((l) => !(l.exp !== -1 && l.exp <= S.day));
    }
    S.today.waste += waste;
    S.today.cogs += waste;
    return { waste, list };
  }
  function expiringToday(id) {
    return sum((S.stock[id] || []).filter((l) => l.exp !== -1 && l.exp <= S.day), (l) => l.q);
  }
  function nearestExpiry(id) {
    const lots = (S.stock[id] || []).filter((l) => l.exp !== -1);
    if (!lots.length) return null;
    return Math.min(...lots.map((l) => l.exp)) - S.day + 1;
  }
  var lifeDays = (id) => ITEMS[id].life ? ITEMS[id].life + lifeBonus() : 0;
  function unlockItem(id) {
    const it = ITEMS[id];
    if (!it || S.unlocked[id]) return "\u0110\xE3 m\u1EDF kh\xF3a";
    if (S.money < it.unlock) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n";
    S.money -= it.unlock;
    S.unlocked[id] = true;
    S.onMenu[id] = true;
    if (it.kind === "flavor") {
      addStock(id, FLAVOR_BOTTLE);
      S.today.purchase += it.unlock;
    }
    markDirty("hud", "panel", "board");
    emit("unlock", id);
    requestSave();
    return null;
  }
  function toggleMenu(id) {
    if (!S.unlocked[id]) return "Ch\u01B0a m\u1EDF kh\xF3a";
    S.onMenu[id] = !S.onMenu[id];
    markDirty("panel", "board");
    requestSave();
    return null;
  }
  var unitSize = (id) => ITEMS[id].kind === "flavor" ? FLAVOR_BOTTLE : 1;
  var unitCost = (id) => costOf(id) * unitSize(id);
  function planTotal() {
    return Math.round(sum(Object.entries(S.plan), ([id, n]) => unitCost(id) * n));
  }
  function setPlan(id, n) {
    n = clamp(n, 0, 999);
    if (n <= 0) delete S.plan[id];
    else S.plan[id] = n;
    markDirty("panel", "cta");
  }
  function commitPlan() {
    const total = planTotal();
    if (total <= 0) return "Ch\u01B0a ch\u1ECDn g\xEC \u0111\u1EC3 nh\u1EADp";
    if (S.money < total) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n nh\u1EADp h\xE0ng";
    S.money -= total;
    S.today.purchase += total;
    for (const [id, n] of Object.entries(S.plan)) addStock(id, n * unitSize(id));
    S.plan = {};
    markDirty("hud", "panel", "cta");
    emit("purchase", total);
    requestSave();
    return null;
  }
  function openMissing() {
    const miss = [];
    const teaOk = TEAS.some((t) => S.onMenu[t] && stockQty(t) > 0);
    const topOk = TOPS.some((t) => S.onMenu[t] && stockQty(t) > 0);
    const supOk = (stockQty("lyM") > 0 || stockQty("lyL") > 0) && stockQty("da") > 0 && stockQty("duong") > 0;
    if (!teaOk) miss.push("Tr\xE0");
    if (!topOk) miss.push("Topping");
    if (!supOk) miss.push("D\u1EE5ng c\u1EE5");
    return { miss, canOpen: teaOk && supOk };
  }
  function buyCategory(key) {
    const lvl = S.cat[key];
    const cost = catCost(lvl);
    if (S.money < cost) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n";
    S.money -= cost;
    S.cat[key]++;
    markDirty("hud", "panel");
    requestSave();
    return null;
  }
  function equipNext(id) {
    const eq = EQUIP.find((e) => e.id === id);
    const lv = equipLevel(id);
    if (lv >= eq.tiers.length) return null;
    return eq.tiers[lv];
  }
  function buyEquip(id) {
    const eq = EQUIP.find((e) => e.id === id);
    const next = equipNext(id);
    if (!next) return "\u0110\xE3 t\u1ED1i \u0111a";
    if (S.money < next.c) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n";
    S.money -= next.c;
    S.equip[id] = equipLevel(id) + 1;
    markDirty("hud", "panel");
    emit("equip", eq);
    requestSave();
    return null;
  }
  function buyDecor(id) {
    const d = PET_DECOR.find((x) => x.id === id);
    if (!d || S.petDecor[id]) return "\u0110\xE3 s\u1EDF h\u1EEFu";
    if (!S.pet) return "C\u1EA7n nh\u1EADn nu\xF4i th\xFA c\u01B0ng tr\u01B0\u1EDBc";
    if (S.money < d.cost) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n";
    S.money -= d.cost;
    S.petDecor[id] = 1;
    markDirty("hud", "panel");
    requestSave();
    return null;
  }
  function toggleApp(id) {
    const app = APPS.find((a) => a.id === id);
    if (!app) return "Kh\xF4ng c\xF3 app";
    if (S.apps[id]) {
      S.apps[id] = false;
      markDirty("panel");
      return null;
    }
    const pr = onlineProgress();
    if (pr.profit < ONLINE_GATE.profit || pr.orders < ONLINE_GATE.orders) return "Ch\u01B0a \u0111\u1EA1t \u0111i\u1EC1u ki\u1EC7n m\u1EDF b\xE1n online (l\u1EE3i nhu\u1EADn & s\u1ED1 \u0111\u01A1n)";
    if (S.rating < 4) return "C\u1EA7n \u0111\xE1nh gi\xE1 t\u1EEB 4,0\u2605 tr\u1EDF l\xEAn";
    if (appsOpen() >= tabletsOwned()) return "C\u1EA7n mua th\xEAm tablet (m\u1ED7i tablet ch\u1EA1y 1 app)";
    S.apps[id] = true;
    markDirty("panel");
    requestSave();
    return null;
  }
  function hireBlock(id) {
    const st = STAFF.find((s) => s.id === id);
    if (S.staff[id]) return "\u0110\xE3 thu\xEA";
    for (const ex of st.excl || []) if (S.staff[ex]) return `Kh\xF4ng th\u1EC3 thu\xEA c\xF9ng ${STAFF.find((s) => s.id === ex).role}`;
    for (const o of STAFF) if ((o.excl || []).includes(id) && S.staff[o.id]) return `Kh\xF4ng th\u1EC3 thu\xEA c\xF9ng ${o.role}`;
    const n = st.need;
    if (n?.day && S.day < n.day) return `M\u1EDF \u1EDF ng\xE0y ${n.day}`;
    if (n?.online && !onlineEnabled()) return "C\u1EA7n m\u1EDF \u0111\u01A1n online";
    if (n?.full && Object.keys(S.staff).length < 2) return "C\u1EA7n c\xF3 \u2265 2 nh\xE2n vi\xEAn";
    if (n?.secret && secretCount() < n.secret) return `C\u1EA7n m\u1EDF kho\xE1 ${n.secret} c\xF4ng th\u1EE9c \u0111\u1ED9c b\u1EA3n \u1EDF m\u1EE5c s\u01B0u t\u1EA7m`;
    return null;
  }
  function hire(id) {
    const st = STAFF.find((s) => s.id === id);
    const why = hireBlock(id);
    if (why) return why;
    if (S.money < st.hire) return "Kh\xF4ng \u0111\u1EE7 ti\u1EC1n";
    S.money -= st.hire;
    S.staff[id] = { since: S.day, shifts: 0 };
    markDirty("hud", "panel");
    emit("hire", st);
    requestSave();
    return null;
  }
  function fire(id) {
    delete S.staff[id];
    markDirty("panel");
    requestSave();
  }
  var staffWagePerDay = () => sum(STAFF.filter((s) => S.staff[s.id]), (s) => s.wage);
  function rentToday() {
    return Math.round(BASE_RENT * (1 + bonus().rent));
  }
  function utilityToday() {
    return Math.round(BASE_UTILITY * (1 + bonus().utility));
  }
  function expectedCustomers() {
    const b = bonus();
    const rating = 0.8 + clamp(S.rating, 1, 5) * 0.05;
    const base = 8 + 0.5 * Math.min(S.day, 60) + b.extraCust * 0.5;
    const wealth = 1 + clamp(Math.log10(Math.max(S.money, 1e3) / 1e3) * 0.12, 0, 0.6);
    const staffBoost = 1 + Math.min(0.9, staffCount() * 0.15);
    return Math.max(4, Math.round(base * (1 + b.traffic) * priceFactor() * rating * wealth * staffBoost));
  }
  function onlineProgress() {
    return { profit: sum(S.history, (x) => x.profit) + (S.today.profit || 0), orders: sum(S.history, (x) => x.cups) + S.today.cups, rating: S.rating };
  }
  var MAX_SECRET = SECRET_RECIPES.length;

  // js/sell.js
  var sell_exports = {};
  __export(sell_exports, {
    SH: () => SH,
    acceptOnline: () => acceptOnline,
    addFlavor: () => addFlavor,
    addTop: () => addTop,
    cleanTable: () => cleanTable,
    closeNow: () => closeNow,
    evaluate: () => evaluate,
    frontCustomer: () => frontCustomer,
    genPost: () => genPost,
    makeOrder: () => makeOrder,
    nextDay: () => nextDay,
    orderPrice: () => orderPrice,
    pickCup: () => pickCup,
    resetShiftRuntime: () => resetShiftRuntime,
    sealCup: () => sealCup,
    selectCustomer: () => selectCustomer,
    serve: () => serve,
    startPour: () => startPour,
    startShift: () => startShift,
    stopPour: () => stopPour,
    trashCup: () => trashCup,
    updateShift: () => updateShift
  });
  var SH = { on: false };
  function spawnPlan(n, total) {
    const seg = [[10, 11, 1], [11, 13, 1.7], [13, 17, 1], [17, 19, 1.7], [19, 22, 1.1]];
    const tot = sum(seg, (s) => (s[1] - s[0]) * s[2]);
    const hourAt = (q) => {
      let r = q * tot;
      for (const [a, b, w] of seg) {
        const m = (b - a) * w;
        if (r <= m) return a + r / w;
        r -= m;
      }
      return 22;
    };
    const times = [];
    const minGap = Math.max(5, total / Math.max(n, 1) * 0.35);
    for (let i = 0; i < n; i++) {
      const q = clamp((i + 0.5 + rand(-0.28, 0.28)) / n, 0, 0.999);
      let t = (hourAt(q) - 10) / 12 * total * 0.94 + 4;
      if (times.length && t - times[times.length - 1] < minGap) t = times[times.length - 1] + minGap;
      times.push(t);
    }
    return times;
  }
  function makeOrder() {
    const b = bonus();
    const w = weatherOf();
    const ev = eventOf();
    const tw = {};
    for (const t of TEAS) {
      if (!S.onMenu[t] || !S.unlocked[t]) continue;
      let x = priceWeight(t) * (stockQty(t) > 0 ? 1 : 0.2);
      const tp = ITEMS[t].temp;
      if ((w.coldBias || ev.coldBias) && tp === "cold") x *= 1.5;
      if (w.warmBias && tp === "warm") x *= 1.8;
      if (ev.hotItem === t) x *= 2;
      tw[t] = x;
    }
    const tea = wpick(tw) || TEAS.find((t) => S.onMenu[t]) || "traSua";
    const size = chance(0.3 * sizeLWeight() * (w.coldBias || ev.coldBias ? 1.5 : 1)) ? "L" : "M";
    let flavor = null;
    const fw = {};
    for (const f of FLAVORS) if (S.onMenu[f] && S.unlocked[f]) fw[f] = priceWeight(f) * (stockQty(f) > 0 ? 1 : 0.15);
    if (Object.keys(fw).length && chance(0.45)) flavor = wpick(fw) || null;
    const tw2 = {};
    for (const t of TOPS) if (S.onMenu[t] && S.unlocked[t]) tw2[t] = priceWeight(t) * (stockQty(t) > 0 ? 1 : 0.15);
    const nT = Math.min(Object.keys(tw2).length, +wpick({ 0: 20, 1: 45, 2: 25, 3: 8, 4: 2 }));
    const tops = [];
    const pool = { ...tw2 };
    for (let i = 0; i < nT; i++) {
      const t = wpick(pool);
      if (!t) break;
      tops.push(t);
      delete pool[t];
    }
    return { tea, size, flavor, tops };
  }
  function orderText(arch, o) {
    const drink = ITEMS[o.tea].name.toLowerCase() + (o.flavor ? ` v\u1ECB ${ITEMS[o.flavor].name.toLowerCase()}` : "");
    const tops = o.tops.length ? " v\u1EDBi " + o.tops.map((t) => ITEMS[t].name.toLowerCase()).join(" v\xE0 ") : "";
    return pick(arch.lines).replace("{drink}", drink).replace("{size}", "size " + o.size).replace("{tops}", tops);
  }
  function orderPrice(o) {
    return priceOf(o.tea) + (o.flavor ? priceOf(o.flavor) : 0) + sum(o.tops, (t) => priceOf(t)) + (o.size === "L" ? priceOf("sizeL") : 0);
  }
  var cid = 1;
  function newCustomer(opts = {}) {
    const b = bonus();
    const keys = {};
    for (const [k, a2] of Object.entries(ARCHETYPES)) {
      if (k === "reviewer" && !opts.reviewer) continue;
      keys[k] = a2.w * (eventOf().student && (k === "sinhVien" || k === "be") ? 2 : 1);
    }
    const key = opts.reviewer ? "reviewer" : wpick(keys);
    const a = ARCHETYPES[key];
    const order = makeOrder();
    const maxP = 62 * a.patience * (1 + b.patience) * (opts.online ? 1.2 : 1);
    return {
      id: cid++,
      key,
      tag: a.tag,
      avatar: pick(a.avatars),
      order,
      text: orderText(a, order),
      p: maxP,
      maxP,
      online: !!opts.online,
      app: opts.app || null,
      hard: a.hard + b.hardCust - b.badRev,
      born: SH.t
    };
  }
  function startShift() {
    if (SH.on) return "\u0110ang trong ca";
    const chk = openMissing();
    if (!chk.canOpen) return "Ch\u01B0a \u0111\u1EE7 nguy\xEAn li\u1EC7u \u0111\u1EC3 m\u1EDF c\u1EEDa";
    const total = S.settings.shiftMin * 60;
    const n = expectedCustomers();
    Object.assign(SH, {
      on: true,
      total,
      t: 0,
      hour: SHIFT_START_H,
      queue: [],
      sel: null,
      plan: spawnPlan(n, total),
      pi: 0,
      expected: n,
      served: 0,
      left: 0,
      rev: 0,
      tip: 0,
      board: null,
      onlineQ: [],
      onlineNext: rand(12, 25),
      tables: [],
      view: "counter",
      staffT: {},
      jobs: [],
      over: 0,
      fb: [],
      buyT: 0,
      fin: false,
      critic: eventOf().critic ? { at: total * rand(0.35, 0.6), done: false } : null,
      sat: 0,
      cupsDone: 0
    });
    if (S.settings.tut && S.settings.tut.sell === false) {
      const c = newCustomer();
      c.order.tops = [];
      c.order.flavor = null;
      c.text = orderText(ARCHETYPES[c.key], c.order);
      SH.queue.push(c);
      SH.pi = Math.min(SH.pi + 1, SH.plan.length);
    }
    const nt = bonus().tables;
    for (let i = 0; i < nt; i++) SH.tables.push({ s: "free", t: 0 });
    S.phase = "sell";
    S.started = true;
    markDirty("view", "hud");
    emit("shift:start");
    return null;
  }
  var frontCustomer = () => SH.queue.find((c) => c.id === SH.sel) || SH.queue[0] || null;
  function selectCustomer(id) {
    if (!SH.queue.some((c) => c.id === id)) return;
    SH.sel = id;
    emit("sel");
  }
  function removeCust(c) {
    SH.queue = SH.queue.filter((x) => x !== c);
    if (SH.sel === c.id) SH.sel = null;
    SH.jobs = SH.jobs.filter((j) => j.cid !== c.id);
    emit("queue");
  }
  function customerLeaves(c, why) {
    removeCust(c);
    SH.left++;
    S.today.left++;
    if (why === "patience") {
      const stars = chance(0.5) ? 1 : 2;
      pushReview(c, stars, "Ch\u1EDD l\xE2u qu\xE1 n\xEAn m\xECnh \u0111\xE0nh b\u1ECF v\u1EC1...");
      emit("left", c);
    }
  }
  var REV_TEXT = {
    5: ["Ly tr\xE0 chu\u1EA9n v\u1ECB lu\xF4n, nh\xE2n vi\xEAn d\u1EC5 th\u01B0\u01A1ng, s\u1EBD quay l\u1EA1i nh\xE9!", "Pha nhanh, \u0111\xFAng order t\u1EEBng ch\xFAt m\u1ED9t. 10 \u0111i\u1EC3m!", "Qu\xE1n xinh, tr\xE0 ngon, topping t\u01B0\u01A1i. Ch\u1EA5m 5 sao!"],
    4: ["Tr\xE0 ngon, ch\u1EDD h\u01A1i l\xE2u m\u1ED9t ch\xFAt nh\u01B0ng x\u1EE9ng \u0111\xE1ng.", "\u1ED4n \xE1p, l\u1EA7n sau m\xECnh s\u1EBD gh\xE9 ti\u1EBFp.", "Ly \u0111\u1EB9p, v\u1ECB \u1ED5n, gi\xE1 h\u1EE3p l\xFD."],
    3: ["T\u1EA1m \u0111\u01B0\u1EE3c, mong l\u1EA7n sau chu\u1EA9n v\u1ECB h\u01A1n.", "H\u01A1i nh\u1EA1t so v\u1EDBi mong \u0111\u1EE3i, ly c\u0169ng ch\u01B0a \u0111\u1EA7y.", "B\xECnh th\u01B0\u1EDDng, kh\xF4ng c\xF3 g\xEC \u0111\u1EB7c bi\u1EC7t."],
    2: ["Ly b\u1ECB sai so v\u1EDBi order c\u1EE7a m\xECnh r\u1ED3i \u{1F615}", "Ch\u1EDD kh\xE1 l\xE2u m\xE0 ly l\u1EA1i sai topping.", "H\u01A1i th\u1EA5t v\u1ECDng, qu\xE1n c\u1EA7n c\u1EA9n th\u1EADn h\u01A1n."],
    1: ["Sai h\u1EB3n m\xF3n m\xECnh g\u1ECDi, bu\u1ED3n gh\xEA.", "Ch\u1EDD m\xE3i kh\xF4ng t\u1EDBi l\u01B0\u1EE3t, m\xECnh v\u1EC1 \u0111\xE2y.", "Tr\u1EA3i nghi\u1EC7m t\u1EC7, mong qu\xE1n r\xFAt kinh nghi\u1EC7m."]
  };
  function pushReview(c, stars, text) {
    const weight = c.key === "reviewer" ? 3 : 1;
    for (let i = 0; i < weight; i++) {
      S.reviews.unshift({ stars, name: c.tag, av: c.avatar, text: text || pick(REV_TEXT[stars]), day: S.day });
    }
    if (S.reviews.length > 200) S.reviews.length = 200;
    S.ratingCount += 1;
    S.rating = clamp((40 + sum(S.reviews, (r) => r.stars)) / (10 + S.reviews.length), 1, 5);
    S.today.stars.push(stars);
    markDirty("hud");
  }
  function pickCup(size) {
    if (!SH.on) return "Ch\u01B0a m\u1EDF c\u1EEDa";
    if (SH.board) return "\u0110ang c\xF3 ly tr\xEAn th\u1EDBt";
    const cupId = size === "L" ? "lyL" : "lyM";
    if (stockQty(cupId) < 1) return `H\u1EBFt ly size ${size === "L" ? "L" : "M"} r\u1ED3i!`;
    take(cupId, 1);
    SH.board = { size, tea: null, fill: 0, flavor: null, tops: [], phase: "cup", sealT: 0, pouring: false, spill: 0, auto: null };
    const staffPour = STAFF.filter((s) => S.staff[s.id] && (s.kind === "pour" || s.kind === "manager"));
    if (staffPour.length) {
      const c = frontCustomer();
      if (c) SH.board.auto = { cid: c.id, t: 1.1, topsLeft: staffPour.some((s) => s.kind === "manager") ? [...c.order.tops] : [], st: staffPour[0] };
    }
    emit("cup:pick", size);
    return null;
  }
  function startPour(tea) {
    const b = SH.board;
    if (!b || b.phase !== "cup") return "H\xE3y l\u1EA5y ly tr\u01B0\u1EDBc";
    if (b.tea && b.tea !== tea) return "Ly \u0111\xE3 r\xF3t lo\u1EA1i tr\xE0 kh\xE1c";
    if (b.fill >= 1.25) return "Ly \u0111\u1EA7y r\u1ED3i";
    if (!b.tea) {
      if (stockQty(tea) < 1) return `H\u1EBFt ${ITEMS[tea].name}!`;
      take(tea, 1);
      b.tea = tea;
    }
    b.pouring = true;
    emit("pour:start", tea);
    return null;
  }
  function stopPour() {
    const b = SH.board;
    if (!b || !b.pouring) return;
    b.pouring = false;
    emit("pour:stop");
  }
  function addFlavor(id) {
    const b = SH.board;
    if (!b || b.phase !== "cup") return "H\xE3y l\u1EA5y ly tr\u01B0\u1EDBc";
    if (b.flavor) return "Ly \u0111\xE3 c\xF3 h\u01B0\u01A1ng";
    if (stockQty(id) < 1) return `H\u1EBFt ${ITEMS[id].name}!`;
    take(id, 1);
    b.flavor = id;
    emit("flavor", id);
    return null;
  }
  function addTop(id) {
    const b = SH.board;
    if (!b || b.phase !== "cup") return "H\xE3y l\u1EA5y ly tr\u01B0\u1EDBc";
    if (b.tops.includes(id)) return "Ly \u0111\xE3 c\xF3 topping n\xE0y";
    if (b.tops.length >= 4) return "T\u1ED1i \u0111a 4 topping";
    if (stockQty(id) < 1) return `H\u1EBFt ${ITEMS[id].name}!`;
    take(id, 1);
    b.tops.push(id);
    emit("top", id);
    return null;
  }
  function sealCup() {
    const b = SH.board;
    if (!b || b.phase !== "cup") return "Ch\u01B0a c\xF3 ly \u0111\u1EC3 \u0111\xF3ng n\u1EAFp";
    if (!b.tea || b.fill < 0.2) return "Ly ch\u01B0a c\xF3 tr\xE0";
    if (b.pouring) stopPour();
    if (stockQty("da") > 0) take("da", 1);
    if (stockQty("duong") > 0) take("duong", 1);
    b.phase = "sealing";
    b.sealT = 1.2 * (1 - bonus().seal);
    b.sealMax = b.sealT;
    emit("seal:start");
    return null;
  }
  function trashCup() {
    if (!SH.board) return;
    SH.board = null;
    S.today.waste += 3e3;
    emit("trash");
  }
  function evaluate(board, c) {
    const o = c.order;
    const issues = [];
    let stars = 5;
    if (board.tea !== o.tea) {
      stars -= 3;
      issues.push("sai lo\u1EA1i tr\xE0");
    }
    if (board.size !== o.size) {
      stars -= 2;
      issues.push("sai size");
    }
    if ((board.flavor || null) !== (o.flavor || null)) {
      stars -= 1;
      issues.push(board.flavor ? "th\u1EEBa/sai h\u01B0\u01A1ng" : "thi\u1EBFu h\u01B0\u01A1ng");
    }
    const miss = o.tops.filter((t) => !board.tops.includes(t)).length;
    const extra = board.tops.filter((t) => !o.tops.includes(t)).length;
    if (miss + extra) {
      stars -= Math.min(2, miss + extra);
      issues.push("sai topping");
    }
    if (board.fill < 0.75) {
      stars -= 1;
      issues.push("ly l\u01B0ng");
    }
    if (board.spill > 0) {
      stars -= 1;
      issues.push("r\xF3t tr\xE0n");
    }
    if (c.p / c.maxP < 0.2) {
      stars -= 1;
      issues.push("ch\u1EDD l\xE2u");
    }
    if (stars >= 4 && chance(clamp(c.hard * 0.5, 0, 0.5))) {
      stars -= 1;
      issues.push("kh\xE1ch kh\xF3 t\xEDnh");
    }
    return { stars: clamp(stars, 1, 5), issues };
  }
  var PAY = { 1: 0.3, 2: 0.55, 3: 0.8, 4: 1, 5: 1 };
  function serve(forced) {
    const b = SH.board;
    const c = forced?.c || frontCustomer();
    if (!c) return "Ch\u01B0a c\xF3 kh\xE1ch";
    const board = forced?.board || b;
    if (!board || board.phase !== "ready" && !forced) return "Ly ch\u01B0a \u0111\xF3ng n\u1EAFp xong";
    const ev = evaluate(board, c);
    const res = settle(c, board, ev.stars, ev.issues, !!forced);
    if (!forced) SH.board = null;
    return res;
  }
  function settle(c, board, stars, issues, byStaff) {
    const bn = bonus();
    const unit = priceOf(board.tea) + (board.flavor ? priceOf(board.flavor) : 0) + sum(board.tops, (t) => priceOf(t)) + (board.size === "L" ? priceOf("sizeL") : 0);
    const arch = ARCHETYPES[c.key];
    let bill = unit * PAY[stars] * arch.bill * (1 + bn.bill + (bn.billTeas[board.tea] || 0));
    if (SH.hour >= 20) bill *= 1 + bn.lateBill;
    if (c.online) bill *= 1.15;
    let luck = false;
    if (chance(0.015 + bn.lucky * 0.1)) {
      bill *= 2;
      luck = true;
    }
    let tip = 0;
    if (stars >= 4) {
      const coldPen = ITEMS[board.tea].temp === "cold" ? bn.coldTip : 0;
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
    SH.rev += pay + tip;
    SH.tip += tip;
    SH.served++;
    SH.cupsDone++;
    pushReview(c, stars, null);
    S.followers += Math.round((stars >= 4 ? 3 : 0) + equipLevel("qcMxh") * 2);
    removeCust(c);
    let seat = null;
    if (!c.online && !byStaff && chance(0.4)) {
      const free = SH.tables.findIndex((t) => t.s === "free");
      if (free >= 0) {
        SH.tables[free] = { s: "busy", t: rand(16, 28), av: c.avatar };
        seat = free;
        const extra = Math.round(bill * 0.1);
        S.money += extra;
        S.today.rev += extra;
        SH.rev += extra;
      }
    }
    const out = { stars, pay, tip, issues, luck, seat, cust: c, byStaff };
    emit("served", out);
    markDirty("hud");
    requestSave();
    return out;
  }
  function cleanTable(i) {
    const t = SH.tables[i];
    if (!t || t.s !== "dirty") return false;
    SH.tables[i] = { s: "free", t: 0 };
    const tip = randInt(1, 3) * 1e3;
    S.money += tip;
    S.today.tips += tip;
    SH.tip += tip;
    SH.rev += tip;
    emit("table:clean", { i, tip });
    markDirty("hud");
    return true;
  }
  function spawnOnline() {
    const open = APPS.filter((a) => S.apps[a.id]);
    if (!open.length) return;
    SH.onlineQ.push({ id: cid++, app: pick(open), exp: 22, o: makeOrder() });
    emit("online:new");
  }
  function acceptOnline(id) {
    const q = SH.onlineQ.find((x) => x.id === id);
    if (!q) return "\u0110\u01A1n \u0111\xE3 h\u1EBFt h\u1EA1n";
    if (SH.queue.length >= bonus().queue + 2) return "H\xE0ng ch\u1EDD \u0111\xE3 \u0111\u1EA7y";
    SH.onlineQ = SH.onlineQ.filter((x) => x !== q);
    const c = newCustomer({ online: true, app: q.app });
    c.order = q.o;
    c.avatar = "\u{1F4F1}";
    c.tag = `\u{1F4F1} ${q.app.name}`;
    c.text = `\u0110\u01A1n ${q.app.name}: ${ITEMS[q.o.tea].name} size ${q.o.size}${q.o.flavor ? " v\u1ECB " + ITEMS[q.o.flavor].name.toLowerCase() : ""}${q.o.tops.length ? " + " + q.o.tops.map((t) => ITEMS[t].name.toLowerCase()).join(", ") : ""}. Giao nhanh gi\xFAp nh\xE9!`;
    SH.queue.push(c);
    emit("queue");
    return null;
  }
  function staffStep(dt) {
    const b = bonus();
    const speedMul = 1 / (1 + b.speedStaff) * (S.staff.meKetTinh ? 0.8 : 1);
    for (const st of STAFF) {
      if (!S.staff[st.id]) continue;
      if (st.kind === "auto" || st.kind === "online") {
        const key = st.id;
        const busy = SH.jobs.find((j) => j.by === key);
        if (busy) {
          busy.t -= dt;
          if (busy.t <= 0) {
            finishJob(busy, st, b);
            SH.jobs = SH.jobs.filter((j) => j !== busy);
          }
          continue;
        }
        const free = SH.queue.filter((c) => !SH.jobs.some((j) => j.cid === c.id));
        const front = frontCustomer();
        let cand = null;
        if (st.kind === "online") cand = free.find((c) => c.online);
        else if (SH.queue.length >= (st.minQueue || 1)) cand = free.filter((c) => !c.online && !(SH.board && c === front)).sort((x, y) => x.p - y.p)[0];
        if (cand) {
          const need = needs(cand.order);
          if (!canTake(need)) continue;
          SH.jobs.push({ by: key, cid: cand.id, t: st.sec * speedMul });
          for (const [id, n] of need) take(id, n);
        }
      } else if (st.kind === "buyer") {
        SH.buyT += dt;
        if (SH.buyT >= 4) {
          SH.buyT = 0;
          const want = [...TEAS.filter((t) => S.onMenu[t]), ...TOPS.filter((t) => S.onMenu[t]), "lyM", "lyL", "da", "duong"];
          for (const id of want) {
            if (stockQty(id) === 0) {
              const q = 8, cost = Math.round(unitCost(id) * q * 1.1);
              if (S.money >= cost) {
                S.money -= cost;
                S.today.purchase += cost;
                addStock(id, q);
                emit("buyer", id);
                markDirty("hud");
                break;
              }
            }
          }
        }
      }
    }
  }
  var needs = (o) => [[o.size === "L" ? "lyL" : "lyM", 1], [o.tea, 1], ...o.flavor ? [[o.flavor, 1]] : [], ...o.tops.map((t) => [t, 1]), ["da", 1], ["duong", 1]];
  var canTake = (list) => list.every(([id, n]) => stockQty(id) >= n);
  function finishJob(job, st, b) {
    const c = SH.queue.find((x) => x.id === job.cid);
    if (!c) return;
    const err = clamp(st.err * (1 - b.errReduce), 0, 1);
    const board = { tea: c.order.tea, size: c.order.size, flavor: c.order.flavor, tops: [...c.order.tops], fill: 1, spill: 0, phase: "ready" };
    let forceStars = null;
    if (chance(err)) {
      board.size = board.size === "M" ? "L" : "M";
      forceStars = 3;
    }
    serveStaff(c, board, forceStars);
  }
  function serveStaff(c, board, forceStars) {
    const ev = evaluate(board, c);
    settle(c, board, forceStars ? Math.min(forceStars, ev.stars) : Math.min(ev.stars, 5), ev.issues, true);
  }
  function updateShift(dt) {
    if (!SH.on || S.phase !== "sell") return;
    SH.t += dt;
    SH.hour = SHIFT_START_H + Math.min(SH.t, SH.total) / SH.total * (SHIFT_END_H - SHIFT_START_H);
    const b = bonus();
    const maxQ = b.queue;
    while (SH.pi < SH.plan.length && SH.t >= SH.plan[SH.pi] && SH.t < SH.total) {
      SH.pi++;
      if (SH.queue.length >= maxQ) {
        SH.left++;
        S.today.left++;
        emit("balk");
        continue;
      }
      SH.queue.push(newCustomer());
      emit("queue");
      emit("ding");
    }
    if (SH.critic && !SH.critic.done && SH.t >= SH.critic.at && SH.queue.length < maxQ) {
      SH.critic.done = true;
      SH.queue.push(newCustomer({ reviewer: true }));
      emit("queue");
    }
    if (S.settings && onlineEnabled() && SH.t < SH.total * 0.95) {
      SH.onlineNext -= dt;
      if (SH.onlineNext <= 0) {
        SH.onlineNext = rand(16, 34) / Math.max(0.3, 1 + b.online);
        spawnOnline();
      }
    }
    for (const q of SH.onlineQ) q.exp -= dt;
    const before = SH.onlineQ.length;
    SH.onlineQ = SH.onlineQ.filter((q) => q.exp > 0);
    if (before !== SH.onlineQ.length) emit("online:new");
    for (const c of [...SH.queue]) {
      if (SH.jobs.some((j) => j.cid === c.id)) {
        c.p -= dt * 0.4;
      } else c.p -= dt;
      if (c.p <= 0) customerLeaves(c, "patience");
    }
    const bd = SH.board;
    if (bd) {
      if (bd.pouring) {
        const rate = 0.55 * (1 + b.pour + b.speedStaff);
        bd.fill += rate * dt;
        if (bd.fill > 1) {
          bd.spill += (bd.fill - 1) * 0.5;
        }
        if (bd.fill >= 1.25) {
          bd.fill = 1.25;
          bd.pouring = false;
          emit("pour:stop");
        }
      }
      if (bd.phase === "sealing") {
        bd.sealT -= dt;
        if (bd.sealT <= 0) {
          bd.phase = "ready";
          emit("seal:done");
        }
      }
      if (bd.auto) {
        const a = bd.auto;
        a.t -= dt;
        const c = SH.queue.find((x) => x.id === a.cid);
        if (!c) bd.auto = null;
        else if (a.t <= 0) {
          if (!bd.tea && stockQty(c.order.tea) > 0) {
            take(c.order.tea, 1);
            bd.tea = c.order.tea;
            const error = chance(a.st.err * (1 - b.errReduce));
            bd.fill = error ? 0.6 : 0.95;
            if (c.order.flavor && stockQty(c.order.flavor) > 0 && !bd.flavor) {
              take(c.order.flavor, 1);
              bd.flavor = c.order.flavor;
            }
            emit("auto:pour");
            a.t = 0.7;
          } else if (a.topsLeft.length) {
            const t = a.topsLeft.shift();
            if (stockQty(t) > 0 && !bd.tops.includes(t)) {
              take(t, 1);
              bd.tops.push(t);
              emit("top", t);
            }
            a.t = 0.5;
          } else bd.auto = null;
        }
      }
    }
    for (let i = 0; i < SH.tables.length; i++) {
      const t = SH.tables[i];
      if (t.s === "busy") {
        t.t -= dt;
        if (t.t <= 0) {
          SH.tables[i] = { s: "dirty", t: 0 };
          emit("tables");
        }
      }
    }
    staffStep(dt);
    if (SH.t >= SH.total) {
      SH.over += dt;
      if (SH.queue.length === 0 || SH.over > 22) finishShift(false);
    }
  }
  function closeNow() {
    if (!SH.on) return;
    SH.queue.forEach((c) => {
      SH.left++;
      S.today.left++;
    });
    SH.queue = [];
    finishShift(true);
  }
  function branchDaily() {
    const bn = bonus();
    let net = 0, rev = 0;
    for (const [id, br] of Object.entries(S.branches)) {
      const def = BRANCHES.find((x) => x.id === id);
      if (!def) continue;
      const adB = S.social.ad && S.day <= S.social.ad.endsDay ? ADS.find((a) => a.id === S.social.ad.id).branch : 0;
      const r = rand(def.rev[0], def.rev[1]) * (0.8 + S.rating * 0.05) * (1 + bn.branch + adB) * (1 + 0.1 * (br.staff || 0));
      const ing = r * rand(def.ing[0], def.ing[1]);
      const wage = (br.staff || 0) * 15e4;
      const p = r - ing - wage - def.rent;
      br.profit = p;
      br.rev = (br.rev || 0) + r;
      br.days = (br.days || 0) + 1;
      br.last = { r, ing, wage, rent: def.rent, p };
      net += p;
      rev += r;
    }
    return { net, rev };
  }
  function franchiseDaily() {
    const n = S.franchise.count;
    if (!n) return 0;
    const bn = bonus();
    return Math.round(sum(Array.from({ length: n }), () => rand(FRANCHISE.revRange[0], FRANCHISE.revRange[1]) * FRANCHISE.royalty * (1 + bn.branch)));
  }
  function finishShift(early) {
    if (SH.fin) return;
    SH.fin = true;
    SH.on = false;
    const T = S.today;
    const ex = expireStock();
    T.rent = rentToday();
    T.util = utilityToday();
    T.wage = staffWagePerDay() + (S.staff.chuBa ? Math.round(T.rev * 0.01) : 0);
    const br = branchDaily();
    T.branch = Math.round(br.net);
    T.fran = franchiseDaily();
    let interest = 0;
    if (S.bank.balance > 0) {
      interest = Math.round(S.bank.balance * BANK.interest * (S.rating >= 4.5 ? 1 + BANK.starBonus : 1));
      S.bank.balance = Math.min(BANK.max, S.bank.balance + interest);
      S.bank.shifts++;
    }
    T.interest = interest;
    S.money = Math.max(0, S.money - T.rent - T.util - T.wage + T.branch + T.fran);
    T.profit = T.rev + T.tips - T.cogs - T.rent - T.util - T.wage - T.tax + T.branch + T.fran + T.interest;
    T.avgStars = T.stars.length ? sum(T.stars) / T.stars.length : 0;
    T.expired = ex.list;
    T.cash = S.money;
    T.event = S.eventId;
    T.weather = S.weather;
    S.history.push({ day: S.day, rev: T.rev + T.tips, cogs: T.cogs, rent: T.rent, util: T.util, wage: T.wage, tax: T.tax, branch: T.branch, fran: T.fran, interest, profit: T.profit, cups: T.cups, left: T.left, stars: T.avgStars, online: T.online, event: S.eventId });
    if (S.history.length > 400) S.history.shift();
    S.kpi.shifts++;
    for (const k of Object.keys(S.staff)) S.staff[k].shifts = (S.staff[k].shifts || 0) + 1;
    S.phase = "end";
    S.last = { early };
    saveBackup();
    saveGame();
    markDirty("view", "hud");
    emit("shift:end", T);
  }
  function nextDay() {
    S.day++;
    ensureForecast();
    S.eventId = pickEvent();
    S.today = freshToday();
    S.lastUsed = {};
    S.social.videosToday = 0;
    S.pearl.playsDay = 0;
    S.crush.playedToday = false;
    const g = S.garden;
    for (const p of g.plots) if (p.seed) {
      if (g.watered) p.grown++;
    }
    g.watered = false;
    if (S.pet) {
      const decay = (k, v) => Math.max(0, S.pet[k] - v);
      const d = (id, f) => S.petDecor[id] ? f : 1;
      S.pet.hunger = decay("hunger", 25 * d("bat", 0.8));
      S.pet.joy = decay("joy", 15 * d("xit", 0.75));
      S.pet.clean = decay("clean", 12 * d("say", 0.75));
      S.pet.energy = decay("energy", 20 * d("sofa", 0.75));
    }
    if (S.kpi.shifts >= 7) {
      S.kpi.shifts = 0;
      emit("kpi:cycle");
    }
    S.phase = "home";
    S.plan = {};
    Object.assign(SH, { on: false, fin: false });
    markDirty("view", "hud", "panel", "cta");
    emit("day:next");
    saveGame();
  }
  function resetShiftRuntime() {
    Object.assign(SH, { on: false, fin: false });
  }
  function genPost() {
    const t = pick(FEED_POSTS), a = pick(FEED_AUTHORS);
    return { ...t, author: a, day: S.day, views: randInt(20, 180) + "K", likes: randInt(2, 20) + "K" };
  }

  // js/icons.js
  var P = {
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    pause: '<rect x="6.5" y="5" width="4" height="14" rx="1"/><rect x="13.5" y="5" width="4" height="14" rx="1"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    book: '<path d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5V18c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5z"/><path d="M12 6v12.5"/>',
    branch: '<path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/>',
    collect: '<rect x="8" y="3" width="12" height="15" rx="2.2"/><path d="M4.5 7.5V19a2 2 0 0 0 2 2H16"/><path d="M14 8.2l1.1 2.2 2.4.35-1.75 1.7.42 2.4L14 13.7l-2.17 1.15.42-2.4-1.75-1.7 2.4-.35z"/>',
    tiem: '<g fill="currentColor" fill-opacity=".16" stroke="none"><path d="M5 5h14l1.5 5.5H3.5z"/><path d="M5.5 13h13v7h-13z"/></g><path d="M3.5 10.5L5 5h14l1.5 5.5"/><path d="M3.5 10.5a2.8 2.8 0 0 0 5.5 0 2.8 2.8 0 0 0 6 0 2.8 2.8 0 0 0 5.5 0"/><path d="M5.5 13v7h13v-7"/><path d="M10 20v-4.5h4V20"/>',
    kho: '<g fill="currentColor" fill-opacity=".16" stroke="none"><path d="M3.5 7.5L12 3.5l8.5 4L12 11.5z"/><path d="M12 11.5l8.5-4v9L12 20.5z" fill-opacity=".3"/></g><path d="M3.5 7.5L12 3.5l8.5 4v9L12 20.5l-8.5-4z"/><path d="M3.5 7.5L12 11.5l8.5-4M12 11.5v9"/><path d="M7.7 5.6l8.5 4"/>',
    phattrien: '<g fill="currentColor" fill-opacity=".16" stroke="none"><rect x="4" y="12" width="3.6" height="8" rx="1"/><rect x="10.2" y="7.5" width="3.6" height="12.5" rx="1"/><rect x="16.4" y="14" width="3.6" height="6" rx="1"/></g><path d="M4 20.5h16"/><path d="M4.5 9l4.5-4 3.5 2.5L19 3.5"/><path d="M15 3.5h4v4"/>',
    xahoi: '<g fill="currentColor" fill-opacity=".16" stroke="none"><circle cx="9" cy="8.5" r="3.2"/><circle cx="17.5" cy="9.5" r="2.5"/></g><circle cx="9" cy="8.5" r="3.2"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17.5" cy="9.5" r="2.5"/><path d="M17.5 14.5c2.4 0 3.8 1.7 3.8 4"/>',
    them: '<g fill="currentColor" fill-opacity=".16" stroke="none"><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/></g><rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z"/>'
  };
  function icon(name, size = 22, cls = "") {
    return `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ""}</svg>`;
  }

  // js/ui.js
  function bindActions(root2, map) {
    root2.addEventListener("click", (e) => {
      const t = e.target.closest("[data-act]");
      if (!t || !root2.contains(t) || t.disabled) return;
      const fn = map[t.dataset.act];
      if (fn) {
        sfx("click");
        fn(t, e);
      }
    });
  }
  function toast(msg, type = "", dur = 2300) {
    const root2 = $("#toasts");
    if (!root2) return;
    const t = h(`<div class="toast ${type}">${esc(msg)}</div>`);
    root2.appendChild(t);
    while (root2.children.length > 3) root2.firstElementChild.remove();
    setTimeout(() => {
      t.classList.add("out");
      setTimeout(() => t.remove(), 260);
    }, dur);
  }
  var centerOf = (t) => {
    if (!t) return { x: innerWidth / 2, y: innerHeight / 2 };
    if (typeof t.x === "number") return t;
    const r = t.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  };
  function fxText(text, target, cls = "") {
    const { x, y } = centerOf(target);
    const f = h(`<div class="fx-float ${cls}" style="left:${x}px;top:${y}px">${esc(text)}</div>`);
    $("#fx").appendChild(f);
    setTimeout(() => f.remove(), 1e3);
  }
  function fxCoins(target, n = 5) {
    const from = centerOf(target);
    const to = centerOf($("[data-money]"));
    for (let i = 0; i < n; i++) {
      const sx = from.x + rand(-18, 18), sy = from.y + rand(-8, 8);
      const c = h(`<div class="fx-coin" style="left:${sx}px;top:${sy}px;--dx:${to.x - sx}px;--dy:${to.y - sy}px;animation-delay:${i * 45}ms">\u{1FA99}</div>`);
      $("#fx").appendChild(c);
      setTimeout(() => c.remove(), 950 + i * 45);
    }
  }
  function fxSpark(target, n = 8) {
    const { x, y } = centerOf(target);
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2, d = rand(24, 56);
      const s = h(`<div class="fx-spark" style="left:${x}px;top:${y}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px">\u2728</div>`);
      $("#fx").appendChild(s);
      setTimeout(() => s.remove(), 760);
    }
  }
  var stack = [];
  function openModal({ html: body, cls = "", title = "", onClose = null, closable = true, id = "" }) {
    if (id) {
      const ex = stack.find((m2) => m2.id === id);
      if (ex) {
        ex.body.innerHTML = body;
        return ex;
      }
    }
    const back = h(`<div class="modal-back"><div class="modal ${cls}" role="dialog" aria-modal="true" aria-label="${esc(title)}">
    ${closable ? '<button class="modal-x" data-modal-x aria-label="\u0110\xF3ng">\u2715</button>' : ""}<div class="modal-body"></div></div></div>`);
    const bodyEl = $(".modal-body", back);
    bodyEl.innerHTML = body;
    $("#modal").appendChild(back);
    const m = { id, el: back, body: bodyEl, close };
    function close() {
      const i = stack.indexOf(m);
      if (i < 0) return;
      stack.splice(i, 1);
      back.remove();
      if (!stack.length) $("#modal").classList.remove("on");
      onClose?.();
    }
    const sheet = $(".modal", back);
    let dragY = null;
    sheet.addEventListener("touchstart", (e) => {
      const r = sheet.getBoundingClientRect();
      dragY = e.touches[0].clientY - r.top < 34 ? e.touches[0].clientY : null;
    }, { passive: true });
    sheet.addEventListener("touchmove", (e) => {
      if (dragY == null) return;
      const dy = Math.max(0, e.touches[0].clientY - dragY);
      sheet.style.transform = `translateY(${dy}px)`;
    }, { passive: true });
    sheet.addEventListener("touchend", (e) => {
      if (dragY == null) return;
      const dy = e.changedTouches[0].clientY - dragY;
      dragY = null;
      if (dy > 90 && closable) close();
      else sheet.style.transform = "";
    });
    $("[data-modal-x]", back)?.addEventListener("click", () => {
      sfx("click");
      close();
    });
    back.addEventListener("click", (e) => {
      if (e.target === back && closable) close();
    });
    stack.push(m);
    $("#modal").classList.add("on");
    return m;
  }
  var closeAllModals = () => {
    while (stack.length) stack[stack.length - 1].close();
  };
  var isModalOpen = (id) => id ? stack.some((m) => m.id === id) : stack.length > 0;
  function confirmBox(title, msg, onYes, yes = "\u0110\u1ED3ng \xFD", danger = false) {
    const m = openModal({ html: `<h3 class="m-title">${esc(title)}</h3><p class="m-text">${msg}</p>
    <div class="m-row"><button class="btn ghost" data-act="no">H\u1EE7y</button><button class="btn ${danger ? "danger" : "pri"}" data-act="yes">${esc(yes)}</button></div>`, cls: "small" });
    bindActions(m.body, { no: () => m.close(), yes: () => {
      m.close();
      onYes();
    } });
    return m;
  }
  function alertBox(title, body, btn = "\u0110\xE3 hi\u1EC3u") {
    const m = openModal({ html: `<h3 class="m-title">${title}</h3><div class="m-text">${body}</div><button class="btn pri block" data-act="ok">${esc(btn)}</button>`, cls: "small" });
    bindActions(m.body, { ok: () => m.close() });
    return m;
  }
  function logoHTML(size = 56, cls = "") {
    const l = S.logo;
    const inner = l.img ? `<img src="${l.img}" alt="Logo qu\xE1n" />` : `<span>${l.emoji}</span>`;
    return `<span class="logo-c ${cls}" style="--sz:${size}px">${inner}</span>`;
  }
  var HAPTIC_NAMES = ["T\u1EAFt", "Nh\u1EB9", "V\u1EEBa", "M\u1EA1nh"];
  var THEME_DARK = { "--text": "#f1ebff", "--muted": "#b8aedc", "--brown": "#e8dfff", "--brown2": "#b8aedc", "--card2": "#453d66", "--line": "rgba(255,255,255,.14)" };
  function applyTheme() {
    const k = THEMES[S.settings.theme] ? S.settings.theme : "cream";
    const t = THEMES[k], st = document.documentElement.style;
    document.documentElement.dataset.theme = k;
    document.documentElement.dataset.season = S.season || "spring";
    st.setProperty("--bg", t.bg);
    st.setProperty("--paper", t.bg);
    st.setProperty("--card", t.card);
    st.setProperty("--pink", t.accent);
    st.setProperty("--pink2", t.accent2);
    st.setProperty("--pink-soft", t.soft);
    for (const [n, v] of Object.entries(THEME_DARK)) {
      if (t.dark) st.setProperty(n, v);
      else st.removeProperty(n);
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", t.bg);
  }
  function openChoice(title, opts, cur2, onPick) {
    const m = openModal({ cls: "small", html: `<h3 class="m-title">${title}</h3><div class="choice-list">${opts.map(([v, label], i) => `<button class="choice ${v === cur2 ? "on" : ""}" data-act="pick" data-i="${i}"><span>${label}</span><i>${v === cur2 ? "\u2713" : ""}</i></button>`).join("")}</div><button class="btn block" data-act="x">\u0110\xF3ng</button>` });
    bindActions(m.body, { pick: (t) => {
      onPick(opts[+t.dataset.i][0]);
      m.close();
    }, x: () => m.close() });
  }
  function openThemePicker(onDone) {
    const sw = (id, t) => `<button class="thm-it ${S.settings.theme === id ? "on" : ""}" data-act="pick" data-k="${id}"><i style="background:linear-gradient(135deg, ${t.bg} 50%, ${t.accent} 50%)"></i><b>${t.name}</b></button>`;
    const m = openModal({ cls: "small", html: `<h3 class="m-title">M\xE0u giao di\u1EC7n</h3><p class="m-text center">Ch\u1ECDn m\xE0u b\u1EA1n th\xEDch, \u0111\u1ED5i l\xFAc n\xE0o c\u0169ng \u0111\u01B0\u1EE3c.</p>
    <div class="thm-grid">${Object.entries(THEMES).map(([id, t]) => sw(id, t)).join("")}</div><button class="btn pri block" data-act="done">Xong</button>` });
    bindActions(m.body, {
      pick: (t) => {
        S.settings.theme = t.dataset.k;
        applyTheme();
        requestSave();
        for (const el of $$(".thm-it", m.body)) el.classList.toggle("on", el === t);
      },
      done: () => {
        m.close();
        onDone?.();
      }
    });
  }
  function renderHud() {
    const el = $("#hud");
    if (!el) return;
    const w = weatherOf();
    const se = SEASONS[S.season];
    const sell = S.phase === "sell";
    const sub = sell ? '\u23F0 <span id="clock">' + fmtClock(SH.hour) + "</span>" : S.phase === "end" ? "H\u1EBFt ng\xE0y" : "Chu\u1EA9n b\u1ECB";
    const full = S.rating;
    const stars = Array.from({ length: 5 }, (_, i) => `<i class="${i + 1 <= Math.round(full) ? "on" : ""}">\u2605</i>`).join("");
    el.innerHTML = `
    <div class="hud-l">
      <button class="hbtn ${sell ? "pause" : ""}" data-act="${sell ? "pause" : "settings"}" aria-label="${sell ? "T\u1EA1m d\u1EEBng" : "C\xE0i \u0111\u1EB7t"}">${icon(sell ? "pause" : "menu", 18)}</button>
    </div>
    <div class="hud-day"><b>Ng\xE0y ${S.day}</b><span class="hud-sub">${sub}</span>
      <button class="wx" data-act="forecast" aria-label="D\u1EF1 b\xE1o th\u1EDDi ti\u1EBFt">${w.icon} ${se.name} \xB7 ${S.temp}\xB0C</button></div>
    <div class="hud-r">
      <div class="hud-money"><small>${esc(S.shopName)}</small><b data-money>${fmtK(S.money)}</b></div>
      <div class="hud-r-btns"><button class="hbtn sm" data-act="${sell ? "settings" : "guide"}" aria-label="${sell ? "C\xE0i \u0111\u1EB7t" : "H\u01B0\u1EDBng d\u1EABn"}">${icon(sell ? "settings" : "book", 16)}</button><button class="hbtn sm" data-act="branchTop" aria-label="Chi nh\xE1nh">${icon("branch", 16)}</button><button class="hbtn sm" data-act="collectTop" aria-label="S\u01B0u t\u1EA7m">${icon("collect", 16)}</button></div>
      <div class="hud-rate"><span class="stars">${stars}</span><small>${S.rating.toFixed(1).replace(".", ",")} \xB7 ${S.ratingCount} \u0110G</small></div>
    </div>`;
  }
  function updateClock() {
    const c = $("#clock");
    if (c && SH.on) c.textContent = fmtClock(SH.hour);
  }
  var hudActs = {};
  function setHudActions(a) {
    hudActs = a;
  }
  function initHud() {
    bindActions($("#hud"), new Proxy({}, { get: (_, k) => hudActs[k] }));
  }
  function aggregate(entries) {
    const a = { rev: 0, cogs: 0, rent: 0, util: 0, wage: 0, tax: 0, branch: 0, fran: 0, interest: 0, profit: 0, cups: 0, left: 0, online: 0, stars: [], days: entries.length };
    for (const e of entries) {
      for (const k of ["rev", "cogs", "rent", "util", "wage", "tax", "branch", "fran", "interest", "profit", "cups", "left", "online"]) a[k] += e[k] || 0;
      if (e.stars) a.stars.push(e.stars);
    }
    a.avgStars = a.stars.length ? sum(a.stars) / a.stars.length : 0;
    return a;
  }
  var pct = (x, t) => t > 0 ? x / t * 100 : 0;
  function plHTML(a, label) {
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
    const cogsCls = a.rev > 0 && cogsPct >= 28 && cogsPct <= 32 ? "good" : "warn";
    const wageCls = a.rev > 0 && wagePct >= 15 && wagePct <= 20 ? "good" : a.wage === 0 ? "neutral" : "warn";
    const row = (c, n, v, p) => `<div class="pl2-r"><i style="background:${c}"></i><span>${n}</span><em>${p}</em><b>${v}</b></div>`;
    const gap = Math.max(0, be - Math.round(soldPerDay));
    return `<section class="pl2">
    <div class="pl2-hero ${loss ? "neg" : "pos"}"><small>${esc(label)} \xB7 ${loss ? "L\u1ED7" : "L\xE3i"}</small><b>${loss ? "\u2212" : "+"}${fmtK(Math.abs(a.profit))}</b><span>Doanh thu ${fmtK(a.rev)} \xB7 Chi ph\xED ${fmtK(cost)}</span></div>
    <div class="pl-bar"><i style="width:${cg}%;background:#ff8a3d"></i><i style="width:${pe}%;background:#3d9bff"></i><i style="width:${ma}%;background:#8b5cf6"></i><i style="width:${lossPct}%;background:#ef4444"></i></div>
    <div class="pl2-list">
      ${row("#ff8a3d", "Nguy\xEAn li\u1EC7u", fmtK(a.cogs), cogsPct.toFixed(0) + "%")}
      ${row("#3d9bff", "Nh\xE2n s\u1EF1", fmtK(a.wage), wagePct.toFixed(0) + "%")}
      ${row("#8b5cf6", "M\u1EB7t b\u1EB1ng & \u0111i\u1EC7n n\u01B0\u1EDBc", fmtK(a.rent + a.util), pct(a.rent + a.util, a.rev).toFixed(0) + "%")}
    </div>
    <details class="pl2-more"><summary>Ph\xE2n t\xEDch F&B chi ti\u1EBFt</summary>
      <div class="pl-cards">
        <div class="pl-card ${cogsCls}"><small>Nguy\xEAn li\u1EC7u</small><em>Chu\u1EA9n 28\u201332%</em><b>${cogsPct.toFixed(1)}%</b><p>${cogsCls === "good" ? "\u{1F7E2} \u0110\u1EA1t chu\u1EA9n" : "\u{1F7E0} L\u1EC7ch chu\u1EA9n"}</p></div>
        <div class="pl-card ${wageCls}"><small>Nh\xE2n s\u1EF1</small><em>Chu\u1EA9n 15\u201320%</em><b>${wagePct.toFixed(1)}%</b><p>${a.wage === 0 ? "\u26AA Ch\u01B0a c\xF3" : wageCls === "good" ? "\u{1F7E2} \u0110\u1EA1t chu\u1EA9n" : "\u{1F7E0} L\u1EC7ch chu\u1EA9n"}</p></div>
        <div class="pl-card ${soldPerDay >= be ? "good" : "bad"}"><small>H\xF2a v\u1ED1n</small><em>${be} ly/ng\xE0y</em><b>${Math.round(soldPerDay)} ly</b><p>${soldPerDay >= be ? "\u{1F7E2} \u0110\xE3 v\u01B0\u1EE3t" : `\u{1F534} Thi\u1EBFu ${gap} ly`}</p></div>
      </div>
      <p class="pl2-diag">${loss ? `Chi ph\xED (${fmtK(cost)}) v\u01B0\u1EE3t doanh thu (${fmtK(a.rev)}). C\u1EA7n b\xE1n th\xEAm ${gap} ly \u0111\u1EC3 h\xF2a v\u1ED1n.` : `Qu\xE1n \u0111ang c\xF3 l\xE3i ${fmtK(a.profit)}. Gi\u1EEF nguy\xEAn li\u1EC7u 28\u201332% v\xE0 rating cao \u0111\u1EC3 t\u0103ng kh\xE1ch.`}</p>
    </details>
  </section>`;
  }
  function openDaySummary() {
    const T = S.today;
    const tomorrow = S.forecast.find((f) => f.day === S.day + 1) || rollWeatherFor(S.day + 1);
    const tw = WEATHERS[tomorrow.weather];
    const agg = aggregate([{ ...T, stars: T.avgStars }]);
    agg.profit = T.profit;
    agg.rev = T.rev + T.tips;
    const m = openModal({
      cls: "day",
      closable: false,
      id: "day",
      html: `
    <div class="day-moon">\u{1F319}<small>\u2B50</small></div>
    <h2 class="day-title">H\u1EBFt ng\xE0y ${S.day}</h2>
    <div class="day-stats"><div><b>${T.cups}</b><span>ly b\xE1n</span></div><div><b>${T.left}</b><span>kh\xE1ch b\u1ECF v\u1EC1</span></div><div><b>${T.avgStars ? T.avgStars.toFixed(1) + "\u2605" : "\u2013"}</b><span>\u0111\xE1nh gi\xE1</span></div></div>
    ${plHTML(agg, "Ng\xE0y " + S.day)}
    <div class="day-cash"><span>\u{1F5C4}\uFE0F S\u1ED1 d\u01B0 k\xE9t</span><b>${fmtK(S.money)}</b></div>
    <div class="tomorrow">\u{1F4C5} <b>Ng\xE0y mai:</b> ${esc(tw.tip)}</div>
    <button class="btn ghost block" data-act="sum">\u{1F4CA} T\u1ED5ng k\u1EBFt</button>
    <button class="btn pri block" data-act="next">Ng\xE0y ${S.day + 1} \u279C</button>`
    });
    bindActions(m.body, {
      sum: () => {
        m.close();
        nextDay();
        S.tab = "tongket";
        markDirty("view", "panel");
        sfx("success");
        emit("goto", "tongket");
      },
      next: () => {
        m.close();
        nextDay();
        sfx("success");
      }
    });
  }
  function sliderRow(label, key, icon2) {
    const v = Math.round(S.settings[key] * 100);
    return `<div class="vol"><div class="vol-h"><b>${icon2} ${label}</b><span class="pct" data-pct="${key}">${v}%</span></div>
    <div class="vol-r"><button class="rb" data-act="vol-" data-k="${key}">\u2212</button><input type="range" min="0" max="100" value="${v}" data-slider="${key}" aria-label="${label}"><button class="rb" data-act="vol+" data-k="${key}">\uFF0B</button><button class="rb" data-act="mute" data-k="${key}">${v ? "\u{1F50A}" : "\u{1F507}"}</button></div></div>`;
  }
  function bindSliders(m) {
    const set = (k, v) => {
      S.settings[k] = clamp(v, 0, 1);
      const sl = $(`[data-slider="${k}"]`, m.body);
      if (sl) sl.value = Math.round(S.settings[k] * 100);
      const p = $(`[data-pct="${k}"]`, m.body);
      if (p) p.textContent = Math.round(S.settings[k] * 100) + "%";
      applyVolumes();
      if (k === "music") restartMusic();
      requestSave();
    };
    $$("[data-slider]", m.body).forEach((s) => s.addEventListener("input", () => set(s.dataset.slider, s.value / 100)));
    return { "vol-": (t) => set(t.dataset.k, S.settings[t.dataset.k] - 0.1), "vol+": (t) => set(t.dataset.k, S.settings[t.dataset.k] + 0.1), mute: (t) => set(t.dataset.k, S.settings[t.dataset.k] > 0 ? 0 : 0.7) };
  }
  function openPause() {
    if (isModalOpen("pause")) return;
    setPaused(true);
    const left = Math.max(0, Math.round(SH.total - SH.t));
    const m = openModal({
      id: "pause",
      cls: "pause",
      closable: false,
      onClose: () => setPaused(false),
      html: `
    <div class="pause-ico">\u23F8</div><h2 class="day-title">T\u1EA1m d\u1EEBng ca b\xE1n</h2>
    <p class="m-text center">C\xF2n ${left}s \xB7 ${SH.queue.length} kh\xE1ch \u0111ang ch\u1EDD</p>
    <div class="box">${sliderRow("Nh\u1EA1c n\u1EC1n qu\xE1n", "music", "\u{1F3B5}")}${sliderRow("\xC2m thanh pha ch\u1EBF & SFX", "sfx", "\u{1F9CB}")}</div>
    <button class="btn pri block" data-act="resume">\u25B6 Ch\u01A1i ti\u1EBFp</button>
    <button class="btn pri block" data-act="close">\u0110\xF3ng c\u1EEDa h\xF4m nay</button>`
    });
    const acts = bindSliders(m);
    bindActions(m.body, {
      ...acts,
      resume: () => m.close(),
      close: () => confirmBox("\u0110\xF3ng c\u1EEDa h\xF4m nay?", "Kh\xE1ch \u0111ang ch\u1EDD s\u1EBD ra v\u1EC1 v\xE0 ca b\xE1n k\u1EBFt th\xFAc ngay.", () => {
        m.close();
        closeNow();
      }, "\u0110\xF3ng c\u1EEDa", true)
    });
  }
  function openSettings() {
    const sell = S.phase === "sell";
    if (sell) setPaused(true);
    const row = (act, icon2, label, value = "") => `<button class="set-row" data-act="${act}"><span class="si">${icon2}</span><b>${label}</b><em>${value}</em></button>`;
    const m = openModal({
      id: "settings",
      cls: "settings",
      onClose: () => {
        if (sell && !isModalOpen("pause")) setPaused(false);
      },
      html: `
    <h2 class="set-title">\u2699\uFE0F C\xE0i \u0111\u1EB7t</h2>
    ${row("guide", "\u{1F4D6}", "H\u01B0\u1EDBng d\u1EABn")}
    ${row("news", "\u{1F381}", "C\xF3 g\xEC m\u1EDBi", "v" + VERSION)}
    ${row("update", "\u{1F504}", "C\u1EADp nh\u1EADt b\u1EA3n m\u1EDBi", "T\u1EA3i l\u1EA1i web & xo\xE1 b\u1ED9 nh\u1EDB \u0111\u1EC7m")}
    ${row("hints", "\u{1F9ED}", "Ch\u1EC9 d\u1EABn t\u1EEBng b\u01B0\u1EDBc", S.settings.hints ? "T\u1EF1 \u0111\u1ED9ng" : "T\u1EAFt")}
    ${row("shiftMin", "\u23F1\uFE0F", "Th\u1EDDi gian b\xE1n m\u1ED7i ng\xE0y", `${S.settings.shiftMinNext} ph\xFAt \xB7 \xE1p d\u1EE5ng t\u1EEB ng\xE0y sau`)}
    ${row("theme", "\u{1F3A8}", "M\xE0u giao di\u1EC7n", THEMES[S.settings.theme].name)}
    ${row("haptic", "\u{1F4F3}", "Rung", HAPTIC_NAMES[S.settings.haptic ?? 2])}
    <div class="box">${sliderRow("Nh\u1EA1c n\u1EC1n qu\xE1n", "music", "\u{1F3B5}")}${sliderRow("\xC2m thanh pha ch\u1EBF & SFX", "sfx", "\u{1F9CB}")}</div>
    ${row("style", "\u{1F3BC}", "Nh\u1EA1c n\u1EC1n & M\xF9a", S.settings.style === "lofi" ? "Lofi Chill Qu\xE1n Cafe" : S.settings.style === "vui" ? "Vui nh\u1ED9n" : "T\u1EAFt nh\u1EA1c")}
    ${row("export", "\u{1F4E6}", "Sao l\u01B0u ti\u1EBFn tr\xECnh", S.savedAt ? "\u0110\xE3 l\u01B0u" : "Ch\u01B0a sao l\u01B0u")}
    ${row("backups", "\u{1F5C2}\uFE0F", "Kh\xF4i ph\u1EE5c b\u1EA3n t\u1EF1 l\u01B0u", `Game t\u1EF1 l\u01B0u ${listBackups().length} cu\u1ED1i ng\xE0y g\u1EA7n nh\u1EA5t`)}
    ${row("import", "\u{1F511}", "Kh\xF4i ph\u1EE5c t\u1EEB m\xE3")}
    ${row("reset", "\u21A9\uFE0F", "Ch\u01A1i l\u1EA1i t\u1EEB \u0111\u1EA7u")}
    <button class="btn pri block" data-act="close">\u0110\xF3ng</button>`
    });
    const sliders = bindSliders(m);
    const setVal = (act, text) => {
      const e = $(`[data-act="${act}"] em`, m.body);
      if (e) e.textContent = text;
    };
    const styleName = () => S.settings.style === "lofi" ? "Lofi Chill Qu\xE1n Cafe" : S.settings.style === "vui" ? "Vui nh\u1ED9n" : "T\u1EAFt nh\u1EA1c";
    bindActions(m.body, {
      ...sliders,
      close: () => m.close(),
      guide: () => openGuide(),
      news: () => alertBox("\u{1F381} C\xF3 g\xEC m\u1EDBi", CHANGELOG.map((c) => `<p>\u2022 ${esc(c)}</p>`).join("")),
      update: () => confirmBox("C\u1EADp nh\u1EADt b\u1EA3n m\u1EDBi", "L\u01B0u game v\xE0 t\u1EA3i l\u1EA1i trang \u0111\u1EC3 l\u1EA5y b\u1EA3n m\u1EDBi nh\u1EA5t?", () => {
        saveGame();
        location.reload();
      }),
      hints: () => openChoice("\u{1F9ED} Ch\u1EC9 d\u1EABn t\u1EEBng b\u01B0\u1EDBc", [[true, "T\u1EF1 \u0111\u1ED9ng"], [false, "T\u1EAFt"]], S.settings.hints, (v) => {
        S.settings.hints = v;
        requestSave();
        setVal("hints", v ? "T\u1EF1 \u0111\u1ED9ng" : "T\u1EAFt");
      }),
      shiftMin: () => openChoice("\u23F1\uFE0F Th\u1EDDi gian b\xE1n m\u1ED7i ng\xE0y", SHIFT_MINUTES.map((n) => [n, `${n} ph\xFAt`]), S.settings.shiftMinNext, (v) => {
        S.settings.shiftMinNext = v;
        requestSave();
        setVal("shiftMin", `${v} ph\xFAt \xB7 \xE1p d\u1EE5ng t\u1EEB ng\xE0y sau`);
      }),
      haptic: () => openChoice("\u{1F4F3} Rung khi thao t\xE1c & ch\u01A1i game", HAPTIC_NAMES.map((n, i) => [i, n]), S.settings.haptic ?? 2, (v) => {
        S.settings.haptic = v;
        requestSave();
        setVal("haptic", HAPTIC_NAMES[v]);
        buzz([30, 40, 30]);
      }),
      theme: () => openThemePicker(() => setVal("theme", THEMES[S.settings.theme].name)),
      style: () => openChoice("\u{1F3BC} Nh\u1EA1c n\u1EC1n & M\xF9a", [["lofi", "Lofi Chill Qu\xE1n Cafe"], ["vui", "Vui nh\u1ED9n"], ["off", "T\u1EAFt nh\u1EA1c"]], S.settings.style, (v) => {
        S.settings.style = v;
        restartMusic();
        requestSave();
        setVal("style", styleName());
      }),
      export: () => openExport(),
      import: () => openImport(),
      backups: () => openBackups(),
      reset: () => confirmBox("Ch\u01A1i l\u1EA1i t\u1EEB \u0111\u1EA7u?", "To\xE0n b\u1ED9 ti\u1EBFn tr\xECnh s\u1EBD b\u1ECB xo\xE1 v\u0129nh vi\u1EC5n. B\u1EA1n ch\u1EAFc ch\u1EAFn ch\u1EE9?", () => {
        closeAllModals();
        wipeSave();
        applyTheme();
        emit("reset");
      }, "Xo\xE1 & ch\u01A1i l\u1EA1i", true)
    });
  }
  function openExport() {
    const code = exportCode();
    const m = openModal({ cls: "small", html: `<h3 class="m-title">\u{1F4E6} M\xE3 sao l\u01B0u</h3><p class="m-text">Sao ch\xE9p m\xE3 b\xEAn d\u01B0\u1EDBi v\xE0 c\u1EA5t \u1EDF n\u01A1i an to\xE0n. D\xE1n v\xE0o "Kh\xF4i ph\u1EE5c t\u1EEB m\xE3" \u0111\u1EC3 ch\u01A1i ti\u1EBFp tr\xEAn m\xE1y kh\xE1c.</p>
    <textarea class="code" readonly data-code>${code}</textarea><button class="btn pri block" data-act="copy">\u{1F4CB} Sao ch\xE9p</button><button class="btn ghost block" data-act="x">\u0110\xF3ng</button>` });
    bindActions(m.body, {
      copy: async () => {
        try {
          await navigator.clipboard.writeText(code);
          toast("\u0110\xE3 sao ch\xE9p m\xE3!", "ok");
        } catch (e) {
          $("[data-code]", m.body).select();
          document.execCommand?.("copy");
          toast("\u0110\xE3 ch\u1ECDn m\xE3, h\xE3y sao ch\xE9p", "ok");
        }
      },
      x: () => m.close()
    });
  }
  function openImport() {
    const m = openModal({ cls: "small", html: `<h3 class="m-title">\u{1F511} Kh\xF4i ph\u1EE5c t\u1EEB m\xE3</h3><textarea class="code" data-code placeholder="D\xE1n m\xE3 TTM3.\u2026 v\xE0o \u0111\xE2y"></textarea>
    <button class="btn pri block" data-act="go">Kh\xF4i ph\u1EE5c</button><button class="btn ghost block" data-act="x">H\u1EE7y</button>` });
    bindActions(m.body, {
      go: () => {
        if (importCode($("[data-code]", m.body).value)) {
          closeAllModals();
          applyTheme();
          emit("reset");
          toast("Kh\xF4i ph\u1EE5c th\xE0nh c\xF4ng!", "ok");
        } else toast("M\xE3 kh\xF4ng h\u1EE3p l\u1EC7", "err");
      },
      x: () => m.close()
    });
  }
  function openBackups() {
    const list = listBackups();
    const m = openModal({ cls: "small", html: `<h3 class="m-title">\u{1F5C2}\uFE0F B\u1EA3n t\u1EF1 l\u01B0u</h3>${list.length ? list.map((b) => `<button class="set-row" data-act="rb" data-i="${b.i}"><span class="si">\u{1F4BE}</span><b>Ng\xE0y ${b.day} \xB7 ${fmtK(b.money)}</b><em>${new Date(b.t).toLocaleString("vi-VN")}</em></button>`).join("") : '<p class="m-text center">Ch\u01B0a c\xF3 b\u1EA3n t\u1EF1 l\u01B0u n\xE0o. Game t\u1EF1 l\u01B0u v\xE0o cu\u1ED1i m\u1ED7i ng\xE0y.</p>'}
    <button class="btn ghost block" data-act="x">\u0110\xF3ng</button>` });
    bindActions(m.body, {
      rb: (t) => confirmBox("Kh\xF4i ph\u1EE5c b\u1EA3n n\xE0y?", "Ti\u1EBFn tr\xECnh hi\u1EC7n t\u1EA1i s\u1EBD b\u1ECB thay th\u1EBF.", () => {
        if (restoreBackup(+t.dataset.i)) {
          closeAllModals();
          applyTheme();
          emit("reset");
          toast("\u0110\xE3 kh\xF4i ph\u1EE5c!", "ok");
        }
      }),
      x: () => m.close()
    });
  }
  function openGuide() {
    const li = (ico, body) => `<li><span>${ico}</span><div>${body}</div></li>`;
    const sec = (ico, title, items, open) => `<details class="g-det"${open ? " open" : ""}><summary>${ico} ${title}</summary><ul class="g-list">${items.map((x) => li(x[0], x[1])).join("")}</ul></details>`;
    const m = openModal({ id: "guide", cls: "settings", html: `<h2 class="set-title">\u{1F4D6} H\u01B0\u1EDBng d\u1EABn ch\u01A1i</h2>
    <div class="guide rich">
    ${sec("\u{1F3E0}", "M\xE0n chu\u1EA9n b\u1ECB", [
      ["\u{1FAA7}", "<b>Bi\u1EC3n hi\u1EC7u</b>: ch\u1EA1m logo ho\u1EB7c t\xEAn ti\u1EC7m \u0111\u1EC3 \u0111\u1ED5i. Hai nh\xE3n nh\u1ECF d\u1EABn nhanh t\u1EDBi <b>Kh\u1EDFi nghi\u1EC7p</b> (\u0111\u1ECBa \u0111i\u1EC3m) v\xE0 <b>S\u1EA3nh Tr\xE0</b>."],
      ["\u{1F964}", "<b>Menu h\xF4m nay</b>: c\xE1c m\xF3n \u0111ang b\xE1n k\xE8m gi\xE1, size L ph\u1EE5 thu th\xEAm. D\xF2ng s\u1EF1 ki\u1EC7n v\xE0 <b>\u{1F465} kh\xE1ch d\u1EF1 ki\u1EBFn</b> + th\u1EDDi ti\u1EBFt n\u1EB1m ngay b\xEAn d\u01B0\u1EDBi."],
      ["\u{1F9ED}", "<b>Thanh d\u01B0\u1EDBi c\xF9ng</b> c\xF3 5 nh\xF3m: \u{1F3EA} Ti\u1EC7m \xB7 \u{1F4E6} Kho \xB7 \u{1F4C8} Ph\xE1t tri\u1EC3n \xB7 \u{1F465} X\xE3 h\u1ED9i \xB7 \u{1F380} Th\xEAm. Ch\u1ECDn nh\xF3m r\u1ED3i ch\u1EA1m \xF4 ch\u1EE9c n\u0103ng b\xEAn trong."],
      ["\u2630", "N\xFAt <b>\u2261</b> g\xF3c tr\xE1i tr\xEAn l\xE0 C\xE0i \u0111\u1EB7t, n\xFAt \u{1F4D6} l\xE0 m\u1EDF l\u1EA1i H\u01B0\u1EDBng d\u1EABn, \u26C5 \u0111\u1EC3 xem d\u1EF1 b\xE1o th\u1EDDi ti\u1EBFt v\xE0 s\u1EF1 ki\u1EC7n."],
      ["\u{1F3EE}", "N\xFAt h\u1ED3ng \u0111\xE1y m\xE0n h\xECnh \u0111\u1ED5i theo t\xECnh tr\u1EA1ng: <b>N\u1EA5u & nh\u1EADp</b> \u2192 <b>\u26A0\uFE0F Ch\u01B0a n\u1EA5u\u2026</b> (\u0111\u1ECF, thi\u1EBFu m\xF3n) \u2192 <b>M\u1EDF c\u1EEDa</b>."]
    ], true)}
    ${sec("\u{1F4E6}", "Kho & nh\u1EADp h\xE0ng", [
      ["\u{1FAD6}", "C\xE1c tab: <b>Tr\xE0</b>, <b>Topping</b>, <b>D\u1EE5ng c\u1EE5</b> (ly, \u0111\xE1, \u0111\u01B0\u1EDDng\u2026) v\xE0 <b>\u{1F353} H\u01B0\u01A1ng</b> (khi \u0111\xE3 m\u1EDF kh\xF3a)."],
      ["\u{1F522}", "M\u1ED7i m\xF3n c\xF3 \xF4 s\u1ED1: g\xF5 th\u1EB3ng s\u1ED1 l\u01B0\u1EE3ng ho\u1EB7c b\u1EA5m <b>\u2212 / +</b> (m\u1ED7i l\u1EA7n 1). D\xF2ng xanh <b>+N</b> l\xE0 l\u01B0\u1EE3ng s\u1EBD nh\u1EADp, k\xE8m ti\u1EC1n v\u1ED1n."],
      ["\u23F3", "<b>\u23F3 N ng\xE0y</b> l\xE0 h\u1EA1n d\xF9ng; <b>\u26A0\uFE0F</b> b\xE1o m\xF3n h\u1EBFt h\u1EA1n h\xF4m nay. Chai h\u01B0\u01A1ng = nhi\u1EC1u ly, d\xF9ng \u0111\u01B0\u1EE3c 7 ng\xE0y."],
      ["\u{1F6D2}", "Xong th\xEC b\u1EA5m <b>N\u1EA5u & nh\u1EADp</b> \u0111\u1EC3 tr\u1EA3 ti\u1EC1n. Thi\u1EBFu Tr\xE0 ho\u1EB7c D\u1EE5ng c\u1EE5 th\xEC ch\u01B0a m\u1EDF c\u1EEDa \u0111\u01B0\u1EE3c."],
      ["\u{1FAB4}", "Nh\xF3m Kho c\xF2n c\xF3 <b>V\u01B0\u1EDDn c\xE2y</b> (tr\u1ED3ng nguy\xEAn li\u1EC7u) v\xE0 <b>Th\xFA c\u01B0ng</b> (\u{1F512} \u0111\u1EBFn khi nh\u1EADn nu\xF4i)."]
    ])}
    ${sec("\u{1F9CB}", "M\xE0n b\xE1n h\xE0ng \u2013 t\u1EEBng b\u01B0\u1EDBc pha 1 ly", [
      ["1\uFE0F\u20E3", "<b>\u0110\u1ECDc \u0111\u01A1n</b>: h\xE0ng \u0111\u1EE3i kh\xE1ch \u1EDF tr\xEAn c\xF9ng, kh\xE1ch \u0111ang ph\u1EE5c v\u1EE5 hi\u1EC7n <b>bong b\xF3ng</b> ghi size, tr\xE0, h\u01B0\u01A1ng, topping. V\xF2ng quanh avatar l\xE0 <b>ki\xEAn nh\u1EABn</b>, c\u1EA1n l\xE0 kh\xE1ch b\u1ECF \u0111i. Ch\u1EA1m avatar kh\xE1c \u0111\u1EC3 \u0111\u1ED5i kh\xE1ch."],
      ["2\uFE0F\u20E3", "<b>L\u1EA5y ly</b>: \u1EDF <b>QU\u1EA6Y TR\xC0</b>, ch\u1EA1m ch\u1ED3ng ly <b>M</b> ho\u1EB7c <b>L</b> \u0111\xFAng size (m\u1ED7i size c\xF3 s\u1ED1 l\u01B0\u1EE3ng ri\xEAng)."],
      ["3\uFE0F\u20E3", "<b>R\xF3t tr\xE0</b>: ch\u1EA1m \u0111\xFAng <b>b\xECnh tr\xE0</b> \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u r\xF3t, ch\u1EA1m l\u1EA1i \u0111\u1EC3 d\u1EEBng khi thanh ch\u1EA1y t\u1EDBi <b>v\xF9ng v\xE0ng</b>. Ly l\u01B0ng ho\u1EB7c tr\xE0n b\u1ECB tr\u1EEB sao."],
      ["4\uFE0F\u20E3", "<b>H\u01B0\u01A1ng</b>: n\u1EBFu kh\xE1ch g\u1ECDi, ch\u1EA1m chai \u1EDF h\xE0ng <b>H\u01AF\u01A0NG</b> d\u01B0\u1EDBi b\xECnh tr\xE0."],
      ["5\uFE0F\u20E3", "<b>Topping</b>: ch\u1EA1m c\xE1c khay topping kh\xE1ch y\xEAu c\u1EA7u, kh\xF4ng th\xEAm th\u1EEBa."],
      ["6\uFE0F\u20E3", "<b>\u0110\xF3ng n\u1EAFp</b>: ch\u1EA1m <b>m\xE1y \u0111\xF3ng n\u1EAFp</b>, ch\u1EDD \u0111\xE8n READY r\u1ED3i ch\u1EA1m <b>ly tr\xEAn th\u1EDBt</b> (khu PHA LY)."],
      ["7\uFE0F\u20E3", "<b>Giao kh\xE1ch</b>: ly xong s\u1EBD giao cho kh\xE1ch. \u0110\xFAng \u0111\u01A1n v\xE0 nhanh th\xEC 5 sao, kh\xE1ch h\xE0i l\xF2ng c\xF2n boa."],
      ["\u{1F4F1}", "<b>\u0110i\u1EC7n tho\u1EA1i</b>: \u0111\u01A1n online (s\u1ED1 \u0111\u1ECF l\xE0 s\u1ED1 \u0111\u01A1n ch\u1EDD). Nh\u1EADn \u0111\u01A1n r\u1ED3i pha nh\u01B0 b\xECnh th\u01B0\u1EDDng."],
      ["\u{1F5D1}\uFE0F", "<b>Th\xF9ng r\xE1c</b>: \u0111\u1ED5 ly b\u1ECB sai \u0111\u1EC3 pha l\u1EA1i."],
      ["\u2B50", "Ch\u1EA5m sao: sai tr\xE0 \u22123, sai size \u22122, thi\u1EBFu/th\u1EEBa h\u01B0\u01A1ng \u22121, sai topping \u22121~2, ly l\u01B0ng \u22121, tr\xE0n \u22121, ch\u1EDD qu\xE1 l\xE2u \u22121."],
      ["\u23F8\uFE0F", "N\xFAt <b>\u23F8</b> tr\xEAn c\xF9ng l\xE0 t\u1EA1m d\u1EEBng; n\xFAt b\xE1nh r\u0103ng b\xEAn ph\u1EA3i l\xE0 C\xE0i \u0111\u1EB7t."]
    ], true)}
    ${sec("\u{1FA91}", "S\u1EA3nh & b\xE0n", [
      ["\u27A1\uFE0F", "N\xFAt <b>Ra s\u1EA3nh</b> d\u01B0\u1EDBi c\xF9ng (k\xE8m s\u1ED1 b\xE0n) chuy\u1EC3n sang S\u1EA3nh Tr\xE0; quay l\u1EA1i qu\u1EA7y b\u1EB1ng n\xFAt t\u01B0\u01A1ng \u1EE9ng."],
      ["\u{1F9F9}", "Kh\xE1ch \u0103n xong \u0111\u1EC3 l\u1EA1i b\xE0n b\u1EA9n, d\u1ECDn b\xE0n \u0111\u1EC3 c\xF3 ch\u1ED7 cho kh\xE1ch m\u1EDBi. Kh\xE1ch ng\u1ED3i h\xE0i l\xF2ng c\xF3 th\u1EC3 boa th\xEAm."]
    ])}
    ${sec("\u{1F4CA}", "Cu\u1ED1i ng\xE0y & t\u1ED5ng k\u1EBFt", [
      ["\u{1F514}", "H\u1EBFt gi\u1EDD ca, b\u1EA3ng <b>T\u1ED5ng k\u1EBFt ng\xE0y</b> cho doanh thu, boa, s\u1ED1 kh\xE1ch ph\u1EE5c v\u1EE5/b\u1ECF v\u1EC1 v\xE0 sao nh\u1EADn \u0111\u01B0\u1EE3c."],
      ["\u2B50", "Tab <b>\u0110\xE1nh gi\xE1</b> (nh\xF3m Ti\u1EC7m) xem nh\u1EADn x\xE9t. Sao c\xE0ng cao th\xEC kh\xE1ch c\xE0ng \u0111\xF4ng."],
      ["\u{1F4CA}", "Tab <b>T\u1ED5ng k\u1EBFt</b> xem l\u1EA1i s\u1ED1 li\u1EC7u c\xE1c ng\xE0y. Game t\u1EF1 l\u01B0u cu\u1ED1i m\u1ED7i ng\xE0y."]
    ])}
    ${sec("\u{1F4C8}", "Ph\xE1t tri\u1EC3n (n\xE2ng c\u1EA5p, nh\xE2n s\u1EF1, chi nh\xE1nh, kh\u1EDFi nghi\u1EC7p)", [
      ["\u{1F4B5}", "<b>Gi\xE1 b\xE1n</b> (nh\xF3m Ti\u1EC7m): ch\u1EC9nh gi\xE1 Tr\xE0, H\u01B0\u01A1ng, Topping, Size. Tr\xE0 tr\xEAn 50k, topping tr\xEAn 20k d\u1EC5 l\xE0m kh\xE1ch b\u1ECF \u0111i."],
      ["\u{1F6E0}\uFE0F", "<b>N\xE2ng c\u1EA5p</b>: m\u1EDF kh\xF3a tr\xE0/topping, c\u1EA3i thi\u1EC7n qu\u1EA7y, th\xEAm ti\u1EC7n \xEDch."],
      ["\u{1F3C6}", "<b>Qu\u1EA3n l\xFD nh\xE2n s\u1EF1</b>: thu\xEA nh\xE2n vi\xEAn t\u1EF1 pha, qu\u1EA3n l\xFD h\u1ED7 tr\u1EE3 topping."],
      ["\u{1F3E2}", "<b>Chi nh\xE1nh</b>: m\u1EDF th\xEAm ti\u1EC7m \u0111\u1EC3 c\xF3 thu nh\u1EADp. <b>\u{1F5FA}\uFE0F Kh\u1EDFi nghi\u1EC7p</b>: \u0111\u1ED5i \u0111\u1ECBa \u0111i\u1EC3m, m\u1EDF r\u1ED9ng xuy\xEAn Vi\u1EC7t."],
      ["\u{1F4DC}", "<b>Thu\u1EBF & Bank</b> (nh\xF3m Th\xEAm): \u0111\xF3ng thu\u1EBF nh\u1EADn buff, g\u1EEDi ti\u1EBFt ki\u1EC7m."]
    ])}
    ${sec("\u{1F465}", "X\xE3 h\u1ED9i", [
      ["\u{1F4F1}", "<b>M\u1EA1ng X\xE3 H\u1ED9i</b>: \u0111\u0103ng b\xE0i, ch\u1EA1y qu\u1EA3ng c\xE1o \u0111\u1EC3 k\xE9o th\xEAm kh\xE1ch."],
      ["\u{1F465}", "<b>B\u1EA1n b\xE8</b>: k\u1EBFt n\u1ED1i v\xE0 so s\xE1nh v\u1EDBi b\u1EA1n b\xE8."],
      ["\u{1F3B4}", "<b>S\u01B0u t\u1EA7m</b> (nh\xF3m Th\xEAm) c\u0169ng m\u1EDF nhanh b\u1EB1ng n\xFAt \u1EDF g\xF3c ph\u1EA3i thanh \u0111\u1EA7u m\xE0n h\xECnh."]
    ])}
    ${sec("\u{1F36C}", "Mini game", [
      ["\u{1F36C}", "<b>Milk Tea Crush</b> (nh\xF3m Th\xEAm): gh\xE9p 3 m\xF3n gi\u1ED1ng nhau \u0111\u1EC3 nh\u1EADn th\u01B0\u1EDFng."]
    ])}
    ${sec("\u2699\uFE0F", "C\xE0i \u0111\u1EB7t (m\xE0u, rung, nh\u1EA1c)", [
      ["\u{1F3A8}", "B\u1EA5m <b>\u2261</b> (m\xE0n chu\u1EA9n b\u1ECB) ho\u1EB7c b\xE1nh r\u0103ng (khi b\xE1n) r\u1ED3i ch\u1ECDn <b>M\xE0u giao di\u1EC7n</b>."],
      ["\u{1F4F3}", "<b>Rung</b>: ch\u1ECDn m\u1EE9c rung khi thao t\xE1c."],
      ["\u{1F3B5}", "<b>Nh\u1EA1c n\u1EC1n</b> v\xE0 <b>SFX</b> ch\u1EC9nh \xE2m l\u01B0\u1EE3ng ri\xEAng; <b>\u{1F3BC} Nh\u1EA1c n\u1EC1n & M\xF9a</b> \u0111\u1ED5i phong c\xE1ch nh\u1EA1c. C\xF2n c\xF3 \u23F1\uFE0F th\u1EDDi gian b\xE1n m\u1ED7i ng\xE0y v\xE0 \u{1F9ED} ch\u1EC9 d\u1EABn t\u1EEBng b\u01B0\u1EDBc."]
    ])}
    </div>
    <button class="btn blue block" data-act="replay">\u{1F393} Xem h\u01B0\u1EDBng d\u1EABn t\u01B0\u01A1ng t\xE1c t\u1EEBng b\u01B0\u1EDBc</button>
    <button class="btn pri block" data-act="x" style="margin-top:6px">\u0110\xE3 hi\u1EC3u</button>` });
    bindActions(m.body, { x: () => m.close(), replay: () => {
      m.close();
      emit("tutorial:replay");
    } });
  }
  function openForecast() {
    const ev = eventOf();
    const loc = LOCATIONS[S.location];
    const m = openModal({ cls: "small", html: `<h3 class="m-title">\u{1F326}\uFE0F Th\u1EDDi ti\u1EBFt & M\xF9a</h3>
    <p class="m-text center">${loc.icon} ${esc(loc.name)} \xB7 ${SEASONS[S.season].icon} M\xF9a ${SEASONS[S.season].name}</p>
    ${S.forecast.slice(0, 4).map((f, i) => {
      const w = WEATHERS[f.weather];
      return `<div class="wx-row"><span class="wi">${w.icon}</span><div><b>${i === 0 ? "H\xF4m nay" : "Ng\xE0y " + f.day} \xB7 ${f.temp}\xB0C \u2014 ${w.name}</b><small>${esc(w.tip)}</small></div></div>`;
    }).join("")}
    <div class="wx-row ev"><span class="wi">${ev.icon}</span><div><b>S\u1EF1 ki\u1EC7n h\xF4m nay: ${esc(ev.name)}</b><small>${esc(ev.desc)}</small></div></div>
    <button class="btn pri block" data-act="x">\u0110\xF3ng</button>` });
    bindActions(m.body, { x: () => m.close() });
  }
  function goFullscreen() {
    try {
      const d = document.documentElement;
      if (document.fullscreenElement || document.webkitFullscreenElement) return;
      const f = d.requestFullscreen || d.webkitRequestFullscreen || d.msRequestFullscreen;
      if (f) {
        const r = f.call(d, { navigationUI: "hide" });
        if (r && r.catch) r.catch(() => {
        });
      }
      screen.orientation?.lock?.("portrait").catch(() => {
      });
    } catch (e) {
    }
  }
  var fsDone = false;
  document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) fsDone = true;
  });
  for (const ev of ["pointerup", "touchend", "click", "keydown"]) document.addEventListener(ev, () => {
    if (!fsDone) goFullscreen();
  }, { passive: true });
  function showIntro(onPlay) {
    const el = $("#intro");
    el.hidden = false;
    const hasSave = S.started;
    el.innerHTML = `
    <div class="intro-sky"><span class="star">\u2B50</span><span class="cloud c1">\u2601\uFE0F</span><span class="cloud c2">\u2601\uFE0F</span><span class="bubble-tea">\u{1F9CB}</span><span class="spark" style="left:12%;top:36%">\u2726</span><span class="spark" style="right:10%;top:44%;animation-delay:-1s">\u2726</span></div>
    <div class="in-aw" aria-hidden="true"></div>
    <div class="in-lan" aria-hidden="true"><span>\u{1F3EE}</span><span>\u{1F390}</span><span>\u{1F3EE}</span></div>
    <h1 class="intro-title">Ti\u1EC7m Tr\xE0 M\u01A1 \u01AF\u1EDBc</h1>
    <div class="in-counter" aria-hidden="true"><span class="in-plant">\u{1F335}</span><div class="in-cups"><span>\u{1F9CB}</span><span>\u{1F964}</span><span>\u{1F9C3}</span><span>\u{1F375}</span></div><div class="in-cat">\u{1F431}<small>z z</small></div><span class="in-plant">\u{1FAB4}</span></div>
    <div class="in-front" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
    <span class="in-corner l">\u{1F353}</span><span class="in-corner r">\u{1F343}</span>
    <p class="intro-tag">Pha tr\xE0, \u0111\xF3n kh\xE1ch, m\u1EDF ti\u1EC7m nh\u1ECF c\u1EE7a ri\xEAng b\u1EA1n</p>
    <div class="intro-info">${esc(S.shopName)} \xB7 Ng\xE0y ${S.day} \xB7 ${fmtK(S.money)}</div>
    <button class="btn pri big" data-act="play">${hasSave ? "Ch\u01A1i ti\u1EBFp" : "Ch\u01A1i m\u1EDBi"}</button>
    <button class="link" data-act="guide">H\u01B0\u1EDBng d\u1EABn</button>
    <small class="ver">${VERSION}</small>`;
    bindActions(el, { play: () => {
      goFullscreen();
      el.hidden = true;
      onPlay();
    }, guide: () => {
      goFullscreen();
      openGuide();
    } });
  }

  // js/brewui.js
  var sizePx = { M: [54, 76], L: [64, 90] };
  function cupHTML(c, { mini = false, stamp = true } = {}) {
    const [w, hgt] = sizePx[c.size || "M"];
    const k = mini ? 0.55 : 1;
    const tea = c.tea ? ITEMS[c.tea] : null;
    const fl = c.flavor ? ITEMS[c.flavor] : null;
    const fill = clamp((c.fill ?? 0) / 1, 0, 1.15);
    const liq = tea ? `linear-gradient(${tea.color}, ${tea.color}${fl ? "" : ""})` : "transparent";
    const flav = fl ? `<i class="c-flav" style="background:${fl.color}"></i>` : "";
    const tops = (c.tops || []).map((t) => `<i class="c-top" style="background-color:${ITEMS[t].color}"></i>`.repeat(3)).join("");
    const lid = c.phase === "ready" ? '<i class="c-lid"></i>' : "";
    const straw = c.phase === "ready" ? '<i class="c-straw"></i>' : "";
    const st = stamp && !mini && equipLevel("nhanDien") > 0 ? `<span class="c-stamp">${logoHTML(20)}</span>` : "";
    return `<div class="cup ${c.phase || ""}" style="width:${w * k}px;height:${hgt * k}px">
    <div class="c-body"><div class="c-liq" style="height:${Math.min(100, fill * 86)}%;background:${liq}">${flav}</div><div class="c-tops">${tops}</div></div>
    ${lid}${straw}${st}</div>`;
  }
  function orderCup(o) {
    return cupHTML({ size: o.size, tea: o.tea, flavor: o.flavor, tops: o.tops, fill: 0.95, phase: "ready" }, { mini: true, stamp: false });
  }
  var root = null;
  function renderSell() {
    const view = $("#view");
    if (S.phase !== "sell") return;
    if (SH.view === "lobby") return renderLobby(view);
    view.innerHTML = `<div class="sell" id="sell">
    <div class="queue-row" id="qrow"></div>
    <div class="cust-zone">
      <div class="cust-av" id="cav"></div>
      <div class="bubble" id="cbub"></div>
    </div>
    <div class="hint" id="hint"></div>
    <div class="shelf">
      <div class="tag-w">QU\u1EA6Y TR\xC0</div>
      <div class="shelf-row">
        <div class="stacks">
          <button class="stack" data-act="cup" data-size="M" aria-label="L\u1EA5y ly size M"><div class="cupstack m"><i class="rim"></i></div><b>M</b><span class="cnt" data-cnt="lyM">0</span></button>
          <button class="stack big" data-act="cup" data-size="L" aria-label="L\u1EA5y ly size L"><div class="cupstack l"><i class="rim"></i></div><b>L</b><span class="cnt" data-cnt="lyL">0</span></button>
        </div>
        <div class="disps" id="disps">${TEAS.map(dispHTML).join("")}</div>
      </div>
      <div class="flav-row" id="flavs"></div>
    </div>
    <div class="work">
      <div class="work-row">
        <div class="work-l">
          <div class="tag-w sm">PHA LY</div>
          <div class="board" id="wboard"><div class="cupslot" id="cupslot" data-act="boardTap"></div>
            <div class="board-txt" id="boardTxt">L\u1EA5y ly<br/>M ho\u1EB7c L</div>
            <div class="pourbar" id="pourbar"><div class="pb-zone"></div><i id="pbFill"></i></div></div>
        </div>
        <button class="sealer" id="sealer" data-act="seal" aria-label="M\xE1y \u0111\xF3ng n\u1EAFp"><div class="sl-head"></div><div class="sl-lid"></div><div class="sl-body"><span class="sl-led">READY</span><div class="sl-knobs"><i></i><i></i></div></div><div class="sl-slot"></div></button>
        <div class="work-side">
          <button class="phone" data-act="phone" aria-label="\u0110\u01A1n online"><span>\u{1F4F1}</span><b id="phoneBadge">0</b></button>
          <button class="trash" data-act="trash" aria-label="Th\xF9ng r\xE1c">\u{1F5D1}\uFE0F</button>
        </div>
      </div>
      <div class="trays" id="trays"></div>
    </div>
    <div class="foot"><button class="btn pri lobby-go" data-act="lobby" id="lobbyGo">Ra s\u1EA3nh \u2192 <span id="lobbyCnt">0/0</span></button></div>
    <div class="stream" id="stream"></div>
  </div>`;
    root = $("#sell");
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
    return `<button class="disp ${locked ? "locked" : ""} ${off ? "off" : ""}" data-act="disp" data-tea="${t}" aria-label="${it.name}" ${locked ? 'data-locked="1"' : ""}>
    <i class="jlid"></i><div class="jar"><i class="jl" style="background:${it.color}"></i><span class="lab">${it.short}</span>${locked ? '<em class="lk">\u{1F512}</em>' : ""}</div><div class="tap"><i class="drip" style="background:${it.color}"></i></div>
    <span class="cnt" data-cnt="${t}">0</span></button>`;
  }
  function fillFlavors() {
    const list = FLAVORS.filter((f) => S.unlocked[f] && S.onMenu[f]);
    $("#flavs").innerHTML = list.length ? `<span class="tag-w sm">H\u01AF\u01A0NG</span>` + list.map((f) => `<button class="fbtn" data-act="flav" data-f="${f}" aria-label="${ITEMS[f].name}"><i style="background:${ITEMS[f].color}"></i><b>${ITEMS[f].icon}</b><span class="cnt" data-cnt="${f}">0</span></button>`).join("") : "";
  }
  function fillTrays() {
    const order = [...TOPS].sort((a, b) => (S.unlocked[b] && S.onMenu[b] ? 1 : 0) - (S.unlocked[a] && S.onMenu[a] ? 1 : 0));
    const slots = Math.max(12, Math.ceil(order.length / 4) * 4);
    $("#trays").innerHTML = order.slice(0, slots).map((t) => {
      const it = ITEMS[t];
      const locked = !S.unlocked[t], off = S.unlocked[t] && !S.onMenu[t];
      const dots = `<i style="background-color:${it.color}"></i>`.repeat(14);
      return `<button class="tray ${locked ? "locked" : ""} ${off ? "off" : ""}" data-act="top" data-t="${t}" aria-label="${it.name}"><div class="pile">${dots}</div>${locked ? '<em class="lk">\u{1F512}</em>' : ""}<small>${it.name.replace("Tr\xE2n ch\xE2u ", "TC ").replace("Th\u1EA1ch ", "Th. ")}</small><span class="cnt" data-cnt="${t}">0</span></button>`;
    }).join("");
  }
  var sellActs = {
    cup: (t) => {
      const e = pickCup(t.dataset.size);
      if (e) {
        toast(e, "err");
        sfx("error");
      }
    },
    disp: (t) => {
      const id = t.dataset.tea;
      if (!S.unlocked[id]) return toast("M\u1EDF kh\xF3a trong N\xE2ng c\u1EA5p \u203A Tr\xE0", "err");
      if (!S.onMenu[id]) return toast("M\xF3n \u0111ang t\u1EAFt kh\u1ECFi menu", "err");
      const b = SH.board;
      if (b?.pouring) {
        stopPour();
        return;
      }
      const e = startPour(id);
      if (e) {
        toast(e, "err");
        sfx("error");
      }
    },
    flav: (t) => {
      const e = addFlavor(t.dataset.f);
      if (e) {
        toast(e, "err");
        sfx("error");
      } else {
        sfx("drop");
        dropFx(t, "#fff");
      }
    },
    top: (t) => {
      const id = t.dataset.t;
      if (!S.unlocked[id]) return toast("M\u1EDF kh\xF3a trong N\xE2ng c\u1EA5p \u203A Topping", "err");
      if (!S.onMenu[id]) return toast("M\xF3n \u0111ang t\u1EAFt kh\u1ECFi menu", "err");
      const e = addTop(id);
      if (e) {
        toast(e, "err");
        sfx("error");
      } else dropFx(t, ITEMS[id].color);
    },
    seal: () => {
      const e = sealCup();
      if (e) {
        toast(e, "err");
        sfx("error");
      }
    },
    boardTap: () => {
      if (SH.board?.phase === "ready") doServe();
    },
    trash: () => {
      if (SH.board) {
        trashCup();
        sfx("pop");
        toast("\u0110\xE3 \u0111\u1ED5 ly", "");
      }
    },
    phone: () => openOnlineList(),
    lobby: () => {
      SH.view = "lobby";
      markDirty("view");
    },
    sel: (t) => selectCustomer(+t.dataset.cid)
  };
  function doServe() {
    const cupEl = $("#cupslot .cup");
    const front = frontCustomer();
    const r = serve();
    if (typeof r === "string") {
      toast(r, "err");
      sfx("error");
      return;
    }
    const target = $("#cav") || void 0;
    if (cupEl && target) {
      const a = cupEl.getBoundingClientRect(), b = target.getBoundingClientRect();
      const clone = cupEl.cloneNode(true);
      clone.style.cssText = `position:fixed;left:${a.left}px;top:${a.top}px;z-index:80;pointer-events:none`;
      document.body.appendChild(clone);
      clone.animate([{ transform: "translate(0,0) scale(1)", opacity: 1 }, { transform: `translate(${b.left - a.left}px,${b.top - a.top + 20}px) scale(.5)`, opacity: 0.1 }], { duration: 480, easing: "ease-in" }).onfinish = () => clone.remove();
    }
    const anchor = target || $("#hud");
    const star = "\u2605".repeat(r.stars) + "\u2606".repeat(5 - r.stars);
    fxText(`+${fmtK(r.pay)}${r.tip ? " (+" + fmtK(r.tip) + " boa)" : ""}`, anchor, "");
    setTimeout(() => fxText(star, anchor, r.stars >= 4 ? "g" : r.stars <= 2 ? "r" : ""), 220);
    if (r.issues.length) setTimeout(() => fxText(r.issues.slice(0, 2).join(", "), anchor, "r"), 520);
    if (r.luck) setTimeout(() => fxText("\u{1F340} MAY M\u1EAEN \xD72!", anchor, "g"), 700);
    fxCoins(anchor, r.stars >= 4 ? 7 : 3);
    if (r.stars >= 5) fxSpark(anchor, 10);
    sfx(r.stars >= 4 ? "success" : "sad");
    sfx("coin");
    void front;
  }
  function dropFx(fromEl, color) {
    sfx("drop");
    const slot = $("#cupslot");
    if (!fromEl || !slot) return;
    const cupEl = $(".cup", slot) || slot;
    const a = fromEl.getBoundingClientRect(), b = cupEl.getBoundingClientRect();
    const n = 5, STEPS2 = 22, SPLIT = 0.62;
    for (let k = 0; k < n; k++) {
      const sx = a.left + a.width / 2 + rand(-10, 10), sy = a.top + a.height / 2;
      const ball = h(`<div class="fx-ball" style="left:${sx - 7}px;top:${sy - 7}px;background-color:${color}"></div>`);
      document.body.appendChild(ball);
      const rx = b.left + b.width / 2 + rand(-b.width * 0.18, b.width * 0.18) - sx, ry = b.top - 16 - sy;
      const dy2 = b.top + b.height * 0.58 - (sy + ry);
      const rise = Math.max(40, Math.min(90, Math.abs(ry) * 0.35 + 36));
      const frames2 = [];
      for (let i = 0; i <= STEPS2; i++) {
        const t = i / STEPS2;
        let x, y, sc = 1, op = 1;
        if (t <= SPLIT) {
          const u = t / SPLIT;
          x = rx * (1 - Math.pow(1 - u, 2));
          y = ry * u - rise * 4 * u * (1 - u);
          sc = 1 + 0.15 * Math.sin(u * Math.PI);
        } else {
          const u = (t - SPLIT) / (1 - SPLIT);
          x = rx;
          y = ry + dy2 * u * u;
          sc = 1 - 0.25 * u;
          op = u > 0.85 ? 1 - (u - 0.85) / 0.15 : 1;
        }
        frames2.push({ transform: `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) scale(${sc.toFixed(2)})`, opacity: op, offset: t });
      }
      ball.animate(frames2, { duration: 820, delay: k * 95, easing: "linear", fill: "backwards" }).onfinish = () => {
        ball.remove();
        if (k === 0) {
          slot.classList.remove("plop");
          void slot.offsetWidth;
          slot.classList.add("plop");
        }
        if (k === n - 1) splash(slot, color);
      };
    }
  }
  function splash(cup, color) {
    const r = cup.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height * 0.5;
    fxSpark({ x, y }, 5);
    const ring = h(`<div class="fx-ripple" style="left:${x}px;top:${y}px;border-color:${color}"></div>`);
    document.body.appendChild(ring);
    setTimeout(() => ring.remove(), 520);
  }
  function flyCupIn(size) {
    const slot = $("#cupslot"), cupEl = slot?.firstElementChild;
    const stack2 = $(`.stack[data-size="${size}"]`);
    if (!cupEl || !stack2) return;
    const a = stack2.getBoundingClientRect(), b = cupEl.getBoundingClientRect();
    const dx = a.left + a.width / 2 - (b.left + b.width / 2), dy = a.top + a.height * 0.25 - (b.top + b.height / 2);
    const STEPS2 = 14, lift = 26, frames2 = [];
    for (let i = 0; i <= STEPS2; i++) {
      const t = i / STEPS2, e = 1 - Math.pow(1 - t, 3);
      frames2.push({ transform: `translate(${(dx * (1 - e)).toFixed(1)}px,${(dy * (1 - e) - lift * 4 * t * (1 - t)).toFixed(1)}px) scale(${(0.72 + 0.28 * e).toFixed(3)})`, opacity: Math.min(1, 0.25 + t * 4), offset: t });
    }
    frames2.push({ transform: "translate(0,0) scale(1.06,.93)", opacity: 1, offset: 0.93 }, { transform: "translate(0,0) scale(1)", opacity: 1, offset: 1 });
    frames2.sort((x, y) => x.offset - y.offset);
    cupEl.animate(frames2, { duration: 560, easing: "linear" });
  }
  function sealAnim() {
    const cupEl = $("#cupslot .cup"), sealer = $("#sealer");
    if (!cupEl || !sealer) return;
    const dur = Math.max(600, (SH.board?.sealMax || 1.2) * 1e3);
    const r = cupEl.getBoundingClientRect();
    sealer.classList.add("press");
    const lid = h(`<div class="fx-lid" style="left:${r.left - 3}px;top:${r.top - 6}px;width:${r.width + 6}px"></div>`);
    document.body.appendChild(lid);
    lid.animate([
      { transform: "translateY(-64px) scaleX(.86)", opacity: 0, offset: 0 },
      { transform: "translateY(-44px) scaleX(.92)", opacity: 1, offset: 0.2 },
      { transform: "translateY(0) scaleX(1)", opacity: 1, offset: 0.62, easing: "cubic-bezier(.4,0,1,.7)" },
      { transform: "translateY(4px) scaleX(1.04)", opacity: 1, offset: 0.74 },
      { transform: "translateY(0) scaleX(1)", opacity: 1, offset: 0.86 },
      { transform: "translateY(0) scaleX(1)", opacity: 1, offset: 1 }
    ], { duration: dur, easing: "ease-out" }).onfinish = () => lid.remove();
    cupEl.animate([
      { transform: "none", offset: 0 },
      { transform: "none", offset: 0.6 },
      { transform: "scale(1.05,.93)", offset: 0.72 },
      { transform: "scale(.99,1.03)", offset: 0.86 },
      { transform: "none", offset: 1 }
    ], { duration: dur, easing: "ease-out" });
    setTimeout(() => sealer.classList.remove("press"), dur);
    sfx("seal");
  }
  on("cup:pick", (size) => {
    setTimeout(() => {
      updateBoard(true);
      flyCupIn(size);
      sfx("cup");
    }, 0);
  });
  on("seal:start", () => {
    updateBoard(true);
    sealAnim();
  });
  on("seal:done", () => {
    sfx("ding");
    updateBoard(true);
    const cs = $("#cupslot");
    if (cs) {
      fxSpark({ x: cs.getBoundingClientRect().left + cs.offsetWidth / 2, y: cs.getBoundingClientRect().top + cs.offsetHeight * 0.35 }, 6);
      cs.classList.remove("plop");
      void cs.offsetWidth;
      cs.classList.add("plop");
    }
    const s = $("#sealer");
    s?.classList.add("ding");
    setTimeout(() => s?.classList.remove("ding"), 600);
  });
  on("top", () => updateBoard(true));
  on("flavor", () => updateBoard(true));
  on("auto:pour", () => updateBoard(true));
  on("trash", () => updateBoard(true));
  on("queue", () => {
    if (SH.on && S.phase === "sell" && SH.view === "counter") {
      refreshQueue();
      refreshCustomer();
    }
  });
  on("sel", () => {
    refreshQueue();
    refreshCustomer();
  });
  on("served", () => {
    updateBoard(true);
    refreshQueue();
    refreshCustomer();
  });
  on("left", (c) => {
    toast(`${c.tag} b\u1ECF v\u1EC1 v\xEC ch\u1EDD qu\xE1 l\xE2u \u{1F622}`, "err", 1500);
    sfx("sad");
  });
  on("balk", () => toast("H\xE0ng ch\u1EDD \u0111\u1EA7y, c\xF3 kh\xE1ch b\u1ECF \u0111i \u{1F636}", "err", 1200));
  on("ding", () => sfx("bell"));
  on("buyer", (id) => toast(`\u{1F9FA} Nh\xE2n vi\xEAn \u0111i ch\u1EE3 v\u1EEBa mua ${ITEMS[id].name}`, "", 1500));
  on("online:new", () => updatePhone());
  on("table:clean", ({ i, tip }) => {
    if (SH.view === "lobby") {
      markDirty("view");
      fxText(`+${fmtK(tip)}`, $(`[data-table="${i}"]`));
      sfx("coin");
    }
  });
  on("tables", () => {
    if (SH.view === "lobby") markDirty("view");
    else updateLobbyBtn();
  });
  function refreshQueue() {
    const row = $("#qrow");
    if (!row) return;
    const front = frontCustomer();
    row.innerHTML = SH.queue.map((c) => `<button class="qav ${front === c ? "on" : ""}" data-act="sel" data-cid="${c.id}" aria-label="Kh\xE1ch ${esc(c.tag)}"><span class="ring" data-ring="${c.id}" style="--p:${(c.p / c.maxP * 100).toFixed(0)}"></span><b>${c.avatar}</b></button>`).join("") || '<span class="q-empty">Ch\u01B0a c\xF3 kh\xE1ch...</span>';
  }
  function refreshCustomer() {
    const av = $("#cav"), bub = $("#cbub");
    if (!av) return;
    const c = frontCustomer();
    if (!c) {
      av.innerHTML = '<span class="idle">\u2615</span>';
      bub.innerHTML = '<div class="btxt dim">Qu\u1EA7y \u0111ang v\u1EAFng... chu\u1EA9n b\u1ECB ly n\u01B0\u1EDBc th\u1EADt ngon nh\xE9!</div>';
      return;
    }
    const o = c.order;
    av.innerHTML = `<span class="face">${c.avatar}</span>`;
    bub.innerHTML = `<div class="b-row">${orderCup(o)}<div><span class="atag">${esc(c.tag)}</span><div class="btxt">${esc(c.text)}</div></div></div>
    <div class="pat"><span>KI\xCAN NH\u1EAAN</span><div class="bar" id="patBar"><i style="width:${(c.p / c.maxP * 100).toFixed(0)}%"></i></div></div>`;
  }
  function updateBoard(force) {
    const slot = $("#cupslot"), txt = $("#boardTxt"), bar2 = $("#pourbar");
    if (!slot) return;
    const b = SH.board;
    if (!b) {
      slot.innerHTML = "";
      txt.style.display = "";
      bar2.classList.remove("on");
      return;
    }
    txt.style.display = "none";
    bar2.classList.add("on");
    const sig = `${b.phase}|${b.tea}|${b.flavor}|${b.tops.join(",")}|${b.size}`;
    if (force || slot.dataset.sig !== sig) {
      slot.dataset.sig = sig;
      slot.innerHTML = cupHTML(b);
    }
    const liq = slot.querySelector(".c-liq");
    if (liq) liq.style.height = `${Math.min(100, b.fill * 86)}%`;
    $("#pbFill").style.width = `${clamp(b.fill / 1.25 * 100, 0, 100)}%`;
    $("#pbFill").className = b.fill > 1.02 ? "over" : b.fill >= 0.85 ? "ok" : "";
    slot.classList.toggle("ready", b.phase === "ready");
  }
  function updatePhone() {
    const bd = $("#phoneBadge");
    if (!bd) return;
    bd.textContent = SH.onlineQ.length;
    bd.parentElement.classList.toggle("has", SH.onlineQ.length > 0);
  }
  function updateLobbyBtn() {
    const c = $("#lobbyCnt");
    if (!c) return;
    const dirty2 = SH.tables.filter((t) => t.s === "dirty").length;
    c.textContent = `${SH.tables.filter((t) => t.s === "busy").length}/${SH.tables.length}`;
    $("#lobbyGo")?.classList.toggle("alert", dirty2 > 0);
  }
  function hintText() {
    if (!S.settings.hints) return "";
    const c = frontCustomer();
    if (!c) return "Ch\u1EDD kh\xE1ch gh\xE9 qu\u1EA7y...";
    const o = c.order, b = SH.board;
    if (!b) return `B\u01B0\u1EDBc 1: ch\u1EA1m ch\u1ED3ng ly ${o.size}`;
    if (b.phase === "sealing") return "\u0110ang \u0111\xF3ng n\u1EAFp...";
    if (b.phase === "ready") return "Xong r\u1ED3i! Ch\u1EA1m ly \u0111\u1EC3 giao cho kh\xE1ch";
    if (b.pouring) return "Ch\u1EA1m l\u1EA7n n\u1EEFa \u0111\u1EC3 d\u1EEBng khi thanh t\u1EDBi v\xF9ng v\xE0ng";
    if (!b.tea) return `B\u01B0\u1EDBc 2: ch\u1EA1m b\xECnh ${ITEMS[o.tea].name} \u0111\u1EC3 r\xF3t`;
    if (b.size !== o.size) return `Kh\xE1ch mu\u1ED1n size ${o.size}, \u0111\u1ED5 ly (\u{1F5D1}\uFE0F) v\xE0 l\u1EA5y l\u1EA1i nh\xE9`;
    if (b.tea !== o.tea) return `Sai tr\xE0! Kh\xE1ch mu\u1ED1n ${ITEMS[o.tea].name}`;
    if (o.flavor && !b.flavor) return `B\u01B0\u1EDBc 3: ch\u1EA1m chai h\u01B0\u01A1ng ${ITEMS[o.flavor].name}`;
    const miss = o.tops.filter((t) => !b.tops.includes(t));
    if (miss.length) return `B\u01B0\u1EDBc 4: th\xEAm topping ${miss.map((t) => ITEMS[t].name).join(", ")}`;
    return "B\u01B0\u1EDBc 5: ch\u1EA1m M\xC1Y \u0110\xD3NG N\u1EAEP \u1EDF b\xEAn ph\u1EA3i";
  }
  var cntT = 0;
  function frameSell(dt, force) {
    if (S.phase !== "sell") return;
    updateClock();
    if (SH.view === "lobby") {
      lobbyFrame();
      return;
    }
    if (!root || !root.isConnected) return;
    cntT -= dt;
    const front = frontCustomer();
    const bar2 = $("#patBar > i");
    if (bar2 && front) {
      const r = front.p / front.maxP;
      bar2.style.width = `${(r * 100).toFixed(0)}%`;
      bar2.parentElement.className = `bar ${r < 0.25 ? "danger" : r < 0.55 ? "warn" : ""}`;
    }
    for (const c of SH.queue) {
      const rg = $(`[data-ring="${c.id}"]`);
      if (rg) rg.style.setProperty("--p", (c.p / c.maxP * 100).toFixed(0));
    }
    const hint = $("#hint");
    if (hint) {
      const t = hintText();
      if (hint.textContent !== t) hint.textContent = t;
      hint.style.display = t ? "" : "none";
    }
    updateBoard(false);
    const st = $("#stream");
    const b = SH.board;
    const cupEl = $("#cupslot .cup");
    if (b?.pouring && b.tea && cupEl) {
      const d = $(`.disp[data-tea="${b.tea}"] .tap`);
      if (d && st) {
        const a = d.getBoundingClientRect(), r0 = root.getBoundingClientRect();
        const cr = cupEl.getBoundingClientRect(), sh = cupEl._shift || { x: 0, y: 0 };
        const baseCx = cr.left + cr.width / 2 - sh.x, baseTop = cr.top - sh.y;
        const gap = 30;
        const nx = a.left + a.width / 2 - baseCx, ny = a.bottom + gap - baseTop;
        if (!cupEl._shift || Math.abs(sh.x - nx) > 0.5 || Math.abs(sh.y - ny) > 0.5) {
          cupEl._shift = { x: nx, y: ny };
          cupEl.style.transform = `translate(${nx.toFixed(1)}px,${ny.toFixed(1)}px)`;
          cupEl.classList.add("under-tap");
        }
        const mouthY = baseTop + ny + 4;
        st.style.cssText = `display:block;left:${a.left + a.width / 2 - 4 - r0.left}px;top:${a.bottom - 2 - r0.top}px;height:${Math.max(0, mouthY - a.bottom + 2)}px;background-color:${ITEMS[b.tea].color};color:${ITEMS[b.tea].color}`;
        if (Math.random() < 0.15) sfx("pour");
      }
    } else {
      if (st) st.style.display = "none";
      if (cupEl && cupEl._shift) {
        cupEl._shift = null;
        cupEl.style.transform = "";
        cupEl.classList.remove("under-tap");
      }
    }
    if (cntT <= 0 || force) {
      cntT = 0.25;
      for (const el of $$("[data-cnt]", root)) {
        const id = el.dataset.cnt, q = stockQty(id);
        el.textContent = q;
        el.parentElement.classList.toggle("empty", q === 0);
      }
      updatePhone();
      updateLobbyBtn();
      for (const d of $$(".disp", root)) d.classList.toggle("pouring", !!(b?.pouring && b.tea === d.dataset.tea));
    }
  }
  function openOnlineList() {
    const draw = () => {
      if (!SH.onlineQ.length) return '<p class="m-text center">Ch\u01B0a c\xF3 \u0111\u01A1n online n\xE0o. C\u1EA7n m\u1EDF app trong N\xE2ng c\u1EA5p \u203A Online.</p>';
      return SH.onlineQ.map((q) => `<div class="on-row"><span class="on-app" style="background:${q.app.color}">${q.app.name[0]}</span><div class="grow"><b>${q.app.name}</b><small>${ITEMS[q.o.tea].name} ${q.o.size}${q.o.flavor ? " \xB7 " + ITEMS[q.o.flavor].name : ""}${q.o.tops.length ? " \xB7 " + q.o.tops.length + " topping" : ""}</small></div><button class="btn pri sm" data-act="acc" data-id="${q.id}">Nh\u1EADn \xB7 ${Math.ceil(q.exp)}s</button></div>`).join("");
    };
    const m = openModal({ id: "online", cls: "small", html: `<h3 class="m-title">\u{1F4F1} \u0110\u01A1n online</h3><div id="onl">${draw()}</div><button class="btn ghost block" data-act="x">\u0110\xF3ng</button>` });
    bindActions(m.body, { acc: (t) => {
      const e = acceptOnline(+t.dataset.id);
      if (e) toast(e, "err");
      else {
        toast("\u0110\xE3 nh\u1EADn \u0111\u01A1n!", "ok");
        $("#onl", m.body).innerHTML = draw();
      }
    }, x: () => m.close() });
  }
  function renderLobby(view) {
    const busy = SH.tables.filter((t) => t.s === "busy").length;
    view.innerHTML = `<div class="lobby" id="lobby">
    <div class="lobby-top"><button class="btn pri" data-act="back">\u2190 V\xE0o qu\u1EA7y<br/>pha ch\u1EBF</button>
      <div class="lobby-stat"><span>\u{1F465} Ch\u1EDD: <b>${SH.queue.length}</b> kh\xE1ch</span><span>\u{1FA91} B\xE0n: <b>${busy}/${SH.tables.length}</b> b\xE0n</span><span>\u{1F4B0} <b>${fmtK(S.money)}</b></span></div></div>
    <div class="lcard"><div class="lc-h"><h4>\u{1F9CB} Qu\u1EA7y Pha Ch\u1EBF & H\xE0ng Ch\u1EDD</h4><span class="pill">\u0110ang ch\u1EDD: ${SH.queue.length} ng\u01B0\u1EDDi</span></div>
      <p class="muted">Kh\xE1ch t\u1EF1 \u0111\u1ED9ng \u0111\u1EBFn x\u1EBFp h\xE0ng (t\u1ED1i \u0111a ${bonus().queue} kh\xE1ch ch\u1EDD).</p>
      <div class="lobby-q">${SH.queue.map((c) => `<span class="lq">${c.avatar}</span>`).join("") || "<em>Ch\u01B0a c\xF3 kh\xE1ch x\u1EBFp h\xE0ng</em>"}</div></div>
    <div class="lcard"><div class="lc-h"><h4>\u{1FA91} Khu B\xE0n Gh\u1EBF Kh\xE1ch Ng\u1ED3i</h4><span class="pill y">\u{1FA91} +10% ng\u1ED3i t\u1EA1i qu\xE1n</span></div>
      <p class="muted">Kh\xE1ch ch\u1EC9 v\xE0o ng\u1ED3i khi b\xE0n \u0111\u01B0\u1EE3c d\u1ECDn s\u1EA1ch \u2728 \u2014 ch\u1EA1m b\xE0n d\u01A1 \u0111\u1EC3 d\u1ECDn.</p>
      <div class="tables">${SH.tables.map((t, i) => `<button class="tbl ${t.s}" data-act="table" data-i="${i}" data-table="${i}" aria-label="B\xE0n ${i + 1}"><span class="t-ico">${t.s === "busy" ? t.av || "\u{1F9D1}" : t.s === "dirty" ? "\u{1F9F9}" : "\u2728"}</span><small>${t.s === "busy" ? "\u0110ang ng\u1ED3i" : t.s === "dirty" ? "D\u1ECDn b\xE0n!" : "B\xE0n s\u1EA1ch"}</small></button>`).join("")}</div></div>
  </div>`;
    bindActions($("#lobby"), {
      back: () => {
        SH.view = "counter";
        markDirty("view");
      },
      table: (t) => cleanTable(+t.dataset.i)
    });
  }
  var lobbyT = 0;
  function lobbyFrame() {
    lobbyT++;
    if (lobbyT % 20 === 0 && $("#lobby")) {
      const busy = SH.tables.filter((t) => t.s === "busy").length;
      const st = $(".lobby-stat");
      if (st) st.innerHTML = `<span>\u{1F465} Ch\u1EDD: <b>${SH.queue.length}</b> kh\xE1ch</span><span>\u{1FA91} B\xE0n: <b>${busy}/${SH.tables.length}</b> b\xE0n</span><span>\u{1F4B0} <b>${fmtK(S.money)}</b></span>`;
    }
  }

  // js/panels1.js
  var subtab = (k, d) => S.subtab[k] || d;
  var tabs = (key, list, def) => `<div class="tabs">${list.map(([id, label]) => `<button class="tab ${subtab(key, def) === id ? "on" : ""}" data-act="sub" data-k="${key}" data-v="${id}">${label}</button>`).join("")}</div>`;
  var setSub = (t) => {
    S.subtab[t.dataset.k] = t.dataset.v;
    markDirty("panel");
  };
  var KHO_TABS = () => [["tra", "\u{1FAD6} Tr\xE0"], ["top", "\u{1F9CB} Topping"], ["dc", "\u{1F964} D\u1EE5ng c\u1EE5"], ...FLAVORS.some((f) => S.unlocked[f]) ? [["huong", "\u{1F353} H\u01B0\u01A1ng"]] : []];
  function khoRow(id) {
    const it = ITEMS[id];
    const qty = stockQty(id), plan = S.plan[id] || 0;
    const unit = unitSize(id);
    const exp = expiringToday(id);
    const life = lifeDays(id);
    const profit = it.price ? priceOf(id) - costOf(id) : 0;
    const pctMargin = it.price ? Math.round(profit / priceOf(id) * 100) : 0;
    const step = 1;
    return `<div class="krow">
    <span class="k-ico" style="background:${it.color}33">${it.icon}</span>
    <div class="k-main"><div class="k-t"><b>${it.name}</b>${life ? `<span class="life">\u23F3 ${life} ng\xE0y</span>` : ""}</div>
      ${it.price && it.kind !== "supply" ? `<span class="sale">\u{1F4B5} B\xE1n ${pctMargin}% (+${fmtK(profit)})</span>` : ""}
      <small>\u{1F4E6} ${qty}${it.kind === "flavor" ? " ly" : ""} \xB7 ${fmtK(costOf(id) * (it.kind === "flavor" ? FLAVOR_BOTTLE : 1))}${it.kind === "flavor" ? "/chai" : "/ly"}${exp ? ` \xB7 <em class="warn">\u26A0\uFE0F ${exp} h\u1EBFt h\u1EA1n h\xF4m nay</em>` : ""}${S.lastUsed[id] ? ` \xB7 \u{1F3ED} d\xF9ng ${S.lastUsed[id]}` : ""}</small>
      <small class="plan">${plan ? `+${plan * unit}${it.kind === "flavor" ? ` ly (${plan} chai)` : ""} \xB7 ${fmtK(unitCost(id) * plan)}` : "&nbsp;"}</small></div>
    <div class="stepper"><button data-act="k-" data-id="${id}" data-step="${step}" aria-label="Gi\u1EA3m">\u2212</button><input class="num" type="number" inputmode="numeric" min="0" max="999" value="${plan}" data-plan="${id}" aria-label="S\u1ED1 l\u01B0\u1EE3ng ${it.name}"><button data-act="k+" data-id="${id}" data-step="${step}" aria-label="T\u0103ng">+</button></div>
  </div>`;
  }
  var kho = {
    html() {
      const t = subtab("kho", "tra");
      let list = [];
      let head = "";
      if (t === "tra") list = TEAS.filter((i) => S.unlocked[i]);
      else if (t === "dc") list = SUPPLIES;
      else if (t === "huong") {
        list = FLAVORS.filter((i) => S.unlocked[i]);
        head = `<p class="note">\u{1F353} 1 chai = ${FLAVOR_BOTTLE} ly, d\xF9ng \u0111\u01B0\u1EE3c 7 ng\xE0y t\xEDnh c\u1EA3 ng\xE0y mua. H\u1EBFt chai th\xEC ph\u1EA3i mua chai m\u1EDBi.</p>`;
      } else {
        return `${tabs("kho", KHO_TABS(), "tra")}${TOP_GROUPS.map((g) => {
          const items = TOPS.filter((i) => ITEMS[i].group === g && S.unlocked[i]);
          return items.length ? `<h5 class="grp">${g}</h5>${items.map(khoRow).join("")}` : "";
        }).join("")}${khoLegend()}`;
      }
      return `${tabs("kho", KHO_TABS(), "tra")}${head}${list.map(khoRow).join("")}${khoLegend()}`;
    },
    acts: {
      sub: setSub,
      "k+": (t) => {
        const id = t.dataset.id;
        setPlan(id, (S.plan[id] || 0) + +t.dataset.step);
      },
      "k-": (t) => {
        const id = t.dataset.id;
        setPlan(id, (S.plan[id] || 0) - +t.dataset.step);
      }
    },
    bind(root2) {
      for (const inp of root2.querySelectorAll("[data-plan]")) {
        inp.addEventListener("focus", () => inp.select());
        inp.addEventListener("change", () => setPlan(inp.dataset.plan, Math.round(+inp.value || 0)));
      }
    }
  };
  var khoLegend = () => '<div class="legend">\u{1F4E6} \u0111ang c\xF3 \xB7 \u{1F3ED} h\xF4m qua d\xF9ng \xB7 \u26A0\uFE0F h\u1EBFt h\u1EA1n h\xF4m nay</div>';
  var GIA_TABS = () => [["tra", "\u{1FAD6} Tr\xE0"], ["huong", "\u{1F353} H\u01B0\u01A1ng"], ["top", "\u{1F9CB} Topping"], ["size", "\u2B06\uFE0F Size"]];
  var giaRow = (id) => {
    const it = ITEMS[id];
    const cost = costOf(id);
    const p = priceOf(id);
    return `<div class="grow-row"><span class="k-ico" style="background:${it.color}33">${it.icon}</span>
    <div class="k-main"><b>${it.name}</b><small>\u{1F4A1} ${fmtK(p)} \xB7 V\u1ED1n ${fmtK(cost)} \xB7 L\xE3i ${fmtK(p - cost)}</small></div>
    <div class="pinput"><input type="number" inputmode="decimal" min="0" step="0.5" value="${p / 1e3}" data-price="${id}" aria-label="Gi\xE1 ${it.name}"><span>k</span></div></div>`;
  };
  var giaban = {
    html() {
      const t = subtab("gia", "tra");
      let body = "";
      if (t === "tra") body = TEAS.filter((i) => S.unlocked[i]).map(giaRow).join("");
      else if (t === "huong") {
        const l = FLAVORS.filter((i) => S.unlocked[i]);
        body = l.length ? l.map(giaRow).join("") : '<div class="lockbox">\u{1F512}\u{1F6E0}\uFE0F<br/>M\u1EDF kh\xF3a H\u01B0\u01A1ng trong N\xE2ng c\u1EA5p \u203A H\u01B0\u01A1ng</div>';
      } else if (t === "top") {
        const l = TOPS.filter((i) => S.unlocked[i]);
        body = TOP_GROUPS.map((g) => {
          const x = l.filter((i) => ITEMS[i].group === g);
          return x.length ? `<h5 class="grp">${g}</h5>${x.map(giaRow).join("")}` : "";
        }).join("");
      } else body = `<div class="grow-row"><span class="k-ico">\u2B06\uFE0F</span><div class="k-main"><b>Size L</b><small>\u{1F4A1} ${fmtK(priceOf("sizeL"))} \xB7 ph\u1EE5 thu so v\u1EDBi size M</small></div><div class="pinput"><input type="number" inputmode="decimal" min="0" max="${SIZE_L_CAP / 1e3}" step="0.5" value="${priceOf("sizeL") / 1e3}" data-price="sizeL" aria-label="Gi\xE1 size L"><span>k</span></div></div>`;
      return `<details class="warnbox"><summary>\u26A0\uFE0F Quy t\u1EAFc gi\xE1 b\xE1n <small>${safePrice() ? "\xB7 \u0111\xE3 c\xF3 Qu\u1EA3n Gia" : "\xB7 ch\u01B0a c\xF3 Qu\u1EA3n Gia"}</small></summary>
      <p>\u2022 M\xF3n n\xE0o (tr\xE0, h\u01B0\u01A1ng, topping) tr\xEAn <b>50k</b>: Kh\xE1ch ch\xEA m\u1EAFc, qu\xE1n v\u1EAFng <b>80% kh\xE1ch</b>.</p>
      <p>\u2022 M\u1ED9t ly tr\xEAn <b>120k</b>: <b>60% kh\xE1ch b\u1ECF \u0111i</b> v\xE0 \u0111\xE1nh gi\xE1 1\u2605-2\u2605.</p>
      <p>\u2022 Size L tr\xEAn <b>20k</b> l\xE0 \u0111\u1EAFt (90% kh\xE1ch n\xE9), size L t\u1ED1i \u0111a <b>50k</b> (\u0111\u1EC3 \u0111\xFAng m\u1EE9c n\xE0y kh\xF4ng ai ch\u1ECDn v\xE0 qu\xE1n v\u1EAFng 80%).</p>
      <p>\u2022 H\u01B0\u01A1ng & Topping tr\xEAn <b>20k</b>: 80% kh\xE1ch kh\xF4ng g\u1ECDi; tr\xEAn <b>30k</b>: kh\xF4ng ai g\u1ECDi.</p>
      <p class="tip">\u{1F4A1} Ch\u1EC9 \u0111\u01B0\u1EE3c t\u0103ng gi\xE1 an to\xE0n kh\xF4ng b\u1ECB ph\u1EA1t khi s\u1EDF h\u1EEFu <b>Qu\u1EA3n Gia</b> (m\u1EE5c Nh\xE2n s\u1EF1 \u203A Qu\u1EA3n l\xFD t\u1EADp s\u1EF1)!</p></details>
      ${tabs("gia", GIA_TABS(), "tra")}${body}`;
    },
    acts: {
      sub: setSub
    },
    bind(root2) {
      root2.querySelectorAll("[data-price]").forEach((inp) => inp.addEventListener("change", () => {
        setPrice(inp.dataset.price, Math.round(parseFloat(inp.value || "0") * 1e3));
        markDirty("panel", "board");
      }));
    }
  };
  var NC_TABS = [["tra", "\u{1F375} Tr\xE0"], ["huong", "\u{1F353} H\u01B0\u01A1ng"], ["top", "\u{1F9CB} Topping"], ["trangbi", "\u{1F6E0}\uFE0F Trang b\u1ECB"], ["decor", "\u{1F43E} Decor Th\xFA C\u01B0ng"], ["nv", "\u{1F3C6} Nh\xE2n vi\xEAn"], ["online", "\u{1F4F2} Online"]];
  function catCard(key) {
    const c = CATEGORIES[key], lvl = S.cat[key] || 0;
    return `<div class="catcard"><div><b>\u2B50 N\xC2NG C\u1EA4P C\u1EA4P \u0110\u1ED8 (LEVEL)</b><h4>H\u1EA1ng m\u1EE5c: ${c.name} (C\u1EA5p ${lvl})</h4><p>${c.desc}</p><p class="eff">Hi\u1EC7u qu\u1EA3 hi\u1EC7n t\u1EA1i: <b>+${(lvl * c.per * 100).toFixed(1)}%</b></p></div>
    <button class="btn pri sm" data-act="cat" data-k="${key}">N\xE2ng l\xEAn C\u1EA5p ${lvl + 1}<br/>${fmtK(catCost(lvl))}</button></div>`;
  }
  function itemBuyRow(id, extra = "") {
    const it = ITEMS[id];
    if (S.unlocked[id]) {
      const on2 = S.onMenu[id];
      return `<div class="nrow"><span class="k-ico" style="background:${it.color}33">${it.icon}</span><div class="k-main"><b>${it.name}</b>${extra}</div><button class="btn sm ${on2 ? "ghost" : "pri"}" data-act="menu" data-id="${id}">${on2 ? "\u2713 B\u1ECF kh\u1ECFi menu" : "Th\xEAm v\xE0o menu"}</button></div>`;
    }
    return `<div class="nrow"><span class="k-ico" style="background:${it.color}33">${it.icon}</span><div class="k-main"><b>${it.name}</b>${extra || (it.kind === "flavor" ? '<small class="red">H\u1EBFt h\xE0ng, ch\u01B0a c\xF3 trong menu</small>' : "")}</div><button class="btn sm gold" data-act="unlock" data-id="${id}">${fmtK(it.unlock)}<br/>Mua</button></div>`;
  }
  var nangcap = {
    html() {
      const t = subtab("nc", "tra");
      let body = "";
      if (t === "tra") body = catCard("tra") + TEAS.map((i) => itemBuyRow(i)).join("");
      else if (t === "huong") body = catCard("huong") + `<p class="note">1 chai = ${FLAVOR_BOTTLE} ly, d\xF9ng \u0111\u01B0\u1EE3c 7 ng\xE0y t\xEDnh c\u1EA3 ng\xE0y mua. Mua 2 chai \u0111\u01B0\u1EE3c ${FLAVOR_BOTTLE * 2} ly. H\u1EBFt chai th\xEC ph\u1EA3i mua chai m\u1EDBi m\u1EDBi d\xF9ng \u0111\u01B0\u1EE3c, ch\u01B0a h\u1EBFt h\u1EA1n b\u1ECB \u0111\u1ED5 b\u1ECF.</p>` + FLAVORS.map((i) => itemBuyRow(i, S.unlocked[i] ? `<small>C\xF2n ${stockQty(i)} ly</small>` : "")).join("");
      else if (t === "top") body = catCard("top") + TOP_GROUPS.map((g) => `<h5 class="grp">${g}</h5>` + TOPS.filter((i) => ITEMS[i].group === g).map((i) => itemBuyRow(i)).join("")).join("");
      else if (t === "trangbi") body = EQUIP.map(equipRow).join("");
      else if (t === "decor") body = `<h4 class="subh">\u{1F3E1} Trang Tr\xED & N\xE2ng C\u1EA5p Nh\xE0 Th\xFA C\u01B0ng (Pet House Decor)</h4>${S.pet ? "" : '<p class="note">C\u1EA7n nh\u1EADn nu\xF4i th\xFA c\u01B0ng \u1EDF menu Th\xFA c\u01B0ng tr\u01B0\u1EDBc khi mua.</p>'}` + PET_DECOR.map((d) => `<div class="nrow"><span class="k-ico">${d.icon}</span><div class="k-main"><b>${d.name}</b><small>${d.desc}</small><small class="eff">\u2728 ${d.fx}</small></div><button class="btn sm ${S.petDecor[d.id] ? "ghost" : "gold"}" data-act="decor" data-id="${d.id}" ${S.petDecor[d.id] ? "disabled" : ""}>${S.petDecor[d.id] ? "\u2713 \u0110\xE3 c\xF3" : fmtK(d.cost) + "<br/>Mua"}</button></div>`).join("");
      else if (t === "nv") body = catCard("nv") + `<div class="note">Thu\xEA & qu\u1EA3n l\xFD nh\xE2n vi\xEAn \u1EDF menu <b>Qu\u1EA3n l\xFD nh\xE2n s\u1EF1</b>. M\u1ED7i c\u1EA5p t\u0103ng t\u1ED1c \u0111\u1ED9 l\xE0m vi\u1EC7c c\u1EE7a to\xE0n b\u1ED9 nh\xE2n vi\xEAn.</div><button class="btn pri block" data-act="goto" data-to="nhansu">\u{1F3C6} \u0110i t\u1EDBi Qu\u1EA3n l\xFD nh\xE2n s\u1EF1</button>`;
      else body = onlineHTML();
      return `<div class="tabs scroll">${NC_TABS.map(([id, l]) => `<button class="tab ${t === id ? "on" : ""}" data-act="sub" data-k="nc" data-v="${id}">${l}</button>`).join("")}</div>${body}`;
    },
    acts: {
      sub: setSub,
      cat: (t) => {
        const e = buyCategory(t.dataset.k);
        if (e) {
          toast(e, "err");
          sfx("error");
        } else {
          sfx("success");
          fxSpark(t, 6);
          toast("N\xE2ng c\u1EA5p th\xE0nh c\xF4ng!", "ok");
        }
      },
      menu: (t) => {
        const e = toggleMenu(t.dataset.id);
        if (e) toast(e, "err");
      },
      unlock: (t) => {
        const e = unlockItem(t.dataset.id);
        if (e) {
          toast(e, "err");
          sfx("error");
        } else {
          sfx("unlock");
          fxSpark(t, 8);
          toast(`\u0110\xE3 m\u1EDF kh\xF3a ${ITEMS[t.dataset.id].name}!`, "ok");
        }
      },
      equip: (t) => {
        const e = buyEquip(t.dataset.id);
        if (e) {
          toast(e, "err");
          sfx("error");
        } else {
          sfx("unlock");
          fxSpark(t, 8);
          toast("\u0110\xE3 n\xE2ng c\u1EA5p trang b\u1ECB!", "ok");
        }
      },
      decor: (t) => {
        const e = buyDecor(t.dataset.id);
        if (e) {
          toast(e, "err");
          sfx("error");
        } else {
          sfx("unlock");
          toast("\u0110\xE3 mua!", "ok");
        }
      },
      app: (t) => {
        const e = toggleApp(t.dataset.id);
        if (e) {
          toast(e, "err");
          sfx("error");
        } else toast("\u0110\xE3 c\u1EADp nh\u1EADt \u1EE9ng d\u1EE5ng", "ok");
      }
    }
  };
  function equipRow(eq) {
    const lv = equipLevel(eq.id), next = equipNext(eq.id);
    const cur2 = lv > 0 ? eq.tiers[lv - 1] : null;
    return `<div class="erow"><span class="k-ico big">${eq.icon}</span><div class="k-main"><div class="k-t"><b>${eq.name}</b><span class="tier">C${Math.max(lv, 1)}</span></div>
    <small>${cur2 ? `${cur2.n}: ${cur2.d}` : "Ch\u01B0a s\u1EDF h\u1EEFu"}</small>
    <div class="pips">${eq.tiers.map((_, i) => `<i class="${i < lv ? "on" : ""}"></i>`).join("")}</div>
    ${next ? `<button class="btn sm gold full" data-act="equip" data-id="${eq.id}">L\xEAn C${lv + 1} \xB7 ${next.n} \xB7 ${fmtK(next.c)}</button>` : '<button class="btn sm ghost full" disabled>\u0110\xE3 \u0111\u1EA1t c\u1EA5p t\u1ED1i \u0111a</button>'}</div></div>`;
  }
  function onlineHTML() {
    const pr = onlineProgress();
    const bar2 = (l, v, t, f) => `<div class="gate"><span>${l}</span><div class="bar"><i style="width:${Math.min(100, v / t * 100)}%"></i></div><b>${f(v)}/${f(t)}</b></div>`;
    const ok = pr.profit >= ONLINE_GATE.profit && pr.orders >= ONLINE_GATE.orders;
    return `${catCard("online")}
    <div class="catcard col"><h4>\u{1F4F2} M\u1EDF b\xE1n Online (${APPS.map((a) => a.name).join(", ")})</h4>
      ${bar2("\u{1F4B0} l\u1EE3i nhu\u1EADn", pr.profit, ONLINE_GATE.profit, (x) => fmtK(Math.max(0, x)))}${bar2("\u{1F9CB} \u0111\u01A1n", pr.orders, ONLINE_GATE.orders, (x) => x)}${bar2("\u2B50 \u0111\xE1nh gi\xE1", pr.rating, ONLINE_GATE.rating, (x) => x.toFixed(1))}
      <p class="note">Khi \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n, c\u1EA3 ${APPS.length} app \u0111\u01B0\u1EE3c k\xEDch ho\u1EA1t! M\u1ED7i tablet ch\u1EA1y 1 app. C\u1EA7n duy tr\xEC \u0111\xE1nh gi\xE1 t\u1EEB 4,0\u2605 tr\u1EDF l\xEAn. Ph\xED app \u2212${APP_FEE * 100}%. Tablet \u0111ang c\xF3: <b>${tabletsOwned()}/4</b>.</p></div>
    ${APPS.map((a) => `<div class="nrow"><span class="app-dot" style="background:${a.color}">${a.name[0]}</span><div class="k-main"><b>${a.name}</b><small>M\u1EDF c\xF9ng ${a.name} \xB7 c\u1EA7n \u2B50 ${ONLINE_GATE.rating.toFixed(1)} tr\u1EDF l\xEAn \xB7 m\u1ED7i tablet ch\u1EA1y 1 app</small></div>
      <button class="btn sm ${S.apps[a.id] ? "ghost" : ok ? "pri" : "ghost"}" data-act="app" data-id="${a.id}">${S.apps[a.id] ? "\u2713 \u0110ang b\u1EADt" : ok ? "B\u1EADt app" : "Ch\u01B0a \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n"}</button></div>`).join("")}`;
  }
  var PANELS1 = { kho, giaban, nangcap };

  // js/panels2.js
  function staffCard(st) {
    const hired = !!S.staff[st.id];
    const why = hireBlock(st.id);
    const wageTxt = `${fmtK(st.wage)}/ng\xE0y${st.revPct ? ` + ${st.revPct * 100}% doanh thu` : ""}`;
    return `<div class="staffcard ${hired ? "hired" : ""}"><div class="sc-top"><span class="sc-av">${st.icon}</span><div class="grow"><b>${esc(st.name)}</b><small>(${esc(st.role)})</small>
      <div class="sc-st">${hired ? "\u{1F7E2} \u0110ang l\xE0m" : "\u26AA Ch\u01B0a tuy\u1EC3n"}</div><div class="sc-w">\u{1F4B5} L\u01B0\u01A1ng ${wageTxt}</div></div>
      ${hired ? `<button class="btn ghost sm" data-act="fire" data-id="${st.id}">Cho ngh\u1EC9</button>` : why ? `<span class="why">${esc(why)}</span>` : `<button class="btn pri sm" data-act="hire" data-id="${st.id}">${fmtK(st.hire)}<br/>Thu\xEA</button>`}</div>
    <p class="sc-d">${esc(st.desc)}</p></div>`;
  }
  var nhansu = {
    html() {
      const n = S.kpi.shifts;
      const callPct = Math.min(8, staffCount());
      const hiredList = STAFF.filter((s) => S.staff[s.id]);
      const avail = STAFF.filter((s) => !S.staff[s.id]);
      return `<div class="kpi"><div class="kpi-h"><b>\u{1F4CA} Chu k\u1EF3 x\xE9t KPI & Tr\u1EA3 l\u01B0\u01A1ng 7 ca b\xE1n n\u01B0\u1EDBc</b><span class="chip">Ca ${n}/7</span></div>
      <div class="bar"><i style="width:${(n / 7 * 100).toFixed(0)}%"></i></div>
      <p>\u0110\xE3 t\xEDch lu\u1EF9 ${n}/7 ca b\xE1n. C\xF2n ${7 - n} ca b\xE1n n\u1EEFa s\u1EBD \u0111\u1EBFn \u0111\u1EE3t x\xE9t KPI & thanh to\xE1n d\u1ED3n ti\u1EC1n l\u01B0\u01A1ng, ti\u1EC1n th\u01B0\u1EDFng \u0111\u1ECBnh k\u1EF3 cho to\xE0n b\u1ED9 nh\xE2n vi\xEAn.</p>
      <span class="chip green">\u{1F4E3} G\u1ECDi th\xEAm kh\xE1ch: +${callPct}%</span>
      <button class="btn soft block" data-act="kpi">\u{1F50D} Xem chi ti\u1EBFt KPI & Phong \u0111\u1ED9 nh\xE2n vi\xEAn</button></div>
      ${hiredList.length ? `<h5 class="grp">\u0110\u1ED9i ng\u0169 qu\xE1n (${hiredList.length})</h5>${hiredList.map(staffCard).join("")}` : `<div class="emptybox">\u{1F468}\u200D\u{1F373}<b>Ch\u01B0a c\xF3 nh\xE2n vi\xEAn n\xE0o trong \u0111\u1ED9i ng\u0169 qu\xE1n</b><p>B\u1EA1n c\xF3 th\u1EC3 b\u1EA5m <b>Thu\xEA</b> ngay \u1EE9ng vi\xEAn b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u ch\u1EA5m c\xF4ng & x\xE9t KPI.</p></div>`}
      <h5 class="grp">\u2795 TUY\u1EC2N TH\xCAM NH\xC2N VI\xCAN M\u1EDAI (${avail.length}):</h5>${avail.map(staffCard).join("")}`;
    },
    acts: {
      hire: (t) => {
        const e = hire(t.dataset.id);
        if (e) {
          toast(e, "err");
          sfx("error");
        } else {
          sfx("success");
          toast("\u0110\xE3 thu\xEA nh\xE2n vi\xEAn m\u1EDBi! \u{1F44F}", "ok");
        }
      },
      fire: (t) => confirmBox("Cho ngh\u1EC9 vi\u1EC7c?", "Nh\xE2n vi\xEAn s\u1EBD r\u1EDDi qu\xE1n v\xE0 b\u1EA1n kh\xF4ng \u0111\u01B0\u1EE3c ho\xE0n ph\xED tuy\u1EC3n d\u1EE5ng.", () => {
        fire(t.dataset.id);
        toast("\u0110\xE3 cho ngh\u1EC9 vi\u1EC7c", "");
      }, "Cho ngh\u1EC9", true),
      kpi: () => {
        const rows = STAFF.filter((s) => S.staff[s.id]);
        alertBox("\u{1F4CB} KPI & phong \u0111\u1ED9 nh\xE2n vi\xEAn", rows.length ? rows.map((s) => `<div class="dl"><span>${s.icon} ${esc(s.name)}</span><b>${S.staff[s.id].shifts || 0} ca \xB7 ${fmtK(s.wage)}/ng\xE0y</b></div>`).join("") + `<p class="muted">T\u1ED5ng l\u01B0\u01A1ng: ${fmtK(staffWagePerDay())}/ng\xE0y. Nh\xE2n vi\xEAn l\xE0m c\xE0ng l\xE2u t\u1ED1c \u0111\u1ED9 c\xE0ng \u1ED5n \u0111\u1ECBnh.</p>` : "<p>Ch\u01B0a c\xF3 nh\xE2n vi\xEAn \u0111\u1EC3 ch\u1EA5m KPI.</p>");
      }
    }
  };
  var fmtCountdown = (ms) => {
    const s = Math.max(0, Math.floor(ms / 1e3));
    return `${String(Math.floor(s / 3600)).padStart(2, "0")}:${String(Math.floor(s % 3600 / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  };
  function tickCountdown() {
    const el = document.querySelector('[data-cd="tax"]');
    if (el) el.textContent = fmtCountdown(S.tax.until - Date.now());
  }
  function taxReceipt(amount) {
    const until = new Date(S.tax.until);
    const m = openModal({ cls: "small", html: `<div class="receipt"><div class="r-ico">\u{1F3DB}\uFE0F\u{1F4DC}</div><h3>BI\xCAN LAI \u0110\xD3NG THU\u1EBE TR\u1EF0C TUY\u1EBEN 72H</h3>
    <div class="r-box"><p>\u2705 <b>Tr\u1EA1ng th\xE1i:</b> \u0110\xC3 N\u1ED8P THU\u1EBE TH\xC0NH C\xD4NG</p><p>\u{1F4B0} <b>S\u1ED1 ti\u1EC1n n\u1ED9p:</b> ${fmtK(amount)} (${Math.round(S.tax.rate * 100)}% k\xE9t)</p><p>\u23F1\uFE0F <b>Th\u1EDDi h\u1EA1n b\u1EA3o h\u1ED9:</b> 72 Gi\u1EDD Th\u1EF1c T\u1EBF (3 ng\xE0y) (\u0111\u1EBFn ${until.toLocaleString("vi-VN")})</p>
    <p>\u2728 <b>Hi\u1EC7u \u1EE9ng k\xEDch ho\u1EA1t:</b></p><p>\u2022 T\u0103ng +15% kh\xE1ch h\xE0ng gh\xE9 qu\xE1n.</p><p>\u2022 T\u0103ng +15% t\u1ED1c \u0111\u1ED9 l\xE0m vi\u1EC7c c\u1EE7a to\xE0n b\u1ED9 nh\xE2n vi\xEAn.</p><p>\u2022 Gi\u1EA3m 15% nguy c\u01A1 tr\u1ED9m c\u1EAFp, ti\u1EC1n gi\u1EA3 v\xE0 b\xF9ng ti\u1EC1n!</p><p>\u2022 T\u0103ng +15% t\u1EC9 l\u1EC7 may m\u1EAFn x2 ti\u1EC1n bill m\u1ED7i ly n\u01B0\u1EDBc!</p></div></div>
    <button class="btn pri block" data-act="ok">\u0110\xE3 hi\u1EC3u & X\xE1c nh\u1EADn</button>` });
    bindActions(m.body, { ok: () => m.close() });
  }
  var thue = {
    html() {
      const active = taxActive();
      const rate = S.tax.rate;
      const amt = Math.round(S.money * rate);
      const b = S.bank;
      const principal = b.principal || 0;
      return `<div class="taxcard"><h4>\u{1F3DB}\uFE0F \u0110\xD3NG THU\u1EBE TR\u1EF0C TUY\u1EBEN 72H (3 NG\xC0Y TH\u1EF0C)</h4><p>\u0110\xF3ng thu\u1EBF m\u1ED7i 3 ng\xE0y th\u1EF1c t\u1EBF (72 gi\u1EDD) \u0111\u1EC3 Buff to\xE0n di\u1EC7n & ph\xF2ng ng\u1EEBa tr\u1ED9m c\u1EAFp.</p>
      ${active ? `<div class="ok-box">\u{1F7E1} <b>\u0110ANG TRONG TH\u1EDCI GIAN \xC2N H\u1EA0N 72H</b><div>\u23F3 H\u1EA1n ch\xF3t: <b data-cd="tax">${fmtCountdown(S.tax.until - Date.now())}</b></div><small>H\xE3y ho\xE0n th\xE0nh \u0111\xF3ng thu\u1EBF tr\u1EF1c tuy\u1EBFn \u0111\u1EC3 nh\u1EADn ngay Buff ph\xE1t tri\u1EC3n v\xE0 b\u1EA3o v\u1EC7 an ninh qu\xE1n!</small></div>` : `<div class="warn-box">\u23F0 Ch\u01B0a c\xF3 buff thu\u1EBF. N\u1ED9p thu\u1EBF \u0111\u1EC3 nh\u1EADn hi\u1EC7u \u1EE9ng trong 72 gi\u1EDD th\u1EF1c.</div>`}
      <div class="tax-sel"><b>\u{1F4B0} Ch\u1ECDn m\u1EE9c \u0111\xF3ng thu\u1EBF theo s\u1ED1 ti\u1EC1n k\xE9t hi\u1EC7n c\xF3</b><p class="muted">K\xE9t hi\u1EC7n c\xF3: <b>${fmtK(S.money)}</b> \xB7 M\u1EE9c thu\u1EBF quy \u0111\u1ECBnh t\u1EEB ${TAX.minRate * 100}% \u0111\u1EBFn ${TAX.maxRate * 100}%.</p>
        <div class="rate-row"><span>T\u1EC9 l\u1EC7 \u0111\xF3ng thu\u1EBF:</span><b>${Math.round(rate * 100)}%</b></div>
        <input type="range" min="5" max="15" step="1" value="${Math.round(rate * 100)}" data-rate aria-label="T\u1EC9 l\u1EC7 thu\u1EBF">
        <div class="rate-btns">${[5, 8, 10, 12, 15].map((r) => `<button class="rb2 ${Math.round(rate * 100) === r ? "on" : ""}" data-act="rate" data-r="${r}">${r}%${r === 5 ? "<small>(T\u1ED1i thi\u1EC3u)</small>" : r === 15 ? "<small>(T\u1ED1i \u0111a)</small>" : ""}</button>`).join("")}</div>
        <div class="tax-amt">S\u1ED1 ti\u1EC1n thu\u1EBF c\u1EA7n n\u1ED9p: <b>${fmtK(amt)}</b> \xB7 Quy\u1EC1n l\u1EE3i nh\u1EADn \u0111\u01B0\u1EE3c: <b>Buff +15% / 72h</b></div>
        <button class="btn pri block" data-act="pay" ${active ? "disabled" : ""}>\u{1F3DB}\uFE0F ${active ? "\u0110\xE3 n\u1ED9p thu\u1EBF (\u0111ang c\xF3 buff)" : `N\u1ED9p thu\u1EBF ngay (${fmtK(amt)} \xB7 Buff +15%)`}</button></div>
      <div class="bank"><div class="bank-h"><small>B\u1EA2O H\u1ED8 T\xC0I CH\xCDNH AN TO\xC0N 100%</small><h4>\u{1F3E6} NG\xC2N H\xC0NG T\xC0 T\u01AFA BANK</h4><span class="chip y">L\xC3I K\xC9P ${BANK.interest * 100}%/NG\xC0Y</span></div>
        <div class="bank-st"><div><small>\u{1F4B0} Ti\u1EC1n g\u1EEDi hi\u1EC7n t\u1EA1i:</small><b>${fmtK(b.balance)}</b><em>(G\u1ED1c: ${fmtK(principal)})</em></div><div><small>\u{1F4C8} H\u1EA1n m\u1EE9c g\u1EEDi t\u1ED1i \u0111a:</small><b>${fmtK(BANK.max)}</b><em>(+${BANK.starBonus * 100}% khi \u0111\u1EA1t 5\u2605; khi qu\xE1 1 t\u1EF7 t\u0103ng +${BANK.bigBonus * 100}%, t\u1ED1i \u0111a 99 T\u1EF7)</em></div></div>
        <div class="bank-lock">\u{1F512} K\u1EF3 h\u1EA1n cam k\u1EBFt: <b>${BANK.lockShifts} ng\xE0y b\xE1n n\u01B0\u1EDBc</b> \xB7 Ti\u1EBFn \u0111\u1ED9: <b>${Math.min(b.shifts, BANK.lockShifts)}/${BANK.lockShifts}</b> ng\xE0y. R\xFAt tr\u01B0\u1EDBc h\u1EA1n s\u1EBD m\u1EA5t to\xE0n b\u1ED9 ti\u1EC1n l\xE3i.</div>
        <p class="bank-note">\u{1F510} <b>\u0110\u1EB7c quy\u1EC1n:</b> Ti\u1EC1n g\u1EEDi tuy\u1EC7t \u0111\u1ED1i kh\xF4ng b\u1ECB tr\u1ED9m c\u1EAFp, b\xF9ng ti\u1EC1n hay l\u1EEBa \u0111\u1EA3o.</p>
        <div class="dep-btns"><button class="btn gold sm" data-act="dep" data-p="0.1">G\u1EEDi 10% k\xE9t</button><button class="btn gold sm" data-act="dep" data-p="0.5">G\u1EEDi 50%</button><button class="btn gold sm" data-act="dep" data-p="1">G\u1EEDi t\u1EA5t c\u1EA3</button></div>
        <button class="btn soft block" data-act="wd" ${b.balance > 0 ? "" : "disabled"}>\u{1F4B8} R\xFAt ti\u1EC1n</button></div>
      <div class="policy"><b>\u{1F4DC} Ch\xEDnh s\xE1ch thu\u1EBF & Th\u1ED1ng k\xEA ti\u1EC7m:</b><p>\u2022 Chu k\u1EF3 72 gi\u1EDD (3 ng\xE0y) th\u1EF1c t\u1EBF. H\u1EBFt 72h c\u1EA7n \u0111\xF3ng chu k\u1EF3 m\u1EDBi, kh\xF4ng c\u1ED9ng d\u1ED3n.</p><p>\u2022 T\u1EC9 l\u1EC7 Buff: \u0110\xF3ng thu\u1EBF nhi\u1EC1u % k\xE9t th\xEC t\u0103ng kh\xE1ch, t\u0103ng t\u1ED1c \u0111\u1ED9 v\xE0 gi\u1EA3m tr\u1ED9m c\u1EAFp (t\u1ED1i \u0111a 15%).</p><p>\u2022 Nh\xE2n vi\xEAn Me k\u1EBFt tinh: Khi \u0111\xE3 thu\xEA, qu\xE1n kh\xF4ng b\u1ECB ph\u1EA1t ch\u1EADm thu\u1EBF; chuy\u1EC3n th\xE0nh th\u1EDDi gian \xE2n h\u1EA1n duy tr\xEC buff.</p><p>\u2022 T\u1ED5ng thu\u1EBF \u0111\xE3 n\u1ED9p: <b>${fmtK(S.tax.paid)}</b></p></div>`;
    },
    acts: {
      rate: (t) => {
        S.tax.rate = +t.dataset.r / 100;
        markDirty("panel");
      },
      pay: () => {
        const amt = Math.round(S.money * S.tax.rate);
        if (amt <= 0) return toast("K\xE9t tr\u1ED1ng, ch\u01B0a c\xF3 g\xEC \u0111\u1EC3 n\u1ED9p thu\u1EBF", "err");
        S.money -= amt;
        S.tax.paid += amt;
        S.today.tax += amt;
        S.tax.until = Date.now() + TAX.hours * 3600 * 1e3;
        S.tax.last = Date.now();
        markDirty("hud", "panel");
        requestSave();
        sfx("success");
        taxReceipt(amt);
      },
      dep: (t) => {
        const amt = Math.floor(S.money * +t.dataset.p);
        if (amt <= 0) return toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n \u0111\u1EC3 g\u1EEDi", "err");
        const room = BANK.max - S.bank.balance;
        const a = Math.min(amt, room);
        S.money -= a;
        S.bank.balance += a;
        S.bank.principal = (S.bank.principal || 0) + a;
        S.bank.shifts = S.bank.shifts || 0;
        markDirty("hud", "panel");
        requestSave();
        sfx("coin");
        toast(`\u0110\xE3 g\u1EEDi ${fmtK(a)}`, "ok");
      },
      wd: () => {
        const b = S.bank;
        const early = b.shifts < BANK.lockShifts;
        confirmBox("R\xFAt ti\u1EC1n ti\u1EBFt ki\u1EC7m?", early ? `Ch\u01B0a \u0111\u1EE7 ${BANK.lockShifts} ng\xE0y cam k\u1EBFt: ch\u1EC9 nh\u1EADn l\u1EA1i ti\u1EC1n g\u1ED1c ${fmtK(b.principal || 0)}, m\u1EA5t l\xE3i ${fmtK(b.balance - (b.principal || 0))}.` : `B\u1EA1n s\u1EBD nh\u1EADn ${fmtK(b.balance)} g\u1ED3m c\u1EA3 l\xE3i.`, () => {
          S.money += early ? b.principal || 0 : b.balance;
          b.balance = 0;
          b.principal = 0;
          b.shifts = 0;
          markDirty("hud", "panel");
          requestSave();
          sfx("coin");
        }, "R\xFAt ti\u1EC1n");
      }
    },
    bind(root2) {
      root2.querySelector("[data-rate]")?.addEventListener("input", (e) => {
        S.tax.rate = +e.target.value / 100;
        markDirty("panel");
      });
    }
  };
  function branchHTML() {
    return `<div class="brh"><h4>\u{1F3E2} H\u1EC6 TH\u1ED0NG CHI NH\xC1NH TR\u1EF0C THU\u1ED8C</h4><p>M\u1EDF r\u1ED9ng chu\u1ED7i c\u1EEDa h\xE0ng tr\xE0 s\u1EEFa \u0111\u1EC3 thu h\xFAt th\xEAm kh\xE1ch v\xE0 t\u1EA1o d\xF2ng ti\u1EC1n th\u1EE5 \u0111\u1ED9ng m\u1ED7i ng\xE0y.</p></div>` + BRANCHES.map((b) => {
      const o = S.branches[b.id];
      const cost = b.cost;
      const lastTxt = o?.last ? `<small>H\xF4m qua: doanh thu ${fmtK(o.last.r)} \xB7 l\xE3i r\xF2ng <b class="${o.last.p >= 0 ? "pos" : "neg"}">${fmtK(o.last.p)}</b></small>` : "";
      return `<div class="brcard ${o ? "open" : ""}"><div class="br-top"><span class="br-ic">${b.icon}</span><div class="grow"><b>${b.name}</b><small>${esc(b.desc)}</small></div><span class="chip ${o ? "green" : ""}">${o ? "\u0110ang ho\u1EA1t \u0111\u1ED9ng" : "Ch\u01B0a m\u1EDF"}</span></div>
        <div class="br-st"><div>\u{1F4B5} Ti\u1EC1n thu\xEA m\u1EB7t b\u1EB1ng: <b class="neg">\u2212${fmtK(b.rent)}/ng\xE0y</b></div><div>\u{1F465} Ph\xE1t l\u01B0\u01A1ng (${o?.staff || 0} NV): <b class="neg">\u2212${fmtK((o?.staff || 0) * 15e4)}/ng\xE0y</b></div>
          <div>\u{1F4E6} Nh\u1EADp li\u1EC7u nguy\xEAn li\u1EC7u: <b class="neg">\u2212${fmtK(b.rev[0] * b.ing[0])} ~ ${fmtK(b.rev[1] * b.ing[1])}/ng\xE0y</b></div><div>\u{1F4C8} Doanh thu t\u1EF1 \u0111\u1ED9ng: <b class="pos">+${fmtK(b.rev[0])} ~ ${fmtK(b.rev[1])}/ng\xE0y</b></div>
          <div>\u2B50 \u0110\xE1nh gi\xE1 b\xECnh qu\xE2n: <b>${o ? S.rating.toFixed(1) : "(Ch\u01B0a m\u1EDF)"}</b></div>${lastTxt}</div>
        ${o ? `<div class="row2"><span>\u{1F465} Nh\xE2n vi\xEAn chi nh\xE1nh:</span><div class="stepper"><button data-act="bstaff-" data-id="${b.id}">\u2212</button><input class="num" type="number" inputmode="numeric" min="0" max="3" value="${o.staff || 0}" data-bstaff="${b.id}" aria-label="Nh\xE2n vi\xEAn chi nh\xE1nh"><button data-act="bstaff+" data-id="${b.id}">+</button></div></div>` : `<button class="btn pri block" data-act="bopen" data-id="${b.id}">${fmtK(cost)}<br/>Thu\xEA & M\u1EDF chi nh\xE1nh</button>`}</div>`;
    }).join("");
  }
  function franchiseHTML() {
    const okR = S.rating >= FRANCHISE.needRating, okF = S.followers >= FRANCHISE.needFollowers;
    const can = okR && okF && S.franchise.count < FRANCHISE.max;
    return `<div class="frcard"><h4>\u{1F91D} M\xD4 H\xCCNH B\xC1N NH\u01AF\u1EE2NG QUY\u1EC0N (FRANCHISING)</h4><p>M\u1EDF b\xE1n b\u1EA3n quy\u1EC1n th\u01B0\u01A1ng hi\u1EC7u cho c\xE1c \u0111\u1ED1i t\xE1c. Thu ph\xED gia nh\u1EADp ${fmt(FRANCHISE.fee)} + Ph\xED b\u1EA3n quy\u1EC1n (Royalty Fee) ${FRANCHISE.royalty * 100}% doanh thu m\u1ED7i ng\xE0y!</p>
      <p class="muted">\u0110\xE3 nh\u01B0\u1EE3ng quy\u1EC1n: <b>${S.franchise.count}/${FRANCHISE.max}</b> \u0111i\u1EC3m b\xE1n.</p>
      <button class="btn ${can ? "pri" : "ghost"} block" data-act="fopen" ${can ? "" : "disabled"}>${can ? `\u{1F91D} B\xE1n nh\u01B0\u1EE3ng quy\u1EC1n (+${fmtK(FRANCHISE.fee)})` : "\u{1F512} CH\u01AFA \u0110\u1EA0T \u0110I\u1EC0U KI\u1EC6N"}</button>
      <div class="frreq"><div class="frbox"><small>\u2B50 \u0110i\u1EC3m Uy T\xEDn Qu\xE1n:</small><b>${S.rating.toFixed(1)} / ${FRANCHISE.needRating}\u2605 ${okR ? "\u2705" : "\u274C"}</b><div class="bar"><i style="width:${Math.min(100, S.rating / FRANCHISE.needRating * 100)}%"></i></div></div>
        <div class="frbox"><small>\u{1F4F1} Ng\u01B0\u1EDDi Theo D\xF5i MXH:</small><b>${S.followers.toLocaleString("vi-VN")}\u0111 / ${FRANCHISE.needFollowers.toLocaleString("vi-VN")} ${okF ? "\u2705" : "\u274C"}</b><div class="bar"><i style="width:${Math.min(100, S.followers / FRANCHISE.needFollowers * 100)}%"></i></div></div></div></div>
    <div class="tipbox"><b>\u{1F4A1} M\u1EB9o \u0111\u1EC3 m\u1EDF b\xE1n nh\u01B0\u1EE3ng quy\u1EC1n:</b><p>\u2022 H\xE3y ph\u1EE5c v\u1EE5 kh\xE1ch th\u1EADt nhanh v\xE0 d\xE1n n\u1EAFp chu\u1EA9n x\xE1c \u0111\u1EC3 nh\u1EADn nhi\u1EC1u \u0111\xE1nh gi\xE1 <b>5 sao</b> n\xE2ng \u0111i\u1EC3m Uy T\xEDn l\xEAn \u2265 4.5\u2605.</p><p>\u2022 V\xE0o m\u1EE5c <b>M\u1EA1ng X\xE3 H\u1ED9i</b> \u0111\u1EC3 ch\u1EA1y c\xE1c chi\u1EBFn d\u1ECBch Qu\u1EA3ng c\xE1o TikTok / Facebook / Thu\xEA KOL \u0111\u1EC3 t\xEDch l\u0169y \u0111\u1EE7 50.000 Ng\u01B0\u1EDDi theo d\xF5i!</p></div>`;
  }
  function statsHTML() {
    const last2 = S.history[S.history.length - 1];
    const main = last2 ? last2.profit - last2.branch - last2.fran - last2.interest : 0;
    const brN = Object.keys(S.branches).length;
    const brP = last2?.branch || 0, frP = last2?.fran || 0;
    const total = main + brP + frP;
    const tot = Math.max(1, Math.abs(main) + Math.abs(brP) + Math.abs(frP));
    const bar2 = (l, v) => `<div class="sbar"><span>${l}</span><div class="bar"><i style="width:${Math.abs(v) / tot * 100}%"></i></div><b>${fmtK(v)}</b></div>`;
    return `<div class="stcard"><small>B\xC1O C\xC1O T\xC0I CH\xCDNH TO\xC0N H\u1EC6 TH\u1ED0NG</small><h4>L\u1EE3i Nhu\u1EADn R\xF2ng: <span class="${total >= 0 ? "pos" : "neg"}">${fmtK(total)}</span></h4><p class="muted">T\u1ED5ng h\u1EE3p doanh thu t\u1EEB Qu\xE1n ch\xEDnh, ${brN} Chi nh\xE1nh tr\u1EF1c thu\u1ED9c & ${S.franchise.count} Chi nh\xE1nh nh\u01B0\u1EE3ng quy\u1EC1n (ng\xE0y g\u1EA7n nh\u1EA5t).</p></div>
    <div class="dl"><span>\u{1F3EA} Qu\xE1n Ch\xEDnh (Flagship)</span><b class="${main >= 0 ? "pos" : "neg"}">${fmtK(main)}</b></div>
    <div class="dl"><span>\u{1F3E2} ${brN} Chi Nh\xE1nh Tr\u1EF1c Thu\u1ED9c</span><b class="${brP >= 0 ? "pos" : "neg"}">${fmtK(brP)}</b></div>
    <div class="dl"><span>\u{1F91D} ${S.franchise.count} Chi Nh\xE1nh Nh\u01B0\u1EE3ng Quy\u1EC1n</span><b class="pos">${fmtK(frP)}</b></div>
    <div class="dl big"><span>\u{1F4B0} T\u1ED5ng L\u1EE3i Nhu\u1EADn Chu\u1ED7i</span><b class="${total >= 0 ? "pos" : "neg"}">${fmtK(total)}</b></div>
    <div class="stcard"><b>\u{1F4CA} Bi\u1EC3u \u0110\u1ED3 Ph\xE2n B\u1ED5 Ngu\u1ED3n Doanh Thu:</b>${bar2("Qu\xE1n ch\xEDnh", main)}${bar2("Chi nh\xE1nh", brP)}${bar2("Nh\u01B0\u1EE3ng quy\u1EC1n", frP)}</div>`;
  }
  var chinhanh = {
    html() {
      const t = S.subtab.cn || "tt";
      const tb = [["tt", "\u{1F3E2} Tr\u1EF1c thu\u1ED9c"], ["nq", "\u{1F91D} Nh\u01B0\u1EE3ng quy\u1EC1n"], ["tk", "\u{1F4CA} Th\u1ED1ng k\xEA"]];
      return `<div class="tabs">${tb.map(([id, l]) => `<button class="tab ${t === id ? "on" : ""}" data-act="sub" data-v="${id}">${l}</button>`).join("")}</div>${t === "tt" ? branchHTML() : t === "nq" ? franchiseHTML() : statsHTML()}`;
    },
    bind(root2) {
      for (const inp of root2.querySelectorAll("[data-bstaff]")) {
        inp.addEventListener("focus", () => inp.select());
        inp.addEventListener("change", () => {
          const o = S.branches[inp.dataset.bstaff];
          if (o) {
            o.staff = Math.max(0, Math.min(3, Math.round(+inp.value || 0)));
            markDirty("panel");
          }
        });
      }
    },
    acts: {
      sub: (t) => {
        S.subtab.cn = t.dataset.v;
        markDirty("panel");
      },
      bopen: (t) => confirmBox("Thu\xEA & m\u1EDF chi nh\xE1nh?", `Chi ph\xED m\u1EDF: ${fmtK(BRANCHES.find((b) => b.id === t.dataset.id).cost)}. Chi nh\xE1nh t\u1EF1 kinh doanh v\xE0 g\u1EEDi l\xE3i r\xF2ng v\u1EC1 m\u1ED7i cu\u1ED1i ng\xE0y.`, () => {
        const b = BRANCHES.find((x) => x.id === t.dataset.id);
        if (S.money < b.cost) {
          toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n", "err");
          sfx("error");
          return;
        }
        S.money -= b.cost;
        S.branches[b.id] = { staff: 0, rev: 0, days: 0 };
        markDirty("hud", "panel");
        requestSave();
        sfx("unlock");
        toast("\u{1F3E2} Khai tr\u01B0\u01A1ng chi nh\xE1nh m\u1EDBi!", "ok");
      }, "M\u1EDF chi nh\xE1nh"),
      "bstaff+": (t) => {
        const o = S.branches[t.dataset.id];
        if (o.staff < 3) {
          o.staff++;
          markDirty("panel");
        }
      },
      "bstaff-": (t) => {
        const o = S.branches[t.dataset.id];
        if (o.staff > 0) {
          o.staff--;
          markDirty("panel");
        }
      },
      fopen: () => {
        if (S.rating < FRANCHISE.needRating || S.followers < FRANCHISE.needFollowers) return;
        S.money += FRANCHISE.fee;
        S.franchise.count++;
        markDirty("hud", "panel");
        requestSave();
        sfx("level");
        toast(`\u{1F91D} \u0110\xE3 b\xE1n nh\u01B0\u1EE3ng quy\u1EC1n! +${fmtK(FRANCHISE.fee)}`, "ok");
      }
    }
  };
  function postHTML(p) {
    return `<div class="post"><div class="p-h"><span class="p-av">${p.author.av}</span><div class="grow"><b>${esc(p.author.name)}</b><small>${esc(p.author.badge)} \xB7 H\xF4m nay \xB7 \u{1F441} ${p.views} l\u01B0\u1EE3t xem</small></div><span class="p-tag">${p.author.tag}</span></div>
    <div class="p-pov"><span class="pov">\u{1F3AC} POV</span> ${esc(p.pov)}</div>
    <div class="p-d"><span class="who u">${esc(p.author.name.split(" ")[0])}:</span> "${esc(p.user)}"</div>
    <div class="p-d"><span class="who o">Ch\u1EE7 qu\xE1n:</span> "${esc(p.owner)}"</div>
    <div class="p-d"><span class="who u">${esc(p.author.name.split(" ")[0])}:</span> "${esc(p.reply)}"</div>
    <div class="p-snd">\u{1F4BF} ${esc(p.sound)}</div><div class="p-tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
    <div class="p-f">\u{1F90D} ${p.likes} Th\xEDch \xB7 \u{1F4AC} Ph\u1EA3n h\u1ED3i (1)</div><div class="p-own"><b>${esc(S.shopName)}:</b> C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 gh\xE9 ph\xE1 \u0111\u1EA3o menu qu\xE1n nh\xE9! L\u1EA7n sau c\xF3 th\u1EED th\xE1ch m\u1EDBi qu\xE1n l\u1EA1i ti\u1EBFp chi\xEAu! \u{1F44B}</div></div>`;
  }
  var mxh = {
    html() {
      const ad = S.social.ad && S.day <= S.social.ad.endsDay ? ADS.find((a) => a.id === S.social.ad.id) : null;
      const verified = S.followers >= 5e4 && S.rating >= 4.5;
      const quota = ad ? ad.videos : 1;
      const used = S.social.videosToday;
      const traffic = ad ? Math.round(ad.traffic * 100) : 0;
      return `<div class="profile"><div class="pf-h">${logoHTML(60)}<div><h4>${esc(S.shopName)} ${verified ? "\u2714\uFE0F" : ""}</h4><small class="${verified ? "green" : "grayish"}">${verified ? "\u{1F331} \u0110\xE3 t\xEDch xanh" : "\u{1F331} \u0110ang x\xE2y th\u01B0\u01A1ng hi\u1EC7u"}</small><p class="muted">${verified ? "K\xEAnh \u1EA9m th\u1EF1c ch\xEDnh th\u1EE9c" : "C\u1EA7n 50K followers & 4.5\u2605 \u0111\u1EC3 t\xEDch xanh"}</p></div></div>
      <div class="pf-s"><div><b>${S.followers.toLocaleString("vi-VN")}</b><small>Ng\u01B0\u1EDDi theo d\xF5i</small></div><div><b>${S.rating.toFixed(1)} \u2605</b><small>${S.ratingCount} \u0111\xE1nh gi\xE1</small></div><div><b>+${traffic}%</b><small>Buff t\u1EEB Ads</small></div></div></div>
      <div class="adbox"><h4>\u{1F4E3} Qu\u1EA3ng c\xE1o t\u0103ng kh\xE1ch</h4><p class="sub">\u0110ang ch\u1EA1y ${ad ? 1 : 0}/1 chi\u1EBFn d\u1ECBch${ad ? ` \xB7 c\xF2n ${S.social.ad.endsDay - S.day + 1} ng\xE0y` : ""}</p>
      ${ADS.map((a) => `<div class="adcard ${ad?.id === a.id ? "run" : ""}" data-act="adinfo" data-id="${a.id}"><span class="ad-ic">${a.icon}</span><div class="ad-m"><b>${a.name}</b><small>+${Math.round(a.traffic * 100)}% kh\xE1ch \xB7 ${a.days} ng\xE0y \xB7 \u24D8</small></div><button class="btn pri sm ad-btn" data-act="ad" data-id="${a.id}" ${ad ? "disabled" : ""}>${ad?.id === a.id ? "\u0110ang ch\u1EA1y" : `<b>${fmtK(a.cost)}</b><small>K\xEDch ho\u1EA1t</small>`}</button></div>`).join("")}</div>
      <div class="vidbox"><h4>\u{1F3AC} \u0110\u0103ng video qu\u1EA3ng b\xE1</h4><p>T\u1EC9 l\u1EC7 Viral: <b>25%</b> \xB7 M\u1ED7i l\u1EA7n quay nh\u1EADn ng\u1EABu nhi\xEAn % buff kh\xE1ch. S\u1ED1 l\u01B0\u1EE3t quay h\xF4m nay d\u1EF1a v\xE0o chi\u1EBFn d\u1ECBch ads (${used}/${quota} l\u01B0\u1EE3t/ng\xE0y).</p>
      <button class="btn ${used < quota ? "pri" : "ghost"} block" data-act="video" ${used < quota ? "" : "disabled"}>${used < quota ? "\u{1F3A5} Quay & \u0111\u0103ng video" : "\u{1F512} C\u1EA7n ch\u1EA1y chi\u1EBFn d\u1ECBch Ads \u0111\u1EC3 quay video"}</button></div>
      <h4 class="feedh">\u{1F4F1} B\u1EA3ng tin</h4>
      ${S.social.posts.length ? S.social.posts.map(postHTML).join("") : '<div class="emptybox">\u{1F4F1}<b>Ch\u01B0a c\xF3 b\xE0i \u0111\u0103ng n\xE0o</b><p>Ch\u1EA1y qu\u1EA3ng c\xE1o ho\u1EB7c quay video \u0111\u1EC3 c\xE1c reviewer \u0111\u0103ng b\xE0i v\u1EC1 qu\xE1n b\u1EA1n.</p></div>'}`;
    },
    acts: {
      adinfo: (t) => {
        const a = ADS.find((x) => x.id === t.dataset.id);
        const m = openModal({ cls: "small", html: `<h3 class="m-title">${a.icon} ${esc(a.name)}</h3><p class="m-text">${a.desc}</p><p class="m-text center"><b>${fmtK(a.cost)}</b> \xB7 ${a.days} ng\xE0y</p><button class="btn pri block" data-act="x">\u0110\xF3ng</button>` });
        bindActions(m.body, { x: () => m.close() });
      },
      ad: (t) => {
        const a = ADS.find((x) => x.id === t.dataset.id);
        if (S.money < a.cost) {
          toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n ch\u1EA1y qu\u1EA3ng c\xE1o", "err");
          sfx("error");
          return;
        }
        confirmBox(a.name, `Chi ${fmtK(a.cost)} ch\u1EA1y trong ${a.days} ng\xE0y: +${Math.round(a.traffic * 100)}% kh\xE1ch qu\xE1n ch\xEDnh, +${a.followers.toLocaleString("vi-VN")} followers.`, () => {
          S.money -= a.cost;
          S.social.ad = { id: a.id, endsDay: S.day + a.days - 1 };
          S.followers += a.followers;
          for (let i = 0; i < a.posts; i++) S.social.posts.unshift(genPost());
          S.social.posts = S.social.posts.slice(0, 10);
          markDirty("hud", "panel");
          requestSave();
          sfx("success");
          toast("\u{1F4E3} Chi\u1EBFn d\u1ECBch \u0111\xE3 b\u1EAFt \u0111\u1EA7u!", "ok");
        }, "K\xEDch ho\u1EA1t");
      },
      video: () => {
        const viral = chance(0.25);
        S.social.videosToday++;
        const gain = viral ? randInt(1500, 6e3) : randInt(100, 600);
        S.followers += gain;
        if (viral) S.social.posts.unshift(genPost());
        markDirty("panel");
        requestSave();
        toast(viral ? `\u{1F525} Video l\xEAn xu h\u01B0\u1EDBng! +${gain.toLocaleString("vi-VN")} followers` : `Video \u0111\u1EA1t ${gain} followers m\u1EDBi`, viral ? "gold" : "ok");
        sfx(viral ? "level" : "success");
      }
    }
  };
  var PANELS2 = { nhansu, thue, chinhanh, mxh };

  // js/panels3.js
  var seedDef = (id) => SEEDS.find((s) => s.id === id);
  function plotHTML(i) {
    const g = S.garden;
    if (i >= g.unlocked) return `<button class="plot locked" data-act="punlock" aria-label="M\u1EDF kh\xF3a \xF4 \u0111\u1EA5t"><span>\u{1F512}</span><small>${fmtK(plotCost(i + 1))}</small></button>`;
    const p = g.plots[i];
    if (!p.seed) return `<button class="plot empty" data-act="plant" data-i="${i}" aria-label="\xD4 \u0111\u1EA5t tr\u1ED1ng"><span>\u{1F7EB}</span><small>Tr\u1ED1ng</small></button>`;
    const sd = seedDef(p.seed);
    const left = sd.days - p.grown;
    if (left <= 0) return `<button class="plot ready" data-act="harv1" data-i="${i}" aria-label="Thu ho\u1EA1ch"><span>${sd.icon}</span><small>Ch\xEDn r\u1ED3i!</small></button>`;
    return `<button class="plot grow" data-act="plant" data-i="${i}" aria-label="\u0110ang l\u1EDBn"><span>${p.grown ? "\u{1F33F}" : "\u{1F331}"}</span><small>${left} ng\xE0y</small></button>`;
  }
  function harvest(i) {
    const p = S.garden.plots[i], sd = p?.seed && seedDef(p.seed);
    if (!sd || p.grown < sd.days) return 0;
    const q = randInt(sd.yield[0], sd.yield[1]);
    const id = sd.gives;
    if (!S.unlocked[id]) {
      S.unlocked[id] = true;
      S.onMenu[id] = true;
    }
    addStock(id, q);
    p.seed = null;
    p.grown = 0;
    return q;
  }
  var vuon = {
    html() {
      const g = S.garden;
      const growing = g.plots.slice(0, g.unlocked).filter((p) => p.seed && p.grown < seedDef(p.seed).days).length;
      const ready = g.plots.slice(0, g.unlocked).filter((p) => p.seed && p.grown >= seedDef(p.seed).days).length;
      const empty = g.plots.slice(0, g.unlocked).filter((p) => !p.seed).length;
      const sel = S.subtab.seed || SEEDS[0].id;
      return `<div class="farm-h"><h4>\u{1FAB4} N\xD4NG TR\u1EA0I ORGANIC (${PLOTS} M\u1EA2NH \u0110\u1EA4T)</h4><p>M\u1EA3nh \u0111\u1EA5t n\xF4ng tr\u1EA1i xanh m\u01B0\u1EDBt v\u1EDBi ${PLOTS} lu\u1ED1ng \u0111\u1EA5t m\xE0u m\u1EE1. Nh\u1EA5n v\xE0o t\u1EEBng m\u1EA3nh \u0111\u1EA5t \u0111\u1EC3 gieo h\u1EA1t, t\u01B0\u1EDBi n\u01B0\u1EDBc v\xE0 thu ho\u1EA1ch n\xF4ng s\u1EA3n s\u1EA1ch mi\u1EC5n ph\xED v\xE0o kho ti\u1EC7m tr\xE0!</p></div>
      <div class="plots">${Array.from({ length: PLOTS }, (_, i) => plotHTML(i)).join("")}</div>
      <div class="farm-btns"><button class="btn blue" data-act="water"><b>T\u01B0\u1EDBi N\u01B0\u1EDBc</b><small>${growing} \xF4 c\xE2y${g.watered ? " \xB7 \u0111\xE3 t\u01B0\u1EDBi" : ""}</small></button><button class="btn orange" data-act="harvest"><b>Thu Ho\u1EA1ch</b><small>${ready ? ready + " \xF4 ch\xEDn" : "Ch\u1EDD qu\u1EA3 ch\xEDn"}</small></button>
        <button class="btn green" data-act="replant"><b>Tr\u1ED3ng L\u1EA1i</b><small>${empty} \xF4 tr\u1ED1ng</small></button><button class="btn purple" data-act="shop"><b>C\u1EEDa H\xE0ng</b><small>H\u1EA1t gi\u1ED1ng</small></button></div>
      <div class="seedbox"><b>\u{1F392} Kho t\xFAi h\u1EA1t gi\u1ED1ng c\u1EE7a b\u1EA1n:</b> <small>\u0110\xE3 m\u1EDF: ${g.unlocked}/${PLOTS} m\u1EA3nh</small>
        <div class="seeds">${SEEDS.map((s) => `<button class="seed ${sel === s.id ? "on" : ""}" data-act="selseed" data-id="${s.id}"><span>${s.icon}</span><b>${s.name}</b><em>${g.seeds[s.id] || 0}</em></button>`).join("")}</div>
        <small class="muted">Ch\u1EA1m m\u1ED9t \xF4 \u0111\u1EA5t tr\u1ED1ng \u0111\u1EC3 gieo h\u1EA1t \u0111ang ch\u1ECDn. C\xE2y l\u1EDBn th\xEAm m\u1ED7i ng\xE0y n\u1EBFu b\u1EA1n \u0111\xE3 t\u01B0\u1EDBi n\u01B0\u1EDBc.</small></div>`;
    },
    acts: {
      selseed: (t) => {
        S.subtab.seed = t.dataset.id;
        markDirty("panel");
      },
      plant: (t) => {
        const i = +t.dataset.i, p = S.garden.plots[i];
        if (p.seed) return toast("C\xE2y \u0111ang l\u1EDBn, h\xE3y ki\xEAn nh\u1EABn \u{1F331}", "");
        const id = S.subtab.seed || SEEDS[0].id;
        if (!(S.garden.seeds[id] > 0)) return toast("H\u1EBFt h\u1EA1t gi\u1ED1ng n\xE0y, v\xE0o C\u1EEDa H\xE0ng mua th\xEAm!", "err");
        S.garden.seeds[id]--;
        p.seed = id;
        p.grown = 0;
        sfx("pop");
        markDirty("panel");
        requestSave();
      },
      harv1: (t) => {
        const q = harvest(+t.dataset.i);
        if (q) {
          sfx("success");
          fxSpark(t, 8);
          toast(`Thu ho\u1EA1ch +${q} ph\u1EA7n nguy\xEAn li\u1EC7u!`, "ok");
          markDirty("panel");
          requestSave();
        }
      },
      harvest: () => {
        let n = 0, items = {};
        S.garden.plots.forEach((p, i) => {
          const s = p.seed && seedDef(p.seed);
          if (s && p.grown >= s.days) {
            const k = s.gives;
            const q = harvest(i);
            n++;
            items[k] = (items[k] || 0) + q;
          }
        });
        if (!n) return toast("Ch\u01B0a c\xF3 \xF4 n\xE0o ch\xEDn", "err");
        sfx("success");
        toast("Thu ho\u1EA1ch: " + Object.entries(items).map(([k, q]) => `${ITEMS[k].icon}+${q}`).join(" "), "ok");
        markDirty("panel");
        requestSave();
      },
      water: () => {
        const g = S.garden;
        if (!g.plots.some((p) => p.seed)) return toast("Ch\u01B0a c\xF3 c\xE2y n\xE0o \u0111\u1EC3 t\u01B0\u1EDBi", "err");
        g.watered = true;
        sfx("pour");
        toast("\u{1F4A7} \u0110\xE3 t\u01B0\u1EDBi n\u01B0\u1EDBc! C\xE2y s\u1EBD l\u1EDBn th\xEAm khi sang ng\xE0y m\u1EDBi.", "ok");
        markDirty("panel");
      },
      replant: () => {
        const id = S.subtab.seed || SEEDS[0].id;
        let n = 0;
        for (let i = 0; i < S.garden.unlocked; i++) {
          const p = S.garden.plots[i];
          if (!p.seed && S.garden.seeds[id] > 0) {
            p.seed = id;
            p.grown = 0;
            S.garden.seeds[id]--;
            n++;
          }
        }
        if (!n) return toast("Kh\xF4ng c\xF3 \xF4 tr\u1ED1ng ho\u1EB7c \u0111\xE3 h\u1EBFt h\u1EA1t gi\u1ED1ng", "err");
        sfx("pop");
        toast(`\u0110\xE3 tr\u1ED3ng ${n} \xF4`, "ok");
        markDirty("panel");
        requestSave();
      },
      punlock: () => {
        const g = S.garden, cost = plotCost(g.unlocked + 1);
        confirmBox("M\u1EDF th\xEAm m\u1EA3nh \u0111\u1EA5t?", `M\u1EDF \xF4 s\u1ED1 ${g.unlocked + 1} v\u1EDBi gi\xE1 ${fmtK(cost)}.`, () => {
          if (S.money < cost) return toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n", "err");
          S.money -= cost;
          g.unlocked++;
          sfx("unlock");
          markDirty("hud", "panel");
          requestSave();
        }, "M\u1EDF kh\xF3a");
      },
      shop: () => {
        const m = openModal({ id: "seedshop", cls: "small", html: `<h3 class="m-title">\u{1F6D2} C\u1EEDa h\xE0ng h\u1EA1t gi\u1ED1ng</h3>${SEEDS.map((s) => `<div class="nrow"><span class="k-ico">${s.icon}</span><div class="k-main"><b>${s.name}</b><small>L\u1EDBn trong ${s.days} ng\xE0y \xB7 thu ${s.yield[0]}-${s.yield[1]} ph\u1EA7n ${ITEMS[s.gives].name}</small></div><button class="btn gold sm" data-act="buy" data-id="${s.id}">${fmtK(s.price)}</button></div>`).join("")}<button class="btn ghost block" data-act="x">\u0110\xF3ng</button>` });
        bindActions(m.body, { buy: (t) => {
          const s = seedDef(t.dataset.id);
          if (S.money < s.price) return toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n", "err");
          S.money -= s.price;
          S.garden.seeds[s.id] = (S.garden.seeds[s.id] || 0) + 1;
          sfx("coin");
          markDirty("hud", "panel");
          toast(`+1 ${s.name}`, "ok");
          requestSave();
        }, x: () => m.close() });
      }
    }
  };
  var bar = (v) => `<div class="bar ${v < 30 ? "danger" : v < 60 ? "warn" : ""}"><i style="width:${Math.round(v)}%"></i></div>`;
  function petCard(k) {
    const p = PETS[k];
    const can = k === "capybara" ? secretCount() >= p.secret : true;
    const sel = (S.subtab.pet || "shiba") === k;
    return `<button class="petchip ${sel ? "on" : ""}" data-act="petsel" data-k="${k}">${p.icon} ${p.name.split(" ").slice(0, 2).join(" ")} ${can ? "" : "<em>(Ch\u01B0a m\u1EDF)</em>"}</button>`;
  }
  var thucung = {
    html() {
      if (S.pet) {
        const p2 = S.pet, info = PETS[p2.kind];
        const act = petActive();
        return `<div class="petcard owned"><div class="pet-big">${info.icon}</div><h4>${info.name}</h4><p class="muted">${act ? "\u2705 Buff \u0111ang k\xEDch ho\u1EA1t (m\u1ECDi ch\u1EC9 s\u1ED1 \u2265 60 trung b\xECnh)" : "\u26A0\uFE0F C\u1EA7n ch\u0103m s\xF3c \u0111\u1EC3 k\xEDch ho\u1EA1t buff (trung b\xECnh \u2265 60)"}</p>
        <div class="pstats">${[["hunger", "\u{1F356} No"], ["joy", "\u{1F497} Vui v\u1EBB"], ["clean", "\u{1F6C1} S\u1EA1ch s\u1EBD"], ["energy", "\u{1F634} Kh\u1ECFe"]].map(([k2, l]) => `<div class="ps"><span>${l}</span>${bar(p2[k2])}<b>${Math.round(p2[k2])}</b></div>`).join("")}</div>
        <div class="pcare">${PET_CARE.map((c) => `<button class="btn soft" data-act="care" data-id="${c.id}">${c.icon}<br/>${c.name}${c.cost ? `<small>${fmtK(c.cost)}</small>` : ""}</button>`).join("")}</div>
        <div class="buffs">${info.buffs.map((b) => `<p>${b}</p>`).join("")}</div>
        <p class="muted">Decor \u0111\xE3 mua: ${Object.keys(S.petDecor).length}/${PET_DECOR.length} \xB7 mua th\xEAm \u1EDF N\xE2ng c\u1EA5p \u203A Decor Th\xFA C\u01B0ng.</p></div>
        ${S.pet2 ? `<div class="petcard owned"><div class="pet-big">\u{1F9AB}</div><h4>${PETS.capybara.name} <span class="chip green">Nu\xF4i chung</span></h4>${PETS.capybara.buffs.map((b) => `<p>${b}</p>`).join("")}</div>` : ""}
        ${!S.pet2 && secretCount() >= 7 ? '<button class="btn pri block" data-act="capy">\u{1F9AB} Nh\u1EADn nu\xF4i C\xE1p Bi (mi\u1EC5n ph\xED)</button>' : ""}`;
      }
      const k = S.subtab.pet || "shiba";
      const p = PETS[k];
      const sc = secretCount();
      const body = k === "capybara" ? `<div class="petcard cap"><div class="pet-big">\u{1F9AB}</div><h4>\u{1F9AB} C\xC1P BI \u0110I\u1EC0M \u0110\u1EA0M (CAPYBARA)</h4><p>Th\xFA c\u01B0ng \u0111\u1ED9c b\u1EA3n qu\xFD hi\u1EBFm d\xE0nh ri\xEAng cho Nh\xE0 S\xE1ng T\u1EA1o Ti\u1EC7m Tr\xE0 S\u1EEFa Tinh Hoa! <b>K\u1EBFt h\u1EE3p tr\u1ECDn v\u1EB9n c\u1EA3 s\u1EE9c m\u1EA1nh c\u1EE7a Ch\xF3 v\xE0 M\xE8o</b>, \u0111\u1EB7c bi\u1EC7t c\xF3 th\u1EC3 nu\xF4i chung song song c\xF9ng 1 T\xF3 ho\u1EB7c 1 M\xE8o!</p>
        <div class="buffs"><b>4 \u0110\u1EB6C QUY\u1EC0N T\u1ED0I TH\u01AF\u1EE2NG C\u1EE6A C\xC1P PI:</b>${p.buffs.map((b) => `<p>${b}</p>`).join("")}</div>
        <div class="cond"><b>\u2B50 \u0110i\u1EC1u ki\u1EC7n m\u1EDF kh\xF3a: ${p.secret} C\xF4ng th\u1EE9c \u0111\u1ED9c b\u1EA3n</b><div class="bar"><i style="width:${sc / p.secret * 100}%"></i></div><small>B\u1EA1n \u0111\xE3 s\xE1ng t\u1EA1o ${sc}/${p.secret} c\xF4ng th\u1EE9c \u0111\u1ED9c b\u1EA3n trong S\u1ED5 Tay S\u01B0u T\u1EA7m. C\u1EA7n th\xEAm ${Math.max(0, p.secret - sc)} c\xF4ng th\u1EE9c n\u1EEFa \u0111\u1EC3 m\u1EDF kh\xF3a C\xE1p Bi!</small></div>
        <button class="btn ${sc >= p.secret ? "pri" : "soft"} block" data-act="${sc >= p.secret ? "capy" : "goto"}" data-to="suutam">${sc >= p.secret ? "\u{1F9AB} Nh\u1EADn nu\xF4i C\xE1p Bi" : "\u{1F4D6} \u0110\u1EBFn M\u1EE5c S\u01B0u T\u1EA7m S\xE1ng T\u1EA1o C\xF4ng Th\u1EE9c (" + sc + "/" + p.secret + ")"}</button></div>` : `<div class="petcard"><div class="pet-big">${p.icon}</div><h4>\u{1F3E1} C\u0102N PH\xD2NG TH\xDA C\u01AFNG M\u01A0 \u01AF\u1EDAC</h4><p>B\u1EA1n \u0111\u01B0\u1EE3c ch\u1ECDn <b>1 trong 2 b\xE9 c\u01B0ng</b> \u0111\u1EC3 \u0111\u1ED3ng h\xE0nh c\xF9ng ti\u1EC7m c\u1EE7a m\xECnh. H\xE3y ch\u1ECDn ng\u01B0\u1EDDi b\u1EA1n ph\xF9 h\u1EE3p nh\u1EA5t v\u1EDBi chi\u1EBFn l\u01B0\u1EE3c kinh doanh c\u1EE7a b\u1EA1n! <small>Sau khi ch\u1ECDn, b\u1EA1n c\xF3 th\u1EC3 \u0111\u1ED5i l\u1EA1i b\xE9 kia nh\u01B0ng c\u1EA5p th\xFA c\u01B0ng s\u1EBD b\u1ECB reset v\u1EC1 c\u1EA5p 1!</small></p>
        <div class="buffs"><h5>${p.icon} ${p.name}</h5>${p.buffs.map((b) => `<p>${b}</p>`).join("")}</div>
        <div class="adopt"><b>Ph\xED nh\u1EADn nu\xF4i ${p.icon} ${p.name}:</b> <span class="money">${fmt(p.adopt)}</span><p>Ti\u1EC1n k\xE9t qu\xE1n hi\u1EC7n c\xF3: ${fmtK(S.money)} ${S.money >= p.adopt ? "\u2705" : `\u274C (C\u1EA7n th\xEAm ${fmtK(p.adopt - S.money)})`}</p></div>
        <button class="btn ${S.money >= p.adopt ? "pri" : "ghost"} block" data-act="adopt" data-k="${k}">\u{1F43E} Nh\u1EADn Nu\xF4i ${p.name} (${fmtK(p.adopt)})</button></div>`;
      return `<div class="petrow">${["shiba", "meo", "capybara"].map(petCard).join("")}</div>${body}`;
    },
    acts: {
      petsel: (t) => {
        S.subtab.pet = t.dataset.k;
        markDirty("panel");
      },
      goto: (t) => emit("goto", t.dataset.to),
      adopt: (t) => {
        const k = t.dataset.k, p = PETS[k];
        if (S.money < p.adopt) return toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n nh\u1EADn nu\xF4i", "err");
        confirmBox("Nh\u1EADn nu\xF4i " + p.name + "?", `Ph\xED ${fmtK(p.adopt)}. B\xE9 s\u1EBD \u0111\u1ED3ng h\xE0nh c\xF9ng qu\xE1n.`, () => {
          S.money -= p.adopt;
          S.pet = { kind: k, hunger: 80, joy: 80, clean: 80, energy: 80 };
          sfx("level");
          markDirty("hud", "panel", "tiles");
          requestSave();
          toast("\u{1F43E} Ch\xE0o m\u1EEBng th\xE0nh vi\xEAn m\u1EDBi!", "gold");
        }, "Nh\u1EADn nu\xF4i");
      },
      capy: () => {
        if (secretCount() < 7) return;
        S.pet2 = { kind: "capybara" };
        S.pet = S.pet || { kind: "capybara", hunger: 80, joy: 80, clean: 80, energy: 80 };
        sfx("level");
        markDirty("panel", "tiles");
        requestSave();
        toast("\u{1F9AB} C\xE1p Bi \u0111\xE3 v\u1EC1 qu\xE1n!", "gold");
      },
      care: (t) => {
        const c = PET_CARE.find((x) => x.id === t.dataset.id);
        if (S.money < c.cost) return toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n", "err");
        S.money -= c.cost;
        const boost = S.petDecor.app ? 1.3 : 1;
        S.pet[c.stat] = clamp(S.pet[c.stat] + c.gain * boost, 0, 100);
        sfx("pop");
        fxText("+" + c.name, t, "g");
        markDirty("hud", "panel");
        requestSave();
      }
    }
  };
  function locCard(id) {
    const l = LOCATIONS[id];
    const here = S.location === id;
    return `<div class="loccard ${here ? "here" : ""}" id="loc-${id}"><div class="loc-img ${id}">${sceneHTML(id)}<span class="loc-tag">${l.icon} ${esc(l.tag)}</span><h4>${l.icon} ${esc(l.name)}</h4></div>
    <div class="loc-body"><i class="slogan">"${esc(l.slogan)}"</i><p>${esc(l.desc)}</p>
    <div class="pro"><b>\u{1F7E2} L\u1EE3i Th\u1EBF Kinh Doanh (\u01AFu \u0110i\u1EC3m):</b>${l.pro.map((x) => `<p>\u2022 ${esc(x)}</p>`).join("")}</div>
    ${l.con.length ? `<div class="con"><b>\u{1F534} Th\u1EED Th\xE1ch V\u1EADn H\xE0nh (Kh\xF3 Kh\u0103n):</b>${l.con.map((x) => `<p>\u2022 ${esc(x)}</p>`).join("")}</div>` : ""}
    <button class="btn ${here ? "ghost" : "pri"} block" data-act="startup" data-id="${id}" ${here ? "disabled" : ""}>${here ? "\u2705 \u0110ang \u0110\u1EB7t Qu\xE1n T\u1EA1i \u0110\xE2y" : `\u{1F680} Kh\u1EDFi Nghi\u1EC7p T\u1EA1i ${l.name} \xB7 ${fmtK(LOCATION_COST)}`}</button></div></div>`;
  }
  var SCENES = {
    goc: [["\u{1F3E1}", 46, 64, 8], ["\u{1F333}", 16, 44, 8], ["\u{1FAB4}", 80, 34, 8], ["\u{1F9CB}", 30, 30, 6]],
    hanoi: [["\u{1F3EF}", 60, 60, 10], ["\u{1F338}", 14, 36, 10], ["\u{1F6D5}", 82, 44, 10], ["\u{1F3EE}", 38, 26, 60], ["\u{1FAB7}", 46, 28, 4]],
    hcm: [["\u{1F3D9}\uFE0F", 58, 74, 8], ["\u{1F307}", 16, 50, 12], ["\u{1F6F5}", 36, 30, 4], ["\u{1F306}", 84, 46, 8]],
    hue: [["\u{1F3EF}", 54, 70, 8], ["\u{1F338}", 18, 36, 8], ["\u{1F6F6}", 82, 30, 4], ["\u{1F3EE}", 36, 26, 56]],
    danang: [["\u{1F309}", 54, 72, 6], ["\u{1F3D6}\uFE0F", 16, 44, 6], ["\u26F1\uFE0F", 84, 32, 6], ["\u{1F30A}", 36, 30, 2]],
    sapa: [["\u{1F3D4}\uFE0F", 48, 80, 4], ["\u{1F33E}", 16, 40, 6], ["\u2601\uFE0F", 80, 30, 54], ["\u{1F332}", 86, 38, 6], ["\u{1F375}", 30, 28, 4]],
    halong: [["\u26F5", 46, 50, 14], ["\u{1F3DD}\uFE0F", 18, 52, 6], ["\u{1FAA8}", 76, 42, 6], ["\u{1F30A}", 50, 30, 2]],
    bmt: [["\u2615", 22, 42, 8], ["\u{1F333}", 56, 58, 8], ["\u{1F418}", 82, 44, 6], ["\u{1F33F}", 38, 30, 4]],
    canTho: [["\u{1F6F6}", 40, 46, 6], ["\u{1F34D}", 16, 36, 8], ["\u{1F965}", 80, 36, 8], ["\u{1F334}", 60, 58, 8]],
    caMau: [["\u{1F980}", 22, 38, 6], ["\u{1F333}", 54, 54, 8], ["\u{1F990}", 80, 30, 6], ["\u{1F30A}", 38, 28, 2]],
    hoangSa: [["\u{1F3DD}\uFE0F", 46, 66, 6], ["\u{1F334}", 22, 46, 8], ["\u2693", 82, 34, 6], ["\u{1F6A2}", 66, 36, 34]]
  };
  var sceneHTML = (id) => `<div class="loc-scene" aria-hidden="true">${(SCENES[id] || []).map(([e, x, sz, b]) => `<span style="left:${x}%;font-size:${sz}px;bottom:${b}px">${e}</span>`).join("")}</div>`;
  var VM_H = 136;
  var vmXY = ([lo, la]) => [(lo - 102) * 8, (24 - la) * 8];
  var vmF = (n) => +n.toFixed(1);
  var vmPt = (p) => {
    const [x, y] = vmXY(p);
    return vmF(x) + " " + vmF(y);
  };
  function vmCurve(pts, tn = 1) {
    const q = pts.map(vmXY);
    let d = "";
    for (let i = 0; i < q.length - 1; i++) {
      const a = q[i - 1] || q[i], b = q[i], c = q[i + 1], e = q[i + 2] || c, k = tn / 6;
      d += `C${vmF(b[0] + (c[0] - a[0]) * k)} ${vmF(b[1] + (c[1] - a[1]) * k)} ${vmF(c[0] - (e[0] - b[0]) * k)} ${vmF(c[1] - (e[1] - b[1]) * k)} ${vmF(c[0])} ${vmF(c[1])}`;
    }
    return d;
  }
  var vmLine = (pts, tn) => `M${vmPt(pts[0])}${vmCurve(pts, tn)}`;
  var vmLoop = (pts, tn) => `${vmLine([...pts, pts[0]], tn)}Z`;
  var VM_N = [[102.15, 22.4], [102.45, 22.75], [102.9, 22.5], [103.3, 22.75], [103.6, 22.6], [103.95, 22.5], [104.3, 22.82], [104.7, 23], [105, 23.25], [105.32, 23.37], [105.6, 23.1], [105.95, 23], [106.4, 22.9], [106.7, 22.85], [106.6, 22.45], [106.75, 22], [107.15, 21.95], [107.45, 21.65], [107.95, 21.55], [108.05, 21.5]];
  var VM_C = [[108.05, 21.5], [107.75, 21.3], [107.5, 21.1], [107.3, 21], [107, 20.85], [106.8, 20.75], [106.6, 20.55], [106.5, 20.3], [106.2, 20.1], [105.95, 19.9], [105.85, 19.6], [105.8, 19.25], [105.8, 18.7], [106.1, 18.35], [106.4, 18], [106.65, 17.55], [107.1, 17], [107.5, 16.6], [107.9, 16.35], [108.2, 16.12], [108.35, 15.9], [108.65, 15.55], [108.9, 15.15], [109.05, 14.6], [109.2, 14], [109.3, 13.5], [109.4, 13], [109.3, 12.5], [109.2, 12], [109.1, 11.6], [108.9, 11.3], [108.5, 11], [108.1, 10.9], [107.6, 10.55], [107.1, 10.35], [106.85, 10.4], [106.75, 10.3], [106.6, 9.95], [106.4, 9.55], [106, 9.3], [105.7, 9], [105.35, 8.75], [104.85, 8.6], [104.8, 8.8], [104.95, 9.3], [105.05, 9.8], [105.05, 10], [104.8, 10.2], [104.5, 10.42]];
  var VM_W = [[104.5, 10.42], [104.85, 10.9], [105.35, 10.85], [105.8, 11.05], [106.1, 11.35], [106.4, 11.7], [106.9, 11.95], [107.3, 12.15], [107.5, 12.4], [107.4, 13], [107.5, 13.5], [107.4, 14.1], [107.55, 14.6], [107.4, 15.15], [107.55, 15.6], [107.2, 15.9], [107.1, 16.2], [106.7, 16.55], [106.55, 17], [106.4, 17], [105.95, 17.4], [105.6, 17.75], [105.15, 18.3], [104.7, 18.75], [104, 19.2], [104, 19.7], [104.6, 20.4], [104.1, 20.85], [103.7, 20.65], [103.35, 20.95], [103, 21.5], [102.7, 21.7], [102.2, 22.05], [102.15, 22.4]];
  var VM_GULF = [[104.5, 10.42], [104.2, 10.55], [103.6, 10.6], [103.2, 11], [102.9, 11.6], [102.5, 12.1], [102, 12.4]];
  var VM_CHINA = [[114.5, 22.6], [113.6, 22.1], [112.3, 21.7], [111, 21.5], [110.5, 21.1], [110.4, 20.4], [110.2, 20.25], [109.95, 20.9], [109.7, 21.45], [109.1, 21.5], [108.05, 21.5]];
  var VM_HAINAN = [[108.65, 19.35], [108.8, 19.8], [109.3, 20.05], [110.1, 20.1], [110.6, 19.9], [111, 19.6], [110.8, 19], [110.4, 18.7], [109.7, 18.3], [109.1, 18.25], [108.65, 18.5], [108.6, 19]];
  var VM_PQ = [[103.98, 10.45], [104.05, 10.3], [104, 10.1], [103.92, 9.95], [103.85, 10.1], [103.88, 10.3]];
  var VM_CD = [[106.55, 8.78], [106.65, 8.72], [106.7, 8.65], [106.6, 8.62], [106.52, 8.7]];
  var VM_LAND = `M${vmPt(VM_N[0])}${vmCurve(VM_N)}${vmCurve(VM_C)}${vmCurve(VM_W)}Z`;
  var VM_SEA = `${vmLine(VM_C)}${vmCurve(VM_GULF)}L${vmPt([102, 7])}L${vmPt([114.5, 7])}L${vmPt(VM_CHINA[0])}${vmCurve(VM_CHINA)}Z`;
  var VM_RIVERS = [
    [[103.97, 22.5], [104.5, 22], [104.95, 21.65], [105.4, 21.3], [105.85, 21.03], [106.2, 20.65], [106.55, 20.25]],
    // sông Hồng
    [[104.9, 11.6], [105.1, 11.15], [105.25, 10.8], [105.8, 10.35], [106.3, 10.1], [106.75, 9.95]],
    // Mê Kông - sông Tiền
    [[105.3, 10.75], [105.6, 10.2], [105.9, 9.8], [106.2, 9.45]],
    // sông Hậu
    [[104.2, 14.2], [104.9, 12.8], [104.9, 11.6]]
    // Mê Kông thượng
  ];
  var VM_MTS = [[103.8, 22.25], [104.25, 22.05], [104.6, 21.6], [103.3, 21.5], [105.6, 18.4], [106.2, 17.6], [106.8, 16.8], [107.1, 15.9], [107.25, 15.2], [108.3, 13.9], [108.4, 13], [108.5, 12], [105, 22]];
  var VM_ISL = [[111.2, 16.45], [111.6, 16.55], [111.75, 16.2], [112.3, 16.05], [111.5, 16.85]];
  var VM_TS = [[114, 10.3], [113.4, 9], [112.9, 9.8], [112.3, 8.9], [111.9, 9.9], [113.9, 9.2], [112.6, 10]];
  var vmTxt = (lo, la, t, cls, rot) => {
    const [x, y] = vmXY([lo, la]);
    return `<text x="${vmF(x)}" y="${vmF(y)}" class="vt ${cls}"${rot ? ` transform="rotate(${rot} ${vmF(x)} ${vmF(y)})"` : ""}>${t}</text>`;
  };
  var vmMt = (p) => {
    const [x, y] = vmXY(p);
    return `M${vmF(x - 1.3)} ${vmF(y + 0.9)}L${vmF(x - 0.2)} ${vmF(y - 1)}L${vmF(x + 0.5)} ${vmF(y + 0.1)}L${vmF(x + 0.9)} ${vmF(y - 0.5)}L${vmF(x + 1.5)} ${vmF(y + 0.9)}Z`;
  };
  var vmDot = (p, r) => {
    const [x, y] = vmXY(p);
    return `<circle cx="${vmF(x)}" cy="${vmF(y)}" r="${r}"/>`;
  };
  var VM_PIN_LBL = { goc: ["Ti\u1EC7m g\u1ED1c", "r"], hanoi: ["H\xE0 N\u1ED9i", "l"], sapa: ["Sa Pa", "r"], halong: ["H\u1EA1 Long", "r"], hue: ["Hu\u1EBF", "l"], danang: ["\u0110\xE0 N\u1EB5ng", "r"], bmt: ["Bu\xF4n Ma Thu\u1ED9t", "r"], hcm: ["TP.HCM", "r"], canTho: ["C\u1EA7n Th\u01A1", "l"], caMau: ["C\xE0 Mau", "r"], hoangSa: ["Ho\xE0ng Sa", "r"] };
  var vmapSvg = () => `<svg viewBox="0 0 100 ${VM_H}" role="img" aria-label="B\u1EA3n \u0111\u1ED3 Vi\u1EC7t Nam">
  <defs><pattern id="vwave" width="7" height="5" patternUnits="userSpaceOnUse"><path d="M0 1.6Q1.75 0 3.5 1.6T7 1.6M-3.5 4.1Q-1.75 2.5 0 4.1T3.5 4.1T7 4.1" class="vwv"/></pattern></defs>
  <rect width="100" height="${VM_H}" class="vnb"/>
  ${vmTxt(103.6, 23.3, "TRUNG QU\u1ED0C", "nb")}${vmTxt(105.3, 17.6, "L\xC0O", "nb", -62)}${vmTxt(102.95, 15.2, "TH\xC1I LAN", "nb", -90)}${vmTxt(105, 12.2, "CAMPUCHIA", "nb")}
  <path d="${VM_SEA}" class="vsea"/><path d="${VM_SEA}" fill="url(#vwave)"/>
  <path d="${vmLoop(VM_HAINAN)}" class="vnb2"/>${vmTxt(109.7, 19.1, "H\u1EA3i Nam", "nb s")}
  ${vmTxt(112.3, 13.6, "BI\u1EC2N \u0110\xD4NG", "sea")}${vmTxt(107.35, 18.9, "V\u1ECBnh B\u1EAFc B\u1ED9", "sea s")}${vmTxt(103.2, 9.2, "V\u1ECBnh Th\xE1i Lan", "sea s")}
  <path d="${VM_LAND}" class="vglow"/>
  <path d="${VM_LAND}" class="land"/>
  <path d="${vmLoop(VM_PQ)}" class="land isl-l"/><path d="${vmLoop(VM_CD)}" class="land isl-l"/>
  ${VM_RIVERS.map((r, i) => `<path d="${vmLine(r)}" class="river${i === 3 ? " dim" : ""}"/>`).join("")}
  <path d="${VM_MTS.map(vmMt).join("")}" class="mts"/>
  <g class="isl">${VM_ISL.map((p) => vmDot(p, 0.55)).join("")}</g><g class="isl">${VM_TS.map((p) => vmDot(p, 0.55)).join("")}</g>
  ${vmTxt(111.5, 15.3, "Q.\u0111 Ho\xE0ng Sa", "sea s")}${vmTxt(112.7, 8.55, "Q.\u0111 Tr\u01B0\u1EDDng Sa", "sea s")}
  ${vmTxt(103.3, 21.55, "Ho\xE0ng Li\xEAn S\u01A1n", "mt s", 0)}${vmTxt(107.2, 14.35, "Tr\u01B0\u1EDDng S\u01A1n", "mt s", -72)}${vmTxt(106.1, 21.7, "S. H\u1ED3ng", "rv s", -38)}${vmTxt(104.75, 11.15, "S. M\xEA K\xF4ng", "rv s", 0)}${vmTxt(103.6, 10.85, "Ph\xFA Qu\u1ED1c", "nb s")}
  <g class="cmp" transform="translate(89 13)"><circle r="6.2" class="cmp-r"/><path d="M0 -6L1.5 0L0 6L-1.5 0Z" class="cmp-n"/><path d="M-6 0L0 -1.5L6 0L0 1.5Z" class="cmp-e"/><text y="-8" class="vt cmp-t">B</text></g>
  <g class="scl" transform="translate(36 131)"><path d="M0 0H14.4M0 -1V1M7.2 -.7V.7M14.4 -1V1"/><text x="7.2" y="-2" class="vt s">200 km</text></g>
</svg>`;
  var VM_LEGEND = '<div class="vm-legend"><span><i class="lg-dot"></i>Qu\xE1n tr\xE0</span><span><i class="lg-isl"></i>\u0110\u1EA3o</span><span><i class="lg-rv"></i>S\xF4ng</span><span><i class="lg-mt"></i>N\xFAi</span></div>';
  var khoinghiep = {
    html() {
      const pins = Object.entries(LOCATIONS).map(([id, l]) => {
        const [lb, sd] = VM_PIN_LBL[id] || [l.short || l.name, "r"];
        return `<button class="pin pin-${sd} ${S.location === id ? "on" : ""}" style="left:${l.map[0]}%;top:${l.map[1]}%" data-act="pin" data-id="${id}" aria-label="${esc(l.name)}"><span>${l.icon}</span><small>${esc(lb)}</small></button>`;
      }).join("");
      const cur2 = LOCATIONS[S.location];
      return `<div class="cur-loc"><span class="chip y">\u{1F3E0} TI\u1EC6M TR\xC0 G\u1ED0C (BAN \u0110\u1EA6U)</span><span class="chip green">\u2B50 \u0110ANG KINH DOANH</span><h4>${cur2.icon} ${esc(cur2.name)}</h4><i>"${esc(cur2.slogan)}"</i><p>${esc(cur2.desc)}</p></div>
      <h4 class="subh">B\u1EA3n \u0110\u1ED3 Kh\u1EDFi Nghi\u1EC7p Xuy\xEAn Vi\u1EC7t</h4><p class="muted">Ch\u1EA1m v\xE0o c\xE1c bi\u1EC3u t\u01B0\u1EE3ng ghim tr\xEAn b\u1EA3n \u0111\u1ED3 ho\u1EB7c danh s\xE1ch b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 ch\u1ECDn \u0111\u1ECBa \u0111i\u1EC3m m\u1EDF qu\xE1n. M\u1ED7i t\u1EC9nh th\xE0nh mang l\u1EA1i l\u1EE3i th\u1EBF doanh thu v\xE0 th\u1EED th\xE1ch v\u1EADn h\xE0nh \u0111\u1ED9c b\u1EA3n!</p>
      <div class="vmap">${vmapSvg()}${pins}${VM_LEGEND}</div>
      <h4 class="subh">Danh S\xE1ch \u0110\u1ECBa \u0110i\u1EC3m Kinh Doanh</h4>${Object.keys(LOCATIONS).map(locCard).join("")}`;
    },
    acts: {
      pin: (t) => {
        const el = document.getElementById("loc-" + t.dataset.id);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
        el?.classList.add("flash");
        setTimeout(() => el?.classList.remove("flash"), 1400);
      },
      startup: (t) => {
        const l = LOCATIONS[t.dataset.id];
        if (S.money < LOCATION_COST) return toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n kh\u1EDFi nghi\u1EC7p", "err");
        confirmBox(`Kh\u1EDFi nghi\u1EC7p t\u1EA1i ${l.name}?`, `Chi ph\xED ${fmtK(LOCATION_COST)}. Qu\xE1n chuy\u1EC3n sang v\xF9ng m\u1EDBi: \u0111\u1ED5i th\u1EDDi ti\u1EBFt, l\u1EE3i th\u1EBF v\xE0 th\u1EED th\xE1ch v\u1EADn h\xE0nh.`, () => {
          S.money -= LOCATION_COST;
          S.location = t.dataset.id;
          S.forecast = [];
          ensureForecast();
          sfx("level");
          markDirty("hud", "panel", "board", "view");
          requestSave();
          toast(`\u{1F680} \u0110\xE3 kh\u1EDFi nghi\u1EC7p t\u1EA1i ${l.name}!`, "gold");
        }, "Kh\u1EDFi nghi\u1EC7p");
      }
    }
  };
  var sanh = {
    html() {
      const b = bonus();
      return `<div class="lobby-top"><div class="lobby-stat"><span>\u{1F465} Ch\u1EDD: <b>0</b> kh\xE1ch</span><span>\u{1FA91} B\xE0n: <b>0/${b.tables}</b> b\xE0n</span><span>\u{1F4B0} <b>${fmtK(S.money)}</b></span></div></div>
      <div class="lcard"><div class="lc-h"><h4>\u{1F9CB} Qu\u1EA7y Pha Ch\u1EBF & H\xE0ng Ch\u1EDD</h4><span class="pill">T\u1ED1i \u0111a ${b.queue} kh\xE1ch</span></div><p class="muted">Kh\xE1ch t\u1EF1 \u0111\u1ED9ng \u0111\u1EBFn x\u1EBFp h\xE0ng (t\u1ED1i \u0111a ${b.queue} kh\xE1ch ch\u1EDD). M\u1EDF r\u1ED9ng qu\u1EA7y \u1EDF N\xE2ng c\u1EA5p \u203A Trang b\u1ECB \u0111\u1EC3 ch\u1EDD \u0111\u01B0\u1EE3c nhi\u1EC1u h\u01A1n.</p><div class="lobby-q"><span class="lq">\u{1F642}</span><span class="lq">\u{1F600}</span><span class="lq">\u{1F9D1}</span><span class="lq dim">\uFF0B</span></div></div>
      <div class="lcard"><div class="lc-h"><h4>\u{1FA91} Khu B\xE0n Gh\u1EBF Kh\xE1ch Ng\u1ED3i</h4><span class="pill y">\u{1FA91} +10% ng\u1ED3i t\u1EA1i qu\xE1n</span></div><p class="muted">Kh\xE1ch ch\u1EC9 v\xE0o ng\u1ED3i khi b\xE0n \u0111\u01B0\u1EE3c d\u1ECDn s\u1EA1ch \u2728 \u2014 trong ca b\xE1n b\u1EA5m <b>Ra s\u1EA3nh \u2192</b> \u0111\u1EC3 d\u1ECDn b\xE0n d\u01A1 nh\u1EADn ti\u1EC1n boa!</p>
        <div class="tables">${Array.from({ length: b.tables }, (_, i) => `<div class="tbl free"><span class="t-ico">\u2728</span><small>B\xE0n ${i + 1}</small></div>`).join("")}</div>
        <button class="btn gold block" data-act="goto" data-to="nangcap">\u{1F6E0}\uFE0F N\xE2ng c\u1EA5p b\xE0n gh\u1EBF</button></div>`;
    },
    acts: { goto: (t) => {
      S.subtab.nc = "trangbi";
      emit("goto", t.dataset.to);
    } }
  };
  var danhgia = {
    html() {
      const rv = S.reviews;
      const dist = [5, 4, 3, 2, 1].map((s) => [s, rv.filter((r) => r.stars === s).length]);
      const mx = Math.max(1, ...dist.map((d) => d[1]));
      return `<div class="rvhead"><div class="big-r">${S.rating.toFixed(1).replace(".", ",")}<small>/5</small></div><div><span class="stars lg">${Array.from({ length: 5 }, (_, i) => `<i class="${i < Math.round(S.rating) ? "on" : ""}">\u2605</i>`).join("")}</span><small>${S.ratingCount} l\u01B0\u1EE3t \u0111\xE1nh gi\xE1 \xB7 ${rv.length} g\u1EA7n nh\u1EA5t</small></div></div>
      <div class="dist">${dist.map(([s, n]) => `<div class="dr"><span>${s}\u2605</span><div class="bar"><i style="width:${n / mx * 100}%"></i></div><b>${n}</b></div>`).join("")}</div>
      ${rv.length ? rv.slice(0, 30).map((r) => `<div class="review"><span class="r-av">${r.av}</span><div class="grow"><div class="r-h"><b>${esc(r.name)}</b><span class="stars">${"\u2605".repeat(r.stars)}${"\u2606".repeat(5 - r.stars)}</span></div><p>${esc(r.text)}</p><small>Ng\xE0y ${r.day}</small></div></div>`).join("") : '<div class="emptybox">\u2B50<b>Ch\u01B0a c\xF3 \u0111\xE1nh gi\xE1</b><p>M\u1EDF c\u1EEDa v\xE0 ph\u1EE5c v\u1EE5 kh\xE1ch \u0111\u1EC3 nh\u1EADn \u0111\xE1nh gi\xE1 \u0111\u1EA7u ti\xEAn!</p></div>'}`;
    },
    acts: {}
  };
  function periodEntries(mode, idx) {
    const hs = S.history;
    const len = mode === "day" ? 1 : mode === "week" ? 7 : 30;
    const end2 = hs.length - idx * len;
    const start = Math.max(0, end2 - len);
    return { list: hs.slice(start, end2), label: mode === "day" ? hs[end2 - 1] ? `Ng\xE0y ${hs[end2 - 1].day}` : "\u2014" : mode === "week" ? `Tu\u1EA7n ${Math.ceil(Math.max(1, hs.length - idx * 7) / 7)}` : `Th\xE1ng ${Math.ceil(Math.max(1, hs.length - idx * 30) / 30)}`, can: { prev: start > 0, next: idx > 0 } };
  }
  var tongket = {
    html() {
      const mode = S.subtab.tk || "day";
      const idx = S.subtab.tkIdx || 0;
      const per = periodEntries(mode, idx);
      const a = aggregate(per.list);
      const ev = mode === "day" && per.list[0] ? DAY_EVENTS.find((e) => e.id === (per.list[0].event || "normal")) : null;
      return `<div class="tabs">${[["day", "Theo ng\xE0y"], ["week", "Theo tu\u1EA7n"], ["month", "Theo th\xE1ng"]].map(([id, l]) => `<button class="tab ${mode === id ? "on" : ""}" data-act="tkmode" data-v="${id}">${l}</button>`).join("")}</div>
      <div class="navr"><button class="rb" data-act="tkprev" ${per.can.prev ? "" : "disabled"}>\u2039</button><b>${esc(per.label)}</b><button class="rb" data-act="tknext" ${per.can.next ? "" : "disabled"}>\u203A</button></div>
      ${ev ? `<div class="evline">${ev.icon} S\u1EF1 ki\u1EC7n: <b>${esc(ev.name)}</b></div>` : ""}
      ${per.list.length ? `<div class="day-stats"><div><b>${a.cups}</b><span>ly b\xE1n</span></div><div><b>${a.left}</b><span>kh\xE1ch b\u1ECF v\u1EC1</span></div><div><b>${a.avgStars ? a.avgStars.toFixed(1) : "\u2013"}\u2605</b><span>\u0111\xE1nh gi\xE1</span></div></div>${plHTML(a, per.label)}` : '<div class="emptybox">\u{1F4CA}<b>Ch\u01B0a c\xF3 d\u1EEF li\u1EC7u</b><p>Ho\xE0n th\xE0nh \xEDt nh\u1EA5t m\u1ED9t ng\xE0y b\xE1n h\xE0ng \u0111\u1EC3 xem b\xE1o c\xE1o.</p></div>'}`;
    },
    acts: {
      tkmode: (t) => {
        S.subtab.tk = t.dataset.v;
        S.subtab.tkIdx = 0;
        markDirty("panel");
      },
      tkprev: () => {
        S.subtab.tkIdx = (S.subtab.tkIdx || 0) + 1;
        markDirty("panel");
      },
      tknext: () => {
        S.subtab.tkIdx = Math.max(0, (S.subtab.tkIdx || 0) - 1);
        markDirty("panel");
      }
    }
  };
  var banbe = {
    html() {
      const f = S.friends;
      const list = [...NPC_FRIENDS.map((x) => ({ ...x })), ...f.list];
      const board = [{ id: "me", name: S.shopName + " (B\u1EA1n)", av: "\u2B50", rich: S.money, rating: S.rating }, ...list].sort((a, b) => b.rich - a.rich);
      return `<div class="codecard"><small>M\xE3 m\u1EDDi c\u1EE7a b\u1EA1n</small><b>${f.code}</b><button class="btn soft sm" data-act="copycode">\u{1F4CB} Sao ch\xE9p</button></div>
      <div class="addf"><input id="friendCode" placeholder="Nh\u1EADp m\xE3 b\u1EA1n b\xE8 (TTN-XXXXX)" aria-label="M\xE3 b\u1EA1n b\xE8"><button class="btn pri sm" data-act="addf">Th\xEAm b\u1EA1n</button></div>
      <h5 class="grp">\u{1F465} Danh s\xE1ch b\u1EA1n b\xE8 (${list.length})</h5>
      ${list.map((x) => `<div class="frow"><span class="r-av">${x.av}</span><div class="grow"><b>${esc(x.name)}</b><small>\u2B50 ${x.rating.toFixed(1)} \xB7 \u{1F4B0} ${fmtK(x.rich)}</small></div><button class="btn ${f.gifted[x.id] === S.day ? "ghost" : "gold"} sm" data-act="visit" data-id="${x.id}" ${f.gifted[x.id] === S.day ? "disabled" : ""}>${f.gifted[x.id] === S.day ? "\u0110\xE3 th\u0103m" : "\u{1F381} Th\u0103m qu\xE1n"}</button></div>`).join("")}
      <h5 class="grp">\u{1F3C6} B\u1EA3ng x\u1EBFp h\u1EA1ng t\xE0i s\u1EA3n</h5>${board.map((x, i) => `<div class="dl ${x.id === "me" ? "me" : ""}"><span>${i + 1}. ${x.av} ${esc(x.name)}</span><b>${fmtK(x.rich)}</b></div>`).join("")}`;
    },
    acts: {
      copycode: async () => {
        try {
          await navigator.clipboard.writeText(S.friends.code);
          toast("\u0110\xE3 sao ch\xE9p m\xE3 m\u1EDDi!", "ok");
        } catch (e) {
          toast("M\xE3 c\u1EE7a b\u1EA1n: " + S.friends.code, "ok");
        }
      },
      addf: () => {
        const v = ($("#friendCode")?.value || "").trim().toUpperCase();
        if (!/^TTN-[A-Z0-9]{3,8}$/.test(v)) return toast("M\xE3 b\u1EA1n b\xE8 kh\xF4ng h\u1EE3p l\u1EC7 (d\u1EA1ng TTN-XXXXX)", "err");
        if (v === S.friends.code) return toast("\u0110\xF3 l\xE0 m\xE3 c\u1EE7a b\u1EA1n!", "err");
        if (S.friends.list.some((x) => x.id === v)) return toast("\u0110\xE3 l\xE0 b\u1EA1n r\u1ED3i", "err");
        S.friends.list.push({ id: v, name: "B\u1EA1n " + v, av: pick(["\u{1F43B}", "\u{1F98A}", "\u{1F430}", "\u{1F43C}"]), rating: +rand(3.8, 4.9).toFixed(1), rich: Math.round(rand(2e5, 4e6)) });
        toast("\u0110\xE3 k\u1EBFt b\u1EA1n!", "ok");
        sfx("success");
        markDirty("panel");
        requestSave();
      },
      visit: (t) => {
        const id = t.dataset.id, gift = randInt(5, 20) * 1e3;
        S.friends.gifted[id] = S.day;
        S.money += gift;
        S.followers += randInt(10, 80);
        toast(`\u{1F381} B\u1EA1n t\u1EB7ng qu\xE0! +${fmtK(gift)}`, "gold");
        sfx("coin");
        markDirty("hud", "panel");
        requestSave();
      }
    }
  };
  function openPack() {
    const c = S.collection;
    if (c.packs <= 0) return null;
    c.packs--;
    const out = [];
    for (let i = 0; i < 3; i++) {
      const r = wpick(GACHA.weights);
      const idxs = GACHA.rarities.map((x, k2) => x === r ? k2 : -1).filter((k2) => k2 >= 0);
      const k = pick(idxs);
      const dup = !!c.owned[k];
      c.owned[k] = (c.owned[k] || 0) + 1;
      if (dup) addStock("tcDen", 3);
      out.push({ k, r, dup });
    }
    const sec = SECRET_RECIPES.filter((s) => !c.secrets[s.id]);
    let secret = null;
    if (sec.length && chance(0.12)) {
      secret = pick(sec);
      c.secrets[secret.id] = true;
    }
    markDirty("panel", "hud");
    requestSave();
    return { out, secret };
  }
  var suutam = {
    html() {
      const c = S.collection;
      const owned = Object.keys(c.owned).length;
      return `<div class="colhead"><h4>\u{1F3B4} S\u1ED4 TAY S\u01AFU T\u1EA6M & GACHA NGUY\xCAN LI\u1EC6U</h4><p>\u0110\xE3 c\xF3 <b>${owned}/${GACHA.names.length}</b> th\u1EBB \xB7 C\xF4ng th\u1EE9c \u0111\u1ED9c b\u1EA3n <b>${secretCount()}/${SECRET_RECIPES.length}</b> \xB7 Th\u01B0\u1EDFng: +${Math.min(20, owned * 0.3).toFixed(1)}% doanh thu</p>
      <div class="row2"><button class="btn gold" data-act="pack" ${c.packs > 0 ? "" : "disabled"}>\u{1F381} M\u1EDF t\xFAi qu\xE0 (${c.packs})</button><button class="btn soft" data-act="buypack">\u{1F6D2} Mua t\xFAi (${fmtK(GIFT_COST)})</button></div></div>
      <h5 class="grp">\u{1F4D6} C\xF4ng th\u1EE9c \u0111\u1ED9c b\u1EA3n</h5><div class="secrets">${SECRET_RECIPES.map((s) => `<div class="secret ${c.secrets[s.id] ? "got" : ""}"><span>${c.secrets[s.id] ? s.icon : "\u{1F512}"}</span><b>${c.secrets[s.id] ? esc(s.name) : "???"}</b><small>${c.secrets[s.id] ? esc(s.desc) : "Ch\u01B0a kh\xE1m ph\xE1"}</small></div>`).join("")}</div>
      <h5 class="grp">\u{1F9FA} Th\u1EBB nguy\xEAn li\u1EC7u</h5><div class="cards">${GACHA.names.map((n, k) => `<div class="gcard r${GACHA.rarities[k]} ${c.owned[k] ? "" : "unk"}"><span>${c.owned[k] ? GACHA.icons[k] : "\u2754"}</span><b>${c.owned[k] ? n : "???"}</b><small>${GACHA.rarityName[GACHA.rarities[k]]}${c.owned[k] > 1 ? " \xD7" + c.owned[k] : ""}</small></div>`).join("")}</div>`;
    },
    acts: {
      pack: () => {
        const r = openPack();
        if (!r) return;
        sfx("unlock");
        const m = openModal({ cls: "small", html: `<h3 class="m-title">\u2728 Ph\xE1t hi\u1EC7n m\u1EDBi!</h3><div class="cards">${r.out.map(({ k, dup }) => `<div class="gcard r${GACHA.rarities[k]} flip"><span>${GACHA.icons[k]}</span><b>${GACHA.names[k]}</b><small>${GACHA.rarityName[GACHA.rarities[k]]}${dup ? " \xB7 tr\xF9ng (+3 TC \u0111en)" : " \xB7 M\u1EDAI!"}</small></div>`).join("")}</div>${r.secret ? `<div class="secret got big"><span>${r.secret.icon}</span><b>C\xF4ng th\u1EE9c \u0111\u1ED9c b\u1EA3n: ${esc(r.secret.name)}</b><small>${esc(r.secret.desc)}</small></div>` : ""}<button class="btn pri block" data-act="x">Tuy\u1EC7t! \u2728</button>` });
        bindActions(m.body, { x: () => m.close() });
        fxSpark($(".gcard", m.body), 10);
      },
      buypack: () => {
        if (S.money < GIFT_COST) return toast("Kh\xF4ng \u0111\u1EE7 ti\u1EC1n", "err");
        S.money -= GIFT_COST;
        S.collection.packs++;
        sfx("coin");
        markDirty("hud", "panel");
      }
    }
  };
  var PANELS3 = { vuon, thucung, khoinghiep, sanh, danhgia, tongket, banbe, suutam };

  // js/minigames.js
  var N = 7;
  var ICONS = ["\u{1F9CB}", "\u{1F353}", "\u{1F96D}", "\u{1F375}", "\u{1F347}"];
  var SPECIAL = { stripeH: "\u26A1", stripeV: "\u26A1", bomb: "\u{1F366}", fish: "\u{1F41F}", rainbow: "\u{1F308}" };
  var uid = 1;
  var Q = null;
  var levelCfg = (L) => ({ types: L < 3 ? 4 : 5, moves: Math.max(16, 25 - Math.floor(L / 4)), collect: 10 + 2 * L, score: 1e3 + 200 * L });
  var rt = (q) => Math.floor(Math.random() * q.types);
  var mk = (q, t = rt(q)) => ({ id: uid++, t, sp: null });
  function newGrid(q) {
    const g = Array.from({ length: N }, () => Array(N).fill(null));
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        let t, tries = 0;
        do {
          t = rt(q);
          tries++;
        } while (tries < 20 && (c >= 2 && g[r][c - 1]?.t === t && g[r][c - 2]?.t === t || r >= 2 && g[r - 1][c]?.t === t && g[r - 2][c]?.t === t));
        g[r][c] = mk(q, t);
      }
    }
    return g;
  }
  function findMatches(g, swapCells = []) {
    const mark = /* @__PURE__ */ new Set();
    const runs = [];
    const key = (r, c) => r * N + c;
    for (let r = 0; r < N; r++) {
      let c = 0;
      while (c < N) {
        const t = g[r][c]?.t;
        let e = c + 1;
        while (t !== void 0 && e < N && g[r][e]?.t === t) e++;
        if (t !== void 0 && e - c >= 3) {
          runs.push({ dir: "h", r, c, len: e - c, t });
          for (let k = c; k < e; k++) mark.add(key(r, k));
        }
        c = e;
      }
    }
    for (let c = 0; c < N; c++) {
      let r = 0;
      while (r < N) {
        const t = g[r][c]?.t;
        let e = r + 1;
        while (t !== void 0 && e < N && g[e][c]?.t === t) e++;
        if (t !== void 0 && e - r >= 3) {
          runs.push({ dir: "v", r, c, len: e - r, t });
          for (let k = r; k < e; k++) mark.add(key(k, c));
        }
        r = e;
      }
    }
    const specials = [];
    const hr = runs.filter((x) => x.dir === "h"), vr = runs.filter((x) => x.dir === "v");
    const used = /* @__PURE__ */ new Set();
    for (const a of hr) for (const b of vr) {
      if (a.t !== b.t) continue;
      if (b.c >= a.c && b.c < a.c + a.len && a.r >= b.r && a.r < b.r + b.len) {
        specials.push({ r: a.r, c: b.c, sp: "bomb", t: a.t });
        used.add(a);
        used.add(b);
      }
    }
    for (const x of runs) {
      if (used.has(x)) continue;
      const anchor = swapCells.find((s) => x.dir === "h" ? s.r === x.r && s.c >= x.c && s.c < x.c + x.len : s.c === x.c && s.r >= x.r && s.r < x.r + x.len);
      const pr = anchor || (x.dir === "h" ? { r: x.r, c: x.c + Math.floor(x.len / 2) } : { r: x.r + Math.floor(x.len / 2), c: x.c });
      if (x.len >= 5) specials.push({ r: pr.r, c: pr.c, sp: "rainbow", t: x.t });
      else if (x.len === 4) specials.push({ r: pr.r, c: pr.c, sp: x.dir === "h" ? "stripeV" : "stripeH", t: x.t });
    }
    for (const s of swapCells) {
      for (const [dr, dc] of [[0, 0], [0, -1], [-1, 0], [-1, -1]]) {
        const r0 = s.r + dr, c0 = s.c + dc;
        if (r0 < 0 || c0 < 0 || r0 + 1 >= N || c0 + 1 >= N) continue;
        const t = g[r0][c0]?.t;
        if (t !== void 0 && g[r0][c0 + 1]?.t === t && g[r0 + 1][c0]?.t === t && g[r0 + 1][c0 + 1]?.t === t && !specials.some((p) => p.sp === "fish")) {
          [[r0, c0], [r0, c0 + 1], [r0 + 1, c0], [r0 + 1, c0 + 1]].forEach(([r, c]) => mark.add(key(r, c)));
          specials.push({ r: s.r, c: s.c, sp: "fish", t });
        }
      }
    }
    return { mark, specials };
  }
  function expand(g, mark, q, hintType) {
    const key = (r, c) => r * N + c;
    const queue = [...mark];
    const seen = new Set(queue);
    const add = (r, c) => {
      if (r < 0 || c < 0 || r >= N || c >= N) return;
      const k = key(r, c);
      if (!seen.has(k)) {
        seen.add(k);
        mark.add(k);
        queue.push(k);
      }
    };
    while (queue.length) {
      const k = queue.shift();
      const r = Math.floor(k / N), c = k % N, tile = g[r][c];
      if (!tile?.sp) continue;
      q.used[tile.sp] = (q.used[tile.sp] || 0) + 1;
      if (tile.sp === "stripeH") for (let i = 0; i < N; i++) add(r, i);
      else if (tile.sp === "stripeV") for (let i = 0; i < N; i++) add(i, c);
      else if (tile.sp === "bomb") for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) add(r + dr, c + dc);
      else if (tile.sp === "fish") {
        add(r, c);
        for (let i = 0; i < 3; i++) add(randInt(0, N - 1), randInt(0, N - 1));
      } else if (tile.sp === "rainbow") {
        const t = hintType ?? g[randInt(0, N - 1)][randInt(0, N - 1)]?.t;
        for (let rr = 0; rr < N; rr++) for (let cc = 0; cc < N; cc++) if (g[rr][cc]?.t === t) add(rr, cc);
      }
    }
  }
  function gravity(g, q) {
    for (let c = 0; c < N; c++) {
      let w = N - 1;
      for (let r = N - 1; r >= 0; r--) if (g[r][c]) {
        g[w][c] = g[r][c];
        if (w !== r) g[r][c] = null;
        w--;
      }
      for (let r = w; r >= 0; r--) g[r][c] = mk(q);
    }
  }
  function hasMove(g) {
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      for (const [dr, dc] of [[0, 1], [1, 0]]) {
        const r2 = r + dr, c2 = c + dc;
        if (r2 >= N || c2 >= N) continue;
        if (g[r][c].sp || g[r2][c2].sp) return true;
        [g[r][c], g[r2][c2]] = [g[r2][c2], g[r][c]];
        const ok = findMatches(g).mark.size > 0;
        [g[r][c], g[r2][c2]] = [g[r2][c2], g[r][c]];
        if (ok) return true;
      }
    }
    return false;
  }
  function tileHTML(t, r, c) {
    return `<div class="mt ${t.sp ? "sp " + t.sp : ""}" data-id="${t.id}" data-r="${r}" data-c="${c}" style="left:${c * 100 / N}%;top:${r * 100 / N}%"><span>${ICONS[t.t]}</span>${t.sp ? `<i>${SPECIAL[t.sp]}</i>` : ""}</div>`;
  }
  function paint(q, fresh = false) {
    const board = $("#crushBoard");
    if (!board) return;
    const present = new Map($$(".mt", board).map((e) => [e.dataset.id, e]));
    const keep = /* @__PURE__ */ new Set();
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      const t = q.g[r][c];
      if (!t) continue;
      keep.add(String(t.id));
      let el = present.get(String(t.id));
      if (!el) {
        el = h(tileHTML(t, fresh ? r : -2, c));
        board.appendChild(el);
        void el.offsetWidth;
      }
      el.dataset.r = r;
      el.dataset.c = c;
      el.style.left = `${c * 100 / N}%`;
      el.style.top = `${r * 100 / N}%`;
      el.className = `mt ${t.sp ? "sp " + t.sp : ""} ${q.sel && q.sel.r === r && q.sel.c === c ? "sel" : ""}`;
      el.firstElementChild.textContent = ICONS[t.t];
      const badge = el.querySelector("i");
      if (t.sp && !badge) el.insertAdjacentHTML("beforeend", `<i>${SPECIAL[t.sp]}</i>`);
    }
    for (const [id, el] of present) if (!keep.has(id) && !el.classList.contains("pop")) el.remove();
  }
  var tileCenter = (r, c) => ({ x: (c + 0.5) * 100 / N, y: (r + 0.5) * 100 / N });
  function burst(board, r, c, icon2, big = false) {
    if (!board || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { x, y } = tileCenter(r, c);
    const n = big ? 10 : 6;
    const w = board.clientWidth || 300;
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2 + rand(-0.3, 0.3), d = rand(0.45, big ? 1.5 : 1) * w / N * 1.5;
      const el = h(`<span class="mfx" style="left:${x}%;top:${y}%;font-size:${rand(big ? 14 : 11, big ? 22 : 17)}px">${i % 3 === 0 ? "\u2728" : i % 3 === 1 ? icon2 : "\u{1F4A5}"}</span>`);
      board.appendChild(el);
      el.animate([
        { transform: "translate(-50%,-50%) scale(.4) rotate(0)", opacity: 1 },
        { transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d}px)) scale(1.2) rotate(${rand(-200, 200)}deg)`, opacity: 1, offset: 0.55 },
        { transform: `translate(calc(-50% + ${Math.cos(a) * d * 1.2}px), calc(-50% + ${Math.sin(a) * d * 1.2 + 14}px)) scale(.2) rotate(${rand(-320, 320)}deg)`, opacity: 0 }
      ], { duration: rand(380, 560), easing: "cubic-bezier(.2,.7,.4,1)" }).onfinish = () => el.remove();
    }
    const ring = h(`<span class="mfx-ring" style="left:${x}%;top:${y}%"></span>`);
    board.appendChild(ring);
    setTimeout(() => ring.remove(), 420);
  }
  function specialFx(board, sp, r, c) {
    if (!board) return;
    const { x, y } = tileCenter(r, c);
    if (sp === "stripeH" || sp === "stripeV") {
      const beam = h(`<span class="mbeam ${sp === "stripeH" ? "hz" : "vt"}" style="${sp === "stripeH" ? `top:${y}%` : `left:${x}%`}"></span>`);
      board.appendChild(beam);
      setTimeout(() => beam.remove(), 520);
    } else if (sp === "bomb") {
      const w = h(`<span class="mshock" style="left:${x}%;top:${y}%"></span>`);
      board.appendChild(w);
      setTimeout(() => w.remove(), 560);
    } else if (sp === "fish") {
      const f = h(`<span class="mfish" style="left:${x}%;top:${y}%">\u{1F41F}</span>`);
      board.appendChild(f);
      const tx = rand(-0.4, 0.4) * board.clientWidth, ty = rand(-0.4, 0.4) * board.clientWidth;
      f.animate([{ transform: "translate(-50%,-50%) scale(1)" }, { transform: `translate(calc(-50% + ${tx / 2}px), calc(-50% + ${ty / 2 - 40}px)) scale(1.5) rotate(180deg)` }, { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1) rotate(360deg)` }], { duration: 560, easing: "ease-in-out" }).onfinish = () => f.remove();
    } else if (sp === "rainbow") {
      const f = h('<span class="mflash"></span>');
      board.appendChild(f);
      setTimeout(() => f.remove(), 600);
    }
  }
  function comboBanner(board, n) {
    const words = ["", "", "COMBO x2!", "NGON QU\xC1! x3", "SI\xCAU C\u1EA4P! x4", "HO\xC0N H\u1EA2O! x5"];
    const t = h(`<div class="mcombo c${Math.min(n, 5)}">${words[Math.min(n, 5)] || "HUY\u1EC0N THO\u1EA0I! x" + n}</div>`);
    board.appendChild(t);
    setTimeout(() => t.remove(), 900);
    if (n >= 3) {
      board.classList.remove("shake");
      void board.offsetWidth;
      board.classList.add("shake");
    }
  }
  function updateHud(q) {
    if (!$("#cMoves")) return;
    $("#cMoves").textContent = q.moves;
    $("#cScore").textContent = q.score;
    $("#cCollect").textContent = `${Math.min(q.got, q.cfg.collect)}/${q.cfg.collect}`;
    $("#cScoreGoal").textContent = `${Math.min(q.score, q.cfg.score)}/${q.cfg.score}`;
    const stars = q.score >= q.cfg.score * 1.5 ? 3 : q.score >= q.cfg.score * 1.2 ? 2 : q.score >= q.cfg.score ? 1 : 0;
    $$("#cStars i").forEach((s, i) => s.classList.toggle("on", i < stars));
    $("#cBar").style.width = `${clamp(q.score / q.cfg.score * 100, 0, 100)}%`;
  }
  async function resolve(q, swapCells) {
    let cascade = 0, first = true;
    while (true) {
      const { mark, specials } = findMatches(q.g, first ? swapCells : []);
      if (!mark.size && !q.forceMark?.size) break;
      if (q.forceMark) {
        q.forceMark.forEach((k) => mark.add(k));
        q.forceMark = null;
      }
      cascade++;
      const spKeys = new Set(specials.map((s) => s.r * N + s.c));
      expand(q.g, mark, q, q.hintRainbow);
      q.hintRainbow = void 0;
      const cleared = [...mark].filter((k) => !spKeys.has(k) || q.g[Math.floor(k / N)][k % N].sp);
      const pts = cleared.length * 20 * cascade;
      q.score += pts;
      for (const k of cleared) {
        const r = Math.floor(k / N), c = k % N, t = q.g[r][c];
        if (t) {
          if (t.t === 0) q.got++;
        }
      }
      const board = $("#crushBoard");
      for (const k of cleared) {
        const r = Math.floor(k / N), c = k % N, t = q.g[r][c];
        const el = $(`.mt[data-id="${t.id}"]`);
        if (el) {
          el.classList.add("pop");
          setTimeout(() => el.remove(), 260);
        }
        if (t.sp) specialFx(board, t.sp, r, c);
        burst(board, r, c, ICONS[t.t], !!t.sp || cleared.length >= 6);
        q.g[r][c] = null;
      }
      if (cleared.length >= 5 && cascade === 1) fxSpark(board, 6);
      for (const s of specials) {
        if (!q.g[s.r][s.c]) q.g[s.r][s.c] = { id: uid++, t: s.t, sp: s.sp };
        else {
          q.g[s.r][s.c].sp = s.sp;
          q.g[s.r][s.c].t = s.t;
        }
        q.made[s.sp] = (q.made[s.sp] || 0) + 1;
      }
      if (cascade > 1) comboBanner(board, cascade);
      if (pts >= 60) fxText(`+${pts}`, board, cascade > 1 ? "g" : "");
      sfx(cascade > 1 ? "boom" : "match");
      updateHud(q);
      await wait(300);
      if (Q !== q) return;
      gravity(q.g, q);
      paint(q);
      await wait(260);
      if (Q !== q) return;
      first = false;
    }
    if (!hasMove(q.g)) {
      q.g = newGrid(q.cfg);
      paint(q, true);
      toast("X\xE1o b\xE0n m\u1EDBi \u{1F504}", "");
      await wait(200);
    }
  }
  async function swap(q, a, b) {
    if (q.busy || q.over) return;
    q.busy = true;
    const A = q.g[a.r][a.c], B = q.g[b.r][b.c];
    q.g[a.r][a.c] = B;
    q.g[b.r][b.c] = A;
    paint(q);
    await wait(200);
    const m = findMatches(q.g, [a, b]);
    const spActive = A.sp || B.sp;
    if (!m.mark.size && !spActive) {
      q.g[a.r][a.c] = A;
      q.g[b.r][b.c] = B;
      paint(q);
      sfx("error");
      await wait(200);
      q.busy = false;
      return;
    }
    q.moves--;
    if (spActive) {
      q.forceMark = /* @__PURE__ */ new Set();
      const ak = [a, b].map((p) => p.r * N + p.c);
      ak.forEach((k) => q.forceMark.add(k));
      if (A.sp === "rainbow" && !B.sp) q.hintRainbow = B.t;
      else if (B.sp === "rainbow" && !A.sp) q.hintRainbow = A.t;
    }
    await resolve(q, [a, b]);
    if (Q !== q) return;
    q.sel = null;
    updateHud(q);
    q.busy = false;
    await checkEnd(q);
  }
  async function checkEnd(q) {
    const win = q.got >= q.cfg.collect && q.score >= q.cfg.score;
    if (win) return finish(q, true);
    if (q.moves <= 0) return finish(q, false);
  }
  function finish(q, win) {
    q.over = true;
    if (Q !== q) return;
    const L = S.crush.level;
    let reward = "";
    if (win) {
      S.crush.level = L + 1;
      S.crush.best = Math.max(S.crush.best || 0, L);
      S.crush.perm = Math.min(0.5, S.crush.perm + 0.01);
      const money = 8e3 + L * 2e3;
      S.money += money;
      reward = `+1% doanh thu v\u0129nh vi\u1EC5n \xB7 +${fmtK(money)}`;
      if (L % 5 === 0) {
        S.collection.packs++;
        const ids = ["tcDen", "traSua", "lyM"];
        for (const id of ids) addStock(id, 3);
        reward += " \xB7 \u{1F381} +1 t\xFAi qu\xE0 & 3 nguy\xEAn li\u1EC7u";
      }
      sfx("level");
    } else sfx("sad");
    markDirty("hud", "panel");
    requestSave();
    const ov = $("#crushOver");
    ov.hidden = false;
    ov.innerHTML = `<div class="ov-card"><div class="ov-ico">${win ? "\u{1F3C6}" : "\u{1F63F}"}</div><h3>${win ? "Th\u1EAFng m\xE0n " + L + "!" : "H\u1EBFt l\u01B0\u1EE3t r\u1ED3i!"}</h3><p>${win ? esc(reward) : "Th\u1EED l\u1EA1i nh\xE9, b\u1EA1n s\u1EBD l\xE0m \u0111\u01B0\u1EE3c th\xF4i!"}</p><button class="btn pri block" data-act="${win ? "next" : "retry"}">${win ? "M\xE0n ti\u1EBFp theo \u279C" : "Ch\u01A1i l\u1EA1i"}</button><button class="btn ghost block" data-act="x">\u0110\xF3ng</button></div>`;
  }
  function crushHTML() {
    const q = Q;
    return `<div class="crush"><div class="c-head"><div><h3>\u{1F36C} MILK TEA CRUSH</h3><small>M\xE0n ${S.crush.level} \xB7 ${S.crush.level < 3 ? "Nh\u1EADp M\xF4n Tr\xE0 S\u1EEFa" : "Th\u1EED Th\xE1ch Tr\xE0 S\u1EEFa"}</small></div><button class="btn soft sm" data-act="retry">\u{1F504} Ch\u01A1i l\u1EA1i</button></div>
    <div class="c-stats"><div><small>\u0110I\u1EC2M S\u1ED0</small><b id="cScore">0</b></div><div class="c-moves"><b id="cMoves">${q.moves}</b><small>L\u01AF\u1EE2T</small></div><div><small>M\u1EE4C TI\xCAU: ${q.cfg.score}</small><span class="stars" id="cStars"><i>\u2605</i><i>\u2605</i><i>\u2605</i></span></div></div>
    <div class="c-goals"><span>\u{1F3AF} M\u1EE4C TI\xCAU:</span><span class="g">${ICONS[0]} <b id="cCollect">0/${q.cfg.collect}</b></span><span class="g">\u2B50 <b id="cScoreGoal">0/${q.cfg.score}</b></span></div>
    <div class="bar"><i id="cBar" style="width:0%"></i></div>
    <p class="c-tip">L\xE0m quen x\u1EBFp k\u1EB9o: thu th\u1EADp ${q.cfg.collect} ${ICONS[0]} Tr\xE2n Ch\xE2u!</p>
    <div class="crush-board" id="crushBoard"></div><div class="crush-over" id="crushOver" hidden></div>
    <p class="c-tip">\u{1F4A1} Gh\xE9p 4: \u26A1 Ly S\u1ECDc qu\xE9t h\xE0ng/c\u1ED9t \xB7 Gh\xE9p 2x2: \u{1F41F} C\xE1 Bay \xB7 Gh\xE9p L/T: \u{1F366} Kem Cheese n\u1ED5 3x3 \xB7 Gh\xE9p 5: \u{1F308} C\u1EA7u V\u1ED3ng x\xF3a 1 lo\u1EA1i. Ho\xE0n th\xE0nh \u0111\u1EE7 M\u1EE5c ti\xEAu tr\u01B0\u1EDBc khi h\u1EBFt l\u01B0\u1EE3t!</p></div>`;
  }
  function openCrush() {
    const cfg = levelCfg(S.crush.level);
    Q = { cfg, g: null, moves: cfg.moves, score: 0, got: 0, busy: false, over: false, sel: null, types: cfg.types, used: {}, made: {} };
    Q.g = newGrid(cfg);
    const m = openModal({ id: "crush", cls: "crush-m", html: crushHTML(), onClose: () => {
      Q = null;
    } });
    paint(Q, true);
    updateHud(Q);
    const restart = () => {
      m.close();
      openCrush();
    };
    bindActions(m.body, { retry: restart, next: restart, x: () => m.close() });
    const board = $("#crushBoard", m.body);
    let down = null;
    board.addEventListener("pointerdown", (e) => {
      const el = e.target.closest(".mt");
      if (!el || !Q || Q.busy || Q.over) return;
      down = { r: +el.dataset.r, c: +el.dataset.c, x: e.clientX, y: e.clientY };
    });
    board.addEventListener("pointerup", (e) => {
      if (!down || !Q) return;
      const d = down;
      down = null;
      const dx = e.clientX - d.x, dy = e.clientY - d.y;
      if (Math.max(Math.abs(dx), Math.abs(dy)) > 18) {
        const b = Math.abs(dx) > Math.abs(dy) ? { r: d.r, c: d.c + Math.sign(dx) } : { r: d.r + Math.sign(dy), c: d.c };
        if (b.r >= 0 && b.c >= 0 && b.r < N && b.c < N) swap(Q, { r: d.r, c: d.c }, b);
        return;
      }
      const cur2 = { r: d.r, c: d.c };
      if (Q.sel && Math.abs(Q.sel.r - cur2.r) + Math.abs(Q.sel.c - cur2.c) === 1) {
        const a = Q.sel;
        Q.sel = null;
        swap(Q, a, cur2);
      } else {
        Q.sel = cur2;
        sfx("click");
        paint(Q);
      }
    });
  }
  function crushDebug() {
    return { get Q() {
      return Q;
    }, swap, N, open: openCrush };
  }
  var PN = 6;
  var PDUR = 30;
  var PGOAL = 120;
  var PCOMBO_MS = 1200;
  var PIDS = ["tcDen", "tcVang", "tcNo", "cuNang", "fUbe"];
  var PCOL = PIDS.length;
  var P2 = null;
  function pearlBurst(el, color, big) {
    const r = el.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
    const ring = h(`<span class="pfx-ring" style="left:${x}px;top:${y}px;border-color:${color}"></span>`);
    document.body.appendChild(ring);
    ring.animate([{ transform: "translate(-50%,-50%) scale(.3)", opacity: 0.9 }, { transform: "translate(-50%,-50%) scale(1.9)", opacity: 0 }], { duration: 420, easing: "ease-out" }).onfinish = () => ring.remove();
    const n = big ? 7 : 5;
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2 + rand(-0.3, 0.3), d = rand(24, big ? 62 : 48), s = rand(5, 9);
      const f = h(`<span class="pfx-dot" style="left:${x}px;top:${y}px;width:${s}px;height:${s}px;background:${color}"></span>`);
      document.body.appendChild(f);
      f.animate([{ transform: "translate(-50%,-50%) scale(1)", opacity: 1 }, { transform: `translate(calc(-50% + ${Math.cos(a) * d}px), calc(-50% + ${Math.sin(a) * d + 14}px)) scale(.3)`, opacity: 0 }], { duration: rand(380, 560), easing: "cubic-bezier(.2,.7,.4,1)" }).onfinish = () => f.remove();
    }
  }
  var pRand = () => randInt(0, PCOL - 1);
  function pNew() {
    return Array.from({ length: PN }, () => Array.from({ length: PN }, pRand));
  }
  function pGroup(b, r, c) {
    const col = b[r][c];
    if (col < 0) return [];
    const seen = /* @__PURE__ */ new Set(), st = [[r, c]], out = [];
    while (st.length) {
      const [y, x] = st.pop(), k = y * PN + x;
      if (seen.has(k) || y < 0 || x < 0 || y >= PN || x >= PN || b[y][x] !== col) continue;
      seen.add(k);
      out.push([y, x]);
      st.push([y + 1, x], [y - 1, x], [y, x + 1], [y, x - 1]);
    }
    return out;
  }
  function pCollapse(b) {
    const fall = Array.from({ length: PN }, () => Array(PN).fill(0));
    for (let c = 0; c < PN; c++) {
      const col = [];
      for (let r = PN - 1; r >= 0; r--) if (b[r][c] >= 0) col.push({ v: b[r][c], r });
      const nNew = PN - col.length;
      for (let r = PN - 1; r >= 0; r--) {
        const i = PN - 1 - r;
        if (i < col.length) {
          b[r][c] = col[i].v;
          fall[r][c] = r - col[i].r;
        } else {
          b[r][c] = pRand();
          fall[r][c] = r + (nNew - (i - col.length));
        }
      }
    }
    return fall;
  }
  var pHas = (b) => b.some((row, r) => row.some((_, c) => pGroup(b, r, c).length >= 2));
  function pRender(fall) {
    const el = $("#pBoard");
    if (!el || !P2) return;
    el.innerHTML = P2.b.map((row, r) => row.map((v, c) => `<button class="pc" data-act="pop" data-r="${r}" data-c="${c}" aria-label="${esc(ITEMS[PIDS[v]].name)}"><i class="pb" style="--pc:${ITEMS[PIDS[v]].color}"></i></button>`).join("")).join("");
    const balls = $$("#pBoard .pb");
    const step = el.firstElementChild ? el.firstElementChild.offsetHeight + 5 : 50;
    let maxFall = 0;
    balls.forEach((b, i) => {
      const d = fall ? fall[Math.floor(i / PN)][i % PN] : 0;
      if (fall && d > 0) {
        maxFall = Math.max(maxFall, d);
        b.animate([{ transform: `translateY(${-d * step}px)` }, { transform: "translateY(0)" }], { duration: 170 + d * 60, easing: "cubic-bezier(.35,.9,.45,1.25)" });
      } else if (!fall) {
        b.animate([{ transform: "scale(0)" }, { transform: "scale(1.12)" }, { transform: "scale(1)" }], { duration: 300, delay: i * 6, easing: "ease-out", fill: "backwards" });
      }
    });
    if (maxFall) {
      sfx("swoosh");
      setTimeout(() => P2 && !P2.over && sfx("bounce"), 170 + maxFall * 60);
    }
    pStats();
  }
  function pStats() {
    $("#pScore").textContent = P2.score;
    $("#pTime").textContent = Math.ceil(P2.t) + "s";
    $("#pBar").style.width = `${P2.t / PDUR * 100}%`;
  }
  function pComboFx(mul) {
    const e = $("#pCombo");
    if (!e) return;
    e.textContent = mul > 1 ? `COMBO x${mul}` : "";
    if (mul < 2) return;
    const s = 1.3 + Math.min(mul, 6) * 0.1;
    e.animate([{ transform: `scale(${s + 0.5}) rotate(-6deg)` }, { transform: `scale(${s}) rotate(5deg)` }, { transform: "scale(1) rotate(-3deg)" }, { transform: "scale(1) rotate(0)" }], { duration: 380, easing: "ease-out" });
    const b = $("#pBoard");
    if (mul >= 3 && b) b.animate([{ transform: "translateX(0)" }, { transform: "translateX(-3px)" }, { transform: "translateX(3px)" }, { transform: "translateX(-2px)" }, { transform: "translateX(0)" }], { duration: 220 });
  }
  function pEnd() {
    if (!P2 || P2.over) return;
    P2.over = true;
    clearInterval(P2.timer);
    const win = P2.score >= PGOAL;
    const money = P2.score * 60;
    const rewards = [];
    PIDS.forEach((id, i) => {
      const q = Math.floor(P2.cnt[i] / 4);
      if (q > 0) rewards.push([id, q]);
    });
    if (!rewards.length && P2.score >= 40) rewards.push(["tcDen", Math.floor(P2.score / 40)]);
    S.money += money;
    for (const [id, q] of rewards) addStock(id, q);
    S.pearl.best = Math.max(S.pearl.best, P2.score);
    let extra = "";
    if (win && chance(0.3)) {
      S.collection.packs++;
      extra = "<p>\u{1F381} +1 t\xFAi qu\xE0 s\u01B0u t\u1EA7m!</p>";
    }
    markDirty("hud", "panel");
    requestSave();
    sfx(win ? "win" : "lose");
    const rw = rewards.length ? rewards.map(([id, q]) => `<span class="prw"><i class="pb sm" style="--pc:${ITEMS[id].color}"></i>+${q} ${esc(ITEMS[id].name)}</span>`).join("") : '<span class="muted">Ch\u01B0a \u0111\u1EE7 vi\xEAn \u0111\u1EC3 nh\u1EADn tr\xE2n ch\xE2u</span>';
    $("#pBody").innerHTML = `<div class="ov-card inline"><div class="ov-ico">${win ? "\u{1F3C6}" : "\u{1F642}"}</div><h3>${win ? "TH\xC0NH C\xD4NG!" : "C\u1ED1 l\xEAn l\u1EA7n sau!"}</h3><p>\u0110i\u1EC3m: <b>${P2.score}</b> \xB7 Combo cao nh\u1EA5t: <b>x${P2.maxMul}</b> (k\u1EF7 l\u1EE5c ${S.pearl.best})</p><p>Ti\u1EC1n th\u01B0\u1EDFng: <b class="money">+${fmtK(money)}</b></p><div class="prws">${rw}</div>${extra}<button class="btn pri block" data-act="x">Nh\u1EADn th\u01B0\u1EDFng \u{1F381}</button></div>`;
  }
  function openPearl() {
    if (S.pearl.playsDay >= 3) return toast("H\xF4m nay b\u1EA1n \u0111\xE3 ch\u01A1i \u0111\u1EE7 3 l\u01B0\u1EE3t Tr\xE2n Ch\xE2u N\u1ED5", "err");
    const m = openModal({ id: "pearl", cls: "small", onClose: () => {
      if (P2?.timer) clearInterval(P2.timer);
      P2 = null;
    }, html: `<div id="pBody"><h3 class="m-title">\u26AB Tr\xE2n Ch\xE2u N\u1ED5</h3><p class="m-text center">Ch\u1EA1m nh\xF3m \u2265 2 tr\xE2n ch\xE2u c\xF9ng m\xE0u k\u1EC1 nhau \u0111\u1EC3 l\xE0m n\u1ED5. Nh\xF3m c\xE0ng l\u1EDBn \u0111i\u1EC3m c\xE0ng cao, n\u1ED5 li\xEAn ti\u1EBFp trong ${PCOMBO_MS / 1e3}s = nh\xE2n combo! M\u1EE5c ti\xEAu <b>${PGOAL}</b> \u0111i\u1EC3m trong ${PDUR} gi\xE2y. Cu\u1ED1i v\xE1n nh\u1EADn th\xEAm tr\xE2n ch\xE2u nguy\xEAn li\u1EC7u cho kho.</p><p class="m-text center muted">L\u01B0\u1EE3t h\xF4m nay: ${S.pearl.playsDay}/3 \xB7 K\u1EF7 l\u1EE5c: ${S.pearl.best}</p><button class="btn pri block" data-act="start">\u25B6 B\u1EAFt \u0111\u1EA7u</button></div>` });
    bindActions(m.body, {
      x: () => m.close(),
      start: () => {
        S.pearl.playsDay++;
        P2 = { b: pNew(), score: 0, combo: 0, maxMul: 1, lastPop: 0, cnt: Array(PCOL).fill(0), t: PDUR, over: false, timer: null };
        $("#pBody").innerHTML = `<div class="pg"><div class="mg-head"><span>\u2B50 <b id="pScore">0</b></span><span id="pCombo" class="pcombo"></span><span>\u23F1 <b id="pTime">30s</b></span></div><div class="bar"><i id="pBar"></i></div><div class="pboard" id="pBoard"></div><p class="m-text center muted">M\u1EE5c ti\xEAu ${PGOAL} \u0111i\u1EC3m \xB7 K\u1EF7 l\u1EE5c: <b>${S.pearl.best}</b></p></div>`;
        pRender();
        sfx("fly");
        let last2 = performance.now();
        P2.timer = setInterval(() => {
          const now = performance.now();
          P2.t -= (now - last2) / 1e3;
          last2 = now;
          if (P2.t <= 0) {
            P2.t = 0;
            pEnd();
            return;
          }
          if (P2.combo && now - P2.lastPop > PCOMBO_MS) {
            P2.combo = 0;
            const e = $("#pCombo");
            if (e) e.textContent = "";
          }
          const tm = $("#pTime");
          if (tm) {
            tm.textContent = Math.ceil(P2.t) + "s";
            $("#pBar").style.width = `${P2.t / PDUR * 100}%`;
          }
        }, 120);
      },
      pop: (t) => {
        if (!P2 || P2.over) return;
        const r = +t.dataset.r, c = +t.dataset.c, g = pGroup(P2.b, r, c);
        if (g.length < 2) {
          P2.combo = 0;
          pComboFx(0);
          sfx("pop");
          t.animate([{ transform: "translateX(-3px)" }, { transform: "translateX(3px)" }, { transform: "translateX(0)" }], { duration: 160 });
          return;
        }
        const now = performance.now();
        P2.combo = now - P2.lastPop <= PCOMBO_MS && P2.combo ? P2.combo + 1 : 1;
        P2.lastPop = now;
        const mul = Math.min(P2.combo, 6);
        P2.maxMul = Math.max(P2.maxMul, mul);
        const gain = g.length * g.length * mul, col = P2.b[r][c], color = ITEMS[PIDS[col]].color, big = g.length >= 5;
        P2.score += gain;
        P2.cnt[col] += g.length;
        for (const [y, x] of g) {
          const cell = $(`.pc[data-r="${y}"][data-c="${x}"]`);
          if (cell) {
            pearlBurst(cell, color, big);
            cell.firstElementChild.style.visibility = "hidden";
          }
          P2.b[y][x] = -1;
        }
        fxText(`+${gain}`, t, big ? "g big" : "g");
        if (big || mul >= 3) fxSpark(t, big ? 10 : 6);
        sfx(g.length >= 6 ? "pearlBoom" : g.length >= 4 ? "pearlPop2" : "pearlPop");
        if (mul >= 2) setTimeout(() => sfx("combo" + mul), 90);
        pComboFx(mul);
        const fall = pCollapse(P2.b);
        if (!pHas(P2.b)) {
          P2.b = pNew();
          pRender();
        } else pRender(fall);
      }
    });
  }
  var crush = {
    html() {
      const L = S.crush.level;
      return `<div class="mgcard crushc"><h4>\u{1F36C} MILK TEA CRUSH</h4><p>Gh\xE9p 3 icon gi\u1ED1ng nhau s\u1EBD n\u1ED5! M\u1ED7i m\xE0n v\u01B0\u1EE3t qua t\u0103ng <b>+1% doanh thu v\u0129nh vi\u1EC5n</b> cho qu\xE1n (kh\xF4ng b\u1ECB reset khi thua hay qua ng\xE0y m\u1EDBi).</p>
      <div class="mg-info"><div><small>M\xC0N HI\u1EC6N T\u1EA0I</small><b>M\xE0n ${L}</b></div><div><small>TH\u01AF\u1EDENG KHI TH\u1EAENG</small><b>+1% DT v\u0129nh vi\u1EC5n \u26A1</b><small>(C\u1EE9 5 m\xE0n: +1 T\xFAi Qu\xE0 \u{1F381})</small></div></div>
      <div class="mg-info"><div><small>Buff hi\u1EC7n c\xF3</small><b>+${(S.crush.perm * 100).toFixed(0)}% doanh thu</b></div><div><small>M\xE0n cao nh\u1EA5t</small><b>${S.crush.best || 0}</b></div></div>
      <div class="rules"><b>\u{1F4D6} Lu\u1EADt ch\u01A1i & Th\u1EED th\xE1ch t\u0103ng d\u1EA7n:</b><p>\u2022 M\xE0n c\xE0ng cao \u0111\u1ED9 kh\xF3 c\xE0ng t\u0103ng: m\u1EE5c ti\xEAu \u0111i\u1EC3m cao h\u01A1n, l\u01B0\u1EE3t \u0111i \xEDt h\u01A1n, nhi\u1EC1u lo\u1EA1i topping tr\xE0 s\u1EEFa v\xE0 th\u1EDDi gian \u0111\u1EBFm ng\u01B0\u1EE3c suy ngh\u0129 m\u1ED7i l\u01B0\u1EE3t nhanh d\u1EA7n.</p><p>\u2022 <b>Combo k\u1EB9o \u0111\u1EB7c bi\u1EC7t:</b></p><p>- Gh\xE9p 4: \u26A1 Ly S\u1ECDc qu\xE9t s\u1EA1ch 1 h\xE0ng/c\u1ED9t.</p><p>- Gh\xE9p 2x2: \u{1F41F} Con C\xE1 Bay t\u1EF1 b\u01A1i \u0111\u1EBFn n\u1ED5 \xF4 ng\u1EABu nhi\xEAn.</p><p>- Gh\xE9p L / T: \u{1F366} Kem Cheese n\u1ED5 lan 3x3.</p><p>- Gh\xE9p 5: \u{1F308} C\u1EA7u V\u1ED3ng qu\xE9t s\u1EA1ch to\xE0n b\u1ED9 1 lo\u1EA1i k\u1EB9o.</p></div>
      <button class="btn grad block" data-act="crush">\u{1F3AE} V\xC0O CH\u01A0I MILK TEA CRUSH NGAY</button></div>
      <div class="mgcard"><h4>\u26AB TR\xC2N CH\xC2U N\u1ED4</h4><p>Ch\u1EA1m nh\xF3m tr\xE2n ch\xE2u c\xF9ng m\xE0u k\u1EC1 nhau \u0111\u1EC3 l\xE0m n\u1ED5 trong 30 gi\xE2y. Nh\u1EADn ti\u1EC1n & nhi\u1EC1u lo\u1EA1i tr\xE2n ch\xE2u nguy\xEAn li\u1EC7u. H\xF4m nay c\xF2n <b>${3 - S.pearl.playsDay}</b> l\u01B0\u1EE3t.</p><button class="btn pri block" data-act="pearl">\u25B6 Ch\u01A1i Tr\xE2n Ch\xE2u N\u1ED5</button></div>`;
    },
    acts: { crush: () => openCrush(), pearl: () => openPearl() }
  };

  // js/avatar.js
  var sid = 0;
  function stampSVG(st, size = 150, name = S.shopName) {
    const id = "sp" + sid++;
    const icon2 = st.img ? `<image href="${st.img}" x="30" y="26" width="40" height="40" clip-path="circle(20px at 20px 20px)" preserveAspectRatio="xMidYMid slice"/>` : `<text x="50" y="${st.textStyle === "curveBottom" ? 56 : 58}" text-anchor="middle" font-size="30">${st.icon}</text>`;
    const frame2 = st.frame === "round" ? `<circle cx="50" cy="50" r="47" fill="${st.bg}" stroke="#f06f8f" stroke-width="3"/>` : st.frame === "rounded" ? `<rect x="4" y="4" width="92" height="92" rx="22" fill="${st.bg}" stroke="#f06f8f" stroke-width="3"/>` : `<circle cx="50" cy="46" r="42" fill="${st.bg}" stroke="#f06f8f" stroke-width="3"/><path d="M8 72 L50 84 L92 72 L92 90 L50 98 L8 90 Z" fill="#f06f8f"/>`;
    const dark = ["#8b5a3c", "#2f2a3a"].includes(st.bg);
    const fg = dark ? "#fff" : "#7a3b4d";
    const nm = esc(name).slice(0, 22);
    const fs = clamp(150 / Math.max(10, nm.length * 1.6), 6, 10);
    let text = "";
    if (st.textStyle === "curveTop") text = `<path id="${id}" d="M16,50 A34,34 0 0 1 84,50" fill="none"/><text font-size="${fs}" font-weight="800" fill="${fg}" letter-spacing="1"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${nm}</textPath></text>`;
    else if (st.textStyle === "curveBottom") text = `<path id="${id}" d="M14,56 A36,36 0 0 0 86,56" fill="none"/><text font-size="${fs}" font-weight="800" fill="${fg}" letter-spacing="1"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${nm}</textPath></text>`;
    else text = `<text x="50" y="${st.frame === "ribbon" ? 88 : 78}" text-anchor="middle" font-size="${fs}" font-weight="800" fill="${st.frame === "ribbon" ? "#fff" : fg}">${nm}</text>`;
    const slogan = st.slogan && st.slogan !== "B\u1ECF tr\u1ED1ng" && st.textStyle !== "curveBottom" && st.frame !== "ribbon" ? `<text x="50" y="88" text-anchor="middle" font-size="5" fill="${fg}" opacity=".8">${esc(st.slogan)}</text>` : "";
    const iconEl = icon2;
    return `<svg class="stamp-svg" width="${size}" height="${size}" viewBox="0 0 100 100" role="img" aria-label="Tem th\u01B0\u01A1ng hi\u1EC7u">${frame2}${iconEl}${text}${slogan}</svg>`;
  }
  function fileToDataURL(file, size = 160) {
    return new Promise((resolve2, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("decode"));
      };
      img.onload = () => {
        try {
          const cv = document.createElement("canvas");
          cv.width = cv.height = size;
          const ctx2 = cv.getContext("2d");
          const w = img.naturalWidth || img.width, hh = img.naturalHeight || img.height;
          const s = Math.min(w, hh);
          ctx2.fillStyle = "#fff";
          ctx2.fillRect(0, 0, size, size);
          ctx2.drawImage(img, (w - s) / 2, (hh - s) / 2, s, s, 0, 0, size, size);
          resolve2(cv.toDataURL("image/jpeg", 0.82));
        } catch (err) {
          reject(err);
        } finally {
          URL.revokeObjectURL(url);
        }
      };
      img.src = url;
    });
  }
  function pickImage(cb) {
    const inp = document.createElement("input");
    inp.type = "file";
    inp.accept = "image/*";
    inp.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0;width:1px;height:1px";
    document.body.appendChild(inp);
    let done = false;
    const finish2 = () => {
      if (!done) {
        done = true;
        setTimeout(() => inp.remove(), 1500);
      }
    };
    inp.addEventListener("change", async () => {
      const f = inp.files && inp.files[0];
      if (!f) {
        finish2();
        return;
      }
      try {
        cb(await fileToDataURL(f));
      } catch (e) {
        toast("Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c \u1EA3nh, h\xE3y th\u1EED \u1EA3nh kh\xE1c (JPG/PNG)", "err");
      }
      finish2();
    });
    inp.addEventListener("cancel", finish2);
    inp.click();
  }
  function openLogoModal() {
    const m = openModal({ id: "logo", cls: "small", html: logoBody() });
    const refresh = () => {
      m.body.innerHTML = logoBody();
    };
    bindActions(m.body, {
      upload: () => pickImage((url) => {
        S.logo.img = url;
        S.stamp.img = url;
        markDirty("view", "hud");
        requestSave();
        refresh();
        toast("\u0110\xE3 \u0111\u1ED5i logo qu\xE1n!", "ok");
        sfx("success");
      }),
      design: () => {
        m.close();
        openStampDesigner();
      },
      reset: () => {
        S.logo.img = null;
        S.stamp.img = null;
        markDirty("view");
        requestSave();
        refresh();
      },
      x: () => m.close()
    });
  }
  var logoBody = () => `<h3 class="m-title">\u{1F3A8} Logo Qu\xE1n & Nh\u1EADn Di\u1EC7n Th\u01B0\u01A1ng Hi\u1EC7u</h3><p class="m-text center">Logo n\xE0y hi\u1EC3n th\u1ECB tr\u01B0\u1EDBc t\xEAn ti\u1EC7m, tr\xEAn trang M\u1EA1ng X\xE3 H\u1ED9i v\xE0 in tr\xEAn tem ly tr\xE0 c\u1EE7a b\u1EA1n!</p>
  <div class="logo-prev">${logoHTML(70)}<div><b>${esc(S.shopName)}</b><small>Bi\u1EC3n hi\u1EC7u \xB7 M\u1EA1ng X\xE3 H\u1ED9i \xB7 Tem in ly</small></div></div>
  <button class="btn pri block" data-act="upload">\u{1F4F7} T\u1EA3i \u1EA3nh c\xE1 nh\xE2n t\u1EEB m\xE1y l\xEAn l\xE0m Logo</button>
  <button class="btn soft block" data-act="design">\u{1F3A8} Thi\u1EBFt k\u1EBF tem & Ch\u1ECDn m\u1EABu logo ly</button>
  ${S.logo.img ? '<button class="btn ghost block" data-act="reset">\u21A9\uFE0F D\xF9ng l\u1EA1i bi\u1EC3u t\u01B0\u1EE3ng m\u1EB7c \u0111\u1ECBnh</button>' : ""}
  <button class="btn ghost block" data-act="x">\u0110\xF3ng</button>`;
  function openStampDesigner() {
    const d = { ...S.stamp };
    const body = () => `<h3 class="m-title">\u{1F3A8} Thi\u1EBFt k\u1EBF tem th\u01B0\u01A1ng hi\u1EC7u</h3><p class="m-text center">Tem s\u1EBD in l\xEAn m\u1ECDi ly b\u1EA1n pha. T\xEAn qu\xE1n t\u1EF1 l\u1EA5y theo t\xEAn \u0111\xE3 \u0111\u1EB7t.</p>
    <div class="stamp-prev">${stampSVG(d, 150)}</div>
    <h5 class="grp c">Ki\u1EC3u khung</h5><div class="chips">${[["round", "Tr\xF2n"], ["rounded", "Bo g\xF3c"], ["ribbon", "Ruy b\u0103ng"]].map(([k, l]) => `<button class="chip-s ${d.frame === k ? "on" : ""}" data-act="frame" data-v="${k}">${l}</button>`).join("")}</div>
    <h5 class="grp c">Ki\u1EC3u ch\u1EEF t\xEAn qu\xE1n</h5><div class="chips">${[["straight", "Th\u1EB3ng h\xE0ng"], ["curveTop", "Cong ph\xEDa tr\xEAn"], ["curveBottom", "Cong ph\xEDa d\u01B0\u1EDBi"]].map(([k, l]) => `<button class="chip-s ${d.textStyle === k ? "on" : ""}" data-act="ts" data-v="${k}">${l}</button>`).join("")}</div>
    <h5 class="grp c">M\xE0u n\u1EC1n tem</h5><div class="chips colors">${STAMP_COLORS.map((c) => `<button class="swatch ${d.bg === c ? "on" : ""}" style="background:${c}" data-act="bg" data-v="${c}" aria-label="M\xE0u ${c}"></button>`).join("")}</div>
    <h5 class="grp c">Kh\u1EA9u hi\u1EC7u (tu\u1EF3 ch\u1ECDn)</h5><input class="field" maxlength="26" value="${esc(d.slogan || "")}" data-slogan placeholder="vd: Tr\xE0 s\u1EEFa m\u1ED7i ng\xE0y" aria-label="Kh\u1EA9u hi\u1EC7u">
    <div class="chips">${SLOGANS.map((s) => `<button class="chip-s sm" data-act="slg" data-v="${esc(s)}">${esc(s)}</button>`).join("")}</div>
    <div class="row-between"><h5 class="grp">H\xECnh logo</h5><button class="btn soft sm" data-act="up">\u{1F4F7} T\u1EA3i \u1EA3nh l\xEAn</button></div>
    <div class="icons">${LOGO_ICONS.map((ic) => `<button class="ico-s ${!d.img && d.icon === ic ? "on" : ""}" data-act="ic" data-v="${ic}">${ic}</button>`).join("")}</div>
    <button class="btn pri block" data-act="save">L\u01B0u tem</button><button class="btn ghost block" data-act="x">\u0110\xF3ng</button>`;
    const m = openModal({ id: "stamp", cls: "small tall", html: body() });
    const redraw = () => {
      const sc = m.body.scrollTop;
      m.body.innerHTML = body();
      m.body.scrollTop = sc;
      bindInput();
    };
    const bindInput = () => $("[data-slogan]", m.body)?.addEventListener("input", (e) => {
      d.slogan = e.target.value;
      $(".stamp-prev", m.body).innerHTML = stampSVG(d, 150);
    });
    bindInput();
    bindActions(m.body, {
      frame: (t) => {
        d.frame = t.dataset.v;
        redraw();
      },
      ts: (t) => {
        d.textStyle = t.dataset.v;
        redraw();
      },
      bg: (t) => {
        d.bg = t.dataset.v;
        redraw();
      },
      slg: (t) => {
        d.slogan = t.dataset.v === "B\u1ECF tr\u1ED1ng" ? "" : t.dataset.v;
        redraw();
      },
      ic: (t) => {
        d.icon = t.dataset.v;
        d.img = null;
        redraw();
      },
      up: () => pickImage((url) => {
        d.img = url;
        redraw();
      }),
      save: () => {
        S.stamp = { ...d };
        if (d.img) S.logo.img = d.img;
        else {
          S.logo.emoji = d.icon;
          S.logo.img = null;
        }
        markDirty("view", "hud");
        requestSave();
        sfx("success");
        toast("\u0110\xE3 l\u01B0u tem th\u01B0\u01A1ng hi\u1EC7u! \u{1F389}", "ok");
        m.close();
      },
      x: () => m.close()
    });
  }

  // js/home.js
  var PANELS = { ...PANELS1, ...PANELS2, ...PANELS3, crush };
  var TILES = [
    ["kho", "Kho", "\u{1F4E6}"],
    ["vuon", "V\u01B0\u1EDDn c\xE2y", "\u{1FAB4}"],
    ["thucung", "Th\xFA c\u01B0ng", "\u{1F415}"],
    ["khoinghiep", "Kh\u1EDFi nghi\u1EC7p", "\u{1F5FA}\uFE0F"],
    ["sanh", "S\u1EA3nh Tr\xE0", "\u{1F3EE}"],
    ["chinhanh", "Chi Nh\xE1nh", "\u{1F3E2}"],
    ["mxh", "M\u1EA1ng X\xE3 H\u1ED9i", "\u{1F4F1}"],
    ["nhansu", "Qu\u1EA3n l\xFD nh\xE2n s\u1EF1", "\u{1F3C6}"],
    ["thue", "Thu\u1EBF & Bank", "\u{1F4DC}"],
    ["nangcap", "N\xE2ng c\u1EA5p", "\u{1F6E0}\uFE0F"],
    ["giaban", "Gi\xE1 b\xE1n", "\u{1F4B5}"],
    ["danhgia", "\u0110\xE1nh gi\xE1", "\u2B50"],
    ["tongket", "T\u1ED5ng k\u1EBFt", "\u{1F4CA}"],
    ["banbe", "B\u1EA1n b\xE8", "\u{1F465}"],
    ["crush", "Milk Tea Crush", "\u{1F36C}"],
    ["suutam", "S\u01B0u t\u1EA7m", "\u{1F3B4}"]
  ];
  var GROUPS = [
    { id: "tiem", label: "Ti\u1EC7m", icon: "\u{1F3EA}", tabs: ["giaban", "sanh", "tongket", "danhgia"] },
    { id: "kho", label: "Kho", icon: "\u{1F4E6}", tabs: ["kho", "vuon", "thucung"] },
    { id: "pt", label: "Ph\xE1t tri\u1EC3n", icon: "\u{1F4C8}", tabs: ["nangcap", "nhansu", "chinhanh", "khoinghiep"] },
    { id: "xh", label: "X\xE3 h\u1ED9i", icon: "\u{1F465}", tabs: ["mxh", "banbe"] },
    { id: "them", label: "Th\xEAm", icon: "\u{1F380}", tabs: ["crush", "thue", "suutam"] }
  ];
  var groupOf = (tab) => GROUPS.find((g) => g.tabs.includes(tab)) || GROUPS[1];
  var TILE_BY_ID = Object.fromEntries(TILES.map((t) => [t[0], t]));
  var ALL_TABS = TILES.map((t) => t[0]);
  function renderHome() {
    const view = $("#view");
    if (S.phase === "sell") return;
    const loc = LOCATIONS[S.location];
    view.innerHTML = `<div class="home" id="home">
    <div class="home-awning" aria-hidden="true"></div>
    <div class="shopcard"><button class="sign-logo" data-act="logo" aria-label="\u0110\u1ED5i logo qu\xE1n">${logoHTML(52)}</button>
      <div class="sc-main"><button class="sign-name" data-act="rename" aria-label="S\u1EEDa t\xEAn ti\u1EC7m"><span>${esc(S.shopName)}</span> <i>\u270E</i></button>
        <div class="loc-chips"><button class="chip y" data-act="goto" data-to="khoinghiep">${loc.icon} ${esc(loc.name)}</button><button class="chip green" data-act="goto" data-to="sanh">\u{1F3EE} S\u1EA3nh Tr\xE0</button></div></div></div>
    <div class="chalk" id="board"></div>
    <div class="tiles" id="tiles"></div>
    <div class="evb" id="evb"></div>
    <div class="expect" id="exp"></div>
    <div class="panel" id="panel"></div>
  </div>`;
    renderBoard();
    renderTiles();
    renderEvent();
    renderPanel();
    bindActions($("#home"), {
      logo: () => openLogoModal(),
      rename: () => openRename(),
      goto: (t) => goTab(t.dataset.to),
      tile: (t) => goTab(t.dataset.tab, false)
    });
    bindNav();
    const panelActs = new Proxy({}, { get: (_, k) => (t, e) => {
      const fn = PANELS[S.tab]?.acts?.[k];
      if (fn) fn(t, e);
      else if (k === "goto") goTab(t.dataset.to);
    } });
    bindActions($("#panel"), panelActs);
  }
  function goTab(tab, scroll = true) {
    if (!ALL_TABS.includes(tab)) return;
    if (S.phase !== "home" && S.phase !== "end") return;
    S.tab = tab;
    markDirty("panel", "tiles");
    if (scroll) setTimeout(() => $("#panel")?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  }
  function renderTiles() {
    const g = groupOf(S.tab);
    const el = $("#tiles");
    if (el) el.innerHTML = g.tabs.map((id) => TILE_BY_ID[id]).map(([id, label, emo]) => `<button class="tile ${S.tab === id ? "on" : ""}" data-act="tile" data-tab="${id}"><span class="t-i">${emo}</span>${label}${id === "thucung" && !S.pet ? "<em>\u{1F512}</em>" : ""}</button>`).join("");
    renderNav();
  }
  function renderNav() {
    const el = $("#nav");
    if (!el) return;
    const show2 = S.phase === "home" || S.phase === "end";
    el.hidden = !show2;
    if (!show2) {
      el.innerHTML = "";
      return;
    }
    const cur2 = groupOf(S.tab).id;
    el.innerHTML = GROUPS.map((g) => `<button class="nav-i ${cur2 === g.id ? "on" : ""}" data-act="nav" data-group="${g.id}" aria-label="${g.label}"><i class="nav-e">${g.icon}</i><span>${g.label}</span></button>`).join("");
  }
  var navBound = false;
  function bindNav() {
    if (navBound) return;
    navBound = true;
    bindActions($("#nav"), {
      nav: (t) => {
        const g = GROUPS.find((x) => x.id === t.dataset.group);
        if (groupOf(S.tab).id === g.id) {
          $("#view")?.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        goTab(g.tabs[0], false);
        $("#view")?.scrollTo({ top: 0 });
      }
    });
  }
  function renderEvent() {
    const ev = eventOf();
    const el = $("#evb");
    if (!el) return;
    el.innerHTML = `<span class="ev-i">${ev.icon}</span><div><b>H\xF4m nay: ${esc(ev.name)}</b><p>${esc(ev.desc)}</p></div>`;
    $("#exp").innerHTML = `\u{1F465} <b>~${expectedCustomers()}</b> <small>kh\xE1ch d\u1EF1 ki\u1EBFn</small> \xB7 ${weatherOf().icon} ${weatherOf().name}`;
  }
  function renderBoard() {
    const el = $("#board");
    if (!el) return;
    const teas = TEAS.filter((t) => S.onMenu[t] && S.unlocked[t]);
    const tops = TOPS.filter((t) => S.onMenu[t] && S.unlocked[t]);
    const row = (n, p) => `<div class="cr"><span>${esc(n)}</span><b>${p}</b></div>`;
    el.innerHTML = `<h3>\u{1F964} Menu h\xF4m nay</h3>
    <div class="cols">${teas.map((t) => row(ITEMS[t].name, fmtK(priceOf(t)))).join("") || "<em>Ch\u01B0a c\xF3 m\xF3n</em>"}</div>
    ${tops.length ? `<h5>Topping</h5><div class="cols">${tops.map((t) => row(ITEMS[t].name, "+" + fmtK(priceOf(t)))).join("")}</div>` : ""}
    <div class="sz">Size L +${fmtK(priceOf("sizeL"))}</div>`;
  }
  var tabScroll = {};
  function renderPanel() {
    const el = $("#panel");
    if (!el) return;
    const P3 = PANELS[S.tab] || PANELS.kho;
    el.innerHTML = `<div class="panel-in" data-tab="${S.tab}">${P3.html()}</div>`;
    P3.bind?.(el);
    const row = el.querySelector(".tabs.scroll");
    if (row) {
      const on2 = row.querySelector(".tab.on");
      if (on2) row.scrollLeft = Math.max(0, on2.offsetLeft - (row.clientWidth - on2.offsetWidth) / 2);
      row.addEventListener("scroll", () => {
        tabScroll[S.tab] = row.scrollLeft;
      }, { passive: true });
    }
    renderEvent();
  }
  function renderCta() {
    const el = $("#cta");
    if (!el) return;
    if (S.phase !== "home") {
      el.innerHTML = "";
      el.className = "cta";
      return;
    }
    const total = planTotal();
    const chk = openMissing();
    if (total > 0) {
      el.className = "cta";
      el.innerHTML = `<button class="cta-btn" data-act="plan">N\u1EA5u & nh\u1EADp \xB7 ${fmtK(total)}</button>`;
    } else if (!chk.canOpen) {
      el.className = "cta bad";
      el.innerHTML = `<button class="cta-btn cta-red" data-act="tokho">\u26A0\uFE0F Ch\u01B0a n\u1EA5u ${chk.miss.map((m) => m === "Tr\xE0" ? "\u{1FAD6} Tr\xE0" : m === "Topping" ? "\u{1F9CB} Topping" : "\u{1F964} D\u1EE5ng c\u1EE5").join(" \xB7 ")}</button>`;
    } else {
      el.className = "cta";
      el.innerHTML = `${chk.miss.length ? `<div class="cta-warn">\u26A0\uFE0F Ch\u01B0a c\xF3 ${chk.miss.join(", ")} \u2014 v\u1EABn c\xF3 th\u1EC3 m\u1EDF c\u1EEDa</div>` : ""}<button class="cta-btn" data-act="open">M\u1EDF c\u1EEDa ng\xE0y ${S.day}</button>`;
    }
  }
  var ctaBound = false;
  function bindCta() {
    if (ctaBound) return;
    ctaBound = true;
    bindActions($("#cta"), {
      plan: () => {
        const e = commitPlan();
        if (e) {
          toast(e, "err");
          sfx("error");
        } else {
          sfx("coin");
          toast("\u0110\xE3 n\u1EA5u & nh\u1EADp nguy\xEAn li\u1EC7u!", "ok");
        }
      },
      tokho: () => {
        goTab("kho");
        toast("V\xE0o Kho ch\u1ECDn Tr\xE0, Topping, D\u1EE5ng c\u1EE5 r\u1ED3i b\u1EA5m N\u1EA5u & nh\u1EADp", "");
      },
      open: () => {
        S.settings.shiftMin = S.settings.shiftMinNext;
        const e = startShift();
        if (e) {
          toast(e, "err");
          sfx("error");
          return;
        }
        sfx("bell");
        markDirty("view", "hud", "cta");
      }
    });
  }
  function openRename() {
    const m = openModal({ cls: "small", html: `<h3 class="m-title">\u270F\uFE0F T\xEAn ti\u1EC7m c\u1EE7a b\u1EA1n</h3><input class="field" maxlength="24" value="${esc(S.shopName)}" data-name aria-label="T\xEAn ti\u1EC7m"><button class="btn pri block" data-act="ok">L\u01B0u t\xEAn</button><button class="btn ghost block" data-act="x">H\u1EE7y</button>` });
    const inp = $("[data-name]", m.body);
    setTimeout(() => inp.focus(), 50);
    bindActions(m.body, {
      ok: () => {
        const v = inp.value.trim();
        if (v) {
          S.shopName = v;
          markDirty("view", "hud");
          requestSave();
          sfx("success");
          toast("Bi\u1EC3n hi\u1EC7u m\u1EDBi! \u{1FAA7}", "ok");
        }
        m.close();
      },
      x: () => m.close()
    });
  }
  function openPanelModal(tab) {
    const P3 = PANELS[tab];
    const m = openModal({ id: "pm-" + tab, cls: "tall", html: `<div class="panel-in">${P3.html()}</div>` });
    const redraw = () => {
      m.body.innerHTML = `<div class="panel-in">${P3.html()}</div>`;
      P3.bind?.(m.body);
    };
    bindActions(m.body, new Proxy({}, { get: (_, k) => (t, e) => {
      const fn = P3.acts?.[k];
      if (fn) {
        fn(t, e);
        setTimeout(redraw, 20);
      }
    } }));
    P3.bind?.(m.body);
    return m;
  }

  // js/tutorial.js
  var goNav = (g) => () => document.querySelector(`.nav-i[data-group="${g}"]`)?.click();
  var goKho = (tab) => () => {
    goNav("kho")();
    setTimeout(() => document.querySelector(`.tab[data-v="${tab}"]`)?.click(), 60);
  };
  var STEPS = {
    home: [
      { sel: ".shopcard", ico: "\u{1FAA7}", t: "Ti\u1EC7m c\u1EE7a b\u1EA1n", d: "\u0110\xE2y l\xE0 <b>bi\u1EC3n hi\u1EC7u</b>. Ch\u1EA1m logo ho\u1EB7c t\xEAn \u0111\u1EC3 \u0111\u1ED5i; hai nh\xE3n nh\u1ECF d\u1EABn t\u1EDBi <b>Kh\u1EDFi nghi\u1EC7p</b> v\xE0 <b>S\u1EA3nh Tr\xE0</b>." },
      { sel: "#board", ico: "\u{1F964}", t: "Menu h\xF4m nay", d: "B\u1EA3ng ph\u1EA5n li\u1EC7t k\xEA m\xF3n \u0111ang b\xE1n v\xE0 gi\xE1. Size L \u0111\u01B0\u1EE3c c\u1ED9ng th\xEAm ti\u1EC1n. M\xF3n n\xE0o kh\xF4ng c\xF3 nguy\xEAn li\u1EC7u s\u1EBD kh\xF4ng b\xE1n \u0111\u01B0\u1EE3c." },
      { sel: "#nav", ico: "\u{1F9ED}", t: "Thanh nh\xF3m d\u01B0\u1EDBi c\xF9ng", d: "5 nh\xF3m: <b>\u{1F3EA} Ti\u1EC7m \xB7 \u{1F4E6} Kho \xB7 \u{1F4C8} Ph\xE1t tri\u1EC3n \xB7 \u{1F465} X\xE3 h\u1ED9i \xB7 \u{1F380} Th\xEAm</b>. Ch\u1ECDn nh\xF3m r\u1ED3i ch\u1EA1m \xF4 ch\u1EE9c n\u0103ng ngay b\xEAn tr\xEAn." },
      { sel: '.nav-i[data-group="tiem"]', pre: goNav("tiem"), ico: "\u{1F4B5}", t: "Nh\xF3m Ti\u1EC7m \xB7 Gi\xE1 b\xE1n", d: "V\xE0o <b>Gi\xE1 b\xE1n</b> ch\u1EC9nh gi\xE1 Tr\xE0, H\u01B0\u01A1ng, Topping, Size. Gi\xE1 qu\xE1 cao khi\u1EBFn kh\xE1ch b\u1ECF \u0111i. C\xF9ng nh\xF3m c\xF3 S\u1EA3nh, T\u1ED5ng k\u1EBFt, \u0110\xE1nh gi\xE1." },
      { sel: '.nav-i[data-group="pt"]', pre: goNav("pt"), ico: "\u{1F6E0}\uFE0F", t: "Nh\xF3m Ph\xE1t tri\u1EC3n \xB7 N\xE2ng c\u1EA5p", d: "\xD4 <b>N\xE2ng c\u1EA5p</b> m\u1EDF kh\xF3a tr\xE0, topping v\xE0 ti\u1EC7n \xEDch. C\xF3 th\u1EC3 l\xE0m sau khi c\xF3 ti\u1EC1n; c\xF9ng nh\xF3m c\xF3 Nh\xE2n s\u1EF1, Chi nh\xE1nh, Kh\u1EDFi nghi\u1EC7p." },
      { sel: '.nav-i[data-group="kho"]', pre: goNav("kho"), ico: "\u{1F4E6}", t: "V\xE0o Kho", d: "M\u1EDF nh\xF3m <b>Kho</b> \u0111\u1EC3 ch\u1ECDn nguy\xEAn li\u1EC7u cho h\xF4m nay. M\u1ED7i ng\xE0y b\u1EA1n nh\u1EADp h\xE0ng \u1EDF \u0111\xE2y tr\u01B0\u1EDBc khi m\u1EDF c\u1EEDa." },
      { sel: '.tab[data-v="tra"]', pre: goKho("tra"), ico: "\u{1FAD6}", t: "Tab Tr\xE0", d: "Ch\u1ECDn lo\u1EA1i <b>Tr\xE0</b> s\u1EBD b\xE1n. M\u1ED7i d\xF2ng cho bi\u1EBFt t\u1ED3n kho, v\u1ED1n v\xE0 h\u1EA1n d\xF9ng \u23F3." },
      { sel: '.tab[data-v="top"]', pre: goKho("top"), ico: "\u{1F9CB}", t: "Tab Topping", d: "Ch\u1ECDn <b>Topping</b> kh\xE1ch hay g\u1ECDi: tr\xE2n ch\xE2u, th\u1EA1ch, kem... Kh\xF4ng c\u1EA7n nh\u1EADp h\u1EBFt, ch\u1EC9 nh\u1EADp m\xF3n b\u1EA1n mu\u1ED1n b\xE1n." },
      { sel: '.tab[data-v="dc"]', pre: goKho("dc"), ico: "\u{1F964}", t: "Tab D\u1EE5ng c\u1EE5", d: "<b>Ly M, ly L</b>, \u0111\xE1, \u0111\u01B0\u1EDDng... Thi\u1EBFu ly th\xEC kh\xF4ng pha \u0111\u01B0\u1EE3c, nh\u1EDB nh\u1EADp c\u1EA3 hai size." },
      { sel: ".krow .stepper", pre: goKho("dc"), ico: "\u{1F522}", t: "\xD4 nh\u1EADp s\u1ED1 l\u01B0\u1EE3ng", d: "G\xF5 th\u1EB3ng s\u1ED1 v\xE0o \xF4 gi\u1EEFa, ho\u1EB7c b\u1EA5m <b>\u2212 / +</b> (m\u1ED7i l\u1EA7n 1). D\xF2ng xanh <b>+N</b> l\xE0 l\u01B0\u1EE3ng s\u1EAFp nh\u1EADp." },
      { sel: "#cta .cta-btn", ico: "\u{1F6D2}", t: "N\u1EA5u & nh\u1EADp", d: "B\u1EA5m <b>N\u1EA5u & nh\u1EADp</b> \u0111\u1EC3 tr\u1EA3 ti\u1EC1n, nguy\xEAn li\u1EC7u v\xE0o kho. N\xFAt \u0111\u1ECF \u26A0\uFE0F ngh\u0129a l\xE0 c\xF2n thi\u1EBFu m\xF3n b\u1EAFt bu\u1ED9c." },
      { sel: "#cta .cta-btn", ico: "\u{1F3EE}", t: "M\u1EDF c\u1EEDa", d: "\u0110\u1EE7 nguy\xEAn li\u1EC7u th\xEC n\xFAt \u0111\u1ED5i th\xE0nh <b>M\u1EDF c\u1EEDa</b>. B\u1EA5m \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u ca b\xE1n h\xE0ng!" }
    ],
    sell: [
      { sel: "#qrow", ico: "\u{1F465}", t: "H\xE0ng \u0111\u1EE3i kh\xE1ch", d: "Kh\xE1ch x\u1EBFp h\xE0ng \u1EDF \u0111\xE2y. Ch\u1EA1m avatar \u0111\u1EC3 ph\u1EE5c v\u1EE5 ng\u01B0\u1EDDi kh\xE1c tr\u01B0\u1EDBc, \u01B0u ti\xEAn ai s\u1EAFp h\u1EBFt <b>ki\xEAn nh\u1EABn</b>." },
      { sel: ".cust-zone", ico: "\u{1F464}", t: "Bong b\xF3ng order", d: "Bong b\xF3ng ghi <b>size, lo\u1EA1i tr\xE0, h\u01B0\u01A1ng, topping</b>. V\xF2ng quanh avatar l\xE0 ki\xEAn nh\u1EABn; c\u1EA1n l\xE0 kh\xE1ch b\u1ECF \u0111i." },
      { sel: ".stacks", ico: "\u{1F964}", t: "L\u1EA5y ly", d: "Ch\u1EA1m \u0111\xFAng ch\u1ED3ng ly <b>M</b> ho\u1EB7c <b>L</b> kh\xE1ch g\u1ECDi. M\u1ED7i size c\xF3 s\u1ED1 l\u01B0\u1EE3ng ri\xEAng, h\u1EBFt ly ph\u1EA3i nh\u1EADp th\xEAm." },
      { sel: "#disps", ico: "\u{1FAD6}", t: "R\xF3t tr\xE0", d: "Ch\u1EA1m <b>b\xECnh tr\xE0</b> \u0111\xFAng lo\u1EA1i \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u r\xF3t, ch\u1EA1m l\u1EA1i \u0111\u1EC3 d\u1EEBng khi thanh ch\u1EA1y t\u1EDBi <b>v\xF9ng v\xE0ng</b>." },
      { sel: "#trays", ico: "\u{1F9CB}", t: "Topping & h\u01B0\u01A1ng", d: "Ch\u1EA1m c\xE1c <b>khay topping</b> kh\xE1ch mu\u1ED1n; n\u1EBFu c\xF3 h\u01B0\u01A1ng, ch\u1EA1m chai \u1EDF h\xE0ng <b>H\u01AF\u01A0NG</b> d\u01B0\u1EDBi b\xECnh tr\xE0. \u0110\u1EEBng th\xEAm th\u1EEBa." },
      { sel: "#sealer", ico: "\u{1F512}", t: "\u0110\xF3ng n\u1EAFp", d: "Ch\u1EA1m <b>m\xE1y \u0111\xF3ng n\u1EAFp</b> tr\u01B0\u1EDBc, ch\u1EDD \u0111\xE8n READY r\u1ED3i ch\u1EA1m <b>ly tr\xEAn th\u1EDBt</b> \u0111\u1EC3 d\u1EADp n\u1EAFp." },
      { sel: "#wboard", ico: "\u{1F91D}", t: "Giao kh\xE1ch", d: "Ly \u0111\xE3 c\xF3 n\u1EAFp n\u1EB1m tr\xEAn th\u1EDBt <b>PHA LY</b>: ch\u1EA1m \u0111\u1EC3 giao cho kh\xE1ch. \u0110\xFAng \u0111\u01A1n v\xE0 nhanh th\xEC 5 sao, c\xF3 th\u1EC3 \u0111\u01B0\u1EE3c boa." },
      { sel: ".trash", ico: "\u{1F5D1}\uFE0F", t: "Th\xF9ng r\xE1c", d: "Pha nh\u1EA7m th\xEC ch\u1EA1m <b>th\xF9ng r\xE1c</b> \u0111\u1EC3 \u0111\u1ED5 ly r\u1ED3i l\xE0m l\u1EA1i." },
      { sel: ".phone", ico: "\u{1F4F1}", t: "\u0110\u01A1n online", d: "S\u1ED1 \u0111\u1ECF tr\xEAn <b>\u0111i\u1EC7n tho\u1EA1i</b> l\xE0 s\u1ED1 \u0111\u01A1n online \u0111ang ch\u1EDD. Ch\u1EA1m \u0111\u1EC3 xem v\xE0 nh\u1EADn \u0111\u01A1n." },
      { sel: "#lobbyGo", ico: "\u{1FA91}", t: "Ra s\u1EA3nh", d: "S\u1EA3nh c\xF3 b\xE0n gh\u1EBF: d\u1ECDn b\xE0n b\u1EA9n \u0111\u1EC3 kh\xE1ch ng\u1ED3i t\u1EA1i qu\xE1n v\xE0 boa th\xEAm." },
      { sel: "#hud .hbtn.pause", ico: "\u23F8\uFE0F", t: "T\u1EA1m d\u1EEBng & c\xE0i \u0111\u1EB7t", d: "N\xFAt <b>\u23F8</b> t\u1EA1m d\u1EEBng ca; b\xE1nh r\u0103ng b\xEAn ph\u1EA3i m\u1EDF C\xE0i \u0111\u1EB7t (m\xE0u, rung, nh\u1EA1c). Ch\xFAc b\u1EA1n b\xE1n \u0111\u1EAFt h\xE0ng! \u{1F389}" }
    ]
  };
  var cur = null;
  function ensureUi() {
    let el = $("#coach");
    if (el) return el;
    el = h('<div id="coach" class="coach" hidden><div class="coach-ring"></div><div class="coach-card"></div></div>');
    document.body.appendChild(el);
    return el;
  }
  function targetOf(step) {
    return step.sel.split(",").map((q) => document.querySelector(q.trim())).find((n) => n && n.offsetParent !== null) || null;
  }
  function place() {
    if (!cur) return;
    const el = $("#coach"), ring = el.querySelector(".coach-ring"), card = el.querySelector(".coach-card");
    const st = STEPS[cur.phase][cur.i];
    const t = targetOf(st);
    if (t) {
      const r = t.getBoundingClientRect();
      ring.style.cssText = `display:block;left:${r.left - 5}px;top:${r.top - 5}px;width:${r.width + 10}px;height:${r.height + 10}px`;
      const ch = card.offsetHeight || 160;
      const below = r.bottom + 12 + ch < innerHeight;
      card.style.top = below ? `${r.bottom + 12}px` : `${Math.max(8, r.top - 12 - ch)}px`;
    } else {
      ring.style.display = "none";
      card.style.top = `${Math.max(8, (innerHeight - (card.offsetHeight || 160)) / 2)}px`;
    }
    cur.raf = requestAnimationFrame(place);
  }
  function show() {
    const el = ensureUi(), card = el.querySelector(".coach-card");
    const steps = STEPS[cur.phase], st = steps[cur.i], last2 = cur.i === steps.length - 1;
    el.hidden = false;
    if (st.pre && cur.pre !== cur.i) {
      cur.pre = cur.i;
      try {
        st.pre();
      } catch (e) {
      }
    }
    card.innerHTML = `<div class="coach-h"><span class="coach-ico">${st.ico}</span><div><small>B\u01B0\u1EDBc ${cur.i + 1}/${steps.length}</small><b>${esc(st.t)}</b></div></div>
    <p>${st.d}</p>
    <div class="coach-dots">${steps.map((_, k) => `<i class="${k === cur.i ? "on" : k < cur.i ? "done" : ""}"></i>`).join("")}</div>
    <div class="coach-btns"><button class="btn ghost sm" data-c="skip">B\u1ECF qua h\u01B0\u1EDBng d\u1EABn</button><button class="btn pri sm" data-c="next">${last2 ? "Xong \u2713" : "Ti\u1EBFp \u2192"}</button></div>`;
    card.querySelector('[data-c="skip"]').onclick = () => {
      sfx("click");
      end(true);
    };
    card.querySelector('[data-c="next"]').onclick = () => {
      sfx("click");
      if (last2) end(false);
      else {
        cur.i++;
        show();
      }
    };
    cancelAnimationFrame(cur.raf);
    place();
  }
  function end(skipped) {
    if (!cur) return;
    cancelAnimationFrame(cur.raf);
    const phase = cur.phase;
    if (phase === "sell") setPaused(false);
    cur = null;
    const el = $("#coach");
    if (el) el.hidden = true;
    S.settings.tut = S.settings.tut || {};
    S.settings.tut[phase] = true;
    if (skipped) {
      S.settings.tut.home = true;
      S.settings.tut.sell = true;
    }
    requestSave();
  }
  function startTutorial(phase) {
    if (cur) end(false);
    cur = { phase, i: 0, raf: 0 };
    if (phase === "sell") setPaused(true);
    show();
  }
  function armTutorial() {
    S.settings.tut = { home: false, sell: false };
    requestSave();
  }
  function replayTutorial() {
    S.settings.tut = { home: false, sell: false };
    requestSave();
    startTutorial(S.phase === "sell" ? "sell" : "home");
  }
  function maybeTutorial(phase) {
    const t = S.settings.tut;
    if (!t || t[phase] || cur) return;
    startTutorial(phase);
  }

  // js/main.js
  function renderView() {
    const app = $("#app");
    if (app) app.dataset.phase = S.phase;
    if (S.phase === "sell") {
      renderSell();
      return;
    }
    renderHome();
  }
  var clockT = 0;
  function frame(dt) {
    if (S.phase === "sell") frameSell(dt);
    clockT += dt;
    if (clockT >= 1) {
      clockT = 0;
      tickCountdown();
    }
  }
  function wire() {
    registerRenderer("hud", renderHud);
    registerRenderer("view", () => {
      renderView();
      renderCta();
      renderNav();
    });
    registerRenderer("panel", () => {
      if (S.phase !== "sell") renderPanel();
    });
    registerRenderer("tiles", renderTiles);
    registerRenderer("board", renderBoard);
    registerRenderer("cta", renderCta);
    registerUpdate(updateShift);
    registerFrame(frame);
    setHudActions({
      pause: openPause,
      settings: openSettings,
      guide: openGuide,
      forecast: openForecast,
      branchTop: () => S.phase === "sell" ? openPanelModal("chinhanh") : goTab("chinhanh"),
      collectTop: () => S.phase === "sell" ? openPanelModal("suutam") : goTab("suutam")
    });
    initHud();
    bindCta();
    on("goto", (tab) => goTab(tab));
    on("shift:end", () => {
      markDirty("view", "hud", "cta");
      setTimeout(openDaySummary, 350);
    });
    on("day:next", () => {
      applyTheme();
      markDirty("view", "hud", "panel", "cta", "board");
    });
    on("reset", () => {
      resetShiftRuntime();
      ensureForecast();
      applyTheme();
      restartMusic();
      markDirty("view", "hud", "cta");
    });
    on("shift:start", () => setTimeout(() => maybeTutorial("sell"), 700));
    on("tutorial:replay", () => replayTutorial());
    on("kpi:cycle", () => toast("\u{1F4CA} H\u1EBFt chu k\u1EF3 KPI 7 ca: nh\xE2n vi\xEAn nh\u1EADn th\u01B0\u1EDFng \u0111\u1ECBnh k\u1EF3!", "gold", 3e3));
    on("unlock", () => markDirty("board"));
    on("purchase", () => markDirty("hud"));
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        saveGame();
        if (S.phase === "sell" && SH.on && !isModalOpen("pause")) openPause();
      }
    });
    window.addEventListener("beforeunload", () => {
      if (S.phase !== "sell") saveGame();
    });
    window.addEventListener("error", (e) => console.error("[game]", e.error || e.message));
    window.addEventListener("unhandledrejection", (e) => console.error("[game]", e.reason));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const m = $("#modal .modal-back:last-child .modal-x");
        m?.click();
      }
    });
  }
  function exposeDebug() {
    if (!DEBUG) return;
    window.debugGame = {
      S,
      E: econ_exports,
      G: sell_exports,
      SH,
      addMoney: (n = 1e6) => {
        S.money += n;
        markDirty("hud", "cta");
      },
      fillStock: (q = 30) => {
        for (const id of Object.keys(S.stock)) if (S.unlocked[id]) addStock(id, q);
        markDirty("panel", "cta");
      },
      unlockAll: () => {
        for (const id of Object.keys(S.unlocked)) {
          S.unlocked[id] = true;
          S.onMenu[id] = !["lyM", "lyL", "da", "duong"].includes(id);
        }
        markDirty("view", "panel", "board");
      },
      setDay: (d) => {
        S.day = d;
        ensureForecast();
        markDirty("hud", "view");
      },
      skipTime: (sec) => {
        if (SH.on) SH.t = Math.min(SH.total, SH.t + sec);
      },
      speed: (v) => setSpeed(v),
      closeShop: () => closeNow(),
      nextDay: () => {
        nextDay();
      },
      reset: () => {
        wipeSave();
        emit("reset");
      },
      save: saveGame,
      crush: crushDebug
    };
    console.info("%c\u{1F9CB} debugGame s\u1EB5n s\xE0ng", "color:#e8416a;font-weight:bold");
  }
  function boot() {
    initAudio();
    const loaded = loadGame();
    ensureForecast();
    if (!S.eventId || !loaded) S.eventId = pickEvent();
    applyTheme();
    wire();
    exposeDebug();
    flushRender();
    startLoop();
    markDirty("hud", "view", "cta");
    flushRender();
    showIntro(() => {
      sfx("click");
      restartMusic();
      if (S.firstRun) {
        S.firstRun = false;
        S.started = true;
        armTutorial();
        requestSave();
      }
      markDirty("hud", "view", "cta");
      if (S.phase === "end") setTimeout(openDaySummary, 350);
      else if (S.phase === "home") setTimeout(() => maybeTutorial("home"), 600);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
