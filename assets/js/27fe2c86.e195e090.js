"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[57722],{

/***/ 67823:
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
;// CONCATENATED MODULE: ./docs/release-notes/python/python-agent.json
const python_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/release-notes/python/python-1_7_1","ver":"v1.7.1","date":"2024-10-10","Lists":[{"ver":"v1.7.1","hash":"v171","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>database connection close</code>에서 오류가 발생할 때 프로파일 수집이 중단되는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_7_0","ver":"v1.7.0","date":"2024-09-25","Lists":[{"ver":"v1.7.0","hash":"v170","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> fastapi 0.115.0 버전에 대한 트랜잭션 수집 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_6_6","ver":"v1.6.6","date":"2024-06-07","Lists":[{"ver":"v1.6.6","hash":"v166","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> FastAPI - remoteIP 수집 시 발생하는 버그 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_6_10","ver":"v1.6.10","date":"2024-09-05","Lists":[{"ver":"v1.6.10","hash":"v1610","product":"Python Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> Django 프레임워크에서 ASGI 지원</p>","details":"<ul>\\n<li>\\n<p>Django에서 Uvicorn 사용을 위한 지원 로직을 추가하였습니다.</p>\\n</li>\\n<li>\\n<p>비동기 작업에서 로컬스레드 사용 시 발생할 수 있는 데이터 침해 문제를 해결하기 위해 콘텍스트를 유지하는 로직을 추가했습니다.</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_6_3","ver":"v1.6.3","date":"2024-04-17","Lists":[{"ver":"v1.6.3","hash":"v163","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 쿠버네티스 환경 컨테이너에서 <code>containerID</code>를 찾는 파싱 로직 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_6_4","ver":"v1.6.4","date":"2024-05-14","Lists":[{"ver":"v1.6.4","hash":"v164","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 쿠버네티스 환경 컨테이너에서 <code>containerID</code>를 찾는 파싱 로직 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_6_8","ver":"v1.6.8","date":"2024-08-27","Lists":[{"ver":"v1.6.8","hash":"v168","product":"Python Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> <strong>graphql-core</strong>의 다양한 버전을 지원하기 위해 모듈 트레이싱 기능 추가</p>","details":"<p><strong>graphql-core 3.x+</strong> 버전에서는 <code>graphql.execution.execute</code> 모듈에 계측을 추가하고, <strong>graphql-core 2.x</strong> 버전에서는 <code>graphql.execution.executor</code> 모듈을 지원합니다.</p>"},{"ver":"v1.6.8","hash":"v168","product":"Python Agent","type":"Changed","desc":"<p><code class=\\"Changed\\" type=\\"1\\">Changed</code> <em>trace_module_definition.py</em> 파일을 수정하여 <strong>graphql-core</strong> 버전에 따라 적절한 모듈 계측이 이루어지도록 변경(최신 버전과 구버전을 모두 지원)</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_6_5","ver":"v1.6.5","date":"2024-05-31","Lists":[{"ver":"v1.6.5","hash":"v165","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Python 3.6 gevent 사용 시 트랜잭션 종료 누락 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_6_9","ver":"v1.6.9","date":"2024-09-03","Lists":[{"ver":"v1.6.9","hash":"v169","product":"Python Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> <strong>oracle-client</strong> 모듈에 대한 추적(tracing) 기능 추가</p>","details":"<p>오라클 클라이언트(<strong>oracle-client</strong>)에서 <code>connect</code> 메서드와 <code>Connection.close</code> 메서드에 계측 기능을 적용하여, 데이터베이스 연결과 종료 시점을 추적할 수 있는 기능을 추가했습니다.</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_6_7","ver":"v1.6.7","date":"2024-08-21","Lists":[{"ver":"v1.6.7","hash":"v167","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> TraceContext를 큐에 넣기 전에 깊은 복사(deep copy)하여 데이터가 덮어쓰이지 않도록 방지</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_6_2","ver":"v1.6.2","date":"2024-03-29","Lists":[{"ver":"v1.6.2","hash":"v162","product":"Python Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>exit_with_parent_process_enabled</code> 옵션 추가</p>","details":"<ul>\\n<li>\\n<b>exit_with_parent_process_enabled</b>\\n<em>bool</em>\\n<br>\\n<p>기본값 <code>false</code></p>\\n<p>Python 에이전트 <code>WHATAP_HOME</code> 경로에 있는 <em>whatap.conf</em> 파일을 통해 해당 옵션의 값을 설정하세요. 모니터링 대상 Python 프로세스 종료 시 <code>whatap_python</code> 프로세스의 종료 여부를 설정할 수 있습니다. 옵션의 값을 <code>true</code>로 설졍할 경우 모니터링 대상 애플리케이션 종료 시 <code>whatap_python</code> 프로세스가 함께 종료됩니다. 최대 1분이 소요됩니다.</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_5_9","ver":"v1.5.9","date":"2024-03-11","Lists":[{"ver":"v1.5.9","hash":"v159","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 에이전트 옵션 설정 시 개행 없이 입력되는 현상 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_5_5","ver":"v1.5.5","date":"2024-02-01","Lists":[{"ver":"v1.5.5","hash":"v155","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Frappe 프레임워크로 개발된 애플리케이션에서 데이터베이스 연결 정보에 인스턴스(DB) 정보가 없으면 성능 수집 오류가 발생하는 현상 개선</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_5_8","ver":"v1.5.8","date":"2024-02-18","Lists":[{"ver":"v1.5.8","hash":"v158","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Frappe Application의 user(접속자 수 관련) 중복 집계 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_6_0","ver":"v1.6.0","date":"2024-03-13","Lists":[{"ver":"v1.6.0","hash":"v160","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> FastAPI에서 remote host에 대한 정보를 찾지 못하면 에이전트가 동작하지 않는 현상 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_5_6","ver":"v1.5.6","date":"2024-02-02","Lists":[{"ver":"v1.5.6","hash":"v156","product":"Python Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Superset 지원</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_6_1","ver":"v1.6.1","date":"2024-03-20","Lists":[{"ver":"v1.6.1","hash":"v161","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <em>whatap-hook.log</em> 반복적인 로그 호출 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_5_4","ver":"v1.5.4","date":"2024-01-09","Lists":[{"ver":"v1.5.4","hash":"v154","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Python 에이전트 v1.4.9 버전 이상에서 일부 파이썬 버전의 모듈 의존성 수집 오류 수정</p>","details":"<ul>\\n<li>Python 3.6</li>\\n<li>Python 3.7</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_5_3","ver":"v1.5.3","date":"2024-01-05","Lists":[{"ver":"v1.5.3","hash":"v153","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Python 에이전트 v1.4.9 버전 이상에서 gunicorn 트랜잭션 수집 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/python/python-1_5_2","ver":"v1.5.2","date":"2024-01-03","Lists":[{"ver":"v1.5.2","hash":"v152","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> INJECTION 방식의 로그 수집 코드 오류 수정</p>"}]}]');
;// CONCATENATED MODULE: ./docs/release-notes/python/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Python Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/python/index",
  "title": "Python Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/docs/release-notes/python/index.mdx",
  "sourceDirName": "release-notes/python",
  "slug": "/release-notes/python/",
  "permalink": "/whatap-docs/release-notes/python/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/python/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Python Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Node.js Agent 지난 버전",
    "permalink": "/whatap-docs/release-notes/nodejs/nodejs-previous"
  },
  "next": {
    "title": "Python Agent v1.7.1",
    "permalink": "/whatap-docs/release-notes/python/python-1_7_1"
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
        filePath: python_agent_namespaceObject,
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