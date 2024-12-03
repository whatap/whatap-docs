"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["13034"], {
"87338": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_java_java_2_2_9_mdx_078_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-java-java-2-2-9-mdx-078.json
var site_docs_release_notes_java_java_2_2_9_mdx_078_namespaceObject = JSON.parse('{"id":"release-notes/java/java-2_2_9","title":"Java Agent v2.2.9","description":"2023년 6월 16일","source":"@site/docs/release-notes/java/java-2.2.9.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_9","permalink":"/release-notes/java/java-2_2_9","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.9.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_9","title":"Java Agent v2.2.9","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/java/java-2.2.9.mdx


const frontMatter = {
	id: 'java-2_2_9',
	title: 'Java Agent v2.2.9',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "신기능 <sup><Status>New</Status></sup>",
  "id": "신기능-new",
  "level": 2
}, {
  "value": "spring-boot-2.5.x 비동기 추적 기능 추가",
  "id": "spring-boot-25x-비동기-추적-기능-추가",
  "level": 3
}, {
  "value": "okhttp3-4.4 ~ okhttp3-4.9.3 추적 기능 추가",
  "id": "okhttp3-44--okhttp3-493-추적-기능-추가",
  "level": 3
}, {
  "value": "Tibero 6 SQL 추적 기능 추가",
  "id": "tibero-6-sql-추적-기능-추가",
  "level": 3
}, {
  "value": "업데이트 <sup><Status>Change</Status></sup>",
  "id": "업데이트-change",
  "level": 2
}, {
  "value": "비동기 설정 수정",
  "id": "비동기-설정-수정",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2023년 6월 16일"
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsxs)(_components.h2, {
        id: "신기능-new",
        children: ["신기능 ", (0,jsx_runtime.jsx)("sup", {
          children: (0,jsx_runtime.jsx)(Status, {
            children: "New"
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "spring-boot-25x-비동기-추적-기능-추가",
        children: "spring-boot-2.5.x 비동기 추적 기능 추가"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "weaving=tomcat9,spring-boot-2.5\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "webflux + \"netty, tomcat, undertow\" 추적"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "spring-cloud-gateway 추적"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["dev.miku", ":r2dbc-mysql-0", ".8.2.RELEASE 추적"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "spring-kafka-2.7 추적"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "okhttp3-44--okhttp3-493-추적-기능-추가",
        children: "okhttp3-4.4 ~ okhttp3-4.9.3 추적 기능 추가"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "weaving=okhttp3-4.4\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,jsx_runtime.jsx)(_components.h3, {
        id: "tibero-6-sql-추적-기능-추가",
        children: "Tibero 6 SQL 추적 기능 추가"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsxs)(_components.h2, {
        id: "업데이트-change",
        children: ["업데이트 ", (0,jsx_runtime.jsx)("sup", {
          children: (0,jsx_runtime.jsx)(Status, {
            children: "Change"
          })
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "비동기-설정-수정",
        children: "비동기 설정 수정"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["weaving 설정에서 버전 표기 방식 수정: 기존 spring-boot-", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2.7.x"
            }), "에서 spring-boot-", (0,jsx_runtime.jsx)(_components.strong, {
              children: "2.7"
            }), "로 수정"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='whatap.conf'",
              children: "weaving=spring-boot-2.7\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["weaving 설정에서 버전 표기 방식 수정: spring-boot-", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3.x"
            }), "에서 spring-boot-", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3.0"
            }), "으로 수정"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='whatap.conf'",
              children: "weaving=spring-boot-3.0\n"
            })
          }), "\n"]
        }), "\n"]
      })]
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