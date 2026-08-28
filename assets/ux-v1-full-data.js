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
    .replace(/原本確認後/g, "航空会社または店への直接確認後")
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
  const plannedDetailByKey = new Map();

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
      status: "予約済み", recommendation: "Oriente Atiram Hotel Barcelona", bookingRef: "73528306312892", bookedAt: "2026-08-23", bookedBy: "家族が予約",
      checkIn: "12/26（土）14:00", checkOut: "12/30（水）12:00", checkInDeadline: "24:00（到着が0時を過ぎる場合は事前に施設へ連絡）",
      address: "La Rambla 45, 08002 Barcelona", phone: null,
      room: "トリプルルーム 1室・大人3名・禁煙", layout: "トリプルルーム（ベッド構成は予約確認書に記載なし）", size: "未確認",
      breakfast: "ビュッフェ朝食込み・提供時間は未確認", reception: "24時間",
      amount: { currency: "JPY", total: 209379, taxAtProperty: 17152 },
      payment: { state: "partial", paidAmount: 192227, paidCurrency: "JPY", dueAtProperty: 17152, dueCurrency: "JPY", method: "MasterCard 下4桁8334" },
      freeCancelUntil: "2026/12/25 14:00（施設現地時間）", cancelPenalty: "期限後は1泊目相当の手数料",
      locationNote: "Liceu駅（Metro L3）がホテル正面。L3はSants Estacióまで乗換なしで直通。Sants駅までは約3.5kmで、荷物がある移動はタクシーを優先する。",
      caution: "予約確認書に「事前に施設へ連絡してチェックイン手順を確認する」と明記されている。チェックイン最低年齢16歳。朝食開始時刻とベッド構成は未確認。地方税17,152円は施設で支払う。",
      officialUrl: "https://www.atiramhotels.com/en/hotels/hotel-oriente-atiram",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Oriente+Atiram+Hotel+Barcelona+La+Rambla+45", factsCheckedAt: "2026-08-26"
    },
    {
      id: "madrid", stay: "Madrid", dates: "2026/12/30–2027/1/3", nights: 4,
      status: "予約済み", recommendation: "Room Mate Mario", bookingRef: "73527586086268", bookedAt: "2026-08-22", bookedBy: "家族が予約",
      checkIn: "12/30（水）15:00", checkOut: "1/3（日）12:00", checkInDeadline: "24:00（時間外チェックイン不可）",
      address: "Calle de Campomanes 4, 28013 Madrid", phone: null,
      room: "トリプルルーム 1室・大人3名・禁煙", layout: "Three single beds and Bathtub includedはリクエスト扱い・確約なし", size: "未確認",
      breakfast: "ビュッフェ朝食込み・07:00–12:00", reception: "24時間・荷物預かりあり",
      amount: { currency: "JPY", total: 199867, taxAtProperty: 0 },
      payment: { state: "paid", paidAmount: 199867, paidCurrency: "JPY", dueAtProperty: 0, dueCurrency: "JPY", method: "MasterCard 下4桁8334" },
      freeCancelUntil: "2026/12/29 12:00（施設現地時間）", cancelPenalty: "期限後の条件は未確認",
      locationNote: "Ópera駅まで約50m。Puerta del Solや王宮へ歩きやすく、Atochaとの荷物移動はタクシーを使う。",
      caution: "3台のシングルベッドはリクエスト扱い。元日の朝食提供もチェックイン時に確認する。",
      officialUrl: "https://room-matehotels.com/gb/hotel-mario-madrid/",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Room+Mate+Mario+Madrid", factsCheckedAt: "2026-08-23"
    },
    {
      id: "barcelona-final", stay: "Barcelona最終泊", dates: "2027/1/3–1/4", nights: 1,
      status: "予約済み", recommendation: "B&B HOTEL Barcelona Viladecans", bookingRef: "73527615564619", bookedAt: "2026-08-22", bookedBy: "家族が予約",
      checkIn: "1/3（日）14:00", checkOut: "1/4（月）12:00", checkInDeadline: "24:00（受付終了。それ以降の到着は事前に施設へ連絡）",
      address: "Av. Olof Palme 24, 08840 Viladecans", phone: null,
      room: "トリプルルーム 1室・大人3名・禁煙", layout: "ベッド構成は予約確認書に記載なし", size: "未確認",
      breakfast: "コンチネンタルブレックファスト込み・06:00–10:00", reception: "24時間・24時間カフェ（コーヒー・紅茶無料）",
      amount: { currency: "JPY", total: 24890, taxAtProperty: 551 },
      payment: { state: "partial", paidAmount: 24339, paidCurrency: "JPY", dueAtProperty: 551, dueCurrency: "JPY", method: "MasterCard 下4桁8334" },
      freeCancelUntil: "2027/1/2 18:00（施設現地時間）", cancelPenalty: "期限後は支払総額100%",
      locationNote: "Viladecans駅からほぼ正面〜徒歩約7分。1/3夜はBarcelona Santsからタクシー約20〜25分を第一手段にし、R2 Sud約16分は第二手段とする。空港へはタクシー約10分。",
      caution: "ベッド構成は未確認。日曜夜のR2 Sud運行間隔が公表資料で確認できず、3人分の荷物と乗換階段があるため、Santsからタクシーを第一手段にする。24:00の受付終了を守る。",
      officialUrl: "https://www.hotel-bb.com/en/hotel/barcelona-viladecans",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=B%26B+HOTEL+Barcelona+Viladecans", factsCheckedAt: "2026-08-23"
    }
  ];
  const railBookings = [
    {
      id: "tarragona-return", route: "2026-12-29(火) Barcelona Sants ⇄ Tarragona", timeWindow: "往路08:15前後発／復路17:00前後発", duration: "片道 約1時間15分", stations: "Barcelona Sants ⇄ Tarragona市内駅（Camp de Tarragonaは使わない）", operators: "Renfe（Regional / Media Distancia）", passengers: "大人3名", luggage: "運行会社で異なる。購入会社決定後に確定（iryoは80×55×35cmの記載あり）", status: "年末年始ダイヤ未発売", constraint: "Camp de Tarragonaは市街から離れ、バス連絡が必要なためTarragona市内駅を使う。"
    },
    {
      id: "barcelona-madrid", route: "2026-12-30(水) Barcelona Sants → Madrid Puerta de Atocha", timeWindow: "14:30〜15:30発", duration: "約2時間45分〜3時間", stations: "Barcelona Sants → Madrid Puerta de Atocha", operators: "Renfe AVE / iryo / Ouigo", passengers: "大人3名", luggage: "運行会社で異なる。購入会社決定後に確定（iryoは80×55×35cmの記載あり）", status: "Renfe・Ouigo未発売／iryoは発売済みの可能性・要確認", constraint: "チェックアウト12:00。Sants到着は発車60分前を下回らない。"
    },
    {
      id: "madrid-day-trip", route: "2027-01-02(土) Madrid Puerta de Atocha ⇄ Córdoba（往復）", timeWindow: "往路07:30前後発／復路17:15前後発", duration: "片道 約1時間45分〜2時間", stations: "Madrid Puerta de Atocha ⇄ Córdoba", operators: "Renfe AVE / iryo", passengers: "大人3名", luggage: "運行会社で異なる。購入会社決定後に確定（iryoは80×55×35cmの記載あり）", status: "Renfe・Ouigo未発売／iryoは発売済みの可能性・要確認", constraint: "Córdoba が休業・運休・満席で成立しない場合だけ Toledo（Avant・片道約33分）へ切り替える。Toledo は代替であり第一候補ではない。Granada は今回行かない。"
    },
    {
      id: "madrid-barcelona", route: "2027-01-03(日) Madrid Puerta de Atocha → Barcelona Sants", timeWindow: "16:30〜17:00発", duration: "約2時間45分〜3時間", stations: "Madrid Puerta de Atocha → Barcelona Sants", operators: "Renfe AVE / iryo / Ouigo", passengers: "大人3名", luggage: "運行会社で異なる。購入会社決定後に確定（iryoは80×55×35cmの記載あり）", status: "Renfe・Ouigo未発売／iryoは発売済みの可能性・要確認", constraint: "到着後はB&B ViladecansまでRodalies R2 Sud約16分、またはタクシー約20〜25分。"
    }
  ].map((booking) => ({
    ...booking,
    releaseNote: "2026-08-26時点でRenfeは12/13より先、Ouigoは12/12までしか発売していない。iryoは8/23にTrainlineで12/30の価格（1人¥6,632）が出ていたため発売済みの可能性が高く、まずiryo公式で12/30・1/2・1/3を確認する。Renfe／Ouigoは2026-10-01から週次で確認する。",
    purchaseSites: [
      { label: "Renfe", href: "https://www.renfe.com/" },
      { label: "iryo", href: "https://iryo.eu/" },
      { label: "Ouigo", href: "https://www.ouigo.com/es/" }
    ]
  }));
  const closureFacts = [
    { place: "アルハンブラ宮殿（Granada）", fact: "年間の休館日は12/31と1/1の2日だけ。冬季（10/15〜3/31）は8:30〜18:00。", sourceLabel: "アルハンブラ宮殿公式｜営業時間・料金", sourceUrl: "https://www.alhambra-patronato.es/visitar/horarios-y-tarifas" },
    { place: "タラゴナ歴史博物館 MHT", fact: "祝日を除く月曜は全館休館。冬季（10/27〜3/31）は火〜金9:00〜20:00、土9:30〜20:00、日祝9:30〜14:30。1/1・12/24〜26・12/31は休館。12/28は月曜のためTarragonaを置かない。", sourceLabel: "Tarragona市公式｜MHT営業時間", sourceUrl: "https://www.tarragona.cat/patrimoni/museu-historia/visites/horaris" },
    { place: "サグラダ・ファミリア", fact: "11〜2月の日曜は10:30開館、平日は9:00開館。18:00閉館・最終入場17:00。12/27（日）は10:30より前に入れない。", sourceLabel: "サグラダ・ファミリア公式", sourceUrl: "https://sagradafamilia.org/en/tickets" }
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
      { period: "朝昼", area: "ブケリア市場・La Rambla 91・ホテルから徒歩2分", primary: "Bar Pinotxo", dishes: ["カウンターの温かい料理", "bocadillo", "café"], booking: "予約不可・並んで入る", operation: "1940年創業。月〜土06:30–16:00。10:15入店を優先し、到着が遅れたら後続の散策から削る", alternatives: ["El Quim de la Boqueria", "ブケリア市場内の営業中カウンター"] },
      { period: "甘味", area: "Carrer d'en Xuclà 4-6・ホテルから徒歩3分", primary: "Granja Viader", dishes: ["クレマ・カタラナ", "チョコラーテ", "甘味"], booking: "予約不要", operation: "1870年創業。月〜土 9–13:30／17–20:30・日曜休。17:00開店に合わせる", alternatives: ["同じ街区でクレマ・カタラナを出す営業店", "ホテル近くの営業中カフェ"] },
      { area: "Carrer d'en Quintana 5・ホテルから徒歩3分", primary: "Can Culleretes", dishes: ["Sant Esteveのカネロネス", "Catalunya料理の前菜", "クレマ・カタラナ"], booking: "12/1までに20:00で3名予約・祝日営業確認", operation: "1786年創業のBarcelona最古のレストラン。12/26は祝日のため営業確認を予約と同時に行う", alternatives: ["同じ街区でカネロネスを出す営業確認済み店", "持帰りは最後の手段"] }
    ],
    d1227: [
      { period: "朝", area: "Oriente Atiram Hotel館内", primary: "ホテルのビュッフェ朝食", dishes: ["ビュッフェの主食", "果物", "飲み物"], booking: "宿泊に含まれる", operation: "08:30出発。開始時刻は未確認のため、間に合わなければ早朝のコーヒー・紅茶と前夜の買い置きへ", alternatives: ["早朝のコーヒー・紅茶サービス", "前夜に用意した3人分の朝食"] },
      { area: "Ciutat Vella・旧市街", primary: "Can Culleretes（日曜の市内案）／Montserrat時はLa Cafeteria", dishes: ["escudella", "canelons", "crema catalana"], booking: "事前予約を前提にしない", operation: "市内案は当日空席確認。Montserrat時は山上の営業状況を確認", alternatives: ["Bar del Pla", "Santa Caterina市場周辺の営業店"] },
      { area: "Passeig d'Isabel II 14", primary: "7 Portes", dishes: ["パエリア", "魚介料理", "Catalunya料理の前菜"], booking: "12/1までに20:00で3名予約", operation: "1836年創業。年中無休13:00–翌01:00。Montserratから戻って休憩後に向かう", alternatives: ["Can Solé（日曜夜の営業を確認できた場合）", "Barcelonetaで魚介の米料理を出す営業確認済み店"] }
    ],
    d1228: [
      { period: "朝", area: "Oriente Atiram Hotel館内", primary: "ホテルのビュッフェ朝食", dishes: ["ビュッフェの主食", "果物", "飲み物"], booking: "宿泊に含まれる", operation: "開始時刻は未確認。出発に間に合わなければ早朝サービスと前夜の買い置きへ", alternatives: ["早朝のコーヒー・紅茶サービス", "前夜に用意した3人分の朝食"] },
      { area: "Santa Caterina市場周辺", primary: "Cuines Santa Caterina／Montserrat時はLa Cafeteria", dishes: ["市場の魚料理", "季節野菜", "パン"], booking: "当日空席で利用", operation: "市内案は市場周辺で当日選択。Montserrat時は山上の営業状況を確認", alternatives: ["市場内で3人分を選ぶ", "Bar Joan"] },
      { area: "Carrer de Mallorca 236・カサ・ミラから徒歩5分", primary: "Cerveseria Catalana", dishes: ["タパス", "魚介の小皿", "肉料理の小皿"], booking: "予約不可・並んで入る", operation: "毎日営業。20:00入店を目標にし、待ち10〜45分を見込む", alternatives: ["同じ街区の営業中タパス店", "ホテル近くの営業中タパス店"] }
    ],
    d1229: [
      { period: "朝", area: "Oriente Atiram Hotel館内", primary: "ホテルのビュッフェ朝食", dishes: ["ビュッフェの主食", "果物", "飲み物"], booking: "宿泊に含まれる", operation: "開始時刻は未確認。列車に間に合わなければ早朝サービスと前夜の買い置きへ", alternatives: ["早朝のコーヒー・紅茶サービス", "前夜に用意した3人分の朝食"] },
      { area: "Tarragona Part Alta", primary: "カルソッツとロメスコを出す店", dishes: ["calçots", "romesco", "肉料理または魚介"], booking: "12/29昼の提供を事前確認", operation: "カルソッツは11月〜4月が季節。本場VallsのあるTarragona県で冬に味わう", alternatives: ["El Llagut（romescoと魚介）", "徒歩10分以内でromescoを出す店"] },
      { period: "夜", area: "La Rambla 35・Oriente Atiram Hotelから徒歩1〜2分", primary: "Tablao Cordobésのディナー付き21:00公演", dishes: ["ディナーメニュー3人分", "ビール・ワイン・サングリア・ソフトドリンク飲み放題", "ショー中のドリンク1杯"], booking: "2026/12/01までに3名で予約", operation: "ディナーは19:45開始を計画。開始時刻は公演の約1時間半前が目安で予約時に確定する。ビーガン・ベジタリアン・ハラル・グルテンフリーに対応", alternatives: ["Palau Dalmases（Born・12世紀の邸宅・€30〜）", "Los Tarantos（Plaça Reial・1963年創業・40分・€25〜）"], experience: "ホテルの隣でディナーと、2025年に世界最高のタブラオに選ばれた舞台を続けて楽しめます。", orderForThree: "ディナー付き21:00公演を3名分予約し、食事制限があれば予約時に伝えます。ディナー中の飲み放題とショー中のドリンク1杯が含まれます。" }
    ],
    d1230: [
      { period: "朝", area: "Oriente Atiram Hotel館内", primary: "ホテルのビュッフェ朝食", dishes: ["ビュッフェの主食", "果物", "飲み物"], booking: "宿泊に含まれる", operation: "開始時刻は未確認。08:15出発に間に合わなければ早朝サービスと前夜の買い置きへ", alternatives: ["早朝のコーヒー・紅茶サービス", "前夜に用意した3人分の朝食"] },
      { area: "ブケリア市場・ホテルから徒歩2分", primary: "El Quim de la Boqueria", dishes: ["市場の温かい料理", "魚介料理", "卵料理"], booking: "予約不可・並んで入る", operation: "12:15入店、12:50退店。休業・満席なら市場内の営業中カウンターで同じ時間内に食べる", alternatives: ["Bar Pinotxo", "ブケリア市場内の営業中カウンター"] },
      { period: "夜", area: "Calle Mayor 84・Ópera周辺", primary: "Casa Ciriacoで夕食", dishes: ["gallina en pepitoria（鶏のペピトリア）", "callos（モツ煮）", "パンと飲み物"], booking: "12/1までに21:00で3名を予約", operation: "1917年創業のMadridの老舗。Room Mate Mario（Campomanes 4）からCalle Mayorを西へ徒歩約10分。ソフィア王妃を20:30に出てからタクシーまたはMetro（Atocha→Ópera）で向かい、21:00着。", alternatives: ["Ópera Victoria（Plaza de Isabel II・ホテルから徒歩1分・地中海料理）", "Ópera周辺で当日営業の店"] }
    ],
    d1231: [
      { period: "朝", area: "Room Mate Mario館内", primary: "ホテルのビュッフェ朝食", dishes: ["ビュッフェの主食", "果物", "飲み物"], booking: "宿泊に含まれる", operation: "07:00–12:00。Pradoへ向かうため09:00までに終える", alternatives: ["前夜に用意した朝食", "Pradoへ向かう途中の営業中カフェ"] },
      { period: "昼", area: "Calle de Cuchilleros 17・王宮から徒歩8分", primary: "Botín（14:15昼食）", dishes: ["子豚の丸焼き", "前菜", "飲み物"], booking: "12/1までに14:15で3名予約・12/31営業確認", operation: "1725年創業。王宮から徒歩8分。15:30までに退店する", alternatives: ["Bodega de los Secretos", "王宮周辺の営業確認済み店"] },
      { area: "Carrera de San Jerónimo 8・Solから徒歩2分", primary: "Lhardyで年越しディナー", dishes: ["年越しコース3人分", "温かい主菜", "飲み物"], booking: "11月の受付開始と同時に3名で予約（期限11/15）", operation: "1839年創業の老舗。ディナーの開始時刻はLhardyの年越し営業に合わせて予約時に確定し、21:45退店、22:00までにSolへ入る", alternatives: ["Sol徒歩10分圏で年越しメニューを出す店", "持帰り"] }
    ],
    d0101: [
      { period: "朝", area: "Room Mate Mario館内", primary: "ホテルのビュッフェ朝食", dishes: ["ビュッフェの主食", "果物", "飲み物"], booking: "宿泊に含まれる", operation: "通常07:00–12:00だが元日の提供は未確認。チェックイン時に確認", alternatives: ["12/31に用意した3人分の朝食", "元日営業を確認できた近隣店"] },
      { period: "軽食", area: "Centro・San Ginés", primary: "Chocolatería San Ginés本店", dishes: ["chocolate con churros"], booking: "年末年始は予約不可", operation: "公式は通年24時間営業。元日は行列前提", alternatives: ["持帰り", "Plaza Mayor周辺の営業中カフェ"] },
      { period: "昼", area: "Botoneras 6・Plaza Mayor横", primary: "La Campana", dishes: ["bocadillo de calamares", "tortilla", "飲み物"], booking: "予約不要・1/1営業を12/1までに確認", operation: "13:00入店。休業ならマヨール広場周辺の営業店でカラマレスを選ぶ", alternatives: ["マヨール広場周辺でカラマレスを出す営業店", "同街区の営業中バル"] },
      { area: "Plaza de San Miguel・ホテルから徒歩5分", primary: "Mercado de San Miguel", dishes: ["タパス3種", "魚介の小皿", "飲み物"], booking: "予約不要・1/1営業を12/1までに確認", operation: "20:00入店。通常10:00–24:00だが元日営業を事前確認する", alternatives: ["ホテル周辺の営業中タパス店", "持帰り"] }
    ],
    d0102: [
      { period: "朝", area: "Madrid Atochaへの移動中または列車内", primary: "前夜に確保した持帰り朝食", dishes: ["主食3人分", "飲み物3本"], booking: "1/1のうちに購入", operation: "06:45出発でホテル朝食の07:00開始前。移動中または車内で食べる", alternatives: ["Atochaで営業中の持帰り店", "前夜に追加で確保した携帯食"] },
      { area: "Cordoba旧市街・Mezquitaから徒歩圏", primary: "Taberna Salinas", dishes: ["salmorejo", "flamenquín", "rabo de toro", "berenjenas con miel"], booking: "旅行前に電話で営業確認、12:45–13:00入店", operation: "土曜通常12:30–16:00。14:30退店を守り、2027/1/2の営業は旅行7日前に確認", alternatives: ["Taberna Casa Pepe Salinas（Puerta de Almodóvar 2）", "第一候補と代替店が休業なら、Mezquitaから駅方向で4品中3品以上を出す営業中のtaberna"] }
      ,{ period: "夜", area: "Cava Baja 35・ホテルから徒歩15分", primary: "Casa Lucio", dishes: ["ウエボス・ロトス", "jamón", "飲み物"], booking: "12/1までに20:30で3名予約", operation: "Cordobaから19:15帰着後、ホテルで着替えて徒歩で向かう", alternatives: ["Cava Bajaの営業中店でウエボス・ロトス", "ホテル周辺の予約済み店"] }
    ],
    d0103: [
      { period: "朝", area: "Room Mate Mario館内", primary: "ホテルのビュッフェ朝食", dishes: ["ビュッフェの主食", "果物", "飲み物"], booking: "宿泊に含まれる", operation: "08:30に食べ、09:30までにEl Rastroへ向かう", alternatives: ["ホテル近隣の営業中カフェ", "前夜に用意した朝食"] },
      { period: "昼", area: "Calle de la Bola 5・ホテルから徒歩3分", primary: "La Bola", dishes: ["コシード・マドリレーニョ", "スープ", "肉と野菜"], booking: "12/1までに13:30で3名予約", operation: "日曜は昼のみ13:30–16:00。15:15退店後、15:30に荷物を回収する", alternatives: ["Centroでコシードを出す予約済み店", "ホテル周辺の営業中Madrid料理店"] },
      { area: "Madrid Atochaで乗車前に購入し、Barcelona到着後に食べる", primary: "Enrique Tomás Estación Atochaで持帰り夕食を確保", dishes: ["jamónのbocadillo 3個", "飲料3本"], booking: "予約不要。列車乗車前に購入", operation: "Atocha店舗は公式に概ね21:30まで。Sants Kioskoの営業時間には依存しない", alternatives: ["AtochaのRodillaで3人分を購入", "Madrid市内で常温保存できる3人分を先に購入"] }
    ],
    d0104: [
      { period: "朝", area: "B&B HOTEL Barcelona Viladecans館内", primary: "ホテルのコンチネンタルブレックファスト", dishes: ["パンなどの主食", "果物", "飲み物"], booking: "宿泊に含まれる", operation: "06:00–10:00。06:40までに終えて07:00頃のタクシーに乗る", alternatives: ["前夜に用意した朝食", "BCN T1保安検査後の営業中店舗"] },
      { period: "予備朝食", area: "BCN T1・保安検査後 Boarding Area B", primary: "Coffee & Fresh Food", dishes: ["sandwich", "果物", "café", "水"], booking: "不要", operation: "ホテル朝食を取れなかった場合のみ。搭乗口がArea B以外なら同一動線上の営業店へ変更", alternatives: ["FOODIES' A21–A22（06:00から）", "前夜購入・機内食"] }
    ],
    d0105: [
      { area: "PVG T2・国際線乗継の実際に利用できる制限区域", primary: "D71–D75付近の点心店（同じ制限区域から到達できる場合）", dishes: ["点心を3人分", "温かい飲み物3杯", "水3本"], booking: "不要。乗継係員に到達可否を確認", operation: "空港公式掲載は概ね07:00–22:00。国際線同士の実経路はAir China確認待ちで、入国や区域移動を前提にしない", alternatives: ["現在の搭乗口と同じ制限区域の営業中店舗", "機内食・出発前に用意した携帯食"] },
      { area: "PVG T2・搭乗口と同じ制限区域", primary: "13:30までに営業中店舗を係員案内で選ぶ", dishes: ["温かい麺またはご飯を3人分", "水3本"], booking: "不要。搭乗口と再検査位置を先に確認", operation: "14:25便の移動時間を残す。ラウンジ、入国、別ゲート区域への移動を仮定しない", alternatives: ["同じ制限区域内売店の持帰り", "次の機内食までの携帯食"] }
    ]
  };
  const travelMealFallbacks = {
    d0104: [{ period: "朝", window: "08:00–09:30", area: "BCN T1・保安検査後", nearby: "搭乗口へ向かう途中", purpose: "搭乗開始を守りながら朝食を確保", primary: "T1保安検査後・搭乗口動線上の営業中カフェ", dishes: ["bocadillo", "水"], booking: "不要", operation: "搭乗口確定後に選ぶ", alternatives: ["前夜購入", "機内食"] }],
    d0105: [{ period: "朝・昼", window: "06:00–13:30", area: "PVG T2・国際線乗継", nearby: "乗継手続後の制限区域", purpose: "入国を仮定せず、長時間乗継の間に2回食事を取る", primary: "搭乗口に近い制限区域内の営業中店舗", dishes: ["温かい食事", "水"], booking: "不要", operation: "航空会社の案内と当日の乗継導線に従う", alternatives: ["利用条件を満たすラウンジ", "機内食・携帯食"] }]
  };

  const flexItem = (time, end, kind, title, note) => ({ time, end, kind, title, status: "当日確認", note });
  const flexMeals = {
    breakfast: { period: "朝", area: "Oriente Atiram Hotel館内", primary: "ホテルのビュッフェ朝食", dishes: ["ビュッフェの主食", "果物", "飲み物"], booking: "宿泊に含まれる", operation: "開始時刻は未確認。出発に間に合わなければ早朝サービスと前夜の買い置きへ", alternatives: ["早朝のコーヒー・紅茶サービス", "前夜に用意した3人分の朝食"] },
    montserrat: { period: "昼", area: "Montserrat山上", primary: "La Cafeteria", dishes: ["温かいCatalunya料理", "bocadillo", "matóと蜂蜜"], booking: "予約不要・当日の営業を確認", operation: "混雑時は持参した軽食を先に食べ、帰路を遅らせない", alternatives: ["Montserrat Buffet", "前夜に用意したbocadilloと水"] },
    citySunday: { period: "昼", area: "Gràcia地区", primary: "La Pubillaを営業確認", dishes: ["季節のCatalunya料理", "野菜料理", "米料理"], booking: "日曜営業と空席を事前確認", operation: "14:45入店を守り、カサ・ミラとホテル休憩を遅らせない", alternatives: ["Gràciaで同じ注文ができる営業店", "Park Güell周辺の予約済み店"] },
    cityWeekday: { period: "昼", area: "Gràcia地区", primary: "La Pubilla", dishes: ["季節のCatalunya料理", "野菜料理", "米料理"], booking: "13:15の3名席を予約", operation: "14:45までに退店し、カサ・ミラへ向かう", alternatives: ["Gràciaで同じ注文ができる営業店", "Park Güell周辺の予約済み店"] },
    tarragona: { period: "昼", area: "Tarragona Part Alta", primary: "カルソッツとロメスコを出す店", dishes: ["calçots", "romesco", "肉料理または魚介"], booking: "12/29昼の提供と3名席を事前確認", operation: "11月〜4月の季節料理を本場VallsのあるTarragona県で味わう", alternatives: ["El Llagut（romescoと魚介）", "Part Altaでromescoを出す営業店"] },
    dinner: { period: "夜", area: "Passeig d'Isabel II 14", primary: "7 Portes", dishes: ["パエリア", "魚介料理", "Catalunya料理の前菜"], booking: "12/1までに20:00で3名予約", operation: "1836年創業・年中無休。Montserratから戻って休憩後に向かう", alternatives: ["Can Solé（日曜夜の営業確認時）", "Barcelonetaの営業確認済み店"] },
    cityDinner: { period: "夜", area: "Carrer de Mallorca 236・カサ・ミラから徒歩5分", primary: "Cerveseria Catalana", dishes: ["タパス", "魚介の小皿", "肉料理の小皿"], booking: "予約不可・並んで入る", operation: "毎日営業。20:00入店を目標に待ち10〜45分を見込む", alternatives: ["同じ街区の営業中タパス店", "ホテル近くの営業中タパス店"] },
    tablaoDinner: { period: "夜", area: "La Rambla 35・Oriente Atiram Hotelから徒歩1〜2分", primary: "Tablao Cordobésのディナー付き21:00公演", dishes: ["ディナーメニュー3人分", "ビール・ワイン・サングリア・ソフトドリンク飲み放題", "ショー中のドリンク1杯"], booking: "2026/12/01までに3名で予約", operation: "ディナーは19:45開始を計画。開始時刻は公演の約1時間半前が目安で予約時に確定する。ビーガン・ベジタリアン・ハラル・グルテンフリーに対応", alternatives: ["Palau Dalmases（Born・12世紀の邸宅・€30〜）", "Los Tarantos（Plaça Reial・1963年創業・40分・€25〜）"], experience: "ホテルの隣でディナーと、2025年に世界最高のタブラオに選ばれた舞台を続けて楽しめます。", orderForThree: "ディナー付き21:00公演を3名分予約し、食事制限があれば予約時に伝えます。ディナー中の飲み放題とショー中のドリンク1杯が含まれます。" }
  };
  const montserratDay = (dayId) => ({
    title: "Montserrat日帰り（朝に最終判断）", city: "Montserrat", cityIds: ["montserrat", "barcelona"],
    items: [
      flexItem("07:30", "08:00", "rest", "Montserratへ行くか最終判断", "視界・風・FGCと山上交通の運行、3人の体調を確認する。条件が悪ければ、この日の全行程を予約不要のBarcelona市内案へ切り替える。"),
      flexItem("07:45", "08:30", "meal", "ホテルのビュッフェ朝食", "08:30出発。開始時刻が間に合わなければ早朝サービスと前夜の買い置きへ切り替える。"),
      flexItem("08:30", "10:20", "transfer", "ホテル → Plaça Espanya → Montserrat", "徒歩とMetro L3でPlaça Espanyaへ行き、FGC R5とAeriまたはCremalleraの有効な乗車券を購入する。運行表示を確認して山上へ向かう。"),
      flexItem("10:20", "12:45", "attraction", "Montserrat修道院主要部と展望", "修道院主要部と景観を歩く。日時指定が必要な追加体験には頼らず、混雑時は外観と展望を優先する。"),
      flexItem("12:45", "13:45", "meal", "La Cafeteriaで昼食", "山上の営業状況を確認し、混雑時は持参食へ切り替える。"),
      flexItem("13:45", "14:45", "attraction", "Sant Joan funicularで展望台へ", "10:00〜・12〜15分間隔・冬季は17:00前後まで。下山のAeri／Cremalleraの最終に間に合うよう15:30までに山頂を出る。運休なら山上の短い散策へ切り替える。"),
      flexItem("14:45", "15:30", "attraction", "山上の短い散策", "風と帰路を見ながら歩ける範囲だけ楽しむ。運行悪化の兆候があればすぐ下山する。"),
      flexItem("15:30", "17:30", "transfer", "Montserrat → Plaça Espanya → ホテル", "AeriまたはCremalleraとFGC R5で戻る。有効な乗車券と発車表示を確認し、一本後にも対応できる余裕を残す。"),
      flexItem("17:30", "19:30", "hotel", "ホテルで休憩", "入浴と休憩を優先し、夕食へ出る体力がなければ持帰りにする。"),
      flexItem("20:00", "21:30", "meal", "7 Portesでパエリア", "年中無休。12/1までに3名で予約し、満席ならCan Soléを営業確認して代替する。")
    ], mealPlans: [flexMeals.breakfast, flexMeals.montserrat, flexMeals.dinner], dayId
  });
  const cityDay = (dayId, sunday = false) => ({
    title: "ガウディの日", city: "Barcelona", cityIds: ["barcelona"],
    items: [
      flexItem("07:45", "08:30", "meal", "ホテルのビュッフェ朝食", "開始時刻が間に合わなければ早朝サービスと前夜の買い置きへ切り替える。"),
      flexItem(sunday ? "10:30" : "09:00", sunday ? "12:30" : "11:00", "attraction", "サグラダ・ファミリア", sunday ? "11〜2月の日曜は10:30開館。発売後に入場枠を確保する。" : "11〜2月の平日は9:00開館。発売後に入場枠を確保する。"),
      flexItem(sunday ? "12:45" : "11:15", sunday ? "13:15" : "11:45", "transfer", "バス92でグエル公園へ", "運行表示を確認し、グエル公園の予約時刻へ向かう。"),
      flexItem(sunday ? "13:30" : "12:00", sunday ? "14:30" : "13:00", "attraction", "グエル公園", "冬季9:30〜17:30。削減する場合はカサ・バトリョ、次にグエル公園の順。ただし両方を見る前提で組む。"),
      flexItem(sunday ? "14:45" : "13:15", sunday ? "16:15" : "14:45", "meal", "Gràcia地区で昼食", "3人分の具体的な料理と代替候補を食事詳細で確認する。"),
      flexItem(sunday ? "16:30" : "15:00", sunday ? "17:30" : "16:00", "attraction", "カサ・ミラ（屋上と屋根裏）", "屋上の煙突群と屋根裏のカテナリー・アーチを見る。"),
      flexItem(sunday ? "18:00" : "16:30", sunday ? "19:15" : "17:45", "attraction", "カサ・バトリョ（内部）", "毎日9:00–20:00・最終入場19:15。16:30の枠を発売後に確保。"),
      flexItem(sunday ? "19:30" : "18:00", sunday ? "20:15" : "19:30", "hotel", "ホテルで休憩", "夕食前に休憩する。"),
      flexItem(sunday ? "20:30" : "20:00", sunday ? "22:00" : "21:30", "meal", "Cerveseria Catalanaでタパス", "予約不可。カサ・ミラから徒歩5分で、待ち10〜45分を見込む。")
    ], mealPlans: [flexMeals.breakfast, sunday ? flexMeals.citySunday : flexMeals.cityWeekday, flexMeals.cityDinner], dayId
  });
  const tarragonaFullDay = (dayId) => ({
    title: "Tarragona Roman cityを一日歩く", city: "Tarragona", cityIds: ["tarragona", "barcelona"],
    items: [
      flexItem("07:00", "07:40", "meal", "ホテルのビュッフェ朝食", "開始時刻が間に合わなければ早朝サービスと前夜の買い置きへ切り替え、列車を優先する。"),
      flexItem("07:45", "09:45", "transfer", "ホテル → Barcelona Sants → Tarragona市内駅", "SantsからRegional系統でTarragona市内駅へ向かう。公表後の時刻を確認し、有効な乗車券を購入する。Camp de Tarragonaは使わない。"),
      flexItem("09:45", "10:15", "transfer", "Tarragona市内駅 → Roman city core", "徒歩でRambla Novaから中央遺跡群へ向かう。"),
      flexItem("10:15", "13:00", "attraction", "円形闘技場・Circ・旧市街", "火曜の公式開館を当日確認し、中央部を徒歩でつなぐ。閉鎖施設があれば地中海のバルコニーと旧市街外観へ切り替える。"),
      flexItem("13:15", "14:30", "meal", "El Llagutを当日確認", "空席がなければ徒歩10分以内でromescoか魚介の米料理がある営業店を選ぶ。"),
      flexItem("14:30", "16:45", "attraction", "城壁周辺とPart Alta", "中央部のRoman coreと旧市街を続ける。Pont del Diableへは広げず、帰路を守る。"),
      flexItem("16:45", "18:45", "transfer", "Tarragona市内駅 → Barcelona Sants → ホテル", "Regional系統の有効な乗車券と発車表示を確認して戻る。遅延時は観光を削り、帰路を優先する。"),
      flexItem("18:45", "20:00", "hotel", "ホテルで休憩", "足を休め、遅延時は夕食を持帰りへ変える。"),
      flexItem("20:00", "21:15", "meal", "7 Portesでパエリア（代替 Can Solé）", "7 Portesを第一候補にし、満席ならCan Soléへ切り替える。")
    ], mealPlans: [flexMeals.breakfast, flexMeals.tarragona, flexMeals.dinner], dayId
  });
  const tarragonaShortDay = (dayId) => ({
    title: "日曜14:30閉館に合わせるTarragona短縮日", city: "Tarragona", cityIds: ["tarragona", "barcelona"],
    items: [
      flexItem("07:00", "07:40", "meal", "ホテルのビュッフェ朝食", "開始時刻が間に合わなければ早朝サービスと前夜の買い置きへ切り替え、列車を優先する。"),
      flexItem("07:15", "09:15", "transfer", "ホテル → Barcelona Sants → Tarragona市内駅", "Regional系統の公表後の時刻を確認し、有効な乗車券を購入する。"),
      flexItem("09:15", "09:30", "transfer", "Tarragona市内駅 → 円形闘技場", "徒歩で中央遺跡群へ直行する。"),
      flexItem("09:30", "12:45", "attraction", "Roman interiorsと旧市街中央部", "MHTは日祝9:30〜14:30。日曜の内部見学を先に行い、すべて14:30までに終える。閉鎖時は外観、地中海のバルコニー、旧市街へ切り替える。"),
      flexItem("12:45", "13:45", "meal", "El Llagutで昼食", "日曜ランチの空席を確認し、満席ならPart Altaの明示した選択ルールで代替する。"),
      flexItem("13:45", "14:30", "attraction", "残りのRoman core", "内部見学は14:30まで。時間がなければ外観だけにして終了する。"),
      flexItem("14:30", "16:00", "attraction", "Rambla Novaと海辺を短く散歩", "予約不要の屋外だけを歩き、疲労や雨なら駅へ直行する。"),
      flexItem("16:00", "18:15", "transfer", "Tarragona市内駅 → Barcelona Sants → ホテル", "Regional系統で戻り、有効な乗車券と発車表示を確認する。"),
      flexItem("18:15", "20:00", "hotel", "ホテルで休憩", "翌日に疲れを残さないよう休む。"),
      flexItem("20:00", "21:15", "meal", "7 Portesでパエリア（代替 Can Solé）", "7 Portesを第一候補にし、満席ならCan Soléへ切り替える。")
    ], mealPlans: [flexMeals.breakfast, flexMeals.tarragona, flexMeals.dinner], dayId
  });
  const flexScenarios = {
    scenario1: { id: "scenario1", name: "シナリオ1（推奨）", summary: "日 Montserrat／月 Barcelona市内／火 Tarragona一日", days: { d1227: montserratDay("d1227"), d1228: cityDay("d1228"), d1229: tarragonaFullDay("d1229") } },
    scenario2: { id: "scenario2", name: "シナリオ2", summary: "日 Barcelona市内／月 Montserrat／火 Tarragona一日", days: { d1227: cityDay("d1227", true), d1228: montserratDay("d1228"), d1229: tarragonaFullDay("d1229") } },
    scenario3: { id: "scenario3", name: "シナリオ3", summary: "日 Tarragona短縮／月 Barcelona市内／火 Montserrat", days: { d1227: tarragonaShortDay("d1227"), d1228: cityDay("d1228"), d1229: montserratDay("d1229") } }
  };
  Object.values(flexScenarios).forEach((scenario) => {
    const day = scenario.days.d1229;
    const rest = [...day.items].reverse().find((item) => ["hotel", "rest"].includes(item.kind));
    const dinner = [...day.items].reverse().find((item) => item.kind === "meal");
    if (rest) Object.assign(rest, { time: "18:30", end: "19:30", title: "ホテルへ戻る・休憩・着替え", note: "タラゴナから戻ったらホテルで休み、徒歩1〜2分の会場へ向かう準備をする。" });
    if (dinner) Object.assign(dinner, {
      time: "19:45", end: "21:00", title: "Tablao Cordobésでディナー",
      note: "La Rambla 35。宿泊ホテル（La Rambla 45）から徒歩1〜2分で、タラゴナから戻ってから移動が要らない。ディナー中はビール・ワイン・サングリア・ソフトドリンクが飲み放題。ビーガン・ベジタリアン・ハラル・グルテンフリーに対応。ディナーの開始時刻は公演の約1時間半前が目安で、予約時に確定する。"
    });
    day.mealPlans[day.mealPlans.length - 1] = flexMeals.tablaoDinner;
    day.items.push(flexItem("21:00", "22:10", "event", "フラメンコ・ショー（Tablao Cordobés）", "1970年創業で2025年の「世界最高のタブラオ」。公演は60〜70分。21:00の回を取る。理由: 17:00にタラゴナを出て18:30に戻る行程に対し、19:15の回では余裕がなく、22:30の回では翌朝が遅れる。12/1までに予約する。年末は席が埋まりやすい。満席・休業ならPalau Dalmases（Born・12世紀の邸宅・€30〜）またはLos Tarantos（Plaça Reial・1963年創業・40分・€25〜）へ切り替える。"));
    day.items.push(flexItem("22:10", "22:20", "transfer", "徒歩でホテルへ戻る", "Tablao Cordobésから宿泊ホテルへ徒歩1〜2分で戻る。"));
  });

  const transportDetails = {
    d1225: {
      "成田空港到着・航空会社／terminal確認": "成田空港T1出発階へ。航空会社カウンター、預け荷物、搭乗口を予約原本と空港表示で照合する。",
      "PVG乗継・保安検査・搭乗口確認": "PVG T2でInternational Transfer表示に従い、乗継保安検査→搭乗口確認。入国や荷物再受取は同一券・through baggage確認後に判断する。"
    },
    d1226: {
      "入国審査・荷物受取・税関": "BCN T1で入国審査→受取レーン→税関の順。3人と荷物が揃ってから到着ロビーへ出る。",
      "BCN空港 → 市内（荷物受取後）": "T1公式タクシー乗り場 → Oriente Atiram Hotel Barcelona（La Rambla 45）。空港から約15km、通常25–40分。",
      "Oriente Atiram Hotelへ荷物預け": "チェックインは14:00から。到着時は荷物のみ預け、貴重品は携行する。",
      "Passeig de Gràcia周辺で休憩・身支度・遅延時の余裕": "客室に入れるのは14:00以降。ここでは店か広場で休む。"
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
      "Sagrada周辺へ移動": "ホテル正面のLiceu（L3）→ Passeig de Gràcia → L2乗換 → Sagrada Família。約20分。タクシーなら約15分。",
      "ホテルへ戻る": "Sagrada Família駅からMetro L5でDiagonal駅へ戻り、仮ホテルへ徒歩。",
      "Barcelona Santsへ移動": "Oriente Atiram Hotelから荷物ごとタクシーで約10–15分（約3.5km）。Liceu（L3）からSants Estacióまで乗換なしでも行けるが、荷物3人分があるためタクシーを優先する。",
      "Barcelona Sants → Madrid Atocha（高速鉄道・計画窓）": "発売後に運行会社・発着時刻・車両・座席を確定し、Santsには発車90分前到着を維持する。",
      "Room Mate Marioへ移動・チェックイン": "Madrid Atocha公式タクシー乗り場→Room Mate Mario（Campomanes 4）へ約10–15分。受付は24:00まで。"
    },
    d0102: {
      "Madrid Atocha到着・乗車準備": "Room Mate MarioからAtochaへタクシー約10–15分。高速鉄道の発車45分前までに駅へ着く。",
      "Madrid → Cordoba（高速鉄道・計画窓）": "07:30前後発・09:30前後着の計画窓。2027年の列車番号・時刻は未公表のため、発売後に往復券と座席を確定する。",
      "Cordoba駅 → Mezquita-Catedral": "Cordoba駅からタクシーを基本とし、Mezquita-Catedralの公式入場時間に合わせる。",
      "Cordoba駅へ移動・乗車余裕": "旧市街からCordoba駅へ戻り、帰路の発車45分前までに到着する。",
      "Cordoba → Madrid（高速鉄道・計画窓）": "17:15前後発・19:15前後着の計画窓。最終便を避け、発売後に実際の時刻へ確定する。"
    },
    d0103: {
      "Madrid Atochaへ移動": "Room Mate Marioで荷物回収後、タクシーでMadrid Atochaへ約10–15分。駅到着後に列車表示とホームを確認する。",
      "Atochaで持帰り夕食を購入": "Madrid Atocha構内で3人分の夕食と飲料を購入し、Barcelona到着後の店の営業には依存しない。",
      "Madrid Atocha → Barcelona Sants（高速鉄道・計画窓）": "発売後に列車番号・時刻・座席を確定し、Atochaの90分前到着は残す。",
      "B&B HOTEL Barcelona Viladecansへ移動・チェックイン": "Barcelona SantsからRodalies R2 SudでViladecansへ約16分、駅からほぼ正面〜徒歩約7分。雨・遅延・疲労時はSantsからタクシー約20–25分。受付終了24:00。"
    },
    d0104: {
      "タクシーでBCN T1へ（本案）": "B&B HOTEL Barcelona Viladecansを07:00前後に出発。前夜にフロントでタクシーを手配し、BCN T1へ約10分、07:40到着を守る。",
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
      "Oriente Atiram Hotelへ荷物預け": "タクシーまたはMetro｜La Rambla 45 → Passeig de Gràcia周辺へ移動",
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
      "ホテル休憩": "徒歩｜Raval周辺で当日営業を確認した夕食へ"
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
      "チェックアウト・荷物回収": "徒歩｜ホテル周辺またはSantsで軽食を確保後、荷物とタクシーへ",
      "ホテル周辺またはSants駅で軽い昼食": "タクシー｜Oriente Atiram Hotel→Barcelona Sants、約10–15分（約3.5km）",
      "駅到着buffer・乗車準備": "駅構内徒歩｜列車表示→改札→指定車両。水と昼食を持ってホームへ",
      "Barcelona Sants → Madrid Atocha（高速鉄道・計画窓）": "タクシー｜Atocha公式乗り場→Room Mate Mario、約10–15分",
      "Room Mate Marioへ移動・チェックイン": "徒歩｜Campomanes 4→Casa Ciriaco、約10分"
    },
    d1231: {
      "マドリード王宮（内部）": "徒歩約20分またはタクシー｜Bodega de los Secretosへ。14:15予約に合わせる",
      "エル・レティーロ公園": "タクシー｜公園→Room Mate Mario、約10–15分",
      "ホテル休憩・防寒準備": "館内｜防寒具と年越し用ぶどうを確認し、19:30に出発",
      "Lhardyで年越しディナー": "徒歩｜Campomanes 4→Carrera de San Jerónimo 8、約12分"
    },
    d0101: {
      "プエルタ・デル・ソル": "徒歩｜Pasadizo de San Ginésへ約5分",
      "チョコラテリア・サン・ヒネス": "徒歩｜Plaza Mayorへ約4分",
      "マヨール広場": "徒歩｜Botoneras 6のLa Campanaへ約2分",
      "元日の昼食": "徒歩｜San Isidro教会へ約10分",
      "サン・イシドロ教会": "徒歩｜Madrid王宮へ約15分",
      "マドリード王宮（外観）": "徒歩｜San Francisco el Grandeへ約12分",
      "サン・フランシスコ・エル・グランデ（外観）": "徒歩またはタクシー｜ホテルへ約20分／車10分",
      "ホテル休憩": "館内｜Debodから徒歩15分で戻り、20:00のSan Miguel市場に備える"
    },
    d0102: {
      "Toledo駅 → 旧市街": "徒歩｜ZocodoverからToledo Cathedralへ約8分",
      "トレド大聖堂": "徒歩｜Santa Fé 5のEl Trébolへ約8分",
      "Toledoで昼食": "徒歩｜Santo Tomé教会へ約15分。坂道込みで余裕を取る",
      "サント・トメ教会": "徒歩｜El Greco Museumへ約5分",
      "エル・グレコ美術館": "徒歩｜Judería周辺のカフェへ5–10分"
    },
    d0103: {
      "Room Mate Marioをチェックアウト・荷物預け": "徒歩約25分、またはMetro（Ópera L2→Sol→L1 Atocha）｜Room Mate Mario→Reina Sofía",
      "ソフィア王妃芸術センター（ゲルニカ／ダリ）": "徒歩｜Atocha駅構内のEnrique Tomásへ約8分",
      "休憩・荷物回収": "タクシー｜Room Mate Mario→Madrid Atocha、約10–15分",
      "Madrid Atocha → Barcelona Sants（高速鉄道・計画窓）": "Rodalies R2 Sud｜Sants→Viladecans約16分。駅からほぼ正面〜徒歩約7分。雨・遅延・疲労時はタクシー",
      "B&B HOTEL Barcelona Viladecansへ移動・チェックイン": "客室｜Atochaで購入済みの夕食を食べ、翌朝のタクシーを確認"
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
    ["Barcelona Sants → Madrid Atocha（高速鉄道・計画窓）", "高速鉄道でBarcelona SantsからMadrid Atochaへ移動する"],
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
    ["Madrid Atocha → Barcelona Sants（高速鉄道・計画窓）", "高速鉄道でMadrid AtochaからBarcelona Santsへ移動する"],
    ["タクシーでBCN T1へ（第一案）", "タクシーでBCN T1へ移動する"],
    ["チェックイン・荷物預け・保安検査・出国", "チェックイン・荷物預け・保安検査・出国手続きを済ませる"],
    ["BCN T1 発", "BCN T1を出発する"],
    ["PVG T2 着", "PVG T2に到着する"],
    ["PVG長時間乗継・食事・休憩", "PVGで食事と休憩をとりながら乗り継ぐ"],
    ["PVG T2 発", "PVG T2を出発する"],
    ["NRT T1 着", "NRT T1に到着する"],
    ["入国・荷物受取・帰宅移動", "入国手続きと荷物受取を済ませ、自宅へ移動する"]
  ]);
  const hasActionEnding = (title) => /(する|済ませる|整える|決める|楽しむ|歩く|見る|戻る|乗り継ぐ|とる|食べる|買う|回収する)$/u.test(String(title || "").replace(/（[^）]+）$/, ""));
  function scheduleActionTitle(value, kind = "") {
    const title = travelerText(value).trim();
    if (!title || hasActionEnding(title)) return title;
    if (actionTitleOverrides.has(title)) return actionTitleOverrides.get(title);
    if (kind === "hotel") {
      const core = title;
      if (/ホテルで休憩/.test(core)) return "ホテルで休憩する";
      if (/チェックアウト.*荷物回収/.test(core)) return `${core.replace(/をチェックアウト.*$/, "")}をチェックアウトして荷物を回収する`;
      if (/移動・チェックイン/.test(core)) return `${core.replace(/へ移動・チェックイン.*$/, "")}へ移動してチェックインする`;
      if (/チェックイン/.test(core)) return `${core.replace(/へチェックイン.*$/, "")}へチェックインする`;
      if (/荷物回収/.test(core)) return `${core.replace(/で荷物回収.*$/, "")}で荷物を回収する`;
      if (/荷物預け/.test(core)) return `${core.replace(/へ荷物預け.*$/, "")}へ荷物を預ける`;
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
    const findCanonical = (dayId, title) => {
      const needle = normalize(title);
      const sameDay = list(trip.scheduleItems).filter((item) => item.dayId === dayId);
      return sameDay.find((item) => normalize(item.title) === needle)
        || sameDay.find((item) => { const candidate = normalize(item.title); return needle.length > 5 && (candidate.includes(needle) || needle.includes(candidate)); })
        || null;
    };
    const applyFinalPlan = (day, base) => {
      const selected = selectedScenario.days[day.id] || finalPlan.days?.[day.id];
      if (!selected?.items?.length) return base;
      let selectedMealIndex = 0;
      const timeline = selected.items.map((item, itemIndex) => {
        const canonical = findCanonical(day.id, item.title);
        const hotel = hotelForItem(day.id, item);
        let title = travelerText(item.title);
        let note = travelerText(item.note);
        let status = travelerStatus(item.status);
        let time = item.time; let end = item.end; let zone = item.zone;
        let detailKey = `planned-${scenarioId}-${day.id}-${itemIndex}`;
        if (item.kind === "meal") detailKey = `meal-${selectedMealIndex++}`;
        if (hotel && item.kind === "hotel") {
          if (/checkout|チェックアウト/i.test(item.title)) title = `${hotel.recommendation}をチェックアウト・荷物回収`;
          else if (/荷物回収/.test(item.title)) title = `${hotel.recommendation}で荷物回収`;
          else if (/最終泊|Viladecans/.test(item.title)) title = `${hotel.recommendation}へチェックイン`;
          else if (/Madridホテル|Room Mate Mario|check-in/i.test(item.title)) title = `${hotel.recommendation}へ移動・チェックイン`;
          else if (/荷物預け/.test(item.title)) title = `${hotel.recommendation}へ荷物預け`;
          status = "予約済み";
          note = `${hotel.address}。チェックイン ${hotel.checkIn}、チェックアウト ${hotel.checkOut}${hotel.checkInDeadline ? `、受付終了 ${hotel.checkInDeadline}` : ""}。`;
          detailKey = `hotel-${hotel.id}`;
        }
        if (hotel && day.id === "d0104" && item.kind === "transfer" && /BCN T1|タクシー/.test(item.title)) note = `${hotel.recommendation}を07:00前後に出発する。前夜にフロントで車を手配し、約10分で07:40までにBCN T1へ着く。`;
        const transportNote = transportDetails[day.id]?.[item.title];
        if (transportNote) note = travelerText(transportNote);
        if (day.id === "d1230" && /Barcelona Sants.*Madrid Atocha/.test(item.title)) {
          title = "Barcelona SantsからMadrid Atochaへ高速鉄道で移動する";
          time = "14:30前後"; end = "18:00前後";
          status = "発売・時刻表公表待ち";
          note = "発売前の目標窓です。列車番号と分単位の時刻は未確定。発売後に実便へ置き換え、Sants到着90分前の余裕は残します。2026/10/01から毎月確認します。";
        }
        if (day.id === "d0103" && /Madrid Atocha.*Barcelona Sants/.test(item.title)) {
          title = "Madrid AtochaからBarcelona Santsへ高速鉄道で移動する";
          time = "17:00前後"; end = "20:30前後";
          status = "発売・時刻表公表待ち";
          note = "発売前の目標窓です。列車番号と分単位の時刻は未確定。発売後に実便へ置き換え、Atocha到着90分前の余裕は残します。2026/10/01から毎月確認します。";
        }
        if (day.id === "d0102" && /Madrid.*Cordoba|Cordoba.*Madrid/.test(item.title)) {
          status = "発売・時刻表公表待ち";
          note = travelerText(transportDetails.d0102[item.title] || item.note);
          if (/Madrid.*Cordoba/.test(item.title)) { time = "07:30前後"; end = "09:30前後"; }
          else { time = "17:15前後"; end = "19:15前後"; }
        }
        if (day.id === "d1230" && item.kind === "meal" && /Casa Ciriaco/.test(item.title)) { time = "21:00"; end = "22:15"; }
        if (day.id === "d0101" && /サン・イシドロ教会/.test(item.title)) { time = "17:00"; end = "17:30"; note = "通常の午後再開後に見学します。元日の特別運用は12/31に公式情報と現地表示で再確認し、開いていなければ外観だけにします。"; }
        if (day.id === "d0101" && item.kind === "rest" && /ホテル休憩/.test(item.title)) { time = "17:45"; end = "19:00"; }
        if (day.id === "d0104" && /PVG T2 着/.test(item.title)) { title = "帰国便でPVG T2に到着する"; note = "Barcelonaから上海へ戻る帰国区間。翌日05:55到着後はInternational Transfer表示へ進みます。"; }
        if (day.id === "d0105" && /PVG T2 発/.test(item.title)) { title = "帰国便でPVG T2を出発し、NRT T1に到着する"; note = "上海から成田へ向かう帰国区間。Barcelona行きの往路情報ではありません。"; }
        if (day.id === "d0105" && /入国・荷物受取・帰宅移動/.test(item.title)) zone = "日本時間";
        title = scheduleActionTitle(title, item.kind);
        if (!detailKey.startsWith("meal-") && !detailKey.startsWith("hotel-")) plannedDetailByKey.set(detailKey, { dayId: day.id, title, kind: item.kind, status, note, time, end, zone, canonical });
        return { time, end, kind: kindText(item.kind), title, zone, status, tone: toneFor(status), note, detail: detailKey, routeAfter: travelerText(connectionPlans[day.id]?.[item.title] || "") };
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
    sagrada: "d1228", "iryo-out": "d1230", "iryo-back": "d0103", montserrat: "d1229",
    mila: "d1228", batllo: "d1228", "palau-musica": "d1230", "sant-joan-funicular": "d1227",
    botin: "d1231", "nye-dinner": "d1231", "casa-lucio": "d0102", "la-bola": "d0103", prado: "d1231", reinasofia: "d1230"
  };
  const selectedCanonicalBudgetIds = new Set(["intl-flight", "sagrada", "iryo-out", "iryo-back", "montserrat", "mila", "batllo", "palau-musica", "sant-joan-funicular", "botin", "nye-dinner", "casa-lucio", "la-bola", "prado", "reinasofia"]);
  const planOnlyAdmissions = {
    d1226: [],
    d1228: [
      { id: "plan:d1228:park-guell", title: "グエル公園", amountEur: 54, category: "観光", basis: "€18×3名" }
    ],
    d1229: [{ id: "plan:d1229:flamenco", title: "Tablao Cordobésのディナー付き公演", amountEur: 177, category: "観光", basis: "Tablao Cordobésのディナー付き公演 €59×3名。夕食込みのため食費には別計上せず、予約後に実額へ更新" }],
    d1230: [{ id: "plan:d1230:palau-guell", title: "グエル邸", amountEur: 36, category: "観光", basis: "€12×3名" }],
    d0102: [
      { id: "plan:d0102:cordoba-rail", title: "Madrid–Cordoba高速鉄道往復", amountEur: 240, category: "交通", basis: "3名分の計画枠・発売後に実額へ更新" },
      { id: "plan:d0102:mezquita", title: "Mezquita-Catedral", amountEur: 45, category: "観光", basis: "2026/4/1以降の一般€15×3名・旅行前に公式枠を確認" },
      { id: "plan:d0102:alcazar", title: "Alcázar de los Reyes Cristianos", amountEur: 18, category: "観光", basis: "3名分の計画枠・旅行日前に再確認" }
    ]
  };
  const mealAllowances = {
    d1225: [0, 0, 60], d1226: [0, 75, 105], d1227: [36, 75, 105], d1228: [36, 75, 105],
    d1229: [36, 75, 177], d1230: [36, 60, 90], d1231: [36, 75, 120], d0101: [36, 75, 105],
    d0102: [36, 75, 105], d0103: [36, 60, 90], d0104: [36, 45, 60], d0105: [30, 45, 90]
  };
  const planTaskOverrides = {
    d1225: [
      ["1", "国際線3区間の予約内容を共有", "予約内容を確認", "便名、ターミナル、預け荷物が最終目的地まで運ばれるか、3人の座席を予約PDFで確認する。", "本人", "出発前"],
      ["2", "PVG乗継の手順を保存", "出発前に確認", "International Transfer、乗継保安検査、搭乗口確認の順を端末へ保存する。", "本人", "出発前"]
    ],
    d1226: [
      ["1", "Can Culleretesを予約・祝日営業確認", "12/1まで", "12/26 20:00、3名で予約し、Sant Esteveの祝日営業を確認する。", "本人", "2026/12/01"],
      ["2", "12/26のアーリーチェックイン可否を問い合わせる", "出発2週間前", "機内2泊で到着するため、14:00より前に入室できるかOriente Atiram Hotelへ確認する。空室次第と理解し、回答を3人で共有できたら終わり。", "本人", "出発2週間前"],
      ["3", "Oriente Atiram Hotelの朝食開始時刻を確認する", "チェックイン時", "08:30出発の日に間に合うかを12/26のチェックイン時に確認し、間に合わなければ前夜の買い置きを決めたら終わり。", "本人", "12/26チェックイン時"],
      ["4", "Barcelonaの地方税17,152円の支払いを共有する", "出発1か月前まで", "予約時に192,227円支払済み。施設で支払う地方税17,152円とMasterCard下4桁8334を3人で共有したら終わり。", "本人", "出発1か月前"],
      ["5", "夜の帰路の決めごとを共有する", "出発前", "ランブラス通り周辺では明るい通りを使う、3人がばらけない、タクシーはホテル前まで乗る、を家族で共有できたら終わり。", "家族", "出発前", [{ label: "外務省｜安全対策基礎データ", href: "https://www.anzen.mofa.go.jp/info/pcsafetymeasure_161.html", checkedAt: "2026-08-23" }]],
      ["6", "EESとETIASの入国条件を確認", "公式発表を定期確認", "EESは2026/04/10から非EU短期滞在者向けに全面運用中。ETIASはQ4 2026予定で開始日未公表のため、EU公式を2026/09/01から毎月、遅くとも2026/12/01に再確認する。", "EU公式発表", "毎月1日・開始ルール判明まで", [
        { label: "EU公式｜EES", href: "https://travel-europe.europa.eu/ees_en", checkedAt: "2026-08-17" },
        { label: "EU公式｜ETIAS", href: "https://travel-europe.europa.eu/etias_en", checkedAt: "2026-08-17" }
      ]]
    ],
    d1227: [
      ["1", "3日間の天候シナリオを決定", "12/26夜に判断", "12/27–29の視界・風・降水と交通運行を比べ、Montserratを日・月・火のどこに置くか決める。", "家族", "12/26 20:00"],
      ["2", "Montserratの朝go/no-go", "当日判断", "視界・風・体力・FGC／山上交通を確認し、悪条件ならBarcelona市内のガウディの日へ切り替える。Aeriは毎年1月に年次整備で運休するため、2026年12月の運行を確認し、Cremallera（Monistrol de Montserrat発）を代替にする。", "家族", "対象日07:45"],
      ["3", "Aeri運行とEscolania年末年始日程を確認", "12/1まで", "Aeriの2026年12月運行とEscolaniaの年末年始日程を確認する。通常は月〜木18:45、日祝12:00と18:45、土曜は歌わない。", "本人", "2026/12/01"],
      ["4", "Sant Joan funicularの冬季運行確認", "12/1まで", "展望台へ向かうケーブルカーの冬季運行時間と料金を確認する。", "本人", "2026/12/01"],
      ["5", "7 Portesを予約", "12/1まで", "12/27 20:00、3名で予約する。", "本人", "2026/12/01"]
    ],
    d1228: [
      ["1", "ガウディの日の入場枠を確保", "発売後に予約", "サグラダ、グエル公園、カサ・ミラ、カサ・バトリョ12/28 16:30の対象日枠を確保する。日曜ならサグラダは10:30以降。", "本人", "発売開始後"],
      ["2", "疲労時の削減順を共有", "旅行前に確認", "カサ・バトリョ、次にグエル公園の順に落とす。ただし両方を見る前提で組む。", "家族", "旅行7日前"]
    ],
    d1229: [
      ["1", "Tarragonaの年末運行を確認", "公表後に確認", "MHTは祝日を除く月曜休館、冬季の火曜は9:00〜20:00と確定済み。12/29のRegional往復時刻と有効な乗車券を公式で確認する。", "本人", "2026年末情報の公表後"],
      ["2", "日曜短縮案の開館を確認", "シナリオ3のみ", "12/27はRoman interiorsを14:30までに終え、中央部だけに縮める。Tarragona市内駅から円形闘技場は海沿いに徒歩8分。Camp de Tarragonaは町から離れバス連絡が必要なので使わない。", "本人", "12/26夜"],
      ["3", "12/29のフラメンコを予約", "12/1まで", "第一候補のTablao Cordobés（La Rambla 35・ホテルから徒歩1〜2分）で、ディナー付き21:00公演を3名で予約する。満席ならPalau DalmasesかLos Tarantosへ切り替える。", "本人", "2026/12/01"]
    ],
    d1230: [
      ["1", "カタルーニャ音楽堂を予約", "発売後すぐ", "12/30 10:00のガイドツアーを3名で予約する。遅れたらグエル邸を落とし、音楽堂は落とさない。", "本人", "発売開始後"],
      ["2", "BarcelonaからMadridの列車を確定", "発売待ち", "14:30前後の便と取消条件を比較し、Santsへ発車90分前に着く予定を守る。", "本人", "発売後"],
      ["3", "12/30 Casa Ciriacoの夕食を予約", "12/1まで", "21:00で3名を予約し、年末営業を確認する。", "本人", "2026/12/01"],
      ["4", "マドリードのベッド構成を確認する", "今すぐ", "Room Mate Marioへ直接確認し、リクエスト扱いのThree single bedsが確保できるか、3名の寝方が確定したら終わり。", "本人", "今すぐ"],
      ["5", "無料キャンセル期限を把握しておく", "出発前に共有", "Barcelona 12/25 14:00、Madrid 12/29 12:00、Viladecans 1/2 18:00。Barcelonaは搭乗後になるため、実質の判断期限を12/25出発前として3人で共有したら終わり。", "家族", "12/25出発前"]
    ],
    d1231: [
      ["1", "Botínを予約・営業確認", "12/1まで", "12/31 14:15、3名で予約し、12/31営業を確認する。", "本人", "2026/12/01"],
      ["2", "Lhardyの年越しディナーを3名で予約（受付開始は11月・期限11/15）", "11/15まで", "11月の受付開始と同時にCarrera de San Jerónimo 8のLhardyを3名で予約し、開始時刻を確定する。", "本人", "2026/11/15"],
      ["3", "Solの当日規制を確認", "当日確認", "18:00に入口、駅閉鎖、天候を確認し、20:30に進むかホテルへ戻るか決める。", "本人", "12/31 18:00"]
    ],
    d0101: [
      ["1", "La CampanaとMercado de San Miguelの元日営業確認", "12/1まで", "両店の1/1営業を確認し、休業時の同街区の代替店を決める。", "本人", "2026/12/01"],
      ["2", "Room Mate Marioの元日朝食を確認する", "チェックイン時", "1/1も朝食を提供するか12/30のチェックイン時に確認し、提供なしの場合の3人分を確保したら終わり。", "本人", "12/30チェックイン時"],
      ["3", "1/2 Cordoba日帰りの朝食を前夜に買っておく", "1/1夕方まで", "06:45出発で07:00のホテル朝食開始前になるため、1/2朝の主食と飲み物を3人分用意したら終わり。", "本人", "1/1夕方まで"]
    ],
    d0102: [
      ["1", "Cordoba往復列車を確定", "発売待ち", "07:30前後発・17:15前後帰路の高速鉄道を比較し、最終便を避けて往復を購入する。", "本人", "発売後"],
      ["2", "Mezquita-Catedralを確認", "旅行前に確認", "1/2の入場時間、公式券、礼拝による変更を公式サイトで確認する。", "本人", "旅行7日前"],
      ["3", "Cordoba実行可否とToledo代替を決定", "旅行前に判断", "鉄道またはMezquita核心が利用できない場合だけToledoへ切り替える。", "家族", "旅行7日前"],
      ["4", "Casa Lucioを予約", "12/1まで", "1/2 20:30、3名で予約する。", "本人", "2026/12/01"],
      ["5", "Taberna Salinasの営業を確認", "旅行前に確認", "13:00入店、3人、4品の提供と1/2営業を確認し、休業なら選択ルールで代替する。", "本人", "旅行7日前"]
    ],
    d0103: [
      ["1", "MadridからBarcelonaの列車を確定", "発売待ち", "17:00前後の便を予約し、Atochaへ発車90分前に着く予定を守る。", "本人", "発売後"],
      ["1b", "La Bolaを予約", "12/1まで", "1/3 13:30、3名でlabola.esから予約する。", "本人", "2026/12/01"],
      ["2", "Viladecansのベッド構成を確認する", "今すぐ", "予約確認書に記載がないためB&B HOTEL Barcelona Viladecansへ確認し、3名の寝方が確定したら終わり。", "本人", "今すぐ"],
      ["3", "Atochaで夕食を購入", "列車に乗る前", "15:30前後にEnrique TomásまたはRodillaで3人分と飲料を購入し、Barcelona到着後の店舗営業時間に依存しない。", "本人", "1/3 乗車前"]
    ],
    d0104: [
      ["1", "帰国便のチェックイン条件を確認", "予約内容を確認", "BCN T1のカウンター、荷物、搭乗開始、座席を予約内容で確認する。", "本人", "出発24時間前"],
      ["2", "1/4のタクシーを前夜にフロントで手配する", "1/3チェックイン時", "ViladecansからBCN T1へ約10分。3人と荷物が乗る07:00前後発の車を手配できたら終わり。", "本人", "1/3チェックイン時"]
    ],
    d0105: [
      ["1", "PVG乗継と搭乗口を確認", "到着後に確認", "乗継保安検査を終え、14:25便の搭乗口と再検査位置を先に確認する。", "本人", "PVG到着後"],
      ["2", "成田からの帰宅方法を共有", "出発前に確認", "到着時刻と荷物受取後の鉄道または迎えを3人で共有する。", "本人", "旅行前"]
    ]
  };
  const mealExperienceRules = [
    [/京成友膳/, "出発前に温かい和食を取り、長いフライトへ落ち着いて切り替える食事です。"],
    [/Seventeen Restaurant/, "到着日の疲れを優先し、ホテル近くでCatalunya・地中海料理をゆっくり味わいます。"],
    [/365 Obrador/, "Barcelonaの日常に近いパンとコーヒーで、観光前の朝を軽快に始めます。"],
    [/Can Culleretes/, "旧市街の伝統料理店で、煮込み、パスタ、デザートまでCatalunyaの家庭料理をまとめて味わいます。"],
    [/ホテル周辺で当日営業/, "宿の近くで当日の営業を確かめ、移動を増やさず温かい料理を取る夕食です。"],
    [/La Pubilla/, "Gràciaの市場前で、その日の季節料理をランチメニューとして楽しみます。"],
    [/El Xampanyet/, "El Bornの活気あるバルで、魚介の小皿とcavaを少しずつ分け合います。"],
    [/Montserrat Buffet/, "山上で温かいCatalunya料理とmatóを取り、午後の下山まで体力を整えます。"],
    [/El Llagut/, "Tarragonaの旧市街でromescoと地中海の魚介を囲み、Roman cityの一日を土地の味につなげます。"],
    [/Taberna Salinas/, "歴史あるtabernaでCordobaの代表4品を少しずつ分け、Andalucíaの味を一度に楽しみます。"],
    [/Can Solé/, "Barcelonetaで魚介の香りが立つ米料理とfideuàを囲む、この日のご褒美になる夕食です。"],
    [/Enrique Tomás/, "駅でjamónの香りを楽しみながら、列車の余裕時間を守って食べられる移動日の一食です。"],
    [/Casa Ciriaco/, "1917年創業の老舗で鶏のペピトリアとcallosを囲み、Madrid到着日の夜を街の食文化につなげます。"],
    [/Bodega de los Secretos/, "地下空間の雰囲気と温かい主菜を楽しみ、大晦日の長い一日に備える昼食です。"],
    [/前夜に確保した持帰り朝食/, "早朝出発でも列車を守れるよう、前夜に揃えた朝食を移動中または車内で食べます。"],
    [/Enrique Tomás Estación Atochaで持帰り夕食を確保/, "Madrid出発前にAtochaで夕食を揃え、Barcelona到着後は店の営業に依存せず休めます。"],
    [/San Ginés/, "元日のMadridで、熱いchocolateにchurrosを浸して食べる定番の甘い体験です。"],
    [/La Campana/, "Plaza Mayor横で揚げたてのイカをパンに挟む、Madridらしい気軽な昼食です。"],
    [/El Trébol/, "Toledoの坂歩きの途中で、地元の煮込みcarcamusasと名物のBombaを味わいます。"],
    [/Coffee & Fresh Food/, "搭乗口を確認した後、明るい空港カフェで朝食と水分を確保します。"],
    [/搭乗口に近い|制限区域内/, "長い乗継の途中で温かい食事を取り、次の便まで体調を整えます。"]
  ];
  const mealOrderRules = [
    [/京成友膳/, "和定食を2人前、うどんを1人前。3人で味を分け、水を3本確保します。"],
    [/Seventeen Restaurant/, "tortillaを1皿、地中海料理の主菜を2皿、パンを1皿。3人でシェアします。"],
    [/365 Obrador/, "bocadilloを2個、クロワッサンを1個、caféを3杯。水は1人1本を目安にします。"],
    [/Can Culleretes/, "escudellaを1皿、canelonsを2皿、crema catalanaを1皿。3人で取り分けます。"],
    [/ホテル周辺で当日営業/, "軽い主菜を2皿、スープを1皿、パンを1皿。足りなければ主菜を1皿追加します。"],
    [/La Pubilla/, "ランチメニューを3人分。異なる主菜を選び、少しずつ交換して味わいます。"],
    [/El Xampanyet/, "anchoaを1皿、conservasを2皿、温かい小皿を1皿、cavaを各1杯。パンも1皿頼みます。"],
    [/Montserrat Buffet/, "ビュッフェを3人分。温かい主菜を各1皿取り、mató・蜂蜜は1皿をシェアします。"],
    [/El Llagut/, "romescoを使う魚介を1皿、魚介の米料理を2人前、季節の前菜を1皿。3人で取り分けます。"],
    [/Taberna Salinas/, "salmorejo、flamenquín、rabo de toro、berenjenas con mielを各1皿。パンと水を加えて3人でシェアします。"],
    [/Can Solé/, "fideuàまたは魚介の米料理を2人前、魚介の前菜を1皿。3人で取り分けます。"],
    [/Enrique Tomás/, "jamónのbocadilloを2個、tortillaを1個、水を3本。列車内でも分けやすい形にします。"],
    [/Casa Ciriaco/, "callosを1皿、gallina en pepitoriaを2皿、パンと飲み物。3人でMadridの味を分け合います。"],
    [/Bodega de los Secretos/, "ランチの主菜を3人分。異なる料理を選び、前菜を1皿追加してシェアします。"],
    [/前夜に確保した持帰り朝食/, "主食を3人分、水を3本、果物または甘味を1つずつ用意します。"],
    [/Enrique Tomás Estación Atochaで持帰り夕食を確保/, "jamónのbocadilloを3個、飲料を3本。列車内や到着後に分けやすい形にします。"],
    [/San Ginés/, "churrosを6本前後、chocolateを3杯。まず2本ずつ食べ、足りなければ追加します。"],
    [/La Campana/, "bocadillo de calamaresを2個、tortillaを1皿。3人で半分ずつ交換します。"],
    [/El Trébol/, "carcamusasを1皿、Bomba Trébolを2個、パンまたはpulgaを1つ。3人で取り分けます。"],
    [/Coffee & Fresh Food/, "sandwichを2個、果物を1つ、caféを3杯、水を3本。搭乗前に食べ切れる量にします。"],
    [/搭乗口に近い.*朝食|制限区域内.*朝食/, "温かい朝食を3人分、水を3本。食べ慣れた料理を選び、搭乗前に食べ切ります。"],
    [/搭乗口に近い.*昼食|制限区域内/, "温かい麺またはご飯を3人分、水を3本。13:30までに食べ終えます。"]
  ];
  function firstRuleValue(rules, value) { return rules.find(([pattern]) => pattern.test(String(value || "")))?.[1] || ""; }
  const mealEvidenceRules = [
    [/El Llagut/, { min: 60, max: 85, basis: "公式現行menu：romesco系前菜€13＋米・fideus 2人前€34–52＋パン€3.60。水・飲み物と価格変動を加えた3人分。", sourceUrl: "https://www.elllagut.com/la-carta/", sourceLabel: "El Llagut公式menu", sourceScope: "料理名、税込価格、パン代、最低2人注文の条件" }],
    [/Casa Ciriaco/, { min: 80, max: 105, basis: "callos 1皿＋gallina en pepitoria 2皿＋パンと飲み物の3人分計画枠。公式menuが未確認のため予約時に料理と価格を確認する。", sourceUrl: "", sourceLabel: "計画枠", sourceScope: "公式menu未確認。予約時に料理・価格・年末営業を確認" }],
    [/Bodega de los Secretos/, { min: 95, max: 130, basis: "公式現行menu：主菜3皿€66–99＋前菜€18–25＋パン3人€7.50。飲み物を含む3人分。", sourceUrl: "https://bodegadelossecretos.com/en/carta/", sourceLabel: "Bodega de los Secretos公式menu", sourceScope: "料理・パンの税込価格と12/31昼営業" }],
    [/Can Solé/, { min: 85, max: 125, basis: "公式menuの魚介前菜と米・fideuàを2人前頼む3人分の範囲。年末の料理と価格は予約時に再確認。", sourceUrl: "https://restaurantcansole.com/carta/", sourceLabel: "Can Solé公式menu", sourceScope: "魚介料理・米料理・fideuàの掲載価格" }],
    [/Can Culleretes/, { min: 45, max: 70, basis: "公式menu掲載のescudella・canelons・crema catalanaを基準に、店内価格差と飲み物を加えた3人分。", sourceUrl: "https://culleretes.com/carta-i-menus/", sourceLabel: "Can Culleretes公式menu", sourceScope: "Catalunya料理の提供内容。店内価格は利用前に再確認" }],
    [/Taberna Salinas/, { min: 55, max: 80, basis: "公式menu掲載のsalmorejo・flamenquín・rabo de toro・berenjenasを各1皿共有する3人分。価格非掲載のため余裕を持つ計画枠。", sourceUrl: "https://www.tabernasalinas.com/la-carta/", sourceLabel: "Taberna Salinas公式menu", sourceScope: "4品の提供、通常営業時間、住所。価格は利用前に確認" }],
    [/San Ginés/, { min: 18, max: 30, basis: "chocolate 3杯とchurros約6本を頼む3人分の計画枠。元日は行列と追加注文を見込む。", sourceUrl: "https://chocolateriasangines.com/", sourceLabel: "Chocolatería San Ginés公式", sourceScope: "本店の通年営業とChristmas期間の予約条件。価格は現地確認" }],
    [/La Campana/, { min: 20, max: 35, basis: "bocadillo de calamares 2個＋tortilla 1皿＋飲み物を3人で分ける計画枠。", sourceUrl: "https://www.esmadrid.com/restaurantes/la-campana", sourceLabel: "Madrid公式観光案内", sourceScope: "店舗、名物、通常営業時間。元日営業と価格は直前確認" }],
    [/La Cafeteria/, { min: 45, max: 70, basis: "山上で温かい料理またはbocadilloを3人分＋matóを共有する計画枠。混雑時は持参食へ切替。", sourceUrl: "https://www.montserratvisita.com/en/practical-information/opening-hours", sourceLabel: "Montserrat公式", sourceScope: "La Cafeteriaの通常営業時間。料理と価格は当日確認" }],
    [/京成友膳/, { min: 40, max: 55, basis: "和定食2人前＋うどん1人前＋水を3人分。空港店の価格変動を含む計画枠。", sourceUrl: "https://www.narita-airport.jp/ja/shop/shop-search/t1cb04_t0009k/", sourceLabel: "成田空港公式店舗案内", sourceScope: "場所と通常営業時間。料理価格は入店時確認" }],
    [/365 Obrador/, { min: 25, max: 38, basis: "bocadillo 2個＋croissant 1個＋coffee 3杯＋水の3人分計画枠。", sourceUrl: "https://365obrador.com/", sourceLabel: "365 Obrador公式", sourceScope: "店舗・商品構成。対象店の年末営業時間と価格は直前確認" }],
    [/Cuines Santa Caterina/, { min: 65, max: 95, basis: "魚料理・季節野菜・パンを3人で共有する計画枠。menuは季節で変わるため、当日価格を見て選ぶ。", sourceUrl: "https://grupotragaluz.com/restaurantes/cuines-santa-caterina/", sourceLabel: "Cuines Santa Caterina公式", sourceScope: "店舗・料理構成・予約案内。価格は当日menuで確認" }],
    [/El Xampanyet/, { min: 55, max: 80, basis: "anchoa 1皿＋conservas 2皿＋温菜1皿＋cava 3杯の3人分計画枠。", sourceUrl: "https://www.elxampanyet.es/", sourceLabel: "El Xampanyet公式", sourceScope: "店舗情報。年末営業時間と価格は直前確認" }],
    [/Seventeen Restaurant/, { min: 70, max: 100, basis: "tortilla 1皿＋主菜2皿＋パンと飲み物を3人で共有する到着日用の計画枠。", sourceUrl: "https://www.oliviabalmeshotel.com/gastronomia/", sourceLabel: "Olivia Balmes公式｜Seventeen", sourceScope: "料理提供時間とrestaurant情報。年末時間と価格は利用前に再確認" }],
    [/ホテル周辺で当日営業/, { min: 70, max: 105, basis: "軽い主菜2皿＋スープ1皿＋パンと飲み物、必要なら主菜1皿追加する3人分。", sourceUrl: "", sourceLabel: "当日選択の計画枠", sourceScope: "店・営業・価格を当日確認" }],
    [/前夜に確保した持帰り朝食/, { min: 20, max: 35, basis: "持ち運べる主食3人分＋水＋果物または甘味の計画枠。", sourceUrl: "", sourceLabel: "計画枠", sourceScope: "1/1の購入時に商品・価格・保存条件を確認" }],
    [/Enrique Tomás Estación Atochaで持帰り夕食を確保/, { min: 25, max: 45, basis: "jamónのbocadillo 3個＋飲料3本の3人分計画枠。", sourceUrl: "https://www.enriquetomas.com/", sourceLabel: "Enrique Tomás公式", sourceScope: "商品構成。Atocha店舗の営業時間と価格は直前確認" }],
    [/Enrique Tomás/, { min: 25, max: 45, basis: "jamónのbocadillo 2個＋tortilla 1個＋水3本の3人分計画枠。", sourceUrl: "https://www.enriquetomas.com/", sourceLabel: "Enrique Tomás公式", sourceScope: "商品構成。駅店舗の営業時間と価格は直前確認" }],
    [/Coffee & Fresh Food|FOODIES/, { min: 40, max: 60, basis: "sandwich 2個＋果物＋coffee 3杯＋水3本の空港内3人分計画枠。", sourceUrl: "https://www.aena.es/en/josep-tarradellas-barcelona-el-prat/airport-services/shops-and-restaurants.html", sourceLabel: "Aena公式店舗案内", sourceScope: "保安検査後の店舗・通常営業時間。搭乗口と価格は当日確認" }],
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
    if (/Barcelona|Catalunya|Rambla|Raval|ゴシック地区|Oriente Atiram|Còrsega|Balmes|Gràcia|El Born|Barceloneta|Montserrat|Sants|Santa Caterina|Granja Viader|7 Portes|Cerveseria Catalana|El Quim/i.test(`${meal.area} ${meal.primary}`)) return { image: "assets/barcelona-hero-v1.png", imageAlt: "BarcelonaとCatalunyaの街のイメージ", imageKind: "街のイメージ・AI生成" };
    if (/Madrid|Atocha|Cordoba|Toledo|Salinas|Mezquita|Sol|San Ginés|Plaza Mayor|Las Letras|Paseo del Arte|San Blas|Room Mate|La Campana|Botoneras|Casa Ciriaco|Calle Mayor|Botín|Mercado de San Miguel|Casa Lucio|La Bola/i.test(`${meal.area} ${meal.primary}`)) return { image: "assets/madrid-hero-v1.png", imageAlt: "Madridと内陸・Andalucíaの街のイメージ", imageKind: "街のイメージ・AI生成" };
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
      checkedAt: "2026-08-17",
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
      })).filter((line) => line.amountEur > 0 && !(/ホテルの(ビュッフェ朝食|コンチネンタルブレックファスト)/.test(line.title)) && !/予備朝食|Tablao Cordobésのディナー付き21:00公演/.test(line.title));
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
    hotelStays.forEach((stay) => {
      const amountEur = stay.amount.currency === "JPY" ? stay.amount.total / eurRate : stay.amount.total;
      const paymentText = stay.payment.state === "paid" ? "支払済み" : stay.payment.state === "payAtProperty" ? "全額現地払い" : "一部支払済み";
      tripWide.push({
        id: `hotel:${stay.id}`, title: `${stay.stay}・${stay.recommendation}`, amountEur, amountOriginal: stay.amount.total, currency: stay.amount.currency,
        category: "宿泊", basis: `予約済み（${stay.bookedAt}）・${paymentText}${stay.amount.taxAtProperty ? `・施設払い分 ${stay.amount.currency} ${stay.amount.taxAtProperty.toLocaleString("ja-JP")} を含む` : ""}`
      });
    });
    const allLines = [...days.flatMap((day) => day.lines), ...tripWide];
    const categories = ["食事", "交通", "観光", "宿泊", "買い物", "雑費", "その他"].map((category) => ({ category, amountEur: allLines.filter((line) => line.category === category).reduce((sum, line) => sum + line.amountEur, 0) })).filter((row) => row.amountEur > 0);
    const totalEur = allLines.reduce((sum, line) => sum + line.amountEur, 0);
    const totalJpy = Math.round(totalEur * eurRate);
    return { days, tripWide, categories, totalEur, totalJpy, missing, assumptions: `国際線は3名のeチケット控えで確認した発券済み総額です。宿泊は予約済み3件で、Barcelona前半はJPY 209,379（JPY 192,227支払済み、地方税JPY 17,152は施設払い）、MadridはJPY 199,867（支払済み）、ViladecansはJPY 24,890（JPY 24,339支払済み、地方税JPY 551は施設払い）です。円を集計軸にし、EUR建てだけ€1=¥${eurRate.toLocaleString("ja-JP")}でレート換算しています。ホテル泊の朝食は宿泊費に含まれるため、12/27・12/28・12/29・12/30・12/31・1/1・1/3・1/4の日別食費から外しました。12/25・12/26・1/2・1/5はホテル朝食で賄えないため残しています。食費は店ごとの3人分の注文内容を優先し、店が決まっていない食事だけ範囲付き計画枠にしています。` };
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
  const uniqueSources = (sources) => sources.filter((source, index, all) => source && index === all.findIndex((candidate) => `${candidate.label}|${candidate.href}` === `${source.label}|${source.href}`));
  function canonicalPresentation(item) {
    if (!item) return { facts: [], links: [], sources: [], needsOperationalSource: false };
    const place = placeById.get(item.placeId);
    const booking = bookingById.get(item.bookingId);
    const article = articleById.get(item.articleId || list(place?.articleIds)[0]);
    const sourceIds = [...new Set([...list(place?.visitInfo?.sourceIds), ...list(booking?.sourceIds)])];
    const sources = sourceIds.map((sourceId) => sourceById.get(sourceId)).filter(Boolean).map((source) => ({ label: source.title || source.label || source.id, href: source.url || source.href || "", checkedAt: source.checkedAt || place?.visitInfo?.checkedAt || "再確認待ち", scope: source.scope || source.whatWasChecked || "" }));
    const isTransit = ["transfer", "transport", "flight", "airport", "station", "train"].includes(item.kind) || /乗継|保安検査|搭乗口|空港|駅/.test(item.title);
    const facts = [];
    if (booking) facts.push(["予約", `${booking.title}：${statusText(booking.status)}`]);
    if (!isTransit && place?.visitInfo) facts.push(["訪問条件", place.visitInfo.recheckRequired ? "旅行前に公式情報を再確認" : statusText(place.visitInfo.status)]);
    if (!isTransit && place?.address) facts.push(["住所", place.address]);
    const links = [{ label: "詳しく学ぶ", href: article ? `ux-v1-learn.html?id=${encodeURIComponent(article.id)}` : "" }, { label: "公式情報", href: place?.officialUrl || booking?.actionUrl || "" }, { label: "地図", href: place?.mapUrl || "" }].filter((link) => link.href);
    return { facts, links, sources, needsOperationalSource: Boolean(isTransit || booking || place?.visitInfo || place?.officialUrl) };
  }
  function plannedSourcesFor(item) {
    const checkedAt = "2026-08-17";
    const privateTicket = { label: "発券済みeチケット控え（非公開）", href: "", checkedAt: "2026-08-16", scope: "3名の便・日付・区間を確認。予約番号・航空券番号・旅客情報は公開しません" };
    const renfe = { label: "Renfe公式", href: "https://www.renfe.com/es/en", checkedAt, scope: "高速鉄道・Regionalの発売、運行、利用条件。採用便は発売後に再確認" };
    const rodalies = { label: "Rodalies de Catalunya公式｜時刻表", href: "https://rodalies.gencat.cat/en/horaris/index.html", checkedAt, scope: "Barcelona–Tarragona間のRegional系統。2026年末ダイヤは公表後に確認" };
    const shanghaiAirport = { label: "上海空港公式｜PVG T2 D71–D75", href: "https://www.shairport.com/pudongairport1019/info_itemid_5106.html", checkedAt, scope: "T2国際線D71–D75付近の飲食店案内。実際に到達できる区域かは乗継係員に確認" };
    const airChinaPvg = { label: "Air China公式｜Shanghai Pudong", href: "https://webresource.airchina.com.cn/en-US/content/travel_info/preparing/conditions/destination/china/sha/", checkedAt, scope: "Air China利用時のPVG空港・ターミナル案内" };
    const naritaAirChina = { label: "成田空港公式｜Air China", href: "https://www.narita-airport.jp/en/flight/airline-search/cca/", checkedAt, scope: "Air Chinaの利用ターミナルと空港案内" };
    const naritaFlight = { label: "成田空港公式｜フライト情報", href: "https://www.narita-airport.jp/en/flight/", checkedAt, scope: "成田到着便とターミナルの当日確認" };
    const aenaAirChina = { label: "Aena公式｜Air China", href: "https://www.aena.es/es/josep-tarradellas-barcelona-el-prat/aerolineas/air-china.html", checkedAt, scope: "Barcelona空港でのAir China案内" };
    const aenaArrivals = { label: "Aena公式｜BCN到着", href: "https://www.aena.es/en/josep-tarradellas-barcelona-el-prat/airport-services/categories-and-terminals/arrivals-area.html", checkedAt, scope: "BCN到着後の入国・荷物受取・到着区域" };
    const aenaDepartures = { label: "Aena公式｜BCN出発", href: "https://www.aena.es/en/josep-tarradellas-barcelona-el-prat/airport-services/categories-and-terminals/departures-area.html", checkedAt, scope: "BCN出発時のチェックイン・保安検査・出発区域" };
    if (item.dayId === "d1225" && /成田空港|NRT T1を出発/.test(item.title)) return [privateTicket, naritaAirChina];
    if (item.dayId === "d1225" && /BCN T1に到着/.test(item.title)) return [privateTicket, aenaArrivals, aenaAirChina];
    if (item.dayId === "d1225" && /PVG/.test(item.title)) return [privateTicket, airChinaPvg, shanghaiAirport];
    if (item.dayId === "d1226" && /入国審査|BCN空港/.test(item.title)) return [
      { label: "EU公式｜Entry/Exit System (EES)", href: "https://travel-europe.europa.eu/ees_en", checkedAt, scope: "非EU短期滞在者へのEES全面運用開始日と入国手続" },
      aenaArrivals
    ];
    if (item.dayId === "d1229" && /Tarragona市内駅|Barcelona Sants.*Tarragona|Tarragona.*Barcelona Sants/.test(item.title)) return [rodalies];
    if (item.dayId === "d1229" && /円形闘技場|Circ|Roman|城壁|Part Alta/.test(item.title)) return [
      { label: "Tarragona Turisme公式", href: "https://www.tarragonaturisme.cat/en", checkedAt, scope: "市内のRoman monumentsと年末の訪問情報。対象日の時間は直前に確認" },
      { label: "UNESCO｜Tarraco", href: "https://whc.unesco.org/en/list/875", checkedAt, scope: "Tarracoの構成資産と世界遺産としての位置づけ" }
    ];
    if (["d1227", "d1228", "d1229"].includes(item.dayId) && /Montserrat|Plaça Espanya/.test(item.title)) return [
      { label: "Montserrat公式｜営業時間", href: "https://www.montserratvisita.com/en/practical-information/opening-hours", checkedAt, scope: "山上施設の通常営業時間。天候と当日運行も出発前に確認" },
      { label: "FGC Turistren公式", href: "https://turistren.cat/en/trains/montserrat-rack-railway-and-funiculars/", checkedAt, scope: "BarcelonaからMontserratへの鉄道・登山鉄道" }
    ];
    if (["d1230", "d0103"].includes(item.dayId) && /Barcelona Sants.*Madrid Atocha|Madrid Atocha.*Barcelona Sants/.test(item.title)) return [renfe];
    if (item.dayId === "d0102" && /Madrid.*Córdoba|Córdoba.*Madrid/.test(item.title)) return [renfe];
    if (item.dayId === "d0102" && /Mezquita-Catedral/.test(item.title)) return [{ label: "Mezquita-Catedral公式", href: "https://mezquita-catedraldecordoba.es/en/", checkedAt, scope: "1/2/2027枠は未公表。発売後の入場枠と礼拝変更を確認" }];
    if (item.dayId === "d0102" && /Alcázar de los Reyes Cristianos/.test(item.title)) return [{ label: "Córdoba Turismo公式｜Alcázar", href: "https://www.turismodecordoba.org/alcazar-de-los-reyes-cristianos", checkedAt, scope: "施設の訪問案内。1/2/2027の開館は旅行前に再確認" }];
    if (item.dayId === "d0104" && /BCN T1へ|チェックイン|保安検査|出国/.test(item.title)) return [aenaDepartures, aenaAirChina];
    if (item.dayId === "d0104" && /BCN T1を出発/.test(item.title)) return [privateTicket, aenaAirChina, aenaDepartures];
    if (item.dayId === "d0104" && /PVG T2に到着/.test(item.title)) return [privateTicket, airChinaPvg, shanghaiAirport];
    if (item.dayId === "d0105" && /PVG T2を出発し、NRT T1に到着/.test(item.title)) return [privateTicket, airChinaPvg, naritaFlight];
    if (item.dayId === "d0105" && /NRT T1に到着|入国手続き/.test(item.title)) return [privateTicket, naritaFlight, naritaAirChina];
    if (item.dayId === "d0105" && /PVG|点心|営業中店舗/.test(item.title)) return [shanghaiAirport, airChinaPvg];
    return item.canonical ? operationalSourcesFor(item.canonical) : [];
  }
  function plannedLearningLink(item) {
    if (/Mezquita-Catedral|Judería|Roman Bridge|Alcázar de los Reyes Cristianos/.test(item.title)) return { label: "詳しく学ぶ", href: "ux-v1-learn.html?id=cordoba" };
    if (/Tarragona|円形闘技場|Circ|Roman|城壁|Part Alta/.test(item.title)) return { label: "詳しく学ぶ", href: "ux-v1-learn.html?id=tarragona" };
    return null;
  }
  function detail(key) {
    if (String(key).startsWith("planned-")) {
      const item = plannedDetailByKey.get(String(key));
      if (!item) return null;
      const canonical = canonicalPresentation(item.canonical);
      const sourceSet = uniqueSources([...canonical.sources, ...plannedSourcesFor(item)]).slice(0, 5);
      const fallbackLearn = plannedLearningLink(item);
      const links = canonical.links.some((link) => link.label === "詳しく学ぶ") || !fallbackLearn ? canonical.links : [fallbackLearn, ...canonical.links];
      return {
        eyebrow: kindText(item.kind), title: item.title, status: item.status, note: item.note,
        facts: [["日付", jpDate(dayById.get(item.dayId))], ["時刻", `${item.time}${item.end ? `–${item.end}` : ""} ${item.zone || ""}`.trim()], ...canonical.facts],
        links, sources: sourceSet,
        showSourceWarning: (["transfer", "transport", "flight", "airport", "station", "train"].includes(item.kind) || canonical.needsOperationalSource) && sourceSet.length === 0
      };
    }
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
    packingItems: list(trip.packingItems), budgetEstimates: list(trip.budgetEstimates), articles: list(trip.learningArticles), cityMeta, hotelStays, railBookings, closureFacts
  };
})(window);
