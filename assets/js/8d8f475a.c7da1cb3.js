"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[64644],{

/***/ 20776:
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
;// CONCATENATED MODULE: ./docs/release-notes/server/server-agent.json
const server_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/release-notes/server/server-2_7_0/","ver":"v2.7.0","date":"2024-10-22","Lists":[{"ver":"v2.7.0","hash":"v270","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> 사용자 스크립트 등록 과정에서 validation 메시지 추가</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_6_9","ver":"v2.6.9","date":"2024-10-04","Lists":[{"ver":"v2.6.9","hash":"v269","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> 드라이브 문자가 없는 Windows 서버 볼륨의 마운트 모니터링 기능 추가</p>"},{"ver":"v2.6.9","hash":"v269","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> <a href=\\"https://chrony-project.org/\\" target=\\"_blank\\">chrony</a> 수집 불가 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_6_8","ver":"v2.6.8","date":"2024-09-20","Lists":[{"ver":"v2.6.8","hash":"v268","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> 서버 시간 동기화 지원에 <a href=\\"https://chrony-project.org/\\" target=\\"_blank\\">chrony</a> 추가</p>"},{"ver":"v2.6.8","hash":"v268","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> 윈도우즈 서버 디스크 성능 카운터가 존재하지 않으면 대체 카운터를 사용하도록 개선</p>"},{"ver":"v2.6.8","hash":"v268","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> CentOS 6 프로세스의 File Descriptor 개수 수집 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_6_7","ver":"v2.6.7","date":"2024-09-03","Lists":[{"ver":"v2.6.7","hash":"v267","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> IMDS v2 지원 추가</p>"},{"ver":"v2.6.7","hash":"v267","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> 프로세스 File Descriptor 개수 수집 오류 개선</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_6_0","ver":"v2.6.0","date":"2024-06-18","Lists":[{"ver":"v2.6.0","hash":"v260","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> vxfs v8 지원 추가</p>"},{"ver":"v2.6.0","hash":"v260","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 수집 부하 증가(서버 과부하)시 프로세스 모니터링 수집 주기 20초에서 60초 임시 변경 기능 추가</p>"},{"ver":"v2.6.0","hash":"v260","product":"Server Agent","type":"Change","desc":"<p><code class=\\"Change\\">Change</code> ntpq 종료 처리 개선</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_6_4","ver":"v2.6.4","date":"2024-07-29","Lists":[{"ver":"v2.6.4","hash":"v264","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 로그 파일 키워드 감시 정책 추가 시 대상 파일의 과거 로그를 잘못 읽는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_6_6","ver":"v2.6.6","date":"2024-08-19","Lists":[{"ver":"v2.6.6","hash":"v266","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 불필요한 GPU 지표 필드의 과다 수집으로 인한 표시 오류 개선</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_6_5","ver":"v2.6.5","date":"2024-08-09","Lists":[{"ver":"v2.6.5","hash":"v265","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Infoscale 8.x 버전에서 디스크 IO Utilization 수집 오류 개선</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_6_2","ver":"v2.6.2","date":"2024-07-16","Lists":[{"ver":"v2.6.2","hash":"v262","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Windows 에이전트에서 bat, powershell 스크립트 실행 기능 추가</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_6_1","ver":"v2.6.1","date":"2024-06-26","Lists":[{"ver":"v2.6.1","hash":"v261","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Red Hat 계열 리눅스에서 <code>rpm -a</code>가 주기적으로 실행되는 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_5_8","ver":"v2.5.8","date":"2024-05-21","Lists":[{"ver":"v2.5.8","hash":"v258","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 에이전트 작동 이상 분석 명령 <code>testall</code> 추가</p>"},{"ver":"v2.5.8","hash":"v258","product":"Server Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> vxfs 8.0 버전 이상에서 디스크 IO 수집 이상 개선</p>"},{"ver":"v2.5.8","hash":"v258","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>v2.5.8</code>의 메트릭 태그 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_5_9","ver":"v2.5.9","date":"2024-05-24","Lists":[{"ver":"v2.5.9","hash":"v259","product":"Server Agent","type":"Feature","desc":"<li><code class=\\"Feature\\">Feature</code> zfs v2.2 지원 추가</li>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_5_7","ver":"v2.5.7","date":"2024-05-14","Lists":[{"ver":"v2.5.7","hash":"v257","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>zpool iostat</code> 수집 기능 추가</p>"},{"ver":"v2.5.7","hash":"v257","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 임의의 지정된 프로세스의 pid 별 상세 수집 기능 추가</p>"},{"ver":"v2.5.7","hash":"v257","product":"Server Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> NFS hang 발생 시 데이터 수집 중단 문제 개선</p>"},{"ver":"v2.5.7","hash":"v257","product":"Server Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> ntpq 오류 발생 시 로그 출력 개선</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_5_4","ver":"v2.5.4","date":"2024-03-11","Lists":[{"ver":"v2.5.4","hash":"v254","product":"Server Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> 서버 시간 동기화 명령인 <code>ntpq -p</code> 결과를 통해 시계열로 모니터링하는 기능 추가</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_6_3","ver":"v2.6.3","date":"2024-07-24","Lists":[{"ver":"v2.6.3","hash":"v263","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 서버 인벤토리 수집 옵션 추가</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_5_5","ver":"v2.5.5","date":"2024-03-13","Lists":[{"ver":"v2.5.5","hash":"v255","product":"Server Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Windows 환경에서 와탭 서버 에이전트의 프로세스 간 통신 모드에 SOCKET 모드 추가</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_5_2","ver":"v2.5.2","date":"2024-02-13","Lists":[{"ver":"v2.5.2","hash":"v252","product":"Server Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> 윈도우 운영체제의 이벤트 로그 중 원하는 조건에 부합하는 건을 와탭 로그로 수집 가능</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_5_3","ver":"v2.5.3","date":"2024-03-07","Lists":[{"ver":"v2.5.3","hash":"v253","product":"Server Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 윈도우 운영체제에서 Server 에이전트의 CPU 사용 최적화, WMI 메서드 호출 최소화</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_5_0","ver":"v2.5.0","date":"2024-01-24","Lists":[{"ver":"v2.5.0","hash":"v250","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 네이버 클라우드 환경에 서버 모니터링 에이전트를 설치할 경우 태그에 <code>uptime</code>이 수집되어 <code>uptime</code> 이벤트를 적용할 수 없는 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/server/server-2_5_1","ver":"v2.5.1","date":"2024-01-26","Lists":[{"ver":"v2.5.1","hash":"v251","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 네트워크 카드 이름에 <code>+</code>가 있는 경우 성능 수집 장애 발생 오류 수정</p>"}]}]');
;// CONCATENATED MODULE: ./docs/release-notes/server/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Server Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/server/index",
  "title": "Server Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/docs/release-notes/server/index.mdx",
  "sourceDirName": "release-notes/server",
  "slug": "/release-notes/server/",
  "permalink": "/whatap-docs/release-notes/server/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/server/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Server Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Go Agent 지난 버전",
    "permalink": "/whatap-docs/release-notes/golang/golang-previous"
  },
  "next": {
    "title": "Server Agent v2.7.0",
    "permalink": "/whatap-docs/release-notes/server/server-2_7_0"
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
        filePath: server_agent_namespaceObject,
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