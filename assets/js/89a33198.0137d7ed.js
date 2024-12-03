"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["82213"], {
"49203": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_nodejs_nodejs_0_4_83_mdx_89a_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-nodejs-nodejs-0-4-83-mdx-89a.json
var site_docs_release_notes_nodejs_nodejs_0_4_83_mdx_89a_namespaceObject = JSON.parse('{"id":"release-notes/nodejs/nodejs-0_4_83","title":"Node.js Agent v0.4.83","description":"2023년 12월 11일","source":"@site/docs/release-notes/nodejs/nodejs-0.4.83.mdx","sourceDirName":"release-notes/nodejs","slug":"/release-notes/nodejs/nodejs-0_4_83","permalink":"/release-notes/nodejs/nodejs-0_4_83","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/nodejs/nodejs-0.4.83.mdx","tags":[],"version":"current","frontMatter":{"id":"nodejs-0_4_83","title":"Node.js Agent v0.4.83","toc_max_heading_level":2,"pagination_next":"release-notes/nodejs/nodejs-0_4_81","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","next":{"title":"Node.js Agent v0.4.81","permalink":"/release-notes/nodejs/nodejs-0_4_81"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/nodejs/nodejs-0.4.83.mdx


const frontMatter = {
	id: 'nodejs-0_4_83',
	title: 'Node.js Agent v0.4.83',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/nodejs/nodejs-0_4_81',
	displayed_sidebar: 'releaseSidebar',
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
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2023년 12월 11일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " 에이전트 옵션 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "trace_sql_error_stack"
              }), " ", (0,jsx_runtime.jsx)("span", {
                class: "type",
                children: "Boolean"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "false"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "SQL에 대한 오류 내용을 스택으로 저장(MySQL, MariaDB, PostgreSQL, SQL Server)합니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "trace_sql_error_depth"
              }), " ", (0,jsx_runtime.jsx)("span", {
                class: "type",
                children: "Int"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "50"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "trace_sql_error_stack"
              }), " 옵션을 적용할 경우 저장되는 오류의 라인 수를 설정합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "profile_error_step_enabled"
              }), " ", (0,jsx_runtime.jsx)("span", {
                class: "type",
                children: "Boolean"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "true"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "프로파일에 에러 관련 정보를 표시하는 스텝을 추가할 수 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "ignore_http_method"
              }), " ", (0,jsx_runtime.jsx)("span", {
                class: "type",
                children: "String"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "PATCH,OPTIONS,HEAD,TRACE"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "설정된 HTTP 메소드(Method)로 요청된 트랜잭션 정보는 수집하지 않습니다. 여러 개를 설정하려면 쉼표(,)를 구분자로 이용하세요."
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title=\"whatap.conf\"",
                children: "# example\nignore_http_method=OPTIONS,HEAD\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "status_ignore"
              }), " ", (0,jsx_runtime.jsx)("span", {
                class: "type",
                children: "String"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Empty"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "무시하려는 HTTP 상태 코드를 설정할 수 있습니다."
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title=\"whatap.conf\"",
                children: "# example\nstatus_ignore=404,500\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "status_ignore_set"
              }), " ", (0,jsx_runtime.jsx)("span", {
                class: "type",
                children: "String"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Empty"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HTTP 상태 리턴 코드 중에서 무시하고 싶은 코드를 URL 단위로 설정할 수 있습니다."
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-ini",
                metastring: "title=\"whatap.conf\"",
                children: "# example\nstatus_ignore_set=/a/b/c:400,/a/ab/c:404\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "transaction_status_error_enable"
              }), " ", (0,jsx_runtime.jsx)("span", {
                class: "type",
                children: "Boolean"
              })]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "true"
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "HTTP 401, 403과 같이 정상 응답이 아닌 HTTP 상태 코드를 반환하는 경우 에러로 처리합니다."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Fixed"
          }), " MongoDB 모니터링이 안되는 문제 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Fixed"
          }), " MongoDB Connection 정보를 저장하도록 수정"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["패키지 정보: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.npmjs.com/package/whatap",
              children: "https://www.npmjs.com/package/whatap"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "설치 및 적용 방법"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "npm i whatap\n"
            })
          }), "\n"]
        }), "\n"]
      })
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