"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["77183"], {
"4815": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "메트릭스란?",
  "id": "메트릭스란",
  "level": 2
}, {
  "value": "메트릭스 위젯 종류",
  "id": "메트릭스-위젯-종류",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "메트릭스란",
        children: "메트릭스란?"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["프로젝트에서 수집 중인 숫자로된 성능 지표를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "메트릭스"
        }), "라고 부릅니다. 메트릭스는 '카테고리'로 분류되며, 카테고리별 태그를 이용해 데이터를 탐색할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "카테고리"
          }), "(Category): 관련한 지표들을 묶는 단위"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "태그"
          }), "(Tags): 수집 대상을 구분할 수 있는 고유 정보가 포함된 데이터"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "필드"
          }), "(Fields): 에이전트로부터 수집한 지표"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["메트릭스에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "metrics-intro",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "메트릭스-위젯-종류",
        children: "메트릭스 위젯 종류"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "all_metrics",
          className: "uitext"
        }), "에서 추가할 수 있는 위젯 유형은 카테고리에 대한 태그와 필드 정보를 나열한 테이블 형식의 위젯, 단일 필드에 대한 추이 그래프로 나눕니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "테이블 위젯"
            }), ": 선택한 메트릭스 카테고리에 대한 데이터를 표 형식으로 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "테이블 위젯",
              src: (__webpack_require__(75634)/* ["default"] */.Z) + "",
              width: "2000",
              height: "528"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "시리즈 위젯"
            }), ": 선택한 메트릭스 카테고리의 선택 필드에 대한 데이터를 시리즈 차트 형식으로 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "시리즈 위젯",
              src: (__webpack_require__(66102)/* ["default"] */.Z) + "",
              width: "944",
              height: "608"
            })
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["메트릭스 위젯 설정에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "flexboard-widget-manage#changedata-metric-widget",
            children: "다음 문서"
          }), "를 참조하세요."]
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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



}),
"56259": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_mssql_v_1_flexboard_metric_widget_mdx_18f_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-mssql-v-1-flexboard-metric-widget-mdx-18f.json
var site_docs_mssql_v_1_flexboard_metric_widget_mdx_18f_namespaceObject = JSON.parse('{"id":"mssql-v1/flexboard-metric-widget","title":"메트릭스 위젯","description":"프로젝트의 성능 지표를 나타내는 메트릭스 데이터를 위젯 형태로 대시보드에 추가하는 방법을 안내합니다. 메트릭스는 카테고리로 분류되고, 태그를 이용해 데이터를 탐색할 수 있으며, 테이블 위젯과 시리즈 위젯 두 가지 유형으로 제공합니다.","source":"@site/docs/mssql-v1/flexboard-metric-widget.mdx","sourceDirName":"mssql-v1","slug":"/mssql-v1/flexboard-metric-widget","permalink":"/mssql-v1/flexboard-metric-widget","draft":false,"unlisted":false,"editUrl":"undefined/docs/mssql-v1/flexboard-metric-widget.mdx","tags":[],"version":"current","frontMatter":{"id":"flexboard-metric-widget","title":"메트릭스 위젯","description":"프로젝트의 성능 지표를 나타내는 메트릭스 데이터를 위젯 형태로 대시보드에 추가하는 방법을 안내합니다. 메트릭스는 카테고리로 분류되고, 태그를 이용해 데이터를 탐색할 수 있으며, 테이블 위젯과 시리즈 위젯 두 가지 유형으로 제공합니다.","keywords":["SQL Server","Flex 보드","메트릭스","위젯"],"isTranslationMissing":false},"sidebar":"mssqlV1Sidebar","previous":{"title":"Flex 보드 관리하기","permalink":"/mssql-v1/flexboard-manage"},"next":{"title":"위젯 관리하기","permalink":"/mssql-v1/flexboard-widget-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_flexboard-metric-widget.mdx
var _flexboard_metric_widget = __webpack_require__("4815");
;// CONCATENATED MODULE: ./docs/mssql-v1/flexboard-metric-widget.mdx


const frontMatter = {
	id: 'flexboard-metric-widget',
	title: '메트릭스 위젯',
	description: '프로젝트의 성능 지표를 나타내는 메트릭스 데이터를 위젯 형태로 대시보드에 추가하는 방법을 안내합니다. 메트릭스는 카테고리로 분류되고, 태그를 이용해 데이터를 탐색할 수 있으며, 테이블 위젯과 시리즈 위젯 두 가지 유형으로 제공합니다.',
	keywords: [
		'SQL Server',
		'Flex 보드',
		'메트릭스',
		'위젯'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._flexboard_metric_widget/* toc */.d$];
function _createMdxContent(props) {
  return (0,jsx_runtime.jsx)(_flexboard_metric_widget/* default */.ZP, {});
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



}),
"66102": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/metric-widget-series-8447e2ccaf09b818078c358628a72356.png");

}),
"75634": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/metric-widget-table-f7534c613ceaab178fb1f1480bb4eaf9.png");

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