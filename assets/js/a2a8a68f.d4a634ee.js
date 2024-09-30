"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[81814],{

/***/ 75405:
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
	id: 'url-event',
	title: '이벤트 설정',
	description: '와탭 URL 모니터링 서비스 이벤트 설정 방법을 안내합니다.',
	keywords: [
		'URL',
		'설치하기',
		'이벤트 설정',
		'경고 알림'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "url/url-event",
  "title": "이벤트 설정",
  "description": "와탭 URL 모니터링 서비스 이벤트 설정 방법을 안내합니다.",
  "source": "@site/docs/url/url-event.mdx",
  "sourceDirName": "url",
  "slug": "/url/url-event",
  "permalink": "/whatap-docs/url/url-event",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/url/url-event.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "url-event",
    "title": "이벤트 설정",
    "description": "와탭 URL 모니터링 서비스 이벤트 설정 방법을 안내합니다.",
    "keywords": [
      "URL",
      "설치하기",
      "이벤트 설정",
      "경고 알림"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "urlSidebar",
  "previous": {
    "title": "URL 모니터링 시작하기",
    "permalink": "/whatap-docs/url/url-install"
  },
  "next": {
    "title": "이벤트 수신 설정",
    "permalink": "/whatap-docs/url/set-receive-event"
  }
};
const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_event",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_eventSetting",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "URL 모니터링은 이벤트 설정을 통해 이메일 형태의 경고 알림을 제공받을 수 있습니다. 모니터링 중인 프로젝트 화면에서는 실시간으로 발생하는 이벤트에 대해서도 알림을 제공합니다. 등록된 URL을 대상으로 다음과 같이 개별 이벤트 설정을 할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["이벤트 목록 화면에서 편집하고자 하는 URL의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "수정 아이콘",
            src: (__webpack_require__(63582)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "edit",
            className: "uitext"
          }), " 아이콘을 선택하세요."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "url-event.png",
          desc: "이벤트 목록 화면"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["해당 URL에 대한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "edit_alert_setting",
            className: "uitext"
          }), " 창을 확인하세요."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "url-event-mod.png",
          desc: "url 이벤트 설정 창"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "status",
            className: "uitext"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "elapsed",
            className: "uitext"
          }), " 등 이벤트 규칙은 모니터링 지표와 조건식을 조합하여 설정합니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "상태 이벤트"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["상태 이벤트는 선택한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "status",
                className: "uitext"
              }), " 코드 옵션에 따라 이벤트가 발생합니다."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
              img: "alert_status.png",
              desc: "상태 이벤트"
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "경과 시간 이벤트"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["경과 시간 이벤트는 실시간 수집 중인 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "elapsed",
                className: "uitext"
              }), " 값이 사용자가 입력한 임계치와 조건문에 해당하는 경우 이벤트가 발생합니다."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
              img: "alert_elapsed.png",
              desc: "경과 시간 이벤트"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "info",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "알림 메시지란?"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["해당 규칙에서 이벤트가 발생하는 경우 표시할 제목을 말합니다. 개별 이벤트 규칙에 알림 메시지를 설정할 수 있습니다. 설정을 적용하지 않는 경우 기본 표시되는 알림 메시지는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "상태 코드"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "경과 시간"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "URL: 상세 이유"
        }), "입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["경고 알림과 관련해 모니터링 플랫폼별 지원되는 이벤트 종류를 확인하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "../support-env#support-notice",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "수정한 URL이 목록에 반영되기까지 약 1분의 시간이 소요됩니다."
      })
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

/***/ 63582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZWRpdDwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OC4wMDAwMDAsIC0xMzk1LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iZWRpdG9yLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDEzNTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtZWRpdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguMDAwMDAwLCA0NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLDE4IEwyMCwyMCBMMCwyMCBMMCwxOCBMMjAsMTggWiBNMTIuOTM5MzM5OCwxIEwxNy45MzMyMTA4LDYuMDA2NDA3NzggTDE3LjkwMSw2LjAzOCBMMTcuOTAzNzA4NSw2LjA0IEw4LjAwNDIxMzU2LDE1LjkzOTQ5NDkgTDgsMTUuOTM1IEw4LDE1Ljk0IEwzLDE1Ljk0IEwzLDEwLjk0IEwzLjAwNSwxMC45NCBMMywxMC45MzU1MzM5IEwxMi44OTk0OTQ5LDEuMDM2MDM4OTcgTDEyLjkwMSwxLjAzOCBMMTIuOTM5MzM5OCwxIFogTTEyLjkzNSwzLjgyOCBMNSwxMS43NjMgTDUsMTMuOTQgTDcuMTc1LDEzLjk0IEwxNS4xMDgsNi4wMDYgTDEyLjkzNSwzLjgyOCBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

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