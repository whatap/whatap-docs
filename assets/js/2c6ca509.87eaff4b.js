"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["81114"], {
"75689": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_java_java_2_2_11_mdx_2c6_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-java-java-2-2-11-mdx-2c6.json
var site_docs_release_notes_java_java_2_2_11_mdx_2c6_namespaceObject = JSON.parse('{"id":"release-notes/java/java-2_2_11","title":"Java Agent v2.2.11","description":"2023년 7월 10일","source":"@site/docs/release-notes/java/java-2.2.11.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_11","permalink":"/release-notes/java/java-2_2_11","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.11.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_11","title":"Java Agent v2.2.11","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/java/java-2.2.11.mdx


const frontMatter = {
	id: 'java-2_2_11',
	title: 'Java Agent v2.2.11',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2023년 7월 10일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "New"
          }), " mongodb-reactive 추적"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "mongodb-3.8.2, mongodb-4.0.3, mongodb-4.4, mongodb-4.8 추적"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='whatap.conf'",
            children: "# 적용 예시 (중복 적용 불가)\nweaving=mongodb-3.8.2\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Change"
          }), " ", (0,jsx_runtime.jsx)("code", {
            children: "trace_ignore_url_prefix"
          }), " 설정에 쉼표(,)를 구분자로 여러 개의 prefix를 등록할 수 있도록 수정"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='whatap.conf'",
            children: "# 적용 예시\ntrace_ignore_url_prefix=/api,/sample\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Change"
          }), " weaving 하위 옵션 자동화(재기동 옵션)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "weaving=spring-boot-2.5"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "tomcat9, mongodb-4.0.3 자동 추적"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title='whatap.conf'",
                children: "# 추적 해제(재기동 필요)\nweaving_mongodb4_0_3_enabled=false\nweaving_tomcat9_enabled=false\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "weaving=spring-boot-2.7"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "tomcat9, mongodb-4.4 자동 추적"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title='whatap.conf'",
                children: "# 추적 해제(재기동 필요)\nweaving_mongodb4_4_enabled=false\nweaving_tomcat9_enabled=false\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "weaving=spring-boot-3.0"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "tomcat10, mongodb-4.8 자동 추적"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title='whatap.conf'",
                children: "# 추적 해제(재기동 필요)\nweaving_mongodb4_8_enabled=false\nweaving_tomcat10_enabled=false\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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