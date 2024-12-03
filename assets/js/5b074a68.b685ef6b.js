"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["6279"], {
"97547": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kubernetes_resource_namespace_mdx_5b0_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kubernetes-resource-namespace-mdx-5b0.json
var site_docs_kubernetes_resource_namespace_mdx_5b0_namespaceObject = JSON.parse('{"id":"kubernetes/resource-namespace","title":"네임스페이스 현황","description":"와탭 쿠버네티스 클러스터 프로젝트 및 하위 네임스페이스 프로젝트 현황을 확인할 수 있습니다.","source":"@site/docs/kubernetes/resource-namespace.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/resource-namespace","permalink":"/kubernetes/resource-namespace","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/resource-namespace.mdx","tags":[],"version":"current","frontMatter":{"id":"resource-namespace","title":"네임스페이스 현황","description":"와탭 쿠버네티스 클러스터 프로젝트 및 하위 네임스페이스 프로젝트 현황을 확인할 수 있습니다.","keywords":["쿠버네티스","쿠버네티스 모니터링","클러스터","네임스페이스"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"Ingress 목록","permalink":"/kubernetes/ingress-list"},"next":{"title":"Pod 시작 분석","permalink":"/kubernetes/pod-init-perform-v2"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/kubernetes/resource-namespace.mdx


const frontMatter = {
	id: 'resource-namespace',
	title: '네임스페이스 현황',
	description: '와탭 쿠버네티스 클러스터 프로젝트 및 하위 네임스페이스 프로젝트 현황을 확인할 수 있습니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'클러스터',
		'네임스페이스'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "cluster",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "네임스페이스 현황"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["쿠버네티스 클러스터 프로젝트(", (0,jsx_runtime.jsx)("code", {
          class: "my",
          children: "CP"
        }), ")일 경우 해당 메뉴를 조회할 수 있습니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "네임스페이스 현황"
        })
      }), " 메뉴를 통해 와탭 쿠버네티스 클러스터 프로젝트 및 하위 네임스페이스 프로젝트 현황을 확인할 수 있습니다. 네임스페이스 프로젝트에서는 접근할 수 없는 메뉴입니다."]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "k8s-namespace-status.png",
      desc: "네임스페이스 현황"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "네임스페이스 현황"
        })
      }), " 메뉴는 프로젝트 목록 화면과 유사하지만 다음과 같은 차이가 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "프로젝트 목록"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "네임스페이스 프로젝트 생성 후 해당 프로젝트를 다른 그룹으로 이동할 수 있지만 네임스페이스를 한 눈에 파악하기 어렵습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "네임스페이스 현황"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "클러스터 프로젝트와 동일한 그룹에 속하지 않는 네임스페이스도 확인할 수 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "한 눈에 관련 프로젝트를 모두 확인할 수 있습니다."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["클러스터 프로젝트의 경우 Kubernetes 플랫폼을 나타내는 ", (0,jsx_runtime.jsx)("span", {
        class: "normal",
        children: "파란색"
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "my",
        children: "Kubernetes"
      }), " 태그가 표시됩니다. 네임스페이스 프로젝트에는 ", (0,jsx_runtime.jsx)("code", {
        class: "my",
        children: "Namespace"
      }), " 태그가 표시됩니다. 위젯 왼쪽 위에 타이틀은 프로젝트 이름이며, 네임스페이스 이름은 가장 아래에 ", (0,jsx_runtime.jsx)("code", {
        class: "my",
        children: "Namespace"
      }), " 태그 옆에 표시됩니다."]
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