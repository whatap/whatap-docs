"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["25702"], {
"52779": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_k_8_s_k_8_s_1_7_8_mdx_f16_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-k-8-s-k-8-s-1-7-8-mdx-f16.json
var site_docs_release_notes_k_8_s_k_8_s_1_7_8_mdx_f16_namespaceObject = JSON.parse('{"id":"release-notes/k8s/k8s-1_7_8","title":"Kubernetes Agent v1.7.8","description":"2024년 07월 24일","source":"@site/docs/release-notes/k8s/k8s-1.7.8.mdx","sourceDirName":"release-notes/k8s","slug":"/release-notes/k8s/k8s-1_7_8","permalink":"/release-notes/k8s/k8s-1_7_8","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/k8s/k8s-1.7.8.mdx","tags":[],"version":"current","frontMatter":{"id":"k8s-1_7_8","title":"Kubernetes Agent v1.7.8","toc_max_heading_level":2,"pagination_next":"release-notes/k8s/k8s-1_7_7","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Kubernetes Agent v1.7.9","permalink":"/release-notes/k8s/k8s-1_7_9"},"next":{"title":"Kubernetes Agent v1.7.7","permalink":"/release-notes/k8s/k8s-1_7_7"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/k8s/k8s-1.7.8.mdx


const frontMatter = {
	id: 'k8s-1_7_8',
	title: 'Kubernetes Agent v1.7.8',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/k8s/k8s-1_7_7',
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
  }, {Cmdname, Status} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 07월 24일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_cluster",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_nodeDiskList",
            className: "uitext"
          }), " 메뉴 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["와탭 쿠버네티스 모니터링의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_nodeDiskList",
            className: "uitext"
          }), "에서 각 노드에 마운트된 개별 디스크의 현재 사용량, 여유 공간, 성능 지표를 실시간으로 모니터링하여 디스크의 상태를 쉽게 확인할 수 있습니다. 이를 통해 클러스터의 디스크 자원을 효율적으로 관리하고, 잠재적인 문제를 사전에 파악하여 대응할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "와탭 쿠버네티스 에이전트 기동 시 마운트 포인트를 가진 디스크 목록을 표시합니다."
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "마운트 포인트가 존재하지 않는 디스크는 목록에 표시되지 않습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "와탭 쿠버네티스 에이전트 기동 후 추가된 디스크는 목록에 표시되지 않습니다."
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_workload",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_kubeServiceList",
            className: "uitext"
          }), " 메뉴 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Kubernetes 클러스터 내에서 실행 중인 모든 서비스들의 상태와 정보를 종합적으로 제공합니다. 와탭 쿠버네티스 모니터링의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_kubeServiceList",
            className: "uitext"
          }), " 메뉴를 통해 클러스터 내 네트워크 구성을 쉽게 파악하고 각 서비스의 구성과 현재 상태를 효율적으로 모니터링할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Agent download: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://repo.whatap.io/docker/kube_mon_1.7.8.tar",
          children: "kube_mon_1.7.8.tar"
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