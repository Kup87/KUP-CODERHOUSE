//Activa on scroll view la animación "GaleriaRtoL"
window.addEventListener('scroll', function(){
    let gal_img = document.getElementsByClassName("gal_img");
    let marca = document.getElementById("gal_img_animation")
    let position = marca.getBoundingClientRect().top;
    let windowSize = window.innerHeight;

    if (position < windowSize){
        for ( var i = 0; i < gal_img.length; i++){
        gal_img[i].style.animation = "GaleriaRtoL 3s"
    }}
})
