"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["77949"], {
"49676": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_apidoc_openapi_call_long_stat_mdx_1cb_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-apidoc-openapi-call-long-stat-mdx-1cb.json
var site_docs_apidoc_openapi_call_long_stat_mdx_1cb_namespaceObject = JSON.parse('{"id":"apidoc/openapi-call-long-stat","title":"장기 통계","description":"장기 통계 조회를 위한 Open API에 대한 설명을 제공합니다.","source":"@site/docs/apidoc/openapi-call-long-stat.mdx","sourceDirName":"apidoc","slug":"/apidoc/openapi-call-long-stat","permalink":"/apidoc/openapi-call-long-stat","draft":false,"unlisted":false,"editUrl":"undefined/docs/apidoc/openapi-call-long-stat.mdx","tags":[],"version":"current","frontMatter":{"id":"openapi-call-long-stat","title":"장기 통계","description":"장기 통계 조회를 위한 Open API에 대한 설명을 제공합니다.","keywords":["Open API","API","장기 통계"],"isTranslationMissing":false},"sidebar":"openapiSidebar","previous":{"title":"프로젝트 통계 조회","permalink":"/apidoc/openapi-call-project-stat"},"next":{"title":"단기 조회","permalink":"/apidoc/openapi-call-short-stat"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/apidoc/openapi-call-long-stat.mdx


const frontMatter = {
	id: 'openapi-call-long-stat',
	title: '장기 통계',
	description: '장기 통계 조회를 위한 Open API에 대한 설명을 제공합니다.',
	keywords: [
		'Open API',
		'API',
		'장기 통계'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "액티브 사용자(1일 단위)",
  "id": "액티브-사용자1일-단위",
  "level": 2
}, {
  "value": "액티브 사용자(1개월 단위)",
  "id": "액티브-사용자1개월-단위",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "방문 사용자"
        }), "는 1일 단위의 액티브 사용자 그리고 1개월 단위의 액티브 사용자로 집계됩니다."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "액티브-사용자1일-단위",
        children: "액티브 사용자(1일 단위)"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["1일간 집계된 고유 사용자 통계로 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "etime"
        }), "은 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stime"
        }), "을 기준으로 31일을 초과할 수 없습니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/json/visitor_d/",
          children: "https://api.whatap.io/open/api/json/visitor_d/"
        }), (0,jsx_runtime.jsx)("code", {
          children: "stitme"
        }), "/", (0,jsx_runtime.jsx)("code", {
          children: "etime"
        })]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/visitor_d/1554163200000/1554422400000\"\n"
        })
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response' {4} showLineNumbers",
          children: "{\n  \"data\": [\n    [\n      1554163200000, // 1일 단위 (24*60*60*1000)\n      1007\n    ],\n    [\n      1554249600000,\n      1007\n    ],\n    [\n      1554336000000,\n      1007\n    ]\n  ],\n  \"pcode\": 3000000079,\n  \"stime\": 1554163200000,\n  \"etime\": 1554422400000,\n  \"total\": 3\n}\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "액티브-사용자1개월-단위",
        children: "액티브 사용자(1개월 단위)"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["1개월간 집계된 고유 사용자 통계로 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "etime"
        }), "은 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stime"
        }), "을 기준으로 365일을 초과할 수 없습니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/json/visitor_m/",
          children: "https://api.whatap.io/open/api/json/visitor_m/"
        }), (0,jsx_runtime.jsx)("code", {
          children: "stitme"
        }), "/", (0,jsx_runtime.jsx)("code", {
          children: "etime"
        })]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/visitor_m/1551398400000/1554076800000\"\n"
        })
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response' {4} showLineNumbers",
          children: "{\n  \"data\": [\n    {\n      \"stime\": 1535760000000,  // 월 1일 시각 (24*60*60*1000)\n      \"etime\": 1538352000000,\n      \"sdate\": \"Sat Sep 01 00:00:00 GMT 2018\",\n      \"edate\": \"Mon Oct 01 00:00:00 GMT 2018\",\n      \"mau\": 1007\n    },\n    {\n      \"stime\": 1538352000000,\n      \"etime\": 1541030400000,\n      \"sdate\": \"Mon Oct 01 00:00:00 GMT 2018\",\n      \"edate\": \"Thu Nov 01 00:00:00 GMT 2018\",\n      \"mau\": 1007\n    }\n  ],\n  \"pcode\": 1234570141,\n  \"stime\": 1535760000000,\n  \"etime\": 1541030400000,\n  \"sdate\": \"Sat Sep 01 00:00:00 GMT 2018\",\n  \"edate\": \"Thu Nov 01 00:00:00 GMT 2018\",\n  \"total\": 2\n}\n"
        })
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