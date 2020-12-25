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

            if (screen.width < 768) { return; }

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


    //Слайдер
    const slider = () => {


        const slider = document.querySelector('.portfolio-content'),
            slide = slider.querySelectorAll('.portfolio-item'),
            portfolioDotes = slider.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval,
            dot = slider.querySelectorAll('.dot');

        const setDots = () => {
            let li = '<li class="dot"></li>';
            slide.forEach(() => { portfolioDotes.insertAdjacentHTML('beforeend', li); });
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

            if (!target.matches('.dot, .portfolio-btn')) { return; }

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

        slider.addEventListener('mouseover', (event) => {
            let target = event.target;

            if (target.matches('.portfolio-btn') || (target.matches('.dot'))) {

                stopSlide();
            }

        });
        slider.addEventListener('mouseout', (event) => {
            let target = event.target;

            if (target.matches('.portfolio-btn') || (target.matches('.dot'))) {

                startSlide();
            }

        });

        setDots();
        startSlide(2000);


    };

    slider();


    //Команда 

    const team = () => {

        const command = document.querySelector('#command');


        command.addEventListener('mouseover', (e) => {

            const target = e.target;


            if (target.closest('.command__photo')) {
                const img = target.closest('.command__photo'),
                    mLeavePhoto = img.getAttribute('src');

                img.src = img.dataset.img;

                const onMLeave = () => {

                    img.src = mLeavePhoto;
                    img.removeEventListener('mouseleave', onMLeave);
                };

                img.addEventListener('mouseleave', onMLeave);

            }


        });


    };

    team();

    //Калькулятор

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

        calc.addEventListener('click', (e) => {

            let target = e.target;


            if (target.closest('.calc-type')) {

                target = target.closest('.calc-type');


            }

        });

    };

    calculator(100);



    //send-ajax - form

    const sendForm = () => {

        const errorMsg = 'Чтото пошло не так',
            loadMsg = 'Загрузка...',
            successMsg = 'Сообщение отправлено';

        // const form = document.getElementById('form1');
        const statusMsg = document.createElement('div');
        statusMsg.style.color = 'white';


        window.addEventListener('submit', (event) => {

            let target = event.target;
            console.log(target.id);

            if (target.closest(`#${target.id}`)) {
                let form = target.closest(`#${target.id}`);

                console.log(form);
                event.preventDefault();
                form.appendChild(statusMsg);
                statusMsg.classList.toggle('loader');

                const formData = new FormData(form);

                let body = {};

                for (let val of formData.entries()) {

                    body[val[0]] = val[1];
                }
                postData(body, () => {
                    statusMsg.classList.toggle('loader');
                    statusMsg.textContent = successMsg;
                    form.reset();

                }, (error) => {
                    statusMsg.classList.toggle('loader');
                    statusMsg.textContent = errorMsg;
                    console.error(error);
                });
            }
        });




        const postData = (body, outputData, errorData) => {

            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                statusMsg.textContent = loadMsg;
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    outputData();


                } else {

                    errorData(request.status);


                }

            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'aplication/json');
            request.send(JSON.stringify(body));
        };


        const validation = () => {

            document.addEventListener('input', (event) => {

                let target = event.target;

                if (!target.closest('form')) {
                    return;                
                }else{
                    
                   let  type = target.id.split('-')[1];

                        
                    if(type === 'message'){

                        target.value = target.value.replace(/[A-Za-z]/, '');
                    }else if(type === 'phone'){

                        target.value = target.value.replace(/[^\+{,1}(\d+)$]/g , '');

                    }else if(type === 'name'){

                        target.value = target.value.replace(/[^а-я ]/gi, '');
                    }
                }
                

            });

        };
        validation();

    };

    sendForm();






















});


