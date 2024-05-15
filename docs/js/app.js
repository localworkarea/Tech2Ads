(() => {
    "use strict";
    let bodyLockStatus = true;
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) document.documentElement.classList.toggle("menu-open");
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (() => {
        const langButton = document.querySelector(".lang__button");
        const langElement = document.querySelector(".lang");
        langButton.addEventListener("click", (() => {
            langElement.classList.toggle("_lng-open");
        }));
    }));
    window["FLS"] = false;
    menuInit();
})();