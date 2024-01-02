"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[61482],{

/***/ 8934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33181);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13554);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56843);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71182);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93080);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34859);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31171);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5963);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24156);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14606);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77723);
/* harmony import */ var _meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32608);
/* harmony import */ var _meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31984);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92210);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8241);








function App() {
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const lang = currentLocale;
    const docsURL = "https://docs.whatap.io";
    const { searchClient } = (0,_meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_5__.instantMeiliSearch)('https://meilsearch.whatap.io', 'dgoMBc2t6fVzILDGqhh63uBXACGOmJbKNnE_Xv8_Hqk', {
        placeholderSearch: false,
        finitePagination: true
    });
    const Hit = ({ hit })=>{
        const titles = [
            hit.hierarchy_radio_lvl0,
            hit.hierarchy_radio_lvl1,
            hit.hierarchy_radio_lvl2,
            hit.hierarchy_radio_lvl3,
            hit.hierarchy_radio_lvl4,
            hit.hierarchy_radio_lvl5
        ];
        const title = titles.filter((element, i)=>element !== null);
        const durl = hit.url.replace(docsURL, "").replace("#__docusaurus_skipToContent_fallback", "");
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            key: hit.id
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            to: durl
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, title[0]), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "hit-breadcrums"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "hit-name lvl0"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            attribute: "hierarchy_lvl0",
            hit: hit
        })), hit.hierarchy_lvl1 && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "hit-name"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            attribute: "hierarchy_lvl1",
            hit: hit
        })), hit.hierarchy_lvl2 && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "hit-name"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            attribute: "hierarchy_lvl2",
            hit: hit
        })), hit.hierarchy_lvl3 && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "hit-name"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            attribute: "hierarchy_lvl3",
            hit: hit
        })), hit.hierarchy_lvl4 && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "hit-name"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            attribute: "hierarchy_lvl4",
            hit: hit
        })), hit.hierarchy_lvl5 && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "hit-name last"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            attribute: "hierarchy_lvl5",
            hit: hit
        })))), hit.content && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
            className: "hit-name"
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            attribute: "content",
            hit: hit
        })));
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ais-InstantSearch"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_3__/* .translate */ .I)({
        id: 'theme.SearchPage.emptyResultsTitle',
        message: 'Search the documentation',
        description: 'The search page title for empty query'
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        indexName: "whatap",
        searchClient: searchClient
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "left-panel"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Category"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        searchable: true,
        attribute: "hierarchy_lvl0",
        limit: "50"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        hitsPerPage: 20,
        attributesToSnippet: [
            'description:20'
        ],
        snippetEllipsisText: '...',
        filters: `lang=${lang}`
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, null)), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "right-panel"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, null), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        showLast: true
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        hitComponent: Hit
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
        showLast: true
    })))));
}


/***/ })

}]);