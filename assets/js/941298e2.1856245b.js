"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[49343],{

/***/ 6585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _common_items_db_troubleshooting_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83194);


const frontMatter = {
	id: 'troubleshooting',
	title: '설치 문제 해결',
	description: '데이터베이스 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.',
	tags: [
		'Altibase',
		'데이터베이스',
		'문제 해결',
		'에이전트'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "altibase/troubleshooting",
  "title": "설치 문제 해결",
  "description": "데이터베이스 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.",
  "source": "@site/docs/altibase/troubleshooting.mdx",
  "sourceDirName": "altibase",
  "slug": "/altibase/troubleshooting",
  "permalink": "/whatap-docs/altibase/troubleshooting",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/altibase/troubleshooting.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Altibase",
      "permalink": "/whatap-docs/tags/altibase"
    },
    {
      "inline": true,
      "label": "데이터베이스",
      "permalink": "/whatap-docs/tags/데이터베이스"
    },
    {
      "inline": true,
      "label": "문제 해결",
      "permalink": "/whatap-docs/tags/문제-해결"
    },
    {
      "inline": true,
      "label": "에이전트",
      "permalink": "/whatap-docs/tags/에이전트"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "troubleshooting",
    "title": "설치 문제 해결",
    "description": "데이터베이스 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.",
    "tags": [
      "Altibase",
      "데이터베이스",
      "문제 해결",
      "에이전트"
    ]
  },
  "sidebar": "altibaseSidebar",
  "previous": {
    "title": "설치 점검 사항",
    "permalink": "/whatap-docs/altibase/after-install-agent"
  },
  "next": {
    "title": "설정하기",
    "permalink": "/whatap-docs/altibase/agent-settings"
  }
};
const assets = {

};




const toc = [..._common_items_db_troubleshooting_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM];
function _createMdxContent(props) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_db_troubleshooting_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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

/***/ 83194:
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
}, {
  "value": "방화벽 확인 방법",
  "id": "방화벽-확인-방법",
  "level": 3
}, {
  "value": "SSL 인증 관련 문제",
  "id": "ssl-인증-관련-문제",
  "level": 2
}, {
  "value": "제약 사항",
  "id": "제약-사항",
  "level": 2
}, {
  "value": "복수 리전을 단일 프로젝트로 선택 불가",
  "id": "복수-리전을-단일-프로젝트로-선택-불가",
  "level": 3
}, {
  "value": "에이전트 이름(ONAME) 중복 사용 불가",
  "id": "에이전트-이름oname-중복-사용-불가",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, InDoc} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "데이터베이스 에이전트 설치 시 발생할 수 있는 문제를 확인해 보세요."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "방화벽-설정-확인",
        children: "방화벽 설정 확인"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "방화벽 차단을 해제하세요. 와탭 서버에 대한 TCP 아웃바운드 방화벽이 설정되어 있으면 모니터링 정보를 서버로 전송할 수 없습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "방화벽-확인-방법",
        children: "방화벽 확인 방법"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "telnet"
        }), " 명령어를 수행해 다음과 같은 접속 관련 정보가 표시되어야 정상입니다. (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "telnet [서버 IP] [서버 포트]"
        }), ")"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Example'",
          children: "$ telnet 52.193.60.176 6600\nTrying 52.193.60.176...\nConnected to 52.193.60.176.\nEscape character is '^]'.\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["와탭 수집 서버 정보는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_management",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_agentInstall",
            className: "uitext"
          }), " 메뉴에서 확인할 수 있습니다."]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        product: "mssql",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
          id: "ssl-인증-관련-문제",
          children: "SSL 인증 관련 문제"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "에이전트에서 데이터베이스에 접속할 때 SSL 보안 관련해 다음과 문제가 발생하면, jdbc로 접속할 때 SSL 인증을 사용하지 않도록 옵션을 설정해야 합니다."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-txt",
            children: "com.microsoft.sqlserver.jdbc.SQLServerException: The driver could not establish a secure connection to SQL Server by using Secure Sockets Layer (SSL) encryption.\n\ncom.microsoft.sqlserver.jdbc.SQLServerException: \"enctyp1\" property is set to \"true\" and \"trustServerCertificate\" property is set to \"false\" but the driver could not establish a secure connection to SQL Server by ising Secure Sockets Layer (SSL) encryption\n"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["에이전트 설정 파일(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "whatap.conf"
          }), ")에 SSL 인증을 사용하지 않도록 다음 옵션을 설정하세요."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "connect_option=encrypt=true;trustServerCertificate=true\n"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "제약-사항",
        children: "제약 사항"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "복수-리전을-단일-프로젝트로-선택-불가",
        children: "복수 리전을 단일 프로젝트로 선택 불가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://services.whatap.io",
              children: "와탭 모니터링 서비스"
            }), " 사이트에서 프로젝트 생성 시 지역(Region)은 중복 선택할 수 없으며, 복수의 지역(Region)을 활용하는 경우 별도의 프로젝트를 생성해야 합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "클라우드 환경과 같이 복수의 지역(Region)에 서버가 존재하는 경우 네트워크 latency 등 성능 정보 수집상의 제약 사항을 회피하기 위해 지역(Region) 단위로 수집 서버를 위치시켜야 합니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "와탭은 고객 요구 사항에 부응하기 위해 지역(Region)별로 수집 서버를 구축합니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "에이전트-이름oname-중복-사용-불가",
        children: "에이전트 이름(ONAME) 중복 사용 불가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "와탭 DBX 모니터링은 에이전트의 식별을 위해 에이전트의 IP 주소와 포트(Port) 정보를 이용합니다. 사용자 환경의 모니터링할 데이터베이스 서버가 동일 IP, 동일 포트(Port)를 사용한다면 와탭 서버에서 해당 서버 인스턴스를 구분할 수 없습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["서버 인스턴스가 동적으로 확장되는 환경이 아니라면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "agent-manage#custom-server-name",
              children: "다음 문서"
            }), "를 참조해 데이터베이스 식별을 위한 명칭을 직접 설정해 우회할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["모니터링할 데이터베이스의 internal address 또는 네트워크 가상화로 인해 중복된 IP를 이용할 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "agent-manage#custom-server-name",
              children: "다음 문서"
            }), "를 참조해 별도의 데이터베이스 이름 패턴을 활용하세요."]
          }), "\n"]
        }), "\n"]
      })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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