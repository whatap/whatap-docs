"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["15813"], {
"76197": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Link} = _components;
  if (!Link) _missingMdxReference("Link", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "NPM 방식"
        }), " 패키지 정보: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link, {
          to: `https://www.npmjs.com/package/whatap`,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://www.npmjs.com/package/whatap",
            children: "https://www.npmjs.com/package/whatap"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "설치 및 적용 방법"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "npm install whatap\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "로컬 설치 파일 방식"
        }), " 다운로드 정보: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Link, {
          to: `https://repo.whatap.io/nodejs/whatap.agent.nodejs.${props.ver}.zip`,
          children: ["Node.js Agent v", props.ver]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "zip"
            }), " 파일 압축 해제"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", {
            tabIndex: "0",
            className: "prism-code language-bash codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar",
            style: {
              color: "rgb(191, 199, 213)",
              backgroundColor: "rgb(41, 45, 62)"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              className: "codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "token-line",
                style: {
                  color: "rgb(191, 199, 213)"
                },
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  className: "token function",
                  style: {
                    color: "rgb(130, 170, 255)"
                  },
                  children: "unzip "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                  className: "token plain",
                  children: ["whatap.agent.nodejs.", props.ver, ".zip -d /path/to/app_directory"]
                })]
              })
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "whatap 및 의존성 패키지 설치"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", {
            tabIndex: "0",
            className: "prism-code language-bash codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar",
            style: {
              color: "rgb(191, 199, 213)",
              backgroundColor: "rgb(41, 45, 62)"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("code", {
              className: "codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "token-line",
                style: {
                  color: "rgb(191, 199, 213)"
                },
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  className: "token builtin class-name",
                  style: {
                    color: "rgb(255, 203, 107)"
                  },
                  children: "cd"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  className: "token plain",
                  children: " /path/to/app_directory "
                })]
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "token-line",
                style: {
                  color: "rgb(191, 199, 213)"
                },
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  className: "token function",
                  style: {
                    color: "rgb(130, 170, 255)"
                  },
                  children: "npm "
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  className: "token plain"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  className: "token function",
                  style: {
                    color: "rgb(130, 170, 255)"
                  },
                  children: "install"
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                  className: "token plain",
                  children: [" crypto-1.0.1.tgz df-1.1.1.tgz long-3.2.0.tgz pidusage-1.1.0.tgz whatap-", props.ver, ".tgz"]
                })]
              })]
            })
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
"86488": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_nodejs_nodejs_0_4_97_mdx_7cf_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-nodejs-nodejs-0-4-97-mdx-7cf.json
var site_docs_release_notes_nodejs_nodejs_0_4_97_mdx_7cf_namespaceObject = JSON.parse('{"id":"release-notes/nodejs/nodejs-0_4_97","title":"Node.js Agent v0.4.97","description":"2024년 06월 03일","source":"@site/docs/release-notes/nodejs/nodejs-0.4.97.mdx","sourceDirName":"release-notes/nodejs","slug":"/release-notes/nodejs/nodejs-0_4_97","permalink":"/release-notes/nodejs/nodejs-0_4_97","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/nodejs/nodejs-0.4.97.mdx","tags":[],"version":"current","frontMatter":{"id":"nodejs-0_4_97","title":"Node.js Agent v0.4.97","toc_max_heading_level":2,"pagination_next":"release-notes/nodejs/nodejs-0_4_96","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Node.js Agent v0.4.98","permalink":"/release-notes/nodejs/nodejs-0_4_98"},"next":{"title":"Node.js Agent v0.4.96","permalink":"/release-notes/nodejs/nodejs-0_4_96"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/release-notes/nodejs/_import_dl-nodejs-agent.mdx
var _import_dl_nodejs_agent = __webpack_require__("76197");
;// CONCATENATED MODULE: ./docs/release-notes/nodejs/nodejs-0.4.97.mdx


const frontMatter = {
	id: 'nodejs-0_4_97',
	title: 'Node.js Agent v0.4.97',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/nodejs/nodejs-0_4_96',
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._import_dl_nodejs_agent/* toc */.d$];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 06월 03일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Status, {
        children: "New"
      }), " 쿠버네티스 환경 사용 여부를 환경변수로 적용 가능"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "process.env.WHATAP_MICRO_ENABLED = true;\n"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_import_dl_nodejs_agent/* default */.ZP, {
      ver: "0.4.97"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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



}),
"50065": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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


}),

}]);