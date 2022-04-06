const s1btn = document.querySelectorAll('.bg-changer');
const bGround = document.querySelector('.s1-child');
s1btn[0].addEventListener('click', ()=>{
    console.log(s1btn);
    bGround.style.backgroundImage = `url("./img/bg-s1.png")`;
});
s1btn[1].addEventListener('click', ()=>{
    console.log(s1btn);
    bGround.style.backgroundImage = `url("./img/s1p2.png")`;
});
s1btn[2].addEventListener('click', ()=>{
    console.log(s1btn);
    bGround.style.backgroundImage = `url("./img/s1p3.png")`;
});
s1btn[3].addEventListener('click', ()=>{
    console.log(s1btn);
    bGround.style.backgroundImage = `url("./img/s1p4.png")`;
});
s1btn[4].addEventListener('click', ()=>{
    console.log(s1btn);
    bGround.style.backgroundImage = `url("./img/s1p5.png")`;
});

const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
let count = document.querySelector('.count');
let countValue = 1;
plus.addEventListener('click', ()=>{
    countValue++;
    count.innerHTML = countValue;
});
minus.addEventListener('click', ()=>{
    if(countValue < 2){
        countValue = 2;
        alert('please select 1 or more product');
    }
    countValue--;
    count.innerHTML = countValue;
});
