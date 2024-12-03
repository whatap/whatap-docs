"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["66779"], {
"24664": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_nodejs_agent_log_mdx_2ee_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-nodejs-agent-log-mdx-2ee.json
var site_docs_nodejs_agent_log_mdx_2ee_namespaceObject = JSON.parse('{"id":"nodejs/agent-log","title":"에이전트 로그 설정","description":"에이전트 로그의 옵션을 설정할 수 있습니다.","source":"@site/docs/nodejs/agent-log.mdx","sourceDirName":"nodejs","slug":"/nodejs/agent-log","permalink":"/nodejs/agent-log","draft":false,"unlisted":false,"editUrl":"undefined/docs/nodejs/agent-log.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-log","title":"에이전트 로그 설정","description":"에이전트 로그의 옵션을 설정할 수 있습니다.","keywords":["Node.js","로그"],"isTranslationMissing":false},"sidebar":"nodejsSidebar","previous":{"title":"에이전트 통신 설정","permalink":"/nodejs/agent-network"},"next":{"title":"트랜잭션","permalink":"/nodejs/agent-transaction"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/nodejs/agent-log.mdx


const frontMatter = {
	id: 'agent-log',
	title: '에이전트 로그 설정',
	description: '에이전트 로그의 옵션을 설정할 수 있습니다.',
	keywords: [
		'Node.js',
		'로그'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "로그 관리 옵션",
  "id": "로그-관리-옵션",
  "level": 2
}, {
  "value": "로그싱크(LogSink) 설정",
  "id": "로그싱크logsink-설정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "로그-관리-옵션",
        children: "로그 관리 옵션"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "애플리케이션 서버가 실행되면 모니터링 정보를 수집합니다. 수집한 정보는 로그 파일에 저장합니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "log_rotation_enabled"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Boolean"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["에이전트 로그 파일을 날짜 별로 저장하는 기능을 활성화합니다. 로그 파일명은 ", (0,jsx_runtime.jsxs)(_components.em, {
              children: ["whatap-", (0,jsx_runtime.jsx)(_components.code, {
                children: "yyyymmdd"
              }), ".log"]
            }), " 형태로 저장합니다. 값이 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), "이면 로그 파일명은 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.log"
            }), " 형태로 저장합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "log_keep_days"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Int"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "7"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["로그 파일 보관 기간을 설정합니다. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "log_rotation_enabled"
            }), " 옵션의 값이 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), "인 경우에만 동작합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "log_datasource_lookup_enabled"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Boolean"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "InitialContext Lookup 시 DataSource인 경우 로그를 기록하는 기능을 활성화합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "log_root"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "String"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["에이전트 로그 파일의 경로를 설정할 수 있습니다. 설정된 경로 하위에 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "logs"
            }), " 폴더를 생성하며 해당 폴더에 whatap 로그 파일이 생성됩니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "다음 예제와 같이 에이전트 옵션을 설정하면 whatap 로그 파일의 생성 경로는 다음과 같습니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
            children: ["\n", (0,jsx_runtime.jsx)("em", {
              children: "/Users/sample_user/workspace/nodejs_application/whatap_logs/logs/"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title=\"whatap.conf\"",
              children: "log_root=/Users/sample_user/workspace/nodejs_application/whatap_logs/\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "로그싱크logsink-설정",
        children: "로그싱크(LogSink) 설정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "../release-notes/nodejs/nodejs-0_5_1",
          children: "Node.js 에이전트 0.5.1 버전"
        }), " 이상부터는 애플리케이션 서버를 통합 모니터링하는 로그싱크(LogSink) 기능을 제공합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "logsink_enabled"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Boolean"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "로그 모니터링 활성화 여부를 설정합니다."
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["로그 모니터링 활성화 방법에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "../log/log-nodejs",
                    children: "다음 문서"
                  }), "를 참조하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["로그 모니터링에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "../log/learn-main-menu",
                    children: "다음 문서"
                  }), "를 참조하세요."]
                }), "\n"]
              }), "\n"]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "logsink_trace_txid_enabled"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Boolean"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["로그에 트랜잭션 ID를 삽입하여 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL06209",
              className: "uitext"
            }), "의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL06128",
              className: "uitext"
            }), " 탭 노출 여부를 설정합니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06209",
                className: "uitext"
              }), "의 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06128",
                className: "uitext"
              }), " 탭에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "dashboard-hitmap-trace#anlaysis-trace-transaction-log",
                children: "다음 문서"
              }), "를 참조하세요."]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "logsink_limit_content_enabled"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Boolean"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "로그 메시지의 최대 크기 제한 여부를 설정합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "logsink_limit_content_length"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "Number"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "10,000"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["로그 메시지의 최대 길이를 설정합니다. 이 옵션은 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "logsink_limit_content_enabled"
            }), " 옵션의 값이 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), "로 설정되었을 때만 적용됩니다."]
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