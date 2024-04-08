"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[84929],{

/***/ 81835:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'install-check',
	title: '설치 점검 사항',
	description: '자바(Java) 에이전트 설치 후 확인해야 할 중요한 점검 사항들에 대해 안내합니다. JAVA_OPTS 설정의 정확성, 애플리케이션 서버의 재시작 필요성 및 모니터링 서비스를 통한 에이전트 연결성 검증을 포함합니다.',
	tags: [
		'Java',
		'에이전트',
		'설치 점검'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "java/install-check",
  "title": "설치 점검 사항",
  "description": "자바(Java) 에이전트 설치 후 확인해야 할 중요한 점검 사항들에 대해 안내합니다. JAVA_OPTS 설정의 정확성, 애플리케이션 서버의 재시작 필요성 및 모니터링 서비스를 통한 에이전트 연결성 검증을 포함합니다.",
  "source": "@site/docs/java/install-check.mdx",
  "sourceDirName": "java",
  "slug": "/java/install-check",
  "permalink": "/whatap-docs/java/install-check",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/install-check.mdx",
  "tags": [
    {
      "label": "Java",
      "permalink": "/whatap-docs/tags/java"
    },
    {
      "label": "에이전트",
      "permalink": "/whatap-docs/tags/에이전트"
    },
    {
      "label": "설치 점검",
      "permalink": "/whatap-docs/tags/설치-점검"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "install-check",
    "title": "설치 점검 사항",
    "description": "자바(Java) 에이전트 설치 후 확인해야 할 중요한 점검 사항들에 대해 안내합니다. JAVA_OPTS 설정의 정확성, 애플리케이션 서버의 재시작 필요성 및 모니터링 서비스를 통한 에이전트 연결성 검증을 포함합니다.",
    "tags": [
      "Java",
      "에이전트",
      "설치 점검"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "Java 1.6 버전 미만",
    "permalink": "/whatap-docs/java/add-jvm-opt/java-under-ver"
  },
  "next": {
    "title": "설치 문제 해결",
    "permalink": "/whatap-docs/java/agent-troubleshooting"
  }
};
const assets = {

};



const toc = [{
  "value": "WAS 다시 시작",
  "id": "was-다시-시작",
  "level": 2
}, {
  "value": "에이전트 연결 확인",
  "id": "에이전트-연결-확인",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["에이전트를 설치한 다음 확인해야할 사항입니다. 만약 설치에 문제가 생겼다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "agent-troubleshooting",
        children: "다음 문서"
      }), "를 참조하세요."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "was-다시-시작",
      children: "WAS 다시 시작"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["애플리케이션 서버를 다시 시작하세요. 구동 로그에서 다음과 같은 와탭 캐릭터 로그가 보인다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JAVA_OPTS"
      }), " 설정을 완료한 것입니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "Nov 16, 2016 3:06:40 AM org.apache.catalina.startup.HostConfig deployDirectory\nINFO: Deployment of web application directory /var/lib/tomcat7/webapps/ROOT has finished in 577 ms\nNov 16, 2016 3:06:40 AM org.apache.coyote.AbstractProtocol start\nINFO: Starting ProtocolHandler [\"http-bio-8080\"]\nNov 16, 2016 3:06:40 AM org.apache.catalina.startup.Catalina start\nINFO: Server startup in 3984 ms\n_  \t ____       ______\n| | /| / / /  ___ /_  __/__ ____\n| |/ |/ / _ \\/ _ `// / / _ `/ _ \\\n|__/|__/_//_/\\_,_//_/  \\_,_/ .__/\n        \t             /_/\nJust Tap, Always Monitoring\nWhaTap Agent version 0.3.9 20161115\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "에이전트-연결-확인",
      children: "에이전트 연결 확인"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://service.whatap.io",
        children: "와탭 모니터링 서비스"
      }), "로 이동하세요. 로그인 후 프로젝트 목록에서 생성한 프로젝트를 선택하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "애플리케이션 대시보드"
        })
      }), " 화면에 연결한 서버의 정보가 나타나면 적용을 완료한 것입니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "after-install-apm-dashboard.png",
      desc: "애플리케이션 대시보드"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["에이전트 이름의 기본값은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "{type}-{ip2}-{ip3}-{port}"
          }), "입니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["에이전트의 이름을 변경하거나 속성을 추가하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "agent-name",
            children: "다음 문서"
          }), "를 참조하세요."]
        }), "\n"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
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