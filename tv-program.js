
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let kennsaku = [
    {kekka1: ["検索結果1件目",
      "開始時刻: 2022年3月4日04:35:00",
      "終了時刻: 2022年3月4日04:40:00",
      "チャンネル: NHK総合","タイトル:みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
      "サブタイトル:みんなのうた「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ゴールデンボンバー",
      "番組説明:みんなのうた「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ゴールデンボンバー",
      "出演者:"]
    },
    {kekka2: ["検索結果2件目",
      "開始時刻: 2022年3月4日 23:05:00",
      "終了時刻: 2022年3月4日 23:10:00",
      "チャンネル: NHK総合",
      "タイトル: パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
      "サブタイトル: パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
      "出演者: 【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史"]
    }
  ];
  for (let a of kennsaku[0].kekka1) {
    console.log(a);
  }

  for (let b of kennsaku[1].kekka2) {
    console.log(b);
  }
}

let k;
k = document.querySelector('#kensaku');

let b;
b = document.querySelector('button#kensakub');
b.addEventListener('click', printDom);
// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let t;
  t = document.createElement('h3');
  t.textContent = 'NHKの番組表（検索結果は2件)'

  result = document.querySelector('div#result');
  result.insertAdjacentElement('beforeend', t);

   kennsaku = [
    {kekka11:"検索結果1件目", 
      kekka12:["開始時刻: 2022年3月4日04:35:00",
      "終了時刻: 2022年3月4日04:40:00",
      "チャンネル: NHK総合","タイトル:みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
      "サブタイトル:みんなのうた「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ゴールデンボンバー",
      "番組説明:みんなのうた「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ゴールデンボンバー",
      "出演者:"]
    },
    {kekka21:"検索結果2件目", 
      kekka22:["開始時刻: 2022年3月4日 23:05:00",
      "終了時刻: 2022年3月4日 23:10:00",
      "チャンネル: NHK総合",
      "タイトル: パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
      "サブタイトル: パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
      "出演者: 【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史"]
    }
  ];
  
  let h21 = document.createElement('h2');
  h21.textContent = (kennsaku[0].kekka11);

  result = document.querySelector('div#result');
  result.insertAdjacentElement('beforeend', h21);

  let u1 = document.createElement('ul');
  for (let a of kennsaku[0].kekka12) {
    let l = document.createElement('li');
    l.textContent = (a);
    u1.insertAdjacentElement('beforeend', l);
  }

  result.insertAdjacentElement('beforeend', u1);

  let h22 = document.createElement('h2');
  h22.textContent = (kennsaku[1].kekka21);

  result = document.querySelector('div#result');
  result.insertAdjacentElement('beforeend', h22);

  let u2 = document.createElement('ul');
  for (let b of kennsaku[1].kekka22) {
    let l = document.createElement('li');
    l.textContent = (b);
    u2.insertAdjacentElement('beforeend', l);
  }

  result.insertAdjacentElement('beforeend', u2);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};