webpackHotUpdate("static\\development\\pages\\discover.js",{

/***/ "./components/Cards.js":
/*!*****************************!*\
  !*** ./components/Cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cards; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "C:\\Users\\eteka\\AllofAfrica\\components\\Cards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Cards(props) {
  var image = props.image,
      body = props.body,
      name = props.name;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
    top: true,
    width: "100%",
    src: __webpack_require__("./public/images sync recursive ^\\.\\/.*$")("./".concat(image)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, body)));
}

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
  }, ".discover.jsx-1611409545{padding:0;max-width:100%;width:100%;}.discover-header.jsx-1611409545{height:25vh;}.filter-div.jsx-1611409545{padding:2rem;}.filter-div.jsx-1611409545::after{content:\"\";clear:both;display:table;}.categories-section.jsx-1611409545{width:100vw;padding:1rem;}.react-multi-carousel-list.jsx-1611409545{width:100vw;}@media only screen and (min-width:600px){.form-discover.jsx-1611409545{width:45%;float:left;margin-left:1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxwYWdlc1xcZGlzY292ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0lnQixBQUlrQixBQU1FLEFBSUEsQUFJQSxBQU1BLEFBTUEsQUFLRyxVQTlCQSxBQStCQSxDQWpCSCxDQVJmLEFBY2lCLEFBTWpCLENBaEJBLFFBc0J3QixDQWpCTixHQWRKLEFBcUJkLFdBcEJBLEFBY0UsQ0FpQkUiLCJmaWxlIjoiQzpcXFVzZXJzXFxldGVrYVxcQWxsb2ZBZnJpY2FcXHBhZ2VzXFxkaXNjb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2UnXHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZHMnXHJcbmltcG9ydFxyXG57XHJcbkNvbnRhaW5lcixcclxuUm93LFxyXG5Db2wsXHJcbkZvcm0sXHJcbkZvcm1Hcm91cCxcclxuTGFiZWwsXHJcbklucHV0LFxyXG5cclxuXHJcbn1mcm9tICdyZWFjdHN0cmFwJ1xyXG5cclxuXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcclxuaW1wb3J0IFwicmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3NcIjtcclxuXHJcblxyXG5jb25zdCBjYXRlZ29yaWVzID0gIFtcclxuICAgIHtcclxuICAgICAgICBpZDowLFxyXG4gICAgICAgIG5hbWU6J1RvdXMnLFxyXG4gICAgICAgIHRpdHJlZGl2OidIb3RlbGVyaWUgcmVzdGF1cmF0aW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5hbWU6J0hvdGVsZXJpZScsXHJcbiAgICAgICAgdGl0cmVkaXY6J1RvcCBIb3RlbGVyaWUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjIsXHJcbiAgICAgICAgbmFtZToncmVzdGF1cmF0aW9ucycsXHJcbiAgICAgICAgdGl0cmVkaXY6J1RvcCByZXN0YXVyYXRpb25zJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICAgIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XHJcbiAgICAgIC8vIHRoZSBuYW1pbmcgY2FuIGJlIGFueSwgZGVwZW5kcyBvbiB5b3UuXHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcclxuICAgICAgaXRlbXM6IDUsXHJcbiAgICB9LFxyXG4gICAgZGVza3RvcDoge1xyXG4gICAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXHJcbiAgICAgIGl0ZW1zOiAzLFxyXG4gICAgfSxcclxuICAgIHRhYmxldDoge1xyXG4gICAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA0NjQgfSxcclxuICAgICAgaXRlbXM6IDIsXHJcbiAgICB9LFxyXG4gICAgbW9iaWxlOiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxyXG4gICAgICBpdGVtczogMixcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbmNvbnN0IERpc2NvdmVyID0gKHtjb3VudHJpZXN9KSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IFtjYXRWYWwsc2V0Q2F0VmFsXSA9IHVzZVN0YXRlKCdUb3VzJylcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcblxyXG4gICAgICAgIHNldENhdFZhbChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUm91dGUgPSBoID0+IHtcclxuICAgXHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9jYXJkL1tpZF0/SWQ9JHtoLmlkfSZkYXRhSWQ9JHtoLm5hbWV9YCxgL2NhcmQvW2lkXT9JZD0ke2guaWR9JmRhdGFJZD0ke2gubmFtZX1gKVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDb250YWluZXIgc3R5bGU9e3twYWRkaW5nOiAwLG1heFdpZHRoOicxMDAlJyAsIG1hcmdpbjogMH19PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZGlzY292ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e3t3aWR0aDonMTAwJScsaGVpZ2h0OicxMDAlJyxhbHQ6J3BhZ25lIGltZycsc3JjOicvaW1hZ2VzL3BhZ25lLmpwZyd9fSAvPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZpbHRyZS1zZWN0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1kaXZcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5GaWx0cmUgOjwvaDM+XHJcbiAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJmb3JtLWRpc2NvdmVyXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJleGFtcGxlU2VsZWN0XCI+UGF5czwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwic2VsZWN0XCIgbmFtZT1cInNlbGVjdFwiIGlkPVwiZXhhbXBsZVNlbGVjdFwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgIDwvRm9ybUdyb3VwPlxyXG4gXHJcbiAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwiZm9ybS1kaXNjb3ZlclwiPlxyXG4gICAgICAgIDxMYWJlbCBmb3I9XCJleGFtcGxlU2VsZWN0XCI+Q2F0w6lnb3JpZTwvTGFiZWw+XHJcbiAgICAgICAgPElucHV0IG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUNoYW5nZShlKX0gdHlwZT1cInNlbGVjdFwiIG5hbWU9XCJzZWxlY3RcIiBpZD1cImV4YW1wbGVTZWxlY3RcIj5cclxuICAgIHtjYXRlZ29yaWVzLm1hcChjYXQgPT4gPG9wdGlvbiBrZXk9e2NhdC5pZH0+e2NhdC5uYW1lfTwvb3B0aW9uPil9XHJcbiAgICAgICAgPC9JbnB1dD5cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzLXNlY3Rpb25cIj5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0VmFsID09PSAnVG91cycgPyBjYXRlZ29yaWVzLmZpbmQoY2F0ID0+IGNhdC5uYW1lID09PSAnVG91cycgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aXRyZWRpdi5zcGxpdChcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICAubWFwKHZhbCA9PiA8ZGl2IGtleT17dmFsfT48aDE+e3ZhbH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICB2YWwgPT09IFwiSG90ZWxlcmllXCI/PENhcm91c2VsIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9Pntjb3VudHJpZXMubWFwKGM9PmMuaG90ZWxzLm1hcChoPT48ZGl2IGtleT17aC5uYW1lfT48TGluayBocmVmPXtgL2NhcmQvW2lkXWB9IGFzPXtgL2NhcmQvJHtoLm5hbWV9YH0+PENhcmQgbmFtZT17aC5uYW1lfSBpbWFnZT17aC5pbWFnZX0gYm9keT17aC5uYW1lfSAvPjwvTGluaz48L2Rpdj4pKX08L0Nhcm91c2VsPjpcclxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9PiB7ICBjb3VudHJpZXMubWFwKGM9PmMucmVzdGF1cmFudHMubWFwKGg9PjxkaXYga2V5PXtoLm5hbWV9PjxMaW5rIGhyZWY9e2AvY2FyZC9baWRdYH0gYXM9e2AvY2FyZC8ke2gubmFtZX1gfT48aDE+e2gubmFtZX08L2gxPjwvTGluaz48L2Rpdj4pKX08L0Nhcm91c2VsPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLmZpbHRlcihjYXQgPT4gIGNhdC5uYW1lID09PSBjYXRWYWwpLm1hcChjYXQgPT4gPGRpdiBrZXk9e2NhdC5pZH0+PGgxPntjYXQubmFtZX08L2gxPjwvZGl2PilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgXHJcbiAgICAuZGlzY292ZXJ7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpc2NvdmVyLWhlYWRlcntcclxuICAgICAgICBoZWlnaHQ6MjV2aDtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLWRpdntcclxuICAgICAgIHBhZGRpbmc6MnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLWRpdjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcmllcy1zZWN0aW9ue1xyXG4gICAgICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1saXN0IHtcclxuICAgICAgICB3aWR0aDoxMDB2dztcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjAwcHgpe1xyXG4gICAgICAgIC5mb3JtLWRpc2NvdmVye1xyXG4gICAgICAgICAgICB3aWR0aDo0NSUgO1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XHJcbiAgICBjb25zdCByZXMgPSAgYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYWxsL2Rpc2NvdmVyJylcclxuICAgIFxyXG4gXHJcbiAgICBjb25zdCBjb3VudHJpZXMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgXHJcblxyXG4gICBcclxuXHJcbiAgICByZXR1cm4ge3Byb3BzIDoge2NvdW50cmllc319XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNjb3ZlciJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\eteka\\\\AllofAfrica\\\\pages\\\\discover.js */"));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Discover);

/***/ }),

/***/ "./public/images sync recursive ^\\.\\/.*$":
/*!*************************************!*\
  !*** ./public/images sync ^\.\/.*$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./afric.jpg": "./public/images/afric.jpg",
	"./cooking-dishes.jpg": "./public/images/cooking-dishes.jpg",
	"./cuisine_photo.jpg": "./public/images/cuisine_photo.jpg",
	"./icons/facebook.svg": "./public/images/icons/facebook.svg",
	"./icons/hotel.svg": "./public/images/icons/hotel.svg",
	"./icons/instagram.svg": "./public/images/icons/instagram.svg",
	"./pagne.jpg": "./public/images/pagne.jpg",
	"./paysage_vert.jpg": "./public/images/paysage_vert.jpg",
	"./three-women-wearing-black-clothe.jpg": "./public/images/three-women-wearing-black-clothe.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./public/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./public/images/afric.jpg":
/*!*********************************!*\
  !*** ./public/images/afric.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiYWZyaWMuanBnIjs=");

/***/ }),

/***/ "./public/images/cooking-dishes.jpg":
/*!******************************************!*\
  !*** ./public/images/cooking-dishes.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiY29va2luZy1kaXNoZXMuanBnIjs=");

/***/ }),

/***/ "./public/images/cuisine_photo.jpg":
/*!*****************************************!*\
  !*** ./public/images/cuisine_photo.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiY3Vpc2luZV9waG90by5qcGciOw==");

/***/ }),

/***/ "./public/images/icons/facebook.svg":
/*!******************************************!*\
  !*** ./public/images/icons/facebook.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,ZXhwb3J0IGRlZmF1bHQgImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZzBLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREU1TGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnMEtQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJR2xrUFNKTVlYbGxjbDh4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSU5DZ2tnZG1sbGQwSnZlRDBpTUNBd0lEVXdPQ0ExTURnaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURVd09DQTFNRGc3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5Danh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU15TXpWQ09VVTdJaUJrUFNKTk5UQTBMRE0zT0M0NFl6QXNOamd1T0MwMU5pNDBMREV5TlM0eUxURXlOUzR5TERFeU5TNHlTREV5T1M0eVF6WXdMalFzTlRBMExEUXNORFEzTGpZc05Dd3pOemd1T0ZZeE1qa3VNZzBLQ1VNMExEWXdMalFzTmpBdU5DdzBMREV5T1M0eUxEUm9NalE1TGpaRE5EUTNMallzTkN3MU1EUXNOakF1TkN3MU1EUXNNVEk1TGpKV016YzRMamg2SWk4K0RRbzhjR0YwYUNCemRIbHNaVDBpWm1sc2JEb2pSa1pHUmtaR095SWdaRDBpVFRJeE5DNDBMRFF3T0M0NFNESTNORll5TlRSb05EY3VNbXcxTGpZdE5qTXVOa2d5TnpoMkxUSTBZekF0TVRJc055NDJMVEUyTERFekxqSXRNVFpvTXpRdU5IWXROVEpvTFRRNExqZ05DZ2xqTFRVekxqWXNNQzAyTmk0MExEUXdMVFkyTGpRc05qVXVNbll5Tnk0eWFDMHlOeTQyVmpJMU5HZ3pNUzQyVERJeE5DNDBMRFF3T0M0NFRESXhOQzQwTERRd09DNDRlaUl2UGcwS1BIQmhkR2dnWkQwaVRUSTNOQ3cwTVRJdU9HZ3ROVGt1Tm1NdE1pNDBMREF0TkMweExqWXROQzAwVmpJMU9HZ3RNamN1Tm1NdE1pNDBMREF0TkMweExqWXROQzAwZGkwMk15NDJZekF0TWk0MExERXVOaTAwTERRdE5HZ3lNeTQyZGkweU15NHlEUW9KWXpBdE16TXVNaXd4T0M0MExUWTVMaklzTnpBdU5DMDJPUzR5YURRNExqaGpNaTQwTERBc05Dd3hMallzTkN3MGRqVXlMamhqTUN3eUxqUXRNUzQyTERRdE5DdzBhQzB6TkM0MFl5MHlMREF0T1M0eUxEQXVPQzA1TGpJc01USjJNakJvTkRRdU9HTXhMaklzTUN3eUxEQXVOQ3d5TGpnc01TNHlEUW9KY3pFdU1pd3lMREV1TWl3ekxqSnNMVFV1Tml3Mk15NDJZekFzTWkweUxETXVOaTAwTERNdU5rZ3lOemhXTXpBMll6QXNNaTQwTFRFdU5pdzBMVFFzTkhNdE5DMHhMall0TkMwMGRpMDFNbU13TFRJdU5Dd3hMall0TkN3MExUUm9ORE11Tm13MExqZ3ROVFV1TmtneU56Z05DZ2xqTFRJdU5Dd3dMVFF0TVM0MkxUUXROSFl0TWpSak1DMHhNeTQyTERndU9DMHlNQ3d4Tnk0eUxUSXdhRE13TGpSV01UQXlhQzAwTkM0NFl5MHhNQzQwTERBdE5qSXVOQ3d5TGpndE5qSXVOQ3cyTVM0eWRqSTNMakpqTUN3eUxqUXRNUzQyTERRdE5DdzBhQzB5TXk0MlZqSTFNR2d5Tnk0MkRRb0pZekl1TkN3d0xEUXNNUzQyTERRc05IWXhOVEF1T0VneU56QjJMVE14TGpaak1DMHlMalFzTVM0MkxUUXNOQzAwY3pRc01TNDJMRFFzTkhZek5TNDJRekkzT0N3ME1UQXVPQ3d5TnpZc05ERXlMamdzTWpjMExEUXhNaTQ0ZWlJdlBnMEtQSEJoZEdnZ1pEMGlUVE0zT0M0NExEVXdPRWd4TWprdU1rTTFPQ3cxTURnc01DdzBOVEFzTUN3ek56Z3VPRll4TWprdU1rTXdMRFU0TERVNExEQXNNVEk1TGpJc01HZ3lORGt1TmtNME5UQXNNQ3cxTURnc05UZ3NOVEE0TERFeU9TNHlkakkwT1M0MkRRb0pRelV3T0N3ME5UQXNORFV3TERVd09Dd3pOemd1T0N3MU1EaDZJRTB4TWprdU1pdzRRell5TGpRc09DdzRMRFl5TGpRc09Dd3hNamt1TW5ZeU5Ea3VOa000TERRME5TNDJMRFl5TGpRc05UQXdMREV5T1M0eUxEVXdNR2d5TkRrdU5tTTJOaTQ0TERBc01USXhMakl0TlRRdU5Dd3hNakV1TWkweE1qRXVNZzBLQ1ZZeE1qa3VNa00xTURBc05qSXVOQ3cwTkRVdU5pdzRMRE0zT0M0NExEaElNVEk1TGpKNklpOCtEUW84Y0dGMGFDQmtQU0pOTXpjd0xEUTRORWd4TXpoakxUWXlMREF0TVRFMExUVXlMalF0TVRFMExURXhOQzQwVmpFek9FTXlOQ3czTml3M05pd3lOQ3d4TXpnc01qUm9Nak14TGpKak1pNDBMREFzTkN3eExqWXNOQ3cwY3kweExqWXNOQzAwTERSSU1UTTREUW9KUXpnd0xqUXNNeklzTXpJc09EQXVOQ3d6TWl3eE16aDJNak15WXpBc05UY3VOaXcwT0M0NExERXdOaTQwTERFd05pd3hNRFl1TkdneU16SmpOVGN1Tml3d0xERXdOaTAwT0M0NExERXdOaTB4TURZdU5GWXlOVGhqTUMweUxqUXNNUzQyTFRRc05DMDBjelFzTVM0MkxEUXNOSFl4TVRJTkNnbERORGcwTERRek1pdzBNeklzTkRnMExETTNNQ3cwT0RSNklpOCtEUW84Y0dGMGFDQmtQU0pOTkRRMkxqZ3NOalV1TW1NdE1TNHlMREF0TWkwd0xqUXRNaTQ0TFRFdU1tTXRNakF1TkMweU1DNDBMVFEzTGpZdE16SXROelV1TWkwek1tTXRNaTQwTERBdE5DMHhMall0TkMwMGN6RXVOaTAwTERRdE5HTXlPUzQyTERBc05UZ3VPQ3d4TWk0MExEZ3dMamdzTXpRdU5BMEtDV014TGpZc01TNDJMREV1Tml3MExEQXNOUzQyUXpRME9TNHlMRFkwTGpnc05EUTRMRFkxTGpJc05EUTJMamdzTmpVdU1ub2lMejROQ2p4d1lYUm9JR1E5SWswME9EQXNNak0wWXkweUxqUXNNQzAwTFRFdU5pMDBMVFIyTFRVNUxqSmpNQzB5TGpRc01TNDJMVFFzTkMwMGN6UXNNUzQyTERRc05GWXlNekJETkRnMExESXpNaTQwTERRNE1pNDBMREl6TkN3ME9EQXNNak0wZWlJdlBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEM5emRtYytEUW89Ig==");

/***/ }),

/***/ "./public/images/icons/hotel.svg":
/*!***************************************!*\
  !*** ./public/images/icons/hotel.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/images/hotel-e72ac8fbdc15c0296d938fda5c85a611.svg");

/***/ }),

/***/ "./public/images/icons/instagram.svg":
/*!*******************************************!*\
  !*** ./public/images/icons/instagram.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,ZXhwb3J0IGRlZmF1bHQgImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QmxibUZpYkdVdFltRmphMmR5YjNWdVpEMGlibVYzSURBZ01DQXlOQ0F5TkNJZ0lIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSWdJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaVBqeHNhVzVsWVhKSGNtRmthV1Z1ZENCcFpEMGlVMVpIU1VSZk1WOGlJR2R5WVdScFpXNTBWSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29NQ0F0TVM0NU9ESWdMVEV1T0RRMElEQWdMVEV6TWk0MU1qSWdMVFV4TGpBM055a2lJR2R5WVdScFpXNTBWVzVwZEhNOUluVnpaWEpUY0dGalpVOXVWWE5sSWlCNE1UMGlMVE0zTGpFd05pSWdlREk5SWkweU5pNDFOVFVpSUhreFBTSXROekl1TnpBMUlpQjVNajBpTFRnMExqQTBOeUkrUEhOMGIzQWdiMlptYzJWMFBTSXdJaUJ6ZEc5d0xXTnZiRzl5UFNJalptUTFJaTgrUEhOMGIzQWdiMlptYzJWMFBTSXVOU0lnYzNSdmNDMWpiMnh2Y2owaUkyWm1OVFF6WlNJdlBqeHpkRzl3SUc5bVpuTmxkRDBpTVNJZ2MzUnZjQzFqYjJ4dmNqMGlJMk00TXpkaFlpSXZQand2YkdsdVpXRnlSM0poWkdsbGJuUStQSEJoZEdnZ1pEMGliVEV1TlNBeExqWXpNMk10TVM0NE9EWWdNUzQ1TlRrdE1TNDFJRFF1TURRdE1TNDFJREV3TGpNMk1pQXdJRFV1TWpVdExqa3hOaUF4TUM0MU1UTWdNeTQ0TnpnZ01URXVOelV5SURFdU5EazNMak00TlNBeE5DNDNOakV1TXpnMUlERTJMakkxTmkwdU1EQXlJREV1T1RrMkxTNDFNVFVnTXk0Mk1pMHlMakV6TkNBekxqZzBNaTAwTGprMU55NHdNekV0TGpNNU5DNHdNekV0TVRNdU1UZzFMUzR3TURFdE1UTXVOVGczTFM0eU16WXRNeTR3TURjdE1pNHdPRGN0TkM0M05DMDBMalV5TmkwMUxqQTVNUzB1TlRVNUxTNHdPREV0TGpZM01TMHVNVEExTFRNdU5UTTVMUzR4TVMweE1DNHhOek11TURBMUxURXlMalF3TXkwdU5EUTRMVEUwTGpReElERXVOak16ZWlJZ1ptbHNiRDBpZFhKc0tDTlRWa2RKUkY4eFh5a2lMejQ4Y0dGMGFDQmtQU0p0TVRFdU9UazRJRE11TVRNNVl5MHpMall6TVNBd0xUY3VNRGM1TFM0ek1qTXRPQzR6T1RZZ015NHdOVGN0TGpVME5DQXhMak01TmkwdU5EWTFJRE11TWpBNUxTNDBOalVnTlM0NE1EVWdNQ0F5TGpJM09DMHVNRGN6SURRdU5ERTVMalEyTlNBMUxqZ3dOQ0F4TGpNeE5DQXpMak00TWlBMExqYzVJRE11TURVNElEZ3VNemswSURNdU1EVTRJRE11TkRjM0lEQWdOeTR3TmpJdU16WXlJRGd1TXprMUxUTXVNRFU0TGpVME5TMHhMalF4TGpRMk5TMHpMakU1Tmk0ME5qVXROUzQ0TURRZ01DMHpMalEyTWk0eE9URXROUzQyT1RjdE1TNDBPRGd0Tnk0ek56VXRNUzQzTFRFdU55MHpMams1T1MweExqUTROeTAzTGpNM05DMHhMalE0TjNwdExTNDNPVFFnTVM0MU9UZGpOeTQxTnpRdExqQXhNaUE0TGpVek9DMHVPRFUwSURndU1EQTJJREV3TGpnME15MHVNVGc1SURRdU1UTTNMVE11TXpNNUlETXVOamd6TFRjdU1qRXhJRE11TmpnekxUY3VNRFlnTUMwM0xqSTJNeTB1TWpBeUxUY3VNall6TFRjdU1qWTFJREF0Tnk0eE5EVXVOVFl0Tnk0eU5UY2dOaTQwTmpndE55NHlOak42YlRVdU5USTBJREV1TkRjeFl5MHVOVGczSURBdE1TNHdOak11TkRjMkxURXVNRFl6SURFdU1EWXpjeTQwTnpZZ01TNHdOak1nTVM0d05qTWdNUzR3TmpNZ01TNHdOak10TGpRM05pQXhMakEyTXkweExqQTJNeTB1TkRjMkxURXVNRFl6TFRFdU1EWXpMVEV1TURZemVtMHROQzQzTXlBeExqSTBNMk10TWk0MU1UTWdNQzAwTGpVMUlESXVNRE00TFRRdU5UVWdOQzQxTlRGek1pNHdNemNnTkM0MU5TQTBMalUxSURRdU5UVWdOQzQxTkRrdE1pNHdNemNnTkM0MU5Ea3ROQzQxTlMweUxqQXpOaTAwTGpVMU1TMDBMalUwT1MwMExqVTFNWHB0TUNBeExqVTVOMk16TGprd05TQXdJRE11T1RFZ05TNDVNRGdnTUNBMUxqa3dPQzB6TGprd05DQXdMVE11T1RFdE5TNDVNRGdnTUMwMUxqa3dPSG9pSUdacGJHdzlJaU5tWm1ZaUx6NDhMM04yWno0PSI=");

/***/ }),

/***/ "./public/images/pagne.jpg":
/*!*********************************!*\
  !*** ./public/images/pagne.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAicGFnbmUuanBnIjs=");

/***/ }),

/***/ "./public/images/paysage_vert.jpg":
/*!****************************************!*\
  !*** ./public/images/paysage_vert.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAicGF5c2FnZV92ZXJ0LmpwZyI7");

/***/ }),

/***/ "./public/images/three-women-wearing-black-clothe.jpg":
/*!************************************************************!*\
  !*** ./public/images/three-women-wearing-black-clothe.jpg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAidGhyZWUtd29tZW4td2VhcmluZy1ibGFjay1jbG90aGUuanBnIjs=");

/***/ })

})
//# sourceMappingURL=discover.js.e5d379dcf29491e4d318.hot-update.js.map