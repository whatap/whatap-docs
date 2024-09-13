"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[87890],{

/***/ 67420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ MDXContent),
/* harmony export */   RM: () => (/* binding */ toc)
/* harmony export */ });
/* unused harmony exports frontMatter, contentTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "XOS関連メトリクス",
  "id": "xosmetrics",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    section: "section",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "xosmetrics",
      children: "XOS関連メトリクス"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "次は、XOSエージェントから収集されるメトリクスについての説明です。"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      class: "metric",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Metric"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Unit"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "pct"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["cpu使用率、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_user"
              }), " + ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_sys"
              }), " + ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_iowait"
              }), "の合計です。"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_user(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "pct"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "cpuがユーザーコードを実行するのに費やした時間です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_sys(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "pct"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "cpuがkernel codeを実行した時間です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_iowait(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "pct"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "cpuがIOを待機した時間です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_idle(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "pct"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "cpuプロセッサのアイドルタイムです。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "disk_reads(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "block"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "ディスクから読み込んだデータの量です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "disk_read_bytes(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "バイト"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "ディスクから読み込んだデータの量です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "disk_writes(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "block"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "ディスクで書き込まれたデータの量です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "disk_write_bytes(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "バイト"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "ディスクで書き込まれたデータの量です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "pct"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "メモリ使用率です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_total(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "全体のメモリ量です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_free(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "システムで使用していないメモリの量です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_used(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "システムで使用しているメモリ量です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_buffcache(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "buff/cacheで使用中のメモリ量です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_swaptotal(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Swap全体サイズ、物理メモリが不足している場合に備えて設定します。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_swapfree(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Swapの未使用領域、Swap領域はディスク領域が解放されるため、Swapを使用している場合は、システム性能が大幅に低下する可能性があります。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_available(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "メモリの可用領域です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "net_recv_bytes(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "バイト"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "ネットワークで受信されたデータの量です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "net_recv_packets(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "-"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "ネットワークで受信されたデータパケットの数です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "net_send_bytes(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "バイト"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "ネットワークで送信したデータの量です。"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "net_send_packets(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "-"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "ネットワークに送信したデータパケットの数です。"
            })]
          })]
        })]
      })
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

/***/ 4967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ metrics_data_list_contentTitle),
  "default": () => (/* binding */ metrics_data_list_MDXContent),
  frontMatter: () => (/* binding */ metrics_data_list_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ metrics_data_list_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_metrics-database-mysql.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "db_mysql_counter",
  "id": "db_mysql_counter",
  "level": 2
}, {
  "value": "Tags",
  "id": "db_mysql_counter-tags",
  "level": 3
}, {
  "value": "Field",
  "id": "db_mysql_counter-filed",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    section: "section",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "データベース指標(メトリクス)は、データベースの作業量とリソース使用量を包括的に収集します。WhaTapモニタリングサービスは持続的に指標を収集し、データベースのボトルネックを特定し、性能問題の根本原因を特定するのに役立つデータを提供します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["メトリクスに関する詳細については、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://dev.mysql.com/doc",
        children: "次の文書"
      }), "を参照してください。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "db_mysql_counter",
        children: "db_mysql_counter"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "db_mysql_counter-tags",
        children: "Tags"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["次は", (0,jsx_runtime.jsx)(_components.code, {
          children: "db_mysql_counter"
        }), "カテゴリに収集されるタグ値の案内です。"]
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "タグ名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "備考"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "agentIp"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "エージェントごとのIPアドレスです。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "dbIsMulti"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Multitenant対応可否です。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "dbName"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "データベース名です。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "dbType"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "データベースの種類です。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "dbVersion"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "利用中のデータベースのバージョンです。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "oname"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "エージェント名です。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ユニーク値"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "db_mysql_counter-filed",
        children: "Field"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["次は", (0,jsx_runtime.jsx)(_components.code, {
          children: "db_mysql_counter"
        }), "カテゴリに収集されるフィールド値の案内です。"]
      }), (0,jsx_runtime.jsx)("div", {
        class: "db-metric-3",
        children: (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "Metrics"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Description"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Category"
              }), (0,jsx_runtime.jsx)(_components.th, {})]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Aborted_clients"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "クライアント接続が異常に終了した回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Aborted_connects"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "クライアント接続の試行が失敗した回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Acl_cache_items_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ACL(アクセス制御一覧) キャッシュ項目の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Binlog_bytes_written"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "バイナリログに記録されたバイト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Binlog_cache_disk_use"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ディスクに記録されたバイナリログのキャッシュ使用回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Binlog_cache_use"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "バイナリログキャッシュが使用された回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Binlog_commits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "バイナリログに記録されたコミット数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Binlog_stmt_cache_disk_use"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ディスクに記録されたバイナリログのステートメントキャッシュの使用回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Binlog_stmt_cache_use"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "バイナリログのステートメントキャッシュが使用された回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Bytes_received"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DBサーバーが受信したデータの合計バイト数です。この値が高い場合は、そのサーバーは書込み作業(insertなど) メインのサーバーであることが分かります。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Bytes_sent"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["DB サーバーが送信したデータの合計バイト数です。この値が高い場合は、このサーバーは読み取り作業(select) メインのサーバーであることが分かります。", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Questions"
                }), "、", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Uptime"
                }), "と一緒に応用してみると、1つのクエリ当たりの平均Byte、1時間当たりの処理Byteなどを計算できます。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_admin_commands"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "実行された管理コマンドの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_db"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER DATABASEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_event"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER EVENTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_function"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER FUNCTIONコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_instance"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER INSTANCEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_procedure"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER PROCEDUREコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_resource_group"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER RESOURCE GROUPコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_server"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER SERVERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_table"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER TABLEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_tablespace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER TABLESPACEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_user"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER USERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_user_default_role"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER USER DEFAULT ROLEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_analyze"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ANALYZEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_assign_to_keycache"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "KEYCACHEに割り当てられたコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_begin"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BEGINコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_binlog"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BINLOGコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_call_procedure"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CALL PROCEDUREコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_change_db"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CHANGE DATABASEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_change_master"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CHANGE MASTERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_change_repl_filter"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CHANGE REPLICATION FILTERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_change_replication_source"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CHANGE REPLICATION SOURCEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_check"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CHECKコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_checksum"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CHECKSUMコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_clone"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CLONEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_commit"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "COMMITコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_db"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE DATABASEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_event"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE EVENTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_function"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE FUNCTIONコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_index"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE INDEXコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_procedure"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE PROCEDUREコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_resource_group"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE RESOURCE GROUPコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_role"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE ROLEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_server"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE SERVERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_spatial_reference_system"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE SPATIAL REFERENCE SYSTEMコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_table"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE TABLEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_trigger"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE TRIGGERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_udf"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE UDFコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_user"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE USERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_view"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE VIEWコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_dealloc_sql"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DEALLOC SQLコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_delete"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["DELETEコマンドの実行回数です。", (0,jsx_runtime.jsx)(_components.code, {
                  children: "handler_delete"
                }), "とは、別の行がテーブルから削除された回数を計算します。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_delete_multi"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DELETE MULTIコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_do"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DOコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_db"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP DATABASEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_event"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP EVENTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_function"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP FUNCTIONコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_index"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP INDEXコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_procedure"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP PROCEDUREコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_resource_group"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP RESOURCE GROUPコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_role"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP ROLEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_server"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP SERVERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_spatial_reference_system"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP SPATIAL REFERENCE SYSTEMコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_table"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP TABLEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_trigger"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP TRIGGERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_user"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP USERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_view"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP VIEWコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_empty_query"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "空のクエリが実行された回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_execute_sql"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQLコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_explain_other"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "EXPLAIN OTHERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_flush"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "FLUSHコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_get_diagnostics"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GET DIAGNOSTICSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_grant"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GRANTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_grant_roles"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GRANT ROLESコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_group_replication_start"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GROUP REPLICATION STARTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_group_replication_stop"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GROUP REPLICATION STOPコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_ha_close"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HA CLOSEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_ha_open"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HA OPENコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_ha_read"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HA READコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_help"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HELPコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_import"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "IMPORTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_insert"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "INSERTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_insert_select"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "INSERT SELECTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_install_component"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "INSTALL COMPONENTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_install_plugin"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "INSTALL PLUGINコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_kill"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "KILLコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_load"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LOADコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_lock_instance"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LOCK INSTANCEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_lock_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LOCK TABLESコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_optimize"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OPTIMIZEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_preload_keys"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PRELOAD KEYSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_prepare_sql"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQLコマンドの準備回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_purge"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PURGEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_purge_before_date"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "特定の日付以前のデータをまとめた回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_release_savepoint"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SAVEPOINTリリースコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_rename_table"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RENAME TABLEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_rename_user"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RENAME USERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_repair"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REPAIRコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_replace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REPLACEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_replace_select"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REPLACE SELECTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_replica_start"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REPLICA STARTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_replica_stop"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REPLICA STOPコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_reset"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RESETコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_resignal"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RESIGNALコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_restart"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RESTARTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_revoke"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REVOKEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_revoke_all"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REVOKE ALLコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_revoke_roles"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REVOKE ROLESコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_rollback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ROLLBACKコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_rollback_to_savepoint"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "特定SAVEPOINTでROLLBACKされた回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_savepoint"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SAVEPOINTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_select"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SELECTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_set_option"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SET OPTIONコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_set_password"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SET PASSWORDコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_set_resource_group"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SET RESOURCE GROUPコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_set_role"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SET ROLEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_binlog_events"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW BINLOG EVENTSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_binlogs"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW BINLOGSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_charsets"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CHARSETSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_collations"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW COLLATIONSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_db"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE DATABASEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_event"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE EVENTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_func"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE FUNCTIONコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_proc"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE PROCEDUREコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_table"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE TABLEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_trigger"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE TRIGGERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_user"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE USERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_databases"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW DATABASESコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_engine_logs"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW ENGINE LOGSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_engine_mutex"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW ENGINE MUTEXコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_engine_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW ENGINE STATUSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_errors"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW ERRORSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_events"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW EVENTSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_fields"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW FIELDSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_function_code"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW FUNCTION CODEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_function_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW FUNCTION STATUSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_grants"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW GRANTSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_keys"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW KEYSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_master_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW MASTER STATUSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_open_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW OPEN TABLESコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_plugins"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PLUGINSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_privileges"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PRIVILEGESコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_procedure_code"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PROCEDURE CODEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_procedure_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PROCEDURE STATUSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_processlist"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PROCESSLISTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_profile"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PROFILEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_profiles"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PROFILESコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_relaylog_events"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW RELAYLOG EVENTSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_replica_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW REPLICA STATUSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_replicas"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW REPLICASコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_slave_hosts"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW SLAVE HOSTSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_slave_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW SLAVE STATUSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW STATUSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_storage_engines"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW STORAGE ENGINESコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_table_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW TABLE STATUSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW TABLESコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_triggers"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW TRIGGERSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_variables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW VARIABLESコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_warnings"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW WARNINGSコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_shutdown"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHUTDOWNコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_signal"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SIGNALコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_slave_start"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SLAVE STARTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_slave_stop"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SLAVE STOPコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_close"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT CLOSEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_execute"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT EXECUTEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_fetch"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT FETCHコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_prepare"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT PREPAREコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_reprepare"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT REPREPAREコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_reset"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT RESETコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_send_long_data"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT SEND LONG DATAコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_truncate"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TRUNCATEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_uninstall_component"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UNINSTALL COMPONENTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_uninstall_plugin"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UNINSTALL PLUGINコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_unlock_instance"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UNLOCK INSTANCEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_unlock_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UNLOCK TABLESコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_update"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UPDATEコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_update_multi"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UPDATE MULTIコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_xa_commit"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "XA COMMITコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_xa_end"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "XA ENDコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_xa_prepare"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "XA PREPAREコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_xa_recover"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "XA RECOVERコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_xa_rollback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "XA ROLLBACKコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_xa_start"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "XA STARTコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connection_errors_accept"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "クライアント接続の受け入れエラーの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connection_errors_internal"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "内部接続エラーの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connection_errors_max_connections"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "max_connections"
                }), "の制限により拒否された接続エラーの回数です。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connection_errors_peer_address"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ピアアドレス接続エラーの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connection_errors_select"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SELECT接続エラーの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connection_errors_tcpwrap"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TCP WRAP接続エラーの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connections"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "合計クライアント接続数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Created_tmp_disk_tables"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["コマンドの実行中にサーバーでディスクに作成された一時テーブルの数です。ディスクの使用は性能を低下させる可能性があるため、この値が大きくなった場合は、", (0,jsx_runtime.jsx)(_components.code, {
                  children: "tmp_table_size"
                }), "または", (0,jsx_runtime.jsx)(_components.code, {
                  children: "max_heap_table_size"
                }), "値調整を検討してください。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Created_tmp_files"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "mysqldが生成した一時ファイルの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Created_tmp_tables"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["コマンドの実行中にサーバーによって生成された内部の一時テーブルの数です。一般的にクエリでUNION ALLを使用したりORDER BY、GROUP BY、DISTINCTを使用するいくつかの場合、一時テーブルが使用される場合があります。内部一時テーブルの合計数(", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Created_tmp_disk_tables"
                }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Created_tmp_tables"
                }), ")に対し、ディスク上の一時テーブル数(", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Created_tmp_disk_tables"
                }), ")が高くないものがいいです。(10%未満)"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Delayed_errors"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "遅延した挿入中のエラーの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Delayed_insert_threads"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "遅延した挿入を処理するスレッドの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Delayed_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "遅延した挿入作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Deprecated_use_i_s_processlist_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "使用中止となったINFORMATION_SCHEMA PROCESSLISTの使用回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Deprecated_use_i_s_processlist_last_timestamp"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最後に使用された、使用中止となったINFORMATION_SCHEMA PROCESSLISTタイムスタンプです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Error_log_buffered_bytes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "バッファされたエラーログのバイト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Error_log_buffered_events"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "バッファされたエラー ログイベントの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Error_log_expired_events"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "期限切れのエラーログイベントの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Error_log_latest_write"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最後のエラーログの記録時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Flush_commands"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "FLUSHコマンドの実行回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Global_connection_memory"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "グローバル接続メモリの使用量です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_commit"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "COMMIT作業回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_delete"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DELETE作業回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_discover"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DISCOVER作業回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_external_lock"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "外部ロックの作業回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_mrr_init"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MRR(マルチレンジリード) 初期化の回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_prepare"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PREPARE作業回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_first"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最初のレコード読み込み作業の回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_key"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "キー読み取り作業の回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_last"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最後のレコード読み取り作業の回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_next"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "次のレコード読み取りの作業回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_prev"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "以前のレコード読み込み作業の回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_rnd"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "任意のレコード読み取り作業の回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_rnd_next"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "任意の次のレコード読み取り作業の回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_rollback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ROLLBACK作業回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_savepoint"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SAVEPOINT作業回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_savepoint_rollback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SAVEPOINT ROLLBACK作業回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_update"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UPDATE作業回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_write"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "WRITE作業回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_bytes_data"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールでデータが含まれたバイト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_bytes_dirty"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールで変更されたバイト数(ダーティデータ数)となります。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_pages_data"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールで使用されているバッファプールページの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_pages_dirty"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールで変更されたページ数(ダーティページ数)となります。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_pages_flushed"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールでフラッシュされたページの数です。バッファプールのダーティデータをディスクに書き込む過程で、過剰なflushディスクに負担をかける可能性があるため、ディスクの性能とともにモニタリングする必要があります。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_pages_free"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールで使用可能なページ数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_pages_misc"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールの管理用ページ数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_pages_total"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールの合計ページ数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_read_ahead"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールで読み取り予測が発生した回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_read_ahead_evicted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "予測された読み取りページがバッファプールで削除された回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_read_ahead_rnd"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ランダムな読み取り予測が発生した回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_read_requests"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["InnoDBバッファプールにおける論理的読み取りリクエスト数です。", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Inodb buffer pool hit ratio"
                }), "計算を次のようにすることができ、90%以上を推奨します。もしHit Ratioが低い場合、", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_size"
                }), "増設を検討してください。", (0,jsx_runtime.jsx)("br", {}), "算出方式: Buffer Hit Ratio = (1 - (", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_reads"
                }), " / ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_read_requests"
                }), ")) * 100"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_reads"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールで物理ディスクからの読み取り作業が発生した回数です。Innodbバッファプールにデータがないため、ディスクから直接読み取る必要がある論理読み取りリクエストの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_resize_status_code"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールサイズの調整ステータスコードです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_resize_status_progress"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールサイズの調整進行率です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_wait_free"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールがいっぱいになった時に待機した回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_write_requests"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBバッファプールからの記録リクエストの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_fsyncs"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "データファイルfsync呼び出し数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_pending_fsyncs"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "待機中のfsync作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_pending_reads"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "待機中の読み取り作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_pending_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "待機中の書き込み作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_read"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBで読み取ったデータの合計バイト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_reads"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBでの読み取り作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBでの書き込み作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_written"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBで記録されたデータバイトの合計数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_dblwr_pages_written"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB二重書き込み(double write) バッファで記録されたページの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_dblwr_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB二重書き込み(double write) バッファでの書き込み作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_log_waits"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["ログバッファが小さいため、フラッシュされるまで待った回数です。Redo log 競合比率は(", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_log_waits"
                }), " / ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_log_writes"
                }), ") で計算でき、1未満の値を推奨します。", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Wait"
                }), "が高い場合、", (0,jsx_runtime.jsx)(_components.code, {
                  children: "innodb_log_buffer_size"
                }), "を増やすことを検討してください。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_log_write_requests"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBログに対する記録リクエストの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_log_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redoログファイルへの物理的書き込み回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_num_open_files"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBで開いたファイルの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_os_log_fsyncs"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OSログファイルfsyncの呼び出し数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_os_log_pending_fsyncs"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "待機中のOSログファイルfsync作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_os_log_pending_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "待機中のOSログファイルの記録作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_os_log_written"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OSシステムログファイルに記録されたバイト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_page_size"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBページのサイズです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_pages_created"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBで生成されたページの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_pages_read"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBで読み取ったページの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_pages_written"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBで記録されたページの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_capacity_resized"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redoログ容量が調整された回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_checkpoint_lsn"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB RedoログチェックポイントのLSNです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_current_lsn"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redoログの現在のLSNです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_flushed_to_disk_lsn"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redoログがディスクに記録されたLSNです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_logical_size"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redo論理ログのサイズです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_physical_size"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redo物理ログのサイズです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_uuid"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB RedoログのUUIDです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_row_lock_current_waits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB行ロック(row lock) の現在待機数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_row_lock_time"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB行ロック(row lock)獲得に費やされた合計時間(milliseconds)となります。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_row_lock_time_avg"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB行ロック(row lock) の平均時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_row_lock_time_max"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB行ロック(row lock) の最大時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_row_lock_waits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB行ロック(row lock)の待機回数です。ロックを獲得した数ではなくロックを得るために待機する回数で、このメトリクスが通常より急増するとクエリ待機が発生(락 경합)することでクエリのチューニングが必要です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_deleted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBで削除された行数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_inserted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBで挿入された行数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_read"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBで読み取った行数(Selectで処理された行数)となります。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_updated"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBで更新された行数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_writes"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["InnoDBで記された行数(Writeに処理された行数)となります。", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_inserted"
                }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_updated"
                }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_deleted"
                }), "計算式と同じです。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_sampled_pages_read"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBでサンプリングされたページ数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_sampled_pages_skipped"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBからのサンプリングがスキップされたページの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_system_rows_deleted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBシステムから削除された行数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_system_rows_inserted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBシステムから挿入された行数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_system_rows_read"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBシステムで読んだ行数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_system_rows_updated"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBシステムで更新された行数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_truncated_status_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBでカットされたステータス履歴の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_undo_tablespaces_active"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBで有効になったアンドゥテーブルスペースの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_undo_tablespaces_explicit"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBで明示的に生成されたアンドゥテーブルスペースの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_undo_tablespaces_implicit"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBで暗黙的に生成されたアンドゥテーブルスペースの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_undo_tablespaces_total"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBアンドゥテーブルスペースの合計数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_blocks_not_flushed"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "フラッシュされていないキー ブロックの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_blocks_unused"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "使用されていないキー ブロックの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_blocks_used"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "使用されたキーブロックの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_read_requests"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "キーの読み取りリクエスト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_reads"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "実際にディスクから読み込んだキーブロックの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_write_requests"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "キーの書き込みリクエスト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "実際にディスクに記録されたキー ブロックの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Locked_connects"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ロックされた接続数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Max_execution_time_exceeded"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最大実行時間を超えたクエリの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Max_execution_time_set"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最大実行時間が設定された回数です。　"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Max_execution_time_set_failed"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最大実行時間設定が失敗した回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Max_used_connections"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "startup以降に使用された最大接続数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_aborted_clients"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで中断されたクライアントの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_bytes_received"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで受信されたバイト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_bytes_received_compressed_payload"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで圧縮されたペイロードで受信されたバイト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_bytes_received_uncompressed_frame"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで圧縮されていないフレームで受信されたバイト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_bytes_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで送信されたバイト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_bytes_sent_compressed_payload"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで圧縮されたペイロードに送信されたバイト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_bytes_sent_uncompressed_frame"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで圧縮されていないフレームで送信されたバイト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_connection_accept_errors"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolでの接続の受け入れエラーの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_connection_errors"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで発生した接続エラーの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_connections_accepted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで受け入れられた接続の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_connections_closed"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで閉じた接続の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_connections_rejected"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで拒否された接続の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_create_view"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたCREATE VIEWコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_delete"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたDELETEコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_drop_view"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたDROP VIEWコマンド回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_find"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたFINDコマンド回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_insert"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたINSERTコマンド回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_modify_view"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたMODIFY VIEWコマンド回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_update"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたUPDATEコマンド回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_cursor_close"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolでカーソルを閉じるコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_cursor_fetch"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolでカーソルを読み込むコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_cursor_open"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolでカーソルを開くコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_errors_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolでクライアントとして送信されたエラーの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_errors_unknown_message_type"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで不明なメッセージタイプのエラー数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_expect_close"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X ProtocolでのEXPECT CLOSEコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_expect_open"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X ProtocolでEXPECT OPENコマンド回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_init_error"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolでの初期化エラーの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_messages_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolでクライアントとして送信されたメッセージの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_notice_global_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで送信されたグローバル通知の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_notice_other_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで送信されたその他の通知の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_notice_warning_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで送信されたアラート通知の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_notified_by_group_replication"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolでグループレプリケーションで通知された回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_port"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで使用されたポートです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_prep_deallocate"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで用意されたSQL DEALLOCATEコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_prep_execute"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで用意されたSQL EXECUTEコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_prep_prepare"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで用意されたSQL PREPAREコマンド回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_rows_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolでクライアントに送信された行数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_sessions"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで現在の活性セッションの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_sessions_accepted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで受け入れられたセッションの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_sessions_closed"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで閉じたセッションの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_sessions_fatal_error"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolでクリティカルなエラーのために閉じたセッションの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_sessions_killed"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで強制的に終了したセッションの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_sessions_rejected"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで拒否されたセッションの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_ssl_accepts"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X ProtocolでSSL接続受け入れの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_ssl_ctx_verify_depth"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X ProtocolにおけるSSL検証の深さです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_ssl_ctx_verify_mode"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X ProtocolにおけるSSL検証モードです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_ssl_finished_accepts"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで完了したSSL接続の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_create_collection"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたCREATE COLLECTIONコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_create_collection_index"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたCREATE COLLECTION INDEXコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_disable_notices"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたDISABLE NOTICESコマンド回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_drop_collection"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたDROP COLLECTIONコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_drop_collection_index"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたDROP COLLECTION INDEXコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_enable_notices"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたENABLE NOTICESコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_ensure_collection"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたENSURE COLLECTIONコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_execute_mysqlx"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたEXECUTE MYSQLXコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_execute_sql"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたEXECUTE SQLコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_execute_xplugin"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたEXECUTE XPLUGINコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_get_collection_options"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたGET COLLECTION OPTIONSコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_kill_client"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたKILL CLIENTコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_list_clients"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたLIST CLIENTSコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_list_notices"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたLIST NOTICESコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_list_objects"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたLIST OBJECTSコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_modify_collection_options"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたMODIFY COLLECTION OPTIONSコマンドの回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_ping"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで実行されたPINGコマンド回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_worker_threads"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで有効になったワーカースレッドの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_worker_threads_active"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocolで活性状態のワーカースレッドの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Not_flushed_delayed_rows"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "フラッシュされていない遅延した行数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ongoing_anonymous_transaction_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "進行中の匿名トランザクションの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Open_files"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "開いたファイルの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Open_streams"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "開いたストリームの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Open_table_definitions"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "開いたテーブルの定義数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Open_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "開いたテーブルの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Opened_files"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "開いたファイルの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Opened_table_definitions"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "開いたテーブルの定義数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Opened_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "開いたテーブルの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_accounts_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaアカウント数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_cond_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schema条件クラスの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_cond_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schema条件のインスタンス数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_digest_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaダイジェスト数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_file_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaファイルクラスの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_file_handles_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaファイルのハンドル数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_file_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaファイルのインスタンス数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_hosts_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaホストの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_index_stat_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaインデックスの統計数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_locker_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaロッカーの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_memory_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaメモリクラスの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_metadata_lock_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaメタデータのロック数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_mutex_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaミューテックスクラスの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_mutex_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaミューテックスのインスタンス数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_nested_statement_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schema重なり合った文章の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_prepared_statements_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schema用意された文章の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_program_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaプログラムの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_rwlock_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schema読み取り/書き込みロックのクラス数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_rwlock_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schema読み取り/書き込みロックのインスタンス数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_session_connect_attrs_longest_seen"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance Schemaで見たセッションの接続プロパティの最大長さです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_session_connect_attrs_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaセッション接続プロパティの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_socket_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaソケットクラスの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_socket_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaソケットインスタンスの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_stage_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaステージクラスの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_statement_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schema文章クラスの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_table_handles_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaテーブルハンドルの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_table_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaテーブルインスタンスの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_table_lock_stat_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaテーブルロック統計の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_thread_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaスレッドクラスの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_thread_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaスレッドインスタンスの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_users_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "失われたPerformance Schemaユーザー数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Prepared_stmt_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用意されたコマンドの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Queries"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "com_ping"
                }), "および", (0,jsx_runtime.jsx)(_components.code, {
                  children: "com_statistics"
                }), "を除くサーバーで実行したコマンドの数です。Stored program内で実行されたクエリも計算するという点で", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Questions"
                }), "と異なります。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Questions"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "実行されたクエリの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Replica_open_temp_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "開いている一時テーブルの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Secondary_engine_execution_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "補助エンジンで実行された作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Select_full_join"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "1つ以上のテーブルをジョインする場合、インデックスを使用せずにドリブン(driven)テーブルをフルスキャン(full scan)した回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Select_full_range_join"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "全体範囲のジョイン作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Select_range"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "範囲選択作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Select_range_check"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "範囲確認タスクの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Select_scan"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ドライビング(driving)テーブルをフルスキャン(full scan)した回数です。この場合、実行計画のtypeカラムにALLが表示されます。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Slave_open_temp_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "開いている一時テーブルの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Slaves_running"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "実行されるスレーブSQLスレッドの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Slow_launch_threads"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "遅く始まったスレッドの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Slow_queries"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["DBパラメータ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "long_query_time"
                }), "(second) オプションに設定した時間以上に実行されたクエリ数です。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Sort_merge_passes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ソートマージ作業の回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Sort_range"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "範囲ソート作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Sort_rows"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ソートされた行数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Sort_scan"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "スキャンのソート作業の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_accept_renegotiates"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL接続の再交渉回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_accepts"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL接続の受け入れ数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_callback_cache_hits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSLコールバックキャッシュのヒットの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_client_connects"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSLクライアント接続の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_connect_renegotiates"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL接続の再交渉回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_ctx_verify_depth"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSLコンテキスト検証の深さです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_ctx_verify_mode"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSLコンテキスト検証モードです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_default_timeout"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSLデフォルトのタイムアウトです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_finished_accepts"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "完了したSSL接続数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_finished_connects"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "完了したSSLクライアント接続の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_session_cache_hits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSLセッションのキャッシュヒットの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_session_cache_misses"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSLセッションキャッシュミスの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_session_cache_overflows"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSLセッションキャッシュオーバーフローの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_session_cache_size"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSLセッションキャッシュのサイズです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_session_cache_timeout"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSLセッションキャッシュのタイムアウトです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_session_cache_timeouts"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSLセッションキャッシュのタイムアウト回数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_sessions_reused"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "再利用されたSSLセッションの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_used_session_cache_entries"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "使用されたSSLセッションのキャッシュ項目の数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_verify_depth"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL検証の深さです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_verify_mode"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL検証モードです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Table_locks_immediate"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "すぐに獲得されたテーブルロックの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Table_locks_waited"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "待機後に取得されたテーブルロックの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Table_open_cache_hits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "テーブルを開くキャッシュヒットの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Table_open_cache_misses"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "テーブルを開くキャッシュミスの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Table_open_cache_overflows"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "テーブルを開くキャッシュオーバーフローの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Tc_log_max_pages_used"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "使用された最大Tcログページの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Tc_log_page_size"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Tcログページのサイズです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Tc_log_page_waits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Tcログページの待機数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Threads_cached"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "キャッシュされたスレッドの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Threads_connected"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "接続されたスレッドの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Threads_created"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "生成されたスレッドの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Threads_running"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "実行中のスレッドの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Uptime"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "サーバーの稼働時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Uptime_since_flush_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "最後のステータスフラッシュ以降の経過時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Writes"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Writeに使用したコマンドの回数です。", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_insert"
                }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_update"
                }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_delete"
                }), "計算式と同じです。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "active_sessions"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["活性セッションの数です。", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Threads_running"
                }), "メトリクスと同値です。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "connect_error"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "接続エラーの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "fatal_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "致命的なエラーの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "lock_wait_sessions"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["行ロック(row lock)を獲得するために待機しているセッションの数です。", (0,jsx_runtime.jsx)(_components.code, {
                  children: "innodb_lock_waits"
                }), "(", (0,jsx_runtime.jsx)(_components.code, {
                  children: "data_lock_waits"
                }), ")の件数です。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "long_running_sessions"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "長時間実行中のセッションの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "max_connections"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["最大同時クライアント接続数です。Connection数が足りない場合", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Too ManyConnection Error"
                }), "が発生することがあります。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "node_state"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Replication関係で構成されたデータベースであり、", (0,jsx_runtime.jsx)(_components.code, {
                  children: "1"
                }), "：Master、", (0,jsx_runtime.jsx)(_components.code, {
                  children: "2"
                }), "：Slaveを意味します。"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "replication_broken"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "複製の失敗可否です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "replication_delay"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "複製の遅延時間です。Replication構造の場合、replicationデータベースに反映される遅延時間であり、Slave DBで測定されるメトリクスです。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "seconds_behind_master"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "マスターとの遅延時間(秒)です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "total_runtime"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "すべてのクエリの合計実行時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/csv/data"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CSVデータファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/csv/metadata"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CSVメタデータファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/innodb/innodb_data_file"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBデータファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/innodb/innodb_dblwr_file"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB二重書き込みファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/innodb/innodb_log_file"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDBログファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/innodb/innodb_temp_file"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB一時ファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/mysys/charset"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySys文字セットファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/mysys/cnf"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySys構成ファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/ERRMSG"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQLエラーメッセージファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/binlog"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQLバイナリログファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/binlog_index"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQLバイナリログインデックスファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/casetest"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQLケーステストファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/misc"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQLその他のファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/pid"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL PIDファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/relaylog"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQLリレー ログファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/relaylog_index"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQLリレー ログインデックスファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/slow_log"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL遅いログファイルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/table/sql/handler"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQLハンドラーテーブルの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/lock/table/sql/handler"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQLハンドラーテーブル ロックの待ち時間です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "waiting_for_table_flush_sessions"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "テーブルフラッシュの待機セッションの数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "warning_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "アラート数です。"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              }), (0,jsx_runtime.jsx)(_components.td, {})]
            })]
          })]
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_db-xos-metrics.mdx
var _db_xos_metrics = __webpack_require__(67420);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/mysql/metrics-data-list.mdx


const metrics_data_list_frontMatter = {
	id: 'metrics-data-list',
	title: 'MySQL指標',
	description: 'MySQL指標についてガイドします。',
	keywords: [
		'MySQL',
		'メトリクス',
		'データベース',
		'データベースモニタリング'
	],
	isTranslationMissing: false
};
const metrics_data_list_contentTitle = undefined;
const metadata = {
  "id": "mysql/metrics-data-list",
  "title": "MySQL指標",
  "description": "MySQL指標についてガイドします。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/mysql/metrics-data-list.mdx",
  "sourceDirName": "mysql",
  "slug": "/mysql/metrics-data-list",
  "permalink": "/ja/mysql/metrics-data-list",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/mysql/metrics-data-list.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "metrics-data-list",
    "title": "MySQL指標",
    "description": "MySQL指標についてガイドします。",
    "keywords": [
      "MySQL",
      "メトリクス",
      "データベース",
      "データベースモニタリング"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "mysqlSidebar",
  "previous": {
    "title": "メトリクス",
    "permalink": "/ja/mysql/metrics-intro"
  },
  "next": {
    "title": "メトリクスチャート",
    "permalink": "/ja/mysql/metrics-chart-v2"
  }
};
const assets = {

};





const metrics_data_list_toc = [...toc, ..._db_xos_metrics/* toc */.RM];
function metrics_data_list_createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_db_xos_metrics/* default */.Ay, {})]
  });
}
function metrics_data_list_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(metrics_data_list_createMdxContent, {
      ...props
    })
  }) : metrics_data_list_createMdxContent(props);
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