"use strict";

const tabs = [
  { id: "home", label: "ホーム", icon: "⌂" },
  { id: "schedule", label: "旅程", icon: "▤" },
  { id: "plan", label: "準備", icon: "✓" },
  { id: "guide", label: "ガイド", icon: "◇" },
  { id: "records", label: "記録", icon: "□" },
];

const representativeDays = {
  d1227: {
    id: "d1227", date: "12/27（日）", city: "Barcelona", type: "観光中心日", title: "サグラダ・ファミリア中心日",
    state: "情報が矛盾", stateTone: "warn",
    summary: "入場時刻を確定してから、ホテル出発と午後の順番を組み直す日です。",
    primary: {
      eyebrow: "最初に解決すること", title: "サグラダの入場時刻を確定する",
      lead: "旅程は10:00開始、確認済みの日曜開館は10:30です。正しい入場時刻が決まるまで、出発時刻を推測表示しません。",
      meta: ["情報が矛盾", "予約と旅程に影響"], actions: ["予約と旅程を見直す", "公式確認を見る"]
    },
    upcoming: [
      ["昼食枠を決める", "Sagrada後・Montjuïc前。店、料理、満席時の代替が必要", "調査が必要"],
      ["Montjuïcの順番を確定", "移動・強風・終了時刻を含めて一本化", "調査が必要"],
    ],
    timeline: [
      { time: "入場時刻から逆算", end: "", kind: "移動", title: "ホテル → サグラダ・ファミリア", status: "時刻確定が必要", tone: "warn", note: "宿泊先住所と正しい入場時刻の確定後に計算します。", detail: "routeGap" },
      { time: "10:00?", end: "12:30", kind: "観光", title: "サグラダ・ファミリア", status: "情報が矛盾", tone: "warn", note: "旅程10:00と日曜開館10:30が矛盾。鐘塔付きチケットを想定。", detail: "sagrada" },
      { time: "Sagrada後", end: "", kind: "食事", title: "昼食", status: "時間調整枠", tone: "wait", note: "店・料理・所要・満席時代替がまだ旅程へ接続されていません。", detail: "mealGap" },
      { time: "昼食後", end: "", kind: "移動", title: "Sagrada → Montjuïc", status: "時刻確定が必要", tone: "warn", note: "市内横断の経路と所要時間を確定する必要があります。", detail: "montjuicRoute" },
      { time: "午後", end: "", kind: "観光", title: "Montjuïc", status: "条件付き", tone: "info", note: "強風・運行・終了時刻を見て実行。順番は未確定。", detail: "montjuic" },
    ],
    meals: [
      { period: "昼", window: "Sagrada後", area: "Eixample → Montjuïc動線", nearby: "Sagrada見学後", purpose: "午後の移動を遅らせず、Barcelonaらしい一食にする", primary: "未調査", dishes: [], price: "未調査", booking: "未調査", operation: "未調査", alternatives: [] },
      { period: "夜", window: "帰着前後", area: "宿泊先周辺", nearby: "Montjuïc後", purpose: "3人の疲労に合わせ、ホテルへ戻りやすくする", primary: "未調査", dishes: [], price: "未調査", booking: "未調査", operation: "未調査", alternatives: [] },
    ],
    decisions: [
      ["入場時刻の矛盾", "旅程10:00／確認済み開館10:30。予約証拠を見て確定する。", "warn"],
      ["Fira de Santa Llúcia", "例年12/23終了。12/27の行先として表示しない。", "wait"],
    ],
    guide: [
      ["午前", "サグラダ・ファミリア", "現地で見る3点と入口を、入場時刻確定後に表示", "sagrada"],
      ["昼", "食事枠", "第一候補・狙う料理・満席時代替が不足", "mealGap"],
      ["午後", "Montjuïc", "行く条件、移動順、強風時の代替を確認", "montjuic"],
    ],
    plan: [
      ["1", "Sagradaの予約証拠を確認", "入力待ち", "予約済み内容から入場時刻・鐘塔枠・入口を照合", "本人", "今すぐ"],
      ["2", "12/27の昼食を調査", "調査が必要", "Sagrada後、Montjuïc前、3人、満席代替まで決める", "本人", "入場時刻確定後"],
      ["3", "Montjuïc運行を再確認", "旅行前に再確認", "ロープウェイ・強風・営業時間", "本人", "12/26"],
    ]
  },
  d1230: {
    id: "d1230", date: "12/30（水）", city: "Barcelona → Madrid", type: "移動中心日", title: "荷物と列車を守る移動日",
    state: "発売待ち", stateTone: "wait",
    summary: "朝食よりも、チェックアウト・荷物・Sants到着・Madridホテルまでの連続動線を優先します。",
    primary: {
      eyebrow: "この日の最優先", title: "荷物を回収し、Santsへ余裕を持って着く",
      lead: "列車は14:50発の候補ですが、2026年末分は発売・公式確定待ちです。確定便としては表示しません。",
      meta: ["発売待ち", "候補 14:50–17:52"], actions: ["荷物段取りを見る", "移動の全体を見る"]
    },
    upcoming: [
      ["チェックアウト条件を確認", "時刻、荷物保管、回収方法をホテルと照合", "調査が必要"],
      ["Madrid到着後の動線", "Atochaからホテル、夕食までの行き方を決める", "ホテル決定後"],
    ],
    timeline: [
      { time: "08:30", end: "09:30", kind: "食事", title: "Boqueria市場で朝食", status: "条件付き", tone: "info", note: "行列20分超・休業ならBar Joan。Santsの余裕を削らない。", detail: "boqueria" },
      { time: "未確定", end: "", kind: "宿泊", title: "チェックアウト・荷物保管", status: "確認が必要", tone: "warn", note: "ホテル決定後に、荷物を預ける場所と回収時刻を決めます。", detail: "checkout" },
      { time: "列車から逆算", end: "", kind: "移動", title: "ホテル／荷物保管 → Barcelona Sants", status: "時刻確定が必要", tone: "warn", note: "列車確定後、駅到着目標から逆算します。", detail: "santsRoute" },
      { time: "13:50目標", end: "", kind: "駅", title: "Barcelona Sants 到着・乗車準備", status: "仮の時刻", tone: "info", note: "荷物、保安検査、乗り場確認のための余裕時間です。列車決定後に調整します。", detail: "sants" },
      { time: "14:50候補", end: "17:52", kind: "鉄道", title: "Barcelona Sants → Madrid Atocha", status: "発売待ち", tone: "wait", note: "iryo候補。列車番号・時刻は確定情報ではありません。", detail: "train" },
      { time: "列車到着後", end: "", kind: "移動", title: "Atocha → Madridホテル", status: "宿泊確定後に計算", tone: "warn", note: "Madridホテル確定後に経路・到着時刻を計算します。", detail: "madridArrival" },
      { time: "夜", end: "", kind: "食事", title: "Madrid到着後の夕食", status: "調査が必要", tone: "wait", note: "ホテル周辺、荷物あり、遅延対応できる候補が必要です。", detail: "dinnerGap" },
    ],
    meals: [
      { period: "朝", window: "08:30–09:30", area: "La Boqueria／Ciutat Vella", nearby: "チェックアウト前", purpose: "市場朝食を楽しみつつ、Santsへの余裕を守る", primary: "El Quim de la Boqueria", dishes: ["卵料理", "魚介", "カウンター料理"], price: "€€", booking: "予約なし", operation: "年末営業を前日確認", alternatives: ["Bar Joan"] },
      { period: "昼", window: "駅到着前後", area: "Barcelona Sants", nearby: "列車乗車前", purpose: "列車の余裕を削らない軽食・持帰り", primary: "候補調査が必要", dishes: [], price: "未調査", booking: "不要条件", operation: "駅動線上", alternatives: [] },
      { period: "夜", window: "Madrid到着後", area: "Madridホテル周辺", nearby: "Atocha到着後", purpose: "荷物と遅延に対応し、ホテルへ戻りやすくする", primary: "ホテル決定後に店を選ぶ", dishes: [], price: "予算あり", booking: "遅延時は予約なしの店へ", operation: "ホテル決定後", alternatives: [] },
    ],
    decisions: [
      ["Barcelona大聖堂", "移動日の壊れやすい追加観光として外す。余裕時間には入れない。", "info"],
      ["列車", "発売後に便・料金・座席・取消条件を比較して確定。", "wait"],
    ],
    guide: [
      ["朝", "Boqueria市場", "第一候補・行列撤退条件・代替を確認", "boqueria"],
      ["移動", "Barcelona Sants", "到着目標、乗り場、荷物、軽食を確認", "sants"],
      ["到着", "Madrid Atocha", "ホテルへの動線と到着後の夕食が不足", "madridArrival"],
    ],
    plan: [
      ["1", "列車の発売を待つ", "発売待ち", "今は購入不要。発売後に時刻・料金・取消を比較", "本人", "発売後"],
      ["2", "チェックアウト・荷物条件を確認", "調査が必要", "Barcelonaホテルへ保管場所と回収条件を確認", "本人", "ホテル予約後"],
      ["3", "Madrid到着動線を作る", "宿泊依存", "ホテル住所確定後にAtochaからの経路を作成", "本人", "宿泊決定後"],
    ]
  },
  d1231: {
    id: "d1231", date: "12/31（木）", city: "Madrid", type: "NYE特殊日", title: "昼の美術と年越し判断日",
    state: "公式発表待ち", stateTone: "wait",
    summary: "通常予定とは別に、18:00の再確認と20:30の撤退判断を明確に持つ日です。",
    primary: {
      eyebrow: "朝の確認", title: "Pradoを14:00閉館として組み直す",
      lead: "旅程は15:00までですが、確認済みの12/31営業は14:00までです。街歩きと休憩を含めて順番を修正します。",
      meta: ["情報が矛盾", "NYE判断 18:00"], actions: ["この日の判断点を見る", "Pradoの公式確認"]
    },
    upcoming: [
      ["早めの夕食を決める", "Sol入場列と撤退判断に間に合う退店時刻まで必要", "調査が必要"],
      ["Madridホテル住所を同期", "徒歩帰路、代替案、SOSに必要", "宿泊依存"],
    ],
    timeline: [
      { time: "10:00", end: "14:00", kind: "観光", title: "Prado美術館", status: "要修正", tone: "warn", note: "公式14:00閉館を採用するには、現行旅程を明示変更する必要があります。", detail: "prado" },
      { time: "午後", end: "", kind: "街歩き", title: "Cibeles・Alcalá・Retiro", status: "再構成", tone: "info", note: "Prado短縮後、疲労と交通規制を見て範囲を決めます。", detail: "madridWalk" },
      { time: "早め", end: "", kind: "食事", title: "大晦日ディナー", status: "調査が必要", tone: "wait", note: "店・予約・退店時刻・ホテル代替用購入が不足しています。", detail: "nyeDinner" },
      { decision: true, time: "18:00", title: "公式情報を再確認", note: "Sol入口、駅閉鎖、収容、天候、徒歩帰路を確認。" },
      { decision: true, time: "20:30", title: "Solへ進むか撤退判断", note: "入場不可・強雨・徒歩帰路45分超ならホテル案へ。" },
      { time: "22:30", end: "00:15", kind: "代替", title: "Madridホテルで公式中継", status: "撤退時の代替", tone: "info", note: "18:00までにブドウと飲食を購入。宿泊先住所の確定が必要。", detail: "hotelNye" },
    ],
    meals: [
      { period: "昼", window: "Prado後", area: "Paseo del Arte", nearby: "Prado見学後", purpose: "午後の街歩きと休憩を両立", primary: "未調査", dishes: [], price: "未調査", booking: "未調査", operation: "14:00閉館反映後", alternatives: [] },
      { period: "夜", window: "Sol判断前", area: "Centro／Sol徒歩圏", nearby: "18:00公式確認前後", purpose: "入場列に間に合い、撤退時にも困らない", primary: "未調査", dishes: ["大晦日対応メニュー"], price: "未調査", booking: "予約要否を確認", operation: "年末特別営業", alternatives: ["ホテル周辺", "持帰り＋客室"] },
    ],
    decisions: [
      ["18:00 再確認", "公式入口・駅閉鎖・天候・警備情報を見る。", "wait"],
      ["20:30 撤退", "入場不能、強雨、帰路45分超ならホテルへ戻る。", "warn"],
      ["ホテル代替", "ブドウを購入し、22:30–00:15に公式中継を見る。", "info"],
    ],
    guide: [
      ["午前", "Prado美術館", "14:00閉館前提で見る順番を絞る", "prado"],
      ["夕方", "早めの夕食", "第一候補・退店時刻・代替が不足", "nyeDinner"],
      ["夜", "Puerta del Sol", "入口・駅閉鎖・撤退条件・ホテル帰路", "sol"],
    ],
    plan: [
      ["1", "大晦日ディナーを調査", "調査が必要", "年末営業、予約、退店時刻、持帰り代替まで決める", "本人", "早めに"],
      ["2", "Madridホテル住所を同期", "宿泊依存", "Sol徒歩帰路とSOSに使う", "本人", "宿泊決定後"],
      ["3", "Sol公式情報を再確認", "公式発表待ち", "入口・駅閉鎖・収容・警備", "本人", "12/30と12/31 18:00"],
    ]
  }
};

const scenarioStorageKey = "spain-trip-ux-v1-flex-scenario";
function loadScenario() {
  try {
    const value = localStorage.getItem(scenarioStorageKey);
    return window.UXFullData?.flexScenarios?.[value] ? value : "scenario1";
  } catch (_) { return "scenario1"; }
}
function saveScenario(value) {
  try { localStorage.setItem(scenarioStorageKey, value); } catch (_) { /* This visit still uses the selected scenario. */ }
}
const state = { tab: "home", day: "d1227", scenario: loadScenario(), guideSection: "start", guideCity: "all", guideArea: "all", guideSort: "priority", guideLocationNote: "位置情報は未使用", planSection: "next", recordsSection: "money", collapsedDays: new Set() };
let days = window.UXFullData?.buildDays(representativeDays, state.scenario) || representativeDays;
const recordsStorageKey = "spain-trip-ux-v1-records";
const recordsSeed = {
  schemaVersion: 1,
  baseCurrency: "EUR",
  fx: { EURJPY: 170, checkedAt: "2026-08-14", source: "レビュー用手動レート" },
  budget: window.UXFullData?.buildBudget() || [{ id: "demo-budget", title: "旅行予算", category: "食事", amountOriginal: 120, currency: "EUR", status: "estimate" }],
  expenses: [],
  settledTransferIds: [],
  memories: []
};

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function validRecords(model) {
  const people = ["A", "B", "C"];
  const currencies = ["EUR", "JPY"];
  return model?.schemaVersion === 1 && Array.isArray(model.budget) && Array.isArray(model.expenses) &&
    Number.isFinite(Number(model.fx?.EURJPY)) && Number(model.fx.EURJPY) > 0 &&
    model.budget.every((row) => row && Number.isFinite(Number(row.amountOriginal)) && Number(row.amountOriginal) >= 0 && currencies.includes(row.currency)) &&
    model.expenses.every((row) => row && Number.isFinite(Number(row.amountOriginal)) && Number(row.amountOriginal) > 0 && currencies.includes(row.currency) && people.includes(row.payer) && Array.isArray(row.participants) && row.participants.length > 0 && row.participants.every((person) => people.includes(person)) && row.shares && row.participants.every((person) => Number.isFinite(Number(row.shares[person]))) && Number.isFinite(Number(row.fxSnapshot?.EURJPY)));
}
function loadRecords() {
  try {
    const stored = JSON.parse(localStorage.getItem(recordsStorageKey));
    if (validRecords(stored)) {
      const hasRepresentativeSeed = stored.budget.some((row) => row.id === "demo-budget");
      const migratedBudget = hasRepresentativeSeed ? [...recordsSeed.budget, ...stored.budget.filter((row) => row.id !== "demo-budget" && !recordsSeed.budget.some((seed) => seed.id === row.id))] : stored.budget;
      return { ...stored, budget: migratedBudget, expenses: stored.expenses.filter((row) => row.id !== "demo-expense"), memories: stored.memories || [], settledTransferIds: stored.settledTransferIds || [] };
    }
  } catch {}
  return clone(recordsSeed);
}
let recordsState = loadRecords();
function saveRecords() { localStorage.setItem(recordsStorageKey, JSON.stringify(recordsState)); }
function toEur(amount, currency, fx = recordsState.fx) { return currency === "JPY" ? amount / fx.EURJPY : amount; }
function eur(value) { return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "EUR" }).format(value); }
function yen(value) { return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY", maximumFractionDigits: 0 }).format(value); }
function dualMoney(value) { return `<span class="dual-money"><span>${yen(value * recordsState.fx.EURJPY)}</span><span>${eur(value)}</span></span>`; }
function expenseShares(expense) {
  if (expense.splitMode === "custom") return expense.shares;
  const each = expense.amountOriginal / expense.participants.length;
  return Object.fromEntries(expense.participants.map((person) => [person, each]));
}
function calculateTransfers() {
  const balances = { A: 0, B: 0, C: 0 };
  recordsState.expenses.forEach((expense) => {
    const amount = toEur(expense.amountOriginal, expense.currency, expense.fxSnapshot);
    balances[expense.payer] += amount;
    Object.entries(expenseShares(expense)).forEach(([person, share]) => { balances[person] -= toEur(Number(share), expense.currency, expense.fxSnapshot); });
  });
  const creditors = Object.entries(balances).filter(([, amount]) => amount > .005).map(([person, amount]) => ({ person, amount }));
  const debtors = Object.entries(balances).filter(([, amount]) => amount < -.005).map(([person, amount]) => ({ person, amount: -amount }));
  const transfers = [];
  let creditorIndex = 0;
  let debtorIndex = 0;
  while (creditorIndex < creditors.length && debtorIndex < debtors.length) {
    const amount = Math.min(creditors[creditorIndex].amount, debtors[debtorIndex].amount);
    const from = debtors[debtorIndex].person;
    const to = creditors[creditorIndex].person;
    transfers.push({ id: `${from}-${to}`, from, to, amount });
    creditors[creditorIndex].amount -= amount;
    debtors[debtorIndex].amount -= amount;
    if (creditors[creditorIndex].amount < .005) creditorIndex += 1;
    if (debtors[debtorIndex].amount < .005) debtorIndex += 1;
  }
  return transfers;
}
const screen = document.querySelector("#screen");
const sheet = document.querySelector("[data-sheet]");
const scrim = document.querySelector("[data-scrim]");
let lastFocus = null;
let itineraryObserver = null;
let itineraryScrollLock = false;
let itineraryScrollTimer = null;

const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const mapsUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(String(query || ""))}`;
const toneClass = (tone) => tone === "warn" ? "warn" : tone === "wait" ? "wait" : tone === "info" ? "info" : "";
const toneForStatus = (status) => /矛盾|不足|必要|未確認|要修正/.test(status || "") ? "warn" : /待ち|仮|未公表/.test(status || "") ? "wait" : "info";
const spainStayStart = Date.parse("2026-12-26T06:25:00Z");
const spainStayEnd = Date.parse("2027-01-04T09:40:00Z");
function activeClockZone(now = new Date()) {
  const millis = now.getTime();
  return millis >= spainStayStart && millis < spainStayEnd ? { label: "スペイン", timeZone: "Europe/Madrid" } : { label: "日本", timeZone: "Asia/Tokyo" };
}
function updateLocalClock(now = new Date()) {
  const clock = document.querySelector("[data-local-clock]");
  if (!clock) return;
  const localZone = activeClockZone(now).timeZone;
  clock.querySelectorAll("[data-clock-time]").forEach((output) => {
    output.textContent = new Intl.DateTimeFormat("ja-JP", { timeZone: output.dataset.clockTime, hour: "2-digit", minute: "2-digit", hour12: false }).format(now);
    output.closest("[data-clock-card]")?.classList.toggle("is-local", output.dataset.clockTime === localZone);
  });
  clock.querySelectorAll("[data-clock-date]").forEach((output) => {
    output.textContent = new Intl.DateTimeFormat("ja-JP", { timeZone: output.dataset.clockDate, month: "numeric", day: "numeric", weekday: "short" }).format(now);
  });
  clock.title = "日本とスペインの現在日付・時刻。背景色は現在の滞在地基準。";
}

function renderNav() {
  const html = tabs.map((tab) => `<button class="nav-button" type="button" data-tab-target="${tab.id}"${state.tab === tab.id ? ' aria-current="page"' : ""}><span aria-hidden="true">${tab.icon}</span>${tab.label}</button>`).join("");
  document.querySelector("[data-primary-nav]").innerHTML = html;
  document.querySelector("[data-mobile-nav]").innerHTML = html;
}

function renderDaySwitcher() {
  const context = document.querySelector(".day-context");
  context.hidden = ["home", "guide", "records", "schedule"].includes(state.tab);
  document.querySelector("[data-day-switcher]").innerHTML = Object.values(days).map((day) => `<button class="day-button" type="button" role="tab" data-day="${day.id}" aria-selected="${state.day === day.id}"><strong>${day.date} · ${day.city}</strong><small>${day.type}</small></button>`).join("");
}

function screenHeader(label, title, description) {
  const day = days[state.day];
  return `<header class="screen-header"><div><span class="eyebrow">${esc(label)}</span><h1>${esc(title)}</h1><p>${esc(description)}</p></div><div class="context-meta">${esc(day.date)} · ${esc(day.city)}<small>表示時刻: ${esc(day.timeZoneLabel || "スペイン時間")}</small></div></header>`;
}

function pill(text, tone = "") { return `<span class="pill ${toneClass(tone)}">${esc(text)}</span>`; }
function action(label, options = {}) {
  const attrs = options.open ? ` data-open-detail="${esc(options.open)}"${options.detailDay ? ` data-detail-day="${esc(options.detailDay)}"` : ""}` : options.tab ? ` data-tab-target="${esc(options.tab)}"${options.contextDay ? ` data-context-day="${esc(options.contextDay)}"` : ""}` : "";
  return `<button class="button ${options.primary ? "primary" : options.ghost ? "ghost" : ""}" type="button"${attrs}>${esc(label)}</button>`;
}

function primaryCard(day) {
  return `<article class="card primary-card"><span class="eyebrow">${esc(day.primary.eyebrow)}</span><h2>${esc(day.primary.title)}</h2><p class="lead">${esc(day.primary.lead)}</p>${day.primary.meta?.length ? `<div class="status-row">${day.primary.meta.map((x) => pill(x, "info")).join("")}</div>` : ""}<div class="action-row">${action("この日の旅程を見る", { tab: "schedule", contextDay: day.id, primary: true })}</div></article>`;
}

function tripCountdown(now = new Date()) {
  const departure = Date.parse("2026-12-25T09:00:00+09:00");
  const returnHome = Date.parse("2027-01-05T18:00:00+09:00");
  if (now.getTime() < departure) return `出発まであと${Math.max(1, Math.ceil((departure - now.getTime()) / 86400000))}日`;
  if (now.getTime() <= returnHome) return "いま、スペイン旅行中";
  return "旅の写真と思い出を振り返る";
}

function renderHome() {
  const pendingBookings = allTripBookings().filter((booking) => bookingStatusLabel(booking) !== "予約済み");
  const waitingOfficial = pendingBookings.filter((booking) => bookingStatusLabel(booking) === "公式発表待ち");
  const transportOrRelease = (booking) => bookingStatusLabel(booking) === "発売待ち" || /列車|鉄道|Barcelona.*Madrid|Madrid.*Barcelona|Córdoba.*往復|Cordoba.*往復/.test(booking.title);
  const waitingRelease = pendingBookings.filter((booking) => !waitingOfficial.includes(booking) && transportOrRelease(booking));
  const readyToArrange = pendingBookings.filter((booking) => !waitingOfficial.includes(booking) && !waitingRelease.includes(booking) && bookingStatusLabel(booking) === "これから手配");
  const taskGroups = [
    ["今決める", [
      ["1", "Barcelona・Madridのホテルを決める", "最優先", "3滞在とも仮候補・未予約です。3名1室、取消条件、宿泊税を同じ条件で比較して予約します。", "準備の「宿泊」で比較", "hotels"],
      ["2", readyToArrange.length ? `${readyToArrange.length}件の入場・食事予約を進める` : "入場・食事予約を確認する", "手配可能", readyToArrange.length ? readyToArrange.slice(0, 3).map((booking) => booking.title).join("／") : "手配可能になった予約は準備へまとめます。", "準備の「予約」で確認", "bookings"]
    ]],
    ["発売・公式発表を待つ", [
      ["3", `${waitingRelease.length}件の列車・入場枠`, "発売待ち", waitingRelease.slice(0, 4).map((booking) => booking.title).join("／") || "発売開始後に、採用日程の列車と入場枠を選びます。", "発売後に時刻と料金を確定", "bookings"],
      ["4", `${waitingOfficial.length}件の年末年始情報`, "公式発表待ち", waitingOfficial.slice(0, 4).map((booking) => booking.title).join("／") || "特別営業時間・交通規制は公式発表後に更新します。", "12月に公式情報を再確認", "bookings"]
    ]],
    ["出発直前に確認", [
      ["5", "TarragonaとMontserratの日を選ぶ", "12/26夜", "12/27–29の天気と交通を比較します。晴天と体力がそろえばMontserrat、条件が悪ければBarcelona市内です。", "旅程の3日間シナリオで切替", "schedule"],
      ["6", "予約PDF・保険・通信をオフライン保存", "出発前", "航空券、ホテル、列車、入場券、保険、緊急連絡先を3人が通信なしでも見られる状態にします。", "準備の「書類・連絡」で確認", "documents"]
    ]]
  ];
  screen.innerHTML = `<header class="screen-header home-task-header"><div><span class="eyebrow">HOME · NEXT ACTIONS</span><h1>出発までの残タスク</h1><p>今やること、発売を待つこと、出発直前に確認することだけを優先順で表示します。</p></div><div class="context-meta">${esc(tripCountdown())}<small>12/25–1/5 · 3人</small></div></header>
    <section class="home-task-summary" aria-label="残タスクの概要"><article><span>最優先</span><strong>ホテル</strong><small>3滞在・未予約</small></article><article><span>手配・発売待ち</span><strong>${pendingBookings.length}件</strong><small>準備タブに詳細</small></article><article><span>旅程の条件分岐</span><strong>1件</strong><small>Montserratは天候次第</small></article></section>
    <article class="card home-next-action"><div><span class="eyebrow">NEXT DECISION</span><h2>まずホテル3滞在を決める</h2><p>Barcelona → Madrid → Barcelonaの宿泊都市は固定。仮候補の料金・部屋・取消条件を同じ3名条件で比較します。</p></div><div class="action-row"><button class="button primary" type="button" data-home-plan-section="hotels" data-home-target="plan">ホテル比較を開く</button>${action("全体予算を見る", { tab: "records" })}</div></article>
    <div class="home-task-groups">${taskGroups.map(([phase, tasks]) => `<section class="home-task-phase"><div class="section-head compact-head"><div><span class="eyebrow">TASK PHASE</span><h2>${esc(phase)}</h2></div><span>${tasks.length}件</span></div><div class="home-task-list">${tasks.map(([number, title, status, note, next, section]) => `<article class="card home-task-card"><span class="task-index">${number}</span><div><div class="status-row">${pill(status, /最優先|12\/26/.test(status) ? "wait" : "info")}</div><h3>${esc(title)}</h3><p>${esc(note)}</p><small>${esc(next)}</small></div><button class="button" type="button" data-home-plan-section="${esc(section)}" data-home-target="${section === "schedule" ? "schedule" : "plan"}">開く</button></article>`).join("")}</div></section>`).join("")}</div>
    <section class="home-quick-links"><div><span class="eyebrow">PLAN ALREADY SET</span><h2>決まっている旅の骨格</h2><p>BarcelonaとMadridに宿泊し、TarragonaとCórdobaへ日帰り。Montserratは天候と体力で追加します。</p></div><div class="action-row">${action("12日間の旅程", { tab: "schedule", contextDay: state.day, primary: true })}${action("町と食のガイド", { tab: "guide" })}</div></section>`;
}

function mealBudgetRange(meal) {
  const min = Number(meal?.budgetMinEur ?? meal?.budgetEur ?? 0);
  const max = Number(meal?.budgetMaxEur ?? meal?.budgetEur ?? 0);
  if (min === max) return dualMoney(max);
  const euroNumber = (value) => value.toLocaleString("ja-JP", { minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 2 });
  return `${yen(min * recordsState.fx.EURJPY)}–${yen(max * recordsState.fx.EURJPY)} / €${euroNumber(min)}–€${euroNumber(max)}`;
}

function timelineDetail(item) {
  if (!item) return "";
  const day = days[state.day];
  const itemIndex = day.timeline.indexOf(item);
  const next = day.timeline.slice(itemIndex + 1).find((entry) => !entry.decision);
  const nextStep = item.routeAfter || (next ? `次は${next.time}の「${next.title}」へ進みます。` : "");
  const map = `<a class="button primary" href="${esc(mapsUrl(`${item.title} ${day.city}`))}" target="_blank" rel="noreferrer">地図で確認</a>`;
  return `<span class="eyebrow">${esc(item.kind || "判断")}</span><h2>${esc(item.title)}</h2><div class="status-row">${pill(item.status || day.state, item.tone || day.stateTone)}</div><p>${esc(item.note)}</p>
    <dl class="fact-list"><div><dt>日付</dt><dd>${esc(day.date)}</dd></div><div><dt>時刻</dt><dd>${esc(item.time)}${item.end ? `–${esc(item.end)}` : ""}</dd></div></dl>
    ${item.meal ? `<h3>食事の内容</h3><dl class="fact-list"><div><dt>場所</dt><dd>${esc(item.meal.area)}</dd></div><div><dt>食べるもの</dt><dd>${esc((item.meal.dishes || []).join("・"))}</dd></div><div><dt>3人分の予算</dt><dd>${mealBudgetRange(item.meal)}</dd></div><div><dt>予算の根拠</dt><dd>${esc(item.meal.budgetBasis || "店とmenuを決めた後に更新します。")}</dd></div><div><dt>3人で頼むなら</dt><dd>${esc(item.meal.orderForThree)}</dd></div><div><dt>予約</dt><dd>${esc(item.meal.booking)}</dd></div><div><dt>満席時</dt><dd>${esc((item.meal.alternatives || []).join("／"))}</dd></div></dl>${item.meal.sourceUrl ? `<p class="caption"><a class="source-link" href="${esc(item.meal.sourceUrl)}" target="_blank" rel="noreferrer">${esc(item.meal.sourceLabel || "予算根拠")}</a> · 確認 ${esc(item.meal.checkedAt || "2026-08-16")}</p>` : ""}` : ""}
    ${nextStep ? `<h3>次の場所へ</h3><p>${esc(nextStep)}</p>` : ""}
    <div class="action-row">${map}${action("関連ガイド", { tab: "guide" })}</div>`;
}

function renderTimeline(day) {
  return day.timeline.map((item, index) => {
    if (item.decision) return `<article class="decision-point"><time>${esc(item.time)}</time><div><span class="eyebrow">ここで判断</span><h3>${esc(item.title)}</h3><p>${esc(item.note)}</p></div></article>`;
    const next = day.timeline[index + 1];
    const connectorText = item.routeAfter || (next && !next.decision ? `次は ${next.time}「${next.title}」` : "");
    const connector = connectorText ? `<div class="connector"><div class="connector-line"></div><div class="connector-content">${esc(connectorText)}</div></div>` : "";
    const mealFacts = item.meal ? `<dl class="timeline-facts"><div><dt>食べるもの</dt><dd>${esc((item.meal.dishes || []).join("・"))}</dd></div><div><dt>3人分</dt><dd>${mealBudgetRange(item.meal)}</dd></div><div><dt>満席時</dt><dd>${esc((item.meal.alternatives || []).join("／"))}</dd></div></dl>` : "";
    const mapHelps = !/乗継|保安検査|搭乗口/.test(item.title);
    const routeLink = mapHelps && (item.kind === "移動" || item.kind === "鉄道" || item.kind === "航空" || item.kind === "空港") ? `<a class="button" href="${esc(mapsUrl(`${item.title} ${day.city}`))}" target="_blank" rel="noreferrer">地図</a>` : "";
    return `<div><article class="timeline-item"><div class="timeline-time">${esc(item.time)}${item.end ? `<small>〜${esc(item.end)}</small>` : ""}${item.zone ? `<small class="timeline-zone">${esc(item.zone)}</small>` : ""}</div><div class="card timeline-card"><div class="status-row">${pill(item.kind)}${pill(item.status, item.tone)}</div><h3>${esc(item.title)}</h3>${item.note ? `<p class="muted">${esc(item.note)}</p>` : ""}${mealFacts}<div class="action-row">${action("詳細", { open: item.detail, detailDay: day.id, primary: true })}${routeLink}</div></div></article>${connector}</div>`;
  }).join("");
}

function renderBarcelonaFlexDecision(day) {
  if (!["d1227", "d1228", "d1229"].includes(day.id)) return "";
  const scenarios = Object.values(window.UXFullData?.flexScenarios || {});
  return `<section class="flex-decision" aria-labelledby="flex-decision-title"><div class="flex-decision-head"><span class="eyebrow">12/27–29の選択</span><h2 id="flex-decision-title">3日間のシナリオ</h2><p>12/26夜に天気と交通を比べて選びます。選ぶと3日分の旅程がすぐ入れ替わります。Montserratの日は当日朝にも判断し、条件が悪ければ予約不要のBarcelona市内案にします。</p></div><div class="scenario-selector" role="radiogroup" aria-label="3日間のシナリオ">${scenarios.map((scenario) => `<button class="scenario-option" type="button" role="radio" aria-checked="${state.scenario === scenario.id}" data-scenario="${esc(scenario.id)}"><strong>${esc(scenario.name)}</strong><span>${esc(scenario.summary)}</span>${state.scenario === scenario.id ? `<small>選択中</small>` : ""}</button>`).join("")}</div><p class="flex-note"><strong>選択中：</strong>${esc(window.UXFullData.flexScenarios[state.scenario].name)}。Tarragonaは火曜の一日案が基本で、シナリオ3だけ日曜14:30閉館に合わせた短縮案です。月曜には置きません。</p></section>`;
}

function itineraryDateId(day) {
  const digits = day.id.slice(1);
  return `${digits.startsWith("12") ? "2026" : "2027"}-${digits.slice(0, 2)}-${digits.slice(2, 4)}`;
}

function currentTripDayId(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: activeClockZone(now).timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(now);
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const today = `${value.year}-${value.month}-${value.day}`;
  return Object.values(days).find((day) => itineraryDateId(day) === today)?.id || null;
}

function renderItineraryJumpbar() {
  const current = currentTripDayId();
  const target = current || state.day;
  return `<nav class="itinerary-jumpbar" aria-label="旅程の日付"><button class="itinerary-today" type="button" data-jump-day="${esc(target)}">${current ? "今日へ" : "選択日へ"}</button><div class="itinerary-jumpdates">${Object.values(days).map((day) => `<button type="button" data-jump-day="${day.id}" aria-selected="${state.day === day.id}"><strong>${esc(day.date.slice(0, 5))}</strong><small>${esc(day.city.replace("Barcelona", "BCN").replace("Madrid", "MAD"))}</small></button>`).join("")}</div></nav>`;
}

function renderItineraryDay(day) {
  const collapsed = state.collapsedDays.has(day.id);
  return `<article class="itinerary-day${state.day === day.id ? " is-active" : ""}" id="itinerary-day-${day.id}" data-itinerary-day-card="${day.id}"><header class="itinerary-day-header"><div><span class="eyebrow">${esc(day.date)} · ${esc(day.city)} · ${esc(day.type)}</span><h2>${esc(day.title)}</h2><p>${esc(day.summary || day.primary?.lead || "")}</p></div><div class="itinerary-day-actions">${action("遅れ・雨・満席時", { open: "change", detailDay: day.id })}<button class="button ghost" type="button" data-toggle-itinerary-day="${day.id}" aria-expanded="${!collapsed}" aria-controls="itinerary-body-${day.id}">${collapsed ? "この日を開く" : "この日をたたむ"}</button></div></header><div id="itinerary-body-${day.id}"${collapsed ? " hidden" : ""}><div class="timeline itinerary-day-timeline">${renderTimeline(day)}</div></div></article>`;
}

function renderSchedule() {
  screen.innerHTML = `<header class="screen-header itinerary-screen-header"><div><span class="eyebrow">ITINERARY · ALL 12 DAYS</span><h1>旅程</h1><p>12日分を上から続けて読めます。日付バーはスクロール中も残り、いつでも別の日へ移動できます。</p></div><div class="context-meta">12/25–1/5<small>日本・上海・スペインの各現地時間</small></div></header>
    ${renderItineraryJumpbar()}
    ${renderBarcelonaFlexDecision(days.d1227)}
    <div class="itinerary-days">${Object.values(days).map(renderItineraryDay).join("")}</div>`;
}

const planSections = [
  ["next", "次にやる"], ["bookings", "予約"], ["hotels", "宿泊"], ["documents", "書類・連絡"], ["packing", "持ち物"]
];

function bookingStatusLabel(booking) {
  const value = booking.status || booking.lifecycle || "";
  if (/確定|confirmed/.test(value)) return "予約済み";
  if (/waiting_release/.test(booking.lifecycle || "")) return "発売待ち";
  if (/waiting_official|researching/.test(value) || /waiting_official/.test(booking.lifecycle || "")) return "公式発表待ち";
  return "これから手配";
}

function bookingPublicNote(booking) {
  return String(booking.publicNote || "")
    .replace(/v2本編へ復元。/g, "")
    .replace(/購入証拠なしに確定済みへ変更しない。/g, "購入後に予約内容を確認します。")
    .replace(/現行便名・時刻は仮時刻。/g, "列車の発売後に時刻を選びます。")
    .replace(/現行列車時刻は仮時刻。/g, "列車の発売後に時刻を選びます。")
    .trim();
}

function allTripBookings() {
  const currentScheduleIds = new Set(Object.values(days).flatMap((day) => day.timeline.map((item) => String(item.detail || "").replace(/^canonical-/, ""))));
  return (window.UXFullData?.trip?.bookings || []).filter((booking) => {
    if (/見送り|現在の訪問予定ではありません/.test(booking.publicNote || "")) return false;
    if (booking.id === "flight") return true;
    const itemIds = booking.relatedScheduleItemIds || [];
    return !itemIds.length || itemIds.some((id) => currentScheduleIds.has(id));
  });
}

function bookingVisitLabel(booking) {
  if (/tarragona|montserrat/.test(booking.id)) return "12/27–29の選択日";
  return (booking.relatedDayIds || []).map((id) => days[id]?.date?.split("（")[0]).filter(Boolean).join("・") || "旅行全体";
}

function renderPlanBody(day) {
  if (state.planSection === "next") return `<div class="stack">${day.plan.map(([n, title, status, note, owner, timing]) => `<article class="card task-card"><span class="task-index">${n}</span><div><div class="status-row">${pill(status, /調査|依存/.test(status) ? "warn" : /待ち/.test(status) ? "wait" : "info")}</div><h3>${esc(title)}</h3><p class="muted">${esc(note)}</p><small>担当: ${esc(owner)}</small></div><time>確認時期: ${esc(timing)}</time></article>`).join("")}</div>`;
  if (state.planSection === "bookings") {
    const bookings = allTripBookings();
    const cards = bookings.map((booking) => { const label = bookingStatusLabel(booking); return `<article class="card card-body booking-card"><div class="status-row">${pill(label, label === "予約済み" ? "info" : "wait")}${pill(bookingVisitLabel(booking), "info")}</div><h3>${esc(booking.title)}</h3>${bookingPublicNote(booking) ? `<p class="muted">${esc(bookingPublicNote(booking))}</p>` : ""}${booking.deadline ? `<p class="booking-deadline"><span>確認目安</span><strong>${esc(booking.deadline)}</strong></p>` : ""}${booking.actionUrl ? `<a class="button primary" href="${esc(booking.actionUrl)}" target="_blank" rel="noreferrer">公式サイト</a>` : ""}</article>`; }).join("");
    return `<article class="card card-body booking-ledger-intro"><span class="eyebrow">TRIP-WIDE BOOKINGS</span><h2>旅行全体の予約・発売待ち</h2><p>日付を切り替えなくても、航空券・列車・入場券・年末の食事をまとめて確認できます。</p><div class="status-row">${pill(`予約対象 ${bookings.length}件`, "info")}${pill("個人情報は表示しない", "info")}</div></article><div class="grid two booking-ledger">${cards || `<article class="card card-body"><h3>予約対象を読み込めませんでした</h3><p class="muted">「次にやる」で発売待ちの項目を確認してください。</p></article>`}</div><article class="card card-body info-card booking-privacy"><h3>予約番号・QRは公開サイトに載せません</h3><p>予約後は家族だけが見られる保存先と端末のオフラインPDFへ保管します。この画面には、日付・予約状態・公式サイトだけを表示します。</p></article>`;
  }
  if (state.planSection === "hotels") {
    const stays = window.UXFullData?.hotelStays || [];
    return `<div class="stack"><article class="card card-body info-card"><span class="eyebrow">TOMORROW'S DECISION</span><h3>明日の相談までは、3件とも仮候補・未予約</h3><p>旅程と全体予算はこの3件を仮基準に計算しています。予約操作は行わず、明日の判断で候補・料金・経路をまとめて差し替えます。</p></article>${stays.map((stay, i) => `<article class="card card-body"><span class="eyebrow">STAY ${i + 1} · ${esc(stay.dates)}</span><h3>${esc(stay.stay)}｜${esc(stay.recommendation)}</h3><div class="status-row">${pill(stay.status, "wait")}${pill(`${stay.nights}泊・3名`, "info")}</div><p>${esc(stay.reason)}</p><dl class="fact-list"><div><dt>仮総額</dt><dd>${dualMoney(stay.totalEur)}（1人 ${dualMoney(stay.perPersonEur)}）</dd></div><div><dt>部屋</dt><dd>${esc(stay.room)}</dd></div><div><dt>注意</dt><dd>${esc(stay.caution)}</dd></div></dl>${action("詳細と比較", { open: `hotel-candidate-${stay.id}`, primary: true })}</article>`).join("")}</div>`;
  }
  if (state.planSection === "documents") return `<div class="grid two">${["パスポート・入国", "航空券・予約内容", "保険・緊急連絡", "通信・支払手段"].map((x, i) => `<article class="card card-body"><h3>${x}</h3><div class="status-row">${pill(i < 2 ? "入力待ち" : "旅行前に再確認", i < 2 ? "warn" : "wait")}</div><p class="muted">3人分の準備状況、保存場所、通信なしで見られるか、確認期限を表示します。</p></article>`).join("")}</div>`;
  if (state.planSection === "packing") {
    const phases = [["normal", "今から準備"], ["7d", "1週間前"], ["24h", "24時間前"], ["home", "自宅を出る前"]];
    const packing = window.UXFullData?.packingItems || [];
    const fallbacks = { normal: ["歩きやすい靴", "変換プラグ・充電器"], "7d": ["防寒具", "常備薬"], "24h": ["パスポート", "予約PDFを端末へ保存"], home: ["パスポート・財布・スマートフォン", "自宅の戸締まり"] };
    return `<div class="grid two">${phases.map(([phase, label], i) => { const items = packing.filter((item) => (item.checklistPhases || [item.phase]).includes(phase)); const shown = items.length ? items : fallbacks[phase].map((title) => ({ title, critical: phase === "24h" || phase === "home" })); return `<article class="card card-body"><span class="eyebrow">PHASE ${i + 1}</span><h3>${label}</h3><p class="muted">この段階で確認するもの</p>${shown.map((item) => `<label><input type="checkbox"> ${esc(item.title)}${item.critical ? "（重要）" : ""}</label><br>`).join("")}</article>`; }).join("")}</div>`;
  }
  return `<article class="card card-body"><h3>準備項目を選んでください</h3><p class="muted">予算・支出・換算・精算は「記録」タブにまとめています。</p></article>`;
}

function renderPlan() {
  const day = days[state.day];
  screen.innerHTML = `${screenHeader("PREPARATION", "準備", "今できることと待つことを分け、予約・宿泊・書類・持ち物を順番に進めます。")}
    <nav class="subtabs" aria-label="準備の分類">${planSections.map(([id, label]) => `<button class="subtab" type="button" data-plan-section="${id}" aria-selected="${state.planSection === id}">${label}</button>`).join("")}</nav>
    ${renderPlanBody(day)}`;
}

const guideSections = [["start","ガイドTOP"],["see","観光する"],["eat","食べる"],["practical","街・実用"]];

const practicalGuides = [
  { id: "airport-station", title: "空港・駅", summary: "迷いやすい順番と、先に確認する表示をまとめます。", points: ["空港では便名と搭乗口を先に確認し、食事や買い物はその後にする", "長距離列車は駅名・列車番号・出発表示を照合し、ホーム変更を電光掲示で見る", "3人と荷物がそろってから次の移動へ進む"] },
  { id: "local-transport", title: "市内交通", summary: "徒歩・地下鉄・タクシーの切り替え基準を確認します。", points: ["近距離は徒歩を基本にし、坂・雨・疲労・大型荷物がある時はタクシーへ切り替える", "地下鉄では終点方向と乗換駅をホーム表示で確認する", "深夜や大晦日は通常経路を前提にせず、公式交通案内を優先する"] },
  { id: "holiday", title: "年末年始", summary: "特別営業時間と大晦日の規制に備えます。", points: ["12月31日と1月1日は通常営業時間を当てはめない", "食事と水は営業時間内に早めに確保する", "Puerta del Solは18:00に入口・駅閉鎖・天候を確認し、20:30に進むかホテルへ戻るか決める"] },
  { id: "shopping", title: "買い物・土産", summary: "荷物を増やしすぎず、町ごとの品を選びます。", points: ["壊れ物と液体は帰国便の荷物条件を確認してから買う", "市場では持ち歩き時間と保存温度を見る", "大きな買い物は最終Barcelona滞在まで保留し、日中の観光では持ち歩かない"] },
  { id: "payment", title: "支払・チップ", summary: "円換算と3人の立替をその場で記録します。", points: ["カード決済では現地通貨EURを選び、円建て換算を避ける", "支払った人と参加者を記録タブへ入力する", "チップはサービス料と店の形式を見て判断し、義務として一律計算しない"] },
  { id: "language", title: "すぐ使うスペイン語", summary: "店・駅・緊急時に、画面を見せながら使える短い表現です。", points: ["Somos tres.（3人です）", "Quisiera esto, por favor.（これをお願いします）", "La cuenta, por favor.（お会計をお願いします）", "¿Dónde está ...?（…はどこですか）", "¿A qué hora sale?（何時に出発しますか）", "Necesito ayuda.（助けが必要です）"] },
  { id: "lost-items", title: "紛失・盗難", summary: "パスポート、カード、スマートフォンを失った時の順番を分けます。", points: ["まず同行者と安全な場所へ移動し、最後に使った場所と時刻を確認する", "カードは発行会社のアプリまたは緊急窓口で停止し、スマートフォンは別端末から紛失モードにする", "盗難は現地警察へ届け、受理番号または届出控えを保険請求用に保存する", "パスポート紛失は警察の届出後、日本大使館または総領事館へ連絡する"], sourceUrl: "https://www.es.emb-japan.go.jp/itpr_ja/00_000055.html", sourceLabel: "在スペイン日本国大使館｜盗難・紛失時の案内", checkedAt: "2026-08-16" },
  { id: "health", title: "体調不良・病院", summary: "症状の重さで、休む・保険へ相談・112を呼ぶを切り替えます。", points: ["軽い体調不良はホテルへ戻り、水分、体温、服薬内容を記録する", "受診先に迷う時は旅行保険の日本語相談窓口へ連絡し、紹介先と支払方法を確認する", "意識障害、呼吸困難、大量出血など緊急時は112へ電話する", "受診時はパスポート情報、保険証券、服薬一覧、アレルギーを提示できるようにする"], sourceUrl: "https://europa.eu/youreurope/citizens/travel/security-and-emergencies/emergency/index_es.htm", sourceLabel: "EU公式｜共通緊急番号112", checkedAt: "2026-08-16" },
  { id: "street-safety", title: "スリ・街中の注意", summary: "観光を楽しみながら、混雑する場所での被害を減らします。", points: ["地下鉄、駅、観光地の列では、スマートフォンと財布を外ポケットへ入れない", "声を掛けられて注意がそれた時も、荷物から手を離さない", "署名、物売り、汚れを指摘する人に囲まれたら、その場で対応せず明るい店内へ移動する", "現金とカードを分散し、全員が同じ場所へ貴重品をまとめない"], sourceUrl: "https://www.policia.es/miscelanea/participacion_ciudadana/triptico_plan_turismo_seguro.pdf", sourceLabel: "スペイン国家警察｜旅行者向け安全対策", checkedAt: "2026-08-16" },
  { id: "souvenir-timing", title: "土産を買う町と時期", summary: "名物を逃さず、12日間ずっと持ち歩かない買い方にします。", points: ["Barcelona前半は候補と価格だけ見て、常温で持てる菓子や雑貨は最終滞在でまとめて買う", "TarragonaとCórdobaの土地の品は日帰り当日に買うが、液体・壊れ物・要冷蔵品は少量にする", "Madridの菓子や美術館ショップ品は1/3の移動前までに買い、列車の荷物を増やしすぎない", "液体、刃物、食品は帰国便の手荷物・税関条件を確認してから購入する"] },
  { id: "communication", title: "通信・オフライン", summary: "通信が不安定でも移動と連絡を続けられるようにします。", points: ["ホテル名・住所・予約PDFをオフラインで見られるようにする", "訪問エリアの地図と翻訳言語を端末へ事前保存する", "3人の集合場所と、連絡できない時に待つ時間を毎朝決める", "緊急連絡先と保険証券は、スマートフォン以外にも一部を保存する"] }
];

const representativeGuideCities = [
  { id: "Barcelona", tone: "barcelona", hero: "barcelona-hero-v1.png", label: "CATALUNYA · MEDITERRANEAN", visit: "12/26–12/30・1/3–1/4", intro: "地中海に面したCatalunyaの中心都市。Gaudíをはじめとするモデルニスモ建築、旧市街、市場、海と丘が近い距離に集まる。", food: "Pa amb tomàquet、魚介、市場料理、Catalunyaの野菜料理を、地区ごとの雰囲気と一緒に楽しむ。", learn: "Catalunyaの文化とモデルニスモを先に知ると、建築や街の見え方が大きく変わる。" },
  { id: "Madrid", tone: "madrid", hero: "madrid-hero-v1.png", label: "CAPITAL · ART & PLAZAS", visit: "12/30–1/3", intro: "スペイン中央部の首都。王宮と大広場、美術館が集まり、重厚な都市景観と日常的なバル文化を徒歩でつなげやすい。", food: "Cocido madrileño、イカのbocadillo、churrosなど、内陸らしい料理と気軽な軽食の両方がある。", learn: "王室都市としての歴史と美術館の代表作を先に知ると、広場や作品の意味をつかみやすい。" }
];

const representativeGuideAreas = [
  { id: "eixample", city: "Barcelona", name: "Eixample・Sagrada周辺", priority: 1, intro: "モデルニスモ建築を目的に歩く町。大通り沿いに店が多く、観光の前後で食事を組みやすい。", foodIntro: "Barcelonaの定番料理を、SagradaやPasseig de Gràciaの前後で狙いやすいエリア。", visit: ["12/26 午後", "12/30 午前"], foods: [
    { name: "Pa amb tomàquet", priority: 1, kind: "Barcelona定番", note: "パンにトマト、オリーブ油、塩。最初の一皿にしやすい。", when: "Barcelona滞在中の食事候補", shops: ["Can Culleretes（12/27市内案のみ）", "周辺のCatalunya料理店"] },
    { name: "Escalivada", priority: 2, kind: "Catalunya料理", note: "焼いた野菜をオリーブ油で食べる軽めの一皿。", when: "Barcelona滞在中の食事候補", shops: ["EixampleのCatalunya料理店", "宿泊先近くの代替店"] },
    { name: "Crema catalana", priority: 3, kind: "デザート", note: "食後に試したいCatalunyaの代表的なデザート。", when: "Barcelona滞在中の食事候補", shops: ["Can Culleretes（12/27市内案のみ）", "Granja M. Viader（別エリア候補）"] }
  ], sights: [
    { name: "Sagrada Família", priority: 1, kind: "建築", note: "このエリアで最優先。外観・内部・光の入り方を順に見る。", when: "12/30 09:00予定", nearby: "Pa amb tomàquet" },
    { name: "Hospital de Sant Pau", priority: 2, kind: "建築", note: "Sagradaから歩いてつなげやすいモデルニスモ建築。", when: "追加候補・未採用", nearby: "Escalivada" },
    { name: "Passeig de Gràcia", priority: 3, kind: "街歩き", note: "建築と買い物をまとめて見られる大通り。", when: "Barcelona滞在中の候補", nearby: "Crema catalana" }
  ]},
  { id: "ciutat-vella", city: "Barcelona", name: "Ciutat Vella・旧市街", priority: 2, intro: "市場、路地、旧市街の建築が密集するBarcelonaの中心部。短い時間でも食と街歩きを組み合わせやすい。", foodIntro: "市場料理、魚介、軽いタパスを朝から試しやすいエリア。", visit: ["12/27または12/28・選択シナリオによる"], foods: [
    { name: "Mercatのカウンター料理", priority: 1, kind: "市場料理", note: "卵料理や魚介を、その日の入荷を見ながら選ぶ。", when: "Barcelona市内案の昼食候補", shops: ["Cuines Santa Caterina", "市場内の営業中カウンター"] },
    { name: "Fideuà", priority: 2, kind: "魚介料理", note: "米ではなく短い麺で作る魚介料理。複数人で分けやすい。", when: "Barcelona滞在中の追加候補・未採用", shops: ["Can Solé（候補）", "7 Portes（代替候補）"] },
    { name: "Bombas", priority: 3, kind: "軽食", note: "じゃがいもを使ったBarcelonaの軽食。街歩きの途中向き。", when: "旧市街散策時", shops: ["La Cova Fumada（候補）", "旧市街のタパス店"] }
  ], sights: [
    { name: "La Boqueria", priority: 1, kind: "市場", note: "買い物だけでなく朝食の場所としても使える。混雑時の撤退条件も持つ。", when: "追加候補・未採用", nearby: "Mercatのカウンター料理" },
    { name: "Barri Gòtic", priority: 2, kind: "街歩き", note: "細い路地と広場を短いルートで歩く。", when: "Barcelona滞在中の候補", nearby: "Bombas" },
    { name: "Barcelona Cathedral", priority: 3, kind: "宗教建築", note: "移動日に無理に入れず、旧市街滞在時の候補にする。", when: "追加候補・未採用", nearby: "Fideuà" }
  ]},
  { id: "montjuic", city: "Barcelona", name: "Montjuïc", priority: 3, intro: "丘の上に美術館、眺望、庭園が広がるエリア。移動距離と風、終了時刻を見ながら範囲を決める。", foodIntro: "観光施設内か麓で食べるかを先に決め、帰着を遅らせないことが重要。", visit: ["追加候補・未採用"], foods: [
    { name: "Catalunyaの炭火料理", priority: 1, kind: "主菜", note: "肉や野菜の炭火料理。午後の観光後なら量を調整する。", when: "追加訪問する場合の候補", shops: ["Poble Espanyol周辺店", "ホテル周辺の代替店"] },
    { name: "Tapas盛り合わせ", priority: 2, kind: "シェア", note: "3人で量を調整しやすく、疲れていても選びやすい。", when: "追加訪問する場合の候補", shops: ["Plaça d'Espanya周辺", "宿泊先周辺"] }
  ], sights: [
    { name: "Montjuïcの眺望", priority: 1, kind: "景観", note: "天候と風が良い時に優先。行く条件を明示する。", when: "追加候補・未採用", nearby: "Tapas盛り合わせ" },
    { name: "MNAC周辺", priority: 2, kind: "美術・建築", note: "時間が限られる場合は外観と眺望に絞る。", when: "追加候補・未採用", nearby: "Catalunyaの炭火料理" }
  ]},
  { id: "paseo-arte", city: "Madrid", name: "Paseo del Arte・Retiro", priority: 1, intro: "主要美術館とRetiro公園が集まるMadridの文化エリア。閉館時刻を軸に徒歩でつなげる。", foodIntro: "美術館の前後に、Madridの煮込みや軽い昼食を組み込む。", visit: ["12/31 午前・午後"], foods: [
    { name: "Cocido madrileño", priority: 1, kind: "Madrid名物", note: "ひよこ豆、肉、野菜の煮込み。時間と量に余裕がある昼向き。", when: "12/31 昼候補", shops: ["La Daniela（候補）", "Paseo del Arte周辺の伝統料理店"] },
    { name: "Tortilla española", priority: 2, kind: "定番", note: "移動を崩しにくい軽食。店ごとの焼き加減も楽しめる。", when: "12/31 昼の代替", shops: ["Retiro周辺のバル", "Atocha周辺の代替店"] }
  ], sights: [
    { name: "Museo del Prado", priority: 1, kind: "美術館", note: "見る作品を絞り、12/31の短縮営業に合わせる。", when: "12/31 10:00–14:00予定", nearby: "Cocido madrileño" },
    { name: "Retiro公園", priority: 2, kind: "公園", note: "Prado後の疲労と天候を見て歩く範囲を決める。", when: "12/31 午後候補", nearby: "Tortilla española" },
    { name: "Cibeles・Alcalá", priority: 3, kind: "街歩き", note: "年末の交通規制を確認しながらCentro方面へつなぐ。", when: "12/31 午後候補", nearby: "Tortilla española" }
  ]},
  { id: "centro-sol", city: "Madrid", name: "Centro・Sol・La Latina", priority: 2, intro: "広場、老舗、バルが集まりMadridらしい街歩きと食をまとめやすい中心部。大晦日は規制と混雑が優先条件。", foodIntro: "Madridの代表的な軽食、甘味、タパスを歩きながら選べる。", visit: ["12/31 夕方・夜"], foods: [
    { name: "Bocadillo de calamares", priority: 1, kind: "Madrid名物", note: "イカフライを挟んだ軽食。Plaza Mayor周辺で試しやすい。", when: "12/31 早めの夕食候補", shops: ["La Campana（候補）", "Bar Postas（候補）"] },
    { name: "Chocolate con churros", priority: 2, kind: "甘味", note: "温かいチョコレートとチュロス。朝食や休憩向き。", when: "Madrid滞在中", shops: ["Chocolatería San Ginés（候補）", "Centroのchurrería"] },
    { name: "Callos a la madrileña", priority: 3, kind: "煮込み", note: "Madridの濃い味の煮込み。少量から試す。", when: "Madrid滞在中", shops: ["La Tasquita de Enfrente（候補）", "La Latinaの伝統料理店"] }
  ], sights: [
    { name: "Puerta del Sol", priority: 1, kind: "広場", note: "大晦日は通常観光ではなく、入口・規制・撤退条件まで確認する。", when: "12/31 夜・条件付き", nearby: "Bocadillo de calamares" },
    { name: "Plaza Mayor", priority: 2, kind: "広場", note: "Solと短い徒歩でつなげ、周辺の名物軽食も見る。", when: "Madrid滞在中", nearby: "Bocadillo de calamares" },
    { name: "La Latina", priority: 3, kind: "街歩き", note: "バル巡りをするなら時間帯と混雑を見て選ぶ。", when: "Madrid滞在中の候補", nearby: "Callos a la madrileña" }
  ]},
  { id: "atocha", city: "Madrid", name: "Atocha駅周辺", priority: 3, intro: "長距離列車の到着・出発拠点。観光を増やすより、荷物とホテル動線を守りながら使う町。", foodIntro: "到着直後や乗車前に、短時間・荷物ありでも利用できる食事を選ぶ。", visit: ["12/30 夕方到着"], foods: [
    { name: "Tortillaの軽食", priority: 1, kind: "短時間", note: "列車前後でも時間を読みやすい。持帰り可を優先。", when: "12/30 到着後候補", shops: ["Atocha駅構内候補", "ホテル動線上のバル"] },
    { name: "Jamónのbocadillo", priority: 2, kind: "持帰り", note: "荷物がある移動日にも食べやすい。", when: "12/30 遅延時代替", shops: ["駅構内の持帰り店", "ホテル近くの代替店"] }
  ], sights: [
    { name: "Atocha駅旧駅舎", priority: 1, kind: "駅", note: "観光目的で寄り道せず、乗換と出口確認の中で見る。", when: "12/30 到着予定", nearby: "Tortillaの軽食" },
    { name: "Real Jardín Botánico", priority: 2, kind: "庭園", note: "Paseo del Arte滞在時に余裕があれば候補。", when: "追加候補・未採用", nearby: "Jamónのbocadillo" }
  ]}
];

const areaCenters = {
  eixample: [41.4036, 2.1744],
  "ciutat-vella": [41.3836, 2.1769],
  montjuic: [41.3633, 2.1585],
  "paseo-arte": [40.4144, -3.6910],
  "centro-sol": [40.4169, -3.7035],
  atocha: [40.4066, -3.6892]
};

function distanceKm(lat1, lon1, lat2, lon2) {
  const rad = (value) => value * Math.PI / 180;
  const dLat = rad(lat2 - lat1);
  const dLon = rad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

let { cities: guideCities, areas: guideAreas } = window.UXFullData?.buildGuide(representativeGuideCities, representativeGuideAreas, state.scenario) || { cities: representativeGuideCities, areas: representativeGuideAreas };
function refreshScenarioGuide() {
  ({ cities: guideCities, areas: guideAreas } = window.UXFullData?.buildGuide(representativeGuideCities, representativeGuideAreas, state.scenario) || { cities: representativeGuideCities, areas: representativeGuideAreas });
}

const operationalGuide = {
  "Tarragona円形闘技場": {
    image: "assets/tarragona-hero-v2.png", imageAlt: "地中海に面したTarragonaのローマ遺跡を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["古代Tarracoの円形闘技場は、海に向かって開く地形を生かした見世物の舞台。", "遺構と地中海を同じ視界に入れると、港湾都市としてのTarracoが伝わる。", "Balco del Mediterraniから海岸線と遺跡の位置関係を見直す。"],
    onsite: ["観客席・競技面・海が重なる角度を探す", "火曜は内部を優先し、日曜は14:30閉館から逆算", "退出後にBalco del Mediterraniから全体の地形を見る"],
    facts: [["冬季 火–金", "09:00–18:30"], ["冬季 日・祝", "09:30–14:30"], ["最終入場", "閉館30分前"]], operationStatus: "利用日の開館を当日確認", checkedAt: "2026-08-14", sourceUrl: "https://www.tarragona.cat/patrimoni/museu-historia/monuments/lamfiteatre", sourceLabel: "Tarragona市公式"
  },
  "Praetorium・Roman CircusとPart Alta": {
    image: "assets/tarragona-hero-v2.png", imageAlt: "現代のTarragona旧市街に残るローマ都市を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["circusは戦車競走の巨大施設で、現在の建物や路地の下にも構造が残る。", "PraetoriumからPart Altaへ歩くと、古代の公共空間が現代都市の骨格になったことが分かる。"], onsite: ["地下通路と地上の街路の向きを比べる", "石積みが現代の建物へ取り込まれる箇所を見る", "火曜は内部、日曜は14:30までに退出"], facts: [["冬季 火–金", "09:00–20:00"], ["冬季 日・祝", "09:30–14:30"], ["月曜", "休館"]], operationStatus: "日曜短縮では内部を午前に限定", checkedAt: "2026-08-14", sourceUrl: "https://www.tarragona.cat/patrimoni/museu-historia/visites/arqueorutes/places/pretorium-circus", sourceLabel: "Tarragona市公式"
  },
  "考古学の遊歩道・城壁": {
    image: "assets/tarragona-hero-v2.png", imageAlt: "Tarragonaの城壁と地中海の光を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["城壁はTarracoの範囲と防御を示す、町の輪郭を読む場所。", "異なる時代の石積みを比べると、都市が修復と転用を重ねたことが見える。"], onsite: ["巨石と後世の積み方の違いを見る", "坂と旧市街の境界を確認", "帰りの列車を守り、火曜午後だけ内部を追加"], facts: [["冬季 火–金", "09:00–18:30"], ["冬季 日・祝", "09:30–14:30"]], operationStatus: "日曜は14:30まで、火曜は午後も可", checkedAt: "2026-08-14", sourceUrl: "https://www.tarragona.cat/patrimoni/museu-historia/visites/horaris/view", sourceLabel: "Tarragona市公式"
  },
  "Montserrat大聖堂": {
    image: "assets/montserrat-hero-v2.png", imageAlt: "Montserratの奇岩と修道院を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["山の巡礼地の中心がbasilicaと黒い聖母La Moreneta。", "信仰の場として静けさを守り、像の拝観時間と礼拝を優先する。"], onsite: ["basilicaの空間と山の地形の関係を見る", "Morenetaは公式時間と列を確認", "視界・風・交通・体調の一つでも悪ければBarcelonaへ切替"], facts: [["Basilica", "07:00–20:00"], ["Moreneta", "08:00–10:30／12:00–18:25"]], operationStatus: "天候と交通が良い日にだけ実行", checkedAt: "2026-08-14", sourceUrl: "https://www.montserratvisita.com/en/practical-information/opening-hours", sourceLabel: "Montserrat公式"
  },
  "山の地質・Sant Joan展望": {
    image: "assets/montserrat-hero-v2.png", imageAlt: "Montserratの鋸歯状の山と修道院を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["Montserratの名前どおり、風化した岩が鋸歯状に連なる地形が修道院を包む。", "Sant Joan funicularは約7分で高所へ上がるが、眺望は天候と運行が揃う時だけ価値がある。"], onsite: ["山頂側の雲量と風を到着時に確認", "当日運行を確認してから券を買う", "帰路便を先に決め、散策を延ばし過ぎない"], facts: [["Sant Joan", "乗車約7分・当日運行時のみ"], ["Santa Cova", "現在は運休中。計画に使わない"]], operationStatus: "晴天・弱風・当日運行が揃う場合のみ", checkedAt: "2026-08-14", sourceUrl: "https://www.montserratvisita.com/en/nature/funiculars", sourceLabel: "Montserrat公式"
  },
  "Montserrat Museum": {
    image: "assets/montserrat-hero-v2.png", imageAlt: "Montserratの修道院と山を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["山の信仰空間に集められた美術を、都市の美術館とは違う文脈で見る屋内候補。", "展望が悪い時や時間が余った時だけ加え、basilicaと帰路を優先する。"], onsite: ["当日の展示と閉館を入口で確認", "一点だけ選んで山の場所性との違いを見る", "帰路を遅らせるなら入らない"], facts: [["Museum", "通常10:00–18:45"]], operationStatus: "低優先・時間に余裕がある場合のみ", checkedAt: "2026-08-14", sourceUrl: "https://www.montserratvisita.com/en/practical-information/opening-hours", sourceLabel: "Montserrat公式"
  },
  "Mató amb mel": {
    image: "assets/montserrat-hero-v2.png", imageAlt: "Montserratの山と修道院を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["matóはやさしい風味のフレッシュチーズで、蜂蜜と合わせるCatalunyaの素朴な甘味。", "提供がなければ探し回らず、温かい料理と持参食で体力を守る。"], onsite: ["La Cafeteriaで当日の提供を確認", "3人で一つを分ける", "混雑時は持参したbocadilloと水へ切り替える"], facts: [["La Cafeteria", "通常08:45–19:30"]], operationStatus: "当日提供がある場合だけ追加", checkedAt: "2026-08-14", sourceUrl: "https://www.montserratvisita.com/en/practical-information/opening-hours", sourceLabel: "Montserrat公式"
  },
  "Mezquita-Catedral": {
    image: "assets/cordoba-hero-v2.png", imageAlt: "Cordobaの柱列と大聖堂空間を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["赤白のアーチが連なるイスラム期の礼拝空間が核。", "ミフラーブと、後世に中央へ挿入された大聖堂空間を見比べる。", "異なる宗教と権力の層が一つの建物に可視化され、Madrid・Barcelonaとは別の文化軸を示す。"], onsite: ["柱列の反復と光の方向を見る", "ミフラーブの装飾を近くで見る", "中央の大聖堂へ移り空間の尺度変化を感じる"], facts: [["一般料金", "€15（2026/4/1以降）"], ["最終入場・券売", "閉館30分前"], ["注意", "宗教行事で変更あり"]], operationStatus: "1/2の公式枠を旅行7日前に確認", checkedAt: "2026-08-14", sourceUrl: "https://mezquita-catedraldecordoba.es/organiza-la-visita/entradas-y-horarios/", sourceLabel: "Mezquita-Catedral公式"
  },
  "JuderíaとRoman Bridge": {
    image: "assets/cordoba-hero-v2.png", imageAlt: "Cordobaの歴史的建築と中庭を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["Mezquita周辺の白い路地は、Jewish quarterを含む複数文化の都市史を歩いて読む場所。", "Roman Bridgeへ出ると、Guadalquivir川と旧市街の高低差が一度に分かる。"], onsite: ["路地の幅と中庭への入口を見る", "橋の中央からMezquita側の都市景観を振り返る", "昼食時刻を守り、土産店で立ち止まり過ぎない"]
  },
  "Alcázar de los Reyes Cristianos": {
    image: "assets/cordoba-hero-v2.png", imageAlt: "Cordobaの歴史的建築とオレンジの中庭を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["Christian王権の城塞と庭園を通して、Mezquitaとは別の時代の権力表現を見る条件付き候補。"], onsite: ["Mezquitaと昼食を終えてから残り時間を判断", "入場列が長ければ庭園を外から確認して終了", "16:15の駅方向への移動開始を守る"], operationStatus: "時間と体力が残る場合のみ"
  },
  "Romesco／cassola": {
    image: "assets/tarragona-food-v2.png", imageAlt: "Tarragonaのromescoと魚介料理を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["romescoは一つの固定料理名ではなく、ナッツや焙煎野菜の風味を魚介などへ合わせるTarragonaの食文化。", "当日は魚の種類や仕立てが変わるため、romesco／cassolaの提供内容を店で聞く。"],
    onsite: ["最初に当日のromesco系料理を確認", "3人で主菜1皿から分ける", "なければ魚介の米料理かfideusへ切り替える"],
    facts: [["予定店", "El Llagut"], ["火曜の昼", "12:30–15:30"], ["日曜の昼", "12:30–15:30"]], operationStatus: "利用日と提供料理は前日に確認", checkedAt: "2026-08-14", sourceUrl: "https://www.tarragonaturisme.cat/sites/default/files/2026-01/romesco-tarragona-quadriptic.pdf", sourceLabel: "Tarragona観光局公式"
  },
  "魚介の米料理・fideus": {
    image: "assets/tarragona-food-v2.png", imageAlt: "Tarragonaの魚介料理と米料理を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["港町の魚介の旨味を米または短い麺へ吸わせる、3人で分けやすい主食。", "romesco系の主菜と同時に頼み過ぎず、1皿ずつ量を見て追加する。"], onsite: ["当日の魚介と調理時間を聞く", "3人で1皿を共有", "帰りの列車から逆算して追加注文を止める"]
  },
  "魚介・tapas": {
    image: "assets/tarragona-food-v2.png", imageAlt: "Tarragonaの魚介と小皿料理を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["日曜短縮や軽く食べたい日に、魚介と小皿を少量ずつ選ぶ第三候補。"], onsite: ["当日営業と厨房の終了時刻を確認", "冷菜と温菜を一つずつ選ぶ", "列車の余裕を削らない"]
  },
  "Salmorejo": {
    image: "assets/cordoba-food-v2.png", imageAlt: "Cordobaのsalmorejoを含む郷土料理を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["トマト、パン、オリーブ油を濃厚に合わせるCordobaの代表料理。gazpachoよりとろみが強く、卵とjamónを添える。"], onsite: ["3人で1皿を最初に共有", "冷製の一皿から温かい肉料理へ進む"], checkedAt: "2026-08-14", sourceUrl: "https://www.turismodecordoba.org/la-gastronomia-cordobesa", sourceLabel: "Cordoba観光局公式"
  },
  "Flamenquín": {
    image: "assets/cordoba-food-v2.png", imageAlt: "Cordobaのflamenquinを含む郷土料理を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["豚肉でjamónを巻き、衣をつけて揚げるCordoba名物。切り分けて3人で味見しやすい。"], onsite: ["1本を切り分けて共有", "rabo de toroと同時に量を頼み過ぎない"], checkedAt: "2026-08-14", sourceUrl: "https://www.turismodecordoba.org/la-gastronomia-cordobesa", sourceLabel: "Cordoba観光局公式"
  },
  "Rabo de toro": {
    image: "assets/cordoba-food-v2.png", imageAlt: "Cordobaのrabo de toroを含む郷土料理を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["牛尾を柔らかく煮込み、濃いソースまでパンと味わうCordobaの主菜。"], onsite: ["3人で1皿を共有", "パンはソースを味わう分だけ追加"] , checkedAt: "2026-08-14", sourceUrl: "https://www.turismodecordoba.org/la-gastronomia-cordobesa", sourceLabel: "Cordoba観光局公式"
  },
  "Berenjenas con miel": {
    image: "assets/cordoba-food-v2.png", imageAlt: "Cordobaのberenjenas con mielを含む郷土料理を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["薄く揚げた茄子へ黒蜜を合わせる、甘さと塩気の対比が楽しい小皿。"], onsite: ["肉料理の間に3人でつまむ", "揚げたてを少量から頼む"], checkedAt: "2026-08-14", sourceUrl: "https://www.turismodecordoba.org/la-gastronomia-cordobesa", sourceLabel: "Cordoba観光局公式"
  },
  "Pastel cordobés": {
    image: "assets/cordoba-food-v2.png", imageAlt: "Cordobaの郷土料理を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["髪のように細いかぼちゃの砂糖煮を生地で包むCordobaの菓子。昼食後の余裕がある時だけ探す。"], onsite: ["3人で一つを分ける", "帰りの列車と徒歩時間を先に守る"], checkedAt: "2026-08-14", sourceUrl: "https://www.turismodecordoba.org/la-gastronomia-cordobesa", sourceLabel: "Cordoba観光局公式"
  },
  "Sagrada Família": {
    image: "assets/sagrada-interior.jpg", imageAlt: "サグラダ・ファミリア内部の柱と光", imageKind: "現地写真",
    articleId: "sagrada",
    learn: ["Gaudíは聖堂全体を自然の秩序として構成し、柱を枝分かれする樹木のように設計した。", "生誕のファサードと受難のファサードは、彫刻の密度も感情も対照的。入る前に両方を見る。", "内部では構造だけでなく、東西のステンドグラスから入る光の色の違いを見る。"],
    onsite: ["Carrer de la Marina側の一般入口を先に確認", "内部中央で柱が枝分かれする位置を見上げる", "退出前に反対側の光まで見て、塔の集合時刻を守る"],
    facts: [["冬季の月–土", "通常09:00–18:00"], ["予定", "12/30 09:00・オンライン日時指定券"], ["変更", "購入条件に制約あり。購入前に確認"]],
    operationStatus: "2026/12/30 09:00の入場枠は発売後に確定", checkedAt: "2026-08-14", sourceUrl: "https://sagradafamilia.org/en/schedules-how-to-get", sourceLabel: "Sagrada Família公式"
  },
  "カサ・ミラ（ラ・ペドレラ）": {
    articleId: "mila",
    learn: ["波打つ石の外壁は装飾ではなく、自由な平面と自然を思わせる構成の入口。", "屋上では煙突・換気塔・階段室を彫刻として見せるGaudíの考えを見る。"],
    onsite: ["中庭で光と換気の通り方を確認", "屋根裏の連続アーチから屋上へ進み、街の基準線と曲面を比べる", "次のCasa Batllóを残すため16:00を退出上限にする"],
    facts: [["12/26特別時間", "9:00–20:30（一般案内。予約画面で枠を再確認）"], ["所要時間", "公式目安1–1.5時間"], ["一般料金", "Essentialは€29から"]],
    operationStatus: "2026年クリスマス特別時間を確認済み・入場枠は未購入", checkedAt: "2026-08-14", sourceUrl: "https://www.lapedrera.com/en/practical-information/", sourceLabel: "La Pedrera公式"
  },
  "カサ・バトリョ": {
    articleId: "batllo",
    learn: ["外観は骨・仮面・竜など複数の読みが重なる。正解探しより素材と曲線の連続を見る。", "吹抜けの青いタイルは上ほど濃く、採光を均す工夫になっている。"],
    onsite: ["外観で屋根・バルコニー・柱を一度に見ず、下から順に観察", "中央吹抜けで色の濃淡と窓の大きさを確認", "疲労や前施設の遅れがあれば、この入場を削る判断を優先"],
    facts: [["通常営業", "毎日営業。一般見学は9:00開始"], ["一般見学", "約1時間15分"], ["料金", "オンラインは€29から。旅行日の枠で確定"]],
    operationStatus: "通常情報を確認済み・12/26の枠は未購入", checkedAt: "2026-08-14", sourceUrl: "https://www.casabatllo.es/en/online-tickets/", sourceLabel: "Casa Batlló公式"
  },
  "グエル公園": {
    learn: ["住宅地計画として始まり、建築と斜面・排水・植生を一体にした場所。", "有名なトカゲだけでなく、列柱・高架路・市場空間が地形をどう受け止めるかを見る。"],
    onsite: ["チケット記載時刻から30分以内に入場", "雨・強風なら無理に公園を主役にせず音楽堂へ切替", "退場後は再入場できないため見落としを出口前に確認"],
    facts: [["12/28の有料入場帯", "9:30–17:30が2026年末の販売対象帯"], ["入場猶予", "券面時刻から30分"], ["再入場", "不可"]],
    operationStatus: "2026年の有料入場帯を確認済み・枠は未購入", checkedAt: "2026-08-14", sourceUrl: "https://parkguell.barcelona/en/planning-your-visit/prices-and-times", sourceLabel: "Park Güell公式"
  },
  "カタルーニャ音楽堂": {
    articleId: "barcelona-modernisme-palau",
    learn: ["Domènech i MontanerによるModernisme建築で、Gaudí以外の『総合芸術』を比較できる。", "ステンドグラスの天窓、柱、彫刻、音楽ホールが一つの物語として構成される。"],
    onsite: ["自由見学の最終帯と当日の公演準備による制限を入口で確認", "天井の逆さのドームと舞台背面を同じ位置から比較", "公園が悪天候なら、ここをその日の主役へ切り替える"],
    facts: [["自由見学", "9:00–15:30"], ["所要時間", "約50分"], ["一般料金", "オンライン€20、窓口は+€2"]],
    operationStatus: "通常見学情報を確認済み・12/28の枠は未購入", checkedAt: "2026-08-14", sourceUrl: "https://www.palaumusica.cat/en/visites/self-guided-tour_1174326", sourceLabel: "Palau de la Música公式"
  },
  "モンセラート": {
    articleId: "montserrat",
    learn: ["山の地形、ベネディクト会修道院、Catalunyaの信仰と文化が重なる日帰り先。", "黒い聖母、礼拝、少年聖歌隊は観光展示ではなく現在も続く宗教実践の一部。"],
    onsite: ["Espanya駅でR5の行先とAeri接続を再確認", "到着後は天候と下山便を先に見てから山上の順番を決める", "聖歌隊は休暇・遠征があるため当日の出演を前提にしない"],
    facts: [["Tot/Trans券", "特定利用日の指定がないopen ticket"], ["購入", "オンライン、Plaça Espanya、FGC券売機"], ["追加", "Morenetaやfunicularは当日利用可能な場合のみ"]],
    operationStatus: "open ticket条件を確認済み・2026年末の交通運行待ち", checkedAt: "2026-08-14", sourceUrl: "https://turistren.cat/en/trains/montserrat-rack-railway-and-funiculars/faqs/", sourceLabel: "Turistren / FGC公式FAQ"
  },
  "Tarragona円形闘技場": {
    image: "assets/tarragona-hero-v2.png", imageAlt: "地中海に面したTarragonaのローマ遺跡を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["地中海に面した円形闘技場を、Circや城壁と同じRoman cityの地形として見る。"], onsite: ["火曜は中央部の内部見学を優先", "日曜案では内部を14:30までに終える", "Pont del Diableへ広げず市内駅への帰路を守る"],
    facts: [["冬季火–金", "09:00開始、閉館は施設により18:30または20:00"], ["日曜・祝日", "09:30–14:30"], ["月曜", "指定祝日を除き休館"]], operationStatus: "通常冬季時間を確認済み・2026 Christmas運用待ち", checkedAt: "2026-08-14", sourceUrl: "https://www.tarragona.cat/patrimoni/museu-historia/visites/horaris/view", sourceLabel: "Tarragona市公式"
  },
  "Mezquita-Catedral": {
    image: "assets/cordoba-hero-v2.png", imageAlt: "Cordobaの赤白の柱列と中庭を描いたイメージ", imageKind: "AI生成イメージ",
    learn: ["イスラム期の柱列と後世の大聖堂空間が重なる歴史を見てから、Juderíaへ歩く。"], onsite: ["公式券の入場時刻を守る", "礼拝による動線変更を入口で確認", "柱列とmihrabを優先する"],
    facts: [["予定", "1/2 10:00"], ["券", "公式サイトで旅行日の入場条件を確認"], ["不成立時", "Mezquita核心または鉄道が使えない場合だけToledoへ"]], operationStatus: "2027/1/2の時間・宗教行事・券は旅行前に確認", checkedAt: "2026-08-14", sourceUrl: "https://mezquita-catedraldecordoba.es/organiza-la-visita/entradas-y-horarios/", sourceLabel: "Mezquita-Catedral公式"
  },
  "Museo del Prado": {
    image: "assets/madrid-hero-v1.png", imageAlt: "Madridの冬の街並みを表現したイメージ", imageKind: "AI生成イメージ",
    learn: ["王室コレクションを核にした美術館で、VelázquezとGoyaを見るとスペイン宮廷と社会の変化がつながる。", "最初に『ラス・メニーナス』、次にGoyaの明るい宮廷画と黒い絵の対比を見る。", "全館制覇ではなく、12/31の短縮営業に合わせ代表作を絞る。"],
    onsite: ["入館後に館内mapでVelázquezとGoyaの部屋を確認", "ラス・メニーナスでは画家・王・鏡・鑑賞者の視線関係を見る", "13:30最終入場より前に入り、13:50までの退室を前提にする"],
    facts: [["12月31日", "10:00–14:00の短縮営業"], ["最終入場", "閉館30分前"], ["住所", "Paseo del Prado s/n, 28014 Madrid"]],
    operationStatus: "通常規則を確認済み・予約枠は購入時に確認", checkedAt: "2026-08-14", sourceUrl: "https://www.museodelprado.es/en/visit/opening-times-and-prices", sourceLabel: "Museo del Prado公式"
  },
  "トレド大聖堂": {
    articleId: "toledo-cathedral",
    learn: ["Gothicの骨格へRenaissanceとBaroqueが重なり、時代の違う空間を一度に読める。", "主祭壇、聖歌隊席、聖具室、Transparenteを光と権力の演出として見る。"],
    onsite: ["文化見学入口Puerta Llanaへ向かう", "90分で主祭壇・聖歌隊席・聖具室・Transparenteを優先", "宗教行事による変更を現地掲示で再確認"],
    facts: [["土曜", "10:00–18:30"], ["最終入場", "閉館30分前"], ["一般料金", "€12"]],
    operationStatus: "通常時間と料金を確認済み・1/2特別変更は直前再確認", checkedAt: "2026-08-14", sourceUrl: "https://www.catedralprimada.es/en/cultural-visit/tickets-toledo-cathedral/", sourceLabel: "Toledo Cathedral公式"
  },
  "エル・グレコ美術館": {
    articleId: "el-greco-museum",
    learn: ["El Greco本人の家をそのまま保存した施設ではなく、20世紀に形成された記念館。", "Pradoの肖像、Santo Toméの大作、ここで見る連作とToledo景観を比較する。"],
    onsite: ["使徒連作の顔と手を比較", "Toledo景観の描き方を実際の街と比べる", "閉館より15分早い最終入場を守る"],
    facts: [["冬季土曜", "9:30–18:00"], ["一般料金", "€3"], ["休館", "月曜、1/1・1/6ほか"]],
    operationStatus: "通常時間と料金を確認済み・1/2は営業想定", checkedAt: "2026-08-14", sourceUrl: "https://www.cultura.gob.es/mgreco/la-visita/horariosytarifas.html", sourceLabel: "スペイン文化省公式"
  },
  "ソフィア王妃芸術センター": {
    learn: ["Guernicaを戦争の一場面ではなく、断片化した身体・光・視線の構成として見る。", "PradoのGoyaから20世紀のPicassoへ、暴力をどう描くかをつなげる。"],
    onsite: ["Nouvel Building側の入口は比較的混雑を避けやすい", "Guernicaの展示状況を入館後の公式mapで確認", "日曜は14:30閉館なので12:00までの退出を守る"],
    facts: [["1/3日曜", "10:00–14:30"], ["最終入場", "閉館30分前"], ["休館", "火曜、1/1・1/6・12/31ほか"]],
    operationStatus: "日曜時間と休館日を確認済み・入場枠は未購入", checkedAt: "2026-08-14", sourceUrl: "https://www.museoreinasofia.es/en/visit/main-site/", sourceLabel: "Museo Reina Sofía公式"
  },
  "Puerta del Sol": {
    image: "assets/madrid-hero-v1.png", imageAlt: "Madridの冬の夜景を表現したイメージ", imageKind: "AI生成イメージ",
    learn: ["年越しでは時計台の鐘に合わせ、12粒のブドウを食べる習慣がある。", "この日は観光地ではなく、大規模イベントの入口・収容・帰路を判断する場所として扱う。"],
    onsite: ["18:00にMadrid市と警察の当日案内を確認", "公式入口以外へ回り込まない", "20:30までに安全な入場と徒歩帰路を確保できなければホテル案へ切替"],
    facts: [["2026年の入口", "未公表"], ["駅閉鎖・収容", "未公表"], ["代替", "ブドウと飲食を18:00までに確保しホテルで公式中継"]],
    operationStatus: "2026年公式発表待ち", checkedAt: "2026-08-14", sourceUrl: "https://www.madrid.es/", sourceLabel: "Madrid市公式（公表待ち）"
  },
  "Pa amb tomàquet": {
    image: "assets/barcelona-hero-v1.png", imageAlt: "Barcelonaの朝の街並みを表現したイメージ", imageKind: "AI生成イメージ",
    learn: ["トマトをパンへこすり、オリーブ油と塩を合わせるCatalunyaの日常的な一皿。", "単品で目的地化するより、伝統料理店で前菜として他の名物と組み合わせる。"],
    onsite: ["3人ならまず1皿を共有", "Can Culleretesは12/27がBarcelona市内案になった場合だけ候補にし、満席なら近い営業店へ切り替える"],
    facts: [["予定", "Barcelona滞在中の料理候補"], ["店", "Can Culleretesは12/27市内案のみ"], ["年末営業", "利用日の前日に再確認"]],
    operationStatus: "店と年末営業は未確認", checkedAt: "未確認", sourceUrl: "", sourceLabel: "調査が必要"
  },
  "Bocadillo de calamares": {
    image: "assets/madrid-hero-v1.png", imageAlt: "Madridの冬の夜景を表現したイメージ", imageKind: "AI生成イメージ",
    learn: ["イカフライをパンに挟むMadrid中心部の定番軽食。Plaza Mayor周辺で短時間に食べやすい。", "大晦日は店名より、退店時刻と持帰り可否を優先する。"],
    onsite: ["Solの公式判断前に食事を終える", "混雑時は持帰りへ切り替え、ホテル代替用の飲食も確保"],
    facts: [["候補", "La Campana / Bar Postas"], ["12/31営業", "未確認"], ["予約・持帰り", "確認が必要"]],
    operationStatus: "2026年末営業は未確認", checkedAt: "未確認", sourceUrl: "", sourceLabel: "調査が必要"
  }
};

const guideVisuals = {
  "Romescoと魚介": { image: "assets/food-romesco-cassola-ai.webp", imageAlt: "魚介を温かいromescoで煮たcassolaの料理イメージ", imageKind: "料理イメージ・AI生成" },
  "Romesco／cassola": { image: "assets/food-romesco-cassola-ai.webp", imageAlt: "魚介を温かいromescoで煮たcassolaの料理イメージ", imageKind: "料理イメージ・AI生成" },
  "魚介の米料理・fideus": { image: "assets/tarragona-food-v2.png", imageAlt: "Tarragonaの魚介料理と米料理を描いたイメージ", imageKind: "AI生成イメージ" },
  "魚介・tapas": { image: "assets/tarragona-food-v2.png", imageAlt: "Tarragonaの魚介と小皿料理を描いたイメージ", imageKind: "AI生成イメージ" },
  "Cordoba料理5選": { image: "assets/cordoba-food-v2.png", imageAlt: "Cordobaの郷土料理を描いたイメージ", imageKind: "AI生成イメージ" },
  "Salmorejo": { image: "assets/food-salmorejo-ai.webp", imageAlt: "卵とjamónを添えたCordobaのsalmorejoの料理イメージ", imageKind: "料理イメージ・AI生成" },
  "Flamenquín": { image: "assets/food-flamenquin-ai.webp", imageAlt: "豚肉とjamónを巻いて揚げたCordobaのflamenquínの料理イメージ", imageKind: "料理イメージ・AI生成" },
  "Rabo de toro": { image: "assets/food-rabo-de-toro-ai.webp", imageAlt: "濃いsauceで煮込んだCordobaのrabo de toroの料理イメージ", imageKind: "料理イメージ・AI生成" },
  "Berenjenas con miel": { image: "assets/food-berenjenas-miel-ai.webp", imageAlt: "揚げた茄子にmiel de cañaをかけたCordoba料理のイメージ", imageKind: "料理イメージ・AI生成" },
  "Pastel cordobés": { image: "assets/food-pastel-cordobes-ai.webp", imageAlt: "cabello de ángelを包んだCordobaのpastelの料理イメージ", imageKind: "料理イメージ・AI生成" },
  "Pa amb tomàquet": { image: "assets/food-pa-amb-tomaquet.jpg", imageAlt: "トマトとオリーブ油をのせたパン・コン・トマテ", imageKind: "料理写真" },
  "パン・コン・トマテ": { image: "assets/food-pa-amb-tomaquet.jpg", imageAlt: "トマトとオリーブ油をのせたパン・コン・トマテ", imageKind: "料理写真" },
  "Crema catalana": { image: "assets/food-crema-catalana.jpg", imageAlt: "表面を香ばしく焼いたクレマ・カタラナ", imageKind: "料理写真" },
  "クレマ・カタラナ": { image: "assets/food-crema-catalana.jpg", imageAlt: "表面を香ばしく焼いたクレマ・カタラナ", imageKind: "料理写真" },
  "Fideuà": { image: "assets/food-fideua.webp", imageAlt: "短い麺と魚介を炊いたフィデウア", imageKind: "料理写真" },
  "フィデウア": { image: "assets/food-fideua.webp", imageAlt: "短い麺と魚介を炊いたフィデウア", imageKind: "料理写真" },
  "チュロス": { image: "assets/food-churros-san-gines.jpg", imageAlt: "San Ginésのチョコレート・コン・チュロス", imageKind: "料理写真" },
  "Chocolate con churros": { image: "assets/food-churros-san-gines.jpg", imageAlt: "San Ginésのチョコレート・コン・チュロス", imageKind: "料理写真" },
  "Cocido madrileño": { image: "assets/food-cocido-madrileno-ai.webp", imageAlt: "ひよこ豆、肉、野菜を盛り分けたMadridのcocido madrileñoの料理イメージ", imageKind: "料理イメージ・AI生成" },
  "Bocadillo de calamares": { image: "assets/food-bocadillo-calamares-ai.webp", imageAlt: "揚げたcalamaresをパンに挟んだMadridのbocadilloの料理イメージ", imageKind: "料理イメージ・AI生成" },
  "カルカムサス": { image: "assets/food-carcamusas.jpg", imageAlt: "Toledo名物の豚肉と野菜の煮込みカルカムサス", imageKind: "料理写真" },
  "Carcamusas": { image: "assets/food-carcamusas.jpg", imageAlt: "Toledo名物の豚肉と野菜の煮込みカルカムサス", imageKind: "料理写真" },
  "カサ・バトリョ": { image: "assets/sight-casa-batllo.webp", imageAlt: "Passeig de Gràciaに面するカサ・バトリョの外観", imageKind: "現地写真" },
  "Casa Batlló": { image: "assets/sight-casa-batllo.webp", imageAlt: "Passeig de Gràciaに面するカサ・バトリョの外観", imageKind: "現地写真" },
  "カタルーニャ音楽堂": { image: "assets/sight-palau-musica.jpg", imageAlt: "カタルーニャ音楽堂の客席とステンドグラス", imageKind: "現地写真" },
  "Palau de la Música Catalana": { image: "assets/sight-palau-musica.jpg", imageAlt: "カタルーニャ音楽堂の客席とステンドグラス", imageKind: "現地写真" },
  "モンセラート大聖堂": { image: "assets/sight-montserrat.jpg", imageAlt: "岩山に囲まれたMontserrat修道院", imageKind: "現地写真" },
  "Montserrat": { image: "assets/sight-montserrat.jpg", imageAlt: "岩山に囲まれたMontserrat修道院", imageKind: "現地写真" },
  "プラド美術館": { image: "assets/sight-prado.webp", imageAlt: "Madridのプラド美術館外観", imageKind: "現地写真" }
};

const shopTeaserRules = [
  [/Can Culleretes/, "旧市街でCatalunyaの家庭料理を一度に味わえる第一候補。煮込みからデザートまで3人で分けて楽しみます。"],
  [/7 Portes/, "魚介や米料理をゆっくり囲める伝統店。第一候補が満席でもBarcelonaらしい一食を守れます。"],
  [/Can Solé/, "Barcelonetaで魚介の米料理とfideuàを目的に訪れる店。海辺の夜を食事で締めます。"],
  [/San Ginés/, "熱いchocolateとchurrosを味わうMadridの定番。元日の街歩きに甘い休憩を入れられます。"],
  [/La Campana/, "Plaza Mayor横で揚げたてのイカをパンに挟む、短時間でもMadridらしさがある店です。"],
  [/El Quim/, "市場のカウンターで調理の様子を見ながら、その日の卵料理や魚介を選べます。"],
  [/El Trébol/, "Toledo名物carcamusasとBombaを、坂歩きの途中で気軽に分けられます。"],
  [/Casa Alberto/, "Las LetrasでcallosなどMadridの伝統料理を味わい、到着日の夜を楽しめます。"],
  [/La Pubilla/, "Gràciaの市場前で季節のランチを選び、観光地とは違う普段のBarcelonaを感じられます。"],
  [/El Xampanyet/, "El Bornの活気あるバルで、魚介の小皿とcavaを少しずつ試せます。"]
];
function shopTeaser(shop, item, index) {
  return shopTeaserRules.find(([pattern]) => pattern.test(shop))?.[1] || (index === 0 ? `${item.name}を町の雰囲気と一緒に味わう第一候補です。` : `${item.name}を食べる目的を守れる代替候補です。`);
}
const guideShopFallbacks = {
  "Escalivada": ["Can Culleretes", "La Pubilla"], "Catalunyaの炭火料理": ["Terraza Martínez", "Can Culleretes"],
  "Tapas盛り合わせ": ["El Xampanyet", "Quimet & Quimet"], "Cocido madrileño": ["Malacatín", "La Daniela Medinaceli"],
  "Tortilla española": ["Casa Dani", "Juana La Loca"], "Callos a la madrileña": ["Casa Alberto", "Lhardy"],
  "Tortillaの軽食": ["Enrique Tomás Estación Atocha", "Rodilla Atocha"], "Jamónのbocadillo": ["Enrique Tomás Estación Atocha", "Enrique Tomás Kiosko Sants"]
};
function recommendedShops(item) {
  const generic = /周辺|近く|動線上|代替店|持帰り店|料理店$|バル$|営業中|店候補を確認中/;
  const specific = (item.shops || []).filter((shop) => !generic.test(shop));
  return specific.length ? specific : (guideShopFallbacks[item.name] || []);
}

function mustEatItems() {
  const cityOrder = ["Barcelona", "Tarragona", "Montserrat", "Madrid", "Cordoba"];
  return cityOrder.flatMap((cityName) => {
    const candidates = guideAreas.filter((area) => area.city === cityName && !(area.visit || []).every((visit) => /追加候補|未採用|代替/.test(visit))).flatMap((area) => area.foods.map((item) => ({ area, item }))).filter(({ item }) => !/追加候補|未採用|代替時のみ/.test(item.when || ""));
    return candidates.sort((a, b) => a.item.priority - b.item.priority).slice(0, 2);
  });
}

function renderMustEatOverview() {
  const items = mustEatItems();
  return `<section class="section must-eat-section"><div class="section-head"><div><span class="eyebrow">MUST EAT · TRIP OVERVIEW</span><h2>この旅行で食べたいもの</h2><p>いつ食べるか、どの町か、店の第一候補まで一度に確認できます。</p></div><button class="button" type="button" data-guide-section="eat">町ごとの食ガイドへ</button></div><div class="must-eat-grid">${items.map(({ area, item }, index) => { const visual = guideVisuals[item.name] || {}; const city = guideCities.find((entry) => entry.id === area.city); const image = visual.image || `${city?.hero?.startsWith("assets/") ? "" : "assets/"}${city?.hero || "barcelona-hero-v1.png"}`; const imageAlt = visual.imageAlt || `${area.city}の食文化を表す都市イメージ`; const imageKind = visual.imageKind || "都市イメージ・AI生成"; const shop = recommendedShops(item)[0] || "店は日程と営業を見て選ぶ"; return `<article class="card must-eat-card"><img src="${esc(image)}" alt="${esc(imageAlt)}"><div><span class="eyebrow">${index + 1} · ${esc(area.city)} · ${esc(area.name)}</span><h3>${esc(item.name)}</h3><dl><div><dt>予定</dt><dd>${esc(item.when)}</dd></div><div><dt>店候補</dt><dd>${esc(shop)}</dd></div></dl><small class="image-disclosure">画像: ${esc(imageKind)}</small><button class="button primary" type="button" data-open-detail="guide-eat-${area.id}-${item.priority}">料理と店を見る</button></div></article>`; }).join("")}</div></section>`;
}

function guideControls() {
  const visibleAreas = state.guideCity === "all" ? guideAreas : guideAreas.filter((area) => area.city === state.guideCity);
  const cityOptions = guideCities.map((city) => `<option value="${esc(city.id)}"${state.guideCity === city.id ? " selected" : ""}>${esc(city.id)}</option>`).join("");
  return `<section class="guide-controls" aria-label="町・エリアの絞り込み"><label><span>都市</span><select data-guide-city><option value="all"${state.guideCity === "all" ? " selected" : ""}>すべて</option>${cityOptions}</select></label><label><span>町・エリア</span><select data-guide-area-select><option value="all">すべての町</option>${visibleAreas.map((area) => `<option value="${area.id}"${state.guideArea === area.id ? " selected" : ""}>${esc(area.name)}</option>`).join("")}</select></label><label><span>並び順</span><select data-guide-sort><option value="priority"${state.guideSort === "priority" ? " selected" : ""}>おすすめ順</option><option value="visit"${state.guideSort === "visit" ? " selected" : ""}>訪問予定あり</option><option value="name"${state.guideSort === "name" ? " selected" : ""}>名前順</option></select></label><button class="nearby-button" type="button" data-guide-nearby><span aria-hidden="true">◎</span><strong>今いる近くから探す</strong><small>${esc(state.guideLocationNote)}</small></button></section>`;
}

function sortedGuideAreas() {
  let areas = guideAreas.filter((area) => state.guideCity === "all" || area.city === state.guideCity);
  if (state.guideArea !== "all") areas = areas.filter((area) => area.id === state.guideArea);
  const cityOrder = Object.fromEntries(guideCities.map((city, index) => [city.id, index]));
  const visitOrder = { eixample: 1, montjuic: 2, "ciutat-vella": 3, atocha: 4, "paseo-arte": 5, "centro-sol": 6 };
  return [...areas].sort((a,b) => state.guideSort === "name" ? a.name.localeCompare(b.name, "ja") : state.guideSort === "visit" ? visitOrder[a.id] - visitOrder[b.id] : cityOrder[a.city] - cityOrder[b.city] || a.priority - b.priority);
}

function areaCardsForCity(city, mode) {
  const label = mode === "eat" ? "名物料理" : "主な観光地";
  const areas = sortedGuideAreas().filter((area) => area.city === city.id);
  return `<div class="area-grid">${areas.map((area) => { const items = mode === "eat" ? area.foods : area.sights; return `<article class="card area-card" data-city="${city.tone}"><div class="area-card-top"><span class="eyebrow">${esc(area.city)}の町・エリア</span><h3>${esc(area.name)}</h3><p>${esc(mode === "eat" ? area.foodIntro : area.intro)}</p></div><div class="area-card-body"><div class="visit-line"><span>行く予定</span><strong>${esc(area.visit.join("、") || "予定なし")}</strong></div><div><span class="caption">${label}・おすすめ順</span><ol class="preview-ranking">${items.slice(0,3).map((item) => `<li><span>${item.priority}</span>${esc(item.name)}</li>`).join("")}</ol></div><button class="button primary" type="button" data-guide-open-area="${area.id}">${esc(area.name)}を開く</button></div></article>`; }).join("")}</div>`;
}

function renderAreaCards(mode) {
  const cities = guideCities.filter((city) => sortedGuideAreas().some((area) => area.city === city.id));
  if (!cities.length) return '<article class="card card-body"><h3>該当する町がありません</h3><p class="muted">都市または町・エリアの条件を変更してください。</p></article>';
  return `<div class="city-sections">${cities.map((city) => `<section class="city-section city-${city.tone}" aria-labelledby="city-${city.tone}-title"><header class="city-section-header city-photo-header" style="--city-photo:url('${city.hero}')"><div><span class="eyebrow">${esc(city.label)}</span><h2 id="city-${city.tone}-title">${esc(city.id)}</h2><p>${esc(city.intro)}</p><small class="image-disclosure">都市イメージ・AI生成</small></div><aside><span>訪問予定</span><strong>${esc(city.visit)}</strong><small>${guideAreas.filter((area) => area.city === city.id).length}エリア</small></aside></header><div class="city-section-note"><div><strong>${mode === "eat" ? "この都市で食べたいもの" : "この都市を楽しむ鍵"}</strong><p>${esc(mode === "eat" ? city.food : city.learn)}</p></div>${city.articleId ? `<a class="button" href="ux-v1-learn.html?id=${encodeURIComponent(city.articleId)}">詳しく学ぶ</a>` : ""}</div>${areaCardsForCity(city, mode)}</section>`).join("")}</div>`;
}

function renderAreaDetail(area, mode) {
  const items = [...(mode === "eat" ? area.foods : area.sights)].sort((a,b) => state.guideSort === "name" ? a.name.localeCompare(b.name, "ja") : a.priority - b.priority);
  const city = guideCities.find((item) => item.id === area.city);
  const switchLabel = mode === "eat" ? "この町の観光を見る" : "この町の食事を見る";
  const switchMode = mode === "eat" ? "see" : "eat";
  return `<button class="back-link" type="button" data-guide-open-area="all">← ${esc(area.city)}の町・エリア一覧へ</button><article class="area-hero city-${city?.tone || "barcelona"}"><span class="city-parent">都市　<strong>${esc(area.city)}</strong></span><span class="eyebrow">${esc(area.city)} · ${mode === "eat" ? "FOOD GUIDE" : "SIGHT GUIDE"}</span><h2>${esc(area.name)}</h2><p>${esc(mode === "eat" ? area.foodIntro : area.intro)}</p><div class="status-row">${area.visit.map((visit) => pill(`訪問予定 ${visit}`, "info")).join("")}</div></article><div class="section-head compact-head guide-area-heading"><div><span class="eyebrow">RANKING</span><h2>${mode === "eat" ? "この町で食べたいもの" : "この町で見たい場所"}</h2><p>おすすめ優先度の高い順</p></div><button class="button guide-mode-switch" type="button" data-guide-jump="${switchMode}">${switchLabel}</button></div><div class="ranked-list">${items.map((item, index) => { const visual = guideVisuals[item.name] || operationalGuide[item.name] || {}; const shops = recommendedShops(item); return `<article class="card ranked-card">${visual.image ? `<img class="ranked-card-image" src="${esc(visual.image)}" alt="${esc(visual.imageAlt || item.name)}">` : ""}<div class="rank-number"><small>PRIORITY</small><strong>${index + 1}</strong></div><div class="ranked-copy"><div class="status-row">${pill(item.kind)}${pill(item.when, "info")}</div><h3>${esc(item.name)}</h3><p class="muted">${esc(item.note)}</p>${mode === "eat" && shops.length ? `<p class="linked-info"><span>店候補</span>${esc(shops.slice(0,2).join("／"))}</p>` : mode !== "eat" ? `<p class="linked-info"><span>近くで食べたいもの</span>${esc(item.nearby)}</p>` : ""}<div class="action-row"><button class="button primary" type="button" data-open-detail="guide-${mode}-${area.id}-${item.priority}">${mode === "eat" ? "料理と店を見る" : "見どころを開く"}</button></div></div></article>`; }).join("")}</div>`;
}

function renderGuideLanding() {
  return `<section class="guide-entrances" aria-label="ガイドの入口"><button class="guide-entry guide-entry-see" type="button" data-guide-section="see"><span class="entry-icon" aria-hidden="true">◇</span><span class="eyebrow">SIGHTS BY AREA</span><strong>観光する</strong><span>都市を知り、町・エリアごとの観光地を優先順で見る。</span><span class="entry-cta">観光地を探す →</span></button><button class="guide-entry guide-entry-eat" type="button" data-guide-section="eat"><span class="entry-icon" aria-hidden="true">○</span><span class="eyebrow">FOOD BY AREA</span><strong>食べる</strong><span>都市の食文化を知り、町・エリアごとの名物と店を探す。</span><span class="entry-cta">食べ物を探す →</span></button></section>${renderMustEatOverview()}<section class="section"><div class="section-head"><div><span class="eyebrow">CITY GUIDE</span><h2>まず訪れる都市・町を知る</h2></div><p>都市 → 町・エリア → 個別情報</p></div><div class="city-hub-grid">${guideCities.map((city) => `<article class="city-overview city-${city.tone}" style="--city-photo:url('${city.hero}')"><span class="eyebrow">${esc(city.label)}</span><h2>${esc(city.id)}</h2><p>${esc(city.intro)}</p><div class="city-overview-fact"><span>食</span><strong>${esc(city.food)}</strong></div><div class="city-overview-meta"><span>訪問予定 ${esc(city.visit)}</span><span>${guideAreas.filter((area) => area.city === city.id).length}エリア</span></div><small class="image-disclosure">都市イメージ・AI生成</small><div class="action-row"><button class="button primary" type="button" data-guide-city-entry="${city.id}" data-guide-mode="see">${esc(city.id)}の観光</button><button class="button" type="button" data-guide-city-entry="${city.id}" data-guide-mode="eat">${esc(city.id)}の食</button>${city.articleId ? `<a class="button" href="ux-v1-learn.html?id=${encodeURIComponent(city.articleId)}">詳しく学ぶ</a>` : ""}</div></article>`).join("")}</div></section>`;
}

function renderGuideBody() {
  if (state.guideSection === "start") return renderGuideLanding();
  if (state.guideSection === "practical") return `<div class="grid two">${practicalGuides.map((guide) => `<article class="card card-body"><span class="eyebrow">CITY PRACTICAL</span><h3>${esc(guide.title)}</h3><p class="muted">${esc(guide.summary)}</p>${action("要点を見る", { open: `practical-${guide.id}`, primary: true })}</article>`).join("")}</div>`;
  const area = state.guideArea === "all" ? null : guideAreas.find((item) => item.id === state.guideArea);
  return `${guideControls()}${area ? renderAreaDetail(area, state.guideSection) : `<div class="section-head compact-head"><div><span class="eyebrow">BROWSE BY TOWN</span><h2>${state.guideSection === "eat" ? "町から食べ物を探す" : "町から観光地を探す"}</h2></div><p>町の紹介と訪問予定を先に確認</p></div>${renderAreaCards(state.guideSection)}`}`;
}

function renderGuide() {
  screen.innerHTML = `<header class="screen-header"><div><span class="eyebrow">TRAVEL GUIDE</span><h1>ガイド</h1><p>日別ではなく町から探す。町を知り、名物や観光地を優先順で比べ、予定とつなぎます。</p></div><div class="context-meta">${guideCities.length}都市・町／${guideAreas.length}エリア</div></header><nav class="subtabs" aria-label="ガイドの分類">${guideSections.map(([id,label]) => `<button class="subtab" type="button" data-guide-section="${id}" aria-selected="${state.guideSection === id}">${label}</button>`).join("")}</nav>${renderGuideBody()}`;
}

function actualEurForBudgetLine(lineId) {
  return recordsState.expenses.filter((expense) => expense.budgetLineId === lineId).reduce((sum, expense) => sum + toEur(expense.amountOriginal, expense.currency, expense.fxSnapshot), 0);
}

function renderBudgetLine(line, dayId = "trip") {
  const actualEur = actualEurForBudgetLine(line.id);
  const remainingEur = line.amountEur - actualEur;
  const source = line.sourceUrl ? `<a class="budget-source" href="${esc(line.sourceUrl)}" target="_blank" rel="noreferrer">${esc(line.sourceLabel || "根拠を見る")}</a>${line.checkedAt ? `<small>確認 ${esc(line.checkedAt)}</small>` : ""}` : "";
  return `<div class="budget-line" data-budget-line="${esc(line.id)}"><span class="budget-line-copy"><strong>${esc(line.title)}</strong><small>${esc(line.category)} · ${esc(line.basis)} · 残り ${dualMoney(remainingEur)}</small>${source}</span><span class="budget-line-money"><span>予算</span><strong>${yen(line.amountEur * recordsState.fx.EURJPY)}<small>${eur(line.amountEur)}</small></strong><span>実績</span><strong class="${actualEur > line.amountEur ? "is-over" : ""}">${actualEur ? yen(actualEur * recordsState.fx.EURJPY) : "—"}<small>${actualEur ? eur(actualEur) : "—"}</small></strong></span><button class="button" type="button" data-add-budget-actual data-budget-line-id="${esc(line.id)}" data-budget-day-id="${esc(dayId)}" data-budget-title="${esc(line.title)}" data-budget-category="${esc(line.category)}">実績を追加</button></div>`;
}

function renderRecords() {
  const budgetPlan = window.UXFullData?.buildBudgetPlan(recordsState.budget, recordsState.fx, state.scenario) || { days: [], tripWide: [], categories: [], totalEur: recordsState.budget.reduce((sum, row) => sum + toEur(row.amountOriginal, row.currency), 0), missing: [], assumptions: "" };
  const budget = budgetPlan.totalEur;
  const actual = recordsState.expenses.reduce((sum, row) => sum + toEur(row.amountOriginal, row.currency, row.fxSnapshot), 0);
  const transfers = calculateTransfers();
  const pending = transfers.filter((row) => !recordsState.settledTransferIds.includes(row.id));
  const expenseRows = recordsState.expenses.map((expense) => {
    const shares = expenseShares(expense);
    const each = Object.values(shares).length ? Object.values(shares).reduce((a, b) => a + Number(b), 0) / Object.values(shares).length : 0;
    return `<tr><td><strong>${esc(expense.title)}</strong><small>${esc(expense.date)} · ${esc(expense.category)}</small></td><td><strong>${expense.currency === "JPY" ? yen(expense.amountOriginal) : yen(expense.amountOriginal * expense.fxSnapshot.EURJPY)}</strong><small>${expense.currency === "EUR" ? eur(expense.amountOriginal) : eur(toEur(expense.amountOriginal, expense.currency, expense.fxSnapshot))}</small></td><td>${esc(expense.payer)}</td><td>${expense.participants.map((person) => `${person} ${expense.currency === "JPY" ? yen(shares[person]) : `${yen(shares[person] * expense.fxSnapshot.EURJPY)} / ${eur(shares[person])}`}`).join(" / ")}</td></tr>`;
  }).join("") || `<tr><td colspan="4"><strong>支出実績はまだありません</strong><small>旅行中は上の「支出を記録」から追加します。</small></td></tr>`;
  const transferRows = transfers.length ? transfers.map((transfer) => {
    const settled = recordsState.settledTransferIds.includes(transfer.id);
    return `<article class="settlement-row ${settled ? "is-settled" : ""}"><div><span class="eyebrow">${settled ? "SETTLED" : "TO SETTLE"}</span><strong>${esc(transfer.from)} → ${esc(transfer.to)}</strong><small>${settled ? "精算済み" : "未精算"}</small></div><strong>${yen(transfer.amount * recordsState.fx.EURJPY)}<small>${eur(transfer.amount)}</small></strong><button class="button" type="button" data-toggle-settlement="${transfer.id}">${settled ? "未精算へ戻す" : "精算済みにする"}</button></article>`;
  }).join("") : `<article class="card card-body"><p>現在、返金が必要な残高はありません。</p></article>`;
  const changeLabels = { planned: "予定どおり", changed: "予定を変更", extra: "予定外の発見", skipped: "今回は見送り" };
  const memoryCards = recordsState.memories.map((memory) => { const memoryDay = days[memory.dayId]; return `<article class="card memory-card">${memory.photoDataUrl ? `<img src="${memory.photoDataUrl}" alt="${esc(memory.photoAlt || `${memory.place}の旅行写真`)}">` : `<div class="memory-photo" role="img" aria-label="写真なし"></div>`}<div><div class="status-row">${pill(memoryDay?.date || "日付未設定", "info")}${pill(changeLabels[memory.planChange] || "旅の記録", memory.planChange === "changed" || memory.planChange === "skipped" ? "wait" : "info")}${memory.best ? pill("ベスト体験", "info") : ""}</div><h3>${esc(memory.place)}</h3><p>${esc(memory.note)}</p>${memory.changeNote ? `<p class="memory-change"><strong>予定との違い</strong>${esc(memory.changeNote)}</p>` : ""}<small>${esc(memory.food || "食事記録なし")}</small></div></article>`; }).join("");
  const memoriesWithPhotos = recordsState.memories.filter((memory) => memory.photoDataUrl).length;
  const changedMemories = recordsState.memories.filter((memory) => ["changed", "extra", "skipped"].includes(memory.planChange)).length;
  const bestMemories = recordsState.memories.filter((memory) => memory.best).length;
  const reviewedDays = Object.values(days).map((day) => ({ day, memories: recordsState.memories.filter((memory) => memory.dayId === day.id) })).filter((row) => row.memories.length);
  const missingCosts = budgetPlan.missing.length ? `<article class="card missing-costs"><div><span class="eyebrow">NOT INCLUDED YET</span><h2>合計に入っていない大きな費用</h2><p>金額がない項目は0円として隠さず、合計の外に置いています。</p></div><ul>${budgetPlan.missing.map((row) => `<li><strong>${esc(row.title)}</strong><span>${esc(row.note)}</span></li>`).join("")}</ul></article>` : "";
  const maxCategory = Math.max(...budgetPlan.categories.map((row) => row.amountEur), 1);
  const categoryRows = budgetPlan.categories.map((row) => `<div class="budget-category-row"><span>${esc(row.category)}</span><div><i style="width:${Math.max(4, row.amountEur / maxCategory * 100)}%"></i></div><strong>${yen(row.amountEur * recordsState.fx.EURJPY)}<small>${eur(row.amountEur)}</small></strong></div>`).join("");
  const dailyRows = budgetPlan.days.map((day, index) => { const dayActual = recordsState.expenses.filter((expense) => expense.dayId === day.id).reduce((sum, expense) => sum + toEur(expense.amountOriginal, expense.currency, expense.fxSnapshot), 0); return `<details class="daily-budget-card"${index === 0 ? " open" : ""}><summary><span><small>${esc(day.date)}</small><strong>${esc(day.city)}</strong></span><span class="daily-budget-money"><strong>${yen(day.totalEur * recordsState.fx.EURJPY)}</strong><small>${eur(day.totalEur)}</small><small>実績 ${dayActual ? dualMoney(dayActual) : "—"} · 1人予算 ${dualMoney(day.totalEur / 3)}</small></span></summary><div class="daily-budget-lines">${day.lines.map((line) => renderBudgetLine(line, day.id)).join("")}</div></details>`; }).join("");
  const tripWideRows = budgetPlan.tripWide.length ? `<div class="trip-wide-budget"><h3>旅行全体にかかる項目</h3>${budgetPlan.tripWide.map((line) => renderBudgetLine(line)).join("")}</div>` : "";
  const moneyBody = `
    <section class="budget-hero" aria-label="旅行全体の予算"><div><span class="eyebrow">TOTAL TRIP BUDGET</span><h2>国際線・仮ホテルを含む現在の全体予算</h2><div class="hero-dual-money"><strong>${yen(budget * recordsState.fx.EURJPY)}</strong><strong>${eur(budget)}</strong></div><small>3人分 · 国際線は発券済み実額 · ホテルは仮候補</small></div><div class="budget-per-person"><span>1人あたり</span><strong>${yen(budget * recordsState.fx.EURJPY / 3)}</strong><strong>${eur(budget / 3)}</strong></div></section>
    ${missingCosts}
    <section class="money-summary" aria-label="予算と実績"><article><span>全体予算</span><strong>${yen(budget * recordsState.fx.EURJPY)}</strong><strong>${eur(budget)}</strong><small>発券済み国際線を含む</small></article><article><span>実績</span><strong>${yen(actual * recordsState.fx.EURJPY)}</strong><strong>${eur(actual)}</strong></article><article><span>残額</span><strong>${yen((budget - actual) * recordsState.fx.EURJPY)}</strong><strong>${eur(budget - actual)}</strong><small>現在の予算との差</small></article><article><span>未精算</span><strong>${pending.length}件</strong><small>誰が誰へ返すか</small></article></section>
    <article class="card fx-strip"><div><span class="eyebrow">ONE EXCHANGE RATE</span><strong>全画面共通：€1 = ¥${esc(recordsState.fx.EURJPY)}</strong><small>${esc(recordsState.fx.checkedAt)} · ${esc(recordsState.fx.source)}</small></div><form class="fx-rate-form" data-fx-form><label class="field inline-field"><span>1ユーロの円レート</span><input name="EURJPY" type="number" min="1" step="0.01" value="${esc(recordsState.fx.EURJPY)}" required></label><button class="button primary" type="submit">全体へ反映</button></form><div class="fx-converter"><label class="field inline-field"><span>EURを試算</span><input type="number" min="0" step="0.01" value="90" data-fx-eur></label><output data-fx-output>${yen(90 * recordsState.fx.EURJPY)}</output></div></article>
    <section class="section"><div class="section-head"><div><span class="eyebrow">BY CATEGORY</span><h2>何にいくらかかるか</h2></div><p>3人分・現在の計画値</p></div><article class="card budget-breakdown">${categoryRows}</article></section>
    <section class="section"><div class="section-head"><div><span class="eyebrow">12-DAY DETAIL</span><h2>日ごとの予算と実績</h2></div><p>各行の「実績を追加」から支払額を積む</p></div><article class="card card-body info-card"><strong>計画値の前提</strong><p>${esc(budgetPlan.assumptions)}</p></article><div class="daily-budget-list">${dailyRows}</div>${tripWideRows}</section>
    <section class="section"><div class="section-head"><div><span class="eyebrow">ADD MONEY RECORD</span><h2>追加する</h2></div><p>予算枠にない支出や雑費はこちら</p></div><div class="record-actions money-actions"><button class="record-action" type="button" data-open-detail="expense"><span>¥</span><strong>支出を記録</strong><small>日付・支払者・分担</small></button><button class="record-action" type="button" data-open-detail="misc-budget"><span>＋</span><strong>雑費・予算を追加</strong><small>旅行全体または特定日</small></button></div></section>
    <section class="section"><div class="section-head"><div><span class="eyebrow">ACTUAL EXPENSES</span><h2>支出実績</h2></div><p>一人あたりと換算レートを保存</p></div><div class="expense-table-wrap"><table class="expense-table"><thead><tr><th>内容</th><th>金額</th><th>支払者</th><th>一人あたり</th></tr></thead><tbody>${expenseRows}</tbody></table></div><div class="action-row"><button class="button" type="button" data-export-records>JSONを書き出す</button><button class="button" type="button" data-export-csv>支出CSV</button><button class="button" type="button" data-import-records>JSONを読み込む</button><input type="file" accept="application/json" data-import-file hidden></div></section>
    <section class="section"><div class="section-head"><div><span class="eyebrow">WHO OWES WHOM</span><h2>誰が誰へ返すか</h2></div><p>A / B / Cの支払実績から計算</p></div><div class="stack">${transferRows}</div></section>`;
  const memoriesBody = `<section class="memory-entry card"><div><span class="eyebrow">TRIP MEMORIES</span><h2>予定と実際、写真と言葉を残す</h2><p>旅行日ごとに、行った場所、食べたもの、予定との違い、写真と一言を記録します。</p></div><button class="button primary" type="button" data-open-detail="experience">思い出を追加</button></section><section class="trip-review-summary" aria-label="旅の記録まとめ"><article><span>思い出</span><strong>${recordsState.memories.length}</strong><small>件</small></article><article><span>写真</span><strong>${memoriesWithPhotos}</strong><small>枚</small></article><article><span>予定変更・発見</span><strong>${changedMemories}</strong><small>件</small></article><article><span>ベスト体験</span><strong>${bestMemories}</strong><small>件</small></article></section>${reviewedDays.length ? `<section class="section"><div class="section-head"><div><span class="eyebrow">TRIP REVIEW</span><h2>日ごとの振り返り</h2></div><p>計画と実際を後からたどる</p></div><div class="reviewed-days">${reviewedDays.map(({ day, memories }) => `<article class="card"><span class="eyebrow">${esc(day.date)} · ${esc(day.city)}</span><strong>${memories.length}件</strong><p>${esc(memories.map((memory) => memory.place).join("・"))}</p></article>`).join("")}</div></section>` : ""}<section class="section"><div class="section-head"><div><span class="eyebrow">MEMORY TIMELINE</span><h2>日付で並ぶ思い出</h2></div><p>各記録に旅行日と予定との差を保存</p></div><div class="memory-grid">${memoryCards || `<article class="card memory-placeholder"><div class="memory-photo" role="img" aria-label="旅行写真を追加する場所"></div><div><h3>まだ思い出はありません</h3><p class="muted">「思い出を追加」から日付、場所、食べたもの、予定との違い、写真と一言を残せます。</p></div></article>`}</div></section>`;
  screen.innerHTML = `<header class="screen-header records-header"><div><span class="eyebrow">TRIP RECORDS</span><h1>記録</h1><p>お金と旅の思い出を、使う目的ごとに分けて残します。</p></div><div class="context-meta">3人分・全12日<small>${state.recordsSection === "money" ? "基準通貨 EUR" : `${recordsState.memories.length}件の思い出`}</small></div></header><nav class="subtabs records-subtabs" aria-label="記録の分類"><button class="subtab" type="button" data-records-section="money" aria-selected="${state.recordsSection === "money"}">お金</button><button class="subtab" type="button" data-records-section="memories" aria-selected="${state.recordsSection === "memories"}">思い出</button></nav>${state.recordsSection === "money" ? moneyBody : memoriesBody}`;
}

const renderers = { home: renderHome, schedule: renderSchedule, plan: renderPlan, guide: renderGuide, records: renderRecords };

function render() {
  renderNav();
  renderDaySwitcher();
  renderers[state.tab]();
  bindCommon(document.querySelector("[data-primary-nav]"));
  bindCommon(document.querySelector("[data-mobile-nav]"));
  bindScreen();
  history.replaceState(null, "", `?day=${state.day}&tab=${state.tab}`);
}

function recordDayOptions(selected = state.day, includeTrip = false) {
  return `${includeTrip ? `<option value="trip"${selected === "trip" ? " selected" : ""}>旅行全体</option>` : ""}${Object.values(days).map((day) => `<option value="${day.id}"${selected === day.id ? " selected" : ""}>${esc(day.date)} · ${esc(day.city)}</option>`).join("")}`;
}

function recordCategoryOptions(selected = "食事") {
  return ["食事", "交通", "観光", "宿泊", "雑費", "その他"].map((category) => `<option${category === selected ? " selected" : ""}>${category}</option>`).join("");
}

function buildSearchIndex() {
  const itinerary = Object.values(days).flatMap((day) => day.timeline.filter((item) => !item.decision).map((item) => ({ label: item.title, meta: `${day.date} · ${day.city} · ${item.time}`, dayId: day.id, tab: "schedule", searchText: `${item.title} ${item.note} ${(item.meal?.dishes || []).join(" ")} ${day.city}` })));
  const guide = guideAreas.flatMap((area) => [
    ...area.foods.map((item) => ({ label: item.name, meta: `${area.city} · ${area.name} · 食`, dayId: state.day, tab: "guide", guideMode: "eat", areaId: area.id, searchText: `${item.name} ${item.note} ${area.city} ${area.name}` })),
    ...area.sights.map((item) => ({ label: item.name, meta: `${area.city} · ${area.name} · 観光`, dayId: state.day, tab: "guide", guideMode: "see", areaId: area.id, searchText: `${item.name} ${item.note} ${area.city} ${area.name}` }))
  ]);
  return [...itinerary, ...guide];
}

function searchResultCards(entries) {
  return entries.length ? entries.slice(0, 24).map((entry) => `<button class="search-result card" type="button" data-search-day="${esc(entry.dayId)}" data-search-tab="${esc(entry.tab)}"${entry.guideMode ? ` data-search-guide-mode="${esc(entry.guideMode)}" data-search-area="${esc(entry.areaId)}"` : ""}><strong>${esc(entry.label)}</strong><small>${esc(entry.meta)}</small></button>`).join("") : `<article class="card card-body"><h3>該当する予定・ガイドがありません</h3><p class="muted">店名、料理名、観光地、駅名を変えて検索してください。</p></article>`;
}

function detailContent(key, context = {}) {
  const day = days[state.day];
  if (key.startsWith("meal-")) {
    const meal = day.meals[Number(key.split("-")[1])] || day.meals[0];
    const visual = meal.image ? `<figure class="guide-detail-image meal-detail-image"><img src="${esc(meal.image)}" alt="${esc(meal.imageAlt || meal.primary)}"><figcaption>${esc(meal.imageKind || "料理・街のイメージ")}</figcaption></figure>` : "";
    const mapLink = `<a class="button" href="${esc(mapsUrl(`${meal.primary} ${meal.area}`))}" target="_blank" rel="noreferrer">地図で確認</a>`;
    return {
      eyebrow: "食事の詳細", title: `${meal.period} · ${meal.primary}`,
      body: `${visual}<div class="status-row">${pill(meal.area, "info")}${pill(meal.booking, /予約推奨|予約|確認/.test(meal.booking) ? "wait" : "info")}</div><p class="guide-detail-lead">${esc(meal.experience)}</p><article class="card card-body info-card"><h3>この食事の役割</h3><p>${esc(meal.purpose)}</p></article><section class="meal-order-card"><span class="eyebrow">ORDER FOR THREE</span><h3>3人で頼むなら</h3><p>${esc(meal.orderForThree)}</p></section><dl class="fact-list"><div><dt>時間</dt><dd>${esc(meal.window)}</dd></div><div><dt>場所</dt><dd>${esc(meal.area)}</dd></div><div><dt>おすすめ料理</dt><dd>${esc(meal.dishes.join("、"))}</dd></div><div><dt>3人分の予算</dt><dd>${mealBudgetRange(meal)}</dd></div><div><dt>1人分の目安</dt><dd>${mealBudgetRange({ budgetMinEur: meal.budgetMinEur / 3, budgetMaxEur: meal.budgetMaxEur / 3 })}</dd></div><div><dt>予算の根拠</dt><dd>${esc(meal.budgetBasis || "店とmenuを決めた後に更新します。")}</dd></div><div><dt>予約</dt><dd>${esc(meal.booking)}</dd></div><div><dt>営業時間・利用条件</dt><dd>${esc(meal.operation)}</dd></div><div><dt>満席・休業時</dt><dd>${esc(meal.alternatives.join("、"))}</dd></div></dl>${meal.sourceUrl ? `<section class="operational-facts"><h3>menu・予算の根拠</h3><p><a class="source-link" href="${esc(meal.sourceUrl)}" target="_blank" rel="noreferrer">${esc(meal.sourceLabel || "公式情報")}</a><small>${esc(meal.sourceScope || "価格・料理構成を確認")} · 確認 ${esc(meal.checkedAt || "2026-08-16")}</small></p></section>` : `<article class="card card-body warning-card"><h3>店またはmenuは未確定</h3><p>${esc(meal.sourceScope || "店が決まった後、実際のmenu価格で予算を更新します。")}</p></article>`}<div class="action-row">${mapLink}<button class="button primary" type="button" data-tab-target="guide">町の食ガイドを見る</button></div>`
    };
  }
  const scheduledItem = day.timeline.find((item) => item.detail === key);
  if (scheduledItem && key.startsWith("canonical-day-")) return { eyebrow: scheduledItem.kind, title: scheduledItem.title, body: timelineDetail(scheduledItem) };
  const canonical = window.UXFullData?.detail(key);
  if (canonical) {
    const facts = canonical.facts.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join("");
    const links = canonical.links.map((link) => `<a class="button ${link.label === "詳しく学ぶ" ? "primary" : ""}" href="${esc(link.href)}"${/^https?:/.test(link.href) ? ' target="_blank" rel="noreferrer"' : ""}>${esc(link.label)}</a>`).join("");
    const sources = canonical.sources?.length ? `<section class="operational-facts"><h3>この予定で確認した情報</h3>${canonical.sources.map((source) => `<p>${source.href ? `<a class="source-link" href="${esc(source.href)}" target="_blank" rel="noreferrer">${esc(source.label)}</a>` : `<strong>${esc(source.label)}</strong>`}<small>${source.scope ? `${esc(source.scope)} · ` : ""}確認日: ${esc(source.checkedAt)}</small></p>`).join("")}</section>` : canonical.showSourceWarning ? `<article class="card card-body warning-card"><h3>旅行前に確認すること</h3><p>この予定の営業時間または予約条件を公式サイトで確認します。</p></article>` : "";
    const nextStep = scheduledItem?.routeAfter ? `<section class="detail-layer"><h3>次の場所へ</h3><p>${esc(scheduledItem.routeAfter)}</p></section>` : "";
    return { eyebrow: canonical.eyebrow, title: canonical.title, body: `<div class="status-row">${pill(canonical.status, toneForStatus(canonical.status))}</div><p class="guide-detail-lead">${esc(canonical.note)}</p>${facts ? `<dl class="fact-list">${facts}</dl>` : ""}${nextStep}<div class="action-row">${links}</div>${sources}` };
  }
  if (scheduledItem) return { eyebrow: scheduledItem.kind, title: scheduledItem.title, body: timelineDetail(scheduledItem) };
  if (key === "change") {
    const scenarios = [["30分遅れ", "次の予定の開始時刻を確認し、休憩または街歩きを短縮します。予約時刻は動かしません。"], ["1時間遅れ", "優先度の低い観光を1件外し、食事と予約済み予定、帰着時刻を守ります。"], ["雨", "屋外の滞在を短縮し、予約済み屋内施設と近い食事を優先します。"], ["疲れた", "移動回数を減らし、ホテル休憩または最寄りの食事へ切り替えます。"], ["早く終わった", "次の予定を前倒しせず、近いカフェや短い街歩きで時間を調整します。"], ["店が満席・休業", "食事詳細の代替店へ移り、20分以上待たない方針を優先します。"]];
    const keep = state.day === "d1230" || state.day === "d0103" ? "長距離列車と発車90分前の駅到着" : state.day === "d1231" ? "18:00の公式確認、20:30の撤退判断、安全な帰路" : "時間指定の予約と、その日のホテルへ戻る時間";
    return { eyebrow: "予定を変える時", title: "遅れ・雨・疲労・満席への対応", body: `<div class="grid two">${scenarios.map(([title, note]) => `<article class="card card-body"><h3>${title}</h3><p>${note}</p></article>`).join("")}</div><article class="card card-body info-card" style="margin-top:16px"><h3>この日に守ること</h3><p>${keep}</p></article>` };
  }
  if (key === "overview") return { eyebrow: "12 DAYS", title: "12日間の予定", body: `${Object.values(days).map((d) => `<article class="card card-body" style="margin-bottom:10px"><span class="eyebrow">${d.date} · ${d.city}</span><h3>${d.title}</h3><p class="muted">${esc(d.type)}</p></article>`).join("")}` };
  if (key === "search") { const index = buildSearchIndex(); return { eyebrow: "SEARCH", title: "予定・店・料理・観光地を検索", body: `<label class="field"><span>検索</span><input type="search" placeholder="例：Sagrada、churros、Atocha" data-site-search autofocus></label><div class="search-results" data-search-results>${searchResultCards(index.filter((entry) => entry.dayId === state.day).slice(0, 8))}</div>` }; }
  if (key === "sos") {
    const stays = window.UXFullData?.hotelStays || [];
    const stay = ["d1226","d1227","d1228","d1229"].includes(state.day) ? stays[0] : ["d1230","d1231","d0101","d0102"].includes(state.day) ? stays[1] : ["d0103","d0104"].includes(state.day) ? stays[2] : null;
    const hotel = stay ? `<article class="card card-body"><h3>今夜の宿泊先（仮候補）</h3><strong>${esc(stay.recommendation)}</strong><p>${esc(stay.address)}</p><div class="action-row"><a class="button" href="${esc(stay.mapUrl)}" target="_blank" rel="noreferrer">地図</a>${action("宿泊の詳細", { tab: "plan" })}</div></article>` : `<article class="card card-body"><h3>今日は機内・移動中</h3><p>航空会社の予約内容にある便名、ターミナル、搭乗口を確認します。</p></article>`;
    return { eyebrow: "EMERGENCY", title: "緊急時に使う", body: `<div class="stack"><article class="card card-body warning-card"><h3>警察・救急・消防</h3><span class="big-number">112</span><a class="button primary" href="tel:112">112へ電話</a><p class="muted">EU域内で固定電話・携帯電話から無料で利用できる共通緊急番号です。</p></article>${hotel}<article class="card card-body"><h3>日本の在外公館</h3><p>Madrid：在スペイン日本国大使館<br><a href="tel:+34915907600"><strong>+34 91 590 7600</strong></a></p><p>Barcelona：在バルセロナ日本国総領事館<br><a href="tel:+34932803433"><strong>+34 93 280 3433</strong></a></p><div class="action-row"><a class="button" href="https://www.es.emb-japan.go.jp/japones/consular/consular_nenkinhoka.html" target="_blank" rel="noreferrer">大使館公式</a><a class="button" href="https://www.barcelona.es.emb-japan.go.jp/itpr_ja/11_000001_00196.html" target="_blank" rel="noreferrer">総領事館公式</a></div><small>連絡先確認：2026-08-14</small></article></div>` };
  }
  if (key === "budget" || key === "misc-budget") { const misc = key === "misc-budget"; return { eyebrow: "TRIP BUDGET", title: misc ? "雑費・予算を追加" : "予算を追加", body: `<form data-budget-form><label class="field"><span>旅行全体／日付</span><select name="dayId">${recordDayOptions("trip", true)}</select></label><label class="field"><span>項目</span><input name="title" required value="${misc ? "雑費・予備費" : ""}" placeholder="お土産、洗濯、追加交通"></label><div class="form-grid"><label class="field"><span>カテゴリ</span><select name="category">${["食事","交通","観光","宿泊","雑費","その他"].map((category) => `<option${misc && category === "雑費" ? " selected" : ""}>${category}</option>`).join("")}</select></label><label class="field"><span>状態</span><select name="status"><option value="estimate">概算</option><option value="confirmed">確定額</option></select></label></div><div class="form-grid"><label class="field"><span>3人分の金額</span><input name="amount" type="number" min="0" step="0.01" required></label><label class="field"><span>通貨</span><select name="currency"><option>EUR</option><option>JPY</option></select></label></div><p class="muted">全体予算へ加算し、特定日を選んだ場合はその日の内訳にも表示します。</p><button class="button primary" type="submit">予算へ追加</button></form>` }; }
  if (key === "expense") { const selectedDay = context.dayId && context.dayId !== "trip" ? context.dayId : state.day; const linkedNote = context.budgetLineId ? `<p class="info-note">「${esc(context.title)}」の予算枠へ実績を追加します。</p>` : ""; return { eyebrow: "支出の入力", title: context.budgetLineId ? `${context.title}の実績` : "支出を記録", body: `${linkedNote}<form data-expense-form><input type="hidden" name="budgetLineId" value="${esc(context.budgetLineId || "")}"><label class="field"><span>旅行日</span><select name="dayId">${recordDayOptions(selectedDay)}</select></label><div class="form-grid"><label class="field"><span>金額</span><input name="amount" type="number" min="0.01" step="0.01" required placeholder="90"></label><label class="field"><span>通貨</span><select name="currency"><option>EUR</option><option>JPY</option></select></label></div><label class="field"><span>項目</span><input name="title" required value="${esc(context.title || "")}" placeholder="夕食、地下鉄、チケット"></label><div class="form-grid"><label class="field"><span>カテゴリ</span><select name="category">${recordCategoryOptions(context.category || "食事")}</select></label><label class="field"><span>支払者</span><select name="payer"><option>A</option><option>B</option><option>C</option></select></label></div><fieldset class="participant-field"><legend>参加者</legend>${["A", "B", "C"].map((person) => `<label><input type="checkbox" name="participant" value="${person}" checked> ${person}</label>`).join("")}</fieldset><label class="field"><span>分け方</span><select name="splitMode" data-split-mode><option value="equal">均等割</option><option value="custom">個別金額</option></select></label><div class="custom-shares" data-custom-shares hidden>${["A", "B", "C"].map((person) => `<label class="field"><span>${person}の負担額</span><input name="share${person}" type="number" min="0" step="0.01" placeholder="0"></label>`).join("")}</div><p class="muted">換算レート €1=¥${esc(recordsState.fx.EURJPY)} と確認日を、その支出を記録した時点の値として保存します。</p><button class="button primary" type="submit">実績を保存</button></form>` }; }
  if (key === "experience") return { eyebrow: "TRIP MEMORY", title: "思い出を追加", body: `<form data-experience-form><label class="field"><span>旅行日</span><select name="dayId">${recordDayOptions()}</select></label><label class="field"><span>場所</span><input name="place" required placeholder="Cordoba旧市街、Tarragona円形闘技場"></label><label class="field"><span>食べたもの</span><input name="food" placeholder="料理・店"></label><label class="field"><span>一言感想</span><textarea name="note" required placeholder="一番印象に残ったこと"></textarea></label><label class="field"><span>予定と比べて</span><select name="planChange"><option value="planned">予定どおり</option><option value="changed">予定を変更した</option><option value="extra">予定外の発見があった</option><option value="skipped">今回は見送った</option></select></label><label class="field"><span>予定との違い・変更した理由</span><textarea name="changeNote" placeholder="雨でMontserratをやめてBarcelona市内へ。そこで偶然見つけた店が良かった、など"></textarea></label><label class="field"><span>写真（1.5MBまで・この端末に保存）</span><input name="photo" type="file" accept="image/*"></label><label class="field"><span>写真の説明</span><input name="photoAlt" placeholder="例：夕方のステンドグラス"></label><label><input name="best" type="checkbox"> ベスト体験にする</label><div class="action-row"><button class="button primary" type="submit">保存する</button></div></form>` };
  if (key.startsWith("practical-")) {
    const guide = practicalGuides.find((item) => item.id === key.slice("practical-".length));
    if (guide) return { eyebrow: "街・実用", title: guide.title, body: `<p class="guide-detail-lead">${esc(guide.summary)}</p><ol class="detail-list practical-list">${guide.points.map((point) => `<li>${esc(point)}</li>`).join("")}</ol>${guide.sourceUrl ? `<section class="operational-facts"><h3>公式情報</h3><a class="source-link" href="${esc(guide.sourceUrl)}" target="_blank" rel="noreferrer">${esc(guide.sourceLabel)}</a><small>確認日: ${esc(guide.checkedAt)}</small></section>` : ""}` };
  }
  if (key.startsWith("guide-")) {
    const match = key.match(/^guide-(eat|see)-(.+)-(\d+)$/);
    if (match) {
      const [, mode, areaId, priority] = match;
      const area = guideAreas.find((item) => item.id === areaId);
      const item = area?.[mode === "eat" ? "foods" : "sights"].find((entry) => entry.priority === Number(priority));
      if (area && item) {
        const detail = { ...(operationalGuide[item.name] || {}), ...(guideVisuals[item.name] || {}) };
        const visual = detail.image ? `<figure class="guide-detail-image"><img src="${detail.image}" alt="${esc(detail.imageAlt)}"><figcaption>${esc(detail.imageKind)}</figcaption></figure>` : "";
        const learn = (detail.learn || [item.note]).map((point) => `<li>${esc(point)}</li>`).join("");
        const onsiteFallback = mode === "eat" ? ["3人で分けられる量から注文し、足りなければ追加する", "第一候補に入れなければ、同じ料理を食べられる代替店へ切り替える"] : ["入口と退出時刻を先に確認する", "見たい場所を優先し、次の予定へ出る時刻を守る"];
        const onsite = (detail.onsite || onsiteFallback).map((point) => `<li>${esc(point)}</li>`).join("");
        const facts = (detail.facts || []).map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join("");
        const source = detail.sourceUrl ? `<a class="source-link" href="${detail.sourceUrl}" target="_blank" rel="noreferrer">${esc(detail.sourceLabel)}を開く</a>` : "";
        const operationalFacts = facts || source ? `<section class="operational-facts">${detail.operationStatus ? `<div class="status-row">${pill(detail.operationStatus, detail.checkedAt === "未確認" ? "wait" : "info")}</div>` : ""}${facts ? `<dl class="fact-list">${facts}</dl>` : ""}${source ? `<p class="caption">${detail.checkedAt ? `確認日: ${esc(detail.checkedAt)} · ` : ""}${source}</p>` : ""}</section>` : "";
        if (mode === "eat") { const shops = recommendedShops(item); return { eyebrow: `${area.city} · ${area.name}`, title: item.name, body: `${visual}<div class="status-row">${pill(item.kind)}${pill(item.when, "info")}</div><p class="guide-detail-lead">${esc(item.note)}</p><section class="detail-layer"><span class="eyebrow">LEARN BEFORE</span><h3>食べる前に知る</h3><ul class="detail-list">${learn}</ul></section><section class="detail-layer"><span class="eyebrow">USE ON SITE</span><h3>現地での選び方</h3><ol class="detail-list">${onsite}</ol></section>${shops.length ? `<h3>おすすめの店</h3><div class="stack">${shops.map((shop, index) => `<article class="card card-body"><span class="eyebrow">${index === 0 ? "第一候補" : "代替候補"}</span><h3>${esc(shop)}</h3><p class="muted">${esc(shopTeaser(shop, item, index))}</p><a class="button" href="${esc(mapsUrl(`${shop} ${area.city}`))}" target="_blank" rel="noreferrer">地図で見る</a></article>`).join("")}</div>` : ""}${operationalFacts}<div class="action-row"><a class="button primary" href="${esc(mapsUrl(`${item.name} ${area.name} ${area.city}`))}" target="_blank" rel="noreferrer">この近くで探す</a></div>` }; }
        const learningArticleId = detail.articleId || item.articleId;
        const deepLearn = learningArticleId ? `<div class="deep-learn-prompt"><p>歴史・構造・背景まで知ると、現地で見るポイントが分かります。</p><a class="button primary deep-learn-link" href="ux-v1-learn.html?id=${encodeURIComponent(learningArticleId)}">詳しく学ぶ</a></div>` : "";
        return { eyebrow: `${area.city} · ${area.name}`, title: item.name, body: `${visual}<div class="status-row">${pill(item.kind)}${pill(item.when, "info")}</div><p class="guide-detail-lead">${esc(item.note)}</p><section class="detail-layer"><span class="eyebrow">LEARN BEFORE</span><h3>行く前に学ぶ</h3>${deepLearn}<ul class="detail-list">${learn}</ul></section><section class="detail-layer"><span class="eyebrow">USE ON SITE</span><h3>現地での確認ポイント</h3><ol class="detail-list">${onsite}</ol></section>${operationalFacts}<article class="card card-body info-card"><h3>近くで食べたいもの</h3><p>${esc(item.nearby)}</p></article>` };
      }
    }
  }
  if (key === "hotel-candidate" || key.startsWith("hotel-candidate-")) {
    const stays = window.UXFullData?.hotelStays || [];
    const stayId = key === "hotel-candidate" ? stays[0]?.id : key.slice("hotel-candidate-".length);
    const stay = stays.find((item) => item.id === stayId) || stays[0];
    if (!stay) return { eyebrow: "HOTEL DECISION", title: "ホテル仮候補", body: `<p>ホテル比較データを読み込めませんでした。</p>` };
    const alternativePrice = Number.isFinite(stay.alternative.totalEur) ? dualMoney(stay.alternative.totalEur) : "対象日の3名料金を再確認";
    return { eyebrow: `${stay.stay}のホテル`, title: `${stay.recommendation}（仮候補）`, body: `<div class="status-row">${pill(stay.status, "wait")}${pill(`${stay.nights}泊・大人3名`, "info")}</div><p class="guide-detail-lead">${esc(stay.reason)}</p><dl class="fact-list"><div><dt>日程</dt><dd>${esc(stay.dates)}</dd></div><div><dt>住所</dt><dd>${esc(stay.address)}</dd></div><div><dt>部屋</dt><dd>${esc(stay.room)}</dd></div><div><dt>ベッド</dt><dd>${esc(stay.layout)}</dd></div><div><dt>広さ</dt><dd>${esc(stay.size)}</dd></div><div><dt>仮総額</dt><dd>${dualMoney(stay.totalEur)}／3名（1人 ${dualMoney(stay.perPersonEur)}）</dd></div><div><dt>取消</dt><dd>${esc(stay.cancellation)}</dd></div><div><dt>支払</dt><dd>${esc(stay.payment)}</dd></div></dl><article class="card card-body warning-card"><h3>明日確認すること</h3><p>${esc(stay.caution)}</p><p>料金・在庫・税・取消条件は変動するため、予約直前に同じ3名条件で再取得します。</p></article><h3>予備候補との比較</h3><table class="comparison"><tr><th>比較</th><td>仮第一候補</td><td>予備候補</td></tr><tr><th>ホテル</th><td>${esc(stay.recommendation)}</td><td>${esc(stay.alternative.name)}</td></tr><tr><th>3名総額</th><td>${dualMoney(stay.totalEur)}</td><td>${alternativePrice}</td></tr><tr><th>判断材料</th><td>${esc(stay.reason)}</td><td>${esc(stay.alternative.note)}</td></tr></table><div class="action-row"><a class="button primary" href="${esc(stay.officialUrl)}" target="_blank" rel="noreferrer">公式サイト</a><a class="button" href="${esc(stay.bookingUrl)}" target="_blank" rel="noreferrer">3名条件を再検索</a><a class="button" href="${esc(stay.mapUrl)}" target="_blank" rel="noreferrer">地図</a></div><section class="operational-facts"><h3>確認日</h3><p>料金・取消・支払：${esc(stay.priceCheckedAt)}に3名・対象日で検索</p><p>公式の定員・立地：${esc(stay.factsCheckedAt)}確認</p></section>` };
  }
  return { eyebrow: "予定の詳細", title: "追加情報はありません", body: `<p>この項目は旅程カードに必要な情報をまとめています。シートを閉じて前後の予定を確認してください。</p>` };
}

function openSheet(key, context = {}) {
  lastFocus = document.activeElement;
  const data = detailContent(key, context);
  document.querySelector("[data-sheet-eyebrow]").textContent = data.eyebrow;
  document.querySelector("[data-sheet-title]").textContent = data.title;
  document.querySelector("[data-sheet-body]").innerHTML = data.body;
  sheet.hidden = false;
  scrim.hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector("[data-close-sheet]").focus();
  bindSheet();
}

function closeSheet() {
  sheet.hidden = true;
  scrim.hidden = true;
  document.body.style.overflow = "";
  lastFocus?.focus();
}

function toast(message) {
  const el = document.querySelector("[data-toast]");
  el.textContent = message;
  el.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { el.hidden = true; }, 2400);
}

function switchTab(tab) {
  if (!renderers[tab]) return;
  closeSheet();
  state.tab = tab;
  window.scrollTo({ top: 0 });
  render();
  if (tab === "schedule") requestAnimationFrame(() => scrollToItineraryDay(state.day, false));
}

function bindCommon(root = document) {
  root.querySelectorAll("[data-tab-target]").forEach((button) => button.addEventListener("click", () => { if (days[button.dataset.contextDay]) state.day = button.dataset.contextDay; switchTab(button.dataset.tabTarget); }));
  root.querySelectorAll("[data-open-detail]").forEach((button) => button.addEventListener("click", () => { if (days[button.dataset.detailDay]) state.day = button.dataset.detailDay; openSheet(button.dataset.openDetail); }));
  root.querySelectorAll("[data-guide-jump]").forEach((button) => button.addEventListener("click", () => { closeSheet(); state.tab = "guide"; state.guideSection = button.dataset.guideJump; render(); }));
}

function markItineraryDay(dayId) {
  if (!days[dayId]) return;
  state.day = dayId;
  screen.querySelectorAll("[data-itinerary-day-card]").forEach((card) => card.classList.toggle("is-active", card.dataset.itineraryDayCard === dayId));
  screen.querySelectorAll("[data-jump-day]").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.jumpDay === dayId)));
  history.replaceState(null, "", `?day=${state.day}&tab=${state.tab}`);
}

function scrollToItineraryDay(dayId, smooth = false) {
  const target = document.querySelector(`#itinerary-day-${dayId}`);
  if (!target) return;
  itineraryScrollLock = true;
  clearTimeout(itineraryScrollTimer);
  markItineraryDay(dayId);
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  if (!smooth) document.documentElement.style.scrollBehavior = "auto";
  target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  if (!smooth) requestAnimationFrame(() => { document.documentElement.style.scrollBehavior = previousScrollBehavior; });
  itineraryScrollTimer = setTimeout(() => { itineraryScrollLock = false; markItineraryDay(dayId); }, smooth ? 850 : 0);
}

function observeItineraryDays() {
  itineraryObserver?.disconnect();
  if (state.tab !== "schedule" || !("IntersectionObserver" in window)) return;
  itineraryObserver = new IntersectionObserver((entries) => {
    if (itineraryScrollLock) return;
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (visible) markItineraryDay(visible.target.dataset.itineraryDayCard);
  }, { rootMargin: "-170px 0px -62% 0px", threshold: 0 });
  screen.querySelectorAll("[data-itinerary-day-card]").forEach((card) => itineraryObserver.observe(card));
}

function bindScreen() {
  bindCommon(screen);
  screen.querySelectorAll("[data-home-target]").forEach((button) => button.addEventListener("click", () => {
    state.tab = button.dataset.homeTarget;
    if (state.tab === "plan" && button.dataset.homePlanSection) state.planSection = button.dataset.homePlanSection;
    render();
  }));
  screen.querySelectorAll("[data-jump-day]").forEach((button) => button.addEventListener("click", () => scrollToItineraryDay(button.dataset.jumpDay)));
  screen.querySelectorAll("[data-toggle-itinerary-day]").forEach((button) => button.addEventListener("click", () => {
    const dayId = button.dataset.toggleItineraryDay;
    const body = screen.querySelector(`#itinerary-body-${dayId}`);
    const collapse = !body.hidden;
    body.hidden = collapse;
    button.setAttribute("aria-expanded", String(!collapse));
    button.textContent = collapse ? "この日を開く" : "この日をたたむ";
    if (collapse) state.collapsedDays.add(dayId); else state.collapsedDays.delete(dayId);
  }));
  screen.querySelectorAll("[data-add-budget-actual]").forEach((button) => button.addEventListener("click", () => openSheet("expense", { budgetLineId: button.dataset.budgetLineId, dayId: button.dataset.budgetDayId, title: button.dataset.budgetTitle, category: button.dataset.budgetCategory })));
  screen.querySelectorAll("[data-records-section]").forEach((button) => button.addEventListener("click", () => { state.recordsSection = button.dataset.recordsSection; render(); }));
  screen.querySelectorAll("[data-scenario]").forEach((button) => button.addEventListener("click", () => {
    const scenario = button.dataset.scenario;
    if (!window.UXFullData?.flexScenarios?.[scenario]) return;
    state.scenario = scenario;
    saveScenario(scenario);
    days = window.UXFullData.buildDays(representativeDays, scenario);
    refreshScenarioGuide();
    render();
  }));
  document.querySelectorAll("[data-day]").forEach((button) => button.addEventListener("click", () => { state.day = button.dataset.day; render(); }));
  screen.querySelectorAll("[data-plan-section]").forEach((button) => button.addEventListener("click", () => { state.planSection = button.dataset.planSection; renderPlan(); bindScreen(); }));
  screen.querySelectorAll("[data-guide-section]").forEach((button) => button.addEventListener("click", () => { state.guideSection = button.dataset.guideSection; if (state.guideSection === "start") state.guideArea = "all"; render(); }));
  screen.querySelectorAll("[data-guide-open-area]").forEach((button) => button.addEventListener("click", () => { state.guideArea = button.dataset.guideOpenArea; if (state.guideArea !== "all") state.guideCity = guideAreas.find((area) => area.id === state.guideArea)?.city || "all"; render(); }));
  screen.querySelectorAll("[data-guide-city-entry]").forEach((button) => button.addEventListener("click", () => { state.guideSection = button.dataset.guideMode; state.guideCity = button.dataset.guideCityEntry; state.guideArea = "all"; render(); }));
  screen.querySelectorAll("[data-guide-city]").forEach((select) => select.addEventListener("change", () => { state.guideCity = select.value; state.guideArea = "all"; render(); }));
  screen.querySelectorAll("[data-guide-area-select]").forEach((select) => select.addEventListener("change", () => { state.guideArea = select.value; if (state.guideArea !== "all") state.guideCity = guideAreas.find((area) => area.id === state.guideArea)?.city || state.guideCity; render(); }));
  screen.querySelectorAll("[data-guide-sort]").forEach((select) => select.addEventListener("change", () => { state.guideSort = select.value; render(); }));
  screen.querySelectorAll("[data-guide-nearby]").forEach((button) => button.addEventListener("click", () => {
    if (!navigator.geolocation) return toast("位置情報を利用できません。町・エリアを手動で選んでください。");
    button.disabled = true;
    button.querySelector("small").textContent = "位置を取得中…";
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const nearest = Object.entries(areaCenters).map(([id, [lat, lon]]) => ({ id, distance: distanceKm(coords.latitude, coords.longitude, lat, lon) })).sort((a, b) => a.distance - b.distance)[0];
      const area = guideAreas.find((item) => item.id === nearest.id);
      state.guideCity = area.city;
      state.guideArea = area.id;
      state.guideLocationNote = `${area.name}中心まで約${nearest.distance < 10 ? nearest.distance.toFixed(1) : Math.round(nearest.distance)}km · 現在地確認直後`;
      render();
      toast(`${area.name}を最寄りエリアとして表示しました。`);
    }, () => {
      button.disabled = false;
      button.querySelector("small").textContent = "位置情報は未使用";
      toast("位置を取得できません。都市と町・エリアを手動で選んでください。");
    }, { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 });
  }));
  screen.querySelectorAll("[data-toggle-settlement]").forEach((button) => button.addEventListener("click", () => {
    const id = button.dataset.toggleSettlement;
    recordsState.settledTransferIds = recordsState.settledTransferIds.includes(id) ? recordsState.settledTransferIds.filter((row) => row !== id) : [...recordsState.settledTransferIds, id];
    saveRecords(); render();
  }));
  screen.querySelector("[data-fx-eur]")?.addEventListener("input", (event) => {
    screen.querySelector("[data-fx-output]").textContent = yen((Number(event.target.value) || 0) * recordsState.fx.EURJPY);
  });
  screen.querySelector("[data-fx-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const rate = Number(new FormData(event.currentTarget).get("EURJPY"));
    if (!Number.isFinite(rate) || rate <= 0) return toast("1ユーロあたりの円レートを正の数で入力してください。");
    recordsState.fx = { EURJPY: rate, checkedAt: new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date()), source: "手動設定" };
    saveRecords(); render(); toast(`€1 = ¥${rate} を全体へ反映しました。`);
  });
  screen.querySelector("[data-export-records]")?.addEventListener("click", () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(recordsState, null, 2)], { type: "application/json" }));
    const link = document.createElement("a"); link.href = url; link.download = "spain-trip-records-v1.json"; link.click(); URL.revokeObjectURL(url);
  });
  screen.querySelector("[data-export-csv]")?.addEventListener("click", () => {
    const quote = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
    const rows = [["date", "budgetLineId", "title", "category", "amount", "currency", "payer", "participants", "shares", "fxEURJPY", "fxCheckedAt"], ...recordsState.expenses.map((row) => [row.date, row.budgetLineId || "", row.title, row.category, row.amountOriginal, row.currency, row.payer, row.participants.join("|"), row.participants.map((person) => `${person}:${row.shares[person]}`).join("|"), row.fxSnapshot.EURJPY, row.fxSnapshot.checkedAt])];
    const csv = `\ufeff${rows.map((row) => row.map(quote).join(",")).join("\r\n")}`;
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = "spain-trip-expenses-v1.csv"; link.click(); URL.revokeObjectURL(url);
  });
  screen.querySelector("[data-import-records]")?.addEventListener("click", () => screen.querySelector("[data-import-file]")?.click());
  screen.querySelector("[data-import-file]")?.addEventListener("change", async (event) => {
    try {
      const parsed = JSON.parse(await event.target.files[0].text());
      if (!validRecords(parsed)) throw new Error("schema mismatch");
      recordsState = { ...parsed, memories: parsed.memories || [], settledTransferIds: parsed.settledTransferIds || [] }; saveRecords(); render(); toast("記録JSONを読み込みました。");
    } catch { toast("この記録ファイルは読み込めません。書き出した元ファイルを選んでください。"); }
  });
  observeItineraryDays();
}

function bindSheet() {
  bindCommon(sheet);
  const searchInput = sheet.querySelector("[data-site-search]");
  const searchResults = sheet.querySelector("[data-search-results]");
  const searchIndex = searchInput ? buildSearchIndex() : [];
  const bindSearchResultButtons = () => searchResults?.querySelectorAll("[data-search-day]").forEach((button) => button.addEventListener("click", () => {
    state.day = button.dataset.searchDay;
    state.tab = button.dataset.searchTab;
    if (button.dataset.searchGuideMode) {
      state.guideSection = button.dataset.searchGuideMode;
      state.guideArea = button.dataset.searchArea;
      state.guideCity = guideAreas.find((area) => area.id === state.guideArea)?.city || "all";
    }
    closeSheet(); render(); window.scrollTo({ top: 0 });
  }));
  bindSearchResultButtons();
  searchInput?.addEventListener("input", () => {
    const query = searchInput.value.trim().toLocaleLowerCase("ja");
    const matches = query ? searchIndex.filter((entry) => entry.searchText.toLocaleLowerCase("ja").includes(query)) : searchIndex.filter((entry) => entry.dayId === state.day).slice(0, 8);
    searchResults.innerHTML = searchResultCards(matches);
    bindSearchResultButtons();
  });
  const splitMode = sheet.querySelector("[data-split-mode]");
  splitMode?.addEventListener("change", () => { sheet.querySelector("[data-custom-shares]").hidden = splitMode.value !== "custom"; });
  sheet.querySelector("[data-budget-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    recordsState.budget.push({ id: `budget-${Date.now()}`, dayId: form.get("dayId"), title: form.get("title"), category: form.get("category"), amountOriginal: Number(form.get("amount")), currency: form.get("currency"), status: form.get("status") });
    saveRecords(); closeSheet(); render(); toast("予算へ追加しました。");
  });
  sheet.querySelector("[data-expense-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const amountOriginal = Number(form.get("amount"));
    const selectedDayId = form.get("dayId");
    const expenseDate = window.UXFullData?.trip?.days?.find((row) => row.id === selectedDayId)?.date || selectedDayId;
    const participants = form.getAll("participant");
    if (!participants.length) return toast("参加者を1人以上選んでください。");
    const splitModeValue = form.get("splitMode");
    const shares = splitModeValue === "equal" ? Object.fromEntries(participants.map((person) => [person, amountOriginal / participants.length])) : Object.fromEntries(participants.map((person) => [person, Number(form.get(`share${person}`) || 0)]));
    const shareTotal = Object.values(shares).reduce((sum, value) => sum + value, 0);
    if (Math.abs(shareTotal - amountOriginal) > .01) return toast("個別負担額の合計を支払額と一致させてください。");
    recordsState.expenses.push({ id: `expense-${Date.now()}`, budgetLineId: form.get("budgetLineId") || "", dayId: selectedDayId, date: expenseDate, title: form.get("title"), category: form.get("category"), amountOriginal, currency: form.get("currency"), payer: form.get("payer"), participants, splitMode: splitModeValue, shares, fxSnapshot: clone(recordsState.fx) });
    saveRecords(); closeSheet(); render(); toast("支出と換算レートを保存しました。");
  });
  sheet.querySelector("[data-experience-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const photo = form.get("photo");
    if (photo?.size > 1_500_000) return toast("写真は1.5MB以下にしてください。");
    let photoDataUrl = "";
    if (photo?.size) photoDataUrl = await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(photo); });
    recordsState.memories.push({ id: `memory-${Date.now()}`, dayId: form.get("dayId"), place: form.get("place"), food: form.get("food"), note: form.get("note"), planChange: form.get("planChange") || "planned", changeNote: form.get("changeNote") || "", photoAlt: form.get("photoAlt"), photoDataUrl, best: form.get("best") === "on" });
    saveRecords(); closeSheet(); render(); toast("写真と思い出をこの端末に保存しました。");
  });
}

document.querySelector("[data-open='search']").addEventListener("click", () => openSheet("search"));
document.querySelector("[data-open='sos']").addEventListener("click", () => openSheet("sos"));
document.querySelector("[data-close-sheet]").addEventListener("click", closeSheet);
scrim.addEventListener("click", closeSheet);
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !sheet.hidden) closeSheet(); });
document.querySelector(".brand").addEventListener("click", () => switchTab("home"));

const params = new URLSearchParams(location.search);
if (days[params.get("day")]) state.day = params.get("day");
if (renderers[params.get("tab")]) state.tab = params.get("tab");
render();
if (state.tab === "schedule") requestAnimationFrame(() => scrollToItineraryDay(state.day, false));
updateLocalClock();
setInterval(updateLocalClock, 30_000);
