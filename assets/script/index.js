let harmburger = document.querySelector('.harmburger')
let navItem = document.querySelector('.nav--item')
let overlay = document.querySelector('.overlay')
let hour = document.querySelector('.time--hour')
let minute = document.querySelector('.time--minute')
let seconds = document.querySelector('.time--seconds')
let percentage = document.querySelector('.percentages')

harmburger.addEventListener('click',()=>{
 navItem.classList.toggle('open')
 overlay.classList.toggle('over')
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
// function showTime(){
//     let date = new Date();
//     let h = date.getHours(); // 0 - 23
//     let m = date.getMinutes(); // 0 - 59
//     let s = date.getSeconds(); // 0 - 59
//     let session = "AM";
    
//     if(h == 0){
//         h = 12;
//     }
    
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
    
//     let time = h + ":" + m + ":" + s + " " + session;
//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;
    
//     setTimeout(showTime, 1000);
    
// }

// showTime();