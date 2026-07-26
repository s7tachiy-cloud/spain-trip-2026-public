(function () {
  "use strict";

  const T = window.TRIP;
  const H = window.HOTEL_CANDIDATES_3P;
  const root = document.querySelector("[data-ux-root]");
  if (!T || !root) return;

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[char]));
  const friendlyText = (value) => String(value ?? "")
    .replace(/Phase 3\.1-R2/gi, "旅程比較")
    .replace(/P06-R2/gi, "現在の旅程")
    .replace(/working time/gi, "仮時刻")
    .replace(/soft preference/gi, "参考の希望")
    .replace(/request only/gi, "リクエスト扱い・確約なし")
    .replace(/private evidence/gi, "予約済み内容")
    .replace(/私的証拠/g, "予約済み内容")
    .replace(/through baggage/gi, "手荷物の通し預け")
    .replace(/\bterminal\b/gi, "ターミナル")
    .replace(/dropRank\s*1から/gi, "優先順位の低いものから")
    .replace(/shortenable/gi, "短縮できる")
    .replace(/redacted/gi, "必要事項を抜き出した")
    .replace(/preview/gi, "表示例")
    .replace(/fallback/gi, "代替案")
    .replace(/buffer/gi, "余裕時間")
    .replace(/confirmed/gi, "確定済み")
    .replace(/\bcore\b/gi, "主要部")
    .replace(/omitted/gi, "今回は見送り")
    .replace(/旧scheduleから名称のみ移行。詳細は未登録。/g, "詳細は旅行前に公式情報で確認します。")
    .replace(/既存spots記載。/g, "料金・時間は旅行前に公式情報で確認します。")
    .replace(/旧schedule/g, "以前の旅程")
    .replace(/既存spots/g, "場所情報")
    .replace(/未登録/g, "確認待ち")
    .replace(/GAU-01/g, "ガウディ総論")
    .replace(/GAU-\d+[A-Z]?/g, "ガウディ学習")
    .replace(/ScheduleItem/g, "予定");
  const normalizeVisibleCopy = (context = root) => {
    const walker = document.createTreeWalker(context, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) node.nodeValue = friendlyText(node.nodeValue);
  };
  const unique = (rows) => [...new Set(rows.filter(Boolean))];
  const byId = (rows, id) => rows.find((row) => row.id === id);
  const day = (id) => byId(T.days, id);
  const place = (id) => byId(T.places, id);
  const booking = (id) => byId(T.bookings, id);
  const article = (id) => byId(T.learningArticles, id);
  const scheduleItem = (id) => byId(T.scheduleItems, id);
  const dish = (id) => byId(T.dishes, id);
  const external = (url) => /^https?:/i.test(url || "") ? ' target="_blank" rel="noopener noreferrer"' : "";
  const link = (url, label, className = "") => url ? `<a class="${className}" href="${esc(url)}"${external(url)}>${esc(label)}</a>` : "";
  const fmtDate = (date) => {
    if (!date) return "日付未設定";
    const [y, m, d] = date.split("-");
    return `${Number(m)}/${Number(d)}`;
  };
  const fmtFullDate = (date) => {
    if (!date) return "日付未設定";
    const [y, m, d] = date.split("-");
    return `${y}年${Number(m)}月${Number(d)}日`;
  };
  const startMinutes = (row) => {
    const value = row?.timing?.start?.time;
    if (!value) return null;
    const [h, m] = value.split(":").map(Number);
    return h * 60 + m;
  };
  const endMinutes = (row) => {
    const value = row?.timing?.end?.time;
    if (!value) return null;
    const [h, m] = value.split(":").map(Number);
    return h * 60 + m;
  };
  const duration = (row) => {
    const start = startMinutes(row);
    const end = endMinutes(row);
    if (start === null || end === null) return row?.durationIdealMinutes ?? null;
    return Math.max(0, end - start);
  };
  const displayTime = (row) => {
    const start = row?.timing?.start?.time;
    const end = row?.timing?.end?.time;
    if (!start) return "時刻は当日調整";
    return end ? `${start}–${end}` : start;
  };
  const isUserScheduleRow = (row) => {
    const p = place(row.placeId);
    const b = booking(row.bookingId);
    const legacyOnly = /旧scheduleから名称のみ移行|既存spots記載/.test(p?.summary || "") && row.priority !== "必須" && !article(row.articleId);
    const deliberatelyOmitted = /P06-R2では.*omitted|購入対象にしない|旅程へ戻さず/.test(b?.publicNote || "");
    return !legacyOnly && !deliberatelyOmitted;
  };
  const dayRows = (dayId) => T.scheduleItems
    .filter((row) => row.dayId === dayId && isUserScheduleRow(row))
    .sort((a, b) => a.sequence - b.sequence || a.id.localeCompare(b.id));
  const bookingText = (row) => {
    const b = booking(row.bookingId);
    if (!b) return row.bookingRequirement === "not_required" ? "予約不要" : row.bookingRequirement === "required" ? "要予約・未手配" : "予約状況を確認";
    if (b.status === "confirmed") return "確定済み（証拠は非公開）";
    if (b.publicNote?.includes("omitted") || b.publicNote?.includes("購入対象にしない")) return "今回は予約しない";
    if (/発売待ち|公表待ち|未公表/.test(b.publicNote || "")) return "発売・公式発表待ち";
    return row.bookingRequirement === "required" ? "要予約・未手配" : "未手配";
  };
  const planLabel = (row) => row.priority === "必須" ? "必ず残す" : row.priority === "できれば" ? "時間があれば" : "状況で調整";
  const cityName = (id) => byId(T.cities, id)?.name || id || "移動";
  const tripDaysUntil = () => {
    const today = new Date();
    const target = new Date(`${T.start}T00:00:00+09:00`);
    return Math.ceil((target.getTime() - today.getTime()) / 86400000);
  };
  const articleForRow = (row) => article(row.articleId);
  const placeForRow = (row) => place(row.placeId);
  const itemsForArticle = (a) => T.scheduleItems.filter((row) => (a?.relatedScheduleItemIds || []).includes(row.id) || row.articleId === a?.id);

  function initNavigation() {
    const toggle = $("[data-more-toggle]");
    const menu = $("[data-more-menu]");
    toggle?.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.hidden = open;
    });
    document.addEventListener("click", (event) => {
      if (!menu || menu.hidden || event.target.closest("[data-more-toggle], [data-more-menu]")) return;
      menu.hidden = true;
      toggle?.setAttribute("aria-expanded", "false");
    });
  }

  function card(title, body, className = "") {
    return `<article class="ux-card ${className}"><h3>${esc(title)}</h3>${body}</article>`;
  }

  function actionLinks(row, labels = {}) {
    const p = placeForRow(row);
    const b = booking(row.bookingId);
    const a = articleForRow(row);
    const links = [];
    if (p?.mapUrl) links.push(link(p.mapUrl, labels.map || "地図"));
    if (b?.ticketUrl) links.push(link(b.ticketUrl, labels.ticket || "チケット"));
    if (b?.actionUrl) links.push(link(b.actionUrl, labels.booking || "予約・購入"));
    if (p?.officialUrl) links.push(link(p.officialUrl, labels.official || "公式サイト"));
    if (a) {
      links.push(`<a href="learn.html?id=${encodeURIComponent(a.id)}#quick">3分</a>`);
      links.push(`<a href="learn.html?id=${encodeURIComponent(a.id)}#deep">15分</a>`);
      links.push(`<a href="learn.html?id=${encodeURIComponent(a.id)}#onsite">現地2分</a>`);
    }
    return `<div class="ux-action-row">${links.join("") || '<span class="ux-muted">関連リンクは旅行前に再確認</span>'}</div>`;
  }

  function taskCategory(task) {
    const text = `${task.title} ${task.blockedReason || ""} ${(task.informationNeeded || []).join(" ")}`;
    if (task.status === "done") return "done";
    if (/発売待ち/.test(text)) return "release";
    if (/公表待ち|未公表|年末年始情報|運用未公表/.test(text)) return "official";
    if (/直前|24時間|当日用|再確認/.test(text) || task.deadline >= "2026-12-01") return "recheck";
    return "now";
  }

  function preparationGroups() {
    const groups = { now: [], release: [], official: [], recheck: [], done: [] };
    T.preparationTasks.forEach((task) => groups[taskCategory(task)].push(task));
    Object.values(groups).forEach((rows) => rows.sort((a, b) => (a.deadline || "9999").localeCompare(b.deadline || "9999") || a.id.localeCompare(b.id)));
    return groups;
  }
  const taskDisplayTitle = (task) => task.id === "task-private-evidence" ? "予約済み内容を一括確認" : task.title;
  const taskDisplayReason = (task) => task.id === "task-private-evidence" ? "航空券など、予約済み内容の照合待ち" : (task.blockedReason || task.informationNeeded?.[0] || "必要条件を確認して進める");

  function renderHome() {
    const groups = preparationGroups();
    const next = groups.now.slice(0, 3);
    const deadlines = [...T.preparationTasks]
      .filter((task) => task.deadline && task.status !== "done")
      .sort((a, b) => a.deadline.localeCompare(b.deadline))
      .slice(0, 4);
    const days = tripDaysUntil();
    root.innerHTML = `
      <section class="ux-hero" data-home-first-view>
        <p class="ux-eyebrow">12日間のスペイン旅行</p>
        <h1>BarcelonaからMadrid・Toledoへ</h1>
        <p class="ux-hero-lead">建築と美術を深く楽しみながら、遅れや疲れにも崩れにくい順番で巡ります。</p>
        <div class="ux-trip-facts">
          <span>2026/12/25–2027/1/5</span><span>大人3名</span><span>Barcelona → Madrid・Toledo → Barcelona</span>
        </div>
        <div class="ux-countdown"><span>旅行まで</span><strong>${days > 0 ? `あと${days}日` : days === 0 ? "今日出発" : "旅行期間中／終了後"}</strong></div>
        <div class="ux-action-row">
          <a class="primary" href="schedule.html">日程を見る</a><a href="prep.html">予約・準備</a><a href="today.html">旅行中</a><a href="explore.html">学ぶ・食べる</a>
        </div>
      </section>
      <section class="ux-section" data-next-actions>
        <div class="ux-section-head"><div><p class="ux-eyebrow">NEXT ACTION</p><h2>次にやること</h2></div><a href="prep.html">準備をすべて見る</a></div>
        <div class="ux-grid">${next.map((task, index) => `
          <article class="ux-card ux-next-card" data-next-action>
            <span class="ux-next-index">${index + 1}</span><div><h3>${esc(taskDisplayTitle(task))}</h3>
            <time>${task.deadline ? `${fmtFullDate(task.deadline)}まで` : "期限を決める"}</time>
            <p>${esc(taskDisplayReason(task))}</p>
            ${task.actionUrl ? `<a href="${esc(task.actionUrl)}"${external(task.actionUrl)}>確認先を開く</a>` : '<a href="prep.html">手順を見る</a>'}</div>
          </article>`).join("")}</div>
      </section>
      <section class="ux-section">
        <div class="ux-section-head"><div><p class="ux-eyebrow">DEADLINES</p><h2>期限が近いもの</h2></div></div>
        <div class="ux-card"><div class="ux-stack">${deadlines.map((task) => `<div class="ux-task"><div><strong>${esc(taskDisplayTitle(task))}</strong><p class="ux-muted">${esc(taskDisplayReason(task))}</p></div><time>${fmtFullDate(task.deadline)}</time></div>`).join("")}</div></div>
      </section>
      <section class="ux-section">
        <div class="ux-section-head"><div><p class="ux-eyebrow">12 DAYS</p><h2>12日間の概要</h2></div><a href="schedule.html">詳しい日程</a></div>
        <div class="ux-day-overview-grid">${T.days.map((d) => {
          const rows = dayRows(d.id);
          const hasReservation = rows.some((row) => booking(row.bookingId)?.status === "confirmed");
          return `<a class="ux-card ux-day-overview" href="schedule.html?day=${encodeURIComponent(d.id)}#day-detail">
            <span class="ux-date">${fmtDate(d.date)}（${esc(d.dow)}）・${esc(d.cityLabel)}</span>
            <h3>${esc(d.hero)}</h3><span>${esc(d.title)}</span>
            <div class="ux-chip-row"><span class="ux-chip">${esc(d.mealStatus)}</span><span class="ux-chip ${hasReservation ? "" : "is-wait"}">${hasReservation ? "確定予約あり" : "予約を確認"}</span></div>
          </a>`;
        }).join("")}</div>
      </section>
      <section class="ux-section">
        <div class="ux-card ux-next-card" data-home-hotel-summary>
          <span class="ux-next-index">H</span><div><p class="ux-eyebrow">HOTELS</p><h2>ホテルは3滞在とも未予約</h2>
          <p>Barcelona前半、Madrid、Barcelona最終泊を、それぞれ2候補から比較します。</p>
          <div class="ux-action-row"><a class="primary" href="prep.html#hotels">候補を比較する</a></div></div>
        </div>
      </section>`;
  }

  function travelInfo(row, previous) {
    if (row.kind === "transfer" || row.kind === "flight") {
      return {
        minutes: duration(row) !== null ? `${duration(row)}分` : "所要時間を再確認",
        method: row.title,
      };
    }
    if (previous?.kind === "transfer" || previous?.kind === "flight") {
      return {
        minutes: duration(previous) !== null ? `${duration(previous)}分` : "所要時間を再確認",
        method: previous.title,
      };
    }
    if (row.placeId && previous?.placeId === row.placeId) return { minutes: "同じ場所", method: "施設内移動" };
    const currentStart = startMinutes(row);
    const previousEnd = endMinutes(previous);
    if (currentStart !== null && previousEnd !== null && currentStart >= previousEnd) {
      return { minutes: `枠間${currentStart - previousEnd}分`, method: "徒歩・公共交通を旅行前に確認" };
    }
    return { minutes: "要確認", method: "地図で経路を確認" };
  }

  function reasonFor(row) {
    const a = articleForRow(row);
    const p = placeForRow(row);
    if (a?.intro?.whyItMatters) return a.intro.whyItMatters;
    if (p?.summary) return p.summary;
    if (row.kind === "meal") return "この日の食事役割を守り、次の予定へ無理なくつなぐため。";
    if (row.kind === "transfer" || row.kind === "flight") return "次の主役へ余裕を持って到着し、遅延を後ろへ連鎖させないため。";
    if (row.kind === "rest" || row.kind === "hotel") return "3人の疲労を回復し、その後の主役を守るため。";
    return `${planLabel(row)}予定として、この日の主役と移動順を支えるため。`;
  }

  function blockItems(block) {
    if (!block) return [];
    if (Array.isArray(block.items)) return block.items.map((item) => typeof item === "string" ? item : item.text || item.title);
    if (Array.isArray(block.columns)) return block.columns.map((column) => `${column.title}: ${column.text}`);
    if (Array.isArray(block.entries)) return block.entries.map((entry) => `${entry.date || entry.label || ""} ${entry.text || entry.description || ""}`.trim());
    return [];
  }

  function seePoints(row) {
    const a = articleForRow(row);
    const p = placeForRow(row);
    const meal = T.mealOptions.find((option) => option.scheduleItemId === row.id);
    let points = [];
    if (a) {
      points.push(...a.onsiteSections.flatMap((section) => section.blocks.flatMap(blockItems)));
      points.push(...(a.intro?.keyPoints || []));
    }
    if (row.kind === "meal") {
      points.push(...(meal?.dishIds || []).map((id) => `狙う料理：${dish(id)?.nameJa || id}`));
      points.push(...(meal?.notes || []));
      points.push("3人の食欲に合わせ、軽めとしっかりを注文前に調整");
    } else if (row.kind === "transfer" || row.kind === "flight") {
      points.push("出発表示と乗り場を公式案内で再確認", "荷物と3人が揃ってから移動", "到着後の次の出口・乗換を先に確認");
    } else {
      if (p?.summary) points.push(p.summary);
      points.push(...(row.notes || []));
    }
    points = unique(points.map((point) => String(point).trim()).filter(Boolean));
    const fillers = [
      "現地の公式掲示で入口・公開範囲を確認",
      "次の予定へ向かう出口と集合場所を3人で共有",
      row.shortenable ? "時間不足なら、最優先の一つを見て切り上げる" : "必要な滞在時間を守り、後ろの任意予定で調整",
    ];
    for (const filler of fillers) if (points.length < 3) points.push(filler);
    return points.slice(0, 5);
  }

  function scheduleItemHtml(row, previous, d) {
    const travel = travelInfo(row, previous);
    const contingency = d.contingency || {};
    const meal = T.mealOptions.find((option) => option.scheduleItemId === row.id);
    const mealAtGlance = row.kind === "meal" ? `<div class="ux-meal-at-glance" data-meal-at-glance>
      <div><strong>料理</strong><span>${esc((meal?.dishIds || []).map((id) => dish(id)?.nameJa || id).join("、") || "当日の食欲で選ぶ")}</span></div>
      <div><strong>第一候補</strong><span>${esc(placeForRow(row)?.nameJa || row.title)}</span></div>
      <div><strong>満席・休業時</strong><span>${esc(d.contingency?.restaurantUnavailable?.instruction || meal?.notes?.find((note) => /満席|休業/.test(note)) || "同じ料理役割の近隣候補へ切替")}</span></div>
    </div>` : "";
    return `<article class="ux-schedule-item" id="item-${esc(row.id)}" data-schedule-item>
      <div class="ux-time">${esc(row.timing?.start?.time || "調整")}<span>${row.timing?.end?.time ? `〜${esc(row.timing.end.time)}` : ""}</span></div>
      <div class="ux-item-body">
        <div class="ux-chip-row"><span class="ux-chip">${esc(planLabel(row))}</span><span class="ux-chip ${bookingText(row).includes("未") || bookingText(row).includes("待ち") ? "is-wait" : ""}">${esc(bookingText(row))}</span></div>
        <h3>${esc(row.title)}</h3>
        <div class="ux-item-summary">
          <div><span>前の場所から</span><strong>${esc(travel.minutes)}</strong></div>
          <div><span>移動方法</span><strong>${esc(travel.method)}</strong></div>
          <div><span>疲労・天候</span><strong>${esc(row.fatigueEvidence || "通常")}／${esc(row.weatherDependency || "要確認")}</strong></div>
        </div>
        <p><strong>行く理由：</strong>${esc(reasonFor(row))}</p>
        ${mealAtGlance}
        <details class="ux-item-details"><summary>見るもの・実行情報</summary>
          <h4>見るもの・確認すること</h4><ol class="ux-see-list">${seePoints(row).map((point) => `<li>${esc(point)}</li>`).join("")}</ol>
          <div class="ux-fallback-grid">
            <div><strong>30分遅れ</strong>${esc(contingency.delay30?.instruction || "次の固定時刻を守り、任意項目を短縮")}</div>
            <div><strong>1時間遅れ</strong>${esc(contingency.delay60?.instruction || "食事・休憩を残し、短縮可能な項目を削る")}</div>
            <div><strong>疲労</strong>${esc(contingency.fatigue?.instruction || "主役と帰路を残して休憩へ切替")}</div>
            <div><strong>雨</strong>${esc(contingency.rain?.instruction || "屋外を短縮し、屋内または休憩へ")}</div>
            <div><strong>休業</strong>${esc(contingency.majorDelay?.instruction || "公式情報を確認し、同日代替へ")}</div>
            <div><strong>食事が難しい</strong>${esc(contingency.restaurantUnavailable?.instruction || "同じ街区の予約不要候補へ")}</div>
          </div>
        </details>
        ${actionLinks(row)}
      </div>
    </article>`;
  }

  function dayQuickContingency(d, rows) {
    const keep = rows.filter((row) => row.priority === "必須").slice(0, 4).map((row) => row.title);
    const drop = rows.filter((row) => row.shortenable || row.priority !== "必須").slice(0, 4).map((row) => row.title);
    const summary = (key, fallback) => d.contingency?.[key]?.instruction || fallback;
    return `<section class="ux-card ux-day-contingency" aria-labelledby="day-contingency-title"><h2 id="day-contingency-title">崩れた時の即応</h2>
      <div class="ux-fallback-grid">
        <div><strong>30分遅れ</strong><span>${esc(summary("delay30", "主役を残し任意予定を短縮"))}</span><small>残す：${esc(keep.join("、") || d.hero)}／先に削る：${esc(drop.join("、") || "主役以外")}</small></div>
        <div><strong>1時間遅れ</strong><span>${esc(summary("delay60", "食事・休憩・帰路を残し、任意予定を削る"))}</span></div>
        <div><strong>疲れた</strong><span>${esc(summary("fatigue", "主役と帰路を残して休憩へ"))}</span></div>
        <div><strong>雨</strong><span>${esc(summary("rain", "屋外を短縮し屋内代替へ"))}</span></div>
        <div><strong>休業</strong><span>${esc(summary("majorDelay", "公式情報を確認し同日代替へ"))}</span></div>
      </div></section>`;
  }

  function dayEndSummary(d, rows) {
    const must = rows.filter((row) => row.priority === "必須").map((row) => row.title);
    const optional = rows.filter((row) => row.priority === "できれば").map((row) => row.title);
    const drop = rows.filter((row) => row.shortenable || row.dropRank !== null).sort((a, b) => (a.dropRank ?? 99) - (b.dropRank ?? 99)).map((row) => row.title);
    const meals = rows.filter((row) => row.kind === "meal").map((row) => row.title);
    return `<section class="ux-section"><div class="ux-section-head"><h2>この日の守り方</h2></div>
      <div class="ux-grid">
        ${card("必ず残す", `<ul>${(must.length ? must : [d.hero]).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`)}
        ${card("時間があれば", `<ul>${(optional.length ? optional : ["当日の体力で追加"]).slice(0, 5).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`)}
        ${card("先に削ってよい", `<ul>${(drop.length ? drop : ["主役以外の短時間散策"]).slice(0, 5).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`)}
        ${card("食べ逃したくない", `<ul>${(meals.length ? meals : [d.mealStatus]).slice(0, 5).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`)}
        ${card("翌日への注意", `<p>${esc(d.caution || "夜の帰着と翌朝の出発時刻を確認")}</p>`)}
      </div></section>`;
  }

  function renderSchedule() {
    const params = new URLSearchParams(location.search);
    const hashDay = location.hash.replace("#", "");
    const selected = day(params.get("day")) || day(hashDay) || T.days[0];
    const rows = dayRows(selected.id);
    const decisions = T.planningDecisions.filter((decision) => (decision.relatedDayIds || []).includes(selected.id));
    root.innerHTML = `
      <section class="ux-section" style="margin-top:0">
        <p class="ux-eyebrow">12 DAYS</p><h1>日程</h1><p>日を選ぶと、移動・予約・見るもの・崩れた時の代替まで一続きで確認できます。</p>
        <nav class="ux-day-strip" aria-label="12日の日程">${T.days.map((d) => `<a href="schedule.html?day=${encodeURIComponent(d.id)}#day-detail"${d.id === selected.id ? ' aria-current="true"' : ""}><strong>${fmtDate(d.date)}</strong><span>${esc(d.cityLabel)}</span></a>`).join("")}</nav>
        <div class="ux-day-overview-grid" data-twelve-day-list>${T.days.map((d) => `<a class="ux-card ux-day-overview" href="schedule.html?day=${encodeURIComponent(d.id)}#day-detail"><span class="ux-date">${fmtDate(d.date)}（${esc(d.dow)}）</span><h3>${esc(d.hero)}</h3><span>${esc(d.theme)}</span><span>宿泊：${esc(d.cityLabel)}</span></a>`).join("")}</div>
      </section>
      <section class="ux-section" id="day-detail" data-day-detail="${esc(selected.id)}">
        <div class="ux-day-hero">
          <article class="ux-card"><p class="ux-eyebrow">${fmtFullDate(selected.date)}（${esc(selected.dow)}）・${esc(selected.cityLabel)}</p><h1>${esc(selected.title)}</h1><p>${esc(selected.theme)}</p>
            <div class="ux-chip-row"><span class="ux-chip">主役：${esc(selected.hero)}</span><span class="ux-chip">忙しさ：${esc(selected.load.level)}</span><span class="ux-chip">${esc(selected.mealStatus)}</span></div>
            <dl class="ux-fact-list"><div><dt>宿泊地</dt><dd>${esc(selected.cityLabel)}</dd></div><div><dt>歩行</dt><dd>${esc(selected.walking)}</dd></div><div><dt>移動</dt><dd>${esc(selected.movement)}</dd></div><div><dt>休憩</dt><dd>${esc(selected.rest)}</dd></div></dl>
          </article>
          <article class="ux-card"><h2>今日の方針</h2><p><strong>雨：</strong>${esc(selected.contingency?.rain?.instruction || "屋内を優先")}</p><p><strong>疲労：</strong>${esc(selected.contingency?.fatigue?.instruction || "主役を残して休憩")}</p><p class="ux-warning">${esc(selected.caution)}</p><a href="today.html?date=${esc(selected.date)}&time=${esc(selected.startTime || "09:00")}">旅行中モードで開く</a></article>
        </div>
        ${dayQuickContingency(selected, rows)}
        ${decisions.length ? `<div class="ux-card"><h2>この日の比較</h2><p>候補を一つずつ、旅程への影響まで比較できます。</p><div class="ux-action-row">${decisions.map((decision) => `<a href="decision.html?id=${encodeURIComponent(decision.id)}">${esc(decision.title)}</a>`).join("")}</div></div>` : ""}
        <div class="ux-timeline">${rows.map((row, index) => scheduleItemHtml(row, rows[index - 1], selected)).join("")}</div>
      </section>
      ${dayEndSummary(selected, rows)}`;
  }

  const groupMeta = {
    now: ["今やる", "選定や私的証拠確認など、発売を待たず進められること"],
    release: ["発売待ち", "販売開始後に公式画面で条件を確認"],
    official: ["公式発表待ち", "年末年始営業・運行・警備の公表後に確認"],
    recheck: ["旅行前に再確認", "直前情報と端末で開けるリンクを確認"],
    done: ["完了", "すでに確認済み、または今回は予約しないもの"],
  };

  function taskHtml(task) {
    return `<article class="ux-card ux-task" data-task="${esc(task.id)}"><div><h3>${esc(taskDisplayTitle(task))}</h3>
      <div class="ux-task-meta"><span>大人3名</span><span>${task.deadline ? `期限 ${fmtFullDate(task.deadline)}` : "期限を決める"}</span></div>
      <p>${esc(taskDisplayReason(task))}</p>
      ${task.informationNeeded?.length ? `<details><summary>確認すること</summary><ul>${task.informationNeeded.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></details>` : ""}
      <p class="ux-muted">完了後：予約の有無・対象日時・取消期限だけを記録し、番号やQRは公開領域へ保存しません。</p>
      ${task.actionUrl ? link(task.actionUrl, "公式の確認先") : ""}</div><time>${task.deadline ? fmtDate(task.deadline) : "期限未定"}</time></article>`;
  }

  function hotelHtml(candidate) {
    const price = candidate.totalEur === null ? candidate.priceState : `€${candidate.totalEur.toLocaleString("ja-JP")}（1人 €${candidate.perPersonEur.toLocaleString("ja-JP", { maximumFractionDigits: 2 })}）`;
    return `<article class="ux-card ux-hotel-card" data-hotel="${esc(candidate.id)}"><div class="ux-chip-row"><span class="ux-chip">${esc(candidate.label)}</span><span class="ux-chip is-wait">未予約</span></div>
      <h3>${esc(candidate.name)}</h3><p>${esc(candidate.area)}</p><p class="ux-price">${esc(price)}</p>
      <dl class="ux-compare-list">
        <div><dt>3名の部屋</dt><dd>${esc(candidate.roomName)}／${esc(candidate.roomLayout)}</dd></div>
        <div><dt>広さ</dt><dd>${esc(candidate.roomSize)}</dd></div>
        <div><dt>ベッド</dt><dd>${esc(candidate.adultThirdBed)}</dd></div>
        <div><dt>清潔さ</dt><dd>${esc(candidate.cleanliness)}。${esc(candidate.cleanlinessDetail)}</dd></div>
        <div><dt>無料取消</dt><dd>${esc(candidate.cancellation)}</dd></div>
        <div><dt>支払い</dt><dd>${esc(candidate.payment)}</dd></div>
        <div><dt>良い点</dt><dd>${esc(candidate.itineraryPros)}</dd></div>
        <div><dt>注意点</dt><dd>${esc(candidate.weakness)}</dd></div>
      </dl>
      <div class="ux-action-row">${link(candidate.officialUrl, "公式")}${link(candidate.bookingUrl, "3名で検索")}${link(candidate.mapUrl, "地図")}</div>
    </article>`;
  }

  function initPacking(context) {
    const key = T.packingLegacyMigration?.canonicalKey || "spain-trip-packing-by-id-v1";
    let state = {};
    try { state = JSON.parse(localStorage.getItem(key) || "{}") || {}; } catch { state = {}; }
    const update = () => {
      const boxes = $$("[data-pack-id]", context);
      boxes.forEach((box) => { state[box.dataset.packId] = box.checked; box.closest(".ux-check")?.classList.toggle("is-done", box.checked); });
      localStorage.setItem(key, JSON.stringify(state));
      const done = boxes.filter((box) => box.checked).length;
      const text = $("[data-packing-count]", context);
      const bar = $("[data-packing-progress]", context);
      if (text) text.textContent = `${done}/${boxes.length}`;
      if (bar) bar.style.width = `${boxes.length ? done / boxes.length * 100 : 0}%`;
    };
    $$("[data-pack-id]", context).forEach((box) => {
      box.checked = Boolean(state[box.dataset.packId]);
      box.addEventListener("change", update);
    });
    update();
  }

  function renderPrep() {
    const groups = preparationGroups();
    const params = new URLSearchParams(location.search);
    const selected = groupMeta[params.get("group")] ? params.get("group") : "now";
    const phaseLabels = { normal: "今から準備", "1week": "1週間前", "24h": "出発24時間前", home: "自宅を出る前" };
    const phases = ["normal", "1week", "24h", "home"];
    root.innerHTML = `
      <section class="ux-section" style="margin-top:0"><p class="ux-eyebrow">PREPARATION</p><h1>予約・準備</h1><p>「今できること」と「待つこと」を分け、3人分の予約・持ち物を順番に進めます。</p>
        <nav class="ux-tabs" aria-label="準備の分類">${Object.entries(groupMeta).map(([id, [label]]) => `<a href="prep.html?group=${id}"${selected === id ? ' aria-current="page"' : ""}>${label} ${groups[id].length}</a>`).join("")}</nav>
        <section class="ux-group-panel"><div class="ux-section-head"><div><h2>${groupMeta[selected][0]}</h2><p>${groupMeta[selected][1]}</p></div></div><div class="ux-stack">${groups[selected].map(taskHtml).join("") || '<div class="ux-empty">この分類の項目はありません。</div>'}</div></section>
      </section>
      <section class="ux-section" id="transport"><div class="ux-section-head"><div><p class="ux-eyebrow">BOOKINGS</p><h2>交通・施設予約</h2></div></div>
        <div class="ux-grid">${T.bookings.filter((b) => !/omitted|購入対象にしない/.test(b.publicNote || "")).map((b) => card(b.title, `<div class="ux-chip-row"><span class="ux-chip ${b.status === "confirmed" ? "" : "is-wait"}">${b.status === "confirmed" ? "確定済み" : /待ち|未公表/.test(b.publicNote || "") ? "発売・発表待ち" : "未手配"}</span></div><p>${esc(b.publicNote || "公式条件を確認")}</p><p><strong>期限：</strong>${esc(b.deadline ? fmtFullDate(b.deadline) : "公式発表後に設定")}</p><p><strong>取消：</strong>${esc(b.cancellationDeadline || "購入前に確認")}</p><div class="ux-action-row">${link(b.actionUrl, "公式")}${link(b.ticketUrl, "チケット")}</div>`)).join("")}</div>
      </section>
      <section class="ux-section" id="hotels"><div class="ux-section-head"><div><p class="ux-eyebrow">HOTELS</p><h2>3滞在のホテル比較</h2><p>全件未予約です。同じ項目で2候補を比べ、親が予約時に最終確認します。</p></div></div>
        ${H.stays.map((stay) => `<section class="ux-hotel-stay"><h3>${esc(stay.title)}｜${esc(stay.dates)}</h3><p>${esc(stay.parentSummary)}</p><div class="ux-hotel-compare">${stay.candidates.map(hotelHtml).join("")}</div></section>`).join("")}
        <details class="ux-card" style="margin-top:14px"><summary><strong>予約時に8項目を確認</strong></summary><ol>${H.parentChecklist.map((item) => `<li>${esc(item)}</li>`).join("")}</ol></details>
      </section>
      <section class="ux-section" id="packing"><div class="ux-section-head"><div><p class="ux-eyebrow">PACKING</p><h2>持ち物</h2></div><strong data-packing-count></strong></div><div class="ux-progress"><span data-packing-progress></span></div>
        <div class="ux-check-groups">${phases.map((phase) => {
          const items = T.packingItems.filter((item) => (item.checklistPhases || [item.phase]).includes(phase === "1week" ? "normal" : phase));
          return `<section class="ux-card"><h3>${phaseLabels[phase]}</h3>${items.map((item) => `<label class="ux-check"><input type="checkbox" data-pack-id="${esc(item.id)}"><span>${esc(item.title)}${item.critical ? "（重要）" : ""}</span></label>`).join("")}</section>`;
        }).join("")}</div>
      </section>`;
    initPacking(root);
  }

  function parseTodayContext() {
    const params = new URLSearchParams(location.search);
    const date = params.get("date");
    const selectedDay = T.days.find((d) => d.date === date) || day(params.get("day"));
    const beforeTrip = !selectedDay && new Date() < new Date(`${T.start}T00:00:00+09:00`);
    if (beforeTrip) return { beforeTrip: true };
    const d = selectedDay || T.days.find((x) => x.date === new Date().toISOString().slice(0, 10)) || T.days[0];
    const time = params.get("time") || (selectedDay ? d.startTime : new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: d.defaultTimeZone }));
    const [h, m] = time.split(":").map(Number);
    return { beforeTrip: false, day: d, nowMinutes: h * 60 + m, time };
  }

  function todayState(d, nowMinutes) {
    const rows = dayRows(d.id).filter((row) => startMinutes(row) !== null);
    const now = rows.find((row) => startMinutes(row) <= nowMinutes && (endMinutes(row) ?? startMinutes(row) + 1) > nowMinutes) || null;
    const next = rows.find((row) => startMinutes(row) > nowMinutes) || null;
    return { rows, now, next };
  }

  function todayActionCard(label, row, className, nowMinutes) {
    if (!row) return `<article class="ux-state-card ${className}"><span class="ux-state-label">${label}</span><h2>${label === "NOW" ? "現在の予定なし" : "次の予定なし"}</h2><p>日程詳細で残りを確認してください。</p></article>`;
    const remaining = label === "NEXT" ? Math.max(0, startMinutes(row) - nowMinutes) : Math.max(0, (endMinutes(row) ?? nowMinutes) - nowMinutes);
    return `<article class="ux-state-card ${className}" data-${label.toLowerCase()}="${esc(row.id)}"><span class="ux-state-label">${label}</span><h2>${esc(row.title)}</h2><p>${esc(displayTime(row))}</p>
      <p class="ux-countdown-large">${label === "NEXT" ? `出発まで約${remaining}分` : `終了まで約${remaining}分`}</p>
      ${actionLinks(row, { map: "地図", ticket: "チケット", official: "公式", booking: "予約", })}
    </article>`;
  }

  function renderBeforeTripToday() {
    const groups = preparationGroups();
    root.innerHTML = `<section class="ux-hero"><p class="ux-eyebrow">BEFORE THE TRIP</p><h1>旅行中画面は、出発前は準備モードです</h1><div class="ux-countdown"><span>旅行まで</span><strong>あと${Math.max(0, tripDaysUntil())}日</strong></div><p class="ux-hero-lead">現地ではNOW／NEXTへ自動で切り替わります。今は次の準備と旅程previewを確認します。</p></section>
      <section class="ux-section"><div class="ux-grid">${groups.now.slice(0, 3).map((task) => card(taskDisplayTitle(task), `<p>${esc(taskDisplayReason(task))}</p><a href="prep.html">準備を開く</a>`)).join("")}</div></section>
      <section class="ux-section"><div class="ux-section-head"><h2>旅程preview</h2></div><nav class="ux-day-strip">${T.days.map((d) => `<a href="today.html?date=${esc(d.date)}&time=${esc(d.startTime || "09:00")}"><strong>${fmtDate(d.date)}</strong><span>${esc(d.hero)}</span></a>`).join("")}</nav></section>`;
  }

  function scenarioRows(dayId, ids) {
    const valid = new Set(dayRows(dayId).map((row) => row.id));
    return [...new Set(ids || [])].filter((id) => valid.has(id)).map(scheduleItem).filter(Boolean);
  }

  function normalizedScenario(dayId, data) {
    const keep = scenarioRows(dayId, data.keepItemIds);
    const keepIds = new Set(keep.map((row) => row.id));
    const shorten = scenarioRows(dayId, data.shortenItemIds).filter((row) => !keepIds.has(row.id));
    const shortenIds = new Set(shorten.map((row) => row.id));
    const drop = scenarioRows(dayId, data.dropItemIds).filter((row) => !keepIds.has(row.id) && !shortenIds.has(row.id));
    return { keep, shorten, drop };
  }

  function scenarioList(rows, attribute) {
    return `<ul ${attribute}>${rows.length ? rows.map((row) => `<li data-item-id="${esc(row.id)}">${esc(row.title)}</li>`).join("") : "<li>なし</li>"}</ul>`;
  }

  function renderToday() {
    const parsed = parseTodayContext();
    const isPreview = parsed.beforeTrip;
    const context = isPreview ? { beforeTrip: true, day: day("d1227"), nowMinutes: 11 * 60, time: "11:00" } : parsed;
    const d = context.day;
    const state = todayState(d, context.nowMinutes);
    root.innerHTML = `${isPreview ? '<section class="ux-preview-note"><strong>旅行前の表示例</strong><span>12/27 11:00の画面を操作できます。旅行中は現在時刻へ自動で切り替わります。</span></section>' : ""}<section class="ux-section" style="margin-top:0">
      <div class="ux-section-head"><div><p class="ux-eyebrow">${isPreview ? "NOW / NEXT EXAMPLE" : "LIVE DAY"}｜${fmtFullDate(d.date)} ${esc(context.time)}</p><h1>${esc(d.cityLabel)}・${esc(d.hero)}</h1></div><a href="schedule.html?day=${esc(d.id)}#day-detail">今日の詳細</a></div>
      <div class="ux-today-stage">${todayActionCard("NOW", state.now, "", context.nowMinutes)}${todayActionCard("NEXT", state.next, "next", context.nowMinutes)}</div>
      </section>
      <section class="ux-section"><div class="ux-section-head"><div><p class="ux-eyebrow">CHANGE THE PLAN</p><h2>今の状況を選ぶ</h2></div></div>
        <div class="ux-situation-buttons" role="group" aria-label="状況変更">
          ${[["delay30", "30分遅れている"], ["delay60", "1時間遅れている"], ["fatigue", "疲れた"], ["rain", "雨"], ["majorDelay", "休業"], ["restaurantUnavailable", "食欲がない"]].map(([id, label]) => `<button type="button" data-situation="${id}" aria-pressed="false">${label}</button>`).join("")}
        </div>
        <div class="ux-change-result" data-change-result aria-live="polite"><h3>状況を選ぶと変更案を表示します</h3><p>主役と帰路を守り、何を短縮・削除・代替するかを同じ画面で確認できます。</p></div>
      </section>
      <section class="ux-section"><div class="ux-section-head"><h2>この後の予定</h2></div><div class="ux-stack">${state.rows.filter((row) => startMinutes(row) >= context.nowMinutes).slice(0, 6).map((row) => `<a class="ux-card ux-day-overview" href="schedule.html?day=${esc(d.id)}#item-${esc(row.id)}"><span class="ux-date">${esc(displayTime(row))}</span><h3>${esc(row.title)}</h3><span>${esc(bookingText(row))}</span></a>`).join("") || '<div class="ux-empty">今日の予定は終了しました。</div>'}</div></section>`;
    $$("[data-situation]", root).forEach((button) => button.addEventListener("click", () => {
      $$("[data-situation]", root).forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
      const key = button.dataset.situation;
      const data = d.contingency?.[key] || {};
      const upcomingMeal = state.rows.find((row) => row.kind === "meal" && startMinutes(row) >= context.nowMinutes);
      const result = $("[data-change-result]", root);
      const title = button.textContent.trim();
      const instruction = data.instruction || "次の固定時刻と帰路を守り、任意予定を短縮します。";
      const scenario = normalizedScenario(d.id, data);
      result.dataset.scenarioKey = key;
      result.innerHTML = `<h3>${esc(title)}とき</h3><p>${esc(instruction)}</p>
        <div class="ux-grid">
          ${card("残す", scenarioList(scenario.keep, "data-scenario-keep"))}
          ${card("短縮・削る", `<p><strong>短縮</strong></p>${scenarioList(scenario.shorten, "data-scenario-shorten")}<p><strong>削る</strong></p>${scenarioList(scenario.drop, "data-scenario-drop")}`)}
          ${card("次の食事", `<p>${esc(upcomingMeal?.title || "同じ街区の軽い食事・持帰り")}</p><a href="explore.html?mode=meal&day=${esc(d.id)}">代替を見る</a>`)}
        </div>`;
      normalizeVisibleCopy(result);
    }));
  }

  function articleTheme(a) {
    const text = `${a.id} ${a.title}`;
    if (/gaudi|sagrada|mila|batllo|guell|vicens/i.test(text)) return "Gaudí";
    if (/prado|art|greco|ゲルニカ|美術/i.test(text)) return "美術";
    if (/cathedral|tome|宗教|聖堂|montserrat/i.test(text)) return "宗教";
    if (/food|seafood|料理|市場|バル/i.test(text)) return "食文化";
    return "都市史";
  }

  function articleCard(a) {
    const visits = (a.visitDayIds || []).map(day).filter(Boolean);
    return `<article class="ux-card ux-result-card" data-article-card="${esc(a.id)}"><div class="ux-chip-row"><span class="ux-chip">${esc(articleTheme(a))}</span>${visits.slice(0, 2).map((d) => `<span class="ux-chip">${fmtDate(d.date)}</span>`).join("")}</div><h3>${esc(a.title)}</h3><p>${esc(a.intro?.summary?.split("\n")[0] || a.intro?.whyItMatters || "訪問前に知ると現地で見るものが変わります。")}</p><div class="ux-action-row"><a class="primary" href="learn.html?id=${encodeURIComponent(a.id)}#quick">3分で読む</a><a href="learn.html?id=${encodeURIComponent(a.id)}#onsite">現地2分</a></div></article>`;
  }

  function mealCard(option) {
    const row = scheduleItem(option.scheduleItemId);
    const p = place(option.placeId);
    const dishes = option.dishIds.map(dish).filter(Boolean);
    const fallback = T.mealOptions.find((other) => other.dayId === option.dayId && other.fallbackRank > option.fallbackRank);
    return `<article class="ux-card ux-result-card ux-meal-card" data-meal="${esc(option.id)}"><div class="ux-chip-row"><span class="ux-chip">${esc(fmtDate(day(option.dayId)?.date))}</span><span class="ux-chip">${option.fallbackRank === 1 ? "第一候補" : "代替"}</span></div>
      <h3>${esc(row?.title || p?.nameJa || "食事機会")}</h3>
      <p><strong>狙う料理：</strong>${esc(dishes.map((d) => d.nameJa).join("、") || "当日の食欲で選ぶ")}</p>
      <p><strong>店：</strong>${esc(p?.nameJa || "同じ街区で選ぶ")}／${esc(bookingText(row || { bookingRequirement: option.bookingRequirement }))}</p>
      <p><strong>軽め：</strong>${esc(option.moodTags?.includes("light") ? "向く" : "量を3人で調整")}　<strong>しっかり：</strong>${esc(option.moodTags?.includes("hearty") ? "向く" : "料理数で調整")}</p>
      <p><strong>満席時：</strong>${esc(fallback ? scheduleItem(fallback.scheduleItemId)?.title || place(fallback.placeId)?.nameJa : day(option.dayId)?.contingency?.restaurantUnavailable?.instruction || "同じ街区の予約不要候補")}</p>
      <div class="ux-action-row">${row ? `<a href="schedule.html?day=${esc(row.dayId)}#item-${esc(row.id)}">日程</a>` : ""}${p?.mapUrl ? link(p.mapUrl, "地図") : ""}${p?.officialUrl ? link(p.officialUrl, "公式") : ""}</div>
    </article>`;
  }

  function renderExplore() {
    const params = new URLSearchParams(location.search);
    const mode = ["day", "city", "theme", "meal"].includes(params.get("mode")) ? params.get("mode") : null;
    let results = "";
    if (!mode) {
      results = `<div class="ux-day-overview-grid">${T.days.map((d) => `<a class="ux-card ux-day-overview" href="explore.html?mode=day&day=${esc(d.id)}"><span class="ux-date">${fmtDate(d.date)}・${esc(d.cityLabel)}</span><h3>${esc(d.hero)}</h3><span>この日に読む・食べる</span></a>`).join("")}</div>`;
    } else if (mode === "day") {
      const selected = day(params.get("day")) || T.days[0];
      const articles = T.learningArticles.filter((a) => (a.visitDayIds || []).includes(selected.id));
      const meals = T.mealOptions.filter((option) => option.dayId === selected.id);
      results = `<nav class="ux-day-strip">${T.days.map((d) => `<a href="explore.html?mode=day&day=${esc(d.id)}"${d.id === selected.id ? ' aria-current="true"' : ""}><strong>${fmtDate(d.date)}</strong><span>${esc(d.cityLabel)}</span></a>`).join("")}</nav>
        <h2>${fmtDate(selected.date)}・${esc(selected.hero)}</h2><div class="ux-result-grid">${articles.map(articleCard).join("") || '<div class="ux-empty">この日の専用記事はありません。</div>'}</div>
        <section class="ux-section"><h2>この日の食事機会</h2><div class="ux-result-grid">${meals.map(mealCard).join("") || '<div class="ux-empty">食事機会は日程で確認してください。</div>'}</div></section>`;
    } else if (mode === "city") {
      const city = params.get("city") || "barcelona";
      const cityDays = T.days.filter((d) => d.cityId === city || (city === "madrid" && d.cityId === "madrid"));
      const ids = new Set(cityDays.map((d) => d.id));
      const articles = T.learningArticles.filter((a) => (a.visitDayIds || []).some((id) => ids.has(id)));
      results = `<div class="ux-filter-chips">${[["barcelona","Barcelona"],["madrid","Madrid"],["toledo","Toledo"],["montserrat","Montserrat"]].map(([id,label]) => `<a class="ux-button ${id === city ? "primary" : ""}" href="explore.html?mode=city&city=${id}">${label}</a>`).join("")}</div><div class="ux-result-grid">${articles.map(articleCard).join("")}</div>`;
    } else if (mode === "theme") {
      const selected = params.get("theme") || "Gaudí";
      const articles = T.learningArticles.filter((a) => articleTheme(a) === selected);
      results = `<div class="ux-filter-chips">${["Gaudí","美術","都市史","宗教","食文化"].map((label) => `<a class="ux-button ${label === selected ? "primary" : ""}" href="explore.html?mode=theme&theme=${encodeURIComponent(label)}">${label}</a>`).join("")}</div><div class="ux-result-grid">${articles.map(articleCard).join("")}</div>`;
    } else {
      const selectedDay = day(params.get("day"));
      const meals = T.mealOptions.filter((option) => !selectedDay || option.dayId === selectedDay.id);
      results = `<nav class="ux-day-strip"><a href="explore.html?mode=meal"${!selectedDay ? ' aria-current="true"' : ""}><strong>全日</strong><span>食事機会</span></a>${T.days.map((d) => `<a href="explore.html?mode=meal&day=${esc(d.id)}"${selectedDay?.id === d.id ? ' aria-current="true"' : ""}><strong>${fmtDate(d.date)}</strong><span>${esc(d.cityLabel)}</span></a>`).join("")}</nav><div class="ux-result-grid">${meals.map(mealCard).join("") || '<div class="ux-empty">該当する食事機会はありません。</div>'}</div>`;
    }
    root.innerHTML = `<section class="ux-section" style="margin-top:0"><p class="ux-eyebrow">LEARN & EAT</p><h1>学ぶ・食べる</h1><p>記事一覧からではなく、旅行で使う場面から探します。</p>
      <div class="ux-route-chooser">
        ${[["day","日程から","訪問日に必要な記事と食事"],["city","都市から","Barcelona・Madrid・Toledo・Montserrat"],["theme","テーマから","建築・美術・歴史・宗教・食文化"],["meal","食事機会から","料理・店・満席時代替を一緒に"]].map(([id,label,desc]) => `<a class="ux-route-button" href="explore.html?mode=${id}"${mode === id ? ' aria-pressed="true"' : ""}><strong>${label}</strong><span>${desc}</span></a>`).join("")}
      </div></section><section class="ux-section" data-explore-results>${results}</section>`;
  }

  function renderBlock(block) {
    const sources = block.sourceIds?.length ? `<small class="ux-muted">根拠は記事末の公式情報へ</small>` : "";
    if (block.type === "paragraph") return `<p>${esc(block.text)}</p>${sources}`;
    if (block.type === "summary" || block.type === "callout") return `<aside class="ux-note">${block.title ? `<h3>${esc(block.title)}</h3>` : ""}<p>${esc(block.text)}</p></aside>${sources}`;
    if (block.type === "key-points" || block.type === "onsite-checklist") return `<ul class="${block.type === "onsite-checklist" ? "ux-onsite-check" : ""}">${(block.items || []).map((item) => `<li>${esc(typeof item === "string" ? item : item.text || item.title)}</li>`).join("")}</ul>${sources}`;
    if (block.type === "comparison") return `<div class="ux-grid">${(block.columns || []).map((column) => card(column.title || "比較", `<p>${esc(column.text || "")}</p>`)).join("")}</div>${sources}`;
    if (block.type === "timeline") {
      const entries = block.entries || block.items || [];
      return `<ol>${entries.map((entry) => `<li><strong>${esc(entry.date || entry.year || entry.label || "")}</strong> ${esc(entry.text || entry.description || entry.title || "")}</li>`).join("")}</ol>${sources}`;
    }
    return block.text ? `<p>${esc(block.text)}</p>${sources}` : "";
  }

  function sectionHtml(section) {
    return `<details open id="section-${esc(section.id)}"><summary>${esc(section.title)}</summary><div>${section.blocks.map(renderBlock).join("")}</div></details>`;
  }

  function sourceList(a) {
    const ids = unique([
      ...(a.sourceIds || []),
      ...a.deepSections.flatMap((section) => [...(section.sourceIds || []), ...section.blocks.flatMap((block) => block.sourceIds || [])]),
      ...a.onsiteSections.flatMap((section) => [...(section.sourceIds || []), ...section.blocks.flatMap((block) => block.sourceIds || [])]),
    ]);
    return ids.map((id) => byId(T.sources, id)).filter(Boolean).map((s) => `<li>${link(s.url, s.title)} <span class="ux-muted">確認日 ${esc(s.checkedAt || "旅行前に再確認")}</span></li>`).join("");
  }

  function renderLearn() {
    const params = new URLSearchParams(location.search);
    const a = article(params.get("id"));
    if (!a) {
      root.innerHTML = `<section class="ux-compat ux-card"><h1>記事が指定されていません</h1><p>日程、都市、テーマ、食事機会から記事を選んでください。</p><div class="ux-action-row"><a class="primary" href="explore.html">学ぶ・食べるへ</a></div></section>`;
      return;
    }
    const visits = (a.visitDayIds || []).map(day).filter(Boolean);
    const relatedPlaces = unique([a.placeId, ...(a.relatedPlaceIds || [])]).map(place).filter(Boolean);
    const relatedArticles = unique(relatedPlaces.flatMap((p) => p.articleIds || [])).filter((id) => id !== a.id).map(article).filter(Boolean);
    root.innerHTML = `<article class="ux-article" data-learning-article="${esc(a.id)}">
      <header class="ux-article-header"><p class="ux-eyebrow">${esc(articleTheme(a))}</p><h1>${esc(a.title)}</h1><div class="ux-chip-row">${visits.map((d) => `<a class="ux-chip" href="schedule.html?day=${esc(d.id)}#day-detail">訪問 ${fmtDate(d.date)}</a>`).join("")}</div><p>${esc(a.intro?.whyItMatters || "訪問前に知ると、現地で見る順番が具体的になります。")}</p></header>
      <nav class="ux-reading-switch" aria-label="読み方"><a href="#quick">3分</a><a href="#deep">15分</a><a href="#onsite">現地2分</a></nav>
      <section class="ux-learning-layer" id="quick"><p class="ux-eyebrow">初心者向け3分</p><h2>まずこれだけ</h2>${String(a.intro?.summary || "").split(/\n\s*\n/).filter(Boolean).map((text) => `<p>${esc(text)}</p>`).join("")}<ul>${(a.intro?.keyPoints || []).map((point) => `<li>${esc(point)}</li>`).join("")}</ul></section>
      <section class="ux-learning-layer" id="deep"><p class="ux-eyebrow">本人向け15分</p><h2>深く理解する</h2>${a.deepSections.map(sectionHtml).join("")}</section>
      <section class="ux-learning-layer" id="onsite"><p class="ux-eyebrow">現地2分</p><h2>この順番で見る</h2>${a.onsiteSections.map(sectionHtml).join("")}
        <div class="ux-action-row">${visits[0] ? `<a class="primary" href="schedule.html?day=${esc(visits[0].id)}#day-detail">訪問日へ戻る</a>` : ""}${relatedPlaces[0]?.mapUrl ? link(relatedPlaces[0].mapUrl, "地図") : ""}${relatedPlaces[0]?.officialUrl ? link(relatedPlaces[0].officialUrl, "公式サイト") : ""}</div>
      </section>
      <section class="ux-learning-layer"><h2>次に読む</h2><div class="ux-result-grid">${relatedArticles.slice(0, 3).map(articleCard).join("") || '<p>日程から次の記事を選べます。</p>'}</div></section>
      <details class="ux-learning-layer"><summary><strong>公式情報・根拠</strong></summary><ul>${sourceList(a)}</ul></details>
    </article>`;
  }

  const RECORDS_KEY = "spain-trip-ux-records-v1";
  const EXPENSES_KEY = "spain-trip-ux-expenses-v1";
  const readJson = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key) || "") || fallback; } catch { return fallback; }
  };
  const saveJson = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const download = (name, body, type) => {
    const url = URL.createObjectURL(new Blob([body], { type }));
    const anchor = Object.assign(document.createElement("a"), { href: url, download: name });
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  function recordCard(record) {
    return `<article class="ux-card ux-saved-card" data-record-id="${esc(record.id)}"><div class="ux-chip-row"><span class="ux-chip">${record.visited === "yes" ? "行った" : record.visited === "no" ? "行かなかった" : "一部変更"}</span>${record.best ? '<span class="ux-chip">ベスト体験</span>' : ""}</div><h3>${esc(record.title || "旅の記録")}</h3><time>${esc(record.date || "")}</time><p>${esc(record.impression || "感想なし")}</p>${record.food ? `<p><strong>食べたもの：</strong>${esc(record.food)}</p>` : ""}${record.change ? `<p><strong>予定変更：</strong>${esc(record.change)}</p>` : ""}${record.photoRef ? `<p><strong>写真参照：</strong>${esc(record.photoRef)}</p>` : ""}</article>`;
  }

  function renderRecords() {
    const records = readJson(RECORDS_KEY, []);
    root.innerHTML = `<section class="ux-section" style="margin-top:0"><p class="ux-eyebrow">MEMORIES</p><h1>記録</h1><p>現地で30秒。行った場所、食べたもの、感想、変更をこの端末へ保存します。</p></section>
      <section class="ux-section"><div class="ux-grid two"><form class="ux-card ux-form" data-record-form>
        <h2>体験を記録</h2>
        <div class="ux-form-grid"><label class="ux-field"><span>日付</span><input name="date" type="date" min="${T.start}" max="${T.end}" required></label><label class="ux-field"><span>場所・体験</span><input name="title" required placeholder="例：サグラダ・ファミリア"></label></div>
        <div class="ux-choice-row"><label><input type="radio" name="visited" value="yes" checked> 行った</label><label><input type="radio" name="visited" value="no"> 行かなかった</label><label><input type="radio" name="visited" value="changed"> 一部変更</label></div>
        <label class="ux-field"><span>食べたもの</span><input name="food" placeholder="料理名・店"></label>
        <label class="ux-field"><span>感想</span><textarea name="impression" required placeholder="一番印象に残ったこと"></textarea></label>
        <label class="ux-field"><span>予定変更</span><input name="change" placeholder="雨で公園を短縮、など"></label>
        <label class="ux-field"><span>写真参照</span><input name="photoRef" placeholder="端末アルバム名・ファイル名だけ（画像本体は保存しません）"></label>
        <label class="ux-check"><input type="checkbox" name="best"><span>ベスト体験にする</span></label>
        <button class="ux-button primary" type="submit">この端末に保存</button><p class="ux-muted" data-record-message aria-live="polite"></p>
      </form>
      <article class="ux-card"><h2>精算も続けて記録</h2><p>金額、通貨、支払者、対象者、3人の分け方、未精算／精算済みを管理します。</p><div class="ux-action-row"><a class="primary" href="budget.html">予算・精算を開く</a></div><h3>保存について</h3><ul><li>このブラウザだけに保存</li><li>写真本体や予約番号は保存しない</li><li>JSONで手元へ書き出せる</li></ul></article></div></section>
      <section class="ux-section"><div class="ux-section-head"><h2>保存した記録</h2><div class="ux-action-row"><button type="button" data-export-records>JSON出力</button></div></div><div class="ux-result-grid" data-record-list>${records.map(recordCard).join("") || '<div class="ux-empty">まだ記録はありません。</div>'}</div></section>`;
    $("[data-record-form]", root).addEventListener("submit", (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const next = {
        id: `memory-${Date.now()}`, createdAt: new Date().toISOString(),
        date: form.get("date"), title: form.get("title"), visited: form.get("visited"),
        food: form.get("food"), impression: form.get("impression"), change: form.get("change"),
        photoRef: form.get("photoRef"), best: form.get("best") === "on",
      };
      const current = readJson(RECORDS_KEY, []);
      current.unshift(next);
      saveJson(RECORDS_KEY, current);
      $("[data-record-list]", root).innerHTML = current.map(recordCard).join("");
      event.currentTarget.reset();
      $("[data-record-message]", root).textContent = "保存しました。再読み込み後もこの端末で表示されます。";
    });
    $("[data-export-records]", root).addEventListener("click", () => download("spain-trip-records.json", JSON.stringify(readJson(RECORDS_KEY, []), null, 2), "application/json"));
  }

  function migrateLegacyBudget() {
    const current = readJson(EXPENSES_KEY, { version: 1, expenses: [], legacyBudgetV3: null });
    if (current.legacyBudgetV3 === null) {
      const raw = localStorage.getItem("spain-trip-budget-v3");
      if (raw) {
        try { current.legacyBudgetV3 = JSON.parse(raw); } catch { current.legacyBudgetV3 = { raw }; }
        current.legacyMigratedAt = new Date().toISOString();
        saveJson(EXPENSES_KEY, current);
      }
    }
    return current;
  }

  function expenseSummary(expenses) {
    const byCurrency = {};
    expenses.forEach((expense) => { byCurrency[expense.currency] = (byCurrency[expense.currency] || 0) + Number(expense.amount || 0); });
    return Object.entries(byCurrency).map(([currency, amount]) => `${currency} ${amount.toLocaleString("ja-JP", { maximumFractionDigits: 2 })}`).join("／") || "入力なし";
  }

  function expenseRow(expense) {
    const each = expense.split === "equal" ? Number(expense.amount || 0) / Math.max(1, expense.people?.length || 3) : null;
    return `<article class="ux-card ux-expense-row" data-expense-id="${esc(expense.id)}"><div><strong>${esc(expense.title)}</strong><p class="ux-muted">${esc(expense.date || "")}${expense.receiptRef ? `／レシート ${esc(expense.receiptRef)}` : ""}</p></div><div><span class="ux-muted">金額</span><strong>${esc(expense.currency)} ${Number(expense.amount).toLocaleString("ja-JP")}</strong></div><div><span class="ux-muted">支払者</span><strong>${esc(expense.payer)}</strong></div><div><span class="ux-muted">分け方</span><strong>${expense.split === "equal" ? `${expense.people.length}人で均等${each !== null ? `（各${each.toFixed(2)}）` : ""}` : "個別精算"}</strong></div><button class="ux-button" type="button" data-toggle-expense="${esc(expense.id)}">${expense.settled ? "精算済み" : "未精算"}</button></article>`;
  }

  function renderBudget() {
    const state = migrateLegacyBudget();
    const expenses = state.expenses || [];
    const open = expenses.filter((x) => !x.settled);
    root.innerHTML = `<section class="ux-section" style="margin-top:0"><p class="ux-eyebrow">EXPENSES & SETTLEMENT</p><h1>予算・精算</h1><p>旅行前の見積と、旅行中・旅行後の支出を分けて管理します。決済情報は入力しません。</p></section>
      <section class="ux-section"><div class="ux-summary-band"><div><span>登録した支出</span><strong>${expenses.length}件</strong></div><div><span>合計</span><strong>${esc(expenseSummary(expenses))}</strong></div><div><span>未精算</span><strong>${open.length}件</strong></div><div><span>旧入力</span><strong>${state.legacyBudgetV3 ? "引継ぎ保存済み" : "なし"}</strong></div></div></section>
      <section class="ux-section"><div class="ux-grid two"><form class="ux-card ux-form" data-expense-form>
        <h2>支出を追加</h2><div class="ux-form-grid"><label class="ux-field"><span>日付</span><input type="date" name="date" required></label><label class="ux-field"><span>項目</span><input name="title" required placeholder="夕食、地下鉄、チケット"></label></div>
        <div class="ux-form-grid"><label class="ux-field"><span>金額</span><input type="number" min="0" step=".01" name="amount" required inputmode="decimal"></label><label class="ux-field"><span>通貨</span><select name="currency"><option>EUR</option><option>JPY</option><option>CNY</option></select></label></div>
        <div class="ux-form-grid"><label class="ux-field"><span>支払者</span><select name="payer"><option>本人</option><option>親1</option><option>親2</option></select></label><label class="ux-field"><span>分け方</span><select name="split"><option value="equal">対象者で均等</option><option value="custom">個別に精算</option></select></label></div>
        <fieldset><legend>対象者</legend><div class="ux-choice-row"><label><input type="checkbox" name="people" value="本人" checked>本人</label><label><input type="checkbox" name="people" value="親1" checked>親1</label><label><input type="checkbox" name="people" value="親2" checked>親2</label></div></fieldset>
        <label class="ux-field"><span>レシート参照</span><input name="receiptRef" placeholder="写真番号・店名だけ（画像本体は保存しません）"></label>
        <label class="ux-check"><input type="checkbox" name="settled"><span>すでに精算済み</span></label>
        <button class="ux-button primary" type="submit">支出を保存</button><p data-expense-message aria-live="polite"></p>
      </form>
      <article class="ux-card"><h2>旅行前の見方</h2><ul><li>確定：航空券など事実があるもの</li><li>候補：ホテルなど親が比較するもの</li><li>見積：価格を再確認するもの</li><li>未取得：Moxyなど対象日の金額待ち</li><li>現地税：予約画面で別記を確認</li></ul><p class="ux-note">旧予算入力がある場合は、元の保存領域を変更せず、そのまま新しい保存データ内にも退避します。</p><div class="ux-action-row"><a href="records.html">旅の記録へ</a><button type="button" data-export-expenses>CSV出力</button><button type="button" data-export-expenses-json>JSON出力</button></div></article></div></section>
      <section class="ux-section"><div class="ux-section-head"><h2>支出と精算状態</h2></div><div class="ux-stack" data-expense-list>${expenses.map(expenseRow).join("") || '<div class="ux-empty">まだ支出はありません。</div>'}</div></section>`;
    const refresh = () => {
      const latest = migrateLegacyBudget();
      $("[data-expense-list]", root).innerHTML = latest.expenses.length ? latest.expenses.map(expenseRow).join("") : '<div class="ux-empty">まだ支出はありません。</div>';
      $$("[data-toggle-expense]", root).forEach((button) => button.addEventListener("click", () => {
        const current = migrateLegacyBudget();
        const item = current.expenses.find((x) => x.id === button.dataset.toggleExpense);
        if (item) item.settled = !item.settled;
        saveJson(EXPENSES_KEY, current);
        renderBudget();
      }));
    };
    $("[data-expense-form]", root).addEventListener("submit", (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const people = form.getAll("people");
      if (!people.length) { $("[data-expense-message]", root).textContent = "対象者を1人以上選んでください。"; return; }
      const current = migrateLegacyBudget();
      current.expenses.unshift({
        id: `expense-${Date.now()}`, createdAt: new Date().toISOString(), date: form.get("date"),
        title: form.get("title"), amount: Number(form.get("amount")), currency: form.get("currency"),
        payer: form.get("payer"), split: form.get("split"), people, settled: form.get("settled") === "on",
        receiptRef: form.get("receiptRef"),
      });
      saveJson(EXPENSES_KEY, current);
      event.currentTarget.reset();
      $("[data-expense-message]", root).textContent = "保存しました。";
      renderBudget();
    });
    $("[data-export-expenses]", root).addEventListener("click", () => {
      const current = migrateLegacyBudget().expenses;
      const rows = [["日付","項目","金額","通貨","支払者","対象者","分け方","状態","レシート参照"], ...current.map((x) => [x.date,x.title,x.amount,x.currency,x.payer,x.people.join("・"),x.split,x.settled ? "精算済み" : "未精算",x.receiptRef || ""])];
      const csv = "\uFEFF" + rows.map((row) => row.map((v) => `"${String(v).replaceAll('"','""')}"`).join(",")).join("\r\n");
      download("spain-trip-expenses.csv", csv, "text/csv;charset=utf-8");
    });
    $("[data-export-expenses-json]", root).addEventListener("click", () => download("spain-trip-expenses.json", JSON.stringify(migrateLegacyBudget(), null, 2), "application/json"));
    refresh();
  }

  function renderDecision() {
    const id = new URLSearchParams(location.search).get("id");
    const d = byId(T.planningDecisions, id) || T.planningDecisions.find((decision) => (decision.options || []).some((option) => option.id === id));
    if (!d) {
      root.innerHTML = `<section class="ux-compat ux-card"><h1>比較対象が指定されていません</h1><p>日程にある比較リンクから、一つの判断を開いてください。</p><div class="ux-action-row"><a class="primary" href="index.html">ホームへ戻る</a></div></section>`;
      return;
    }
    const selected = byId(d.options, d.selectedOptionId);
    root.innerHTML = `<section class="ux-section" style="margin-top:0"><p class="ux-eyebrow">COMPARE ONE DECISION</p><h1>${esc(d.title)}</h1><p>${esc(d.question)}</p>
      <div class="ux-card"><h2>現在の選択</h2><p><strong>${esc(selected?.label || "まだ決めない")}</strong></p><p>${esc(d.decisionReason || "関連日程と予約条件を確認して判断します。")}</p><div class="ux-action-row">${(d.relatedDayIds || []).map((id) => `<a href="schedule.html?day=${esc(id)}#day-detail">${fmtDate(day(id)?.date)}の日程</a>`).join("")}</div></div></section>
      <section class="ux-section"><div class="ux-section-head"><h2>選択肢を比較</h2></div><div class="ux-decision-options">${d.options.map((option) => `<article class="ux-card ux-decision-option ${option.id === d.selectedOptionId ? "is-selected" : ""}"><div class="ux-chip-row">${option.id === d.selectedOptionId ? '<span class="ux-chip">現在の案</span>' : ""}</div><h3>${esc(option.label)}</h3><p>${esc(option.description || "")}</p><div class="ux-grid two"><div><h4>良い点</h4><ul>${(option.pros || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div><div><h4>注意点</h4><ul>${(option.cons || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div></div><div class="ux-mini-metrics">${[["疲労",option.fatigueImpact],["移動",option.mobilityImpact],["食",option.foodImpact],["天候",option.weatherRisk],["予約",option.bookingRisk]].map(([label,value]) => `<div><strong>${label}</strong><br>${esc(value || "差なし")}</div>`).join("")}</div></article>`).join("")}</div></section>`;
  }

  function renderSpots() {
    const id = new URLSearchParams(location.search).get("id");
    const p = place(id);
    if (!p) {
      root.innerHTML = `<section class="ux-section" style="margin-top:0"><p class="ux-eyebrow">PLACE DETAILS</p><h1>場所を探す</h1><p>このページは日程や学習から必要な時だけ開く補助ページです。</p><div class="ux-place-list">${T.places.map((row) => `<a class="ux-card ux-day-overview" href="spots.html?id=${encodeURIComponent(row.id)}"><span class="ux-date">${esc(cityName(row.cityId))}</span><h3>${esc(row.nameJa)}</h3><span>${esc(row.area || row.kind)}</span></a>`).join("")}</div></section>`;
      return;
    }
    const rows = T.scheduleItems.filter((row) => row.placeId === p.id);
    const articles = (p.articleIds || []).map(article).filter(Boolean);
    root.innerHTML = `<article class="ux-article"><header class="ux-article-header"><p class="ux-eyebrow">${esc(cityName(p.cityId))}・${esc(p.area || "")}</p><h1>${esc(p.nameJa)}</h1><p>${esc(p.nameLocal || "")}</p><p>${esc(p.summary || "日程から必要情報を確認します。")}</p><div class="ux-action-row">${link(p.mapUrl, "地図")}${link(p.officialUrl, "公式サイト")}</div></header>
      <section class="ux-learning-layer"><h2>訪問予定</h2>${rows.map((row) => `<a class="ux-card ux-day-overview" href="schedule.html?day=${esc(row.dayId)}#item-${esc(row.id)}"><span class="ux-date">${fmtDate(day(row.dayId)?.date)} ${displayTime(row)}</span><h3>${esc(row.title)}</h3></a>`).join("") || "<p>今回の旅程では訪問予定なし。</p>"}</section>
      <section class="ux-learning-layer"><h2>学ぶ</h2><div class="ux-result-grid">${articles.map(articleCard).join("") || "<p>専用記事なし。</p>"}</div></section></article>`;
  }

  function renderCompat(view) {
    const configs = {
      info: ["情報は利用場面ごとに分かれました", "予約・準備は準備画面、当日の行動は旅行中、思い出と精算は記録・精算で確認します。", [["予約・準備","prep.html"],["旅行中","today.html"],["記録・精算","records.html"]]],
      food: ["食事計画は三つの場面から選びます", "旅行前は食文化を学び、日程ではその日の食事を確認し、現地では食欲や満席に合わせて選び直します。", [["学ぶ・食べる","explore.html?mode=meal"],["日程","schedule.html"],["旅行中","today.html"]]],
    };
    const [title, text, links] = configs[view];
    root.innerHTML = `<section class="ux-compat ux-card"><p class="ux-eyebrow">GUIDE</p><h1>${title}</h1><p>${text}</p><div class="ux-action-row">${links.map(([label,url], index) => `<a class="${index === 0 ? "primary" : ""}" href="${url}">${label}</a>`).join("")}</div></section>`;
  }

  const renderers = {
    home: renderHome, schedule: renderSchedule, prep: renderPrep, today: renderToday,
    explore: renderExplore, learn: renderLearn, records: renderRecords, budget: renderBudget,
    decision: renderDecision, spots: renderSpots, info: () => renderCompat("info"), food: () => renderCompat("food"),
  };

  initNavigation();
  const view = document.body.dataset.view;
  if (renderers[view]) {
    renderers[view]();
    normalizeVisibleCopy(root);
  }
})();
