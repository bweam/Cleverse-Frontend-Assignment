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
    // console.log(map);
  }, [data]);

  var handleClick = function handleClick() {
    console.log(display);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
    onClick: handleClick,
    children: "Button"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzBiZTQ5NDU5ODk1NTdmMzI2NTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0UsVUFBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQTs7QUFDdkIsTUFBUUMsSUFBUixHQUFpQkQsS0FBakIsQ0FBUUMsSUFBUjs7QUFDQSxrQkFBd0JILCtDQUFRLENBQUNHLElBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBOEJMLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUFSLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaTSxJQUFBQSxPQUFPLENBQUNGLElBQUQsQ0FBUDtBQUNBLFFBQU1LLEdBQUcsR0FBRyxJQUFJQyxHQUFKLEVBQVo7QUFDQSxRQUFNQyxVQUFVLEdBQUcsSUFBSUQsR0FBSixFQUFuQjtBQUVBLFFBQUlFLFVBQVUsR0FBRyxFQUFqQjtBQUNBUixJQUFBQSxJQUFJLENBQUNTLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDbkIsVUFBR0wsR0FBRyxDQUFDTSxHQUFKLENBQVFELElBQUksQ0FBQ0UsYUFBYixLQUErQlAsR0FBRyxDQUFDUSxHQUFKLENBQVFILElBQUksQ0FBQ0UsYUFBYixFQUE0QixDQUE1QixLQUFrQ0YsSUFBSSxDQUFDSSxJQUF6RSxFQUErRTtBQUMzRSxZQUFJQyxhQUFhLEdBQUdWLEdBQUcsQ0FBQ1EsR0FBSixDQUFRSCxJQUFJLENBQUNFLGFBQWIsQ0FBcEI7O0FBQ0EsWUFBR0wsVUFBVSxDQUFDSSxHQUFYLFdBQWtCSSxhQUFhLENBQUMsQ0FBRCxDQUEvQixpQkFBeUNMLElBQUksQ0FBQ00sT0FBOUMsRUFBSCxFQUE2RDtBQUN6RFQsVUFBQUEsVUFBVSxDQUFDTSxHQUFYLFdBQWtCRSxhQUFhLENBQUMsQ0FBRCxDQUEvQixpQkFBeUNMLElBQUksQ0FBQ00sT0FBOUMsR0FBeURDLElBQXpELENBQThELENBQUNDLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLENBQUQsQ0FBZCxDQUFULEVBQTRCRyxRQUFRLENBQUNSLElBQUksQ0FBQ1MsU0FBTixDQUFwQyxDQUE5RDtBQUNILFNBRkQsTUFHS1osVUFBVSxDQUFDYSxHQUFYLFdBQWtCTCxhQUFhLENBQUMsQ0FBRCxDQUEvQixpQkFBeUNMLElBQUksQ0FBQ00sT0FBOUMsR0FBd0QsQ0FBQyxDQUFDRSxRQUFRLENBQUNILGFBQWEsQ0FBQyxDQUFELENBQWQsQ0FBVCxFQUE0QkcsUUFBUSxDQUFDUixJQUFJLENBQUNTLFNBQU4sQ0FBcEMsQ0FBRCxDQUF4RDtBQUNSLE9BTkQsTUFNT2QsR0FBRyxDQUFDZSxHQUFKLENBQVFWLElBQUksQ0FBQ0UsYUFBYixFQUE0QixDQUFDRixJQUFJLENBQUNJLElBQU4sRUFBWUosSUFBSSxDQUFDUyxTQUFqQixFQUE0QlQsSUFBSSxDQUFDTSxPQUFqQyxDQUE1QjtBQUNWLEtBUkQ7QUFVQVQsSUFBQUEsVUFBVSxDQUFDRSxPQUFYLENBQW1CLFVBQUNZLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUMvQixVQUFJQyxVQUFVLEdBQUcsQ0FBakI7QUFDQUYsTUFBQUEsS0FBSyxDQUFDWixPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3BCYSxRQUFBQSxVQUFVLElBQUliLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUEsSUFBSSxDQUFDLENBQUQsQ0FBNUI7QUFDSCxPQUZEO0FBR0FGLE1BQUFBLFVBQVUsQ0FBQ1MsSUFBWCxDQUFnQkssR0FBRyxHQUFHLEtBQU4sR0FBY0MsVUFBZCxHQUEyQixNQUEzQztBQUNILEtBTkQ7QUFPQW5CLElBQUFBLFVBQVUsQ0FBQ0ksVUFBRCxDQUFWLENBdkJZLENBd0JaO0FBQ0E7QUFDSCxHQTFCUSxFQTBCTixDQUFDUixJQUFELENBMUJNLENBQVQ7O0FBNEJBLE1BQU13QixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXZCLE9BQVo7QUFDSCxHQUZEOztBQUlBLHNCQUFPO0FBQVEsV0FBTyxFQUFFcUIsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNIOztHQXRDUTFCOztLQUFBQTtBQXdDVCwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQXZnVGltZUJ1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBUaW1lQnV0dG9uKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW2xvZ3MsIHNldExvZ3NdID0gdXNlU3RhdGUoZGF0YSk7XHJcbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRMb2dzKGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcclxuICAgICAgICBjb25zdCBhaXJwb3J0TWFwID0gbmV3IE1hcCgpO1xyXG5cclxuICAgICAgICBsZXQgbmV3RGlzcGxheSA9IFtdO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZihtYXAuaGFzKGl0ZW0ucGFzc2VuZ2VyTmFtZSkgJiYgbWFwLmdldChpdGVtLnBhc3Nlbmdlck5hbWUpWzBdICE9IGl0ZW0udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlcGFydHVyZUl0ZW0gPSBtYXAuZ2V0KGl0ZW0ucGFzc2VuZ2VyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZihhaXJwb3J0TWFwLmhhcyhgJHtkZXBhcnR1cmVJdGVtWzJdfSB0byAke2l0ZW0uYWlycG9ydH1gKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFpcnBvcnRNYXAuZ2V0KGAke2RlcGFydHVyZUl0ZW1bMl19IHRvICR7aXRlbS5haXJwb3J0fWApLnB1c2goW3BhcnNlSW50KGRlcGFydHVyZUl0ZW1bMV0pLHBhcnNlSW50KGl0ZW0udGltZXN0YW1wKV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBhaXJwb3J0TWFwLnNldChgJHtkZXBhcnR1cmVJdGVtWzJdfSB0byAke2l0ZW0uYWlycG9ydH1gLFtbcGFyc2VJbnQoZGVwYXJ0dXJlSXRlbVsxXSkscGFyc2VJbnQoaXRlbS50aW1lc3RhbXApXV0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgbWFwLnNldChpdGVtLnBhc3Nlbmdlck5hbWUsIFtpdGVtLnR5cGUsIGl0ZW0udGltZXN0YW1wLCBpdGVtLmFpcnBvcnRdKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWlycG9ydE1hcC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaWZmZXJlbmNlID0gMDtcclxuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlmZmVyZW5jZSArPSBpdGVtWzFdIC0gaXRlbVswXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5ld0Rpc3BsYXkucHVzaChrZXkgKyBcIiA6IFwiICsgZGlmZmVyZW5jZSArIFwiIHNlY1wiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldERpc3BsYXkobmV3RGlzcGxheSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWlycG9ydE1hcCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWFwKTtcclxuICAgIH0sIFtkYXRhXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGlzcGxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkJ1dHRvbjwvYnV0dG9uPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lQnV0dG9uOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRpbWVCdXR0b24iLCJwcm9wcyIsImRhdGEiLCJsb2dzIiwic2V0TG9ncyIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwibWFwIiwiTWFwIiwiYWlycG9ydE1hcCIsIm5ld0Rpc3BsYXkiLCJmb3JFYWNoIiwiaXRlbSIsImhhcyIsInBhc3Nlbmdlck5hbWUiLCJnZXQiLCJ0eXBlIiwiZGVwYXJ0dXJlSXRlbSIsImFpcnBvcnQiLCJwdXNoIiwicGFyc2VJbnQiLCJ0aW1lc3RhbXAiLCJzZXQiLCJ2YWx1ZSIsImtleSIsImRpZmZlcmVuY2UiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9