const parallaxe0 = document.getElementById("parallaxe0");
const parallaxe1 = document.getElementById("parallaxe1");
const parallaxe2 = document.getElementById("parallaxe2");
const parallaxe3 = document.getElementById("parallaxe3");

window.addEventListener("scroll", function () 
{
    let offset = window.pageYOffset;
    // console.log('Offset: ' + offset);
    // console.log('offset * 0.7' + offset * 0.7);
    parallaxe0.style.backgroundPositionY = offset * 0.355 + "px";
    parallaxe1.style.backgroundPositionY = offset * -0.055 + "px";
    parallaxe2.style.backgroundPositionY = offset * 0.0055 + "px";
    parallaxe3.style.backgroundPositionY = offset * -0.05 + "px";
})