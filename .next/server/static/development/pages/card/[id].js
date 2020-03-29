module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./datas/countriesData.js":
/*!********************************!*\
  !*** ./datas/countriesData.js ***!
  \********************************/
/*! exports provided: countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
const countries = [{
  id: 0,
  pays: 'senegal',
  hotels: [{
    id: 0,
    name: 'radisson',
    image: 'afric.jpg'
  }, {
    id: 1,
    name: 'dakar',
    image: 'afric.jpg'
  }],
  restaurants: [{
    id: 0,
    name: 'sene_resto',
    image: 'afric.jpg'
  }]
}, {
  id: 1,
  pays: 'Burkina Faso',
  hotels: [{
    id: 2,
    name: 'burki',
    image: 'afric.jpg'
  }, {
    id: 3,
    name: 'faso',
    image: 'afric.jpg'
  }],
  restaurants: [{
    id: 1,
    name: 'burki_resto',
    image: 'afric.jpg'
  }]
}];

/***/ }),

/***/ "./pages/card/[id].js":
/*!****************************!*\
  !*** ./pages/card/[id].js ***!
  \****************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datas_countriesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../datas/countriesData */ "./datas/countriesData.js");
var _jsxFileName = "C:\\Users\\eteka\\AllofAfrica\\pages\\card\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Card = ({
  lesdatas
}) => {
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, lesdatas.name);
};

async function getStaticProps({
  params
}) {
  const allpaths = _datas_countriesData__WEBPACK_IMPORTED_MODULE_1__["countries"];
  let restos = [];
  let leshotels = [];
  allpaths.map(pays => pays.restaurants).forEach(tabresto => tabresto.map(resto => restos.push(resto)));
  allpaths.map(pays => pays.hotels).forEach(tabhotel => tabhotel.map(hotel => leshotels.push(hotel)));
  const datas = restos.concat(leshotels);
  const lesdatas = datas.find(data => data.name === params.id);
  return {
    props: {
      lesdatas
    }
  };
}
async function getStaticPaths() {
  const allpaths = _datas_countriesData__WEBPACK_IMPORTED_MODULE_1__["countries"];
  let paths = [];
  let restos = [];
  let leshotels = [];
  allpaths.map(pays => pays.restaurants).forEach(tabresto => tabresto.map(resto => restos.push(resto)));
  allpaths.map(pays => pays.hotels).forEach(tabhotel => tabhotel.map(hotel => leshotels.push(hotel)));
  const datas = restos.concat(leshotels);
  paths = datas.map(data => ({
    params: {
      id: data.name
    }
  }));
  return {
    paths,
    fallback: false
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ 6:
/*!**********************************!*\
  !*** multi ./pages/card/[id].js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eteka\AllofAfrica\pages\card\[id].js */"./pages/card/[id].js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map