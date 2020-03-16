(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Ceteka%5CAllofAfrica%5Cpages%5Cindex.js!./":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Ceteka%5CAllofAfrica%5Cpages%5Cindex.js ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_82519ec661270f7f484f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_82519ec661270f7f484f */ "dll-reference dll_82519ec661270f7f484f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ 5:
/*!**********************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Ceteka%5CAllofAfrica%5Cpages%5Cindex.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Ceteka%5CAllofAfrica%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Ceteka%5CAllofAfrica%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_82519ec661270f7f484f":
/*!*******************************************!*\
  !*** external "dll_82519ec661270f7f484f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_82519ec661270f7f484f;

/***/ })

},[[5,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map