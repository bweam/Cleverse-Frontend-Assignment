"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/AvgTimeButton.js":
/*!******************************!*\
  !*** ./src/AvgTimeButton.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\supat\\OneDrive\\Documents\\cleverse-frontend\\Cleverse-Frontend-Assignment\\frontend-screening-assignment\\src\\AvgTimeButton.js",
    _s = $RefreshSig$();




function TimeButton(props) {
  _s();

  var data = props.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data),
      logs = _useState[0],
      setLogs = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      display = _useState2[0],
      setDisplay = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLogs(data);
    var newDisplay = "";
    data.forEach(function (item) {
      console.log(item);
      newDisplay = newDisplay.concat(item.toString());
    });
    setDisplay(newDisplay);
  }, [data]);

  var handleClick = function handleClick() {
    console.log(display);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
    onClick: handleClick,
    children: "Button"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 12
  }, this);
}

_s(TimeButton, "aHFXDAM9iDH2p39L/DWRFmGOKeQ=");

_c = TimeButton;
/* harmony default export */ __webpack_exports__["default"] = (TimeButton);

var _c;

$RefreshReg$(_c, "TimeButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTgzNjQ2ZGU5ODY4NWRmMGI4MzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0UsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFDdkIsTUFBUUMsSUFBUixHQUFpQkQsS0FBakIsQ0FBUUMsSUFBUjs7QUFDQSxrQkFBd0JILCtDQUFRLENBQUNHLElBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBOEJMLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUFSLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaTSxJQUFBQSxPQUFPLENBQUNGLElBQUQsQ0FBUDtBQUVBLFFBQUlLLFVBQVUsR0FBRyxFQUFqQjtBQUNBTCxJQUFBQSxJQUFJLENBQUNNLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDbkJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FGLE1BQUFBLFVBQVUsR0FBR0EsVUFBVSxDQUFDSyxNQUFYLENBQWtCSCxJQUFJLENBQUNJLFFBQUwsRUFBbEIsQ0FBYjtBQUNILEtBSEQ7QUFLQVAsSUFBQUEsVUFBVSxDQUFDQyxVQUFELENBQVY7QUFDSCxHQVZRLEVBVU4sQ0FBQ0wsSUFBRCxDQVZNLENBQVQ7O0FBWUEsTUFBTVksV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QkosSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLE9BQVo7QUFDSCxHQUZEOztBQUlBLHNCQUFPO0FBQVEsV0FBTyxFQUFFUyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0dBdEJRZDs7S0FBQUE7QUF3QlQsK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0F2Z1RpbWVCdXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gVGltZUJ1dHRvbihwcm9wcykge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFtsb2dzLCBzZXRMb2dzXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRMb2dzKGRhdGEpO1xyXG5cclxuICAgICAgICBsZXQgbmV3RGlzcGxheSA9IFwiXCI7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICBuZXdEaXNwbGF5ID0gbmV3RGlzcGxheS5jb25jYXQoaXRlbS50b1N0cmluZygpKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXREaXNwbGF5KG5ld0Rpc3BsYXkpO1xyXG4gICAgfSwgW2RhdGFdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkaXNwbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+QnV0dG9uPC9idXR0b24+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVCdXR0b247Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGltZUJ1dHRvbiIsInByb3BzIiwiZGF0YSIsImxvZ3MiLCJzZXRMb2dzIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJuZXdEaXNwbGF5IiwiZm9yRWFjaCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiY29uY2F0IiwidG9TdHJpbmciLCJoYW5kbGVDbGljayJdLCJzb3VyY2VSb290IjoiIn0=