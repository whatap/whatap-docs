"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["14171"], {
"69834": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "인스턴스 목록",
  "id": "side_instanceList",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "side_instanceList",
      children: "인스턴스 목록"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["에이전트를 설치한 데이터베이스 서버들의 목록을 확인할 수 있습니다. 주요 성능 지표 및 상태(Status)를 보여줄 수 있도록 구성되어 있습니다.\n성능 지표는 5초 간격으로 갱신하며 목록의 컬럼은 설정을 통해 원하는 컬럼들을 배치할 수 있습니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "instance-list",
        children: "다음 문서"
      }), "를 참조하세요."]
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
"41893": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "인스턴스 모니터링",
  "id": "side_dbMonitoring",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "side_dbMonitoring",
      children: "인스턴스 모니터링"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "데이터베이스 서버의 핵심 지표와 액티브 세션에 대한 상세 정보를 실시간으로 모니터링하고 문제가 될 수 있는 경고들을 확인할 수 있습니다. 관심이 있는 중요 지표들을 선택하여 전반적인 시스템 상황을 모니터링할 수 있습니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["실시간 모니터링은 5초 간격으로 성능 지표들을 모니터링합니다. 현재 진행 중인 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "active_sessions",
            className: "uitext"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "lock_tree",
            className: "uitext"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "process_info",
            className: "uitext"
          }), "를 확인할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "instance-monitoring",
        children: "다음 문서"
      }), "를 참조하세요."]
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
"53663": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    a: "a",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 에이전트 설치를 완료했다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://service.whatap.io",
        children: "와탭 모니터링 서비스"
      }), "에 로그인하세요. 초기 화면은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_projectList",
        className: "uitext"
      }), "입니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_projectList",
        className: "uitext"
      }), "에서 사용자가 생성한 프로젝트를 확인할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_projectList",
        className: "uitext"
      }), "에서 생성한 프로젝트를 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "instance-list",
        children: "인스턴스 목록"
      }), "으로 진입할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "와탭 데이터베이스 모니터링 서비스에서 대시보드는 프로젝트의 전체 현황을 한눈에 파악할 수 있는 기능입니다. 모니터링 중인 전체 자원 규모를 확인할 수 있고 실시간 대시보드에서 모니터링 대상 자원을 필터링할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "주요 성능 지표 및 상태를 보여줄 수 있도록 구성되어 있습니다. 성능 지표는 5초 간격으로 갱신됩니다."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "oracle-pro",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "현재 진행 중인 액티브 세션(Query 포함), 락 정보, 프로세스 정보를 확인할 수 있습니다. Public Cloud, Private Cloud 모두 적용하기 위해 쿼리 베이스의 모니터링으로 상품을 구성했습니다."
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "하나의 인스턴스 내에서 여러 DB를 필터링할 수 있습니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "수집한 데이터를 바탕으로 특정 하루 동안의 전체 추이를 분석할 수 있는 기능을 제공합니다. 특정 시점에 진행 중이던 세션을 파악해 느렸던 Query를 분석할 수 있습니다."
        }), "\n"]
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
"16196": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "멀티 인스턴스 모니터링",
  "id": "side_dbMonitoring",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "side_dbMonitoring",
      children: "멀티 인스턴스 모니터링"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_dbMonitoring",
        className: "uitext"
      }), " 메뉴에서는 하나의 인스턴스만 모니터링한다면, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_multiInstance",
        className: "uitext"
      }), "은 여러 인스턴스들의 지표를 한 화면에서 확인하고 비교할 수 있습니다. 여러가지 중요 인스턴스 지표를 그룹핑한 값을 통해 인스턴스들의 현황을 파악할 수 있습니다. 그래프 차트를 통해 인스턴스의 지표 값 추이와 어떤 인스턴스의 지표 값이 높은지 쉽게 확인할 수 있습니다. 가장 오래 지속하는 액티브 세션 정보를 제공합니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "multi-instance-monitoring",
        children: "다음 문서"
      }), "를 참조하세요."]
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
"34017": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "슬로우 쿼리",
  "id": "side_slowQueryLog",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "side_slowQueryLog",
      children: "슬로우 쿼리"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["SQL 별 응답 시간 분포를 제공합니다. 응답 분포를 통해 지연 SQL 현황을 직관적으로 확인하고 대상을 특정해 장애의 원인을 파악할 수 있습니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "slow-query",
        children: "다음 문서"
      }), "를 참조하세요."]
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
"1894": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_mysql_dashboard_intro_mdx_5cf_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-mysql-dashboard-intro-mdx-5cf.json
var site_docs_mysql_dashboard_intro_mdx_5cf_namespaceObject = JSON.parse('{"id":"mysql/dashboard-intro","title":"대시보드","description":"와탭 모니터링 대시보드는 프로젝트의 전체 현황을 한 눈에 파악하기 위한 기능을 제공합니다.","source":"@site/docs/mysql/dashboard-intro.mdx","sourceDirName":"mysql","slug":"/mysql/dashboard-intro","permalink":"/mysql/dashboard-intro","draft":false,"unlisted":false,"editUrl":"undefined/docs/mysql/dashboard-intro.mdx","tags":[],"version":"current","frontMatter":{"id":"dashboard-intro","title":"대시보드","description":"와탭 모니터링 대시보드는 프로젝트의 전체 현황을 한 눈에 파악하기 위한 기능을 제공합니다.","keywords":["MySQL","대시보드","인스턴스","데이터베이스 모니터링"],"isTranslationMissing":false},"sidebar":"mysqlSidebar","previous":{"title":"관리하기","permalink":"/mysql/agent-manage"},"next":{"title":"인스턴스 목록","permalink":"/mysql/instance-list"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_db-dashboard-intro.mdx
var _db_dashboard_intro = __webpack_require__("53663");
// EXTERNAL MODULE: ./docs/common-items/_db-dashboard-instance-list.mdx
var _db_dashboard_instance_list = __webpack_require__("69834");
// EXTERNAL MODULE: ./docs/common-items/_db-dashboard-instance-monitoring.mdx
var _db_dashboard_instance_monitoring = __webpack_require__("41893");
// EXTERNAL MODULE: ./docs/common-items/_db-dashboard-multi-instance-monitoring-v2.mdx
var _db_dashboard_multi_instance_monitoring_v2 = __webpack_require__("16196");
// EXTERNAL MODULE: ./docs/common-items/_db-dashboard-slowquery.mdx
var _db_dashboard_slowquery = __webpack_require__("34017");
;// CONCATENATED MODULE: ./docs/mysql/dashboard-intro.mdx


const frontMatter = {
	id: 'dashboard-intro',
	title: '대시보드',
	description: '와탭 모니터링 대시보드는 프로젝트의 전체 현황을 한 눈에 파악하기 위한 기능을 제공합니다.',
	keywords: [
		'MySQL',
		'대시보드',
		'인스턴스',
		'데이터베이스 모니터링'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};








const toc = [..._db_dashboard_intro/* toc */.d$, ..._db_dashboard_instance_list/* toc */.d$, ..._db_dashboard_instance_monitoring/* toc */.d$, ..._db_dashboard_multi_instance_monitoring_v2/* toc */.d$, ..._db_dashboard_slowquery/* toc */.d$];
function _createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_db_dashboard_intro/* default */.ZP, {}), "\n", "\n", (0,jsx_runtime.jsx)(_db_dashboard_instance_list/* default */.ZP, {}), "\n", "\n", (0,jsx_runtime.jsx)(_db_dashboard_instance_monitoring/* default */.ZP, {}), "\n", "\n", (0,jsx_runtime.jsx)(_db_dashboard_multi_instance_monitoring_v2/* default */.ZP, {}), "\n", "\n", (0,jsx_runtime.jsx)(_db_dashboard_slowquery/* default */.ZP, {})]
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