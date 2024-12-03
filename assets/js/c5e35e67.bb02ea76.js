"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["91564"], {
"75789": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_k_8_s_k_8_s_1_7_15_mdx_c5e_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-k-8-s-k-8-s-1-7-15-mdx-c5e.json
var site_docs_release_notes_k_8_s_k_8_s_1_7_15_mdx_c5e_namespaceObject = JSON.parse('{"id":"release-notes/k8s/k8s-1_7_15","title":"Kubernetes Agent v1.7.15","description":"2024년 10월 30일","source":"@site/docs/release-notes/k8s/k8s-1.7.15.mdx","sourceDirName":"release-notes/k8s","slug":"/release-notes/k8s/k8s-1_7_15","permalink":"/release-notes/k8s/k8s-1_7_15","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/k8s/k8s-1.7.15.mdx","tags":[],"version":"current","frontMatter":{"id":"k8s-1_7_15","title":"Kubernetes Agent v1.7.15","toc_max_heading_level":2,"pagination_next":"release-notes/k8s/k8s-1_7_14","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Kubernetes Agent v1.7.16","permalink":"/release-notes/k8s/k8s-1_7_16"},"next":{"title":"Kubernetes Agent v1.7.14","permalink":"/release-notes/k8s/k8s-1_7_14"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/k8s/k8s-1.7.15.mdx


const frontMatter = {
	id: 'k8s-1_7_15',
	title: 'Kubernetes Agent v1.7.15',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/k8s/k8s-1_7_14',
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
    code: "code",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, Status} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 10월 30일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Status, {
        priority: "1",
        children: "New"
      }), "  ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_management",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentSetting",
        className: "uitext"
      }), " 메뉴에서 로그 필터링 기능 추가"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "특정 컨테이너 로그 수집을 제어할 수 있는 로그 필터링 기능이 추가되었습니다. 해당 기능을 통해 사용자는 네임스페이스, Pod 이름, 컨테이너 이름 등을 기준으로 로그 수집을 세분화할 수 있으며, 필요에 따라 특정 컨테이너의 로그 수집을 허용 또는 차단할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "log_filter_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "bool"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "로그 필터 사용 여부를 설정합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "log_filter_allow_list"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "list"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "허용할 로그의 리스트를 설정합니다. 필터링 적용 시 포함할 항목을 의미합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "log_filter_deny_list"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "list"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "제외할 로그의 리스트를 설정합니다. 필터링 적용 시 제외할 항목을 의미합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["로그 필터링 기능에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../../kubernetes/log",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Agent download: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://repo.whatap.io/docker/kube_mon_1.7.15.tar",
          children: "kube_mon_1.7.15.tar"
        })]
      })
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