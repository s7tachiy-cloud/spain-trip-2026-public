/* 旅程・タスクの一元管理。index.html と schedule.html が参照する。 */
window.TRIP = {
  start: '2026-12-25',
  end: '2027-01-05',
  days: [
    { date: '2026-12-25', dow: '金', title: '日本を出発', city: 'flight', status: 'confirmed', statusLabel: '航空券確定' },
    { date: '2026-12-26', dow: '土', title: 'Barcelona到着', city: 'barcelona', status: 'pending', statusLabel: '施設未予約' },
    { date: '2026-12-27', dow: '日', title: 'Gaudí & Montjuïc', city: 'barcelona', status: 'pending', statusLabel: '予約最優先' },
    { date: '2026-12-28', dow: '月', title: 'Tarragona', city: 'barcelona', status: 'pending', statusLabel: '交通・会場未確定' },
    { date: '2026-12-29', dow: '火', title: 'Montserrat', city: 'barcelona', status: 'pending', statusLabel: '歌唱予定なし' },
    { date: '2026-12-30', dow: '水', title: 'Barcelona → Madrid', city: 'barcelona', status: 'pending', statusLabel: 'iryo発売待ち' },
    { date: '2026-12-31', dow: '木', title: 'Prado & Countdown', city: 'madrid', status: 'pending', statusLabel: '時間枠未予約' },
    { date: '2027-01-01', dow: '金', title: '元日の街歩き', city: 'madrid', status: 'pending', statusLabel: 'ゆったり' },
    { date: '2027-01-02', dow: '土', title: 'Toledo', city: 'madrid', status: 'pending', statusLabel: 'Avant／ツアー比較' },
    { date: '2027-01-03', dow: '日', title: 'Madrid → Barcelona', city: 'madrid', status: 'pending', statusLabel: '王宮・iryo未予約' },
    { date: '2027-01-04', dow: '月', title: 'Barcelona出発', city: 'flight', status: 'confirmed', statusLabel: '航空券確定' },
    { date: '2027-01-05', dow: '火', title: '帰国', city: 'flight', status: 'confirmed', statusLabel: '航空券確定' }
  ],
  tasks: [
    { priority: 'urgent', label: '最優先', title: 'サグラダ・ファミリア塔付きを予約', note: '12/27（日）10:30以降。発売開始を確認して3人分を確保。', href: 'https://sagradafamilia.org/en/tickets', action: '公式予約', external: true },
    { priority: '', label: '発売待ち', title: 'Barcelona ↔ Madrid・Toledo列車', note: '発売後に往復時刻を確定し、日程ページを更新。候補3社を比較。', href: 'https://www.renfe.com/es/en', action: 'Renfe', external: true },
    { priority: '', label: '選定中', title: 'ホテル9泊', note: 'Barcelona 4泊＋Madrid 4泊＋Barcelona最終1泊。空港・駅への動線も確認。', href: '', action: '担当を相談' },
    { priority: '', label: '要予約', title: 'プラド・王宮・Barcelona各施設', note: '日程と列車が固まり次第、時間指定枠をまとめて確保。', href: 'spots.html', action: '予約リンク一覧' },
    { priority: 'urgent', label: '最優先', title: '12/31 大晦日ディナー', note: 'cotillónの有無、終了時刻、Solへの移動、前払い・取消条件を確認。', href: '', action: '未選定' },
    { priority: '', label: '要調査', title: '12/28 フラメンコ前後', note: 'ショー開始時刻と食事付き／別手配を比較。', href: '', action: '会場未選定' },
    { priority: '', label: '保険', title: '1/1 営業店', note: 'ホテル朝食、24時間営業のサン・ヒネス、予約不要店を複数確保。', href: '', action: '直前確認' },
    { priority: '', label: '12月確認', title: '年末年始の特別営業と交通', note: 'Sol駅、深夜交通、各施設の2026/27年特別営業を公式発表で再確認。', href: '', action: '発表待ち' }
  ]
};
