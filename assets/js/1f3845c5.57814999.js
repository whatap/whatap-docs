"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["92826"], {
"81405": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_golang_golang_0_2_3_mdx_1f3_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-golang-golang-0-2-3-mdx-1f3.json
var site_docs_release_notes_golang_golang_0_2_3_mdx_1f3_namespaceObject = JSON.parse('{"id":"release-notes/golang/golang-0_2_3","title":"Go Agent v0.2.3","description":"2023년 9월 13일","source":"@site/docs/release-notes/golang/golang-0.2.3.mdx","sourceDirName":"release-notes/golang","slug":"/release-notes/golang/golang-0_2_3","permalink":"/release-notes/golang/golang-0_2_3","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/golang/golang-0.2.3.mdx","tags":[],"version":"current","frontMatter":{"id":"golang-0_2_3","title":"Go Agent v0.2.3","toc_max_heading_level":2,"pagination_next":"release-notes/golang/golang-0_2_2","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Go Agent v0.2.4","permalink":"/release-notes/golang/golang-0_2_4"},"next":{"title":"Go Agent v0.2.2","permalink":"/release-notes/golang/golang-0_2_2"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/golang/golang-0.2.3.mdx


const frontMatter = {
	id: 'golang-0_2_3',
	title: 'Go Agent v0.2.3',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/golang/golang-0_2_2',
	displayed_sidebar: 'releaseSidebar',
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
      children: "2023년 9월 13일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " 대용량 프로파일 처리 옵션 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "기존 프로파일은 최대 1024개의 프로파일 정보를 수집했습니다. 설정으로 최댓값을 늘릴 수 있지만, 메모리 증가는 필수적으로 발생했습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "일정량의 프로파일을 압축 및 분할 전송하여 메모리 증가 없이 더 많은 프로파일 정보를 수집할 수 있도록 개선했습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "large_profile_enabled"
              }), " ", (0,jsx_runtime.jsx)("span", {
                class: "type",
                children: "Boolean"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "false"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["약 만 건 이하의 프로파일(스탭) 정보를 수집할 수 있습니다. 더 많은 양을 수집할 경우 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "split_profile_enabled"
              }), " 옵션으로 사용하는 것을 권장합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "split_profile_enabled"
              }), " ", (0,jsx_runtime.jsx)("span", {
                class: "type",
                children: "Boolean"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "false"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "일정량의 프로파일을 가상 트랜잭션으로 분리하여 더 많은 프로파일 정보를 수집합니다. 여러 개의 트랜잭션 목록으로 분할 표기합니다."
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["두 옵션을 모두 설정한 경우 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "split_profile_enabled"
                }), " 옵션이 우선 적용됩니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["위 옵션과 관련한 에이전트 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../../golang/agent-transaction#trs-trc",
                  children: "다음 문서"
                }), "를 참조하세요."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " 프로파일 데이터 압축 전송 옵션 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "profile_zip_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "boolean"
          }), " : 기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Changed"
          }), " 특정 HTTP Method 수집을 제외하는 기능을 모든 트랜잭션을 대상으로 변경"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "ignore_http_method"
              }), " 옵션은 모든 트랜잭션 대상으로 변경합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["기존 제외 기능은 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "http_method_urls"
              }), " 옵션으로 설정된 트랜잭션만 제외했습니다. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "http_method_urls"
              }), " 옵션을 삭제하고 모든 트랜잭션 대상으로 변경합니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["위 옵션과 관련한 에이전트 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "../../golang/agent-transaction#track-http-trs",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "다운로드"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "go-api(import library)"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "go get github.com/whatap/go-api@latest\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "서비스 에이전트"
          }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
            children: [(0,jsx_runtime.jsx)(_components.thead, {
              children: (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.th, {
                  children: "OS"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "center"
                  },
                  children: "아키텍처"
                }), (0,jsx_runtime.jsx)(_components.th, {
                  style: {
                    textAlign: "center"
                  },
                  children: "파일 형식"
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
                  children: "Red Hat / CentOS / Amazon linux"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "x86 x64"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "RPM"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/centos/6/x86_64/whatap-agent-0.2-3.x86_64.rpm",
                    children: "다운로드"
                  })
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Ubuntu 12 and above / Debian"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "amd64"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "DEB"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/debian/unstable/whatap-agent_0.2.3_amd64.deb",
                    children: "다운로드"
                  })
                })]
              }), (0,jsx_runtime.jsxs)(_components.tr, {
                children: [(0,jsx_runtime.jsx)(_components.td, {
                  children: "Alpine linux"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "x86 x64"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: "tar gzip"
                }), (0,jsx_runtime.jsx)(_components.td, {
                  style: {
                    textAlign: "center"
                  },
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/alpine/x86_64/whatap-agent-0.2.3.tar.gz",
                    children: "다운로드"
                  })
                })]
              })]
            })]
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