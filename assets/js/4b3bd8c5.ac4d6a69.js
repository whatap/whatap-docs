"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["24805"], {
"22190": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_otel_otel_v_0_2_0_mdx_4b3_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-otel-otel-v-0-2-0-mdx-4b3.json
var site_docs_release_notes_otel_otel_v_0_2_0_mdx_4b3_namespaceObject = JSON.parse('{"id":"release-notes/otel/otel-v0_2_0","title":"OTEL Agent v0.2.0","description":"2024년 06월 19일","source":"@site/docs/release-notes/otel/otel-v0.2.0.mdx","sourceDirName":"release-notes/otel","slug":"/release-notes/otel/otel-v0_2_0","permalink":"/release-notes/otel/otel-v0_2_0","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/otel/otel-v0.2.0.mdx","tags":[],"version":"current","frontMatter":{"id":"otel-v0_2_0","title":"OTEL Agent v0.2.0","toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"otelSidebar","previous":{"title":"OTEL Agent v0.2.1","permalink":"/release-notes/otel/otel-v0_2_1"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/otel/otel-v0.2.0.mdx


const frontMatter = {
	id: 'otel-v0_2_0',
	title: 'OTEL Agent v0.2.0',
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    pre: "pre",
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
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 06월 19일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "New"
          }), " linux aarch64 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "New"
          }), " span events에서 에러 정보 추가 수집"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["에러 내용이 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "attribute"
              }), "가 아닌 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "event"
              }), "로 유입되는 경우를 위해 수집합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "event"
              }), "에서 에러를 찾기 위한 에이전트 설정 옵션을 추가하세요."]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title=\"whatap.conf\"",
                children: "otel_events_exception_keys=exception.type\notel_events_error_message_keys=exception.message\notel_events_error_stack_keys=exception.stacktrace\notel_events_error_esc_keys=exception.escaped\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Changed"
          }), " 기존 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "paramkey.txt"
          }), " 대신 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "security.conf"
          }), " 파일 사용"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기존 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "security.conf"
          }), " 파일의 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "paramkey"
          }), " 키의 값을 사용합니다. 기본값은 무작위값이 아닌 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WHATAP"
          }), "으로 지정도록 변경합니다. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WHATAP"
          }), " 지정되면 키 입력없이 복호화할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Changed"
          }), " SQL 문장의 정규화 옵션 설정 변경"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["SQL 문장에서 파라미터를 분리하여 정규화하는 기능을 항상 활성화하세요. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "trace_sql_normalize_enabled"
              }), " 옵션을 항상 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "true"
              }), "로 설정하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "이미 정규화 옵션을 비활성화(정규화 중지 설정)한 상태라면, 정규화해서 파라미터를 별도 표기하는 설정을 활성화하세요."
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "profile_sql_param_enabled"
                }), " 옵션을 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                }), "로 설정하세요."]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "정규화된 파라미터를 별도 암호화하여 수집합니다."
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.em, {
                  children: "security.conf"
                }), "의 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "paramkey"
                }), "로 복호화하여 데이터를 확인할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "다운로드"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "OS"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "파일 형식"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "아키텍처"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "다운로드"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "Red Hat / CentOS / Amazon linux"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              style: {
                textAlign: "center"
              },
              children: "RPM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "x86 x64"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/centos/6/x86_64/whatap-otel-0.2-0.x86_64.rpm",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "aarch64"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/centos/7/aarch64/whatap-otel-0.2-0.aarch64.rpm",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "Ubuntu 12 and above / Debian"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              style: {
                textAlign: "center"
              },
              children: "DEB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "amd64"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/debian/unstable/whatap-otel_0.2.0_amd64.deb",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "arm64"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/debian/unstable/whatap-otel_0.2.0_arm64.deb",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "Alpine linux"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              style: {
                textAlign: "center"
              },
              children: "tar gzip"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "x86 x64"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/alpine/x86_64/whatap-otel-0.2.0.tar.gz",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "aarch64"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/alpine/aarch64/whatap-otel-0.2.0.tar.gz",
                children: "다운로드"
              })
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OpenTelemetry"
        }), "로 수집한 데이터를 와탭 모니터링 서비스에서 확인하는 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../opentelemetry/introduction",
          children: "다음 문서"
        }), "를 참조하세요."]
      })
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