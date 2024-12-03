"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["52656"], {
"22564": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_browser_browser_v_1_3_4_mdx_f5c_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-browser-browser-v-1-3-4-mdx-f5c.json
var site_docs_release_notes_browser_browser_v_1_3_4_mdx_f5c_namespaceObject = JSON.parse('{"id":"release-notes/browser/browser-v1_3_4","title":"Browser Agent v1.3.4","description":"2024년 02월 19일","source":"@site/docs/release-notes/browser/browser-v1.3.4.mdx","sourceDirName":"release-notes/browser","slug":"/release-notes/browser/browser-v1_3_4","permalink":"/release-notes/browser/browser-v1_3_4","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/browser/browser-v1.3.4.mdx","tags":[],"version":"current","frontMatter":{"id":"browser-v1_3_4","title":"Browser Agent v1.3.4","toc_max_heading_level":3,"pagination_next":"release-notes/browser/browser-v1_3_3","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Browser Agent v1.3.5","permalink":"/release-notes/browser/browser-v1_3_5"},"next":{"title":"Browser Agent v1.3.3","permalink":"/release-notes/browser/browser-v1_3_3"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/browser/browser-v1.3.4.mdx


const frontMatter = {
	id: 'browser-v1_3_4',
	title: 'Browser Agent v1.3.4',
	toc_max_heading_level: 3,
	pagination_next: 'release-notes/browser/browser-v1_3_3',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, Status} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 02월 19일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " 페이지 로드, AJAX 이벤트 발생 시 ", (0,jsx_runtime.jsx)("b", {
            children: "Network Information API"
          }), "의 다음 지표를 추가 수집"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "downlink"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "effectiveType"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "rtt"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " 리소스 이벤트 발생 시 다음 지표를 추가 수집"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "deliveryType"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "responseStatus"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " Content Security Policy(CSP) 에러 수집 기능 추가"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "추가한 지표에 대한 자세한 내용은 다음 링크를 참조하세요."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/effectiveType",
            children: (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL07611",
              className: "uitext"
            })
          }), " (effectiveType)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/rtt",
            children: (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL07612",
              className: "uitext"
            })
          }), " (rtt)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/downlink",
            children: (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL07610",
              className: "uitext"
            })
          }), " (downlink)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/deliveryType",
            children: (0,jsx_runtime.jsx)("span", {
              class: "uitext",
              children: "Delivery Type"
            })
          }), " (deliveryType)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/responseStatus",
            children: (0,jsx_runtime.jsx)(Cmdname, {
              sid: "status_code",
              className: "uitext"
            })
          }), " (responseStatus)"]
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