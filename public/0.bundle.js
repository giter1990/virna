(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/js/drop-header.js":
/*!*******************************!*\
  !*** ./src/js/drop-header.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Pages_Main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Pages/Main.js */ \"./src/Pages/Main.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nvar _default = function _default() {\n  function isElementInViewport(elem) {\n    var rect = elem.getBoundingClientRect();\n    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);\n  }\n\n  if (!isElementInViewport(_Pages_Main_js__WEBPACK_IMPORTED_MODULE_0__[\"promoControl\"]) && !_Pages_Main_js__WEBPACK_IMPORTED_MODULE_0__[\"header\"].classList.contains(\"header_active\")) {\n    _Pages_Main_js__WEBPACK_IMPORTED_MODULE_0__[\"header\"].classList.add(\"header_active\");\n    _Pages_Main_js__WEBPACK_IMPORTED_MODULE_0__[\"header\"].style.animation = \"drop 1.5s forwards\";\n  }\n\n  if (isElementInViewport(_Pages_Main_js__WEBPACK_IMPORTED_MODULE_0__[\"promoControl\"]) && _Pages_Main_js__WEBPACK_IMPORTED_MODULE_0__[\"header\"].classList.contains(\"header_active\")) {\n    _Pages_Main_js__WEBPACK_IMPORTED_MODULE_0__[\"header\"].classList.remove(\"header_active\");\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"D:\\\\\\u0417\\u0430\\u0440\\u0430\\u0431\\u043E\\u0442\\u043E\\u043A\\\\Front-End\\\\virna-case\\\\src\\\\js\\\\drop-header.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/js/drop-header.js?");

/***/ })

}]);