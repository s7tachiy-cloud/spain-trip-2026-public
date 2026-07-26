/* Spain Trip Phase 1.3.1 canonical authoring data.
 * Browser runtime reads this file directly; legacy files are audit/migration inputs only.
 * Generated once from the documented Phase 1.3 migration, then maintained explicitly. */
window.TRIP = {
  "start": "2026-12-25",
  "end": "2027-01-05",
  "days": [
    {
      "date": "2026-12-25",
      "dow": "金",
      "title": "日本を出発",
      "city": "flight",
      "status": "confirmed",
      "statusLabel": "航空券確定",
      "id": "d1225",
      "cityId": "flight",
      "cityLabel": "移動日",
      "theme": "空港3時間前到着と保護されたPVG乗継",
      "startTime": "19:30",
      "endTime": "22:15",
      "movement": "長距離",
      "walking": "中",
      "rest": "明示済み",
      "mealStatus": "空港内で夕食",
      "load": {
        "status": "最適化済み",
        "level": "中",
        "evidence": [
          "空港3時間前到着と保護されたPVG乗継"
        ]
      },
      "hero": "成田から出発",
      "caution": "運航会社・terminal・through baggageを私的予約で確認",
      "contingency": {
        "delay30": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "30分遅延: 主役と交通bufferを維持し、dropRank 1から削る。運航会社・terminal・through baggageを私的予約で確認",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "delay60": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "60分遅延: 食事・休憩を残し、shortenable項目を短縮。運航会社・terminal・through baggageを私的予約で確認",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "majorDelay": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "大幅遅延・施設休業: 予約・最終交通を守り、主役が閉鎖なら同日の屋内／外観fallbackへ。運航会社・terminal・through baggageを私的予約で確認",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "fatigue": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "疲労: 食事・休憩・帰路を残し、できれば項目を削る。運航会社・terminal・through baggageを私的予約で確認",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "rain": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "雨・風: 屋外を短縮または中止し、予約済み屋内主役かホテル休憩へ。運航会社・terminal・through baggageを私的予約で確認",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "restaurantUnavailable": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "満席: 予約確定していない店は待たず、同じ街区の予約不要軽食・市場散策・持帰りへ。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        }
      },
      "defaultTimeZone": "Asia/Tokyo",
      "review": {
        "good": "主役、食事、休憩、移動buffer、撤退線を一日の順番に含めた。"
      }
    },
    {
      "date": "2026-12-26",
      "dow": "土",
      "title": "Barcelona到着・Eixample住宅比較",
      "city": "barcelona",
      "status": "pending",
      "statusLabel": "施設未予約",
      "id": "d1226",
      "cityId": "barcelona",
      "cityLabel": "Barcelona",
      "theme": "入国・休憩・Casa Milà＋Casa Batlló",
      "startTime": "00:45",
      "endTime": "19:30",
      "movement": "空港移動＋市内複数エリア",
      "walking": "中",
      "rest": "明示済み",
      "mealStatus": "空港休憩・軽い昼食・軽い夕食",
      "load": {
        "status": "最適化済み",
        "level": "中",
        "evidence": [
          "入国・休憩・Casa Milà＋Casa Batlló"
        ]
      },
      "hero": "Barcelonaへの到着",
      "caution": "early check-inを前提にせず、到着公共ロビーで回復してから市内へ。",
      "contingency": {
        "delay30": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "30分遅延: 主役と交通bufferを維持し、dropRank 1から削る。90分遅延または強い疲労時はCasa Batllóを削減",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "delay60": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "60分遅延: 食事・休憩を残し、shortenable項目を短縮。90分遅延または強い疲労時はCasa Batllóを削減",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "majorDelay": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "大幅遅延・施設休業: 予約・最終交通を守り、主役が閉鎖なら同日の屋内／外観fallbackへ。90分遅延または強い疲労時はCasa Batllóを削減",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "fatigue": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "09:15–10:45はBCN T1公共到着ロビーで着席休憩。early check-inを使わず、強い疲労時はCasa Batllóを削る。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "rain": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "雨・風: 屋外を短縮または中止し、予約済み屋内主役かホテル休憩へ。90分遅延または強い疲労時はCasa Batllóを削減",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "restaurantUnavailable": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "満席: 予約確定していない店は待たず、同じ街区の予約不要軽食・市場散策・持帰りへ。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        }
      },
      "defaultTimeZone": "Europe/Madrid",
      "review": {
        "good": "主役、食事、休憩、移動buffer、撤退線を一日の順番に含めた。"
      }
    },
    {
      "date": "2026-12-27",
      "dow": "日",
      "title": "Sagrada Família",
      "city": "barcelona",
      "status": "pending",
      "statusLabel": "予約最優先",
      "id": "d1227",
      "cityId": "barcelona",
      "cityLabel": "Barcelona",
      "theme": "Sagrada一館＋Sant Pau外観＋伝統食",
      "startTime": "08:30",
      "endTime": "20:00",
      "movement": "市内横断",
      "walking": "中",
      "rest": "明示済み",
      "mealStatus": "Can Culleretes日曜昼・必要時のみ軽い夕食",
      "load": {
        "status": "最適化済み",
        "level": "中",
        "evidence": [
          "Sagrada一館＋Sant Pau外観＋伝統食"
        ]
      },
      "hero": "サグラダ・ファミリア",
      "caution": "日曜夜は休業。13:45昼食候補とし、満席時は7 Portesへ。",
      "contingency": {
        "delay30": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "30分遅延: 主役と交通bufferを維持し、dropRank 1から削る。塔枠・雨・疲労時はSant Pau外観を削減",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "delay60": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "60分遅延: 食事・休憩を残し、shortenable項目を短縮。塔枠・雨・疲労時はSant Pau外観を削減",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "majorDelay": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "大幅遅延・施設休業: 予約・最終交通を守り、主役が閉鎖なら同日の屋内／外観fallbackへ。塔枠・雨・疲労時はSant Pau外観を削減",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "fatigue": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "疲労: 食事・休憩・帰路を残し、できれば項目を削る。塔枠・雨・疲労時はSant Pau外観を削減",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "rain": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "雨・風: 屋外を短縮または中止し、予約済み屋内主役かホテル休憩へ。塔枠・雨・疲労時はSant Pau外観を削減",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "restaurantUnavailable": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "Can Culleretesが12/27休業・満席なら7 Portes 13:45–15:15へ切替し、伝統カタルーニャ料理役割を維持。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        }
      },
      "defaultTimeZone": "Europe/Madrid",
      "review": {
        "good": "主役、食事、休憩、移動buffer、撤退線を一日の順番に含めた。"
      }
    },
    {
      "date": "2026-12-28",
      "dow": "月",
      "title": "Barcelona初訪問core",
      "city": "barcelona",
      "status": "pending",
      "statusLabel": "施設枠未公表",
      "id": "d1228",
      "cityId": "barcelona",
      "cityLabel": "Barcelona",
      "theme": "Park Güell＋Palau de la Música＋Born",
      "startTime": "08:00",
      "endTime": "21:00",
      "movement": "市内cluster移動",
      "walking": "中",
      "rest": "明示済み",
      "mealStatus": "昼食・El Xampanyet 19:00候補・必要時夕食",
      "load": {
        "status": "最適化済み",
        "level": "中",
        "evidence": [
          "Park Güell＋Palau de la Música＋Born"
        ]
      },
      "hero": "Park Güellとカタルーニャ音楽堂",
      "caution": "Parkの天候判断は12/27 20:00。Xampanyetは月曜19:00前に入れない。",
      "contingency": {
        "delay30": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "30分遅延: 主役と交通bufferを維持し、dropRank 1から削る。雨・強風時はParkを見送りPalauを主役にする",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "delay60": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "60分遅延: 食事・休憩を残し、shortenable項目を短縮。雨・強風時はParkを見送りPalauを主役にする",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "majorDelay": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "12/27 20:00判断。Park不可なら、12/29 Montserrat中止時にParkを09:30–12:00へ再配置。再配置しない場合は12/28 Casa Vicens 09:30–11:00へ置換しParkを見送る。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "fatigue": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "疲労: 食事・休憩・帰路を残し、できれば項目を削る。雨・強風時はParkを見送りPalauを主役にする",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "rain": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "12/27 20:00判断。Park不可なら、12/29 Montserrat中止時にParkを09:30–12:00へ再配置。再配置しない場合は12/28 Casa Vicens 09:30–11:00へ置換しParkを見送る。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "restaurantUnavailable": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "El Xampanyetが12/28 19:00に満席・休業ならLa Plata 19:00–20:00へ切替し、anchovies/tapas役割を維持。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        }
      },
      "defaultTimeZone": "Europe/Madrid",
      "review": {
        "good": "主役、食事、休憩、移動buffer、撤退線を一日の順番に含めた。"
      }
    },
    {
      "date": "2026-12-29",
      "dow": "火",
      "title": "Montserrat",
      "city": "barcelona",
      "status": "pending",
      "statusLabel": "歌唱予定なし",
      "id": "d1229",
      "cityId": "montserrat",
      "cityLabel": "Montserrat",
      "theme": "山岳日帰りと保護された下山",
      "startTime": "08:36",
      "endTime": "21:30",
      "movement": "近郊鉄道＋ロープウェイ",
      "walking": "中",
      "rest": "明示済み",
      "mealStatus": "現地昼食・Can Solé 20:00候補",
      "load": {
        "status": "最適化済み",
        "level": "中",
        "evidence": [
          "山岳日帰りと保護された下山"
        ]
      },
      "hero": "黒い聖母と山岳景観",
      "caution": "Montserratは前夜と07:00判断。Can Soléは火曜20:00前に入れない。",
      "contingency": {
        "delay30": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "30分遅延: 主役と交通bufferを維持し、dropRank 1から削る。風・運休時はMontserratを中止しBarcelona屋内候補へ",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "delay60": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "60分遅延: 食事・休憩を残し、shortenable項目を短縮。風・運休時はMontserratを中止しBarcelona屋内候補へ",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "majorDelay": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "12/28 20:00と12/29 07:00判断。Montserrat中止時、Park未訪問ならPark 09:30–12:00→昼食→Picasso 14:00–16:00。Park済み／悪天候ならCasa Vicens 09:30–11:00→昼食→Picasso 13:00–15:00。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "fatigue": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "疲労: 食事・休憩・帰路を残し、できれば項目を削る。風・運休時はMontserratを中止しBarcelona屋内候補へ",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "rain": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "12/28 20:00と12/29 07:00判断。Montserrat中止時、Park未訪問ならPark 09:30–12:00→昼食→Picasso 14:00–16:00。Park済み／悪天候ならCasa Vicens 09:30–11:00→昼食→Picasso 13:00–15:00。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "restaurantUnavailable": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "Can Soléが12/29休業・満席なら7 Portes 20:00–21:30へ切替し、魚介・米料理役割を維持。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        }
      },
      "defaultTimeZone": "Europe/Madrid",
      "review": {
        "good": "主役、食事、休憩、移動buffer、撤退線を一日の順番に含めた。"
      }
    },
    {
      "date": "2026-12-30",
      "dow": "水",
      "title": "Barcelona → Madrid",
      "city": "barcelona",
      "status": "pending",
      "statusLabel": "iryo発売待ち",
      "id": "d1230",
      "cityId": "barcelona",
      "cityLabel": "Barcelona / Madrid",
      "theme": "市場朝食と都市間移動buffer",
      "startTime": "08:30",
      "endTime": "20:30",
      "movement": "高速鉄道",
      "walking": "中",
      "rest": "明示済み",
      "mealStatus": "El Quim候補・移動前昼食",
      "load": {
        "status": "最適化済み",
        "level": "中",
        "evidence": [
          "市場朝食と都市間移動buffer"
        ]
      },
      "hero": "Madridへの移動",
      "caution": "市場行列時は散策だけ、鉄道前90分bufferは削らない",
      "contingency": {
        "delay30": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "30分遅延: 主役と交通bufferを維持し、dropRank 1から削る。市場行列時は散策だけ、鉄道前90分bufferは削らない",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "delay60": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "60分遅延: 食事・休憩を残し、shortenable項目を短縮。市場行列時は散策だけ、鉄道前90分bufferは削らない",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "majorDelay": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "大幅遅延・施設休業: 予約・最終交通を守り、主役が閉鎖なら同日の屋内／外観fallbackへ。市場行列時は散策だけ、鉄道前90分bufferは削らない",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "fatigue": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "疲労: 食事・休憩・帰路を残し、できれば項目を削る。市場行列時は散策だけ、鉄道前90分bufferは削らない",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "rain": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "雨・風: 屋外を短縮または中止し、予約済み屋内主役かホテル休憩へ。市場行列時は散策だけ、鉄道前90分bufferは削らない",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "restaurantUnavailable": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "El Quimが12/30休業・行列20分超ならBar Joan 08:30–09:30へ切替し、市場朝食役割を維持。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        }
      },
      "defaultTimeZone": "Europe/Madrid",
      "review": {
        "good": "主役、食事、休憩、移動buffer、撤退線を一日の順番に含めた。"
      }
    },
    {
      "date": "2026-12-31",
      "dow": "木",
      "title": "Prado & Countdown",
      "city": "madrid",
      "status": "pending",
      "statusLabel": "時間枠未予約",
      "id": "d1231",
      "cityId": "madrid",
      "cityLabel": "Madrid",
      "theme": "Prado・休憩・早い夕食・Sol",
      "startTime": "10:00",
      "endTime": "24:00",
      "movement": "市内徒歩",
      "walking": "多",
      "rest": "明示済み",
      "mealStatus": "昼食・早い夕食",
      "load": {
        "status": "最適化済み",
        "level": "高",
        "evidence": [
          "Prado・休憩・早い夕食・Sol"
        ]
      },
      "hero": "PradoとSolの年越し",
      "caution": "Solは2026公式入場・交通発表を確認し、20:30撤退条件を適用。",
      "contingency": {
        "delay30": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "30分遅延: 主役と交通bufferを維持し、dropRank 1から削る。強雨・疲労・Sol規制時はホテル年越しへ",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "delay60": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "60分遅延: 食事・休憩を残し、shortenable項目を短縮。強雨・疲労・Sol規制時はホテル年越しへ",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "majorDelay": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "12/31 18:00最終判断。公式入場経路・徒歩帰路を満たす場合のみSol。20:30入場不能、収容上限、強雨、徒歩45分超ならホテル客室で22:30–00:15公式中継＋12粒のブドウ。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "fatigue": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "12/31 18:00最終判断。公式入場経路・徒歩帰路を満たす場合のみSol。20:30入場不能、収容上限、強雨、徒歩45分超ならホテル客室で22:30–00:15公式中継＋12粒のブドウ。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "rain": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "12/31 18:00最終判断。公式入場経路・徒歩帰路を満たす場合のみSol。20:30入場不能、収容上限、強雨、徒歩45分超ならホテル客室で22:30–00:15公式中継＋12粒のブドウ。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "restaurantUnavailable": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "満席: 予約確定していない店は待たず、同じ街区の予約不要軽食・市場散策・持帰りへ。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        }
      },
      "defaultTimeZone": "Europe/Madrid",
      "review": {
        "good": "主役、食事、休憩、移動buffer、撤退線を一日の順番に含めた。"
      }
    },
    {
      "date": "2027-01-01",
      "dow": "金",
      "title": "元日のAustrias",
      "city": "madrid",
      "status": "pending",
      "statusLabel": "ゆったり",
      "id": "d0101",
      "cityId": "madrid",
      "cityLabel": "Madrid",
      "theme": "遅い始動・外観中心",
      "startTime": "11:00",
      "endTime": "20:00",
      "movement": "市内徒歩",
      "walking": "少",
      "rest": "明示済み",
      "mealStatus": "San Ginés候補・昼夕食",
      "load": {
        "status": "最適化済み",
        "level": "低",
        "evidence": [
          "遅い始動・外観中心"
        ]
      },
      "hero": "元日のMadridを歩く",
      "caution": "休業・疲労時はPlaza Mayorだけに短縮",
      "contingency": {
        "delay30": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "30分遅延: 主役と交通bufferを維持し、dropRank 1から削る。休業・疲労時はPlaza Mayorだけに短縮",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "delay60": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "60分遅延: 食事・休憩を残し、shortenable項目を短縮。休業・疲労時はPlaza Mayorだけに短縮",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "majorDelay": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "大幅遅延・施設休業: 予約・最終交通を守り、主役が閉鎖なら同日の屋内／外観fallbackへ。休業・疲労時はPlaza Mayorだけに短縮",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "fatigue": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "疲労: 食事・休憩・帰路を残し、できれば項目を削る。休業・疲労時はPlaza Mayorだけに短縮",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "rain": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "雨・風: 屋外を短縮または中止し、予約済み屋内主役かホテル休憩へ。休業・疲労時はPlaza Mayorだけに短縮",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "restaurantUnavailable": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "San Ginésが2027/1/1休業・行列30分超ならChocolatería 1902 11:45–12:30へ切替し、chocolate con churros役割を維持。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        }
      },
      "defaultTimeZone": "Europe/Madrid",
      "review": {
        "good": "主役、食事、休憩、移動buffer、撤退線を一日の順番に含めた。"
      }
    },
    {
      "date": "2027-01-02",
      "dow": "土",
      "title": "Toledo",
      "city": "madrid",
      "status": "pending",
      "statusLabel": "Avant／ツアー比較",
      "id": "d0102",
      "cityId": "toledo",
      "cityLabel": "Toledo",
      "theme": "大聖堂・El Greco核と帰路buffer",
      "startTime": "09:15",
      "endTime": "17:57",
      "movement": "高速鉄道＋徒歩",
      "walking": "中",
      "rest": "明示済み",
      "mealStatus": "現地昼食",
      "load": {
        "status": "最適化済み",
        "level": "中",
        "evidence": [
          "大聖堂・El Greco核と帰路buffer"
        ]
      },
      "hero": "Toledoの宗教美術",
      "caution": "雨・疲労時はGrecoを削り帰路を守る",
      "contingency": {
        "delay30": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "30分遅延: 主役と交通bufferを維持し、dropRank 1から削る。雨・疲労時はGrecoを削り帰路を守る",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "delay60": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "60分遅延: 食事・休憩を残し、shortenable項目を短縮。雨・疲労時はGrecoを削り帰路を守る",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "majorDelay": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "大幅遅延・施設休業: 予約・最終交通を守り、主役が閉鎖なら同日の屋内／外観fallbackへ。雨・疲労時はGrecoを削り帰路を守る",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "fatigue": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "疲労: 食事・休憩・帰路を残し、できれば項目を削る。雨・疲労時はGrecoを削り帰路を守る",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "rain": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "雨・風: 屋外を短縮または中止し、予約済み屋内主役かホテル休憩へ。雨・疲労時はGrecoを削り帰路を守る",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "restaurantUnavailable": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "満席: 予約確定していない店は待たず、同じ街区の予約不要軽食・市場散策・持帰りへ。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        }
      },
      "defaultTimeZone": "Europe/Madrid",
      "review": {
        "good": "主役、食事、休憩、移動buffer、撤退線を一日の順番に含めた。"
      }
    },
    {
      "date": "2027-01-03",
      "dow": "日",
      "title": "Madrid → Barcelona",
      "city": "madrid",
      "status": "pending",
      "statusLabel": "Reina・iryo未予約",
      "id": "d0103",
      "cityId": "madrid",
      "cityLabel": "Madrid / Barcelona",
      "theme": "Reina Sofía一館とAtocha buffer",
      "startTime": "08:30",
      "endTime": "22:00",
      "movement": "市内＋高速鉄道",
      "walking": "中",
      "rest": "明示済み",
      "mealStatus": "Atocha周辺昼食・到着後軽食",
      "load": {
        "status": "最適化済み",
        "level": "中",
        "evidence": [
          "Reina Sofía一館とAtocha buffer"
        ]
      },
      "hero": "Reina Sofíaと都市間移動",
      "caution": "入場不可時は館を省略し列車bufferを維持",
      "contingency": {
        "delay30": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "30分遅延: 主役と交通bufferを維持し、dropRank 1から削る。入場不可時は館を省略し列車bufferを維持",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "delay60": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "60分遅延: 食事・休憩を残し、shortenable項目を短縮。入場不可時は館を省略し列車bufferを維持",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "majorDelay": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "大幅遅延・施設休業: 予約・最終交通を守り、主役が閉鎖なら同日の屋内／外観fallbackへ。入場不可時は館を省略し列車bufferを維持",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "fatigue": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "疲労: 食事・休憩・帰路を残し、できれば項目を削る。入場不可時は館を省略し列車bufferを維持",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "rain": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "雨・風: 屋外を短縮または中止し、予約済み屋内主役かホテル休憩へ。入場不可時は館を省略し列車bufferを維持",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "restaurantUnavailable": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "満席: 予約確定していない店は待たず、同じ街区の予約不要軽食・市場散策・持帰りへ。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        }
      },
      "defaultTimeZone": "Europe/Madrid",
      "review": {
        "good": "主役、食事、休憩、移動buffer、撤退線を一日の順番に含めた。"
      }
    },
    {
      "date": "2027-01-04",
      "dow": "月",
      "title": "Barcelona出発",
      "city": "flight",
      "status": "confirmed",
      "statusLabel": "航空券確定",
      "id": "d0104",
      "cityId": "flight",
      "cityLabel": "移動日",
      "theme": "07:40空港着と国際線",
      "startTime": "06:55",
      "endTime": null,
      "movement": "空港＋長距離便",
      "walking": "中",
      "rest": "明示済み",
      "mealStatus": "空港で確保",
      "load": {
        "status": "最適化済み",
        "level": "中",
        "evidence": [
          "07:40空港着と国際線"
        ]
      },
      "hero": "帰国便に乗る",
      "caution": "taxi不調時も07:40着を満たす代替車を前夜手配",
      "contingency": {
        "delay30": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "30分遅延: 主役と交通bufferを維持し、dropRank 1から削る。taxi不調時も07:40着を満たす代替車を前夜手配",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "delay60": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "60分遅延: 食事・休憩を残し、shortenable項目を短縮。taxi不調時も07:40着を満たす代替車を前夜手配",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "majorDelay": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "大幅遅延・施設休業: 予約・最終交通を守り、主役が閉鎖なら同日の屋内／外観fallbackへ。taxi不調時も07:40着を満たす代替車を前夜手配",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "fatigue": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "疲労: 食事・休憩・帰路を残し、できれば項目を削る。taxi不調時も07:40着を満たす代替車を前夜手配",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "rain": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "雨・風: 屋外を短縮または中止し、予約済み屋内主役かホテル休憩へ。taxi不調時も07:40着を満たす代替車を前夜手配",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "restaurantUnavailable": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "満席: 予約確定していない店は待たず、同じ街区の予約不要軽食・市場散策・持帰りへ。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        }
      },
      "defaultTimeZone": "Europe/Madrid",
      "review": {
        "good": "主役、食事、休憩、移動buffer、撤退線を一日の順番に含めた。"
      }
    },
    {
      "date": "2027-01-05",
      "dow": "火",
      "title": "帰国",
      "city": "flight",
      "status": "confirmed",
      "statusLabel": "航空券確定",
      "id": "d0105",
      "cityId": "flight",
      "cityLabel": "移動日",
      "theme": "PVG長時間乗継と成田到着",
      "startTime": "06:00",
      "endTime": "19:30",
      "movement": "長距離便",
      "walking": "中",
      "rest": "明示済み",
      "mealStatus": "PVGで食事",
      "load": {
        "status": "最適化済み",
        "level": "中",
        "evidence": [
          "PVG長時間乗継と成田到着"
        ]
      },
      "hero": "成田到着",
      "caution": "接続変更時は航空会社指示を優先",
      "contingency": {
        "delay30": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "30分遅延: 主役と交通bufferを維持し、dropRank 1から削る。接続変更時は航空会社指示を優先",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "delay60": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "60分遅延: 食事・休憩を残し、shortenable項目を短縮。接続変更時は航空会社指示を優先",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "majorDelay": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "大幅遅延・施設休業: 予約・最終交通を守り、主役が閉鎖なら同日の屋内／外観fallbackへ。接続変更時は航空会社指示を優先",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "fatigue": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "疲労: 食事・休憩・帰路を残し、できれば項目を削る。接続変更時は航空会社指示を優先",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "rain": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "雨・風: 屋外を短縮または中止し、予約済み屋内主役かホテル休憩へ。接続変更時は航空会社指示を優先",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        },
        "restaurantUnavailable": {
          "status": "設計済み",
          "keepItemIds": [],
          "shortenItemIds": [],
          "dropItemIds": [],
          "replacementItemIds": [],
          "instruction": "満席: 予約確定していない店は待たず、同じ街区の予約不要軽食・市場散策・持帰りへ。",
          "informationNeeded": [
            "旅行7日前と前日に公式運行・営業・天候を再確認。"
          ]
        }
      },
      "defaultTimeZone": "Asia/Shanghai",
      "review": {
        "good": "主役、食事、休憩、移動buffer、撤退線を一日の順番に含めた。"
      }
    }
  ],
  "schemaVersion": "1.3.1",
  "timeZone": "Europe/Madrid",
  "id": "spain-2026",
  "name": "スペイン旅行 2026–27",
  "route": [
    "成田",
    "上海",
    "Barcelona",
    "Madrid",
    "Barcelona",
    "上海",
    "成田"
  ],
  "travelers": [
    {
      "id": "family",
      "label": "家族3人"
    }
  ],
  "preferences": {
    "density": "やや充実",
    "earlyStart": "可",
    "hotelBreak": "疲れた日のみ",
    "walking": "多くてもよい",
    "meals": "一部予約",
    "sightseeing": "有名どころ重視",
    "balance": "数と深さの両立",
    "lateNight": "一部の日のみ"
  },
  "evaluation": {
    "status": "Phase 3.1-R2再現可能採点済み",
    "score": 63.859,
    "reason": "16候補を12日分のScheduleItemへ正規化し、候補ID・名称・手入力scoreに依存しない固定6軸式でoptimistic/base/conservativeを再計算。P06-R2がbase 63.859、conservative 56.995で勝者。",
    "axes": [
      {
        "id": "experience",
        "label": "体験の質・特別感",
        "maxScore": 15,
        "status": "評価済み",
        "score": 13.161,
        "evidence": [
          "Phase 3.1-R2 P06-R2 base: 13.161/15",
          "scripts/phase3-1-r2-score.js contribution ledger"
        ],
        "risks": [
          "conservative scenarioと未公表営業・交通依存をscenario scorecardへ分離。"
        ],
        "improvements": [
          "実測移動時間、ホテル位置、2026/27公式営業が判明した時だけ入力事実を更新して再計算する。"
        ],
        "informationNeeded": [
          "docs/phase-3-1-r2-axis-contribution-ledger.md"
        ]
      },
      {
        "id": "food",
        "label": "食事の満足度",
        "maxScore": 20,
        "status": "評価済み",
        "score": 12.688,
        "evidence": [
          "Phase 3.1-R2 P06-R2 base: 12.688/20",
          "scripts/phase3-1-r2-score.js contribution ledger"
        ],
        "risks": [
          "conservative scenarioと未公表営業・交通依存をscenario scorecardへ分離。"
        ],
        "improvements": [
          "実測移動時間、ホテル位置、2026/27公式営業が判明した時だけ入力事実を更新して再計算する。"
        ],
        "informationNeeded": [
          "docs/phase-3-1-r2-axis-contribution-ledger.md"
        ]
      },
      {
        "id": "coverage",
        "label": "必見・必食の網羅性",
        "maxScore": 20,
        "status": "評価済み",
        "score": 14.767,
        "evidence": [
          "Phase 3.1-R2 P06-R2 base: 14.767/20",
          "scripts/phase3-1-r2-score.js contribution ledger"
        ],
        "risks": [
          "conservative scenarioと未公表営業・交通依存をscenario scorecardへ分離。"
        ],
        "improvements": [
          "実測移動時間、ホテル位置、2026/27公式営業が判明した時だけ入力事実を更新して再計算する。"
        ],
        "informationNeeded": [
          "docs/phase-3-1-r2-axis-contribution-ledger.md"
        ]
      },
      {
        "id": "fatigue",
        "label": "疲れにくさ",
        "maxScore": 15,
        "status": "評価済み",
        "score": 5.53,
        "evidence": [
          "Phase 3.1-R2 P06-R2 base: 5.53/15",
          "scripts/phase3-1-r2-score.js contribution ledger"
        ],
        "risks": [
          "conservative scenarioと未公表営業・交通依存をscenario scorecardへ分離。"
        ],
        "improvements": [
          "実測移動時間、ホテル位置、2026/27公式営業が判明した時だけ入力事実を更新して再計算する。"
        ],
        "informationNeeded": [
          "docs/phase-3-1-r2-axis-contribution-ledger.md"
        ]
      },
      {
        "id": "mobility",
        "label": "移動効率",
        "maxScore": 15,
        "status": "評価済み",
        "score": 9.291,
        "evidence": [
          "Phase 3.1-R2 P06-R2 base: 9.291/15",
          "scripts/phase3-1-r2-score.js contribution ledger"
        ],
        "risks": [
          "conservative scenarioと未公表営業・交通依存をscenario scorecardへ分離。"
        ],
        "improvements": [
          "実測移動時間、ホテル位置、2026/27公式営業が判明した時だけ入力事実を更新して再計算する。"
        ],
        "informationNeeded": [
          "docs/phase-3-1-r2-axis-contribution-ledger.md"
        ]
      },
      {
        "id": "resilience",
        "label": "予定変更への強さ",
        "maxScore": 15,
        "status": "評価済み",
        "score": 8.422,
        "evidence": [
          "Phase 3.1-R2 P06-R2 base: 8.422/15",
          "scripts/phase3-1-r2-score.js contribution ledger"
        ],
        "risks": [
          "conservative scenarioと未公表営業・交通依存をscenario scorecardへ分離。"
        ],
        "improvements": [
          "実測移動時間、ホテル位置、2026/27公式営業が判明した時だけ入力事実を更新して再計算する。"
        ],
        "informationNeeded": [
          "docs/phase-3-1-r2-axis-contribution-ledger.md"
        ]
      }
    ]
  },
  "cities": [
    {
      "id": "barcelona",
      "name": "Barcelona",
      "nights": 5,
      "role": "到着後4泊＋帰国前1泊。"
    },
    {
      "id": "madrid",
      "name": "Madrid",
      "nights": 4,
      "role": "美術、王宮、年越しの拠点。"
    },
    {
      "id": "tarragona",
      "name": "Tarragona",
      "nights": 0,
      "role": "ローマ遺産の日帰り先。"
    },
    {
      "id": "montserrat",
      "name": "Montserrat",
      "nights": 0,
      "role": "修道院と山岳景観の日帰り先。"
    },
    {
      "id": "toledo",
      "name": "Toledo",
      "nights": 0,
      "role": "宗教都市とエル・グレコの日帰り先。"
    }
  ],
  "coverageCatalog": {
    "catalogStatus": "作成中",
    "scope": "既存旅程・既存prep・既存spotsで確認できた候補",
    "selectionPolicy": "有名どころ重視。数ではなく重要度と判断理由を管理する。",
    "lastReviewed": "2026-07-22",
    "missingCategories": [
      "都市別の料理・店舗候補",
      "現地で判断する体験候補",
      "意図的見送りのレビュー"
    ],
    "catalogProgress": [
      {
        "cityId": "barcelona",
        "category": "see",
        "status": "調査中",
        "lastReviewedAt": null,
        "sourcePolicy": null,
        "missingTopics": [
          "候補母集団のレビュー"
        ]
      },
      {
        "cityId": "barcelona",
        "category": "eat",
        "status": "未登録",
        "lastReviewedAt": null,
        "sourcePolicy": null,
        "missingTopics": [
          "店舗候補"
        ]
      },
      {
        "cityId": "madrid",
        "category": "see",
        "status": "調査中",
        "lastReviewedAt": null,
        "sourcePolicy": null,
        "missingTopics": [
          "判断理由のレビュー"
        ]
      },
      {
        "cityId": "madrid",
        "category": "eat",
        "status": "未登録",
        "lastReviewedAt": null,
        "sourcePolicy": null,
        "missingTopics": [
          "店舗候補"
        ]
      }
    ]
  },
  "places": [
    {
      "id": "sagrada",
      "cityId": "barcelona",
      "nameJa": "サグラダ・ファミリア",
      "nameLocal": null,
      "kind": "attraction",
      "area": "Barcelona",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Sagrada+Familia+Barcelona",
      "officialUrl": "https://sagradafamilia.org/en/tickets",
      "articleIds": [
        "gaudi-overview",
        "sagrada",
        "barcelona-overview",
        "barcelona-modernisme-palau"
      ],
      "legacyAnchor": "sagrada",
      "summary": "料金・時間は既存spots記載。訪問前に公式再確認。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "基本 €26／塔付き €36"
        ],
        "accessNotes": [
          "Metro L2/L5"
        ],
        "closureNotes": [],
        "tripDateWindows": [
          {
            "date": "2026-12-27",
            "opens": "10:30",
            "closes": "18:00",
            "lastEntry": null,
            "status": "provisional",
            "sourceIds": [
              "source-internal-legacy-spots"
            ],
            "checkedAt": null
          }
        ],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-sagradafamilia-org-en-tickets"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "parkguell",
      "cityId": "barcelona",
      "nameJa": "グエル公園",
      "nameLocal": null,
      "kind": "attraction",
      "area": "Barcelona",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Park+Guell+Barcelona",
      "officialUrl": "https://parkguell.barcelona/en/buy-tickets",
      "articleIds": [
        "gaudi-overview",
        "park-guell",
        "barcelona-overview"
      ],
      "legacyAnchor": "parkguell",
      "summary": "当日枠は保証されず、公式は事前購入を推奨。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "一般 €18"
        ],
        "accessNotes": [
          "指定時刻＋30分まで",
          "最大3か月前発売"
        ],
        "closureNotes": [
          "冬期9:30〜17:30"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-parkguell-barcelona-en-buy-tickets"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "batllo",
      "cityId": "barcelona",
      "nameJa": "カサ・バトリョ",
      "nameLocal": null,
      "kind": "attraction",
      "area": "Barcelona",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Casa+Batllo+Barcelona",
      "officialUrl": "https://www.casabatllo.es/en/online-tickets/",
      "articleIds": [
        "gaudi-overview",
        "batllo",
        "barcelona-overview",
        "barcelona-modernisme-palau"
      ],
      "legacyAnchor": "batllo",
      "summary": "既存spots記載。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": 75,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "オンライン €29〜",
          "窓口はオンラインより+€4〜15"
        ],
        "accessNotes": [],
        "closureNotes": [
          "初回9:00／最終19:45"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-www-casabatllo-es-en-online-tickets"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "mila",
      "cityId": "barcelona",
      "nameJa": "カサ・ミラ（ラ・ペドレラ）",
      "nameLocal": null,
      "kind": "attraction",
      "area": "Barcelona",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Casa+Mila+Barcelona",
      "officialUrl": "https://www.lapedrera.com/en/tickets/",
      "articleIds": [
        "gaudi-overview",
        "mila",
        "barcelona-overview",
        "barcelona-modernisme-palau"
      ],
      "legacyAnchor": "mila",
      "summary": "既存spots記載。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "Essential €25〜"
        ],
        "accessNotes": [],
        "closureNotes": [
          "9:00〜20:30",
          "最終入場19:00"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-www-lapedrera-com-en-tickets"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "cathedral",
      "cityId": "barcelona",
      "nameJa": "バルセロナ大聖堂",
      "nameLocal": null,
      "kind": "attraction",
      "area": "ゴシック地区",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Barcelona+Cathedral",
      "officialUrl": "https://tickets.catedralbcn.org/",
      "articleIds": [
        "barcelona-overview",
        "barcelona-old-city"
      ],
      "legacyAnchor": "cathedral",
      "summary": "既存spots記載。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "観光入場 €12〜16のプラン制"
        ],
        "accessNotes": [
          "オンライン予約可"
        ],
        "closureNotes": [
          "日曜は観光入場14時以降"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-tickets-catedralbcn-org"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "montjuic",
      "cityId": "barcelona",
      "nameJa": "モンジュイック城",
      "nameLocal": null,
      "kind": "attraction",
      "area": "Montjuïc",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Montjuic+Castle+Barcelona",
      "officialUrl": "https://ajuntament.barcelona.cat/castelldemontjuic/en/visit-us",
      "articleIds": [],
      "legacyAnchor": "montjuic",
      "summary": "既存spots記載。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "€12"
        ],
        "accessNotes": [
          "オンライン予約可",
          "丘の頂上"
        ],
        "closureNotes": [
          "冬期18:00まで"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-montjuic-castle-official-visit"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "boqueria",
      "cityId": "barcelona",
      "nameJa": "ブケリア市場",
      "nameLocal": null,
      "kind": "market",
      "area": "Barcelona",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mercat+de+la+Boqueria",
      "officialUrl": "https://www.boqueria.barcelona/home",
      "articleIds": [
        "barcelona-overview",
        "barcelona-old-city",
        "catalan-winter-food",
        "barcelona-seafood-market-bar"
      ],
      "legacyAnchor": "boqueria",
      "summary": "既存spots記載。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "入場無料"
        ],
        "accessNotes": [],
        "closureNotes": [
          "8:00〜20:00",
          "日曜休み"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-www-boqueria-barcelona-home"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "montserrat",
      "cityId": "montserrat",
      "nameJa": "モンセラート",
      "nameLocal": null,
      "kind": "area",
      "area": "Montserrat",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Montserrat+Monastery+Spain",
      "officialUrl": "https://abadiamontserrat.cat/en/",
      "articleIds": [
        "barcelona-overview",
        "montserrat"
      ],
      "legacyAnchor": "montserrat",
      "summary": "12/29は歌唱を前提にしない。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "FGC＋登山鉄道往復 €28.80"
        ],
        "accessNotes": [
          "オンライン／駅で購入",
          "片道約90分"
        ],
        "closureNotes": [
          "聖歌隊は当日確認"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-www-cremallerademontserrat-cat-en"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "tarragona",
      "cityId": "tarragona",
      "nameJa": "タラゴナ",
      "nameLocal": null,
      "kind": "area",
      "area": "Tarragona",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Tarragona+Amphitheatre",
      "officialUrl": "https://www.tarragonaturisme.cat/en",
      "articleIds": [],
      "legacyAnchor": "tarragona",
      "summary": null,
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [
          "訪問日12/28",
          "主目的はローマ遺跡",
          "列車・バス未確定",
          "夜はフラメンコ候補"
        ],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-www-tarragonaturisme-cat-en"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "prado",
      "cityId": "madrid",
      "nameJa": "プラド美術館",
      "nameLocal": null,
      "kind": "museum",
      "area": "Madrid",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Prado+Museum+Madrid",
      "officialUrl": "https://www.museodelprado.es/en/visit/opening-times-and-prices/",
      "articleIds": [
        "prado",
        "madrid-overview",
        "madrid-art",
        "santo-tome-orgaz",
        "el-greco-museum"
      ],
      "legacyAnchor": "prado",
      "summary": "既存spots記載。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "€15"
        ],
        "accessNotes": [
          "展示室撮影禁止"
        ],
        "closureNotes": [
          "12/31 10:00〜14:00",
          "最終入場は閉館30分前"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-www-museodelprado-es-en-visit-opening-times-and-pric"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "palacio",
      "cityId": "madrid",
      "nameJa": "マドリード王宮",
      "nameLocal": null,
      "kind": "attraction",
      "area": "Madrid",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Royal+Palace+of+Madrid",
      "officialUrl": "https://tickets.patrimonionacional.es/en/tickets/palacio-real-de-madrid",
      "articleIds": [
        "madrid-overview",
        "madrid-austrias"
      ],
      "legacyAnchor": "palacio",
      "summary": "既存spots記載。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "一般 €18",
          "サバティーニ庭園無料"
        ],
        "accessNotes": [],
        "closureNotes": [
          "冬期・日曜10:00〜16:00",
          "最終入場は閉館1時間前"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-tickets-patrimonionacional-es-en-tickets-palacio-rea"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "reinasofia",
      "cityId": "madrid",
      "nameJa": "ソフィア王妃芸術センター",
      "nameLocal": null,
      "kind": "museum",
      "area": "Madrid",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Reina+Sofia+Museum+Madrid",
      "officialUrl": "https://www.museoreinasofia.es/en/visit/individual-visits/",
      "articleIds": [
        "madrid-art",
        "madrid-overview",
        "prado"
      ],
      "legacyAnchor": "reinasofia",
      "summary": "1/2夜案から1/3午前へ変更。2027年運用は再確認。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "€12",
          "無料枠19:00〜21:00"
        ],
        "accessNotes": [],
        "closureNotes": [
          "土曜10:00〜21:00",
          "火曜ほか休館"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-www-museoreinasofia-es-en-visit-individual-visits"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "nye",
      "cityId": "madrid",
      "nameJa": "大晦日と元日の街歩き",
      "nameLocal": null,
      "kind": "event-area",
      "area": "Puerta del Sol",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Puerta+del+Sol+Madrid",
      "officialUrl": "https://www.esmadrid.com/en/tourist-information/puerta-del-sol",
      "articleIds": [
        "madrid-overview",
        "madrid-austrias"
      ],
      "legacyAnchor": "nye",
      "summary": null,
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [
          "12/31 Sol広場",
          "現地入り21時台目安",
          "12粒のブドウ",
          "1/1王宮は外観のみ"
        ],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-www-metromadrid-es-en",
          "source-mad-learn-madrid-austrias"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "toledo-cathedral",
      "cityId": "toledo",
      "nameJa": "トレド大聖堂",
      "nameLocal": null,
      "kind": "attraction",
      "area": "Toledo",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Toledo+Cathedral+Spain",
      "officialUrl": "https://www.catedralprimada.es/en/the-cathedral/",
      "articleIds": [
        "toledo",
        "toledo-cathedral"
      ],
      "legacyAnchor": "toledo-cathedral",
      "summary": "既存spots記載。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "€12"
        ],
        "accessNotes": [
          "入口Puerta Llana"
        ],
        "closureNotes": [
          "土曜10:00〜18:30",
          "最終入場は閉館30分前"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-tickets-catedralprimada-es",
          "source-mad-learn-cathedral",
          "source-mad-learn-cathedral-visit"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "santotome",
      "cityId": "toledo",
      "nameJa": "サント・トメ教会",
      "nameLocal": null,
      "kind": "attraction",
      "area": "Toledo",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Iglesia+de+Santo+Tome+Toledo",
      "officialUrl": "https://santotome.org/",
      "articleIds": [
        "toledo",
        "santo-tome-orgaz",
        "toledo-cathedral",
        "el-greco-museum"
      ],
      "legacyAnchor": "santotome",
      "summary": "既存spots記載。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "表示料金 €4"
        ],
        "accessNotes": [
          "予約必須ではない",
          "写真撮影不可"
        ],
        "closureNotes": [
          "冬期10:00〜17:45"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-tickets-toledomonumental-com",
          "source-mad-learn-santo-tome"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "greco",
      "cityId": "toledo",
      "nameJa": "エル・グレコ美術館",
      "nameLocal": null,
      "kind": "museum",
      "area": "Toledo",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Museo+del+Greco+Toledo",
      "officialUrl": "https://www.cultura.gob.es/mgreco/en/inicio.html",
      "articleIds": [
        "toledo",
        "el-greco-museum",
        "toledo-cathedral",
        "santo-tome-orgaz"
      ],
      "legacyAnchor": "greco",
      "summary": "既存spots記載。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "€3",
          "土曜14時以降無料"
        ],
        "accessNotes": [
          "フラッシュ・三脚不可"
        ],
        "closureNotes": [
          "冬期土曜9:30〜18:00"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-www-cultura-gob-es-mgreco-la-visita-horariosytarifas",
          "source-mad-learn-greco-collection"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "santacruz",
      "cityId": "toledo",
      "nameJa": "サンタ・クルス美術館",
      "nameLocal": null,
      "kind": "museum",
      "area": "Zocodover近く",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Museo+de+Santa+Cruz+Toledo",
      "officialUrl": "https://cultura.castillalamancha.es/museos/nuestros-museos/museo-de-santa-cruz",
      "articleIds": [
        "toledo"
      ],
      "legacyAnchor": "santacruz",
      "summary": "無料・工事は直前に再確認。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "一時的に無料"
        ],
        "accessNotes": [],
        "closureNotes": [
          "土曜10:00〜18:00",
          "一部エリア閉鎖"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-cultura-castillalamancha-es-museos-nuestros-museos-m"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "barcelona-airport",
      "cityId": "barcelona",
      "nameJa": "Barcelona空港",
      "nameLocal": null,
      "kind": "transport",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "hotel-barcelona",
      "cityId": "barcelona",
      "nameJa": "Barcelonaホテル",
      "nameLocal": null,
      "kind": "hotel",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "guell-palace",
      "cityId": "barcelona",
      "nameJa": "グエル邸",
      "nameLocal": null,
      "kind": "attraction",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [
        "gaudi-overview",
        "palau-guell",
        "barcelona-overview",
        "barcelona-old-city"
      ],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "placa-rei",
      "cityId": "barcelona",
      "nameJa": "王の広場",
      "nameLocal": null,
      "kind": "area",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": "https://www.barcelona.cat/museuhistoria/en/heritages/muhba-placa-del-rei",
      "articleIds": [
        "barcelona-overview",
        "barcelona-old-city"
      ],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "placa-reial",
      "cityId": "barcelona",
      "nameJa": "レイアール広場",
      "nameLocal": null,
      "kind": "area",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": "https://www.barcelona.cat/en/discoverbcn/pics/placa-reial-99400391186",
      "articleIds": [
        "barcelona-overview",
        "barcelona-old-city"
      ],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "casa-vicens",
      "cityId": "barcelona",
      "nameJa": "カサ・ビセンス",
      "nameLocal": null,
      "kind": "attraction",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [
        "gaudi-overview",
        "casa-vicens",
        "barcelona-overview",
        "barcelona-modernisme-palau"
      ],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "sant-pau",
      "cityId": "barcelona",
      "nameJa": "サン・パウ病院",
      "nameLocal": null,
      "kind": "attraction",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": "https://santpaubarcelona.org/en/",
      "articleIds": [
        "barcelona-overview",
        "barcelona-modernisme-palau"
      ],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "fira-sagrada",
      "cityId": "barcelona",
      "nameJa": "Fira de Nadal la Sagrada Família",
      "nameLocal": null,
      "kind": "event",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "columbus",
      "cityId": "barcelona",
      "nameJa": "コロンブス記念塔",
      "nameLocal": null,
      "kind": "attraction",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "teleferic-port",
      "cityId": "barcelona",
      "nameJa": "Telefèric del Port",
      "nameLocal": null,
      "kind": "transport",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "el-corte",
      "cityId": "barcelona",
      "nameJa": "エル・コルテ・イングレス",
      "nameLocal": null,
      "kind": "shop",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "fira-santa-llucia",
      "cityId": "barcelona",
      "nameJa": "Fira de Santa Llúcia",
      "nameLocal": null,
      "kind": "event",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "ferreres",
      "cityId": "tarragona",
      "nameJa": "ラス・ファレーラス水道橋",
      "nameLocal": null,
      "kind": "attraction",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "tarragona-cathedral",
      "cityId": "tarragona",
      "nameJa": "タラゴナ大聖堂",
      "nameLocal": null,
      "kind": "attraction",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "pinchos-street",
      "cityId": "tarragona",
      "nameJa": "ピンチョス通りのバル",
      "nameLocal": null,
      "kind": "meal-area",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "montserrat-basilica",
      "cityId": "montserrat",
      "nameJa": "モンセラート大聖堂",
      "nameLocal": null,
      "kind": "attraction",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "black-madonna",
      "cityId": "montserrat",
      "nameJa": "黒い聖母マリア像",
      "nameLocal": null,
      "kind": "attraction",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "montserrat-museum",
      "cityId": "montserrat",
      "nameJa": "モンセラート美術館",
      "nameLocal": null,
      "kind": "museum",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "san-jeronimo",
      "cityId": "madrid",
      "nameJa": "サン・ヘロニモ・エル・レアル教会",
      "nameLocal": null,
      "kind": "attraction",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "cibeles",
      "cityId": "madrid",
      "nameJa": "シベレス広場",
      "nameLocal": null,
      "kind": "area",
      "area": null,
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Plaza+de+Cibeles+Madrid",
      "officialUrl": "https://www.esmadrid.com/en/tourist-information/fuente-de-cibeles",
      "articleIds": [
        "madrid-overview"
      ],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-mad-learn-madrid-austrias"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "alcala-gate",
      "cityId": "madrid",
      "nameJa": "アルカラ門",
      "nameLocal": null,
      "kind": "attraction",
      "area": null,
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Puerta+de+Alcala+Madrid",
      "officialUrl": "https://www.esmadrid.com/en/tourist-information/puerta-de-alcala",
      "articleIds": [
        "madrid-overview"
      ],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-mad-learn-madrid-austrias"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "retiro",
      "cityId": "madrid",
      "nameJa": "エル・レティーロ公園",
      "nameLocal": null,
      "kind": "park",
      "area": null,
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Retiro+Park+Madrid",
      "officialUrl": "https://www.esmadrid.com/en/tourist-information/parque-del-retiro",
      "articleIds": [
        "madrid-overview"
      ],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-mad-learn-madrid-austrias"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "san-silvestre",
      "cityId": "madrid",
      "nameJa": "San Silvestre Vallecana",
      "nameLocal": null,
      "kind": "event",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "san-gines",
      "cityId": "madrid",
      "nameJa": "チョコラテリア・サン・ヒネス",
      "nameLocal": null,
      "kind": "food",
      "area": null,
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Chocolateria+San+Gines+Madrid",
      "officialUrl": "https://chocolateriasangines.com/",
      "articleIds": [
        "madrid-austrias"
      ],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-mad-learn-madrid-austrias"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "plaza-mayor",
      "cityId": "madrid",
      "nameJa": "マヨール広場",
      "nameLocal": null,
      "kind": "area",
      "area": null,
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Plaza+Mayor+Madrid",
      "officialUrl": "https://www.esmadrid.com/en/tourist-information/plaza-mayor-madrid",
      "articleIds": [
        "madrid-overview",
        "madrid-austrias"
      ],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-mad-learn-madrid-austrias"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "san-isidro",
      "cityId": "madrid",
      "nameJa": "サン・イシドロ教会",
      "nameLocal": null,
      "kind": "attraction",
      "area": null,
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Colegiata+de+San+Isidro+Madrid",
      "officialUrl": "https://www.esmadrid.com/en/tourist-information/colegiata-de-san-isidro",
      "articleIds": [
        "madrid-austrias"
      ],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-mad-learn-madrid-austrias"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "san-francisco",
      "cityId": "madrid",
      "nameJa": "サン・フランシスコ・エル・グランデ教会",
      "nameLocal": null,
      "kind": "attraction",
      "area": null,
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=San+Francisco+el+Grande+Madrid",
      "officialUrl": "https://www.esmadrid.com/en/tourist-information/royal-basilica-san-francisco-el-grande",
      "articleIds": [
        "madrid-austrias"
      ],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots",
          "source-mad-learn-madrid-austrias"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "serrano",
      "cityId": "madrid",
      "nameJa": "セラーノ通り",
      "nameLocal": null,
      "kind": "area",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "cava-san-miguel",
      "cityId": "madrid",
      "nameJa": "カバ・デ・サン・ミゲル通り",
      "nameLocal": null,
      "kind": "area",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "san-miguel-market",
      "cityId": "madrid",
      "nameJa": "サン・ミゲル市場",
      "nameLocal": null,
      "kind": "market",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "hotel-barcelona-final",
      "cityId": "barcelona",
      "nameJa": "Barcelona最終泊",
      "nameLocal": null,
      "kind": "hotel",
      "area": null,
      "address": null,
      "mapUrl": null,
      "officialUrl": null,
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "旧scheduleから名称のみ移行。詳細は未登録。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "bookingRequirement": "unknown",
        "priceNotes": [],
        "accessNotes": [],
        "closureNotes": [],
        "tripDateWindows": [],
        "sourceIds": [
          "source-internal-legacy-spots"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "palau-musica",
      "cityId": "barcelona",
      "nameJa": "カタルーニャ音楽堂",
      "nameLocal": "Palau de la Música Catalana",
      "kind": "attraction",
      "area": "El Born周辺",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Palau+de+la+Musica+Catalana+Barcelona",
      "officialUrl": "https://www.palaumusica.cat/en/visites/visits-and-tickets_1159168",
      "articleIds": [
        "barcelona-overview",
        "barcelona-modernisme-palau",
        "barcelona-old-city"
      ],
      "legacyAnchor": null,
      "summary": "ModernismeをGaudí以外の建築と音楽文化から比較する高影響候補。見学枠と公演利用は分けて判断する。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": 75,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "recommended",
        "priceNotes": [
          "旅行日の料金・対象区分は未確認。訪問前に公式情報を再確認する。"
        ],
        "accessNotes": [
          "El Born・旧市街側の候補として既存動線との重なりを比較する。"
        ],
        "closureNotes": [
          "旅行日の見学枠・公演日は未確認。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-palau-musica-visits"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "picasso-museum",
      "cityId": "barcelona",
      "nameJa": "ピカソ美術館",
      "nameLocal": "Museu Picasso Barcelona",
      "kind": "museum",
      "area": "El Born",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Museu+Picasso+Barcelona",
      "officialUrl": "https://museupicassobcn.cat/en/plan-your-visit/buy-tickets-and-opening-hours",
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "BarcelonaとPicasso初期の関係を理解する非Gaudí文化候補。El Born街歩きと同一エリアで比較する。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": 120,
        "durationMinimumMinutes": 60,
        "bookingRequirement": "recommended",
        "priceNotes": [
          "旅行日の料金・対象区分は未確認。訪問前に公式情報を再確認する。"
        ],
        "accessNotes": [
          "El Bornの徒歩動線へ内包できるか比較する。"
        ],
        "closureNotes": [
          "旅行日の開館・入場枠は未確認。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-picasso-opening-hours"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "mnac",
      "cityId": "barcelona",
      "nameJa": "カタルーニャ美術館（MNAC）",
      "nameLocal": "Museu Nacional d’Art de Catalunya",
      "kind": "museum",
      "area": "Montjuïc",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Museu+Nacional+d%27Art+de+Catalunya",
      "officialUrl": "https://www.museunacional.cat/en/opening-hours-and-prices",
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "カタルーニャ美術を長い時間軸で見る非Gaudí文化候補。Montjuïcの移動負荷と既存予定への圧縮を比較する。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": 150,
        "durationMinimumMinutes": 90,
        "bookingRequirement": "recommended",
        "priceNotes": [
          "旅行日の料金・対象区分は未確認。訪問前に公式情報を再確認する。"
        ],
        "accessNotes": [
          "Montjuïc内の移動・高低差を含めて所要を判断する。"
        ],
        "closureNotes": [
          "旅行日の開館・入場枠は未確認。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-mnac-opening-hours-prices"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "santa-caterina-market",
      "cityId": "barcelona",
      "nameJa": "サンタ・カテリーナ市場",
      "nameLocal": "Mercat de Santa Caterina",
      "kind": "market",
      "area": "Ciutat Vella / El Born周辺",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Mercat+de+Santa+Caterina+Barcelona",
      "officialUrl": "https://www.mercatdesantacaterina.com/en/history",
      "articleIds": [
        "barcelona-old-city",
        "catalan-winter-food"
      ],
      "legacyAnchor": null,
      "summary": "市場建築と食体験を比較する候補。ボケリアと重複採用せず、市場朝食の役割と混雑・動線で比較する。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": 60,
        "durationMinimumMinutes": 30,
        "bookingRequirement": "not_required",
        "priceNotes": [
          "旅行日の料金・対象区分は未確認。訪問前に公式情報を再確認する。"
        ],
        "accessNotes": [
          "大聖堂・El Born側の動線と組み合わせる余地を比較する。"
        ],
        "closureNotes": [
          "旅行日の市場・飲食区画の営業は未確認。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-santa-caterina-history"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "ciutadella-arc-triomf",
      "cityId": "barcelona",
      "nameJa": "シウタデリャ公園／凱旋門",
      "nameLocal": "Parc de la Ciutadella / Arc de Triomf",
      "kind": "park",
      "area": "Ciutadella",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Parc+de+la+Ciutadella+Arc+de+Triomf+Barcelona",
      "officialUrl": "https://barcelonaturisme.com/wv3/ent/page/5067/parc-de-la-ciutadella.html",
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "1888年万博の都市軸を公園と凱旋門で歩く候補。屋外時間と天候、El Bornからの徒歩負荷で比較する。",
      "visitInfo": {
        "status": "unverified",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "not_required",
        "priceNotes": [
          "旅行日の料金・対象区分は未確認。訪問前に公式情報を再確認する。"
        ],
        "accessNotes": [
          "公園と凱旋門を一つの街歩き軸として扱い、重複Placeを作らない。"
        ],
        "closureNotes": [
          "屋外中心。天候と日没時刻を直前確認する。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-ciutadella-tourism",
          "source-arc-triomf-tourism"
        ]
      },
      "foodProfile": null
    },
    {
      "id": "can-culleretes",
      "cityId": "barcelona",
      "nameJa": "カン・クリェレテス",
      "nameLocal": "Can Culleretes",
      "kind": "food",
      "inclusionStatus": "undecided",
      "area": "Barri Gòtic / La Rambla",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Can%20Culleretes%20Barcelona",
      "officialUrl": "https://culleretes.com/",
      "articleIds": [
        "catalan-winter-food"
      ],
      "legacyAnchor": null,
      "summary": "伝統・冬料理の主候補。しっかりした食事で滞在は長め、予約推奨。営業根拠と歴史的評価を分離して記録。",
      "visitInfo": {
        "status": "provisional",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "recommended",
        "priceNotes": [
          "価格帯の比較値はmid。旅行日メニュー・価格は未確認。"
        ],
        "accessNotes": [
          "Barri Gòtic / La Rambla。既存旅程との距離と移動負荷を比較する。"
        ],
        "closureNotes": [
          "現在営業を旅行時点まで保証しない。",
          "2026/27年末年始の営業を予約・訪問前に公式で再確認する。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-can-culleretes-official",
          "source-barcelona-city-can-culleretes"
        ]
      },
      "foodProfile": {
        "venueType": "restaurant",
        "cuisineTags": [
          "Catalan",
          "traditional",
          "winter"
        ],
        "specialtyDishIds": [
          "dish-escudella",
          "dish-canelons",
          "dish-botifarra-mongetes",
          "dish-crema-catalana",
          "dish-escalivada"
        ],
        "mealTypes": [
          "lunch",
          "dinner"
        ],
        "heaviness": "hearty",
        "pace": "long",
        "atmosphereTags": [
          "historic"
        ],
        "priceBand": "mid",
        "walkInSuitability": "possible",
        "dietaryNotes": [
          "食物アレルギー・食事制限への対応は予約・訪問前に店舗へ確認する。"
        ],
        "sourceIds": [
          "source-can-culleretes-official",
          "source-barcelona-city-can-culleretes"
        ]
      }
    },
    {
      "id": "restaurant-7-portes",
      "cityId": "barcelona",
      "nameJa": "7ポルテス",
      "nameLocal": "Restaurant 7 Portes",
      "kind": "food",
      "inclusionStatus": "undecided",
      "area": "El Born / Port Vell",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Restaurant%207%20Portes%20Barcelona",
      "officialUrl": "https://7portes.com/ca/reservar-taula-restaurant/",
      "articleIds": [
        "catalan-winter-food",
        "barcelona-seafood-market-bar"
      ],
      "legacyAnchor": null,
      "summary": "伝統料理と魚介・米／麺の両役割を担う候補。食事は重く長めで予約推奨。",
      "visitInfo": {
        "status": "provisional",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "recommended",
        "priceNotes": [
          "価格帯の比較値はhigh。旅行日メニュー・価格は未確認。"
        ],
        "accessNotes": [
          "El Born / Port Vell。既存旅程との距離と移動負荷を比較する。"
        ],
        "closureNotes": [
          "現在営業を旅行時点まで保証しない。",
          "2026/27年末年始の営業を予約・訪問前に公式で再確認する。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-7-portes-official",
          "source-barcelona-bus-turistic-7-portes"
        ]
      },
      "foodProfile": {
        "venueType": "restaurant",
        "cuisineTags": [
          "Catalan",
          "traditional",
          "rice",
          "seafood"
        ],
        "specialtyDishIds": [
          "dish-fideua",
          "dish-seafood",
          "dish-canelons",
          "dish-crema-catalana"
        ],
        "mealTypes": [
          "lunch",
          "dinner"
        ],
        "heaviness": "hearty",
        "pace": "long",
        "atmosphereTags": [
          "historic"
        ],
        "priceBand": "high",
        "walkInSuitability": "poor",
        "dietaryNotes": [
          "食物アレルギー・食事制限への対応は予約・訪問前に店舗へ確認する。"
        ],
        "sourceIds": [
          "source-7-portes-official",
          "source-barcelona-bus-turistic-7-portes"
        ]
      }
    },
    {
      "id": "can-sole",
      "cityId": "barcelona",
      "nameJa": "カン・ソレ",
      "nameLocal": "Can Solé",
      "kind": "food",
      "inclusionStatus": "undecided",
      "area": "Barceloneta",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Can%20Sol%C3%A9%20Barcelona",
      "officialUrl": "https://restaurantcansole.com/en/",
      "articleIds": [
        "barcelona-seafood-market-bar"
      ],
      "legacyAnchor": null,
      "summary": "Barcelonetaの魚介・米／麺候補。価格・時間とも大きく、予約と休日営業の確認が必要。",
      "visitInfo": {
        "status": "provisional",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "recommended",
        "priceNotes": [
          "価格帯の比較値はhigh。旅行日メニュー・価格は未確認。"
        ],
        "accessNotes": [
          "Barceloneta。既存旅程との距離と移動負荷を比較する。"
        ],
        "closureNotes": [
          "現在営業を旅行時点まで保証しない。",
          "2026/27年末年始の営業を予約・訪問前に公式で再確認する。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-can-sole-official",
          "source-barcelona-tourism-can-sole"
        ]
      },
      "foodProfile": {
        "venueType": "restaurant",
        "cuisineTags": [
          "seafood",
          "rice",
          "traditional"
        ],
        "specialtyDishIds": [
          "dish-fideua",
          "dish-seafood"
        ],
        "mealTypes": [
          "lunch",
          "dinner"
        ],
        "heaviness": "hearty",
        "pace": "long",
        "atmosphereTags": [
          "historic",
          "seafood"
        ],
        "priceBand": "high",
        "walkInSuitability": "poor",
        "dietaryNotes": [
          "食物アレルギー・食事制限への対応は予約・訪問前に店舗へ確認する。"
        ],
        "sourceIds": [
          "source-can-sole-official",
          "source-barcelona-tourism-can-sole"
        ]
      }
    },
    {
      "id": "el-quim-boqueria",
      "cityId": "barcelona",
      "nameJa": "エル・キム・デ・ラ・ボケリア",
      "nameLocal": "El Quim de la Boqueria",
      "kind": "food",
      "inclusionStatus": "undecided",
      "area": "Mercat de la Boqueria",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=El%20Quim%20de%20la%20Boqueria%20Barcelona",
      "officialUrl": "https://elquimdelaboqueria.com/menu-2/?lang=en",
      "articleIds": [
        "barcelona-seafood-market-bar"
      ],
      "legacyAnchor": null,
      "summary": "市場朝食の主候補。予約不要でも行列で所要が延びるため、12/30の時間制約と比較する。",
      "visitInfo": {
        "status": "provisional",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "not_required",
        "priceNotes": [
          "価格帯の比較値はmid。旅行日メニュー・価格は未確認。"
        ],
        "accessNotes": [
          "Mercat de la Boqueria。既存旅程との距離と移動負荷を比較する。"
        ],
        "closureNotes": [
          "現在営業を旅行時点まで保証しない。",
          "2026/27年末年始の営業を予約・訪問前に公式で再確認する。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-el-quim-official",
          "source-repsol-el-quim",
          "source-www-boqueria-barcelona-home"
        ]
      },
      "foodProfile": {
        "venueType": "market",
        "cuisineTags": [
          "market breakfast",
          "Catalan",
          "casual"
        ],
        "specialtyDishIds": [
          "dish-botifarra-mongetes",
          "dish-escalivada",
          "dish-crema-catalana",
          "dish-seafood"
        ],
        "mealTypes": [
          "breakfast",
          "lunch",
          "snack"
        ],
        "heaviness": "varies",
        "pace": "standard",
        "atmosphereTags": [
          "market",
          "counter"
        ],
        "priceBand": "mid",
        "walkInSuitability": "good",
        "dietaryNotes": [
          "食物アレルギー・食事制限への対応は予約・訪問前に店舗へ確認する。"
        ],
        "sourceIds": [
          "source-el-quim-official",
          "source-repsol-el-quim"
        ]
      }
    },
    {
      "id": "bar-joan-santa-caterina",
      "cityId": "barcelona",
      "nameJa": "バル・ジョアン",
      "nameLocal": "Bar Joan",
      "kind": "food",
      "inclusionStatus": "undecided",
      "area": "Mercat de Santa Caterina",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Bar%20Joan%20Barcelona",
      "officialUrl": "https://mercatsantacaterina.com/ca/parada/bar-joan/",
      "articleIds": [
        "barcelona-seafood-market-bar"
      ],
      "legacyAnchor": null,
      "summary": "サンタ・カテリーナ市場の朝食・軽食代替。短時間・低価格寄りだが市場休日を再確認する。",
      "visitInfo": {
        "status": "provisional",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "not_required",
        "priceNotes": [
          "価格帯の比較値はlow。旅行日メニュー・価格は未確認。"
        ],
        "accessNotes": [
          "Mercat de Santa Caterina。既存旅程との距離と移動負荷を比較する。"
        ],
        "closureNotes": [
          "現在営業を旅行時点まで保証しない。",
          "2026/27年末年始の営業を予約・訪問前に公式で再確認する。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-bar-joan-official-market",
          "source-el-pais-bar-joan-2026"
        ]
      },
      "foodProfile": {
        "venueType": "market",
        "cuisineTags": [
          "market breakfast",
          "casual"
        ],
        "specialtyDishIds": [
          "dish-pan-con-tomate"
        ],
        "mealTypes": [
          "breakfast",
          "lunch",
          "snack"
        ],
        "heaviness": "varies",
        "pace": "quick",
        "atmosphereTags": [
          "market",
          "local"
        ],
        "priceBand": "low",
        "walkInSuitability": "good",
        "dietaryNotes": [
          "食物アレルギー・食事制限への対応は予約・訪問前に店舗へ確認する。"
        ],
        "sourceIds": [
          "source-bar-joan-official-market",
          "source-el-pais-bar-joan-2026"
        ]
      }
    },
    {
      "id": "el-xampanyet",
      "cityId": "barcelona",
      "nameJa": "エル・シャンパニェット",
      "nameLocal": "El Xampanyet",
      "kind": "food",
      "inclusionStatus": "undecided",
      "area": "El Born",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=El%20Xampanyet%20Barcelona",
      "officialUrl": "https://www.elxampanyet.com/",
      "articleIds": [
        "barcelona-old-city",
        "barcelona-seafood-market-bar"
      ],
      "legacyAnchor": null,
      "summary": "予約なしバルの主候補。軽い保存魚と飲み物の文化を短時間で試せるが、混雑・立席を見込む。",
      "visitInfo": {
        "status": "provisional",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "not_required",
        "priceNotes": [
          "価格帯の比較値はmid。旅行日メニュー・価格は未確認。"
        ],
        "accessNotes": [
          "El Born。既存旅程との距離と移動負荷を比較する。"
        ],
        "closureNotes": [
          "現在営業を旅行時点まで保証しない。",
          "2026/27年末年始の営業を予約・訪問前に公式で再確認する。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-el-xampanyet-official",
          "source-conde-nast-el-xampanyet"
        ]
      },
      "foodProfile": {
        "venueType": "bar",
        "cuisineTags": [
          "cava",
          "vermut",
          "tapas",
          "conserves"
        ],
        "specialtyDishIds": [
          "dish-cava",
          "dish-vermut",
          "dish-seafood"
        ],
        "mealTypes": [
          "snack",
          "bar"
        ],
        "heaviness": "light",
        "pace": "quick",
        "atmosphereTags": [
          "historic",
          "crowded"
        ],
        "priceBand": "mid",
        "walkInSuitability": "possible",
        "dietaryNotes": [
          "食物アレルギー・食事制限への対応は予約・訪問前に店舗へ確認する。"
        ],
        "sourceIds": [
          "source-el-xampanyet-official",
          "source-conde-nast-el-xampanyet"
        ]
      }
    },
    {
      "id": "quimet-quimet",
      "cityId": "barcelona",
      "nameJa": "キメット・イ・キメット",
      "nameLocal": "Quimet & Quimet",
      "kind": "food",
      "inclusionStatus": "undecided",
      "area": "Poble-sec",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Quimet%20%26%20Quimet%20Barcelona",
      "officialUrl": "https://quimetiquimet.com/en/our-tapas/",
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "Poble-secの予約なしバル代替。軽いが立ち飲み・混雑・家族の快適性を確認する。",
      "visitInfo": {
        "status": "provisional",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "unknown",
        "priceNotes": [
          "価格帯の比較値はmid。旅行日メニュー・価格は未確認。"
        ],
        "accessNotes": [
          "Poble-sec。既存旅程との距離と移動負荷を比較する。"
        ],
        "closureNotes": [
          "現在営業を旅行時点まで保証しない。",
          "2026/27年末年始の営業を予約・訪問前に公式で再確認する。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-quimet-quimet-official",
          "source-repsol-quimet-quimet"
        ]
      },
      "foodProfile": {
        "venueType": "bar",
        "cuisineTags": [
          "vermut",
          "cava",
          "montaditos",
          "conserves"
        ],
        "specialtyDishIds": [
          "dish-cava",
          "dish-vermut",
          "dish-pan-con-tomate",
          "dish-seafood"
        ],
        "mealTypes": [
          "snack",
          "bar"
        ],
        "heaviness": "light",
        "pace": "quick",
        "atmosphereTags": [
          "standing",
          "crowded"
        ],
        "priceBand": "mid",
        "walkInSuitability": "possible",
        "dietaryNotes": [
          "食物アレルギー・食事制限への対応は予約・訪問前に店舗へ確認する。"
        ],
        "sourceIds": [
          "source-quimet-quimet-official",
          "source-repsol-quimet-quimet"
        ]
      }
    },
    {
      "id": "la-cova-fumada",
      "cityId": "barcelona",
      "nameJa": "ラ・コバ・フマダ",
      "nameLocal": "La Cova Fumada",
      "kind": "food",
      "inclusionStatus": "undecided",
      "area": "Barceloneta",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=La%20Cova%20Fumada%20Barcelona",
      "officialUrl": "https://lacovafumada.com/",
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "ボンバと海辺のバル文化候補。営業時間が短く行列リスクがあるため主食事枠に固定しない。",
      "visitInfo": {
        "status": "provisional",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "not_required",
        "priceNotes": [
          "価格帯の比較値はlow。旅行日メニュー・価格は未確認。"
        ],
        "accessNotes": [
          "Barceloneta。既存旅程との距離と移動負荷を比較する。"
        ],
        "closureNotes": [
          "現在営業を旅行時点まで保証しない。",
          "2026/27年末年始の営業を予約・訪問前に公式で再確認する。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-la-cova-fumada-official",
          "source-repsol-la-cova-fumada"
        ]
      },
      "foodProfile": {
        "venueType": "bar",
        "cuisineTags": [
          "Barcelona",
          "tapas",
          "seafood"
        ],
        "specialtyDishIds": [
          "dish-bomba-barceloneta",
          "dish-seafood"
        ],
        "mealTypes": [
          "breakfast",
          "lunch",
          "snack"
        ],
        "heaviness": "medium",
        "pace": "quick",
        "atmosphereTags": [
          "historic",
          "queue"
        ],
        "priceBand": "low",
        "walkInSuitability": "possible",
        "dietaryNotes": [
          "食物アレルギー・食事制限への対応は予約・訪問前に店舗へ確認する。"
        ],
        "sourceIds": [
          "source-la-cova-fumada-official",
          "source-repsol-la-cova-fumada"
        ]
      }
    },
    {
      "id": "cal-boter",
      "cityId": "barcelona",
      "nameJa": "カル・ボテル",
      "nameLocal": "Cal Boter",
      "kind": "food",
      "inclusionStatus": "undecided",
      "area": "Gràcia",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Cal%20Boter%20Barcelona",
      "officialUrl": "https://www.restaurantcalboter.com/",
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "Gràciaの伝統料理代替。中価格・標準滞在で、曜日と予約条件を確認する。",
      "visitInfo": {
        "status": "provisional",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "recommended",
        "priceNotes": [
          "価格帯の比較値はmid。旅行日メニュー・価格は未確認。"
        ],
        "accessNotes": [
          "Gràcia。既存旅程との距離と移動負荷を比較する。"
        ],
        "closureNotes": [
          "現在営業を旅行時点まで保証しない。",
          "2026/27年末年始の営業を予約・訪問前に公式で再確認する。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-cal-boter-official",
          "source-repsol-cal-boter"
        ]
      },
      "foodProfile": {
        "venueType": "restaurant",
        "cuisineTags": [
          "Catalan",
          "traditional",
          "fork breakfast"
        ],
        "specialtyDishIds": [
          "dish-botifarra-mongetes",
          "dish-escalivada",
          "dish-seafood"
        ],
        "mealTypes": [
          "breakfast",
          "lunch",
          "dinner"
        ],
        "heaviness": "hearty",
        "pace": "standard",
        "atmosphereTags": [
          "local",
          "casual"
        ],
        "priceBand": "mid",
        "walkInSuitability": "possible",
        "dietaryNotes": [
          "食物アレルギー・食事制限への対応は予約・訪問前に店舗へ確認する。"
        ],
        "sourceIds": [
          "source-cal-boter-official",
          "source-repsol-cal-boter"
        ]
      }
    },
    {
      "id": "besta",
      "cityId": "barcelona",
      "nameJa": "ベスタ",
      "nameLocal": "Besta",
      "kind": "food",
      "inclusionStatus": "undecided",
      "area": "Eixample / Aribau",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Besta%20Barcelona",
      "officialUrl": "https://www.bestabarcelona.com/en/",
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "現代的な特別な一食の主候補。伝統料理の代替ではなく、長時間・高価格・予約前提の別役割。",
      "visitInfo": {
        "status": "provisional",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "recommended",
        "priceNotes": [
          "価格帯の比較値はspecial。旅行日メニュー・価格は未確認。"
        ],
        "accessNotes": [
          "Eixample / Aribau。既存旅程との距離と移動負荷を比較する。"
        ],
        "closureNotes": [
          "現在営業を旅行時点まで保証しない。",
          "2026/27年末年始の営業を予約・訪問前に公式で再確認する。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-besta-official",
          "source-michelin-besta"
        ]
      },
      "foodProfile": {
        "venueType": "restaurant",
        "cuisineTags": [
          "modern",
          "Catalonia",
          "Galicia",
          "seafood"
        ],
        "specialtyDishIds": [
          "dish-seafood"
        ],
        "mealTypes": [
          "lunch",
          "dinner"
        ],
        "heaviness": "varies",
        "pace": "long",
        "atmosphereTags": [
          "modern",
          "special"
        ],
        "priceBand": "special",
        "walkInSuitability": "poor",
        "dietaryNotes": [
          "食物アレルギー・食事制限への対応は予約・訪問前に店舗へ確認する。"
        ],
        "sourceIds": [
          "source-besta-official",
          "source-michelin-besta"
        ]
      }
    },
    {
      "id": "dos-pebrots",
      "cityId": "barcelona",
      "nameJa": "ドス・ペブロッツ",
      "nameLocal": "Dos Pebrots",
      "kind": "food",
      "inclusionStatus": "undecided",
      "area": "Raval",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Dos%20Pebrots%20Barcelona",
      "officialUrl": "https://www.dospebrots.com/en/",
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "地中海料理史を再解釈する特別食候補。特定Dish availabilityは推測せず、年末休業リスクを高く見る。",
      "visitInfo": {
        "status": "provisional",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "recommended",
        "priceNotes": [
          "価格帯の比較値はspecial。旅行日メニュー・価格は未確認。"
        ],
        "accessNotes": [
          "Raval。既存旅程との距離と移動負荷を比較する。"
        ],
        "closureNotes": [
          "現在営業を旅行時点まで保証しない。",
          "2026/27年末年始の営業を予約・訪問前に公式で再確認する。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-dos-pebrots-official",
          "source-michelin-dos-pebrots"
        ]
      },
      "foodProfile": {
        "venueType": "restaurant",
        "cuisineTags": [
          "modern",
          "historical Mediterranean"
        ],
        "specialtyDishIds": [],
        "mealTypes": [
          "lunch",
          "dinner"
        ],
        "heaviness": "varies",
        "pace": "long",
        "atmosphereTags": [
          "modern",
          "special"
        ],
        "priceBand": "special",
        "walkInSuitability": "poor",
        "dietaryNotes": [
          "食物アレルギー・食事制限への対応は予約・訪問前に店舗へ確認する。"
        ],
        "sourceIds": [
          "source-dos-pebrots-official",
          "source-michelin-dos-pebrots"
        ]
      }
    },
    {
      "id": "fonda-balmes",
      "cityId": "barcelona",
      "nameJa": "フォンダ・バルメス",
      "nameLocal": "Fonda Balmes",
      "kind": "food",
      "inclusionStatus": "undecided",
      "area": "Eixample / Balmes",
      "address": null,
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Fonda%20Balmes%20Barcelona",
      "officialUrl": "https://fondabalmes.cat/en/",
      "articleIds": [],
      "legacyAnchor": null,
      "summary": "現代的なカタルーニャ料理候補。伝統と現在をつなぐが、特別価格・予約・休日営業を確認する。",
      "visitInfo": {
        "status": "provisional",
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 45,
        "bookingRequirement": "recommended",
        "priceNotes": [
          "価格帯の比較値はspecial。旅行日メニュー・価格は未確認。"
        ],
        "accessNotes": [
          "Eixample / Balmes。既存旅程との距離と移動負荷を比較する。"
        ],
        "closureNotes": [
          "現在営業を旅行時点まで保証しない。",
          "2026/27年末年始の営業を予約・訪問前に公式で再確認する。"
        ],
        "tripDateWindows": [],
        "sourceIds": [
          "source-fonda-balmes-official",
          "source-la-vanguardia-fonda-balmes"
        ]
      },
      "foodProfile": {
        "venueType": "restaurant",
        "cuisineTags": [
          "modern Catalan",
          "traditional"
        ],
        "specialtyDishIds": [
          "dish-esqueixada-bacalla"
        ],
        "mealTypes": [
          "lunch",
          "dinner"
        ],
        "heaviness": "varies",
        "pace": "long",
        "atmosphereTags": [
          "modern",
          "special"
        ],
        "priceBand": "special",
        "walkInSuitability": "poor",
        "dietaryNotes": [
          "食物アレルギー・食事制限への対応は予約・訪問前に店舗へ確認する。"
        ],
        "sourceIds": [
          "source-fonda-balmes-official",
          "source-la-vanguardia-fonda-balmes"
        ]
      }
    }
  ],
  "scheduleItems": [
    {
      "id": "d1225-nrt-airport-arrival",
      "dayId": "d1225",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "成田空港到着・航空会社／terminal確認",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "19:30国際線の3時間前。運航会社によりterminal表示が変わるため私的予約画面で再確認。"
      ],
      "sequence": 5,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-25",
          "time": "16:30",
          "timeZone": "Asia/Tokyo"
        },
        "end": {
          "date": "2026-12-25",
          "time": "17:00",
          "timeZone": "Asia/Tokyo"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1225-airport-meal",
      "dayId": "d1225",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "出国前の早めの夕食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [
        "保安検査混雑時は軽食へ短縮。"
      ],
      "sequence": 7,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-25",
          "time": "17:00",
          "timeZone": "Asia/Tokyo"
        },
        "end": {
          "date": "2026-12-25",
          "time": "18:00",
          "timeZone": "Asia/Tokyo"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1225-nrt-depart",
      "dayId": "d1225",
      "kind": "flight",
      "parentId": null,
      "placeId": null,
      "title": "NRT T1 発",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "fixed",
      "priority": "必須",
      "bookingId": "flight",
      "articleId": null,
      "fatigueEvidence": "長距離フライト開始",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 10,
      "groupId": null,
      "inclusionStatus": "adopted",
      "planningStatus": "confirmed",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "point",
        "start": {
          "date": "2026-12-25",
          "time": "19:30",
          "timeZone": "Asia/Tokyo"
        },
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "confirmed"
      }
    },
    {
      "id": "d1225-pvg-arrive",
      "dayId": "d1225",
      "kind": "flight",
      "parentId": null,
      "placeId": null,
      "title": "PVG T2 着・同ターミナル乗継",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "fixed",
      "priority": "必須",
      "bookingId": "flight",
      "articleId": null,
      "fatigueEvidence": "夜間乗継",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "adopted",
      "planningStatus": "confirmed",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "point",
        "start": {
          "date": "2026-12-25",
          "time": "22:15",
          "timeZone": "Asia/Shanghai"
        },
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "confirmed"
      }
    },
    {
      "id": "d1225-pvg-transfer",
      "dayId": "d1225",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "PVG乗継・保安検査・搭乗口確認",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "同一券、through baggage、terminal、airside動線が確認できない限り安全確定にしない。"
      ],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-25",
          "time": "22:15",
          "timeZone": "Asia/Shanghai"
        },
        "end": {
          "date": "2026-12-26",
          "time": "00:15",
          "timeZone": "Asia/Shanghai"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1226-pvg-bcn",
      "dayId": "d1226",
      "kind": "flight",
      "parentId": null,
      "placeId": null,
      "title": "PVG T2 発 → BCN T1 着",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "fixed",
      "priority": "必須",
      "bookingId": "flight",
      "articleId": null,
      "fatigueEvidence": "夜行長距離便",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 10,
      "groupId": "group-d1226-arrival",
      "inclusionStatus": "adopted",
      "planningStatus": "confirmed",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-26",
          "time": "00:45",
          "timeZone": "Asia/Shanghai"
        },
        "end": {
          "date": "2026-12-26",
          "time": "07:25",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "confirmed"
      }
    },
    {
      "id": "d1226-arrival-processing",
      "dayId": "d1226",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "入国審査・荷物受取・税関",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "混雑時は後続のCasa Batllóを削る。"
      ],
      "sequence": 15,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-26",
          "time": "07:25",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-26",
          "time": "09:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1226-airport-city",
      "dayId": "d1226",
      "kind": "transfer",
      "parentId": null,
      "placeId": "barcelona-airport",
      "title": "BCN空港 → 市内（荷物受取後）",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": "barcelona-overview",
      "fatigueEvidence": "到着直後の荷物を伴う移動",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "10:45出発。到着90分遅延時も後続のCasa Batllóを第一削減する。"
      ],
      "sequence": 20,
      "groupId": "group-d1226-arrival",
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-26",
          "time": "10:45",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-26",
          "time": "11:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1226-hotel-drop",
      "dayId": "d1226",
      "kind": "hotel",
      "parentId": null,
      "placeId": "hotel-barcelona",
      "title": "ホテルへ荷物預け",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "ホテル所在地未登録",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "ホテル所在地・荷物預入可否は私的予約情報で要確認。客室利用やearly check-inを前提にしない。"
      ],
      "sequence": 30,
      "groupId": "group-d1226-arrival",
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-26",
          "time": "11:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-26",
          "time": "12:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1226-brunch",
      "dayId": "d1226",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "到着後の軽い昼食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [
        "予約店に依存せず、ホテルまたはCasa Milà動線上の営業中店舗で確保。"
      ],
      "sequence": 35,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-26",
          "time": "12:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-26",
          "time": "13:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1226-recovery",
      "dayId": "d1226",
      "kind": "rest",
      "parentId": null,
      "placeId": null,
      "title": "BCN T1公共到着ロビーで着席休憩",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "夜行便後。Aena掲載のT1到着公共エリア店舗・座席を利用し、客室を前提にしない。",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "09:15–10:45、T1到着公共エリアのStarbucks等で着席。Aena通常表示はStarbucks 05:00–21:00。",
        "early check-inは前提にしない。確定した場合だけホテル客室休憩へ昇格する。",
        "12/26特別営業は未公表。店舗休業でも公共到着ロビーで休み、飲食は営業中の空港店舗へ切替。",
        "Source: source-aena-bcn-t1-starbucks (checked 2026-07-24; recheck 2026-12-25)."
      ],
      "sequence": 17,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-26",
          "time": "09:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-26",
          "time": "10:45",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1226-mila",
      "dayId": "d1226",
      "kind": "attraction",
      "parentId": null,
      "placeId": "mila",
      "title": "カサ・ミラ（ラ・ペドレラ）",
      "durationIdealMinutes": 90,
      "durationMinimumMinutes": 60,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "mila",
      "articleId": "mila",
      "fatigueEvidence": "到着日に複数施設",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 2,
      "notes": [
        "2026入場枠未公表。14:30前後の枠を発売後に確定。"
      ],
      "sequence": 50,
      "groupId": "group-d1226-gaudi",
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-26",
          "time": "14:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-26",
          "time": "16:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": 60,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1226-batllo",
      "dayId": "d1226",
      "kind": "attraction",
      "parentId": null,
      "placeId": "batllo",
      "title": "カサ・バトリョ",
      "durationIdealMinutes": 75,
      "durationMinimumMinutes": 45,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": "batllo",
      "articleId": "batllo",
      "fatigueEvidence": "到着日に複数施設",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 1,
      "notes": [
        "到着90分遅延、疲労、前施設遅延時の第一削減。"
      ],
      "sequence": 60,
      "groupId": "group-d1226-gaudi",
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-26",
          "time": "16:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-26",
          "time": "17:45",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": 75,
        "durationMinimumMinutes": 45,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1226-dinner",
      "dayId": "d1226",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "ホテル近隣の軽い夕食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [
        "予約不要の近隣店を当日選び、満席なら持帰りへ切替。"
      ],
      "sequence": 70,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-26",
          "time": "18:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-26",
          "time": "19:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1226-guell-palace",
      "dayId": "d1226",
      "kind": "attraction",
      "parentId": null,
      "placeId": "guell-palace",
      "title": "グエル邸",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "palau-guell",
      "fatigueEvidence": "到着日に複数施設",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "旧計画の09:30〜13:00枠。€12要確認という旧情報を保持。",
        "Phase 3.1見送り: 到着日は同一街区の住宅2件まで。公園は12/28へ移動し、グエル邸は12/26休館、季節市は2026日程未公表。"
      ],
      "sequence": 70,
      "groupId": "group-d1226-gaudi",
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1226-placa-rei",
      "dayId": "d1226",
      "kind": "attraction",
      "parentId": null,
      "placeId": "placa-rei",
      "title": "王の広場",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "予備",
      "bookingId": null,
      "articleId": "barcelona-old-city",
      "fatigueEvidence": "到着日午後の街歩き",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "14:00以降の複合枠から分割。",
        "Phase 3.1見送り: 到着日は同一街区の住宅2件まで。公園は12/28へ移動し、グエル邸は12/26休館、季節市は2026日程未公表。"
      ],
      "sequence": 80,
      "groupId": "group-d1226-afternoon",
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1226-placa-reial",
      "dayId": "d1226",
      "kind": "attraction",
      "parentId": null,
      "placeId": "placa-reial",
      "title": "レイアール広場",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "予備",
      "bookingId": null,
      "articleId": "barcelona-old-city",
      "fatigueEvidence": "到着日午後の街歩き",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "14:00以降の複合枠から分割。",
        "Phase 3.1見送り: 到着日は同一街区の住宅2件まで。公園は12/28へ移動し、グエル邸は12/26休館、季節市は2026日程未公表。"
      ],
      "sequence": 90,
      "groupId": "group-d1226-afternoon",
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1226-casa-vicens",
      "dayId": "d1226",
      "kind": "attraction",
      "parentId": null,
      "placeId": "casa-vicens",
      "title": "カサ・ビセンス",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "予備",
      "bookingId": null,
      "articleId": "casa-vicens",
      "fatigueEvidence": "到着日午後の追加施設",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "€23要確認という旧情報を保持。時刻は未登録。",
        "Phase 3.1見送り: 到着日は同一街区の住宅2件まで。公園は12/28へ移動し、グエル邸は12/26休館、季節市は2026日程未公表。"
      ],
      "sequence": 100,
      "groupId": "group-d1226-gaudi",
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1226-sant-pau",
      "dayId": "d1226",
      "kind": "attraction",
      "parentId": null,
      "placeId": "sant-pau",
      "title": "サン・パウ病院",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "予備",
      "bookingId": null,
      "articleId": "barcelona-modernisme-palau",
      "fatigueEvidence": "到着日午後の追加施設",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "€18要確認という旧情報を保持。時刻は未登録。",
        "Phase 3.1見送り: 到着日は同一街区の住宅2件まで。公園は12/28へ移動し、グエル邸は12/26休館、季節市は2026日程未公表。"
      ],
      "sequence": 110,
      "groupId": "group-d1226-afternoon",
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1226-fira-sagrada",
      "dayId": "d1226",
      "kind": "event",
      "parentId": null,
      "placeId": "fira-sagrada",
      "title": "Fira de Nadal la Sagrada Família",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "予備",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "到着日の夕方",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "旧scheduleの「夕方」を保持。",
        "Phase 3.1見送り: 到着日は同一街区の住宅2件まで。公園は12/28へ移動し、グエル邸は12/26休館、季節市は2026日程未公表。"
      ],
      "sequence": 120,
      "groupId": "group-d1226-afternoon",
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1227-breakfast",
      "dayId": "d1227",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "朝食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 5,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-27",
          "time": "08:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-27",
          "time": "09:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1227-sagrada",
      "dayId": "d1227",
      "kind": "attraction",
      "parentId": null,
      "placeId": "sagrada",
      "title": "サグラダ・ファミリア（鐘塔エレベーター付き）",
      "durationIdealMinutes": 150,
      "durationMinimumMinutes": 120,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "sagrada",
      "articleId": "sagrada",
      "fatigueEvidence": "塔付き見学",
      "weatherDependency": "中",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "現行PlaceのSunday暫定開始10:30に合わせたが、2026 tower slotは発売後確認。"
      ],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-27",
          "time": "10:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-27",
          "time": "13:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": 150,
        "durationMinimumMinutes": 120,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1227-columbus",
      "dayId": "d1227",
      "kind": "attraction",
      "parentId": null,
      "placeId": "columbus",
      "title": "コロンブス記念塔",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "できれば",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "午後の市内移動",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "€10要確認という旧情報を保持。",
        "Phase 3.1見送り: Sagrada中心日を市内横断・強風依存・終了済み可能性から守る。"
      ],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1227-lunch",
      "dayId": "d1227",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "Sagrada周辺で昼食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [
        "Phase 3.1-R1見送り: Can Culleretesを日曜昼へ移し、重複するSagrada周辺昼食を削除せずomittedで保持。"
      ],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1227-cable-miramar-castell",
      "dayId": "d1227",
      "kind": "transfer",
      "parentId": null,
      "placeId": "teleferic-port",
      "title": "Telefèric del Port Miramar → Castell駅",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "できれば",
      "bookingId": "montjuic",
      "articleId": null,
      "fatigueEvidence": "高所・乗換",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "€17.1要確認という旧情報を保持。",
        "Phase 3.1見送り: Sagrada中心日を市内横断・強風依存・終了済み可能性から守る。"
      ],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1227-sant-pau-exterior",
      "dayId": "d1227",
      "kind": "attraction",
      "parentId": null,
      "placeId": "sant-pau",
      "title": "サン・パウ病院 外観・街区観察",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "barcelona-modernisme-palau",
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "中",
      "shortenable": true,
      "dropRank": 1,
      "notes": [
        "09:15–09:45の外観だけ。雨・疲労・移動遅延時は省略してSagradaを守る。"
      ],
      "sequence": 10,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-27",
          "time": "09:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-27",
          "time": "09:45",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1227-montjuic-castle",
      "dayId": "d1227",
      "kind": "attraction",
      "parentId": null,
      "placeId": "montjuic",
      "title": "モンジュイック城",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "できれば",
      "bookingId": "montjuic",
      "articleId": null,
      "fatigueEvidence": "丘の頂上",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "Phase 3.1見送り: Sagrada中心日を市内横断・強風依存・終了済み可能性から守る。"
      ],
      "sequence": 40,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1227-rest",
      "dayId": "d1227",
      "kind": "rest",
      "parentId": null,
      "placeId": null,
      "title": "旧市街短時間散策またはホテル休憩",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": "barcelona-old-city",
      "fatigueEvidence": "疲労回復のための明示的buffer",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "重い昼食後に高密度観光を追加しない。疲労時は散策をせずホテルへ戻る。"
      ],
      "sequence": 50,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-27",
          "time": "15:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-27",
          "time": "18:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1227-cable-castell-park",
      "dayId": "d1227",
      "kind": "transfer",
      "parentId": null,
      "placeId": "teleferic-port",
      "title": "Telefèric del Port Castell → モンジュイック公園",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "できれば",
      "bookingId": "montjuic",
      "articleId": null,
      "fatigueEvidence": "高所・乗換",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "Phase 3.1見送り: Sagrada中心日を市内横断・強風依存・終了済み可能性から守る。"
      ],
      "sequence": 50,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1227-culleretes",
      "dayId": "d1227",
      "kind": "meal",
      "parentId": null,
      "placeId": "can-culleretes",
      "title": "伝統カタルーニャ料理候補：Can Culleretes",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "catalan-winter-food",
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [
        "通常営業時間の日曜昼13:00–15:45内。2026/27年末特別営業・メニュー・予約枠は未公表のためconditional。",
        "休業・満席時は7 Portes 13:45–15:15へ切替し、canelons等の伝統カタルーニャ料理役割を維持。",
        "2026-11-26、予約時、2026-12-26に公式再確認。"
      ],
      "sequence": 40,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "recommended",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-27",
          "time": "13:45",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-27",
          "time": "15:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1227-el-corte",
      "dayId": "d1227",
      "kind": "free",
      "parentId": null,
      "placeId": "el-corte",
      "title": "エル・コルテ・イングレス",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "予備",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "観光後の買い物",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "旧schedule記載の9:00〜21:00を保持。",
        "Phase 3.1見送り: Sagrada中心日を市内横断・強風依存・終了済み可能性から守る。"
      ],
      "sequence": 60,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1227-fira-santa-llucia",
      "dayId": "d1227",
      "kind": "event",
      "parentId": null,
      "placeId": "fira-santa-llucia",
      "title": "Fira de Santa Llúcia",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "予備",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "観光後の夕方",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "Phase 3.1見送り: Sagrada中心日を市内横断・強風依存・終了済み可能性から守る。"
      ],
      "sequence": 70,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1228-breakfast",
      "dayId": "d1228",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "朝食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 5,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-28",
          "time": "08:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-28",
          "time": "08:45",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1226-parkguell",
      "dayId": "d1228",
      "kind": "attraction",
      "parentId": null,
      "placeId": "parkguell",
      "title": "グエル公園",
      "durationIdealMinutes": 150,
      "durationMinimumMinutes": 90,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "parkguell",
      "articleId": "park-guell",
      "fatigueEvidence": "坂道と到着日",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 2,
      "notes": [
        "12/27 20:00に天候go/no-go。安全なら12/28 09:30–12:00。",
        "悪天候時、12/29にMontserratを中止できるならParkを12/29 09:30–12:00へ移す。できなければ12/28 09:30–11:00 Casa Vicensへ置換しParkは見送る。"
      ],
      "sequence": 10,
      "groupId": "group-d1226-gaudi",
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-28",
          "time": "09:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-28",
          "time": "12:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": 150,
        "durationMinimumMinutes": 90,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1228-ave-out",
      "dayId": "d1228",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "AVE Barcelona-Sants → Camp de Tarragona",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "必須",
      "bookingId": "tarragona-train",
      "articleId": null,
      "fatigueEvidence": "早朝列車",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "時刻は参考。",
        "Phase 3.1見送り: Tarragonaは外部時刻依存と連続日帰り疲労が大きく、Barcelona初訪問coreと変更耐性を優先。"
      ],
      "sequence": 10,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1228-bus-n240",
      "dayId": "d1228",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "BUSPLANA Camp de Tarragona駅 → N-240（教育地区）",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "列車からバスへ乗継",
      "weatherDependency": "中",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "Phase 3.1見送り: Tarragonaは外部時刻依存と連続日帰り疲労が大きく、Barcelona初訪問coreと変更耐性を優先。"
      ],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1228-lunch-bcn",
      "dayId": "d1228",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "Gràcia周辺で昼食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-28",
          "time": "12:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-28",
          "time": "13:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1228-bus-aqueduct",
      "dayId": "d1228",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "N-240 → Pont del Diable",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "路線バス移動",
      "weatherDependency": "中",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "Phase 3.1見送り: Tarragonaは外部時刻依存と連続日帰り疲労が大きく、Barcelona初訪問coreと変更耐性を優先。"
      ],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1228-rest",
      "dayId": "d1228",
      "kind": "rest",
      "parentId": null,
      "placeId": null,
      "title": "移動・カフェ休憩",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "疲労回復のための明示的buffer",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-28",
          "time": "13:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-28",
          "time": "14:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1228-aqueduct",
      "dayId": "d1228",
      "kind": "attraction",
      "parentId": null,
      "placeId": "ferreres",
      "title": "ラス・ファレーラス水道橋",
      "durationIdealMinutes": 58,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "屋外歩行",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "Phase 3.1見送り: Tarragonaは外部時刻依存と連続日帰り疲労が大きく、Barcelona初訪問coreと変更耐性を優先。"
      ],
      "sequence": 40,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": 58,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1228-palau-musica",
      "dayId": "d1228",
      "kind": "attraction",
      "parentId": null,
      "placeId": "palau-musica",
      "title": "カタルーニャ音楽堂",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": "barcelona-modernisme-palau",
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 3,
      "notes": [
        "Gaudí以外のModernisme比較。2026見学枠は未公表。"
      ],
      "sequence": 40,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "recommended",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-28",
          "time": "15:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-28",
          "time": "16:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1228-born-walk",
      "dayId": "d1228",
      "kind": "attraction",
      "parentId": null,
      "placeId": null,
      "title": "El Born・旧市街の街歩き",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "barcelona-old-city",
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "中",
      "shortenable": true,
      "dropRank": 1,
      "notes": [
        "雨天時は短縮し、音楽堂周辺の屋内休憩へ。"
      ],
      "sequence": 50,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-28",
          "time": "16:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-28",
          "time": "18:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1228-bus-city",
      "dayId": "d1228",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "バス Equador → Colom 14（Tarragona市内へ）",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "路線バス移動",
      "weatherDependency": "中",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "旧行に「昼食」を含んでいたため別meal項目へ分割。",
        "Phase 3.1見送り: Tarragonaは外部時刻依存と連続日帰り疲労が大きく、Barcelona初訪問coreと変更耐性を優先。"
      ],
      "sequence": 50,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1228-xampanyet",
      "dayId": "d1228",
      "kind": "meal",
      "parentId": null,
      "placeId": "el-xampanyet",
      "title": "現地判断候補：El Xampanyet",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "barcelona-seafood-market-bar",
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "月曜通常営業時間19:00–23:00内。予約不可。2026-12-27に臨時休業を再確認。",
        "満席時はLa Plata 19:00–20:00へ移り、anchovies/botifarra/tapas役割を維持。"
      ],
      "sequence": 55,
      "groupId": null,
      "inclusionStatus": "on_site_candidate",
      "planningStatus": "needs_information",
      "bookingRequirement": "not_required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-28",
          "time": "19:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-28",
          "time": "20:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1228-dinner",
      "dayId": "d1228",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "必要時のみ軽い夕食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [
        "El Xampanyetを利用した場合は軽食量に応じて短縮または省略。"
      ],
      "sequence": 60,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-28",
          "time": "20:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-28",
          "time": "21:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1228-lunch",
      "dayId": "d1228",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "昼食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "午前移動後",
      "weatherDependency": "未評価",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "店舗候補は未登録。",
        "Phase 3.1見送り: Tarragonaは外部時刻依存と連続日帰り疲労が大きく、Barcelona初訪問coreと変更耐性を優先。"
      ],
      "sequence": 60,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1228-amphitheatre",
      "dayId": "d1228",
      "kind": "attraction",
      "parentId": null,
      "placeId": "tarragona",
      "title": "タラゴナ円形闘技場",
      "durationIdealMinutes": 90,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "午後の屋外見学",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "Phase 3.1見送り: Tarragonaは外部時刻依存と連続日帰り疲労が大きく、Barcelona初訪問coreと変更耐性を優先。"
      ],
      "sequence": 70,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1228-cathedral",
      "dayId": "d1228",
      "kind": "attraction",
      "parentId": null,
      "placeId": "tarragona-cathedral",
      "title": "タラゴナ大聖堂",
      "durationIdealMinutes": 90,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "円形闘技場から連続",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "Phase 3.1見送り: Tarragonaは外部時刻依存と連続日帰り疲労が大きく、Barcelona初訪問coreと変更耐性を優先。"
      ],
      "sequence": 80,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": 90,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1228-pinchos",
      "dayId": "d1228",
      "kind": "meal",
      "parentId": null,
      "placeId": "pinchos-street",
      "title": "バル（ピンチョス通り）",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "できれば",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "帰路前の夕方",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "店舗候補は未登録。",
        "Phase 3.1見送り: Tarragonaは外部時刻依存と連続日帰り疲労が大きく、Barcelona初訪問coreと変更耐性を優先。"
      ],
      "sequence": 90,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1228-return",
      "dayId": "d1228",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "Tarragona → Barcelona-Sants",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "必須",
      "bookingId": "tarragona-train",
      "articleId": null,
      "fatigueEvidence": "日帰り帰路",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "時刻は参考。",
        "Phase 3.1見送り: Tarragonaは外部時刻依存と連続日帰り疲労が大きく、Barcelona初訪問coreと変更耐性を優先。"
      ],
      "sequence": 100,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1228-flamenco",
      "dayId": "d1228",
      "kind": "event",
      "parentId": null,
      "placeId": null,
      "title": "フラメンコ・ショー",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "できれば",
      "bookingId": "flamenco",
      "articleId": null,
      "fatigueEvidence": "日帰り帰着後すぐ",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "会場未選定。時刻は旧計画値。",
        "Phase 3.1見送り: Tarragonaは外部時刻依存と連続日帰り疲労が大きく、Barcelona初訪問coreと変更耐性を優先。"
      ],
      "sequence": 110,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1229-fgc-out",
      "dayId": "d1229",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "Espanya駅 → Aeri de Montserrat",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "montserrat-transport",
      "articleId": "montserrat",
      "fatigueEvidence": "近郊鉄道21駅",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "2026時刻未公表。一本早い便を含め発売後再計算。"
      ],
      "sequence": 10,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-29",
          "time": "08:36",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-29",
          "time": "09:36",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1229-up-buffer",
      "dayId": "d1229",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "Aeri乗継buffer",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": "montserrat",
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 15,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-29",
          "time": "09:36",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-29",
          "time": "10:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1229-aeri-up",
      "dayId": "d1229",
      "kind": "transfer",
      "parentId": null,
      "placeId": "montserrat",
      "title": "ロープウェイ Estació Inferior → Superior",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "montserrat-transport",
      "articleId": "montserrat",
      "fatigueEvidence": "高所交通",
      "weatherDependency": "高",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-29",
          "time": "10:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-29",
          "time": "10:05",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1229-basilica",
      "dayId": "d1229",
      "kind": "attraction",
      "parentId": null,
      "placeId": "montserrat",
      "title": "モンセラート大聖堂",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": "montserrat",
      "fatigueEvidence": "山上での見学",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-29",
          "time": "10:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-29",
          "time": "11:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1229-moreneta",
      "dayId": "d1229",
      "kind": "attraction",
      "parentId": null,
      "placeId": "montserrat",
      "title": "黒い聖母マリア像（Moreneta）",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": "montserrat",
      "fatigueEvidence": "山上での見学",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 40,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-29",
          "time": "11:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-29",
          "time": "12:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1229-lunch",
      "dayId": "d1229",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "Montserratで昼食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": "montserrat",
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 45,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-29",
          "time": "12:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-29",
          "time": "13:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1229-museum",
      "dayId": "d1229",
      "kind": "attraction",
      "parentId": null,
      "placeId": "montserrat",
      "title": "モンセラート美術館",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "montserrat",
      "fatigueEvidence": "午前からの連続見学",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 1,
      "notes": [],
      "sequence": 50,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-29",
          "time": "13:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-29",
          "time": "14:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1229-descent-rest",
      "dayId": "d1229",
      "kind": "rest",
      "parentId": null,
      "placeId": null,
      "title": "休憩・下山判断",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": "montserrat",
      "fatigueEvidence": "疲労回復のための明示的buffer",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "風・運休兆候があれば即時下山。"
      ],
      "sequence": 55,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-29",
          "time": "14:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-29",
          "time": "14:45",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1229-aeri-down",
      "dayId": "d1229",
      "kind": "transfer",
      "parentId": null,
      "placeId": "montserrat",
      "title": "ロープウェイ Estació Superior → Inferior",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "montserrat-transport",
      "articleId": "montserrat",
      "fatigueEvidence": "高所交通",
      "weatherDependency": "高",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 60,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-29",
          "time": "15:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-29",
          "time": "15:05",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1229-down-buffer",
      "dayId": "d1229",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "FGC帰路buffer",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": "montserrat",
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 65,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-29",
          "time": "15:05",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-29",
          "time": "15:45",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1229-fgc-return",
      "dayId": "d1229",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "Aeri de Montserrat → Espanya駅",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "montserrat-transport",
      "articleId": "montserrat",
      "fatigueEvidence": "日帰り帰路",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 70,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-29",
          "time": "15:45",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-29",
          "time": "16:45",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1229-rest-hotel",
      "dayId": "d1229",
      "kind": "rest",
      "parentId": null,
      "placeId": null,
      "title": "ホテル休憩",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "疲労回復のための明示的buffer",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 80,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-29",
          "time": "17:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-29",
          "time": "19:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1229-can-sole",
      "dayId": "d1229",
      "kind": "meal",
      "parentId": null,
      "placeId": "can-sole",
      "title": "魚介・米料理候補：Can Solé",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "barcelona-seafood-market-bar",
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [
        "火曜通常夕食20:00–23:00内。2026/27年末特別営業・予約枠は未公表のためconditional。",
        "休業・満席時は7 Portes 20:00–21:30へ切替し、魚介・米料理役割を維持。",
        "2026-11-26、予約時、2026-12-28に公式再確認。"
      ],
      "sequence": 90,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "recommended",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-29",
          "time": "20:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-29",
          "time": "21:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1230-boqueria",
      "dayId": "d1230",
      "kind": "attraction",
      "parentId": null,
      "placeId": "boqueria",
      "title": "ボケリア市場散策＋El Quim朝食候補",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "barcelona-seafood-market-bar",
      "fatigueEvidence": "荷物を伴う移動日の午前",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 1,
      "notes": [
        "El Quimの水曜通常営業時間07:00–16:00内。2026年末特別営業は未公表のためconditional。",
        "行列20分超・休業時はBar Joan 08:30–09:30へ切替し、市場朝食役割を維持。Sants bufferは削らない。",
        "2026-11-26、2026-12-29、当日朝にBoqueriaと店舗公式を再確認。"
      ],
      "sequence": 10,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-30",
          "time": "08:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-30",
          "time": "10:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1230-checkout",
      "dayId": "d1230",
      "kind": "hotel",
      "parentId": null,
      "placeId": null,
      "title": "ホテルcheckout・荷物回収",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "ホテル所在地とcheckout条件は私的予約情報で再確認。"
      ],
      "sequence": 15,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-30",
          "time": "10:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-30",
          "time": "11:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1230-cathedral",
      "dayId": "d1230",
      "kind": "attraction",
      "parentId": null,
      "placeId": "cathedral",
      "title": "バルセロナ大聖堂",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "できれば",
      "bookingId": "barcelona-cathedral",
      "articleId": "barcelona-old-city",
      "fatigueEvidence": "荷物を伴う移動日の午前",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "Phase 3.1見送り: 都市間移動日の壊れやすい追加観光を避ける。"
      ],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1230-lunch",
      "dayId": "d1230",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "移動前の軽い昼食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-30",
          "time": "11:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-30",
          "time": "12:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1230-sants-transfer",
      "dayId": "d1230",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "Barcelona Santsへ移動",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 25,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-30",
          "time": "12:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-30",
          "time": "13:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1230-sants-buffer",
      "dayId": "d1230",
      "kind": "rest",
      "parentId": null,
      "placeId": null,
      "title": "駅到着buffer・乗車準備",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "疲労回復のための明示的buffer",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "14:50は旧参考時刻。発売後、発車90分前駅着を保つ。"
      ],
      "sequence": 28,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-30",
          "time": "13:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-30",
          "time": "14:50",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1230-train-madrid",
      "dayId": "d1230",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "iryo 06150 Barcelona Sants → Madrid Atocha",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "iryo-out",
      "articleId": null,
      "fatigueEvidence": "都市間移動",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "2026年末時刻・列車番号未公表。発売後に置換しbufferを再検証。"
      ],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-30",
          "time": "14:50",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-30",
          "time": "17:52",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1230-madrid-hotel",
      "dayId": "d1230",
      "kind": "hotel",
      "parentId": null,
      "placeId": null,
      "title": "Madridホテルへ移動・check-in",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 40,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-30",
          "time": "18:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-30",
          "time": "19:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1230-dinner",
      "dayId": "d1230",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "ホテル近隣で夕食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 50,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-30",
          "time": "19:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-30",
          "time": "20:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1231-prado",
      "dayId": "d1231",
      "kind": "attraction",
      "parentId": null,
      "placeId": "prado",
      "title": "プラド美術館",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "prado",
      "articleId": "prado",
      "fatigueEvidence": "大晦日の長い一日の午前",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "12/31短縮営業の2026公表後に枠確定。"
      ],
      "sequence": 10,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-31",
          "time": "10:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-31",
          "time": "12:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1231-cibeles",
      "dayId": "d1231",
      "kind": "attraction",
      "parentId": null,
      "placeId": "cibeles",
      "title": "シベレス広場",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "madrid-overview",
      "fatigueEvidence": "市内徒歩",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 2,
      "notes": [],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-31",
          "time": "12:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-31",
          "time": "12:35",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1231-san-jeronimo",
      "dayId": "d1231",
      "kind": "attraction",
      "parentId": null,
      "placeId": "san-jeronimo",
      "title": "サン・ヘロニモ・エル・レアル教会",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "できれば",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "Pradoと同じ午前帯",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "旧scheduleの9:00〜13:00、17:00〜19:45を保持。",
        "Phase 3.1見送り: 年越し前の休憩と警備導線を優先し、マラソン参加を同日必須にしない。"
      ],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1231-alcala",
      "dayId": "d1231",
      "kind": "attraction",
      "parentId": null,
      "placeId": "alcala-gate",
      "title": "アルカラ門",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "madrid-overview",
      "fatigueEvidence": "市内徒歩",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 1,
      "notes": [],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-31",
          "time": "12:45",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-31",
          "time": "13:05",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1231-lunch",
      "dayId": "d1231",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "昼食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 35,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-31",
          "time": "13:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-31",
          "time": "14:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1231-retiro",
      "dayId": "d1231",
      "kind": "attraction",
      "parentId": null,
      "placeId": "retiro",
      "title": "エル・レティーロ公園",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "madrid-overview",
      "fatigueEvidence": "市内徒歩と屋外滞在",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 1,
      "notes": [],
      "sequence": 40,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-31",
          "time": "14:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-31",
          "time": "15:45",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1231-rest",
      "dayId": "d1231",
      "kind": "rest",
      "parentId": null,
      "placeId": null,
      "title": "ホテル休憩・防寒準備",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "疲労回復のための明示的buffer",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 50,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-31",
          "time": "16:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-31",
          "time": "18:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1231-early-dinner",
      "dayId": "d1231",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "早めの大晦日夕食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [
        "店舗・予約枠未選定。満席時は事前確保した持帰り食へ。"
      ],
      "sequence": 60,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "recommended",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-31",
          "time": "18:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-31",
          "time": "19:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1231-san-silvestre",
      "dayId": "d1231",
      "kind": "event",
      "parentId": null,
      "placeId": "san-silvestre",
      "title": "San Silvestre Vallecana マラソン",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "参加予定ではなく交通規制要因",
      "weatherDependency": "未評価",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "観光予定ではなく交通規制の確認対象。",
        "Phase 3.1見送り: 年越し前の休憩と警備導線を優先し、マラソン参加を同日必須にしない。"
      ],
      "sequence": 60,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d1231-countdown",
      "dayId": "d1231",
      "kind": "event",
      "parentId": null,
      "placeId": "nye",
      "title": "Puerta del Sol カウントダウン（12粒のブドウ）",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": "madrid-overview",
      "fatigueEvidence": "深夜までの屋外滞在",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 1,
      "notes": [
        "2026警備・入口・駅閉鎖未公表。2026-12-30 20:00と12/31 18:00に公式発表を確認。",
        "公式入場経路と徒歩帰路が確保できる場合だけSolへ。20:30までに入場不能、収容上限、強雨、ホテルまで徒歩45分超なら撤退。",
        "代替は18:00までにブドウを購入し、確定済みMadridホテル客室で22:30–00:15に公式中継を見る。"
      ],
      "sequence": 70,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-31",
          "time": "20:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-01",
          "time": "00:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0101-sol",
      "dayId": "d0101",
      "kind": "attraction",
      "parentId": null,
      "placeId": "nye",
      "title": "プエルタ・デル・ソル",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "madrid-austrias",
      "fatigueEvidence": "前夜の年越し後",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 10,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-01",
          "time": "11:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-01",
          "time": "11:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0101-san-gines",
      "dayId": "d0101",
      "kind": "meal",
      "parentId": null,
      "placeId": "san-gines",
      "title": "チョコラテリア・サン・ヒネス",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "madrid-austrias",
      "fatigueEvidence": "街歩き中の休憩候補",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [
        "金曜通常表示は24時間だが、2027元日特別営業は未公表のためconditional。",
        "休業・行列30分超ならChocolatería 1902 11:45–12:30へ切替し、chocolate con churros役割を維持。",
        "2026-12-01と2026-12-31に公式再確認。"
      ],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-01",
          "time": "11:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-01",
          "time": "12:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0101-plaza-mayor",
      "dayId": "d0101",
      "kind": "attraction",
      "parentId": null,
      "placeId": "plaza-mayor",
      "title": "マヨール広場",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": "madrid-austrias",
      "fatigueEvidence": "市内徒歩",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-01",
          "time": "12:20",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-01",
          "time": "13:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0101-lunch",
      "dayId": "d0101",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "元日の昼食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 35,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-01",
          "time": "13:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-01",
          "time": "14:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0101-san-isidro",
      "dayId": "d0101",
      "kind": "attraction",
      "parentId": null,
      "placeId": "san-isidro",
      "title": "サン・イシドロ教会",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "madrid-austrias",
      "fatigueEvidence": "市内徒歩",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 1,
      "notes": [],
      "sequence": 40,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-01",
          "time": "14:10",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-01",
          "time": "14:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0101-palace-exterior",
      "dayId": "d0101",
      "kind": "attraction",
      "parentId": null,
      "placeId": "palacio",
      "title": "マドリード王宮（外観）",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "madrid-austrias",
      "fatigueEvidence": "市内徒歩",
      "weatherDependency": "中",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 50,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-01",
          "time": "15:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-01",
          "time": "15:45",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0101-san-francisco",
      "dayId": "d0101",
      "kind": "attraction",
      "parentId": null,
      "placeId": "san-francisco",
      "title": "サン・フランシスコ・エル・グランデ（外観）",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": "madrid-austrias",
      "fatigueEvidence": "市内徒歩",
      "weatherDependency": "中",
      "shortenable": true,
      "dropRank": 1,
      "notes": [],
      "sequence": 60,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-01",
          "time": "16:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-01",
          "time": "16:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0101-rest",
      "dayId": "d0101",
      "kind": "rest",
      "parentId": null,
      "placeId": null,
      "title": "ホテル休憩",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "疲労回復のための明示的buffer",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 70,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-01",
          "time": "17:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-01",
          "time": "19:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0101-dinner",
      "dayId": "d0101",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "営業確認済み候補で夕食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 80,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-01",
          "time": "19:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-01",
          "time": "20:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0102-train-out",
      "dayId": "d0102",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "Avant 08292 Madrid Atocha → Toledo",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "toledo-train",
      "articleId": null,
      "fatigueEvidence": "朝の高速列車",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "2027時刻未公表。発売後に確定。"
      ],
      "sequence": 10,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-02",
          "time": "09:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-02",
          "time": "09:49",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0102-city-transfer",
      "dayId": "d0102",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "Toledo駅 → 旧市街",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 15,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-02",
          "time": "09:50",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-02",
          "time": "10:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0102-cathedral",
      "dayId": "d0102",
      "kind": "attraction",
      "parentId": null,
      "placeId": "toledo-cathedral",
      "title": "トレド大聖堂",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "toledo-cathedral",
      "articleId": "toledo-cathedral",
      "fatigueEvidence": "坂道と4施設の連続",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-02",
          "time": "10:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-02",
          "time": "12:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0102-lunch",
      "dayId": "d0102",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "Toledoで昼食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": "toledo",
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 25,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-02",
          "time": "12:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-02",
          "time": "13:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0102-santotome",
      "dayId": "d0102",
      "kind": "attraction",
      "parentId": null,
      "placeId": "santotome",
      "title": "サント・トメ教会",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "santotome",
      "articleId": "santo-tome-orgaz",
      "fatigueEvidence": "坂道と4施設の連続",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 2,
      "notes": [],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-02",
          "time": "13:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-02",
          "time": "14:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0102-greco",
      "dayId": "d0102",
      "kind": "attraction",
      "parentId": null,
      "placeId": "greco",
      "title": "エル・グレコ美術館",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": "greco",
      "articleId": "el-greco-museum",
      "fatigueEvidence": "坂道と4施設の連続",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 1,
      "notes": [],
      "sequence": 40,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-02",
          "time": "14:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-02",
          "time": "15:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0102-rest",
      "dayId": "d0102",
      "kind": "rest",
      "parentId": null,
      "placeId": null,
      "title": "カフェ休憩",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": "toledo",
      "fatigueEvidence": "疲労回復のための明示的buffer",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 45,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-02",
          "time": "15:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-02",
          "time": "16:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0102-santacruz",
      "dayId": "d0102",
      "kind": "attraction",
      "parentId": null,
      "placeId": "santacruz",
      "title": "サンタ・クルス美術館",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "必須",
      "bookingId": null,
      "articleId": "toledo",
      "fatigueEvidence": "坂道と4施設の連続",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "無料時間帯は2027年分を要確認。",
        "Phase 3.1見送り: Toledoは大聖堂・サントトメ・Grecoの核へ絞り帰路bufferを保護。"
      ],
      "sequence": 50,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d0102-station-transfer",
      "dayId": "d0102",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "旧市街 → Toledo駅・乗車buffer",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 50,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-02",
          "time": "16:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-02",
          "time": "17:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0102-train-return",
      "dayId": "d0102",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "Avant 08173 Toledo → Madrid Atocha",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "toledo-train",
      "articleId": null,
      "fatigueEvidence": "日帰り帰路",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "2027時刻未公表。最終利用便より一本前を優先。"
      ],
      "sequence": 60,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-02",
          "time": "17:23",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-02",
          "time": "17:57",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0103-checkout",
      "dayId": "d0103",
      "kind": "hotel",
      "parentId": null,
      "placeId": null,
      "title": "Madridホテルcheckout・荷物預け",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 5,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-03",
          "time": "08:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-03",
          "time": "09:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0103-reinasofia",
      "dayId": "d0103",
      "kind": "attraction",
      "parentId": null,
      "placeId": "reinasofia",
      "title": "ソフィア王妃芸術センター（ゲルニカ／ダリ）",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "reinasofia",
      "articleId": "madrid-art",
      "fatigueEvidence": "移動日の午前",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "日曜営業時間・Guernica展示状況・入場枠を再確認。"
      ],
      "sequence": 10,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-03",
          "time": "10:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-03",
          "time": "12:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0103-lunch",
      "dayId": "d0103",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "Atocha周辺で昼食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-03",
          "time": "12:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-03",
          "time": "13:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0103-serrano",
      "dayId": "d0103",
      "kind": "free",
      "parentId": null,
      "placeId": "serrano",
      "title": "セラーノ通り",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "予備",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動日の街歩き",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "Phase 3.1見送り: 都市間移動日はAtocha近接のReina Sofía一件だけ。"
      ],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d0103-cava-san-miguel",
      "dayId": "d0103",
      "kind": "free",
      "parentId": null,
      "placeId": "cava-san-miguel",
      "title": "カバ・デ・サン・ミゲル通り",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "予備",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動日の街歩き",
      "weatherDependency": "高",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "Phase 3.1見送り: 都市間移動日はAtocha近接のReina Sofía一件だけ。"
      ],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d0103-rest",
      "dayId": "d0103",
      "kind": "rest",
      "parentId": null,
      "placeId": null,
      "title": "休憩・荷物回収",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "疲労回復のための明示的buffer",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-03",
          "time": "13:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-03",
          "time": "15:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0103-atocha-transfer",
      "dayId": "d0103",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "Madrid Atochaへ移動",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 40,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-03",
          "time": "15:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-03",
          "time": "15:30",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0103-san-miguel-market",
      "dayId": "d0103",
      "kind": "meal",
      "parentId": null,
      "placeId": "san-miguel-market",
      "title": "サン・ミゲル市場",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "できれば",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動日の食事候補",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "旧scheduleの10:00〜24:00を保持。店舗候補は未登録。",
        "Phase 3.1見送り: 都市間移動日はAtocha近接のReina Sofía一件だけ。"
      ],
      "sequence": 40,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d0103-atocha-buffer",
      "dayId": "d0103",
      "kind": "rest",
      "parentId": null,
      "placeId": null,
      "title": "駅到着buffer・乗車準備",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "疲労回復のための明示的buffer",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "列車時刻変更後も90分以上を確保。"
      ],
      "sequence": 50,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-03",
          "time": "15:30",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-03",
          "time": "17:22",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0103-palace",
      "dayId": "d0103",
      "kind": "attraction",
      "parentId": null,
      "placeId": "palacio",
      "title": "マドリード王宮 内部見学",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "必須",
      "bookingId": "palace",
      "articleId": null,
      "fatigueEvidence": "移動日の午前に美術館と競合",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "旧scheduleは「10時台」。具体時刻は予約後に登録。",
        "Phase 3.1見送り: 都市間移動日はAtocha近接のReina Sofía一件だけ。"
      ],
      "sequence": 50,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d0103-train-barcelona",
      "dayId": "d0103",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "iryo 061171 Madrid Atocha → Barcelona Sants",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": "iryo-back",
      "articleId": null,
      "fatigueEvidence": "都市間移動",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "2027時刻未公表。発売後に置換。"
      ],
      "sequence": 60,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-03",
          "time": "17:22",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-03",
          "time": "20:42",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0103-final-hotel",
      "dayId": "d0103",
      "kind": "hotel",
      "parentId": null,
      "placeId": "hotel-barcelona",
      "title": "Barcelona最終泊",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "列車到着後",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "ホテル所在地とcheck-in条件は私的予約情報で確認。"
      ],
      "sequence": 70,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-03",
          "time": "20:42",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-03",
          "time": "21:15",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0103-dinner",
      "dayId": "d0103",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "ホテル近隣で軽い夕食",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "食事時間を保護",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": null,
      "notes": [],
      "sequence": 80,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-03",
          "time": "21:15",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-03",
          "time": "22:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0104-airport-taxi",
      "dayId": "d0104",
      "kind": "transfer",
      "parentId": null,
      "placeId": "barcelona-airport",
      "title": "タクシーでBCN T1へ（本案）",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "早朝空港移動",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "ホテル位置未確認。07:40 BCN T1着を超えないよう予約時に逆算。"
      ],
      "sequence": 10,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-04",
          "time": "06:55",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-04",
          "time": "07:35",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0104-aerobus",
      "dayId": "d0104",
      "kind": "transfer",
      "parentId": null,
      "placeId": "barcelona-airport",
      "title": "代替：Aerobus Pl. Catalunya → BCN T1",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "flexible",
      "priority": "予備",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "早朝空港移動",
      "weatherDependency": "中",
      "shortenable": true,
      "dropRank": 0,
      "notes": [
        "€7.45という旧情報を保持。料金は要再確認。",
        "Phase 3.1見送り: 08:55空港着案は10:40非Schengen便の3時間前目安を満たさない。"
      ],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "omitted",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "untimed",
        "start": null,
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "unknown"
      }
    },
    {
      "id": "d0104-airport-process",
      "dayId": "d0104",
      "kind": "transfer",
      "parentId": null,
      "placeId": "barcelona-airport",
      "title": "check-in・荷物預け・保安検査・出国",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "10:40非Schengen便の3時間前目安。"
      ],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-04",
          "time": "07:40",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2027-01-04",
          "time": "10:10",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0104-bcn-depart",
      "dayId": "d0104",
      "kind": "flight",
      "parentId": null,
      "placeId": null,
      "title": "BCN T1 発",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "fixed",
      "priority": "必須",
      "bookingId": "flight",
      "articleId": null,
      "fatigueEvidence": "長距離フライト",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "adopted",
      "planningStatus": "confirmed",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "point",
        "start": {
          "date": "2027-01-04",
          "time": "10:40",
          "timeZone": "Europe/Madrid"
        },
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "confirmed"
      }
    },
    {
      "id": "d0104-pvg-arrive",
      "dayId": "d0104",
      "kind": "flight",
      "parentId": null,
      "placeId": null,
      "title": "PVG T2 着",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "fixed",
      "priority": "必須",
      "bookingId": "flight",
      "articleId": null,
      "fatigueEvidence": "翌日到着",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "翌05:55。"
      ],
      "sequence": 40,
      "groupId": null,
      "inclusionStatus": "adopted",
      "planningStatus": "confirmed",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "point",
        "start": {
          "date": "2027-01-05",
          "time": "05:55",
          "timeZone": "Asia/Shanghai"
        },
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "confirmed"
      }
    },
    {
      "id": "d0105-pvg-rest",
      "dayId": "d0105",
      "kind": "rest",
      "parentId": null,
      "placeId": null,
      "title": "PVG長時間乗継・食事・休憩",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "疲労回復のための明示的buffer",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [
        "入国可否、lounge、terminal、through baggageは私的予約確認後に更新。"
      ],
      "sequence": 5,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-05",
          "time": "06:00",
          "timeZone": "Asia/Shanghai"
        },
        "end": {
          "date": "2027-01-05",
          "time": "13:30",
          "timeZone": "Asia/Shanghai"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d0105-pvg-depart",
      "dayId": "d0105",
      "kind": "flight",
      "parentId": null,
      "placeId": null,
      "title": "PVG T2 発",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "fixed",
      "priority": "必須",
      "bookingId": "flight",
      "articleId": null,
      "fatigueEvidence": "長い乗継後",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 10,
      "groupId": null,
      "inclusionStatus": "adopted",
      "planningStatus": "confirmed",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "point",
        "start": {
          "date": "2027-01-05",
          "time": "14:25",
          "timeZone": "Asia/Shanghai"
        },
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "confirmed"
      }
    },
    {
      "id": "d0105-nrt-arrive",
      "dayId": "d0105",
      "kind": "flight",
      "parentId": null,
      "placeId": null,
      "title": "NRT T1 着",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "fixed",
      "priority": "必須",
      "bookingId": "flight",
      "articleId": null,
      "fatigueEvidence": "帰国到着",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 20,
      "groupId": null,
      "inclusionStatus": "adopted",
      "planningStatus": "confirmed",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "point",
        "start": {
          "date": "2027-01-05",
          "time": "18:10",
          "timeZone": "Asia/Tokyo"
        },
        "end": null,
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "confirmed"
      }
    },
    {
      "id": "d0105-nrt-arrival-process",
      "dayId": "d0105",
      "kind": "transfer",
      "parentId": null,
      "placeId": null,
      "title": "入国・荷物受取・帰宅移動",
      "durationIdealMinutes": null,
      "durationMinimumMinutes": null,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "必須",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "移動余白を明示",
      "weatherDependency": "低",
      "shortenable": false,
      "dropRank": null,
      "notes": [],
      "sequence": 30,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2027-01-05",
          "time": "18:10",
          "timeZone": "Asia/Tokyo"
        },
        "end": {
          "date": "2027-01-05",
          "time": "19:30",
          "timeZone": "Asia/Tokyo"
        },
        "durationIdealMinutes": null,
        "durationMinimumMinutes": null,
        "confidence": "provisional"
      }
    },
    {
      "id": "d1227-light-dinner",
      "dayId": "d1227",
      "kind": "meal",
      "parentId": null,
      "placeId": null,
      "title": "必要時のみホテル近隣で軽い夕食",
      "durationIdealMinutes": 60,
      "durationMinimumMinutes": 30,
      "travelMinutesBefore": null,
      "bufferBeforeMinutes": null,
      "bufferAfterMinutes": null,
      "timeConstraint": "window",
      "priority": "できれば",
      "bookingId": null,
      "articleId": null,
      "fatigueEvidence": "Can Culleretesの重い昼食後なので、空腹時だけ。",
      "weatherDependency": "低",
      "shortenable": true,
      "dropRank": 1,
      "notes": [
        "店舗固定なし。空腹でなければ省略し、予約拘束を作らない。"
      ],
      "sequence": 60,
      "groupId": null,
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "not_required",
      "timing": {
        "kind": "interval",
        "start": {
          "date": "2026-12-27",
          "time": "19:00",
          "timeZone": "Europe/Madrid"
        },
        "end": {
          "date": "2026-12-27",
          "time": "20:00",
          "timeZone": "Europe/Madrid"
        },
        "durationIdealMinutes": 60,
        "durationMinimumMinutes": 30,
        "confidence": "provisional"
      }
    }
  ],
  "scheduleGroups": [
    {
      "id": "group-d1226-arrival",
      "dayId": "d1226",
      "label": "到着・市内移動"
    },
    {
      "id": "group-d1226-gaudi",
      "dayId": "d1226",
      "label": "ガウディ巡り"
    },
    {
      "id": "group-d1226-afternoon",
      "dayId": "d1226",
      "label": "午後・夕方の候補"
    }
  ],
  "coverageItems": [
    {
      "id": "cov-sagrada",
      "cityId": "barcelona",
      "type": "see",
      "name": "サグラダ・ファミリア",
      "importance": "最重要",
      "scheduleItemId": "d1227-sagrada",
      "articleId": "sagrada",
      "reason": "旅の主役として十分な時間を確保する方針。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "sagrada",
      "relatedPlaceIds": [
        "sagrada"
      ],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "sagrada"
    },
    {
      "id": "cov-mila",
      "cityId": "barcelona",
      "type": "see",
      "name": "カサ・ミラ（ラ・ペドレラ）",
      "importance": "最重要",
      "scheduleItemId": "d1226-mila",
      "articleId": "mila",
      "reason": "重要なGaudí集合住宅。グラシア通り／不調和の街区の新築住宅としてカサ・バトリョと比較する。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "mila",
      "relatedPlaceIds": [
        "mila"
      ],
      "planningDecisionIds": [
        "decision-dec26-gaudi"
      ],
      "inclusionStatus": "provisional",
      "targetType": "place",
      "targetId": "mila"
    },
    {
      "id": "cov-batllo",
      "cityId": "barcelona",
      "type": "see",
      "name": "カサ・バトリョ",
      "importance": "高",
      "scheduleItemId": "d1226-batllo",
      "articleId": "batllo",
      "reason": "既存旅程のGaudí住宅。グラシア通り／不調和の街区の改修住宅としてカサ・ミラと比較する。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "batllo",
      "relatedPlaceIds": [
        "batllo"
      ],
      "planningDecisionIds": [
        "decision-dec26-gaudi"
      ],
      "inclusionStatus": "provisional",
      "targetType": "place",
      "targetId": "batllo"
    },
    {
      "id": "cov-parkguell",
      "cityId": "barcelona",
      "type": "see",
      "name": "グエル公園",
      "importance": "高",
      "scheduleItemId": "d1226-parkguell",
      "articleId": "park-guell",
      "reason": "既存旅程に採用済み。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "parkguell",
      "relatedPlaceIds": [
        "parkguell"
      ],
      "planningDecisionIds": [
        "decision-dec26-gaudi"
      ],
      "inclusionStatus": "provisional",
      "targetType": "place",
      "targetId": "parkguell"
    },
    {
      "id": "cov-fideua",
      "cityId": "barcelona",
      "type": "eat",
      "name": "フィデウア",
      "importance": "高",
      "scheduleItemId": null,
      "articleId": null,
      "reason": "料理候補はあるが店舗・日程は未登録。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": null,
      "relatedPlaceIds": [],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "dish",
      "targetId": "dish-fideua"
    },
    {
      "id": "cov-tarragona",
      "cityId": "tarragona",
      "type": "experience",
      "name": "ローマ遺産を歩く",
      "importance": "高",
      "scheduleItemId": "d1228-amphitheatre",
      "articleId": null,
      "reason": "円形闘技場と大聖堂を原子的に登録。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "ferreres",
      "relatedPlaceIds": [
        "ferreres",
        "tarragona",
        "tarragona-cathedral"
      ],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "experience",
      "targetId": "cov-tarragona"
    },
    {
      "id": "cov-montserrat",
      "cityId": "montserrat",
      "type": "experience",
      "name": "修道院と黒い聖母",
      "importance": "高",
      "scheduleItemId": "d1229-moreneta",
      "articleId": null,
      "reason": "既存旅程に採用済み。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "montserrat",
      "relatedPlaceIds": [
        "montserrat"
      ],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "experience",
      "targetId": "cov-montserrat"
    },
    {
      "id": "cov-prado",
      "cityId": "madrid",
      "type": "see",
      "name": "プラド美術館",
      "importance": "最重要",
      "scheduleItemId": "d1231-prado",
      "articleId": "prado",
      "reason": "Madrid滞在の主役。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "prado",
      "relatedPlaceIds": [
        "prado"
      ],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "prado"
    },
    {
      "id": "cov-reinasofia",
      "cityId": "madrid",
      "type": "see",
      "name": "ソフィア王妃芸術センター",
      "importance": "高",
      "scheduleItemId": "d0103-reinasofia",
      "articleId": "madrid-art",
      "reason": "既存旅程に採用済み。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "reinasofia",
      "relatedPlaceIds": [
        "reinasofia"
      ],
      "planningDecisionIds": [
        "decision-jan3-main"
      ],
      "inclusionStatus": "provisional",
      "targetType": "place",
      "targetId": "reinasofia"
    },
    {
      "id": "cov-palace",
      "cityId": "madrid",
      "type": "see",
      "name": "マドリード王宮",
      "importance": "高",
      "scheduleItemId": "d0103-palace",
      "articleId": null,
      "reason": "内部見学は未予約。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "palacio",
      "relatedPlaceIds": [
        "palacio"
      ],
      "planningDecisionIds": [
        "decision-jan3-main"
      ],
      "inclusionStatus": "provisional",
      "targetType": "place",
      "targetId": "palacio"
    },
    {
      "id": "cov-cocido",
      "cityId": "madrid",
      "type": "eat",
      "name": "コシード・マドリレーニョ",
      "importance": "高",
      "scheduleItemId": null,
      "articleId": null,
      "reason": "料理候補はあるが店舗・日程は未登録。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": null,
      "relatedPlaceIds": [],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "dish",
      "targetId": "dish-cocido"
    },
    {
      "id": "cov-toledo",
      "cityId": "toledo",
      "type": "experience",
      "name": "宗教都市とエル・グレコ",
      "importance": "高",
      "scheduleItemId": "d0102-cathedral",
      "articleId": "toledo",
      "reason": "日帰り案に採用。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "toledo-cathedral",
      "relatedPlaceIds": [
        "toledo-cathedral",
        "santotome",
        "greco",
        "santacruz"
      ],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "experience",
      "targetId": "cov-toledo"
    },
    {
      "id": "cov-segovia",
      "cityId": "madrid",
      "type": "experience",
      "name": "Segovia",
      "importance": "未評価",
      "scheduleItemId": null,
      "articleId": null,
      "reason": "旧トップの比較案を保持。詳細は未登録。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": null,
      "relatedPlaceIds": [],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "experience",
      "targetId": "cov-segovia"
    },
    {
      "id": "cov-palau-guell",
      "cityId": "barcelona",
      "type": "see",
      "name": "グエル邸",
      "importance": "高",
      "scheduleItemId": "d1226-guell-palace",
      "articleId": "palau-guell",
      "reason": "旧市街の都市邸宅として、ランブラス／レイアール広場の街歩き文脈も含めて到着日の負荷と比較する。営業可否は別バックログで確認する。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "guell-palace",
      "relatedPlaceIds": [
        "guell-palace"
      ],
      "planningDecisionIds": [
        "decision-dec26-gaudi"
      ],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "guell-palace"
    },
    {
      "id": "cov-casa-vicens",
      "cityId": "barcelona",
      "type": "see",
      "name": "カサ・ビセンス",
      "importance": "高",
      "scheduleItemId": "d1226-casa-vicens",
      "articleId": "casa-vicens",
      "reason": "初期の庭付き住宅として同日Gaudí作品群との違いと到着日の疲労を比較する。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "casa-vicens",
      "relatedPlaceIds": [
        "casa-vicens"
      ],
      "planningDecisionIds": [
        "decision-dec26-gaudi"
      ],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "casa-vicens"
    },
    {
      "id": "cov-sant-pau",
      "cityId": "barcelona",
      "type": "see",
      "name": "サン・パウ病院モダニスム区域",
      "importance": "高",
      "scheduleItemId": "d1226-sant-pau",
      "articleId": null,
      "reason": "Gaudí以外のModernismeと医療建築を比較する既存候補。到着日の密度を増やすため採用は未決定。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "sant-pau",
      "relatedPlaceIds": [
        "sant-pau"
      ],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "sant-pau"
    },
    {
      "id": "cov-barcelona-cathedral",
      "cityId": "barcelona",
      "type": "see",
      "name": "バルセロナ大聖堂",
      "importance": "高",
      "scheduleItemId": "d1230-cathedral",
      "articleId": null,
      "reason": "ゴシック地区の歴史軸を既存Placeへ内包し、外観・内部・街歩きの時間を比較する。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "cathedral",
      "relatedPlaceIds": [
        "cathedral"
      ],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "cathedral"
    },
    {
      "id": "cov-boqueria",
      "cityId": "barcelona",
      "type": "experience",
      "name": "ボケリア市場",
      "importance": "高",
      "scheduleItemId": "d1230-boqueria",
      "articleId": null,
      "reason": "ランブラスの街歩きと市場朝食を一つの食文化体験として比較する。店舗採用や食事確定はしない。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "boqueria",
      "relatedPlaceIds": [
        "boqueria"
      ],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "boqueria"
    },
    {
      "id": "cov-montjuic-castle",
      "cityId": "barcelona",
      "type": "see",
      "name": "モンジュイック",
      "importance": "高",
      "scheduleItemId": "d1227-montjuic-castle",
      "articleId": null,
      "reason": "城・眺望・丘の移動を含む既存候補。MNACとの重複、天候、移動負荷を比較する。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "montjuic",
      "relatedPlaceIds": [
        "montjuic"
      ],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "montjuic"
    },
    {
      "id": "cov-fira-santa-llucia",
      "cityId": "barcelona",
      "type": "experience",
      "name": "サンタ・リュシアのクリスマス市",
      "importance": "未評価",
      "scheduleItemId": "d1227-fira-santa-llucia",
      "articleId": null,
      "reason": "年末季節文化の候補。参照Sourceは2025年情報で終了日は12月23日、2026年旅行日の開催は未公表のため営業中と扱わない。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "fira-santa-llucia",
      "relatedPlaceIds": [
        "fira-santa-llucia"
      ],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "fira-santa-llucia"
    },
    {
      "id": "cov-fira-sagrada",
      "cityId": "barcelona",
      "type": "experience",
      "name": "サグラダ・ファミリア前のクリスマス市",
      "importance": "未評価",
      "scheduleItemId": "d1226-fira-sagrada",
      "articleId": null,
      "reason": "年末季節文化の候補。参照Sourceは2025年情報で、2026年旅行日の開催は未公表のため営業中と扱わない。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "fira-sagrada",
      "relatedPlaceIds": [
        "fira-sagrada"
      ],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "fira-sagrada"
    },
    {
      "id": "cov-palau-musica",
      "cityId": "barcelona",
      "type": "see",
      "name": "カタルーニャ音楽堂",
      "importance": "高",
      "scheduleItemId": null,
      "articleId": null,
      "reason": "Gaudí以外のModernismeと音楽文化を比較する非Gaudí文化枠。El Born周辺へ内包するが旅程には追加しない。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "palau-musica",
      "relatedPlaceIds": [
        "palau-musica"
      ],
      "planningDecisionIds": [
        "decision-bcn-non-gaudi-culture"
      ],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "palau-musica"
    },
    {
      "id": "cov-picasso-museum",
      "cityId": "barcelona",
      "type": "see",
      "name": "ピカソ美術館",
      "importance": "高",
      "scheduleItemId": null,
      "articleId": null,
      "reason": "BarcelonaとPicasso初期を理解する非Gaudí文化枠。El Bornの滞在時間と予約リスクを比較する。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "picasso-museum",
      "relatedPlaceIds": [
        "picasso-museum"
      ],
      "planningDecisionIds": [
        "decision-bcn-non-gaudi-culture"
      ],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "picasso-museum"
    },
    {
      "id": "cov-mnac",
      "cityId": "barcelona",
      "type": "see",
      "name": "カタルーニャ美術館（MNAC）",
      "importance": "高",
      "scheduleItemId": null,
      "articleId": null,
      "reason": "カタルーニャ美術の長い時間軸を得る候補。Montjuïcの移動と既存予定の圧縮を比較する。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "mnac",
      "relatedPlaceIds": [
        "mnac",
        "montjuic"
      ],
      "planningDecisionIds": [
        "decision-bcn-non-gaudi-culture"
      ],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "mnac"
    },
    {
      "id": "cov-santa-caterina-market",
      "cityId": "barcelona",
      "type": "experience",
      "name": "サンタ・カテリーナ市場",
      "importance": "高",
      "scheduleItemId": null,
      "articleId": null,
      "reason": "El Born／大聖堂側の市場候補。ボケリアと重複採用せず、市場朝食・動線・混雑で比較する。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "santa-caterina-market",
      "relatedPlaceIds": [
        "santa-caterina-market"
      ],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "santa-caterina-market"
    },
    {
      "id": "cov-ciutadella-arc-triomf",
      "cityId": "barcelona",
      "type": "see",
      "name": "シウタデリャ公園／凱旋門",
      "importance": "高",
      "scheduleItemId": null,
      "articleId": null,
      "reason": "1888年万博の都市軸を歩く屋外候補。El Bornからの徒歩、天候、日没を比較し、二つを重複Placeに分けない。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "ciutadella-arc-triomf",
      "relatedPlaceIds": [
        "ciutadella-arc-triomf"
      ],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "ciutadella-arc-triomf"
    },
    {
      "id": "cov-bcn-market-breakfast",
      "cityId": "barcelona",
      "type": "experience",
      "name": "市場の朝食",
      "importance": "高",
      "scheduleItemId": "d1230-boqueria",
      "articleId": null,
      "reason": "Dishではなく市場、時間、行列、食事役割を含むFoodExperience。ボケリアの既存枠とサンタ・カテリーナ代替を比較する。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "boqueria",
      "relatedPlaceIds": [
        "boqueria",
        "el-quim-boqueria",
        "santa-caterina-market",
        "bar-joan-santa-caterina"
      ],
      "planningDecisionIds": [
        "decision-bcn-market-breakfast"
      ],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "boqueria"
    },
    {
      "id": "cov-bcn-vermut-tapas",
      "cityId": "barcelona",
      "type": "experience",
      "name": "ベルモット／カヴァ＋軽いタパス",
      "importance": "高",
      "scheduleItemId": null,
      "articleId": null,
      "reason": "Beverageとタパスを組み合わせる短時間のFoodExperience。飲酒・採用を前提にせず、混雑と家族の快適性で比較する。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": "el-xampanyet",
      "relatedPlaceIds": [
        "el-xampanyet",
        "quimet-quimet"
      ],
      "planningDecisionIds": [
        "decision-bcn-walk-in-bar"
      ],
      "inclusionStatus": "undecided",
      "targetType": "place",
      "targetId": "el-xampanyet"
    },
    {
      "id": "cov-bcn-calcotada",
      "cityId": "barcelona",
      "type": "experience",
      "name": "カルソターダ",
      "importance": "未評価",
      "scheduleItemId": null,
      "articleId": null,
      "reason": "calçotsというDishではなく、移動・時間・複数皿を伴う冬のFoodExperience。根拠の揃った市内店舗と半日負荷が未解決のためMealOptionを作らない。",
      "rejectionReason": null,
      "experienced": false,
      "placeId": null,
      "relatedPlaceIds": [],
      "planningDecisionIds": [],
      "inclusionStatus": "undecided",
      "targetType": "experience",
      "targetId": "calcotada"
    }
  ],
  "learningArticles": [
    {
      "id": "gaudi-overview",
      "cityId": "barcelona",
      "placeId": null,
      "relatedPlaceIds": [
        "sagrada",
        "parkguell",
        "mila",
        "batllo",
        "guell-palace",
        "casa-vicens"
      ],
      "relatedScheduleItemIds": [
        "d1226-parkguell",
        "d1226-mila",
        "d1226-batllo",
        "d1226-guell-palace",
        "d1226-casa-vicens",
        "d1227-sagrada"
      ],
      "scopeType": "person",
      "title": "ガウディ総論｜6作品をつなぐ",
      "kind": "人物・総論",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "アントニ・ガウディ（1852–1926）は、19世紀末から20世紀初めのバルセロナ（Barcelona）で活躍したカタルーニャ（Catalonia）の建築家です。当時のバルセロナは、古い城壁の外へ新市街が広がり、工業や交通が発達する一方、新しい都市の姿を探していました。そこで生まれたカタルーニャ・モデルニスモ（Modernisme）の中で、ガウディは住宅、都市邸宅、庭園都市、教会という異なる仕事に取り組みました。\n\nガウディの建物は曲線や色が目立ちますが、革新は装飾だけではありません。柱やアーチが重さをどう地面へ伝えるか、光と風をどう奥まで届けるか、人がどう歩き、扉や手すりへどう触れるかまで一緒に考えました。自然から学んだのも花や骨の見た目だけではなく、枝分かれして重さを支える仕組みや、少ない材料で安定する形です。図面だけで決めず、模型で形と力の働きを試したことも大切です。\n\n今回見る6作品は、同じ作風の繰り返しではありません。カサ・ビセンス（Casa Vicens）は若い時期の色と工芸、グエル邸（Palau Güell）は旧市街の邸宅と光、グエル公園（Park Güell）は斜面全体の道・市場・広場、カサ・バトリョ（Casa Batlló）は既存住宅の大胆な改修、カサ・ミラ（Casa Milà）は集合住宅の構造と暮らし、サグラダ・ファミリア（Sagrada Família）は信仰・構造・光を統合する長期の探究です。年代順に比べると、表面の豊かさを保ちながら、建物全体を支える仕組みと空間の一体感が深まる変化が見えてきます。",
        "keyPoints": [
          "自然の「見た目」だけでなく、重さを支え、光や空気を通す「働き」を建築へ置き換えた。",
          "構造、使いやすさ、装飾、家具、職人技を別々にせず、一つの体験として設計した。",
          "バルセロナの成長、依頼主、職人との関係が、自由な実験を実現する条件になった。",
          "6作品を年代と用途で比べると、初期住宅から宗教建築へ続く探究の変化が分かる。"
        ],
        "whyItMatters": "12月26日に5作品、12月27日にサグラダ・ファミリアを見る予定です。全部を「不思議な曲線の名所」として急いで通り過ぎず、作品ごとに解こうとした課題が違うと知っておくと、短い外観見学にも意味が生まれます。現地では、形の好みだけでなく、重さ・光・空気・動線・素材のどれを工夫しているかを一つ選んで比べてください。",
        "sourceIds": [
          "source-sagrada-gaudi-architect",
          "source-muhba-gaudi-bcn-guide",
          "source-design-museum-modernisme",
          "source-unesco-gaudi-works",
          "source-mnac-gaudi-exhibition"
        ]
      },
      "terms": [
        {
          "id": "gaudi-overview-term-modernisme",
          "term": "カタルーニャ・モデルニスモ（Modernisme）",
          "definition": "19世紀末から20世紀初頭のカタルーニャで、文化を近代化しながら地域の歴史やアイデンティティも表そうとした広い芸術運動。国際的なアール・ヌーヴォー（Art Nouveau）と時期や造形が重なるが、バルセロナの都市化、カタルーニャ文化、工芸産業との関係まで含むため、完全な同義語ではない。",
          "sourceIds": [
            "source-design-museum-modernisme",
            "source-muhba-gaudi-bcn-guide",
            "source-unesco-gaudi-works"
          ]
        },
        {
          "id": "gaudi-overview-term-patronage",
          "term": "パトロン／パトロネージュ",
          "definition": "芸術家や建築家へ資金や仕事の機会を与え、制作を支える依頼主とその関係。エウゼビ・グエル（Eusebi Güell）はガウディへ都市邸宅、住宅地、教会計画など異なる課題を託し、長期の実験を可能にした。単なる資金提供ではなく、用途や社会的意図も設計へ影響する。",
          "sourceIds": [
            "source-mnac-gaudi-exhibition",
            "source-palau-guell-trencadis"
          ]
        },
        {
          "id": "gaudi-overview-term-trencadis",
          "term": "トレンカディス（trencadís）",
          "definition": "陶器、ガラス、石などの不規則な断片を組み合わせるモザイク技法。曲面へ沿わせやすく、色彩を生むだけでなく、場所によっては表面を保護する。グエル公園のベンチやカサ・ミラ屋上では、断片と目地が曲面へどう追従するかを見られる。",
          "sourceIds": [
            "source-palau-guell-trencadis",
            "source-la-pedrera-architecture",
            "source-park-guell-emblematic"
          ]
        },
        {
          "id": "gaudi-overview-term-catenary",
          "term": "懸垂線（catenary）",
          "definition": "両端を固定した鎖が、自分の重さで自然に垂れたときにできる曲線。上下を反転すると、石やれんがが主に圧縮されながら重さを地面へ伝えるアーチを考える手掛かりになる。カサ・ミラの屋根裏では、連続する細いれんがアーチを観察できる。",
          "sourceIds": [
            "source-la-pedrera-architecture",
            "source-sagrada-architecture-booklet"
          ]
        },
        {
          "id": "gaudi-overview-term-ruled-surface",
          "term": "線織面（ruled surface）",
          "definition": "直線を一定の規則で動かしてつくる曲面。見た目は複雑に曲がっていても、直線材や明確な幾何学から組み立てられる。サグラダ・ファミリアの柱や天井、カサ・ミラ屋上の階段室では、曲面の中に直線的な生成規則を探すとよい。",
          "sourceIds": [
            "source-sagrada-architecture-booklet",
            "source-la-pedrera-architecture"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "barcelona-context",
          "title": "1. Gaudíが生きたBarcelona",
          "blocks": [
            {
              "id": "gaudi-overview-barcelona-context-1",
              "type": "paragraph",
              "text": "ガウディが仕事を始めた19世紀後半、Barcelonaは城壁撤去後の急速な拡張期にあった。CerdàのEixampleは旧市街の外へ規則正しい街区を広げ、工業化と交通の発達で人口も経済も成長した。新しい集合住宅、富裕層の邸宅、公共空間が必要になり、建築は都市の近代性と依頼主の立場を示す媒体になった。Casa BatllóとCasa Milàが並ぶPasseig de Gràciaは、その競争が街路の景観として見える場所である。",
              "sourceIds": [
                "source-muhba-gaudi-bcn-guide",
                "source-park-guell-origin",
                "source-mnac-gaudi-exhibition"
              ]
            },
            {
              "id": "gaudi-overview-barcelona-context-2",
              "type": "paragraph",
              "text": "Modernismeは、国際的な新しい造形を受け入れながら、Cataloniaの歴史、工芸、言語、文化的な再生も表そうとした。だからガウディの作品には、最新の鉄や工業材料、衛生への関心と、中世建築、地域の素材、宗教的象徴が同居する。華やかなファサードだけを切り取ると、都市の規則、社会対立、産業技術という背景を見失う。ガウディは時代から孤立した奇人ではなく、この変化の中で独自の答えをつくった建築家だった。Eixampleの整った街区では、共通の高さや隣家との境界を守りながら、住みやすさと依頼主の個性を両立させる必要があった。Casa Batllóの改修とCasa Milàの新築は、その同じ都市条件へ異なる方法で答えている。",
              "sourceIds": [
                "source-design-museum-modernisme",
                "source-muhba-gaudi-bcn-guide",
                "source-mnac-gaudi-exhibition",
                "source-unesco-gaudi-works"
              ]
            }
          ],
          "sourceIds": [
            "source-muhba-gaudi-bcn-guide",
            "source-design-museum-modernisme",
            "source-mnac-gaudi-exhibition"
          ]
        },
        {
          "id": "life-and-change",
          "title": "2. 生涯と作品の変化",
          "blocks": [
            {
              "id": "gaudi-overview-life-summary",
              "type": "summary",
              "title": "変化を見る軸",
              "text": "初期のCasa Vicensで多様な歴史様式、色、工芸を試し、Güellとの仕事で都市邸宅・庭園・宗教建築へ課題を広げた。1900年代の住宅では光、換気、構造、動線を統合し、晩年はSagrada Famíliaへ探究を集中した。一直線に装飾が減ったのではなく、表面・構造・象徴がより強く結びついた変化として見る。",
              "sourceIds": [
                "source-unesco-gaudi-works",
                "source-sagrada-gaudi-architect",
                "source-mnac-gaudi-exhibition"
              ]
            },
            {
              "id": "gaudi-overview-life-timeline",
              "type": "timeline",
              "entries": [
                {
                  "date": "1852",
                  "title": "誕生",
                  "text": "6月25日生まれ。のちにBarcelonaで建築を学ぶ。"
                },
                {
                  "date": "1878",
                  "title": "建築学位と初期の仕事",
                  "text": "建築学位を取得。街灯、家具、店舗装飾など、都市と生活に近い小規模な仕事も手がける。"
                },
                {
                  "date": "1883–1885",
                  "title": "Casa Vicens",
                  "text": "タイル製造業者マネル・ビセンスの庭付き夏の家。最初の主要住宅で、庭、光、換気、陶器・れんが・鉄の工芸を一つの住環境へまとめる。"
                },
                {
                  "date": "1882–1883",
                  "title": "Sagrada Famíliaの着工と引継ぎ",
                  "text": "聖堂は1882年に着工し、ガウディは1883年に計画を引き継ぐ。本人の関与は1926年まで続き、工事は後世の解釈と施工へ継承される。"
                },
                {
                  "date": "1886–1890",
                  "title": "Palau Güell",
                  "text": "Eusebi Güellの都市邸宅。旧市街の狭い敷地へ、街路から入る馬車、地下厩舎、家族生活、社交、中央ホールを上下に積層する。"
                },
                {
                  "date": "1900–1914",
                  "title": "Park Güellの住宅地計画",
                  "text": "斜面に宅地、道路、市場、広場、排水を組み込む住宅地計画として進むが未完に終わり、1926年に市営公園として開園する。"
                },
                {
                  "date": "1904–1906",
                  "title": "Casa Batllóの全面改修",
                  "text": "1877年築の既存集合住宅を残し、ファサード、室内、光井戸、換気を全面的に再構成する。新築と取り違えず、既存骨格への介入として見る。"
                },
                {
                  "date": "1906–1912",
                  "title": "Casa Milà",
                  "text": "角地に建つ新築の賃貸集合住宅。柱構造、大きな中庭、自由度の高い住戸、屋根裏と屋上設備を一体で設計する。"
                },
                {
                  "period": "晩年",
                  "title": "Sagrada Famíliaへ集中",
                  "text": "模型と幾何学による構造研究、宗教的象徴、光の構成を統合する。最後の12年は活動をほぼ聖堂へ集中した。"
                },
                {
                  "date": "1926",
                  "title": "死去",
                  "text": "路面電車事故の3日後、6月10日にBarcelonaで死去。工事は資料を解釈しながら後世へ継続された。"
                }
              ],
              "sourceIds": [
                "source-sagrada-gaudi-architect",
                "source-sagrada-history-of-temple",
                "source-mnac-gaudi-exhibition",
                "source-casa-vicens-official-history",
                "source-casa-vicens-garden",
                "source-palau-guell-official-home",
                "source-palau-guell-catalonia-heritage",
                "source-park-guell-history",
                "source-casa-batllo-history",
                "source-la-pedrera-architecture"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-gaudi-architect",
            "source-mnac-gaudi-exhibition",
            "source-sagrada-history-of-temple",
            "source-casa-vicens-official-history",
            "source-casa-vicens-garden",
            "source-palau-guell-official-home",
            "source-palau-guell-catalonia-heritage",
            "source-park-guell-history",
            "source-casa-batllo-history",
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "patronage",
          "title": "3. Güellらのパトロネージュ",
          "blocks": [
            {
              "id": "gaudi-overview-patronage-1",
              "type": "paragraph",
              "text": "建築には土地、資金、用途、許認可が必要で、建築家の発想だけでは実現しない。依頼主は「何を建てるか」だけでなく、どこまで実験を許すかを左右する。Eusebi Güellとガウディの関係は、Palau Güellの都市邸宅、Park Güellの住宅地、Colònia Güellの教会計画へ続いた。住宅、庭園、宗教建築という異なる規模で試せたことが、ガウディの空間・構造・象徴の研究を育てた。",
              "sourceIds": [
                "source-mnac-gaudi-exhibition",
                "source-palau-guell-trencadis",
                "source-park-guell-origin"
              ]
            },
            {
              "id": "gaudi-overview-patronage-2",
              "type": "callout",
              "title": "逸話より関係を見る",
              "text": "Güellが1878年のParis万博でガウディのショーケースを見て才能を発見したという有名な話は、MNACが「伝説」として紹介し、共通の建築家Joan Martorellによる紹介の可能性も示している。出会い方を断定するより、長期にわたり複数の難しい依頼を任せた事実を見る。",
              "sourceIds": [
                "source-mnac-gaudi-exhibition"
              ]
            }
          ],
          "sourceIds": [
            "source-mnac-gaudi-exhibition",
            "source-palau-guell-trencadis"
          ]
        },
        {
          "id": "nature-as-structure",
          "title": "4. 自然を「形」だけでなく「構造」として学ぶ",
          "blocks": [
            {
              "id": "gaudi-overview-nature-1",
              "type": "paragraph",
              "text": "自然との関係を、葉、骨、波に「似ている」という連想だけで終えると、ガウディの設計の半分しか見えない。木は幹から枝へ分かれて広い範囲の重さを集め、骨は必要な方向へ材料を配置し、洞窟や斜面は地形と力の条件から形をつくる。ガウディは、こうした働きを柱の分岐、傾く支持、連続するアーチ、地形に沿う擁壁へ置き換えた。",
              "sourceIds": [
                "source-sagrada-gaudi-architect",
                "source-sagrada-architecture-booklet",
                "source-park-guell-emblematic"
              ]
            },
            {
              "id": "gaudi-overview-nature-2",
              "type": "key-points",
              "items": [
                "Sagrada Famíliaでは、柱が上へ進むほど分岐し、天井の広い範囲を支える流れを見る。",
                "Park Güellでは、柱や擁壁が斜面へ逆らわず、道路と地面を同時に支える形を見る。",
                "Casa Milàでは、屋根裏の反復するアーチが軽い屋根と設備空間をつくる様子を見る。",
                "Casa Batllóでは、生物的な印象の裏に、採光・換気・人の動きを整える仕組みを見る。"
              ],
              "sourceIds": [
                "source-sagrada-architecture-booklet",
                "source-park-guell-emblematic",
                "source-la-pedrera-architecture",
                "source-casa-batllo-interior"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-gaudi-architect",
            "source-sagrada-architecture-booklet"
          ]
        },
        {
          "id": "geometry-and-models",
          "title": "5. 幾何学・荷重・模型・構造実験",
          "blocks": [
            {
              "id": "gaudi-overview-geometry-1",
              "type": "paragraph",
              "text": "複雑に見える形を感覚だけで決めたのではない。ガウディは模型を現場に置き、形と構造を試行錯誤した。平面図や立面図だけでは捉えにくい三次元の荷重を、鎖、重り、石膏模型などで目に見える問題へ変えた。懸垂線を反転したアーチは、荷重を主に圧縮として流す形を探る手掛かりになる。Casa Milàの屋根裏に連続するれんがアーチは、その考えを身体の近くで読める。",
              "sourceIds": [
                "source-sagrada-gaudi-architect",
                "source-la-pedrera-architecture"
              ]
            },
            {
              "id": "gaudi-overview-geometry-2",
              "type": "paragraph",
              "text": "後期には、双曲面や放物面など、直線を規則的に動かしてできる線織面も重要になる。線織面は曲面でありながら直線の集合として定義でき、構造、施工、光の取り込みを同時に考えやすい。Sagrada Famíliaで柱や天井が連続して見えるのは、何でも自由曲線にしたからではなく、幾何学的な規則を組み合わせた結果である。現地では曲面の輪郭だけでなく、同じ規則が反復・回転・分岐する場所を探す。",
              "sourceIds": [
                "source-sagrada-architecture-booklet",
                "source-la-pedrera-architecture"
              ]
            },
            {
              "id": "gaudi-overview-geometry-3",
              "type": "summary",
              "title": "模型は完成形の縮小版ではない",
              "text": "模型は、力の流れ、形の組合せ、光の入り方を検討する設計道具だった。現在のSagrada Família工事も、残された資料と模型の考え方を新しい技術で読み継いでいる。したがって、ガウディ本人が施工した部分と、後世の解釈・施工は区別して見る必要がある。",
              "sourceIds": [
                "source-sagrada-gaudi-architect",
                "source-unesco-gaudi-works"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-gaudi-architect",
            "source-sagrada-architecture-booklet",
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "integrated-design",
          "title": "6. 光、換気、動線、家具まで含む総合設計",
          "blocks": [
            {
              "id": "gaudi-overview-integrated-1",
              "type": "paragraph",
              "text": "若い時期のCasa Vicensから、住宅は明るさ、風通し、衛生、家族生活、芸術を同時に支えるものと考えていた。Casa Batllóでは既存の光井戸を拡張し、上部を濃く下部を淡くした青いタイルと、階ごとに異なる窓寸法で光の偏りを調整した。窓下の開閉部は換気を調整する。色彩は装飾であると同時に、光を分配する仕組みの一部である。",
              "sourceIds": [
                "source-casa-vicens-original-project",
                "source-casa-batllo-interior"
              ]
            },
            {
              "id": "gaudi-overview-integrated-2",
              "type": "paragraph",
              "text": "Casa Milàでは柱で建物を支え、耐力壁への依存を減らして住戸の配置を柔軟にした。二つの大きな中庭は各室へ光と風を送り、入口、車庫へのランプ、エレベーター、サービス階段を組織する。屋上の煙突、換気塔、階段室も設備を隠すのではなく、機能を保ったまま都市景観へ変換した。外観の波だけを見るより、中庭から住戸、屋根裏、屋上へ続く環境の仕組みを見る方が設計の全体像に近い。",
              "sourceIds": [
                "source-la-pedrera-architecture"
              ]
            },
            {
              "id": "gaudi-overview-integrated-3",
              "type": "paragraph",
              "text": "取っ手は手に触れ、手すりは身体を導き、扉や窓は光・風・視線を調整する。鉄、木、ガラス、陶器、石を扱う職人との協働によって、家具や細部まで同じ空間の論理が続く。UNESCOがガウディの価値を建築だけでなく庭園、彫刻、装飾芸術にも認めるのは、この総合性と関係する。現地では大きなファサードを見た後、手の高さにある取っ手や手すりへ視線を戻す。",
              "sourceIds": [
                "source-casa-batllo-interior",
                "source-unesco-gaudi-works",
                "source-la-pedrera-architecture"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-vicens-original-project",
            "source-casa-batllo-interior",
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "materials-and-craft",
          "title": "7. 素材、職人技、色、trencadís",
          "blocks": [
            {
              "id": "gaudi-overview-materials-1",
              "type": "paragraph",
              "text": "ガウディの色は表面へ後から貼った飾りではない。れんが、石、鉄、木、陶器、ガラスは、それぞれの強さ、加工法、手触り、光の反射を使い分けられる。Casa Vicensの幾何学的なタイルとれんが、Palau Güellの鉄と石、Casa Batllóのガラスと陶器、Casa Milàの石と再利用した鉄を比べると、同じ「華やかさ」でも素材の役割が違う。",
              "sourceIds": [
                "source-casa-vicens-original-project",
                "source-palau-guell-trencadis",
                "source-casa-batllo-interior",
                "source-la-pedrera-architecture"
              ]
            },
            {
              "id": "gaudi-overview-materials-2",
              "type": "paragraph",
              "text": "trencadísは不規則な断片を使うため、平らな規格タイルでは覆いにくい曲面へ沿わせやすい。Park Güellの曲がるベンチでは、身体を受ける連続曲面と色彩が結びつく。Casa Milà屋上では、石、陶器、ガラス片が階段室などを覆い、場所によって防水・表面保護と色彩の両方へ働く。断片が「廃材だから自由」なのではなく、職人が目地、色、曲率を調整する高度な仕事である。",
              "sourceIds": [
                "source-park-guell-emblematic",
                "source-palau-guell-trencadis",
                "source-la-pedrera-architecture"
              ]
            }
          ],
          "sourceIds": [
            "source-palau-guell-trencadis",
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "faith-and-late-work",
          "title": "8. 宗教観と後期作品",
          "blocks": [
            {
              "id": "gaudi-overview-faith-1",
              "type": "paragraph",
              "text": "ガウディは宗教教育を受け、Sagrada Famíliaへ40年以上関わり、最後の12年は活動をほぼ聖堂へ集中した。ここではキリスト教の物語と典礼、塔やファサードの象徴、柱と天井の構造、色を伴う光が一つの建築体験へ重ねられる。信仰は装飾モチーフの題材だけでなく、長期間を要する共同事業へ身を置く姿勢と、空間全体の順序を形づくった。",
              "sourceIds": [
                "source-sagrada-gaudi-architect",
                "source-sagrada-architecture-booklet"
              ]
            },
            {
              "id": "gaudi-overview-faith-2",
              "type": "callout",
              "title": "「ガウディのSagrada Família」の範囲",
              "text": "ガウディは聖堂を完成させていない。UNESCOの構成資産として特に示されるのは、本人が手がけたNativity façadeとCryptである。現在見る全体には、残された計画・模型・写真を後世が解釈し、新しい技術で施工した部分が含まれる。本人の発想を尊重しつつ、時代をまたぐ共同制作として見る。",
              "sourceIds": [
                "source-unesco-gaudi-works",
                "source-sagrada-gaudi-architect"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-gaudi-architect",
            "source-sagrada-architecture-booklet",
            "source-unesco-gaudi-works"
          ]
        },
        {
          "id": "six-works-comparison",
          "title": "9. 今回訪れる6作品をつなぐ比較",
          "blocks": [
            {
              "id": "gaudi-overview-six-works-intro",
              "type": "paragraph",
              "text": "6作品は用途も敷地も年代も違うため、曲線の多さで順位をつけない。まず用途、次に敷地の制約を確かめ、最後に目立つ装飾が機能・素材・象徴・修復のどれに関わるかを比べる。各作品が与えられた課題へどう答え、次の仕事へどんな問いを持ち越したかを見る。詳細な部位解説は作品別記事へ残し、ここでは変化をつかむ比較軸に絞る。",
              "sourceIds": [
                "source-unesco-gaudi-works"
              ]
            },
            {
              "id": "gaudi-overview-six-works-table",
              "type": "comparison",
              "columns": [
                {
                  "title": "Casa Vicens｜1883–1885・庭付き夏の家",
                  "text": "課題：Gràciaの庭、光、風と工芸を一つの住環境へまとめる。変化：初期から植物、幾何学、衛生、職人技を統合。最優先：庭との境界で陶器、れんが、鉄が自然と住宅をどうつなぐか。"
                },
                {
                  "title": "Palau Güell｜1886–1890・都市邸宅",
                  "text": "課題：狭い旧市街へ馬車、家族生活、社交を上下に積層する。変化：地上の入口から厩舎、中央ホール、屋上へ光と動線を導く。最優先：街路から二つの馬車入口、地下厩舎、中央ホールまでの連続。"
                },
                {
                  "title": "Park Güell｜1900–1914・未完の住宅地計画（1926年市営公園）",
                  "text": "課題：斜面に道路、市場、広場、宅地、水の仕組みを組み込む。変化：建物単体から地形・インフラ・景観の設計へ拡張。最優先：写真地点より先に、丘、道、高架橋、排水が地形へ応答する関係。"
                },
                {
                  "title": "Casa Batlló｜1877年築、1904–1906改修・集合住宅",
                  "text": "課題：既存骨格を壊さず、住環境と街路の表情を全面的に刷新する。変化：物語的な表面と採光・換気を一体化。最優先：改修立面から光井戸へ進み、青の濃淡、窓寸法、換気スラットを上下で比較する。"
                },
                {
                  "title": "Casa Milà｜1906–1912・新築賃貸集合住宅",
                  "text": "課題：大規模な角地で柔軟な住戸、光、風、車両動線、設備をつくる。変化：柱構造と二つの中庭が生活の自由度を支える。最優先：対岸から立面を見て、中庭、屋根裏アーチ、屋上設備のつながりを追う。"
                },
                {
                  "title": "Sagrada Família｜1882年着工、1883–1926関与・聖堂",
                  "text": "課題：宗教的物語、典礼、巨大構造、光を長期建設へ統合する。変化：模型と幾何学の探究を宗教空間へ集中。最優先：三ファサードを区別し、内部の分岐柱と光、ガウディ本人期と後世の施工を比べる。"
                }
              ],
              "sourceIds": [
                "source-sagrada-gaudi-architect",
                "source-sagrada-history-of-temple",
                "source-mnac-gaudi-exhibition",
                "source-casa-vicens-official-history",
                "source-casa-vicens-garden",
                "source-palau-guell-official-home",
                "source-palau-guell-catalonia-heritage",
                "source-park-guell-history",
                "source-casa-batllo-history",
                "source-la-pedrera-architecture",
                "source-unesco-gaudi-works"
              ]
            }
          ],
          "sourceIds": [
            "source-unesco-gaudi-works",
            "source-sagrada-gaudi-architect",
            "source-sagrada-history-of-temple",
            "source-mnac-gaudi-exhibition",
            "source-casa-vicens-official-history",
            "source-casa-vicens-garden",
            "source-palau-guell-official-home",
            "source-palau-guell-catalonia-heritage",
            "source-park-guell-history",
            "source-casa-batllo-history",
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "visit-order",
          "title": "10. 今回の旅で見る順番が理解へどう効くか",
          "blocks": [
            {
              "id": "gaudi-overview-visit-order-1",
              "type": "paragraph",
              "text": "現在の旅程では、12月26日にPark Güell、Casa Milà、Casa Batlló、Palau Güell、Casa Vicensを巡り、翌27日にSagrada Famíliaを訪れる。年代順ではないが、最初にPark Güellで地形と大きな計画を体で感じ、続く住宅で暮らしの細部へ視点を縮め、翌日にSagrada Famíliaで構造・光・象徴が巨大な空間へ統合される様子を見る流れになる。",
              "sourceIds": [
                "source-park-guell-emblematic",
                "source-la-pedrera-architecture",
                "source-casa-batllo-interior",
                "source-palau-guell-trencadis",
                "source-casa-vicens-original-project",
                "source-sagrada-architecture-booklet"
              ]
            },
            {
              "id": "gaudi-overview-visit-order-2",
              "type": "paragraph",
              "text": "一方で12月26日は5作品あり、すべてを同じ深さで理解するのは難しい。内部見学する作品では光・換気・動線を一つ選び、外観中心の作品では街路や敷地への応答を一つ選ぶと比較が残る。Casa VicensやPalau Güellの初期性を、後に見るCasa MilàやSagrada Famíliaの「未完成な前段階」と扱わないことも大切である。それぞれが異なる依頼と場所への完成した答えで、その間に方法の広がりがある。\n\n時間と体力の配分は、作品の採用・見送りや旅程変更ではなく、現地でどの比較軸へ集中するかの判断である。大きな仕組みを歩いて理解する余力があればPark Güellの地形かCasa Milàの中庭・設備、中程度の集中力ならCasa Batllóの光井戸、疲れていれば当日実際に入れるPalau GüellかCasa Vicensで一軸だけを選ぶ。Sagrada Famíliaは翌日に、三ファサード、内部の柱と光、本人期と後世の時代差へ順に集中する。営業、公開範囲、入場可否は動的であり、この記事では保証しない。",
              "sourceIds": [
                "source-casa-vicens-original-project",
                "source-palau-guell-trencadis",
                "source-la-pedrera-architecture",
                "source-sagrada-gaudi-architect"
              ]
            },
            {
              "id": "gaudi-overview-visit-order-3",
              "type": "key-points",
              "items": [
                "余力があるとき：Park Güellでは丘・道・高架橋・水、Casa Milàでは中庭・屋根裏・屋上設備という大きな仕組みを一つ追う。",
                "中程度の集中力：Casa Batllóの立面から光井戸へ進み、青の濃淡、窓寸法、換気部を上下で一回だけ比較する。",
                "疲労時：当日実際に入れるPalau GüellまたはCasa Vicensで、光・動線・素材・庭の一軸だけを選び、見られない範囲は推測しない。",
                "翌日のSagrada Família：三ファサード、分岐柱と光、ガウディ本人期と後世の施工を順に見て、前日の住宅・都市作品との違いを言葉にする。"
              ],
              "sourceIds": [
                "source-park-guell-emblematic",
                "source-casa-batllo-interior",
                "source-la-pedrera-architecture",
                "source-sagrada-architecture-booklet"
              ]
            }
          ],
          "sourceIds": [
            "source-unesco-gaudi-works"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "onsite-lenses",
          "title": "6作品をつなぐ10の観察レンズ",
          "blocks": [
            {
              "id": "gaudi-overview-onsite-lenses",
              "type": "onsite-checklist",
              "items": [
                "荷重：柱・壁・アーチのどこから地面へ重さが流れるか、一本の経路を指で追う。",
                "直線と曲線：すべてが曲線だと思わず、直線や平面を残した場所と役割を探す。",
                "光：光の入口、反射する面、暗い場所まで届かせる工夫を一つ見つける。",
                "換気：窓、光井戸、中庭、換気塔が、空気をどう通すかを確認する。",
                "動線：入口から主空間、上階、屋上へ、身体がどう導かれるかを歩いて感じる。",
                "触れる細部：取っ手、扉、手すり、窓が、手や視線の高さに合わせてあるかを見る。",
                "素材：石・れんが・鉄・木・陶器・ガラスが、構造、保護、反射、手触りのどれを担うか考える。",
                "敷地：街路、角地、狭い旧市街、斜面など、その場所の制約へ建物がどう応答するか見る。",
                "変化：Casa VicensとPalau Güellの初期、1900年代の住宅、Sagrada Famíliaの後期で、同じ問いがどう変わるか比べる。",
                "時間：Sagrada Famíliaではガウディ本人が手がけた部分と、資料を解釈して後世が施工した部分を区別して見る。"
              ],
              "sourceIds": [
                "source-unesco-gaudi-works",
                "source-casa-vicens-original-project",
                "source-palau-guell-trencadis",
                "source-park-guell-emblematic",
                "source-casa-batllo-interior",
                "source-la-pedrera-architecture",
                "source-sagrada-architecture-booklet"
              ]
            }
          ],
          "sourceIds": [
            "source-unesco-gaudi-works"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1226",
        "d1227"
      ],
      "sourceIds": [
        "source-unesco-gaudi-works",
        "source-muhba-gaudi-bcn-guide",
        "source-design-museum-modernisme",
        "source-mnac-gaudi-exhibition",
        "source-sagrada-gaudi-architect",
        "source-sagrada-architecture-booklet",
        "source-casa-vicens-original-project",
        "source-palau-guell-trencadis",
        "source-park-guell-origin",
        "source-park-guell-emblematic",
        "source-casa-batllo-history",
        "source-casa-batllo-interior",
        "source-la-pedrera-architecture",
        "source-sagrada-history-of-temple",
        "source-casa-vicens-official-history",
        "source-casa-vicens-garden",
        "source-palau-guell-official-home",
        "source-palau-guell-catalonia-heritage",
        "source-park-guell-history"
      ]
    },
    {
      "id": "sagrada",
      "cityId": "barcelona",
      "placeId": "sagrada",
      "relatedPlaceIds": [
        "sagrada"
      ],
      "relatedScheduleItemIds": [
        "d1227-sagrada"
      ],
      "scopeType": "place",
      "title": "サグラダ・ファミリア",
      "kind": "建築",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "サグラダ・ファミリア（Basílica de la Sagrada Família）は、聖家族に捧げられたカトリックの贖罪聖堂で、2010年に小バシリカとなりました。建設は1882年にフランシスコ・デ・パウラ・デル・ビリャール（Francisco de Paula del Villar）のネオ・ゴシック案で始まり、1883年にアントニ・ガウディ（Antoni Gaudí）が引き継ぎました。ガウディは、外から建物を支える扶壁に頼る案を、柱の分岐で重さを直接地面へ流し、壁を光へ開く計画に変えました。長く建設が続くのは、巨大で複雑な寄付事業を世代ごとに造ること、ガウディが1926年に未完成のまま亡くなったこと、1936年に図面や模型が損傷し、後世が残存資料を解釈してきたことが重なるためです。\n\n外観は三つの物語を別々の時代と造形で語ります。東の生誕のファサード（Nativity façade）は誕生と生命の喜びを植物・動物に満ちた彫刻で表し、ガウディが直接監督しました。西の受難のファサード（Passion façade）は死と復活を扱い、後世の建築に彫刻家ジュゼップ・マリア・スビラックス（Josep Maria Subirachs）の角張った人物群が加わります。南の栄光のファサード（Glory façade）は主正面として栄光と最後の審判を扱う計画で、2026年7月23日時点では工事の途上です。違いは「統一感がない」のではなく、ガウディの構想を複数世代が読み継いだ時間の層です。\n\n内部では、森のように枝分かれする柱が天井と塔の重さを受け、双曲面の採光口と大きな窓が光を広げます。東側は朝に応じる青・緑、西側は夕方に応じる橙・赤のステンドグラスが中心です。今回十分な時間を使う理由は、外観、構造、光、作者の違いを一つずつ比較して初めて全体がつながるからです。現地では最初に、建物へ近づく前に塔の階層を見る、生誕と受難を同じ距離から比べる、内部で一本の柱の分岐から天井へ重さの流れを追う、の三点から始めてください。",
        "keyPoints": [
          "1882年に別建築家の案で始まり、1883年からGaudíが構造・光・象徴を統合する計画へ転換した。",
          "生誕／受難／栄光は主題、方位、施工年代、作者が異なり、建設を継いだ時間の層を見せる。",
          "分岐柱と双曲面は、複雑な見た目だけでなく、荷重を流し、壁と天井から光を入れる仕組みである。",
          "「Gaudíの建物」と後世の建築家・彫刻家・工芸家の仕事を区別して観察する。"
        ],
        "whyItMatters": "今回の旅では12月27日に塔付き見学を含む長い滞在枠を確保しています。二つの完成済みファサードを比較し、身廊で構造と光を追い、公開されていれば塔や博物館で視点を変えるには、一つの観察に急がない時間が必要です。料金、時刻、当日の公開範囲はこの記事へ複製せず、関連する場所と予定から確認してください。",
        "sourceIds": [
          "source-sagrada-history-of-temple",
          "source-sagrada-brief-history-booklet",
          "source-sagrada-nativity-booklet",
          "source-sagrada-passion-booklet",
          "source-sagrada-glory-booklet",
          "source-sagrada-interior-booklet",
          "source-unesco-gaudi-works"
        ]
      },
      "terms": [
        {
          "id": "sagrada-term-expiatory-temple",
          "term": "贖罪聖堂（expiatory temple）",
          "definition": "祈りや寄付によって償いを表す聖堂。この建設事業は個人の大口依頼だけでなく寄付を基盤として始まり、長い世代継承の条件にもなった。",
          "sourceIds": [
            "source-sagrada-brief-history-booklet",
            "source-sagrada-history-of-temple"
          ]
        },
        {
          "id": "sagrada-term-basilica",
          "term": "小バシリカ（minor basilica）",
          "definition": "教皇から特別な称号を与えられた教会。サグラダ・ファミリアは2010年に奉献され小バシリカとなったが、司教座を置くカテドラルとは役割が異なる。",
          "sourceIds": [
            "source-sagrada-history-of-temple",
            "source-sagrada-brief-history-booklet"
          ]
        },
        {
          "id": "sagrada-term-nave",
          "term": "身廊（nave）",
          "definition": "礼拝者が集まり、入口から祭壇方向へ進む主要空間。ここでは中央1列と左右各2列の五廊式を、分岐柱と異なる高さの天井がまとめる。",
          "sourceIds": [
            "source-sagrada-interior-booklet"
          ]
        },
        {
          "id": "sagrada-term-branching-column",
          "term": "分岐柱（branching column）",
          "definition": "幹から枝のように分かれ、天井・窓・屋根・塔の荷重を複数方向から受けて基礎へ伝える柱。森の比喩は外見だけでなく構造の働きと結び付く。",
          "sourceIds": [
            "source-sagrada-interior-booklet",
            "source-sagrada-architecture-booklet"
          ]
        },
        {
          "id": "sagrada-term-ruled-surface",
          "term": "線織面（ruled surface）",
          "definition": "直線を規則に沿って動かしてできる曲面。曲がって見えても直線材と明確な幾何学で定義でき、構造、施工、採光を一緒に検討できる。",
          "sourceIds": [
            "source-sagrada-architecture-booklet",
            "source-sagrada-interior-booklet"
          ]
        },
        {
          "id": "sagrada-term-hyperboloid",
          "term": "双曲面（hyperboloid）",
          "definition": "傾いた直線群からつくられる線織面の一つ。天井では採光口や交差するヴォールトとなり、光を曲面へ広げながら軽い天井を構成する。",
          "sourceIds": [
            "source-sagrada-interior-booklet",
            "source-sagrada-architecture-booklet"
          ]
        },
        {
          "id": "sagrada-term-double-twist-column",
          "term": "二重ねじれ柱（double-twist column）",
          "definition": "多角形や星形の断面を左右へ反対向きにねじり、上へ進むほど円へ近づける柱。表面の回転と分岐が連続し、安定性と細い外観を両立する。",
          "sourceIds": [
            "source-sagrada-interior-booklet"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "beginnings-and-gaudi",
          "title": "1. 始まりとGaudíの参加",
          "blocks": [
            {
              "id": "sagrada-beginnings-villar",
              "type": "paragraph",
              "text": "1882年3月19日に礎石が置かれた時、設計者はGaudíではなく教区建築家Francisco de Paula del Villarだった。当初案は尖頭アーチ、扶壁、飛梁、一本の鐘塔を備えたネオ・ゴシック教会である。材料費をめぐる技術上の相違からVillarが離れ、1883年に若いGaudíが計画を引き継いだ。この起点を知ると、現在の建物を一度に思いついた完成像としてではなく、既存の地下聖堂と敷地条件を受け取りながら変えた設計として読める。",
              "sourceIds": [
                "source-sagrada-history-of-temple",
                "source-sagrada-brief-history-booklet"
              ]
            },
            {
              "id": "sagrada-beginnings-turn",
              "type": "paragraph",
              "text": "Gaudíは中世聖堂の基本平面を捨てず、構造と象徴の関係を組み替えた。外側の飛梁で壁を支える代わりに、傾斜・分岐する柱で荷重を内側から基礎へ流す。壁が重さを背負わなければ窓を増やせる。三ファサード、塔の高さ、光の方位、典礼の動線を一つの階層へ結んだ。GAU-01総論で見た「自然の形ではなく働きを学ぶ」「構造・光・象徴を分けない」という観察軸が、この作品では巨大な宗教空間へ集中している。",
              "sourceIds": [
                "source-sagrada-gaudi-architect",
                "source-sagrada-architecture-booklet",
                "source-sagrada-interior-booklet"
              ]
            },
            {
              "id": "sagrada-beginnings-observation",
              "type": "paragraph",
              "text": "計画転換は古い様式から新しい様式へ表面を着替えたことではない。Villar案にあった地下聖堂を受け継ぎながら、Gaudíは柱、ヴォールト、窓、塔の寸法を相互に従属させた。ある部位の形を変えれば、荷重、光、象徴の順序も変わる。現地で「Gaudíらしい曲線」を探す前に、地下から塔までが一つの測定体系と構造階層へ組み直された点を押さえると、装飾の多さだけに評価が偏らない。",
              "sourceIds": [
                "source-sagrada-brief-history-booklet",
                "source-sagrada-architecture-booklet",
                "source-sagrada-interior-booklet"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-history-of-temple",
            "source-sagrada-brief-history-booklet",
            "source-sagrada-architecture-booklet"
          ]
        },
        {
          "id": "plan-and-long-construction",
          "title": "2. 全体計画と長期建設",
          "blocks": [
            {
              "id": "sagrada-long-construction",
              "type": "paragraph",
              "text": "長期建設を「未完だから失敗」とだけ捉えると、この事業の仕組みを見落とす。贖罪聖堂は寄付を基盤とし、規模と技術の難しさに応じて部分ごとに進んだ。Gaudí自身も生涯で全体を完成できないと理解し、生誕のファサードを垂直方向へ先に建て、後継者が構造・装飾・施工法を読み取れる実物の手本にした。存命中に完成を見た鐘塔は1925年の聖バルナバ塔1本だけである。",
              "sourceIds": [
                "source-sagrada-brief-history-booklet",
                "source-sagrada-nativity-booklet",
                "source-sagrada-history-of-temple"
              ]
            },
            {
              "id": "sagrada-history-timeline",
              "type": "timeline",
              "entries": [
                {
                  "date": "1882",
                  "title": "Villar案で着工",
                  "text": "3月19日に礎石。ネオ・ゴシックの当初計画。"
                },
                {
                  "date": "1883",
                  "title": "Gaudíが継承",
                  "text": "既存計画を引き継ぎ、構造・光・象徴を統合する案へ転換。"
                },
                {
                  "date": "1891",
                  "title": "生誕のファサード着工",
                  "text": "Gaudíが直接監督し、後継世代の実物の手本とする。"
                },
                {
                  "date": "1925",
                  "title": "聖バルナバ塔完成",
                  "text": "Gaudíが完成を見た唯一の鐘塔。"
                },
                {
                  "date": "1926",
                  "title": "Gaudí死去",
                  "text": "弟子Domènec Sugranyesらが工事を継ぐ。"
                },
                {
                  "date": "1936–1939",
                  "title": "資料損傷と再建",
                  "text": "作業場が破壊され、図面・写真・模型が損傷。残存断片と公刊資料から復元。"
                },
                {
                  "date": "1954–1977",
                  "title": "受難側の主要施工",
                  "text": "受難のファサード基礎から4鐘塔完成まで。"
                },
                {
                  "date": "1986–2010",
                  "title": "身廊と内部空間",
                  "text": "身廊、柱、ヴォールト等を施工し、2010年に奉献。"
                },
                {
                  "date": "2005",
                  "title": "UNESCO登録拡張",
                  "text": "生誕のファサードと地下聖堂が構成資産となる。"
                },
                {
                  "date": "2026-07-23確認",
                  "title": "中央塔外装と継続工事",
                  "text": "イエス・キリストの塔外装は172.5mへ到達。内部と栄光側などは継続。"
                }
              ],
              "sourceIds": [
                "source-sagrada-history-of-temple",
                "source-sagrada-brief-history-booklet",
                "source-sagrada-jesus-tower-2026",
                "source-unesco-gaudi-works"
              ]
            },
            {
              "id": "sagrada-phased-building",
              "type": "paragraph",
              "text": "部分建設には資金不足への受け身の対応以上の意味がある。一つのファサードを塔まで立ち上げれば、寄付者と市民は計画の規模を実物で共有でき、後継者は図面では伝わりにくい曲面、石の積み方、彫刻と構造の境界を観察できる。ただし実物の手本があっても、別方位・別主題の受難や栄光をそのまま複製はできない。各世代は共通原理と部位固有の設計を分けて判断する必要があった。",
              "sourceIds": [
                "source-sagrada-brief-history-booklet",
                "source-sagrada-nativity-booklet",
                "source-sagrada-history-of-temple"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-history-of-temple",
            "source-sagrada-brief-history-booklet",
            "source-unesco-gaudi-works"
          ]
        },
        {
          "id": "three-facades",
          "title": "3. 三つのファサード",
          "blocks": [
            {
              "id": "sagrada-facades-reading",
              "type": "paragraph",
              "text": "三つのファサードは同じ物語の繰り返しではない。東から朝日を受ける生誕は、誕生・受肉・生命の喜びを密な植物、動物、人物で包む。西の受難は、傾く列柱、深い陰影、角張る人物で死と復活の緊張をつくる。南の栄光は主正面として、人間の歴史、最後の審判、教え、永遠の栄光を扱う計画である。方位、光、主題、空間の表情が対応する一方、すべての図像が一人の作者・一時期に完成したわけではない。",
              "sourceIds": [
                "source-sagrada-nativity-booklet",
                "source-sagrada-passion-booklet",
                "source-sagrada-glory-booklet",
                "source-sagrada-architecture-booklet"
              ]
            },
            {
              "id": "sagrada-facades-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "生誕｜東・生命",
                  "text": "誕生と幼年期。1891年着工、Gaudíが直接監督。自然と人物の密度、三扉の上下関係、朝の光を見る。塔は1925年と1930年完成。"
                },
                {
                  "title": "受難｜西・死と復活",
                  "text": "1954年基礎、塔は1977年完成。Subirachsの主要彫刻は1986–2010年。骨のような列柱、鋭い線、下から上へ進む物語を見る。"
                },
                {
                  "title": "栄光｜南・主正面",
                  "text": "栄光、最後の審判、教えを扱う。Gaudíの模型と図像計画を後世が解釈して施工中。完成済みの正面として説明しない。"
                }
              ],
              "sourceIds": [
                "source-sagrada-nativity-booklet",
                "source-sagrada-passion-booklet",
                "source-sagrada-glory-booklet"
              ]
            },
            {
              "id": "sagrada-facades-observation",
              "type": "paragraph",
              "text": "比較では細部の数を競わず、まず同じ距離から輪郭を見る。生誕は三扉の上へ彫刻が連続し、塔の垂直線へ生命が増殖する印象をつくる。受難は大きな空白、傾斜柱、深い凹凸が人物群を切り分け、夕方の斜光で影を強める。次に近づき、人物の身体、石の表面、視線が進む方向を比べる。この「遠景の構成→近景の作者差」の順なら、図像名を全部知らなくても建築として違いを説明できる。",
              "sourceIds": [
                "source-sagrada-nativity-booklet",
                "source-sagrada-passion-booklet",
                "source-sagrada-architecture-booklet"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-nativity-booklet",
            "source-sagrada-passion-booklet",
            "source-sagrada-glory-booklet"
          ]
        },
        {
          "id": "towers-and-skyline",
          "title": "4. 塔と都市のスカイライン",
          "blocks": [
            {
              "id": "sagrada-tower-hierarchy",
              "type": "paragraph",
              "text": "完成計画の18塔は高さと位置で宗教的階層を表す。三ファサードに4本ずつ置く12鐘塔は使徒、交差部周囲の4塔は福音書記者、後陣上の1塔は聖母マリア、中央の最高塔はイエス・キリストである。使徒塔は98.5–120m、福音書記者塔は135m、聖母塔は138m、イエス塔は172.5m。単に高い塔を数えるのではなく、外周から中心へ高さが上がり、最高塔を囲んで守るようなピラミッドをつくる配置を見る。",
              "sourceIds": [
                "source-sagrada-towers-booklet",
                "source-sagrada-architecture-booklet"
              ]
            },
            {
              "id": "sagrada-tower-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "12使徒",
                  "text": "三ファサード各4本の鐘塔。生誕4本と受難4本は完成、栄光4本は2026年版公式資料で未施工。ファサードごとに断面と肋の数も異なる。"
                },
                {
                  "title": "4福音書記者",
                  "text": "交差部を囲む135mの中央塔群。イエス塔の周囲に位置し、それぞれの象徴を頂く。"
                },
                {
                  "title": "聖母マリア",
                  "text": "後陣上の138m。2021年に星を頂く塔として完成。"
                },
                {
                  "title": "イエス・キリスト",
                  "text": "交差部中央172.5m。2026年に十字架上腕まで外装が到達したが、内部工事と聖堂全体の工事は別に続く。"
                }
              ],
              "sourceIds": [
                "source-sagrada-towers-booklet",
                "source-sagrada-history-of-temple",
                "source-sagrada-jesus-tower-2026"
              ]
            },
            {
              "id": "sagrada-skyline-observation",
              "type": "paragraph",
              "text": "塔は正面写真だけでは重なって本数と中心が分かりにくい。建物へ向かう街路で一度止まり、歩きながら外周の使徒塔と中央塔群の前後関係がどう入れ替わるかを見る。生誕・受難の使徒塔では頂部の色、文字、司教の標章も階層を示す。都市からは一つの塊に見えた塔群が、敷地を回ると異なる人物と方位を担う独立した塔へ分かれる。その視点変化がスカイライン設計の一部である。",
              "sourceIds": [
                "source-sagrada-towers-booklet"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-towers-booklet",
            "source-sagrada-jesus-tower-2026"
          ]
        },
        {
          "id": "plan-nave-columns",
          "title": "5. 平面・身廊・柱・天井",
          "blocks": [
            {
              "id": "sagrada-five-naves",
              "type": "paragraph",
              "text": "平面は中央身廊1列と左右各2列の五廊式で、翼廊と交差部、祭壇、後陣へつながる。古い聖堂の型を残しつつ、内部ではほぼどこからでも広い範囲を見通せる。高さは側廊30m、中央身廊45m、交差部60m、後陣上部75mと段階的に上がる。入口から祭壇へ歩く時、床面の十字形だけでなく、視線が低い側廊から高い中心へ集められる断面の階層を感じる。",
              "sourceIds": [
                "source-sagrada-interior-booklet",
                "source-sagrada-brief-history-booklet"
              ]
            },
            {
              "id": "sagrada-column-forest",
              "type": "paragraph",
              "text": "柱は樹木の比喩を持つが、重要なのは働きである。多くの柱は傾き、節のような位置から複数回分岐して、ヴォールト、窓、屋根、中央塔の荷重を受ける。中央へ近いほど強い石を選び、色と耐力を対応させる。一本の柱を床から見上げ、どの枝がどの天井区画へ入るかを追うと、森の印象が装飾ではなく荷重経路から生まれると分かる。壁は主要荷重から解放され、窓を開く面へ変わる。",
              "sourceIds": [
                "source-sagrada-interior-booklet",
                "source-sagrada-architecture-booklet"
              ]
            },
            {
              "id": "sagrada-nave-movement",
              "type": "paragraph",
              "text": "中央軸だけを急いで祭壇へ進むと、五廊式の幅と柱列のずれを見落とす。まず中央で左右対称の遠近を取り、次に側廊へ数歩移り、柱が重なって壁と窓を隠したり開いたりする変化を見る。交差部では高さが増し、後陣の金色の双曲面へ視線が集まる。平面の十字、断面の高さ、歩行による見え隠れが重なって礼拝空間の方向をつくるので、一本の静止写真だけで内部を理解しない。",
              "sourceIds": [
                "source-sagrada-interior-booklet"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-interior-booklet",
            "source-sagrada-architecture-booklet"
          ]
        },
        {
          "id": "loads-and-geometry",
          "title": "6. 荷重と幾何学",
          "blocks": [
            {
              "id": "sagrada-load-path",
              "type": "paragraph",
              "text": "荷重は「柱が支える」で終わらない。塔と屋根の重さを上部の枝が集め、傾斜柱の軸に近い方向へ流し、基礎へ渡す。力の向きに柱を合わせれば、外側から飛梁で押し返す必要を減らせる。Gaudíは模型と幾何学で三次元の釣合いを検討した。現地では傾いた柱を不安定と決めつけず、柱の傾きと上部から来る枝が同じ方向へ連続しているかを見る。",
              "sourceIds": [
                "source-sagrada-gaudi-architect",
                "source-sagrada-architecture-booklet",
                "source-sagrada-interior-booklet"
              ]
            },
            {
              "id": "sagrada-geometry-rules",
              "type": "paragraph",
              "text": "複雑な曲面は手の癖で自由にうねらせたものではない。柱は多角形・星形の断面を左右へねじる二重ねじれで、上へ行くほど円へ近づく。天井の双曲面は傾く直線を規則的に動かしてつくる線織面で、交差させればヴォールトや星形の採光口になる。直線から施工できるため、形の反復と寸法を伝えやすい。曲面の中に直線、回転、反復を探すことが、見た目から設計規則へ進む入口になる。",
              "sourceIds": [
                "source-sagrada-interior-booklet",
                "source-sagrada-architecture-booklet"
              ]
            },
            {
              "id": "sagrada-geometry-construction",
              "type": "paragraph",
              "text": "線織面は設計者の説明用の抽象語にとどまらない。曲面上に直線の母線を引ければ、模型で位置を測り、部材の寸法を定め、施工時に隣の面との接続を管理できる。二重ねじれ柱も断面の頂点が上昇とともに移る規則を持つため、異なる太さの柱へ同じ生成原理を適用できる。反復可能な規則が、巨大で世代をまたぐ工事に設計情報を渡す共通言語になった。",
              "sourceIds": [
                "source-sagrada-architecture-booklet",
                "source-sagrada-interior-booklet"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-gaudi-architect",
            "source-sagrada-architecture-booklet",
            "source-sagrada-interior-booklet"
          ]
        },
        {
          "id": "light-and-colour",
          "title": "7. 光と色",
          "blocks": [
            {
              "id": "sagrada-light-structure",
              "type": "paragraph",
              "text": "光はステンドグラスだけの効果ではない。分岐柱が荷重を引き受けるため側壁へ多くの窓を開けられ、天井にも289の双曲面採光口が計画された。採光口の中心にある金属要素は光を散らし、双曲面は明るさをれんがや白いコンクリート面へ広げる。構造が壁を解放し、幾何学が天井から光を配るため、荷重と光を別々の章として見ない。",
              "sourceIds": [
                "source-sagrada-interior-booklet",
                "source-sagrada-architecture-booklet"
              ]
            },
            {
              "id": "sagrada-stained-glass",
              "type": "paragraph",
              "text": "ステンドグラスはJoan Vila-Grauが1999年からGaudíの指針を解釈して制作した。下部を濃く、上部を透明にし、目線近くでは色を感じながら中央上部には明るさを残す。東の生誕側は朝の光に応じる青・緑、西の受難側は夕方の光に応じる橙・赤が中心で、歩くと床・柱・人の表面へ色が移る。訪問時刻、季節、天候で強さは変わるので、左右の色面と影の方向を比較する。",
              "sourceIds": [
                "source-sagrada-interior-booklet"
              ]
            },
            {
              "id": "sagrada-light-observation",
              "type": "paragraph",
              "text": "色を見る位置も選ぶ。窓の正面へ近づくとガラス自体の色が強く、中央身廊へ戻ると色の光が白い面へ混ざる様子を見やすい。床の斑点は雲で動き、柱の曲面では帯状に伸びる。東西を一度に見渡せる場所で寒色と暖色の均衡を取り、その後に片側へ近づくと、光が空間全体を二分するのではなく、時間と歩行に応じて重なっていることが分かる。",
              "sourceIds": [
                "source-sagrada-interior-booklet"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-interior-booklet",
            "source-sagrada-architecture-booklet"
          ]
        },
        {
          "id": "sculpture-symbol-authors",
          "title": "8. 彫刻、象徴、複数作者",
          "blocks": [
            {
              "id": "sagrada-multiple-authors",
              "type": "paragraph",
              "text": "現在見える彫刻をすべてGaudí作と呼ばない。生誕のファサードはGaudíが建築・装飾・象徴を直接監督し、実在の人や動物から型を取る方法も試したが、没後にJaume BusquetsやEtsuro Sotooらが加わった。受難の主要人物群はJosep Maria Subirachsが1986–2010年に自分の鋭い造形言語で制作した。内部のステンドグラスはJoan Vila-Grauである。設計の枠組み、本人の監督部分、後世の解釈、個々の作者を区別する。",
              "sourceIds": [
                "source-sagrada-nativity-booklet",
                "source-sagrada-passion-booklet",
                "source-sagrada-interior-booklet",
                "source-sagrada-history-of-temple"
              ]
            },
            {
              "id": "sagrada-symbol-reading",
              "type": "paragraph",
              "text": "象徴は好きな連想を当てるのではなく、位置と公式資料から範囲を限定する。生誕の三扉はイエス、マリア、ヨセフに対応し、受難では下部から上へ最後の時、死、復活をたどる。12使徒、4福音書記者、聖母、イエスという塔の階層も配置で読む。一方、同じ部位へ複数の主題が重なることがあり、一つの動植物を万能な暗号のように断定しない。現地ではまず大きな物語の順序を取り、細部は出典を確認できるものだけ解釈する。",
              "sourceIds": [
                "source-sagrada-nativity-booklet",
                "source-sagrada-passion-booklet",
                "source-sagrada-glory-booklet",
                "source-sagrada-towers-booklet"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-nativity-booklet",
            "source-sagrada-passion-booklet",
            "source-sagrada-glory-booklet",
            "source-sagrada-interior-booklet"
          ]
        },
        {
          "id": "inheritance-and-current-work",
          "title": "9. Gaudí死後の継承・解釈・工事",
          "blocks": [
            {
              "id": "sagrada-damaged-models",
              "type": "paragraph",
              "text": "1926年のGaudí死後は弟子Domènec Sugranyesらが継ぎ、1936年の内戦期に作業場が破壊された。図面と写真が焼け、石膏模型は砕かれた。1939年以降、残った模型断片、公刊図面、写真、既に建った部分を組み合わせて復元と施工を再開した。したがって現在の建物は、完全な施工図を機械的に再現したものでも、後世が自由に作ったものでもない。証拠の濃淡を持つ資料を建築家が解釈し、新しい構造計算・加工技術で実現した継承である。",
              "sourceIds": [
                "source-sagrada-history-of-temple",
                "source-sagrada-brief-history-booklet",
                "source-unesco-gaudi-works"
              ]
            },
            {
              "id": "sagrada-current-work",
              "type": "callout",
              "title": "工事状況｜2026-07-23確認",
              "text": "公式履歴と工事解説によると、2026年2月にイエス・キリストの塔の十字架上腕が設置され、中央塔外装は172.5mへ到達した。ただし内部工事は2027年・2028年にも続くとされ、2026年版塔資料では栄光のファサードの4使徒塔も未施工である。「中央塔の外形が頂点へ達した」と「聖堂全体が完成した」を同義にしない。完成時期、見学動線、公開範囲は変わり得るため、訪問直前に公式情報とPlaceを再確認する。",
              "sourceIds": [
                "source-sagrada-history-of-temple",
                "source-sagrada-towers-booklet",
                "source-sagrada-jesus-tower-2026"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-history-of-temple",
            "source-sagrada-brief-history-booklet",
            "source-sagrada-towers-booklet",
            "source-sagrada-jesus-tower-2026",
            "source-unesco-gaudi-works"
          ]
        },
        {
          "id": "connections-to-five-works",
          "title": "10. GAU-01の他5作品とのつながり",
          "blocks": [
            {
              "id": "sagrada-return-overview",
              "type": "summary",
              "title": "総論へ戻す問い",
              "text": "「ガウディ総論｜6作品をつなぐ」で得た荷重、光、空気、動線、素材、敷地という観察軸を、ここではSagrada Famíliaへ適用する。一般的なModernismeや生涯年表は繰り返さず、前日に見る住宅・都市邸宅・公園の小さな解決が、宗教建築の大きな構造へどう変換されたかを比べる。",
              "sourceIds": [
                "source-unesco-gaudi-works",
                "source-sagrada-gaudi-architect"
              ]
            },
            {
              "id": "sagrada-five-works-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "Casa Vicens",
                  "text": "色と工芸、光と換気の初期住宅。平らな面の幾何学から、Sagrada Famíliaの連続曲面への変化を見る。"
                },
                {
                  "title": "Palau Güell",
                  "text": "中央空間へ光と人を集める都市邸宅。暗い街路から上へ抜ける光を、巨大身廊の上下方向と比べる。"
                },
                {
                  "title": "Park Güell",
                  "text": "斜面で道・柱・擁壁・排水を統合。地形へ力を逃がす考えを、分岐柱の荷重経路と比べる。"
                },
                {
                  "title": "Casa Batlló",
                  "text": "改修で光井戸と換気を調整。色を飾りでなく光の分配として使う点をステンドグラスと比べる。"
                },
                {
                  "title": "Casa Milà",
                  "text": "柱構造、自由な住戸、屋根裏アーチ。壁を荷重から解放する発想をSagrada Famíliaの大窓と比べる。"
                }
              ],
              "sourceIds": [
                "source-unesco-gaudi-works",
                "source-sagrada-architecture-booklet",
                "source-sagrada-interior-booklet"
              ]
            }
          ],
          "sourceIds": [
            "source-unesco-gaudi-works",
            "source-sagrada-gaudi-architect"
          ]
        },
        {
          "id": "visit-order-and-time",
          "title": "11. 今回の訪問順と時間の使い方",
          "blocks": [
            {
              "id": "sagrada-zone-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "外観",
                  "text": "建物へ近づく前に全体、次に生誕と受難を同じ距離から比較。栄光は工事中の部位として確認する。"
                },
                {
                  "title": "身廊",
                  "text": "中央軸を一度歩き、一本の柱を床から天井まで追い、東西の色を左右で比較する。最優先。"
                },
                {
                  "title": "塔",
                  "text": "当日のチケット・天候・運用で公開される場合だけ利用。上り下りより、塔群の階層と街への向きを確認する。"
                },
                {
                  "title": "地下・博物館等",
                  "text": "公開されていれば、模型断片・資料・施工法で継承を補う。地下礼拝空間への入場可否は当日案内に従う。"
                }
              ],
              "sourceIds": [
                "source-sagrada-nativity-booklet",
                "source-sagrada-passion-booklet",
                "source-sagrada-interior-booklet",
                "source-sagrada-towers-booklet"
              ]
            },
            {
              "id": "sagrada-time-priorities",
              "type": "key-points",
              "items": [
                "最初の15分：離れた位置の全景と、生誕／受難の輪郭・彫刻密度・影を比較する。",
                "次の中心時間：身廊で中央軸、一本の分岐柱、天井の双曲面、東西の色を順に見る。",
                "公開されている追加範囲：塔または博物館で外から得られない視点を一つ選ぶ。",
                "時間不足時：身廊の構造と光 → 生誕／受難比較 → 作者・年代差の順を守り、細かな図像を後回しにする。"
              ],
              "sourceIds": [
                "source-sagrada-interior-booklet",
                "source-sagrada-nativity-booklet",
                "source-sagrada-passion-booklet",
                "source-sagrada-towers-booklet"
              ]
            },
            {
              "id": "sagrada-visit-decision",
              "type": "paragraph",
              "text": "長い滞在枠は、すべての細部を回収するためではなく、比較してから次の観察を選ぶ余白である。外観で作者差に関心が向けば博物館、内部で構造に関心が向けば柱と天井、都市との関係を見たければ公開時の塔を選ぶ。公開条件に左右される追加範囲より、身廊と二つのファサードで必ず得られる観察を先に確保する。",
              "sourceIds": [
                "source-sagrada-interior-booklet",
                "source-sagrada-nativity-booklet",
                "source-sagrada-passion-booklet",
                "source-sagrada-towers-booklet"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-interior-booklet",
            "source-sagrada-towers-booklet"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "onsite-priority-route",
          "title": "現地2分｜優先観察10項目",
          "blocks": [
            {
              "id": "sagrada-onsite-priority-checklist",
              "type": "onsite-checklist",
              "items": [
                "近づく前：1街区ほど離れた位置で立ち止まり、低い12使徒塔から中央の福音書記者・聖母・イエス塔へ高さが上がる階層を指で追う。",
                "生誕側：東の正面から、人物だけでなく植物・動物が扉から塔へ密度を変えながら広がる順序を見る。",
                "受難側：西の正面で、生誕と同じ距離を取り、傾く列柱、深い影、Subirachsの角張る人物を三点比較する。",
                "作者差：生誕のGaudí監督部分、没後の彫刻、受難のSubirachsを「全部Gaudí作」とせず、年代と造形の手掛かりを一つ言葉にする。",
                "中央軸：身廊入口から祭壇方向へ数歩進み、側廊30mから中央・交差部へ高くなる視線の流れを確認する。",
                "荷重：一本の柱を選び、床→傾き→節→枝→天井区画まで目で追い、重さが壁でなく柱へ集まる経路を示す。",
                "幾何学：天井の星形開口を一つ選び、曲面の中に反復する直線と双曲面の交差を探す。",
                "光と色：東の青・緑と西の橙・赤を同じ場所から左右に見比べ、色が柱・床・人へ移る位置を一つ探す。",
                "構造と自然：木に「似ている」部分と、分岐して荷重を運ぶ「働き」を別々に一つずつ指摘する。",
                "時間不足時：身廊の柱と光、生誕／受難比較、作者・年代差の順を優先。塔・地下・博物館はチケットと当日の公開範囲で利用できる場合だけ追加する。"
              ],
              "sourceIds": [
                "source-sagrada-nativity-booklet",
                "source-sagrada-passion-booklet",
                "source-sagrada-interior-booklet",
                "source-sagrada-towers-booklet",
                "source-unesco-gaudi-works"
              ]
            }
          ],
          "sourceIds": [
            "source-sagrada-interior-booklet",
            "source-sagrada-towers-booklet",
            "source-unesco-gaudi-works"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1227"
      ],
      "sourceIds": [
        "source-unesco-gaudi-works",
        "source-sagrada-gaudi-architect",
        "source-sagrada-history-of-temple",
        "source-sagrada-brief-history-booklet",
        "source-sagrada-architecture-booklet",
        "source-sagrada-nativity-booklet",
        "source-sagrada-passion-booklet",
        "source-sagrada-glory-booklet",
        "source-sagrada-interior-booklet",
        "source-sagrada-towers-booklet",
        "source-sagrada-jesus-tower-2026"
      ]
    },
    {
      "id": "mila",
      "cityId": "barcelona",
      "placeId": "mila",
      "relatedPlaceIds": [
        "mila"
      ],
      "relatedScheduleItemIds": [
        "d1226-mila"
      ],
      "scopeType": "place",
      "title": "カサ・ミラ（ラ・ペドレラ）",
      "kind": "建築",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "カサ・ミラ（Casa Milà）は、1906〜1912年にパッセイ・ダ・グラシア（Passeig de Gràcia）の角地へ建てられた賃貸集合住宅です。依頼主はペレ・ミラ（Pere Milà）とロゼール・セギモン（Roser Segimon）。通称ラ・ペドレラ（La Pedrera）は「採石場」を意味し、波打つ石の外観を表します。ただし、ここを奇妙な外観だけの建物と思うと、住宅としての工夫を見落とします。\n\n内部は柱で荷重を受け、間取りを耐力壁から比較的自由にしました。二つの大きな中庭は住戸へ光と空気を送り、地下の車庫、エレベーター、サービス階段は新しい都市生活を支えます。屋根裏では270のれんがアーチが軽く屋根を支え、断熱と通風の層をつくりました。屋上の煙突、換気塔、階段室出口も彫刻に見えますが、それぞれ煙、空気、人の動線を処理する設備です。\n\n現地では、道路の反対側で石と鉄の波を見た後、中庭で光と換気、屋根裏で連続アーチ、屋上で三種類の設備を順に確かめてください。前後に見るカサ・バトリョが既存住宅の改修なら、カサ・ミラは新築集合住宅全体を組み替えた答えです。時間が少ない場合も、外観の印象だけで終えず、中庭と屋上設備のどちらかを機能から説明できれば、90分を使う意味が残ります。",
        "keyPoints": [
          "波打つ石の外観の内側に、柱構造と自由度の高い住戸平面がある。",
          "二つの中庭は装飾的な吹抜けではなく、採光・換気・動線の中心である。",
          "270のれんがアーチは屋根を軽く支え、屋上設備は機能と造形を一体化する。",
          "カサ・バトリョの改修、サグラダ・ファミリアの宗教建築と用途の違いを比べる。"
        ],
        "whyItMatters": "12月26日は複数のガウディ作品を見る予定です。カサ・ミラでは「住む建物を、構造・光・空気・設備からどう更新したか」に焦点を絞ると、同じ日の作品を形の違いだけでなく用途への答えとして比較できます。",
        "sourceIds": [
          "source-la-pedrera-history",
          "source-la-pedrera-architecture",
          "source-unesco-gaudi-works"
        ]
      },
      "terms": [
        {
          "id": "mila-term-la-pedrera",
          "term": "ラ・ペドレラ（La Pedrera）",
          "definition": "カタルーニャ語で「採石場」を意味するカサ・ミラの通称。石が削り出されたように連続する外観に結び付く。初出時期や当初の語調は今回の資料では断定しない。",
          "sourceIds": [
            "source-la-pedrera-history",
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "mila-term-eixample",
          "term": "アシャンプラ（Eixample）",
          "definition": "旧市街の外に広がった計画的新市街。カサ・ミラは角を落とした街区の敷地へ建ち、二本の通りを別々の正面にせず曲面で連続して回り込む。",
          "sourceIds": [
            "source-la-pedrera-history",
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "mila-term-open-plan",
          "term": "自由平面（open plan）",
          "definition": "耐力壁ではなく柱を主に使うことで、住戸の間取りを組み替えやすくする考え方。無制限の自由ではなく、柱・梁・床・外周に支えられた自由である。",
          "sourceIds": [
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "mila-term-courtyard",
          "term": "中庭（pati / courtyard）",
          "definition": "建物内部へ大きく開く空間。カサ・ミラの二つの中庭は住戸の採光・換気を助け、入口・ランプ・エレベーターをつなぐ動線の核でもある。",
          "sourceIds": [
            "source-la-pedrera-architecture",
            "source-la-pedrera-courtyards"
          ]
        },
        {
          "id": "mila-term-catenary",
          "term": "釣合いアーチ／カテナリーアーチ",
          "definition": "屋根裏に連続する薄いれんがアーチ。270本が高さを変えながら屋根を軽く支え、洗濯や物干し等の実用空間と、住戸を暑さから隔てる断熱・通風層をつくった。",
          "sourceIds": [
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "mila-term-badalot",
          "term": "階段室出口（badalot）",
          "definition": "屋根裏から屋上へ上がる階段を覆う建築要素。大きな造形物に見えるが、人が屋根裏と段差のある屋上を行き来する上下動線を雨風から守る設備である。",
          "sourceIds": [
            "source-la-pedrera-architecture",
            "source-la-pedrera-roof-terrace"
          ]
        },
        {
          "id": "mila-term-trencadis",
          "term": "トレンカディス（trencadís）",
          "definition": "陶器・石・ガラスなどの断片を組むモザイク。屋上では色や光沢だけでなく、平らな規格材では難しい曲面へ沿い、防水層を保護する表面としての働きにも注目する。",
          "sourceIds": [
            "source-la-pedrera-architecture",
            "source-la-pedrera-roof-terrace"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "name-and-building",
          "title": "1. 採石場と呼ばれた集合住宅",
          "blocks": [
            {
              "id": "mila-name-context",
              "type": "paragraph",
              "text": "正式名カサ・ミラは依頼主ペレ・ミラの姓に由来し、ラ・ペドレラは採石場を意味する通称である。波打つ石の外壁は一枚の正面をつくるのではなく、パッセイ・ダ・グラシアとプロベンサ通りの角を連続して回り込む。凹凸の影、32のバルコニーに付く鍛鉄、窓の不規則な反復が、巨大な岩盤のような印象をつくる。だが石の外壁は内部の荷重を担う主な耐力壁ではない。名前の印象から入り、外壁と構造の役割を分けることが最初の読み方になる。",
              "sourceIds": [
                "source-la-pedrera-architecture",
                "source-la-pedrera-history"
              ]
            },
            {
              "id": "mila-apartment-purpose",
              "type": "paragraph",
              "text": "建物は一人の家族だけの邸宅ではなく、依頼主の主階と複数の賃貸住戸、店舗を含む都市型集合住宅だった。外観の自由さは、内側で多くの世帯を収め、光、空気、移動、設備を配る課題と結び付く。現在も住居機能を残しながら、文化施設、展示、事務所、店舗、公開見学が共存する。用途が重なる建物だからこそ、観光用に見える部分と日常生活を支えた部分を区別して見る。賃貸住宅という前提に立つと、豪華な主階だけでなく、各住戸へ同じように光と空気を届け、入居者や使用方法が変わっても間取りを調整できることが建物全体の価値になる。外観の強さと反復可能な住宅の仕組みを対立させず、同時に成立させた計画として読む。",
              "sourceIds": [
                "source-la-pedrera-history",
                "source-la-pedrera-heritage"
              ]
            }
          ],
          "sourceIds": [
            "source-la-pedrera-history",
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "clients-and-eixample",
          "title": "2. 依頼主とEixample角地",
          "blocks": [
            {
              "id": "mila-clients",
              "type": "paragraph",
              "text": "ロゼール・セギモンは1905年にパッセイ・ダ・グラシアとプロベンサ通りの角地を取得し、ペレ・ミラとともにガウディへ新しい建物を依頼した。新市街の主要通りは、工業や商業で成功した層が住居と社会的立場を示す場所でもあった。依頼主の主階を確保しつつ、残りを賃貸する計画は、象徴性と不動産としての実用性を同時に求める。人物逸話を膨らませるより、この用途の組合せが設計条件を生んだ点を押さえる。所有者が暮らす主階、賃料を生む上階、街路に開く店舗を一棟へ収めるため、格式を示す入口と日常の管理動線、広い居室とサービス空間を調整する必要があった。建築家の個性だけでなく、依頼・経営・生活という三つの条件から設計を考える。",
              "sourceIds": [
                "source-la-pedrera-history"
              ]
            },
            {
              "id": "mila-chamfer-site",
              "type": "paragraph",
              "text": "Eixampleの街区は角を斜めに切り、交差点に広がりを与える。ガウディは二本の通りを別々の正面として処理せず、曲面を連ねて角の境界を弱めた。内部は円形に近い中庭と楕円形に近い中庭を中心に二つの棟を組織し、入口と地下へのランプでつなぐ。都市の規則正しい街区へ、連続する外周と複数の内部軸を差し込んだ答えとして理解する。",
              "sourceIds": [
                "source-la-pedrera-architecture",
                "source-la-pedrera-courtyards"
              ]
            }
          ],
          "sourceIds": [
            "source-la-pedrera-history",
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "construction-and-debate",
          "title": "3. 1906〜1912年の建設と対立",
          "blocks": [
            {
              "id": "mila-construction-timeline",
              "type": "timeline",
              "entries": [
                {
                  "date": "1905",
                  "title": "敷地取得",
                  "text": "Roser SegimonがEixample角地を取得する。"
                },
                {
                  "date": "1906-02-02",
                  "title": "図面提出・着工",
                  "text": "市へ図面を提出し工事が始まる。"
                },
                {
                  "date": "1908",
                  "title": "建設中から報道",
                  "text": "専門誌が構造の新しさと建設の独創性を紹介する。"
                },
                {
                  "date": "1909-12-28",
                  "title": "monumental character",
                  "text": "市のEixample委員会が記念碑的性格を認め、条例の厳格適用を外す。"
                },
                {
                  "date": "1912-10-31",
                  "title": "完成証明",
                  "text": "Gaudíが全館を賃貸可能とする完成証明を出す。"
                },
                {
                  "date": "1962 / 1969",
                  "title": "市・国の保護",
                  "text": "市の遺産目録、国の歴史芸術記念物へ進む。"
                },
                {
                  "date": "1984-11-02",
                  "title": "世界遺産",
                  "text": "Park Güell、Palau GüellとともにUNESCO登録。"
                },
                {
                  "date": "1986–1996",
                  "title": "全館修復",
                  "text": "取得後の大規模修復を経て文化センターとして公開。"
                },
                {
                  "date": "2013",
                  "title": "財団運営",
                  "text": "Fundació Catalunya La Pedreraが所有・運営を担う。"
                }
              ],
              "sourceIds": [
                "source-la-pedrera-history",
                "source-la-pedrera-heritage",
                "source-la-pedrera-conservation",
                "source-unesco-gaudi-works"
              ]
            },
            {
              "id": "mila-debate-context",
              "type": "paragraph",
              "text": "高さや容積など条例との摩擦があり、建設中から論争の対象になった。一方で1909年の市委員会は建物の記念碑的性格を認めた。現在の評価を当時からの満場一致と考えず、実用住宅としての法規、依頼主の要求、造形上の実験が衝突した過程を見る。出典不明の風刺や発言は用いず、公式年表で確認できる行政判断と完成証明を骨格にする。外壁の高さや柱の位置をめぐる問題は、自由な造形が都市制度の外にあったことを意味しない。むしろ規則のある角地で、どこまで建物を連続させ、住宅面積と街路景観を両立できるかを交渉した記録である。年月日は工事の節目として使い、伝説の真偽を補う材料にはしない。",
              "sourceIds": [
                "source-la-pedrera-history",
                "source-la-pedrera-heritage"
              ]
            }
          ],
          "sourceIds": [
            "source-la-pedrera-history",
            "source-la-pedrera-heritage"
          ]
        },
        {
          "id": "structure-and-free-plan",
          "title": "4. 柱構造と自由な平面",
          "blocks": [
            {
              "id": "mila-column-structure",
              "type": "paragraph",
              "text": "住戸階では石やれんがの柱、鉄の梁、床が荷重を受け、間仕切壁を主要な耐力要素から外した。公式解説は石のファサードを非耐力のカーテンウォールと説明し、6,000を超える石材を金属要素で構造へつなぐ。外壁が重そうに見えることと、荷重を運ぶ主役であることは同じではない。現地では窓間の石だけでなく、入口や中庭で見える柱位置を探し、外周と内部骨格を分けて考える。",
              "sourceIds": [
                "source-la-pedrera-architecture"
              ]
            },
            {
              "id": "mila-plan-freedom",
              "type": "paragraph",
              "text": "柱構造は、住戸の間取りを家族や賃借人の必要に合わせて変えやすくする。曲面の外周に対し、室内の壁は必ずしも放射状・直線状に固定されない。ただし自由平面は無秩序ではない。柱の位置、二つの中庭、階段・エレベーター、外窓、配管など変えにくい骨格があり、その間で部屋を組む。構造上の自由と暮らし上の制約を同時に見ると、単なる「壁が曲がった家」から設計の仕組みへ進める。柱の間隔が一定でなくても、荷重が床と梁を経て柱へ流れ、外壁は窓やバルコニーの配置へ応答できる。見学時は柱を一本見つけ、その真上と真下に何が続くか、隣の間仕切壁と役割がどう違うかを考える。平面の自由は構造を消すことではなく、骨格を整理して壁の役割を変えることである。",
              "sourceIds": [
                "source-la-pedrera-architecture"
              ]
            }
          ],
          "sourceIds": [
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "courtyards-light-air",
          "title": "5. 二つの中庭が配る光・空気・動線",
          "blocks": [
            {
              "id": "mila-two-courtyards",
              "type": "paragraph",
              "text": "カサ・ミラは小さな換気孔だけに頼らず、二つの大きな中庭を住戸の内側へ置いた。外周に面しない部屋も中庭側の窓から光と空気を得られ、内側のファサードは残余空間ではなく色、窓、柱、壁画を備えた主要面になる。道路側の石の単色性と、中庭側の暖色や絵画を比較すると、外と内で異なる明るさを設計していることが分かる。",
              "sourceIds": [
                "source-la-pedrera-architecture",
                "source-la-pedrera-courtyards"
              ]
            },
            {
              "id": "mila-courtyard-movement",
              "type": "paragraph",
              "text": "中庭は入口、エレベーター、主階への階段、地下へのランプを結ぶ交通空間でもある。車や馬車は中央を通り、人は側部から入り、上階住戸へはエレベーターを主要動線として向かう。見上げるだけでなく、どの入口から誰がどこへ移動したかを追うと、採光装置と動線装置が同じ空間に重なる。二つの中庭の形、窓の大きさ、入口との距離も見比べる。下層では上空が遠くなるため、壁面の色や窓の寸法も光の感じ方に関わる。道路側だけを建物の正面と考えず、住戸が毎日向き合う中庭側も第二のファサードとして観察すると、外観写真では分からない住環境の設計が見えてくる。",
              "sourceIds": [
                "source-la-pedrera-architecture",
                "source-la-pedrera-courtyards"
              ]
            }
          ],
          "sourceIds": [
            "source-la-pedrera-architecture",
            "source-la-pedrera-courtyards"
          ]
        },
        {
          "id": "modern-life-and-movement",
          "title": "6. 車庫・エレベーターと近代生活",
          "blocks": [
            {
              "id": "mila-garage",
              "type": "paragraph",
              "text": "地下には馬車と自動車のための車庫があり、中庭をつなぐ広い螺旋状ランプからアクセスした。自動車が普及し始める時代に、街路から建物内部へ車両を収めることは新しい集合住宅の条件だった。公式解説は住宅建築の地下車庫として先駆的だったとするが、現地で現在の見学経路と当初の車両経路を混同しない。入口扉の中央の大きな開口と、人が通る側部の関係を確認する。",
              "sourceIds": [
                "source-la-pedrera-architecture",
                "source-la-pedrera-courtyards"
              ]
            },
            {
              "id": "mila-lifts-service",
              "type": "paragraph",
              "text": "上階への日常動線ではエレベーターが重視され、主階への華やかな階段と、賃貸住戸を支えるサービス階段が役割を分けた。階段を建物の中心的記念空間にする従来の構成から離れ、移動時間と住戸面積を調整する判断である。現在の来館者用エレベーター運用は動的なので、歴史的な設計意図と当日の案内を分ける。現地では扉、エレベーター位置、中庭から住戸入口までの距離を見る。車庫とエレベーターは別々の珍しい設備ではなく、街路から住戸まで人・荷物・車両を段階的に振り分ける一つの交通計画である。主階の儀礼性と賃貸階の日常性が同居するため、誰の移動を短くし、どの動線を見せたかを比べる。",
              "sourceIds": [
                "source-la-pedrera-architecture"
              ]
            }
          ],
          "sourceIds": [
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "dwelling-and-craft",
          "title": "7. 住戸と触れる細部",
          "blocks": [
            {
              "id": "mila-dwelling-rooms",
              "type": "paragraph",
              "text": "公開住戸では、通り側の居室、中庭側のサービス空間、廊下や扉の連なりをたどる。曲線壁は見た目の効果だけでなく、外周の波と中庭の形の間へ部屋を納める結果でもある。窓からの光、部屋どうしのつながり、家具を置ける平らな面のバランスを見れば、自由平面が実際の暮らしにどう翻訳されたかを考えられる。展示された住戸は一つの再現・公開範囲であり、全住戸が同一だったとはみなさない。",
              "sourceIds": [
                "source-la-pedrera-architecture",
                "source-la-pedrera-history"
              ]
            },
            {
              "id": "mila-touch-details",
              "type": "paragraph",
              "text": "入口扉は小さなガラス片を不規則な格子へ組み、下部を保護しつつ上部から光を入れる。バルコニーの鍛鉄は鉄材、棒、鎖をリベット等で組み、同じ模様を単純反復しない。取っ手、覗き窓、郵便受け、手すりは、目で見る彫刻ではなく手が触れ、身体を導く道具である。触れてよい展示だけで形と操作を確認し、素材の豪華さより、握る・開く・見るという行為との対応を読む。細部の曲線を自然物の似姿だけで説明せず、指が掛かる向き、扉が動く範囲、光を通しながら視線を遮る方法まで確認する。建物全体の柱構造が間取りを調整しやすくしたのと同じように、小さな部品も身体の動作へ具体的に応答している。",
              "sourceIds": [
                "source-la-pedrera-architecture"
              ]
            }
          ],
          "sourceIds": [
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "attic-arches",
          "title": "8. 270のれんがアーチがつくる屋根裏",
          "blocks": [
            {
              "id": "mila-attic-structure",
              "type": "paragraph",
              "text": "屋根裏では270本の薄いれんがアーチが間隔と高さを変えながら連続する。重い一枚壁で屋根を支えるのでなく、必要な高さに応じてアーチを変え、軽い骨格で起伏する屋根を受ける。歩きながら一つのアーチを正面から見た後、斜め方向へ連なりを追うと、同じ部材の反復が屋上の複雑な地形へ変わる過程を想像できる。数学用語の正確さを競うより、力と形の反復を捉える。",
              "sourceIds": [
                "source-la-pedrera-architecture"
              ]
            },
            {
              "id": "mila-attic-function",
              "type": "paragraph",
              "text": "この空間は現在の展示室だけでなく、もともと洗濯、物干し、倉庫、エレベーター機械に関わる実用層だった。住戸と屋根の間に空気の層を置くことで、断熱と通風にも寄与する。サグラダ・ファミリアの巨大な分岐柱と比べると、カサ・ミラのアーチは住宅設備を包む小さく反復可能な構造である。展示物だけを追わず、足元、アーチの厚み、天井高の変化を一度見る。各アーチの高さを変えれば、その上に載る屋根面の起伏を細かく調整できる。下から見る反復と、屋上で感じる段差を上下の対応として結ぶと、展示室と彫刻的な屋上が一つの構造断面だったことを理解しやすい。",
              "sourceIds": [
                "source-la-pedrera-architecture"
              ]
            }
          ],
          "sourceIds": [
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "rooftop-functions",
          "title": "9. 屋上は設備をまとめた地形",
          "blocks": [
            {
              "id": "mila-rooftop-types",
              "type": "comparison",
              "columns": [
                {
                  "title": "階段室出口 6基",
                  "text": "人の上下動線を覆う大きな要素。階段の進行方向と外形を対応させる。"
                },
                {
                  "title": "換気塔 2基",
                  "text": "屋根裏などの空気を排出する。開口と風の通り道を見る。"
                },
                {
                  "title": "煙突 29本",
                  "text": "暖房の煙道をまとめる。複数の筒を束ねた形と頂部を確認する。"
                },
                {
                  "title": "屋上面",
                  "text": "段差と起伏が設備の高さを整理し、階段・通路・眺望をつなぐ。"
                }
              ],
              "sourceIds": [
                "source-la-pedrera-architecture",
                "source-la-pedrera-roof-terrace"
              ]
            },
            {
              "id": "mila-rooftop-form-function",
              "type": "paragraph",
              "text": "屋上設備は兵士や抽象彫刻に見立てられるが、先に機能を分類する。階段室出口は人、換気塔は空気、煙突は煙を扱う。トレンカディスや石片は曲面へ沿い、防水層を保護しながら色と反射を加える。設備を隠すのでなく、都市の空へ見える造形へ変えた点が重要である。写真だけに集中すると段差と分類を見失うので、まず三種類を一つずつ指さし、その後に表面を見る。煙突の束は排気口をまとめながら風への抵抗を考え、階段室出口は内部の螺旋や上り下りを外形に表す。眺望のためだけの展望台ではなく、住宅の最上部で熱・空気・煙・人を処理する作業面を歩いていると捉える。",
              "sourceIds": [
                "source-la-pedrera-architecture",
                "source-la-pedrera-roof-terrace"
              ]
            }
          ],
          "sourceIds": [
            "source-la-pedrera-architecture",
            "source-la-pedrera-roof-terrace"
          ]
        },
        {
          "id": "heritage-and-conservation",
          "title": "10. 保護・修復・現在の複合利用",
          "blocks": [
            {
              "id": "mila-protection",
              "type": "paragraph",
              "text": "評価は建設当初の論争から、1962年のBarcelona市遺産目録、1969年の国指定、1984年のUNESCO登録へ変化した。世界遺産ではカサ・ミラ単独の奇観ではなく、ガウディ作品群が示す技術・造形・工芸の統合と、近代建築への影響の一部として位置付けられる。保護指定は建物を時間から切り離すことではなく、住居・店舗・文化利用を続けながら価値を守る枠組みである。",
              "sourceIds": [
                "source-la-pedrera-heritage",
                "source-unesco-gaudi-works"
              ]
            },
            {
              "id": "mila-restoration",
              "type": "paragraph",
              "text": "長い改変と保存不足の後、1986年の取得から1996年まで全館修復が進み、文化センターとして公開された。その後も主ファサード、背面、中庭、壁画など部位ごとの保存が続く。現在見える仕上げをすべて1912年のままと思わず、原設計、後世の改変、復元・保存の層として見る。最新展示や店舗の内容は変わり得るため、記事の静的説明には固定しない。保存では石、鉄、壁画、設備の傷み方が異なり、一律に新品へ戻すのではなく、資料調査と材料ごとの処置が必要になる。公開施設として安全に使うことと、住宅として重ねた時間を残すことの両立も、現在進行形の設計課題である。",
              "sourceIds": [
                "source-la-pedrera-history",
                "source-la-pedrera-conservation"
              ]
            }
          ],
          "sourceIds": [
            "source-la-pedrera-heritage",
            "source-la-pedrera-conservation",
            "source-unesco-gaudi-works"
          ]
        },
        {
          "id": "compare-gaudi-works",
          "title": "11. Casa Batlló・Sagrada Famíliaとの違い",
          "blocks": [
            {
              "id": "mila-gaudi-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "Casa Milà",
                  "text": "新築集合住宅。柱構造、大中庭、住戸、屋根裏、設備屋上を建物全体で統合する。"
                },
                {
                  "title": "Casa Batlló",
                  "text": "既存集合住宅の改修。ファサード、主階、光井戸、換気を既存骨格へ重ねる。"
                },
                {
                  "title": "Sagrada Família",
                  "text": "宗教建築。分岐柱、光、塔、図像を長期建設と複数作者の中で統合する。"
                },
                {
                  "title": "Gaudí総論",
                  "text": "荷重・光・空気・動線・素材という共通軸を担当。この記事は住宅固有の部位と順路に絞る。"
                }
              ],
              "sourceIds": [
                "source-unesco-gaudi-works",
                "source-la-pedrera-architecture",
                "source-casa-batllo-history",
                "source-sagrada-architecture-booklet"
              ]
            },
            {
              "id": "mila-comparison-reading",
              "type": "paragraph",
              "text": "三作品を「曲線が多い」という一語へまとめない。カサ・ミラでは、壁を荷重から解放して住戸を変えやすくし、中庭で光と空気を配り、最上部に生活設備を集めた。カサ・バトリョでは既存建物の制約をどう改修したか、サグラダ・ファミリアでは巨大な宗教空間で荷重と光をどう結び付けたかが中心になる。同じ観察語を用途ごとに言い換えることが、連続訪問の学びになる。例えば「光」はカサ・ミラでは多数の住戸へ日常的に配る環境条件、カサ・バトリョでは既存の深い建物を改修する手段、サグラダ・ファミリアでは典礼空間と象徴を組織する要素になる。「構造」も柱による平面の自由、改修で残す骨格、巨大空間の荷重経路へ分かれる。比較は優劣ではなく、課題と答えの対応を明確にするために行う。",
              "sourceIds": [
                "source-unesco-gaudi-works",
                "source-la-pedrera-architecture"
              ]
            }
          ],
          "sourceIds": [
            "source-unesco-gaudi-works",
            "source-la-pedrera-architecture"
          ]
        },
        {
          "id": "mila-visit-order",
          "title": "12. 今回の90分をどう使うか",
          "blocks": [
            {
              "id": "mila-visit-zone-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "外観 5–10分",
                  "text": "道路の反対側から角地全体、石の凹凸、鍛鉄バルコニーを比較する。"
                },
                {
                  "title": "中庭 約10分",
                  "text": "窓、壁画、入口、エレベーター、地下ランプを光・空気・動線で読む。"
                },
                {
                  "title": "住戸・屋根裏 25–35分",
                  "text": "暮らしの細部と270アーチを、公開範囲に沿って確認する。"
                },
                {
                  "title": "屋上 15–20分",
                  "text": "階段室出口、換気塔、煙突を分類。天候・足元・当日運用を優先する。"
                }
              ],
              "sourceIds": [
                "source-la-pedrera-architecture",
                "source-la-pedrera-accessibility"
              ]
            },
            {
              "id": "mila-time-shortage",
              "type": "paragraph",
              "text": "時間不足時は、外観で通称の意味を確認し、中庭で住宅の核心である採光・換気を取り、屋根裏か屋上のどちらかで構造と設備を一つ説明する。屋上は段差が多く、天候や安全上の理由で動線が変わる可能性があるため、無理に全域を回らない。営業時間、料金、入場口、屋上運用は動的なPlace情報として訪問前に公式確認し、この記事では固定しない。90分を均等に配る必要はなく、混雑や公開範囲に応じて観察軸を一つ残す。外観では非耐力の石、中庭では光と動線、屋根裏では反復構造、屋上では設備分類という四つの問いから、当日見られた二つを確実に言葉にする。見られなかった区画は推測で埋めず、次の作品との比較材料を優先する。",
              "sourceIds": [
                "source-la-pedrera-accessibility",
                "source-la-pedrera-architecture"
              ]
            }
          ],
          "sourceIds": [
            "source-la-pedrera-architecture",
            "source-la-pedrera-accessibility"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "mila-onsite-priority-route",
          "title": "現地2分｜住宅の働きを追う10項目",
          "blocks": [
            {
              "id": "mila-onsite-checklist",
              "type": "onsite-checklist",
              "items": [
                "道路の反対側：角を消すように二本の通りへ回り込む石の波を、左から右へ目で追う。",
                "バルコニー：鍛鉄を二つ選び、同じ型の反復でない組み方と石の張出しを比べる。",
                "入口：中央の車両用開口と側部の人用動線を分け、地下ランプの方向を確認する。",
                "中庭：上を見上げ、道路に面しない住戸へ光と空気を送る窓を一列追う。",
                "中庭：外の石と内側の色・壁画を比較し、二つのファサードの役割を言葉にする。",
                "住戸公開時：柱、曲面壁、扉、取っ手から、変えにくい骨格と変えられる間取りを一つずつ探す。",
                "屋根裏：一つのれんがアーチを正面から見てから、270本の連続を斜めに追う。",
                "屋上：階段室出口、換気塔、煙突を一つずつ分類し、形より先に機能を答える。",
                "屋上：トレンカディスが曲面を覆う継ぎ目を近くで見て、防水保護と色の両方を確認する。",
                "時間・体力不足時：外観→中庭→屋根裏または屋上の順。段差・天候・当日案内を優先し無理をしない。"
              ],
              "sourceIds": [
                "source-la-pedrera-architecture",
                "source-la-pedrera-courtyards",
                "source-la-pedrera-roof-terrace",
                "source-la-pedrera-accessibility"
              ]
            }
          ],
          "sourceIds": [
            "source-la-pedrera-architecture",
            "source-la-pedrera-accessibility"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1226"
      ],
      "sourceIds": [
        "source-la-pedrera-history",
        "source-la-pedrera-architecture",
        "source-la-pedrera-heritage",
        "source-la-pedrera-conservation",
        "source-la-pedrera-courtyards",
        "source-la-pedrera-roof-terrace",
        "source-la-pedrera-accessibility",
        "source-unesco-gaudi-works",
        "source-casa-batllo-history",
        "source-sagrada-architecture-booklet"
      ]
    },
    {
      "id": "batllo",
      "cityId": "barcelona",
      "placeId": "batllo",
      "relatedPlaceIds": [
        "batllo"
      ],
      "relatedScheduleItemIds": [
        "d1226-batllo"
      ],
      "scopeType": "place",
      "title": "カサ・バトリョ（Casa Batlló）",
      "kind": "建築",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "カサ・バトリョ（Casa Batlló）は、ガウディが1904〜1906年に既存の集合住宅を全面改修した建物です。もとの家はエミリ・サラ・コルテス（Emili Sala Cortés）が1877年に建設し、繊維実業家ジュゼップ・バトリョ（Josep Batlló）が1903年に取得しました。当初は解体も想定されましたが、ガウディは壊さずに、外観、主階、間取り、階段、光井戸、屋根裏、屋上をつなぎ直しました。\n\n骨のようなバルコニーや色の波だけでなく、光と空気の調整が核心です。中央の光井戸は上を濃く、下を淡くした青いタイルで明るさを均し、上階の窓を小さく、下階を大きくしました。窓下の木製スラットは換気を調整します。屋根裏では60本の懸垂線アーチが白いサービス空間をつくり、屋上では四群の煙突が逆風を防ぎます。機能を隠すのでなく、触れる細部から街路の外観まで一つの体験にしています。\n\n現地では、通りの反対側から石・鉄・陶器・ガラス・屋根線を下から上へ見た後、主階の扉と大窓、光井戸の色・窓・換気、屋根裏の反復、屋上の煙突を順に確かめてください。竜の背という読みは公式説明にもありますが、聖ジョルディ伝説は一つの解釈として扱います。新築集合住宅全体を組み立てたカサ・ミラと比べ、カサ・バトリョでは既存の家を残しながら、どこまで暮らしと印象を変えられたかを見るのが焦点です。",
        "keyPoints": [
          "1877年の既存集合住宅を壊さず、1904〜1906年に全面改修した。",
          "外観の色彩だけでなく、光井戸のタイル・窓寸法・換気スラットが光と空気を調整する。",
          "主階の扉・取っ手・大窓から、建築と家具・工芸を一体にした設計を読む。",
          "60本の屋根裏アーチと四群の煙突は、サービス空間と排気の機能を造形へ変える。"
        ],
        "whyItMatters": "12月26日のガウディ作品巡りで、カサ・バトリョは「既存建物の改修」という固有の答えを担当します。75分が短くなっても、外観、光井戸、屋根裏または屋上の三点から、装飾と機能が同時に変わったことを確認できます。",
        "sourceIds": [
          "source-casa-batllo-history",
          "source-casa-batllo-interior",
          "source-unesco-gaudi-works"
        ]
      },
      "terms": [
        {
          "id": "batllo-term-renovation",
          "term": "全面改修（renovation）",
          "definition": "既存建物を解体して新築するのでなく、残した骨格へ新しい外観、間取り、設備、動線を重ねること。カサ・バトリョの1904〜1906年工事を理解する出発点。",
          "sourceIds": [
            "source-casa-batllo-history",
            "source-bcnroc-casa-batllo"
          ]
        },
        {
          "id": "batllo-term-noble-floor",
          "term": "主階／貴族階（noble floor）",
          "definition": "バトリョ家が使った主要な居住・接客階。仕事室、暖炉、居間、グラシア通りを見る大窓が続き、家族生活と社会的な見せ場が重なる。",
          "sourceIds": [
            "source-casa-batllo-interior"
          ]
        },
        {
          "id": "batllo-term-lightwell",
          "term": "光井戸（light well / pati de llums）",
          "definition": "建物中央から室内へ光と空気を配る縦の空間。青いタイルの濃淡、上下で異なる窓寸法、換気スラットを組み合わせて環境を調整する。",
          "sourceIds": [
            "source-casa-batllo-interior"
          ]
        },
        {
          "id": "batllo-term-trencadis",
          "term": "トレンカディス（trencadís）",
          "definition": "砕いた陶器や色ガラスの断片を組むモザイク。カサ・バトリョでは既存の外壁を覆い、曲面へ色と反射を連続させる工芸技法として使われる。",
          "sourceIds": [
            "source-casa-batllo-facade",
            "source-mnac-casa-batllo"
          ]
        },
        {
          "id": "batllo-term-catenary",
          "term": "懸垂線アーチ（catenary arch）",
          "definition": "吊した鎖が描く曲線を反転した形に近いアーチ。屋根裏では60本が連続し、洗濯・収納等のサービス空間を軽く明るい反復で包む。",
          "sourceIds": [
            "source-casa-batllo-interior"
          ]
        },
        {
          "id": "batllo-term-cathedral-glass",
          "term": "カテドラルガラス（cathedral glass）",
          "definition": "表面に凹凸がある半透明の装飾ガラス。光を通しながら像をぼかし、扉の木工・金属部品とともに室内外の視線と明るさを調整する半透明材料。",
          "sourceIds": [
            "source-mnac-gaudi-architect"
          ]
        },
        {
          "id": "batllo-term-dragon-back",
          "term": "竜の背（dragon’s back）",
          "definition": "色タイルで覆われた屋根上部の通称・視覚的な読み。公式説明も竜の背と呼ぶが、聖ジョルディ伝説との対応は唯一の確定した意味ではなく解釈として扱う。",
          "sourceIds": [
            "source-casa-batllo-interior",
            "source-gencat-casa-batllo"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "batllo-before-gaudi",
          "title": "1. 1877年の家とグラシア通り",
          "blocks": [
            {
              "id": "batllo-original-building",
              "type": "paragraph",
              "text": "カサ・バトリョは、何もない敷地から始まった作品ではない。1877年、ガウディの建築学校時代の教授の一人でもあったエミリ・サラ・コルテスが集合住宅を建てた。バルセロナでは1860年のセルダ計画以後、旧市街の外へEixampleが広がり、グラシア通りは有力な家族の住宅と馬車、後には自動車が行き交う軸になった。既存の階高、隣家、街区、住宅用途が改修の出発条件である。1877年の建物は電灯普及前に計画され、通り側と中庭側から自然光と空気を得る一般的な集合住宅だった。後の改修を理解するには、ガウディ以前の家を価値のない箱と見なさず、当時すでに住戸・階段・光井戸を持つ都市建築だったと捉える必要がある。その基盤へ、二十数年後の生活要求と依頼主の表現を重ねた。",
              "sourceIds": [
                "source-casa-batllo-history",
                "source-bcnroc-casa-batllo"
              ]
            },
            {
              "id": "batllo-discord-block",
              "type": "paragraph",
              "text": "同じ街区ではカサ・アマトリェールやカサ・リェオ・モレラなど、複数の建築家が既存住宅を競うように改修したため「不協和音のブロック」と呼ばれる。様式名の暗記より、同じ通り・似た建物幅・都市規則の中で、依頼主と建築家がどう違いを示したかを見る。カサ・バトリョの曲面と色彩は孤立した奇観ではなく、都市の一街区に生じた改修競争への答えだった。道路の反対側から見ると、隣家との境界、共通する階高、各家の屋根線が一度に入る。色や形の好みを比べる前に、同じ間口の中で主階をどう強調し、上階をどう反復し、屋根でどう終えたかを読む。都市の規則が共通だからこそ、改修の選択が差として見える。",
              "sourceIds": [
                "source-casa-batllo-history"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-batllo-history",
            "source-bcnroc-casa-batllo"
          ]
        },
        {
          "id": "batllo-commission",
          "title": "2. 解体案から全面改修へ",
          "blocks": [
            {
              "id": "batllo-client-commission",
              "type": "paragraph",
              "text": "繊維実業家ジュゼップ・バトリョ・イ・カザノバスは1903年に建物を取得し、ガウディへ大きな裁量を与えた。公式史によれば、当初の依頼は建物の解体を含んでいたが、ガウディは解体を退け、1904〜1906年に全面改修を実施した。依頼主の社会的な表現、家族の主階、賃貸住戸としての機能を一棟に残すため、新しい外観だけでなく光・空気・移動を更新する必要があった。バトリョ家だけの邸宅に変えたのではなく、上階の住人も暮らす集合住宅として改修した点が重要である。主階の特別な入口と大窓を強調しながら、共用の光井戸、階段、エレベーター、屋根裏サービスを全館の仕組みとして整える必要があった。",
              "sourceIds": [
                "source-casa-batllo-history"
              ]
            },
            {
              "id": "batllo-renovation-scope",
              "type": "paragraph",
              "text": "工事ではファサードを全面的に変え、主階を拡張し、内部間仕切りを再配分し、階段と光井戸を作り直し、屋根裏と屋上を組織した。既存の建物を残すことは妥協ではない。使える骨格を見極め、限られた奥行きの中で光を下階まで届け、街路側の家族空間と裏側のサービスを結ぶという複数の課題を同時に解く。現地では「何が新しい形か」だけでなく「何を残したからこの形になったか」を考える。新築なら柱や中庭を最初から配置できるが、改修では既存床、階段位置、隣家、住戸の奥行きと交渉する。光井戸を広げれば居室面積との交換が生まれ、主階の大窓を張り出せば外壁と床の接続を作り直す必要がある。残した制約を見つけると、自由な造形が具体的な判断の積み重ねに変わる。",
              "sourceIds": [
                "source-casa-batllo-history",
                "source-mnac-casa-batllo",
                "source-bcnroc-casa-batllo"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-batllo-history",
            "source-mnac-casa-batllo"
          ]
        },
        {
          "id": "batllo-renovation-timeline",
          "title": "3. 改修・公開・保存の時間",
          "blocks": [
            {
              "id": "batllo-history-timeline",
              "type": "timeline",
              "entries": [
                {
                  "date": "1877",
                  "title": "既存建物",
                  "text": "Emili Sala Cortésが集合住宅を建設する。"
                },
                {
                  "date": "1903",
                  "title": "Batlló家が取得",
                  "text": "繊維実業家Josep Batllóが建物を取得する。"
                },
                {
                  "date": "1904–1906",
                  "title": "Gaudíの全面改修",
                  "text": "解体せず、外観、内部、光井戸、屋根裏、屋上を変える。"
                },
                {
                  "date": "1950年代",
                  "title": "Batlló家の所有を離れる",
                  "text": "その後、複数の企業や個人が建物を使用する。"
                },
                {
                  "date": "1990年代",
                  "title": "Bernat家と修復",
                  "text": "現在の所有家族が建物を引き継ぎ、全館修復を進める。"
                },
                {
                  "date": "1995 / 2002",
                  "title": "公開の段階",
                  "text": "まずイベント利用、2002年から文化見学を開始する。"
                },
                {
                  "date": "2005",
                  "title": "UNESCO構成資産",
                  "text": "世界遺産「アントニ・ガウディの作品群」の拡張で加わる。"
                },
                {
                  "date": "2019",
                  "title": "ファサード修復",
                  "text": "材料調査を経て石、鉄、陶器、ガラス、木を専門家が保存する。"
                },
                {
                  "date": "2018–2026",
                  "title": "継続する修復",
                  "text": "主階、玄関、裏側など部位ごとの調査と修復が続く。"
                }
              ],
              "sourceIds": [
                "source-casa-batllo-history",
                "source-unesco-gaudi-works",
                "source-casa-batllo-restoration",
                "source-casa-batllo-facade-restoration"
              ]
            },
            {
              "id": "batllo-date-variance",
              "type": "paragraph",
              "text": "改修年はCasa Batlló公式、Barcelona市資料、UNESCO等が1904〜1906年で一致するため、本文ではこの表示を採用する。一部の建築カタログには1904〜1907年という幅もあるが、確定した追加工事を推測して混ぜない。世界遺産も作品群の最初の登録年1984と、カサ・バトリョ等が加わった2005年を区別する。建物の価値が最初から不変だったと考えず、住居、企業利用、公開、保存という時間の層を読む。1995年の公開はまずイベント利用で、2002年から文化見学が進んだという段階差も重要である。観光施設として現在見える順路は、1906年の家族・賃借人の動線そのものではない。修復年表は見どころを増やす一覧ではなく、何が失われ、調査され、再び読めるようになったかを判断する手掛かりになる。",
              "sourceIds": [
                "source-casa-batllo-history",
                "source-bcnroc-casa-batllo",
                "source-unesco-gaudi-works"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-batllo-history",
            "source-unesco-gaudi-works"
          ]
        },
        {
          "id": "batllo-facade",
          "title": "4. ファサードを材料の順に読む",
          "blocks": [
            {
              "id": "batllo-facade-materials",
              "type": "paragraph",
              "text": "通り側では、下層の石、仮面や骨を思わせる鉄のバルコニー、陶器と色ガラスの断片、木の窓枠、屋根の色タイルが重なる。2019年の公式修復は、ファサードを石・鉄・陶器・ガラス・木という五材料の仕事として扱った。色を一枚の塗装面だと思わず、反射の違う小片、鉄の影、石の凹凸が距離と光で変わる表面として見る。下から上へ材料を分類してから、波や動物の連想へ進む。石の接合、鉄板の縁、ガラス片の向き、陶器の目地、木枠の厚みは、同じように老化しない。2019年修復で複数分野の専門家が必要だったことは、全体が一種類の装飾材ではない証拠でもある。雨、日射、汚れを受ける外皮として材料ごとの状態を守りながら、色の連続を回復する保存の難しさまで想像する。",
              "sourceIds": [
                "source-casa-batllo-facade",
                "source-casa-batllo-facade-restoration",
                "source-gencat-casa-batllo"
              ]
            },
            {
              "id": "batllo-facade-function",
              "type": "paragraph",
              "text": "主階の大きな石造ギャラリーは、グラシア通りを眺める窓であると同時に、家族が街路から見られる舞台でもある。上階のバルコニーは各住戸へ外部空間を与え、屋根線は遠くから建物を識別させる。装飾を機能の反対と考えず、窓が光と視線を通し、バルコニーが距離をつくり、材料が所有者の存在を都市へ表す働きを重ねる。隣家と幅や高さを比べると、既存街区の中での変化が分かる。下層の石は大窓を囲んで荷重感のある基壇をつくり、中層のバルコニーは同じ住戸反復へ個別の影を与え、上部の色面と屋根は遠景の輪郭をつくる。見る距離を向かい側、歩道、窓際の三段階に変えると、都市スケールの印象、材料の接合、室内の機能が一つのファサードで切り替わる。",
              "sourceIds": [
                "source-casa-batllo-history",
                "source-casa-batllo-interior",
                "source-mnac-casa-batllo"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-batllo-facade",
            "source-casa-batllo-facade-restoration"
          ]
        },
        {
          "id": "batllo-noble-floor",
          "title": "5. 主階は暮らしと見せ場の境界",
          "blocks": [
            {
              "id": "batllo-main-floor-sequence",
              "type": "paragraph",
              "text": "主階はバトリョ家の生活と接客の中心だった。仕事室と茸形の暖炉を経て、主要居間とグラシア通りへ張り出す大窓へ進む。通りを見ると同時に通りから見られる場所で、家族の私的空間と都市の社交が接する。うねる天井や海を連想させる形に目を奪われたら、部屋どうしの戸口、大窓までの軸、暖炉周辺の小さな座る場所を追い、誰がどこで会話し移動したかを考える。",
              "sourceIds": [
                "source-casa-batllo-interior"
              ]
            },
            {
              "id": "batllo-doors-craft",
              "type": "paragraph",
              "text": "大きなオーク扉には色ガラスが入り、取っ手と手すりは握る身体へ合わせた形を持つ。MNACにはカザス・イ・バルデス工房がガウディの指示に沿って制作した扉や家具が保存され、木、カテドラルガラス、金属の組合せを確認できる。建築家が部屋の輪郭だけを設計したのではなく、開く、握る、座る、見るという動作まで工芸職人と調整した。触れてよい展示だけで、指の方向と部品の動きを読む。暖炉の周囲は大広間とは異なる小さな居場所をつくり、扉は開閉によって部屋を分けたり連続させたりする。大窓は街路への視線、色ガラスは透過と目隠し、木の曲面は手触りを担当する。家具と建築を同じ形だから一体と呼ぶのではなく、座る人数、視線の高さ、移動の幅まで揃えているかを確かめる。",
              "sourceIds": [
                "source-casa-batllo-interior",
                "source-mnac-casa-batllo",
                "source-mnac-gaudi-architect"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-batllo-interior",
            "source-mnac-casa-batllo"
          ]
        },
        {
          "id": "batllo-lightwell",
          "title": "6. 光井戸が光と空気を均す",
          "blocks": [
            {
              "id": "batllo-lightwell-colour-windows",
              "type": "paragraph",
              "text": "中央の光井戸は、屋根の天窓から入る光と空気を建物の奥へ配る。ガウディは既存の光井戸を拡張し、青いタイルを上部で濃く、下部で淡くして、強い上の光を吸収し、弱い下の光を明るく感じさせた。同じ考えで上階の窓を小さく、下へ行くほど大きくする。現地では一枚の青い壁として見ず、上と下の色、窓の幅を同時に比較し、差が均一な室内環境をつくる逆転を確認する。上部は光源へ近いため濃色・小窓でも明るく、下部は光源から遠いため淡色・大窓で光を受ける。すべてを同じ色と寸法にする均等さではなく、条件の差へ逆向きの差を与えて結果を近づける設計である。この原理を一度説明できれば、青の美しさが機能と切り離されない。",
              "sourceIds": [
                "source-casa-batllo-interior"
              ]
            },
            {
              "id": "batllo-lightwell-ventilation",
              "type": "paragraph",
              "text": "窓の下には開閉できる木製スラットがあり、住戸ごとに換気量を調整できる。中央にはエレベーターが置かれ、光・空気・上下移動が同じ縦空間に集まる。装飾的な青のグラデーション、窓の寸法、手で動かす換気部品を別々に見ず、外壁から遠い部屋を暮らせる環境にする三つの手段として結ぶ。現在のエレベーター運用や見学ルートは動的なので、歴史的な仕組みと当日の案内を混同しない。上から入る光は階ごとに弱くなる一方、下階ほど窓を大きくし、タイルを淡くすることで不足を補う。換気は住人がスラットを操作でき、中央の空気の流れへ各室を接続する。色彩、寸法、操作という三種類の調整を見つければ、光井戸が装飾的な吹抜けでなく、集合住宅の環境装置だと説明できる。",
              "sourceIds": [
                "source-casa-batllo-interior",
                "source-mnac-gaudi-architect"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-batllo-interior"
          ]
        },
        {
          "id": "batllo-attic",
          "title": "7. 60本のアーチとサービス空間",
          "blocks": [
            {
              "id": "batllo-attic-arches",
              "type": "paragraph",
              "text": "屋根裏では60本の懸垂線アーチが連続し、白い面と自然光の中に規則的なリズムをつくる。外観の色彩や主階の木工に比べると簡素だが、これは賃貸住戸の洗濯室や物置等を収めるサービス領域だった。一本を正面から見て曲線と厚みを確認し、次に斜めから反復を追うと、少ない種類の部材で長い空間を包む方法が分かる。動物の肋骨という連想は、構造の反復を観察した後に重ねる。",
              "sourceIds": [
                "source-casa-batllo-interior",
                "source-gencat-casa-batllo"
              ]
            },
            {
              "id": "batllo-attic-comparison",
              "type": "paragraph",
              "text": "同日に見るカサ・ミラにも連続するれんがアーチの屋根裏があるが、数や建物全体での役割は同じではない。カサ・バトリョでは既存住宅の上部へサービス空間と屋根をまとめ直し、主階や光井戸の豊かな表面から白い反復へ切り替える。カサ・ミラでは新築集合住宅の屋上地形を270本のアーチで支える。類似を「同じ骨の形」で終えず、改修と新築、60と270、サービス層と屋上の対応を比べる。懸垂線アーチは、曲線という共通の見た目以上に、必要な高さと屋根荷重へ形を調整できる点が重要である。アーチ間の距離、白い仕上げ、窓から入る光、歩いたときの天井高を順に見る。サービス空間を隠れた残余部ではなく、衛生、洗濯、収納、断熱を支える建物の一層として扱ったことが分かる。",
              "sourceIds": [
                "source-casa-batllo-interior",
                "source-unesco-gaudi-works"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-batllo-interior"
          ]
        },
        {
          "id": "batllo-rooftop",
          "title": "8. 屋上は排気と物語が重なる",
          "blocks": [
            {
              "id": "batllo-rooftop-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "竜の背",
                  "text": "色タイルの屋根線。竜という読みは公式説明にあるが、形だけで機能を説明しない。"
                },
                {
                  "title": "四群の煙突",
                  "text": "複数の煙道をまとめ、逆風で煙が内部へ戻りにくいようにする。"
                },
                {
                  "title": "色と曲面",
                  "text": "陶器片が曲面を覆い、遠景の輪郭と近景の表面を同時につくる。"
                },
                {
                  "title": "聖ジョルディ",
                  "text": "竜退治との関連は一つの解釈。唯一の確定意味として断定しない。"
                }
              ],
              "sourceIds": [
                "source-casa-batllo-interior",
                "source-gencat-casa-batllo"
              ]
            },
            {
              "id": "batllo-rooftop-function-myth",
              "type": "paragraph",
              "text": "屋上へ出たら、まず煙突群を数と開口で見て、空気の出口であることを確認する。次に色タイルの屋根線を竜の背として見る。設備の機能と物語の連想はどちらか一方を選ぶ関係ではないが、物語だけを先に固定すると、煙を排出し逆流を防ぐ設計を見落とす。聖ジョルディの剣や骨・仮面等の読解は、複数ある解釈として扱い、現地で見えた形を自分の言葉で説明してから資料の物語と比べる。煙突は単独の筒を並べるのでなく四群へまとめ、頂部と曲面で風を受ける向きを変える。屋根線の色タイルは遠くから竜の鱗に見え、近くでは曲面を覆う小片として読める。設備、材料、輪郭、物語という四層を順に重ねれば、機能か象徴かという二択を避けられる。",
              "sourceIds": [
                "source-casa-batllo-interior",
                "source-gencat-casa-batllo"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-batllo-interior",
            "source-gencat-casa-batllo"
          ]
        },
        {
          "id": "batllo-total-design",
          "title": "9. 建築・工芸・身体を一つにする",
          "blocks": [
            {
              "id": "batllo-total-work",
              "type": "paragraph",
              "text": "公式解説は、ガウディが鉄、木、ガラス、陶器、石の職人と協働し、色、形、空間、光を全体として扱ったと説明する。全体設計とは、同じ曲線をあらゆる場所へ貼ることではない。外観では都市への表現、主階では接客と身体、光井戸では環境調整、屋根裏ではサービス、屋上では排気という異なる課題に、材料と形を使い分ける。共通するのは、機能を見えない裏方へ追いやらず、体験できる形にしたことだ。職人との協働も、建築家の図案を手で再現するだけではない。鉄は曲げて影と手すりになり、木は削って身体へ沿い、ガラスは透過と歪みをつくり、陶器片は曲面を覆い、石は窓の周囲を支える。材料ごとの加工法を保ちながら、住人が触れ、歩き、光を見る連続へまとめた点に全体設計の実質がある。",
              "sourceIds": [
                "source-casa-batllo-interior",
                "source-mnac-casa-batllo"
              ]
            },
            {
              "id": "batllo-functions-table",
              "type": "comparison",
              "columns": [
                {
                  "title": "見る",
                  "text": "主階の大窓と色ガラスが、街路への視線と室内の光を調整する。"
                },
                {
                  "title": "触れる",
                  "text": "取っ手、手すり、扉、換気スラットが身体の操作に応答する。"
                },
                {
                  "title": "呼吸する",
                  "text": "光井戸、窓寸法、換気部品、煙突が空気を上下へ動かす。"
                },
                {
                  "title": "支える",
                  "text": "既存骨格と屋根裏アーチが、全面改修の新しい空間を成立させる。"
                }
              ],
              "sourceIds": [
                "source-casa-batllo-interior",
                "source-mnac-gaudi-architect"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-batllo-interior",
            "source-mnac-casa-batllo"
          ]
        },
        {
          "id": "batllo-visit-order",
          "title": "10. 今回の75分をどう使うか",
          "blocks": [
            {
              "id": "batllo-visit-zone-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "外観 5分",
                  "text": "石、鉄、色ガラス・陶器、屋根線を下から上へ分類する。"
                },
                {
                  "title": "主階 12分",
                  "text": "大窓、扉、取っ手、天井、暖炉から暮らしと見せ場を読む。"
                },
                {
                  "title": "光井戸 10分",
                  "text": "青の濃淡、窓寸法、換気スラットを上・下で比較する。"
                },
                {
                  "title": "屋根裏・屋上 15分",
                  "text": "60アーチの反復と、煙突機能／竜の読みを分けて確認する。"
                }
              ],
              "sourceIds": [
                "source-casa-batllo-interior"
              ]
            },
            {
              "id": "batllo-short-route",
              "type": "paragraph",
              "text": "45〜55分なら外観、主階、光井戸、屋根裏、屋上を各一問に絞り、音声解説や写真の反復を短くする。25〜30分なら外観、主階の一周、光井戸を確保し、屋根裏か屋上は当日の経路と入場内容に合わせて一方を選ぶ。外観だけなら内部を見たふりをせず、下層の石、大窓、バルコニー、トレンカディス、竜の背の輪郭までを観察記録にする。公開範囲、ticket tier、時間、accessibilityは訪問前に公式情報で再確認する。75分を全室へ均等に配る必要はない。各場所で「既存住宅の何を変えたか」「光・空気・動線のどれを改善したか」「材料が身体へどう応答するか」の一問だけを答える。没入型展示や写真待ちが建築観察と競合したら、光井戸の上下比較と屋根裏または屋上の機能確認を優先し、見られない内容は後から資料で補う。",
              "sourceIds": [
                "source-casa-batllo-history",
                "source-casa-batllo-interior"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-batllo-interior"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "batllo-onsite-priority-route",
          "title": "現地2分｜改修の働きを追う10項目",
          "blocks": [
            {
              "id": "batllo-onsite-checklist",
              "type": "onsite-checklist",
              "items": [
                "道路の反対側：下層の石、大窓、鉄のバルコニー、色の表面、屋根線を下から上へ五段階で追う。",
                "隣家との境：建物の幅と高さを比べ、既存街区の中で変えた部分と揃えた部分を一つずつ探す。",
                "主階：グラシア通りを見る大窓に立ち、室内から見ることと街路から見られることを同時に考える。",
                "扉と取っ手：触れてよい部分で、木・色ガラス・金属と、指が掛かる向き、開く動作を確認する。",
                "光井戸：上の濃い青と下の淡い青を見比べ、光の強弱を逆方向の色で均す仕組みを説明する。",
                "光井戸：上階の小窓と下階の大窓、窓下の換気スラットを一組ずつ探す。",
                "屋根裏：一本の懸垂線アーチを正面から見てから、60本の反復を斜め方向へ追う。",
                "屋上：四群の煙突を排気設備として確認し、開口と風の向きを想像する。",
                "屋根線：竜の背として見える部位を指し、聖ジョルディは確定事実でなく解釈として区別する。",
                "時間不足時：外観→主階→光井戸を優先し、屋根裏か屋上を一つ選ぶ。見られない区画は推測で補わない。"
              ],
              "sourceIds": [
                "source-casa-batllo-history",
                "source-casa-batllo-interior",
                "source-mnac-casa-batllo"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-batllo-interior"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1226"
      ],
      "sourceIds": [
        "source-casa-batllo-history",
        "source-casa-batllo-interior",
        "source-casa-batllo-facade",
        "source-casa-batllo-restoration",
        "source-casa-batllo-facade-restoration",
        "source-mnac-casa-batllo",
        "source-mnac-gaudi-architect",
        "source-bcnroc-casa-batllo",
        "source-gencat-casa-batllo",
        "source-unesco-gaudi-works"
      ]
    },
    {
      "id": "park-guell",
      "cityId": "barcelona",
      "placeId": "parkguell",
      "relatedPlaceIds": [
        "parkguell"
      ],
      "relatedScheduleItemIds": [
        "d1226-parkguell"
      ],
      "scopeType": "place",
      "title": "グエル公園（Park Güell）",
      "kind": "建築・都市",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "グエル公園（Park Güell）は、最初から公共公園として造られた場所ではありません。実業家エウセビ・グエル（Eusebi Güell）が、ムンターニャ・ペラーダ（Muntanya Pelada）の斜面に富裕層向け住宅地をつくるため、1900年にアントニ・ガウディへ計画を託しました。約60の三角形区画を想定し、入口、道、階段、高架橋、市場、広場、給排水を先につくりましたが、交通の不足、厳しい販売条件、強い排他性等で買い手が集まらず、家は2軒だけで1914年に工事が止まりました。\n\n計画は失敗しても、公共設備と地形の設計が残りました。道と高架橋は丘に沿って人や車を動かし、既存のオリーブやイナゴマメ、乾燥に強い地中海植物を保ちながら、豪雨の水を集めて侵食を抑えます。多柱室（Hypostyle Room）は広場の下に置かれた週市の予定地で、自然広場（Nature Square）は眺望と催しの舞台でした。入口のサラマンダーだけでなく、斜面・道・水・共用施設を一つの未完成都市として見ることが核心です。\n\n1918年にグエルが亡くなった後、市は1922年に購入を決め、1926年に市立公園として開きました。現地では入口パビリオン→ドラゴン階段→多柱室→自然広場→高架橋の順に、住宅地の共用部だった役割を確かめてください。丘の坂・階段・不整地は同日に続く四作品への体力へ影響します。疲れたら中央の五地点と近い高架橋一つで止め、上部ルートや博物館追加を別判断にすると、学びと旅程を両立できます。",
        "keyPoints": [
          "公共公園ではなく約60区画の民間住宅地として始まり、2軒だけで1914年に中止された。",
          "入口、階段、市場予定地、広場、高架橋は、売れなかった住宅地の共用施設だった。",
          "地形に沿う道、地中海植物、水の収集・貯留を、斜面の侵食と生活を支える仕組みとして見る。",
          "写真名所のサラマンダーだけでなく、丘を歩く動線と体力配分を観察の一部にする。"
        ],
        "whyItMatters": "12月26日の最初のガウディ体験として、住宅一棟より大きい都市・景観スケールを身体で理解できます。同時に坂道と混雑で後のカサ・ミラ、カサ・バトリョ等へ影響し得るため、中央ルートの観察価値と体力を見ながら範囲を選ぶ材料になります。",
        "sourceIds": [
          "source-park-guell-history",
          "source-park-guell-emblematic",
          "source-park-guell-origin"
        ]
      },
      "terms": [
        {
          "id": "park-guell-term-residential-estate",
          "term": "住宅地計画（private residential development）",
          "definition": "約60の分譲区画と共用の入口、道路、市場、広場等を備える民間開発計画。完成した公共公園や厳密なGarden Cityと同一視しない。",
          "sourceIds": [
            "source-park-guell-history",
            "source-park-guell-emblematic"
          ]
        },
        {
          "id": "park-guell-term-muntanya-pelada",
          "term": "ムンターニャ・ペラーダ（Muntanya Pelada）",
          "definition": "「裸の山」を意味する計画地の通称。眺望が良い一方、乾燥、豪雨時の侵食、斜面移動が設計条件となり、道・植生・水管理を結び付けた。",
          "sourceIds": [
            "source-park-guell-history",
            "source-park-guell-nature"
          ]
        },
        {
          "id": "park-guell-term-viaduct",
          "term": "高架橋／ヴィアダクト（viaduct）",
          "definition": "斜面上で道路や歩道を通し、場所によって擁壁・控え壁のように土地も支える構造。柱の傾きと道の曲線を地形への応答として読む。",
          "sourceIds": [
            "source-park-guell-emblematic",
            "source-park-guell-history"
          ]
        },
        {
          "id": "park-guell-term-hypostyle",
          "term": "多柱室（Hypostyle Room）",
          "definition": "多数の柱で上部を支える広い屋根付き空間。グエル公園では住宅地の週市を開く共用施設として計画され、自然広場の下に位置する。",
          "sourceIds": [
            "source-park-guell-emblematic"
          ]
        },
        {
          "id": "park-guell-term-nature-square",
          "term": "自然広場（Nature Square / Greek Theatre）",
          "definition": "市街を望む大きな屋外広場で、劇場建物ではなく催しと眺望の平台として使われた空間。蛇行するトレンカディスのベンチが縁と座る場所をつくる。",
          "sourceIds": [
            "source-park-guell-emblematic",
            "source-park-guell-history"
          ]
        },
        {
          "id": "park-guell-term-salamander",
          "term": "サラマンダー／ドラゴン",
          "definition": "公式ページは階段全体をDragon Stairway、修復記事はモザイク像をsalamanderと呼ぶ。生物種や象徴を一つに断定せず、入口動線の目印として見る。",
          "sourceIds": [
            "source-park-guell-emblematic",
            "source-park-guell-restoration-03"
          ]
        },
        {
          "id": "park-guell-term-trencadis",
          "term": "トレンカディス（trencadís）",
          "definition": "砕いた陶器・タイル等の断片を曲面へ組むモザイク。公園ではサラマンダーや自然広場の蛇行ベンチに使われ、曲面、色、排水・表面保護を結ぶ。",
          "sourceIds": [
            "source-park-guell-emblematic",
            "source-park-guell-restoration-03"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "park-guell-commission",
          "title": "1. GüellがGaudíへ託した住宅地",
          "blocks": [
            {
              "id": "park-guell-guell-gaudi",
              "type": "paragraph",
              "text": "エウセビ・グエルとガウディは、グエル邸やコロニア・グエル等の仕事を通じて関係を築き、1900年にグエル公園の計画へ進んだ。グエルが求めたのは、英国の住宅公園を思わせる、眺望と健康的な環境を持つ富裕層向け開発だった。英語表記のParkもこの志向に由来する。依頼主の趣味的な庭ではなく、土地を区画販売し、共用施設と交通網を先に整える不動産・都市計画として始まった。GüellとGaudíの以前の仕事は一棟や工業集落の施設だったが、ここでは丘全体を長期に管理し、複数の買い手が別々に家を建てても一つの景観と交通を保つ規則が必要になる。個々の住宅をGaudíがすべて設計する計画ではなく、区画条件と共通基盤によって開発全体の質を導く役割だった。",
              "sourceIds": [
                "source-park-guell-gaudi-guell",
                "source-park-guell-history"
              ]
            },
            {
              "id": "park-guell-barcelona-context",
              "type": "paragraph",
              "text": "当時のBarcelonaは工業化とEixample拡張が進み、旧市街外の新しい住宅地が社会的な選択肢になっていた。公園の記事でModernisme史を繰り返すのでなく、都市の成長が丘陵地の開発と、富裕層向けの新しい暮らし方を可能にした点だけを押さえる。市街地の集合住宅とは異なり、ここでは区画、道路、緑、水、眺望を一体で商品にする必要があった。買い手は一軒の完成住宅ではなく、将来家を建てる土地と、そこへ安全に到達し、日照と眺望を保ち、日々の買物や水を得る環境を選ぶ。だからGaudíの仕事は住宅の外形より先に、分譲区画の条件と共用インフラを成立させることだった。依頼主との関係も、自由な装飾を許す patronage だけでなく、開発の成否を担う実務的な委託として読む。",
              "sourceIds": [
                "source-park-guell-origin",
                "source-park-guell-history"
              ]
            }
          ],
          "sourceIds": [
            "source-park-guell-gaudi-guell",
            "source-park-guell-origin"
          ]
        },
        {
          "id": "park-guell-estate-plan",
          "title": "2. 約60区画と斜面の条件",
          "blocks": [
            {
              "id": "park-guell-plots",
              "type": "paragraph",
              "text": "計画地はムンターニャ・ペラーダと呼ばれる斜面で、海とBarcelona平野を望めた。約60の三角形区画を設け、各区画で建てられる面積を六分の一に制限し、住宅の高さと位置も隣家の眺望や日照を妨げないよう定めた。多くの家を詰めるだけでなく、視界、光、緑を開発価値として守ろうとした。現地では空いた斜面を「公園だから広い」と見ず、売却予定の区画だった場所を想像する。三角形の土地は道路の曲線と斜面の境界から生まれ、矩形街区の住宅より配置が難しい。建物面積を抑え、隣家の海への視線と日照を遮らない条件は、各所有者の自由を制限する一方、開発全体の環境価値を守る。Casa Trias等の数少ない住宅方向を見ると、完成しなかった区画網の寸法を想像しやすい。",
              "sourceIds": [
                "source-park-guell-history"
              ]
            },
            {
              "id": "park-guell-common-services",
              "type": "paragraph",
              "text": "住宅区画へ到達するため、複雑な道、高架橋、階段を地形に合わせて配置し、入口、守衛施設、待合、多柱室、広場、水処理を共用部として整えた。1903年初めには入口パビリオン、大階段、待合、外周、高架橋、広場の一部、排水設備が記録されている。家が建つ前にインフラが姿を現したため、住宅販売が失敗した後も、現在の公園体験を構成する骨格が残った。三角形区画の一部しか建てられない規則は、密度を抑える一方、販売可能な床面積を制限する。道路や高架橋を先行整備する費用も、住戸が売れなければ回収しにくい。眺望と緑を守る魅力、購入条件の厳しさ、交通不足という長所と弱点が同じ計画条件から生まれたことが、後の失敗を単純な設計ミスにしない。",
              "sourceIds": [
                "source-park-guell-history",
                "source-park-guell-emblematic"
              ]
            }
          ],
          "sourceIds": [
            "source-park-guell-history",
            "source-park-guell-emblematic"
          ]
        },
        {
          "id": "park-guell-failure-public-park",
          "title": "3. 2軒で止まり公共公園へ",
          "blocks": [
            {
              "id": "park-guell-history-timeline",
              "type": "timeline",
              "entries": [
                {
                  "date": "1900",
                  "title": "開発開始",
                  "text": "土地の造成と区画分けが始まる。"
                },
                {
                  "date": "1903",
                  "title": "主要インフラ",
                  "text": "入口、階段、高架橋、広場の一部、排水設備が記録される。"
                },
                {
                  "date": "1906",
                  "title": "Gaudíが居住",
                  "text": "販売促進用の見本住宅へ父・姪と移る。"
                },
                {
                  "date": "1907",
                  "title": "広場で催し",
                  "text": "私有地のまま大広場が市民行事に使われる。"
                },
                {
                  "date": "1914",
                  "title": "工事中止",
                  "text": "約60軒の想定に対し2軒だけで開発を断念する。"
                },
                {
                  "date": "1918",
                  "title": "Güell死去",
                  "text": "相続人が土地をBarcelona市へ提案する。"
                },
                {
                  "date": "1922-05-26",
                  "title": "市が購入決定",
                  "text": "市議会が公園取得に合意する。"
                },
                {
                  "date": "1926",
                  "title": "市立公園",
                  "text": "公共公園として開園する。"
                },
                {
                  "date": "1969 / 1984 / 1993",
                  "title": "保護指定",
                  "text": "国の芸術記念物、UNESCO、CataloniaのBCINへ進む。"
                }
              ],
              "sourceIds": [
                "source-park-guell-history",
                "source-park-guell-world-heritage",
                "source-unesco-gaudi-works"
              ]
            },
            {
              "id": "park-guell-failure-reasons",
              "type": "paragraph",
              "text": "公式史が示す失敗理由は、区画販売に使われた条件の重い旧式の土地契約、適切な交通手段の不足、非常に排他的な性格、そして買い手不足である。「高すぎた」「遠すぎた」等の単純な推測へ置き換えない。失敗は設計の無価値を意味せず、完成した私有住宅地としては成立しなかった一方、共用施設は催しや見学に使われ、やがて公共公園へ転用できる資産になった。1907年には大広場で行事が行われ、観光案内にも載り始めた。私有の開発地が事実上の共同空間として使われた経験が、市による取得と公園化へつながる。現在の価値を「失敗したから偶然残った」だけでなく、用途を変えて使える道路、広場、日陰、水、眺望が先に完成していた結果として理解する。",
              "sourceIds": [
                "source-park-guell-history"
              ]
            }
          ],
          "sourceIds": [
            "source-park-guell-history",
            "source-park-guell-world-heritage"
          ]
        },
        {
          "id": "park-guell-terrain-routes",
          "title": "4. 道・高架橋・擁壁が丘を移動可能にする",
          "blocks": [
            {
              "id": "park-guell-viaduct-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "高架橋",
                  "text": "区画を結ぶ道路網。上を移動し、下に覆われた歩行空間を残す。"
                },
                {
                  "title": "低い高架橋",
                  "text": "曲線と二列の傾いた柱で、斜面に沿う道路を支える。"
                },
                {
                  "title": "中間高架橋",
                  "text": "洞窟のような形を見せつつ、控え壁・擁壁として土地を受ける。"
                },
                {
                  "title": "洗濯女の柱廊",
                  "text": "覆われた道と彫刻的な柱が、歩行・日陰・斜面保持を重ねる。"
                }
              ],
              "sourceIds": [
                "source-park-guell-emblematic"
              ]
            },
            {
              "id": "park-guell-route-reading",
              "type": "paragraph",
              "text": "高架橋は景色のよい石のアーチではなく、住宅区画へ人・馬車・車を運びながら、急斜面で土地を支えるインフラだった。石材の色と粗い表面は周囲の地形へ溶け込むが、機能は柱の傾き、擁壁の厚み、道の曲率から読める。今いる道が丘を直線で切るか、等高線に沿って曲がるか、上の道路と下の歩道をどう分離するかを確認すると、自然を模した形という説明から地形の操作へ進める。斜面を大きく削って平らにすれば工事と擁壁が増え、直線道路は勾配が急になる。曲線道路と傾いた柱は移動距離を延ばす代わりに勾配と土圧へ段階的に対応する。上を通る人・車、下を歩く人、横から押す土という三方向の力と動きを一地点で考える。",
              "sourceIds": [
                "source-park-guell-emblematic",
                "source-park-guell-history"
              ]
            }
          ],
          "sourceIds": [
            "source-park-guell-emblematic",
            "source-park-guell-history"
          ]
        },
        {
          "id": "park-guell-entrance-stairway",
          "title": "5. 入口から中心へ導く到着装置",
          "blocks": [
            {
              "id": "park-guell-entrance-pavilions",
              "type": "paragraph",
              "text": "オロット通り側の入口パビリオンは、童話的な小屋として独立していたのではなく、住宅地の門と守衛・管理を担う共用施設だった。門を越えると大階段が中心施設へ人を上げ、建物、壁、階段、噴水、モザイク像が到着の順序をつくる。写真では二棟とサラマンダーを別々に切り取りやすいが、街路から住宅地へ入り、丘の高さを上がり、多柱室へ達する一続きの閾として見る。門は内外を分け、守衛は来訪者を確認し、待合は到着を受け止め、階段は徒歩の速度を調整する。現在の観光客の流れと当初の住人・訪問者の流れは同じではないが、中心線、左右の分岐、視線の上がり方から管理された入口だったことを読める。",
              "sourceIds": [
                "source-park-guell-emblematic",
                "source-park-guell-history"
              ]
            },
            {
              "id": "park-guell-dragon-salamander",
              "type": "paragraph",
              "text": "公式サイトは階段をDragon Stairway、2026年の修復記事は中心の像をsalamanderと呼ぶため、この記事では階段名と像名を分ける。竜、トカゲ、Cataloniaの象徴等の読みを確定事実として重ねない。像は強い写真目標であると同時に、人の流れが集中する場所でもある。水盤や階段の段差、上の多柱室との軸を確認し、混雑時は像だけに滞留せず到着装置全体を読む。入口では二棟が門の左右を示し、階段は高さを分節し、噴水要素が中心線を強調する。視線は下から像、柱列、広場へ順に引き上げられる。住宅地の来訪者を迷わせず中心へ導く wayfinding と、記憶に残る image が同じ順路に組み込まれている。",
              "sourceIds": [
                "source-park-guell-emblematic",
                "source-park-guell-restoration-03"
              ]
            }
          ],
          "sourceIds": [
            "source-park-guell-emblematic",
            "source-park-guell-restoration-03"
          ]
        },
        {
          "id": "park-guell-water-market",
          "title": "6. 多柱室・貯水・市場の重なり",
          "blocks": [
            {
              "id": "park-guell-hypostyle-market",
              "type": "paragraph",
              "text": "多柱室は、住宅地住民が使う週市のための屋根付き共用空間として計画された。多数の柱が上の自然広場を支え、日陰のある大空間をつくる。天井のメダリオンや柱列のリズムだけでなく、広場の下に市場がある上下関係を捉えると、眺望広場、買物、住区の道が立体的に組織されていたことが分かる。実際に通常の市場として運営されたと断定せず、計画用途として表現する。",
              "sourceIds": [
                "source-park-guell-emblematic",
                "source-park-guell-restoration-03"
              ]
            },
            {
              "id": "park-guell-water-caution",
              "type": "paragraph",
              "text": "公園全体では、乾燥に強い植物を選び、雨水を集めて貯え、Mediterraneanの強い豪雨が斜面を削るのを抑える考えがあった。多柱室、上の広場、貯水槽、階段の水要素はこの水管理と関係するが、今回確認できた資料だけで全配管経路を図解しない。現地では柱の上、広場の床、排水口らしい部位、斜面の水の向きを観察し、確認できた範囲と推測を分ける。市場予定地は屋根付きの日常サービスで、その屋根が上の催し広場を支える。雨が降れば広場は大きな集水面にもなるため、柱列の構造と水管理を別々の設備にできない。正確な配管を断定しなくても、「上で受ける」「下へ導く」「貯える」「斜面へ急に流さない」という四段階の目的を地形から検討できる。",
              "sourceIds": [
                "source-park-guell-history",
                "source-park-guell-nature",
                "source-park-guell-restoration-03"
              ]
            }
          ],
          "sourceIds": [
            "source-park-guell-emblematic",
            "source-park-guell-history",
            "source-park-guell-nature"
          ]
        },
        {
          "id": "park-guell-nature-square",
          "title": "7. 自然広場は眺望と共同生活の舞台",
          "blocks": [
            {
              "id": "park-guell-square-bench",
              "type": "paragraph",
              "text": "多柱室の上にある自然広場は、Greek Theatreとも呼ばれるが、客席と舞台を持つ通常の劇場建物ではない。市街を望む大きな平台で、私有地時代の1907年にはすでに市民的な催しが行われた。外周の蛇行ベンチは1914年に完成し、トレンカディスの曲面が人の背を受け、広場の縁をつくり、眺望の方向を選ばせる。座る、話す、景色を見るという共同生活を一つの境界にまとめる。",
              "sourceIds": [
                "source-park-guell-history",
                "source-park-guell-emblematic",
                "source-park-guell-restoration-03"
              ]
            },
            {
              "id": "park-guell-square-observation",
              "type": "paragraph",
              "text": "広場では最初に市街と海側へ向き、高さと距離を確認する。次に振り返り、ベンチの曲率、座面、背、排水、色片を近くで見る。写真の背景となるだけでなく、丘の斜面を平らな集会面へ変え、その下へ市場と水の機能を置いた断面の上に立っている。日差しや風を受ける露出した場所なので、体力を回復するなら多柱室の日陰と使い分ける。蛇行ベンチは直線の柵より多くの座る向きと小さな会話のまとまりをつくり、背後の縁と前方の広場を同時に意識させる。色片を近くで見る時間と、市街・丘・市場の上下関係を遠くから読む時間を分ける。",
              "sourceIds": [
                "source-park-guell-emblematic",
                "source-park-guell-accessibility"
              ]
            }
          ],
          "sourceIds": [
            "source-park-guell-emblematic",
            "source-park-guell-history"
          ]
        },
        {
          "id": "park-guell-vegetation-water",
          "title": "8. 植生は飾りでなく斜面のインフラ",
          "blocks": [
            {
              "id": "park-guell-existing-vegetation",
              "type": "paragraph",
              "text": "ガウディは敷地に育っていたイナゴマメやオリーブを尊重し、新たに植える種も水を多く必要としない地中海植物を選んだ。乾いた「裸の山」を緑で覆うことは景観づくりだけでなく、土を根で保ち、日陰をつくり、雨水の流れを遅らせる働きと結び付く。現在の半森林的な景観には後世の管理も重なるため、見える木をすべて1900年の植栽と断定しない。",
              "sourceIds": [
                "source-park-guell-history",
                "source-park-guell-nature"
              ]
            },
            {
              "id": "park-guell-nature-infrastructure",
              "type": "paragraph",
              "text": "「自然と調和」という抽象語だけでは、どこが設計か分からない。道が木を避けて曲がる場所、擁壁と根元の関係、雨水が集まりそうな低点、乾燥に耐える葉、石材と地山の色を一つずつ探す。植生と水管理は、豪雨による侵食を抑え、将来の住人へ水を供給する計画条件だった。建築物の形を植物に似せたという理解から、丘を長く使える状態に保つ環境設計へ視点を広げる。乾燥期に大量の灌水が必要な植物を避けることは、住宅地の維持費と貯水量にも関わる。豪雨時には葉と根、曲がる道、石積み、排水が水の速度と土砂を抑える。自然を untouched のまま残したのではなく、既存植生を尊重しながら人が暮らし移動できるよう管理する。現在の生態系と1900年の設計を混同せず、継続管理の時間も含めて見る。公園化後の植栽、自然更新、剪定、利用圧、修復は景観を変えてきた。それでも水を多く要求しない植物、地形に沿う道、石積みと根の関係を観察すれば、住宅地時代から続く環境条件を確認できる。植物名を網羅するのでなく、日陰、保水、土留め、眺望という働きから一つずつ選ぶ。",
              "sourceIds": [
                "source-park-guell-history",
                "source-park-guell-nature"
              ]
            }
          ],
          "sourceIds": [
            "source-park-guell-history",
            "source-park-guell-nature"
          ]
        },
        {
          "id": "park-guell-museum-heritage",
          "title": "9. 公園・二つの家・世界遺産の境界",
          "blocks": [
            {
              "id": "park-guell-house-boundaries",
              "type": "paragraph",
              "text": "販売促進用の見本住宅はガウディ自身の設計ではなく助手Francesc Berenguerの設計で、ガウディは1906年から父・姪と暮らし、1963年にガウディの家博物館として公開された。一方、入口の守衛の家Casa del Guardaは住宅地の管理施設で、現在は別の博物館運営境界を持つ。二つを混同せず、公園記事は住宅地全体と共用施設を担当し、各museumの展示・ticket inclusionは訪問前に別確認する。",
              "sourceIds": [
                "source-park-guell-history",
                "source-park-guell-emblematic"
              ]
            },
            {
              "id": "park-guell-heritage-management",
              "type": "paragraph",
              "text": "公園は1969年の国の芸術記念物、1984年のUNESCO「アントニ・ガウディの作品群」、1993年のCataloniaのBCINへ進んだ。世界遺産はガウディ作品のserial propertyで、Park Güellはその一構成資産である。公式ページには12ha、周辺説明には別の面積が現れるため、異なる管理・遺産・周辺区域を一つの数字へまとめない。現在の入場管理や修復は、人気と保存を両立する現代の層として扱う。世界遺産登録は公園を変化のない完成品に凍結することではない。曲面ベンチの陶片、石積み、高架橋、植生は材料も傷み方も異なり、利用を続けながら記録・補修する必要がある。入場制限の数値や工事区画は変わり得るため本文へ固定せず、なぜ管理が必要かという原理だけを残す。公開と地域の公園機能、保存の三者が現在も調整されている。",
              "sourceIds": [
                "source-park-guell-world-heritage",
                "source-unesco-gaudi-works",
                "source-park-guell-restricted-area"
              ]
            }
          ],
          "sourceIds": [
            "source-park-guell-history",
            "source-park-guell-world-heritage",
            "source-unesco-gaudi-works"
          ]
        },
        {
          "id": "park-guell-visit-order",
          "title": "10. 到着日の体力と観察を両立する",
          "blocks": [
            {
              "id": "park-guell-route-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "最小中央ルート",
                  "text": "入口パビリオン→Dragon Stairway→多柱室→自然広場→近い高架橋一つ。"
                },
                {
                  "title": "余力がある",
                  "text": "洗濯女の柱廊や高架橋を追加し、柱・擁壁・道の地形対応を比較する。"
                },
                {
                  "title": "疲労がある",
                  "text": "上部・遠方ルートを省き、多柱室の日陰で休み、同日後半の体力を残す。"
                },
                {
                  "title": "別判断",
                  "text": "Gaudí House MuseumやCasa del Guardaは、入場条件と時間を確認して追加する。"
                }
              ],
              "sourceIds": [
                "source-park-guell-emblematic",
                "source-park-guell-accessibility"
              ]
            },
            {
              "id": "park-guell-visit-priority",
              "type": "paragraph",
              "text": "中央ルートでは、各地点で住宅地の共用施設だった役割を一つ答える。入口は管理、階段は到着、多柱室は市場、広場は催しと眺望、高架橋は区画への交通である。写真待ち、坂、階段、不整地、修復工事で時間と体力が変わるため、全域踏破を成功条件にしない。現在の入口、ticket、transport、accessibility、工事は動的なPlace情報として訪問前に公式確認し、この記事では固定しない。到着日の成功を「上まで全部歩く」にせず、住宅地計画の失敗、斜面移動、水・市場・広場の上下関係を自分の言葉で説明できることに置く。二人の体力に差が出たら多柱室の日陰で相談し、中央ルートで終える選択を正解にする。後の住宅作品では建物内部へ集中するため、ここで疲労を使い切らないことも旅程との接続である。",
              "sourceIds": [
                "source-park-guell-emblematic",
                "source-park-guell-accessibility",
                "source-park-guell-restricted-area"
              ]
            }
          ],
          "sourceIds": [
            "source-park-guell-emblematic",
            "source-park-guell-accessibility"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "park-guell-onsite-priority-route",
          "title": "現地2分｜丘・水・共用施設を追う10項目",
          "blocks": [
            {
              "id": "park-guell-onsite-checklist",
              "type": "onsite-checklist",
              "items": [
                "接近時：公園が丘のどの高さにあるかを見て、入口までの坂で二人の体力を一度確認する。",
                "入口パビリオン：童話的な形より先に、住宅地の門・守衛・管理施設として誰を迎えたかを考える。",
                "ドラゴン階段：像だけで止まらず、街路から多柱室へ上がる階段、水盤、人の流れを一続きで追う。",
                "サラマンダー：公式の階段名と像名を分け、混雑時は写真を短くして全体動線を優先する。",
                "多柱室：柱列と天井を見上げ、上に広場、内部に週市予定地が重なる断面を想像する。",
                "水：広場床、柱、多柱室、斜面で雨が流れそうな方向を探し、確認と推測を言い分ける。",
                "自然広場：市街へ向いて眺望を確認した後、蛇行ベンチの曲率・座り方・縁・色片を見る。",
                "高架橋：柱の傾き、擁壁の厚み、道の曲線から、移動と斜面保持の二役を一つ説明する。",
                "植生：既存木を避ける道、乾燥に耐える葉、雨水が集まる低点を一つずつ探す。",
                "疲労時：中央五地点と近い高架橋一つで止め、上部・博物館追加より同日後半の四作品へ体力を残す。"
              ],
              "sourceIds": [
                "source-park-guell-history",
                "source-park-guell-emblematic",
                "source-park-guell-nature",
                "source-park-guell-accessibility"
              ]
            }
          ],
          "sourceIds": [
            "source-park-guell-emblematic",
            "source-park-guell-accessibility"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1226"
      ],
      "sourceIds": [
        "source-park-guell-origin",
        "source-park-guell-gaudi-guell",
        "source-park-guell-history",
        "source-park-guell-emblematic",
        "source-park-guell-world-heritage",
        "source-park-guell-nature",
        "source-park-guell-restoration-03",
        "source-park-guell-accessibility",
        "source-park-guell-restricted-area",
        "source-unesco-gaudi-works"
      ]
    },
    {
      "id": "palau-guell",
      "cityId": "barcelona",
      "placeId": "guell-palace",
      "relatedPlaceIds": [
        "guell-palace"
      ],
      "relatedScheduleItemIds": [
        "d1226-guell-palace"
      ],
      "scopeType": "place",
      "title": "グエル邸（Palau Güell）",
      "kind": "建築",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "グエル邸（Palau Güell）は、実業家エウゼビ・グエル（Eusebi Güell）の都市邸宅として、アントニ・ガウディが1886〜1890年にバルセロナ旧市街で建設した建物です。狭い街路に面する石の正面には、馬車が出入りできる二つの大きなアーチがあります。目立つ装飾だけを見るのではなく、家族、来客、使用人、馬車を限られた敷地の中でどう分け、再び結び付けたかが理解の入口です。\n\n地下の厩舎から中央ホール、屋上までを上下に重ね、光、換気、音、人の動きを縦方向へ通したことが重要です。中央ホールは邸宅の社交空間であると同時に、上方から光を受け、周囲の部屋をまとめる空間の核でもあります。石、れんが、鉄、木、陶器、ガラスは表面を飾るだけでなく、荷重、通風、遮蔽、手触りといった異なる役割を担います。\n\n現地では、正面の二つのアーチ、地下へ下る動線、中央ホールの高さと光、屋上の煙突という順に、建物が地上から空へ変化する様子を追ってください。この順序は理解のための観察案であり、施設の公式見学順路を示すものではありません。到着日に複数作品を見る計画なので、疲れた場合は正面、中央ホール、屋上の三点へ絞り、カサ・ビセンスの平面的な色彩や後の住宅作品との違いを一つ説明できれば十分です。",
        "keyPoints": [
          "狭い旧市街の敷地へ、家族生活、社交、使用人、馬車の動線を立体的に収めた。",
          "地下、中央ホール、屋上を結ぶ縦の構成が、光、換気、音、人の移動をまとめる。",
          "石、れんが、鉄、木、陶器、ガラスは、装飾と実用の役割を同時に持つ。",
          "若い時期のカサ・ビセンスから、空間全体を統合する設計へ進んだ過程を比べる。"
        ],
        "whyItMatters": "グエル邸は「豪華な邸宅」だけではなく、狭い都市敷地の制約を、断面、光、動線、素材の統合によって解いた作品です。今回の六作品の中では、ガウディとグエルの協働が建物全体の実験へ発展する重要な接点として読めます。",
        "sourceIds": [
          "source-palau-guell-official-home",
          "source-palau-guell-catalonia-heritage",
          "source-palau-guell-portal-gaudi",
          "source-unesco-gaudi-works"
        ]
      },
      "terms": [
        {
          "id": "palau-guell-term-palau",
          "term": "パラウ（Palau）",
          "definition": "カタルーニャ語で宮殿や格式ある都市邸宅を表す語。グエル邸は王宮ではなく、実業家グエル家の生活、接客、文化活動を収めた都市住宅として理解する。",
          "sourceIds": [
            "source-palau-guell-official-home",
            "source-palau-guell-catalonia-heritage"
          ]
        },
        {
          "id": "palau-guell-term-patronage",
          "term": "パトロネージュ（patronage）",
          "definition": "依頼主が資金を出すだけでなく、建築家の継続的な試みを支える関係。エウゼビ・グエルとガウディの協働は、邸宅から公園、宗教建築へ広がる長期的な関係になった。",
          "sourceIds": [
            "source-palau-guell-portal-gaudi",
            "source-unesco-gaudi-works"
          ]
        },
        {
          "id": "palau-guell-term-parabolic-arch",
          "term": "放物線アーチ（arc parabòlic）",
          "definition": "正面の馬車入口などに見られる、上方へ鋭く伸びる曲線のアーチ。奇抜な輪郭ではなく、開口の大きさ、荷重、進入動線を一つの形で処理する。",
          "sourceIds": [
            "source-palau-guell-official-home",
            "source-palau-guell-arquitectura-catalana"
          ]
        },
        {
          "id": "palau-guell-term-central-hall",
          "term": "中央ホール（saló central）",
          "definition": "建物の中心を複数階にわたって縦に貫く主要空間。接客や文化活動の場であり、周囲の部屋、上方からの光、音、視線をまとめる空間的な核でもある。",
          "sourceIds": [
            "source-palau-guell-official-home",
            "source-palau-guell-catalonia-heritage"
          ]
        },
        {
          "id": "palau-guell-term-coach-circulation",
          "term": "馬車動線",
          "definition": "街路から二つの大きな入口を通り、乗降、方向転換、地下厩舎への移動を処理する経路。人の正面入口だけでなく、車両と動物を含めて邸宅を設計したことを示す。",
          "sourceIds": [
            "source-palau-guell-official-home",
            "source-palau-guell-arquitectura-catalana"
          ]
        },
        {
          "id": "palau-guell-term-trencadis",
          "term": "トレンカディス（trencadís）",
          "definition": "割れた陶器やタイル片を組み合わせて面を覆う技法。屋上の煙突では色と模様を生む一方、曲面を細かな断片で包み、設備を建築景観へ統合する働きも持つ。",
          "sourceIds": [
            "source-palau-guell-trencadis",
            "source-palau-guell-restoration-arquitectura-catalana"
          ]
        },
        {
          "id": "palau-guell-term-restoration",
          "term": "修復（restoration）",
          "definition": "古い姿へ単純に戻す作業ではなく、材料、構法、劣化、後世の変更を調査し、保存と公開利用を両立させる判断の積み重ね。現在見える状態にも修復史が含まれる。",
          "sourceIds": [
            "source-palau-guell-restoration-arquitectura-catalana",
            "source-palau-guell-catalonia-heritage"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "palau-guell-commission-and-city",
          "title": "1. グエル家の都市邸宅と旧市街",
          "blocks": [
            {
              "id": "palau-guell-commission-context",
              "type": "paragraph",
              "text": "グエル邸は、エウゼビ・グエルが家族生活と社会的な接客を一つの建物へ収めるためにガウディへ依頼した都市邸宅である。建設年代は公式表示に従い1886〜1890年とする。場所は旧市街の細い街路に面し、後のアシャンプラにある広い角地の住宅とは条件が違う。遠くから全体像を見せる余裕が少なく、街路から内部へ入った後の奥行きと高さが重要になる。\n\nこの敷地条件の中で必要だったのは、豪華な部屋を並べることだけではない。家族、招待客、使用人、馬車、馬、物資が同じ建物を使いながら、互いの動きを過度に妨げない構成である。ガウディは用途を平面上へ横に広げられないため、地下、入口階、主要階、上階、屋上へ重ねた。グエル邸を理解する第一歩は、外観の装飾より先に、限られた都市敷地を断面方向に使ったことを見ることである。\n\n旧市街では、向かい側へ十分に下がって建物全体を眺めることが難しく、外観だけでは内部の規模をつかみにくい。そのため設計は、一度に全体を見せる構図より、入口を越えるたびに高さ、明るさ、素材、音の響きが変わる体験を重ねる。街路に対して閉じた石の面、馬車を受け入れる大開口、上方へ伸びる中央空間は、相反する要求を順番に解く要素である。敷地の不利を隠したのではなく、狭さを移動と発見の順序へ変換したと考えると、後の広い敷地の作品とは異なる発明が見える。",
              "sourceIds": [
                "source-palau-guell-official-home",
                "source-palau-guell-catalonia-heritage",
                "source-palau-guell-portal-gaudi"
              ]
            },
            {
              "id": "palau-guell-patron-architect",
              "type": "callout",
              "title": "依頼主と建築家の関係",
              "text": "グエルを単なる資金提供者、ガウディを自由に造形した芸術家と分けると、この邸宅の目的を見失う。接客、音楽、家族生活、馬車利用を必要とした依頼と、それらを空間へ統合した設計の応答として読む。",
              "sourceIds": [
                "source-palau-guell-portal-gaudi",
                "source-unesco-gaudi-works"
              ]
            }
          ],
          "sourceIds": [
            "source-palau-guell-official-home",
            "source-palau-guell-catalonia-heritage"
          ]
        },
        {
          "id": "palau-guell-facade-and-threshold",
          "title": "2. 正面と二つの馬車入口",
          "blocks": [
            {
              "id": "palau-guell-facade-reading",
              "type": "paragraph",
              "text": "正面は重い石の面として街路に立つ一方、地上部には二つの大きな放物線状のアーチが開く。これは左右対称の飾りではなく、馬車の進入と退出を処理する実用的な開口である。狭い街路で車体と馬を動かすには、人だけの玄関より大きな寸法と、内部で流れを止めない構成が必要だった。鉄の意匠は視線を通す部分と遮る部分をつくり、公的な街路と私的な邸宅の境界を調整する。\n\n上階へ目を移すと、開口の寸法、石面、突出部が地上部とは異なる密度で組み合わされる。正面を一枚の絵として見るのではなく、馬車が通る下部、主要室と結び付く中間部、屋根際という役割の違いを下から上へ追うとよい。外観の暗さや閉鎖性は欠点と即断せず、旧市街で安全、格式、採光をどう両立しようとしたかという問いへ置き換える。",
              "sourceIds": [
                "source-palau-guell-official-home",
                "source-palau-guell-arquitectura-catalana"
              ]
            },
            {
              "id": "palau-guell-threshold-summary",
              "type": "summary",
              "title": "入口で確認すること",
              "text": "二つのアーチを写真の枠として見るだけでなく、片方から入り、もう片方へ抜ける馬車の大きさと旋回を想像する。正面の形が内部動線から決まることが分かる。",
              "sourceIds": [
                "source-palau-guell-official-home"
              ]
            }
          ],
          "sourceIds": [
            "source-palau-guell-official-home",
            "source-palau-guell-arquitectura-catalana"
          ]
        },
        {
          "id": "palau-guell-basement-and-stables",
          "title": "3. 地下厩舎と荷重を受ける空間",
          "blocks": [
            {
              "id": "palau-guell-basement-system",
              "type": "paragraph",
              "text": "地下は建物の裏方というだけでなく、邸宅の交通を支える基盤である。馬車から馬を分け、傾斜した動線で厩舎へ導き、地上の家族・接客空間と立体的に分離する。低い光、太い支持体、れんがの曲面がつくる雰囲気は上階と大きく異なるが、そこには馬の移動、換気、清掃、上部荷重という具体的な条件への応答がある。\n\n柱やヴォールトを見るときは、「洞窟のようだ」という印象で終えず、上に積み重なる邸宅の重さがどこから地面へ流れるかを追う。支持体の広がりとアーチ状の面は、限られた高さの中で荷重を分散しながら、馬と人が通る余地を残す。地上の華やかな素材と地下の構造は別作品ではなく、一つの断面の上下にある。",
              "sourceIds": [
                "source-palau-guell-official-home",
                "source-palau-guell-catalonia-heritage",
                "source-palau-guell-arquitectura-catalana"
              ]
            },
            {
              "id": "palau-guell-basement-caution",
              "type": "callout",
              "title": "形の比喩と機能を分ける",
              "text": "きのこ、洞窟、森などの比喩は見た印象を覚える助けになるが、公式に定められた唯一の意味とは扱わない。支持、通路、換気という確認可能な働きを先に観察する。",
              "sourceIds": [
                "source-palau-guell-arquitectura-catalana"
              ]
            }
          ],
          "sourceIds": [
            "source-palau-guell-official-home",
            "source-palau-guell-arquitectura-catalana"
          ]
        },
        {
          "id": "palau-guell-central-hall",
          "title": "4. 中央ホールがつくる縦の中心",
          "blocks": [
            {
              "id": "palau-guell-central-hall-space",
              "type": "paragraph",
              "text": "中央ホールは主要階だけで完結する一室ではなく、複数階を縦につなぐ空間の核である。周囲の部屋や通路がこの高い空間へ向き、家族と来客の視線、音、移動が集まる。上部の覆いには小さな開口があり、外光が点として落ちる。昼でも街路側が暗くなりやすい敷地で、光を上から導く断面的な解決である。\n\nここでは天井の高さだけでなく、立つ位置によって見える階層がどう変わるかを確かめたい。下から上を見ると光の入口が分かり、上階側から中央を見ると各室の関係が分かる。中央ホールは接客の舞台であると同時に、邸宅全体の方向感覚をつくる装置でもある。装飾、礼拝や音楽に関わる利用、換気、採光を別々に扱わず、一つの縦空間へ重ねた点にガウディの統合性が現れる。\n\n中央に大きな空洞を置くことは、使える床面積を減らす選択でもある。それでもこの空間を核にしたのは、個々の部屋を廊下で結ぶだけでは得られない一体性が必要だったからだ。来客は主要室へ進みながら高い空間の存在を感じ、上階の家族は完全に同じ場所へ降りなくても中央との関係を保てる。音楽や礼拝に関わる利用では、音が上下へ広がる性質も空間経験の一部になる。ただし、響きの効果を唯一の設計目的と断定せず、採光、換気、視線、格式が重なる多目的な中心として理解する。",
              "sourceIds": [
                "source-palau-guell-official-home",
                "source-palau-guell-catalonia-heritage",
                "source-palau-guell-portal-gaudi"
              ]
            },
            {
              "id": "palau-guell-central-hall-light",
              "type": "summary",
              "title": "暗さから光へ",
              "text": "入口や地下の低く暗い領域から中央ホールへ進むと、上方の光によって空間の方向が変わる。暗さを失敗と決めず、明暗の差が動線と格式をどう組み立てるかを見る。",
              "sourceIds": [
                "source-palau-guell-official-home",
                "source-palau-guell-catalonia-heritage"
              ]
            }
          ],
          "sourceIds": [
            "source-palau-guell-official-home",
            "source-palau-guell-catalonia-heritage"
          ]
        },
        {
          "id": "palau-guell-domestic-and-social-zones",
          "title": "5. 家族、来客、使用人を分けて結ぶ",
          "blocks": [
            {
              "id": "palau-guell-zoning",
              "type": "paragraph",
              "text": "都市邸宅には、外部の客を迎える場、家族が過ごす場、寝室、サービス空間、物資を運ぶ経路が必要である。グエル邸では、それらを単純な廊下の左右へ並べるのでなく、高さの異なる階と中央ホールの周囲へ配置した。誰がどこまで入るか、どの動線が見えるか、サービスがどこで主空間を支えるかという社会的な区分が建築の断面に表れる。\n\nただし、豪華な主要室だけを作品の本体と考えると、生活を成立させた見えにくい経路を失う。扉、階段、廊下、窓の位置を追い、主動線と補助動線が近づく場所と離れる場所を比べる。後のカサ・バトリョやカサ・ミラでも採光、換気、サービス動線は重要になるが、グエル邸では格式ある個人邸宅という用途に合わせて、より劇場的な到着と中央化が行われている。",
              "sourceIds": [
                "source-palau-guell-official-home",
                "source-palau-guell-catalonia-heritage",
                "source-palau-guell-arquitectura-catalana"
              ]
            },
            {
              "id": "palau-guell-zoning-observation",
              "type": "callout",
              "title": "見える動線と見えない動線",
              "text": "見学時に通れる範囲だけを当時の生活動線全体とみなさない。現在の公開経路と、建設当初に家族、客、使用人、馬車が使った経路は区別して考える。",
              "sourceIds": [
                "source-palau-guell-official-home"
              ]
            }
          ],
          "sourceIds": [
            "source-palau-guell-official-home",
            "source-palau-guell-catalonia-heritage"
          ]
        },
        {
          "id": "palau-guell-materials-and-craft",
          "title": "6. 石、れんが、鉄、木、陶器を使い分ける",
          "blocks": [
            {
              "id": "palau-guell-material-system",
              "type": "paragraph",
              "text": "グエル邸では、多種類の素材が豪華さを示すためだけに並ぶのではない。石は正面や支持体に重さと耐久性を与え、れんがは地下や曲面を組み立て、鉄は大きな開口を守りながら透過性を調整する。木は扉や内装で身体に近い尺度をつくり、陶器やガラスは色、反射、表面保護へ関わる。素材ごとの性質を場所に応じて使い分けたことが、建物全体の密度を生む。\n\n近くで見る細部と、離れて見る空間を往復するとよい。鉄の線を一つ見たら、それが手で触れる位置か、境界を守る位置か、光を通す位置かを確認する。木や石についても、色の好みではなく、荷重、摩耗、音、温度、手触りのどれに応答しているかを考える。職人技は建築から独立した付加装飾ではなく、構造と生活を具体的な材料へ変換する設計の一部である。\n\n素材の切り替わる境界には、部屋の役割が変わる手掛かりがある。街路に近い場所では耐久性と防御、主要室では触感と音、上方では軽さや光の反射、屋上では雨風への抵抗が重くなる。同じ素材でも、磨き方、組み方、表面の粗さによって印象と働きが変化する。豪華さを価格の高い材料の量として測るのではなく、必要な場所へ異なる職人技を配置した精度として見るとよい。また、修復された表面は建設当初の状態をそのまま凍結したものではないため、色や艶だけから年代を断定せず、保存の履歴を含む現在の姿として観察する。",
              "sourceIds": [
                "source-palau-guell-official-home",
                "source-palau-guell-arquitectura-catalana",
                "source-palau-guell-trencadis"
              ]
            },
            {
              "id": "palau-guell-material-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "地下｜れんがと石",
                  "text": "荷重、湿度、馬と人の通路へ応答する。暗い空間の印象より、支持体と曲面が上部を支える働きを見る。"
                },
                {
                  "title": "正面｜石と鉄",
                  "text": "都市街路に対する格式、耐久性、馬車開口、視線の透過と遮蔽を同時に処理する。"
                },
                {
                  "title": "主要室｜木、石、ガラス",
                  "text": "身体に近い手触り、音、光の反射、部屋ごとの格式を調整し、中央ホールへ秩序を与える。"
                },
                {
                  "title": "屋上｜陶器と設備",
                  "text": "煙や空気を排出する設備を色と曲面で包み、都市の上にもう一つの景観をつくる。"
                }
              ],
              "sourceIds": [
                "source-palau-guell-arquitectura-catalana",
                "source-palau-guell-trencadis"
              ]
            }
          ],
          "sourceIds": [
            "source-palau-guell-arquitectura-catalana",
            "source-palau-guell-trencadis"
          ]
        },
        {
          "id": "palau-guell-structure-and-geometry",
          "title": "7. 曲線を荷重と移動から読む",
          "blocks": [
            {
              "id": "palau-guell-geometry-reading",
              "type": "paragraph",
              "text": "放物線状の入口、地下のアーチやヴォールト、中央ホールの覆いは、曲線という共通した印象を与える。しかし、すべてを「自然をまねた形」でまとめない方がよい。入口では馬車が通れる開口と上部荷重、地下では支持と通路、中央ホールでは大きな空間と上方採光という別々の課題がある。似た曲線でも、その位置と役割を確認する必要がある。\n\n構造を専門計算なしで見るには、上から下へ重さの道筋を想像する。天井や床の荷重がアーチや壁へ集まり、柱や支持体を通って地面へ達する経路を一つ選ぶ。同時に、人や馬車の経路がその支持体を避け、あるいはその間を通る様子を考える。グエル邸の特徴は、構造を隠して平らな箱をつくるのでなく、荷重を受ける形が空間の方向や歩き方にも影響する点にある。",
              "sourceIds": [
                "source-palau-guell-arquitectura-catalana",
                "source-palau-guell-catalonia-heritage",
                "source-palau-guell-portal-gaudi"
              ]
            },
            {
              "id": "palau-guell-geometry-caution",
              "type": "callout",
              "title": "曲線の多さで進歩を測らない",
              "text": "カサ・ビセンスより曲線が多いから進んだ、と順位をつけない。敷地、用途、荷重、移動という異なる課題を、形がどれほどまとめているかで比べる。",
              "sourceIds": [
                "source-palau-guell-portal-gaudi",
                "source-unesco-gaudi-works"
              ]
            }
          ],
          "sourceIds": [
            "source-palau-guell-arquitectura-catalana",
            "source-unesco-gaudi-works"
          ]
        },
        {
          "id": "palau-guell-roof-and-trencadis",
          "title": "8. 屋上設備を都市景観へ変える",
          "blocks": [
            {
              "id": "palau-guell-roofscape",
              "type": "paragraph",
              "text": "屋上では、煙突や換気に関わる要素が一つずつ異なる輪郭と表面を持ち、設備の集合が都市の上の景観になる。これらは独立した彫刻ではなく、下階の暖炉、空気、縦穴と結ばれた建築設備である。中央ホールから上方へ追ってきた光と空気の経路が、屋上で外部へ開くと考えると、地下から屋上までの断面が一つにつながる。\n\nトレンカディスは、割れた陶器片を使って曲面を覆い、異なる色と模様をつくる。細かな断片は複雑な曲面へ合わせやすいが、再利用や偶然性だけを作品全体の意味と断定しない。保存修復では、当初材、後世の補修、劣化した表面を調査し、何を残し何を補うかが判断される。現在見える鮮やかさも、建設時から変わらない一枚の状態ではなく、長い維持と修復の時間を含む。\n\n屋上へ出たときは、煙突群を正面のように一方向から眺めるのではなく、歩く位置を変えて重なりを確かめる。低い視点では設備同士が壁のように連なり、高い側では旧市街の屋根並みとの関係が見える。曲面を覆う小片の色は遠景でまとまり、近景では継ぎ目と修復の差を示す。地下の厩舎が建物を下から支えた実用空間なら、屋上は内部で生じた煙や空気を外へ逃がす上端である。両者を対として考えることで、観光写真に表れやすい屋上と見えにくい地下が同じ環境制御の断面に属すと理解できる。",
              "sourceIds": [
                "source-palau-guell-trencadis",
                "source-palau-guell-restoration-arquitectura-catalana",
                "source-palau-guell-official-home"
              ]
            },
            {
              "id": "palau-guell-roof-function",
              "type": "summary",
              "title": "設備から先に見る",
              "text": "形や色を楽しんだ後、それぞれが煙突、換気、階段室など何を処理する要素かを確認する。機能を隠すのでなく、都市から見える建築へ変えたことが要点である。",
              "sourceIds": [
                "source-palau-guell-trencadis",
                "source-palau-guell-official-home"
              ]
            }
          ],
          "sourceIds": [
            "source-palau-guell-trencadis",
            "source-palau-guell-restoration-arquitectura-catalana"
          ]
        },
        {
          "id": "palau-guell-history-and-restoration",
          "title": "9. 建設、文化財化、修復の時間",
          "blocks": [
            {
              "id": "palau-guell-history-context",
              "type": "paragraph",
              "text": "グエル邸を1886〜1890年の完成時だけに固定せず、その後の利用、文化財としての評価、保存修復を含む建物として見る必要がある。家族のための私的な邸宅は、所有と用途の変化を経て、公的に保存される建築遺産になった。1984年には、後に範囲が拡張された「アントニ・ガウディの作品群」の構成資産として世界遺産に登録された。\n\n修復では、表面を新しく見せることだけが目的ではない。構造の安全、素材の劣化、設備、見学利用、異なる時期の痕跡を調べ、建物が持つ情報を失わずに利用可能な状態へ整える。正面、室内、屋上で色や材料の状態が違って見える場合も、単純にガウディの意図の差と断定せず、環境と修復履歴を考慮する。",
              "sourceIds": [
                "source-palau-guell-catalonia-heritage",
                "source-palau-guell-restoration-arquitectura-catalana",
                "source-unesco-gaudi-works"
              ]
            },
            {
              "id": "palau-guell-history-timeline",
              "type": "timeline",
              "entries": [
                {
                  "date": "1886",
                  "title": "建設開始",
                  "text": "グエル家の都市邸宅として工事が始まり、狭い旧市街の敷地へ馬車、接客、家族生活を重ねる計画が具体化する。"
                },
                {
                  "date": "1886–1890",
                  "title": "グエル邸の建設",
                  "text": "公式表示に従う年代。地下厩舎、二つの馬車入口、中央ホール、主要室、屋上設備が一つの断面へ統合される。"
                },
                {
                  "date": "20世紀",
                  "title": "利用と所有の変化",
                  "text": "私的な家族邸宅として始まった建物は、都市とグエル家の変化の中で当初とは異なる利用・保存の段階へ移る。"
                },
                {
                  "date": "1945",
                  "title": "公的所有へ",
                  "text": "バルセロナ県議会による取得後、私邸を文化財として保存し公開へつなぐ新しい役割が加わる。"
                },
                {
                  "date": "1969",
                  "title": "歴史芸術記念物",
                  "text": "建物の文化財的価値が制度上も位置付けられ、維持と保存を長期的に考える対象になる。"
                },
                {
                  "date": "1984",
                  "title": "世界遺産登録",
                  "text": "ガウディの作品群を構成する建築として世界遺産へ登録され、個人邸宅を越えた普遍的価値が示される。"
                },
                {
                  "date": "現代",
                  "title": "調査と修復の継続",
                  "text": "構造、材料、屋上装飾、公開利用を検討する修復により、建設時と後世の履歴を伝える状態が維持される。"
                }
              ],
              "sourceIds": [
                "source-palau-guell-catalonia-heritage",
                "source-palau-guell-restoration-arquitectura-catalana",
                "source-unesco-gaudi-works"
              ]
            }
          ],
          "sourceIds": [
            "source-palau-guell-catalonia-heritage",
            "source-palau-guell-restoration-arquitectura-catalana",
            "source-unesco-gaudi-works"
          ]
        },
        {
          "id": "palau-guell-comparison-and-route",
          "title": "10. 六作品の中での位置と観察ルート",
          "blocks": [
            {
              "id": "palau-guell-cross-work-context",
              "type": "paragraph",
              "text": "グエル邸は、カサ・ビセンスに続く初期の住宅作品としてまとめられやすいが、課題は大きく異なる。カサ・ビセンスが当時の郊外住宅として平面的な色彩、工芸、庭との境界を見せるのに対し、グエル邸は旧市街の狭い敷地で、地下から屋上までの縦方向へ機能を重ねる。後のカサ・バトリョやカサ・ミラでは、集合住宅の採光、換気、住戸、街路景観が再編される。グエル邸は、それらに先立って光、動線、素材を建物全体へ統合した段階として読める。\n\n理解のための概念的な観察順は、街路の正面、二つの馬車入口、地下厩舎、中央ホール、主要室、屋上である。これは施設が指定する公式順路ではなく、実際の入場導線や公開範囲を保証しない。観察では、各地点を独立した名所にせず、馬車と人、暗さと光、支持体と大空間、室内設備と屋上の出口という上下の関係を一つずつつなぐ。",
              "sourceIds": [
                "source-palau-guell-official-home",
                "source-palau-guell-portal-gaudi",
                "source-unesco-gaudi-works"
              ]
            },
            {
              "id": "palau-guell-work-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "Casa Vicens｜郊外住宅",
                  "text": "色、工芸、植物モチーフ、室内外の境界を平面的に比べる。グエル邸では同じ初期でも縦の動線と中央空間が中心になる。"
                },
                {
                  "title": "Palau Güell｜都市邸宅",
                  "text": "狭い旧市街へ馬車、社交、家族、使用人を積層し、地下から中央ホール、屋上まで光と空気をつなぐ。"
                },
                {
                  "title": "Casa Batlló｜既存住宅改修",
                  "text": "光井戸と換気、既存骨格の再編を比較する。グエル邸の中央化に対し、階ごとの光の均等化が重要になる。"
                },
                {
                  "title": "Casa Milà｜新築集合住宅",
                  "text": "柱構造、中庭、自由度の高い住戸、屋上設備を比較する。個人邸宅から複数世帯の都市生活へ課題が拡大する。"
                }
              ],
              "sourceIds": [
                "source-palau-guell-portal-gaudi",
                "source-unesco-gaudi-works"
              ]
            },
            {
              "id": "palau-guell-route-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "基本観察",
                  "text": "正面の二つのアーチ、地下の支持体、中央ホールのドームと上方光、屋上設備をつなぎ、建物の断面を説明する。"
                },
                {
                  "title": "短縮観察",
                  "text": "疲労や混雑がある場合は正面、中央ホール、屋上へ絞り、馬車動線、縦の光、設備の造形を一つずつ確認する。"
                },
                {
                  "title": "外観のみ",
                  "text": "入場しない場合は二つの入口と上階の開口を観察する。ただし地下、中央ホール、屋上の統合は未確認として残す。"
                }
              ],
              "sourceIds": [
                "source-palau-guell-official-home",
                "source-palau-guell-catalonia-heritage"
              ]
            },
            {
              "id": "palau-guell-fatigue-note",
              "type": "callout",
              "title": "到着日の疲労と短縮",
              "text": "12月26日は複数のガウディ作品が同じ候補群にある。記事は訪問採用や時刻を変更しない。現地で疲れている場合は、全室を記憶しようとせず、入口、中央ホール、屋上の三点を比較し、後続作品へ体力を残す。",
              "sourceIds": [
                "source-palau-guell-official-home"
              ]
            }
          ],
          "sourceIds": [
            "source-palau-guell-official-home",
            "source-palau-guell-portal-gaudi",
            "source-unesco-gaudi-works"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "palau-guell-onsite-route",
          "title": "グエル邸を2分で見る10項目",
          "blocks": [
            {
              "id": "palau-guell-onsite-checklist",
              "type": "onsite-checklist",
              "items": [
                "正面：二つの大アーチを見て、馬車が進入・退出する幅と向きを想像する。",
                "鉄の境界：入口の鉄が、視線を通す部分と遮る部分をどう分けるか見る。",
                "地下：柱と曲面から、上部の重さが地面へ流れる経路を一つ追う。",
                "馬車動線：街路、乗降、地下厩舎が上下にどう結ばれたか考える。",
                "中央ホール：床から上部開口まで視線を上げ、空間の縦軸を確認する。",
                "光：暗い入口から上方光のある中央部へ、明るさが変わる順序を見る。",
                "動線：家族、客、使用人が同じ建物で交差・分離する場所を一つ探す。",
                "素材：石、れんが、鉄、木、陶器から二つ選び、役割の違いを説明する。",
                "屋上：煙突や換気要素を彫刻で終えず、下階につながる設備として見る。",
                "比較：カサ・ビセンスより縦方向の統合が強い点を一つ言葉にする。"
              ],
              "sourceIds": [
                "source-palau-guell-official-home",
                "source-palau-guell-catalonia-heritage",
                "source-palau-guell-arquitectura-catalana",
                "source-palau-guell-trencadis"
              ]
            }
          ],
          "sourceIds": [
            "source-palau-guell-official-home",
            "source-palau-guell-catalonia-heritage"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1226"
      ],
      "sourceIds": [
        "source-palau-guell-official-home",
        "source-palau-guell-catalonia-heritage",
        "source-palau-guell-portal-gaudi",
        "source-palau-guell-arquitectura-catalana",
        "source-palau-guell-restoration-arquitectura-catalana",
        "source-palau-guell-trencadis",
        "source-unesco-gaudi-works"
      ]
    },
    {
      "id": "casa-vicens",
      "cityId": "barcelona",
      "placeId": "casa-vicens",
      "relatedPlaceIds": [
        "casa-vicens"
      ],
      "relatedScheduleItemIds": [
        "d1226-casa-vicens"
      ],
      "scopeType": "place",
      "title": "カサ・ビセンス（Casa Vicens）",
      "kind": "建築",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "カサ・ビセンス（Casa Vicens）は、タイル製造業者マネル・ビセンス（Manel Vicens）がグラシア（Gràcia）の夏の家として依頼し、アントニ・ガウディが1883〜1885年に実現した住宅です。ガウディ最初の家であり、初期の主要依頼作として位置付けられます。色鮮やかな陶器だけでなく、当時の郊外住宅が庭、光、風とどう結ばれたかを見ることが出発点です。\n\n外壁では石、れんが、緑と白の陶器、鉄、木が幾何学的に重なり、室内では天井、壁、建具まで色と工芸が続きます。イスラーム建築やムデハルを含む歴史的様式への参照は指摘できますが、一つの様式の複製とは呼ばず、複数の参照をガウディが敷地と住宅用途へ組み替えたと理解します。庭の植物と陶器の植物模様も、現物と表現を往復させる手掛かりです。\n\n現地では、街路から立面の色と直線を見た後、庭との境界、光と換気、素材の切り替わり、旧部分と1925年増築部分の関係を追ってください。この順序は理解のための概念的な観察案で、施設の公式順路ではありません。到着日に疲れている場合は、外観、庭との境界、主要室の三点へ絞り、後のグエル邸が縦方向へ空間を統合するのに対し、ここでは色、面、庭が強く結び付く点を確認すれば十分です。",
        "keyPoints": [
          "1883〜1885年の原設計は、ガウディ最初の家であり初期の主要依頼作である。",
          "夏の家として、庭、採光、換気、日除け、室内外の移行を一体的に考えた。",
          "陶器、れんが、石、鉄、木の多色性は、表面装飾と材料の役割を同時に示す。",
          "1925年増築と現在の庭を原設計と混同せず、建物の変化を区別して観察する。"
        ],
        "whyItMatters": "六作品を年代順に見るとき、カサ・ビセンスは後年の曲線の予告編ではなく、若いガウディが住宅、庭、工芸、環境を初めて総合した出発点です。後続作品との違いを測る基準になります。",
        "sourceIds": [
          "source-casa-vicens-original-project",
          "source-casa-vicens-official-history",
          "source-casa-vicens-garden",
          "source-unesco-gaudi-works"
        ]
      },
      "terms": [
        {
          "id": "casa-vicens-term-summer-house",
          "term": "夏の家（summer house）",
          "definition": "都市中心部の常住住宅とは異なり、当時のグラシアで季節を過ごすための家。庭、日差し、風、室内外の移動を含めて住宅の快適さを考える必要がある。",
          "sourceIds": [
            "source-casa-vicens-original-project",
            "source-casa-vicens-official-history"
          ]
        },
        {
          "id": "casa-vicens-term-polychromy",
          "term": "多色性（polychromy）",
          "definition": "複数の色を建築表面へ組み合わせること。カサ・ビセンスでは陶器、れんが、石、木、彩色面が異なる光を受け、立面と室内のまとまりをつくる。",
          "sourceIds": [
            "source-casa-vicens-original-project",
            "source-casa-vicens-arquitectura-catalana"
          ]
        },
        {
          "id": "casa-vicens-term-mudejar",
          "term": "ムデハル（Mudéjar）参照",
          "definition": "キリスト教支配下のイベリアで発達したイスラーム系の技法や意匠に関わる歴史的参照。カサ・ビセンス全体を単一のムデハル様式と断定せず、複数の参照の一つとして扱う。",
          "sourceIds": [
            "source-casa-vicens-arquitectura-catalana",
            "source-casa-vicens-heritage"
          ]
        },
        {
          "id": "casa-vicens-term-glazed-ceramic",
          "term": "施釉陶器（glazed ceramic）",
          "definition": "釉薬をかけて焼き、色と耐水性のある表面をつくる陶器。外壁では幾何学模様と植物に結び付く色を生み、れんがや石との材料差を際立たせる。",
          "sourceIds": [
            "source-casa-vicens-original-project",
            "source-casa-vicens-arquitectura-catalana"
          ]
        },
        {
          "id": "casa-vicens-term-sgraffito",
          "term": "ズグラッフィート（sgraffito）",
          "definition": "色の異なる塗り層を重ね、上層を削って模様を表す装飾技法。陶器とは異なる平面の作り方として、素材と施工法の違いを見分ける手掛かりになる。",
          "sourceIds": [
            "source-casa-vicens-arquitectura-catalana",
            "source-casa-vicens-museum-restoration-arquitectura-catalana"
          ]
        },
        {
          "id": "casa-vicens-term-original-project",
          "term": "原設計（original project）",
          "definition": "1883〜1885年にガウディが実現した最初の住宅部分と、その敷地・庭を含む計画。1925年の増築や後世の改変、現在の博物館利用とは年代を分けて理解する。",
          "sourceIds": [
            "source-casa-vicens-original-project",
            "source-casa-vicens-private-to-museum"
          ]
        },
        {
          "id": "casa-vicens-term-restoration",
          "term": "修復（restoration）",
          "definition": "材料、構法、劣化、後世の増改築を調査し、歴史的な層を区別しながら保存と新しい利用を両立させる作業。新築時の姿へ単純に戻すこととは異なる。",
          "sourceIds": [
            "source-casa-vicens-museum-restoration-arquitectura-catalana",
            "source-casa-vicens-private-to-museum"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "casa-vicens-first-house",
          "title": "1. ガウディ最初の家と最初の主要依頼",
          "blocks": [
            {
              "id": "casa-vicens-first-house-context",
              "type": "paragraph",
              "text": "カサ・ビセンスは、マネル・ビセンスのためにガウディが設計した最初の家であり、若い建築家の初期を代表する主要依頼作である。原設計の建設年代は1883〜1885年。ここで重要なのは、後年の名声から逆算して「すでに完成したガウディ様式が現れた」と考えないことだ。初めて一棟の住宅と庭をまとめる仕事で、依頼主の生活、敷地、材料、職人技をどう一つの環境へ変えたかを見る。\n\n当時のグラシアは現在の密集した市街地と同じ姿ではなく、バルセロナ中心部の外側にある環境だった。夏の家には、家族が季節を過ごす室内だけでなく、庭、木陰、風、日差しとの関係が求められた。ガウディは立面を街路から眺める表面として完結させず、庭に面する開口、境界、屋内外の移行と結び付けた。建物の色彩を理解するにも、陶器の模様だけでなく、周囲の植物や光の変化を含める必要がある。\n\n最初の家という位置付けは、後年の作品に現れる要素を探すためだけに使わない方がよい。依頼主が必要とした季節住宅に対し、建物の輪郭、各室、庭、境界、職人の制作物を同じ計画へ収めたこと自体が課題だった。左右対称の古典的な住宅から外れる面の組み合わせも、奇抜さではなく敷地の使い方と部屋の向きを調整する手段として見る。ガウディの経歴を知るための記念品ではなく、そこで暮らす身体と周囲の環境を調停した実用住宅として出発点を評価する。",
              "sourceIds": [
                "source-casa-vicens-original-project",
                "source-casa-vicens-official-history",
                "source-casa-vicens-garden"
              ]
            },
            {
              "id": "casa-vicens-first-house-caution",
              "type": "callout",
              "title": "出発点を未熟さと同一視しない",
              "text": "初期作品という言葉を、後の作品より単純または未熟という順位に置き換えない。住宅と庭、工芸、環境を統合した独自の課題と成果を確認する。",
              "sourceIds": [
                "source-casa-vicens-original-project",
                "source-unesco-gaudi-works"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-vicens-original-project",
            "source-casa-vicens-official-history"
          ]
        },
        {
          "id": "casa-vicens-site-and-garden",
          "title": "2. グラシアの敷地と庭の役割",
          "blocks": [
            {
              "id": "casa-vicens-garden-system",
              "type": "paragraph",
              "text": "原設計では、家は庭から切り離された箱ではなかった。庭は眺める緑地であると同時に、室内へ光と風を届け、日差しの強い季節に外で過ごす場所をつくり、街路から住まいへ段階的に近づく余白を与えた。窓、扉、張り出し、日除け、境界の鉄は、庭を見る枠であると同時に、空気、視線、人の出入りを調整する装置になる。\n\n現在の敷地と庭は、1880年代の原設計の範囲をそのまま保持しているわけではない。土地の分割、周辺の市街化、1925年増築、後世の変更、博物館化によって関係は変化した。現地では今見える庭をすべてガウディの原設計と断定せず、資料が示す当初の広がりと現在残る空間を分けて考える。それでも、立面の植物的な色や室内外の開口から、庭が設計の前提だったことは読み取れる。\n\n庭との関係は、室内から外を眺める一方向だけではない。庭から立面を見ると、突出部や開口が日陰をつくり、建物から庭へ出ると、扉や半屋外の領域が急な明暗差を和らげる。植栽は季節と管理で変化するため、特定の植物が常に同じ位置にあったとは断定しない。それでも植物の形を幾何学化した陶器や鉄の意匠と、実際の葉や花を並べて見ることで、自然を写すことと、建築材料へ変換することの差を具体的に理解できる。",
              "sourceIds": [
                "source-casa-vicens-garden",
                "source-casa-vicens-original-project",
                "source-casa-vicens-private-to-museum"
              ]
            },
            {
              "id": "casa-vicens-garden-summary",
              "type": "summary",
              "title": "現在の庭と原設計の庭",
              "text": "現在見える植栽や境界をすべて1885年の状態とみなさない。残存部分、再構成、失われた範囲を区別し、家が庭を必要とした理由を観察する。",
              "sourceIds": [
                "source-casa-vicens-garden",
                "source-casa-vicens-private-to-museum"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-vicens-garden",
            "source-casa-vicens-original-project"
          ]
        },
        {
          "id": "casa-vicens-historicist-references",
          "title": "3. 歴史的様式を引用し、組み替える",
          "blocks": [
            {
              "id": "casa-vicens-historicist-reading",
              "type": "paragraph",
              "text": "カサ・ビセンスには、イスラーム建築、ムデハル、東方的と説明されてきた幾何学、色、装飾への参照が見られる。ただし建物全体を「ムデハル様式」と一語で分類すると、石、れんが、陶器、鉄、木を組み合わせた独自の住宅設計を見失う。歴史的な語彙をそのまま復元したのではなく、19世紀末のカタルーニャにおける工芸、依頼主の住宅、敷地条件へ合わせて再構成したものとして扱う。\n\n現地では、馬蹄形に見える輪郭、幾何学的な反復、格子状の面、濃い色の重なりなど、具体的な形を先に記録する。その後で参照先を考える。意味を一つに固定するより、どの形が開口、換気、日除け、境界、表面保護を担うかを確認した方が、引用と機能の重なりが見える。後のガウディ作品の有機的な曲線だけを基準にせず、ここでは直線、平面、反復が重要な構成原理である。\n\n歴史的参照を読む際は、19世紀の建築家が過去の様式を研究し、新しい材料生産や都市生活へ適用していた文脈も必要になる。引用は考案の反対ではなく、既知の形を別の尺度、材料、用途へ移す設計手段になり得る。カサ・ビセンスでは、装飾の密度が高い場所と平らな面、色の強い場所と素材そのものを見せる場所を比べると、すべてを同じ模様で覆っていないことが分かる。選択と省略にも設計者の判断がある。",
              "sourceIds": [
                "source-casa-vicens-arquitectura-catalana",
                "source-casa-vicens-heritage",
                "source-unesco-gaudi-works"
              ]
            },
            {
              "id": "casa-vicens-style-caution",
              "type": "callout",
              "title": "様式名は観察の終点にしない",
              "text": "ムデハル、歴史主義、東方的という語は比較の手掛かりであり、全要素の唯一の由来を保証しない。形、材料、住宅としての働きを先に確認する。",
              "sourceIds": [
                "source-casa-vicens-arquitectura-catalana",
                "source-casa-vicens-heritage"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-vicens-arquitectura-catalana",
            "source-casa-vicens-heritage"
          ]
        },
        {
          "id": "casa-vicens-ceramic-and-color",
          "title": "4. 陶器と多色性を表面の働きから読む",
          "blocks": [
            {
              "id": "casa-vicens-ceramic-system",
              "type": "paragraph",
              "text": "外壁を特徴付ける緑と白の陶器は、カサ・ビセンスを覚える強い視覚的手掛かりである。依頼主がタイル製造に関わっていた背景も、この材料が住宅の表現へ大きく使われた文脈になる。しかし、色の派手さだけで終えると、陶器が雨や汚れにさらされる外壁を覆い、細かな単位の反復で大きな面を組み立て、れんがや石との境界を明確にする役割を見落とす。\n\n多色性は単に色数が多いことではない。光の方向、距離、周囲の植物、隣接する材料によって、同じ陶器の見え方が変わる。近くでは釉薬、継ぎ目、反復が見え、離れると緑と白の帯や格子が立面の秩序になる。植物を参照した模様も、庭の自然を写した図鑑的な複製と決めつけず、現物の植物、幾何学化された模様、建築面の三者を比べる。\n\n反復する陶器は工業的に作れる同一単位と、現場での割り付けという二つの尺度をつなぐ。単位が同じでも、窓際、角、突出部では端部の納め方が変わり、模様の連続を保つための調整が必要になる。角で線がどう折れ、開口の周囲で反復がどこから再開するかを見ると、色面が壁の寸法から独立した包装ではないと分かる。陶器製造に関わる依頼主の背景は材料選択の文脈だが、個々の製造工程や作者は資料の裏付けなしに断定しない。",
              "sourceIds": [
                "source-casa-vicens-original-project",
                "source-casa-vicens-arquitectura-catalana",
                "source-casa-vicens-garden"
              ]
            },
            {
              "id": "casa-vicens-color-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "近景｜陶器の単位",
                  "text": "釉薬の反射、継ぎ目、模様の反復を見て、小さな部材が曲面ではなく幾何学的な面をつくる方法を確認する。"
                },
                {
                  "title": "中景｜材料の境界",
                  "text": "陶器、れんが、石、鉄が切り替わる位置を追い、装飾、支持、開口、境界の役割を分ける。"
                },
                {
                  "title": "遠景｜立面の秩序",
                  "text": "色面と突出部が縦横のリズムをつくり、庭と街路に対して住宅全体の輪郭をどう整えるかを見る。"
                }
              ],
              "sourceIds": [
                "source-casa-vicens-original-project",
                "source-casa-vicens-arquitectura-catalana"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-vicens-original-project",
            "source-casa-vicens-arquitectura-catalana"
          ]
        },
        {
          "id": "casa-vicens-materials-and-craft",
          "title": "5. れんが、石、鉄、木と職人技",
          "blocks": [
            {
              "id": "casa-vicens-material-system",
              "type": "paragraph",
              "text": "陶器が注目を集める一方、住宅はれんが、石、鉄、木、左官や彩色などの組み合わせで成り立つ。れんがは壁や突出部の細かな形を組み立て、石は基部や荷重を受ける場所へ安定感を与える。鉄は庭と家、街路と敷地の境界をつくりながら、完全な壁よりも光と視線を通す。木は扉、窓、天井など身体に近い位置で、開閉、触感、音、室内の尺度へ関わる。\n\n職人技を建築の外側に付けた美術品と考えず、生活上の動作を支える部材として見る。窓を開ける、扉を通る、日差しを避ける、庭を見るといった行為は、建具と装飾の寸法に結び付く。材料の選択は地域の工芸や生産とも関係し、若いガウディが一人ですべてを手作りしたという英雄物語にはしない。建築家の構想と、多分野の職人が材料を加工する技術が合わさって住宅の密度が生まれた。",
              "sourceIds": [
                "source-casa-vicens-original-project",
                "source-casa-vicens-arquitectura-catalana",
                "source-casa-vicens-heritage"
              ]
            },
            {
              "id": "casa-vicens-material-summary",
              "type": "summary",
              "title": "材料ごとに一つの働きを探す",
              "text": "色の好みを述べるだけでなく、陶器は表面、れんがは組積、石は支持、鉄は境界、木は開閉と手触りというように、現地で一つずつ働きを確かめる。",
              "sourceIds": [
                "source-casa-vicens-arquitectura-catalana"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-vicens-arquitectura-catalana",
            "source-casa-vicens-heritage"
          ]
        },
        {
          "id": "casa-vicens-light-air-and-interior",
          "title": "6. 光、風、庭を室内へ取り込む",
          "blocks": [
            {
              "id": "casa-vicens-environmental-reading",
              "type": "paragraph",
              "text": "夏の家では、室内を豪華に見せることと同じくらい、日差し、風、温度を調整することが重要である。窓や扉は庭を見る枠であると同時に、空気の入口と出口になる。張り出し、格子、日除け、半屋外的な境界は、強い光をそのまま受け入れるのでなく、影をつくりながら室内外をつなぐ。現在の周辺建物や空調環境だけから当初の風や明るさを断定せず、開口の向きと重なりから設計意図を読む。\n\n室内の天井や壁の色、植物や鳥を思わせる表現は、外の庭と室内を視覚的につなぐ。ただし、すべてを自然の直接模倣と説明しない。幾何学模様、歴史的参照、工芸技法、部屋の用途が重なっている。現地では庭側の開口から入る光が材料の反射をどう変えるか、暗い場所と明るい場所の間にどのような中間領域があるかを追う。光と色を別々の特徴にせず、時間と移動で変わる一つの経験として捉える。",
              "sourceIds": [
                "source-casa-vicens-garden",
                "source-casa-vicens-original-project",
                "source-casa-vicens-arquitectura-catalana"
              ]
            },
            {
              "id": "casa-vicens-environment-caution",
              "type": "callout",
              "title": "現在の環境と原設計を区別する",
              "text": "周囲の市街化、庭の縮小、設備更新により光と風の条件は変わった。現在の体感を1885年の状態と同一視せず、開口と境界から当初の関係を推定する。",
              "sourceIds": [
                "source-casa-vicens-garden",
                "source-casa-vicens-private-to-museum"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-vicens-garden",
            "source-casa-vicens-original-project"
          ]
        },
        {
          "id": "casa-vicens-1925-extension",
          "title": "7. 1925年増築を原設計と混同しない",
          "blocks": [
            {
              "id": "casa-vicens-extension-reading",
              "type": "paragraph",
              "text": "カサ・ビセンスは1883〜1885年の原設計だけで現在の規模になったのではない。1925年に別の建築家による増築が行われ、住宅の大きさ、庭との関係、内部構成が変化した。ガウディの名が建物全体に付いていても、現存するすべての部分を本人の同時期の設計と扱わないことが重要である。増築は価値のない付加物ではなく、住宅の利用と都市環境が変わった歴史の一層である。\n\n見分ける際は、色が鮮やかかどうかだけを基準にしない。立面の反復、開口の配置、平面の接続、材料の継ぎ目、修復による調整を総合して見る。博物館化では原設計部分、1925年部分、見学や設備のための現代的介入を区別しながら使う必要があった。年代の違いを見つける目的は間違い探しではなく、私邸が拡張され、保存され、公開施設へ変わる過程を理解することにある。",
              "sourceIds": [
                "source-casa-vicens-official-history",
                "source-casa-vicens-private-to-museum",
                "source-casa-vicens-museum-restoration-arquitectura-catalana"
              ]
            },
            {
              "id": "casa-vicens-extension-summary",
              "type": "summary",
              "title": "三つの時間を分ける",
              "text": "1883〜1885年の原設計、1925年増築、2017年の博物館化につながる修復・転用を分ける。現在の建物は三つの時間が共存する史料である。",
              "sourceIds": [
                "source-casa-vicens-private-to-museum",
                "source-casa-vicens-museum-restoration-arquitectura-catalana"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-vicens-official-history",
            "source-casa-vicens-private-to-museum"
          ]
        },
        {
          "id": "casa-vicens-restoration-and-museum",
          "title": "8. 私邸から住宅博物館へ",
          "blocks": [
            {
              "id": "casa-vicens-museum-transition",
              "type": "paragraph",
              "text": "カサ・ビセンスは長く私的な住宅として使われた後、調査と修復、用途転換を経て2017年に住宅博物館として開館した。私邸を多数の来館者が歩く施設へ変えるには、歴史的な部屋を守るだけでなく、安全、設備、案内、移動、保存環境を整える必要がある。新しい利用に必要な介入を隠して全体を1885年の姿に見せるのではなく、歴史的部分と現代的な機能をどう共存させるかが修復設計の課題になる。\n\n修復は色を鮮やかに戻す作業だけではない。塗膜や材料の調査、後世の変更の評価、劣化部分の補強、失われた要素をどこまで再現するかという判断を含む。現在見える陶器、彩色、庭、室内は、建設当初から一度も変わらなかった状態ではない。現地で新しく見える部分があっても、直ちに「復元し過ぎ」または「完全なオリジナル」と決めず、修復資料が示す根拠と介入範囲を確認する。\n\n住宅博物館として見るときは、当時の生活を完全に再現した舞台と考えず、建築そのものを展示対象にした施設として捉える。来館者が安全に移動するための経路は、家族が暮らした動線と一致しない場合がある。展示のために空けられた部屋、保護された表面、立入範囲の境界も、保存上の判断を示す。原設計を学ぶには、現在の使われ方から建設当初を直接推定せず、説明資料と建物の痕跡を照合する姿勢が必要になる。",
              "sourceIds": [
                "source-casa-vicens-private-to-museum",
                "source-casa-vicens-museum-restoration-arquitectura-catalana",
                "source-casa-vicens-heritage"
              ]
            },
            {
              "id": "casa-vicens-restoration-caution",
              "type": "callout",
              "title": "現在見える姿にも編集がある",
              "text": "公開施設の経路、照明、設備、庭の構成は保存と利用の判断を含む。見学体験を原設計そのものと同一視せず、建設・増築・修復の層を読む。",
              "sourceIds": [
                "source-casa-vicens-private-to-museum",
                "source-casa-vicens-museum-restoration-arquitectura-catalana"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-vicens-private-to-museum",
            "source-casa-vicens-museum-restoration-arquitectura-catalana"
          ]
        },
        {
          "id": "casa-vicens-history-and-heritage",
          "title": "9. 建設から世界遺産、博物館まで",
          "blocks": [
            {
              "id": "casa-vicens-history-context",
              "type": "paragraph",
              "text": "カサ・ビセンスの価値は、若いガウディの出発点という伝記上の位置だけにない。住宅と庭、材料と工芸、歴史的参照と新しい構成を結び付け、後の作品で展開される統合設計の初期段階を示す。世界遺産では単独の有名住宅ではなく、異なる用途と年代にわたるガウディ作品群の一部として評価される。比較するときは、後年の曲線に似ている部分を探すだけでなく、課題の違いと方法の継続を見る。\n\n一方、文化財化と博物館化は建物を時間から切り離さない。1925年増築、庭の縮小、家族による利用、修復、現代設備は、原設計に続く歴史である。保存の目的は変化をすべて消すことではなく、どの時期の何を重要と判断したかを説明可能にすることだ。記事では動的な営業時間、料金、公開範囲を固定せず、建築史と観察軸を扱う。",
              "sourceIds": [
                "source-casa-vicens-heritage",
                "source-casa-vicens-private-to-museum",
                "source-unesco-gaudi-works"
              ]
            },
            {
              "id": "casa-vicens-history-timeline",
              "type": "timeline",
              "entries": [
                {
                  "date": "1883",
                  "title": "原設計の工事開始",
                  "text": "マネル・ビセンスの夏の家として、住宅、庭、工芸をまとめるガウディ最初の家が具体化する。"
                },
                {
                  "date": "1883–1885",
                  "title": "原設計の建設",
                  "text": "陶器、れんが、石、鉄、木の多色的な住宅と、光、風、庭を結ぶ初期の総合設計が実現する。"
                },
                {
                  "date": "1925",
                  "title": "別建築家による増築",
                  "text": "住宅の規模と構成が拡張され、現在の建物にはガウディの原設計とは異なる時期の層が加わる。"
                },
                {
                  "date": "2005",
                  "title": "世界遺産構成資産へ",
                  "text": "拡張されたアントニ・ガウディの作品群の一つとして、異なる用途と年代を示す価値が位置付けられる。"
                },
                {
                  "date": "2017",
                  "title": "住宅博物館として開館",
                  "text": "私的住宅から公開施設へ転用され、歴史的部分の保存と来館者利用を両立する新しい段階に入る。"
                },
                {
                  "date": "現在",
                  "title": "調査と保存の継続",
                  "text": "原設計、増築、修復、博物館利用の各層を区別し、材料と空間を将来へ伝える管理が続く。"
                }
              ],
              "sourceIds": [
                "source-casa-vicens-official-history",
                "source-casa-vicens-private-to-museum",
                "source-casa-vicens-heritage",
                "source-unesco-gaudi-works"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-vicens-official-history",
            "source-casa-vicens-heritage",
            "source-unesco-gaudi-works"
          ]
        },
        {
          "id": "casa-vicens-comparison-and-route",
          "title": "10. 六作品の出発点として観察する",
          "blocks": [
            {
              "id": "casa-vicens-cross-work-context",
              "type": "paragraph",
              "text": "六作品を比べると、カサ・ビセンスは庭付きの夏の家、グエル邸は旧市街の都市邸宅、カサ・バトリョは既存集合住宅の改修、カサ・ミラは新築集合住宅、グエル公園は住宅地計画、サグラダ・ファミリアは宗教建築である。用途と敷地が違うため、曲線の多さや知名度で順位を付けない。カサ・ビセンスでは、平面的な幾何学、材料の多色性、庭との境界、光と風を住宅へ結ぶ方法を基準にする。\n\n理解のための概念的な観察順は、街路からの全景、陶器とれんがの境界、庭側の開口、主要室、原設計と1925年増築の接続、博物館化の介入である。これは施設が指定する公式順路ではなく、実際の公開範囲や移動方向を保証しない。全要素を覚えるより、色と材料、庭と環境、時間の層という三本の軸を一つずつ確認すると、後続作品との比較に使える。",
              "sourceIds": [
                "source-casa-vicens-original-project",
                "source-casa-vicens-private-to-museum",
                "source-unesco-gaudi-works"
              ]
            },
            {
              "id": "casa-vicens-work-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "Casa Vicens｜夏の家",
                  "text": "庭、幾何学面、多色の材料、歴史的参照を統合する。初期だから単純なのではなく、郊外住宅の環境が課題になる。"
                },
                {
                  "title": "Palau Güell｜都市邸宅",
                  "text": "狭い旧市街で地下から中央ホール、屋上へ機能を積層する。庭との横の関係から、縦の光と動線へ比較軸が移る。"
                },
                {
                  "title": "Casa Batlló｜改修住宅",
                  "text": "既存骨格を使いながら光井戸、換気、立面を再編する。材料の色を環境制御へ結ぶ方法を比べる。"
                },
                {
                  "title": "Casa Milà｜新築集合住宅",
                  "text": "柱構造、中庭、住戸、設備を大規模に統合する。個人の夏の家から複数世帯の都市生活へ課題が拡大する。"
                }
              ],
              "sourceIds": [
                "source-casa-vicens-original-project",
                "source-unesco-gaudi-works"
              ]
            },
            {
              "id": "casa-vicens-route-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "基本観察",
                  "text": "外観、庭との境界、主要室、増築との接続を見て、材料、環境、時間の三軸を説明する。"
                },
                {
                  "title": "短縮観察",
                  "text": "疲れている場合は外観の材料、庭側開口、主要室へ絞り、色が光と境界へどう働くかを一つ確認する。"
                },
                {
                  "title": "外観のみ",
                  "text": "街路から陶器、れんが、鉄、開口を観察する。ただし庭、室内環境、増築との接続は未確認として残す。"
                }
              ],
              "sourceIds": [
                "source-casa-vicens-original-project",
                "source-casa-vicens-garden"
              ]
            },
            {
              "id": "casa-vicens-fatigue-note",
              "type": "callout",
              "title": "到着日の疲労と短縮",
              "text": "12月26日は複数作品が同じ候補群にある。記事は採用状態、順序、時刻を変更しない。疲労時は三点観察に絞り、後続作品へ体力を残す。",
              "sourceIds": [
                "source-casa-vicens-original-project"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-vicens-original-project",
            "source-casa-vicens-garden",
            "source-unesco-gaudi-works"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "casa-vicens-onsite-route",
          "title": "カサ・ビセンスを2分で見る10項目",
          "blocks": [
            {
              "id": "casa-vicens-onsite-checklist",
              "type": "onsite-checklist",
              "items": [
                "全景：曲線だけを探さず、直線、格子、突出部がつくる立面の秩序を見る。",
                "陶器：緑と白の小片を近くで見て、遠景の色面へ変わる距離を確かめる。",
                "材料：陶器、れんが、石、鉄、木から二つ選び、役割の違いを説明する。",
                "庭：現在の庭と失われた原設計の範囲を混同せず、家との境界を見る。",
                "開口：窓、扉、格子が光、風、視線をどう通し分けるかを一つ追う。",
                "室内：天井や壁の色が、庭から入る光でどう変化するか観察する。",
                "歴史参照：ムデハルと断定する前に、幾何学、反復、開口の具体形を記録する。",
                "増築：1883〜1885年原設計と1925年部分の接続を一か所探す。",
                "修復：新しく見える表面も、調査と保存判断を経た現在の層として見る。",
                "比較：グエル邸の縦空間に対し、庭と色面の横の関係を言葉にする。"
              ],
              "sourceIds": [
                "source-casa-vicens-original-project",
                "source-casa-vicens-garden",
                "source-casa-vicens-arquitectura-catalana",
                "source-casa-vicens-private-to-museum"
              ]
            }
          ],
          "sourceIds": [
            "source-casa-vicens-original-project",
            "source-casa-vicens-garden"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1226"
      ],
      "sourceIds": [
        "source-casa-vicens-original-project",
        "source-casa-vicens-official-history",
        "source-casa-vicens-private-to-museum",
        "source-casa-vicens-garden",
        "source-casa-vicens-heritage",
        "source-casa-vicens-arquitectura-catalana",
        "source-casa-vicens-museum-restoration-arquitectura-catalana",
        "source-unesco-gaudi-works"
      ]
    },
    {
      "id": "madrid-overview",
      "cityId": "madrid",
      "placeId": "nye",
      "relatedPlaceIds": [
        "nye",
        "plaza-mayor",
        "palacio",
        "prado",
        "cibeles",
        "alcala-gate",
        "retiro",
        "reinasofia"
      ],
      "relatedScheduleItemIds": [
        "d1231-prado",
        "d1231-cibeles",
        "d1231-alcala",
        "d1231-retiro",
        "d1231-countdown",
        "d0101-sol",
        "d0101-plaza-mayor",
        "d0101-palace-exterior",
        "d0103-reinasofia"
      ],
      "scopeType": "city",
      "title": "Madrid全体像｜宮廷都市から美術の軸へ",
      "kind": "都市・総論",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "Madridは、最初から巨大な帝国首都だった都市ではありません。イスラーム期の小さな防衛拠点を起点に、1561年にFelipe IIが宮廷を置いてから政治都市として急成長しました。旧市街の細い道とPlaza MayorはHabsburg（スペイン語でAustrias）期の宮廷都市を、王宮からPaseo del Pradoへ続く広い軸・門・庭園は18世紀以降のBourbon期の都市改造を伝えます。\n\n今回の三日間は、この二つのMadridと近現代を順に読みます。12月31日はPradoで王室コレクションと国家の歴史を見て、Cibeles、Puerta de Alcalá、Retiroへ進み、Bourbon期の東側の都市軸を歩きます。1月1日はSolからPlaza Mayor、San Isidro、王宮外観へ進み、Austriasの旧市街と、その西端を置き換えたBourbon王宮を比べます。1月3日はReina Sofíaで内戦と20世紀へ時代を進めます。\n\n覚える地名は四つで十分です。Solは道が集まる中心、Plaza Mayorは旧宮廷都市の公共舞台、王宮は西、PradoとReina Sofíaは南東の美術軸です。現地では「今は旧市街の狭い道か、計画された広い軸か」を判断すると、点だった訪問先が一つの都市史になります。",
        "keyPoints": [
          "Austriasは細い道・広場・簡素な宮廷建築、Bourbonは王宮・大通り・門・庭園という違いで読む。",
          "12/31はPradoから東の都市軸、1/1はSolから西の旧市街、1/3は20世紀美術へ時代が進む。",
          "Sol、Plaza Mayor、王宮、Prado軸の四点を頭の地図に置けば迷いにくい。",
          "都市の年表を暗記するより、道幅、建物の正面、広場の用途が変わる境界を見る。"
        ],
        "whyItMatters": "Madrid滞在を名所の列として消費せず、三日間を「宮廷の成立→都市改造→内戦と現代」という一本の順序にするための記事です。Todayでは長文を読まず、各日の現地2分だけ開けば十分です。",
        "sourceIds": [
          "source-mad-learn-madrid-history",
          "source-mad-learn-madrid-austrias"
        ]
      },
      "terms": [
        {
          "id": "madrid-overview-term-austrias",
          "term": "Madrid de los Austrias",
          "definition": "16〜17世紀のHabsburg王家のMadrid。スペイン語でHabsburg家をCasa de Austriaと呼ぶためAustriasという。Plaza Mayor周辺の街路や宮廷・宗教施設に痕跡が残る。",
          "sourceIds": [
            "source-mad-learn-madrid-history",
            "source-mad-learn-madrid-austrias"
          ]
        },
        {
          "id": "madrid-overview-term-bourbon",
          "term": "Bourbon Madrid",
          "definition": "1701年以降のBourbon王家が、王宮、門、噴水、庭園、Pradoの並木道などで首都をヨーロッパの宮廷都市らしく改造した層。",
          "sourceIds": [
            "source-mad-learn-madrid-history"
          ]
        },
        {
          "id": "madrid-overview-term-court",
          "term": "宮廷都市",
          "definition": "王と行政だけでなく、貴族、聖職者、職人、作家、商人が宮廷の周囲へ集まり、都市の仕事と空間が政治権力に強く結びついた都市。",
          "sourceIds": [
            "source-mad-learn-madrid-history",
            "source-mad-learn-madrid-austrias"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "origins-and-court",
          "title": "1. 小さな拠点が首都になる",
          "blocks": [
            {
              "id": "madrid-overview-origin",
              "type": "paragraph",
              "text": "Madridの起点はManzanares川を見下ろすイスラーム期の防衛拠点Mayritにある。のちにCastile側へ入り、Felipe IIが1561年に宮廷を置くと、恒久的な首都として急速に人口が集まった。重要なのは「古代からの大都市が自然に首都になった」のではなく、王権の決定が都市を膨らませたことである。だから旧市街には壮大な統一計画より、曲がった道、壁に囲まれた修道院、簡素な邸宅が重なる。",
              "sourceIds": [
                "source-mad-learn-madrid-history",
                "source-mad-learn-madrid-austrias"
              ]
            },
            {
              "id": "madrid-overview-plaza",
              "type": "paragraph",
              "text": "Plaza Mayorは市場、祝祭、儀式、処罰など多様な公的行為を受け止める舞台だった。広場の整った長方形と周囲の狭い路地の対比を見ると、日常の街の中へ王権が「見せる場所」を挿入したことが分かる。Solは後世に交通と市民生活の中心性を増したため、二つの広場を同じ時代・同じ役割と思わないことが大切である。",
              "sourceIds": [
                "source-mad-learn-madrid-history",
                "source-mad-learn-madrid-austrias"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-madrid-history",
            "source-mad-learn-madrid-austrias"
          ]
        },
        {
          "id": "two-madrids",
          "title": "2. AustriasとBourbonを形で比べる",
          "blocks": [
            {
              "id": "madrid-overview-compare",
              "type": "comparison",
              "columns": [
                {
                  "title": "Austrias",
                  "text": "細い道、囲まれた広場、簡素な煉瓦と石、教会・修道院。宮廷へ人が集まった結果の密度を読む。"
                },
                {
                  "title": "Bourbon",
                  "text": "新王宮、長い見通し、門、噴水、庭園。首都の姿を計画的に演出する軸を読む。"
                },
                {
                  "title": "20世紀",
                  "text": "Pradoの王室中心の物語からReina Sofíaの内戦・前衛・社会へ、誰の歴史を美術館が語るかを比べる。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-madrid-history",
                "source-mad-learn-madrid-austrias"
              ]
            },
            {
              "id": "madrid-overview-prado-axis",
              "type": "paragraph",
              "text": "Paseo del Prado周辺は、東側に広がったBourbon期の芸術・科学・庭園の軸である。Pradoの建物、Cibeles、Puerta de Alcalá、Retiroを一続きに歩くと、作品だけでなく都市そのものが展示空間のように構成されている。王宮側の密な旧市街と、視線が遠くへ抜ける東側の違いを体で比べられる。",
              "sourceIds": [
                "source-mad-learn-madrid-history"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-madrid-history",
            "source-mad-learn-madrid-austrias"
          ]
        },
        {
          "id": "three-days-one-story",
          "title": "3. P06-R2の三日を一本にする",
          "blocks": [
            {
              "id": "madrid-overview-day-order",
              "type": "paragraph",
              "text": "12月31日はPradoでVelázquezとGoyaを見てから、Cibeles、Alcalá門、Retiroへ進む。王室の自己像、戦争を見た市民、都市の記念軸を同日に並べる順番である。1月1日はSolからPlaza Mayorへ入り、San Isidro、王宮外観、San Francisco el Grandeへ西へ進むため、旧市街の密度から王宮周辺の大きなスケールへ変わる。1月3日のReina SofíaではGuernicaが、王室ではなく戦争にさらされた人々を中心へ置く。三日を通すと、王が都市と絵画の中心だった時代から、都市を歩く市民と戦争にさらされた身体へ主役が移る。建物の年代を丸暗記するのでなく、誰の視点が中心かを毎日一度問い直す。",
              "sourceIds": [
                "source-mad-learn-madrid-history",
                "source-mad-learn-madrid-austrias"
              ]
            },
            {
              "id": "madrid-overview-dynamic",
              "type": "callout",
              "title": "当日情報は別に確認",
              "text": "年越しの入場経路、施設の年末年始営業、展示場所、料金、撮影・荷物規則はこの記事の恒久本文では確定しない。各PlaceのvisitInfo、Booking readiness、再確認タスクを開く。",
              "sourceIds": [
                "source-mad-learn-madrid-history",
                "source-mad-learn-madrid-austrias"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-madrid-history",
            "source-mad-learn-madrid-austrias"
          ]
        },
        {
          "id": "reading-the-capital",
          "title": "4. 首都を比較して読む技術",
          "blocks": [
            {
              "id": "madrid-overview-capital-choice",
              "type": "paragraph",
              "text": "Madridが首都として選ばれた後も、Barcelonaのような港湾商業都市、Toledoのような歴史的宗教都市とは性格が異なる。海へ直結せず、古代の巨大都市でもなかったMadridは、宮廷、行政、道路網が中心性を作った。今回BarcelonaからMadridへ移ることで、都市の代表性が商工業・地域文化から王権・国家制度へ切り替わる点を比較できる。",
              "sourceIds": [
                "source-mad-learn-madrid-history"
              ]
            },
            {
              "id": "madrid-overview-public-space",
              "type": "paragraph",
              "text": "広場は空いた土地ではなく、権力と市民が自分たちを見せる装置である。Plaza Mayorは建物で囲い、出入口を限定して儀式を集中させる。Solは道路と交通が集まり、近代以降の市民的中心性を強めた。CibelesやAlcalá門は長い視線の軸に置かれる。同じ「写真を撮る広場・門」でも、人を囲うのか、流すのか、遠くから見せるのかが違う。",
              "sourceIds": [
                "source-mad-learn-madrid-austrias"
              ]
            },
            {
              "id": "madrid-overview-city-comparison",
              "type": "comparison",
              "columns": [
                {
                  "title": "Barcelona",
                  "text": "港、産業、Eixample、Cataloniaの文化運動。街区と民間建築の競争が前面に出る。"
                },
                {
                  "title": "Madrid",
                  "text": "宮廷、行政、王室collection、国家的な広場と軸。中心性が政治制度と強く結びつく。"
                },
                {
                  "title": "Toledo",
                  "text": "岩山、宗教権威、転用された建物、El Greco。地形と長い層が移動そのものに現れる。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-madrid-history",
                "source-mad-learn-unesco-toledo"
              ]
            },
            {
              "id": "madrid-overview-memory",
              "type": "paragraph",
              "text": "都市史は建築年代の一覧ではなく、後代が古い場所をどう使い直すかにも現れる。Solは年越しの大衆行事、Plaza Mayorは飲食と観光、Prado軸は美術館群、Reina Sofíaは元病院建築を文化施設として使う。現地では「最初の用途」と「今日の使われ方」を一つずつ区別し、歴史的だから変わらないという誤解を避ける。",
              "sourceIds": [
                "source-mad-learn-madrid-history",
                "source-mad-learn-reina-collection"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-madrid-history",
            "source-mad-learn-madrid-austrias",
            "source-mad-learn-unesco-toledo",
            "source-mad-learn-reina-collection"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "madrid-today-lens",
          "title": "今日のMadridを2分で読む",
          "blocks": [
            {
              "id": "madrid-overview-onsite",
              "type": "onsite-checklist",
              "items": [
                "12/31：Pradoを出たら東へ。道の幅、噴水、門、樹木の軸がBourbonの都市演出だと確認する。",
                "12/31：Las Meninasの宮廷と《1808年5月3日》の市民を比べ、夜のSolまで「誰が主役か」を持ち歩く。",
                "1/1：SolからPlaza Mayorへ入る時、開いた交通中心から囲まれた儀式の広場へ空間が変わる瞬間を見る。",
                "1/1：王宮外観では旧Alcázarの場所をBourbon王宮が置き換えたことを思い出し、旧市街との尺度差を見る。",
                "1/3：Reina SofíaではPradoの王室コレクションから、内戦と市民の記憶へ語り手が変わる点を確認する。",
                "疲れたら個々の説明を削り、「細い旧市街／広い東の軸／20世紀」の三分類だけ残す。"
              ],
              "sourceIds": [
                "source-mad-learn-madrid-history",
                "source-mad-learn-madrid-austrias"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-madrid-history",
            "source-mad-learn-madrid-austrias"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1231",
        "d0101",
        "d0103"
      ],
      "sourceIds": [
        "source-mad-learn-madrid-history",
        "source-mad-learn-madrid-austrias"
      ]
    },
    {
      "id": "prado",
      "cityId": "madrid",
      "placeId": "prado",
      "relatedPlaceIds": [
        "prado",
        "reinasofia"
      ],
      "relatedScheduleItemIds": [
        "d1231-prado"
      ],
      "scopeType": "place",
      "title": "Prado必見作品｜2時間でスペイン絵画をつなぐ",
      "kind": "美術・ルート",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "Pradoは「有名作品を大量に集めた美術館」というより、スペイン王室が何世代にもわたって集め、注文し、宮廷に置いた作品を核とする美術館です。そのため、王の姿、カトリック信仰、帝国の視野、宮廷画家の立場、戦争を見た画家の変化が一つの流れで見えます。\n\n2時間では全部を見ません。最初の核はEl Greco《胸に手を置く騎士》、Velázquez《ラス・メニーナス》、Goya《1808年5月3日》です。細長い身体と精神性、現実の空間を揺さぶる宮廷画、英雄ではなく恐怖を描く戦争画へ、スペイン絵画の「人の見せ方」が変わります。余力があればBosch《快楽の園》とFlemish絵画を加え、王室コレクションがスペイン人画家だけではないことを確認します。\n\n公式の2時間ルートは30作品を示しますが、今回の家族ルートは理解を優先して核を絞ります。展示室番号や展示中かは変わるため覚えず、入館後の公式フロアマップで作品名を検索してください。見られなかった作品の数ではなく、三人の画家の違いを自分の言葉で一つずつ言えれば、この訪問は成功です。",
        "keyPoints": [
          "王室コレクションを核に、誰をどう見せた絵かを比較する。",
          "El Greco→Velázquez→Goyaの三点を守れば、混雑しても学習線は切れない。",
          "Las Meninasでは「誰を描いているか」だけでなく、画家・鏡・視線がつくる空間を見る。",
          "展示室番号、展示状況、入口、撮影規則は当日の公式情報で確認する。"
        ],
        "whyItMatters": "12月31日の10:00〜12:00という固定枠に収めるため、作品数ではなく比較の筋を守ります。Pradoで得たEl Grecoの形とGoyaの戦争表現は、ToledoとReina Sofíaへ持ち越します。",
        "sourceIds": [
          "source-mad-learn-prado-two-hours",
          "source-mad-learn-prado-meninas",
          "source-mad-learn-prado-third-may",
          "source-mad-learn-prado-garden",
          "source-mad-learn-prado-nobleman"
        ]
      },
      "terms": [
        {
          "id": "prado-term-royal-collection",
          "term": "王室コレクション",
          "definition": "王家が注文・購入・相続などで形成した作品群。Pradoの強みと偏りの両方をつくり、宮廷、信仰、外交、趣味を映す。",
          "sourceIds": [
            "source-mad-learn-prado-two-hours"
          ]
        },
        {
          "id": "prado-term-court-painter",
          "term": "宮廷画家",
          "definition": "王や宮廷に仕え、肖像、儀式、装飾などを担った画家。Velázquezは画家として描くだけでなく宮廷内の職務と地位も持った。",
          "sourceIds": [
            "source-mad-learn-prado-meninas"
          ]
        },
        {
          "id": "prado-term-history-painting",
          "term": "歴史画",
          "definition": "歴史・聖書・神話など重要とされた出来事を大画面で表す絵画。《1808年5月3日》は英雄的勝利より、処刑される人々の恐怖へ焦点を移す。",
          "sourceIds": [
            "source-mad-learn-prado-third-may"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "prado-route-design",
          "title": "1. 2時間ルートの設計",
          "blocks": [
            {
              "id": "prado-route-priority",
              "type": "paragraph",
              "text": "最初の15分で当日の公式地図を取り、三つの核作品の展示場所を確認する。核は《胸に手を置く騎士》《ラス・メニーナス》《1808年5月3日》。各作品で5〜8分止まり、移動と混雑を含めても前半70分で三点を終える。残りは《快楽の園》、FlemishまたはItalianの一作、Goyaの別作品へ広げる。30作品を通過する公式ルートは選択肢の母集団として使い、完走を目標にしない。",
              "sourceIds": [
                "source-mad-learn-prado-two-hours"
              ]
            },
            {
              "id": "prado-route-short",
              "type": "callout",
              "title": "混雑時の短縮",
              "text": "入館や移動で20分以上失ったら、追加作品を削る。三つの核のうち展示休止があれば、同じ画家の展示中作品へ置き換え、El Greco／Velázquez／Goyaという比較軸を残す。",
              "sourceIds": [
                "source-mad-learn-prado-two-hours",
                "source-mad-learn-prado-meninas",
                "source-mad-learn-prado-third-may",
                "source-mad-learn-prado-garden",
                "source-mad-learn-prado-nobleman"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-prado-two-hours",
            "source-mad-learn-prado-meninas",
            "source-mad-learn-prado-third-may",
            "source-mad-learn-prado-garden",
            "source-mad-learn-prado-nobleman"
          ]
        },
        {
          "id": "prado-el-greco",
          "title": "2. El Greco｜身体より精神を見せる",
          "blocks": [
            {
              "id": "prado-nobleman",
              "type": "paragraph",
              "text": "《胸に手を置く騎士》では、黒い服と暗い背景から、顔、白い襟、右手、剣の柄が浮かぶ。手は身分や誠実さを連想させるが、人物が誰かは確定しない。名前当てより、細長い顔、強い視線、限られた色で内面性をつくる方法を見る。Toledoの《オルガス伯の埋葬》では、この緊張した肖像性が大人数の地上場面へ拡大する。",
              "sourceIds": [
                "source-mad-learn-prado-nobleman"
              ]
            },
            {
              "id": "prado-greco-link",
              "type": "comparison",
              "columns": [
                {
                  "title": "Pradoの騎士",
                  "text": "一人、暗い背景、手と視線。人物の精神的な緊張へ集中する。"
                },
                {
                  "title": "Santo Tomé",
                  "text": "同時代人の肖像群、儀式、天上。地上の現実と超自然が上下で接続する。"
                },
                {
                  "title": "El Greco Museum",
                  "text": "晩年の使徒、Toledo景観、工房と後世の受容を比較し、画家像を一作品から解放する。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-prado-nobleman",
                "source-mad-learn-santo-tome",
                "source-mad-learn-greco-collection"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-prado-nobleman",
            "source-mad-learn-santo-tome",
            "source-mad-learn-greco-collection"
          ]
        },
        {
          "id": "prado-velazquez",
          "title": "3. Velázquez｜見る側まで絵に入れる",
          "blocks": [
            {
              "id": "prado-meninas-space",
              "type": "paragraph",
              "text": "《ラス・メニーナス》はInfanta Margaritaと侍女たちの集団肖像に見えるが、左に大きなキャンバスとVelázquez自身、奥に鏡、開いた扉がある。画面外にいる王夫妻を誰が見ているのか、画家は何を描いているのか、観客はどこに立たされるのかが一つに決まらない。正解探しより、手前から奥へ光が三段階に抜け、視線が画面外へ戻ってくる仕組みを見る。",
              "sourceIds": [
                "source-mad-learn-prado-meninas"
              ]
            },
            {
              "id": "prado-meninas-status",
              "type": "paragraph",
              "text": "画家が王家と同じ大画面へ自分を描くことは、絵画と画家の地位についての主張にもなる。一方、宮廷の奉仕者や小人、犬も同じ瞬間に存在する。中心人物だけでなく、誰が見て誰が見られるかを追うと、宮廷という制度そのものが見える。",
              "sourceIds": [
                "source-mad-learn-prado-meninas"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-prado-meninas"
          ]
        },
        {
          "id": "prado-goya-bosch",
          "title": "4. GoyaとBosch｜秩序が崩れる時",
          "blocks": [
            {
              "id": "prado-third-may",
              "type": "paragraph",
              "text": "《1808年5月3日》では、銃を構える兵士は背中を向けた反復する機械のように描かれ、白いシャツの男と処刑を待つ人々に顔と感情がある。中央の灯りは救済ではなく処刑を可視化する。王室に仕えたGoyaが、戦争を英雄譚ではなく無名の人間の恐怖として表した点を、のちのGuernicaと比べる。",
              "sourceIds": [
                "source-mad-learn-prado-third-may"
              ]
            },
            {
              "id": "prado-garden",
              "type": "paragraph",
              "text": "《快楽の園》は左の創造、中央の欲望に満ちた世界、右の破滅という三面を細部でつなぐ。意味を一つに解読するより、王室がSpain外のFlemish作品を高く評価し収集した事実、遠くから見た全体と近くの奇妙な細部が異なる速度で働くことを確認する。",
              "sourceIds": [
                "source-mad-learn-prado-garden"
              ]
            },
            {
              "id": "prado-dynamic",
              "type": "callout",
              "title": "展示情報は再確認",
              "text": "室番号、展示中か、入場口、料金、撮影・荷物規則、12月31日の特別営業は動的情報。PlaceとBooking readinessの確認日を優先し、本文の順番を館内の固定順路と誤認しない。",
              "sourceIds": [
                "source-mad-learn-prado-two-hours",
                "source-mad-learn-prado-meninas",
                "source-mad-learn-prado-third-may",
                "source-mad-learn-prado-garden",
                "source-mad-learn-prado-nobleman"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-prado-third-may",
            "source-mad-learn-prado-garden",
            "source-mad-learn-prado-two-hours",
            "source-mad-learn-prado-meninas",
            "source-mad-learn-prado-nobleman"
          ]
        },
        {
          "id": "prado-how-to-compare",
          "title": "5. Collectionの偏りを味方にする",
          "blocks": [
            {
              "id": "prado-collection-bias",
              "type": "paragraph",
              "text": "王室collectionを核にすることは、Pradoの質を高める一方で、何が集められ何が見えにくいかという偏りも生む。宮廷とCatholic信仰に関わる大画面、王家が好んだItalian・Flemish絵画は厚いが、社会全体の生活を均等に代表するわけではない。「Spain美術の全部」ではなく、権力ある収集者の選択が残した特別な窓として見る。",
              "sourceIds": [
                "source-mad-learn-prado-two-hours"
              ]
            },
            {
              "id": "prado-looking-distance",
              "type": "paragraph",
              "text": "大作は距離を変えると別の情報を返す。Las Meninasは遠くで人物と光の空間、近くで素早いbrushstrokeが像へ変わる境目を見る。《1808年5月3日》は遠くで二群の対立、近くで手、血、地面の死者を見る。《快楽の園》は遠くで三面の秩序、近くで無数の逸脱を見る。作品前で立つ位置を変えること自体が鑑賞方法になる。",
              "sourceIds": [
                "source-mad-learn-prado-meninas",
                "source-mad-learn-prado-third-may",
                "source-mad-learn-prado-garden"
              ]
            },
            {
              "id": "prado-goya-transition",
              "type": "paragraph",
              "text": "Goyaは宮廷画家として王族の肖像を描きながら、戦争、暴力、迷信、病、社会の不安も表した。一人の画家を「王に仕えた保守」か「近代的な批判者」のどちらかへ固定しない。宮廷制度の内側にいた経験が、権力の見せ方と破綻の両方を知る位置を与えたと考えると、Guernicaへの橋が単純な反戦画二枚の類似ではなくなる。",
              "sourceIds": [
                "source-mad-learn-prado-third-may"
              ]
            },
            {
              "id": "prado-three-painters-method",
              "type": "comparison",
              "columns": [
                {
                  "title": "El Greco",
                  "text": "身体、色、手、視線を自然な比例から離し、精神的な緊張を強める。"
                },
                {
                  "title": "Velázquez",
                  "text": "光、空間、視線、描く行為を組み、鑑賞者の立つ場所まで作品へ巻き込む。"
                },
                {
                  "title": "Goya",
                  "text": "宮廷の表面と社会の暴力をともに見て、英雄化しない歴史表現へ進む。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-prado-nobleman",
                "source-mad-learn-prado-meninas",
                "source-mad-learn-prado-third-may"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-prado-two-hours",
            "source-mad-learn-prado-meninas",
            "source-mad-learn-prado-third-may",
            "source-mad-learn-prado-garden",
            "source-mad-learn-prado-nobleman"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "prado-onsite-route",
          "title": "2時間の現地順",
          "blocks": [
            {
              "id": "prado-onsite-checklist",
              "type": "onsite-checklist",
              "items": [
                "入館後すぐ公式地図でEl Greco、Las Meninas、Goya《1808年5月3日》の展示場所を確認する。",
                "El Greco：顔、白い襟、胸の手、剣の柄の四点だけを追い、Toledoで再比較する。",
                "Las Meninas：まず遠くから全体、次に左の画家、奥の鏡と扉、最後に画面外へ返る視線を見る。",
                "Goya：兵士の背中の反復と、白いシャツの人物の顔・手を比べ、Guernicaへの問いを一つ持つ。",
                "残り時間が30分以上なら《快楽の園》を全体→中央→右の順で見る。20分未満なら追加をやめる。",
                "疲労や混雑で短縮しても三画家の比較メモを一行ずつ残し、作品数を達成基準にしない。"
              ],
              "sourceIds": [
                "source-mad-learn-prado-two-hours",
                "source-mad-learn-prado-meninas",
                "source-mad-learn-prado-third-may",
                "source-mad-learn-prado-garden",
                "source-mad-learn-prado-nobleman"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-prado-two-hours",
            "source-mad-learn-prado-meninas",
            "source-mad-learn-prado-third-may",
            "source-mad-learn-prado-garden",
            "source-mad-learn-prado-nobleman"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1231"
      ],
      "sourceIds": [
        "source-mad-learn-prado-two-hours",
        "source-mad-learn-prado-meninas",
        "source-mad-learn-prado-third-may",
        "source-mad-learn-prado-garden",
        "source-mad-learn-prado-nobleman"
      ]
    },
    {
      "id": "madrid-art",
      "cityId": "madrid",
      "placeId": "reinasofia",
      "relatedPlaceIds": [
        "reinasofia",
        "prado"
      ],
      "relatedScheduleItemIds": [
        "d0103-reinasofia"
      ],
      "scopeType": "place",
      "title": "Reina Sofíaと《ゲルニカ》｜戦争をどう見るか",
      "kind": "近現代美術",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "Reina Sofíaは、Pradoの時代より後の近現代美術を、Spainと国際的な動きの両方から見せる国立美術館です。その中心にあるPicassoの《Guernica》は、1937年4月26日のBasque地方Gernika爆撃を契機に、同年のParis万国博覧会Spain館のために制作されました。\n\n大きな白黒画面には、負傷した馬、牛、死んだ子を抱く母、倒れた兵士、灯りを差し出す人物、炎から逃れる人物が密集します。ただし、爆撃機や地名を直接描いた記録画ではありません。新聞写真を思わせる灰色、切り裂かれた身体、同時に複数方向を見せる形によって、民間人が暴力に巻き込まれる混乱を普遍的な反戦像へ変えました。\n\n最初は作品全体を一歩引いて見て、次に左から右へ人物と動物を追い、最後にDora Maarの制作写真や習作・周辺作品が見られるか確認します。象徴の「正解」を暗記するより、同じ形が制作中にどう変わり、何が画面から消えたかを見る方が深く理解できます。",
        "keyPoints": [
          "Gernika爆撃を契機に、1937年Paris万博Spain館のために短期間で制作された。",
          "白黒、破片化した身体、圧縮された空間が、ニュースと悪夢の両方の感覚をつくる。",
          "牛や馬の意味は一つに固定せず、配置、視線、傷ついた身体の関係を観察する。",
          "PradoのGoyaと比べ、戦争を誰の視点で、どの時代の造形で表すかを見る。"
        ],
        "whyItMatters": "1月3日10:00〜12:00の移動日前の枠です。《Guernica》だけを急いで撮る訪問にせず、全体、細部、制作過程、Goyaとの比較までを2時間に収めます。展示場所と周辺資料の公開状況は当日再確認します。",
        "sourceIds": [
          "source-mad-learn-reina-collection",
          "source-mad-learn-guernica",
          "source-mad-learn-rethinking-guernica"
        ]
      },
      "terms": [
        {
          "id": "madrid-art-term-grisaille",
          "term": "グリザイユ／灰色調",
          "definition": "色彩を抑え、白・黒・灰色を中心に表す方法。《Guernica》では新聞写真や記録映像を連想させ、画面全体の緊張を統一する。",
          "sourceIds": [
            "source-mad-learn-guernica"
          ]
        },
        {
          "id": "madrid-art-term-cubism",
          "term": "Cubism",
          "definition": "対象を一つの固定視点から自然に再現せず、複数の面や視点へ分解・再構成する20世紀初頭の造形。Guernicaでは身体と空間の破壊感に結びつく。",
          "sourceIds": [
            "source-mad-learn-guernica"
          ]
        },
        {
          "id": "madrid-art-term-pavilion",
          "term": "1937年Paris万博Spain館",
          "definition": "Spanish Republicが文化と政治的主張を国際社会へ示した展示館。《Guernica》はそのための大画面作品として委嘱された。",
          "sourceIds": [
            "source-mad-learn-rethinking-guernica"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "guernica-history",
          "title": "1. 事件、委嘱、制作",
          "blocks": [
            {
              "id": "guernica-bombing",
              "type": "paragraph",
              "text": "1937年4月26日、Spanish Civil Warのさなか、GernikaはFranco側を支援したGerman・Italian航空部隊の攻撃を受けた。PicassoはすでにRepublic政府からParis万博Spain館の大作を委嘱されていたが、報道で攻撃を知り、主題を戦争の惨禍へ転じた。出来事と作品を直結させつつも、画面には地図、軍服、爆撃機のような特定の説明記号がない点が重要である。",
              "sourceIds": [
                "source-mad-learn-rethinking-guernica"
              ]
            },
            {
              "id": "guernica-making",
              "type": "paragraph",
              "text": "Picassoは約一か月半で多数の素描と習作を作り、大画面を何度も変更した。Dora Maarの制作写真は完成作だけでは見えない選択を残す。握り拳や太陽のような形が変化し、人物の配置が整理される過程を見ると、Guernicaは瞬間的な叫びであると同時に、構成を厳密に組み直した作品だと分かる。",
              "sourceIds": [
                "source-mad-learn-rethinking-guernica"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-rethinking-guernica"
          ]
        },
        {
          "id": "guernica-composition",
          "title": "2. 画面を左・中央・右で読む",
          "blocks": [
            {
              "id": "guernica-left",
              "type": "paragraph",
              "text": "左では牛の下で母が死んだ子を抱き、上を向いて叫ぶ。古い宗教画のPietàを思わせるが、救済する人物はいない。中央では傷ついた馬が大きな三角形をつくり、倒れた兵士の壊れた剣と小さな花が地面にある。右では灯りを差し出す頭部、燃える建物から落ちる人物、腕を上げる人物が、出口のない圧縮感をつくる。",
              "sourceIds": [
                "source-mad-learn-guernica"
              ]
            },
            {
              "id": "guernica-light",
              "type": "paragraph",
              "text": "画面上部には電球のような目と、手に持たれた灯火が併存する。光が真実、技術、爆撃、希望のどれを意味するかは一つに決められない。大切なのは、光が場面を救うのではなく、傷ついた身体をさらに露出させること。象徴辞典のように個別の意味を当てるより、形同士の緊張を読む。",
              "sourceIds": [
                "source-mad-learn-guernica"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-guernica"
          ]
        },
        {
          "id": "guernica-comparison",
          "title": "3. GoyaからGuernicaへ",
          "blocks": [
            {
              "id": "guernica-goya",
              "type": "comparison",
              "columns": [
                {
                  "title": "Goya《1808年5月3日》",
                  "text": "銃殺の直前という具体的な時間、兵士と犠牲者の対立、灯りに照らされた顔を描く。"
                },
                {
                  "title": "Picasso《Guernica》",
                  "text": "爆撃後の混乱を一つの室内のように圧縮し、敵の姿を描かず、断片化した身体で暴力を表す。"
                },
                {
                  "title": "共通する問い",
                  "text": "勝者の記念ではなく、力を持たない人の恐怖を中心に置く。鑑賞者は安全な外側にいられるかを問う。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-prado-third-may",
                "source-mad-learn-guernica"
              ]
            },
            {
              "id": "guernica-journey",
              "type": "paragraph",
              "text": "作品は1937年の公開後に各地を巡回し、長くNew YorkのMoMAに保管された。民主的自由の回復後にSpainへ戻すというPicassoの意向に沿い1981年に帰国し、1992年からReina Sofíaに置かれた。作品の移動史も、Spainが内戦と独裁の記憶をどう扱うかという政治史の一部である。",
              "sourceIds": [
                "source-mad-learn-rethinking-guernica",
                "source-mad-learn-reina-collection"
              ]
            },
            {
              "id": "guernica-dynamic",
              "type": "callout",
              "title": "展示場所は固定しない",
              "text": "Reina Sofíaはコレクション再編を進めている。室番号、展示中か、習作・写真の範囲、入場口、料金、撮影・荷物規則は当日の公式コレクション情報とPlaceで確認する。",
              "sourceIds": [
                "source-mad-learn-reina-collection",
                "source-mad-learn-guernica",
                "source-mad-learn-rethinking-guernica"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-prado-third-may",
            "source-mad-learn-guernica",
            "source-mad-learn-rethinking-guernica",
            "source-mad-learn-reina-collection"
          ]
        },
        {
          "id": "guernica-interpretation",
          "title": "4. 有名な象徴を一つに固定しない",
          "blocks": [
            {
              "id": "guernica-bull-horse",
              "type": "paragraph",
              "text": "牛をFranco、Spain、残酷さ、画家自身などへ、馬を民衆や苦痛へ対応させる解釈は多数ある。Picasso自身の発言も、全要素へ一対一の答えを与えない。鑑賞では「牛＝何」と早く閉じず、牛が左端で母子を覆う位置、馬が中央で大きく傷つく位置、二者の視線が交わらないことをまず事実として記述する。",
              "sourceIds": [
                "source-mad-learn-guernica",
                "source-mad-learn-rethinking-guernica"
              ]
            },
            {
              "id": "guernica-scale",
              "type": "paragraph",
              "text": "作品は約3.5m×7.8mの壁画級で、bookや画面で見る複製と身体的経験が異なる。等身を超える顔と手が同じ浅い空間へ押し込まれ、観客は安全な遠景から事件を眺めにくい。灰色調は色を失った悲しみだけでなく、当時事件を伝えた新聞写真、film、印刷された政治的imageの拡散とも結びつく。",
              "sourceIds": [
                "source-mad-learn-guernica"
              ]
            },
            {
              "id": "guernica-afterlife",
              "type": "paragraph",
              "text": "Guernicaは制作後にEuropeとAmericasを巡回し、反戦・反独裁のsymbolとして異なる運動に使われた。作品の普遍性は強さだが、Basqueの具体的な爆撃、Spanish Republicの委嘱、亡命と返還の条件を忘れると、どの戦争にも貼れる曖昧なiconへ薄まる。具体史と普遍的訴えの両方を保つ。",
              "sourceIds": [
                "source-mad-learn-rethinking-guernica"
              ]
            },
            {
              "id": "guernica-document-symbol",
              "type": "comparison",
              "columns": [
                {
                  "title": "documentとして",
                  "text": "制作日、委嘱、爆撃、習作、Dora Maarの写真、巡回と返還は史料で追える。"
                },
                {
                  "title": "imageとして",
                  "text": "断片化、白黒、圧縮空間、反復する叫びが、特定事件を越える感情をつくる。"
                },
                {
                  "title": "鑑賞者の仕事",
                  "text": "事実を象徴解釈へ混ぜず、見えた形→根拠ある歴史→自分の解釈の順で話す。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-guernica",
                "source-mad-learn-rethinking-guernica"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-guernica",
            "source-mad-learn-rethinking-guernica"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "guernica-onsite",
          "title": "《Guernica》を2分で見る順番",
          "blocks": [
            {
              "id": "guernica-onsite-checklist",
              "type": "onsite-checklist",
              "items": [
                "最初の20秒は離れて全体を見る。横長画面の中で中央の馬がつくる大きな三角形を探す。",
                "左へ移り、牛、母、子の三つの顔と視線の向きを追う。象徴の意味はまだ決めない。",
                "中央で馬の傷、倒れた兵士の手、壊れた剣、小さな花を順に見る。",
                "右で灯火を持つ人物、燃える建物、上げられた腕を追い、出口のなさを体で感じる。",
                "最後に白黒の濃淡、新聞のような線、電球と手持ち灯の二つの光を比べる。",
                "混雑時は全体→中央の馬→左の母子→Goyaとの一言比較だけを守り、長時間正面を占有しない。"
              ],
              "sourceIds": [
                "source-mad-learn-reina-collection",
                "source-mad-learn-guernica",
                "source-mad-learn-rethinking-guernica"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-reina-collection",
            "source-mad-learn-guernica",
            "source-mad-learn-rethinking-guernica"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d0103"
      ],
      "sourceIds": [
        "source-mad-learn-reina-collection",
        "source-mad-learn-guernica",
        "source-mad-learn-rethinking-guernica"
      ]
    },
    {
      "id": "madrid-austrias",
      "cityId": "madrid",
      "placeId": "plaza-mayor",
      "relatedPlaceIds": [
        "nye",
        "plaza-mayor",
        "san-isidro",
        "palacio",
        "san-francisco"
      ],
      "relatedScheduleItemIds": [
        "d0101-sol",
        "d0101-san-gines",
        "d0101-plaza-mayor",
        "d0101-san-isidro",
        "d0101-palace-exterior",
        "d0101-san-francisco"
      ],
      "scopeType": "area",
      "title": "Madrid de los Austrias｜元日に外観で読む旧都",
      "kind": "街歩き・歴史",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "Madrid de los Austriasは、Habsburg王家がSpainを治めた16〜17世紀の宮廷都市の中心です。豪華な一枚岩の計画都市ではなく、古い街路へ宮廷、邸宅、修道院、教会、市場が密集しました。Plaza Mayorだけが大きく整った公共舞台として開き、その周囲へ細い道が戻ります。\n\n元日の旅程は内部入場を前提にしません。SolからSan Ginésを経てPlaza Mayorへ入り、San Isidro、王宮外観、San Francisco el Grandeへ進みます。建物が閉まっていても、道幅、広場の出入口、煉瓦と石の壁、宗教施設の多さ、旧市街と王宮の尺度差は外から読めます。\n\n王宮はHabsburg期のAlcázarが火災で失われた跡にBourbon王家が建てたものです。つまりAustrias街歩きの終点に、次の王朝の巨大な王宮が現れる。この不連続が元日ルートの主役です。 見学できた建物の数ではなく、三つの空間の違いを言葉にできることを成功基準にします。",
        "keyPoints": [
          "AustriasはHabsburg王家のSpanish名で、地名のAustria旅行ではない。",
          "Solは現代の中心、Plaza Mayorは囲まれた宮廷都市の公共舞台として役割を分ける。",
          "元日は内部入場でなくても、道幅、素材、広場の出入口、建物の尺度で歴史を読める。",
          "旧Alcázarの跡に建つBourbon王宮で、王朝と都市デザインの切替を見る。"
        ],
        "whyItMatters": "1月1日は休館・特別営業が多くても成立する外観中心ルートです。「閉まっているから何も分からない」を避け、前夜のSolと同じ場所を昼に読み直します。",
        "sourceIds": [
          "source-mad-learn-madrid-history",
          "source-mad-learn-madrid-austrias"
        ]
      },
      "terms": [
        {
          "id": "austrias-term-plaza",
          "term": "Plaza Mayor",
          "definition": "建物で囲まれ、アーチ状の出入口を通って入る大広場。市場、祝祭、王室儀礼など都市の公的舞台となった。",
          "sourceIds": [
            "source-mad-learn-madrid-austrias"
          ]
        },
        {
          "id": "austrias-term-alcazar",
          "term": "Real Alcázar",
          "definition": "現在の王宮の場所にあった王の城・宮殿。Habsburg期の政治中心だったが1734年の火災後、Bourbon王宮へ置き換えられた。",
          "sourceIds": [
            "source-mad-learn-madrid-history"
          ]
        },
        {
          "id": "austrias-term-austerity",
          "term": "宮廷の簡素さ",
          "definition": "Habsburg Madridで見られる煉瓦、石、比較的抑えた外観。権力が弱かったという意味ではなく、宮廷文化と宗教性の表し方の違い。",
          "sourceIds": [
            "source-mad-learn-madrid-history",
            "source-mad-learn-madrid-austrias"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "austrias-sol-plaza",
          "title": "1. SolからPlaza Mayorへ",
          "blocks": [
            {
              "id": "austrias-sol",
              "type": "paragraph",
              "text": "Puerta del Solは旧市街の門に由来する名を持つが、現在見える大きな交通・市民空間の姿は後世の改造を重ねている。前夜の群衆と年越しの記憶を、元日の比較的静かな路面と比べる。そこからCalle Mayor側へ入り、道が狭まり、San Ginés周辺を経てPlaza Mayorのアーチをくぐると、開放的な中心から囲まれた舞台へ変わる。",
              "sourceIds": [
                "source-mad-learn-madrid-history",
                "source-mad-learn-madrid-austrias"
              ]
            },
            {
              "id": "austrias-plaza",
              "type": "paragraph",
              "text": "Plaza Mayorでは中央だけでなく四辺を見回し、均質な窓、連続する建物、地上階のアーケード、外へ抜けるアーチを確認する。広場が独立した記念物ではなく、雑多な街を一時的に秩序化する装置だと分かる。短い昼食やcalamari sandwichの役割も、宮廷の儀式空間が今日の日常と観光へ変わった層として読める。",
              "sourceIds": [
                "source-mad-learn-madrid-austrias"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-madrid-history",
            "source-mad-learn-madrid-austrias"
          ]
        },
        {
          "id": "austrias-churches",
          "title": "2. San Isidroと宗教都市",
          "blocks": [
            {
              "id": "austrias-san-isidro",
              "type": "paragraph",
              "text": "San IsidroはMadridの守護聖人と結びつく教会で、旧市街に宗教施設が高密度で置かれたことを示す。元日は内部に入れると決めつけず、外観では入口、塔、街路との近さを見る。Plaza Mayorの公的な広場と、信仰・教育・救済を担った宗教施設が徒歩圏に重なることが宮廷都市の生活を形づくった。",
              "sourceIds": [
                "source-mad-learn-madrid-history",
                "source-mad-learn-madrid-austrias"
              ]
            },
            {
              "id": "austrias-san-francisco",
              "type": "paragraph",
              "text": "San Francisco el Grandeは大きな円蓋で西側の都市景観に現れる。現在の建物は主に18世紀で、Austriasの同時代建築として分類しない。ルートに異なる時代が混ざることを弱点ではなく、旧市街が王朝交代後も更新された証拠として扱う。",
              "sourceIds": [
                "source-mad-learn-madrid-history"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-madrid-history",
            "source-mad-learn-madrid-austrias"
          ]
        },
        {
          "id": "austrias-palace",
          "title": "3. 王宮で時代が切り替わる",
          "blocks": [
            {
              "id": "austrias-palace-exterior",
              "type": "paragraph",
              "text": "王宮前へ出ると、細い道と囲まれた広場から、独立した巨大な宮殿と開けた前庭へ尺度が変わる。HabsburgのAlcázarがあった政治中心をBourbon王家が新しい外観で再構成した場所であり、「Austrias地区にあるからAustrias建築」とは限らない。外壁の長い水平線、規則正しい窓、周囲の見通しを旧市街と比べる。",
              "sourceIds": [
                "source-mad-learn-madrid-history"
              ]
            },
            {
              "id": "austrias-dynamic",
              "type": "callout",
              "title": "元日の実用情報",
              "text": "内部公開、礼拝、特別行事、警備動線は年によって変わる。P06-R2は外観で成立するため、開いていないことを失敗としない。入場を追加せず、当日のPlaceと公式情報だけ確認する。",
              "sourceIds": [
                "source-mad-learn-madrid-history",
                "source-mad-learn-madrid-austrias"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-madrid-history",
            "source-mad-learn-madrid-austrias"
          ]
        },
        {
          "id": "austrias-city-life",
          "title": "4. 王だけでなく都市生活を見る",
          "blocks": [
            {
              "id": "austrias-housing-court",
              "type": "paragraph",
              "text": "宮廷がMadridへ定着すると、王だけでなく官僚、貴族、聖職者、奉公人、職人、商人、劇作家が集まった。急増する人口に対して街路は十分に計画されず、住居と仕事が密集した。簡素な外観の背後に中庭を持つ住宅や、宗教施設の長い壁が街の見通しを切る。外観walkでは名建築だけでなく、都市の詰まり方を見る。",
              "sourceIds": [
                "source-mad-learn-madrid-history"
              ]
            },
            {
              "id": "austrias-plaza-power",
              "type": "paragraph",
              "text": "Plaza Mayorで行われた市場、祝祭、王室行事、公開処罰は、同じ空間が日常と権力の劇場を切り替えたことを示す。今日のcaféや観光客だけを見て過去の用途を美化せず、囲まれた四辺から多くの人が出来事を「見る」構造に注目する。Las Meninasの視線の政治と、広場で見る／見られる関係を緩やかに比較できる。",
              "sourceIds": [
                "source-mad-learn-madrid-austrias"
              ]
            },
            {
              "id": "austrias-food-place",
              "type": "paragraph",
              "text": "Bocadillo de calamaresやchocolate con churrosはAustrias街歩きの歴史展示物ではないが、旧中心で現在のMadrid生活を体験する短い役割を持つ。料理を食べるためにwalkを崩すのではなく、SolからPlaza Mayorへの線上で座る・軽く食べる・混雑なら代替する。食の意味と旅程の実行可能性を分けない。",
              "sourceIds": [
                "source-mad-learn-madrid-food"
              ]
            },
            {
              "id": "austrias-space-sequence",
              "type": "comparison",
              "columns": [
                {
                  "title": "Sol",
                  "text": "道路が集まり人が流れる。前夜と元日昼で同じ場所の使われ方が変わる。"
                },
                {
                  "title": "Plaza Mayor",
                  "text": "建物で囲い、出入口を絞る。人を一つの舞台へ集める。"
                },
                {
                  "title": "Royal Palace",
                  "text": "旧市街の粒度を超える巨大な独立建築。王朝交代後の首都像を示す。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-madrid-history",
                "source-mad-learn-madrid-austrias"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-madrid-history",
            "source-mad-learn-madrid-austrias",
            "source-mad-learn-madrid-food"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "austrias-onsite",
          "title": "元日外観ルートを2分で読む",
          "blocks": [
            {
              "id": "austrias-onsite-checklist",
              "type": "onsite-checklist",
              "items": [
                "Solで前夜と昼の人の流れを比べ、「現代の中心」から出発する。",
                "San Ginés周辺からPlaza Mayorへ向かい、道が狭くなりアーチをくぐる変化を見る。",
                "Plaza Mayor中央で四辺の反復する窓と出入口を一周し、囲まれた公共舞台だと確認する。",
                "San Isidroでは内部可否より、教会が商店と住居の近くに密着する旧市街の密度を見る。",
                "王宮前で立ち止まり、旧市街の小さな単位から巨大で規則的なBourbon王宮への切替を見る。",
                "疲労時はSan Francisco外観をdropRankどおり短縮し、Sol→Plaza Mayor→王宮の三点を守る。"
              ],
              "sourceIds": [
                "source-mad-learn-madrid-history",
                "source-mad-learn-madrid-austrias"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-madrid-history",
            "source-mad-learn-madrid-austrias"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d0101"
      ],
      "sourceIds": [
        "source-mad-learn-madrid-history",
        "source-mad-learn-madrid-austrias"
      ]
    },
    {
      "id": "toledo",
      "cityId": "toledo",
      "placeId": "toledo-cathedral",
      "relatedPlaceIds": [
        "toledo-cathedral",
        "santotome",
        "greco"
      ],
      "relatedScheduleItemIds": [
        "d0102-cathedral",
        "d0102-santotome",
        "d0102-greco",
        "d0102-lunch",
        "d0102-rest"
      ],
      "scopeType": "city",
      "title": "Toledo全体像｜三文化と丘の都市を歩く",
      "kind": "都市・総論",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "ToledoはMadridの南約70km、Tagus川が三方を囲む急な岩山の上に築かれた都市です。Roman、Visigoth王国、Islamic支配、Christian王国、Charles V期の宮廷という二千年以上の層が狭い旧市街に残り、1986年にUNESCO世界遺産となりました。\n\n「三文化の街」はChristian、Jewish、Muslimの伝統が建物・言語・知識に交差したことを示す便利な入口ですが、常に平等で平和な共存だったという意味ではありません。征服、改宗、法的差別、追放もありました。それでも、mosqueがchurchへ転用され、Jewish地区にMudéjar職人の技法が残り、翻訳活動が知識を移した複雑な接触を街で読めます。\n\n今回の三つの核はCathedral、Santo Tomé、El Greco Museumです。地形が四つ目の主役で、駅から旧市街へ上り、石畳と坂を移動します。大聖堂90分、昼食、Santo Tomé30分、El Greco Museum60分の順を守り、疲れたら最後の美術館の周辺展示を短縮して休憩を守ります。",
        "keyPoints": [
          "Tagus川に囲まれた岩山の防御地形が、坂・眺望・迷いやすい道を生んだ。",
          "三文化は交流の成果と支配・断絶の両方を含む。単純な共存美談にしない。",
          "Cathedral＝宗教権力、Santo Tomé＝一作品の現地性、El Greco Museum＝画家と後世の受容をつなぐ。",
          "疲労対策は情報ではなく旅程の一部。坂で時間を失っても休憩枠を削らない。"
        ],
        "whyItMatters": "1月2日の一日を「建物を三つ回る」から、地形、宗教都市、El Grecoという三本の線へ変えます。駅からの坂と15:15の休憩を含めて成立するガイドです。",
        "sourceIds": [
          "source-mad-learn-unesco-toledo",
          "source-mad-learn-toledo-city"
        ]
      },
      "terms": [
        {
          "id": "toledo-term-three-cultures",
          "term": "三文化",
          "definition": "Christian、Jewish、Muslimの共同体と文化的接触を指す呼称。交流と混成を示す一方、政治的支配や排除を消してはいけない。",
          "sourceIds": [
            "source-mad-learn-unesco-toledo",
            "source-mad-learn-toledo-city"
          ]
        },
        {
          "id": "toledo-term-mudejar",
          "term": "Mudéjar",
          "definition": "Christian支配下でMuslim系職人・技法が関わった建築・装飾の伝統。煉瓦、馬蹄形アーチ、木天井などに文化の混成が現れる。",
          "sourceIds": [
            "source-mad-learn-unesco-toledo"
          ]
        },
        {
          "id": "toledo-term-primacy",
          "term": "首座／Primate",
          "definition": "Toledo大司教がSpain Catholic Churchで歴史的に持つ首位性を表す称号。都市の宗教的権威を理解する鍵。",
          "sourceIds": [
            "source-mad-learn-cathedral"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "toledo-terrain",
          "title": "1. 地形が都市をつくる",
          "blocks": [
            {
              "id": "toledo-rock-river",
              "type": "paragraph",
              "text": "旧市街はTagus川が大きく曲がる岩山の上にある。川と崖は防御に有利で、Roman期からIslamic fortress、Christian王国まで戦略的価値を持った。一方、現代の訪問者には駅からの高低差、石畳、細い道、視界の切れ目として現れる。地図上の距離が短くても所要時間が伸びるため、平面距離だけで次の場所を判断しない。",
              "sourceIds": [
                "source-mad-learn-unesco-toledo"
              ]
            },
            {
              "id": "toledo-skyline",
              "type": "paragraph",
              "text": "坂を上る途中や開けた場所では、Cathedralの塔とAlcázarの大きな量塊が旧市街の目印になる。Cathedralは宗教権威、Alcázarは軍事・政治権力の層を示す。迷ったら細街路の名前を全部追うより、この二つの高い核と川の方向で位置を回復する。",
              "sourceIds": [
                "source-mad-learn-unesco-toledo",
                "source-mad-learn-toledo-city"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-unesco-toledo",
            "source-mad-learn-toledo-city"
          ]
        },
        {
          "id": "toledo-history",
          "title": "2. 二千年と三文化",
          "blocks": [
            {
              "id": "toledo-layers",
              "type": "paragraph",
              "text": "ToledoはRoman municipium、Visigoth王国の首都、Córdoba emirateのfortress、Christian諸王国の前線と中心、Charles V期の宮廷という役割を重ねた。1561年にMadridが首都となると政治的中心性は弱まったが、宗教・芸術・工芸の蓄積は残った。街の古さを一つの中世風景としてまとめず、転用と上書きを探す。",
              "sourceIds": [
                "source-mad-learn-unesco-toledo"
              ]
            },
            {
              "id": "toledo-coexistence",
              "type": "paragraph",
              "text": "中世Toledoでは異なる言語と学問の接触が翻訳活動を支え、建築にはIslamic、Jewish、Christianの技法が混ざった。しかし共同体の権利は時代と支配者により異なり、暴力、強制改宗、1492年のJewish追放など断絶もあった。「仲良く共存した街」という一文で終えず、誰が建て、誰が使い、用途がどう変わったかを問う。",
              "sourceIds": [
                "source-mad-learn-unesco-toledo",
                "source-mad-learn-toledo-city"
              ]
            },
            {
              "id": "toledo-three-nuclei",
              "type": "comparison",
              "columns": [
                {
                  "title": "Cathedral",
                  "text": "Christian再征服後の首座大聖堂。Gothic構造に後代のRenaissance・Baroqueが重なり、宗教権威を可視化する。"
                },
                {
                  "title": "Santo Tomé",
                  "text": "El Grecoの大作が依頼された教区の場に残る。絵と共同体、墓、伝説が切り離されていない。"
                },
                {
                  "title": "El Greco Museum",
                  "text": "20世紀に形成された画家像と、晩年作品・工房・Toledo景観を比較する。本人の家の完全保存ではない。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-cathedral",
                "source-mad-learn-santo-tome",
                "source-mad-learn-greco-collection"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-unesco-toledo",
            "source-mad-learn-toledo-city",
            "source-mad-learn-cathedral",
            "source-mad-learn-santo-tome",
            "source-mad-learn-greco-collection"
          ]
        },
        {
          "id": "toledo-p06-route",
          "title": "3. P06-R2の順番と疲労",
          "blocks": [
            {
              "id": "toledo-route",
              "type": "paragraph",
              "text": "午前は最大の必須施設Cathedralへ90分を確保し、体力と集中力があるうちに建築・主祭壇・聖具室・Transparenteを見る。昼食で座って回復し、Santo Toméでは一作品へ30分集中する。その後El Greco Museumで比較を完結し、15:15からの休憩を守る。大きい施設→食事→一作品→比較美術館という認知負荷の順番でもある。",
              "sourceIds": [
                "source-mad-learn-unesco-toledo",
                "source-mad-learn-toledo-city"
              ]
            },
            {
              "id": "toledo-dynamic",
              "type": "callout",
              "title": "変わる情報を混ぜない",
              "text": "列車、駅からの移動、各施設の年始営業、礼拝、展示、料金、撮影・荷物規則は再確認対象。本文の歴史説明を理由に、P06-R2へ新しい立寄りや延長を追加しない。",
              "sourceIds": [
                "source-mad-learn-unesco-toledo",
                "source-mad-learn-toledo-city"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-unesco-toledo",
            "source-mad-learn-toledo-city"
          ]
        },
        {
          "id": "toledo-cultural-contact",
          "title": "4. 文化の接触を建物から読む",
          "blocks": [
            {
              "id": "toledo-translators",
              "type": "paragraph",
              "text": "Toledoの翻訳活動ではArabicやHebrewで伝わった哲学・科学の知識がLatinやCastilianへ移され、Europeの学問へ影響した。ただし「一つの学校建物に三宗教の学者が平等に集まった」という単純な像ではない。時代ごとに異なるpatronage、翻訳者、口頭の仲介が重なった知的活動として理解する。",
              "sourceIds": [
                "source-mad-learn-toledo-city"
              ]
            },
            {
              "id": "toledo-mudejar-reading",
              "type": "paragraph",
              "text": "Mudéjarは建物をChristian／Muslimのどちらかへ分類できないことを示す。Christian支配下のchurchやsynagogueに、Islamic由来のbrick、木天井、幾何学、horse-shoe archが用いられる。形の混成を平和の証拠と即断せず、技術を持つ職人が支配の変化を越えて働いたこと、用途と権力は別に問う。",
              "sourceIds": [
                "source-mad-learn-unesco-toledo"
              ]
            },
            {
              "id": "toledo-el-greco-city",
              "type": "paragraph",
              "text": "Crete出身でVeniceとRomeを経たEl GrecoがToledoで長く活動したことも、都市を閉じた伝統の箱ではなく、人と様式が移動する場として見せる。Italianで学んだ色と構図、Byzantine iconの記憶、Toledoの宗教委嘱が一つの様式へ混ざる。三文化の中世だけで都市の交流史を終わらせない。",
              "sourceIds": [
                "source-mad-learn-greco-collection"
              ]
            },
            {
              "id": "toledo-power-map",
              "type": "comparison",
              "columns": [
                {
                  "title": "地形",
                  "text": "川と岩山が守りと坂をつくり、都市の境界を身体で感じさせる。"
                },
                {
                  "title": "宗教",
                  "text": "Cathedral、church、synagogue、mosqueの建物と転用が共同体の力関係を残す。"
                },
                {
                  "title": "芸術",
                  "text": "El Grecoの委嘱と後世のMuseumが、都市が自分のimageを作り直す過程を示す。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-unesco-toledo",
                "source-mad-learn-greco-rooms"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-toledo-city",
            "source-mad-learn-unesco-toledo",
            "source-mad-learn-greco-collection",
            "source-mad-learn-greco-rooms"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "toledo-onsite",
          "title": "丘の都市を2分で攻略",
          "blocks": [
            {
              "id": "toledo-onsite-checklist",
              "type": "onsite-checklist",
              "items": [
                "駅から旧市街へ向かう時、Tagus川、崖、城壁、高いCathedral塔の位置を一度確認する。",
                "坂では会話できる速さを守り、到着時に息が上がっていたら入館前に短く座る。",
                "Cathedralでは宗教権威、Santo Toméでは絵と教区、El Greco Museumでは画家像という役割を分ける。",
                "三文化の痕跡を見たら「平和な共存」と即断せず、建てた人、使った人、用途変更を一つ問う。",
                "Santo ToméからMuseumへは坂と石畳を時間に入れ、地図上の直線距離で急がない。",
                "疲労時はEl Greco Museumの庭・周辺展示を短縮し、15:15の座る休憩を削らない。"
              ],
              "sourceIds": [
                "source-mad-learn-unesco-toledo",
                "source-mad-learn-toledo-city"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-unesco-toledo",
            "source-mad-learn-toledo-city"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d0102"
      ],
      "sourceIds": [
        "source-mad-learn-unesco-toledo",
        "source-mad-learn-toledo-city"
      ]
    },
    {
      "id": "toledo-cathedral",
      "cityId": "toledo",
      "placeId": "toledo-cathedral",
      "relatedPlaceIds": [
        "toledo-cathedral",
        "santotome",
        "greco"
      ],
      "relatedScheduleItemIds": [
        "d0102-cathedral"
      ],
      "scopeType": "place",
      "title": "Toledo大聖堂｜石・祭壇・光を90分で読む",
      "kind": "宗教建築・美術",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "Toledo大聖堂は、Christian王国がToledoを取り戻した後、旧mosqueのあった場所に13世紀から築かれたGothic大聖堂です。Spainの首座大聖堂として、礼拝の場、聖職者の組織、王権と大司教の記憶、美術コレクションが一つに重なります。\n\n90分では、まず身廊の高さと柱がつくる方向を感じ、主祭壇の大きなretablo、聖歌隊席、聖具室の絵画、最後にBaroqueのTransparenteを見ます。Gothicの骨組みへRenaissanceとBaroqueが加わったため、全部が同じ時代・同じ美意識ではありません。\n\nTransparenteは後陣の壁と天井へ開口を設け、上からの自然光を大理石、bronze、stuccoの彫刻へ落とす総合演出です。装飾の多さだけでなく、光がどこから入り、祭壇の裏側という場所をどう劇場化するかを見ます。 宗教施設への敬意を保ちながら、石の骨組みと後代の光の演出を同じ建物で比べることが目標です。",
        "keyPoints": [
          "13世紀からのGothic構造に、後代のRenaissance・Baroqueが重なる。",
          "身廊→主祭壇→聖歌隊席→聖具室→Transparenteの順で役割を変えて見る。",
          "聖具室の絵は独立美術館ではなく、典礼用品とCathedralの権威の中に置かれる。",
          "生きた宗教施設なので、礼拝と訪問規則を優先し、静かに観察する。"
        ],
        "whyItMatters": "1月2日10:30〜12:00の90分枠へ収まる主役です。細部を全部見るのでなく、建築、典礼、絵画、光の四役を一つずつ選びます。 午後のSanto ToméとEl Greco Museumへ、画家と宗教都市の比較を持ち越します。",
        "sourceIds": [
          "source-mad-learn-cathedral",
          "source-mad-learn-cathedral-transparente"
        ]
      },
      "terms": [
        {
          "id": "cathedral-term-nave",
          "term": "身廊",
          "definition": "入口から祭壇へ続く主要空間。柱列とvaultが身体の進む方向と視線の高さをつくる。",
          "sourceIds": [
            "source-mad-learn-cathedral"
          ]
        },
        {
          "id": "cathedral-term-retablo",
          "term": "Retablo／祭壇衝立",
          "definition": "祭壇の背後で聖書物語や聖人像を階層的に構成する大規模な装飾。主祭壇では遠くから全体構成を先に見る。",
          "sourceIds": [
            "source-mad-learn-cathedral"
          ]
        },
        {
          "id": "cathedral-term-transparente",
          "term": "Transparente",
          "definition": "Narciso Toméが18世紀に完成したBaroque総合造形。天井側から自然光を導き、建築、彫刻、光で聖体を強調する。",
          "sourceIds": [
            "source-mad-learn-cathedral-transparente"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "cathedral-structure",
          "title": "1. Gothicの骨組み",
          "blocks": [
            {
              "id": "cathedral-gothic",
              "type": "paragraph",
              "text": "建設は1226年に始まり、長い期間をかけて進んだ。高い身廊、尖頭arch、rib vault、柱列は、石の重さを分けて下へ流し、壁に窓を開くGothicの仕組みである。入口直後は細部へ急がず、中央で柱の反復、天井のrib、奥の主祭壇へ集まる視線を一度に見る。",
              "sourceIds": [
                "source-mad-learn-cathedral"
              ]
            },
            {
              "id": "cathedral-living",
              "type": "paragraph",
              "text": "Cathedralは世界遺産の観光資源である前に、現在も礼拝が行われる宗教施設である。chapel、choir、sacristyは単なる装飾室ではなく、祈り、聖歌、典礼準備という機能を持つ。鑑賞者の動線が礼拝や立入制限へ従うことも建物の理解に含める。",
              "sourceIds": [
                "source-mad-learn-cathedral"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-cathedral"
          ]
        },
        {
          "id": "cathedral-altarpiece-choir",
          "title": "2. 主祭壇と聖歌隊席",
          "blocks": [
            {
              "id": "cathedral-main-chapel",
              "type": "paragraph",
              "text": "主祭壇のretabloは、金色の細部や個々の人物へ近づく前に、垂直に積み上がる区画と中心軸を見る。聖書の場面と聖人像が階層化され、礼拝者の視線を祭壇へ集中させる。大きさは富の展示だけでなく、教えを視覚化する媒体でもあった。",
              "sourceIds": [
                "source-mad-learn-cathedral"
              ]
            },
            {
              "id": "cathedral-choir",
              "type": "paragraph",
              "text": "聖歌隊席は聖職者が典礼で歌い、祈る場所で、身廊に独立した空間をつくる。木彫の座席、上段と下段、囲われた配置を見て、一般会衆の空間と聖職者の共同体が建築内で区別されることを理解する。",
              "sourceIds": [
                "source-mad-learn-cathedral"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-cathedral"
          ]
        },
        {
          "id": "cathedral-sacristy-light",
          "title": "3. 聖具室の美術とTransparente",
          "blocks": [
            {
              "id": "cathedral-sacristy",
              "type": "paragraph",
              "text": "聖具室と画廊にはEl Grecoを含む絵画があるが、Pradoのような年代別美術館ではない。祭服や典礼用品を準備・保管する場に美術が置かれ、Cathedralの宗教的・制度的な記憶を支える。El Greco作品では、翌施設で比べる細長い身体、色、上向きの視線を一つ選ぶ。",
              "sourceIds": [
                "source-mad-learn-cathedral"
              ]
            },
            {
              "id": "cathedral-transparente",
              "type": "paragraph",
              "text": "Transparenteは主祭壇の背後にあり、Narciso Toméが1732年に完成した。vaultへ開けた窓から光を落とし、marble、bronze、stuccoの雲・天使・聖人を連続させる。Gothicの暗い石の包囲へBaroqueが光の穴を開けるため、同じ建物内の時代差が最も劇的に見える。",
              "sourceIds": [
                "source-mad-learn-cathedral-transparente"
              ]
            },
            {
              "id": "cathedral-dynamic",
              "type": "callout",
              "title": "礼拝と公開範囲を優先",
              "text": "文化訪問時間、特別礼拝、入口、料金、服装・撮影・荷物規則、各室の公開は動的情報。Placeと公式訪問情報を当日確認し、閉鎖区画へ代替動線を強要しない。",
              "sourceIds": [
                "source-mad-learn-cathedral-visit"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-cathedral",
            "source-mad-learn-cathedral-transparente",
            "source-mad-learn-cathedral-visit"
          ]
        },
        {
          "id": "cathedral-layers",
          "title": "4. 一つの様式でまとめない",
          "blocks": [
            {
              "id": "cathedral-building-time",
              "type": "paragraph",
              "text": "大聖堂は一人のarchitectが短期間で完成させた作品ではない。Gothicの基本構造を長い建設期間で整え、その後もchapel、tomb、choir、painting、Baroque装飾が加わった。建築全体を「Gothic」と呼ぶのは骨組みを理解するには有効だが、目に入る全要素の年代と目的が同じという意味ではない。",
              "sourceIds": [
                "source-mad-learn-cathedral"
              ]
            },
            {
              "id": "cathedral-images",
              "type": "paragraph",
              "text": "主祭壇、choir、chapel、sacristyのimageは、文字を読めない人へ物語を教える単純な挿絵だけではない。典礼の場所を区切り、寄進者や聖職者を記憶し、Toledo教会の権威を示す。誰から見える位置か、礼拝のどの場面で使われるかを考えると、作品がmuseumの白い壁と違う働きを持つ。",
              "sourceIds": [
                "source-mad-learn-cathedral"
              ]
            },
            {
              "id": "cathedral-light-comparison",
              "type": "paragraph",
              "text": "Gothicの窓から入る拡散した光と、Transparenteが上方の開口から狙って落とす光を比べる。前者は巨大な内部全体の高さと方向を支え、後者は祭壇背後の一点を劇的に変える。光は装飾を見やすくするだけでなく、時間と場所を特別なものとして経験させる建築材料である。",
              "sourceIds": [
                "source-mad-learn-cathedral-transparente"
              ]
            },
            {
              "id": "cathedral-four-roles",
              "type": "comparison",
              "columns": [
                {
                  "title": "構造",
                  "text": "柱、arch、rib vaultが石の重さと広い内部を成立させる。"
                },
                {
                  "title": "典礼",
                  "text": "altar、choir、chapelが祈りと聖職者・会衆の位置を組織する。"
                },
                {
                  "title": "記憶",
                  "text": "tomb、寄進、絵画、宝物が人物・共同体・制度を残す。"
                },
                {
                  "title": "演出",
                  "text": "retabloの階層とTransparenteの光が視線と感情を導く。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-cathedral",
                "source-mad-learn-cathedral-transparente"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-cathedral",
            "source-mad-learn-cathedral-transparente"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "cathedral-onsite",
          "title": "90分の見る順番",
          "blocks": [
            {
              "id": "cathedral-onsite-checklist",
              "type": "onsite-checklist",
              "items": [
                "0〜10分：中央身廊で柱列、rib vault、主祭壇への長い軸を遠くから見る。",
                "10〜30分：主祭壇retabloを全体→中心→上下の物語の順で見て、細部は一場面に絞る。",
                "30〜45分：聖歌隊席の囲いと座席を見て、誰がどこで典礼へ参加する空間か考える。",
                "45〜65分：聖具室でEl Greco一作を選び、Pradoの人物像と色・身体・視線を比べる。",
                "65〜80分：Transparenteを下→中央の窓→天井の光源と追い、光が石を動かす仕組みを見る。",
                "80〜90分：出口へ戻り、建築・祭壇・絵画・光の四つから一番残ったものを一言共有する。"
              ],
              "sourceIds": [
                "source-mad-learn-cathedral",
                "source-mad-learn-cathedral-transparente"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-cathedral",
            "source-mad-learn-cathedral-transparente"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d0102"
      ],
      "sourceIds": [
        "source-mad-learn-cathedral",
        "source-mad-learn-cathedral-transparente"
      ]
    },
    {
      "id": "santo-tome-orgaz",
      "cityId": "toledo",
      "placeId": "santotome",
      "relatedPlaceIds": [
        "santotome",
        "prado",
        "greco"
      ],
      "relatedScheduleItemIds": [
        "d0102-santotome"
      ],
      "scopeType": "place",
      "title": "Santo Toméと《オルガス伯の埋葬》",
      "kind": "美術・宗教",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "《オルガス伯の埋葬》はEl Grecoが1586〜1588年ごろ、Santo Tomé教会のために描いた大作です。伝説では、教会へ貢献したGonzalo Ruiz de Toledoの埋葬にSaint StephenとSaint Augustineが天から現れ、自ら遺体を墓へ納めました。絵は今も依頼された教区と墓の近くにあり、場所から切り離された名画ではありません。\n\n画面下は黒い服の同時代人が密集する地上の葬儀で、二人の聖人が華やかな祭服で遺体を支えます。上は雲が渦巻く天上で、細長い魂が天使に導かれ、Christへ向かいます。下の水平で重い世界と、上の伸びて回転する世界が、中央の天使と白い布でつながります。\n\n30分では、最初に上下二層、次に遺体を支える四本の手、黒い肖像群の視線、中央を上る魂、最後にEl Grecoらしい細長い天上人物を見ます。Pradoの一人の騎士が、ここではToledo社会の集団肖像へ広がったと比べてください。",
        "keyPoints": [
          "地上の葬儀と天上の救済が上下二層で分かれ、中央の天使が接続する。",
          "聖人の豪華な祭服と、同時代人の黒い服の色・質感を比べる。",
          "肖像群はToledoの現在、伝説は14世紀、制作は16世紀という三つの時間を重ねる。",
          "現地の墓・教区との関係まで含めて一作品を見る。"
        ],
        "whyItMatters": "1月2日13:30〜14:00の短い枠です。作品数ゼロの「一作品だけ」の場所だからこそ、上下、手、視線、魂という順番を決めて密度を上げます。",
        "sourceIds": [
          "source-mad-learn-santo-tome"
        ]
      },
      "terms": [
        {
          "id": "orgaz-term-register",
          "term": "上下二層／register",
          "definition": "物語を画面の上下へ分ける構成。下が地上の葬儀、上が天上の救済で、異なる身体表現と空間が対比される。",
          "sourceIds": [
            "source-mad-learn-santo-tome"
          ]
        },
        {
          "id": "orgaz-term-donor",
          "term": "寄進者",
          "definition": "宗教施設へ財産や事業を提供した人。Gonzalo Ruiz de Toledoの教会への貢献と、その義務をめぐる記憶が制作背景にある。",
          "sourceIds": [
            "source-mad-learn-santo-tome"
          ]
        },
        {
          "id": "orgaz-term-mannerism",
          "term": "Mannerism",
          "definition": "調和の取れた自然な身体より、引き伸ばし、複雑な姿勢、非現実的な色や空間を用いる16世紀の造形傾向。El Grecoの天上場面を読む手掛かり。",
          "sourceIds": [
            "source-mad-learn-greco-collection"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "orgaz-place-story",
          "title": "1. 絵がこの場所にある理由",
          "blocks": [
            {
              "id": "orgaz-commission",
              "type": "paragraph",
              "text": "Santo Toméの司祭は、教会へ寄進したGonzalo Ruiz de Toledoをめぐる伝説と寄進義務を記憶させるためEl Grecoへ絵を依頼した。過去の奇跡を描きながら、制作当時のToledoの著名人を葬儀の参列者として置く。宗教的救済、地域共同体、寄進の記憶が一画面に結びつく。",
              "sourceIds": [
                "source-mad-learn-santo-tome"
              ]
            },
            {
              "id": "orgaz-site",
              "type": "paragraph",
              "text": "作品は美術館へ移されず、教区の場所に残る。墓、礼拝、作品の位置関係を意識すると、絵が鑑賞のためだけでなく記憶と信仰を働かせる装置だったと分かる。混雑で正面に長く立てなくても、場所全体を一度見回す。",
              "sourceIds": [
                "source-mad-learn-santo-tome"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-santo-tome"
          ]
        },
        {
          "id": "orgaz-two-worlds",
          "title": "2. 地上と天上の造形",
          "blocks": [
            {
              "id": "orgaz-earth",
              "type": "paragraph",
              "text": "下半分はほぼ水平に並ぶ黒い服の男性たちが壁のような背景をつくる。中央の遺体は金色の甲冑で重く、Saint StephenとSaint Augustineの祭服は精密な刺繍で輝く。手の接触が遺体の重さを現実へ留めるため、四本の手と金属の反射を追う。",
              "sourceIds": [
                "source-mad-learn-santo-tome"
              ]
            },
            {
              "id": "orgaz-heaven",
              "type": "paragraph",
              "text": "上半分では雲、天使、聖人の身体が曲線と斜線で旋回し、空間が測れない。小さな魂が白い布に包まれて狭い通路を上り、頂点のChristへ向かう。地上の写実的な肖像と、天上の引き伸ばされた身体の差が、二世界の距離を表す。",
              "sourceIds": [
                "source-mad-learn-santo-tome"
              ]
            },
            {
              "id": "orgaz-compare",
              "type": "comparison",
              "columns": [
                {
                  "title": "Pradoの騎士",
                  "text": "一人の顔、胸の手、黒い服で精神的緊張をつくる。"
                },
                {
                  "title": "Orgazの地上",
                  "text": "同種の黒い服と個別の顔が集団になり、Toledo社会そのものを目撃者へする。"
                },
                {
                  "title": "Museumの使徒",
                  "text": "晩年の連作では背景を減らし、顔、手、色、身体の反復と差へ集中できる。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-prado-nobleman",
                "source-mad-learn-santo-tome",
                "source-mad-learn-greco-collection"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-santo-tome",
            "source-mad-learn-prado-nobleman",
            "source-mad-learn-greco-collection"
          ]
        },
        {
          "id": "orgaz-looking",
          "title": "3. 解釈と観察を分ける",
          "blocks": [
            {
              "id": "orgaz-fact-interpretation",
              "type": "paragraph",
              "text": "画面の上下、人物、祭服、制作場所は観察・史料で確かめられる。一方、牛や馬のような固定された象徴辞典はここにもなく、個々の視線や身振りの意味には解釈が入る。「誰か」を全員当てるより、見ている人物と見ていない人物、画面外の鑑賞者へ向く視線を区別する。",
              "sourceIds": [
                "source-mad-learn-santo-tome"
              ]
            },
            {
              "id": "orgaz-dynamic",
              "type": "callout",
              "title": "現地規則は再確認",
              "text": "公開時間、料金、写真、入場方法、礼拝・混雑時の立位置は動的情報。作品理解の本文へ固定せず、Santo Tomé公式とPlaceを訪問前に確認する。",
              "sourceIds": [
                "source-mad-learn-santo-tome"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-santo-tome"
          ]
        },
        {
          "id": "orgaz-painting-language",
          "title": "4. 色・手・空間が意味を作る",
          "blocks": [
            {
              "id": "orgaz-color",
              "type": "paragraph",
              "text": "地上の黒い服は人物を一つの社会集団へまとめる一方、顔と白い襟は一人ずつ異なる。中央の金、赤、白い祭服が奇跡を視覚的に強調し、天上では黄、青、赤、緑が雲の灰色から浮く。色は自然な照明の再現より、地上の重さと天上の運動を分け、二世界の接続を導く。",
              "sourceIds": [
                "source-mad-learn-santo-tome"
              ]
            },
            {
              "id": "orgaz-hands",
              "type": "paragraph",
              "text": "El Grecoの手は細長く、複雑なgestureを作る。遺体を支える手は重さを受け、司祭の手は儀式を進め、少年の指は場面を示し、天上の人物の手は祈りや驚きを表す。同じ身体部位が物理的な行為、物語の案内、内面表現という異なる役割を担うため、顔だけを見るより構図が分かる。",
              "sourceIds": [
                "source-mad-learn-santo-tome"
              ]
            },
            {
              "id": "orgaz-space",
              "type": "paragraph",
              "text": "地上の人物群には床や奥行きの手掛かりが少なく、黒い肩の列が画面前面へ押し出される。天上にも安定した地面はなく、雲と身体が狭い通路を作る。自然な一つの空間を再現せず、二つの現実を上下へ圧縮することが、奇跡を歴史画のように説明する以上の緊張を生む。",
              "sourceIds": [
                "source-mad-learn-santo-tome"
              ]
            },
            {
              "id": "orgaz-viewing-claims",
              "type": "comparison",
              "columns": [
                {
                  "title": "見て確かめる事実",
                  "text": "上下二層、服の色、手の接触、視線、中央の天使、作品が教区にある位置。"
                },
                {
                  "title": "史料で確かめる事実",
                  "text": "依頼、寄進、伝説、制作年代、Santo ToméとEl Grecoの関係。"
                },
                {
                  "title": "解釈として話すこと",
                  "text": "特定人物の感情、色やgestureの象徴、鑑賞者へ向く視線の意味。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-santo-tome"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-santo-tome"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "orgaz-onsite",
          "title": "30分を2分で設計",
          "blocks": [
            {
              "id": "orgaz-onsite-checklist",
              "type": "onsite-checklist",
              "items": [
                "入口側から一度全体を見て、下の黒い水平帯と上の明るい渦の境界を探す。",
                "中央下で遺体、二聖人、支える四本の手を順に見て、重さがどう表されるか確認する。",
                "黒い参列者の顔を左から三人だけ追い、誰の視線が絵の外へ向くかを見る。",
                "中央の天使と白い布に包まれた魂を下から上へ追い、Christまでの細い通路を見る。",
                "Pradoの騎士の胸の手と、ここで繰り返される手を一つ比べる。",
                "混雑時は正面中央を占有せず、左右へ移動して「上下・手・魂」の三点だけ守る。"
              ],
              "sourceIds": [
                "source-mad-learn-santo-tome"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-santo-tome"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d0102"
      ],
      "sourceIds": [
        "source-mad-learn-santo-tome",
        "source-mad-learn-prado-nobleman",
        "source-mad-learn-greco-collection"
      ]
    },
    {
      "id": "el-greco-museum",
      "cityId": "toledo",
      "placeId": "greco",
      "relatedPlaceIds": [
        "greco",
        "santotome",
        "prado"
      ],
      "relatedScheduleItemIds": [
        "d0102-greco"
      ],
      "scopeType": "place",
      "title": "El Greco Museum｜三つの場所の比較を完結する",
      "kind": "美術・人物",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "El Greco Museumは、El Greco本人の家がそのまま残った施設ではありません。20世紀初頭、Marquis of Vega-Inclánが近隣の歴史的建物を整備し、再評価が進んでいた画家と当時のToledoを体験させるmuseumとして形成しました。建物の雰囲気は資料ですが、生活の完全再現と誤認しないことが大切です。\n\ncollectionの核はEl Greco晩年のApostolate連作、《View and Plan of Toledo》《The Tears of Saint Peter》、肖像、San Bernardinoのaltarpieceなどです。さらに工房や追随者、創設者の収集もあり、「天才一人」から制作環境と後世の評価へ視野を広げます。\n\nここは比較の終点です。Pradoでは一人の黒い肖像、Santo Toméでは集団と天上、Museumでは連作の反復、Toledoの景観、晩年の色を比べます。60分のうち最初に使徒の顔と手、次にToledo景観、最後に工房・後世の受容を見ます。",
        "keyPoints": [
          "本人の家の完全保存ではなく、20世紀のEl Greco再評価を背景に形成されたmuseum。",
          "Apostolateは同じ形式を繰り返すため、顔、手、色、属性の差を比較しやすい。",
          "Prado→Santo Tomé→Museumで、一人の肖像→大作→連作・景観という学習線を完結する。",
          "疲労時は創設者・周辺展示を短縮し、ApostolateとToledo景観を守る。"
        ],
        "whyItMatters": "1月2日14:15〜15:15の一時間です。午後の疲れを前提に、作品数ではなく比較の二核を守り、15:15の休憩へ遅れません。 三地点で見た違いを家族で一言ずつ共有して学習線を閉じます。",
        "sourceIds": [
          "source-mad-learn-greco-collection",
          "source-mad-learn-greco-rooms"
        ]
      },
      "terms": [
        {
          "id": "greco-museum-term-apostolate",
          "term": "Apostolate",
          "definition": "Christと十二使徒を一人ずつ描く連作。Museumは13点の重要な一組を持ち、同じ形式の中の差を比較できる。",
          "sourceIds": [
            "source-mad-learn-greco-collection"
          ]
        },
        {
          "id": "greco-museum-term-workshop",
          "term": "工房",
          "definition": "master一人だけでなく助手・弟子が制作を支え、構図や様式を反復・展開する制作組織。連作や追随者を理解する鍵。",
          "sourceIds": [
            "source-mad-learn-greco-rooms"
          ]
        },
        {
          "id": "greco-museum-term-revival",
          "term": "再評価／revival",
          "definition": "一度評価が低下・限定されたartistが、後代の研究者・収集家・artistにより新しい価値を与えられること。Museum成立自体がEl Greco再評価の歴史を示す。",
          "sourceIds": [
            "source-mad-learn-greco-rooms"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "greco-museum-not-house",
          "title": "1. 「El Grecoの家」を疑う",
          "blocks": [
            {
              "id": "greco-museum-founder",
              "type": "paragraph",
              "text": "Museumは20世紀初頭のMarquis of Vega-Inclánの活動から成立し、1911年以降El Grecoの再評価を広げた。場所は画家が暮らしたとされるJewish quarterの雰囲気に近いが、現在の建物を16世紀の本人宅が完全に保存されたものとして見るべきではない。再構成された環境が、後世の人々の「El GrecoらしいToledo」像をどう作ったかを見る。",
              "sourceIds": [
                "source-mad-learn-greco-rooms"
              ]
            },
            {
              "id": "greco-museum-context",
              "type": "paragraph",
              "text": "展示は画家の生涯、Toledoでの活動、晩年作品、工房とfollowers、創設者のmuseum構想を分けている。建物、家具、庭も作品と同じ事実レベルではなく、鑑賞の文脈を演出する要素である。説明表示でoriginal、deposit、copy、followerの区別を確認する。",
              "sourceIds": [
                "source-mad-learn-greco-rooms"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-greco-rooms"
          ]
        },
        {
          "id": "greco-museum-works",
          "title": "2. ApostolateとToledo景観",
          "blocks": [
            {
              "id": "greco-museum-apostles",
              "type": "paragraph",
              "text": "Apostolateでは同じような半身像が続くため、一点ずつ名前を暗記するより、手、顔の角度、衣の二色、属性を比べる。細長い指は非現実的な癖ではなく、祈り、驚き、指示など内面の動きを可視化する。暗い背景から色面と白い光が人物を浮かせる方法も共通する。",
              "sourceIds": [
                "source-mad-learn-greco-collection",
                "source-mad-learn-greco-rooms"
              ]
            },
            {
              "id": "greco-museum-view-plan",
              "type": "paragraph",
              "text": "《View and Plan of Toledo》では都市の景観と、若者が示す地図が同居する。地形を正確に写すだけでなく、重要な建物や都市の自己像を構成する。午前に歩いた坂、Cathedral塔、Tagus川の位置を思い出し、現実の身体経験と描かれた都市を比べる。",
              "sourceIds": [
                "source-mad-learn-greco-collection"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-greco-collection",
            "source-mad-learn-greco-rooms"
          ]
        },
        {
          "id": "greco-museum-line",
          "title": "3. 三地点の比較を閉じる",
          "blocks": [
            {
              "id": "greco-museum-three-sites",
              "type": "comparison",
              "columns": [
                {
                  "title": "Prado",
                  "text": "若〜成熟期の個人肖像を王室collectionの文脈で見る。黒、顔、胸の手が精神性を凝縮する。"
                },
                {
                  "title": "Santo Tomé",
                  "text": "教区に残る大作で、Toledoの同時代人、葬儀、天上を一画面へ統合する。"
                },
                {
                  "title": "Museum",
                  "text": "晩年連作、都市景観、工房、20世紀の再評価を通じ、一人の天才像を複数の関係へ開く。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-prado-nobleman",
                "source-mad-learn-santo-tome",
                "source-mad-learn-greco-collection",
                "source-mad-learn-greco-rooms"
              ]
            },
            {
              "id": "greco-museum-fatigue",
              "type": "paragraph",
              "text": "午後はすでにCathedralとSanto Toméを見ている。核はApostolateの二〜三点比較とToledo景観の一作。残り時間でSan Bernardino altarpiece、followers、創設者展示、庭へ広げる。15:15の休憩は次の移動を守るbufferなので、網羅のために延長しない。",
              "sourceIds": [
                "source-mad-learn-greco-rooms"
              ]
            },
            {
              "id": "greco-museum-dynamic",
              "type": "callout",
              "title": "当日の展示を確認",
              "text": "個別作品の展示中か、貸出、室配置、開館、料金、写真・荷物規則は動的情報。公式collectionとPlaceで確認し、非展示なら同じ比較役割の作品へ置き換える。",
              "sourceIds": [
                "source-mad-learn-greco-collection"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-prado-nobleman",
            "source-mad-learn-santo-tome",
            "source-mad-learn-greco-collection",
            "source-mad-learn-greco-rooms"
          ]
        },
        {
          "id": "greco-journey-and-legacy",
          "title": "4. CreteからToledo、そして20世紀へ",
          "blocks": [
            {
              "id": "greco-journey",
              "type": "paragraph",
              "text": "Domenikos TheotokopoulosはCreteでicon paintingの伝統に育ち、VeniceとRomeでItalian Renaissanceの色、身体、構図を学び、1570年代後半にSpainへ移った。Toledoで宗教画、altarpiece、肖像の委嘱を得て独自の様式を深めた。細長い身体をSpain固有の奇妙さとせず、東Mediterranean、Italy、Toledoを移動した経験の混成として見る。",
              "sourceIds": [
                "source-mad-learn-greco-collection"
              ]
            },
            {
              "id": "greco-workshop",
              "type": "paragraph",
              "text": "大型altarpieceや連作は工房の協働なしに作れない。息子Jorge Manuelやassistants、followersが構図を反復し、注文へ対応した。labelのattributionがEl Greco、workshop、followerで分かれるのは質の単純な順位ではなく、誰がどの程度関与したかを研究が更新しているためである。seriesの反復は制作の仕組みを見せる。",
              "sourceIds": [
                "source-mad-learn-greco-rooms"
              ]
            },
            {
              "id": "greco-modern-revival",
              "type": "paragraph",
              "text": "El Grecoは死後ずっと同じ評価を受けたのではない。19世紀末から20世紀初頭、collectors、historians、modern artistsが引き伸ばされた身体や非自然的な色を新しい目で評価した。Vega-InclánのMuseumもその再評価を制度化する。展示建物と庭の「画家らしい」雰囲気は、20世紀が作ったEl Greco像として批判的に楽しむ。",
              "sourceIds": [
                "source-mad-learn-greco-rooms"
              ]
            },
            {
              "id": "greco-three-contexts",
              "type": "comparison",
              "columns": [
                {
                  "title": "王室collection",
                  "text": "Pradoでは他のSpanish・European mastersとの美術史比較に置かれる。"
                },
                {
                  "title": "original site",
                  "text": "Santo Toméでは依頼、墓、教区、共同体と作品が今も同じ場所で結びつく。"
                },
                {
                  "title": "monographic museum",
                  "text": "作品、工房、都市景観、創設者、再評価をまとめ、画家像を構成する仕組み自体が見える。"
                }
              ],
              "sourceIds": [
                "source-mad-learn-prado-nobleman",
                "source-mad-learn-santo-tome",
                "source-mad-learn-greco-collection",
                "source-mad-learn-greco-rooms"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-greco-collection",
            "source-mad-learn-greco-rooms",
            "source-mad-learn-prado-nobleman",
            "source-mad-learn-santo-tome"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "greco-museum-onsite",
          "title": "60分を2分で選ぶ",
          "blocks": [
            {
              "id": "greco-museum-onsite-checklist",
              "type": "onsite-checklist",
              "items": [
                "入口説明で、ここが本人宅の完全保存ではなく20世紀に形成されたMuseumだと確認する。",
                "Apostolateから二人を選び、顔の角度、左右の手、衣の二色を同じ順で比べる。",
                "《View and Plan of Toledo》または展示中のToledo景観で、午前に歩いた坂とCathedralの位置を探す。",
                "Pradoの胸の手、Orgazの支える手、Apostolateの語る手を一つの比較線にする。",
                "labelでEl Greco本人、workshop、follower、copyを区別し、全部を本人作とまとめない。",
                "疲労時は周辺展示と庭を短縮し、Apostolate＋Toledo景観を終えたら15:15の休憩へ移る。"
              ],
              "sourceIds": [
                "source-mad-learn-greco-collection",
                "source-mad-learn-greco-rooms"
              ]
            }
          ],
          "sourceIds": [
            "source-mad-learn-greco-collection",
            "source-mad-learn-greco-rooms"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d0102"
      ],
      "sourceIds": [
        "source-mad-learn-greco-collection",
        "source-mad-learn-greco-rooms",
        "source-mad-learn-prado-nobleman",
        "source-mad-learn-santo-tome"
      ]
    },
    {
      "id": "barcelona-overview",
      "cityId": "barcelona",
      "placeId": "placa-rei",
      "relatedPlaceIds": [
        "placa-rei",
        "placa-reial",
        "cathedral",
        "boqueria",
        "mila",
        "batllo",
        "sagrada",
        "sant-pau",
        "parkguell",
        "guell-palace",
        "casa-vicens",
        "palau-musica",
        "montserrat"
      ],
      "relatedScheduleItemIds": [
        "d1226-airport-city",
        "d1226-mila",
        "d1226-batllo",
        "d1227-sagrada",
        "d1227-sant-pau-exterior",
        "d1226-parkguell",
        "d1228-palau-musica",
        "d1228-born-walk",
        "d1229-basilica",
        "d1230-boqueria",
        "d1230-sants-transfer"
      ],
      "scopeType": "city",
      "title": "Barcelona全体像｜旧市街・Eixample・港・山をつなぐ",
      "kind": "都市・総論",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "BarcelonaはGaudí作品だけでできた都市ではありません。地中海の港に近いRoman・中世都市が現在の旧市街の核となり、その外側へ19世紀のEixampleが格子状に広がり、工業化で力を持った市民社会がModernismeの建築を生みました。市場、広場、教会、音楽堂、集合住宅は別々の名所ではなく、交易と都市生活の異なる舞台です。\n\n今回の順番はこの都市の層を体で読みます。12月26日はEixampleで広い街路と角を切った街区を見て、Casa MilàとCasa Batllóを集合住宅として比べます。27日はSagrada FamíliaとSant Pauを通して、宗教建築と病院という異なる公共性を見ます。28日はPark Güellから旧市街のPalau de la MúsicaとEl Bornへ降り、計画都市と密な路地を比べます。29日はMontserratへ出て、都市の外にある山と信仰を理解します。30日はBoqueriaと大聖堂を経てSantsへ向かいます。\n\nCatalunyaは独自の言語・制度・文化的記憶を持つ地域で、Barcelonaはその最大都市です。旗や言語を単純な観光記号にせず、建物を誰が支え、広場や市場を誰が使ってきたかを見ると、Gaudíも都市全体の一部として位置づきます。",
        "keyPoints": [
          "旧市街はRoman・中世の層が重なる密な街、Eixampleは19世紀の拡張計画による格子状の街。",
          "Modernismeは一人の天才だけでなく、工業化、市民団体、職人、建築家がつくった都市文化。",
          "市場・港・広場は生活と交易、音楽堂・病院・住宅は市民社会の異なる役割を表す。",
          "疲れたら名所の細部を削り、「今は旧市街／Eixample／山のどこか」だけ判断すれば全体像は残る。"
        ],
        "whyItMatters": "P06-R2の五日間を名所の列ではなく、旧市街、計画都市、公共文化、港の食、山の信仰を往復する一本の学習線に変えるための入口です。親子三人が次の場所の意味を共有し、疲労時にも都市理解の核だけを残せます。",
        "sourceIds": [
          "source-bcn-learn-city-history",
          "source-bcn-learn-city-museum",
          "source-bcn-learn-eixample"
        ]
      },
      "terms": [
        {
          "id": "bcn-overview-term-ciutat-vella",
          "term": "Ciutat Vella",
          "definition": "Roman・中世都市を核に、Gothic Quarter、El Born、Raval、Barcelonetaなど性格の違う地区を含む旧市街。",
          "sourceIds": [
            "source-bcn-learn-city-history",
            "source-bcn-learn-city-museum",
            "source-bcn-learn-eixample"
          ]
        },
        {
          "id": "bcn-overview-term-eixample",
          "term": "Eixample",
          "definition": "19世紀に旧市壁の外へ計画された拡張市街。格子状の道路と角を切った街区が特徴で、Modernisme住宅が集中する。",
          "sourceIds": [
            "source-bcn-learn-city-history",
            "source-bcn-learn-city-museum",
            "source-bcn-learn-eixample"
          ]
        },
        {
          "id": "bcn-overview-term-modernisme",
          "term": "Modernisme",
          "definition": "19世紀末から20世紀初頭に、建築、装飾、音楽などを横断したCatalunyaの文化運動。欧州Art Nouveauと関係するが地域の材料・歴史・市民文化を強く表した。",
          "sourceIds": [
            "source-bcn-learn-city-history",
            "source-bcn-learn-city-museum",
            "source-bcn-learn-eixample"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "bcn-overview-layers",
          "title": "1. 旧市街から計画都市へ",
          "blocks": [
            {
              "id": "bcn-overview-roman-medieval",
              "type": "paragraph",
              "text": "Barcelonaの古代核Barcinoは城壁に囲まれた小さなRoman都市だった。その上に中世の宗教・政治・商業空間が重なり、現在のGothic Quarter周辺には曲がる路地、短い見通し、教会や広場が残る。ただし目に入る「Gothic」な姿のすべてが中世そのままではない。後代の修復や都市演出も含まれるため、年代を一色に塗らず、石積み、開口部、接合部の違いを見る。",
              "sourceIds": [
                "source-bcn-learn-city-history",
                "source-bcn-learn-city-museum",
                "source-bcn-learn-eixample"
              ]
            },
            {
              "id": "bcn-overview-eixample",
              "type": "paragraph",
              "text": "19世紀に城壁が撤去されると、Ildefons Cerdàの計画を基礎にEixampleが広がった。規則的な街区、幅のある道路、面取りされた角は、光、風、移動を都市規模で扱う考えを示す。実際の建設では地価や階級差も反映され、理想どおり均質ではない。Casa MilàやCasa Batllóは孤立した奇抜な彫刻ではなく、同じ街区寸法の中で施主、住居、職人技を競った建物として見る。",
              "sourceIds": [
                "source-bcn-learn-eixample"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-city-history",
            "source-bcn-learn-city-museum",
            "source-bcn-learn-eixample"
          ]
        },
        {
          "id": "bcn-overview-civic",
          "title": "2. Modernismeを支えた市民社会",
          "blocks": [
            {
              "id": "bcn-overview-compare",
              "type": "comparison",
              "columns": [
                {
                  "title": "旧市街",
                  "text": "宗教、王権、商業、職人組織が近い距離に重なる。路地から広場へ開く変化を読む。"
                },
                {
                  "title": "Eixample",
                  "text": "新しい街区と集合住宅に、工業化した市民層の富、衛生への期待、装飾産業が表れる。"
                },
                {
                  "title": "Madridとの違い",
                  "text": "Madridは宮廷と国家の軸が強く、Barcelonaは港・工業・市民団体の力が都市文化を押し出す。どちらも単純な二分ではなく重なりを持つ。"
                }
              ],
              "sourceIds": [
                "source-bcn-learn-city-history",
                "source-bcn-learn-city-museum",
                "source-bcn-learn-eixample"
              ]
            },
            {
              "id": "bcn-overview-public-buildings",
              "type": "paragraph",
              "text": "Palau de la Músicaは合唱運動と市民文化、Sant Pauは医療と慈善、Boqueriaは食料流通と日常生活を建築として可視化する。Gaudí住宅だけを巡ると個人施主と造形の物語へ偏るが、公共施設と市場を加えると「誰のための都市か」という問いが生まれる。12月28日にPalauからBornへ歩く順番は、華やかな内部空間を見た直後に密な商業街へ出て、文化施設が都市生活に埋め込まれていることを確かめるためである。Palauの色彩だけを記憶するのでなく、同じ日に通る石造の路地、商店の小さな間口、人の密度と比べることで、Modernismeが歴史地区を置き換えた孤立様式ではなく、既存都市の中へ挿入された文化装置だと理解できる。",
              "sourceIds": [
                "source-bcn-learn-palau-history",
                "source-bcn-learn-markets"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-city-history",
            "source-bcn-learn-city-museum",
            "source-bcn-learn-eixample",
            "source-bcn-learn-palau-history",
            "source-bcn-learn-markets"
          ]
        },
        {
          "id": "bcn-overview-five-days",
          "title": "3. 五日間を地図にする",
          "blocks": [
            {
              "id": "bcn-overview-order",
              "type": "paragraph",
              "text": "12月26日はEixampleの住宅、27日はSagradaとSant Pau、28日は丘から旧市街、29日はMontserrat、30日は市場から駅という順で、都市中心の造形から公共文化、周縁の信仰、生活の食へ視野を広げる。個々の入場が崩れても、街区の幅、山と市街の距離、市場と港の関係は残る。これがP06-R2の変更耐性を学習面でも支える。",
              "sourceIds": [
                "source-bcn-learn-city-history",
                "source-bcn-learn-city-museum",
                "source-bcn-learn-eixample"
              ]
            },
            {
              "id": "bcn-overview-dynamic",
              "type": "callout",
              "title": "実用情報は当日レイヤーで確認",
              "text": "営業時間、料金、入口、混雑、交通運行、年末年始営業は都市史本文へ固定しない。Today、各PlaceのvisitInfo、Booking readiness、公式SourceのcheckedAtを開き、未公表情報は未確認のまま扱う。",
              "sourceIds": [
                "source-bcn-learn-city-history",
                "source-bcn-learn-city-museum",
                "source-bcn-learn-eixample"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-city-history",
            "source-bcn-learn-city-museum",
            "source-bcn-learn-eixample"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "bcn-overview-onsite-section",
          "title": "今日のBarcelonaを2分で読む",
          "blocks": [
            {
              "id": "bcn-overview-onsite",
              "type": "onsite-checklist",
              "items": [
                "最初に現在地を旧市街、Eixample、山・郊外の三つから選び、今日の地図上の役割を一言で共有する。",
                "Eixampleでは交差点の角が斜めに切られる形、道路幅、建物一棟ではなく街区全体の連続を一度見る。",
                "旧市街では路地から広場へ出る瞬間に立ち止まり、見通し、光、人の流れがどう変わるかを見る。",
                "建物ごとに「住宅／宗教／医療／音楽／市場」の用途を確認し、装飾の前に誰が使った場所か考える。",
                "次の訪問先が同じ街区か別の層かを確認し、移動を単なる空白ではなく都市の切替として見る。",
                "疲労時は説明を削り、街区分類、用途、次の層という三点だけ残して休憩を優先する。"
              ],
              "sourceIds": [
                "source-bcn-learn-city-history",
                "source-bcn-learn-city-museum",
                "source-bcn-learn-eixample"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-city-history",
            "source-bcn-learn-city-museum",
            "source-bcn-learn-eixample"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1226",
        "d1227",
        "d1228",
        "d1229",
        "d1230"
      ],
      "sourceIds": [
        "source-bcn-learn-city-history",
        "source-bcn-learn-city-museum",
        "source-bcn-learn-eixample"
      ]
    },
    {
      "id": "barcelona-modernisme-palau",
      "cityId": "barcelona",
      "placeId": "palau-musica",
      "relatedPlaceIds": [
        "palau-musica",
        "sant-pau",
        "sagrada",
        "mila",
        "batllo",
        "casa-vicens"
      ],
      "relatedScheduleItemIds": [
        "d1226-sant-pau",
        "d1227-sant-pau-exterior",
        "d1228-palau-musica",
        "d1226-mila",
        "d1226-batllo",
        "d1227-sagrada"
      ],
      "scopeType": "place",
      "title": "Gaudí以外のModernisme｜Palau de la MúsicaとDomènech",
      "kind": "建築・比較",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "Palau de la Música Catalanaへ行く理由は、豪華なホールを見るだけではありません。BarcelonaのModernismeがGaudí一人の様式ではなく、建築家、職人、市民団体、音楽運動が協働した文化だったと理解できる場所だからです。設計者Lluís Domènech i Montanerは、鉄や煉瓦の構造を隠し切らず、陶器、モザイク、彫刻、ステンドグラスを一つの空間へまとめました。\n\nGaudíの建築が曲面や力の流れを有機的な全体へまとめるのに対し、DomènechのPalauでは細い柱、反復する花、透明な面、舞台の彫刻が重なり、合唱団と観客を光の中へ包みます。Sant Pauでは同じ建築家の考えが病院の分棟、庭、衛生、患者の尊厳へ展開します。音楽堂と病院を比べると、装飾が贅沢のためだけでなく、共同体の目的を形にする方法だったと分かります。\n\n現地では花の数を数えるより、構造、光、用途の三点を見ます。外観が狭い街路へどう顔を出すか、階段で視線がどう上がるか、ホールの自然光が舞台と客席をどう一体化するかを追えば、短時間でもGaudíとの違いが残ります。",
        "keyPoints": [
          "Palauは合唱団Orfeó Catalàと市民文化のための建築で、個人住宅とは施主と公共性が違う。",
          "Domènechは鉄、煉瓦、陶器、モザイク、彫刻、ステンドグラスを構造と一体化した。",
          "Sant Pauと比較すると、同じ装飾語彙が音楽と医療という別用途へ変換される。",
          "Gaudíとの比較は「派手さ」ではなく、構造、光、用途、共同体の四軸で行う。"
        ],
        "whyItMatters": "完成済みGaudí記事の本文を変えずに、BarcelonaのModernismeを複数の建築家と市民文化の運動として読み直す比較の基準を提供します。建築家名の暗記ではなく、用途と共同体の違いを現地で説明できるようにします。",
        "sourceIds": [
          "source-bcn-learn-palau-history",
          "source-bcn-learn-unesco-domenech",
          "source-bcn-learn-sant-pau"
        ]
      },
      "terms": [
        {
          "id": "bcn-modernisme-term-domenech",
          "term": "Lluís Domènech i Montaner",
          "definition": "Palau de la Música CatalanaとHospital de Sant Pauを設計した建築家。Modernismeの建築家であると同時に文化・政治にも関わった。",
          "sourceIds": [
            "source-bcn-learn-palau-history",
            "source-bcn-learn-unesco-domenech",
            "source-bcn-learn-sant-pau"
          ]
        },
        {
          "id": "bcn-modernisme-term-orfeo",
          "term": "Orfeó Català",
          "definition": "19世紀末に創設された合唱団。Palau建設の主体となり、音楽とCatalunyaの市民文化を結びつけた。",
          "sourceIds": [
            "source-bcn-learn-palau-history"
          ]
        },
        {
          "id": "bcn-modernisme-term-total-art",
          "term": "総合芸術",
          "definition": "建築、構造、彫刻、陶器、ガラス、家具などを別々の飾りではなく、一つの体験へ統合する考え方。",
          "sourceIds": [
            "source-bcn-learn-palau-history",
            "source-bcn-learn-unesco-domenech",
            "source-bcn-learn-sant-pau"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "bcn-modernisme-civic",
          "title": "1. 音楽を支える市民の建築",
          "blocks": [
            {
              "id": "bcn-modernisme-orfeo",
              "type": "paragraph",
              "text": "Palauは王宮の音楽室でも個人邸宅でもなく、Orfeó Catalàを中心とする音楽活動の拠点として建てられた。狭い旧市街の敷地で、多数の観客を動かしながら光を取り込む必要があり、鉄骨と大きなガラス面が重要になる。装飾の豊かさだけに目を奪われず、入口、階段、ホワイエ、客席が群衆を受け入れる順序を見ると、市民団体の建築であることが分かる。",
              "sourceIds": [
                "source-bcn-learn-palau-history",
                "source-bcn-learn-unesco-domenech"
              ]
            },
            {
              "id": "bcn-modernisme-light",
              "type": "paragraph",
              "text": "コンサートホールの中心には天井の大きなステンドグラスがあり、側面の開口とともに自然光を室内へ導く。光は作品を照らす付加物ではなく、昼の公演でも音楽と観客を包む素材として扱われる。舞台周囲の彫刻や植物文様は音楽の歴史と自然の生命感を重ねるが、細部を暗記するより、天井から舞台へ視線がどう導かれるかを追う。",
              "sourceIds": [
                "source-bcn-learn-palau-history"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-palau-history",
            "source-bcn-learn-unesco-domenech"
          ]
        },
        {
          "id": "bcn-modernisme-compare",
          "title": "2. Gaudí、Domènech、Sant Pau",
          "blocks": [
            {
              "id": "bcn-modernisme-architects",
              "type": "comparison",
              "columns": [
                {
                  "title": "Gaudí住宅",
                  "text": "個人施主の住居を、曲面、採光、換気、構造、家具まで一体化する。街区の中で住宅そのものを変形する。"
                },
                {
                  "title": "Palau de la Música",
                  "text": "合唱と観客の共同体を、鉄、ガラス、陶器、彫刻、自然光で包む。音楽の公共性が中心になる。"
                },
                {
                  "title": "Sant Pau",
                  "text": "病院を分棟と庭の環境として組み、光、空気、移動、装飾を患者の治療と尊厳へ結びつける。"
                }
              ],
              "sourceIds": [
                "source-bcn-learn-palau-history",
                "source-bcn-learn-unesco-domenech",
                "source-bcn-learn-sant-pau"
              ]
            },
            {
              "id": "bcn-modernisme-shared",
              "type": "paragraph",
              "text": "三者には職人技、自然形態、歴史的様式の再解釈、素材の統合という共通点がある。一方で形だけを「同じArt Nouveau」とまとめると、住宅、音楽堂、病院が誰のためにどう機能したかを失う。12月27日のSagradaとSant Pau、28日のPalauという順番なら、宗教共同体、医療共同体、音楽共同体の違いを二日で比較できる。さらにCasa MilàとCasa Batllóの個人住宅を加えると、同じ装飾技術が住む、治療する、祈る、演奏するという四つの行為にどう調整されたかを比較できる。",
              "sourceIds": [
                "source-bcn-learn-unesco-domenech",
                "source-bcn-learn-sant-pau"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-palau-history",
            "source-bcn-learn-unesco-domenech",
            "source-bcn-learn-sant-pau"
          ]
        },
        {
          "id": "bcn-modernisme-route",
          "title": "3. 現地で光と動線を追う",
          "blocks": [
            {
              "id": "bcn-modernisme-route-text",
              "type": "paragraph",
              "text": "外観では狭い街路から見上げ、建物が遠景の記念碑ではなく街区へ埋め込まれていることを確かめる。内部へ入ったら階段の色と柱に触れずに視線だけで上昇感を追い、ホールでは天井の光、客席の包まれ方、舞台の左右を順に見る。時間が短ければ「狭い街路の外観／光を集める天井／舞台と客席の一体感」の三点で終える。この順番は装飾を網羅するためではなく、街路から共同空間へ身体が移る過程を追うためである。最後に、同じ日に歩くBornの暗めで細い路地を思い出すと、Palauが限られた敷地の中で光と群衆を扱った工夫が具体的になる。",
              "sourceIds": [
                "source-bcn-learn-palau-history"
              ]
            },
            {
              "id": "bcn-modernisme-dynamic",
              "type": "callout",
              "title": "見学形式は監視中",
              "text": "ガイドツアー、自由見学、公演、入場時刻、料金、撮影規則、使用できる入口は変わる。恒久本文では確定せず、訪問前にPalau公式のvisit情報と予約状況を再確認する。",
              "sourceIds": [
                "source-bcn-learn-palau-visit"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-palau-history",
            "source-bcn-learn-palau-visit"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "bcn-modernisme-onsite-section",
          "title": "Palauを2分で比較する",
          "blocks": [
            {
              "id": "bcn-modernisme-onsite",
              "type": "onsite-checklist",
              "items": [
                "外観は道の反対側から見て、狭い街路に煉瓦、柱、彫刻、開口がどう重なるかを確認する。",
                "入口から階段へ進む時、柱と手すりの反復、色、光が観客の視線を上へ送る仕組みを見る。",
                "ホールでは最初に天井のステンドグラスを見て、自然光がどこから入り客席へ広がるかを追う。",
                "舞台の左右と背面を見て、音楽家、彫刻、植物文様が別々でなく一つの背景になる点を見る。",
                "Casa MilàかCasa Batllóを思い出し、住宅の曲面とPalauの細い柱・透明な面の違いを一言にする。",
                "時間が足りなければ、外観、天井の光、舞台と客席の関係の三点だけ守り、装飾の個別説明を削る。"
              ],
              "sourceIds": [
                "source-bcn-learn-palau-history",
                "source-bcn-learn-unesco-domenech",
                "source-bcn-learn-sant-pau"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-palau-history",
            "source-bcn-learn-unesco-domenech",
            "source-bcn-learn-sant-pau"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1226",
        "d1227",
        "d1228"
      ],
      "sourceIds": [
        "source-bcn-learn-palau-history",
        "source-bcn-learn-unesco-domenech",
        "source-bcn-learn-sant-pau"
      ]
    },
    {
      "id": "barcelona-old-city",
      "cityId": "barcelona",
      "placeId": "placa-rei",
      "relatedPlaceIds": [
        "placa-rei",
        "placa-reial",
        "cathedral",
        "boqueria",
        "guell-palace",
        "palau-musica",
        "el-xampanyet",
        "santa-caterina-market"
      ],
      "relatedScheduleItemIds": [
        "d1226-guell-palace",
        "d1226-placa-rei",
        "d1226-placa-reial",
        "d1227-rest",
        "d1227-fira-santa-llucia",
        "d1228-palau-musica",
        "d1228-born-walk",
        "d1228-xampanyet",
        "d1230-boqueria",
        "d1230-cathedral"
      ],
      "scopeType": "place",
      "title": "Barcelona旧市街｜Gothic Quarter・El Born・La Rambla",
      "kind": "歴史・街歩き",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "旧市街を歩く目的は、中世風の路地を背景に写真を撮ることだけではありません。Roman都市の核、中世の宗教と政治、港へ向かう商業、職人街、19〜20世紀の改変、現在の観光と生活が、短い距離に重なるBarcelonaの時間を読むためです。「Gothic Quarter」という名前から全体が中世のまま残ったと考えず、古い部分と後代の修復・演出を見分ける姿勢が大切です。\n\nGothic Quarterは大聖堂、Plaça del Rei、行政の中心が集まる石の層を、El Bornは市場、職人、海への近さ、文化施設とバルの層を強く見せます。La Ramblaは旧市街を縦に通す人の流れで、Boqueriaは食料流通、Plaça Reialは囲まれた社交空間、海側は港へつながります。同じ「旧市街」でも役割が違います。\n\n現地では路地の幅、壁の継ぎ目、広場への開き方、店の使われ方を見ます。混雑や疲労が強い時は、Plaça del Reiで石と空間、Bornで職人街の尺度、Boqueriaで市場の一往復だけを残せば、長距離を歩かなくても三つの性格を比較できます。",
        "keyPoints": [
          "Gothic Quarterの姿にはRoman・中世の遺構と後代の修復・都市演出が重なる。",
          "El Bornは職人・商業・港との関係、La Ramblaは人の流れ、Plaça Reialは囲まれた広場として役割が違う。",
          "市場とバルは名物店リストではなく、食料流通、立ち寄り、街区生活の仕組みとして見る。",
          "防犯、混雑、営業は動的運用情報として当日確認し、歴史本文と混ぜない。"
        ],
        "whyItMatters": "12月26・28・30日に断片的に通る旧市街を、一つの巨大な観光地ではなく、用途と年代の異なる小さな地区の連なりとして理解するための記事です。",
        "sourceIds": [
          "source-bcn-learn-city-history",
          "source-bcn-learn-city-museum",
          "source-bcn-learn-old-city",
          "source-bcn-learn-boqueria-history"
        ]
      },
      "terms": [
        {
          "id": "bcn-old-term-barcino",
          "term": "Barcino",
          "definition": "Roman期Barcelonaの都市名。城壁内の小さな都市核が後世の旧市街の基盤になった。",
          "sourceIds": [
            "source-bcn-learn-city-history",
            "source-bcn-learn-city-museum",
            "source-bcn-learn-old-city",
            "source-bcn-learn-boqueria-history"
          ]
        },
        {
          "id": "bcn-old-term-gothic",
          "term": "Gothic Quarter",
          "definition": "大聖堂周辺の旧市街地区名。Gothic建築だけの均一な保存地区ではなく、複数時代の建物と修復が重なる。",
          "sourceIds": [
            "source-bcn-learn-city-history",
            "source-bcn-learn-city-museum",
            "source-bcn-learn-old-city",
            "source-bcn-learn-boqueria-history"
          ]
        },
        {
          "id": "bcn-old-term-born",
          "term": "El Born",
          "definition": "旧市街東側の地区。中世以来の商業・職人・港への動線を背景に、市場、文化施設、店舗が重なる。",
          "sourceIds": [
            "source-bcn-learn-old-city"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "bcn-old-layers",
          "title": "1. Roman・中世・近代を一色にしない",
          "blocks": [
            {
              "id": "bcn-old-barcino",
              "type": "paragraph",
              "text": "Plaça del Rei周辺ではRoman都市の地下遺構、中世王権の空間、後世の博物館化が近接する。大聖堂周辺でも建物の正面、側面、回廊、隣接街路は同じ時代ではない。古い街を「本物か偽物か」の二択にせず、どの部分が何を保存し、どの部分が近代の都市像をつくったかを考えると、修復そのものも都市史の資料になる。",
              "sourceIds": [
                "source-bcn-learn-city-museum"
              ]
            },
            {
              "id": "bcn-old-gothic-name",
              "type": "paragraph",
              "text": "20世紀の整備は、旅行者が想像する統一的なGothic Quarter像を強めた。だから尖頭アーチや石の渡り廊下を見ただけで中世と断定しない。石の色、目地、窓の位置、建物同士の接合、通りの見通しに不連続がないかを見る。これは真贋当てではなく、都市が過去をどう見せたいかを読む方法である。",
              "sourceIds": [
                "source-bcn-learn-city-history",
                "source-bcn-learn-city-museum",
                "source-bcn-learn-old-city",
                "source-bcn-learn-boqueria-history"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-city-museum",
            "source-bcn-learn-city-history",
            "source-bcn-learn-old-city",
            "source-bcn-learn-boqueria-history"
          ]
        },
        {
          "id": "bcn-old-districts",
          "title": "2. Gothic、Born、Ramblaを用途で比べる",
          "blocks": [
            {
              "id": "bcn-old-compare",
              "type": "comparison",
              "columns": [
                {
                  "title": "Gothic Quarter",
                  "text": "大聖堂、行政、王権、宗教、Roman核。石の壁と小さな広場の連続を読む。"
                },
                {
                  "title": "El Born",
                  "text": "商人、職人、港への接続、市場、現代の文化・バル。間口と通りの生活を読む。"
                },
                {
                  "title": "La Rambla／Plaça Reial",
                  "text": "大量の人が流れる軸と、そこから入る市場・囲まれた広場。移動と滞留の違いを読む。"
                }
              ],
              "sourceIds": [
                "source-bcn-learn-city-history",
                "source-bcn-learn-city-museum",
                "source-bcn-learn-old-city",
                "source-bcn-learn-boqueria-history"
              ]
            },
            {
              "id": "bcn-old-market-bar",
              "type": "paragraph",
              "text": "Boqueriaは観光名所である前に食料市場であり、El Xampanyetのようなバルは食事一回を完結するレストランとは異なる短い滞在の文化を持つ。市場の品目、客と店員の距離、立席と着席、注文の単位を見ると、旧市街の商業が建物の外観だけでなく行動の速度をつくることが分かる。ただし個店の営業や混雑は変わるため、文化史と当日可否を分離する。",
              "sourceIds": [
                "source-bcn-learn-boqueria-history",
                "source-bcn-learn-xampanyet"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-city-history",
            "source-bcn-learn-city-museum",
            "source-bcn-learn-old-city",
            "source-bcn-learn-boqueria-history",
            "source-bcn-learn-xampanyet"
          ]
        },
        {
          "id": "bcn-old-route",
          "title": "3. 短い街歩きに編集する",
          "blocks": [
            {
              "id": "bcn-old-short-route",
              "type": "paragraph",
              "text": "P06-R2では12月28日のPalauからBorn、El Xampanyetへの流れが比較の核になる。Palauの華やかな内部を出た後、道幅、店舗間口、広場への開き方を見ながらBornへ進む。12月30日はBoqueriaから大聖堂へ向かい、食の市場から宗教・歴史の中心へ用途が変わる。疲労時は直線的な「名所回収」をやめ、安全で明るい短区間に絞り、Plaça del Rei、Bornの一街路、Boqueriaの入口という三点で終える。",
              "sourceIds": [
                "source-bcn-learn-city-history",
                "source-bcn-learn-city-museum",
                "source-bcn-learn-old-city",
                "source-bcn-learn-boqueria-history"
              ]
            },
            {
              "id": "bcn-old-dynamic",
              "type": "callout",
              "title": "混雑・防犯・営業は当日判断",
              "text": "混雑、スリ注意、通行規制、夜間の経路、市場と個店の営業、入場口、撮影規則は変わる。Todayのfallbackと公式情報を確認し、学習のために危険・過密な経路へ固執しない。",
              "sourceIds": [
                "source-bcn-learn-old-city",
                "source-bcn-learn-boqueria-history"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-city-history",
            "source-bcn-learn-city-museum",
            "source-bcn-learn-old-city",
            "source-bcn-learn-boqueria-history"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "bcn-old-onsite-section",
          "title": "旧市街を2分で読む",
          "blocks": [
            {
              "id": "bcn-old-onsite",
              "type": "onsite-checklist",
              "items": [
                "路地に入ったら幅と見通しを一度確認し、Eixampleの広い直線道路との違いを言葉にする。",
                "石の壁や窓の周囲で色、目地、接合の違いを探し、街が複数時代の改変でできていると確認する。",
                "Plaça del Reiか別の広場へ出る瞬間に、光、人の滞留、建物正面の見え方がどう変わるかを見る。",
                "Bornでは店舗の間口と一階の使われ方を見て、宗教・行政中心とは違う商業・職人街の尺度を感じる。",
                "Boqueriaでは入口から一往復だけし、商品、買い手、観光客、食事席が同じ市場でどう分かれるかを見る。",
                "混雑や疲労が強ければ、安全な広場一つ、路地一つ、市場入口一つに短縮し、暗い脇道へ入らない。"
              ],
              "sourceIds": [
                "source-bcn-learn-city-history",
                "source-bcn-learn-city-museum",
                "source-bcn-learn-old-city",
                "source-bcn-learn-boqueria-history"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-city-history",
            "source-bcn-learn-city-museum",
            "source-bcn-learn-old-city",
            "source-bcn-learn-boqueria-history"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1226",
        "d1227",
        "d1228",
        "d1230"
      ],
      "sourceIds": [
        "source-bcn-learn-city-history",
        "source-bcn-learn-city-museum",
        "source-bcn-learn-old-city",
        "source-bcn-learn-boqueria-history"
      ]
    },
    {
      "id": "montserrat",
      "cityId": "barcelona",
      "placeId": "montserrat",
      "relatedPlaceIds": [
        "montserrat"
      ],
      "relatedScheduleItemIds": [
        "d1229-fgc-out",
        "d1229-up-buffer",
        "d1229-aeri-up",
        "d1229-basilica",
        "d1229-moreneta",
        "d1229-lunch",
        "d1229-museum",
        "d1229-descent-rest",
        "d1229-aeri-down",
        "d1229-down-buffer",
        "d1229-fgc-return"
      ],
      "scopeType": "place",
      "title": "Montserrat｜山・修道院・黒い聖母を一つに読む",
      "kind": "信仰・景観",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "Montserratへ行く理由は、Barcelonaから有名な山を日帰りで見ることだけではありません。鋸歯状の岩山という強い地形、Benedictine修道院の共同生活、黒い聖母Morenetaへの信仰、Catalunyaの文化的記憶が同じ場所に重なるからです。都市の建築を三日見た後に山へ出ることで、人がつくる形と、地形に意味を見出して建物を置く行為を比べられます。\n\n黒い聖母は単なる珍しい色の像ではなく、Montserratの聖母として巡礼者が祈りを向ける存在です。宗教知識がなくても、像の造形だけを評価せず、訪れる人の沈黙、列、祈り、修道院の日常に敬意を払えば入口に立てます。大聖堂は礼拝空間、美術館は作品を比較する空間、展望は山と都市の距離を感じる空間で、同じ「観光」の速度で消費しないことが大切です。\n\n現地では到着直後に岩山を見上げ、次に大聖堂の軸と光、Morenetaの前での人の行動、美術館で山の信仰と異なる作品世界を順に見ます。悪天候時は展望を削り、大聖堂、Moreneta、屋内休憩の三つを残します。",
        "keyPoints": [
          "Montserratは地形、修道院、巡礼、Catalunyaの文化的象徴が重なる場所。",
          "Morenetaは色の珍しさではなく、祈りの対象として人々がどう接するかを見る。",
          "大聖堂、美術館、山の眺望は目的と見る速度が違う。",
          "鉄道、ロープウェイ、風、入場枠は動的情報で、悪天候時は屋内の主役を守る。"
        ],
        "whyItMatters": "P06-R2の12月29日を交通イベントの列ではなく、都市から山へ移動して信仰・共同体・自然の関係を読む一日に変えます。宗教知識がない親も、礼拝を尊重しながら山・像・美術館の役割を分けて理解できます。",
        "sourceIds": [
          "source-bcn-learn-montserrat-abbey",
          "source-bcn-learn-montserrat-pastoral",
          "source-bcn-learn-montserrat-museum"
        ]
      },
      "terms": [
        {
          "id": "montserrat-term-benedictine",
          "term": "Benedictine修道院",
          "definition": "聖ベネディクトの戒律を基礎に祈りと共同生活を営む修道院。Montserratでは巡礼者を迎える聖地の運営とも結びつく。",
          "sourceIds": [
            "source-bcn-learn-montserrat-abbey"
          ]
        },
        {
          "id": "montserrat-term-moreneta",
          "term": "Moreneta",
          "definition": "「小さな黒い女性」を意味する愛称で呼ばれるMontserratの聖母像。Catalunyaの守護聖人として信仰を集める。",
          "sourceIds": [
            "source-bcn-learn-montserrat-pastoral"
          ]
        },
        {
          "id": "montserrat-term-pilgrimage",
          "term": "巡礼",
          "definition": "信仰上の目的を持って聖地へ向かう行為。移動、待つこと、祈り、共同体との接触も体験の一部になる。",
          "sourceIds": [
            "source-bcn-learn-montserrat-abbey",
            "source-bcn-learn-montserrat-pastoral",
            "source-bcn-learn-montserrat-museum"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "montserrat-landscape",
          "title": "1. 岩山が意味を持つまで",
          "blocks": [
            {
              "id": "montserrat-geology-symbol",
              "type": "paragraph",
              "text": "Montserratの輪郭は遠くからでも識別できる。侵食でつくられた丸みのある岩の柱と谷は、人間が設計したBarcelonaの格子や建築曲面とは異なる時間尺度を示す。修道院は自然を征服する頂上の記念碑というより、岩壁に抱かれる中腹の場所として見える。到着時にまず建物ではなく山の輪郭を見ると、なぜここが隔絶と接近を同時に感じさせる聖地になったかを考えられる。",
              "sourceIds": [
                "source-bcn-learn-montserrat-abbey"
              ]
            },
            {
              "id": "montserrat-city-mountain",
              "type": "comparison",
              "columns": [
                {
                  "title": "Barcelona市内",
                  "text": "街区、交通、住宅、公共施設が人の活動を密に組織する。建築同士を比較する場所。"
                },
                {
                  "title": "Montserrat",
                  "text": "山の輪郭、標高、天候、移動の制約が人の行動を先に決める。建物は地形との関係で読む。"
                },
                {
                  "title": "共通する問い",
                  "text": "自然形態を装飾として借りるのか、自然の中に共同体を置くのか。Park GüellやGaudíの形との比較線が生まれる。"
                }
              ],
              "sourceIds": [
                "source-bcn-learn-montserrat-abbey",
                "source-bcn-learn-montserrat-pastoral",
                "source-bcn-learn-montserrat-museum"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-montserrat-abbey",
            "source-bcn-learn-montserrat-pastoral",
            "source-bcn-learn-montserrat-museum"
          ]
        },
        {
          "id": "montserrat-faith",
          "title": "2. 修道院とMoreneta",
          "blocks": [
            {
              "id": "montserrat-monastery-history",
              "type": "paragraph",
              "text": "Montserratの聖地は長い歴史の中で破壊、再建、政治的変化を経験しながら、修道共同体と巡礼の場所として続いてきた。Catalunyaとの関係を単純な政治記号にせず、言語、音楽、出版、信仰、教育など複数の活動が文化的記憶を支えてきたと捉える。大聖堂では建築様式の分類より、入口から祭壇へ向かう軸、祈る人と通過する人の速度差を見る。",
              "sourceIds": [
                "source-bcn-learn-montserrat-abbey",
                "source-bcn-learn-montserrat-pastoral"
              ]
            },
            {
              "id": "montserrat-moreneta-meaning",
              "type": "paragraph",
              "text": "Morenetaの黒い色には素材、経年、伝承をめぐる説明があるが、一つの俗説だけで断定しない。重要なのは、像が母子像として祈りの焦点になり、巡礼者が列をつくり、触れられる部分や視線に意味を与えてきたことである。信仰を共有しなくても、写真対象として急いで消費せず、他者の祈りを妨げない距離と静けさを守ることが観察の第一歩になる。列に並ぶ時間そのものも巡礼の一部と捉え、像に触れられるかどうかより、祈りの場へ自分の速度を合わせられるかを重視する。",
              "sourceIds": [
                "source-bcn-learn-montserrat-pastoral"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-montserrat-abbey",
            "source-bcn-learn-montserrat-pastoral"
          ]
        },
        {
          "id": "montserrat-three-experiences",
          "title": "3. 礼拝・美術・山を分けてつなぐ",
          "blocks": [
            {
              "id": "montserrat-museum",
              "type": "paragraph",
              "text": "大聖堂は現在も祈りが行われる空間、美術館は時代や地域の異なる作品を保存・比較する空間、展望は地形と移動を体で理解する空間である。美術館で特定作品を必ず見られると固定せず、当日の展示から「山の聖地に、なぜこの作品群が集まったか」を一つ選ぶ。昼食と着席休憩も、移動の余白ではなく山岳日の判断力を保つ工程として扱う。都市の美術館のように次の作品へ急ぐのでなく、礼拝後に一度座り、山の静けさと観光動線の混在を整理してから美術館へ入ると、三つの体験が一つに潰れない。",
              "sourceIds": [
                "source-bcn-learn-montserrat-museum"
              ]
            },
            {
              "id": "montserrat-dynamic",
              "type": "callout",
              "title": "運行・天候・入場は監視中",
              "text": "FGC、ロープウェイ、rack railwayの運行、強風、入場枠、礼拝、聖歌隊、美術館展示、料金、撮影規則は変わる。前日と当日朝に公式情報を確認し、P06-R2の悪天候fallbackでは無理な登山や展望を行わない。",
              "sourceIds": [
                "source-bcn-learn-montserrat-transport",
                "source-bcn-learn-montserrat-abbey"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-montserrat-museum",
            "source-bcn-learn-montserrat-transport",
            "source-bcn-learn-montserrat-abbey"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "montserrat-onsite-section",
          "title": "Montserratを2分で読む",
          "blocks": [
            {
              "id": "montserrat-onsite",
              "type": "onsite-checklist",
              "items": [
                "到着したら建物へ急がず、岩山の輪郭、修道院の位置、谷の方向を一度見て地形の中の配置をつかむ。",
                "大聖堂では入口から祭壇までの軸、光、祈る人と観光客の速度の違いを静かに観察する。",
                "Morenetaの前では像の色だけに注目せず、母子像の姿勢、周囲の祈り、列の進み方に敬意を払う。",
                "美術館では展示中の一作を選び、都市の美術館と違って山の修道院に集められた意味を考える。",
                "昼食と休憩で風、視界、疲労を確認し、展望や追加移動を続けるか安全側で判断する。",
                "悪天候なら大聖堂、Moreneta、屋内休憩を残し、眺望、散策、無理な接続は削る。"
              ],
              "sourceIds": [
                "source-bcn-learn-montserrat-abbey",
                "source-bcn-learn-montserrat-pastoral",
                "source-bcn-learn-montserrat-museum"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-montserrat-abbey",
            "source-bcn-learn-montserrat-pastoral",
            "source-bcn-learn-montserrat-museum"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1229"
      ],
      "sourceIds": [
        "source-bcn-learn-montserrat-abbey",
        "source-bcn-learn-montserrat-pastoral",
        "source-bcn-learn-montserrat-museum"
      ]
    },
    {
      "id": "catalan-winter-food",
      "cityId": "barcelona",
      "placeId": "can-culleretes",
      "relatedPlaceIds": [
        "can-culleretes",
        "restaurant-7-portes",
        "boqueria",
        "santa-caterina-market"
      ],
      "relatedScheduleItemIds": [
        "d1226-brunch",
        "d1226-dinner",
        "d1227-breakfast",
        "d1227-lunch",
        "d1227-culleretes",
        "d1227-light-dinner",
        "d1230-lunch"
      ],
      "scopeType": "place",
      "title": "カタルーニャ冬料理｜家庭・祝祭・3人の注文",
      "kind": "食文化・季節",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "カタルーニャ料理を知る入口は、すべてを重い郷土料理として注文することではありません。pa amb tomàquetのような日常の土台、escalivadaやesqueixadaの軽い皿、botifarraの肉料理、escudellaの冬の煮込み、Sant Esteveと結びつくcanelons、食後のcrema catalanaを組み合わせると、地中海性、保存、家庭、祝祭の層が見えます。Madridのcocidoや揚げ物中心の軽食と比べる時も、優劣ではなく季節、食事時間、共有の仕方を見ることが大切です。\n\n旅行はChristmas直後なので、escudella、canelons、calçotsには季節の意味があります。ただし「季節料理だから必ず当日ある」とは限りません。Can Culleretesは伝統料理を試す実ScheduleItemの役割を持ちますが、店名と料理名を同一視せず、公式メニューと営業を再確認します。3人なら軽い前菜二つ、重い主役一つ、デザート一つを共有し、全員が一人一皿の重い料理を抱えない設計ができます。\n\n必食は一品ずつの完食ではなく、pa amb tomàquetを基準味として知り、冬料理を一つ、軽い野菜・魚を一つ、crema catalanaを共有できれば十分です。提供がなければ同じ役割へ置き換え、旅程を料理探しだけで崩さないことを優先します。",
        "keyPoints": [
          "日常の土台、軽い野菜・魚、冬の煮込み、祝祭料理、デザートを役割で分ける。",
          "店名は料理ではなく、料理が当日提供されるかは動的情報として再確認する。",
          "3人では軽い皿を複数、重い主役を一つ、デザートを共有し、重さを分散する。",
          "calçotadaは季節性が高いが時間と量も大きく、P06-R2では無理に追加しない。"
        ],
        "whyItMatters": "12月27日のCan Culleretesを名店訪問ではなく、冬と家庭料理を理解しつつ三人の疲労を守る食事枠として使うための記事です。提供がない時も料理役割を保ち、旅程を店名へ従属させません。",
        "sourceIds": [
          "source-bcn-learn-catalan-cuisine",
          "source-bcn-learn-pa-tomaquet",
          "source-bcn-learn-escudella",
          "source-bcn-learn-calcot"
        ]
      },
      "terms": [
        {
          "id": "bcn-winter-term-pa",
          "term": "Pa amb tomàquet",
          "definition": "パンへトマト、オリーブ油、塩を合わせるカタルーニャの基本。単独の豪華料理ではなく多くの食事の基準になる。",
          "sourceIds": [
            "source-bcn-learn-pa-tomaquet"
          ]
        },
        {
          "id": "bcn-winter-term-escudella",
          "term": "Escudella i carn d’olla",
          "definition": "肉、野菜、豆、パスタなどを組み合わせる冬の煮込み。Christmasの食卓との結びつきが強い。",
          "sourceIds": [
            "source-bcn-learn-escudella"
          ]
        },
        {
          "id": "bcn-winter-term-calcotada",
          "term": "Calçotada",
          "definition": "焼いたcalçotをソースとともに食べ、肉料理へ続くことも多い冬から春の共同的な食事体験。短い軽食ではない。",
          "sourceIds": [
            "source-bcn-learn-calcot"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "bcn-winter-structure",
          "title": "1. 日常・保存・祝祭を分ける",
          "blocks": [
            {
              "id": "bcn-winter-daily",
              "type": "paragraph",
              "text": "Pa amb tomàquetは朝食、前菜、肉や魚の付け合わせに現れ、地域料理の「白紙」に近い。escalivadaは焼き野菜、esqueixadaは塩鱈をほぐした冷菜で、油、野菜、保存魚という地中海の材料を軽い皿へまとめる。これらを先に一つ取ると、重い煮込みや肉料理の前に味の基準ができ、三人で少量ずつ比較しやすい。",
              "sourceIds": [
                "source-bcn-learn-catalan-cuisine",
                "source-bcn-learn-pa-tomaquet"
              ]
            },
            {
              "id": "bcn-winter-festive",
              "type": "paragraph",
              "text": "Escudellaは冬の煮込み、canelonsはChristmas翌日のSant Esteveと結びつく家庭料理として意味を持つ。Botifarraは豆などと合わせる肉の主役、crema catalanaは食事を締める役割を持つ。料理史を一つの起源物語に固定せず、家庭ごと・店ごとの違いを前提に、旅行時期にどの役割を一回経験するかを決める。",
              "sourceIds": [
                "source-bcn-learn-catalan-cuisine",
                "source-bcn-learn-escudella"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-catalan-cuisine",
            "source-bcn-learn-pa-tomaquet",
            "source-bcn-learn-escudella"
          ]
        },
        {
          "id": "bcn-winter-three-people",
          "title": "2. 3人で重さを設計する",
          "blocks": [
            {
              "id": "bcn-winter-order",
              "type": "comparison",
              "columns": [
                {
                  "title": "軽い入口",
                  "text": "Pa amb tomàquet、escalivada、esqueixada。二皿を三人で分け、塩味と油を確認する。"
                },
                {
                  "title": "冬の主役",
                  "text": "Escudella、canelons、botifarraから一〜二役。三人全員が重い主菜を重ねない。"
                },
                {
                  "title": "締めと逃げ道",
                  "text": "Crema catalanaを共有。食欲が弱ければ軽い前菜とパンで終え、次の食事へ負担を残さない。"
                }
              ],
              "sourceIds": [
                "source-bcn-learn-catalan-cuisine",
                "source-bcn-learn-pa-tomaquet",
                "source-bcn-learn-escudella",
                "source-bcn-learn-calcot"
              ]
            },
            {
              "id": "bcn-winter-madrid-compare",
              "type": "paragraph",
              "text": "Madridではcocido、bocadillo de calamares、chocolate con churrosなどがP06-R2の別の役割を担う。Barcelonaの冬料理との違いを都市対抗の優劣にせず、長い着席昼食、短い街歩き軽食、季節の家庭料理という時間構造で比べる。Can Culleretesの枠で重い煮込みを食べたら、その日の軽い夕食は省略可能とし、翌日の市場・魚介へ重さを持ち越さない。",
              "sourceIds": [
                "source-bcn-learn-catalan-cuisine"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-catalan-cuisine",
            "source-bcn-learn-pa-tomaquet",
            "source-bcn-learn-escudella",
            "source-bcn-learn-calcot"
          ]
        },
        {
          "id": "bcn-winter-fallback",
          "title": "3. メニューにない時も役割を守る",
          "blocks": [
            {
              "id": "bcn-winter-replacements",
              "type": "paragraph",
              "text": "Escudellaがなければcanelonsまたはbotifarraで冬・家庭の役割を残す。どれも重ければescalivada、esqueixada、pa amb tomàquetへ軽くする。Calçotsは季節に合っても、専用の長い食事と移動が必要なら今回は見送る。理解して見送ることは、知らずに食べ逃すこととは違う。料理一つのためにSagrada、休憩、旧市街の安全な順番を崩さない。",
              "sourceIds": [
                "source-bcn-learn-catalan-cuisine",
                "source-bcn-learn-pa-tomaquet",
                "source-bcn-learn-escudella",
                "source-bcn-learn-calcot"
              ]
            },
            {
              "id": "bcn-winter-dynamic",
              "type": "callout",
              "title": "提供と営業は監視中",
              "text": "Can Culleretesを含む店舗の年末年始営業、当日メニュー、量、予約、価格、アレルゲンは変わる。料理の文化的説明と切り分け、2026-11-26、予約前、訪問前日に公式情報を再確認する。",
              "sourceIds": [
                "source-bcn-learn-catalan-cuisine",
                "source-bcn-learn-pa-tomaquet",
                "source-bcn-learn-escudella",
                "source-bcn-learn-calcot"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-catalan-cuisine",
            "source-bcn-learn-pa-tomaquet",
            "source-bcn-learn-escudella",
            "source-bcn-learn-calcot"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "bcn-winter-onsite-section",
          "title": "冬料理を2分で選ぶ",
          "blocks": [
            {
              "id": "bcn-winter-onsite",
              "type": "onsite-checklist",
              "items": [
                "最初にpa amb tomàquet、escalivada、esqueixadaの有無を見て、三人で共有できる軽い入口を一〜二品選ぶ。",
                "冬の主役はescudella、canelons、botifarraから一つを優先し、同じ重さの主菜を全員分重ねない。",
                "料理名がメニューに見当たらなければ店員へ確認し、提供なしなら同じ家庭・冬の役割へ置き換える。",
                "三人の食欲を確認し、一人が疲れていれば重い皿を減らし、パン、野菜、着席休憩を優先する。",
                "食後に余裕があればcrema catalanaを一つ共有し、甘味を別の食事枠へ重ねない。",
                "営業や予約が成立しなければ店へ固執せず、軽いfallbackへ移り、必要時のみの夕食を省略する。"
              ],
              "sourceIds": [
                "source-bcn-learn-catalan-cuisine",
                "source-bcn-learn-pa-tomaquet",
                "source-bcn-learn-escudella",
                "source-bcn-learn-calcot"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-catalan-cuisine",
            "source-bcn-learn-pa-tomaquet",
            "source-bcn-learn-escudella",
            "source-bcn-learn-calcot"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1226",
        "d1227",
        "d1230"
      ],
      "sourceIds": [
        "source-bcn-learn-catalan-cuisine",
        "source-bcn-learn-pa-tomaquet",
        "source-bcn-learn-escudella",
        "source-bcn-learn-calcot"
      ]
    },
    {
      "id": "barcelona-seafood-market-bar",
      "cityId": "barcelona",
      "placeId": "can-sole",
      "relatedPlaceIds": [
        "can-sole",
        "boqueria",
        "el-quim-boqueria",
        "bar-joan-santa-caterina",
        "el-xampanyet",
        "restaurant-7-portes"
      ],
      "relatedScheduleItemIds": [
        "d1228-born-walk",
        "d1228-xampanyet",
        "d1228-dinner",
        "d1229-can-sole",
        "d1230-boqueria",
        "d1230-lunch"
      ],
      "scopeType": "place",
      "title": "Barcelonaの魚介・市場朝食・バル文化",
      "kind": "食文化・現地判断",
      "readingPaths": [
        {
          "id": "quick",
          "label": "まず3分",
          "minutes": 3,
          "target": "intro"
        },
        {
          "id": "deep",
          "label": "深く15分",
          "minutes": 15,
          "target": "deep"
        },
        {
          "id": "onsite",
          "label": "現地2分",
          "minutes": 2,
          "target": "onsite"
        }
      ],
      "intro": {
        "summary": "魚介料理、市場朝食、バルでの短い一杯は、どれも「タパス」ではありません。Can Soléのrice dishesやfideuàは時間を取って三人で鍋・皿を共有する主食事、El Quimは市場の流通と朝の活気の中で食べる朝食・早昼、El Xampanyetは保存魚などを少量取り短時間で街のバル文化に触れる現地判断枠です。役割を分けると、同じ魚介を食べても体験の重複を防げます。\n\n港町Barcelonaでは生鮮魚だけでなく、米、麺、ソフリット、保存魚、塩鱈、飲み物が異なる時間の食事をつくります。Riceは米料理の広い系統、fideuàは短い麺を使う主食、suquet de peixは漁師料理の系譜を持つ煮込みです。アンチョビやconservesは短いバル体験に向きます。Cavaやvermutは飲み物でありDishではなく、飲酒しない人を含む三人旅では軽食と滞在形式を理解する補助にします。\n\n現地ではCan Soléでriceかfideuàの主役を一つ、El Xampanyetでは待ち時間を決めて保存魚と軽い一皿、El Quimでは行列上限を決めて市場朝食を選びます。満席なら店名を守らず、同じ料理役割、同じ時間、同じ移動負荷を守るfallbackへ移ります。",
        "keyPoints": [
          "魚介の主食事、市場朝食、バルの短時間体験は滞在時間と注文単位が違う。",
          "Rice、fideuà、suquet、保存魚を同じタパスとしてまとめない。",
          "市場朝食はexperience、Cavaとvermutはbeverageであり、新しいDishとして登録しない。",
          "3人では主役一つと軽い皿を共有し、待ち時間・立席・遅い夕食の負荷を先に決める。"
        ],
        "whyItMatters": "12月28〜30日の三つの実食事枠を店名のチェックリストにせず、満席や休業でも文化的役割を維持できる判断表へ変えます。三人の食欲、待ち時間、着席負荷を揃えてfallbackを選べます。",
        "sourceIds": [
          "source-bcn-learn-fideuada",
          "source-bcn-learn-markets",
          "source-bcn-learn-el-quim",
          "source-bcn-learn-xampanyet",
          "source-bcn-learn-can-sole"
        ]
      },
      "terms": [
        {
          "id": "bcn-seafood-term-fideua",
          "term": "Fideuà",
          "definition": "米の代わりに短い麺を使い、魚介やソフリットと調理する主食。小皿タパスではなく共有する食事の主役になりやすい。",
          "sourceIds": [
            "source-bcn-learn-fideuada"
          ]
        },
        {
          "id": "bcn-seafood-term-conserves",
          "term": "Conserves",
          "definition": "アンチョビ、貝、魚などの保存食。バルでは少量をパンや飲み物と合わせ、短時間で味を比べられる。",
          "sourceIds": [
            "source-bcn-learn-xampanyet"
          ]
        },
        {
          "id": "bcn-seafood-term-market-breakfast",
          "term": "市場朝食",
          "definition": "市場内で朝から食材や調理の動きを近くに感じながら食べる体験。特定の一料理名ではなく、場所と時間を含む食事形式。",
          "sourceIds": [
            "source-bcn-learn-markets",
            "source-bcn-learn-el-quim"
          ]
        }
      ],
      "deepSections": [
        {
          "id": "bcn-seafood-port",
          "title": "1. 港・市場・保存の三つの線",
          "blocks": [
            {
              "id": "bcn-seafood-port-text",
              "type": "paragraph",
              "text": "Barcelonaの海辺の食は、船から皿へ直結する単純な物語ではない。市場の流通、米や麺、トマトや油の調理、塩漬け・缶詰などの保存、観光都市のレストラン文化が重なる。Can Soléのような魚介・米料理店では着席して主食を共有し、市場では食材と調理の距離を観察し、バルでは保存魚を短い滞在へ編集する。三つを用途で分けると、価格や有名度だけではない比較ができる。",
              "sourceIds": [
                "source-bcn-learn-markets",
                "source-bcn-learn-can-sole"
              ]
            },
            {
              "id": "bcn-seafood-rice-noodle-stew",
              "type": "paragraph",
              "text": "Rice dishesは米料理全般、fideuàは短い麺、suquet de peixは魚の煮込みで、同じ「魚介」のタグでも食感、重さ、共有方法が違う。三人でriceとfideuàを同時に大きく頼む必要はない。一つを主役にし、esqueixadaや野菜など軽い皿を加える方が比較しやすく、Montserrat帰りの疲労と遅い夕食の負担を抑えられる。",
              "sourceIds": [
                "source-bcn-learn-fideuada",
                "source-bcn-learn-can-sole"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-markets",
            "source-bcn-learn-can-sole",
            "source-bcn-learn-fideuada"
          ]
        },
        {
          "id": "bcn-seafood-three-formats",
          "title": "2. 三つの食事形式を混ぜない",
          "blocks": [
            {
              "id": "bcn-seafood-compare",
              "type": "comparison",
              "columns": [
                {
                  "title": "Can Solé",
                  "text": "予約を検討する着席の主食事。Riceかfideuàを三人で共有し、時間と食欲を確保する。"
                },
                {
                  "title": "El Xampanyet",
                  "text": "現地判断の短いバル体験。保存魚や軽い皿を少量、待ち時間と立席負荷を限定する。"
                },
                {
                  "title": "El Quim／市場",
                  "text": "朝食・早昼のexperience。市場の動きと食事を一緒に見るが、行列で列車前bufferを使わない。"
                }
              ],
              "sourceIds": [
                "source-bcn-learn-fideuada",
                "source-bcn-learn-markets",
                "source-bcn-learn-el-quim",
                "source-bcn-learn-xampanyet",
                "source-bcn-learn-can-sole"
              ]
            },
            {
              "id": "bcn-seafood-beverages",
              "type": "paragraph",
              "text": "Cavaは発泡性ワイン、vermutは香草などで風味を付けた酒であり、料理名ではない。飲酒はBarcelona文化を理解する必須条件でもない。ノンアルコール飲料と保存魚・パンを選んでも、短く立ち寄り会話と小皿を共有するバルの形式は理解できる。既存canonicalの互換性用beverage recordを増殖させず、学習記事ではbeverageとexperienceとして明示する。",
              "sourceIds": [
                "source-bcn-learn-xampanyet"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-fideuada",
            "source-bcn-learn-markets",
            "source-bcn-learn-el-quim",
            "source-bcn-learn-xampanyet",
            "source-bcn-learn-can-sole"
          ]
        },
        {
          "id": "bcn-seafood-fallback",
          "title": "3. 店ではなく役割を守る",
          "blocks": [
            {
              "id": "bcn-seafood-fallback-text",
              "type": "paragraph",
              "text": "Can Soléが休業・満席なら、公式確認済みの別店でrice／fideuàという主食役割を守る。El Xampanyetの列が長ければQuimet等の保存魚・短時間役割へ移すか、体力がなければ省略する。El Quimでは待ち時間上限を20分の判断目安とし、列車前bufferを侵食しそうならBar Joan等の市場朝食役割、またはすぐ買える軽食へ切り替える。fallbackは店の格を揃えるのでなく、料理、時間、着席、移動負荷を揃える。",
              "sourceIds": [
                "source-bcn-learn-fideuada",
                "source-bcn-learn-markets",
                "source-bcn-learn-el-quim",
                "source-bcn-learn-xampanyet",
                "source-bcn-learn-can-sole"
              ]
            },
            {
              "id": "bcn-seafood-dynamic",
              "type": "callout",
              "title": "営業・提供・行列は監視中",
              "text": "年末年始営業、予約枠、米料理の提供時間、最低注文人数、市場と個店の営業時間、行列、価格、アレルゲンは変わる。11月26日、予約前、訪問前日または当日朝に公式情報を再確認する。",
              "sourceIds": [
                "source-bcn-learn-fideuada",
                "source-bcn-learn-markets",
                "source-bcn-learn-el-quim",
                "source-bcn-learn-xampanyet",
                "source-bcn-learn-can-sole"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-fideuada",
            "source-bcn-learn-markets",
            "source-bcn-learn-el-quim",
            "source-bcn-learn-xampanyet",
            "source-bcn-learn-can-sole"
          ]
        }
      ],
      "onsiteSections": [
        {
          "id": "bcn-seafood-onsite-section",
          "title": "魚介・市場・バルを2分で選ぶ",
          "blocks": [
            {
              "id": "bcn-seafood-onsite",
              "type": "onsite-checklist",
              "items": [
                "Can Soléでは最初にrice、fideuà、suquetのどれを三人の主役にするか決め、大皿を重複させない。",
                "主役が重ければesqueixada、野菜、pa amb tomàquetなど軽い皿を一つ加え、追加注文は食べてから判断する。",
                "El Xampanyetでは入店前に待ち時間と立席負荷を確認し、短時間で保存魚一皿を共有する目的を守る。",
                "Cavaやvermutを料理として数えず、飲まない人はノンアルコールと同じ小皿でバルの形式を体験する。",
                "El Quimでは行列上限を決め、列車前bufferへ食い込むなら市場内fallbackか持ち帰れる軽食へ移る。",
                "満席・休業・食欲低下時は店名を追わず、主食／短いバル／市場朝食という同じ役割だけを残す。"
              ],
              "sourceIds": [
                "source-bcn-learn-fideuada",
                "source-bcn-learn-markets",
                "source-bcn-learn-el-quim",
                "source-bcn-learn-xampanyet",
                "source-bcn-learn-can-sole"
              ]
            }
          ],
          "sourceIds": [
            "source-bcn-learn-fideuada",
            "source-bcn-learn-markets",
            "source-bcn-learn-el-quim",
            "source-bcn-learn-xampanyet",
            "source-bcn-learn-can-sole"
          ]
        }
      ],
      "mediaBlocks": [],
      "visitDayIds": [
        "d1228",
        "d1229",
        "d1230"
      ],
      "sourceIds": [
        "source-bcn-learn-fideuada",
        "source-bcn-learn-markets",
        "source-bcn-learn-el-quim",
        "source-bcn-learn-xampanyet",
        "source-bcn-learn-can-sole"
      ]
    }
  ],
  "bookings": [
    {
      "id": "flight",
      "title": "国際線",
      "status": "confirmed",
      "deadline": null,
      "relatedDayIds": [
        "d1225",
        "d1226",
        "d0104",
        "d0105"
      ],
      "relatedScheduleItemIds": [
        "d1225-nrt-depart",
        "d1225-pvg-arrive",
        "d1226-pvg-bcn",
        "d0104-bcn-depart",
        "d0104-pvg-arrive",
        "d0105-pvg-depart",
        "d0105-nrt-arrive"
      ],
      "actionUrl": null,
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "予約番号等は公開データに保存しない。",
      "purchaseMode": "unknown",
      "sourceIds": []
    },
    {
      "id": "sagrada",
      "title": "サグラダ・ファミリア",
      "status": "not_started",
      "deadline": "2026-09-27",
      "relatedDayIds": [
        "d1227"
      ],
      "relatedScheduleItemIds": [
        "d1227-sagrada"
      ],
      "actionUrl": "https://sagradafamilia.org/en/tickets",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "2026-12-27の塔付き枠は発売待ち。発売後も購入証拠なしにconfirmedへ変更しない。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-sagradafamilia-org-en-tickets"
      ]
    },
    {
      "id": "parkguell",
      "title": "グエル公園",
      "status": "not_started",
      "deadline": "2026-09-28",
      "relatedDayIds": [
        "d1228"
      ],
      "relatedScheduleItemIds": [
        "d1226-parkguell"
      ],
      "actionUrl": "https://parkguell.barcelona/en/buy-tickets",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "2026-12-28の時間指定枠は発売待ち。悪天候時は既存fallbackを使う。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-parkguell-barcelona-en-buy-tickets"
      ]
    },
    {
      "id": "mila",
      "title": "カサ・ミラ",
      "status": "not_started",
      "deadline": "2026-10-31",
      "relatedDayIds": [
        "d1226"
      ],
      "relatedScheduleItemIds": [
        "d1226-mila"
      ],
      "actionUrl": "https://www.lapedrera.com/en/visits",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "2026-12-26 14:30枠の発売・年末営業を確認してから購入判断する。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-www-lapedrera-com-en-visits"
      ]
    },
    {
      "id": "batllo",
      "title": "カサ・バトリョ",
      "status": "not_started",
      "deadline": "2026-10-31",
      "relatedDayIds": [
        "d1226"
      ],
      "relatedScheduleItemIds": [
        "d1226-batllo"
      ],
      "actionUrl": "https://www.casabatllo.es/en/online-tickets/",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "2026-12-26 16:30枠の発売・年末営業を確認してから購入判断する。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-www-casabatllo-es-en-online-tickets"
      ]
    },
    {
      "id": "barcelona-cathedral",
      "title": "Barcelona大聖堂",
      "status": "not_started",
      "deadline": null,
      "relatedDayIds": [
        "d1230"
      ],
      "relatedScheduleItemIds": [
        "d1230-cathedral"
      ],
      "actionUrl": "https://catedralbcn.org/en/tourist-visit/",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "P06-R2ではomitted。旅程へ戻さず、代替発動時だけ公式情報を再確認する。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-catedralbcn-org-en-tourist-visit"
      ]
    },
    {
      "id": "montjuic",
      "title": "Montjuïc交通・施設",
      "status": "researching",
      "deadline": null,
      "relatedDayIds": [
        "d1227"
      ],
      "relatedScheduleItemIds": [
        "d1227-cable-miramar-castell",
        "d1227-montjuic-castle",
        "d1227-cable-castell-park"
      ],
      "actionUrl": null,
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "P06-R2では関連3項目をomitted。購入対象にしない。",
      "purchaseMode": "unknown",
      "sourceIds": []
    },
    {
      "id": "tarragona-train",
      "title": "Tarragona往復鉄道",
      "status": "not_started",
      "deadline": null,
      "relatedDayIds": [
        "d1228"
      ],
      "relatedScheduleItemIds": [
        "d1228-ave-out",
        "d1228-return"
      ],
      "actionUrl": "https://www.renfe.com/es/en",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "P06-R2ではTarragona往復をomitted。発売監視・購入を行わない。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-www-renfe-com-es-en"
      ]
    },
    {
      "id": "flamenco",
      "title": "フラメンコ",
      "status": "not_started",
      "deadline": null,
      "relatedDayIds": [
        "d1228"
      ],
      "relatedScheduleItemIds": [
        "d1228-flamenco"
      ],
      "actionUrl": null,
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "P06-R2ではomitted。会場未選定のため予約しない。",
      "purchaseMode": "unknown",
      "sourceIds": []
    },
    {
      "id": "montserrat-transport",
      "title": "Montserrat往復交通",
      "status": "not_started",
      "deadline": "2026-12-01",
      "relatedDayIds": [
        "d1229"
      ],
      "relatedScheduleItemIds": [
        "d1229-fgc-out",
        "d1229-aeri-up",
        "d1229-aeri-down",
        "d1229-fgc-return"
      ],
      "actionUrl": "https://www.montserratvisita.com/en/organize-the-visit/how-to-get-there",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "2026-12-29のFGC・Aeri・施設アクセスは発売／時刻表／運行公表待ち。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-www-montserratvisita-com-en-organize-the-visit-how-t"
      ]
    },
    {
      "id": "iryo-out",
      "title": "Barcelona→Madrid列車",
      "status": "not_started",
      "deadline": "2026-09-30",
      "relatedDayIds": [
        "d1230"
      ],
      "relatedScheduleItemIds": [
        "d1230-train-madrid"
      ],
      "actionUrl": "https://iryo.eu/en",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "2026-12-30の現行列車時刻はworking time。発売後に同時刻帯と変更条件を確認する。",
      "purchaseMode": "advance",
      "sourceIds": []
    },
    {
      "id": "prado",
      "title": "プラド美術館",
      "status": "not_started",
      "deadline": "2026-10-31",
      "relatedDayIds": [
        "d1231"
      ],
      "relatedScheduleItemIds": [
        "d1231-prado"
      ],
      "actionUrl": "https://www.museodelprado.es/en/visit-the-museum",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "12月31日の短縮営業に合う10:00枠を発売後に確認する。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-www-museodelprado-es-en-visit-the-museum"
      ]
    },
    {
      "id": "nye-dinner",
      "title": "大晦日ディナー",
      "status": "researching",
      "deadline": "2026-11-26",
      "relatedDayIds": [
        "d1231"
      ],
      "relatedScheduleItemIds": [],
      "actionUrl": null,
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "2026-12-31の早い夕食は店舗未確定。年末営業と取消条件の公表待ち。",
      "purchaseMode": "unknown",
      "sourceIds": []
    },
    {
      "id": "toledo-train",
      "title": "Toledo往復列車",
      "status": "not_started",
      "deadline": "2026-10-02",
      "relatedDayIds": [
        "d0102"
      ],
      "relatedScheduleItemIds": [
        "d0102-train-out",
        "d0102-train-return"
      ],
      "actionUrl": "https://www.renfe.com/es/en",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "2027-01-02の往復は発売待ち。現行便名・時刻はworking time。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-www-renfe-com-es-en"
      ]
    },
    {
      "id": "toledo-cathedral",
      "title": "トレド大聖堂",
      "status": "not_started",
      "deadline": "2026-12-01",
      "relatedDayIds": [
        "d0102"
      ],
      "relatedScheduleItemIds": [
        "d0102-cathedral"
      ],
      "actionUrl": "https://www.catedralprimada.es/en/",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "2027-01-02の入場枠・特別営業を再確認する。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-www-catedralprimada-es-en"
      ]
    },
    {
      "id": "santotome",
      "title": "サント・トメ教会",
      "status": "not_started",
      "deadline": "2026-12-01",
      "relatedDayIds": [
        "d0102"
      ],
      "relatedScheduleItemIds": [
        "d0102-santotome"
      ],
      "actionUrl": "https://www.santotome.org/",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "2027-01-02の営業・購入方法を再確認する。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-www-santotome-org"
      ]
    },
    {
      "id": "greco",
      "title": "エル・グレコ美術館",
      "status": "not_started",
      "deadline": "2026-12-01",
      "relatedDayIds": [
        "d0102"
      ],
      "relatedScheduleItemIds": [
        "d0102-greco"
      ],
      "actionUrl": "https://www.cultura.gob.es/mgreco/en/visita.html",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "2027-01-02の営業・入場方法を再確認する。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-www-cultura-gob-es-mgreco-en-visita-html"
      ]
    },
    {
      "id": "reinasofia",
      "title": "ソフィア王妃芸術センター",
      "status": "not_started",
      "deadline": "2026-10-31",
      "relatedDayIds": [
        "d0103"
      ],
      "relatedScheduleItemIds": [
        "d0103-reinasofia"
      ],
      "actionUrl": "https://www.museoreinasofia.es/en/visit",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "2027-01-03 10:00枠と日曜営業を発売後に確認する。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-www-museoreinasofia-es-en-visit"
      ]
    },
    {
      "id": "palace",
      "title": "マドリード王宮",
      "status": "not_started",
      "deadline": null,
      "relatedDayIds": [
        "d0103"
      ],
      "relatedScheduleItemIds": [
        "d0103-palace"
      ],
      "actionUrl": "https://tickets.patrimonionacional.es/en",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "P06-R2では内部見学をomitted。旅程へ戻さず公式行事による休館だけ記録する。",
      "purchaseMode": "advance",
      "sourceIds": [
        "source-tickets-patrimonionacional-es-en"
      ]
    },
    {
      "id": "iryo-back",
      "title": "Madrid→Barcelona列車",
      "status": "not_started",
      "deadline": "2026-10-03",
      "relatedDayIds": [
        "d0103"
      ],
      "relatedScheduleItemIds": [
        "d0103-train-barcelona"
      ],
      "actionUrl": "https://iryo.eu/en",
      "ticketUrl": null,
      "paymentStatus": "unknown",
      "cancellationDeadline": null,
      "publicNote": "2027-01-03の現行列車時刻はworking time。発売後に同時刻帯と変更条件を確認する。",
      "purchaseMode": "advance",
      "sourceIds": []
    }
  ],
  "preparationTasks": [
    {
      "id": "task-sagrada",
      "title": "サグラダ・ファミリアの入場枠を確認",
      "category": "予約・事前購入",
      "status": "blocked",
      "deadline": "2026-09-27",
      "ownerId": null,
      "priority": "最優先",
      "relatedDayIds": [
        "d1227"
      ],
      "bookingId": "sagrada",
      "actionUrl": "https://sagradafamilia.org/en/tickets",
      "completionNote": null,
      "blockedReason": "発売待ち",
      "informationNeeded": [
        "2026-12-27 10:30前後の塔付き公式枠",
        "変更・取消条件"
      ]
    },
    {
      "id": "task-trains",
      "title": "都市間・日帰り列車を確認",
      "category": "期限付きタスク",
      "status": "blocked",
      "deadline": "2026-09-28",
      "ownerId": null,
      "priority": "最優先",
      "relatedDayIds": [
        "d1228",
        "d1230",
        "d0102",
        "d0103"
      ],
      "bookingId": null,
      "actionUrl": "https://www.renfe.com/es/en",
      "completionNote": null,
      "blockedReason": "発売待ち",
      "informationNeeded": [
        "iryo往復とToledo往復の対象日発売",
        "運賃別変更・取消条件"
      ]
    },
    {
      "id": "task-hotels",
      "title": "未予約ホテル3滞在を比較・選定",
      "category": "予約・事前購入",
      "status": "not_started",
      "deadline": "2026-08-15",
      "ownerId": null,
      "priority": "高",
      "relatedDayIds": [
        "d1226",
        "d1230",
        "d1231",
        "d0101",
        "d0102",
        "d0103",
        "d0104"
      ],
      "bookingId": null,
      "actionUrl": null,
      "completionNote": null,
      "blockedReason": null,
      "informationNeeded": [
        "Barcelona前半・Madrid・Barcelona最終泊の立地評価",
        "大人3名の部屋構成・総額・取消条件",
        "各滞在の第1〜第3候補と代替"
      ]
    },
    {
      "id": "task-nye",
      "title": "大晦日ディナーを選定",
      "category": "予約・事前購入",
      "status": "blocked",
      "deadline": "2026-11-26",
      "ownerId": null,
      "priority": "高",
      "relatedDayIds": [
        "d1231"
      ],
      "bookingId": "nye-dinner",
      "actionUrl": null,
      "completionNote": null,
      "blockedReason": "2026年末営業・店舗未確定",
      "informationNeeded": [
        "18:15から利用できる営業中候補",
        "取消・no-show条件"
      ]
    },
    {
      "id": "task-hours",
      "title": "年末年始の営業情報を直前確認",
      "category": "出発24時間前",
      "status": "blocked",
      "deadline": "2026-12-15",
      "ownerId": null,
      "priority": "高",
      "relatedDayIds": [
        "d1231",
        "d0101"
      ],
      "bookingId": null,
      "actionUrl": null,
      "completionNote": null,
      "blockedReason": "2026/27年末年始情報の公表待ち",
      "informationNeeded": [
        "Sol警備・駅閉鎖",
        "施設・飲食店の特別営業"
      ]
    },
    {
      "id": "task-insurance",
      "title": "旅行保険を確認",
      "category": "通信・保険・緊急情報",
      "status": "blocked",
      "deadline": null,
      "ownerId": null,
      "priority": "中",
      "relatedDayIds": [],
      "bookingId": null,
      "actionUrl": null,
      "completionNote": null,
      "blockedReason": "未検討",
      "informationNeeded": [
        "実施条件または選択内容の確認"
      ]
    },
    {
      "id": "task-communication",
      "title": "通信手段を確認",
      "category": "通信・保険・緊急情報",
      "status": "blocked",
      "deadline": null,
      "ownerId": null,
      "priority": "中",
      "relatedDayIds": [],
      "bookingId": null,
      "actionUrl": null,
      "completionNote": null,
      "blockedReason": "未検討",
      "informationNeeded": [
        "実施条件または選択内容の確認"
      ]
    },
    {
      "id": "task-emergency",
      "title": "緊急連絡先を確認",
      "category": "通信・保険・緊急情報",
      "status": "blocked",
      "deadline": null,
      "ownerId": null,
      "priority": "高",
      "relatedDayIds": [],
      "bookingId": null,
      "actionUrl": null,
      "completionNote": null,
      "blockedReason": "未検討",
      "informationNeeded": [
        "実施条件または選択内容の確認"
      ]
    },
    {
      "id": "task-private-evidence",
      "title": "確定予約のredacted事実を一括確認",
      "category": "予約・事前購入",
      "status": "blocked",
      "deadline": "2026-09-25",
      "ownerId": "family",
      "priority": "最優先",
      "relatedDayIds": [
        "d1225",
        "d1226",
        "d0104",
        "d0105"
      ],
      "bookingId": "flight",
      "actionUrl": null,
      "completionNote": null,
      "blockedReason": "私的証拠待ち",
      "informationNeeded": [
        "航空券と購入済み列車／施設／飲食店の必要事実だけ",
        "ホテルは未予約のため証拠対象外。予約番号・QR・旅券・決済情報は不要"
      ]
    },
    {
      "id": "task-attraction-release",
      "title": "主要施設の発売・入場枠を期限順に確認",
      "category": "予約・事前購入",
      "status": "blocked",
      "deadline": "2026-09-27",
      "ownerId": "family",
      "priority": "最優先",
      "relatedDayIds": [
        "d1226",
        "d1227",
        "d1228",
        "d1229",
        "d1231",
        "d0102",
        "d0103"
      ],
      "bookingId": null,
      "actionUrl": "https://sagradafamilia.org/en/tickets",
      "completionNote": null,
      "blockedReason": "発売待ち",
      "informationNeeded": [
        "対象日の公式在庫",
        "変更・取消条件",
        "ticket access方法"
      ]
    },
    {
      "id": "task-restaurant-release",
      "title": "年末年始の店舗営業・予約受付を確認",
      "category": "予約・事前購入",
      "status": "blocked",
      "deadline": "2026-11-26",
      "ownerId": "family",
      "priority": "高",
      "relatedDayIds": [
        "d1227",
        "d1228",
        "d1229",
        "d1230",
        "d1231",
        "d0101"
      ],
      "bookingId": null,
      "actionUrl": "https://culleretes.com/",
      "completionNote": null,
      "blockedReason": "特別営業の公表待ち",
      "informationNeeded": [
        "対象日営業",
        "予約可否・no-show",
        "同料理役割fallback"
      ]
    },
    {
      "id": "task-sol-operations",
      "title": "2026/27 Puerta del Sol警備・交通を確認",
      "category": "期限付きタスク",
      "status": "blocked",
      "deadline": "2026-12-15",
      "ownerId": "family",
      "priority": "最優先",
      "relatedDayIds": [
        "d1231"
      ],
      "bookingId": null,
      "actionUrl": "https://www.esmadrid.com/en/whats-on/new-years-eve-party-puerta-sol",
      "completionNote": null,
      "blockedReason": "2026/27運用未公表",
      "informationNeeded": [
        "入口・収容・警備",
        "Sol駅閉鎖・徒歩帰路",
        "18:00 go/no-go条件"
      ]
    },
    {
      "id": "task-execution-packet",
      "title": "当日用リンクを端末で開けるか確認",
      "category": "出発24時間前",
      "status": "not_started",
      "deadline": "2026-12-24",
      "ownerId": "family",
      "priority": "高",
      "relatedDayIds": [
        "d1225",
        "d1226",
        "d1227",
        "d1228",
        "d1229",
        "d1230",
        "d1231",
        "d0101",
        "d0102",
        "d0103",
        "d0104",
        "d0105"
      ],
      "bookingId": null,
      "actionUrl": "today.html",
      "completionNote": null,
      "blockedReason": null,
      "informationNeeded": [
        "公式手続き・地図・交通リンク",
        "オフライン時の代替アクセス"
      ]
    }
  ],
  "packingItems": [
    {
      "id": "pack-passport",
      "title": "パスポート（残存期間確認）",
      "category": "書類・お金",
      "phase": "normal",
      "checklistPhases": [
        "normal",
        "home"
      ],
      "critical": true
    },
    {
      "id": "pack-tickets",
      "title": "航空券・ホテル・保険の控え",
      "category": "書類・お金",
      "phase": "normal",
      "checklistPhases": [
        "normal",
        "24h",
        "home"
      ],
      "critical": true
    },
    {
      "id": "pack-wallet",
      "title": "クレジットカード2枚以上",
      "category": "書類・お金",
      "phase": "normal",
      "checklistPhases": [
        "normal",
        "home"
      ],
      "critical": true
    },
    {
      "id": "pack-cash",
      "title": "少額のユーロ現金",
      "category": "書類・お金",
      "phase": "normal",
      "checklistPhases": [
        "normal"
      ],
      "critical": false
    },
    {
      "id": "pack-coat",
      "title": "防風できるコート／薄手ダウン",
      "category": "冬の街歩き",
      "phase": "normal",
      "checklistPhases": [
        "normal"
      ],
      "critical": false
    },
    {
      "id": "pack-layers",
      "title": "重ね着用ニット・保温インナー",
      "category": "冬の街歩き",
      "phase": "normal",
      "checklistPhases": [
        "normal"
      ],
      "critical": false
    },
    {
      "id": "pack-winter-accessories",
      "title": "手袋・マフラー・折り畳み傘",
      "category": "冬の街歩き",
      "phase": "normal",
      "checklistPhases": [
        "normal"
      ],
      "critical": false
    },
    {
      "id": "pack-shoes",
      "title": "滑りにくい歩き慣れた靴",
      "category": "冬の街歩き",
      "phase": "normal",
      "checklistPhases": [
        "normal"
      ],
      "critical": false
    },
    {
      "id": "pack-phone",
      "title": "スマホ・充電器・モバイルバッテリー",
      "category": "スマホ・移動",
      "phase": "normal",
      "checklistPhases": [
        "normal",
        "home"
      ],
      "critical": true
    },
    {
      "id": "pack-adapter",
      "title": "Cタイプ変換プラグ",
      "category": "スマホ・移動",
      "phase": "normal",
      "checklistPhases": [
        "normal"
      ],
      "critical": false
    },
    {
      "id": "pack-connectivity",
      "title": "eSIM／ローミング設定",
      "category": "スマホ・移動",
      "phase": "24h",
      "checklistPhases": [
        "24h"
      ],
      "critical": true
    },
    {
      "id": "pack-offline",
      "title": "オフライン地図・予約PDF",
      "category": "スマホ・移動",
      "phase": "24h",
      "checklistPhases": [
        "24h",
        "home"
      ],
      "critical": true
    },
    {
      "id": "pack-meds",
      "title": "常備薬・処方薬",
      "category": "健康・機内",
      "phase": "normal",
      "checklistPhases": [
        "normal"
      ],
      "critical": false
    },
    {
      "id": "pack-care",
      "title": "マスク・保湿用品",
      "category": "健康・機内",
      "phase": "normal",
      "checklistPhases": [
        "normal"
      ],
      "critical": false
    },
    {
      "id": "pack-transit-kit",
      "title": "乗継用の着替え・歯ブラシ",
      "category": "健康・機内",
      "phase": "normal",
      "checklistPhases": [
        "normal"
      ],
      "critical": false
    },
    {
      "id": "pack-checkin",
      "title": "オンラインチェックインと搭乗時刻を確認",
      "category": "出発24時間前",
      "phase": "24h",
      "checklistPhases": [
        "24h"
      ],
      "critical": true
    },
    {
      "id": "pack-home-lock",
      "title": "戸締まり・火元を確認",
      "category": "自宅出発時",
      "phase": "home",
      "checklistPhases": [
        "home"
      ],
      "critical": true
    }
  ],
  "packingLegacyMigration": {
    "legacyKey": "spain-trip-packing-v1",
    "canonicalKey": "spain-trip-prep-v2",
    "indexToItemId": [
      "pack-passport",
      "pack-tickets",
      "pack-wallet",
      "pack-cash",
      "pack-coat",
      "pack-layers",
      "pack-winter-accessories",
      "pack-shoes",
      "pack-phone",
      "pack-adapter",
      "pack-connectivity",
      "pack-offline",
      "pack-meds",
      "pack-care",
      "pack-transit-kit"
    ]
  },
  "planningDecisions": [
    {
      "id": "decision-montserrat-access",
      "title": "Montserratの登山交通",
      "relatedDayIds": [
        "d1229"
      ],
      "status": "provisional",
      "question": "AeriとCremalleraのどちらを使うか。",
      "options": [
        {
          "id": "aeri",
          "label": "Aeri",
          "description": "旧旅程で採用中のロープウェイ。",
          "pros": [
            "旧旅程に具体時刻あり"
          ],
          "cons": [],
          "timeImpact": null,
          "fatigueImpact": null,
          "mobilityImpact": null,
          "foodImpact": null,
          "weatherRisk": "運行条件を要確認",
          "bookingRisk": "未予約",
          "relatedScheduleItemIds": [
            "d1229-aeri-up",
            "d1229-aeri-down"
          ],
          "relatedPlaceIds": []
        },
        {
          "id": "cremallera",
          "label": "Cremallera",
          "description": "旧scheduleの比較候補。",
          "pros": [],
          "cons": [
            "所要・接続は未登録"
          ],
          "timeImpact": null,
          "fatigueImpact": null,
          "mobilityImpact": null,
          "foodImpact": null,
          "weatherRisk": "未評価",
          "bookingRisk": "未検討",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": []
        }
      ],
      "selectedOptionId": "aeri",
      "decisionReason": "現行案はAeri。最終決定理由は未登録。",
      "informationNeeded": [
        "運行時刻・接続・天候条件"
      ],
      "relatedScheduleItemIds": [
        "d1229-aeri-up",
        "d1229-aeri-down"
      ]
    },
    {
      "id": "decision-toledo-segovia",
      "title": "1/2の日帰り先",
      "relatedDayIds": [
        "d0102"
      ],
      "status": "provisional",
      "question": "Toledo単独案とSegovia比較案をどう扱うか。",
      "options": [
        {
          "id": "toledo",
          "label": "Toledo",
          "description": "現在の旅程案。",
          "pros": [
            "施設別予定あり"
          ],
          "cons": [
            "4施設で高負荷"
          ],
          "timeImpact": null,
          "fatigueImpact": null,
          "mobilityImpact": null,
          "foodImpact": null,
          "weatherRisk": null,
          "bookingRisk": null,
          "relatedScheduleItemIds": [
            "d0102-cathedral",
            "d0102-santotome",
            "d0102-greco",
            "d0102-santacruz"
          ],
          "relatedPlaceIds": []
        },
        {
          "id": "segovia",
          "label": "Segovia案",
          "description": "旧トップの比較候補。詳細未登録。",
          "pros": [],
          "cons": [
            "日程・移動・施設が未登録"
          ],
          "timeImpact": null,
          "fatigueImpact": null,
          "mobilityImpact": null,
          "foodImpact": null,
          "weatherRisk": null,
          "bookingRisk": null,
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": []
        }
      ],
      "selectedOptionId": "toledo",
      "decisionReason": "現行旅程はToledo。最終理由は未登録。",
      "informationNeeded": [
        "Segovia案の実行条件"
      ],
      "relatedScheduleItemIds": [
        "d0102-cathedral",
        "d0102-santotome",
        "d0102-greco",
        "d0102-santacruz"
      ]
    },
    {
      "id": "decision-jan3-main",
      "title": "1/3午前の主役",
      "relatedDayIds": [
        "d0103"
      ],
      "status": "decided",
      "question": "ソフィア王妃と王宮を移動日前にどう配分するか。",
      "options": [
        {
          "id": "reina",
          "label": "ソフィア王妃を主役",
          "description": "現代美術を優先。",
          "pros": [],
          "cons": [],
          "timeImpact": null,
          "fatigueImpact": null,
          "mobilityImpact": null,
          "foodImpact": null,
          "weatherRisk": null,
          "bookingRisk": null,
          "relatedScheduleItemIds": [
            "d0103-reinasofia"
          ],
          "relatedPlaceIds": []
        },
        {
          "id": "palace",
          "label": "王宮を主役",
          "description": "王宮内部見学を優先。",
          "pros": [],
          "cons": [],
          "timeImpact": null,
          "fatigueImpact": null,
          "mobilityImpact": null,
          "foodImpact": null,
          "weatherRisk": null,
          "bookingRisk": null,
          "relatedScheduleItemIds": [
            "d0103-palace"
          ],
          "relatedPlaceIds": []
        }
      ],
      "selectedOptionId": "reina",
      "decisionReason": "都市間移動日にAtocha近接の一館だけを置くと移動bufferと現代美術coverageを両立する。",
      "informationNeeded": [
        "予約枠・荷物預け・駅への移動時間"
      ],
      "relatedScheduleItemIds": [
        "d0103-reinasofia",
        "d0103-palace"
      ]
    },
    {
      "id": "decision-dec26-gaudi",
      "title": "12/26のガウディ配分",
      "relatedDayIds": [
        "d1226"
      ],
      "status": "decided",
      "question": "到着日に登録された多数の建築をどこまで回るか。",
      "options": [
        {
          "id": "dec26-gaudi-five",
          "label": "5作品を全て回る",
          "description": "現行の5 ScheduleItemを一日で全て回る比較案。採用状態は変更しない。",
          "pros": [
            "Gaudí作品の用途と年代差を一日で最大限比較できる。"
          ],
          "cons": [
            "到着日の疲労と移動量が非常に大きく、各作品の観察が浅くなる。"
          ],
          "timeImpact": "終日。遅延吸収余地がほぼない。",
          "fatigueImpact": "非常に高い。",
          "mobilityImpact": "高い。市内を複数エリア移動する。",
          "foodImpact": "十分な昼食・休憩を圧縮する。",
          "weatherRisk": "Park Güellは雨・風の影響を受ける。",
          "bookingRisk": "5施設の入場枠が連鎖し、1件の遅延が後続へ波及する。",
          "relatedScheduleItemIds": [
            "d1226-parkguell",
            "d1226-mila",
            "d1226-batllo",
            "d1226-guell-palace",
            "d1226-casa-vicens"
          ],
          "relatedPlaceIds": [
            "parkguell",
            "mila",
            "batllo",
            "guell-palace",
            "casa-vicens"
          ]
        },
        {
          "id": "dec26-gaudi-core-three",
          "label": "Park Güell＋Casa Milà＋Casa Batlló",
          "description": "規模と用途が異なる3作品へ絞る比較案。",
          "pros": [
            "住宅地、集合住宅新築、既存住宅改修を比較できる。"
          ],
          "cons": [
            "3件でも到着日として長く、グエル邸と初期作を見送る。"
          ],
          "timeImpact": "長い。移動遅延の余地は限定的。",
          "fatigueImpact": "高い。",
          "mobilityImpact": "中〜高。Park GüellからPasseig de Gràciaへ移動する。",
          "foodImpact": "昼食時間が狭くなりやすい。",
          "weatherRisk": "Park Güellの屋外区間は天候依存。",
          "bookingRisk": "3施設の予約枠を連結する必要がある。",
          "relatedScheduleItemIds": [
            "d1226-parkguell",
            "d1226-mila",
            "d1226-batllo"
          ],
          "relatedPlaceIds": [
            "parkguell",
            "mila",
            "batllo"
          ]
        },
        {
          "id": "dec26-gaudi-two-houses",
          "label": "Casa Milà＋Casa Batlló",
          "description": "Passeig de Gràciaの2住宅に集中する比較案。",
          "pros": [
            "新築集合住宅と既存住宅改修を同じ街区で比較できる。",
            "移動を抑えながら内部観察時間を確保しやすい。"
          ],
          "cons": [
            "Park Güellの地形・都市スケールと初期作品を見送る。"
          ],
          "timeImpact": "中程度。遅延・休憩bufferを残しやすい。",
          "fatigueImpact": "中程度。",
          "mobilityImpact": "低い。グラシア通り／不調和の街区内で比較する。",
          "foodImpact": "昼食と休憩を確保しやすい。",
          "weatherRisk": "屋内中心で影響は低い。",
          "bookingRisk": "2施設の時間指定と変更条件を要確認。",
          "relatedScheduleItemIds": [
            "d1226-mila",
            "d1226-batllo"
          ],
          "relatedPlaceIds": [
            "mila",
            "batllo"
          ]
        },
        {
          "id": "dec26-gaudi-one-interior",
          "label": "内部見学を1作品に絞る",
          "description": "到着日の疲労を優先し、代表的な内部見学1件だけを選ぶ比較案。",
          "pros": [
            "休憩・食事bufferが最も大きい。",
            "一作品の構造・光・動線を浅くせず観察できる。"
          ],
          "cons": [
            "作品間比較は翌日のSagrada Famíliaと記事学習へ委ねる。",
            "どの1件を選ぶか追加判断が必要。"
          ],
          "timeImpact": "短い。到着遅延を吸収しやすい。",
          "fatigueImpact": "低い。",
          "mobilityImpact": "低い。選択した1エリアだけ移動する。",
          "foodImpact": "適切な昼食・休憩を最も確保しやすい。",
          "weatherRisk": "選択施設により異なるが屋内中心なら低い。",
          "bookingRisk": "選択した1施設の入場枠だけを確認する。",
          "relatedScheduleItemIds": [
            "d1226-mila"
          ],
          "relatedPlaceIds": [
            "mila"
          ]
        }
      ],
      "selectedOptionId": "dec26-gaudi-two-houses",
      "decisionReason": "16案の全体比較で到着日を同一街区の2住宅へ限定し、休憩と90分遅延時の削減順を確保した。soft preferenceは採点に使っていない。",
      "informationNeeded": [
        "到着便・荷物・ホテル到着後の実疲労と出発可能時刻",
        "5施設の2026-12-26公式入場枠とチケット条件",
        "施設間の現実的な移動時間",
        "グエル邸の2026-12-26公式営業確定（航空・グエル邸の高優先度別バックログ）",
        "「内部見学1作品」を選ぶ場合の優先作品"
      ],
      "relatedScheduleItemIds": [
        "d1226-parkguell",
        "d1226-mila",
        "d1226-batllo",
        "d1226-guell-palace",
        "d1226-casa-vicens"
      ]
    },
    {
      "id": "decision-nye-flow",
      "title": "大晦日の動線",
      "relatedDayIds": [
        "d1231"
      ],
      "status": "decided",
      "question": "日中観光・夕食・Solの移動と休憩をどう組むか。",
      "options": [
        {
          "id": "nye-prado-rest-sol",
          "label": "Prado＋ホテル休憩＋Sol",
          "description": "短縮営業のPrado後に軽い街歩き、ホテル休憩、早い夕食、Solを順に置く。",
          "pros": [
            "主役と深夜行動の間に休憩を確保。"
          ],
          "cons": [
            "Solの警備・天候は直前情報依存。"
          ],
          "timeImpact": "10:00〜24:00、16:30〜18:15休憩。",
          "fatigueImpact": "中。",
          "mobilityImpact": "Prado地区とSolの二cluster。",
          "foodImpact": "早い夕食を保護。",
          "weatherRisk": "Solは高い。",
          "bookingRisk": "Prado・夕食・Sol規制を再確認。",
          "relatedScheduleItemIds": [
            "d1231-prado",
            "d1231-rest",
            "d1231-early-dinner",
            "d1231-countdown"
          ],
          "relatedPlaceIds": [
            "prado",
            "nye"
          ]
        },
        {
          "id": "nye-hotel-fallback",
          "label": "ホテル年越しへ切替",
          "description": "強雨・体調不良・Sol規制時の撤退案。",
          "pros": [
            "最も変更耐性が高い。"
          ],
          "cons": [
            "現地年越し体験を見送る。"
          ],
          "timeImpact": "夕食後はホテル。",
          "fatigueImpact": "低。",
          "mobilityImpact": "低。",
          "foodImpact": "持帰りでも成立。",
          "weatherRisk": "低。",
          "bookingRisk": "低。",
          "relatedScheduleItemIds": [
            "d1231-rest",
            "d1231-early-dinner"
          ],
          "relatedPlaceIds": []
        }
      ],
      "selectedOptionId": "nye-prado-rest-sol",
      "decisionReason": "Solを主案にするが、雨・疲労・警備規制時はホテル案へ即時切替できる二層設計。",
      "informationNeeded": [
        "夕食場所・規制・入場時刻・休憩場所"
      ],
      "relatedScheduleItemIds": [
        "d1231-prado",
        "d1231-san-jeronimo",
        "d1231-cibeles",
        "d1231-alcala",
        "d1231-retiro",
        "d1231-san-silvestre",
        "d1231-countdown"
      ]
    },
    {
      "id": "decision-bcn-non-gaudi-culture",
      "title": "Barcelonaの非Gaudí文化枠",
      "relatedDayIds": [],
      "status": "decided",
      "question": "Gaudí以外の文化を一つ追加するなら何を選ぶか。",
      "options": [
        {
          "id": "bcn-culture-palau-musica",
          "label": "カタルーニャ音楽堂",
          "description": "Modernismeと音楽文化を旧市街で比較する。",
          "pros": [
            "Gaudí以外のModernisme軸が加わる。",
            "比較的短時間に収めやすい。"
          ],
          "cons": [
            "見学枠と公演利用を分けて確認する必要がある。"
          ],
          "timeImpact": "60〜90分。",
          "fatigueImpact": "低い。",
          "mobilityImpact": "旧市街内の短い移動。",
          "foodImpact": "食事枠への影響は小さい。",
          "weatherRisk": "屋内中心で低い。",
          "bookingRisk": "見学枠・公演日・年末営業を要確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "palau-musica"
          ]
        },
        {
          "id": "bcn-culture-picasso",
          "label": "ピカソ美術館",
          "description": "Picasso初期とBarcelonaの関係をEl Bornで見る。",
          "pros": [
            "美術と都市史の非建築軸が加わる。",
            "El Born街歩きと接続しやすい。"
          ],
          "cons": [
            "人気枠の予約と館内滞在が必要。"
          ],
          "timeImpact": "90〜120分。",
          "fatigueImpact": "中程度。",
          "mobilityImpact": "El Born内。混雑時の待機を見込む。",
          "foodImpact": "食事枠への影響は中立。",
          "weatherRisk": "屋内中心で低い。",
          "bookingRisk": "入場枠と年末営業を要確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "picasso-museum"
          ]
        },
        {
          "id": "bcn-culture-mnac",
          "label": "MNAC",
          "description": "Montjuïcでカタルーニャ美術の長い時間軸を見る。",
          "pros": [
            "地域美術を広く比較できる。",
            "Montjuïcの景観と組み合わせられる。"
          ],
          "cons": [
            "移動と館内滞在が長く、既存Montjuïc予定と競合する。"
          ],
          "timeImpact": "120〜180分＋移動。",
          "fatigueImpact": "高い。",
          "mobilityImpact": "Montjuïcの高低差と移動が大きい。",
          "foodImpact": "昼食・休憩を圧縮しやすい。",
          "weatherRisk": "アプローチは雨・風の影響を受ける。",
          "bookingRisk": "旅行日の入場条件は未確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "mnac",
            "montjuic"
          ]
        },
        {
          "id": "bcn-culture-none",
          "label": "追加なし",
          "description": "既存Gaudí・歴史・街歩きに集中する。",
          "pros": [
            "時間・体力・食事bufferを最大化する。"
          ],
          "cons": [
            "非Gaudí美術／Modernismeの比較軸が弱くなる。"
          ],
          "timeImpact": "追加0分。",
          "fatigueImpact": "低い。",
          "mobilityImpact": "追加移動なし。",
          "foodImpact": "食事bufferを確保できる。",
          "weatherRisk": "追加リスクなし。",
          "bookingRisk": "追加予約なし。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": []
        }
      ],
      "selectedOptionId": "bcn-culture-palau-musica",
      "decisionReason": "Tarragonaを外した市内clusterでGaudí以外のModernismeと雨天耐性を補う。",
      "informationNeeded": [
        "各施設の2026/27年末営業と入場枠",
        "家族の美術・音楽・建築への関心順位",
        "既存日程へ追加せず置換する場合の対象"
      ],
      "relatedScheduleItemIds": []
    },
    {
      "id": "decision-bcn-traditional-catalan-meal",
      "title": "伝統的カタルーニャ料理",
      "relatedDayIds": [],
      "status": "decided",
      "question": "冬・クリスマスを含む伝統料理をどこで一度経験するか。",
      "options": [
        {
          "id": "bcn-traditional-culleretes",
          "label": "Can Culleretes",
          "description": "旧市街の歴史的店舗で冬・家庭料理を比較する。",
          "pros": [
            "escudella、canelons、botifarra等の役割を一店で確認しやすい。"
          ],
          "cons": [
            "重い食事で、休日営業と予約を要確認。"
          ],
          "timeImpact": "中〜長。",
          "fatigueImpact": "中〜高。",
          "mobilityImpact": "旧市街内。",
          "foodImpact": "しっかりした一食になり他の重い料理と競合する。",
          "weatherRisk": "屋内で低い。",
          "bookingRisk": "年末営業・メニュー・予約条件が未確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "can-culleretes"
          ]
        },
        {
          "id": "bcn-traditional-7-portes",
          "label": "7 Portes",
          "description": "伝統料理と魚介・米／麺の両方を比較する。",
          "pros": [
            "一店で伝統枠と魚介枠を兼ねられる。"
          ],
          "cons": [
            "両Decisionが同じ店に集中し、食事が長く高価格になりやすい。"
          ],
          "timeImpact": "長い。",
          "fatigueImpact": "高い。",
          "mobilityImpact": "El Born／Port Vell側。",
          "foodImpact": "魚介Decisionと重複する。",
          "weatherRisk": "屋内で低い。",
          "bookingRisk": "予約・休日営業・提供メニューを要確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "restaurant-7-portes"
          ]
        },
        {
          "id": "bcn-traditional-cal-boter",
          "label": "Cal Boter",
          "description": "Gràciaで家庭的な伝統料理を比較する。",
          "pros": [
            "地域の食堂として比較的カジュアル。"
          ],
          "cons": [
            "旅程エリア次第で迂回になり、日曜・休日営業が不確実。"
          ],
          "timeImpact": "標準。",
          "fatigueImpact": "中程度。",
          "mobilityImpact": "Gràciaへの動線次第。",
          "foodImpact": "しっかりした食事。",
          "weatherRisk": "屋内で低い。",
          "bookingRisk": "曜日・年末営業・予約条件を要確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "cal-boter"
          ]
        },
        {
          "id": "bcn-traditional-none",
          "label": "伝統料理の予約店を置かない",
          "description": "市場・バル・既存食事枠で柔軟に選ぶ。",
          "pros": [
            "予約と重い食事を増やさない。"
          ],
          "cons": [
            "冬・クリスマス料理を食べ逃す可能性がある。"
          ],
          "timeImpact": "追加固定時間なし。",
          "fatigueImpact": "低い。",
          "mobilityImpact": "追加移動なし。",
          "foodImpact": "柔軟性が高い。",
          "weatherRisk": "追加リスクなし。",
          "bookingRisk": "追加予約なし。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": []
        }
      ],
      "selectedOptionId": "bcn-traditional-culleretes",
      "decisionReason": "Can Culleretesを通常営業の日曜昼13:45へ置き、満席時は7 Portesで同じ伝統料理役割を維持する。",
      "informationNeeded": [
        "2026/27年末営業",
        "escudella・canelons等の旅行日提供",
        "予約取消条件",
        "重い料理を置ける食事枠"
      ],
      "relatedScheduleItemIds": []
    },
    {
      "id": "decision-bcn-seafood-rice-meal",
      "title": "魚介・米／麺料理",
      "relatedDayIds": [],
      "status": "decided",
      "question": "Barcelonaで魚介の米料理またはフィデウアを一度食べるならどこか。",
      "options": [
        {
          "id": "bcn-seafood-7-portes",
          "label": "7 Portes",
          "description": "歴史的店舗で米／麺と伝統料理を兼ねる。",
          "pros": [
            "fideuàと広い魚介を比較できる。"
          ],
          "cons": [
            "伝統料理Decisionと重なり、長時間・高価格。"
          ],
          "timeImpact": "長い。",
          "fatigueImpact": "高い。",
          "mobilityImpact": "El Born／Port Vell側。",
          "foodImpact": "重い一食で前後を軽くする必要がある。",
          "weatherRisk": "屋内で低い。",
          "bookingRisk": "予約・休日営業・提供時間を要確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "restaurant-7-portes"
          ]
        },
        {
          "id": "bcn-seafood-can-sole",
          "label": "Can Solé",
          "description": "Barcelonetaで魚介・米／麺に集中する。",
          "pros": [
            "海辺の魚介料理へ役割を集中できる。"
          ],
          "cons": [
            "Barcelonetaへの移動、価格、予約負荷がある。"
          ],
          "timeImpact": "長い。",
          "fatigueImpact": "高い。",
          "mobilityImpact": "Barcelonetaへ移動する。",
          "foodImpact": "重い一食。",
          "weatherRisk": "屋内だが海辺移動は天候影響。",
          "bookingRisk": "予約・年末営業・米料理条件を要確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "can-sole"
          ]
        },
        {
          "id": "bcn-seafood-none",
          "label": "専用の魚介・米／麺食を置かない",
          "description": "既存食事枠で軽い魚介を選ぶ。",
          "pros": [
            "重い食事と予約を増やさない。"
          ],
          "cons": [
            "Barcelonaの米／麺魚介を食べ逃す可能性がある。"
          ],
          "timeImpact": "追加固定時間なし。",
          "fatigueImpact": "低い。",
          "mobilityImpact": "追加移動なし。",
          "foodImpact": "軽さを保てる。",
          "weatherRisk": "追加リスクなし。",
          "bookingRisk": "追加予約なし。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": []
        }
      ],
      "selectedOptionId": "bcn-seafood-can-sole",
      "decisionReason": "Can Soléを火曜通常夕食開始の20:00へ置き、満席時は7 Portesで魚介・米料理役割を維持する。",
      "informationNeeded": [
        "旅行日の米／麺メニュー",
        "予約と最低人数条件",
        "伝統料理Decisionとの重複を許容するか"
      ],
      "relatedScheduleItemIds": []
    },
    {
      "id": "decision-bcn-market-breakfast",
      "title": "市場朝食",
      "relatedDayIds": [
        "d1230"
      ],
      "status": "decided",
      "question": "12/30の市場枠で朝食まで取るか、歩くだけにするか。",
      "options": [
        {
          "id": "bcn-market-el-quim",
          "label": "El Quim de la Boqueria",
          "description": "既存Boqueria ScheduleItemに接続する市場朝食。",
          "pros": [
            "既存動線を変えず市場の食体験を追加できる。"
          ],
          "cons": [
            "行列で列車前の時間を圧迫する可能性。"
          ],
          "timeImpact": "短〜標準、行列で延長。",
          "fatigueImpact": "低〜中。",
          "mobilityImpact": "既存ボケリア動線上。",
          "foodImpact": "朝食役割を満たす。",
          "weatherRisk": "屋内市場で低い。",
          "bookingRisk": "予約なし。市場・個店営業と行列を要確認。",
          "relatedScheduleItemIds": [
            "d1230-boqueria"
          ],
          "relatedPlaceIds": [
            "boqueria",
            "el-quim-boqueria"
          ]
        },
        {
          "id": "bcn-market-bar-joan",
          "label": "Bar Joan",
          "description": "Santa Caterinaへ短く迂回する市場朝食代替。",
          "pros": [
            "比較的短時間・低価格寄り。"
          ],
          "cons": [
            "既存Boqueriaから外れ、個店・市場休日が不確実。"
          ],
          "timeImpact": "短いが迂回を含む。",
          "fatigueImpact": "低い。",
          "mobilityImpact": "Santa Caterinaへの迂回。",
          "foodImpact": "軽食として調整しやすい。",
          "weatherRisk": "屋内市場で低い。",
          "bookingRisk": "予約なし。市場・個店営業を要確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "santa-caterina-market",
            "bar-joan-santa-caterina"
          ]
        },
        {
          "id": "bcn-market-walk-only",
          "label": "市場は歩くだけ",
          "description": "食事は別枠へ残し、市場観察だけにする。",
          "pros": [
            "時間超過リスクが最小。"
          ],
          "cons": [
            "市場の朝食文化を経験しない。"
          ],
          "timeImpact": "短い。",
          "fatigueImpact": "低い。",
          "mobilityImpact": "既存動線のみ。",
          "foodImpact": "朝食を別途確保する必要がある。",
          "weatherRisk": "屋内中心。",
          "bookingRisk": "予約なし。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "boqueria"
          ]
        }
      ],
      "selectedOptionId": "bcn-market-el-quim",
      "decisionReason": "El Quimを水曜通常営業時間内の08:30に置き、行列20分超ならBar Joanへ切替する。",
      "informationNeeded": [
        "12/30のBoqueria・El Quim営業",
        "列車・次予定までの許容待ち時間",
        "Santa Caterinaへ迂回する余裕"
      ],
      "relatedScheduleItemIds": [
        "d1230-boqueria"
      ]
    },
    {
      "id": "decision-bcn-walk-in-bar",
      "title": "予約なしの有名バル",
      "relatedDayIds": [],
      "status": "decided",
      "question": "軽いタパスとバル文化をどこで試すか。",
      "options": [
        {
          "id": "bcn-bar-xampanyet",
          "label": "El Xampanyet",
          "description": "El Bornでカヴァ／ベルモットと保存魚を比較する。",
          "pros": [
            "場所候補やPicassoと同エリア。",
            "軽く短時間にできる。"
          ],
          "cons": [
            "混雑・立席・休日営業リスク。"
          ],
          "timeImpact": "短いが行列で延長。",
          "fatigueImpact": "低〜中。",
          "mobilityImpact": "El Born内。",
          "foodImpact": "軽い間食。飲酒しない選択も可能。",
          "weatherRisk": "屋内で低い。",
          "bookingRisk": "予約なし。営業と混雑を要確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "el-xampanyet"
          ]
        },
        {
          "id": "bcn-bar-quimet",
          "label": "Quimet & Quimet",
          "description": "Poble-secでmontaditosと保存食を比較する。",
          "pros": [
            "Montjuïc後のエリア相性がある。"
          ],
          "cons": [
            "立ち飲み、家族の快適性、曜日営業が不確実。"
          ],
          "timeImpact": "短い。",
          "fatigueImpact": "中程度。",
          "mobilityImpact": "Poble-secへ移動。",
          "foodImpact": "軽い間食。",
          "weatherRisk": "屋内で低い。",
          "bookingRisk": "予約条件・営業を要確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "quimet-quimet"
          ]
        },
        {
          "id": "bcn-bar-cova",
          "label": "La Cova Fumada",
          "description": "Barcelonetaでボンバと海辺の酒場文化を試す。",
          "pros": [
            "Barcelona固有のボンバを具体的に試せる。"
          ],
          "cons": [
            "営業時間が短く、行列・移動がある。"
          ],
          "timeImpact": "短いが待ち時間不確実。",
          "fatigueImpact": "中程度。",
          "mobilityImpact": "Barcelonetaへ移動。",
          "foodImpact": "中程度の軽食。",
          "weatherRisk": "海辺移動は天候影響。",
          "bookingRisk": "予約なし。営業時間と支払条件を要確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "la-cova-fumada"
          ]
        },
        {
          "id": "bcn-bar-none",
          "label": "予約なしバルを追加しない",
          "description": "既存食事枠と休憩を優先する。",
          "pros": [
            "混雑・待機・飲酒前提を避けられる。"
          ],
          "cons": [
            "バル文化と軽い保存魚を経験しない。"
          ],
          "timeImpact": "追加0分。",
          "fatigueImpact": "低い。",
          "mobilityImpact": "追加移動なし。",
          "foodImpact": "食事bufferを保つ。",
          "weatherRisk": "追加リスクなし。",
          "bookingRisk": "追加予約なし。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": []
        }
      ],
      "selectedOptionId": "bcn-bar-xampanyet",
      "decisionReason": "El Xampanyetを月曜開店時刻19:00のon-site candidateとし、満席時はLa Plataへ切替する。",
      "informationNeeded": [
        "各店の旅行日営業",
        "行列許容時間",
        "立席・未成年同伴・飲酒しない利用の快適性"
      ],
      "relatedScheduleItemIds": []
    },
    {
      "id": "decision-bcn-special-meal",
      "title": "特別な一食",
      "relatedDayIds": [],
      "status": "decided",
      "question": "伝統料理とは別に現代Barcelonaの一食を置くか。",
      "options": [
        {
          "id": "bcn-special-besta",
          "label": "Besta",
          "description": "CataloniaとGaliciaを結ぶ現代魚介料理。",
          "pros": [
            "現代料理と魚介の新しい解釈を比較できる。"
          ],
          "cons": [
            "高価格・長時間・予約前提。伝統料理の代替ではない。"
          ],
          "timeImpact": "長い。",
          "fatigueImpact": "中〜高。",
          "mobilityImpact": "Eixample／Aribau。",
          "foodImpact": "一食を特別枠として占有する。",
          "weatherRisk": "屋内で低い。",
          "bookingRisk": "予約・休日営業・家族条件を要確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "besta"
          ]
        },
        {
          "id": "bcn-special-dos-pebrots",
          "label": "Dos Pebrots",
          "description": "地中海料理史の再解釈を比較する。",
          "pros": [
            "食文化を歴史から考える体験になる。"
          ],
          "cons": [
            "年末休業リスクが高く、specific Dishは未確定。"
          ],
          "timeImpact": "長い。",
          "fatigueImpact": "中〜高。",
          "mobilityImpact": "Raval。",
          "foodImpact": "一食を特別枠として占有する。",
          "weatherRisk": "屋内で低い。",
          "bookingRisk": "予約・2026/27休業を要確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "dos-pebrots"
          ]
        },
        {
          "id": "bcn-special-fonda-balmes",
          "label": "Fonda Balmes",
          "description": "現代的なカタルーニャ料理を比較する。",
          "pros": [
            "伝統と現在の橋渡しになる。"
          ],
          "cons": [
            "第三者評価・年末営業・価格を再確認する必要。"
          ],
          "timeImpact": "長い。",
          "fatigueImpact": "中〜高。",
          "mobilityImpact": "Eixample／Balmes。",
          "foodImpact": "一食を特別枠として占有する。",
          "weatherRisk": "屋内で低い。",
          "bookingRisk": "予約・休日営業を要確認。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": [
            "fonda-balmes"
          ]
        },
        {
          "id": "bcn-special-none",
          "label": "特別食を追加しない",
          "description": "伝統・魚介・市場の基本役割へ集中する。",
          "pros": [
            "予算・時間・予約負荷を抑える。"
          ],
          "cons": [
            "現代Barcelona料理の比較軸を見送る。"
          ],
          "timeImpact": "追加固定時間なし。",
          "fatigueImpact": "低い。",
          "mobilityImpact": "追加移動なし。",
          "foodImpact": "食事の柔軟性を保つ。",
          "weatherRisk": "追加リスクなし。",
          "bookingRisk": "追加予約なし。",
          "relatedScheduleItemIds": [],
          "relatedPlaceIds": []
        }
      ],
      "selectedOptionId": "bcn-special-none",
      "decisionReason": "伝統・魚介の基礎役割と休憩を守り、特別食の追加予約拘束を置かない。",
      "informationNeeded": [
        "旅行日の営業・メニュー・価格",
        "予約取消条件",
        "伝統料理または魚介枠と両立する予算・時間"
      ],
      "relatedScheduleItemIds": []
    }
  ],
  "learningBlockTypes": [
    "paragraph",
    "text",
    "key-points",
    "list",
    "summary",
    "callout",
    "term-definition",
    "figure",
    "comparison",
    "timeline",
    "onsite-checklist"
  ],
  "railGlossary": [
    {
      "term": "AVE",
      "definition": "スペイン国鉄Renfeの高速列車。旧scheduleメモを移行。"
    },
    {
      "term": "Avant",
      "definition": "中距離高速列車。旧scheduleメモを移行。"
    },
    {
      "term": "Rodalies / Cercanías",
      "definition": "近郊列車。旧scheduleメモを移行。"
    },
    {
      "term": "FGC",
      "definition": "カタルーニャ公営鉄道。旧scheduleメモを移行。"
    }
  ],
  "expenses": [],
  "memories": [],
  "enums": {
    "inclusionStatus": [
      "adopted",
      "provisional",
      "on_site_candidate",
      "omitted",
      "undecided"
    ],
    "planningStatus": [
      "confirmed",
      "draft",
      "needs_information"
    ],
    "timeConstraint": [
      "fixed",
      "window",
      "flexible"
    ],
    "bookingRequirement": [
      "required",
      "recommended",
      "not_required",
      "unknown"
    ],
    "bookingStatus": [
      "not_started",
      "researching",
      "held",
      "confirmed",
      "cancelled"
    ],
    "purchaseMode": [
      "advance",
      "on_site",
      "either",
      "not_applicable",
      "unknown"
    ],
    "paymentStatus": [
      "unpaid",
      "paid",
      "pay_on_site",
      "refunded",
      "not_applicable",
      "unknown"
    ],
    "taskStatus": [
      "not_started",
      "in_progress",
      "blocked",
      "done"
    ],
    "decisionStatus": [
      "undecided",
      "comparing",
      "provisional",
      "decided"
    ],
    "timingKind": [
      "interval",
      "point",
      "window",
      "untimed"
    ],
    "timingConfidence": [
      "confirmed",
      "provisional",
      "unknown"
    ],
    "dishCategory": [
      "tapas",
      "rice",
      "seafood",
      "meat",
      "stew",
      "sweet",
      "drink",
      "other"
    ],
    "mealType": [
      "breakfast",
      "lunch",
      "dinner",
      "snack",
      "bar"
    ],
    "venueType": [
      "restaurant",
      "bar",
      "market",
      "cafe",
      "bakery",
      "food_hall",
      "other"
    ],
    "heaviness": [
      "light",
      "medium",
      "hearty",
      "varies",
      "unknown"
    ],
    "pace": [
      "quick",
      "standard",
      "long",
      "varies",
      "unknown"
    ],
    "priceBand": [
      "low",
      "mid",
      "high",
      "special",
      "unknown"
    ],
    "walkInSuitability": [
      "good",
      "possible",
      "poor",
      "unknown"
    ],
    "visitInfoStatus": [
      "verified",
      "provisional",
      "unverified"
    ],
    "tripDateWindowStatus": [
      "published",
      "provisional",
      "unknown"
    ]
  },
  "statusLabels": {
    "inclusion": {
      "adopted": "旅程に採用",
      "provisional": "暫定採用",
      "on_site_candidate": "現地判断候補",
      "omitted": "意図的に見送り",
      "undecided": "未判断"
    },
    "planning": {
      "confirmed": "内容確定",
      "draft": "案として登録",
      "needs_information": "情報不足"
    },
    "timeConstraint": {
      "fixed": "時刻拘束あり",
      "window": "時間帯あり",
      "flexible": "時間調整可能"
    },
    "bookingRequirement": {
      "required": "予約必須",
      "recommended": "予約推奨",
      "not_required": "予約不要",
      "unknown": "予約要否 未確認"
    },
    "booking": {
      "not_started": "未着手",
      "researching": "調査中",
      "held": "仮押さえ",
      "confirmed": "予約確定",
      "cancelled": "取消済み"
    },
    "purchaseMode": {
      "advance": "事前購入",
      "on_site": "現地購入",
      "either": "事前・現地どちらも可",
      "not_applicable": "購入対象外",
      "unknown": "購入方法 未確認"
    },
    "payment": {
      "unpaid": "未払い",
      "paid": "支払済み",
      "pay_on_site": "現地払い",
      "refunded": "返金済み",
      "not_applicable": "支払対象外",
      "unknown": "支払状態 未確認"
    },
    "task": {
      "not_started": "未着手",
      "in_progress": "進行中",
      "blocked": "要確認・保留",
      "done": "完了"
    },
    "decision": {
      "undecided": "未判断",
      "comparing": "比較中",
      "provisional": "仮採用",
      "decided": "決定"
    },
    "timingConfidence": {
      "confirmed": "確認済み",
      "provisional": "暫定",
      "unknown": "未確認"
    },
    "timingKind": {
      "interval": "時間区間",
      "point": "時点予定",
      "window": "時間帯内の予定",
      "untimed": "時刻未登録"
    },
    "visitInfoStatus": {
      "verified": "確認済み",
      "provisional": "暫定情報",
      "unverified": "未確認"
    },
    "tripDateWindowStatus": {
      "published": "公表済み",
      "provisional": "暫定情報",
      "unknown": "未確認"
    }
  },
  "statusTones": {
    "inclusion": {
      "adopted": "success",
      "provisional": "info",
      "on_site_candidate": "info",
      "omitted": "muted",
      "undecided": "warning"
    },
    "planning": {
      "confirmed": "success",
      "draft": "info",
      "needs_information": "warning"
    },
    "timeConstraint": {
      "fixed": "fixed",
      "window": "info",
      "flexible": "neutral"
    },
    "bookingRequirement": {
      "required": "warning",
      "recommended": "info",
      "not_required": "neutral",
      "unknown": "warning"
    },
    "booking": {
      "not_started": "neutral",
      "researching": "info",
      "held": "info",
      "confirmed": "success",
      "cancelled": "muted"
    },
    "purchaseMode": {
      "advance": "info",
      "on_site": "info",
      "either": "neutral",
      "not_applicable": "neutral",
      "unknown": "warning"
    },
    "payment": {
      "unpaid": "warning",
      "paid": "success",
      "pay_on_site": "info",
      "refunded": "muted",
      "not_applicable": "neutral",
      "unknown": "warning"
    },
    "task": {
      "not_started": "neutral",
      "in_progress": "info",
      "blocked": "warning",
      "done": "success"
    },
    "decision": {
      "undecided": "warning",
      "comparing": "info",
      "provisional": "info",
      "decided": "success"
    },
    "timingConfidence": {
      "confirmed": "success",
      "provisional": "info",
      "unknown": "warning"
    }
  },
  "dishes": [
    {
      "id": "dish-jamon",
      "nameJa": "生ハム",
      "nameLocal": null,
      "cityIds": [],
      "category": "meat",
      "importance": "unknown",
      "inclusionStatus": "undecided",
      "whyTry": null,
      "mealTypes": [],
      "tags": [],
      "seasonality": null,
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-internal-legacy-prep-food"
      ]
    },
    {
      "id": "dish-tortilla",
      "nameJa": "トルティージャ",
      "nameLocal": "Tortilla española",
      "cityIds": [],
      "category": "tapas",
      "importance": "medium",
      "inclusionStatus": "undecided",
      "whyTry": "Madrid最終日の移動前など、煮込みや揚げ物が重い時の軽めの逃げ道。",
      "mealTypes": [
        "breakfast",
        "lunch",
        "snack"
      ],
      "tags": [
        "shared",
        "light-option",
        "easy-to-share"
      ],
      "seasonality": null,
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-internal-legacy-prep-food",
        "source-mad-learn-madrid-food"
      ]
    },
    {
      "id": "dish-croqueta",
      "nameJa": "クロケタ",
      "nameLocal": null,
      "cityIds": [],
      "category": "tapas",
      "importance": "unknown",
      "inclusionStatus": "undecided",
      "whyTry": null,
      "mealTypes": [],
      "tags": [],
      "seasonality": null,
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-internal-legacy-prep-food"
      ]
    },
    {
      "id": "dish-patatas-bravas",
      "nameJa": "パタタス・ブラバス",
      "nameLocal": null,
      "cityIds": [],
      "category": "tapas",
      "importance": "unknown",
      "inclusionStatus": "undecided",
      "whyTry": null,
      "mealTypes": [],
      "tags": [],
      "seasonality": null,
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-internal-legacy-prep-food"
      ]
    },
    {
      "id": "dish-pan-con-tomate",
      "nameJa": "パン・コン・トマテ",
      "nameLocal": "Pa amb tomàquet",
      "cityIds": [
        "barcelona"
      ],
      "category": "tapas",
      "importance": "iconic",
      "inclusionStatus": "undecided",
      "whyTry": "パン、熟したトマト、オリーブ油という基本形からカタルーニャの食卓を理解できる。",
      "mealTypes": [
        "breakfast",
        "lunch",
        "dinner",
        "snack",
        "bar"
      ],
      "tags": [
        "Catalan",
        "basic",
        "light"
      ],
      "seasonality": "通年。",
      "relatedPlaceIds": [
        "bar-joan-santa-caterina",
        "quimet-quimet"
      ],
      "sourceIds": [
        "source-internal-legacy-prep-food",
        "source-gastroteca-pa-amb-tomaquet",
        "source-barcelona-tourism-catalan-cuisine",
        "source-bar-joan-official-market",
        "source-quimet-quimet-official"
      ]
    },
    {
      "id": "dish-fideua",
      "nameJa": "フィデウア",
      "nameLocal": "Fideuà",
      "cityIds": [
        "barcelona"
      ],
      "category": "seafood",
      "importance": "iconic",
      "inclusionStatus": "undecided",
      "whyTry": "米ではなく短い麺で魚介の旨味を味わう料理。広い魚介カテゴリと分けて比較する。",
      "mealTypes": [
        "lunch",
        "dinner"
      ],
      "tags": [
        "Catalan coast",
        "noodle",
        "seafood",
        "hearty"
      ],
      "seasonality": "通年。魚介の仕入れに依存。",
      "relatedPlaceIds": [
        "restaurant-7-portes",
        "can-sole"
      ],
      "sourceIds": [
        "source-internal-legacy-prep-food",
        "source-gastroteca-fideuada",
        "source-barcelona-tourism-catalan-cuisine",
        "source-7-portes-official",
        "source-can-sole-official"
      ]
    },
    {
      "id": "dish-seafood",
      "nameJa": "魚介",
      "nameLocal": "Peix i marisc",
      "cityIds": [
        "barcelona"
      ],
      "category": "seafood",
      "importance": "strong",
      "inclusionStatus": "undecided",
      "whyTry": "魚介全般のumbrella。米料理、フィデウア、スケット、エスケシャーダの個別料理を代替しない。",
      "mealTypes": [
        "lunch",
        "dinner",
        "snack",
        "bar"
      ],
      "tags": [
        "umbrella",
        "seafood"
      ],
      "seasonality": "魚種と仕入れに依存。",
      "relatedPlaceIds": [
        "restaurant-7-portes",
        "can-sole",
        "el-quim-boqueria",
        "el-xampanyet",
        "quimet-quimet",
        "la-cova-fumada",
        "cal-boter",
        "besta"
      ],
      "sourceIds": [
        "source-internal-legacy-prep-food",
        "source-barcelona-tourism-catalan-cuisine",
        "source-7-portes-official",
        "source-can-sole-official"
      ]
    },
    {
      "id": "dish-crema-catalana",
      "nameJa": "クレマ・カタラナ",
      "nameLocal": "Crema catalana",
      "cityIds": [
        "barcelona"
      ],
      "category": "sweet",
      "importance": "iconic",
      "inclusionStatus": "undecided",
      "whyTry": "カタルーニャを代表するデザートで、食事の締めとして一度試しやすい。",
      "mealTypes": [
        "lunch",
        "dinner",
        "snack"
      ],
      "tags": [
        "Catalan",
        "dessert"
      ],
      "seasonality": "通年。Sant Josepとの名称関係がある。",
      "relatedPlaceIds": [
        "can-culleretes",
        "restaurant-7-portes",
        "el-quim-boqueria"
      ],
      "sourceIds": [
        "source-internal-legacy-prep-food",
        "source-gastroteca-crema-sant-josep",
        "source-barcelona-tourism-catalan-cuisine",
        "source-can-culleretes-official",
        "source-7-portes-official",
        "source-el-quim-official"
      ]
    },
    {
      "id": "dish-cocido",
      "nameJa": "コシード",
      "nameLocal": "Cocido madrileño",
      "cityIds": [
        "madrid"
      ],
      "category": "stew",
      "importance": "high",
      "inclusionStatus": "undecided",
      "whyTry": "Madridの冬を代表する多段階の煮込み。長時間の食事と重さを大晦日の体力に合わせて判断する。",
      "mealTypes": [
        "lunch"
      ],
      "tags": [
        "madrid",
        "winter",
        "hearty"
      ],
      "seasonality": "冬向き。年末年始の営業と提供を再確認。",
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-internal-legacy-prep-food",
        "source-mad-learn-madrid-food"
      ]
    },
    {
      "id": "dish-bocadillo-calamares",
      "nameJa": "ボカディージョ・デ・カラマレス",
      "nameLocal": "Bocadillo de calamares",
      "cityIds": [
        "madrid"
      ],
      "category": "seafood",
      "importance": "high",
      "inclusionStatus": "undecided",
      "whyTry": "Plaza Mayor周辺でMadridらしい軽い昼食役割を担い、元日の街歩きを止めにくい。",
      "mealTypes": [
        "lunch",
        "snack"
      ],
      "tags": [
        "madrid",
        "quick",
        "seafood"
      ],
      "seasonality": null,
      "relatedPlaceIds": [
        "plaza-mayor"
      ],
      "sourceIds": [
        "source-internal-legacy-prep-food",
        "source-mad-learn-madrid-food"
      ]
    },
    {
      "id": "dish-churros",
      "nameJa": "チュロス",
      "nameLocal": "Chocolate con churros",
      "cityIds": [
        "madrid"
      ],
      "category": "sweet",
      "importance": "high",
      "inclusionStatus": "undecided",
      "whyTry": "元日のSan Ginésで座る短い休憩を兼ねるMadrid定番。休業・長蛇なら同じ料理役割を代替店で守る。",
      "mealTypes": [
        "breakfast",
        "snack"
      ],
      "tags": [
        "madrid",
        "sweet",
        "break"
      ],
      "seasonality": null,
      "relatedPlaceIds": [
        "san-gines"
      ],
      "sourceIds": [
        "source-internal-legacy-prep-food",
        "source-mad-learn-madrid-food"
      ]
    },
    {
      "id": "dish-mazapan",
      "nameJa": "マサパン",
      "nameLocal": "Mazapán de Toledo",
      "cityIds": [
        "toledo"
      ],
      "category": "sweet",
      "importance": "high",
      "inclusionStatus": "undecided",
      "whyTry": "Toledoと結びつくalmond菓子。観光延長ではなく午後の座る休憩に小量を合わせる。",
      "mealTypes": [
        "snack"
      ],
      "tags": [
        "toledo",
        "sweet",
        "shareable"
      ],
      "seasonality": null,
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-internal-legacy-prep-food",
        "source-mad-learn-toledo-food"
      ]
    },
    {
      "id": "dish-turron",
      "nameJa": "トゥロン",
      "nameLocal": null,
      "cityIds": [],
      "category": "sweet",
      "importance": "unknown",
      "inclusionStatus": "undecided",
      "whyTry": null,
      "mealTypes": [],
      "tags": [],
      "seasonality": null,
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-internal-legacy-prep-food"
      ]
    },
    {
      "id": "dish-cava",
      "nameJa": "Cava",
      "nameLocal": "Cava",
      "cityIds": [
        "barcelona"
      ],
      "category": "drink",
      "importance": "optional",
      "inclusionStatus": "undecided",
      "whyTry": "地域の発泡酒を軽いタパスと合わせる選択肢。飲酒を前提にせず、食体験とBeverageを分ける。",
      "mealTypes": [
        "snack",
        "bar"
      ],
      "tags": [
        "Catalan",
        "beverage"
      ],
      "seasonality": "通年。",
      "relatedPlaceIds": [
        "el-xampanyet",
        "quimet-quimet"
      ],
      "sourceIds": [
        "source-internal-legacy-prep-food",
        "source-barcelona-tourism-catalan-cuisine",
        "source-el-xampanyet-official",
        "source-quimet-quimet-official"
      ]
    },
    {
      "id": "dish-vermut",
      "nameJa": "Vermut",
      "nameLocal": "Vermut",
      "cityIds": [
        "barcelona"
      ],
      "category": "drink",
      "importance": "optional",
      "inclusionStatus": "undecided",
      "whyTry": "食前酒と軽いタパスの時間文化を理解するBeverage。単独で一食とは扱わない。",
      "mealTypes": [
        "snack",
        "bar"
      ],
      "tags": [
        "Barcelona",
        "beverage",
        "aperitif"
      ],
      "seasonality": "通年。",
      "relatedPlaceIds": [
        "el-xampanyet",
        "quimet-quimet"
      ],
      "sourceIds": [
        "source-internal-legacy-prep-food",
        "source-barcelona-tourism-catalan-cuisine",
        "source-el-xampanyet-official",
        "source-quimet-quimet-official"
      ]
    },
    {
      "id": "dish-wine",
      "nameJa": "ワイン",
      "nameLocal": null,
      "cityIds": [],
      "category": "drink",
      "importance": "unknown",
      "inclusionStatus": "undecided",
      "whyTry": null,
      "mealTypes": [],
      "tags": [],
      "seasonality": null,
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-internal-legacy-prep-food"
      ]
    },
    {
      "id": "dish-non-alcoholic",
      "nameJa": "ノンアル",
      "nameLocal": null,
      "cityIds": [],
      "category": "drink",
      "importance": "unknown",
      "inclusionStatus": "undecided",
      "whyTry": null,
      "mealTypes": [],
      "tags": [],
      "seasonality": null,
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-internal-legacy-prep-food"
      ]
    },
    {
      "id": "dish-escudella",
      "nameJa": "エスクデーリャ・イ・カルン・ドリャ",
      "nameLocal": "Escudella i carn d’olla",
      "cityIds": [
        "barcelona"
      ],
      "category": "stew",
      "importance": "iconic",
      "inclusionStatus": "undecided",
      "whyTry": "冬とクリスマス期のカタルーニャを理解する肉・野菜・豆の温かい料理。",
      "mealTypes": [
        "lunch"
      ],
      "tags": [
        "Catalan",
        "winter",
        "Christmas",
        "hearty"
      ],
      "seasonality": "冬、とくにクリスマス期。旅行日の提供は店舗ごとに再確認。",
      "relatedPlaceIds": [
        "can-culleretes"
      ],
      "sourceIds": [
        "source-canal-salut-escudella",
        "source-catalunya-catalan-cuisine-dishes",
        "source-can-culleretes-official"
      ]
    },
    {
      "id": "dish-canelons",
      "nameJa": "カネロニ",
      "nameLocal": "Canelons",
      "cityIds": [
        "barcelona"
      ],
      "category": "meat",
      "importance": "iconic",
      "inclusionStatus": "undecided",
      "whyTry": "Sant Esteveと結びつくクリスマス期の家庭料理で、12月26日の季節理解に直結する。",
      "mealTypes": [
        "lunch",
        "dinner"
      ],
      "tags": [
        "Catalan",
        "Christmas",
        "Sant Esteve"
      ],
      "seasonality": "通年提供例はあるが、クリスマス期の意味が強い。",
      "relatedPlaceIds": [
        "can-culleretes",
        "restaurant-7-portes"
      ],
      "sourceIds": [
        "source-catalunya-catalan-cuisine-dishes",
        "source-can-culleretes-official",
        "source-7-portes-official"
      ]
    },
    {
      "id": "dish-calcots",
      "nameJa": "カルソッツ",
      "nameLocal": "Calçots",
      "cityIds": [
        "barcelona"
      ],
      "category": "other",
      "importance": "iconic",
      "inclusionStatus": "undecided",
      "whyTry": "冬から春のねぎを焼きロメスコ系ソースで食べる。calçotadaは別の食体験として扱う。",
      "mealTypes": [
        "lunch"
      ],
      "tags": [
        "Catalan",
        "winter",
        "vegetable"
      ],
      "seasonality": "概ね11月〜4月。作柄・店舗提供を要確認。",
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-generalitat-calcot-valls",
        "source-generalitat-calcot-season",
        "source-valls-calcotada",
        "source-gastroteca-romesco"
      ]
    },
    {
      "id": "dish-escalivada",
      "nameJa": "エスカリバーダ",
      "nameLocal": "Escalivada",
      "cityIds": [
        "barcelona"
      ],
      "category": "other",
      "importance": "strong",
      "inclusionStatus": "undecided",
      "whyTry": "焼き野菜とオリーブ油の軽い一皿で、重い肉・魚介料理の間を調整できる。",
      "mealTypes": [
        "lunch",
        "dinner",
        "snack"
      ],
      "tags": [
        "Catalan",
        "vegetable",
        "light"
      ],
      "seasonality": "通年。野菜の構成は季節・店舗で変わる。",
      "relatedPlaceIds": [
        "can-culleretes",
        "el-quim-boqueria",
        "cal-boter"
      ],
      "sourceIds": [
        "source-barcelona-tourism-catalan-cuisine",
        "source-can-culleretes-official",
        "source-el-quim-official",
        "source-cal-boter-official"
      ]
    },
    {
      "id": "dish-botifarra-mongetes",
      "nameJa": "ボティファラと白いんげん豆",
      "nameLocal": "Botifarra amb mongetes",
      "cityIds": [
        "barcelona"
      ],
      "category": "meat",
      "importance": "strong",
      "inclusionStatus": "undecided",
      "whyTry": "カタルーニャの肉と豆の家庭料理を、魚介料理と対比できる。",
      "mealTypes": [
        "lunch"
      ],
      "tags": [
        "Catalan",
        "meat",
        "beans",
        "hearty"
      ],
      "seasonality": "通年。",
      "relatedPlaceIds": [
        "can-culleretes",
        "el-quim-boqueria",
        "cal-boter"
      ],
      "sourceIds": [
        "source-gastroteca-botifarra",
        "source-can-culleretes-official",
        "source-el-quim-official",
        "source-cal-boter-official"
      ]
    },
    {
      "id": "dish-bomba-barceloneta",
      "nameJa": "バルセロネータのボンバ",
      "nameLocal": "La bomba de la Barceloneta",
      "cityIds": [
        "barcelona"
      ],
      "category": "tapas",
      "importance": "strong",
      "inclusionStatus": "undecided",
      "whyTry": "バルセロネータの酒場文化と結びつく、短時間で試せる地域性の高いタパス。",
      "mealTypes": [
        "snack",
        "bar"
      ],
      "tags": [
        "Barcelona",
        "Barceloneta",
        "tapas"
      ],
      "seasonality": "通年。",
      "relatedPlaceIds": [
        "la-cova-fumada"
      ],
      "sourceIds": [
        "source-la-cova-fumada-official",
        "source-repsol-la-cova-fumada"
      ]
    },
    {
      "id": "dish-suquet-peix",
      "nameJa": "魚のスケット",
      "nameLocal": "Suquet de peix",
      "cityIds": [
        "barcelona"
      ],
      "category": "seafood",
      "importance": "strong",
      "inclusionStatus": "undecided",
      "whyTry": "沿岸の魚介煮込みで、米料理やフィデウアとは異なる温かい魚料理を比較できる。",
      "mealTypes": [
        "lunch",
        "dinner"
      ],
      "tags": [
        "Catalan",
        "seafood",
        "stew"
      ],
      "seasonality": "通年だが魚種・仕入れに依存。",
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-catalunya-catalan-cuisine-dishes",
        "source-barcelona-tourism-catalan-cuisine"
      ]
    },
    {
      "id": "dish-esqueixada-bacalla",
      "nameJa": "塩鱈のエスケシャーダ",
      "nameLocal": "Esqueixada de bacallà",
      "cityIds": [
        "barcelona"
      ],
      "category": "seafood",
      "importance": "strong",
      "inclusionStatus": "undecided",
      "whyTry": "塩鱈と野菜の軽い冷菜で、重い魚介料理だけに偏らず選べる。",
      "mealTypes": [
        "lunch",
        "snack"
      ],
      "tags": [
        "Catalan",
        "cod",
        "light"
      ],
      "seasonality": "通年。冬の旅行でも軽い前菜として比較できる。",
      "relatedPlaceIds": [
        "fonda-balmes"
      ],
      "sourceIds": [
        "source-catalunya-catalan-cuisine-dishes",
        "source-barcelona-tourism-catalan-cuisine",
        "source-la-vanguardia-fonda-balmes"
      ]
    },
    {
      "id": "dish-coca",
      "nameJa": "コカ",
      "nameLocal": "Coca",
      "cityIds": [
        "barcelona"
      ],
      "category": "tapas",
      "importance": "optional",
      "inclusionStatus": "undecided",
      "whyTry": "甘い型と塩味の型があるカタルーニャの平たいパンで、軽食候補として使える。",
      "mealTypes": [
        "snack"
      ],
      "tags": [
        "Catalan",
        "bakery",
        "light"
      ],
      "seasonality": "種類により季節性が異なる。",
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-barcelona-tourism-catalan-cuisine"
      ]
    },
    {
      "id": "dish-fricando",
      "nameJa": "フリカンド",
      "nameLocal": "Fricandó",
      "cityIds": [
        "barcelona"
      ],
      "category": "meat",
      "importance": "optional",
      "inclusionStatus": "undecided",
      "whyTry": "薄切り牛肉ときのこの煮込みで、伝統的な肉料理の比較候補になる。",
      "mealTypes": [
        "lunch",
        "dinner"
      ],
      "tags": [
        "Catalan",
        "meat",
        "stew"
      ],
      "seasonality": "通年。きのこや店舗メニューに依存。",
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-barcelona-tourism-catalan-cuisine"
      ]
    },
    {
      "id": "dish-callos-madrilena",
      "nameJa": "カジョス・ア・ラ・マドリレーニャ",
      "nameLocal": "Callos a la madrileña",
      "cityIds": [
        "madrid"
      ],
      "category": "stew",
      "importance": "medium",
      "inclusionStatus": "on_site_candidate",
      "whyTry": "Madridを代表する内臓煮込み。家族の内臓料理への好みと、重い食事が続かないことを優先する。",
      "mealTypes": [
        "lunch"
      ],
      "tags": [
        "hearty",
        "offal",
        "family-fit-check"
      ],
      "seasonality": "冬に向く温かい料理。年末年始の提供と営業は再確認。",
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-mad-learn-madrid-food"
      ]
    },
    {
      "id": "dish-carcamusas",
      "nameJa": "カルカムサス",
      "nameLocal": "Carcamusas",
      "cityIds": [
        "toledo"
      ],
      "category": "stew",
      "importance": "high",
      "inclusionStatus": "on_site_candidate",
      "whyTry": "Toledo固有性の高い豚肉と野菜の煮込み。1月2日の昼食で、重さと午後の坂道を見て量を調整する。",
      "mealTypes": [
        "lunch"
      ],
      "tags": [
        "toledo",
        "hearty",
        "shareable"
      ],
      "seasonality": "通年候補。年始営業と当日の提供を再確認。",
      "relatedPlaceIds": [],
      "sourceIds": [
        "source-mad-learn-toledo-food"
      ]
    }
  ],
  "mealOptions": [
    {
      "id": "meal-d1228-lunch",
      "dayId": "d1228",
      "scheduleItemId": "d1228-lunch",
      "cityId": "tarragona",
      "mealType": "lunch",
      "placeId": null,
      "dishIds": [],
      "inclusionStatus": "undecided",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "moodTags": [],
      "distancePreference": "unknown",
      "fallbackRank": null,
      "notes": [
        "店舗候補は未登録。"
      ],
      "sourceIds": []
    },
    {
      "id": "meal-d1228-pinchos",
      "dayId": "d1228",
      "scheduleItemId": "d1228-pinchos",
      "cityId": "tarragona",
      "mealType": "bar",
      "placeId": "pinchos-street",
      "dishIds": [],
      "inclusionStatus": "provisional",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "moodTags": [],
      "distancePreference": "unknown",
      "fallbackRank": null,
      "notes": [
        "店舗候補は未登録。"
      ],
      "sourceIds": []
    },
    {
      "id": "meal-d0101-san-gines",
      "dayId": "d0101",
      "scheduleItemId": "d0101-san-gines",
      "cityId": "madrid",
      "mealType": "snack",
      "placeId": "san-gines",
      "dishIds": [],
      "inclusionStatus": "provisional",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "moodTags": [],
      "distancePreference": "unknown",
      "fallbackRank": null,
      "notes": [
        "旧scheduleの8:00〜24:00を保持。店舗営業は直前確認。"
      ],
      "sourceIds": []
    },
    {
      "id": "meal-d0103-san-miguel-market",
      "dayId": "d0103",
      "scheduleItemId": "d0103-san-miguel-market",
      "cityId": "madrid",
      "mealType": "snack",
      "placeId": "san-miguel-market",
      "dishIds": [],
      "inclusionStatus": "provisional",
      "planningStatus": "draft",
      "bookingRequirement": "unknown",
      "moodTags": [],
      "distancePreference": "unknown",
      "fallbackRank": null,
      "notes": [
        "旧scheduleの10:00〜24:00を保持。店舗候補は未登録。"
      ],
      "sourceIds": []
    },
    {
      "id": "meal-option-safety",
      "dayId": null,
      "scheduleItemId": null,
      "cityId": null,
      "mealType": "snack",
      "placeId": null,
      "dishIds": [],
      "inclusionStatus": "undecided",
      "planningStatus": "needs_information",
      "bookingRequirement": "not_required",
      "moodTags": [
        "early"
      ],
      "distancePreference": "nearby",
      "fallbackRank": null,
      "notes": [
        "旧prepの「疲れた日の保険」を移行。店舗候補は未登録。"
      ],
      "sourceIds": [
        "source-internal-legacy-prep-food"
      ]
    },
    {
      "id": "meal-bcn-market-breakfast-el-quim",
      "dayId": "d1230",
      "scheduleItemId": "d1230-boqueria",
      "cityId": "barcelona",
      "mealType": "breakfast",
      "placeId": "el-quim-boqueria",
      "dishIds": [
        "dish-botifarra-mongetes",
        "dish-escalivada",
        "dish-crema-catalana"
      ],
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "not_required",
      "moodTags": [
        "market",
        "quick if queue is short"
      ],
      "distancePreference": "on_route",
      "fallbackRank": 1,
      "notes": [
        "12/30水曜08:30–10:00。通常営業時間内だが年末特別営業は未公表。",
        "休業・行列20分超ならBar Joanへ切替し、市場朝食役割を維持。"
      ],
      "sourceIds": [
        "source-el-quim-official",
        "source-repsol-el-quim",
        "source-www-boqueria-barcelona-home"
      ]
    },
    {
      "id": "meal-bcn-market-breakfast-bar-joan",
      "dayId": "d1230",
      "scheduleItemId": null,
      "cityId": "barcelona",
      "mealType": "breakfast",
      "placeId": "bar-joan-santa-caterina",
      "dishIds": [
        "dish-pan-con-tomate"
      ],
      "inclusionStatus": "undecided",
      "planningStatus": "needs_information",
      "bookingRequirement": "not_required",
      "moodTags": [
        "market",
        "quick",
        "fallback"
      ],
      "distancePreference": "short_detour",
      "fallbackRank": 2,
      "notes": [
        "サンタ・カテリーナ市場への短い迂回案。市場休日・個店営業を確認する。"
      ],
      "sourceIds": [
        "source-bar-joan-official-market",
        "source-el-pais-bar-joan-2026"
      ]
    },
    {
      "id": "meal-bcn-vermut-el-xampanyet",
      "dayId": "d1228",
      "scheduleItemId": "d1228-xampanyet",
      "cityId": "barcelona",
      "mealType": "bar",
      "placeId": "el-xampanyet",
      "dishIds": [
        "dish-cava",
        "dish-vermut",
        "dish-seafood"
      ],
      "inclusionStatus": "on_site_candidate",
      "planningStatus": "needs_information",
      "bookingRequirement": "not_required",
      "moodTags": [
        "light",
        "walk-in",
        "crowded"
      ],
      "distancePreference": "when_in_el_born",
      "fallbackRank": 1,
      "notes": [
        "12/28月曜19:00–20:00の現地判断候補。17時開始は不可。",
        "満席時はLa Plataでanchovies/tapas役割を維持。"
      ],
      "sourceIds": [
        "source-el-xampanyet-official",
        "source-conde-nast-el-xampanyet"
      ]
    },
    {
      "id": "meal-bcn-vermut-quimet",
      "dayId": null,
      "scheduleItemId": null,
      "cityId": "barcelona",
      "mealType": "bar",
      "placeId": "quimet-quimet",
      "dishIds": [
        "dish-cava",
        "dish-vermut",
        "dish-pan-con-tomate",
        "dish-seafood"
      ],
      "inclusionStatus": "undecided",
      "planningStatus": "needs_information",
      "bookingRequirement": "unknown",
      "moodTags": [
        "light",
        "standing",
        "crowded"
      ],
      "distancePreference": "when_in_poble_sec",
      "fallbackRank": 2,
      "notes": [
        "Poble-sec滞在時の代替。立ち飲み、家族の快適性、営業時間を確認する。"
      ],
      "sourceIds": [
        "source-quimet-quimet-official",
        "source-repsol-quimet-quimet"
      ]
    },
    {
      "id": "meal-bcn-traditional-culleretes",
      "dayId": "d1227",
      "scheduleItemId": "d1227-culleretes",
      "cityId": "barcelona",
      "mealType": "lunch",
      "placeId": "can-culleretes",
      "dishIds": [
        "dish-escudella",
        "dish-canelons"
      ],
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "recommended",
      "moodTags": [
        "traditional",
        "winter"
      ],
      "distancePreference": "on_route",
      "fallbackRank": 1,
      "notes": [
        "12/27 13:45–15:15。通常日曜昼の範囲内。特別営業と予約枠は未公表。",
        "休業・満席時は7 Portesで伝統料理役割を維持。"
      ],
      "sourceIds": [
        "source-can-culleretes-official",
        "source-barcelona-city-can-culleretes"
      ]
    },
    {
      "id": "meal-bcn-seafood-can-sole",
      "dayId": "d1229",
      "scheduleItemId": "d1229-can-sole",
      "cityId": "barcelona",
      "mealType": "dinner",
      "placeId": "can-sole",
      "dishIds": [
        "dish-fideua",
        "dish-seafood"
      ],
      "inclusionStatus": "provisional",
      "planningStatus": "needs_information",
      "bookingRequirement": "recommended",
      "moodTags": [
        "seafood",
        "rice"
      ],
      "distancePreference": "short_detour",
      "fallbackRank": 1,
      "notes": [
        "12/29火曜20:00–21:30。19:30開始は不可。",
        "休業・満席時は7 Portesで魚介・米料理役割を維持。"
      ],
      "sourceIds": [
        "source-can-sole-official",
        "source-barcelona-tourism-can-sole"
      ]
    }
  ],
  "sources": [
    {
      "id": "source-internal-legacy-spots",
      "title": "Phase 1着手前のspots.html記載",
      "url": "spots.html",
      "publisher": null,
      "type": "internal_legacy",
      "language": "ja",
      "checkedAt": null
    },
    {
      "id": "source-internal-legacy-prep-food",
      "title": "Phase 1着手前のprep.html「食べたいもの」",
      "url": "prep.html#food",
      "publisher": null,
      "type": "internal_legacy",
      "language": "ja",
      "checkedAt": null
    },
    {
      "id": "source-sagradafamilia-org-en-tickets",
      "title": "サグラダ・ファミリア 公式情報",
      "url": "https://sagradafamilia.org/en/tickets",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-parkguell-barcelona-en-buy-tickets",
      "title": "グエル公園 公式情報",
      "url": "https://parkguell.barcelona/en/buy-tickets",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-casabatllo-es-en-online-tickets",
      "title": "カサ・バトリョ 公式情報",
      "url": "https://www.casabatllo.es/en/online-tickets/",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-lapedrera-com-en-tickets",
      "title": "カサ・ミラ（ラ・ペドレラ） 公式情報",
      "url": "https://www.lapedrera.com/en/tickets/",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-tickets-catedralbcn-org",
      "title": "バルセロナ大聖堂 公式情報",
      "url": "https://tickets.catedralbcn.org/",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-montjuic-castle-official-visit",
      "title": "モンジュイック城 公式情報",
      "url": "https://ajuntament.barcelona.cat/castelldemontjuic/en/visit-us",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-boqueria-barcelona-home",
      "title": "ブケリア市場 公式情報",
      "url": "https://www.boqueria.barcelona/home",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-cremallerademontserrat-cat-en",
      "title": "モンセラート 公式情報",
      "url": "https://www.cremallerademontserrat.cat/en/",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-tarragonaturisme-cat-en",
      "title": "タラゴナ 公式情報",
      "url": "https://www.tarragonaturisme.cat/en",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-museodelprado-es-en-visit-opening-times-and-pric",
      "title": "プラド美術館 公式情報",
      "url": "https://www.museodelprado.es/en/visit/opening-times-and-prices/",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-tickets-patrimonionacional-es-en-tickets-palacio-rea",
      "title": "マドリード王宮 公式情報",
      "url": "https://tickets.patrimonionacional.es/en/tickets/palacio-real-de-madrid",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-museoreinasofia-es-en-visit-individual-visits",
      "title": "ソフィア王妃芸術センター 公式情報",
      "url": "https://www.museoreinasofia.es/en/visit/individual-visits/",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-metromadrid-es-en",
      "title": "大晦日と元日の街歩き 公式情報",
      "url": "https://www.metromadrid.es/en",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-tickets-catedralprimada-es",
      "title": "トレド大聖堂 公式情報",
      "url": "https://tickets.catedralprimada.es/",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-tickets-toledomonumental-com",
      "title": "サント・トメ教会 公式情報",
      "url": "https://tickets.toledomonumental.com/",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-cultura-gob-es-mgreco-la-visita-horariosytarifas",
      "title": "エル・グレコ美術館 公式情報",
      "url": "https://www.cultura.gob.es/mgreco/la-visita/horariosytarifas.html",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-cultura-castillalamancha-es-museos-nuestros-museos-m",
      "title": "サンタ・クルス美術館 公式情報",
      "url": "https://cultura.castillalamancha.es/museos/nuestros-museos/museo-de-santa-cruz",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-lapedrera-com-en-visits",
      "title": "Booking: カサ・ミラ 公式手続き",
      "url": "https://www.lapedrera.com/en/visits",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-catedralbcn-org-en-tourist-visit",
      "title": "Booking: Barcelona大聖堂 公式手続き",
      "url": "https://catedralbcn.org/en/tourist-visit/",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-renfe-com-es-en",
      "title": "Booking: Tarragona往復鉄道 公式手続き",
      "url": "https://www.renfe.com/es/en",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-montserratvisita-com-en-organize-the-visit-how-t",
      "title": "Booking: Montserrat往復交通 公式手続き",
      "url": "https://www.montserratvisita.com/en/organize-the-visit/how-to-get-there",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-museodelprado-es-en-visit-the-museum",
      "title": "Booking: プラド美術館 公式手続き",
      "url": "https://www.museodelprado.es/en/visit-the-museum",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-catedralprimada-es-en",
      "title": "Booking: トレド大聖堂 公式手続き",
      "url": "https://www.catedralprimada.es/en/",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-santotome-org",
      "title": "Booking: サント・トメ教会 公式手続き",
      "url": "https://www.santotome.org/",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-cultura-gob-es-mgreco-en-visita-html",
      "title": "Booking: エル・グレコ美術館 公式手続き",
      "url": "https://www.cultura.gob.es/mgreco/en/visita.html",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-www-museoreinasofia-es-en-visit",
      "title": "Booking: ソフィア王妃芸術センター 公式手続き",
      "url": "https://www.museoreinasofia.es/en/visit",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-tickets-patrimonionacional-es-en",
      "title": "Booking: マドリード王宮 公式手続き",
      "url": "https://tickets.patrimonionacional.es/en",
      "publisher": null,
      "type": "official",
      "language": null,
      "checkedAt": null
    },
    {
      "id": "source-unesco-gaudi-works",
      "title": "Works of Antoni Gaudí",
      "url": "https://whc.unesco.org/en/list/320/",
      "publisher": "UNESCO World Heritage Centre",
      "type": "government",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-muhba-gaudi-bcn-guide",
      "title": "Gaudí/BCN: Guia d'història urbana",
      "url": "https://www.barcelona.cat/museuhistoria/sites/default/files/GuiaGaudi_BCN_0.pdf",
      "publisher": "Museu d'Història de Barcelona",
      "type": "government",
      "language": "ca",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-design-museum-modernisme",
      "title": "Modernisme, Towards the Culture of Design",
      "url": "https://ajuntament.barcelona.cat/museudeldisseny/sites/default/files/press_files/press_kit_modernisme.pdf",
      "publisher": "Museu del Disseny de Barcelona",
      "type": "museum",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-mnac-gaudi-exhibition",
      "title": "Gaudí exhibition",
      "url": "https://www.museunacional.cat/en/gaudi",
      "publisher": "Museu Nacional d'Art de Catalunya",
      "type": "museum",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-sagrada-gaudi-architect",
      "title": "Antoni Gaudí: the architect, method and work",
      "url": "https://sagradafamilia.org/en/antoni-gaudi?lang=0",
      "publisher": "Basílica de la Sagrada Família",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-sagrada-architecture-booklet",
      "title": "Architecture of the Sagrada Família",
      "url": "https://sagradafamilia.org/documents/20142/1205286/SF_Booklet_04_20240405_digital_AF.pdf/29d08418-9034-2d14-58fb-b6a5d0c3ff09",
      "publisher": "Basílica de la Sagrada Família",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-casa-vicens-original-project",
      "title": "Gaudí's original project (1883–1885)",
      "url": "https://casavicens.org/the-house/history/gaudi-original-project-1883-1885",
      "publisher": "Casa Vicens Gaudí",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-casa-vicens-official-history",
      "title": "Casa Vicens: history",
      "url": "https://casavicens.org/the-house/history",
      "publisher": "Casa Vicens Gaudí",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-casa-vicens-private-to-museum",
      "title": "From a private home to a 21st-century house museum",
      "url": "https://casavicens.org/the-house/history/from-a-private-home-to-a-21st-century-house-and-museum",
      "publisher": "Casa Vicens Gaudí",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-casa-vicens-garden",
      "title": "Casa Vicens garden",
      "url": "https://casavicens.org/the-house/garden",
      "publisher": "Casa Vicens Gaudí",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-casa-vicens-heritage",
      "title": "Casa Vicens heritage and recognitions",
      "url": "https://casavicens.org/the-house/heritage-and-recognitions",
      "publisher": "Casa Vicens Gaudí",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-casa-vicens-arquitectura-catalana",
      "title": "Casa Vicens",
      "url": "https://www.arquitecturacatalana.cat/en/works/rehabilitacio-i-reforma-de-la-casa-vicens",
      "publisher": "Arquitectura Catalana / COAC",
      "type": "reference",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-casa-vicens-museum-restoration-arquitectura-catalana",
      "title": "Casa Vicens house-museum rehabilitation",
      "url": "https://www.arquitecturacatalana.cat/en/works/rehabilitacio-i-reforma-de-la-casa-vicens-per-a-casa-museu",
      "publisher": "Arquitectura Catalana / COAC",
      "type": "reference",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-palau-guell-trencadis",
      "title": "Gaudí & trencadís",
      "url": "https://inici.palauguell.cat/wp-content/uploads/2023/04/3.-PG_TEXTOS-ANG_FINAL.pdf",
      "publisher": "Palau Güell / Diputació de Barcelona",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-palau-guell-official-home",
      "title": "Palau Güell: official visitor and history page",
      "url": "https://inici.palauguell.cat/en/",
      "publisher": "Palau Güell / Diputació de Barcelona",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-palau-guell-catalonia-heritage",
      "title": "Palau Güell: A house with stars and trencadís",
      "url": "https://patrimoni.gencat.cat/en/collection/palau-guell",
      "publisher": "Cultural Heritage, Government of Catalonia",
      "type": "government",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-palau-guell-portal-gaudi",
      "title": "Palau Güell",
      "url": "https://www.portalgaudi.org/en/buildings/palau-guell/",
      "publisher": "Portal Gaudí / Gaudí Council",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-palau-guell-arquitectura-catalana",
      "title": "Palau Güell",
      "url": "https://www.arquitecturacatalana.cat/en/works/palau-guell",
      "publisher": "Arquitectura Catalana / COAC",
      "type": "reference",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-palau-guell-restoration-arquitectura-catalana",
      "title": "Complete restoration of Palau Güell",
      "url": "https://www.arquitecturacatalana.cat/en/works/restauracio-integral-del-palau-guell",
      "publisher": "Arquitectura Catalana / COAC",
      "type": "reference",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-park-guell-origin",
      "title": "Park Güell: Origin and creation",
      "url": "https://parkguell.barcelona/en/park-guell/origin-and-creation",
      "publisher": "Park Güell / Barcelona de Serveis Municipals",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-park-guell-emblematic",
      "title": "Park Güell: Emblematic features",
      "url": "https://parkguell.barcelona/en/park-guell/emblematic-features",
      "publisher": "Park Güell / Barcelona de Serveis Municipals",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-casa-batllo-history",
      "title": "Casa Batlló: The history",
      "url": "https://www.casabatllo.es/en/antoni-gaudi/casa-batllo/history/",
      "publisher": "Casa Batlló",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-casa-batllo-interior",
      "title": "Casa Batlló: The interior",
      "url": "https://www.casabatllo.es/en/antoni-gaudi/casa-batllo/inside/",
      "publisher": "Casa Batlló",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-la-pedrera-architecture",
      "title": "Architecture of Gaudí's La Pedrera",
      "url": "https://www.lapedrera.com/en/casa-mila/architecture/",
      "publisher": "Fundació Catalunya La Pedrera",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-sagrada-history-of-temple",
      "title": "History of the Temple",
      "url": "https://sagradafamilia.org/en/history-of-the-temple",
      "publisher": "Basílica de la Sagrada Família",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-sagrada-brief-history-booklet",
      "title": "Brief history of Temple construction",
      "url": "https://sagradafamilia.org/documents/20142/1205286/SF_Booklet_02_20240405_digital_AF.pdf/",
      "publisher": "Basílica de la Sagrada Família",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-sagrada-nativity-booklet",
      "title": "Nativity façade, cloister and portal of the Rosary",
      "url": "https://sagradafamilia.org/documents/20142/1693659/SF_Booklet_06_20260227_digital_AF.pdf/df0f7f01-0ebc-3bae-02a2-2e591e41a2ed",
      "publisher": "Basílica de la Sagrada Família",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-sagrada-passion-booklet",
      "title": "Passion façade, cloister and sacristy",
      "url": "https://sagradafamilia.org/documents/20142/1693659/SF_Booklet_07_20260227_digital_AF.pdf/e90939fd-d839-84dd-e6fb-d978903421f6",
      "publisher": "Basílica de la Sagrada Família",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-sagrada-glory-booklet",
      "title": "Glory façade, Baptistery and Chapel of Penitence and the Sacrament",
      "url": "https://sagradafamilia.org/documents/20142/1693659/SF_Booklet_08_20260227_digital_AF.pdf/5b1ae4de-8917-2c03-b419-9d28450194c7",
      "publisher": "Basílica de la Sagrada Família",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-sagrada-interior-booklet",
      "title": "Interior of the Basilica",
      "url": "https://sagradafamilia.org/documents/20142/1693659/SF_Booklet_09_20260227_digital_AF.pdf/96d648e4-1172-58bd-fa7b-886ebb516b36",
      "publisher": "Basílica de la Sagrada Família",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-sagrada-towers-booklet",
      "title": "Bell towers, lanterns and sacristies",
      "url": "https://sagradafamilia.org/documents/20142/1693659/SF_Booklet_10_20260227_digital_AF.pdf/b2061581-3ab8-b179-44b6-7825004f4162",
      "publisher": "Basílica de la Sagrada Família",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-sagrada-jesus-tower-2026",
      "title": "This is how the cross on the tower of Jesus was built",
      "url": "https://blog.sagradafamilia.org/en/phases-construction-jesus-tower/",
      "publisher": "Basílica de la Sagrada Família",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-la-pedrera-history",
      "title": "Discover the history of La Pedrera - Casa Milà",
      "url": "https://www.lapedrera.com/en/casa-mila/history/",
      "publisher": "Fundació Catalunya La Pedrera",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-la-pedrera-heritage",
      "title": "Casa Milà Heritage in Barcelona, La Pedrera",
      "url": "https://www.lapedrera.com/en/casa-mila/heritage/",
      "publisher": "Fundació Catalunya La Pedrera",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-la-pedrera-conservation",
      "title": "Conservation of La Pedrera - Casa Milà",
      "url": "https://www.lapedrera.com/en/casa-mila/conservation/",
      "publisher": "Fundació Catalunya La Pedrera",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-la-pedrera-courtyards",
      "title": "Innovations in Casa Milà: the courtyards",
      "url": "https://www.lapedrera.com/en/casa-mila/fun-facts/innovations-courtyards/",
      "publisher": "Fundació Catalunya La Pedrera",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-la-pedrera-roof-terrace",
      "title": "The rooftop of Casa Milà",
      "url": "https://www.lapedrera.com/en/casa-mila/fun-facts/roof-terrace/",
      "publisher": "Fundació Catalunya La Pedrera",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-la-pedrera-accessibility",
      "title": "Accessibility at La Pedrera",
      "url": "https://www.lapedrera.com/en/accessibility/",
      "publisher": "Fundació Catalunya La Pedrera",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-casa-batllo-facade",
      "title": "Casa Batlló: The façade",
      "url": "https://www.casabatllo.es/en/antoni-gaudi/casa-batllo/facade/",
      "publisher": "Casa Batlló",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-casa-batllo-restoration",
      "title": "Casa Batlló: The restoration 2018–2026",
      "url": "https://www.casabatllo.es/en/restoration/",
      "publisher": "Casa Batlló",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-casa-batllo-facade-restoration",
      "title": "The façade is back",
      "url": "https://www.casabatllo.es/en/news/the-facade-is-back/",
      "publisher": "Casa Batlló",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-mnac-casa-batllo",
      "title": "Casa Batlló",
      "url": "https://www.museunacional.cat/en/casa-batllo",
      "publisher": "Museu Nacional d’Art de Catalunya",
      "type": "museum",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-mnac-gaudi-architect",
      "title": "Gaudí, the Architect: online exhibition",
      "url": "https://www.museunacional.cat/exposicions-en-linia/en/gaudi-the-architect/",
      "publisher": "Museu Nacional d’Art de Catalunya",
      "type": "museum",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-bcnroc-casa-batllo",
      "title": "Casa Batlló municipal repository record",
      "url": "https://bcnroc.ajuntament.barcelona.cat/jspui/handle/11703/70089",
      "publisher": "Ajuntament de Barcelona",
      "type": "government",
      "language": "ca",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-gencat-casa-batllo",
      "title": "Casa Batlló heritage collection",
      "url": "https://patrimoni.gencat.cat/es/coleccion/casa-batllo",
      "publisher": "Generalitat de Catalunya",
      "type": "government",
      "language": "es",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-park-guell-history",
      "title": "Park Güell: Over a hundred years of history",
      "url": "https://parkguell.barcelona/en/park-guell/over-hundred-years-history",
      "publisher": "Park Güell / Barcelona City Council",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-park-guell-gaudi-guell",
      "title": "Park Güell: Gaudí and Güell",
      "url": "https://parkguell.barcelona/en/park-guell/gaudi-and-guell",
      "publisher": "Park Güell / Barcelona City Council",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-park-guell-world-heritage",
      "title": "Park Güell: World Heritage Site",
      "url": "https://parkguell.barcelona/en/park-guell/world-heritage-site",
      "publisher": "Park Güell / Barcelona City Council",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-park-guell-nature",
      "title": "Park Güell: Nature and biodiversity",
      "url": "https://parkguell.barcelona/en/a-park-for-everone/nature-and-biodiversity",
      "publisher": "Park Güell / Barcelona City Council",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-park-guell-restoration-03",
      "title": "Park Güell conservation: medallions, trencadís, water source and viaduct",
      "url": "https://parkguell.barcelona/en/renovation-works-status/03-medallions-trencadis",
      "publisher": "Park Güell / Barcelona City Council",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-park-guell-accessibility",
      "title": "Park Güell accessibility",
      "url": "https://parkguell.barcelona/en/accessibility",
      "publisher": "Park Güell / Barcelona City Council",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-park-guell-restricted-area",
      "title": "Park Güell: Why are the access points regulated?",
      "url": "https://parkguell.barcelona/en/a-park-for-everone/why-are-the-access-points-regulated",
      "publisher": "Park Güell / Barcelona City Council",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-casa-vicens-buy-tickets",
      "title": "Casa Vicens — Buy tickets",
      "url": "https://casavicens.org/buy-tickets",
      "publisher": "Casa Vicens Gaudí",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-sant-pau-visit",
      "title": "Recinte Modernista de Sant Pau — Plan your visit",
      "url": "https://santpaubarcelona.org/en/prepara-la-teva-visita/",
      "publisher": "Fundació Privada Hospital de la Santa Creu i Sant Pau",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-fira-santa-llucia-2025",
      "title": "Barcelona City Council — 239th Fira de Santa Llúcia",
      "url": "https://ajuntament.barcelona.cat/ciutatvella/ca/noticies/la-239a-edicio-de-la-fira-de-santa-llucia-ja-es-aqui-1576510",
      "publisher": "Ajuntament de Barcelona",
      "type": "government",
      "language": "ca",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-fira-sagrada-2025",
      "title": "Barcelona City Council — Fira de Nadal a la Sagrada Família",
      "url": "https://ajuntament.barcelona.cat/eixample/ca/guia-del-districte/agenda/llistat-activitats/fira-de-nadal-a-la-sagrada-familia-99400017122",
      "publisher": "Ajuntament de Barcelona",
      "type": "government",
      "language": "ca",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-palau-musica-visits",
      "title": "Palau de la Música Catalana — Visits and tickets",
      "url": "https://www.palaumusica.cat/en/visites/visits-and-tickets_1159168",
      "publisher": "Palau de la Música Catalana",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-picasso-opening-hours",
      "title": "Museu Picasso Barcelona — Tickets and opening hours",
      "url": "https://museupicassobcn.cat/en/plan-your-visit/buy-tickets-and-opening-hours",
      "publisher": "Museu Picasso Barcelona",
      "type": "museum",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-mnac-opening-hours-prices",
      "title": "Museu Nacional d’Art de Catalunya — Opening hours and prices",
      "url": "https://www.museunacional.cat/en/opening-hours-and-prices",
      "publisher": "Museu Nacional d’Art de Catalunya",
      "type": "museum",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-santa-caterina-history",
      "title": "Mercat de Santa Caterina — History",
      "url": "https://www.mercatdesantacaterina.com/en/history",
      "publisher": "Mercat de Santa Caterina",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-ciutadella-tourism",
      "title": "Barcelona Turisme — Parc de la Ciutadella",
      "url": "https://barcelonaturisme.com/wv3/ent/page/5067/parc-de-la-ciutadella.html",
      "publisher": "Turisme de Barcelona",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-arc-triomf-tourism",
      "title": "Barcelona Turisme — Arc de Triomf",
      "url": "https://www.barcelonaturisme.com/wv3/ent/page/1211/arc-de-triomf.html",
      "publisher": "Turisme de Barcelona",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-23"
    },
    {
      "id": "source-gastroteca-pa-amb-tomaquet",
      "title": "Gastroteca — Pa amb tomàquet",
      "url": "https://www.gastroteca.cat/receptes/pa-amb-tomaquet/",
      "publisher": "Generalitat de Catalunya",
      "type": "government",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-barcelona-tourism-catalan-cuisine",
      "title": "Turisme de Barcelona — Catalan cuisine",
      "url": "https://bid.barcelonaturisme.com/wv3/es/page/148/cocina-catalana.html",
      "publisher": "Turisme de Barcelona",
      "type": "official",
      "language": "es",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-gastroteca-fideuada",
      "title": "Gastroteca — Fideuada",
      "url": "https://www.gastroteca.cat/receptes/fideuada/",
      "publisher": "Generalitat de Catalunya",
      "type": "government",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-canal-salut-escudella",
      "title": "Canal Salut — Escudella i carn d’olla",
      "url": "https://canalsalut.gencat.cat/ca/detalls/article/escudella-carn-olla",
      "publisher": "Generalitat de Catalunya",
      "type": "government",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-catalunya-catalan-cuisine-dishes",
      "title": "Catalunya — Catalan cuisine dishes",
      "url": "https://www.catalunya.com/en/continguts/article/catalan-cuisine-dishes-1734434245795",
      "publisher": "Agència Catalana de Turisme",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-generalitat-calcot-valls",
      "title": "Generalitat — IGP Calçot de Valls",
      "url": "https://agricultura.gencat.cat/ca/ambits/alimentacio/segells-qualitat-diferenciada/distintius-origen/dop-igp/igp/productes-reconeixement-comunitari/calcot-valls",
      "publisher": "Generalitat de Catalunya",
      "type": "government",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-generalitat-calcot-season",
      "title": "Canal Aliments — Calçot season",
      "url": "https://canalaliments.gencat.cat/ca/coneix-aliments/fruites-hortalisses/calcot/",
      "publisher": "Generalitat de Catalunya",
      "type": "government",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-valls-calcotada",
      "title": "Valls — La Calçotada",
      "url": "https://www.valls.cat/la-ciutat/la-calcotada",
      "publisher": "Ajuntament de Valls",
      "type": "government",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-gastroteca-romesco",
      "title": "Gastroteca — Salsa romesco",
      "url": "https://www.gastroteca.cat/receptes/salsa-romesco/",
      "publisher": "Generalitat de Catalunya",
      "type": "government",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-gastroteca-botifarra",
      "title": "Gastroteca — Botifarra crua",
      "url": "https://www.gastroteca.cat/productes-agroalimentaris/botifarra-crua/",
      "publisher": "Generalitat de Catalunya",
      "type": "government",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-barcelona-city-gastronomy-markets",
      "title": "Barcelona City Council — Gastronomy, commerce and markets",
      "url": "https://www.barcelona.cat/regatacultural/en/experience-regatta/gastronomy-commerce-and-markets",
      "publisher": "Ajuntament de Barcelona",
      "type": "government",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-gastroteca-crema-sant-josep",
      "title": "Gastroteca — Crema de Sant Josep",
      "url": "https://www.gastroteca.cat/en/receptes/crema-de-sant-josep/",
      "publisher": "Generalitat de Catalunya",
      "type": "government",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-can-culleretes-official",
      "title": "Can Culleretes — Official site",
      "url": "https://culleretes.com/",
      "publisher": "Can Culleretes",
      "type": "official",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-7-portes-official",
      "title": "7 Portes — Official reservation",
      "url": "https://7portes.com/ca/reservar-taula-restaurant/",
      "publisher": "7 Portes",
      "type": "official",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-can-sole-official",
      "title": "Can Solé — Official site",
      "url": "https://restaurantcansole.com/en/",
      "publisher": "Can Solé",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-el-quim-official",
      "title": "El Quim de la Boqueria — Official menu",
      "url": "https://elquimdelaboqueria.com/menu-2/?lang=en",
      "publisher": "El Quim de la Boqueria",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-bar-joan-official-market",
      "title": "Mercat de Santa Caterina — Bar Joan",
      "url": "https://mercatsantacaterina.com/ca/parada/bar-joan/",
      "publisher": "Mercat de Santa Caterina",
      "type": "official",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-el-xampanyet-official",
      "title": "El Xampanyet — Official site",
      "url": "https://www.elxampanyet.com/",
      "publisher": "El Xampanyet",
      "type": "official",
      "language": "es",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-quimet-quimet-official",
      "title": "Quimet & Quimet — Official tapas",
      "url": "https://quimetiquimet.com/en/our-tapas/",
      "publisher": "Quimet & Quimet",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-la-cova-fumada-official",
      "title": "La Cova Fumada — Official site",
      "url": "https://lacovafumada.com/",
      "publisher": "La Cova Fumada",
      "type": "official",
      "language": "es",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-cal-boter-official",
      "title": "Cal Boter — Official site",
      "url": "https://www.restaurantcalboter.com/",
      "publisher": "Cal Boter",
      "type": "official",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-besta-official",
      "title": "Besta — Official site",
      "url": "https://www.bestabarcelona.com/en/",
      "publisher": "Besta",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-dos-pebrots-official",
      "title": "Dos Pebrots — Official site",
      "url": "https://www.dospebrots.com/en/",
      "publisher": "Dos Pebrots",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-fonda-balmes-official",
      "title": "Fonda Balmes — Official site",
      "url": "https://fondabalmes.cat/en/",
      "publisher": "Fonda Balmes",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-barcelona-city-can-culleretes",
      "title": "Barcelona City Council — Can Culleretes",
      "url": "https://www.barcelona.cat/ca/coneixbcn/pics/can-culleretes-99400391163",
      "publisher": "Ajuntament de Barcelona",
      "type": "government",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-barcelona-bus-turistic-7-portes",
      "title": "Barcelona Bus Turístic — 7 Portes",
      "url": "https://www.barcelonabusturistic.cat/es/restaurante-7-portes",
      "publisher": "Barcelona Bus Turístic",
      "type": "official",
      "language": "es",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-barcelona-tourism-can-sole",
      "title": "Turisme de Barcelona — Can Solé",
      "url": "https://www.barcelonaturisme.com/wv3/es/restaurant/183338/can-sole.html",
      "publisher": "Turisme de Barcelona",
      "type": "official",
      "language": "es",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-repsol-el-quim",
      "title": "Guía Repsol — El Quim de la Boqueria",
      "url": "https://www.guiarepsol.com/es/fichas/solete/quim-de-la-boqueria-325418/",
      "publisher": "Guía Repsol",
      "type": "reference",
      "language": "es",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-el-pais-bar-joan-2026",
      "title": "El País — Barcelona restaurants summer 2026",
      "url": "https://elpais.com/quadern/gastronomia/2026-07-01/nous-restaurants-a-barcelona-per-descobrir-aquest-estiu.html",
      "publisher": "El País",
      "type": "reference",
      "language": "ca",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-conde-nast-el-xampanyet",
      "title": "Condé Nast Traveler — El Xampanyet",
      "url": "https://www.cntraveler.com/bars/barcelona/el-xampanyet",
      "publisher": "Condé Nast Traveler",
      "type": "reference",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-repsol-quimet-quimet",
      "title": "Guía Repsol — Barcelona vermouth bars",
      "url": "https://www.guiarepsol.com/es/comer/vinos-y-bodegas/los-mejores-vermuts-de-barcelona/",
      "publisher": "Guía Repsol",
      "type": "reference",
      "language": "es",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-repsol-la-cova-fumada",
      "title": "Guía Repsol — Barcelona tapas route",
      "url": "https://www.guiarepsol.com/es/comer/de-tapeo/ruta-tapas-barcelona-ciudad/",
      "publisher": "Guía Repsol",
      "type": "reference",
      "language": "es",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-repsol-cal-boter",
      "title": "Guía Repsol — Cal Boter",
      "url": "https://www.guiarepsol.com/es/fichas/solete/cal-boter-333555/",
      "publisher": "Guía Repsol",
      "type": "reference",
      "language": "es",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-michelin-besta",
      "title": "Michelin Guide — Besta",
      "url": "https://guide.michelin.com/en/catalunya/barcelona/restaurant/besta",
      "publisher": "Michelin Guide",
      "type": "reference",
      "language": "en",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-michelin-dos-pebrots",
      "title": "Michelin Guide — Dos Pebrots",
      "url": "https://guide.michelin.com/es/es/catalunya/barcelona/restaurante/dos-pebrots",
      "publisher": "Michelin Guide",
      "type": "reference",
      "language": "es",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-la-vanguardia-fonda-balmes",
      "title": "La Vanguardia — Fonda Balmes",
      "url": "https://www.lavanguardia.com/comer/sitios/20250712/10879510/fonda-balmes-apertura-mas-esperada-barcelona.amp.html",
      "publisher": "La Vanguardia",
      "type": "reference",
      "language": "es",
      "checkedAt": "2026-07-24"
    },
    {
      "id": "source-mad-learn-madrid-history",
      "title": "History of Madrid",
      "url": "https://www.esmadrid.com/en/history-madrid",
      "publisher": "Madrid Destino",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-madrid-austrias",
      "title": "Austrias",
      "url": "https://www.esmadrid.com/en/madrid-neighbourhoods/austrias",
      "publisher": "Madrid Destino",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-prado-two-hours",
      "title": "Two hours at the Museum itinerary",
      "url": "https://www.museodelprado.es/en/itinerary/two-hours-at-the-museum-itinerary/80ddca7e-c34f-4579-b658-46d0ad4791df",
      "publisher": "Museo Nacional del Prado",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-prado-meninas",
      "title": "Las Meninas",
      "url": "https://www.museodelprado.es/en/the-collection/art-work/las-meninas/9fdc7800-9ade-48b0-ab8b-edee94ea877f",
      "publisher": "Museo Nacional del Prado",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-prado-third-may",
      "title": "The 3rd of May 1808 in Madrid",
      "url": "https://www.museodelprado.es/en/the-collection/art-work/the-3rd-of-may-1808-in-madrid-or-the-executions/5e177409-2993-4240-97fb-847a02c6496c",
      "publisher": "Museo Nacional del Prado",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-prado-garden",
      "title": "The Garden of Earthly Delights Triptych",
      "url": "https://www.museodelprado.es/en/the-collection/art-work/the-garden-of-earthly-delights-triptych/02388242-6d6a-4e9e-a992-e1311eab3609",
      "publisher": "Museo Nacional del Prado",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-prado-nobleman",
      "title": "The Nobleman with his Hand on his Chest",
      "url": "https://www.museodelprado.es/en/the-collection/art-work/the-nobleman-with-his-hand-on-his-chest/9cb73bdf-66e8-4826-a9eb-9f0980f9f64f",
      "publisher": "Museo Nacional del Prado",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-reina-collection",
      "title": "Museo Reina Sofía Collections",
      "url": "https://www.museoreinasofia.es/en/collections/",
      "publisher": "Museo Nacional Centro de Arte Reina Sofía",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-guernica",
      "title": "Guernica",
      "url": "https://www.museoreinasofia.es/colecciones/obra/guernica/",
      "publisher": "Museo Nacional Centro de Arte Reina Sofía",
      "type": "official",
      "language": "es",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-rethinking-guernica",
      "title": "Rethinking Guernica",
      "url": "https://guernica.museoreinasofia.es/en",
      "publisher": "Museo Nacional Centro de Arte Reina Sofía",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-unesco-toledo",
      "title": "Historic City of Toledo",
      "url": "https://whc.unesco.org/en/list/379/",
      "publisher": "UNESCO World Heritage Centre",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-toledo-city",
      "title": "Toledo, Ciudad Patrimonio de la Humanidad",
      "url": "https://turismo.toledo.es/toledo.html",
      "publisher": "Ayuntamiento de Toledo",
      "type": "official",
      "language": "es",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-cathedral",
      "title": "The Primate Cathedral of Toledo",
      "url": "https://www.catedralprimada.es/en/the-cathedral/",
      "publisher": "Catedral Primada de Toledo",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-cathedral-transparente",
      "title": "The Transparente",
      "url": "https://www.catedralprimada.es/en/info/corpus-christi/el-transparente",
      "publisher": "Catedral Primada de Toledo",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-cathedral-visit",
      "title": "Cultural visit information",
      "url": "https://www.catedralprimada.es/es/info/museos/normas",
      "publisher": "Catedral Primada de Toledo",
      "type": "official",
      "language": "es",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-santo-tome",
      "title": "Iglesia de Santo Tomé — El entierro del Señor Orgaz",
      "url": "https://santotome.org/",
      "publisher": "Parroquia de Santo Tomé",
      "type": "official",
      "language": "es",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-greco-collection",
      "title": "The Museum's collection",
      "url": "https://www.cultura.gob.es/mgreco/en/la-coleccion/colecciones.html",
      "publisher": "Ministerio de Cultura",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-greco-rooms",
      "title": "El Greco's rooms",
      "url": "https://www.cultura.gob.es/mgreco/en/museo/museo-hoy/salas/greco.html",
      "publisher": "Ministerio de Cultura",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-madrid-food",
      "title": "Austrias — Food and drink",
      "url": "https://www.esmadrid.com/en/madrid-neighbourhoods/austrias",
      "publisher": "Madrid Destino",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-mad-learn-toledo-food",
      "title": "Gastronomía de Toledo",
      "url": "https://turismo.toledo.es/gastronomia.html",
      "publisher": "Ayuntamiento de Toledo",
      "type": "official",
      "language": "es",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-city-history",
      "title": "History of Barcelona",
      "url": "https://www.barcelona.cat/en/discoverbcn/history",
      "publisher": "Ajuntament de Barcelona",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-city-museum",
      "title": "Barcelona History Museum",
      "url": "https://www.barcelona.cat/museuhistoria/en/",
      "publisher": "Museu d’Història de Barcelona",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-eixample",
      "title": "The Eixample and the Cerdà plan",
      "url": "https://www.barcelona.cat/en/discoverbcn/pics/the-eixample-99400391315",
      "publisher": "Ajuntament de Barcelona",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-palau-history",
      "title": "History of the Palau de la Música Catalana",
      "url": "https://www.palaumusica.cat/en/history_23794",
      "publisher": "Palau de la Música Catalana",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-palau-visit",
      "title": "Visits and tickets",
      "url": "https://www.palaumusica.cat/en/visites/visits-and-tickets_1159168",
      "publisher": "Palau de la Música Catalana",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-unesco-domenech",
      "title": "Palau de la Música Catalana and Hospital de Sant Pau, Barcelona",
      "url": "https://whc.unesco.org/en/list/804/",
      "publisher": "UNESCO World Heritage Centre",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-sant-pau",
      "title": "History of the Sant Pau Art Nouveau Site",
      "url": "https://santpaubarcelona.org/en/history/",
      "publisher": "Fundació Hospital de la Santa Creu i Sant Pau",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-old-city",
      "title": "Ciutat Vella",
      "url": "https://www.barcelona.cat/en/discoverbcn/districts/ciutat-vella",
      "publisher": "Ajuntament de Barcelona",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-boqueria-history",
      "title": "History of La Boqueria",
      "url": "https://www.boqueria.barcelona/history-market",
      "publisher": "Mercat de la Boqueria",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-montserrat-abbey",
      "title": "Montserrat Abbey and Sanctuary",
      "url": "https://abadiamontserrat.cat/en/",
      "publisher": "Abadia de Montserrat",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-montserrat-pastoral",
      "title": "The Sanctuary of Our Lady of Montserrat",
      "url": "https://pastoral.abadiamontserrat.cat/en/",
      "publisher": "Abadia de Montserrat",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-montserrat-museum",
      "title": "Museum of Montserrat",
      "url": "https://museudemontserrat.com/en/",
      "publisher": "Museu de Montserrat",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-montserrat-transport",
      "title": "Montserrat transport information",
      "url": "https://www.cremallerademontserrat.cat/en/",
      "publisher": "Ferrocarrils de la Generalitat de Catalunya",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-catalan-cuisine",
      "title": "Catalan cuisine",
      "url": "https://www.catalunya.com/en/continguts/article/catalan-cuisine-dishes-1734434245795",
      "publisher": "Catalunya Tourism",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-pa-tomaquet",
      "title": "Pa amb tomàquet",
      "url": "https://www.gastroteca.cat/receptes/pa-amb-tomaquet/",
      "publisher": "Gastroteca",
      "type": "official",
      "language": "ca",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-escudella",
      "title": "Escudella i carn d’olla",
      "url": "https://canalsalut.gencat.cat/ca/detalls/article/escudella-carn-olla",
      "publisher": "Generalitat de Catalunya",
      "type": "official",
      "language": "ca",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-calcot",
      "title": "Calçot",
      "url": "https://canalaliments.gencat.cat/ca/coneix-aliments/fruites-hortalisses/calcot/",
      "publisher": "Generalitat de Catalunya",
      "type": "official",
      "language": "ca",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-fideuada",
      "title": "Fideuada",
      "url": "https://www.gastroteca.cat/receptes/fideuada/",
      "publisher": "Gastroteca",
      "type": "official",
      "language": "ca",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-markets",
      "title": "Barcelona Institute of Markets",
      "url": "https://www.barcelona.cat/promocioeconomica/en/what-we-do/trade-markets-food-and-consumption/barcelona-institute-markets",
      "publisher": "Ajuntament de Barcelona",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-el-quim",
      "title": "El Quim de la Boqueria menu",
      "url": "https://elquimdelaboqueria.com/menu-2/?lang=en",
      "publisher": "El Quim de la Boqueria",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-xampanyet",
      "title": "El Xampanyet",
      "url": "https://www.elxampanyet.com/",
      "publisher": "El Xampanyet",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    },
    {
      "id": "source-bcn-learn-can-sole",
      "title": "Can Solé",
      "url": "https://restaurantcansole.com/en/",
      "publisher": "Can Solé",
      "type": "official",
      "language": "en",
      "checkedAt": "2026-07-25"
    }
  ],
  "placeLegacyAnchors": {
    "sagrada": "sagrada",
    "parkguell": "parkguell",
    "batllo": "batllo",
    "mila": "mila",
    "cathedral": "cathedral",
    "montjuic": "montjuic",
    "boqueria": "boqueria",
    "montserrat": "montserrat",
    "tarragona": "tarragona",
    "prado": "prado",
    "palacio": "palacio",
    "reinasofia": "reinasofia",
    "nye": "nye",
    "toledo-cathedral": "toledo-cathedral",
    "santotome": "santotome",
    "greco": "greco",
    "santacruz": "santacruz"
  },
  "runtimeContract": {
    "canonicalFile": "assets/phase1-canonical.js",
    "contractFile": "assets/phase1-contract.js",
    "scheduleStatusFields": [
      "inclusionStatus",
      "planningStatus",
      "timeConstraint",
      "bookingRequirement"
    ],
    "timingField": "timing",
    "legacyRuntimeUse": false
  }
};
