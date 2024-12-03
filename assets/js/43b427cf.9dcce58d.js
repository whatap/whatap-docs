"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["53020"], {
"86103": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return App; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var react_instantsearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38124);
/* ESM import */var react_instantsearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26842);
/* ESM import */var react_instantsearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18557);
/* ESM import */var react_instantsearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36332);
/* ESM import */var react_instantsearch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22433);
/* ESM import */var react_instantsearch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62748);
/* ESM import */var react_instantsearch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74408);
/* ESM import */var react_instantsearch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46314);
/* ESM import */var react_instantsearch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96010);
/* ESM import */var react_instantsearch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(85910);
/* ESM import */var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88714);
/* ESM import */var _meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32608);
/* ESM import */var _meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_6__);
/* ESM import */var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83012);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96025);
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2933);









function App() {
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */.Z)();
    const lang = currentLocale;
    const docsURL = "https://docs.whatap.io";
    const { searchClient } = (0,_meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_6__.instantMeiliSearch)('https://meilsearch.whatap.io', 'dgoMBc2t6fVzILDGqhh63uBXACGOmJbKNnE_Xv8_Hqk', {
        placeholderSearch: false,
        finitePagination: true
    });
    const Hit = (param)=>{
        let { hit } = param;
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
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z, {
                    to: durl,
                    target: "_blank",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                            children: title[0]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "hit-breadcrums",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "hit-name lvl0",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_7__/* .Highlight */.y, {
                                        attribute: "hierarchy_lvl0",
                                        hit: hit
                                    })
                                }),
                                hit.hierarchy_lvl1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "hit-name",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_7__/* .Highlight */.y, {
                                        attribute: "hierarchy_lvl1",
                                        hit: hit
                                    })
                                }),
                                hit.hierarchy_lvl2 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "hit-name",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_7__/* .Highlight */.y, {
                                        attribute: "hierarchy_lvl2",
                                        hit: hit
                                    })
                                }),
                                hit.hierarchy_lvl3 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "hit-name",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_7__/* .Highlight */.y, {
                                        attribute: "hierarchy_lvl3",
                                        hit: hit
                                    })
                                }),
                                hit.hierarchy_lvl4 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "hit-name",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_7__/* .Highlight */.y, {
                                        attribute: "hierarchy_lvl4",
                                        hit: hit
                                    })
                                }),
                                hit.hierarchy_lvl5 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "hit-name last",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_7__/* .Highlight */.y, {
                                        attribute: "hierarchy_lvl5",
                                        hit: hit
                                    })
                                })
                            ]
                        })
                    ]
                }),
                hit.content && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "hit-name",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_8__/* .Snippet */.p, {
                        attribute: "content",
                        hit: hit
                    })
                })
            ]
        }, hit.id);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "ais-InstantSearch",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                    children: (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* .translate */.I)({
                        id: 'theme.SearchPage.emptyResultsTitle',
                        message: 'Search the documentation',
                        description: 'The search page title for empty query'
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_instantsearch__WEBPACK_IMPORTED_MODULE_9__/* .InstantSearch */.p, {
                    indexName: "whatap",
                    searchClient: searchClient,
                    routing: true,
                    future: {
                        preserveSharedStateOnUnmount: true
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "left-panel",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_10__/* .ClearRefinements */.E, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                    children: "Category"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_11__/* .RefinementList */.p, {
                                    searchable: true,
                                    attribute: "hierarchy_lvl0",
                                    limit: "50"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_12__/* .Configure */.T, {
                                    hitsPerPage: 20,
                                    attributesToSnippet: [
                                        'description:20'
                                    ],
                                    snippetEllipsisText: '...',
                                    filters: `lang=${lang} AND hierarchy_lvl0!=Documentation`
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_13__/* .Stats */.j, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "mobile-refine",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_11__/* .RefinementList */.p, {
                                attribute: "hierarchy_lvl0",
                                limit: "10",
                                showMore: true
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "right-panel",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_14__/* .SearchBox */.R, {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_15__/* .Pagination */.t, {
                                    showLast: true
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_16__/* .Hits */.m, {
                                    hitComponent: Hit
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_instantsearch__WEBPACK_IMPORTED_MODULE_15__/* .Pagination */.t, {
                                    showLast: true
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


}),

}]);