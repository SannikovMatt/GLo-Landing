const calculator = (price = 100) => {





    const calc = document.getElementById('calc'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total'),
        calcCount = document.querySelector('.calc-count');


    const countSum = () => {
        let total = 0,
            countValue = 1,//Значение по умолчание для не обязательного поля (Количество помещений)
            dayValue = 1;//Значение по умолчание для не обязательного поля (Срок)

        const typeValue = calcType.options[calcType.selectedIndex].value,//Выбираем значения из списка
            squareValue = +calcSquare.value; // Значение квадратуры

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        //Увеличиваем цену если ввели меньше 10 дней
        if (calcDay.value && calcDay.value < 5) {

            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;

        }
        //Считаем общую цену
        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        }



        //Анимация для суммы при пересчете
        let i = 0;

        let stop = setInterval(() => {

            totalValue.textContent = i;
            i += parseInt(total / 20);
            if (i >= total || (i + total / 20 > total)) {
                totalValue.textContent = parseInt(total);
                clearInterval(stop);
                i = 0;
            }
        }, 20);


    };

    calc.addEventListener('change', (event) => {
        const target = event.target;

        if ([calcType, calcSquare, calcDay, calcCount].includes(target)) {

            countSum();
        }

    });

    calc.addEventListener('input', (e) => {

        let target = e.target.closest('.calc-item');

        if (target && !target.classList.contains('calc-type')) {
            target.value = target.value.replace(/[^0-9]/, '');
        }


    });
};

export default calculator;