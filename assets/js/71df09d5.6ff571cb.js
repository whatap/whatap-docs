"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["25320"], {
"58088": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_server_agent_remove_mdx_71d_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-server-agent-remove-mdx-71d.json
var site_docs_server_agent_remove_mdx_71d_namespaceObject = JSON.parse('{"id":"server/agent-remove","title":"에이전트 삭제","description":"서버 에이전트 삭제 방법에 대해 안내합니다.","source":"@site/docs/server/agent-remove.mdx","sourceDirName":"server","slug":"/server/agent-remove","permalink":"/server/agent-remove","draft":false,"unlisted":false,"editUrl":"undefined/docs/server/agent-remove.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-remove","title":"에이전트 삭제","description":"서버 에이전트 삭제 방법에 대해 안내합니다.","keywords":["Server","삭제","관리하기"],"isTranslationMissing":false},"sidebar":"serverSidebar","previous":{"title":"에이전트 업데이트","permalink":"/server/agent-update"},"next":{"title":"리소스 보드","permalink":"/server/resourceboard"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/server/agent-remove.mdx


const frontMatter = {
	id: 'agent-remove',
	title: '에이전트 삭제',
	description: '서버 에이전트 삭제 방법에 대해 안내합니다.',
	keywords: [
		'Server',
		'삭제',
		'관리하기'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Linux",
  "id": "linux",
  "level": 3
}, {
  "value": "Unix",
  "id": "unix",
  "level": 3
}, {
  "value": "Windows",
  "id": "windows",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "linux",
        children: "Linux"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "설치된 에이전트를 삭제하려면 다음 명령어를 실행하세요."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Debian / Ubuntu"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "sudo apt-get remove whatap-infra\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CentOS / Amazon Linux / SUSE"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "sudo yum remove whatap-infra\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "unix",
        children: "Unix"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FreeBSD"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "pkg delete whatap-infra\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AIX"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "stopsrc -s whatap-infra\nrpm -e whatap-infra\nrm -rf /usr/whatap/infra\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oracle Solaris"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "pkgrm whatap-infra\nrm -rf /usr/whatap/infra\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HP-UX"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='IA64 / PA-RISC'",
              children: "swremove whatap-infra\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "windows",
        children: "Windows"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["서버 모니터링 에이전트 삭제 명령을 관리자 권한의 command 창에서 실행합니다.", "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "\"C:\\Program Files\\WhatapInfra\\unins000.exe\"\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "제어판의 프로그램 삭제 기능을 사용할 수도 있습니다."
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