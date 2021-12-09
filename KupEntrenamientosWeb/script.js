//navbar
const mainNavigation = document.querySelector(".main-navigation");
const overlay = document.querySelector(".overlay");
const toggler = document.querySelector(".navbar-toggler");

const openSideNav = () => {
    mainNavigation.classList.add("active");
    overlay.style.display = "flex";
}
const closeSideNav = () => {
    mainNavigation.classList.remove("active");
    overlay.style.display = "none";
}

document.addEventListener("swiped-left", openSideNav);
document.addEventListener("swiped-right", closeSideNav);
toggler.addEventListener("click", openSideNav);
overlay.addEventListener("click", closeSideNav);

//Activa on scroll view la animación "GaleriaRtoL"
window.addEventListener('scroll', function(){
    let gal_img = document.getElementsByClassName("gal_img");
    let marca = document.getElementById("gal_img_animation");
    let position = marca.getBoundingClientRect().top;
    console.log(position);
    let windowSize = window.innerHeight;
    console.log(windowSize);
    
    if (position < windowSize){
        for ( var i = 0; i < gal_img.length; i++){
        gal_img[i].style.animation = "GaleriaRtoL 3s";
    }}
})
