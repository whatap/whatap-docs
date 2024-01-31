"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[13751],{

/***/ 79285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocTagsListPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(92210);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tagsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
const translateTagsPageTitle = ()=>(0,Translate/* translate */.I)({
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
        var _groups, _initial;
        const initial = getTagLetter(tag.label);
        var _;
        (_ = (_groups = groups)[_initial = initial]) !== null && _ !== void 0 ? _ : _groups[_initial] = [];
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

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(34285);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(65319);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 67 modules
var Layout = __webpack_require__(77723);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(74955);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_Nnez"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}





function TagLetterEntryItem({ letterEntry }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                children: letterEntry.letter
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: "padding--none",
                children: letterEntry.tags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        className: styles_module.tag,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tag/* default */.Z, _object_spread({}, tag))
                    }, tag.permalink))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {})
        ]
    });
}
function TagsListByLetter({ tags }) {
    const letterList = listTagsByLetters(tags);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "margin-vert--lg",
        children: letterList.map((letterEntry)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TagLetterEntryItem, {
                letterEntry: letterEntry
            }, letterEntry.letter))
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(36894);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocTagsListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocTagsListPage({ tags }) {
    const title = translateTagsPageTitle();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.FG, {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.wrapper.docsPages, ThemeClassNames/* ThemeClassNames */.k.page.docsTagsListPage),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.d, {
                title: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchMetadata/* default */.Z, {
                tag: "doc_tags_list"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "container margin-vert--lg",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                            className: "col col--8 col--offset-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    children: title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsListByLetter, {
                                    tags: tags
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 74955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(31984);
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




function Tag({ permalink, label, count }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
        href: permalink,
        className: (0,clsx_m/* default */.Z)(styles_module.tag, count ? styles_module.tagWithCount : styles_module.tagRegular),
        children: [
            label,
            count && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: count
            })
        ]
    });
}


/***/ })

}]);