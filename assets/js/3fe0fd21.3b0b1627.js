"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[98658],{

/***/ 72322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ instance_list_contentTitle),
  "default": () => (/* binding */ instance_list_MDXContent),
  frontMatter: () => (/* binding */ instance_list_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ instance_list_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_db-instance-list.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {ProdImg} = _components;
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "대시보드"
        })
      }), " > ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "인스턴스 목록"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(ProdImg, {
      img: "db-dashboard-instance-list.png",
      desc: "인스턴스 목록"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "에이전트를 설치한 데이터베이스 서버들의 목록을 확인할 수 있습니다. 주요 성능 지표 및 상태를 확인할 수 있습니다. 성능 지표는 5초 간격으로 갱신하며 목록의 컬럼은 설정을 통해 순서를 변경하거나 원하는 지표로 변경할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "상태"
          })
        }), " 컬럼에서 정상이 아닌 상태 아이콘을 클릭하면 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "이벤트"
          })
        }), " 창이 나타납니다. 해당 인스턴스에서 발생한 이벤트 내역을 확인할 수 있습니다."]
      })
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


// EXTERNAL MODULE: ./docs/common-items/_db-instance-list-set-name-guide.mdx
var _db_instance_list_set_name_guide = __webpack_require__(71514);
;// CONCATENATED MODULE: ./docs/altibase-v1/instance-list.mdx


const instance_list_frontMatter = {
	id: 'instance-list',
	title: '인스턴스 목록',
	description: '에이전트를 설치한 데이터베이스 서버들의 목록을 확인할 수 있습니다.',
	keywords: [
		'Altibase',
		'인스턴스',
		'대시보드',
		'데이터베이스 모니터링'
	],
	isTranslationMissing: false
};
const instance_list_contentTitle = undefined;
const metadata = {
  "id": "altibase-v1/instance-list",
  "title": "인스턴스 목록",
  "description": "에이전트를 설치한 데이터베이스 서버들의 목록을 확인할 수 있습니다.",
  "source": "@site/docs/altibase-v1/instance-list.mdx",
  "sourceDirName": "altibase-v1",
  "slug": "/altibase-v1/instance-list",
  "permalink": "/altibase-v1/instance-list",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/altibase-v1/instance-list.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "instance-list",
    "title": "인스턴스 목록",
    "description": "에이전트를 설치한 데이터베이스 서버들의 목록을 확인할 수 있습니다.",
    "keywords": [
      "Altibase",
      "인스턴스",
      "대시보드",
      "데이터베이스 모니터링"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "altibasev1Sidebar",
  "previous": {
    "title": "실시간 데이터베이스 성능 지표 확인",
    "permalink": "/altibase-v1/dashboard-intro"
  },
  "next": {
    "title": "인스턴스 모니터링",
    "permalink": "/altibase-v1/instance-monitoring"
  }
};
const assets = {

};





const instance_list_toc = [...toc, ..._db_instance_list_set_name_guide/* toc */.RM];
function instance_list_createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_db_instance_list_set_name_guide/* default */.Ay, {})]
  });
}
function instance_list_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(instance_list_createMdxContent, {
      ...props
    })
  }) : instance_list_createMdxContent(props);
}



/***/ }),

/***/ 71514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ MDXContent),
/* harmony export */   RM: () => (/* binding */ toc)
/* harmony export */ });
/* unused harmony exports frontMatter, contentTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "tip",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "instance_list",
        className: "uitext"
      }), "의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "server_name",
        className: "uitext"
      }), "을 변경하려면 에이전트 설정(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "whatap.conf"
      }), ")에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "object_name"
      }), " 옵션을 이용하세요. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "agent-dbx-settings#naming",
        children: "다음 문서"
      }), "를 참조하세요."]
    })
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