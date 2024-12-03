"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["86738"], {
"37923": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_server_server_2_4_4_mdx_26d_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-server-server-2-4-4-mdx-26d.json
var site_docs_release_notes_server_server_2_4_4_mdx_26d_namespaceObject = JSON.parse('{"id":"release-notes/server/server-2_4_4","title":"Server Agent v2.4.4","description":"2023년 11월 08일","source":"@site/docs/release-notes/server/server-2.4.4.mdx","sourceDirName":"release-notes/server","slug":"/release-notes/server/server-2_4_4","permalink":"/release-notes/server/server-2_4_4","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/server/server-2.4.4.mdx","tags":[],"version":"current","frontMatter":{"id":"server-2_4_4","title":"Server Agent v2.4.4","toc_max_heading_level":2,"pagination_next":"release-notes/server/server-2_4_3","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"Server Agent v2.4.3","permalink":"/release-notes/server/server-2_4_3"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/server/server-2.4.4.mdx


const frontMatter = {
	id: 'server-2_4_4',
	title: 'Server Agent v2.4.4',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/server/server-2_4_3',
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
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2023년 11월 08일"
    }), "\n", (0,jsx_runtime.jsxs)("p", {
      children: [(0,jsx_runtime.jsx)(Status, {
        children: "Fixed"
      }), " 로그 파일 키워드 알림 오류로 과거 생성된 로그 파일의 키워드 알림 오발생 수정 "]
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
              children: "시스템"
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
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              rowSpan: "10",
              children: ["Red Hat / CentOS /", (0,jsx_runtime.jsx)("br", {}), " Amazon linux"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              style: {
                textAlign: "center"
              },
              children: "6Server / 6"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "x86 x64"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "10",
              style: {
                textAlign: "center"
              },
              children: "RPM"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/centos/6/x86_64/whatap-infra-2.4-4.x86_64.rpm",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "i386"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/centos/6/i386/whatap-infra-1.2-4.i386.rpm",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              style: {
                textAlign: "center"
              },
              children: "7Server / 7"
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
                href: "https://repo.whatap.io/centos/7/x86_64/whatap-infra-2.4-4.x86_64.rpm",
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
                href: "https://repo.whatap.io/centos/7/aarch64/whatap-infra-2.4-4.aarch64.rpm",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              style: {
                textAlign: "center"
              },
              children: "8Server / 8"
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
                href: "https://repo.whatap.io/centos/8/x86_64/whatap-infra-2.4-4.x86_64.rpm",
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
                href: "https://repo.whatap.io/centos/8/aarch64/whatap-infra-2.4-4.aarch64.rpm",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              style: {
                textAlign: "center"
              },
              children: "9Server / 9"
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
                href: "https://repo.whatap.io/centos/9/x86_64/whatap-infra-2.4-4.x86_64.rpm",
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
                href: "https://repo.whatap.io/centos/9/aarch64/whatap-infra-2.4-4.aarch64.rpm",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              style: {
                textAlign: "center"
              },
              children: "Amazon Linux2"
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
                href: "https://repo.whatap.io/centos/latest/x86_64/whatap-infra-2.4-4.x86_64.rpm",
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
                href: "https://repo.whatap.io/centos/latest/aarch64/whatap-infra-2.4-4.aarch64.rpm",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "Ubuntu / Debian"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              style: {
                textAlign: "center"
              },
              children: "Ubuntu 12 and above"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "amd64"
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
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/debian/unstable/whatap-infra_2.4.4_amd64.deb",
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
                href: "https://repo.whatap.io/debian/unstable/whatap-infra_2.4.4_arm64.deb",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Freebsd"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Freebsd 10 and above"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "amd64"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "TXZ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/freebsd/10/whatap-infra-1.1.2.txz",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Windows"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Windows Server 2008 R2 and above"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "32 bit / 64 bit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "EXE"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/windows/whatap_infra.zip",
                children: "다운로드"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SUNOS 11, SPARC"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "SUNOS 11 and above, SPARC"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "amd64"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "PKG"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "https://repo.whatap.io/sunos/11/whatap-infra.1.21.SPARC.pkg.tar.gz",
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