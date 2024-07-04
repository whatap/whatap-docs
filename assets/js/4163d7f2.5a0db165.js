(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[13648],{

/***/ 12931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _theme_ApiDoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39118);
/* harmony import */ var _theme_useSpecData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73803);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90062);





function CustomPage() {
    const specDataKo = (0,_theme_useSpecData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)('openapi-spec');
    const specDataEn = (0,_theme_useSpecData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)('openapi-spec-en');
    const specDataJa = (0,_theme_useSpecData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)('openapi-spec-ja');
    const { i18n: { currentLocale  } ,  } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)();
    if (currentLocale == 'ko') {
        var ref;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_ApiDoc__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
            layoutProps: {
                title: `${(ref = specDataKo.spec.info) === null || ref === void 0 ? void 0 : ref.title}`,
                description: 'Open API를 통해 수집 중인 모니터링 정보를 추출해 활용할 수 있습니다.'
            },
            specProps: specDataKo
        });
    } else if (currentLocale == 'en') {
        var ref1;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_ApiDoc__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
            layoutProps: {
                title: `${(ref1 = specDataEn.spec.info) === null || ref1 === void 0 ? void 0 : ref1.title}`,
                description: 'You can extract and use the monitoring data being collected through the Open API.'
            },
            specProps: specDataEn
        });
    } else if (currentLocale == 'ja') {
        var ref2;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_ApiDoc__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
            layoutProps: {
                title: `${(ref2 = specDataJa.spec.info) === null || ref2 === void 0 ? void 0 : ref2.title}`,
                description: 'Open APIを通じて収集中のモニタリング情報を抽出して活用することができます。'
            },
            specProps: specDataJa
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomPage);


/***/ }),

/***/ 26903:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 14834:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 20922:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 32413:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 81912:
/***/ (() => {

/* (ignored) */

/***/ })

}]);