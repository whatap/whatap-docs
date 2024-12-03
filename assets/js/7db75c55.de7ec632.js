"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["17616"], {
"15475": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "에이전트 연결 확인",
  "id": "에이전트-연결-확인",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "에이전트-연결-확인",
      children: "에이전트 연결 확인"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://service.whatap.io",
        children: "와탭 모니터링 서비스"
      }), "로 이동하세요. 로그인 후 프로젝트 목록에서 생성한 프로젝트를 선택하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_appDashboard",
        className: "uitext"
      }), " 메뉴에서 연결한 서버의 데이터가 위젯을 통해 표시된다면 모든 설정을 완료한 것입니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "after-install-apm-dashboard.png",
      desc: "애플리케이션 대시보드"
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
"91495": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_nodejs_install_check_mdx_7db_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-nodejs-install-check-mdx-7db.json
var site_docs_nodejs_install_check_mdx_7db_namespaceObject = JSON.parse('{"id":"nodejs/install-check","title":"설치 점검 사항","description":"에이전트를 설치한 다음 확인해야할 사항입니다.","source":"@site/docs/nodejs/install-check.mdx","sourceDirName":"nodejs","slug":"/nodejs/install-check","permalink":"/nodejs/install-check","draft":false,"unlisted":false,"editUrl":"undefined/docs/nodejs/install-check.mdx","tags":[],"version":"current","frontMatter":{"id":"install-check","title":"설치 점검 사항","description":"에이전트를 설치한 다음 확인해야할 사항입니다.","keywords":["Node.js"],"isTranslationMissing":false},"sidebar":"nodejsSidebar","previous":{"title":"Svelte 환경 설치","permalink":"/nodejs/install-agent-svelte"},"next":{"title":"Node.js 환경 설정","permalink":"/nodejs/set-agent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_check-agent-connection.mdx
var _check_agent_connection = __webpack_require__("15475");
;// CONCATENATED MODULE: ./docs/nodejs/install-check.mdx


const frontMatter = {
	id: 'install-check',
	title: '설치 점검 사항',
	description: '에이전트를 설치한 다음 확인해야할 사항입니다.',
	keywords: [
		'Node.js'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*에이전트 연결 확인*/



const toc = [{
  "value": "애플리케이션 서버 다시 시작",
  "id": "애플리케이션-서버-다시-시작",
  "level": 2
}, ..._check_agent_connection/* toc */.d$];
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
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "에이전트를 설치한 다음 확인해야할 사항입니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "애플리케이션-서버-다시-시작",
        children: "애플리케이션 서버 다시 시작"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "애플리케이션 서버를 다시 시작하세요. 구동 로그에 다음과 같이 와탭 로그가 보인다면 모든 설치를 완료한 것입니다."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "$ node app.js\n20210309 07:45:59 [WHATAP-001] <35632> Start initialize WhaTap Agent...\nExample app listening at http://localhost:3000\n_      ____       ______NODE-AGENT\n| | /| / / /  ___ /_  __/__ ____\n| |/ |/ / _ \\/ _ `// / / _ `/ _ \\\n|__/|__/_//_/\\_,_//_/  \\_,_/ .__/\n                        /_/\nJust Tap, Always Monitoring\nWhaTap Node Agent version 0.4.28, 20210309\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["에이전트가 정보를 수집하기 시작합니다. 에이전트 로그는 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "logs/whatap-yyyymmdd.log"
        }), " 형태로 출력합니다."]
      }), (0,jsx_runtime.jsx)(_check_agent_connection/* default */.ZP, {}), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["에이전트 이름의 기본값은 Node-", (0,jsx_runtime.jsx)(_components.code, {
              children: "{ip2}"
            }), "-", (0,jsx_runtime.jsx)(_components.code, {
              children: "{ip3}"
            }), " 입니다. 클러스터 환경에서는 NODE", (0,jsx_runtime.jsx)(_components.code, {
              children: "{cluster}"
            }), "-", (0,jsx_runtime.jsx)(_components.code, {
              children: "{ip2}"
            }), "-", (0,jsx_runtime.jsx)(_components.code, {
              children: "{ip3}"
            }), " 입니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["에이전트의 이름을 변경하거나 속성을 추가하려면 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "agent-name",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        })
      })]
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