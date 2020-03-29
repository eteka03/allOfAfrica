webpackHotUpdate("static\\development\\pages\\discover.js",{

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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_7__);
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

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    style: {
      padding: 0,
      maxWidth: '100%',
      margin: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-3068337461" + " " + "discover-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
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
      lineNumber: 84
    },
    __self: this
  })), __jsx("section", {
    className: "jsx-3068337461" + " " + "filtre-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3068337461" + " " + "filter-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3068337461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Filtre :"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "form-discover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    "for": "exampleSelect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Pays"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "select",
    name: "select",
    id: "exampleSelect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("option", {
    className: "jsx-3068337461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "1"), __jsx("option", {
    className: "jsx-3068337461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "2"), __jsx("option", {
    className: "jsx-3068337461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "3"), __jsx("option", {
    className: "jsx-3068337461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "4"), __jsx("option", {
    className: "jsx-3068337461",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "5"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "form-discover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    "for": "exampleSelect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Cat\xE9gorie"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    onChange: function onChange(e) {
      return handleChange(e);
    },
    type: "select",
    name: "select",
    id: "exampleSelect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, categories.map(function (cat) {
    return __jsx("option", {
      key: cat.id,
      className: "jsx-3068337461",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, cat.name);
  }))))), __jsx("section", {
    className: "jsx-3068337461" + " " + "categories-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, catVal === 'Tous' ? categories.find(function (cat) {
    return cat.name === 'Tous';
  }).titrediv.split(" ").map(function (val) {
    return __jsx("div", {
      key: val,
      className: "jsx-3068337461",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-3068337461",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, val), val === "Hotelerie" ? __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, {
      responsive: responsive,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, countries.map(function (c) {
      return c.hotels.map(function (h) {
        return __jsx("div", {
          key: h.name,
          className: "jsx-3068337461",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/card/[id]",
          as: "/card/".concat(h.name),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, __jsx("h1", {
          className: "jsx-3068337461",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, h.name)));
      });
    })) : __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, {
      responsive: responsive,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, " ", countries.map(function (c) {
      return c.restaurants.map(function (h) {
        return __jsx("div", {
          key: h.name,
          className: "jsx-3068337461",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/card/[id]",
          as: "/card/".concat(h.name),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, __jsx("h1", {
          className: "jsx-3068337461",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
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
      className: "jsx-3068337461",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-3068337461",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, cat.name));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3068337461",
    __self: this
  }, ".discover.jsx-3068337461{padding:0;max-width:100%;width:100%;}.discover-header.jsx-3068337461{height:25vh;}.filter-div.jsx-3068337461{padding:2rem;}.filter-div.jsx-3068337461::after{content:\"\";clear:both;display:table;}.categories-section.jsx-3068337461{width:100vw;padding:1.5rem;}.react-multi-carousel-list.jsx-3068337461{width:100vw;}@media only screen and (min-width:600px){.form-discover.jsx-3068337461{width:45%;float:left;margin-left:1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxwYWdlc1xcZGlzY292ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0lnQixBQUlrQixBQU1FLEFBSUEsQUFJQSxBQU1BLEFBTUEsQUFLRyxVQTlCQSxBQStCQSxDQWpCSCxDQVJmLEFBY21CLEFBTW5CLENBaEJBLFFBc0J3QixDQWpCTixHQWRKLEVBcUJkLFNBcEJBLEFBY0UsQ0FpQkUiLCJmaWxlIjoiQzpcXFVzZXJzXFxldGVrYVxcQWxsb2ZBZnJpY2FcXHBhZ2VzXFxkaXNjb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJ1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2UnXHJcbmltcG9ydFxyXG57XHJcbkNvbnRhaW5lcixcclxuUm93LFxyXG5Db2wsXHJcbkZvcm0sXHJcbkZvcm1Hcm91cCxcclxuTGFiZWwsXHJcbklucHV0XHJcblxyXG59ZnJvbSAncmVhY3RzdHJhcCdcclxuXHJcblxyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XHJcbmltcG9ydCBcInJlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzXCI7XHJcblxyXG5cclxuY29uc3QgY2F0ZWdvcmllcyA9ICBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6MCxcclxuICAgICAgICBuYW1lOidUb3VzJyxcclxuICAgICAgICB0aXRyZWRpdjonSG90ZWxlcmllIHJlc3RhdXJhdGlvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBuYW1lOidIb3RlbGVyaWUnLFxyXG4gICAgICAgIHRpdHJlZGl2OidUb3AgSG90ZWxlcmllJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoyLFxyXG4gICAgICAgIG5hbWU6J3Jlc3RhdXJhdGlvbnMnLFxyXG4gICAgICAgIHRpdHJlZGl2OidUb3AgcmVzdGF1cmF0aW9ucydcclxuICAgIH1cclxuXVxyXG5cclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgICBzdXBlckxhcmdlRGVza3RvcDoge1xyXG4gICAgICAvLyB0aGUgbmFtaW5nIGNhbiBiZSBhbnksIGRlcGVuZHMgb24geW91LlxyXG4gICAgICBicmVha3BvaW50OiB7IG1heDogNDAwMCwgbWluOiAzMDAwIH0sXHJcbiAgICAgIGl0ZW1zOiA1LFxyXG4gICAgfSxcclxuICAgIGRlc2t0b3A6IHtcclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxyXG4gICAgICBpdGVtczogMyxcclxuICAgIH0sXHJcbiAgICB0YWJsZXQ6IHtcclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXHJcbiAgICAgIGl0ZW1zOiAyLFxyXG4gICAgfSxcclxuICAgIG1vYmlsZToge1xyXG4gICAgICBicmVha3BvaW50OiB7IG1heDogNDY0LCBtaW46IDAgfSxcclxuICAgICAgaXRlbXM6IDIsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG5jb25zdCBEaXNjb3ZlciA9ICh7Y291bnRyaWVzfSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBbY2F0VmFsLHNldENhdFZhbF0gPSB1c2VTdGF0ZSgnVG91cycpXHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG5cclxuICAgICAgICBzZXRDYXRWYWwoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlID0gaCA9PiB7XHJcbiAgIFxyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvY2FyZC9baWRdP0lkPSR7aC5pZH0mZGF0YUlkPSR7aC5uYW1lfWAsYC9jYXJkL1tpZF0/SWQ9JHtoLmlkfSZkYXRhSWQ9JHtoLm5hbWV9YClcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7cGFkZGluZzogMCxtYXhXaWR0aDonMTAwJScgLCBtYXJnaW46IDB9fT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImRpc2NvdmVyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGltYWdlPXt7d2lkdGg6JzEwMCUnLGhlaWdodDonMTAwJScsYWx0OidwYWduZSBpbWcnLHNyYzonL2ltYWdlcy9wYWduZS5qcGcnfX0gLz5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmaWx0cmUtc2VjdGlvblwiPlxyXG5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItZGl2XCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+RmlsdHJlIDo8L2gzPlxyXG4gICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwiZm9ybS1kaXNjb3ZlclwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgZm9yPVwiZXhhbXBsZVNlbGVjdFwiPlBheXM8L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInNlbGVjdFwiIG5hbWU9XCJzZWxlY3RcIiBpZD1cImV4YW1wbGVTZWxlY3RcIj5cclxuICAgICAgICAgICAgPG9wdGlvbj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj40PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L0lucHV0PlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuIFxyXG4gICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cImZvcm0tZGlzY292ZXJcIj5cclxuICAgICAgICA8TGFiZWwgZm9yPVwiZXhhbXBsZVNlbGVjdFwiPkNhdMOpZ29yaWU8L0xhYmVsPlxyXG4gICAgICAgIDxJbnB1dCBvbkNoYW5nZT17KGUpPT5oYW5kbGVDaGFuZ2UoZSl9IHR5cGU9XCJzZWxlY3RcIiBuYW1lPVwic2VsZWN0XCIgaWQ9XCJleGFtcGxlU2VsZWN0XCI+XHJcbiAgICB7Y2F0ZWdvcmllcy5tYXAoY2F0ID0+IDxvcHRpb24ga2V5PXtjYXQuaWR9PntjYXQubmFtZX08L29wdGlvbj4pfVxyXG4gICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgIDwvRm9ybUdyb3VwPlxyXG4gXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2F0ZWdvcmllcy1zZWN0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdFZhbCA9PT0gJ1RvdXMnID8gY2F0ZWdvcmllcy5maW5kKGNhdCA9PiBjYXQubmFtZSA9PT0gJ1RvdXMnIClcclxuICAgICAgICAgICAgICAgICAgICAudGl0cmVkaXYuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCh2YWwgPT4gPGRpdiBrZXk9e3ZhbH0+PGgxPnt2YWx9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdmFsID09PSBcIkhvdGVsZXJpZVwiPzxDYXJvdXNlbCByZXNwb25zaXZlPXtyZXNwb25zaXZlfT57Y291bnRyaWVzLm1hcChjPT5jLmhvdGVscy5tYXAoaD0+PGRpdiBrZXk9e2gubmFtZX0+PExpbmsgaHJlZj17YC9jYXJkL1tpZF1gfSBhcz17YC9jYXJkLyR7aC5uYW1lfWB9PjxoMT57aC5uYW1lfTwvaDE+PC9MaW5rPjwvZGl2PikpfTwvQ2Fyb3VzZWw+OlxyXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX0+IHsgIGNvdW50cmllcy5tYXAoYz0+Yy5yZXN0YXVyYW50cy5tYXAoaD0+PGRpdiBrZXk9e2gubmFtZX0+PExpbmsgaHJlZj17YC9jYXJkL1tpZF1gfSBhcz17YC9jYXJkLyR7aC5uYW1lfWB9PjxoMT57aC5uYW1lfTwvaDE+PC9MaW5rPjwvZGl2PikpfTwvQ2Fyb3VzZWw+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuZmlsdGVyKGNhdCA9PiAgY2F0Lm5hbWUgPT09IGNhdFZhbCkubWFwKGNhdCA9PiA8ZGl2IGtleT17Y2F0LmlkfT48aDE+e2NhdC5uYW1lfTwvaDE+PC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICBcclxuICAgIC5kaXNjb3ZlcntcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZGlzY292ZXItaGVhZGVye1xyXG4gICAgICAgIGhlaWdodDoyNXZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWx0ZXItZGl2e1xyXG4gICAgICAgcGFkZGluZzoycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5maWx0ZXItZGl2OjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgfVxyXG5cclxuICAgIC5jYXRlZ29yaWVzLXNlY3Rpb257XHJcbiAgICAgICAgd2lkdGg6MTAwdnc7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6MTAwdnc7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYwMHB4KXtcclxuICAgICAgICAuZm9ybS1kaXNjb3ZlcntcclxuICAgICAgICAgICAgd2lkdGg6NDUlIDtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4gICAgY29uc3QgcmVzID0gIGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2FsbC9kaXNjb3ZlcicpXHJcbiAgICBcclxuIFxyXG4gICAgY29uc3QgY291bnRyaWVzID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICAgIFxyXG5cclxuICAgXHJcblxyXG4gICAgcmV0dXJuIHtwcm9wcyA6IHtjb3VudHJpZXN9fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzY292ZXIiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\eteka\\\\AllofAfrica\\\\pages\\\\discover.js */"));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Discover);

/***/ })

})
//# sourceMappingURL=discover.js.f76472130aec4db54e80.hot-update.js.map