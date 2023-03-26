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

/***/ "./components/LineChart/index.js":
/*!***************************************!*\
  !*** ./components/LineChart/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LineChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LineChart_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LineChart.module.css */ \"./components/LineChart/LineChart.module.css\");\n/* harmony import */ var _LineChart_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LineChart_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nfunction LineChart() {\n    _s();\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        datasets: []\n    });\n    const [chartOptions, setChartOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setChartData({\n            labels: [\n                \"2017\",\n                \"2018\",\n                \"2019\",\n                \"2020\",\n                \"2021\"\n            ],\n            datasets: [\n                {\n                    label: \"Operating revenue ( x 1,000,000)\",\n                    data: [\n                        2968.8,\n                        3307.1,\n                        3565.1,\n                        3331.1,\n                        3797.8\n                    ],\n                    borderColor: \"rgb(53,162,235)\",\n                    backgroundColor: \"rgba(53,162,235,0.4)\"\n                },\n                {\n                    label: \"Operating expenses ( x 1,000,000)\",\n                    data: [\n                        2291.7,\n                        2592.0,\n                        2772.3,\n                        2516.9,\n                        2877.4\n                    ],\n                    borderColor: \"rgb(53,162,235)\",\n                    backgroundColor: \"rgba(53,162,235,0.4)\"\n                },\n                {\n                    label: \"Salaries, wages, commissions and benefits ( x 1,000,000)\",\n                    data: [\n                        767,\n                        850.7,\n                        927.8,\n                        813.3,\n                        876.9\n                    ],\n                    borderColor: \"rgb(53,162,235)\",\n                    backgroundColor: \"rgba(53,162,235,0.4)\"\n                }\n            ]\n        });\n        setChartOptions({\n            plugins: {\n                legend: {\n                    position: \"top\"\n                },\n                title: {\n                    display: true,\n                    text: \"Motion picture and video production in Canada\"\n                }\n            },\n            maintainAspectRatio: false,\n            responsive: true\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_LineChart_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n                data: chartData,\n                options: chartOptions\n            }, void 0, false, {\n                fileName: \"/Users/sebin/Desktop/MDIA2109-week12/components/LineChart/index.js\",\n                lineNumber: 78,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/sebin/Desktop/MDIA2109-week12/components/LineChart/index.js\",\n            lineNumber: 77,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(LineChart, \"nAdLz3AwpvS/EuWXlxA622hYe3Y=\");\n_c = LineChart;\nvar _c;\n$RefreshReg$(_c, \"LineChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmVDaGFydC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNEO0FBRUw7QUFVckI7QUFFakJLLG9EQUFnQixDQUNaQyxtREFBYUEsRUFDYkMsaURBQVdBLEVBQ1hDLGtEQUFZQSxFQUNaQyxpREFBV0EsRUFDWEMsMkNBQUtBLEVBQ0xDLDZDQUFPQSxFQUNQQyw0Q0FBTUE7QUFHSyxTQUFTRSxZQUFXOztJQUUvQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO1FBQ3ZDaUIsVUFBUyxFQUFFO0lBQ2Y7SUFFQSxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHbkIsK0NBQVFBLENBQUMsQ0FBQztJQUVsREMsZ0RBQVNBLENBQUMsSUFBTTtRQUNaZSxhQUFhO1lBQ1RJLFFBQVE7Z0JBQUM7Z0JBQVE7Z0JBQVE7Z0JBQVE7Z0JBQVE7YUFBTztZQUNoREgsVUFBVTtnQkFDTjtvQkFDSUksT0FBTztvQkFDUEMsTUFBTTt3QkFBQzt3QkFBUTt3QkFBUTt3QkFBUTt3QkFBUztxQkFBTztvQkFDL0NDLGFBQWE7b0JBQ2JDLGlCQUFpQjtnQkFDckI7Z0JBQ0E7b0JBQ0lILE9BQU87b0JBQ1BDLE1BQU07d0JBQUM7d0JBQVE7d0JBQVE7d0JBQVE7d0JBQVE7cUJBQU87b0JBQzlDQyxhQUFhO29CQUNiQyxpQkFBaUI7Z0JBQ3JCO2dCQUNBO29CQUNJSCxPQUFPO29CQUNQQyxNQUFNO3dCQUFDO3dCQUFLO3dCQUFPO3dCQUFPO3dCQUFPO3FCQUFNO29CQUN2Q0MsYUFBYTtvQkFDYkMsaUJBQWlCO2dCQUNyQjthQUNIO1FBQ0w7UUFFQUwsZ0JBQWdCO1lBQ1pNLFNBQVM7Z0JBQ0xDLFFBQVE7b0JBQ0pDLFVBQVU7Z0JBQ2Q7Z0JBQ0FDLE9BQU87b0JBQ0hDLFNBQVMsSUFBSTtvQkFDYkMsTUFBTTtnQkFDVjtZQUNKO1lBQ0FDLHFCQUFxQixLQUFLO1lBQzFCQyxZQUFZLElBQUk7UUFDcEI7SUFFSixHQUFHLEVBQUU7SUFFTCxxQkFDSTtrQkFDSSw0RUFBQ0M7WUFBSUMsV0FBV2hDLHdFQUFnQjtzQkFDNUIsNEVBQUNDLGlEQUFJQTtnQkFBQ21CLE1BQU1QO2dCQUFXcUIsU0FBU2xCOzs7Ozs7Ozs7Ozs7QUFJaEQsQ0FBQztHQXhEdUJKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGluZUNoYXJ0L2luZGV4LmpzPzY1NTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpbmVDaGFydC5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xuaW1wb3J0IHtcbiAgICBDaGFydCBhcyBDaGFydEpTLFxuICAgIENhdGVnb3J5U2NhbGUsXG4gICAgTGluZWFyU2NhbGUsXG4gICAgUG9pbnRFbGVtZW50LFxuICAgIExpbmVFbGVtZW50LFxuICAgIFRpdGxlLFxuICAgIFRvb2x0aXAsXG4gICAgTGVnZW5kXG59IGZyb20gJ2NoYXJ0LmpzJ1xuXG5DaGFydEpTLnJlZ2lzdGVyKFxuICAgIENhdGVnb3J5U2NhbGUsXG4gICAgTGluZWFyU2NhbGUsXG4gICAgUG9pbnRFbGVtZW50LFxuICAgIExpbmVFbGVtZW50LFxuICAgIFRpdGxlLFxuICAgIFRvb2x0aXAsXG4gICAgTGVnZW5kXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpbmVDaGFydCgpe1xuXG4gICAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZGF0YXNldHM6W11cbiAgICB9KVxuXG4gICAgY29uc3QgW2NoYXJ0T3B0aW9ucywgc2V0Q2hhcnRPcHRpb25zXSA9IHVzZVN0YXRlKHt9KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENoYXJ0RGF0YSh7XG4gICAgICAgICAgICBsYWJlbHM6IFtcIjIwMTdcIiwgXCIyMDE4XCIsIFwiMjAxOVwiLCBcIjIwMjBcIiwgXCIyMDIxXCJdLFxuICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnT3BlcmF0aW5nIHJldmVudWUgKCB4IDEsMDAwLDAwMCknLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMjk2OC44LCAzMzA3LjEsIDM1NjUuMSwgMzMzMS4xICwgMzc5Ny44XSxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoNTMsMTYyLDIzNSknLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDUzLDE2MiwyMzUsMC40KSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdPcGVyYXRpbmcgZXhwZW5zZXMgKCB4IDEsMDAwLDAwMCknLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMjI5MS43LCAyNTkyLjAsIDI3NzIuMywgMjUxNi45LCAyODc3LjRdLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYig1MywxNjIsMjM1KScsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNTMsMTYyLDIzNSwwLjQpJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NhbGFyaWVzLCB3YWdlcywgY29tbWlzc2lvbnMgYW5kIGJlbmVmaXRzICggeCAxLDAwMCwwMDApJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzc2NywgODUwLjcsIDkyNy44LCA4MTMuMywgODc2LjldLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYig1MywxNjIsMjM1KScsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNTMsMTYyLDIzNSwwLjQpJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSlcblxuICAgICAgICBzZXRDaGFydE9wdGlvbnMoe1xuICAgICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTW90aW9uIHBpY3R1cmUgYW5kIHZpZGVvIHByb2R1Y3Rpb24gaW4gQ2FuYWRhXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICB9LCBbXSlcblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT4gXG4gICAgICAgICAgICAgICAgPExpbmUgZGF0YT17Y2hhcnREYXRhfSBvcHRpb25zPXtjaGFydE9wdGlvbnN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkxpbmUiLCJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsInJlZ2lzdGVyIiwiTGluZUNoYXJ0IiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwiZGF0YXNldHMiLCJjaGFydE9wdGlvbnMiLCJzZXRDaGFydE9wdGlvbnMiLCJsYWJlbHMiLCJsYWJlbCIsImRhdGEiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsInBsdWdpbnMiLCJsZWdlbmQiLCJwb3NpdGlvbiIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicmVzcG9uc2l2ZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LineChart/index.js\n"));

/***/ })

});