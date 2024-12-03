"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["40565"], {
"41835": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CS: () => (/* reexport */ useBlogListPageStructuredData),
  wj: () => (/* reexport */ useBlogMetadata),
  nO: () => (/* reexport */ useBlogPost),
  iZ: () => (/* reexport */ useBlogPostStructuredData),
  n4: () => (/* reexport */ BlogPostProvider),
  Ne: () => (/* reexport */ BlogSidebarItemList),
  ci: () => (/* reexport */ groupBlogSidebarItemsByYear),
  cH: () => (/* reexport */ useVisibleBlogSidebarItems)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__("85346");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useRouteContext.js
var useRouteContext = __webpack_require__("78312");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/contexts.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function useBlogMetadata() {
    const routeContext = (0,useRouteContext/* default */.Z)();
    const blogMetadata = routeContext?.data?.blogMetadata;
    if (!blogMetadata) {
        throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");
    }
    return blogMetadata;
}
const Context = /*#__PURE__*/ react.createContext(null);
/**
 * Note: we don't use `PropBlogPostContent` as context value on purpose.
 * Metadata is currently stored inside the MDX component, but we may want to
 * change that in the future.
 */ function useContextValue(param) {
    let { content, isBlogPostPage } = param;
    return (0,react.useMemo)(()=>({
            metadata: content.metadata,
            frontMatter: content.frontMatter,
            assets: content.assets,
            toc: content.toc,
            isBlogPostPage
        }), [
        content,
        isBlogPostPage
    ]);
}
/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the blog post to the children tree.
 */ function BlogPostProvider(param) {
    let { children, content, isBlogPostPage = false } = param;
    const contextValue = useContextValue({
        content,
        isBlogPostPage
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Context.Provider, {
        value: contextValue,
        children: children
    });
}
/**
 * Returns the data of the currently browsed blog post. Gives access to
 * front matter, metadata, TOC, etc.
 * When swizzling a low-level component (e.g. the "Edit this page" link)
 * and you need some extra metadata, you don't have to drill the props
 * all the way through the component tree: simply use this hook instead.
 */ function useBlogPost() {
    const blogPost = (0,react.useContext)(Context);
    if (blogPost === null) {
        throw new reactUtils/* ReactContextError */.i6('BlogPostProvider');
    }
    return blogPost;
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__("4757");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__("2933");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/structuredDataUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



const convertDate = (dateMs)=>new Date(dateMs).toISOString();
function getBlogPost(blogPostContent, siteConfig, withBaseUrl) {
    const { assets, frontMatter, metadata } = blogPostContent;
    const { date, title, description, lastUpdatedAt } = metadata;
    const image = assets.image ?? frontMatter.image;
    const keywords = frontMatter.keywords ?? [];
    const blogUrl = `${siteConfig.url}${metadata.permalink}`;
    const dateModified = lastUpdatedAt ? convertDate(lastUpdatedAt) : undefined;
    return {
        '@type': 'BlogPosting',
        '@id': blogUrl,
        mainEntityOfPage: blogUrl,
        url: blogUrl,
        headline: title,
        name: title,
        description,
        datePublished: date,
        ...dateModified ? {
            dateModified
        } : {},
        ...getAuthor(metadata.authors),
        ...getImage(image, withBaseUrl, title),
        ...keywords ? {
            keywords
        } : {}
    };
}
function getAuthor(authors) {
    const authorsStructuredData = authors.map(createPersonStructuredData);
    return {
        author: authorsStructuredData.length === 1 ? authorsStructuredData[0] : authorsStructuredData
    };
}
function getImage(image, withBaseUrl, title) {
    return image ? {
        image: createImageStructuredData({
            imageUrl: withBaseUrl(image, {
                absolute: true
            }),
            caption: `title image for the blog post: ${title}`
        })
    } : {};
}
function useBlogListPageStructuredData(props) {
    const { siteConfig } = (0,useDocusaurusContext/* default */.Z)();
    const { withBaseUrl } = (0,useBaseUrl/* useBaseUrlUtils */.Cg)();
    const { metadata: { blogDescription, blogTitle, permalink } } = props;
    const url = `${siteConfig.url}${permalink}`;
    // details on structured data support: https://schema.org/Blog
    return {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': url,
        mainEntityOfPage: url,
        headline: blogTitle,
        description: blogDescription,
        blogPost: props.items.map((blogItem)=>getBlogPost(blogItem.content, siteConfig, withBaseUrl))
    };
}
function useBlogPostStructuredData() {
    const blogMetadata = useBlogMetadata();
    const { assets, metadata } = useBlogPost();
    const { siteConfig } = (0,useDocusaurusContext/* default */.Z)();
    const { withBaseUrl } = (0,useBaseUrl/* useBaseUrlUtils */.Cg)();
    const { date, title, description, frontMatter, lastUpdatedAt } = metadata;
    const image = assets.image ?? frontMatter.image;
    const keywords = frontMatter.keywords ?? [];
    const dateModified = lastUpdatedAt ? convertDate(lastUpdatedAt) : undefined;
    const url = `${siteConfig.url}${metadata.permalink}`;
    // details on structured data support: https://schema.org/BlogPosting
    // BlogPosting is one of the structured data types that Google explicitly
    // supports: https://developers.google.com/search/docs/appearance/structured-data/article#structured-data-type-definitions
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': url,
        mainEntityOfPage: url,
        url,
        headline: title,
        name: title,
        description,
        datePublished: date,
        ...dateModified ? {
            dateModified
        } : {},
        ...getAuthor(metadata.authors),
        ...getImage(image, withBaseUrl, title),
        ...keywords ? {
            keywords
        } : {},
        isPartOf: {
            '@type': 'Blog',
            '@id': `${siteConfig.url}${blogMetadata.blogBasePath}`,
            name: blogMetadata.blogTitle
        }
    };
}
/** @returns A {@link https://schema.org/Person} constructed from the {@link Author} */ function createPersonStructuredData(author) {
    return {
        '@type': 'Person',
        ...author.name ? {
            name: author.name
        } : {},
        ...author.title ? {
            description: author.title
        } : {},
        ...author.url ? {
            url: author.url
        } : {},
        ...author.email ? {
            email: author.email
        } : {},
        ...author.imageURL ? {
            image: author.imageURL
        } : {}
    };
}
/** @returns A {@link https://schema.org/ImageObject} */ function createImageStructuredData(param) {
    let { imageUrl, caption } = param;
    return {
        '@type': 'ImageObject',
        '@id': imageUrl,
        url: imageUrl,
        contentUrl: imageUrl,
        caption
    };
}

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__("16550");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("83012");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__("38341");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__("79246");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/sidebarUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function isVisible(item, pathname) {
    if (item.unlisted && !(0,routesUtils/* isSamePath */.Mg)(item.permalink, pathname)) {
        return false;
    }
    return true;
}
/**
 * Return the visible blog sidebar items to display.
 * Unlisted items are filtered.
 */ function useVisibleBlogSidebarItems(items) {
    const { pathname } = (0,react_router/* useLocation */.TH)();
    return (0,react.useMemo)(()=>items.filter((item)=>isVisible(item, pathname)), [
        items,
        pathname
    ]);
}
function groupBlogSidebarItemsByYear(items) {
    const groupedByYear = (0,jsUtils/* groupBy */.vM)(items, (item)=>{
        return `${new Date(item.date).getFullYear()}`;
    });
    // "as" is safe here
    // see https://github.com/microsoft/TypeScript/pull/56805#issuecomment-2196526425
    const entries = Object.entries(groupedByYear);
    // We have to use entries because of https://x.com/sebastienlorber/status/1806371668614369486
    // Objects with string/number keys are automatically sorted asc...
    // Even if keys are strings like "2024"
    // We want descending order for years
    // Alternative: using Map.groupBy (not affected by this "reordering")
    entries.reverse();
    return entries;
}
function BlogSidebarItemList(param) {
    let { items, ulClassName, liClassName, linkClassName, linkActiveClassName } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        className: ulClassName,
        children: items.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                className: liClassName,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    isNavLink: true,
                    to: item.permalink,
                    className: linkClassName,
                    activeClassName: linkActiveClassName,
                    children: item.title
                })
            }, item.permalink))
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




}),
"94207": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return BlogLayout; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67026);
/* ESM import */var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88714);
/* ESM import */var _theme_BlogSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65774);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function BlogLayout(props) {
    const { sidebar, toc, children, ...layoutProps } = props;
    const hasSidebar = sidebar && sidebar.items.length > 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
        ...layoutProps,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "container margin-vert--lg",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_BlogSidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z, {
                        sidebar: sidebar
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("main", {
                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z)('col', {
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
    });
}


}),
"70537": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30140);
/* ESM import */var _docusaurus_plugin_content_blog_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41835);
/* ESM import */var _theme_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34403);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function BlogSidebarYearGroup(param) {
    let { year, yearGroupHeadingClassName, children } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        role: "group",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z, {
                as: "h3",
                className: yearGroupHeadingClassName,
                children: year
            }),
            children
        ]
    });
}
function BlogSidebarContent(param) {
    let { items, yearGroupHeadingClassName, ListComponent } = param;
    const themeConfig = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .useThemeConfig */.L)();
    if (themeConfig.blog.sidebar.groupByYear) {
        const itemsByYear = (0,_docusaurus_plugin_content_blog_client__WEBPACK_IMPORTED_MODULE_2__/* .groupBlogSidebarItemsByYear */.ci)(items);
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: itemsByYear.map((param)=>{
                let [year, yearItems] = param;
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlogSidebarYearGroup, {
                    year: year,
                    yearGroupHeadingClassName: yearGroupHeadingClassName,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListComponent, {
                        items: yearItems
                    })
                }, year);
            })
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListComponent, {
            items: items
        });
    }
}
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(BlogSidebarContent));


}),
"93867": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogTagsListPage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("67026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("96025");
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
        const initial = getTagLetter(tag.label);
        groups[initial] ??= [];
        groups[initial].push(tag);
    });
    return Object.entries(groups)// Sort letters
    .sort((param, param1)=>{
        let [letter1] = param, [letter2] = param1;
        return letter1.localeCompare(letter2);
    }).map((param)=>{
        let [letter, letterTags] = param;
        // Sort tags inside a letter
        const sortedTags = letterTags.sort((tag1, tag2)=>tag1.label.localeCompare(tag2.label));
        return {
            letter,
            tags: sortedTags
        };
    });
} //# sourceMappingURL=tagsUtils.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__("82743");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__("84681");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js
var BlogLayout = __webpack_require__("94207");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__("48627");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__("34403");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tag":"tag_Nnez"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function TagLetterEntryItem(param) {
    let { letterEntry } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                as: "h2",
                id: letterEntry.letter,
                children: letterEntry.letter
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: "padding--none",
                children: letterEntry.tags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        className: styles_module.tag,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tag/* default */.Z, {
                            ...tag
                        })
                    }, tag.permalink))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {})
        ]
    });
}
function TagsListByLetter(param) {
    let { tags } = param;
    const letterList = listTagsByLetters(tags);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "margin-vert--lg",
        children: letterList.map((letterEntry)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TagLetterEntryItem, {
                letterEntry: letterEntry
            }, letterEntry.letter))
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__("84315");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogTagsListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function BlogTagsListPage(param) {
    let { tags, sidebar } = param;
    const title = translateTagsPageTitle();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.FG, {
        className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,wrapper,blogPages */.k.wrapper.blogPages, ThemeClassNames/* ThemeClassNames,page,blogTagsListPage */.k.page.blogTagsListPage),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.d, {
                title: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchMetadata/* default */.Z, {
                tag: "blog_tags_list"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(BlogLayout/* default */.Z, {
                sidebar: sidebar,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                        as: "h1",
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsListByLetter, {
                        tags: tags
                    })
                ]
            })
        ]
    });
}


}),
"48627": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("67026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("83012");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function Tag(param) {
    let { permalink, label, count, description } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
        href: permalink,
        title: description,
        className: (0,clsx/* default */.Z)(styles_module.tag, count ? styles_module.tagWithCount : styles_module.tagRegular),
        children: [
            label,
            count && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: count
            })
        ]
    });
}


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