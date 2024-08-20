"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[26104],{

/***/ 74936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/release-notes/java-batch/java-batch-agent.json
const java_batch_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/release-notes/java-batch/java-batch-2_2_25","ver":"v2.2.25","date":"2024-08-20","Lists":[{"ver":"v2.2.25","hash":"v2225","product":"Java Batch Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>profile_expired_time</code> 옵션의 기본값을 30초로 수정</p>"},{"ver":"v2.2.25","hash":"v2225","product":"Java Batch Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 프로파일 정리 작업 시 에이전트 로그 일부 수정</p>"},{"ver":"v2.2.25","hash":"v2225","product":"Java Batch Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 배치 작업이 끝난 후에도 추적 데이터 수집이 되지 않는 문제 방지</p>"}]},{"url":"https://docs.whatap.io/release-notes/java-batch/java-batch-2_2_24","ver":"v2.2.24","date":"2024-02-27","Lists":[{"ver":"v2.2.24","hash":"v2224","product":"Java Batch Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> hook_service_patterns 옵션 삭제</p>"}]},{"url":"https://docs.whatap.io/release-notes/java-batch/java-batch-2_2_23","ver":"v2.2.23","date":"2024-02-06","Lists":[{"ver":"v2.2.23","hash":"v2223","product":"Java Batch Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 대시보드에서 액티브 트랜잭션 호출 시 발생하는 버그 수정</p>"}]}]');
;// CONCATENATED MODULE: ./docs/release-notes/java-batch/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Java Batch Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/java-batch/index",
  "title": "Java Batch Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/docs/release-notes/java-batch/index.mdx",
  "sourceDirName": "release-notes/java-batch",
  "slug": "/release-notes/java-batch/",
  "permalink": "/whatap-docs/release-notes/java-batch/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/java-batch/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Java Batch Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Java Agent 지난 버전",
    "permalink": "/whatap-docs/release-notes/java/java-previous"
  },
  "next": {
    "title": "Java Batch Agent v2.2.25",
    "permalink": "/whatap-docs/release-notes/java-batch/java-batch-2_2_25"
  }
};
const assets = {

};




const toc = [{
  "value": "Release history for 2024",
  "id": "release-history-for-2024",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head, ImportJson} = _components;
  if (!Head) _missingMdxReference("Head", true);
  if (!ImportJson) _missingMdxReference("ImportJson", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "release-history-for-2024",
        children: "Release history for 2024"
      }), (0,jsx_runtime.jsx)(ImportJson, {
        filePath: java_batch_agent_namespaceObject,
        sort: "date",
        category: "agent"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
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