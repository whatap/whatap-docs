"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["71098"], {
"6089": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["화면 위에 설정한 그룹화 설정(속성 필드 및 필터링 옵션 포함) 정보는 사용자 브라우저 내에 저장됩니다. 만약 저장된 설정을 초기화하고 싶다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "리셋 아이콘",
        src: (__webpack_require__(80625)/* ["default"] */.Z) + "",
        width: "25",
        height: "24"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "리셋"
        })
      }), " 버튼을 선택하세요."]
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
"73252": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kubernetes_container_status_mdx_90a_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kubernetes-container-status-mdx-90a.json
var site_docs_kubernetes_container_status_mdx_90a_namespaceObject = JSON.parse('{"id":"kubernetes/container-status","title":"컨테이너 맵 지표와 상태","description":"컨테이너 맵 메뉴에서 제공하는 차트의 속성에 따라 컨테이너 또는 Pod의 상태를 확인할 수 있습니다.","source":"@site/docs/kubernetes/container-status.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/container-status","permalink":"/kubernetes/container-status","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/container-status.mdx","tags":[],"version":"current","frontMatter":{"id":"container-status","title":"컨테이너 맵 지표와 상태","description":"컨테이너 맵 메뉴에서 제공하는 차트의 속성에 따라 컨테이너 또는 Pod의 상태를 확인할 수 있습니다.","keywords":["쿠버네티스","쿠버네티스 모니터링"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"대상 그룹화","permalink":"/kubernetes/container-group"},"next":{"title":"외부 프로젝트 연동과 설정","permalink":"/kubernetes/foreign-project"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_container-note-reset.mdx
var _container_note_reset = __webpack_require__("6089");
;// CONCATENATED MODULE: ./docs/kubernetes/container-status.mdx


const frontMatter = {
	id: 'container-status',
	title: '컨테이너 맵 지표와 상태',
	description: '컨테이너 맵 메뉴에서 제공하는 차트의 속성에 따라 컨테이너 또는 Pod의 상태를 확인할 수 있습니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [{
  "value": "차트 지표 사용자화",
  "id": "차트-지표-사용자화",
  "level": 2
}, ..._container_note_reset/* toc */.d$, {
  "value": "지표 임계치 설정 및 상태 색상",
  "id": "지표-임계치-설정-및-상태-색상",
  "level": 2
}, {
  "value": "이벤트 기반 컨테이너 상태",
  "id": "이벤트-기반-컨테이너-상태",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "차트-지표-사용자화",
        children: "차트 지표 사용자화"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 쿠버네티스 모니터링 서비스의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "컨테이너 맵"
          })
        }), " 메뉴에서 제공하는 기본 차트 속성은 컨테이너 또는 Pod의 상태(State)입니다. 메트릭 이름으로는 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ConState"
          })
        }), "(Container State)입니다. 하지만 기본 상태가 아닌 다른 기준으로 맵을 구성할 필요가 있습니다. 예를 들어, 기본 State 상태가 아닌 CPU 사용량(millicore), 메모리 사용률(%), 네트워크 사용량(byte) 등을 기준으로 각 대상들의 상태를 파악해야 하는 경우도 있습니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "와탭은 컨테이너의 차트 지표 변경 기능을 제공합니다. 변경 가능한 차트 지표 값은 와탭 쿠버네티스가 수집하는 메트릭스(지표)와 같습니다."
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "whatap_kubernetes_container_map_state_customization.png",
        desc: "사용자화 가능한 차트 지표 목록"
      }), (0,jsx_runtime.jsx)(_container_note_reset/* default */.ZP, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "지표-임계치-설정-및-상태-색상",
        children: "지표 임계치 설정 및 상태 색상"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "대상에 부여한 지표의 임계치 설정으로 각 대상의 상태를 색상으로 분류할 수 있습니다. 지표의 단위가 숫자인 경우(pct, bps, millicore)에 임계치 설정이 가능합니다."
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)("span", {
          class: "normal",
          children: "Normal"
        }), ", ", (0,jsx_runtime.jsx)("span", {
          class: "slow",
          children: "Warning"
        }), ", ", (0,jsx_runtime.jsx)("span", {
          class: "vslow",
          children: "Critical"
        }), " 등 상태별 색상 및 의미는 다음과 같습니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "각 대상의 상태 색상",
          src: (__webpack_require__(97442)/* ["default"] */.Z) + "",
          width: "600",
          height: "284"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "상태"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)("span", {
                class: "normal",
                children: "Normal"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정상 상태 구간 표시 (~ Warning 미만 구간을 3등분)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)("span", {
                class: "slow",
                children: "Warning"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Warning 임계치 구간 내에 있음을 표시 (Warning 초과 ~ Critical 이상)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)("span", {
                class: "vslow",
                children: "Critical"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Critical 임계치 구간 내에 있음을 표시 (Critical 초과 ~)"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Dead"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 종료 진행 상태"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Wait"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 시작 진행 상태"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Pause"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 일시 중단 상태"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "이벤트-기반-컨테이너-상태",
        children: "이벤트 기반 컨테이너 상태"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "컨테이너 맵"
          })
        }), " 메뉴에서 컨테이너 뷰는 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EventConState"
        }), "라는 상태 값을 제공합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EventConState"
        }), "는 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Event-based Container State"
        }), "로 이벤트가 반영된 컨테이너 상태를 나타냅니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EventConState"
        }), "에 반영된 이벤트 종류는 다음과 같습니다."]
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "이벤트"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "레벨"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Kubernetes Event"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)("span", {
                class: "slow",
                children: "Warning"
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "WhaTap Event"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)("span", {
                class: "slow",
                children: "Warning"
              }), ", ", (0,jsx_runtime.jsx)("span", {
                class: "vslow",
                children: "Critical"
              })]
            })]
          })]
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Kubernetes Event"
            }), "는 쿠버네티스가 제공하는 이벤트 정보입니다. 사용자의 쿠버네티스 환경에서 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "kubectl get events"
            }), " 명령을 통해 확인 가능한 이벤트 정보와 동일합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "WhaTap Event"
            }), "는 사용자가 와탭 이벤트 기능을 통해 설정한 이벤트입니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "EventConState"
        }), "는 다음과 같은 방식으로 결정됩니다."]
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "상태"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "상태값"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "원인"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)("span", {
                class: "vslow",
                children: "Critical"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "50"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["WhaTap 마이크로 에이전트에서 Critical 이벤트 발생", (0,jsx_runtime.jsx)("br", {}), "WhaTap 노드 에이전트에서 Critical 이벤트 발생", (0,jsx_runtime.jsx)("br", {}), "컨테이너 상태 OOMKILLED 전환"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)("span", {
                class: "slow",
                children: "Warning"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "30"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Kubernetes에서 Warning 이벤트 발생", (0,jsx_runtime.jsx)("br", {}), "WhaTap 마이크로 에이전트에서 Warning 이벤트 발생", (0,jsx_runtime.jsx)("br", {}), "WhaTap 노드 에이전트에서 Warning 이벤트 발생", (0,jsx_runtime.jsx)("br", {}), "컨테이너 상태 RESTARTING 전환"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Dead"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "23"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 상태 DEAD 전환"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Pause"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "22"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 상태 PAUSE 전환"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Waiting"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "21"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 상태 WAITING 전환"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)("span", {
                class: "normal",
                children: "Normal"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "10"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 상태 Normal 전환"
            })]
          })]
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 이벤트 중에는 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "CNT08320",
          className: "uitext"
        }), "을 설정한 이벤트가 있습니다. 내부적으로 두가지 유형의 이벤트를 다음과 같이 구분합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["상태 해결을 추적하지 않는 이벤트 : ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stateless"
            }), " 이벤트"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["상태 해결 시 추가 알림을 설정한 이벤트 : ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stateful"
            }), " 이벤트"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["컨테이너에서 발생한 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stateless"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stateful"
        }), " 이벤트는 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EventConState"
        }), " 상태를 결정하는데 다음과 같이 사용합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "stateless"
            }), " 이벤트 : 컨테이너에서 발생한 최근 1분 이내의 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stateless"
            }), " 이벤트를 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EventConState"
            }), " 상태에 반영"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "stateful"
            }), " 이벤트 : 발생 시점부터 종료 시점까지의 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stateful"
            }), " 이벤트를 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "EventConState"
            }), " 상태에 반영"]
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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



}),
"97442": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/container-map-status-color-d08e4acfc77e07f5da4ac75df3181fd0.png");

}),
"80625": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNXB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNSAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtdW5kbzwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNTYuMDAwMDAwLCAtMTQ3NS4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImVkaXRvci1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAxMzUwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLXVuZG8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMxNi41MDAwMDAsIDEyNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLDAgTDEwLDIgTDEwLDIgQzUuNTgxNzIyLDIgMiw1LjU4MTcyMiAyLDEwIEMyLDE0LjQxODI3OCA1LjU4MTcyMiwxOCAxMCwxOCBDMTQuNDE4Mjc4LDE4IDE4LDE0LjQxODI3OCAxOCwxMCBDMTgsOC42NjI5MjcwMSAxNy42NzE5ODMyLDcuNDAyNDY2NDMgMTcuMDkyMDMwNSw2LjI5NDY5OTA0IEwxNS4zNTE5MjM4LDcuMjk5MDM4MTEgTDE2LjQ1LDMuMjAwOTYxODkgTDIwLjU0ODA3NjIsNC4yOTkwMzgxMSBMMTguODI1ODYyMyw1LjI5NDMwMzE2IEMxOS41NzUxOSw2LjY5Njc4NzQ5IDIwLDguMjk4NzgzOSAyMCwxMCBDMjAsMTUuNTIyODQ3NSAxNS41MjI4NDc1LDIwIDEwLDIwIEM0LjQ3NzE1MjUsMjAgLTguNTI2NTEyODNlLTE0LDE1LjUyMjg0NzUgLTguNTI2NTEyODNlLTE0LDEwIEMtOC41MjY1MTI4M2UtMTQsNC40NzcxNTI1IDQuNDc3MTUyNSwwIDEwLDAgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMjc0MDM4LCAxMC4wMDAwMDApIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMC4yNzQwMzgsIC0xMC4wMDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

}),
"50065": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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


}),

}]);