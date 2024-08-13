"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[75219],{

/***/ 68139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ update_agent_contentTitle),
  "default": () => (/* binding */ update_agent_MDXContent),
  frontMatter: () => (/* binding */ update_agent_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ update_agent_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_download-agent.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Downloading the latest version of agent",
  "id": "downloading-the-latest-version-of-agent",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "downloading-the-latest-version-of-agent",
      children: "Downloading the latest version of agent"
    }), (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Log in the WhaTap monitoring service (", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://service.whatap.io",
            children: "https://service.whatap.io"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Select a project to update the agent."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["On the left of the screen, select ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "management",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "agent_update",
            className: "uitext"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "latest_version",
            className: "uitext"
          }), " or ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "latest_version_for_all",
            className: "uitext"
          }), "."]
        }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
          img: "java-update-agent.png",
          desc: "Update Agent"
        }), "\n"]
      }), "\n"]
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "Download the agent and then restart the application server. Update is automatically applied."
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/java/update-agent.mdx


const update_agent_frontMatter = {
	id: 'update-agent',
	title: 'Agent Update',
	description: 'The following explains how to update the Java agent to the latest version. The procedure includes how to download the latest agent and restart the application server to apply the update. For a stable system shutdown, you can see the procedure for terminating Apps, changing the agent JAR file, and updating status during the startup.',
	tags: [
		'Java',
		'Agent',
		'Update'
	]
};
const update_agent_contentTitle = undefined;
const metadata = {
  "id": "java/update-agent",
  "title": "Agent Update",
  "description": "The following explains how to update the Java agent to the latest version. The procedure includes how to download the latest agent and restart the application server to apply the update. For a stable system shutdown, you can see the procedure for terminating Apps, changing the agent JAR file, and updating status during the startup.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/java/update-agent.mdx",
  "sourceDirName": "java",
  "slug": "/java/update-agent",
  "permalink": "/en/java/update-agent",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/update-agent.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Java",
      "permalink": "/en/tags/java"
    },
    {
      "inline": true,
      "label": "Agent",
      "permalink": "/en/tags/agent"
    },
    {
      "inline": true,
      "label": "Update",
      "permalink": "/en/tags/update"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "update-agent",
    "title": "Agent Update",
    "description": "The following explains how to update the Java agent to the latest version. The procedure includes how to download the latest agent and restart the application server to apply the update. For a stable system shutdown, you can see the procedure for terminating Apps, changing the agent JAR file, and updating status during the startup.",
    "tags": [
      "Java",
      "Agent",
      "Update"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "Asynchronous trace",
    "permalink": "/en/java/async-tracking"
  },
  "next": {
    "title": "Agent removal and rollback",
    "permalink": "/en/java/uninstall-agent"
  }
};
const assets = {

};




const update_agent_toc = [...toc, {
  "value": "Automatic configuration of the update agent",
  "id": "automatic-configuration-of-the-update-agent",
  "level": 2
}];
function update_agent_createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "automatic-configuration-of-the-update-agent",
        children: "Automatic configuration of the update agent"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To update the Java agent, the server must be restarted. If ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.agent.jar"
        }), " is modified before restart, a graceful shutdown may fail while the application server is restarting."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "To update the Java agent, proceed in the following order:"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "App shutdown"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Modification of the agent jar"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "App start"
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "To easily process the above steps, the agent jar file name is to include the version number. It is important to set to automatically apply the latest versions during the update."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "{3} showLineNumbers",
          children: "########## WHATAP ############\nWHATAP_HOME=/whatap\nWHATAP_JAR=`ls ${WHATAP_HOME}/whatap.agent-*.jar | sort -V | tail -1`\nJAVA_OPTS=\"${JAVA_OPTS} -javaagent:${WHATAP_JAR} \"\n########## WHATAP ############\n"
        })
      })]
    })]
  });
}
function update_agent_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(update_agent_createMdxContent, {
      ...props
    })
  }) : update_agent_createMdxContent(props);
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