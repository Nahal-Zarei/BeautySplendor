// Fixed Header 
window.onscroll = function() {fixHeaderfunction()};

let header = document.getElementById("header");
let stickyHeader = header.offsetTop;

function fixHeaderfunction() {
  if (window.pageYOffset > stickyHeader) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Reading progress bar
function updateProgressBar (){
  const {scrollTop, scrollHeight} = document.documentElement;
  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + "%";
  document.querySelector("#progress-bar").style.setProperty("--progress", scrollPercent);
}

document.addEventListener("scroll", updateProgressBar);

// Burger menu
document.querySelector(".ham").addEventListener("click", function(){
  document.querySelector(".q").classList.toggle("a");
  document.querySelector(".w").classList.toggle("b");
  document.querySelector(".e").classList.toggle("c");
});

function burgerclick(){
  document.querySelector(".header-list").classList.toggle("show");
}
