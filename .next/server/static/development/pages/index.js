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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Caroussel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Caroussel */ "./components/Caroussel.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\eteka\\AllofAfrica\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_6__["NextSeo"], {
    title: "home page",
    description: "page index du site",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3586893694" + " " + "index-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694" + " " + "index-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694" + " " + "presentation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("span", {
    "aria-label": "hi",
    className: "jsx-3586893694" + " " + "allOf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-3586893694" + " " + "africa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Africa"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    tabIndex: 0,
    to: "main-business",
    spy: true,
    smooth: true,
    offset: 50,
    duration: 500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-3586893694" + " " + "explore-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Explorez")))), __jsx("div", {
    name: "main-bus",
    className: "jsx-3586893694" + " " + "main-business",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694" + " " + "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694" + " " + "row-services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "60%",
    src: '/images/icons/hotel.svg',
    alt: "undefined",
    title: "hotelerie",
    className: "jsx-3586893694" + " " + "services-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("h5", {
    className: "jsx-3586893694" + " " + "services-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Hotelerie")), __jsx("div", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "75%",
    src: '/images/icons/resto.svg',
    alt: "undefined",
    title: "hotelerie",
    className: "jsx-3586893694" + " " + "services-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("h5", {
    className: "jsx-3586893694" + " " + "services-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Restauration"))), __jsx("div", {
    className: "jsx-3586893694" + " " + "row-services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "50%",
    src: '/images/icons/tourism.svg',
    alt: "undefined",
    title: "hotelerie",
    className: "jsx-3586893694" + " " + "services-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("h5", {
    className: "jsx-3586893694" + " " + "services-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Tourisme")), __jsx("div", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "75%",
    src: '/images/icons/culture.svg',
    alt: "undefined",
    title: "hotelerie",
    className: "jsx-3586893694" + " " + "services-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("h5", {
    className: "jsx-3586893694" + " " + "services-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "culture")))), __jsx("div", {
    className: "jsx-3586893694" + " " + "culture-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694" + " " + "div-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "D\xE9couvrez nos paysages"), __jsx("i", {
    style: {
      textAlign: "center",
      paddingBottom: '2rem'
    },
    className: "jsx-3586893694" + " " + "fas fa-asterisk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3586893694" + " " + "culture-text-image-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694" + " " + "culture-image-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("img", {
    width: "100%",
    height: "100%",
    src: '/images/paysage_vert.jpg',
    alt: "undefined",
    title: "paysage",
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3586893694" + " " + "culture-text-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3586893694" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "En Afrique,"), __jsx("h5", {
    className: "jsx-3586893694" + " " + "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/discover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Visitez"))))), __jsx("div", {
    className: "jsx-3586893694" + " " + "cuisine-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694" + " " + "div-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "D\xE9couvrez notre cuisine"), __jsx("i", {
    style: {
      textAlign: "center",
      paddingBottom: '2rem'
    },
    className: "jsx-3586893694" + " " + "fas fa-asterisk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3586893694" + " " + "cuisine-images-carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694" + " " + "cuisine-image-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImage"], {
    src: '/images/cuisine_photo.jpg',
    alt: "undefined",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3586893694" + " " + "cuisine-image-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImage"], {
    src: '/images/cooking-dishes.jpg',
    alt: "undefined",
    width: "100%",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3586893694" + " " + "cuisine-div-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3586893694" + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "En Afrique,"), __jsx("h5", {
    className: "jsx-3586893694" + " " + "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/discover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Visitez")))), __jsx("div", {
    className: "jsx-3586893694" + " " + "culture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694" + " " + "div-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "D\xE9couvrez notre culture"), __jsx("i", {
    style: {
      textAlign: "center",
      paddingBottom: '2rem'
    },
    className: "jsx-3586893694" + " " + "fas fa-asterisk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), __jsx("div", {
    style: {
      width: '100%',
      height: '80%',
      filter: 'drop-shadow(6px 6px 8px black)',
      WebkitFilter: 'drop-shadow(6px 6px 8px black)'
    },
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImage"], {
    alt: "undefined",
    src: '/images/three-women-wearing-black-clothe.jpg',
    width: "100%",
    height: "100%",
    style: {
      objectFit: 'contain'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), __jsx("div", {
    style: {
      textAlign: 'center',
      paddingTop: '2rem'
    },
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at vulputate est. Donec tempor felis at nibh eleifend malesuada. Nullam suscipit lobortis aliquam. Phasellus lobortis ante lorem, vitae scelerisque lacus tempus sed. Phasellus rutrum magna"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/discover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Parcourir")))), __jsx("section", {
    className: "jsx-3586893694" + " " + "bigscreen-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "D\xE9couvrez et vivez des experiences inoubliables")), __jsx("div", {
    className: "jsx-3586893694" + " " + "bigscreen-wrapper-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694" + " " + "bigscreen-left-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "hi"), __jsx("div", {
    className: "jsx-3586893694" + " " + "bigscreen-right-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694" + " " + "right-div-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3586893694" + " " + "right-div-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  })))), __jsx("section", {
    className: "jsx-3586893694" + " " + "bigscreen-cuisine-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Laissez vous emportez par la cuisine africaine")), __jsx("div", {
    className: "jsx-3586893694" + " " + "cuisine-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694" + " " + "plat-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "image")), __jsx("div", {
    className: "jsx-3586893694" + " " + "plat-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "image")), __jsx("div", {
    className: "jsx-3586893694" + " " + "plat-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "image")))), __jsx("section", {
    className: "jsx-3586893694" + " " + "bigscreen-culture-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "Apprenez encore plus sur notre culture")), __jsx("div", {
    className: "jsx-3586893694" + " " + "caroussel-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx(_components_Caroussel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }))), __jsx("section", {
    className: "jsx-3586893694" + " " + "bigscreen-services-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "Nos services")), __jsx("div", {
    className: "jsx-3586893694" + " " + "bigscreen-services-cards-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3586893694" + " " + "bigscreen-services-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("img", {
    src: "/images/icons/hotel.svg",
    alt: "undefined",
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Hotelerie")), __jsx("div", {
    className: "jsx-3586893694" + " " + "bigscreen-services-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx("img", {
    src: "/images/icons/resto.svg",
    alt: "undefined",
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Restauration")), __jsx("div", {
    className: "jsx-3586893694" + " " + "bigscreen-services-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx("img", {
    src: "/images/icons/tourism.svg",
    alt: "undefined",
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-3586893694",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Tourisme")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3586893694",
    __self: this
  }, ".presentation{display:block;text-align:center;position:relative;top:30%;-webkit-transform:translate(-50%,50%) color:white;-ms-transform:translate(-50%,50%) color:white;transform:translate(-50%,50%) color:white;z-index:1500;}.presentation span{padding:0;margin:0;color:rgba(45,45,45,1);text-shadow:0 2px 0 rgba(0,0,0,0.5);font-size:2.5rem;font-family:'sans-serif';font-weight:900;}.allOf:after{content:'All of';color:rgba(45,45,45,1);font-size:5rem;font-weight:900;}.explore-link{display:inline-block;border-style:solid;border-color:#fff;padding:2% 7% 2% 7%;margin-top:3vh;background-color:#020202;color :#fefcfc;border-radius:5%;font-weight:700;-webkit-letter-spacing:0.1em;-moz-letter-spacing:0.1em;-ms-letter-spacing:0.1em;letter-spacing:0.1em;}.index-header{display:block;width:100%;height:100vh;background-size:cover;background-position:center;position:relative;}.index-header::after{content:\"\";top:0;left:0;right:0;bottom:0;position:absolute;background-color:black;opacity:0.5;}.main-business{height:100%;display:block;padding:2%;}.cuisine-div{margin-top:20vh;}.cuisine-div-text{width:100%;height:100%;padding:1rem;float:left;display:block;border:3px solid #333333;border-radius:2% 6% 5% 4% / 1% 1% 2% 4%;font-size:1rem;line-height:1.5rem;white-space:pre-line;background:#ffffff;position:relative;text-align:center;}.cuisine-div-text::before{content:'';border:2px solid #353535;display:block;width:100%;height:100%;position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0) scale(1.015) rotate(0.5deg);-ms-transform:translate3d(-50%,-50%,0) scale(1.015) rotate(0.5deg);transform:translate3d(-50%,-50%,0) scale(1.015) rotate(0.5deg);border-radius:1% 1% 2% 4% / 2% 6% 5% 4%;}.cuisine-div-text>a{width:50%;display:inline-block;text-align:center;-webkit-text-decoration:none;text-decoration:none;border-style:solid;border-color:#000;padding:0.5vh;color:#ffffff;background-color:#333333;text-transform:uppercase;}.culture{width:100%;background-color:rgb(0,0,0,0.02);margin-top:6rem;margin-bottom:2rem;padding:1rem;}.culture a{display:block;width:50%;display:block;margin-top:1.5rem;text-align:center;-webkit-text-decoration:none;-webkit-text-decoration:none;text-decoration:none;border-style:solid;border-color:#000;padding:0.5vh;color:#ffffff;background-color:#333333;text-transform:uppercase;-webkit-transform:translate(50%);-ms-transform:translate(50%);transform:translate(50%);}.culture span{font-weight:bold;}.bigscreen-section{width:100%;height:60vh;font-size:16px;margin-bottom:2.7rem;}.bigscreen-section header{text-align:center;padding-bottom:1rem;}.bigscreen-section h1{font-size:2em;}.bigscreen-wrapper-div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:100%;height:90%;}.bigscreen-left-div{width:47%;background-image:url(/images/ville.jpg);background-size:cover;background-repeat:no-repeat;}.bigscreen-right-div{width:47%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.right-div-up{width:100%;height:47%;background-image:url(/images/ville.jpg);background-size:cover;background-repeat:no-repeat;}.right-div-down{width:100%;height:47%;background-image:url(/images/ville.jpg);background-size:cover;background-repeat:no-repeat;}.bigscreen-cuisine-section{width:100%;height:60vh;padding:1rem;font-size:16px;margin-bottom:2.7rem;}.bigscreen-cuisine-section header{text-align:center;padding-bottom:1.7rem;}.bigscreen-cuisine-section header h1{font-size:2em;}.cuisine-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:85%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.plat-card{height:100%;width:32%;background-color:#17141d;border-radius:10px;box-shadow:-1rem 0 3rem #000;-webkit-transition:0.4s ease-out;transition:0.4s ease-out;position:relative;left:0px;}.plat-card:not(:first-child){margin-left:-50px;}.plat-card:hover{-webkit-transform:translateY(-20px);-ms-transform:translateY(-20px);transform:translateY(-20px);-webkit-transition:0.4s ease-out;transition:0.4s ease-out;}.plat-card:hover~.plat-card{position:relative;left:50px;-webkit-transition:0.4s ease-out;transition:0.4s ease-out;}.bigscreen-culture-section{margin-bottom:3rem;}.bigscreen-culture-section header{text-align:center;padding-bottom:1.7rem;}.bigscreen-culture-section header h1{font-size:2em;}.bigscreen-culture-section:not(header){width:75%;margin-left:13%;}.bigscreen-services-section header{text-align:center;font-size:1.5em;padding-bottom:1.7rem;}.bigscreen-services-section{height:500px;font-size:16px;}.bigscreen-services-cards-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.bigscreen-services-card{height:300px;width:32%;background-color:#fff;border-style:solid;}.bigscreen-services-card img{height:50%;object-fit:contain;width:100%;}.bigscreen-services-card h3{text-align:center;padding-top:11%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd1B3QixBQU9zQixBQWFKLEFBV08sQUFVRyxBQWlCTixBQWFKLEFBWUUsQUFZSyxBQVFQLEFBa0JBLEFBb0JELEFBZUEsQUFXRyxBQW9CSyxBQU9SLEFBT08sQUFNSCxBQU1GLEFBYUgsQUFPQSxBQVFDLEFBUUEsQUFRRCxBQVNPLEFBTUgsQUFLRixBQVNFLEFBWUcsQUFJUSxBQUtWLEFBT0YsQUFNQyxBQU1OLEFBSUYsQUFNTSxBQVVILEFBS0EsQUFLQSxBQU9GLEFBS08sVUEzVkgsQUF5SFMsQUFxRm9CLEFBTzNCLEFBaUdELENBblFMLEFBZ0NNLEFBa0J1QixBQW1DSCxBQXNDckIsQUErQ0EsQUFRRCxBQVFBLEFBMEdJLENBeFJDLEFBMk1OLENBNERDLEFBVUwsQ0E3VmMsQUFtRFAsQUE4R0YsQUF1Q1osQUFpRUQsQUFxRFcsRUFwT1YsQ0FsRXlCLEFBeUNoQixBQW1IVCxDQWNxQixBQWtFdkIsQUErQkYsQUFTWSxBQWNWLEFBZWEsQUFnQ0UsQ0EzVlksQUFxUzdCLEVBalJ5QixDQXlNb0IsQUFRQSxBQXFDZCxDQXZMYixBQTJGSSxBQStESixBQW1HSyxDQTVSVCxBQWlHTSxDQS9HQSxDQXlCRixBQXNQQSxFQXRCUyxBQXVDM0IsRUFpQlksQ0E5TlUsQ0F0SUcsQUFrRVYsRUF1UU0sQUFnQ3JCLEVBeFFnQixBQWlCYyxBQXlJWCxDQTdLYixDQXZCdUIsQUE0R04sQUF5QkcsQUFPdEIsRUEzS2tCLEFBVUUsQUFpT3JCLEFBc0RBLENBdFBxQixBQWlTWCxDQXRWK0IsRUF1SXZCLENBME1uQixFQTVQc0IsQUFxTEMsRUFqSkEsQ0F0SVYsQUFrSFksQUF3R0EsQ0FpQ0YsSUFuT0gsQ0EySUUsQUF1S3hCLEVBdlVtQixBQStCVSxDQWtDQSxBQXdIekIsQ0FySThCLEFBOEZWLENBbERXLEFBZ0JQLENBdUhELEFBUUEsRUE0R3hCLEVBdEUrQixLQS9QNUIsQ0FrTTJCLEFBa0M5QixDQXpJK0IsQ0FnREMsQUF3Q1gsQUFnRVQsQUEwRUssSUF2VUcsQUFvQkMsQ0FtSE4sR0FoRmIsRUEySnNCLEFBVU0sQUFRQSxDQTBCVCxDQXhLMEIsQUF1TWxELENBbFBLLElBMkRtQixDQW9DcEIsQ0FySDhCLENBa0M1QixDQXREeUIsQUF5UUEsQ0FZSixHQS9LRixBQWlCRixDQXFGbkIsR0F2RHVCLEVBM0dyQixHQTZEMkUsSUFxSDdFLEFBUUEsTUEvTW9CLEFBbUdGLEVBdkhBLE1BcUZFLE9BaEVDLEdBcEJuQixBQXVIWSxLQWxDVSxFQXNHTSxBQTBJSixPQWhUUCxBQW1HTCxHQTRCTyxBQW9IRCxDQVpHLEFBd0IzQixNQTlMNkIsRUEwSEksRUF2RkosRUFuR0QsS0FtUGIsQ0FwSFMsUUFzSHJCLENBbkwwQixRQWtDQSxDQTRCVCxNQXBLQSxJQXVHUSxJQThEUixLQWxLZCxLQXNJRixJQWpDd0IsQUE4REcsa0JBN0QzQixPQThEMkIsVUFxRzVCLGFBbEVhLEFBeUllLENBN1N6QixDQWtJeUIsU0FtQ2YsUUFvQlosR0FqQkEscUJBMUZvRCx3Q0FFcEQsTUFtREEiLCJmaWxlIjoiQzpcXFVzZXJzXFxldGVrYVxcQWxsb2ZBZnJpY2FcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBDYXJvdXNzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJvdXNzZWwnXHJcblxyXG5pbXBvcnQge0xhenlMb2FkSW1hZ2V9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnXHJcblxyXG5pbXBvcnQge1xyXG4gIExpbmsgYXMgTGlua3Njcm9sbFxyXG5cclxufSBmcm9tICdyZWFjdC1zY3JvbGwnXHJcblxyXG5cclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgIDxOZXh0U2VvIFxyXG4gICAgICAgICAgdGl0bGU9XCJob21lIHBhZ2VcIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJwYWdlIGluZGV4IGR1IHNpdGVcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIFxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXgtcGFnZVwiPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRleC1oZWFkZXJcIiA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICAgICAgICAgPHNwYW4gYXJpYS1sYWJlbD0naGknIGNsYXNzTmFtZT1cImFsbE9mXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFmcmljYVwiID5BZnJpY2E8L2gxPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPExpbmtzY3JvbGwgdGFiSW5kZXg9ezB9IHRvPVwibWFpbi1idXNpbmVzc1wiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBvZmZzZXQ9ezUwfSBkdXJhdGlvbj17NTAwfT4gXHJcbiAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwiZXhwbG9yZS1saW5rXCIgPkV4cGxvcmV6PC9idXR0b24+IFxyXG4gICAgICAgICAgPC9MaW5rc2Nyb2xsPiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IG5hbWU9XCJtYWluLWJ1c1wiIGNsYXNzTmFtZT1cIm1haW4tYnVzaW5lc3NcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlc1wiPlxyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zZXJ2aWNlc1wiPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNlcnZpY2VzLWltYWdlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNjAlXCIgc3JjPXsnL2ltYWdlcy9pY29ucy9ob3RlbC5zdmcnfSBcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiaG90ZWxlcmllXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJzZXJ2aWNlcy1kZXNjcmlwdGlvblwiPkhvdGVsZXJpZTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2VydmljZXMtaW1hZ2VcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI3NSVcIiBzcmM9eycvaW1hZ2VzL2ljb25zL3Jlc3RvLnN2Zyd9IFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJob3RlbGVyaWVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInNlcnZpY2VzLWRlc2NyaXB0aW9uXCI+UmVzdGF1cmF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc2VydmljZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2VydmljZXMtaW1hZ2VcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MCVcIiBzcmM9eycvaW1hZ2VzL2ljb25zL3RvdXJpc20uc3ZnJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImhvdGVsZXJpZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic2VydmljZXMtZGVzY3JpcHRpb25cIj5Ub3VyaXNtZTwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic2VydmljZXMtaW1hZ2VcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI3NSVcIiBzcmM9eycvaW1hZ2VzL2ljb25zL2N1bHR1cmUuc3ZnJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImhvdGVsZXJpZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic2VydmljZXMtZGVzY3JpcHRpb25cIj5jdWx0dXJlPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1bHR1cmUtZGl2XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxoMT5Ew6ljb3V2cmV6IG5vcyBwYXlzYWdlczwvaDE+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxpIHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIscGFkZGluZ0JvdHRvbTonMnJlbSd9fSBjbGFzc05hbWU9XCJmYXMgZmEtYXN0ZXJpc2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VsdHVyZS10ZXh0LWltYWdlLWRpdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1bHR1cmUtaW1hZ2UtZGl2XCI+XHJcbiAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgc3JjPXsnL2ltYWdlcy9wYXlzYWdlX3ZlcnQuanBnJ30gYWx0PVwidW5kZWZpbmVkXCIgdGl0bGU9XCJwYXlzYWdlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1bHR1cmUtdGV4dC1kaXZcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiXCI+RW4gQWZyaXF1ZSw8L2gzPlxyXG5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTW9yYmkgYXQgdnVscHV0YXRlIGVzdC4gRG9uZWMgdGVtcG9yIGZlbGlzIGF0IG5pYmggZWxlaWZlbmQgbWFsZXN1YWRhLiBOdWxsYW0gc3VzY2lwaXQgbG9ib3J0aXMgYWxpcXVhbS4gUGhhc2VsbHVzIGxvYm9ydGlzIGFudGUgbG9yZW0sIHZpdGFlIHNjZWxlcmlzcXVlIGxhY3VzIHRlbXB1cyBzZWQuIFBoYXNlbGx1cyBydXRydW0gbWFnbmE8L2g1PlxyXG5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rpc2NvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlZpc2l0ZXo8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1aXNpbmUtZGl2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT5Ew6ljb3V2cmV6IG5vdHJlIGN1aXNpbmU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLHBhZGRpbmdCb3R0b206JzJyZW0nfX0gY2xhc3NOYW1lPVwiZmFzIGZhLWFzdGVyaXNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1aXNpbmUtaW1hZ2VzLWNhcm91c2VsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1aXNpbmUtaW1hZ2UtZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlIHNyYz17Jy9pbWFnZXMvY3Vpc2luZV9waG90by5qcGcnfSBhbHQ9XCJ1bmRlZmluZWRcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWlzaW5lLWltYWdlLWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZSAgc3JjPXsnL2ltYWdlcy9jb29raW5nLWRpc2hlcy5qcGcnfSBhbHQ9XCJ1bmRlZmluZWRcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vpc2luZS1kaXYtdGV4dFwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJcIj5FbiBBZnJpcXVlLDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBhdCB2dWxwdXRhdGUgZXN0LiBEb25lYyB0ZW1wb3IgZmVsaXMgYXQgbmliaCBlbGVpZmVuZCBtYWxlc3VhZGEuIE51bGxhbSBzdXNjaXBpdCBsb2JvcnRpcyBhbGlxdWFtLiBQaGFzZWxsdXMgbG9ib3J0aXMgYW50ZSBsb3JlbSwgdml0YWUgc2NlbGVyaXNxdWUgbGFjdXMgdGVtcHVzIHNlZC4gUGhhc2VsbHVzIHJ1dHJ1bSBtYWduYTwvaDU+XHJcblxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGlzY292ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+VmlzaXRlejwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VsdHVyZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgxPkTDqWNvdXZyZXogbm90cmUgY3VsdHVyZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLHBhZGRpbmdCb3R0b206JzJyZW0nfX0gY2xhc3NOYW1lPVwiZmFzIGZhLWFzdGVyaXNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonMTAwJScsaGVpZ2h0Oic4MCUnLGZpbHRlcjonZHJvcC1zaGFkb3coNnB4IDZweCA4cHggYmxhY2spJyxXZWJraXRGaWx0ZXI6J2Ryb3Atc2hhZG93KDZweCA2cHggOHB4IGJsYWNrKSd9fT5cclxuICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlIGFsdD1cInVuZGVmaW5lZFwiIHNyYz17Jy9pbWFnZXMvdGhyZWUtd29tZW4td2VhcmluZy1ibGFjay1jbG90aGUuanBnJ30gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHN0eWxlPXt7b2JqZWN0Rml0Oidjb250YWluJ319IC8+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJyxwYWRkaW5nVG9wOicycmVtJ319PlxyXG4gICAgICAgICAgICAgPHNwYW4+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTW9yYmkgYXQgdnVscHV0YXRlIGVzdC4gRG9uZWMgdGVtcG9yIGZlbGlzIGF0IG5pYmggZWxlaWZlbmQgbWFsZXN1YWRhLiBOdWxsYW0gc3VzY2lwaXQgbG9ib3J0aXMgYWxpcXVhbS4gUGhhc2VsbHVzIGxvYm9ydGlzIGFudGUgbG9yZW0sIHZpdGFlIHNjZWxlcmlzcXVlIGxhY3VzIHRlbXB1cyBzZWQuIFBoYXNlbGx1cyBydXRydW0gbWFnbmE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rpc2NvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlBhcmNvdXJpcjwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiaWdzY3JlZW4tc2VjdGlvblwiID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj48aDE+RMOpY291dnJleiBldCB2aXZleiBkZXMgZXhwZXJpZW5jZXMgaW5vdWJsaWFibGVzPC9oMT48L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWdzY3JlZW4td3JhcHBlci1kaXZcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnc2NyZWVuLWxlZnQtZGl2XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiYmlnc2NyZWVuLXJpZ2h0LWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1kaXYtdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtZGl2LWRvd25cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmlnc2NyZWVuLWN1aXNpbmUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj48aDE+TGFpc3NleiB2b3VzIGVtcG9ydGV6IHBhciBsYSBjdWlzaW5lIGFmcmljYWluZTwvaDE+PC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdWlzaW5lLXdyYXBwZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXQtY2FyZFwiPjxoMT5pbWFnZTwvaDE+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF0LWNhcmRcIj48aDE+aW1hZ2U8L2gxPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF0LWNhcmRcIj48aDE+aW1hZ2U8L2gxPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmlnc2NyZWVuLWN1bHR1cmUtc2VjdGlvblwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+PGgxPkFwcHJlbmV6IGVuY29yZSBwbHVzIHN1ciBub3RyZSBjdWx0dXJlPC9oMT48L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c3NlbC1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3Vzc2VsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiaWdzY3JlZW4tc2VydmljZXMtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj48aDE+Tm9zIHNlcnZpY2VzPC9oMT48L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZ3NjcmVlbi1zZXJ2aWNlcy1jYXJkcy13cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZ3NjcmVlbi1zZXJ2aWNlcy1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL2hvdGVsLnN2Z1wiIGFsdD1cInVuZGVmaW5lZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+SG90ZWxlcmllPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZ3NjcmVlbi1zZXJ2aWNlcy1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL3Jlc3RvLnN2Z1wiIGFsdD1cInVuZGVmaW5lZFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5SZXN0YXVyYXRpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZ3NjcmVlbi1zZXJ2aWNlcy1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL3RvdXJpc20uc3ZnXCIgYWx0PVwidW5kZWZpbmVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VG91cmlzbWU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgIDwvZGl2PlxyXG5cclxuICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgLnByZXNlbnRhdGlvbntcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDozMCU7XHJcbiAgICAgICBcclxuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsNTAlKVxyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIHotaW5kZXg6MTUwMDtcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcmVzZW50YXRpb24gc3BhbntcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICBjb2xvcjpyZ2JhKDQ1LDQ1LDQ1LDEpO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDJweCAwIHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICBcclxuICAgICAgIGZvbnQtc2l6ZToyLjVyZW07XHJcbiAgICAgICBmb250LWZhbWlseTonc2Fucy1zZXJpZic7XHJcbiAgICAgICBmb250LXdlaWdodDo5MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbGxPZjphZnRlcntcclxuICAgICAgICBjb250ZW50OidBbGwgb2YnO1xyXG4gICAgICAgY29sb3I6cmdiYSg0NSw0NSw0NSwxKTtcclxuICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgIGZvbnQtd2VpZ2h0OjkwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcblxyXG5cclxuICAgICAgLmV4cGxvcmUtbGlua3tcclxuICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gICAgICAgYm9yZGVyLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMiUgNyUgMiUgNyUgO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDN2aCA7IFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjAyMDIgO1xyXG4gICAgICAgIGNvbG9yIDogI2ZlZmNmYyA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgIC5pbmRleC1oZWFkZXJ7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgXHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZVxyXG4gIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5pbmRleC1oZWFkZXI6OmFmdGVye1xyXG4gICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgdG9wOjA7XHJcbiAgICAgICBsZWZ0OjA7XHJcbiAgICAgICByaWdodDowO1xyXG4gICAgICAgYm90dG9tOjA7XHJcbiAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgXHJcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgICAgb3BhY2l0eTowLjVcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1haW4tYnVzaW5lc3N7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICBwYWRkaW5nOjIlO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICBcclxuICAgICAgXHJcblxyXG4gICAgICAuY3Vpc2luZS1kaXZ7XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHZoO1xyXG4gICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgIFxyXG5cclxuICAgIC5jdWlzaW5lLWRpdi10ZXh0e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOjFyZW07XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgXHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMzMzMzMzM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyJSA2JSA1JSA0JSAvIDElIDElIDIlIDQlO1xyXG4gICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmN1aXNpbmUtZGl2LXRleHQ6OmJlZm9yZXtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzUzNTM1O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSBzY2FsZSgxLjAxNSkgcm90YXRlKDAuNWRlZyk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxJSAxJSAyJSA0JSAvIDIlIDYlIDUlIDQlO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgICAgXHJcbiAgICBcclxuXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmN1aXNpbmUtZGl2LXRleHQgPiBhIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgICBwYWRkaW5nOiAwLjV2aDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jdWx0dXJle1xyXG4gICAgIFxyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLDAsMCwwLjAyKTtcclxuICAgICAgbWFyZ2luLXRvcDo2cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjJyZW07XHJcbiAgICAgIHBhZGRpbmc6MXJlbTtcclxuICAgICBcclxuICAgIFxyXG4gICAgfSBcclxuICBcclxuXHJcbiAgICAuY3VsdHVyZSBhe1xyXG4gICAgICBkaXNwbGF5OmJsb2NrO1xyXG5cclxuICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tdG9wOjEuNXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXZoO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlKTtcclxuICAgIH1cclxuICAgXHJcblxyXG4gICAgLmN1bHR1cmUgc3BhbntcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICAgXHJcbiAgXHJcbiAgICAuYmlnc2NyZWVuLXNlY3Rpb257XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDo2MHZoO1xyXG4gICAgICBmb250LXNpemU6IDE2cHggO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjIuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYmlnc2NyZWVuLXNlY3Rpb24gIGhlYWRlcntcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmJpZ3NjcmVlbi1zZWN0aW9uICBoMXtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB9XHJcblxyXG4gIFxyXG5cclxuICAgIC5iaWdzY3JlZW4td3JhcHBlci1kaXZ7XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBoZWlnaHQ6OTAlO1xyXG4gICAgICBcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG5cclxuICAgIC5iaWdzY3JlZW4tbGVmdC1kaXZ7XHJcbiAgICAgIHdpZHRoOjQ3JTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoL2ltYWdlcy92aWxsZS5qcGcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgIH1cclxuXHJcbiAgICAuYmlnc2NyZWVuLXJpZ2h0LWRpdntcclxuICAgICAgd2lkdGg6NDclO1xyXG4gICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5OyAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucmlnaHQtZGl2LXVwe1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQ3JTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoL2ltYWdlcy92aWxsZS5qcGcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQtZGl2LWRvd257XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDo0NyU7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKC9pbWFnZXMvdmlsbGUuanBnKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICB9XHJcblxyXG4gICAuYmlnc2NyZWVuLWN1aXNpbmUtc2VjdGlvbntcclxuICAgICB3aWR0aDoxMDAlO1xyXG4gICAgIGhlaWdodDo2MHZoO1xyXG4gICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbToyLjdyZW07XHJcbiAgICAgXHJcbiAgIH1cclxuXHJcbiAgIC5iaWdzY3JlZW4tY3Vpc2luZS1zZWN0aW9uIGhlYWRlcntcclxuICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICBwYWRkaW5nLWJvdHRvbToxLjdyZW1cclxuICAgfVxyXG5cclxuXHJcbiAgIC5iaWdzY3JlZW4tY3Vpc2luZS1zZWN0aW9uIGhlYWRlciBoMXtcclxuICAgICBmb250LXNpemU6IDJlbTtcclxuICAgfVxyXG5cclxuXHJcbiAgIC5jdWlzaW5lLXdyYXBwZXJ7XHJcbiAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgIGhlaWdodDo4NSU7XHJcbiAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgIFxyXG4gICB9XHJcblxyXG4gICAucGxhdC1jYXJke1xyXG5cclxuICAgICAgaGVpZ2h0OiAxMDAlIDtcclxuICAgICAgd2lkdGg6MzIlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNDFkO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3gtc2hhZG93Oi0xcmVtIDAgM3JlbSAjMDAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuXHJcbiAgIH1cclxuXHJcbiAgIC5wbGF0LWNhcmQ6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG59XHJcblxyXG4ucGxhdC1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5wbGF0LWNhcmQ6aG92ZXIgfiAucGxhdC1jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5cclxuLmJpZ3NjcmVlbi1jdWx0dXJlLXNlY3Rpb257XHJcbm1hcmdpbi1ib3R0b206M3JlbTtcclxufVxyXG5cclxuXHJcbi5iaWdzY3JlZW4tY3VsdHVyZS1zZWN0aW9uIGhlYWRlcntcclxuXHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206MS43cmVtXHJcbiAgXHJcbn1cclxuXHJcbi5iaWdzY3JlZW4tY3VsdHVyZS1zZWN0aW9uIGhlYWRlciBoMXtcclxuXHJcbmZvbnQtc2l6ZToyZW1cclxufVxyXG5cclxuXHJcbi5iaWdzY3JlZW4tY3VsdHVyZS1zZWN0aW9uOm5vdChoZWFkZXIpe1xyXG4gIHdpZHRoOjc1JTtcclxuICBtYXJnaW4tbGVmdDoxMyVcclxufVxyXG5cclxuXHJcbi5iaWdzY3JlZW4tc2VydmljZXMtc2VjdGlvbiBoZWFkZXJ7XHJcbiAgXHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5mb250LXNpemU6MS41ZW07XHJcbnBhZGRpbmctYm90dG9tOjEuN3JlbTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5iaWdzY3JlZW4tc2VydmljZXMtc2VjdGlvbntcclxuICBoZWlnaHQ6NTAwcHg7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbn1cclxuXHJcbi5iaWdzY3JlZW4tc2VydmljZXMtY2FyZHMtd3JhcHBlcntcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHlcclxufVxyXG5cclxuLmJpZ3NjcmVlbi1zZXJ2aWNlcy1jYXJke1xyXG4gIGhlaWdodDozMDBweDtcclxuICB3aWR0aDozMiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gIGJvcmRlci1zdHlsZTpzb2xpZFxyXG4gIFxyXG59XHJcblxyXG4uYmlnc2NyZWVuLXNlcnZpY2VzLWNhcmQgaW1ne1xyXG4gIGhlaWdodDo1MCU7XHJcbiAgb2JqZWN0LWZpdDpjb250YWluO1xyXG4gIHdpZHRoOjEwMCVcclxufVxyXG4gICAgXHJcbi5iaWdzY3JlZW4tc2VydmljZXMtY2FyZCBoM3tcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDoxMSU7XHJcbn1cclxuXHJcblxyXG4gXHJcblxyXG4gICAgIGB9XHJcblxyXG4gICAgIDwvc3R5bGU+XHJcbiAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\eteka\\\\AllofAfrica\\\\pages\\\\index.js */"));
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eteka\AllofAfrica\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

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

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map