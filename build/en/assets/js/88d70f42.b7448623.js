"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[78684],{

/***/ 71987:
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
	title: 'API Guide',
	description: 'You can use the Go library to send the data to be monitored to the WhaTap agent.',
	tags: [
		'Go',
		'API Guide',
		'Library'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "golang/api-guide",
  "title": "API Guide",
  "description": "You can use the Go library to send the data to be monitored to the WhaTap agent.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/golang/api-guide.mdx",
  "sourceDirName": "golang",
  "slug": "/golang/api-guide",
  "permalink": "/en/golang/api-guide",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/golang/api-guide.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Go",
      "permalink": "/en/tags/go"
    },
    {
      "inline": true,
      "label": "API Guide",
      "permalink": "/en/tags/api-guide"
    },
    {
      "inline": true,
      "label": "Library",
      "permalink": "/en/tags/library"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "api-guide",
    "title": "API Guide",
    "description": "You can use the Go library to send the data to be monitored to the WhaTap agent.",
    "tags": [
      "Go",
      "API Guide",
      "Library"
    ]
  },
  "sidebar": "goSidebar",
  "previous": {
    "title": "Installing the Docker environment",
    "permalink": "/en/golang/install-agent-docker"
  },
  "next": {
    "title": "Installation checking items",
    "permalink": "/en/golang/install-check"
  }
};
const assets = {

};



const toc = [{
  "value": "Download",
  "id": "download",
  "level": 2
}, {
  "value": "Getting started",
  "id": "getting-started",
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
  "value": "Generating transactions",
  "id": "generating-transactions",
  "level": 4
}, {
  "value": "Transaction tracing",
  "id": "transaction-tracing",
  "level": 2
}, {
  "value": "Web transaction trace",
  "id": "web-transaction-trace",
  "level": 3
}, {
  "value": "General transaction trace",
  "id": "general-transaction-trace",
  "level": 3
}, {
  "value": "API",
  "id": "api",
  "level": 3
}, {
  "value": "DB connection and SQL tracing",
  "id": "db-connection-and-sql-tracing",
  "level": 2
}, {
  "value": "DB Connection",
  "id": "db-connection",
  "level": 3
}, {
  "value": "Database/SQL package configuration",
  "id": "databasesql-package-configuration",
  "level": 3
}, {
  "value": "API",
  "id": "api-1",
  "level": 3
}, {
  "value": "Tracing the HTTP requests",
  "id": "tracing-the-http-requests",
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
  "value": "Tracing multi-transactions (distributed tracing)",
  "id": "mtrace",
  "level": 2
}, {
  "value": "Configuring the agent",
  "id": "configuring-the-agent",
  "level": 3
}, {
  "value": "Passing the Request Header",
  "id": "passing-the-request-header",
  "level": 3
}, {
  "value": "Adding the header information when accessing the HTTP",
  "id": "adding-the-header-information-when-accessing-the-http",
  "level": 3
}, {
  "value": "Adding the header automatically",
  "id": "adding-the-header-automatically",
  "level": 3
}, {
  "value": "Function tracing",
  "id": "function-tracing",
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
      children: ["The example code in this document is available in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/whatap/go-api-example",
        children: "github.com/whatap/go-api-example"
      }), " repository."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "download",
        children: "Download"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Download the package and the related dependencies."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "go get github.com/whatap/go-api\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "getting-started",
        children: "Getting started"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "init-shutdown",
        children: "init, shutdown"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Start the monitoring module by using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.Init()"
        }), " function. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "defer trace.Shutdown()"
        }), " makes sure that the monitoring ends."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=\"Go\"",
          children: "import \"github.com/whatap/go-api/trace\"\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n\n    ...\n}\n\nfunc Init(m map[string]string)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["This can be set in the initial stage of the application by declaring it in the form of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "map[string]string"
        }), ". Otherwise, more settings can be added in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), ". The performance information can be sent to the WhaTap collection server only when TCP connection to the agent is established normally. It performs TCP communication via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "127.0.0.1:6600"
        }), " using the basic connection information."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["To change the connection information, pass the settings to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Init"
        }), " function, or set them in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), " file and then restart the application."]
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
          children: "accesskey={access key}\nwhatap.server.host={collection server IP}\nnet_ipc_host=127.0.0.1\nnet_ipc_host=6600\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "context",
        children: "Context"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["The agents collect performance data based on the transaction. The transactions are classified based on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "context"
        }), " to which ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap context(trace.TraceCtx)"
        }), " belongs. The performance data that is not related to transactions is ignored or collected only as statistical data."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "generating-transactions",
        children: "Generating transactions"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap context"
        }), " is generated by the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Start"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "StartWithReqest"
        }), " functions of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "go-api/trace"
        }), " module. Set the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "TraceCtx"
        }), " data with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap"
        }), " key in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "context"
        }), "."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "var traceCtx *TraceCtx\ntraceCtx.Txid = keygen.Next()\nctx = context.WithValue(ctx, \"whatap\", traceCtx)\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["In APIs for transactions, SQLs, DBConnections, external HTTP requests, and general function tracing, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Context"
        }), " in which the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "TraceCtx"
        }), " object exists as the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap"
        }), " key is required at startup."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "transaction-tracing",
        children: "Transaction tracing"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "It traces all transactions from web requests to responses, and traces transactions for normal work units. It consists of the startup and end functions. It is recognized as a single transaction, and you can see the detailed views on the hitmap widget and the statistical metrics such as TPS, response time, and average response time."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "You can collect HTTP parameters and HTTP headers through the settings."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "web-transaction-trace",
        children: "Web transaction trace"
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
                children: ["Function that wraps Handle and HandFunc of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "net/http"
                })]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["Proceed with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "trace.StartWithRequest"
                }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "trace.End"
                }), " in the same way."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "The name of the web transaction is set to RequestURI."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "trace.Step()"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "It provides the function to output the strings delivered by the user to the profile data."
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
        id: "general-transaction-trace",
        children: "General transaction trace"
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
        id: "db-connection-and-sql-tracing",
        children: "DB connection and SQL tracing"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Execution times and errors can be collected by passing parameters for DB connection, SQL syntax, errors, and prepared statements to the API. SQL statements can be collected up to 32 KB. The parameters for SQL prepared statements are collected up to 20 and up to 256 bytes for each."
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
          children: "import (\n    whatapsql \"github.com/whatap/go-api/sql\"\n)\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.\n    defer trace.Shutdown()\n    \n    ctx, _ := trace.Start(context.Background(), \"Trace Prepared Statement\")\n    defer trace.End(ctx, nil)\n    \n    // Create Prepared Statement\n    query = \"select id, subject from tbl_faq where id = ? limit ?\"\n    stmt, err := db.Prepare(query)\n    if err != nil {\n      return\n    }\n    defer stmt.Close()\n    \n    params := make([]interface{}, 0)\n    params = append(params, 8)\n    params = append(params, 1)\n    \n    sqlCtx, _ := whatapsql.StartWithParamArray(ctx, \"id:pwd(x.x.x.x:3306)/test\", query, params)\n    rows, err := stmt.QueryContext(ctx, params...)\n    whatapsql.End(sqlCtx, err)\n    \n\n    sqlCtx, _ = whatapsql.StartWithParam(ctx, \"id:pwd(x.x.x.x:3306)/test\", query, params...)\n    rows, err := stmt.QueryContext(ctx, params...)\n    whatapsql.End(sqlCtx, err)\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "databasesql-package-configuration",
        children: "Database/SQL package configuration"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatapsql.OpenContext"
        }), " function instead of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "sql.Open"
        }), " function of the database/sql package. It is recommended to use the functions that pass the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "contexts"
        }), ", such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "PrepareContext"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "QueryContext"
        }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ExecContext"
        }), ". The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "context"
        }), " to be delivered must have the whatap TraceCtx data through ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.Start()"
        }), "."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "\nimport (\n    _ \"github.com/go-sql-driver/mysql\"\n    \"github.com/whatap/go-api/instrumentation/database/sql/whatapsql\"\n)\n\nfunc main() {\n    config := make(map[string]string)\n    trace.Init(config)\n    defer trace.Shutdown()\n\n    // The whatap TraceCtx is generated inside whataphttp.Func.\n    http.HandleFunc(\"/query\", whataphttp.Func(func(w http.ResponseWriter, r *http.Request){\n      ctx := r.Context()\n    \n      // Use the WhaTap Driver. It passes the contexts that have TraceCtx.\n      db, err := whatapsql.OpenContext(ctx, \"mysql\", dataSource)\n      if err != nil {\n        fmt.Println(\"Error whatapsql.Open \", err)\n        return\n      }\n      defer db.Close()\n      \n      ...\n      query := \"select id, subject from tbl_faq limit 10\"\n      \n      // It passes the contexts that have TraceCtx.\n      if rows, err := db.QueryContext(ctx, query); err == nil {\n        ...\n      }\n    }\n    ...\n}\n"
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
        id: "tracing-the-http-requests",
        children: "Tracing the HTTP requests"
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
        children: "You can set the RoundTrip."
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
        children: "Tracing multi-transactions (distributed tracing)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Multi-transaction"
        }), " means the transaction involving a different agent or project. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Multiple Transaction Trace"
        }), " is to trace calls between the application services registered in the WhaTap project."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["The Go agent traces multiple transactions with three HTTP header keys (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "x-wtap-po"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "x-wtap-mst"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "x-wtap-sp1"
          }), "). If HTTP transactions passing through the gateway are not being correlated for tracing, check the HTTP header conditions."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "It supports TraceContext for open source tracing. (traceparent header tracing)"
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "configuring-the-agent",
        children: "Configuring the agent"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["To enable multi-transaction tracing, set the following options in the agent configuration file (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), ")."]
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
        id: "passing-the-request-header",
        children: "Passing the Request Header"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "To check the distributed tracing information (header), pass the Request Header."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "// import \"github.com/whatap/go-api/trace\"\nfunc UpdateMtrace(traceCtx *trace.TraceCtx, header http.Header) \n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.StartWithRequest"
        }), " function internally calls the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "UpdateMtrace"
        }), " function. If you do not use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.StartWithRequest"
        }), " function, you have to directly call it and then analyze the passed header information."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\"",
          children: "// func GetTraceContext(ctx context.Context) (context.Context, *TraceCtx)\n// if v := ctx.Value(\"whatap\"); v != nil {\n//      return ctx, v.(*TraceCtx)\n// }\nctx, traceCtx := trace.GetTraceContext(ctx);\nif traceCtx != nil {\n    trace.UpdateMtrace(traceCtx, header)\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["See the code inside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "trace.Start"
          }), " function:"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-go",
            metastring: "title=\"Go\" showLineNumbers {6}",
            children: "func Start(ctx context.Context, name string) (context.Context, error) {\n    ctx, traceCtx := NewTraceContext(ctx)\n    traceCtx.Name = name\n    traceCtx.StartTime = dateutil.SystemNow()\n    // update multi trace info\n    UpdateMtrace(traceCtx, http.Header{})\n\n    ...\n"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["See the code inside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "trace.StartWithRequest"
          }), " function:"]
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
        id: "adding-the-header-information-when-accessing-the-http",
        children: "Adding the header information when accessing the HTTP"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "When making an outbound HTTP connection, add the header information in the Request Header for tracing."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Go\" showLineNumbers",
          children: "import (\n    \"github.com/whatap/go-api/trace\"\n)\n\nfunc GetMTrace(ctx context.Context) http.Header\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["The next is the function to retrieve the headers required for distributed tracing. You have to add the returned headers to the external request. The context must contain ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.TraceContext"
        }), " for the 'whatap' entry. The information is added internally as whatap context information when using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.Start"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "StartWithRequest"
        }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "StartWithContext"
        }), " functions."]
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
        id: "adding-the-header-automatically",
        children: "Adding the header automatically"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["The WhaTap transport (RoundTrip) already has the code that uses ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "GetMTrace"
        }), " internally. You can automatically add header information by simply enabling its option."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-go",
          metastring: "title=\"Example code\" showLineNumbers",
          children: "import (\n    \"net/http\"\n    \"github.com/whatap/go-api/instrumentation/net/http/whataphttp\"\n)\n\n...\n\n//client := http.DefaultClient\nclient := http.Client{\n    Timeout: timeout,\n}\nclient.Transport = whataphttp.NewRoundTrip(ctx, http.DefaultTransport)\nif resp, err := client.Get(callUrl); err == nil {\n    ...\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["The following lists some usage examples of Transport: The context must contain ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "trace.TraceContext"
        }), " for the 'whatap' entry."]
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
        id: "function-tracing",
        children: "Function tracing"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "This API measures the execution time of the user function or desired section. API can be set before or after execution of the function."
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