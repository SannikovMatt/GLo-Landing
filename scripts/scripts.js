window.addEventListener('DOMContentLoaded', function () {
    'use strict';


    //Timer
    function countTimer(deadLine) {

        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');



        let clearTimer;
        function clockUpdate() {


            if (clearTimer === undefined) {
                clearTimer = setInterval(clockUpdate, 500);
            }


            let diference = new Date(deadLine) - new Date();


            if (diference < 0) {
                timerHours.innerHTML = '00';
                timerMinutes.innerHTML = '00';
                timerSeconds.innerHTML = '00';

                clearInterval(clearTimer);
                return;
            }
            diference = new Date(diference);
            let hours ;
            if(diference.getDate()){
                hours = diference.getDate()*24;

            }

            
            diference = diference.toLocaleTimeString();

            if(!hours){

                timerHours.innerHTML = diference.substring(0, 2);

            }else{   timerHours.innerHTML = hours + +diference.substring(0, 2); }
            
            


            timerMinutes.innerHTML = diference.substring(3, 5);
            timerSeconds.innerHTML = diference.substring(6, 8);


        }
        clockUpdate();
    }
    countTimer('2020/12/18');
    //Menu

    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            btnClose = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li'),
            serviceBlock = document.querySelector('main>a');

        console.log(serviceBlock);



        const handlerMenu = () => {
            menu.classList.toggle('active-menu');

        }

        const reachTo = (e) => {

            let id = e.target.getAttribute("href") || e.currentTarget.getAttribute("href"),
                elem = document.querySelector(`${id}`),
                stopScroll,
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
        serviceBlock.addEventListener('click', (e) => {

            reachTo(e);

        });



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
            let counter = 0;
            let stopAnim;
            popup.style.display = 'block';

            if (screen.width < 768) {

                return;
            }

            const comeDown = () => {
                if (counter === 10) {
                    cancelAnimationFrame(stopAnim);
                    return;
                }

                popupContent.style.top = counter + '%';
                counter += 0.5;

                stopAnim = requestAnimationFrame(comeDown);
            }
            comeDown();




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


