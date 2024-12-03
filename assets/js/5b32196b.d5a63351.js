"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["1549"], {
"35962": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Apache 및 PHP-FPM 다시 시작 후 적용됩니다."
    })
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
"71325": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_php_agent_dbsql_mdx_5b3_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-php-agent-dbsql-mdx-5b3.json
var site_docs_php_agent_dbsql_mdx_5b3_namespaceObject = JSON.parse('{"id":"php/agent-dbsql","title":"DB, SQL","description":"PHP 에이전트 DB와 SQL 설정을 제공합니다.","source":"@site/docs/php/agent-dbsql.mdx","sourceDirName":"php","slug":"/php/agent-dbsql","permalink":"/php/agent-dbsql","draft":false,"unlisted":false,"editUrl":"undefined/docs/php/agent-dbsql.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-dbsql","title":"DB, SQL","description":"PHP 에이전트 DB와 SQL 설정을 제공합니다.","keywords":["PHP","DB","SQL","설정하기","애플리케이션"],"isTranslationMissing":false},"sidebar":"phpSidebar","previous":{"title":"트랜잭션","permalink":"/php/agent-transaction"},"next":{"title":"HTTPC, API Call","permalink":"/php/agent-httpcapi"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_php-restart-apply.mdx
var _php_restart_apply = __webpack_require__("35962");
;// CONCATENATED MODULE: ./docs/php/agent-dbsql.mdx


const frontMatter = {
	id: 'agent-dbsql',
	title: 'DB, SQL',
	description: 'PHP 에이전트 DB와 SQL 설정을 제공합니다.',
	keywords: [
		'PHP',
		'DB',
		'SQL',
		'설정하기',
		'애플리케이션'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._php_restart_apply/* toc */.d$];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {ScrollToLink} = _components;
  if (!ScrollToLink) _missingMdxReference("ScrollToLink", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_sql_normalize_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "SQL 문에서 리터럴 부분을 추출하여 SQL 문을 정규화 하는 기능을 활성화합니다. 리터럴 부분은 \"#\"으로 표기됩니다."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_sql_resource_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트레이스에서 SQL이 수집될 때 해당 스텝에서 사용한 CPU와 메모리 사용량을 추적합니다."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_sql_param_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        }), (0,jsx_runtime.jsx)(ScrollToLink, {
          anchor: "profile-sql-param"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트레이스 내역에 SQL 파라미터 정보를 기록하고자 할 때 사용합니다. 파라미터는 별도 보안 키를 입력해야 조회할 수 있습니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)("code", {
                class: "my",
                children: "PHP agent v2.8.0 or later"
              }), ": 보안 키는 ", (0,jsx_runtime.jsx)(_components.em, {
                children: "whatap.ini"
              }), " 파일이 위치한 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "WHATAP_HOME"
              }), (0,jsx_runtime.jsx)(_components.em, {
                children: "/security.conf"
              }), " 파일 내에 6자리(", (0,jsx_runtime.jsx)(_components.code, {
                children: "paramkey"
              }), ")로 설정합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)("code", {
                class: "my",
                children: "Below PHP agent v2.8.0"
              }), ": 보안 키는 ", (0,jsx_runtime.jsx)(_components.em, {
                children: "whatap.ini"
              }), " 파일이 위치한 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "WHATAP_HOME"
              }), (0,jsx_runtime.jsx)(_components.em, {
                children: "/paramkey.txt"
              }), " 파일 내에 6자리로 설정합니다. ", (0,jsx_runtime.jsx)(_components.em, {
                children: "paramkey.txt"
              }), " 파일이 존재하지 않는 경우 랜덤 값으로 자동 생성합니다."]
            }), "\n"]
          }), "\n"]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_sql_comment_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["수집하는 SQL 문의 주석을 삭제합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "일 경우 주석을 제외한 SQL 문을 수집합니다. 설정을 통해 주석을 포함하거나 삭제할 수 있습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_db_connection_map_size"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "20"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "동시에 연결이 유지되는 DB Connection 정보를 최대로 저장할 수 있는 크기입니다. 초과하는 DB Connection 연결 시 오래된 정보부터 삭제됩니다."
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.ZP, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_mysql_return_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면  Mysql 라이브러리 함수의 결과가 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), " 일 때 오류로 표기하는 기능을 활성화합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_mysql_return_enabled"
        }), " 설정이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "인 경우는 적용되지 않습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_mysql_error_ignore_empty"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "이면  오류 코드 또는 오류 메시지 내용이 없을 때 정상 결과로 표기합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_mysql_return_enabled"
        }), " 설정이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "인 경우는 적용되지 않습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_mysqli_return_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면  Mysqli 라이브러리 함수의 결과가 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), " 일 때 오류로 표기하는 기능을 활성화합니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_mysqli_error_info_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면  Mysqli 라이브러리 함수의 결과값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), " 일 때 에러 메시지 정보 수집하는 기능을 활성화합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_mysqli_return_enabled"
        }), " 설정이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), " 인 경우는 적용되지 않습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_mysqli_error_ignore_empty"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "이면  오류 코드 또는 오류 메시지 내용이 없을 때 정상 결과로 표기합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_mysqli_return_enabled"
        }), " 설정이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "인 경우는 적용되지 않습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_pdo_return_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면  pdo 라이브러리 함수의 결과가 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), " 일 때 오류로 표기하는 기능을 활성화합니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_pdo_error_info_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면  Mysql 라이브러리 함수의 결과값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), " 일 때 에러 메시지 정보 수집하는 기능을 활성화합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_pdo_return_enabled"
        }), " 설정이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "인 경우는 적용되지 않습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_pdo_error_ignore_empty"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "이면  오류 코드 또는 오류 메시지 내용이 없을 때 정상 결과로 표기합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_pdo_return_enabled"
        }), " 설정이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "인 경우는 적용되지 않습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_pdo_return_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면  pdo 라이브러리 함수의 결과가 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), " 일 때 오류로 표기하는 기능을 활성화합니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_pgsql_error_info_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면  pgsql(Posgressql) 라이브러리 함수의 결과값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), " 일 때 에러 메시지 정보 수집하는 기능을 활성화합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_pgsql_return_enabled"
        }), " 설정이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "인 경우는 적용되지 않습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_pgsql_error_ignore_empty"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "이면  오류 코드 또는 오류 메시지 내용이 없을 때 정상 결과로 표기합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_pgsql_return_enabled"
        }), " 설정이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "인 경우는 적용되지 않습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "wwhatap.profile_oci8_return_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면  oci8(Oracle) 라이브러리 함수의 결과가 False 일 때 오류로 표기하는 기능을 활성화합니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_oci8_error_info_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면  Mysql 라이브러리 함수의 결과값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), " 일 때 에러 메시지 정보 수집하는 기능을 활성화합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_pdo_return_enabled"
        }), " 설정이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "인 경우는 적용되지 않습니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_pdo_error_ignore_empty"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "이면  오류 코드 또는 오류 메시지 내용이 없을 때 정상 결과로 표기합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_pdo_return_enabled"
        }), " 설정이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "인 경우는 적용되지 않습니다."]
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