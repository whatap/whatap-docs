"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["72062"], {
"7579": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_java_java_2_2_4_mdx_33e_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-java-java-2-2-4-mdx-33e.json
var site_docs_release_notes_java_java_2_2_4_mdx_33e_namespaceObject = JSON.parse('{"id":"release-notes/java/java-2_2_4","title":"Java Agent v2.2.4","description":"2023년 5월 25일","source":"@site/docs/release-notes/java/java-2.2.4.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_4","permalink":"/release-notes/java/java-2_2_4","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.4.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_4","title":"Java Agent v2.2.4","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/java/java-2.2.4.mdx


const frontMatter = {
	id: 'java-2_2_4',
	title: 'Java Agent v2.2.4',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "신기능 <sup><Status>New</Status></sup>",
  "id": "신기능-new",
  "level": 2
}, {
  "value": "업데이트 <sup><Status>Change</Status></sup>",
  "id": "업데이트-change",
  "level": 2
}, {
  "value": "버그 수정 <sup><Status>Fixed</Status></sup>",
  "id": "버그-수정-fixed",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2023년 5월 25일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsxs)(_components.h2, {
        id: "신기능-new",
        children: ["신기능 ", (0,jsx_runtime.jsx)("sup", {
          children: (0,jsx_runtime.jsx)(Status, {
            children: "New"
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "트레이스 URL 이름 수정 기능 추가"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='whatap.conf'",
              children: "# 호출 메소드의 전체 경로, 와일드카드(*) 사용 가능\nhook_tx_name_patterns=ab.cd.ef.GH.ij\n\n# class, method, string, return 중 택1\nhook_tx_name_mode=method\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "예시, 특정 URL 호출 + 특정 method를 호출하는 방법"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "io.home.test.TestController.test1"
              }), "에 등록한 URL 호출 시 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "test100000()"
              }), " 메소드를 호출하는 경우: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "/api/100000+test1+test100000"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "트레이스 데이터 샘플링 기능 추가"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='whatap.conf'",
              children: "# 기본값\n# 트레이스 데이터 샘플링 수집 여부\ntrace_sampling_enabled=false\n\n# 트레이스 데이터 샘플링 수\n# 지정한 샘플링 수를 초과하는 데이터는 전송하지 않음\n# 5초마다 초기화\ntrace_sampling_tps=10000\n\n# 트레이스 데이터 전송 여부\ntrace_send_enabled=true\n\n# 트레이스 데이터 샘플링 디버그 옵션\ndebug_trace_samling=false\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "수집하는 SQL 데이터 무시 기능 추가"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='whatap.conf'",
              children: "# 등록한 SQL hash 값과 일치하는 SQL 문은 무시\nignore_sql_hash_set=\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "특정 서비스에서 특정 exception 무시 기능 추가"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='whatap.conf'",
              children: "# exception:service_url 등록\n# 쉼표(,)를 구분자로 사용\n# 예시, java.util.concurrent.TimeoutException:/api/test/timeout,org.springframework.web.util.NestedServletException:/api/posts/test/cexception\nignore_exception_tx_pattern=\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsxs)(_components.h2, {
        id: "업데이트-change",
        children: ["업데이트 ", (0,jsx_runtime.jsx)("sup", {
          children: (0,jsx_runtime.jsx)(Status, {
            children: "Change"
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Java 에이전트 내장 오픈 소스 플러그인의 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "webflux-5.x"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "webflux-6.x"
            }), " 업데이트"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "spring-r2dbc"
            }), "와 연계추적하기 위해 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "spring-webflux"
            }), " 플러그인 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Remote Call에 driver 정보 추가. 예시, RabbitMQ, AMQP, Kafka, …"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Http Call에 driver 정보 추가. 예시, ApacheClient, UrlCon, Webflux, …"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["LogSink의 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#RemoteTrace"
            }), " 카테고리 이름을 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#RemoteAccessStatus"
            }), "로 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "logsink on/off 기능을 재기동 없이 사용할 수 있도록 수정"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='whatap.conf'",
              children: "# 기본값\nhooklog_enabled=true\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "HttpURLConnection, WebLogic URLConnection을 최초 호출 시에도 추적할 수 있도록 기능 추가"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='whatap.conf'",
              children: "# 기본값\nhook_HttpURLConnection_startup_enabled=false\nhook_HttpURLConnection_weblogic_startup_enabled=false\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsxs)(_components.h2, {
        id: "버그-수정-fixed",
        children: ["버그 수정 ", (0,jsx_runtime.jsx)("sup", {
          children: (0,jsx_runtime.jsx)(Status, {
            children: "Fixed"
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SQL 파라미터 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "BigDecimal"
            }), " 수집 문제 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ECS"
            }), " 환경에서 존재하지 않는 키값 호출 시 에러 수정"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Webflux"
            }), " 사용 시 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "RemoteIP"
            }), " 기반 사용자 카운팅 버그 수정"]
          }), "\n"]
        }), "\n"]
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