"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[75356],{

/***/ 69618:
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
	id: 'agent-transaction-error-stack',
	title: 'トランザクションエラースタック',
	description: 'Javaアプリケーションでトランザクション中に発生するエラーを感知し、これに対するスタックトレースを表示するエージェント設定オプションを案内します。 トランザクション、メソッド、SQL、HTTP呼び出し、SOCKET呼び出しなど様々な領域からエラー情報を収集し、エラースタックの長さ、タイトルの長さなどを設定する方法が含まれます。 エージェント設定によりエラー管理を改善し、アプリケーションのエラー診断をより効率的に行えるようにサポートします。',
	tags: [
		'Java',
		'アプリケーション',
		'エージェント',
		'Transaction',
		'トランザクション'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "java/agent-transaction-error-stack",
  "title": "トランザクションエラースタック",
  "description": "Javaアプリケーションでトランザクション中に発生するエラーを感知し、これに対するスタックトレースを表示するエージェント設定オプションを案内します。 トランザクション、メソッド、SQL、HTTP呼び出し、SOCKET呼び出しなど様々な領域からエラー情報を収集し、エラースタックの長さ、タイトルの長さなどを設定する方法が含まれます。 エージェント設定によりエラー管理を改善し、アプリケーションのエラー診断をより効率的に行えるようにサポートします。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/java/agent-transaction-error-stack.mdx",
  "sourceDirName": "java",
  "slug": "/java/agent-transaction-error-stack",
  "permalink": "/ja/java/agent-transaction-error-stack",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/agent-transaction-error-stack.mdx",
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
      "label": "エージェント",
      "permalink": "/ja/tags/エージェント"
    },
    {
      "inline": true,
      "label": "Transaction",
      "permalink": "/ja/tags/transaction"
    },
    {
      "inline": true,
      "label": "トランザクション",
      "permalink": "/ja/tags/トランザクション"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-transaction-error-stack",
    "title": "トランザクションエラースタック",
    "description": "Javaアプリケーションでトランザクション中に発生するエラーを感知し、これに対するスタックトレースを表示するエージェント設定オプションを案内します。 トランザクション、メソッド、SQL、HTTP呼び出し、SOCKET呼び出しなど様々な領域からエラー情報を収集し、エラースタックの長さ、タイトルの長さなどを設定する方法が含まれます。 エージェント設定によりエラー管理を改善し、アプリケーションのエラー診断をより効率的に行えるようにサポートします。",
    "tags": [
      "Java",
      "アプリケーション",
      "エージェント",
      "Transaction",
      "トランザクション"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "トポロジーマップ",
    "permalink": "/ja/java/agent-toplogy"
  },
  "next": {
    "title": "付加機能",
    "permalink": "/ja/java/agent-additional-option"
  }
};
const assets = {

};



const toc = [{
  "value": "エージェント設定",
  "id": "エージェント設定",
  "level": 2
}, {
  "value": "全体設定",
  "id": "全体設定",
  "level": 3
}, {
  "value": "メソッド",
  "id": "メソッド",
  "level": 3
}, {
  "value": "SQL",
  "id": "sql",
  "level": 3
}, {
  "value": "HTTP Call",
  "id": "http-call",
  "level": 3
}, {
  "value": "SOCKET",
  "id": "socket",
  "level": 3
}, {
  "value": "トランザクション",
  "id": "トランザクション",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Javaアプリケーションでトランザクション中に発生するエラーを感知し、これに対するスタックトレースを表示するエージェント設定オプションを案内します。 トランザクション、メソッド、SQL、HTTP呼び出し、SOCKET呼び出しなど様々な領域からエラー情報を収集し、エラースタックの長さ、タイトルの長さなどを設定する方法が含まれます。 エージェント設定によりエラー管理を改善し、アプリケーションのエラー診断をより効率的に行えるようにサポートします。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["呼び出しサービスの、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "status_code"
      }), "とは無関係であり、複数のエラーが発生した場合、エラースタックは最初のエラースタックのみを表示します。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["この文書で案内するエージェント設定は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Javaエージェント2.2.15"
        }), "バージョン以降で対応しています。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "エージェント設定",
        children: "エージェント設定"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "全体設定",
        children: "全体設定"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "#エラースタック表示の有無\ntrace_exception_stack=false\n\n#エラースタック長さの既定値\ntrace_exception_depth=50\n\n#エラースタックメッセージタイトルの長さ\ntrace_exception_title_len=128\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "メソッド",
        children: "メソッド"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "#メソッドエラースタック表示の有無\n# trace_exception_stack値に従って、別途にtrueまたはfalseで機能をオン、オフできます。\ntrace_method_error_stack=trace_exception_stack\n\n#メソッドエラースタック長さ\n# trace_exception_depth値に従って、別途に設定できます。\ntrace_method_error_depth=trace_exception_depth\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "sql",
        children: "SQL"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# SQLエラースタック表示の有無\n# trace_exception_stack値に従って、別途にtrueまたはfalseで機能をオン、オフできます。\ntrace_sql_error_stack=trace_exception_stack\n\n# SQLエラースタック長さ\n# trace_exception_depth値に従って、別途に設定できます。trace_sql_error_depth=trace_exception_depth\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "http-call",
        children: "HTTP Call"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# http callエラースタック表示の有無\n# trace_exception_stack値に従って、別途にtrueまたはfalseで機能をオン、オフできます。\ntrace_httpc_error_stack=trace_exception_stack\n\n# http callエラースタック長さ\n# trace_exception_depth値に従って、別途に設定できます。trace_httpc_error_depth=trace_exception_depth\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "socket",
        children: "SOCKET"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# socketエラースタック表示の有無\n# trace_exception_stack値に従って、別途にtrueまたはfalseで機能をオン、オフできます。\ntrace_socket_error_stack=trace_exception_stack\n\n# socketエラースタック長さ\n# trace_exception_depth値に従って、別途に設定できます。trace_socket_error_depth=trace_exception_depth\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "トランザクション",
        children: "トランザクション"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# トランザクションエラースタック表示の有無\n# trace_exception_stack値に従って、別途にtrueまたはfalseで機能をオン、オフできます。\ntrace_endtx_error_stack=trace_exception_stack\n\n# トランザクションエラースタック長さ\n# trace_exception_depth値に従って、別途に設定できます。trace_endtx_error_depth=trace_exception_depth\n"
        })
      })]
    })]
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