"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["45028"], {
"21199": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_php_php_2_7_0_mdx_1d9_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-php-php-2-7-0-mdx-1d9.json
var site_docs_release_notes_php_php_2_7_0_mdx_1d9_namespaceObject = JSON.parse('{"id":"release-notes/php/php-2_7_0","title":"PHP Agent v2.7.0","description":"2024년 01월 10일","source":"@site/docs/release-notes/php/php-2.7.0.mdx","sourceDirName":"release-notes/php","slug":"/release-notes/php/php-2_7_0","permalink":"/release-notes/php/php-2_7_0","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/php/php-2.7.0.mdx","tags":[],"version":"current","frontMatter":{"id":"php-2_7_0","title":"PHP Agent v2.7.0","toc_max_heading_level":2,"pagination_next":"release-notes/php/php-2_6_3","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"PHP Agent v2.7.1","permalink":"/release-notes/php/php-2_7_1"},"next":{"title":"PHP Agent v2.6.3","permalink":"/release-notes/php/php-2_6_3"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/php/php-2.7.0.mdx


const frontMatter = {
	id: 'php-2_7_0',
	title: 'PHP Agent v2.7.0',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/php/php-2_6_3',
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
      children: "2024년 01월 10일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "New"
          }), " PHP 8.3 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " 멀티 트랜잭션 추적에서 Trace context(W3C) 지원"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Trace context를 지원하는 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "OpenTelmetry"
          }), "와 멀티 트랜잭션 추적 연계를 지원합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Changed"
          }), " SQL, Method, HTTP call의 리소스 지표 수집 수정"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "트랜잭션 시작 시점의 리소스(cpu, memory)와 각 스탭 시작 시점의 리소스 차이를 수집합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Changed"
          }), " 설정 파일(", (0,jsx_runtime.jsx)("em", {
            children: "whatap.conf"
          }), ")이 없을 경우 새로 생성하도록 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Fixed"
          }), " 액티브 트랜잭션 목록에서 외부 호출 누적 건수가 누적 시간으로 잘못 수집되는 오류 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Fixed"
          }), " 리눅스 환경에서 whatap-php 서비스(", (0,jsx_runtime.jsx)("code", {
            children: "whatap-php.service"
          }), ") 실행 오류 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Fixed"
          }), " PHP 8.1.0 버전에서 8.1.2 버전까지 발생하는 segmentation 오류 수정(사용자 함수에 대한 수집 중지)"]
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
                href: "https://repo.whatap.io/centos/6/x86_64/whatap-php-2.7-0.x86_64.rpm",
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
                href: "https://repo.whatap.io/debian/unstable/whatap-php_2.7.0_amd64.deb",
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
              children: "x86 x64"
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
                href: "https://repo.whatap.io/freebsd/10/whatap-php-2.7.0.txz",
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
                href: "https://repo.whatap.io/alpine/x86_64/whatap-php-2.7.0.tar.gz",
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