// window.addEventListener("load", function() {
//     const menuToggle = this.document.querySelector('#menu-toggle');
//     const MenuClose = this.document.querySelector('#menu-close');
//     const menu = this.document.querySelector('.container-header');

//     menuToggle && menuToggle.addEventListener("click", inMenu);
//     function inMenu(e) {
//         menu && menu.classList.add("is-show");
//     }
//     // this.document.addEventListener("click", outInMenu);
//     function outInMenu(e) {
//         menu && menu.classList.remove("is-show");
//     }
// })

const menuToggle = this.document.querySelector("#menu-toggle");
const MenuClose = this.document.querySelector("#menu-close");
const menu = this.document.querySelector(".container-header");
const menuOut = this.document.querySelector("#menu");

function inMenu() {
    menu.classList.add('is-show');
}
function outInMenu() {
    menu.classList.remove('is-show')
}