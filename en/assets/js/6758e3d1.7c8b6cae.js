"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[85048],{

/***/ 33857:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_common-network-security.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Network &amp; security",
  "id": "network--security",
  "level": 2
}, {
  "value": "Collection server address and port",
  "id": "collection-server-address-and-port",
  "level": 3
}, {
  "value": "Communication connectivity and security",
  "id": "communication-connectivity-and-security",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "network--security",
        children: "Network & security"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "WhaTap transfers monitoring data after TCP connection between the server and the agent."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          src: "https://img.whatap.io/media/agent_node/agent_net.png",
          alt: "WhaTap Agent Network"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The agent handles data transfer and server control requests through a single TCP session. The node agent does not use UDP communication. Open the firewall from the node agent to the WhaTap collection server."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "collection-server-address-and-port",
        children: "Collection server address and port"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "WhaTap servers are divided into data region servers, front servers, and Eureka. The data regions include Proxy, Yard, Keeper, etc. Among them, the agent communicates with the proxy server."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Set the proxy server address of the Whatap server in the Node agent (e.g. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.server.host=10.0.3.1/10.0.3.2"
        }), "). When setting the server address, enter as many addresses as the proxy server count. WhaTap server can use one or multiple proxy servers depending on the installation method."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "WhaTap Proxy server listens on the port 6600. If there is no separate setting in the agent, the agent attempts to connect the port 6600."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "whatap.server.port=6600\n"
        })
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "wo proxy servers cannot use different ports. When using multiple proxy servers, the listening port must be the same."
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "communication-connectivity-and-security",
        children: "Communication connectivity and security"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "WhaTap is designed on the premise of collecting monitoring data from public networks. Accordingly, all monitoring data is encrypted and transmitted to the server. When lots of encrypted data is sent, it may cause overhead. WhaTap selectively encrypts data. The communication procedure between agents and the server is as follows:"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Generate and copy the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "Project access key"
            })
          }), " from the project creation menu."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Project access key"
          }), " includes the private key. Be careful not to be disclosed."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Restart the application server."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The WhaTap agent establishes the TCP session with the server."
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Request a security key for a new session by encrypting data with the private key for communication included in the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Project access key"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The server creates a new security key for the session requested by the agent and sends it down to the agent."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The security key of the session has two encryption keys. They are encryption keys for the ASC algorithm and the simple password."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Afterwards, the agent uses the ASC secret key for sensitive data such as text and control data. Relatively secure data such as numeric value undergoes simple encryption before transmission to the server."
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "To apply the changes, restart the server."
        })
      })]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/server/agent-network.mdx


const agent_network_frontMatter = {
	id: 'agent-network',
	title: 'Agent communication settings',
	description: 'It describes the connection settings between the agent and the server.',
	keywords: [
		'Server',
		'Agent',
		'Communication configuration'
	]
};
const agent_network_contentTitle = undefined;
const metadata = {
  "id": "server/agent-network",
  "title": "Agent communication settings",
  "description": "It describes the connection settings between the agent and the server.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/server/agent-network.mdx",
  "sourceDirName": "server",
  "slug": "/server/agent-network",
  "permalink": "/en/server/agent-network",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/server/agent-network.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-network",
    "title": "Agent communication settings",
    "description": "It describes the connection settings between the agent and the server.",
    "keywords": [
      "Server",
      "Agent",
      "Communication configuration"
    ]
  },
  "sidebar": "serverSidebar",
  "previous": {
    "title": "Agent name identification",
    "permalink": "/en/server/agent-name"
  },
  "next": {
    "title": "Configuring the Windows performance counter",
    "permalink": "/en/server/agent-pcounter"
  }
};
const assets = {

};




const agent_network_toc = [...toc];
function agent_network_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(MDXContent, {});
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