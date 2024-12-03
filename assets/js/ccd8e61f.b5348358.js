"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["1091"], {
"57774": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_golang_golang_0_1_11_mdx_ccd_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-golang-golang-0-1-11-mdx-ccd.json
var site_docs_release_notes_golang_golang_0_1_11_mdx_ccd_namespaceObject = JSON.parse('{"id":"release-notes/golang/golang-0_1_11","title":"Go Agent v0.1.11","description":"배포일: 2022-05-26","source":"@site/docs/release-notes/golang/golang-0.1.11.mdx","sourceDirName":"release-notes/golang","slug":"/release-notes/golang/golang-0_1_11","permalink":"/release-notes/golang/golang-0_1_11","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/golang/golang-0.1.11.mdx","tags":[],"version":"current","frontMatter":{"id":"golang-0_1_11","title":"Go Agent v0.1.11","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./src/components/Highlight.js
var Highlight = __webpack_require__("37016");
// EXTERNAL MODULE: ./src/components/UItext.js
var UItext = __webpack_require__("13348");
;// CONCATENATED MODULE: ./docs/release-notes/golang/golang-0.1.11.mdx


const frontMatter = {
	id: 'golang-0_1_11',
	title: 'Go Agent v0.1.11',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "베타 - 버그 수정",
  "id": "베타---버그-수정",
  "level": 2
}, {
  "value": "Parameter 수집 오류 수정",
  "id": "parameter-수집-오류-수정",
  "level": 3
}, {
  "value": "베타 - 업데이트",
  "id": "베타---업데이트",
  "level": 2
}, {
  "value": "database/sql Tx 관련 수정",
  "id": "databasesql-tx-관련-수정",
  "level": 3
}, {
  "value": "웹 트랜잭션에 포함되지 않는 Error 정보 수집",
  "id": "웹-트랜잭션에-포함되지-않는-error-정보-수집",
  "level": 3
}, {
  "value": "error 정보 수집에 error.(Type)정보 수집",
  "id": "error-정보-수집에-errortype정보-수집",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    section: "section",
    strong: "strong",
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "배포일: 2022-05-26"
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "베타---버그-수정",
        children: "베타 - 버그 수정"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "parameter-수집-오류-수정",
        children: "Parameter 수집 오류 수정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["내부에 Paramter 수집을 위해 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "http.Request"
        }), "의 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ParseForm()"
        }), " 함수 호출을 삭제 했습니다. 해당 함수를 미리 호출해서 추후 body 접근 또는 Multipart/form-data 타입의 파라메터 접근에 오류가 발생합니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션 종료시점에 reqest.Form 내용을 조회만 하도록 수정하였습니다."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "베타---업데이트",
        children: "베타 - 업데이트"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "databasesql-tx-관련-수정",
        children: "database/sql Tx 관련 수정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["database/sql driver 내부에서 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Begin()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BeginTx()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Commit()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Rollback()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Close()"
        }), " 함수에 대해서 SQL 구문의 형식으로 수집하던 부분을 일반 메세지로 수집합니다. 트랜잭션 프로파일 정보에서만 조회됩니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "통계"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL"
          })
        }), " 통계에서 더이상 조회되지 않습니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "웹-트랜잭션에-포함되지-않는-error-정보-수집",
        children: "웹 트랜잭션에 포함되지 않는 Error 정보 수집"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기존에 웹 트랜잭션의 경우 context에 whatap 정보를 포함하고(", (0,jsx_runtime.jsx)(_components.code, {
          children: "trace.Start()"
        }), " 호출 필요) 고유 트랜잭션 아이디(", (0,jsx_runtime.jsx)(_components.code, {
          children: "Txid"
        }), ")가 발급된 경우에만 Error 정보를 수집했습니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "고유 트랜잭션 아이디가 없는 경우 수집된 정보는 통계정보에서만 조회할 수 있습니다."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "error-정보-수집에-errortype정보-수집",
        children: "error 정보 수집에 error.(Type)정보 수집"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["에러 통계는 클래스와 메세지로 나누어져 있습니다. 기존에는 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error.Error()"
        }), " 메세지를 클래스와 메세지로 동일하게 수집했습니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["아래와 같이 클래스 항목에 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error.(Type)"
        }), "으로 수집하고, 메세지 항목에 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "error.Error()"
        }), "를 수집합니다."]
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "클래스"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "메세지"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: ["*", (0,jsx_runtime.jsx)(_components.code, {
                children: "errors.errorString"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "custom panic"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: ["*", (0,jsx_runtime.jsx)(_components.code, {
                children: "errors.errorString"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "mysql: driver does not support the use of Named Parameters"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mssql.Error"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "mssql: Incorrect syntax near '1'."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: ["*", (0,jsx_runtime.jsx)(_components.code, {
                children: "echo.HTTPError"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "code=404, message=Not Found"
            })]
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
"37016": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return Status; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


function Status(param) {
    let { children, priority } = param;
    if (priority) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            className: children,
            type: priority,
            children: children
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        className: children,
        children: children
    });
}


}),
"13348": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return UItext; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


function UItext(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "uitext",
        children: children
    });
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