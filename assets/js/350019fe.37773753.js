"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[68438],{

/***/ 42566:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'db-faq',
	title: 'Database FAQs',
	description: '와탭 데이터베이스 모니터링 서비스 FAQ 문서입니다.',
	tags: [
		'데이터베이스 모니터링',
		'FAQ'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "faq/db-faq",
  "title": "Database FAQs",
  "description": "와탭 데이터베이스 모니터링 서비스 FAQ 문서입니다.",
  "source": "@site/docs/faq/db-faq.mdx",
  "sourceDirName": "faq",
  "slug": "/faq/db-faq",
  "permalink": "/whatap-docs/faq/db-faq",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/faq/db-faq.mdx",
  "tags": [
    {
      "label": "데이터베이스 모니터링",
      "permalink": "/whatap-docs/tags/데이터베이스-모니터링"
    },
    {
      "label": "FAQ",
      "permalink": "/whatap-docs/tags/faq"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "db-faq",
    "title": "Database FAQs",
    "description": "와탭 데이터베이스 모니터링 서비스 FAQ 문서입니다.",
    "tags": [
      "데이터베이스 모니터링",
      "FAQ"
    ]
  },
  "sidebar": "referSidebar",
  "previous": {
    "title": "Application FAQs",
    "permalink": "/whatap-docs/faq/apm-faq"
  },
  "next": {
    "title": "Log FAQs",
    "permalink": "/whatap-docs/faq/log-faq"
  }
};
const assets = {

};



const toc = [{
  "value": "Authentication plugin &#39;caching_sha2_password&#39; cannot be loaded 에러",
  "id": "authentication-plugin-caching_sha2_password-cannot-be-loaded-에러",
  "level": 3
}, {
  "value": "DB 인스턴스에 데이터베이스 추가 생성 후 모니터링이 안 될 경우",
  "id": "db-인스턴스에-데이터베이스-추가-생성-후-모니터링이-안-될-경우",
  "level": 3
}, {
  "value": "인스턴스 목록 M, S, C 기준",
  "id": "인스턴스-목록-m-s-c-기준",
  "level": 3
}, {
  "value": "인스턴스 목록 M 미표시",
  "id": "인스턴스-목록-m-미표시",
  "level": 3
}, {
  "value": "메타락 모니터링",
  "id": "메타락-모니터링",
  "level": 3
}, {
  "value": "로그 메뉴 접근",
  "id": "로그-메뉴-접근",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "와탭 데이터베이스 모니터링 서비스 사용자들이 자주 묻는 질문을 확인해 보세요."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "faqs",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "authentication-plugin-caching_sha2_password-cannot-be-loaded-에러",
          children: "Authentication plugin 'caching_sha2_password' cannot be loaded 에러"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["에이전트 설치 후 DB 접속 시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "dbx.log"
            }), "를 확인하니 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Authentication plugin 'caching_sha2_password' cannot be loaded"
            }), " 에러가 발생하면서 연결이 안 되는 것 같습니다. 어떻게 해야 하나요?"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["MySQL 8.0 을 사용할 때 발생할 수 있으며 MySql 8.0의 기본 인증 플러그인은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "caching_sha2_password"
          }), "입니다.  ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "caching_sha2_password"
          }), "를 사용하려면 SSL 보안 연결을 사용하거나 RSA 보안을 적용한 비암호 연결을 사용해야 합니다. 이 문제를 가장 쉽게 해결하는 방법은 패스워드 생성 시 다음과 같이 예전의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "mysql_native_password"
          }), " 방식을 사용하는 것 입니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-sql",
            children: "ALTER USER 'yourusername' IDENTIFIED WITH mysql_native_password BY 'youpassword';\n"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "다음 문서를 참조하세요."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["2.11.4 Changes in MySQL 8.0 - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html",
                children: "https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["6.4.1.2 Caching SHA-2 Pluggable Authentication - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html",
                children: "https://dev.mysql.com/doc/refman/8.0/en/caching-sha2-pluggable-authentication.html"
              })]
            }), "\n"]
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "db-인스턴스에-데이터베이스-추가-생성-후-모니터링이-안-될-경우",
          children: "DB 인스턴스에 데이터베이스 추가 생성 후 모니터링이 안 될 경우"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "DB 인스턴스에 데이터베이스를 추가로 생성했는데 와탭에서 모니터링이 되지 않습니다. 어떻게 해야 하나요?"
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "에이전트는 db 정보를 기동 시점과 기동 이후 하루에 한 번씩 수집합니다. 에이전트가 실행 중인 상태에서 db를 추가 생성했다면 반영되지 않을 수 있습니다. 이 경우 에이전트를 다시 시작하세요. 그래도 해결되지 않는다면 적절한 권한이 없어서일 수 있습니다. 다음과 같이 권한을 부여하세요."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-sql",
            children: "grant select on '추가한 db' to whatap;\n"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "인스턴스-목록-m-s-c-기준",
          children: "인스턴스 목록 M, S, C 기준"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["인스턴스 목록에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "M"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "S"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "C"
              })
            }), "의 기준은 무엇인가요?"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["각각 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "M"
            })
          }), "aster, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "S"
            })
          }), "lave, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "C"
            })
          }), "luster를 의미합니다. Replication으로 구축된 DB일 경우 표시됩니다. Cluster는 MariaDB에서 galera 솔루션으로 구성했을 경우 표시됩니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-sql",
            children: "-- Cluster의 경우 : WSREP_ON이 ON이 아니고, WSREP_CLUSTER_NAME이 galera일 경우\nselect variable_name,variable_value \nfrom information_schema.global_variables \nwhere variable_name in ('wsrep_on','wsrep_cluster_name');\n\n-- Master의 경우 : show slave hosts의 데이터가 있을 경우\nshow slave hosts ;\n\n-- Slave : show slave status 의 데이터가 있을 경우\nshow slave status ;\n"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "인스턴스-목록-m-미표시",
          children: "인스턴스 목록 M 미표시"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["인스턴스 목록에서 Master인데 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "M"
              })
            }), " 표시가 나타나지 않습니다. 이유가 무엇인가요?"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Replication에 대한 권한이 없는 경우 정보 표시가 나타나지 않을 수 있습니다. 모니터링 계정 권한을 확인해 주세요."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-sql",
            children: "--권한 확인\nshow grants for whatap;\n\n--권한 부여\ngrant REPLICATION SLAVE, REPLICATION CLIENT on *.* to whatap;\n"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "메타락-모니터링",
          children: "메타락 모니터링"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "MySQL에서 락트리에 메타락(데이터베이스 객체의 이름이나 구조를 변경 하는 경우에 획득하는 잠금)이 조회되지 않습니다. 메타락도 모니터링 하려면 어떻게 해야 하나요?"
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "DB 설정과 와탭 에이전트 설정이 필요합니다."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "DB 설정"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-sql",
            children: "# 1. Performance_schema활성화\nperformance_schema = on\n# 2. setup_consumers활성화: 아래 쿼리결과 ENABLED가 'YES'이어야 함(8.0부터는 디폴트 YES임)\nSELECT *\nFROM performance_schema.setup_instruments\nWHERE NAME = 'wait/lock/metadata/sql/mdl'; \n\n-- ENABLED가 'NO'인 경우 업데이트 필요\nUPDATE setup_instruments \nSET ENABLED = 'YES',TIMED='YES' \nWHERE NAME = 'wait/lock/metadata/sql/mdl';\n"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "와탭 DB 에이전트 설정"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-sql",
            children: "# whatap.conf에 아래 설정 추가\nmetalock=1\n"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "로그-메뉴-접근",
          children: "로그 메뉴 접근"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["프로젝트에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_log",
              className: "uitext"
            }), " 메뉴가 보이지 않아요."]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["설정된 멤버 권한을 확인하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_log",
            className: "uitext"
          }), " 및 하위 메뉴들은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "log_read",
            className: "b600"
          }), " 권한을 가진 멤버에게만 노출됩니다. 이 권한이 있는 멤버는 해당 메뉴로 진입하여 로그를 조회할 수 있습니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "note",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["멤버 권한 체계에 대한 자세한 설명은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../project/project-structure#project-auth",
              children: "다음 문서"
            }), "를 참조하세요."]
          })
        })]
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