"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["83252"], {
"67942": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_php_php_2_8_1_mdx_42e_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-php-php-2-8-1-mdx-42e.json
var site_docs_release_notes_php_php_2_8_1_mdx_42e_namespaceObject = JSON.parse('{"id":"release-notes/php/php-2_8_1","title":"PHP Agent v2.8.1","description":"2024년 07월 24일","source":"@site/docs/release-notes/php/php-2.8.1.mdx","sourceDirName":"release-notes/php","slug":"/release-notes/php/php-2_8_1","permalink":"/release-notes/php/php-2_8_1","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/php/php-2.8.1.mdx","tags":[],"version":"current","frontMatter":{"id":"php-2_8_1","title":"PHP Agent v2.8.1","toc_max_heading_level":2,"pagination_next":"release-notes/php/php-2_8_0","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"PHP Agent v2.8.2","permalink":"/release-notes/php/php-2_8_2"},"next":{"title":"PHP Agent v2.8.0","permalink":"/release-notes/php/php-2_8_0"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/php/php-2.8.1.mdx


const frontMatter = {
	id: 'php-2_8_1',
	title: 'PHP Agent v2.8.1',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/php/php-2_8_0',
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
    blockquote: "blockquote",
    code: "code",
    li: "li",
    p: "p",
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
      children: "2024년 07월 24일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "New"
          }), " IP 주소별 트랜잭션 통계를 수집하는 에이전트 설정 옵션 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.stat_ipurl_enabled"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Boolean"
            }), ", 기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " 통계 압축 전송을 설정하는 에이전트 설정 옵션 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.stat_zip_enabled"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Boolean"
            }), ", 기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })]
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
                href: "https://repo.whatap.io/centos/6/x86_64/whatap-php-2.8-1.x86_64.rpm",
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
                href: "https://repo.whatap.io/centos/7/aarch64/whatap-php-2.8-1.aarch64.rpm",
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
                href: "https://repo.whatap.io/debian/unstable/whatap-php_2.8.1_amd64.deb",
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
                href: "https://repo.whatap.io/debian/unstable/whatap-php_2.8.1_arm64.deb",
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
                href: "https://repo.whatap.io/alpine/x86_64/whatap-php-2.8.1.tar.gz",
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
                href: "https://repo.whatap.io/alpine/aarch64/whatap-php-2.8.1.tar.gz",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Freebsd 10 and above"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "TXZ"
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
                href: "https://repo.whatap.io/freebsd/10/whatap-php-2.8.1.txz",
                children: "다운로드"
              })
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