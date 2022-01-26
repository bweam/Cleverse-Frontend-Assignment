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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      display = _useState2[0],
      setDisplay = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLogs(data);
    var map = new Map();
    var airportMap = new Map();
    var newDisplay = [];
    data.forEach(function (item) {
      if (map.has(item.passengerName) && map.get(item.passengerName)[0] != item.type) {
        var departureItem = map.get(item.passengerName);

        if (airportMap.has("".concat(departureItem[2], " to ").concat(item.airport))) {
          airportMap.get("".concat(departureItem[2], " to ").concat(item.airport)).push([parseInt(departureItem[1]), parseInt(item.timestamp)]);
        } else airportMap.set("".concat(departureItem[2], " to ").concat(item.airport), [[parseInt(departureItem[1]), parseInt(item.timestamp)]]);
      } else map.set(item.passengerName, [item.type, item.timestamp, item.airport]);
    });
    airportMap.forEach(function (value, key) {
      var difference = 0;
      value.forEach(function (item) {
        difference += item[1] - item[0];
      });
      newDisplay.push(key + " : " + difference);
    });
    setDisplay(newDisplay); // console.log(airportMap);
  }, [data]);

  var handleClick = function handleClick() {
    console.log(display);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
    onClick: handleClick,
    children: "Button"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 12
  }, this);
}

_s(TimeButton, "Tzn0g5YEI5GoBZybB0xEXQms2dE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGEyNmVjYTFkODkyYzJiZmUxZjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0UsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFDdkIsTUFBUUMsSUFBUixHQUFpQkQsS0FBakIsQ0FBUUMsSUFBUjs7QUFDQSxrQkFBd0JILCtDQUFRLENBQUNHLElBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBOEJMLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUFSLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaTSxJQUFBQSxPQUFPLENBQUNGLElBQUQsQ0FBUDtBQUNBLFFBQU1LLEdBQUcsR0FBRyxJQUFJQyxHQUFKLEVBQVo7QUFDQSxRQUFNQyxVQUFVLEdBQUcsSUFBSUQsR0FBSixFQUFuQjtBQUVBLFFBQUlFLFVBQVUsR0FBRyxFQUFqQjtBQUNBUixJQUFBQSxJQUFJLENBQUNTLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDbkIsVUFBR0wsR0FBRyxDQUFDTSxHQUFKLENBQVFELElBQUksQ0FBQ0UsYUFBYixLQUErQlAsR0FBRyxDQUFDUSxHQUFKLENBQVFILElBQUksQ0FBQ0UsYUFBYixFQUE0QixDQUE1QixLQUFrQ0YsSUFBSSxDQUFDSSxJQUF6RSxFQUErRTtBQUMzRSxZQUFJQyxhQUFhLEdBQUdWLEdBQUcsQ0FBQ1EsR0FBSixDQUFRSCxJQUFJLENBQUNFLGFBQWIsQ0FBcEI7O0FBQ0EsWUFBR0wsVUFBVSxDQUFDSSxHQUFYLFdBQWtCSSxhQUFhLENBQUMsQ0FBRCxDQUEvQixpQkFBeUNMLElBQUksQ0FBQ00sT0FBOUMsRUFBSCxFQUE2RDtBQUN6RFQsVUFBQUEsVUFBVSxDQUFDTSxHQUFYLFdBQWtCRSxhQUFhLENBQUMsQ0FBRCxDQUEvQixpQkFBeUNMLElBQUksQ0FBQ00sT0FBOUMsR0FBeURDLElBQXpELENBQThELENBQUNDLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLENBQUQsQ0FBZCxDQUFULEVBQTRCRyxRQUFRLENBQUNSLElBQUksQ0FBQ1MsU0FBTixDQUFwQyxDQUE5RDtBQUNILFNBRkQsTUFHS1osVUFBVSxDQUFDYSxHQUFYLFdBQWtCTCxhQUFhLENBQUMsQ0FBRCxDQUEvQixpQkFBeUNMLElBQUksQ0FBQ00sT0FBOUMsR0FBd0QsQ0FBQyxDQUFDRSxRQUFRLENBQUNILGFBQWEsQ0FBQyxDQUFELENBQWQsQ0FBVCxFQUE0QkcsUUFBUSxDQUFDUixJQUFJLENBQUNTLFNBQU4sQ0FBcEMsQ0FBRCxDQUF4RDtBQUNSLE9BTkQsTUFNT2QsR0FBRyxDQUFDZSxHQUFKLENBQVFWLElBQUksQ0FBQ0UsYUFBYixFQUE0QixDQUFDRixJQUFJLENBQUNJLElBQU4sRUFBWUosSUFBSSxDQUFDUyxTQUFqQixFQUE0QlQsSUFBSSxDQUFDTSxPQUFqQyxDQUE1QjtBQUNWLEtBUkQ7QUFVQVQsSUFBQUEsVUFBVSxDQUFDRSxPQUFYLENBQW1CLFVBQUNZLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUMvQixVQUFJQyxVQUFVLEdBQUcsQ0FBakI7QUFDQUYsTUFBQUEsS0FBSyxDQUFDWixPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3BCYSxRQUFBQSxVQUFVLElBQUliLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUEsSUFBSSxDQUFDLENBQUQsQ0FBNUI7QUFDSCxPQUZEO0FBR0FGLE1BQUFBLFVBQVUsQ0FBQ1MsSUFBWCxDQUFnQkssR0FBRyxHQUFHLEtBQU4sR0FBY0MsVUFBOUI7QUFDSCxLQU5EO0FBT0FuQixJQUFBQSxVQUFVLENBQUNJLFVBQUQsQ0FBVixDQXZCWSxDQXdCWjtBQUNILEdBekJRLEVBeUJOLENBQUNSLElBQUQsQ0F6Qk0sQ0FBVDs7QUEyQkEsTUFBTXdCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZdkIsT0FBWjtBQUNILEdBRkQ7O0FBSUEsc0JBQU87QUFBUSxXQUFPLEVBQUVxQixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0dBckNRMUI7O0tBQUFBO0FBdUNULCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9BdmdUaW1lQnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFRpbWVCdXR0b24ocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbbG9ncywgc2V0TG9nc10gPSB1c2VTdGF0ZShkYXRhKTtcclxuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldExvZ3MoZGF0YSk7XHJcbiAgICAgICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGNvbnN0IGFpcnBvcnRNYXAgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgICAgIGxldCBuZXdEaXNwbGF5ID0gW107XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKG1hcC5oYXMoaXRlbS5wYXNzZW5nZXJOYW1lKSAmJiBtYXAuZ2V0KGl0ZW0ucGFzc2VuZ2VyTmFtZSlbMF0gIT0gaXRlbS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVwYXJ0dXJlSXRlbSA9IG1hcC5nZXQoaXRlbS5wYXNzZW5nZXJOYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmKGFpcnBvcnRNYXAuaGFzKGAke2RlcGFydHVyZUl0ZW1bMl19IHRvICR7aXRlbS5haXJwb3J0fWApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWlycG9ydE1hcC5nZXQoYCR7ZGVwYXJ0dXJlSXRlbVsyXX0gdG8gJHtpdGVtLmFpcnBvcnR9YCkucHVzaChbcGFyc2VJbnQoZGVwYXJ0dXJlSXRlbVsxXSkscGFyc2VJbnQoaXRlbS50aW1lc3RhbXApXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGFpcnBvcnRNYXAuc2V0KGAke2RlcGFydHVyZUl0ZW1bMl19IHRvICR7aXRlbS5haXJwb3J0fWAsW1twYXJzZUludChkZXBhcnR1cmVJdGVtWzFdKSxwYXJzZUludChpdGVtLnRpbWVzdGFtcCldXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBtYXAuc2V0KGl0ZW0ucGFzc2VuZ2VyTmFtZSwgW2l0ZW0udHlwZSwgaXRlbS50aW1lc3RhbXAsIGl0ZW0uYWlycG9ydF0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhaXJwb3J0TWFwLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpZmZlcmVuY2UgPSAwO1xyXG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWZmZXJlbmNlICs9IGl0ZW1bMV0gLSBpdGVtWzBdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmV3RGlzcGxheS5wdXNoKGtleSArIFwiIDogXCIgKyBkaWZmZXJlbmNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldERpc3BsYXkobmV3RGlzcGxheSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWlycG9ydE1hcCk7XHJcbiAgICB9LCBbZGF0YV0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRpc3BsYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5CdXR0b248L2J1dHRvbj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZUJ1dHRvbjsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUaW1lQnV0dG9uIiwicHJvcHMiLCJkYXRhIiwibG9ncyIsInNldExvZ3MiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsIm1hcCIsIk1hcCIsImFpcnBvcnRNYXAiLCJuZXdEaXNwbGF5IiwiZm9yRWFjaCIsIml0ZW0iLCJoYXMiLCJwYXNzZW5nZXJOYW1lIiwiZ2V0IiwidHlwZSIsImRlcGFydHVyZUl0ZW0iLCJhaXJwb3J0IiwicHVzaCIsInBhcnNlSW50IiwidGltZXN0YW1wIiwic2V0IiwidmFsdWUiLCJrZXkiLCJkaWZmZXJlbmNlIiwiaGFuZGxlQ2xpY2siLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==