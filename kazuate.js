// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let p;
p = document.querySelector('#kaisu');

let q;
q = document.querySelector('#yoso');

let l;
l = document.querySelector('#kazu');

let t;
t = document.querySelector('#result');

let seitou = 0;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu = kaisu + 1;
  p.textContent = kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso;
  yoso = Number(l.value);
  q.textContent = yoso;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  if(kaisu<4 && seitou === 0) {
    if(kotae===yoso) {
      t.textContent = '正解です．おめでとう!';
      seitou = seitou + 1;
    }
    else if (yoso < kotae && kaisu < 3) {
      t.textContent = 'まちがい．答えはもっと大きいですよ';
    }
    else if (yoso > kotae && kaisu < 3) {
      t.textContent = 'まちがい．答えはもっと小さいですよ';
    }
    else {
      t.textContent = 'まちがい．残念でした答えは '+kotae+' です．';
    }
  }
  else {
    t.textContent = '答えは '+kotae+' でした．すでにゲームは終わっています';
  }
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b;
b = document.querySelector('button#answer');
b.addEventListener('click', hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
