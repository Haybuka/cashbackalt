let harmburger = document.querySelector('.harmburger')
let navItem = document.querySelector('.nav--item')
let overlay = document.querySelector('.overlay')

harmburger.addEventListener('click',()=>{
 navItem.classList.toggle('open')
 overlay.classList.toggle('over')
})