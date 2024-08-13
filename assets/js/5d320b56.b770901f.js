"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[27240],{

/***/ 16408:
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
	id: 'agent-list',
	title: '쿠버네티스 에이전트 목록',
	description: '쿠버네티스 에이전트 목록을 확인합니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'관리',
		'에이전트 목록'
	],
	toc_max_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/agent-list",
  "title": "쿠버네티스 에이전트 목록",
  "description": "쿠버네티스 에이전트 목록을 확인합니다.",
  "source": "@site/docs/kubernetes/agent-list.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/agent-list",
  "permalink": "/kubernetes/agent-list",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/agent-list.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-list",
    "title": "쿠버네티스 에이전트 목록",
    "description": "쿠버네티스 에이전트 목록을 확인합니다.",
    "keywords": [
      "쿠버네티스",
      "쿠버네티스 모니터링",
      "관리",
      "에이전트 목록"
    ],
    "toc_max_heading_level": 2
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "쿠버네티스 에이전트",
    "permalink": "/kubernetes/agent-manage"
  },
  "next": {
    "title": "에이전트 업데이트",
    "permalink": "/kubernetes/agent-update"
  }
};
const assets = {

};

/*

새로고침

메트릭

상세 보기

컬럼 선택

다운로드

*/


const toc = [{
  "value": "새로고침",
  "id": "새로고침",
  "level": 4
}, {
  "value": "컬럼 선택",
  "id": "컬럼-선택",
  "level": 4
}, {
  "value": "다운로드",
  "id": "다운로드",
  "level": 4
}, {
  "value": "상세 보기",
  "id": "상세-보기",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    em: "em",
    h4: "h4",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 클러스터 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "관리"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "쿠버네티스 에이전트 목록"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["클러스터 프로젝트(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "my",
        children: "CP"
      }), ")의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "관리"
        })
      }), " 메뉴 하위에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "쿠버네티스 에이전트 목록"
        })
      }), " 메뉴로 이동할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "k8s-agent-list.png",
      desc: "쿠버네티스 에이전트 목록"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["쿠버네티스 에이전트의 설치 현황을 확인할 수 있습니다. 일부 에이전트가 미설치(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "UNINSTALLED"
            })
          }), ") 혹은 비활성화(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "INACTIVE"
            })
          }), ") 상태일 경우 데이터 수집에 왜곡이 생길 수 있습니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "State"
              })
            }), " 컬럼의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "UNINSTALLED"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "ACITVE"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "INACTIVE"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["마스터 에이전트에 할당된 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "CPU Limit"
            })
          }), "과 설치된 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "노드 에이전트 수"
            })
          }), "를 확인할 수 있습니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "노드 에이전트 수"
              })
            }), " 50개 이상일 경우 마스터 에이전트 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "CPU Limit"
              })
            }), " 500 밀리코어 이상으로 설정 권장"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "에이전트가 설치된 노드에 할당된 CPU 및 메모리 정보를 확인할 수 있습니다."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "노드 정보"
              })
            }), " 컬럼 하위의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "CapacityCpu"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "CapacityMemory"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "에이전트가 설치되지 않은 노드들을 확인할 수 있습니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "에이전트의 주요 정보를 확인할 수 있습니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "노드 에이전트 버전과 관련된 안내를 확인할 수 있습니다."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "예, 노드간 버전 불일치 시 상단에 버전 불일치 안내"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "마스터 에이전트 자원 할당"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["사용자의 쿠버네티스 환경 규모 즉 노드의 수에 따라 와탭 에이전트가 수집 및 처리하는 데이터의 양이 달라지기 때문에 마스터 에이전트에 충분한 자원 할당이 필요합니다. 예를 들어 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "노드 에이전트 수"
          })
        }), "가 많을 경우 마스터 에이전트 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "CPU Limit"
          })
        }), " 상향을 권장합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "새로고침",
        children: "새로고침"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["상단의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "새로고침 아이콘",
          src: (__webpack_require__(12422)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "새로고침"
          })
        }), " 아이콘 선택 시 현재 시간을 기준으로 데이터를 갱신할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "컬럼-선택",
        children: "컬럼 선택"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "컬럼 선택"
          })
        }), " 옵션 활용 시 원하는 에이전트 정보를 선택해 에이전트 목록을 조회할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "선택한 컬럼 목록은 메뉴 재진입 시 유지됩니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "초기화"
              })
            }), " 버튼 선택 시 사전 정의된 기본 주요 지표 컬럼이 선택됩니다. 이 경우 기존 컬럼 선택 내역은 삭제됩니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["컬럼 선택 후 우측 하단 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "적용"
              })
            }), " 버튼을 클릭 해 선택 내역을 적용할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "다운로드",
        children: "다운로드"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "CSV 다운로드 아이콘",
          src: (__webpack_require__(91002)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "다운로드"
          })
        }), " 아이콘 선택 시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "범위"
          })
        }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "표시 옵션"
          })
        }), "을 설정해 해당 데이터를 CSV 파일로 다운로드할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "상세-보기",
        children: "상세 보기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "에이전트 정보"
              })
            }), "의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Name"
              })
            }), " 컬럼 하위의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "돋보기 아이콘",
              src: (__webpack_require__(6971)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "상세 보기"
              })
            }), " 아이콘 선택 시 해당 에이전트의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "에이전트 로그"
              })
            }), "를 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "OnodeName"
              })
            }), " 컬럼 하위의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "상세 아이콘",
              src: (__webpack_require__(83533)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "노드 상세 보기"
              })
            }), " 아이콘 선택 시 해당 노드 상세 페이지로 이동합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "노드 상세"
                })
              }), "와 관련한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://docs.whatap.io/kubernetes/node-details",
                children: "다음 문서"
              }), "를 참조하세요."]
            })]
          }), "\n"]
        }), "\n"]
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

/***/ 83533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDRIMjBDMjEuMDM1MyA0IDIxLjg5MzQgNC43OTcyMyAyMS45OTA4IDUuODA4MUwyMiA2VjkuMzMzMzNIMjBWNkg0VjE4SDE0VjIwSDRDMi45NjQ3MSAyMCAyLjEwNjU3IDE5LjIwMjggMi4wMDkyIDE4LjE5MTlMMiAxOFY2QzIgNC45NjQ3MSAyLjc5NzIzIDQuMTA2NTcgMy44MDgxIDQuMDA5Mkw0IDRaTTIwLjQ1NjcgMTkuMjFMMTcuNTQ2NyAxNi4zQzE2Ljg1NjcgMTYuNzQgMTYuMDM2NyAxNyAxNS4xNTY3IDE3QzEyLjY3NjcgMTcgMTAuNjY2NyAxNC45OSAxMC42NjY3IDEyLjVDMTAuNjY2NyAxMC4wMSAxMi42NzY3IDggMTUuMTY2NyA4QzE3LjY1NjcgOCAxOS42NjY3IDEwLjAxIDE5LjY2NjcgMTIuNUMxOS42NjY3IDEzLjM4IDE5LjQwNjcgMTQuMTkgMTguOTY2NyAxNC44OUwyMS44NzY3IDE3Ljc5TDIwLjQ1NjcgMTkuMjFaTTE1LjE2NjcgMTBDMTMuNzg2NyAxMCAxMi42NjY3IDExLjEyIDEyLjY2NjcgMTIuNUMxMi42NjY3IDEzLjg4IDEzLjc4NjcgMTUgMTUuMTY2NyAxNUMxNi41NDY3IDE1IDE3LjY2NjcgMTMuODggMTcuNjY2NyAxMi41QzE3LjY2NjcgMTEuMTIgMTYuNTQ2NyAxMCAxNS4xNjY3IDEwWiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 12422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi41IDE5Ljg5MzNMMTIgMjNWMjAuOTkwOUM3LjAyOTQ0IDIwLjk5MDkgMyAxNi45NDMgMyAxMS45NDk4QzMgMTAuMTQ0IDMuNTI3MDEgOC40NjE4MiA0LjQzNDk0IDcuMDUwMDZMNi4wMzc4IDguMjYzNDJDNS4zNzk3IDkuMzM1MjggNSAxMC41OTggNSAxMS45NDk4QzUgMTUuODMzNCA4LjEzNDAxIDE4Ljk4MTcgMTIgMTguOTgxN1YxNi45NzI2TDE2LjUgMTkuODkzM1pNNy41IDMuOTIwN0wxMiA3LjAyNzRWNC45MTc4MUMxNS44NjYgNC45MTc4MSAxOSA4LjA2NjEzIDE5IDExLjk0OThDMTkgMTMuMzI5NCAxOC42MDQ1IDE0LjYxNjMgMTcuOTIxMSAxNS43MDIyTDE5LjUyMjggMTYuOTE0NkMyMC40NTY2IDE1LjQ4OTYgMjEgMTMuNzgzNCAyMSAxMS45NDk4QzIxIDYuOTU2NTEgMTYuOTcwNiAyLjkwODY4IDEyIDIuOTA4NjhWMUw3LjUgMy45MjA3WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 6971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4wNTEzIDE0LjY2MzZDMTguNDQ3OSAxMS41ODQxIDE4LjIzMSA3LjEyOTcgMTUuNDAwNCA0LjI5OTE1QzEyLjMzNDkgMS4yMzM2MiA3LjM2NDY4IDEuMjMzNjIgNC4yOTkxNSA0LjI5OTE1QzEuMjMzNjIgNy4zNjQ2OCAxLjIzMzYyIDEyLjMzNDkgNC4yOTkxNSAxNS40MDA0QzcuMTI5NyAxOC4yMzEgMTEuNTg0MSAxOC40NDc5IDE0LjY2MzYgMTYuMDUxM0wxOS42MTIzIDIxTDIxIDE5LjYxMjNMMTYuMDUxMyAxNC42NjM2Wk0xNC4wMTI4IDE0LjAxMjhDMTEuNzEzNiAxNi4zMTE5IDcuOTg1OTUgMTYuMzExOSA1LjY4NjggMTQuMDEyOEMzLjM4NzY2IDExLjcxMzYgMy4zODc2NiA3Ljk4NTk1IDUuNjg2OCA1LjY4NjhDNy45ODU5NSAzLjM4NzY2IDExLjcxMzYgMy4zODc2NiAxNC4wMTI4IDUuNjg2ODFDMTYuMzExOSA3Ljk4NTk1IDE2LjMxMTkgMTEuNzEzNiAxNC4wMTI4IDE0LjAxMjhaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 91002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICA8IS0tIDx0aXRsZT5pYy1jc3YtZG93bmxvYWQ8L3RpdGxlPiAtLT4KICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU5LjAwMDAwMCwgLTMxOTEuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+CiAgICAgICAgICA8ZyBpZD0iYXBwbGljYXRpb24taWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMjM0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICA8ZyBpZD0iaWMtY3N2LWRvd25sb2FkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTkuMDAwMDAwLCA4NDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzLjAwMDAwMCkiIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQsMCBMMjQsMTggTDAsMTggTDAsMCBMMjQsMCBaIE0yMiwyIEwyLDIgTDIsMTYgTDIyLDE2IEwyMiwyIFogTTYuNzQ4LDQuOCBDNy4yMzkzMzU3OSw0LjggNy42NzAxNjQ4Miw0Ljg4NDMzMjQ5IDguMDQwNSw1LjA1MyBDOC40MTA4MzUxOSw1LjIyMTY2NzUxIDguNzIwNjY1NDIsNS40NTQ0OTg1MiA4Ljk3LDUuNzUxNSBDOS4yMTkzMzQ1OCw2LjA0ODUwMTQ5IDkuNDA0NDk5NCw2LjM5NjgzMTM0IDkuNTI1NSw2Ljc5NjUgQzkuNjQ2NTAwNjEsNy4xOTYxNjg2NyA5LjcwMzMzMzM3LDcuNjI2OTk3NjkgOS42OTYsOC4wODkgTDcuOTgsOC4wODkgQzcuOTY1MzMzMjYsNy43MzY5OTgyNCA3LjkzMDUwMDI4LDcuNDQ3MzM0NDcgNy44NzU1LDcuMjIgQzcuODIwNDk5NzMsNi45OTI2NjU1MyA3Ljc0NTMzMzgxLDYuODEzMDAwNjYgNy42NSw2LjY4MSBDNy41NTQ2NjYxOSw2LjU0ODk5OTM0IDcuNDQyODMzOTgsNi40NTkxNjY5MSA3LjMxNDUsNi40MTE1IEM3LjE4NjE2NjAzLDYuMzYzODMzMSA3LjA0MTMzNDE0LDYuMzQgNi44OCw2LjM0IEM2LjY4OTMzMjM4LDYuMzQgNi41MDk2Njc1MSw2LjM4NTgzMjg4IDYuMzQxLDYuNDc3NSBDNi4xNzIzMzI0OSw2LjU2OTE2NzEzIDYuMDI3NTAwNjEsNi43MTU4MzIzMyA1LjkwNjUsNi45MTc1IEM1Ljc4NTQ5OTQsNy4xMTkxNjc2OCA1LjY5MDE2NzAyLDcuMzg0OTk4MzUgNS42MjA1LDcuNzE1IEM1LjU1MDgzMjk5LDguMDQ1MDAxNjUgNS41MTYsOC40NDQ2NjQzMiA1LjUxNiw4LjkxNCBDNS41MTYsOS4zOTA2NjkwNSA1LjU1MDgzMjk5LDkuNzkyMTY1MDQgNS42MjA1LDEwLjExODUgQzUuNjkwMTY3MDIsMTAuNDQ0ODM1IDUuNzg1NDk5NCwxMC43MDg4MzIzIDUuOTA2NSwxMC45MTA1IEM2LjAyNzUwMDYxLDExLjExMjE2NzcgNi4xNzIzMzI0OSwxMS4yNTg4MzI5IDYuMzQxLDExLjM1MDUgQzYuNTA5NjY3NTEsMTEuNDQyMTY3MSA2LjY4OTMzMjM4LDExLjQ4OCA2Ljg4LDExLjQ4OCBDNy4xMDAwMDExLDExLjQ4OCA3LjI3NzgzMjY2LDExLjQ0MDMzMzggNy40MTM1LDExLjM0NSBDNy41NDkxNjczNSwxMS4yNDk2NjYyIDcuNjU3MzMyOTMsMTEuMTIzMTY3NSA3LjczOCwxMC45NjU1IEM3LjgxODY2NzA3LDEwLjgwNzgzMjUgNy44NzU0OTk4NCwxMC42MjgxNjc3IDcuOTA4NSwxMC40MjY1IEM3Ljk0MTUwMDE3LDEwLjIyNDgzMjMgNy45NjUzMzMyNiwxMC4wMTc2Njc3IDcuOTgsOS44MDUgTDkuNjk2LDkuODA1IEM5LjY5NiwxMC4yNTk2Njg5IDkuNjMxODMzOTgsMTAuNjgxMzMxNCA5LjUwMzUsMTEuMDcgQzkuMzc1MTY2MDMsMTEuNDU4NjY4NiA5LjE4NjMzNDU4LDExLjc5OTY2NTIgOC45MzcsMTIuMDkzIEM4LjY4NzY2NTQyLDEyLjM4NjMzNDggOC4zNzk2Njg1LDEyLjYxNTQ5OTIgOC4wMTMsMTIuNzgwNSBDNy42NDYzMzE1LDEyLjk0NTUwMDggNy4yMjQ2NjkwNSwxMy4wMjggNi43NDgsMTMuMDI4IEM2LjMwMDY2NDQzLDEzLjAyOCA1Ljg5NTUwMTgyLDEyLjk0MzY2NzUgNS41MzI1LDEyLjc3NSBDNS4xNjk0OTgxOSwxMi42MDYzMzI1IDQuODU5NjY3OTUsMTIuMzUxNTAxNyA0LjYwMywxMi4wMTA1IEM0LjM0NjMzMjA1LDExLjY2OTQ5ODMgNC4xNDgzMzQwMywxMS4yNDIzMzU5IDQuMDA5LDEwLjcyOSBDMy44Njk2NjU5NywxMC4yMTU2NjQxIDMuOCw5LjYxMDY3MDE1IDMuOCw4LjkxNCBDMy44LDguMjI0NjYzMjIgMy44Njk2NjU5Nyw3LjYyMTUwMjU5IDQuMDA5LDcuMTA0NSBDNC4xNDgzMzQwMyw2LjU4NzQ5NzQyIDQuMzQ2MzMyMDUsNi4xNTg1MDE3MSA0LjYwMyw1LjgxNzUgQzQuODU5NjY3OTUsNS40NzY0OTgzIDUuMTY5NDk4MTksNS4yMjE2Njc1MSA1LjUzMjUsNS4wNTMgQzUuODk1NTAxODIsNC44ODQzMzI0OSA2LjMwMDY2NDQzLDQuOCA2Ljc0OCw0LjggWiBNMTIuNDI3NjY2Nyw0LjggQzEzLjE4MzAwMzgsNC44IDEzLjc3MTQ5NzksNC45ODE0OTgxOSAxNC4xOTMxNjY3LDUuMzQ0NSBDMTQuNjE0ODM1NCw1LjcwNzUwMTgyIDE0Ljg4Nzk5OTQsNi4yODEzMjk0MSAxNS4wMTI2NjY3LDcuMDY2IEwxMy4zODQ2NjY3LDcuMDY2IEMxMy4zNjk5OTk5LDYuNzk0NjY1MzEgMTMuMjg1NjY3NCw2LjU4MDE2NzQ2IDEzLjEzMTY2NjcsNi40MjI1IEMxMi45Nzc2NjU5LDYuMjY0ODMyNTUgMTIuNzY1MDAxNCw2LjE4NiAxMi40OTM2NjY3LDYuMTg2IEMxMi4yMjk2NjUzLDYuMTg2IDEyLjAyMjUwMDgsNi4yNzAzMzI0OSAxMS44NzIxNjY3LDYuNDM5IEMxMS43MjE4MzI2LDYuNjA3NjY3NTEgMTEuNjQ2NjY2Nyw2LjgxMjk5ODc5IDExLjY0NjY2NjcsNy4wNTUgQzExLjY0NjY2NjcsNy4yODk2Njc4NCAxMS43MzI4MzI1LDcuNDcxMTY2MDMgMTEuOTA1MTY2Nyw3LjU5OTUgQzEyLjA3NzUwMDksNy43Mjc4MzM5OCAxMi4yOTU2NjUzLDcuODQxNDk5NTEgMTIuNTU5NjY2Nyw3Ljk0MDUgQzEyLjgyMzY2OCw4LjAzOTUwMDUgMTMuMTA1OTk4NSw4LjE0MDMzMjgyIDEzLjQwNjY2NjcsOC4yNDMgQzEzLjcwNzMzNDgsOC4zNDU2NjcxOCAxMy45ODk2NjUzLDguNDkwNDk5MDcgMTQuMjUzNjY2Nyw4LjY3NzUgQzE0LjUxNzY2OCw4Ljg2NDUwMDk0IDE0LjczNTgzMjUsOS4xMTE5OTg0NiAxNC45MDgxNjY3LDkuNDIgQzE1LjA4MDUwMDksOS43MjgwMDE1NCAxNS4xNjY2NjY3LDEwLjEzMTMzMDggMTUuMTY2NjY2NywxMC42MyBDMTUuMTY2NjY2NywxMS4wMDQwMDE5IDE1LjA5ODgzNCwxMS4zMzc2NjUyIDE0Ljk2MzE2NjcsMTEuNjMxIEMxNC44Mjc0OTkzLDExLjkyNDMzNDggMTQuNjQwNTAxMiwxMi4xNzU0OTkgMTQuNDAyMTY2NywxMi4zODQ1IEMxNC4xNjM4MzIxLDEyLjU5MzUwMSAxMy44Nzk2NjgzLDEyLjc1Mjk5OTUgMTMuNTQ5NjY2NywxMi44NjMgQzEzLjIxOTY2NSwxMi45NzMwMDA2IDEyLjg2MDMzNTMsMTMuMDI4IDEyLjQ3MTY2NjcsMTMuMDI4IEMxMS41NDAzMjg3LDEzLjAyOCAxMC44NjIwMDIxLDEyLjc5NTE2OSAxMC40MzY2NjY3LDEyLjMyOTUgQzEwLjAxMTMzMTIsMTEuODYzODMxIDkuNzk4NjY2NjcsMTEuMjE2NjcwOCA5Ljc5ODY2NjY3LDEwLjM4OCBMMTEuNDcwNjY2NywxMC4zODggQzExLjQ4NTMzMzQsMTAuNzg0MDAyIDExLjU2OTY2NTksMTEuMDc3MzMyNCAxMS43MjM2NjY3LDExLjI2OCBDMTEuODc3NjY3NCwxMS40NTg2Njc2IDEyLjEzNzk5ODIsMTEuNTU0IDEyLjUwNDY2NjcsMTEuNTU0IEMxMi44MTI2NjgyLDExLjU1NCAxMy4wNDczMzI1LDExLjQ2NzgzNDIgMTMuMjA4NjY2NywxMS4yOTU1IEMxMy4zNzAwMDA4LDExLjEyMzE2NTggMTMuNDUwNjY2NywxMC44OTQwMDE0IDEzLjQ1MDY2NjcsMTAuNjA4IEMxMy40NTA2NjY3LDEwLjM4Nzk5ODkgMTMuMzY0NTAwOSwxMC4yMTIwMDA3IDEzLjE5MjE2NjcsMTAuMDggQzEzLjAxOTgzMjUsOS45NDc5OTkzNCAxMi44MDE2NjgsOS44MzI1MDA1IDEyLjUzNzY2NjcsOS43MzM1IEMxMi4yNzM2NjUzLDkuNjM0NDk5NTEgMTEuOTkxMzM0OCw5LjUzMzY2NzE4IDExLjY5MDY2NjcsOS40MzEgQzExLjM4OTk5ODUsOS4zMjgzMzI4MiAxMS4xMDc2NjgsOS4xOTA4MzQyIDEwLjg0MzY2NjcsOS4wMTg1IEMxMC41Nzk2NjUzLDguODQ2MTY1ODEgMTAuMzYxNTAwOSw4LjYyMjUwMTM4IDEwLjE4OTE2NjcsOC4zNDc1IEMxMC4wMTY4MzI1LDguMDcyNDk4NjMgOS45MzA2NjY2Nyw3LjcxMTMzNTU3IDkuOTMwNjY2NjcsNy4yNjQgQzkuOTMwNjY2NjcsNi44ODk5OTgxMyA5Ljk4NzQ5OTQzLDYuNTUwODM0ODYgMTAuMTAxMTY2Nyw2LjI0NjUgQzEwLjIxNDgzMzksNS45NDIxNjUxNSAxMC4zNzk4MzIzLDUuNjgxODM0NDIgMTAuNTk2MTY2Nyw1LjQ2NTUgQzEwLjgxMjUwMTEsNS4yNDkxNjU1OSAxMS4wNzQ2NjUxLDUuMDg0MTY3MjQgMTEuMzgyNjY2Nyw0Ljk3MDUgQzExLjY5MDY2ODIsNC44NTY4MzI3NyAxMi4wMzg5OTgxLDQuOCAxMi40Mjc2NjY3LDQuOCBaIE0xNi41MzQzMzMzLDQuOTMyIEwxNy44NzYzMzMzLDEwLjQxIEwxNy44OTgzMzMzLDEwLjQxIEwxOS4yNjIzMzMzLDQuOTMyIEwyMC44MjQzMzMzLDQuOTMyIEwxOC42MDIzMzMzLDEyLjg5NiBMMTcuMTI4MzMzMywxMi44OTYgTDE0LjkwNjMzMzMsNC45MzIgTDE2LjUzNDMzMzMsNC45MzIgWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgPC9nPgogICAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=");

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