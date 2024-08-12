"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[81151],{

/***/ 6842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ agent_network_contentTitle),
  "default": () => (/* binding */ agent_network_MDXContent),
  frontMatter: () => (/* binding */ agent_network_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ agent_network_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_donet-network.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
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
          children: "whatap.server.host"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "ip_address"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "127.0.0.1,127.0.0.1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Specify the server to transfer the data collected by the agent. If there are multiple IP addresses for collection server redundancy, use comma (,) as the delimiter. The proxy of the collection server must be in listening state for the set IP address."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.server.port"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "tcp_port"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "6600"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Set the collection server port. Because only one port can be set, the collection servers set in the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.server.host"
        }), " option must use the same port."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "tcp_so_timeout"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "60000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the socket time out of the TCP session that communicates with the collection server."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "tcp_connection_timeout"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the connection time out of the TCP session that communicates with the collection server."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "net_send_max_bytes"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Byte"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5242880"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Maximum data size in bytes the agent can collect and transfer over the network at a time."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "net_udp_port"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "tcp_port"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "6600"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The WhaTap agent transfers the data collected by the tracer to the collection server via UDP. You can specify the port of the first UDP server. If the provided port 6600 is in use, you can use this option."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "To apply the set values, restart IIS."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "net_send_queue1_size"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "256"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the queue buffer for TCP data processing. This queue is for the high-priority data."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "net_send_queue2_size"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the queue buffer size for TCP data processing. This queue is for the trace data."
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/dotnet/agent-network.mdx


const agent_network_frontMatter = {
	id: 'agent-network',
	title: 'Agent communication settings',
	description: 'It describes the connection settings between the agent and the server.',
	tags: [
		'.NET',
		'Communication',
		'Network'
	]
};
const agent_network_contentTitle = undefined;
const metadata = {
  "id": "dotnet/agent-network",
  "title": "Agent communication settings",
  "description": "It describes the connection settings between the agent and the server.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/dotnet/agent-network.mdx",
  "sourceDirName": "dotnet",
  "slug": "/dotnet/agent-network",
  "permalink": "/en/dotnet/agent-network",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/dotnet/agent-network.mdx",
  "tags": [
    {
      "inline": true,
      "label": ".NET",
      "permalink": "/en/tags/net"
    },
    {
      "inline": true,
      "label": "Communication",
      "permalink": "/en/tags/communication"
    },
    {
      "inline": true,
      "label": "Network",
      "permalink": "/en/tags/network"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-network",
    "title": "Agent communication settings",
    "description": "It describes the connection settings between the agent and the server.",
    "tags": [
      ".NET",
      "Communication",
      "Network"
    ]
  },
  "sidebar": "dotNetSidebar",
  "previous": {
    "title": "Control of agent functions",
    "permalink": "/en/dotnet/agent-control-function"
  },
  "next": {
    "title": "Agent performance",
    "permalink": "/en/dotnet/agent-performance"
  }
};
const assets = {

};




const agent_network_toc = [...toc];
function agent_network_createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "It is the network configuration option to communicate with the server for transferring the data collected by the agent."
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {})]
  });
}
function agent_network_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_network_createMdxContent, {
      ...props
    })
  }) : agent_network_createMdxContent(props);
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