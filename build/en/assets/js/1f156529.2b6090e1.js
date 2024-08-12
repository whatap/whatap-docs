"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[17268],{

/***/ 45077:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_metrics-database-mysql.mdx


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
      children: "Database metrics comprehensively collect the database workload and resource usage. The WhaTap monitoring service continuously collects metric data to identify bottlenecks in the database and provides data to help identify the root cause of the performance issue."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      class: "db-metric-4",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Indicators"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Unit"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Category"
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
              children: "Server connection failure count"
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
              children: ["Query running session count. It is the same as ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Threads_running"
              }), "."]
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
              children: "Number of connections rejected by server errors"
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
              children: ["Number of connections rejected by the limit of ", (0,jsx_runtime.jsx)(_components.code, {
                children: "max_connections"
              })]
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
              children: "DB connection trial count"
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
              children: "Maximum number of used connections after startup"
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
              children: "Number of connected sessions"
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
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Too ManyConnection Error"
              }), " may occur if the maximum number of concurrent client connections exceeds or the connection count is insufficient."]
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
              children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Bytes_received"
              }), " of the DB server are high, it indicates that this server is a write-oriented server (e.g. insert)."]
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
              children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Bytes_sent"
              }), " from the DB server are high, it indicates that this server is a read-oriented (select) server. If you apply it together with ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Questions"
              }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Uptime"
              }), ", the average bytes per query and the processing bytes per hour can be counted."]
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
              children: ["Number of temporary tables on disk created by the server while executing commands. Because disk usage can degrade the performance, if this value increases, consider adjusting values for ", (0,jsx_runtime.jsx)(_components.code, {
                children: "tmp_table_size"
              }), " or ", (0,jsx_runtime.jsx)(_components.code, {
                children: "max_heap_table_size"
              }), "."]
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
              children: "Number of temporary files created by mysqld"
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
              children: ["Number of internal temporary tables created by the server while executing commands. Temporary tables can be used in a few cases, typically when using UNION ALL in a query or when using ORDER BY, GROUP BY, or DISTINCT. It is recommended that the number of temporary tables on disk (", (0,jsx_runtime.jsx)(_components.code, {
                children: "Created_tmp_disk_tables"
              }), ") is not high (less than 10%) relative to the total number of internal temporary tables (", (0,jsx_runtime.jsx)(_components.code, {
                children: "Created_tmp_disk_tables"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Created_tmp_tables"
              }), ")."]
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
              children: "Number of changed data bytes in the buffer pool (number of dirty data)"
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
              children: "Number of pages in use in the total buffer pool."
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
              children: "Number of changed data pages in the buffer pool (number of dirty pages)"
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
              children: "Number of InnoDB buffer pool pages flushed. Excessive flushing can put a strain on the disk while writing dirty data, it must be monitored along with the disk performance."
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
              children: "Number of unused (available) pages in the entire buffer pool"
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
              children: "Number of pages in the entire buffer pool"
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
              children: ["Number of logical read requests (including physical reads). ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Inodb buffer pool hit ratio"
              }), " can be calculated as follows, and 90% or higher is recommended. If the hit ratio is low, consider adding ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_buffer_pool_size"
              }), ".", (0,jsx_runtime.jsx)("br", {}), "Buffer Hit Ratio = (1 - (", (0,jsx_runtime.jsx)(_components.code, {
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
              children: "The number of physical (disk) reads. The number of logical read requests that are not in the Innodb buffer pool and must be read directly from the disk."
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
              children: ["Number of InnoDB reads (not to be confused with ", (0,jsx_runtime.jsx)(_components.code, {
                children: "InnoDB_Data_Read"
              }), ")"]
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
              children: "Number of InnoDB writes."
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
              children: "Number of writes to the Innodb Doublewrite buffers."
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
              children: ["The number of times waited for the log buffer to be flushed because it was small. The redo log contention rate can be calculated as (", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_log_waits"
              }), "/", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_log_writes"
              }), "), a value less than 1 is recommended. If ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Wait"
              }), " is high, consider increasing ", (0,jsx_runtime.jsx)(_components.code, {
                children: "innodb_log_buffer_size"
              }), "."]
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
              children: "Number of physical writes to the innodb redo log file."
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
              children: "Number of bytes recorded in the binary log."
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
              children: "Number of commits recorded in the binary log."
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
              children: "Total time spent acquiring row locks (milliseconds)"
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
              children: "Count to wait for a row lock in the Innodb storage engine table. This is the waiting count to acquire a lock, not the number of lock acquisitions. If this metric increases more than usual, the query wait occurs (lock contention), and query tuning is required."
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
              children: ["Number of waits for acquiring row lock. It is the number of ", (0,jsx_runtime.jsx)(_components.code, {
                children: "innodb_lock_waits"
              }), " (", (0,jsx_runtime.jsx)(_components.code, {
                children: "data_lock_waits"
              }), ")."]
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
              children: "Delay time reflected in the replication DB for the replication structure. This is a metric measured in the slave DB."
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
              children: "Number of slave SQL threads executing"
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
              children: ["Number of queries executed longer than the time set in the DB parameter, ", (0,jsx_runtime.jsx)(_components.code, {
                children: "long_query_time"
              }), " (seconds)."]
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
              children: "Number of rows sorted"
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
              children: "Number of commits"
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
              children: ["Number of delete commands executed. It counts the number of rows deleted from the table and the row that are different from ", (0,jsx_runtime.jsx)(_components.code, {
                children: "handler_delete"
              }), "."]
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
              children: "Number of inserted commands that have been executed"
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
              children: "Rollback count"
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
              children: "Number of executed Select commands"
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
              children: "Number of executed update commands"
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
              children: "Number of processed rows by Select"
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
              children: ["Number of rows processed by Write. It is the same as ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_rows_inserted"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_rows_updated"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_rows_deleted"
              }), "."]
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
              children: ["Number of statements executed by the server, excluding ", (0,jsx_runtime.jsx)(_components.code, {
                children: "com_ping"
              }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "com_statistics"
              }), ". It differs from ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Questions"
              }), " because it also counts the statements executed in the stored program."]
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
              children: "Number of queries executed"
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
              children: "Number of full scans for driven tables without using indexes when joining more than one table."
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
              children: "Number of full scans for the driving table. In this case, ALL appears in the type column of the plan."
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
              children: ["Number of commands used by Write. It is the same as ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_insert"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_update"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_delete"
              }), "."]
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
              children: ["CPU utilization, ", (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_user"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_sys"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_iowait"
              }), "."]
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
              children: "Time spent for CPU to execute user code"
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
              children: "Time spent for CPU to execute the kernel code"
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
              children: "CPU time waited for IO"
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
              children: "CPU processor's idle time"
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
              children: "Memory utilization"
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
              children: "Total amount of memory"
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
              children: "Amount of memory not in use by the system"
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
              children: "Amount of memory in use by the system"
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
              children: "Amount of memory used by the buff/cache"
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
              children: "Set this in preparation for the case where the total Swap size and physical memory are insufficient."
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
              children: "Because the unused Swap area and Swap area are secured in disk space, the system performance may drop drastically while using Swap."
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
              children: "Available memory area"
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
              children: "Amount of data read from disk"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "disk_read_bytes(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Amount of data read from disk"
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
              children: "Amount of data written to disk"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "disk_write_bytes(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Amount of data written to disk"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "net_recv_bytes(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Amount of data received over the network"
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
              children: "Number of data packets received over the network"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "XOS"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "net_send_bytes(xos)"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Amount of data transmitted over the network"
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
              children: "Number of data packets transmitted over the network"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/mysql/metrics-data-list.mdx


const metrics_data_list_frontMatter = {
	id: 'metrics-data-list',
	title: 'MySQL metrics',
	description: 'It guides you to MySQL metrics.',
	tags: [
		'MySQL',
		'Metrics',
		'Database',
		'Database Monitoring'
	]
};
const metrics_data_list_contentTitle = undefined;
const metadata = {
  "id": "mysql/metrics-data-list",
  "title": "MySQL metrics",
  "description": "It guides you to MySQL metrics.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/mysql/metrics-data-list.mdx",
  "sourceDirName": "mysql",
  "slug": "/mysql/metrics-data-list",
  "permalink": "/en/mysql/metrics-data-list",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/mysql/metrics-data-list.mdx",
  "tags": [
    {
      "inline": true,
      "label": "MySQL",
      "permalink": "/en/tags/my-sql"
    },
    {
      "inline": true,
      "label": "Metrics",
      "permalink": "/en/tags/metrics"
    },
    {
      "inline": true,
      "label": "Database",
      "permalink": "/en/tags/database"
    },
    {
      "inline": true,
      "label": "Database Monitoring",
      "permalink": "/en/tags/database-monitoring"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "metrics-data-list",
    "title": "MySQL metrics",
    "description": "It guides you to MySQL metrics.",
    "tags": [
      "MySQL",
      "Metrics",
      "Database",
      "Database Monitoring"
    ]
  },
  "sidebar": "mysqlSidebar",
  "previous": {
    "title": "Metrics",
    "permalink": "/en/mysql/metrics-intro"
  },
  "next": {
    "title": "Metrics Chart",
    "permalink": "/en/mysql/metrics-chart"
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