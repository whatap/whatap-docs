"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["83904"], {
"50194": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_php_agent_httpcapi_mdx_c07_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-php-agent-httpcapi-mdx-c07.json
var site_docs_php_agent_httpcapi_mdx_c07_namespaceObject = JSON.parse('{"id":"php/agent-httpcapi","title":"HTTPC, API Call","description":"PHP 에이전트 HTTPC, API Call 설정을 제공합니다.","source":"@site/docs/php/agent-httpcapi.mdx","sourceDirName":"php","slug":"/php/agent-httpcapi","permalink":"/php/agent-httpcapi","draft":false,"unlisted":false,"editUrl":"undefined/docs/php/agent-httpcapi.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-httpcapi","title":"HTTPC, API Call","description":"PHP 에이전트 HTTPC, API Call 설정을 제공합니다.","keywords":["PHP","HTTPC","API Call","설정하기","애플리케이션"],"isTranslationMissing":false},"sidebar":"phpSidebar","previous":{"title":"DB, SQL","permalink":"/php/agent-dbsql"},"next":{"title":"사용자 수","permalink":"/php/agent-number-of-user"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/php/agent-httpcapi.mdx


const frontMatter = {
	id: 'agent-httpcapi',
	title: 'HTTPC, API Call',
	description: 'PHP 에이전트 HTTPC, API Call 설정을 제공합니다.',
	keywords: [
		'PHP',
		'HTTPC',
		'API Call',
		'설정하기',
		'애플리케이션'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_httpc_resource_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트레이스에서 HTTP Call 스텝이 수집될 때 해당 스텝에서 사용한 CPU 와 메모리 사용량을 추적합니다."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_httpc_normalize_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션 내 HTTPC URL을 파싱하여 정규화하는 기능을 활성화합니다."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_httpc_normalize_urls"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "정규화 할 HTTPC URL 패턴을 정의합니다. 호출 URL 패턴을 파싱하여 패스 파라미터를 제거합니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["예시, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), "라고 선언하면 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "a/123/b"
          }), " → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "a/{v}/b"
          }), "로 치환합니다. 여러 개를 등록할 때는 쉼표(,)를 구분자로 사용합니다. 치환 패턴 정리 후 보완이 필요합니다."]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_curl_return_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면 curl 라이브러리 함수의 결과가 'false' 일 때 오류로 표기하는 기능을 활성화합니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_curl_error_info_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면 curl 라이브러리 함수의 결과값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), " 일 때 에러 메시지 정보를 수집하는 기능을 활성화합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_curl_return_enabled"
        }), " 설정이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "인 경우는 적용되지 않습니다."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["cURL 라이브러리의 오류 타입은 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "HttpConnectionReturnFalse"
          }), " 뒤에 오류 번호가 추가된 형식입니다."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["호출 URL의 http 결과 코드가 400 이상인 경우 오류 타입을 추가했습니다. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "HttpConnectionServerError(결과코드)"
          }), " 예시는 다음과 같습니다. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "HttpConnectionReturnFalse(6)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "HttpConnectionServerError(500)"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_curl_error_ignore_empty"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "이면 오류 코드 또는 오류 메시지 내용이 없을 때 정상 결과로 표기합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_curl_return_enabled"
        }), " 설정이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "인 경우는 적용되지 않습니다."]
      }), "\n"]
    }), "\n"]
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