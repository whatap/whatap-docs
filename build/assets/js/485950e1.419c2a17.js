"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[45756],{

/***/ 65227:
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
	id: 'performance-summary',
	title: '퍼포먼스 요약',
	description: '퍼포먼스 요약 메뉴를 통해 쿠버네티스 주요 지표들에 어떤 변화가 있었는지 확인할 수 있습니다.',
	tags: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'대시보드',
		'퍼포먼스'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/performance-summary",
  "title": "퍼포먼스 요약",
  "description": "퍼포먼스 요약 메뉴를 통해 쿠버네티스 주요 지표들에 어떤 변화가 있었는지 확인할 수 있습니다.",
  "source": "@site/docs/kubernetes/performance-summary.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/performance-summary",
  "permalink": "/kubernetes/performance-summary",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/performance-summary.mdx",
  "tags": [
    {
      "inline": true,
      "label": "쿠버네티스",
      "permalink": "/tags/쿠버네티스"
    },
    {
      "inline": true,
      "label": "쿠버네티스 모니터링",
      "permalink": "/tags/쿠버네티스-모니터링"
    },
    {
      "inline": true,
      "label": "대시보드",
      "permalink": "/tags/대시보드"
    },
    {
      "inline": true,
      "label": "퍼포먼스",
      "permalink": "/tags/퍼포먼스"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "performance-summary",
    "title": "퍼포먼스 요약",
    "description": "퍼포먼스 요약 메뉴를 통해 쿠버네티스 주요 지표들에 어떤 변화가 있었는지 확인할 수 있습니다.",
    "tags": [
      "쿠버네티스",
      "쿠버네티스 모니터링",
      "대시보드",
      "퍼포먼스"
    ]
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "Call Information",
    "permalink": "/kubernetes/container-map-call-information"
  },
  "next": {
    "title": "클러스터 요약",
    "permalink": "/kubernetes/cluster-summary"
  }
};
const assets = {

};



const toc = [{
  "value": "쿠버네티스 클러스터 통합 퍼포먼스",
  "id": "쿠버네티스-클러스터-통합-퍼포먼스",
  "level": 2
}, {
  "value": "쿠버네티스 네임스페이스 퍼포먼스",
  "id": "쿠버네티스-네임스페이스-퍼포먼스",
  "level": 2
}, {
  "value": "프로젝트 퍼포먼스",
  "id": "프로젝트-퍼포먼스",
  "level": 2
}, {
  "value": "노드 정보",
  "id": "노드-정보",
  "level": 3
}, {
  "value": "컨테이너 정보",
  "id": "컨테이너-정보",
  "level": 3
}, {
  "value": "애플리케이션 정보",
  "id": "애플리케이션-정보",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang, UI} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!UI) _missingMdxReference("UI", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "대시보드"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "퍼포먼스 요약"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["최근 시간별 차트를 통하여 컨테이너/Pod 수량, 노드 수량 등 쿠버네티스 주요 지표들에 어떤 변화가 있었는지 확인할 수 있습니다. 다음 이미지는 클러스터 프로젝트(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "my",
        children: "Kubernetes"
      }), ") 예시입니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "k8s-performance-summary.png",
      desc: "퍼포먼스 요약"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "바로 가기 옵션"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["위젯별 오른쪽 상단에 위치한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "더보기 아이콘",
            src: (__webpack_require__(57444)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "더보기"
            })
          }), " 아이콘을 선택하면 다음과 같이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "바로가기 아이콘",
            src: (__webpack_require__(8701)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "바로 가기"
            })
          }), " 옵션을 확인할 수 있습니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "바로 가기",
            src: (__webpack_require__(25813)/* ["default"] */ .A) + "",
            width: "177",
            height: "103"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "라인 차트 설정 옵션"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["라인 차트 위젯별 오른쪽 상단에 위치한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "더보기 아이콘",
            src: (__webpack_require__(57444)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "더보기"
            })
          }), " 아이콘을 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "설정 아이콘",
            src: (__webpack_require__(79852)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 설정 옵션을 확인할 수 있습니다. 라인 차트의 경우 설정 옵션을 통해 id가 되는 값을 변경할 수 있습니다. 해당 설정은 저장되지 않습니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Node CPU (%)"
              })
            }), " 위젯의 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Node"
              })
            }), "별 데이터 조회가 가능합니다. 메트릭스를 변경해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "ContainerName"
              })
            }), "별로 조회할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "쿠버네티스-클러스터-통합-퍼포먼스",
        children: "쿠버네티스 클러스터 통합 퍼포먼스"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["클러스터 프로젝트(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          class: "my",
          children: "Kubernetes"
        }), ")의 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 1",
          src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
          children: "쿠버네티스 클러스터 통합 퍼포먼스"
        }), " 영역에서 와탭 노드 에이전트 설치 여부와 관계없이 클러스터 전체 정보를 표시합니다. 네임스페이스 프로젝트로 분리된 정보도 통합해 표시합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "쿠버네티스-네임스페이스-퍼포먼스",
        children: "쿠버네티스 네임스페이스 퍼포먼스"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["네임스페이스 프로젝트(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          class: "my",
          children: "Namespace"
        }), ")의 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 1",
          src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
          children: "쿠버네티스 네임스페이스 퍼포먼스"
        }), " 영역에서 와탭 노드 에이전트 설치 여부와 관계없이 네임스페이스 정보를 표시합니다. 네임스페이스와 연관성이 있는 컨테이너, Pod, 노드의 정보를 표시합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "프로젝트-퍼포먼스",
        children: "프로젝트 퍼포먼스"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 2",
          src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "프로젝트 퍼포먼스"
          })
        }), " 영역은 프로젝트 내의 와탭 노드 에이전트 및 애플리케이션 에이전트가 설치된 대상의 정보를 표시합니다. 네임스페이스 프로젝트로 분리된 정보는 네임스페이스 프로젝트에서 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "에이전트 설치가 정상적으로 완료되지 않은 경우 데이터가 표시되지 않을 수 있습니다."
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "노드-정보",
        children: "노드 정보"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "위젯으로 제공하는 노드 정보는 다음과 같습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "최근 30분 차트"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Node CPU (%)"
                })
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Node Memory (%)"
                })
              }), " 등"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["노드 수량 위젯 오른쪽 위에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "더보기 아이콘",
                src: (__webpack_require__(57444)/* ["default"] */ .A) + "",
                width: "24",
                height: "24"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "더보기"
                })
              }), " 아이콘 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "바로가기 아이콘",
                src: (__webpack_require__(8701)/* ["default"] */ .A) + "",
                width: "24",
                height: "24"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "바로 가기"
                })
              }), " 아이콘을 차례로 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "클러스터"
                })
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "노드 목록"
                })
              }), " 메뉴로 이동합니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Node CPU (%)"
                })
              }), " 위젯과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Node Memory (%)"
                })
              }), " 위젯 오른쪽 위에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "더보기 아이콘",
                src: (__webpack_require__(57444)/* ["default"] */ .A) + "",
                width: "24",
                height: "24"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "더보기"
                })
              }), " 아이콘 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "바로가기 아이콘",
                src: (__webpack_require__(8701)/* ["default"] */ .A) + "",
                width: "24",
                height: "24"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "바로 가기"
                })
              }), " 아이콘을 차례로 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "분석"
                })
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "메트릭스 차트"
                })
              }), " 메뉴로 이동합니다. 해당 메뉴를 사용하면 더욱 자세한 조건을 통해 차트를 확인할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "컨테이너-정보",
        children: "컨테이너 정보"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "위젯으로 제공하는 컨테이너 정보는 다음과 같습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "최근 10분 차트"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Container Status"
                })
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Container CPU (%)"
                })
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Container Memory (%)"
                })
              }), " 등"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "애플리케이션-정보",
        children: "애플리케이션 정보"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "위젯으로 제공하는 애플리케이션 정보는 다음과 같습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "최근 10분 차트"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Active TX"
                })
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "TPS"
                })
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Response Time"
                })
              }), " 등"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "애플리케이션 정보는 애플리케이션 에이전트 설치 대상이 존재할 때 표시합니다."
        })
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

/***/ 79852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNDI4NyAxSDEzLjQyODdDMTUuMDY0NCAxIDE2LjM5NDQgMi4zMDkwNyAxNi40MjgxIDMuOTM1NjlDMTYuNzY4IDQuMTA0NSAxNy4wOTY3IDQuMjk0NjIgMTcuNDEyMiA0LjUwNDc1QzE4LjgzODYgMy43MjAyMSAyMC42MzcyIDQuMjE3NDYgMjEuNDU1IDUuNjMzOTdMMjIuNDU1IDcuMzY2MDNDMjMuMjczMSA4Ljc4Mjk1IDIyLjgwMzkgMTAuNTg5OCAyMS40MTEgMTEuNDMyMUMyMS40MjI4IDExLjYyMDYgMjEuNDI4NyAxMS44MSAyMS40Mjg3IDEyQzIxLjQyODcgMTIuMTkgMjEuNDIyOCAxMi4zNzk0IDIxLjQxMSAxMi41Njc5QzIyLjgwNDEgMTMuNDEwOCAyMy4yNzI5IDE1LjIxNzMgMjIuNDU1IDE2LjYzNEwyMS40NTUgMTguMzY2QzIwLjYzNzEgMTkuNzgyNyAxOC44MzgxIDIwLjI3OTkgMTcuNDEyMiAxOS40OTUzQzE3LjA5NjYgMTkuNzA1NCAxNi43NjggMTkuODk1NSAxNi40MjgxIDIwLjA2NDNDMTYuMzkzOCAyMS42OTE1IDE1LjA2NDEgMjMgMTMuNDI4NyAyM0gxMS40Mjg3QzkuNzkzMzUgMjMgOC40NjM1OSAyMS42OTE0IDguNDI5NCAyMC4wNjQzQzguMDg5NSAxOS44OTU1IDcuNzYwODIgMTkuNzA1NCA3LjQ0NTI2IDE5LjQ5NTNDNi4wMTg4NiAyMC4yNzk4IDQuMjIwMjggMTkuNzgyNSAzLjQwMjQ1IDE4LjM2NkwyLjQwMjQ1IDE2LjYzNEMxLjU4NDM5IDE1LjIxNzEgMi4wNTM1NSAxMy40MTAyIDMuNDQ2NDIgMTIuNTY3OUMzLjQzNDY1IDEyLjM3OTQgMy40Mjg3MyAxMi4xOSAzLjQyODczIDEyQzMuNDI4NzMgMTEuODEgMy40MzQ2NSAxMS42MjA2IDMuNDQ2NDIgMTEuNDMyMUMyLjA1MzQgMTAuNTg5MiAxLjU4NDUyIDguNzgyNzIgMi40MDI0NSA3LjM2NjAzTDMuNDAyNDUgNS42MzM5N0M0LjIyMDM5IDQuMjE3MjYgNi4wMTkzNSAzLjcyMDA3IDcuNDQ1MjcgNC41MDQ3NEM3Ljc2MDgyIDQuMjk0NjEgOC4wODk1IDQuMTA0NDkgOC40Mjk0MSAzLjkzNTY4QzguNDYzNjMgMi4zMDg1MiA5Ljc5MzM3IDEgMTEuNDI4NyAxWk0xMy40MzY2IDIuODMzMzNIMTEuMzk5NkMxMC44MzcxIDIuODMzMzMgMTAuMzgxMSAzLjI4OTM0IDEwLjM4MTEgMy44NTE4NUwxMC4zODEgNS4xNjU2M0M5LjI5Njc2IDUuNDg4MzMgOC4zMjA1OSA2LjA2MjAyIDcuNTE5OSA2LjgxOTMzTDYuMzgwMTMgNi4xNjE4QzUuODkyOTggNS44ODA1NCA1LjI3MDA2IDYuMDQ3NDUgNC45ODg4MSA2LjUzNDZMMy45NzAyOSA4LjI5ODczQzMuNjg5MDMgOC43ODU4OCAzLjg1NTk0IDkuNDA4OCA0LjM0MzA5IDkuNjkwMDVMNS40ODA5NCAxMC4zNDc2QzUuMzU1MDkgMTAuODc3OSA1LjI4ODQ4IDExLjQzMTIgNS4yODg0OCAxMkM1LjI4ODQ4IDEyLjU2ODggNS4zNTUwOSAxMy4xMjIxIDUuNDgwOTQgMTMuNjUyNEw0LjM0MzA5IDE0LjMwOTlDMy44NTU5NCAxNC41OTEyIDMuNjg5MDMgMTUuMjE0MSAzLjk3MDI5IDE1LjcwMTNMNC45ODg4MSAxNy40NjU0QzUuMjcwMDYgMTcuOTUyNSA1Ljg5Mjk4IDE4LjExOTUgNi4zODAxMyAxNy44MzgyTDcuNTE5OSAxNy4xODA3QzguMzIwNTkgMTcuOTM4IDkuMjk2NzYgMTguNTExNyAxMC4zODEgMTguODM0NEwxMC4zODExIDIwLjE0ODFDMTAuMzgxMSAyMC43MTA3IDEwLjgzNzEgMjEuMTY2NyAxMS4zOTk2IDIxLjE2NjdIMTMuNDM2NkMxMy45OTkxIDIxLjE2NjcgMTQuNDU1MiAyMC43MTA3IDE0LjQ1NTIgMjAuMTQ4MUwxNC40NTU4IDE4LjgzNDJDMTUuNTM5OSAxOC41MTE0IDE2LjUxNTggMTcuOTM3OCAxNy4zMTYzIDE3LjE4MDdMMTguNDU2MSAxNy44MzgyQzE4Ljk0MzIgMTguMTE5NSAxOS41NjYyIDE3Ljk1MjUgMTkuODQ3NCAxNy40NjU0TDIwLjg2NTkgMTUuNzAxM0MyMS4xNDcyIDE1LjIxNDEgMjAuOTgwMyAxNC41OTEyIDIwLjQ5MzEgMTQuMzA5OUwxOS4zNTUzIDEzLjY1MjRDMTkuNDgxMSAxMy4xMjIxIDE5LjU0NzcgMTIuNTY4OCAxOS41NDc3IDEyQzE5LjU0NzcgMTEuNDMxMiAxOS40ODExIDEwLjg3NzkgMTkuMzU1MyAxMC4zNDc2TDIwLjQ5MzEgOS42OTAwNUMyMC45ODAzIDkuNDA4OCAyMS4xNDcyIDguNzg1ODggMjAuODY1OSA4LjI5ODczTDE5Ljg0NzQgNi41MzQ2QzE5LjU2NjIgNi4wNDc0NSAxOC45NDMyIDUuODgwNTQgMTguNDU2MSA2LjE2MThMMTcuMzE2MyA2LjgxOTMzQzE2LjUxNTggNi4wNjIxNyAxNS41Mzk5IDUuNDg4NTYgMTQuNDU1OCA1LjE2NTgyTDE0LjQ1NTIgMy44NTE4NUMxNC40NTUyIDMuMjg5MzQgMTMuOTk5MSAyLjgzMzMzIDEzLjQzNjYgMi44MzMzM1pNMTIuNDc2MyAxNS42NjY3QzE0LjUwMTQgMTUuNjY2NyAxNi4xNDMgMTQuMDI1IDE2LjE0MyAxMkMxNi4xNDMgOS45NzQ5NiAxNC41MDE0IDguMzMzMzMgMTIuNDc2MyA4LjMzMzMzQzEwLjQ1MTMgOC4zMzMzMyA4LjgwOTY3IDkuOTc0OTYgOC44MDk2NyAxMkM4LjgwOTY3IDE0LjAyNSAxMC40NTEzIDE1LjY2NjcgMTIuNDc2MyAxNS42NjY3Wk0xMi40NzYzIDEzLjgzMzNDMTEuNDYzOCAxMy44MzMzIDEwLjY0MyAxMy4wMTI1IDEwLjY0MyAxMkMxMC42NDMgMTAuOTg3NSAxMS40NjM4IDEwLjE2NjcgMTIuNDc2MyAxMC4xNjY3QzEzLjQ4ODkgMTAuMTY2NyAxNC4zMDk3IDEwLjk4NzUgMTQuMzA5NyAxMkMxNC4zMDk3IDEzLjAxMjUgMTMuNDg4OSAxMy44MzMzIDEyLjQ3NjMgMTMuODMzM1oiIGZpbGw9IiM3NTc1NzUiLz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 57444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1tb3JlLXZlcnRpY2FsPC90aXRsZT4gLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2NC4wMDAwMDAsIC0yOTUxLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPg0KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9ImljLW1vcmUtdmVydGljYWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNC4wMDAwMDAsIDYwNS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMDAwMDAwLCAzLjAwMDAwMCkiIGlkPSJDb21iaW5lZC1TaGFwZSI+DQogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMiwxNCBDMy4xMDQ1Njk1LDE0IDQsMTQuODk1NDMwNSA0LDE2IEM0LDE3LjEwNDU2OTUgMy4xMDQ1Njk1LDE4IDIsMTggQzAuODk1NDMwNSwxOCAwLDE3LjEwNDU2OTUgMCwxNiBDMCwxNC44OTU0MzA1IDAuODk1NDMwNSwxNCAyLDE0IFogTTIsNyBDMy4xMDQ1Njk1LDcgNCw3Ljg5NTQzMDUgNCw5IEM0LDEwLjEwNDU2OTUgMy4xMDQ1Njk1LDExIDIsMTEgQzAuODk1NDMwNSwxMSAwLDEwLjEwNDU2OTUgMCw5IEMwLDcuODk1NDMwNSAwLjg5NTQzMDUsNyAyLDcgWiBNMiwwIEMzLjEwNDU2OTUsMCA0LDAuODk1NDMwNSA0LDIgQzQsMy4xMDQ1Njk1IDMuMTA0NTY5NSw0IDIsNCBDMC44OTU0MzA1LDQgMCwzLjEwNDU2OTUgMCwyIEMwLDAuODk1NDMwNSAwLjg5NTQzMDUsMCAyLDAgWiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+");

/***/ }),

/***/ 8701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OS4xICg4NjE0NCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+DQogIDwhLS0gPHRpdGxlPmljLWxpbms8L3RpdGxlPiAtLT4NCiAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTI5NTEuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+DQogICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+DQogICAgICAgICAgICAgIDxnIGlkPSJpYy1saW5rIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTIuMDAwMDAwLCA2MDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICA8ZyBpZD0iSWNvbiI+DQogICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYsOC45IEwxMSw4LjkgTDExLDcgTDYsNyBDMy4yNCw3IDEsOS4yNCAxLDEyIEMxLDE0Ljc2IDMuMjQsMTcgNiwxNyBMMTEsMTcgTDExLDE1LjEgTDYsMTUuMSBDNC4yOSwxNS4xIDIuOSwxMy43MSAyLjksMTIgQzIuOSwxMC4yOSA0LjI5LDguOSA2LDguOSBaIE03LDEzIEwxNywxMyBMMTcsMTEgTDcsMTEgTDcsMTMgTDcsMTMgWiBNMTMsNyBMMTMsOC45IEwxOCw4LjkgQzE5LjcxLDguOSAyMS4xLDEwLjI5IDIxLjEsMTIgQzIxLjEsMTMuNzEgMTkuNzEsMTUuMSAxOCwxNS4xIEwxMywxNS4xIEwxMywxNyBMMTgsMTcgQzIwLjc2LDE3IDIzLDE0Ljc2IDIzLDEyIEMyMyw5LjI0IDIwLjc2LDcgMTgsNyBMMTMsNyBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMi4wMDAwMDAsIDEyLjAwMDAwMCkgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTIuMDAwMDAwLCAtMTIuMDAwMDAwKSAiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgIDwvZz4NCiAgICAgIDwvZz4NCiAgPC9nPg0KPC9zdmc+");

/***/ }),

/***/ 25813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 29859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 93000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

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