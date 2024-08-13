"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[66756],{

/***/ 5301:
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
	id: 'about-tcp-port',
	title: 'TCP 포트 감시 활용',
	description: 'TCP 포트 감시 필요성 및 활용 예시를 안내합니다.',
	keywords: [
		'서버',
		'서버 모니터링',
		'TCP 포트'
	],
	toc_max_heading_level: 2,
	displayed_sidebar: 'learningSidebar'
};
const contentTitle = undefined;
const metadata = {
  "id": "best-practice-guides/about-tcp-port",
  "title": "TCP 포트 감시 활용",
  "description": "TCP 포트 감시 필요성 및 활용 예시를 안내합니다.",
  "source": "@site/docs/best-practice-guides/about-tcp-port.mdx",
  "sourceDirName": "best-practice-guides",
  "slug": "/best-practice-guides/about-tcp-port",
  "permalink": "/en/best-practice-guides/about-tcp-port",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/best-practice-guides/about-tcp-port.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "about-tcp-port",
    "title": "TCP 포트 감시 활용",
    "description": "TCP 포트 감시 필요성 및 활용 예시를 안내합니다.",
    "keywords": [
      "서버",
      "서버 모니터링",
      "TCP 포트"
    ],
    "toc_max_heading_level": 2,
    "displayed_sidebar": "learningSidebar"
  },
  "sidebar": "learningSidebar",
  "previous": {
    "title": "인스턴스 성능 관리 활용",
    "permalink": "/en/best-practice-guides/about-instance-performance-analysis"
  }
};
const assets = {

};

/*문제 발생 시 관리자가 즉각적으로 대응할 수 있도록 알림을 발송합니다.*/
/*IT 인프라 관리에서 서비스별 TCP 포트를 모니터링하는 것은 운영 중인 서비스의 가용성과 상태를 평가하는 기본적이면서도 중요한 방법 중 하나입니다. TCP 포트는 네트워크 상의 애플리케이션 및 서비스가 통신하는 주요 경로로서, 각 서비스의 작동 상태를 직간접적으로 나타냅니다. 따라서 TCP 포트 모니터링은 서버와 서비스의 안정적인 운영을 보장하기 위해 필수적인 역할을 수행합니다.

TCP 포트 모니터링을 통해 특정 서비스가 정상적으로 작동하고 있는지 실시간으로 확인할 수 있습니다. 예를 들어, 웹 서버가 사용하는 HTTP 포트(예, 포트 80 또는 443)가 응답하지 않는다면, 이는 웹 서버의 다운타임 또는 네트워크 문제를 암시할 수 있습니다. 이러한 상황에서 TCP 포트 모니터링은 문제를 신속하게 감지하고 알림을 발송하여 관리자가 즉각적으로 대응할 수 있도록 지원합니다.

와탭의 서버 모니터링 에이전트를 활용하면 모니터링 대상 서버의 상태를 실시간으로 확인할 수 있을 뿐만 아니라, 서버 간의 TCP 통신 상태와 다른 서비스 간의 연결 상태까지 상세히 점검할 수 있습니다. 이는 서비스 중단을 예방하고 시스템의 가용성을 극대화하여, 비즈니스 연속성을 보장하는 데 중요한 역할을 합니다.*/
/*IT 인프라 관리에 있어 서비스별 TCP 포트를 모니터링하는 것은 운영 중인 서비스의 상태를 체크하는 기본적인 방법 중 하나입니다.

TCP 포트 모니터링을 통해 특정 서비스가 정상적으로 작동하고 있는지 확인할 수 있습니다. 예를 들어 웹 서버 포트에서 응답하지 않는다면, 웹 서버가 다운되었거나 네트워크 문제가 발생했을 가능성이 있습니다. TCP 포트 모니터링을 통해 이러한 문제를 신속히 감지하고 대응할 수 있습니다.

와탭의 서버 모니터링 에이전트를 활용하면 모니터링 대상 서버의 상태를 체크하는 것은 물론 다른 서비스와의 TCP 통신 상태도 확인할 수 있습니다.*/
/*다음과 같이 알림 템플릿 내 ***재시작***과 ***미수신*** 항목 활성화만으로 추가적인 조작이 필요없이 기본 알림 설정이 완료됩니다.

먼저 모니터링 대상 서버의 기본 알림을 살펴보겠습니다.*/


const toc = [{
  "value": "TCP 포트 감시",
  "id": "tcp-포트-감시",
  "level": 2
}, {
  "value": "알림 활성화",
  "id": "알림-활성화",
  "level": 2
}, {
  "value": "기본 알림",
  "id": "기본-알림",
  "level": 3
}, {
  "value": "TCP 포트 감시 알림",
  "id": "tcp-포트-감시-알림",
  "level": 3
}, {
  "value": "활성화 확인",
  "id": "활성화-확인",
  "level": 3
}, {
  "value": "<em>whatap.conf</em>",
  "id": "whatapconf",
  "level": 4
}, {
  "value": "메트릭스 조회",
  "id": "메트릭스-조회",
  "level": 4
}, {
  "value": "와탭 서버 모니터링과 TCP 포트 감시",
  "id": "와탭-서버-모니터링과-tcp-포트-감시",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, TabItem, Tabs} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["TCP 포트 모니터링의 필요성 및 서버 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_eventSetting",
        className: "uitext"
      }), " 메뉴를 통한 TCP 포트 모니터링 활성화 방법에 대하여 안내합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "tcp-포트-감시",
        children: "TCP 포트 감시"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "IT 인프라 관리에서 TCP 포트 모니터링은 운영 중인 서비스의 상태를 확인하는 기본적이면서도 중요한 방법 중 하나입니다. TCP 포트는 네트워크 상의 애플리케이션 및 서비스가 통신하는 주요 경로로 각 서비스는 특정 TCP 포트를 통해 통신하며 각 서비스의 가용성과 성능을 직간접적으로 나타냅니다. 이와 같이 TCP 포트 모니터링은 서비스가 정상적으로 작동하고 있는지를 실시간으로 감시하여 시스템의 안정성을 보장하는 데 중요한 역할을 합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "예를 들어 웹 서버가 사용하는 80 또는 443과 같은 HTTP 포트가 응답하지 않을 경우 웹 서버가 다운되었거나 네트워크 문제로 인해 접근이 차단되었을 수 있습니다. 이러한 상황에서 TCP 포트 모니터링은 문제를 신속하게 감지하고 알림을 발송하여 관리자가 즉각적으로 대응할 수 있도록 지원합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "와탭의 서버 모니터링 에이전트는 모니터링 대상 서버의 상태를 실시간으로 확인할 수 있을 뿐만 아니라, 서버와 다른 서비스 간의 TCP 통신 상태까지 모니터링합니다. 이를 통해 서비스 중단을 예방하고 시스템의 가용성을 극대화하여, 비즈니스 연속성을 유지할 수 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "알림-활성화",
        children: "알림 활성화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_event",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_eventSetting",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "server",
            className: "uitext"
          }), " 탭 클릭 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "+"
            })
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "add_alert_setting",
            className: "uitext"
          }), " 버튼 선택"]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/about-server-adf-tcp-port.png",
        desc: "tcp 포트 감시 알림 설정"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "기본-알림",
        children: "기본 알림"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["와탭 서버 모니터링은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "기본 알림"
        }), "을 제공합니다. 사용자는 다음과 같이 이벤트 템플릿 내에서 서버 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "재시작"
          })
        }), " 및 데이터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "미수신"
          })
        }), " 항목을 활성화하는 것만으로 추가적인 조작 없이 기본 알림 설정을 완료할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "재시작"
              })
            }), ": 모니터링 대상 서버가 시스템 재시작을 수행할 경우 알림이 발송됩니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "미수신"
              })
            }), ": 서버의 다운타임이나 네트워크 문제로 인해 설정된 시간 동안 모니터링 에이전트로부터 데이터가 수신되지 않을 경우 해당 상태에 대한 알림이 발송됩니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "tcp-포트-감시-알림",
        children: "TCP 포트 감시 알림"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["와탭 서버 모니터링 이벤트 템플릿에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "포트"
          })
        }), " 항목을 활성화 후 다음 스크립트를 통해 모니터링 대상 엔드포인트와 TCP 포트를 설정하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "server-user-script",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lxs",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "#아래 변수에 모니터링 대상 아이피를 지정합니다.\nexport TARGET_IP=127.0.0.1\n#아래 변수에 모니터링 대상 포트를 지정합니다.\nexport TARGET_PORT=80\necho \"tcp.check.$TARGET_PORT=tcp://$TARGET_IP:$TARGET_PORT\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wps",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "#아래 변수에 모니터링 대상 아이피를 지정합니다.\n$TARGET_IP=\"127.0.0.1\"\n#아래 변수에 모니터링 대상 포트를 지정합니다.\n$TARGET_PORT=\"80\"\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"tcp.check.$TARGET_PORT=tcp://$TARGET_IP:$TARGET_PORT\"\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "활성화-확인",
        children: "활성화 확인"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatapconf",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Linux 환경에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "127.0.0.1"
        }), "으로 설정이 완료된 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "/usr/whatap/infra/conf"
        }), " 경로의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), " 파일에 다음과 같은 내용이 추가됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "license=xxxxxxxxxx\nwhatap.server.host=xxx.xxx.xxx.xxx\ncreatedtime=xxxxxxxxxx\ntcp.check.8080=tcp://127.0.0.1:8080\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "메트릭스-조회",
        children: "메트릭스 조회"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["설정이 완료된 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "분석"
          })
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "메트릭스 조회"
          })
        }), " 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "server_tcpport"
        }), " 카테고리가 추가됩니다. 해당 카테고리의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "isAlive"
        }), " 필드 값에 따라 메트릭스 알림을 사용할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/about-server-adf-tcp-port-ms.png",
        desc: "tcp 포트 감시 알림 관련 메트릭스 조회"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "와탭-서버-모니터링과-tcp-포트-감시",
        children: "와탭 서버 모니터링과 TCP 포트 감시"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "와탭의 서버 모니터링에서 제공하는 TCP 포트 감시 기능을 활용하면, 에이전트를 설치할 수 없는 환경이나 모니터링 데이터를 외부로 직접 전송할 수 없는 프라이빗 네트워크 영역에서도 TCP 상태를 효과적으로 확인할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        align: "center",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "best-p/about-tcp-port-rs.png",
          desc: "tcp 포트 감시 sc"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "와탭의 서버 에이전트는 모니터링 대상 서버뿐만 아니라, 해당 서버 내부의 다른 엔드포인트에 대해서도 주기적으로 TCP 상태를 점검합니다. 따라서, 네트워크 통신이 가능한 환경에서는 에이전트를 통해 보다 포괄적이고 광범위한 범위의 모니터링을 수행할 수 있습니다. 이러한 기능은 복잡한 네트워크 환경에서의 서버 상태 및 연결 상태를 철저하게 감시하여, 장애 발생 시 신속한 대응을 가능하게 합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "이와 같은 와탭 서버 모니터링의 다양한 기능을 활성화하여 운영 중인 시스템의 네트워크와 서버 상태를 신속하게 파악하고 대응해 보세요. 와탭을 통해 비즈니스 연속성을 확보하고 서비스의 안정성을 극대화할 수 있습니다."
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