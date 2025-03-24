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
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: ".workflow-gallery__next",
        prevEl: ".workflow-gallery__prev",
    },

});
var swiperAirparnets = new Swiper(".airparnets__swiper", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    loop: true,
    speed: 3000,
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




document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".process__item");

    let currentIndex = 0;

    function animateProcess() {
        // Удаляем класс active у всех элементов
        items.forEach((item) => item.classList.remove("process__item--active"));

        if (currentIndex < items.length) {
            // Добавляем класс active к текущему элементу
            items[currentIndex].classList.add("process__item--active");

            // Переходим к следующему элементу
            currentIndex++;
        } else {
            // Когда доходим до последнего элемента, активируем все элементы
            items.forEach((item) => item.classList.add("process__item--active"));

            // Сбрасываем индекс для начала цикла заново
            setTimeout(() => {
                items.forEach((item) => item.classList.remove("process__item--active"));
                currentIndex = 0;
            }, 1500); // Задержка перед началом нового цикла
        }
    }

    // Запускаем анимацию каждые 2 секунды
    setInterval(animateProcess, 2000);
});