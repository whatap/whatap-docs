"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["22501"], {
"95464": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_k_8_s_k_8_s_1_5_3_mdx_288_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-k-8-s-k-8-s-1-5-3-mdx-288.json
var site_docs_release_notes_k_8_s_k_8_s_1_5_3_mdx_288_namespaceObject = JSON.parse('{"id":"release-notes/k8s/k8s-1_5_3","title":"Kubernetes Agent v1.5.3","description":"2024년 01월 30일","source":"@site/docs/release-notes/k8s/k8s-1.5.3.mdx","sourceDirName":"release-notes/k8s","slug":"/release-notes/k8s/k8s-1_5_3","permalink":"/release-notes/k8s/k8s-1_5_3","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/k8s/k8s-1.5.3.mdx","tags":[],"version":"current","frontMatter":{"id":"k8s-1_5_3","title":"Kubernetes Agent v1.5.3","toc_max_heading_level":2,"pagination_next":"release-notes/k8s/k8s-1_5_2","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"Kubernetes Agent v1.5.2","permalink":"/release-notes/k8s/k8s-1_5_2"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/k8s/k8s-1.5.3.mdx


const frontMatter = {
	id: 'k8s-1_5_3',
	title: 'Kubernetes Agent v1.5.3',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/k8s/k8s-1_5_2',
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, Status} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 01월 30일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Fixed"
          }), " 메트리스 수집 시 ", (0,jsx_runtime.jsx)("code", {
            children: "server_disk"
          }), ", ", (0,jsx_runtime.jsx)("code", {
            children: "server_network"
          }), ", ", (0,jsx_runtime.jsx)("code", {
            children: "server_base"
          }), " 카테고리의 수집 간격을 5초 단위로 맞춤"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Changed"
          }), " 메트릭스 수집 시 ", (0,jsx_runtime.jsx)("code", {
            children: "kube_node"
          }), " 카테고리에 노드의 ", (0,jsx_runtime.jsx)("b", {
            children: "external-ip"
          }), ", ", (0,jsx_runtime.jsx)("b", {
            children: "internal-ip"
          }), " 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "tip",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["쿠버네티스 프로젝트의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "sitemap",
              className: "uitext"
            }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "tag_count",
              className: "uitext"
            }), "에서 확인할 수 있습니다."]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "InternalIP"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "클러스터 내부에서만 접근할 수 있는 IP 주소입니다. 클러스터 안에 있는 다른 노드나 파드(Pods)가 서로 통신할 때 사용하는 주소입니다. 이 내부 IP 주소는 클러스터 외부에서는 접근할 수 없으며, 일반적으로 프라이빗 네트워크 주소 범위에서 할당됩니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "ExternalIP"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "외부 네트워크에서 접근할 수 있는 노드의 IP 주소입니다. 이 주소를 통해 클러스터 외부의 시스템이 노드에 접근할 수 있습니다. 모든 노드가 외부 IP 주소를 가지고 있는 것은 아니며, 외부 IP 주소가 할당되는 것은 클러스터를 구성하는 환경(예: 클라우드 제공 업체, 베어 메탈 환경 등)에 따라 다를 수 있습니다."
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Agent download: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://repo.whatap.io/docker/kube_mon_1.5.3.tar",
          children: "kube_mon_1.5.3.tar"
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