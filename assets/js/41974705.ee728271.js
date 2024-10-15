"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[31236],{

/***/ 16497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ _2024_1q_summary_contentTitle),
  "default": () => (/* binding */ _2024_1q_summary_MDXContent),
  frontMatter: () => (/* binding */ _2024_1q_summary_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ _2024_1q_summary_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./crw-data/crwld-service/_import-service-Common.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));



/*수정 필요*/
/*#### 프로젝트 생성​

- <code class="Changed">Changed</code> 프로젝트 생성 시 상품 추천 배너에 <b>Network Performance Monitoring</b> 추가, <b>Java</b> 상품 제거 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>

- <code class="Changed">Changed</code> 프로젝트 생성 개수가 제한될 때 표시되는 안내 메시지를 모달 방식으로 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>*/
/*#### User Interface​

- <code class="Changed">Changed</code> <Cmdname sid="BTN06853" className="uitext" /> 창에서 와탭 로고에 다크 테마 적용, 플랫폼에 <b>WhaTap Network</b> 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>

- <code class="Changed">Changed</code> 프로젝트 생성 과정에서 상품 선택 시 모든 상품을 의미하는 <b>All Platform</b> 문구를 <b>All Category</b>로 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Changed">Changed</code> 에러가 발생한 경우 화면에서 채팅 도구(말풍선)를 통해 문의할 수 있도록 안내 문구 수정 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Changed">Changed</code> 채팅 문의 화면에서 <span class="b500">1:1 온라인 교육</span> 텍스트를 <Cmdname sid="DSC07202" className="uitext" />으로 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>*/
/*#### 관리​

- <code class="Changed">Changed</code> <span class="uitext">통합 멤버 관리</span> 메뉴에서 <b>결제</b> 권한 및 <b>멤버 관리</b> 권한을 소유한 유일한 멤버를 삭제할 경우 경고 메시지를 표시하도록 수정 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="add_group" className="uitext" /> 페이지의 제목 변경, <span class="b500">프로젝트 목록</span> → <Cmdname sid="add_group" className="uitext" /> <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>

#### 계정 관리​

- <code class="Changed">Changed</code> <Cmdname sid="two_factor_auth" className="uitext" /> 섹션에서 OTP 키를 발급하지 않은 상태이면 <Cmdname sid="send_otp_key_mail" className="uitext" /> 버튼 비활성화 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>*/
/*#### 통합 보고서​

- <code class="Changed">Changed</code> 신규 보고서 생성 또는 보고서 중복 생성 시 출력되는 메시지 수정 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>*/
/*#### 이용 내역​

- <code class="Changed">Changed</code> <Cmdname sid="usage" className="uitext" /> 메뉴에서 UTC 기준 날짜로 사용량 표시 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Changed">Changed</code> 결제 정보를 등록하지 않더라도 프로모션 배너를 노출하고, 결제 정보를 등록하지 않은 상태에서 프로모션 코드를 입력할 수 없도록 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_billingPreview" className="uitext" /> 메뉴에서 사용량 수치를 클릭하면 사용량 상세 정보를 표시하는 기능 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="side_paymentInformation" className="uitext" /> 메뉴에서 카드 결제 수단 등록 시 약관 동의 문구 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="project_subscription" className="uitext" /> 메뉴에서 <span class="b500">결제 권한 없는 프로젝트 표시</span> 문구를 <Cmdname sid="DSC07606" className="uitext" />로 변경, 툴팁 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>*/
/*#### 기타​

- <code class="Changed">Changed</code> 프로젝트 생성 과정에서 상품 선택 시 모든 상품을 의미하는 <b>All Platform</b> 문구를 <b>All Category</b>로 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_myUsage" className="uitext" /> &gt; <Cmdname sid="side_billingPreview" className="uitext" /> 메뉴에서 사용량 수치를 클릭하면 사용량 상세 정보를 표시하는 기능 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="side_analysis" className="uitext" /> &gt; <Cmdname sid="side_metricsChart" className="uitext" /> 메뉴에서 전체 에이전트 선택 해제 기능 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_1_x"><code class='changelog-service'>Service 2.1.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="side_analysis" className="uitext" /> &gt; <Cmdname sid="side_metricsSearch" className="uitext" /> 메뉴에서 테이블 목록을 스크롤하면 헤더는 고정된 상태로 유지되도록 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>

- <code class="Changed">Changed</code> <b>수정</b> 또는 <b>알림 설정</b> 권한을 가진 멤버가 <Cmdname sid="side_maintenancePlan" className="uitext" /> 메뉴를 이용할 수 있도록 권한 조정 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>*/
/*- <code class="Changed">Changed</code> 프로젝트 생성에서 그룹 추가 시 프로젝트 생성 화면으로 이동하도록 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>*/


const toc = [{
  "value": "Flex 보드 / 대시보드​",
  "id": "flex-보드--대시보드",
  "level": 4
}, {
  "value": "경고 알림​",
  "id": "경고-알림",
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
    children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " 프로젝트 생성 과정에서 상품 선택 시 모든 상품을 의미하는 ", (0,jsx_runtime.jsx)("b", {
            children: "All Platform"
          }), " 문구를 ", (0,jsx_runtime.jsx)("b", {
            children: "All Category"
          }), "로 변경 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_myUsage",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_billingPreview",
            className: "uitext"
          }), " 메뉴에서 사용량 수치를 클릭하면 사용량 상세 정보를 표시하는 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_metricsChart",
            className: "uitext"
          }), " 메뉴에서 전체 에이전트 선택 해제 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_1_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.1.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " 사이드 메뉴 개편 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " SSO 계정 연동 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_metricsSearch",
            className: "uitext"
          }), " 메뉴에서 테이블 목록을 스크롤하면 헤더는 고정된 상태로 유지되도록 변경 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)("b", {
            children: "수정"
          }), " 또는 ", (0,jsx_runtime.jsx)("b", {
            children: "알림 설정"
          }), " 권한을 가진 멤버가 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_maintenancePlan",
            className: "uitext"
          }), " 메뉴를 이용할 수 있도록 권한 조정 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "flex-보드--대시보드",
      children: "Flex 보드 / 대시보드​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_flexboard",
            className: "uitext"
          }), " 메뉴에서 TopN 위젯의 순위 갱신 시 그래프 차트가 이어지지 않도록 변경 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " 모든 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "hitmap",
            className: "uitext"
          }), " 위젯의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "yaxis",
            className: "uitext"
          }), " 옵션을 기본 적용하도록 변경 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_flexboard",
            className: "uitext"
          }), " 메뉴에서 보조 차트의 소수 자릿수 길이 조정 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_flexboard",
            className: "uitext"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "apdex",
            className: "uitext"
          }), " 위젯에 차트 범례 설정 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_1_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.1.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " 클라우드 관련 지표에 대하여 5분, 1시간 통계 카테고리를 사용할 수 있도록 변경: ", (0,jsx_runtime.jsx)("code", {
            children: "aws_"
          }), " / ", (0,jsx_runtime.jsx)("code", {
            children: "azure_"
          }), " / ", (0,jsx_runtime.jsx)("code", {
            children: "ncloud_"
          }), " / ", (0,jsx_runtime.jsx)("code", {
            children: "oci_"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 위젯에 해당 상품의 대시보드로 이동 가능한 버튼 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 대시보드의 Apdex * 100 위젯에 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "ITM07648",
            className: "uitext"
          }), " 메트릭스 항목 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 그룹 위젯 복사 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
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
            children: "통합 Flex 보드"
          }), " 메뉴의 대시보드 복사 및 공유 기능 개선 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "경고-알림",
      children: "경고 알림​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_event",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_eventSetting",
            className: "uitext"
          }), " 메뉴에서 메트릭스 이벤트 추가 시 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "alert_test",
            className: "uitext"
          }), " 기능 실행을 위한 필수 입력 조건 변경 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_eventHistory",
            className: "uitext"
          }), " 메뉴에서 다음 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_1_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.1.0​"
              })
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "event_time",
                className: "uitext"
              }), " 컬럼에 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "in_progress",
                className: "uitext"
              }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "ITM07315",
                className: "uitext"
              }), " 태그 표시기능 추가"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06583",
                className: "uitext"
              }), " 컬럼 표시 옵션 추가"]
            }), "\n"]
          }), "\n"]
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
          }), " 메뉴에서 메트릭스 이벤트를 추가 또는 편집 시 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "category",
            className: "uitext"
          }), " 항목의 상품 로고에 적용된 다크 테마 시인성 개선 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_eventSetting",
            className: "uitext"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "newfunc",
            children: "New"
          }), " 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " 프로젝트 생성 시 경고 알림 메시지의 기본 언어를 설정할 수 있는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "sms_noti_alert_language",
            className: "uitext"
          }), " 옵션 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
            sid: "side_eventNoti",
            className: "uitext"
          }), " 메뉴에서 3rd 파티 플러그인으로 Opsgenie 플랫폼 등록 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 사이드 메뉴에서 프로젝트 목록의 너비를 조절할 수 있는 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.14​"
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
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "newfunc",
            children: "New"
          }), " 메뉴에서 기존 이벤트 설정 메뉴의 이벤트 탭을 표시하고, ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "BTN07761",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "BTN07762",
            className: "uitext"
          }), " 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.14​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", "\n", "\n", "\n", "\n", "\n"]
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


;// CONCATENATED MODULE: ./crw-data/crwld-service/_import-service-Application.mdx


const _import_service_Application_frontMatter = {};
const _import_service_Application_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*- <code class="Changed">Changed</code> Node 에이전트 설치 지원 버전 변경 7.10.0 → <b>16.4.0</b> <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>*/
/*- <code class="Changed">Changed</code> <Cmdname sid="side_dashboard" className="uitext" /> &gt; <Cmdname sid="application_dashboard" className="uitext" /> 메뉴에서 <Cmdname sid="hitmap" className="uitext" /> 위젯의 <Cmdname sid="yaxis" className="uitext" /> 옵션을 기본 적용, Y축 변동값 저장하도록 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Changed">Changed</code> Java 프로젝트의 <Cmdname sid="side_management" className="uitext" /> &gt; <Cmdname sid="agentInstall" className="uitext" /> 메뉴에서 JVM 옵션과 관련한 코드 수정 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="TTL06209" className="uitext" /> 창의 <Cmdname sid="multi_transaction" className="uitext" /> &gt; <Cmdname sid="chart" className="uitext" /> 모드에서 라벨 표시 기준을 수행 시간 기준으로 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="application_dashboard" className="uitext" /> 메뉴의 <Cmdname sid="hitmap" className="uitext" /> 위젯에 <Cmdname sid="hitmap_transaction" className="uitext" /> 메뉴로 이동하는 버튼 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>*/


const _import_service_Application_toc = [];
function _import_service_Application_createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _import_service_Application_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_transaction_map",
            className: "uitext"
          }), " 메뉴 개편 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["화면 아래의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "trace_list",
              className: "uitext"
            }), " 섹션 제거"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "transaction_map",
              className: "uitext"
            }), " 섹션의 차트를 드래그하면 나타나는 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL06209",
              className: "uitext"
            }), " 팝업 창을 통해 상세 정보 확인"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "application_dashboard",
            className: "uitext"
          }), " 메뉴의 각 위젯에 툴팁 및 관련 정보, 다국어 지원 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Node.js"
          }), " 에이전트 설치 지원 버전 변경 7.10.0 → ", (0,jsx_runtime.jsx)("b", {
            children: "16.4.0"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), " 창의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "multi_transaction",
            className: "uitext"
          }), " 탭에서 프로젝트 선택 상태를 저장하는 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_1_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.1.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), " 창의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "multi_transaction",
            className: "uitext"
          }), " 탭에서 차트 및 트리 설정에 대한 저장 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_1_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.1.0​"
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
            sid: "TTL06209",
            className: "uitext"
          }), " 창의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "table_view",
            className: "uitext"
          }), "에서 ", (0,jsx_runtime.jsx)("b", {
            children: "DB Connection"
          }), ", ", (0,jsx_runtime.jsx)("b", {
            children: "SQL"
          }), " 스텝을 클릭하면 활성화되는 모달에 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SERIAL"
          }), " 필드 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.9​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "application_dashboard",
            className: "uitext"
          }), " 메뉴에서 차트 영역의 디자인 요소 수정(위젯 제목 크기 및 위젯 간격, 차트 구간 설명 텍스트의 크기 수정) ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "application_dashboard",
            className: "uitext"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "today_tps",
            className: "uitext"
          }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "today_user",
            className: "uitext"
          }), " 위젯에 ", (0,jsx_runtime.jsx)("code", {
            children: "All APPS."
          }), " 태그 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), " 창에서 SQL 상세 내용 확인 시 CRUD 표시 형식 개선 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
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
            sid: "side_transaction_map",
            className: "uitext"
          }), " 메뉴에 새로운 UI 적용 및 기능 개편 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Go"
          }), " 모니터링 상품 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "정식 서비스"
          }), " 시작 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.4​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_statistics",
            className: "uitext"
          }), " 메뉴의 탭 메뉴 구성을 개별 하위 메뉴로 구성하는 디자인 시스템 적용 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_agentsConfiguration",
            className: "uitext"
          }), " 메뉴의 탭 메뉴 구성을 개별 하위 메뉴로 구성하는 디자인 시스템 적용 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_statistics",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "transaction",
            className: "uitext"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "order_by",
            className: "uitext"
          }), " 항목으로 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "sql_fetch_count",
            className: "uitext"
          }), " 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
            sid: "side_transaction_map",
            className: "uitext"
          }), " 메뉴의 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Top 30"
          }), " 섹션에서 IP 필터 항목으로 원하는 IP 주소를 추가 및 삭제, 필터링할 수 있는 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 에이전트별 액티브 트랜잭션을 표시하는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "AA018",
            className: "uitext"
          }), " 위젯 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 에이전트 선택 옵션의 에이전트 목록 간격 조정 및 검색 기능 추가, 이름 순으로 정렬하여 표시 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _import_service_Application_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_service_Application_createMdxContent, {
      ...props
    })
  }) : _import_service_Application_createMdxContent(props);
}
function _import_service_Application_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent/_import-agent-java.mdx


const _import_agent_java_frontMatter = {};
const _import_agent_java_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_agent_java_toc = [{
  "value": "<code class=\"changelog-service\"><a>Java Agent v2.2.26</a></code> <code class=\"changelog-date\">2024년 01월 11일</code>",
  "id": "java-agent-v2226-2024년-01월-11일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Java Agent v2.2.27</a></code> <code class=\"changelog-date\">2024년 02월 06일</code>",
  "id": "java-agent-v2227-2024년-02월-06일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Java Agent v2.2.28</a></code> <code class=\"changelog-date\">2024년 02월 27일</code>",
  "id": "java-agent-v2228-2024년-02월-27일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Java Agent v2.2.29</a></code> <code class=\"changelog-date\">2024년 03월 15일</code>",
  "id": "java-agent-v2229-2024년-03월-15일",
  "level": 4
}];
function _import_agent_java_createMdxContent(props) {
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
      id: "java-agent-v2226-2024년-01월-11일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/java/java-2_2_26",
          children: "Java Agent v2.2.26"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 01월 11일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " spring-boot-2.5 이상에서 reactor-kafka-1.3 추적"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " spring-boot-2.5 이상에서 RxJava 사용 시 RxJava의 schedule 추적"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " spring-boot-3.0 이상에서 RxJava3 사용 시 RxJava3의 schedule 추적"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 에이전트 로그에 ", (0,jsx_runtime.jsx)("code", {
            children: "threadName"
          }), ", ", (0,jsx_runtime.jsx)("code", {
            children: "className"
          }), ", ", (0,jsx_runtime.jsx)("code", {
            children: "methodName"
          }), ", ", (0,jsx_runtime.jsx)("code", {
            children: "lineNumber"
          }), " 수집하여 표시"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 에이전트 로그 형태 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Tibero의 ", (0,jsx_runtime.jsx)("code", {
            children: "CallableStatement"
          }), " 추적"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "java-agent-v2227-2024년-02월-06일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/java/java-2_2_27",
          children: "Java Agent v2.2.27"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 02월 06일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " mule-3.9.5 추적 범위 확대"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " camel-cxf-3.15 추적"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("code", {
            children: "OracleCallableStatement"
          }), " 추적 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Deprecate",
            children: "Deprecate"
          }), " Lettuce 드라이버 사용 시 Redis의 value 수집 중단"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "java-agent-v2228-2024년-02월-27일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/java/java-2_2_28",
          children: "Java Agent v2.2.28"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 02월 27일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " logback-1.2.8 추적 시 appender 제외 옵션 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Deprecated",
            children: "Deprecated"
          }), " logback-1.2.8 추적 시 지정한 appender만 수집하는 옵션 사용 중단"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " log4j-2.17 추적 시 appender 제외 옵션 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Deprecated",
            children: "Deprecated"
          }), " log4j-2.17 추적 시 지정한 appender만 수집하는 옵션 사용 중단"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "java-agent-v2229-2024년-03월-15일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/java/java-2_2_29",
          children: "Java Agent v2.2.29"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 03월 15일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " jboss-logging-3.3 로그 수집 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("code", {
            children: "com.mysql.cj.jdbc.ClientPreparedStatement.executeBatchInternal"
          }), " 메소드 사용 시 SQL 데이터 수집 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Deprecated",
            children: "Deprecated"
          }), " ", (0,jsx_runtime.jsx)("code", {
            children: "env"
          }), "의 ", (0,jsx_runtime.jsx)("b", {
            children: "HOSTNAME"
          }), " 데이터 수집 중단"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _import_agent_java_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_java_createMdxContent, {
      ...props
    })
  }) : _import_agent_java_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent/_import-agent-php.mdx


const _import_agent_php_frontMatter = {};
const _import_agent_php_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_agent_php_toc = [{
  "value": "<code class=\"changelog-service\"><a>PHP Agent v2.7.0</a></code> <code class=\"changelog-date\">2024년 01월 10일</code>",
  "id": "php-agent-v270-2024년-01월-10일",
  "level": 4
}];
function _import_agent_php_createMdxContent(props) {
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
      id: "php-agent-v270-2024년-01월-10일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/php/php-2_7_0",
          children: "PHP Agent v2.7.0"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 01월 10일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " PHP 8.3 지원"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 멀티 트랜잭션 추적에서 Trace context(W3C) 지원"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _import_agent_php_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_php_createMdxContent, {
      ...props
    })
  }) : _import_agent_php_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent/_import-agent-python.mdx


const _import_agent_python_frontMatter = {};
const _import_agent_python_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_agent_python_toc = [{
  "value": "<code class=\"changelog-service\"><a>Python Agent v1.6.2</a></code> <code class=\"changelog-date\">2024년 03월 29일</code>",
  "id": "python-agent-v162-2024년-03월-29일",
  "level": 4
}];
function _import_agent_python_createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h4, {
      id: "python-agent-v162-2024년-03월-29일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/python/python-1_6_2",
          children: "Python Agent v1.6.2"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 03월 29일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)("code", {
          children: "exit_with_parent_process_enabled"
        }), " 옵션 추가"]
      }), "\n"]
    })]
  });
}
function _import_agent_python_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_python_createMdxContent, {
      ...props
    })
  }) : _import_agent_python_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent/_import-agent-nodejs.mdx


const _import_agent_nodejs_frontMatter = {};
const _import_agent_nodejs_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_agent_nodejs_toc = [{
  "value": "<code class=\"changelog-service\"><a>Node.js Agent v0.4.86</a></code> <code class=\"changelog-date\">2024년 01월 04일</code>",
  "id": "nodejs-agent-v0486-2024년-01월-04일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Node.js Agent v0.4.90</a></code> <code class=\"changelog-date\">2024년 02월 05일</code>",
  "id": "nodejs-agent-v0490-2024년-02월-05일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Node.js Agent v0.4.94</a></code> <code class=\"changelog-date\">2024년 03월 07일</code>",
  "id": "nodejs-agent-v0494-2024년-03월-07일",
  "level": 4
}];
function _import_agent_nodejs_createMdxContent(props) {
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
      id: "nodejs-agent-v0486-2024년-01월-04일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/nodejs/nodejs-0_4_86",
          children: "Node.js Agent v0.4.86"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 01월 04일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 에이전트 옵션 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "nodejs-agent-v0490-2024년-02월-05일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/nodejs/nodejs-0_4_90",
          children: "Node.js Agent v0.4.90"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 02월 05일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 에이전트 설정 옵션 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "nodejs-agent-v0494-2024년-03월-07일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/nodejs/nodejs-0_4_94",
          children: "Node.js Agent v0.4.94"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 03월 07일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("a", {
            href: "http://socket.io",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "socket.io"
          }), " 모니터링 모듈 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 에이전트 설정 옵션 추가"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _import_agent_nodejs_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_nodejs_createMdxContent, {
      ...props
    })
  }) : _import_agent_nodejs_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent/_import-agent-golang.mdx


const _import_agent_golang_frontMatter = {};
const _import_agent_golang_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_agent_golang_toc = [{
  "value": "<code class=\"changelog-service\"><a>Go Agent v0.3.0</a></code> <code class=\"changelog-date\">2024년 01월 10일</code>",
  "id": "go-agent-v030-2024년-01월-10일",
  "level": 4
}];
function _import_agent_golang_createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h4, {
      id: "go-agent-v030-2024년-01월-10일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/golang/golang-0_3_0",
          children: "Go Agent v0.3.0"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 01월 10일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 멀티 트랜잭션 추적에서 Trace context(W3C) 지원"]
      }), "\n"]
    })]
  });
}
function _import_agent_golang_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_golang_createMdxContent, {
      ...props
    })
  }) : _import_agent_golang_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-service/_import-service-Server.mdx


const _import_service_Server_frontMatter = {};
const _import_service_Server_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_service_Server_toc = [];
function _import_service_Server_createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _import_service_Server_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Changed",
          children: "Changed"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_log",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_logSetting",
          className: "uitext"
        }), " 메뉴에서 에이전트 설정 및 실행 스크립트의 ", (0,jsx_runtime.jsx)("code", {
          children: "encoding"
        }), " 항목을 설정된 언어에 따라 다르게 표시하도록 수정 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-2_0_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 2.0.0​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AIX"
        }), " 운영체제에 대한 에이전트 설치 패키지 및 안내 제공 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-2_2_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 2.2.0​"
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
          children: "서버 목록"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_serverDetail",
          className: "uitext"
        }), " 메뉴의 화면 오른쪽 위에 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "groupby",
          className: "uitext"
        }), " 버튼을 ", (0,jsx_runtime.jsx)("b", {
          children: "알림 설정"
        }), " 권한을 소유한 멤버도 이용할 수 있도록 수정 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-2_3_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 2.3.7​"
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
          sid: "side_eventSetting",
          className: "uitext"
        }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "sm_log_event_tab",
          className: "uitext"
        }), " 탭에서 수신자 태그 설정 기능 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-2_3_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 2.3.0​"
            })
          })
        })]
      }), "\n"]
    }), "\n"]
  });
}
function _import_service_Server_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_service_Server_createMdxContent, {
      ...props
    })
  }) : _import_service_Server_createMdxContent(props);
}
function _import_service_Server_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent/_import-agent-server.mdx


const _import_agent_server_frontMatter = {};
const _import_agent_server_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_agent_server_toc = [{
  "value": "<code class=\"changelog-service\"><a>Server Agent v2.5.2</a></code> <code class=\"changelog-date\">2024년 02월 13일</code>",
  "id": "server-agent-v252-2024년-02월-13일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Server Agent v2.5.4</a></code> <code class=\"changelog-date\">2024년 03월 11일</code>",
  "id": "server-agent-v254-2024년-03월-11일",
  "level": 4
}];
function _import_agent_server_createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h4, {
      id: "server-agent-v252-2024년-02월-13일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/server/server-2_5_2",
          children: "Server Agent v2.5.2"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 02월 13일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "New",
          children: "New"
        }), " 윈도우 운영체제의 이벤트 로그 중 원하는 조건에 부합하는 건을 와탭 로그로 수집 가능"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "server-agent-v254-2024년-03월-11일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/server/server-2_5_4",
          children: "Server Agent v2.5.4"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 03월 11일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "New",
          children: "New"
        }), " 서버 시간 동기화 명령인 ", (0,jsx_runtime.jsx)("code", {
          children: "ntpq -p"
        }), " 결과를 통해 시계열로 모니터링하는 기능 추가"]
      }), "\n"]
    })]
  });
}
function _import_agent_server_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_server_createMdxContent, {
      ...props
    })
  }) : _import_agent_server_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-service/_import-service-Kubernetes.mdx


const _import_service_Kubernetes_frontMatter = {};
const _import_service_Kubernetes_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*- <code class="Changed">Changed</code> 오브젝트 매니페스트 지원 마스터 에이전트 버전 <b>1.5.2</b>로 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_1_x"><code class='changelog-service'>Service 2.1.3​</code></a></code>대시보드​

- <code class="Changed">Changed</code> <Cmdname sid="side_containerMap" className="uitext" /> 메뉴의 요약 보기 화면에서 현재 로그(Stdout) 조회 시 컨테이너 id를 컨테이너 이름으로 표시하도록 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="side_management" className="uitext" /> &gt; <Cmdname sid="agentInstall" className="uitext" /> 메뉴의 안내 문구 개선 <code class='changelog-service'><a href="../release-notes/service/service-2_1_x"><code class='changelog-service'>Service 2.1.2​</code></a></code>*/
/*#### 리소스​

- <code class="Changed">Changed</code> <Cmdname sid="side_clusterOverview" className="uitext" /> 메뉴에 <span class="uitext">Total Capacity CPU</span>(노드 총 CPU), <span class="uitext">Total Capacity Memory</span>(노드 총 Memory) 위젯 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="side_perfSummary" className="uitext" /> 메뉴에 <Cmdname sid="TTL07432" className="uitext" />와 <Cmdname sid="TTL07433" className="uitext" />, <Cmdname sid="TTL07434" className="uitext" /> 위젯 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="side_nodeList" className="uitext" /> 메뉴에서 컬럼 분류 및 위치 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_containerImages" className="uitext" /> 메뉴에 지표 추가 - <b>Total Container CPU</b>, <b>Total Container Memory</b> <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_nodeList" className="uitext" /> 메뉴에 지표 추가 - <b>beta.kubernetes.io/instance-type</b> <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_clusterOverview" className="uitext" /> 메뉴에 <b>Service</b>, <b>Ingress</b>, <b>Job</b>, <b>CronJob</b> 오브젝트 목록 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_containerList" className="uitext" /> 메뉴에서 <span class="uitext">Node</span> 컬럼 항목을 선택하면 해당 노드 목록이 필터링된 <Cmdname sid="side_nodeList" className="uitext" /> 메뉴로 이동하는 기능 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="resource" className="uitext" /> 메뉴 하위로 다음의 메뉴 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <Cmdname sid="podList" className="uitext" />: Pod 목록 및 상세 정보 제공
- <Cmdname sid="containerizedAppList" className="uitext" />: 컨테이너화된 애플리케이션 목록 및 상세 정보 제공
- <Cmdname sid="containerImages" className="uitext" />: 사용중인 이미지 목록 제공

- <code class="Feature">Feature</code> 다음 메뉴에서 화면 상단의 상태 아이콘을 선택하면, 선택한 상태의 리소스만 필터링되는 기능 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <Cmdname sid="resource" className="uitext" /> &gt; <Cmdname sid="node_list" className="uitext" />
- <Cmdname sid="resource" className="uitext" /> &gt; <Cmdname sid="container_list" className="uitext" />
- <Cmdname sid="resource" className="uitext" /> &gt; <Cmdname sid="podList" className="uitext" />

- <code class="Changed">Changed</code> <Cmdname sid="resource" className="uitext" /> &gt; <Cmdname sid="kube_master" className="uitext" /> 메뉴 이름을 <Cmdname sid="side_objectManifest" className="uitext" />로 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_1_x"><code class='changelog-service'>Service 2.1.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="resource" className="uitext" /> &gt; <Cmdname sid="side_objectManifest" className="uitext" /> 메뉴에서 과거 오브젝트 매니페스트를 조회/비교할 수 있도록 개선(Kubernetes 에이전트 v1.5.0 이상 지원) <code class='changelog-service'><a href="../release-notes/service/service-2_1_x"><code class='changelog-service'>Service 2.1.0​</code></a></code>*/
/*

#### 애플리케이션​

- <code class="Changed">Changed</code> <Cmdname sid="multi_hitmap" className="uitext" />, <Cmdname sid="side_customHitmap" className="uitext" /> 메뉴의 일본어 메뉴 이름 수정 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="container" className="uitext" /> &gt; <Cmdname sid="side_containerImages" className="uitext" /> 메뉴의 컬럼 항목 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="side_dashboard" className="uitext" /> &gt; <Cmdname sid="side_containerMap" className="uitext" /> 메뉴에서 블록의 크기가 작은 경우 UI 표시 수정 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>*/
/*#### 기타

- <code class="Changed">Changed</code> <Cmdname sid="side_analysis" className="uitext" /> &gt; <Cmdname sid="pod_init_perform" className="uitext" /> 메뉴 개편 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Feature">Feature</code> 연계 등록된 프로젝트가 있을 경우 <Cmdname sid="TTL06209" className="uitext" /> &gt; <Cmdname sid="table_view" className="uitext" />에서 SQL 대상 서버 정보 및 HTTPURLConnection 정보에 대해 <Cmdname sid="TTL07046" className="uitext" /> 뷰 제공 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Feature">Feature</code> <span class="uitext">관리</span> 메뉴 하위로 <span class="uitext">연계 프로젝트 관리</span> 메뉴 추가: 연계 프로젝트 등록, 조회, 삭제 기능 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Changed">Changed</code> 오브젝트 매니페스트 지원 마스터 에이전트 버전 <b>1.5.2</b>로 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_1_x"><code class='changelog-service'>Service 2.1.3​</code></a></code>대시보드​

- <code class="Changed">Changed</code> <Cmdname sid="side_analysis" className="uitext" /> &gt; <Cmdname sid="side_podInitPerf" className="uitext" /> 메뉴의 배너에 사용자 가이드 링크 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.1​</code></a></code>

- <code class="Feature">Feature</code> Pod 카테고리에 <Cmdname sid="ITM06172" className="uitext" /> 옵션 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_workload" className="uitext" /> &gt; <Cmdname sid="side_containerImages" className="uitext" /> 메뉴의 화면 위에 이미지의 총 개수 표시 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>

- <code class="Feature">Feature</code> 쿠버네티스 클러스터 프로젝트의 <Cmdname sid="side_cluster" className="uitext" /> &gt; <Cmdname sid="side_nodeList" className="uitext" /> 메뉴에서 노드 정보 컬럼 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_integratedContainerMap" className="uitext" /> 메뉴에서 <Cmdname sid="groupby" className="uitext" /> 옵션 항목으로 <span class="uitext">WhatapProject</span> 추가: 와탭 프로젝트별 그룹화 기능 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_containerMap" className="uitext" /> 메뉴의 <Cmdname sid="display_detail" className="uitext" />에서 대상(컨테이너/파드) 목록 중에 선택한 것만 볼 수 있는 <Cmdname sid="checked_only" className="uitext" /> 옵션 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_workload" className="uitext" /> &gt; <span class="uitext">컨테이너 애플리케이션 목록</span> 메뉴의 애플리케이션 상세 정보에서 <Cmdname sid="TTL06891" className="uitext" /> 탭 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_dashboard" className="uitext" /> &gt; <Cmdname sid="side_containerMap" className="uitext" /> 메뉴에서 선택한 카테고리의 Pod Phase 정보 및 Phase 안내 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_dashboard" className="uitext" /> &gt; <span class="uitext">컨테이너 맵</span> 메뉴에서 목록 메뉴로 이동하는 링크 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_analysis" className="uitext" /> &gt; <Cmdname sid="pod_init_perform" className="uitext" /> 메뉴 개편 및 메뉴 이름을 <Cmdname sid="side_podInitPerf" className="uitext" />으로 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>

- <code class="Feature">Feature</code> <span class="uitext">관리</span> &gt; <Cmdname sid="agentInstall" className="uitext" /> 메뉴에서 Helm을 이용한 에이전트 설치 안내 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.2​</code></a></code>*/


const _import_service_Kubernetes_toc = [{
  "value": "로그​",
  "id": "로그",
  "level": 4
}];
function _import_service_Kubernetes_createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, UI} = _components;
  if (!Cmdname) _import_service_Kubernetes_missingMdxReference("Cmdname", true);
  if (!UI) _import_service_Kubernetes_missingMdxReference("UI", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "pod_init_perform",
            className: "uitext"
          }), " 메뉴 개편 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 연계 등록된 프로젝트가 있을 경우 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "table_view",
            className: "uitext"
          }), "에서 SQL 대상 서버 정보 및 HTTPURLConnection 정보에 대해 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL07046",
            className: "uitext"
          }), " 뷰 제공 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_management",
            className: "uitext"
          }), " 메뉴 하위로 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_correlatedProjectManagement",
            className: "uitext"
          }), " 메뉴 추가: 연계 프로젝트 등록, 조회, 삭제 기능 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_clusterOverview",
            className: "uitext"
          }), " 메뉴에 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Total Capacity CPU"
          }), "(노드 총 CPU), ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Total Capacity Memory"
          }), "(노드 총 Memory) 위젯 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_perfSummary",
            className: "uitext"
          }), " 메뉴에 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL07432",
            className: "uitext"
          }), "와 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL07433",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL07434",
            className: "uitext"
          }), " 위젯 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_containerImages",
            className: "uitext"
          }), " 메뉴에 지표 추가 - ", (0,jsx_runtime.jsx)("b", {
            children: "Total Container CPU"
          }), ", ", (0,jsx_runtime.jsx)("b", {
            children: "Total Container Memory"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_nodeList",
            className: "uitext"
          }), " 메뉴에 지표 추가 - ", (0,jsx_runtime.jsx)("b", {
            children: "beta.kubernetes.io/instance-type"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_clusterOverview",
            className: "uitext"
          }), " 메뉴에 ", (0,jsx_runtime.jsx)("b", {
            children: "Service"
          }), ", ", (0,jsx_runtime.jsx)("b", {
            children: "Ingress"
          }), ", ", (0,jsx_runtime.jsx)("b", {
            children: "Job"
          }), ", ", (0,jsx_runtime.jsx)("b", {
            children: "CronJob"
          }), " 오브젝트 목록 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_containerList",
            className: "uitext"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Node"
          }), " 컬럼 항목을 선택하면 해당 노드 목록이 필터링된 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_nodeList",
            className: "uitext"
          }), " 메뉴로 이동하는 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_resource",
            className: "uitext"
          }), " 메뉴 하위로 다음의 메뉴 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "podList",
              className: "uitext"
            }), ": Pod 목록 및 상세 정보 제공"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "containerizedAppList",
              className: "uitext"
            }), ": 컨테이너화된 애플리케이션 목록 및 상세 정보 제공"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "containerImages",
              className: "uitext"
            }), ": 사용중인 이미지 목록 제공"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 다음 메뉴에서 화면 상단의 상태 아이콘을 선택하면, 선택한 상태의 리소스만 필터링되는 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "resource",
              className: "uitext"
            }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "node_list",
              className: "uitext"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "resource",
              className: "uitext"
            }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "container_list",
              className: "uitext"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "resource",
              className: "uitext"
            }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "podList",
              className: "uitext"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_resource",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "kube_master",
            className: "uitext"
          }), " 메뉴 이름을 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_objectManifest",
            className: "uitext"
          }), "로 변경 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_1_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.1.0​"
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
            sid: "side_resource",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_objectManifest",
            className: "uitext"
          }), " 메뉴에서 과거 오브젝트 매니페스트를 조회/비교할 수 있도록 개선(Kubernetes 에이전트 v1.5.0 이상 지원) ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_1_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.1.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(UI, {
            children: "오브젝트 매니페스트"
          }), " 지원 마스터 에이전트 버전 ", (0,jsx_runtime.jsx)("b", {
            children: "1.5.2"
          }), "로 변경 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_1_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.1.3​"
              })
            })
          }), "대시보드​"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_kubeApiserverDashboard",
            className: "uitext"
          }), " 메뉴 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_kubernetesAgentList",
            className: "uitext"
          }), " 메뉴 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_cluster",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_objectManifest",
            className: "uitext"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "compare",
            className: "uitext"
          }), " 기능의 UI 수정 및 목차 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "container",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_containerList",
            className: "uitext"
          }), " 메뉴에서 비교하기 기능 이용 시 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "kube_default",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "cpu",
            className: "uitext"
          }), " 탭에 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Container CPU Usage"
          }), " 차트 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
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
          }), " 메뉴에서 레플리케이션 컨트롤러(ReplicationController) 그룹화 옵션 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_kubeApiserverMetricsSearch",
            className: "uitext"
          }), " 메뉴 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_deploymentList",
            className: "uitext"
          }), " 메뉴 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Pod 카테고리에 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "ITM06172",
            className: "uitext"
          }), " 옵션 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
            sid: "side_workload",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_containerImages",
            className: "uitext"
          }), " 메뉴의 화면 위에 이미지의 총 개수 표시 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 쿠버네티스 클러스터 프로젝트의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_cluster",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_nodeList",
            className: "uitext"
          }), " 메뉴에서 노드 정보 컬럼 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "groupby",
            className: "uitext"
          }), " 옵션 항목으로 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "WhatapProject"
          }), " 추가: 와탭 프로젝트별 그룹화 기능 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
          }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "display_detail",
            className: "uitext"
          }), "에서 대상(컨테이너/파드) 목록 중에 선택한 것만 볼 수 있는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "checked_only",
            className: "uitext"
          }), " 옵션 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
            sid: "side_workload",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_containerizedAppList",
            className: "uitext"
          }), " 메뉴의 애플리케이션 상세 정보에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06891",
            className: "uitext"
          }), " 탭 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
          }), " 메뉴에서 선택한 카테고리의 Pod Phase 정보 및 Phase 안내 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
          }), " 메뉴에서 목록 메뉴로 이동하는 링크 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "pod_init_perform",
            className: "uitext"
          }), " 메뉴 개편 및 메뉴 이름을 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_podInitPerf",
            className: "uitext"
          }), "으로 변경 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
            sid: "side_management",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "agentInstall",
            className: "uitext"
          }), " 메뉴에서 Helm을 이용한 에이전트 설치 안내 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.2​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "로그",
      children: "로그​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_kubeEventList",
            className: "uitext"
          }), ": 프로젝트 단위로 쿠버네티스 이벤트에 대한 조회와 검색 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_whatapEventList",
            className: "uitext"
          }), ": ", (0,jsx_runtime.jsx)("code", {
            children: "#WhatapEvent"
          }), " 카테고리의 로그 데이터 조회 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
          }), " 메뉴에서 복합 메트릭스 이벤트 템플릿 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.5​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n"]
  });
}
function _import_service_Kubernetes_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_service_Kubernetes_createMdxContent, {
      ...props
    })
  }) : _import_service_Kubernetes_createMdxContent(props);
}
function _import_service_Kubernetes_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent/_import-agent-k8s.mdx


const _import_agent_k8s_frontMatter = {};
const _import_agent_k8s_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_agent_k8s_toc = [{
  "value": "<code class=\"changelog-service\"><a>Kubernetes Agent v1.5.6</a></code> <code class=\"changelog-date\">2024년 02월 23일</code>",
  "id": "kubernetes-agent-v156-2024년-02월-23일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Kubernetes Agent v1.5.7</a></code> <code class=\"changelog-date\">2024년 03월 07일</code>",
  "id": "kubernetes-agent-v157-2024년-03월-07일",
  "level": 4
}];
function _import_agent_k8s_createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h4, {
      id: "kubernetes-agent-v156-2024년-02월-23일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/k8s/k8s-1_5_6",
          children: "Kubernetes Agent v1.5.6"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 02월 23일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "uitext",
          children: "컨테이너"
        }), " > ", (0,jsx_runtime.jsx)("span", {
          class: "uitext",
          children: "컨테이너 볼륨"
        }), " 메뉴에서 MountType 속성을 조회하는 기능 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "kubernetes-agent-v157-2024년-03월-07일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/k8s/k8s-1_5_7",
          children: "Kubernetes Agent v1.5.7"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 03월 07일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " whatap-node-helper는 노드 디스크 및 컨테이너의 이미지, 성능 데이터를 수집합니다. 해당 컨테이너의 로깅 및 설정 기능을 추가해 디버깅과 문제가 발생할 경우 해당 기능에 대한 옵션 처리가 가능합니다."]
      }), "\n"]
    })]
  });
}
function _import_agent_k8s_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_k8s_createMdxContent, {
      ...props
    })
  }) : _import_agent_k8s_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-service/_import-service-Database.mdx


const _import_service_Database_frontMatter = {};
const _import_service_Database_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*#### 공통​*/
/*- <code class="Changed">Changed</code> <Cmdname sid="side_dashboard" className="uitext" /> &gt; <Cmdname sid="side_multiInstance" className="uitext" /> 메뉴의 대시보드에서 마우스 우클릭으로 표시되는 위젯 선택 목록의 스타일 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>*/
/*- <code class="Changed">Changed</code> <Cmdname sid="side_dashboard" className="uitext" /> &gt; <Cmdname sid="side_multiInstance" className="uitext" /> 및 <Cmdname sid="flexboard" className="uitext" /> 메뉴에서 <span class="uitext">SQL Elapse Map</span> 위젯을 통해 <span class="uitext">Query List</span> 창을 열었을 때, 테이블의 컬럼 순서 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>*/
/*#### Database

- <code class="Changed">Changed</code> <Cmdname sid="side_dashboard" className="uitext" /> &gt; <Cmdname sid="side_multiInstance" className="uitext" /> 및 <Cmdname sid="flexboard" className="uitext" /> 메뉴에서 <span class="uitext">SQL Elapse Map</span> 위젯을 통해 <span class="uitext">Query List</span> 창을 열었을 때, 테이블의 컬럼 순서 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_analysis" className="uitext" /> &gt; <Cmdname sid="side_dbLockTree" className="uitext" /> 메뉴에서 다음 기능 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_1_x"><code class='changelog-service'>Service 2.1.0​</code></a></code>

- <code class="Changed">Changed</code> 프로젝트 V1 지원 종료 관련 안내 팝업창의 날짜 변경 <code class='changelog-service'><a href="../release-notes/service/service-2_1_x"><code class='changelog-service'>Service 2.1.1​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="side_dashboard" className="uitext" /> &gt; <Cmdname sid="side_dbMonitoring" className="uitext" /> 메뉴에서 기본 프리셋(<span class="uitext">Default(rds)</span>, <span class="uitext">Default(xos)</span>) 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="side_dashboard" className="uitext" /> &gt; <Cmdname sid="side_dbMonitoring" className="uitext" /> / <Cmdname sid="side_multiInstance" className="uitext" /> 메뉴에서 <span class="uitext">Lock Wait Sessions</span> 위젯의 차트를 클릭하면 화면 아래 테이블의 <Cmdname sid="side_dbLockTree" className="uitext" /> 탭이 활성화되도록 수정 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>

- <code class="Feature">Feature</code> 다음 메뉴 경로에서 <Cmdname sid="side_dbLockTree" className="uitext" /> 테이블의 컬럼을 클릭하면 세션 상세 창을 표시하는 기능 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>

- <Cmdname sid="dashboard" className="uitext" /> &gt; <Cmdname sid="instance_monitoring" className="uitext" />
- <Cmdname sid="dashboard" className="uitext" /> &gt; <Cmdname sid="multi_instance_monitoring" className="uitext" />
- <Cmdname sid="analysis" className="uitext" /> &gt; <Cmdname sid="lock_tree" className="uitext" />*/
/*#### Database <code class="my">V2</code>

- <code class="Changed">Changed</code> <Cmdname sid="side_dashboard" className="uitext" /> &gt; <Cmdname sid="side_dbMonitoring" className="uitext" /> 메뉴에서 기본 프리셋(<span class="uitext">Default(rds)</span>, <span class="uitext">Default(xos)</span>) 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>

- <code class="Changed">Changed</code> <Cmdname sid="side_dashboard" className="uitext" /> &gt; <Cmdname sid="side_dbMonitoring" className="uitext" /> / <Cmdname sid="side_multiInstance" className="uitext" /> 메뉴에서 <span class="uitext">Lock Wait Sessions</span> 위젯의 차트를 클릭하면 화면 아래 테이블의 <Cmdname sid="side_dbLockTree" className="uitext" /> 탭이 활성화되도록 수정 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>

- <code class="Feature">Feature</code> 다음 메뉴 경로에서 <Cmdname sid="side_dbLockTree" className="uitext" /> 테이블의 컬럼을 클릭하면 세션 상세 창을 표시하는 기능 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>*/
/*#### PostgreSQL <code class="my">V2</code>

- <code class="Feature">Feature</code> <Cmdname sid="side_analysis" className="uitext" /> &gt; <Cmdname sid="side_dbParameter" className="uitext" /> 메뉴에서 <span class="uitext">Value</span> 컬럼 표기 시 일부 값에 단위 표기 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_2_x"><code class='changelog-service'>Service 2.2.0​</code></a></code>*/
/*#### PostgreSQL, MySQL​

- <code class="Feature">Feature</code> 대시보드의 <span class="uitext">SQL Elapse Map</span> 및 <span class="uitext">Slow Query</span> 위젯에서 변경한 Y축 값을 저장하는 기능 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>

- <code class="Feature">Feature</code> <span class="uitext">Default(xos)</span>, <span class="uitext">Default(rds)</span> 프리셋 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>

- <code class="Feature">Feature</code> <Cmdname sid="side_dashboard" className="uitext" /> &gt; <Cmdname sid="side_multiInstance" className="uitext" /> 메뉴의 기능 개편 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>*/
/*#### PostgreSQL​

- <code class="Feature">Feature</code> <Cmdname sid="side_reportStat" className="uitext" /> &gt; <Cmdname sid="side_pgStat" className="uitext" /> 메뉴에서 다중 필터 선택 기능 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>

- <code class="Feature">Feature</code> <span class="uitext">관리</span> &gt; <Cmdname sid="agentInstall" className="uitext" /> 메뉴의 디자인 개선 및 설치 안내 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>*/
/*#### MySQL​

- <code class="Feature">Feature</code> <Cmdname sid="side_reportStat" className="uitext" /> &gt; <Cmdname sid="side_mysqlStat" className="uitext" /> 메뉴에서 다중 필터 선택 기능 추가 <code class='changelog-service'><a href="../release-notes/service/service-2_3_x"><code class='changelog-service'>Service 2.3.0​</code></a></code>*/


const _import_service_Database_toc = [{
  "value": "PostgreSQL / MySQL​",
  "id": "postgresql--mysql",
  "level": 4
}, {
  "value": "PosgreSQL",
  "id": "posgresql",
  "level": 4
}, {
  "value": "MySQL",
  "id": "mysql",
  "level": 4
}, {
  "value": "Redis​",
  "id": "redis",
  "level": 4
}, {
  "value": "MongoDB​",
  "id": "mongodb",
  "level": 4
}];
function _import_service_Database_createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _import_service_Database_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbLockTree",
            className: "uitext"
          }), " 메뉴에서 다음 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_1_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.1.0​"
              })
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)("span", {
              class: "uitext",
              children: "Lock Wait Sessions"
            }), " 위젯의 오른쪽 위에 조회 시간 단위 및 최대값 표기 태그 추가"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "시간 조회 범위가 1달 이전인 상태에서 3시간 이내의 데이터를 조회할 경우 조회 불가 메시지 표시 기능 추가"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " 프로젝트 V1 지원 종료 관련 안내 팝업창의 날짜 변경 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_1_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.1.1​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbMonitoring",
            className: "uitext"
          }), " 메뉴에서 기본 프리셋(", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Default(rds)"
          }), ", ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Default(xos)"
          }), ") 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbMonitoring",
            className: "uitext"
          }), " / ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_multiInstance",
            className: "uitext"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Lock Wait Sessions"
          }), " 위젯의 차트를 클릭하면 화면 아래 테이블의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbLockTree",
            className: "uitext"
          }), " 탭이 활성화되도록 수정 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 다음 메뉴 경로에서 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbLockTree",
            className: "uitext"
          }), " 테이블의 컬럼을 클릭하면 세션 상세 창을 표시하는 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "dashboard",
              className: "uitext"
            }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "instance_monitoring",
              className: "uitext"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "dashboard",
              className: "uitext"
            }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "multi_instance_monitoring",
              className: "uitext"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "analysis",
              className: "uitext"
            }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "lock_tree",
              className: "uitext"
            })]
          }), "\n"]
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
            sid: "side_sectionDatabase",
            className: "uitext"
          }), " 탭에서 에이전트 이벤트 원복 알림(", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "resolved_event_notification",
            className: "uitext"
          }), ") 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " XOS2 지표 대체 관련 안내 사항 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
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
            class: "uitext"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_agentUpdate",
            className: "uitext"
          }), " 메뉴 새로운 UI 적용 및 기능 개편 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_reportStat",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbSqlStat",
            className: "uitext"
          }), " 메뉴에서 쿼리(query)에 마우스 오버 시 쿼리 미리보기 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_management",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "agentInstall",
            className: "uitext"
          }), " 메뉴에서 DB 유저 파일 생성을 위한 명령어 입력 시 운영체제에 따른 고려 사항 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
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
            sid: "side_management",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "agent_list",
            className: "uitext"
          }), " 메뉴에서 데이터베이스 서버의 IP 주소를 표기하는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "db_ip",
            className: "uitext"
          }), " 컬럼 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "XOS"
          }), " 지표 변경(xos2 → xos)을 위한 데이터베이스 상품 서비스의 변경 사항 적용 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
            sid: "side_reportStat",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbSqlStat",
            className: "uitext"
          }), " 메뉴에서 다중 필터 선택 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
            sid: "session_detail",
            className: "uitext"
          }), " 창에 실시간/정지 조회 및 새로고침 버튼 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
            sid: "flexboard",
            className: "uitext"
          }), " 메뉴에서 액티브 세션 테이블 필터 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "postgresql--mysql",
      children: "PostgreSQL / MySQL​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_instanceList",
            className: "uitext"
          }), " 메뉴에서 에이전트 업데이트 안내 문구 변경 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 프로젝트에서 ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "V2"
          }), "를 지원하지 않는 에이전트 버전이 설치되어 있으면 에이전트 업데이트 안내 문구를 헤더에 표시하는 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 대시보드의 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SQL Elapse Map"
          }), " 및 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Slow Query"
          }), " 위젯에서 변경한 Y축 값을 저장하는 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
            children: "Default(xos)"
          }), ", ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Default(rds)"
          }), " 프리셋 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
            sid: "side_multiInstance",
            className: "uitext"
          }), " 메뉴의 기능 개편 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "posgresql",
      children: "PosgreSQL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 다음 메뉴 경로에서 ", (0,jsx_runtime.jsx)("b", {
            children: "column"
          }), ", ", (0,jsx_runtime.jsx)("b", {
            children: "index"
          }), " 구성을 확인할 수 있는 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_reportStat",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_pgStat",
            className: "uitext"
          }), " 메뉴에서 쿼리(query)에 마우스 오버 시 쿼리 미리보기 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbWaitAnalysis",
            className: "uitext"
          }), " 메뉴에서 기능 소개 모달 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbWaitAnalysis",
            className: "uitext"
          }), " 메뉴에서 에이전트 설정 방법 안내 모달 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbParameter",
            className: "uitext"
          }), " 메뉴에서 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Value"
          }), " 컬럼 표기 시 일부 값에 단위 표기 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
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
            sid: "side_reportStat",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_pgStat",
            className: "uitext"
          }), " 메뉴에서 다중 필터 선택 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
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
            sid: "side_management",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "agentInstall",
            className: "uitext"
          }), " 메뉴의 디자인 개선 및 설치 안내 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mysql",
      children: "MySQL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_reportStat",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbSize",
            className: "uitext"
          }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06572",
            className: "uitext"
          }), " 테이블에서 ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "TABLENAME"
          }), " 컬럼 항목을 클릭하면 ", (0,jsx_runtime.jsx)("b", {
            children: "column"
          }), ", ", (0,jsx_runtime.jsx)("b", {
            children: "index"
          }), " 구성을 확인할 수 있는 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " JSON 형식으로 Plan 조회 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
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
            sid: "side_reportStat",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_mysqlStat",
            className: "uitext"
          }), " 메뉴에서 쿼리(query)에 마우스 오버 시 쿼리 미리보기 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
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
            sid: "side_reportStat",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_mysqlStat",
            className: "uitext"
          }), " 메뉴에서 다중 필터 선택 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "redis",
      children: "Redis​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_management",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "agentInstall",
            className: "uitext"
          }), " 메뉴에서 Redis 버전에 따라 다른 ", (0,jsx_runtime.jsx)("em", {
            children: "uid.sh"
          }), " 실행 명령어에 대한 설명 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Redis"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "V2"
          }), " 서비스 시작 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "mongodb",
      children: "MongoDB​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_reportStat",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dbSize",
            className: "uitext"
          }), " 메뉴의 UI 변경 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "MongoDB"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "V2"
          }), " 서비스 시작 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _import_service_Database_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_service_Database_createMdxContent, {
      ...props
    })
  }) : _import_service_Database_createMdxContent(props);
}
function _import_service_Database_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent/_import-agent-dbx.mdx


const _import_agent_dbx_frontMatter = {};
const _import_agent_dbx_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*구성 수정 헤딩 뎁쓰 수정*/


const _import_agent_dbx_toc = [{
  "value": "<code class=\"changelog-service\"><a>DBX v1.6.18</a></code> <code class=\"changelog-date\">2024년 01월 25일</code>",
  "id": "dbx-v1618-2024년-01월-25일",
  "level": 4
}, {
  "value": "공통​",
  "id": "공통",
  "level": 5
}, {
  "value": "<code class=\"changelog-service\"><a>DBX v1.6.20</a></code> <code class=\"changelog-date\">2024년 02월 02일</code>",
  "id": "dbx-v1620-2024년-02월-02일",
  "level": 4
}, {
  "value": "공통​",
  "id": "공통-1",
  "level": 5
}, {
  "value": "Redis​",
  "id": "redis",
  "level": 5
}, {
  "value": "<code class=\"changelog-service\"><a>DBX v1.6.23</a></code> <code class=\"changelog-date\">2024년 02월 20일</code>",
  "id": "dbx-v1623-2024년-02월-20일",
  "level": 4
}, {
  "value": "MySQL​",
  "id": "mysql",
  "level": 5
}, {
  "value": "<code class=\"changelog-service\"><a>DBX v1.6.30</a></code> <code class=\"changelog-date\">2024년 02월 29일</code>",
  "id": "dbx-v1630-2024년-02월-29일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>DBX v1.6.33</a></code> <code class=\"changelog-date\">2024년 03월 13일</code>",
  "id": "dbx-v1633-2024년-03월-13일",
  "level": 4
}, {
  "value": "PostgreSQL​",
  "id": "postgresql",
  "level": 5
}, {
  "value": "<code class=\"changelog-service\"><a>DBX v1.6.35</a></code> <code class=\"changelog-date\">2024년 03월 15일</code>",
  "id": "dbx-v1635-2024년-03월-15일",
  "level": 4
}, {
  "value": "PostgreSQL​",
  "id": "postgresql-1",
  "level": 5
}, {
  "value": "<code class=\"changelog-service\"><a>DBX v1.7.0</a></code> <code class=\"changelog-date\">2024년 03월 25일</code>",
  "id": "dbx-v170-2024년-03월-25일",
  "level": 4
}, {
  "value": "MongoDB​",
  "id": "mongodb",
  "level": 5
}, {
  "value": "Redis​",
  "id": "redis-1",
  "level": 5
}];
function _import_agent_dbx_createMdxContent(props) {
  const _components = {
    h4: "h4",
    h5: "h5",
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "dbx-v1618-2024년-01월-25일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/db/dbx-1_6_18",
          children: "DBX v1.6.18"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 01월 25일"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "공통",
      children: "공통​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 데이터베이스 알림도 원복 메세지를 받을 수 있도록 ", (0,jsx_runtime.jsx)("code", {
          children: "uuid"
        }), ", ", (0,jsx_runtime.jsx)("code", {
          children: "statefulset"
        }), " 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "dbx-v1620-2024년-02월-02일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/db/dbx-1_6_20",
          children: "DBX v1.6.20"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 02월 02일"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "공통-1",
      children: "공통​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 데이터베이스 알람 원복을 위한 stateful 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "redis",
      children: "Redis​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " Redis autoscale 기능 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "dbx-v1623-2024년-02월-20일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/db/dbx-1_6_23",
          children: "DBX v1.6.23"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 02월 20일"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "mysql",
      children: "MySQL​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 테이블 레이아웃 실시간 조회 기능 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "dbx-v1630-2024년-02월-29일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/db/dbx-1_6_30",
          children: "DBX v1.6.30"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 02월 29일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 이벤트 해소 알림 기능 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "dbx-v1633-2024년-03월-13일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/db/dbx-1_6_33",
          children: "DBX v1.6.33"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 03월 13일"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "postgresql",
      children: "PostgreSQL​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 에이전트 설치 파일에 ", (0,jsx_runtime.jsx)("em", {
          children: "setup.sh"
        }), " 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "dbx-v1635-2024년-03월-15일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/db/dbx-1_6_35",
          children: "DBX v1.6.35"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 03월 15일"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "postgresql-1",
      children: "PostgreSQL​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 에이전트 설치 파일에 ", (0,jsx_runtime.jsx)("em", {
          children: "setup.bat"
        }), " 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "dbx-v170-2024년-03월-25일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/db/dbx-1_7_0",
          children: "DBX v1.7.0"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 03월 25일"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "mongodb",
      children: "MongoDB​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " MongoDB ", (0,jsx_runtime.jsx)("code", {
          class: "my",
          children: "V2"
        }), " 추가"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "redis-1",
      children: "Redis​"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " Redis ", (0,jsx_runtime.jsx)("code", {
          class: "my",
          children: "V2"
        }), " 추가"]
      }), "\n"]
    })]
  });
}
function _import_agent_dbx_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_dbx_createMdxContent, {
      ...props
    })
  }) : _import_agent_dbx_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-service/_import-service-Browser.mdx


const _import_service_Browser_frontMatter = {};
const _import_service_Browser_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*- <code class="Changed">Changed</code> 프로젝트의 사이드바 일본어 메뉴명 수정 <code class='changelog-service'><a href="../release-notes/service/service-2_0_x"><code class='changelog-service'>Service 2.0.0​</code></a></code>*/


const _import_service_Browser_toc = [];
function _import_service_Browser_createMdxContent(props) {
  const _components = {
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _import_service_Browser_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Changed",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_dashboard",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "브라우저 모니터링 대시보드"
          }), " 메뉴에서 조회 시간 기준, 페이지 로드 수가 가장 많은 국가를 지도 위젯에 기본 표시하도록 수정 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 다음 메뉴에서 사용자 ID를 기준으로 검색할 수 있도록 필터 항목 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_0_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.0.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " AJAX 히트맵 데이터에 네트워크 상태 관련 지표 추가: ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL07611",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL07612",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL07610",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Delivery Type"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
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
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_rumPageLoadHitmap",
            className: "uitext"
          }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_rumPageLoadDashboard",
            className: "uitext"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "detail",
            className: "uitext"
          }), " 창에서 리소스 데이터에 지표 추가: ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "status_code",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Delivery Type"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 페이지 로드 히트맵 데이터에 네트워크 상태 관련 지표 추가: ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL07611",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL07612",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL07610",
            className: "uitext"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_2_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.2.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 세션 분석"
            })
          }), " 기능 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 사용자 세션 로그를 검색할 수 있는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_userSessionEventSearch",
            className: "uitext"
          }), " 메뉴 추가 ", (0,jsx_runtime.jsx)("code", {
            class: "changelog-service",
            children: (0,jsx_runtime.jsx)("a", {
              href: "../release-notes/service/service-2_3_x",
              children: (0,jsx_runtime.jsx)("code", {
                class: "changelog-service",
                children: "Service 2.3.0​"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _import_service_Browser_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_service_Browser_createMdxContent, {
      ...props
    })
  }) : _import_service_Browser_createMdxContent(props);
}
function _import_service_Browser_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./crw-data/crwld-agent/_import-agent-browser.mdx


const _import_agent_browser_frontMatter = {};
const _import_agent_browser_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_agent_browser_toc = [{
  "value": "<code class=\"changelog-service\"><a>Browser Agent v1.3.4</a></code> <code class=\"changelog-date\">2024년 02월 19일</code>",
  "id": "browser-agent-v134-2024년-02월-19일",
  "level": 4
}, {
  "value": "<code class=\"changelog-service\"><a>Browser Agent v1.3.5</a></code> <code class=\"changelog-date\">2024년 03월 21일</code>",
  "id": "browser-agent-v135-2024년-03월-21일",
  "level": 4
}];
function _import_agent_browser_createMdxContent(props) {
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
      id: "browser-agent-v134-2024년-02월-19일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/browser/browser-1_3_4",
          children: "Browser Agent v1.3.4"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 02월 19일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 페이지 로드, AJAX 이벤트 발생 시 ", (0,jsx_runtime.jsx)("b", {
            children: "Network Information API"
          }), "의 다음 지표를 추가 수집"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 리소스 이벤트 발생 시 다음 지표를 추가 수집"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Content Security Policy(CSP) 에러 수집 기능 추가"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "browser-agent-v135-2024년-03월-21일",
      children: [(0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsx)("a", {
          href: "../release-notes/browser/browser-1_3_5",
          children: "Browser Agent v1.3.5"
        })
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024년 03월 21일"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 사용자 정의 이벤트 수집 인터페이스 추가"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " 클릭 이벤트 수집 옵션 추가"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _import_agent_browser_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_agent_browser_createMdxContent, {
      ...props
    })
  }) : _import_agent_browser_createMdxContent(props);
}


;// CONCATENATED MODULE: ./crw-data/crwld-service/_import-service-Network.mdx


const _import_service_Network_frontMatter = {};
const _import_service_Network_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_service_Network_toc = [];
function _import_service_Network_createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _import_service_Network_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "New",
          children: "New"
        }), " ", (0,jsx_runtime.jsx)("b", {
          children: "네트워크 성능 모니터링"
        }), "(", (0,jsx_runtime.jsx)("b", {
          children: "NPM"
        }), ") 서비스 시작 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-2_1_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 2.1.7​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Changed",
          children: "Changed"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_dashboard",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_npmDashboard",
          className: "uitext"
        }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_npmProgressTCP",
          className: "uitext"
        }), " 메뉴에서 실시간 조회 최근 5분만 가능하도록 변경 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-2_2_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 2.2.0​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 에이전트 설치 시 AWS의 리소스를 식별하기 위한 옵션 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-2_2_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 2.2.0​"
            })
          })
        })]
      }), "\n"]
    }), "\n"]
  });
}
function _import_service_Network_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_service_Network_createMdxContent, {
      ...props
    })
  }) : _import_service_Network_createMdxContent(props);
}
function _import_service_Network_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./crw-data/crwld-service/_import-service-Log.mdx


const _import_service_Log_frontMatter = {};
const _import_service_Log_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_service_Log_toc = [];
function _import_service_Log_createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _import_service_Log_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Feature",
          children: "Feature"
        }), " 에이전트 옵션이 설정된 경우 로그 레벨을 표시하는 색상 표시 기능 추가 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-2_0_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 2.0.0​"
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
        }), " 메뉴에서 실시간 로그 이벤트를 추가 또는 수정하면서 API 요청을 실패할 경우, 실패 원인을 메시지로 노출하도록 개선 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-2_0_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 2.0.0​"
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
        }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_logTail",
          className: "uitext"
        }), " 메뉴에서 로그 검색 필터 기능 개편 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-2_0_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 2.0.0​"
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
          sid: "side_logExplorer",
          className: "uitext"
        }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "filter",
          className: "uitext"
        }), " 목록에 없는 값을 직접 입력해 선택 가능 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-2_1_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 2.1.0​"
            })
          })
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("code", {
          class: "Changed",
          children: "Changed"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_log",
          className: "uitext"
        }), " 메뉴에서 테이블의 설정값을 해당 프로젝트의 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_logTail",
          className: "uitext"
        }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "log_search",
          className: "uitext"
        }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_logExplorer",
          className: "uitext"
        }), " 메뉴에서 모두 공유되도록 수정 ", (0,jsx_runtime.jsx)("code", {
          class: "changelog-service",
          children: (0,jsx_runtime.jsx)("a", {
            href: "../release-notes/service/service-2_2_x",
            children: (0,jsx_runtime.jsx)("code", {
              class: "changelog-service",
              children: "Service 2.2.0​"
            })
          })
        })]
      }), "\n"]
    }), "\n"]
  });
}
function _import_service_Log_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_service_Log_createMdxContent, {
      ...props
    })
  }) : _import_service_Log_createMdxContent(props);
}
function _import_service_Log_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./blog/2024-1q-summary.mdx


const _2024_1q_summary_frontMatter = {
	slug: '2024-1q-summary',
	title: '1분기 안내',
	authors: 'ysj',
	date: '2024-05-20T15:30',
	toc_max_heading_level: 2,
	tags: [
		'새로운 기능',
		2024
	],
	isTranslationMissing: false
};
const _2024_1q_summary_contentTitle = undefined;
const metadata = {
  "permalink": "/whatap-docs/blog/2024-1q-summary",
  "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-1q-summary.mdx",
  "source": "@site/blog/2024-1q-summary.mdx",
  "title": "1분기 안내",
  "description": "와탭의 2024년 1분기 서비스 신규 기능 및 주목할 만한 변경 사항 개요를 안내합니다. 와탭이 새롭게 제공하는 기능들을 한 눈에 살펴보세요.",
  "date": "2024-05-20T15:30:00.000Z",
  "tags": [
    {
      "inline": true,
      "label": "새로운 기능",
      "permalink": "/whatap-docs/blog/tags/새로운-기능"
    },
    {
      "inline": true,
      "label": "2024",
      "permalink": "/whatap-docs/blog/tags/2024"
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
    "slug": "2024-1q-summary",
    "title": "1분기 안내",
    "authors": "ysj",
    "date": "2024-05-20T15:30",
    "toc_max_heading_level": 2,
    "tags": [
      "새로운 기능",
      "2024"
    ],
    "isTranslationMissing": false
  },
  "unlisted": false,
  "prevItem": {
    "title": "2분기 안내",
    "permalink": "/whatap-docs/blog/2024-2q-summary"
  },
  "nextItem": {
    "title": "새로운 기능이란?",
    "permalink": "/whatap-docs/blog/index"
  }
};
const assets = {
"authorsImageUrls": [(__webpack_require__(82799)/* ["default"] */ .A)],
};

/*truncate*/
/*먼저 1분기 상품별 신규 기능 및 신규 상품 요약은 다음과 같습니다. 사이드 메뉴 개편 및 대시보드 고도화 작업이 이루어졌습니다.*/
/*요약은 다시 써야 함*/
/*그외에도 ***Top 30*** 섹션에 IP 필터 기능을 추가했고, <Cmdname sid="multi_transaction" className="uitext" /> 탭에서 프로잭트 선택 상태를 저장하는 등 트랜잭션 분석 시 편의성을 전반적으로 향상시켰습니다.*/
/*안정적으로 각 기능을 사용할 수 있도록 / 기존 문제 개선 및 다양한 안정화 작업을 진행했습니다.*/
/*<code class="New">New</code> `Go` 모니터링 상품 **정식 서비스** 시작 <code class='changelog-service'>Service 2.2.4​</code>*/
/*

뿐만 아니라 Deployment 기준으로 리소스 관계도 및 트레이스, 로그, 메트릭스와 같은 옵저버빌리티의 핵심 데이터를 한 눈에 확인할 수 있습니다.

클러스터 관리 효율성 향상*/
/*사용자가 웹 페이지를 탐색하는 방식을 이해할 수 있도록 돕습니다. 파악을 돕습니다.*/
/*## `AWSLog`

<div class='indentTab'>

import AWSLog_1q from "../crw-data/crwld-service/_import-service-AWSLog.mdx";

<AWSLog_1q />

</div> <br/>*/



















const _2024_1q_summary_toc = [{
  "value": "<code>공통</code>",
  "id": "공통",
  "level": 2
}, ...toc, {
  "value": "<code>Application</code>",
  "id": "application",
  "level": 2
}, ..._import_service_Application_toc, {
  "value": "<code>Java</code>",
  "id": "java",
  "level": 3
}, ..._import_agent_java_toc, {
  "value": "<code>PHP</code>",
  "id": "php",
  "level": 3
}, ..._import_agent_php_toc, {
  "value": "<code>Python</code>",
  "id": "python",
  "level": 3
}, ..._import_agent_python_toc, {
  "value": "<code>Node.js</code>",
  "id": "nodejs",
  "level": 3
}, ..._import_agent_nodejs_toc, {
  "value": "<code>Go</code>",
  "id": "go",
  "level": 3
}, ..._import_agent_golang_toc, {
  "value": "<code>Server</code>",
  "id": "server",
  "level": 2
}, ..._import_service_Server_toc, ..._import_agent_server_toc, {
  "value": "<code>Kubernetes</code>",
  "id": "kubernetes",
  "level": 2
}, ..._import_service_Kubernetes_toc, ..._import_agent_k8s_toc, {
  "value": "<code>Database</code>",
  "id": "database",
  "level": 2
}, ..._import_service_Database_toc, ..._import_agent_dbx_toc, {
  "value": "<code>Browser</code>",
  "id": "browser",
  "level": 2
}, ..._import_service_Browser_toc, ..._import_agent_browser_toc, {
  "value": "<code>Network</code>",
  "id": "network",
  "level": 2
}, ..._import_service_Network_toc, {
  "value": "<code>Log</code>",
  "id": "log",
  "level": 2
}, ..._import_service_Log_toc];
function _2024_1q_summary_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    strong: "strong",
    table: "table",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, Details, ImgLang, LinkImage} = _components;
  if (!Cmdname) _2024_1q_summary_missingMdxReference("Cmdname", true);
  if (!Details) _2024_1q_summary_missingMdxReference("Details", true);
  if (!ImgLang) _2024_1q_summary_missingMdxReference("ImgLang", true);
  if (!LinkImage) _2024_1q_summary_missingMdxReference("LinkImage", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "와탭의 2024년 1분기 서비스 신규 기능 및 주목할 만한 변경 사항 개요를 안내합니다. 와탭이 새롭게 제공하는 기능들을 한 눈에 살펴보세요."
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "changelog/changelog-new3.png",
      desc: "새로운 기능 sc"
    }), "\n", "\n", "\n", "\n", (0,jsx_runtime.jsxs)("div", {
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "사이드 메뉴"
            }), "가 개편되었습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["메트릭스 필드 중심의 사용자 경험을 강화한 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_eventSetting",
              className: "uitext"
            }), " ", (0,jsx_runtime.jsx)("code", {
              class: "newfunc",
              children: "New"
            }), " 기능을 새롭게 제공합니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SSO 계정 연동"
            }), " 기능이 추가되었습니다."]
          }), "\n"]
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
              sid: "side_statistics",
              className: "uitext"
            }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_agentsConfiguration",
              className: "uitext"
            }), " 메뉴 구조를 개선했습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_transaction_map",
              className: "uitext"
            }), "이 고도화되었습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Go"
            }), " 상품 베타 서비스를 종료하고 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "정식"
            }), " 서비스를 제공합니다."]
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
          children: ["Unix ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "AIX"
          }), " 에이전트 설치 패키지를 제공합니다."]
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
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "컨트롤 플레인 모니터링"
            }), "을 새롭게 제공합니다. 컨트롤 플레인 컴포넌트 중 kube-apiserver 모니터링을 위해 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_kubeApiserverDashboard",
              className: "uitext"
            }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_kubeApiserverMetricsSearch",
              className: "uitext"
            }), " 기능이 추가되었습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["기존의 Pod 초기화 성능 기능 및 마스터 메타 정보 기능을 개편해 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_podInitPerf",
              className: "uitext"
            }), "과 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_objectManifest",
              className: "uitext"
            }), " 기능을 제공합니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Deployment 기준으로 관련 정보를 조회할 수 있는 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_deploymentList",
              className: "uitext"
            }), ", 마스터 및 노드 에이전트 설치 현황을 확인할 수 있는 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_kubernetesAgentList",
              className: "uitext"
            }), " 기능이 추가되었습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["마스터 및 노드 에이전트 설치 시 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "Helm"
            }), " 차트 설치를 지원합니다."]
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
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "MongoDB"
            }), "와 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Redis"
            }), " 상품에서 차트 및 수집 기능을 강화한 새로운 ", (0,jsx_runtime.jsx)("code", {
              class: "my",
              children: "V2"
            }), " 서비스를 제공합니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["기존에 XOS와 XOS2로 나누어져 있던 지표를 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "XOS"
            }), "로 통합해 백분율 표기로 확인할 수 있도록 변경했습니다."]
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
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL07736",
            className: "uitext"
          }), " 기능을 새롭게 제공합니다."]
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
          }), "(Network Performance Monitoring) 상품이 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "정식"
          }), "으로 출시되었습니다."]
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
      children: ["와탭 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "공통"
      }), " 부분의 주목할 만한 신규 기능으로 사이드 메뉴 개편, SSO 계정 연동 기능 추가 및 새로운 이벤트 설정 기능을 소개합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["사용자 편의성 향상을 위해 5년 만에 와탭 모니터링의 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "사이드 메뉴"
      }), "가 새롭게 개편되었습니다. 와탭 서비스 이용에는 프로젝트 선택이 선행됩니다. 프로젝트 생성 및 선택 이후 동선을 편리하게 활용할 수 있도록 기존과 비교해 UI 혼잡도를 줄여 프로젝트 선택과 메뉴의 영역을 확보하는 구조로 개편되었습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["프로젝트 목록을 선택한 부분만 펼쳐서 확인할 수 있으며, 세로 영역을 확보해 보다 편하게 다양한 기능 메뉴를 조회할 수 있습니다. 또한 간단한 별 모양(", (0,jsx_runtime.jsx)(LinkImage, {
        img: "ic-star.svg",
        desc: "비교하기 아이콘"
      }), ") 아이콘 클릭으로 상품별 프로젝트 메뉴 내 자주 쓰는 기능들을 즐겨찾기 할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "release/release-main-ui.png",
      desc: "사이드 메뉴 개편 cl 분기 예시"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["또한 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSO 계정 연동 기능"
      }), "이 추가되었습니다. 클라우드 기반 사용자 계정 관리 및 접근 권한 관리 솔루션 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Okta"
      }), "와 와탭 모니터링을 연동할 수 있습니다. 조직 내에서 사용 중인 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Okta"
      }), " 계정을 이용해 와탭 서비스에 로그인 후 서비스를 이용할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "sso-check-sso-info.png",
      desc: "sso-info cl 분기 예시"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["새로운 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_eventSetting",
        className: "uitext"
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "newfunc",
        children: "New"
      }), " 기능은 필드(Field) 중심의 사용자 경험을 강화하여 카테고리보다 필드를 먼저 선택하는 방식으로 사용자가 인지하는 지표와 이벤트 설정의 불일치를 해소했습니다. 또한 상품에 적합한 기본 이벤트 템플릿을 제공해 보다 쉽게 경고 알림 이벤트를 설정할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "이벤트 v2 cl 분기 예시",
        src: (__webpack_require__(74118)/* ["default"] */ .A) + "",
        width: "800",
        height: "513"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음 개요 안내를 통해 2024년 1분기 공통 부분의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사이드 메뉴 개편에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.whatap.io/bbs/board.php?bo_table=blog&wr_id=214",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["SSO 계정 연동 기능에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.whatap.io/account/sso",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["새로운 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_eventSetting",
              className: "uitext"
            }), " ", (0,jsx_runtime.jsx)("code", {
              class: "newfunc",
              children: "New"
            }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.whatap.io/java/warning-notice-v2",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "application",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Application"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Application"
      }), " 상품군의 주목할 만한 신규 기능 및 변경 사항으로 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Go"
      }), " 상품의 정식 출시, ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_transaction_map",
        className: "uitext"
      }), "의 고도화, 그리고 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_statistics",
        className: "uitext"
      }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " 메뉴 구조의 개선을 소개합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Go"
      }), " 애플리케이션 모니터링이 베타 버전 종료 후 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "정식"
      }), " 서비스를 시작했습니다. 와탭의 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Go"
      }), " 애플리케이션 모니터링은 웹 프레임워크를 지원하고, Go Runtime 패키지의 정보를 지속적으로 수집합니다. 또한 MSA 환경에서 연계 추적을 통해 호출 관계를 수집합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_transaction_map",
        className: "uitext"
      }), "은 성능 테스트 또는 장애 상황 발생 시 단기간 트랜잭션별 현황을 상세히 확인할 수 있는 메뉴입니다. 다음과 같이 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_transaction_map",
        className: "uitext"
      }), " 고도화 작업이 이루어졌습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["기존 TX 트레이스 섹션을 제거한 대신 차트 드래그 시 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "TTL06209",
        className: "uitext"
      }), " 팝업 창을 통해 상세 정보를 확인할 수 있도록 구조를 개선했습니다. 또한 트레이스 분석 건수를 기존 100건에서 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1000"
      }), "건으로 확장해 이전보다 10배 많은 트레이스를 분석할 수 있게 되었습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["그외에도 한 화면에서 필터를 적용해 동작을 최소화하는 방향으로 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "필터"
      }), " 기능을 개선하였습니다. 예를 들어 트랜잭션 필터를 이용해 선택한 트랜잭션만 선별해 조회할 수 있습니다. 그리고 기존 실시간 최대 5분 뿐만 아니라 과거 시점 최대 10분까지 데이터를 조회할 수 있도록 변경해 전반적으로 편의성을 향상시켰습니다."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "changelog/changelog-app-tx-map.png",
      desc: "sc",
      className: "changelog-img"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_statistics",
        className: "uitext"
      }), "와 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " 메뉴의 경우 각 메뉴의 탭 메뉴 구성을 개별 하위 메뉴로 구성하는 등 동선과 안정성 향상을 위한 개선 작업이 이루어졌습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "통계 및 인스턴스 성능 모니터링 sc cl",
        src: (__webpack_require__(21959)/* ["default"] */ .A) + "",
        width: "1191",
        height: "665"
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 개요 안내를 통해 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Application"
      }), " 상품군의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_service_Application_MDXContent, {})]
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
      }), (0,jsx_runtime.jsx)(_import_agent_java_MDXContent, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "php",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "PHP"
        })
      }), (0,jsx_runtime.jsx)(_import_agent_php_MDXContent, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "python",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Python"
        })
      }), (0,jsx_runtime.jsx)(_import_agent_python_MDXContent, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "nodejs",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Node.js"
        })
      }), (0,jsx_runtime.jsx)(_import_agent_nodejs_MDXContent, {}), (0,jsx_runtime.jsx)(_components.h3, {
        id: "go",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Go"
        })
      }), (0,jsx_runtime.jsx)(_import_agent_golang_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "server",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Server"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Server"
      }), " 상품의 주목할 만한 신규 기능 및 변경 사항으로 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unix"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AIX"
      }), " 설치 패키지에 대해 소개합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이번 1분기에 새롭게 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unix"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AIX"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "에이전트 설치 패키지"
      }), "를 제공합니다. IBM이 개발한 AIX는 엔터프라이즈 서버에서 주로 사용됩니다. 확장성, 호환성, 엔터프라이즈 환경에서의 견고함을 위해 특별히 설계된 운영체제입니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭은 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "AIX 버전 6.1"
      }), " 이상을 지원합니다. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AIX"
      }), " 설치 패키지를 통해 해당 패키지를 다운로드 받은 후 실행하는 것만으로 간단하게 설치할 수 있습니다. 와탭 서버 모니터링을 통해 AIX 운영체제를 보다 효과적으로 관리하고 모니터링할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "AIX sc cl",
        src: (__webpack_require__(92587)/* ["default"] */ .A) + "",
        width: "790",
        height: "418"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 개요 안내를 통해 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Server"
      }), " 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_service_Server_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog2",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "에이전트 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_agent_server_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["AIX 설치에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.whatap.io/server/server-os/server-aix",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kubernetes",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Kubernetes"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Kubernetes"
      }), " 상품의 주목할 만한 신규 기능 및 변경 사항으로 새로운 기능인 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "컨트롤 플레인 모니터링"
      }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_kubernetesAgentList",
        className: "uitext"
      }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_deploymentList",
        className: "uitext"
      }), ", 그리고 개편된 기능인 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_podInitPerf",
        className: "uitext"
      }), "과 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_objectManifest",
        className: "uitext"
      }), ", 아울러 새로 추가된 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Helm"
      }), " 차트 설치 지원 등에 대해서 소개합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 쿠버네티스 모니터링은 이번 1분기에 새롭게 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "컨트롤 플레인 모니터링"
      }), "을 제공합니다. 쿠버네티스 클러스터 전반을 관리하는 컨트롤 플레인 컴포넌트 중 클러스터 내 API 요청을 처리하는 kube-apiserver에 대한 가시성 확보를 위해 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_kubeApiserverDashboard",
        className: "uitext"
      }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_kubeApiserverMetricsSearch",
        className: "uitext"
      }), " 기능이 추가되었습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_kubeApiserverDashboard",
        className: "uitext"
      }), "는 kube-apiserver의 상태 및 성능 메트릭 수집, 응답 시간, 처리량, 요청 실패 등을 추적하여 클러스터의 가용성과 성능을 모니터링할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_kubeApiserverMetricsSearch",
        className: "uitext"
      }), "를 통해서는 kube-apiserver 수집 지표 목록을 조회할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "컨트롤 플레인 모니터링 sc cl",
        src: (__webpack_require__(30471)/* ["default"] */ .A) + "",
        width: "1082",
        height: "774"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["또한 Deployment 기준으로 관련 정보를 조회할 수 있는 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_deploymentList",
        className: "uitext"
      }), ", 마스터 및 노드 에이전트 설치 현황을 확인할 수 있는 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_kubernetesAgentList",
        className: "uitext"
      }), " 기능이 추가되었습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["개별 Pod 보다 Pod 집합 상태를 모니터링하는 것이 서비스 안정성과 성능 확보를 위해 중요합니다. 애플리케이션 배포 및 업데이트를 담당하는 Deployment 모니터링은 그러한 의미에서 필수적입니다. ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_deploymentList",
        className: "uitext"
      }), "에서 리소스 관계도 및 클러스터 내 Pod, 컨테이너, 애플리케이션 현황 및 CPU, 메모리, 트랜잭션 수 등 주요 성능 지표를 Deployment 단위로 조회할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["또한 새롭게 추가된 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_kubernetesAgentList",
        className: "uitext"
      }), "에서는 마스터 및 노드 에이전트 설치 현황을 한 눈에 살펴볼 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["그리고 기존의 Pod 초기화 성능 기능 및 마스터 메타 정보 기능을 개편해 각 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_podInitPerf",
        className: "uitext"
      }), "과 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_objectManifest",
        className: "uitext"
      }), " 기능을 제공합니다. ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_podInitPerf",
        className: "uitext"
      }), "은 Pod별 시작 시점 정밀 분석을 통해 기동에 소요되는 시간과 리소스 사용량에 대한 상세 데이터를 제공합니다. ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_objectManifest",
        className: "uitext"
      }), "는 오브젝트별 과거 조회 및 비교 기능이 추가되어 클러스터 내 변동 사항을 쉽게 추적할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "오브젝트 매니페스트 및 Pod 시작 분석 sc cl",
        src: (__webpack_require__(82326)/* ["default"] */ .A) + "",
        width: "1010",
        height: "771"
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["아울러 마스터 및 노드 에이전트 설치 시 기존 Yaml 파일 방식 외 운영 복잡도를 덜어줄 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Helm"
      }), " 차트 설치 방식을 공식적으로 지원합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 개요 안내를 통해 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Kubernetes"
      }), " 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_service_Kubernetes_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog2",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "에이전트 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_agent_k8s_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_kubeApiserverDashboard",
              className: "uitext"
            }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.whatap.io/kubernetes/kube-apiserver-dashboard",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_kubeApiserverMetricsSearch",
              className: "uitext"
            }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.whatap.io/kubernetes/kube-apiserver-metrics-search",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_deploymentList",
              className: "uitext"
            }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.whatap.io/kubernetes/deployment-list",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_kubernetesAgentList",
              className: "uitext"
            }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.whatap.io/kubernetes/agent-list",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["마스터 및 노드 에이전트 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "Helm"
            }), " 차트 설치 방식에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.whatap.io/kubernetes/install-master-node-agent#create-kubernetes-agent",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "database",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Database"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Database"
      }), " 상품군의 주목할 만한 신규 기능 및 변경 사항으로 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Redis"
      }), "와 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MongoDB"
      }), " 상품 ", (0,jsx_runtime.jsx)("code", {
        class: "my",
        children: "V2"
      }), " 출시에 대해 소개합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Database"
      }), " 상품군이  ", (0,jsx_runtime.jsx)("code", {
        class: "my",
        children: "V2"
      }), "로 전환되고 있습니다. 기존 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PostgreSQL"
      }), "과 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MySQL"
      }), "에 뒤이어 이번 1분기에는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Redis"
      }), "와 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MongoDB"
      }), " ", (0,jsx_runtime.jsx)("code", {
        class: "my",
        children: "V2"
      }), " 서비스가 시작되었습니다. ", (0,jsx_runtime.jsx)("code", {
        class: "my",
        children: "V2"
      }), "는 전반적으로 차트 및 수집 기능이 강화되었습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "데이터베이스 sc cl ",
        src: (__webpack_require__(13837)/* ["default"] */ .A) + "",
        width: "772",
        height: "484"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_dashboard",
        className: "uitext"
      }), " 메뉴의 UI 및 기능을 개선하였으며, 해당 메뉴에서 데이터베이스의 성능 지표 정보를 바로 확인할 수 있습니다. 또한 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_multiInstance",
        className: "uitext"
      }), " 메뉴에서 클러스터별 에이전트를 선택할 수 있습니다. 그리고 데이터베이스 로그를 검색하고 추이를 확인하고 로그 관련 알림을 받을 수 있는 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_log",
        className: "uitext"
      }), " 메뉴를 제공합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)("code", {
        class: "my",
        children: "V2"
      }), " 전환과 동시에 기존 XOS와 XOS2로 나누어져 있던 지표를 %로 확인할 수 있는 백분률 표기로 변경하고 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "XOS"
      }), "로 통합해 제공합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 개요 안내를 통해 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Database"
      }), " 상품군의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_service_Database_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog2",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "에이전트 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_agent_dbx_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "browser",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Browser"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Browser"
      }), " 상품의 주목할 만한 신규 기능 및 변경 사항으로 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "TTL07736",
        className: "uitext"
      }), " 기능 및 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "사용자 정의 이벤트 수집 기능"
        })
      }), "을 소개합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이번 1분기에 새롭게 제공하는 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "TTL07736",
        className: "uitext"
      }), " 기능은 사용자의 웹 페이지 탐색 방식을 파악하고자 할 때 활용할 수 있습니다. 사용자가 어떻게 움직이고, 어떤 페이지에 머무르고 있는지, 화면의 어떤 요소를 클릭하는지, 화면에서 발생하는 에러 등에 관한 사용자의 전반적인 활동을 분석해 사용자가 서비스를 이용하는 방식에 대한 통찰을 얻는 것뿐 아니라 사용자의 행동 패턴을 이해하는 데에 더 가까워질 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_userSessionEventSearch",
        className: "uitext"
      }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_ajaxAnalytics",
        className: "uitext"
      }), "과 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_rumPageLoadHitmap",
        className: "uitext"
      }), "을 이용해 사용자의 페이지 내 행동 분석 및 세션 중 발생하는 여러 에러 추적이 가능합니다. 세션 로그 정보를 통해 최종 사용자의 경로, 이탈 원인, 성능 및 사용자 경험 등을 분석할 수 있습니다. 또한 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "AJAX 히트맵"
        })
      }), "과 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_rumPageLoadHitmap",
        className: "uitext"
      }), "에서 실시간으로 문제를 겪고 있는 사용자를 파악할 수 있습니다. 이러한 정보를 통해 사용자의 서비스 경험과 서비스의 현재 성능 상태를 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "browser-search-user-session-log-analysis.png",
      desc: "사용자 세션 분석 분기 예시",
      className: "changelog-img"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "사용자 정의 이벤트 수집"
        })
      }), " 기능은 브라우저 모니터링이 제공하는 기본 정보 외 사용자가 원하는 이벤트를 추가적으로 수집할 수 있는 인터페이스를 제공합니다. 브라우저 에이전트에서 제공하는 인터페이스 중 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "addCustomEvent"
      }), " 메소드를 이용해 사용자 정의형 이벤트를 수집 후 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_userSessionEventSearch",
        className: "uitext"
      }), " 메뉴 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_flexboard",
        className: "uitext"
      }), "를 통해 수집한 데이터를 조회할 수 있습니다."]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 개요 안내를 통해 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Browser"
      }), " 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_service_Browser_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog2",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "에이전트 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_agent_browser_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "network",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Network"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2024년 1분기에 네트워크 간의 혼잡 및 장애를 파악하고 사용자의 네트워크 성능 개선을 위해 프로세스의 네트워크 정보를 수집하는 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "네트워크 성능 모니터링"
      }), "(", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Network Performance Monitoring"
      }), ") 상품이 정식으로 출시되었습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "네트워크 모니터링 sc cl ",
        src: (__webpack_require__(87937)/* ["default"] */ .A) + "",
        width: "972",
        height: "984"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "최근 네트워크 시장은 클라우드와 가상화라는 큰 틀에서 성장하고 있습니다. 기존 장비 중심의 네트워크 모니터링 뿐만 아니라 작업을 수행하는 프로세스가 중요한 모니터링 대상이 되고 있습니다. 와탭 네트워크 성능 모니터링을 통해 프로세스 단위의 네트워크 지표를 안정적으로 모니터링해 보세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭의 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Network"
      }), " 상품은 각 프로세스가 수행하는 네트워크 동작을 추적해 복잡한 구성 요소와 상태 정보를 토폴로지를 통해 직관적으로 이해할 수 있도록 시각화했습니다. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "품질 지표"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency"
        })
      }), "와 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Jitter"
        })
      }), ", 그리고 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "네트워크 사용량 지표"
      }), " ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "bps"
        })
      }), ", ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "pps"
        })
      }), ", ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "session count"
        })
      }), "를 조회할 수 있습니다. 또한 태그 옵션으로 가시성을 확보하였으며, ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_flexboard",
        className: "uitext"
      }), "를 통해 다양한 사용자 커스텀 차트를 제공합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 개요 안내를 통해 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Network"
      }), " 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_service_Network_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Network"
            }), " 상품에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.whatap.io/npm/introduction",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["AWS 리소스 식별 관련한 에이전트 옵션 안내에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.whatap.io/npm/set-aws-resource-options",
              children: "다음 문서"
            }), "를 확인하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "log",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Log"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Log"
      }), " 상품의 주목할 만한 신규 기능 및 변경 사항으로 개편된 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "로그 검색 필터 기능"
      }), "을 소개합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_logSearch",
        className: "uitext"
      }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_logTail",
        className: "uitext"
      }), " 메뉴 내 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "로그 검색 필터 기능"
      }), "이 개편되었습니다. 검색 값 입력 시 안내 가이드 UI를 통해 지원하는 검색 문법을 확인할 수 있고, 키보드 입력으로 태그를 생성 및 수정하고 연산자를 클릭해 수정할 수 있는 기능이 추가되었습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["또한 에이전트 옵션이 설정된 경우 로그 레벨(", (0,jsx_runtime.jsx)("span", {
        class: "logwr",
        children: "WARN"
      }), ", ", (0,jsx_runtime.jsx)("span", {
        class: "loger",
        children: "ERROR"
      }), ", ", (0,jsx_runtime.jsx)("span", {
        class: "logft",
        children: "FATAL"
      }), ")을 수집해 로그 목록 왼쪽에서 해당 기준 색상을 표시하는 기능이 추가되었습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "로그 에이전트 옵션 cl분기 예시 ",
        src: (__webpack_require__(4680)/* ["default"] */ .A) + "",
        width: "1200",
        height: "224"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음 개요 안내를 통해 2024년 1분기 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Log"
      }), " 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요."]
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      className: "changelog",
      children: [(0,jsx_runtime.jsx)("summary", {
        children: (0,jsx_runtime.jsx)("b", {
          children: "신규 기능 및 주요 변경 사항 안내"
        })
      }), (0,jsx_runtime.jsx)(_import_service_Log_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsx)("br", {})]
  });
}
function _2024_1q_summary_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_2024_1q_summary_createMdxContent, {
      ...props
    })
  }) : _2024_1q_summary_createMdxContent(props);
}
function _2024_1q_summary_missingMdxReference(id, component) {
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

/***/ 21959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-app-stat-instance-83702c43a9311376acaefff7da6bc96c.png");

/***/ }),

/***/ 74118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-common-event-v2-1dca8eba6848781ab8443580555a0057.png");

/***/ }),

/***/ 13837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-db-9736874a75406ed11ee29e0f828baa55.png");

/***/ }),

/***/ 30471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-k8s-kube-apiserver-c3a6ec1b34e8e287f3c9967d770287c9.png");

/***/ }),

/***/ 82326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-k8s-om-podinit-539a2c819836711bd67ccce0f57fdbf3.png");

/***/ }),

/***/ 87937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-network-03e52d28329611577b24b6bab5268f43.png");

/***/ }),

/***/ 92587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-server-aix-6183959e1a7eeb67b0a3e06e73d0e5fb.png");

/***/ }),

/***/ 4680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/log-agent-option-level-2ef1693a2ebe164852014ef80fb11d66.png");

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