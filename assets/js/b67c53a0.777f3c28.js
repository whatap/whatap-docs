"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[27262],{

/***/ 56845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ update_agent_contentTitle),
  "default": () => (/* binding */ update_agent_MDXContent),
  frontMatter: () => (/* binding */ update_agent_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ update_agent_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_download-agent.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "최신 버전 에이전트 다운로드",
  "id": "최신-버전-에이전트-다운로드",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "최신-버전-에이전트-다운로드",
      children: "최신 버전 에이전트 다운로드"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://service.whatap.io",
            children: "와탭 모니터링 서비스"
          }), "로 이동해 로그인하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "에이전트를 업데이트할 프로젝트를 선택하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["왼쪽 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "management",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "agent_update",
            className: "uitext"
          }), "를 선택하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "latest_version",
            className: "uitext"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "latest_version_for_all",
            className: "uitext"
          }), " 버튼을 클릭하세요."]
        }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
          img: "java-update-agent.png",
          desc: "에이전트 업데이트"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "에이전트를 다운로드한 다음 애플리케이션 서버를 다시 시작하세요. 업데이트를 자동 적용합니다."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
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


;// CONCATENATED MODULE: ./docs/java/update-agent.mdx


const update_agent_frontMatter = {
	id: 'update-agent',
	title: '에이전트 업데이트',
	description: '자바(Java) 에이전트를 최신 버전으로 업데이트하는 과정을 안내합니다. 최신 에이전트를 다운로드하고 애플리케이션 서버를 재시작하여 업데이트를 적용하는 방법을 포함합니다. 또한, 안정적인 시스템 종료를 위해 앱 종료, 에이전트 JAR 파일 변경, 앱 시작 순서에 따라 업데이트하는 절차를 확인할 수 있습니다.',
	tags: [
		'Java',
		'에이전트',
		'업데이트'
	]
};
const update_agent_contentTitle = undefined;
const metadata = {
  "id": "java/update-agent",
  "title": "에이전트 업데이트",
  "description": "자바(Java) 에이전트를 최신 버전으로 업데이트하는 과정을 안내합니다. 최신 에이전트를 다운로드하고 애플리케이션 서버를 재시작하여 업데이트를 적용하는 방법을 포함합니다. 또한, 안정적인 시스템 종료를 위해 앱 종료, 에이전트 JAR 파일 변경, 앱 시작 순서에 따라 업데이트하는 절차를 확인할 수 있습니다.",
  "source": "@site/docs/java/update-agent.mdx",
  "sourceDirName": "java",
  "slug": "/java/update-agent",
  "permalink": "/whatap-docs/java/update-agent",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/update-agent.mdx",
  "tags": [
    {
      "label": "Java",
      "permalink": "/whatap-docs/tags/java"
    },
    {
      "label": "에이전트",
      "permalink": "/whatap-docs/tags/에이전트"
    },
    {
      "label": "업데이트",
      "permalink": "/whatap-docs/tags/업데이트"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "update-agent",
    "title": "에이전트 업데이트",
    "description": "자바(Java) 에이전트를 최신 버전으로 업데이트하는 과정을 안내합니다. 최신 에이전트를 다운로드하고 애플리케이션 서버를 재시작하여 업데이트를 적용하는 방법을 포함합니다. 또한, 안정적인 시스템 종료를 위해 앱 종료, 에이전트 JAR 파일 변경, 앱 시작 순서에 따라 업데이트하는 절차를 확인할 수 있습니다.",
    "tags": [
      "Java",
      "에이전트",
      "업데이트"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "오픈소스 추적",
    "permalink": "/whatap-docs/java/agent-weaving"
  },
  "next": {
    "title": "에이전트 삭제 및 롤백",
    "permalink": "/whatap-docs/java/uninstall-agent"
  }
};
const assets = {

};




const update_agent_toc = [...toc, {
  "value": "에이전트 업데이트 자동 설정",
  "id": "에이전트-업데이트-자동-설정",
  "level": 2
}];
function update_agent_createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "에이전트-업데이트-자동-설정",
      children: "에이전트 업데이트 자동 설정"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["자바 에이전트를 업데이트하려면 서버를 재시작해야 합니다. 재시작 이전에 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "whatap.agent.jar"
      }), " 파일이 변경되면 애플리케이션 서버가 재시작되는 과정에서 안정적인 시스템 종료(shutdown)를 실패할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "원칙적으로 자바 에이전트를 업데이트 하기 위해서는 다음의 순서로 진행해야 합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "app shutdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "agent jar 변경"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "app start"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "위 과정을 보다 쉽게 처리하기 위해 와탭의 에이전트 jar 파일명에는 버전 번호를 포함합니다. 업데이트 과정에서 최신 버전을 자동 적용하도록 설정하는 것이 중요합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        metastring: "{3} showLineNumbers",
        children: "########## WHATAP ############\nWHATAP_HOME=/whatap\nWHATAP_JAR=`ls ${WHATAP_HOME}/whatap.agent-*.jar | sort -V | tail -1`\nJAVA_OPTS=\"${JAVA_OPTS} -javaagent:${WHATAP_JAR} \"\n########## WHATAP ############\n"
      })
    })]
  });
}
function update_agent_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(update_agent_createMdxContent, {
      ...props
    })
  }) : update_agent_createMdxContent(props);
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