"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_providers_MintbaseWalletContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/providers/MintbaseWalletContext */ \"./services/providers/MintbaseWalletContext.tsx\");\n/* harmony import */ var mintbase_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mintbase-ui */ \"./node_modules/mintbase-ui/dist/esm/index.js\");\n/* harmony import */ var _WalletConnectButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WalletConnectButton */ \"./components/WalletConnectButton.tsx\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Hero = function(param) {\n    var _title = param.title, title = _title === void 0 ? \"Build on your own Smart Contract\" : _title, _description = param.description, description = _description === void 0 ? \"Cheap & scalable infrastructure for your NFT project\" : _description;\n    _s();\n    var ref = (0,_services_providers_MintbaseWalletContext__WEBPACK_IMPORTED_MODULE_1__.useWallet)(), wallet = ref.wallet, isConnected = ref.isConnected, details = ref.details;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10 dark:bg-mb-background\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex flex-col gap-8 max-w-4xl mx-auto text-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mintbase_ui__WEBPACK_IMPORTED_MODULE_2__.MbText, {\n                        className: \"heading-130 text-white\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/koopon/client/components/Hero.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mintbase_ui__WEBPACK_IMPORTED_MODULE_2__.MbText, {\n                        className: \"text-white\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/koopon/client/components/Hero.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WalletConnectButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/mac/Documents/koopon/client/components/Hero.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/koopon/client/components/Hero.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/koopon/client/components/Hero.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Documents/koopon/client/components/Hero.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Hero, \"IDEmdESoXQV9dgWaB1U6Awii/gY=\", false, function() {\n    return [\n        _services_providers_MintbaseWalletContext__WEBPACK_IMPORTED_MODULE_1__.useWallet\n    ];\n});\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUV1RTtBQUNQO0FBSVQ7O0FBRXZELElBQU1HLElBQUksR0FBRyxnQkFBeUg7dUJBQXRIQyxLQUFLLEVBQUxBLEtBQUssdUJBQUcsa0NBQWtDLGdDQUFFQyxXQUFXLEVBQVhBLFdBQVcsNkJBQUcsc0RBQXNEOztJQUM5SCxJQUF5Q0wsR0FBVyxHQUFYQSxvRkFBUyxFQUFFLEVBQTVDTSxNQUFNLEdBQTJCTixHQUFXLENBQTVDTSxNQUFNLEVBQUVDLFdBQVcsR0FBY1AsR0FBVyxDQUFwQ08sV0FBVyxFQUFFQyxPQUFPLEdBQUtSLEdBQVcsQ0FBdkJRLE9BQU87SUFDcEMscUJBQ0U7a0JBQ0UsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHVGQUF1RjtzQkFDcEcsNEVBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyw0RUFBNEU7O2tDQUN6Riw4REFBQ1QsK0NBQU07d0JBQUNTLFNBQVMsRUFBQyx3QkFBd0I7a0NBQ3ZDTixLQUFLOzs7Ozs2QkFDQztrQ0FDVCw4REFBQ0gsK0NBQU07d0JBQUNTLFNBQVMsRUFBQyxZQUFZO2tDQUMzQkwsV0FBVzs7Ozs7NkJBQ0w7a0NBRVQsOERBQUNJLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw2QkFBNkI7a0NBQzFDLDRFQUFDUiw0REFBbUI7Ozs7aUNBQUc7Ozs7OzZCQUNuQjs7Ozs7O3FCQUNGOzs7OztpQkFDRjtxQkFDTCxDQUNKO0NBQ0Y7R0FwQktDLElBQUk7O1FBQ2lDSCxnRkFBUzs7O0FBRDlDRyxLQUFBQSxJQUFJO0FBc0JWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVyby50c3g/ZTc3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuXG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICcuLi9zZXJ2aWNlcy9wcm92aWRlcnMvTWludGJhc2VXYWxsZXRDb250ZXh0J1xuaW1wb3J0IHsgTWJCdXR0b24sIE1iQWN0aW9uLCBFU3RhdGUsIE1iVGV4dCB9IGZyb20gJ21pbnRiYXNlLXVpJ1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBXYWxsZXRDb25uZWN0QnV0dG9uIGZyb20gJy4vV2FsbGV0Q29ubmVjdEJ1dHRvbidcblxuY29uc3QgSGVybyA9ICh7IHRpdGxlID0gXCJCdWlsZCBvbiB5b3VyIG93biBTbWFydCBDb250cmFjdFwiLCBkZXNjcmlwdGlvbiA9IFwiQ2hlYXAgJiBzY2FsYWJsZSBpbmZyYXN0cnVjdHVyZSBmb3IgeW91ciBORlQgcHJvamVjdFwifSkgPT4ge1xuICBjb25zdCB7IHdhbGxldCwgaXNDb25uZWN0ZWQsIGRldGFpbHMgfSA9IHVzZVdhbGxldCgpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTI0IHB4LTYgYmctY292ZXIgYmctbm8tcmVwZWF0IGJnLWNlbnRlciByZWxhdGl2ZSB6LTEwIGRhcms6YmctbWItYmFja2dyb3VuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGdhcC04IG1heC13LTR4bCBteC1hdXRvIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPE1iVGV4dCBjbGFzc05hbWU9XCJoZWFkaW5nLTEzMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9NYlRleHQ+XG4gICAgICAgICAgPE1iVGV4dCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9NYlRleHQ+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPFdhbGxldENvbm5lY3RCdXR0b24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvXG4iXSwibmFtZXMiOlsidXNlV2FsbGV0IiwiTWJUZXh0IiwiV2FsbGV0Q29ubmVjdEJ1dHRvbiIsIkhlcm8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwid2FsbGV0IiwiaXNDb25uZWN0ZWQiLCJkZXRhaWxzIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Hero.tsx\n");

/***/ })

});