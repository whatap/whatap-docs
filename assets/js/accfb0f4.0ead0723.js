"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["24446"], {
"67002": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_java_agent_usage_mdx_acc_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-java-agent-usage-mdx-acc.json
var site_docs_java_agent_usage_mdx_acc_namespaceObject = JSON.parse('{"id":"java/agent-usage","title":"CPU/메모리/디스크 사용량 수집","description":"자바(Java) 에이전트가 CPU, 메모리, 디스크 사용량을 수집하는 방법을 안내합니다. 자바(Java)의 JMX 라이브러리를 기본적으로 활용하며, 필요에 따라 Linux의 proc 디렉터리나 oshi, sigar 라이브러리를 통한 성능 지표 수집 방법을 확인할 수 있습니다.","source":"@site/docs/java/agent-usage.mdx","sourceDirName":"java","slug":"/java/agent-usage","permalink":"/java/agent-usage","draft":false,"unlisted":false,"editUrl":"undefined/docs/java/agent-usage.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-usage","title":"CPU/메모리/디스크 사용량 수집","description":"자바(Java) 에이전트가 CPU, 메모리, 디스크 사용량을 수집하는 방법을 안내합니다. 자바(Java)의 JMX 라이브러리를 기본적으로 활용하며, 필요에 따라 Linux의 proc 디렉터리나 oshi, sigar 라이브러리를 통한 성능 지표 수집 방법을 확인할 수 있습니다.","keywords":["Java","애플리케이션","에이전트"],"isTranslationMissing":false},"sidebar":"javaSidebar","previous":{"title":"에이전트 기능 제어","permalink":"/java/agent-control-function"},"next":{"title":"에이전트 통신 설정","permalink":"/java/agent-network"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/java/agent-usage.mdx


const frontMatter = {
	id: 'agent-usage',
	title: 'CPU/메모리/디스크 사용량 수집',
	description: '자바(Java) 에이전트가 CPU, 메모리, 디스크 사용량을 수집하는 방법을 안내합니다. 자바(Java)의 JMX 라이브러리를 기본적으로 활용하며, 필요에 따라 Linux의 proc 디렉터리나 oshi, sigar 라이브러리를 통한 성능 지표 수집 방법을 확인할 수 있습니다.',
	keywords: [
		'Java',
		'애플리케이션',
		'에이전트'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Java 에이전트가 CPU, 메모리, 디스크 사용량을 수집하는 방법을 안내합니다. 자바(Java)의 JMX 라이브러리를 기본적으로 활용하며, 필요에 따라 Linux의 proc 디렉터리나 oshi, sigar 라이브러리를 통한 성능 지표 수집 방법을 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "linux_proc_stat_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["CPU, 메모리, 디스크 사용량을 Linux의 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "proc"
          }), " 디렉터리에서 수집할지 여부를 설정합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "oshi_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "Java Agent v2.1.0 or later"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "CPU, 메모리, 디스크 사용량을 측정할 때 oshi 라이브러리 사용 여부를 설정합니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Java 8 이상의 환경에서 사용할 것을 권장합니다."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "oshi_netstat_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "Java Agent v2.2.31 or later"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "netstat 지표 수집 여부를 설정합니다. Maximum Transmission Unit(MTU) 지표가 추가됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "sigar_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["sigar 라이브러리를 통한 OS 정보 수집을 활성화합니다. sigar 라이브러리를 통해 5초 단위로 수집하는 CPU, Memory, Disk 등의 OS 자원 데이터가 해당합니다. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "enabled"
          }), " 옵션이 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          }), "인 경우 비활성화합니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["whatap.agent.2.1.0 버전 미만에서 기본값은 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "true"
                }), "이며, whatap.agent.2.1.0 버전 이상에서는 기본값이 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "false"
                }), "입니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Java 8 미만 또는 Java 1.6 이하 버전 환경에서는 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "sigar_enabled=true"
                }), " 옵션을 추가하여 sigar 라이브러리를 활성화하고 성능 지표를 수집할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["애플리케이션 환경에 따라 CPU 지표가 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "-1"
                }), " 표시되는 현상이 있을 수 있습니다. 와탭에서 제공하는 권고 사항을 확인하고 현상을 해결할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "agent-troubleshooting#cpumetrics",
                  children: "다음 문서"
                }), "를 참조하세요."]
              }), "\n"]
            }), "\n"]
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