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
    className: "discover-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("header", {
    className: "jsx-3671676608" + " " + "discover-header",
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
    className: "jsx-3671676608" + " " + "filtre-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3671676608" + " " + "filter-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-3671676608",
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
    className: "jsx-3671676608",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "1"), __jsx("option", {
    className: "jsx-3671676608",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "2"), __jsx("option", {
    className: "jsx-3671676608",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "3"), __jsx("option", {
    className: "jsx-3671676608",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "4"), __jsx("option", {
    className: "jsx-3671676608",
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
      className: "jsx-3671676608",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, cat.name);
  }))))), __jsx("section", {
    className: "jsx-3671676608" + " " + "categories-section",
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
      className: "jsx-3671676608",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-3671676608",
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
          className: "jsx-3671676608",
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
          className: "jsx-3671676608",
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
          className: "jsx-3671676608",
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
          className: "jsx-3671676608",
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
      className: "jsx-3671676608",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-3671676608",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, cat.name));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3671676608",
    __self: this
  }, ".discover-page.jsx-3671676608{padding-right:0;padding-left:0;max-width:100%;}.discover-header.jsx-3671676608{height:25vh;}.filter-div.jsx-3671676608{padding:2rem;}.filter-div.jsx-3671676608::after{content:\"\";clear:both;display:table;}.categories-section.jsx-3671676608{width:100vw;}.react-multi-carousel-list.jsx-3671676608{width:100vw;}@media only screen and (min-width:600px){.form-discover.jsx-3671676608{width:45%;float:left;margin-left:1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxwYWdlc1xcZGlzY292ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0lnQixBQUl3QixBQU1KLEFBSUEsQUFJQSxBQU9oQixBQUdnQixBQUtHLFVBQ0EsQ0FmSCxDQVJmLEFBY0EsQUFJQSxDQWRBLEdBVmtCLEtBOEJNLENBZk4sU0FkQSxLQWVoQixDQWVFLFNBN0JKIiwiZmlsZSI6IkM6XFxVc2Vyc1xcZXRla2FcXEFsbG9mQWZyaWNhXFxwYWdlc1xcZGlzY292ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlJ1xyXG5pbXBvcnRcclxue1xyXG5Db250YWluZXIsXHJcblJvdyxcclxuQ29sLFxyXG5Gb3JtLFxyXG5Gb3JtR3JvdXAsXHJcbkxhYmVsLFxyXG5JbnB1dFxyXG5cclxufWZyb20gJ3JlYWN0c3RyYXAnXHJcblxyXG5cclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzc1wiO1xyXG5cclxuXHJcbmNvbnN0IGNhdGVnb3JpZXMgPSAgW1xyXG4gICAge1xyXG4gICAgICAgIGlkOjAsXHJcbiAgICAgICAgbmFtZTonVG91cycsXHJcbiAgICAgICAgdGl0cmVkaXY6J0hvdGVsZXJpZSByZXN0YXVyYXRpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmFtZTonSG90ZWxlcmllJyxcclxuICAgICAgICB0aXRyZWRpdjonVG9wIEhvdGVsZXJpZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6MixcclxuICAgICAgICBuYW1lOidyZXN0YXVyYXRpb25zJyxcclxuICAgICAgICB0aXRyZWRpdjonVG9wIHJlc3RhdXJhdGlvbnMnXHJcbiAgICB9XHJcbl1cclxuXHJcblxyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gICAgc3VwZXJMYXJnZURlc2t0b3A6IHtcclxuICAgICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQwMDAsIG1pbjogMzAwMCB9LFxyXG4gICAgICBpdGVtczogNSxcclxuICAgIH0sXHJcbiAgICBkZXNrdG9wOiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcclxuICAgICAgaXRlbXM6IDMsXHJcbiAgICB9LFxyXG4gICAgdGFibGV0OiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxyXG4gICAgICBpdGVtczogMixcclxuICAgIH0sXHJcbiAgICBtb2JpbGU6IHtcclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXHJcbiAgICAgIGl0ZW1zOiAyLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuY29uc3QgRGlzY292ZXIgPSAoe2NvdW50cmllc30pID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgW2NhdFZhbCxzZXRDYXRWYWxdID0gdXNlU3RhdGUoJ1RvdXMnKVxyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuXHJcbiAgICAgICAgc2V0Q2F0VmFsKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZSA9IGggPT4ge1xyXG4gICBcclxuICAgICAgICByb3V0ZXIucHVzaChgL2NhcmQvW2lkXT9JZD0ke2guaWR9JmRhdGFJZD0ke2gubmFtZX1gLGAvY2FyZC9baWRdP0lkPSR7aC5pZH0mZGF0YUlkPSR7aC5uYW1lfWApXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJkaXNjb3Zlci1wYWdlXCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJkaXNjb3Zlci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBpbWFnZT17e3dpZHRoOicxMDAlJyxoZWlnaHQ6JzEwMCUnLGFsdDoncGFnbmUgaW1nJyxzcmM6Jy9pbWFnZXMvcGFnbmUuanBnJ319IC8+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmlsdHJlLXNlY3Rpb25cIj5cclxuXHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkZpbHRyZSA6PC9oMz5cclxuICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cImZvcm0tZGlzY292ZXJcIj5cclxuICAgICAgICAgICAgPExhYmVsIGZvcj1cImV4YW1wbGVTZWxlY3RcIj5QYXlzPC9MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJzZWxlY3RcIiBuYW1lPVwic2VsZWN0XCIgaWQ9XCJleGFtcGxlU2VsZWN0XCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjI8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uPjU8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9JbnB1dD5cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiBcclxuICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJmb3JtLWRpc2NvdmVyXCI+XHJcbiAgICAgICAgPExhYmVsIGZvcj1cImV4YW1wbGVTZWxlY3RcIj5DYXTDqWdvcmllPC9MYWJlbD5cclxuICAgICAgICA8SW5wdXQgb25DaGFuZ2U9eyhlKT0+aGFuZGxlQ2hhbmdlKGUpfSB0eXBlPVwic2VsZWN0XCIgbmFtZT1cInNlbGVjdFwiIGlkPVwiZXhhbXBsZVNlbGVjdFwiPlxyXG4gICAge2NhdGVnb3JpZXMubWFwKGNhdCA9PiA8b3B0aW9uIGtleT17Y2F0LmlkfT57Y2F0Lm5hbWV9PC9vcHRpb24+KX1cclxuICAgICAgICA8L0lucHV0PlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhdGVnb3JpZXMtc2VjdGlvblwiPlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRWYWwgPT09ICdUb3VzJyA/IGNhdGVnb3JpZXMuZmluZChjYXQgPT4gY2F0Lm5hbWUgPT09ICdUb3VzJyApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRpdHJlZGl2LnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodmFsID0+IDxkaXYga2V5PXt2YWx9PjxoMT57dmFsfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbCA9PT0gXCJIb3RlbGVyaWVcIj88Q2Fyb3VzZWwgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX0+e2NvdW50cmllcy5tYXAoYz0+Yy5ob3RlbHMubWFwKGg9PjxkaXYga2V5PXtoLm5hbWV9PjxMaW5rIGhyZWY9e2AvY2FyZC9baWRdYH0gYXM9e2AvY2FyZC8ke2gubmFtZX1gfT48aDE+e2gubmFtZX08L2gxPjwvTGluaz48L2Rpdj4pKX08L0Nhcm91c2VsPjpcclxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9PiB7ICBjb3VudHJpZXMubWFwKGM9PmMucmVzdGF1cmFudHMubWFwKGg9PjxkaXYga2V5PXtoLm5hbWV9PjxMaW5rIGhyZWY9e2AvY2FyZC9baWRdYH0gYXM9e2AvY2FyZC8ke2gubmFtZX1gfT48aDE+e2gubmFtZX08L2gxPjwvTGluaz48L2Rpdj4pKX08L0Nhcm91c2VsPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLmZpbHRlcihjYXQgPT4gIGNhdC5uYW1lID09PSBjYXRWYWwpLm1hcChjYXQgPT4gPGRpdiBrZXk9e2NhdC5pZH0+PGgxPntjYXQubmFtZX08L2gxPjwvZGl2PilcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgXHJcbiAgICAuZGlzY292ZXItcGFnZXtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpc2NvdmVyLWhlYWRlcntcclxuICAgICAgICBoZWlnaHQ6MjV2aDtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLWRpdntcclxuICAgICAgIHBhZGRpbmc6MnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZmlsdGVyLWRpdjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcmllcy1zZWN0aW9ue1xyXG4gICAgICAgIHdpZHRoOjEwMHZ3XHJcbiAgICB9XHJcblxyXG4gICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWxpc3Qge1xyXG4gICAgICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MDBweCl7XHJcbiAgICAgICAgLmZvcm0tZGlzY292ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOjQ1JSA7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuICAgIGNvbnN0IHJlcyA9ICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hbGwvZGlzY292ZXInKVxyXG4gICAgXHJcbiBcclxuICAgIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG5cclxuICAgIHJldHVybiB7cHJvcHMgOiB7Y291bnRyaWVzfX1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc2NvdmVyIl19 */\n/*@ sourceURL=C:\\\\Users\\\\eteka\\\\AllofAfrica\\\\pages\\\\discover.js */"));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Discover);

/***/ })

})
//# sourceMappingURL=discover.js.fd5a209a777e30823b69.hot-update.js.map