"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[13751],{

/***/ 18170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocTagsListPage)
});

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

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(89712);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(65319);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 71 modules
var Layout = __webpack_require__(58958);
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
 */ 



function TagLetterEntryItem({ letterEntry }) {
    return /*#__PURE__*/ react.createElement("article", null, /*#__PURE__*/ react.createElement("h2", null, letterEntry.letter), /*#__PURE__*/ react.createElement("ul", {
        className: "padding--none"
    }, letterEntry.tags.map((tag)=>/*#__PURE__*/ react.createElement("li", {
            key: tag.permalink,
            className: styles_module.tag
        }, /*#__PURE__*/ react.createElement(Tag/* default */.Z, tag)))), /*#__PURE__*/ react.createElement("hr", null));
}
function TagsListByLetter({ tags }) {
    const letterList = listTagsByLetters(tags);
    return /*#__PURE__*/ react.createElement("section", {
        className: "margin-vert--lg"
    }, letterList.map((letterEntry)=>/*#__PURE__*/ react.createElement(TagLetterEntryItem, {
            key: letterEntry.letter,
            letterEntry: letterEntry
        })));
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
    return /*#__PURE__*/ react.createElement(metadataUtils/* HtmlClassNameProvider */.FG, {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.wrapper.docsPages, ThemeClassNames/* ThemeClassNames */.k.page.docsTagsListPage)
    }, /*#__PURE__*/ react.createElement(metadataUtils/* PageMetadata */.d, {
        title: title
    }), /*#__PURE__*/ react.createElement(SearchMetadata/* default */.Z, {
        tag: "doc_tags_list"
    }), /*#__PURE__*/ react.createElement(Layout/* default */.Z, null, /*#__PURE__*/ react.createElement("div", {
        className: "container margin-vert--lg"
    }, /*#__PURE__*/ react.createElement("div", {
        className: "row"
    }, /*#__PURE__*/ react.createElement("main", {
        className: "col col--8 col--offset-2"
    }, /*#__PURE__*/ react.createElement("h1", null, title), /*#__PURE__*/ react.createElement(TagsListByLetter, {
        tags: tags
    }))))));
}


/***/ }),

/***/ 74955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Tag)
});

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
    return /*#__PURE__*/ react.createElement(Link/* default */.Z, {
        href: permalink,
        className: (0,clsx_m/* default */.Z)(styles_module.tag, count ? styles_module.tagWithCount : styles_module.tagRegular)
    }, label, count && /*#__PURE__*/ react.createElement("span", null, count));
}


/***/ })

}]);