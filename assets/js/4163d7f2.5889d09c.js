"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["57472"], {
"31774": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var _theme_ApiDoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42376);
/* ESM import */var _theme_useSpecData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13849);
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2933);





function CustomPage() {
    const specDataKo = (0,_theme_useSpecData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z)('openapi-spec');
    const specDataEn = (0,_theme_useSpecData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z)('openapi-spec-en');
    const specDataJa = (0,_theme_useSpecData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z)('openapi-spec-ja');
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z)();
    if (currentLocale == 'ko') {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_ApiDoc__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
            layoutProps: {
                title: `${specDataKo.spec.info?.title}`,
                description: 'Open API를 통해 수집 중인 모니터링 정보를 추출해 활용할 수 있습니다.'
            },
            specProps: specDataKo
        });
    } else if (currentLocale == 'en') {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_ApiDoc__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
            layoutProps: {
                title: `${specDataEn.spec.info?.title}`,
                description: 'You can extract and use the monitoring data being collected through the Open API.'
            },
            specProps: specDataEn
        });
    } else if (currentLocale == 'ja') {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_ApiDoc__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
            layoutProps: {
                title: `${specDataJa.spec.info?.title}`,
                description: 'Open APIを通じて収集中のモニタリング情報を抽出して活用することができます。'
            },
            specProps: specDataJa
        });
    }
}
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomPage);


}),
"73696": (function () {
/* (ignored) */

}),
"2187": (function () {
/* (ignored) */

}),
"13045": (function () {
/* (ignored) */

}),
"54982": (function () {
/* (ignored) */

}),
"12776": (function () {
/* (ignored) */

}),

}]);