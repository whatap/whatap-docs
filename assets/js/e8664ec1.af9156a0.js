"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["84007"], {
"951": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_k_8_s_k_8_s_1_4_2_mdx_e86_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-k-8-s-k-8-s-1-4-2-mdx-e86.json
var site_docs_release_notes_k_8_s_k_8_s_1_4_2_mdx_e86_namespaceObject = JSON.parse('{"id":"release-notes/k8s/k8s-1_4_2","title":"Kubernetes Agent v1.4.2","description":"2023년 11월 15일","source":"@site/docs/release-notes/k8s/k8s-1.4.2.mdx","sourceDirName":"release-notes/k8s","slug":"/release-notes/k8s/k8s-1_4_2","permalink":"/release-notes/k8s/k8s-1_4_2","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/k8s/k8s-1.4.2.mdx","tags":[],"version":"current","frontMatter":{"id":"k8s-1_4_2","title":"Kubernetes Agent v1.4.2","toc_max_heading_level":2,"pagination_next":"release-notes/k8s/k8s-1_4_1","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"Kubernetes Agent v1.4.1","permalink":"/release-notes/k8s/k8s-1_4_1"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/k8s/k8s-1.4.2.mdx


const frontMatter = {
	id: 'k8s-1_4_2',
	title: 'Kubernetes Agent v1.4.2',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/k8s/k8s-1_4_1',
	displayed_sidebar: 'releaseSidebar',
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
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2023년 11월 15일"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Agent download: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://repo.whatap.io/docker/kube_mon_1.4.2.tar",
          children: "kube_mon_1.4.2.tar"
        })]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("code", {
            children: "kube_pod"
          }), " 카테고리에 수집 데이터 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)("code", {
              children: "qosClass"
            }), ": Pod에 대한 서비스 품질"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)("code", {
              children: "startTime"
            }), ": Pod 시작 시간"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)("code", {
              children: "podHash"
            }), ": Pod 이름의 해시값"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)("code", {
              children: "con_cpu_limit_total"
            }), ": Pod 내부 컨테이너의 cpu limit 합계"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)("code", {
              children: "con_mem_alloc_fail_total_count"
            }), ": Pod 내부 컨테이너의 memory 할당 실패 수 합계"]
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