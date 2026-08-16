"use strict";

const learnRoot = document.querySelector("[data-learn-root]");
const trip = window.TRIP || {};
const params = new URLSearchParams(location.search);
const articleId = params.get("id") || "sagrada";
const article = (trip.learningArticles || []).find((entry) => entry.id === articleId);
const sourceMap = new Map((trip.sources || []).map((source) => [source.id, source]));
const chapterVisuals = {
  "three-facades": {
    src: "assets/sagrada-facades-study-v1.png",
    alt: "生命感のある生誕、角張った受難、建設途上の主正面という三つの表情を並べた学習用イラスト",
    caption: "三つのファサードの表情を比べる学習用イラスト（AI生成）",
  },
  "loads-and-geometry": {
    src: "assets/sagrada-structure-study-v1.png",
    alt: "天井から分岐柱を通って基礎へ重さが流れる考え方を示す学習用イラスト",
    caption: "分岐柱と荷重の流れを捉える学習用イラスト（AI生成・概念図）",
  },
  "light-and-colour": {
    src: "assets/sagrada-light-study-v1.png",
    alt: "青緑の光と橙赤の光が白い柱へ広がる内部空間の学習用イラスト",
    caption: "東西で異なる光と色を捉える学習用イラスト（AI生成）",
  },
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function renderText(value) {
  return escapeHtml(value).replace(/\n\n+/g, "</p><p>");
}

function uniqueSourceIds(articleData) {
  return [...new Set(articleData.sourceIds || [])].filter((id) => sourceMap.has(id));
}

function sourceMarkers(ids = []) {
  const available = [...new Set(ids)].filter((id) => sourceMap.has(id));
  if (!available.length) return "";
  return `<div class="source-markers" aria-label="この項目の出典">${available.map((id) => {
    const index = uniqueSourceIds(article).indexOf(id) + 1;
    return `<a class="source-marker" href="#source-${escapeHtml(id)}" aria-label="出典 ${index}">[${index}]</a>`;
  }).join("")}</div>`;
}

function renderBlock(block) {
  const markers = sourceMarkers(block.sourceIds);
  if (block.type === "paragraph") return `<div class="learn-paragraph"><p>${renderText(block.text)}</p>${markers}</div>`;
  if (block.type === "timeline") return `<div><ol class="learn-timeline">${(block.entries || []).map((entry) => `<li><time>${escapeHtml(entry.date)}</time><strong>${escapeHtml(entry.title)}</strong><span>${escapeHtml(entry.text)}</span></li>`).join("")}</ol>${markers}</div>`;
  if (block.type === "comparison") return `<div><div class="learn-comparison">${(block.columns || []).map((column) => `<article><h3>${escapeHtml(column.title)}</h3><p>${escapeHtml(column.text)}</p></article>`).join("")}</div>${markers}</div>`;
  if (block.type === "callout") return `<aside class="learn-callout"><h3>${escapeHtml(block.title)}</h3><p>${renderText(block.text)}</p>${markers}</aside>`;
  if (block.type === "summary") return `<aside class="learn-summary"><span class="eyebrow">CONNECT THE DOTS</span><h3>${escapeHtml(block.title)}</h3><p>${renderText(block.text)}</p>${markers}</aside>`;
  if (block.type === "key-points") return `<div><ul class="block-points">${(block.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>${markers}</div>`;
  if (block.type === "onsite-checklist") return `<div><ol class="onsite-checklist">${(block.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>${markers}</div>`;
  return `<div class="learn-paragraph"><p>${renderText(block.text || "")}</p>${markers}</div>`;
}

function renderChapterVisual(sectionId) {
  const visual = chapterVisuals[sectionId];
  if (!visual) return "";
  return `<figure class="chapter-visual"><img src="${escapeHtml(visual.src)}" alt="${escapeHtml(visual.alt)}" loading="lazy" decoding="async"><figcaption>${escapeHtml(visual.caption)}<small>理解を助ける表現であり、現地写真・実測図ではありません。</small></figcaption></figure>`;
}

function renderArticle(articleData) {
  const place = (trip.places || []).find((entry) => entry.id === articleData.placeId);
  const city = (trip.cities || []).find((entry) => entry.id === articleData.cityId);
  const cityNames = { barcelona: "Barcelona", madrid: "Madrid", tarragona: "Tarragona", montserrat: "Montserrat", cordoba: "Córdoba", toledo: "Toledo" };
  const cityLabel = city?.nameJa || city?.name || cityNames[articleData.cityId] || articleData.cityId || "Spain";
  const cityHeroes = { madrid: "assets/madrid-hero-v1.png", toledo: "assets/madrid-hero-v1.png", tarragona: "assets/tarragona-hero-v2.png", montserrat: "assets/montserrat-hero-v2.png", cordoba: "assets/cordoba-hero-v2.png", barcelona: "assets/barcelona-hero-v1.png" };
  const hero = articleData.id === "sagrada" ? "assets/sagrada-interior.jpg" : cityHeroes[articleData.cityId] || "assets/barcelona-hero-v1.png";
  const heroAlt = articleData.id === "sagrada" ? "サグラダ・ファミリア内部の柱と光" : `${cityLabel}の旅行イメージ`;
  const visitDays = (articleData.visitDayIds || []).map((id) => (trip.days || []).find((day) => day.id === id)).filter(Boolean);
  const visitLabel = visitDays.length ? visitDays.map((day) => `${Number(day.date.slice(5, 7))}/${Number(day.date.slice(8, 10))}`).join("・") : "訪問予定との接続なし";
  const returnDay = visitDays[0]?.id || "d1227";
  const sourceIds = uniqueSourceIds(articleData);
  const deepSections = articleData.deepSections || [];
  const introParagraphs = String(articleData.intro?.summary || "").split(/\n\n+/);
  const readingPaths = articleData.readingPaths || [];
  const tocItems = [
    ["intro", "まず全体をつかむ"],
    ["terms", "知っておく用語"],
    ...deepSections.map((section) => [section.id, section.title]),
    ["onsite", "現地での確認ポイント"],
    ["sources", `出典（${sourceIds.length}件）`],
  ];

  document.title = `${articleData.title}｜行く前に学ぶ — Spain Trip`;
  learnRoot.innerHTML = `
    <nav class="learn-breadcrumb" aria-label="現在位置"><a href="index.html?day=${encodeURIComponent(returnDay)}&tab=guide">ガイド</a> ／ ${escapeHtml(cityLabel)} ／ ${escapeHtml(place?.area || "都市全体")} ／ ${escapeHtml(articleData.title)}</nav>
    <section class="learn-hero">
      <img src="${hero}" alt="${escapeHtml(heroAlt)}">
      <div class="learn-hero-copy">
        <span class="eyebrow">LEARN BEFORE · ${escapeHtml(articleData.kind)}</span>
        <h1>${escapeHtml(articleData.title)}</h1>
        <p>形や景色を見るだけで終わらせず、歴史・町の構造・文化の重なりを理解してから現地へ。読みたい深さを選べます。</p>
        <div class="learn-meta"><span>訪問予定 ${escapeHtml(visitLabel)}</span><span>深掘り ${deepSections.length}章</span><span>公式・一次出典 ${sourceIds.length}件</span></div>
      </div>
    </section>
    <nav class="reading-paths" aria-label="読み方を選ぶ">
      ${readingPaths.map((path) => `<a class="reading-path" href="#${escapeHtml(path.target)}"><span><strong>${escapeHtml(path.target === "deep" ? "詳しく学ぶ" : path.label)}</strong><small>${path.target === "intro" ? "全体像と4つの要点" : path.target === "deep" ? `${deepSections.length}章を順に読む` : "現地での確認ポイント"}</small></span></a>`).join("")}
    </nav>
    <div class="learn-layout">
      <aside class="learn-toc" aria-label="目次"><h2>目次</h2><ol>${tocItems.map(([id, label]) => `<li><a href="#${escapeHtml(id)}" data-toc-link="${escapeHtml(id)}">${escapeHtml(label)}</a></li>`).join("")}</ol></aside>
      <article class="learn-article">
        <section id="intro" class="learn-section" data-observe-section>
          <header class="learn-section-head"><span class="eyebrow">まず知っておきたいこと</span><h2>全体をつかむ</h2><p>現地で何を見るべきかが分かる要点です。</p></header>
          <div class="intro-summary">${introParagraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>
          <ul class="key-points">${(articleData.intro?.keyPoints || []).map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
          <aside class="why-card"><span class="eyebrow">WHY IT MATTERS</span><h3>今回の旅で時間を使う理由</h3><p>${escapeHtml(articleData.intro?.whyItMatters)}</p>${sourceMarkers(articleData.intro?.sourceIds)}</aside>
        </section>

        <section id="terms" class="learn-section" data-observe-section>
          <header class="learn-section-head"><span class="eyebrow">WORDS TO KNOW</span><h2>先に知ると見え方が変わる用語</h2><p>現地解説で出てくる言葉を、建物の見方に結びつけます。</p></header>
          <div class="term-grid">${(articleData.terms || []).map((term) => `<article class="term-card"><h3>${escapeHtml(term.term)}</h3><p>${escapeHtml(term.definition)}</p>${sourceMarkers(term.sourceIds)}</article>`).join("")}</div>
        </section>

        <section id="deep" class="learn-section" data-observe-section>
          <header class="learn-section-head"><span class="eyebrow">DEEP GUIDE</span><h2>${deepSections.length}章で深く学ぶ</h2><p>章を選んで開けます。最初の章だけ開いた状態にしています。</p></header>
          ${deepSections.map((section, index) => `<details id="${escapeHtml(section.id)}" class="deep-chapter" data-observe-section ${index === 0 ? "open" : ""}><summary>${escapeHtml(section.title)}</summary><div class="deep-chapter-body">${renderChapterVisual(section.id)}${(section.blocks || []).map(renderBlock).join("")}${sourceMarkers(section.sourceIds)}</div></details>`).join("")}
        </section>

        <section id="onsite" class="learn-section onsite-card" data-observe-section>
          <span class="eyebrow">現地での確認ポイント</span>
          <h2>${escapeHtml(articleData.onsiteSections?.[0]?.title || "現地で見る")}</h2>
          <p>長い解説を読み直さなくても使える、現地用の観察順です。</p>
          ${(articleData.onsiteSections || []).flatMap((section) => section.blocks || []).map(renderBlock).join("")}
        </section>

        <section id="sources" class="learn-section" data-observe-section>
          <header class="learn-section-head"><span class="eyebrow">SOURCES</span><h2>根拠を確認する</h2><p>本文の番号から、この一覧へ移動できます。運用情報は訪問直前にも公式で再確認します。</p></header>
          <ol class="source-list">${sourceIds.map((id, index) => { const source = sourceMap.get(id); return `<li id="source-${escapeHtml(id)}"><a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">[${index + 1}] ${escapeHtml(source.title)}</a><span>${escapeHtml(source.publisher)} · ${escapeHtml(source.type)} · 確認 ${escapeHtml(source.checkedAt)}</span></li>`; }).join("")}</ol>
        </section>

        <footer class="learn-footer-action"><div><strong>次は、現地で使う短い情報へ</strong><p>ガイド詳細には入口・時間・観察順だけを残しています。</p></div><a class="button primary" href="index.html?day=${encodeURIComponent(returnDay)}&tab=guide">ガイドへ戻る</a></footer>
      </article>
    </div>`;

  const observed = [...learnRoot.querySelectorAll("[data-observe-section]")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id === "deep" ? "deep" : entry.target.id;
      learnRoot.querySelectorAll("[data-toc-link]").forEach((link) => link.setAttribute("aria-current", String(link.dataset.tocLink === id)));
    }), { rootMargin: "-18% 0px -70%" });
    observed.forEach((section) => observer.observe(section));
  }
}

if (!article) {
  document.title = "学習ガイドが見つかりません — Spain Trip";
  learnRoot.innerHTML = `<section class="learn-not-found"><span class="eyebrow">NOT FOUND</span><h1>この学習ガイドはまだありません</h1><p>ガイドへ戻り、別の場所を選んでください。</p><a class="button primary" href="index.html?day=d1227&tab=guide">ガイドへ戻る</a></section>`;
} else {
  renderArticle(article);
}
