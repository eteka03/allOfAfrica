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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\eteka\\AllofAfrica\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var Face = function Face(props) {
  return __jsx("svg", _extends({}, props, {
    __self: this
  }), __jsx("path", {
    d: "M504 378.8c0 68.8-56.4 125.2-125.2 125.2H129.2C60.4 504 4 447.6 4 378.8V129.2C4 60.4 60.4 4 129.2 4h249.6C447.6 4 504 60.4 504 129.2v249.6z",
    fill: "#235b9e",
    __self: this
  }), __jsx("path", {
    d: "M214.4 408.8H274V254h47.2l5.6-63.6H278v-24c0-12 7.6-16 13.2-16h34.4v-52h-48.8c-53.6 0-66.4 40-66.4 65.2v27.2h-27.6V254h31.6v154.8z",
    fill: "#fff",
    __self: this
  }), __jsx("path", {
    d: "M274 412.8h-59.6c-2.4 0-4-1.6-4-4V258h-27.6c-2.4 0-4-1.6-4-4v-63.6c0-2.4 1.6-4 4-4h23.6v-23.2c0-33.2 18.4-69.2 70.4-69.2h48.8c2.4 0 4 1.6 4 4v52.8c0 2.4-1.6 4-4 4h-34.4c-2 0-9.2.8-9.2 12v20h44.8c1.2 0 2 .4 2.8 1.2s1.2 2 1.2 3.2l-5.6 63.6c0 2-2 3.6-4 3.6H278V306c0 2.4-1.6 4-4 4s-4-1.6-4-4v-52c0-2.4 1.6-4 4-4h43.6l4.8-55.6H278c-2.4 0-4-1.6-4-4v-24c0-13.6 8.8-20 17.2-20h30.4V102h-44.8c-10.4 0-62.4 2.8-62.4 61.2v27.2c0 2.4-1.6 4-4 4h-23.6V250h27.6c2.4 0 4 1.6 4 4v150.8H270v-31.6c0-2.4 1.6-4 4-4s4 1.6 4 4v35.6c0 2-2 4-4 4z",
    __self: this
  }), __jsx("path", {
    d: "M378.8 508H129.2C58 508 0 450 0 378.8V129.2C0 58 58 0 129.2 0h249.6C450 0 508 58 508 129.2v249.6C508 450 450 508 378.8 508zM129.2 8C62.4 8 8 62.4 8 129.2v249.6C8 445.6 62.4 500 129.2 500h249.6c66.8 0 121.2-54.4 121.2-121.2V129.2C500 62.4 445.6 8 378.8 8H129.2z",
    __self: this
  }), __jsx("path", {
    d: "M370 484H138c-62 0-114-52.4-114-114.4V138C24 76 76 24 138 24h231.2c2.4 0 4 1.6 4 4s-1.6 4-4 4H138C80.4 32 32 80.4 32 138v232c0 57.6 48.8 106.4 106 106.4h232c57.6 0 106-48.8 106-106.4V258c0-2.4 1.6-4 4-4s4 1.6 4 4v112c0 62-52 114-114 114z",
    __self: this
  }), __jsx("path", {
    d: "M446.8 65.2c-1.2 0-2-.4-2.8-1.2-20.4-20.4-47.6-32-75.2-32-2.4 0-4-1.6-4-4s1.6-4 4-4c29.6 0 58.8 12.4 80.8 34.4 1.6 1.6 1.6 4 0 5.6-.4.8-1.6 1.2-2.8 1.2zM480 234c-2.4 0-4-1.6-4-4v-59.2c0-2.4 1.6-4 4-4s4 1.6 4 4V230c0 2.4-1.6 4-4 4z",
    __self: this
  }));
};

Face.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 508 508"
};

var Instagram = function Instagram(props) {
  return __jsx("svg", _extends({}, props, {
    __self: this
  }), __jsx("linearGradient", {
    id: "a",
    gradientTransform: "matrix(0 -1.982 -1.844 0 -132.522 -51.077)",
    gradientUnits: "userSpaceOnUse",
    x1: "-37.106",
    x2: "-26.555",
    y1: "-72.705",
    y2: "-84.047",
    __self: this
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#fd5",
    __self: this
  }), __jsx("stop", {
    offset: ".5",
    stopColor: "#ff543e",
    __self: this
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#c837ab",
    __self: this
  })), __jsx("path", {
    d: "M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z",
    fill: "url(#a)",
    __self: this
  }), __jsx("path", {
    d: "M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126zm-4.73 1.243a4.55 4.55 0 1 0 .001 9.101 4.55 4.55 0 0 0-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z",
    fill: "#fff",
    __self: this
  }));
};

Instagram.defaultProps = {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
function Footer(props) {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "footer-container ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    xs: 1,
    md: 2,
    lg: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "about-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "About us"), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]) + " " + "about-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "contact-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "contact  us"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    className: "contact-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    for: "exampleEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Email"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "email",
    name: "email",
    id: "exampleEmail",
    placeholder: "with a placeholder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    for: "exampleText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Message"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "textarea",
    name: "text",
    id: "exampleText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      backgroundColor: 'white',
      color: 'black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Envoyer"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    className: "social-media-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Follow Us"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]) + " " + "social-media-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.facebook.com/allofafrica",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]) + " " + "fab fa-facebook-f fa-3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.instagram.com/all_of_africa_aoa",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]) + " " + "fab fa-instagram fa-3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]) + " " + "tel-mail-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("address", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Tel:"), __jsx("a", {
    href: "tel:+1-347-272-7227",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "+1 (347) 272-7227 (USA)"), __jsx("a", {
    href: "tel:+33788 735324",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "+33 788 735324 (France)"), __jsx("a", {
    href: "tel:+221778012953",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "+221 7780 12953 (Dakar)"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Email: "), __jsx("a", {
    href: "mailto:alloafrica@outlook.fr",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "alloafrica@outlook.fr"))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]) + " " + "copyright-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]) + " " + 'fas fa-copyright',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1092261120", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "copyright 2020"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1092261120",
    dynamic: [props.styl.back, props.styl.couleur],
    __self: this
  }, `.footer-container{max-width:100%;margin:0;background-color:${props.styl.back};color:${props.styl.couleur};}.footer-container h3{color:#f0ad1e;padding-bottom:1rem;}.about-div{margin-top:1rem;margin-bottom:2rem;}.contact-div{margin-bottom:2rem;}.social-media-div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin-bottom:1.5rem;}.social-media-div a{width:4rem;-webkit-text-decoration:none;text-decoration:none;margin-left:0.7rem;}.tel-mail-div a{display:block;color:#fff;line-height:1.5rem;}.tel-mail-div p{padding-top:1rem;font-weight:bold;}.copyright-div{display:block;width:100%;text-align:center;border-top-style:solid;border-width:1px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxjb21wb25lbnRzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZ1QixBQUtxQixBQU9DLEFBTUUsQUFNRyxBQUtOLEFBU0gsQUFTSSxBQU9HLEFBS0gsV0FwQk0sR0ExQkEsQUFtQ1QsQUFZQSxDQXRESixDQWFZLENBb0NELEVBOUJyQixLQWxCaUQsQ0EwQzNCLEFBWUQsU0EvQ3JCLEFBMENBLENBcENBLFFBMEMwQixDQVgxQixpQkFYb0IsS0F1QkEsSUF0RHJCLElBcUJ1QixNQVd0QixHQXVCQSxzQkF2REEsc0NBc0I4Qix5R0FDUiw2RkFDUixXQUNVLHFCQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXGV0ZWthXFxBbGxvZkFmcmljYVxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICAnLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcycgO1xyXG5pbXBvcnQge1xyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgUm93LFxyXG4gICAgQ29sLFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1Hcm91cCxcclxuICAgIExhYmVsLFxyXG4gICAgSW5wdXQsXHJcbiAgICBGb3JtRmVlZGJhY2ssXHJcbiAgICBCdXR0b24sXHJcbiAgICBcclxuICAgICAgICB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuaW1wb3J0IEZhY2UgZnJvbSAnLi4vcHVibGljL2ltYWdlcy9pY29ucy9mYWNlYm9vay5zdmcnXHJcbmltcG9ydCBJbnN0YWdyYW0gZnJvbSAnLi4vcHVibGljL2ltYWdlcy9pY29ucy9pbnN0YWdyYW0uc3ZnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIDxDb250YWluZXIgICBjbGFzc05hbWU9J2Zvb3Rlci1jb250YWluZXIgJz5cclxuXHJcbiAgICAgICAgICAgIDxSb3cgeHM9ezF9IG1kPXsyfSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImFib3V0LWRpdlwiPiBcclxuICAgICAgICAgICAgICAgICA8aDM+QWJvdXQgdXM8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYm91dC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTW9yYmkgYXQgdnVscHV0YXRlIGVzdC4gRG9uZWMgdGVtcG9yIGZlbGlzIGF0IG5pYmggZWxlaWZlbmQgbWFsZXN1YWRhLiBOdWxsYW0gc3VzY2lwaXQgbG9ib3J0aXMgYWxpcXVhbS4gUGhhc2VsbHVzIGxvYm9ydGlzIGFudGUgbG9yZW0sIHZpdGFlIHNjZWxlcmlzcXVlIGxhY3VzIHRlbXB1cyBzZWQuIFBoYXNlbGx1cyBydXRydW0gbWFnbmFcclxuICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImNvbnRhY3QtZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgPGgzPmNvbnRhY3QgIHVzPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cImV4YW1wbGVFbWFpbFwiPkVtYWlsPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZXhhbXBsZUVtYWlsXCIgcGxhY2Vob2xkZXI9XCJ3aXRoIGEgcGxhY2Vob2xkZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJleGFtcGxlVGV4dFwiPk1lc3NhZ2U8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0ICB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwidGV4dFwiIGlkPVwiZXhhbXBsZVRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjond2hpdGUnLGNvbG9yOidibGFjayd9fT5FbnZveWVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgPGgzPkZvbGxvdyBVczwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgIDxhICBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FsbG9mYWZyaWNhXCI+XHJcbiAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWYgZmEtM3hcIiA+PC9pPlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9hbGxfb2ZfYWZyaWNhX2FvYVwiPlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbSBmYS0zeFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWwtbWFpbC1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgIDxhZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxwPlRlbDo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzEtMzQ3LTI3Mi03MjI3XCI+KzEgKDM0NykgMjcyLTcyMjcgKFVTQSk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzMzNzg4IDczNTMyNFwiPiszMyA3ODggNzM1MzI0IChGcmFuY2UpPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOisyMjE3NzgwMTI5NTNcIj4rMjIxIDc3ODAgMTI5NTMgKERha2FyKTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwID5FbWFpbDogPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzphbGxvYWZyaWNhQG91dGxvb2suZnJcIj5hbGxvYWZyaWNhQG91dGxvb2suZnI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hZGRyZXNzPiAgXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHQtZGl2XCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFzIGZhLWNvcHlyaWdodCc+PHNwYW4+Y29weXJpZ2h0IDIwMjA8L3NwYW4+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5mb290ZXItY29udGFpbmVye1xyXG4gICAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjoke3Byb3BzLnN0eWwuYmFja307XHJcbiAgICAgICAgY29sb3I6JHtwcm9wcy5zdHlsLmNvdWxldXJ9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1jb250YWluZXIgaDN7XHJcbiAgICAgICAgY29sb3I6I2YwYWQxZTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbToxcmVtO1xyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICAuYWJvdXQtZGl2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6MXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjJyZW07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jb250YWN0LWRpdntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjJyZW07XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAuc29jaWFsLW1lZGlhLWRpdntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MS41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwtbWVkaWEtZGl2IGF7XHJcbiAgICAgICB3aWR0aDo0cmVtO1xyXG4gICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjAuN3JlbTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC50ZWwtbWFpbC1kaXYgYXtcclxuXHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OjEuNXJlbTtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnRlbC1tYWlsLWRpdiBwe1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvcHlyaWdodC1kaXZ7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGJvcmRlci10b3Atc3R5bGU6c29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOjFweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcbiJdfQ== */
/*@ sourceURL=C:\\Users\\eteka\\AllofAfrica\\components\\Footer.js */`));
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\eteka\\AllofAfrica\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 //components



function Layout({
  children
}) {
  return __jsx("div", {
    className: "jsx-4036864387" + " " + "layout grid-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css",
    className: "jsx-4036864387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap",
    rel: "stylesheet",
    className: "jsx-4036864387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/images/icons/apple-touch-icon.png",
    className: "jsx-4036864387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/images/icons/favicon-32x32.png",
    className: "jsx-4036864387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/images/icons/favicon-16x16.png",
    className: "jsx-4036864387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("link", {
    rel: "manifest",
    href: "/images/icons/site.webmanifest",
    className: "jsx-4036864387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("link", {
    rel: "mask-icon",
    href: "/images/icons/safari-pinned-tab.svg",
    color: "#5bbad5",
    className: "jsx-4036864387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/images/icons/favicon.ico",
    className: "jsx-4036864387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#da532c",
    className: "jsx-4036864387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("meta", {
    name: "msapplication-config",
    content: "/images/icons/browserconfig.xml",
    className: "jsx-4036864387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#ffffff",
    className: "jsx-4036864387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("header", {
    className: "jsx-4036864387" + " " + 'app-head',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("main", {
    className: "jsx-4036864387" + " " + 'app-page',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, children), __jsx("div", {
    style: {
      clear: 'both'
    },
    className: "jsx-4036864387",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("footer", {
    className: "jsx-4036864387" + " " + "app-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    styl: {
      couleur: '#fff',
      back: '#000'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4036864387",
    __self: this
  }, "html,body{margin:0;padding:0;font-family:'Open Sans',sans-serif;}.layout{min-height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.app-head,.app-footer{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.app-head{position:absolute;top:0;z-index:1900;width:100%;overflow:hidden;}.app-page{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;position:relative;top:0;}@media (min-width:769px){html,body{font-size:calc(13px + 10 * ((100vw - 769px) / 2048));}}@media (max-width:768px){html,body{font-size:calc(14px + 2 * ((100vw - 360px) / 768));}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENnQixBQUc2QixBQVNRLEFBT0YsQUFJRyxBQVVMLEFBWWIsQUFNQSxTQS9DVSxPQVNJLEVBV1IsQ0FqQjhCLEtBa0J0QixhQUNILFdBSWYsR0FxQkssRUFOQSxDQXJDSixFQVlBLFFBVUEsT0FJcUIsa0JBQ1osQ0FyQmlCLEtBd0IxQix5RUF2QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxldGVrYVxcQWxsb2ZBZnJpY2FcXGNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dCBncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMS4yL2Nzcy9hbGwubWluLmNzc1wiLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvaW1hZ2VzL2ljb25zL2FwcGxlLXRvdWNoLWljb24ucG5nXCIvPlxyXG48bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2ltYWdlcy9pY29ucy9mYXZpY29uLTMyeDMyLnBuZ1wiLz5cclxuPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9pbWFnZXMvaWNvbnMvZmF2aWNvbi0xNngxNi5wbmdcIi8+XHJcbjxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9pbWFnZXMvaWNvbnMvc2l0ZS53ZWJtYW5pZmVzdFwiLz5cclxuPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9pbWFnZXMvaWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjNWJiYWQ1XCIvPlxyXG48bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9pbWFnZXMvaWNvbnMvZmF2aWNvbi5pY29cIi8+XHJcbjxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZGE1MzJjXCI+PC9tZXRhPlxyXG48bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1jb25maWdcIiBjb250ZW50PVwiL2ltYWdlcy9pY29ucy9icm93c2VyY29uZmlnLnhtbFwiPjwvbWV0YT5cclxuPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIj48L21ldGE+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2FwcC1oZWFkJz5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdhcHAtcGFnZSc+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjbGVhcjonYm90aCd9fT48L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJhcHAtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIHN0eWw9e3tjb3VsZXVyOicjZmZmJywgYmFjazonIzAwMCd9fS8+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e1xyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgaHRtbCxib2R5e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmxheW91dHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hcHAtaGVhZCxcclxuICAgICAgICAgICAgICAgIC5hcHAtZm9vdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hcHAtaGVhZHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hcHAtcGFnZXtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo3NjlweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCxib2R5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTNweCArIDEwICogKCgxMDB2dyAtIDc2OXB4KSAvIDIwNDgpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCxib2R5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGMoMTRweCArIDIgKiAoKDEwMHZ3IC0gMzYwcHgpIC8gNzY4KSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\eteka\\\\AllofAfrica\\\\components\\\\Layout.js */"));
}

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\eteka\\AllofAfrica\\components\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const NavBar = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return __jsx("div", {
    className: "jsx-3649486523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    color: "white",
    light: true,
    expand: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
    href: "/",
    src: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("img", {
    style: {
      objectFit: 'contain',
      width: '55px',
      height: '80%'
    },
    src: "/images/logo_transparent.png",
    title: "logo",
    alt: "logo",
    className: "jsx-3649486523",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
    onClick: toggle,
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "ml-auto",
    navbar: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: "nav-style",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Home")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: "nav-style",
    href: "/discover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "discover"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3649486523",
    __self: undefined
  }, ".nav-style{color:black;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxjb21wb25lbnRzXFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NxQixBQUlrQixZQUNLLGlCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXGV0ZWthXFxBbGxvZkFmcmljYVxcY29tcG9uZW50c1xcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENvbGxhcHNlLFxyXG4gIE5hdmJhcixcclxuICBOYXZiYXJUb2dnbGVyLFxyXG4gIE5hdmJhckJyYW5kLFxyXG4gIE5hdixcclxuICBOYXZJdGVtLFxyXG4gIE5hdkxpbmssXHJcbiAgTmF2YmFyVGV4dFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiA+XHJcbiAgICAgIDxOYXZiYXIgIGNvbG9yPVwid2hpdGVcIiBsaWdodCAgIGV4cGFuZD1cIm1kXCI+XHJcbiAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9XCIvXCIgc3JjPScnPjxpbWcgc3R5bGU9e3tvYmplY3RGaXQ6J2NvbnRhaW4nLHdpZHRoOic1NXB4JyxoZWlnaHQ6JzgwJSd9fSBzcmM9Jy9pbWFnZXMvbG9nb190cmFuc3BhcmVudC5wbmcnIHRpdGxlPVwibG9nb1wiIGFsdD1cImxvZ29cIiAvPjwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgPE5hdmJhclRvZ2dsZXIgIG9uQ2xpY2s9e3RvZ2dsZX0gIGNsYXNzTmFtZT1cIm1yLTJcIi8+XHJcbiAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT0nbWwtYXV0bycgIG5hdmJhcj5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LXN0eWxlXCIgaHJlZj1cIi9cIj5Ib21lPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1zdHlsZVwiIGhyZWY9XCIvZGlzY292ZXJcIj5kaXNjb3ZlcjwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICBcclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICA8L05hdmJhcj5cclxuXHJcbiAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICBcclxuICAubmF2LXN0eWxle1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICB9XHJcbiAgICAgICAgXHJcbiAgXHJcbiAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\eteka\\\\AllofAfrica\\\\components\\\\Navbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _quentin_sommer_react_useragent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @quentin-sommer/react-useragent */ "@quentin-sommer/react-useragent");
/* harmony import */ var _quentin_sommer_react_useragent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_quentin_sommer_react_useragent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\eteka\\AllofAfrica\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //components



/* this component  is used to detect the browser on reuest send to browser
and to make page responsive */

const PageWrapper = Comp => class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  /*
   * Need to use args.ctx
   * See https://github.com/zeit/next.js#custom-document
   */
  static async getInitialProps(args) {
    return _objectSpread({
      ua: args.ctx.req ? args.ctx.req.headers['user-agent'] : navigator.userAgent
    }, Comp.getInitialProps ? await Comp.getInitialProps(args) : null);
  }

  render() {
    const _this$props = this.props,
          {
      ua
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["ua"]);

    return __jsx(_quentin_sommer_react_useragent__WEBPACK_IMPORTED_MODULE_2__["UserAgentProvider"], {
      ua: ua,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(Comp, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })));
  }

}; // This default export is required in a new `pages/_app.js` file.


function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(Component, _extends({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PageWrapper(MyApp));

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@quentin-sommer/react-useragent":
/*!**************************************************!*\
  !*** external "@quentin-sommer/react-useragent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@quentin-sommer/react-useragent");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

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
//# sourceMappingURL=_app.js.map