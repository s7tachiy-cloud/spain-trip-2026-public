"use strict";

(function exposeFullTripAdapter(global) {
  const trip = global.TRIP || {};
  const finalPlan = global.UXFinalPlan || { days: {} };
  const list = (value) => Array.isArray(value) ? value : [];
  const travelerText = (value) => String(value || "")
    .replace(/Barcelona初訪問core/g, "Barcelona主要観光日")
    .replace(/\bcore\b/gi, "主要予定")
    .replace(/buffer/gi, "余裕時間")
    .replace(/check-in\/out/gi, "チェックイン・チェックアウト")
    .replace(/check-in/gi, "チェックイン")
    .replace(/check-out|checkout/gi, "チェックアウト")
    .replace(/fallback/gi, "代替案")
    .replace(/snapshot/gi, "検索時点の記録")
    .replace(/offline/gi, "オフライン")
    .replace(/through baggage/gi, "預け荷物が最終目的地まで運ばれるか")
    .replace(/terminal/gi, "ターミナル")
    .replace(/Beverage/gi, "飲み物")
    .replace(/2026時刻未公表。一本早い便を含め発売後再計算。/g, "08:36発は仮の計画です。年末ダイヤ発売後、一本早い便と比較して確定します。")
    .replace(/発売後に置換/g, "発売後に確定")
    .replace(/再検証/g, "余裕時間を確認")
    .replace(/再計算/g, "時刻を確定")
    .replace(/航空会社原本/g, "航空会社の予約内容")
    .replace(/Drive v2本編。料金・時間・公開範囲は旅行前に公式情報で再確認する。/g, "候補に加える場合は、営業時間と入場条件を公式サイトで確認します。")
    .replace(/Drive v2本編/g, "旅行ガイド")
    .replace(/canonical/gi, "旅程データ")
    .replace(/本案/g, "第一案")
    .replace(/^不要$/, "予約不要")
    .replace(/私的予約情報|予約原本|私的予約証拠/g, "予約内容");
  const travelerStatus = (value) => ({
    "予定時刻": "この時刻で計画", "発売・予約後に確定": "発売後に確定", "当日調整": "当日判断",
    "確認済み": "確認済み", "確定": "確認済み"
  }[value] || travelerText(value));
  const byId = (rows) => new Map(list(rows).map((row) => [row.id, row]));
  const dayById = byId(trip.days);
  const placeById = byId(trip.places);
  const articleById = byId(trip.learningArticles);
  const bookingById = byId(trip.bookings);
  const sourceById = byId(trip.sources);
  const dishById = byId(trip.dishes);

  const cityMeta = {
    flight: { id: "移動日", tone: "flight", label: "INTERNATIONAL TRANSIT", intro: "日本とスペインをつなぐ長距離移動。空港到着、乗継、手荷物と休息を優先する。", food: "空港・機内では時刻と体調を優先し、確実に食べられる選択肢を持つ。", learn: "航空会社、ターミナル、乗継条件は私的な予約証拠で確認する。", hero: "barcelona-hero-v1.png" },
    barcelona: { id: "Barcelona", tone: "barcelona", label: "CATALUNYA · MEDITERRANEAN", intro: "地中海に面したCatalunyaの中心都市。モデルニスモ建築、旧市街、市場、海と丘が近い距離に集まる。", food: "Pa amb tomàquet、魚介、市場料理、Catalunyaの野菜料理を地区の雰囲気と一緒に楽しむ。", learn: "Catalunyaの文化とモデルニスモを先に知ると、建築や街の見え方が変わる。", hero: "barcelona-hero-v1.png" },
    madrid: { id: "Madrid", tone: "madrid", label: "CAPITAL · ART & PLAZAS", intro: "スペイン中央部の首都。王宮と広場、美術館が集まり、重厚な都市景観とバル文化を徒歩でつなげやすい。", food: "Cocido madrileño、イカのbocadillo、churrosなど、内陸の料理と気軽な軽食がある。", learn: "王室都市の歴史と美術館の代表作を先に知ると、広場や作品の意味をつかみやすい。", hero: "madrid-hero-v1.png" },
    tarragona: { id: "Tarragona", tone: "tarragona", label: "ROMAN COAST · CATALUNYA", intro: "地中海を望む古代ローマ都市Tarraco。海に面した競技場と、現代の街の中に残るcircusの構造を徒歩でつなぐ日帰り先。", food: "土地の象徴romesco／cassolaを第一に、魚介の米料理・fideus、魚介・tapasの順で楽しむ。", learn: "古代Tarracoと現代の町が同じ地形に重なることを知ると、遺跡の位置関係が見えやすい。", hero: "tarragona-hero-v2.png" },
    montserrat: { id: "Montserrat", tone: "montserrat", label: "MONASTERY · MOUNTAIN", intro: "奇岩の山並みと修道院が一体になった巡礼地。視界・風・交通運行・3人の体調がすべて良い日にだけ行く。", food: "La Cafeteriaを予約なしで利用し、あればmatóと蜂蜜を味わう。混雑時は出発前に用意した携帯食へ。", learn: "黒い聖母、修道院、山の地形の関係を先に知ると、景観が単なる写真スポットでなくなる。", hero: "montserrat-hero-v2.png" },
    cordoba: { id: "Cordoba", tone: "cordoba", label: "AL-ANDALUS · PATIOS", intro: "Mezquita-Catedralを中心に、JuderíaとRoman Bridgeを徒歩でつなぐAndalucíaの歴史都市。MadridやBarcelonaとは異なるイスラム文化とキリスト教文化の重なりを体感する。", food: "salmorejo、flamenquín、rabo de toro、berenjenas con miel、pastel cordobésの順で味わう。", learn: "イスラム期の柱列・ミフラーブと、後世に挿入された大聖堂空間を見比べると、都市の文化層が目に見える。", hero: "cordoba-hero-v2.png" },
    toledo: { id: "Toledo", tone: "toledo", label: "CORDOBA中止時のみ · ALTERNATIVE", intro: "現在の訪問予定ではありません。1/2のCordoba往復鉄道またはMezquita-Catedralが利用できない場合だけ置き換える候補。", food: "代替実行時だけcarcamusasやmazapánを坂道の休憩と組み合わせる。", learn: "Cordobaを実行できないと判断した後にだけ、三文化とEl Grecoの要点を使う。", hero: "madrid-hero-v1.png" },
  };
  const dishSchedule = {
    "dish-pan-con-tomate": "Barcelona市内案の昼食で候補を選ぶ",
    "dish-fideua": "Tarragonaの日に魚介料理店で候補を選ぶ",
    "dish-crema-catalana": "日曜Barcelona市内案の昼食候補",
    "dish-churros": "1/1 11:30・Chocolatería San Ginésで朝食",
    "dish-carcamusas": "Toledo代替時のみ"
  };
  const finalDayMeta = {
    d1225: { city: "移動日", cityIds: ["flight"] }, d1226: { city: "Barcelona", cityIds: ["barcelona"] },
    d1227: { city: "Barcelona", cityIds: ["barcelona"] }, d1228: { city: "Barcelona", cityIds: ["barcelona"] },
    d1229: { city: "Tarragona / Montserrat", cityIds: ["tarragona", "montserrat"] }, d1230: { city: "Barcelona → Madrid", cityIds: ["barcelona", "madrid"] },
    d1231: { city: "Madrid", cityIds: ["madrid"] }, d0101: { city: "Madrid", cityIds: ["madrid"] },
    d0102: { city: "Cordoba", cityIds: ["cordoba"] }, d0103: { city: "Madrid → Barcelona", cityIds: ["madrid", "barcelona"] },
    d0104: { city: "移動日", cityIds: ["barcelona", "flight"] }, d0105: { city: "移動日", cityIds: ["flight"] }
  };

  const hotelStays = [
    {
      id: "barcelona-front", stay: "Barcelona前半", dates: "2026/12/26–12/30", nights: 4,
      status: "仮候補・未予約", recommendation: "Hotel Barcelona Center", address: "Carrer de Balmes 103–105, Barcelona",
      room: "Standard Room with Extra Bed・1室（最大3名）", layout: "3 single または double/king＋extra bed。ベッド構成はリクエスト扱い",
      size: "約20㎡", totalEur: 1073, perPersonEur: 357.67,
      reason: "Casa Milà・Casa Batllóへ歩きやすく、4泊総額を抑えられる。",
      caution: "3名と大型荷物にはタイト。別ベッド希望は予約画面とホテル回答で再確認。",
      cancellation: "2026-07-25の検索時点では12/25より前まで無料取消", payment: "2026-07-25の検索時点では12/23まで支払い不要",
      alternative: { name: "NH Collection Barcelona Gran Hotel Calderón", totalEur: 1731, note: "25㎡で余裕があるが€658高い" },
      officialUrl: "https://www.hotelescenter.es/en/hotel-barcelona-center/", bookingUrl: "https://www.booking.com/searchresults.ja.html?ss=Hotel+Barcelona+Center&checkin=2026-12-26&checkout=2026-12-30&group_adults=3&group_children=0&no_rooms=1&selected_currency=EUR",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Barcelona+Center", priceCheckedAt: "2026-07-25", factsCheckedAt: "2026-08-14"
    },
    {
      id: "madrid", stay: "Madrid", dates: "2026/12/30–2027/1/3", nights: 4,
      status: "仮候補・未予約", recommendation: "Room Mate Collection Alba", address: "Calle de Huertas 16, Madrid",
      room: "Standard Double・2室（2名＋1名）", layout: "各室kingまたはtwinはリクエスト扱い。3名同室ではない",
      size: "19–22㎡×2室", totalEur: 2095, perPersonEur: 698.33,
      reason: "Vincci Soho 1室との差は4泊合計€104。2室で睡眠と荷物に余裕があり、Solから徒歩約6分で年越し後も帰りやすい。",
      caution: "隣室・同階は未確約。予約時にリクエストし、全員が分室を許容できるか明日確認。",
      cancellation: "2026-07-26の検索時点では12/29より前まで無料取消", payment: "2026-07-26の検索時点では12/27まで支払い不要",
      alternative: { name: "Vincci Soho", totalEur: 1991, note: "1室23㎡で€104安いが、3名＋荷物で4泊は窮屈" },
      officialUrl: "https://room-matehotels.com/gb/hotel-alba-madrid/", bookingUrl: "https://www.booking.com/searchresults.ja.html?ss=Room+Mate+Collection+Alba&checkin=2026-12-30&checkout=2027-01-03&group_adults=3&group_children=0&no_rooms=2&selected_currency=EUR",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Room+Mate+Collection+Alba+Madrid", priceCheckedAt: "2026-07-26", factsCheckedAt: "2026-08-14"
    },
    {
      id: "barcelona-final", stay: "Barcelona最終泊", dates: "2027/1/3–1/4", nights: 1,
      status: "仮候補・未予約", recommendation: "Pestana Arena Barcelona", address: "Carrer del Consell de Cent 51–53, Barcelona",
      room: "Superior Family・1室（公式で3名対応）", layout: "twin＋sofa bed（予約画面で最終確認）",
      size: "約30㎡", totalEur: 202, perPersonEur: 67.33,
      reason: "3名対応と広さが明確で、Sants駅まで約700m。20:42到着と翌朝の空港移動をつなぎやすい。",
      caution: "荷物を持って駅から約8–10分歩く。到着が遅れたらタクシーへ切り替える。",
      cancellation: "2026-07-25の検索時点では1/2より前まで無料取消", payment: "2026-07-25の検索時点では12/31まで支払い不要",
      alternative: { name: "Moxy Barcelona", totalEur: null, note: "Sants徒歩約3分だが、対象日の3名料金と取消条件をまだ比較できていない" },
      officialUrl: "https://www.pestana.com/en/hotel/pestana-arena-barcelona", bookingUrl: "https://www.booking.com/searchresults.ja.html?ss=Pestana+Arena+Barcelona&checkin=2027-01-03&checkout=2027-01-04&group_adults=3&group_children=0&no_rooms=1&selected_currency=EUR",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Pestana+Arena+Barcelona", priceCheckedAt: "2026-07-25", factsCheckedAt: "2026-08-14"
    }
  ];
  const hotelByDay = {
    d1226: hotelStays[0], d1227: hotelStays[0], d1228: hotelStays[0], d1229: hotelStays[0], d1230: hotelStays[1],
    d1231: hotelStays[1], d0101: hotelStays[1], d0102: hotelStays[1], d0103: hotelStays[2], d0104: hotelStays[2]
  };
  const hotelForItem = (dayId, item) => {
    if (dayId === "d1230" && /checkout|チェックアウト|荷物回収/i.test(item.title)) return hotelStays[0];
    if (dayId === "d0103" && /checkout|チェックアウト/i.test(item.title)) return hotelStays[1];
    return hotelByDay[dayId];
  };

  const selectedMealPlans = {
    d1225: [{ area: "成田空港T1中央ビル4F・保安検査前", primary: "京成友膳（KEISEI YUZEN）", dishes: ["魚または肉の和定食", "うどん", "水を確保"], booking: "予約不要", operation: "公式通常07:00–20:30 L.O.。17:00入店を優先", alternatives: ["同じ4Fのだし茶漬け えん", "保安検査後のTokyo Food Bar"] }],
    d1226: [
      { period: "朝昼", area: "Rambla de Catalunya 102・ホテルから徒歩約5分", primary: "Mauri Pastisseria", dishes: ["bocadillo", "甘くないペストリー", "café"], booking: "予約不要", operation: "土曜通常09:00から。到着遅延時はBCN T1で先に購入", alternatives: ["365 Obrador Còrsega 264", "Casa Milà近くの営業中カフェ"] },
      { area: "Calle Balmes 117・ホテルから徒歩約2分", primary: "Seventeen Restaurant", dishes: ["Catalunya・地中海料理", "tortillaまたは軽い主菜"], booking: "到着後に当日枠を確認", operation: "公式は料理を12:30–22:30提供。疲労時は早い時間に軽く食べる", alternatives: ["ホテル内Balmes 103（20:00から）", "365 Obradorで持帰り"] }
    ],
    d1227: [
      { area: "Còrsega 264・ホテルから徒歩約7分", primary: "365 Obrador Còrsega 264", dishes: ["bocadillo", "クロワッサン", "café"], booking: "予約不要", operation: "通常毎日06:00–22:00。08:30出発を守る", alternatives: ["前夜にMauriで購入", "Sagrada到着前の365 Obrador Marina 261"] },
      { area: "Ciutat Vella・旧市街", primary: "Can Culleretes（日曜の市内案）／Montserrat時はLa Cafeteria", dishes: ["escudella", "canelons", "crema catalana"], booking: "事前予約を前提にしない", operation: "市内案は当日空席確認。Montserrat時は山上の営業状況を確認", alternatives: ["Bar del Pla", "Santa Caterina市場周辺の営業店"] },
      { area: "Hotel Barcelona Center館内", primary: "Balmes 103 Restaurant-Café", dishes: ["地中海料理の軽い主菜", "スープ・パン"], booking: "ホテル帰着時に20:00枠を確認", operation: "公式通常は毎日20:00–23:30。Can Culleretesは日曜夜休業", alternatives: ["Seventeen Restaurant", "365 Obradorで持帰り"] }
    ],
    d1228: [
      { area: "Còrsega 264・ホテルから徒歩約7分", primary: "365 Obrador Còrsega 264", dishes: ["bocadillo", "café"], booking: "予約不要", operation: "通常06:00から。08:45までに出る", alternatives: ["前夜購入", "Gràcia到着後のカフェ"] },
      { area: "Santa Caterina市場周辺", primary: "Cuines Santa Caterina／Montserrat時はLa Cafeteria", dishes: ["市場の魚料理", "季節野菜", "パン"], booking: "当日空席で利用", operation: "市内案は市場周辺で当日選択。Montserrat時は山上の営業状況を確認", alternatives: ["市場内で3人分を選ぶ", "Bar Joan"] },
      { area: "Montcada 22・El Born", primary: "El Xampanyet", dishes: ["anchoa", "conservas", "cava"], booking: "予約不可・並んで入る", operation: "公式は月曜19:00–23:00。19:00入店、20分超待ちなら撤退", alternatives: ["Bar Joanで軽食", "ホテル内Balmes 103"] }
    ],
    d1229: [
      { area: "Tarragona Part Alta", primary: "El Llagut（Montserrat選択時はLa Cafeteria）", dishes: ["romescoを使う魚介", "魚介の米料理", "季節の前菜"], booking: "当日空席で利用", operation: "15:00までに着席。Montserrat時は山上の営業状況を確認", alternatives: ["徒歩10分以内でromescoまたは魚介の米料理がある店", "Mercat Centralの軽食"] },
      { area: "Sant Carles 4・Barceloneta", primary: "Can Solé（火曜20:00）", dishes: ["魚介の米料理", "fideuà"], booking: "20:00枠を予約", operation: "通常は火曜20:00–23:00。年末営業を再確認", alternatives: ["7 Portes", "ホテル内Balmes 103"] }
    ],
    d1230: [
      { area: "Rambla de Catalunya 102・仮ホテル近く", primary: "Mauri Pastisseriaで軽い昼食", dishes: ["bocadillo", "甘くないペストリー", "水"], booking: "不要", operation: "混雑時は持帰りにして12:10出発を守る", alternatives: ["365 Obrador", "SantsのEnrique Tomás"] },
      { area: "Madrid・Las Letras", primary: "Casa Alberto（ホテル隣・通常水曜夜営業）", dishes: ["callos", "bacalao a la madrileña"], booking: "予約推奨", operation: "年末特別営業と20:00前後の枠を再確認", alternatives: ["Room Mate Alba周辺のtapas", "Atochaで持帰り"] }
    ],
    d1231: [
      { area: "San Blas 4・Paseo del Arte", primary: "Bodega de los Secretos（13:30昼食）", dishes: ["地中海料理", "温かい主菜"], booking: "13:30枠を予約", operation: "公式は12/31夕食休業だが昼営業あり。2026年の昼枠を再確認", alternatives: ["La Tapería del Prado", "Atochaで持帰り"] },
      { area: "Room Mate Alba客室", primary: "昼食後に購入した持帰り夕食を18:15に食べる", dishes: ["bocadilloまたは温かい持帰り", "水", "年越し用ぶどう"], booking: "レストラン予約に依存しない安全案", operation: "2026/27特別営業が公表されたら予約店へ差替え。18:00までに代替食とぶどうを確保", alternatives: ["Room Mate Albaの提供可能メニューを確認", "Solへ持参できる軽食"] }
    ],
    d0101: [
      { period: "軽食", area: "Centro・San Ginés", primary: "Chocolatería San Ginés本店", dishes: ["chocolate con churros"], booking: "年末年始は予約不可", operation: "公式は通年24時間営業。元日は行列前提", alternatives: ["持帰り", "Plaza Mayor周辺の営業中カフェ"] },
      { area: "Botoneras 6・Plaza Mayor横", primary: "La Campana", dishes: ["bocadillo de calamares", "tortilla"], booking: "予約不要・持帰り可", operation: "Madrid公式観光案内では日曜–木曜09:00–23:00。元日特別営業は当週確認", alternatives: ["Don Calamar（Plaza Mayor 7）", "前日購入した持帰り食"] },
      { area: "Room Mate Alba館内", primary: "El Bar de Alba／客室メニュー", dishes: ["温かい軽食", "スープまたは寿司"], booking: "チェックイン時に元日の提供時間を確認", operation: "公式にはbarあり。デジタルメニューはMiss Sushi 19:30–23:30、元日提供は再確認", alternatives: ["Don Calamar", "前日購入した保存食"] }
    ],
    d0102: [{ area: "Cordoba旧市街・Mezquitaから徒歩圏", primary: "Taberna Salinas", dishes: ["salmorejo", "flamenquín", "rabo de toro", "berenjenas con miel"], booking: "旅行前に電話で営業確認、12:45–13:00入店", operation: "土曜通常12:30–16:00。14:30退店を守り、2027/1/2の営業は旅行7日前に確認", alternatives: ["Taberna Casa Pepe Salinas（Puerta de Almodóvar 2）", "第一候補と代替店が休業なら、Mezquitaから駅方向で4品中3品以上を出す営業中のtaberna"] }],
    d0103: [
      { area: "Madrid Atocha駅構内", primary: "Enrique Tomás Estación Atocha", dishes: ["jamónのbocadillo", "tortilla", "水"], booking: "予約不要", operation: "荷物回収と列車bufferを優先し、持帰りを選ぶ", alternatives: ["駅構内のRodilla", "列車内用の軽食を購入"] },
      { area: "Barcelona Sants駅構内", primary: "Enrique Tomás Kiosko Santsで到着直後に持帰り", dishes: ["jamónのbocadillo", "飲料"], booking: "不要", operation: "21時台の営業を旅行前に再確認。閉店ならホテルへ直行", alternatives: ["Pestana Arenaの提供内容を確認", "列車乗車前にMadridで購入した保存食"] }
    ],
    d0104: [{ area: "BCN T1・保安検査後 Boarding Area B", primary: "Coffee & Fresh Food", dishes: ["sandwich", "果物", "café", "水"], booking: "不要", operation: "Aena公式通常05:00–21:00。搭乗口がArea B以外なら同一動線上の営業店へ変更", alternatives: ["FOODIES' A21–A22（06:00から）", "前夜購入・機内食"] }],
    d0105: [
      { area: "PVG T2・国際線乗継", primary: "搭乗口に近い営業中店舗で朝食", dishes: ["温かい朝食", "水"], booking: "不要", operation: "乗継手続きと搭乗口を確認してから、同じ制限区域内で選ぶ", alternatives: ["利用条件を満たすラウンジ", "機内食・携帯食"] },
      { area: "PVG T2・国際線乗継", primary: "搭乗口に近い営業中店舗で13:30までに昼食", dishes: ["温かい麺またはご飯", "水"], booking: "不要", operation: "14:25便の搭乗口と再検査位置を先に確認し、移動時間を残す", alternatives: ["制限区域内売店の持帰り", "次の機内食までの携帯食"] }
    ]
  };
  const travelMealFallbacks = {
    d0104: [{ period: "朝", window: "08:00–09:30", area: "BCN T1・保安検査後", nearby: "搭乗口へ向かう途中", purpose: "搭乗開始を守りながら朝食を確保", primary: "T1保安検査後・搭乗口動線上の営業中カフェ", dishes: ["bocadillo", "水"], booking: "不要", operation: "搭乗口確定後に選ぶ", alternatives: ["前夜購入", "機内食"] }],
    d0105: [{ period: "朝・昼", window: "06:00–13:30", area: "PVG T2・国際線乗継", nearby: "乗継手続後の制限区域", purpose: "入国を仮定せず、長時間乗継の間に2回食事を取る", primary: "搭乗口に近い制限区域内の営業中店舗", dishes: ["温かい食事", "水"], booking: "不要", operation: "航空会社の案内と当日の乗継導線に従う", alternatives: ["利用条件を満たすラウンジ", "機内食・携帯食"] }]
  };

  const flexItem = (time, end, kind, title, note) => ({ time, end, kind, title, status: "当日確認", note });
  const flexMeals = {
    breakfast: { period: "朝", area: "Còrsega 264・ホテルから徒歩約7分", primary: "365 Obrador Còrsega 264", dishes: ["bocadillo", "クロワッサン", "café"], booking: "予約不要", operation: "通常毎日06:00–22:00。出発時刻を守る", alternatives: ["前夜にMauriで購入", "移動先の営業中カフェ"] },
    montserrat: { period: "昼", area: "Montserrat山上", primary: "La Cafeteria", dishes: ["温かいCatalunya料理", "bocadillo", "matóと蜂蜜"], booking: "予約不要・当日の営業を確認", operation: "混雑時は持参した軽食を先に食べ、帰路を遅らせない", alternatives: ["Montserrat Buffet", "前夜に用意したbocadilloと水"] },
    citySunday: { period: "昼", area: "Ciutat Vella・旧市街", primary: "Can Culleretes（日曜の市内案のみ）", dishes: ["escudella", "canelons", "crema catalana"], booking: "事前予約を前提にせず当日空席を確認", operation: "20分以上待つ場合は次の候補へ移る", alternatives: ["Bar del Pla", "Santa Caterina市場周辺の営業店"] },
    cityWeekday: { period: "昼", area: "Santa Caterina市場周辺", primary: "Cuines Santa Caterinaを当日確認", dishes: ["市場の魚料理", "季節野菜", "パン"], booking: "予約不要・当日空席で利用", operation: "満席なら市場内で魚・野菜・パンを3人分選ぶ", alternatives: ["市場内の営業中カウンター", "Bar Joan"] },
    tarragona: { period: "昼", area: "Tarragona Part Alta・Carrer de Natzaret 10", primary: "El Llagut", dishes: ["romesco／cassola系の魚介", "魚介の米料理またはfideus", "軽い前菜またはデザート"], booking: "電話予約が可能。予約しない場合は開店時に空席確認", operation: "火–土12:30–15:30、日12:30–15:30、月休。火曜は13:15、日曜短縮は12:45入店", alternatives: ["Part Altaでromesco／cassolaを掲示する営業店を徒歩10分以内で選ぶ", "該当店がなければ魚介の米料理またはfideusがある店へ切り替える"] },
    dinner: { period: "夜", area: "Hotel Barcelona Center館内", primary: "Balmes 103 Restaurant-Café", dishes: ["地中海料理の軽い主菜", "スープ", "パン"], booking: "ホテル帰着時に営業と空席を確認", operation: "疲れていれば持帰りを買って客室で休む", alternatives: ["Seventeen Restaurant", "365 Obradorの持帰り"] }
  };
  const montserratDay = (dayId) => ({
    title: "Montserrat日帰り（朝に最終判断）", city: "Montserrat", cityIds: ["montserrat", "barcelona"],
    items: [
      flexItem("07:30", "08:00", "rest", "Montserratへ行くか最終判断", "視界・風・FGCと山上交通の運行、3人の体調を確認する。条件が悪ければ、この日の全行程を予約不要のBarcelona市内案へ切り替える。"),
      flexItem("08:00", "08:30", "meal", "365 Obradorで朝食と携帯食を用意", "朝食に加え、山上混雑時のbocadilloと水を3人分用意する。"),
      flexItem("08:30", "10:20", "transfer", "ホテル → Plaça Espanya → Montserrat", "徒歩とMetro L3でPlaça Espanyaへ行き、FGC R5とAeriまたはCremalleraの有効な乗車券を購入する。運行表示を確認して山上へ向かう。"),
      flexItem("10:20", "12:45", "attraction", "Montserrat修道院主要部と展望", "修道院主要部と景観を歩く。日時指定が必要な追加体験には頼らず、混雑時は外観と展望を優先する。"),
      flexItem("12:45", "13:45", "meal", "La Cafeteriaで昼食", "山上の営業状況を確認し、混雑時は持参食へ切り替える。"),
      flexItem("13:45", "15:30", "attraction", "山上の短い散策", "風と帰路を見ながら歩ける範囲だけ楽しむ。運行悪化の兆候があればすぐ下山する。"),
      flexItem("15:30", "17:30", "transfer", "Montserrat → Plaça Espanya → ホテル", "AeriまたはCremalleraとFGC R5で戻る。有効な乗車券と発車表示を確認し、一本後にも対応できる余裕を残す。"),
      flexItem("17:30", "19:30", "hotel", "ホテルで休憩", "入浴と休憩を優先し、夕食へ出る体力がなければ持帰りにする。"),
      flexItem("20:00", "21:15", "meal", "Balmes 103で夕食", "ホテル館内を第一候補にし、営業していなければ近隣か持帰りへ切り替える。")
    ], mealPlans: [flexMeals.breakfast, flexMeals.montserrat, flexMeals.dinner], dayId
  });
  const cityDay = (dayId, sunday = false) => ({
    title: "予約不要で楽しむBarcelona市内日", city: "Barcelona", cityIds: ["barcelona"],
    items: [
      flexItem("08:30", "09:00", "meal", "365 Obradorで朝食", "予約不要の店で朝食を取り、雨なら傘と防寒を整える。"),
      flexItem("09:00", "09:30", "transfer", "ホテル → Gothic Quarter", "徒歩とMetro L3でLiceuへ向かい、大聖堂外観側から街歩きを始める。"),
      flexItem("09:30", "12:30", "attraction", "Gothic QuarterとBornを歩く", "Barcelona大聖堂外観、Plaça del Rei、Bornの路地を予約なしで巡る。雨や疲労時は範囲を半分にする。"),
      flexItem("12:45", "14:00", "meal", sunday ? "Can Culleretesを当日確認" : "Santa Caterina市場周辺で昼食", sunday ? "日曜の市内案だけの候補。待ち時間が20分を超えればBar del Plaか市場周辺へ移る。" : "Cuines Santa Caterinaの空席を確認し、満席なら市場内で3人分を具体的に選ぶ。"),
      flexItem("14:00", "14:30", "transfer", "昼食場所 → Passeig de Gràcia", "徒歩とMetroでPasseig de Gràciaへ移動する。予約施設へは向かわない。"),
      flexItem("14:30", "16:30", "attraction", "Modernisme建築の外観散歩", "Casa Batlló、Casa Amatller、Casa Milàの外観を歩いて楽しむ。内部入場や事前予約には依存しない。"),
      flexItem("16:30", "17:00", "transfer", "Passeig de Gràcia → ホテル", "徒歩でホテルへ戻る。雨や疲労時は散歩を早く切り上げる。"),
      flexItem("17:00", "19:30", "hotel", "ホテルで休憩", "足を休め、翌日の交通と天気を確認する。"),
      flexItem("20:00", "21:15", "meal", "Balmes 103で夕食", "ホテル館内を第一候補にし、営業していなければ近隣か持帰りへ切り替える。")
    ], mealPlans: [flexMeals.breakfast, sunday ? flexMeals.citySunday : flexMeals.cityWeekday, flexMeals.dinner], dayId
  });
  const tarragonaFullDay = (dayId) => ({
    title: "Tarragona Roman cityを一日歩く", city: "Tarragona", cityIds: ["tarragona", "barcelona"],
    items: [
      flexItem("07:15", "07:45", "meal", "365 Obradorで朝食と水を用意", "朝食と列車用の水を3人分用意する。"),
      flexItem("07:45", "09:45", "transfer", "ホテル → Barcelona Sants → Tarragona市内駅", "SantsからRegional系統でTarragona市内駅へ向かう。公表後の時刻を確認し、有効な乗車券を購入する。Camp de Tarragonaは使わない。"),
      flexItem("09:45", "10:15", "transfer", "Tarragona市内駅 → Roman city core", "徒歩でRambla Novaから中央遺跡群へ向かう。"),
      flexItem("10:15", "13:00", "attraction", "円形闘技場・Circ・旧市街", "火曜の公式開館を当日確認し、中央部を徒歩でつなぐ。閉鎖施設があれば地中海のバルコニーと旧市街外観へ切り替える。"),
      flexItem("13:15", "14:30", "meal", "El Llagutを当日確認", "空席がなければ徒歩10分以内でromescoか魚介の米料理がある営業店を選ぶ。"),
      flexItem("14:30", "16:45", "attraction", "城壁周辺とPart Alta", "中央部のRoman coreと旧市街を続ける。Pont del Diableへは広げず、帰路を守る。"),
      flexItem("16:45", "18:45", "transfer", "Tarragona市内駅 → Barcelona Sants → ホテル", "Regional系統の有効な乗車券と発車表示を確認して戻る。遅延時は観光を削り、帰路を優先する。"),
      flexItem("18:45", "20:00", "hotel", "ホテルで休憩", "足を休め、遅延時は夕食を持帰りへ変える。"),
      flexItem("20:00", "21:15", "meal", "Balmes 103で夕食", "ホテル館内を第一候補にし、営業していなければ近隣か持帰りへ切り替える。")
    ], mealPlans: [flexMeals.breakfast, flexMeals.tarragona, flexMeals.dinner], dayId
  });
  const tarragonaShortDay = (dayId) => ({
    title: "日曜14:30閉館に合わせるTarragona短縮日", city: "Tarragona", cityIds: ["tarragona", "barcelona"],
    items: [
      flexItem("06:45", "07:15", "meal", "365 Obradorで朝食と水を用意", "朝食と列車用の水を3人分用意する。"),
      flexItem("07:15", "09:15", "transfer", "ホテル → Barcelona Sants → Tarragona市内駅", "Regional系統の公表後の時刻を確認し、有効な乗車券を購入する。"),
      flexItem("09:15", "09:30", "transfer", "Tarragona市内駅 → 円形闘技場", "徒歩で中央遺跡群へ直行する。"),
      flexItem("09:30", "12:45", "attraction", "Roman interiorsと旧市街中央部", "日曜の内部見学を先に行い、すべて14:30までに終える。閉鎖時は外観、地中海のバルコニー、旧市街へ切り替える。"),
      flexItem("12:45", "13:45", "meal", "El Llagutで昼食", "日曜ランチの空席を確認し、満席ならPart Altaの明示した選択ルールで代替する。"),
      flexItem("13:45", "14:30", "attraction", "残りのRoman core", "内部見学は14:30まで。時間がなければ外観だけにして終了する。"),
      flexItem("14:30", "16:00", "attraction", "Rambla Novaと海辺を短く散歩", "予約不要の屋外だけを歩き、疲労や雨なら駅へ直行する。"),
      flexItem("16:00", "18:15", "transfer", "Tarragona市内駅 → Barcelona Sants → ホテル", "Regional系統で戻り、有効な乗車券と発車表示を確認する。"),
      flexItem("18:15", "20:00", "hotel", "ホテルで休憩", "翌日に疲れを残さないよう休む。"),
      flexItem("20:00", "21:15", "meal", "Balmes 103で夕食", "ホテル館内を第一候補にし、営業していなければ持帰りへ切り替える。")
    ], mealPlans: [flexMeals.breakfast, flexMeals.tarragona, flexMeals.dinner], dayId
  });
  const flexScenarios = {
    scenario1: { id: "scenario1", name: "シナリオ1（推奨）", summary: "日 Montserrat／月 Barcelona市内／火 Tarragona一日", days: { d1227: montserratDay("d1227"), d1228: cityDay("d1228"), d1229: tarragonaFullDay("d1229") } },
    scenario2: { id: "scenario2", name: "シナリオ2", summary: "日 Barcelona市内／月 Montserrat／火 Tarragona一日", days: { d1227: cityDay("d1227", true), d1228: montserratDay("d1228"), d1229: tarragonaFullDay("d1229") } },
    scenario3: { id: "scenario3", name: "シナリオ3", summary: "日 Tarragona短縮／月 Barcelona市内／火 Montserrat", days: { d1227: tarragonaShortDay("d1227"), d1228: cityDay("d1228"), d1229: montserratDay("d1229") } }
  };

  const transportDetails = {
    d1225: {
      "成田空港到着・航空会社／terminal確認": "成田空港T1出発階へ。航空会社カウンター、預け荷物、搭乗口を予約原本と空港表示で照合する。",
      "PVG乗継・保安検査・搭乗口確認": "PVG T2でInternational Transfer表示に従い、乗継保安検査→搭乗口確認。入国や荷物再受取は同一券・through baggage確認後に判断する。"
    },
    d1226: {
      "入国審査・荷物受取・税関": "BCN T1で入国審査→受取レーン→税関の順。3人と荷物が揃ってから到着ロビーへ出る。",
      "BCN空港 → 市内（荷物受取後）": "本案はT1公式タクシー乗り場→Hotel Barcelona Center。3人＋大型荷物で乗換を避け、通常25–40分を見込む。",
      "ホテルへ荷物預け": "Hotel Barcelona Center（Balmes 103–105）で荷物預け。部屋に入れない場合も貴重品は携行する。"
    },
    d1229: {
      "Barcelona → Tarragona市内駅（Regional系統）": "Barcelona SantsからTarragona市内駅へRegional／Regional Expressを利用。選んだ列車の有効な乗車券を必ず購入し、2026年末ダイヤは公表後に確認する。Camp de TarragonaやBUSPLANAは使わない。",
      "Tarragona市内駅 → Barcelona（Regional系統）": "Tarragona市内駅からBarcelonaへRegional系統で戻る。座席指定がない列車でも有効な乗車券は必要。一本後にも対応できる帰路余裕を取る。",
      "Aeri乗継buffer": "FGCを降りたらAeri de Montserrat案内へ。乗車券と運行表示を確認し、強風運休ならCremallera案または中止へ切り替える。",
      "ロープウェイ Estació Inferior → Superior": "Aeriロープウェイで山上へ約5分。到着後は修道院案内に従って徒歩移動する。",
      "ロープウェイ Estació Superior → Inferior": "Aeriで下山。風や運休予告があれば15:00を待たず早い便に乗る。",
      "FGC帰路buffer": "Aeri de Montserrat駅でBarcelona Plaça Espanya方面のR5を確認。一本逃しても夕食予約に影響しない余白を取る。",
      "Aeri de Montserrat → Espanya駅": "FGC R5でPlaça Espanyaへ。到着後はL3でDiagonalへ戻り、ホテルまで徒歩。"
    },
    d1230: {
      "Sagrada周辺へ移動": "Hotel Barcelona Centerを仮基準に、Diagonal駅からMetro L5でSagrada Família駅へ。ホテル変更時も09:00入場に間に合う経路へ更新する。",
      "ホテルへ戻る": "Sagrada Família駅からMetro L5でDiagonal駅へ戻り、仮ホテルへ徒歩。",
      "Barcelona Santsへ移動": "Hotel Barcelona Centerから荷物ごとタクシーでBarcelona Santsへ約15–25分。地下鉄の階段・乗換を避ける。",
      "iryo 06150 Barcelona Sants → Madrid Atocha": "高速鉄道の候補便。発売後に列車番号・発着時刻・車両・座席を置換し、Santsには発車90分前到着を維持する。",
      "Madridホテルへ移動・check-in": "Madrid Atocha公式タクシー乗り場→Room Mate Collection Alba（Huertas 16）へ約10–15分。荷物が少なければ徒歩約20分。"
    },
    d0102: {
      "Madrid Atocha到着・乗車準備": "Room Mate AlbaからAtochaへタクシー約10分。高速鉄道の発車45分前までに駅へ着く。",
      "Madrid → Cordoba（高速鉄道・計画窓）": "07:30前後発・09:30前後着の計画窓。2027年の列車番号・時刻は未公表のため、発売後に往復券と座席を確定する。",
      "Cordoba駅 → Mezquita-Catedral": "Cordoba駅からタクシーを基本とし、Mezquita-Catedralの公式入場時間に合わせる。",
      "Cordoba駅へ移動・乗車余裕": "旧市街からCordoba駅へ戻り、帰路の発車45分前までに到着する。",
      "Cordoba → Madrid（高速鉄道・計画窓）": "17:15前後発・19:15前後着の計画窓。最終便を避け、発売後に実際の時刻へ確定する。"
    },
    d0103: {
      "Madrid Atochaへ移動": "Room Mate Albaで荷物回収後、タクシーでMadrid Atochaへ約10分。駅到着後に列車表示とホームを確認する。",
      "iryo 061171 Madrid Atocha → Barcelona Sants": "高速鉄道の候補便。発売後に列車番号・時刻・座席を置換し、Atochaの90分bufferは残す。",
      "Santsで夕食購入・Barcelona最終泊へ移動": "Barcelona Sants到着後、構内で夕食を買ってからPestana Arena Barcelonaへ荷物徒歩約8–10分。雨・遅延・疲労時はタクシー。"
    },
    d0104: {
      "タクシーでBCN T1へ（本案）": "Pestana Arena Barcelonaを06:55出発。前夜にタクシーを手配し、BCN T1へ通常25–35分、07:40到着を守る。",
      "check-in・荷物預け・保安検査・出国": "T1の航空会社カウンター→荷物預け→保安検査→出国審査→搭乗口の順。朝食前に搭乗口と搭乗開始時刻を確認する。"
    },
    d0105: {
      "入国・荷物受取・帰宅移動": "NRT T1で入国審査→荷物受取→税関。3人と荷物を確認してから、予約済みの帰宅交通または当日選ぶ鉄道・車へ進む。"
    }
  };

  const connectionPlans = {
    d1225: {
      "成田空港到着・航空会社／terminal確認": "徒歩｜T1中央ビル4Fの京成友膳へ 5–10分",
      "出国前の早めの夕食": "徒歩｜出発階の保安検査場へ。18:00に食事を終えて移動",
      "NRT T1 発": "同一ターミナル乗継｜PVG T2到着後はInternational Transfer表示へ",
      "PVG乗継・保安検査・搭乗口確認": "徒歩｜乗継保安検査後に搭乗口へ移動し、00:15発の便に備える"
    },
    d1226: {
      "ホテルへ荷物預け": "徒歩｜Balmes 103–105 → Mauri Pastisseria 5分",
      "到着後の軽い朝昼食": "徒歩｜ホテルへ戻る 5分",
      "休憩・身支度・遅延buffer": "徒歩｜ホテル → Casa Milà 7分",
      "カサ・ミラ（ラ・ペドレラ）": "徒歩｜Passeig de GràciaをCasa Batllóまで約8分",
      "カサ・バトリョ": "徒歩｜Calle Balmes 117のSeventeenまで約8分"
    },
    d1227: {
      "朝食": "徒歩＋Metro L5｜ホテル→Diagonal駅→Sagrada Família駅、合計約20分",
      "サグラダ・ファミリア（鐘塔エレベーター付き）": "Metro L2→L3＋徒歩｜Sagrada Família→Passeig de Gràcia乗換→Liceu→Can Culleretes、約25分",
      "伝統カタルーニャ料理：Can Culleretes（日曜昼）": "Metro L3→L5＋徒歩｜Liceu→Diagonal乗換→Sant Pau | Dos de Maig、約30分",
      "サン・パウ病院 外観・街区観察": "Metro L5＋徒歩｜Sant Pau | Dos de Maig→Diagonal→ホテル、約20分",
      "ホテル休憩": "館内移動｜20:00にBalmes 103へ"
    },
    d1228: {
      "朝食": "タクシー｜ホテル→Park Güell Carretera del Carmel側、約15–25分",
      "グエル公園": "タクシー｜Park Güell→La Pubilla、約10–15分。坂道疲労を残さない",
      "Gràcia周辺で昼食": "徒歩＋Metro L3｜La Pubilla→Fontana→Catalunya→Palau、約25分",
      "移動・カフェ休憩": "徒歩｜Palau de la Músicaの入口へ 5分",
      "カタルーニャ音楽堂": "徒歩｜El Bornの街歩き開始点へ約10分",
      "El Born・旧市街の街歩き": "徒歩｜Montcada 22のEl Xampanyetへ約5分"
    },
    d1229: {
      "黒い聖母マリア像（Moreneta）": "徒歩｜Montserrat Buffetへ約5分",
      "Montserrat Buffetで昼食": "徒歩｜Montserrat Museumへ約5分",
      "モンセラート美術館": "徒歩｜駅・Aeri運行表示を見ながら休憩場所へ",
      "Aeri de Montserrat → Espanya駅": "Metro L3＋徒歩｜Espanya→Diagonal→ホテル、約20分",
      "ホテル休憩": "タクシー｜ホテル→Can Solé、約15–25分"
    },
    d1230: {
      "ボケリア市場散策＋El Quim朝食候補": "Metro L3｜Liceu→Diagonal＋徒歩でホテルへ、約20分",
      "ホテルcheckout・荷物回収": "徒歩｜Mauriまたはホテルで軽食を確保後、荷物とタクシーへ",
      "移動前の軽い昼食": "タクシー｜Hotel Barcelona Center→Barcelona Sants、約15–25分",
      "駅到着buffer・乗車準備": "駅構内徒歩｜列車表示→改札→指定車両。水と昼食を持ってホームへ",
      "iryo 06150 Barcelona Sants → Madrid Atocha": "タクシー｜Atocha公式乗り場→Room Mate Alba、約10–15分",
      "Madridホテルへ移動・check-in": "徒歩｜ホテル隣のCasa Albertoへ約1分"
    },
    d1231: {
      "プラド美術館": "徒歩｜Paseo del PradoをCibelesへ約10分",
      "シベレス広場": "徒歩｜Calle de Alcaláをアルカラ門へ約10分",
      "アルカラ門": "徒歩｜Bodega de los Secretosへ約20分。13:30予約に合わせる",
      "Bodega de los Secretosで昼食": "徒歩｜Retiro公園入口へ約20分",
      "エル・レティーロ公園": "タクシー｜公園→Room Mate Alba、約10–15分",
      "ホテル休憩・防寒準備": "館内｜18:15に事前購入した夕食と年越し用ぶどうを確認",
      "早めの大晦日夕食": "徒歩｜Room Mate Alba→Puerta del Sol、通常約10–12分。規制入口は当日公式案内を優先"
    },
    d0101: {
      "プエルタ・デル・ソル": "徒歩｜Pasadizo de San Ginésへ約5分",
      "チョコラテリア・サン・ヒネス": "徒歩｜Plaza Mayorへ約4分",
      "マヨール広場": "徒歩｜Botoneras 6のLa Campanaへ約2分",
      "元日の昼食": "徒歩｜San Isidro教会へ約10分",
      "サン・イシドロ教会": "徒歩｜Madrid王宮へ約15分",
      "マドリード王宮（外観）": "徒歩｜San Francisco el Grandeへ約12分",
      "サン・フランシスコ・エル・グランデ（外観）": "徒歩またはタクシー｜ホテルへ約20分／車10分",
      "ホテル休憩": "館内｜El Bar de Alba／客室メニューを19:30に利用"
    },
    d0102: {
      "Toledo駅 → 旧市街": "徒歩｜ZocodoverからToledo Cathedralへ約8分",
      "トレド大聖堂": "徒歩｜Santa Fé 5のEl Trébolへ約8分",
      "Toledoで昼食": "徒歩｜Santo Tomé教会へ約15分。坂道込みで余裕を取る",
      "サント・トメ教会": "徒歩｜El Greco Museumへ約5分",
      "エル・グレコ美術館": "徒歩｜Judería周辺のカフェへ5–10分"
    },
    d0103: {
      "Madridホテルcheckout・荷物預け": "徒歩｜Room Mate Alba→Reina Sofía、約15–20分",
      "ソフィア王妃芸術センター（ゲルニカ／ダリ）": "徒歩｜Atocha駅構内のEnrique Tomásへ約8分",
      "Atocha周辺で昼食": "タクシー｜Atocha→ホテルへ荷物回収、約10分",
      "休憩・荷物回収": "タクシー｜Room Mate Alba→Madrid Atocha、約10分",
      "iryo 061171 Madrid Atocha → Barcelona Sants": "駅構内で夕食購入→徒歩｜Sants→Pestana Arena、約8–10分",
      "Santsで夕食購入・Barcelona最終泊へ移動": "客室｜Santsで購入した夕食を食べ、翌朝のタクシーを確認"
    },
    d0104: {
      "タクシーでBCN T1へ（本案）": "徒歩｜T1航空会社カウンターへ。便表示でカウンター列を確認",
      "check-in・荷物預け・保安検査・出国": "徒歩｜搭乗口を先に確認してからBoarding Area BのCoffee & Fresh Foodへ",
      "BCN T1保安検査後に朝食": "徒歩｜搭乗開始30分前までに食事を終え、指定搭乗口へ"
    },
    d0105: {
      "PVG T2乗継区域で朝食": "空港内徒歩｜搭乗口と再検査位置を確認後、同じ制限区域で休憩",
      "PVG T2乗継区域で昼食": "空港内徒歩｜13:30までに食事終了→再検査・搭乗口へ"
    }
  };

  const displayCity = (day) => {
    if (day.cityLabel && day.cityLabel !== "移動日") return day.cityLabel;
    return cityMeta[day.cityId || day.city]?.id || day.cityLabel || day.city || "移動日";
  };
  const jpDate = (day) => {
    const [, month, date] = String(day.date || "").match(/\d{4}-(\d{2})-(\d{2})/) || [];
    return month ? `${Number(month)}/${Number(date)}（${day.dow || ""}）` : day.date;
  };
  const typeFor = (day) => {
    if ((day.cityId || day.city) === "flight" || String(day.cityLabel).includes("→") || /移動|出発|到着/.test(day.title || "")) return "移動中心日";
    if (["tarragona", "montserrat", "toledo", "cordoba"].includes(day.cityId)) return "日帰り観光日";
    if (day.id === "d1231") return "NYE特殊日";
    return "観光中心日";
  };
  const statusText = (status) => ({ confirmed: "確認済み", draft: "旅行前に確認", needs_information: "旅行前に確認", blocked: "公表待ち", provisional: "仮の計画", adopted: "旅程に反映" }[status] || status || "旅行前に確認");
  const toneFor = (text) => /矛盾|不足|必要|未確認|要修正/.test(text) ? "warn" : /待ち|未公表|仮|発売|原本/.test(text) ? "wait" : "info";
  const kindText = (kind) => ({ transfer: "移動", transport: "移動", flight: "航空", airport: "空港", station: "駅", train: "鉄道", meal: "食事", restaurant: "飲食店", attraction: "観光", museum: "美術館・博物館", church: "教会", market: "市場", event: "行事", shop: "店", hotel: "宿泊", rest: "休憩", walk: "街歩き", decision: "判断" }[kind] || kind || "予定");
  const actionTitleOverrides = new Map([
    ["成田空港到着・航空会社／ターミナル確認", "成田空港に到着し、航空会社とターミナルを確認する"],
    ["NRT T1 発", "NRT T1を出発する"],
    ["PVG T2 着・同ターミナル乗継", "PVG T2に到着し、同じターミナルで乗り継ぐ"],
    ["PVG乗継・保安検査・搭乗口確認", "PVGで乗継手続き・保安検査・搭乗口確認を済ませる"],
    ["PVG T2 発 → BCN T1 着", "PVG T2を出発し、BCN T1に到着する"],
    ["入国審査・荷物受取・税関", "入国審査・荷物受取・税関を済ませる"],
    ["BCN空港 → 市内（荷物受取後）", "荷物を受け取り、BCN空港から市内へ移動する"],
    ["休憩・身支度・遅延時の余裕", "ホテルで休憩し、身支度を整える"],
    ["Montserratへ行くか最終判断", "天候と体調を見てMontserratへ行くか決める"],
    ["ホテル → Plaça Espanya → Montserrat", "ホテルからPlaça Espanyaを経由してMontserratへ移動する"],
    ["Montserrat修道院主要部と展望", "Montserrat修道院の主要部を見学し、展望を楽しむ"],
    ["山上の短い散策", "山上を短く散策する"],
    ["Montserrat → Plaça Espanya → ホテル", "MontserratからPlaça Espanyaを経由してホテルへ戻る"],
    ["ホテル → Gothic Quarter", "ホテルからGothic Quarterへ移動する"],
    ["昼食場所 → Passeig de Gràcia", "昼食場所からPasseig de Gràciaへ移動する"],
    ["Modernisme建築の外観散歩", "Modernisme建築の外観を見ながら歩く"],
    ["Passeig de Gràcia → ホテル", "Passeig de Gràciaからホテルへ戻る"],
    ["ホテル → Barcelona Sants → Tarragona市内駅", "ホテルからBarcelona Santsを経由してTarragona市内駅へ移動する"],
    ["Tarragona市内駅 → Roman city 主要予定", "Tarragona市内駅からローマ都市の主要遺跡へ移動する"],
    ["Tarragona市内駅 → 円形闘技場", "Tarragona市内駅から円形闘技場へ移動する"],
    ["円形闘技場・Circ・旧市街", "円形闘技場・Circ・旧市街を見学する"],
    ["Roman interiorsと旧市街中央部", "ローマ遺構の内部と旧市街中央部を見学する"],
    ["残りのRoman 主要予定", "残りの主要なローマ遺跡を見学する"],
    ["城壁周辺とPart Alta", "城壁周辺とPart Altaを歩く"],
    ["Rambla Novaと海辺を短く散歩", "Rambla Novaと海辺を短く散歩する"],
    ["Tarragona市内駅 → Barcelona Sants → ホテル", "Tarragona市内駅からBarcelona Santsを経由してホテルへ戻る"],
    ["Sagrada周辺へ移動", "サグラダ・ファミリア周辺へ移動する"],
    ["ホテルへ戻る", "ホテルへ戻る"],
    ["Barcelona Santsへ移動", "Barcelona Santsへ移動する"],
    ["駅到着の余裕・乗車準備", "駅に早めに着き、乗車準備をする"],
    ["iryo 06150 Barcelona Sants → Madrid Atocha", "iryo 06150に乗り、Barcelona SantsからMadrid Atochaへ移動する"],
    ["プラド美術館", "プラド美術館を見学する"],
    ["シベレス広場", "シベレス広場を見る"],
    ["アルカラ門", "アルカラ門を見る"],
    ["エル・レティーロ公園", "エル・レティーロ公園を散策する"],
    ["ホテル休憩・防寒準備", "ホテルで休憩し、防寒の準備をする"],
    ["Puerta del Sol カウントダウン（12粒のブドウ）", "Puerta del Solのカウントダウンに参加する"],
    ["プエルタ・デル・ソル", "プエルタ・デル・ソルを歩く"],
    ["マヨール広場", "マヨール広場を歩く"],
    ["サン・イシドロ教会", "サン・イシドロ教会を見学する"],
    ["マドリード王宮（外観）", "マドリード王宮の外観を見る"],
    ["サン・フランシスコ・エル・グランデ（外観）", "サン・フランシスコ・エル・グランデの外観を見る"],
    ["ホテル休憩", "ホテルで休憩する"],
    ["Madrid Atocha到着・乗車準備", "Madrid Atochaに早めに着き、乗車準備をする"],
    ["Madrid → Cordoba（高速鉄道・計画窓）", "MadridからCórdobaへ高速鉄道で移動する"],
    ["Cordoba駅 → Mezquita-Catedral", "Córdoba駅からMezquita-Catedralへ移動する"],
    ["Mezquita-Catedral", "Mezquita-Catedralを見学する"],
    ["JuderíaとRoman Bridge", "JuderíaとRoman Bridgeを歩く"],
    ["Alcázar de los Reyes Cristianos", "Alcázar de los Reyes Cristianosを見学する"],
    ["Cordoba駅へ移動・乗車余裕", "Córdoba駅へ早めに移動し、乗車準備をする"],
    ["Cordoba → Madrid（高速鉄道・計画窓）", "CórdobaからMadridへ高速鉄道で移動する"],
    ["Madridホテルへ戻る", "Madridのホテルへ戻る"],
    ["ソフィア王妃芸術センター（ゲルニカ／ダリ）", "ソフィア王妃芸術センターでGuernicaとDalí作品を見る"],
    ["休憩・荷物回収", "休憩して荷物を回収する"],
    ["Madrid Atochaへ移動", "Madrid Atochaへ移動する"],
    ["駅到着余裕時間・乗車準備", "駅に早めに着き、乗車準備をする"],
    ["iryo 061171 Madrid Atocha → Barcelona Sants", "iryo 061171に乗り、Madrid AtochaからBarcelona Santsへ移動する"],
    ["タクシーでBCN T1へ（第一案）", "タクシーでBCN T1へ移動する"],
    ["チェックイン・荷物預け・保安検査・出国", "チェックイン・荷物預け・保安検査・出国手続きを済ませる"],
    ["BCN T1 発", "BCN T1を出発する"],
    ["PVG T2 着", "PVG T2に到着する"],
    ["PVG長時間乗継・食事・休憩", "PVGで食事と休憩をとりながら乗り継ぐ"],
    ["PVG T2 発", "PVG T2を出発する"],
    ["NRT T1 着", "NRT T1に到着する"],
    ["入国・荷物受取・帰宅移動", "入国手続きと荷物受取を済ませ、自宅へ移動する"]
  ]);
  const hasActionEnding = (title) => /(する|済ませる|整える|決める|楽しむ|歩く|見る|戻る|乗り継ぐ|とる|食べる|買う|回収する)$/u.test(String(title || "").replace(/（仮候補）$/, ""));
  function scheduleActionTitle(value, kind = "") {
    const title = travelerText(value).trim();
    if (!title || hasActionEnding(title)) return title;
    if (actionTitleOverrides.has(title)) return actionTitleOverrides.get(title);
    if (kind === "hotel") {
      const core = title.replace(/（仮候補）$/, "");
      if (/ホテルで休憩/.test(core)) return "ホテルで休憩する";
      if (/チェックアウト.*荷物回収/.test(core)) return `${core.replace(/をチェックアウト.*$/, "")}をチェックアウトして荷物を回収する（仮候補）`;
      if (/移動・チェックイン/.test(core)) return `${core.replace(/へ移動・チェックイン.*$/, "")}へ移動してチェックインする（仮候補）`;
      if (/チェックイン/.test(core)) return `${core.replace(/へチェックイン.*$/, "")}へチェックインする（仮候補）`;
      if (/荷物回収/.test(core)) return `${core.replace(/で荷物回収.*$/, "")}で荷物を回収する（仮候補）`;
      if (/荷物預け/.test(core)) return `${core.replace(/へ荷物預け.*$/, "")}へ荷物を預ける（仮候補）`;
    }
    if (kind === "attraction") {
      if (/外観/.test(title)) return `${title.replace(/[（(]外観[）)]/, "")}の外観を見る`;
      return `${title}を見学する`;
    }
    if (kind === "event") return `${title}に参加する`;
    if (kind === "rest") return `${title}をとる`;
    if (["transfer", "transport", "train", "flight"].includes(kind)) return `${title}へ移動する`;
    return title;
  }
  function mealActionTitle(meal) {
    const original = travelerText(meal?.primary || "食事").trim();
    if (hasActionEnding(original)) return original;
    const period = /朝/.test(meal?.period) ? "朝食" : /昼/.test(meal?.period) ? "昼食" : /夜/.test(meal?.period) ? "夕食" : /軽食/.test(meal?.period) ? "軽食" : "食事";
    if (/当日確認/.test(original)) return `${original.replace(/を当日確認.*$/, "")}の空席を確認して${period}をとる`;
    if (/搭乗口に近い営業中店舗/.test(original)) return `${original}をとる`;
    if (/持帰り|持ち帰り/.test(original)) return `${original.replace(/で到着直後に持帰り.*$/, "")}で持ち帰りの${period}を買う`;
    const shop = original.replace(/（[^）]*）/g, "").replace(/で軽い昼食$/, "").trim();
    return `${shop}で${period}をとる`;
  }
  const dishCategoryText = (category) => ({ tapas: "小皿料理", seafood: "魚介料理", sweet: "甘味", drink: "飲み物", stew: "煮込み", rice: "米料理", market: "市場料理", other: "その他" }[category] || category || "名物");
  const timingText = (item) => {
    if (item?.timing?.start?.time) return item.timing.start.time;
    if (item?.keepPriority === "optional" || item?.shortenable) return "当日判断";
    if (["meal", "rest", "walk"].includes(item?.kind)) return "時間調整枠";
    return "時刻を決める";
  };
  const timingEnd = (item) => item?.timing?.end?.time || "";
  const zoneLabel = (zone) => ({ "Asia/Tokyo": "日本時間", "Europe/Madrid": "スペイン時間", "Asia/Shanghai": "上海時間" }[zone] || (zone ? "現地時間" : ""));
  const itemStatus = (item, day = null) => {
    const itemText = `${item.title || ""} ${list(item.notes).join(" ")}`;
    if (/1\/1休館|休館.*要調整/.test(itemText)) return "休館と旅程が矛盾";
    const place = placeById.get(item.placeId);
    if (day && ["tarragona", "montserrat", "toledo"].includes(day.cityId) && place?.cityId && ![day.cityId, "flight"].includes(place.cityId)) return "都市・日付を要確認";
    if (!item.timing?.start?.time && (item.keepPriority === "optional" || item.shortenable)) return "当日行くか判断";
    if (!item.timing?.start?.time && !["meal", "rest", "walk"].includes(item.kind)) return "時刻確定が必要";
    if (item.planningStatus === "confirmed" && item.timing?.confidence === "confirmed") return "確認済み";
    if (item.planningStatus === "needs_information") return "旅行前に確認";
    if (item.bookingRequirement === "required" && item.inclusionStatus !== "adopted") return "予約要確認";
    if (item.timing?.confidence === "provisional") return "仮置き";
    return statusText(item.planningStatus || item.inclusionStatus);
  };
  const rowsForDay = (dayId) => list(trip.scheduleItems).filter((row) => row.dayId === dayId && row.inclusionStatus !== "rejected").sort((a, b) => {
    const aDateTime = a.timing?.start?.date && a.timing?.start?.time ? `${a.timing.start.date}T${a.timing.start.time}` : null;
    const bDateTime = b.timing?.start?.date && b.timing?.start?.time ? `${b.timing.start.date}T${b.timing.start.time}` : null;
    if (aDateTime && bDateTime && aDateTime !== bDateTime) return aDateTime.localeCompare(bDateTime);
    if (aDateTime && !bDateTime) return -1;
    if (!aDateTime && bDateTime) return 1;
    return (a.sequence ?? 999) - (b.sequence ?? 999);
  });
  const tasksForDay = (dayId) => list(trip.preparationTasks).filter((task) => list(task.relatedDayIds).includes(dayId));
  const bookingsForDay = (dayId) => list(trip.bookings).filter((booking) => list(booking.relatedDayIds).includes(dayId));

  function canonicalDay(day) {
    const rows = rowsForDay(day.id);
    const tasks = tasksForDay(day.id);
    const unresolved = tasks.filter((task) => task.status !== "done" && task.status !== "completed");
    const primaryRow = rows.find((row) => row.locked || row.keepPriority === "must") || rows[0];
    const status = day.statusLabel || day.status || (unresolved.length ? "準備が必要" : "要確認");
    const timeCounts = rows.reduce((counts, row) => {
      const key = row.timing?.start?.date && row.timing?.start?.time ? `${row.timing.start.date}T${row.timing.start.time}` : null;
      if (key) counts[key] = (counts[key] || 0) + 1;
      return counts;
    }, {});
    const timeline = rows.map((row) => {
      const timeKey = row.timing?.start?.date && row.timing?.start?.time ? `${row.timing.start.date}T${row.timing.start.time}` : null;
      const current = timeKey && timeCounts[timeKey] > 1 ? "同時刻候補が重複" : itemStatus(row, day);
      return {
        time: timingText(row), end: timingEnd(row), kind: kindText(row.kind), title: row.title,
        zone: zoneLabel(row.timing?.start?.timeZone), status: current, tone: toneFor(current), note: list(row.notes)[0] || placeById.get(row.placeId)?.summary || "時刻・場所・予約状況を確認中です。",
        detail: `canonical-${row.id}`
      };
    });
    if (!timeline.length) timeline.push({ time: "確認中", end: "", kind: "予定", title: "この日の予定", status: "行動順を確認中", tone: "warn", note: "訪問場所と移動順を決めてから表示します。", detail: `canonical-day-${day.id}` });
    const mealRows = rows.filter((row) => row.kind === "meal");
    const meals = mealRows.map((row) => {
      const option = list(trip.mealOptions).find((meal) => meal.scheduleItemId === row.id);
      const place = placeById.get(option?.placeId);
      return {
        period: /朝/.test(row.title) ? "朝" : /昼/.test(row.title) ? "昼" : /夜|夕/.test(row.title) ? "夜" : "食事",
        window: `${timingText(row)}${timingEnd(row) ? `–${timingEnd(row)}` : ""}`, area: place?.area || displayCity(day), nearby: row.title,
        purpose: list(row.notes)[0] || "前後の予定を崩さず食事を確保する", primary: place?.nameJa || (option?.planningStatus === "needs_information" ? "店の調査が必要" : row.title),
        dishes: list(option?.dishIds).map((id) => dishById.get(id)?.nameJa).filter(Boolean), price: "金額未調査", booking: statusText(option?.bookingRequirement),
        operation: option?.planningStatus === "needs_information" ? "営業確認が必要" : statusText(option?.planningStatus), alternatives: []
      };
    });
    if (!meals.length) meals.push({ period: "食事", window: "未調査", area: displayCity(day), nearby: "当日の動線", purpose: "食事を抜かず、前後の予定とつなぐ", primary: "食事枠が未調査", dishes: [], price: "未調査", booking: "未調査", operation: "未調査", alternatives: [] });
    const guide = rows.filter((row) => row.placeId || row.articleId).slice(0, 5).map((row) => [timingText(row), row.title, placeById.get(row.placeId)?.summary || "見どころと現地で使う情報を確認", `canonical-${row.id}`]);
    const plan = (unresolved.length ? unresolved : tasks).slice(0, 6).map((task, index) => [String(index + 1), task.title, task.blockedReason || statusText(task.status), list(task.informationNeeded).join("／") || task.completionNote || "完了条件を確認", task.ownerId || "本人", task.deadline || "時期未設定"]);
    if (!plan.length) plan.push(["1", "旅行前の再確認", "旅行前に再確認", day.caution || "営業・運行・予約証拠を確認", "本人", "旅行7日前"]);
    const decisions = [day.caution, day.contingency?.delay60?.instruction].filter(Boolean).map((text, index) => [index ? "遅延時" : "注意", text, index ? "info" : "wait"]);
    const primaryTitle = primaryRow?.title || day.title;
    const primaryStatus = primaryRow ? itemStatus(primaryRow, day) : status;
    return {
      id: day.id, date: jpDate(day), city: displayCity(day), type: typeFor(day), title: day.hero || day.title,
      timeZoneLabel: ["d1225", "d0104", "d0105"].includes(day.id) ? "各予定の現地時間" : "スペイン時間",
      state: status, stateTone: toneFor(status), summary: day.theme || day.caution || "当日の行動順と未確認事項を確認します。",
      primary: { eyebrow: "この日の最優先", title: primaryTitle, lead: list(primaryRow?.notes)[0] || day.caution || `${day.startTime || "開始未確認"}から${day.endTime || "終了未確認"}までの動線を確認します。`, meta: [primaryStatus, day.movement || typeFor(day)], actions: ["詳細を確認", "根拠を見る"] },
      upcoming: (unresolved.length ? unresolved : tasks).slice(0, 2).map((task) => [task.title, list(task.informationNeeded).join("／") || task.blockedReason || "完了条件を確認", task.blockedReason || statusText(task.status)]),
      timeline, meals, decisions, guide: guide.length ? guide : [["当日", day.title, "関連ガイドは未接続です", `canonical-day-${day.id}`]], plan
    };
  }

  function buildDays(representativeDays, scenarioId = "scenario1") {
    const selectedScenario = flexScenarios[scenarioId] || flexScenarios.scenario1;
    const normalize = (value) => String(value || "").replace(/[（(].*?[）)]/g, "").replace(/[・／/\s]/g, "").toLowerCase();
    const findCanonical = (title) => {
      const needle = normalize(title);
      return list(trip.scheduleItems).find((item) => { const candidate = normalize(item.title); return candidate === needle || (needle.length > 5 && (candidate.includes(needle) || needle.includes(candidate))); });
    };
    const applyFinalPlan = (day, base) => {
      const selected = selectedScenario.days[day.id] || finalPlan.days?.[day.id];
      if (!selected?.items?.length) return base;
      let selectedMealIndex = 0;
      const timeline = selected.items.map((item) => {
        const canonical = findCanonical(item.title);
        const hotel = hotelForItem(day.id, item);
        let title = travelerText(item.title);
        let note = travelerText(item.note);
        let status = travelerStatus(item.status);
        let detailKey = canonical ? `canonical-${canonical.id}` : `canonical-day-${day.id}`;
        if (item.kind === "meal") detailKey = `meal-${selectedMealIndex++}`;
        if (hotel && item.kind === "hotel") {
          if (/checkout|チェックアウト/i.test(item.title)) title = `${hotel.recommendation}をチェックアウト・荷物回収（仮候補）`;
          else if (/荷物回収/.test(item.title)) title = `${hotel.recommendation}で荷物回収（仮候補）`;
          else if (/最終泊/.test(item.title)) title = `${hotel.recommendation}へチェックイン（仮候補）`;
          else if (/Madridホテル|check-in/i.test(item.title)) title = `${hotel.recommendation}へ移動・チェックイン（仮候補）`;
          else if (/荷物預け/.test(item.title)) title = `${hotel.recommendation}へ荷物預け（仮候補）`;
          status = "仮候補・未予約";
          note = `${hotel.address}。明日のホテル相談で決定するまで、経路・荷物預け・チェックイン・チェックアウトはこの住所を仮基準にする。`;
          detailKey = `hotel-${hotel.id}`;
        }
        if (hotel && day.id === "d0104" && item.kind === "transfer" && /BCN T1|タクシー/.test(item.title)) note = `${hotel.recommendation}を06:55出発する仮計画。前夜に車を手配し、07:40 BCN T1着を守る。`;
        const transportNote = transportDetails[day.id]?.[item.title];
        if (transportNote) note = travelerText(transportNote);
        if (day.id === "d0105" && /入国・荷物受取・帰宅移動/.test(item.title)) item.zone = "日本時間";
        title = scheduleActionTitle(title, item.kind);
        return { time: item.time, end: item.end, kind: kindText(item.kind), title, zone: item.zone, status, tone: toneFor(status), note, detail: detailKey, routeAfter: travelerText(connectionPlans[day.id]?.[item.title] || "") };
      });
      const mealItems = selected.items.filter((item) => item.kind === "meal");
      const meals = mealItems.map((item, index) => {
        const period = /朝/.test(item.title) ? "朝" : /昼/.test(item.title) ? "昼" : "夜";
        const existing = list(base.meals).find((meal) => meal.period === period);
        const planned = list(selected.mealPlans)[index] || list(selectedMealPlans[day.id])[index] || {};
        return {
          ...(existing || {}), period: planned.period || period, window: item.timeText,
          area: travelerText(planned.area || existing?.area || displayCity(day)), nearby: travelerText(item.title),
          purpose: travelerText(planned.purpose || item.note || existing?.purpose || "前後の予定を崩さず食事を確保する"),
          primary: travelerText(planned.primary || (existing?.primary && !/未調査|調査が必要/.test(existing.primary) ? existing.primary : item.title)),
          dishes: list(planned.dishes).length ? list(planned.dishes) : list(existing?.dishes),
          booking: travelerText(planned.booking || existing?.booking || "店頭で確認"), operation: travelerText(planned.operation || item.status),
          alternatives: (list(planned.alternatives).length ? list(planned.alternatives) : list(existing?.alternatives)).map(travelerText)
        };
      });
      const displayedMeals = (meals.length ? meals : (travelMealFallbacks[day.id] || base.meals)).map((meal) => decorateMeal(day.id, meal));
      displayedMeals.forEach((meal, index) => {
        const row = timeline.find((item) => item.detail === `meal-${index}`);
        if (!row) return;
        row.title = mealActionTitle(meal);
        row.note = `${meal.area}｜${list(meal.dishes).join("・")}。${meal.booking}`;
        row.meal = meal;
      });
      if (!mealItems.length && travelMealFallbacks[day.id]) {
        travelMealFallbacks[day.id].forEach((meal, index) => timeline.push({ time: meal.window.split("–")[0], end: meal.window.split("–")[1] || "", kind: "食事", title: mealActionTitle(meal), zone: day.id === "d0105" ? "上海時間" : "スペイン時間", status: meal.operation, tone: toneFor(meal.operation), note: meal.purpose, detail: `meal-${index}` }));
        timeline.sort((a, b) => String(a.time).localeCompare(String(b.time), "ja"));
      }
      const primaryItem = selected.items.find((item) => ["flight", "train", "attraction", "event"].includes(item.kind)) || selected.items[0];
      const selectedType = day.id === "d1228" ? "観光中心日" : base.type;
      const plannedTasks = list(planTaskOverrides[day.id]);
      const plan = (plannedTasks.length ? plannedTasks : list(base.plan)).map((task, index) => [String(index + 1), ...task.slice(1)]);
      return {
        ...base, city: selected.city || finalDayMeta[day.id]?.city || base.city, cityIds: selected.cityIds || finalDayMeta[day.id]?.cityIds || [], type: selectedType, title: travelerText(selected.title),
        state: "", stateTone: "info", summary: "",
        primary: { ...base.primary, title: scheduleActionTitle(primaryItem.title, primaryItem.kind), lead: travelerText(primaryItem.note || "この予定を中心に、移動・食事・休憩を組んでいます。"), meta: [selectedType], actions: ["旅程を見る"] },
        timeline, meals: displayedMeals, plan, upcoming: plan.slice(0, 2).map(([, title, status, note]) => [title, note, status]),
        timeZoneLabel: ["d1225", "d1226", "d0104", "d0105"].includes(day.id) ? "各予定の現地時間" : "スペイン時間"
      };
    };
    return Object.fromEntries(list(trip.days).map((day) => { const base = representativeDays[day.id] ? { ...representativeDays[day.id], timeZoneLabel: "スペイン時間" } : canonicalDay(day); return [day.id, applyFinalPlan(day, base)]; }));
  }

  const areaRules = {
    barcelona: [
      ["eixample", "Eixample・Sagrada周辺", /sagrada|mila|batllo|vicens|sant-pau|gracia/i],
      ["ciutat-vella", "Ciutat Vella・旧市街", /guell-palace|boqueria|gothic|cathedral|rei|rambla|born|picasso|ciutadella/i],
      ["montjuic", "Montjuïc・Poble-sec", /montjuic|mnac|poble/i],
      ["barceloneta", "Barceloneta・Port Vell", /barceloneta|port-vell|sole/i],
    ],
    madrid: [
      ["paseo-arte", "Paseo del Arte・Retiro", /prado|reina|retiro|cibeles|alcala|atocha/i],
      ["centro-sol", "Centro・Sol・Austrias", /sol|mayor|palace|almudena|san-gines|campana|postas|latina/i],
      ["salamanca", "Salamanca・Serrano", /serrano|salamanca/i],
    ],
    tarragona: [["tarragona-old", "旧市街・古代Tarraco", /.*/]],
    montserrat: [["montserrat-monastery", "修道院・山上エリア", /.*/]],
    cordoba: [["cordoba-old-city", "Mezquita・Judería周辺", /.*/]],
    toledo: [["toledo-old", "旧市街・三文化地区", /.*/]],
  };
  const areaIntro = {
    barceloneta: "港と海辺の空気を感じる地区。魚介を目的にしつつ、中心部からの移動時間も見る。",
    salamanca: "整った街路と買い物の地区。中心部とは雰囲気が変わり、食事候補の幅も広い。",
    "tarragona-old": "ローマ遺跡と中世の街路が重なる中心部。坂と列車の帰路を守って歩く。",
    "montserrat-monastery": "修道院と展望を起点にする山上部。天候と公共交通の時刻が行動範囲を決める。",
    "toledo-old": "丘の上の迷路状の旧市街。宗教建築、美術、眺望を坂道と休憩込みでつなぐ。"
  };
  const guideFallbacks = {
    barcelona: { food: { name: "Pa amb tomàquet", kind: "Catalunya定番", note: "トマト、オリーブ油、塩で味わう日常の一皿。", shops: ["Can Culleretes", "7 Portes"] }, sight: { name: "Sagrada Família", kind: "建築", note: "Barcelonaで最優先の建築。外観、構造、光を順に見る。", nearby: "Pa amb tomàquet" } },
    madrid: { food: { name: "Bocadillo de calamares", kind: "Madrid定番", note: "揚げたイカをパンに挟む中心部の定番軽食。", shops: ["La Campana", "Bar Postas"] }, sight: { name: "Museo del Prado", kind: "美術館", note: "VelázquezとGoyaを中心に、代表作を絞って見る。", nearby: "Tortilla española" } },
    tarragona: { food: { name: "Romescoと魚介", kind: "海辺の料理", note: "ナッツと唐辛子を使うromesco系の味を魚介と合わせる。", shops: ["El Llagut"] }, sight: { name: "Tarragona円形闘技場", kind: "ローマ遺跡", note: "地中海を背にした古代Tarracoの代表的な遺跡。", nearby: "Romescoと魚介" } },
    montserrat: { food: { name: "Mató amb mel", kind: "山の甘味", note: "やさしい味のフレッシュチーズmatóを蜂蜜と食べる。", shops: ["Montserrat Buffet", "La Cafeteria"] }, sight: { name: "Montserrat大聖堂", kind: "修道院", note: "山の地形と現在も続く信仰文化を一緒に見る。", nearby: "Mató amb mel" } },
    toledo: { food: { name: "Carcamusas", kind: "Toledo名物", note: "豚肉と野菜を煮込む、坂歩きの休憩に合う温かい料理。", shops: ["Cervecería El Trébol"] }, sight: { name: "トレド大聖堂", kind: "宗教建築", note: "主祭壇、聖歌隊席、聖具室、Transparenteを優先する。", nearby: "Carcamusas" } }
  };
  function areaFor(place) {
    const rules = areaRules[place.cityId] || [];
    const haystack = `${place.id} ${place.area || ""} ${place.nameJa || ""}`;
    return rules.find(([, , regex]) => regex.test(haystack)) || rules[0];
  }
  function visitLabelsForPlace(placeId) {
    const place = placeById.get(placeId);
    const normalize = (value) => String(value || "").replace(/[（(].*?[）)]/g, "").replace(/[・／/\s]/g, "").toLowerCase();
    const names = [place?.nameJa, place?.nameLocal, placeId].map(normalize).filter((name) => name.length >= 3);
    return Object.entries(finalPlan.days || {}).flatMap(([dayId, selected]) => list(selected.items).filter((item) => { const title = normalize(item.title); return names.some((name) => title.includes(name) || name.includes(title)); }).map((item) => { const day = dayById.get(dayId); return day ? `${jpDate(day).replace(/（.*?）/, "")} ${item.time}` : item.time; }));
  }
  function sightFromPlace(place, priority) {
    const visits = visitLabelsForPlace(place.id);
    return { name: place.nameJa || place.id, priority, kind: kindText(place.kind === "attraction" ? "attraction" : place.kind), note: travelerText(place.summary || "見どころは関連する学習記事で確認します。"), when: visits[0] || "滞在中の候補", nearby: "近くの食事を確認", placeId: place.id, articleId: list(place.articleIds)[0] || null };
  }
  function dishForCity(dish, priority, cityId) {
    const related = list(dish.relatedPlaceIds).map((id) => placeById.get(id)?.nameJa).filter(Boolean);
    return { name: dish.nameJa || dish.nameLocal || dish.id, priority, kind: dishCategoryText(dish.category), note: travelerText(dish.whyTry || "この町らしい味と食べ方を知る料理です。"), when: dishSchedule[dish.id] || (dish.inclusionStatus === "adopted" ? "旅程に組込み済み" : "滞在中の候補"), shops: related, dishId: dish.id };
  }
  function buildGuide(representativeCities, representativeAreas, scenarioId = "scenario1") {
    const cityIds = ["barcelona", "madrid", "tarragona", "montserrat", "cordoba", "toledo"];
    const scenario = flexScenarios[scenarioId] || flexScenarios.scenario1;
    const scenarioVisit = (cityId) => Object.entries(scenario.days).filter(([, selected]) => list(selected.cityIds).includes(cityId)).map(([dayId]) => jpDate(dayById.get(dayId)));
    const visitsByCity = Object.fromEntries(cityIds.map((cityId) => [cityId, ["barcelona","tarragona","montserrat"].includes(cityId) ? scenarioVisit(cityId) : list(trip.days).filter((day) => list(finalDayMeta[day.id]?.cityIds || [day.cityId]).includes(cityId)).map(jpDate)]));
    const repsByName = new Map(list(representativeCities).map((city) => [city.id.toLowerCase(), city]));
    const cityArticleIds = { barcelona: "barcelona-overview", madrid: "madrid-overview", tarragona: "tarragona", montserrat: "montserrat", cordoba: "cordoba", toledo: "toledo" };
    const cities = cityIds.map((cityId) => ({ ...cityMeta[cityId], ...(repsByName.get(cityId) || {}), articleId: cityArticleIds[cityId], visit: (visitsByCity[cityId] || []).join("・") || "現在の旅程では訪問予定なし" }));
    const areas = list(representativeAreas).map((area) => ({ ...area, visit: [], foods: list(area.foods), sights: list(area.sights) }));
    areas.push({ id: "tarragona-old", city: "Tarragona", name: "旧市街・古代Tarraco", priority: 1, intro: "海辺の円形闘技場からcircus、Part Alta、城壁へ。火曜は内部を一日でつなぎ、日曜は14:30までの短縮順にする。", foodIntro: "romesco／cassolaを土地の象徴として第一に、魚介の米料理・fideus、魚介・tapasの順で選ぶ。", visit: visitsByCity.tarragona, foods: [{ name: "Romesco／cassola", priority: 1, kind: "最優先・土地の味", note: "ナッツや焙煎した野菜の濃いソースを魚介と合わせる、港町Tarragonaの象徴。El Llagutでは当日の魚介料理からromesco系を最初に確認する。", when: `${visitsByCity.tarragona[0]} El Llagut`, shops: ["El Llagut", "Part Altaでromesco／cassolaを掲示する営業店"] }, { name: "魚介の米料理・fideus", priority: 2, kind: "3人でシェア", note: "romescoの次に、魚介の旨味を吸った米料理または短い麺fideusを1皿。3人で分けて量を調整しやすい。", when: `${visitsByCity.tarragona[0]} El Llagut`, shops: ["El Llagut", "Part Altaで米料理またはfideusを掲示する営業店"] }, { name: "魚介・tapas", priority: 3, kind: "軽めの代替", note: "日曜短縮や食欲が軽い時は、地元の魚介と小皿を少量ずつ。帰りの列車を遅らせない選択肢にする。", when: `${visitsByCity.tarragona[0]} 時間・食欲に合わせる`, shops: ["El Llagut", "Part Altaで当日営業する魚介・tapas店"] }], sights: [{ name: "Tarragona円形闘技場", priority: 1, kind: "ローマ遺跡", note: "地中海へ向いたarenaとBalco del Mediterraniを続けて見て、海港都市Tarracoの地形をつかむ。", when: visitsByCity.tarragona[0], nearby: "Romesco／cassola" }, { name: "Praetorium・Roman CircusとPart Alta", priority: 2, kind: "ローマ遺跡・旧市街", note: "circusの構造が現代の建物と街路に残る様子を、地下からPart Altaまでたどる。", when: visitsByCity.tarragona[0], nearby: "魚介の米料理・fideus" }, { name: "考古学の遊歩道・城壁", priority: 3, kind: "城壁", note: "Tarracoの輪郭と異なる時代の石積みを見る。日曜短縮では閉館前に入れる場合だけ。", when: visitsByCity.tarragona[0], nearby: "魚介・tapas" }] });
    areas.push({ id: "montserrat-monastery", city: "Montserrat", name: "修道院・山上エリア", priority: 1, intro: "視界が良く、強風でなく、FGCと山上交通が運行し、3人に十分な体力がある場合だけ実行。どれか一つでも満たさなければBarcelona市内へ。", foodIntro: "La Cafeteriaを予約なしで使い、matóと蜂蜜があれば追加。出発前にbocadilloと水を3人分用意する。", visit: visitsByCity.montserrat, foods: [{ name: "Mató amb mel", priority: 1, kind: "山の甘味", note: "La Cafeteriaで提供があればmatóと蜂蜜を味わい、なければ温かい料理と携帯食で体力を守る。", when: `${visitsByCity.montserrat[0]} La Cafeteria`, shops: ["La Cafeteria"] }], sights: [{ name: "Montserrat大聖堂", priority: 1, kind: "修道院・最優先", note: "basilicaとLa Morenetaを中心に、今も続く巡礼地として静かに見る。", when: visitsByCity.montserrat[0], nearby: "Mató amb mel" }, { name: "山の地質・Sant Joan展望", priority: 2, kind: "天候・運行条件付き", note: "奇岩の地形と眺望を見る。Sant Joan funicularは同日運行と天候が良い場合だけ利用する。", when: visitsByCity.montserrat[0], nearby: "La Cafeteria" }, { name: "Montserrat Museum", priority: 3, kind: "低優先", note: "視界不良時や時間に余裕がある場合の屋内候補。帰路を遅らせてまで追加しない。", when: `${visitsByCity.montserrat[0]} 余裕がある場合`, nearby: "携帯食" }] });
    areas.push({ id: "cordoba-old-city", city: "Cordoba", name: "Mezquita・Judería周辺", priority: 1, intro: "Mezquita-Catedralを中心にJuderíaとRoman Bridgeを歩き、体力が残る場合だけAlcázarを加える。", foodIntro: "salmorejo、flamenquín、rabo de toro、berenjenas con mielを先に、pastel cordobésは余裕があれば味わう。", visit: ["1/2"], foods: [{ name: "Salmorejo", priority: 1, kind: "最優先・冷製スープ", note: "トマトとパン、オリーブ油を濃厚に合わせ、卵とjamónを添えるCordobaの入口。最初に3人で1皿を分ける。", when: "1/2 12:45–13:00", shops: ["Taberna Salinas", "Taberna Casa Pepe Salinas（Puerta de Almodóvar 2）"] }, { name: "Flamenquín", priority: 2, kind: "名物・巻き揚げ", note: "豚肉でjamónを巻いて揚げた、切り分けやすい名物。煮込みと食感が重ならないよう1皿を共有する。", when: "1/2 12:45–13:00", shops: ["Taberna Salinas", "Taberna Casa Pepe Salinas（Puerta de Almodóvar 2）"] }, { name: "Rabo de toro", priority: 3, kind: "名物・煮込み", note: "牛尾を時間をかけて煮込む濃厚な主菜。3人で1皿を分け、パンと一緒にソースまで味わう。", when: "1/2 12:45–13:00", shops: ["Taberna Salinas", "Taberna Casa Pepe Salinas（Puerta de Almodóvar 2）"] }, { name: "Berenjenas con miel", priority: 4, kind: "野菜の小皿", note: "薄く揚げた茄子に黒蜜を合わせる甘塩っぱい小皿。重い肉料理の間に3人でつまむ。", when: "1/2 12:45–13:00", shops: ["Taberna Salinas", "Taberna Casa Pepe Salinas（Puerta de Almodóvar 2）"] }, { name: "Pastel cordobés", priority: 5, kind: "余裕があれば甘味", note: "髪のように細いかぼちゃの砂糖煮を包む菓子。昼食後に見つかり、帰路に余裕がある場合だけ追加する。", when: "1/2 昼食後・余裕がある場合", shops: ["Juderíaで当日営業する菓子店"] }], sights: [{ name: "Mezquita-Catedral", priority: 1, kind: "宗教建築・最優先", note: "赤白の柱列、ミフラーブ、中央の大聖堂空間という異なる時代の層を見比べる、この日の外せない中心。", when: "1/2 10:00", nearby: "Salmorejo" }, { name: "JuderíaとRoman Bridge", priority: 2, kind: "街歩き", note: "白い路地からGuadalquivir川の橋へ歩き、宗教文化と都市地形の広がりを見る。", when: "1/2 11:45", nearby: "Salmorejo" }, { name: "Alcázar de los Reyes Cristianos", priority: 3, kind: "条件付き", note: "Mezquitaと昼食、帰路の余裕を守り、時間と体力が残る場合だけ庭園を訪れる。", when: "1/2 午後・余裕がある場合", nearby: "Pastel cordobés" }] });
    cityIds.forEach((cityId) => {
      const rules = areaRules[cityId] || [];
      rules.forEach(([id, name], index) => {
        if (!areas.some((area) => area.id === id)) areas.push({ id, city: cityMeta[cityId].id, name, priority: index + 1, intro: areaIntro[id] || `この町の観光地を位置関係と優先度でまとめます。`, foodIntro: `${name}で食べたい名物と、予定に接続できる店をまとめます。`, visit: [], foods: [], sights: [] });
      });
    });
    list(trip.places).filter((place) => cityIds.includes(place.cityId)).forEach((place) => {
      if (["tarragona", "montserrat", "cordoba", "toledo"].includes(place.cityId)) return;
      const rule = areaFor(place);
      if (!rule) return;
      const area = areas.find((candidate) => candidate.id === rule[0]);
      if (!area) return;
      const visits = visitLabelsForPlace(place.id);
      area.visit = [...new Set([...list(area.visit), ...visits])];
      if (place.kind === "restaurant" || place.foodProfile) return;
      if (!area.sights.some((sight) => sight.name === place.nameJa)) area.sights.push(sightFromPlace(place, area.sights.length + 1));
    });
    cityIds.forEach((cityId) => {
      const cityAreas = areas.filter((area) => area.city.toLowerCase() === cityId);
      const cityDishes = list(trip.dishes).filter((dish) => list(dish.cityIds).includes(cityId) || list(dish.relatedPlaceIds).some((id) => placeById.get(id)?.cityId === cityId));
      cityDishes.forEach((dish, index) => {
        const target = cityAreas[index % Math.max(cityAreas.length, 1)];
        const dishNames = [dish.nameJa, dish.nameLocal].filter(Boolean);
        const food = target ? dishForCity(dish, target.foods.length + 1, cityId) : null;
        if (target && food.shops.length && !target.foods.some((entry) => dishNames.includes(entry.name))) target.foods.push(food);
      });
      cityAreas.forEach((area) => {
        if (!area.visit.length) area.visit = visitsByCity[cityId] || [];
        const fallback = guideFallbacks[cityId];
        if (!area.sights.length && fallback) area.sights.push({ ...fallback.sight, priority: 1, when: area.visit.length ? area.visit[0] : "滞在中の候補" });
        if (!area.foods.length && fallback) area.foods.push({ ...fallback.food, priority: 1, when: area.visit.length ? area.visit[0] : "滞在中の候補" });
        area.sights.sort((a, b) => (a.priority || 99) - (b.priority || 99)).forEach((sight, index) => { sight.priority = index + 1; });
        area.foods.sort((a, b) => (a.priority || 99) - (b.priority || 99)).forEach((food, index) => { food.priority = index + 1; });
        const articleId = cityArticleIds[cityId];
        if (articleId && ["tarragona", "montserrat", "cordoba"].includes(cityId)) {
          area.sights.forEach((sight) => { sight.articleId ||= articleId; });
          area.foods.forEach((food) => { food.articleId ||= articleId; });
        }
      });
    });
    return { cities, areas };
  }

  function buildBudget() {
    return list(trip.budgetEstimates).filter((row) => row.amount !== null && row.amount !== "" && Number.isFinite(Number(row.amount))).map((row) => ({
      id: row.id, title: row.title, category: row.category, amountOriginal: Number(row.amount) * Number(row.quantity || 1), currency: row.currency, status: row.status || "estimate",
      note: row.note || "", sourceLabel: row.sourceLabel || "", sourceUrl: row.sourceUrl || "", checkedAt: row.checkedAt || "", sourceScope: row.sourceScope || ""
    }));
  }

  const budgetDayMap = {
    sagrada: "d1230", "iryo-out": "d1230", "iryo-back": "d0103", aerobus: "d1226", montserrat: "d1229",
    mila: "d1226", batllo: "d1226", prado: "d1231", reinasofia: "d0103"
  };
  const selectedCanonicalBudgetIds = new Set(["intl-flight", "barcelona-tourist-tax", "sagrada", "iryo-out", "iryo-back", "aerobus", "montserrat", "mila", "batllo", "prado", "reinasofia"]);
  const planOnlyAdmissions = {
    d0102: [
      { id: "plan:d0102:cordoba-rail", title: "Madrid–Cordoba高速鉄道往復", amountEur: 240, category: "交通", basis: "3名分の計画枠・発売後に実額へ更新" },
      { id: "plan:d0102:mezquita", title: "Mezquita-Catedral", amountEur: 45, category: "観光", basis: "2026/4/1以降の一般€15×3名・旅行前に公式枠を確認" },
      { id: "plan:d0102:alcazar", title: "Alcázar de los Reyes Cristianos", amountEur: 18, category: "観光", basis: "3名分の計画枠・旅行日前に再確認" }
    ]
  };
  const mealAllowances = {
    d1225: [0, 0, 60], d1226: [0, 75, 105], d1227: [36, 75, 105], d1228: [36, 75, 105],
    d1229: [36, 75, 105], d1230: [36, 60, 90], d1231: [36, 75, 120], d0101: [36, 75, 105],
    d0102: [36, 75, 105], d0103: [36, 60, 90], d0104: [36, 45, 60], d0105: [30, 45, 90]
  };
  const planTaskOverrides = {
    d1225: [
      ["1", "国際線3区間の予約内容を共有", "予約内容を確認", "便名、ターミナル、預け荷物が最終目的地まで運ばれるか、3人の座席を予約PDFで確認する。", "本人", "出発前"],
      ["2", "PVG乗継の手順を保存", "出発前に確認", "International Transfer、乗継保安検査、搭乗口確認の順を端末へ保存する。", "本人", "出発前"]
    ],
    d1226: [
      ["1", "Casa MilàとCasa Batllóの入場枠を確定", "発売後に予約", "14:30前後のCasa Milàと16:30前後のCasa Batllóを、到着遅延時の取消条件も見て予約する。", "本人", "発売後"],
      ["2", "Barcelona前半ホテルを決定", "ホテル相談後", "仮候補3名1室の広さ、ベッド、取消条件を確認して住所を旅程へ反映する。", "本人", "ホテル相談後"]
    ],
    d1227: [
      ["1", "3日間の天候シナリオを決定", "12/26夜に判断", "12/27–29の視界・風・降水と交通運行を比べ、Montserratを日・月・火のどこに置くか決める。", "家族", "12/26 20:00"],
      ["2", "Montserratの朝go/no-go", "当日判断", "視界・風・体力・FGC／山上交通を確認し、悪条件なら予約不要のBarcelona市内案へ切り替える。", "家族", "対象日07:45"]
    ],
    d1228: [
      ["1", "予約不要の市内案を保存", "旅行前に確認", "Gothic Quarter、Born、Modernisme外観、ホテル休憩、食事の順をオフラインで見られるようにする。", "本人", "旅行7日前"],
      ["2", "任意の当日券だけ確認", "当日判断", "Park GüellまたはPalau内部は空きがあり、街歩きと休憩を崩さない場合だけ追加する。", "家族", "市内案当日"]
    ],
    d1229: [
      ["1", "Tarragonaの年末運行・開館を確認", "公表後に確認", "12/29のRegional往復時刻と有効な乗車券、Roman monumentsの2026 Christmas運用を公式で確認する。", "本人", "2026年末情報の公表後"],
      ["2", "日曜短縮案の開館を確認", "シナリオ3のみ", "12/27はRoman interiorsを14:30までに終え、中央部だけに縮める。Pont del DiableとBUSPLANAは入れない。", "本人", "12/26夜"]
    ],
    d1230: [
      ["1", "Sagrada Família 09:00を予約", "発売後に予約", "12/30 09:00のオンライン日時指定券を購入し、入口と変更条件を3人で共有する。", "本人", "発売開始後"],
      ["2", "BarcelonaからMadridの列車を確定", "発売待ち", "14:50前後の便と取消条件を比較し、Santsへ発車90分前に着く予定を守る。", "本人", "発売後"],
      ["3", "荷物預けとSants経路を確定", "ホテル相談後", "決定ホテルで朝のcheckout・荷物預け可否を確認し、Sagrada往復と12:40 Sants着の経路を更新する。", "本人", "ホテル決定後"]
    ],
    d1231: [
      ["1", "Bodega de los Secretosの昼食を予約", "旅行前に確認", "12/31 13:30、3人で予約し、14:45までに退店できるか確認する。", "本人", "予約受付後"],
      ["2", "年越し用の夕食とぶどうを確保", "当日18:00まで", "昼食後に3人分の持帰り夕食、水、12粒ずつのぶどうを購入する。", "本人", "12/31 18:00まで"],
      ["3", "Solの当日規制を確認", "当日確認", "18:00に入口、駅閉鎖、天候を確認し、20:30に進むかホテルへ戻るか決める。", "本人", "12/31 18:00"]
    ],
    d0101: [
      ["1", "元日の営業を前日に確認", "前日に確認", "San Ginés、La Campana、ホテルの食事提供を確認し、休業時の持帰りを確保する。", "本人", "12/31"],
      ["2", "元日の街歩き範囲を決める", "当日判断", "疲労と天候を見て、王宮外観以降を短縮するか決める。", "本人", "1/1 朝"]
    ],
    d0102: [
      ["1", "Cordoba往復列車を確定", "発売待ち", "07:30前後発・17:15前後帰路の高速鉄道を比較し、最終便を避けて往復を購入する。", "本人", "発売後"],
      ["2", "Mezquita-Catedralを確認", "旅行前に確認", "1/2の入場時間、公式券、礼拝による変更を公式サイトで確認する。", "本人", "旅行7日前"],
      ["3", "Cordoba実行可否とToledo代替を決定", "旅行前に判断", "鉄道またはMezquita核心が利用できない場合だけToledoへ切り替える。", "家族", "旅行7日前"],
      ["4", "Taberna Salinasの営業を確認", "旅行前に確認", "13:00入店、3人、4品の提供と1/2営業を確認し、休業なら選択ルールで代替する。", "本人", "旅行7日前"]
    ],
    d0103: [
      ["1", "MadridからBarcelonaの列車を確定", "発売待ち", "17:22前後の便を予約し、Atochaへ発車90分前に着く予定を守る。", "本人", "発売後"],
      ["2", "Barcelona最終泊ホテルを決定", "ホテル相談後", "3名対応、Santsからの移動、翌朝の空港タクシーを確認する。", "本人", "ホテル相談後"],
      ["3", "Santsの夕食購入先を確認", "旅行前に確認", "Enrique Tomásの21時台営業を確認し、閉店時はMadridで持帰りを買う。", "本人", "旅行7日前"]
    ],
    d0104: [
      ["1", "帰国便のチェックイン条件を確認", "予約内容を確認", "BCN T1のカウンター、荷物、搭乗開始、座席を予約内容で確認する。", "本人", "出発24時間前"],
      ["2", "空港タクシーを手配", "ホテル決定後", "仮ホテル06:55発、BCN T1 07:40着を基準に3人と荷物が乗る車を手配する。", "本人", "前夜"]
    ],
    d0105: [
      ["1", "PVG乗継と搭乗口を確認", "到着後に確認", "乗継保安検査を終え、14:25便の搭乗口と再検査位置を先に確認する。", "本人", "PVG到着後"],
      ["2", "成田からの帰宅方法を共有", "出発前に確認", "到着時刻と荷物受取後の鉄道または迎えを3人で共有する。", "本人", "旅行前"]
    ]
  };
  const mealExperienceRules = [
    [/京成友膳/, "出発前に温かい和食を取り、長いフライトへ落ち着いて切り替える食事です。"],
    [/Mauri Pastisseria/, "Barcelona到着後、街の菓子店らしいショーケースを眺めながら最初の軽食を楽しみます。"],
    [/Seventeen Restaurant/, "到着日の疲れを優先し、ホテル近くでCatalunya・地中海料理をゆっくり味わいます。"],
    [/365 Obrador/, "Barcelonaの日常に近いパンとコーヒーで、観光前の朝を軽快に始めます。"],
    [/Can Culleretes/, "旧市街の伝統料理店で、煮込み、パスタ、デザートまでCatalunyaの家庭料理をまとめて味わいます。"],
    [/Balmes 103/, "ホテルへ戻ってから移動なしで温かい料理を取れる、疲労を翌日に残さない夕食です。"],
    [/La Pubilla/, "Gràciaの市場前で、その日の季節料理をランチメニューとして楽しみます。"],
    [/El Xampanyet/, "El Bornの活気あるバルで、魚介の小皿とcavaを少しずつ分け合います。"],
    [/Montserrat Buffet/, "山上で温かいCatalunya料理とmatóを取り、午後の下山まで体力を整えます。"],
    [/El Llagut/, "Tarragonaの旧市街でromescoと地中海の魚介を囲み、Roman cityの一日を土地の味につなげます。"],
    [/Taberna Salinas/, "歴史あるtabernaでCordobaの代表4品を少しずつ分け、Andalucíaの味を一度に楽しみます。"],
    [/Can Solé/, "Barcelonetaで魚介の香りが立つ米料理とfideuàを囲む、この日のご褒美になる夕食です。"],
    [/Enrique Tomás/, "駅でjamónの香りを楽しみながら、列車の余裕時間を守って食べられる移動日の一食です。"],
    [/Casa Alberto/, "Las LetrasでMadridらしい煮込みと魚料理を味わい、到着日の夜を街の食文化につなげます。"],
    [/Bodega de los Secretos/, "地下空間の雰囲気と温かい主菜を楽しみ、大晦日の長い一日に備える昼食です。"],
    [/持帰り夕食/, "年越しの混雑に振り回されず、好きなものを揃えて客室で落ち着いて食べる安全な夕食です。"],
    [/San Ginés/, "元日のMadridで、熱いchocolateにchurrosを浸して食べる定番の甘い体験です。"],
    [/La Campana/, "Plaza Mayor横で揚げたてのイカをパンに挟む、Madridらしい気軽な昼食です。"],
    [/El Bar de Alba|客室メニュー/, "元日の夜はホテルで温かい料理を取り、翌日のCordobaに向けて休みます。"],
    [/El Trébol/, "Toledoの坂歩きの途中で、地元の煮込みcarcamusasと名物のBombaを味わいます。"],
    [/Coffee & Fresh Food/, "搭乗口を確認した後、明るい空港カフェで朝食と水分を確保します。"],
    [/搭乗口に近い|制限区域内/, "長い乗継の途中で温かい食事を取り、次の便まで体調を整えます。"]
  ];
  const mealOrderRules = [
    [/京成友膳/, "和定食を2人前、うどんを1人前。3人で味を分け、水を3本確保します。"],
    [/Mauri Pastisseria/, "bocadilloを2個、甘くないペストリーを1個、caféを3杯。3人で分けて量を調整します。"],
    [/Seventeen Restaurant/, "tortillaを1皿、地中海料理の主菜を2皿、パンを1皿。3人でシェアします。"],
    [/365 Obrador/, "bocadilloを2個、クロワッサンを1個、caféを3杯。水は1人1本を目安にします。"],
    [/Can Culleretes/, "escudellaを1皿、canelonsを2皿、crema catalanaを1皿。3人で取り分けます。"],
    [/Balmes 103/, "軽い主菜を2皿、スープを1皿、パンを1皿。足りなければ主菜を1皿追加します。"],
    [/La Pubilla/, "ランチメニューを3人分。異なる主菜を選び、少しずつ交換して味わいます。"],
    [/El Xampanyet/, "anchoaを1皿、conservasを2皿、温かい小皿を1皿、cavaを各1杯。パンも1皿頼みます。"],
    [/Montserrat Buffet/, "ビュッフェを3人分。温かい主菜を各1皿取り、mató・蜂蜜は1皿をシェアします。"],
    [/El Llagut/, "romescoを使う魚介を1皿、魚介の米料理を2人前、季節の前菜を1皿。3人で取り分けます。"],
    [/Taberna Salinas/, "salmorejo、flamenquín、rabo de toro、berenjenas con mielを各1皿。パンと水を加えて3人でシェアします。"],
    [/Can Solé/, "fideuàまたは魚介の米料理を2人前、魚介の前菜を1皿。3人で取り分けます。"],
    [/Enrique Tomás/, "jamónのbocadilloを2個、tortillaを1個、水を3本。列車内でも分けやすい形にします。"],
    [/Casa Alberto/, "callosを1皿、bacalaoを2皿、パンを1皿。3人でMadridの味を分け合います。"],
    [/Bodega de los Secretos/, "ランチの主菜を3人分。異なる料理を選び、前菜を1皿追加してシェアします。"],
    [/持帰り夕食/, "bocadilloまたは温かい持帰りを3人分、水を3本、年越し用ぶどうを3人分用意します。"],
    [/San Ginés/, "churrosを6本前後、chocolateを3杯。まず2本ずつ食べ、足りなければ追加します。"],
    [/La Campana/, "bocadillo de calamaresを2個、tortillaを1皿。3人で半分ずつ交換します。"],
    [/El Bar de Alba|客室メニュー/, "温かい軽食を2皿、スープまたは寿司を1皿。3人で分け、足りなければ1皿追加します。"],
    [/El Trébol/, "carcamusasを1皿、Bomba Trébolを2個、パンまたはpulgaを1つ。3人で取り分けます。"],
    [/Coffee & Fresh Food/, "sandwichを2個、果物を1つ、caféを3杯、水を3本。搭乗前に食べ切れる量にします。"],
    [/搭乗口に近い.*朝食|制限区域内.*朝食/, "温かい朝食を3人分、水を3本。食べ慣れた料理を選び、搭乗前に食べ切ります。"],
    [/搭乗口に近い.*昼食|制限区域内/, "温かい麺またはご飯を3人分、水を3本。13:30までに食べ終えます。"]
  ];
  function firstRuleValue(rules, value) { return rules.find(([pattern]) => pattern.test(String(value || "")))?.[1] || ""; }
  const mealEvidenceRules = [
    [/El Llagut/, { min: 60, max: 85, basis: "公式現行menu：romesco系前菜€13＋米・fideus 2人前€34–52＋パン€3.60。水・飲み物と価格変動を加えた3人分。", sourceUrl: "https://www.elllagut.com/la-carta/", sourceLabel: "El Llagut公式menu", sourceScope: "料理名、税込価格、パン代、最低2人注文の条件" }],
    [/Casa Alberto/, { min: 88, max: 110, basis: "公式現行menu：callos €26.50＋bacalao 2皿€50＋パン3人€4.50。飲み物またはdessertの余裕を加えた3人分。", sourceUrl: "https://www.casaalberto.es/carta-restaurante?idIdioma=1", sourceLabel: "Casa Alberto公式menu", sourceScope: "callos、bacalao、パンの税込価格" }],
    [/Bodega de los Secretos/, { min: 95, max: 130, basis: "公式現行menu：主菜3皿€66–99＋前菜€18–25＋パン3人€7.50。飲み物を含む3人分。", sourceUrl: "https://bodegadelossecretos.com/en/carta/", sourceLabel: "Bodega de los Secretos公式menu", sourceScope: "料理・パンの税込価格と12/31昼営業" }],
    [/Can Solé/, { min: 85, max: 125, basis: "公式menuの魚介前菜と米・fideuàを2人前頼む3人分の範囲。年末の料理と価格は予約時に再確認。", sourceUrl: "https://restaurantcansole.com/carta/", sourceLabel: "Can Solé公式menu", sourceScope: "魚介料理・米料理・fideuàの掲載価格" }],
    [/Can Culleretes/, { min: 45, max: 70, basis: "公式menu掲載のescudella・canelons・crema catalanaを基準に、店内価格差と飲み物を加えた3人分。", sourceUrl: "https://culleretes.com/carta-i-menus/", sourceLabel: "Can Culleretes公式menu", sourceScope: "Catalunya料理の提供内容。店内価格は利用前に再確認" }],
    [/Taberna Salinas/, { min: 55, max: 80, basis: "公式menu掲載のsalmorejo・flamenquín・rabo de toro・berenjenasを各1皿共有する3人分。価格非掲載のため余裕を持つ計画枠。", sourceUrl: "https://www.tabernasalinas.com/la-carta/", sourceLabel: "Taberna Salinas公式menu", sourceScope: "4品の提供、通常営業時間、住所。価格は利用前に確認" }],
    [/San Ginés/, { min: 18, max: 30, basis: "chocolate 3杯とchurros約6本を頼む3人分の計画枠。元日は行列と追加注文を見込む。", sourceUrl: "https://chocolateriasangines.com/", sourceLabel: "Chocolatería San Ginés公式", sourceScope: "本店の通年営業とChristmas期間の予約条件。価格は現地確認" }],
    [/La Campana/, { min: 20, max: 35, basis: "bocadillo de calamares 2個＋tortilla 1皿＋飲み物を3人で分ける計画枠。", sourceUrl: "https://www.esmadrid.com/restaurantes/la-campana", sourceLabel: "Madrid公式観光案内", sourceScope: "店舗、名物、通常営業時間。元日営業と価格は直前確認" }],
    [/La Cafeteria/, { min: 45, max: 70, basis: "山上で温かい料理またはbocadilloを3人分＋matóを共有する計画枠。混雑時は持参食へ切替。", sourceUrl: "https://www.montserratvisita.com/en/practical-information/opening-hours", sourceLabel: "Montserrat公式", sourceScope: "La Cafeteriaの通常営業時間。料理と価格は当日確認" }],
    [/京成友膳/, { min: 40, max: 55, basis: "和定食2人前＋うどん1人前＋水を3人分。空港店の価格変動を含む計画枠。", sourceUrl: "https://www.narita-airport.jp/ja/shop/shop-search/t1cb04_t0009k/", sourceLabel: "成田空港公式店舗案内", sourceScope: "場所と通常営業時間。料理価格は入店時確認" }],
    [/Mauri Pastisseria/, { min: 28, max: 42, basis: "bocadillo 2個＋甘くないpastry 1個＋coffee 3杯の3人分計画枠。", sourceUrl: "https://mauri.cat/", sourceLabel: "Mauri公式", sourceScope: "店舗と商品構成。年末営業時間と価格は直前確認" }],
    [/365 Obrador/, { min: 25, max: 38, basis: "bocadillo 2個＋croissant 1個＋coffee 3杯＋水の3人分計画枠。", sourceUrl: "https://365obrador.com/", sourceLabel: "365 Obrador公式", sourceScope: "店舗・商品構成。対象店の年末営業時間と価格は直前確認" }],
    [/Cuines Santa Caterina/, { min: 65, max: 95, basis: "魚料理・季節野菜・パンを3人で共有する計画枠。menuは季節で変わるため、当日価格を見て選ぶ。", sourceUrl: "https://grupotragaluz.com/restaurantes/cuines-santa-caterina/", sourceLabel: "Cuines Santa Caterina公式", sourceScope: "店舗・料理構成・予約案内。価格は当日menuで確認" }],
    [/El Xampanyet/, { min: 55, max: 80, basis: "anchoa 1皿＋conservas 2皿＋温菜1皿＋cava 3杯の3人分計画枠。", sourceUrl: "https://www.elxampanyet.es/", sourceLabel: "El Xampanyet公式", sourceScope: "店舗情報。年末営業時間と価格は直前確認" }],
    [/Seventeen Restaurant/, { min: 70, max: 100, basis: "tortilla 1皿＋主菜2皿＋パンと飲み物を3人で共有する到着日用の計画枠。", sourceUrl: "https://www.hotelbarcelonacenter.com/", sourceLabel: "Hotel Barcelona Center公式", sourceScope: "館内restaurantの提供。料理価格と年末時間は到着後確認" }],
    [/Balmes 103/, { min: 70, max: 105, basis: "軽い主菜2皿＋soup 1皿＋パンと飲み物、必要なら主菜1皿追加する3人分。", sourceUrl: "https://www.hotelbarcelonacenter.com/", sourceLabel: "Hotel Barcelona Center公式", sourceScope: "館内restaurantの提供。料理価格と年末時間は到着後確認" }],
    [/持帰り夕食/, { min: 45, max: 75, basis: "持帰り主食3人分＋水＋年越し用ぶどうの計画枠。購入店未確定のため価格根拠は商品選択時に更新。", sourceUrl: "", sourceLabel: "計画枠", sourceScope: "店が決まるまでmenu根拠なし" }],
    [/Enrique Tomás/, { min: 25, max: 45, basis: "jamónのbocadillo 2個＋tortilla 1個＋水3本の3人分計画枠。", sourceUrl: "https://www.enriquetomas.com/", sourceLabel: "Enrique Tomás公式", sourceScope: "商品構成。駅店舗の営業時間と価格は直前確認" }],
    [/Coffee & Fresh Food|FOODIES/, { min: 40, max: 60, basis: "sandwich 2個＋果物＋coffee 3杯＋水3本の空港内3人分計画枠。", sourceUrl: "https://www.aena.es/en/josep-tarradellas-barcelona-el-prat/airport-services/shops-and-restaurants.html", sourceLabel: "Aena公式店舗案内", sourceScope: "保安検査後の店舗・通常営業時間。搭乗口と価格は当日確認" }],
    [/El Bar de Alba|客室メニュー/, { min: 60, max: 100, basis: "温かい軽食2皿＋soupまたはsushi 1皿＋飲み物の3人分計画枠。元日の提供はcheck-in時に確認。", sourceUrl: "https://room-matehotels.com/gb/hotel-alba-madrid/", sourceLabel: "Room Mate Alba公式", sourceScope: "館内barの存在。元日menu・提供時間・価格は現地確認" }],
    [/搭乗口に近い|制限区域内/, { min: 35, max: 60, basis: "PVG制限区域内で温かい食事3人分＋水を確保する計画枠。搭乗口確認後に店と実額を決める。", sourceUrl: "", sourceLabel: "当日選択の計画枠", sourceScope: "乗継導線により店が変わるためmenu根拠なし" }]
  ];
  function mealBudgetFor(dayId, period) {
    const amounts = mealAllowances[dayId] || [36, 75, 105];
    const slot = /昼/.test(period) ? 1 : /朝|軽食/.test(period) ? 0 : 2;
    return Number(amounts[slot] || amounts.find((amount) => amount > 0) || 0);
  }
  function mealVisual(meal) {
    const haystack = `${meal.primary} ${list(meal.dishes).join(" ")}`;
    if (/El Llagut|romesco|cassola/i.test(haystack)) return { image: "assets/food-romesco-cassola-ai.webp", imageAlt: "魚介を温かいromescoで煮たcassolaのイメージ", imageKind: "料理イメージ・AI生成" };
    if (/Taberna Salinas|salmorejo|flamenquín|rabo de toro|berenjenas con miel/i.test(haystack)) return { image: "assets/food-salmorejo-ai.webp", imageAlt: "卵とjamónを添えたCordobaのsalmorejoのイメージ", imageKind: "料理イメージ・AI生成" };
    if (/La Cafeteria|Mató|mató/i.test(haystack)) return { image: "assets/food-mato-mel-ai.webp", imageAlt: "matóに蜂蜜をかけたCatalunyaの甘味のイメージ", imageKind: "料理イメージ・AI生成" };
    if (/La Campana|bocadillo de calamares/i.test(haystack)) return { image: "assets/food-bocadillo-calamares-ai.webp", imageAlt: "揚げたcalamaresをパンに挟んだMadridのbocadilloのイメージ", imageKind: "料理イメージ・AI生成" };
    if (/Can Solé|fideuà|魚介の米料理/i.test(haystack)) return { image: "assets/food-fideua.webp", imageAlt: "魚介と短い麺を炊いたfideuà", imageKind: "料理写真" };
    if (/Can Culleretes|crema catalana/i.test(haystack)) return { image: "assets/food-crema-catalana.jpg", imageAlt: "表面を香ばしく焼いたcrema catalana", imageKind: "料理写真" };
    if (/San Ginés|churros/i.test(haystack)) return { image: "assets/food-churros-san-gines.jpg", imageAlt: "chocolateとchurros", imageKind: "料理写真" };
    if (/El Trébol|carcamusas/i.test(haystack)) return { image: "assets/food-carcamusas.jpg", imageAlt: "Toledo名物carcamusas", imageKind: "料理写真" };
    if (/Barcelona|Catalunya|Rambla|Còrsega|Balmes|Gràcia|El Born|Barceloneta|Montserrat|Sants|Santa Caterina/i.test(`${meal.area} ${meal.primary}`)) return { image: "assets/barcelona-hero-v1.png", imageAlt: "BarcelonaとCatalunyaの街のイメージ", imageKind: "街のイメージ・AI生成" };
    if (/Madrid|Atocha|Cordoba|Toledo|Salinas|Mezquita|Sol|San Ginés|Plaza Mayor|Las Letras|Paseo del Arte|San Blas|Room Mate|La Campana|Botoneras/i.test(`${meal.area} ${meal.primary}`)) return { image: "assets/madrid-hero-v1.png", imageAlt: "Madridと内陸・Andalucíaの街のイメージ", imageKind: "街のイメージ・AI生成" };
    return {};
  }
  function defaultOrderForThree(meal) {
    const dishes = list(meal.dishes).filter(Boolean);
    if (!dishes.length) return "主菜を3人分と水を3本。量が多い店では前菜1皿と主菜2皿から始めます。";
    if (/朝|軽食/.test(meal.period)) return `${dishes.slice(0, 2).join("と")}を合計3人分。飲み物と水は1人1つずつ頼みます。`;
    return `${dishes.slice(0, 3).join("、")}を1皿ずつ頼んで3人でシェアし、量を見て主菜を1皿追加します。`;
  }
  function decorateMeal(dayId, meal) {
    const visual = mealVisual(meal);
    const evidence = mealEvidenceRules.find(([pattern]) => pattern.test(`${meal.primary} ${list(meal.dishes).join(" ")}`))?.[1];
    const fallbackBudget = mealBudgetFor(dayId, meal.period || "食事");
    const { price: _legacyPrice, ...travelerMeal } = meal;
    return {
      ...travelerMeal, ...visual,
      budgetMinEur: evidence?.min ?? Math.max(0, Math.round(fallbackBudget * 0.8)),
      budgetMaxEur: evidence?.max ?? fallbackBudget,
      budgetEur: evidence?.max ?? fallbackBudget,
      budgetBasis: evidence?.basis || "店が未確定のため、3人分を食事時間帯別に置いた計画枠。店とmenuが決まり次第、積み上げへ更新します。",
      sourceUrl: evidence?.sourceUrl || "",
      sourceLabel: evidence?.sourceLabel || "計画枠",
      sourceScope: evidence?.sourceScope || "menu根拠は未接続",
      checkedAt: "2026-08-16",
      experience: meal.experience || firstRuleValue(mealExperienceRules, meal.primary) || "その町の料理と雰囲気を、前後の予定に無理なくつなげて楽しむ食事です。",
      orderForThree: meal.orderForThree || firstRuleValue(mealOrderRules, meal.primary) || defaultOrderForThree(meal)
    };
  }
  const localTransportAllowances = { d1225: 0, d1226: 18, d1227: 24, d1228: 18, d1229: 60, d1230: 24, d1231: 18, d0101: 18, d0102: 30, d0103: 24, d0104: 45, d0105: 0 };
  function buildBudgetPlan(budgetRows, fx, scenarioId = "scenario1") {
    const scenario = flexScenarios[scenarioId] || flexScenarios.scenario1;
    const flexDayFor = (city) => Object.entries(scenario.days).find(([, selected]) => selected.city === city)?.[0];
    const montserratDayId = flexDayFor("Montserrat");
    const tarragonaDayId = flexDayFor("Tarragona");
    const eurRate = Number(fx?.EURJPY || 170);
    const asEur = (row) => row.currency === "JPY" ? Number(row.amountOriginal) / eurRate : Number(row.amountOriginal);
    const plannedDays = buildDays({}, scenarioId);
    const missing = list(trip.budgetEstimates).filter((row) => row.id !== "hotels" && (row.amount === null || row.amount === "" || !Number.isFinite(Number(row.amount)))).map((row) => ({ id: row.id, title: row.title, note: row.note }));
    const missingIds = new Set(missing.map((row) => row.id));
    const canonicalBudgetIds = new Set(list(trip.budgetEstimates).map((row) => row.id));
    const usableBudgetRows = list(budgetRows).filter((row) => !missingIds.has(row.id) && (!canonicalBudgetIds.has(row.id) || selectedCanonicalBudgetIds.has(row.id)));
    const days = list(trip.days).map((day) => {
      const mealLines = list(plannedDays[day.id]?.meals).map((meal, index) => ({
        id: `plan:${day.id}:meal:${index}`,
        title: `${meal.period || "食事"}・${meal.primary}`,
        amountEur: Number(meal.budgetMaxEur || meal.budgetEur || 0),
        category: "食事",
        basis: `3人分 €${meal.budgetMinEur || 0}–€${meal.budgetMaxEur || meal.budgetEur || 0}｜${meal.budgetBasis}`,
        sourceUrl: meal.sourceUrl || "",
        sourceLabel: meal.sourceLabel || "計画枠",
        checkedAt: meal.checkedAt || "2026-08-16"
      })).filter((line) => line.amountEur > 0);
      const lines = [...mealLines];
      if ((localTransportAllowances[day.id] || 0) > 0) lines.push({ id: `plan:${day.id}:local-transport`, title: "市内交通・短距離移動", amountEur: localTransportAllowances[day.id], category: "交通", basis: "3人分の計画枠・長距離鉄道は別行" });
      list(planOnlyAdmissions[day.id]).forEach((row) => lines.push({ ...row }));
      if (day.id === tarragonaDayId) lines.push({ id: `plan:${day.id}:tarragona-rail`, title: "Barcelona–Tarragona往復", amountEur: 36, category: "交通", basis: "3名分の見積・年末ダイヤ発売後に更新" }, { id: `plan:${day.id}:tarragona-admission`, title: "Tarragona市立遺跡入場", amountEur: 36, category: "観光", basis: "3名分の見積・利用日の対象施設で更新" });
      usableBudgetRows.filter((row) => {
        const mappedDay = row.id === "montserrat" ? montserratDayId : (row.dayId || budgetDayMap[row.id]);
        return mappedDay === day.id;
      }).forEach((row) => lines.push({ id: row.id, title: row.title, amountEur: asEur(row), category: row.category, basis: row.status === "confirmed" || row.status === "確定済み" ? `確定額｜${row.note || row.sourceLabel || "確認済み"}` : `見積｜${row.note || "旅行前に実額へ更新"}`, sourceUrl: row.sourceUrl || "", sourceLabel: row.sourceLabel || "", checkedAt: row.checkedAt || "" }));
      return { id: day.id, date: jpDate(day), city: finalDayMeta[day.id]?.city || displayCity(day), lines, totalEur: lines.reduce((sum, line) => sum + line.amountEur, 0) };
    });
    const assignedIds = new Set(days.flatMap((day) => usableBudgetRows.filter((row) => (row.id === "montserrat" ? montserratDayId : (row.dayId || budgetDayMap[row.id])) === day.id).map((row) => row.id)));
    const tripWide = usableBudgetRows.filter((row) => !assignedIds.has(row.id)).map((row) => ({ id: row.id, title: row.title, amountEur: asEur(row), category: row.category, basis: row.status === "confirmed" || row.status === "確定済み" ? `確定額｜${row.note || row.sourceLabel || "確認済み"}` : `見積｜${row.note || "旅行前に実額へ更新"}`, sourceUrl: row.sourceUrl || "", sourceLabel: row.sourceLabel || "", checkedAt: row.checkedAt || "" }));
    hotelStays.forEach((stay) => tripWide.push({ id: `hotel:${stay.id}`, title: `${stay.stay}・${stay.recommendation}`, amountEur: stay.totalEur, category: "宿泊", basis: `仮候補・未予約／${stay.priceCheckedAt} 3名検索` }));
    const allLines = [...days.flatMap((day) => day.lines), ...tripWide];
    const categories = ["食事", "交通", "観光", "宿泊", "買い物", "雑費", "その他"].map((category) => ({ category, amountEur: allLines.filter((line) => line.category === category).reduce((sum, line) => sum + line.amountEur, 0) })).filter((row) => row.amountEur > 0);
    const totalEur = allLines.reduce((sum, line) => sum + line.amountEur, 0);
    return { days, tripWide, categories, totalEur, missing, assumptions: "国際線は3名のeチケット控えで確認した発券済み総額です。食費は店ごとの注文内容と公式menuを優先し、価格非掲載・店未確定の食事だけ範囲付き計画枠にしています。日別合計には安全側の上限を採用します。ホテル€3,370は2026-07-25/26に大人3名・朝食なし・変更可能な料金を優先して調べた仮候補3滞在の合計で未予約です。Barcelona宿泊税€126は4つ星€8.40×3人×5泊の予備枠で、予約総額に含まれる場合は外します。" };
  }
  const operationalSourceRules = [
    [/CA0|PVG|浦東|成田|国際線|帰国便|搭乗口|保安検査/, [{ label: "発券済みeチケット控え（非公開）", href: "", checkedAt: "2026-08-16", scope: "3名の便・日付・区間・発券済み総額を確認。予約番号と旅客情報は公開しません" }]],
    [/Sants|Atocha|Barcelona.*Madrid|Madrid.*Barcelona|Córdoba.*列車|列車.*Córdoba|AVE|Renfe/, [{ label: "Renfe公式", href: "https://www.renfe.com/es/en", checkedAt: "2026-08-16", scope: "長距離列車の発売・運行・利用条件。採用便は発売後に再確認" }]],
    [/Montserrat|Plaça Espanya|FGC|Aeri|Cremallera/, [{ label: "Montserrat公式｜営業時間", href: "https://www.montserratvisita.com/en/practical-information/opening-hours", checkedAt: "2026-08-16", scope: "山上施設の通常営業時間。天候と当日運行は出発前にも再確認" }, { label: "FGC Turistren公式", href: "https://turistren.cat/en/trains/montserrat-rack-railway-and-funiculars/", checkedAt: "2026-08-16", scope: "BarcelonaからMontserratへの鉄道・登山鉄道" }]],
    [/Tarragona|Tarraco|円形闘技場|Circ|城壁/, [{ label: "UNESCO｜Archaeological Ensemble of Tarraco", href: "https://whc.unesco.org/en/list/875", checkedAt: "2026-08-16", scope: "Tarracoの構成資産と世界遺産としての位置づけ" }, { label: "Tarragona Turisme公式", href: "https://www.tarragonaturisme.cat/en", checkedAt: "2026-08-16", scope: "市内観光と年末の実用情報。各施設時間は直前に再確認" }]],
    [/Córdoba|Cordoba|Mezquita|Judería/, [{ label: "Mezquita-Catedral公式", href: "https://mezquita-catedraldecordoba.es/en/", checkedAt: "2026-08-16", scope: "入場・通常営業時間・建物の公式情報。対象日の時間は予約時に再確認" }]],
    [/Sagrada/, [{ label: "Sagrada Família公式", href: "https://sagradafamilia.org/en/tickets", checkedAt: "2026-08-16", scope: "入場券・見学条件。2026年末の枠は発売後に確定" }]],
    [/Park Güell/, [{ label: "Park Güell公式", href: "https://parkguell.barcelona/en/planning-your-visit/prices-and-times", checkedAt: "2026-08-16", scope: "有料入場帯・料金・利用条件。枠は未購入" }]],
    [/Casa Milà|La Pedrera/, [{ label: "La Pedrera公式", href: "https://www.lapedrera.com/en/visits", checkedAt: "2026-08-16", scope: "見学種類・通常時間・予約" }]],
    [/Casa Batlló/, [{ label: "Casa Batlló公式", href: "https://www.casabatllo.es/en/online-tickets/", checkedAt: "2026-08-16", scope: "入場枠・利用条件" }]],
    [/Prado/, [{ label: "Museo del Prado公式", href: "https://www.museodelprado.es/en/visit-the-museum", checkedAt: "2026-08-16", scope: "12月31日の短縮開館を含む訪問条件" }]],
    [/Reina Sofía/, [{ label: "Museo Reina Sofía公式", href: "https://www.museoreinasofia.es/en/visit", checkedAt: "2026-08-16", scope: "開館日・通常時間・入場条件" }]],
    [/Puerta del Sol|年越し|NYE/, [{ label: "Madrid公式観光案内｜New Year's Eve", href: "https://www.esmadrid.com/en/whats-on/new-years-eve-puerta-sol", checkedAt: "2026-08-16", scope: "年越し行事の概要。2026年の入場規制・交通は公式発表後に更新" }]],
    [/Barcelona.*空港|空港.*Barcelona|El Prat|Aena/, [{ label: "Aena公式｜Barcelona空港", href: "https://www.aena.es/en/josep-tarradellas-barcelona-el-prat.html", checkedAt: "2026-08-16", scope: "空港施設・出発案内。terminalと搭乗口は当日確認" }]],
    [/Barcelona.*地下鉄|地下鉄.*Barcelona|TMB/, [{ label: "TMB公式", href: "https://www.tmb.cat/en/home", checkedAt: "2026-08-16", scope: "Barcelona市内交通。年末の運行は直前確認" }]],
    [/Madrid.*地下鉄|地下鉄.*Madrid|Metro/, [{ label: "Metro de Madrid公式", href: "https://www.metromadrid.es/en", checkedAt: "2026-08-16", scope: "Madrid市内交通。大晦日・元日の運行は直前確認" }]]
  ];
  function operationalSourcesFor(item) {
    const text = `${item.id || ""} ${item.title || ""} ${list(item.notes).join(" ")}`;
    return operationalSourceRules.filter(([pattern]) => pattern.test(text)).flatMap(([, sources]) => sources);
  }
  function detail(key) {
    if (!String(key).startsWith("canonical-")) return null;
    const id = String(key).slice("canonical-".length);
    if (id.startsWith("day-")) {
      const day = dayById.get(id.slice(4));
      return day ? { eyebrow: "DAY DATA", title: day.title, status: day.statusLabel || day.status, note: day.caution || day.theme, facts: [["日付", jpDate(day)], ["宿泊", day.lodging || "未確認"], ["食事", day.mealStatus || "未確認"]], links: [] } : null;
    }
    const item = list(trip.scheduleItems).find((row) => row.id === id);
    if (!item) return null;
    const place = placeById.get(item.placeId);
    const booking = bookingById.get(item.bookingId);
    const article = articleById.get(item.articleId || list(place?.articleIds)[0]);
    const sourceIds = [...new Set([...list(place?.visitInfo?.sourceIds), ...list(booking?.sourceIds)])];
    const canonicalSources = sourceIds.map((sourceId) => sourceById.get(sourceId)).filter(Boolean).map((source) => ({ label: source.title || source.label || source.id, href: source.url || source.href || "", checkedAt: source.checkedAt || place?.visitInfo?.checkedAt || "再確認待ち", scope: source.scope || source.whatWasChecked || "" }));
    const sources = [...canonicalSources, ...operationalSourcesFor(item)].filter((source, index, all) => index === all.findIndex((candidate) => `${candidate.label}|${candidate.href}` === `${source.label}|${source.href}`)).slice(0, 5);
    const isTransit = ["transfer", "transport", "flight", "airport", "station", "train"].includes(item.kind) || /乗継|保安検査|搭乗口|空港|駅/.test(item.title);
    const facts = [["時刻", `${timingText(item)}${timingEnd(item) ? `–${timingEnd(item)}` : ""} ${zoneLabel(item.timing?.start?.timeZone)}`.trim()]];
    if (booking) facts.push(["予約", `${booking.title}：${statusText(booking.status)}`]);
    if (!isTransit && place?.visitInfo) facts.push(["訪問条件", place.visitInfo.recheckRequired ? "旅行前に公式情報を再確認" : statusText(place.visitInfo.status)]);
    if (!isTransit && place?.address) facts.push(["住所", place.address]);
    const needsOperationalSource = Boolean(isTransit || booking || place?.visitInfo || place?.officialUrl);
    return {
      eyebrow: kindText(item.kind), title: scheduleActionTitle(item.title, item.kind), status: itemStatus(item), note: travelerText(list(item.notes)[0] || place?.summary || "この予定の時刻と前後の移動を旅程で確認します。"),
      facts,
      links: [{ label: "詳しく学ぶ", href: article ? `ux-v1-learn.html?id=${encodeURIComponent(article.id)}` : "" }, { label: "公式情報", href: place?.officialUrl || booking?.actionUrl || "" }, { label: "地図", href: place?.mapUrl || "" }].filter((link) => link.href),
      sources,
      showSourceWarning: needsOperationalSource && sources.length === 0
    };
  }

  global.UXFullData = {
    trip, flexScenarios, buildDays, buildGuide, buildBudget, buildBudgetPlan, detail, rowsForDay, tasksForDay, bookingsForDay,
    packingItems: list(trip.packingItems), budgetEstimates: list(trip.budgetEstimates), articles: list(trip.learningArticles), cityMeta, hotelStays
  };
})(window);
