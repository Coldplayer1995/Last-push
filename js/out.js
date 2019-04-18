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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//dodaj meta tagi z allegro.tech\n// DODAJ PAGINACJĘ\n// co jak pusta tablica albo 1????\n/*\nif(pushEvents.lenght == 0){\n    name= \"brak modyfikacji w ciagu osttanich 90 dni???\"\n}else if(pushEvents.lenght ==1){\n    name= pushEvents[0].repo.name\n}else{\n    name= latestPushEventName;\n}\n\n*/\n// SASS?\n// zamien ajaxa i jq na fetch i es6 i ew react???\n// format daty nieczytelny w czesci przegladarek, chcesz to zmenic?\n//older versions of WebKit and Internet Explorer do not support ISO 8601 natively. So this may fail in older browsers\n//https://stackoverflow.com/questions/5802461/javascript-which-browsers-support-parsing-of-iso-8601-date-string-with-date-par\n//https://stackoverflow.com/questions/12192491/sort-array-by-iso-8601-date\n\n$(function () {\n\n    var url = \"https://api.github.com/orgs/allegro/events?per_page=100\";\n    var showbtn = $('.show-lastPushEvent-btn');\n    var github_img = $('.github');\n\n    function insertEventsData(eventsData) {\n\n        var events = Object.values(eventsData);\n\n        var pushEvents = events.filter(function (i) {\n            return i.type === \"PushEvent\";\n        });\n\n        //console.log(pushEvents)\n\n        var pushEventsSorted = pushEvents.sort(function (a, b) {\n            return a.created_at < b.created_at ? -1 : a.date > b.date ? 1 : 0;\n        });\n        var lastPushEvent = pushEventsSorted[0];\n        //console.log(pushEventsSorted)\n\n        var userAvatarData = lastPushEvent.org.avatar_url;\n        var userData = lastPushEvent.org.login;\n        var repoNameData = lastPushEvent.repo.name;\n        var repoUrlData = lastPushEvent.repo.url;\n        var pushDateData = lastPushEvent.created_at;\n        var authorData = lastPushEvent.actor.login;\n\n        var repoName = $('<li>').text(\"nazwa repozytorium: \" + repoNameData);\n        var pushDate = $('<li>').text(\"data modyfikacji\" + pushDateData);\n        var author = $('<li>').text(\"autor: \" + authorData);\n        var user = $('<li>').text(\"użytkownik: \" + userData);\n        var repoUrl = $('<li>').text(\"url repozytorium: \" + repoUrlData);\n\n        //const userAvatar = $('<img>').attr('src', userAvatarData);\n\n\n        var repoDataList = $('.repo-data');\n\n        //$('.container-app').prepend(userAvatar);\n\n\n        repoDataList.append(repoName);\n        repoDataList.append(pushDate);\n        repoDataList.append(author);\n        repoDataList.append(user);\n        repoDataList.append(repoUrl);\n\n        showbtn.addClass('hide');\n        github_img.removeClass('hide').addClass('visible');\n\n        console.log(userData);\n        console.log(repoNameData);\n        console.log(repoUrlData);\n        console.log(pushDateData);\n        console.log(authorData);\n    }\n\n    showbtn.on('click', function () {\n\n        $.ajax({\n            url: url,\n            method: 'GET'\n        }).done(function (eventsData) {\n            insertEventsData(eventsData);\n        }).fail(function (error) {\n            console.log(error);\n        });\n    });\n\n    // po kliknięciu w button wywołuję funckcję załadowania, w której uruchamia się funkcja pobrania\n    //danych do załadowanie\n\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });