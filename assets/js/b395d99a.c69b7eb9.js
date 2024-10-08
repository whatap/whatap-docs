"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[30039],{

/***/ 23172:
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
	id: 'service-2_9_x',
	title: 'Service 2.9.X',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/service/service-2_8_x',
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/service/service-2_9_x",
  "title": "Service 2.9.X",
  "description": "Service 2.9.5",
  "source": "@site/docs/release-notes/service/service-2.9.x.mdx",
  "sourceDirName": "release-notes/service",
  "slug": "/release-notes/service/service-2_9_x",
  "permalink": "/whatap-docs/release-notes/service/service-2_9_x",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/service/service-2.9.x.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "service-2_9_x",
    "title": "Service 2.9.X",
    "toc_max_heading_level": 2,
    "pagination_next": "release-notes/service/service-2_8_x",
    "displayed_sidebar": "releaseSidebar",
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Service Release Notes",
    "permalink": "/whatap-docs/release-notes/service/"
  },
  "next": {
    "title": "Service 2.8.X",
    "permalink": "/whatap-docs/release-notes/service/service-2_8_x"
  }
};
const assets = {

};

/*

- <Status priority='0'>Fixed</Status> <Cmdname sid="TTL08411" className="uitext" />에서 <UI>일괄 해소</UI> 버튼 복구

*/
/*- <Status priority='0'>Fixed</Status> <Cmdname sid="side_dashboard" className="uitext" /> &gt; <Cmdname sid="side_containerMap" className="uitext" /> 메뉴로 처음 진입할 때 간헐적으로 라벨이 제대로 표시되지 않는 문제 수정*/


const toc = [{
  "value": "Service 2.9.5",
  "id": "service-295",
  "level": 2
}, {
  "value": "<code>공통</code>",
  "id": "공통",
  "level": 3
}, {
  "value": "Service 2.9.4",
  "id": "service-294",
  "level": 2
}, {
  "value": "<code>공통</code>",
  "id": "공통-1",
  "level": 3
}, {
  "value": "<code>Application</code>",
  "id": "application",
  "level": 3
}, {
  "value": "Service 2.9.3",
  "id": "service-293",
  "level": 2
}, {
  "value": "<code>Kubernetes</code>",
  "id": "kubernetes",
  "level": 3
}, {
  "value": "Service 2.9.2",
  "id": "service-292",
  "level": 2
}, {
  "value": "<code>Server</code>",
  "id": "server",
  "level": 3
}, {
  "value": "<code>Kubernetes</code>",
  "id": "kubernetes-1",
  "level": 3
}, {
  "value": "<code>Database</code>",
  "id": "database",
  "level": 3
}, {
  "value": "공통",
  "id": "공통-2",
  "level": 4
}, {
  "value": "Oracle <code class=\"my\">V2</code>, Oracle Pro",
  "id": "oracle-v2-oracle-pro",
  "level": 4
}, {
  "value": "PostgreSQL, MySQL",
  "id": "postgresql-mysql",
  "level": 4
}, {
  "value": "Service 2.9.1",
  "id": "service-291",
  "level": 2
}, {
  "value": "<code>공통</code>",
  "id": "공통-3",
  "level": 3
}, {
  "value": "Service 2.9.0",
  "id": "service-290",
  "level": 2
}, {
  "value": "신규 기능 출시",
  "id": "신규-기능-출시",
  "level": 3
}, {
  "value": "<code>Server</code>",
  "id": "server-1",
  "level": 4
}, {
  "value": "<code>Kubernetes</code>",
  "id": "kubernetes-2",
  "level": 4
}, {
  "value": "<code>Database</code>",
  "id": "database-1",
  "level": 4
}, {
  "value": "<code>공통</code>",
  "id": "공통-4",
  "level": 3
}, {
  "value": "<code>Application</code>",
  "id": "application-1",
  "level": 3
}, {
  "value": "<code>Server</code>",
  "id": "server-2",
  "level": 3
}, {
  "value": "<code>Kubernetes</code>",
  "id": "kubernetes-3",
  "level": 3
}, {
  "value": "<code>Database</code>",
  "id": "database-2",
  "level": 3
}, {
  "value": "공통",
  "id": "공통-5",
  "level": 4
}, {
  "value": "Oracle, Oracle Pro",
  "id": "oracle-oracle-pro",
  "level": 4
}, {
  "value": "Oracle Pro",
  "id": "oracle-pro",
  "level": 4
}, {
  "value": "MySQL",
  "id": "mysql",
  "level": 4
}, {
  "value": "<code>Log</code>",
  "id": "log",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, Status, UI} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Status) _missingMdxReference("Status", true);
  if (!UI) _missingMdxReference("UI", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "service-295",
        children: "Service 2.9.5"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "2024년 10월 08일"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "indentTab",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "공통",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "공통"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_myUsage",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_paymentInformation",
            className: "uitext"
          }), " 메뉴에서 와탭 스터터팩 관련 프로모션 이미지 변경"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "service-294",
        children: "Service 2.9.4"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "2024년 10월 02일"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "indentTab",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "공통-1",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "공통"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "0",
            children: "Changed"
          }), " 페이지네이션 컴포넌트 스타일 개선"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "application",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Application"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_statistics",
                className: "uitext"
              }), " 메뉴에서 데이터 조회 중 페이지네이션 비활성화되도록 수정"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_statistics",
                className: "uitext"
              }), " 메뉴에서 CSV 다운로드 라인 수가 최대 조회 건수와 일치하도록 변경"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "수정 전"
                  })
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "CSV: 100,000 / 조회: 10,000"
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "수정 후"
                  })
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "CSV: 10,000 / 조회: 10,000"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "service-293",
        children: "Service 2.9.3"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "2024년 09월 27일"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "indentTab",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "kubernetes",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Kubernetes"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_nodeMap",
            className: "uitext"
          }), " 메뉴에서 노드 전체를 선택한 후, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_log",
            className: "uitext"
          }), " 메뉴로 이동하면 로그 데이터가 조회되지 않는 문제 수정(캐시 문제 해결)"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "service-292",
        children: "Service 2.9.2"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "2024년 09월 26일"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "indentTab",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "server",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Server"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_serverList",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_serverInventory",
            className: "uitext"
          }), " 메뉴의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_serverInventoryGuide",
            className: "uitext"
          }), "에서 Windows 옵션 추가 명령어에 누락된 역슬래시(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "\\"
          }), ") 문자 추가"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "kubernetes-1",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Kubernetes"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " 다음 메뉴 경로 진입 시 신규 기능에 대한 안내 팝업 추가"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "side_dashboard",
                    className: "uitext"
                  }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "side_nodeMap",
                    className: "uitext"
                  })]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "side_cluster",
                    className: "uitext"
                  }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "side_nodeTimeline",
                    className: "uitext"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_report",
                className: "uitext"
              }), " 메뉴에서 보고서 양식을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "A200_AppMonthlyReport",
                className: "uitext",
                report: true
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "A155_AppMonthPerformance",
                className: "uitext",
                report: true
              }), "를 선택했을 때 여러 개의 에이전트, 에이전트 그룹, 에이전트 종류를 선택할 수 있도록 수정"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_nodeMap",
                className: "uitext"
              }), " 메뉴에서 노드 전체를 선택 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_log",
                className: "uitext"
              }), " 메뉴로 이동하면 로그 데이터가 조회되지 않는 문제 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "database",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Database"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
          id: "공통-2",
          children: "공통"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL06224",
            className: "uitext"
          }), " 창에서 SQL 문에 콜론(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: ":"
          }), ")이 여러 개 포함된 경우, 이를 바인드 변수로 인식하는 문제 수정"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
          id: "oracle-v2-oracle-pro",
          children: ["Oracle ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            className: "my",
            children: "V2"
          }), ", Oracle Pro"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL06224",
            className: "uitext"
          }), " 창에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
            children: "Runtime Plan"
          }), "의 평균 데이터가 합산되어 계산되는 문제 수정"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
          id: "postgresql-mysql",
          children: "PostgreSQL, MySQL"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " 대시보드의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "active_sessions",
            className: "uitext"
          }), " 테이블에서 쿼리를 선택해 Plan 조회 시 Object Detail 창에서 테이블 데이터가 없을 때 컬럼 이름만 표시하도록 수정"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "service-291",
        children: "Service 2.9.1"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "2024년 09월 25일"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "indentTab",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "공통-3",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "공통"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "sms_alert_status",
            className: "uitext"
          }), " 목록에서 이벤트 항목의 비교 시간이 갱신되지 않는 문제 수정"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "service-290",
        children: "Service 2.9.0"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "2024년 09월 25일"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "indentTab",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "신규-기능-출시",
          children: "신규 기능 출시"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Service 2.9.0 릴리스에 포함된 신규 기능을 소개합니다."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
          id: "server-1",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Server"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "1",
            children: "New"
          }), " 인프라 서버 운영에 필요한 정보를 에이전트가 자동 수집 및 저장, 사용자 정의 필드를 통해 추가한 정보를 조회하고 관리할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_serverInventory",
            className: "uitext"
          }), " 메뉴 추가"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "note",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["이 기능은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "side_serverList",
                  className: "uitext"
                }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "side_serverInventory",
                  className: "uitext"
                }), " 메뉴 경로에서 확인할 수 있습니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "../../server/server-inventory",
                  children: "다음 문서"
                }), "를 참조하세요."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["이 기능은 Server Linux/Windows 에이전트 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "v2.6.6"
                }), " 이상, AIX 에이전트 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "v1.3.4"
                }), " 이상, Solaris 에이전트 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "v1.3.4"
                }), " 이상에서 지원합니다."]
              }), "\n"]
            }), "\n"]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
          id: "kubernetes-2",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Kubernetes"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "New"
              }), " 노드(Node)에 대한 상세 정보를 확인할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_nodeMap",
                className: "uitext"
              }), " 메뉴 추가"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
              type: "note",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["이 기능은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "side_dashboard",
                  className: "uitext"
                }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "side_nodeMap",
                  className: "uitext"
                }), " 메뉴 경로에서 확인할 수 있으며, 다음 상세 정보를 제공합니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "../../kubernetes/node-map",
                  children: "다음 문서"
                }), "를 참조하세요."]
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                  children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                    children: "노드별 리소스 정보"
                  }), "\n"]
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                  children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                    children: "개별 노드의 상태(CPU, Memory 상태)"
                  }), "\n"]
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                  children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                    children: "노드에 대한 환경 정보"
                  }), "\n"]
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                  children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                    children: "노드 내부에서 실행 중인 와탭 에이전트의 상태"
                  }), "\n"]
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                  children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                    children: "노드 관련 메트릭스 카테고리의 정상 수집 여부"
                  }), "\n"]
                }), "\n"]
              })]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "New"
              }), " 시간의 흐름에 따른 노드 현황을 확인할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_nodeTimeline",
                className: "uitext"
              }), " 메뉴 추가"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
              type: "note",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["이 기능은 클러스터 프로젝트 전용이며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "side_cluster",
                  className: "uitext"
                }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "side_nodeTimeline",
                  className: "uitext"
                }), " 메뉴 경로에서 확인할 수 있습니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "../../kubernetes/node-timeline",
                  children: "다음 문서"
                }), "를 참조하세요."]
              })
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
          id: "database-1",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Database"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "New"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "CUBRID"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                className: "my",
                children: "V2"
              }), " 서비스 시작"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
              type: "note",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "CUBRID 모니터링"
                }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                  className: "my",
                  children: "V2"
                }), "의 새로운 기능에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "../../cubrid/monitoring-intro#new-feature",
                  children: "다음 문서"
                }), "를 참조하세요."]
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "New"
              }), " SQL 스크립트를 실행해 결과를 확인할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dbScriptManager",
                className: "uitext"
              }), " 메뉴 추가"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
              type: "note",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["이 기능은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "side_lab",
                  className: "uitext"
                }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "side_dbScriptManager",
                  className: "uitext"
                }), " 메뉴 경로에서 확인할 수 있습니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "../../reference/script-manager",
                  children: "다음 문서"
                }), "를 참조하세요."]
              })
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "공통-4",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "공통"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_integratedFlexboard",
                className: "uitext"
              }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_flexboard",
                className: "uitext"
              }), " 메뉴의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "view_mode",
                className: "uitext"
              }), "에서 그룹 위젯 레이아웃 접기 기능 추가"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
              type: "note",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["그룹 위젯에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "../../java/flexboard-widget-template#group",
                  children: "다음 문서"
                }), "를 참조하세요."]
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " 로그 관련 메뉴에서 테이블 컬럼의 너비를 조절할 수 있는 기능 추가"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "MNU07360",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_myProfile",
                className: "uitext"
              }), " 메뉴에서 사용자의 등록된 전화번호 삭제 기능 추가"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
              type: "note",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["전화번호 삭제 방법에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "../../account/account-manage#removecallnumber",
                  children: "다음 문서"
                }), "를 참조하세요."]
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_integratedRealtimeAlert",
                className: "uitext"
              }), " 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "ITM08413",
                className: "uitext"
              }), " 기능의 On/Off 설정 추가"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
              type: "note",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "side_integratedRealtimeAlert",
                  className: "uitext"
                }), " 메뉴에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "../../java/real-time-notification",
                  children: "다음 문서"
                }), "를 참조하세요."]
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_integratedRealtimeAlert",
                className: "uitext"
              }), " 메뉴에서 다음 사항 변경"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "TTL08411",
                    className: "uitext"
                  }), " 옵션의 UI 개선"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "ITM08412",
                    className: "uitext"
                  }), " 기능의 On/Off 토글 버튼의 위치를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "TTL08411",
                    className: "uitext"
                  }), " 내로 위치 변경"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_event",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_eventSetting",
                className: "uitext"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                className: "newfunc",
                children: "New"
              }), " 메뉴의 이벤트 추가 화면에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL07367",
                className: "uitext"
              }), " 옵션의 설명 중 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "CNT08320",
                className: "b500"
              }), " 용어를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "CNT08326",
                className: "uitext"
              }), "으로 변경"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_integratedRealtimeAlert",
                className: "uitext"
              }), " 메뉴에서 이벤트 발생 시각을 월/일/시/분/초까지 상세 표시하도록 변경"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_integratedFlexboard",
                className: "uitext"
              }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_flexboard",
                className: "uitext"
              }), " 메뉴에서 위젯 버튼의 드롭다운이 불필요하게 생성되는 문제 수정"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_metricsSearch",
                className: "uitext"
              }), " 메뉴에서 태그 선택을 해제했을 때 가독성이 떨어지는 문제를 스타일 수정으로 개선"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_metricsSearch",
                className: "uitext"
              }), " 에서 테이블 목록에 마우스를 오버할 때 텍스트 표기 스타일 개선"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " 실시간 알림 메시지의 내용이 긴 경우 레이아웃이 밀려나는 문제 수정"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TLT07929",
                className: "uitext"
              }), " 창에서 그룹 이름이 길어서 모달 창을 벗어나 표시되는 문제 수정"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "group_management_delete",
                className: "uitext",
                type: "group"
              }), " 창에서 그룹 아이콘이 'X'로 표시되는 문제 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "application-1",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Application"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_agentsConfiguration",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_threadList",
                className: "uitext"
              }), " 메뉴에서 선택한 에이전트가 설치된 애플리케이션의 스레드 현황(RUNNABLE, WAITING, 전체 개수)을 표시하는 기능 추가"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
              type: "note",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "side_threadList",
                  className: "uitext"
                }), " 메뉴에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "../../java/instance-performance-analysis#side_threadList",
                  children: "다음 문서"
                }), "를 참조하세요."]
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_appDashboard",
                className: "uitext"
              }), " 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "AA002",
                className: "uitext"
              }), " 위젯의 차트 영역을 선택했을 때 표시되는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "acttx",
                className: "uitext"
              }), " 창의 디자인 요소를 수정"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "top_ten",
                    className: "uitext"
                  }), " 탭에서 데이터가 없을 때 표시되는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                    children: "No rows found"
                  }), " 메시지가 테이블 헤더와 겹치지 않도록 수정"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "여백이 생길 때 배경색이 채워지지 않는 문제 수정"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "AA005",
                className: "uitext"
              }), " 위젯의 Y축 조정 버튼이 간헐적으로 보이지 않는 문제 수정"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06209",
                className: "uitext"
              }), " 창에서 SQL 문 표시 상자의 색상 수정"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06209",
                className: "uitext"
              }), " 창에서 SQL 상세 조회 시 API가 2회 호출되는 문제 수정"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
              type: "note",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "API 호출 횟수의 변경은 사용자에게 영향을 미치지 않습니다."
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_netstatTopology",
                className: "uitext"
              }), " 메뉴에서 Go 상품 아이콘이 정상 표시되지 않는 문제 수정"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_topology",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_appTopology",
                className: "uitext"
              }), " 메뉴에서 애플리케이션을 표시하는 요소의 아이콘이 정상 표시되지 않는 문제 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "server-2",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Server"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                children: "HP-UX"
              }), " 운영체제 환경을 지원하는 에이전트 설치 제공"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_integratedRealtimeAlert",
                className: "uitext"
              }), "에서 알림 항목을 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_eventHistory",
                className: "uitext"
              }), " 메뉴로 이동하도록 변경"]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "kubernetes-3",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Kubernetes"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_cluster",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_nodeList",
                className: "uitext"
              }), " 메뉴의 비교 및 상세 보기 기능 개선"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "디스크, 네트워크 컬럼 그룹을 제거하고 노드를 선택해 비교 및 상세 보기에서 관련 정보를 제공합니다."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_cluster",
                className: "uitext"
              }), "> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_nodeDiskList",
                className: "uitext"
              }), " 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08423",
                className: "uitext"
              }), " 컬럼을 추가, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08423",
                className: "uitext"
              }), " 컬럼 항목을 선택한 디스크의 사용량 추이를 확인할 수 있는 상세 화면 제공"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_management",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_kubernetesAgentList",
                className: "uitext"
              }), " 메뉴의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "BTN06342",
                className: "uitext"
              }), "에서 메트릭스 데이터를 확인할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "metrics",
                className: "uitext"
              }), " 탭 추가"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_management",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_agentInstall",
                className: "uitext"
              }), " 메뉴에서 에이전트 버전을 선택할 수 있는 옵션 추가 (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "ITM08384",
                className: "uitext"
              }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                children: "Preview"
              }), ")"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_workload",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_pendingPod",
                className: "uitext"
              }), " 메뉴에서 노드 리소스가 Pending 원인으로 추정되는 경우 제공하는 지표를 확대하도록 수정"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_management",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_agentInstall",
                className: "uitext"
              }), " 메뉴에서 설치 방식의 기본 선택값을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                children: "YAML"
              }), "로 변경"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " 사이드 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_metricsChart",
                className: "uitext"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                className: "oldfunc",
                children: "Old"
              }), " 메뉴를 노출하도록 변경"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Deprecated"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_cluster",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_nodeList",
                className: "uitext"
              }), " 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "BTN06991",
                className: "uitext"
              }), " 기능 제거"]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "database-2",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Database"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
          id: "공통-5",
          children: "공통"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_multiInstance",
                className: "uitext"
              }), " 메뉴에서 사용자 정의 위젯에 다음 기능 추가"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["파이 차트 또는 텍스트 차트에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "BTN08359",
                    className: "uitext"
                  }), " 옵션 추가"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "side_multiInstance",
                    className: "uitext"
                  }), " 메뉴를 진입하면 사용자 정의 위젯에 대한 안내 메시지 창 표시"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " 프로젝트 생성 화면에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "CUBRID"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Altibase"
              }), " 항목의 상세 내용으로 지원 버전 추가"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_multiInstance",
                className: "uitext"
              }), " 메뉴에서, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                children: "Vacuum Sessions"
              }), " 위젯의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "상세 아이콘",
                src: (__webpack_require__(3277)/* ["default"] */ .A) + "",
                width: "24",
                height: "24"
              }), " 버튼을 통해 열리는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08277",
                className: "uitext"
              }), " 창에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                children: "time"
              }), " 컬럼의 시간을 조회된 시간으로 표시하도록 변경"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_instanceList",
                className: "uitext"
              }), " 메뉴에서 인스턴스 이름을 선택해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dbMonitoring",
                className: "uitext"
              }), " 메뉴로 이동할 때 조직 정보가 누락되는 문제 수정"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06224",
                className: "uitext"
              }), " 창에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                children: "Reset Bind"
              }), " 버튼을 선택하면 바인드 변수가 초기화되지 않는 문제 수정"]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
          id: "oracle-oracle-pro",
          children: "Oracle, Oracle Pro"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_dbSqlAnalysis",
            className: "uitext"
          }), " 메뉴에서 화면 상단의 차트 표시 형식 변경"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
          id: "oracle-pro",
          children: "Oracle Pro"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_management",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_agentInstall",
            className: "uitext"
          }), " 메뉴에서 에이전트 설치 내용 수정"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "Oracle 계정이 아닌 다른 OS 계정에서 설치하는 방법에 대한 설명 보완"
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "ZIP 파일 다운로드 기능 삭제"
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
          id: "mysql",
          children: "MySQL"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " 사용자 언어가 영어일 때, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_management",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_agentInstall",
            className: "uitext"
          }), " 메뉴에서 설치 내용 중 오타 수정"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "log",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Log"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_log",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_logTail",
                className: "uitext"
              }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_logSearch",
                className: "uitext"
              }), " 메뉴에서 필터의 입력 창에 커서가 위치해 있을 때 ECS 키를 누르면 팝오버가 닫히도록 개선"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_log",
                className: "uitext"
              }), "의 하위 메뉴에서 컬럼 설정 UI 교체"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["하나로 된 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                    alt: "설정 아이콘",
                    src: (__webpack_require__(45430)/* ["default"] */ .A) + "",
                    width: "20",
                    height: "20"
                  }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "table_settings",
                    className: "uitext"
                  }), " 버튼을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "column_settings",
                    className: "uitext"
                  }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "ITM08349",
                    className: "uitext"
                  }), " 버튼으로 분리"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["전체 화면 모드일 때 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "column_settings",
                    className: "uitext"
                  }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "ITM08349",
                    className: "uitext"
                  }), " 버튼 제거"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_logSearch",
                className: "uitext"
              }), " 메뉴의 검색 필터 조건에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "category"
              }), "만 넣었을 경우 로그 건수를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "view_n_lines",
                className: "uitext"
              }), "로 표기"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_log",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_logTail",
                className: "uitext"
              }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_logSearch",
                className: "uitext"
              }), " 메뉴에서 로그 검색 태그 필터 입력 시 입력 창에 남아 있는 입력값을 제거하도록 수정"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_log",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_logSearch",
                className: "uitext"
              }), " 메뉴에서 로그 필터 정보를 표시하는 툴팁의 콘텐츠가 제대로 표시되지 않는 문제 수정"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_log",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_logSetting",
                className: "uitext"
              }), " 메뉴를 진입할 때 선택한 조직의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "id"
              }), "가 쿼리 파라미터에서 누락되는 문제 수정"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_logSetting",
                className: "uitext"
              }), " 메뉴의 로그 파서 설정에서 '문자:' 패턴의 prefix를 등록할 수 없는 문제 수정"]
            }), "\n"]
          }), "\n"]
        })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 3277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtYW5hbHlzaXM8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTMyLjAwMDAwMCwgLTE3MDQuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+CiAgICAgICAgICAgIDxnIGlkPSJkYXRhLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDE1NzkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtYW5hbHlzaXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg5Mi4wMDAwMDAsIDEyNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMi4wMDAwMDApIiBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjAsMCBMMjAsMjAgTDAsMjAgTDAsMCBMMjAsMCBaIE00Ljk3MTczODAyLDkuNDc4NjQwMDcgTDIsMTEuOTY5IEwyLDE4IEwxOCwxOCBMMTgsMTAuMjU2IEwxNS45NTcyOTA3LDEyLjAzNzQzMTEgQzE1Ljk3NTUzNDcsMTIuMTM0OTUyOCAxNS45ODgxMTY3LDEyLjIzNDQ2ODYgMTUuOTk0NjgyMywxMi4zMzU2MjQzIEwxNiwxMi41IEMxNiwxMy44ODA3MTE5IDE0Ljg4MDcxMTksMTUgMTMuNSwxNSBDMTIuMTE5Mjg4MSwxNSAxMSwxMy44ODA3MTE5IDExLDEyLjUgQzExLDEyLjI3Nzk4ODggMTEuMDI4OTM5MSwxMi4wNjI3MzY4IDExLjA4MzI1MDksMTEuODU3ODEwMyBMNy45NzA1OTcyMyw5LjUyMTkzNSBDNy41NTc5MTc1NSw5LjgyMjYwMjA1IDcuMDQ5Njc1NTMsMTAgNi41LDEwIEM1LjkyNDQzNzEzLDEwIDUuMzk0MzAyMzUsOS44MDU0OTkyNCA0Ljk3MTczODAyLDkuNDc4NjQwMDcgWiBNMTMuNSwxMS41IEMxMi45NDc3MTUzLDExLjUgMTIuNSwxMS45NDc3MTUzIDEyLjUsMTIuNSBDMTIuNSwxMy4wNTIyODQ3IDEyLjk0NzcxNTMsMTMuNSAxMy41LDEzLjUgQzE0LjA1MjI4NDcsMTMuNSAxNC41LDEzLjA1MjI4NDcgMTQuNSwxMi41IEMxNC41LDExLjk0NzcxNTMgMTQuMDUyMjg0NywxMS41IDEzLjUsMTEuNSBaIE0xOCwyIEwyLDIgTDIsMTAuMDEyIEw0LjExMTUyNTkxLDguMjQwNjIzMzIgQzQuMDU0NTYzNjksOC4wNTY3MTc3MSA0LjAxODI1NzEzLDcuODYzNzMxMzYgNC4wMDUzMTc2OCw3LjY2NDM3NTY5IEw0LDcuNSBDNCw2LjExOTI4ODEzIDUuMTE5Mjg4MTMsNSA2LjUsNSBDNy44ODA3MTE4Nyw1IDksNi4xMTkyODgxMyA5LDcuNSBDOSw3Ljc4NTUzNDk3IDguOTUyMTMxLDguMDU5ODg5NTQgOC44NjM5ODAyOSw4LjMxNTQ3NjQgTDExLjg4OTA1NDgsMTAuNTg4MTYwMSBDMTIuMzI0MTQ0MywxMC4yMjExNzA5IDEyLjg4NjI0MzYsMTAgMTMuNSwxMCBDMTQuMTY3ODA4NSwxMCAxNC43NzQ0NjA1LDEwLjI2MTg0MjIgMTUuMjIyODkwNCwxMC42ODg0NjExIEwxOCw4LjI2NiBMMTgsMiBaIE02LjUsNi41IEM1Ljk0NzcxNTI1LDYuNSA1LjUsNi45NDc3MTUyNSA1LjUsNy41IEM1LjUsOC4wNTIyODQ3NSA1Ljk0NzcxNTI1LDguNSA2LjUsOC41IEM3LjA1MjI4NDc1LDguNSA3LjUsOC4wNTIyODQ3NSA3LjUsNy41IEM3LjUsNi45NDc3MTUyNSA3LjA1MjI4NDc1LDYuNSA2LjUsNi41IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 45430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmb3VuZGF0aW9uPSJbb2JqZWN0IE9iamVjdF0iIGNsYXNzPSJJbm5lckljb25zdHlsZWRfX0ljb24tY2gtZnJvbnRfX3NjLTE5N2g1YmItMCBka0RyT3IiIGRlZmF1bHRvcGFjaXR5PSIxIiBob3ZlcmVkb3BhY2l0eT0iMSIgbWFyZ2ludG9wPSIwIiBtYXJnaW5yaWdodD0iMCIgbWFyZ2luYm90dG9tPSIwIiBtYXJnaW5sZWZ0PSIwIiB3aXRodGhlbWU9InRydWUiPjxwYXRoIGZpbGw9IiM3OTc5NzkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS44MzM1NCAxMC4wMDAxQzUuODMzNTQgNy42OTkzOSA3LjY5ODgxIDUuODMzNDIgMTAuMDAwMiA1LjgzMzQyQzEyLjMwMDkgNS44MzM0MiAxNC4xNjY5IDcuNjk5MzkgMTQuMTY2OSAxMC4wMDAxQzE0LjE2NjkgMTIuMzAwOCAxMi4zMDA5IDE0LjE2NjcgMTAuMDAwMiAxNC4xNjY3QzcuNjk4ODEgMTQuMTY2NyA1LjgzMzU0IDEyLjMwMDggNS44MzM1NCAxMC4wMDAxWk0xOC4zMzM1IDExLjI1MDFWOC43NTAwOEwxNi40NzUyIDguNDQwMDhDMTYuMzA5NCA3Ljc1NTA4IDE2LjAzOTQgNy4xMTE3NSAxNS42Nzk0IDYuNTI2NzVMMTYuNzc2IDQuOTkwOTFMMTUuMDA4NSAzLjIyMzQxTDEzLjQ3MjcgNC4zMjA5MUMxMi44ODc3IDMuOTYwOTEgMTIuMjQ1MiAzLjY5MDkxIDExLjU2MDIgMy41MjUwOEwxMS4yNTAyIDEuNjY2NzVIOC43NTAyTDguNDQwMiAzLjUyNTA4QzcuNzU1MiAzLjY5MDkxIDcuMTExODcgMy45NjA5MSA2LjUyNjg3IDQuMzIwOTFMNC45OTEwNCAzLjIyMzQxTDMuMjIzNTQgNC45OTA5MUw0LjMyMDIgNi41MjY3NUMzLjk2MTA0IDcuMTExNzUgMy42OTAyIDcuNzU1MDggMy41MjUyIDguNDQwMDhMMS42NjY4NyA4Ljc1MDA4VjExLjI1MDFMMy41MjUyIDExLjU2MDFDMy42OTAyIDEyLjI0NTEgMy45NjEwNCAxMi44ODg0IDQuMzIwMiAxMy40NzM0TDMuMjIzNTQgMTUuMDA5Mkw0Ljk5MTA0IDE2Ljc3NjdMNi41MjY4NyAxNS42NzkyQzcuMTExODcgMTYuMDM4NCA3Ljc1NTIgMTYuMzA5MiA4LjQ0MDIgMTYuNDc1MUw4Ljc1MDIgMTguMzMzNEgxMS4yNTAyTDExLjU2MDIgMTYuNDc1MUMxMi4yNDUyIDE2LjMwOTIgMTIuODg3NyAxNi4wMzg0IDEzLjQ3MjcgMTUuNjc5MkwxNS4wMDg1IDE2Ljc3NjdMMTYuNzc2IDE1LjAwOTJMMTUuNjc5NCAxMy40NzM0QzE2LjAzOTQgMTIuODg4NCAxNi4zMDk0IDEyLjI0NTEgMTYuNDc1MiAxMS41NjAxTDE4LjMzMzUgMTEuMjUwMVoiPjwvcGF0aD48L3N2Zz4=");

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