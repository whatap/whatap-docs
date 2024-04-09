"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[29770],{

/***/ 780:
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
;// CONCATENATED MODULE: ./docs/common-items/_metrics-database-mysql.mdx


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
      children: "데이터베이스 메트릭은 데이터베이스의 작업량과 리소스 사용량을 포괄적으로 수집합니다. 와탭 모니터링 서비스는 지속적으로 메트릭을 수집하여 데이터베이스의 병목 현상을 확인하고, 성능 문제의 근본 원인을 식별하는 데 도움이 되는 데이터를 제공합니다."
    }), "\n", (0,jsx_runtime.jsx)("div", {
      class: "db-metric-4",
      children: (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "지표"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "단위"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "카테고리"
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
              children: "서버 연결 실패 횟수"
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
              children: ["쿼리를 실행 중인 세션 수. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Threads_running"
              }), "과 같음"]
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
              children: "서버 오류에 의해 거절된 커넥션 수"
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
                children: "max_connections의"
              }), " 제한으로 거절된 커넥션의 수"]
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
              children: "DB 접속 시도 횟수"
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
              children: "startup 이후 최대 사용 커넥션 수"
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
              children: "현재 접속한 세션 수"
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
              children: ["최대 동시 클라이언트 연결 수, 커넥션 수가 부족할 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Too ManyConnection Error"
              }), "가 발생할 수 있습니다."]
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
              children: ["DB 서버가 받은 데이터 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Bytes_received"
              }), "가 높다면 이 서버는 쓰기 위주 작업(insert 등) 서버임을 알 수 있습니다."]
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
              children: ["DB 서버가 보낸 데이터 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "bytes"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Bytes_sent"
              }), "가 높다면 이 서버는 읽기 위주 작업(select) 서버임을 알 수 있습니다. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Questions"
              }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Uptime"
              }), "과 함께 응용해보면 1개 쿼리당 평균 Byte, 시간당 처리 Byte 등을 계산 할 수 있습니다."]
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
              children: ["명령문을 실행하는 동안 서버에서 디스크에 생성한 임시 테이블 개수. 디스크 사용은 성능을 저하시킬 수 있으므로 이 값이 커지면 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "tmp_table_size"
              }), " 또는 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "max_heap_table_size"
              }), " 값 조정을 검토합니다."]
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
              children: "mysqld가 생성한 임시 파일 수"
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
              children: ["명령문을 실행하는 동안 서버에 의해 생성된 내부 임시 테이블의 수. 일반적으로 쿼리에서 UNION ALL을 사용하거나 ORDER BY, GROUP BY, DISTINCT를 사용하는 몇가지 경우 임시테이블이 사용될 수 있습니다. 총 내부 임시테이블 수(", (0,jsx_runtime.jsx)(_components.code, {
                children: "Created_tmp_disk_tables"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Created_tmp_tables"
              }), ") 대비 디스크상의 임시테이블 수(", (0,jsx_runtime.jsx)(_components.code, {
                children: "Created_tmp_disk_tables"
              }), ")가 높지 않은 것이 좋습니다.(10%미만)"]
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
              children: "버퍼풀의 데이터 중 변경된 바이트 수(더티 데이터 수)"
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
              children: "전체 버퍼풀에서 현재 사용 중인 버퍼풀 페이지 수"
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
              children: "버퍼풀의 데이터 중 변경된 페이지 수(더티 페이지 수)"
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
              children: "플러시된 InnoDB 버퍼풀 페이지 수. 이는 버퍼풀의 더티 데이터를 디스크에 쓰는 과정으로 과도한 flush는 디스크에 부담을 줄 수 있으므로 디스크의 성능과 함께 모니터링해야 합니다."
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
              children: "전체 버퍼풀에서 사용하지 않은(사용 가능한) 페이지 수"
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
              children: "전체 버퍼풀의 페이지 수"
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
              children: ["논리적 읽기 요청 수(물리적 읽기를 포함). ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Inodb buffer pool hit ratio"
              }), " 계산을 다음과 같이 할 수 있으며, 90% 이상을 권장합니다. 만약 Hit Ratio가 낮다면 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_buffer_pool_size"
              }), " 증설을 검토합니다.", (0,jsx_runtime.jsx)("br", {}), "Buffer Hit Ratio = (1 - (", (0,jsx_runtime.jsx)(_components.code, {
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
              children: "물리적(Disk) read 를 한 횟수. Innodb 버퍼풀에 없어서 디스크에서 직접 읽어야 하는 논리적 읽기 요청 수."
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
              children: ["InnoDB 읽기 작업의 수 (", (0,jsx_runtime.jsx)(_components.code, {
                children: "InnoDB_Data_Read"
              }), "와 혼동되지 않음)."]
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
              children: "InnoDB 쓰기 작업의 수."
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
              children: "Innodb Doublewrite 버퍼에 대한 쓰기 수."
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
              children: ["로그 버퍼가 작아서 플러시 될 때까지 기다린 횟수. Redo log 경합 비율은 (", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_log_waits"
              }), " / ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_log_writes"
              }), ") 로 계산할 수 있으며 1 미만 값을 권장합니다. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Wait"
              }), "가 높다면 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "innodb_log_buffer_size"
              }), "를 늘리는 것을 검토하세요."]
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
              children: "innodb redo log file에 대한 물리적 쓰기 수"
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
              children: "이진 로그에 기록 된 바이트 수."
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
              children: "이진 로그에 기록된 Commit 수."
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
              children: "row lock 획득에 소비된 총 시간(milliseconds)"
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
              children: "Innodb 스토리지 엔진 테이블에서 row lock을 기다려야 하는 횟수. Lock을 획득한 수가 아닌 lock을 얻기 위해 대기하는 횟수로, 이 지표가 평소보다 급증한다면 쿼리 대기가 발생(락 경합)하는 것으로 쿼리 튜닝이 필요합니다."
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
              children: ["현재 row lock을 획득하기 위해 대기중인 수. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "innodb_lock_waits"
              }), "(", (0,jsx_runtime.jsx)(_components.code, {
                children: "data_lock_waits"
              }), ")의 건수입니다."]
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
              children: "Replication 구조일 경우 replication db에 반영되는 지연시간. Slave DB에서 측정되는 지표입니다."
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
              children: "실행되는 슬레이브 SQL 스레드 수."
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
              children: ["DB 파라미터 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "long_query_time"
              }), "(초)에 설정한 시간 이상으로 실행된 쿼리 수"]
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
              children: "sort 처리한 row 수"
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
              children: "commit 횟수"
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
              children: ["실행된 삭제 명령 수 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "handler_delete"
              }), "와는 다른 행이 테이블에서 삭제된 횟수를 계산합니다."]
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
              children: "실행된 삽입 명령 수"
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
              children: "rollback 횟수"
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
              children: "Select 명령을 실행한 횟수"
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
              children: "실행된 업데이트 명령 수"
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
              children: "select에서 처리된 row 수"
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
              children: ["write에 처리된 row 수. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_rows_inserted"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_rows_updated"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Innodb_rows_deleted"
              }), "와 같음"]
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
              }), " 및 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "com_statistics"
              }), "를 제외한 서버에서 실행한 명령문 수. Stored program 내에서 실행된 진술도 계산한다는 점에서 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Questions"
              }), "과 다릅니다."]
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
              children: "실행된 query의 갯수"
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
              children: "하나 이상의 테이블을 조인할 경우 인덱스를 사용하지 않고 드리븐(driven) 테이블을 풀 스캔(full scan)한 횟수"
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
              children: "드라이빙(driving) 테이블을 풀 스캔(full scan)한 횟수. 이 경우 실행 계획의 type 컬럼에 ALL이 표시됩니다."
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
              children: ["write에 사용한 명령 횟수. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_insert"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_update"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Com_delete"
              }), "와 같음"]
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
              children: ["cpu 사용율, ", (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_user"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_sys"
              }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                children: "cpu_iowait"
              }), "의 합"]
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
              children: "cpu가 사용자 코드를 실행하는데 소요한 시간"
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
              children: "cpu가 kernel code를 수행한 시간"
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
              children: "cpu가 IO를 대기한 시간"
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
              children: "cpu 프로세서 유휴 시간"
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
              children: "메모리 사용율"
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
              children: "전체 메모리양"
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
              children: "시스템에서 사용하고 있지 않은 메모리양"
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
              children: "시스템에서 사용하고 있는 메모리양"
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
              children: "buff/cache로 사용중인 메모리양"
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
              children: "Swap 전체 사이즈, 물리메모리가 부족한 경우를 대비하여 설정합니다."
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
              children: "Swap의 사용하지 않은 영역, Swap 영역은 디스크 공간에 확보되기 때문에 Swap을 사용하고 있다면 시스템 성능이 급격하게 떨어질 수 있습니다."
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
              children: "메모리 가용영역"
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
              children: "디스크로부터 읽은 데이터의 양"
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
              children: "디스크로부터 읽은 데이터의 양"
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
              children: "디스크로 쓰여진 데이터의 양"
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
              children: "디스크로 쓰여진 데이터의 양"
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
              children: "네트워크로 수신된 데이터의 양"
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
              children: "네트워크로 수신된 데이터 패킷의 수"
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
              children: "네트워크로 전송한 데이터의 양"
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
              children: "네트워크로 전송한 데이터 패킷의 수"
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


;// CONCATENATED MODULE: ./docs/mysql/metrics-data-list.mdx


const metrics_data_list_frontMatter = {
	id: 'metrics-data-list',
	title: 'MySQL 지표',
	description: 'MySQL 지표를 안내합니다.',
	tags: [
		'MySQL',
		'메트릭스',
		'데이터베이스',
		'데이터베이스 모니터링'
	]
};
const metrics_data_list_contentTitle = undefined;
const metadata = {
  "id": "mysql/metrics-data-list",
  "title": "MySQL 지표",
  "description": "MySQL 지표를 안내합니다.",
  "source": "@site/docs/mysql/metrics-data-list.mdx",
  "sourceDirName": "mysql",
  "slug": "/mysql/metrics-data-list",
  "permalink": "/whatap-docs/mysql/metrics-data-list",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/mysql/metrics-data-list.mdx",
  "tags": [
    {
      "label": "MySQL",
      "permalink": "/whatap-docs/tags/my-sql"
    },
    {
      "label": "메트릭스",
      "permalink": "/whatap-docs/tags/메트릭스"
    },
    {
      "label": "데이터베이스",
      "permalink": "/whatap-docs/tags/데이터베이스"
    },
    {
      "label": "데이터베이스 모니터링",
      "permalink": "/whatap-docs/tags/데이터베이스-모니터링"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "metrics-data-list",
    "title": "MySQL 지표",
    "description": "MySQL 지표를 안내합니다.",
    "tags": [
      "MySQL",
      "메트릭스",
      "데이터베이스",
      "데이터베이스 모니터링"
    ]
  },
  "sidebar": "mysqlSidebar",
  "previous": {
    "title": "메트릭스",
    "permalink": "/whatap-docs/mysql/metrics-intro"
  },
  "next": {
    "title": "메트릭스 차트",
    "permalink": "/whatap-docs/mysql/metrics-chart"
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