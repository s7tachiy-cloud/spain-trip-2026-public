(function () {
  "use strict";

  const T = window.TRIP;
  const U = T && T.uxRebuild03;
  if (!T || !U) return;

  const DATE = {
    d1226: "2026-12-26", d1227: "2026-12-27", d1228: "2026-12-28",
    d1229: "2026-12-29", d1230: "2026-12-30", d1231: "2026-12-31",
    d0101: "2027-01-01", d0102: "2027-01-02", d0103: "2027-01-03",
    d0104: "2027-01-04",
  };
  const timing = (date, start, end = null, confidence = "provisional") => ({
    kind: end ? "interval" : start ? "point" : "untimed",
    start: start ? { date, time: start, timeZone: "Europe/Madrid" } : null,
    end: end ? { date, time: end, timeZone: "Europe/Madrid" } : null,
    durationIdealMinutes: null,
    durationMinimumMinutes: null,
    confidence,
  });
  const day = (id) => T.days.find((row) => row.id === id);
  const item = (id) => T.scheduleItems.find((row) => row.id === id);
  const patchDay = (id, values) => Object.assign(day(id) || {}, values);
  const patchItem = (id, values) => Object.assign(item(id) || {}, values);
  const removeItems = (predicate) => {
    for (let index = T.scheduleItems.length - 1; index >= 0; index -= 1) {
      if (predicate(T.scheduleItems[index])) T.scheduleItems.splice(index, 1);
    }
  };
  const renameItems = (oldIds, newPrefix, targetDayId, targetDate) => {
    const idSet = new Set(oldIds);
    const toNewId = (oldId) => `${newPrefix}${oldId.slice(oldId.indexOf("-") + 1)}`;
    const renamed = new Map();
    T.scheduleItems.forEach((row) => {
      if (!idSet.has(row.id)) return;
      const oldId = row.id;
      row.id = toNewId(oldId);
      row.dayId = targetDayId;
      if (row.parentId && idSet.has(row.parentId)) row.parentId = toNewId(row.parentId);
      if (row.timing?.start) row.timing.start.date = targetDate;
      if (row.timing?.end) row.timing.end.date = targetDate;
      renamed.set(oldId, row.id);
    });
    return renamed;
  };
  const makeItem = (id, title, kind, sequence, start, end, values = {}) => ({
    id, dayId: "d0102", kind, parentId: null, placeId: null, title,
    durationIdealMinutes: null, durationMinimumMinutes: null,
    travelMinutesBefore: null, bufferBeforeMinutes: null, bufferAfterMinutes: null,
    timeConstraint: "window", priority: "できれば", bookingId: null, articleId: null,
    fatigueEvidence: "日帰り行程", weatherDependency: "低", shortenable: true,
    dropRank: null, notes: [], sequence, groupId: null, inclusionStatus: "adopted",
    planningStatus: "needs_information", bookingRequirement: "unknown",
    timing: timing(DATE.d0102, start, end), ...values,
  });

  // Arrival day: protect immigration, baggage, hotel and recovery time.
  patchDay("d1226", {
    title: "Barcelona到着・ガウディを絞って巡る",
    theme: "到着日はPark Güell＋ガウディ邸内部1件を優先",
    hero: "Park GüellとCasa Milà／Casa Batllóのどちらか1件",
    startTime: "07:25", endTime: "18:00", walking: "中", rest: "ホテル到着後に休憩",
    mealStatus: "昼食・休憩を優先",
    load: { status: "最適化済み", level: "中", evidence: ["入国・荷物を含め10:30頃ホテル着", "有料内部見学は1件に限定"] },
    caution: "到着遅延時はPark Güellと内部見学1件のどちらかを削る。全部消化を前提にしない。",
  });
  patchItem("d1226-airport-city", {
    title: "入国・荷物受取・Barcelona市内ホテルへ",
    timing: timing(DATE.d1226, "07:25", "10:30"),
    notes: ["非Schengen到着の入国審査と荷物受取を含むworking time。ホテル到着は10:30頃を目安にする。"],
  });
  patchItem("d1226-parkguell", { priority: "必須", timing: timing(DATE.d1226, "12:00", "13:30"), notes: ["到着日の第一候補。発売後に予約枠を確定する。"] });
  patchItem("d1226-mila", { priority: "どちらか1件", timing: timing(DATE.d1226, "15:00", "16:30"), notes: ["Casa Batllóとの二択。内部見学は1件に限定する。"] });
  patchItem("d1226-batllo", { priority: "どちらか1件", timing: timing(DATE.d1226, "15:00", "16:30"), notes: ["Casa Milàとの二択。選ばない方は外観または見送り。"] });
  ["d1226-guell-palace", "d1226-placa-rei", "d1226-placa-reial", "d1226-casa-vicens", "d1226-sant-pau"].forEach((id) => patchItem(id, { priority: "余力があれば", inclusionStatus: "provisional" }));
  ["d1226-fira-sagrada", "d1227-fira-santa-llucia"].forEach((id) => patchItem(id, { inclusionStatus: "omitted", planningStatus: "draft", notes: ["通常は12/23終了。2026年日程公開後にFira de Reis／Nadal al Port等を再確認する。"] }));

  patchDay("d1227", {
    title: "Sagrada Família・Montjuïc",
    theme: "予約済みSagrada Famíliaと冬時間内のMontjuïc",
    hero: "Sagrada Família 10:00–12:30",
    caution: "予約原本で10:00が聖堂入場時刻か塔時刻かを確認。午後は冬季18:00終了を意識する。",
    mealStatus: "Sagrada後に軽い昼食、Montjuïc後は早めの夕食",
  });
  patchItem("d1227-sagrada", {
    priority: "必須・予約済み", inclusionStatus: "adopted", planningStatus: "confirmed",
    bookingRequirement: "booked", timing: timing(DATE.d1227, "10:00", "12:30", "confirmed"),
    notes: ["鐘塔エレベーター付き・3名分予約済み。予約原本で10:00が聖堂入場か塔時刻かを確認する。"],
  });

  // Move Montserrat to Monday and Tarragona to Tuesday using unique IDs.
  const montserratSourceIds = [...U.mainItemIdsByDay.d1229];
  const tarragonaSourceIds = U.mainItemIdsByDay.d1228.filter((id) => id !== "d1228-flamenco");
  const montserratIds = renameItems(montserratSourceIds, "d1228-montserrat-", "d1228", DATE.d1228);
  const tarragonaIds = renameItems(tarragonaSourceIds, "d1229-tarragona-", "d1229", DATE.d1229);
  patchDay("d1228", {
    title: "Montserrat日帰り＋フラメンコ",
    cityId: "montserrat", cityLabel: "Montserrat", theme: "山岳景観・修道院・黒いマリア像",
    hero: "Montserratの景観と修道院", movement: "FGC＋Aeri（強風時は登山鉄道）＋徒歩",
    walking: "中", rest: "下山後にBarcelonaで休憩", mealStatus: "Montserratで軽い昼食",
    load: { status: "最適化済み", level: "中", evidence: ["16:45頃Barcelona帰着", "夜は20:30頃のショー候補"] },
    caution: "少年聖歌隊は年末休暇の可能性が高いため前提にしない。強風時はAeriを使わず登山鉄道へ切り替える。",
  });
  patchItem(montserratIds.get("d1229-basilica"), { title: "Montserrat大聖堂", notes: ["少年聖歌隊は年末休暇の可能性が高いため行程の前提にしない。"] });
  patchItem(montserratIds.get("d1229-moreneta"), { title: "黒いマリア像" });
  patchItem(montserratIds.get("d1229-aeri-up"), { notes: ["強風・運休時はAeriを使わずMonistrol de Montserrat経由の登山鉄道へ切り替える。"] });
  patchItem("d1228-flamenco", {
    dayId: "d1228", title: "フラメンコショー（20:30頃の候補）", priority: "予約候補",
    inclusionStatus: "provisional", planningStatus: "needs_information", timing: timing(DATE.d1228, "20:30", "22:00"),
    notes: ["Montserrat帰着後に休憩を確保。会場・開演時刻・食事付きかを予約前に決める。"],
  });

  patchDay("d1229", {
    title: "Tarragona日帰り", cityId: "tarragona", cityLabel: "Tarragona",
    theme: "火曜日に古代ローマ遺産と旧市街を巡る", hero: "水道橋・円形闘技場・大聖堂",
    movement: "高速鉄道＋予約タクシー＋徒歩", walking: "多", rest: "Barcelona帰着後は軽め",
    mealStatus: "旧市街で昼食",
    load: { status: "最適化済み", level: "高", evidence: ["月曜休館を避け火曜日へ変更", "Camp駅から水道橋は予約タクシー優先"] },
    caution: "復路がTarragona市街駅発かCamp de Tarragona発か、列車発売後に駅名と時刻を必ず確定する。",
  });
  patchItem(tarragonaIds.get("d1228-ave-out"), { title: "高速列車 Barcelona Sants → Camp de Tarragona", timing: timing(DATE.d1229, "08:30", "09:03"), notes: ["発売前のworking time。列車発売後に便・駅名・時刻を確定する。"] });
  const taxiId = tarragonaIds.get("d1228-bus-n240");
  patchItem(taxiId, { title: "予約タクシー Camp de Tarragona → Pont del Diable", timing: timing(DATE.d1229, "09:10", "09:35"), notes: ["Camp駅は市街地から離れるため3名で予約タクシーを第一候補にする。"] });
  patchItem(tarragonaIds.get("d1228-bus-aqueduct"), { inclusionStatus: "omitted", planningStatus: "draft", title: "路線バス案（タクシー不成立時のみ再検討）" });
  patchItem(tarragonaIds.get("d1228-return"), { title: "Tarragona → Barcelona Sants", timing: timing(DATE.d1229, "17:00", "18:40"), notes: ["17時台発のworking time。Tarragona市街駅発かCamp de Tarragona発かを発売後に確定する。"] });

  patchDay("d1231", {
    title: "Prado・Retiro・Madrid年越し", theme: "短縮営業のPradoと休憩を守る年越し",
    hero: "Prado 10:00–13:30とPuerta del Sol", endTime: "深夜",
    rest: "午後と年越し前に休憩", mealStatus: "早い夕食を予約候補にする",
    caution: "Pradoは12/31の10:00–14:00短縮営業を前提。Solの入場規制・駅閉鎖は2026年発表後に確認する。",
  });
  patchItem("d1231-prado", { timing: timing(DATE.d1231, "10:00", "13:30"), notes: ["10:00予約候補。12/31は14:00閉館を前提に主要作品を13:30頃まで見る。"] });
  patchItem("d1231-san-silvestre", { priority: "雰囲気を見る程度", shortenable: true });
  patchItem("d1231-early-dinner", { timing: timing(DATE.d1231, "18:00", "19:30"), title: "休憩後の早い大晦日ディナー（予約候補）" });

  patchDay("d0101", {
    title: "Madrid回復日", theme: "遅く起きて旧市街を軽く歩く", hero: "休息と元日の旧市街",
    startTime: "11:00", endTime: "17:00", walking: "少", rest: "多・早めにホテルへ",
    mealStatus: "San Ginés、ゆっくり昼食・カフェ",
    load: { status: "最適化済み", level: "低", evidence: ["年越し翌日の意図的な回復日"] },
    caution: "王宮は1/1休館想定。内部見学や主要施設を詰め込まない。",
  });
  patchItem("d0101-palace-exterior", { inclusionStatus: "omitted", planningStatus: "draft", title: "Madrid王宮（1/1は休館・内部見学なし）" });

  // Replace the current Toledo day with Córdoba. Toledo remains only in historical source data.
  removeItems((row) => row.dayId === "d0102");
  const cordobaItems = [
    makeItem("d0102-cordoba-train-out", "高速列車 Madrid Atocha → Córdoba", "transfer", 10, "06:45", "08:30", { priority: "必須", shortenable: false, bookingId: "cordoba-train", bookingRequirement: "required", notes: ["06:30–07:00頃発、08:30–09:00頃着のworking time。発売後に便・時刻・料金を確定する。"] }),
    makeItem("d0102-cordoba-juderia", "ユダヤ人街（Judería）", "attraction", 20, "09:00", "09:40", { priority: "必須" }),
    makeItem("d0102-cordoba-synagogue", "Córdobaシナゴーグ", "attraction", 25, "09:40", "10:10", { priority: "できれば", notes: ["年始の開館時間を公開後に再確認する。"] }),
    makeItem("d0102-cordoba-mezquita", "メスキータ＝カテドラル", "attraction", 30, "10:30", "12:00", { priority: "必須", shortenable: false, bookingId: "cordoba-mezquita", bookingRequirement: "required", notes: ["10:30頃の予約候補。2027年1月2日の営業時間公開後に確定する。"] }),
    makeItem("d0102-cordoba-oldtown", "花の小径など旧市街散策", "attraction", 35, "12:00", "13:15", { priority: "できれば" }),
    makeItem("d0102-cordoba-lunch", "Córdoba郷土料理（salmorejo等）／Casa PepeまたはBodegas Campos", "meal", 40, "13:30", "15:00", { priority: "必須", shortenable: false, bookingRequirement: "recommended", notes: ["3人でsalmorejo、flamenquín、rabo de toro、berenjenas con mielを分け、Montilla-Morilesも候補にする。", "Casa Pepe de la JuderíaまたはBodegas Camposを予約候補にする。"] }),
    makeItem("d0102-cordoba-alcazar", "Alcázar周辺・庭園または外観", "attraction", 50, "15:10", "16:00", { priority: "できれば", notes: ["内部の再開状況次第で庭園または外観に切り替える。"] }),
    makeItem("d0102-cordoba-roman-bridge", "ローマ橋", "attraction", 55, "16:00", "16:30", { priority: "できれば", weatherDependency: "中" }),
    makeItem("d0102-cordoba-train-return", "高速列車 Córdoba → Madrid Atocha", "transfer", 60, "17:30", "19:15", { priority: "必須", shortenable: false, bookingId: "cordoba-train", bookingRequirement: "required", notes: ["17–18時台発、19–20時頃着のworking time。発売後に便・時刻・料金を確定する。"] }),
  ];
  T.scheduleItems.push(...cordobaItems);
  patchDay("d0102", {
    title: "Córdoba日帰り", city: "madrid", cityId: "cordoba", cityLabel: "Córdoba",
    status: "pending", statusLabel: "列車・営業時間は発売待ち", theme: "イスラム文化・Andalucía・郷土料理",
    startTime: "06:30", endTime: "20:00", movement: "高速鉄道＋徒歩", walking: "中～多",
    rest: "昼食を90分確保", mealStatus: "郷土料理を予約候補店でしっかり昼食",
    load: { status: "最適化済み", level: "高", evidence: ["早朝発の日帰り", "昼食と帰路bufferを保護"] },
    hero: "メスキータ＝カテドラルとCórdoba料理",
    caution: "列車・施設営業時間は未公開。Alcázarは再開状況により庭園または外観へ切り替える。Toledoは今回は見送る。",
  });

  removeItems((row) => row.id === "d0103-serrano");
  const madridTemplate = item("d0103-san-miguel-market") || item("d0103-reinasofia");
  if (madridTemplate) {
    const palace = { ...madridTemplate, id: "d0103-palace-exterior", title: "Madrid王宮外観・旧市街", kind: "attraction", placeId: null, bookingId: null, articleId: null, priority: "できれば", bookingRequirement: "not_required", sequence: 35, timing: timing(DATE.d0103, "13:15", "14:15"), notes: ["王宮内部は入れず、外観と旧市街に留める。"] };
    const station = { ...madridTemplate, id: "d0103-atocha-buffer", title: "ホテルで荷物回収 → Atocha", kind: "transfer", placeId: null, bookingId: null, articleId: null, priority: "必須", shortenable: false, bookingRequirement: "not_required", sequence: 50, timing: timing(DATE.d0103, "15:15", "16:30"), notes: ["16:30頃Atocha着を守る。"] };
    removeItems((row) => row.id === palace.id || row.id === station.id);
    T.scheduleItems.push(palace, station);
  }
  patchDay("d0103", {
    title: "Reina Sofía・Madrid旧市街 → Barcelona", theme: "Reina Sofíaを主軸に16:30 Atocha着",
    hero: "Reina Sofíaと予約済みiryo 061171", endTime: "20:42", walking: "中", rest: "昼食と列車bufferを保護",
    mealStatus: "美術館後に昼食", caution: "王宮は外観のみ。Serrano通りは外し、16:30頃Atocha着を優先する。",
  });
  patchItem("d0103-reinasofia", { timing: timing(DATE.d0103, "10:00", "12:30"), priority: "必須", notes: ["GuernicaとDalí作品を主軸に12:30まで。日曜14:30閉館でも詰め込まない。"] });
  patchItem("d0103-san-miguel-market", { title: "旧市街で昼食", timing: timing(DATE.d0103, "12:30", "13:15"), kind: "meal", priority: "必須" });
  patchItem("d0103-train-barcelona", { title: "iryo 061171 Madrid Atocha → Barcelona Sants", planningStatus: "confirmed", bookingRequirement: "booked", timing: timing(DATE.d0103, "17:22", "20:42", "confirmed"), notes: ["3名分予約済み。16:30頃Atocha着を守る。"] });
  patchItem("d1230-train-madrid", { title: "iryo 06150 Barcelona Sants → Madrid Atocha", planningStatus: "confirmed", bookingRequirement: "booked", timing: timing(DATE.d1230, "14:50", "17:52", "confirmed"), notes: ["3名分予約済み。"] });

  patchDay("d0104", {
    title: "Barcelona → Shanghai", theme: "国際線3時間前を守る早朝空港移動",
    startTime: "06:35", hero: "07:15–07:30までにBCN T1到着",
    caution: "10:40発のため08:17市内発は不可。Aerobus A1または予約タクシーを最終決定する。",
  });
  patchItem("d0104-airport-taxi", { title: "Aerobus A1または予約タクシーでBCN T1へ", timing: timing(DATE.d0104, "06:40", "07:25"), notes: ["Catalunyaを06:35–06:50頃出発し、07:15–07:30頃T1到着。国際線3時間前目安を守る。"] });

  const main = U.mainItemIdsByDay;
  main.d1226 = ["d1226-pvg-bcn", "d1226-airport-city", "d1226-parkguell", "d1226-mila", "d1226-batllo", "d1226-guell-palace", "d1226-placa-rei", "d1226-placa-reial", "d1226-casa-vicens", "d1226-sant-pau"];
  main.d1227 = ["d1227-sagrada", "d1227-columbus", "d1227-cable-miramar-castell", "d1227-montjuic-castle", "d1227-cable-castell-park", "d1227-el-corte"];
  main.d1228 = [...montserratSourceIds.map((id) => montserratIds.get(id)), "d1228-flamenco"].filter((id) => item(id) && item(id).inclusionStatus !== "omitted");
  main.d1229 = tarragonaSourceIds.map((id) => tarragonaIds.get(id)).filter((id) => item(id) && item(id).inclusionStatus !== "omitted");
  main.d0101 = ["d0101-sol", "d0101-san-gines", "d0101-plaza-mayor", "d0101-san-isidro", "d0101-lunch"].filter((id) => item(id));
  main.d0102 = cordobaItems.map((row) => row.id);
  patchItem("d0103-checkout", { dayId: "d0103", inclusionStatus: "adopted", planningStatus: "needs_information" });
  main.d0103 = ["d0103-checkout", "d0103-reinasofia", "d0103-san-miguel-market", "d0103-palace-exterior", "d0103-atocha-buffer", "d0103-train-barcelona", "d0103-final-hotel"].filter((id) => item(id));

  U.proposalsByDay.d1226 = [{ title: "Casa MilàかCasa Batllóの内部1件を選ぶ", reason: "到着日の疲労と遅延に備え、有料内部見学を1件に限定する。" }];
  U.proposalsByDay.d1228 = [{ title: "Aeri強風時は登山鉄道へ", reason: "山上アクセスの運休に備える。少年聖歌隊は行程の前提にしない。" }];
  U.proposalsByDay.d1229 = [{ title: "復路の駅名を発売後に確定", reason: "Tarragona市街駅とCamp de Tarragonaを取り違えない。" }];
  U.proposalsByDay.d0102 = [{ title: "Córdoba列車とMezquitaを優先予約", reason: "発売・公開後に同日の時刻を確定する。Toledoは今回は見送る。" }];
  U.proposalsByDay.d0103 = [{ title: "王宮は外観のみ", reason: "Reina Sofíaと17:22発iryoの時間を守る。" }];
  U.proposalsByDay.d0104 = [{ title: "Aerobus A1か予約タクシーを決める", reason: "07:15–07:30頃のT1到着を守る。" }];

  U.transportLegs = U.transportLegs.filter((row) => !["d1228", "d1229", "d0102"].includes(row.dayId) && !["leg-16b", "leg-17", "leg-17b"].includes(row.id));
  U.transportLegs.push(
    { id: "leg-ir01-montserrat-out", dayId: "d1228", icon: "🚄", service: "FGC R5", route: "Espanya → Aeri de Montserrat", time: "08:36–09:36頃・要確認", price: "発売時確認", baggage: "日帰り手荷物" },
    { id: "leg-ir01-montserrat-aeri", dayId: "d1228", icon: "🚡", service: "Aeri（強風時は登山鉄道）", route: "Aeri de Montserrat → 山上", time: "09:45頃・要確認", price: "発売時確認", baggage: "日帰り手荷物" },
    { id: "leg-ir01-montserrat-back", dayId: "d1228", icon: "🚄", service: "Aeri＋FGC R5", route: "Montserrat → Barcelona Espanya", time: "15:30–16:45頃・要確認", price: "発売時確認", baggage: "日帰り手荷物" },
    { id: "leg-ir02-tarragona-out", dayId: "d1229", icon: "🚄", service: "高速列車（発売後確定）", route: "Barcelona Sants → Camp de Tarragona", time: "08:30–09:03頃・working time", price: "要確認", baggage: "日帰り手荷物" },
    { id: "leg-ir02-tarragona-taxi", dayId: "d1229", icon: "🚕", service: "予約タクシー（第一候補）", route: "Camp de Tarragona → Pont del Diable", time: "09:10–09:35頃", price: "要確認", baggage: "3名" },
    { id: "leg-ir02-tarragona-back", dayId: "d1229", icon: "🚄", service: "高速列車（駅名・便は発売後確定）", route: "TarragonaまたはCamp de Tarragona → Barcelona Sants", time: "17時台–18:40頃・working time", price: "要確認", baggage: "日帰り手荷物" },
    { id: "leg-ir03-cordoba-out", dayId: "d0102", icon: "🚄", service: "高速列車（発売後確定）", route: "Madrid Atocha → Córdoba", time: "06:30–07:00頃発／08:30–09:00頃着", price: "要確認", baggage: "日帰り手荷物" },
    { id: "leg-ir03-cordoba-back", dayId: "d0102", icon: "🚄", service: "高速列車（発売後確定）", route: "Córdoba → Madrid Atocha", time: "17–18時台発／19–20時頃着", price: "要確認", baggage: "日帰り手荷物" },
    { id: "leg-ir04-airport", dayId: "d0104", icon: "🚌", service: "Aerobus A1または予約タクシー", route: "Pl. Catalunya／ホテル → BCN T1", time: "06:35–06:50頃発／07:15–07:30頃着", price: "要確認", baggage: "大型荷物3個" },
  );
  const leg16 = U.transportLegs.find((row) => row.id === "leg-16");
  if (leg16) Object.assign(leg16, { service: "iryo 061171（3名予約済み）", time: "17:22–20:42", price: "予約済み・原本確認" });
  const leg11 = U.transportLegs.find((row) => row.id === "leg-11");
  if (leg11) Object.assign(leg11, { service: "iryo 06150（3名予約済み）", time: "14:50–17:52", price: "予約済み・原本確認" });

  U.adjustments = U.adjustments.filter((row) => !["d1226", "d1228", "d1229", "d0102", "d0103", "d0104"].includes(row.dayId));
  U.adjustments.push(
    { id: "adj-ir01", dayId: "d1226", itemId: "d1226-mila", title: "12/26 ガウディ邸の二択", reason: "Casa MilàかCasa Batllóの内部1件を予約する。", status: "open" },
    { id: "adj-ir02", dayId: "d1228", itemId: montserratIds.get("d1229-aeri-up"), title: "12/28 Montserrat運行", reason: "Aeriの風予報と登山鉄道代替を前日確認する。", status: "open" },
    { id: "adj-ir03", dayId: "d1229", itemId: tarragonaIds.get("d1228-return"), title: "12/29 Tarragona復路", reason: "駅名・列車時刻を発売後に確定する。", status: "open" },
    { id: "adj-ir04", dayId: "d0102", itemId: "d0102-cordoba-train-out", title: "1/2 Córdoba予約", reason: "往復列車、Mezquita、昼食店を優先して確定する。", status: "open" },
    { id: "adj-ir05", dayId: "d0103", itemId: "d0103-atocha-buffer", title: "1/3 Atocha到着", reason: "16:30頃の駅到着を守る。", status: "open" },
    { id: "adj-ir06", dayId: "d0104", itemId: "d0104-airport-taxi", title: "1/4 空港移動", reason: "06:35–06:50頃の出発手段を確定する。", status: "open" },
  );

  U.budget.estimates = U.budget.estimates.filter((row) => !["avant", "palace"].includes(row.id));
  const markConfirmed = (id, note) => {
    const row = U.budget.estimates.find((entry) => entry.id === id);
    if (row) Object.assign(row, { status: "confirmed", note });
  };
  markConfirmed("sagrada", "鐘塔付き・3名分予約済み。12/27 10:00–12:30。予約原本で入場と塔の時刻を確認。");
  markConfirmed("iryo-out", "iryo 06150・3名分予約済み。12/30 14:50–17:52。");
  markConfirmed("iryo-back", "iryo 061171・3名分予約済み。1/3 17:22–20:42。");
  U.budget.estimates.push({ id: "cordoba-rail", category: "交通", title: "Córdoba往復高速列車", status: "unconfirmed", currency: "EUR", amount: null, quantity: 3, note: "2027-01-02分は発売後に確定。" });

  const buildContingency = (dayId, profile) => {
    const valid = new Set(main[dayId].filter((id) => item(id)));
    const pick = (ids) => ids.filter((id) => valid.has(id));
    const optional = pick(profile.optional || []);
    const fixed = pick(profile.fixed || []);
    const anchor = pick(profile.anchor || []);
    const outdoor = pick(profile.outdoor || []);
    const meals = pick(profile.meals || []);
    const make = (keep, shorten, drop, instruction) => {
      const keepIds = [...new Set(pick(keep))];
      const shortenIds = [...new Set(pick(shorten))].filter((id) => !keepIds.includes(id));
      const dropIds = [...new Set(pick(drop))].filter((id) => !keepIds.includes(id) && !shortenIds.includes(id));
      return {
        status: "設計済み", keepItemIds: keepIds, shortenItemIds: shortenIds,
        dropItemIds: dropIds, replacementItemIds: [], instruction,
        informationNeeded: ["旅行7日前と前日に公式運行・営業・天候を再確認。"], otherDayTransfer: false, source: "itinerary-refresh-01",
      };
    };
    const all = [...valid];
    day(dayId).contingency = {
      delay30: make([...fixed, ...anchor], optional, [], "30分遅れ：予約・主役・帰路を残し、任意項目を短縮する。"),
      delay60: make([...fixed, ...anchor], optional.slice(0, 1), optional.slice(1), "1時間遅れ：予約・主役・帰路を残し、任意項目を削る。"),
      fatigue: make([...fixed, ...anchor, ...meals], [], optional, "疲れた：予約・主役・食事・帰路を残し、歩行の多い任意項目を中止する。"),
      rain: make(all.filter((id) => !outdoor.includes(id)), outdoor.slice(0, 1), outdoor.slice(1), "雨・強風：屋内主役と帰路を残し、屋外項目を短縮・中止する。"),
      majorDelay: make(fixed, anchor, optional, "休業・運休：固定交通と安全な帰路を優先し、公式情報に従って同日代替へ切り替える。"),
      restaurantUnavailable: make(all.filter((id) => !meals.includes(id)), meals, [], "満席：観光と交通を維持し、食事だけ同じ街区の代替店・軽食へ切り替える。"),
    };
    if (T.uxRebuild04?.profiles) T.uxRebuild04.profiles[dayId] = profile;
  };
  buildContingency("d1226", { fixed: ["d1226-pvg-bcn", "d1226-airport-city"], anchor: ["d1226-parkguell"], optional: ["d1226-mila", "d1226-batllo", "d1226-guell-palace", "d1226-placa-rei", "d1226-placa-reial", "d1226-casa-vicens", "d1226-sant-pau"], outdoor: ["d1226-parkguell", "d1226-placa-rei", "d1226-placa-reial"], meals: [] });
  buildContingency("d1227", { fixed: ["d1227-sagrada"], anchor: ["d1227-sagrada"], optional: main.d1227.filter((id) => id !== "d1227-sagrada"), outdoor: ["d1227-columbus", "d1227-cable-miramar-castell", "d1227-montjuic-castle", "d1227-cable-castell-park"], meals: [] });
  buildContingency("d1228", { fixed: [montserratIds.get("d1229-fgc-out"), montserratIds.get("d1229-aeri-down"), montserratIds.get("d1229-fgc-return")], anchor: [montserratIds.get("d1229-basilica"), montserratIds.get("d1229-moreneta")], optional: [montserratIds.get("d1229-museum"), "d1228-flamenco"], outdoor: [montserratIds.get("d1229-aeri-up"), montserratIds.get("d1229-aeri-down")], meals: [] });
  buildContingency("d1229", { fixed: [tarragonaIds.get("d1228-ave-out"), taxiId, tarragonaIds.get("d1228-return")], anchor: [tarragonaIds.get("d1228-amphitheatre"), tarragonaIds.get("d1228-cathedral")], optional: [tarragonaIds.get("d1228-aqueduct"), tarragonaIds.get("d1228-pinchos")], outdoor: [tarragonaIds.get("d1228-aqueduct"), tarragonaIds.get("d1228-amphitheatre")], meals: [tarragonaIds.get("d1228-lunch"), tarragonaIds.get("d1228-pinchos")] });
  buildContingency("d0101", { fixed: [], anchor: ["d0101-plaza-mayor", "d0101-lunch"], optional: ["d0101-sol", "d0101-san-gines", "d0101-san-isidro"], outdoor: ["d0101-sol", "d0101-plaza-mayor", "d0101-san-isidro"], meals: ["d0101-san-gines", "d0101-lunch"] });
  buildContingency("d0102", { fixed: ["d0102-cordoba-train-out", "d0102-cordoba-train-return"], anchor: ["d0102-cordoba-mezquita", "d0102-cordoba-lunch"], optional: ["d0102-cordoba-juderia", "d0102-cordoba-synagogue", "d0102-cordoba-oldtown", "d0102-cordoba-alcazar", "d0102-cordoba-roman-bridge"], outdoor: ["d0102-cordoba-juderia", "d0102-cordoba-oldtown", "d0102-cordoba-alcazar", "d0102-cordoba-roman-bridge"], meals: ["d0102-cordoba-lunch"] });
  buildContingency("d0103", { fixed: ["d0103-train-barcelona", "d0103-final-hotel"], anchor: ["d0103-reinasofia", "d0103-atocha-buffer"], optional: ["d0103-san-miguel-market", "d0103-palace-exterior"], outdoor: ["d0103-palace-exterior"], meals: ["d0103-san-miguel-market"] });
  buildContingency("d0104", { fixed: ["d0104-airport-taxi", "d0104-bcn-depart", "d0104-pvg-arrive"], anchor: [], optional: [], outdoor: [], meals: [] });

  T.itineraryRefresh01 = Object.freeze({
    appliedAt: "2026-08-07", source: "user-approved itinerary consultation",
    dayTrips: Object.freeze(["Montserrat", "Tarragona", "Córdoba"]),
    lodgingPreserved: true,
  });
})();
