"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[66276],{

/***/ 13867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ metrics_mssql_contentTitle),
  "default": () => (/* binding */ metrics_mssql_MDXContent),
  frontMatter: () => (/* binding */ metrics_mssql_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ metrics_mssql_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_metrics-database-mssql.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));



/*추후 업데이트 필요 관련 지표 추가 및 필드 값으로 교체*/


const toc = [];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "메트릭스 차트"
        })
      }), " 메뉴에서 검색할 수 있는 메트릭스 지표입니다."]
    }), "\n", "\n", (0,jsx_runtime.jsx)("div", {
      class: "metric",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Metric"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "cpu 사용률"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Active Sessions"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "쿼리를 실행 중인 세션 수"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Total Sessions"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "모든 세션 수"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Lock Wait Sessions"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "lock을 wait 하는 세션 수"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Page reads/sec"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "page를 read 한 수"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Page lookups/sec"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "page를 lookup 한 수"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Range Scans/sec"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "range scan 횟수"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Full Scans/sec"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "full scan 횟수"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Page writes/sec"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "page write 횟수"
            })]
          })]
        })]
      })
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


;// CONCATENATED MODULE: ./docs/mssql/metrics-mssql.mdx


const metrics_mssql_frontMatter = {
	id: 'metrics-mssql',
	title: 'MS SQL 지표',
	description: 'MS SQL 데이터베이스 지표에 대해 안내합니다.',
	tags: [
		'SQL Server',
		'메트릭스',
		'데이터베이스',
		'데이터베이스 모니터링'
	]
};
const metrics_mssql_contentTitle = undefined;
const metadata = {
  "id": "mssql/metrics-mssql",
  "title": "MS SQL 지표",
  "description": "MS SQL 데이터베이스 지표에 대해 안내합니다.",
  "source": "@site/docs/mssql/metrics-mssql.mdx",
  "sourceDirName": "mssql",
  "slug": "/mssql/metrics-mssql",
  "permalink": "/whatap-docs/mssql/metrics-mssql",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/mssql/metrics-mssql.mdx",
  "tags": [
    {
      "inline": true,
      "label": "SQL Server",
      "permalink": "/whatap-docs/tags/sql-server"
    },
    {
      "inline": true,
      "label": "메트릭스",
      "permalink": "/whatap-docs/tags/메트릭스"
    },
    {
      "inline": true,
      "label": "데이터베이스",
      "permalink": "/whatap-docs/tags/데이터베이스"
    },
    {
      "inline": true,
      "label": "데이터베이스 모니터링",
      "permalink": "/whatap-docs/tags/데이터베이스-모니터링"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "metrics-mssql",
    "title": "MS SQL 지표",
    "description": "MS SQL 데이터베이스 지표에 대해 안내합니다.",
    "tags": [
      "SQL Server",
      "메트릭스",
      "데이터베이스",
      "데이터베이스 모니터링"
    ]
  },
  "sidebar": "mssqlSidebar",
  "previous": {
    "title": "메트릭스",
    "permalink": "/whatap-docs/mssql/metrics-intro"
  },
  "next": {
    "title": "메트릭스 차트",
    "permalink": "/whatap-docs/mssql/metrics-chart"
  }
};
const assets = {

};




const metrics_mssql_toc = [...toc];
function metrics_mssql_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(MDXContent, {});
}
function metrics_mssql_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(metrics_mssql_createMdxContent, {
      ...props
    })
  }) : metrics_mssql_createMdxContent(props);
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