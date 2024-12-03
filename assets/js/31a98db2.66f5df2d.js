"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["60453"], {
"68417": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_nodejs_agent_dbsql_mdx_31a_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-nodejs-agent-dbsql-mdx-31a.json
var site_docs_nodejs_agent_dbsql_mdx_31a_namespaceObject = JSON.parse('{"id":"nodejs/agent-dbsql","title":"DB, SQL","description":"Node.js 에이전트의 DB, SQL 관련 옵션을 제공합니다.","source":"@site/docs/nodejs/agent-dbsql.mdx","sourceDirName":"nodejs","slug":"/nodejs/agent-dbsql","permalink":"/nodejs/agent-dbsql","draft":false,"unlisted":false,"editUrl":"undefined/docs/nodejs/agent-dbsql.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-dbsql","title":"DB, SQL","description":"Node.js 에이전트의 DB, SQL 관련 옵션을 제공합니다.","keywords":["Node.js","DB","SQL"],"isTranslationMissing":false},"sidebar":"nodejsSidebar","previous":{"title":"트랜잭션","permalink":"/nodejs/agent-transaction"},"next":{"title":"HTTPC, API Call","permalink":"/nodejs/agent-httpcapicall"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/nodejs/agent-dbsql.mdx


const frontMatter = {
	id: 'agent-dbsql',
	title: 'DB, SQL',
	description: 'Node.js 에이전트의 DB, SQL 관련 옵션을 제공합니다.',
	keywords: [
		'Node.js',
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
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {ScrollToLink} = _components;
  if (!ScrollToLink) _missingMdxReference("ScrollToLink", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Node.js 에이전트의 DB, SQL 관련 옵션을 제공합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "profile_sql_param_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          }), " ", (0,jsx_runtime.jsx)(ScrollToLink, {
            anchor: "profile-sql-param"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["SQL 파라미터를 수집을 활성화합니다. 단 파라미터는 별도 보안 키를 입력해야 조회할 수 있습니다. 보안 키는 에이전트 설치 경로의 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "paramkey.txt"
          }), " 파일에 6자리로 지정합니다. ", (0,jsx_runtime.jsx)(_components.em, {
            children: "paramkey.txt"
          }), "가 존재하지 않는 경우 자동 생성되며 random 키가 설정됩니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "profile_connection_open_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "트레이스 내역에 DBConnection 오픈 정보를 기록합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "profile_error_sql_fetch_max"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          }), " ", (0,jsx_runtime.jsx)(ScrollToLink, {
            anchor: "profile_error_sql_fetch_max"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "10000"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["SQL Fetch Count(호출 건 수)가 설정한 값을 초과하면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "TOO_MANY_RECORDS"
          }), " 에러로 처리합니다. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0"
          }), "으로 설정하면 에러 처리하지 않습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "profile_error_sql_time_max"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          }), " ", (0,jsx_runtime.jsx)(ScrollToLink, {
            anchor: "profile_error_sql_time_max"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "30000"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["SQL 수행 시간이 설정한 값을 초과하면 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SLOW_SQL"
          }), " 에러로 처리합니다. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0"
          }), "으로 설정하는 경우 에러 처리를 하지 않습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
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
          children: "SQL 문에서 리터럴 부분을 추출해 SQL 문을 정규화하는 기능을 활성화합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "hook_connection_open_patterns"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DB Connection Open 시 호출하는 메소드를 등록합니다. 미리 설정하지 않은 Connection Pool의 getConnection을 등록하는 것이 일반적입니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='Example'",
            children: "hook_connection_open_patterns=mypool.ConPool.getConnection\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "trace_sql_error_stack"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "SQL에 대한 오류 내용을 스택으로 저장(MySQL, MariaDB, PostgreSQL, SQL Server)합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "trace_sql_error_depth"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "50"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "trace_sql_error_stack"
          }), " 옵션을 적용할 경우 저장되는 오류의 라인 수를 설정합니다."]
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