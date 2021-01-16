let harmburger = document.querySelector('.harmburger')
let navItem = document.querySelector('.nav--item')
let hour = document.querySelector('.time--hour')
let minute = document.querySelector('.time--minute')
let seconds = document.querySelector('.time--seconds')
let percentage = document.querySelector('.percentages')

harmburger.addEventListener('click',()=>{
 navItem.classList.toggle('open')
})
setInterval(() => {
    let rndx = Math.floor(Math.random()*500) + 1;
    percentage.innerHTML = `${rndx}%`
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    hour.innerHTML = h;
    minute.innerHTML = m;
    seconds.innerHTML = s;
if(h <10){
    hour.innerHTML = `0${h}`;
}
if(m <10){
    minute.innerHTML = `0${m}`;
}
if(s <10){
    seconds.innerHTML = `0${s}`;
}
}, 1000);
AOS.init();