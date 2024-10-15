"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[62063],{

/***/ 18847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ _2023_3q_summary_contentTitle),
  "default": () => (/* binding */ _2023_3q_summary_MDXContent),
  frontMatter: () => (/* binding */ _2023_3q_summary_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ _2023_3q_summary_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./crw-data/crwld-service-23q3/_import-23q3-service-Common.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));



/*#### 대시보드​

- <code class="Changed">Changed</code> ***트랜잭션 분석*** 기능 개편 <code class='changelog-service'><a href="../release-notes/service/service-1_106_x"><code class='changelog-service'>Service 1.106.00​</code></a></code>*/


const toc = [{
  "value": "경고 알림​",
  "id": "경고-알림",
  "level": 4
}, {
  "value": "보고서​",
  "id": "보고서",
  "level": 4
}, {
  "value": "관리​",
  "id": "관리",
  "level": 4
}, {
  "value": "실험실",
  "id": "실험실",
  "level": 4
}, {
  "value": "이용 내역",
  "id": "이용-내역",
  "level": 4
}, {
  "value": "User Interface",
  "id": "user-interface",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 에이전트에서 throttle이 설정되어 API 요청 제한 시 안내 메시지 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_104_x",
              children: "Service 1.104.18​"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "time",
            className: "uitext"
          }), " 조회 구간이 변경될 때 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "interval",
            className: "uitext"
          }), " 선택 옵션에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "default",
            className: "uitext"
          }), " 항목을 선택하도록 로직 수정 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_108_x",
              children: "Service 1.108.14"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "interval",
            className: "uitext"
          }), " 선택 옵션에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "default",
            className: "uitext"
          }), " 항목을 선택한 경우 기본 인터벌 값을 표시하는 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_108_x",
              children: "Service 1.108.14"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 와탭의 서비스 버전과 상품 목록을 확인할 수 있는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "BTN06853",
            className: "uitext"
          }), " 메뉴 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_108_x",
              children: "Service 1.108.15"
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "경고-알림",
      children: "경고 알림​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_eventNoti",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "alert_receive_settings_by_member",
            className: "uitext"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)("b", {
            children: "WhatsApp"
          }), " 알림 설정 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_104_x",
              children: "Service 1.104.00"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_eventNoti",
            className: "uitext"
          }), " 메뉴에서 3rd 파티 플러그인의 Webhook JSON 추가 양식에 ", (0,jsx_runtime.jsx)("b", {
            children: "사용자 헤더"
          }), "(", (0,jsx_runtime.jsx)("code", {
            children: "User-Heaer"
          }), ") 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_106_x",
              children: "Service 1.106.00​"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_eventNoti",
            className: "uitext"
          }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "alert_receive_settings_by_member",
            className: "uitext"
          }), " 섹션에 접기/펼치기 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_106_x",
              children: "Service 1.106.00​"
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "보고서",
      children: "보고서​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "uitext",
          children: "통합 보고서"
        }), " 메뉴에서 일간 타입 보고서의 시간 선택 제한 수정 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: "Service 1.104.00"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "관리",
      children: "관리​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "manage_account_info",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "account_user_phone",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "notification_setting",
            className: "uitext"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)("b", {
            children: "WhatsApp"
          }), " 알림 설정 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_104_x",
              children: "Service 1.104.00"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "member_list",
            className: "uitext"
          }), " 메뉴에서 멤버의 삭제 및 권한 수정 버튼 위치를 멤버 이름 컬럼으로 이동 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_104_x",
              children: "Service 1.104.00"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_createOrganization",
            className: "uitext"
          }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_organizationManagement",
            className: "uitext"
          }), " 메뉴에서 로고 이미지 안내 문구 추가(이미지 권장 사이즈, 파일 용량, 확장자에 대한 안내) ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_104_x",
              children: "Service 1.104.00"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("b", {
            children: "프로젝트 플렉스보드 편집"
          }), " 권한 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_104_x",
              children: "Service 1.104.00"
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "실험실",
      children: "실험실"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("code", {
            children: "Kubernetes"
          }), ", ", (0,jsx_runtime.jsx)("code", {
            children: "Java"
          }), " 상품에 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "사이트 맵"
          }), "  > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_lab",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Remote Access Status"
          }), " 메뉴 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_104_x",
              children: "Service 1.104.00"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_lab",
            className: "uitext"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "통합 로그 검색기"
          }), " 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_104_x",
              children: "Service 1.104.12"
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "이용-내역",
      children: "이용 내역"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_paymentInformation",
          className: "uitext"
        }), " 메뉴에서 결제 정보를 등록할 때 '해외 계좌 이체 고객 등록' 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: "Service 1.104.17"
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "user-interface",
      children: "User Interface"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 사이드 바에서 프로젝트 이름에 프로젝트 전체 이름을 표시하는 툴팁 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: "Service 1.104.00"
          })
        })]
      }), "\n"]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./crw-data/crwld-service-23q3/_import-23q3-service-Application.mdx


const _import_23q3_service_Application_frontMatter = {};
const _import_23q3_service_Application_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_23q3_service_Application_toc = [{
  "value": "<code>.NET​</code>",
  "id": "net",
  "level": 4
}];
function _import_23q3_service_Application_createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _import_23q3_service_Application_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "트랜잭션 분석"
            })
          }), " 기능 팝업 방식으로 개편 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_106_x",
              children: "Service 1.106.00"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_reportStat",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_statistics",
            className: "uitext"
          }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "client_ip",
            className: "uitext"
          }), " 탭에서 IP 목록 중 와탭 IP 주소에 해당하는 경우 ", (0,jsx_runtime.jsx)("b", {
            children: "(Whatap)"
          }), " 표시 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_108_x",
              children: "Service 1.108.5"
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "트랜잭션 분석"
          }), " 창 에러 옵션 추가 및 기타 개선 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_108_x",
              children: "Service 1.108.12"
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "net",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: ".NET​"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "New",
          children: "New"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_analysis",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_stack",
          className: "uitext"
        }), " 메뉴 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_106_x",
            children: "Service 1.106.00"
          })
        })]
      }), "\n"]
    })]
  });
}
function _import_23q3_service_Application_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_23q3_service_Application_createMdxContent, {
      ...props
    })
  }) : _import_23q3_service_Application_createMdxContent(props);
}
function _import_23q3_service_Application_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent-23/_import-agent-23q3-java.mdx


const _import_agent_23q3_java_frontMatter = {};
const _import_agent_23q3_java_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_agent_23q3_java_toc = [{
  "value": "<code class=\"changelog-service\"><a>Java Agent v2.2.11</a></code> <code class=\"changelog-date\">2023년 7월 10일</code>",
  "id": "java-agent-v2211-2023년-7월-10일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Java Agent v2.2.12</a></code> <code class=\"changelog-date\">2023년 7월 21일</code>",
  "id": "java-agent-v2212-2023년-7월-21일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Java Agent v2.2.13</a></code> <code class=\"changelog-date\">2023년 8월 8일</code>",
  "id": "java-agent-v2213-2023년-8월-8일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Java Agent v2.2.14</a></code> <code class=\"changelog-date\">2023년 8월 17일</code>",
  "id": "java-agent-v2214-2023년-8월-17일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Java Agent v2.2.15</a></code> <code class=\"changelog-date\">2023년 8월 31일</code>",
  "id": "java-agent-v2215-2023년-8월-31일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Java Agent v2.2.16</a></code> <code class=\"changelog-date\">2023년 9월 8일</code>",
  "id": "java-agent-v2216-2023년-9월-8일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Java Agent v2.2.18</a></code> <code class=\"changelog-date\">2023년 9월 26일</code>",
  "id": "java-agent-v2218-2023년-9월-26일",
  "level": 4
}];
function _import_agent_23q3_java_createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h4, {
      id: "java-agent-v2211-2023년-7월-10일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/java/java-2_2_11",
          children: "Java Agent v2.2.11"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023년 7월 10일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "New",
          children: "New"
        }), " mongodb-reactive 추적"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "java-agent-v2212-2023년-7월-21일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/java/java-2_2_12",
          children: "Java Agent v2.2.12"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023년 7월 21일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "New",
          children: "New"
        }), " ", (0,jsx_runtime.jsx)("b", {
          children: "ignore_http_method"
        }), " 옵션 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "java-agent-v2213-2023년-8월-8일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/java/java-2_2_13",
          children: "Java Agent v2.2.13"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023년 8월 8일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "New",
          children: "New"
        }), " ", (0,jsx_runtime.jsx)("b", {
          children: "CompletableFuture"
        }), " 추적을 위한 hooking 옵션 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "java-agent-v2214-2023년-8월-17일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/java/java-2_2_14",
          children: "Java Agent v2.2.14"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023년 8월 17일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " resilience4j 추적"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " undertow 추적"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " SQL Exception, HTTP Call Exception 발생 시 사용자 정의 Exception으로 처리할 수 있는 옵션 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("code", {
            children: "java.sql.SQLException"
          }), " 발생 시 에러 코드를 포함해 표시할 수 있는 옵션 추가"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "java-agent-v2215-2023년-8월-31일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/java/java-2_2_15",
          children: "Java Agent v2.2.15"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023년 8월 31일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " kafka-clients-2.4.0 추적"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 특정 에러 코드를 가진 ", (0,jsx_runtime.jsx)("code", {
            children: "java.sql.SQLException"
          }), " 무시 기능 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 트랜잭션에서 에러 스택 표시 기능 추가: 트랜잭션에서 여러 개의 에러 발생 시 첫번째 에러의 스택 표시"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "java-agent-v2216-2023년-9월-8일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/java/java-2_2_16",
          children: "Java Agent v2.2.16"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023년 9월 8일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Java 20 지원 (자바 옵션 필요)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Redis의 Lettuce 드라이버 추적"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " spring-boot-3.0 설정에 Lettuce 설정 포함"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "java-agent-v2218-2023년-9월-26일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/java/java-2_2_18",
          children: "Java Agent v2.2.18"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023년 9월 26일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " HttpServlet의 super를 설정하여 해당 클래스를 상속받은 클래스에서 http 서비스를 시작할 수 있는 기능 추가, 쉼표(,)를 구분자로 이용할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " db2-11.5 추적"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Oracle 데이터베이스 추적 설정 추가, 옵션 적용 후 재기동 필요하며, 기본값은 ", (0,jsx_runtime.jsx)("code", {
            children: "true"
          }), "입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Deprecated",
            children: "Deprecated"
          }), " HTTP 서비스 추적 시 ", (0,jsx_runtime.jsx)("code", {
            children: "org.apache.catalina.filters.FilterBase"
          }), " 클래스를 기본 추적에서 제외"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _import_agent_23q3_java_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_23q3_java_createMdxContent, {
      ...props
    })
  }) : _import_agent_23q3_java_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent-23/_import-agent-23q3-golang.mdx


const _import_agent_23q3_golang_frontMatter = {};
const _import_agent_23q3_golang_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_agent_23q3_golang_toc = [{
  "value": "<code class=\"changelog-service\"><a>Go Agent v0.2.3</a></code> <code class=\"changelog-date\">2023년 9월 13일</code>",
  "id": "go-agent-v023-2023년-9월-13일",
  "level": 4
}];
function _import_agent_23q3_golang_createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h4, {
      id: "go-agent-v023-2023년-9월-13일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/golang/golang-0_2_3",
          children: "Go Agent v0.2.3"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023년 9월 13일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 대용량 프로파일 처리 옵션 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 프로파일 데이터 압축 전송 옵션 추가"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _import_agent_23q3_golang_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_23q3_golang_createMdxContent, {
      ...props
    })
  }) : _import_agent_23q3_golang_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-service-23q3/_import-23q3-service-Server.mdx


const _import_23q3_service_Server_frontMatter = {};
const _import_23q3_service_Server_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_23q3_service_Server_toc = [];
function _import_23q3_service_Server_createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, Status, UI} = _components;
  if (!Cmdname) _import_23q3_service_Server_missingMdxReference("Cmdname", true);
  if (!Status) _import_23q3_service_Server_missingMdxReference("Status", true);
  if (!UI) _import_23q3_service_Server_missingMdxReference("UI", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_eventSetting",
          className: "uitext"
        }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06597",
          className: "uitext"
        }), "(구, ", (0,jsx_runtime.jsx)("b", {
          children: "알림 정책 복사"
        }), ") 기능에 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "BTN06571",
          className: "uitext"
        }), "할 수 있는 옵션 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.104.00​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Status, {
          children: "Fixed"
        }), " ", (0,jsx_runtime.jsx)(UI, {
          children: "대시보드"
        }), " > ", (0,jsx_runtime.jsx)(UI, {
          children: "리소스 보드"
        }), " 메뉴에서 에이전트 상태 위젯에 위험, 경고 상태가 구분되어 표시되도록 수정 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_106_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.106.13​"
            })
          })
        })]
      }), "\n"]
    }), "\n"]
  });
}
function _import_23q3_service_Server_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_23q3_service_Server_createMdxContent, {
      ...props
    })
  }) : _import_23q3_service_Server_createMdxContent(props);
}
function _import_23q3_service_Server_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./crw-data/crwld-service-23q3/_import-23q3-service-Container.mdx


const _import_23q3_service_Container_frontMatter = {};
const _import_23q3_service_Container_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_23q3_service_Container_toc = [];
function _import_23q3_service_Container_createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _import_23q3_service_Container_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "BTN07267",
          className: "uitext"
        }), " 메뉴에 ", (0,jsx_runtime.jsx)("b", {
          children: "Docker PHP"
        }), " 항목 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.104.11​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_integratedContainerMap",
          className: "uitext"
        }), " 메뉴 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_106_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.106.00​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_dashboard",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_containerMap",
          className: "uitext"
        }), " 메뉴에서 이벤트 로그의 Tag를 가릴 수 있는 옵션 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_106_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.106.00​"
            })
          })
        }), "대시보드​"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_containerMap",
          className: "uitext"
        }), " 메뉴에 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "unequal",
          className: "uitext"
        }), " 필터 옵션 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.104.00​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_containerMap",
          className: "uitext"
        }), " 메뉴의 컨테이너 요약 보기 패널에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "event",
          className: "uitext"
        }), " 탭에 이벤트 개수를 표시하는 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06683",
          className: "uitext"
        }), " 차트 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.104.00​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_containerMap",
          className: "uitext"
        }), " 메뉴의 컨테이너 요약 보기 패널에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_log",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_logSearch",
          className: "uitext"
        }), " 탭에 로그 조회 권한 및 상태에 따라 메시지를 다르게 표시 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.104.00​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_dashboard",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_containerMap",
          className: "uitext"
        }), " 메뉴에 필터 기능 강화를 위한 필터 교체 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_108_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.108.0​"
            })
          })
        }), "리소스​"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_perfSummary",
          className: "uitext"
        }), " 메뉴에 컨테이너 수, 파드 수 추이 차트 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.104.00​"
            })
          })
        })]
      }), "\n"]
    }), "\n"]
  });
}
function _import_23q3_service_Container_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_23q3_service_Container_createMdxContent, {
      ...props
    })
  }) : _import_23q3_service_Container_createMdxContent(props);
}
function _import_23q3_service_Container_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./crw-data/crwld-service-23q3/_import-23q3-service-Database.mdx


const _import_23q3_service_Database_frontMatter = {};
const _import_23q3_service_Database_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_23q3_service_Database_toc = [{
  "value": "PostgreSQL / MySQL​",
  "id": "postgresql--mysql",
  "level": 4
}, {
  "value": "PostgreSQL​",
  "id": "postgresql",
  "level": 4
}, {
  "value": "MySQL​",
  "id": "mysql",
  "level": 4
}];
function _import_23q3_service_Database_createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _import_23q3_service_Database_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h4, {
      id: "postgresql--mysql",
      children: "PostgreSQL / MySQL​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_flexboard",
            className: "uitext"
          }), " 메뉴에서 액티브 세션 테이블 위젯 정렬 변경 상태 저장 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_106_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 1.106.00​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbMonitoring",
            className: "uitext"
          }), " 메뉴에서 액티브 세션 테이블 새창으로 보기 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_106_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 1.106.00​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbMonitoring",
            className: "uitext"
          }), " 메뉴에서 액티브 세션 테이블 정렬 변경 상태 프리셋 저장 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_106_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 1.106.00​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbSize",
            className: "uitext"
          }), " 메뉴에서 CSV 다운로드 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_108_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 1.108.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 제품 환경별(RDS, XOS) 탭 분리 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_108_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 1.108.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 위젯별 메트릭스 정보를 나타내는 인포 아이콘 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_108_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 1.108.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 라인 차트에 데이터 최대값 표시 적용 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_108_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 1.108.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "관리"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "agentInstall",
            className: "uitext"
          }), " 메뉴의 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "모니터링용 계정 생성"
          }), " 섹션에서 AWS RDS 킬 세션 ", (0,jsx_runtime.jsx)("code", {
            children: "grant"
          }), " 명령어 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_108_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 1.108.18​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "postgresql",
      children: "PostgreSQL​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)("b", {
            children: "PostgreSQL"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "V2"
          }), " 모니터링 서비스 시작 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_104_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 1.104.00​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " V2 제품의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbMonitoring",
            className: "uitext"
          }), " 메뉴 내 액티브 세션 테이블에서 세션 상세 정보에 Plan 조회 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_106_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 1.106.00​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_pgStat",
            className: "uitext"
          }), " 메뉴에서 조회 기준 선택 옵션 추가(temp blocks read, temp blocks written) ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_108_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 1.108.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mysql",
      children: "MySQL​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)("code", {
          class: "my",
          children: "V2"
        }), " 제품의 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_dashboard",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_dbMonitoring",
          className: "uitext"
        }), " 메뉴 내 액티브 세션 테이블의 초기 정렬 상태 설정 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_106_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.106.00​"
            })
          })
        })]
      }), "\n"]
    })]
  });
}
function _import_23q3_service_Database_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_23q3_service_Database_createMdxContent, {
      ...props
    })
  }) : _import_23q3_service_Database_createMdxContent(props);
}
function _import_23q3_service_Database_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent-23/_import-agent-23q3-dbx.mdx


const _import_agent_23q3_dbx_frontMatter = {};
const _import_agent_23q3_dbx_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_agent_23q3_dbx_toc = [{
  "value": "<code class=\"changelog-service\"><a>DBX v1.6.8</a></code> <code class=\"changelog-date\">2023년 8월 18일</code>",
  "id": "dbx-v168-2023년-8월-18일",
  "level": 4
}, {
  "value": "공통​",
  "id": "공통",
  "level": 5
}, {
  "value": "PostgreSQL V2​",
  "id": "postgresql-v2",
  "level": 5
}, {
  "value": "MySQL V2​",
  "id": "mysql-v2",
  "level": 5
}];
function _import_agent_23q3_dbx_createMdxContent(props) {
  const _components = {
    h4: "h4",
    h5: "h5",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h4, {
      id: "dbx-v168-2023년-8월-18일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/dbx/dbx-1_6_8",
          children: "DBX v1.6.8"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023년 8월 18일"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "공통",
      children: "공통​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 에이전트 설치 파일 수정"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "postgresql-v2",
      children: "PostgreSQL V2​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("code", {
            children: "db_postgresql_used_dml"
          }), " 카테고리 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("em", {
            children: "whatap.conf"
          }), " 파일의 ", (0,jsx_runtime.jsx)("code", {
            children: "pg_dml"
          }), " 옵션을 ", (0,jsx_runtime.jsx)("code", {
            children: "pg_dml_interval"
          }), "과 ", (0,jsx_runtime.jsx)("code", {
            children: "pg_dml_limit"
          }), "으로 분리"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "mysql-v2",
      children: "MySQL V2​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("code", {
            children: "db_mysql_active_session"
          }), ", ", (0,jsx_runtime.jsx)("code", {
            children: "db_mysql_deadlock"
          }), ", ", (0,jsx_runtime.jsx)("code", {
            children: "db_mysql_tables"
          }), " 카테고리 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " agentinfo를 태그 카운트로 전송"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _import_agent_23q3_dbx_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_23q3_dbx_createMdxContent, {
      ...props
    })
  }) : _import_agent_23q3_dbx_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent-23/_import-agent-23q3-xos.mdx


const _import_agent_23q3_xos_frontMatter = {};
const _import_agent_23q3_xos_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_agent_23q3_xos_toc = [{
  "value": "<code class=\"changelog-service\"><a>xos v1.1.4</a></code> <code class=\"changelog-date\">2022년 7월 13일</code>",
  "id": "xos-v114-2022년-7월-13일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>xos v1.1.6g</a></code> <code class=\"changelog-date\">2023년 7월 11일</code>",
  "id": "xos-v116g-2023년-7월-11일",
  "level": 4
}];
function _import_agent_23q3_xos_createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h4, {
      id: "xos-v114-2022년-7월-13일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/db/xos-1_1_4",
          children: "xos v1.1.4"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2022년 7월 13일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "New",
          children: "New"
        }), " TCP 기능 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "xos-v116g-2023년-7월-11일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/db/xos-1_1_6g",
          children: "xos v1.1.6g"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023년 7월 11일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "New",
          children: "New"
        }), " Log 모니터링 기능 추가"]
      }), "\n"]
    })]
  });
}
function _import_agent_23q3_xos_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_23q3_xos_createMdxContent, {
      ...props
    })
  }) : _import_agent_23q3_xos_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-service-23q3/_import-23q3-service-Browser.mdx


const _import_23q3_service_Browser_frontMatter = {};
const _import_23q3_service_Browser_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_23q3_service_Browser_toc = [{
  "value": "대시보드​",
  "id": "대시보드",
  "level": 4
}, {
  "value": "분석​",
  "id": "분석",
  "level": 4
}, {
  "value": "보고서​",
  "id": "보고서",
  "level": 4
}];
function _import_23q3_service_Browser_createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _import_23q3_service_Browser_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h4, {
      id: "대시보드",
      children: "대시보드​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_rumErrorDashboard",
          className: "uitext"
        }), " 메뉴에서 에러에 관한 상세 화면 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.104.00​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "분석",
      children: "분석​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "페이지로드 히트맵"
          }), " 메뉴에서 페이지 로드 상세 데이터에 운영체제 버전, 클라이언트 IP 정보 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_104_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 1.104.00​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "페이지로드 히트맵"
          }), " 메뉴에서 페이지 그룹 필터와 검색 필터 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-1_106_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 1.106.00​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "보고서",
      children: "보고서​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_report",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)("span", {
          class: "uitext",
          children: "일간 브라우저 보고서"
        }), " 메뉴 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.104.00​"
            })
          })
        })]
      }), "\n"]
    })]
  });
}
function _import_23q3_service_Browser_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_23q3_service_Browser_createMdxContent, {
      ...props
    })
  }) : _import_23q3_service_Browser_createMdxContent(props);
}
function _import_23q3_service_Browser_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent-23/_import-agent-23q3-browser.mdx


const _import_agent_23q3_browser_frontMatter = {};
const _import_agent_23q3_browser_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_agent_23q3_browser_toc = [{
  "value": "<code class=\"changelog-service\"><a>Browser Agent v1.2.1</a></code> <code class=\"changelog-date\">2023년 7월 6일</code>",
  "id": "browser-agent-v121-2023년-7월-6일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Browser Agent v1.3.0</a></code> <code class=\"changelog-date\">2023년 9월 6일</code>",
  "id": "browser-agent-v130-2023년-9월-6일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Browser Agent v1.3.1</a></code> <code class=\"changelog-date\">2023년 9월 25일</code>",
  "id": "browser-agent-v131-2023년-9월-25일",
  "level": 4
}];
function _import_agent_23q3_browser_createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h4, {
      id: "browser-agent-v121-2023년-7월-6일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/browser/browser-1_2_1",
          children: "Browser Agent v1.2.1"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023년 7월 6일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 동일 에러의 경우 5초에 1번 수집하도록 설정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 브라우저 에이전트 파일 내부에 버전 표기"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "browser-agent-v130-2023년-9월-6일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/browser/browser-1_3_0",
          children: "Browser Agent v1.3.0"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023년 9월 6일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 페이지로드 중 이탈 시 데이터 수집"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " AJAX 요청 헤더 수집 옵션 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " AJAX aborted 지표 수집"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 페이지 로드 이벤트 처리 로직 개선(인터렉션 100ms)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "browser-agent-v131-2023년-9월-25일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/browser/browser-1_3_1",
          children: "Browser Agent v1.3.1"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023년 9월 25일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)("code", {
          children: "cookieSecure"
        }), " 옵션 추가, 브라우저 에이전트가 브라우저 쿠키 스토리지에 user id, session id 등의 값을 저장할 때 secure 옵션을 설정할 수 있습니다."]
      }), "\n"]
    })]
  });
}
function _import_agent_23q3_browser_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_23q3_browser_createMdxContent, {
      ...props
    })
  }) : _import_agent_23q3_browser_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-service-23q3/_import-23q3-service-AWSLog.mdx


const _import_23q3_service_AWSLog_frontMatter = {};
const _import_23q3_service_AWSLog_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*<code class="New">New</code> <b>AWS Log</b> 모니터링 서비스를 오픈했습니다. 많은 이용 부탁드립니다! 상품에 대한 자세한 내용은 <a href="../../aws-log/introduction">다음 문서</a>를 참조하세요. <code class='changelog-service'><a href="../release-notes/service/service-1_104_x">Service 1.104.00​</a></code>*/


const _import_23q3_service_AWSLog_toc = [];
function _import_23q3_service_AWSLog_createMdxContent(props) {
  const _components = {
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "New",
          children: "New"
        }), " ", (0,jsx_runtime.jsx)("b", {
          children: "AWS Log"
        }), " 모니터링 서비스 시작 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: "Service 1.104.00​"
          })
        })]
      }), "\n"]
    })]
  });
}
function _import_23q3_service_AWSLog_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_23q3_service_AWSLog_createMdxContent, {
      ...props
    })
  }) : _import_23q3_service_AWSLog_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-service-23q3/_import-23q3-service-Log.mdx


const _import_23q3_service_Log_frontMatter = {};
const _import_23q3_service_Log_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_23q3_service_Log_toc = [];
function _import_23q3_service_Log_createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _import_23q3_service_Log_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "log_search",
          className: "uitext"
        }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_logExplorer",
          className: "uitext"
        }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "transaction_log",
          className: "uitext"
        }), " 메뉴에서 키워드 하이라이팅 기능 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.104.00​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "log_search",
          className: "uitext"
        }), " 메뉴에서 선택한 로그와 인접한 시간대의 로그를 조회할 수 있는 기능 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.104.00​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_log",
          className: "uitext"
        }), " 하위 메뉴에서 ", (0,jsx_runtime.jsx)("img", {
          src: "/img/ico-setting.svg",
          alt: "설정 아이콘"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "table_settings",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "column_settings",
          className: "uitext"
        }), "에 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "add_a_column",
          className: "uitext"
        }), " 항목으로 ", (0,jsx_runtime.jsx)("span", {
          class: "uitext",
          children: "timestamp"
        }), " 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_104_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.104.00​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "uitext",
          children: "로그 설정"
        }), " 메뉴에서 카테고리 및 로그 검출 조건 선택 UI 개선 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_108_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.108.0​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 인접 로그에서 기준이 되는 로그에 스크롤 위치 이동 및 하이라이트 기능 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_108_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.108.0​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_event",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_log",
          className: "uitext"
        }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "composite_log_event",
          className: "uitext"
        }), "로 템플릿 이벤트를 추가할 경우, 카테고리가 선택되지 않은 상태에서는 필터 항목을 비활성화하도록 처리 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_108_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.108.0​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_event",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_eventSetting",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_log",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "composite_log_event",
          className: "uitext"
        }), " 기능 개편 및 로그 이벤트 템플릿 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-1_108_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 1.108.0​"
            })
          })
        })]
      }), "\n"]
    }), "\n"]
  });
}
function _import_23q3_service_Log_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_23q3_service_Log_createMdxContent, {
      ...props
    })
  }) : _import_23q3_service_Log_createMdxContent(props);
}
function _import_23q3_service_Log_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./blog/2023-3q-summary.mdx


const _2023_3q_summary_frontMatter = {
	slug: '2023-3q-summary',
	title: '3분기 안내',
	authors: 'ysj',
	date: '2023-10-31T15:10',
	toc_max_heading_level: 2,
	tags: [
		'새로운 기능',
		2023
	],
	isTranslationMissing: false
};
const _2023_3q_summary_contentTitle = undefined;
const metadata = {
  "permalink": "/whatap-docs/blog/2023-3q-summary",
  "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-3q-summary.mdx",
  "source": "@site/blog/2023-3q-summary.mdx",
  "title": "3분기 안내",
  "description": "와탭의 2023년 3분기 서비스 신규 기능 및 주목할 만한 변경 사항 개요를 안내합니다. 와탭이 새롭게 제공하는 기능들을 한 눈에 살펴보세요.",
  "date": "2023-10-31T15:10:00.000Z",
  "tags": [
    {
      "inline": true,
      "label": "새로운 기능",
      "permalink": "/whatap-docs/blog/tags/새로운-기능"
    },
    {
      "inline": true,
      "label": "2023",
      "permalink": "/whatap-docs/blog/tags/2023"
    }
  ],
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "TW J",
      "email": "ysjo@whatap.io",
      "title": "테크니컬 라이터",
      "imageURL": "./img/teamtwj.svg",
      "key": "ysj",
      "page": null
    }
  ],
  "frontMatter": {
    "slug": "2023-3q-summary",
    "title": "3분기 안내",
    "authors": "ysj",
    "date": "2023-10-31T15:10",
    "toc_max_heading_level": 2,
    "tags": [
      "새로운 기능",
      "2023"
    ],
    "isTranslationMissing": false
  },
  "unlisted": false,
  "prevItem": {
    "title": "4분기 안내",
    "permalink": "/whatap-docs/blog/2023-4q-summary"
  }
};
const assets = {
"authorsImageUrls": [(__webpack_require__(82799)/* ["default"] */ .A)],
};

/*truncate*/
/*db 상품 중 mysql v2 서비스 제공 시점 확인 필요*/
/*> * <Cmdname sid="side_containerMap" className="uitext" /> 및 <Cmdname sid="side_perfSummary" className="uitext" /> 메뉴가 개선되었습니다.*/
/*## `Application`, `Container`, `Server`

import Application-Container-Server_23q3 from "../crw-data/crwld-service-23q3/_import-23q3-service-Application-Container-Server.mdx";

<Application-Container-Server_23q3 />*/
/****컨테이너 맵*** 및 <Cmdname sid="side_perfSummary" className="uitext" /> 메뉴의 개선에 대해 소개합니다.*/
/*<details className='changelog'>
<summary><b>신규 기능 및 주요 변경 사항 안내</b></summary>

import Network_1q from "../crw-data/crwld-service/_import-service-Network.mdx";

<Network_1q />

</div>*/
/*## `CloudWatch`, `AZURE`, `OCI`, `NCP`

<details className='changelog'>
<summary><b>신규 기능 및 주요 변경 사항 안내</b></summary>

import Cloud_23q3 from "../crw-data/crwld-service-23q3/_import-23q3-service-CloudWatch-AZURE-OCI-NCP.mdx";

<Cloud_23q3 />

</div><br/>*/
/*## `실험실`

<details className='changelog'>
<summary><b>신규 기능 및 주요 변경 사항 안내</b></summary>

import Lab_23q3 from "../crw-data/crwld-service-23q3/_import-23q3-service-Lab.mdx";

<Lab_23q3 />

</div><br/>*/















const _2023_3q_summary_toc = [{
  "value": "<code>공통</code>",
  "id": "공통",
  "level": 2
}, ...toc, {
  "value": "<code>Applicatoin</code>",
  "id": "applicatoin",
  "level": 2
}, ..._import_23q3_service_Application_toc, {
  "value": "<code>Java</code>",
  "id": "java",
  "level": 3
}, ..._import_agent_23q3_java_toc, {
  "value": "<code>PHP</code>",
  "id": "php",
  "level": 3
}, {
  "value": "<code class=\"changelog-service\">PHP Agent v2.6.2</code> <code class=\"changelog-date\">2023년 9월 13일</code>",
  "id": "php-agent-v262-2023년-9월-13일",
  "level": 4
}, {
  "value": "<code>.NET</code>",
  "id": "net",
  "level": 3
}, {
  "value": "<code class=\"changelog-service\">.NET Agent v2.1.1</code> <code class=\"changelog-date\">2023년 7월 17일</code>",
  "id": "net-agent-v211-2023년-7월-17일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\">.NET Agent v2.1.2</code> <code class=\"changelog-date\">2023년 7월 20일</code>",
  "id": "net-agent-v212-2023년-7월-20일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\">.NET Agent v2.1.5</code> <code class=\"changelog-date\">2023년 9월 13일</code>",
  "id": "net-agent-v215-2023년-9월-13일",
  "level": 4
}, {
  "value": "<code>Go</code>",
  "id": "go",
  "level": 3
}, ..._import_agent_23q3_golang_toc, {
  "value": "<code>Server</code>",
  "id": "server",
  "level": 2
}, ..._import_23q3_service_Server_toc, {
  "value": "<code>Kubernetes</code>",
  "id": "kubernetes",
  "level": 2
}, ..._import_23q3_service_Container_toc, {
  "value": "<code class=\"changelog-service\">Kubernetes Agent v1.3.6</code> <code class=\"changelog-date\">2023년 9월 25일</code>",
  "id": "kubernetes-agent-v136-2023년-9월-25일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\">Kubernetes Agent v1.3.7</code> <code class=\"changelog-date\">2023년 9월 27일</code>",
  "id": "kubernetes-agent-v137-2023년-9월-27일",
  "level": 4
}, {
  "value": "<code>Database</code>",
  "id": "database",
  "level": 2
}, ..._import_23q3_service_Database_toc, {
  "value": "DBX",
  "id": "dbx",
  "level": 4
}, ..._import_agent_23q3_dbx_toc, {
  "value": "XOS",
  "id": "xos",
  "level": 4
}, ..._import_agent_23q3_xos_toc, {
  "value": "<code>Browser</code>",
  "id": "browser",
  "level": 2
}, ..._import_23q3_service_Browser_toc, ..._import_agent_23q3_browser_toc, {
  "value": "<code>Network</code>",
  "id": "network",
  "level": 2
}, {
  "value": "<code>AWS Log</code>",
  "id": "aws-log",
  "level": 2
}, ..._import_23q3_service_AWSLog_toc, {
  "value": "<code>Log</code>",
  "id": "log",
  "level": 2
}, ..._import_23q3_service_Log_toc];
function _2023_3q_summary_createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, Details, ImgLang, LinkImage, Status} = _components;
  if (!Cmdname) _2023_3q_summary_missingMdxReference("Cmdname", true);
  if (!Details) _2023_3q_summary_missingMdxReference("Details", true);
  if (!ImgLang) _2023_3q_summary_missingMdxReference("ImgLang", true);
  if (!LinkImage) _2023_3q_summary_missingMdxReference("LinkImage", true);
  if (!Status) _2023_3q_summary_missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "와탭의 2023년 3분기 서비스 신규 기능 및 주목할 만한 변경 사항 개요를 안내합니다. 와탭이 새롭게 제공하는 기능들을 한 눈에 살펴보세요."
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "changelog/changelog-new3.png",
      desc: "새로운 기능 sc"
    }), "\n", "\n", "\n", (0,jsx_runtime.jsxs)("div", {
      class: "faq",
      children: [(0,jsx_runtime.jsx)(_components.table, {
        children: (0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "공통"
              })
            })
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "프로젝트 플렉스 보드 편집"
          }), " 권한이 추가되었습니다."]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.table, {
        children: (0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Application"
              })
            })
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL06209",
              className: "uitext"
            }), " 기능이 새롭게 개편되었습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_transaction_map",
              className: "uitext"
            }), " 메뉴 맵 차트가 개선되었습니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.table, {
        children: (0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Server"
              })
            })
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "sms_resource_board",
            className: "uitext"
          }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_eventSetting",
            className: "uitext"
          }), " 메뉴가 개선되었습니다."]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.table, {
        children: (0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Kubernetes"
              })
            })
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Docker PHP"
              })
            }), " 설치를 제공합니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_integratedContainerMap",
              className: "uitext"
            }), " 메뉴를 제공합니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.table, {
        children: (0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Database"
              })
            })
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL"
            }), " 상품 ", (0,jsx_runtime.jsx)("code", {
              class: "my",
              children: "V2"
            }), " 서비스가 시작되었습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MySQL"
            }), " 상품 ", (0,jsx_runtime.jsx)("code", {
              class: "my",
              children: "V2"
            }), " 서비스가 시작되었습니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.table, {
        children: (0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Browser"
              })
            })
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "페이지로드 히트맵"
              })
            }), " 메뉴가 개선되었습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_rumErrorDashboard",
              className: "uitext"
            }), " 메뉴에서 에러 상세가 추가되었습니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.table, {
        children: (0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AWS Log"
              })
            })
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "AWS Log"
          }), " 모니터링 상품 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "정식"
          }), " 서비스가 출시되었습니다."]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.table, {
        children: (0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.th, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Network"
              })
            })
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "네트워크 성능 모니터링"
          }), "(Network Performance Monitoring) 상품 베타 서비스가 시작되었습니다."]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "상품별 신규 기능 외 변경 사항 개요 및 해당 릴리스 버전, 에이전트 변경 사항은 다음 안내를 통해 확인할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "공통",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "공통"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "공통"
      }), " 부분의 주목할만한 신규 기능 및 변경 사항으로 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "프로젝트 플렉스보드 편집"
      }), " 권한 추가 및 편의성 향상을 위한 개선을 소개합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "프로젝트 플렉스보드 편집"
      }), " 권한이 추가되어 이제 프로젝트 내 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Flex 보드"
        })
      }), "를 수정하기 위해서는 해당 권한이 필요합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["그외 전반적인 편의성 향상을 위한 업데이트가 이루어졌습니다. 와탭의 서비스 버전과 상품 목록을 확인할 수 있는 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "BTN06853",
        className: "uitext"
      }), " 메뉴가 추가되었습니다."]
    }), "\n", (0,jsx_runtime.jsx)(LinkImage, {
      img: "changelog/changelog-whatap-info.png",
      desc: "",
      className: "noneborder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["또한  ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_eventNoti",
        className: "uitext"
      }), " 시 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "WhatsApp"
      }), " 알림 설정이 새롭게 추가되었고 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      }), " 메뉴에서 일간 보고서 생성 시 시간 선택 제한 방식이 변경되었습니다. 기존에는 종료 시간을 전일 23시 59분까지 선택할 수 있었지만, 이제 종료 시간을 현재 시간 기준 1시간 이전까지 선택할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음 개요 안내를 통해 2023년 3분기 공통 부분의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applicatoin",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Applicatoin"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Application"
      }), " 상품군의 주목할 만한 신규 기능 및 변경 사항으로 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "트랜잭션 분석"
        })
      }), " 기능 개편 및 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_transaction_map",
        className: "uitext"
      }), " 화면 개선에 대해 소개합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "트랜잭션 분석"
        })
      }), " 기능 개편이 시작되었습니다. 기존에는 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "hitmap",
        className: "uitext"
      }), " 아래로 트랜잭션 목록을 불러오는 방식이었지만, 이제 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "hitmap",
        className: "uitext"
      }), " 드래그 시 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "트랜잭션 분석"
        })
      }), " 팝업창이 나타나 구간별로 해당 상세 정보를 분석하고 비교하기 수월해졌습니다. 또한 트랜잭션 목록 필터에서 에러 건만 바로 확인할 수 있는 옵션이 추가되었습니다."]
    }), "\n", (0,jsx_runtime.jsx)(LinkImage, {
      img: "release/release-note-tx-new-feature.png",
      desc: "",
      className: "noneborder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_transaction_map",
        className: "uitext"
      }), "은 가시성을 높이기 위해 맵 디자인을 변경하였으며, 일반 트랜잭션과 에러 트랜잭션이 겹치는 경우 에러 건이 먼저 보이도록 변경되었습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "수정 전"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "수정 후"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "before",
              src: (__webpack_require__(6906)/* ["default"] */ .A) + "",
              width: "180",
              height: "158"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.img, {
              alt: "after",
              src: (__webpack_require__(53597)/* ["default"] */ .A) + "",
              width: "186",
              height: "154"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["또한 ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".NET"
      }), " 상품의 경우 기존에 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Java"
      }), "와 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Python"
      }), " 상품에서만 제공되었던 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_stack",
        className: "uitext"
      }), " 메뉴가 추가되었습니다. ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_stack",
        className: "uitext"
      }), " 메뉴를 통해 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "topstack",
        className: "uitext"
      }), "과 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "uniquestack",
        className: "uitext"
      }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "active_stack",
        className: "uitext"
      }), "을 간단하게 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 개요 안내를 통해 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Application"
      }), " 상품군의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_23q3_service_Application_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog2",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "에이전트 안내"
        })
      }), (0,jsx_runtime.jsx)(_components.h3, {
        id: "java",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Java"
        })
      }), (0,jsx_runtime.jsx)(_import_agent_23q3_java_MDXContent, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "php",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "PHP"
        })
      }), (0,jsx_runtime.jsxs)(_components.h4, {
        id: "php-agent-v262-2023년-9월-13일",
        children: [(0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: "PHP Agent v2.6.2"
        }), " ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-date",
          children: "2023년 9월 13일"
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " 대용량 프로파일 처리 옵션 추가"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "whatap.large_profile_enabled"
                }), " ", (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "Boolean"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "false"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["약 만 건 이하의 프로파일(스탭) 정보를 수집할 수 있습니다. 더 많은 양을 수집할 경우 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "split_profile_enabled"
                }), " 옵션으로 사용하는 것을 권장합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "whatap.split_profile_enabled"
                }), " ", (0,jsx_runtime.jsx)("span", {
                  class: "type",
                  children: "Boolean"
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "false"
                })]
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "일정량의 프로파일을 가상 트랜잭션으로 분리하여 더 많은 프로파일 정보를 수집합니다. 여러 개의 트랜잭션 목록으로 분할 표기합니다."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "Feature"
            }), " 프로파일 데이터 압축 전송 옵션 추가"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "whatap.profile_zip_enabled"
              }), " ", (0,jsx_runtime.jsx)("span", {
                class: "type",
                children: "Boolean"
              }), "  기본값 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "true"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h3, {
        id: "net",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: ".NET"
        })
      }), (0,jsx_runtime.jsxs)(_components.h4, {
        id: "net-agent-v211-2023년-7월-17일",
        children: [(0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: ".NET Agent v2.1.1"
        }), " ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-date",
          children: "2023년 7월 17일"
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "New"
            }), " Active Stack 지원"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Status, {
              children: "New"
            }), " 닷넷 지원환경 분석 도구 기능 추가"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.h4, {
        id: "net-agent-v212-2023년-7월-20일",
        children: [(0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: ".NET Agent v2.1.2"
        }), " ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-date",
          children: "2023년 7월 20일"
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "New"
          }), " WCF 지원"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.h4, {
        id: "net-agent-v215-2023년-9월-13일",
        children: [(0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: ".NET Agent v2.1.5"
        }), " ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-date",
          children: "2023년 9월 13일"
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "New"
          }), " 타임아웃 시간 조절하는 ", (0,jsx_runtime.jsx)("code", {
            children: "webservice_method_timeout"
          }), " 옵션 추가"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.h3, {
        id: "go",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Go"
        })
      }), (0,jsx_runtime.jsx)(_import_agent_23q3_golang_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "server",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Server"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Server"
      }), " 상품의 경우 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_eventSetting",
        className: "uitext"
      }), " 메뉴에서 기존 이벤트 설정을 현재 프로젝트에 복사할 수 있는 기능이 추가되었고, 그외 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "sms_resource_board",
        className: "uitext"
      }), " 메뉴 내 에이전트 상태 위젯에 위험과 경고 상태가 구분되어 표시도록 하는 등 사용자 편의성 향상을 위한 개선 작업이 이루어졌습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 개요 안내를 통해 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Server"
      }), " 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_23q3_service_Server_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kubernetes",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Kubernetes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Kubernetes"
      }), " 상품의 주목할 만한 신규 기능 및 변경 사항으로 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Docker PHP"
      }), " 설치 제공 및 새롭게 추가된 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_integratedContainerMap",
        className: "uitext"
      }), " 메뉴를 소개합니다."]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이제 Docker 컨테이너 기반으로 실행하는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PHP 애플리케이션"
      }), "에 와탭 모니터링 에이전트를 적용하고 컨테이너 이미지를 패키징할 수 있습니다. whatap-php 패키지를 설치 후 설치 스크립트 및 컨테이너 환경변수를 설정해 해당 에이전트를 설치할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["클러스터 프로젝트와 네임스페이스 프로젝트를 포함한 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_integratedContainerMap",
        className: "uitext"
      }), " 메뉴를 새롭게 제공합니다. 통합 컨테이너 맵은 프로젝트별 그룹화 옵션을 추가로 제공해 클러스터 프로젝트 및 네임스페이스 개별 프로젝트 내 컨테이너 맵을 조회할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(LinkImage, {
      img: "k8s-container-map-unified-whatapproject.png",
      desc: "",
      className: "noneborder"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 개요 안내를 통해 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Kubernetes"
      }), " 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_23q3_service_Container_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog2",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "에이전트 안내"
        })
      }), (0,jsx_runtime.jsxs)(_components.h4, {
        id: "kubernetes-agent-v136-2023년-9월-25일",
        children: [(0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: "Kubernetes Agent v1.3.6"
        }), " ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-date",
          children: "2023년 9월 25일"
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " 노드 목록 개편을 위한 노드 정보(클러스터 버전, 노드 상태 등) 추가"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.h4, {
        id: "kubernetes-agent-v137-2023년-9월-27일",
        children: [(0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: "Kubernetes Agent v1.3.7"
        }), " ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-date",
          children: "2023년 9월 27일"
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Status, {
            children: "Feature"
          }), " 개편될 애플리케이션 목록 메뉴에서 노드 목록 연동을 위한 key 값 추가"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "database",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Database"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Database"
      }), " 상품군의 주목할 만한 신규 기능 및 변경 사항으로 ", (0,jsx_runtime.jsx)("code", {
        class: "my",
        children: "V2"
      }), " 서비스 시작에 대해서 소개합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이번 3분기에 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PostgreSQL"
      }), " 상품과 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MySQL"
      }), " 상품의 ", (0,jsx_runtime.jsx)("code", {
        class: "my",
        children: "V2"
      }), " 서비스가 시작되었습니다. ", (0,jsx_runtime.jsx)("code", {
        class: "my",
        children: "V2"
      }), " 서비스는 편의성 향상에 중점을 두었습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["제품 환경별로 RDS와 XOS 탭을 분리하였고 또한 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_dbMonitoring",
        className: "uitext"
      }), " 메뉴를 개선했습니다. 예를 들어 액티브 세션 테이블 프리셋 저장 옵션 및 세션 상세 정보 내 Plan 조회 옵션 등이 추가되었습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 개요 안내를 통해 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Database"
      }), " 상품군의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_23q3_service_Database_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog2",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "에이전트 안내"
        })
      }), (0,jsx_runtime.jsx)(_components.h4, {
        id: "dbx",
        children: "DBX"
      }), (0,jsx_runtime.jsx)(_import_agent_23q3_dbx_MDXContent, {}), (0,jsx_runtime.jsx)(_components.h4, {
        id: "xos",
        children: "XOS"
      }), (0,jsx_runtime.jsx)(_import_agent_23q3_xos_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "browser",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Browser"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Browser"
      }), " 상품의 주목할 만한 신규 기능 및 변경 사항으로 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "페이지로드 히트맵"
        })
      }), " 메뉴 개선 및 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_rumErrorDashboard",
        className: "uitext"
      }), " 에러 상세 추가에 대해 소개합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "페이지로드 히트맵"
        })
      }), " 메뉴의 경우 상세 페이지로드 데이터에 운영체제 버전 및 클라이언트 IP 정보가 추가되었고 필터 기능을 새롭게 제공합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이제 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_rumErrorDashboard",
        className: "uitext"
      }), " 메뉴의 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "에러 메시지 테이블"
        })
      }), " 목록에서 에러 메시지를 선택 시 에러 메시지를 기준으로 에러와 관련한 자세한 통계 정보를 확인할 수 있습니다. 뿐만 아니라 시간대별로 발생한 에러 로그 역시 살펴볼 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(LinkImage, {
      img: "browser-error-details-log.png",
      desc: "Error log 분기 예시"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 개요 안내를 통해 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Browser"
      }), " 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_23q3_service_Browser_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog2",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "에이전트 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_agent_23q3_browser_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "network",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Network"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2023년 3분기에 네트워크 간의 혼잡 및 장애를 파악하고 사용자의 네트워크 성능 개선을 위해 프로세스의 네트워크 정보를 수집하는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "네트워크 성능 모니터링"
      }), "(", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Performance Monitoring"
      }), ") 상품 베타 서비스가 출시되었습니다. 상품에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docs.whatap.io/npm/introduction",
        children: "다음 문서"
      }), "를 참조하세요."]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "aws-log",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "AWS Log"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AWS Log"
      }), " 모니터링 서비스가 정식으로 출시되었습니다. S3와 Log Group 각각 리소스별로 확인하는 번거로운 과정을 거칠 필요없이 와탭 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AWS Log"
      }), "는 AWS 상에서 발생하는 각종 로그를 수집해 통합 모니터링을 제공합니다. 상품에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)("a", {
        href: "../../aws-log/introduction",
        children: "다음 문서"
      }), "를 참조하세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_23q3_service_AWSLog_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "log",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Log"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Log"
      }), " 상품의 주목할 만한 신규 기능 및 변경 사항을 다음과 같이 소개합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["전반적으로 편의성 향상을 위한 업데이트가 이루어졌습니다. ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_logSearch",
        className: "uitext"
      }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_logExplorer",
        className: "uitext"
      }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "transaction_log",
        className: "uitext"
      }), " 메뉴에서 키워드 하이라이팅 기능이 추가되었습니다. 또한 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_logSearch",
        className: "uitext"
      }), " 메뉴에서 인접 로그 조회 기능이 추가되었습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 개요 안내를 통해 2023년 3분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Log"
      }), " 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_23q3_service_Log_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n"]
  });
}
function _2023_3q_summary_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_2023_3q_summary_createMdxContent, {
      ...props
    })
  }) : _2023_3q_summary_createMdxContent(props);
}
function _2023_3q_summary_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 82799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/teamtwj-8ca548071cd575b2056335d511c4c2fc.svg");

/***/ }),

/***/ 53597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 6906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

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