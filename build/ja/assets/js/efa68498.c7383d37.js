"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[28960],{

/***/ 85849:
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
	id: 'openapi-call-project-stat',
	title: 'プロジェクト統計照会',
	description: 'プロジェクト統計情報を表示するためのOpenAPIに関する説明を提供します。',
	tags: [
		'Open API',
		'API',
		'統計',
		'プロジェクト統計照会'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "apidoc/openapi-call-project-stat",
  "title": "プロジェクト統計照会",
  "description": "プロジェクト統計情報を表示するためのOpenAPIに関する説明を提供します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/apidoc/openapi-call-prject-stat.mdx",
  "sourceDirName": "apidoc",
  "slug": "/apidoc/openapi-call-project-stat",
  "permalink": "/ja/apidoc/openapi-call-project-stat",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/apidoc/openapi-call-prject-stat.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Open API",
      "permalink": "/ja/tags/open-api"
    },
    {
      "inline": true,
      "label": "API",
      "permalink": "/ja/tags/api"
    },
    {
      "inline": true,
      "label": "統計",
      "permalink": "/ja/tags/統計"
    },
    {
      "inline": true,
      "label": "プロジェクト統計照会",
      "permalink": "/ja/tags/プロジェクト統計照会"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "openapi-call-project-stat",
    "title": "プロジェクト統計照会",
    "description": "プロジェクト統計情報を表示するためのOpenAPIに関する説明を提供します。",
    "tags": [
      "Open API",
      "API",
      "統計",
      "プロジェクト統計照会"
    ]
  },
  "sidebar": "openapiSidebar",
  "previous": {
    "title": "Database",
    "permalink": "/ja/apidoc/openapi-call-db"
  },
  "next": {
    "title": "長期統計",
    "permalink": "/ja/apidoc/openapi-call-long-stat"
  }
};
const assets = {

};



const toc = [{
  "value": "プロジェクト内のTPS",
  "id": "プロジェクト内のtps",
  "level": 2
}, {
  "value": "プロジェクトの平均応答時間",
  "id": "プロジェクトの平均応答時間",
  "level": 2
}, {
  "value": "プロジェクトの平均CPU使用率",
  "id": "プロジェクトの平均cpu使用率",
  "level": 2
}, {
  "value": "プロジェクトのデータソース毎のDB Connection数",
  "id": "プロジェクトのデータソース毎のdb-connection数",
  "level": 2
}, {
  "value": "IPベースのトランザクション検索",
  "id": "ipベースのトランザクション検索",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    section: "section",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "プロジェクト内のtps",
        children: "プロジェクト内のTPS"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/raw/tag/app_counter/tps",
          children: "https://api.whatap.io/open/api/raw/tag/app_counter/tps"
        }), "?", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "stitme"
        }), "=[stime]&", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "etime"
        }), "=[etime]&", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "timeMerge"
        }), "=[timeMerge]"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/raw/tag/app_counter/tps?stime=1554163200000&etime=1554422400000&timeMerge=avg\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "66.0\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "プロジェクトの平均応答時間",
        children: "プロジェクトの平均応答時間"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/raw/tag/app_counter/resp_time",
          children: "https://api.whatap.io/open/api/raw/tag/app_counter/resp_time"
        }), "?", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "stitme"
        }), "=[stime]&", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "etime"
        }), "=[etime]&", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "timeMerge"
        }), "=[timeMerge]"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/raw/tag/app_counter/resp_time?stime=1554163200000&etime=1554422400000&timeMerge=avg\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "1640\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "プロジェクトの平均cpu使用率",
        children: "プロジェクトの平均CPU使用率"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/raw/tag/app_host_resource/cpu",
          children: "https://api.whatap.io/open/api/raw/tag/app_host_resource/cpu"
        }), "?", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "stitme"
        }), "=[stime]&", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "etime"
        }), "=[etime]&", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "timeMerge"
        }), "=[timeMerge]"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/raw/tag/app_host_resource/cpu?stime=1554163200000&etime=1554422400000&timeMerge=avg\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "11.05\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "プロジェクトのデータソース毎のdb-connection数",
        children: "プロジェクトのデータソース毎のDB Connection数"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/tag/db_pool_detail/dbconn",
          children: "https://api.whatap.io/open/api/tag/db_pool_detail/dbconn"
        }), "?", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "stitme"
        }), "=[stime]&", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "etime"
        }), "=[etime]&", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "timeMerge"
        }), "=[timeMerge]"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/tag/db_pool_detail/dbconn?stime=1554163200000&etime=1554422400000&timeMerge=avg\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\n  \"pcode\":35,\n  \"time\":1554163200000,\n  \"dbc_total\":[\n    {\n      \"oid\":-963710734,\n      \"oname\":\"TC-29-96-8082\",\n      \"jdbc:db:virtual\":\"jdbc:db:virtual\",\n      \"active\":49,\n      \"idle\":51,\n      \"total\":100\n    },\n  ]\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "ipベースのトランザクション検索",
        children: "IPベースのトランザクション検索"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["ユーザーが指定した開始時間(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "stime"
        }), ")から1時間、特定IPがリクエストしたトランザクションに対して呼び出し件数の多い順にソートして最大100件のURLリストを送信します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "POST"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/v2/yard/flush",
          children: "https://api.whatap.io/open/api/v2/yard/flush"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=\"command\"",
          children: "curl --location 'https://api.whatap.io/open/api/v2/yard/flush' \\\n--header 'x-whatap-token: {{PROJECT API TOKEN}}' \\\n--header 'x-whatap-pcode: {{projectCode}}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"type\": \"profiles\",\n    \"path\": \"/filter/search\",\n    \"pcode\": \"{{projectCode}}\",\n    \"params\": {\n        \"stime\": {{stime}},\n        \"filter\": {\n            \"ip\": \"{{ip}}\"\n        }\n    }\n}'\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Response Field"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Field Type"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "説明"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "elapsed"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "type",
                children: "number"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["開始時間(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "stime"
              }), ") からの経過時間"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "count"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "type",
                children: "number"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "HTTPコール件数"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "url"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "type",
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "クライアントがリクエストしたトランザクション名"
            })]
          })]
        })]
      })]
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