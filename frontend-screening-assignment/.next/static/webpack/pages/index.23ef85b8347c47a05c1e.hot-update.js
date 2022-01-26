"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_Users_supat_OneDrive_Documents_cleverse_frontend_Cleverse_Frontend_Assignment_frontend_screening_assignment_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_supat_OneDrive_Documents_cleverse_frontend_Cleverse_Frontend_Assignment_frontend_screening_assignment_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_supat_OneDrive_Documents_cleverse_frontend_Cleverse_Frontend_Assignment_frontend_screening_assignment_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_supat_OneDrive_Documents_cleverse_frontend_Cleverse_Frontend_Assignment_frontend_screening_assignment_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_supat_OneDrive_Documents_cleverse_frontend_Cleverse_Frontend_Assignment_frontend_screening_assignment_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_flight_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/flight-log */ "./src/flight-log.js");
/* harmony import */ var _src_LogCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/LogCard */ "./src/LogCard.js");
/* harmony import */ var _src_LogForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/LogForm */ "./src/LogForm.js");
/* harmony import */ var _src_AvgTimeButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/AvgTimeButton */ "./src/AvgTimeButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\supat\\OneDrive\\Documents\\cleverse-frontend\\Cleverse-Frontend-Assignment\\frontend-screening-assignment\\pages\\index.js",
    _s = $RefreshSig$();









 // import BoardingPassCard from "../src/BoardingPassCard";


var flightLogService = new _src_flight_log__WEBPACK_IMPORTED_MODULE_6__.FlightLogService();
function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      logs = _useState[0],
      setLogs = _useState[1];

  var handleAddLog = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (log) {
    // console.log("handled add log");
    // logs.push(log);
    setLogs([].concat((0,C_Users_supat_OneDrive_Documents_cleverse_frontend_Cleverse_Frontend_Assignment_frontend_screening_assignment_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(logs), [log]));
  }, [logs]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var fetch = /*#__PURE__*/function () {
      var _ref = (0,C_Users_supat_OneDrive_Documents_cleverse_frontend_Cleverse_Frontend_Assignment_frontend_screening_assignment_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_supat_OneDrive_Documents_cleverse_frontend_Cleverse_Frontend_Assignment_frontend_screening_assignment_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var data;
        return C_Users_supat_OneDrive_Documents_cleverse_frontend_Cleverse_Frontend_Assignment_frontend_screening_assignment_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return flightLogService.getLogs();

              case 2:
                data = _context.sent;
                setLogs(data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetch() {
        return _ref.apply(this, arguments);
      };
    }(); //  console.log("fetched");


    fetch();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),
        children: ["Welcome to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
          href: "https://nextjs.org",
          children: "Next Airline!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().description),
        children: ["Get started by editing", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("code", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().code),
          children: "pages/index.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().card),
        style: {
          margin: 16,
          width: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
          children: "Flight Logs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_src_LogCard__WEBPACK_IMPORTED_MODULE_7__.default, {
          style: {
            width: "100%"
          },
          data: logs
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().card),
        style: {
          margin: 16,
          width: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
          children: "Departure Logging"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_src_LogForm__WEBPACK_IMPORTED_MODULE_8__.default, {
          style: {
            width: "100%"
          },
          data: logs,
          type: "departure",
          onSubmit: handleAddLog
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().card),
        style: {
          margin: 16,
          width: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
          children: "Arrival Logging"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_src_LogForm__WEBPACK_IMPORTED_MODULE_8__.default, {
          style: {
            width: "100%"
          },
          data: logs,
          type: "arrival",
          onSubmit: handleAddLog
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        style: {
          margin: 16,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
          style: {
            textAlign: "center"
          },
          children: "Compute Time to Console"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_src_AvgTimeButton__WEBPACK_IMPORTED_MODULE_9__.default, {
          data: logs
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().footer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().logo),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
            src: "/vercel.svg",
            alt: "Vercel Logo",
            width: 72,
            height: 16
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(Home, "iZ1JUdkgO8gT/e+oq1pNz8XY/hI=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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


/***/ }),

/***/ "./src/AvgTimeButton.js":
/*!******************************!*\
  !*** ./src/AvgTimeButton.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\supat\\OneDrive\\Documents\\cleverse-frontend\\Cleverse-Frontend-Assignment\\frontend-screening-assignment\\src\\AvgTimeButton.js";


function TimeButton(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    children: "Button"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjNlZjg1YjgzNDdjNDdhMDVjMWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOzs7QUFFQSxJQUFNVSxnQkFBZ0IsR0FBRyxJQUFJSiw2REFBSixFQUF6QjtBQUVlLFNBQVNLLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isa0JBQXdCViwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPVyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFFQSxNQUFNQyxZQUFZLEdBQUdkLGtEQUFXLENBQzlCLFVBQUNlLEdBQUQsRUFBUztBQUNQO0FBQ0E7QUFDQUYsSUFBQUEsT0FBTywyTkFBS0QsSUFBTCxJQUFVRyxHQUFWLEdBQVA7QUFDRCxHQUw2QixFQU05QixDQUFDSCxJQUFELENBTjhCLENBQWhDO0FBU0FWLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1jLEtBQUs7QUFBQSwrYUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNPTixnQkFBZ0IsQ0FBQ08sT0FBakIsRUFEUDs7QUFBQTtBQUNOQyxnQkFBQUEsSUFETTtBQUVaTCxnQkFBQUEsT0FBTyxDQUFDSyxJQUFELENBQVA7O0FBRlk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBTEYsS0FBSztBQUFBO0FBQUE7QUFBQSxPQUFYLENBRGMsQ0FNZDs7O0FBQ0FBLElBQUFBLEtBQUs7QUFDTixHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVYLDJFQUFoQjtBQUFBLDRCQUNFLCtEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7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O0FBQUEsY0E5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUErQ0U7QUFBUSxlQUFTLEVBQUVQLHdFQUFuQjtBQUFBLDZCQUNFO0FBQ0UsWUFBSSxFQUFDLHdHQURQO0FBRUUsY0FBTSxFQUFDLFFBRlQ7QUFHRSxXQUFHLEVBQUMscUJBSE47QUFBQSxpQ0FLYSxHQUxiLGVBTUU7QUFBTSxtQkFBUyxFQUFFQSxzRUFBakI7QUFBQSxpQ0FDRSwrREFBQyxtREFBRDtBQUFPLGVBQUcsRUFBQyxhQUFYO0FBQXlCLGVBQUcsRUFBQyxhQUE3QjtBQUEyQyxpQkFBSyxFQUFFLEVBQWxEO0FBQXNELGtCQUFNLEVBQUU7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThERDs7R0FwRnVCTTs7S0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnhCLFNBQVNGLFVBQVQsQ0FBb0J5QixLQUFwQixFQUEyQjtBQUN2QixzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0tBRlF6QjtBQUlULCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvQXZnVGltZUJ1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEZsaWdodExvZ1NlcnZpY2UgfSBmcm9tIFwiLi4vc3JjL2ZsaWdodC1sb2dcIjtcclxuaW1wb3J0IExvZ0NhcmQgZnJvbSBcIi4uL3NyYy9Mb2dDYXJkXCI7XHJcbmltcG9ydCBMb2dGb3JtIGZyb20gXCIuLi9zcmMvTG9nRm9ybVwiO1xyXG5pbXBvcnQgVGltZUJ1dHRvbiBmcm9tIFwiLi4vc3JjL0F2Z1RpbWVCdXR0b25cIjtcclxuLy8gaW1wb3J0IEJvYXJkaW5nUGFzc0NhcmQgZnJvbSBcIi4uL3NyYy9Cb2FyZGluZ1Bhc3NDYXJkXCI7XHJcblxyXG5jb25zdCBmbGlnaHRMb2dTZXJ2aWNlID0gbmV3IEZsaWdodExvZ1NlcnZpY2UoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2xvZ3MsIHNldExvZ3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRMb2cgPSB1c2VDYWxsYmFjayhcclxuICAgIChsb2cpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJoYW5kbGVkIGFkZCBsb2dcIik7XHJcbiAgICAgIC8vIGxvZ3MucHVzaChsb2cpO1xyXG4gICAgICBzZXRMb2dzKFsuLi5sb2dzLGxvZ10pO1xyXG4gICAgfSxcclxuICAgIFtsb2dzXVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZsaWdodExvZ1NlcnZpY2UuZ2V0TG9ncygpO1xyXG4gICAgICBzZXRMb2dzKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyAgY29uc29sZS5sb2coXCJmZXRjaGVkXCIpO1xyXG4gICAgZmV0Y2goKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICBXZWxjb21lIHRvIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5OZXh0IEFpcmxpbmUhPC9hPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgR2V0IHN0YXJ0ZWQgYnkgZWRpdGluZ3tcIiBcIn1cclxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9PnBhZ2VzL2luZGV4LmpzPC9jb2RlPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IHN0eWxlPXt7IG1hcmdpbjogMTYsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxoMj5GbGlnaHQgTG9nczwvaDI+XHJcbiAgICAgICAgICA8TG9nQ2FyZCBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gZGF0YT17bG9nc30+PC9Mb2dDYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gc3R5bGU9e3sgbWFyZ2luOiAxNiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGgyPkRlcGFydHVyZSBMb2dnaW5nPC9oMj5cclxuICAgICAgICAgIDxMb2dGb3JtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBkYXRhPXtsb2dzfVxyXG4gICAgICAgICAgICB0eXBlPXtcImRlcGFydHVyZVwifVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlQWRkTG9nfVxyXG4gICAgICAgICAgPjwvTG9nRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IHN0eWxlPXt7IG1hcmdpbjogMTYsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxoMj5BcnJpdmFsIExvZ2dpbmc8L2gyPlxyXG4gICAgICAgICAgPExvZ0Zvcm1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIGRhdGE9e2xvZ3N9XHJcbiAgICAgICAgICAgIHR5cGU9e1wiYXJyaXZhbFwifVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlQWRkTG9nfVxyXG4gICAgICAgICAgPjwvTG9nRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogMTYsIHdpZHRoOiBcIjEwMCVcIiwgZGlzcGxheTpcImZsZXhcIiwgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+Q29tcHV0ZSBUaW1lIHRvIENvbnNvbGU8L2gyPlxyXG4gICAgICAgICAgPFRpbWVCdXR0b24gZGF0YT17bG9nc30+PC9UaW1lQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBSZW5kZXIgYm9hcmRpbmcgcGFzcyBoZXJlICovfVxyXG4gICAgICAgIHsvKiB7W10ubWFwKChfLCBpKSA9PiAoICovfVxyXG4gICAgICAgIHsvKiAgIDxCb2FyZGluZ1Bhc3NDYXJkIGtleT17aX0gLz4gKi99XHJcbiAgICAgICAgey8qICkpfSAqL31cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImZ1bmN0aW9uIFRpbWVCdXR0b24ocHJvcHMpIHtcclxuICAgIHJldHVybiA8YnV0dG9uPkJ1dHRvbjwvYnV0dG9uPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lQnV0dG9uOyJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiRmxpZ2h0TG9nU2VydmljZSIsIkxvZ0NhcmQiLCJMb2dGb3JtIiwiVGltZUJ1dHRvbiIsImZsaWdodExvZ1NlcnZpY2UiLCJIb21lIiwibG9ncyIsInNldExvZ3MiLCJoYW5kbGVBZGRMb2ciLCJsb2ciLCJmZXRjaCIsImdldExvZ3MiLCJkYXRhIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwiY2FyZCIsIm1hcmdpbiIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJmb290ZXIiLCJsb2dvIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9