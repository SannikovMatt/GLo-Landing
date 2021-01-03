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

export default toggleMenu;