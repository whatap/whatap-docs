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
	tags: [
		'Go',
		'API 가이드',
		'라이브러리'
	]
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
  "tags": [
    {
      "inline": true,
      "label": "Go",
      "permalink": "/whatap-docs/tags/go"
    },
    {
      "inline": true,
      "label": "API 가이드",
      "permalink": "/whatap-docs/tags/api-가이드"
    },
    {
      "inline": true,
      "label": "라이브러리",
      "permalink": "/whatap-docs/tags/라이브러리"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "api-guide",
    "title": "API 가이드",
    "description": "Go 라이브러리를 이용해 와탭 에이전트에 모니터링할 데이터를 전송할 수 있습니다.",
    "tags": [
      "Go",
      "API 가이드",
      "라이브러리"
    ]
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
  "value": "http transport RoundTripper",
  "id": "http-transport-roundtripper",
  "level": 3
}, {
  "value": "API",
  "id": "api-2",
  "level": 3
}, {
  "value": "함수 추적",
  "id": "함수-추적",
  "level": 2
}, {
  "value": "API",
  "id": "api-3",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
          className: "language-go",
          metastring: "title='Go'",
          children: "import \"github.com/whatap/go-api/trace\"\n\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n\n    ...\n}\n\nfunc Init(m map[string]string)\n"
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
          metastring: "title='Go'",
          children: "m := make(map[string]string)\nm[\"net_ipc_host\"] = \"127.0.0.1\"\nm[\"net_ipc_port\"] = \"6601\"\n\ntrace.Init(m)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
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
          metastring: "title='Go'",
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
          metastring: "title='Go'",
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
              metastring: "title='Go'",
              children: "http.HandleFunc(\"/wrapHandleFunc\", trace.Func(func(w http.ResponseWriter, r *http.Request) {\n    ...\n}))\n"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-go",
              metastring: "title='Go'",
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
          metastring: "title='Go'",
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
          metastring: "title='Go'",
          children: "func Start(ctx context.Context, name string) (context.Context, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "func End(ctx context.Context, err error) error\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "func StartWithRequest(r *http.Request) (context.Context, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "func Step(ctx context.Context, title, message string, elapsed, value int) error\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "func HandlerFunc(handler func(http.ResponseWriter, *http.Request)) http.HandlerFunc\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
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
          metastring: "title='Go'",
          children: "import (\n    whatapsql \"github.com/whatap/go-api/sql\"\n)\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n    \n    ctx, _ := trace.Start(context.Background(), \"Trace Open DB\")\n    defer trace.End(ctx, nil)\n    \n    sqlCtx, _ := whatapsql.StartOpen(ctx, \"id@tcp(x.x.x.x:3306)/test\")\n    db, err := sql.Open(\"mysql\", \"id:pwd@tcp(x.x.x.x:3306)/test\")\n    whatapsql.End(sqlCtx, err)\n    defer db.Close()\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "import (\n    whatapsql \"github.com/whatap/go-api/sql\"\n)\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n    \n    ctx, _ := trace.Start(context.Background(), \"Trace Query\")\n    defer trace.End(ctx, nil)\n    \n    query = \"select id, subject from tbl_faq limit 10\"\n    sqlCtx, _ = whatapsql.Start(ctx, \"id:pwd@tcp(x.x.x.x:3306)/test\", query)\n    rows, err := db.QueryContext(ctx, query)\n    whatapsql.End(sqlCtx, err)\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
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
          metastring: "title='Go'",
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
          metastring: "title='Go'",
          children: "func Start(ctx context.Context, dbhost, sql string) (*SqlCtx, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "func StartOpen(ctx context.Context, dbhost string) (*SqlCtx, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "func End(sqlCtx *SqlCtx, err error) error\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "func StartWithParam(ctx context.Context, dbhost, sql, param ...interface{}) (*SqlCtx, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "func StartWithParamArray(ctx context.Context, dbhost, sql string, param []interface{}) (*SqlCtx, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
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
          metastring: "title='Go'",
          children: "import (\n    \"github.com/whatap/go-api/httc\"\n)\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n  \n    ctx, _ := trace.Start(context.Background(), \"Trace Http Call\")\n    defer trace.End(ctx, nil)\n  \n    httpcCtx, _ := httpc.Start(ctx, callUrl)\n    resp, err := http.Get(callUrl)\n    if err == nil {\n      httpc.End(httpcCtx, resp.StatusCode, \"\", nil)\n    } else {\n      httpc.End(httpcCtx, 0, \"\", err)\n    }\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "http-transport-roundtripper",
        children: "http transport RoundTripper"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "RoundTripper를 설정할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "import (\n    \"github.com/whatap/go-api/instrumentation/net/http/whataphttp\"\n)\nfunc main() {\n    config := make(map[string]string)  \n    trace.Init(config)  \n    defer trace.Shutdown()    \n    \n    ctx, _ := trace.Start(context.Background(), \"Http call\")  \n    defer trace.End(ctx, nil)  \n    \n    callUrl := \"http://aaa.com/xxx\"  \n    client := http.DefaultClient        \n    // Use WhaTap RoundTripper. whatap의 TraceCtx가 있는 context 를 전달합니다.   \n    client.Transport = whataphttp.NewRoundTrip(ctx, http.DefaultTransport)        \n    resp, err := client.Get(callUrl)  \n    if err != nil {      \n      ...  \n    }  \n    defer resp.Body.Close()  \n    \n    ...\n    \n}\n"
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
          metastring: "title='Go'",
          children: "func Start(ctx context.Context, url string) (*HttpcCtx, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "func End(httpcCtx *HttpcCtx, status int, reason string, err error) error\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "func Trace(ctx context.Context, host string, port int, url string, elapsed int, status int, reason string, err error) error\n"
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
          metastring: "title='Go'",
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
          metastring: "title='Go'",
          children: "func Start(ctx context.Context, name string) (*MethodCtx, error)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "func End(methodCtx *MethodCtx, err error) error\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Go'",
          children: "func Trace(ctx context.Context, name string, elapsed int, err error) error\n"
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