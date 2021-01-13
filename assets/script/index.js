let harmburger = document.querySelector('.harmburger')
let navItem = document.querySelector('.nav--item')
let main = document.querySelector('.overlay')

harmburger.addEventListener('click',()=>{
 navItem.classList.toggle('open')
 main.classList.toggle('over')
})