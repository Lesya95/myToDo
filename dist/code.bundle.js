/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./code.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ItemDeal.js":
/*!*********************!*\
  !*** ./ItemDeal.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemDeal; });\nclass ItemDeal {\r\n    constructor(text, color){\r\n        this.text = text;\r\n        this.color = color;\r\n        this.createAt = new Date;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./ItemDeal.js?");

/***/ }),

/***/ "./code.js":
/*!*****************!*\
  !*** ./code.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ItemDeal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemDeal */ \"./ItemDeal.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./data.js\");\n\n\nvar img = document.getElementById('img');\nvar images = ['img/monster1.svg', 'img/monster2.svg', 'img/monster3.svg', 'img/monster.svg', 'img/monster4.svg'];\nvar x = 0;\n\nfunction anim() {\n    if( x<images.length ) {\n        x = x + 1;\n    } else {\n        x = 1;\n    }\n    img.innerHTML = \"<img src =\"+images[x-1]+\">\";\n}\n\nsetInterval(anim, 1500);\n\n\n\n\n\n\n\n\nconst add_button = document.querySelector(\".button-plus\");\nconst input = document.querySelector(\"input\");\nconst root = document.getElementById(\"root\");\nconst select = document.querySelector(\"select\");\n\n\n\nfunction getRand(arr){\n    // хорошо бы модифицировать в уникальный рандом\n    let rand_num = Math.round(Math.random() * arr.length-1);\n    let mod_num = Math.abs(rand_num);\n    return mod_num;\n}\n\nfunction changePhrase(){\n    document.querySelector(\"q\").innerHTML = _data__WEBPACK_IMPORTED_MODULE_1__[\"motiv_arr\"][getRand(_data__WEBPACK_IMPORTED_MODULE_1__[\"motiv_arr\"])];\n    // добавить сда анимации, с которой эта цитата появляется\n}\nsetInterval(changePhrase, 2000);\n\nfunction createItem(){\n    let text = input.value;\n\n    if(text == ''){\n        return; // return обрывает всю работу нашей функции\n    }\n    let item = new _ItemDeal__WEBPACK_IMPORTED_MODULE_0__[\"default\"](text, select.value - 1)\n    let item_to_JSON = JSON.stringify(item)\n    localStorage.setItem(+item.createAt, item_to_JSON)\n    DrawItem(item)\n\n    input.value = '';\n}\n\nfunction DrawItem(item) {\n    root.insertAdjacentHTML('afterBegin', `<div class=\"wrap-task field is-grouped\" id='${+item.createAt}'>\n <button class=\"has-text-white button is-medium is-fullwidth ${_data__WEBPACK_IMPORTED_MODULE_1__[\"backgroundColor\"][item.color]}\">  ${item.text}\n <span>${item.createAt.getDate()} ${_data__WEBPACK_IMPORTED_MODULE_1__[\"MonthArray\"][item.createAt.getMonth()]} </span>\n </button>\n <button class=\"btn-delete button is-danger is-medium is-outlined\">\n     <span>Delete</span>\n     <span class=\"icon is-small\">\n         <i class=\"fa fa-times\"></i>\n     </span>\n </button>\n</div>`);\n}\n\n\n(function DrawOnLoad() {\n    for(let i = 0; i < localStorage.length; i++) {\n        let lk_key = localStorage.key(i)\n        let content = localStorage.getItem(lk_key);\n        let item = JSON.parse(content)\n        let tempo_dat = Date.parse(item.createAt)\n        item.createAt = new Date(tempo_dat)\n\n        DrawItem(item)\n    }\n})();\n\n\n\nadd_button.addEventListener(\"click\", createItem);\n\ninput.addEventListener(\"keypress\", (e) => {\n    if(e.keyCode == 13) {\n        createItem()\n    }\n})\n\nroot.addEventListener(\"click\", (e) => {\n    if(e.target.className == \"fa fa-times\"){\n        var btn = e.target;\n    }\n    let deal = btn.parentNode.parentNode.parentNode;\n    setTimeout(() => {\n        localStorage.removeItem(deal.id)\n        deal.remove();\n    }, 300)\n})\n\n\nfunction ChangeColorEl(el) {\n    switch (el.value) {\n        case '1':\n            el.className = _data__WEBPACK_IMPORTED_MODULE_1__[\"backgroundColor\"][el.value-1];\n            break;\n        case '2':\n            el.className = _data__WEBPACK_IMPORTED_MODULE_1__[\"backgroundColor\"][el.value-1];\n            break;\n        case '3':\n            el.className = _data__WEBPACK_IMPORTED_MODULE_1__[\"backgroundColor\"][el.value-1];\n            break;\n    \n        default:\n            break;\n    }\n    el.classList.add(\"has-text-white\");\n}\n\nwindow.onload = () => {\n    ChangeColorEl(select);\n}\n\nselect.onchange = () => {\n    ChangeColorEl(select);\n}\n\n//# sourceURL=webpack:///./code.js?");

/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: motiv_arr, ImportantArr, backgroundColor, MonthArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"motiv_arr\", function() { return motiv_arr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImportantArr\", function() { return ImportantArr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backgroundColor\", function() { return backgroundColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MonthArray\", function() { return MonthArray; });\nconst motiv_arr = [\"все победы начинаются с победы над самим собой\", \"just do it\", \"все победы начинаются с webpack\", \"делу время, потехе час\"];\r\nconst ImportantArr = ['has-text-danger', 'has-text-warning', 'has-text-success'];\r\nconst backgroundColor = ['has-background-danger', 'has-background-info', 'has-background-primary'];\r\nconst MonthArray = ['Февраль','Январь','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];\r\n\r\n\n\n//# sourceURL=webpack:///./data.js?");

/***/ })

/******/ });