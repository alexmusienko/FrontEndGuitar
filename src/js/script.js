window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.nav-menu'),
        menuItem = document.querySelectorAll('.nav-menu__item');

    if (hamburger && menu && menuItem) {

        hamburger.addEventListener('click', () => {
            menu.classList.toggle('nav-menu_active');
            hamburger.classList.toggle('hamburger_active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.toggle('nav-menu_active');
                hamburger.classList.toggle('hamburger_active');
            });

        });
    }
});

$(document).ready(function () {
    $(".content-link").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);
        e.preventDefault();
        return false;
    });
});