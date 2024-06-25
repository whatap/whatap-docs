"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[68873],{

/***/ 50226:
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
	id: 'url-error-type',
	title: '에러 유형',
	description: '와탭 URL 모니터링 적용 시 발생할 수 있는 에러 유형과 그 유형에 따른 설정 방법을 안내합니다.',
	tags: [
		'URL',
		'설치하기',
		'에러 유형'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "url/url-error-type",
  "title": "에러 유형",
  "description": "와탭 URL 모니터링 적용 시 발생할 수 있는 에러 유형과 그 유형에 따른 설정 방법을 안내합니다.",
  "source": "@site/docs/url/url-error-type.mdx",
  "sourceDirName": "url",
  "slug": "/url/url-error-type",
  "permalink": "/whatap-docs/url/url-error-type",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/url/url-error-type.mdx",
  "tags": [
    {
      "inline": true,
      "label": "URL",
      "permalink": "/whatap-docs/tags/url"
    },
    {
      "inline": true,
      "label": "설치하기",
      "permalink": "/whatap-docs/tags/설치하기"
    },
    {
      "inline": true,
      "label": "에러 유형",
      "permalink": "/whatap-docs/tags/에러-유형"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "url-error-type",
    "title": "에러 유형",
    "description": "와탭 URL 모니터링 적용 시 발생할 수 있는 에러 유형과 그 유형에 따른 설정 방법을 안내합니다.",
    "tags": [
      "URL",
      "설치하기",
      "에러 유형"
    ]
  },
  "sidebar": "urlSidebar",
  "previous": {
    "title": "HTTP 상태 코드 유형",
    "permalink": "/whatap-docs/url/url-http-status"
  }
};
const assets = {

};



const toc = [{
  "value": "Invalid URL",
  "id": "invalid-url",
  "level": 2
}, {
  "value": "Unknown Host or URL",
  "id": "unknown-host-or-url",
  "level": 2
}, {
  "value": "Connect Time Out",
  "id": "connect-time-out",
  "level": 2
}, {
  "value": "Read Time Out",
  "id": "read-time-out",
  "level": 2
}, {
  "value": "Unexpected end of file from server",
  "id": "unexpected-end-of-file-from-server",
  "level": 2
}, {
  "value": "Connection Refused",
  "id": "connection-refused",
  "level": 2
}, {
  "value": "No route to host",
  "id": "no-route-to-host",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "와탭 URL 모니터링 적용 시 발생할 수 있는 에러 유형과 그 유형에 따른 설정 방법을 안내합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "URL 모니터링 화면에 나타나는 차트 영역을 드래그하면 해당 시간대에 URL 호출 시 취득한 결과 데이터를 화면 하단에 표시합니다. 데이터의 상세 원인에 표시된 메세지에 따른 조치 방법을 안내합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "url-error-type.png",
      desc: "URL 모니터링 에러 유형"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "invalid-url",
        children: "Invalid URL"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "잘못된 URL을 입력하는 경우 발생하는 메시지입니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "unknown-host-or-url",
        children: "Unknown Host or URL"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "해당 호스트 또는 URL을 찾을 수 없는 경우 발생하는 메시지입니다. 프로토콜을 올바르게 입력하였는지 또는 올바른 URL 형식 및 호스트 주소를 입력하였는지 확인하세요."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "connect-time-out",
        children: "Connect Time Out"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "잘못된 URL에 대한 연결 시간이 초과되어 접속할 수 없을 때 발생하는 메시지입니다. 서버에 연결을 시도하는데 최대 소요 시간 5초 내에 연결 실패했을 경우 발생합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "read-time-out",
        children: "Read Time Out"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "읽기 작업이 지정된 시간 내에 완료되지 않았을 때 발생하는 메시지입니다. 서버로부터 데이터를 수신하는 동안 최대 소요 시간 10초 내에 응답이 없을 경우 발생합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "unexpected-end-of-file-from-server",
        children: "Unexpected end of file from server"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에이전트와 서버의 인코딩 값이 다른 경우 혹은 파라미터에 대한 인코딩 방식이 다른 경우 발생하는 메시지입니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "connection-refused",
        children: "Connection Refused"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "URL 호출을 위한 접속 자체가 차단된 경우 발생하는 메시지입니다. 에이전트로부터 호출이 불가능한 상황인 경우로 해당 URL, 또는 서버의 방화벽 확인이 필요합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "웹 브라우저에서 URL을 입력해 접속에 문제가 없는지 먼저 점검하세요. 입력 과정에서 오류가 발생할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "방화벽 및 빈번한 호출에 대한 IP 차단 내역을 확인해 모니터링 에이전트의 IP에 대하여 명시적으로 접근을 허용하세요."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "no-route-to-host",
        children: "No route to host"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "목적지에 도달하기 위한 경로가 존재하지 않는 경우 발생하는 메시지입니다. DNS로부터 정보를 찾을 수 없는 경우와 해당 URL에 대한 정보가 없거나 업데이트 되지 않은 경우 발생합니다. 다음 항목을 정확하게 입력했는지 확인하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "port 지정"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "입력 URL의 프로토콜"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "예, 'htts://'와 'https://' 를 잘못 입력한 경우"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
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