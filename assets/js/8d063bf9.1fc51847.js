"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["26132"], {
"73627": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_java_java_2_2_20_mdx_8d0_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-java-java-2-2-20-mdx-8d0.json
var site_docs_release_notes_java_java_2_2_20_mdx_8d0_namespaceObject = JSON.parse('{"id":"release-notes/java/java-2_2_20","title":"Java Agent v2.2.20","description":"2023년 10월 19일","source":"@site/docs/release-notes/java/java-2.2.20.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_20","permalink":"/release-notes/java/java-2_2_20","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.20.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_20","title":"Java Agent v2.2.20","toc_max_heading_level":2,"pagination_next":"release-notes/java/java-2_2_19","isTranslationMissing":false},"next":{"title":"Java Agent v2.2.19","permalink":"/release-notes/java/java-2_2_19"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/java/java-2.2.20.mdx


const frontMatter = {
	id: 'java-2_2_20',
	title: 'Java Agent v2.2.20',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/java/java-2_2_19',
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
      children: "2023년 10월 19일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " apache-camel-seda-2.22 추적"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='whatap.conf'",
            children: "weaving=camel-seda-2.22\n\n# default: false\ntrace_camel_header_enabled=false\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " apache-camel-seda-3.2 추적"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='whatap.conf'",
            children: "weaving=camel-seda-3.2\n\n# default: false\ntrace_camel_header_enabled=false\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "biz_exceptions_status"
          }), " 옵션 추가"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='whatap.conf'",
            children: "biz_exceptions_status=java.util.concurrent.TimeoutException:400&404&408,java.lang.Exception:200\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "이 옵션을 적용하면 히트맵 info(파란색)로 표시하고 에러 통계를 추가합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " MongoDB 동기 방식 추적(mongodb-3.8.2, mongodb-4.0.3, mongodb-4.4, mongodb-4.8)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='whatap.conf'",
            children: "# example\nweaving=mongodb-4.0.3\n\n# spring-boot-3.x user\n# spring-boot-3.x: mongodb-4.8\nweaving=spring-boot-3.0\n\n# spring-boot-2.7.x user\n# spring-boot-2.7.x: mongodb-4.4\nweaving=spring-boot-2.7\n\n# spring-boot-2.5.x user\n# spring-boot-2.5.x: mongodb-4.0.3\nweaving=spring-boot-2.5\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)("code", {
            children: "biz_exceptions"
          }), " 처리한 에러를 에러 통계로 수집"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Fixed"
          }), " SQL 파싱 오류 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Deprecated"
          }), " Jedis, Tomcat, JMX metric 지표(", (0,jsx_runtime.jsx)("code", {
            children: "java_jedis"
          }), ", ", (0,jsx_runtime.jsx)("code", {
            children: "perfx_jmx_interval"
          }), ", ", (0,jsx_runtime.jsx)("code", {
            children: "perfx_tomcat_enabled"
          }), ") 수집 중단"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='whatap.conf'",
            children: "# deprecated\nperfx_jedis_enabled=false\nperfx_jmx_enabled=false\nperfx_tomcat_enabled=false\n"
          })
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