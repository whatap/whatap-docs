"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[36839],{

/***/ 93802:
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
;// CONCATENATED MODULE: ./docs/release-notes/browser/browser-agent.json
const browser_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/release-notes/browser/browser-v1_3_6","ver":"v1.3.6","date":"2024-05-30","Lists":[{"ver":"v1.3.6","hash":"v136","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 브라우저 에이전트의 번들 사이즈 개선</p>"}]},{"url":"https://docs.whatap.io/release-notes/browser/browser-v1_3_5","ver":"v1.3.5","date":"2024-03-21","Lists":[{"ver":"v1.3.5","hash":"v135","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 사용자 정의 이벤트 수집 인터페이스 추가</p>"},{"ver":"v1.3.5","hash":"v135","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 클릭 이벤트 수집 옵션 추가</p>"},{"ver":"v1.3.5","hash":"v135","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Angular 프레임워크 <b>zone.js</b> 관련 대응</p>"}]},{"url":"https://docs.whatap.io/release-notes/browser/browser-v1_3_4","ver":"v1.3.4","date":"2024-02-19","Lists":[{"ver":"v1.3.4","hash":"v134","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 페이지 로드, AJAX 이벤트 발생 시 <b>Network Information API</b>의 다음 지표를 추가 수집</p>","details":"<ul>\\n<li>downlink</li>\\n<li>effectiveType</li>\\n<li>rtt</li>\\n</ul>"},{"ver":"v1.3.4","hash":"v134","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 리소스 이벤트 발생 시 다음 지표를 추가 수집</p>","details":"<ul>\\n<li>deliveryType</li>\\n<li>responseStatus</li>\\n</ul>"},{"ver":"v1.3.4","hash":"v134","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Content Security Policy(CSP) 에러 수집 기능 추가</p>"}]}]');
;// CONCATENATED MODULE: ./docs/release-notes/browser/browser-agent-2023.json
const browser_agent_2023_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/release-notes/browser/browser-v1_3_3","ver":"v1.3.3","date":"2023-12-27","Lists":[{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> AJAX MTID 헤더 옵션 추가(APM 연계 기능)</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>ignoreErrors</code> 에러 필터링 옵션 추가</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 유저 ID 설정 인터페이스 추가</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 필수 수집 유저 ID 설정 인터페이스 추가</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>Iframe</code>으로 로드된 페이지의 경우 수집 대상에서 제외</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> AJAX 응답 값 중 <code>opaque</code> 타입의 상태 코드를 기존 0번에서 10번으로 변경</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>MutaionObserver</code> 인터페이스의 attribute 옵션 제외(요소의 속성이 무한에 가깝게 변경하는 것을 감지함에 있어서 오버헤드가 발생함을 수정)</p>"}]},{"url":"https://docs.whatap.io/release-notes/browser/browser-v1_3_1","ver":"v1.3.1","date":"2023-09-25","Lists":[{"ver":"v1.3.1","hash":"v131","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>cookieSecure</code> 옵션 추가, 브라우저 에이전트가 브라우저 쿠키 스토리지에 user id, session id 등의 값을 저장할 때 secure 옵션을 설정할 수 있습니다.</p>"},{"ver":"v1.3.1","hash":"v131","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 특정 리소스를 수집하지 않는 옵션이 정상 작동하지 않는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/browser/browser-v1_2_2","ver":"v1.2.2","date":"2023-08-08","Lists":[{"ver":"v1.2.2","hash":"v122","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> fetch observer가 fetch api를 오버라이딩할 때 Request 객체를 만들어 리턴하지 않고 arguments를 패스 쓰루하여 리턴하도록 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/browser/browser-v1_3_2","ver":"v1.3.2","date":"2023-10-24","Lists":[{"ver":"v1.3.2","hash":"v132","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fetch 에러 시 AJAX URL이 수집 안되는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/browser/browser-v1_3_0","ver":"v1.3.0","date":"2023-09-06","Lists":[{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 데이터 수집 방법을 옵저버블 패턴 적용</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 모든 디스패처에 대한 옵저버 관리 로직 개선 및 수정</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 매소드 오버라이드 로직 개선</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 페이지로드 중 이탈 시 데이터 수집</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> AJAX 요청 헤더 수집 옵션 추가</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> AJAX aborted 지표 수집</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 페이지 로드 이벤트 처리 로직 개선(인터렉션 100ms)</p>"}]},{"url":"https://docs.whatap.io/release-notes/browser/browser-v1_2_0","ver":"v1.2.0","date":"2023-06-21","Lists":[{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Change","desc":"<p><code class=\\"Change\\">Change</code> 일부 로직에 logger 추가</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> pageloadID(페이지 전환 전까지 고유한 ID) 추가</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 디스패처별 타임아웃 설정 및 최대 대기시간 5초로 설정</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> pcode별 샘플링 강제 설정 옵션 추가</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 워커 압축 로직 개선</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Firefox 브라우저에서 워커 생성 에러 발생 시 에러가 정상 처리 안되는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/browser/browser-v1_2_1","ver":"v1.2.1","date":"2023-07-06","Lists":[{"ver":"v1.2.1","hash":"v121","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 동일 에러의 경우 5초에 1번 수집하도록 설정</p>"},{"ver":"v1.2.1","hash":"v121","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 브라우저 에이전트 파일 내부에 버전 표기</p>"},{"ver":"v1.2.1","hash":"v121","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> AJAX Status 0에 대한 에러 처리가 포함되지 않는 문제 수정</p>"},{"ver":"v1.2.1","hash":"v121","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fetch api 수집 시 세부 시간이 정상 수집되지 않는 문제 수정</p>"}]}]');
;// CONCATENATED MODULE: ./docs/release-notes/browser/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Browser Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/browser/index",
  "title": "Browser Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/docs/release-notes/browser/index.mdx",
  "sourceDirName": "release-notes/browser",
  "slug": "/release-notes/browser/",
  "permalink": "/release-notes/browser/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/browser/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Browser Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "URL",
    "permalink": "/release-notes/url/url-release-notes"
  },
  "next": {
    "title": "Browser Agent v1.3.6",
    "permalink": "/release-notes/browser/browser-v1_3_6"
  }
};
const assets = {

};





const toc = [{
  "value": "Release history for 2024",
  "id": "release-history-for-2024",
  "level": 2
}, {
  "value": "Release history for 2023",
  "id": "release-history-for-2023",
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
        filePath: browser_agent_namespaceObject,
        sort: "date",
        category: "agent"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "release-history-for-2023",
        children: "Release history for 2023"
      }), (0,jsx_runtime.jsx)(ImportJson, {
        filePath: browser_agent_2023_namespaceObject,
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