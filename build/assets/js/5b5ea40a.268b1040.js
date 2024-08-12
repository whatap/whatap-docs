"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[70178],{

/***/ 63871:
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
	id: 'golang-0_1_12',
	title: 'Go Agent v0.1.12',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar'
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/golang/golang-0_1_12",
  "title": "Go Agent v0.1.12",
  "description": "배포일: 2022-08-02",
  "source": "@site/docs/release-notes/golang/golang-0.1.12.mdx",
  "sourceDirName": "release-notes/golang",
  "slug": "/release-notes/golang/golang-0_1_12",
  "permalink": "/release-notes/golang/golang-0_1_12",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/golang/golang-0.1.12.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "golang-0_1_12",
    "title": "Go Agent v0.1.12",
    "toc_max_heading_level": 2,
    "displayed_sidebar": "releaseSidebar"
  },
  "sidebar": "releaseSidebar"
};
const assets = {

};





const toc = [{
  "value": "베타 - 업데이트",
  "id": "베타---업데이트",
  "level": 2
}, {
  "value": "alpine linux 를 지원합니다.",
  "id": "alpine-linux-를-지원합니다",
  "level": 3
}, {
  "value": "설치 안내",
  "id": "설치-안내",
  "level": 4
}, {
  "value": "whatap-agent 실행",
  "id": "whatap-agent-실행",
  "level": 4
}, {
  "value": "github.com/go-chi/chi 라이브러리 지원",
  "id": "githubcomgo-chichi-라이브러리-지원",
  "level": 3
}, {
  "value": "설치 안내",
  "id": "설치-안내-1",
  "level": 4
}, {
  "value": "github.com/go-gorm/gorm 라이브러리 지원",
  "id": "githubcomgo-gormgorm-라이브러리-지원",
  "level": 3
}, {
  "value": "whatapgorm 사용 방식",
  "id": "whatapgorm-사용-방식",
  "level": 4
}, {
  "value": "whatapsql 사용 방식",
  "id": "whatapsql-사용-방식",
  "level": 4
}, {
  "value": "github.com/jinzhu/gorm 라이브러리 지원",
  "id": "githubcomjinzhugorm-라이브러리-지원",
  "level": 3
}, {
  "value": "whatapgorm 사용 방식",
  "id": "whatapgorm-사용-방식-1",
  "level": 4
}, {
  "value": "whatapsql 사용 방식",
  "id": "whatapsql-사용-방식-1",
  "level": 4
}, {
  "value": "github.com/gomodule/redigo 라이브러리 지원",
  "id": "githubcomgomoduleredigo-라이브러리-지원",
  "level": 3
}, {
  "value": "github.com/shopify/sarama 라이브러리 지원",
  "id": "githubcomshopifysarama-라이브러리-지원",
  "level": 3
}, {
  "value": "async producer 추적",
  "id": "async-producer-추적",
  "level": 4
}, {
  "value": "consumer 추적",
  "id": "consumer-추적",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "배포일: 2022-08-02"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "베타---업데이트",
        children: "베타 - 업데이트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "alpine-linux-를-지원합니다",
        children: "alpine linux 를 지원합니다."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "설치-안내",
        children: "설치 안내"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz",
          children: "whatap-agent.tar.gz"
        }), "을 다운받고 '/' 디렉터리 기준으로 압축을 해제합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "/usr/whatap/agent"
        }), " 디렉터리에 모니터링 설치 파일이 생성됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz\r\ntar -xvzf whatap-agent.tar.gz -C /\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatap-agent-실행",
        children: "whatap-agent 실행"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "/usr/whatap/agent/whatap-agent \r\n    Default restart\r\n    Command start, stop, restart, version\r\n\r\n## 버전 확인\r\n# /usr/whatap/agent/whatap-agent version\r\n0.8.5.20201209\r\n\r\n## 실행 확인\r\n# ps -elf | grep whatap\r\n  103 root      0:05 ./whatap_agent_static -t=4\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "githubcomgo-chichi-라이브러리-지원",
        children: "github.com/go-chi/chi 라이브러리 지원"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["chi 프레임워크의 웹 트랜잭션을 추적합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Use"
        }), " 함수를 통해 미들웨어를 등록하여 추적합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "설치-안내-1",
        children: "설치 안내"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          children: "import (\r\n  \"github.com/go-chi/chi\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  \"github.com/whatap/go-api/instrumentation/github.com/go-chi/chi/whatapchi\"\r\n)\r\n\r\nfunc main() {\r\n  config := make(map[string]string)\r\n  trace.Init(config)\r\n  defer trace.Shutdown()\r\n  \r\n  r := chi.NewRouter()\r\n  \r\n  // whatapchi의 middleware를 등록합니다.\r\n  r.Use(whatapchi.Middleware)\r\n  \r\n  r.Get(\"/\", func(w http.ResponseWriter, r *http.Request) {\r\n      fmt.Println(\"Response -\", r.Response)\r\n})\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/go-chi/chi",
          children: "예제 참조"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "githubcomgo-gormgorm-라이브러리-지원",
        children: "github.com/go-gorm/gorm 라이브러리 지원"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "gorm v2 프레임워크를 통해 처리되는 DB Connection 및 SQL을 추적합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatapgorm-사용-방식",
        children: "whatapgorm 사용 방식"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "gorm.Open"
        }), " 함수 대신에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatapgorm.OpenWithContext"
        }), " 함수를 사용합니다. 전달하는 context는 내부에 whatap TraceCtx를 포함해야 하며 trace 패키지의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Start"
        }), " 함수를 통해 생성 할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"net/http\"\r\n\r\n  \"github.com/whatap/go-api/instrumentation/github.com/go-gorm/gorm/whatapgorm\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  \"gorm.io/driver/sqlite\"\r\n  \"gorm.io/gorm\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/InsertAndDelete\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Context를 생성합니다.\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // whatapgorm을 통해 DB를 연결합니다.\r\n    db, err := whatapgorm.OpenWithContext(sqlite.Open(\"test.db\"), &gorm.Config{}, ctx)\r\n    if err != nil {\r\n      panic(\"Db 연결에 실패하였습니다.\")\r\n    }\r\n\r\n    for i := 0; i < 100; i++ {\r\n      db.Create(&Product{Code: i, Price: i * 100})\r\n    }\r\n\r\n    db.Unscoped().Delete(&Product{}, \"Code >= ? AND Code < ?\", 0, 100)\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatapsql-사용-방식",
        children: "whatapsql 사용 방식"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "gorm은 공식 지원하는 sqlite, mysql, postgres, sqlserver 외에도 dialect interface 기반으로 작성된 dirver에 대해서 호환 가능합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["관련 링크 : ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://gorm.io/docs/write_driver.html",
          children: "gorm driver"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"net/http\"\r\n  \"github.com/whatap/go-api/instrumentation/database/sql/whatapsql\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  \"gorm.io/driver/mysql\"\r\n  \"gorm.io/gorm\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/WhatapDriverTest\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Context를 생성합니다.\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // whatapsql driver로 db connection을 생성합니다.\r\n    dbConn, err := whatapsql.OpenContext(ctx, \"mysql\", dataSource)\r\n    \r\n    // 기 생성된 connection을 통해 gorm에 연결합니다.\r\n    db, err := gorm.Open(mysql.New(mysql.Config{Conn: dbConn}), &gorm.Config{})\r\n    if err != nil {\r\n      panic(\"Db 연결에 실패하였습니다.\")\r\n    }\r\n    \r\n    for i := 0; i < 100; i++ {\r\n      db.Create(&Product{Code: i, Price: i * 100})\r\n    }\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/go-orm/gorm",
          children: "참조 예제"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "githubcomjinzhugorm-라이브러리-지원",
        children: "github.com/jinzhu/gorm 라이브러리 지원"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "gorm v1 프레임워크를 통해 처리되는 DB Connection 및 SQL을 추적합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatapgorm-사용-방식-1",
        children: "whatapgorm 사용 방식"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "gorm.Open"
        }), " 함수 대신에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatapgorm.OpenWithContext"
        }), " 함수를 사용합니다. 전달하는 context는 내부에 whatap TraceCtx를 포함해야 하며 trace 패키지의 Start 함수를 통해 생성 할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"net/http\"\r\n\r\n  \"github.com/whatap/go-api/instrumentation/github.com/go-gorm/gorm/whatapgorm\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  _ \"github.com/mattn/go-sqlite3\"\r\n  \"github.com/jinzhu/gorm\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/InsertAndDelete\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Context를 생성합니다.\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // whatapgorm을 통해 DB를 연결합니다.\r\n    db, err := whatapgorm.OpenWithContext(ctx, \"sqlite3\", \"test.db\")\r\n    defer db.Close()\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      panic(\"Gorm Open Fail\")\r\n    }\r\n\r\n    for i := 0; i < 100; i++ {\r\n      db.Create(&Product{Code: i, Price: i * 100})\r\n    }\r\n\r\n    db.Unscoped().Delete(Product{}, \"Code >= ? AND Code < ?\", 0, 100)\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatapsql-사용-방식-1",
        children: "whatapsql 사용 방식"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "gorm은 공식 지원하는 sqlite, mysql, postgres, sqlserver 외에도 dialect interface 기반으로 작성된 dirver에 대해서 호환 가능합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["관련 링크 : ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://v1.gorm.io/docs/dialects.html",
          children: "gorm driver"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"net/http\"\r\n  \"github.com/whatap/go-api/instrumentation/database/sql/whatapsql\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  \"github.com/jinzhu/gorm\"\r\n_ \"github.com/go-sql-driver/mysql\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/WhatapDriverTest\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Context를 생성합니다.\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // whatapsql driver로 db connection을 생성합니다.\r\n    var conn gorm.SQLCommon\r\n    var err error\r\n    conn, err = whatapsql.OpenContext(ctx, \"mysql\", dataSource)\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      panic(\"Whatapsql Open Fail\")\r\n    }\r\n    \r\n    // 기 생성된 connection을 통해 gorm에 연결합니다.\r\n    db, err := gorm.Open(\"mysql\", conn)\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      panic(\"Gorm Open Fail\")\r\n    }\r\n    for i := 0; i < 100; i++ {\r\n      db.Create(&Product{Code: i, Price: i * 100})\r\n    }\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/jinzhu/gorm",
          children: "참조 예제"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "githubcomgomoduleredigo-라이브러리-지원",
        children: "github.com/gomodule/redigo 라이브러리 지원"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["redigo 프레임워크를 통해 redis에 전달되는 명령을 추적합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "redis.Dial"
        }), " 대신에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatapredigo.DialContext"
        }), "를 함수를 사용합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"context\"\r\n  \"net/http\"\r\n\r\n  \"github.com/gomodule/redigo/redis\"\r\n  \"github.com/whatap/go-api/instrumentation/github.com/gomodule/redigo/whatapredigo\"\r\n  \"github.com/whatap/go-api/trace\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/SetAndGetWithDialContext\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Context를 생성합니다.\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // whtapredigo를 통해 redis connection을 생성합니다.\r\n    conn, err := whatapredigo.DialContext(ctx, \"tcp\", \"127.0.0.1:6379\")\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      return\r\n    }\r\n    defer conn.Close()\r\n\r\n    _, err = conn.Do(\"SET\", \"DataKey\", \"DataValue\")\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      return\r\n    }\r\n\r\n    data, err := redis.Bytes(conn.Do(\"GET\", \"DataKey\"))\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      return\r\n    }\r\n  })\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/gomodule/redigo",
          children: "참조 예제"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "githubcomshopifysarama-라이브러리-지원",
        children: "github.com/shopify/sarama 라이브러리 지원"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "sarama 프레임워크를 통해서 처리되는 kafka produce, consume 이벤트를 추적합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "async-producer-추적",
        children: "async producer 추적"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "whatapsarama의 Interceptor를 통해 async producer 정보를 추적합니다. Producer Message 생성시 Ctx 관련 정보를 Metadata를 통해 전달하면 Multi Transaction으로 연결 됩니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"context\"\r\n  \"net/http\"\r\n  \"github.com/Shopify/sarama\"\r\n  \"github.com/whatap/go-api/instrumentation/github.com/Shopify/sarama/whatapsarama\"\r\n  \"github.com/whatap/go-api/trace\"\r\n)\r\n\r\nfunc main() {\r\n  config := sarama.NewConfig()\r\n  brokers := []string{\"127.0.0.1:9092\"} //config kafka broker IP/Port\r\n\r\n  // whatapsarama의 인터럽트를 config에 등록합니다.\r\n  interceptor := whatapsarama.Interceptor{Brokers: brokers}\r\n  config.Producer.Interceptors = []sarama.ProducerInterceptor{&interceptor}\r\n\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  // Prdoducer 생성시 config를 전달합니다.\r\n  producer, err := sarama.NewAsyncProducer(brokers, config)\r\n  consumerOffset := sarama.OffsetOldest\r\n  if err != nil {\r\n    panic(err)\r\n  }\r\n  defer func() {\r\n    if err := producer.Close(); err != nil {\r\n      panic(err)\r\n    }\r\n  }()\r\n\r\n  http.HandleFunc(\"/AsyncProduceInput\", func(w http.ResponseWriter, r *http.Request) {\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer func() {\r\n      trace.End(ctx, nil)\r\n    }()\r\n    msg := &sarama.ProducerMessage{\r\n      Topic:    \"tmp-topic\",\r\n      Key:      sarama.StringEncoder(\"Data Key\"),\r\n      Value:    sarama.StringEncoder(\"Data Value\"),\r\n      Metadata: trace.GetMTrace(ctx),\r\n    }\r\n    producer.Input() <- msg //error check\r\n\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "consumer-추적",
        children: "consumer 추적"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "whatapsarama의 Interceptor를 통해 consumer 정보를 추적합니다. Produce에서 전달된 Message 기준으로 Multi Transaction으로 연결 됩니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"context\"\r\n  \"flag\"\r\n  \"fmt\"\r\n  \"net/http\"\r\n  \"text/template\"\r\n\r\n  \"github.com/Shopify/sarama\"\r\n  \"github.com/whatap/go-api/instrumentation/github.com/Shopify/sarama/whatapsarama\"\r\n  \"github.com/whatap/go-api/trace\"\r\n)\r\n\r\nfunc main() {\r\n  config := sarama.NewConfig()\r\n  brokers := []string{\"127.0.0.1:9092\"} //config kafka broker IP/Port\r\n\r\n  // whatapsarama의 인터럽트를 config에 등록합니다.\r\n  interceptor := whatapsarama.Interceptor{Brokers: brokers}\r\n  config.Consumer.Interceptors = []sarama.ConsumerInterceptor{&interceptor}\r\n\r\n  // consume 1회당1tx\r\n  // Consumer 생성시 config를 전달합니다.\r\n  consumer, err := sarama.NewConsumer(brokers, config)\r\n  topic := \"tmp-topic\"\r\n\r\n  partitions, _ := consumer.Partitions(topic)\r\n  consume, _ := consumer.ConsumePartition(topic, partitions[0], consumerOffset)\r\n\r\n  if consume == nil {\r\n    fmt.Println(\"consume nil\")\r\n    return\r\n  }\r\n\r\n  go func() {\r\n    for {\r\n      select {\r\n      case msg := <-consume.Messages():\r\n        fmt.Println(msg)\r\n      case consumerError := <-consume.Errors():\r\n        fmt.Println(\"error\", consumerError)\r\n        return\r\n      }\r\n    }\r\n  }()\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/shopify/sarama",
          children: "참조 예제"
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