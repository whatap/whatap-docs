"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[1131],{

/***/ 68353:
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
	title: 'APIガイド',
	description: 'Goライブラリーを利用して、WhaTapエージェントにモニタリングするデータを送信できます。',
	keywords: [
		'Go',
		'APIガイド',
		'ライブラリ'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "golang/api-guide",
  "title": "APIガイド",
  "description": "Goライブラリーを利用して、WhaTapエージェントにモニタリングするデータを送信できます。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/golang/api-guide.mdx",
  "sourceDirName": "golang",
  "slug": "/golang/api-guide",
  "permalink": "/ja/golang/api-guide",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/golang/api-guide.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "api-guide",
    "title": "APIガイド",
    "description": "Goライブラリーを利用して、WhaTapエージェントにモニタリングするデータを送信できます。",
    "keywords": [
      "Go",
      "APIガイド",
      "ライブラリ"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "goSidebar",
  "previous": {
    "title": "Docker環境インストール",
    "permalink": "/ja/golang/install-agent-docker"
  },
  "next": {
    "title": "インストールチェックリスト",
    "permalink": "/ja/golang/install-check"
  }
};
const assets = {

};



const toc = [{
  "value": "ダウンロード",
  "id": "ダウンロード",
  "level": 2
}, {
  "value": "はじめに",
  "id": "はじめに",
  "level": 2
}, {
  "value": "init、shutdown",
  "id": "initshutdown",
  "level": 3
}, {
  "value": "Context",
  "id": "context",
  "level": 3
}, {
  "value": "トランザクションの作成",
  "id": "トランザクションの作成",
  "level": 4
}, {
  "value": "トランザクションのトレース",
  "id": "トランザクションのトレース",
  "level": 2
}, {
  "value": "Webトランザクション追跡",
  "id": "webトランザクション追跡",
  "level": 3
}, {
  "value": "一般的なトランザクション追跡",
  "id": "一般的なトランザクション追跡",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 3
}, {
  "value": "DB接続およびSQL追跡",
  "id": "db接続およびsql追跡",
  "level": 2
}, {
  "value": "DB Connection",
  "id": "db-connection",
  "level": 3
}, {
  "value": "database/sqlパッケージの設定",
  "id": "databasesqlパッケージの設定",
  "level": 3
}, {
  "value": "API",
  "id": "api-1",
  "level": 3
}, {
  "value": "HTTPリクエスト追跡",
  "id": "httpリクエスト追跡",
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
  "value": "マルチトランザクション追跡(分散追跡)",
  "id": "mtrace",
  "level": 2
}, {
  "value": "エージェント設定",
  "id": "エージェント設定",
  "level": 3
}, {
  "value": "Request Headerを渡す",
  "id": "request-headerを渡す",
  "level": 3
}, {
  "value": "HTTP接続時にHeader情報を追加する",
  "id": "http接続時にheader情報を追加する",
  "level": 3
}, {
  "value": "自動的にヘッダーを追加する",
  "id": "自動的にヘッダーを追加する",
  "level": 3
}, {
  "value": "メソッド追跡",
  "id": "メソッド追跡",
  "level": 2
}, {
  "value": "API",
  "id": "api-3",
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
      children: ["この文書で記述されている例題コードは、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/whatap/go-api-example",
        children: "github.com/whatap/go-api-example"
      }), "保存場所で確認できます。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "ダウンロード",
        children: "ダウンロード"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "パッケージおよび関連従属性(dependency)をダウンロードしてください。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "go get github.com/whatap/go-api\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "はじめに",
        children: "はじめに"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "initshutdown",
        children: "init、shutdown"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.Init()"
        }), "メソッドを使用してモニタリングモジュールを起動してください。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "defer trace.Shutdown()"
        }), "でモニタリング終了を保証します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=\"Go\"",
          children: "import \"github.com/whatap/go-api/trace\"\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n\n    ...\n}\n\nfunc Init(m map[string]string)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "map[string]string"
        }), "形式をアプリケーションの初期に設定できます。 または、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), "ファイルに設定できます。 性能情報をWhaTap収集サーバーに送るためには、エージェントからTCP接続が正常に行われる必要があります。 デフォルト接続情報として", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "127.0.0.1:6600"
        }), "を通じてTCPで通信します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["接続情報を変更するには、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Init"
        }), "メソッドに設定を伝えるか", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), " ファイルに設定し、アプリケーションを再起動してください。"]
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
          children: "accesskey={アクセスキー}\nwhatap.server.host={収集サーバーのIPアドレス}\nnet_ipc_host=127.0.0.1\nnet_ipc_host=6600\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "context",
        children: "Context"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["エージェントは、性能情報をトランザクション単位で収集します。 トランザクションの区分は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap context(trace.TraceCtx)"
        }), "が含まれた", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "context"
        }), "を基準にします。 トランザクションに連携されていない性能情報は、収集を無視するか、統計情報でのみ収集します。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "トランザクションの作成",
        children: "トランザクションの作成"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "go-api/trace"
        }), "モジュールの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Start"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "StartWithReqest"
        }), "メソッドで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap context"
        }), "を作成します。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "context"
        }), "内部に", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap"
        }), "キーで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "TraceCtx"
        }), "情報を設定します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "var traceCtx *TraceCtx\ntraceCtx.Txid = keygen.Next()\nctx = context.WithValue(ctx, \"whatap\", traceCtx)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["トランザクション、SQL、DBConnection、外部HTTP request、一般メソッド追跡などのAPIでの開始時点は必ず", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap"
        }), "キーで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "TraceCtx"
        }), "オブジェクトがある", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Context"
        }), "が必要です。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "トランザクションのトレース",
        children: "トランザクションのトレース"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Webリクエストと応答までのトランザクションと一般的なタスク単位のトランザクションの両方を追跡します。 開始および終了のメソッドで構成されています。 一つのトランザクションとして認識され、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップ"
          })
        }), "ウィゼットで詳細やTPS、応答時間、平均応答時間などの統計指標を確認することができます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "設定を通じてHTTPパラメータ、HTTPヘッダー情報を収集できます。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "webトランザクション追跡",
        children: "Webトランザクション追跡"
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
                }), "のHandle、HandFuncをラッピングしたメソッド"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "trace.StartWithRequest"
                }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "trace.End"
                }), "を同一に進行します。"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "ウェブトランザクションの名前は、RequestURIで設定できます。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "trace.Step()"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "ユーザーが送る文字列をプロファイル情報に出力する機能を提供します。"
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
        id: "一般的なトランザクション追跡",
        children: "一般的なトランザクション追跡"
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
        id: "db接続およびsql追跡",
        children: "DB接続およびSQL追跡"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "DB接続情報、sql構文、errorおよびprepared構文のためのパラメータをAPIに送ると、実行時間およびエラー事項を収集できます。 SQL構文は最大32KBまで収集します。 SQL Prepared構文のためのパラメータは最大20個、それぞれ256byteまで収集します。"
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
          children: "import (\n    whatapsql \"github.com/whatap/go-api/sql\"\n)\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n    \n    ctx, _ := trace.Start(context.Background(), \"Trace Prepared Statement\")\n    defer trace.End(ctx, nil)\n    \n    // Prepared Statement 作成\n    query = \"select id, subject from tbl_faq where id = ? limit ?\"\n    stmt, err := db.Prepare(query)\n    if err != nil {\n      return\n    }\n    defer stmt.Close()\n    \n    params := make([]interface{}, 0)\n    params = append(params, 8)\n    params = append(params, 1)\n    \n    sqlCtx, _ := whatapsql.StartWithParamArray(ctx, \"id:pwd(x.x.x.x:3306)/test\", query, params)\n    rows, err := stmt.QueryContext(ctx, params...)\n    whatapsql.End(sqlCtx, err)\n    \n\n    sqlCtx, _ = whatapsql.StartWithParam(ctx, \"id:pwd(x.x.x.x:3306)/test\", query, params...)\n    rows, err := stmt.QueryContext(ctx, params...)\n    whatapsql.End(sqlCtx, err)\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "databasesqlパッケージの設定",
        children: "database/sqlパッケージの設定"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["database/sqlパッケージの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "sql.Open"
        }), "メソッドの代わりに、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatapsql.OpenContext"
        }), "メソッドを使います。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "PrepareContext"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "QueryContext"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ExecContext"
        }), "など", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "context"
        }), "を送るメソッドで使用することをお勧めします。 転送する", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "context"
        }), "は", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.Start()"
        }), "を通じて、WhaTap TraceCtx情報が必要です。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "\nimport (\n    _ \"github.com/go-sql-driver/mysql\"\n    \"github.com/whatap/go-api/instrumentation/database/sql/whatapsql\"\n)\n\nfunc main() {\n    config := make(map[string]string)\n    trace.Init(config)\n    defer trace.Shutdown()\n\n    // whataphttp.Func内部でwhatap TraceCtxを作成します。\n    http.HandleFunc(\"/query\", whataphttp.Func(func(w http.ResponseWriter, r *http.Request){\n      ctx := r.Context()\n    \n      // Use WhaTap Driver. whatapのTraceCtxがあるcontextを送ります。\n      db, err := whatapsql.OpenContext(ctx, \"mysql\", dataSource)\n      if err != nil {\n        fmt.Println(\"Error whatapsql.Open \", err)\n        return\n      }\n      defer db.Close()\n      \n      ...\n      query := \"select id, subject from tbl_faq limit 10\"\n      \n      // whatap TraceCtxがあるcontextを送ります。\n      if rows, err := db.QueryContext(ctx, query); err == nil {\n        ...\n      }\n    }\n    ...\n}\n"
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
        id: "httpリクエスト追跡",
        children: "HTTPリクエスト追跡"
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
        children: "RoundTripを設定できます。"
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
        children: "マルチトランザクション追跡(分散追跡)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "マルチトランザクション"
        }), "は、別のエージェントやプロジェクトに関連付けられたトランザクションを意味します。 WhaTapプロジェクトに登録されたアプリケーションサービス間の呼び出しを追跡するのが、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "マルチトランザクション追跡"
        }), "です。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Goエージェントは、3つのHTTPヘッダーキー値(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "x-wtap-po"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "x-wtap-mst"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "x-wtap-sp1"
          }), ")でマルチトランザクションを追跡します。 ゲートウェイを通過するHTTPトランザクションが連携追跡されない場合は、HTTPヘッダー条件を確認してください。"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "オープンソースの追跡のためにTraceContextに対応します。 (traceparentヘッダー追跡)"
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "エージェント設定",
        children: "エージェント設定"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["マルチトランザクション追跡のためのエージェント設定ファイル(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), ")に次のようにオプションを設定してください。"]
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
        id: "request-headerを渡す",
        children: "Request Headerを渡す"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "分散追跡情報(ヘッダー情報)を確認するには、Request Headerを渡す必要があります。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "// import \"github.com/whatap/go-api/trace\"\nfunc UpdateMtrace(traceCtx *trace.TraceCtx, header http.Header) \n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.StartWithRequest"
        }), "関数は、内部的に", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "UpdateMtrace"
        }), "関数を呼び出します。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.StartWithRequest"
        }), "関数を使用しない場合は、直接呼び出して受け取ったヘッダー情報を分析する必要があります。"]
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
          }), "関数の内部コード参照:"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-go",
            metastring: "title=\"Go\" showLineNumbers {6}",
            children: "func Start(ctx context.Context, name string) (context.Context, error) {\n    ctx, traceCtx := NewTraceContext(ctx)\n    traceCtx.Name = name\n    traceCtx.StartTime = dateutil.SystemNow()\n    // update multi trace info\n    UpdateMtrace(traceCtx, http.Header{})\n\n    ...\n"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "trace.StartWithRequest"
          }), "関数の内部コード参照:"]
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
        id: "http接続時にheader情報を追加する",
        children: "HTTP接続時にHeader情報を追加する"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "外部にHTTP接続するとき、Request Headerに追跡のためのHeader情報を追加してください。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\" showLineNumbers",
          children: "import (\n    \"github.com/whatap/go-api/trace\"\n)\n\nfunc GetMTrace(ctx context.Context) http.Header\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["次は、分散追跡に必要なヘッダーを照会する関数です。 返されるヘッダーを外部リクエストに追加する必要があります。 contextには、'whatap'項目の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.TraceContext"
        }), "情報が含まれている必要があります。 当該情報は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.Start"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "StartWithRequest"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "StartWithContext"
        }), "関数を使用する際に、内部にwhatap context情報が追加されます。"]
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
        id: "自動的にヘッダーを追加する",
        children: "自動的にヘッダーを追加する"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Whatap transport(RoundTrip)には、内部的に", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "GetMTrace"
        }), "を使用するコードは既に存在します。 オプションを活性化すると、自動的にヘッダー情報を追加できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Example code\" showLineNumbers",
          children: "import (\n    \"net/http\"\n    \"github.com/whatap/go-api/instrumentation/net/http/whataphttp\"\n)\n\n...\n\n//client := http.DefaultClient\nclient := http.Client{\n    Timeout: timeout,\n}\nclient.Transport = whataphttp.NewRoundTrip(ctx, http.DefaultTransport)\nif resp, err := client.Get(callUrl); err == nil {\n    ...\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["以下は、複数のTransport使用例です。 contextには、'whatap'項目の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.TraceContext"
        }), "情報が含まれている必要があります。"]
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
        id: "メソッド追跡",
        children: "メソッド追跡"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "ユーザーメソッドまたは希望する区間の実行時間を測定するためのAPIです。 メソッドの実行前および後でAPIを設定できます。"
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