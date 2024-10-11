"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[29770],{

/***/ 49412:
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
  "value": "agent_status_summary",
  "id": "agent_status_summary",
  "level": 2
}, {
  "value": "Fields",
  "id": "agent_status_summary_filed",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    section: "section",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {InDoc, Xclude} = _components;
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "agent_status_summary",
        children: "agent_status_summary"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에이전트 상태와 관련한 지표를 10초 간격으로 수집한 카테고리입니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "agent_status_summary_filed",
        children: "Fields"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
        product: "server,kubernetes",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "필드명"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "단위"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "설명"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "비고"
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "inActTime"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "밀리초(ms)"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "에이전트가 비활성화된 상태로 유지된 시간"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "isActive"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "현재 에이전트의 활성 상태 여부"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "true"
                }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "false"
                })]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "isRestart"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "에이전트가 최근에 재시작되었는지 여부"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "true"
                }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "false"
                })]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "lastActTime"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "밀리초(ms)"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "마지막으로 에이전트가 활성화된 상태의 시각"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "0"
                }), ": 비활성화된 경우"]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "oid"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "프로젝트에 포함된 각 에이전트의 고유 식별자"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "startTime"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "밀리초(ms)"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "에이전트가 시작된 시점의 타임스탬프"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "-"
              })]
            })]
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        product: "server",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "필드명"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                style: {
                  textAlign: "center"
                },
                children: "단위"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "설명"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "비고"
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "inActTime"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "밀리초(ms)"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "에이전트가 비활성화된 상태로 유지된 시간"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "isActive"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "현재 에이전트의 활성 상태 여부"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "true"
                }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "false"
                })]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "isRebooted"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "서버가 최근에 재시작되었는지 여부"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "true"
                }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "false"
                })]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "lastActTime"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "밀리초(ms)"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "마지막으로 에이전트가 활성화된 상태의 시각"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "0"
                }), ": 비활성화된 경우"]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "oid"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "프로젝트에 포함된 각 에이전트의 고유 식별자"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "startTime"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "밀리초(ms)"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "에이전트가 시작된 시점의 타임스탬프"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "status"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "-"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "현재 에이전트의 상태"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "-"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "uptime"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                style: {
                  textAlign: "center"
                },
                children: "초(sec)"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "서버가 가동 중인 시간"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "-"
              })]
            })]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "status"
            }), " 필드의 값은 다음과 같이 구분합니다."]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "ok"
                }), ": 서버가 활성화되어 있는 정상 상태입니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "inactive"
                }), ": 서버가 비활성화된 상태입니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "warning"
                }), ": 서버에 경고(warning) 이벤트가 진행 중인 상태입니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "fatal"
                }), ": 서버에 위험(critical) 이벤트가 진행 중인 상태입니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "paused"
                }), ": 에이전트가 데이터 수집을 일시 중지한 상태입니다."]
              }), "\n"]
            }), "\n"]
          })]
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

/***/ 46494:
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
  "value": "XOS 관련 지표",
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
      children: "XOS 관련 지표"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "다음은 XOS 에이전트로부터 수집되는 지표들에 대한 설명입니다."
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
              children: ["cpu 사용율, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_user"
              }), " + ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_sys"
              }), " + ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_iowait"
              }), "의 합입니다."]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_user(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "pct"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "cpu가 사용자 코드를 실행하는데 소요한 시간입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_sys(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "pct"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "cpu가 kernel code를 수행한 시간입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_iowait(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "pct"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "cpu가 IO를 대기한 시간입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "cpu_idle(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "pct"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "cpu 프로세서 유휴 시간입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "disk_reads(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "block"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "디스크로부터 읽은 데이터의 양입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "disk_read_bytes(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "byte"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "디스크로부터 읽은 데이터의 양입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "disk_writes(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "block"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "디스크로 쓰여진 데이터의 양입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "disk_write_bytes(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "byte"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "디스크로 쓰여진 데이터의 양입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "pct"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "메모리 사용율입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_total(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "전체 메모리양입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_free(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "시스템에서 사용하고 있지 않은 메모리양입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_used(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "시스템에서 사용하고 있는 메모리양입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_buffcache(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "buff/cache로 사용중인 메모리양입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_swaptotal(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Swap 전체 사이즈, 물리메모리가 부족한 경우를 대비하여 설정합니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_swapfree(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Swap의 사용하지 않은 영역, Swap 영역은 디스크 공간에 확보되기 때문에 Swap을 사용하고 있다면 시스템 성능이 급격하게 떨어질 수 있습니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "mem_available(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MB"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "메모리 가용영역입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "net_recv_bytes(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "byte"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "네트워크로 수신된 데이터의 양입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "net_recv_packets(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "-"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "네트워크로 수신된 데이터 패킷의 수입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "net_send_bytes(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "byte"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "네트워크로 전송한 데이터의 양입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "net_send_packets(xos)"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "-"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "네트워크로 전송한 데이터 패킷의 수입니다."
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

/***/ 61623:
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
// EXTERNAL MODULE: ./docs/common-items/_agent-status-summary-metrics.mdx
var _agent_status_summary_metrics = __webpack_require__(49412);
;// CONCATENATED MODULE: ./docs/common-items/_metrics-database-mysql.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));






const toc = [..._agent_status_summary_metrics/* toc */.RM, {
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
      children: "데이터베이스 지표(메트릭스)는 데이터베이스의 작업량과 리소스 사용량을 포괄적으로 수집합니다. 와탭 모니터링 서비스는 지속적으로 지표를 수집하여 데이터베이스의 병목 현상을 확인하고, 성능 문제의 근본 원인을 식별하는 데 도움이 되는 데이터를 제공합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["지표에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://dev.mysql.com/doc/",
        children: "다음 문서"
      }), "를 참조하세요."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_agent_status_summary_metrics/* default */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_components.section, {
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
        children: ["다음은 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "db_mysql_counter"
        }), " 카테고리에 수집되는 태그값에 대한 안내입니다."]
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "태그명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "agentIp"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "에이전트 별 IP 주소입니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "dbIsMulti"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Multitenant 지원 여부입니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "dbName"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "데이터베이스 이름입니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "dbType"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "데이터베이스 종류입니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "dbVersion"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이용 중인 데이터베이스의 버전입니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "oname"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "에이전트 이름입니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "고유값"
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
        children: ["다음은 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "db_mysql_counter"
        }), " 카테고리에 수집되는 필드값에 대한 안내입니다."]
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
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Aborted_clients"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "클라이언트 연결이 비정상적으로 종료된 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Aborted_connects"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "클라이언트 연결 시도가 실패한 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Acl_cache_items_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ACL(액세스 제어 목록) 캐시 항목의 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Binlog_bytes_written"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "이진 로그에 기록 된 바이트 수입니다."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Binlog_cache_disk_use"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "디스크에 기록된 바이너리 로그 캐시 사용 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Binlog_cache_use"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "바이너리 로그 캐시가 사용된 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Binlog_commits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "-"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "이진 로그에 기록된 커밋 수입니다."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Binlog_stmt_cache_disk_use"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "디스크에 기록된 바이너리 로그 스테이트먼트 캐시 사용 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Binlog_stmt_cache_use"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "바이너리 로그 스테이트먼트 캐시가 사용된 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Bytes_received"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DB 서버가 수신한 데이터 총 바이트 수입니다. 이 값이 높다면 해당 서버는 쓰기 작업(insert 등) 위주의 서버임을 알 수 있습니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Bytes_sent"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["DB 서버가 전송한 데이터 총 바이트 수입니다. 이 값이 높다면 이 서버는 읽기 작업(select) 위주의 서버임을 알 수 있습니다. ", (0,jsx_runtime.jsx)(_components.code, {
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
                  children: "Com_admin_commands"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "실행된 관리 명령의 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_db"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER DATABASE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_event"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER EVENT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_function"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER FUNCTION 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_instance"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER INSTANCE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_procedure"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER PROCEDURE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_resource_group"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER RESOURCE GROUP 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_server"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER SERVER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_table"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER TABLE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_tablespace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER TABLESPACE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_user"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER USER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_alter_user_default_role"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ALTER USER DEFAULT ROLE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_analyze"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ANALYZE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_assign_to_keycache"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "KEYCACHE에 할당된 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_begin"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BEGIN 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_binlog"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "BINLOG 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_call_procedure"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CALL PROCEDURE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_change_db"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CHANGE DATABASE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_change_master"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CHANGE MASTER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_change_repl_filter"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CHANGE REPLICATION FILTER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_change_replication_source"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CHANGE REPLICATION SOURCE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_check"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CHECK 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_checksum"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CHECKSUM 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_clone"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CLONE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_commit"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "COMMIT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_db"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE DATABASE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_event"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE EVENT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_function"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE FUNCTION 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_index"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE INDEX 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_procedure"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE PROCEDURE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_resource_group"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE RESOURCE GROUP 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_role"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE ROLE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_server"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE SERVER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_spatial_reference_system"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE SPATIAL REFERENCE SYSTEM 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_table"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE TABLE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_trigger"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE TRIGGER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_udf"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE UDF 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_user"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE USER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_create_view"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CREATE VIEW 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_dealloc_sql"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DEALLOC SQL 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_delete"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["DELETE 명령 실행 횟수입니다. ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "handler_delete"
                }), "와는 다른 행이 테이블에서 삭제된 횟수를 계산합니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_delete_multi"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DELETE MULTI 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_do"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DO 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_db"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP DATABASE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_event"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP EVENT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_function"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP FUNCTION 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_index"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP INDEX 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_procedure"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP PROCEDURE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_resource_group"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP RESOURCE GROUP 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_role"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP ROLE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_server"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP SERVER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_spatial_reference_system"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP SPATIAL REFERENCE SYSTEM 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_table"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP TABLE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_trigger"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP TRIGGER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_user"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP USER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_drop_view"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DROP VIEW 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_empty_query"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "빈 쿼리가 실행된 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_execute_sql"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_explain_other"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "EXPLAIN OTHER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_flush"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "FLUSH 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_get_diagnostics"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GET DIAGNOSTICS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_grant"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GRANT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_grant_roles"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GRANT ROLES 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_group_replication_start"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GROUP REPLICATION START 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_group_replication_stop"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "GROUP REPLICATION STOP 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_ha_close"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HA CLOSE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_ha_open"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HA OPEN 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_ha_read"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HA READ 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_help"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "HELP 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_import"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "IMPORT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_insert"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "INSERT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_insert_select"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "INSERT SELECT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_install_component"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "INSTALL COMPONENT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_install_plugin"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "INSTALL PLUGIN 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_kill"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "KILL 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_load"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LOAD 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_lock_instance"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LOCK INSTANCE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_lock_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "LOCK TABLES 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_optimize"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "OPTIMIZE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_preload_keys"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PRELOAD KEYS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_prepare_sql"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL 명령 준비 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_purge"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PURGE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_purge_before_date"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "특정 날짜 이전의 데이터를 정리한 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_release_savepoint"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SAVEPOINT 릴리스 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_rename_table"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RENAME TABLE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_rename_user"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RENAME USER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_repair"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REPAIR 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_replace"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REPLACE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_replace_select"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REPLACE SELECT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_replica_start"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REPLICA START 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_replica_stop"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REPLICA STOP 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_reset"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RESET 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_resignal"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RESIGNAL 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_restart"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "RESTART 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_revoke"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REVOKE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_revoke_all"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REVOKE ALL 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_revoke_roles"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "REVOKE ROLES 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_rollback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ROLLBACK 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_rollback_to_savepoint"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "특정 SAVEPOINT로 ROLLBACK된 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_savepoint"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SAVEPOINT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_select"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SELECT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_set_option"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SET OPTION 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_set_password"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SET PASSWORD 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_set_resource_group"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SET RESOURCE GROUP 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_set_role"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SET ROLE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_binlog_events"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW BINLOG EVENTS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_binlogs"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW BINLOGS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_charsets"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CHARSETS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_collations"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW COLLATIONS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_db"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE DATABASE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_event"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE EVENT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_func"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE FUNCTION 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_proc"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE PROCEDURE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_table"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE TABLE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_trigger"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE TRIGGER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_create_user"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW CREATE USER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_databases"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW DATABASES 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_engine_logs"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW ENGINE LOGS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_engine_mutex"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW ENGINE MUTEX 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_engine_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW ENGINE STATUS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_errors"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW ERRORS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_events"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW EVENTS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_fields"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW FIELDS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_function_code"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW FUNCTION CODE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_function_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW FUNCTION STATUS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_grants"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW GRANTS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_keys"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW KEYS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_master_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW MASTER STATUS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_open_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW OPEN TABLES 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_plugins"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PLUGINS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_privileges"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PRIVILEGES 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_procedure_code"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PROCEDURE CODE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_procedure_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PROCEDURE STATUS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_processlist"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PROCESSLIST 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_profile"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PROFILE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_profiles"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW PROFILES 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_relaylog_events"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW RELAYLOG EVENTS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_replica_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW REPLICA STATUS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_replicas"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW REPLICAS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_slave_hosts"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW SLAVE HOSTS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_slave_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW SLAVE STATUS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW STATUS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_storage_engines"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW STORAGE ENGINES 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_table_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW TABLE STATUS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW TABLES 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_triggers"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW TRIGGERS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_variables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW VARIABLES 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_show_warnings"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHOW WARNINGS 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_shutdown"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SHUTDOWN 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_signal"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SIGNAL 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_slave_start"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SLAVE START 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_slave_stop"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SLAVE STOP 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_close"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT CLOSE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_execute"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT EXECUTE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_fetch"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT FETCH 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_prepare"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT PREPARE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_reprepare"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT REPREPARE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_reset"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT RESET 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_stmt_send_long_data"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "STMT SEND LONG DATA 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_truncate"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TRUNCATE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_uninstall_component"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UNINSTALL COMPONENT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_uninstall_plugin"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UNINSTALL PLUGIN 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_unlock_instance"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UNLOCK INSTANCE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_unlock_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UNLOCK TABLES 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_update"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UPDATE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_update_multi"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UPDATE MULTI 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_xa_commit"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "XA COMMIT 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_xa_end"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "XA END 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_xa_prepare"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "XA PREPARE 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_xa_recover"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "XA RECOVER 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_xa_rollback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "XA ROLLBACK 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_xa_start"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "XA START 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connection_errors_accept"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "클라이언트 연결 수락 오류 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connection_errors_internal"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "내부 연결 오류 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connection_errors_max_connections"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "max_connections"
                }), "의 제한으로 거절된 연결 오류 횟수입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connection_errors_peer_address"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "피어 주소 연결 오류 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connection_errors_select"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SELECT 연결 오류 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connection_errors_tcpwrap"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "TCP WRAP 연결 오류 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Connections"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "총 클라이언트 연결 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Created_tmp_disk_tables"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["명령문을 실행하는 동안 서버에서 디스크에 생성한 임시 테이블 수입니다. 디스크 사용은 성능을 저하시킬 수 있으므로 이 값이 커지면 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "tmp_table_size"
                }), " 또는 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "max_heap_table_size"
                }), " 값 조정을 검토하세요."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Created_tmp_files"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "mysqld가 생성한 임시 파일 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Created_tmp_tables"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["명령문을 실행하는 동안 서버에 의해 생성된 내부 임시 테이블의 수입니다. 일반적으로 쿼리에서 UNION ALL을 사용하거나 ORDER BY, GROUP BY, DISTINCT를 사용하는 몇 가지 경우 임시 테이블이 사용될 수 있습니다. 총 내부 임시테이블 수(", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Created_tmp_disk_tables"
                }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Created_tmp_tables"
                }), ") 대비 디스크상의 임시 테이블 수(", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Created_tmp_disk_tables"
                }), ")가 높지 않은 것이 좋습니다. (10%미만)"]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Delayed_errors"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "지연된 삽입 중 오류 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Delayed_insert_threads"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "지연된 삽입을 처리하는 스레드 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Delayed_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "지연된 삽입 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Deprecated_use_i_s_processlist_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "사용 중지된 INFORMATION_SCHEMA PROCESSLIST의 사용 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Deprecated_use_i_s_processlist_last_timestamp"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "마지막으로 사용된 사용 중지된 INFORMATION_SCHEMA PROCESSLIST 타임스탬프입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Error_log_buffered_bytes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "버퍼된 오류 로그의 바이트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Error_log_buffered_events"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "버퍼된 오류 로그 이벤트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Error_log_expired_events"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "만료된 오류 로그 이벤트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Error_log_latest_write"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "마지막 오류 로그 기록 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Flush_commands"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "FLUSH 명령 실행 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Global_connection_memory"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "전역 연결 메모리 사용량입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_commit"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "COMMIT 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_delete"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DELETE 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_discover"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "DISCOVER 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_external_lock"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "외부 잠금 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_mrr_init"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MRR(멀티 레인지 리드) 초기화 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_prepare"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "PREPARE 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_first"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "첫 번째 레코드 읽기 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_key"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "키 읽기 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_last"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "마지막 레코드 읽기 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_next"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "다음 레코드 읽기 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_prev"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "이전 레코드 읽기 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_rnd"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "임의 레코드 읽기 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_read_rnd_next"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "임의 다음 레코드 읽기 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_rollback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "ROLLBACK 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_savepoint"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SAVEPOINT 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_savepoint_rollback"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SAVEPOINT ROLLBACK 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_update"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "UPDATE 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Handler_write"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "WRITE 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_bytes_data"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 버퍼 풀에서 데이터가 포함된 바이트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_bytes_dirty"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 버퍼 풀에서 변경된 바이트 수(더티 데이터 수)입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_pages_data"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 버퍼 풀에서 사용 중인 버퍼풀 페이지 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_pages_dirty"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 버퍼 풀에서 변경된 페이지 수(더티 페이지 수)입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_pages_flushed"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 버퍼 풀에서 플러시된 페이지 수입니다. 버퍼풀의 더티 데이터를 디스크에 쓰는 과정으로 과도한 flush는 디스크에 부담을 줄 수 있으므로 디스크의 성능과 함께 모니터링해야 합니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_pages_free"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 버퍼 풀에서 사용 가능한 페이지 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_pages_misc"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 버퍼 풀에서 관리용 페이지 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_pages_total"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 버퍼 풀의 총 페이지 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_read_ahead"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 버퍼 풀에서 읽기 예측이 발생한 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_read_ahead_evicted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "읽기 예측된 페이지가 버퍼 풀에서 제거된 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_read_ahead_rnd"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "무작위 읽기 예측이 발생한 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_read_requests"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["InnoDB 버퍼 풀에서 논리적 읽기 요청 수입니다. ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Inodb buffer pool hit ratio"
                }), " 계산을 다음과 같이 할 수 있으며, 90% 이상을 권장합니다. 만약 Hit Ratio가 낮다면 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_size"
                }), " 증설을 검토하세요.", (0,jsx_runtime.jsx)("br", {}), "산출 방식: Buffer Hit Ratio = (1 - (", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_reads"
                }), " / ", (0,jsx_runtime.jsx)(_components.code, {
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
                children: "InnoDB 버퍼 풀에서 물리적 디스크로부터 읽기 작업이 발생한 횟수입니다. Innodb 버퍼풀에 데이터가 없어서 디스크로부터 직접 읽어야 하는 논리적 읽기 요청 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_resize_status_code"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 버퍼 풀 크기 조정 상태 코드입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_resize_status_progress"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 버퍼 풀 크기 조정 진행률입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_wait_free"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 버퍼 풀이 가득 찼을 때 대기한 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_buffer_pool_write_requests"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 버퍼 풀에서 기록 요청 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_fsyncs"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "데이터 파일 fsync 호출 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_pending_fsyncs"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "대기 중인 fsync 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_pending_reads"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "대기 중인 읽기 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_pending_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "대기 중인 쓰기 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_read"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 읽은 총 데이터 바이트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_reads"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 읽기 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 쓰기 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_data_written"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 기록된 총 데이터 바이트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_dblwr_pages_written"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 이중 쓰기(double write) 버퍼에서 기록된 페이지 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_dblwr_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 이중 쓰기(double write) 버퍼에서 기록 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_log_waits"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["로그 버퍼가 작아서 플러시 될 때까지 기다린 횟수입니다. Redo log 경합 비율은 (", (0,jsx_runtime.jsx)(_components.code, {
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
                  children: "Innodb_log_write_requests"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 로그에 대한 기록 요청 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_log_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redo 로그 파일에 대한 물리적 쓰기 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_num_open_files"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 열린 파일 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_os_log_fsyncs"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "운영 체제 로그 파일 fsync 호출 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_os_log_pending_fsyncs"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "대기 중인 운영 체제 로그 파일 fsync 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_os_log_pending_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "대기 중인 운영 체제 로그 파일 기록 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_os_log_written"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "운영 체제 로그 파일에 기록된 바이트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_page_size"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 페이지 크기입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_pages_created"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 생성된 페이지 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_pages_read"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 읽은 페이지 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_pages_written"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 기록된 페이지 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_capacity_resized"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redo 로그 용량이 조정된 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_checkpoint_lsn"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redo 로그 체크포인트 LSN입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_current_lsn"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redo 로그의 현재 LSN입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_flushed_to_disk_lsn"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redo 로그가 디스크에 기록된 LSN입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_logical_size"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redo 로그의 논리적 크기입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_physical_size"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redo 로그의 물리적 크기입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_redo_log_uuid"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB Redo 로그의 UUID입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_row_lock_current_waits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 행 잠금(row lock) 현재 대기 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_row_lock_time"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 행 잠금(row lock) 획득에 소비된 총 시간(milliseconds)입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_row_lock_time_avg"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 행 잠금(row lock) 평균 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_row_lock_time_max"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 행 잠금(row lock) 최대 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_row_lock_waits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 행 잠금(row lock) 대기 횟수입니다. lock을 획득한 수가 아닌 lock을 얻기 위해 대기하는 횟수로, 이 지표가 평소보다 급증한다면 쿼리 대기가 발생(락 경합)하는 것으로 쿼리 튜닝이 필요합니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_deleted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 삭제된 행 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_inserted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 삽입된 행 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_read"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 읽은 행 수(Select에서 처리된 행 수)입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_updated"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 업데이트된 행 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_writes"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["InnoDB에서 기록된 행 수(Write에 처리된 행 수)입니다.", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_inserted"
                }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_updated"
                }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_rows_deleted"
                }), " 계산식과 같습니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_sampled_pages_read"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 샘플링된 페이지 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_sampled_pages_skipped"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 샘플링이 스킵된 페이지 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_system_rows_deleted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 시스템에서 삭제된 행 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_system_rows_inserted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 시스템에서 삽입된 행 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_system_rows_read"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 시스템에서 읽은 행 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_system_rows_updated"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 시스템에서 업데이트된 행 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_truncated_status_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 잘린 상태 기록 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_undo_tablespaces_active"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 활성화된 언두 테이블스페이스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_undo_tablespaces_explicit"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 명시적으로 생성된 언두 테이블스페이스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_undo_tablespaces_implicit"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB에서 암시적으로 생성된 언두 테이블스페이스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Innodb_undo_tablespaces_total"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 언두 테이블스페이스의 총 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_blocks_not_flushed"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "플러시되지 않은 키 블록 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_blocks_unused"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "사용되지 않은 키 블록 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_blocks_used"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "사용된 키 블록 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_read_requests"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "키 읽기 요청 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_reads"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "실제로 디스크에서 읽은 키 블록 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_write_requests"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "키 쓰기 요청 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Key_writes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "실제로 디스크에 기록된 키 블록 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Locked_connects"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "잠긴 연결 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Max_execution_time_exceeded"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "최대 실행 시간을 초과한 쿼리 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Max_execution_time_set"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "최대 실행 시간이 설정된 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Max_execution_time_set_failed"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "최대 실행 시간 설정이 실패한 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Max_used_connections"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "startup 이후 사용된 최대 연결 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_aborted_clients"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 중단된 클라이언트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_bytes_received"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 수신된 바이트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_bytes_received_compressed_payload"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 압축된 페이로드로 수신된 바이트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_bytes_received_uncompressed_frame"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 압축되지 않은 프레임으로 수신된 바이트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_bytes_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 전송된 바이트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_bytes_sent_compressed_payload"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 압축된 페이로드로 전송된 바이트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_bytes_sent_uncompressed_frame"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 압축되지 않은 프레임으로 전송된 바이트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_connection_accept_errors"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 연결 수락 오류 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_connection_errors"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 발생한 연결 오류 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_connections_accepted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 수락된 연결 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_connections_closed"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 닫힌 연결 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_connections_rejected"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 거부된 연결 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_create_view"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 CREATE VIEW 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_delete"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 DELETE 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_drop_view"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 DROP VIEW 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_find"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 FIND 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_insert"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 INSERT 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_modify_view"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 MODIFY VIEW 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_crud_update"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 UPDATE 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_cursor_close"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 커서 닫기 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_cursor_fetch"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 커서 가져오기 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_cursor_open"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 커서 열기 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_errors_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 클라이언트로 전송된 오류 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_errors_unknown_message_type"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 알 수 없는 메시지 유형 오류 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_expect_close"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 EXPECT CLOSE 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_expect_open"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 EXPECT OPEN 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_init_error"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 초기화 오류 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_messages_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 클라이언트로 전송된 메시지 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_notice_global_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 전송된 글로벌 알림 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_notice_other_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 전송된 기타 알림 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_notice_warning_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 전송된 경고 알림 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_notified_by_group_replication"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 그룹 복제로 알림된 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_port"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 사용된 포트입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_prep_deallocate"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 준비된 SQL DEALLOCATE 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_prep_execute"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 준비된 SQL EXECUTE 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_prep_prepare"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 준비된 SQL PREPARE 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_rows_sent"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 클라이언트로 전송된 행 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_sessions"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 현재 활성 세션 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_sessions_accepted"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 수락된 세션 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_sessions_closed"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 닫힌 세션 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_sessions_fatal_error"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 치명적 오류로 인해 닫힌 세션 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_sessions_killed"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 강제로 종료된 세션 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_sessions_rejected"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 거부된 세션 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_ssl_accepts"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 SSL 연결 수락 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_ssl_ctx_verify_depth"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 SSL 검증 깊이입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_ssl_ctx_verify_mode"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 SSL 검증 모드입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_ssl_finished_accepts"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 완료된 SSL 연결 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_create_collection"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 CREATE COLLECTION 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_create_collection_index"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 CREATE COLLECTION INDEX 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_disable_notices"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 DISABLE NOTICES 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_drop_collection"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 DROP COLLECTION 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_drop_collection_index"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 DROP COLLECTION INDEX 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_enable_notices"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 ENABLE NOTICES 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_ensure_collection"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 ENSURE COLLECTION 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_execute_mysqlx"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 EXECUTE MYSQLX 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_execute_sql"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 EXECUTE SQL 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_execute_xplugin"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 EXECUTE XPLUGIN 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_get_collection_options"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 GET COLLECTION OPTIONS 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_kill_client"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 KILL CLIENT 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_list_clients"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 LIST CLIENTS 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_list_notices"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 LIST NOTICES 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_list_objects"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 LIST OBJECTS 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_modify_collection_options"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 MODIFY COLLECTION OPTIONS 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_stmt_ping"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 실행된 PING 명령 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_worker_threads"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 활성화된 워커 스레드 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Mysqlx_worker_threads_active"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL X Protocol에서 활성 상태인 워커 스레드 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Not_flushed_delayed_rows"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "플러시되지 않은 지연된 행 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ongoing_anonymous_transaction_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "진행 중인 익명 트랜잭션 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Open_files"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "열린 파일 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Open_streams"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "열린 스트림 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Open_table_definitions"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "열린 테이블 정의 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Open_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "열린 테이블 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Opened_files"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "열린 파일 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Opened_table_definitions"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "열린 테이블 정의 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Opened_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "열린 테이블 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_accounts_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 계정 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_cond_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 조건 클래스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_cond_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 조건 인스턴스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_digest_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 다이제스트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_file_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 파일 클래스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_file_handles_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 파일 핸들 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_file_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 파일 인스턴스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_hosts_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 호스트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_index_stat_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 인덱스 통계 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_locker_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 락커 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_memory_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 메모리 클래스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_metadata_lock_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 메타데이터 잠금 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_mutex_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 뮤텍스 클래스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_mutex_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 뮤텍스 인스턴스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_nested_statement_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 중첩된 문장 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_prepared_statements_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 준비된 문장 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_program_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 프로그램 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_rwlock_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 읽기/쓰기 잠금 클래스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_rwlock_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 읽기/쓰기 잠금 인스턴스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_session_connect_attrs_longest_seen"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance Schema에서 본 세션 연결 속성의 최대 길이입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_session_connect_attrs_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 세션 연결 속성 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_socket_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 소켓 클래스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_socket_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 소켓 인스턴스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_stage_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 스테이지 클래스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_statement_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 문장 클래스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_table_handles_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 테이블 핸들 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_table_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 테이블 인스턴스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_table_lock_stat_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 테이블 잠금 통계 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_thread_classes_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 스레드 클래스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_thread_instances_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 스레드 인스턴스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Performance_schema_users_lost"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "손실된 Performance Schema 사용자 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Prepared_stmt_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "준비된 명령문 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Queries"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "com_ping"
                }), " 및 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "com_statistics"
                }), "를 제외한 서버에서 실행한 명령문 수입니다. Stored program 내에서 실행된 쿼리도 계산한다는 점에서 ", (0,jsx_runtime.jsx)(_components.code, {
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
                children: "실행된 쿼리 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Replica_open_temp_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "열려 있는 임시 테이블 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Secondary_engine_execution_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "보조 엔진에서 실행된 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Select_full_join"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "하나 이상의 테이블을 조인할 경우 인덱스를 사용하지 않고 드리븐(driven) 테이블을 풀 스캔(full scan)한 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Select_full_range_join"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "전체 범위 조인 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Select_range"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "범위 선택 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Select_range_check"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "범위 확인 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Select_scan"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "드라이빙(driving) 테이블을 풀 스캔(full scan)한 횟수입니다. 이 경우 실행 계획의 type 컬럼에 ALL이 표시됩니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Slave_open_temp_tables"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "열려 있는 임시 테이블 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Slaves_running"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "실행되는 슬레이브 SQL 스레드 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Slow_launch_threads"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "느리게 시작된 스레드 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Slow_queries"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["DB 파라미터 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "long_query_time"
                }), "(second) 옵션에 설정한 시간 이상으로 실행된 쿼리 수입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Sort_merge_passes"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "정렬 병합 작업 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Sort_range"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "범위 정렬 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Sort_rows"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "정렬된 행 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Sort_scan"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "스캔 정렬 작업 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_accept_renegotiates"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 연결 재협상 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_accepts"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 연결 수락 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_callback_cache_hits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 콜백 캐시 히트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_client_connects"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 클라이언트 연결 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_connect_renegotiates"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 연결 재협상 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_ctx_verify_depth"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 컨텍스트 검증 깊이입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_ctx_verify_mode"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 컨텍스트 검증 모드입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_default_timeout"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 기본 시간 초과입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_finished_accepts"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "완료된 SSL 연결 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_finished_connects"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "완료된 SSL 클라이언트 연결 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_session_cache_hits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 세션 캐시 히트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_session_cache_misses"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 세션 캐시 미스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_session_cache_overflows"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 세션 캐시 오버플로우 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_session_cache_size"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 세션 캐시 크기입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_session_cache_timeout"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 세션 캐시 시간 초과입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_session_cache_timeouts"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 세션 캐시 시간 초과 횟수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_sessions_reused"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "재사용된 SSL 세션 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_used_session_cache_entries"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "사용된 SSL 세션 캐시 항목 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_verify_depth"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 검증 깊이입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Ssl_verify_mode"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SSL 검증 모드입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Table_locks_immediate"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "즉시 획득된 테이블 잠금 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Table_locks_waited"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "대기 후 획득된 테이블 잠금 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Table_open_cache_hits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "테이블 열기 캐시 히트 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Table_open_cache_misses"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "테이블 열기 캐시 미스 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Table_open_cache_overflows"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "테이블 열기 캐시 오버플로우 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Tc_log_max_pages_used"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "사용된 최대 Tc 로그 페이지 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Tc_log_page_size"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Tc 로그 페이지 크기입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Tc_log_page_waits"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Tc 로그 페이지 대기 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Threads_cached"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "캐시된 스레드 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySQL Resource"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Threads_connected"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "연결된 스레드 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Threads_created"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "생성된 스레드 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Threads_running"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "실행 중인 스레드 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Uptime"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "서버 가동 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Uptime_since_flush_status"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "마지막 상태 플러시 이후 경과된 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "Writes"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Write에 사용한 명령 횟수입니다. ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_insert"
                }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_update"
                }), " + ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Com_delete"
                }), " 계산식과 같습니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Throughput"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "active_sessions"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["활성 세션 수입니다. ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "Threads_running"
                }), " 지표와 같은 값입니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "connect_error"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "연결 오류 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "fatal_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "치명적 오류 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "lock_wait_sessions"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["행 잠금(row lock)을 획득하기 위해 대기 중인 세션 수입니다. ", (0,jsx_runtime.jsx)(_components.code, {
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
                  children: "long_running_sessions"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "장시간 실행 중인 세션 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "max_connections"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["최대 동시 클라이언트 연결 수입니다. Connection 수가 부족할 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Too ManyConnection Error"
                }), "가 발생할 수 있습니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "node_state"
                })
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Replication 관계로 구성된 데이터베이스이며 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "1"
                }), ": Master, ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "2"
                }), ": Slave 를 의미합니다."]
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "replication_broken"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "복제 실패 여부입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "replication_delay"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "복제 지연 시간입니다. Replication 구조일 경우 replication 데이터베이스에 반영되는 지연시간으로, Slave DB에서 측정되는 지표입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "seconds_behind_master"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "마스터와의 지연 시간(초)입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Connection"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "total_runtime"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "모든 쿼리의 총 실행 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Performance"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/csv/data"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CSV 데이터 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/csv/metadata"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "CSV 메타데이터 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/innodb/innodb_data_file"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 데이터 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/innodb/innodb_dblwr_file"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 이중 쓰기 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/innodb/innodb_log_file"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 로그 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/innodb/innodb_temp_file"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "InnoDB 임시 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/mysys/charset"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySys 문자 세트 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/mysys/cnf"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "MySys 구성 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/ERRMSG"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL 오류 메시지 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/binlog"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL 바이너리 로그 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/binlog_index"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL 바이너리 로그 인덱스 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/casetest"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL 케이스 테스트 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/misc"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL 기타 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/pid"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL PID 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/relaylog"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL 릴레이 로그 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/relaylog_index"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL 릴레이 로그 인덱스 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/file/sql/slow_log"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL 느린 로그 파일 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/io/table/sql/handler"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL 핸들러 테이블 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "wait/lock/table/sql/handler"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "SQL 핸들러 테이블 잠금 대기 시간입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "waiting_for_table_flush_sessions"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "테이블 플러시 대기 세션 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "I/O"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "warning_count"
                })
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "경고 수입니다."
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "Info"
              })]
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


// EXTERNAL MODULE: ./docs/common-items/_db-xos-metrics.mdx
var _db_xos_metrics = __webpack_require__(46494);
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
	],
	isTranslationMissing: false
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
      "inline": true,
      "label": "MySQL",
      "permalink": "/whatap-docs/tags/my-sql"
    },
    {
      "inline": true,
      "label": "메트릭스",
      "permalink": "/whatap-docs/tags/메트릭스"
    },
    {
      "inline": true,
      "label": "데이터베이스",
      "permalink": "/whatap-docs/tags/데이터베이스"
    },
    {
      "inline": true,
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
    ],
    "isTranslationMissing": false
  },
  "sidebar": "mysqlSidebar",
  "previous": {
    "title": "메트릭스",
    "permalink": "/whatap-docs/mysql/metrics-intro"
  },
  "next": {
    "title": "메트릭스 차트",
    "permalink": "/whatap-docs/mysql/metrics-chart-v2"
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