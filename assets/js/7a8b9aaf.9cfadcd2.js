"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[60238],{

/***/ 59236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ MDXContent),
/* harmony export */   RM: () => (/* binding */ toc)
/* harmony export */ });
/* unused harmony exports frontMatter, contentTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "방화벽 설정 확인",
  "id": "방화벽-설정-확인",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "방화벽-설정-확인",
      children: "방화벽 설정 확인"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭의 데이터 수집 서버에 대한 TCP 아웃바운드 정책을 설정하지 않으면 모니터링 정보를 전송할 수 없습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "방화벽 차단"
      }), "을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "해제"
      }), "하세요."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "telnet"
      }), " 명령을 사용해 \"Connected to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "IP"
      }), "\"를 확인하세요."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "$ telnet 52.193.60.176 6600\nTrying 52.193.60.176...\nConnected to 52.193.60.176.\nEscape character is '^]'.\n"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["수집 서버 정보는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/",
          children: "와탭 모니터링 서비스"
        }), "에서 해당 프로젝트를 선택한 다음 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "관리"
          })
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "에이전트 설치"
          })
        }), " 메뉴에서 확인할 수 있습니다."]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 85322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ agent_troubleshooting_contentTitle),
  "default": () => (/* binding */ agent_troubleshooting_MDXContent),
  frontMatter: () => (/* binding */ agent_troubleshooting_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ agent_troubleshooting_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./docs/common-items/_check-firewall.mdx
var _check_firewall = __webpack_require__(59236);
;// CONCATENATED MODULE: ./docs/common-items/_python-permission-denied.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Permission denied 에러",
  "id": "permission-denied-에러",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "permission-denied-에러",
      children: "Permission denied 에러"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 Python 모니터링을 사용하기 위해서는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "읽기 및 쓰기"
      }), " 권한이 필요합니다."]
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "$WHATAP_HOME/whatap.conf"
        }), " 와탭 설정 파일의 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "읽기 및 쓰기"
        }), " 권한"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "$WHATAP_HOME/logs"
        }), " 와탭 로그 디렉터리와 하위 파일의 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "읽기 및 쓰기"
        }), " 권한"]
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["권한 문제(Permission denied error)가 발생하면 다음과 같이 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$WHATAP_HOME"
      }), "에 권한을 부여하세요."]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ echo `sudo chmod -R 777 $WHATAP_HOME`\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/common-items/_python-agent-data-error.mdx


const _python_agent_data_error_frontMatter = {};
const _python_agent_data_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _python_agent_data_error_toc = [{
  "value": "프로젝트 에이전트 미등록 및 모니터링 데이터 미수집 에러",
  "id": "프로젝트-에이전트-미등록-및-모니터링-데이터-미수집-에러",
  "level": 2
}, {
  "value": "포트 충돌 발생",
  "id": "포트-충돌-발생",
  "level": 3
}, {
  "value": "$WHATAP_HOME 환경 변수 설정 불가",
  "id": "whatap_home-환경-변수-설정-불가",
  "level": 3
}];
function _python_agent_data_error_createMdxContent(props) {
  const _components = {
    br: "br",
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "프로젝트-에이전트-미등록-및-모니터링-데이터-미수집-에러",
        children: "프로젝트 에이전트 미등록 및 모니터링 데이터 미수집 에러"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["로그 파일(", (0,jsx_runtime.jsx)(_components.em, {
          children: "$WHATAP_HOME/logs/"
        }), ")을 확인한 후 각각의 문제에 대하여 다음과 같이 해결하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "whatap-hook.log"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "CONF FILE ERROR: 설정 파일 생성 권한이 없습니다. 파일을 만들어 주세요."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "CONF READ ERROR: 설정 파일은 있으나 읽기 권한이 없습니다. 권한을 주세요."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "LOG FILE ERROR: 로그 디렉터리 생성 권한이 없이 없습니다. 디렉터리를 만들어 주세요."
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "LOGGING ERROR: 로그 디렉터리는 있으나 쓰기 권한이 없습니다. 권한을 주세요."
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsxs)(_components.em, {
            children: ["whatap-boot-", (0,jsx_runtime.jsx)(_components.code, {
              children: "yyyymmdd"
            }), ".log"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "license or whatp.server.host error: 액세스 키 또는 수집 서버 주소가 잘못되었습니다."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "포트-충돌-발생",
        children: "포트 충돌 발생"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["내부 통신을 하는 에이전트는 기본으로 UDP 6600 포트를 사용합니다. 내부 포트 충돌이 나는 경우, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "net_udp_port=xxx"
        }), " 옵션으로 포트를 변경하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "whatap_home-환경-변수-설정-불가",
        children: "$WHATAP_HOME 환경 변수 설정 불가"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Apache HTTPD"
            }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "아파치로 웹 서버를 구동하는 경우 다음과 같이 환경 변수를 설정하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "<VirtualHost *:80>\n    #ServerName\n    #DocumentRoot\n\n        SetEnv WHATAP_HOME \"application path\"\n    # Directory\n</VirtualHost>\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "환경 변수 수동 설정"
            }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "필요에 따라서는 다음과 같이 수동으로 환경 변수를 설정하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-python",
              metastring: "title=Python",
              children: "---\nimport os\nos.environ.setdefault(\"WHATAP_HOME\", [application path]\")\nimport whatap\n---\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function _python_agent_data_error_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_python_agent_data_error_createMdxContent, {
      ...props
    })
  }) : _python_agent_data_error_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/python/agent-troubleshooting.mdx


const agent_troubleshooting_frontMatter = {
	id: 'agent-troubleshooting',
	title: '설치 문제 해결',
	description: 'Python 에이전트 설치 문제 해결',
	keywords: [
		'Python',
		'문제 해결',
		'Troubleshooting'
	]
};
const agent_troubleshooting_contentTitle = undefined;
const metadata = {
  "id": "python/agent-troubleshooting",
  "title": "설치 문제 해결",
  "description": "Python 에이전트 설치 문제 해결",
  "source": "@site/docs/python/agent-troubleshooting.mdx",
  "sourceDirName": "python",
  "slug": "/python/agent-troubleshooting",
  "permalink": "/python/agent-troubleshooting",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/python/agent-troubleshooting.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-troubleshooting",
    "title": "설치 문제 해결",
    "description": "Python 에이전트 설치 문제 해결",
    "keywords": [
      "Python",
      "문제 해결",
      "Troubleshooting"
    ]
  },
  "sidebar": "pySidebar",
  "previous": {
    "title": "설치 점검 사항",
    "permalink": "/python/install-check"
  },
  "next": {
    "title": "에이전트 설정",
    "permalink": "/python/set-agent"
  }
};
const assets = {

};

/*길이, 공통 사항인지 별개인지
프로젝트에 에이전트가 등록되지 않는 경우 모니터링 데이터 수집이 이루어지지 않는 경우
*/





const agent_troubleshooting_toc = [..._check_firewall/* toc */.RM, ...toc, ..._python_agent_data_error_toc];
function agent_troubleshooting_createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_check_firewall/* default */.Ay, {}), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_python_agent_data_error_MDXContent, {})]
  });
}
function agent_troubleshooting_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_troubleshooting_createMdxContent, {
      ...props
    })
  }) : agent_troubleshooting_createMdxContent(props);
}



/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
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


/***/ })

}]);