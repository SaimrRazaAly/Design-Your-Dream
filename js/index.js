// searchinga all doim element
let openit = document.querySelector("#openit");
let closeit = document.querySelector("#close");
let unorder = document.querySelector("#unorder");
let navbar = document.querySelector("#navbar");
let header = document.querySelector("header");

openit.onclick = () => {
  header.classList.add("h-column");
  unorder.classList.add("block");
  navbar.style.padding='10px'
openit.style.display='none'

}

closeit.onclick = () => {
  header.classList.remove("h-column");
  unorder.classList.remove("block");
  openit.style.display='block'
};
window.onscroll = () => {
  if (window.scrollY > 0) {
    header.style.background = "#ffff";
    header.style.color = "black";
  } else {
    header.style.background = "transparent";
    header.style.color = "#fffff";
  }
};
