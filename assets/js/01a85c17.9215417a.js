"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[8209],{

/***/ 93788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BlogLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77568);
/* harmony import */ var _theme_BlogSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41913);
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



function BlogLayout(props) {
    const { sidebar , toc , children  } = props, layoutProps = _objectWithoutProperties(props, [
        "sidebar",
        "toc",
        "children"
    ]);
    const hasSidebar = sidebar && sidebar.items.length > 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _objectSpreadProps(_objectSpread({}, layoutProps), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "container margin-vert--lg",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_BlogSidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                        sidebar: sidebar
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)('col', {
                            'col--7': hasSidebar,
                            'col--9 col--offset-1': !hasSidebar
                        }),
                        children: children
                    }),
                    toc && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "col col--2",
                        children: toc
                    })
                ]
            })
        })
    }));
};


/***/ }),

/***/ 5216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogTagsListPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12312);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86560);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23891);
/* harmony import */ var _theme_BlogLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93788);
/* harmony import */ var _theme_TagsListByLetter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90563);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63067);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61917);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function BlogTagsListPage({ tags , sidebar  }) {
    const title = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_6__/* .translateTagsPageTitle */ .b)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .HtmlClassNameProvider */ .e3, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_9__/* .ThemeClassNames */ .G.wrapper.blogPages, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_9__/* .ThemeClassNames */ .G.page.blogTagsListPage),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .PageMetadata */ .be, {
                title: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                tag: "blog_tags_list"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_BlogLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                sidebar: sidebar,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                        as: "h1",
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_TagsListByLetter__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                        tags: tags
                    })
                ]
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

/***/ 90563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TagsListByLetter)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tagsUtils.js
var tagsUtils = __webpack_require__(12312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(99243);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(61917);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_Nnez"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/index.js
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




function TagLetterEntryItem({ letterEntry  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                as: "h2",
                id: letterEntry.letter,
                children: letterEntry.letter
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: "padding--none",
                children: letterEntry.tags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        className: styles_module.tag,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tag/* default */.A, _objectSpread({}, tag))
                    }, tag.permalink))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {})
        ]
    });
}
function TagsListByLetter({ tags  }) {
    const letterList = (0,tagsUtils/* listTagsByLetters */.Q)(tags);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "margin-vert--lg",
        children: letterList.map((letterEntry)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TagLetterEntryItem, {
                letterEntry: letterEntry
            }, letterEntry.letter))
    });
};


/***/ }),

/***/ 8603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ useVisibleBlogSidebarItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56347);
/* harmony import */ var _routesUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93989);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function isVisible(item, pathname) {
    if (item.unlisted && !(0,_routesUtils__WEBPACK_IMPORTED_MODULE_1__/* .isSamePath */ .ys)(item.permalink, pathname)) {
        return false;
    }
    return true;
}
/**
 * Return the visible blog sidebar items to display.
 * Unlisted items are filtered.
 */ function useVisibleBlogSidebarItems(items) {
    const { pathname  } = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_2__/* .useLocation */ .zy)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>items.filter((item)=>isVisible(item, pathname)), [
        items,
        pathname
    ]);
} //# sourceMappingURL=blogUtils.js.map


/***/ }),

/***/ 12312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ listTagsByLetters),
/* harmony export */   b: () => (/* binding */ translateTagsPageTitle)
/* harmony export */ });
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15418);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var _groups, _initial;
const translateTagsPageTitle = ()=>(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* .translate */ .T)({
        id: 'theme.tags.tagsPageTitle',
        message: 'Tags',
        description: 'The title of the tag list page'
    });
function getTagLetter(tag) {
    return tag[0].toUpperCase();
}
/**
 * Takes a list of tags (as provided by the content plugins), and groups them by
 * their initials.
 */ function listTagsByLetters(tags) {
    const groups = {};
    Object.values(tags).forEach((tag)=>{
        const initial = getTagLetter(tag.label);
        var ref;
        (ref = (_groups = groups)[_initial = initial]) !== null && ref !== void 0 ? ref : _groups[_initial] = [];
        groups[initial].push(tag);
    });
    return Object.entries(groups)// Sort letters
    .sort(([letter1], [letter2])=>letter1.localeCompare(letter2)).map(([letter, letterTags])=>{
        // Sort tags inside a letter
        const sortedTags = letterTags.sort((tag1, tag2)=>tag1.label.localeCompare(tag2.label));
        return {
            letter,
            tags: sortedTags
        };
    });
} //# sourceMappingURL=tagsUtils.js.map


/***/ }),

/***/ 41913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogSidebar)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(93577);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28618);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(15418);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/blogUtils.js
var blogUtils = __webpack_require__(8603);
;// CONCATENATED MODULE: ./src/theme/BlogSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"sidebar":"sidebar_brwN","sidebarItemTitle":"sidebarItemTitle_r4Q1","sidebarItemList":"sidebarItemList_QwSx","sidebarItem":"sidebarItem_lnhn","sidebarItemLink":"sidebarItemLink_yNGZ","sidebarItemLinkActive":"sidebarItemLinkActive_oSRm","news":"news_mTGW"});
;// CONCATENATED MODULE: ./src/theme/BlogSidebar/Desktop/index.js

//테스트






function BlogSidebarDesktop({ sidebar  }) {
    const sidebarData = __webpack_require__(94458);
    const sideitems = (0,blogUtils/* useVisibleBlogSidebarItems */.G)(sidebar.items);
    const getItemTitle = (permalink)=>{
        const item = sideitems.find((sideitem)=>sideitem.permalink === permalink);
        return item ? item.title : permalink;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("aside", {
        className: "col col--3",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
            className: (0,clsx/* default */.A)(styles_module.sidebar, 'thin-scrollbar'),
            "aria-label": (0,Translate/* translate */.T)({
                id: 'theme.blog.sidebar.navAriaLabel',
                message: 'Blog recent posts navigation',
                description: 'The ARIA label for recent posts in the blog sidebar'
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: (0,clsx/* default */.A)(styles_module.sidebarItemList, 'clean-list'),
                children: sidebarData.map((category, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                children: category.link ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                                    isNavLink: true,
                                    to: category.link,
                                    children: category.label
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: category.label
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                children: category.items.map((item, itemIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        className: item.className ? styles_module[item.className] : '',
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                                            isNavLink: true,
                                            to: item.link,
                                            className: styles_module.sidebarItemLink,
                                            activeClassName: styles_module.sidebarItemLinkActive,
                                            children: getItemTitle(item.link)
                                        })
                                    }, itemIndex))
                            })
                        ]
                    }, index))
            })
        })
    });
};

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(11628);
;// CONCATENATED MODULE: ./src/theme/BlogSidebar/Mobile/index.js





function BlogSidebarMobileSecondaryMenu({ sidebar  }) {
    const items = (0,blogUtils/* useVisibleBlogSidebarItems */.G)(sidebar.items);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        className: "menu__list",
        children: items.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                className: "menu__list-item",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                    isNavLink: true,
                    to: item.permalink,
                    className: "menu__link",
                    activeClassName: "menu__link--active",
                    children: item.title
                })
            }, item.permalink))
    });
}
function BlogSidebarMobile(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(content/* NavbarSecondaryMenuFiller */.GX, {
        component: BlogSidebarMobileSecondaryMenu,
        props: props
    });
};

;// CONCATENATED MODULE: ./src/theme/BlogSidebar/index.js





function BlogSidebar({ sidebar  }) {
    const windowSize = (0,useWindowSize/* useWindowSize */.l)();
    if (!(sidebar === null || sidebar === void 0 ? void 0 : sidebar.items.length)) {
        return null;
    }
    // Mobile sidebar doesn't need to be server-rendered
    if (windowSize === 'mobile') {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogSidebarMobile, {
            sidebar: sidebar
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogSidebarDesktop, {
        sidebar: sidebar
    });
};


/***/ }),

/***/ 94458:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"type":"category","label":"새로운 기능","link":"/blog/","items":[{"link":"/blog/index"},{"link":"/blog/overview","className":"news"}]},{"type":"category","label":"2024","link":"/blog/tags/2024","items":[{"link":"/blog/2024-2q-summary","className":"news"},{"link":"/blog/2024-1q-summary"}]},{"type":"category","label":"2023","link":"/blog/tags/2023","items":[{"link":"/blog/2023-4q-summary"},{"link":"/blog/2023-3q-summary"}]}]');

/***/ })

}]);