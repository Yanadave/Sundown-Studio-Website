/*const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});*/

/*var a = document.querySelector("#elem1")
var image = a.getAttribute("data-image")
console.log(image)*/

function page4Animation(){
    let elemC = document.querySelector("#elem-container")
let fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

let elems = document.querySelectorAll(".elem")
console.log(elems)
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        let image=e.getAttribute("data-image")
    fixed.style.backgroundImage =  `url(${image})` 
    })
})

}


function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        
      });
    
}
swiperAnimation()
page4Animation()