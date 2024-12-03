"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["59479"], {
"79649": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_faq_index_mdx_a57_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-faq-index-mdx-a57.json
var site_docs_faq_index_mdx_a57_namespaceObject = JSON.parse('{"id":"faq/index","title":"자주 묻는 질문","description":"실시간 옵저버빌리티 플랫폼 와탭 모니터링 서비스의 자주 묻는 질문에 대한 문서입니다.","source":"@site/docs/faq/index.mdx","sourceDirName":"faq","slug":"/faq/","permalink":"/faq/","draft":false,"unlisted":false,"editUrl":"undefined/docs/faq/index.mdx","tags":[],"version":"current","frontMatter":{"id":"index","title":"자주 묻는 질문","description":"실시간 옵저버빌리티 플랫폼 와탭 모니터링 서비스의 자주 묻는 질문에 대한 문서입니다.","keywords":["와탭","모니터링","FAQ"],"isTranslationMissing":false},"sidebar":"referSidebar","previous":{"title":"라이브러리 표기","permalink":"/license/license-open-sources-lib"},"next":{"title":"Application FAQs","permalink":"/faq/apm-faq"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/faq/index.mdx


const frontMatter = {
	id: 'index',
	title: '자주 묻는 질문',
	description: '실시간 옵저버빌리티 플랫폼 와탭 모니터링 서비스의 자주 묻는 질문에 대한 문서입니다.',
	keywords: [
		'와탭',
		'모니터링',
		'FAQ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {DocCardList} = _components;
  if (!DocCardList) _missingMdxReference("DocCardList", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "이 문서는 실시간 옵저버빌리티 플랫폼 와탭 모니터링 서비스에 관해 자주 묻는 질문과 그에 대한 답변을 담고 있습니다. 와탭은 다양한 플랫폼의 성능을 모니터링하고 최적화하는 데 도움을 주는 통합 모니터링 솔루션입니다. 와탭 모니터링 서비스를 사용하면서 발생할 수 있는 일반적인 문제들에 대한 해결 방법을 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)(DocCardList, {})]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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