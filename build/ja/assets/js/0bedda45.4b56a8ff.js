"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[86150],{

/***/ 93403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ agent_static_contentTitle),
  "default": () => (/* binding */ agent_static_MDXContent),
  frontMatter: () => (/* binding */ agent_static_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ agent_static_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_java-statistics.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "addin_monitor_num"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["パフォーマンスカウンターの拡張のために追加して宣言するクラス数を設定します。", (0,jsx_runtime.jsx)(_components.code, {
          children: "addin_monitor_num"
        }), "に設定した値と等しく", (0,jsx_runtime.jsx)(_components.code, {
          children: "addin_monitor_x"
        }), "を宣言します。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "addin_monitor_0"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "\naddin_monitor_num=2\n\naddin_monitor_0=a.a.Class1\n\naddin_monitor_1=a.a.Class2\n\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_domain_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "クライアントに接続中のドメインによるトランザクション統計の収集機能を有効にします。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_domain_max_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "7000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "1つのJVMから5分間収集されるドメインごとのトランザクション統計の最大レコード数です。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_mtrace_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "マルチサーバトランザクションでCaller&Calleeの間のバージョンごとの依存関係の統計を収集します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mtrace_spec"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "v1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "現在のインスタンスのアプリケーションバージョンを設定します。任意の文字列を設定できます。このデータは、呼び出し統計に使用されます。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_mtrace_max_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "7000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "マルチサーバトランザクションでCaller & Calleeの間のバージョンごとの依存関係の統計における最大レコード数です。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_login_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "ログインごとのトランザクション統計を収集します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_login_max_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "7000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "1つのJVMから5分間に収集するログインごとのトランザクション統計の最大レコード数です。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_referer_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Refererごとのトランザクション統計を収集します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_referer_max_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "7000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "1つのJVMから5分間に収集するRefererごとのトランザクション統計の最大レコード数です。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_tx_max_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "5000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクション統計情報の数を制限します。5分間に収集してサーバーに送信される統計情報の最大レコード数を制限します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_sql_max_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "5000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "SQL統計情報の数を制限します。5分間に収集してサーバーに送信される統計情報の最大レコード数を制限します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_httpc_max_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "5000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "HTTP Call統計情報の数を制限します。5分間収集してサーバーに送信する統計情報の最大レコード数を制限します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_error_max_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Error統計情報の数を制限します。5分間に収集してサーバーに送信される統計情報の最大レコード数を制限します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_useragent_max_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "500"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "User Agent統計の情報の数を制限します。5分間に収集してサーバーに送信される統計情報の最大レコード数を制限します。"
      }), "\n"]
    }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/java/agent-static.mdx


const agent_static_frontMatter = {
	id: 'agent-static',
	title: '統計',
	description: 'Javaアプリケーションモニタリングのための様々な統計収集機能関連エージェントオプションをご案内します。性能カウンタの拡張、ドメイン別トランザクションの収集、マルチサーバートランザクションの依存性分析、ログインタイプ別及びRefererer別の統計収集などが含まれます。また、SQL、HTTP Call、エラー統計とユーザエージェント情報収集の最大レコード数制限設定も確認できます。',
	tags: [
		'Java',
		'アプリケーション',
		'統計',
		'エージェント'
	]
};
const agent_static_contentTitle = undefined;
const metadata = {
  "id": "java/agent-static",
  "title": "統計",
  "description": "Javaアプリケーションモニタリングのための様々な統計収集機能関連エージェントオプションをご案内します。性能カウンタの拡張、ドメイン別トランザクションの収集、マルチサーバートランザクションの依存性分析、ログインタイプ別及びRefererer別の統計収集などが含まれます。また、SQL、HTTP Call、エラー統計とユーザエージェント情報収集の最大レコード数制限設定も確認できます。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/java/agent-static.mdx",
  "sourceDirName": "java",
  "slug": "/java/agent-static",
  "permalink": "/ja/java/agent-static",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/agent-static.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Java",
      "permalink": "/ja/tags/java"
    },
    {
      "inline": true,
      "label": "アプリケーション",
      "permalink": "/ja/tags/アプリケーション"
    },
    {
      "inline": true,
      "label": "統計",
      "permalink": "/ja/tags/統計"
    },
    {
      "inline": true,
      "label": "エージェント",
      "permalink": "/ja/tags/エージェント"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-static",
    "title": "統計",
    "description": "Javaアプリケーションモニタリングのための様々な統計収集機能関連エージェントオプションをご案内します。性能カウンタの拡張、ドメイン別トランザクションの収集、マルチサーバートランザクションの依存性分析、ログインタイプ別及びRefererer別の統計収集などが含まれます。また、SQL、HTTP Call、エラー統計とユーザエージェント情報収集の最大レコード数制限設定も確認できます。",
    "tags": [
      "Java",
      "アプリケーション",
      "統計",
      "エージェント"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "Apdex",
    "permalink": "/ja/java/agent-apdex"
  },
  "next": {
    "title": "トポロジーマップ",
    "permalink": "/ja/java/agent-toplogy"
  }
};
const assets = {

};




const agent_static_toc = [...toc];
function agent_static_createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Javaアプリケーションモニタリングのための様々な統計収集機能関連エージェントオプションをご案内します。性能カウンタの拡張、ドメイン別トランザクションの収集、マルチサーバートランザクションの依存性分析、ログインタイプ別及びRefererer別の統計収集などが含まれます。また、SQL、HTTP Call、エラー統計とユーザエージェント情報収集の最大レコード数制限設定も確認できます。"
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {})]
  });
}
function agent_static_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_static_createMdxContent, {
      ...props
    })
  }) : agent_static_createMdxContent(props);
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