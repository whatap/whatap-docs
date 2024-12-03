"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["26284"], {
"64968": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_license_licenses_mdx_cdd_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-license-licenses-mdx-cdd.json
var site_docs_license_licenses_mdx_cdd_namespaceObject = JSON.parse('{"id":"license/licenses","title":"라이선스","description":"와탭이 사용하는 라이선스를 안내합니다.","source":"@site/docs/license/licenses.mdx","sourceDirName":"license","slug":"/license/licenses","permalink":"/license/licenses","draft":false,"unlisted":false,"editUrl":"undefined/docs/license/licenses.mdx","tags":[],"version":"current","frontMatter":{"id":"licenses","title":"라이선스","description":"와탭이 사용하는 라이선스를 안내합니다.","hide_table_of_contents":true,"toc_max_heading_level":2,"displayed_sidebar":"referSidebar","keywords":["라이선스","오픈 소스","관리"],"isTranslationMissing":false},"sidebar":"referSidebar","previous":{"title":"소프트웨어 프록시","permalink":"/software-proxy"},"next":{"title":"오픈 소스 라이선스","permalink":"/license/license-open-sources"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocCardList/index.js
var DocCardList = __webpack_require__("56098");
;// CONCATENATED MODULE: ./docs/license/licenses.mdx


const frontMatter = {
	id: 'licenses',
	title: '라이선스',
	description: '와탭이 사용하는 라이선스를 안내합니다.',
	hide_table_of_contents: true,
	toc_max_heading_level: 2,
	displayed_sidebar: 'referSidebar',
	keywords: [
		'라이선스',
		'오픈 소스',
		'관리'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭이 사용하고 있는 오픈 소스 라이선스와 사용하는 라이브러리를 안내합니다. 다음 자료 외에 궁금한 사항이나 추가 내용 요청 등의 피드백은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:docs@whatap.io",
        children: "docs@whatap.io"
      }), "로 보내주세요."]
    }), "\n", (0,jsx_runtime.jsx)(DocCardList/* default */.Z, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
"56098": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return DocCardList; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67026);
/* ESM import */var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69369);
/* ESM import */var _theme_DocCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94310);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocCardListForCurrentSidebarCategory(param) {
    let { className } = param;
    const category = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentSidebarCategory */.jA)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocCardList, {
        items: category.items,
        className: className
    });
}
function DocCardList(props) {
    const { items, className } = props;
    if (!items) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocCardListForCurrentSidebarCategory, {
            ...props
        });
    }
    const filteredItems = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .filterDocCardListItems */.MN)(items);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */.Z)('row', className),
        children: filteredItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("article", {
                className: "col col--6 margin-bottom--lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_DocCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
                    item: item
                })
            }, index))
    });
}


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
"94310": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DocCard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("67026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__("83012");
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js
var docsUtils = __webpack_require__("69369");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__("43115");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__("96025");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__("34403");
;// CONCATENATED MODULE: ./src/theme/DocCard/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"cardContainer":"cardContainer_S8oU","cardTitle":"cardTitle_HoSo","cardDescription":"cardDescription_c27F"});
;// CONCATENATED MODULE: ./src/theme/DocCard/index.js









function useCategoryItemsPlural() {
    const { selectMessage } = (0,usePluralForm/* usePluralForm */.c)();
    return (count)=>selectMessage(count, (0,Translate/* translate */.I)({
            message: '1 item|{count} items',
            id: 'theme.docs.DocCard.categoryDescription.plurals',
            description: 'The default description for a category card in the generated index about how many items this category includes'
        }, {
            count
        }));
}
function CardContainer(param) {
    let { href, children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        href: href,
        className: (0,clsx/* default */.Z)('card padding--lg', styles_module.cardContainer),
        children: children
    });
}
function CardLayout(param) {
    let { href, icon, title, description } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContainer, {
        href: href,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.Z, {
                as: "h2",
                className: (0,clsx/* default */.Z)('text--truncate', styles_module.cardTitle),
                title: title,
                children: title
            }),
            description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: (0,clsx/* default */.Z)('text--truncate', styles_module.cardDescription),
                title: description,
                children: description
            })
        ]
    });
}
function CardCategory(param) {
    let { item } = param;
    const href = (0,docsUtils/* findFirstSidebarItemLink */.LM)(item);
    const categoryItemsPlural = useCategoryItemsPlural();
    // Unexpected: categories that don't have a link have been filtered upfront
    if (!href) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLayout, {
        href: href,
        // icon="🗃️"
        title: item.label,
        description: item.description ?? categoryItemsPlural(item.items.length)
    });
}
function CardLink(param) {
    let { item } = param;
    // const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
    const doc = (0,docsUtils/* useDocById */.xz)(item.docId ?? undefined);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLayout, {
        href: item.href,
        // icon={icon}
        title: item.label,
        description: item.description ?? doc?.description
    });
}
function DocCard(param) {
    let { item } = param;
    switch(item.type){
        case 'link':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLink, {
                item: item
            });
        case 'category':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardCategory, {
                item: item
            });
        default:
            throw new Error(`unknown item type ${JSON.stringify(item)}`);
    }
}


}),
"50065": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


}),

}]);