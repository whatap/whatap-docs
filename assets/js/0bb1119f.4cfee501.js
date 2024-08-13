"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[43957],{

/***/ 85102:
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
	id: 'java-2_1_0',
	title: 'Java Agent v2.1.0',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar'
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/java/java-2_1_0",
  "title": "Java Agent v2.1.0",
  "description": "2021-12-15",
  "source": "@site/docs/release-notes/java/java-2.1.0.mdx",
  "sourceDirName": "release-notes/java",
  "slug": "/release-notes/java/java-2_1_0",
  "permalink": "/release-notes/java/java-2_1_0",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/java/java-2.1.0.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "java-2_1_0",
    "title": "Java Agent v2.1.0",
    "toc_max_heading_level": 2,
    "displayed_sidebar": "releaseSidebar"
  },
  "sidebar": "releaseSidebar"
};
const assets = {

};





const toc = [{
  "value": "2021-12-15",
  "id": "2021-12-15",
  "level": 2
}, {
  "value": "에이전트 관리 체계 수정",
  "id": "에이전트-관리-체계-수정",
  "level": 3
}, {
  "value": "에이전트 버전체계 변경",
  "id": "에이전트-버전체계-변경",
  "level": 4
}, {
  "value": "자바 에이전트 배포 패키지 구성 변경",
  "id": "자바-에이전트-배포-패키지-구성-변경",
  "level": 3
}, {
  "value": "JAVA 지원 범위 확대",
  "id": "java-지원-범위-확대",
  "level": 3
}, {
  "value": "멀티서버 추적(mtrace) 자동화",
  "id": "멀티서버-추적mtrace-자동화",
  "level": 3
}, {
  "value": "멀티 서버 연결추적 기본정책 변경",
  "id": "멀티-서버-연결추적-기본정책-변경",
  "level": 4
}, {
  "value": "멀티 서버 추적 자동 적용",
  "id": "멀티-서버-추적-자동-적용",
  "level": 4
}, {
  "value": "멀티서버 추적 비율 자동 조절",
  "id": "멀티서버-추적-비율-자동-조절",
  "level": 4
}, {
  "value": "서버(에이전트)간 의존성 정보 수집내용 변경",
  "id": "서버에이전트간-의존성-정보-수집내용-변경",
  "level": 4
}, {
  "value": "추적 정보 개선",
  "id": "추적-정보-개선",
  "level": 3
}, {
  "value": "DB 연결URL 에서 &#39;?&#39; 이하를 제거",
  "id": "db-연결url-에서--이하를-제거",
  "level": 4
}, {
  "value": "URL 정규화 작업에 ContextPath 반영",
  "id": "url-정규화-작업에-contextpath-반영",
  "level": 4
}, {
  "value": "URL 패턴을 서버에 설정하도록 변경",
  "id": "url-패턴을-서버에-설정하도록-변경",
  "level": 4
}, {
  "value": "에이전트 로그에 ONAME 출력",
  "id": "에이전트-로그에-oname-출력",
  "level": 4
}, {
  "value": "사용자 정의 카운터 추가",
  "id": "사용자-정의-카운터-추가",
  "level": 4
}, {
  "value": "애플리케이션 로그 모니터링",
  "id": "애플리케이션-로그-모니터링",
  "level": 3
}, {
  "value": "로그 모니터링 기능 활성화",
  "id": "로그-모니터링-기능-활성화",
  "level": 4
}, {
  "value": "프레임워크에서 로그내용 수집",
  "id": "프레임워크에서-로그내용-수집",
  "level": 4
}, {
  "value": "사용자 메소드에서 로그 수집",
  "id": "사용자-메소드에서-로그-수집",
  "level": 4
}, {
  "value": "로그 전송설정",
  "id": "로그-전송설정",
  "level": 4
}, {
  "value": "로그 압축 전송 활성화/디버깅",
  "id": "로그-압축-전송-활성화디버깅",
  "level": 4
}, {
  "value": "로그 압축 전송 최소 사이즈",
  "id": "로그-압축-전송-최소-사이즈",
  "level": 4
}, {
  "value": "로그 압축 전송 묶음 크기 및 시간",
  "id": "로그-압축-전송-묶음-크기-및-시간",
  "level": 4
}, {
  "value": "로그 압축 알고리즘 선택",
  "id": "로그-압축-알고리즘-선택",
  "level": 4
}, {
  "value": "IBM Java6 웹스피어 환경에서 에이전트가 동작하지 않는 문제 수정",
  "id": "ibm-java6-웹스피어-환경에서-에이전트가-동작하지-않는-문제-수정",
  "level": 3
}, {
  "value": "CounterPack 디버깅 옵션 추가",
  "id": "counterpack-디버깅-옵션-추가",
  "level": 3
}, {
  "value": "Text &amp; ActiveStack 정보 수집시 압축 옵션 추가",
  "id": "text--activestack-정보-수집시-압축-옵션-추가",
  "level": 3
}, {
  "value": "시스템 메트릭 수집 라이브러리 변경 및 메모리 데이터 수집 오류 수정",
  "id": "시스템-메트릭-수집-라이브러리-변경-및-메모리-데이터-수집-오류-수정",
  "level": 3
}, {
  "value": "OSHI 추가",
  "id": "oshi-추가",
  "level": 4
}, {
  "value": "Sigar 기능 deprecated 처리",
  "id": "sigar-기능-deprecated-처리",
  "level": 4
}, {
  "value": "Linux memory 수집 오류 수정",
  "id": "linux-memory-수집-오류-수정",
  "level": 4
}, {
  "value": "환경변수 조회기능 옵션 처리",
  "id": "환경변수-조회기능-옵션-처리",
  "level": 3
}, {
  "value": "에이전트 환경변수 조회시 특정 키를 제외하는 옵션",
  "id": "에이전트-환경변수-조회시-특정-키를-제외하는-옵션",
  "level": 3
}, {
  "value": "TOMCAT10 지원",
  "id": "tomcat10-지원",
  "level": 3
}, {
  "value": "HttpCall에 대한 상세 정보 추적",
  "id": "httpcall에-대한-상세-정보-추적",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
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
        id: "2021-12-15",
        children: "2021-12-15"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "에이전트-관리-체계-수정",
        children: "에이전트 관리 체계 수정"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "에이전트-버전체계-변경",
        children: "에이전트 버전체계 변경"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에이전트 버전 체계를 2.1.x로 변경 하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "자바-에이전트-배포-패키지-구성-변경",
        children: "자바 에이전트 배포 패키지 구성 변경"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "whatap.agent-2.1.0 부터 와탭랩스 자바 에이전트 패키지 구성을 변경 하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "whatap.agent-2.1.0.jar"
          }), " : 에이전트 코어 jar"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "whatap.agent.proxy-2.1.0.jar"
          }), " : 와탭 서버와 직접연결이 어려워 우회 연결 지원"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "whatap-logsink-lz4-1.7.0.jar"
          }), " : 로그 모니터링(LogSink)에서 데이터를 압축 하기 위한 플러그 모듈 (기본은 JDK에서 기본으로 제공하는 GZIP 사용)"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "java-지원-범위-확대",
        children: "JAVA 지원 범위 확대"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Asm 라이브러리 v9.2를 활용하여 와탭랩스 자바 에이전트가 지원하는 범위를 기존 java14에서 java17로 확대 하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "멀티서버-추적mtrace-자동화",
        children: "멀티서버 추적(mtrace) 자동화"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "멀티-서버-연결추적-기본정책-변경",
        children: "멀티 서버 연결추적 기본정책 변경"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에이전트간 호출 성능 추적 기본값을 on으로 변경 하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "tx_caller_meter_enabled = true\nsql_dbc_meter_enabled = true\nhttpc_host_meter_enabled = true\nactx_meter_enabled = true\nactx_slice_meter_enabled = true\n\ntx_caller_meter_pkind_enabled = true\nactx_meter_pkind_enabled = true\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "멀티-서버-추적-자동-적용",
        children: "멀티 서버 추적 자동 적용"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "User Agent를 기반으로 브라우저가 호출하는 트랜잭션에 한하여 자동으로 처리하도록 변경 하였습니다.\n(User Agent가 'Moz'로 시작하는 경우에 한하여 mtrace_rate가 동작하는 방식)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "mtrace_auto_enabled=true (기본값)\nmtraceable_user_agent=Moz  (기본값)\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "멀티서버-추적-비율-자동-조절",
        children: "멀티서버 추적 비율 자동 조절"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "명시적으로 mtrace_rate를 지정하지 않은 경우 500tps 이상의 환경에서는 자동으로 rate를 낮추는 기능을 추가 하였습니다. 단일 프로세스에서 500tps 기준으로 mtrace_rate는 기본 10%이며 tps가 높아질수록 동일 비율로 mtrace_rate를 자동 조절 합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "서버에이전트간-의존성-정보-수집내용-변경",
        children: "서버(에이전트)간 의존성 정보 수집내용 변경"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "서로 다른 프로젝트에 속한 에이전트간의 호출이 발생한 경우 caller 정보를 OID 단위로 수집하도록 수정하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "이전 버전에서는 PKIND(pcode+okind) 단위로 수집하던 것을 POID(pcode+oid)단위로 수집하도록 수정하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "추적-정보-개선",
        children: "추적 정보 개선"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "db-연결url-에서--이하를-제거",
        children: "DB 연결URL 에서 '?' 이하를 제거"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "SQL 수행 성능을 추적을 위해 JDBC 연결정보를 수집할때 '?' 이하를 제거 하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "url-정규화-작업에-contextpath-반영",
        children: "URL 정규화 작업에 ContextPath 반영"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "URL 정규화 작업을 수행할 때 ContextPath를 반영할 수 있도록 변경 하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "url-패턴을-서버에-설정하도록-변경",
        children: "URL 패턴을 서버에 설정하도록 변경"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "와탭랩스에서는 Service 혹은 HttpClient URL의 패턴을 와탭서버에서 설정하여 수집하도록 변경 하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "URL 패턴 설정 대상"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "Service URL"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "HttpClient URL"
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "기존 에이전트 설정 방식으로는 쿠버네티스 환경에서 변경에 어려움"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "에이전트-로그에-oname-출력",
        children: "에이전트 로그에 ONAME 출력"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에이전트 로그의 출력 내용을 (날짜)(PID)(메세지) 포멧을 (날짜)(에이전트이름)(메세지) 포맷으로 변경 하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "20211224 05:12:31(GMT) [JA-161-111][UrlNorm] Service PathTree done. PathTree=0\n20211224 05:12:31(GMT) [JA-161-111][HttpcUrlNorm] PathTree build done. PathTree=0\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "사용자-정의-카운터-추가",
        children: "사용자 정의 카운터 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "App Extra Counter를 추적하기 플러그인을 사용할 수 있도록 수정 하였습니다. 단, 에이전트에서 플러그인 ExtraCounter.x 구현이 필요합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "${WHATAP}"
            }), "/plugin/ExtraCounter.x"]
          })
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "$pack.put(\"mycount\",100);\n$pack.put(\"myrandom\",(float)( whatap.util.KeyGen.next()%100));\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "애플리케이션-로그-모니터링",
        children: "애플리케이션 로그 모니터링"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "애플리케이션 로그를 통합 모니터링 하는 기능을 추가 하였습니다. 자바 애플리케이션에서 로그 모니터링 기능을 사용하기 위해서는 whatap.agent-2.1.0 이후 버전이 필요합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "caution",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "whatap.agent-2.1.0 이후 버전"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "와탭의 애플리케이션 로그 모니터링의 기능 명칭은 로그싱크(LogSink) 입니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "로그-모니터링-기능-활성화",
        children: "로그 모니터링 기능 활성화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["로그 모니터링을 위해서는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), " 설정 파일에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "logsink_enabled"
        }), "를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "true"
        }), "로 설정 해야 합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "logsink_enabled=true\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["자바 애플리케이션에서 발생하는 System.out, System.err 그리고 프레임워크에서 구현한 LOGBACK, LOG4J 로그를 수집 합니다. 기본값은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "logsink_enabled"
        }), "의 설정과 동일 합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "logsink_stdout_enabled=logsink_enabled\nlogsink_stderr_enabled=logsink_enabled\nlogsink_logback_enabled=logsink_enabled\nlogsink_log4j_enabled=logsink_enabled\nlogsink_tomcat_enabled=logsink_enabled\nlogsink_custom_enabled=logsink_enabled\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "프레임워크에서-로그내용-수집",
        children: "프레임워크에서 로그내용 수집"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "프레임워크에서 수집하는 로그를 모니터링 하기 위해서는 모듈에서 로그를 가로채기 위한 설정과 플러그인을 추가해야 합니다. 프레임워크에서 수집하는 로그의 기본 카테고리 이름을 'AppLog'로 설정합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["기본값은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "hooklog_enabled"
        }), "의 설정과 동일 합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "hooklog_logback_enabled=hooklog_enabled;\nhooklog_log4j_enabled=hooklog_enabled;\nhooklog_tomcat_enabled=hooklog_enabled;\nhooklog_custom_methods= (사용자 메소드에서 로그 수집 설정)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["다만 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "hooklog_enabled"
        }), "는 기본값으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "logsink_enabled"
        }), " 값이 적용되며 기동전에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "true"
        }), "로 설정할 필요가 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["운영중에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "hooklog_enabled=true"
        }), "로 변경한다면 재기동 후에 로그 수집이 가능합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "logsink_enabled=true"
          }), " 변경 후 재기동"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "사용자-메소드에서-로그-수집",
        children: "사용자 메소드에서 로그 수집"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "hooklog_custom_methods"
        }), "는 임의의 로그 프레임워크의 내용을 전달합니다. 사이트에서 개별로 만든 로그 모듈의 로그를 추적할때 사용합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "hooklog_custom_methods=com.greatshop.common.Log.print\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "로그-전송설정",
        children: "로그 전송설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "단일 라인의 최대크기와 전송시 큐 사이즈 설정이 가능합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "logsink_queue_size=1000\nlogsink_line_size=512\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "로그-압축-전송-활성화디버깅",
        children: "로그 압축 전송 활성화/디버깅"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "logsink_zip_enabled=true"
        }), " 설정으로 로그를 압축 전송할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "logsink_zip_enabled=false\ndebug_logsink_zip_enabled=false\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "모든 데이터를 압축하지는 않으며 압축전송여부를 확인할때 debug 옵션을 활용합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "로그-압축-전송-최소-사이즈",
        children: "로그 압축 전송 최소 사이즈"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "전송 데이터가 100bytes 이하인 경우 데이터를 압축하지 않습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "logsink_zip_min_size=100\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "로그-압축-전송-묶음-크기-및-시간",
        children: "로그 압축 전송 묶음 크기 및 시간"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "압축을 위해서는 데이터를 묶어서 전송해야 하는데 무한정 다음 데이터를 기다릴 수 없기 때문에 최대시간을 지정합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "max_buffer_size=65536\nmax_wait_time=2000\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["에이전트는 데이터 수집 사이즈가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "max_buffer_size"
        }), "를 초과하거나 로그를 묶기 위해 기다리는 시간이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "max_wait_time"
        }), "을 초과하면 로그 데이터를 서버로 전송합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "로그-압축-알고리즘-선택",
        children: "로그 압축 알고리즘 선택"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "로그를 압축전송할 때 압축 알고리즘 변경이 가능합니다. 기본 알고리즘은 GZIP이며 lz4도 선택 가능합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "logsink_zip_libpath=/whatap/whatap-logsink-lz4-1.7.0.jar\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["알고리즘 선택은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "logsink_zip_libpath"
          }), "에 jar파일을 지정하는것으로 처리"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "ibm-java6-웹스피어-환경에서-에이전트가-동작하지-않는-문제-수정",
        children: "IBM Java6 웹스피어 환경에서 에이전트가 동작하지 않는 문제 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "IBM Java6 웹스피어 환경에서 WhaTap Agent가 초기화 되지 못하고 데이터를 수집하지 못하는 문제를 수정 하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "ManagementFactory.getPlatformMBeanServer()"
          }), " 로직이 내부적으로 오류가 발생하면서 WhaTap Agent가 초기화되지 못하는 문제"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "counterpack-디버깅-옵션-추가",
        children: "CounterPack 디버깅 옵션 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에이전트에서 전송하는 실시간 성능 데이터의 전송 여부를 디버깅 하기 위한 옵션을 추가 하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "debug_counterpack_enabled=true (기본값)\ndebug_counterpack_factor=3 (기본값)\ndebug_counterpack_recvtime=9000 (기본값)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에이전트의 큐에 전송대기 상태의 CounterPack이 3 이상 늘어나거나 가장 최근에 받은 서버 데이터의 전송속도가 9000ms를 초과하는 경우 로그로 표시 합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "text--activestack-정보-수집시-압축-옵션-추가",
        children: "Text & ActiveStack 정보 수집시 압축 옵션 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Text 데이터와 ActiveStack 정보를 수집할 때 압축할 수 있는 옵션을 추가 하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "active_stack_zip_enabled=false (기본값)\ntext_zip_enabled=false (기본값)\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "시스템-메트릭-수집-라이브러리-변경-및-메모리-데이터-수집-오류-수정",
        children: "시스템 메트릭 수집 라이브러리 변경 및 메모리 데이터 수집 오류 수정"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "oshi-추가",
        children: "OSHI 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "OSHI(Operating System and Hardware Information)는 시스템 인프라 메트릭을 수집하기 위한 라이브러리로, 최근에도 활발히 업데이트 되고 있어 시스템 성능 지표를 수집하기 위한 라이브러리로 선택 하였습니다. 단, Java8 이상의 환경에서만 사용 가능합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "oshi_enabled=false"
          }), " (기본값)"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "jdk8 이상에서만 사용가능"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "disk=\".\"에 대한 사용량 측정 및 경고 기능 가능"
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "sigar-기능-deprecated-처리",
        children: "Sigar 기능 deprecated 처리"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "이미 5년 이상 업데이트 되고 있지 않아 초기 설정에서 제외 하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "sigar_enabled=false (기본값)"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "lib1에 대해 aix만 포함"
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Sigar 기능을 사용하기 위해서는 명시적으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "sigar_enabled=true"
        }), " 설정 후 사용할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "linux-memory-수집-오류-수정",
        children: "Linux memory 수집 오류 수정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "리눅스 환경에서 메모리 사용량 및 사용률 수집 오류를 수정 하였습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "환경변수-조회기능-옵션-처리",
        children: "환경변수 조회기능 옵션 처리"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에이전트에서 환경변수 조회시 기능 동작 여부를 ON/OFF 할 수 있게 옵션을 추가 하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "agent_env_system_enabled=true\nagent_env_jvm_enabled=true\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "프로세스 환경변수와 자바 환경변수에 대해서 조회가능 여부를 옵션으로 통제할 수 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "에이전트-환경변수-조회시-특정-키를-제외하는-옵션",
        children: "에이전트 환경변수 조회시 특정 키를 제외하는 옵션"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "자바 실행환경의 환경변수를 조회하는 기능에서 특정 환경변수를 제외할 수 있는 옵션을 추가 하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "agent_env_ignore_keys=USER,Address\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "',' 구분자를 사용하여 옵션지정하며, 대소문자를 구분하지 않습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "tomcat10-지원",
        children: "TOMCAT10 지원"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Tomcat10의 jakarta 라이브러리를 추적할 수 있도록 지원 범위를 확대 하였습니다.\nweaving 옵션에 tomcat10을 지정하여 추적할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "weaving=tomcat10\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["weaving 옵션은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "weaving_reserved"
          }), " 옵션을 축약하여 v2.1.1에서 추가"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "httpcall에-대한-상세-정보-추적",
        children: "HttpCall에 대한 상세 정보 추적"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "트랜잭션 추적에서 HttpCall에 대한 추적 정보를 추가하였습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "caution",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "OLD 버전의 수집서버에서는 트랜잭션 상세 스텝 정보 확인이 불가합니다."
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["만약 OLD 수집서버에 데이터를 보내야 한다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace_httpc_version"
        }), " 옵션을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), " 파일에 추가해야 합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "trace_httpc_version=1\n"
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


function Status({ children , priority  }) {
    if (priority) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            className: children,
            type: priority,
            children: children
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        className: children,
        children: children
    });
};


/***/ }),

/***/ 5379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ UItext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);


function UItext({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "uitext",
        children: children
    });
};


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