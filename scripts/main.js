document.addEventListener('DOMContentLoaded', function () {
    const menuHumb = document.querySelector('.menu-humb');
    const menuMob = document.querySelector('.menu-mob');
    const headerWrap = document.querySelector('.header__wrap');

    // Обработчик клика на бургер
    menuHumb.addEventListener('click', function () {
        menuHumb.classList.toggle('active');
        menuMob.classList.toggle('active');
        headerWrap.classList.toggle('menu_active');
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.menu-mob') && !e.target.closest('.header__wrap')) {
            menuHumb.classList.remove('active');
            menuMob.classList.remove('active');
            headerWrap.classList.remove('menu_active');
        }
    });
});

var swiperWorkflowGallery = new Swiper(".workflowGallery", {
    loop: true,
    effect: "fade",
    navigation: {
        nextEl: ".workflow-gallery__next",
        prevEl: ".workflow-gallery__prev",
    },
    
});