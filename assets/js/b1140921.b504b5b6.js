"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["48079"], {
"88119": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_preview_preview_2_12_0_a_mdx_b11_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-preview-preview-2-12-0-a-mdx-b11.json
var site_docs_release_notes_preview_preview_2_12_0_a_mdx_b11_namespaceObject = JSON.parse('{"id":"release-notes/preview/preview-2_12_0x","title":"Preview 2.12.0.a","description":"preview.whatap.io에서 다음 추가한 신기능과 수정한 내용을 미리 경험할 수 있습니다.","source":"@site/docs/release-notes/preview/preview-2.12.0.a.mdx","sourceDirName":"release-notes/preview","slug":"/release-notes/preview/preview-2_12_0x","permalink":"/release-notes/preview/preview-2_12_0x","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/preview/preview-2.12.0.a.mdx","tags":[],"version":"current","frontMatter":{"id":"preview-2_12_0x","title":"Preview 2.12.0.a","toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"previewSidebar","previous":{"title":"Preview Release Notes","permalink":"/release-notes/preview/"},"next":{"title":"Preview 2.11.0.a","permalink":"/release-notes/preview/preview-2_11_0x"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/preview/preview-2.12.0.a.mdx


const frontMatter = {
	id: 'preview-2_12_0x',
	title: 'Preview 2.12.0.a',
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Preview 2.12.0.a1",
  "id": "preview-2120a1",
  "level": 2
}, {
  "value": "<code>공통</code>",
  "id": "공통",
  "level": 3
}, {
  "value": "<code>Application</code>",
  "id": "application",
  "level": 3
}, {
  "value": "<code>Kubernetes</code>",
  "id": "kubernetes",
  "level": 3
}, {
  "value": "<code>Database</code>",
  "id": "database",
  "level": 3
}, {
  "value": "공통",
  "id": "공통-1",
  "level": 4
}, {
  "value": "PostgreSQL",
  "id": "postgresql",
  "level": 4
}, {
  "value": "Oracle, Oracle Pro",
  "id": "oracle-oracle-pro",
  "level": 4
}, {
  "value": "MySQL",
  "id": "mysql",
  "level": 4
}, {
  "value": "<code>Log</code>",
  "id": "log",
  "level": 3
}, {
  "value": "Preview 2.12.0.a0",
  "id": "preview-2120a0",
  "level": 2
}, {
  "value": "<code>Kubernetes</code>",
  "id": "kubernetes-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, Head, Status, UI} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Head) _missingMdxReference("Head", true);
  if (!Status) _missingMdxReference("Status", true);
  if (!UI) _missingMdxReference("UI", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://preview.whatap.io",
          children: "preview.whatap.io"
        }), "에서 다음 추가한 신기능과 수정한 내용을 미리 경험할 수 있습니다."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "preview-2120a1",
        children: "Preview 2.12.0.a1"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "2024년 11월 28일"
      }), (0,jsx_runtime.jsxs)("div", {
        class: "indentTab",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "공통",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "공통"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_metricsChart",
                className: "uitext"
              }), " ", (0,jsx_runtime.jsx)("code", {
                className: "newfunc",
                children: "New"
              }), " 메뉴에서 다음 기능 추가"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "위젯의 범례 필터링 기능"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "위젯의 범례에 마우스 오버 시 해당하는 차트 라인 하이라이팅 기능"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " 프로젝트의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_flexboard",
                className: "uitext"
              }), " 메뉴에서 대시보드 목록 정렬 선택 옵션 중 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "ITM06324",
                className: "uitext"
              }), " 제거"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " 모든 메뉴에서 화면 상단의 제목 표기 오동작 개선"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "application",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Application"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_txSearch",
            className: "uitext"
          }), " 메뉴에서 경과 시간 필터가 적용되지 않는 문제 수정"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "kubernetes",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Kubernetes"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_cluster",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_etcdDashboard",
                className: "uitext"
              }), " 메뉴에 안내 메시지 모달 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_cluster",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_etcdDashboard",
                className: "uitext"
              }), " 메뉴를 진입하면 설치한 에이전트 버전이 지원 버전보다 낮을 경우 업데이트 안내 화면 표시하는 기능 추가"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "database",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Database"
          })
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "공통-1",
          children: "공통"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)("code", {
                className: "my",
                children: "V2"
              }), " 프로젝트의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_management",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_agentInstall",
                className: "uitext"
              }), " 메뉴에 Windows 환경의 XOS 에이전트 설치 안내 수정"]
            }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
              type: "note",
              children: (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["적용 플랫폼: ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "PostgreSQL"
                  }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "MySQL"
                  }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "CUBRID"
                  }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Altibase"
                  })]
                }), "\n"]
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_dbMonitoring",
                className: "uitext"
              }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "session_kill",
                className: "uitext"
              }), " 기능 실행이 실패할 때 처리되지 않는 문제 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "postgresql",
          children: "PostgreSQL"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_management",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_agentInstall",
            className: "uitext"
          }), " 메뉴에서 계정 생성 기본 및 추가 권한 설정 안내 변경"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "oracle-oracle-pro",
          children: "Oracle, Oracle Pro"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbSqlAnalysis",
            className: "uitext"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)(UI, {
            children: "Access Statistics"
          }), " 탭의 테이블에 데이터가 출력되지 않는 문제 수정"]
        }), (0,jsx_runtime.jsx)(_components.h4, {
          id: "mysql",
          children: "MySQL"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_management",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_agentInstall",
            className: "uitext"
          }), " 메뉴에서 JDBC 다운로드 안내 내용 변경"]
        }), (0,jsx_runtime.jsx)(_components.hr, {}), (0,jsx_runtime.jsx)(_components.h3, {
          id: "log",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Log"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " 로그 활성화 안내 모달의 닫기 버튼 표시하도록 수정"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "preview-2120a0",
        children: "Preview 2.12.0.a0"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "2024년 11월 21일"
      }), (0,jsx_runtime.jsxs)("div", {
        class: "indentTab",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "kubernetes-1",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Kubernetes"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_cluster",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_ingressList",
                className: "uitext"
              }), " 메뉴의 상세 정보에 애플리케이션 정보 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " 다음 메뉴 경로의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL08422",
                className: "uitext"
              }), " 창에서 각 메뉴로 이동할 수 있는 링크를 리소스 목록에 추가"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "side_cluster",
                    className: "uitext"
                  }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                    sid: "side_nodeTimeline",
                    className: "uitext"
                  })]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "side_cluster",
                    className: "uitext"
                  }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                    sid: "side_ingressList",
                    className: "uitext"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
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