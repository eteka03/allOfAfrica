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
    className: "discover-page ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-2157069160" + " " + "discover-header",
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
    className: "jsx-2157069160" + " " + "filtre-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2157069160" + " " + "filter-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2157069160",
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
    className: "jsx-2157069160",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "1"), __jsx("option", {
    className: "jsx-2157069160",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "2"), __jsx("option", {
    className: "jsx-2157069160",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "3"), __jsx("option", {
    className: "jsx-2157069160",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "4"), __jsx("option", {
    className: "jsx-2157069160",
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
      className: "jsx-2157069160",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, cat.name);
  }))))), __jsx("section", {
    className: "jsx-2157069160" + " " + "categories-section",
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
      className: "jsx-2157069160",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-2157069160",
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
          className: "jsx-2157069160",
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
          className: "jsx-2157069160",
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
          className: "jsx-2157069160",
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
          className: "jsx-2157069160",
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
      className: "jsx-2157069160",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-2157069160",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, cat.name));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2157069160",
    __self: this
  }, ".discover-page.jsx-2157069160{padding:0;max-width:100%;width:100%;}.discover-header.jsx-2157069160{height:25vh;}.filter-div.jsx-2157069160{padding:2rem;}.filter-div.jsx-2157069160::after{content:\"\";clear:both;display:table;}.categories-section.jsx-2157069160{width:100vw;}.react-multi-carousel-list.jsx-2157069160{width:100vw;}@media only screen and (min-width:600px){.form-discover.jsx-2157069160{width:45%;float:left;margin-left:1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxwYWdlc1xcZGlzY292ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0lnQixBQUlrQixBQU1FLEFBSUEsQUFJQSxBQU9oQixBQUdnQixBQUtHLFVBNUJBLEFBNkJBLENBZkgsQ0FSZixBQWNBLEFBSUEsQ0FkQSxRQW9Cd0IsQ0FmTixHQWRKLFdBQ2QsQUFjRSxDQWVFIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxwYWdlc1xcZGlzY292ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlJ1xyXG5pbXBvcnRcclxue1xyXG5Db250YWluZXIsXHJcblJvdyxcclxuQ29sLFxyXG5Gb3JtLFxyXG5Gb3JtR3JvdXAsXHJcbkxhYmVsLFxyXG5JbnB1dFxyXG5cclxufWZyb20gJ3JlYWN0c3RyYXAnXHJcblxyXG5cclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzc1wiO1xyXG5cclxuXHJcbmNvbnN0IGNhdGVnb3JpZXMgPSAgW1xyXG4gICAge1xyXG4gICAgICAgIGlkOjAsXHJcbiAgICAgICAgbmFtZTonVG91cycsXHJcbiAgICAgICAgdGl0cmVkaXY6J0hvdGVsZXJpZSByZXN0YXVyYXRpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmFtZTonSG90ZWxlcmllJyxcclxuICAgICAgICB0aXRyZWRpdjonVG9wIEhvdGVsZXJpZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6MixcclxuICAgICAgICBuYW1lOidyZXN0YXVyYXRpb25zJyxcclxuICAgICAgICB0aXRyZWRpdjonVG9wIHJlc3RhdXJhdGlvbnMnXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gICAgc3VwZXJMYXJnZURlc2t0b3A6IHtcclxuICAgICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQwMDAsIG1pbjogMzAwMCB9LFxyXG4gICAgICBpdGVtczogNSxcclxuICAgIH0sXHJcbiAgICBkZXNrdG9wOiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcclxuICAgICAgaXRlbXM6IDMsXHJcbiAgICB9LFxyXG4gICAgdGFibGV0OiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxyXG4gICAgICBpdGVtczogMixcclxuICAgIH0sXHJcbiAgICBtb2JpbGU6IHtcclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXHJcbiAgICAgIGl0ZW1zOiAyLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuY29uc3QgRGlzY292ZXIgPSAoe2NvdW50cmllc30pID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgW2NhdFZhbCxzZXRDYXRWYWxdID0gdXNlU3RhdGUoJ1RvdXMnKVxyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuXHJcbiAgICAgICAgc2V0Q2F0VmFsKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZSA9IGggPT4ge1xyXG4gICBcclxuICAgICAgICByb3V0ZXIucHVzaChgL2NhcmQvW2lkXT9JZD0ke2guaWR9JmRhdGFJZD0ke2gubmFtZX1gLGAvY2FyZC9baWRdP0lkPSR7aC5pZH0mZGF0YUlkPSR7aC5uYW1lfWApXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJkaXNjb3Zlci1wYWdlIFwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZGlzY292ZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgaW1hZ2U9e3t3aWR0aDonMTAwJScsaGVpZ2h0OicxMDAlJyxhbHQ6J3BhZ25lIGltZycsc3JjOicvaW1hZ2VzL3BhZ25lLmpwZyd9fSAvPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZpbHRyZS1zZWN0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1kaXZcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5GaWx0cmUgOjwvaDM+XHJcbiAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJmb3JtLWRpc2NvdmVyXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJleGFtcGxlU2VsZWN0XCI+UGF5czwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwic2VsZWN0XCIgbmFtZT1cInNlbGVjdFwiIGlkPVwiZXhhbXBsZVNlbGVjdFwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgIDwvRm9ybUdyb3VwPlxyXG4gXHJcbiAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwiZm9ybS1kaXNjb3ZlclwiPlxyXG4gICAgICAgIDxMYWJlbCBmb3I9XCJleGFtcGxlU2VsZWN0XCI+Q2F0w6lnb3JpZTwvTGFiZWw+XHJcbiAgICAgICAgPElucHV0IG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUNoYW5nZShlKX0gdHlwZT1cInNlbGVjdFwiIG5hbWU9XCJzZWxlY3RcIiBpZD1cImV4YW1wbGVTZWxlY3RcIj5cclxuICAgIHtjYXRlZ29yaWVzLm1hcChjYXQgPT4gPG9wdGlvbiBrZXk9e2NhdC5pZH0+e2NhdC5uYW1lfTwvb3B0aW9uPil9XHJcbiAgICAgICAgPC9JbnB1dD5cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXRlZ29yaWVzLXNlY3Rpb25cIj5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0VmFsID09PSAnVG91cycgPyBjYXRlZ29yaWVzLmZpbmQoY2F0ID0+IGNhdC5uYW1lID09PSAnVG91cycgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aXRyZWRpdi5zcGxpdChcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICAubWFwKHZhbCA9PiA8ZGl2IGtleT17dmFsfT48aDE+e3ZhbH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICB2YWwgPT09IFwiSG90ZWxlcmllXCI/PENhcm91c2VsIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9Pntjb3VudHJpZXMubWFwKGM9PmMuaG90ZWxzLm1hcChoPT48ZGl2IGtleT17aC5uYW1lfT48TGluayBocmVmPXtgL2NhcmQvW2lkXWB9IGFzPXtgL2NhcmQvJHtoLm5hbWV9YH0+PGgxPntoLm5hbWV9PC9oMT48L0xpbms+PC9kaXY+KSl9PC9DYXJvdXNlbD46XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCByZXNwb25zaXZlPXtyZXNwb25zaXZlfT4geyAgY291bnRyaWVzLm1hcChjPT5jLnJlc3RhdXJhbnRzLm1hcChoPT48ZGl2IGtleT17aC5uYW1lfT48TGluayBocmVmPXtgL2NhcmQvW2lkXWB9IGFzPXtgL2NhcmQvJHtoLm5hbWV9YH0+PGgxPntoLm5hbWV9PC9oMT48L0xpbms+PC9kaXY+KSl9PC9DYXJvdXNlbD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5maWx0ZXIoY2F0ID0+ICBjYXQubmFtZSA9PT0gY2F0VmFsKS5tYXAoY2F0ID0+IDxkaXYga2V5PXtjYXQuaWR9PjxoMT57Y2F0Lm5hbWV9PC9oMT48L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIFxyXG4gICAgLmRpc2NvdmVyLXBhZ2V7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpc2NvdmVyLWhlYWRlcntcclxuICAgICAgICBoZWlnaHQ6MjV2aDtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLWRpdntcclxuICAgICAgIHBhZGRpbmc6MnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLWRpdjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcmllcy1zZWN0aW9ue1xyXG4gICAgICAgIHdpZHRoOjEwMHZ3XHJcbiAgICB9XHJcblxyXG4gICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MDBweCl7XHJcbiAgICAgICAgLmZvcm0tZGlzY292ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOjQ1JSA7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuICAgIGNvbnN0IHJlcyA9ICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hbGwvZGlzY292ZXInKVxyXG4gICAgXHJcbiBcclxuICAgIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG5cclxuICAgIHJldHVybiB7cHJvcHMgOiB7Y291bnRyaWVzfX1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc2NvdmVyIl19 */\n/*@ sourceURL=C:\\\\Users\\\\eteka\\\\AllofAfrica\\\\pages\\\\discover.js */"));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Discover);

/***/ })

})
//# sourceMappingURL=discover.js.9ac839b0f5ff6b3a6a51.hot-update.js.map