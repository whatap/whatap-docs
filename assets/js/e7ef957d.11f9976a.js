"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[87757],{

/***/ 21673:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28453);
/* harmony import */ var _site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67068);
/* harmony import */ var _site_src_components_UItext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5379);


const frontMatter = {
	id: 'java-2_1_1',
	title: 'Java Agent v2.1.1',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar'
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/java/java-2_1_1",
  "title": "Java Agent v2.1.1",
  "description": "2022-07-12",
  "source": "@site/docs/release-notes/java/java-2.1.1.mdx",
  "sourceDirName": "release-notes/java",
  "slug": "/release-notes/java/java-2_1_1",
  "permalink": "/whatap-docs/release-notes/java/java-2_1_1",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/java/java-2.1.1.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "java-2_1_1",
    "title": "Java Agent v2.1.1",
    "toc_max_heading_level": 2,
    "displayed_sidebar": "releaseSidebar"
  },
  "sidebar": "releaseSidebar"
};
const assets = {

};





const toc = [{
  "value": "2022-07-12",
  "id": "2022-07-12",
  "level": 2
}, {
  "value": "신기능",
  "id": "신기능",
  "level": 3
}, {
  "value": "느린 http, sql 발생시 알림 메세지 전송",
  "id": "느린-http-sql-발생시-알림-메세지-전송",
  "level": 4
}, {
  "value": "트랜잭션, http 호출의 에러 수준 조정 기능",
  "id": "트랜잭션-http-호출의-에러-수준-조정-기능",
  "level": 4
}, {
  "value": "2022-06-30",
  "id": "2022-06-30",
  "level": 2
}, {
  "value": "업데이트",
  "id": "업데이트",
  "level": 3
}, {
  "value": "자바 에이전트 메타태그 옵션명 수정",
  "id": "자바-에이전트-메타태그-옵션명-수정",
  "level": 4
}, {
  "value": "버그",
  "id": "버그",
  "level": 3
}, {
  "value": "컨테이너에서 ID 추출 오류 수정",
  "id": "컨테이너에서-id-추출-오류-수정",
  "level": 4
}, {
  "value": "2022-06-22",
  "id": "2022-06-22",
  "level": 2
}, {
  "value": "업데이트",
  "id": "업데이트-1",
  "level": 3
}, {
  "value": "에이전트 설정의 license 키 옵션 수정",
  "id": "에이전트-설정의-license-키-옵션-수정",
  "level": 4
}, {
  "value": "2022-06-16",
  "id": "2022-06-16",
  "level": 2
}, {
  "value": "업데이트",
  "id": "업데이트-2",
  "level": 3
}, {
  "value": "에이전트 실행 로고 수정",
  "id": "에이전트-실행-로고-수정",
  "level": 4
}, {
  "value": "비동기 http 호출 에러 알림 메세지 수정",
  "id": "비동기-http-호출-에러-알림-메세지-수정",
  "level": 4
}, {
  "value": "버그",
  "id": "버그-1",
  "level": 3
}, {
  "value": "클래스 시그니처 확인 버그 수정",
  "id": "클래스-시그니처-확인-버그-수정",
  "level": 4
}, {
  "value": "2022-05-18",
  "id": "2022-05-18",
  "level": 2
}, {
  "value": "신기능",
  "id": "신기능-1",
  "level": 3
}, {
  "value": "netstat 기능 추가",
  "id": "netstat-기능-추가",
  "level": 4
}, {
  "value": "업데이트",
  "id": "업데이트-3",
  "level": 3
}, {
  "value": "에러 알림 설정 업데이트",
  "id": "에러-알림-설정-업데이트",
  "level": 4
}, {
  "value": "버그",
  "id": "버그-2",
  "level": 3
}, {
  "value": "에이전트 로그 출력시 에러 수정",
  "id": "에이전트-로그-출력시-에러-수정",
  "level": 4
}, {
  "value": "jdk 15에서 클래스 상세보기 에러 수정",
  "id": "jdk-15에서-클래스-상세보기-에러-수정",
  "level": 4
}, {
  "value": "2022-05-16",
  "id": "2022-05-16",
  "level": 2
}, {
  "value": "업데이트",
  "id": "업데이트-4",
  "level": 3
}, {
  "value": "에러 알림 메세지 내용 추가",
  "id": "에러-알림-메세지-내용-추가",
  "level": 4
}, {
  "value": "버그",
  "id": "버그-3",
  "level": 3
}, {
  "value": "sql 추적시 LocalDate 추적하지 못하는 문제",
  "id": "sql-추적시-localdate-추적하지-못하는-문제",
  "level": 4
}, {
  "value": "2022-05-11",
  "id": "2022-05-11",
  "level": 2
}, {
  "value": "업데이트",
  "id": "업데이트-5",
  "level": 3
}, {
  "value": "에러 알림 메세지 내용 추가",
  "id": "에러-알림-메세지-내용-추가-1",
  "level": 4
}, {
  "value": "2022-04-25",
  "id": "2022-04-25",
  "level": 2
}, {
  "value": "신기능",
  "id": "신기능-2",
  "level": 3
}, {
  "value": "Alibaba Druid ConnectionPool 추적 기능 추가",
  "id": "alibaba-druid-connectionpool-추적-기능-추가",
  "level": 4
}, {
  "value": "Http Call 에러 발생시 알림 기능 추가",
  "id": "http-call-에러-발생시-알림-기능-추가",
  "level": 4
}, {
  "value": "신기능",
  "id": "신기능-3",
  "level": 3
}, {
  "value": "Http Call 에러 알림 기능 추가",
  "id": "http-call-에러-알림-기능-추가",
  "level": 4
}, {
  "value": "2022-03-18",
  "id": "2022-03-18",
  "level": 2
}, {
  "value": "업데이트",
  "id": "업데이트-6",
  "level": 3
}, {
  "value": "데이터 베이스 호출 URL 저장",
  "id": "데이터-베이스-호출-url-저장",
  "level": 4
}, {
  "value": "데이터 베이스 호출 hash값 제거",
  "id": "데이터-베이스-호출-hash값-제거",
  "level": 4
}, {
  "value": "신기능",
  "id": "신기능-4",
  "level": 3
}, {
  "value": "연계 서비스 상태 추적 기능 추가",
  "id": "연계-서비스-상태-추적-기능-추가",
  "level": 4
}, {
  "value": "2022-02-18",
  "id": "2022-02-18",
  "level": 2
}, {
  "value": "버그",
  "id": "버그-4",
  "level": 3
}, {
  "value": "Http 호출 에러 시간설정 버그 수정",
  "id": "http-호출-에러-시간설정-버그-수정",
  "level": 4
}, {
  "value": "업데이트",
  "id": "업데이트-7",
  "level": 3
}, {
  "value": "엑티브 스택의 쓰레드 이름 표시 설정 추가",
  "id": "엑티브-스택의-쓰레드-이름-표시-설정-추가",
  "level": 4
}, {
  "value": "비동기 쓰레드 이름을 표시 설정 추가",
  "id": "비동기-쓰레드-이름을-표시-설정-추가",
  "level": 4
}, {
  "value": "2022-02-11",
  "id": "2022-02-11",
  "level": 2
}, {
  "value": "버그",
  "id": "버그-5",
  "level": 3
}, {
  "value": ".x 플러그인 int 인식 오류 수정",
  "id": "x-플러그인-int-인식-오류-수정",
  "level": 4
}, {
  "value": "배치 에이전트 getResultSet 오류 수정",
  "id": "배치-에이전트-getresultset-오류-수정",
  "level": 4
}, {
  "value": "업데이트",
  "id": "업데이트-8",
  "level": 3
}, {
  "value": "logging을 포함한 파일이름에 대한 자동화 옵션 추가",
  "id": "logging을-포함한-파일이름에-대한-자동화-옵션-추가",
  "level": 4
}, {
  "value": "자바 에이전트에서 로그에 트랜잭션 정보를 추가",
  "id": "자바-에이전트에서-로그에-트랜잭션-정보를-추가",
  "level": 4
}, {
  "value": "HttpClient Timeout 적용 및 에러 처리",
  "id": "httpclient-timeout-적용-및-에러-처리",
  "level": 4
}, {
  "value": "jmx pool 설정 추가",
  "id": "jmx-pool-설정-추가",
  "level": 4
}, {
  "value": "배치 에이전트 active 시작 부분 수정",
  "id": "배치-에이전트-active-시작-부분-수정",
  "level": 4
}, {
  "value": "2022-01-12",
  "id": "2022-01-12",
  "level": 2
}, {
  "value": "업데이트",
  "id": "업데이트-9",
  "level": 3
}, {
  "value": "DB call 에러 건수를 실시간 통계에 추가",
  "id": "db-call-에러-건수를-실시간-통계에-추가",
  "level": 4
}, {
  "value": "Http, DB 연결 실시간 로그 추가",
  "id": "http-db-연결-실시간-로그-추가",
  "level": 4
}, {
  "value": "에이전트 로그에서 지정한 oname 표시",
  "id": "에이전트-로그에서-지정한-oname-표시",
  "level": 4
}, {
  "value": "jdbc url 추출 구분자 추가",
  "id": "jdbc-url-추출-구분자-추가",
  "level": 4
}, {
  "value": "logsink, log4j 플러그인을 사용하는 경우 자동 인식 기능 추가",
  "id": "logsink-log4j-플러그인을-사용하는-경우-자동-인식-기능-추가",
  "level": 4
}, {
  "value": "logsink 수집데이터 추가",
  "id": "logsink-수집데이터-추가",
  "level": 4
}, {
  "value": "2022-01-03",
  "id": "2022-01-03",
  "level": 2
}, {
  "value": "업데이트",
  "id": "업데이트-10",
  "level": 3
}, {
  "value": "Collection 모니터링 수정",
  "id": "collection-모니터링-수정",
  "level": 4
}, {
  "value": "2021-12-21",
  "id": "2021-12-21",
  "level": 2
}, {
  "value": "업데이트",
  "id": "업데이트-11",
  "level": 3
}, {
  "value": "thread 중단 설정 추가",
  "id": "thread-중단-설정-추가",
  "level": 4
}, {
  "value": "http header 에서 &#39;Cookie&#39; 항목 제외",
  "id": "http-header-에서-cookie-항목-제외",
  "level": 4
}, {
  "value": "2021-12-17",
  "id": "2021-12-17",
  "level": 2
}, {
  "value": "업데이트",
  "id": "업데이트-12",
  "level": 3
}, {
  "value": "weaving 설정 추가",
  "id": "weaving-설정-추가",
  "level": 4
}, {
  "value": "agent 환경 변수 제외값 추가",
  "id": "agent-환경-변수-제외값-추가",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-07-12",
        children: "2022-07-12"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "신기능",
        children: "신기능"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "느린-http-sql-발생시-알림-메세지-전송",
        children: "느린 http, sql 발생시 알림 메세지 전송"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "느린 http 호출이나 sql 호출이 일어나는 경우 알림 메세지를 전송하도록 기능을 추가하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "트랜잭션-http-호출의-에러-수준-조정-기능",
        children: "트랜잭션, http 호출의 에러 수준 조정 기능"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "트랜잭션이나 http 호출의 상태를 정상 호출로 인식할 수 있도록 기능을 추가하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 기본값 (default)\ntransaction_status_mode=normal\nhttpc_status_mode=normal\n\n# 에러 무시\ntransaction_status_mode=info\nhttpc_status_mode=info\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-06-30",
        children: "2022-06-30"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "업데이트",
        children: "업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "자바-에이전트-메타태그-옵션명-수정",
        children: "자바 에이전트 메타태그 옵션명 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "자바 에이전트 메타태그 옵션명을 수정하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 기본값 (default)\nagent_meta_tags_enabled=true\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "버그",
        children: "버그"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "컨테이너에서-id-추출-오류-수정",
        children: "컨테이너에서 ID 추출 오류 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "컨테이너 환경에서 ID 추출 오류를 수정하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-06-22",
        children: "2022-06-22"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "업데이트-1",
        children: "업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "에이전트-설정의-license-키-옵션-수정",
        children: "에이전트 설정의 license 키 옵션 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "whatap.conf에서 license와 accesskey 옵션을 모두 활용할 수 있도록 수정하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 동일한 기능\nlicense=\naccesskey=\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-06-16",
        children: "2022-06-16"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "업데이트-2",
        children: "업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "에이전트-실행-로고-수정",
        children: "에이전트 실행 로고 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "자바 에이전트 실행시 로고 내용을 수정하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "The Best Observability in Java\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "비동기-http-호출-에러-알림-메세지-수정",
        children: "비동기 http 호출 에러 알림 메세지 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "비동기 http 호출 에러 발생시 status code를 표시하도록 알림 메세지를 수정하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "버그-1",
        children: "버그"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "클래스-시그니처-확인-버그-수정",
        children: "클래스 시그니처 확인 버그 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에이전트 설정 메뉴의 클래스 시그니처 표시 요청할 때 NullPointException 발생하는 것을 수정하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-05-18",
        children: "2022-05-18"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "신기능-1",
        children: "신기능"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "netstat-기능-추가",
        children: "netstat 기능 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "oshi 라이브러리 활용하여 netstat 기능을 추가하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "업데이트-3",
        children: "업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "에러-알림-설정-업데이트",
        children: "에러 알림 설정 업데이트"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "트랜잭션 에러 알림 관련 설정을 추가하고 설정이름을 수정하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 기본값\n# 에러 알림 기능 활성화 여부\nexception_alert_enabled=false\n\n# 트랜잭션 에러 알림 활성화 여부\nexception_alert_service_enabled=false\n\n# http 호출시 에러 알림 활성화 여부\nexception_alert_httpc_enabled=false\n\n# jdbc 호출시 에러 알림 활성화 여부\nexception_alert_jdbc_enabled=false\n\n# 에러 알림 메세지에 표시한 스택의 길이\nexception_alert_stack_size=50\n\n# 에러 알림 메세지 비활성화 시간 = 5분 (30000ms)\nexception_alert_silent_time=300000\n\n# 트랜잭션 에러 알림에서 무시할 status code\nstatus_alert_ignore=403\n\n# 트랜잭션 에러 알림에서 무시할 url:status_code 조합\nstatus_alert_ignore_set=/api/test/timeout:408\n\n# http call 에러 알림에서 무시한 status code\nhttpc_status_alert_ignore=408,500\n\n# http call 에러 알림에서 무시한 url:status code 조합\nhttpc_status_url_alert_ignore_set=/api/test/timeout:408\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "버그-2",
        children: "버그"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "에이전트-로그-출력시-에러-수정",
        children: "에이전트 로그 출력시 에러 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Timestamp 로그 기록시 에러가 나는 문제를 수정하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "jdk-15에서-클래스-상세보기-에러-수정",
        children: "jdk 15에서 클래스 상세보기 에러 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에이전트 설정 화면에서 클래스 시그니처를 조회하지 못하는 현상을 수정하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-05-16",
        children: "2022-05-16"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "업데이트-4",
        children: "업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "에러-알림-메세지-내용-추가",
        children: "에러 알림 메세지 내용 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에러 알림 메세지에 트랜잭션의 url 정보를 추가하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "버그-3",
        children: "버그"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "sql-추적시-localdate-추적하지-못하는-문제",
        children: "sql 추적시 LocalDate 추적하지 못하는 문제"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "java.time.LocalDate"
        }), " 추적하지 못하는 문제 수정"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-05-11",
        children: "2022-05-11"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "업데이트-5",
        children: "업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "에러-알림-메세지-내용-추가-1",
        children: "에러 알림 메세지 내용 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에러 알림 메세지에 status code 추가하였습니다. 에러 알림 메세지에 무시한 알림의 수를 추가하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-04-25",
        children: "2022-04-25"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "신기능-2",
        children: "신기능"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "alibaba-druid-connectionpool-추적-기능-추가",
        children: "Alibaba Druid ConnectionPool 추적 기능 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Alibaba Druid connection pool을 추적할 수 있도록 기능을 추가하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 기본값\ndruid_pool_enabled=false\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "http-call-에러-발생시-알림-기능-추가",
        children: "Http Call 에러 발생시 알림 기능 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Http Call 에러 발생시 알림을 보내는 기능 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 기본값\nhttpc_event_detail_enable=false\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "2022-03-24"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "신기능-3",
        children: "신기능"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "http-call-에러-알림-기능-추가",
        children: "Http Call 에러 알림 기능 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Http 호출시에 에러가 발생하면 알림을 받을 수 있도록 기능을 추가하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "exception_alert_enabled"
        }), " 옵션을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "true"
        }), "로 설정하여 기능을 활성화 할 수 있고, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "exception_alert_stack_size"
        }), " 옵션으로 지정한 값에 맞게 에러 스택을 알림 메세지로 받을 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["한번 알림이 발생하게 되면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "exception_alert_silent_time"
        }), " 옵션으로 지정한 기간만큼 에러 알림을 비활성화할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 기본값\nexception_alert_enabled=false\nexception_alert_buffer_size=5\nexception_alert_stack_size=50\n\n# 5분 (30000ms)\nexception_alert_silent_time=300000\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-03-18",
        children: "2022-03-18"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "업데이트-6",
        children: "업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "데이터-베이스-호출-url-저장",
        children: "데이터 베이스 호출 URL 저장"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "데이터베이스 호출 URL을 저장하도록 수정하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "데이터-베이스-호출-hash값-제거",
        children: "데이터 베이스 호출 hash값 제거"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "데이터베이스 호출 hash값을 ERROR 텍스트에서 제거하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "신기능-4",
        children: "신기능"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "연계-서비스-상태-추적-기능-추가",
        children: "연계 서비스 상태 추적 기능 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "target IP 혹은 서비스의 접속 상태를 로그모니터링의 liveTail에서 확인할 수 있도록 연계 서비스 상태 추적 기능을 추가하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "logsink_rt_enabled"
        }), " 옵션을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "true"
        }), "로 설정하여 기능을 활성화 할 수 있고 #RemoteTrace 카테고리로 로그를 수집합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "정상 응답인 경우 level이 ok, 에러인 경우 level이 error 입니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["정상 응답인 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "logsink_rt_ok_interval"
            }), " 설정 간격에 맞추어서 로그를 기록합니다. 기본값은 30초 입니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["에러 응답인 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "logsink_rt_error_interval"
            }), " 설정 간격에 맞추어서 로그를 기록합니다. 기본값은 5초 입니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 기본값\nlogsink_rt_enabled=false\n\nlogsink_rt_error_interval=5000\nlogsink_rt_ok_interval=30000\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-02-18",
        children: "2022-02-18"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "버그-4",
        children: "버그"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "http-호출-에러-시간설정-버그-수정",
        children: "Http 호출 에러 시간설정 버그 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Http 호출시 에러 시간 max를 0으로 설정하여도 에러가 표시되는 버그를 수정하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "업데이트-7",
        children: "업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "엑티브-스택의-쓰레드-이름-표시-설정-추가",
        children: "엑티브 스택의 쓰레드 이름 표시 설정 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "엑티브 스택의 쓰레드 이름을 표시할 수 있도록 설정을 추가하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 기본값\nactive_stack_thread_name_enabled=false\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "yard 버전이 낮은 경우 true 설정시 프로토콜 오류로 에이전트 연결이 지속적으로 끊어집니다."
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "비동기-쓰레드-이름을-표시-설정-추가",
        children: "비동기 쓰레드 이름을 표시 설정 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "비동기 쓰레드의 id와 이름을 표시할 수 있도록 설정을 추가하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 기본값\ndebug_async_thread_enabled=false\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-02-11",
        children: "2022-02-11"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "버그-5",
        children: "버그"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "x-플러그인-int-인식-오류-수정",
        children: ".x 플러그인 int 인식 오류 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "x 확장자를 사용하는 플러그인에서 int 값을 사용하지 못하는 오류를 수정하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "배치-에이전트-getresultset-오류-수정",
        children: "배치 에이전트 getResultSet 오류 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "배치 에이전트의 TraceSQL.getResultSet 오류를 수정하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "업데이트-8",
        children: "업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "logging을-포함한-파일이름에-대한-자동화-옵션-추가",
        children: "logging을 포함한 파일이름에 대한 자동화 옵션 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "logging 문자열을 포함한 파일이름을 플러그인으로 사용하는 경우 자동으로 hooking 옵션을 사용하지 않도록 기능을 추가하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "자바-에이전트에서-로그에-트랜잭션-정보를-추가",
        children: "자바 에이전트에서 로그에 트랜잭션 정보를 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "플러그인이 아닌 자바 에이전트에서 로그에 트랜잭션 정보를 추가할 수 있도록 기능을 추가하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "httpclient-timeout-적용-및-에러-처리",
        children: "HttpClient Timeout 적용 및 에러 처리"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "HttpClient에 timeout을 적용하고, timeout 발생시 에러처리를 할 수 있도록 기능을 추가하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "jmx-pool-설정-추가",
        children: "jmx pool 설정 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "jmx pool object의 기본값을 수정하였습니다. jmx pool의 데이터소스 이름 사용 여부를 결정할 수 있는 옵션을 추가하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "데이터소스 이름을 등록하는 경우 jndi 방식을 실행하고, 이름을 등록하지 않은 경우 기본 url 방식으로 동작합니다"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "jmx_pool_dsname_enabled=false\njmx_pool_object=\"*:type=DataSource,class=*,name=*\"\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "배치-에이전트-active-시작-부분-수정",
        children: "배치 에이전트 active 시작 부분 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "배치 프로세스의 Main 쓰레드에서 active stack을 남길 수 있도록 배치 에이전트를 수정하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-01-12",
        children: "2022-01-12"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "업데이트-9",
        children: "업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "db-call-에러-건수를-실시간-통계에-추가",
        children: "DB call 에러 건수를 실시간 통계에 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "데이터베이스 호출시 에러가 발생한 경우 실시간 통계에 에러 건수를 추가하도록 설정하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "http-db-연결-실시간-로그-추가",
        children: "Http, DB 연결 실시간 로그 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Http 연결, DB 연결에 대한 실시간 로그를 추가하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "에이전트-로그에서-지정한-oname-표시",
        children: "에이전트 로그에서 지정한 oname 표시"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "oname을 -D 옵션으로 지정한 경우에도 에이전트로그에서 PID 대신에 에이전트 이름을 표시하도록 수정하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "jdbc-url-추출-구분자-추가",
        children: "jdbc url 추출 구분자 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "jdbc url 추출시 '?', ';'를 기준으로 truncate 할 수 있도록 수정하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "';' 추가\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "logsink-log4j-플러그인을-사용하는-경우-자동-인식-기능-추가",
        children: "logsink, log4j 플러그인을 사용하는 경우 자동 인식 기능 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "logsink, log4j 플러그인을 사용하는 경우에 자동으로 hooking 옵션을 사용하지 않도록 기능을 추가하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "logsink-수집데이터-추가",
        children: "logsink 수집데이터 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "logsink에서 수집하는 데이터를 추가하였습니다. 설정에 따라서 transation id, login id, http host 데이터 수집 여부를 결정할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 기본값 (default)\n_logtag_enabled = false         # tag \nlogtag_txid_enabled=false       # transation id\nlogtag_login_enabled=false      # login id\nlogtag_httphost_enabled=false   # http host\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-01-03",
        children: "2022-01-03"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "업데이트-10",
        children: "업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "collection-모니터링-수정",
        children: "Collection 모니터링 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "기존 Collection 클래스를 hooking 하는 방식에서 CollectionHolder를 통해 간접적으로 Collection 클래스 정보를 조회할 수 있도록 수정하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Collection을 생성하는 클래스를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "collection_nonstatic_holders"
        }), " 설정에 추가하여 Collection Map 항목에서 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "collection_nonstatic_holders=org.apache.catalina.session.ManagerBase\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2021-12-21",
        children: "2021-12-21"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "업데이트-11",
        children: "업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "thread-중단-설정-추가",
        children: "thread 중단 설정 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["thread 동작 시간이 설정값을 초과하는 경우에 thread 중단 여부를 설정할 수 있도록 항목을 추가하였습니다. 기본 설정값은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "false"
        }), " 입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "auto_thread_kill_enabled=false  # 기본값\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "http-header-에서-cookie-항목-제외",
        children: "http header 에서 'Cookie' 항목 제외"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "http header에서 'Cookie' 항목을 제외하도록 수정하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "(기존) cookie,accept,user-agent,referer\n(수정) Cookie,cookie,accept,user-agent,referer\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2021-12-17",
        children: "2021-12-17"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "업데이트-12",
        children: "업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "weaving-설정-추가",
        children: "weaving 설정 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["플러그인을 추적할 수 있도록 weaving 설정을 추가하였습니다. 기존의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "weaving_reserved"
        }), " 설정과 동일한 기능으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "weaving"
        }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "weaving_reserved"
        }), " 설정 모두 동작합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "weaving=tomcat10\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "agent-환경-변수-제외값-추가",
        children: "agent 환경 변수 제외값 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["환경 변수 조회 기능에서 특정 키값을 입력하면 조회 항목에서 제외할 수 있도록 기능을 추가하였습니다. 구분자는 ','로 대소문자를 구분하지 않습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "agent_env_system_enabled"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "agent_env_jvm_enabled"
        }), " 설정과 연결하여 사용할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "agent_env_system_enabled=false\nagent_env_jvm_enabled=true\n\nagent_env_ignore_keys=user.timezone,user.name,user.language\n"
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
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

/***/ 67068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Status)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);


function Status({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        className: children,
        children: children
    });
}


/***/ }),

/***/ 5379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ UItext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);


function UItext({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "uitext",
        children: children
    });
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