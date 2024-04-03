const clouds = [...document.querySelectorAll('.header-cloud')]
const boat = document.querySelector('.header-boat')

window.addEventListener('scroll', () => {

    console.log(Math.floor(this.scrollY))

    clouds.forEach(cloud => {
        let speed = cloud.getAttribute(`data-speed`)
         cloud.style.transform = `translateX(${this.scrollY * speed}px)`

         let speedBoat = boat.getAttribute(`data-speed`)
         boat.style.transform = `translateX(${this.scrollY * speedBoat}px)`
    });
})

const title = document.querySelector('.header-title')
const text = title.innerHTML
title.innerHTML = null

function str (x = 0) {
    title.innerHTML= title.innerHTML + text[x]
    x++
    if (x < text.length){
        setTimeout( () => {
            str(x)
        },200);
    }
}
str()