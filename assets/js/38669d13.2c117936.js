"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["30768"], {
"1788": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kubernetes_application_daily_stat_mdx_386_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kubernetes-application-daily-stat-mdx-386.json
var site_docs_kubernetes_application_daily_stat_mdx_386_namespaceObject = JSON.parse('{"id":"kubernetes/application-daily-stat","title":"일자별 애플리케이션 현황","description":"일자별 애플리케이션 상태를 확인합니다.","source":"@site/docs/kubernetes/application-daily-stat.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/application-daily-stat","permalink":"/kubernetes/application-daily-stat","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/application-daily-stat.mdx","tags":[],"version":"current","frontMatter":{"id":"application-daily-stat","title":"일자별 애플리케이션 현황","description":"일자별 애플리케이션 상태를 확인합니다.","keywords":["쿠버네티스","쿠버네티스 모니터링","애플리케이션","현황"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"히트맵 - 트레이스 분석","permalink":"/kubernetes/dashboard-hitmap-trace"},"next":{"title":"트랜잭션 검색","permalink":"/kubernetes/tx-profile"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/kubernetes/application-daily-stat.mdx


const frontMatter = {
	id: 'application-daily-stat',
	title: '일자별 애플리케이션 현황',
	description: '일자별 애플리케이션 상태를 확인합니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'애플리케이션',
		'현황'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    li: "li",
    p: "p",
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
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "애플리케이션"
        })
      }), " > ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "분석"
        })
      }), " > ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "일자별 애플리케이션 현황"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "whatap_kubernetes_application_daily_app_stat_1.png",
      desc: "일자별 애플리케이션 현황"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "일자별 애플리케이션 상태를 확인할 수 있습니다. 검색 조건은 시작일, 구분, 애플리케이션으로 구분 조건은 다음과 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "분류"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "설명"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "에이전트"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "컨테이너 내부에 설치된 애플리케이션 에이전트 이름"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "에이전트 종류"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["에이전트가 그룹화된 에이전트 종류 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "OKIND"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "에이전트 서버"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "에이전트가 실행 중인 쿠버네티스 노드 이름"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "제공하는 차트는 다음과 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "시간당 트랜잭션 수"
            })
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "시간당 사용자 수"
            })
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "시간당 HTTP 호출 건수"
            })
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "시간당 SQL 건수"
            })
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "시간당 SQL 패치 건수"
            })
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "응답시간"
            })
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "초당 트랜잭션"
            })
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "액티브 트랜잭션"
            })
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5분 합계 에러 건수"
            })
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "에러율"
            })
          })
        }), "\n"]
      }), "\n"]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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