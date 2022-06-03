window.addEventListener("load", function() {
    const menuToggle = this.document.querySelector('#menu-toggle');
    const menu = this.document.querySelector('.container-header');

    menuToggle && menuToggle.addEventListener("click", inMenu);
    function inMenu(e) {
        menu && menu.classList.add("is-show");
    }
    this.document.addEventListener("click", outInMenu);
    function outInMenu(e) {
        if (e.target.matches('#menu-toggle') || e.target.matches('.container-header')) {
            return;
        }
        menu && menu.classList.remove("is-show");
    }
})