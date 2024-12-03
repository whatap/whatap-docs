"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["28208"], {
"44343": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_python_agent_httpcapicall_mdx_4f1_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-python-agent-httpcapicall-mdx-4f1.json
var site_docs_python_agent_httpcapicall_mdx_4f1_namespaceObject = JSON.parse('{"id":"python/agent-httpcapicall","title":"HTTPC, API Call","description":"Python 에이전트 HTTPC, API Call 설정을 제공합니다.","source":"@site/docs/python/agent-httpcapicall.mdx","sourceDirName":"python","slug":"/python/agent-httpcapicall","permalink":"/python/agent-httpcapicall","draft":false,"unlisted":false,"editUrl":"undefined/docs/python/agent-httpcapicall.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-httpcapicall","title":"HTTPC, API Call","description":"Python 에이전트 HTTPC, API Call 설정을 제공합니다.","keywords":["Python","HTTPC","API Call","설정하기"],"isTranslationMissing":false},"sidebar":"pySidebar","previous":{"title":"DB, SQL","permalink":"/python/agent-dbsql"},"next":{"title":"사용자 수","permalink":"/python/agent-number-of-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/python/agent-httpcapicall.mdx


const frontMatter = {
	id: 'agent-httpcapicall',
	title: 'HTTPC, API Call',
	description: 'Python 에이전트 HTTPC, API Call 설정을 제공합니다.',
	keywords: [
		'Python',
		'HTTPC',
		'API Call',
		'설정하기'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Python 에이전트의 HTTPC, API Call 관련 옵션을 제공합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "profile_httpc_resource_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "트레이스에서 HTTP Call 스텝이 수집될 때 해당 스텝에서 사용한 CPU와 Memory 사용량을 추적합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "trace_httpc_normalize_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "외부 HTTP 호출(HTTP Call) URL을 파싱하여 정규화하는 기능을 활성화합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "trace_httpc_normalize_urls"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "외부 HTTP 호출하는 URL을 파싱하여 정규화합니다. 호출 URL 패턴을 파싱하여 패스 파라미터를 제거합니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["예를 들면, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), "라고 선언하면 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/123/b"
          }), " → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), "로 치환합니다. 여러 개를 등록할 때는 콤마(", (0,jsx_runtime.jsx)(_components.em, {
            children: ","
          }), ")를 사용합니다. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/*/b"
          }), "로 사용하여 특정 형식의 패스 파라미터를 제거하여 수집할 수 있습니다."]
        }), "\n"]
      }), "\n"]
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