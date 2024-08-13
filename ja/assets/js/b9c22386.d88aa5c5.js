"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[1592],{

/***/ 45468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'scale-in-auto-delete',
	title: 'Scale Inからエージェントの自動削除',
	description: 'Auto Scale環境で自動的に拡張されたシステムがScale Inを実行する時、Javaエージェントを自動削除する方法を案内します。エージェントは、特定のファイルを作成してSILENT_SHUTDOWNイベントをサーバーに送信し、これによってエージェントが自動的に一覧から削除されます。このプロセスにより、システムの自動縮小時点に合わせてエージェント管理が容易になり、運用者の追加介入なしにリソースを効率的に管理できます。',
	keywords: [
		'Java',
		'エージェント'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "java/scale-in-auto-delete",
  "title": "Scale Inからエージェントの自動削除",
  "description": "Auto Scale環境で自動的に拡張されたシステムがScale Inを実行する時、Javaエージェントを自動削除する方法を案内します。エージェントは、特定のファイルを作成してSILENT_SHUTDOWNイベントをサーバーに送信し、これによってエージェントが自動的に一覧から削除されます。このプロセスにより、システムの自動縮小時点に合わせてエージェント管理が容易になり、運用者の追加介入なしにリソースを効率的に管理できます。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/java/scale-in-auto-delete.mdx",
  "sourceDirName": "java",
  "slug": "/java/scale-in-auto-delete",
  "permalink": "/ja/java/scale-in-auto-delete",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/scale-in-auto-delete.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scale-in-auto-delete",
    "title": "Scale Inからエージェントの自動削除",
    "description": "Auto Scale環境で自動的に拡張されたシステムがScale Inを実行する時、Javaエージェントを自動削除する方法を案内します。エージェントは、特定のファイルを作成してSILENT_SHUTDOWNイベントをサーバーに送信し、これによってエージェントが自動的に一覧から削除されます。このプロセスにより、システムの自動縮小時点に合わせてエージェント管理が容易になり、運用者の追加介入なしにリソースを効率的に管理できます。",
    "keywords": [
      "Java",
      "エージェント"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "AES256暗号化",
    "permalink": "/ja/java/aes-256-encryption"
  },
  "next": {
    "title": "メインメニュー",
    "permalink": "/ja/java/learn-apm-main-menu"
  }
};
const assets = {

};

/*관련 https://desk.channel.io/#/channels/6280/user_chats/63bfcb1a3962bededb99*/


const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Auto Scale環境でエージェント名を自動付与すると、Scale Outが発生した場合、オペレータの介入は必要ありません。システムを自動的に拡張します。一方、Scale Inが発生すると、システムが正常なShut downとして認識する必要があります。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["エージェントの自動削除の場合、WhaTapサーバーは、Javaエージェントからメッセージを受信する必要があります。エージェントは、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "${WHATAP_HOME}"
      }), "にJavaプロセスの_whatap_", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "{java-process-pid}"
      }), ".shutdown_ファイルが生成されたら", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "SILENT_SHUTDOWN"
      }), "イベントをWhaTapサーバーに送信します。送信は5秒以内に完了します。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "SILENT_SHUTDOWN"
      }), "イベントをWhaTapサーバに送信してから1分以内にエージェントがシャットダウンされた場合、WhaTapサーバはリストからJavaエージェントを削除します。inactiveイベントは発生しません。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Tomcatの場合、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "shutdown.sh"
        }), "ファイルで設定できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=$TOMCAT_HOME/bin/shutdown.sh",
          children: "touch $WHATAP_HOME/whatap_{java-process-pid}.shutdown\n"
        })
      })]
    }), "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
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