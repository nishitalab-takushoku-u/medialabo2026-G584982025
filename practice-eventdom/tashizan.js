let b;
b = document.querySelector('button#calc');
b.addEventListener('click', calc);

let l;
l = document.querySelector('#left');

let r;
r = document.querySelector('#right');

let p;
p = document.querySelector('#answer');

function calc() {
    let x = Number(l.value);
    let y = Number(r.value);
    let answer;
    answer = x + y;
    console.log(answer);
    p.textContent = answer;
}