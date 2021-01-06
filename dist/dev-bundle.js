/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/team */ \"./src/modules/team.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n //Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('2021/12/31'); //Menu\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); //Popup\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)(); //Табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)(); //Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)(); //Команда \n\n(0,_modules_team__WEBPACK_IMPORTED_MODULE_4__.default)(); //Калькулятор\n\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_6__.default)(100); //send-ajax - form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__.default)();\n\n//# sourceURL=webpack://less30/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar calculator = function calculator() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calc = document.getElementById('calc'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      totalValue = document.getElementById('total'),\n      calcCount = document.querySelector('.calc-count');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        //Значение по умолчание для не обязательного поля (Количество помещений)\n    dayValue = 1; //Значение по умолчание для не обязательного поля (Срок)\n\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        //Выбираем значения из списка\n    squareValue = +calcSquare.value; // Значение квадратуры\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    } //Увеличиваем цену если ввели меньше 10 дней\n\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    } //Считаем общую цену\n\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    } //Анимация для суммы при пересчете\n\n\n    var i = 0;\n    var stop = setInterval(function () {\n      totalValue.textContent = i;\n      i += parseInt(total / 20);\n\n      if (i >= total || i + total / 20 > total) {\n        totalValue.textContent = parseInt(total);\n        clearInterval(stop);\n        i = 0;\n      }\n    }, 20);\n  };\n\n  calc.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if ([calcType, calcSquare, calcDay, calcCount].includes(target)) {\n      countSum();\n    }\n  });\n  calc.addEventListener('input', function (e) {\n    var target = e.target.closest('.calc-item');\n\n    if (target && !target.classList.contains('calc-type')) {\n      target.value = target.value.replace(/[^0-9]/, '');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://less30/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction countTimer(deadLine) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRamining() {\n    var dateStop = new Date(deadLine).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        min = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n\n    if (seconds < 9) {\n      seconds = '0' + seconds;\n    }\n\n    if (min < 9) {\n      min = '0' + min;\n    }\n\n    if (hours < 9) {\n      hours = '0' + hours;\n    }\n\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      min: min,\n      seconds: seconds\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRamining();\n\n    if (timer.timeRemaining > 0) {\n      timerHours.innerHTML = timer.hours;\n      timerMinutes.innerHTML = timer.min;\n      timerSeconds.innerHTML = timer.seconds;\n      setTimeout(updateClock, 1000);\n    } else {\n      timerHours.innerHTML = '00';\n      timerMinutes.innerHTML = '00';\n      timerSeconds.innerHTML = '00';\n    }\n  }\n\n  updateClock();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://less30/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var statusMsg = document.createElement('div'),\n      errorMsg = 'Чтото пошло не так',\n      loadMsg = 'Загрузка...',\n      successMsg = 'Сообщение отправлено';\n  var isValid = false,\n      timeOut;\n  statusMsg.style.color = 'white';\n  window.addEventListener('submit', function (event) {\n    var target = event.target; //Проверям какую именно форму подтвердили.\n\n    if (target.closest(\"#\".concat(target.id))) {\n      var form = target.closest(\"#\".concat(target.id));\n      event.preventDefault(); //Добавляем div  для сообщений на страницу\n\n      form.appendChild(statusMsg);\n\n      if (!isValidF(form)) {\n        if (timeOut) {\n          clearTimeout(timeOut);\n        }\n\n        timeOut = setTimeout(function () {\n          statusMsg.textContent = '';\n        }, 3000);\n        return;\n      } //Анимация для ожидания ответа от сервера\n\n\n      statusMsg.classList.toggle('loader');\n\n      var postData = function postData(body) {\n        return fetch('./server.php', {\n          method: \"POST\",\n          headers: {\n            'Content-Type': 'aplication/json'\n          },\n          body: JSON.stringify(body) // mode:'cors'\n\n        }).then(function (response) {\n          if (!response.ok) {\n            throw new Error(response.status);\n          }\n        });\n      };\n\n      var formData = new FormData(form);\n      var body = {};\n\n      var _iterator = _createForOfIteratorHelper(formData.entries()),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var val = _step.value;\n          body[val[0]] = val[1];\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      postData(body).then(function () {\n        statusMsg.classList.toggle('loader');\n        statusMsg.textContent = successMsg;\n        setTimeout(function () {\n          statusMsg.textContent = '';\n        }, 5000);\n        form.reset();\n      })[\"catch\"](function (error) {\n        statusMsg.classList.toggle('loader');\n        statusMsg.textContent = errorMsg;\n        console.error(error);\n      });\n    }\n  });\n\n  var isValidF = function isValidF(form) {\n    var inputs = form.querySelectorAll('input');\n\n    var _iterator2 = _createForOfIteratorHelper(inputs),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var target = _step2.value;\n        var type = target.id.split('-')[1];\n\n        if (type === 'email') {\n          isValid = /[\\w0-9.]+@\\w+\\.\\w{0,6}/i.test(target.value);\n\n          if (!isValid) {\n            statusMsg.innerHTML = 'Заявка не отправлена <br/>Проверьте корректность емаил..';\n            return isValid;\n          }\n        }\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n\n    return isValid;\n  };\n\n  var validation = function validation() {\n    var validate = function validate(event) {\n      var target = event.target;\n\n      if (!target.closest('form')) {\n        return;\n      }\n\n      var type = target.id.split('-')[1];\n\n      if (type === 'message') {\n        target.value = target.value.replace(/[A-Za-z]/, '');\n      } else if (type === 'phone') {\n        target.value = target.value.replace(/[^\\+{,1}(\\d+)$]/g, '');\n      } else if (type === 'name') {\n        target.value = target.value.replace(/[^а-я ]/gi, '');\n      } else if (type === 'email') {\n        target.value = target.value.replace(/[^@.0-9\\w]/gi, '');\n      }\n    };\n\n    document.addEventListener('input', validate);\n  };\n\n  validation();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://less30/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var slider = document.querySelector('.portfolio-content'),\n      slide = slider.querySelectorAll('.portfolio-item'),\n      portfolioDotes = slider.querySelector('.portfolio-dots');\n  var currentSlide = 0,\n      interval,\n      dot = slider.querySelectorAll('.dot');\n\n  var setDots = function setDots() {\n    var li = '<li class=\"dot\"></li>';\n    slide.forEach(function () {\n      portfolioDotes.insertAdjacentHTML('beforeend', li);\n    });\n    dot = slider.querySelectorAll('.dot');\n    dot[0].classList.add('dot-active');\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var autoSlide = function autoSlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoSlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.dot, .portfolio-btn')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (item, index) {\n        if (item === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    } else if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    var target = event.target;\n\n    if (target.matches('.portfolio-btn') || target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    var target = event.target;\n\n    if (target.matches('.portfolio-btn') || target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  setDots();\n  startSlide(2000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://less30/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    tabContent.forEach(function (elem, i) {\n      if (index === i) {\n        elem.classList.remove('d-none');\n        tab[i].classList.add('active');\n      } else {\n        elem.classList.add('d-none');\n        tab[i].classList.remove('active');\n      }\n    });\n  };\n\n  tabHeader.addEventListener('click', function (e) {\n    var target = e.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://less30/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/team.js":
/*!*****************************!*\
  !*** ./src/modules/team.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar team = function team() {\n  var command = document.querySelector('#command');\n  command.addEventListener('mouseover', function (e) {\n    var target = e.target;\n\n    if (target.closest('.command__photo')) {\n      var img = target.closest('.command__photo'),\n          mLeavePhoto = img.getAttribute('src');\n      img.src = img.dataset.img;\n\n      var onMLeave = function onMLeave() {\n        img.src = mLeavePhoto;\n        img.removeEventListener('mouseleave', onMLeave);\n      };\n\n      img.addEventListener('mouseleave', onMLeave);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (team);\n\n//# sourceURL=webpack://less30/./src/modules/team.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  document.body.addEventListener('click', function (e) {\n    var menu = document.querySelector('menu');\n    var target = e.target; //Функция скрывающая меню\n\n    var handlerMenu = function handlerMenu() {\n      menu.classList.toggle('active-menu');\n    }; //Функция для скролла к елементам\n\n\n    var reachTo = function reachTo(elm) {\n      var id = elm.getAttribute(\"href\"),\n          elem = document.querySelector(\"\".concat(id));\n      elem.scrollIntoView({\n        behavior: \"smooth\"\n      });\n    }; //Проверяем если клик был вне модального окна\n\n\n    if (!target.closest('menu')) {\n      menu = document.querySelector('menu');\n\n      if (menu.classList.contains('active-menu')) {\n        handlerMenu();\n      }\n    } //Выводим модальное окно ро клику на (МЕНЮ)\n\n\n    if (target.closest('.menu')) {\n      if (target.closest('.menu')) {\n        handlerMenu();\n      }\n    } //Плавный скрол по разделам меню\n\n\n    if (target.closest('menu')) {\n      e.preventDefault();\n\n      if (target.closest('.close-btn')) {\n        handlerMenu();\n      } else if (target.closest('a')) {\n        if (menu.classList.contains('active-menu')) {\n          handlerMenu();\n        }\n\n        reachTo(target.closest('a'));\n      }\n    } //Плавный скрол для кнопки вне модального меню\n\n\n    if (target.closest('main a[href=\"#service-block\"]')) {\n      if (menu.classList.contains('active-menu')) {\n        handlerMenu();\n      }\n\n      reachTo(target.closest('a'));\n    }\n  }); //ОБРАБОТЧИК КЛИКОВ МЕНЮ\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://less30/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleMenu */ \"./src/modules/toggleMenu.js\");\n\n\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = popup.querySelector('.popup-content');\n\n  var appearPopUp = function appearPopUp() {\n    var counter = 1;\n    var stopAnim;\n    popup.style.display = 'block';\n\n    if (screen.width < 768) {\n      return;\n    }\n\n    var comeRight = function comeRight() {\n      if (counter >= 10) {\n        cancelAnimationFrame(stopAnim);\n        return;\n      }\n\n      popupContent.style.top = counter + '%';\n      counter += (parseInt(popupContent.style.top) - counter) / 7 + 1;\n      stopAnim = requestAnimationFrame(comeRight);\n    };\n\n    comeRight();\n  };\n\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n      appearPopUp();\n    });\n  });\n  popup.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      if (!target.closest('.popup-content')) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://less30/./src/modules/togglePopUp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;