"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[52158],{

/***/ 3502:
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
  "description": "リリース：2022-08-02",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/golang/golang-0.1.12.mdx",
  "sourceDirName": "release-notes/golang",
  "slug": "/release-notes/golang/golang-0_1_12",
  "permalink": "/ja/release-notes/golang/golang-0_1_12",
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
  "value": "ベータ版 - アップデート",
  "id": "ベータ版---アップデート",
  "level": 2
}, {
  "value": "alpine linuxに対応します。",
  "id": "alpine-linuxに対応します",
  "level": 3
}, {
  "value": "インストール方法",
  "id": "インストール方法",
  "level": 4
}, {
  "value": "whatap-agent実行",
  "id": "whatap-agent実行",
  "level": 4
}, {
  "value": "github.com/go-chi/chiライブラリに対応",
  "id": "githubcomgo-chichiライブラリに対応",
  "level": 3
}, {
  "value": "インストール方法",
  "id": "インストール方法-1",
  "level": 4
}, {
  "value": "github.com/go-gorm/gormライブラリに対応",
  "id": "githubcomgo-gormgormライブラリに対応",
  "level": 3
}, {
  "value": "whatapgormの使用方法",
  "id": "whatapgormの使用方法",
  "level": 4
}, {
  "value": "whatapsqlの使用方法",
  "id": "whatapsqlの使用方法",
  "level": 4
}, {
  "value": "github.com/jinzhu/gormライブラリに対応",
  "id": "githubcomjinzhugormライブラリに対応",
  "level": 3
}, {
  "value": "whatapgormの使用方法",
  "id": "whatapgormの使用方法-1",
  "level": 4
}, {
  "value": "whatapsqlの使用方法",
  "id": "whatapsqlの使用方法-1",
  "level": 4
}, {
  "value": "github.com/gomodule/redigoライブラリに対応",
  "id": "githubcomgomoduleredigoライブラリに対応",
  "level": 3
}, {
  "value": "github.com/shopify/saramaライブラリに対応",
  "id": "githubcomshopifysaramaライブラリに対応",
  "level": 3
}, {
  "value": "async producer追跡",
  "id": "async-producer追跡",
  "level": 4
}, {
  "value": "consumer追跡",
  "id": "consumer追跡",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
      children: "リリース：2022-08-02"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "ベータ版---アップデート",
        children: "ベータ版 - アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "alpine-linuxに対応します",
        children: "alpine linuxに対応します。"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "インストール方法",
        children: "インストール方法"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz",
          children: "whatap-agent.tar.gz"
        }), "をダウンロードして「/」ディレクトリに圧縮を解凍します。_/usr/whatap/agent_ディレクトリにモニタリングインストールファイルが生成されます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz\r\ntar -xvzf whatap-agent.tar.gz -C /\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatap-agent実行",
        children: "whatap-agent実行"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "/usr/whatap/agent/whatap-agent \r\n    Default restart\r\n    Command start, stop, restart, version\r\n\r\n## バージョン確認\r\n# /usr/whatap/agent/whatap-agent version\r\n0.8.5.20201209\r\n\r\n## 実行確認\r\n# ps -elf | grep whatap\r\n  103 root      0:05 ./whatap_agent_static -t=4\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "githubcomgo-chichiライブラリに対応",
        children: "github.com/go-chi/chiライブラリに対応"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["chiフレームワークのウェブトランザクションを追跡します。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Use"
        }), "関数でミドルウェアを登録して追跡します。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "インストール方法-1",
        children: "インストール方法"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          children: "import (\r\n  \"github.com/go-chi/chi\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  \"github.com/whatap/go-api/instrumentation/github.com/go-chi/chi/whatapchi\"\r\n)\r\n\r\nfunc main() {\r\n  config := make(map[string]string)\r\n  trace.Init(config)\r\n  defer trace.Shutdown()\r\n  \r\n  r := chi.NewRouter()\r\n  \r\n  // whatapchiのmiddlewareを登録します。\r\n  r.Use(whatapchi.Middleware)\r\n  \r\n  r.Get(\"/\", func(w http.ResponseWriter, r *http.Request) {\r\n      fmt.Println(\"Response -\", r.Response)\r\n})\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/go-chi/chi",
          children: "参考例"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "githubcomgo-gormgormライブラリに対応",
        children: "github.com/go-gorm/gormライブラリに対応"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "gorm v2フレームワークを使用して処理されるDB ConnectionおよびSQLを追跡します。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatapgormの使用方法",
        children: "whatapgormの使用方法"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "gorm.Open"
        }), "関数の代わりに", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatapgorm.OpenWithContext"
        }), "関数を使用します。受け渡すcontextは、内部にwhatap TraceCtxを含まれている必要があり、traceパッケージの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Start"
        }), "関数を使用して生成することができます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"net/http\"\r\n\r\n  \"github.com/whatap/go-api/instrumentation/github.com/go-gorm/gorm/whatapgorm\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  \"gorm.io/driver/sqlite\"\r\n  \"gorm.io/gorm\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/InsertAndDelete\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Contextを作成します。\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // whatapgormでDBと接続します。\r\n    db, err := whatapgorm.OpenWithContext(sqlite.Open(\"test.db\"), &gorm.Config{}, ctx)\r\n    if err != nil {\r\n      panic(\"Db接続に失敗しました。\")\r\n    }\r\n\r\n    for i := 0; i < 100; i++ {\r\n      db.Create(&Product{Code: i, Price: i * 100})\r\n    }\r\n\r\n    db.Unscoped().Delete(&Product{}, \"Code >= ? AND Code < ?\", 0, 100)\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatapsqlの使用方法",
        children: "whatapsqlの使用方法"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "gormは公式対応するsqlite、mysql、postgres、sqlserverのdialect interfaceベースで作成されたdirverと互換性があります。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["関連リンク：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://gorm.io/docs/write_driver.html",
          children: "gorm driver"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"net/http\"\r\n  \"github.com/whatap/go-api/instrumentation/database/sql/whatapsql\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  \"gorm.io/driver/mysql\"\r\n  \"gorm.io/gorm\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/WhatapDriverTest\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Contextを作成します。\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // whatapsql driverでdb connectionを生成します。\r\n    dbConn, err := whatapsql.OpenContext(ctx, \"mysql\", dataSource)\r\n    \r\n    // 既に生成されたconnectionを通じてgormに接続します。\r\n    db, err := gorm.Open(mysql.New(mysql.Config{Conn: dbConn}), &gorm.Config{})\r\n    if err != nil {\r\n      panic(\"Db接続に失敗しました。\")\r\n    }\r\n    \r\n    for i := 0; i < 100; i++ {\r\n      db.Create(&Product{Code: i, Price: i * 100})\r\n    }\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/go-orm/gorm",
          children: "参考例"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "githubcomjinzhugormライブラリに対応",
        children: "github.com/jinzhu/gormライブラリに対応"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "gorm v1フレームワークを使用して処理されるDB ConnectionおよびSQLを追跡します。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatapgormの使用方法-1",
        children: "whatapgormの使用方法"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "gorm.Open"
        }), "関数の代わりに", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatapgorm.OpenWithContext"
        }), "関数を使用します。受け渡すcontextは、内部にwhatap TraceCtxを含める必要があり、traceパッケージのStart関数を使用して生成することができます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"net/http\"\r\n\r\n  \"github.com/whatap/go-api/instrumentation/github.com/go-gorm/gorm/whatapgorm\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  _ \"github.com/mattn/go-sqlite3\"\r\n  \"github.com/jinzhu/gorm\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/InsertAndDelete\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Contextを作成します。\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // whatapgormでDBと接続します。\r\n    db, err := whatapgorm.OpenWithContext(ctx, \"sqlite3\", \"test.db\")\r\n    defer db.Close()\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      panic(\"Gorm Open Fail\")\r\n    }\r\n\r\n    for i := 0; i < 100; i++ {\r\n      db.Create(&Product{Code: i, Price: i * 100})\r\n    }\r\n\r\n    db.Unscoped().Delete(Product{}, \"Code >= ? AND Code < ?\", 0, 100)\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatapsqlの使用方法-1",
        children: "whatapsqlの使用方法"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "gormは公式対応するsqlite、mysql、postgres、sqlserverのdialect interfaceベースで作成されたdirverと互換性があります。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["関連リンク：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://v1.gorm.io/docs/dialects.html",
          children: "gorm driver"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"net/http\"\r\n  \"github.com/whatap/go-api/instrumentation/database/sql/whatapsql\"\r\n  \"github.com/whatap/go-api/trace\"\r\n  \"github.com/jinzhu/gorm\"\r\n_ \"github.com/go-sql-driver/mysql\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/WhatapDriverTest\", func(w http.ResponseWriter, r *http.Request) {\r\n    //Contextを作成します。\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // whatapsql driverでdb connectionを生成します。\r\n    var conn gorm.SQLCommon\r\n    var err error\r\n    conn, err = whatapsql.OpenContext(ctx, \"mysql\", dataSource)\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      panic(\"Whatapsql Open Fail\")\r\n    }\r\n    \r\n    // 既に生成されたconnectionを使用してgormに接続します。\r\n    db, err := gorm.Open(\"mysql\", conn)\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      panic(\"Gorm Open Fail\")\r\n    }\r\n    for i := 0; i < 100; i++ {\r\n      db.Create(&Product{Code: i, Price: i * 100})\r\n    }\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/jinzhu/gorm",
          children: "参考例"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "githubcomgomoduleredigoライブラリに対応",
        children: "github.com/gomodule/redigoライブラリに対応"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["redigoフレームワークを使用してredisに受け渡されるコマンドを追跡します。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "redis.Dial"
        }), "の代わりに", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatapredigo.DialContext"
        }), "の関数を使用します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"context\"\r\n  \"net/http\"\r\n\r\n  \"github.com/gomodule/redigo/redis\"\r\n  \"github.com/whatap/go-api/instrumentation/github.com/gomodule/redigo/whatapredigo\"\r\n  \"github.com/whatap/go-api/trace\"\r\n)\r\n\r\nfunc main() {\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  http.HandleFunc(\"/SetAndGetWithDialContext\", func(w http.ResponseWriter, r *http.Request) {\r\n    // Contextを作成します。\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer trace.End(ctx, nil)\r\n\r\n    // whtapredigoを使用してredis connectionを生成します。\r\n    conn, err := whatapredigo.DialContext(ctx, \"tcp\", \"127.0.0.1:6379\")\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      return\r\n    }\r\n    defer conn.Close()\r\n\r\n    _, err = conn.Do(\"SET\", \"DataKey\", \"DataValue\")\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      return\r\n    }\r\n\r\n    data, err := redis.Bytes(conn.Do(\"GET\", \"DataKey\"))\r\n    if err != nil {\r\n      trace.Error(ctx, err)\r\n      return\r\n    }\r\n  })\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/gomodule/redigo",
          children: "参考例"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "githubcomshopifysaramaライブラリに対応",
        children: "github.com/shopify/saramaライブラリに対応"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "saramaフレームワークを使用して処理されるkafka produce、consumeイベントを追跡します。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "async-producer追跡",
        children: "async producer追跡"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "whatapsaramaのInterceptorを使用してasync producer情報を追跡します。Producer Messageの作成時に、Ctx関連情報をMetadataを使用して受け渡すと、Multi Transactionに接続されます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"context\"\r\n  \"net/http\"\r\n  \"github.com/Shopify/sarama\"\r\n  \"github.com/whatap/go-api/instrumentation/github.com/Shopify/sarama/whatapsarama\"\r\n  \"github.com/whatap/go-api/trace\"\r\n)\r\n\r\nfunc main() {\r\n  config := sarama.NewConfig()\r\n  brokers := []string{\"127.0.0.1:9092\"} //config kafka broker IP/Port\r\n\r\n  // whatapsaramaの割り込みをconfigに登録します。\r\n  interceptor := whatapsarama.Interceptor{Brokers: brokers}\r\n  config.Producer.Interceptors = []sarama.ProducerInterceptor{&interceptor}\r\n\r\n  whatapConfig := make(map[string]string)\r\n  trace.Init(whatapConfig)\r\n  defer trace.Shutdown()\r\n\r\n  // Prdoducer生成時にconfigを受け渡します。\r\n  producer, err := sarama.NewAsyncProducer(brokers, config)\r\n  consumerOffset := sarama.OffsetOldest\r\n  if err != nil {\r\n    panic(err)\r\n  }\r\n  defer func() {\r\n    if err := producer.Close(); err != nil {\r\n      panic(err)\r\n    }\r\n  }()\r\n\r\n  http.HandleFunc(\"/AsyncProduceInput\", func(w http.ResponseWriter, r *http.Request) {\r\n    ctx, _ := trace.StartWithRequest(r)\r\n    defer func() {\r\n      trace.End(ctx, nil)\r\n    }()\r\n    msg := &sarama.ProducerMessage{\r\n      Topic:    \"tmp-topic\",\r\n      Key:      sarama.StringEncoder(\"Data Key\"),\r\n      Value:    sarama.StringEncoder(\"Data Value\"),\r\n      Metadata: trace.GetMTrace(ctx),\r\n    }\r\n    producer.Input() <- msg //error check\r\n\r\n  })\r\n\r\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "consumer追跡",
        children: "consumer追跡"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "whatapsaramaのInterceptorを使用してconsumer情報を追跡します。Produceから渡されたMessageを基準にMulti Transactionに接続されます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title='Install guide'",
          children: "import (\r\n  \"context\"\r\n  \"flag\"\r\n  \"fmt\"\r\n  \"net/http\"\r\n  \"text/template\"\r\n\r\n  \"github.com/Shopify/sarama\"\r\n  \"github.com/whatap/go-api/instrumentation/github.com/Shopify/sarama/whatapsarama\"\r\n  \"github.com/whatap/go-api/trace\"\r\n)\r\n\r\nfunc main() {\r\n  config := sarama.NewConfig()\r\n  brokers := []string{\"127.0.0.1:9092\"} //config kafka broker IP/Port\r\n\r\n  // whatapsaramaの割り込みをconfigに登録します。\r\n  interceptor := whatapsarama.Interceptor{Brokers: brokers}\r\n  config.Consumer.Interceptors = []sarama.ConsumerInterceptor{&interceptor}\r\n\r\n  // consume 1回あたり1tx\r\n  // Consumer生成時にconfigを伝達受け渡します。\r\n  consumer, err := sarama.NewConsumer(brokers, config)\r\n  topic := \"tmp-topic\"\r\n\r\n  partitions, _ := consumer.Partitions(topic)\r\n  consume, _ := consumer.ConsumePartition(topic, partitions[0], consumerOffset)\r\n\r\n  if consume == nil {\r\n    fmt.Println(\"consume nil\")\r\n    return\r\n  }\r\n\r\n  go func() {\r\n    for {\r\n      select {\r\n      case msg := <-consume.Messages():\r\n        fmt.Println(msg)\r\n      case consumerError := <-consume.Errors():\r\n        fmt.Println(\"error\", consumerError)\r\n        return\r\n      }\r\n    }\r\n  }()\r\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/whatap/go-api-example/tree/main/github.com/shopify/sarama",
          children: "参考例"
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