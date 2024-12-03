"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["29807"], {
"94323": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
    type: "info",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "다운로드"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://repo.whatap.io/windows/whatap_dotnet.exe",
            children: ".NET Agent 다운로드"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://repo.whatap.io/windows/whatap_dotnet_450.exe",
            children: ".NET runtime 4.6.1 미만 또는 Windows 2012 미만"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Windows Server 2008 R2가 최소 요구사항입니다."
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
"31490": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_dotnet_dotnet_2_3_2_mdx_89a_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-dotnet-dotnet-2-3-2-mdx-89a.json
var site_docs_release_notes_dotnet_dotnet_2_3_2_mdx_89a_namespaceObject = JSON.parse('{"id":"release-notes/dotnet/dotnet-2_3_2","title":".NET Agent v2.3.2","description":"2024년 09월 05일","source":"@site/docs/release-notes/dotnet/dotnet-2.3.2.mdx","sourceDirName":"release-notes/dotnet","slug":"/release-notes/dotnet/dotnet-2_3_2","permalink":"/release-notes/dotnet/dotnet-2_3_2","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/dotnet/dotnet-2.3.2.mdx","tags":[],"version":"current","frontMatter":{"id":"dotnet-2_3_2","title":".NET Agent v2.3.2","toc_max_heading_level":2,"pagination_next":"release-notes/dotnet/dotnet-2_3_1","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":".NET Agent v2.3.3","permalink":"/release-notes/dotnet/dotnet-2_3_3"},"next":{"title":".NET Agent v2.3.1","permalink":"/release-notes/dotnet/dotnet-2_3_1"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/release-notes/dotnet/_download-dotnet-agent.mdx
var _download_dotnet_agent = __webpack_require__("94323");
;// CONCATENATED MODULE: ./docs/release-notes/dotnet/dotnet-2.3.2.mdx


const frontMatter = {
	id: 'dotnet-2_3_2',
	title: '.NET Agent v2.3.2',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/dotnet/dotnet-2_3_1',
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._download_dotnet_agent/* toc */.d$];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 09월 05일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "New"
          }), " 트랜잭션 수집에서 제외할 URL의 접미사(suffix)를 설정할 수 있는 에이전트 옵션 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "trace_ignore_url_suffix"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "설정한 접미사와 일치하는 URL은 트랜잭션 성능을 수집하지 않습니다. 여러 값을 설정하려면 쉼표(,)로 구분하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " Parameterized Query 추적 기능 추가"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["이 기능과 관련한 에이전트 옵션(", (0,jsx_runtime.jsx)(_components.code, {
              children: "profile_sql_param_enabled"
            }), ")은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../../dotnet/agent-dbsql",
              children: "다음 문서"
            }), "를 참조하세요."]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " REST API 트랜잭션의 상태 코드(status code) 표시에서 발생하는 오류 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "System.Data.Common.DbCommand"
          }), " 관련 메서드 중 모니터링에 포함되지 않았던 메서드 추가"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "다음의 비동기 메서드 중에서 오버로딩된 메서드의 일부가 누락되어 추가하였습니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ExecuteReaderAsync"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ExecuteNonQueryAsync"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ExecuteScalarAsync"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_download_dotnet_agent/* default */.ZP, {})]
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