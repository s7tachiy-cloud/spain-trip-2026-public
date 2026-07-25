(function () {
  "use strict";

  const T = window.TRIP;
  const H = window.HOTEL_CANDIDATES_3P;
  if (!T) return;

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
  const article = (id) => T.learningArticles.find((row) => row.id === id);
  const scheduleItem = (id) => T.scheduleItems.find((row) => row.id === id);
  const publicThirdBedText = (candidate) =>
    candidate.id === "room-mate-alba-3p"
      ? "3人を2室に分ける構成。3人目のsofa／extra bedなし"
      : candidate.adultThirdBed;

  function addHomeEntry() {
    const home = document.querySelector("[data-home-dashboard]");
    if (!home || home.querySelector("[data-parent-entry]")) return;
    const hero = home.querySelector(".p1-hero");
    const html = `
      <section class="parent-ready-home-entry" data-parent-entry>
        <div><span>家族で最初に見るページ</span><h2>親と旅行全体・ホテル・今後の手配を確認する</h2><p>大人3名の旅程を約5分で確認できます。</p></div>
        <a class="primary-button" href="decision.html">親と確認する</a>
      </section>`;
    if (hero) hero.insertAdjacentHTML("afterend", html);
    else home.insertAdjacentHTML("afterbegin", html);
  }

  function hotelCard(candidate) {
    return `
      <article class="parent-hotel-card" data-parent-hotel="${esc(candidate.id)}">
        <header>
          <span class="hotel-3p-label">${esc(candidate.label)}</span>
          <span class="p1-badge tone-warning">未予約</span>
          <span class="p1-badge tone-info">親が予約する候補</span>
          <h3>${esc(candidate.name)}</h3>
          <p>${esc(candidate.area)}</p>
        </header>
        <dl>
          <div><dt>大人3名の部屋</dt><dd><strong>${esc(candidate.roomName)}</strong><br>${esc(candidate.roomLayout)}<br>${esc(publicThirdBedText(candidate))}</dd></div>
          <div><dt>広さ</dt><dd>${esc(candidate.roomSize)}／${esc(candidate.luggageFit)}</dd></div>
          <div><dt>3名総額</dt><dd><strong>${euro(candidate.totalEur)}</strong><br>1人あたり ${euro(candidate.perPersonEur)}<br><small>${esc(candidate.rateBasis)}</small></dd></div>
          <div><dt>取消・支払</dt><dd>${esc(candidate.cancellation)}<br>${esc(candidate.payment)}<br><small>${esc(candidate.taxNote)}</small></dd></div>
          <div><dt>清潔さ</dt><dd><strong>${esc(candidate.cleanliness)}</strong><br>${esc(candidate.cleanlinessDetail)}</dd></div>
          <div><dt>旅程上の利点</dt><dd>${esc(candidate.itineraryPros)}</dd></div>
          <div><dt>弱点</dt><dd>${esc(candidate.weakness)}</dd></div>
          <div><dt>確認日</dt><dd>${esc(H.checkedAt)}</dd></div>
        </dl>
        <nav class="p1-links" aria-label="${esc(candidate.name)}の確認先">
          <a href="${esc(candidate.officialUrl)}"${external}>公式 ↗</a>
          <a href="${esc(candidate.bookingUrl)}"${external}>3名で予約検索 ↗</a>
          <a href="${esc(candidate.mapUrl)}"${external}>地図 ↗</a>
          <a href="${esc(candidate.reviewUrl)}"${external}>最近の口コミ ↗</a>
        </nav>
      </article>`;
  }

  function hotelSection() {
    return H.stays
      .map(
        (stay) => `
          <section class="parent-hotel-stay" data-parent-stay="${esc(stay.id)}">
            <header><h3>${esc(stay.title)}</h3><p><strong>${esc(stay.dates)}</strong></p><p>${esc(stay.parentSummary)}</p></header>
            <div class="parent-hotel-grid">${stay.candidates.map(hotelCard).join("")}</div>
          </section>`,
      )
      .join("");
  }

  function hotelRange() {
    let totals = [0];
    for (const stay of H.stays) {
      const values = stay.candidates.map((row) => row.totalEur).filter(Number.isFinite);
      totals = totals.flatMap((base) => values.map((value) => base + value));
    }
    const min = Math.min(...totals);
    const max = Math.max(...totals);
    return { min, max, minPerPerson: min / 3, maxPerPerson: max / 3 };
  }

  function actionCard(title, label, text, date, url) {
    return `<article><span class="parent-action-label">${esc(label)}</span><h3>${esc(title)}</h3><p>${esc(text)}</p>${date ? `<p><strong>確認目安：${esc(date)}</strong></p>` : ""}${url ? `<a href="${esc(url)}"${external}>公式確認先 ↗</a>` : ""}</article>`;
  }

  function flightLine(firstId, secondId, routeLabel) {
    const first = scheduleItem(firstId);
    const second = scheduleItem(secondId);
    const start = first?.timing?.start;
    const end = firstId === secondId ? first?.timing?.end : second?.timing?.start;
    return `<li><strong>${esc(routeLabel)}</strong><span>${esc(start?.date || "日時未登録")} ${esc(start?.time || "")} → ${esc(end?.date || "日時未登録")} ${esc(end?.time || "")}</span></li>`;
  }

  const learningGroups = [
    {
      title: "Barcelonaをまず読む",
      ids: ["barcelona-overview", "barcelona-old-city", "barcelona-modernisme-palau", "montserrat"],
    },
    {
      title: "Gaudíを深く読む",
      ids: ["gaudi-overview", "sagrada", "mila", "batllo"],
    },
    {
      title: "Gaudíを現地で開く",
      ids: ["park-guell", "palau-guell", "casa-vicens"],
    },
    {
      title: "Barcelonaの食を確認する",
      ids: ["catalan-winter-food", "barcelona-seafood-market-bar"],
    },
    {
      title: "Madridを読む",
      ids: ["madrid-overview", "prado", "madrid-art", "madrid-austrias"],
    },
    {
      title: "Toledoを読む",
      ids: ["toledo", "toledo-cathedral", "santo-tome-orgaz", "el-greco-museum"],
    },
  ];

  function learningHTML() {
    return learningGroups
      .map(
        (group) => `<section><h3>${esc(group.title)}</h3><ul>${group.ids
          .map((id) => {
            const row = article(id);
            return `<li data-parent-article="${esc(id)}"><a href="learn.html?id=${encodeURIComponent(id)}">${esc(row?.title || "記事")}</a><a class="onsite-link" href="learn.html?id=${encodeURIComponent(id)}#onsite">現地2分</a></li>`;
          })
          .join("")}</ul></section>`,
      )
      .join("");
  }

  function renderParentPage() {
    const host = document.querySelector("[data-parent-ready]");
    if (!host || new URLSearchParams(location.search).has("id") || !H) return;
    const range = hotelRange();
    host.innerHTML = `
      <article class="parent-ready" data-parent-ready-rendered>
        <header class="parent-ready-hero">
          <p class="eyebrow">家族で最初に見るページ</p>
          <h1>大人3名のスペイン旅行</h1>
          <p class="parent-ready-dates"><strong>2026年12月25日〜2027年1月5日</strong></p>
          <p class="parent-ready-route">Barcelona → Madrid・Toledo → Barcelona</p>
          <p>日程、ホテル、これから予約するものを約5分で確認できます。ホテルはまだ予約していません。</p>
        </header>

        <nav class="parent-ready-nav" aria-label="このページの目次">
          <a href="#why-this-plan">この日程の理由</a><a href="#parent-hotels">ホテル</a><a href="#parent-actions">今後の手配</a><a href="#parent-flights">航空券確認</a><a href="#parent-learning">詳しく読む</a><a href="#parent-use">旅行中の使い方</a>
        </nav>

        <section class="parent-ready-section" id="why-this-plan">
          <h2>なぜこの日程なのか</h2>
          <div class="parent-reason-grid">
            <article><h3>旅全体で比較</h3><p>Barcelonaだけでなく、Madrid、Toledo、都市間移動、食事、疲れやすさまで同じ基準で比べました。</p></article>
            <article><h3>主役を守る</h3><p>Sagrada Família、Prado、Toledoなど、今回特に見たい場所には十分な時間を残しています。</p></article>
            <article><h3>無理を重ねない</h3><p>到着日、日帰り、年越し、移動日に休憩と乗換え余裕を置き、重い日が続きすぎないようにしました。</p></article>
            <article><h3>変更しても崩れにくい</h3><p>飛行機の遅れ、雨、休館、疲れ、店の満席があっても、削る順番と代わりの案があります。</p></article>
          </div>
          <p class="parent-note"><strong>決まっているもの：</strong>旅行日、都市順、観光の核、食事の役割、変更時の考え方、ホテルを探すエリアと比較候補です。施設やホテルが予約済みという意味ではありません。</p>
          <div class="p1-links"><a href="schedule.html">12日分の詳細日程を見る</a><a href="schedule.html#d1226">Barcelona到着日</a><a href="schedule.html#d1230">Madrid移動日</a><a href="schedule.html#d0102">Toledo日帰り</a></div>
        </section>

        <section class="parent-ready-section" id="parent-hotels">
          <header class="parent-section-heading"><div><span>今、親が選ぶもの</span><h2>3滞在・各2件のホテル候補</h2></div><p>全6件とも未予約です。価格、在庫、取消期限は予約画面を開いた時点で再確認します。</p></header>
          ${hotelSection()}
          <aside class="parent-checklist"><h3>予約画面で確認する8項目</h3><ol>${H.parentChecklist.map((row) => `<li>${esc(row)}</li>`).join("")}</ol></aside>
        </section>

        <section class="parent-ready-section" id="parent-actions">
          <header class="parent-section-heading"><div><span>次にすること</span><h2>決める・待つ・再確認する</h2></div><p>発売前のものは急いで購入せず、公式画面に対象日が出てから条件を確認します。</p></header>
          <div class="parent-action-group"><h3>今すぐ決める</h3><div class="parent-action-grid">
            ${actionCard("Barcelona前半ホテル", "選ぶ", "12月26日から4泊。2候補を3 adults条件で比較します。", "2026年8月15日までを目安", "")}
            ${actionCard("Madridホテル", "選ぶ", "12月30日から4泊。年越し後の帰りやすさも比べます。", "2026年8月15日までを目安", "")}
            ${actionCard("Barcelona最終泊", "選ぶ", "1月3日の夜到着と翌朝の早い出発を優先します。", "2026年8月15日までを目安", "")}
          </div></div>
          <div class="parent-action-group"><h3>発売待ち</h3><div class="parent-action-grid">
            ${actionCard("Sagrada Família", "発売待ち", "12月27日の塔付き入場枠と取消条件を確認します。", "2026年9月27日", "https://sagradafamilia.org/en/tickets")}
            ${actionCard("Park Güell", "発売待ち", "12月28日の時間指定枠を確認します。", "2026年9月28日", "https://parkguell.barcelona/en/buy-tickets")}
            ${actionCard("都市間・Toledo列車", "発売待ち", "Barcelona→Madrid、Toledo往復、Madrid→Barcelonaを順に確認します。", "2026年9月30日〜10月3日", "https://www.renfe.com/es/en")}
            ${actionCard("主要施設", "発売待ち", "Casa Milà、Casa Batlló、Prado、Reina Sofíaの対象日枠を確認します。", "2026年10月31日", "")}
            ${actionCard("Montserrat・Toledo施設", "発売待ち", "交通時刻と大聖堂・教会・美術館の対象日運用を確認します。", "2026年12月1日", "")}
          </div></div>
          <div class="parent-action-group"><h3>公式発表待ち</h3><div class="parent-action-grid">
            ${actionCard("年末年始のレストラン", "公表待ち", "特別営業、予約受付、満席時の代替を確認します。", "2026年11月26日", "https://culleretes.com/")}
            ${actionCard("Madridの年越し", "公表待ち", "Puerta del Solの入口、警備、駅閉鎖、徒歩帰路を確認します。", "2026年12月15日", "https://www.esmadrid.com/en/whats-on/new-years-eve-party-puerta-sol")}
            ${actionCard("全施設の年末年始営業", "公表待ち", "旅行日固有の営業時間と休館を公式情報で照合します。", "2026年12月15日", "")}
          </div></div>
          <div class="parent-action-group"><h3>旅行前に再確認</h3><ul class="parent-recheck-list"><li>出発10日前から天気と服装を確認する。</li><li>ホテルの3 adults、部屋数、ベッド、取消、支払条件を予約後にも確認する。</li><li>施設、列車、飲食店の営業時間・運行・提供状況を公式ページで確認する。</li><li>旅行前日にToday、地図、公式手続きリンクを端末で開けるか確認する。</li></ul></div>
          <div class="p1-links"><a href="prep.html">準備・予約一覧を開く</a><a href="prep.html#hotel-candidates-3p">ホテル比較を大きく開く</a></div>
        </section>

        <section class="parent-ready-section" id="parent-flights">
          <header class="parent-section-heading"><div><span>私的証拠と照合するもの</span><h2>航空券で分かっている範囲</h2></div><p>公開ページには一般的な経路と現在の日程だけを載せます。</p></header>
          <ul class="parent-flight-list">
            ${flightLine("d1225-nrt-depart", "d1225-pvg-arrive", "NRT → PVG")}
            ${flightLine("d1226-pvg-bcn", "d1226-pvg-bcn", "PVG → BCN")}
            ${flightLine("d0104-bcn-depart", "d0104-pvg-arrive", "BCN → PVG")}
            ${flightLine("d0105-pvg-depart", "d0105-nrt-arrive", "PVG → NRT")}
          </ul>
          <aside class="parent-warning"><h3>まだ公開情報だけでは確定できないもの</h3><p>航空会社、便名、terminal、同じ航空券か、乗継保護、through baggage、手荷物条件、変更・取消条件は、予約メール等の私的証拠との照合待ちです。予約番号やticket番号はこのサイトへ入力しません。</p></aside>
          <p>照合項目は公開サイト外で安全に管理します。</p>
        </section>

        <section class="parent-ready-section" id="parent-budget">
          <header class="parent-section-heading"><div><span>ホテル選択前の参考</span><h2>9泊の宿泊費</h2></div><p>1つの確定総額ではなく、取得済みの3名用候補だけを組み合わせた範囲です。</p></header>
          <div class="parent-budget-range"><div><span>3名合計</span><strong>${euro(range.min)}〜${euro(range.max)}</strong></div><div><span>1人あたり</span><strong>${euro(range.minPerPerson)}〜${euro(range.maxPerPerson)}</strong></div></div>
          <p>Moxy Barcelonaは対象日の3名総額が未取得のため、この範囲から除外しています。city taxの未確定分、航空券、列車、施設、食事はこの宿泊費に含みません。</p>
          <a href="budget.html">予算・精算の詳細を見る</a>
        </section>

        <section class="parent-ready-section" id="parent-learning">
          <header class="parent-section-heading"><div><span>もっと知りたいとき</span><h2>都市・美術・食の読み方</h2></div><p>長文をここへ重ねず、目的に合わせて完成済み21件の学習記事を開きます。</p></header>
          <div class="parent-learning-grid">${learningHTML()}</div>
        </section>

        <section class="parent-ready-section" id="parent-use">
          <header class="parent-section-heading"><div><span>画面の使い分け</span><h2>旅行前と旅行中</h2></div></header>
          <div class="parent-use-grid">
            <a href="decision.html"><strong>家族で相談</strong><span>このページで全体像と次の判断を確認</span></a>
            <a href="prep.html"><strong>旅行前の準備</strong><span>予約、ホテル、持ち物、再確認</span></a>
            <a href="today.html"><strong>毎朝</strong><span>今と次の予定を確認</span></a>
            <a href="schedule.html"><strong>詳細日程</strong><span>時刻、移動、削る順番、代替</span></a>
            <a href="explore.html?type=learn"><strong>事前学習</strong><span>3分版と15分版</span></a>
            <a href="learn.html?id=barcelona-overview#onsite"><strong>現地鑑賞</strong><span>現地2分の見るポイント</span></a>
          </div>
          <aside class="parent-privacy-note"><strong>公開ページについて</strong><p>このサイトは公開される可能性がある前提です。予約番号、ticket番号、QR、旅券情報、個人連絡先、決済情報は保存しません。予約後は公開ページへ一般的な状態だけを反映し、証拠原本は非公開で管理します。</p></aside>
        </section>
      </article>`;

    const opened = new Map();
    window.addEventListener("beforeprint", () => {
      host.querySelectorAll("details").forEach((node) => {
        opened.set(node, node.open);
        node.open = true;
      });
    });
    window.addEventListener("afterprint", () => {
      opened.forEach((value, node) => {
        node.open = value;
      });
      opened.clear();
    });
  }

  addHomeEntry();
  renderParentPage();
})();
