"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["39854"], {
"73111": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogAuthorsListPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("67026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__("82743");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__("84681");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/translations/blogTranslations.js
var blogTranslations = __webpack_require__("58267");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js
var BlogLayout = __webpack_require__("94207");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__("84315");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__("34403");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/index.js + 11 modules
var Author = __webpack_require__("21389");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Pages/BlogAuthorsListPage/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"authorListItem":"authorListItem_n3yI"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Pages/BlogAuthorsListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 









function AuthorListItem(param) {
    let { author } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
        className: styles_module.authorListItem,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Author/* default */.Z, {
            as: "h2",
            author: author,
            count: author.count
        })
    });
}
function AuthorsList(param) {
    let { authors } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: (0,clsx/* default */.Z)('margin-vert--lg', styles_module.authorsListSection),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            children: authors.map((author)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AuthorListItem, {
                    author: author
                }, author.key))
        })
    });
}
function BlogAuthorsListPage(param) {
    let { authors, sidebar } = param;
    const title = (0,blogTranslations/* translateBlogAuthorsListPageTitle */.HV)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.FG, {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,wrapper,blogPages */.k.wrapper.blogPages, ThemeClassNames/* ThemeClassNames,page,blogAuthorsListPage */.k.page.blogAuthorsListPage),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.d, {
                title: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchMetadata/* default */.Z, {
                tag: "blog_authors_list"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(BlogLayout/* default */.Z, {
                sidebar: sidebar,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                        as: "h1",
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AuthorsList, {
                        authors: authors
                    })
                ]
            })
        ]
    });
}


}),
"58267": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  HV: function() { return translateBlogAuthorsListPageTitle; },
  Wi: function() { return useBlogTagsPostsPageTitle; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96025);
/* ESM import */var _utils_usePluralForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43115);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



// Only used locally
function useBlogPostsPlural() {
    const { selectMessage } = (0,_utils_usePluralForm__WEBPACK_IMPORTED_MODULE_3__/* .usePluralForm */.c)();
    return (count)=>selectMessage(count, (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */.I)({
            id: 'theme.blog.post.plurals',
            description: 'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
            message: 'One post|{count} posts'
        }, {
            count
        }));
}
function useBlogTagsPostsPageTitle(tag) {
    const blogPostsPlural = useBlogPostsPlural();
    return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */.I)({
        id: 'theme.blog.tagTitle',
        description: 'The title of the page for a blog tag',
        message: '{nPosts} tagged with "{tagName}"'
    }, {
        nPosts: blogPostsPlural(tag.count),
        tagName: tag.label
    });
}
function useBlogAuthorPageTitle(author) {
    const blogPostsPlural = useBlogPostsPlural();
    return translate({
        id: 'theme.blog.author.pageTitle',
        description: 'The title of the page for a blog author',
        message: '{authorName} - {nPosts}'
    }, {
        nPosts: blogPostsPlural(author.count),
        authorName: author.name || author.key
    });
}
const translateBlogAuthorsListPageTitle = ()=>(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */.I)({
        id: 'theme.blog.authorsList.pageTitle',
        message: 'Authors',
        description: 'The title of the authors page'
    });
function BlogAuthorsListViewAllLabel() {
    return /*#__PURE__*/ _jsx(Translate, {
        id: "theme.blog.authorsList.viewAll",
        description: "The label of the link targeting the blog authors page",
        children: "View all authors"
    });
}
function BlogAuthorNoPostsLabel() {
    return /*#__PURE__*/ _jsx(Translate, {
        id: "theme.blog.author.noPosts",
        description: "The text for authors with 0 blog post",
        children: "This author has not written any posts yet."
    });
} //# sourceMappingURL=blogTranslations.js.map


}),
"43115": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  c: function() { return usePluralForm; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* ESM import */var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2933);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://x.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms = [
    'zero',
    'one',
    'two',
    'few',
    'many',
    'other'
];
function sortPluralForms(pluralForms) {
    return OrderedPluralForms.filter((pf)=>pluralForms.includes(pf));
}
// Hardcoded english/fallback implementation
const EnglishPluralForms = {
    locale: 'en',
    pluralForms: sortPluralForms([
        'one',
        'other'
    ]),
    select: (count)=>count === 1 ? 'one' : 'other'
};
function createLocalePluralForms(locale) {
    const pluralRules = new Intl.PluralRules(locale);
    return {
        locale,
        pluralForms: sortPluralForms(pluralRules.resolvedOptions().pluralCategories),
        select: (count)=>pluralRules.select(count)
    };
}
/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */ function useLocalePluralForms() {
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */.Z)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        try {
            return createLocalePluralForms(currentLocale);
        } catch (err) {
            console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);
            return EnglishPluralForms;
        }
    }, [
        currentLocale
    ]);
}
function selectPluralMessage(pluralMessages, count, localePluralForms) {
    const separator = '|';
    const parts = pluralMessages.split(separator);
    if (parts.length === 1) {
        return parts[0];
    }
    if (parts.length > localePluralForms.pluralForms.length) {
        console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);
    }
    const pluralForm = localePluralForms.select(count);
    const pluralFormIndex = localePluralForms.pluralForms.indexOf(pluralForm);
    // In case of not enough plural form messages, we take the last one (other)
    // instead of returning undefined
    return parts[Math.min(pluralFormIndex, parts.length - 1)];
}
/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */ function usePluralForm() {
    const localePluralForm = useLocalePluralForms();
    return {
        selectMessage: (count, pluralMessages)=>selectPluralMessage(pluralMessages, count, localePluralForm)
    };
} //# sourceMappingURL=usePluralForm.js.map


}),
"65774": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ BlogSidebar)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__("54704");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var dist_clsx = __webpack_require__("67026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("96025");
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__("41835");
;// CONCATENATED MODULE: ./src/theme/BlogSidebar/Desktop/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"sidebar":"sidebar_brwN","sidebarItemTitle":"sidebarItemTitle_r4Q1","sidebarItemList":"sidebarItemList_QwSx","sidebarItem":"sidebarItem_lnhn","sidebarItemLink":"sidebarItemLink_yNGZ","sidebarItemLinkActive":"sidebarItemLinkActive_oSRm","news":"news_mTGW","iflang":"iflang_yyvc","iflink":"iflink_TnhG"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("83012");
;// CONCATENATED MODULE: ./src/theme/BlogSidebar/Desktop/index.js







const ListComponent = (param)=>{
    let { items } = param;
    return /*#__PURE__*/ _jsx(BlogSidebarItemList, {
        items: items,
        ulClassName: clsx(styles.sidebarItemList, 'clean-list'),
        liClassName: styles.sidebarItem,
        linkClassName: styles.sidebarItemLink,
        linkActiveClassName: styles.sidebarItemLinkActive
    });
};
function BlogSidebarDesktop(param) {
    let { sidebar } = param;
    const sidebarData = __webpack_require__(24426);
    const sideitems = (0,client/* useVisibleBlogSidebarItems */.cH)(sidebar.items);
    const getItemTitle = (permalink)=>{
        const item = sideitems.find((sideitem)=>sideitem.permalink.replace(/(\/en|\/ja)/g, "") === permalink);
        return item ? item.title : permalink;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("aside", {
        className: "col col--3",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
            className: (0,dist_clsx/* default */.Z)(styles_module.sidebar, 'thin-scrollbar'),
            "aria-label": (0,Translate/* translate */.I)({
                id: 'theme.blog.sidebar.navAriaLabel',
                message: 'Blog recent posts navigation',
                description: 'The ARIA label for recent posts in the blog sidebar'
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: (0,dist_clsx/* default */.Z)(styles_module.sidebarItemList, 'clean-list'),
                children: sidebarData.map((category, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        className: category.className ? styles_module[category.className] : '',
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                children: category.link ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    isNavLink: true,
                                    to: category.link,
                                    children: category.tr_code ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                        children: (0,Translate/* translate */.I)({
                                            id: `${category.tr_code}`
                                        })
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                        children: category.label
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: category.label
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                children: category.items.map((item, itemIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        className: item.className ? styles_module[item.className] : '',
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
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
}
/* ESM default export */ const Desktop = (/*#__PURE__*/(0,react.memo)(BlogSidebarDesktop));

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__("11179");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Content/index.js
var Content = __webpack_require__("70537");
;// CONCATENATED MODULE: ./src/theme/BlogSidebar/Mobile/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Mobile_styles_module = ({"yearGroupHeading":"yearGroupHeading_fvTq"});
;// CONCATENATED MODULE: ./src/theme/BlogSidebar/Mobile/index.js






const Mobile_ListComponent = (param)=>{
    let { items } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(client/* BlogSidebarItemList */.Ne, {
        items: items,
        ulClassName: "menu__list",
        liClassName: "menu__list-item",
        linkClassName: "menu__link",
        linkActiveClassName: "menu__link--active"
    });
};
function BlogSidebarMobileSecondaryMenu(param) {
    let { sidebar } = param;
    const items = (0,client/* useVisibleBlogSidebarItems */.cH)(sidebar.items);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Content/* default */.Z, {
        items: items,
        ListComponent: Mobile_ListComponent,
        yearGroupHeadingClassName: Mobile_styles_module.yearGroupHeading
    });
}
function BlogSidebarMobile(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(content/* NavbarSecondaryMenuFiller */.Zo, {
        component: BlogSidebarMobileSecondaryMenu,
        props: props
    });
}
/* ESM default export */ const Mobile = (/*#__PURE__*/(0,react.memo)(BlogSidebarMobile));

;// CONCATENATED MODULE: ./src/theme/BlogSidebar/index.js





function BlogSidebar(param) {
    let { sidebar } = param;
    const windowSize = (0,useWindowSize/* useWindowSize */.i)();
    if (!sidebar?.items.length) {
        return null;
    }
    // Mobile sidebar doesn't need to be server-rendered
    if (windowSize === 'mobile') {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Mobile, {
            sidebar: sidebar
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Desktop, {
        sidebar: sidebar
    });
}


}),
"24426": (function (module) {
module.exports = JSON.parse('[{"type":"category","label":"새로운 기능","tr_code":"theme.blog.newFeatures","link":"/blog/","className":"iflink","items":[{"link":"/blog/index","className":"iflang"},{"link":"/blog/overview","className":"news"}]},{"type":"category","label":"2024","className":"iflang","link":"/blog/tags/2024","items":[{"link":"/blog/2024-3q-summary","className":"iflang"},{"link":"/blog/2024-2q-summary","className":"iflang"},{"link":"/blog/2024-1q-summary","className":"iflang"}]},{"type":"category","label":"2023","className":"iflang","link":"/blog/tags/2023","items":[{"link":"/blog/2023-4q-summary","className":"iflang"},{"link":"/blog/2023-3q-summary","className":"iflang"}]}]')

}),

}]);