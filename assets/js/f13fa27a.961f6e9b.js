"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["56028"], {
"58934": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cubrid_v_1_monitoring_intro_mdx_f13_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cubrid-v-1-monitoring-intro-mdx-f13.json
var site_docs_cubrid_v_1_monitoring_intro_mdx_f13_namespaceObject = JSON.parse('{"id":"cubrid-v1/monitoring-intro","title":"CUBRID V1 모니터링","description":"와탭 데이터베이스 모니터링 서비스(DBX)은 Query 기반으로 데이터를 수집하여 성능 모니터링 서비스를 제공합니다.","source":"@site/docs/cubrid-v1/monitoring-intro.mdx","sourceDirName":"cubrid-v1","slug":"/cubrid-v1/monitoring-intro","permalink":"/cubrid-v1/monitoring-intro","draft":false,"unlisted":false,"editUrl":"undefined/docs/cubrid-v1/monitoring-intro.mdx","tags":[],"version":"current","frontMatter":{"id":"monitoring-intro","title":"CUBRID V1 모니터링","description":"와탭 데이터베이스 모니터링 서비스(DBX)은 Query 기반으로 데이터를 수집하여 성능 모니터링 서비스를 제공합니다.","displayed_sidebar":"cubridV1Sidebar","hide_table_of_contents":false,"keywords":["CUBRID","데이터베이스 모니터링","데이터베이스","모니터링","DBX"],"isTranslationMissing":false},"sidebar":"cubridV1Sidebar","next":{"title":"지원 환경","permalink":"/cubrid-v1/monitoring-support"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/cubrid-v1/monitoring-intro.mdx


const frontMatter = {
	id: 'monitoring-intro',
	title: 'CUBRID V1 모니터링',
	description: '와탭 데이터베이스 모니터링 서비스(DBX)은 Query 기반으로 데이터를 수집하여 성능 모니터링 서비스를 제공합니다.',
	displayed_sidebar: 'cubridV1Sidebar',
	hide_table_of_contents: false,
	keywords: [
		'CUBRID',
		'데이터베이스 모니터링',
		'데이터베이스',
		'모니터링',
		'DBX'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "CUBRID 모니터링 특장점",
  "id": "cubrid-모니터링-특장점",
  "level": 2
}, {
  "value": "지원 기능",
  "id": "지원-기능",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "와탭 데이터베이스 모니터링 서비스(DBX)은 Query 기반으로 데이터를 수집하여 성능 모니터링 서비스를 제공합니다. 데이터베이스 성능 관리는 데이터베이스의 성능을 실시간으로 감시하고 문제점을 진단, 분석합니다. 문제가 되는 SQL을 튜닝하고 적용하여 이슈가 해결되었는지 확인합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "cubrid-모니터링-특장점",
        children: "CUBRID 모니터링 특장점"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "실시간 DB 모니터링"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "실시간으로 DB 성능지표와 수행 중인 SQL을 수집하여 문제점의 분석과 성능 최적화에 필요한 데이터를 공유하고 데이터 기반의 의사결정을 가능하게 합니다. Active Session, Lock Tree 등 장애의 주요 관심사들로 된 대시보드를 제공하고 알림 발생 내용을 실시간으로 감지할 수 있습니다. 특정 SQL의 Plan 정보 확인을 통해 SQL 튜닝의 단서를 제공합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "특정 시점 분석"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "지표의 단기 추이, 장기 추이, 지표 비교 기능을 제공하여 지나간 시점의 문제 상황을 분석할 수 있습니다. SQL, Lock Tree, Parallel Query, 테이블스페이스 증감 등의 이력 정보 확인할 수 있습니다.  데이터베이스 파라미터 변경 내역을 추적합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "대용량 규모에도 효율적인 구조"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "다수의 DB 서버 관리 시에도 단일화된 성능 데이터 수집 및 효율적인 데이터 저장 구조를 통해 최적의 분석환경을 제공합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "통합 모니터링"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "애플리케이션, 서버, 데이터베이스 모니터링 제품을 모두 설치하면 서비스 이상 현상 파악 시 연계된 뷰를 통해 장애 발생 시 빠른 원인 분석이 가능합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "WhaTap SaaS"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "다양한 데이터베이스 제품을 선택할 수 있고 월구독 방식으로 사용 기간을 자유롭게 정할 수 있습니다. (설치형으로도 제공 가능)"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "지원-기능",
        children: "지원 기능"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음은 이용 가능한 기능들입니다."
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "카테고리"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "데이터베이스"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "CUBRID"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "4",
              children: "Monitoring"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Instance List"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Instancs Monitoring"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Multi DataBase (tenant)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-no",
                children: "❌"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Slow Query"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-no",
                children: "❌"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "6",
              children: "Analysis"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Trends"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Trends Compare"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Lock Tree"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Parallel Query Tree"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-no",
                children: "❌"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Dead Lock"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-no",
                children: "❌"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "DB Parameter"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "4",
              children: "Statistics"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "SQL Stat"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Table Size"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Database(TableSpace) Size"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "SGA Size"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-no",
                children: "❌"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Report"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Daily / Weekly / Monthly Report"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "4",
              children: "Event"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Event List"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Event Stat"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Event Setting"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Notification"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Management"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Agent Setup"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Agent List"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Project Management"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,jsx_runtime.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            })]
          })]
        })]
      })]
    })]
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