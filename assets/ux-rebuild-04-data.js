(function () {
  "use strict";

  const T = window.TRIP;
  const U = T?.uxRebuild03;
  if (!T || !U) return;

  const keys = ["delay30", "delay60", "fatigue", "rain", "majorDelay", "restaurantUnavailable"];
  const unique = (values) => [...new Set((values || []).filter(Boolean))];
  const without = (values, excluded) => {
    const blocked = new Set(excluded || []);
    return unique(values).filter((id) => !blocked.has(id));
  };
  const merge = (...groups) => unique(groups.flat());
  const profiles = {
    d1225: {
      fixed: ["d1225-nrt-depart", "d1225-pvg-arrive"],
      anchor: [], optional: [], outdoor: [], walking: [], meals: [],
      closure: ["d1225-nrt-depart"],
    },
    d1226: {
      fixed: ["d1226-pvg-bcn", "d1226-airport-city"],
      anchor: ["d1226-mila", "d1226-batllo"],
      optional: ["d1226-guell-palace", "d1226-placa-rei", "d1226-placa-reial", "d1226-casa-vicens", "d1226-sant-pau", "d1226-fira-sagrada", "d1226-parkguell"],
      outdoor: ["d1226-placa-rei", "d1226-placa-reial", "d1226-fira-sagrada", "d1226-parkguell"],
      walking: ["d1226-guell-palace", "d1226-placa-rei", "d1226-placa-reial", "d1226-casa-vicens", "d1226-sant-pau", "d1226-fira-sagrada", "d1226-parkguell"],
      meals: [], closure: ["d1226-mila", "d1226-batllo", "d1226-guell-palace", "d1226-casa-vicens", "d1226-sant-pau"],
    },
    d1227: {
      fixed: [], anchor: ["d1227-sagrada"],
      optional: ["d1227-columbus", "d1227-cable-miramar-castell", "d1227-montjuic-castle", "d1227-cable-castell-park", "d1227-el-corte", "d1227-fira-santa-llucia"],
      outdoor: ["d1227-columbus", "d1227-cable-miramar-castell", "d1227-montjuic-castle", "d1227-cable-castell-park", "d1227-fira-santa-llucia"],
      walking: ["d1227-columbus", "d1227-montjuic-castle", "d1227-fira-santa-llucia"],
      meals: [], closure: ["d1227-sagrada", "d1227-cable-miramar-castell", "d1227-montjuic-castle", "d1227-cable-castell-park"],
    },
    d1228: {
      fixed: ["d1228-ave-out", "d1228-bus-n240", "d1228-bus-aqueduct", "d1228-bus-city", "d1228-return"],
      anchor: ["d1228-amphitheatre", "d1228-cathedral"],
      optional: ["d1228-aqueduct", "d1228-pinchos", "d1228-flamenco"],
      outdoor: ["d1228-aqueduct", "d1228-amphitheatre"],
      walking: ["d1228-aqueduct", "d1228-amphitheatre", "d1228-cathedral"],
      meals: ["d1228-pinchos"], closure: ["d1228-amphitheatre"],
    },
    d1229: {
      fixed: ["d1229-fgc-out", "d1229-aeri-up", "d1229-aeri-down", "d1229-fgc-return"],
      anchor: ["d1229-basilica", "d1229-moreneta"],
      optional: ["d1229-museum"], outdoor: ["d1229-aeri-up", "d1229-aeri-down"],
      walking: ["d1229-moreneta", "d1229-museum"], meals: [],
      closure: ["d1229-aeri-up", "d1229-basilica", "d1229-moreneta", "d1229-museum"],
    },
    d1230: {
      fixed: ["d1230-checkout", "d1230-train-madrid"],
      anchor: [], optional: ["d1230-boqueria", "d1230-cathedral"],
      outdoor: [], walking: ["d1230-boqueria", "d1230-cathedral"], meals: [],
      closure: ["d1230-boqueria", "d1230-cathedral"],
    },
    d1231: {
      fixed: [], anchor: ["d1231-prado", "d1231-early-dinner", "d1231-countdown"],
      optional: ["d1231-cibeles", "d1231-san-jeronimo", "d1231-alcala", "d1231-retiro", "d1231-san-silvestre"],
      outdoor: ["d1231-cibeles", "d1231-alcala", "d1231-retiro", "d1231-san-silvestre", "d1231-countdown"],
      walking: ["d1231-cibeles", "d1231-san-jeronimo", "d1231-alcala", "d1231-retiro", "d1231-san-silvestre"],
      meals: ["d1231-early-dinner"], closure: ["d1231-prado", "d1231-san-jeronimo"],
    },
    d0101: {
      fixed: [], anchor: ["d0101-plaza-mayor", "d0101-lunch"],
      optional: ["d0101-sol", "d0101-san-gines", "d0101-san-isidro", "d0101-palace-exterior", "d0101-san-francisco"],
      outdoor: ["d0101-sol", "d0101-plaza-mayor", "d0101-palace-exterior", "d0101-san-francisco"],
      walking: ["d0101-sol", "d0101-plaza-mayor", "d0101-san-isidro", "d0101-palace-exterior", "d0101-san-francisco"],
      meals: ["d0101-san-gines", "d0101-lunch"], closure: ["d0101-palace-exterior", "d0101-san-francisco"],
    },
    d0102: {
      fixed: ["d0102-train-out", "d0102-train-return"],
      anchor: ["d0102-cathedral"],
      optional: ["d0102-santotome", "d0102-greco", "d0102-santacruz"],
      outdoor: [], walking: ["d0102-santotome", "d0102-greco", "d0102-santacruz"],
      meals: [], closure: ["d0102-cathedral", "d0102-santotome", "d0102-greco", "d0102-santacruz"],
    },
    d0103: {
      fixed: ["d0103-train-barcelona", "d0103-final-hotel"],
      anchor: ["d0103-reinasofia"],
      optional: ["d0103-serrano", "d0103-san-miguel-market"],
      outdoor: ["d0103-serrano"], walking: ["d0103-serrano"],
      meals: ["d0103-san-miguel-market"], closure: ["d0103-reinasofia"],
    },
    d0104: {
      fixed: ["d0104-airport-taxi", "d0104-bcn-depart", "d0104-pvg-arrive"],
      anchor: [], optional: [], outdoor: [], walking: [], meals: [],
      closure: ["d0104-bcn-depart"],
    },
    d0105: {
      fixed: ["d0105-pvg-depart", "d0105-nrt-arrive"],
      anchor: [], optional: [], outdoor: [], walking: [], meals: [],
      closure: ["d0105-pvg-depart"],
    },
  };

  const genericInstructions = (day) => ({
    delay30: `30分遅れ：${day.hero}と固定交通を残し、任意項目を短縮する。`,
    delay60: `1時間遅れ：${day.hero}と帰路を残し、任意項目を削って固定時刻へ戻す。`,
    fatigue: `疲れた：${day.hero}と帰路を残し、歩行の多い項目を短縮・中止する。`,
    rain: `雨：${day.hero}と屋内項目・帰路を残し、屋外項目を短縮・中止する。`,
    majorDelay: `休業：公式情報を確認し、閉鎖対象を外して固定交通と同日の代替を守る。`,
    restaurantUnavailable: "食欲がない：観光と固定交通は変えず、食事枠だけ短縮して軽食・持帰りへ切り替える。",
  });
  const overrides = {
    d1227: {
      delay30: { keep: ["d1227-sagrada"], shorten: ["d1227-columbus", "d1227-cable-miramar-castell", "d1227-montjuic-castle", "d1227-cable-castell-park"], drop: ["d1227-fira-santa-llucia"], instruction: "30分遅れ：Sagrada Famíliaを残し、コロンブス記念塔・ロープウェイ・モンジュイック城を短縮する。" },
      delay60: { keep: ["d1227-sagrada"], shorten: ["d1227-columbus"], drop: ["d1227-cable-miramar-castell", "d1227-montjuic-castle", "d1227-cable-castell-park", "d1227-fira-santa-llucia"], instruction: "1時間遅れ：Sagrada Famíliaを残し、コロンブス記念塔だけ短縮してMontjuïc行程を削る。" },
      fatigue: { keep: ["d1227-sagrada"], shorten: ["d1227-columbus", "d1227-el-corte"], drop: ["d1227-cable-miramar-castell", "d1227-montjuic-castle", "d1227-cable-castell-park", "d1227-fira-santa-llucia"], instruction: "疲れた：Sagrada Famíliaを残し、コロンブス記念塔とEl Corteを短縮、ロープウェイとモンジュイック城を中止する。" },
      rain: { keep: ["d1227-sagrada", "d1227-el-corte"], shorten: ["d1227-montjuic-castle"], drop: ["d1227-columbus", "d1227-cable-miramar-castell", "d1227-cable-castell-park", "d1227-fira-santa-llucia"], instruction: "雨：Sagrada FamíliaとEl Corteを残し、コロンブス記念塔・ロープウェイを中止、モンジュイック城は短縮判断する。" },
      majorDelay: { keep: ["d1227-el-corte"], shorten: ["d1227-columbus"], drop: ["d1227-sagrada", "d1227-cable-miramar-castell", "d1227-montjuic-castle", "d1227-cable-castell-park"], instruction: "休業：休業施設を外し、営業確認できたコロンブス記念塔またはEl Corteへ切り替える。" },
      restaurantUnavailable: { keep: ["d1227-sagrada", "d1227-columbus", "d1227-cable-miramar-castell", "d1227-montjuic-castle", "d1227-cable-castell-park", "d1227-el-corte"], shorten: [], drop: ["d1227-fira-santa-llucia"], instruction: "食欲がない：観光は維持し、同じ街区の軽食・持帰りだけに切り替える。" },
    },
    d1228: {
      delay30: { keep: ["d1228-ave-out", "d1228-bus-n240", "d1228-bus-aqueduct", "d1228-bus-city", "d1228-cathedral", "d1228-return"], shorten: ["d1228-aqueduct", "d1228-amphitheatre", "d1228-pinchos"], drop: ["d1228-flamenco"], instruction: "30分遅れ：Tarragona復路3候補を確保し、水道橋・円形闘技場・昼食を短縮する。" },
      delay60: { keep: ["d1228-ave-out", "d1228-bus-n240", "d1228-bus-aqueduct", "d1228-bus-city", "d1228-return"], shorten: ["d1228-cathedral"], drop: ["d1228-aqueduct", "d1228-amphitheatre", "d1228-pinchos", "d1228-flamenco"], instruction: "1時間遅れ：Tarragona復路3候補を最優先し、市内観光は大聖堂だけ短縮して他を削る。" },
      fatigue: { keep: ["d1228-ave-out", "d1228-bus-n240", "d1228-bus-aqueduct", "d1228-bus-city", "d1228-cathedral", "d1228-return"], shorten: ["d1228-amphitheatre"], drop: ["d1228-aqueduct", "d1228-pinchos", "d1228-flamenco"], instruction: "疲れた：大聖堂と復路を残し、水道橋・バル・フラメンコを中止する。" },
      rain: { keep: ["d1228-ave-out", "d1228-bus-n240", "d1228-bus-aqueduct", "d1228-bus-city", "d1228-amphitheatre", "d1228-cathedral", "d1228-return"], shorten: ["d1228-aqueduct"], drop: ["d1228-flamenco"], instruction: "雨：屋外の水道橋を短縮し、円形闘技場・大聖堂とTarragona復路を優先する。" },
      majorDelay: { keep: ["d1228-ave-out", "d1228-bus-n240", "d1228-bus-aqueduct", "d1228-bus-city", "d1228-cathedral", "d1228-return"], shorten: ["d1228-pinchos"], drop: ["d1228-aqueduct", "d1228-amphitheatre", "d1228-flamenco"], instruction: "休業：円形闘技場は月曜休館のため外し、大聖堂とTarragona復路を残す。同日代替は旧市街の屋内休憩とする。" },
      restaurantUnavailable: { keep: ["d1228-ave-out", "d1228-bus-n240", "d1228-bus-aqueduct", "d1228-bus-city", "d1228-aqueduct", "d1228-amphitheatre", "d1228-cathedral", "d1228-return"], shorten: ["d1228-pinchos"], drop: ["d1228-flamenco"], instruction: "食欲がない：Tarragona観光と復路は維持し、ピンチョス通りを短縮して軽食・持帰りへ切り替える。" },
    },
    d1229: {
      rain: { keep: [], shorten: [], drop: ["d1229-fgc-out", "d1229-aeri-up", "d1229-basilica", "d1229-moreneta", "d1229-museum", "d1229-aeri-down", "d1229-fgc-return"], instruction: "〔他日振替案〕雨・強風でMontserratを中止する場合、別日のPark Güell・Picasso候補を前倒しする。家族判断前の代替案。" },
      majorDelay: { keep: ["d1229-aeri-down", "d1229-fgc-return"], shorten: [], drop: ["d1229-basilica", "d1229-moreneta", "d1229-museum"], instruction: "〔他日振替案〕Montserrat施設休業時は安全な下山と帰路を優先し、別日のPark Güell・Picasso候補を前倒しする。家族判断前の代替案。" },
    },
  };

  const buildGeneric = (day, profile, key) => {
    const instructions = genericInstructions(day);
    const all = U.mainItemIdsByDay[day.id] || [];
    if (key === "delay30") return { keep: merge(profile.fixed, profile.anchor), shorten: profile.optional, drop: [], instruction: instructions[key] };
    if (key === "delay60") return { keep: merge(profile.fixed, profile.anchor), shorten: profile.optional.slice(0, 1), drop: profile.optional.slice(1), instruction: instructions[key] };
    if (key === "fatigue") return { keep: merge(profile.fixed, profile.anchor), shorten: profile.walking.slice(0, 1), drop: merge(profile.walking.slice(1), without(profile.optional, profile.walking)), instruction: instructions[key] };
    if (key === "rain") return { keep: merge(without(profile.fixed, profile.outdoor), without(profile.anchor, profile.outdoor)), shorten: profile.outdoor.slice(0, 1), drop: profile.outdoor.slice(1), instruction: instructions[key] };
    if (key === "majorDelay") return { keep: without(profile.fixed, profile.closure), shorten: without(profile.anchor, profile.closure), drop: merge(profile.closure, profile.optional), instruction: instructions[key] };
    return { keep: without(all, profile.meals), shorten: profile.meals, drop: [], instruction: instructions[key] };
  };
  const finalize = (dayId, plan) => {
    const valid = new Set(U.mainItemIdsByDay[dayId] || []);
    const keep = unique(plan.keep).filter((id) => valid.has(id));
    const shorten = without(unique(plan.shorten).filter((id) => valid.has(id)), keep);
    const drop = without(unique(plan.drop).filter((id) => valid.has(id)), merge(keep, shorten));
    return {
      status: "設計済み",
      keepItemIds: keep,
      shortenItemIds: shorten,
      dropItemIds: drop,
      replacementItemIds: [],
      instruction: plan.instruction,
      informationNeeded: ["旅行7日前と前日に公式運行・営業・天候を再確認。"],
      otherDayTransfer: /^〔他日振替案〕/.test(plan.instruction),
      source: "ux-rebuild-04",
    };
  };

  T.days.forEach((day) => {
    const profile = profiles[day.id];
    if (!profile) return;
    day.contingency ||= {};
    keys.forEach((key) => {
      const plan = overrides[day.id]?.[key] || buildGeneric(day, profile, key);
      day.contingency[key] = finalize(day.id, plan);
    });
  });

  const returnItem = T.scheduleItems.find((row) => row.id === "d0103-train-barcelona");
  if (returnItem) Object.assign(returnItem, {
    title: "iryo（便名は発売後に確定）Madrid Atocha → Barcelona Sants",
    notes: ["17:22–20:42と¥15,448×3はDrive v2の暫定値。2027年時刻表の発売後に便名・時刻・料金を公式情報で確定する。"],
  });
  const returnLeg = U.transportLegs.find((row) => row.id === "leg-16");
  if (returnLeg) Object.assign(returnLeg, {
    service: "iryo（便名は発売後に確定）",
    time: "17:22–20:42（暫定）",
    price: "¥15,448×3（Drive v2暫定値）",
  });
  const returnBudget = U.budget.estimates.find((row) => row.id === "iryo-back");
  if (returnBudget) Object.assign(returnBudget, {
    title: "iryo（便名は発売後に確定）Madrid→Barcelona",
    note: "17:22–20:42・¥15,448×3はいずれもDrive v2暫定値。発売後に公式情報で置換。",
  });

  T.uxRebuild04 = Object.freeze({
    source: "CLI修正指示_ux-rebuild-04.md",
    sourceFileId: "1FGMEnC0NPJhcpfjmgF7gOsF3X3NoD7VY",
    auditFileId: "1njgJW56bN7elrYkjN0pQnPj312rLb6J1",
    scenarioKeys: keys,
    profiles,
  });
})();
