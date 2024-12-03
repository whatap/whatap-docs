"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["13276"], {
"77396": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_db_dbx_release_notes_mdx_2e3_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-db-dbx-release-notes-mdx-2e3.json
var site_docs_release_notes_db_dbx_release_notes_mdx_2e3_namespaceObject = JSON.parse('{"id":"release-notes/db/dbx-release-notes","title":"dbx Release Notes","description":"DBX 1.6.6","source":"@site/docs/release-notes/db/dbx-release-notes.mdx","sourceDirName":"release-notes/db","slug":"/release-notes/db/dbx-release-notes","permalink":"/release-notes/db/dbx-release-notes","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/db/dbx-release-notes.mdx","tags":[],"version":"current","frontMatter":{"id":"dbx-release-notes","title":"dbx Release Notes","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./src/components/Highlight.js
var Highlight = __webpack_require__("37016");
// EXTERNAL MODULE: ./src/components/UItext.js
var UItext = __webpack_require__("13348");
;// CONCATENATED MODULE: ./docs/release-notes/db/dbx-release-notes.mdx


const frontMatter = {
	id: 'dbx-release-notes',
	title: 'dbx Release Notes',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "DBX 1.6.6",
  "id": "dbx-166",
  "level": 2
}, {
  "value": "PostgreSQL",
  "id": "postgresql",
  "level": 3
}, {
  "value": "Oracle",
  "id": "oracle",
  "level": 3
}, {
  "value": "MySQL",
  "id": "mysql",
  "level": 3
}, {
  "value": "Redis",
  "id": "redis",
  "level": 3
}, {
  "value": "Tibero",
  "id": "tibero",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "dbx-166",
        children: "DBX 1.6.6"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "postgresql",
        children: "PostgreSQL"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
              children: "Feature"
            }), " ", (0,jsx_runtime.jsx)("code", {
              children: "oldest_cur_xid"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "per_to_wraparound"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "per_to_emergency_autovac"
            }), " 지표 추가 (2023-2-2)"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
              children: "Feature"
            }), " ", (0,jsx_runtime.jsx)("code", {
              children: "replication_lag"
            }), " 지표 추가 (2023-3-13)"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "oracle",
        children: "Oracle"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
              children: "Feature"
            }), " ", (0,jsx_runtime.jsx)(UItext/* default */.Z, {
              children: "SQL 통계"
            }), " 메뉴에서 ", (0,jsx_runtime.jsx)("code", {
              children: "sql_id"
            }), " 추가 (2023-2-3)"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
              children: "Feature"
            }), " 락 세션(lock session) 수집 여부 옵션 추가 (2023-3-21)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title=whatap.conf",
              children: "lock=0 # off\nlock=1 # on\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "mysql",
        children: "MySQL"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
          children: "Fixed"
        }), " ", (0,jsx_runtime.jsx)("code", {
          children: "active session"
        }), " 수집 시 발생 에러 수정 (2023-3-28)"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "redis",
        children: "Redis"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
              children: "Fixed"
            }), " connection이 종료되지 않던 오류 수정 (2023-3-21)"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
              children: "Fixed"
            }), " 지표가 출력되지 않는 오류 수정 (2023-4-13)"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "tibero",
        children: "Tibero"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
              children: "Feature"
            }), " 세션 지표(", (0,jsx_runtime.jsx)("code", {
              children: "sesstat"
            }), ") 수집 시 tibero API를 사용하는 방식을 추가해 속도 및 부하 개선 (2023-1-31)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["사용법: DB 서버에 dbx 설치 및 ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "libTbmonXX.so"
                }), " 셋업"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-ini",
                  metastring: "title=whatap.conf",
                  children: "use_tbstat=1\n"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "수집하는 세션 지표에 해당하는 컬럼 항목은 다음과 같습니다."
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "logical_reads"
                    })
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "physical_reads"
                    })
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "block_updates"
                    })
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "parse_count_total"
                    })
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "parse_count_hard"
                    })
                  })
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "다음 메뉴에서 확인할 수 있습니다."
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.em, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "대시보드"
                    })
                  }), "의 ", (0,jsx_runtime.jsx)(_components.em, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "Active Sessions"
                    })
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(_components.em, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "통계/보고서"
                    })
                  }), " > ", (0,jsx_runtime.jsx)(_components.em, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "SQL 통계"
                    })
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
              children: "Feature"
            }), " SQL 통계 메뉴에 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sql_id"
            }), " 추가 (2023-1-16)"]
          }), "\n"]
        }), "\n"]
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