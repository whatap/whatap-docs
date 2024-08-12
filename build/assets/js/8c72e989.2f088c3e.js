"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[84900],{

/***/ 69248:
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
  "value": "다음 단계",
  "id": "다음-단계",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "다음-단계",
      children: "다음 단계"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "nextstep",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "오픈 소스 추적"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "애플리케이션에서 사용하는 프레임워크나 오픈소스 라이브러리에 따라 에이전트 옵션을 추가해야 할 수 있습니다. 예를 들어, 프레임워크나 오픈소스로 spring-boot-3.x, feign-client-11, okhttp3-4.4 사용 시 다음과 같이 옵션을 설정하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='whatap.conf'",
              children: "weaving=spring-boot-3.0,feign-11,okhttp3-4.4\n"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["사용자의 애플리케이션 환경에 맞는 프레임워크나 오픈소스 라이브러리를 설정하는 방법은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../agent-weaving",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "설치 점검하기"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["프로젝트 생성 및 에이전트 설치, JVM 옵션까지 모두 적용했다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../install-check",
              children: "다음 문서"
            }), "에서 점검 사항을 확인하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "설치 문제 해결"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["에이전트 설치 시 발생할 수 있는 다양한 문제들과 이를 해결하기 위한 구체적인 지침을 제공합니다. 방화벽 설정, SpringBoot 및 Tomcat JMX 설정, OSGI 프레임워크 사용 서버 설정 등 다양한 상황에 대한 해결책을 안내합니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../agent-troubleshooting",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "에이전트 설정"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["에이전트 설정(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "whatap.conf"
            }), ") 파일에 옵션을 적용해 모니터링을 위한 다양한 기능을 제공합니다. 기본 설정부터 서버 연결 및 데이터 전송 설정, 여러 애플리케이션 서버의 설정 파일 관리 방법, 트랜잭션 추적 등을 포함합니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../set-agent",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "모니터링 시작하기"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["모든 설정을 완료한 다음 애플리케이션 서버를 다시 시작하세요. 에이전트가 정보를 수집하기 시작합니다. 먼저 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_appDashboard",
              className: "uitext"
            }), " 메뉴에서 모니터링 데이터가 수집되는지 확인하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_appDashboard",
              className: "uitext"
            }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../dashboard",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 35243:
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
/* harmony import */ var _common_items_apm_next_step_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69248);


const frontMatter = {
	id: 'batch-app',
	title: '배치 애플리케이션',
	description: '와탭의 자바(Java) 에이전트를 배치 애플리케이션에 적용하는 방법을 안내합니다. 배치 애플리케이션의 독특한 시작 및 중지 반복 동작으로 인한 웹 애플리케이션과의 차이점을 설명하고, 필요한 에이전트 다운로드, 에이전트 및 배치 호스트 구성, 에이전트와 함께 배치 작업 실행, time_limit 설정 등을 통한 실행 시간 모니터링 방법을 제공합니다.',
	tags: [
		'Java',
		'배치 애플리케이션',
		'애플리케이션',
		'에이전트'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "java/add-jvm-opt/batch-app",
  "title": "배치 애플리케이션",
  "description": "와탭의 자바(Java) 에이전트를 배치 애플리케이션에 적용하는 방법을 안내합니다. 배치 애플리케이션의 독특한 시작 및 중지 반복 동작으로 인한 웹 애플리케이션과의 차이점을 설명하고, 필요한 에이전트 다운로드, 에이전트 및 배치 호스트 구성, 에이전트와 함께 배치 작업 실행, time_limit 설정 등을 통한 실행 시간 모니터링 방법을 제공합니다.",
  "source": "@site/docs/java/add-jvm-opt/batch-program.mdx",
  "sourceDirName": "java/add-jvm-opt",
  "slug": "/java/add-jvm-opt/batch-app",
  "permalink": "/java/add-jvm-opt/batch-app",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/add-jvm-opt/batch-program.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Java",
      "permalink": "/tags/java"
    },
    {
      "inline": true,
      "label": "배치 애플리케이션",
      "permalink": "/tags/배치-애플리케이션"
    },
    {
      "inline": true,
      "label": "애플리케이션",
      "permalink": "/tags/애플리케이션"
    },
    {
      "inline": true,
      "label": "에이전트",
      "permalink": "/tags/에이전트"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "batch-app",
    "title": "배치 애플리케이션",
    "description": "와탭의 자바(Java) 에이전트를 배치 애플리케이션에 적용하는 방법을 안내합니다. 배치 애플리케이션의 독특한 시작 및 중지 반복 동작으로 인한 웹 애플리케이션과의 차이점을 설명하고, 필요한 에이전트 다운로드, 에이전트 및 배치 호스트 구성, 에이전트와 함께 배치 작업 실행, time_limit 설정 등을 통한 실행 시간 모니터링 방법을 제공합니다.",
    "tags": [
      "Java",
      "배치 애플리케이션",
      "애플리케이션",
      "에이전트"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "Docker",
    "permalink": "/java/add-jvm-opt/docker"
  },
  "next": {
    "title": "Java 1.6 버전 미만",
    "permalink": "/java/add-jvm-opt/java-under-ver"
  }
};
const assets = {

};

/*다음 단계*/



const toc = [{
  "value": "에이전트 다운로드",
  "id": "에이전트-다운로드",
  "level": 2
}, {
  "value": "에이전트 설정하기",
  "id": "에이전트-설정하기",
  "level": 2
}, {
  "value": "배치 호스트(Batch Host) 설정",
  "id": "배치-호스트batch-host-설정",
  "level": 3
}, {
  "value": "배치 에이전트 설정",
  "id": "배치-에이전트-설정",
  "level": 3
}, {
  "value": "배치 잡(Batch Job) 실행하기",
  "id": "배치-잡batch-job-실행하기",
  "level": 2
}, {
  "value": "배치 호스트(Batch Host) 실행 명령어",
  "id": "배치-호스트batch-host-실행-명령어",
  "level": 3
}, {
  "value": "배치 에이전트(Batch Agent) 실행 명령어",
  "id": "배치-에이전트batch-agent-실행-명령어",
  "level": 3
}, {
  "value": "Time Limit 설정",
  "id": "time-limit-설정",
  "level": 2
}, {
  "value": "액티브 이퀄라이저 컬러 설정",
  "id": "액티브-이퀄라이저-컬러-설정",
  "level": 2
}, {
  "value": "액티브 스택 수집 간격 설정",
  "id": "액티브-스택-수집-간격-설정",
  "level": 2
}, {
  "value": "배치 에이전트의 메트릭 지표 수집",
  "id": "배치-에이전트의-메트릭-지표-수집",
  "level": 2
}, {
  "value": "<code>batch_job_counter</code>",
  "id": "batch_job_counter",
  "level": 3
}, ..._common_items_apm_next_step_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Details, ImgLang, TabItem, Tabs} = _components;
  if (!Details) _missingMdxReference("Details", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "배치 애플리케이션에서 와탭 에이전트를 적용하는 방법입니다. 배치 애플리케이션은 WAS와는 다르게 애플리케이션이 실행과 중단을 반복하는 특성이 있습니다. 따라서 일반적인 웹 애플리케이션과 다르게 모니터링해야 합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Batch Application",
        src: (__webpack_require__(47205)/* ["default"] */ .A) + "",
        width: "572",
        height: "271"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "에이전트-다운로드",
        children: "에이전트 다운로드"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음 명령어를 실행해 배치 애플리케이션 모니터링을 위한 에이전트를 다운로드할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "wget https://api.whatap.io/agent/whatap.agent.batch.tar.gz\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Details, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", {
          children: "배치 에이전트 파일 구성"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "whatap.agent.batch.tar.gz"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["⎿ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "whatap.agent-x.y.z.jar"
          }), ": 자바 에이전트"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["⎿ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "whatap.agent.batch.host-x.y.z.jar"
          }), ": 배치 호스트(Batch Host) - 수집 서버로 데이터 전송"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["⎿ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "whatap.conf"
          }), ": 배치 호스트(Batch Host) 설정 파일(파일이 없는 경우 새로 생성하여 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "설정"
            })
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "에이전트 설치"
            })
          }), " 메뉴의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "license"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "whatap.server.host"
          }), " 항목을 추가하세요.)"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["⎿ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "agent/whatap.agent.batch-x.y.z.jar"
          }), ": 배치 에이전트 - 애플리케이션 데이터를 수집하여 배치 호스트로 전송"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["⎿ ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "agent/whatap.conf"
          }), ": 배치 에이전트 설정 파일"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "에이전트-설정하기",
        children: "에이전트 설정하기"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "배치-호스트batch-host-설정",
        children: "배치 호스트(Batch Host) 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "license"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap.server.host"
        }), " 옵션값은 해당 프로젝트의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "설정"
          })
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "에이전트 설치"
          })
        }), " 메뉴에서 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# default setting\r\nlicense=\r\nwhatap.server.host=\r\n\r\n# 스텝을 나누어서 전송\r\nsplit_trace_enabled=true\r\n\r\n# 하나의 트레이스에 표시할 최대 스텝 개수\r\ntrace_step_max_count=1024\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "배치-에이전트-설정",
        children: "배치 에이전트 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='agent/whatap.conf'",
          children: "# default setting\r\nnet_udp_listen_ip=0.0.0.0\r\nnet_udp_listen_port=6611\r\n\r\n# 배치 호스트와 통신 설정\r\nnet_udp_listen_ip=0.0.0.0\r\nnet_udp_listen_port=6611\r\n\r\n# 배치 잡에서 http call 최대 개수\r\ntrace_httpc_limit=1000000\r\n\r\n# 배치 잡에서 sql 최대 개수\r\ntrace_sql_limit=1000000\r\n\r\n# 엑티브 스택 표시 여부\r\nactive_stack_enabled=true \r\n# 5회 이내\r\nactive_stack_time1=5000\r\n# 5회 이후\r\nactive_stack_time2=10000\r\n# 최초 스택 시작시간\r\nactive_stack_start_wait_time=1000\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "배치-잡batch-job-실행하기",
        children: "배치 잡(Batch Job) 실행하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "배치 잡(Batch Job)을 하나의 트랜잭션 관점에서 모니터링해야 합니다. 그래서 와탭의 Java 에이전트는 Job 프로세스를 위한 Job 에이전트와 이 정보를 서버로 중계하기 위한 Host 에이전트로 분리된 두 개의 에이전트를 실행해야 합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "배치-호스트batch-host-실행-명령어",
        children: "배치 호스트(Batch Host) 실행 명령어"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
          value: "lx",
          label: "Linux",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='Batch Host Agent'",
              children: "java -cp {BATCH_HOST_HOME}/whatap.agent.batch.host-x.y.z.jar:{BATCH_HOST_HOME}/whatap.agent-x.y.z.jar -Dwhatap.name=batch whatap.agent.batch.App\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='Batch Host Agent, Java 17 or later'",
              children: "java --add-opens=java.base/java.lang=ALL-UNNAMED -cp {BATCH_HOST_HOME}/whatap.agent.batch.host-x.y.z.jar:{BATCH_HOST_HOME}/whatap.agent-x.y.z.jar -Dwhatap.name=batch whatap.agent.batch.App\n"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
          value: "wd",
          label: "Windows",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='Batch Host Agent'",
              children: "java -cp {BATCH_HOST_HOME}/whatap.agent.batch.host-x.y.z.jar;{BATCH_HOST_HOME}/whatap.agent-x.y.z.jar -Dwhatap.name=batch whatap.agent.batch.App\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='Batch Host Agent, Java 17 or later'",
              children: "java --add-opens=java.base/java.lang=ALL-UNNAMED -cp {BATCH_HOST_HOME}/whatap.agent.batch.host-x.y.z.jar;{BATCH_HOST_HOME}/whatap.agent-x.y.z.jar -Dwhatap.name=batch whatap.agent.batch.App\n"
            })
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "배치-에이전트batch-agent-실행-명령어",
        children: "배치 에이전트(Batch Agent) 실행 명령어"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Batch Agent'",
          children: "java -javaagent:{BATCH_AGENT_HOME}/whatap.agent.batch-x.y.z.jar -jar {APP_PATH}/batch-application.jar\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Batch Agent, Java 17 or later'",
          children: "java -javaagent:{BATCH_AGENT_HOME}/whatap.agent.batch-x.x.x.jar --add-opens=java.base/java.lang=ALL-UNNAMED -jar {APP_PATH}/batch-application.jar\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "배치 잡(Batch Job) 에이전트와 배치 호스트(Batch Host) 에이전트는 배치 잡(Batch Job)을 수행하는 호스트와 같이 설치 및 실행하세요."
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "time-limit-설정",
        children: "Time Limit 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "배치 잡(Batch Job) 에이전트와 배치 호스트(Batch Host) 에이전트 사이는 UDP를 이용해 통신합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Batch Job UDP",
          src: (__webpack_require__(32154)/* ["default"] */ .A) + "",
          width: "940",
          height: "186"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["배치 잡(Batch Job)은 일반적으로 장시간 수행합니다. 수십초가 넘을 수도 있습니다. 따라서 배치 잡(Batch Job) 별로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "time_limit"
        }), "의 값은 다를 수 있습니다. 배치 잡(Batch Job)이 실행되는 예상 처리 시간을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "time_limit"
        }), " 옵션에 설정하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title=whatap.conf",
          children: "time_limit=300000\r\nwarning_time=70% of time_limit\r\nstep_interval=5000\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "액티브-이퀄라이저-컬러-설정",
        children: "액티브 이퀄라이저 컬러 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["배치 잡(Batch Job)의 실행 시간이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "time_limit"
        }), "의 70%를 지나면 노란색으로 표시하고, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "time_limit"
        }), "을 초과하면 빨간색으로 표시하도록 다음과 같이 설정하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf' {2,4} showLineNumbers",
          children: "## 기대 종료시간의 70%\r\nyellow_time = time_limit * 0.7;\r\n## 기대 종료 시간을 초과\r\nred_time = time_limit;\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "batch-app-timelimit.png",
        desc: "Batch Job UDP"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["서버 운영자는 배치 잡(Batch Job)의 지연 여부를 실시간으로 확인하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "time_limit"
          }), " 값을 적절하게 설정하세요."]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "액티브-스택-수집-간격-설정",
        children: "액티브 스택 수집 간격 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["배치 잡(Batch Job) 에이전트는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "step_interval"
        }), " 옵션값의 간격으로 액티브 스택을 수집할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title=whatap.conf",
          children: "step_interval=5000\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "배치-에이전트의-메트릭-지표-수집",
        children: "배치 에이전트의 메트릭 지표 수집"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["대시보드에는 배치 호스트(Batch Host)의 Heap Memory를 수집하고, 배치 애플리케이션의 성능 지표는 메트릭(TagCount: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "batch_job_counter"
        }), ")으로 수집합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "batch_job_counter",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "batch_job_counter"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["batch job: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "pid"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "hostname"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "job_name"
          })]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["gc: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "gc_count"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "gc_time_sum"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "gc_oldgen_count"
          })]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["heap: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "heap_tot"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "heap_use"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "heap_max"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "heap_pending_final"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "heap_perm"
          })]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["cpu: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "cputime"
          })]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["thread count: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "thread_total_started"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "thread_count"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "thread_daemon"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "thread_peak_count"
          })]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_apm_next_step_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {})]
    })]
  });
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 47205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/batch-app-intro-fb3a58319b1862785aa2e91d0b1f9c89.png");

/***/ }),

/***/ 32154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/batch-app-udp-415098264f62073d1912a053f99fd5e1.png");

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