"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[87890],{

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





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
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
    }), "\n", (0,jsx_runtime.jsx)("div", {
      class: "db-metric-4",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "メトリクス"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "単位"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "カテゴリ"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Aborted_connects"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "サーバー接続エラーの回数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Connection"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "active_sessions"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["クエリを実行中されているセッション数。", (0,jsx_runtime.jsx)(_components.code, {
                children: "Threads_running"
              }), "と同じ"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Connection"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Connection_errors_internal"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "サーバーエラーによって拒否されたコネクション数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Connection"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Connection_errors_max_connections"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "max_connections"
              }), "の制限で拒否されたコネクション数"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Connection"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Connections"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DB接続の試行回数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Connection"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Max_used_connections"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "startup以降に使用される最大コネクション数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Connection"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Threads_connected"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "現在接続されているセッション数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Connection"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "max_connections"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["最大同時クライアント接続とコネクション数を超過した場合、", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Too ManyConnection Error"
              }), "が発生する可能性があります。"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Info"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Bytes_received"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["DB サーバーが大量の", (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              }), "と", (0,jsx_runtime.jsx)(_components.code, {
                children: "Bytes_received"
              }), "を受信した場合、このサーバーは書き込み操作中(insert など) であることが分かります。"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Bytes_sent"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["DBサーバから送信されるデータで", (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              }), "と", (0,jsx_runtime.jsx)(_components.code, {
                children: "Bytes_sent"
              }), "が高い場合、このサーバーは読み取り作業(select)サーバーであることが分かります。", (0,jsx_runtime.jsx)(_components.code, {
                children: "Questions"
              }), "、", (0,jsx_runtime.jsx)(_components.code, {
                children: "Uptime"
              }), "を一緒に応用すると、クエリ1個あたりの平均Byteと時間あたりの処理Byteなどを計算できます。"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Created_tmp_disk_tables"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["コマンドの実行中にサーバーのディスク上に作成された一時テーブルの数。ディスク使用量は性能を低下させる可能性があるため、この値が増加した場合は、", (0,jsx_runtime.jsx)(_components.code, {
                children: "tmp_table_size"
              }), "または", (0,jsx_runtime.jsx)(_components.code, {
                children: "max_heap_table_size"
              }), "値の調整を検討する必要があります。"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Created_tmp_files"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "mysqldによって作成された一時ファイル数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Created_tmp_tables"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["コマンドの実行中にサーバーによって作成された内部一時テーブルの数。一般的にクエリでUNION ALLまたは、ORDER BY、GROUP BY、DISTINCTを実行する場合、一時テーブルが使用されます。内部一時テーブルの総数(", (0,jsx_runtime.jsx)(_components.code, {
                children: "Created_tmp_disk_tables"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Created_tmp_tables"
              }), ") と比較して、ディスク上の一時テーブル数(", (0,jsx_runtime.jsx)(_components.code, {
                children: "Created_tmp_disk_tables"
              }), ")が多くないことをお勧めします。(10%未満)"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_buffer_pool_bytes_dirty"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バッファプールで変更されたバイト数(ダーティデータ数)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_buffer_pool_pages_data"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "全体バッファプールで現在使用中のバッファプールページ数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_buffer_pool_pages_dirty"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バッファプールのデータで変更されたページ数(ダーティページ数)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_buffer_pool_pages_flushed"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "フラッシュされたInnoDBバッファフルのページ数です。バッファプールからダーティデータをディスクに書き込む過程で、過度のフラッシュはディスクに負担をかける可能性があるため、ディスクの性能とともにモニタリングする必要があります。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_buffer_pool_pages_free"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "全体バッファプールの未使用(使用可能な) ページ数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_buffer_pool_pages_total"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "全体バッファプールのページ数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_buffer_pool_read_requests"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["論理的読み取りのリクエスト数(物理的読み取りを含む)。", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Inodb buffer pool hit ratio"
              }), "は、次のように演算され、90%以上をを推奨します。Hit Ratioが低い場合は、", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_buffer_pool_size"
              }), "を追加することを検討してください。", (0,jsx_runtime.jsx)("br", {}), "Buffer Hit Ratio = (1 - (", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_buffer_pool_reads"
              }), "/", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_buffer_pool_read_requests"
              }), ")) * 100"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_buffer_pool_reads"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "物理的(Disk) 読み込みをした回数。Innodbバッファプールにないため、ディスクから直接読み込む必要のある論理的読み込みのリクエスト数。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_data_reads"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["InnoDBの読み込み作業の数 (", (0,jsx_runtime.jsx)(_components.code, {
                children: "InnoDB_Data_Read"
              }), "と混在しない)。"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_data_writes"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "InnoDBの書き込み操作の数。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_dblwr_writes"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Innodb Doublewriteバッファへの書き込み数。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_log_waits"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["ログバッファが小さいため、フラッシュするのを待機した回数。Redo logの競合率は、(", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_log_waits"
              }), " / ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_log_writes"
              }), ") で演算され、1未満の値をお勧めします。", (0,jsx_runtime.jsx)(_components.code, {
                children: "Wait"
              }), "が多い場合、 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "innodb_log_buffer_size"
              }), "を増やすことを検討してください。"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_log_writes"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "innodb redo log fileへの物理書き込み数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MySQL Resource"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Binlog_bytes_written"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイナリログに書き込まれたバイト数。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Performance"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Binlog_commits"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイナリログに記録されたCommit数。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Performance"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_row_lock_time"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "row lockの取得に掛かった合計時間(milliseconds)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Performance"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_row_lock_waits"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Innodbストレージエンジンテーブルからrow lockを待機する回数です。ロックを取得した数ではなく、ロックを取得するために待機する回数で、この指標が通常より増加する場合は、クエリの待機(ロック競合)が発生することで、クエリのチューニングが必要になります。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Performance"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "lock_wait_sessions"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["現在row lockを取得するために待機中の数。", (0,jsx_runtime.jsx)(_components.code, {
                children: "innodb_lock_waits"
              }), "(", (0,jsx_runtime.jsx)(_components.code, {
                children: "data_lock_waits"
              }), ")の件数です。"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Performance"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "replication_delay"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Replication構造の場合、replication dbに反映される遅延時間。Slave DBで測定される指標です。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Performance"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Slaves_running"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "実行されたスレーブSQLスレッド数。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Performance"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Slow_queries"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["DBパラメータ", (0,jsx_runtime.jsx)(_components.code, {
                children: "long_query_time"
              }), "(秒)に設定された時間を超えて実行されたクエリ数"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Performance"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Sort_rows"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "sort処理したrow数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Performance"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_commit"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "commit回数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughput"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_delete"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["実行された削除コマンドの数。", (0,jsx_runtime.jsx)(_components.code, {
                children: "handler_delete"
              }), "以外の行がテーブルから削除された回数をカウントします。"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughput"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_insert"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "実行された挿入コマンドの数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughput"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_rollback"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "rollback回数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughput"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_select"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Selectコマンドを実行した回数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughput"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_update"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "実行されたアップデートコマンドの数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughput"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_rows_read"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "selectで処理されたrow数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughput"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_rows_writes"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["writeで処理されたrow数。", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_rows_inserted"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_rows_updated"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_rows_deleted"
              }), "と同等"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughput"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Queries"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "com_ping"
              }), "および", (0,jsx_runtime.jsx)(_components.code, {
                children: "com_statistics"
              }), "を除くサーバーで実行したコマンドの数。Stored program内で実行されるステートメントもカウントする点で", (0,jsx_runtime.jsx)(_components.code, {
                children: "Questions"
              }), "とは異なります。"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughput"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Questions"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "実行されたqueryの数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughput"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Select_full_join"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1つ以上のテーブルをJOINする場合、インデックスを使用せずにドリブン(driven) テーブルをフルスキャン(full scan)された回数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughput"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Select_scan"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ドライビング(d riving)テーブルをフルスキャン(full scan)した回数。この場合、実行計画のtypeカラムにALLが表示されます。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughput"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Writes"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["writeに使用されるコマンド回数。", (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_insert"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_update"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_delete"
              }), "と同様"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Throughput"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu(xos2)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "pct"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["cpu使用率、", (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_user"
              }), "+", (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_sys"
              }), "+", (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_iowait"
              }), "の合計"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_user(xos2)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "pct"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "cpuがユーザーコードの実行に費やした時間"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_sys(xos2)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "pct"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "cpuがkernel codeを実行した時間"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_iowait(xos2)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "pct"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "cpuがI/Oを待機した時間"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_idle(xos2)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "pct"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "cpuプロセッサアイドルタイム"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mem(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "pct"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "メモリ使用率"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mem_total(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "全メモリ量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mem_free(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "システムで使用していないメモリ量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mem_used(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "システムで使用しているメモリ量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mem_buffcache(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "buff/cacheで使用中のメモリ量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mem_swaptotal(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Swap全体サイズ、物理メモリが不足している場合に備えて設定します。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mem_swapfree(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Swapの未使用領域、Swap領域はディスク領域が解放されるため、Swapを使用している場合は、システム性能が大幅に低下する可能性があります。"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "mem_available(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MB"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "メモリ可用領域"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "disk_reads(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "block"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ディスクから読み込んだデータの量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "disk_read_bytes(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ディスクから読み込んだデータの量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "disk_writes(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "block"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ディスクで書き込まれたデータの量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "disk_write_bytes(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ディスクで書き込まれたデータの量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "net_recv_bytes(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ネットワークで受信されたデータの量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "net_recv_packets(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ネットワークで受信されたデータパケットの数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "net_send_bytes(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ネットワークに送信したデータの量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "net_send_packets(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ネットワークに送信したデータパケットの数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          })]
        })]
      })
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/mysql/metrics-data-list.mdx


const metrics_data_list_frontMatter = {
	id: 'metrics-data-list',
	title: 'MySQL指標',
	description: 'MySQL指標についてガイドします。',
	tags: [
		'MySQL',
		'メトリクス',
		'データベース',
		'データベースモニタリング'
	]
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
  "tags": [
    {
      "inline": true,
      "label": "MySQL",
      "permalink": "/ja/tags/my-sql"
    },
    {
      "inline": true,
      "label": "メトリクス",
      "permalink": "/ja/tags/メトリクス"
    },
    {
      "inline": true,
      "label": "データベース",
      "permalink": "/ja/tags/データベース"
    },
    {
      "inline": true,
      "label": "データベースモニタリング",
      "permalink": "/ja/tags/データベースモニタリング"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "metrics-data-list",
    "title": "MySQL指標",
    "description": "MySQL指標についてガイドします。",
    "tags": [
      "MySQL",
      "メトリクス",
      "データベース",
      "データベースモニタリング"
    ]
  },
  "sidebar": "mysqlSidebar",
  "previous": {
    "title": "メトリクス",
    "permalink": "/ja/mysql/metrics-intro"
  },
  "next": {
    "title": "メトリクスチャート",
    "permalink": "/ja/mysql/metrics-chart"
  }
};
const assets = {

};




const metrics_data_list_toc = [...toc];
function metrics_data_list_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(MDXContent, {});
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