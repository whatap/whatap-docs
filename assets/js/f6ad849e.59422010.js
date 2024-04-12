"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[52002],{

/***/ 9307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'agent-troubleshooting',
	title: '설치 문제 해결',
	description: 'Java 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.',
	hide_table_of_contents: true,
	toc_max_heading_level: 2,
	tags: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'Troubleshooting',
		'문제 해결',
		'Helm 차트'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/agent-troubleshooting",
  "title": "설치 문제 해결",
  "description": "Java 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.",
  "source": "@site/docs/kubernetes/agent-troubleshooting.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/agent-troubleshooting",
  "permalink": "/whatap-docs/kubernetes/agent-troubleshooting",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/agent-troubleshooting.mdx",
  "tags": [
    {
      "label": "쿠버네티스",
      "permalink": "/whatap-docs/tags/쿠버네티스"
    },
    {
      "label": "쿠버네티스 모니터링",
      "permalink": "/whatap-docs/tags/쿠버네티스-모니터링"
    },
    {
      "label": "Troubleshooting",
      "permalink": "/whatap-docs/tags/troubleshooting"
    },
    {
      "label": "문제 해결",
      "permalink": "/whatap-docs/tags/문제-해결"
    },
    {
      "label": "Helm 차트",
      "permalink": "/whatap-docs/tags/helm-차트"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-troubleshooting",
    "title": "설치 문제 해결",
    "description": "Java 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.",
    "hide_table_of_contents": true,
    "toc_max_heading_level": 2,
    "tags": [
      "쿠버네티스",
      "쿠버네티스 모니터링",
      "Troubleshooting",
      "문제 해결",
      "Helm 차트"
    ]
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "네임스페이스 프로젝트 만들기",
    "permalink": "/whatap-docs/kubernetes/create-name-space-project"
  },
  "next": {
    "title": "쿠버네티스 에이전트 옵션 설정",
    "permalink": "/whatap-docs/kubernetes/set-agent"
  }
};
const assets = {

};



const toc = [{
  "value": "Helm 차트 기준 설치 문제 해결",
  "id": "troubleshooting-helm-chart",
  "level": 2
}, {
  "value": "이름이 <code>whatap</code> 다른 Helm 리포지토리가 있을 경우",
  "id": "이름이-whatap-다른-helm-리포지토리가-있을-경우",
  "level": 3
}, {
  "value": "이름이 <code>whatap-monitoring</code>인 다른 네임스페이스가 클러스터에 있을 경우",
  "id": "이름이-whatap-monitoring인-다른-네임스페이스가-클러스터에-있을-경우",
  "level": 3
}, {
  "value": "<code>clusterrole</code>, <code>clusterrolebinding</code> 리소스가 이미 클러스터에 있을 경우",
  "id": "clusterrole-clusterrolebinding-리소스가-이미-클러스터에-있을-경우",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    section: "section",
    table: "table",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "troubleshooting-helm-chart",
      children: "Helm 차트 기준 설치 문제 해결"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      class: "faq",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
        id: "이름이-whatap-다른-helm-리포지토리가-있을-경우",
        children: ["이름이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap"
        }), " 다른 Helm 리포지토리가 있을 경우"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.table, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "\"whatap\" already exists with the same configuration, skipping"
            })
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["이미 동일한 이름의 다른 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap"
        }), " 리포지토리가 존재할 경우 다음 명령어를 통해 기존 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap"
        }), " 리포지토리 삭제 후 설치를 진행하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-shell",
          children: "helm repo remove whatap\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
        id: "이름이-whatap-monitoring인-다른-네임스페이스가-클러스터에-있을-경우",
        children: ["이름이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap-monitoring"
        }), "인 다른 네임스페이스가 클러스터에 있을 경우"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.table, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Error: INSTALLATION FAILED: Unable to continue with install: Namespace \"whatap-monitoring\" in namespace \"\" exists and cannot be imported into the current release"
            })
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["클러스터에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap-monitoring"
        }), " 네임스페이스가 존재한다면 사용자가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "yaml"
        }), " 파일 기준으로 이미 와탭 쿠버네티스 에이전트를 설치했기 때문입니다. 이 경우 다음 명령어를 통해 기존 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap-monitoring"
        }), " 네임스페이스 및 관련 리소스를 삭제하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-shell",
          children: "kubectl delete namespace whatap-monitoring\nkubectl delete clusterrolebinding whatap\nkubectl delete clusterrole whatap\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
        id: "clusterrole-clusterrolebinding-리소스가-이미-클러스터에-있을-경우",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "clusterrole"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "clusterrolebinding"
        }), " 리소스가 이미 클러스터에 있을 경우"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.table, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Error: INSTALLATION FAILED: Unable to continue with install: ClusterRole \"whatap\" in namespace \"\" exists and cannot be imported into the current release"
            })
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["클러스터에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "clusterrole"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "clusterrolebinding"
        }), " 리소스가 이미 존재할 경우 다음 명령어를 통해 해당 리소스를 삭제하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-shell",
          children: "kubectl delete clusterrolebinding whatap\nkubectl delete clusterrole whatap\n"
        })
      })]
    }), "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
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


/***/ })

}]);