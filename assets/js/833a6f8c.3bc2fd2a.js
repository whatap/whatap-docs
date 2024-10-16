"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[37683],{

/***/ 62015:
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
	id: 'api-guide',
	title: 'API 가이드',
	description: 'Go 라이브러리를 이용해 와탭 에이전트에 모니터링할 데이터를 전송할 수 있습니다.',
	keywords: [
		'Go',
		'API 가이드',
		'라이브러리'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "golang/api-guide",
  "title": "API 가이드",
  "description": "Go 라이브러리를 이용해 와탭 에이전트에 모니터링할 데이터를 전송할 수 있습니다.",
  "source": "@site/docs/golang/api-guide.mdx",
  "sourceDirName": "golang",
  "slug": "/golang/api-guide",
  "permalink": "/whatap-docs/golang/api-guide",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/golang/api-guide.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "api-guide",
    "title": "API 가이드",
    "description": "Go 라이브러리를 이용해 와탭 에이전트에 모니터링할 데이터를 전송할 수 있습니다.",
    "keywords": [
      "Go",
      "API 가이드",
      "라이브러리"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "goSidebar",
  "previous": {
    "title": "Docker 환경 설치",
    "permalink": "/whatap-docs/golang/install-agent-docker"
  },
  "next": {
    "title": "설치 점검 사항",
    "permalink": "/whatap-docs/golang/install-check"
  }
};
const assets = {

};



const toc = [{
  "value": "다운로드",
  "id": "다운로드",
  "level": 2
}, {
  "value": "시작하기",
  "id": "시작하기",
  "level": 2
}, {
  "value": "init, shutdown",
  "id": "init-shutdown",
  "level": 3
}, {
  "value": "Context",
  "id": "context",
  "level": 3
}, {
  "value": "트랜잭션 생성",
  "id": "트랜잭션-생성",
  "level": 4
}, {
  "value": "트랜잭션 추적",
  "id": "트랜잭션-추적",
  "level": 2
}, {
  "value": "웹 트랜잭션 추적",
  "id": "웹-트랜잭션-추적",
  "level": 3
}, {
  "value": "일반 트랜잭션 추적",
  "id": "일반-트랜잭션-추적",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 3
}, {
  "value": "DB 연결 및 SQL 추적",
  "id": "db-연결-및-sql-추적",
  "level": 2
}, {
  "value": "DB Connection",
  "id": "db-connection",
  "level": 3
}, {
  "value": "database/sql 패키지 설정",
  "id": "databasesql-패키지-설정",
  "level": 3
}, {
  "value": "API",
  "id": "api-1",
  "level": 3
}, {
  "value": "HTTP 요청 추적",
  "id": "http-요청-추적",
  "level": 2
}, {
  "value": "http transport RoundTrip",
  "id": "http-transport-roundtrip",
  "level": 3
}, {
  "value": "API",
  "id": "api-2",
  "level": 3
}, {
  "value": "멀티 트랜잭션 추적(분산 추적)",
  "id": "mtrace",
  "level": 2
}, {
  "value": "에이전트 설정하기",
  "id": "에이전트-설정하기",
  "level": 3
}, {
  "value": "Request Header 전달하기",
  "id": "request-header-전달하기",
  "level": 3
}, {
  "value": "HTTP 연결 시 Header 정보 추가하기",
  "id": "http-연결-시-header-정보-추가하기",
  "level": 3
}, {
  "value": "자동으로 Header 추가하기",
  "id": "자동으로-header-추가하기",
  "level": 3
}, {
  "value": "함수 추적",
  "id": "함수-추적",
  "level": 2
}, {
  "value": "API",
  "id": "api-3",
  "level": 3
}, {
  "value": "Log",
  "id": "log",
  "level": 2
}, {
  "value": "에이전트 설정하기",
  "id": "에이전트-설정하기-1",
  "level": 3
}, {
  "value": "로그 라이브러리 초기화 전",
  "id": "로그-라이브러리-초기화-전",
  "level": 3
}, {
  "value": "로그 라이브러리 초기화 후",
  "id": "로그-라이브러리-초기화-후",
  "level": 3
}, {
  "value": "API",
  "id": "api-4",
  "level": 3
}, {
  "value": "log package",
  "id": "log-package",
  "level": 4
}, {
  "value": "go.uber.org/zap",
  "id": "gouberorgzap",
  "level": 4
}, {
  "value": "github.com/sirupsen/logrus",
  "id": "githubcomsirupsenlogrus",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["이 문서에서 기술된 예제 코드는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/whatap/go-api-example",
        children: "github.com/whatap/go-api-example"
      }), " 저장소에서 확인할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "다운로드",
        children: "다운로드"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "패지키 및 관련 종속성(dependency)을 다운로드하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "go get github.com/whatap/go-api\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "시작하기",
        children: "시작하기"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "init-shutdown",
        children: "init, shutdown"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.Init()"
        }), " 함수를 이용해 모니터링 모듈을 시작하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "defer trace.Shutdown()"
        }), "으로 모니터링 종료를 보장합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=\"Go\"",
          children: "import \"github.com/whatap/go-api/trace\"\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n\n    ...\n}\n\nfunc Init(m map[string]string)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "map[string]string"
        }), " 형식을 애플리케이션 초기에 설정할 수 있습니다. 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), " 파일에 설정할 수 있습니다. 에이전트와 TCP 접속이 정상적으로 이루어져야 성능 정보를 와탭 수집 서버로 보낼 수 있습니다. 기본 접속 정보로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "127.0.0.1:6600"
        }), "을 통해 TCP로 통신합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["접속 정보를 변경하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Init"
        }), " 함수에 설정을 전달하거나 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), " 파일에 설정하고 애플리케이션을 재시작하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "m := make(map[string]string)\nm[\"net_ipc_host\"] = \"127.0.0.1\"\nm[\"net_ipc_port\"] = \"6601\"\n\ntrace.Init(m)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title=\"whatap.conf\"",
          children: "accesskey={액세스 키}\nwhatap.server.host={수집 서버 IP 주소}\nnet_ipc_host=127.0.0.1\nnet_ipc_host=6600\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "context",
        children: "Context"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["에이전트는 성능 정보를 트랜잭션 단위로 수집합니다. 트랜잭션의 구분은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap context(trace.TraceCtx)"
        }), "가 포함된 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "context"
        }), "를 기준으로 합니다. 트랜잭션에 연계되지 않는 성능 정보는 수집을 무시하거나 통계 정보로만 수집합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "트랜잭션-생성",
        children: "트랜잭션 생성"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "go-api/trace"
        }), " 모듈의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Start"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "StartWithReqest"
        }), " 함수로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap context"
        }), "를 생성합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "context"
        }), " 내부에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap"
        }), " 키로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "TraceCtx"
        }), " 정보를 설정합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "var traceCtx *TraceCtx\ntraceCtx.Txid = keygen.Next()\nctx = context.WithValue(ctx, \"whatap\", traceCtx)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["트랜잭션, SQL, DBConnection, 외부 HTTP request, 일반 함수 추적 등의 API에서 시작 시점에는 반드시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap"
        }), " 키로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "TraceCtx"
        }), " 객체가 존재하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Context"
        }), "가 필요합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "트랜잭션-추적",
        children: "트랜잭션 추적"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["웹 요청과 응답까지의 트랜잭션과 일반적인 작업 단위의 트랜잭션을 모두 추적합니다. 시작 및 종료 함수로 구성되어 있습니다. 하나의 트랜잭션으로 인식되어 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "히트맵"
          })
        }), " 위젯에서 상세 보기와 TPS, 응답시간, 평균 응답시간 등의 통계 지표를 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "설정을 통해서 HTTP 파라미터, HTTP 헤더 정보를 수집할 수 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "웹-트랜잭션-추적",
        children: "웹 트랜잭션 추적"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "http.HandleFunc(\"/index\", func(w http.ResponseWriter, r *http.Request) {\n    ctx, _ := trace.StartWithRequest(r)\n    defer trace.End(ctx, nil)\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "trace.Func()"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "trace.HandlerFunc()"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "net/http"
                }), "의 Handle, HandFunc을 래핑한 함수"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "trace.StartWithRequest"
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "trace.End"
                }), "를 동일하게 진행합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "웹 트랜잭션의 이름은 RequestURI로 설정됩니다."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "trace.Step()"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "사용자가 전달하는 문자열을 프로파일 정보에 출력하는 기능을 제공합니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-go",
              metastring: "title=\"Go\"",
              children: "http.HandleFunc(\"/wrapHandleFunc\", trace.Func(func(w http.ResponseWriter, r *http.Request) {\n    ...\n}))\n"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-go",
              metastring: "title=\"Go\"",
              children: "http.Handle(\"/wrapHandleFunc1\", trace.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n    ...\n}))\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "일반-트랜잭션-추적",
        children: "일반 트랜잭션 추적"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func main() {\n    ...\n\n    ctx := context.Background()\n    ctx, _ := trace.Start(ctx, \"Custom Transaction\")\n\n    ...\n\n    trace.End(ctx, nil)\n\n    ...\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "api",
        children: "API"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func Start(ctx context.Context, name string) (context.Context, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func End(ctx context.Context, err error) error\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func StartWithRequest(r *http.Request) (context.Context, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func Step(ctx context.Context, title, message string, elapsed, value int) error\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func HandlerFunc(handler func(http.ResponseWriter, *http.Request)) http.HandlerFunc\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func Func(handler func(http.ResponseWriter, *http.Request)) func(http.ResponseWriter, *http.Request)\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "db-연결-및-sql-추적",
        children: "DB 연결 및 SQL 추적"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "DB 연결 정보, sql 구문, error 및 prepared 구문을 위한 파라미터를 API로 전달하면 실행 시간 및 오류 사항을 수집할 수 있습니다. SQL 구문은 최대 32KB까지 수집합니다. SQL Prepared 구문을 위한 파라미터는 최대 20개, 각각 256byte까지 수집합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "db-connection",
        children: "DB Connection"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "import (\n    whatapsql \"github.com/whatap/go-api/sql\"\n)\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n    \n    ctx, _ := trace.Start(context.Background(), \"Trace Open DB\")\n    defer trace.End(ctx, nil)\n    \n    sqlCtx, _ := whatapsql.StartOpen(ctx, \"id@tcp(x.x.x.x:3306)/test\")\n    db, err := sql.Open(\"mysql\", \"id:pwd@tcp(x.x.x.x:3306)/test\")\n    whatapsql.End(sqlCtx, err)\n    defer db.Close()\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "import (\n    whatapsql \"github.com/whatap/go-api/sql\"\n)\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n    \n    ctx, _ := trace.Start(context.Background(), \"Trace Query\")\n    defer trace.End(ctx, nil)\n    \n    query = \"select id, subject from tbl_faq limit 10\"\n    sqlCtx, _ = whatapsql.Start(ctx, \"id:pwd@tcp(x.x.x.x:3306)/test\", query)\n    rows, err := db.QueryContext(ctx, query)\n    whatapsql.End(sqlCtx, err)\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "import (\n    whatapsql \"github.com/whatap/go-api/sql\"\n)\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n    \n    ctx, _ := trace.Start(context.Background(), \"Trace Prepared Statement\")\n    defer trace.End(ctx, nil)\n    \n    // Prepared Statement 생성\n    query = \"select id, subject from tbl_faq where id = ? limit ?\"\n    stmt, err := db.Prepare(query)\n    if err != nil {\n      return\n    }\n    defer stmt.Close()\n    \n    params := make([]interface{}, 0)\n    params = append(params, 8)\n    params = append(params, 1)\n    \n    sqlCtx, _ := whatapsql.StartWithParamArray(ctx, \"id:pwd(x.x.x.x:3306)/test\", query, params)\n    rows, err := stmt.QueryContext(ctx, params...)\n    whatapsql.End(sqlCtx, err)\n    \n\n    sqlCtx, _ = whatapsql.StartWithParam(ctx, \"id:pwd(x.x.x.x:3306)/test\", query, params...)\n    rows, err := stmt.QueryContext(ctx, params...)\n    whatapsql.End(sqlCtx, err)\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "databasesql-패키지-설정",
        children: "database/sql 패키지 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["database/sql 패키지의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "sql.Open"
        }), " 함수 대신 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatapsql.OpenContext"
        }), " 함수를 사용합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "PrepareContext"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "QueryContext"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ExecContext"
        }), " 등 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "context"
        }), "를 전달하는 함수를 이용하길 권장합니다. 전달하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "context"
        }), "는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.Start()"
        }), "를 통해서 whatap TraceCtx 정보가 있어야 합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "\nimport (\n    _ \"github.com/go-sql-driver/mysql\"\n    \"github.com/whatap/go-api/instrumentation/database/sql/whatapsql\"\n)\n\nfunc main() {\n    config := make(map[string]string)\n    trace.Init(config)\n    defer trace.Shutdown()\n\n    // whataphttp.Func 내부에서 whatap TraceCtx를 생성합니다.\n    http.HandleFunc(\"/query\", whataphttp.Func(func(w http.ResponseWriter, r *http.Request){\n      ctx := r.Context()\n    \n      // Use WhaTap Driver. whatap의 TraceCtx가 있는 context 를 전달합니다.\n      db, err := whatapsql.OpenContext(ctx, \"mysql\", dataSource)\n      if err != nil {\n        fmt.Println(\"Error whatapsql.Open \", err)\n        return\n      }\n      defer db.Close()\n      \n      ...\n      query := \"select id, subject from tbl_faq limit 10\"\n      \n      // whatap TraceCtx가 있는 context 를 전달합니다.\n      if rows, err := db.QueryContext(ctx, query); err == nil {\n        ...\n      }\n    }\n    ...\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "api-1",
        children: "API"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func Start(ctx context.Context, dbhost, sql string) (*SqlCtx, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func StartOpen(ctx context.Context, dbhost string) (*SqlCtx, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func End(sqlCtx *SqlCtx, err error) error\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func StartWithParam(ctx context.Context, dbhost, sql, param ...interface{}) (*SqlCtx, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func StartWithParamArray(ctx context.Context, dbhost, sql string, param []interface{}) (*SqlCtx, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func Trace(ctx context.Context, dbhost, sql, param string, elapsed int, err error) error\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "http-요청-추적",
        children: "HTTP 요청 추적"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "import (\n    \"github.com/whatap/go-api/httc\"\n)\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n\n    ctx, _ := trace.Start(context.Background(), \"Trace Http Call\")\n    defer trace.End(ctx, nil)\n\n    httpcCtx, _ := httpc.Start(ctx, callUrl)\n    resp, err := http.Get(callUrl)\n    if err == nil {\n        httpc.End(httpcCtx, resp.StatusCode, \"\", nil)\n    } else {\n        httpc.End(httpcCtx, 0, \"\", err)\n    }\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "http-transport-roundtrip",
        children: "http transport RoundTrip"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "RoundTrip을 설정할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "import (\n    \"github.com/whatap/go-api/instrumentation/net/http/whataphttp\"\n)\n\nfunc main() {\n    config := make(map[string]string)\n    trace.Init(config)\n    defer trace.Shutdown()\n\n    ctx, _ := trace.Start(context.Background(), \"Http call\")\n    defer trace.End(ctx, nil)\n\n    callUrl := \"http://aaa.com/xxx\"\n    client := http.DefaultClient\n    // Use WhaTap RoundTrip. Passes the context with whatap's TraceCtx.\n    client.Transport = whataphttp.NewRoundTrip(ctx, http.DefaultTransport)\n    resp, err := client.Get(callUrl)\n    if err != nil {\n        ...\n    }\n    defer resp.Body.Close()\n    ...\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "api-2",
        children: "API"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func Start(ctx context.Context, url string) (*HttpcCtx, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func End(httpcCtx *HttpcCtx, status int, reason string, err error) error\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func Trace(ctx context.Context, host string, port int, url string, elapsed int, status int, reason string, err error) error\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "mtrace",
        children: "멀티 트랜잭션 추적(분산 추적)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "멀티 트랜잭션"
        }), "은 다른 에이전트나 프로젝트와 연관된 트랜잭션을 의미합니다. 와탭 프로젝트에 등록된 애플리케이션 서비스 간의 호출을 추적하는 것이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "멀티 트랜잭션 추적"
        }), "입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Go 에이전트는 세 개의 HTTP 헤더 키값(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "x-wtap-po"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "x-wtap-mst"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "x-wtap-sp1"
          }), ")으로 멀티 트랜잭션을 추적합니다. 게이트웨이를 통과하는 HTTP 트랜잭션이 연계 추적되지 않는다면 HTTP 헤더 조건을 확인하세요."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "오픈소스 추적을 위해 TraceContext를 지원합니다. (traceparent 헤더 추적)"
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "에이전트-설정하기",
        children: "에이전트 설정하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["멀티 트랜잭션 추적을 위해 에이전트 설정 파일(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), ")에 다음과 같이 옵션을 설정하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title=\"whatap.conf\"",
          children: "# Activation option, Default: false\nmtrace_enabled=true\n\n# Sampling rate, Default: 10\nmtrace_rate=100\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "request-header-전달하기",
        children: "Request Header 전달하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "분산 추적 정보(헤더 정보)를 확인하려면 Request Header를 전달해야 합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "// import \"github.com/whatap/go-api/trace\"\nfunc UpdateMtrace(traceCtx *trace.TraceCtx, header http.Header) \n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.StartWithRequest"
        }), " 함수는 내부적으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "UpdateMtrace"
        }), " 함수를 호출합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.StartWithRequest"
        }), " 함수를 사용하지 않는다면 직접 호출하여 전달받은 헤더 정보를 분석해야 합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "// func GetTraceContext(ctx context.Context) (context.Context, *TraceCtx)\n// if v := ctx.Value(\"whatap\"); v != nil {\n//      return ctx, v.(*TraceCtx)\n// }\nctx, traceCtx := trace.GetTraceContext(ctx);\nif traceCtx != nil {\n    trace.UpdateMtrace(traceCtx, header)\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "trace.Start"
          }), " 함수 내부 코드 참조:"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-go",
            metastring: "title=\"Go\" showLineNumbers {6}",
            children: "func Start(ctx context.Context, name string) (context.Context, error) {\n    ctx, traceCtx := NewTraceContext(ctx)\n    traceCtx.Name = name\n    traceCtx.StartTime = dateutil.SystemNow()\n    // update multi trace info\n    UpdateMtrace(traceCtx, http.Header{})\n\n    ...\n"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "trace.StartWithRequest"
          }), " 함수 내부 코드 참조:"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-go",
            metastring: "title=\"Go\" showLineNumbers {6}",
            children: "func StartWithRequest(r *http.Request) (context.Context, error) {\n    ctx, traceCtx := NewTraceContext(r.Context())\n    traceCtx.Name = r.RequestURI\n    traceCtx.StartTime = dateutil.SystemNow()\n    // update multi trace info\n    UpdateMtrace(traceCtx, r.Header)\n\n    ...\n"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "http-연결-시-header-정보-추가하기",
        children: "HTTP 연결 시 Header 정보 추가하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "외부로 HTTP 연결할 때 Request Header에 추적을 위한 Header 정보를 추가하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\" showLineNumbers",
          children: "import (\n    \"github.com/whatap/go-api/trace\"\n)\n\nfunc GetMTrace(ctx context.Context) http.Header\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["다음은 분산 추적에 필요한 Header를 조회하는 함수입니다. 반환되는 Header를 외부 Request 요청에 추가해야 합니다. context에는 'whatap' 항목의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.TraceContext"
        }), " 정보가 포함되어 있어야 합니다. 해당 정보는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.Start"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "StartWithRequest"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "StartWithContext"
        }), " 함수를 사용할 때 내부에 whatap context 정보가 추가됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Example code\" showLineNumbers {1}",
          children: "headers := trace.GetMTrace(wCtx)\nfor key, _ := range headers {\n    // req *http.Request\n    // The Add function is also available.\n    req.Header.Set(key, headers.Get(key))\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "자동으로-header-추가하기",
        children: "자동으로 Header 추가하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Whatap transport(RoundTrip)에는 내부적으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "GetMTrace"
        }), "를 사용하는 코드가 이미 존재합니다. 옵션만 활성화하면 자동으로 Header 정보를 추가할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Example code\" showLineNumbers",
          children: "import (\n    \"net/http\"\n    \"github.com/whatap/go-api/instrumentation/net/http/whataphttp\"\n)\n\n...\n\n//client := http.DefaultClient\nclient := http.Client{\n    Timeout: timeout,\n}\nclient.Transport = whataphttp.NewRoundTrip(ctx, http.DefaultTransport)\nif resp, err := client.Get(callUrl); err == nil {\n    ...\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["다음은 여러 개의 Transport 사용 예제입니다. context에는 'whatap' 항목의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.TraceContext"
        }), " 정보가 포함되어 있어야 합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Exmple code\" showLineNumbers",
          children: "import (\n    \"net/http\"\n    \"github.com/whatap/go-api/instrumentation/net/http/whataphttp\"\n)\n\n...\n\nclient := http.DefaultClient\nclient.Transport = NewAccessLogRoundTrip(whataphttp.NewRoundTrip(ctx, http.DefaultTransport))\t\n\n...\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "함수-추적",
        children: "함수 추적"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "사용자 함수 또는 원하는 구간의 실행 시간을 측정하기 위한 API 입니다. 함수 실행 전, 후로 API를 설정할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "import (\n    \"github.com/whatap/go-api/method\"\n)\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n  \n    ctx, _ := trace.Start(context.Background(), \"Trace Method\")\n    defer trace.End(ctx, nil)\n  \n    getUser(ctx)\n}\n\nfunc getUser(ctx context.Context) {\n    methodCtx, _ := method.Start(ctx, \"getUser\")\n    defer method.End(methodCtx, nil)\n    time.Sleep(time.Duration(1) * time.Second)\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "api-3",
        children: "API"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func Start(ctx context.Context, name string) (*MethodCtx, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func End(methodCtx *MethodCtx, err error) error\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "func Trace(ctx context.Context, name string, elapsed int, err error) error\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "log",
        children: "Log"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "에이전트-설정하기-1",
        children: "에이전트 설정하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["애플리케이션 실행 전에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), " 파일에 에이전트 옵션을 설정하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title=\"whatap.conf\"",
          children: "# Enable all log collection\nlogsink_enabled=true\n\n# Enable stdout collection\nlogsink_stdout_enabled=true\n\n# Enable stderr collection\nlogsink_stderr_enabled=true\n\n# Optional. This is a setting for compressing data. \nlogsin_zip_enabled=true\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "로그-라이브러리-초기화-전",
        children: "로그 라이브러리 초기화 전"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["로그 라이브러리 초기화 전에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.Init()"
        }), " 함수를 호출해야 합니다. 내부적으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "os.Stdout"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "os.Stderr"
        }), "를 래핑합니다. 이후 로그 라이브러리가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "os.Stdout"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "os.Stderr"
        }), "를 설정하면 자동으로 로그를 수집합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "로그-라이브러리-초기화-후",
        children: "로그 라이브러리 초기화 후"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["로그 라이브러리 초기화 후에는 별도의 설정 함수를 통해서 래핑한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "io.Writer"
        }), "를 설정할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "logsink.GetWriterHookStdout()"
            }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "os.Stderr"
            }), "를 래핑한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "io.Writer"
            }), "를 반환합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "os.Stdout"
            }), "에 출력하면서 동시에 해당 로그를 와탭 로그로 수집합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "logsink.GetWriterHookStderr()"
            }), ":  ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "os.Stderr"
            }), "를 래핑한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "io.Writer"
            }), "를 반환합니다. 래핑한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "io.Writer"
            }), "는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "os.Stderr"
            }), "에 출력 후 로그 내용을 와탭 로그로 수집합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "api-4",
        children: "API"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "os.Stdout"
            }), "를 래핑한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "io.Writer"
            }), "를 반환합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-go",
              children: "func GetWriterHookStdout() io.Writer\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "os.Stderr"
            }), "를 래핑한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "io.Writer"
            }), "를 반환합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-go",
              children: "func GetWriterHookStderr() io.Writer\n"
            })
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음 패키지별 코드 예제를 참조하세요."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "log-package",
        children: "log package"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["log 패키지는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "import"
        }), " 시점(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "init"
        }), " 함수)에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "os.Stderr"
        }), "를 설정합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.Init"
        }), " 함수를 먼저 호출할 수 없기 때문에 래핑한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "io.Writer"
        }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "os.Stderr"
        }), ")를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "log.SetOutput"
        }), " 함수를 통해 설정합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["이후 사용되는 log 패키지의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "print"
        }), " 함수를 사용한 출력은 래핑한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "io.Writer"
        }), "를 통해서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "os.Stderr"
        }), "에 출력은 유지하면서 동시에 로그 내용을 와탭 로그로 수집합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"log package\"",
          children: "import (\n    \"log\"\n    \"github.com/whatap/go-api/logsink\"\n)\n\n...\n\nif logsink.GetWriterHookStderr() != nil {\n    // set single writer\n    log.SetOutput(logsink.GetWriterHookStderr())\t\n    \n    // set multi writer \n    multi := io.MultiWriter(file, logsink.GetWriterFromStderr())\n    log.SetOutput(logsink.GetWriterHookStderr())\n}\n\n// \nlog.Println(\"aaaaa\")\n...\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "gouberorgzap",
        children: "go.uber.org/zap"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "os.Stdout"
        }), "을 설정하기 전에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.Init()"
        }), " 함수를 호출하면 자동으로 로그를 수집합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "os.Stdout"
        }), " 출력은 유지하면서 동시에 와탭 로그로 수집합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"go.uber.org/zap\"",
          children: "import (\n    \"github.com/whatap/go-api/trace\"\n    \"github.com/whatap/go-api/logsink\"\n    \n    \"go.uber.org/zap\"\n    \"go.uber.org/zap/zapcore\"\n)\n\nfunc main() {\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n\n    // fmt.Println(\"Logger stdout=\", os.Stdout, zapcore.AddSync(os.Stdout))\n    consoleCore := zapcore.NewCore(\n        zapcore.NewConsoleEncoder(consoleEncoderConfig), \n        zapcore.AddSync(os.Stdout),                      \n        zap.InfoLevel,\n    )\n\n    // Menggabungkan core file dan console\n    core := zapcore.NewTee(consoleCore)\n    Log = zap.New(core, zap.AddCaller(), zap.AddStacktrace(zapcore.ErrorLevel))\n    Log.Info(\"logger started\")\n\n    ...\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "githubcomsirupsenlogrus",
        children: "github.com/sirupsen/logrus"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["래핑한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "io.Writer"
        }), "를 설정하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "os.Stderr"
        }), " 출력은 유지하면서 동시에 와탭 로그로 수집합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"github.com/sirupsen/logrus\"",
          children: "package main\n\nimport (\n    \"time\"\n\n    log \"github.com/sirupsen/logrus\"\n\n    \"github.com/whatap/go-api/logsink\"\n    \"github.com/whatap/go-api/trace\"\n)\n\nfunc main() {\n    trace.Init(nil)\n    defer trace.Shutdown()\n\n    //In WhaTap, set io.Writer wrapping os.Stderr as the output of logrus\n    if logsink.GetWriterHookStderr() != nil {\n        log.SetOutput(logsink.GetWriterHookStderr())\n    }\n\n    for i := 0; i < 100; i++ {\n        log.WithFields(log.Fields{\n            \"animal\":  \"tiger\",\n            \"habitat\": \"mountain\",\n        }).Info(\"Index:[\", i, \"] A tiger appears\")\n\n        time.Sleep(100 * time.Millisecond)\n    }\n}\n"
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