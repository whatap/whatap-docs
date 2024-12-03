"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["59952"], {
"61722": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return BlogListPaginator; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96025);
/* ESM import */var _theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50790);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function BlogListPaginator(props) {
    const { metadata } = props;
    const { previousPage, nextPage } = metadata;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "pagination-nav",
        "aria-label": (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* .translate */.I)({
            id: 'theme.blog.paginator.navAriaLabel',
            message: 'Blog list page navigation',
            description: 'The ARIA label for the blog pagination'
        }),
        children: [
            previousPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z, {
                permalink: previousPage,
                title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
                    id: "theme.blog.paginator.newerEntries",
                    description: "The label used to navigate to the newer blog posts page (previous page)",
                    children: "Newer entries"
                })
            }),
            nextPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z, {
                permalink: nextPage,
                title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
                    id: "theme.blog.paginator.olderEntries",
                    description: "The label used to navigate to the older blog posts page (next page)",
                    children: "Older entries"
                }),
                isNext: true
            })
        ]
    });
}


}),
"1080": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ BlogPostItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("67026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__("41835");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Container/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function BlogPostItemContainer(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("article", {
        className: className,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("83012");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"title":"title_f1Hy"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function BlogPostItemHeaderTitle(param) {
    let { className } = param;
    const { metadata, isBlogPostPage } = (0,client/* useBlogPost */.nO)();
    const { permalink, title } = metadata;
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TitleHeading, {
        className: (0,clsx/* default */.Z)(styles_module.title, className),
        children: isBlogPostPage ? title : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            to: permalink,
            children: title
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("96025");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__("43115");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/IntlUtils.js
var IntlUtils = __webpack_require__("11437");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Info_styles_module = ({"container":"container_mt6G"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
    const { selectMessage } = (0,usePluralForm/* usePluralForm */.c)();
    return (readingTimeFloat)=>{
        const readingTime = Math.ceil(readingTimeFloat);
        return selectMessage(readingTime, (0,Translate/* translate */.I)({
            id: 'theme.blog.post.readingTime.plurals',
            description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
            message: 'One min read|{readingTime} min read'
        }, {
            readingTime
        }));
    };
}
function ReadingTime(param) {
    let { readingTime } = param;
    const readingTimePlural = useReadingTimePlural();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: readingTimePlural(readingTime)
    });
}
function DateTime(param) {
    let { date, formattedDate } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("time", {
        dateTime: date,
        children: formattedDate
    });
}
function Spacer() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: ' · '
    });
}
function BlogPostItemHeaderInfo(param) {
    let { className } = param;
    const { metadata } = (0,client/* useBlogPost */.nO)();
    const { date, readingTime } = metadata;
    const dateTimeFormat = (0,IntlUtils/* useDateTimeFormat */.P)({
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
    const formatDate = (blogDate)=>dateTimeFormat.format(new Date(blogDate));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.Z)(Info_styles_module.container, 'margin-vert--md', className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTime, {
                date: date,
                formattedDate: formatDate(date)
            }),
            typeof readingTime !== 'undefined' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Spacer, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadingTime, {
                        readingTime: readingTime
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/index.js + 11 modules
var Author = __webpack_require__("21389");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Authors_styles_module = ({"authorCol":"authorCol_Hf19","imageOnlyAuthorRow":"imageOnlyAuthorRow_pa_O","imageOnlyAuthorCol":"imageOnlyAuthorCol_G86a"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





// Component responsible for the authors layout
function BlogPostItemHeaderAuthors(param) {
    let { className } = param;
    const { metadata: { authors }, assets } = (0,client/* useBlogPost */.nO)();
    const authorsCount = authors.length;
    if (authorsCount === 0) {
        return null;
    }
    const imageOnly = authors.every((param)=>{
        let { name } = param;
        return !name;
    });
    const singleAuthor = authors.length === 1;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.Z)('margin-top--md margin-bottom--sm', imageOnly ? Authors_styles_module.imageOnlyAuthorRow : 'row', className),
        children: authors.map((author, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (0,clsx/* default */.Z)(!imageOnly && (singleAuthor ? 'col col--12' : 'col col--6'), imageOnly ? Authors_styles_module.imageOnlyAuthorCol : Authors_styles_module.authorCol),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Author/* default */.Z, {
                    author: {
                        ...author,
                        // Handle author images using relative paths
                        imageURL: assets.authorsImageUrls[idx] ?? author.imageURL
                    }
                })
            }, idx))
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function BlogPostItemHeader() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemHeaderTitle, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemHeaderInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemHeaderAuthors, {})
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__("8365");
// EXTERNAL MODULE: ./src/theme/MDXContent/index.js
var MDXContent = __webpack_require__("62145");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function BlogPostItemContent(param) {
    let { children, className } = param;
    const { isBlogPostPage } = (0,client/* useBlogPost */.nO)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        // This ID is used for the feed generation to locate the main content
        id: isBlogPostPage ? lib.blogPostContainerID : undefined,
        className: (0,clsx/* default */.Z)('markdown', className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MDXContent/* default */.Z, {
            children: children
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__("84681");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js + 2 modules
var EditMetaRow = __webpack_require__("49367");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js + 1 modules
var TagsListInline = __webpack_require__("72501");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/ReadMoreLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function ReadMoreLabel() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
            id: "theme.blog.post.readMore",
            description: "The label used in blog post item excerpts to link to full blog posts",
            children: "Read more"
        })
    });
}
function BlogPostItemFooterReadMoreLink(props) {
    const { blogPostTitle, ...linkProps } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        "aria-label": (0,Translate/* translate */.I)({
            message: 'Read more about {title}',
            id: 'theme.blog.post.readMoreLabel',
            description: 'The ARIA label for the link to full blog posts from excerpts'
        }, {
            title: blogPostTitle
        }),
        ...linkProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadMoreLabel, {})
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function BlogPostItemFooter() {
    const { metadata, isBlogPostPage } = (0,client/* useBlogPost */.nO)();
    const { tags, title, editUrl, hasTruncateMarker, lastUpdatedBy, lastUpdatedAt } = metadata;
    // A post is truncated if it's in the "list view" and it has a truncate marker
    const truncatedPost = !isBlogPostPage && hasTruncateMarker;
    const tagsExists = tags.length > 0;
    const renderFooter = tagsExists || truncatedPost || editUrl;
    if (!renderFooter) {
        return null;
    }
    // BlogPost footer - details view
    if (isBlogPostPage) {
        const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
            className: "docusaurus-mt-lg",
            children: [
                tagsExists && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (0,clsx/* default */.Z)('row', 'margin-top--sm', ThemeClassNames/* ThemeClassNames,blog,blogFooterEditMetaRow */.k.blog.blogFooterEditMetaRow),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "col",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsListInline/* default */.Z, {
                            tags: tags
                        })
                    })
                }),
                canDisplayEditMetaRow && /*#__PURE__*/ (0,jsx_runtime.jsx)(EditMetaRow/* default */.Z, {
                    className: (0,clsx/* default */.Z)('margin-top--sm', ThemeClassNames/* ThemeClassNames,blog,blogFooterEditMetaRow */.k.blog.blogFooterEditMetaRow),
                    editUrl: editUrl,
                    lastUpdatedAt: lastUpdatedAt,
                    lastUpdatedBy: lastUpdatedBy
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
            className: "row docusaurus-mt-lg",
            children: [
                tagsExists && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (0,clsx/* default */.Z)('col', {
                        'col--9': truncatedPost
                    }),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsListInline/* default */.Z, {
                        tags: tags
                    })
                }),
                truncatedPost && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (0,clsx/* default */.Z)('col text--right', {
                        'col--3': tagsExists
                    }),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemFooterReadMoreLink, {
                        blogPostTitle: title,
                        to: metadata.permalink
                    })
                })
            ]
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







// apply a bottom margin in list view
function useContainerClassName() {
    const { isBlogPostPage } = (0,client/* useBlogPost */.nO)();
    return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}
function BlogPostItem(param) {
    let { children, className } = param;
    const containerClassName = useContainerClassName();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(BlogPostItemContainer, {
        className: (0,clsx/* default */.Z)(containerClassName, className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemHeader, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemContent, {
                children: children
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BlogPostItemFooter, {})
        ]
    });
}


}),
"23725": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return BlogPostItems; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var _docusaurus_plugin_content_blog_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41835);
/* ESM import */var _theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1080);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function BlogPostItems(param) {
    let { items, component: BlogPostItemComponent = _theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: items.map((param)=>{
            let { content: BlogPostContent } = param;
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_plugin_content_blog_client__WEBPACK_IMPORTED_MODULE_2__/* .BlogPostProvider */.n4, {
                content: BlogPostContent,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlogPostItemComponent, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlogPostContent, {})
                })
            }, BlogPostContent.metadata.permalink);
        })
    });
}


}),
"6374": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return BlogTagsPostsPage; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67026);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96025);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82743);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(84681);
/* ESM import */var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58267);
/* ESM import */var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83012);
/* ESM import */var _theme_BlogLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94207);
/* ESM import */var _theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61722);
/* ESM import */var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84315);
/* ESM import */var _theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23725);
/* ESM import */var _theme_ContentVisibility_Unlisted__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15133);
/* ESM import */var _theme_Heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34403);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 












function BlogTagsPostsPageMetadata(param) {
    let { tag } = param;
    const title = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_10__/* .useBlogTagsPostsPageTitle */.Wi)(tag);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_11__/* .PageMetadata */.d, {
                title: title,
                description: tag.description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */.Z, {
                tag: "blog_tags_posts"
            })
        ]
    });
}
function BlogTagsPostsPageContent(param) {
    let { tag, items, sidebar, listMetadata } = param;
    const title = (0,_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_10__/* .useBlogTagsPostsPageTitle */.Wi)(tag);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_BlogLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z, {
        sidebar: sidebar,
        children: [
            tag.unlisted && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_ContentVisibility_Unlisted__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */.Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "margin-bottom--xl",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */.Z, {
                        as: "h1",
                        children: title
                    }),
                    tag.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                        children: tag.description
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z, {
                        href: tag.allTagsPath,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
                            id: "theme.tags.tagsPageLink",
                            description: "The label of the link targeting the tag list page",
                            children: "View All Tags"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */.Z, {
                items: items
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */.Z, {
                metadata: listMetadata
            })
        ]
    });
}
function BlogTagsPostsPage(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_11__/* .HtmlClassNameProvider */.FG, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */.Z)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_13__/* .ThemeClassNames.wrapper.blogPages */.k.wrapper.blogPages, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_13__/* .ThemeClassNames.page.blogTagPostListPage */.k.page.blogTagPostListPage),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlogTagsPostsPageMetadata, {
                ...props
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlogTagsPostsPageContent, {
                ...props
            })
        ]
    });
}


}),
"15133": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return Unlisted; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67026);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30202);
/* ESM import */var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84681);
/* ESM import */var _theme_Admonition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75094);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function UnlistedBanner(param) {
    let { className } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Admonition__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
        type: "caution",
        title: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .UnlistedBannerTitle */.cI, {}),
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z)(className, _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ThemeClassNames.common.unlistedBanner */.k.common.unlistedBanner),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .UnlistedBannerMessage */.eU, {})
    });
}
function Unlisted(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .UnlistedMetadata */.T$, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UnlistedBanner, {
                ...props
            })
        ]
    });
}


}),
"50790": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return PaginatorNavLink; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67026);
/* ESM import */var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83012);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function PaginatorNavLink(props) {
    const { permalink, title, subLabel, isNext } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z)('pagination-nav__link', isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'),
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
"72501": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TagsListInline)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("67026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("96025");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__("48627");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tags":"tags_jXut","tag":"tag_QGVx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function TagsListInline(param) {
    let { tags } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate/* default */.Z, {
                    id: "theme.tags.tagsListLabel",
                    description: "The label alongside a tag list",
                    children: "Tags:"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: (0,clsx/* default */.Z)(styles_module.tags, 'padding--none', 'margin-left--sm'),
                children: tags.map((tag)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        className: styles_module.tag,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tag/* default */.Z, {
                            ...tag
                        })
                    }, tag.permalink))
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
"30202": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  T$: function() { return UnlistedMetadata; },
  cI: function() { return UnlistedBannerTitle; },
  eU: function() { return UnlistedBannerMessage; },
  ht: function() { return DraftBannerTitle; },
  xo: function() { return DraftBannerMessage; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96025);
/* ESM import */var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94819);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function UnlistedBannerTitle() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
        id: "theme.contentVisibility.unlistedBanner.title",
        description: "The unlisted content banner title",
        children: "Unlisted page"
    });
}
function UnlistedBannerMessage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
        id: "theme.contentVisibility.unlistedBanner.message",
        description: "The unlisted content banner message",
        children: "This page is unlisted. Search engines will not index it, and only users having a direct link can access it."
    });
}
// TODO Docusaurus v4 breaking change (since it's v3 public theme-common API :/)
//  Move this to theme/ContentVisibility/Unlisted
function UnlistedMetadata() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */.Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
            name: "robots",
            content: "noindex, nofollow"
        })
    });
}
function DraftBannerTitle() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
        id: "theme.contentVisibility.draftBanner.title",
        description: "The draft content banner title",
        children: "Draft page"
    });
}
function DraftBannerMessage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
        id: "theme.contentVisibility.draftBanner.message",
        description: "The draft content banner message",
        children: "This page is a draft. It will only be visible in dev and be excluded from the production build."
    });
} //# sourceMappingURL=contentVisibilityTranslations.js.map


}),

}]);