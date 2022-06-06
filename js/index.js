const checkbox = document.getElementById("checkbox")
const checkboxLabel = document.getElementById("checkbox-label")
const navBarMobile = document.getElementById("navbarmobile")
const hero = document.getElementById("main-pic")
const btn = document.getElementById("btn")
const btn_left = document.getElementById("btn-left")
const btn_right = document.getElementById("btn-right")
let image = 1
const mobileHeroImages = {
    one: "url(./room-homepage-master/images/mobile-image-hero-1.jpg)",
    two: "url(./room-homepage-master/images/mobile-image-hero-2.jpg)",
    three: "url(./room-homepage-master/images/mobile-image-hero-3.jpg)",
}
const desktopHeroImages = {
    one: "url(./room-homepage-master/images/desktop-image-hero-1.jpg)",
    two: "url(./room-homepage-master/images/desktop-image-hero-2.jpg)",
    three: "url(./room-homepage-master/images/desktop-image-hero-3.jpg)",
}

if (window.innerWidth < 562)  hero.style.backgroundImage = mobileHeroImages.one 
else hero.style.backgroundImage = desktopHeroImages.one


function displayNavMobile() {
    navBarMobile.classList.toggle("hide")
}

btn.addEventListener("click", ev => {
    btn.classList.add("nonclick")
    setTimeout(enableClick, 500)
    const screenwidth = window.screen.availWidth
    if ( screenwidth < 562) changeHeroImage(mobileHeroImages, ev.target)
    else changeHeroImage(desktopHeroImages, ev.target)
})

function enableClick() {
    btn.classList.remove("nonclick")
}

function changeHeroImage(setOfImages, button) {
    if (button == btn_left) {
        if (image == 1) return false
        if (image == 2) hero.style.backgroundImage = setOfImages.one
        if (image == 3) hero.style.backgroundImage = setOfImages.two
        image--
    } else {
        if (image == 3) return false
        if (image == 1) hero.style.backgroundImage = setOfImages.two
        if (image == 2) hero.style.backgroundImage = setOfImages.three
        image++
    }
}
