(function () {
  "use strict";

  const T = window.TRIP;
  if (!T) return;

  const timing = (date, start, end = null) => ({
    kind: end ? "interval" : start ? "point" : "untimed",
    start: start ? { date, time: start, timeZone: date === "2026-12-25" ? "Asia/Tokyo" : "Europe/Madrid" } : null,
    end: end ? { date, time: end, timeZone: "Europe/Madrid" } : null,
    durationIdealMinutes: null,
    durationMinimumMinutes: null,
    confidence: "provisional",
  });
  const patchItem = (id, values) => {
    const item = T.scheduleItems.find((row) => row.id === id);
    if (item) Object.assign(item, values);
  };
  const patchDay = (id, values) => {
    const item = T.days.find((row) => row.id === id);
    if (item) Object.assign(item, values);
  };

  patchDay("d1226", {
    title: "Barcelona到着・ガウディ群",
    theme: "Park Güellを含むガウディ群（過積載）",
    hero: "Park Güellとガウディ建築群",
    caution: "⚠ 過積載。v2本編を維持し、予約枠・入国遅延・体力を家族で判断する。",
    mealStatus: "食事枠未記載・要調整",
    load: { status: "要調整", level: "高・過積載 ⚠", evidence: ["到着日にPark Güellを含むガウディ群を巡るv2本編"] },
  });
  patchDay("d1227", {
    title: "Sagrada Família・Montjuïc",
    theme: "Sagrada Família 10:00–12:30とMontjuïc",
    hero: "サグラダ・ファミリア",
    caution: "塔付き10:00枠と日曜運用は発売後に確認。時間変更案は〔提案〕として別表示。",
    mealStatus: "食事枠未記載・要調整",
  });
  patchDay("d1228", {
    title: "Tarragona日帰り",
    cityId: "tarragona",
    cityLabel: "Tarragona",
    theme: "AVE・BUSPLANAでローマ遺産を巡る",
    hero: "水道橋・円形闘技場・大聖堂",
    movement: "AVE＋BUSPLANA＋徒歩",
    walking: "多",
    rest: "少ない・要調整",
    mealStatus: "Tarragonaで昼食（店未定）",
    load: { status: "要調整", level: "高 ⚠", evidence: ["鉄道・バス・徒歩が連続し、復路3候補が未確定"] },
    caution: "復路3候補、BUSPLANA、年末営業を家族で決める。Park Güell移動案は〔提案〕であり本編ではない。",
  });
  patchDay("d1229", { mealStatus: "Montserratで昼食（店未定）" });
  patchDay("d1230", { mealStatus: "朝食・昼食場所は未定" });
  patchDay("d1231", { mealStatus: "大晦日ディナー未定・要調整" });
  patchDay("d0101", { mealStatus: "元日営業の食事場所未定・要調整" });
  patchDay("d0103", { mealStatus: "昼食場所は未定" });

  patchItem("d1227-sagrada", {
    timing: timing("2026-12-27", "10:00", "12:30"),
    durationIdealMinutes: 150,
    priority: "必須",
    inclusionStatus: "adopted",
    planningStatus: "needs_information",
    notes: ["Drive v2本編は10:00–12:30。ただし日曜は10:30開館の公式確認事実と矛盾するため要調整。"],
  });
  patchItem("d1227-columbus", {
    timing: timing("2026-12-27", "14:00"),
    notes: ["Drive v2本編は14:00以降。終了時刻は要確認。"],
  });
  patchItem("d1226-airport-city", {
    title: "Aerobus BCN T1 → Catalunya（第一候補）",
    timing: timing("2026-12-26", "08:39", "09:00"),
    notes: ["Drive v2本編。€7.45×3、現行価格要確認。タクシー約€40は補欠。"],
  });
  [
    ["d1226-parkguell", { dayId: "d1226", inclusionStatus: "adopted", planningStatus: "needs_information", priority: "必須", timing: timing("2026-12-26", "09:30", "13:00"), notes: ["Drive v2本編の4館共通枠。€18・1h。過積載のため要調整。"] }],
    ["d1226-mila", { inclusionStatus: "adopted", priority: "必須", timing: timing("2026-12-26", "09:30", "13:00"), notes: ["Drive v2本編の4館共通枠。€29・1h。過積載のため要調整。"] }],
    ["d1226-batllo", { inclusionStatus: "adopted", priority: "必須", timing: timing("2026-12-26", "09:30", "13:00"), notes: ["Drive v2本編の4館共通枠。€33・1h。過積載のため要調整。"] }],
    ["d1226-guell-palace", { inclusionStatus: "adopted", planningStatus: "needs_information", priority: "必須", timing: timing("2026-12-26", "09:30", "13:00"), notes: ["Drive v2本編の4館共通枠。€12・1h。過積載のため要調整。"] }],
    ["d1226-casa-vicens", { inclusionStatus: "adopted", planningStatus: "needs_information", priority: "必須", timing: timing("2026-12-26", null), notes: ["v2本編。€23の旧見込み。個別時刻は要調整。"] }],
  ].forEach(([id, values]) => patchItem(id, values));
  patchItem("d1226-fira-sagrada", { notes: ["Drive v2本編。ただしクリスマスマーケットは例年12/23終了のため要調整。"] });
  patchItem("d1227-fira-santa-llucia", { notes: ["Drive v2本編。ただしクリスマスマーケットは例年12/23終了のため要調整。"] });

  [
    ["d1228-ave-out", "08:30", "09:03", false],
    ["d1228-bus-n240", "09:10", "09:25", false],
    ["d1228-bus-aqueduct", "09:52", "09:55", false],
    ["d1228-aqueduct", "10:02", "11:00", true],
    ["d1228-bus-city", "12:19", null, false],
    ["d1228-lunch", null, null, false],
    ["d1228-amphitheatre", "12:19", "12:31", true],
    ["d1228-cathedral", null, null, true],
    ["d1228-pinchos", null, null, true],
    ["d1228-return", null, null, false],
    ["d1228-flamenco", null, null, true],
  ].forEach(([id, start, end, shortenable]) => patchItem(id, {
    inclusionStatus: "adopted",
    planningStatus: "needs_information",
    timing: timing("2026-12-28", start, end),
    shortenable,
    notes: id === "d1228-return"
      ? ["Drive v2本編。復路候補15:30–17:00／17:26–18:37／19:05–20:25を家族が比較する。"]
      : id === "d1228-amphitheatre"
        ? ["Drive v2本編。原文誤記を12:19–12:31頃として表示。月曜休館のため曜日入替要調整。"]
        : ["Drive v2本編。料金・運行・年末営業は要調整。"],
  }));
  patchItem("d1231-prado", {
    timing: timing("2026-12-31", "10:00", "15:00"),
    notes: ["Drive v2本編は10:00–15:00。ただし公式営業10:00–14:00と矛盾するため要調整。"],
  });
  patchItem("d0104-airport-taxi", {
    title: "タクシーでBCN T1へ（07:40空港着）",
    timing: timing("2027-01-04", "06:55", "07:40"),
    notes: ["元計画08:55着 → 07:40着へ前倒し済み。ホテル位置確定後に06:55前後の出発を逆算。"],
  });
  [
    ["d1229-fgc-out", "2026-12-29", "08:36", "09:36"],
    ["d1229-aeri-up", "2026-12-29", "09:45", "09:50"],
    ["d1229-basilica", "2026-12-29", "10:00", null],
    ["d1229-moreneta", "2026-12-29", null, null],
    ["d1229-museum", "2026-12-29", null, null],
    ["d1229-aeri-down", "2026-12-29", "15:30", "15:35"],
    ["d1229-fgc-return", "2026-12-29", "15:45", "16:45"],
    ["d1230-boqueria", "2026-12-30", "09:00", null],
    ["d1230-cathedral", "2026-12-30", null, null],
    ["d1230-train-madrid", "2026-12-30", "14:50", "17:52"],
    ["d1231-prado", "2026-12-31", "10:00", "15:00"],
    ["d0101-sol", "2027-01-01", "10:00", "16:00"],
    ["d0102-train-out", "2027-01-02", "09:15", "09:49"],
    ["d0102-train-return", "2027-01-02", "17:23", "17:57"],
    ["d0103-reinasofia", "2027-01-03", "10:00", "14:30"],
    ["d0103-train-barcelona", "2027-01-03", "17:22", "20:42"],
    ["d0104-bcn-depart", "2027-01-04", "10:40", null],
  ].forEach(([id, date, start, end]) => patchItem(id, {
    inclusionStatus: "adopted",
    timing: timing(date, start, end),
  }));
  patchItem("d1229-basilica", {
    notes: ["Drive v2本編。黒いマリア像・少年聖歌隊・美術館を含む。聖歌隊は年末年始休暇の可能性があり要確認。"],
  });
  patchItem("d1230-boqueria", { title: "ブケリア市場" });
  patchItem("d1230-checkout", {
    title: "チェックアウト・荷物段取り（未記載）",
    planningStatus: "needs_information",
    timing: timing("2026-12-30", null),
    notes: ["Drive v2に明記された未解決事項。列車までの荷物保管・回収・Sants移動を決める。"],
  });
  patchItem("d1231-early-dinner", {
    title: "大晦日ディナー（未定）",
    planningStatus: "needs_information",
    timing: timing("2026-12-31", null),
    notes: ["Drive v2本編の要調整枠。店を勝手に確定せず、休業とSol入場列を確認して家族が決める。"],
  });
  patchItem("d0101-palace-exterior", {
    title: "マドリード王宮（1/1休館・別日へ要調整）",
    planningStatus: "needs_information",
  });
  patchItem("d0101-lunch", {
    title: "元日営業の食事場所（未定）",
    planningStatus: "needs_information",
    notes: ["Drive v2本編の要調整枠。営業確認前に店名を確定しない。"],
  });

  const mainItemIdsByDay = {
    d1225: ["d1225-nrt-depart", "d1225-pvg-arrive"],
    d1226: [
      "d1226-pvg-bcn", "d1226-airport-city", "d1226-parkguell", "d1226-mila",
      "d1226-batllo", "d1226-guell-palace", "d1226-placa-rei", "d1226-placa-reial",
      "d1226-casa-vicens", "d1226-sant-pau", "d1226-fira-sagrada",
    ],
    d1227: [
      "d1227-sagrada", "d1227-columbus", "d1227-cable-miramar-castell",
      "d1227-montjuic-castle", "d1227-cable-castell-park", "d1227-el-corte", "d1227-fira-santa-llucia",
    ],
    d1228: [
      "d1228-ave-out", "d1228-bus-n240", "d1228-bus-aqueduct", "d1228-aqueduct",
      "d1228-bus-city", "d1228-amphitheatre", "d1228-cathedral",
      "d1228-pinchos", "d1228-return", "d1228-flamenco",
    ],
    d1229: [
      "d1229-fgc-out", "d1229-aeri-up", "d1229-basilica", "d1229-moreneta",
      "d1229-museum", "d1229-aeri-down", "d1229-fgc-return",
    ],
    d1230: ["d1230-boqueria", "d1230-checkout", "d1230-cathedral", "d1230-train-madrid"],
    d1231: [
      "d1231-prado", "d1231-san-jeronimo", "d1231-cibeles", "d1231-alcala",
      "d1231-retiro", "d1231-san-silvestre", "d1231-countdown", "d1231-early-dinner",
    ],
    d0101: [
      "d0101-sol", "d0101-san-gines", "d0101-plaza-mayor", "d0101-san-isidro",
      "d0101-palace-exterior", "d0101-san-francisco", "d0101-lunch",
    ],
    d0102: [
      "d0102-train-out", "d0102-cathedral", "d0102-greco", "d0102-santotome",
      "d0102-santacruz", "d0102-train-return",
    ],
    d0103: [
      "d0103-reinasofia", "d0103-serrano", "d0103-san-miguel-market",
      "d0103-train-barcelona", "d0103-final-hotel",
    ],
    d0104: ["d0104-airport-taxi", "d0104-bcn-depart", "d0104-pvg-arrive"],
    d0105: ["d0105-pvg-depart", "d0105-nrt-arrive"],
  };

  const proposalsByDay = {
    d1226: [
      { title: "到着日はCasa Milà＋Casa Batllóに限定", reason: "入国遅延と疲労に強くするCLI案。Park Güellは12/28へ移す。採否は家族判断。" },
      { title: "Can Culleretesを日曜昼へ", reason: "伝統料理を日程へ組み込むCLI案。営業・予約条件を確認して家族が判断。" },
    ],
    d1227: [
      { title: "Sagrada Famíliaの時間を発売枠に合わせて変更", reason: "塔付き枠の発売後に再配置するCLI案。本編は10:00–12:30。" },
    ],
    d1228: [
      { title: "Park Güell＋カタルーニャ音楽堂＋Bornへ変更", reason: "連続日帰りの疲労を下げるCLI案。本編はTarragona日帰り。" },
      { title: "El Xampanyetを19:00候補にする", reason: "Bornの食文化を組み込むCLI案。Tarragona本編へは未採用。" },
      { title: "TarragonaとMontserratを12/29⇄12/28で入替", reason: "円形闘技場の月曜休館を避けるv3案。本編はv2どおり12/28 Tarragona。" },
    ],
    d1229: [
      { title: "Montserratを12/28、Tarragonaを12/29へ入替", reason: "Tarragonaの月曜休館を避けるv3案。家族合意前なので本編は変更しない。" },
      { title: "Can Soléを夕食候補にする", reason: "CLIが選定した魚介・米料理案。本編v2には店名がないため家族判断の〔提案〕として表示。" },
    ],
    d1231: [
      { title: "Pradoを12/31朝へ前倒し", reason: "12/31の10:00–14:00短縮営業に合わせるv3案。本編の時間矛盾は要調整のまま。" },
    ],
    d0103: [
      { title: "Madrid王宮を1/3へ移設", reason: "1/1休館を避けるv3案。Reina Sofíaとiryoの時間配分を家族が判断する。" },
    ],
    d0104: [
      { title: "元計画のAerobus 08:17–08:55", reason: "Drive v2由来の旧案。03で07:40空港着へ前倒し採用済みのため、比較用の〔提案〕として残す。" },
    ],
    d1230: [
      { title: "カタルーニャ音楽堂・Bornを追加", reason: "移動日前のBarcelona時間を使うCLI案。列車と荷物動線を優先して家族が判断。" },
    ],
  };

  const transportLegs = [
    { id: "leg-01", dayId: "d1225", icon: "✈", service: "国際線（便名は予約原本で確認）", route: "NRT T1 → PVG T2", time: "19:30–22:15", price: "確定・金額は原本確認", baggage: "受託/機内持込規定は予約原本で確認" },
    { id: "leg-02", dayId: "d1226", icon: "✈", service: "国際線（便名は予約原本で確認）", route: "PVG T2 → BCN T1", time: "00:45–07:25", price: "国際線料金に含む", baggage: "通し預け可否を原本確認" },
    { id: "leg-03", dayId: "d1226", icon: "🚌", service: "Aerobus（第一候補）", route: "BCN T1 → Catalunya", time: "08:39–09:00", price: "€7.45×3・現行価格要確認", baggage: "大型荷物3個を想定" },
    { id: "leg-03b", dayId: "d1226", icon: "🚕", service: "空港タクシー（補欠）", route: "BCN T1 → Barcelona市内", time: "Aerobus不採用時", price: "約€40・要確認", baggage: "大型荷物3個を予約時申告" },
    { id: "leg-04", dayId: "d1227", icon: "🚇", service: "TMB（路線要調整）", route: "ホテル → Sagrada Família", time: "09:15–09:45目安", price: "要調整", baggage: "日帰り手荷物" },
    { id: "leg-05", dayId: "d1228", icon: "🚄", service: "AVE", route: "Barcelona Sants → Camp de Tarragona", time: "08:30–09:03", price: "要調整", baggage: "Renfe規定を購入時確認" },
    { id: "leg-06", dayId: "d1228", icon: "🚌", service: "BUSPLANA", route: "Camp de Tarragona → N-240 → Pont del Diable", time: "09:10–09:55", price: "要調整", baggage: "日帰り手荷物" },
    { id: "leg-06b", dayId: "d1228", icon: "🚶", service: "徒歩", route: "N-240 → Pont del Diable", time: "09:52–09:55", price: "無料", baggage: "日帰り手荷物" },
    { id: "leg-06c", dayId: "d1228", icon: "🚌", service: "Tarragona市バス", route: "Equador → Colom, 14", time: "時刻要調整", price: "要調整", baggage: "日帰り手荷物" },
    { id: "leg-07", dayId: "d1228", icon: "🚄", service: "復路 第1候補", route: "Tarragona → Barcelona Sants", time: "15:30–17:00", price: "要調整", baggage: "Renfe規定を購入時確認" },
    { id: "leg-08", dayId: "d1228", icon: "🚄", service: "復路 第2候補", route: "Tarragona → Barcelona Sants", time: "17:26–18:37", price: "要調整", baggage: "Renfe規定を購入時確認" },
    { id: "leg-09", dayId: "d1228", icon: "🚄", service: "復路 第3候補", route: "Tarragona → Barcelona Sants", time: "19:05–20:25", price: "要調整", baggage: "Renfe規定を購入時確認" },
    { id: "leg-10", dayId: "d1229", icon: "🚄", service: "FGC R5", route: "Espanya → Aeri de Montserrat", time: "08:36–09:36", price: "€25 Combinationに含む", baggage: "日帰り手荷物" },
    { id: "leg-10a", dayId: "d1229", icon: "🚡", service: "Aeri", route: "Inferior → Superior", time: "09:45–09:50", price: "Combinationに含む", baggage: "日帰り手荷物" },
    { id: "leg-10b", dayId: "d1229", icon: "🚡", service: "Aeri", route: "Superior → Inferior", time: "15:30–15:35", price: "Combinationに含む", baggage: "日帰り手荷物" },
    { id: "leg-10c", dayId: "d1229", icon: "🚄", service: "FGC R5", route: "Aeri de Montserrat → Espanya", time: "15:45–16:45", price: "Combinationに含む", baggage: "日帰り手荷物" },
    { id: "leg-11", dayId: "d1230", icon: "🚄", service: "iryo 06150", route: "Barcelona Sants → Madrid-Atocha", time: "14:50–17:52", price: "¥11,286×3", baggage: "80×55×35cm" },
    { id: "leg-12", dayId: "d1231", icon: "🚇", service: "Metro / 徒歩（路線要調整）", route: "ホテル → Prado → Puerta del Sol", time: "09:15–20:00目安", price: "要調整", baggage: "日帰り手荷物" },
    { id: "leg-13", dayId: "d0101", icon: "🚶", service: "徒歩＋Metro（運行要調整）", route: "Sol・Plaza Mayor周辺", time: "10:00–16:00", price: "要調整", baggage: "日帰り手荷物" },
    { id: "leg-14", dayId: "d0102", icon: "🚄", service: "Avant 08292", route: "Madrid Atocha → Toledo", time: "09:15–09:49", price: "€13.9×3", baggage: "Renfe規定を購入時確認" },
    { id: "leg-15", dayId: "d0102", icon: "🚄", service: "Avant 08173", route: "Toledo → Madrid Atocha", time: "17:23–17:57", price: "€13.9×3", baggage: "Renfe規定を購入時確認" },
    { id: "leg-16", dayId: "d0103", icon: "🚄", service: "iryo（便名は発売後に確定）", route: "Madrid Atocha → Barcelona Sants", time: "17:22–20:42（暫定）", price: "¥15,448×3（Drive v2暫定値）", baggage: "80×55×35cm" },
    { id: "leg-16b", dayId: "d0103", icon: "🚆", service: "R2N（元計画・乗車不能）", route: "Barcelona Sants → 市内", time: "19:09–19:26", price: "約€4", baggage: "20:42着との矛盾・要調整" },
    { id: "leg-17", dayId: "d0104", icon: "🚕", service: "予約タクシー", route: "Barcelonaホテル → BCN T1", time: "06:55–07:35（07:40着）", price: "要調整", baggage: "大型荷物3個を予約時申告" },
    { id: "leg-17b", dayId: "d0104", icon: "🚌", service: "Aerobus（元計画・不採用）", route: "Pl. Catalunya → BCN T1", time: "08:17–08:55", price: "€7.45・現行価格要確認", baggage: "10:40発には遅いため07:40着へ前倒し済み" },
    { id: "leg-18", dayId: "d0104", icon: "✈", service: "国際線（便名は予約原本で確認）", route: "BCN T1 → PVG T2", time: "10:40–翌05:55", price: "確定・金額は原本確認", baggage: "受託/機内持込規定は予約原本で確認" },
    { id: "leg-19", dayId: "d0105", icon: "✈", service: "国際線（便名は予約原本で確認）", route: "PVG T2 → NRT T1", time: "14:25–18:10", price: "国際線料金に含む", baggage: "通し預け可否を原本確認" },
  ];

  const adjustments = [
    ["adj-01", "d1226", "d1226-parkguell", "12/26 到着日のガウディ4館", "機内泊直後の09:30–13:00に有料4館は過積載。第一候補2件＋補欠2件を家族が決める。"],
    ["adj-02", "d0103", "d0103-final-hotel", "12/26以降の全泊ホテル", "Barcelona前半、Madrid、Barcelona最終泊のホテル名・ベッド・取消条件を記入する。"],
    ["adj-03", "d1227", "d1227-cable-miramar-castell", "12/27 ロープウェイ2路線の動線", "Telefèric del PortとCastell→Parc de Montjuïcの順序・接続を確認する。"],
    ["adj-04", "d1228", "d1228-return", "12/28 Tarragona復路と月曜休館", "復路3候補が未決。円形闘技場は月曜休館のため曜日入替を家族で検討する。"],
    ["adj-05", "d1228", "d1228-flamenco", "12/28 フラメンコ", "開演時間・会場が未定で、Tarragona復路との接続も未確定。"],
    ["adj-06", "d1231", "d1231-prado", "12/31 Pradoの時間矛盾", "本編10:00–15:00に対し公式営業は10:00–14:00。前倒し・短縮が必要。"],
    ["adj-07", "d1231", "d1231-san-jeronimo", "12/31 San Jerónimoの閉館時間", "20:00–24:00枠は閉館時間帯。9:00–13:00または17:00–19:45内へ調整する。"],
    ["adj-08", "d1231", "d1231-san-silvestre", "12/31 San Silvestre交通規制", "16:00–21:00の中心部交通規制がPrado、ディナー、Solへの移動へ与える影響を確認する。"],
    ["adj-09", "d1231", "d1231-countdown", "12/31 Sol年越し", "21:00閉鎖→22:00再入場、上限15,000人、Metro Sol駅18:00閉鎖を踏まえ帰路まで決める。"],
    ["adj-10", "d1231", "d1231-countdown", "12/31 大晦日ディナー", "休業が多い日のため、予約店・時間・Sol入場列への移動を確定する。"],
    ["adj-11", "d0101", "d0101-palace-exterior", "1/1 王宮休館と食事", "王宮は1/1休館。別日へ移し、元日営業の食事場所も確保する。"],
    ["adj-12", "d0101", "d0101-sol", "1/1 外観中心の観光", "Prado・Reina Sofíaも休館。元日の開館施設を確認し外観中心の本編を再評価する。"],
    ["adj-13", "d0102", "d0102-train-out", "1/2 Toledoの手配分岐", "個人手配とSegovia＋Toledo 8時間ツアー（¥40,416/3名）のどちらにするか家族が決める。"],
    ["adj-14", "d0103", "d0103-reinasofia", "1/3 Reina Sofía・R2N・最終泊", "日曜10:00–14:30の午前必須、20:42着より前のR2N時刻矛盾、最終泊エリアをまとめて調整する。"],
    ["adj-15", "d0104", "d0104-airport-taxi", "1/4 空港到着", "元計画08:55着は10:40発の1時間45分前。07:40着へ前倒し済みで、タクシーを確定する。"],
    ["adj-16", "d1225", "d1225-nrt-depart", "全フライトとクリスマスマーケット", "国際線は予約済み確定だが便名・総額を記入する。市場2件は例年12/23終了のため本編表示も確認する。"],
  ].map(([id, dayId, itemId, title, reason]) => ({ id, dayId, itemId, title, reason, status: "open" }));

  const budgetEstimates = [
    { id: "intl-flight", category: "交通", title: "国際線3区間", status: "confirmed", currency: "JPY", amount: null, quantity: 1, note: "予約確定。金額はGoogleドライブ原本リンクから転記待ち。" },
    { id: "sagrada", category: "観光", title: "Sagrada Família（塔付き）", status: "estimate", currency: "JPY", amount: 16414, quantity: 3, note: "¥16,414×3" },
    { id: "iryo-out", category: "交通", title: "iryo 06150 Barcelona→Madrid", status: "estimate", currency: "JPY", amount: 11286, quantity: 3, note: "14:50–17:52" },
    { id: "iryo-back", category: "交通", title: "iryo（便名は発売後に確定）Madrid→Barcelona", status: "estimate", currency: "JPY", amount: 15448, quantity: 3, note: "17:22–20:42・¥15,448×3はいずれもDrive v2暫定値。発売後に公式情報で置換。" },
    { id: "avant", category: "交通", title: "Avant Toledo往復", status: "estimate", currency: "EUR", amount: 13.9, quantity: 6, note: "€13.9×2区間×3名" },
    { id: "aerobus", category: "交通", title: "Aerobus（市内移動候補）", status: "estimate", currency: "EUR", amount: 7.45, quantity: 3, note: "旧見込み。採用時のみ" },
    { id: "montserrat", category: "交通", title: "Montserrat Combination Ticket", status: "estimate", currency: "EUR", amount: 25, quantity: 3, note: "旧見込み" },
    { id: "parkguell", category: "観光", title: "Park Güell", status: "estimate", currency: "EUR", amount: 18, quantity: 3, note: "一般旧見込み" },
    { id: "mila", category: "観光", title: "Casa Milà", status: "estimate", currency: "EUR", amount: 29, quantity: 3, note: "Drive v2見込み" },
    { id: "batllo", category: "観光", title: "Casa Batlló", status: "estimate", currency: "EUR", amount: 33, quantity: 3, note: "Drive v2見込み" },
    { id: "guell-palace", category: "観光", title: "Palau Güell", status: "estimate", currency: "EUR", amount: 12, quantity: 3, note: "旧見込み" },
    { id: "vicens", category: "観光", title: "Casa Vicens", status: "estimate", currency: "EUR", amount: 23, quantity: 3, note: "旧見込み" },
    { id: "montjuic", category: "観光", title: "Montjuïc城", status: "estimate", currency: "EUR", amount: 12, quantity: 3, note: "旧見込み" },
    { id: "columbus", category: "観光", title: "Columbus記念塔", status: "estimate", currency: "EUR", amount: 10, quantity: 3, note: "Drive v2見込み" },
    { id: "teleferic", category: "交通", title: "Telefèric del Port", status: "estimate", currency: "EUR", amount: 17.1, quantity: 3, note: "Drive v2見込み" },
    { id: "barcelona-cathedral", category: "観光", title: "Santa Eulàlia大聖堂", status: "estimate", currency: "EUR", amount: 14, quantity: 3, note: "Drive v2見込み" },
    { id: "prado", category: "観光", title: "Prado美術館", status: "estimate", currency: "EUR", amount: 15, quantity: 3, note: "Drive v2見込み" },
    { id: "palace", category: "観光", title: "Madrid王宮", status: "estimate", currency: "EUR", amount: 14, quantity: 3, note: "Drive v2見込み・1/1休館" },
    { id: "reinasofia", category: "観光", title: "Reina Sofía", status: "estimate", currency: "EUR", amount: 12, quantity: 3, note: "旧見込み" },
    { id: "hotels", category: "宿泊", title: "ホテル9泊", status: "unconfirmed", currency: "EUR", amount: null, quantity: 1, note: "未確定の大物。候補比較中のため合計外。" },
  ];

  T.uxRebuild03 = {
    source: "スケジュールデータ_v2.md",
    sourceFileId: "1KRH9ykTRoLyOOoHEWl_6futAFcC7JPoe",
    sourceModifiedAt: "2026-07-26T07:39:53.676Z",
    supplementFileId: "1uUDCk3CdjIHATHy-Ysza1yZdKLf0H7sr",
    status: "USER_REVIEW_REQUIRED",
    mainItemIdsByDay,
    proposalsByDay,
    transportLegs,
    adjustments,
    lodgingByDay: {
      d1225: "機内泊", d1226: "Barcelona", d1227: "Barcelona", d1228: "Barcelona",
      d1229: "Barcelona", d1230: "Madrid", d1231: "Madrid", d0101: "Madrid",
      d0102: "Madrid", d0103: "Barcelona", d0104: "機内泊", d0105: "帰宅",
    },
    coverage: { attractionsDecided: 21, attractionsTotal: 29, mealsFilled: 14, mealsTotal: 24 },
    budget: { defaultRate: 170, rateDate: "2026-07-26", estimates: budgetEstimates },
  };
})();
