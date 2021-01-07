'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import team from './modules/team';
import slider from './modules/slider';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';
import SliderCarusel from './modules/carousel';

//Timer
countTimer('2021/12/31');
//Menu
toggleMenu();
//Popup
togglePopUp();
//Табы
tabs();
//Слайдер
slider();
//Карусель
const options = {

    main: ".companies-wrapper",
    wrap: ".companies-hor",
    prev: '#test-left',
    next: '#test-right',
    slidesToShow: 4,
    infinity: true,
    responsive:
        [
            { breakpoint: 1024, slidesToShow: 3 },
            { breakpoint: 768, slidesToShow: 2 },
            { breakpoint: 576, slidesToShow: 1, }
        ]
};

const carousel = new SliderCarusel(options);

carousel.init(); 
//Команда 
team();
//Калькулятор
calculator(100);
//send-ajax - form
sendForm();