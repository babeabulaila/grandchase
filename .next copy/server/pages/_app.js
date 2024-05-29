/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vercel/analytics/react */ \"@vercel/analytics/react\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors/injected */ \"wagmi/connectors/injected\");\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/walletConnect */ \"wagmi/connectors/walletConnect\");\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/infura */ \"wagmi/providers/infura\");\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__]);\n_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n// import { useState, useEffect } from \"react\";\nconst infuraId = process.env.INFURA_ENDPOINT;\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.rinkeby,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.goerli\n], [\n    (0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__.infuraProvider)({\n        infuraId\n    })\n]);\nconst connectors = [\n    new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__.InjectedConnector({\n        chains,\n        options: {\n            shimDisconnect: true\n        }\n    }),\n    new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_5__.WalletConnectConnector({\n        options: {\n            infuraId,\n            qrcode: true\n        }\n    })\n];\nconst client = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n        client: client,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/abeab/Development/code/2023/grandchase/pages/_app.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_2__.Analytics, {}, void 0, false, {\n                fileName: \"/home/abeab/Development/code/2023/grandchase/pages/_app.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/abeab/Development/code/2023/grandchase/pages/_app.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFFcUI7QUFPckM7QUFDK0M7QUFDVTtBQUNoQjtBQUN4RCwrQ0FBK0M7QUFFL0MsTUFBTVEsV0FBV0MsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0FBRTVDLE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR1Ysc0RBQWVBLENBQzFDO0lBQUNDLGdEQUFhO0lBQUVBLGdEQUFhO0lBQUVBLCtDQUFZO0NBQUMsRUFDNUM7SUFBQ0csc0VBQWNBLENBQUM7UUFBRUM7SUFBUztDQUFHO0FBR2hDLE1BQU1TLGFBQWE7SUFDakIsSUFBSVosd0VBQWlCQSxDQUFDO1FBQ3BCTztRQUNBTSxTQUFTO1lBQUVDLGdCQUFnQixJQUFJO1FBQUM7SUFDbEM7SUFDQSxJQUFJYixrRkFBc0JBLENBQUM7UUFDekJZLFNBQVM7WUFDUFY7WUFDQVksUUFBUSxJQUFJO1FBQ2Q7SUFDRjtDQUNEO0FBRUQsTUFBTUMsU0FBU25CLG1EQUFZQSxDQUFDO0lBQzFCb0IsYUFBYSxJQUFJO0lBQ2pCTDtJQUNBSjtBQUNGO0FBR0EsU0FBU1UsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDeEIsOENBQVdBO1FBQUNvQixRQUFRQTs7MEJBQ25CLDhEQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDekIsOERBQVNBOzs7Ozs7Ozs7OztBQUdoQjtBQUVBLGlFQUFldUIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYW5kLWNoYXNlLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IEFuYWx5dGljcyB9IGZyb20gJ0B2ZXJjZWwvYW5hbHl0aWNzL3JlYWN0JztcbmltcG9ydCB7XG4gIFdhZ21pQ29uZmlnLFxuICBjcmVhdGVDbGllbnQsXG4gIGRlZmF1bHRDaGFpbnMsXG4gIGNvbmZpZ3VyZUNoYWlucyxcbiAgY2hhaW4sXG59IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tIFwid2FnbWkvY29ubmVjdG9ycy9pbmplY3RlZFwiO1xuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL3dhbGxldENvbm5lY3RcIjtcbmltcG9ydCB7IGluZnVyYVByb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9pbmZ1cmFcIjtcbi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaW5mdXJhSWQgPSBwcm9jZXNzLmVudi5JTkZVUkFfRU5EUE9JTlQ7XG5cbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbY2hhaW4ubWFpbm5ldCwgY2hhaW4ucmlua2VieSwgY2hhaW4uZ29lcmxpXSxcbiAgW2luZnVyYVByb3ZpZGVyKHsgaW5mdXJhSWQgfSldXG4pO1xuXG5jb25zdCBjb25uZWN0b3JzID0gW1xuICBuZXcgSW5qZWN0ZWRDb25uZWN0b3Ioe1xuICAgIGNoYWlucyxcbiAgICBvcHRpb25zOiB7IHNoaW1EaXNjb25uZWN0OiB0cnVlIH0sXG4gIH0pLFxuICBuZXcgV2FsbGV0Q29ubmVjdENvbm5lY3Rvcih7XG4gICAgb3B0aW9uczoge1xuICAgICAgaW5mdXJhSWQsXG4gICAgICBxcmNvZGU6IHRydWUsXG4gICAgfSxcbiAgfSksXG5dO1xuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXIsXG59KTtcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFdhZ21pQ29uZmlnIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxBbmFseXRpY3MgLz5cbiAgICA8L1dhZ21pQ29uZmlnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiQW5hbHl0aWNzIiwiV2FnbWlDb25maWciLCJjcmVhdGVDbGllbnQiLCJjb25maWd1cmVDaGFpbnMiLCJjaGFpbiIsIkluamVjdGVkQ29ubmVjdG9yIiwiV2FsbGV0Q29ubmVjdENvbm5lY3RvciIsImluZnVyYVByb3ZpZGVyIiwiaW5mdXJhSWQiLCJwcm9jZXNzIiwiZW52IiwiSU5GVVJBX0VORFBPSU5UIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJtYWlubmV0Iiwicmlua2VieSIsImdvZXJsaSIsImNvbm5lY3RvcnMiLCJvcHRpb25zIiwic2hpbURpc2Nvbm5lY3QiLCJxcmNvZGUiLCJjbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/connectors/injected":
/*!********************************************!*\
  !*** external "wagmi/connectors/injected" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/injected");

/***/ }),

/***/ "wagmi/connectors/walletConnect":
/*!*************************************************!*\
  !*** external "wagmi/connectors/walletConnect" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/connectors/walletConnect");

/***/ }),

/***/ "wagmi/providers/infura":
/*!*****************************************!*\
  !*** external "wagmi/providers/infura" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/infura");

/***/ }),

/***/ "@vercel/analytics/react":
/*!******************************************!*\
  !*** external "@vercel/analytics/react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();