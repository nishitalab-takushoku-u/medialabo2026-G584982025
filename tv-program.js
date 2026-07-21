
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let i = 1;
  for(let a of data.list.g1) {
    console.log('検索結果' + i + '件目');
    console.log('タイトル:' + a.title);
    console.log('チャンネル:' + a.service.name);
    console.log('開始時刻:' + a.start_time);
    console.log('終了時刻:' + a.end_time);
    console.log('サブタイトル:' + a.subtitle);
    console.log('番組説明:' + a.content);
    console.log('出演者:' + a.act);
    i = i + 1;
  }
}

let k;
k = document.querySelector('#kensaku1');

// let b;
// b = document.querySelector('button#serviseb');
// b.addEventListener('click', printDom);
// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  const result = document.querySelector('div#result');
  result.textContent = '';
  let i = 1;

  let sI = document.querySelector('input#servise');
  let gI = document.querySelector('input#genre');
  
  let service = sI.value;
  let genre = gI.value;

  for(let a of data.list[service]) {
    let t = document.createElement('h3');
    t.textContent = '検索結果' + i + '件目';
    result.insertAdjacentElement('beforeend', t);

    let title = document.createElement('h2');
    title.textContent = 'タイトル:' + a.title;
    result.insertAdjacentElement('beforeend', title);

    let u = document.querySelector('div#result');
    u = document.createElement('ul');

    let name = document.createElement('li');
    name.textContent = 'チャンネル:' + a.service.name;
    result.insertAdjacentElement('beforeend', name);

    let start_time = document.createElement('li');
    start_time.textContent = '開始時刻:' + a.start_time;
    result.insertAdjacentElement('beforeend', start_time);
 
    let end_time = document.createElement('li');
    end_time.textContent = '終了時刻:' + a.end_time;
    result.insertAdjacentElement('beforeend', end_time);

    let subtitle = document.createElement('li');
    subtitle.textContent = 'サブタイトル:' + a.subtitle;
    result.insertAdjacentElement('beforeend', subtitle);

    let content = document.createElement('li');
    content.textContent = '番組説明:' + a.content;
    result.insertAdjacentElement('beforeend', content);

    let act = document.createElement('li');
    act.textContent = '出演者:' + a.act;
    result.insertAdjacentElement('beforeend', act);

    i = i + 1;
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let sb;
sb = document.querySelector('button#serviseb');
sb.addEventListener('click', sendRequest);

let gb;
gb = document.querySelector('button#genreb');
gb.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let sI = document.querySelector('input#servise');
  let gI = document.querySelector('input#genre');
  
  let service = sI.value;
  let genre = gI.value;

  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+ service +'-'+ genre +'-j.json';

     axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let responseData = resp.data;
  console.log(responseData);
  printDom(responseData);
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