"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["48405"], {
"73994": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_focus_introduction_mdx_269_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-focus-introduction-mdx-269.json
var site_docs_focus_introduction_mdx_269_namespaceObject = JSON.parse('{"id":"focus/introduction","title":"Focus란?","description":"Focus 서비스를 안내합니다.","source":"@site/docs/focus/introduction.mdx","sourceDirName":"focus","slug":"/focus/introduction","permalink":"/focus/introduction","draft":false,"unlisted":false,"editUrl":"undefined/docs/focus/introduction.mdx","tags":[],"version":"current","frontMatter":{"id":"introduction","title":"Focus란?","description":"Focus 서비스를 안내합니다.","keywords":["Focus"],"isTranslationMissing":false},"sidebar":"pluginSidebar","previous":{"title":"확장 도구(Extensions)","permalink":"/extensions"},"next":{"title":"지원 환경","permalink":"/focus/supported-spec"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/focus/introduction.mdx


const frontMatter = {
	id: 'introduction',
	title: 'Focus란?',
	description: 'Focus 서비스를 안내합니다.',
	keywords: [
		'Focus'
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
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Focus는 와탭 모니터링에서 제공하지 않는 임의의 데이터를 시계열로 업로드하는 프로그램입니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "운영팀에서 자체 개발한 체크 스크립트나 데이터베이스 쿼리를 주기적 혹은 일회성으로 작동하여 수집된 값을 업로드 할 수 있습니다. 업로드된 값은 해당 프로젝트의 분석/메트릭스 챠트 메뉴에서 확인할 수 있습니다. 또 Flex 보드에 추가할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Focus를 사용하려면 와탭 프로젝트 중 Server, Applicatoon(Java, PHP, NodeJS, Python), Database, Kubernetes 프로젝트 중 하나를 선택 후에 해당 프로젝트의 프로젝트 액세스 키 문자열과 수집 서버 IP를 실행 옵션으로 지정하여 사용하실 수 있습니다."
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