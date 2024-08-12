"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[77321],{

/***/ 36688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ control_function_contentTitle),
  "default": () => (/* binding */ control_function_MDXContent),
  frontMatter: () => (/* binding */ control_function_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ control_function_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_nodejs-control-function.mdx


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
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["All functions are enabled. Even when the value becomes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), ", the minimum data to maintain communication with the server is sent."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "transaction_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["It enables the transaction tracing. If the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.enabled"
        }), " option is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), ", this is ignored."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "counter_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["It enables the performance counter (e.g. transaction, resource) tracing. If the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.enabled"
        }), " option is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), ", this is ignored."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["It enables the statistical data tracing. The statistical data includes transactions, SQLs, HTTP calls, user agents, and client IPs that are collected every 5 minutes. If the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.enabled"
        }), " option is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), ", this is ignored."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "license"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "To install the agent, set the access key granted from the server. The access key includes the agent's project and the encryption key for secured communication."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "encrypt_level"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "encrypt_level [1, 2, 3]"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The WhaTap agent encrypts data selectively depending on the attributes when transferring data to the server. It has performance benefits along with high security. To apply encryption policies in bulk regardless of the data type, see the following options."
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "1"
          }), ": Encrypted transmission disabled"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "2"
          }), ": Encrypted transmission for sensitive attributes such as SQL parameters and plain texts."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "3"
          }), ": Encrypted transmission for all items"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "realtime_user_thinktime_max"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSeconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "300000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the maximum call interval credited by the same user when measuring the number of real-time browser users."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "time_sync_interval_ms"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSeconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "300000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Set the synchronization time interval between the agent and the server. For no synchronization, set it to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), "."]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/nodejs/control-function.mdx


const control_function_frontMatter = {
	id: 'agent-control-function',
	title: 'Control of agent functions',
	description: 'The Node.js application server\'s functions can be controlled.',
	tags: [
		'Node.js'
	]
};
const control_function_contentTitle = undefined;
const metadata = {
  "id": "nodejs/agent-control-function",
  "title": "Control of agent functions",
  "description": "The Node.js application server's functions can be controlled.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/nodejs/control-function.mdx",
  "sourceDirName": "nodejs",
  "slug": "/nodejs/agent-control-function",
  "permalink": "/en/nodejs/agent-control-function",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/nodejs/control-function.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Node.js",
      "permalink": "/en/tags/node-js"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-control-function",
    "title": "Control of agent functions",
    "description": "The Node.js application server's functions can be controlled.",
    "tags": [
      "Node.js"
    ]
  },
  "sidebar": "nodejsSidebar",
  "previous": {
    "title": "Agent name identification",
    "permalink": "/en/nodejs/agent-name"
  },
  "next": {
    "title": "Agent communication settings",
    "permalink": "/en/nodejs/agent-network"
  }
};
const assets = {

};




const control_function_toc = [...toc];
function control_function_createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "The functions of the Node.js application server are controlled."
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ignore_build_file_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "Node.js Agent v0.4.96 or later"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Set whether to monitor the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Next.js"
          }), " build file. If this option is set to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          }), ", the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Next.js"
          }), " build file is not monitored."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ignore_build_file_path"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "Node.js Agent v0.4.96 or later"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/next/"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["You can specify the startup path of the ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Next.js"
          }), " build file to exclude from monitoring. If the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ignore_build_file_enabled"
          }), " value is set to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          }), ", the setting is applied. You can set multiple paths by using comma (,) as the delimiter."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "ignore_build_file_path=/next/abc/,/next/def/\n"
          })
        }), "\n"]
      }), "\n"]
    })]
  });
}
function control_function_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(control_function_createMdxContent, {
      ...props
    })
  }) : control_function_createMdxContent(props);
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