"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[9907],{

/***/ 58369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ agent_data_contentTitle),
  "default": () => (/* binding */ agent_data_MDXContent),
  frontMatter: () => (/* binding */ agent_data_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ agent_data_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_db-agent-data.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {InDoc} = _components;
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "データベースサーバーの情報を収集する設定に関する説明です。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "multi_db_stat"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "1"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["multi dbの統計情報の収集処理の有無を設定します。 oracle(pluggable dbの場合)とpostgresqlに対してのみ有効です。 db instance内の各dbごとにstat収集の有無を設定し、収集負荷を減らすために、", (0,jsx_runtime.jsx)(_components.code, {
            children: "0"
          }), "に設定します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "long_run_session_sec"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Second"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "10"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "設定した時間より長く実行されているセッションをlong runセッションとして処理します。(単位：秒)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "tables_hour"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "5"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["テーブル情報を保存するために情報を収集する時間を設定します。デフォルトは", (0,jsx_runtime.jsx)(_components.code, {
            children: "5"
          }), "で、午前5時に収集を開始します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "tables_exclude_sys"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["テーブル情報を収集する際に、sys所有のテーブル情報の収集有無を設定します。 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          }), "に設定すると、sys所有のテーブル情報は収集されません。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(InDoc, {
      product: "oracle,tibero",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "tables_min_size"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Int"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "テーブル情報を収集する場合、設定した値より小さいサイズのテーブル情報は収集しません。テーブルデータを収集する最小単位は、既定値では10MBです。"
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/altibase-v1/agent-data.mdx


const agent_data_frontMatter = {
	id: 'agent-data',
	title: 'エージェントデータ収集',
	description: 'データベースサーバーの情報を収集する設定に関する説明です。',
	keywords: [
		'Altibase',
		'データベース',
		'データベースモニタリング',
		'エージェント'
	],
	isTranslationMissing: false
};
const agent_data_contentTitle = undefined;
const metadata = {
  "id": "altibase-v1/agent-data",
  "title": "エージェントデータ収集",
  "description": "データベースサーバーの情報を収集する設定に関する説明です。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/altibase-v1/agent-data.mdx",
  "sourceDirName": "altibase-v1",
  "slug": "/altibase-v1/agent-data",
  "permalink": "/ja/altibase-v1/agent-data",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/altibase-v1/agent-data.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-data",
    "title": "エージェントデータ収集",
    "description": "データベースサーバーの情報を収集する設定に関する説明です。",
    "keywords": [
      "Altibase",
      "データベース",
      "データベースモニタリング",
      "エージェント"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "altibasev1Sidebar",
  "previous": {
    "title": "AWS CloudWatchの使用",
    "permalink": "/ja/altibase-v1/agent-aws"
  },
  "next": {
    "title": "管理",
    "permalink": "/ja/altibase-v1/agent-manage"
  }
};
const assets = {

};




const agent_data_toc = [...toc];
function agent_data_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(MDXContent, {});
}
function agent_data_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_data_createMdxContent, {
      ...props
    })
  }) : agent_data_createMdxContent(props);
}



/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
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


/***/ })

}]);