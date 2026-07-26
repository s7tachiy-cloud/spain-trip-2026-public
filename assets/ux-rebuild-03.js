(function () {
  "use strict";

  const T = window.TRIP;
  const H = window.HOTEL_CANDIDATES_3P;
  const U = T?.uxRebuild03;
  const root = document.querySelector("[data-ux-root]");
  if (!T || !U || !root) return;

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[char]));
  const view = document.body.dataset.view;
  const openAdjustments = U.adjustments.filter((item) => item.status === "open");
  const selectedDayId = () => {
    const params = new URLSearchParams(location.search);
    return params.get("day") || root.querySelector("[data-day-detail]")?.dataset.dayDetail || "d1225";
  };

  function coverageHtml(compact = false) {
    const c = U.coverage;
    return `<section class="ux03-coverage ${compact ? "is-compact" : ""}" data-ux03-coverage>
      <div><span>要調整</span><strong>残り${openAdjustments.length}</strong></div>
      <div><span>観光地判断済み</span><strong>${c.attractionsDecided}/${c.attractionsTotal}</strong></div>
      <div><span>食事枠充足</span><strong>${c.mealsFilled}/${c.mealsTotal}</strong></div>
    </section>`;
  }

  function enhanceHome() {
    const hero = $("[data-home-first-view]", root);
    hero?.insertAdjacentHTML("afterend", coverageHtml());
    const head = $("[data-next-actions] .ux-section-head h2", root);
    if (head) head.insertAdjacentHTML("afterend", `<span class="ux-chip is-wait">⚠ 要調整 残り${openAdjustments.length}</span>`);
  }

  function transportHtml(dayId) {
    const legs = U.transportLegs.filter((leg) => leg.dayId === dayId);
    return `<section class="ux-card ux03-transport" data-transport-legs>
      <div class="ux-section-head"><div><p class="ux-eyebrow">MOVEMENT LEGS</p><h2>この日の移動レグ</h2></div><span>${legs.length}件</span></div>
      <div class="ux03-leg-list">${legs.map((leg) => `<article class="ux03-leg" data-leg="${esc(leg.id)}">
        <span class="ux03-leg-icon" aria-hidden="true">${esc(leg.icon)}</span>
        <div><strong>${esc(leg.service)}｜${esc(leg.route)}</strong>
        <p>${esc(leg.time)}｜${esc(leg.price)}｜荷物 ${esc(leg.baggage)}</p></div>
      </article>`).join("")}</div>
    </section>`;
  }

  function adjustmentsHtml(dayId) {
    const items = openAdjustments.filter((item) => item.dayId === dayId);
    return `<section class="ux-card ux03-adjustments" data-day-adjustments>
      <div class="ux-section-head"><div><p class="ux-eyebrow">OPEN ITEMS</p><h2>⚠ 要調整 ${items.length}件</h2></div><a href="prep.html#ux03-all-adjustments">全16件を見る</a></div>
      <div class="ux03-adjustment-list">${items.map((item) => `<details id="${esc(item.id)}" data-adjustment="${esc(item.id)}"><summary><span class="ux03-badge-adjust">要調整</span>${esc(item.title)}</summary><p>${esc(item.reason)}</p></details>`).join("") || "<p>この日の未解決項目はありません。</p>"}</div>
    </section>`;
  }

  function proposalsHtml(dayId) {
    const items = U.proposalsByDay[dayId] || [];
    if (!items.length) return "";
    return `<section class="ux-card ux03-proposals" data-proposals>
      <div class="ux-section-head"><div><p class="ux-eyebrow">FAMILY DECISION</p><h2>代替案</h2></div><span>本編には未採用</span></div>
      ${items.map((item) => `<article><span class="ux03-badge-proposal">〔提案〕</span><div><strong>${esc(item.title)}</strong><p>${esc(item.reason)}</p></div></article>`).join("")}
    </section>`;
  }

  function fixContingencyContradictions() {
    const cards = $$(".ux-section .ux-grid > .ux-card", root);
    const keepCard = cards.find((card) => card.querySelector("h3")?.textContent.trim() === "必ず残す");
    const dropCard = cards.find((card) => card.querySelector("h3")?.textContent.trim() === "先に削ってよい");
    const keep = new Set($$("li", keepCard || document.createElement("div")).map((li) => li.textContent.trim()));
    if (dropCard) {
      $$("li", dropCard).forEach((li) => {
        if (keep.has(li.textContent.trim())) li.remove();
      });
      if (!dropCard.querySelector("li")) dropCard.querySelector("ul")?.insertAdjacentHTML("beforeend", "<li>本編の必須項目と重複なし</li>");
    }
    const quick = $(".ux-day-contingency small", root);
    if (quick) quick.textContent = "残す／先に削るは下の「この日の守り方」を参照（重複なし）";
  }

  function enhanceSchedule() {
    const dayId = selectedDayId();
    const detail = $("[data-day-detail]", root);
    const firstSection = $(".ux-section", root);
    firstSection?.insertAdjacentHTML("afterbegin", `<div class="ux03-source"><strong>本編：</strong>スケジュールデータ_v2.md由来　<span>CLI案は〔提案〕として分離</span></div>${coverageHtml(true)}`);
    $$("[data-twelve-day-list] a", root).forEach((card) => {
      const id = new URL(card.href).searchParams.get("day");
      const lodging = U.lodgingByDay[id];
      const label = [...card.querySelectorAll("span")].find((span) => span.textContent.startsWith("宿泊："));
      if (label && lodging) label.textContent = `宿泊：${lodging}`;
    });
    const lodging = U.lodgingByDay[dayId];
    const lodgingValue = detail?.querySelector(".ux-fact-list dd");
    if (lodgingValue && lodging) lodgingValue.textContent = lodging;
    const timeline = $(".ux-timeline", detail || root);
    timeline?.insertAdjacentHTML("beforebegin", `${transportHtml(dayId)}${adjustmentsHtml(dayId)}${proposalsHtml(dayId)}`);
    openAdjustments.filter((item) => item.dayId === dayId && item.itemId).forEach((item) => {
      const row = document.getElementById(`item-${item.itemId}`);
      const chips = row?.querySelector(".ux-chip-row");
      if (chips && !chips.querySelector(`[data-adjustment-badge="${item.id}"]`)) {
        chips.insertAdjacentHTML("afterbegin", `<a class="ux03-badge-adjust" data-adjustment-badge="${esc(item.id)}" href="#${esc(item.id)}">要調整</a>`);
      }
    });
    fixContingencyContradictions();
  }

  const SOURCE_LINK_KEY = "spain-trip-booking-source-links-v1";
  const EMERGENCY_KEY = "spain-trip-emergency-private-v1";
  const read = (key, fallback = {}) => {
    try { return JSON.parse(localStorage.getItem(key) || "") || fallback; } catch { return fallback; }
  };
  const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  function hotelSource(candidate) {
    const review = candidate.reviewUrl || "";
    const price = candidate.bookingUrl || "";
    const names = [];
    if (/booking\.com/i.test(`${review} ${price}`)) names.push("Booking.com");
    if (/expedia/i.test(`${review} ${price}`)) names.push("Expedia");
    if (/marriott/i.test(`${review} ${price}`)) names.push("Marriott公式");
    if (!names.length) names.push("公式・OTA");
    return [...new Set(names)].join("／");
  }

  function enhancePrep() {
    const links = read(SOURCE_LINK_KEY);
    $$("#transport .ux-card", root).forEach((card, index) => {
      const title = card.querySelector("h3")?.textContent.trim() || `booking-${index}`;
      const id = `source-${index}`;
      card.insertAdjacentHTML("beforeend", `<label class="ux-field ux03-source-field"><span>Googleドライブ原本リンク</span>
        <input id="${id}" type="url" data-source-link="${esc(title)}" value="${esc(links[title] || "")}" placeholder="後でゆうきさんが貼る">
        <small>URLだけをこの端末に保存。予約番号・QRは保存しません。</small></label>`);
    });
    $$("[data-source-link]", root).forEach((input) => input.addEventListener("change", () => {
      const state = read(SOURCE_LINK_KEY);
      state[input.dataset.sourceLink] = input.value.trim();
      save(SOURCE_LINK_KEY, state);
    }));

    const hotels = $("#hotels", root);
    hotels?.insertAdjacentHTML("beforebegin", `<section class="ux-section" id="ux03-emergency">
      <div class="ux-section-head"><div><p class="ux-eyebrow">EMERGENCY</p><h2>緊急情報</h2></div></div>
      <div class="ux-grid two">
        <article class="ux-card"><h3>すぐ使う番号</h3><dl class="ux-compare-list">
          <div><dt>欧州共通緊急</dt><dd><a href="tel:112">112</a>（警察・救急・消防、無料）</dd></div>
          <div><dt>在スペイン日本国大使館</dt><dd><a href="tel:+34915907600">+34 91 590 7600</a></dd></div>
          <div><dt>在バルセロナ日本国総領事館</dt><dd><a href="tel:+34932803433">+34 93 280 3433</a></dd></div>
        </dl><p class="ux-muted">公式確認日 2026-07-26。旅行前に再確認。</p></article>
        <article class="ux-card ux-form"><h3>保険・家族の連絡先</h3>
          <label class="ux-field"><span>海外旅行保険</span><input data-emergency="insurance" placeholder="会社名・緊急電話"></label>
          <label class="ux-field"><span>家族連絡先</span><input data-emergency="family" placeholder="氏名・電話"></label>
          <label class="ux-field"><span>証券参照</span><input data-emergency="policy" placeholder="Driveファイル名だけ"></label>
          <small>この端末だけに保存。証券番号や画像本体は公開領域へ保存しません。</small>
        </article>
      </div>
    </section>
    <section class="ux-section" id="ux03-all-adjustments"><div class="ux-card ux03-adjustments">
      <div class="ux-section-head"><div><p class="ux-eyebrow">OPEN ITEMS</p><h2>⚠ 要調整 残り${openAdjustments.length}</h2></div></div>
      <div class="ux03-adjustment-list">${openAdjustments.map((item) => `<details><summary><span class="ux03-badge-adjust">要調整</span>${esc(item.title)}</summary><p>${esc(item.reason)}</p><a href="schedule.html?day=${esc(item.dayId)}#item-${esc(item.itemId)}">該当日程へ</a></details>`).join("")}</div>
    </div></section>`);
    const emergency = read(EMERGENCY_KEY);
    $$("[data-emergency]", root).forEach((input) => {
      input.value = emergency[input.dataset.emergency] || "";
      input.addEventListener("change", () => {
        const state = read(EMERGENCY_KEY);
        state[input.dataset.emergency] = input.value.trim();
        save(EMERGENCY_KEY, state);
      });
    });
    H?.stays.flatMap((stay) => stay.candidates).forEach((candidate) => {
      const card = root.querySelector(`[data-hotel="${candidate.id}"]`);
      card?.insertAdjacentHTML("beforeend", `${candidate.solWalk ? `<p class="ux-note"><strong>Sol徒歩条件：</strong>${esc(candidate.solWalk)}</p>` : ""}<p class="ux03-source-note"><strong>価格・レビュー出典：</strong>${esc(hotelSource(candidate))}／取得日 ${esc(candidate.sourceCheckedAt || H.checkedAt || "2026-07-25")}</p>`);
    });
  }

  const RATE_KEY = "spain-trip-eur-jpy-rate-v1";
  function budgetRows(rate) {
    return U.budget.estimates.map((item) => {
      const total = item.amount === null ? null : item.amount * item.quantity;
      const yen = total === null ? null : item.currency === "JPY" ? total : total * rate;
      const stateLabel = item.status === "confirmed" ? "確定" : item.status === "estimate" ? "見込み" : "未確定・合計外";
      return `<article class="ux03-budget-row" data-budget-estimate="${esc(item.id)}">
        <div><span class="ux-chip ${item.status === "unconfirmed" ? "is-wait" : ""}">${stateLabel}</span><strong>${esc(item.title)}</strong><small>${esc(item.note)}</small></div>
        <div><strong>${total === null ? "金額未入力" : `${item.currency} ${total.toLocaleString("ja-JP", { maximumFractionDigits: 2 })}`}</strong>
        <small>${yen === null ? "合計外" : `約¥${Math.round(yen).toLocaleString("ja-JP")}`}</small></div>
      </article>`;
    }).join("");
  }

  function budgetTotals(rate) {
    const included = U.budget.estimates.filter((item) => item.amount !== null && item.status !== "unconfirmed");
    const yen = included.reduce((sum, item) => sum + (item.currency === "JPY" ? item.amount * item.quantity : item.amount * item.quantity * rate), 0);
    return { yen: Math.round(yen), each: Math.round(yen / 3) };
  }

  function enhanceBudget() {
    const initialRate = Number(localStorage.getItem(RATE_KEY) || U.budget.defaultRate);
    const intro = $(".ux-section", root);
    intro?.insertAdjacentHTML("afterend", `<section class="ux-section ux03-budget" data-ux03-budget>
      <div class="ux-section-head"><div><p class="ux-eyebrow">INITIAL ESTIMATE</p><h2>旅行前の初期見込み</h2></div><span>ホテルは未確定・合計外</span></div>
      <div class="ux03-rate-card">
        <label class="ux-field"><span>計画用レート（1€）</span><input type="number" min="1" step=".01" value="${initialRate}" data-eur-rate></label>
        <p>初期定数 1€=${U.budget.defaultRate}円／基準日 ${esc(U.budget.rateDate)}。手動変更可。</p>
        <div><span>見込み合計</span><strong data-estimate-total></strong></div>
        <div><span>一人あたり</span><strong data-estimate-each></strong></div>
      </div>
      <div class="ux03-budget-list" data-budget-estimates></div>
      <article class="ux-card ux03-calculator"><h3>€ ⇔ ¥ 為替計算機</h3>
        <div class="ux-form-grid"><label class="ux-field"><span>金額</span><input type="number" min="0" step=".01" value="100" data-fx-amount></label>
        <label class="ux-field"><span>変換</span><select data-fx-direction><option value="eur-jpy">€ → ¥</option><option value="jpy-eur">¥ → €</option></select></label></div>
        <p class="ux-countdown-large" data-fx-result></p>
      </article>
    </section>`);
    const rateInput = $("[data-eur-rate]", root);
    const render = () => {
      const rate = Math.max(1, Number(rateInput.value || U.budget.defaultRate));
      localStorage.setItem(RATE_KEY, String(rate));
      const totals = budgetTotals(rate);
      $("[data-estimate-total]", root).textContent = `約¥${totals.yen.toLocaleString("ja-JP")}`;
      $("[data-estimate-each]", root).textContent = `約¥${totals.each.toLocaleString("ja-JP")}`;
      $("[data-budget-estimates]", root).innerHTML = budgetRows(rate);
      const amount = Number($("[data-fx-amount]", root).value || 0);
      const direction = $("[data-fx-direction]", root).value;
      $("[data-fx-result]", root).textContent = direction === "eur-jpy"
        ? `€${amount.toLocaleString("ja-JP")} = ¥${Math.round(amount * rate).toLocaleString("ja-JP")}`
        : `¥${amount.toLocaleString("ja-JP")} = €${(amount / rate).toLocaleString("ja-JP", { maximumFractionDigits: 2 })}`;
    };
    [rateInput, $("[data-fx-amount]", root), $("[data-fx-direction]", root)].forEach((input) => input?.addEventListener("input", render));
    render();
  }

  if (view === "home") enhanceHome();
  if (view === "schedule") enhanceSchedule();
  if (view === "prep") enhancePrep();
  if (view === "budget") enhanceBudget();
})();
