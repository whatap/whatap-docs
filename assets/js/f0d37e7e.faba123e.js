"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["32297"], {
"51221": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "대시보드란?",
  "id": "대시보드란",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, Youtube} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Youtube) _missingMdxReference("Youtube", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 에이전트 설치를 완료했다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://service.whatap.io",
        children: "와탭 모니터링 서비스"
      }), "에 로그인하세요. 초기 화면은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "project_list",
        className: "uitext"
      }), "입니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "project_list",
        className: "uitext"
      }), "에서 에이전트를 설치한 애플리케이션 서버를 확인할 수 있습니다. 에이전트를 설치한 하나의 애플리케이션 서버는 프로젝트이며, 모니터링 단위입니다. 프로젝트 목록의 프로젝트를 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "application_dashboard",
        className: "uitext"
      }), "로 진입할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "대시보드란",
        children: "대시보드란?"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "와탭 모니터링 서비스에서 대시보드는 프로젝트의 전체 현황을 한눈에 파악할 수 있는 기능입니다. 모니터링 중인 전체 자원 규모를 확인할 수 있고 실시간 대시보드에서 모니터링 대상 자원을 필터링할 수 있습니다. 진행 중인 트랜잭션과 종료된 트랜잭션 정보를 실시간으로 업데이트하고 시각화된 차트를 제공합니다. 운영자는 서비스 및 시스템의 정확한 현재 상태를 직관적으로 파악할 수 있습니다. 또한 즉각적인 장애 인지 및 잠재적 문제 요소를 빠르게 식별할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "대시보드를 통해 파악할 수 있는 정보는 다음과 같습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "응답시간 분포 차트를 통해 응답시간 범위를 조정하거나 에러 데이터를 필터링할 수 있습니다."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "진행 중 트랜잭션을 분석하고 종료한 트랜잭션을 실시간으로 업데이트합니다."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "TPS, 응답시간, CPU, Memory, 실시간 사용 등의 리소스 현황을 파악할 수 있습니다."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "최신의 데이터를 자동 업데이트해 실시간 모니터링 서비스를 제공합니다."
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음 동영상을 통해 애플리케이션 대시보드에 대해 알아보세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Youtube, {
        ko: "v_MFd8bUr9o",
        en: "v_MFd8bUr9o",
        ja: "v_MFd8bUr9o"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
"38723": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_golang_dashboard_intro_mdx_f0d_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-golang-dashboard-intro-mdx-f0d.json
var site_docs_golang_dashboard_intro_mdx_f0d_namespaceObject = JSON.parse('{"id":"golang/dashboard-intro","title":"대시보드","description":"와탭 모니터링 대시보드는 프로젝트의 전체 현황을 한 눈에 파악하기 위한 기능을 제공합니다.","source":"@site/docs/golang/dashboard-intro.mdx","sourceDirName":"golang","slug":"/golang/dashboard-intro","permalink":"/golang/dashboard-intro","draft":false,"unlisted":false,"editUrl":"undefined/docs/golang/dashboard-intro.mdx","tags":[],"version":"current","frontMatter":{"id":"dashboard-intro","title":"대시보드","description":"와탭 모니터링 대시보드는 프로젝트의 전체 현황을 한 눈에 파악하기 위한 기능을 제공합니다.","keywords":["대시보드","Go","애플리케이션","애플리케이션 모니터링"],"isTranslationMissing":false},"sidebar":"goSidebar","previous":{"title":"에이전트 관리","permalink":"/golang/agent-manage"},"next":{"title":"애플리케이션 대시보드","permalink":"/golang/dashboard"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_apm-dashboard-intro.mdx
var _apm_dashboard_intro = __webpack_require__("51221");
;// CONCATENATED MODULE: ./docs/golang/dashboard-intro.mdx


const frontMatter = {
	id: 'dashboard-intro',
	title: '대시보드',
	description: '와탭 모니터링 대시보드는 프로젝트의 전체 현황을 한 눈에 파악하기 위한 기능을 제공합니다.',
	keywords: [
		'대시보드',
		'Go',
		'애플리케이션',
		'애플리케이션 모니터링'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._apm_dashboard_intro/* toc */.d$];
function _createMdxContent(props) {
  return (0,jsx_runtime.jsx)(_apm_dashboard_intro/* default */.ZP, {});
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