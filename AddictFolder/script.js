window.addEventListener('DOMContentLoaded', function () {
    'use strict';



    function countTimer() {

        const partOfDay = document.querySelector('#part_of_day'),
            day = document.querySelector('#day'),
            time = document.querySelector('#time'),
            newYear = document.querySelector('#new_year');

            let clearTimer;


        function getDayPart(time) {
            let dayParts = ['утро', 'день', 'вечер', 'ночи'];
            let currentHour = time.getHours();
            switch (parseInt(currentHour / 6)) {

                case 1:
                    return 'Доброе ' + dayParts[0];
                case 2:
                    return 'Добрый ' + dayParts[1];
                case 3:
                    return 'Добрый ' + dayParts[2];
                case 0:
                    return 'Доброй ' + dayParts[3];



            }


        }


        function clockUpdate() {

           let today = new Date(),
                diference = new Date('2020/12/31') - today,
                weekParts = [
                    'Воскресенье',
                    'Понедельник',
                    'Вторник',
                    'Среда',
                    'Четверг',
                    'Пятница',
                    'Суббота'];


            if (clearTimer === undefined) {
                clearTimer = setInterval(clockUpdate, 500);
            }

            if (diference < 0) { clearInterval(clearTimer); return; }

            diference = new Date(diference);

            partOfDay.innerHTML = getDayPart(today);
            day.innerHTML = 'Сегодня: ' + weekParts[today.getDay()];
            time.innerHTML = 'Текущее время: ' + today.toLocaleTimeString();
            newYear.innerHTML = 'До нового года осталось: ' + diference.getDate();
            console.log(clearTimer);

        }
        clockUpdate();
    }


    countTimer();

});


