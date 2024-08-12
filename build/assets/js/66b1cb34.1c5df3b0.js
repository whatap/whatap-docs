"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[99222],{

/***/ 84721:
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
  "value": "멀티 트랜잭션 ID 확인하기",
  "id": "멀티-트랜잭션-id-확인하기",
  "level": 2
}, {
  "value": "멀티 트랜잭션 추적 기능 이용하기",
  "id": "멀티-트랜잭션-추적-기능-이용하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, InDoc, LinkImage} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!LinkImage) _missingMdxReference("LinkImage", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "멀티 트랜잭션"
      }), "은 다른 에이전트나 프로젝트와 연관된 트랜잭션을 의미합니다. 와탭 프로젝트에 등록된 애플리케이션 서비스 간의 호출을 추적하는 것이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "멀티 트랜잭션 추적"
      }), "입니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "java",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "info",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Java 에이전트는 세 개의 HTTP 헤더 키값(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "x-wtap-po"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "x-wtap-mst"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "x-wtap-sp1"
          }), ")으로 멀티 트랜잭션을 추적합니다. 게이트웨이를 통과하는 HTTP 트랜잭션이 연계 추적이 안 된다면 HTTP 헤더 조건을 확인하세요."]
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "멀티 트랜잭션 활성화"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["멀티 트랜잭션을 추적하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "management",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "agent_configuration",
          className: "uitext"
        }), " 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "mtrace_enabled"
        }), " 옵션을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "true"
        }), "로 설정하세요. 에이전트 설정에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "set-agent#set-agent-service",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "멀티-트랜잭션-id-확인하기",
        children: "멀티 트랜잭션 ID 확인하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "multi_server_transaction_trace",
          className: "uitext"
        }), " 메뉴를 이용하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "MTID"
        }), "(Multi Transaction ID)가 필요합니다. 다음 과정을 통해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
          children: "MTID"
        }), " 값을 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "analysis",
              className: "uitext"
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "AA005",
              className: "uitext"
            }), " 메뉴에서 차트 영역을 드래그하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["드래그한 차트 영역의 트랜잭션 정보가 다음과 같이 하단 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "trace_list",
              className: "uitext"
            }), " 목록에 나타납니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "tx-trace-table.png",
            desc: "mtrace_M"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "아이콘",
              src: (__webpack_require__(59990)/* ["default"] */ .A) + "",
              width: "20",
              height: "20"
            }), " 아이콘이 표시된 트레이스를 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL06527",
              className: "uitext"
            }), " 창이 나타납니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL06125",
              className: "uitext"
            }), " 탭에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL06107",
              className: "uitext"
            }), " 값을 확인할 수 있습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "tx-trace-dt-up.png",
            desc: "레코드 요약"
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["트랜잭션에서 외부 호출을 하는 경우에도 동일한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06107",
                className: "uitext"
              }), "가 생성됩니다. 서비스별로 프로젝트가 분리되어 있더라도 처음 발급한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06107",
                className: "uitext"
              }), "를 통해 애플리케이션 간의 모든 트랜잭션을 확인할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06527",
                className: "uitext"
              }), " 창을 활용한 트랜잭션 트레이스 상세 분석에 관한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "trs-profile#transaction-info",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06527",
                className: "uitext"
              }), " 창에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06107",
                className: "uitext"
              }), "를 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06377",
                className: "uitext"
              }), " 탭으로 이동합니다. 시스템 내 또는 시스템 간에 발생하는 다양한 호출 관계를 한 눈에 파악하고 어느 부분에서 문제가 발생했는지 식별하여 개선할 수 있도록 트랜잭션과 트레이스 정보를 제공합니다."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "멀티-트랜잭션-추적-기능-이용하기",
        children: "멀티 트랜잭션 추적 기능 이용하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "analysis",
              className: "uitext"
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "multi_server_transaction_trace",
              className: "uitext"
            }), " 메뉴로 이동하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL06527",
              className: "uitext"
            }), " 창에서 확인한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
              children: "MTID"
            }), " 값을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "search_mtid_or_custid",
              className: "uitext"
            }), " 항목에 입력하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "trace-mtx-mtid.png",
            desc: "MTID"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "조회할 날짜와 프로젝트를 선택하세요."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["화면 아래에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["오른쪽 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN07120",
          className: "uitext"
        }), " 탭에 각 트랜잭션의 호출 관계를 파악할 수 있는 다이어그램이 표시됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "trace-mtx-mtid-chart.png",
        desc: "멀티 트랜잭션 추적"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN07120"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN07120",
          className: "uitext"
        }), "는 각 트랜잭션의 호출 관계를 빠르고 명확하게 사용자에게 제공합니다. 동일한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06107",
          className: "uitext"
        }), "를 갖는 트랜잭션 서비스들의 개별 수행 시간을 확인할 수 있습니다. 트랜잭션 노드의 배경색으로 표현되어 있는 소요 시간(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LinkImage, {
          img: "number-01.png",
          desc: "number 1"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "time_bar",
          className: "uitext"
        }), ")를 통해 트랜잭션 간 호출 관계를 확인할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN07120",
          className: "uitext"
        }), "에서는 마우스를 이용해 원하는 위치로 이동하거나 스크롤을 통해서 확대, 축소할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Chart",
          src: (__webpack_require__(81705)/* ["default"] */ .A) + "",
          width: "800",
          height: "623"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["트랜잭션 노드를 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06527",
          className: "uitext"
        }), " 창이 추가로 나타납니다. 트랜잭션 트레이스를 통해 해당 트랜잭션의 상세 내역을 확인할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06527",
          className: "uitext"
        }), " 창을 활용한 트랜잭션 트레이스 상세 분석에 관한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "trs-profile#transaction-info",
          children: "다음 문서"
        }), "를 참조하세요"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "A"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "small",
              className: "uitext"
            }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "A"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "big",
              className: "uitext"
            }), ": 노드에 표시된 폰트 크기를 조절할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "time_bar",
              className: "uitext"
            }), ": 각 노드에 소요 시간(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "time_bar",
              className: "uitext"
            }), ")을 표시하거나 숨길 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "application_name",
              className: "uitext"
            }), ": 각 노드에 에이전트 이름(oname)을 표시하거나 숨길 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project",
              className: "uitext"
            }), ": 각 노드에 프로젝트 이름을 표시하거나 숨길 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "database",
              className: "uitext"
            }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "apply_external_remote",
              className: "uitext"
            }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "apply_internal_remote",
              className: "uitext"
            }), ": 해당 트랜잭션에서 발생한 다른 데이터베이스 커넥션 요청이나 HTTP Call의 정보 또한 차트의 노드로 확인할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "-1",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN07121"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN07121",
          className: "uitext"
        }), " 탭에서는 멀티 트랜잭션 내에 포함된 각 트랜잭션 별 정보를 테이블 형식으로 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "trace-mtx-table.png",
        desc: "테이블"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["각 트랜잭션 항목을 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN07120",
          className: "uitext"
        }), " 탭의 노드 선택과 마찬가지로 선택한 트랜잭션에 대한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06527",
          className: "uitext"
        }), " 창이 나타납니다. 트랜잭션 트레이스를 통해 해당 트랜잭션의 상세 내역을 확인할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06527",
          className: "uitext"
        }), " 창을 활용한 트랜잭션 트레이스 상세 분석에 관한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "trs-profile#transaction-info",
          children: "다음 문서"
        }), "를 참조하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "컬럼 아이콘",
          src: (__webpack_require__(76038)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN06441",
          className: "uitext"
        }), ": 테이블 내 컬럼을 편집할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "-2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN06296"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN06296",
          className: "uitext"
        }), " 탭에서는 각 트랜잭션과 그에 속해 있는 트레이스의 세부 정보를 확인할 수 있습니다. 전체 트랜잭션 소요 시간 내의 각 하위 트랜잭션이나 트레이스의 시작 및 소요 시간을 시각화해 트랜잭션 호출 관계를 트리 형식으로 제공합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "trace-mtx-tree.png",
        desc: "Tree"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "한 줄 보기 아이콘",
              src: (__webpack_require__(30419)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN06368",
              className: "uitext"
            }), ": 각 구간 별 수행 정보에 표시된 텍스트를 한 줄로 표시해 트리 형식을 간격하게 정리할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "여러 줄 보기 아이콘",
              src: (__webpack_require__(83214)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN06369",
              className: "uitext"
            }), ": 각 구간 별 수행 정보에 표시된 텍스트를 줄바꿈해 모두 표시합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN06327",
              className: "uitext"
            }), ": 가장 긴 경로로 이동할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "차트 아이콘",
              src: (__webpack_require__(99136)/* ["default"] */ .A) + "",
              width: "48",
              height: "48"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN06743",
              className: "uitext"
            }), ": 경과 시간을 막대 형식의 차트로 표시합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "시간 아이콘",
              src: (__webpack_require__(70913)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN06744",
              className: "uitext"
            }), ": 각 구간별 타임 스탬프, 갭, 경과 시간을 텍스트 형식으로 표시합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["8초 이상: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "etrs",
                  children: "초과 지연"
                }), " 상태로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "etrs",
                  children: "빨간색"
                }), "으로 표현합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["3초 이상 8초 미만: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "ov5ud10",
                  children: "지연"
                }), " 상태로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "ov5ud10",
                  children: "주황색"
                }), "으로 표현합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["3초 미만: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "woer",
                  children: "정상"
                }), " 상태로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                  class: "woer",
                  children: "파란색"
                }), "으로 표현합니다."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "시작 및 소요 시간의 경우 트랜잭션 호출 환경에 따라 발생하는 시차를 상위 트랜잭션 내 트레이스와 매핑을 통해 보정하여 표현하기 때문에 실제 수집된 시간 데이터와 차이가 발생할 수 있습니다."
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "감추기 아이콘",
              src: (__webpack_require__(37225)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN06745",
              className: "uitext"
            }), ": 시간 정보를 숨깁니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["해당 트레이스의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "통계 아이콘",
            src: (__webpack_require__(28450)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 버튼 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "팝업 아이콘",
            src: (__webpack_require__(38254)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 버튼을 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "remote_http_call_statistics",
            className: "uitext"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "activestack",
            className: "uitext"
          }), " 등의 요약 창을 확인할 수 있습니다."]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "tip",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "SQL 변수와 HTTP 쿼리를 조회하려면 다음 옵션을 에이전트 설정에 추가하세요."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["SQL 파라미터 정보 기록과 관련한 에이전트 설정은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "agent-dbsql#profile-sql-param",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["HTTP 파라미터 정보 기록과 관련한 에이전트 설정은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "agent-transaction#profile_http_parameter",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='whatap.conf'",
            children: "# SQL 파라미터 조회 옵션: 옵션이 적용되면 SQL 파라미터를 암호화하여 수집합니다.\r\nprofile_sql_param_enabled=true \r\n\r\n# HTTP 파라미터 조회 옵션: 옵션이 적용되면 HTTP 쿼리 파라미터를 암호화하여 수집합니다.\r\nprofile_http_parameter_enabled=true \n"
          })
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

/***/ 54075:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _common_items_analysis_trace_mtx_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84721);


const frontMatter = {
	id: 'analysis-trace-mtx',
	title: '멀티 트랜잭션 추적',
	description: '시스템 내 또는 시스템 간에 발생하는 다양한 호출 관계를 한 눈에 파악하고 어느 부분에서 문제가 발생했는지 식별하여 개선할 수 있도록 트랜잭션과 트레이스 정보를 제공합니다.',
	tags: [
		'Node.js',
		'애플리케이션',
		'멀티 트랜잭션'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "nodejs/analysis-trace-mtx",
  "title": "멀티 트랜잭션 추적",
  "description": "시스템 내 또는 시스템 간에 발생하는 다양한 호출 관계를 한 눈에 파악하고 어느 부분에서 문제가 발생했는지 식별하여 개선할 수 있도록 트랜잭션과 트레이스 정보를 제공합니다.",
  "source": "@site/docs/nodejs/analysis-trace-mtx.mdx",
  "sourceDirName": "nodejs",
  "slug": "/nodejs/analysis-trace-mtx",
  "permalink": "/nodejs/analysis-trace-mtx",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/nodejs/analysis-trace-mtx.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Node.js",
      "permalink": "/tags/node-js"
    },
    {
      "inline": true,
      "label": "애플리케이션",
      "permalink": "/tags/애플리케이션"
    },
    {
      "inline": true,
      "label": "멀티 트랜잭션",
      "permalink": "/tags/멀티-트랜잭션"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "analysis-trace-mtx",
    "title": "멀티 트랜잭션 추적",
    "description": "시스템 내 또는 시스템 간에 발생하는 다양한 호출 관계를 한 눈에 파악하고 어느 부분에서 문제가 발생했는지 식별하여 개선할 수 있도록 트랜잭션과 트레이스 정보를 제공합니다.",
    "tags": [
      "Node.js",
      "애플리케이션",
      "멀티 트랜잭션"
    ]
  },
  "sidebar": "nodejsSidebar",
  "previous": {
    "title": "히트맵",
    "permalink": "/nodejs/analysis-hitmap"
  },
  "next": {
    "title": "트랜잭션 검색",
    "permalink": "/nodejs/tx-profile"
  }
};
const assets = {

};




const toc = [..._common_items_analysis_trace_mtx_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM];
function _createMdxContent(props) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_analysis_trace_mtx_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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

/***/ 99136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCA0VjExSDQ0VjRINFpNNCAyMlYxNUwzMyAxNVYyMkw0IDIyWk00IDI2VjMzSDIzVjI2TDQgMjZaTTQgMzdWNDRIMTJWMzdINFoiIGZpbGw9IiM3NTc1NzUiLz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 76038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiA0VjIwSDIyVjRIMlpNMTQgNlYxOEgxMFY2SDE0Wk00IDZIOFYxOEg0VjZaTTIwIDE4SDE2VjZIMjBWMThaIiBmaWxsPSIjNzU3NTc1Ii8+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ 70913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAxMkMyIDYuNDggNi40NyAyIDExLjk5IDJDMTcuNTIgMiAyMiA2LjQ4IDIyIDEyQzIyIDE3LjUyIDE3LjUyIDIyIDExLjk5IDIyQzYuNDcgMjIgMiAxNy41MiAyIDEyWk0xMiA0QzcuNTggNCA0IDcuNTggNCAxMkM0IDE2LjQyIDcuNTggMjAgMTIgMjBDMTYuNDIgMjAgMjAgMTYuNDIgMjAgMTJDMjAgNy41OCAxNi40MiA0IDEyIDRaTTExIDdIMTIuODU4MVYxMi4wNzI5TDE3IDE0LjUzMThMMTYuMDcwOSAxNkwxMSAxMi45NjgyVjdaIiBmaWxsPSIjNzU3NTc1Ii8+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ 37225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQuODc2MSA0LjM2ODlDMTMuOTkgNC4xMTk2NiAxMy4wMzE4IDMuOTg2OTkgMTIgMy45ODY5OUM3IDMuOTg2OTkgMy43MyA3LjEwMjM5IDIgMTEuNUMyLjU0MDA0IDEyLjg3MjggMy4yMzAxMyAxNC4xMjA2IDQuMDc2MDcgMTUuMTg3N0w3LjA0OTc2IDEyLjIwODhDNy4wMTY5NiAxMS45NzczIDcgMTEuNzQwNiA3IDExLjVDNyA4LjczNTIxIDkuMjQgNi40OTEzMyAxMiA2LjQ5MTMzQzEyLjI0MDIgNi40OTEzMyAxMi40NzY0IDYuNTA4MzIgMTIuNzA3NiA2LjU0MTE3TDE0Ljg3NjEgNC4zNjg5Wk0xOC41NDQ4IDYuMzYwNTZMMTYuMTcxMSA4LjczODNDMTYuNjk0OSA5LjUzMDE3IDE3IDEwLjQ3OTYgMTcgMTEuNUMxNyAxNC4yNjQ4IDE0Ljc2IDE2LjUwODcgMTIgMTYuNTA4N0MxMC45ODE0IDE2LjUwODcgMTAuMDMzNiAxNi4yMDMgOS4yNDMwOCAxNS42Nzg0TDcuMTE3MjggMTcuODA3OUM4LjUxMDc0IDE4LjU3OTYgMTAuMTM1IDE5LjAxMyAxMiAxOS4wMTNDMTcgMTkuMDEzIDIwLjI3IDE1Ljg5NzYgMjIgMTEuNUMyMS4xOTEzIDkuNDQ0MjIgMjAuMDQ2IDcuNjY4NjQgMTguNTQ0OCA2LjM2MDU2Wk0xMC43MDU4IDE0LjIxMzFDMTEuMDk3NCAxNC40MDA0IDExLjUzNjIgMTQuNTA1MiAxMiAxNC41MDUyQzEzLjY2IDE0LjUwNTIgMTUgMTMuMTYyOSAxNSAxMS41QzE1IDExLjAzNTQgMTQuODk1NCAxMC41OTU4IDE0LjcwODQgMTAuMjAzNUwxMC43MDU4IDE0LjIxMzFaTTkuOTQ5NTIgOS4zMDQwM0M5LjkwMDc0IDkuMzQ5NzUgOS44NTM0OCA5LjM5NzA5IDkuODA3ODQgOS40NDU5N0w5Ljk0OTUyIDkuMzA0MDNaTTE5LjA3MTEgM0wyMC40ODUzIDQuNDE2NjdMNC45Mjg5MyAyMEwzLjUxNDcyIDE4LjU4MzNMMTkuMDcxMSAzWiIgZmlsbD0iIzc1NzU3NSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 83214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNiAzSDJWN0g0VjVIOFYxOUg1VjIxSDEzVjE5SDEwVjVIMTRWN0gxNlYzWiIgZmlsbD0iIzc1NzU3NSIvPg0KPHBhdGggZD0iTTIwIDEwSDEyVjEySDIwVjEwWiIgZmlsbD0iIzc1NzU3NSIvPg0KPHBhdGggZD0iTTIwIDE2VjE0SDEyVjE2SDIwWiIgZmlsbD0iIzc1NzU3NSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 38254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIgMlYxN0g3VjJIMjJaTTIwIDRIOVY2SDIwVjRaTTIwIDhWMTVIOVY4SDIwWk0yIDlWMjJIMTVIMTdWMjBWMThIMTVWMjBINFY5SDZWN0g0SDJWOVoiIGZpbGw9IiM3NTc1NzUiLz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 59990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjkiIGZpbGw9IiM0NDg1RkYiLz4NCjxwYXRoIGQ9Ik04LjEwNTQ3IDYuMTc5NjlMMTAuMTE0MyAxMS44NTE2TDEyLjExMjMgNi4xNzk2OUgxNC4yMjg1VjE0SDEyLjYxMThWMTEuODYyM0wxMi43NzI5IDguMTcyMzZMMTAuNjYyMSAxNEg5LjU1NTY2TDcuNDUwMiA4LjE3NzczTDcuNjExMzMgMTEuODYyM1YxNEg2VjYuMTc5NjlIOC4xMDU0N1oiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNOC4xMDU0NyA2LjE3OTY5TDEwLjExNDMgMTEuODUxNkwxMi4xMTIzIDYuMTc5NjlIMTQuMjI4NVYxNEgxMi42MTE4VjExLjg2MjNMMTIuNzcyOSA4LjE3MjM2TDEwLjY2MjEgMTRIOS41NTU2Nkw3LjQ1MDIgOC4xNzc3M0w3LjYxMTMzIDExLjg2MjNWMTRINlY2LjE3OTY5SDguMTA1NDdaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 30419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNiAzSDJWN0g0VjVIOFYxOUg1VjIxSDEzVjE5SDEwVjVIMTRWN0gxNlYzWiIgZmlsbD0iIzc1NzU3NSIvPg0KPHBhdGggZD0iTTEzLjI1IDEzLjVDMTMuOTQwNCAxMy41IDE0LjUgMTIuOTQwNCAxNC41IDEyLjI1QzE0LjUgMTEuNTU5NiAxMy45NDA0IDExIDEzLjI1IDExQzEyLjU1OTYgMTEgMTIgMTEuNTU5NiAxMiAxMi4yNUMxMiAxMi45NDA0IDEyLjU1OTYgMTMuNSAxMy4yNSAxMy41WiIgZmlsbD0iIzc1NzU3NSIvPg0KPHBhdGggZD0iTTE3LjI1IDEzLjVDMTcuOTQwNCAxMy41IDE4LjUgMTIuOTQwNCAxOC41IDEyLjI1QzE4LjUgMTEuNTU5NiAxNy45NDA0IDExIDE3LjI1IDExQzE2LjU1OTYgMTEgMTYgMTEuNTU5NiAxNiAxMi4yNUMxNiAxMi45NDA0IDE2LjU1OTYgMTMuNSAxNy4yNSAxMy41WiIgZmlsbD0iIzc1NzU3NSIvPg0KPHBhdGggZD0iTTIyLjUgMTIuMjVDMjIuNSAxMi45NDA0IDIxLjk0MDQgMTMuNSAyMS4yNSAxMy41QzIwLjU1OTYgMTMuNSAyMCAxMi45NDA0IDIwIDEyLjI1QzIwIDExLjU1OTYgMjAuNTU5NiAxMSAyMS4yNSAxMUMyMS45NDA0IDExIDIyLjUgMTEuNTU5NiAyMi41IDEyLjI1WiIgZmlsbD0iIzc1NzU3NSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 28450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAyVjIySDRIMjJWMjBINFYySDJaTTE2IDE3Ljk5OThIMTRWMi45OTk4SDE2VjE3Ljk5OThaTTE4IDE3Ljk5OThIMjBWNi45OTk4SDE4VjE3Ljk5OThaTTEwIDE3Ljk5OThIMTJWOC45OTk4SDEwVjE3Ljk5OThaTTggMTcuOTk5OEg2VjEyLjk5OThIOFYxNy45OTk4WiIgZmlsbD0iIzc1NzU3NSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 81705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/trace-mtx-chart-timebar-5aa9bc221958b2d236a1d1a071dc639a.png");

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