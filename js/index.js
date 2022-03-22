const checkbox = document.getElementById("checkbox")
const checkboxLabel = document.getElementById("checkbox-label")
const navBarMobile = document.getElementById("navbarmobile")
const hero = document.getElementById("main-pic")
const btn = document.getElementById("btn")
const btn_left = document.getElementById("btn-left")
const btn_right = document.getElementById("btn-right")
const heroImages = {
    desk_hero_1: "url(./room-homepage-master/images/desktop-image-hero-1.jpg)",
    desk_hero_2: "url(./room-homepage-master/images/desktop-image-hero-2.jpg)",
    desk_hero_3: "url(./room-homepage-master/images/desktop-image-hero-3.jpg)",
    mobile_hero_1: "url(./room-homepage-master/images/mobile-image-hero-1.jpg)",
    mobile_hero_2: "url(./room-homepage-master/images/mobile-image-hero-2.jpg)",
    mobile_hero_3: "url(./room-homepage-master/images/mobile-image-hero-3.jpg)",

}
const hero_1 = "url(./../../room-homepage-master/images/desktop-image-hero-1.jpg)"
let image = 1

function displayNavMobile() {
    navBarMobile.classList.toggle("hide")
}

function changeImageSlider() {
    // if ()
}

window.addEventListener("change", ev => {
    alert(2)
})

btn.addEventListener("click", ev => {
    btn.classList.add("nonclick")
    setTimeout(timeout, 500)
    if (window.screen.availWidth < 562) {
        if (ev.target == btn_left) {
            if (image == 1) return false
            if (image == 3) {
                hero.style.backgroundImage = heroImages.mobile_hero_2
            } else if (image == 2) {
                hero.style.backgroundImage = heroImages.mobile_hero_1
            }
            image--
        } else {
            if (image == 3) return false
            if (image == 1) {
                hero.style.backgroundImage = heroImages.mobile_hero_2
                hero.style.backgroundImage = heroImages.mobile_hero_2
            } else if (image == 2) {
                hero.style.backgroundImage = heroImages.mobile_hero_3
                hero.style.backgroundImage = heroImages.mobile_hero_3

            }
            image++
        }
    } else {
        if (ev.target == btn_left) {
            if (image == 1) return false
            if (image == 3) {
                hero.style.backgroundImage = heroImages.desk_hero_2
            } else if (image == 2) {
                hero.style.backgroundImage = heroImages.desk_hero_1
            }
            image--
        } else {
            if (image == 3) return false
            if (image == 1) {
                hero.style.backgroundImage = heroImages.desk_hero_2
            } else if (image == 2) {
                hero.style.backgroundImage = heroImages.desk_hero_3
            }
            image++
        }
    }
    alert(hero.style.backgroundImage)
})

function timeout() {
    btn.classList.remove("nonclick")
}
