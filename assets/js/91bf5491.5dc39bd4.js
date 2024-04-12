"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[94192],{

/***/ 62091:
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
	id: 'uninstall-agent',
	title: '에이전트 삭제 및 롤백',
	description: '자바(Java) 에이전트를 제거하거나 이전 버전으로 되돌리는 과정을 안내합니다. 에이전트를 삭제할 때는 -javaagent JVM 옵션을 제거하고 서버를 재시작하는 단계, 환경 변수를 정리하는 과정을 포함합니다.',
	tags: [
		'Java',
		'에이전트'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "java/uninstall-agent",
  "title": "에이전트 삭제 및 롤백",
  "description": "자바(Java) 에이전트를 제거하거나 이전 버전으로 되돌리는 과정을 안내합니다. 에이전트를 삭제할 때는 -javaagent JVM 옵션을 제거하고 서버를 재시작하는 단계, 환경 변수를 정리하는 과정을 포함합니다.",
  "source": "@site/docs/java/uninstall-agent.mdx",
  "sourceDirName": "java",
  "slug": "/java/uninstall-agent",
  "permalink": "/whatap-docs/java/uninstall-agent",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/uninstall-agent.mdx",
  "tags": [
    {
      "label": "Java",
      "permalink": "/whatap-docs/tags/java"
    },
    {
      "label": "에이전트",
      "permalink": "/whatap-docs/tags/에이전트"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "uninstall-agent",
    "title": "에이전트 삭제 및 롤백",
    "description": "자바(Java) 에이전트를 제거하거나 이전 버전으로 되돌리는 과정을 안내합니다. 에이전트를 삭제할 때는 -javaagent JVM 옵션을 제거하고 서버를 재시작하는 단계, 환경 변수를 정리하는 과정을 포함합니다.",
    "tags": [
      "Java",
      "에이전트"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "에이전트 업데이트",
    "permalink": "/whatap-docs/java/update-agent"
  },
  "next": {
    "title": "MSA 업무 그룹 구분",
    "permalink": "/whatap-docs/java/msa-group"
  }
};
const assets = {

};



const toc = [{
  "value": "에이전트 삭제",
  "id": "에이전트-삭제",
  "level": 2
}, {
  "value": "에이전트 롤백",
  "id": "에이전트-롤백",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "에이전트-삭제",
        children: "에이전트 삭제"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["애플리케이션 서버에서 JVM 옵션의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "-javaagent"
        }), " 설정을 삭제한 다음 서버를 다시 시작하세요. 이후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "$WHATAP_HOME"
        }), " 환경 변수를 삭제하세요."]
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "에이전트-롤백",
        children: "에이전트 롤백"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "와탭 모니터링 서비스"
            }), "에서 롤백을 원하는 프로젝트를 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["왼쪽 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "관리"
              })
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "에이전트 업데이트"
              })
            }), "를 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "다른 버전들"
              })
            }), " 버튼을 선택하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "agent_rollback_1.png",
            desc: "관리 - 에이전트 롤백"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["롤백을 원하는 버전을 선택한 다음 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "선택된 버전"
              })
            }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "선택된 버전으로 모든 에이전트에 다운로드"
              })
            }), " 버튼을 클릭하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "agent_rollback_2.png",
            desc: "관리 - 에이전트 롤백"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["에이전트를 설치할 때 수정한 스크립트에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "WHATAP_JAR"
            }), " 환경 변수를 롤백하려는 버전으로 변경하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "관리 - 에이전트 롤백 JVM 수정",
              src: (__webpack_require__(25113)/* ["default"] */ .A) + "",
              width: "437",
              height: "85"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 25113:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

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