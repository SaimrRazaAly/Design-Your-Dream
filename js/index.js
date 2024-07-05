// searchinga all doim element
let openit = document.querySelector('#openit')
let unorder = document.querySelector('#unorder')
let navbar = document.querySelector('#navbar')
let header = document.querySelector('header')

openit.onclick = (()=>{
 header.classList.toggle('h-column')
 unorder.classList.toggle('block')
 if (unorder.classList.contains('block')) {
   openit.innerText = 'X'
  
 }
 else  {
   openit.innerText = '='
  
 }
})