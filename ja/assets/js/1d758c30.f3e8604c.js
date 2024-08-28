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
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
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
    "displayed_sidebar": "releaseSidebar",
    "isTranslationMissing": false
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
          children: "wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz\ntar -xvzf whatap-agent.tar.gz -C /\n"
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
          children: "/usr/whatap/agent/whatap-agent \n    Default restart\n    Command start, stop, restart, version\n\n## バージョン確認\n# /usr/whatap/agent/whatap-agent version\n0.8.5.20201209\n\n## 実行確認\n# ps -elf | grep whatap\n  103 root      0:05 ./whatap_agent_static -t=4\n"
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
          children: "import (\n  \"github.com/go-chi/chi\"\n  \"github.com/whatap/go-api/trace\"\n  \"github.com/whatap/go-api/instrumentation/github.com/go-chi/chi/whatapchi\"\n)\n\nfunc main() {\n  config := make(map[string]string)\n  trace.Init(config)\n  defer trace.Shutdown()\n  \n  r := chi.NewRouter()\n  \n  // whatapchiのmiddlewareを登録します。\n  r.Use(whatapchi.Middleware)\n  \n  r.Get(\"/\", func(w http.ResponseWriter, r *http.Request) {\n      fmt.Println(\"Response -\", r.Response)\n})\n"
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
          children: "import (\n  \"net/http\"\n\n  \"github.com/whatap/go-api/instrumentation/github.com/go-gorm/gorm/whatapgorm\"\n  \"github.com/whatap/go-api/trace\"\n  \"gorm.io/driver/sqlite\"\n  \"gorm.io/gorm\"\n)\n\nfunc main() {\n  whatapConfig := make(map[string]string)\n  trace.Init(whatapConfig)\n  defer trace.Shutdown()\n\n  http.HandleFunc(\"/InsertAndDelete\", func(w http.ResponseWriter, r *http.Request) {\n    // Contextを作成します。\n    ctx, _ := trace.StartWithRequest(r)\n    defer trace.End(ctx, nil)\n\n    // whatapgormでDBと接続します。\n    db, err := whatapgorm.OpenWithContext(sqlite.Open(\"test.db\"), &gorm.Config{}, ctx)\n    if err != nil {\n      panic(\"Db接続に失敗しました。\")\n    }\n\n    for i := 0; i < 100; i++ {\n      db.Create(&Product{Code: i, Price: i * 100})\n    }\n\n    db.Unscoped().Delete(&Product{}, \"Code >= ? AND Code < ?\", 0, 100)\n  })\n\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\n}\n"
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
          children: "import (\n  \"net/http\"\n  \"github.com/whatap/go-api/instrumentation/database/sql/whatapsql\"\n  \"github.com/whatap/go-api/trace\"\n  \"gorm.io/driver/mysql\"\n  \"gorm.io/gorm\"\n)\n\nfunc main() {\n  whatapConfig := make(map[string]string)\n  trace.Init(whatapConfig)\n  defer trace.Shutdown()\n\n  http.HandleFunc(\"/WhatapDriverTest\", func(w http.ResponseWriter, r *http.Request) {\n    // Contextを作成します。\n    ctx, _ := trace.StartWithRequest(r)\n    defer trace.End(ctx, nil)\n\n    // whatapsql driverでdb connectionを生成します。\n    dbConn, err := whatapsql.OpenContext(ctx, \"mysql\", dataSource)\n    \n    // 既に生成されたconnectionを通じてgormに接続します。\n    db, err := gorm.Open(mysql.New(mysql.Config{Conn: dbConn}), &gorm.Config{})\n    if err != nil {\n      panic(\"Db接続に失敗しました。\")\n    }\n    \n    for i := 0; i < 100; i++ {\n      db.Create(&Product{Code: i, Price: i * 100})\n    }\n  })\n\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\n}\n"
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
          children: "import (\n  \"net/http\"\n\n  \"github.com/whatap/go-api/instrumentation/github.com/go-gorm/gorm/whatapgorm\"\n  \"github.com/whatap/go-api/trace\"\n  _ \"github.com/mattn/go-sqlite3\"\n  \"github.com/jinzhu/gorm\"\n)\n\nfunc main() {\n  whatapConfig := make(map[string]string)\n  trace.Init(whatapConfig)\n  defer trace.Shutdown()\n\n  http.HandleFunc(\"/InsertAndDelete\", func(w http.ResponseWriter, r *http.Request) {\n    // Contextを作成します。\n    ctx, _ := trace.StartWithRequest(r)\n    defer trace.End(ctx, nil)\n\n    // whatapgormでDBと接続します。\n    db, err := whatapgorm.OpenWithContext(ctx, \"sqlite3\", \"test.db\")\n    defer db.Close()\n    if err != nil {\n      trace.Error(ctx, err)\n      panic(\"Gorm Open Fail\")\n    }\n\n    for i := 0; i < 100; i++ {\n      db.Create(&Product{Code: i, Price: i * 100})\n    }\n\n    db.Unscoped().Delete(Product{}, \"Code >= ? AND Code < ?\", 0, 100)\n  })\n\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\n}\n"
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
          children: "import (\n  \"net/http\"\n  \"github.com/whatap/go-api/instrumentation/database/sql/whatapsql\"\n  \"github.com/whatap/go-api/trace\"\n  \"github.com/jinzhu/gorm\"\n_ \"github.com/go-sql-driver/mysql\"\n)\n\nfunc main() {\n  whatapConfig := make(map[string]string)\n  trace.Init(whatapConfig)\n  defer trace.Shutdown()\n\n  http.HandleFunc(\"/WhatapDriverTest\", func(w http.ResponseWriter, r *http.Request) {\n    //Contextを作成します。\n    ctx, _ := trace.StartWithRequest(r)\n    defer trace.End(ctx, nil)\n\n    // whatapsql driverでdb connectionを生成します。\n    var conn gorm.SQLCommon\n    var err error\n    conn, err = whatapsql.OpenContext(ctx, \"mysql\", dataSource)\n    if err != nil {\n      trace.Error(ctx, err)\n      panic(\"Whatapsql Open Fail\")\n    }\n    \n    // 既に生成されたconnectionを使用してgormに接続します。\n    db, err := gorm.Open(\"mysql\", conn)\n    if err != nil {\n      trace.Error(ctx, err)\n      panic(\"Gorm Open Fail\")\n    }\n    for i := 0; i < 100; i++ {\n      db.Create(&Product{Code: i, Price: i * 100})\n    }\n  })\n\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\n}\n"
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
          children: "import (\n  \"context\"\n  \"net/http\"\n\n  \"github.com/gomodule/redigo/redis\"\n  \"github.com/whatap/go-api/instrumentation/github.com/gomodule/redigo/whatapredigo\"\n  \"github.com/whatap/go-api/trace\"\n)\n\nfunc main() {\n  whatapConfig := make(map[string]string)\n  trace.Init(whatapConfig)\n  defer trace.Shutdown()\n\n  http.HandleFunc(\"/SetAndGetWithDialContext\", func(w http.ResponseWriter, r *http.Request) {\n    // Contextを作成します。\n    ctx, _ := trace.StartWithRequest(r)\n    defer trace.End(ctx, nil)\n\n    // whtapredigoを使用してredis connectionを生成します。\n    conn, err := whatapredigo.DialContext(ctx, \"tcp\", \"127.0.0.1:6379\")\n    if err != nil {\n      trace.Error(ctx, err)\n      return\n    }\n    defer conn.Close()\n\n    _, err = conn.Do(\"SET\", \"DataKey\", \"DataValue\")\n    if err != nil {\n      trace.Error(ctx, err)\n      return\n    }\n\n    data, err := redis.Bytes(conn.Do(\"GET\", \"DataKey\"))\n    if err != nil {\n      trace.Error(ctx, err)\n      return\n    }\n  })\n}\n"
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
          children: "import (\n  \"context\"\n  \"net/http\"\n  \"github.com/Shopify/sarama\"\n  \"github.com/whatap/go-api/instrumentation/github.com/Shopify/sarama/whatapsarama\"\n  \"github.com/whatap/go-api/trace\"\n)\n\nfunc main() {\n  config := sarama.NewConfig()\n  brokers := []string{\"127.0.0.1:9092\"} //config kafka broker IP/Port\n\n  // whatapsaramaの割り込みをconfigに登録します。\n  interceptor := whatapsarama.Interceptor{Brokers: brokers}\n  config.Producer.Interceptors = []sarama.ProducerInterceptor{&interceptor}\n\n  whatapConfig := make(map[string]string)\n  trace.Init(whatapConfig)\n  defer trace.Shutdown()\n\n  // Prdoducer生成時にconfigを受け渡します。\n  producer, err := sarama.NewAsyncProducer(brokers, config)\n  consumerOffset := sarama.OffsetOldest\n  if err != nil {\n    panic(err)\n  }\n  defer func() {\n    if err := producer.Close(); err != nil {\n      panic(err)\n    }\n  }()\n\n  http.HandleFunc(\"/AsyncProduceInput\", func(w http.ResponseWriter, r *http.Request) {\n    ctx, _ := trace.StartWithRequest(r)\n    defer func() {\n      trace.End(ctx, nil)\n    }()\n    msg := &sarama.ProducerMessage{\n      Topic:    \"tmp-topic\",\n      Key:      sarama.StringEncoder(\"Data Key\"),\n      Value:    sarama.StringEncoder(\"Data Value\"),\n      Metadata: trace.GetMTrace(ctx),\n    }\n    producer.Input() <- msg //error check\n\n  })\n\n  _ = http.ListenAndServe(fmt.Sprintf(\":%d\", port), nil)\n}\n"
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
          children: "import (\n  \"context\"\n  \"flag\"\n  \"fmt\"\n  \"net/http\"\n  \"text/template\"\n\n  \"github.com/Shopify/sarama\"\n  \"github.com/whatap/go-api/instrumentation/github.com/Shopify/sarama/whatapsarama\"\n  \"github.com/whatap/go-api/trace\"\n)\n\nfunc main() {\n  config := sarama.NewConfig()\n  brokers := []string{\"127.0.0.1:9092\"} //config kafka broker IP/Port\n\n  // whatapsaramaの割り込みをconfigに登録します。\n  interceptor := whatapsarama.Interceptor{Brokers: brokers}\n  config.Consumer.Interceptors = []sarama.ConsumerInterceptor{&interceptor}\n\n  // consume 1回あたり1tx\n  // Consumer生成時にconfigを伝達受け渡します。\n  consumer, err := sarama.NewConsumer(brokers, config)\n  topic := \"tmp-topic\"\n\n  partitions, _ := consumer.Partitions(topic)\n  consume, _ := consumer.ConsumePartition(topic, partitions[0], consumerOffset)\n\n  if consume == nil {\n    fmt.Println(\"consume nil\")\n    return\n  }\n\n  go func() {\n    for {\n      select {\n      case msg := <-consume.Messages():\n        fmt.Println(msg)\n      case consumerError := <-consume.Errors():\n        fmt.Println(\"error\", consumerError)\n        return\n      }\n    }\n  }()\n}\n"
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