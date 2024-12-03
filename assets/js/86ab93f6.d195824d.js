"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["49934"], {
"32794": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_k_8_s_k_8_s_1_7_7_mdx_86a_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-k-8-s-k-8-s-1-7-7-mdx-86a.json
var site_docs_release_notes_k_8_s_k_8_s_1_7_7_mdx_86a_namespaceObject = JSON.parse('{"id":"release-notes/k8s/k8s-1_7_7","title":"Kubernetes Agent v1.7.7","description":"2024년 07월 11일","source":"@site/docs/release-notes/k8s/k8s-1.7.7.mdx","sourceDirName":"release-notes/k8s","slug":"/release-notes/k8s/k8s-1_7_7","permalink":"/release-notes/k8s/k8s-1_7_7","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/k8s/k8s-1.7.7.mdx","tags":[],"version":"current","frontMatter":{"id":"k8s-1_7_7","title":"Kubernetes Agent v1.7.7","toc_max_heading_level":2,"pagination_next":"release-notes/k8s/k8s-1_7_6","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Kubernetes Agent v1.7.8","permalink":"/release-notes/k8s/k8s-1_7_8"},"next":{"title":"Kubernetes Agent v1.7.6","permalink":"/release-notes/k8s/k8s-1_7_6"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/k8s/k8s-1.7.7.mdx


const frontMatter = {
	id: 'k8s-1_7_7',
	title: 'Kubernetes Agent v1.7.7',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/k8s/k8s-1_7_6',
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
    em: "em",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 07월 11일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " Java 애플리케이션과 쿠버네티스 에이전트 연동 방식 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Java 에이전트 컨테이너 환경변수에 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "WHATAP_JAVA_AGENT_PATH"
              }), " 값을 추가해 컨테이너 ID 연동 기능 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["에이전트 프로세스 ID를 이용하여 proc 정보 조회, 해당 정보로 애플리케이션 컨테이너 process name에서 와탭 자바 홈(", (0,jsx_runtime.jsx)(_components.code, {
                children: "$WHATAP_HOME"
              }), ") 추출"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["위 과정에서 와탭 자바 홈(", (0,jsx_runtime.jsx)(_components.code, {
                children: "$WHATAP_HOME"
              }), ")을 찾지 못하면 runtimeAPI를 사용해 에이전트 이미지에서 와탭 자바 홈 추출"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "에이전트의 버전과 형식 체크하고, 다음을 기준 충족해야 valid 버전으로 containerID 연동 기능 수행"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["1. 파일 이름이 ", (0,jsx_runtime.jsxs)(_components.em, {
                children: ["whatap.agent-", (0,jsx_runtime.jsx)(_components.code, {
                  children: "X.Y.Z"
                }), ".jar"]
              }), "이고 버전 정보가 2.2.33보다 크거나 같은 경우(", (0,jsx_runtime.jsx)(_components.code, {
                children: "X.Y.Z"
              }), " >= 2.2.33)"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["2. 파일 이름이 ", (0,jsx_runtime.jsx)(_components.em, {
                children: "whatap.agent.kube.jar"
              }), "인 경우"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Changed"
          }), " 이벤트 수집 방식 변경: 에이전트 기동 시점 이후 생성된 이벤트에 대해서만 데이터 수집(", (0,jsx_runtime.jsx)(_components.code, {
            children: "kube_event"
          }), ")"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Agent download: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://repo.whatap.io/docker/kube_mon_1.7.7.tar",
          children: "kube_mon_1.7.7.tar"
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