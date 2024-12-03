"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["58894"], {
"32706": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kubernetes_kubernetes_event_mdx_fa8_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kubernetes-kubernetes-event-mdx-fa8.json
var site_docs_kubernetes_kubernetes_event_mdx_fa8_namespaceObject = JSON.parse('{"id":"kubernetes/kubernetes-event","title":"쿠버네티스 이벤트","description":"쿠버네티스 이벤트 메뉴를 안내합니다.","source":"@site/docs/kubernetes/kubernetes-event.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/kubernetes-event","permalink":"/kubernetes/kubernetes-event","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/kubernetes-event.mdx","tags":[],"version":"current","frontMatter":{"id":"kubernetes-event","title":"쿠버네티스 이벤트","description":"쿠버네티스 이벤트 메뉴를 안내합니다.","keywords":["쿠버네티스","쿠버네티스 모니터링","클러스터","쿠버네티스 이벤트"],"displayed_sidebar":"kubeSidebar","toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"오브젝트 매니페스트","permalink":"/kubernetes/object-manifest"},"next":{"title":"kube-apiserver 대시보드","permalink":"/kubernetes/kube-apiserver-dashboard"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/kubernetes/kubernetes-event.mdx


const frontMatter = {
	id: 'kubernetes-event',
	title: '쿠버네티스 이벤트',
	description: '쿠버네티스 이벤트 메뉴를 안내합니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'클러스터',
		'쿠버네티스 이벤트'
	],
	displayed_sidebar: 'kubeSidebar',
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*
쿠버네티스 이벤트 수 추이를 타입별로 확인하고 각 원인

와탭 <Cmdname sid="side_kubeEventList" className="uitext" /> 메뉴를 통해 명령어 없이도 손쉽게 쿠버네티스 이벤트를 조회할 수 있습니다.


프로젝트 단위로 쿠버네티스 이벤트 수 추이를 타입별로 확인하고

이 메뉴는 간단한 필터링을 통해 원하는 이벤트 유형을 빠르게 확인할 수 있으며, 과거에 발생한 이벤트도 손쉽게 조회할 수 있습니다.*/
/*![지시선 1](/img/number-01.png) <Cmdname sid="TTL06683" className="uitext" />에서 조회한 시간 범위 내의 이벤트 수 추이를 제공합니다. 이를 통해 이벤트가 집중적으로 발생한 시점을 특정하여 시스템 이슈를 효과적으로 추적할 수 있습니다.*/
/*조회한 시간 범위의 이벤트 수의 추이를 볼 수 있습니다. 이벤트 수 추이를 통해 이벤트가 많이 발생한 시점을 특정하여 이슈를 추적할 수 있습니다.*/


const toc = [{
  "value": "이벤트 수 추이",
  "id": "이벤트-수-추이",
  "level": 2
}, {
  "value": "이벤트 목록",
  "id": "이벤트-목록",
  "level": 2
}, {
  "value": "이벤트 상세",
  "id": "이벤트-상세",
  "level": 2
}, {
  "value": "Suggestions",
  "id": "suggestions",
  "level": 3
}, {
  "value": "인접 로그",
  "id": "인접-로그",
  "level": 3
}, {
  "value": "이벤트 타임라인",
  "id": "이벤트-타임라인",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
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
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_cluster",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_kubeEventList",
        className: "uitext"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_kubeEventList",
        className: "uitext"
      }), " 메뉴를 통해 명령어 없이 쿠버네티스 이벤트에 대한 다양한 조회와 검색이 가능합니다. 사용자의 클러스터 이벤트를 확인할 수 있으며 시간 선택자를 통해 과거 이벤트 역시 조회할 수 있습니다."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "k8s-kuber-event.png",
      desc: "쿠버네티스 이벤트 sc"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "필터 옵션 및 검색창을 통해 원하는 이벤트를 확인할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            class: "k8s-normal",
            children: "Normal"
          }), " 또는 ", (0,jsx_runtime.jsx)("span", {
            class: "slow",
            children: "Warning"
          }), "과 같은 이벤트 유형 및 ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reason"
            })
          }), " 기준으로 빠르게 필터링할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["쿠버네티스 이벤트에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://kubernetes.io/docs/reference/kubernetes-api/cluster-resources/event-v1/#Event",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "이벤트-수-추이",
        children: "이벤트 수 추이"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["바 차트 형식으로 제공되는 ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "지시선 1",
          src: (__webpack_require__(12979)/* ["default"] */.Z) + "",
          width: "35",
          height: "35"
        }), " ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06683",
          className: "uitext"
        }), "를 통해 선택한 시간 범위 내에서 발생한 이벤트 수의 변화를 시각적으로 확인할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "조회를 원하는 시간 구간을 선택하여 해당 구간에 발생한 이벤트를 이벤트 목록에서 바로 확인할 수 있습니다. 이를 통해 이벤트가 집중적으로 발생한 시간대를 빠르게 식별하고 상세 내용을 분석할 수 있습니다."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "이벤트-목록",
        children: "이벤트 목록"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["특정 시간대에 발생한 쿠버네티스 이벤트 목록을 ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "지시선 2",
          src: (__webpack_require__(39701)/* ["default"] */.Z) + "",
          width: "35",
          height: "35"
        }), " 영역에서 확인할 수 있습니다. 와탭은 최대 30일간의 이벤트 데이터를 저장하며 이를 통해 과거 이벤트를 조회하고 분석할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["또한 목록 상단에서 이벤트 Type(", (0,jsx_runtime.jsx)("span", {
          class: "slow",
          children: "Warning"
        }), ", ", (0,jsx_runtime.jsx)("span", {
          class: "k8s-normal",
          children: "Normal"
        }), ") 또는 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reason"
          })
        }), "을 선택하여 원하는 이벤트를 빠르게 필터링할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "항목"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "타임스탬프"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트가 발생한 시간입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "대상"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트가 발생한 대상입니다. Kind가 Pod인 경우 Pod 이름, Node인 경우 Node 이름을 나타냅니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Namespace"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트가 발생한 대상이 속한 네임스페이스입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Kind"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트가 발생한 대상의 종류입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Reason"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트가 발생한 이유입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "이벤트 최초 발생 시간"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트가 처음 관찰된 시간입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "이벤트 발생 건수"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "일정 시간 동안 지속적으로 발생한 이벤트의 횟수입니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "이벤트 내용"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "구체적인 이벤트의 상세 정보입니다."
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "이벤트-상세",
        children: "이벤트 상세"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["이벤트 목록에서 조회를 원하는 이벤트의 왼쪽 ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "상세 아이콘",
          src: (__webpack_require__(56319)/* ["default"] */.Z) + "",
          width: "24",
          height: "24"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "상세"
          })
        }), " 아이콘 선택 시 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "이벤트 상세"
        }), "를 확인할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "k8s-kuber-event-details.png",
        desc: "쿠버네티스 이벤트 상세"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "suggestions",
        children: "Suggestions"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Suggestions"
          })
        }), " 탭은 발생한 이벤트 메시지를 기반으로 이벤트 발생 원인을 분석하고 문제를 추적하기 위한 방향을 제시합니다."]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["현재 ", (0,jsx_runtime.jsx)("span", {
            class: "slow",
            children: "Warning"
          }), " 타입의 ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BackOff"
            })
          }), " 이벤트만 제공되는 기능입니다."]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "인접-로그",
        children: "인접 로그"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "선택한 이벤트 발생 시점을 기준으로 인접한 로그를 확인할 수 있습니다. 시간 선택 버튼을 통해 원하는 인접 범위를 설정할 수 있습니다."
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그 조회 권한"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "로그 조회 권한"
              }), "이 있는 경우, 인접된 모든 로그를 확인할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "로그 조회 권한"
              }), "이 없는 경우, 인접된 쿠버네티스 이벤트만 확인 가능합니다."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "이벤트-타임라인",
        children: "이벤트 타임라인"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["선택한 이벤트의 대상(", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Kind"
          })
        }), ")이 생성된 이후부터 현재까지 발생한 모든 이벤트를 타임라인 형태로 제공합니다. 이를 통해 대상의 이벤트 내역을 한눈에 파악할 수 있습니다."]
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
"56319": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcGFnZXZpZXc8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjguMDAwMDAwLCAtMjcxMS4wMDAwMDApIiBmaWxsPSIjMjk2Y2YyIj4KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcGFnZXZpZXciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjAwMDAwMCwgMzY1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCA0LjAwMDAwMCkiIGlkPSJwYWdldmlldyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCwwIEMxOS4wMzUyOTQxLDAgMTkuODkzNDI1NiwwLjc5NzIzMTgzNCAxOS45OTA3OTk5LDEuODA4MTAwOTYgTDIwLDIgTDE5Ljk5OSw1LjMzMyBMMTcuOTk5LDUuMzMzIEwxOCwyIEwyLDIgTDIsMTQgTDEyLDE0IEwxMiwxNiBMMiwxNiBDMC45NjQ3MDU4ODIsMTYgMC4xMDY1NzQzOTQsMTUuMjAyNzY4MiAwLjAwOTIwMDA4MTQyLDE0LjE5MTg5OSBMLTUuMzI5MDcwNTJlLTE1LDE0IEwtNS4zMjkwNzA1MmUtMTUsMiBDLTUuMzI5MDcwNTJlLTE1LDAuOTY0NzA1ODgyIDAuNzk3MjMxODM0LDAuMTA2NTc0Mzk0IDEuODA4MTAwOTYsMC4wMDkyMDAwODE0MiBMMiwwIEwxOCwwIFogTTEzLjE2NjY2NjcsNCBDMTUuNjU2NjY2Nyw0IDE3LjY2NjY2NjcsNi4wMSAxNy42NjY2NjY3LDguNSBDMTcuNjY2NjY2Nyw5LjM4IDE3LjQwNjY2NjcsMTAuMTkgMTYuOTY2NjY2NywxMC44OSBMMTkuODc2NjY2NywxMy43OSBMMTguNDU2NjY2NywxNS4yMSBMMTUuNTQ2NjY2NywxMi4zIEMxNC44NTY2NjY3LDEyLjc0IDE0LjAzNjY2NjcsMTMgMTMuMTU2NjY2NywxMyBDMTAuNjc2NjY2NywxMyA4LjY2NjY2NjY3LDEwLjk5IDguNjY2NjY2NjcsOC41IEM4LjY2NjY2NjY3LDYuMDEgMTAuNjc2NjY2Nyw0IDEzLjE2NjY2NjcsNCBaIE0xMy4xNjY2NjY3LDYgQzExLjc4NjY2NjcsNiAxMC42NjY2NjY3LDcuMTIgMTAuNjY2NjY2Nyw4LjUgQzEwLjY2NjY2NjcsOS44OCAxMS43ODY2NjY3LDExIDEzLjE2NjY2NjcsMTEgQzE0LjU0NjY2NjcsMTEgMTUuNjY2NjY2Nyw5Ljg4IDE1LjY2NjY2NjcsOC41IEMxNS42NjY2NjY3LDcuMTIgMTQuNTQ2NjY2Nyw2IDEzLjE2NjY2NjcsNiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

}),
"12979": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

}),
"39701": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

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