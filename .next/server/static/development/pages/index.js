module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\eteka\\AllofAfrica\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2136202732" + " " + "index-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2136202732" + " " + "index-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2136202732" + " " + "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2136202732" + " " + "allOf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-2136202732" + " " + "africa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Africa"), __jsx("a", {
    className: "jsx-2136202732" + " " + "explore-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Explorez"))), __jsx("div", {
    className: "jsx-2136202732" + " " + "main-business",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2136202732" + " " + "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2136202732" + " " + "row-services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "60%",
    src: __webpack_require__(/*! ../public/images/icons/hotel.svg */ "./public/images/icons/hotel.svg"),
    alt: "undefined",
    title: "hotelerie",
    className: "jsx-2136202732" + " " + "services-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("h5", {
    className: "jsx-2136202732" + " " + "services-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Hotelerie")), __jsx("div", {
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "75%",
    src: __webpack_require__(/*! ../public/images/icons/hotel.svg */ "./public/images/icons/hotel.svg"),
    alt: "undefined",
    title: "hotelerie",
    className: "jsx-2136202732" + " " + "services-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("h5", {
    className: "jsx-2136202732" + " " + "services-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Hotelerie"))), __jsx("div", {
    className: "jsx-2136202732" + " " + "row-services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "50%",
    src: __webpack_require__(/*! ../public/images/icons/hotel.svg */ "./public/images/icons/hotel.svg"),
    alt: "undefined",
    title: "hotelerie",
    className: "jsx-2136202732" + " " + "services-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("h5", {
    className: "jsx-2136202732" + " " + "services-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Hotelerie")), __jsx("div", {
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "75%",
    src: __webpack_require__(/*! ../public/images/icons/hotel.svg */ "./public/images/icons/hotel.svg"),
    alt: "undefined",
    title: "hotelerie",
    className: "jsx-2136202732" + " " + "services-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx("h5", {
    className: "jsx-2136202732" + " " + "services-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Hotelerie")))), __jsx("div", {
    className: "jsx-2136202732" + " " + "culture-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2136202732" + " " + "div-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "D\xE9couvrez nos paysages")), __jsx("div", {
    className: "jsx-2136202732" + " " + "culture-text-image-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2136202732" + " " + "culture-image-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "100%",
    src: __webpack_require__(/*! ../public/images/paysage_vert.jpg */ "./public/images/paysage_vert.jpg"),
    alt: "undefined",
    title: "paysage",
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2136202732" + " " + "culture-text-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2136202732" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "En Afrique,"), __jsx("h4", {
    className: "jsx-2136202732" + " " + "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna"), __jsx("a", {
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Visitez")))), __jsx("div", {
    className: "jsx-2136202732" + " " + "cuisine-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2136202732" + " " + "div-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "D\xE9couvrez notre cuisine")), __jsx("div", {
    className: "jsx-2136202732" + " " + "cuisine-images-carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2136202732" + " " + "cuisine-image-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../public/images/cuisine_photo.jpg */ "./public/images/cuisine_photo.jpg"),
    alt: "undefined",
    width: "100%",
    height: "100%",
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2136202732" + " " + "cuisine-image-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../public/images/cooking-dishes.jpg */ "./public/images/cooking-dishes.jpg"),
    alt: "undefined",
    width: "100%",
    height: "100%",
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2136202732" + " " + "cuisine-div-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2136202732" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "En Afrique,"), __jsx("h4", {
    className: "jsx-2136202732" + " " + "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna"), __jsx("a", {
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Visitez"))), __jsx("div", {
    className: "jsx-2136202732" + " " + "culture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("h1", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "culture"), __jsx("div", {
    style: {
      width: '100%',
      height: '80%',
      filter: 'drop-shadow(6px 6px 8px black)',
      WebkitFilter: 'drop-shadow(6px 6px 8px black)'
    },
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("img", {
    alt: "undefined",
    src: __webpack_require__(/*! ../public/images/three-women-wearing-black-clothes.jpg */ "./public/images/three-women-wearing-black-clothes.jpg"),
    width: "100%",
    height: "100%",
    style: {
      objectFit: 'contain'
    },
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), __jsx("div", {
    style: {
      textAlign: 'center',
      marginTop: '1rem'
    },
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna"), __jsx("a", {
    className: "jsx-2136202732",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Parcourir"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2136202732",
    __self: this
  }, ".presentation.jsx-2136202732{display:block;text-align:center;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;z-index:1500;}.presentation.jsx-2136202732 h3.jsx-2136202732{padding:0;margin:0;color:rgba(45,45,45,1);text-shadow:0 2px 0 rgba(0,0,0,0.5);font-size:5rem;font-family:'sans-serif';font-weight:900;}.allOf.jsx-2136202732:after{content:'All of';color:rgba(45,45,45,1);font-size:5rem;font-weight:900;}.explore-link.jsx-2136202732{display:inline-block;border-style:solid;border-color:#fff;padding:2% 10% 2% 10%;margin-top:3vh;background-color:#020202;color :#fefcfc;border-radius:5%;font-weight:700;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;}.index-header.jsx-2136202732{display:block;width:100%;height:100vh;background-image:url('../images/afric.jpg');background-size:cover;background-position:center;position:relative;}.index-header.jsx-2136202732::after{content:\"\";top:0;left:0;right:0;bottom:0;position:absolute;background-color:black;opacity:0.3;}.main-business.jsx-2136202732{height:100%;display:block;padding:2%;}.cuisine-div.jsx-2136202732{margin-top:20vh;display:block;}.cuisine-div-text.jsx-2136202732{width:50%;height:100%;padding:1rem;float:left;display:block;border:3px solid #333333;border-radius:2% 6% 5% 4% / 1% 1% 2% 4%;font-size:1rem;line-height:1.5rem;white-space:pre-line;background:#ffffff;position:relative;text-align:center;}.cuisine-div-text.jsx-2136202732::before{content:'';border:2px solid #353535;display:block;width:100%;height:100%;position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0) scale(1.015) rotate(0.5deg);-ms-transform:translate3d(-50%,-50%,0) scale(1.015) rotate(0.5deg);transform:translate3d(-50%,-50%,0) scale(1.015) rotate(0.5deg);border-radius:1% 1% 2% 4% / 2% 6% 5% 4%;}.cuisine-div-text.jsx-2136202732>a.jsx-2136202732{width:50%;display:inline-block;text-align:center;-webkit-text-decoration:none;text-decoration:none;border-style:solid;border-color:#000;padding:0.5vh;color:#ffffff;background-color:#333333;text-transform:uppercase;}.culture.jsx-2136202732{display:block;width:100%;background-color:rgb(0,0,0,0.02);margin-top:6rem;margin-bottom:2rem;padding:1rem;}.culture.jsx-2136202732 a.jsx-2136202732{display:block;width:50%;display:block;margin-top:1.5rem;text-align:center;-webkit-text-decoration:none;-webkit-text-decoration:none;text-decoration:none;border-style:solid;border-color:#000;padding:0.5vh;color:#ffffff;background-color:#333333;text-transform:uppercase;-webkit-transform:translate(50%);-ms-transform:translate(50%);transform:translate(50%);}.culture.jsx-2136202732 span.jsx-2136202732{font-weight:bold;}@media only screen and (max-width:600px){.cuisine-div-text.jsx-2136202732{width:100%;display:block;margin-top:5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0lpQixBQUtzQixBQWFKLEFBV08sQUFVRyxBQWVOLEFBYUosQUFZRSxBQVlLLEFBUVIsQUFrQkMsQUFvQkQsQUFjRyxBQVlBLEFBb0JLLEFBS04sVUF6S0YsQUFpRkUsQUFzQ08sQ0F0RWIsQUFrRDZCLEFBdUVwQixDQTdHQSxFQTFFSSxBQWlEUCxBQWlHRixBQWFBLEVBekVJLENBOURTLEFBdUNoQixBQW1IVCxFQXBLeUIsRUFvQkosQ0E2RFAsRUEvQkosQUFpR00sQ0EvR0EsQUFpR2tCLEFBcUNqQixDQTdHSCxJQWFkLENBNkNrQixDQXBJRyxBQWdFVixHQStCQyxDQWlCYyxDQXBDeEIsQ0F6QjhDLEFBOEc3QixDQXVCakIsQ0FoS2dCLEFBVUUsQ0ErQkEsQ0FuRG9CLElBbUZwQixHQW9DQyxDQXBJVixBQWdIWSxLQXhGTCxDQXlJRSxFQWhLUixBQWlDZSxBQWdIVixDQWhGUSxDQStCTSxDQWdCUCxNQS9HVSxJQXVCaEMsRUF5RjRCLENBaUNWLEFBZVcsSUFuSmQsRUFvQkcsRUFpQkssQUFnQnhCLEdBK0I2QyxNQWdCMUIsRUFuR08sQUFvSWIsQ0FoRlosQ0FoQzRCLElBZ0ZULEFBaUJGLElBOEJJLENBOUdPLEVBa0c5QixFQWxDNkUsVUFwRzNELEFBcUhBLEVBakdFLEtBK0RBLE1BNUNuQixHQXRDQyxDQW9CbUIsQ0FpR1AsSUFsQ1UsU0E3Q3RCLENBZ0ZZLEVBakdLLENBNkhFLE1BOURJLEtBbUNBLElBakdELElBckNULEFBa0tLLFFBN0RLLElBcEdULEtBc0lTLENBNEJULE9BL0pkLEVBa0dzQixLQThEUixVQTVCaEIsR0FqQ3dCLENBOERHLGlCQTdEM0IsUUE4RDJCLHlCQUNBLENBaEl6Qix3Q0E0RWtELHdDQUVwRCxNQW1EQSIsImZpbGUiOiJDOlxcVXNlcnNcXGV0ZWthXFxBbGxvZkFmcmljYVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXgtcGFnZVwiPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlc2VudGF0aW9uXCI+XHJcbiAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYWxsT2ZcIj48L2gzPlxyXG4gICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFmcmljYVwiID5BZnJpY2E8L2gxPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgIGNsYXNzTmFtZT1cImV4cGxvcmUtbGlua1wiPkV4cGxvcmV6PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1idXNpbmVzc1wiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzXCI+XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNlcnZpY2VzXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2VydmljZXMtaW1hZ2VcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI2MCVcIiBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9pbWFnZXMvaWNvbnMvaG90ZWwuc3ZnJyl9IFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJob3RlbGVyaWVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNlcnZpY2VzLWRlc2NyaXB0aW9uXCI+SG90ZWxlcmllPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzZXJ2aWNlcy1pbWFnZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjc1JVwiIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL2ltYWdlcy9pY29ucy9ob3RlbC5zdmcnKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImhvdGVsZXJpZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic2VydmljZXMtZGVzY3JpcHRpb25cIj5Ib3RlbGVyaWU8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zZXJ2aWNlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzZXJ2aWNlcy1pbWFnZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjUwJVwiIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL2ltYWdlcy9pY29ucy9ob3RlbC5zdmcnKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImhvdGVsZXJpZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic2VydmljZXMtZGVzY3JpcHRpb25cIj5Ib3RlbGVyaWU8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlcnZpY2VzLWltYWdlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNzUlXCIgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvaW1hZ2VzL2ljb25zL2hvdGVsLnN2ZycpfSBcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaG90ZWxlcmllXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzZXJ2aWNlcy1kZXNjcmlwdGlvblwiPkhvdGVsZXJpZTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWx0dXJlLWRpdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8aDE+RMOpY291dnJleiBub3MgcGF5c2FnZXM8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWx0dXJlLXRleHQtaW1hZ2UtZGl2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VsdHVyZS1pbWFnZS1kaXZcIj5cclxuICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9pbWFnZXMvcGF5c2FnZV92ZXJ0LmpwZycpfSBhbHQ9XCJ1bmRlZmluZWRcIiB0aXRsZT1cInBheXNhZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VsdHVyZS10ZXh0LWRpdlwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJcIj5FbiBBZnJpcXVlLDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBhdCB2dWxwdXRhdGUgZXN0LiBEb25lYyB0ZW1wb3IgZmVsaXMgYXQgbmliaCBlbGVpZmVuZCBtYWxlc3VhZGEuIE51bGxhbSBzdXNjaXBpdCBsb2JvcnRpcyBhbGlxdWFtLiBQaGFzZWxsdXMgbG9ib3J0aXMgYW50ZSBsb3JlbSwgdml0YWUgc2NlbGVyaXNxdWUgbGFjdXMgdGVtcHVzIHNlZC4gUGhhc2VsbHVzIHJ1dHJ1bSBtYWduYTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgIDxhPlZpc2l0ZXo8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vpc2luZS1kaXZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxPkTDqWNvdXZyZXogbm90cmUgY3Vpc2luZTwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vpc2luZS1pbWFnZXMtY2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vpc2luZS1pbWFnZS1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9pbWFnZXMvY3Vpc2luZV9waG90by5qcGcnKX0gYWx0PVwidW5kZWZpbmVkXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vpc2luZS1pbWFnZS1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9pbWFnZXMvY29va2luZy1kaXNoZXMuanBnJyl9IGFsdD1cInVuZGVmaW5lZFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWlzaW5lLWRpdi10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIlwiPkVuIEFmcmlxdWUsPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1vcmJpIGF0IHZ1bHB1dGF0ZSBlc3QuIERvbmVjIHRlbXBvciBmZWxpcyBhdCBuaWJoIGVsZWlmZW5kIG1hbGVzdWFkYS4gTnVsbGFtIHN1c2NpcGl0IGxvYm9ydGlzIGFsaXF1YW0uIFBoYXNlbGx1cyBsb2JvcnRpcyBhbnRlIGxvcmVtLCB2aXRhZSBzY2VsZXJpc3F1ZSBsYWN1cyB0ZW1wdXMgc2VkLiBQaGFzZWxsdXMgcnV0cnVtIG1hZ25hPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgPGEgPlZpc2l0ZXo8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWx0dXJlXCI+XHJcbiAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+Y3VsdHVyZTwvaDE+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJyxoZWlnaHQ6JzgwJScsZmlsdGVyOidkcm9wLXNoYWRvdyg2cHggNnB4IDhweCBibGFjayknLFdlYmtpdEZpbHRlcjonZHJvcC1zaGFkb3coNnB4IDZweCA4cHggYmxhY2spJ319PlxyXG4gICAgICAgICAgICAgPGltZyBhbHQ9XCJ1bmRlZmluZWRcIiBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9pbWFnZXMvdGhyZWUtd29tZW4td2VhcmluZy1ibGFjay1jbG90aGVzLmpwZycpfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgc3R5bGU9e3tvYmplY3RGaXQ6J2NvbnRhaW4nfX0vPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246J2NlbnRlcicsbWFyZ2luVG9wOicxcmVtJ319PlxyXG4gICAgICAgICAgICAgPHNwYW4+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTW9yYmkgYXQgdnVscHV0YXRlIGVzdC4gRG9uZWMgdGVtcG9yIGZlbGlzIGF0IG5pYmggZWxlaWZlbmQgbWFsZXN1YWRhLiBOdWxsYW0gc3VzY2lwaXQgbG9ib3J0aXMgYWxpcXVhbS4gUGhhc2VsbHVzIGxvYm9ydGlzIGFudGUgbG9yZW0sIHZpdGFlIHNjZWxlcmlzcXVlIGxhY3VzIHRlbXB1cyBzZWQuIFBoYXNlbGx1cyBydXRydW0gbWFnbmE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGEgPlBhcmNvdXJpcjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgXHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgPC9kaXY+XHJcblxyXG4gICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcblxyXG4gICAgICAucHJlc2VudGF0aW9ue1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICBsZWZ0OjUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgei1pbmRleDoxNTAwO1xyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgLnByZXNlbnRhdGlvbiBoM3tcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICBjb2xvcjpyZ2JhKDQ1LDQ1LDQ1LDEpO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDJweCAwIHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICBcclxuICAgICAgIGZvbnQtc2l6ZTo1cmVtO1xyXG4gICAgICAgZm9udC1mYW1pbHk6J3NhbnMtc2VyaWYnO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6OTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWxsT2Y6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDonQWxsIG9mJztcclxuICAgICAgIGNvbG9yOnJnYmEoNDUsNDUsNDUsMSk7XHJcbiAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICBmb250LXdlaWdodDo5MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICAgIC5leHBsb3JlLWxpbmt7XHJcbiAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcclxuICAgICAgIGJvcmRlci1jb2xvcjojZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDIlIDEwJSAyJSAxMCUgO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDN2aCA7IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjAyMDIgO1xyXG4gICAgICAgIGNvbG9yIDogI2ZlZmNmYyA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5kZXgtaGVhZGVye1xyXG4gICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHZoO1xyXG4gIFxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi9pbWFnZXMvYWZyaWMuanBnJykgOyBcclxuICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmVcclxuICBcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuaW5kZXgtaGVhZGVyOjphZnRlcntcclxuICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgIHRvcDowO1xyXG4gICAgICAgbGVmdDowO1xyXG4gICAgICAgcmlnaHQ6MDtcclxuICAgICAgIGJvdHRvbTowO1xyXG4gICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIFxyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICAgIG9wYWNpdHk6MC4zXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYWluLWJ1c2luZXNze1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzoyJTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgXHJcbiAgICAgIFxyXG5cclxuICAgICAgLmN1aXNpbmUtZGl2e1xyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjB2aDtcclxuICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcblxyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAgLmN1aXNpbmUtZGl2LXRleHR7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcGFkZGluZzoxcmVtO1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIFxyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMzMzMzMzO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMiUgNiUgNSUgNCUgLyAxJSAxJSAyJSA0JTtcclxuICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jdWlzaW5lLWRpdi10ZXh0OjpiZWZvcmV7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM1MzUzNTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgc2NhbGUoMS4wMTUpIHJvdGF0ZSgwLjVkZWcpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMSUgMSUgMiUgNCUgLyAyJSA2JSA1JSA0JTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgXHJcblxyXG4gICAgICBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5jdWlzaW5lLWRpdi10ZXh0ID4gYSB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMC41dmg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuY3VsdHVyZXtcclxuICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMCwwLDAsMC4wMik7XHJcbiAgICAgIG1hcmdpbi10b3A6NnJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbToycmVtO1xyXG4gICAgICBwYWRkaW5nOjFyZW07XHJcbiAgICAgXHJcbiAgICBcclxuICAgIH0gXHJcbiAgXHJcblxyXG4gICAgLmN1bHR1cmUgYXtcclxuICAgICAgZGlzcGxheTpibG9jaztcclxuXHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLXRvcDoxLjVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDAwO1xyXG4gICAgICBwYWRkaW5nOiAwLjV2aDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSk7XHJcbiAgICB9XHJcbiAgIFxyXG5cclxuICAgIC5jdWx0dXJlIHNwYW57XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIC5jdWlzaW5lLWRpdi10ZXh0e1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOjUlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgYH1cclxuXHJcbiAgICAgPC9zdHlsZT5cclxuICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\eteka\\\\AllofAfrica\\\\pages\\\\index.js */"));
}

/***/ }),

/***/ "./public/images/cooking-dishes.jpg":
/*!******************************************!*\
  !*** ./public/images/cooking-dishes.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cooking-dishes-251c25aa6e8e76078c80146dba131b0e.jpg";

/***/ }),

/***/ "./public/images/cuisine_photo.jpg":
/*!*****************************************!*\
  !*** ./public/images/cuisine_photo.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cuisine_photo-cf8aa4c8aa4c10c4b4b11f145f629825.jpg";

/***/ }),

/***/ "./public/images/icons/hotel.svg":
/*!***************************************!*\
  !*** ./public/images/icons/hotel.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjMxLjE1MSA0NDcuM2E3LjUgNy41IDAgMDAtNy41IDcuNXY4LjI4NGE3LjUgNy41IDAgMDAxNSAwVjQ1NC44YTcuNSA3LjUgMCAwMC03LjUtNy41em00OS42OTggMGE3LjUgNy41IDAgMDAtNy41IDcuNXY4LjI4NGE3LjUgNy41IDAgMDAxNSAwVjQ1NC44YTcuNSA3LjUgMCAwMC03LjUtNy41em0tOC4yODMtNDI2LjU5MWE3LjUgNy41IDAgMDAtNy41IDcuNXYxMy4yMDZoLTE4LjEzMlYyOC4yMDlhNy41IDcuNSAwIDAwLTcuNS03LjUgNy41IDcuNSAwIDAwLTcuNSA3LjV2MjAuNjY3bC0uMDAyLjAzOS4wMDIuMDM5djIwLjY3MWE3LjUgNy41IDAgMDA3LjUgNy41IDcuNSA3LjUgMCAwMDcuNS03LjV2LTEzLjIxaDE4LjEzMnYxMy4yMWE3LjUgNy41IDAgMDA3LjUgNy41IDcuNSA3LjUgMCAwMDcuNS03LjVWMjguMjA5YTcuNSA3LjUgMCAwMC03LjUtNy41eiIvPjxwYXRoIGQ9Ik00ODcuOTM0IDI0OC40OThoLTkxLjlWMTIzLjQ2NWE3LjUgNy41IDAgMDAtNy41LTcuNWgtLjc4NFY5Ny44MzNoOS4wNjdhNy41IDcuNSAwIDAwNy41LTcuNVY1Ny4xOThhNy41IDcuNSAwIDAwLTcuNS03LjVoLTkxLjg5OVY3LjVhNy41IDcuNSAwIDAwLTcuNS03LjVoLTgyLjgzNWE3LjUgNy41IDAgMDAtNy41IDcuNXY0Mi4xOThoLTkxLjg5OWE3LjUgNy41IDAgMDAtNy41IDcuNXYzMy4xMzVhNy41IDcuNSAwIDAwNy41IDcuNWg5LjA2N3YxOC4xMzJoLS43ODRhNy41IDcuNSAwIDAwLTcuNSA3LjV2NjYuMjY3YTcuNSA3LjUgMCAwMDcuNSA3LjUgNy41IDcuNSAwIDAwNy41LTcuNXYtNTguNzY3aDI1MC4wNjd2MTI1LjAxNGwtLjAwMS4wMTkuMDAxLjAxOXYxNjUuNjI4bC0uMDAxLjAxOS4wMDEuMDE5VjQ5N2gtMjYuNDE3di0xOC4xMzhoNC45MjVhNy41IDcuNSAwIDAwNy41LTcuNXYtNDkuNjk3YTcuNSA3LjUgMCAwMC03LjUtNy41aC0yNC44NWE3LjUgNy41IDAgMDAtNy41IDcuNXY0OS42OTdhNy41IDcuNSAwIDAwNy41IDcuNWg0LjkyNVY0OTdIMzEzLjJ2LTg0LjRoOS4wNjdhNy41IDcuNSAwIDAwNy41LTcuNXYtMzMuMTM0YTcuNSA3LjUgMCAwMC03LjUtNy41SDE4OS43MzVhNy41IDcuNSAwIDAwLTcuNSA3LjVWNDA1LjFhNy41IDcuNSAwIDAwNy41IDcuNWg5LjA2NlY0OTdoLTI2LjQxN3YtMTguMTM4aDQuOTI1YTcuNSA3LjUgMCAwMDcuNS03LjV2LTQ5LjY5N2E3LjUgNy41IDAgMDAtNy41LTcuNWgtMjQuODVhNy41IDcuNSAwIDAwLTcuNSA3LjV2NDkuNjk3YTcuNSA3LjUgMCAwMDcuNSA3LjVoNC45MjVWNDk3aC0yNi40MTdWMjE5LjdhNy41IDcuNSAwIDAwLTcuNS03LjUgNy41IDcuNSAwIDAwLTcuNSA3LjV2MjguNzk4SDI0LjA2NmE3LjUgNy41IDAgMDAtNy41IDcuNXYxNjUuNjY3YTcuNSA3LjUgMCAwMDcuNSA3LjVoOS4wNjdWNTA0LjVhNy41IDcuNSAwIDAwNy41IDcuNWg0MzAuNzM0YTcuNSA3LjUgMCAwMDcuNS03LjV2LTc1LjMzNWg5LjA2N2E3LjUgNy41IDAgMDA3LjUtNy41VjI1NS45OThhNy41IDcuNSAwIDAwLTcuNS03LjV6TTExNS45NjYgNDk3SDQ4LjEzM3YtNjcuODM1aDY3LjgzM1Y0OTd6bS4wMDEtODIuODM1SDMxLjU2NlYyNjMuNDk4aDg0LjQwMXYxNTAuNjY3em01My44NDIgNDkuNjk3aC05Ljg1di0zNC42OTdoOS44NXYzNC42OTd6TTI0OC4yNDIgNDk3aC0zNC40NDF2LTg0LjRoMzQuNDQxVjQ5N3ptNDkuOTU4IDBoLTM0Ljk1OXYtODQuNEgyOTguMlY0OTd6bS05MS44OTktOTkuNGgtOS4wNjZ2LTE4LjEzNGgxMTcuNTMzVjM5Ny42SDIwNi4zMDF6bTE0NS43NDEgNjYuMjYyaC05Ljg1di0zNC42OTdoOS44NXYzNC42OTd6TTIyMi4wODMgMTVoNjcuODM1djQyLjE3OWwtLjAwMS4wMTkuMDAxLjAxOXYyNS42MTVoLTY3LjgzNVYxNXpNMTMxLjc1IDgyLjgzMWwtLjAzOS4wMDJoLTkuMDI4VjY0LjY5OGg4NC40djE4LjEzNWgtNzUuMjk0bC0uMDM5LS4wMDJ6bTI0MSAzMy4xMzRIMTM5LjI1MVY5Ny44MzNoNzUuMzEzbC4wMTkuMDAxaDgyLjgzNWwuMDE5LS4wMDFoNzUuMzEzdjE4LjEzMnptNy41MzktMzMuMTMybC0uMDM5LS4wMDItLjAzOS4wMDJoLTc1LjI5M1Y2NC42OThoODQuMzk5djE4LjEzNWgtOS4wMjh6TTQ2My44NjcgNDk3aC02Ny44MzN2LTY3LjgzNWg2Ny44MzNWNDk3em0xNi41NjctODIuODM1aC04NC40VjI2My40OThoODQuNHYxNTAuNjY3eiIvPjxwYXRoIGQ9Ik05MC4zMzIgMjgxLjYzMkg1Ny4xOTlhNy41IDcuNSAwIDAwLTcuNSA3LjV2MzMuMTM0YTcuNSA3LjUgMCAwMDcuNSA3LjVoMzMuMTMzYTcuNSA3LjUgMCAwMDcuNS03LjV2LTMzLjEzNGE3LjUgNy41IDAgMDAtNy41LTcuNXptLTcuNSAzMy4xMzRINjQuNjk5di0xOC4xMzRoMTguMTMzdjE4LjEzNHptMTA2LjktMzMuMTM0aC0zMy4xMzNhNy41IDcuNSAwIDAwLTcuNSA3LjV2MzMuMTM0YTcuNSA3LjUgMCAwMDcuNSA3LjVoMzMuMTMzYTcuNSA3LjUgMCAwMDcuNS03LjV2LTMzLjEzNGE3LjUgNy41IDAgMDAtNy41LTcuNXptLTcuNSAzMy4xMzRoLTE4LjEzM3YtMTguMTM0aDE4LjEzM3YxOC4xMzR6TTM1NS40IDI4MS42MzJoLTMzLjEzM2E3LjUgNy41IDAgMDAtNy41IDcuNXYzMy4xMzRoLS4wMDFhNy41IDcuNSAwIDAwNy41IDcuNUgzNTUuNGE3LjUgNy41IDAgMDA3LjUtNy41di0zMy4xMzRhNy41IDcuNSAwIDAwLTcuNS03LjV6bS03LjUgMzMuMTM0aC0xOC4xMzN2LTE4LjEzNEgzNDcuOXYxOC4xMzR6bS03NS41OTEtMzMuMTM0aC0zMy4xMzRhNy41IDcuNSAwIDAwLTcuNSA3LjV2MzMuMTM0YTcuNSA3LjUgMCAwMDcuNSA3LjVoMzMuMTM0YTcuNSA3LjUgMCAwMDcuNS03LjV2LTMzLjEzNGE3LjUgNy41IDAgMDAtNy41LTcuNXptLTcuNSAzMy4xMzRoLTE4LjEzNHYtMTguMTM0aDE4LjEzNHYxOC4xMzR6bS03NS4wNzctOTkuNDAxaC0zMy4xMzNhNy41IDcuNSAwIDAwLTcuNSA3LjV2MzMuMTMzYTcuNSA3LjUgMCAwMDcuNSA3LjVoMzMuMTMzYTcuNSA3LjUgMCAwMDcuNS03LjV2LTMzLjEzM2E3LjUgNy41IDAgMDAtNy41LTcuNXptLTcuNSAzMy4xMzNoLTE4LjEzM3YtMTguMTMzaDE4LjEzM3YxOC4xMzN6TTM1NS40IDIxNS4zNjVoLTMzLjEzM2E3LjUgNy41IDAgMDAtNy41IDcuNXYzMy4xMzNoLS4wMDFhNy41IDcuNSAwIDAwNy41IDcuNUgzNTUuNGE3LjUgNy41IDAgMDA3LjUtNy41di0zMy4xMzNhNy41IDcuNSAwIDAwLTcuNS03LjV6bS03LjUgMzMuMTMzaC0xOC4xMzN2LTE4LjEzM0gzNDcuOXYxOC4xMzN6bS03NS41OTEtMzMuMTMzaC0zMy4xMzRhNy41IDcuNSAwIDAwLTcuNSA3LjV2MzMuMTMzYTcuNSA3LjUgMCAwMDcuNSA3LjVoMzMuMTM0YTcuNSA3LjUgMCAwMDcuNS03LjV2LTMzLjEzM2E3LjUgNy41IDAgMDAtNy41LTcuNXptLTcuNSAzMy4xMzNoLTE4LjEzNHYtMTguMTMzaDE4LjEzNHYxOC4xMzN6bS03NS4wNzctOTkuNDAxaC0zMy4xMzNhNy41IDcuNSAwIDAwLTcuNSA3LjV2MzMuMTM0YTcuNSA3LjUgMCAwMDcuNSA3LjVoMzMuMTMzYTcuNSA3LjUgMCAwMDcuNS03LjV2LTMzLjEzNGE3LjUgNy41IDAgMDAtNy41LTcuNXptLTcuNSAzMy4xMzVoLTE4LjEzM3YtMTguMTM0aDE4LjEzM3YxOC4xMzR6TTM1NS40IDE0OS4wOTdoLTMzLjEzM2E3LjUgNy41IDAgMDAtNy41IDcuNXYzMy4xMzRhNy40OTggNy40OTggMCAwMDcuNDk5IDcuNUgzNTUuNGE3LjUgNy41IDAgMDA3LjUtNy41di0zMy4xMzRhNy41IDcuNSAwIDAwLTcuNS03LjV6bS03LjUgMzMuMTM1aC0xOC4xMzN2LTE4LjEzNEgzNDcuOXYxOC4xMzR6bS03NS41OTEtMzMuMTM1aC0zMy4xMzRhNy41IDcuNSAwIDAwLTcuNSA3LjV2MzMuMTM0YzAgNC4xNDMgMy4zNTcgNy41IDcuNSA3LjVoMzMuMTM0YTcuNSA3LjUgMCAwMDcuNS03LjV2LTMzLjEzNGE3LjUgNy41IDAgMDAtNy41LTcuNXptLTcuNSAzMy4xMzVoLTE4LjEzNHYtMTguMTM0aDE4LjEzNHYxOC4xMzR6bTE4OS45OTEgOTkuNGgtMzMuMTMzYTcuNSA3LjUgMCAwMC03LjUgNy41djMzLjEzNGE3LjUgNy41IDAgMDA3LjUgNy41SDQ1NC44YTcuNSA3LjUgMCAwMDcuNS03LjV2LTMzLjEzNGE3LjUgNy41IDAgMDAtNy41LTcuNXptLTcuNSAzMy4xMzRoLTE4LjEzM3YtMTguMTM0SDQ0Ny4zdjE4LjEzNHpNOTAuMzMyIDM0Ny44OThINTcuMTk5YTcuNSA3LjUgMCAwMC03LjUgNy41djMzLjEzNGE3LjUgNy41IDAgMDA3LjUgNy41aDMzLjEzM2E3LjUgNy41IDAgMDA3LjUtNy41di0zMy4xMzRhNy41IDcuNSAwIDAwLTcuNS03LjV6bS03LjUgMzMuMTM0SDY0LjY5OXYtMTguMTM0aDE4LjEzM3YxOC4xMzR6TTQ1NC44IDM0Ny44OThoLTMzLjEzM2E3LjUgNy41IDAgMDAtNy41IDcuNXYzMy4xMzRhNy41IDcuNSAwIDAwNy41IDcuNUg0NTQuOGE3LjUgNy41IDAgMDA3LjUtNy41di0zMy4xMzRhNy41IDcuNSAwIDAwLTcuNS03LjV6bS03LjUgMzMuMTM0aC0xOC4xMzN2LTE4LjEzNEg0NDcuM3YxOC4xMzR6Ii8+PC9zdmc+"

/***/ }),

/***/ "./public/images/paysage_vert.jpg":
/*!****************************************!*\
  !*** ./public/images/paysage_vert.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/paysage_vert-642ca04b243d1a88288001f87c9e83d2.jpg";

/***/ }),

/***/ "./public/images/three-women-wearing-black-clothes.jpg":
/*!*************************************************************!*\
  !*** ./public/images/three-women-wearing-black-clothes.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/three-women-wearing-black-clothes-f717fda0bf62a9793bfcee127928d496.jpg";

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eteka\AllofAfrica\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map