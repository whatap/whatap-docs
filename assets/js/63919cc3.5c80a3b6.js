"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["87158"], {
"73714": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_dotnet_agent_httpcapicall_mdx_639_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dotnet-agent-httpcapicall-mdx-639.json
var site_docs_dotnet_agent_httpcapicall_mdx_639_namespaceObject = JSON.parse('{"id":"dotnet/agent-httpcapicall","title":"HTTPC, API Call","description":".NET 에이전트의 HTTPC, API Call 관련 옵션을 제공합니다.","source":"@site/docs/dotnet/agent-httpcapicall.mdx","sourceDirName":"dotnet","slug":"/dotnet/agent-httpcapicall","permalink":"/dotnet/agent-httpcapicall","draft":false,"unlisted":false,"editUrl":"undefined/docs/dotnet/agent-httpcapicall.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-httpcapicall","title":"HTTPC, API Call","description":".NET 에이전트의 HTTPC, API Call 관련 옵션을 제공합니다.","keywords":[".NET","HTTPC","API"],"isTranslationMissing":false},"sidebar":"dotNetSidebar","previous":{"title":"DB, SQL","permalink":"/dotnet/agent-dbsql"},"next":{"title":"사용자 수","permalink":"/dotnet/agent-number-of-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/dotnet/agent-httpcapicall.mdx


const frontMatter = {
	id: 'agent-httpcapicall',
	title: 'HTTPC, API Call',
	description: '.NET 에이전트의 HTTPC, API Call 관련 옵션을 제공합니다.',
	keywords: [
		'.NET',
		'HTTPC',
		'API'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "HTTPC, API Call 옵션",
  "id": "httpc-api-call-옵션",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h3",
    children: [(0,jsx_runtime.jsx)(_components.h3, {
      id: "httpc-api-call-옵션",
      children: "HTTPC, API Call 옵션"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: ".NET 에이전트의 HTTPC, API Call 관련 옵션을 제공합니다."
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
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
          children: "트랜잭션 내 HTTPC URL을 파싱해 정규화하는 기능을 활성화합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "trace_httpc_normalize_urls"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "NONE"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "정규화할 HTTPC URL 패턴을 설정합니다. 호출 URL 패턴을 파싱해 패스 파라미터를 제거합니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["예시, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/a/{v}/b"
            }), "라고 선언하면 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a/123/b"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a/{v}/b"
            }), "로 치환합니다. 여러 개를 등록할 때는 쉼표(,)를 구분자로 사용합니다. 치환 패턴 정리 후 보완이 필요합니다."]
          })
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