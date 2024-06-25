"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[66233],{

/***/ 37647:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28453);
/* harmony import */ var _site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67068);
/* harmony import */ var _site_src_components_UItext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5379);


const frontMatter = {
	id: 'golang-0_1_7',
	title: 'Go Agent v0.1.7',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar'
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/golang/golang-0_1_7",
  "title": "Go Agent v0.1.7",
  "description": "배포일: 2022-01-04",
  "source": "@site/docs/release-notes/golang/golang-0.1.7.mdx",
  "sourceDirName": "release-notes/golang",
  "slug": "/release-notes/golang/golang-0_1_7",
  "permalink": "/whatap-docs/release-notes/golang/golang-0_1_7",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/golang/golang-0.1.7.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "golang-0_1_7",
    "title": "Go Agent v0.1.7",
    "toc_max_heading_level": 2,
    "displayed_sidebar": "releaseSidebar"
  },
  "sidebar": "releaseSidebar"
};
const assets = {

};





const toc = [{
  "value": "베타 - 업데이트",
  "id": "베타---업데이트",
  "level": 2
}, {
  "value": "database/sql 라이브러리를 지원합니다.",
  "id": "databasesql-라이브러리를-지원합니다",
  "level": 3
}, {
  "value": "설정",
  "id": "설정",
  "level": 4
}, {
  "value": "github.com/go-gonic/gin 라이브러리 지원",
  "id": "githubcomgo-gonicgin-라이브러리-지원",
  "level": 3
}, {
  "value": "github.com/gorilla/mux 라이브러리 지원",
  "id": "githubcomgorillamux-라이브러리-지원",
  "level": 3
}, {
  "value": "github.com/labstack/echo 라이브러리 지원",
  "id": "githubcomlabstackecho-라이브러리-지원",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "배포일: 2022-01-04"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "베타---업데이트",
        children: "베타 - 업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "databasesql-라이브러리를-지원합니다",
        children: "database/sql 라이브러리를 지원합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["database/sql 패키지의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "sql.Open"
        }), " 함수 대신 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatapsql.OpenContext"
        }), " 함수를 사용합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "PrepareContext"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "QueryContext"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ExecContext"
        }), " 등 context를 전달하는 함수를 사용하기를 권장합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["전달하는 context는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.Start()"
        }), "를 통해서 whatap TraceCtx 정보가 있어야합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "\nimport (\n  _ \"github.com/go-sql-driver/mysql\"\n  \"github.com/whatap/go-api/instrumentation/database/sql/whatapsql\"\n)\n\nfunc main() {\n  config := make(map[string]string)\n  trace.Init(config)\n  defer trace.Shutdown()\n  \n  // whataphttp.Func 내부에서 whatap TraceCtx를 생성합니다. \n  http.HandleFunc(\"/query\", whataphttp.Func(func(w http.ResponseWriter, r *http.Request) {\n    ctx := r.Context()\n    \n    // Use WhaTap Driver. whatap의 TraceCtx가 있는 context 를 전달합니다. \n    db, err := whatapsql.OpenContext(ctx, \"mysql\", dataSource)\n    if err != nil {\n      fmt.Println(\"Error whatapsql.Open \", err)\n      return\n    }\n    defer db.Close()\n\n    ... \n    query := \"select id, subject from tbl_faq limit 10\"\n    \n    // whatap TraceCtx가 있는 context 를 전달합니다. \n    if rows, err := db.QueryContext(ctx, query); err == nil {\n      ...\n    }\n  }\n  ...\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/database/sql",
          children: "참조 예제"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "설정",
        children: "설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "go.sql_profile_enabled"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n#Default : true#", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n#Type : boolean#", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {})]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "database/sql 정보 수집여부를 설정합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "githubcomgo-gonicgin-라이브러리-지원",
        children: "github.com/go-gonic/gin 라이브러리 지원"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\n  \"github.com/go-gonic/gin\"\n  \n  \"github.com/whatap/go-api/trace\"\n  \"github.com/whatap/go-api/instrumentation/github.com/go-gonic/gin/whatapgin\"\n)\n\nfunc main() {\n  config := make(map[string]string)\n  trace.Init(config)\n  defer trace.Shutdown()\n  \n  r := gin.Default()\n  \n  // Set the whatap\n  r.Use(whatapgin.Middleware())\n  \n  r.GET(\"/\", func(c *gin.Context) {\n      c.JSON(http.StatusOK, gin.H{\n          \"message\": \"ok\",\n      })\n  })\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/gin-gonic/gin",
          children: "참조 예제"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "githubcomgorillamux-라이브러리-지원",
        children: "github.com/gorilla/mux 라이브러리 지원"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "\nimport (\n  \"github.com/gorilla/mux\"\n  \n  \"github.com/whatap/go-api/trace\"\n  \"github.com/whatap/go-api/instrumentation/github.com/gorilla/mux/whatapmux\"\n)\n\nfunc main() {\n  config := make(map[string]string)\n  trace.Init(config)\n  defer trace.Shutdown()\n  \n  r := mux.NewRouter()\n  \n  // Set the whatap\n  r.Use(whatapmux.Middleware())\n  \n  r.HandleFunc(\"/index\", func(w http.ResponseWriter, r *http.Request) {\n    w.Header().Add(\"Content-Type\", \"text/html\")\n    reply := \"/index <br/>Test Body\"\n    _, _ = w.Write(([]byte)(reply))\n    fmt.Println(\"Response -\", r.Response)\n  }\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/gorilla/mux",
          children: "참조 예제"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "githubcomlabstackecho-라이브러리-지원",
        children: "github.com/labstack/echo 라이브러리 지원"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\n  \"github.com/labstack/echo\"\n  \n  \"github.com/whatap/go-api/trace\"\n  \"github.com/whatap/go-api/instrumentation/github.com/labstack/echo/whatapecho\"\n)\n\nfunc main() {\n  config := make(map[string]string)\n  trace.Init(config)\n  defer trace.Shutdown()\n  \n  ...\n  \n  e := echo.New()\n  \n  // Set the whatap\n  e.Use(whatapecho.Middleware())\n  \n  e.GET(\"/\", func(c echo.Context) error {\n      return c.String(http.StatusOK, \"Hello, World!\\n\")\n  })\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/labstack/echo",
          children: "참조 예제"
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
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

/***/ 67068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Status)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);


function Status({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        className: children,
        children: children
    });
};


/***/ }),

/***/ 5379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ UItext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);


function UItext({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "uitext",
        children: children
    });
};


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