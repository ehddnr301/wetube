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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scss/styles.scss":
/*!*********************************!*\
  !*** ./assets/scss/styles.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./assets/scss/styles.scss?");

/***/ }),

/***/ "./assets/ts/main.ts":
/*!***************************!*\
  !*** ./assets/ts/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ../scss/styles.scss */ \"./assets/scss/styles.scss\");\n__webpack_require__(/*! ./videoPlayer */ \"./assets/ts/videoPlayer.ts\");\n__webpack_require__(/*! ./videoRecorder */ \"./assets/ts/videoRecorder.ts\");\n\n\n//# sourceURL=webpack:///./assets/ts/main.ts?");

/***/ }),

/***/ "./assets/ts/utils.ts":
/*!****************************!*\
  !*** ./assets/ts/utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst videoContainer = document.getElementById(\"jsVideoPlayer\");\nexports.exitFull = () => {\n    const document = window.document;\n    if (document.exitFullscreen) {\n        document.exitFullscreen();\n    }\n    else if (document.mozCancelFullScreen) {\n        document.mozCancelFullScreen();\n    }\n    else if (document.webkitExitFullscreen) {\n        document.webkitExitFullscreen();\n    }\n    else if (document.msExitFullscreen) {\n        document.msExitFullscreen();\n    }\n};\nexports.goFull = () => {\n    if (videoContainer.requestFullscreen) {\n        videoContainer.requestFullscreen();\n    }\n    else if (videoContainer.mozRequestFullScreen) {\n        videoContainer.mozRequestFullScreen();\n    }\n    else if (videoContainer.webkitRequestFullscreen) {\n        videoContainer.webkitRequestFullscreen();\n    }\n    else if (videoContainer.msRequestFullscreen) {\n        videoContainer.msRequestFullscreen();\n    }\n};\nexports.formatDate = (seconds) => {\n    const secondsNumber = parseInt(seconds, 10);\n    let hours = Math.floor(secondsNumber / 3600);\n    let minutes = Math.floor((secondsNumber - hours * 3600) / 60);\n    let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;\n    if (hours < 10) {\n        hours = `0${hours}`;\n    }\n    if (minutes < 10) {\n        minutes = `0${minutes}`;\n    }\n    if (totalSeconds < 10) {\n        totalSeconds = `0${totalSeconds}`;\n    }\n    return `${hours}:${minutes}:${totalSeconds}`;\n};\n\n\n//# sourceURL=webpack:///./assets/ts/utils.ts?");

/***/ }),

/***/ "./assets/ts/videoPlayer.ts":
/*!**********************************!*\
  !*** ./assets/ts/videoPlayer.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst utils_1 = __webpack_require__(/*! ./utils */ \"./assets/ts/utils.ts\");\nconst videoContainer = document.getElementById(\"jsVideoPlayer\");\nconst videoPlayer = document.querySelector(\"#jsVideoPlayer video\");\nconst playBtn = document.getElementById(\"jsPlayButton\");\nconst volumeBtn = document.getElementById(\"jsVolumeBtn\");\nconst fullScrnBtn = document.getElementById(\"jsFullScreen\");\nconst currentTime = document.getElementById(\"currentTime\");\nconst totalTime = document.getElementById(\"totalTime\");\nconst volumeRange = document.getElementById(\"jsVolume\");\nfunction handlePlayClick() {\n    if (videoPlayer.paused) {\n        videoPlayer.play();\n        playBtn.innerHTML = '<i class=\"fas fa-pause\"></i>';\n    }\n    else {\n        videoPlayer.pause();\n        playBtn.innerHTML = '<i class=\"fas fa-play\"></i>';\n    }\n}\nfunction handleVolumeClick() {\n    if (videoPlayer.muted) {\n        videoPlayer.muted = false;\n        volumeBtn.innerHTML = '<i class=\"fas fa-volume-up\"></i>';\n    }\n    else {\n        videoPlayer.muted = true;\n        volumeBtn.innerHTML = '<i class=\"fas fa-volume-mute\"></i>';\n    }\n}\nfunction exitFullScreen() {\n    videoPlayer.style.width = \"850px\";\n    const document = window.document;\n    fullScrnBtn.innerHTML = '<i class=\"fas fa-expand\"></i>';\n    fullScrnBtn.addEventListener(\"click\", goFullScreen);\n    utils_1.exitFull();\n}\nfunction goFullScreen() {\n    videoPlayer.style.width = \"100%\";\n    videoContainer.webkitRequestFullscreen();\n    fullScrnBtn.innerHTML = '<i class=\"fas fa-compress\"></i>';\n    fullScrnBtn.removeEventListener(\"click\", goFullScreen);\n    fullScrnBtn.addEventListener(\"click\", exitFullScreen);\n    utils_1.goFull();\n}\nfunction getCurrentTime() {\n    currentTime.innerHTML = utils_1.formatDate(Math.floor(videoPlayer.currentTime));\n}\nfunction setTotalTime() {\n    const totalTimeString = utils_1.formatDate(videoPlayer.duration);\n    totalTime.innerHTML = totalTimeString;\n    setInterval(getCurrentTime, 1000);\n}\nfunction handleEnded() {\n    videoPlayer.currentTime = 0;\n    playBtn.innerHTML = '<i class=\"fas fa-play\"></i>';\n}\nfunction handleDrag(event) {\n    const { target: { value } } = event;\n    videoPlayer.volume = value;\n    if (value >= 0.6) {\n        volumeBtn.innerHTML = '<i class=\"fas fa-volume-up\"></i>';\n    }\n    else if (value >= 0.2) {\n        volumeBtn.innerHTML = '<i class=\"fas fa-volume-down\"></i>';\n    }\n    else {\n        volumeBtn.innerHTML = '<i class=\"fas fa-volume-off\"></i>';\n    }\n}\nfunction init() {\n    videoPlayer.volume = 0.5;\n    playBtn.addEventListener(\"click\", handlePlayClick);\n    volumeBtn.addEventListener(\"click\", handleVolumeClick);\n    fullScrnBtn.addEventListener(\"click\", goFullScreen);\n    videoPlayer.addEventListener(\"loadedmetadata\", setTotalTime);\n    videoPlayer.addEventListener(\"ended\", handleEnded);\n    volumeRange.addEventListener(\"input\", handleDrag);\n}\nif (videoContainer) {\n    init();\n}\n\n\n//# sourceURL=webpack:///./assets/ts/videoPlayer.ts?");

/***/ }),

/***/ "./assets/ts/videoRecorder.ts":
/*!************************************!*\
  !*** ./assets/ts/videoRecorder.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst recorderContainer = document.getElementById(\"jsRecordContainer\");\nconst recordBtn = document.getElementById(\"jsRecordBtn\");\nconst videoPreview = document.getElementById(\"jsVideoPreview\");\nlet streamObject;\nlet videoRecorder;\nconst handleVideoData = event => {\n    const { data: videoFile } = event;\n    const link = document.createElement(\"a\");\n    link.href = URL.createObjectURL(videoFile);\n    link.download = \"recorded.webm\";\n    document.body.appendChild(link);\n    link.click();\n};\nconst stopRecording = () => {\n    videoRecorder.stop();\n    recordBtn.removeEventListener(\"click\", stopRecording);\n    recordBtn.addEventListener(\"click\", getVideo);\n    recordBtn.innerHTML = \"Start recording\";\n};\nconst startRecording = () => {\n    videoRecorder = new MediaRecorder(streamObject);\n    videoRecorder.start();\n    videoRecorder.addEventListener(\"dataavailable\", handleVideoData);\n    recordBtn.addEventListener(\"click\", stopRecording);\n};\nconst getVideo = () => __awaiter(this, void 0, void 0, function* () {\n    try {\n        const stream = yield navigator.mediaDevices.getUserMedia({\n            audio: true,\n            video: { width: 1280, height: 720 }\n        });\n        videoPreview.srcObject = stream;\n        videoPreview.muted = true;\n        videoPreview.play();\n        recordBtn.innerHTML = \"Stop recording\";\n        streamObject = stream;\n        startRecording();\n    }\n    catch (error) {\n        recordBtn.innerHTML = \"☹️ Cant record\";\n    }\n    finally {\n        recordBtn.removeEventListener(\"click\", getVideo);\n    }\n});\nfunction init() {\n    recordBtn.addEventListener(\"click\", getVideo);\n}\nif (recorderContainer) {\n    init();\n}\n\n\n//# sourceURL=webpack:///./assets/ts/videoRecorder.ts?");

/***/ })

/******/ });