"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[68171],{

/***/ 7194:
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
	id: 'pageload-stat',
	title: '페이지 로드 통계',
	description: '페이지 로드 통계는 웹 사이트의 페이지 URL 경로별로 로드 성능 정보를 제공합니다.',
	keywords: [
		'브라우저 모니터링',
		'페이지 로드',
		'통계'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "browser/pageload-stat",
  "title": "페이지 로드 통계",
  "description": "페이지 로드 통계는 웹 사이트의 페이지 URL 경로별로 로드 성능 정보를 제공합니다.",
  "source": "@site/docs/browser/pageload-stat.mdx",
  "sourceDirName": "browser",
  "slug": "/browser/pageload-stat",
  "permalink": "/whatap-docs/browser/pageload-stat",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/browser/pageload-stat.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "pageload-stat",
    "title": "페이지 로드 통계",
    "description": "페이지 로드 통계는 웹 사이트의 페이지 URL 경로별로 로드 성능 정보를 제공합니다.",
    "keywords": [
      "브라우저 모니터링",
      "페이지 로드",
      "통계"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "rumsSidebar",
  "previous": {
    "title": "세션 리플레이",
    "permalink": "/whatap-docs/browser/session-replay"
  },
  "next": {
    "title": "메트릭스",
    "permalink": "/whatap-docs/browser/metrics-intro"
  }
};
const assets = {

};



const toc = [{
  "value": "기본 사용 안내",
  "id": "기본-사용-안내",
  "level": 2
}, {
  "value": "조회 시간 설정하기",
  "id": "조회-시간-설정하기",
  "level": 3
}, {
  "value": "통계 기준 선택하기",
  "id": "통계-기준-선택하기",
  "level": 3
}, {
  "value": "조회 결과 다운로드하기",
  "id": "조회-결과-다운로드하기",
  "level": 3
}, {
  "value": "화면 구성",
  "id": "화면-구성",
  "level": 2
}, {
  "value": "<Cmdname></Cmdname>: <Cmdname></Cmdname>/<Cmdname></Cmdname>/<Cmdname></Cmdname>",
  "id": "Statisticalcriteria",
  "level": 4
}, {
  "value": "<Cmdname></Cmdname>: <Cmdname></Cmdname>",
  "id": "percent",
  "level": 4
}, {
  "value": "조회 결과 필터링하기",
  "id": "조회-결과-필터링하기",
  "level": 2
}, {
  "value": "페이지 그룹 필터",
  "id": "페이지-그룹-필터",
  "level": 3
}, {
  "value": "성능 지표 필터",
  "id": "성능-지표-필터",
  "level": 3
}, {
  "value": "컬럼 설정하기",
  "id": "setcolumn",
  "level": 2
}, {
  "value": "컬럼 추가하기",
  "id": "컬럼-추가하기",
  "level": 3
}, {
  "value": "컬럼 삭제하기",
  "id": "컬럼-삭제하기",
  "level": 3
}, {
  "value": "컬럼 순서 변경하기",
  "id": "컬럼-순서-변경하기",
  "level": 3
}, {
  "value": "컬럼 설정 초기화하기",
  "id": "컬럼-설정-초기화하기",
  "level": 3
}, {
  "value": "컬럼 및 용어 안내",
  "id": "columninfo",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_statistics",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_pageLoadStatistics",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_pageLoadStatistics",
        className: "uitext"
      }), " 메뉴는 웹 사이트의 페이지별 로드 성능 정보를 제공합니다. 이 메뉴을 통해 각 페이지가 로드되는 과정을 상세하게 추적할 수 있으며, 성능이 저하된 페이지를 식별하고 개선된 페이지의 성과를 분석할 수 있습니다. 또한 웹 애플리케이션의 사용자 경험을 개선하기 위한 유용한 정보를 얻을 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "페이지 URL 경로별 로드 성능 통계를 제공합니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "평균값, 최댓값, 최솟값, 백분위수 기반 통계를 확인할 수 있습니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "페이지 로드 과정의 세부 시간에 대한 필터를 통해 성능을 집중 분석할 수 있습니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Navigation Timing API를 통해 페이지 로드의 각 단계 별 시간을 수집하여 통계를 제공합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_pageLoadStatistics",
          className: "uitext"
        }), " 메뉴에서 수집하는 데이터에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "collect-data#pageloadtime",
          children: "다음 문서"
        }), "를 참조하세요."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "기본-사용-안내",
        children: "기본 사용 안내"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "페이지의 URL 경로를 기준으로 페이지 로드 시간 및 DOM 로드 시간, 네트워크 지연 시간, 리소스 로드 시간 등 다양한 성능 지표를 제공합니다. 이를 통해 페이지 성능 최적화 여부를 확인할 수 있습니다"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-pageload-statistics.png",
        desc: "페이지 로드 통계"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "time",
              className: "uitext"
            }), "에서 성능 지표를 조회할 날짜와 시간을 설정하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08276",
              className: "uitext"
            }), "에서 원하는 기준을 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["화면 오른쪽 상단의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "검색 아이콘",
              src: (__webpack_require__(71973)/* ["default"] */ .A) + "",
              width: "28",
              height: "28"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "조회한 시간 범위의 성능 지표를 각 섹션에서 그래프 차트와 목록을 통해서 확인할 수 있습니다. 각 섹션의 그래프 차트로 마우스를 오버하면 해당 시간대의 지표 정보를 확인할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL08276",
            className: "uitext"
          }), "에 대한 자세한 내용은 다음 문서를 참조하세요."]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "조회-시간-설정하기",
        children: "조회 시간 설정하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "time",
          className: "uitext"
        }), "에서 성능 지표를 조회할 날짜와 시간을 설정하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "가장 오른쪽의 녹색 버튼을 선택하면 다양한 시간 범위를 선택할 수 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "browser-statistics-set-time-select-options.png",
            className: "width-600",
            desc: "시간 설정"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "왼쪽 방향 아이콘",
              src: (__webpack_require__(92541)/* ["default"] */ .A) + "",
              width: "24",
              height: "25"
            }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "오른쪽 방향 아이콘",
              src: (__webpack_require__(21376)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " 버튼을 선택해 시간을 이동할 수 있습니다. 이동 간격은 오른쪽에 설정된 시간 간격입니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "원하는 날짜와 시간을 직접 선택하려면 날짜 및 시간 영역을 클릭하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "browser-statistics-set-custom-time.png",
            desc: "시간 설정"
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "최대 선택할 수 있는 시간은 3일이며, 최소 선택할 수 있는 시간은 5분입니다."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "2시간 이하 범위를 선택하면 5분 단위로 데이터를 조회하고, 2시간을 초과하면 1시간 단위로 데이터를 조회합니다."
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "통계-기준-선택하기",
        children: "통계 기준 선택하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08276",
          className: "uitext"
        }), "은 사용자가 분석하려는 통계 지표를 다음 선택한 기준으로 확인할 수 있는 옵션입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "merge_avg",
              className: "uitext"
            }), ": 각 페이지의 평균 로드 시간을 계산하여 통계를 제공합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "merge_max",
              className: "uitext"
            }), ": 각 페이지의 최대 로드 시간을 기준으로 통계를 제공합니다. 즉, 페이지 로드 시간이 가장 비효율적인 페이지 URL을 파악할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "merge_min",
              className: "uitext"
            }), ": 각 페이지의 최소 로드 시간을 기준으로 통계를 제공합니다. 이를 통해 가장 최적의 조건에서 로드된 페이지 URL을 확인할 수 있습니다. 또는 성능 최적화 목표를 설정할 때 유용합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "ITM08291",
              className: "uitext"
            }), ": 각 페이지 백분위수 기준 로드 시간에 대한 통계를 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "TTL08288",
                  className: "uitext",
                  replace: "95"
                }), ": 가장 느린 5%의 페이지 로드 시간으로, 페이지 로드 시간이 가장 느렸던 상위 5% 사용자의 경험을 의미합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "TTL08288",
                  className: "uitext",
                  replace: "90"
                }), ": 가장 느린 10% 사용자의 페이지 로드 시간으로, 주로 느린 사용자 그룹의 성능 문제를 파악할 때 유용합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "TTL08288",
                  className: "uitext",
                  replace: "75"
                }), ": 페이지 로드 시간이 하위 75%보다 느린 상위 25% 사용자의 로드 시간을 보여줍니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "TTL08288",
                  className: "uitext",
                  replace: "50"
                }), ": 중간값으로, 전체 사용자 중 절반은 해당 시간보다 빠르게 페이지를 로드하고, 절반은 더 느리게 로드한 것을 의미합니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "tip",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "merge_avg",
                className: "uitext"
              }), "은 전체적인 성능의 흐름을 파악하는 데 유용하지만, 성능 저하가 간헐적으로 발생하는 경우를 파악하기 어려울 수 있습니다. 이때 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "merge_max",
                className: "uitext"
              }), "과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "ITM08291",
                className: "uitext"
              }), " 옵션을 함께 활용하면 성능 저하가 언제 발생했는지, 그 심각성은 어느 정도인지 확인할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "merge_min",
                className: "uitext"
              }), "은 성능 최적화 목표를 설정하거나 특정 최적화가 얼마나 효과적인지 평가할 때 참고할 수 있습니다. 하지만 이 값만으로는 성능의 일관성을 평가하기 어렵기 때문에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "merge_avg",
                className: "uitext"
              }), "이나 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "ITM08291",
                className: "uitext"
              }), " 옵션과 함께 통계 정보를 분석하는 것이 좋습니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "ITM08291",
                className: "uitext"
              }), " 옵션은 단순한 평균보다 더 세밀하게 성능 데이터를 분석하는 데 적합하며 사용자 경험을 개선하는 데 중요한 데이터를 제공합니다. 이 옵션을 활용하면 성능 저하가 발생하는 사용자의 비율을 파악하고 최적화 대상 페이지를 효과적으로 선택할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "조회-결과-다운로드하기",
        children: "조회 결과 다운로드하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["조회한 데이터를 CSV 형식의 파일로 다운로드할 수 있습니다. 화면 오른쪽 상단의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "다운로드 아이콘",
          src: (__webpack_require__(39855)/* ["default"] */ .A) + "",
          width: "49",
          height: "24"
        }), " 버튼을 선택하세요. CSV 파일 이름은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
          children: ["LoadStatistics_", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "YYYYMMDD_HHMMSS"
          }), ".csv"]
        }), " 형식입니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "화면-구성",
        children: "화면 구성"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "TTL08305",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08305"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "페이지 로드 횟수와 성능 지표(응답 시간)의 변화를 시간대별 추이를 시각화한 차트입니다. 이 그래프를 통해 특정 시간대에 성능 변동이 있었는지 확인할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["특정 시간의 파란색 막대 그래프를 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08306",
              className: "uitext"
            }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08304",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08445",
              className: "uitext"
            }), " 섹션의 데이터를 선택한 시간 범위에 맞춰 조회할 수 있습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "browser-statistics-pageload-trend-select-time.png",
            desc: "페이지 로드 성능 추이"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08276",
              className: "uitext"
            }), "에서 선택한 옵션에 따라 차트에 표시되는 항목은 변경됩니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
        id: "Statisticalcriteria",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08276"
        }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "merge_avg"
        }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "merge_max"
        }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "merge_min"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-statistics-pageload-trend.png",
        desc: "페이지 로드 성능 추이"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "파란색 막대 그래프는 특정 시간대에 로드된 페이지의 수입니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "보라색 선 그래프는 해당 시간대의 평균 페이지 로드 시간입니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
        id: "percent",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08276"
        }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "ITM08291"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-statistics-pageload-trend-pecent.png",
        desc: "페이지 로드 성능 추이"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["파란색은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08288",
              className: "uitext",
              replace: "50"
            }), ", 보라색은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08288",
              className: "uitext",
              replace: "75"
            }), ", 주황색은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08288",
              className: "uitext",
              replace: "90"
            }), ", 초록색은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08288",
              className: "uitext",
              replace: "95"
            }), "를 나타냅니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "파란색 막대 그래프는 특정 시간대에 로드된 페이지의 수입니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "TTL08306",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08306"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "5분 또는 1시간 간격으로 페이지 그룹을 그룹화하고, 단위별 페이지 로드 시간이 가장 긴 상위 10개의 페이지 그룹을 시계열 그래프로 표시합니다. 이 그래프는 페이지 로드 시간이 긴 순으로 정렬하여 표시합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-statistics-pageload-time-top.png",
        desc: "페이지 로드 시간 Top10"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "섹션 하단의 막대 그래프는 시계열 그래프로 표현되는 데이터의 페이지 그룹별 평균값입니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08276",
              className: "uitext"
            }), "이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "merge_avg",
              className: "uitext"
            }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "merge_max",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "merge_min",
              className: "uitext"
            }), "이면 선택한 기준값으로 경과 시간을 표현합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08276",
              className: "uitext"
            }), "이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "ITM08291",
              className: "uitext"
            }), "이면 경과 시간을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08288",
              className: "uitext",
              replace: "95"
            }), "로 표현합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "데이터가 연속된 시간 구간으로 수집되지 않고 특정 구간에만 존재하는 경우 막대 그래프만 표시됩니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "TTL08304",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08304"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "5분 또는 1시간 간격으로 페이지 그룹을 그룹화하고, 단위별 페이지 로드 수가 가장 많은 상위 10개의 페이지 그룹을 시계열 그래프로 표시합니다. 이 그래프는 페이지 로드 수가 많은 순으로 정렬하여 표시합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-statistics-pageload-count-top.png",
        desc: "페이지 로드 수 Top10"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "섹션 하단의 막대 그래프는 시계열 그래프로 표현되는 데이터의 페이지 그룹별 합산값입니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "데이터가 연속된 시간 구간으로 수집되지 않고 특정 구간에만 존재하는 경우 막대 그래프만 표시됩니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "TTL08445",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08445"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "페이지 그룹을 기준으로 다양한 성능 지표를 확인할 수 있는 목록입니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-statistics-pageload-group-list.png",
        desc: "페이지 그룹 목록"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08276",
              className: "uitext"
            }), "을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "ITM08291",
              className: "uitext"
            }), "로 선택하면 페이지 그룹별 건수와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08288",
              className: "uitext",
              replace: "50"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08288",
              className: "uitext",
              replace: "75"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08288",
              className: "uitext",
              replace: "90"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08288",
              className: "uitext",
              replace: "95"
            }), "에 대한 경과 시간을 추가로 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["목록의 가장 왼쪽의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "상세 아이콘",
              src: (__webpack_require__(65557)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "detail",
              className: "uitext"
            }), " 버튼을 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08448",
              className: "uitext"
            }), " 화면이 표시됩니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08448",
              className: "uitext"
            }), " 화면을 통해서 선택한 페이지 그룹의 상세한 통계 정보를 확인할 수 있습니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "#TTL08448",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "page_group",
              className: "uitext"
            }), " 컬럼의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "오른쪽 방향 아이콘",
              src: (__webpack_require__(21376)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " 버튼을 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_userSessionEventSearch",
              className: "uitext"
            }), " 메뉴로 이동할 수 있습니다. 선택한 페이지 그룹 URL 및 조회 시간을 필터로 적용한 결과를 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "컬럼 아이콘",
              src: (__webpack_require__(56189)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN06441",
              className: "uitext"
            }), ": 테이블 헤더 컬럼을 감추거나 원하는 항목을 추가할 수 있습니다. 컬럼 순서를 변경할 수도 있습니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "#setcolumn",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_pageLoadStatistics",
                className: "uitext"
              }), " 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_userSessionEventSearch",
                className: "uitext"
              }), " 메뉴로 이동할 때 지정한 시간 범위 전후의 데이터도 포함될 수 있습니다."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "2시간 이상 조회"
                  }), ": 1시간 단위로 데이터를 조회하며, 조회 시간 범위 전후로 각각 1시간이 추가됩니다."]
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
                  children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                    children: ["예, 2024년 10월 21일 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                      children: "11시부터 14시"
                    }), "까지 3시간을 조회하면, 실제 조회 범위는 2024년 10월 21일 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                      children: "10시부터 15시"
                    }), "까지 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                      children: "5시간"
                    }), "으로 확장됩니다."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "2시간 이내 조회"
                  }), ": 5분 단위로 데이터를 조회하며, 조회 시간 범위 전후로 각각 5분이 추가됩니다."]
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
                  children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                    children: ["예, 2024년 10월 21일 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                      children: "11시부터 11시 30분"
                    }), "까지 30분을 조회하면, 실제 조회 범위는 2024년 10월 21일 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                      children: "10시 55분부터 11시 35분"
                    }), "까지 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                      children: "40분"
                    }), "으로 확장됩니다."]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["테이블의 컬럼 헤더에 마우스를 오버하면 해당 컬럼에 대한 상제 정보를 툴팁 형태로 제공합니다. 컬럼 항목에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "#columninfo",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
              img: "browser-statistics-pagegroup-header.png",
              desc: "Tooltip"
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "TTL08448",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08448"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "선택한 페이지 그룹의 상세한 통계 정보를 확인할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL08447",
            className: "uitext"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "browser-statistics-pageload-timeline.png",
            desc: "Page load timeline"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["웹 애플리케이션의 전체 페이지 로드 성능 정보를 제공합니다. 페이지 로드 시간과 로드 단계별 과정을 평균 시간으로 나타냅니다. 이를 통해 브라우저 애플리케이션의 전반적인 성능을 파악할 수 있습니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "dashboard#pageloadtimeline",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08276",
                className: "uitext"
              }), "이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "ITM08291",
                className: "uitext"
              }), "이면 페이지 로드 성능을 백분위로 표시합니다. 파란색은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08288",
                className: "uitext",
                replace: "50"
              }), ", 보라색은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08288",
                className: "uitext",
                replace: "75"
              }), ", 주황색은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08288",
                className: "uitext",
                replace: "90"
              }), ", 초록색은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08288",
                className: "uitext",
                replace: "95"
              }), "를 나타냅니다."]
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL06932",
            className: "uitext"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "browser-statistics-pageload-time.png",
            desc: "Page load time"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["선택한 페이지 그룹의 시간에 따른 페이지 로드 시간을 확인할 수 있습니다. 선택 상자에서 다양한 성능 지표를 선택할 수 있습니다. 성능 지표에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "#columninfo",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08276",
                className: "uitext"
              }), "이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "ITM08291",
                className: "uitext"
              }), "이면 백분위별 페이지 로드 시간을 제공합니다."]
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL06931",
            className: "uitext"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "browser-statistics-pageload-count.png",
            desc: "Page load count"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "선택한 페이지 그룹의 시간에 따른 페이지 로드 수를 확인할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08374",
              className: "uitext",
              type: "browser"
            }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08374",
              className: "uitext",
              type: "os"
            }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08374",
              className: "uitext",
              type: "device"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "browser-statistics-pageload-top10.png",
            desc: "Page load top10"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "페이지 로드 건수를 기준으로 상위 10개의 브라우저, 운영체제, 디바이스 항목을 원형 그래프로 제공합니다. 이를 통해 웹 애플리케이션을 이용하는 사용자의 환경을 파악할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08375",
              className: "uitext",
              type: "browser"
            }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08375",
              className: "uitext",
              type: "os"
            }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08375",
              className: "uitext",
              type: "device"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "browser-statistics-pageload-time-top10.png",
            desc: "Page load top10"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "브라우저, 운영체제, 디바이스 별 페이지 로드 시간을 제공합니다. 이를 통해 페이지 로드 시간이 느려지는 사용자의 환경을 파악할 수 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["각 섹션의 오른쪽 상단의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "테이블 아이콘",
                src: (__webpack_require__(93365)/* ["default"] */ .A) + "",
                width: "50",
                height: "50"
              }), " 버튼을 선택하면 테이블 목록 형식으로 변경할 수 있습니다. 테이블 목록 형식에서는 경과 시간과 세부 시간에 대한 정보를 추가로 제공합니다. 다시 그래프 형식으로 변경하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "그래프 아이콘",
                src: (__webpack_require__(25585)/* ["default"] */ .A) + "",
                width: "48",
                height: "48"
              }), " 버튼을 선택하세요."]
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL08446",
            className: "uitext"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "browser-statistics-pagel-url-path-list.png",
            desc: "Page load top10"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "페이지 URL 경로(Path)를 기준으로 다양한 성능 지표를 한눈에 확인할 수 있는 테이블 목록입니다. 정규 표현식으로 그룹화하지 않은 URL path를 기준으로 목록을 제공합니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["목록의 가장 왼쪽의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                  alt: "상세 아이콘",
                  src: (__webpack_require__(65557)/* ["default"] */ .A) + "",
                  width: "24",
                  height: "24"
                }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "detail",
                  className: "uitext"
                }), " 버튼을 선택하면 페이지 URL path 기준 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "TTL08448",
                  className: "uitext"
                }), " 화면을 확인할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "TTL08449",
                  className: "uitext"
                }), " 컬럼의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                  alt: "오른쪽 방향 아이콘",
                  src: (__webpack_require__(21376)/* ["default"] */ .A) + "",
                  width: "24",
                  height: "24"
                }), " 버튼을 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "side_userSessionEventSearch",
                  className: "uitext"
                }), " 메뉴로 이동할 수 있습니다. 선택한 페이지 그룹 URL 및 조회 시간을 필터로 적용한 결과를 확인할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "TTL08446",
                    className: "uitext"
                  }), "에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "side_userSessionEventSearch",
                    className: "uitext"
                  }), " 메뉴로 이동할 때 지정한 시간 범위 전후의 데이터도 포함될 수 있습니다."]
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                  children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                        children: "2시간 이상 조회"
                      }), ": 1시간 단위로 데이터를 조회하며, 조회 시간 범위 전후로 각각 1시간이 추가됩니다."]
                    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
                      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                        children: ["예, 2024년 10월 21일 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                          children: "11시부터 14시"
                        }), "까지 3시간을 조회하면, 실제 조회 범위는 2024년 10월 21일 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                          children: "10시부터 15시"
                        }), "까지 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                          children: "5시간"
                        }), "으로 확장됩니다."]
                      }), "\n"]
                    }), "\n"]
                  }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                        children: "2시간 이내 조회"
                      }), ": 5분 단위로 데이터를 조회하며, 조회 시간 범위 전후로 각각 5분이 추가됩니다."]
                    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
                      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                        children: ["예, 2024년 10월 21일 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                          children: "11시부터 11시 30분"
                        }), "까지 30분을 조회하면, 실제 조회 범위는 2024년 10월 21일 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                          children: "10시 55분부터 11시 35분"
                        }), "까지 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                          children: "40분"
                        }), "으로 확장됩니다."]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["테이블의 컬럼 헤더에 마우스를 오버하면 해당 컬럼에 대한 상제 정보를 툴팁 형태로 제공합니다. 컬럼 항목에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                    href: "#columninfo",
                    children: "다음 문서"
                  }), "를 참조하세요."]
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
                  img: "browser-statistics-pageurlpath-header.png",
                  desc: "Tooltip"
                }), "\n"]
              }), "\n"]
            })
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "info",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "데이터 수집 제한"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "5분마다 최대 5,000개의 페이지 URL path 목록을 생성하여 서버로 전송합니다."
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "5분 동안 고유한 URL path의 수가 5,000개를 초과하면 추가 데이터는 무시됩니다."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "데이터 정확성"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Navigation Timing API"
              }), "에서 일부 세부 시간 정보가 0으로 수집될 수 있습니다. 이로 인해 특정 성능 지표가 표시되지 않을 수 있습니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "차트 간격"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "조회하는 데이터의 시간 단위에 따라 차트 간격이 결정됩니다."
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "1시간 데이터로 조회하면 차트 간격은 1시간으로 표시됩니다."
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "5분 데이터로 조회하면 차트 간격은 5분으로 표시됩니다."
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "조회-결과-필터링하기",
        children: "조회 결과 필터링하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["조회한 통계 데이터를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "page_group",
          className: "uitext"
        }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08292",
          className: "uitext"
        }), "를 기준으로 필터링하여 원하는 내용을 집중 분석할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "페이지-그룹-필터",
        children: "페이지 그룹 필터"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["특정 URL과 관련한 페이지를 선택해 성능 데이터를 조회할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "page_group",
          className: "uitext"
        }), " 옵션에서 원하는 페이지 그룹 항목을 선택하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-statistics-page-group-filter.png",
        desc: "페이지 그룹"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "페이지 그룹은 최대 3개까지 선택할 수 있습니다."
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "성능-지표-필터",
        children: "성능 지표 필터"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["성능 지표는 페이지 로드 시간, 리다이렉트 시간, 다운로드 시간 등을 의미합니다. 다양한 성능 지표에 임계값을 적용하여 조회할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08292",
          className: "uitext"
        }), " 옵션에서 원하는 지표 항목을 선택한 다음 임계값과 연산자 조건을 적용하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-statistics-perf-metrics-filter.png",
        desc: "성능 지표"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["연산자 종류: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: ">"
            }), "(보다 큼), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: ">="
            }), "(보다 크거나 같음), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "<"
            }), "(보다 작음), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "<="
            }), "(보다 작거나 같음), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "=="
            }), "(같음)"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "임곗값으로 양수, 음수, 0을 입력할 수 있지만, 선택한 성능 지표에 따라 음수 입력 여부는 다를 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "한 개의 성능 지표에 대해 필터를 적용하고 조회할 수 있습니다."
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["선택할 수 있는 성능 지표에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "#columninfo",
            children: "다음 문서"
          }), "를 참조하세요."]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "setcolumn",
        children: "컬럼 설정하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08445",
          className: "uitext"
        }), "에서 테이블 헤더 컬럼을 감추거나 원하는 항목을 추가할 수 있습니다. 컬럼 순서를 변경할 수도 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "컬럼 아이콘",
          src: (__webpack_require__(56189)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN06441",
          className: "uitext"
        }), " 버튼을 선택하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-statistics-setting-column.png",
        desc: "컬럼 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["왼쪽 목록을 오른차순 또는 내림차순으로 정렬하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "정렬 아이콘",
            src: (__webpack_require__(27531)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "정렬 아이콘",
            src: (__webpack_require__(52600)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 버튼을 선택하세요."]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "컬럼-추가하기",
        children: "컬럼 추가하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "왼쪽 목록에서 추가할 컬럼 항목을 선택하세요."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "선택한 컬럼 항목이 오른쪽 목록에 추가된 것을 확인하세요."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["원하는 컬럼 항목을 모두 추가했으면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "confirm",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["모든 컬럼 항목을 선택하려면 왼쪽 목록 상단의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "select_all",
                className: "uitext"
              }), "을 클릭하세요."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["컬럼 항목에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "#columninfo",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "컬럼-삭제하기",
        children: "컬럼 삭제하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["오른쪽 목록에서 삭제할 컬럼 항목의 오른쪽에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "삭제 아이콘",
              src: (__webpack_require__(88054)/* ["default"] */ .A) + "",
              width: "20",
              height: "20"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "왼쪽 목록에서 삭제한 컬럼 항목의 체크 박스가 해제된 것을 확인하세요."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["원하는 컬럼 항목을 모두 삭제했으면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "confirm",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "컬럼-순서-변경하기",
        children: "컬럼 순서 변경하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음 제공하는 기능을 통해 컬럼의 순서를 변경하거나 원하는 항목을 고정할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "오른쪽 목록에서 순서를 변경할 항목을 드래그해서 원하는 위치로 이동해 컬럼의 순서를 변경할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["컬럼 항목 오른쪽의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "핀 아이콘",
              src: (__webpack_require__(28332)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " 버튼을 선택하세요. 선택한 컬럼 항목은 최상단에 고정됩니다. 고정된 컬럼 항목은 테이블 목록에서 가장 왼쪽에 고정됩니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["모든 설정을 완료한 후에는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "confirm",
          className: "uitext"
        }), " 버튼을 선택하세요."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "컬럼-설정-초기화하기",
        children: "컬럼 설정 초기화하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["변경 사항을 모두 취소하고 초기화하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "초기화 아이콘",
          src: (__webpack_require__(25099)/* ["default"] */ .A) + "",
          width: "25",
          height: "24"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "initialized",
          className: "uitext"
        }), " 버튼을 선택하세요. 초기화 설정을 반영하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "confirm",
          className: "uitext"
        }), " 버튼을 선택하세요."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "columninfo",
        children: "컬럼 및 용어 안내"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "c3-20-15-65 tableScroll",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "컬럼"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "단위"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
                children: "설명"
              })]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "backend_time",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["페이지 로드 중 백엔드에서 처리된 평균 시간을 나타내며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "startTime"
                }), "부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "responseEnd"
                }), "까지 소요된 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "frontend_time",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["페이지 로드 중 프론트엔드 영역의 평균 처리 시간을 나타내며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "domInteractive"
                }), "부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "loadEventEnd"
                }), "까지 소요된 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "ITM08283",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["브라우저가 웹 페이지를 불러오면서 리다이렉트 과정에서 소요한 평균 시간을 나타내며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "redirectStart"
                }), "부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "redirectEnd"
                }), "까지 소요된 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "cache_time",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["브라우저가 웹 페이지를 불러오면서 캐시된 리소스를 검색하는데 소요한 평균 시간을 나타내며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "fetchStart"
                }), "부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "domainLookupStart"
                }), "까지 소요된 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "ITM08284",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["브라우저가 웹 페이지를 불러오면서 웹사이트 도메인을 조회하는데 소요한 평균 시간을 나타내며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "domainLookupStart"
                }), "부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "domainLookupEnd"
                }), "까지 소요된 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "connect_time",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["브라우저가 서버와의 네트워크 연결 과정에 소요한 평균 시간을 나타내며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "connectStart"
                }), "부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "connectEnd"
                }), "까지 소요된 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "ssl_time",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["브라우저가 웹 페이지를 불러오면서 TCP 헨드쉐이크 과정에서 소요한 평균으로, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "secureConnectionStart"
                }), "부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "connectEnd"
                }), "까지 소요된 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "ITM08285",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["브라우저가 웹 페이지를 불러오면서 네트워크 요청을 보낸 후 서버로부터 첫 번째 바이트(byte)가 수신될 때까지 소요된 평균 시간을 나타내며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "requestStart"
                }), "부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "responseStart"
                }), "까지 소요된 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "download_time",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["브라우저가 웹 페이지를 불러오면서 서버로부터 리소스를 다운로드하는데 소요한 평균 시간을 나타내며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "responseStart"
                }), "부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "responseEnd"
                }), "까지 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "ITM08286",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["웹 페이지가 초기 콘텐츠를 렌더링하고 상호 작용할 수 있는 상태가 되기까지의 평균 시간을 나타내며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "domContentLoadedEventStart"
                }), "부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "domContentLoadedEventEnd"
                }), "까지 소요된 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "domload_time",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["웹 페이지의 모든 자원을 로드하고 렌더링이 완료된 후 사용자가 상호 작용할 수 있는 상태까지의 평균 시간을 나타내며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "loadEventStart"
                }), "부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "loadEventEnd"
                }), "까지 소요된 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "render_time",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["서버로부터 다운로드한 리소스를 화면에 렌더링하고 페이지 로드 이벤트를 완료하는데 소요한 평균 시간을 나타내며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "domInteractive"
                }), "부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "domComplete"
                }), "까지 소요된 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "TTL08498",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["브라우저에서 측정하는 load 이벤트가 완료되는 평균 시간을 나타내며, 시작부터 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "loadEventEnd"
                }), "까지 소요된 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "TTL06361",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "밀리 세컨드"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["브라우저가 웹 페이지를 완전히 불러오는데 소요한 평균 시간을 나타내며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  children: "loadEventEnd"
                }), " 이후 추가 인터랙션을 완료하기까지의 시간입니다. 브라우저 에이전트가 측정한 페이지 로드 완료 시간을 의미합니다."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "count",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "건수"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "페이지 로드 수입니다."
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "page_group",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "URL 텍스트"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
                children: ["URL 경로(URL Path)를 정규 표현식을 통해 정규화하여 제공하는 통계 그룹입니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                  href: "before-starting#page-group",
                  children: "다음 문서"
                }), "를 참조하세요."]
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "TTL08449",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "URL 텍스트"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "정규 표현식을 통해 정규화하지 않은 URL 경로(URL Path)입니다."
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "browser",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "텍스트"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "Chrome, Edge, Safari 등, 최종 사용자가 사용한 브라우저 종류입니다."
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "os",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "텍스트"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "macOS, Windows, Linux 등, 최종 사용자가 사용한 기기의 운영체제 종류입니다."
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "device",
                  className: "uitext"
                })
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "텍스트"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
                children: "Desktop, Mobile, Tablet 등, 최종 사용자가 사용한 기기 종류입니다."
              })]
            })]
          })]
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

/***/ 25585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDRWMTFINDRWNEg0Wk00IDIyVjE1TDMzIDE1VjIyTDQgMjJaTTQgMjZWMzNIMjNWMjZMNCAyNlpNNCAzN1Y0NEgxMlYzN0g0WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 56189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDRWMjBIMjJWNEgyWk0xNCA2VjE4SDEwVjZIMTRaTTQgNkg4VjE4SDRWNlpNMjAgMThIMTZWNkgyMFYxOFoiIGZpbGw9IiM3NTc1NzUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 39855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0OSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NSAxMS4zOTM5VjYuNzVIMTEuMjVWMTEuMzkzOUg4LjkxNjY3TDEzIDE1LjQ5MTdMMTcuMDgzMyAxMS4zOTM5SDE0Ljc1Wk03Ljc1IDE2LjY2MjVWMTcuODMzM0gxOC4yNVYxNi42NjI1SDcuNzVWMTYuNjYyNVoiIGZpbGw9IiNBREFEQUQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi4zMSAxMS4wODlDMjYuMjkyOSAxMC43MzcgMjYuMjUyMyAxMC40NDc0IDI2LjE4ODEgMTAuMjJDMjYuMTIzOSA5Ljk5MjcxIDI2LjAzNjIgOS44MTMwNSAyNS45MjUgOS42ODEwNUMyNS44MTM4IDkuNTQ5MDUgMjUuNjgzMyA5LjQ1OTIyIDI1LjUzMzYgOS40MTE1NUMyNS4zODM5IDkuMzYzODggMjUuMjE0OSA5LjM0MDA1IDI1LjAyNjcgOS4zNDAwNUMyNC44MDQyIDkuMzQwMDUgMjQuNTk0NiA5LjM4NTg4IDI0LjM5NzggOS40Nzc1NUMyNC4yMDExIDkuNTY5MjIgMjQuMDMyMSA5LjcxNTg4IDIzLjg5MDkgOS45MTc1NUMyMy43NDk4IDEwLjExOTIgMjMuNjM4NSAxMC4zODUgMjMuNTU3MyAxMC43MTVDMjMuNDc2IDExLjA0NTEgMjMuNDM1MyAxMS40NDQ3IDIzLjQzNTMgMTEuOTE0QzIzLjQzNTMgMTIuMzkwNyAyMy40NzYgMTIuNzkyMiAyMy41NTczIDEzLjExODVDMjMuNjM4NSAxMy40NDQ5IDIzLjc0OTggMTMuNzA4OSAyMy44OTA5IDEzLjkxMDVDMjQuMDMyMSAxNC4xMTIyIDI0LjIwMTEgMTQuMjU4OSAyNC4zOTc4IDE0LjM1MDVDMjQuNTk0NiAxNC40NDIyIDI0LjgwNDIgMTQuNDg4IDI1LjAyNjcgMTQuNDg4QzI1LjI4MzMgMTQuNDg4IDI1LjQ5MDggMTQuNDQwNCAyNS42NDkxIDE0LjM0NUMyNS44MDc0IDE0LjI0OTcgMjUuOTMzNiAxNC4xMjMyIDI2LjAyNzcgMTMuOTY1NUMyNi4xMjE4IDEzLjgwNzkgMjYuMTg4MSAxMy42MjgyIDI2LjIyNjYgMTMuNDI2NUMyNi4yNjUxIDEzLjIyNDkgMjYuMjkyOSAxMy4wMTc3IDI2LjMxIDEyLjgwNUgyOC4zMTJDMjguMzEyIDEzLjI1OTcgMjguMjM3MSAxMy42ODE0IDI4LjA4NzQgMTQuMDdDMjcuOTM3NyAxNC40NTg3IDI3LjcxNzQgMTQuNzk5NyAyNy40MjY1IDE1LjA5M0MyNy4xMzU2IDE1LjM4NjQgMjYuNzc2MyAxNS42MTU1IDI2LjM0ODUgMTUuNzgwNUMyNS45MjA3IDE1Ljk0NTUgMjUuNDI4OCAxNi4wMjggMjQuODcyNyAxNi4wMjhDMjQuMzUwOCAxNi4wMjggMjMuODc4MSAxNS45NDM3IDIzLjQ1NDYgMTUuNzc1QzIzLjAzMTEgMTUuNjA2NCAyMi42Njk2IDE1LjM1MTYgMjIuMzcwMiAxNS4wMTA1QzIyLjA3MDcgMTQuNjY5NSAyMS44Mzk3IDE0LjI0MjQgMjEuNjc3MiAxMy43MjlDMjEuNTE0NiAxMy4yMTU3IDIxLjQzMzMgMTIuNjEwNyAyMS40MzMzIDExLjkxNEMyMS40MzMzIDExLjIyNDcgMjEuNTE0NiAxMC42MjE2IDIxLjY3NzIgMTAuMTA0NUMyMS44Mzk3IDkuNTg3NTUgMjIuMDcwNyA5LjE1ODU1IDIyLjM3MDIgOC44MTc1NUMyMi42Njk2IDguNDc2NTUgMjMuMDMxMSA4LjIyMTcyIDIzLjQ1NDYgOC4wNTMwNUMyMy44NzgxIDcuODg0MzggMjQuMzUwOCA3LjgwMDA1IDI0Ljg3MjcgNy44MDAwNUMyNS40NDU5IDcuODAwMDUgMjUuOTQ4NSA3Ljg4NDM4IDI2LjM4MDYgOC4wNTMwNUMyNi44MTI2IDguMjIxNzIgMjcuMTc0MSA4LjQ1NDU1IDI3LjQ2NSA4Ljc1MTU1QzI3Ljc1NTkgOS4wNDg1NSAyNy45NzE5IDkuMzk2ODggMjguMTEzMSA5Ljc5NjU1QzI4LjI1NDMgMTAuMTk2MiAyOC4zMjA2IDEwLjYyNyAyOC4zMTIgMTEuMDg5SDI2LjMxWk0zMC4zODI0IDEzLjM4OEMzMC4zOTk2IDEzLjc4NDEgMzAuNDk3OSAxNC4wNzc0IDMwLjY3NzYgMTQuMjY4QzMwLjg1NzMgMTQuNDU4NyAzMS4xNjEgMTQuNTU0IDMxLjU4ODggMTQuNTU0QzMxLjk0ODEgMTQuNTU0IDMyLjIyMTkgMTQuNDY3OSAzMi40MTAxIDE0LjI5NTVDMzIuNTk4MyAxNC4xMjMyIDMyLjY5MjQgMTMuODk0MSAzMi42OTI0IDEzLjYwOEMzMi42OTI0IDEzLjM4OCAzMi41OTE5IDEzLjIxMiAzMi4zOTA5IDEzLjA4QzMyLjE4OTggMTIuOTQ4IDMxLjkzNTMgMTIuODMyNSAzMS42MjczIDEyLjczMzVDMzEuMzE5MyAxMi42MzQ1IDMwLjk4OTkgMTIuNTMzNyAzMC42MzkxIDEyLjQzMUMzMC4yODgzIDEyLjMyODQgMjkuOTU4OSAxMi4xOTA5IDI5LjY1MDkgMTIuMDE4NUMyOS4zNDI5IDExLjg0NjIgMjkuMDg4NCAxMS42MjI2IDI4Ljg4NzQgMTEuMzQ3NUMyOC42ODYzIDExLjA3MjUgMjguNTg1OCAxMC43MTE0IDI4LjU4NTggMTAuMjY0QzI4LjU4NTggOS44OTAwNSAyOC42NTIxIDkuNTUwODggMjguNzg0NyA5LjI0NjU1QzI4LjkxNzMgOC45NDIyMSAyOS4xMDk4IDguNjgxODggMjkuMzYyMiA4LjQ2NTU1QzI5LjYxNDYgOC4yNDkyMSAyOS45MjA0IDguMDg0MjIgMzAuMjc5OCA3Ljk3MDU1QzMwLjYzOTEgNy44NTY4OCAzMS4wNDU1IDcuODAwMDUgMzEuNDk4OSA3LjgwMDA1QzMyLjM4MDIgNy44MDAwNSAzMy4wNjY3IDcuOTgxNTUgMzMuNTU4NyA4LjM0NDU1QzM0LjA1MDYgOC43MDc1NSAzNC4zNjkzIDkuMjgxMzggMzQuNTE0OCAxMC4wNjZIMzIuNjE1NEMzMi41OTgzIDkuNzk0NzEgMzIuNDk5OSA5LjU4MDIyIDMyLjMyMDMgOS40MjI1NUMzMi4xNDA2IDkuMjY0ODggMzEuODkyNSA5LjE4NjA1IDMxLjU3NTkgOS4xODYwNUMzMS4yNjc5IDkuMTg2MDUgMzEuMDI2MyA5LjI3MDM4IDMwLjg1MDkgOS40MzkwNUMzMC42NzU1IDkuNjA3NzIgMzAuNTg3OCA5LjgxMzA1IDMwLjU4NzggMTAuMDU1QzMwLjU4NzggMTAuMjg5NyAzMC42ODgzIDEwLjQ3MTIgMzAuODg5NCAxMC41OTk1QzMxLjA5MDQgMTAuNzI3OSAzMS4zNDQ5IDEwLjg0MTUgMzEuNjUyOSAxMC45NDA1QzMxLjk2MDkgMTEuMDM5NSAzMi4yOTAzIDExLjE0MDQgMzIuNjQxMSAxMS4yNDNDMzIuOTkxOSAxMS4zNDU3IDMzLjMyMTMgMTEuNDkwNSAzMy42MjkzIDExLjY3NzVDMzMuOTM3MyAxMS44NjQ1IDM0LjE5MTggMTIuMTEyIDM0LjM5MjkgMTIuNDJDMzQuNTkzOSAxMi43MjgxIDM0LjY5NDQgMTMuMTMxNCAzNC42OTQ0IDEzLjYzQzM0LjY5NDQgMTQuMDA0MSAzNC42MTUzIDE0LjMzNzcgMzQuNDU3IDE0LjYzMUMzNC4yOTg4IDE0LjkyNDQgMzQuMDgwNiAxNS4xNzU1IDMzLjgwMjUgMTUuMzg0NUMzMy41MjQ1IDE1LjU5MzUgMzMuMTkyOSAxNS43NTMgMzIuODA3OSAxNS44NjNDMzIuNDIyOSAxNS45NzMgMzIuMDAzNyAxNi4wMjggMzEuNTUwMyAxNi4wMjhDMzAuNDYzNyAxNi4wMjggMjkuNjcyMyAxNS43OTUyIDI5LjE3NjEgMTUuMzI5NUMyOC42Nzk5IDE0Ljg2MzkgMjguNDMxOCAxNC4yMTY3IDI4LjQzMTggMTMuMzg4SDMwLjM4MjRaTTM4LjcwMjcgMTUuODk2TDQxLjI5NTEgNy45MzIwNUgzOS40NzI3TDM3Ljg4MTQgMTMuNDFIMzcuODU1N0wzNi4yOTAxIDcuOTMyMDVIMzQuMzkwN0wzNi45ODMxIDE1Ljg5NkgzOC43MDI3WiIgZmlsbD0iI0FEQURBRCIvPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjIzIiByeD0iMy41IiBzdHJva2U9IiM5Nzk3OTciLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 28332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDEyLjVIMTFWMjEuNUwxMyAxOS41VjEyLjVIMThMMTUuMDAxIDkuNUwxNS4wMDEgNC41TDE3IDIuNUg3TDkuMDAxIDQuNVY5LjVMNiAxMi41WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 71973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiByeD0iNCIgZmlsbD0iIzI5NkNGMiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4LjMyMDIgMTYuOTA2QzIwLjc2MjcgMTMuNzY3NiAyMC41NDE2IDkuMjI3ODcgMTcuNjU2OSA2LjM0MzE1QzE0LjUzMjcgMy4yMTg5NSA5LjQ2NzM0IDMuMjE4OTUgNi4zNDMxNSA2LjM0MzE1QzMuMjE4OTUgOS40NjczNCAzLjIxODk1IDE0LjUzMjcgNi4zNDMxNSAxNy42NTY5QzkuMjI3ODcgMjAuNTQxNiAxMy43Njc2IDIwLjc2MjcgMTYuOTA2IDE4LjMyMDJMMjEuOTQ5NCAyMy4zNjM2TDIzLjM2MzYgMjEuOTQ5NEwxOC4zMjAyIDE2LjkwNlpNMTYuMjQyNiAxNi4yNDI2QzEzLjg5OTUgMTguNTg1OCAxMC4xMDA1IDE4LjU4NTggNy43NTczNiAxNi4yNDI2QzUuNDE0MjEgMTMuODk5NSA1LjQxNDIxIDEwLjEwMDUgNy43NTczNiA3Ljc1NzM2QzEwLjEwMDUgNS40MTQyMSAxMy44OTk1IDUuNDE0MjEgMTYuMjQyNiA3Ljc1NzM2QzE4LjU4NTggMTAuMTAwNSAxOC41ODU4IDEzLjg5OTUgMTYuMjQyNiAxNi4yNDI2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 52600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDNIMjJWNUgyVjNaTTE5LjI1MDIgMTcuMTIxMVY4SDE3LjI1MDJWMTcuMTM2MUwxNS40MTQyIDE1LjNMMTQgMTYuNzE0M0wxOC4yNDI2IDIwLjk1NjlMMTguMjQyNyAyMC45NTY4TDE4LjI0MjggMjAuOTU2OUwyMi40ODU1IDE2LjcxNDNMMjEuMDcxMyAxNS4zMDAxTDE5LjI1MDIgMTcuMTIxMVpNMiAxMUgxM1YxM0gyVjExWk0xMSAxOUgyVjIxSDExVjE5WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 27531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDNIMjJWNUgyVjNaTTE5LjIzNSAxMC44MjA4TDIxLjA3MSAxMi42NTY5TDIyLjQ4NTIgMTEuMjQyNkwxOC4yNDI2IDcuMDAwMDFMMTguMjQyNSA3LjAwMDA4TDE4LjI0MjQgNi45OTk5N0wxMy45OTk4IDExLjI0MjZMMTUuNDE0IDEyLjY1NjhMMTcuMjM1IDEwLjgzNThMMTcuMjM1IDIxSDE5LjIzNUwxOS4yMzUgMTAuODIwOFpNMiAxMUgxMVYxM0gyVjExWk0xMyAxOUgyVjIxSDEzVjE5WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 93365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NS44MzM3IDQuMTY2OTlINC4xNjY5OVYxNi42NjdWMjAuODMzN1Y0NS44MzM3SDQ1LjgzMzdWMjAuODMzN1YxNi42NjdWNC4xNjY5OVpNOC4zMzM2NiAyOS4xNjdWMjAuODMzN0gxNi42NjdWMjkuMTY3SDguMzMzNjZaTTguMzMzNjYgMzMuMzMzN1Y0MS42NjdIMTYuNjY3VjMzLjMzMzdIOC4zMzM2NlpNMjAuODMzNyAzMy4zMzM3VjQxLjY2N0gyOS4xNjdWMzMuMzMzN0gyMC44MzM3Wk0zMy4zMzM3IDMzLjMzMzdWNDEuNjY3SDQxLjY2N1YzMy4zMzM3SDMzLjMzMzdaTTQxLjY2NyAyOS4xNjdIMzMuMzMzN1YyMC44MzM3SDQxLjY2N1YyOS4xNjdaTTI5LjE2NyAyOS4xNjdIMjAuODMzN1YyMC44MzM3SDI5LjE2N1YyOS4xNjdaTTQxLjY2NyAxNi42NjdIMzMuMzMzN0gyOS4xNjdIMjAuODMzN0gxNi42NjdIOC4zMzM2NlY4LjMzMzY2SDQxLjY2N1YxNi42NjdaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 65557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcGFnZXZpZXc8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjguMDAwMDAwLCAtMjcxMS4wMDAwMDApIiBmaWxsPSIjMjk2Y2YyIj4KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcGFnZXZpZXciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjAwMDAwMCwgMzY1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCA0LjAwMDAwMCkiIGlkPSJwYWdldmlldyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCwwIEMxOS4wMzUyOTQxLDAgMTkuODkzNDI1NiwwLjc5NzIzMTgzNCAxOS45OTA3OTk5LDEuODA4MTAwOTYgTDIwLDIgTDE5Ljk5OSw1LjMzMyBMMTcuOTk5LDUuMzMzIEwxOCwyIEwyLDIgTDIsMTQgTDEyLDE0IEwxMiwxNiBMMiwxNiBDMC45NjQ3MDU4ODIsMTYgMC4xMDY1NzQzOTQsMTUuMjAyNzY4MiAwLjAwOTIwMDA4MTQyLDE0LjE5MTg5OSBMLTUuMzI5MDcwNTJlLTE1LDE0IEwtNS4zMjkwNzA1MmUtMTUsMiBDLTUuMzI5MDcwNTJlLTE1LDAuOTY0NzA1ODgyIDAuNzk3MjMxODM0LDAuMTA2NTc0Mzk0IDEuODA4MTAwOTYsMC4wMDkyMDAwODE0MiBMMiwwIEwxOCwwIFogTTEzLjE2NjY2NjcsNCBDMTUuNjU2NjY2Nyw0IDE3LjY2NjY2NjcsNi4wMSAxNy42NjY2NjY3LDguNSBDMTcuNjY2NjY2Nyw5LjM4IDE3LjQwNjY2NjcsMTAuMTkgMTYuOTY2NjY2NywxMC44OSBMMTkuODc2NjY2NywxMy43OSBMMTguNDU2NjY2NywxNS4yMSBMMTUuNTQ2NjY2NywxMi4zIEMxNC44NTY2NjY3LDEyLjc0IDE0LjAzNjY2NjcsMTMgMTMuMTU2NjY2NywxMyBDMTAuNjc2NjY2NywxMyA4LjY2NjY2NjY3LDEwLjk5IDguNjY2NjY2NjcsOC41IEM4LjY2NjY2NjY3LDYuMDEgMTAuNjc2NjY2Nyw0IDEzLjE2NjY2NjcsNCBaIE0xMy4xNjY2NjY3LDYgQzExLjc4NjY2NjcsNiAxMC42NjY2NjY3LDcuMTIgMTAuNjY2NjY2Nyw4LjUgQzEwLjY2NjY2NjcsOS44OCAxMS43ODY2NjY3LDExIDEzLjE2NjY2NjcsMTEgQzE0LjU0NjY2NjcsMTEgMTUuNjY2NjY2Nyw5Ljg4IDE1LjY2NjY2NjcsOC41IEMxNS42NjY2NjY3LDcuMTIgMTQuNTQ2NjY2Nyw2IDEzLjE2NjY2NjcsNiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ 88054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcy1jbG9zZTwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MzQuMDAwMDAwLCAtMTAxMy4wMDAwMDApIiBmaWxsPSIjZDUwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9InN1Z2dlc3RlZC1pY29ucy1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDk2Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1jbG9zZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkyLjAwMDAwMCwgNDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMyw0IEwxMi45OTksMTEgTDIwLDExIEwyMCwxMyBMMTIuOTk5LDEzIEwxMywyMCBMMTEsMjAgTDEwLjk5OSwxMyBMNCwxMyBMNCwxMSBMMTAuOTk5LDExIEwxMSw0IEwxMyw0IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMTIuMDAwMDAwKSByb3RhdGUoLTMxNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTIuMDAwMDAwLCAtMTIuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 25099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNXB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNSAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtdW5kbzwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNTYuMDAwMDAwLCAtMTQ3NS4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImVkaXRvci1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAxMzUwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLXVuZG8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMxNi41MDAwMDAsIDEyNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLDAgTDEwLDIgTDEwLDIgQzUuNTgxNzIyLDIgMiw1LjU4MTcyMiAyLDEwIEMyLDE0LjQxODI3OCA1LjU4MTcyMiwxOCAxMCwxOCBDMTQuNDE4Mjc4LDE4IDE4LDE0LjQxODI3OCAxOCwxMCBDMTgsOC42NjI5MjcwMSAxNy42NzE5ODMyLDcuNDAyNDY2NDMgMTcuMDkyMDMwNSw2LjI5NDY5OTA0IEwxNS4zNTE5MjM4LDcuMjk5MDM4MTEgTDE2LjQ1LDMuMjAwOTYxODkgTDIwLjU0ODA3NjIsNC4yOTkwMzgxMSBMMTguODI1ODYyMyw1LjI5NDMwMzE2IEMxOS41NzUxOSw2LjY5Njc4NzQ5IDIwLDguMjk4NzgzOSAyMCwxMCBDMjAsMTUuNTIyODQ3NSAxNS41MjI4NDc1LDIwIDEwLDIwIEM0LjQ3NzE1MjUsMjAgLTguNTI2NTEyODNlLTE0LDE1LjUyMjg0NzUgLTguNTI2NTEyODNlLTE0LDEwIEMtOC41MjY1MTI4M2UtMTQsNC40NzcxNTI1IDQuNDc3MTUyNSwwIDEwLDAgWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMjc0MDM4LCAxMC4wMDAwMDApIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMC4yNzQwMzgsIC0xMC4wMDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ 92541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI1cHgiIHZpZXdCb3g9IjAgMCAyNCAyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtbGVmdDwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NDQuMDAwMDAwLCAtMTYzLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iZGlyZWN0aW9uYWwtaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMTE5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLWxlZnQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYwNC4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuMDAwMDAwLCAzLjAwMDAwMCkiIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjU1NzM5MzUsMTcuNDYzNTM2NiBMMC4xNDMxNzk5NCwxNi4wNDkzMjMgTDcuMjE0MTc5OTQsOC45Nzc5NzM4MyBMMC4xNDMxNzk5NCwxLjkwNzE4NzQgTDEuNTU3MzkzNSwwLjQ5Mjk3MzgzNCBMMTAuMDQyNjc0OSw4Ljk3ODI1NTIxIEwxLjU1NzM5MzUsMTcuNDYzNTM2NiBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjA5MjkyNywgOC45NzgyNTUpIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTUuMDkyOTI3LCAtOC45NzgyNTUpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ 21376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxMnB4O2hlaWdodDogMTJweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcmlnaHQ8L3RpdGxlPiAtLT4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc0MC4wMDAwMDAsIC0xNjQuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+CiAgICAgICAgICAgIDxnIGlkPSJkaXJlY3Rpb25hbC1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAxMTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcmlnaHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcwMC4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCAzLjAwMDAwMCkiIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjU1NzM5MzUsMTcuNDYzNTM2NiBMMC4xNDMxNzk5NCwxNi4wNDkzMjMgTDcuMjE0MTc5OTQsOC45Nzc5NzM4MyBMMC4xNDMxNzk5NCwxLjkwNzE4NzQgTDEuNTU3MzkzNSwwLjQ5Mjk3MzgzNCBMMTAuMDQyNjc0OSw4Ljk3ODI1NTIxIEwxLjU1NzM5MzUsMTcuNDYzNTM2NiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

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