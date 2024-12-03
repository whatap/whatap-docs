"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["25285"], {
"140": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_dotnet_agent_dbsql_mdx_935_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dotnet-agent-dbsql-mdx-935.json
var site_docs_dotnet_agent_dbsql_mdx_935_namespaceObject = JSON.parse('{"id":"dotnet/agent-dbsql","title":"DB, SQL","description":".NET 에이전트의 DB, SQL 관련 옵션을 제공합니다.","source":"@site/docs/dotnet/agent-dbsql.mdx","sourceDirName":"dotnet","slug":"/dotnet/agent-dbsql","permalink":"/dotnet/agent-dbsql","draft":false,"unlisted":false,"editUrl":"undefined/docs/dotnet/agent-dbsql.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-dbsql","title":"DB, SQL","description":".NET 에이전트의 DB, SQL 관련 옵션을 제공합니다.","keywords":[".NET","DB","SQL"],"isTranslationMissing":false},"sidebar":"dotNetSidebar","previous":{"title":"트랜잭션","permalink":"/dotnet/agent-transaction"},"next":{"title":"HTTPC, API Call","permalink":"/dotnet/agent-httpcapicall"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/dotnet/agent-dbsql.mdx


const frontMatter = {
	id: 'agent-dbsql',
	title: 'DB, SQL',
	description: '.NET 에이전트의 DB, SQL 관련 옵션을 제공합니다.',
	keywords: [
		'.NET',
		'DB',
		'SQL'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
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
      children: ".NET 에이전트의 DB, SQL 관련 옵션을 제공합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "trace_sql_normalize_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SQL 문에서 리터럴 부분을 추출해 SQL 문을 정규화하는 기능을 활성화합니다.리터럴 부분은 \"#\"으로 표기합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "profile_sql_resource_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "트레이스에서 SQL을 수집할 때 해당 스텝에서 사용한 CPU와 메모리 사용량을 추적합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "profile_sql_param_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          }), (0,jsx_runtime.jsx)(ScrollToLink, {
            anchor: "profile-sql-param"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "트레이스 내역에 SQL 파라미터 정보를 기록할 때 사용합니다. 파라미터는 별도 보안 키를 입력해야 조회할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["보안 키는 WAS 서버 ", (0,jsx_runtime.jsxs)(_components.em, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "%PROGRAMFILES%"
              }), "\\WhaTap .NET\\paramkey.txt"]
            }), " 파일 내에 6자리로 작성합니다. ", (0,jsx_runtime.jsx)(_components.em, {
              children: "paramkey.txt"
            }), " 파일이 존재하지 않는 경우 랜덤 값으로 자동 생성합니다."]
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