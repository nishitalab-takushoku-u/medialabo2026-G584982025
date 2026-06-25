let b;
b = document.querySelector('button#print');
b.addEventListener('click', greeting);

let p;
p = document.querySelector('p#message');

let i;
i = document.querySelector('#shimei');



function greeting() {
    let aisatu;
    aisatu = 'こんにちは、' + i.value + 'さん';
    p.textContent = aisatu;
    console.log(aisatu);
}

