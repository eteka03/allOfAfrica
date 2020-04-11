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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Caroussel.js":
/*!*********************************!*\
  !*** ./components/Caroussel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\eteka\\AllofAfrica\\components\\Caroussel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const items = [{
  id: 1,
  altText: 'Slide 1',
  caption: 'Slide 1'
}, {
  id: 2,
  altText: 'Slide 2',
  caption: 'Slide 2'
}, {
  id: 3,
  altText: 'Slide 3',
  caption: 'Slide 3'
}];

const Caroussel = props => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: animating,
    1: setAnimating
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselItem"], {
      className: "custom-tag",
      tag: "div",
      key: item.id,
      onExiting: () => setAnimating(true),
      onExited: () => setAnimating(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }, __jsx("img", {
      style: {
        objectFit: "contain"
      },
      width: "100%",
      height: "100%",
      src: "/images/afric.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselCaption"], {
      className: "text-danger",
      captionText: item.caption,
      captionHeader: item.caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: previous,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselIndicators"], {
    items: items,
    activeIndex: activeIndex,
    onClickHandler: goToIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }), slides, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
    direction: "prev",
    directionText: "Previous",
    onClickHandler: previous,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
    direction: "next",
    directionText: "Next",
    onClickHandler: next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Caroussel);

/***/ }),

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
/* harmony import */ var _components_Caroussel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Caroussel */ "./components/Caroussel.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\eteka\\AllofAfrica\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2933779203" + " " + "index-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203" + " " + "index-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203" + " " + "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2933779203" + " " + "allOf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-2933779203" + " " + "africa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Africa"), __jsx("a", {
    className: "jsx-2933779203" + " " + "explore-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Explorez"))), __jsx("div", {
    className: "jsx-2933779203" + " " + "main-business",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203" + " " + "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203" + " " + "row-services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "60%",
    src: '/images/icons/hotel.svg',
    alt: "undefined",
    title: "hotelerie",
    className: "jsx-2933779203" + " " + "services-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("h5", {
    className: "jsx-2933779203" + " " + "services-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Hotelerie")), __jsx("div", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "75%",
    src: '/images/icons/resto.svg',
    alt: "undefined",
    title: "hotelerie",
    className: "jsx-2933779203" + " " + "services-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("h5", {
    className: "jsx-2933779203" + " " + "services-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Restauration"))), __jsx("div", {
    className: "jsx-2933779203" + " " + "row-services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "50%",
    src: '/images/icons/tourism.svg',
    alt: "undefined",
    title: "hotelerie",
    className: "jsx-2933779203" + " " + "services-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("h5", {
    className: "jsx-2933779203" + " " + "services-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Tourisme")), __jsx("div", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "75%",
    src: '/images/icons/culture.svg',
    alt: "undefined",
    title: "hotelerie",
    className: "jsx-2933779203" + " " + "services-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("h5", {
    className: "jsx-2933779203" + " " + "services-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "culture")))), __jsx("div", {
    className: "jsx-2933779203" + " " + "culture-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203" + " " + "div-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "D\xE9couvrez nos paysages")), __jsx("div", {
    className: "jsx-2933779203" + " " + "culture-text-image-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203" + " " + "culture-image-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "100%",
    src: '/images/paysage_vert.jpg',
    alt: "undefined",
    title: "paysage",
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2933779203" + " " + "culture-text-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2933779203" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "En Afrique,"), __jsx("h4", {
    className: "jsx-2933779203" + " " + "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna"), __jsx("a", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Visitez")))), __jsx("div", {
    className: "jsx-2933779203" + " " + "cuisine-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203" + " " + "div-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "D\xE9couvrez notre cuisine")), __jsx("div", {
    className: "jsx-2933779203" + " " + "cuisine-images-carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203" + " " + "cuisine-image-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImage"], {
    src: '/images/cuisine_photo.jpg',
    alt: "undefined",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2933779203" + " " + "cuisine-image-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImage"], {
    src: '/images/cooking-dishes.jpg',
    alt: "undefined",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2933779203" + " " + "cuisine-div-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2933779203" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "En Afrique,"), __jsx("h4", {
    className: "jsx-2933779203" + " " + "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna"), __jsx("a", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Visitez"))), __jsx("div", {
    className: "jsx-2933779203" + " " + "culture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("h1", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "culture"), __jsx("div", {
    style: {
      width: '100%',
      height: '80%',
      filter: 'drop-shadow(6px 6px 8px black)',
      WebkitFilter: 'drop-shadow(6px 6px 8px black)'
    },
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__["LazyLoadImage"], {
    alt: "undefined",
    src: '/images/three-women-wearing-black-clothe.jpg',
    width: "100%",
    height: "100%",
    style: {
      objectFit: 'contain'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })), __jsx("div", {
    style: {
      textAlign: 'center',
      marginTop: '1rem'
    },
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna"), __jsx("a", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Parcourir"))), __jsx("section", {
    className: "jsx-2933779203" + " " + "bigscreen-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "D\xE9couvrez et vivez des experiences inoubliables")), __jsx("div", {
    className: "jsx-2933779203" + " " + "bigscreen-wrapper-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203" + " " + "bigscreen-left-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "hi"), __jsx("div", {
    className: "jsx-2933779203" + " " + "bigscreen-right-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203" + " " + "right-div-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2933779203" + " " + "right-div-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })))), __jsx("section", {
    className: "jsx-2933779203" + " " + "bigscreen-cuisine-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Laissez vous emportez par la cuisine africaine")), __jsx("div", {
    className: "jsx-2933779203" + " " + "cuisine-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203" + " " + "plat-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "image")), __jsx("div", {
    className: "jsx-2933779203" + " " + "plat-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "image")), __jsx("div", {
    className: "jsx-2933779203" + " " + "plat-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "image")))), __jsx("section", {
    className: "jsx-2933779203" + " " + "bigscreen-culture-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Apprenez encore plus sur notre culture")), __jsx("div", {
    className: "jsx-2933779203" + " " + "caroussel-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx(_components_Caroussel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }))), __jsx("section", {
    className: "jsx-2933779203" + " " + "bigscreen-services-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "Nos services")), __jsx("div", {
    className: "jsx-2933779203" + " " + "bigscreen-services-cards-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2933779203" + " " + "bigscreen-services-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("img", {
    src: "/images/icons/hotel.svg",
    alt: "undefined",
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Hotelerie")), __jsx("div", {
    className: "jsx-2933779203" + " " + "bigscreen-services-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("img", {
    src: "/images/icons/resto.svg",
    alt: "undefined",
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Restauration")), __jsx("div", {
    className: "jsx-2933779203" + " " + "bigscreen-services-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx("img", {
    src: "/images/icons/tourism.svg",
    alt: "undefined",
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-2933779203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Tourisme")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2933779203",
    __self: this
  }, ".presentation.jsx-2933779203{display:block;text-align:center;position:absolute;top:50%;-webkit-transform:translate(-50%,50%) color:white;-ms-transform:translate(-50%,50%) color:white;transform:translate(-50%,50%) color:white;z-index:1500;}.presentation.jsx-2933779203 h3.jsx-2933779203{padding:0;margin:0;color:rgba(45,45,45,1);text-shadow:0 2px 0 rgba(0,0,0,0.5);font-size:5rem;font-family:'sans-serif';font-weight:900;}.allOf.jsx-2933779203:after{content:'All of';color:rgba(45,45,45,1);font-size:5rem;font-weight:900;}.explore-link.jsx-2933779203{display:inline-block;border-style:solid;border-color:#fff;padding:2% 10% 2% 10%;margin-top:3vh;background-color:#020202;color :#fefcfc;border-radius:5%;font-weight:700;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;}.index-header.jsx-2933779203{display:block;width:100%;height:100vh;background-size:cover;background-position:center;position:relative;}.index-header.jsx-2933779203::after{content:\"\";top:0;left:0;right:0;bottom:0;position:absolute;background-color:black;opacity:0.3;}.main-business.jsx-2933779203{height:100%;display:block;padding:2%;}.cuisine-div.jsx-2933779203{margin-top:20vh;}.cuisine-div-text.jsx-2933779203{width:100%;height:100%;padding:1rem;float:left;display:block;border:3px solid #333333;border-radius:2% 6% 5% 4% / 1% 1% 2% 4%;font-size:1rem;line-height:1.5rem;white-space:pre-line;background:#ffffff;position:relative;text-align:center;}.cuisine-div-text.jsx-2933779203::before{content:'';border:2px solid #353535;display:block;width:100%;height:100%;position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0) scale(1.015) rotate(0.5deg);-ms-transform:translate3d(-50%,-50%,0) scale(1.015) rotate(0.5deg);transform:translate3d(-50%,-50%,0) scale(1.015) rotate(0.5deg);border-radius:1% 1% 2% 4% / 2% 6% 5% 4%;}.cuisine-div-text.jsx-2933779203>a.jsx-2933779203{width:50%;display:inline-block;text-align:center;-webkit-text-decoration:none;text-decoration:none;border-style:solid;border-color:#000;padding:0.5vh;color:#ffffff;background-color:#333333;text-transform:uppercase;}.culture.jsx-2933779203{width:100%;background-color:rgb(0,0,0,0.02);margin-top:6rem;margin-bottom:2rem;padding:1rem;}.culture.jsx-2933779203 a.jsx-2933779203{display:block;width:50%;display:block;margin-top:1.5rem;text-align:center;-webkit-text-decoration:none;-webkit-text-decoration:none;text-decoration:none;border-style:solid;border-color:#000;padding:0.5vh;color:#ffffff;background-color:#333333;text-transform:uppercase;-webkit-transform:translate(50%);-ms-transform:translate(50%);transform:translate(50%);}.culture.jsx-2933779203 span.jsx-2933779203{font-weight:bold;}.bigscreen-section.jsx-2933779203{width:100%;height:60vh;font-size:16px;margin-bottom:2.7rem;}.bigscreen-section.jsx-2933779203 header.jsx-2933779203{text-align:center;padding-bottom:1rem;}.bigscreen-section.jsx-2933779203 h1.jsx-2933779203{font-size:2em;}.bigscreen-wrapper-div.jsx-2933779203{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:100%;height:90%;}.bigscreen-left-div.jsx-2933779203{width:47%;background-image:url(/images/ville.jpg);background-size:cover;background-repeat:no-repeat;}.bigscreen-right-div.jsx-2933779203{width:47%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.right-div-up.jsx-2933779203{width:100%;height:47%;background-image:url(/images/ville.jpg);background-size:cover;background-repeat:no-repeat;}.right-div-down.jsx-2933779203{width:100%;height:47%;background-image:url(/images/ville.jpg);background-size:cover;background-repeat:no-repeat;}.bigscreen-cuisine-section.jsx-2933779203{width:100%;height:60vh;padding:1rem;font-size:16px;margin-bottom:2.7rem;}.bigscreen-cuisine-section.jsx-2933779203 header.jsx-2933779203{text-align:center;padding-bottom:1.7rem;}.bigscreen-cuisine-section.jsx-2933779203 header.jsx-2933779203 h1.jsx-2933779203{font-size:2em;}.cuisine-wrapper.jsx-2933779203{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:85%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.plat-card.jsx-2933779203{height:100%;width:32%;background-color:#17141d;border-radius:10px;box-shadow:-1rem 0 3rem #000;-webkit-transition:0.4s ease-out;transition:0.4s ease-out;position:relative;left:0px;}.plat-card.jsx-2933779203:not(:first-child){margin-left:-50px;}.plat-card.jsx-2933779203:hover{-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);transform:translateY(-20px);-webkit-transition:0.4s ease-out;transition:0.4s ease-out;}.plat-card.jsx-2933779203:hover~.plat-card.jsx-2933779203{position:relative;left:50px;-webkit-transition:0.4s ease-out;transition:0.4s ease-out;}.bigscreen-culture-section.jsx-2933779203{margin-bottom:3rem;}.bigscreen-culture-section.jsx-2933779203 header.jsx-2933779203{text-align:center;padding-bottom:1.7rem;}.bigscreen-culture-section.jsx-2933779203 header.jsx-2933779203 h1.jsx-2933779203{font-size:2em;}.bigscreen-culture-section.jsx-2933779203:not(header){width:75%;margin-left:13%;}.bigscreen-services-section.jsx-2933779203 header.jsx-2933779203{text-align:center;font-size:1.5em;padding-bottom:1.7rem;}.bigscreen-services-section.jsx-2933779203{height:500px;font-size:16px;}.bigscreen-services-cards-wrapper.jsx-2933779203{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.bigscreen-services-card.jsx-2933779203{height:300px;width:32%;background-color:#fff;border-style:solid;}.bigscreen-services-card.jsx-2933779203 img.jsx-2933779203{height:50%;object-fit:contain;width:100%;}.bigscreen-services-card.jsx-2933779203 h3.jsx-2933779203{text-align:center;padding-top:11%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNk5pQixBQU9zQixBQWFKLEFBV08sQUFVRyxBQWVOLEFBYUosQUFZRSxBQVlLLEFBUVAsQUFrQkEsQUFvQkQsQUFlQSxBQVdHLEFBb0JLLEFBT1IsQUFPTyxBQU1ILEFBTUYsQUFhSCxBQU9BLEFBUUMsQUFRQSxBQVFELEFBU08sQUFNSCxBQUtGLEFBU0UsQUFZRyxBQUlRLEFBS1YsQUFPRixBQU1DLEFBTU4sQUFJRixBQU1NLEFBVUgsQUFLQSxBQUtBLEFBT0YsQUFLTyxVQXpWSCxBQXVIUyxBQXFGb0IsQUFPM0IsQUFpR0QsQ0FuUUwsQUFnQ00sQUFrQnVCLEFBbUNILEFBc0NyQixBQStDQSxBQVFELEFBUUEsQUEwR0ksQ0F4UkMsQUEyTU4sQ0E0REMsQUFVTCxDQTNWYyxBQWlEUCxBQThHRixBQXVDWixBQWlFRCxBQXFEVyxFQXBPVixDQWhFeUIsQUF1Q2hCLEFBbUhULENBY3FCLEFBa0V2QixBQStCRixBQVNZLEFBY1YsQUFlYSxBQWdDRSxDQXpWWSxBQW1TN0IsRUEvUXlCLENBdU1vQixBQVFBLEFBcUNkLENBdkxiLEFBMkZJLEFBK0RKLEFBbUdLLENBNVJULEFBaUdNLENBL0dBLENBeUJGLEFBc1BBLEVBdEJTLEFBdUMzQixFQWlCWSxDQTlOVSxDQXBJRyxBQWdFVixFQXVRTSxBQWdDckIsRUF4UWdCLEFBaUJjLEFBeUlYLENBN0tiLENBdkJ1QixBQTRHTixBQXlCRyxBQU90QixFQXpLa0IsQUFVRSxBQStOckIsQUFzREEsQ0F0UHFCLEFBaVNYLENBcFYrQixFQXFJdkIsQ0EwTW5CLEVBNVBzQixBQXFMQyxFQWpKQSxDQXBJVixBQWdIWSxBQXdHQSxDQWlDRixJQWpPSCxDQXlJRSxBQXVLeEIsRUFyVW1CLEFBK0JZLENBZ0NGLEFBd0h6QixDQXJJOEIsQUE4RlYsQ0FsRFcsQUFnQlAsQ0F1SEQsQUFRQSxFQTRHeEIsRUF0RStCLEtBN1A1QixDQWdNMkIsQUFrQzlCLENBekkrQixDQWdEQyxBQXdDWCxBQWdFVCxBQTBFSyxJQXJVQyxDQXFJSCxDQWpITSxFQWlDbkIsRUEySnNCLEFBVU0sQUFRQSxDQTBCVCxDQXhLMEIsQUF1TWxELENBbFBLLElBMkRtQixDQW9DcEIsQ0F2STJCLENBb0R6QixDQWhDNEIsQUFtUEgsQ0FZSixHQS9LRixBQWlCRixDQXFGbkIsR0F2RHVCLEVBM0dyQixHQTZEMkUsSUFxSDdFLEFBUUEsTUFqT2tCLEFBcUhBLEVBakdFLE1BK0RBLFFBbEZsQixDQW9CbUIsQ0FpR1AsS0FsQ1UsRUFzR00sQUEwSUosT0E3TVosRUFqR0ssQ0E2SEUsQUFvSEQsQ0FaRyxBQXdCM0IsTUE5TDZCLEVBMEhJLEVBdkZKLElBakdELEdBaVBiLENBcEhTLFFBc0hyQixDQW5MMEIsUUFrQ0EsQ0E0QlQsTUFsS0EsSUFxR1EsSUE4RFIsS0FoS2QsS0FvSUYsSUFqQ3dCLEFBOERHLGtCQTdEM0IsT0E4RDJCLFVBcUc1QixhQWxFYSxBQXlJZSxFQTNLQSxDQWhJekIsUUFtS1UsUUFvQlosR0FqQkEscUJBMUZvRCx3Q0FFcEQsTUFtREEiLCJmaWxlIjoiQzpcXFVzZXJzXFxldGVrYVxcQWxsb2ZBZnJpY2FcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgQ2Fyb3Vzc2VsIGZyb20gJy4uL2NvbXBvbmVudHMvQ2Fyb3Vzc2VsJ1xyXG5cclxuaW1wb3J0IHtMYXp5TG9hZEltYWdlfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50J1xyXG5cclxuaW1wb3J0IHtcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIENhcm91c2VsLFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGV4LXBhZ2VcIj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXgtaGVhZGVyXCIgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJhbGxPZlwiPjwvaDM+XHJcbiAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWZyaWNhXCIgPkFmcmljYTwvaDE+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSAgY2xhc3NOYW1lPVwiZXhwbG9yZS1saW5rXCI+RXhwbG9yZXo8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ1c2luZXNzXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXNcIj5cclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc2VydmljZXNcIj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzZXJ2aWNlcy1pbWFnZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjYwJVwiIHNyYz17Jy9pbWFnZXMvaWNvbnMvaG90ZWwuc3ZnJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImhvdGVsZXJpZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic2VydmljZXMtZGVzY3JpcHRpb25cIj5Ib3RlbGVyaWU8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlcnZpY2VzLWltYWdlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNzUlXCIgc3JjPXsnL2ltYWdlcy9pY29ucy9yZXN0by5zdmcnfSBcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaG90ZWxlcmllXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzZXJ2aWNlcy1kZXNjcmlwdGlvblwiPlJlc3RhdXJhdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNlcnZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlcnZpY2VzLWltYWdlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTAlXCIgc3JjPXsnL2ltYWdlcy9pY29ucy90b3VyaXNtLnN2Zyd9IFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJob3RlbGVyaWVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNlcnZpY2VzLWRlc2NyaXB0aW9uXCI+VG91cmlzbWU8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlcnZpY2VzLWltYWdlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNzUlXCIgc3JjPXsnL2ltYWdlcy9pY29ucy9jdWx0dXJlLnN2Zyd9IFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJob3RlbGVyaWVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNlcnZpY2VzLWRlc2NyaXB0aW9uXCI+Y3VsdHVyZTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWx0dXJlLWRpdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8aDE+RMOpY291dnJleiBub3MgcGF5c2FnZXM8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWx0dXJlLXRleHQtaW1hZ2UtZGl2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VsdHVyZS1pbWFnZS1kaXZcIj5cclxuICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBzcmM9eycvaW1hZ2VzL3BheXNhZ2VfdmVydC5qcGcnfSBhbHQ9XCJ1bmRlZmluZWRcIiB0aXRsZT1cInBheXNhZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VsdHVyZS10ZXh0LWRpdlwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJcIj5FbiBBZnJpcXVlLDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBhdCB2dWxwdXRhdGUgZXN0LiBEb25lYyB0ZW1wb3IgZmVsaXMgYXQgbmliaCBlbGVpZmVuZCBtYWxlc3VhZGEuIE51bGxhbSBzdXNjaXBpdCBsb2JvcnRpcyBhbGlxdWFtLiBQaGFzZWxsdXMgbG9ib3J0aXMgYW50ZSBsb3JlbSwgdml0YWUgc2NlbGVyaXNxdWUgbGFjdXMgdGVtcHVzIHNlZC4gUGhhc2VsbHVzIHJ1dHJ1bSBtYWduYTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgIDxhPlZpc2l0ZXo8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vpc2luZS1kaXZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxPkTDqWNvdXZyZXogbm90cmUgY3Vpc2luZTwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vpc2luZS1pbWFnZXMtY2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vpc2luZS1pbWFnZS1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2Ugc3JjPXsnL2ltYWdlcy9jdWlzaW5lX3Bob3RvLmpwZyd9IGFsdD1cInVuZGVmaW5lZFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1aXNpbmUtaW1hZ2UtZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlICBzcmM9eycvaW1hZ2VzL2Nvb2tpbmctZGlzaGVzLmpwZyd9IGFsdD1cInVuZGVmaW5lZFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWlzaW5lLWRpdi10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIlwiPkVuIEFmcmlxdWUsPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1vcmJpIGF0IHZ1bHB1dGF0ZSBlc3QuIERvbmVjIHRlbXBvciBmZWxpcyBhdCBuaWJoIGVsZWlmZW5kIG1hbGVzdWFkYS4gTnVsbGFtIHN1c2NpcGl0IGxvYm9ydGlzIGFsaXF1YW0uIFBoYXNlbGx1cyBsb2JvcnRpcyBhbnRlIGxvcmVtLCB2aXRhZSBzY2VsZXJpc3F1ZSBsYWN1cyB0ZW1wdXMgc2VkLiBQaGFzZWxsdXMgcnV0cnVtIG1hZ25hPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgPGEgPlZpc2l0ZXo8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWx0dXJlXCI+XHJcbiAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+Y3VsdHVyZTwvaDE+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOicxMDAlJyxoZWlnaHQ6JzgwJScsZmlsdGVyOidkcm9wLXNoYWRvdyg2cHggNnB4IDhweCBibGFjayknLFdlYmtpdEZpbHRlcjonZHJvcC1zaGFkb3coNnB4IDZweCA4cHggYmxhY2spJ319PlxyXG4gICAgICAgICAgICAgPExhenlMb2FkSW1hZ2UgYWx0PVwidW5kZWZpbmVkXCIgc3JjPXsnL2ltYWdlcy90aHJlZS13b21lbi13ZWFyaW5nLWJsYWNrLWNsb3RoZS5qcGcnfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgc3R5bGU9e3tvYmplY3RGaXQ6J2NvbnRhaW4nfX0gLz5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLG1hcmdpblRvcDonMXJlbSd9fT5cclxuICAgICAgICAgICAgIDxzcGFuPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE1vcmJpIGF0IHZ1bHB1dGF0ZSBlc3QuIERvbmVjIHRlbXBvciBmZWxpcyBhdCBuaWJoIGVsZWlmZW5kIG1hbGVzdWFkYS4gTnVsbGFtIHN1c2NpcGl0IGxvYm9ydGlzIGFsaXF1YW0uIFBoYXNlbGx1cyBsb2JvcnRpcyBhbnRlIGxvcmVtLCB2aXRhZSBzY2VsZXJpc3F1ZSBsYWN1cyB0ZW1wdXMgc2VkLiBQaGFzZWxsdXMgcnV0cnVtIG1hZ25hPC9zcGFuPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxhID5QYXJjb3VyaXI8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiaWdzY3JlZW4tc2VjdGlvblwiID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj48aDE+RMOpY291dnJleiBldCB2aXZleiBkZXMgZXhwZXJpZW5jZXMgaW5vdWJsaWFibGVzPC9oMT48L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWdzY3JlZW4td3JhcHBlci1kaXZcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnc2NyZWVuLWxlZnQtZGl2XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiYmlnc2NyZWVuLXJpZ2h0LWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1kaXYtdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtZGl2LWRvd25cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmlnc2NyZWVuLWN1aXNpbmUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj48aDE+TGFpc3NleiB2b3VzIGVtcG9ydGV6IHBhciBsYSBjdWlzaW5lIGFmcmljYWluZTwvaDE+PC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWlzaW5lLXdyYXBwZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXQtY2FyZFwiPjxoMT5pbWFnZTwvaDE+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF0LWNhcmRcIj48aDE+aW1hZ2U8L2gxPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF0LWNhcmRcIj48aDE+aW1hZ2U8L2gxPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmlnc2NyZWVuLWN1bHR1cmUtc2VjdGlvblwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+PGgxPkFwcHJlbmV6IGVuY29yZSBwbHVzIHN1ciBub3RyZSBjdWx0dXJlPC9oMT48L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c3NlbC1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3Vzc2VsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiaWdzY3JlZW4tc2VydmljZXMtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj48aDE+Tm9zIHNlcnZpY2VzPC9oMT48L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZ3NjcmVlbi1zZXJ2aWNlcy1jYXJkcy13cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZ3NjcmVlbi1zZXJ2aWNlcy1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL2hvdGVsLnN2Z1wiIGFsdD1cInVuZGVmaW5lZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+SG90ZWxlcmllPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZ3NjcmVlbi1zZXJ2aWNlcy1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL3Jlc3RvLnN2Z1wiIGFsdD1cInVuZGVmaW5lZFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5SZXN0YXVyYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZ3NjcmVlbi1zZXJ2aWNlcy1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL3RvdXJpc20uc3ZnXCIgYWx0PVwidW5kZWZpbmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VG91cmlzbWU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICA8c3R5bGUganN4PntgXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAucHJlc2VudGF0aW9ue1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjUwJTtcclxuICAgICAgICBcclxuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsNTAlKVxyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIHotaW5kZXg6MTUwMDtcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcmVzZW50YXRpb24gaDN7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgY29sb3I6cmdiYSg0NSw0NSw0NSwxKTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAycHggMCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgXHJcbiAgICAgICBmb250LXNpemU6NXJlbTtcclxuICAgICAgIGZvbnQtZmFtaWx5OidzYW5zLXNlcmlmJztcclxuICAgICAgIGZvbnQtd2VpZ2h0OjkwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFsbE9mOmFmdGVye1xyXG4gICAgICAgIGNvbnRlbnQ6J0FsbCBvZic7XHJcbiAgICAgICBjb2xvcjpyZ2JhKDQ1LDQ1LDQ1LDEpO1xyXG4gICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6OTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuXHJcblxyXG4gICAgICAuZXhwbG9yZS1saW5re1xyXG4gICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgICAgICBib3JkZXItY29sb3I6I2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAyJSAxMCUgMiUgMTAlIDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzdmggOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwMjAyIDtcclxuICAgICAgICBjb2xvciA6ICNmZWZjZmMgO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgLmluZGV4LWhlYWRlcntcclxuICAgICAgICAgXHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDoxMDB2aDtcclxuICBcclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlXHJcbiAgXHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmluZGV4LWhlYWRlcjo6YWZ0ZXJ7XHJcbiAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICB0b3A6MDtcclxuICAgICAgIGxlZnQ6MDtcclxuICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICBib3R0b206MDtcclxuICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICBcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICAgICBvcGFjaXR5OjAuM1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWFpbi1idXNpbmVzc3tcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6MiU7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgIFxyXG4gICAgICBcclxuXHJcbiAgICAgIC5jdWlzaW5lLWRpdntcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwdmg7XHJcbiAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAgLmN1aXNpbmUtZGl2LXRleHR7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6MXJlbTtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzMzMzMzMztcclxuICAgICAgICBcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIlIDYlIDUlIDQlIC8gMSUgMSUgMiUgNCU7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgICBcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY3Vpc2luZS1kaXYtdGV4dDo6YmVmb3Jle1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNTM1MzU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHNjYWxlKDEuMDE1KSByb3RhdGUoMC41ZGVnKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDElIDElIDIlIDQlIC8gMiUgNiUgNSUgNCU7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgICBcclxuICAgIFxyXG5cclxuICAgICAgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAuY3Vpc2luZS1kaXYtdGV4dCA+IGEge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDAuNXZoO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmN1bHR1cmV7XHJcbiAgICAgXHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsMCwwLDAuMDIpO1xyXG4gICAgICBtYXJnaW4tdG9wOjZyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MnJlbTtcclxuICAgICAgcGFkZGluZzoxcmVtO1xyXG4gICAgIFxyXG4gICAgXHJcbiAgICB9IFxyXG4gIFxyXG5cclxuICAgIC5jdWx0dXJlIGF7XHJcbiAgICAgIGRpc3BsYXk6YmxvY2s7XHJcblxyXG4gICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi10b3A6MS41cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwMDtcclxuICAgICAgcGFkZGluZzogMC41dmg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUpO1xyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICAuY3VsdHVyZSBzcGFue1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgICBcclxuICBcclxuICAgIC5iaWdzY3JlZW4tc2VjdGlvbntcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgaGVpZ2h0OjYwdmg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweCA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206Mi43cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5iaWdzY3JlZW4tc2VjdGlvbiAgaGVhZGVye1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuYmlnc2NyZWVuLXNlY3Rpb24gIGgxe1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG4gICAgLmJpZ3NjcmVlbi13cmFwcGVyLWRpdntcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDo5MCU7XHJcbiAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgLmJpZ3NjcmVlbi1sZWZ0LWRpdntcclxuICAgICAgd2lkdGg6NDclO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgvaW1hZ2VzL3ZpbGxlLmpwZyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgfVxyXG5cclxuICAgIC5iaWdzY3JlZW4tcmlnaHQtZGl2e1xyXG4gICAgICB3aWR0aDo0NyU7XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7ICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5yaWdodC1kaXYtdXB7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDogNDclO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgvaW1hZ2VzL3ZpbGxlLmpwZyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodC1kaXYtZG93bntcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgaGVpZ2h0OjQ3JTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoL2ltYWdlcy92aWxsZS5qcGcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgIH1cclxuXHJcbiAgIC5iaWdzY3JlZW4tY3Vpc2luZS1zZWN0aW9ue1xyXG4gICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgaGVpZ2h0OjYwdmg7XHJcbiAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICBmb250LXNpemU6MTZweDtcclxuICAgICBtYXJnaW4tYm90dG9tOjIuN3JlbTtcclxuICAgICBcclxuICAgfVxyXG5cclxuICAgLmJpZ3NjcmVlbi1jdWlzaW5lLXNlY3Rpb24gaGVhZGVye1xyXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgIHBhZGRpbmctYm90dG9tOjEuN3JlbVxyXG4gICB9XHJcblxyXG5cclxuICAgLmJpZ3NjcmVlbi1jdWlzaW5lLXNlY3Rpb24gaGVhZGVyIGgxe1xyXG4gICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICB9XHJcblxyXG5cclxuICAgLmN1aXNpbmUtd3JhcHBlcntcclxuICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgaGVpZ2h0Ojg1JTtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgXHJcbiAgIH1cclxuXHJcbiAgIC5wbGF0LWNhcmR7XHJcblxyXG4gICAgICBoZWlnaHQ6IDEwMCUgO1xyXG4gICAgICB3aWR0aDozMiU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE0MWQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6LTFyZW0gMCAzcmVtICMwMDA7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbGVmdDogMHB4O1xyXG5cclxuICAgfVxyXG5cclxuICAgLnBsYXQtY2FyZDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbn1cclxuXHJcbi5wbGF0LWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcclxufVxyXG5cclxuLnBsYXQtY2FyZDpob3ZlciB+IC5wbGF0LWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcblxyXG4uYmlnc2NyZWVuLWN1bHR1cmUtc2VjdGlvbntcclxubWFyZ2luLWJvdHRvbTozcmVtO1xyXG59XHJcblxyXG5cclxuLmJpZ3NjcmVlbi1jdWx0dXJlLXNlY3Rpb24gaGVhZGVye1xyXG5cclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbToxLjdyZW1cclxuICBcclxufVxyXG5cclxuLmJpZ3NjcmVlbi1jdWx0dXJlLXNlY3Rpb24gaGVhZGVyIGgxe1xyXG5cclxuZm9udC1zaXplOjJlbVxyXG59XHJcblxyXG5cclxuLmJpZ3NjcmVlbi1jdWx0dXJlLXNlY3Rpb246bm90KGhlYWRlcil7XHJcbiAgd2lkdGg6NzUlO1xyXG4gIG1hcmdpbi1sZWZ0OjEzJVxyXG59XHJcblxyXG5cclxuLmJpZ3NjcmVlbi1zZXJ2aWNlcy1zZWN0aW9uIGhlYWRlcntcclxuICBcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmZvbnQtc2l6ZToxLjVlbTtcclxucGFkZGluZy1ib3R0b206MS43cmVtO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLmJpZ3NjcmVlbi1zZXJ2aWNlcy1zZWN0aW9ue1xyXG4gIGhlaWdodDo1MDBweDtcclxuICBmb250LXNpemU6MTZweDtcclxufVxyXG5cclxuLmJpZ3NjcmVlbi1zZXJ2aWNlcy1jYXJkcy13cmFwcGVye1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seVxyXG59XHJcblxyXG4uYmlnc2NyZWVuLXNlcnZpY2VzLWNhcmR7XHJcbiAgaGVpZ2h0OjMwMHB4O1xyXG4gIHdpZHRoOjMyJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgYm9yZGVyLXN0eWxlOnNvbGlkXHJcbiAgXHJcbn1cclxuXHJcbi5iaWdzY3JlZW4tc2VydmljZXMtY2FyZCBpbWd7XHJcbiAgaGVpZ2h0OjUwJTtcclxuICBvYmplY3QtZml0OmNvbnRhaW47XHJcbiAgd2lkdGg6MTAwJVxyXG59XHJcbiAgICBcclxuLmJpZ3NjcmVlbi1zZXJ2aWNlcy1jYXJkIGgze1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOjExJTtcclxufVxyXG5cclxuXHJcbiBcclxuXHJcbiAgICAgYH1cclxuXHJcbiAgICAgPC9zdHlsZT5cclxuICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\eteka\\\\AllofAfrica\\\\pages\\\\index.js */"));
}

/***/ }),

/***/ 6:
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

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

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
//# sourceMappingURL=index.js.map