window.addEventListener('DOMContentLoaded', function () {
    'use strict';


    //Timer
    function countTimer(deadLine) {

        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRamining() {

            let dateStop = new Date(deadLine).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                min = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);

            if (seconds < 9) { seconds = '0' + seconds; }
            if (min < 9) { min = '0' + min; }
            if (hours < 9) { hours = '0' + hours; }

            return { timeRemaining, hours, min, seconds };

        }

        function updateClock() {

            let timer = getTimeRamining();

            if (timer.timeRemaining > 0) {
                timerHours.innerHTML = timer.hours;
                timerMinutes.innerHTML = timer.min;
                timerSeconds.innerHTML = timer.seconds;

                setTimeout(updateClock, 1000);
            }
            else {
                timerHours.innerHTML = '00';
                timerMinutes.innerHTML = '00';
                timerSeconds.innerHTML = '00';
            }
        }

        updateClock();
    }
    countTimer('2020/12/31');


    //Menu
    const toggleMenu = () => {

        document.body.addEventListener('click', (e) => {
            let menu = document.querySelector('menu');

            let target = e.target;
            //Функция скрывающая меню
            const handlerMenu = () => {
                menu.classList.toggle('active-menu');
            };
            //Функция для скролла к елементам
            const reachTo = (elm) => {
                const id = elm.getAttribute("href"),
                    elem = document.querySelector(`${id}`);



                let stopScroll,
                    counter = 0;

                function startMove() {

                    if (document.documentElement.scrollTop > elem.offsetTop) {
                        cancelAnimationFrame(stopScroll);
                        return;
                    }
                    document.documentElement.scrollTop = counter;
                    counter += parseInt((elem.offsetTop - counter) / 7 + 1);
                    stopScroll = requestAnimationFrame(startMove);
                }
                startMove();
            };



            //Проверяем если клик был вне модального окна
            if (!target.closest('menu')) {
                menu = document.querySelector('menu');

                if (menu.classList.contains('active-menu')) {
                    handlerMenu();
                }
            }
            //Выводим модальное окно ро клику на (МЕНЮ)
            if (target.closest('.menu')) {

                if (target.closest('.menu')) {

                    handlerMenu();
                }

            }
            //Плавный скрол по разделам меню
            if (target.closest('menu')) {



                if (target.closest('.close-btn')) {
                    handlerMenu();
                } else if (target.closest('a')) {


                    if (menu.classList.contains('active-menu')) { handlerMenu(); }
                    reachTo(target.closest('a'));
                }
            }
            //Плавный скрол для кнопки вне модального меню
            if (target.closest('a').getAttribute('href') === '#service-block') {
                if (menu.classList.contains('active-menu')) { handlerMenu(); }
                reachTo(target.closest('a'));
            }  
       
       
        });//ОБРАБОТЧИК КЛИКОВ МЕНЮ
    };
    toggleMenu();

    //Popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupContent = popup.querySelector('.popup-content');

        const appearPopUp = () => {
            let counter = 1;
            let stopAnim;
            popup.style.display = 'block';

            if (screen.width < 768) {

                return;
            }

            const comeRight = () => {
                if (counter >= 38) {
                    cancelAnimationFrame(stopAnim);
                    return;
                }

                popupContent.style.left = counter + '%';
                counter += (parseInt(popupContent.style.left) - counter) / 7 + 1;

                stopAnim = requestAnimationFrame(comeRight);
            };
            comeRight();




        };

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {

                popup.style.display = 'block';
                appearPopUp();
            });
        });


        popup.addEventListener('click', (e) => {

            let target = e.target;
            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {

                if (!target.closest('.popup-content')) { popup.style.display = 'none'; }

            }

        });

    };

    togglePopUp();

    //Табы

    const tabs = () => {

        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {

            tabContent.forEach((elem, i) => {

                if (index === i) {
                    elem.classList.remove('d-none');
                    tab[i].classList.add('active');
                } else {

                    elem.classList.add('d-none');
                    tab[i].classList.remove('active');
                }

            });
        };
        tabHeader.addEventListener('click', (e) => {

            let target = e.target;

            target = target.closest('.service-header-tab');


            if (target) {

                tab.forEach((item, i) => {

                    if (item === target) {

                        toggleTabContent(i);
                    }

                });
            }

        });

    };

    tabs();
























});


