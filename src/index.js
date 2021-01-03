'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import team from './modules/team';
import slider from './modules/slider';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';

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
//Команда 
team();
//Калькулятор
calculator(100);
//send-ajax - form
sendForm();