"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["85332"], {
"61141": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "서비스 화면에서 삭제하기",
  "id": "서비스-화면에서-삭제하기",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h3",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "서비스-화면에서-삭제하기",
      children: "서비스 화면에서 삭제하기"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://service.whatap.io",
        children: "와탭 모니터링 서비스"
      }), "에서 에이전트를 삭제하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_dbAgents",
        className: "uitext"
      }), " 메뉴로 이동하세요. 에이전트를 삭제하기 전에 에이전트를 설치한 서버에서 에이전트 프로세스를 종료해야 합니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_projectList",
            className: "uitext"
          }), "에서 에이전트를 삭제할 프로젝트를 선택하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["왼쪽 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_management",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_dbAgents",
            className: "uitext"
          }), "을 선택하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_dbAgents",
            className: "uitext"
          }), "에서 삭제하려는 에이전트의 가장 오른쪽에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "삭제 아이콘",
            src: (__webpack_require__(10054)/* ["default"] */.Z) + "",
            width: "24",
            height: "24"
          }), " 버튼을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "비활성화 상태의 에이전트만 삭제할 수 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "db-disable-agent.png",
            desc: ""
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "에이전트 버전에 따라 삭제 기능을 지원하지 않을 수 있습니다. 최신 버전의 에이전트로 업데이트하세요."
          }), "\n"]
        }), "\n"]
      })
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
"19181": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_oracle_pro_agent_manage_mdx_1ff_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-oracle-pro-agent-manage-mdx-1ff.json
var site_docs_oracle_pro_agent_manage_mdx_1ff_namespaceObject = JSON.parse('{"id":"oracle-pro/agent-manage","title":"관리하기","description":"whatap.conf 파일을 통해 데이터베이스 에이전트를 관리할 수 있습니다.","source":"@site/docs/oracle-pro/agent-manage.mdx","sourceDirName":"oracle-pro","slug":"/oracle-pro/agent-manage","permalink":"/oracle-pro/agent-manage","draft":false,"unlisted":false,"editUrl":"undefined/docs/oracle-pro/agent-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-manage","title":"관리하기","description":"whatap.conf 파일을 통해 데이터베이스 에이전트를 관리할 수 있습니다.","keywords":["Oracle Pro","데이터베이스","데이터베이스"],"isTranslationMissing":false},"sidebar":"dboracledmaSidebar","previous":{"title":"설정하기","permalink":"/oracle-pro/agent-settings"},"next":{"title":"대시보드","permalink":"/oracle-pro/dashboard-intro"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_db-unistall-agent-in-service.mdx
var _db_unistall_agent_in_service = __webpack_require__("61141");
;// CONCATENATED MODULE: ./docs/oracle-pro/agent-manage.mdx


const frontMatter = {
	id: 'agent-manage',
	title: '관리하기',
	description: 'whatap.conf 파일을 통해 데이터베이스 에이전트를 관리할 수 있습니다.',
	keywords: [
		'Oracle Pro',
		'데이터베이스',
		'데이터베이스'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*에이전트 업데이트*/
/*import Dbupdateagent from "../common-items/_db-update-agent.mdx";*/
/*<Dbupdateagent />*/
/*서비스 화면에서 삭제하기*/



const toc = [{
  "value": "에이전트 삭제",
  "id": "에이전트-삭제",
  "level": 2
}, {
  "value": "에이전트 설치 서버에서 삭제하기",
  "id": "에이전트-설치-서버에서-삭제하기",
  "level": 3
}, ..._db_unistall_agent_in_service/* toc */.d$];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    section: "section",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "에이전트-삭제",
        children: "에이전트 삭제"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "에이전트-설치-서버에서-삭제하기",
        children: "에이전트 설치 서버에서 삭제하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["서버 상에서 기동되는 Java 프로세스 중 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.agent.dmx"
        }), " 문자열을 포함한 프로세스를 종료합니다. 에이전트를 설치한 경로에서 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "stop.sh"
        }), "를 실행하세요. 이후 에이전트 파일 및 에이전트에 등록한 User 권한을 삭제 처리하세요."]
      }), (0,jsx_runtime.jsx)(_db_unistall_agent_in_service/* default */.ZP, {})]
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
"10054": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwIDIySDRWNmgydjE0aDEyVjZoMnYxNnptMi0xOGgtNWwtMS4xNDMtMkg4LjE0M0w3IDRIMnYyaDIwVjR6IgogICAgZmlsbD0iIzc1NzU3NSIgLz4KICA8cGF0aCBkPSJNOSA4aDJ2MTBIOVY4ek0xMyA4aDJ2MTBoLTJWOHoiIGZpbGw9IiM3NTc1NzUiIC8+Cjwvc3ZnPg==");

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