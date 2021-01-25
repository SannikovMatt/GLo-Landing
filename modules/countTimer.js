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


export default countTimer;