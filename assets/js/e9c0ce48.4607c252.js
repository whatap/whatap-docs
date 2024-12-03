"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["89080"], {
"80832": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: () => (/* binding */ _topology_settings_whatap_MDXContent),
  d$: () => (/* binding */ _topology_settings_whatap_toc)
});

// UNUSED EXPORTS: contentTitle, frontMatter

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/common-items/_common-whatap-topology-map.mdx


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
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
          children: "whatap.tx_caller_meter_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["트랜잭션 정보로 토폴로지 통계를 생성합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mtrace_enabled"
        }), " 옵션의 값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면 동작합니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.sql_dbc_meter_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "데이터 베이스 연결 정보로 토폴로지 통계를 생성합니다."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.httpc_host_meter_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "토폴로지 맵에서 httpc outbound 정보를 표현합니다."
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


;// CONCATENATED MODULE: ./docs/common-items/_topology-settings-whatap.mdx


const _topology_settings_whatap_frontMatter = (/* unused pure expression or super */ null && ({}));
const _topology_settings_whatap_contentTitle = (/* unused pure expression or super */ null && (undefined));






const _topology_settings_whatap_toc = [{
  "value": "whatap.conf 설정",
  "id": "whatapconf-설정",
  "level": 2
}, ...toc];
function _topology_settings_whatap_createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    p: "p",
    section: "section",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "whatapconf-설정",
      children: "whatap.conf 설정"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음은 토폴로지 표현을 위해 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "whatap.conf"
      }), " 파일에 설정할 수 있는 정보 수집 옵션입니다."]
    }), (0,jsx_runtime.jsx)(MDXContent, {})]
  });
}
function _topology_settings_whatap_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_topology_settings_whatap_createMdxContent, {
      ...props
    })
  }) : _topology_settings_whatap_createMdxContent(props);
}



}),
"5368": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_dotnet_topology_settings_mdx_e9c_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dotnet-topology-settings-mdx-e9c.json
var site_docs_dotnet_topology_settings_mdx_e9c_namespaceObject = JSON.parse('{"id":"dotnet/topology-settings","title":"에이전트 옵션 설정","description":"토폴로지 기능을 이용하기 위해 에이전트에 옵션을 적용하는 방법을 제공합니다.","source":"@site/docs/dotnet/topology-settings.mdx","sourceDirName":"dotnet","slug":"/dotnet/topology-settings","permalink":"/dotnet/topology-settings","draft":false,"unlisted":false,"editUrl":"undefined/docs/dotnet/topology-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"topology-settings","title":"에이전트 옵션 설정","description":"토폴로지 기능을 이용하기 위해 에이전트에 옵션을 적용하는 방법을 제공합니다.","keywords":[".NET","토폴로지","에이전트"],"isTranslationMissing":false},"sidebar":"dotNetSidebar","previous":{"title":"부가 기능","permalink":"/dotnet/topology-add-function"},"next":{"title":"통계","permalink":"/dotnet/analysis-apm-trs"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_topology-settings-whatap.mdx + 1 modules
var _topology_settings_whatap = __webpack_require__("80832");
;// CONCATENATED MODULE: ./docs/dotnet/topology-settings.mdx


const frontMatter = {
	id: 'topology-settings',
	title: '에이전트 옵션 설정',
	description: '토폴로지 기능을 이용하기 위해 에이전트에 옵션을 적용하는 방법을 제공합니다.',
	keywords: [
		'.NET',
		'토폴로지',
		'에이전트'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*## 적용 가능 에이전트 및 버전*/
/*Java 에이전트 1.7.1 버전 이상*/
/** Node.js 에이전트 0.4.1 버전 이상*/
/*{@include: ../common-items/_java-topology-whatap-sample.mdx}

import Nodejstopologywhatapsample from "../common-items/_nodejs-topology-whatap-sample.mdx";

<Nodejstopologywhatapsample />*/



const toc = [..._topology_settings_whatap/* toc */.d$];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "토폴로지 기능을 이용하기 위해 에이전트에 옵션을 적용하는 방법을 제공합니다."
    }), "\n", "\n", "\n", "\n", "\n", (0,jsx_runtime.jsx)(_topology_settings_whatap/* default */.ZP, {}), "\n"]
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