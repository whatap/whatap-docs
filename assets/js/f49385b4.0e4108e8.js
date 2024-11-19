"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[25670],{

/***/ 26554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _theme_DocCardList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33322);


const frontMatter = {
	id: 'sso',
	title: 'Single Sign-On 연동',
	description: 'SSO 계정 연동을 통해서 하나의 아이디와 비밀번호를 이용해 간편하게 계정을 관리하세요.',
	keywords: [
		'SSO',
		'계정',
		'보안'
	],
	displayed_sidebar: 'manageSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "account/sso",
  "title": "Single Sign-On 연동",
  "description": "SSO 계정 연동을 통해서 하나의 아이디와 비밀번호를 이용해 간편하게 계정을 관리하세요.",
  "source": "@site/docs/account/sso.mdx",
  "sourceDirName": "account",
  "slug": "/account/sso",
  "permalink": "/whatap-docs/account/sso",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/account/sso.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "sso",
    "title": "Single Sign-On 연동",
    "description": "SSO 계정 연동을 통해서 하나의 아이디와 비밀번호를 이용해 간편하게 계정을 관리하세요.",
    "keywords": [
      "SSO",
      "계정",
      "보안"
    ],
    "displayed_sidebar": "manageSidebar",
    "isTranslationMissing": false
  },
  "sidebar": "manageSidebar",
  "previous": {
    "title": "멀티팩터 인증",
    "permalink": "/whatap-docs/account/mfa"
  },
  "next": {
    "title": "Okta 연동",
    "permalink": "/whatap-docs/account/okta"
  }
};
const assets = {

};




const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Single Sign-On"
      }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "SSO"
      }), ")은 하나의 계정으로 다양한 애플리케이션에 접속할 수 있는 시스템을 구축하는 솔루션입니다. 와탭 모니터링 서비스 계정으로 외부 애플리케이션 계정에 접속하거나 조직 내 계정 또는 외부 애플리케이션 계정으로 와탭 모니터링 서비스에 접속하는 시스템을 구축할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Single Sign-On(SSO)이란?"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Single Sign-On"
        }), "(SSO)은 한 번의 사용자 인증으로 다수의 애플리케이션 및 웹사이트에 대한 사용자 로그인을 허용하는 인증 솔루션입니다. SSO 솔루션은 한 번 자격 증명이 검증된 사용자에게 반복되는 로그인 없이 모든 암호 보호 리소스에 액세스하여 보안과 사용자 경험을 모두 충족할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "와탭 모니터링 서비스에서는 다음 연동 방법을 제공합니다."
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 33322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocCardList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34164);
/* harmony import */ var _docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37960);
/* harmony import */ var _theme_DocCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46647);
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



function DocCardListForCurrentSidebarCategory({ className  }) {
    const category = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentSidebarCategory */ .$S)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocCardList, {
        items: category.items,
        className: className
    });
}
function DocCardList(props) {
    const { items , className  } = props;
    if (!items) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocCardListForCurrentSidebarCategory, _objectSpread({}, props));
    }
    const filteredItems = (0,_docusaurus_plugin_content_docs_client__WEBPACK_IMPORTED_MODULE_3__/* .filterDocCardListItems */ .d1)(items);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)('row', className),
        children: filteredItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("article", {
                className: "col col--6 margin-bottom--lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_DocCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                    item: item
                })
            }, index))
    });
};


/***/ }),

/***/ 83477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ usePluralForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90062);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://twitter.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms = [
    'zero',
    'one',
    'two',
    'few',
    'many',
    'other', 
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
    const { i18n: { currentLocale  } ,  } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
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


/***/ }),

/***/ 46647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocCard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(28618);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsUtils.js
var docsUtils = __webpack_require__(37960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(83477);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(15418);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(61917);
;// CONCATENATED MODULE: ./src/theme/DocCard/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"cardContainer":"cardContainer_S8oU","cardTitle":"cardTitle_HoSo","cardDescription":"cardDescription_c27F"});
;// CONCATENATED MODULE: ./src/theme/DocCard/index.js









function useCategoryItemsPlural() {
    const { selectMessage  } = (0,usePluralForm/* usePluralForm */.W)();
    return (count)=>selectMessage(count, (0,Translate/* translate */.T)({
            message: '1 item|{count} items',
            id: 'theme.docs.DocCard.categoryDescription.plurals',
            description: 'The default description for a category card in the generated index about how many items this category includes'
        }, {
            count
        }));
}
function CardContainer({ href , children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
        href: href,
        className: (0,clsx/* default */.A)('card padding--lg', styles_module.cardContainer),
        children: children
    });
}
function CardLayout({ href , icon , title , description  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContainer, {
        href: href,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Heading/* default */.A, {
                as: "h2",
                className: (0,clsx/* default */.A)('text--truncate', styles_module.cardTitle),
                title: title,
                children: title
            }),
            description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: (0,clsx/* default */.A)('text--truncate', styles_module.cardDescription),
                title: description,
                children: description
            })
        ]
    });
}
function CardCategory({ item  }) {
    const href = (0,docsUtils/* findFirstSidebarItemLink */.Nr)(item);
    const categoryItemsPlural = useCategoryItemsPlural();
    // Unexpected: categories that don't have a link have been filtered upfront
    if (!href) {
        return null;
    }
    var _description;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLayout, {
        href: href,
        // icon="🗃️"
        title: item.label,
        description: (_description = item.description) !== null && _description !== void 0 ? _description : categoryItemsPlural(item.items.length)
    });
}
function CardLink({ item  }) {
    var _docId;
    // const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
    const doc = (0,docsUtils/* useDocById */.cC)((_docId = item.docId) !== null && _docId !== void 0 ? _docId : undefined);
    var _description;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLayout, {
        href: item.href,
        // icon={icon}
        title: item.label,
        description: (_description = item.description) !== null && _description !== void 0 ? _description : doc === null || doc === void 0 ? void 0 : doc.description
    });
}
function DocCard({ item  }) {
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
};


/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
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


/***/ })

}]);