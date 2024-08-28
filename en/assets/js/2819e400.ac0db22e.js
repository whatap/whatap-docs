"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[75736],{

/***/ 71540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ set_notice_contentTitle),
  "default": () => (/* binding */ set_notice_MDXContent),
  frontMatter: () => (/* binding */ set_notice_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ set_notice_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_intro-alarm.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "이벤트 조건을 설정하고 이메일, SMS, 메신저, App Push 등 다양한 경로로 알림을 수신할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "에이전트와 수집 서버의 통신 두절 및 자원 사용률, 액티브 트랜잭션, 에러, 응답 지연, 응답 분포 이상에 대한 알림 설정이 가능합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "어려운 조건의 알림 설정은 태그 카운트 알림 기능을 통해 제공합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "머신 러닝 기반 AI 알림 설정을 통해 히트맵 패턴을 감지해 알림 기능을 제공합니다. AI 모듈이 애플리케이션 실행 분포 패턴을 판단해 알림을 보냅니다. 복잡한 조건 없이 이슈 상황을 빠르고 정확하게 인지할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_eventSetting",
            className: "uitext"
          }), " 메뉴를 통해 임계치 기반 알림 조건 및 수신 설정을 할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_eventNoti",
            className: "uitext"
          }), " 메뉴에서는 개인별 알림 수신 채널 및 시간대를 설정할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_eventHistory",
            className: "uitext"
          }), " 메뉴에서는 알림 발생 기록을 조회할 수 있습니다."]
        }), "\n"]
      }), "\n"]
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


;// CONCATENATED MODULE: ./docs/common-items/_note-common-set-notice.mdx


const _note_common_set_notice_frontMatter = {};
const _note_common_set_notice_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _note_common_set_notice_toc = [];
function _note_common_set_notice_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsx)(_components.admonition, {
    type: "note",
    children: (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["다른 계정에 대한 알림을 설정하려면 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "수정"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "알림 설정"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "멤버 관리"
        }), " 권한 중 하나가 있어야 합니다."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["이벤트를 추가하거나 설정하려면 알림 설정 권한이 있어야합니다. 권한 체계에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../project/project-structure",
          children: "다음 문서"
        }), "를 참조하세요."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["경고 알림과 관련해 모니터링 플랫폼별 지원되는 이벤트 종류를 확인하려면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../support-env#support-notice",
          children: "다음 문서"
        }), "를 참조하세요."]
      }), "\n"]
    })
  });
}
function _note_common_set_notice_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_note_common_set_notice_createMdxContent, {
      ...props
    })
  }) : _note_common_set_notice_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/altibase-v1/set-notice.mdx


const set_notice_frontMatter = {
	id: 'set-notice',
	title: '알림 설정하기',
	description: '이벤트 조건을 설정하고 다양한 형태로 알림을 받을 수 있습니다.',
	keywords: [
		'Altibase',
		'데이터베이스',
		'데이터베이스 모니터링',
		'알림'
	],
	isTranslationMissing: true
};
const set_notice_contentTitle = undefined;
const metadata = {
  "id": "altibase-v1/set-notice",
  "title": "알림 설정하기",
  "description": "이벤트 조건을 설정하고 다양한 형태로 알림을 받을 수 있습니다.",
  "source": "@site/docs/altibase-v1/set-notice.mdx",
  "sourceDirName": "altibase-v1",
  "slug": "/altibase-v1/set-notice",
  "permalink": "/en/altibase-v1/set-notice",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/altibase-v1/set-notice.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "set-notice",
    "title": "알림 설정하기",
    "description": "이벤트 조건을 설정하고 다양한 형태로 알림을 받을 수 있습니다.",
    "keywords": [
      "Altibase",
      "데이터베이스",
      "데이터베이스 모니터링",
      "알림"
    ],
    "isTranslationMissing": true
  },
  "sidebar": "altibasev1Sidebar",
  "previous": {
    "title": "통합 보고서",
    "permalink": "/en/altibase-v1/integrated-report"
  },
  "next": {
    "title": "데이터베이스 경고 알림",
    "permalink": "/en/altibase-v1/warning-notice"
  }
};
const assets = {

};





const set_notice_toc = [...toc, ..._note_common_set_notice_toc];
function set_notice_createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_note_common_set_notice_MDXContent, {})]
  });
}
function set_notice_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(set_notice_createMdxContent, {
      ...props
    })
  }) : set_notice_createMdxContent(props);
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