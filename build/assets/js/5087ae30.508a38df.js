"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[24288],{

/***/ 52344:
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
	id: 'openapi-call-apm-stat-data',
	title: '통계 데이터 조회',
	description: '통계 데이터 조회(Application)를 위한 Open API에 대한 설명을 제공합니다.',
	tags: [
		'Open API',
		'API',
		'통계',
		'통계 데이터 조회',
		'애플리케이션',
		'애플리케이션 모니터링'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "apidoc/openapi-call-apm-stat-data",
  "title": "통계 데이터 조회",
  "description": "통계 데이터 조회(Application)를 위한 Open API에 대한 설명을 제공합니다.",
  "source": "@site/docs/apidoc/openapi-call-apm-stat-data.mdx",
  "sourceDirName": "apidoc",
  "slug": "/apidoc/openapi-call-apm-stat-data",
  "permalink": "/apidoc/openapi-call-apm-stat-data",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/apidoc/openapi-call-apm-stat-data.mdx",
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
      "label": "통계",
      "permalink": "/tags/통계"
    },
    {
      "inline": true,
      "label": "통계 데이터 조회",
      "permalink": "/tags/통계-데이터-조회"
    },
    {
      "inline": true,
      "label": "애플리케이션",
      "permalink": "/tags/애플리케이션"
    },
    {
      "inline": true,
      "label": "애플리케이션 모니터링",
      "permalink": "/tags/애플리케이션-모니터링"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "openapi-call-apm-stat-data",
    "title": "통계 데이터 조회",
    "description": "통계 데이터 조회(Application)를 위한 Open API에 대한 설명을 제공합니다.",
    "tags": [
      "Open API",
      "API",
      "통계",
      "통계 데이터 조회",
      "애플리케이션",
      "애플리케이션 모니터링"
    ]
  },
  "sidebar": "openapiSidebar",
  "previous": {
    "title": "Spot 정보 조회",
    "permalink": "/apidoc/openapi-call-apm-spot"
  },
  "next": {
    "title": "Spot 정보 조회",
    "permalink": "/apidoc/openapi-call-server-spot"
  }
};
const assets = {

};



const toc = [{
  "value": "파라미터 설정 안내",
  "id": "파라미터-설정-안내",
  "level": 2
}, {
  "value": "Exception",
  "id": "exception",
  "level": 2
}, {
  "value": "HTTP 외부 호출",
  "id": "http-외부-호출",
  "level": 2
}, {
  "value": "SQL",
  "id": "sql",
  "level": 2
}, {
  "value": "client IP",
  "id": "client-ip",
  "level": 2
}, {
  "value": "트랜잭션",
  "id": "트랜잭션",
  "level": 2
}, {
  "value": "Heap 사용량 조회",
  "id": "heap-사용량-조회",
  "level": 2
}, {
  "value": "통계 평균값 요청",
  "id": "통계-평균값-요청",
  "level": 3
}, {
  "value": "통계 최댓값 요청",
  "id": "통계-최댓값-요청",
  "level": 3
}, {
  "value": "에이전트 데이터 조회",
  "id": "에이전트-데이터-조회",
  "level": 2
}, {
  "value": "에이전트 개별 데이터 조회 예시",
  "id": "에이전트-개별-데이터-조회-예시",
  "level": 3
}, {
  "value": "에이전트 평균 데이터 조회 예시",
  "id": "에이전트-평균-데이터-조회-예시",
  "level": 3
}, {
  "value": "에이전트 지정 데이터 조회 예시",
  "id": "에이전트-지정-데이터-조회-예시",
  "level": 3
}, {
  "value": "에이전트 지정 평균 데이터 조회 예시",
  "id": "에이전트-지정-평균-데이터-조회-예시",
  "level": 3
}, {
  "value": "액티브 사용자(5분 단위)",
  "id": "액티브-사용자5분-단위",
  "level": 2
}, {
  "value": "액티브 사용자(1시간 단위)",
  "id": "액티브-사용자1시간-단위",
  "level": 2
}, {
  "value": "프로젝트 간 트랜잭션 호출 통계",
  "id": "프로젝트-간-트랜잭션-호출-통계",
  "level": 2
}, {
  "value": "도메인 호출 통계",
  "id": "도메인-호출-통계",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
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
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "파라미터-설정-안내",
        children: "파라미터 설정 안내"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "파라미터"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "stime"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "조회 시작 시간 UTC (UNIX epoch time, millisecond)"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "etime"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "조회 종료 시간 UTC (UNIX epoch time, millisecond)"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "filter"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["기본 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "m5"
              }), " 자동 설정, 시간 범위 내에 5분 통계를 가지고 올때 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "m5"
              }), "를 사용합니다.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "5초 통계는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "s5"
              }), ", 1시간 통계는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "h1"
              }), "을 사용합니다."]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "oid"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "특정 서버만 모니터링을 원할 경우 추가하세요."
            })]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "exception",
        children: "Exception"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/json/exception/",
          children: "https://api.whatap.io/open/api/json/exception/"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "stime"
        }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "etime"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/exception/1535554800000/1535641200000\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"records\": [\r\n    {\r\n      \"oids\": \"[-1459620666]\",\r\n      \"time\": 1535557500000,\r\n      \"classHash\": -1811136020,\r\n      \"count\": 14,\r\n      \"service\": \"/account/delete/dept/daegu\",\r\n      \"class\": \"java.sql.SQLException(0)\",\r\n      \"serviceHash\": 1900616259,\r\n      \"snapSeq\": \"6068699991557528332\",\r\n      \"msg\": \"Sql Exception\"\r\n    },\r\n    (...)\r\n  ],\r\n  \"total\": 2063\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "http-외부-호출",
        children: "HTTP 외부 호출"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/json/httpc/",
          children: "https://api.whatap.io/open/api/json/httpc/"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "stime"
        }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "etime"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/httpc/1535554800000/1535641200000\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"records\": [\r\n    {\r\n      \"Sum\": 22628,\r\n      \"Port\": 10002,\r\n      \"Url\": \"/remote/account/save/employee/kwangju\",\r\n      \"Host\": \"127.0.0.1\",\r\n      \"Max\": 1815,\r\n      \"Stdev\": \"247.95\",\r\n      \"Actived\": 0,\r\n      \"Avg\": 1131,\r\n      \"HostHash\": -675813464,\r\n      \"Min\": 1002,\r\n      \"Error\": 0,\r\n      \"Total\": 20,\r\n      \"UrlHash\": -243814510\r\n    },\r\n    (...)\r\n  ],\r\n  \"total\": 4923\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "호스트(host)가 127.0.0.1이면서 포트(port)가 1007인 HTTP 외부 호출 필터링"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/httpc/1543219200000/1543478400000/filter/host/127.0.0.1/port/10007\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"records\": [\r\n    {\r\n      \"Service\": \"/sales/remove/unit/kwangju\",\r\n      \"Host\": \"127.0.0.1\",\r\n      \"HostHash\": -675813464,\r\n      \"Avg\": 1080,\r\n      \"Error\": 0,\r\n      \"Sum\": 2411644,\r\n      \"Port\": 10007,\r\n      \"Service_hash\": -1003301916,\r\n      \"Url\": \"/remote/account/save/employee/seoul\",\r\n      \"Max\": 2442,\r\n      \"Stdev\": \"159.01\",\r\n      \"UrlHash\": 180997672,\r\n      \"Total\": 2233,\r\n      \"Min\": 1001\r\n    },\r\n    {\r\n      \"Service\": \"/product/delete/employee/daejun\",\r\n      \"Host\": \"127.0.0.1\",\r\n      \"HostHash\": -675813464,\r\n      \"Avg\": 1085,\r\n      \"Error\": 0,\r\n      \"Sum\": 2075036,\r\n      \"Port\": 10007,\r\n      \"Service_hash\": 2100205994,\r\n      \"Url\": \"/remote/account/save/employee/pusan\",\r\n      \"Max\": 2462,\r\n      \"Stdev\": \"173.06\",\r\n      \"UrlHash\": -924053750,\r\n      \"Total\": 1911,\r\n      \"Min\": 1001\r\n    },\r\n    (...)\r\n  ],\r\n  \"total\": 1080\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "sql",
        children: "SQL"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/json/sql/",
          children: "https://api.whatap.io/open/api/json/sql/"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "stime"
        }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "etime"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/sql/1535554800000/1535641200000\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"records\": [\r\n    {\r\n      \"time_max\": 4164,\r\n      \"dbcHash\": 450678784,\r\n      \"db\": \"jdbc:mysql://localhost:3306,localhost:3310/fake\", \"time_min\": 0,\r\n      \"fetch_count\": 0,\r\n      \"hash\": 796628118,\r\n      \"fetch_time\": 0,\r\n      \"sql_crud\": 0,\r\n      \"count_total\": 5224,\r\n      \"count_error\": 0,\r\n      \"sql\": \"update table set x=# where key=#\",\r\n      \"time_sum\": 581391,\r\n      \"time_avg\": 111,\r\n      \"time_std\": \"240.79\",\r\n      \"count_actived\": 0\r\n    },\r\n    (...)\r\n  ],\r\n  \"total\": 130\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "client-ip",
        children: "client IP"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/json/remote/",
          children: "https://api.whatap.io/open/api/json/remote/"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "stime"
        }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "etime"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/remote/1535554800000/1535641200000\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"records\": [\r\n    {\r\n      \"count\": 86,\r\n      \"city\": \"Winnipeg\",\r\n      \"country\": \"CA (CANADA)\",\r\n      \"ip\": \"140.193.83.68\"\r\n    },\r\n    (...)\r\n  ],\r\n  \"total\": 1000\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "와탭은 클라이언트와 관련한 정보를 기본 저장합니다."
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "트랜잭션",
        children: "트랜잭션"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/json/transaction/",
          children: "https://api.whatap.io/open/api/json/transaction/"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "stime"
        }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "etime"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/transaction/1535554800000/1535641200000\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"records\": [\r\n    {\r\n        \"apdex_tolerated\": 98,\r\n        \"apdex_satisfied\": 279,\r\n        \"apdex\": 0.830379746835443,\r\n        \"time_max\": 44735,\r\n        \"sql_fetch_time\": 363,\r\n        \"sql_time\": 2628663,\r\n        \"count\": 10743,\r\n        \"error\": 29,\r\n        \"sql_count\": 22635,\r\n        \"hash\": -1485863373,\r\n        \"sql_fetch\": 6741607,\r\n        \"httpc_avg\": 1084,\r\n        \"cpu_avg\": 0,\r\n        \"time_sum\": 19911778,\r\n        \"time_avg\": 1853,\r\n        \"httpc_count\": 7072,\r\n        \"service\": \"/account/save/employee/seoul\",\r\n        \"mem_avg\": 0\r\n    },\r\n    (...)\r\n  ],\r\n  \"total\": 1080\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "heap-사용량-조회",
        children: "Heap 사용량 조회"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "heap 사용량에 대한 통계를 조회할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["조회 시간(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stime"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "etime"
          }), ")은 한 시간 이내로 제한하며, ms(millisecond) 단위 입니다."]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "통계-평균값-요청",
        children: "통계 평균값 요청"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/json/heap_use/",
          children: "https://api.whatap.io/open/api/json/heap_use/"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "stime"
        }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "etime"
        }), "/avg"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/heap_use/{sitme}/{etime}/avg\"\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "통계-최댓값-요청",
        children: "통계 최댓값 요청"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/json/heap_use/",
          children: "https://api.whatap.io/open/api/json/heap_use/"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "stime"
        }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "etime"
        }), "/max"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/heap_use/{sitme}/{etime}/max\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"pcode\": 5490,\r\n  \"stime\": 1677747600000,\r\n  \"etime\": 1677749594269,\r\n  \"timeMerge\": \"avg\",\r\n  \"unit\": \"byte\",\r\n  \"data\": [\r\n    {\r\n        \"oid\": -1143239575,\r\n        \"oname\": \"demo-8101\",\r\n        \"heap_use\": \"36121554.72\"\r\n    },\r\n    {\r\n        \"oid\": -857948929,\r\n        \"oname\": \"demo-8105\",\r\n        \"heap_use\": \"37498925.139\"\r\n    },\r\n    (...)\r\n  ]\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Response Field"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Field Type"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pcode"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "api",
                children: "number"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "조회한 프로젝트 코드"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "stime"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "api",
                children: "number"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "통계 조회 시작 시간"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "etime"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "api",
                children: "number"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "통계 조회 종료 시간"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "timeMerge"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "api",
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "통계 조회 기간의 데이터 병합 전략"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "unit"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "api",
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "힙 사용량 단위"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "data"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "api",
                children: "array"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "통계 데이터"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "oid"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "api",
                children: "number"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "에이전트 ID"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "oname"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "api",
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "에이전트 이름"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "heap_use"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "api",
                children: "string"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "힙 사용량"
            })]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "에이전트-데이터-조회",
        children: "에이전트 데이터 조회"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Thread Count"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/thread_count/",
                children: "https://api.whatap.io/open/api/json/thread_count/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/thread_count/",
                children: "https://api.whatap.io/open/api/json/thread_count/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "oids"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/thread_count/",
                children: "https://api.whatap.io/open/api/json/thread_count/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/avg"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/thread_count/",
                children: "https://api.whatap.io/open/api/json/thread_count/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/avg/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "oids"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Thread Daemon Count"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/thread_daemon/",
                children: "https://api.whatap.io/open/api/json/thread_daemon/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/thread_daemon/",
                children: "https://api.whatap.io/open/api/json/thread_daemon/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "oids"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/thread_daemon/",
                children: "https://api.whatap.io/open/api/json/thread_daemon/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/avg"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/thread_daemon/",
                children: "https://api.whatap.io/open/api/json/thread_daemon/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/avg/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "oids"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Thread Peak Count"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/thread_peak_count/",
                children: "https://api.whatap.io/open/api/json/thread_peak_count/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/thread_peak_count/",
                children: "https://api.whatap.io/open/api/json/thread_peak_count/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "oids"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/thread_peak_count/",
                children: "https://api.whatap.io/open/api/json/thread_peak_count/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/avg"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/thread_peak_count/",
                children: "https://api.whatap.io/open/api/json/thread_peak_count/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/avg/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "oids"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Thread Pool Count"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/threadpool_active/",
                children: "https://api.whatap.io/open/api/json/threadpool_active/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/threadpool_active/",
                children: "https://api.whatap.io/open/api/json/threadpool_active/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "oids"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/threadpool_active/",
                children: "https://api.whatap.io/open/api/json/threadpool_active/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/avg"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/threadpool_active/",
                children: "https://api.whatap.io/open/api/json/threadpool_active/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/avg/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "oids"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Thread Pool Queue Count"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/threadpool_queue/",
                children: "https://api.whatap.io/open/api/json/threadpool_queue/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/threadpool_queue/",
                children: "https://api.whatap.io/open/api/json/threadpool_queue/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "oids"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/threadpool_queue/",
                children: "https://api.whatap.io/open/api/json/threadpool_queue/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/avg"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/threadpool_queue/",
                children: "https://api.whatap.io/open/api/json/threadpool_queue/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/avg/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "oids"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Apdex"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/apdex/",
                children: "https://api.whatap.io/open/api/json/apdex/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/apdex/",
                children: "https://api.whatap.io/open/api/json/apdex/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "oids"
              })]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/apdex/",
                children: "https://api.whatap.io/open/api/json/apdex/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/avg"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "apitype",
                children: "GET"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://api.whatap.io/open/api/json/apdex/",
                children: "https://api.whatap.io/open/api/json/apdex/"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "stime"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "etime"
              }), "/avg/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                children: "oids"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "에이전트-개별-데이터-조회-예시",
        children: "에이전트 개별 데이터 조회 예시"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/thread_count/1536050100000/1536050700000\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response' {6,13} showLineNumbers",
          children: "{\r\n  \"pcode\": 1234570141,\r\n  \"type\": \"thread_count\",\r\n  \"stime\": 1536050100000,\r\n  \"etime\": 1536050700000,\r\n  \"interval\": 300, // data point 간격\r\n  \"timeMerge\": \"sum\",\r\n  \"objects\": [\r\n    {\r\n      \"oname\": \"8080\",\r\n      \"oid\": -1234257485,\r\n      \"series\": [\r\n        [\r\n          1536050100000, // 시계열 timestamp\r\n          95.2\r\n        ],\r\n        [\r\n          1536050400000,\r\n          85.3\r\n        ],\r\n        [\r\n          1536050700000,\r\n          91.43\r\n        ]\r\n      ]\r\n    },\r\n    (...)\r\n    {\r\n      \"oname\": \"TC-29-96-8082\",\r\n      \"oid\": 1482741919,\r\n      \"series\": [\r\n        [\r\n          1536050100000,\r\n          98.11\r\n        ],\r\n        [\r\n          1536050400000,\r\n          81.44\r\n        ],\r\n        [\r\n          1536050700000,\r\n          90.05\r\n        ]\r\n      ]\r\n    }\r\n  ]\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "에이전트-평균-데이터-조회-예시",
        children: "에이전트 평균 데이터 조회 예시"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/thread_count/1536050100000/1536050700000/avg\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response' {6,10-11} showLineNumbers",
          children: "{\r\n  \"pcode\": 1234570141,\r\n  \"type\": \"thread_count\",\r\n  \"stime\": 1536050100000,\r\n  \"etime\": 1536050700000,\r\n  \"interval\": 300, // data point 간격\r\n  \"timeMerge\": \"sum\",\r\n  \"objectMerge\": \"avg\",\r\n  \"series\": [\r\n    [\r\n      1536050100000, // 시계열 timestamp\r\n      122.86 // 전체 에이전트 평균 데이터\r\n    ],\r\n    [\r\n      1536050400000,\r\n      99.26\r\n    ],\r\n    [\r\n      1536050700000,\r\n      109.68\r\n    ]\r\n  ]\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "에이전트-지정-데이터-조회-예시",
        children: "에이전트 지정 데이터 조회 예시"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/thread_count/1536050100000/1536050700000/-1050048219,-1459620666\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response' {10,24} showLineNumbers",
          children: "{\r\n  \"pcode\": 1234570141,\r\n  \"type\": \"thread_count\",\r\n  \"stime\": 1536050100000,\r\n  \"etime\": 1536050700000,\r\n  \"interval\": 300,\r\n  \"timeMerge\": \"sum\",\r\n  \"objects\": [\r\n    {\r\n      \"oname\": \"8081\",\r\n      \"oid\": -1050048219, // 지정한 에이전트 정보 조회\r\n      \"series\": [\r\n        [\r\n          1536050100000,\r\n          97.75\r\n        ],\r\n        [\r\n          1536050400000,\r\n          98\r\n        ]\r\n      ]\r\n    },\r\n    {\r\n      \"oname\": \"8073\",\r\n      \"oid\": -1459620666, // 지정한 에이전트 정보 조회\r\n      \"series\": [\r\n        [\r\n          1536050100000,\r\n          137.23\r\n        ],\r\n        [\r\n          1536050400000\r\n          102.53\r\n        ],\r\n        [\r\n          1536050700000,\r\n          120.2\r\n        ]\r\n      ]\r\n    }\r\n  ]\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "에이전트-지정-평균-데이터-조회-예시",
        children: "에이전트 지정 평균 데이터 조회 예시"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/thread_count/1536050100000/1536050700000/avg/-1050048219,-1459620666\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response' {11} showLineNumbers",
          children: "{\r\n  \"pcode\": 1234570141,\r\n  \"type\": \"thread_count\",\r\n  \"stime\": 1536050100000,\r\n  \"etime\": 1536050700000,\r\n  \"interval\": 300,\r\n  \"timeMerge\": \"sum\",\r\n  \"objectMerge\": \"avg\",\r\n  \"series\": [\r\n    [\r\n      1536050100000,\r\n      117.49 // 지정한 에이전트들의 평균 지표 조회\r\n    ],\r\n    [\r\n      1536050400000,\r\n      100.26\r\n    ],\r\n    [\r\n      1536050700000,\r\n      120.2\r\n    ]\r\n  ]\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "액티브-사용자5분-단위",
        children: "액티브 사용자(5분 단위)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/json/visitor_5m/",
          children: "https://api.whatap.io/open/api/json/visitor_5m/"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "stime"
        }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "etime"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/visitor_5m/1554444000000/1554076800000\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response' {4} showLineNumbers",
          children: "{\r\n  \"data\": [\r\n    [\r\n      1554444005000, // 1시간 단위 (5*60*1000)\r\n      12\r\n    ],\r\n    [\r\n      1554444010000,\r\n      12\r\n    ],\r\n    (...)\r\n  ],\r\n  \"pcode\": 3000000079,\r\n  \"stime\": 1554444000000,\r\n  \"etime\": 1554444300000,\r\n  \"total\": 59\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["와탭은 최근 5분 이내에 트랜잭션을 일으킨 사용자를 카운팅해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "동시 접속 사용자"
          }), "를 측정합니다."]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "액티브-사용자1시간-단위",
        children: "액티브 사용자(1시간 단위)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://api.whatap.io/open/api/json/visitor_h/",
          children: "https://api.whatap.io/open/api/json/visitor_h/"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "stime"
        }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          children: "etime"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -L -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/api/json/visitor_h/1554444000000/1554454800000\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response' {4} showLineNumbers",
          children: "{\r\n  \"data\": [\r\n    [\r\n      1554444000000, // 1시간 단위 (60*60*1000)\r\n      18\r\n    ],\r\n    [\r\n      1554447600000,\r\n      16\r\n    ],\r\n    (...)\r\n  ],\r\n  \"pcode\": 3000000079,\r\n  \"stime\": 1554444000000,\r\n  \"etime\": 1554454800000,\r\n  \"total\": 3\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "프로젝트-간-트랜잭션-호출-통계",
        children: "프로젝트 간 트랜잭션 호출 통계"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "apitype",
            children: "GET"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://api.whatap.io/open/api/json/tx_caller/",
            children: "https://api.whatap.io/open/api/json/tx_caller/"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "stime"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "etime"
          })]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "apitype",
            children: "GET"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://api.whatap.io/open/api/json/tx_caller/",
            children: "https://api.whatap.io/open/api/json/tx_caller/"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "stime"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "etime"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "oids"
          })]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "apitype",
            children: "GET"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://api.whatap.io/open/api/json/tx_caller/",
            children: "https://api.whatap.io/open/api/json/tx_caller/"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "stime"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "etime"
          }), "/filter/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "filterkey"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "filterval"
          })]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "apitype",
            children: "GET"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://api.whatap.io/open/api/json/tx_caller/",
            children: "https://api.whatap.io/open/api/json/tx_caller/"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "stime"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "etime"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "oids"
          }), "/filter/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "filterkey"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "filterval"
          })]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "filterkey"
            }), ": 조회 조건 키 (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "caller_pcode"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "caller_spec"
            }), " (버전), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "caller_url"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "spec"
            }), " (버전), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "url"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "filterval"
            }), ": 조회 조건 (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "filterkey"
            }), "가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "caller_url"
            }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "url"
            }), "인 경우 base64로 인코딩)"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "도메인-호출-통계",
        children: "도메인 호출 통계"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "apitype",
            children: "GET"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://api.whatap.io/open/api/json/tx_domain/",
            children: "https://api.whatap.io/open/api/json/tx_domain/"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "stime"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "etime"
          })]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "apitype",
            children: "GET"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://api.whatap.io/open/api/json/tx_domain/",
            children: "https://api.whatap.io/open/api/json/tx_domain/"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "stime"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "etime"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "oids"
          })]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "apitype",
            children: "GET"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://api.whatap.io/open/api/json/tx_domain/",
            children: "https://api.whatap.io/open/api/json/tx_domain/"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "stime"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "etime"
          }), "/filter/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "filterkey"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "filterval"
          })]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "apitype",
            children: "GET"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://api.whatap.io/open/api/json/tx_domain/",
            children: "https://api.whatap.io/open/api/json/tx_domain/"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "stime"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "etime"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "oids"
          }), "/filter/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "filterkey"
          }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            children: "filterval"
          })]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "filterkey"
            }), ": 조회 조건 키 (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "caller_pcode"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "caller_spec"
            }), " (버전), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "caller_url"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "spec"
            }), " (버전), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "url"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "filterval"
            }), ": 조회 조건 (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "filterkey"
            }), "가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "caller_url"
            }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "url"
            }), "인 경우 base64로 인코딩)"]
          }), "\n"]
        })
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