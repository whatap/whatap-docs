"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[17044],{

/***/ 62679:
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
	id: 'set-real-user-id',
	title: '실제 사용자 ID 설정',
	description: '브라우저 모니터링에서 실제 사용자의 로그인 ID나 이메일 등으로 사용자 ID를 설정해 데이터를 수집할 수 있습니다.',
	tags: [
		'브라우저 모니터링',
		'에이전트',
		'실제 사용자 ID 설정'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "browser/set-real-user-id",
  "title": "실제 사용자 ID 설정",
  "description": "브라우저 모니터링에서 실제 사용자의 로그인 ID나 이메일 등으로 사용자 ID를 설정해 데이터를 수집할 수 있습니다.",
  "source": "@site/docs/browser/set-real-user-id.mdx",
  "sourceDirName": "browser",
  "slug": "/browser/set-real-user-id",
  "permalink": "/browser/set-real-user-id",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/browser/set-real-user-id.mdx",
  "tags": [
    {
      "inline": true,
      "label": "브라우저 모니터링",
      "permalink": "/tags/브라우저-모니터링"
    },
    {
      "inline": true,
      "label": "에이전트",
      "permalink": "/tags/에이전트"
    },
    {
      "inline": true,
      "label": "실제 사용자 ID 설정",
      "permalink": "/tags/실제-사용자-id-설정"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "set-real-user-id",
    "title": "실제 사용자 ID 설정",
    "description": "브라우저 모니터링에서 실제 사용자의 로그인 ID나 이메일 등으로 사용자 ID를 설정해 데이터를 수집할 수 있습니다.",
    "tags": [
      "브라우저 모니터링",
      "에이전트",
      "실제 사용자 ID 설정"
    ]
  },
  "sidebar": "rumsSidebar",
  "previous": {
    "title": "사용자 정의 이벤트 수집",
    "permalink": "/browser/collect-custom-events"
  },
  "next": {
    "title": "시작하기 전에",
    "permalink": "/browser/before-starting"
  }
};
const assets = {

};



const toc = [{
  "value": "실제 사용자 ID 설정하기",
  "id": "실제-사용자-id-설정하기",
  "level": 2
}, {
  "value": "인터페이스",
  "id": "인터페이스",
  "level": 3
}, {
  "value": "적용 예시",
  "id": "적용-예시",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "브라우저 모니터링은 기본적으로 사용자 ID를 난수로 발급하여 관리합니다. 하지만 실제 사용자의 로그인 ID나 이메일 등으로 사용자 ID를 설정해 데이터를 수집할 수 있는 기능을 추가로 제공합니다. 실제 사용자 ID를 설정하면, 실제 로그인 ID 또는 이메일 기반으로 사용자 세션 성능과 이벤트 정보를 확인하고 브라우저 에러 정보를 확인할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "브라우저 모니터링에서 사용자를 식별함으로써 개인화된 분석 및 정확한 사용자 경험 분석, 마케팅 전략 수립, 보안 강화 등의 업무에 활용할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "실제-사용자-id-설정하기",
        children: "실제 사용자 ID 설정하기"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "인터페이스",
        children: "인터페이스"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["브라우저 에이전트에서 제공하는 인터페이스는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "window"
        }), "의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WhatapBrowserAgent"
        }), " 객체에 포함되어 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WhatapBrowserAgent"
        }), "에서 제공하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "setUserID"
        }), "의 인터페이스를 참조하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-tsx",
          metastring: "title='Typescript'",
          children: "setUserID: (userID: string) => void;\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "적용-예시",
        children: "적용 예시"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "브라우저 에이전트가 제공하는 인터페이스를 예시 코드처럼 적용할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-tsx",
          metastring: "title='Typescript'",
          children: "const loginComplete = (data) => {\r\n\tif (data) {\r\n\t\t/*\r\n\t\t* @description 와탭 브라우저 에이전트 사용자 아이디 설정\r\n\t\t*/\r\n\t\twindow?.WhatapBrowserAgent?.setUserID?.(data?.email);\r\n\t}\r\n};\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "loginComplete"
        }), " 함수가 동작할 때 실제 사용자의 이메일이 브라우저 모니터링에서 사용할 사용자 ID로 설정됩니다."]
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