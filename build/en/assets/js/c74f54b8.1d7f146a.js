"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[52930],{

/***/ 13499:
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
  "description": "Release date: 2022-08-02",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/golang/golang-0.1.12.mdx",
  "sourceDirName": "release-notes/golang",
  "slug": "/release-notes/golang/golang-0_1_12",
  "permalink": "/en/release-notes/golang/golang-0_1_12",
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
  "value": "Beta - update",
  "id": "beta---update",
  "level": 2
}, {
  "value": "The Alpine Linux is supported.",
  "id": "the-alpine-linux-is-supported",
  "level": 3
}, {
  "value": "Installation guide",
  "id": "installation-guide",
  "level": 4
}, {
  "value": "Running the whatap-agent",
  "id": "running-the-whatap-agent",
  "level": 4
}, {
  "value": "Supporting the github.com/go-chi/chi library",
  "id": "supporting-the-githubcomgo-chichi-library",
  "level": 3
}, {
  "value": "Installation guide",
  "id": "installation-guide-1",
  "level": 4
}, {
  "value": "Supporting the github.com/go-gorm/gorm library",
  "id": "supporting-the-githubcomgo-gormgorm-library",
  "level": 3
}, {
  "value": "How to use the whatapgorm",
  "id": "how-to-use-the-whatapgorm",
  "level": 4
}, {
  "value": "How to use the whatapsql",
  "id": "how-to-use-the-whatapsql",
  "level": 4
}, {
  "value": "Supporting the github.com/jinzhu/gorm library",
  "id": "supporting-the-githubcomjinzhugorm-library",
  "level": 3
}, {
  "value": "How to use the whatapgorm",
  "id": "how-to-use-the-whatapgorm-1",
  "level": 4
}, {
  "value": "How to use the whatapsql",
  "id": "how-to-use-the-whatapsql-1",
  "level": 4
}, {
  "value": "Supporting the github.com/gomodule/redigo library",
  "id": "supporting-the-githubcomgomoduleredigo-library",
  "level": 3
}, {
  "value": "Supporting the github.com/shopify/sarama library",
  "id": "supporting-the-githubcomshopifysarama-library",
  "level": 3
}, {
  "value": "Tracing the async producer",
  "id": "tracing-the-async-producer",
  "level": 4
}, {
  "value": "Tracing the consumer",
  "id": "tracing-the-consumer",
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
      children: "Release date: 2022-08-02"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "beta---update",
        children: "Beta - update"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "the-alpine-linux-is-supported",
        children: "The Alpine Linux is supported."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "installation-guide",
        children: "Installation guide"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["[whatap-agent.tar.gz]After downloading the file (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz",
          children: "https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz"
        }), "), unzip the file based on the \"/\" directory. Create the monitoring file in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "/usr/whatap/agent"
        }), " path."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz\r\ntar -xvzf whatap-agent.tar.gz -C /\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "running-the-whatap-agent",
        children: "Running the whatap-agent"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "/usr/whatap/agent/whatap-agent \r\n    Default restart\r\n    Command start, stop, restart, version\r\n\r\n## Checking the version\r\n# /usr/whatap/agent/whatap-agent version\r\n0.8.5.20201209\r\n\r\n## Checking the execution\r\n# ps -elf | grep whatap\r\n  103 root      0:05 ./whatap_agent_static -t=4\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "supporting-the-githubcomgo-chichi-library",
        children: "Supporting the github.com/go-chi/chi library"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["It traces the web transactions in the chi framework. Through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Use"
        }), " function, register and trace the middleware."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "installation-guide-1",
        children: "Installation guide"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          children: "import (\r\n  \"github.com/go-chi/chi\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  \"github.com/whatap/go-api/instrumentation/github.com/go-chi/chi/whatapchi\"\r\n)\r\n\r\nfunc main() {\r\n  config := make(map[string]string)\r\n  trace.Init(config)\r\n  defer trace.Shutdown()\r\n  \r\n  r := chi.NewRouter()\r\n  \r\n  // Register the middleware of whatapchi.\r\n  r.Use(whatapchi.Middleware)\r\n  \r\n  r.Get(\"/\", func(w http.ResponseWriter, r *http.Request) {\r\n      fmt.Println(\"Response -\", r.Response)\r\n})\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/go-chi/chi",
          children: "Example reference"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "supporting-the-githubcomgo-gormgorm-library",
        children: "Supporting the github.com/go-gorm/gorm library"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "It traces the DB connection and SQLs processed through the gorm v2 framework."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "how-to-use-the-whatapgorm",
        children: "How to use the whatapgorm"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Instead of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "gorm.Open"
        }), " function, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatapgorm.OpenWithContext"
        }), " function is used. The context to be passed must include whatap TraceCtx, and can be created through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Start"
        }), " function of the trace package."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"net/http\"\r\n\r\n  \"github.com/whatap/go-api/instrumentation/github.com/go-gorm/gorm/whatapgorm\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  \"gorm.io/driver/sqlite\"\r\n  \"gorm.io/gorm\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/InsertAndDelete\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Create the context.\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // Connect the DB through whatapgorm.\r\n    db, err := whatapgorm.OpenWithContext(sqlite.Open(\"test.db\"), &gorm.Config{}, ctx)\r\n    if err != nil {\r\n      panic(\"Db connection failed.\")\r\n    }\r\n\r\n    for i := 0; i < 100; i++ {\r\n      db.Create(&Product{Code: i, Price: i * 100})\r\n    }\r\n\r\n    db.Unscoped().Delete(&Product{}, \"Code >= ? AND Code < ?\", 0, 100)\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "how-to-use-the-whatapsql",
        children: "How to use the whatapsql"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "In addition to officially supported sqlite, mysql, postgres, and sqlserver, the gorm is compatible with the drivers written based on the dialect interface."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Related link: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://gorm.io/docs/write_driver.html",
          children: "gorm driver"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"net/http\"\r\n  \"github.com/whatap/go-api/instrumentation/database/sql/whatapsql\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  \"gorm.io/driver/mysql\"\r\n  \"gorm.io/gorm\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/WhatapDriverTest\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Create the context.\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // Create the DB connection via the whatapsql driver.\r\n    dbConn, err := whatapsql.OpenContext(ctx, \"mysql\", dataSource)\r\n    \r\n    // Connect gorm through the created connection.\r\n    db, err := gorm.Open(mysql.New(mysql.Config{Conn: dbConn}), &gorm.Config{})\r\n    if err != nil {\r\n      panic(\"DB connection failed.\")\r\n    }\r\n    \r\n    for i := 0; i < 100; i++ {\r\n      db.Create(&Product{Code: i, Price: i * 100})\r\n    }\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/go-orm/gorm",
          children: "Reference example"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "supporting-the-githubcomjinzhugorm-library",
        children: "Supporting the github.com/jinzhu/gorm library"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "It traces the DB connection and SQLs processed through the gorm v1 framework."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "how-to-use-the-whatapgorm-1",
        children: "How to use the whatapgorm"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Instead of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "gorm.Open"
        }), " function, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatapgorm.OpenWithContext"
        }), " function is used. The context to be passed must include whatap TraceCtx, and can be created through the Start function of the trace package."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"net/http\"\r\n\r\n  \"github.com/whatap/go-api/instrumentation/github.com/go-gorm/gorm/whatapgorm\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  _ \"github.com/mattn/go-sqlite3\"\r\n  \"github.com/jinzhu/gorm\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/InsertAndDelete\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Create the context.\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // Connect the DB via whatapgorm.\r\n    db, err := whatapgorm.OpenWithContext(ctx, \"sqlite3\", \"test.db\")\r\n    defer db.Close()\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      panic(\"Gorm Open Fail\")\r\n    }\r\n\r\n    for i := 0; i < 100; i++ {\r\n      db.Create(&Product{Code: i, Price: i * 100})\r\n    }\r\n\r\n    db.Unscoped().Delete(Product{}, \"Code >= ? AND Code < ?\", 0, 100)\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "how-to-use-the-whatapsql-1",
        children: "How to use the whatapsql"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "In addition to officially supported sqlite, mysql, postgres, and sqlserver, the gorm is compatible with the drivers written based on the dialect interface."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Related link: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://v1.gorm.io/docs/dialects.html",
          children: "gorm driver"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"net/http\"\r\n  \"github.com/whatap/go-api/instrumentation/database/sql/whatapsql\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  \"github.com/jinzhu/gorm\"\r\n_ \"github.com/go-sql-driver/mysql\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/WhatapDriverTest\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Create the context.\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // Create the DB connection via the whatapsql driver.\r\n    var conn gorm.SQLCommon\r\n    var err error\r\n    conn, err = whatapsql.OpenContext(ctx, \"mysql\", dataSource)\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      panic(\"Whatapsql Open Fail\")\r\n    }\r\n    \r\n    // Connect gorm via the created connection.\r\n    db, err := gorm.Open(\"mysql\", conn)\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      panic(\"Gorm Open Fail\")\r\n    }\r\n    for i := 0; i < 100; i++ {\r\n      db.Create(&Product{Code: i, Price: i * 100})\r\n    }\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/jinzhu/gorm",
          children: "Reference example"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "supporting-the-githubcomgomoduleredigo-library",
        children: "Supporting the github.com/gomodule/redigo library"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["It traces commands passed to Redis via the redigo framework. Instead of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "redis.Dial"
        }), ", the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatapredigo.DialContext"
        }), " function is used."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"context\"\r\n  \"net/http\"\r\n\r\n  \"github.com/gomodule/redigo/redis\"\r\n  \"github.com/whatap/go-api/instrumentation/github.com/gomodule/redigo/whatapredigo\"\r\n  \"github.com/whatap/go-api/trace\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/SetAndGetWithDialContext\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Create the context.\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // Create the Redis connection via the whtapredigo.\r\n    conn, err := whatapredigo.DialContext(ctx, \"tcp\", \"127.0.0.1:6379\")\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      return\r\n    }\r\n    defer conn.Close()\r\n\r\n    _, err = conn.Do(\"SET\", \"DataKey\", \"DataValue\")\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      return\r\n    }\r\n\r\n    data, err := redis.Bytes(conn.Do(\"GET\", \"DataKey\"))\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      return\r\n    }\r\n  })\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/gomodule/redigo",
          children: "Reference example"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "supporting-the-githubcomshopifysarama-library",
        children: "Supporting the github.com/shopify/sarama library"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "It traces the kafka produce and consume events processed through the sarama framework."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "tracing-the-async-producer",
        children: "Tracing the async producer"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "It traces the async producer data through the whatapsarama's interceptor. When generating the producer message, if CTX-related data is passed through metadata, it is connected to the multi-transaction."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"context\"\r\n  \"net/http\"\r\n  \"github.com/Shopify/sarama\"\r\n  \"github.com/whatap/go-api/instrumentation/github.com/Shopify/sarama/whatapsarama\"\r\n  \"github.com/whatap/go-api/trace\"\r\n)\r\n\r\nfunc main() {\r\n  config := sarama.NewConfig()\r\n  brokers := []string{\"127.0.0.1:9092\"} //config kafka broker IP/Port\r\n\r\n  // Register the interrupt of whatapsarama in the config.\r\n  interceptor := whatapsarama.Interceptor{Brokers: brokers}\r\n  config.Producer.Interceptors = []sarama.ProducerInterceptor{&interceptor}\r\n\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  // The config is delivered upon prdoducer creation.\r\n  producer, err := sarama.NewAsyncProducer(brokers, config)\r\n  consumerOffset := sarama.OffsetOldest\r\n  if err != nil {\r\n    panic(err)\r\n  }\r\n  defer func() {\r\n    if err := producer.Close(); err != nil {\r\n      panic(err)\r\n    }\r\n  }()\r\n\r\n  http.HandleFunc(\"/AsyncProduceInput\", func(w http.ResponseWriter, r *http.Request) {\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer func() {\r\n      trace.End(ctx, nil)\r\n    }()\r\n    msg := &sarama.ProducerMessage{\r\n      Topic:    \"tmp-topic\",\r\n      Key:      sarama.StringEncoder(\"Data Key\"),\r\n      Value:    sarama.StringEncoder(\"Data Value\"),\r\n      Metadata: trace.GetMTrace(ctx),\r\n    }\r\n    producer.Input() <- msg //error check\r\n\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "tracing-the-consumer",
        children: "Tracing the consumer"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "It traces the consumer data through the whatapsarama's interceptor. Based on the message delivered from the producer, it is connected to the multi-transaction."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"context\"\r\n  \"flag\"\r\n  \"fmt\"\r\n  \"net/http\"\r\n  \"text/template\"\r\n\r\n  \"github.com/Shopify/sarama\"\r\n  \"github.com/whatap/go-api/instrumentation/github.com/Shopify/sarama/whatapsarama\"\r\n  \"github.com/whatap/go-api/trace\"\r\n)\r\n\r\nfunc main() {\r\n  config := sarama.NewConfig()\r\n  brokers := []string{\"127.0.0.1:9092\"} //config kafka broker IP/Port\r\n\r\n  // Register the interrupt of whatapsarama in the config.\r\n  interceptor := whatapsarama.Interceptor{Brokers: brokers}\r\n  config.Consumer.Interceptors = []sarama.ConsumerInterceptor{&interceptor}\r\n\r\n  // 1 transaction per consumption\r\n  // The config is delivered when creating a consumer.\r\n  consumer, err := sarama.NewConsumer(brokers, config)\r\n  topic := \"tmp-topic\"\r\n\r\n  partitions, _ := consumer.Partitions(topic)\r\n  consume, _ := consumer.ConsumePartition(topic, partitions[0], consumerOffset)\r\n\r\n  if consume == nil {\r\n    fmt.Println(\"consume nil\")\r\n    return\r\n  }\r\n\r\n  go func() {\r\n    for {\r\n      select {\r\n      case msg := <-consume.Messages():\r\n        fmt.Println(msg)\r\n      case consumerError := <-consume.Errors():\r\n        fmt.Println(\"error\", consumerError)\r\n        return\r\n      }\r\n    }\r\n  }()\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/shopify/sarama",
          children: "Reference example"
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