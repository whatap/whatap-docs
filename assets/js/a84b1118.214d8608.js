"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["56100"], {
"51503": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
    children: "와탭 에이전트의 구성에 대해서 알아보고 다양한 옵션을 통해 부가 기능을 설정하고, 모니터링 대상인 DB 서버의 자원을 모니터링할 수도 있습니다."
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



}),
"85787": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "에이전트 설정",
  "id": "에이전트-설정",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "에이전트-설정",
      children: "에이전트 설정"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "에이전트 설정에 대한 자세한 방법은 다음 문서를 참조하세요."
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



}),
"67013": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "에이전트 구성",
  "id": "에이전트-구성",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {ImgLang, InDoc, Xclude} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "에이전트-구성",
      children: "에이전트 구성"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "다음은 와탭 에이전트의 구성도입니다."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "cubrid,oracle-pro,mssql",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "agent-xos-architecture.png",
        desc: "에이전트 구성도"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "cubrid",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "dbx-install-agent-on-agent-server-cubrid.png",
        desc: "에이전트 구성도"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "oracle-pro",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "dbx-install-agent-on-db-server-dma.png",
        desc: "에이전트 구성도"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "mssql,mssql-v1",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "agent-architecture.png",
        desc: "Agent"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "oracle-pro",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "수집 서버"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "에이전트가 수집한 데이터베이스 성능 데이터를 수집 및 저장, 통계 정보 추출하고 이를 사용자에 효율적인 방법으로 제공합니다. 수집 서버는 지역(Region) 별로 설정이 가능합니다. 지역(Region)별로 수집 서버의 주소가 다르게 할당합니다. 사용자가 선택한 지역(Region)에 따라 수집 서버 주소는 다를 수 있습니다. 프로젝트를 생성할 때 지역(Region)도 함께 설정합니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "DBX 에이전트"
            }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "기본 에이전트"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Query 기반으로 성능 데이터를 수집하여 서버로 전송합니다. 모니터링 대상 데이터베이스 서버에 에이전트를 직접 설치하지 않아도 별도의 에이전트 서버를 통해서 모니터링이 가능합니다."
          }), "\n"]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "cubrid,oracle-pro,mssql-v1",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "XOS 에이전트"
            }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "부가 에이전트"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "부가 에이전트는 데이터베이스 서버의 프로세스 사용량을 모니터링할 수 있는 부가 옵션 에이전트입니다. 데이터베이스 서버의 프로세스 사용량을 모니터링하고 싶다면 데이터베이스 서버에 별도의 에이전트를 띄워 데이터를 수집할 수 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "XOS 에이전트는 x86 아키텍쳐 기반에서 동작하는 OS 환경에만 적용할 수 있습니다."
            })
          }), "\n"]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "cubrid",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "XOS 에이전트 / XCUB 에이전트"
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "부가 에이전트"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "부가 에이전트는 데이터베이스 서버의 프로세스 사용량을 모니터링할 수 있는 부가 옵션 에이전트입니다. 데이터베이스 서버의 프로세스 사용량을 모니터링하고 싶다면 데이터베이스 서버에 별도의 에이전트를 띄워 데이터를 수집할 수 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "XOS 에이전트는 x86 아키텍쳐 기반에서 동작하는 OS 환경에만 적용할 수 있습니다."
            })
          }), "\n"]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "oracle-pro",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "수집 서버"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "에이전트가 수집한 데이터베이스 성능 데이터를 수집 및 저장, 통계 정보 추출하고 이를 사용자에 효율적인 방법으로 제공합니다. 수집 서버는 지역(Region) 별로 설정이 가능합니다. 지역(Region)별로 수집 서버의 주소가 다르게 할당합니다. 사용자가 선택한 지역(Region)에 따라 수집 서버 주소는 다를 수 있습니다. 프로젝트를 생성할 때 지역(Region)도 함께 설정합니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "DMX 에이전트"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Query 기반으로 성능 데이터를 수집하여 서버로 전송합니다. 모니터링 대상 데이터베이스 서버에 에이전트를 직접 설치하지 않아도 별도의 에이전트 서버를 통해서 모니터링이 가능합니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "네트워크"
            }), ": 와탭 모니터링 에이전트는 수집한 모니터링 정보를 와탭 수집 서버에 전송하기 위해 외부 통신(TCP) 6600 포트를 사용합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "oracle-pro",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "네트워크"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "기본 에이전트: 와탭 모니터링 에이전트는 수집한 모니터링 정보를 와탭 수집 서버에 전송하기 위해 외부 통신(TCP) 6600 포트를 사용합니다."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["부가 에이전트: 에이전트를 설치한 서버와 데이터베이스 서버 사이에 외부 통신(UDP) 3002 포트를 사용합니다. 내부 포트가 충돌이 나는 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "dbx_port"
                }), " 옵션을 통해 포트를 변경할 수 있습니다."]
              }), "\n"]
            }), "\n"]
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
"57279": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_postgresql_agent_settings_mdx_a84_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-postgresql-agent-settings-mdx-a84.json
var site_docs_postgresql_agent_settings_mdx_a84_namespaceObject = JSON.parse('{"id":"postgresql/agent-settings","title":"설정하기","description":"데이터베이스 에이전트 서버에 있는 whatap.conf 파일을 통해 설정할 수 있는 옵션에 대해 알아봅니다.","source":"@site/docs/postgresql/agent-settings.mdx","sourceDirName":"postgresql","slug":"/postgresql/agent-settings","permalink":"/postgresql/agent-settings","draft":false,"unlisted":false,"editUrl":"undefined/docs/postgresql/agent-settings.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-settings","title":"설정하기","description":"데이터베이스 에이전트 서버에 있는 whatap.conf 파일을 통해 설정할 수 있는 옵션에 대해 알아봅니다.","keywords":["PostgreSQL","데이터베이스","데이터베이스 모니터링"],"isTranslationMissing":false},"sidebar":"postgreSidebar","previous":{"title":"설치 문제 해결","permalink":"/postgresql/troubleshooting"},"next":{"title":"DBX 에이전트 설정","permalink":"/postgresql/agent-dbx-settings"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_db-agent-settings-desc.mdx
var _db_agent_settings_desc = __webpack_require__("51503");
// EXTERNAL MODULE: ./docs/common-items/_db-structure-of-agent.mdx
var _db_structure_of_agent = __webpack_require__("67013");
// EXTERNAL MODULE: ./docs/common-items/_db-set-agent-desc.mdx
var _db_set_agent_desc = __webpack_require__("85787");
;// CONCATENATED MODULE: ./docs/postgresql/agent-settings.mdx


const frontMatter = {
	id: 'agent-settings',
	title: '설정하기',
	description: '데이터베이스 에이전트 서버에 있는 whatap.conf 파일을 통해 설정할 수 있는 옵션에 대해 알아봅니다.',
	keywords: [
		'PostgreSQL',
		'데이터베이스',
		'데이터베이스 모니터링'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*에이전트 구성*/
/*에이전트 설정*/





const toc = [..._db_agent_settings_desc/* toc */.d$, ..._db_structure_of_agent/* toc */.d$, ..._db_set_agent_desc/* toc */.d$];
function _createMdxContent(props) {
  const {DocCardList} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  if (!DocCardList) _missingMdxReference("DocCardList", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_db_agent_settings_desc/* default */.ZP, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_db_structure_of_agent/* default */.ZP, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_db_set_agent_desc/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(DocCardList, {})]
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