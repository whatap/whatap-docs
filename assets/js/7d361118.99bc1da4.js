"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["92778"], {
"19275": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_db_dbx_1_6_10_mdx_7d3_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-db-dbx-1-6-10-mdx-7d3.json
var site_docs_release_notes_db_dbx_1_6_10_mdx_7d3_namespaceObject = JSON.parse('{"id":"release-notes/db/dbx-1_6_10","title":"DBX v1.6.10","description":"2023년 9월 15일","source":"@site/docs/release-notes/db/dbx-1.6.10.mdx","sourceDirName":"release-notes/db","slug":"/release-notes/db/dbx-1_6_10","permalink":"/release-notes/db/dbx-1_6_10","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/db/dbx-1.6.10.mdx","tags":[],"version":"current","frontMatter":{"id":"dbx-1_6_10","title":"DBX v1.6.10","toc_max_heading_level":2,"pagination_next":"release-notes/db/dbx-1_6_9","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"DBX v1.6.9","permalink":"/release-notes/db/dbx-1_6_9"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/db/dbx-1.6.10.mdx


const frontMatter = {
	id: 'dbx-1_6_10',
	title: 'DBX v1.6.10',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/db/dbx-1_6_9',
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "공통",
  "id": "공통",
  "level": 2
}, {
  "value": "PostgreSQL",
  "id": "postgresql",
  "level": 2
}, {
  "value": "MySQL",
  "id": "mysql",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status, UI} = _components;
  if (!Status) _missingMdxReference("Status", true);
  if (!UI) _missingMdxReference("UI", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2023년 9월 15일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "공통",
        children: "공통"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Fixed"
          }), " DB connection fail이 발생해도 에이전트 정보(agent info)를 전송하도록 수정(", (0,jsx_runtime.jsx)(UI, {
            children: "대시보드"
          }), " > ", (0,jsx_runtime.jsx)(UI, {
            children: "인스턴스 목록"
          }), " 메뉴에서 에이전트가 유지되도록 함)"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "postgresql",
        children: "PostgreSQL"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " ", (0,jsx_runtime.jsx)("code", {
              children: "db_postgresql_master"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "db_postgresql_slave"
            }), " 정보 버그 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " ", (0,jsx_runtime.jsx)("code", {
              children: "db_postgresql_wait_event"
            }), "의 state가 idle일 경우 제외 처리"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " ", (0,jsx_runtime.jsx)("code", {
              children: "db_postgresql_statements"
            }), "의 유저별 그룹 처리 및 queryid 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Fixed"
            }), " ", (0,jsx_runtime.jsx)("code", {
              children: "db_postgresql_slowquery"
            }), "의 timestamp 수정 및 컬럼명 변경"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "mysql",
        children: "MySQL"
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)(Status, {
          children: "Fixed"
        }), " ", (0,jsx_runtime.jsx)("code", {
          children: "db_mysql_statements"
        }), "의 ", (0,jsx_runtime.jsx)("code", {
          children: "timer_wait"
        }), "와 ", (0,jsx_runtime.jsx)("code", {
          children: "lock_time"
        }), " 단위를 ", (0,jsx_runtime.jsx)("b", {
          children: "피코초"
        }), "에서 ", (0,jsx_runtime.jsx)("b", {
          children: "초"
        }), " 단위로 변경, schema 이름이 ", (0,jsx_runtime.jsx)("code", {
          children: "null"
        }), "일 경우 빈 문자열로 수정"]
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