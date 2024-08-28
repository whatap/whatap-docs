"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[45731],{

/***/ 16716:
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
;// CONCATENATED MODULE: ./docs/release-notes/mobile/mobile-app.json
const mobile_app_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/release-notes/mobile/mobile-app-v1_0_10","ver":"v1.0.10","date":"2024-07-04","Lists":[{"ver":"v1.0.10","hash":"v1010","product":"WhaTap Mobile App","type":"New","desc":"<p><code class=\\"New\\">New</code> <span class=\\"uitext\\">Home</span> 화면 추가</p>"},{"ver":"v1.0.10","hash":"v1010","product":"WhaTap Mobile App","type":"New","desc":"<p><code class=\\"New\\">New</code> 프로젝트 즐겨찾기 기능 추가</p>"},{"ver":"v1.0.10","hash":"v1010","product":"WhaTap Mobile App","type":"New","desc":"<p><code class=\\"New\\">New</code> 로그인 상태 화면 추가</p>"},{"ver":"v1.0.10","hash":"v1010","product":"WhaTap Mobile App","type":"New","desc":"<p><code class=\\"New\\">New</code> 모바일 알림 테스트 기능 추가</p>"}]},{"url":"https://docs.whatap.io/release-notes/mobile/mobile-app-v1_0_9","ver":"v1.0.9","date":"2024-06-05","Lists":[{"ver":"v1.0.9","hash":"v109","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 컨테이너 이벤트 발생 시간이 오류로 표시 되는 문제 수정</p>"},{"ver":"v1.0.9","hash":"v109","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 알림 발생 시 정상 등록된 모바일이 삭제되어 알림을 수신하지 못하는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/mobile/mobile-app-v1_0_8","ver":"v1.0.8","date":"2024-03-25","Lists":[{"ver":"v1.0.8","hash":"v108","product":"WhaTap Mobile App","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 기존에 목록만 표시했던 알림 메시지의 수신 상세 내용을 확인할 수 있도록 수정</p>"},{"ver":"v1.0.8","hash":"v108","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> iOS 앱 종료 상태에서 푸쉬 수신 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/mobile/mobile-app-v1_0_7","ver":"v1.0.7","date":"2024-01-31","Lists":[{"ver":"v1.0.7","hash":"v107","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 활성 에이전트 갯수가 불일치하는 문제 수정</p>","category":"Application"},{"ver":"v1.0.7","hash":"v107","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 윈도우 에이전트의 경우 CPU 차트의 그래프가 생성되지 않는 문제 수정</p>","category":"Server"},{"ver":"v1.0.7","hash":"v107","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Network 차트의 그래프가 생성되지 않는 문제 수정</p>","category":"Server"},{"ver":"v1.0.7","hash":"v107","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> MySQL 상품에서 <span class=\\"uitext\\">Thread Connected 차트</span>의 그래프가 생성되지 않는 문제 수정</p>","category":"Database"}]},{"url":"https://docs.whatap.io/release-notes/mobile/mobile-app-v1_0_6","ver":"v1.0.6","date":"2024-01-26","Lists":[{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 사용자가 <b>알림 설정</b> 권한이 없는 경우 프로젝트 내 <span class=\\"uitext\\">설정</span> 메뉴에서 <span class=\\"uitext\\"></span> 옵션을 노출하지 않도록 수정</p>","category":"공통"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 프로젝트 목록에서 \'데이터 없음\'으로 표시되는 현상 수정</p>","category":"공통"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> OTP 인증 기능을 사용할 때 유효하지 않은 키를 입력하면 메시지를 표시하도록 수정</p>","category":"공통"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 다국어 번역 수정</p>","category":"공통"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 프로젝트 로딩 시간 개선</p>","category":"공통"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 화면 간 이동 시간 개선</p>","category":"공통"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 차트 범례에서 다국어 제목 표시 문제 수정</p>","category":"공통"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <span class=\\"uitext\\">대시보드</span>에 표시되는 차트 순서 변경</p>","category":"Application"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <span class=\\"uitext\\">액티브 트랜잭션</span> 차트의 에이전트 표시 순서를 이름 순으로 변경</p>","category":"Application"},{"ver":"v1.0.6","hash":"v106","product":"WhaTap Mobile App","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <span class=\\"uitext\\">AJAX Hitmap</span> 차트의 데이터가 표시되지 않는 오류 수정</p>","category":"Browser"}]}]');
;// CONCATENATED MODULE: ./docs/release-notes/mobile/index.mdx


const frontMatter = {
	id: 'index',
	title: 'WhaTap Mobile Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/mobile/index",
  "title": "WhaTap Mobile Release Notes",
  "description": "Release history for 2024",
  "source": "@site/docs/release-notes/mobile/index.mdx",
  "sourceDirName": "release-notes/mobile",
  "slug": "/release-notes/mobile/",
  "permalink": "/release-notes/mobile/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/mobile/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "WhaTap Mobile Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Service 지난 버전",
    "permalink": "/release-notes/service/service-previous"
  },
  "next": {
    "title": "v1.0.10",
    "permalink": "/release-notes/mobile/mobile-app-v1_0_10"
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
        filePath: mobile_app_namespaceObject,
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