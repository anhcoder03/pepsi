setInterval(() => {
        console.log(window.scrollY)
}, 2000);

const pepsiImg = document.querySelector('.pepsi-zero-sugar-right');
const pepsiImg1 = document.querySelector('.pepsi-zero-sugar-left');
const pepsiTwilLeft = document.querySelector('.pepsi-twil-left');
const pepsiTwilRight = document.querySelector('.pepsi-twil-right');
const scrollUp = document.querySelector('.follow-pepsi-container');
const smellLeft = document.querySelector('.smell-left');
const smellRight = document.querySelector('.smell-right');

window.addEventListener('scroll', () => {
    // 326
    if (window.scrollY >= 326) {
        pepsiImg1.style = 'transform: translateX(0); opacity: 1;'
    }else if (window.scrollY < 326) {
        pepsiImg1.style = 'transform: translateX(-100%);'
    }
    if (window.scrollY >= 326) {
        pepsiImg.style = 'transform: translateX(0); opacity: 1;'
    }else if (window.scrollY < 326) {
        pepsiImg.style = 'transform: translateX(100%);'
    }
    // 2000
    if (window.scrollY >= 2000) {
        pepsiTwilLeft.style = 'transform: translateY(0); opacity: 1;'
    } else if (window.scrollY < 2000) {
        pepsiTwilLeft.style ='transform: translateY(100%);'
    }
    if (window.scrollY >= 2000) {
        pepsiTwilRight.style = 'transform: translateX(0); opacity: 1;'
    } else if (window.scrollY < 2000) {
        pepsiTwilRight.style ='transform: translateX(100%);'
    }
    // 2530
    if (window.scrollY >=2530) {
        smellLeft .style = 'transform: translateX(0); opacity: 1;'
    } else if (window.scrollY < 2530) {
        smellLeft.style = 'transform: translateX(-100%);'
    }
    if (window.scrollY >=2530) {
        smellRight.style = 'transform: translateX(0); opacity: 1;'
    } else if (window.scrollY < 2530) {
        smellRight.style = 'transform: translateX(100%);'
    }
    // 3180
    if (window.scrollY >= 3180) {
        scrollUp.style = 'transform: translateY(0); opacity: 1;'
    } else if (window.scrollY < 3300) {
        scrollUp.style ='transform: translateY(60%);'
    }
})
