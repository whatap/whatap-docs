"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["55586"], {
"86755": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["수집한 데이터를 조회하려면 홈 화면에서 프로젝트를 선택한 다음 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "사이트 맵"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "메트릭스 조회"
        })
      }), "를 선택하세요."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      children: ["예를 들어 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        children: props.category
      }), "라는 이름의 카테고리를 선택하고 관련 지표를 조회하면 다음과 같이 카테고리에 해당하는 태그(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Tags"
      }), ")와 필드(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Fields"
      }), ") 항목을 확인할 수 있습니다."]
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



}),
"94863": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "메트릭스 데이터 조회 및 시각화",
  "id": "메트릭스-데이터-조회-및-시각화",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "메트릭스-데이터-조회-및-시각화",
      children: "메트릭스 데이터 조회 및 시각화"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭은 사용자가 지정한 조건에 따라 수집한 원본 데이터 목록과 편의성을 위해 다양하게 시각화한 차트를 다음과 같이 제공합니다. 메트릭스의 원본 데이터를 조회할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "tag_count",
        className: "uitext"
      }), ", 시각화한 차트를 통해 메트릭스 데이터를 조회할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "tag_count_chart",
        className: "uitext"
      }), ", AI가 학습한 메트릭스 지표의 패턴과 비교해 예상 패턴을 벗어난 이상을 탐지할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "tag_count_anomaly_detection",
        className: "uitext"
      }), " 메뉴를 확인해 보세요."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "metrics-views.png",
      desc: "메트릭스 뷰",
      className: "noneborder"
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
"46695": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
}];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "메트릭스란",
      children: "메트릭스란?"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭은 모니터링 대상으로부터 데이터를 수집해서 사용자에게 제공합니다. 에이전트로부터 수집되는 데이터를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "메트릭스"
      }), "라고 부릅니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "metrics-overview.png",
      desc: ""
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "메트릭스"
      }), "는 다음의 정보들로 구성되어 있습니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Category"
          })
        }), ": 관련된 지표들을 묶는 단위"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Tags"
          })
        }), ": 수집 대상을 구분할 수 있는 고유 정보를 포함하는 데이터"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Fields"
          })
        }), ": 에이전트로부터 수집된 지표"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Time"
          })
        }), ": 메트릭스가 수집된 시간"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Oid"
          })
        }), ": 메트릭스를 수집한 에이전트의 고유 번호"]
      }), "\n"]
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
"90323": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_mysql_metrics_intro_mdx_995_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-mysql-metrics-intro-mdx-995.json
var site_docs_mysql_metrics_intro_mdx_995_namespaceObject = JSON.parse('{"id":"mysql/metrics-intro","title":"메트릭스","description":"데이터베이스 모니터링 분석을 위한 메트릭스 메뉴에 대해 알아봅니다.","source":"@site/docs/mysql/metrics-intro.mdx","sourceDirName":"mysql","slug":"/mysql/metrics-intro","permalink":"/mysql/metrics-intro","draft":false,"unlisted":false,"editUrl":"undefined/docs/mysql/metrics-intro.mdx","tags":[],"version":"current","frontMatter":{"id":"metrics-intro","title":"메트릭스","description":"데이터베이스 모니터링 분석을 위한 메트릭스 메뉴에 대해 알아봅니다.","keywords":["MySQL","메트릭스","데이터베이스","데이터베이스 모니터링"],"isTranslationMissing":false},"sidebar":"mysqlSidebar","previous":{"title":"데이터베이스 파라미터","permalink":"/mysql/analysis-databaseparameter"},"next":{"title":"MySQL 지표","permalink":"/mysql/metrics-data-list"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./src/components/Variable.js
var Variable = __webpack_require__("22403");
// EXTERNAL MODULE: ./docs/common-items/_import_metrics-intro-exam.mdx
var _import_metrics_intro_exam = __webpack_require__("86755");
// EXTERNAL MODULE: ./docs/common-items/_metrics-intro.desc.mdx
var _metrics_intro_desc = __webpack_require__("46695");
// EXTERNAL MODULE: ./docs/common-items/_metrics-intro-data-search-desc.mdx
var _metrics_intro_data_search_desc = __webpack_require__("94863");
;// CONCATENATED MODULE: ./docs/mysql/metrics-intro.mdx


const frontMatter = {
	id: 'metrics-intro',
	title: '메트릭스',
	description: '데이터베이스 모니터링 분석을 위한 메트릭스 메뉴에 대해 알아봅니다.',
	keywords: [
		'MySQL',
		'메트릭스',
		'데이터베이스',
		'데이터베이스 모니터링'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*개요*/
/*메트릭스 데이터 조회 및 시각화*/






const toc = [..._metrics_intro_desc/* toc */.d$, ..._import_metrics_intro_exam/* toc */.d$, ..._metrics_intro_data_search_desc/* toc */.d$];
function _createMdxContent(props) {
  const {ProdImg} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", (0,jsx_runtime.jsx)(_metrics_intro_desc/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_import_metrics_intro_exam/* default */.ZP, {
      category: "db_mysql_counter"
    }), "\n", (0,jsx_runtime.jsx)(ProdImg, {
      img: "metrics-example-00.png",
      desc: ""
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_metrics_intro_data_search_desc/* default */.ZP, {})]
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
"22403": (function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


function Status(param) {
    let { name } = param;
    return /*#__PURE__*/ _jsx("code", {
        children: name
    });
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