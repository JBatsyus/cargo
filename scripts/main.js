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

var swiperWorkflowGallery = new Swiper(".workflow-gallery__swiper", {
    lazy: true,
    loop: true,
    effect: "fade",
    navigation: {
        nextEl: ".workflow-gallery__next",
        prevEl: ".workflow-gallery__prev",
    },

});
var swiperAirparnets = new Swiper(".airparnets__swiper", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});
var swiperReviews = new Swiper(".reviews__swiper", {

    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true, // Включаем перекрестное fade-затухание
    },
    //   autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
    },

});

