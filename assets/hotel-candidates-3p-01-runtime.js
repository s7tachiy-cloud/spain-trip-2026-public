(function () {
  "use strict";

  const data = window.HOTEL_CANDIDATES_3P;
  const host = document.querySelector("[data-phase1-prep]");
  if (!data || !host) return;

  const esc = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  const euro = (value) =>
    Number.isFinite(value)
      ? new Intl.NumberFormat("ja-JP", { style: "currency", currency: "EUR" }).format(value)
      : "再取得待ち（推測なし）";
  const external = ' target="_blank" rel="noopener noreferrer"';
  const publicThirdBedText = (candidate) =>
    candidate.id === "room-mate-alba-3p"
      ? "3人を2室に分ける構成。3人目のsofa／extra bedなし"
      : candidate.adultThirdBed;

  const candidateCard = (candidate) => `
    <article class="hotel-3p-card" data-hotel-candidate-id="${esc(candidate.id)}">
      <header>
        <span class="hotel-3p-label">${esc(candidate.label)}</span>
        <span class="p1-badge tone-warning">未予約</span>
        <span class="p1-badge tone-info">親が予約する候補</span>
        <h3>${esc(candidate.name)}</h3>
        <p>${esc(candidate.area)}</p>
      </header>
      <dl class="hotel-3p-facts">
        <div><dt>3名の部屋</dt><dd><strong>${esc(candidate.roomName)}</strong><br>${esc(candidate.roomLayout)}<br>${esc(publicThirdBedText(candidate))}</dd></div>
        <div><dt>広さ・荷物</dt><dd>${esc(candidate.roomSize)}／${esc(candidate.luggageFit)}</dd></div>
        <div><dt>3名総額</dt><dd><strong>${euro(candidate.totalEur)}</strong><br>1人あたり ${euro(candidate.perPersonEur)}<br><small>${esc(candidate.rateBasis)}</small></dd></div>
        <div><dt>取消・支払</dt><dd>${esc(candidate.cancellation)}<br>${esc(candidate.payment)}<br><small>${esc(candidate.taxNote)}</small></dd></div>
        <div><dt>清潔さ</dt><dd><strong>${esc(candidate.cleanliness)}</strong><br>${esc(candidate.cleanlinessDetail)}</dd></div>
        <div><dt>旅程上の利点</dt><dd>${esc(candidate.itineraryPros)}</dd></div>
        <div><dt>弱点</dt><dd>${esc(candidate.weakness)}</dd></div>
        <div><dt>確認日</dt><dd>${esc(data.checkedAt)}</dd></div>
      </dl>
      <nav class="p1-links" aria-label="${esc(candidate.name)}のリンク">
        <a href="${esc(candidate.officialUrl)}"${external}>公式</a>
        <a href="${esc(candidate.bookingUrl)}"${external}>予約検索</a>
        <a href="${esc(candidate.mapUrl)}"${external}>地図</a>
        <a href="${esc(candidate.reviewUrl)}"${external}>最近の口コミ</a>
      </nav>
    </article>`;

  const section = document.createElement("section");
  section.className = "p1-panel hotel-3p-section";
  section.id = "hotel-candidates-3p";
  section.dataset.hotelCandidates = "3-adults";
  section.innerHTML = `
    <header class="hotel-3p-intro">
      <p class="kicker">STAY OPTIONS</p>
      <h2>大人3名のホテル候補</h2>
      <p>${esc(data.travelerCondition)}。ホテルは確定せず、親がこの比較を見て最終予約します。</p>
      <div class="p1-badges"><span class="p1-badge tone-warning">${esc(data.reservationState)}</span><span class="p1-badge tone-info">親が予約する候補</span></div>
    </header>
    ${data.stays
      .map(
        (stay) => `
        <section class="hotel-3p-stay" data-hotel-stay-id="${esc(stay.id)}">
          <header><h3>${esc(stay.title)}</h3><p><strong>${esc(stay.dates)}</strong></p><p>${esc(stay.parentSummary)}</p></header>
          <div class="hotel-3p-grid">${stay.candidates.map(candidateCard).join("")}</div>
        </section>`,
      )
      .join("")}
    <aside class="hotel-3p-checklist">
      <h3>親が予約画面で確認すること</h3>
      <ul>${data.parentChecklist.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
      <p><strong>予約はまだ行っていません。</strong>表示価格・在庫・取消条件は変わるため、予約直前に同じ3 adults条件で再確認してください。</p>
    </aside>`;

  const taskSection = host.querySelector("#tasks");
  taskSection?.insertAdjacentElement("afterend", section);
  const jumpNav = host.querySelector(".p1-jumps");
  if (jumpNav && !jumpNav.querySelector('a[href="#hotel-candidates-3p"]')) {
    const link = document.createElement("a");
    link.href = "#hotel-candidates-3p";
    link.textContent = "ホテル候補";
    jumpNav.append(link);
  }
})();
