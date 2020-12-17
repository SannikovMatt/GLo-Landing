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
            if (target.closest('main a[href="#service-block"]')) {
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
            let counter = 20;
            let stopAnim;
            popup.style.display = 'block';

            if (screen.width < 768) {return;}

            const comeRight = () => {
                if (counter >= 38) {
                    cancelAnimationFrame(stopAnim);
                    return;
                }

                popupContent.style.left = counter + '%';
                counter += (parseInt(popupContent.style.left) - counter) / 7 +1;

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


    //Слайдер
    const slider = () => {

        
        const slider = document.querySelector('.portfolio-content'),           
            slide = slider.querySelectorAll('.portfolio-item'),
            portfolioDotes = slider.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval,
            dot = slider.querySelectorAll('.dot');

            const setDots = ()=>{
                let li = '<li class="dot"></li>';
                slide.forEach(()=>{ portfolioDotes.insertAdjacentHTML('beforeend',li);});  
                dot = slider.querySelectorAll('.dot');
                dot[0].classList.add('dot-active');     
            };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const autoSlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            currentSlide++;
            if (currentSlide >= slide.length) { currentSlide = 0; }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoSlide, time);
        };


        const stopSlide = () => {

            clearInterval(interval);
        };

       
        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

           if(!target.matches('.dot, .portfolio-btn')){ return;}

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {

                currentSlide--;

            } else if (target.matches('.dot')) {

                dot.forEach((item, index) => {

                    if (item === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = slide.length - 1;

            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');


        });

        slider.addEventListener('mouseover',(event)=>{
                let target= event.target;
            
            if(target.matches('.portfolio-btn')||(target.matches('.dot'))){

                stopSlide();
            }

        });
        slider.addEventListener('mouseout',(event)=>{
                let target= event.target;
            
            if(target.matches('.portfolio-btn')||(target.matches('.dot'))){

                startSlide();
            }

        });

        setDots();
        startSlide(2000);


    };

    slider();






















});


