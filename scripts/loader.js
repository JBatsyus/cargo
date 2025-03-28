
            document.addEventListener('DOMContentLoaded', function () {
                const loadingScreen = document.querySelector('.loading-screen');
                const rotatingElement = document.querySelector('.loading-screen__aim-wrap');
                const textElement = document.querySelector('.loading-screen__text');
                const mainContent = document.querySelector('.main-content');
                const headerWrap = document.querySelector('.header__wrap');

                // Проверяем, видел ли пользователь анимацию
                if (document.cookie.includes('animation_shown=true')) {
                    loadingScreen.style.display = 'none';
                    mainContent.style.display = 'block';
                    initContentAnimations();
                    return;
                }

                // Тексты для каждой позиции
                const texts = [{
                        angle: 0,
                        text: 'Сбор груза'
                    },
                    {
                        angle: 90,
                        text: 'Груз в пути'
                    },
                    {
                        angle: 180,
                        text: 'Груз доставлен'
                    },
                    {
                        angle: 270,
                        text: 'Груз у вас'
                    }
                ];

                let animationFinished = false;
                let lastAngle = 0;

                const checkInterval = setInterval(() => {
                    const transform = window.getComputedStyle(rotatingElement).getPropertyValue(
                        'transform');
                    const matrix = new DOMMatrix(transform);
                    const angle = Math.round(Math.atan2(matrix.b, matrix.a) * (180 / Math.PI));
                    const normalizedAngle = angle < 0 ? angle + 360 : angle;

                    // Определяем направление вращения
                    const isClockwise = normalizedAngle > lastAngle ||
                        (lastAngle > 350 && normalizedAngle < 10);
                    lastAngle = normalizedAngle;

                    // Проверяем достижение конечной точки (270°)
                    if (normalizedAngle >= 265 && normalizedAngle <= 275 && !animationFinished &&
                        isClockwise) {
                        animationFinished = true;

                        // Останавливаем анимацию
                        rotatingElement.style.animation = 'none';
                        rotatingElement.style.transform = 'rotate(270deg)';

                        // Плавно скрываем экран через 1 секунду
                        setTimeout(() => {
                            loadingScreen.style.opacity = '0';

                            setTimeout(() => {
                                loadingScreen.style.display = 'none';
                                // Показываем основной контент
                                mainContent.style.display = 'block';

                                // Устанавливаем cookie на 30 дней
                                document.cookie =
                                    'animation_shown=true; max-age=2592000; path=/';

                                // Инициализируем анимации для основного контента
                                initContentAnimations();
                            }, 500);
                        }, 1000);
                    }

                    // Обновление текста
                    const targetPoint = texts.find(item => Math.abs(normalizedAngle - item.angle) < 5);
                    if (targetPoint && textElement.textContent !== targetPoint.text) {
                        textElement.style.opacity = '0';
                        setTimeout(() => {
                            textElement.textContent = targetPoint.text;
                            textElement.style.opacity = '1';
                        }, 300);
                    }
                }, 100);

                function initContentAnimations() {
                    // Инициализация WOW.js
                    if (typeof WOW !== 'undefined') {
                        new WOW().init();
                    }

                    // Отложенная загрузка видео
                    const heroVideo = document.querySelector('.hero__video');
                    if (heroVideo) {
                        heroVideo.setAttribute('preload', 'none');
                        const observer = new IntersectionObserver((entries) => {
                            if (entries[0].isIntersecting) {
                                heroVideo.load();
                            }
                        }, {
                            threshold: 0.1
                        });
                        observer.observe(heroVideo);
                    }

                    // Показ шапки при скролле
                    // let lastScroll = 0;
                    // window.addEventListener('scroll', function () {
                    //     const currentScroll = window.pageYOffset;

                    //     if (currentScroll > 100) {
                    //         headerWrap.classList.add('visible');
                    //     } else if (currentScroll < lastScroll && currentScroll < 50) {
                    //         headerWrap.classList.remove('visible');
                    //     }

                    //     lastScroll = currentScroll;
                    // });
                }
            });
   