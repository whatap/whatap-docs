"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[93465],{

/***/ 85404:
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
	title: 'Transaction error stack',
	description: 'The following guides you to the agent configuration options that detect errors during transactions in Java applications and display stack traces. It collects errors from various areas such as transactions, methods, SQLs, HTTP calls, and SOCKET calls, and includes methods how to set the error stack length, title length, and such. It helps you improve error handling through agent settings and support more efficient error diagnosis for applications.',
	keywords: [
		'Java',
		'Application',
		'Agent',
		'Transaction',
		'Transactions'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "java/agent-transaction-error-stack",
  "title": "Transaction error stack",
  "description": "The following guides you to the agent configuration options that detect errors during transactions in Java applications and display stack traces. It collects errors from various areas such as transactions, methods, SQLs, HTTP calls, and SOCKET calls, and includes methods how to set the error stack length, title length, and such. It helps you improve error handling through agent settings and support more efficient error diagnosis for applications.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/java/agent-transaction-error-stack.mdx",
  "sourceDirName": "java",
  "slug": "/java/agent-transaction-error-stack",
  "permalink": "/en/java/agent-transaction-error-stack",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/agent-transaction-error-stack.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-transaction-error-stack",
    "title": "Transaction error stack",
    "description": "The following guides you to the agent configuration options that detect errors during transactions in Java applications and display stack traces. It collects errors from various areas such as transactions, methods, SQLs, HTTP calls, and SOCKET calls, and includes methods how to set the error stack length, title length, and such. It helps you improve error handling through agent settings and support more efficient error diagnosis for applications.",
    "keywords": [
      "Java",
      "Application",
      "Agent",
      "Transaction",
      "Transactions"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "Topology map",
    "permalink": "/en/java/agent-toplogy"
  },
  "next": {
    "title": "Additional options",
    "permalink": "/en/java/agent-additional-option"
  }
};
const assets = {

};



const toc = [{
  "value": "Agent CONFIG.",
  "id": "agent-config",
  "level": 2
}, {
  "value": "Total configuration",
  "id": "total-configuration",
  "level": 3
}, {
  "value": "Method",
  "id": "method",
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
  "value": "Transactions",
  "id": "transactions",
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
      children: "The following guides you to the agent configuration options that detect errors during transactions in Java applications and display stack traces. It collects errors from various areas such as transactions, methods, SQLs, HTTP calls, and SOCKET calls, and includes methods how to set the error stack length, title length, and such. It helps you improve error handling through agent settings and support more efficient error diagnosis for applications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["It is not related to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "status_code"
      }), " of the calling service. When multiple errors occur, the error stack displays only the first error stack."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["The agent configuration in this document is supported by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Java Agent 2.2.15"
        }), " or later."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "agent-config",
        children: "Agent CONFIG."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "total-configuration",
        children: "Total configuration"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# Whether or not to display error stacks\ntrace_exception_stack=false\n\n# Default value for the error stack size\ntrace_exception_depth=50\n\n# Title size of the error stack message\ntrace_exception_title_len=128\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "method",
        children: "Method"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# Whether or not to display the method error stack\n# You can turn the feature on or off with true/false values, following the trace_exception_stack value.\ntrace_method_error_stack=trace_exception_stack\n\n# Method error stack size\n# You can follow the trace_exception_depth value and set it separately.\ntrace_method_error_depth=trace_exception_depth\n"
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
          children: "# Whether or not to display the SQL error stack\n# You can turn the feature on or off with true/false values, following the trace_exception_stack value.\ntrace_sql_error_stack=trace_exception_stack\n\n# SQL error stack size\n# You can follow the trace_exception_depth value and set it separately.\ntrace_sql_error_depth=trace_exception_depth\n"
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
          children: "# Whether or not to display the HTTP call error stack\n# You can turn the feature on or off with true/false values, following the trace_exception_stack value.\ntrace_httpc_error_stack=trace_exception_stack\n\n# HTTP call error stack size\n# You can follow the trace_exception_depth value and set it separately.\ntrace_httpc_error_depth=trace_exception_depth\n"
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
          children: "# Whether or not to display the socket error stack\n# You can turn the feature on or off with true/false values, following the trace_exception_stack value.\ntrace_socket_error_stack=trace_exception_stack\n\n# Socket error stack size\n# You can follow the trace_exception_depth value and set it separately.\ntrace_socket_error_depth=trace_exception_depth\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "transactions",
        children: "Transactions"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# Whether or not to display the transaction error stack\n# You can turn the feature on or off with true/false values, following the trace_exception_stack value.\ntrace_endtx_error_stack=trace_exception_stack\n\n# Transaction error stack size\n# You can follow the trace_exception_depth value and set it separately.\ntrace_endtx_error_depth=trace_exception_depth\n"
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