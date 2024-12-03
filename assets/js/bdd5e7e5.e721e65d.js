"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["53064"], {
"19500": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cubrid_v_1_after_install_agent_mdx_bdd_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cubrid-v-1-after-install-agent-mdx-bdd.json
var site_docs_cubrid_v_1_after_install_agent_mdx_bdd_namespaceObject = JSON.parse('{"id":"cubrid-v1/after-install-agent","title":"설치 점검 사항","description":"데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.","source":"@site/docs/cubrid-v1/after-install-agent.mdx","sourceDirName":"cubrid-v1","slug":"/cubrid-v1/after-install-agent","permalink":"/cubrid-v1/after-install-agent","draft":false,"unlisted":false,"editUrl":"undefined/docs/cubrid-v1/after-install-agent.mdx","tags":[],"version":"current","frontMatter":{"id":"after-install-agent","title":"설치 점검 사항","description":"데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.","keywords":["CUBRID","데이터베이스 모니터링","에이전트"],"isTranslationMissing":false},"sidebar":"cubridV1Sidebar","previous":{"title":"에이전트 설치","permalink":"/cubrid-v1/install-agent"},"next":{"title":"설치 문제 해결","permalink":"/cubrid-v1/troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/cubrid-v1/after-install-agent.mdx


const frontMatter = {
	id: 'after-install-agent',
	title: '설치 점검 사항',
	description: '데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.',
	keywords: [
		'CUBRID',
		'데이터베이스 모니터링',
		'에이전트'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "에이전트 실행",
  "id": "에이전트-실행",
  "level": 2
}, {
  "value": "에이전트 프로세스 확인",
  "id": "에이전트-프로세스-확인",
  "level": 2
}, {
  "value": "로그 확인",
  "id": "로그-확인",
  "level": 2
}, {
  "value": "모니터링 확인",
  "id": "모니터링-확인",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "데이터베이스 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "에이전트-실행",
        children: "에이전트 실행"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["데이터베이스 에이전트를 설치한 경로에서 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "start.sh"
        }), " 쉘 스크립트 파일 또는 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "start.bat"
        }), " 배치 파일을 실행하세요. 에이전트를 실행하면 데이터베이스의 모니터링 정보를 수집하기 시작합니다. 에이전트 로그를 확인하여 에이전트의 정상 시작 여부를 확인합니다."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='start.sh'",
          children: "$ ./start.sh\n\n _      ____       ______\n| | /| / / /  ___ /_  __/__ ____\n| |/ |/ / _ \\/ _ `// / / _ `/ _ \\\n|__/|__/_//_/\\_,_//_/  \\_,_/ .__/\n                          /_/\nJust Tap, Always Monitoring\nWhaTap DBX version 1.3.9 20181120\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "에이전트-프로세스-확인",
        children: "에이전트 프로세스 확인"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음 명령어를 통해 동작 중인 와탭 DBX 에이전트 프로세스를 확인할 수 있습니다."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='SH'",
          children: "$ ps –ef | grep dbx\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "로그-확인",
        children: "로그 확인"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["서비스를 다시 시작할 때 정상적으로 로그가 뜨면 에이전트가 성공적으로 설치된 걸 확인할 수 있습니다. 에이전트 등록 후 수집과 관련된 로그는 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "$WHATAP_HOME/logs"
        }), " 경로에서 확인할 수 있습니다. 에이전트가 정상 동작하면 해당 날짜에 다음과 같은 로그 파일을 확인할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["whatap-DBX-", (0,jsx_runtime.jsx)(_components.code, {
            children: "OID"
          }), "-", (0,jsx_runtime.jsx)(_components.code, {
            children: "DATE"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["whatap-boot-", (0,jsx_runtime.jsx)(_components.code, {
            children: "DATE"
          }), ".log"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "모니터링-확인",
        children: "모니터링 확인"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["서버에서 정상적으로 로그가 올라온 것을 확인한 다음 콘솔에 정상 등록 여부를 확인하려면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://service.whatap.io",
          children: "와탭 모니터링 서비스"
        }), " 초기 화면으로 이동하세요. 확인하려는 프로젝트를 선택한 다음 화면 왼쪽에 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "관리"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "에이전트 목록"
          })
        }), " 메뉴를 선택하세요. ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "에이전트 목록"
          })
        }), "에서 데이터베이스 서버의 이름을 확인할 수 있습니다. 데이터베이스 서버의 이름을 별도로 설정해 관리하려면 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "agent-manage",
          children: "다음 문서"
        }), "를 참조하세요."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "db-check-monitoring-agent-lists.png",
        desc: "데이터베이스 에이전트 목록"
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