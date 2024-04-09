"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[41912],{

/***/ 59041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Cover)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 66 modules
var Layout = __webpack_require__(77568);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(92469);
;// CONCATENATED MODULE: ./src/pages/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"cover":"cover_YHbb","date":"date_i2YJ","background":"background_kXXr"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(3248);
;// CONCATENATED MODULE: ./src/pages/cover-java.js






function Cover() {
    const bgPath = (0,useBaseUrl/* default */.A)('/img/cover-background.png');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Head/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "cover-page",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.cover,
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '770px',
                            width: '524px',
                            fontSize: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                children: "Java 모니터링"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: styles_module.date,
                                children: "WhaTap Docs 2024.04.02"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: styles_module.background,
                                src: bgPath
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                        class: "pagination-nav__link pagination-nav__link--next",
                        href: "/whatap-docs/best-practice-guides/about-apm-hitmap-class",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            class: "pagination-nav__sublabel",
                            children: "다음"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        class: "page-break"
                    })
                ]
            })
        ]
    });
}


/***/ })

}]);