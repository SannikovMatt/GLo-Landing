window.addEventListener('DOMContentLoaded', function () {
    'use strict';



    function countTimer(deadLine) {

        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');




        function clockUpdate() {

            let clearTimer;
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



            diference = diference.toLocaleTimeString();



            timerHours.innerHTML = diference.substring(0, 2);
            timerMinutes.innerHTML = diference.substring(3, 5);
            timerSeconds.innerHTML = diference.substring(6, 8);


        }
        clockUpdate();
    }


    countTimer('2010/12/31');

});


