"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["61736"], {
"97265": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// extracted by css-extract-rspack-plugin
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"cover":"cover_pH_9","date":"date_tEOk","background":"background_XwPs"});

}),
"11475": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return Cover; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88714);
/* ESM import */var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4757);
/* ESM import */var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97265);
/* ESM import */var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94819);






function Cover() {
    const bgPath = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.ZP)('/img/cover-background.png');
    const cover = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.ZP)('/mongodb/monitoring-intro');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "cover-page",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5__/* ["default"].cover */.Z.cover,
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '770px',
                            width: '524px',
                            fontSize: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                children: "MongoDB Monitoring"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5__/* ["default"].date */.Z.date,
                                children: "release date. 2024.12.02"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5__/* ["default"].background */.Z.background,
                                src: bgPath
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                        class: "pagination-nav__link pagination-nav__link--next",
                        href: cover,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            class: "pagination-nav__sublabel",
                            children: "다음"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        class: "page-break"
                    })
                ]
            })
        ]
    });
}


}),

}]);