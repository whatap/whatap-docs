"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[652],{

/***/ 46822:
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
	id: 'about-apm-dbc',
	title: 'DB 연결 지연과 커넥션 풀',
	description: '애플리케이션 성능 장애 유형 중 하나인 DBC 지연 문제와 Connection Pool에 대해 안내합니다.',
	keywords: [
		'애플리케이션',
		'애플리케이션 모니터링',
		'APM',
		'DBC',
		'성능 장애'
	],
	toc_max_heading_level: 2,
	displayed_sidebar: 'learningSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "best-practice-guides/about-apm-dbc",
  "title": "DB 연결 지연과 커넥션 풀",
  "description": "애플리케이션 성능 장애 유형 중 하나인 DBC 지연 문제와 Connection Pool에 대해 안내합니다.",
  "source": "@site/docs/best-practice-guides/about-apm-dbc.mdx",
  "sourceDirName": "best-practice-guides",
  "slug": "/best-practice-guides/about-apm-dbc",
  "permalink": "/whatap-docs/best-practice-guides/about-apm-dbc",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/best-practice-guides/about-apm-dbc.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "about-apm-dbc",
    "title": "DB 연결 지연과 커넥션 풀",
    "description": "애플리케이션 성능 장애 유형 중 하나인 DBC 지연 문제와 Connection Pool에 대해 안내합니다.",
    "keywords": [
      "애플리케이션",
      "애플리케이션 모니터링",
      "APM",
      "DBC",
      "성능 장애"
    ],
    "toc_max_heading_level": 2,
    "displayed_sidebar": "learningSidebar",
    "isTranslationMissing": false
  },
  "sidebar": "learningSidebar",
  "previous": {
    "title": "브라우저 모니터링",
    "permalink": "/whatap-docs/best-practice-guides/using-browser-monitoring"
  },
  "next": {
    "title": "힙 메모리 메트릭스",
    "permalink": "/whatap-docs/best-practice-guides/about-apm-heap-memory"
  }
};
const assets = {

};

/*
>
일문 이미지 미제공

*/
/*

>

빠르게 살펴보고 싶은 분들은 문서 하단의 [요약 정보](#q12)로 이동하세요.

미리 알아보기 위치?

*/


const toc = [{
  "value": "히트맵 이상 패턴 감지",
  "id": "히트맵-이상-패턴-감지",
  "level": 2
}, {
  "value": "트랜잭션 트레이스 분석",
  "id": "트랜잭션-트레이스-분석",
  "level": 2
}, {
  "value": "DB Connection Pool 확인",
  "id": "db-connection-pool-확인",
  "level": 2
}, {
  "value": "Connection Pool 크기 조절",
  "id": "connection-pool-크기-조절",
  "level": 3
}, {
  "value": "Connection 재활용 및 최적화",
  "id": "q12",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
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
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["이 문서에서는 대표적인 애플리케이션 성능 장애 유형 중 하나인 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "DB 연결 지연"
      }), "(DBC 지연)과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Connection Pool"
      }), "의 상관관계를 모니터링 관점에서 소개하려 합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["먼저 대시보드의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "히트맵"
        })
      }), " 위젯을 통해 1차적으로 장애 상황을 인지했다고 가정 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "분석"
        })
      }), " 메뉴 하위의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "히트맵"
        })
      }), " 메뉴로 이동해 시간을 특정하는 방식으로 장애 상황 전후를 살펴보겠습니다. 이를 토대로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "트레이스 정보"
        })
      }), " 창과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "메트릭스 차트"
        })
      }), " 등을 통해 장애 원인을 추론하는 과정을 안내하겠습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "미리 알아보기"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "애플리케이션 대시보드"
          })
        }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "히트맵 트랜잭션"
          })
        }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "트레이스 정보"
          })
        }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "메트릭스 차트"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["문제 현상을 인지했다면 과거 기록을 조회해 장애 현상 시점 전후를 조회합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "히트맵 트랜잭션"
              })
            }), " 차트에서 트랜잭션 과부화 패턴 확인 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "TX 트레이스"
              })
            }), " 목록을 통해 트랜잭션 지연 원인을 DB 연결 문제로 예상할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["구간별 조회 후 트레이스 분석을 통해 상세 수행 이력을 스텝별로 살펴봅니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "경과"
              })
            }), " 시간을 가장 많이 소요하고 있는 것이 DBC 스텝임을 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "메트릭스 차트"
              })
            }), "를 통해 다양한 지표를 함께 살펴봅니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "DB Pool 개수"
              })
            }), " 차트와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "DB Active 개수"
              })
            }), " 차트를 비교해 DB Connection Pool의 부족이 원인임을 특정할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "사용자 운영 환경에 따라 Connection Pool의 크기를 점차적으로 조절하거나 누수를 막기 위해 최적화 설정을 하는 방법을 활용할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "히트맵-이상-패턴-감지",
        children: "히트맵 이상 패턴 감지"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/apm-dbc-hitmap-hl.png",
        desc: "히트맵 이상 패턴 감지"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["장애 현상을 인지하고 일차적인 분석을 통해 장애 원인을 추적하는 과정은 신속함이 핵심입니다. 와탭은 직관적인 뷰를 제공할 뿐만 아니라 근본 원인 추적을 위한 추가 정보를 확보할 수 있도록 과거 기록 조회 기능을 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "애플리케이션 대시보드"
          })
        }), "의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "히트맵"
          })
        }), " 위젯에서 예시처럼 급격한 이상 징후를 감지했다면 다음 순서는 무엇일까요?"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "히트맵"
          })
        }), " 위젯에서 문제 구간을 드래그해 트랜잭션 트레이스 분석을 빠르게 진행할 수도 있고, 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "분석"
          })
        }), " 메뉴 하위의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "히트맵"
          })
        }), "으로 이동해 시간 범위를 보다 넓게 특정하는 방식으로 전후 상황을 함께 살펴볼 수도 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/apm-dbc-hitmap-hitmap-tx.png",
        desc: "히트맵 트랜잭션 차트 이동 sc"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["후자의 동선으로 진행해 보겠습니다. 대시보드 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "히트맵"
          })
        }), " 위젯은 최근 10분간 종료된 트랜잭션 응답 시간 분포도입니다. 즉 시간 범위를 특정해 최근 10분 이상의 과거 내역을 확인하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "분석"
          })
        }), " 메뉴 하위의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "히트맵"
          })
        }), " 메뉴로 이동해야 합니다. 위젯 우측 상단의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "오른쪽 화살표 아이콘",
          src: (__webpack_require__(40335)/* ["default"] */ .A) + "",
          width: "20",
          height: "20"
        }), " 화살표 아이콘을 선택해 예시와 같이 이동할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "히트맵 트랜잭션"
          })
        }), " 차트 상단의 시간 선택자를 통해 원하는 시간 범위를 지정해 과거 기록을 조회할 수 있습니다. 이상 패턴을 확정하기 위해 문제 구간 전후로 넓게 살펴보니 응답이 지연되고 있는 트랜잭션이 밀집한 과부하 패턴을 확인할 수 있었습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/apm-dbc-hitmap-drag.png",
        desc: "히트맵 드래그"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["이와 같은 갑작스러운 응답 시간 증가와 트랜잭션 과부하의 원인을 알아보기 위해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "히트맵 트랜잭션"
          })
        }), " 차트에서 문제 영역을 구간별로 드래그해 트랜잭션 트레이스 목록(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "TX 트레이스"
          })
        }), " 목록)을 조회해 보겠습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/apm-dbc-hitmap-tr-list.png",
        desc: "히트맵 트랜잭션 목록"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "TX 트레이스"
          })
        }), " 목록을 통해 다수의 트랜잭션에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "경과 시간"
          })
        }), " 대비 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "DB 접속 시간"
          })
        }), "이 차지하는 비율이 큰 것을 확인할 수 있습니다. 예시로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "/api/system/test"
        }), " URL의 경우 총 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "경과 시간"
          })
        }), " 25,057ms 중 DB 연결에만 24,931ms가 소요되었습니다. 즉 일차적으로 DB 연결에 문제가 있다는 것을 추측할 수 있습니다. 다음으로 해당 트랜잭션을 선택해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "트레이스 정보"
          })
        }), " 창에서 상세 정보를 살펴보겠습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["히트맵의 가로축은 트랜잭션 종료시간을, 세로축은 응답 시간을 의미합니다. 히트맵에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "위쪽 화살표 아이콘",
                src: (__webpack_require__(86352)/* ["default"] */ .A) + "",
                width: "20",
                height: "20"
              }), " 화살표 아이콘을 선택해 세로축 응답 시간 지연 구간을 80초까지 조회할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["과부하 패턴 외에 히트맵 패턴 분석에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "about-apm-hitmap-class#about-hitmap-pattern-analysis",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "트랜잭션-트레이스-분석",
        children: "트랜잭션 트레이스 분석"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "트레이스 정보"
          })
        }), " 창에서 트랜잭션 상세 수행 이력을 스텝별로 확인할 수 있습니다. 이와 같은 트랜잭션 트레이싱을 통해 트랜잭션의 성능 저하 또는 오류의 원인을 추적할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "트레이스 분석"
          })
        }), " 창 조회 시 가장 먼저 살펴봐야 할 정보는 스텝별 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "경과"
          })
        }), " 시간입니다. 소요 시간을 비교하는 것으로 성능 저하 또는 오류의 원인을 빠르게 특정할 수 있기 때문입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/apm-dbc-tx-tr.png",
        desc: "트랜잭션 트레이스 분석 sc"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["해당 URL의 상세 트레이스를 살펴보겠습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "/api/system/test"
        }), " 수행 중 PostgreSQL DB에 접속해 처리하는 쿼리 수행 시간은 1ms에서 6ms 사이로 비교적 큰 문제가 없습니다. 하지만 해당 데이터베이스 접속 대기 시간이 그에 비해 확연히 오래 걸리고 있으며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "경과"
          })
        }), " 시간을 가장 많이 소요하고 있는 것이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "DB Connection"
          })
        }), " 스텝임을 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다시 말해 이 경우 앞서 예상한 대로 DB 연결 지연으로 인해 트랜잭션 지연이 발생했음을 특정할 수 있습니다. 그렇다면 이런 DB 연결 지연을 일으키는 원인은 무엇일까요?"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "db-connection-pool-확인",
        children: "DB Connection Pool 확인"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "DB 연결 지연"
        }), "을 일으키는 원인 중 하나는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Connection Pool의 부족"
        }), "입니다. Connection Pool의 크기는 동시에 처리 가능한 연결 개수를 의미합니다. 데이터베이스는 요청에 의한 Connection을 생성하고 종료하는 과정에 많은 시간을 소모합니다. Connection Pool은 미리 일정 수의 Connection을 생성해 두고 다른 요청이 있을 때 현재 Connection Pool을 다시 사용할 수 있도록 합니다. 이를 통해 매번 새로운 Connection을 만들 필요가 없어지기 때문에 응답 시간을 줄일 수 있습니다. 문제는 미리 생성해 둔 Connection 개수가 애플리케이션이 필요로 하는 Connection 개수에 비해 부족한 경우로 이때 DB 연결 지연이 발생하게 됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["DB Connection Pool의 상황을 확인하기 위해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "분석"
          })
        }), " 메뉴의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "메트릭스 차트"
          })
        }), "로 이동합니다. 먼저 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "메트릭스 차트"
          })
        }), " 좌측 목록에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "데이터베이스"
          })
        }), "를 선택해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "DB Pool 개수"
          })
        }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "DB Active 개수"
          })
        }), " 차트를 확인하겠습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/apm-dbc-mcht.png",
        desc: "메트릭스 차트"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["각 차트에서 확인할 수 있듯이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "DB Pool"
          })
        }), "의 최대 연결 개수는 20개로 설정되어 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "DB Active 개수"
          })
        }), " 차트를 살펴보면 20개 Pool에서 지속적인 점유가 이루어지고 있는 것을 확인할 수 있습니다. 미리 설정된 Pool을 초과하는 요청이 들어오면 DB에 남는 Pool이 생길 때까지 대기하게 되고 이에 따라 지연이 발생하게 됩니다. CPU 및 메모리 사용량 등 자원 현황 조회 시 별다른 특이사항을 찾을 수 없었습니다. 즉 해당 프로젝트의 경우 DB Connection Pool의 부족이 DBC 지연을 일으킨 결정적인 원인이라고 볼 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["그렇다면 이처럼 DB Connection Pool이 부족한 경우 어떻게 해야 할까요? 물론 해결 방법은 사용자 환경마다 다를 수 있습니다. 이 문서에서는 그 중 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Connection Pool 크기 조절"
        }), "과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Connection 재활용 및 최적화"
        }), "를 통한 선 조치에 대해 간략하게 안내하겠습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "connection-pool-크기-조절",
        children: "Connection Pool 크기 조절"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "먼저 Pool의 최대 연결 개수를 조절하는 방법을 활용할 수 있습니다. Pool을 점차 늘려 DB Active 개수가 Pool 최대치 내에서 유지되는 것을 확인해 적절한 Pool 개수를 설정하는 것입니다. 하지만 Pool의 개수를 지나치게 크게 지정한 경우 자원 소비량의 과도한 증가로 오히려 애플리케이션 성능에 악영향을 줄 수 있습니다. 충분한 메모리와 처리 능력을 갖추고 있는지 확인 후 각자의 운영 환경에 알맞게 조절해야 합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "q12",
        children: "Connection 재활용 및 최적화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "두 번째로 Connection 재활용 및 최적화를 통한 방법을 활용할 수 있습니다. 예를 들어 애플리케이션이 사용한 Connection을 반환하지 않아 Connection Leak이 발생한 경우라면 아무리 Connection Pool의 개수를 늘린다고 해도 해당 현상을 해결할 수 없습니다. 이 경우 DB Active 개수는 우상향 그래프를 그리게 됩니다. Connection Leak을 막기 위해서는 사용한 Connection을 반드시 반환하도록 관리해야 합니다. Connection 사용 후 명시적으로 반환하도록 설정하거나 재사용하는 방식을 적용해 볼 수 있습니다."
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

/***/ 40335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjUgMTMuOTMwOEw4Ljc5NTQzIDE1TDEzLjUgOS45NzkxTDguNzk1NDMgNUw3LjUgNi4wMjczN0wxMS4yMjk3IDkuOTc5MUw3LjUgMTMuOTMwOFoiIGZpbGw9IiM3NTc1NzUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 86352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjA2OTE2IDEzTDUgMTEuNzA0NkwxMC4wMjA5IDdMMTUgMTEuNzA0NkwxMy45NzI2IDEzTDEwLjAyMDkgOS4yNzAyN0w2LjA2OTE2IDEzWiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

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