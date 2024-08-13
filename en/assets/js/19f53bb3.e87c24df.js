"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[72824],{

/***/ 87518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ collect_stacks_contentTitle),
  "default": () => (/* binding */ collect_stacks_MDXContent),
  frontMatter: () => (/* binding */ collect_stacks_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ collect_stacks_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_php-collect-stacks.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Linear collection",
  "id": "linear-collection",
  "level": 2
}, {
  "value": "Circular collection",
  "id": "circular-collection",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "The application monitoring agent provides linear and circular collection methods."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "linear-collection",
        children: "Linear collection"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Individual transaction traces cannot collect steps indefinitely. Store trace steps in buffers of limited length for each transaction. For each transaction, the maximum number of steps that can be collected is specified as an option."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.profile_step_max_count"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1024"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Maximum number of steps that can be collected."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.profile_step_normal_count"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
              children: "800"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Number of steps that are generally collected without any restrictions."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.profile_step_heavy_count"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1000"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "If the normal count is exceeded, only the steps with slow response time and the active stack steps are collected."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.profile_step_heavy_time"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
              children: "100"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The reference time to collect steps within heavy count is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "whatap.profile_step_heavy_time"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              src: "https://img.whatap.io/media/agent_java/data/step_buffer.png",
              alt: "step_buffer"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the number of steps in the profile being collected exceeds the heavy count, only active stacks are collected. Even in this case, the maximum number of steps does not exceed ", (0,jsx_runtime.jsx)(_components.code, {
              children: "whatap.profile_step_max_count"
            }), "."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "circular-collection",
        children: "Circular collection"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Linear collection collects the front part of the trace and discards the later part, if it exceeds the buffer size. On the other hand, circular collection discards the front step."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          children: "circular_profile_enabled=true\n"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          src: "https://img.whatap.io/media/agent_java/data/circular_profile.png",
          alt: "circular_profile"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The buffer size is set in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_step_max_count"
        }), "."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          children: "whatap.profile_step_max_count=1024\n"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/php/collect-stacks.mdx


const collect_stacks_frontMatter = {
	id: 'collect-stacks',
	title: 'Transaction step collection method',
	description: 'It guides you to the transaction step collection method.',
	keywords: [
		'PHP',
		'Transactions'
	]
};
const collect_stacks_contentTitle = undefined;
const metadata = {
  "id": "php/collect-stacks",
  "title": "Transaction step collection method",
  "description": "It guides you to the transaction step collection method.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/php/collect-stacks.mdx",
  "sourceDirName": "php",
  "slug": "/php/collect-stacks",
  "permalink": "/en/php/collect-stacks",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/php/collect-stacks.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "collect-stacks",
    "title": "Transaction step collection method",
    "description": "It guides you to the transaction step collection method.",
    "keywords": [
      "PHP",
      "Transactions"
    ]
  },
  "sidebar": "phpSidebar",
  "previous": {
    "title": "Multi-transaction",
    "permalink": "/en/php/trs-multi-trace"
  },
  "next": {
    "title": "Topology",
    "permalink": "/en/php/topology"
  }
};
const assets = {

};




const collect_stacks_toc = [...toc];
function collect_stacks_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(MDXContent, {});
}
function collect_stacks_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(collect_stacks_createMdxContent, {
      ...props
    })
  }) : collect_stacks_createMdxContent(props);
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