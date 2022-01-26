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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_flight_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/flight-log */ "./src/flight-log.js");
/* harmony import */ var _src_LogCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/LogCard */ "./src/LogCard.js");
/* harmony import */ var _src_LogForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/LogForm */ "./src/LogForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
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
    console.log("handled add log"); // logs.push(log);

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
    }();

    fetch();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),
        children: ["Welcome to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
          href: "https://nextjs.org",
          children: "Next Airline!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().description),
        children: ["Get started by editing", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("code", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().code),
          children: "pages/index.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().card),
        style: {
          margin: 16,
          width: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
          children: "Flight Logs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_src_LogCard__WEBPACK_IMPORTED_MODULE_7__.default, {
          style: {
            width: "100%"
          },
          data: logs
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().card),
        style: {
          margin: 16,
          width: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
          children: "Departure Logging"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_src_LogForm__WEBPACK_IMPORTED_MODULE_8__.default, {
          style: {
            width: "100%"
          },
          data: logs,
          type: "departure",
          onSubmit: handleAddLog
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().card),
        style: {
          margin: 16,
          width: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
          children: "Arrival Logging"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_src_LogForm__WEBPACK_IMPORTED_MODULE_8__.default, {
          style: {
            width: "100%"
          },
          data: logs,
          type: "arrival",
          onSubmit: handleAddLog
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().footer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().logo),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
            src: "/vercel.svg",
            alt: "Vercel Logo",
            width: 72,
            height: 16
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDZmMzNlYjZkYWI4ODYzOGNjMTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOzs7QUFFQSxJQUFNUyxnQkFBZ0IsR0FBRyxJQUFJSCw2REFBSixFQUF6QjtBQUVlLFNBQVNJLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isa0JBQXdCVCwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPVSxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFFQSxNQUFNQyxZQUFZLEdBQUdiLGtEQUFXLENBQzlCLFVBQUNjLEdBQUQsRUFBUztBQUNQQyxJQUFBQSxPQUFPLENBQUNELEdBQVIsQ0FBWSxpQkFBWixFQURPLENBRVA7O0FBQ0FGLElBQUFBLE9BQU8sMk5BQUtELElBQUwsSUFBVUcsR0FBVixHQUFQO0FBQ0QsR0FMNkIsRUFNOUIsQ0FBQ0gsSUFBRCxDQU44QixDQUFoQztBQVNBVCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNYyxLQUFLO0FBQUEsK2FBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDT1AsZ0JBQWdCLENBQUNRLE9BQWpCLEVBRFA7O0FBQUE7QUFDTkMsZ0JBQUFBLElBRE07QUFFWk4sZ0JBQUFBLE9BQU8sQ0FBQ00sSUFBRCxDQUFQOztBQUZZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQUxGLEtBQUs7QUFBQTtBQUFBO0FBQUEsT0FBWDs7QUFLQUEsSUFBQUEsS0FBSztBQUNOLEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVgsMkVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVB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O0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwREQ7O0dBL0V1Qks7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgRmxpZ2h0TG9nU2VydmljZSB9IGZyb20gXCIuLi9zcmMvZmxpZ2h0LWxvZ1wiO1xyXG5pbXBvcnQgTG9nQ2FyZCBmcm9tIFwiLi4vc3JjL0xvZ0NhcmRcIjtcclxuaW1wb3J0IExvZ0Zvcm0gZnJvbSBcIi4uL3NyYy9Mb2dGb3JtXCI7XHJcbi8vIGltcG9ydCBCb2FyZGluZ1Bhc3NDYXJkIGZyb20gXCIuLi9zcmMvQm9hcmRpbmdQYXNzQ2FyZFwiO1xyXG5cclxuY29uc3QgZmxpZ2h0TG9nU2VydmljZSA9IG5ldyBGbGlnaHRMb2dTZXJ2aWNlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtsb2dzLCBzZXRMb2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkTG9nID0gdXNlQ2FsbGJhY2soXHJcbiAgICAobG9nKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlZCBhZGQgbG9nXCIpO1xyXG4gICAgICAvLyBsb2dzLnB1c2gobG9nKTtcclxuICAgICAgc2V0TG9ncyhbLi4ubG9ncyxsb2ddKTtcclxuICAgIH0sXHJcbiAgICBbbG9nc11cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmbGlnaHRMb2dTZXJ2aWNlLmdldExvZ3MoKTtcclxuICAgICAgc2V0TG9ncyhkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2goKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICBXZWxjb21lIHRvIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5OZXh0IEFpcmxpbmUhPC9hPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgR2V0IHN0YXJ0ZWQgYnkgZWRpdGluZ3tcIiBcIn1cclxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT17c3R5bGVzLmNvZGV9PnBhZ2VzL2luZGV4LmpzPC9jb2RlPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IHN0eWxlPXt7IG1hcmdpbjogMTYsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxoMj5GbGlnaHQgTG9nczwvaDI+XHJcbiAgICAgICAgICA8TG9nQ2FyZCBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gZGF0YT17bG9nc30+PC9Mb2dDYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gc3R5bGU9e3sgbWFyZ2luOiAxNiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgPGgyPkRlcGFydHVyZSBMb2dnaW5nPC9oMj5cclxuICAgICAgICAgIDxMb2dGb3JtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICBkYXRhPXtsb2dzfVxyXG4gICAgICAgICAgICB0eXBlPXtcImRlcGFydHVyZVwifVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlQWRkTG9nfVxyXG4gICAgICAgICAgPjwvTG9nRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IHN0eWxlPXt7IG1hcmdpbjogMTYsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgIDxoMj5BcnJpdmFsIExvZ2dpbmc8L2gyPlxyXG4gICAgICAgICAgPExvZ0Zvcm1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgIGRhdGE9e2xvZ3N9XHJcbiAgICAgICAgICAgIHR5cGU9e1wiYXJyaXZhbFwifVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlQWRkTG9nfVxyXG4gICAgICAgICAgPjwvTG9nRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogUmVuZGVyIGJvYXJkaW5nIHBhc3MgaGVyZSAqL31cclxuICAgICAgICB7Lyoge1tdLm1hcCgoXywgaSkgPT4gKCAqL31cclxuICAgICAgICB7LyogICA8Qm9hcmRpbmdQYXNzQ2FyZCBrZXk9e2l9IC8+ICovfVxyXG4gICAgICAgIHsvKiApKX0gKi99XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIHdpZHRoPXs3Mn0gaGVpZ2h0PXsxNn0gLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIkZsaWdodExvZ1NlcnZpY2UiLCJMb2dDYXJkIiwiTG9nRm9ybSIsImZsaWdodExvZ1NlcnZpY2UiLCJIb21lIiwibG9ncyIsInNldExvZ3MiLCJoYW5kbGVBZGRMb2ciLCJsb2ciLCJjb25zb2xlIiwiZmV0Y2giLCJnZXRMb2dzIiwiZGF0YSIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29kZSIsImNhcmQiLCJtYXJnaW4iLCJ3aWR0aCIsImZvb3RlciIsImxvZ28iXSwic291cmNlUm9vdCI6IiJ9