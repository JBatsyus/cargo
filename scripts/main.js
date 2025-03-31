document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header__wrap');
    const headerHeight1 = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', headerHeight1 + "px");



    const menuHumb = document.querySelector('.menu-humb');
    const menuMob = document.querySelector('.menu-mob');
    const headerWrapper = document.querySelector('.header__wrap');

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const headerHeight = document.querySelector('.header').offsetHeight;


    // Обработчик клика на бургер
    menuHumb.addEventListener('click', function () {
        menuHumb.classList.toggle('active');
        menuMob.classList.toggle('active');
        headerWrapper.classList.toggle('menu_active');
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.menu-mob') && !e.target.closest('.header__wrap')) {
            menuHumb.classList.remove('active');
            menuMob.classList.remove('active');
            headerWrapper.classList.remove('menu_active');
        }
    });
    // Закрытие меню при клике на ссылку
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function () {
            menuHumb.classList.remove('active');
            menuMob.classList.remove('active');
            headerWrapper.classList.remove('menu_active');
        });
    })

    // якоря, доскроллы, активный пункт меню


    // Добавляем обработчик клика для каждой ссылки
    anchorLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Отменяем стандартное поведение ссылки

            // Получаем ID целевого элемента из href
            const targetId = link.getAttribute('href').substring(
                1); // Убираем # из href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Плавно прокручиваем до целевого элемента с учетом высоты шапки
                const targetPosition = targetElement.getBoundingClientRect().top +
                    window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Добавляем класс is-active к текущей ссылке и удаляем у остальных
                anchorLinks.forEach(otherLink => {
                    otherLink.classList.remove('is-active');
                });
                link.classList.add('is-active');
            }
        });
    });

    // Добавляем обработчик прокрутки для удаления класса is-active при изменении прокрутки
    window.addEventListener('scroll', () => {
        let current = '';

        anchorLinks.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top +
                    window.pageYOffset;
                const offsetPosition = targetPosition - headerHeight;

                if (window.pageYOffset >= offsetPosition - 100 && window.pageYOffset <
                    offsetPosition + targetElement.offsetHeight - 100) {
                    current = targetId;
                }
            }
        });

        anchorLinks.forEach(link => {
            link.classList.remove('is-active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('is-active');
            }
        });
    });

    // Анимация процесса
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
    setInterval(animateProcess, 1500);
});

var swiperWorkflowGallery = new Swiper(".workflow-gallery__swiper", {
    lazy: true,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    navigation: {
        nextEl: ".to-right",
        prevEl: ".to-left",
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
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
    },

});


// Модальное окно

// Получаем все ссылки для открытия модальных окон
const links = document.querySelectorAll('.stretched-link');

// Получаем все кнопки закрытия модальных окон
const closeButtons = document.querySelectorAll('.cargo-types__modal-close');

// Функция для открытия модального окна
function openModal(modal) {
    modal.classList.add('show'); // Показываем модальное окно
    document.body.classList.add('no-scroll'); // Отключаем прокрутку
}

// Функция для закрытия модального окна
function closeModal(modal) {
    modal.classList.remove('show'); // Скрываем модальное окно
    document.body.classList.remove('no-scroll'); // Включаем прокрутку
}

// Добавляем обработчики событий для открытия модальных окон
links.forEach(link => {
    link.addEventListener('click', () => {
        const modalId = link.getAttribute('data-src'); // Получаем ID модального окна
        const modal = document.querySelector(modalId); // Находим модальное окно
        if (modal) {
            openModal(modal);
        }
    });
});

// Добавляем обработчики событий для закрытия модальных окон
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.cargo-types__modal'); // Находим родительское модальное окно
        if (modal) {
            closeModal(modal);
        }
    });
});

// Закрытие модального окна при клике на фон
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('cargo-types__modal')) {
        const modal = event.target;
        closeModal(modal);
    }
});