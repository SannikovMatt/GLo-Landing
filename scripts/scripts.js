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

            seconds < 9 ? seconds = '0' + seconds : seconds;
            min < 9 ? min = '0' + min : min;
            hours < 9 ? hours = '0' + hours : hours;

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
    countTimer('2020/11/31');


    //Menu

    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            btnClose = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li'),
            serviceBlock = document.querySelector('main>a');



        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        }

        const reachTo = (e) => {
            const id = e.target.getAttribute("href") || e.currentTarget.getAttribute("href"),
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
        }


        
        btnMenu.addEventListener('click', handlerMenu);
        btnClose.addEventListener('click', handlerMenu);
        serviceBlock.addEventListener('click', reachTo);
        menuItems.forEach((elem) => {
            elem.addEventListener('click', handlerMenu);
            elem.addEventListener('click', reachTo);
        });


    };
    toggleMenu();

    //Popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
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
                counter += (parseInt(popupContent.style.left) - counter) / 7+ 1;

                stopAnim = requestAnimationFrame(comeRight);
            }
            comeRight();




        };

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {

                popup.style.display = 'block';
                appearPopUp();
            });
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });

    };

    togglePopUp();
























});


