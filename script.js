const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
 function page4(){
    var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-img");
function isSmallScreen() {
    return window.matchMedia("(max-width: 600px)").matches;
}
elemC.addEventListener("mouseenter", function () {
    if (!isSmallScreen()){
    fixed.style.display = "block"
    }
})
elemC.addEventListener("mouseleave", function () {
    if (!isSmallScreen()){
    fixed.style.display = "none"
    }
})
var elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        if (!isSmallScreen()) {
        var image=e.getAttribute("data-image");
         fixed.style.backgroundImage =`url(${image})`
        }
    });
});
 }


  function swiperanimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
  }
  swiperanimation()
  function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

function menu() {
    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg=document.querySelector("nav img")
    var flag=0
menu.addEventListener("click",function(){
    if(flag==0){
    full.style.top = 0
    navimg.style.opacity =  0
    flag = 1
    }
    else{
    full.style.top = "-100%"
    navimg.style.opacity =  1
    flag = 0
    }
})
} 
loaderAnimation()
page4()
menu()