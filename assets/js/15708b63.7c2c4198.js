"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["53008"], {
"51663": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_db_dbx_1_7_0_mdx_157_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-db-dbx-1-7-0-mdx-157.json
var site_docs_release_notes_db_dbx_1_7_0_mdx_157_namespaceObject = JSON.parse('{"id":"release-notes/db/dbx-1_7_0","title":"DBX v1.7.0","description":"2024년 03월 25일","source":"@site/docs/release-notes/db/dbx-1.7.0.mdx","sourceDirName":"release-notes/db","slug":"/release-notes/db/dbx-1_7_0","permalink":"/release-notes/db/dbx-1_7_0","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/db/dbx-1.7.0.mdx","tags":[],"version":"current","frontMatter":{"id":"dbx-1_7_0","title":"DBX v1.7.0","pagination_next":"release-notes/db/dbx-1_6_35","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"DBX v1.6.35","permalink":"/release-notes/db/dbx-1_6_35"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/db/dbx-1.7.0.mdx


const frontMatter = {
	id: 'dbx-1_7_0',
	title: 'DBX v1.7.0',
	pagination_next: 'release-notes/db/dbx-1_6_35',
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
  "value": "MongoDB",
  "id": "mongodb",
  "level": 2
}, {
  "value": "Redis",
  "id": "redis",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 03월 25일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "공통",
        children: "공통"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Status, {
          children: "Changed"
        }), " ", (0,jsx_runtime.jsx)("code", {
          children: "cpu"
        }), " 지표에서 ", (0,jsx_runtime.jsx)("code", {
          children: "xos2"
        }), " 지표를 없애고 ", (0,jsx_runtime.jsx)("code", {
          children: "xos"
        }), " 지표를 백분률 값으로 변경"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "mongodb",
        children: "MongoDB"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Status, {
          children: "Feature"
        }), " MongoDB ", (0,jsx_runtime.jsx)("code", {
          class: "my",
          children: "V2"
        }), " 추가"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "카테고리 이름 통일"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)("code", {
                children: "agentinfo"
              }), " → ", (0,jsx_runtime.jsx)("code", {
                children: "db_agentinfo"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)("code", {
                children: "session"
              }), " → ", (0,jsx_runtime.jsx)("code", {
                children: "db_mongo_active_session"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)("code", {
                children: "stat"
              }), " → ", (0,jsx_runtime.jsx)("code", {
                children: "db_mongodb_counter"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)("code", {
                children: "dbsize"
              }), " → ", (0,jsx_runtime.jsx)("code", {
                children: "db_dbsize"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "기본 지표 간소화"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("code", {
              children: "v2=true"
            }), "로 설정하면 ", (0,jsx_runtime.jsx)("code", {
              children: "serverStatus"
            }), " 값 중 ", (0,jsx_runtime.jsx)("code", {
              children: "opcounters"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "globalLock"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "extra_info"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "connections"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "network"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "mem"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "opLatencies"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "asserts"
            }), " 지표만 수집 및 저장함"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)("code", {
                children: "v2=false"
              }), "가 기본값이며, v1과 동일하게 ", (0,jsx_runtime.jsx)("code", {
                children: "serverStatus"
              }), " 결과를 모두 수집합니다."]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["지표 추가 옵션: ", (0,jsx_runtime.jsx)("code", {
              children: "category=network,repl,indexStats…"
            }), " 등 serverStatus의 output을 추가로 지정하면 추가 수집 가능"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["데이터베이스 사이즈 수집 정보 추가: ", (0,jsx_runtime.jsx)("code", {
              children: "index size"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "storage size"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "total size"
            }), " 수집"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Collection size 신규 수집: ", (0,jsx_runtime.jsx)("code", {
              children: "storage size"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "index size"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "total size"
            }), " 수집"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기존 언더바로 표기했던 xos 지표들(", (0,jsx_runtime.jsx)("code", {
              children: "xos_cpu"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "xos_mem"
            }), " 등)을 상품 통일성을 위해 괄호로 변경한 값도 함께 전송"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "redis",
        children: "Redis"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Status, {
          children: "Feature"
        }), " Redis ", (0,jsx_runtime.jsx)("code", {
          class: "my",
          children: "V2"
        }), " 추가"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "카테고리 이름 통일"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)("code", {
                children: "agentinfo"
              }), " → ", (0,jsx_runtime.jsx)("code", {
                children: "db_agentinfo"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)("code", {
                children: "session"
              }), " → ", (0,jsx_runtime.jsx)("code", {
                children: "db_redis_active_session"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)("code", {
                children: "stat"
              }), " → ", (0,jsx_runtime.jsx)("code", {
                children: "db_redis_couter"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("code", {
              children: "db_redis_clusterinfo"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "db_redis_clusternodes"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "db_redis_master"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "db_redis_slave"
            }), " 카테고리 추가"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기존 언더바로 표기했던 xos 지표들(", (0,jsx_runtime.jsx)("code", {
              children: "xos_cpu"
            }), ", ", (0,jsx_runtime.jsx)("code", {
              children: "xos_mem"
            }), " 등)을 상품 통일성을 위해 괄호로 변경한 값도 함께 전송"]
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