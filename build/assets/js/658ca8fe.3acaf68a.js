"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[94464],{

/***/ 27295:
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
	id: 'openapi-mxql',
	title: 'MXQL Open API',
	description: 'Open API를 이용해 MXQL 데이터를 조회하는 방법에 대해서 알아봅니다.',
	tags: [
		'Open API',
		'API',
		'MXQL'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "apidoc/openapi-mxql",
  "title": "MXQL Open API",
  "description": "Open API를 이용해 MXQL 데이터를 조회하는 방법에 대해서 알아봅니다.",
  "source": "@site/docs/apidoc/openapi-mxql.mdx",
  "sourceDirName": "apidoc",
  "slug": "/apidoc/openapi-mxql",
  "permalink": "/apidoc/openapi-mxql",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/apidoc/openapi-mxql.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Open API",
      "permalink": "/tags/open-api"
    },
    {
      "inline": true,
      "label": "API",
      "permalink": "/tags/api"
    },
    {
      "inline": true,
      "label": "MXQL",
      "permalink": "/tags/mxql"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "openapi-mxql",
    "title": "MXQL Open API",
    "description": "Open API를 이용해 MXQL 데이터를 조회하는 방법에 대해서 알아봅니다.",
    "tags": [
      "Open API",
      "API",
      "MXQL"
    ]
  },
  "sidebar": "openapiSidebar",
  "previous": {
    "title": "단기 조회",
    "permalink": "/apidoc/openapi-call-short-stat"
  }
};
const assets = {

};



const toc = [{
  "value": "MXQL Open API 종류",
  "id": "mxql-open-api-종류",
  "level": 2
}, {
  "value": "MXQL Open API 호출하기",
  "id": "mxql-open-api-호출하기",
  "level": 2
}, {
  "value": "MXQL text API",
  "id": "text-api",
  "level": 3
}, {
  "value": "MXQL path API",
  "id": "path-api",
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
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Open API를 이용해 MXQL 데이터를 조회하는 방법을 제공합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["MXQL에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "../mxql/mxql-overview",
          children: "다음 문서"
        }), "를 참조하세요."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "mxql-open-api-종류",
        children: "MXQL Open API 종류"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "MXQL을 사용하는 방법은 다음과 같습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "직접 MXQL 쿼리를 작성해서 데이터를 조죄하는 방법"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "../mxql/mxql-guide#custom-query-saas",
            children: "다음 문서"
          }), "에서와 같이 '", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "SaaS 서비스에서 제공하는 사전에 정의된 MXQL 쿼리 목록"
          }), "'으로 데이터를 조회하는 방법"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "따라서 각각의 경우에 사용하는 API의 path가 달라집니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "MXQL 활용 방법"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "API"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "직접 MXQL 쿼리를 작성하는 경우"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "#text-api",
                children: "MXQL text API"
              })
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["'", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "SaaS 서비스에서 제공하는 사전에 정의된 MXQL 쿼리 목록"
              }), "'을 사용하는 경우(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "../mxql/mxql-guide#custom-query-saas",
                children: "다음 문서"
              }), " 참조)"]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "#path-api",
                children: "MXQL path API"
              })
            })]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "mxql-open-api-호출하기",
        children: "MXQL Open API 호출하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Open API 호출 시 헤더에 포함하는 내용은 다음과 같습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "구분"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "키"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "설정 값"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              rowSpan: "2",
              children: "헤더"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "x-whatap-token"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["API 토큰 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "{{PROJECT API TOKEN}}"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["프로젝트 API토큰: 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "관리"
                })
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "프로젝트 관리"
                })
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "API토큰"
                })
              })]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "x-whatap-pcode"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["프로젝트 코드 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "{{projectCode}}"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["프로젝트 코드: 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "관리"
                })
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "프로젝트 관리"
                })
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "프로젝트 코드"
                })
              })]
            })]
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "caution",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "MXQL Open API 제한사항"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "한 번의 요청으로 조회할 수 있는 기간은 최대 31일입니다."
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "text-api",
        children: "MXQL text API"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음 이미지는 MXQL 실행 결과 예시입니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          src: "https://img.whatap.io/media/images/open_api_mxql_text_example.png",
          alt: "MXQL 실행 결과 예시"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "POST"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/flush/mxql/text",
          children: "https://api.whatap.io/open/api/flush/mxql/text"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Request'",
          children: "curl --location 'https://api.whatap.io/open/api/flush/mxql/text' \\\r\n-H 'x-whatap-token: {{PROJECT API TOKEN}}' \\\r\n-H 'x-whatap-pcode: {{projectCode}}' \\\r\n-H 'Content-Type: application/json' \\\r\n-d '{\r\n  \"stime\": 1639016640000,\r\n  \"etime\": 1639016940000,\r\n  \"mql\": \"CATEGORY app_counter\\nOID [ $oidFirst, $oidSecond ]\\nTAGLOAD\\nSELECT\\nINJECT sortByOidDesc\",\r\n  \"limit\": 2,\r\n  \"pageKey\": \"mxql\",\r\n  \"inject\": {\r\n    \"sortByOidDesc\": \"ORDER {key : [oid],  sort :[desc]}\"\r\n  },\r\n  \"param\": {\r\n    \"$oidFirst\": \"1499132250\",\r\n    \"$oidSecond\": \"1670734023\"\r\n  }\r\n}'\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Key"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Value"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "stime"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "데이터 조회 시작 시간"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "etime"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "데이터 조회 끝 시간"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "mql"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "직접 작성한 MXQL 쿼리"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "limit"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "최대 데이터 조회 수"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "pageKey"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["문자열 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mxql"
              }), " 고정값"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "inject"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "api",
                children: "Optional"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "../mxql/mxql-calculate#inject",
                children: "다음 문서"
              }), " 참조", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "예시, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "{ \"default\": \"ORDER {key : [oid],  sort : [desc] }\"}"
              })]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "param"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "api",
                children: "Optional"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "../mxql/mxql-guide#bind-parameter",
                children: "다음 문서"
              }), " 참조", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), " 예시 : ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "{ \"$oidFirst\": \"520111224\", \"$oidSecond\": \"1031483086\" }"
              })]
            })]
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["요청 본문에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stime"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "etime"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "$oidFirst"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "$oidSecond"
          }), " 항목은 사용자 환경에 맞는 시간, oid 값으로 적용해야 합니다."]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "조회된 데이터가 없는 경우"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-json",
              metastring: "title='ResponseBody Example 1'",
              children: "[]\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "조회된 데이터가 있는 경우"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-json",
              metastring: "title='ResponseBody Example 2'",
              children: "[\r\n  {\r\n    \"time\": 1639016640000,\r\n    \"pcode\": 101,\r\n    \"pname\": \"Virtual\",\r\n    \"okind\": -1085056726,\r\n    \"onode\": 334634079,\r\n    \"oname\": \"22136-8075\",\r\n    \"okindName\": \"ote-virtual-1\",\r\n    \"onodeName\": \"node-1\",\r\n    \"host_ip\": \"192.168.1.57\",\r\n    \"container\": \"ote-8075.service\",\r\n    \"pid\": 22206,\r\n    \"type\": \"java\",\r\n    \"containerKey\": 1876424218,\r\n    \"tx_count\": 58,\r\n    \"tx_error\": 0,\r\n    \"tx_time\": 1643.9138,\r\n    \"apdex_satisfied\": 41,\r\n    \"apdex_tolerated\": 16,\r\n    \"apdex_total\": 58,\r\n    \"tx_dbc_time\": 13.655172,\r\n    \"tx_sql_time\": 222.15517,\r\n    \"tx_httpc_time\": 717.4138,\r\n    \"sql_count\": 129,\r\n    \"sql_error\": 0,\r\n    \"sql_time\": 101.387596,\r\n    \"sql_fetch_count\": 37621,\r\n    \"sql_fetch_time\": 4.5187527E-4,\r\n    \"httpc_count\": 41,\r\n    \"httpc_error\": 0,\r\n    \"httpc_time\": 1073.4878,\r\n    \"active_tx_count\": 20,\r\n    \"active_tx_0\": 19,\r\n    \"active_tx_3\": 1,\r\n    \"active_tx_8\": 0,\r\n    \"tps\": 13.833333,\r\n    \"resp_time\": 1628,\r\n    \"arrival_rate\": 12.6,\r\n    \"pack_dropped\": 110,\r\n    \"metering\": 4,\r\n    \"_clock_delta_\": 180,\r\n    \"oid\": 1670734023\r\n  },\r\n  {\r\n    \"time\": 1639016640000,\r\n    \"pcode\": 101,\r\n    \"pname\": \"Virtual\",\r\n    \"okind\": -933992004,\r\n    \"onode\": 1693789385,\r\n    \"oname\": \"22134-8074\",\r\n    \"okindName\": \"ote-virtual-0\",\r\n    \"onodeName\": \"node-0\",\r\n    \"host_ip\": \"192.168.1.57\",\r\n    \"container\": \"ote-8074.service\",\r\n    \"pid\": 22202,\r\n    \"type\": \"java\",\r\n    \"containerKey\": 2024596057,\r\n    \"tx_count\": 56,\r\n    \"tx_error\": 0,\r\n    \"tx_time\": 1545.4464,\r\n    \"apdex_satisfied\": 37,\r\n    \"apdex_tolerated\": 18,\r\n    \"apdex_total\": 56,\r\n    \"tx_dbc_time\": 13.375,\r\n    \"tx_sql_time\": 209.01785,\r\n    \"tx_httpc_time\": 661.3214,\r\n    \"sql_count\": 125,\r\n    \"sql_error\": 0,\r\n    \"sql_time\": 77.808,\r\n    \"sql_fetch_count\": 41112,\r\n    \"sql_fetch_time\": 3.162094E-4,\r\n    \"httpc_count\": 39,\r\n    \"httpc_error\": 0,\r\n    \"httpc_time\": 1138.1538,\r\n    \"active_tx_count\": 18,\r\n    \"active_tx_0\": 14,\r\n    \"active_tx_3\": 4,\r\n    \"active_tx_8\": 0,\r\n    \"tps\": 10,\r\n    \"resp_time\": 2924,\r\n    \"arrival_rate\": 10.8,\r\n    \"pack_dropped\": 35,\r\n    \"metering\": 4,\r\n    \"_clock_delta_\": 128,\r\n    \"oid\": 1499132250\r\n  }\r\n]\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "path-api",
        children: "MXQL path API"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "POST"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/flush/mxql/path",
          children: "https://api.whatap.io/open/api/flush/mxql/path"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Request'",
          children: "# INJECT로 _pk_ 컬럼 추가, param은 사용하지 않음\r\ncurl --location 'https://api.whatap.io/open/api/flush/mxql/path' \\\r\n-H 'x-whatap-token: {{PROJECT API TOKEN}}' \\\r\n-H 'x-whatap-pcode: {{projectCode}}' \\\r\n-H 'Content-Type: application/json' \\\r\n-d '{\r\n  \"stime\": 1639016640000,\r\n  \"etime\": 1639016940000,\r\n  \"mql\": \"/app/act_tx/agent_with_tx\",\r\n  \"limit\": 2,\r\n  \"pageKey\": \"mxql\",\r\n  \"inject\": {\r\n    \"default\": \"CREATE {key : _pk_, value : okindName}\"\r\n  },\r\n  \"param\": {\r\n  }\r\n}'\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Key"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Value"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "stime"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "데이터 조회 시작 시간"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "etime"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "데이터 조회 끝 시간"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "mql"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "../mxql/mxql-guide#custom-query-saas",
                children: "다음 문서"
              }), " 참조"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "limit"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "최대 데이터 조회 수"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "pageKey"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["문자열 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mxql"
              }), " 고정값"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "inject"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "api",
                children: "Optional"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "../mxql/mxql-calculate#inject",
                children: "다음 문서"
              }), " 참조", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "예시 : ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "{ \"default\": \"ORDER {key : [oid],  sort : [desc] }\" }"
              })]
            })]
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["요청 본문에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stime"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "etime"
          }), " 항목은 사용자 환경에 맞는 시간으로 적용해야 합니다."]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "조회된 데이터가 없는 경우"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-json",
              metastring: "title='ResponseBody Example 1'",
              children: "[]\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "조회된 데이터가 있는 경우"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-json",
              metastring: "title='ResponseBody Example 1'",
              children: "[\r\n  {\r\n    \"pcode\": 101,\r\n    \"pname\": \"Virtual\",\r\n    \"oid\": -1348176005,\r\n    \"oname\": \"22137-8071\",\r\n    \"otype\": \"ap\",\r\n    \"okind\": -1085056726,\r\n    \"okindName\": \"ote-virtual-1\",\r\n    \"onode\": 334634079,\r\n    \"onodeName\": \"node-1\",\r\n    \"type\": \"ap\",\r\n    \"subtype\": \"java\",\r\n    \"version\": \"2.1.0 20211207u\",\r\n    \"os_name\": \"Linux\",\r\n    \"ip\": \"192.168.1.57\",\r\n    \"container_id\": 842770198,\r\n    \"metering\": 4,\r\n    \"status\": \"ok\",\r\n    \"normal\": 12,\r\n    \"slow\": 1,\r\n    \"verySlow\": 0,\r\n    \"total\": 13,\r\n    \"_pk_\": \"okindName\"\r\n  },\r\n  {\r\n    \"pcode\": 101,\r\n    \"pname\": \"Virtual\",\r\n    \"oid\": -883058050,\r\n    \"oname\": \"22141-8070\",\r\n    \"otype\": \"ap\",\r\n    \"okind\": -933992004,\r\n    \"okindName\": \"ote-virtual-0\",\r\n    \"onode\": 1693789385,\r\n    \"onodeName\": \"node-0\",\r\n    \"type\": \"ap\",\r\n    \"subtype\": \"java\",\r\n    \"version\": \"2.1.0 20211207u\",\r\n    \"os_name\": \"Linux\",\r\n    \"ip\": \"192.168.1.57\",\r\n    \"container_id\": 624997205,\r\n    \"metering\": 4,\r\n    \"status\": \"ok\",\r\n    \"normal\": 19,\r\n    \"slow\": 1,\r\n    \"verySlow\": 0,\r\n    \"total\": 20,\r\n    \"_pk_\": \"okindName\"\r\n  }\r\n]\n"
            })
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