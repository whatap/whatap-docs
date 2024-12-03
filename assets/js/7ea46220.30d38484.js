"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["32143"], {
"90538": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_php_php_2_6_0_mdx_7ea_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-php-php-2-6-0-mdx-7ea.json
var site_docs_release_notes_php_php_2_6_0_mdx_7ea_namespaceObject = JSON.parse('{"id":"release-notes/php/php-2_6_0","title":"PHP Agent v2.6.0","description":"2023년 1월 4일","source":"@site/docs/release-notes/php/php-2.6.0.mdx","sourceDirName":"release-notes/php","slug":"/release-notes/php/php-2_6_0","permalink":"/release-notes/php/php-2_6_0","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/php/php-2.6.0.mdx","tags":[],"version":"current","frontMatter":{"id":"php-2_6_0","title":"PHP Agent v2.6.0","toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"PHP Agent v2.6.1","permalink":"/release-notes/php/php-2_6_1"},"next":{"title":"PHP Agent 지난 버전","permalink":"/release-notes/php/php-previous"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./src/components/Highlight.js
var Highlight = __webpack_require__("37016");
// EXTERNAL MODULE: ./src/components/UItext.js
var UItext = __webpack_require__("13348");
;// CONCATENATED MODULE: ./docs/release-notes/php/php-2.6.0.mdx


const frontMatter = {
	id: 'php-2_6_0',
	title: 'PHP Agent v2.6.0',
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "2023년 1월 4일",
  "id": "2023년-1월-4일",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h4: "h4",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h4",
    children: [(0,jsx_runtime.jsx)(_components.h4, {
      id: "2023년-1월-4일",
      children: "2023년 1월 4일"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
        children: "New"
      }), " PHP 8.2 버전 지원"]
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nts, zts 지원"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "mysqli::execute_query"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mysqli_execute_query"
        }), " 함수 추적"]
      }), "\n"]
    })]
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
"37016": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return Status; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


function Status(param) {
    let { children, priority } = param;
    if (priority) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            className: children,
            type: priority,
            children: children
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        className: children,
        children: children
    });
}


}),
"13348": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return UItext; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


function UItext(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "uitext",
        children: children
    });
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