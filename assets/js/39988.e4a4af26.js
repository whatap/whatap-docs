"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[39988],{

/***/ 80419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocItemFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23891);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8439);
/* harmony import */ var _theme_TagsListInline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45283);
/* harmony import */ var _theme_EditMetaRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30221);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocItemFooter() {
    const { metadata  } = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_4__/* .useDoc */ .u)();
    const { editUrl , lastUpdatedAt , lastUpdatedBy , tags  } = metadata;
    const canDisplayTagsRow = tags.length > 0;
    const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
    const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
    if (!canDisplayFooter) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .ThemeClassNames */ .G.docs.docFooter, 'docusaurus-mt-lg'),
        children: [
            canDisplayTagsRow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)('row margin-top--sm', _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .ThemeClassNames */ .G.docs.docFooterTagsRow),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "col",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TagsListInline__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                        tags: tags
                    })
                })
            }),
            canDisplayEditMetaRow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_EditMetaRow__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                className: (0,clsx__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)('margin-top--sm', _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .ThemeClassNames */ .G.docs.docFooterEditMetaRow),
                editUrl: editUrl,
                lastUpdatedAt: lastUpdatedAt,
                lastUpdatedBy: lastUpdatedBy
            })
        ]
    });
};


/***/ }),

/***/ 74888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocItemPaginator)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/doc.js
var doc = __webpack_require__(8439);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(15418);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js
var PaginatorNavLink = __webpack_require__(16930);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function DocPaginator(props) {
    const { previous , next  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: "pagination-nav docusaurus-mt-lg",
        "aria-label": (0,Translate/* translate */.T)({
            id: 'theme.docs.paginator.navAriaLabel',
            message: 'Docs pages',
            description: 'The ARIA label for the docs pagination'
        }),
        children: [
            previous && /*#__PURE__*/ (0,jsx_runtime.jsx)(PaginatorNavLink/* default */.A, _objectSpreadProps(_objectSpread({}, previous), {
                subLabel: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.A, {
                    id: "theme.docs.paginator.previous",
                    description: "The label used to navigate to the previous doc",
                    children: "Previous"
                })
            })),
            next && /*#__PURE__*/ (0,jsx_runtime.jsx)(PaginatorNavLink/* default */.A, _objectSpreadProps(_objectSpread({}, next), {
                subLabel: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.A, {
                    id: "theme.docs.paginator.next",
                    description: "The label used to navigate to the next doc",
                    children: "Next"
                }),
                isNext: true
            }))
        ]
    });
};

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Paginator/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


/**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */ function DocItemPaginator() {
    const { metadata  } = (0,doc/* useDoc */.u)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DocPaginator, {
        previous: metadata.previous,
        next: metadata.next
    });
};


/***/ }),

/***/ 75373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocItemTOCDesktop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23891);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8439);
/* harmony import */ var _theme_TOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50701);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocItemTOCDesktop() {
    const { toc , frontMatter  } = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useDoc */ .u)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TOC__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        toc: toc,
        minHeadingLevel: frontMatter.toc_min_heading_level,
        maxHeadingLevel: frontMatter.toc_max_heading_level,
        className: _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .ThemeClassNames */ .G.docs.docTocDesktop
    });
};


/***/ }),

/***/ 54019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocItemTOCMobile)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(23891);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/doc.js
var doc = __webpack_require__(8439);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js + 3 modules
var TOCCollapsible = __webpack_require__(77004);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tocMobile":"tocMobile_ITEo"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocItemTOCMobile() {
    const { toc , frontMatter  } = (0,doc/* useDoc */.u)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCCollapsible/* default */.A, {
        toc: toc,
        minHeadingLevel: frontMatter.toc_min_heading_level,
        maxHeadingLevel: frontMatter.toc_max_heading_level,
        className: (0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docTocMobile, styles_module.tocMobile)
    });
};


/***/ }),

/***/ 85696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(86560);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/doc.js
var doc = __webpack_require__(8439);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Metadata/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function DocItemMetadata() {
    const { metadata , frontMatter , assets  } = (0,doc/* useDoc */.u)();
    var _image;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be, {
        title: metadata.title,
        description: metadata.description,
        keywords: frontMatter.keywords,
        image: (_image = assets.image) !== null && _image !== void 0 ? _image : frontMatter.image
    });
};

// EXTERNAL MODULE: ./src/theme/DocItem/Layout/index.js + 12 modules
var Layout = __webpack_require__(52790);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocItem(props) {
    const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
    const MDXComponent = props.content;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(doc/* DocProvider */._, {
        content: props.content,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.e3, {
            className: docHtmlClassName,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DocItemMetadata, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXComponent, {})
                })
            ]
        })
    });
};


/***/ }),

/***/ 94287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocVersionBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15418);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23891);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13296);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocVersionBadge({ className  }) {
    const versionMetadata = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .useDocsVersion */ .r)();
    if (versionMetadata.badge) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(className, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ThemeClassNames */ .G.docs.docVersionBadge, 'badge badge--secondary'),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                id: "theme.docs.versionBadge.label",
                values: {
                    versionLabel: versionMetadata.label
                },
                children: 'Version: {versionLabel}'
            })
        });
    }
    return null;
};


/***/ }),

/***/ 12498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocVersionBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90062);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28618);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15418);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32580);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23891);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58625);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13296);
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function UnreleasedVersionLabel({ siteTitle , versionMetadata  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        id: "theme.docs.versions.unreleasedVersionLabel",
        description: "The label used to tell the user that he's browsing an unreleased doc version",
        values: {
            siteTitle,
            versionLabel: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                children: versionMetadata.label
            })
        },
        children: 'This is unreleased documentation for {siteTitle} {versionLabel} version.'
    });
}
function UnmaintainedVersionLabel({ siteTitle , versionMetadata  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        id: "theme.docs.versions.unmaintainedVersionLabel",
        description: "The label used to tell the user that he's browsing an unmaintained doc version",
        values: {
            siteTitle,
            versionLabel: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                children: versionMetadata.label
            })
        },
        children: 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.'
    });
}
const BannerLabelComponents = {
    unreleased: UnreleasedVersionLabel,
    unmaintained: UnmaintainedVersionLabel
};
function BannerLabel(props) {
    const BannerLabelComponent = BannerLabelComponents[props.versionMetadata.banner];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BannerLabelComponent, _objectSpread({}, props));
}
function LatestVersionSuggestionLabel({ versionLabel , to , onClick  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        id: "theme.docs.versions.latestVersionSuggestionLabel",
        description: "The label used to tell the user to check the latest version",
        values: {
            versionLabel,
            latestVersionLink: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                    to: to,
                    onClick: onClick,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                        id: "theme.docs.versions.latestVersionLinkLabel",
                        description: "The label used for the latest version suggestion link label",
                        children: "latest version"
                    })
                })
            })
        },
        children: 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).'
    });
}
function DocVersionBannerEnabled({ className , versionMetadata  }) {
    const { siteConfig: { title: siteTitle  } ,  } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
    const { pluginId  } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useActivePlugin */ .vT)({
        failfast: true
    });
    const getVersionMainDoc = (version)=>version.docs.find((doc)=>doc.id === version.mainDocId);
    const { savePreferredVersionName  } = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_6__/* .useDocsPreferredVersion */ .g1)(pluginId);
    const { latestDocSuggestion , latestVersionSuggestion  } = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_5__/* .useDocVersionSuggestions */ .HW)(pluginId);
    // Try to link to same doc in latest version (not always possible), falling
    // back to main doc of latest version
    const latestVersionSuggestedDoc = latestDocSuggestion !== null && latestDocSuggestion !== void 0 ? latestDocSuggestion : getVersionMainDoc(latestVersionSuggestion);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(className, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .ThemeClassNames */ .G.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'),
        role: "alert",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BannerLabel, {
                    siteTitle: siteTitle,
                    versionMetadata: versionMetadata
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "margin-top--md",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LatestVersionSuggestionLabel, {
                    versionLabel: latestVersionSuggestion.label,
                    to: latestVersionSuggestedDoc.path,
                    onClick: ()=>savePreferredVersionName(latestVersionSuggestion.name)
                })
            })
        ]
    });
}
function DocVersionBanner({ className  }) {
    const versionMetadata = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_9__/* .useDocsVersion */ .r)();
    if (versionMetadata.banner) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocVersionBannerEnabled, {
            className: className,
            versionMetadata: versionMetadata
        });
    }
    return null;
};


/***/ }),

/***/ 25003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ IconHome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconHome(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", _objectSpreadProps(_objectSpread({
        viewBox: "0 0 24 24"
    }, props), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
            fill: "currentColor"
        })
    }));
};


/***/ }),

/***/ 16930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PaginatorNavLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28618);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function PaginatorNavLink(props) {
    const { permalink , title , subLabel , isNext  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)('pagination-nav__link', isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'),
        to: permalink,
        children: [
            subLabel && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "pagination-nav__sublabel",
                children: subLabel
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "pagination-nav__label",
                children: title
            })
        ]
    });
};


/***/ }),

/***/ 77004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TOCCollapsible)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(98202);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(30719);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(15418);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tocCollapsibleButton":"tocCollapsibleButton_TO0P","tocCollapsibleButtonExpanded":"tocCollapsibleButtonExpanded_MG3E"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/index.js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function TOCCollapsibleCollapseButton(_param) {
    var { collapsed  } = _param, props = _objectWithoutProperties(_param, [
        "collapsed"
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", _objectSpreadProps(_objectSpread({
        type: "button"
    }, props), {
        className: (0,clsx/* default */.A)('clean-btn', styles_module.tocCollapsibleButton, !collapsed && styles_module.tocCollapsibleButtonExpanded, props.className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.A, {
            id: "theme.TOCCollapsible.toggleButtonLabel",
            description: "The label used by the button on the collapsible TOC component",
            children: "On this page"
        })
    }));
};

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TOCCollapsible_styles_module = ({"tocCollapsible":"tocCollapsible_ETCw","tocCollapsibleContent":"tocCollapsibleContent_vkbj","tocCollapsibleExpanded":"tocCollapsibleExpanded_sAul"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function TOCCollapsible({ toc , className , minHeadingLevel , maxHeadingLevel ,  }) {
    const { collapsed , toggleCollapsed  } = (0,Collapsible/* useCollapsible */.u)({
        initialState: true
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.A)(TOCCollapsible_styles_module.tocCollapsible, !collapsed && TOCCollapsible_styles_module.tocCollapsibleExpanded, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCCollapsibleCollapseButton, {
                collapsed: collapsed,
                onClick: toggleCollapsed
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapsible/* Collapsible */.N, {
                lazy: true,
                className: TOCCollapsible_styles_module.tocCollapsibleContent,
                collapsed: collapsed,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TOCItems/* default */.A, {
                    toc: toc,
                    minHeadingLevel: minHeadingLevel,
                    maxHeadingLevel: maxHeadingLevel
                })
            })
        ]
    });
};


/***/ }),

/***/ 99243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28618);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function Tag({ permalink , label , count , description  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.A, {
        href: permalink,
        title: description,
        className: (0,clsx/* default */.A)(styles_module.tag, count ? styles_module.tagWithCount : styles_module.tagRegular),
        children: [
            label,
            count && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: count
            })
        ]
    });
};


/***/ }),

/***/ 45283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TagsListInline)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(15418);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(99243);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tags":"tags_jXut","tag":"tag_QGVx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TagsListInline({ tags  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.A, {
                    id: "theme.tags.tagsListLabel",
                    description: "The label alongside a tag list",
                    children: "Tags:"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: (0,clsx/* default */.A)(styles_module.tags, 'padding--none', 'margin-left--sm'),
                children: tags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        className: styles_module.tag,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tag/* default */.A, _objectSpread({}, tag))
                    }, tag.permalink))
            })
        ]
    });
};


/***/ }),

/***/ 8439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ DocProvider),
/* harmony export */   u: () => (/* binding */ useDoc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25576);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

const Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);
/**
 * Note: we don't use `PropDoc` as context value on purpose. Metadata is
 * currently stored inside the MDX component, but we may want to change that in
 * the future. This layer is a good opportunity to decouple storage from
 * consuming API, potentially allowing us to provide metadata as both props and
 * route context without duplicating the chunks in the future.
 */ function useContextValue(content) {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            metadata: content.metadata,
            frontMatter: content.frontMatter,
            assets: content.assets,
            contentTitle: content.contentTitle,
            toc: content.toc
        }), [
        content
    ]);
}
/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the doc to the children tree.
 */ function DocProvider({ children , content ,  }) {
    const contextValue = useContextValue(content);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {
        value: contextValue,
        children: children
    });
}
/**
 * Returns the data of the currently browsed doc. Gives access to the doc's MDX
 * Component, front matter, metadata, TOC, etc. When swizzling a low-level
 * component (e.g. the "Edit this page" link) and you need some extra metadata,
 * you don't have to drill the props all the way through the component tree:
 * simply use this hook instead.
 */ function useDoc() {
    const doc = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);
    if (doc === null) {
        throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_2__/* .ReactContextError */ .dV('DocProvider');
    }
    return doc;
} //# sourceMappingURL=doc.js.map


/***/ })

}]);