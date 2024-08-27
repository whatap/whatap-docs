"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[95843],{

/***/ 2823:
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
	id: 'container-map-log',
	title: 'Log',
	description: '컨테이너 또는 컨테이너 내부에서 실행 중인 애플리케이션이 출력하는 로그를 바로 확인할 수 있습니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'Log'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/container-map-log",
  "title": "Log",
  "description": "컨테이너 또는 컨테이너 내부에서 실행 중인 애플리케이션이 출력하는 로그를 바로 확인할 수 있습니다.",
  "source": "@site/docs/kubernetes/container-map-log.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/container-map-log",
  "permalink": "/whatap-docs/kubernetes/container-map-log",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/container-map-log.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "container-map-log",
    "title": "Log",
    "description": "컨테이너 또는 컨테이너 내부에서 실행 중인 애플리케이션이 출력하는 로그를 바로 확인할 수 있습니다.",
    "keywords": [
      "쿠버네티스",
      "쿠버네티스 모니터링",
      "Log"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "Metrics",
    "permalink": "/whatap-docs/kubernetes/container-map-metrics"
  },
  "next": {
    "title": "Event",
    "permalink": "/whatap-docs/kubernetes/container-map-event"
  }
};
const assets = {

};

/*

실시간으로 발생하는 로그는 컨테이너 ***Stdout/Stderr*** 탭의 최근 로그 메시지와 ***로그 검색*** 탭을 통해 조회할 수 있습니다. >

*/
/*>

* 와탭 모니터링 서비스 페이지에서 ***관리*** > ***에이전트 설정***을 통해 `logsink_enabled=true` 설정 추가
* 클러스터 프로젝트 전체 노드를 대상으로 설정을 추가하려면 ***프로젝트 디폴트*** > ***노드*** 대상으로 설정 추가
* 일부 노드를 대상으로 설정을 추가하려면 단일 또는 복수 노드 선택 후 설정 추가

***관리*** > ***에이전트 설정*** > 노드 에이전트 선택 > ***+ 옵션 추가*** > 모든 에이전트에 적용할 옵션 선택 > 적용 대상 노드 선택

![에이전트 설정](https://img.whatap.io/media/images/whatap_kubernetes_container_map_logsink_enabled.png)

:::note

와탭 로그 모니터링 서비스에 대한 자세한 내용은 [다음 문서](../log/introduction)를 참조하세요.

:::

### 로그 검색 이동

![로그 검색 이동 sc](/img/k8s-log-search-to-log-search.png)

***로그*** 탭 오른쪽에 ***로그 검색*** 버튼을 클릭하면 필터 기능 등을 통해 상세 조회할 수 있는 ***로그*** > ***로그 검색*** 메뉴로 이동합니다.


:::note

와탭 로그 모니터링 서비스에 대한 자세한 내용은 [다음 문서](../log/introduction)를 참조하세요.

:::

*/


const toc = [{
  "value": "쿠버네티스 로그",
  "id": "쿠버네티스-로그",
  "level": 2
}, {
  "value": "최근 로그 메시지 (컨테이너 Stdout/Stderr)",
  "id": "최근-로그-메시지-컨테이너-stdoutstderr",
  "level": 2
}, {
  "value": "로그 검색",
  "id": "로그-검색",
  "level": 2
}, {
  "value": "일반 블록과 마이크로 블록",
  "id": "block",
  "level": 4
}, {
  "value": "그룹",
  "id": "group",
  "level": 4
}, {
  "value": "Standard Out 저장을 위한 노드 에이전트 설정 추가",
  "id": "standard-out-저장을-위한-노드-에이전트-설정-추가",
  "level": 4
}, {
  "value": "컨테이너 내부 애플리케이션 로그 수집을 위한 애플리케이션 에이전트 설정 추가",
  "id": "컨테이너-내부-애플리케이션-로그-수집을-위한-애플리케이션-에이전트-설정-추가",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "대시보드"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "컨테이너 맵"
        })
      }), " > 대상 선택 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "BTN07712",
        className: "uitext"
      }), " 화면 진입 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "로그"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "쿠버네티스-로그",
        children: "쿠버네티스 로그"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "와탭 쿠버네티스 모니터링 서비스는 쿠버네티스에서 발생하는 로그를 수집하고 저장합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "쿠버네티스는 다음 두 종류의 로그가 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "각 컨테이너의 Standard Out(표준 출력) 로그"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "각 컨테이너 내부에서 실행 중인 애플리케이션이 출력하는 로그"
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "이러한 로그는 컨테이너의 상태나 메트릭 정보로는 확인하기 힘든 모니터링의 사각지대를 보완하는 역할을 합니다. 이 로그를 확인하는 방법은 다음과 같습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["각 컨테이너의 Standard Out 로그의 경우는 컨테이너 내부에 진입하지 않아도 쿠버네티스가 제공하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "kubectl logs"
            }), " 명령을 통해 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "각 컨테이너 내부의 애플리케이션 로그는 컨테이너 내부에 진입하여 확인하거나 별도의 로그 수집 방안을 수립해야 합니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "최근-로그-메시지-컨테이너-stdoutstderr",
        children: "최근 로그 메시지 (컨테이너 Stdout/Stderr)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "현재 컨테이너 로그를 바로 확인할 수 있는 기능입니다. 사용자의 클러스터 환경에서 직접 로그를 가져와 선택한 컨테이너의 실시간 로그 또는 선택한 Pod 내 애플리케이션의 실시간 로그를 확인할 수 있습니다. 일반적으로 컨테이너 로그를 확인하기 위해서는 다음 명령어를 사용합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "kubectl logs pod/<Pod명> -n <Namespace명>\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Pod 내에 2개 이상의 컨테이너가 존재한다면 개별 컨테이너를 선택해 로그를 확인합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "kubectl logs pod/<Pod명> -c <컨테이너명> -n <Namespace명>\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["로그를 확인하기 위해 매번 터미널 화면에 접근해 커맨드 라인 도구를 실행하는 것은 매우 불편합니다. 와탭 쿠버네티스 모니터링의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "로그"
          })
        }), " 기능을 사용하면 편리하게 현재 로그를 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-container-log.png",
        desc: "최근 로그 메시지"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["다만 생각해봐야 할 점이 있습니다. 우선 컨테이너를 종료하면 더 이상 로그를 확인할 수 없습니다. 또한 컨테이너가 계속 실행 중이더라도 일정 기간 또는 일정 용량의 로그만 확인할 수 있다는 단점이 있습니다. 와탭의 최근 로그 메시지(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "컨테이너 Stdout/Stderr"
          })
        }), ") 기능은 사용자 쿠버네티스 환경의 로그를 와탭을 통해 볼 수 있게 제공하는 기능으로 사용자 환경에서 사라진 로그는 와탭을 통해서도 확인하기 어렵습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "따라서 로그 데이터를 안정적이고 지속적으로 관리하기 위해서는 별도의 관리 방안이 필수적입니다. 특히 마이크로서비스 아키텍처 도입이 확산되면서 비즈니스를 구성하는 컨테이너 수량이 증가함에 따라 로그의 확인, 관리 방안은 더욱 복잡해지고 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "좋은 방법이 있을까요?"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "로그-검색",
        children: "로그 검색"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["컨테이너 종료 시 관련 로그가 모두 사라지지만 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "로그 검색"
          })
        }), " 기능을 통해 선택한 컨테이너 또는 Pod에서 과거에 발생한 로그를 확인할 수 있습니다. 컨테이너 Standard Out 로그 저장 시 원하는 만큼 저장 기간을 설정할 수 있고 특정 대상별 정보를 확인하거나 상호 연계 분석을 할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-log-search.png",
        desc: "로그 검색"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 1",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 시간 선택자를 통해 데이터 조회를 원하는 시점을 선택할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 2",
              src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 왼쪽 카테고리 옵션을 통해 카테고리를 지정해 조회할 수 있습니다. 조회할 수 있는 카테고리에 대한 설명은 다음의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "#block",
              children: "블록"
            }), "과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "#group",
              children: "그룹"
            }), " 안내를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 2",
              src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 오른쪽 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "태그 숨기기"
              })
            }), "를 선택하면 로그 기록 중 태그 정보를 제외한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "타임스탬프"
              })
            }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "메시지"
              })
            }), "를 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 2",
              src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 오른쪽 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "로그 검색"
              })
            }), " 버튼을 클릭하면 필터 기능 등을 통해 상세 조회할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "로그"
              })
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "로그 검색"
              })
            }), " 메뉴로 이동합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 3",
              src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "더보기 아이콘",
              src: (__webpack_require__(49137)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "더보기"
              })
            }), " 아이콘을 선택하면 해당 로그의 파싱된 키와 값 및 로그 메시지를 확인할 수 있습니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../log/log-search",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "block",
        children: "일반 블록과 마이크로 블록"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "컨테이너 블록 sc",
          src: (__webpack_require__(8689)/* ["default"] */ .A) + "",
          width: "373",
          height: "188"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "a 아이콘",
              src: (__webpack_require__(89332)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "일반 블록"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["컨테이너 맵의 다각형 하나를 블록이라고 합니다. 로그의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "containerStdout"
            }), " 카테고리에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "containerid"
            }), " 가 일치하는 정보를 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "b 아이콘",
              src: (__webpack_require__(77191)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "마이크로 블록"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["에이전트가 설치된 블록을 마이크로 블록이라고 합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "containerStdout"
            }), " 카테고리 뿐 아니라 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "AppLog"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "AppStdOut"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "AppStdErr"
            }), " 등 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "App*"
            }), " 관련 카테고리도 확인할 수 있습니다. 해당 카테고리를 선택할 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "microOid"
            }), "(블록 내 에이전트 id)가 일치하는 로그 정보를 확인할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "group",
        children: "그룹"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "컨테이너 블록 그룹 sc",
          src: (__webpack_require__(62661)/* ["default"] */ .A) + "",
          width: "1210",
          height: "547"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "컨테이너 맵"
          })
        }), " 화면에서 전체 블록을 선택한 경우 혹은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "상세 보기"
        }), " 화면의 카드에서 블록을 다중 선택한 경우 해당 다중 블록을 그룹이라고 합니다. 그룹 선택 시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "로그 검색"
          })
        }), " 탭에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "containerStdout"
        }), " 카테고리와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "App*"
        }), " 카테고리의 모든 로그를 확인할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "standard-out-저장을-위한-노드-에이전트-설정-추가",
        children: "Standard Out 저장을 위한 노드 에이전트 설정 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["와탭 로그 서비스를 통해 컨테이너의 Standard Output을 저장하기 위해서는 와탭 쿠버네티스 노드 에이전트에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "logsink_enabled=true"
        }), " 옵션을 설정해야 합니다. 설정 및 와탭 로그 모니터링 서비스에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "../log/log-k8s#k8s-log-node",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "컨테이너-내부-애플리케이션-로그-수집을-위한-애플리케이션-에이전트-설정-추가",
        children: "컨테이너 내부 애플리케이션 로그 수집을 위한 애플리케이션 에이전트 설정 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["와탭 로그 서비스를 통해 컨테이너 상에서 실행되는 애플리케이션의 로그를 수집하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "../log/log-k8s#k8s-log-app",
          children: "다음 문서"
        }), "를 참조하세요. Java, Python, Go를 지원합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "caution",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["와탭 로그 서비스를 활성화하고 컨테이너의 Standard Output 로그 저장 기능을 사용하면 그에 따른 추가 비용이 청구됩니다. 관련한 요금에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://www.whatap.io/ko/pricing/",
            children: "다음 문서"
          }), "를 참조하세요."]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "일부 구 버전 에이전트의 경우는 컨테이너 Standard Output 로그 저장 기능을 제공하지 않습니다. 에이전트 업그레이드 방법은 다음과 같습니다."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bahs",
            metastring: "title='Agent update'",
            children: "kubectl set image daemonset/whatap-node-agent whatap-node-agent=whatap/kube_mon:<에이전트버전> -n whatap-monitoring\n"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["와탭 쿠버네티스 에이전트 버전은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://hub.docker.com/r/whatap/kube_mon/tags",
            children: "다음 문서"
          }), "를 통해 확인할 수 있습니다."]
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

/***/ 89332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTcuNSIgY3k9IjE3LjUiIHI9IjE3LjUiIGZpbGw9IiNGOUMxMkEiLz4KPHBhdGggZD0iTTE5LjY3MTkgMjIuNTYyNVYxNC4xNDA2QzE5LjY3MTkgMTMuNTU3MyAxOS41ODg1IDEzLjA4ODUgMTkuNDIxOSAxMi43MzQ0QzE5LjI2NTYgMTIuMzgwMiAxOS4wMzEyIDEyLjEyNSAxOC43MTg4IDExLjk2ODhDMTguNDE2NyAxMS44MDIxIDE4LjAzNjUgMTEuNzE4OCAxNy41NzgxIDExLjcxODhDMTcuMDk5IDExLjcxODggMTYuNjkyNyAxMS44MTc3IDE2LjM1OTQgMTIuMDE1NkMxNi4wMzY1IDEyLjIxMzUgMTUuNzkxNyAxMi40ODQ0IDE1LjYyNSAxMi44MjgxQzE1LjQ1ODMgMTMuMTYxNSAxNS4zNzUgMTMuNTQ2OSAxNS4zNzUgMTMuOTg0NEgxMS43MzQ0QzExLjczNDQgMTMuMzA3MyAxMS44Njk4IDEyLjY1NjIgMTIuMTQwNiAxMi4wMzEyQzEyLjQyMTkgMTEuNDA2MiAxMi44MjI5IDEwLjg0OSAxMy4zNDM4IDEwLjM1OTRDMTMuODY0NiA5Ljg2OTc5IDE0LjQ5NDggOS40ODQzOCAxNS4yMzQ0IDkuMjAzMTJDMTUuOTc0IDguOTIxODggMTYuNzk2OSA4Ljc4MTI1IDE3LjcwMzEgOC43ODEyNUMxOC43ODY1IDguNzgxMjUgMTkuNzUgOC45NjM1NCAyMC41OTM4IDkuMzI4MTJDMjEuNDM3NSA5LjY4MjI5IDIyLjA5OSAxMC4yNjA0IDIyLjU3ODEgMTEuMDYyNUMyMy4wNjc3IDExLjg1NDIgMjMuMzEyNSAxMi44OTU4IDIzLjMxMjUgMTQuMTg3NVYyMi4wNzgxQzIzLjMxMjUgMjIuODU5NCAyMy4zNTk0IDIzLjU1NzMgMjMuNDUzMSAyNC4xNzE5QzIzLjU1NzMgMjQuNzc2IDIzLjY5NzkgMjUuMzAyMSAyMy44NzUgMjUuNzVWMjZIMjAuMTcxOUMyMC4wMDUyIDI1LjU5MzggMTkuODgwMiAyNS4wNzI5IDE5Ljc5NjkgMjQuNDM3NUMxOS43MTM1IDIzLjgwMjEgMTkuNjcxOSAyMy4xNzcxIDE5LjY3MTkgMjIuNTYyNVpNMjAuMTU2MiAxNS43MDMxTDIwLjE3MTkgMTguMDYyNUgxOC40MjE5QzE3LjkwMSAxOC4wNjI1IDE3LjQzMjMgMTguMTM1NCAxNy4wMTU2IDE4LjI4MTJDMTYuNTk5IDE4LjQxNjcgMTYuMjQ0OCAxOC42MTQ2IDE1Ljk1MzEgMTguODc1QzE1LjY3MTkgMTkuMTI1IDE1LjQ1MzEgMTkuNDMyMyAxNS4yOTY5IDE5Ljc5NjlDMTUuMTUxIDIwLjE2MTUgMTUuMDc4MSAyMC41NjI1IDE1LjA3ODEgMjFDMTUuMDc4MSAyMS41MzEyIDE1LjE1MSAyMS45NjM1IDE1LjI5NjkgMjIuMjk2OUMxNS40NTMxIDIyLjYzMDIgMTUuNjc3MSAyMi44ODAyIDE1Ljk2ODggMjMuMDQ2OUMxNi4yNzA4IDIzLjIwMzEgMTYuNjM1NCAyMy4yODEyIDE3LjA2MjUgMjMuMjgxMkMxNy42NDU4IDIzLjI4MTIgMTguMTUxIDIzLjE1NjIgMTguNTc4MSAyMi45MDYyQzE5LjAxNTYgMjIuNjQ1OCAxOS4zNDkgMjIuMzMzMyAxOS41NzgxIDIxLjk2ODhDMTkuODE3NyAyMS42MDQyIDE5LjkxMTUgMjEuMjcwOCAxOS44NTk0IDIwLjk2ODhMMjAuNjg3NSAyMi40ODQ0QzIwLjYwNDIgMjIuODgwMiAyMC40NDc5IDIzLjI5NjkgMjAuMjE4OCAyMy43MzQ0QzIwIDI0LjE3MTkgMTkuNzEzNSAyNC41ODg1IDE5LjM1OTQgMjQuOTg0NEMxOS4wMDUyIDI1LjM4MDIgMTguNTc4MSAyNS43MDMxIDE4LjA3ODEgMjUuOTUzMUMxNy41NzgxIDI2LjE5MjcgMTcgMjYuMzEyNSAxNi4zNDM4IDI2LjMxMjVDMTUuMzk1OCAyNi4zMTI1IDE0LjU1MjEgMjYuMTE0NiAxMy44MTI1IDI1LjcxODhDMTMuMDcyOSAyNS4zMjI5IDEyLjQ4OTYgMjQuNzU1MiAxMi4wNjI1IDI0LjAxNTZDMTEuNjQ1OCAyMy4yNjU2IDExLjQzNzUgMjIuMzY5OCAxMS40Mzc1IDIxLjMyODFDMTEuNDM3NSAyMC40ODQ0IDExLjU3ODEgMTkuNzE4OCAxMS44NTk0IDE5LjAzMTJDMTIuMTQwNiAxOC4zNDM4IDEyLjU1NzMgMTcuNzU1MiAxMy4xMDk0IDE3LjI2NTZDMTMuNjYxNSAxNi43NjU2IDE0LjM1NDIgMTYuMzgwMiAxNS4xODc1IDE2LjEwOTRDMTYuMDMxMiAxNS44Mzg1IDE3LjAxNTYgMTUuNzAzMSAxOC4xNDA2IDE1LjcwMzFIMjAuMTU2MloiIGZpbGw9IiMzMzMzMzMiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 77191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTcuNSIgY3k9IjE3LjUiIHI9IjE3LjUiIGZpbGw9IiNGOUMxMkEiLz4KPHBhdGggZD0iTTEyLjg0MzggNUgxNi40Njg4VjI1LjM3NUwxNi4xODc1IDI5SDEyLjg0MzhWNVpNMjUuNTc4MSAxOS44OTA2VjIxLjIxODhDMjUuNTc4MSAyMi41NzI5IDI1LjQ2MzUgMjMuNzU1MiAyNS4yMzQ0IDI0Ljc2NTZDMjUuMDA1MiAyNS43NzYgMjQuNjYxNSAyNi42MTk4IDI0LjIwMzEgMjcuMjk2OUMyMy43NDQ4IDI3Ljk3NCAyMy4xNzE5IDI4LjQ3OTIgMjIuNDg0NCAyOC44MTI1QzIxLjc5NjkgMjkuMTQ1OCAyMC45OTQ4IDI5LjMxMjUgMjAuMDc4MSAyOS4zMTI1QzE5LjIyNCAyOS4zMTI1IDE4LjQ4NDQgMjkuMTI1IDE3Ljg1OTQgMjguNzVDMTcuMjQ0OCAyOC4zNjQ2IDE2LjcyNCAyNy44MjgxIDE2LjI5NjkgMjcuMTQwNkMxNS44ODAyIDI2LjQ0MjcgMTUuNTQ2OSAyNS42MTQ2IDE1LjI5NjkgMjQuNjU2MkMxNS4wNTczIDIzLjY5NzkgMTQuODgwMiAyMi42NDA2IDE0Ljc2NTYgMjEuNDg0NFYxOS42MjVDMTQuODY5OCAxOC40Njg4IDE1LjA0MTcgMTcuNDExNSAxNS4yODEyIDE2LjQ1MzFDMTUuNTMxMiAxNS40ODQ0IDE1Ljg2NDYgMTQuNjU2MiAxNi4yODEyIDEzLjk2ODhDMTYuNjk3OSAxMy4yNzA4IDE3LjIxODggMTIuNzM0NCAxNy44NDM4IDEyLjM1OTRDMTguNDY4OCAxMS45NzQgMTkuMjA4MyAxMS43ODEyIDIwLjA2MjUgMTEuNzgxMkMyMC45ODk2IDExLjc4MTIgMjEuNzk2OSAxMS45NDc5IDIyLjQ4NDQgMTIuMjgxMkMyMy4xNzE5IDEyLjYxNDYgMjMuNzQ0OCAxMy4xMTk4IDI0LjIwMzEgMTMuNzk2OUMyNC42NjE1IDE0LjQ2MzUgMjUuMDA1MiAxNS4zMDczIDI1LjIzNDQgMTYuMzI4MUMyNS40NjM1IDE3LjMzODUgMjUuNTc4MSAxOC41MjYgMjUuNTc4MSAxOS44OTA2Wk0yMS45Mzc1IDIxLjIxODhWMTkuODkwNkMyMS45Mzc1IDE5LjAzNjUgMjEuODkwNiAxOC4yOTY5IDIxLjc5NjkgMTcuNjcxOUMyMS43MTM1IDE3LjA0NjkgMjEuNTYyNSAxNi41MzEyIDIxLjM0MzggMTYuMTI1QzIxLjEzNTQgMTUuNzA4MyAyMC44NDM4IDE1LjM5NTggMjAuNDY4OCAxNS4xODc1QzIwLjA5MzggMTQuOTc5MiAxOS42MTk4IDE0Ljg3NSAxOS4wNDY5IDE0Ljg3NUMxOC41NDY5IDE0Ljg3NSAxOC4xMTQ2IDE0Ljk3NCAxNy43NSAxNS4xNzE5QzE3LjM5NTggMTUuMzY5OCAxNy4wOTM4IDE1LjY1MSAxNi44NDM4IDE2LjAxNTZDMTYuNTkzOCAxNi4zNjk4IDE2LjM5NTggMTYuNzgxMiAxNi4yNSAxNy4yNUMxNi4xMDQyIDE3LjcwODMgMTYuMDA1MiAxOC4yMDMxIDE1Ljk1MzEgMTguNzM0NFYyMi4zNzVDMTYuMDI2IDIzLjA3MjkgMTYuMTcxOSAyMy43MTM1IDE2LjM5MDYgMjQuMjk2OUMxNi42MTk4IDI0Ljg4MDIgMTYuOTQ3OSAyNS4zNDM4IDE3LjM3NSAyNS42ODc1QzE3LjgxMjUgMjYuMDMxMiAxOC4zODAyIDI2LjIwMzEgMTkuMDc4MSAyNi4yMDMxQzE5LjYzMDIgMjYuMjAzMSAyMC4wODg1IDI2LjEwOTQgMjAuNDUzMSAyNS45MjE5QzIwLjgxNzcgMjUuNzM0NCAyMS4xMDk0IDI1LjQzNzUgMjEuMzI4MSAyNS4wMzEyQzIxLjU1NzMgMjQuNjI1IDIxLjcxMzUgMjQuMTA5NCAyMS43OTY5IDIzLjQ4NDRDMjEuODkwNiAyMi44NDkgMjEuOTM3NSAyMi4wOTM4IDIxLjkzNzUgMjEuMjE4OFoiIGZpbGw9IiMzMzMzMzMiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 49137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzY1XzE5NDYpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjUgNkwxNi41IDEyTDguNSAxOEw4LjUgNloiIGZpbGw9IiM3NTc1NzUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF82NV8xOTQ2Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");

/***/ }),

/***/ 8689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 62661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-container-group-8801e654191b838c95e45e0ffae6c3f5.png");

/***/ }),

/***/ 15856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 29675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

/***/ }),

/***/ 55522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC");

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