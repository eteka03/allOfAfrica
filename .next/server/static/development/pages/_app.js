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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "About us"), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]) + " " + "about-text",
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Follow Us"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]) + " " + "social-media-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.facebook.com/allofafrica",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(Face, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.instagram.com/all_of_africa_aoa",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(Instagram, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]) + " " + "tel-mail-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("address", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Tel:"), __jsx("a", {
    href: "tel:+1-347-272-7227",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "+1 (347) 272-7227 (USA)"), __jsx("a", {
    href: "tel:+33788 735324",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "+33 788 735324 (France)"), __jsx("a", {
    href: "tel:+221778012953",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "+221 7780 12953\" (Dakar)"), __jsx("p", {
    style: {
      lineHeight: '1.5rem'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Email: "), __jsx("a", {
    href: "mailto:alloafrica@outlook.fr",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "alloafrica@outlook.fr"))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]) + " " + "copyright-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("i", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]) + " " + 'fas fa-copyright',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2062180486", [props.styl.back, props.styl.couleur]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "copyright 2020"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2062180486",
    dynamic: [props.styl.back, props.styl.couleur],
    __self: this
  }, `.footer-container{max-width:100%;margin:0;background-color:${props.styl.back};color:${props.styl.couleur};}.about-div{margin-top:1rem;margin-bottom:2rem;}.contact-div{margin-bottom:2rem;}.social-media-div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin-bottom:1.5rem;}.social-media-div a{width:4rem;-webkit-text-decoration:none;text-decoration:none;margin-left:0.7rem;}.tel-mail-div a{display:block;color:#fff;line-height:1.5rem;}.copyright-div{display:block;width:100%;text-align:center;border-top-style:solid;border-width:1px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxjb21wb25lbnRzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZ1QixBQUtxQixBQVVHLEFBTUcsQUFLTixBQVNILEFBU0ksQUFPQSxXQWZNLEdBU1QsQUFPQSxDQTlDSixDQVVZLEdBTXRCLEtBZmlELENBdUMzQixBQU9ELFVBcENyQixRQXFDMEIsQ0FOMUIsaUJBWG9CLEtBa0JBLElBOUNyQixJQWtCdUIsTUFXdEIsR0FrQkEsc0JBL0NBLHNDQW1COEIseUdBQ1IsNkZBQ1IsV0FDVSxxQkFDeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxldGVrYVxcQWxsb2ZBZnJpY2FcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAgJy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnIDtcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIFJvdyxcclxuICAgIENvbCxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtR3JvdXAsXHJcbiAgICBMYWJlbCxcclxuICAgIElucHV0LFxyXG4gICAgRm9ybUZlZWRiYWNrLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgXHJcbiAgICAgICAgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmltcG9ydCBGYWNlIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvaWNvbnMvZmFjZWJvb2suc3ZnJ1xyXG5pbXBvcnQgSW5zdGFncmFtIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvaWNvbnMvaW5zdGFncmFtLnN2ZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3Rlcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyICAgY2xhc3NOYW1lPSdmb290ZXItY29udGFpbmVyICc+XHJcblxyXG4gICAgICAgICAgICA8Um93IHhzPXsxfSBtZD17Mn0gbGc9ezN9PlxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJhYm91dC1kaXZcIj4gXHJcbiAgICAgICAgICAgICAgICAgPGgzPkFib3V0IHVzPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJvdXQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1vcmJpIGF0IHZ1bHB1dGF0ZSBlc3QuIERvbmVjIHRlbXBvciBmZWxpcyBhdCBuaWJoIGVsZWlmZW5kIG1hbGVzdWFkYS4gTnVsbGFtIHN1c2NpcGl0IGxvYm9ydGlzIGFsaXF1YW0uIFBoYXNlbGx1cyBsb2JvcnRpcyBhbnRlIGxvcmVtLCB2aXRhZSBzY2VsZXJpc3F1ZSBsYWN1cyB0ZW1wdXMgc2VkLiBQaGFzZWxsdXMgcnV0cnVtIG1hZ25hXHJcbiAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJjb250YWN0LWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgIDxoMz5jb250YWN0ICB1czwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJleGFtcGxlRW1haWxcIj5FbWFpbDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImV4YW1wbGVFbWFpbFwiIHBsYWNlaG9sZGVyPVwid2l0aCBhIHBsYWNlaG9sZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwiZXhhbXBsZVRleHRcIj5NZXNzYWdlPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwidGV4dFwiIGlkPVwiZXhhbXBsZVRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjond2hpdGUnLGNvbG9yOidibGFjayd9fT5FbnZveWVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgPGgzPkZvbGxvdyBVczwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLW1lZGlhLWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vYWxsb2ZhZnJpY2FcIj5cclxuICAgICAgICAgICAgICAgICAgIDxGYWNlIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FsbF9vZl9hZnJpY2FfYW9hXCI+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEluc3RhZ3JhbSAvPlxyXG4gICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlbC1tYWlsLWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGFkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVsOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMS0zNDctMjcyLTcyMjdcIj4rMSAoMzQ3KSAyNzItNzIyNyAoVVNBKTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMzM3ODggNzM1MzI0XCI+KzMzIDc4OCA3MzUzMjQgKEZyYW5jZSk8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzIyMTc3ODAxMjk1M1wiPisyMjEgNzc4MCAxMjk1M1wiIChEYWthcik8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2xpbmVIZWlnaHQ6JzEuNXJlbSd9fT5FbWFpbDogPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzphbGxvYWZyaWNhQG91dGxvb2suZnJcIj5hbGxvYWZyaWNhQG91dGxvb2suZnI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hZGRyZXNzPiAgXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHQtZGl2XCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFzIGZhLWNvcHlyaWdodCc+PHNwYW4+Y29weXJpZ2h0IDIwMjA8L3NwYW4+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5mb290ZXItY29udGFpbmVye1xyXG4gICAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjoke3Byb3BzLnN0eWwuYmFja307XHJcbiAgICAgICAgY29sb3I6JHtwcm9wcy5zdHlsLmNvdWxldXJ9XHJcbiAgICB9XHJcblxyXG5cclxuICAgXHJcblxyXG4gICAgLmFib3V0LWRpdntcclxuICAgICAgICBtYXJnaW4tdG9wOjFyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToycmVtO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuY29udGFjdC1kaXZ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToycmVtO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLnNvY2lhbC1tZWRpYS1kaXZ7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsLW1lZGlhLWRpdiBhe1xyXG4gICAgICAgd2lkdGg6NHJlbTtcclxuICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICBtYXJnaW4tbGVmdDowLjdyZW07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAudGVsLW1haWwtZGl2IGF7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICBsaW5lLWhlaWdodDoxLjVyZW07XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5jb3B5cmlnaHQtZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBib3JkZXItdG9wLXN0eWxlOnNvbGlkO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDoxcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuIl19 */
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
    className: "jsx-942048618" + " " + "layout grid-container",
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
    className: "jsx-942048618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap",
    rel: "stylesheet",
    className: "jsx-942048618",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("header", {
    className: "jsx-942048618" + " " + 'app-head',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("main", {
    className: "jsx-942048618" + " " + 'app-page',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, children), __jsx("footer", {
    className: "jsx-942048618" + " " + "app-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    styl: {
      couleur: '#fff',
      back: '#000'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "942048618",
    __self: this
  }, "html,body{margin:0;padding:0;font-family:'Open Sans',sans-serif;}.h1,h1{margin-bottom:1rem;}.layout{display:grid;grid-template-rows:1fr auto;}.app-head{position:absolute;top:0;z-index:10;width:100vw;overflow:hidden;}.app-page{position:relative;top:0;}.app-footer{grid-row:2 / 3;}@media (min-width:769px){html,body{font-size:calc(14px + 10 * ((100vw - 769px) / 2048));}}@media (max-width:768px){html,body{font-size:calc(11px + 2 * ((100vw - 360px) / 768));}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NnQixBQUc2QixBQVFVLEFBR0wsQUFNSSxBQVVBLEFBU0YsQUFPaEIsQUFNQSxTQWhEVSxJQVltQixFQXdCaEMsR0FuQlMsQUFVQSxDQXhCOEIsQUFLdkMsS0FVZSxBQVlmLFdBWGUsTUFOZixNQVVELElBeUJLLEVBTkEsQ0F0Q0osU0FtQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxldGVrYVxcQWxsb2ZBZnJpY2FcXGNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dCBncmlkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xMS4yL2Nzcy9hbGwubWluLmNzc1wiLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdhcHAtaGVhZCc+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT0nYXBwLXBhZ2UnPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYXBwLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciBzdHlsPXt7Y291bGV1cjonI2ZmZicsIGJhY2s6JyMwMDAnfX0vPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIGh0bWwsYm9keXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaDEsaDF7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxheW91dHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQgO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hcHAtaGVhZHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFwcC1wYWdle1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDowO1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hcHAtZm9vdGVye1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMzsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OXB4KXtcclxuICAgICAgICAgICAgICAgICAgICBodG1sLGJvZHl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMTAgKiAoKDEwMHZ3IC0gNzY5cHgpIC8gMjA0OCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICAgICAgICAgICAgICAgICBodG1sLGJvZHl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYygxMXB4ICsgMiAqICgoMTAwdncgLSAzNjBweCkgLyA3NjgpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\eteka\\\\AllofAfrica\\\\components\\\\Layout.js */"));
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\eteka\\AllofAfrica\\components\\Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Navbar() {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const responsive = '';

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return __jsx("nav", {
    className: "jsx-3880774185" + " " + `navigation-top ${isOpen ? "responsive" : " "}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    className: "jsx-3880774185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Home"), __jsx("a", {
    href: "/",
    className: "jsx-3880774185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Destinations"), __jsx("a", {
    href: "/",
    className: "jsx-3880774185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Restaurants"), __jsx("a", {
    href: "/",
    className: "jsx-3880774185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Hotels"), __jsx("a", {
    onClick: e => handleClick(e),
    className: "jsx-3880774185" + " " + `icon ${isOpen ? "responsive" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-3880774185" + " " + "fa fa-bars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3880774185",
    __self: this
  }, ".navigation-top.jsx-3880774185{width:100%;background-color:transparent;}.navigation-top.jsx-3880774185 a.jsx-3880774185{display:block;float:left;text-align:center;-webkit-text-decoration:none;text-decoration:none;padding:10px;}.navigation-top.jsx-3880774185 a.jsx-3880774185:hover{background-color:black;color:white;}.navigation-top.jsx-3880774185 .icon.jsx-3880774185{display:none;}@media screen and (max-width:600px){.navigation-top.jsx-3880774185 a.jsx-3880774185:not(:first-child){display:none;}.navigation-top.jsx-3880774185 a.icon.jsx-3880774185{display:block;float:right;}}@media screen and (max-width:600px){.navigation-top.responsive.jsx-3880774185{position:relative;}.navigation-top.responsive.jsx-3880774185 .icon.jsx-3880774185{position:absolute;right:0;top:0;}.navigation-top.responsive.jsx-3880774185 a.jsx-3880774185{float:none;display:block;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxjb21wb25lbnRzXFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJvQixBQUl1QixBQU1JLEFBUVEsQUFLVixBQU9iLEFBR2tCLEFBTXlCLEFBR3JCLEFBTVAsV0F6Q25CLEFBMENzQixFQXpCckIsQUFNSSxDQW5CVSxBQXdCWCxJQUk0QyxBQUloQyxLQXhCQSxFQVBNLEFBc0NJLENBZnJCLEFBU1MsTUFDVCxHQXpCSixLQWJBLEdBTXlCLEFBc0NyQixrREFwQ0wsYUFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXGV0ZWthXFxBbGxvZkFmcmljYVxcY29tcG9uZW50c1xcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcblxyXG4gICAgY29uc3QgW2lzT3BlbixzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgcmVzcG9uc2l2ZSA9ICcnXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldElzT3BlbighaXNPcGVuKVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPXtgbmF2aWdhdGlvbi10b3AgJHtpc09wZW4gPyBcInJlc3BvbnNpdmVcIiA6IFwiIFwifWB9PlxyXG4gICAgICAgIDxhIGhyZWY9XCIvXCI+SG9tZTwvYT5cclxuXHJcbiAgICAgICAgPGEgaHJlZj1cIi9cIj5EZXN0aW5hdGlvbnM8L2E+XHJcblxyXG4gICAgICAgIDxhIGhyZWY9XCIvXCI+UmVzdGF1cmFudHM8L2E+XHJcblxyXG4gICAgICAgIDxhIGhyZWY9XCIvXCI+SG90ZWxzPC9hPlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgPGEgIGNsYXNzTmFtZT17YGljb24gJHtpc09wZW4gPyBcInJlc3BvbnNpdmVcIiA6IFwiXCJ9YH0gb25DbGljaz17KGUpPT5oYW5kbGVDbGljayhlKX0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9pPlxyXG4gICAgICA8L2E+ICBcclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5uYXZpZ2F0aW9uLXRvcHtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubmF2aWdhdGlvbi10b3AgYXtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7ICAgIFxyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZpZ2F0aW9uLXRvcCBhOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZpZ2F0aW9uLXRvcCAuaWNvbntcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCl7XHJcblxyXG4gICAgICAgICAgICAubmF2aWdhdGlvbi10b3AgYTpub3QoOmZpcnN0LWNoaWxkKXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2aWdhdGlvbi10b3AgYS5pY29ue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gICAgICAgICAgICAubmF2aWdhdGlvbi10b3AucmVzcG9uc2l2ZXtwb3NpdGlvbjpyZWxhdGl2ZX1cclxuXHJcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uLXRvcC5yZXNwb25zaXZlIC5pY29ue1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDowO1xyXG4gICAgICAgICAgICAgICAgdG9wOjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uLXRvcC5yZXNwb25zaXZlIGEge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6bm9uZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L25hdj5cclxuXHJcblxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\eteka\\\\AllofAfrica\\\\components\\\\Navbar.js */"));
}

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