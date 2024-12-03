"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["67116"], {
"65658": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_nodejs_agent_httpcapicall_mdx_335_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-nodejs-agent-httpcapicall-mdx-335.json
var site_docs_nodejs_agent_httpcapicall_mdx_335_namespaceObject = JSON.parse('{"id":"nodejs/agent-httpcapicall","title":"HTTPC, API Call","description":"Node.js 에이전트의 HTTPC, API Call 관련 옵션을 제공합니다.","source":"@site/docs/nodejs/agent-httpcapicall.mdx","sourceDirName":"nodejs","slug":"/nodejs/agent-httpcapicall","permalink":"/nodejs/agent-httpcapicall","draft":false,"unlisted":false,"editUrl":"undefined/docs/nodejs/agent-httpcapicall.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-httpcapicall","title":"HTTPC, API Call","description":"Node.js 에이전트의 HTTPC, API Call 관련 옵션을 제공합니다.","keywords":["Node.js","HTTPC","API"],"isTranslationMissing":false},"sidebar":"nodejsSidebar","previous":{"title":"DB, SQL","permalink":"/nodejs/agent-dbsql"},"next":{"title":"사용자 수","permalink":"/nodejs/agent-number-of-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/nodejs/agent-httpcapicall.mdx


const frontMatter = {
	id: 'agent-httpcapicall',
	title: 'HTTPC, API Call',
	description: 'Node.js 에이전트의 HTTPC, API Call 관련 옵션을 제공합니다.',
	keywords: [
		'Node.js',
		'HTTPC',
		'API'
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
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {ScrollToLink} = _components;
  if (!ScrollToLink) _missingMdxReference("ScrollToLink", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Node.js 에이전트의 HTTPC, API Call 관련 옵션을 제공합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "profile_error_httpc_time_max"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          }), " ", (0,jsx_runtime.jsx)(ScrollToLink, {
            anchor: "profile_error_httpc_time_max"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "10000"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["HTTPC 수행 시간이 지정한 값을 초과하면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SLOW_HTTPC"
          }), " 에러로 처리합니다. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0"
          }), "으로 설정하면 에러 처리하지 않습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "hook_httpc_patterns"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "HTTP Call을 수행하는 클래스를 설정합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "httpc_not_found_ignore"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Not Found 오류가 특정 시간(", (0,jsx_runtime.jsx)(_components.code, {
            children: "httpc_not_found_ignore_time"
          }), ")에 50건 이상 발생하면 모니터링 감지를 무시합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "httpc_not_found_ignore_time"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Milisecond"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "300000"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "httpc_not_found_ignore"
          }), " 값이 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          }), "이면 Not Found 오류를 무시할 시간을 설정합니다."]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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