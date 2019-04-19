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
eval("\n\n$(function () {\n\n    var url = \"https://api.github.com/users/freeCodeCamp/events?per_page=100\";\n    var showbtn = $('.show-lastPushEvent-btn');\n    var repo_info = $('.repo-info');\n\n    function insertEventsData(eventsData) {\n        var events = Object.values(eventsData);\n        var pushEvents = events.filter(function (i) {\n            return i.type === \"PushEvent\";\n        });\n        var pushEventsSorted = pushEvents.sort(function (a, b) {\n            return a.created_at < b.created_at ? -1 : a.date > b.date ? 1 : 0;\n        });\n\n        var lastPushEvent = pushEventsSorted[0];\n        var userData = lastPushEvent.org.login;\n        var repoNameData = lastPushEvent.repo.name;\n        var repoUrlData = lastPushEvent.repo.url;\n        var pushDateData = lastPushEvent.created_at;\n        var authorData = lastPushEvent.actor.login;\n\n        var repoName = $('<li>').text(repoNameData);\n        var pushDate = $('<li>').text(pushDateData);\n        var author = $('<li>').text(authorData);\n        var user = $('<li>').text(userData);\n        //const repoUrl = $('<li>').text(repoUrlData);\n\n        var repoDataList = $('.repo-data');\n\n        repoDataList.append(repoName);\n        repoDataList.append(pushDate);\n        repoDataList.append(author);\n        repoDataList.append(user);\n        //repoDataList.append(repoUrl);\n\n        showbtn.addClass('hide');\n        repo_info.removeClass('hide').addClass('visible');\n\n        console.log(userData);\n        console.log(repoNameData);\n        //console.log(repoUrlData);\n        console.log(pushDateData);\n        console.log(authorData);\n    }\n\n    showbtn.on('click', function () {\n\n        $.ajax({\n            url: url,\n            method: 'GET'\n        }).done(function (eventsData) {\n            insertEventsData(eventsData);\n        }).fail(function (error) {\n            console.log(error);\n        });\n    });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });