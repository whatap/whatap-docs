"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["93615"], {
"59176": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_k_8_s_k_8_s_1_7_6_mdx_7b3_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-k-8-s-k-8-s-1-7-6-mdx-7b3.json
var site_docs_release_notes_k_8_s_k_8_s_1_7_6_mdx_7b3_namespaceObject = JSON.parse('{"id":"release-notes/k8s/k8s-1_7_6","title":"Kubernetes Agent v1.7.6","description":"2024년 07월 01일","source":"@site/docs/release-notes/k8s/k8s-1.7.6.mdx","sourceDirName":"release-notes/k8s","slug":"/release-notes/k8s/k8s-1_7_6","permalink":"/release-notes/k8s/k8s-1_7_6","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/k8s/k8s-1.7.6.mdx","tags":[],"version":"current","frontMatter":{"id":"k8s-1_7_6","title":"Kubernetes Agent v1.7.6","toc_max_heading_level":2,"pagination_next":"release-notes/k8s/k8s-1_7_5","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"Kubernetes Agent v1.7.5","permalink":"/release-notes/k8s/k8s-1_7_5"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/k8s/k8s-1.7.6.mdx


const frontMatter = {
	id: 'k8s-1_7_6',
	title: 'Kubernetes Agent v1.7.6',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/k8s/k8s-1_7_5',
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 07월 01일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " 태그 카운트 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "kube_service_pod_mapping"
            }), " 항목 추가"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "kube_pod"
            }), " 카네고리에 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "podUid"
            }), " 태그 추가"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "kube_service"
            }), " 카테고리에 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "externalIp"
            }), " 태그, PORT(", (0,jsx_runtime.jsx)(_components.code, {
              children: "portName"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nodePort"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "servicePort"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "targetPort"
            }), ") 필드 추가"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "kube_event"
            }), " 카테고리에 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "watch_event_type"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "resource_version"
            }), " 데이터 추가"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "kube_event"
            }), " 중복 알림 현상 제거"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "whatap-node-helper"
          }), " 컨테이너 환경변수(", (0,jsx_runtime.jsx)(_components.code, {
            children: "env"
          }), ")에 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "WHATAP_JAVA_AGENT_PATH"
          }), " 추가"]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "해당 환경변수에 와탭 자바 에이전트 jar 파일 경로를 설정하면 컨테이너 id 연동할 수 있습니다."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["이 기능은 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "../java/java-2_2_33",
                  children: "Java agent 2.2.33"
                }), " 버전 이상에서 지원합니다."]
              }), "\n"]
            }), "\n"]
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Agent download: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://repo.whatap.io/docker/kube_mon_1.7.6.tar",
          children: "kube_mon_1.7.6.tar"
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