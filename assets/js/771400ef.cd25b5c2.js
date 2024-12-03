"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["11414"], {
"71794": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_apidoc_openapi_call_short_stat_mdx_771_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-apidoc-openapi-call-short-stat-mdx-771.json
var site_docs_apidoc_openapi_call_short_stat_mdx_771_namespaceObject = JSON.parse('{"id":"apidoc/openapi-call-short-stat","title":"단기 조회","description":"단기 조회를 위한 Open API에 대한 설명을 제공합니다.","source":"@site/docs/apidoc/openapi-call-short-stat.mdx","sourceDirName":"apidoc","slug":"/apidoc/openapi-call-short-stat","permalink":"/apidoc/openapi-call-short-stat","draft":false,"unlisted":false,"editUrl":"undefined/docs/apidoc/openapi-call-short-stat.mdx","tags":[],"version":"current","frontMatter":{"id":"openapi-call-short-stat","title":"단기 조회","description":"단기 조회를 위한 Open API에 대한 설명을 제공합니다.","keywords":["Open API","단기 조회","API"],"isTranslationMissing":false},"sidebar":"openapiSidebar","previous":{"title":"장기 통계","permalink":"/apidoc/openapi-call-long-stat"},"next":{"title":"MXQL Open API","permalink":"/apidoc/openapi-mxql"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/apidoc/openapi-call-short-stat.mdx


const frontMatter = {
	id: 'openapi-call-short-stat',
	title: '단기 조회',
	description: '단기 조회를 위한 Open API에 대한 설명을 제공합니다.',
	keywords: [
		'Open API',
		'단기 조회',
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
    a: "a",
    code: "code",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)("span", {
        class: "apitype",
        children: "GET"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://api.whatap.io/open/json/tag/db_pool_detail/dbconn",
        children: "https://api.whatap.io/open/json/tag/db_pool_detail/dbconn"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title='command'",
        children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://dev.whatap.io/open/api/json/tag/db_pool_detail/dbconn?etime=1667520000000\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        metastring: "title='response'",
        children: "{\n  \"pcode\": 17,\n  \"time\": 1667467012037,\n  \"dbc_total\": [\n    {\n      \"oid\": -959062357,\n      \"oname\": \"TC-0-1-8087\",\n      \"databaseUrl\": \"jdbc:db:virtual\",\n      \"active\": 63,\n      \"idle\": 37,\n      \"total\": 100\n    },\n    {\n      \"oid\": -1311576515,\n      \"oname\": \"TC-0-1-8086\",\n      \"databaseUrl\": \"jdbc:db:virtual\",\n      \"active\": 10,\n      \"idle\": 90,\n      \"total\": 100\n    }\n  ]\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Response Field"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Field Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pcode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)("span", {
              class: "api",
              children: "number"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "프로젝트 코드"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)("span", {
              class: "api",
              children: "number"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "조회 시간"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dbc_total"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)("span", {
              class: "api",
              children: "array"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "조회 결과"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "oid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)("span", {
              class: "api",
              children: "number"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "에이전트 ID"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "oname"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)("span", {
              class: "api",
              children: "string"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "에이전트 명"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "databaseUrl"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)("span", {
              class: "api",
              children: "string"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "데이터베이스 URL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "active"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)("span", {
              class: "api",
              children: "number"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "활성화 DB connection 수"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)("span", {
              class: "api",
              children: "number"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "비활성화 DB connection 수"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "total"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)("span", {
              class: "api",
              children: "number"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["총 DB connection 수 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "active"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "idle"
            }), ")"]
          })]
        })]
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