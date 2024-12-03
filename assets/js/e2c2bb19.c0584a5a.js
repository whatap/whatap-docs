"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["15691"], {
"61181": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_java_java_2_2_5_mdx_e2c_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-java-java-2-2-5-mdx-e2c.json
var site_docs_release_notes_java_java_2_2_5_mdx_e2c_namespaceObject = JSON.parse('{"id":"release-notes/java/java-2_2_5","title":"Java Agent v2.2.5","description":"2023년 5월 30일","source":"@site/docs/release-notes/java/java-2.2.5.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_5","permalink":"/release-notes/java/java-2_2_5","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.5.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_5","title":"Java Agent v2.2.5","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/java/java-2.2.5.mdx


const frontMatter = {
	id: 'java-2_2_5',
	title: 'Java Agent v2.2.5',
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
  "value": "업데이트 <sup><Status>Change</Status></sup>",
  "id": "업데이트-change",
  "level": 2
}, {
  "value": "버그 수정 <sup><Status>Fixed</Status></sup>",
  "id": "버그-수정-fixed",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
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
      children: "2023년 5월 30일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "caution",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Java 에이전트 2.2.5 버전부터는 이전의 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "instrument"
          }), " 폴더 사용불가"]
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "instrument"
            }), " 폴더는 2.2.4 버전까지 사용 가능합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "instrument"
            }), " 폴더는 이후 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "weaving"
            }), " 폴더로 대체 예정입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "instrument"
            }), "에서 사용하던 오픈 소스 추적 플러그인은 새로운 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "weaving"
            }), " 폴더에서 정상 동작을 보장하지 않습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsxs)(_components.h2, {
        id: "신기능-new",
        children: ["신기능 ", (0,jsx_runtime.jsx)("sup", {
          children: (0,jsx_runtime.jsx)(Status, {
            children: "New"
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "최신 spring-boot 비동기 추적 기능 추가"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "webflux + \"tomcat9, tomcat10, undertow, netty\" 추적 기능 추가"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "r2dbc-mysql + \"jasync, dev.miku\" 드라이버 추적 기능 추가"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='whatap.conf'",
              children: "# spring-boot-2.7 이상인 경우\nweaving=tomcat9,spring-boot-2.7.x\n\n# spring-boot-3.0 이상인 경우\nweaving=tomcat10,spring-boot-3.x\nspringboot_tomcat10_enabled=true\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsxs)(_components.h2, {
        id: "업데이트-change",
        children: ["업데이트 ", (0,jsx_runtime.jsx)("sup", {
          children: (0,jsx_runtime.jsx)(Status, {
            children: "Change"
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "webflux"
          }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "r2dbc"
          }), " 오픈 소스 플러그인을 내부(embedded) 플러그인으로 전환"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsxs)(_components.h2, {
        id: "버그-수정-fixed",
        children: ["버그 수정 ", (0,jsx_runtime.jsx)("sup", {
          children: (0,jsx_runtime.jsx)(Status, {
            children: "Fixed"
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["비동기 tomcat(예시, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "webflux"
          }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "tomcat"
          }), ") 사용 시 동일한 서비스가 두 번 호출되는 버그 수정"]
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