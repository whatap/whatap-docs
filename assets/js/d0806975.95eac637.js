"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["54684"], {
"8227": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_java_async_tracking_mdx_d08_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-java-async-tracking-mdx-d08.json
var site_docs_java_async_tracking_mdx_d08_namespaceObject = JSON.parse('{"id":"java/async-tracking","title":"비동기 추적","description":"자바(Java) 에이전트 설정을 통해 비동기 애플리케이션 활동을 추적하는 방법을 안내합니다. CompletableFuture 메소드 수집 방법과 사용자 애플리케이션에 해당 메소드를 hooking하는 방식을 포함합니다. 설정 예시와 함께 whatap.conf 파일에 추가해야 할 옵션을 제공하여 비동기 호출의 성능 모니터링을 강화할 수 있도록 지원합니다.","source":"@site/docs/java/async-tracking.mdx","sourceDirName":"java","slug":"/java/async-tracking","permalink":"/java/async-tracking","draft":false,"unlisted":false,"editUrl":"undefined/docs/java/async-tracking.mdx","tags":[],"version":"current","frontMatter":{"id":"async-tracking","title":"비동기 추적","description":"자바(Java) 에이전트 설정을 통해 비동기 애플리케이션 활동을 추적하는 방법을 안내합니다. CompletableFuture 메소드 수집 방법과 사용자 애플리케이션에 해당 메소드를 hooking하는 방식을 포함합니다. 설정 예시와 함께 whatap.conf 파일에 추가해야 할 옵션을 제공하여 비동기 호출의 성능 모니터링을 강화할 수 있도록 지원합니다.","keywords":["Java","애플리케이션","에이전트","비동기 추적"],"isTranslationMissing":false},"sidebar":"javaSidebar","previous":{"title":"부가 기능","permalink":"/java/agent-additional-option"},"next":{"title":"에이전트 업데이트","permalink":"/java/update-agent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/java/async-tracking.mdx


const frontMatter = {
	id: 'async-tracking',
	title: '비동기 추적',
	description: '자바(Java) 에이전트 설정을 통해 비동기 애플리케이션 활동을 추적하는 방법을 안내합니다. CompletableFuture 메소드 수집 방법과 사용자 애플리케이션에 해당 메소드를 hooking하는 방식을 포함합니다. 설정 예시와 함께 whatap.conf 파일에 추가해야 할 옵션을 제공하여 비동기 호출의 성능 모니터링을 강화할 수 있도록 지원합니다.',
	keywords: [
		'Java',
		'애플리케이션',
		'에이전트',
		'비동기 추적'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "CompletableFuture",
  "id": "completablefuture",
  "level": 2
}, {
  "value": "CompletableFuture 메서드 추가",
  "id": "completablefuture-메서드-추가",
  "level": 3
}, {
  "value": "에이전트 설정 추가",
  "id": "에이전트-설정-추가",
  "level": 3
}, {
  "value": "사용 예시",
  "id": "사용-예시",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["자바(Java) 에이전트 설정을 통해 비동기 애플리케이션 활동을 추적하는 방법을 안내합니다. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CompletableFuture"
      }), " 메소드 수집 방법과 사용자 애플리케이션에 해당 메소드를 hooking하는 방식을 포함합니다. 설정 예시와 함께 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "whatap.conf"
      }), " 파일에 추가해야 할 옵션을 제공하여 비동기 호출의 성능 모니터링을 강화할 수 있도록 지원합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "completablefuture",
        children: "CompletableFuture"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Java 에이전트 설정을 통해 CompletableFuture 메소드를 수집할 수 있는 방법을 안내합니다."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "completablefuture-메서드-추가",
        children: "CompletableFuture 메서드 추가"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "사용자의 Java 애플리케이션 프로젝트에 에이전트로 hooking할 CompletableFuture 메소드를 추가하세요."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["메서드 이름: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "trace"
            }), "로 통일"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ReturnType: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Supplier"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Consumer"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Runnable"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Future"
            })]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          children: "package io.home.test.util;\n\nimport java.util.concurrent.Future;\nimport java.util.function.Consumer;\nimport java.util.function.Supplier;\n\npublic class W {\n    public static <T> Supplier<T> trace(Supplier<T> f) {\n        return f;\n    }\n    public static <T> Consumer<T> trace(Consumer<T> f) {\n        return f;\n    }\n    public static <T> Runnable trace(Runnable f) {\n        return f;\n    }\n    public static <T> Future<T> trace(Future<T> f) {\n        return f;\n    }\n}\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "에이전트-설정-추가",
        children: "에이전트 설정 추가"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["에이전트 설정을 위해 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.conf"
        }), " 파일에 다음 옵션을 추가하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "hook_completablefuture_patterns=io.home.test.util.W.*\n"
        })
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Context가 있는 경우 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "trace"
              }), " 메소드를 추가해 트랜잭션을 연결하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Context가 없는 경우 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "hook_service_patterns"
              }), " 옵션으로 서비스를 시작해야 합니다."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "사용-예시",
        children: "사용 예시"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "원본"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              metastring: "showLineNumbers",
              children: "public CompletableFuture<String> serviceATimeout() {\n    return CompletableFuture.supplyAsync(() -> {\n        RestTemplate restTemplate = new RestTemplate();\n        return restTemplate.getForObject(\"http://localhost:8081/api/serviceB/timeout\", String.class);\n    });\n}\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "io.home.test.util.W.trace()"
            }), " 적용"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-java",
              metastring: "showLineNumbers {3}",
              children: "// io.home.test.util.W.trace() 적용\npublic CompletableFuture<String> serviceATimeout() {\n    return CompletableFuture.supplyAsync(W.trace(() -> {\n        RestTemplate restTemplate = new RestTemplate();\n        return restTemplate.getForObject(\"http://localhost:8081/api/serviceB/timeout\", String.class);\n    }));\n}\n"
            })
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