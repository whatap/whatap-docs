"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["24904"], {
"78242": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_golang_golang_0_4_2_mdx_db1_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-golang-golang-0-4-2-mdx-db1.json
var site_docs_release_notes_golang_golang_0_4_2_mdx_db1_namespaceObject = JSON.parse('{"id":"release-notes/golang/golang-0_4_2","title":"Go Agent v0.4.2","description":"2024년 09월 06일","source":"@site/docs/release-notes/golang/golang-0.4.2.mdx","sourceDirName":"release-notes/golang","slug":"/release-notes/golang/golang-0_4_2","permalink":"/release-notes/golang/golang-0_4_2","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/golang/golang-0.4.2.mdx","tags":[],"version":"current","frontMatter":{"id":"golang-0_4_2","title":"Go Agent v0.4.2","toc_max_heading_level":2,"pagination_next":"release-notes/golang/golang-0_4_1","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Go Agent v0.4.3","permalink":"/release-notes/golang/golang-0_4_3"},"next":{"title":"Go Agent v0.4.1","permalink":"/release-notes/golang/golang-0_4_1"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/golang/golang-0.4.2.mdx


const frontMatter = {
	id: 'golang-0_4_2',
	title: 'Go Agent v0.4.2',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/golang/golang-0_4_1',
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
      children: "2024년 09월 06일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Status, {
        priority: "0",
        children: "Fixed"
      }), " 라이브러리 파일이 없어 발생하는 컴파일 오류 수정"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-go",
        children: "#github.com/whatap/go-api/agent/logsink\n../../../../go-api/agent/logsink/LineLogUtil.go:101:18: undefined: lang.EVENT_STATUS_ON\n"
      })
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
                    href: "https://repo.whatap.io/centos/6/x86_64/whatap-agent-0.4-2.x86_64.rpm",
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
                    href: "https://repo.whatap.io/centos/7/aarch64/whatap-agent-0.4-2.aarch64.rpm",
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
                    href: "https://repo.whatap.io/debian/unstable/whatap-agent_0.4.2_amd64.deb",
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
                    href: "https://repo.whatap.io/debian/unstable/whatap-agent_0.4.2_arm64.deb",
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
                    href: "https://repo.whatap.io/alpine/x86_64/whatap-agent-0.4.2.tar.gz",
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
                    href: "https://repo.whatap.io/alpine/aarch64/whatap-agent-0.4.2.tar.gz",
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