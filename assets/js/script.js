function menu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


window.onscroll = function() {skrull()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function skrull(){
  if (window.pageYOffset > sticky){
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}