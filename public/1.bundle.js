(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/js/toggle-lang.js":
/*!*******************************!*\
  !*** ./src/js/toggle-lang.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar _default = function _default() {\n  document.addEventListener(\"click\", function (e) {\n    var listLang = document.querySelectorAll(\"#js-list-promo, #js-list-header, #js-list-screen\"),\n        arrow = document.querySelectorAll(\"#js-arrow-lang-promo, #js-arrow-lang-header, #js-arrow-lang-screen\"),\n        target = e.target.parentNode;\n    arrow.forEach(function (item) {\n      if (e.target === item) {\n        target = target.parentNode;\n      }\n    });\n    listLang.forEach(function (item, i) {\n      if (item.classList.contains(\"language__list_visible\") && item.parentNode !== target) {\n        item.classList.remove(\"language__list_visible\");\n        arrow[i].style.animation = \"rotate-close 1.5s forwards\";\n        arrow[i].classList.toggle(\"language__arrow_active\");\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"D:\\\\\\u0417\\u0430\\u0440\\u0430\\u0431\\u043E\\u0442\\u043E\\u043A\\\\Front-End\\\\virna-case\\\\src\\\\js\\\\toggle-lang.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/js/toggle-lang.js?");

/***/ })

}]);