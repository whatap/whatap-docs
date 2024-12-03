"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["8402"], {
"76640": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_reference_changes_db_xos_metrics_mdx_79a_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-reference-changes-db-xos-metrics-mdx-79a.json
var site_docs_reference_changes_db_xos_metrics_mdx_79a_namespaceObject = JSON.parse('{"id":"reference/changes-db-xos-metrics-guide","title":"XOS2 지표 폐기 안내","description":"데이터베이스 모니터링에서 XOS 에이전트를 통해 제공되는 2개의 CPU 지표를 DBX 에이전트 v1.7.0부터 통합해 제공될 예정입니다.","source":"@site/docs/reference/changes-db-xos-metrics.mdx","sourceDirName":"reference","slug":"/reference/changes-db-xos-metrics-guide","permalink":"/reference/changes-db-xos-metrics-guide","draft":false,"unlisted":false,"editUrl":"undefined/docs/reference/changes-db-xos-metrics.mdx","tags":[],"version":"current","frontMatter":{"id":"changes-db-xos-metrics-guide","title":"XOS2 지표 폐기 안내","description":"데이터베이스 모니터링에서 XOS 에이전트를 통해 제공되는 2개의 CPU 지표를 DBX 에이전트 v1.7.0부터 통합해 제공될 예정입니다.","keywords":["데이터베이스","XOS 에이전트"],"displayed_sidebar":"dbSidebar","isTranslationMissing":false},"sidebar":"dbSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/reference/changes-db-xos-metrics.mdx


const frontMatter = {
	id: 'changes-db-xos-metrics-guide',
	title: 'XOS2 지표 폐기 안내',
	description: '데이터베이스 모니터링에서 XOS 에이전트를 통해 제공되는 2개의 CPU 지표를 DBX 에이전트 v1.7.0부터 통합해 제공될 예정입니다.',
	keywords: [
		'데이터베이스',
		'XOS 에이전트'
	],
	displayed_sidebar: 'dbSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "XOS 지표 변경 사항",
  "id": "xos-지표-변경-사항",
  "level": 2
}, {
  "value": "DBX 에이전트 업데이트하기",
  "id": "dbx-에이전트-업데이트하기",
  "level": 2
}, {
  "value": "변경된 지표 확인하기",
  "id": "변경된-지표-확인하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, ImgLang, Link} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!Link) _missingMdxReference("Link", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "데이터베이스 서버에 XOS 에이전트를 설치하면 서버의 자원 상태를 모니터링할 수 있습니다. 수집하는 주요 지표는 다음 문서를 참조하세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Link, {
              to: "https://docs.whatap.io/postgresql/instance-monitoring#column-info",
              target: "_blank",
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "instance_monitoring"
              })
            }), " - ", (0,jsx_runtime.jsx)("b", {
              children: "Process information"
            }), " 탭을 확인하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Link, {
              to: "https://docs.whatap.io/postgresql/metrics-data-list",
              target: "_blank",
              children: "메트릭스 지표"
            }), " - ", (0,jsx_runtime.jsx)("b", {
              children: "XOS"
            }), " 카테고리의 지표"]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "xos-지표-변경-사항",
        children: "XOS 지표 변경 사항"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["데이터베이스 모니터링에서는 CPU 사용량과 관련해 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CPU(xos)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CPU(xos2)"
        }), " 지표 두 가지를 제공하고 있었습니다. DBX 에이전트 1.7.0 버전 이상에서는 두 지표가 하나의 단위로 통합될 예정입니다."]
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "변경 전 지표 이름"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "변경 후 지표 이름"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "단위"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "cpu(xos2)"
              }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu(xos)"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "사용률(%)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_idle(xos2)"
              }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_idle(xos)"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_idle(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "%"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_sys(xos2)"
              }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_sys(xos)"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_sys(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "%"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_user(xos2)"
              }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_user(xos)"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_user(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "%"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_iowait(xos2)"
              }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_iowait(xos)"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_iowait(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "%"
            })]
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["DBX 에이전트 1.7.0 버전 이하에서 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cpu(xos)"
          }), " 지표의 값이 9000이라면 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cpu(xos2)"
          }), " 지표의 값은 90으로 수집되었습니다."]
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["DBX 에이전트를 1.7.0 버전으로 업데이트한 후에 기존 지표로 경고 알림을 설정했거나 대시보드를 구성했다면 지표 설정을 변경해야 합니다. ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "event_statistic",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "event_setting",
          className: "uitext"
        }), " 메뉴에서 설정한 임계값은 자동 전환됩니다. 이미 설정한 경고 알림 중 위 5가지 지표를 사용한 알림이 제대로 전환됐는지 확인하세요. 다음 내용을 참고하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "dbx-에이전트-업데이트하기",
        children: "DBX 에이전트 업데이트하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "management",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "agent_update",
          className: "uitext"
        }), " 메뉴에서 1.7.0 버전 이하의 에이전트를 업데이트하세요."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "changes/refer-db-agent-update-170.png",
        desc: "에이전트 업데이트"
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["에이전트 업데이트에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../postgresql/agent-manage",
            children: "다음 문서"
          }), "를 참조하세요."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "변경된-지표-확인하기",
        children: "변경된 지표 확인하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["DBX 에이전트 업데이트 후 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "event_statistic",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "event_setting",
          className: "uitext"
        }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "database",
          className: "uitext"
        }), " 탭에서 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cpu(xos2)"
        }), " 지표가 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cpu(xos)"
        }), " 지표로 변경됐는지 확인하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DBX 에이전트 업데이트 전"
            })
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "changes/refer-db-alert-xos2.png",
            desc: "이벤트 설정"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DBX 에이전트 업데이트 후"
            })
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "changes/refer-db-alert-xos.png",
            desc: "이벤트 설정"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "tip",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "사용자가 설정한 메트릭스 알림과 대시보드의 설정들은 직접 수정해야 합니다."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "event_statistic",
                className: "uitext"
              }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "event_setting",
                className: "uitext"
              }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "metrics",
                className: "uitext"
              }), " 탭에서 ", (0,jsx_runtime.jsx)("code", {
                children: "cpu(xos2)"
              }), " 지표로 설정한 이벤트를 ", (0,jsx_runtime.jsx)("code", {
                children: "cpu(xos)"
              }), " 지표로 변경하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["다음 메뉴 경로에서 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu(xos2)"
              }), " 지표를 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu(xos)"
              }), " 지표로 변경해야할 설정이 있는지 확인하세요."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "dashboard",
                    className: "uitext"
                  }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                    sid: "instance_monitoring",
                    className: "uitext"
                  })]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "dashboard",
                    className: "uitext"
                  }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                    sid: "flexboard",
                    className: "uitext"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["3월 정기 서비스 배포(2024.3.27 18:00) 후 대시보드에서 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu(xos)"
              }), " 지표가 기존과 다르게 표시된다면 DBX 에이전트를 1.7.0 버전 이상으로 업데이트하세요. 에이전트 업데이트에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "../postgresql/agent-manage",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["도움이 필요한 고객의 경우 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://service.whatap.io",
                children: "와탭 모니터링 서비스"
              }), " 화면 오른쪽 위에 ", (0,jsx_runtime.jsx)(_components.img, {
                alt: "채팅 문의 아이콘",
                src: (__webpack_require__(62159)/* ["default"] */.Z) + "",
                width: "24",
                height: "24"
              }), " ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "채팅 문의"
              }), "를 통해서 지원받을 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })
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
"62159": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIKICAgIGQ9Ik0yIDEyQzIgNi40NzcgNi40NzggMiAxMiAyczEwIDQuNDc3IDEwIDEwYTkuOTUyIDkuOTUyIDAgMDEtMS43NDQgNS42NEwyMiAyMmwtNC4zNi0xLjc0NEE5Ljk1MiA5Ljk1MiAwIDAxMTIgMjJDNi40NzggMjIgMiAxNy41MjMgMiAxMnoiCiAgICBmaWxsPSIjMjk2Q0YyIiAvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIgogICAgZD0iTTkgMTIuNWExLjUgMS41IDAgMTEtMyAwIDEuNSAxLjUgMCAwMTMgMHptNC41IDBhMS41IDEuNSAwIDExLTMgMCAxLjUgMS41IDAgMDEzIDB6bTMgMS41YTEuNSAxLjUgMCAxMDAtMyAxLjUgMS41IDAgMDAwIDN6IgogICAgZmlsbD0iI2ZmZiIgLz4KPC9zdmc+");

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