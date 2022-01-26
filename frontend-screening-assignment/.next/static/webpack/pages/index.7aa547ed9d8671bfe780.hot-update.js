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
      newDisplay.push(key + " : " + difference + " sec");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2FhNTQ3ZWQ5ZDg2NzFiZmU3ODAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0UsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFDdkIsTUFBUUMsSUFBUixHQUFpQkQsS0FBakIsQ0FBUUMsSUFBUjs7QUFDQSxrQkFBd0JILCtDQUFRLENBQUNHLElBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBOEJMLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUFSLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaTSxJQUFBQSxPQUFPLENBQUNGLElBQUQsQ0FBUDtBQUNBLFFBQU1LLEdBQUcsR0FBRyxJQUFJQyxHQUFKLEVBQVo7QUFDQSxRQUFNQyxVQUFVLEdBQUcsSUFBSUQsR0FBSixFQUFuQjtBQUVBLFFBQUlFLFVBQVUsR0FBRyxFQUFqQjtBQUNBUixJQUFBQSxJQUFJLENBQUNTLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDbkIsVUFBR0wsR0FBRyxDQUFDTSxHQUFKLENBQVFELElBQUksQ0FBQ0UsYUFBYixLQUErQlAsR0FBRyxDQUFDUSxHQUFKLENBQVFILElBQUksQ0FBQ0UsYUFBYixFQUE0QixDQUE1QixLQUFrQ0YsSUFBSSxDQUFDSSxJQUF6RSxFQUErRTtBQUMzRSxZQUFJQyxhQUFhLEdBQUdWLEdBQUcsQ0FBQ1EsR0FBSixDQUFRSCxJQUFJLENBQUNFLGFBQWIsQ0FBcEI7O0FBQ0EsWUFBR0wsVUFBVSxDQUFDSSxHQUFYLFdBQWtCSSxhQUFhLENBQUMsQ0FBRCxDQUEvQixpQkFBeUNMLElBQUksQ0FBQ00sT0FBOUMsRUFBSCxFQUE2RDtBQUN6RFQsVUFBQUEsVUFBVSxDQUFDTSxHQUFYLFdBQWtCRSxhQUFhLENBQUMsQ0FBRCxDQUEvQixpQkFBeUNMLElBQUksQ0FBQ00sT0FBOUMsR0FBeURDLElBQXpELENBQThELENBQUNDLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLENBQUQsQ0FBZCxDQUFULEVBQTRCRyxRQUFRLENBQUNSLElBQUksQ0FBQ1MsU0FBTixDQUFwQyxDQUE5RDtBQUNILFNBRkQsTUFHS1osVUFBVSxDQUFDYSxHQUFYLFdBQWtCTCxhQUFhLENBQUMsQ0FBRCxDQUEvQixpQkFBeUNMLElBQUksQ0FBQ00sT0FBOUMsR0FBd0QsQ0FBQyxDQUFDRSxRQUFRLENBQUNILGFBQWEsQ0FBQyxDQUFELENBQWQsQ0FBVCxFQUE0QkcsUUFBUSxDQUFDUixJQUFJLENBQUNTLFNBQU4sQ0FBcEMsQ0FBRCxDQUF4RDtBQUNSLE9BTkQsTUFNT2QsR0FBRyxDQUFDZSxHQUFKLENBQVFWLElBQUksQ0FBQ0UsYUFBYixFQUE0QixDQUFDRixJQUFJLENBQUNJLElBQU4sRUFBWUosSUFBSSxDQUFDUyxTQUFqQixFQUE0QlQsSUFBSSxDQUFDTSxPQUFqQyxDQUE1QjtBQUNWLEtBUkQ7QUFVQVQsSUFBQUEsVUFBVSxDQUFDRSxPQUFYLENBQW1CLFVBQUNZLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUMvQixVQUFJQyxVQUFVLEdBQUcsQ0FBakI7QUFDQUYsTUFBQUEsS0FBSyxDQUFDWixPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3BCYSxRQUFBQSxVQUFVLElBQUliLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUEsSUFBSSxDQUFDLENBQUQsQ0FBNUI7QUFDSCxPQUZEO0FBR0FGLE1BQUFBLFVBQVUsQ0FBQ1MsSUFBWCxDQUFnQkssR0FBRyxHQUFHLEtBQU4sR0FBY0MsVUFBZCxHQUEyQixNQUEzQztBQUNILEtBTkQ7QUFPQW5CLElBQUFBLFVBQVUsQ0FBQ0ksVUFBRCxDQUFWLENBdkJZLENBd0JaO0FBQ0gsR0F6QlEsRUF5Qk4sQ0FBQ1IsSUFBRCxDQXpCTSxDQUFUOztBQTJCQSxNQUFNd0IsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVl2QixPQUFaO0FBQ0gsR0FGRDs7QUFJQSxzQkFBTztBQUFRLFdBQU8sRUFBRXFCLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDSDs7R0FyQ1ExQjs7S0FBQUE7QUF1Q1QsK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0F2Z1RpbWVCdXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gVGltZUJ1dHRvbihwcm9wcykge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IFtsb2dzLCBzZXRMb2dzXSA9IHVzZVN0YXRlKGRhdGEpO1xyXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9ncyhkYXRhKTtcclxuICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgY29uc3QgYWlycG9ydE1hcCA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld0Rpc3BsYXkgPSBbXTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYobWFwLmhhcyhpdGVtLnBhc3Nlbmdlck5hbWUpICYmIG1hcC5nZXQoaXRlbS5wYXNzZW5nZXJOYW1lKVswXSAhPSBpdGVtLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZXBhcnR1cmVJdGVtID0gbWFwLmdldChpdGVtLnBhc3Nlbmdlck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYoYWlycG9ydE1hcC5oYXMoYCR7ZGVwYXJ0dXJlSXRlbVsyXX0gdG8gJHtpdGVtLmFpcnBvcnR9YCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhaXJwb3J0TWFwLmdldChgJHtkZXBhcnR1cmVJdGVtWzJdfSB0byAke2l0ZW0uYWlycG9ydH1gKS5wdXNoKFtwYXJzZUludChkZXBhcnR1cmVJdGVtWzFdKSxwYXJzZUludChpdGVtLnRpbWVzdGFtcCldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgYWlycG9ydE1hcC5zZXQoYCR7ZGVwYXJ0dXJlSXRlbVsyXX0gdG8gJHtpdGVtLmFpcnBvcnR9YCxbW3BhcnNlSW50KGRlcGFydHVyZUl0ZW1bMV0pLHBhcnNlSW50KGl0ZW0udGltZXN0YW1wKV1dKTtcclxuICAgICAgICAgICAgfSBlbHNlIG1hcC5zZXQoaXRlbS5wYXNzZW5nZXJOYW1lLCBbaXRlbS50eXBlLCBpdGVtLnRpbWVzdGFtcCwgaXRlbS5haXJwb3J0XSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFpcnBvcnRNYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlmZmVyZW5jZSA9IDA7XHJcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpZmZlcmVuY2UgKz0gaXRlbVsxXSAtIGl0ZW1bMF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBuZXdEaXNwbGF5LnB1c2goa2V5ICsgXCIgOiBcIiArIGRpZmZlcmVuY2UgKyBcIiBzZWNcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXREaXNwbGF5KG5ld0Rpc3BsYXkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFpcnBvcnRNYXApO1xyXG4gICAgfSwgW2RhdGFdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkaXNwbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+QnV0dG9uPC9idXR0b24+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVCdXR0b247Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGltZUJ1dHRvbiIsInByb3BzIiwiZGF0YSIsImxvZ3MiLCJzZXRMb2dzIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJtYXAiLCJNYXAiLCJhaXJwb3J0TWFwIiwibmV3RGlzcGxheSIsImZvckVhY2giLCJpdGVtIiwiaGFzIiwicGFzc2VuZ2VyTmFtZSIsImdldCIsInR5cGUiLCJkZXBhcnR1cmVJdGVtIiwiYWlycG9ydCIsInB1c2giLCJwYXJzZUludCIsInRpbWVzdGFtcCIsInNldCIsInZhbHVlIiwia2V5IiwiZGlmZmVyZW5jZSIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=