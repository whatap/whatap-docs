"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["19914"], {
"29697": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Desktop)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("67026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__("30140");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js
var Logo = __webpack_require__("44987");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("96025");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Arrow/index.js
var Arrow = __webpack_require__("74575");
;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/CollapseButton/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"collapseSidebarButton":"collapseSidebarButton_JQG6","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_Iseg"});
;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/CollapseButton/index.js






function CollapseButton(param) {
    let { onClick } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        type: "button",
        title: (0,Translate/* translate */.I)({
            id: 'theme.docs.sidebar.collapseButtonTitle',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.sidebar.collapseButtonAriaLabel',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        className: (0,clsx/* default */.Z)('button button--secondary button--outline', styles_module.collapseSidebarButton),
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Arrow/* default */.Z, {
            className: styles_module.collapseSidebarButtonIcon
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__("84681");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var announcementBar = __webpack_require__("22093");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__("69599");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItems/index.js + 7 modules
var DocSidebarItems = __webpack_require__("91434");
;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/Content/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Content_styles_module = ({"menu":"menu_Y1UP","menuWithAnnouncementBar":"menuWithAnnouncementBar_fPny"});
;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/Content/index.js








function useShowAnnouncementBar() {
    const { isActive } = (0,announcementBar/* useAnnouncementBar */.n)();
    const [showAnnouncementBar, setShowAnnouncementBar] = (0,react.useState)(isActive);
    (0,scrollUtils/* useScrollPosition */.RF)((param)=>{
        let { scrollY } = param;
        if (isActive) {
            setShowAnnouncementBar(scrollY === 0);
        }
    }, [
        isActive
    ]);
    return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent(param) {
    let { path, sidebar, className } = param;
    const showAnnouncementBar = useShowAnnouncementBar();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.sidebar.navAriaLabel',
            message: 'Docs sidebar',
            description: 'The ARIA label for the sidebar navigation'
        }),
        className: (0,clsx/* default */.Z)('menu thin-scrollbar', Content_styles_module.menu, showAnnouncementBar && Content_styles_module.menuWithAnnouncementBar, className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            className: (0,clsx/* default */.Z)(ThemeClassNames/* ThemeClassNames,docs,docSidebarMenu */.k.docs.docSidebarMenu, 'menu__list'),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarItems/* default */.Z, {
                items: sidebar,
                activePath: path,
                level: 1
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const Desktop_styles_module = ({"sidebar":"sidebar_mhZE","sidebarWithHideableNavbar":"sidebarWithHideableNavbar__6UL","sidebarHidden":"sidebarHidden__LRd","sidebarLogo":"sidebarLogo_F_0z"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__("2933");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("83012");
;// CONCATENATED MODULE: ./src/theme/DocSidebar/Desktop/index.js











function DocSidebarDesktop(param) {
    let { path, sidebar, onCollapse, isHidden } = param;
    const { navbar: { hideOnScroll }, docs: { sidebar: { hideable } } } = (0,useThemeConfig/* useThemeConfig */.L)();
    const { i18n: { currentLocale } } = (0,useDocusaurusContext/* default */.Z)();
    let whataphome, docshome;
    if (currentLocale == 'ko') {
        whataphome = 'https://www.whatap.io';
        docshome = '/';
    } else {
        whataphome = 'https://www.whatap.io/' + currentLocale;
        docshome = '/' + currentLocale;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.Z)(Desktop_styles_module.sidebar, hideOnScroll && Desktop_styles_module.sidebarWithHideableNavbar, isHidden && Desktop_styles_module.sidebarHidden),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "hold-menu",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                href: docshome,
                                className: "home",
                                children: (0,Translate/* translate */.I)({
                                    id: "docs_Name",
                                    message: "WhaTap Docs"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                to: whataphome,
                                target: "_blank",
                                className: "ext",
                                rel: "noopener noreferrer",
                                children: (0,Translate/* translate */.I)({
                                    id: "whatap_link_go",
                                    message: "와탭 홈페이지 바로가기"
                                })
                            })
                        })
                    ]
                })
            }),
            hideOnScroll && /*#__PURE__*/ (0,jsx_runtime.jsx)(Logo/* default */.Z, {
                tabIndex: -1,
                className: Desktop_styles_module.sidebarLogo
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocSidebarDesktopContent, {
                path: path,
                sidebar: sidebar
            }),
            hideable && /*#__PURE__*/ (0,jsx_runtime.jsx)(CollapseButton, {
                onClick: onCollapse
            })
        ]
    });
}
/* ESM default export */ const Desktop = (/*#__PURE__*/react.memo(DocSidebarDesktop));


}),

}]);