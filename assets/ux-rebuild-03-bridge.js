(function () {
  "use strict";

  const T = window.TRIP;
  const U = T?.uxRebuild03;
  const H = window.HOTEL_CANDIDATES_3P;
  if (!T || !U) return;

  const keepByDay = U.mainItemIdsByDay || {};
  Object.entries(keepByDay).forEach(([dayId, ids]) => {
    const keep = new Set(ids);
    T.scheduleItems.forEach((item) => {
      if (item.dayId === dayId && !keep.has(item.id)) item.dayId = `ux03-proposal-${dayId}`;
    });
  });

  Object.values(keepByDay).flat().forEach((id) => {
    const item = T.scheduleItems.find((row) => row.id === id);
    if (!item) return;
    item.inclusionStatus = "adopted";
    const place = T.places.find((row) => row.id === item.placeId);
    if (place && /旧scheduleから名称のみ移行|既存spots記載/.test(place.summary || "")) {
      place.summary = "Drive v2本編。料金・時間・公開範囲は旅行前に公式情報で再確認する。";
    }
    if (item.bookingId) {
      const booking = T.bookings.find((row) => row.id === item.bookingId);
      if (booking && /omitted|購入対象にしない/i.test(booking.publicNote || "")) {
        booking.publicNote = "v2本編へ復元。発売後に公式条件と料金を確認する。";
      }
    }
  });

  if (!T.preparationTasks.some((task) => task.id === "ux03-etias")) {
    T.preparationTasks.push({
      id: "ux03-etias",
      title: "ETIASの導入状況を確認",
      status: "blocked",
      deadline: "2026-10-01",
      blockedReason: "導入時期は調査中（Cowork担当）",
      informationNeeded: [
        "EU公式は2026年第4四半期の運用開始予定と案内。具体日と経過措置を公式発表後に確認。",
      ],
      actionUrl: "https://travel-europe.europa.eu/etias_en",
    });
  }

  const madrid = H?.stays?.find((stay) => stay.id === "madrid");
  if (madrid) {
    madrid.parentSummary = "大晦日はMetro Sol駅が18:00閉鎖し、中心部交通規制もあるため、Puerta del Sol徒歩10分以内を絶対条件に比較します。";
    const old = madrid.candidates.find((candidate) => candidate.id === "vincci-soho-3p");
    if (old) Object.assign(old, {
      id: "hotel-europa-sol-3p",
      label: "Sol最短優先",
      name: "Hotel Europa",
      area: "Puerta del Sol・Calle del Carmen 4（広場直結）",
      roomName: "3 adults対応客室（対象日rate再取得待ち）",
      roomLayout: "最大4名対応客室あり。対象日のベッド構成は予約画面で確認",
      adultThirdBed: "公式は最大4名対応客室を掲載。3人目寝具の種類は対象日rateで確認",
      roomSize: "対象客室の面積を予約画面で確認",
      luggageFit: "4泊・大型荷物3個の実用性を客室選択時に確認",
      totalEur: null,
      perPersonEur: null,
      priceState: "2026/12/30–2027/1/3・3 adults総額を再取得待ち",
      rateBasis: "公式・Booking.comで対象日3 adultsのflexible rateを再取得",
      taxNote: "税・必須fee・city taxを含む総額を予約画面で確認",
      cancellation: "対象日のflexible rateで確認",
      payment: "対象日のrateで確認",
      cleanliness: "レビュー数値を対象日価格と同時に再取得",
      cleanlinessDetail: "数値を未取得のため推測値は表示しない。取得後に出典サイト名・取得日とセットで更新",
      itineraryPros: "Puerta del Sol直結。大晦日の駅閉鎖・交通規制後も深夜に徒歩で帰着できる",
      weakness: "対象日の3名総額、客室面積、3人目寝具、取消条件が未取得",
      officialUrl: "https://www.hoteleuropa.eu/en/",
      bookingUrl: "https://www.booking.com/searchresults.ja.html?ss=Hotel+Europa+Madrid&checkin=2026-12-30&checkout=2027-01-03&group_adults=3&group_children=0&no_rooms=1&selected_currency=EUR",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Europa+Madrid+Calle+Carmen+4",
      reviewUrl: "https://www.booking.com/hotel/es/europa-madrid.es.html",
      solWalk: "Puerta del Sol直結（約50m）",
      sourceCheckedAt: "2026-07-26",
    });
    const alba = madrid.candidates.find((candidate) => candidate.id === "room-mate-alba-3p");
    if (alba) Object.assign(alba, {
      label: "2室・睡眠優先",
      solWalk: "Puerta del Sol徒歩約5分（公式・OTA周辺案内）",
      weakness: "2室構成のため1室候補より総額が上がる。隣室・同階は未確約で、3名が一室には泊まれない",
      sourceCheckedAt: "2026-07-26",
    });
  }
})();
