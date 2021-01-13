let harmburger = document.querySelector('.harmburger')
let navItem = document.querySelector('.nav--item')

harmburger.addEventListener('click',()=>{
 navItem.classList.toggle('open')
})