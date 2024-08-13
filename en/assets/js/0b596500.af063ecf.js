"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[35044],{

/***/ 54750:
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
	title: 'Automatic deletion of the agent in Scale In',
	description: 'The following explains how to automatically delete the Java agent when an automatically scaled system performs Scale In in the Auto Scale environment. The agent sends a SILENT_SHUTDOWN event to the server by creating a specific file, which automatically removes the agent from the list. This process facilitates agent management when the system automatically scales down, and manages resources efficiently without additional intervention.',
	keywords: [
		'Java',
		'Agent'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "java/scale-in-auto-delete",
  "title": "Automatic deletion of the agent in Scale In",
  "description": "The following explains how to automatically delete the Java agent when an automatically scaled system performs Scale In in the Auto Scale environment. The agent sends a SILENT_SHUTDOWN event to the server by creating a specific file, which automatically removes the agent from the list. This process facilitates agent management when the system automatically scales down, and manages resources efficiently without additional intervention.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/java/scale-in-auto-delete.mdx",
  "sourceDirName": "java",
  "slug": "/java/scale-in-auto-delete",
  "permalink": "/en/java/scale-in-auto-delete",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/scale-in-auto-delete.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "scale-in-auto-delete",
    "title": "Automatic deletion of the agent in Scale In",
    "description": "The following explains how to automatically delete the Java agent when an automatically scaled system performs Scale In in the Auto Scale environment. The agent sends a SILENT_SHUTDOWN event to the server by creating a specific file, which automatically removes the agent from the list. This process facilitates agent management when the system automatically scales down, and manages resources efficiently without additional intervention.",
    "keywords": [
      "Java",
      "Agent"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "AES 256 encryption",
    "permalink": "/en/java/aes-256-encryption"
  },
  "next": {
    "title": "Learn about the main features",
    "permalink": "/en/java/learn-apm-main-menu"
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
      children: "If an agent name is automatically assigned in the Auto Scale environment, administrator's intervention is not required when a scale out occurs. The system scales up automatically. If a scale in occurs, the system must recognize it as a graceful shutdown."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For automatic deletion of the agent, the WhaTap server must receive messages from the Java agent. The agent sends a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "SILENT_SHUTDOWN"
      }), " event to the Whatap server when the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
        children: ["whatap_", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "{java-process-pid}"
        }), ".shutdown"]
      }), " file of the Java process appears in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "${WHATAP_HOME}"
      }), ". Transfers are completed within 5 seconds."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["When the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "SILENT_SHUTDOWN"
      }), " event has been transferred to the WhaTap server and then the agent is shut down within 1 minute, the WhaTap server deletes the agent from the list. Any inactive event does not occur."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["In case of Tomcat, you can configure in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "shutdown.sh"
        }), " file."]
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