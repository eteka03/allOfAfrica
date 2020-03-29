webpackHotUpdate("static\\development\\pages\\discover.js",{

/***/ "./components/Cards.js":
/*!*****************************!*\
  !*** ./components/Cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "C:\\Users\\eteka\\AllofAfrica\\components\\Cards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref, props) {
  var onClick = _ref.onClick,
      href = _ref.href;
  var image = props.image,
      body = props.body,
      name = props.name;
  console.log(image);
  return __jsx("a", {
    href: href,
    onClick: onClick,
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
    top: true,
    width: "100%",
    src: "../images/".concat(image),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, body))));
}));

/***/ }),

/***/ "./pages/discover.js":
/*!***************************!*\
  !*** ./pages/discover.js ***!
  \***************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Image */ "./components/Image.js");
/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Cards */ "./components/Cards.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\eteka\\AllofAfrica\\pages\\discover.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var categories = [{
  id: 0,
  name: 'Tous',
  titrediv: 'Hotelerie restauration'
}, {
  id: 1,
  name: 'Hotelerie',
  titrediv: 'Top Hotelerie'
}, {
  id: 2,
  name: 'restaurations',
  titrediv: 'Top restaurations'
}];
var responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {
      max: 4000,
      min: 3000
    },
    items: 5
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 2
  }
};

var Discover = function Discover(_ref) {
  var countries = _ref.countries;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Tous'),
      catVal = _useState[0],
      setCatVal = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var handleChange = function handleChange(e) {
    setCatVal(e.target.value);
  };

  var handleRoute = function handleRoute(h) {
    router.push("/card/[id]?Id=".concat(h.id, "&dataId=").concat(h.name), "/card/[id]?Id=".concat(h.id, "&dataId=").concat(h.name));
  };

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    style: {
      padding: 0,
      maxWidth: '100%',
      margin: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-1611409545" + " " + "discover-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_components_Image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    image: {
      width: '100%',
      height: '100%',
      alt: 'pagne img',
      src: '/images/pagne.jpg'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), __jsx("section", {
    className: "jsx-1611409545" + " " + "filtre-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1611409545" + " " + "filter-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1611409545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Filtre :"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    className: "form-discover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    "for": "exampleSelect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Pays"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "select",
    name: "select",
    id: "exampleSelect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("option", {
    className: "jsx-1611409545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "1"), __jsx("option", {
    className: "jsx-1611409545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "2"), __jsx("option", {
    className: "jsx-1611409545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "3"), __jsx("option", {
    className: "jsx-1611409545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "4"), __jsx("option", {
    className: "jsx-1611409545",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "5"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    className: "form-discover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    "for": "exampleSelect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Cat\xE9gorie"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    onChange: function onChange(e) {
      return handleChange(e);
    },
    type: "select",
    name: "select",
    id: "exampleSelect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, categories.map(function (cat) {
    return __jsx("option", {
      key: cat.id,
      className: "jsx-1611409545",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, cat.name);
  }))))), __jsx("section", {
    className: "jsx-1611409545" + " " + "categories-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, catVal === 'Tous' ? categories.find(function (cat) {
    return cat.name === 'Tous';
  }).titrediv.split(" ").map(function (val) {
    return __jsx("div", {
      key: val,
      className: "jsx-1611409545",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1611409545",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, val), val === "Hotelerie" ? __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {
      responsive: responsive,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, countries.map(function (c) {
      return c.hotels.map(function (h) {
        return __jsx("div", {
          key: h.name,
          className: "jsx-1611409545",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/card/[id]",
          as: "/card/".concat(h.name),
          passHref: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, __jsx(_components_Cards__WEBPACK_IMPORTED_MODULE_5__["default"], {
          name: h.name,
          image: h.image,
          body: h.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        })));
      });
    })) : __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {
      responsive: responsive,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, " ", countries.map(function (c) {
      return c.restaurants.map(function (h) {
        return __jsx("div", {
          key: h.name,
          className: "jsx-1611409545",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/card/[id]",
          as: "/card/".concat(h.name),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, __jsx("h1", {
          className: "jsx-1611409545",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }, h.name)));
      });
    })));
  }) : categories.filter(function (cat) {
    return cat.name === catVal;
  }).map(function (cat) {
    return __jsx("div", {
      key: cat.id,
      className: "jsx-1611409545",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1611409545",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, cat.name));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1611409545",
    __self: this
  }, ".discover.jsx-1611409545{padding:0;max-width:100%;width:100%;}.discover-header.jsx-1611409545{height:25vh;}.filter-div.jsx-1611409545{padding:2rem;}.filter-div.jsx-1611409545::after{content:\"\";clear:both;display:table;}.categories-section.jsx-1611409545{width:100vw;padding:1rem;}.react-multi-carousel-list.jsx-1611409545{width:100vw;}@media only screen and (min-width:600px){.form-discover.jsx-1611409545{width:45%;float:left;margin-left:1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxwYWdlc1xcZGlzY292ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0lnQixBQUlrQixBQU1FLEFBSUEsQUFJQSxBQU1BLEFBTUEsQUFLRyxVQTlCQSxBQStCQSxDQWpCSCxDQVJmLEFBY2lCLEFBTWpCLENBaEJBLFFBc0J3QixDQWpCTixHQWRKLEFBcUJkLFdBcEJBLEFBY0UsQ0FpQkUiLCJmaWxlIjoiQzpcXFVzZXJzXFxldGVrYVxcQWxsb2ZBZnJpY2FcXHBhZ2VzXFxkaXNjb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2UnXHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZHMnXHJcbmltcG9ydFxyXG57XHJcbkNvbnRhaW5lcixcclxuUm93LFxyXG5Db2wsXHJcbkZvcm0sXHJcbkZvcm1Hcm91cCxcclxuTGFiZWwsXHJcbklucHV0LFxyXG5cclxuXHJcbn1mcm9tICdyZWFjdHN0cmFwJ1xyXG5cclxuXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcclxuaW1wb3J0IFwicmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3NcIjtcclxuXHJcblxyXG5jb25zdCBjYXRlZ29yaWVzID0gIFtcclxuICAgIHtcclxuICAgICAgICBpZDowLFxyXG4gICAgICAgIG5hbWU6J1RvdXMnLFxyXG4gICAgICAgIHRpdHJlZGl2OidIb3RlbGVyaWUgcmVzdGF1cmF0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5hbWU6J0hvdGVsZXJpZScsXHJcbiAgICAgICAgdGl0cmVkaXY6J1RvcCBIb3RlbGVyaWUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjIsXHJcbiAgICAgICAgbmFtZToncmVzdGF1cmF0aW9ucycsXHJcbiAgICAgICAgdGl0cmVkaXY6J1RvcCByZXN0YXVyYXRpb25zJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICAgIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XHJcbiAgICAgIC8vIHRoZSBuYW1pbmcgY2FuIGJlIGFueSwgZGVwZW5kcyBvbiB5b3UuXHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcclxuICAgICAgaXRlbXM6IDUsXHJcbiAgICB9LFxyXG4gICAgZGVza3RvcDoge1xyXG4gICAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXHJcbiAgICAgIGl0ZW1zOiAzLFxyXG4gICAgfSxcclxuICAgIHRhYmxldDoge1xyXG4gICAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA0NjQgfSxcclxuICAgICAgaXRlbXM6IDIsXHJcbiAgICB9LFxyXG4gICAgbW9iaWxlOiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxyXG4gICAgICBpdGVtczogMixcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbmNvbnN0IERpc2NvdmVyID0gKHtjb3VudHJpZXN9KSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IFtjYXRWYWwsc2V0Q2F0VmFsXSA9IHVzZVN0YXRlKCdUb3VzJylcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcblxyXG4gICAgICAgIHNldENhdFZhbChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUm91dGUgPSBoID0+IHtcclxuICAgXHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9jYXJkL1tpZF0/SWQ9JHtoLmlkfSZkYXRhSWQ9JHtoLm5hbWV9YCxgL2NhcmQvW2lkXT9JZD0ke2guaWR9JmRhdGFJZD0ke2gubmFtZX1gKVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb250YWluZXIgc3R5bGU9e3twYWRkaW5nOiAwLG1heFdpZHRoOicxMDAlJyAsIG1hcmdpbjogMH19PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZGlzY292ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e3t3aWR0aDonMTAwJScsaGVpZ2h0OicxMDAlJyxhbHQ6J3BhZ25lIGltZycsc3JjOicvaW1hZ2VzL3BhZ25lLmpwZyd9fSAvPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZpbHRyZS1zZWN0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1kaXZcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5GaWx0cmUgOjwvaDM+XHJcbiAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJmb3JtLWRpc2NvdmVyXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJleGFtcGxlU2VsZWN0XCI+UGF5czwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwic2VsZWN0XCIgbmFtZT1cInNlbGVjdFwiIGlkPVwiZXhhbXBsZVNlbGVjdFwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgIDwvRm9ybUdyb3VwPlxyXG4gXHJcbiAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwiZm9ybS1kaXNjb3ZlclwiPlxyXG4gICAgICAgIDxMYWJlbCBmb3I9XCJleGFtcGxlU2VsZWN0XCI+Q2F0w6lnb3JpZTwvTGFiZWw+XHJcbiAgICAgICAgPElucHV0IG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUNoYW5nZShlKX0gdHlwZT1cInNlbGVjdFwiIG5hbWU9XCJzZWxlY3RcIiBpZD1cImV4YW1wbGVTZWxlY3RcIj5cclxuICAgIHtjYXRlZ29yaWVzLm1hcChjYXQgPT4gPG9wdGlvbiBrZXk9e2NhdC5pZH0+e2NhdC5uYW1lfTwvb3B0aW9uPil9XHJcbiAgICAgICAgPC9JbnB1dD5cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzLXNlY3Rpb25cIj5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0VmFsID09PSAnVG91cycgPyBjYXRlZ29yaWVzLmZpbmQoY2F0ID0+IGNhdC5uYW1lID09PSAnVG91cycgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aXRyZWRpdi5zcGxpdChcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICAubWFwKHZhbCA9PiA8ZGl2IGtleT17dmFsfT48aDE+e3ZhbH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICB2YWwgPT09IFwiSG90ZWxlcmllXCI/PENhcm91c2VsIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9Pntjb3VudHJpZXMubWFwKGM9PmMuaG90ZWxzLm1hcChoPT48ZGl2IGtleT17aC5uYW1lfT48TGluayBocmVmPXtgL2NhcmQvW2lkXWB9IGFzPXtgL2NhcmQvJHtoLm5hbWV9YH0gcGFzc0hyZWY+PENhcmQgbmFtZT17aC5uYW1lfSBpbWFnZT17aC5pbWFnZX0gYm9keT17aC5uYW1lfSAvPjwvTGluaz48L2Rpdj4pKX08L0Nhcm91c2VsPjpcclxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9PiB7ICBjb3VudHJpZXMubWFwKGM9PmMucmVzdGF1cmFudHMubWFwKGg9PjxkaXYga2V5PXtoLm5hbWV9PjxMaW5rIGhyZWY9e2AvY2FyZC9baWRdYH0gYXM9e2AvY2FyZC8ke2gubmFtZX1gfT48aDE+e2gubmFtZX08L2gxPjwvTGluaz48L2Rpdj4pKX08L0Nhcm91c2VsPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLmZpbHRlcihjYXQgPT4gIGNhdC5uYW1lID09PSBjYXRWYWwpLm1hcChjYXQgPT4gPGRpdiBrZXk9e2NhdC5pZH0+PGgxPntjYXQubmFtZX08L2gxPjwvZGl2PilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgXHJcbiAgICAuZGlzY292ZXJ7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpc2NvdmVyLWhlYWRlcntcclxuICAgICAgICBoZWlnaHQ6MjV2aDtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLWRpdntcclxuICAgICAgIHBhZGRpbmc6MnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLWRpdjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcmllcy1zZWN0aW9ue1xyXG4gICAgICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1saXN0IHtcclxuICAgICAgICB3aWR0aDoxMDB2dztcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjAwcHgpe1xyXG4gICAgICAgIC5mb3JtLWRpc2NvdmVye1xyXG4gICAgICAgICAgICB3aWR0aDo0NSUgO1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XHJcbiAgICBjb25zdCByZXMgPSAgYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYWxsL2Rpc2NvdmVyJylcclxuICAgIFxyXG4gXHJcbiAgICBjb25zdCBjb3VudHJpZXMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgXHJcblxyXG4gICBcclxuXHJcbiAgICByZXR1cm4ge3Byb3BzIDoge2NvdW50cmllc319XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNjb3ZlciJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\eteka\\\\AllofAfrica\\\\pages\\\\discover.js */"));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Discover);

/***/ })

})
//# sourceMappingURL=discover.js.f2d3cc4a09f0a3ad2e70.hot-update.js.map