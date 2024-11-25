"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[38709],{

/***/ 13216:
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
	id: 'server-inventory-map',
	title: '서버 인벤토리 맵',
	description: '서버 인벤토리 맵 메뉴를 안내합니다.',
	keywords: [
		'대시보드',
		'서버 인벤토리 맵',
		'분석하기',
		'UI',
		'Server'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "server/server-inventory-map",
  "title": "서버 인벤토리 맵",
  "description": "서버 인벤토리 맵 메뉴를 안내합니다.",
  "source": "@site/docs/server/server-inventory-map.mdx",
  "sourceDirName": "server",
  "slug": "/server/server-inventory-map",
  "permalink": "/whatap-docs/server/server-inventory-map",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/server/server-inventory-map.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "server-inventory-map",
    "title": "서버 인벤토리 맵",
    "description": "서버 인벤토리 맵 메뉴를 안내합니다.",
    "keywords": [
      "대시보드",
      "서버 인벤토리 맵",
      "분석하기",
      "UI",
      "Server"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "serverSidebar",
  "previous": {
    "title": "컴파운드아이",
    "permalink": "/whatap-docs/server/compoundeye"
  },
  "next": {
    "title": "서버 인벤토리 맵 상세",
    "permalink": "/whatap-docs/server/server-inventory-map-details"
  }
};
const assets = {

};

/*:::note

**요구 사항**

서버 인벤토리 맵 대시보드를 사용하기 위해서는 서버 인벤토리 기능 활성화와 서버 인벤토리 맵 기능 활성화가 필요합니다. 서버 인벤토리와 함께 새로운 서버 인벤토리 맵 대시보드를 활용해 보세요. 서버 인벤토리 활성화에 대한 자세한 내용은 [다음 문서](server-inventory)를 참조하세요.

:::*/
/*

또한, 그룹별 요약 정보와 상세 정보를 효율적인 인프라 운영이 가능하도록 돕습니다.

서버 인벤토리 맵을 통해 서버 운영 관리를 단순화하고, 주요 지표를 시각적으로 제공하여 인프라 관리 효율성과 운영 생산성을 동시에 향상시켜 보세요.

*/
/*1. 업무그룹 대 - 업무 그룹 중 (활용 예시)(나중에 12월?)
2. 인프라 도메인 - 업무 그룹 대 (11 배포 시 안내 방식) (광훈 님이 업무 그룹 대까지는 영문 제공 시도해 주신다고 함)*/
/*

1차 그룹: 그룹, 2차 그룹: 서브 그룹, 카드

카드는 그룹 요약 정보, 서버 그룹 차트, 서버 그룹 메트릭 정보 요약

*/
/*

1차 그룹 - 그룹, 2차 그룹 - 서브 그룹

***1차 그룹***과 ***2차 그룹***을 순차적으로 선택하여 서버를 분류할 수 있습니다.

그룹별로 그리드 영역에 패널이 생성됩니다. 2차 그룹은 그룹 그리드

그룹화 시 ![지시선 3](/img/number-03.png) 차트의 그룹 그리드 영역에 시각적으로 표시됩니다. 2차 그룹은

1차 그룹 내에서 세부적으로 그룹화된 서버를 표시하며, 차트와 테두리로 구분된 서버 리스트로 표현됩니다.

*/
/*<Cmdname sid="side_serverInventoryMap" className="uitext" />은 그룹화 한 서버 구성 정보별로 카드를 제공합니다. 그룹화를 적용하지 않은 상태일 경우 전체 서버 정보가 하나의 큰 카드 내에 표현됩니다. 그룹화 적용 시 각 그룹 단위로 카드를 구성합니다. <Cmdname sid="side_serverInventoryMap" className="uitext" />의 카드는 다음 세 가지 요소로 구성됩니다.*/
/*그룹 내 서버의 상태 및 성능 데이터를 시각화하여 제공합니다. ***2차 그룹화***가 적용된 경우 차트 내에 서브 그룹 형식으로 표시됩니다. 또한 서브 그룹에 마우스를 올릴 경우 간략한 각 서버의 상태 정보를 팝오버 형식으로 확인할 수 있습니다. 예시 이미지의 경우 기본 수집 항목인 ***서버 타입***과 ***OS 타입***으로 1차와 2차 그룹화가 적용되어있습니다.*/
/*예시 이미지에서는 기본 수집 항목인 ***서버 타입***과 ***OS 타입***을 기준으로 1차와 2차 그룹화가 적용된 차트를 확인할 수 있습니다.*/
/*서버 업타임*/
/*

운영 기간 구간별 대수 표시:

- 서버가 부팅된 이후 경과한 일자(운영 기간)를 기준으로 구간을 나누어 해당 구간에 속한 서버의 대수를 바 차트 형태로 시각화합니다.

- 상호작용 기능:

- 바 차트를 클릭하면, 해당 구간에 속하는 서버의 세부 정보가 하단의 서버 구성 정보 테이블에 표시되며, 선택된 항목은 강조 표시(highlight)됩니다.

- 동일한 바 차트를 다시 클릭하면 선택이 해제됩니다.

이를 통해 운영자는 서버 업타임 분포를 직관적으로 파악하고, 특정 구간에 속한 서버 정보를 쉽게 확인할 수 있습니다.

*/
/*서버 인벤토리*/
/*파일 시스템 사용 정보*/
/*상세 내 커스텀 컬럼 추가/수정/삭제의 경우 프로젝트 수정 권한 필요*/


const toc = [{
  "value": "요구 사항",
  "id": "요구-사항",
  "level": 2
}, {
  "value": "지원 에이전트",
  "id": "지원-에이전트",
  "level": 3
}, {
  "value": "활성화 옵션",
  "id": "server-inventory-map-activate",
  "level": 3
}, {
  "value": "기본 화면 안내",
  "id": "기본-화면-안내",
  "level": 2
}, {
  "value": "1 사용자 설정",
  "id": "1-사용자-설정",
  "level": 3
}, {
  "value": "실시간 조회 및 일시 정지",
  "id": "실시간-조회-및-일시-정지",
  "level": 4
}, {
  "value": "그룹화",
  "id": "그룹화",
  "level": 4
}, {
  "value": "필터",
  "id": "필터",
  "level": 4
}, {
  "value": "2 서버 구성 현황",
  "id": "2-서버-구성-현황",
  "level": 3
}, {
  "value": "3 서버 그룹 카드",
  "id": "3-서버-그룹-카드",
  "level": 3
}, {
  "value": "지시선 a 그룹 현황",
  "id": "지시선-a-그룹-현황",
  "level": 4
}, {
  "value": "지시선 b 서버 그룹 차트",
  "id": "지시선-b-서버-그룹-차트",
  "level": 4
}, {
  "value": "지시선 c 메트릭스",
  "id": "지시선-c-메트릭스",
  "level": 4
}, {
  "value": "요약 보기",
  "id": "요약-보기",
  "level": 2
}, {
  "value": "그룹 정보",
  "id": "그룹-정보",
  "level": 3
}, {
  "value": "메트릭스",
  "id": "메트릭스",
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
    h4: "h4",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    pre: "pre",
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
  }, {Cmdname, Column, Columns, ImgLang, TabItem, Tabs} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_dashboard",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverInventoryMap",
        className: "uitext"
      })]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 모니터링 서비스 초기 화면에서 프로젝트를 선택한 다음 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_dashboard",
        className: "uitext"
      }), " 메뉴 하위에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverInventoryMap",
        className: "uitext"
      }), " 메뉴를 선택하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverInventoryMap",
        className: "uitext"
      }), "은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverInventory",
        className: "uitext"
      }), "를 기반으로 운영자가 모니터링 목적에 맞는 분류 기준에 따라 서버를 그룹화하여 구성할 수 있는 시각화 대시보드입니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverInventoryMap",
        className: "uitext"
      }), "을 통해 사용자가 서버 운영 현황을 직관적으로 확인하고 분석할 수 있도록 지원합니다. 운영자는 업무 분류, 담당자, 서버 위치 등의 사용자 정의 정보를 커스텀 컬럼으로 추가하여 관리할 수 있으며, 이를 바탕으로 시각화한 대시보드를 손쉽게 생성할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverInventoryMap",
        className: "uitext"
      }), "은 또한 모니터링 목적에 따른 다양한 관점을 충족하고자 그룹화 기능을 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverInventoryMap",
        className: "uitext"
      }), "을 통해 서버 운영 관리 효율성을 향상시켜보세요."]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "요구-사항",
        children: "요구 사항"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_serverInventoryMap",
            className: "uitext"
          }), " 대시보드를 사용하기 위해서는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_serverInventory",
            className: "uitext"
          }), " 기능 활성화와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_serverInventoryMap",
            className: "uitext"
          }), " 기능 활성화가 각각 필요합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_serverInventory",
            className: "uitext"
          }), "와 함께 새로운 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_serverInventoryMap",
            className: "uitext"
          }), " 대시보드를 활용해 보세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_serverInventory",
            className: "uitext"
          }), " 활성화에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "server-inventory",
            children: "다음 문서"
          }), "를 참조하세요."]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "지원-에이전트",
        children: "지원 에이전트"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_serverInventoryMap",
          className: "uitext"
        }), " 메뉴는 운영체제별로 다음 버전 이상에서 지원됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Linux"
            }), ": 2.7.2 이상"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "업데이트가 필요할 경우 운영체제별로 다음 명령어를 확인하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
              value: "du",
              label: "Debian/Ubuntu",
              default: true,
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  className: "language-bash",
                  children: "sudo apt-get update\nsudo apt-get install whatap-infra\n"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
              value: "arfocrs",
              label: "Amazon Linux/RHEL/Fedora/Oracle Linux/CentOS/Rocky Linux/SUSE",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                  className: "language-bash",
                  children: "sudo yum update whatap-infra\n"
                })
              })
            })]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Unix"
            }), " Solaris: 1.3.6 이상"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "업데이트가 필요할 경우 다음 명령어를 확인하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "cp /usr/whatap/infra/conf/whatap.conf /tmp\n/etc/init.d/whatap-infra stop\ngunzip -c whatap-infra.latest.SPARC.pkg.tar.gz | tar xvf -\nyes n | ./whatap-infra/install.sh\ncp /tmp/whatap.conf /usr/whatap/infra/conf/whatap.conf\n/etc/init.d/whatap-infra start\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Windows"
            }), ": 2.7.2 이상"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["다음 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://repo.whatap.io/windows/whatap_infra.exe",
              children: "링크"
            }), "를 통해 설치 파일을 다운로드 후 실행하세요. 에이전트 업데이트 후 서비스가 재시작됩니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "server-inventory-map-activate",
        children: "활성화 옵션"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_serverInventoryMap",
          className: "uitext"
        }), " 메뉴 조회 기능을 활성화하려면 다음 설정이 필요합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "whatap.conf"
            }), " 파일 내 다음 옵션을 활성화하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-ini",
              children: "categoryv2.enabled=true\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "환경별로 옵션 추가 설정 후 에이전트를 재시작하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Linux"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
                  value: "linux-opt",
                  label: "옵션 추가 명령어",
                  default: true,
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      className: "language-bash",
                      children: "grep -q '^categoryv2.enabled' /usr/whatap/infra/conf/whatap.conf || echo 'categoryv2.enabled=true' | sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
                    })
                  })
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
                  value: "linux-restart",
                  label: "에이전트 재시작",
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      className: "language-bash",
                      children: "sudo service whatap-infra restart\n"
                    })
                  })
                })]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Unix"
                }), " Solaris"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
                  value: "unix-opt",
                  label: "옵션 추가 명령어",
                  default: true,
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      className: "language-bash",
                      metastring: "title='Oracle Solaris'",
                      children: "grep -q '^categoryv2.enabled' /usr/whatap/infra/conf/whatap.conf || echo 'categoryv2.enabled=true' | tee -a /usr/whatap/infra/conf/whatap.conf\n"
                    })
                  })
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
                  value: "unix-restart",
                  label: "에이전트 재시작",
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      className: "language-bash",
                      metastring: "title='Oracle Solaris'",
                      children: "/etc/init.d/whatap-infra restart\n"
                    })
                  })
                })]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Windows"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
                  value: "windows-opt",
                  label: "옵션 추가 명령어",
                  default: true,
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      className: "language-bash",
                      children: "if (-not (Select-String -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Pattern \"^categoryv2.enabled\" -Quiet)) { Add-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"categoryv2.enabled=true\" }\n"
                    })
                  })
                }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
                  value: "windows-restart",
                  label: "에이전트 재시작",
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                      className: "language-bash",
                      children: "Restart-Service -Name \"Whatap Infra\"\n"
                    })
                  })
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "기본-화면-안내",
        children: "기본 화면 안내"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "server-inventory-map.png",
        desc: "서버 인벤토리 맵"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
        id: "1-사용자-설정",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "1",
          src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 사용자 설정"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_serverInventoryMap",
          className: "uitext"
        }), "이 제공하는 여러 사용자 설정을 통해 원하는대로 대시보드를 구성할 수 있습니다. 이용할 수 있는 기능은 다음과 같습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "실시간-조회-및-일시-정지",
        children: "실시간 조회 및 일시 정지"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_serverInventoryMap",
          className: "uitext"
        }), "은 기본적으로 실시간 조회 기반입니다. 실시간 조회 및 일시 정지 상태 변경은 화면 상단 왼쪽의 시간 선택자를 이용하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "조회 상태"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "실시간 조회(Live)"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: ["기본 모드", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "인터벌 5초"]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "일시정지 조회(Pause)"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "실시간 상태 변경 OFF"
            })]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "그룹화",
        children: "그룹화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Columns, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Column, {
          className: "text--left width--20",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "server-inventory-map-group-select.png",
            desc: "서버 인벤토리 맵 그룹화 선택"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Column, {
          className: "text--left",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_serverInventoryMap",
              className: "uitext"
            }), "은 서버를 체계적으로 분류할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "그룹화"
              })
            }), " 기능을 제공합니다. 모니터링 목적과 환경에 따라 그룹 기준을 설정하여 서버를 효과적으로 관리해 보세요."]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_serverInventory",
              className: "uitext"
            }), " 기반으로 조회 가능한 컬럼 중 기본 수집 항목과 사용자 정의 항목이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "그룹화"
              })
            }), " 목록에 표시됩니다. 기본 수집 항목은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "서버 타입"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "기본 그룹"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "OS 타입"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "OS 버전"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "모델"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "시리얼"
              })
            }), "입니다. 예시 이미지에서 확인할 수 있는 그외의 항목은 사용자 정의 항목으로 커스텀 컬럼(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "custom-cl",
              children: "custom"
            }), ")입니다."]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "1차 그룹"
              })
            }), "과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "2차 그룹"
              })
            }), "을 순차적으로 선택하여 서버를 분류할 수 있습니다. 1차 및 2차 그룹화에 따라 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "지시선 3",
              src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 영역에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "1차 그룹"
              })
            }), "은 카드 방식으로 데이터를 분류하며 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "2차 그룹"
              })
            }), "은 카드 내 차트 영역에서 서브 그룹 형식으로 각 그룹화된 데이터를 표현합니다."]
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "그룹화"
            })
          }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "server-inventory-map-group",
            children: "다음 문서"
          }), "를 참조하세요."]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "필터",
        children: "필터"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_serverInventoryMap",
          className: "uitext"
        }), "은 대시보드에 표시할 서버 종류 필터 기능을 제공합니다. 필터를 통해 적용된 데이터는 서버 그룹 차트, 요약 보기, 그리고 상세 보기에 반영됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "필터 키"
              })
            }), ": 필터는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_serverInventory",
              className: "uitext"
            }), " 메뉴에서 제공되는 기본 수집 컬럼과 사용자가 정의한 커스텀 컬럼을 기준으로 설정할 수 있습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: ["기본 수집 컬럼: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                  sid: "side_serverInventory",
                  className: "uitext"
                }), "에서 자동 수집된 데이터 항목으로  ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "서버 타입"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "기본 그룹"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "OS 타입"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "OS 버전"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "모델"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "시리얼"
                  })
                }), " 컬럼 항목입니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "커스텀 컬럼: 사용자가 프로젝트별로 추가하여 관리하는 항목입니다."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "필터 조건"
              })
            }), ": 필터 조건은 일치, 불일치, 포함, 미포함과 같은 문자열 조건으로 설정할 수 있습니다. 모든 필터는 문자열 기반으로 적용되며, 숫자형 조건(예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "≥"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "≤"
            }), ")은 지원하지 않습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
        id: "2-서버-구성-현황",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "2",
          src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 서버 구성 현황"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_serverInventoryMap",
          className: "uitext"
        }), "은 대시보드 상단에서 해당 프로젝트의 서버 운영체제별 구성 상태를 한눈에 확인할 수 있는 서버 구성 현황 정보를 제공합니다. 이를 통해 사용자는 프로젝트 내 서버의 주요 정보를 간략하고 직관적으로 파악할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "OS"
              })
            }), ": 서버 운영체제를 나타내며, OS 아이콘과 함께 OS 이름을 표시합니다. 사전에 정의되지 않은 OS가 포함된 경우, 기본값으로 인프라 아이콘을 표시합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Total / Active"
              })
            }), ": 프로젝트에 포함된 전체 서버 수 및 현재 활성 상태의 서버 수를 의미합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Core"
              })
            }), ": 프로젝트에 포함된 모든 서버의 물리 코어 합계를 표시합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
        id: "3-서버-그룹-카드",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "3",
          src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 서버 그룹 카드"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_serverInventoryMap",
          className: "uitext"
        }), "은 그룹화된 서버 구성 정보를 기준으로 개별 카드를 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_serverInventoryMap",
          className: "uitext"
        }), "의 카드는 다음 세 가지 주요 요소로 구성됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "server-inventory-map-chart.png",
        desc: "서버 인벤토리 맵 차트"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
        id: "지시선-a-그룹-현황",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 a",
          src: (__webpack_require__(89332)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 그룹 현황"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "그룹명 및 그룹에 속한 서버들의 상태별 서버 수를 정보를 제공합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "구분"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Total"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "해당 그룹에 포함된 전체 서버 수를 나타냅니다. 서버는 목적에 맞게 분류되고 필터링된 상태로 집계됩니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "vslow",
                children: "Critical"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "위험도 Critical(위험)에 해당하는 이벤트를 발생시킨 서버 수를 나타냅니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "slow",
                children: "Warning"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "위험도 Warning(경고)에 해당하는 이벤트를 발생시킨 서버 수를 나타냅니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "normal",
                children: "Normal"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "위험도 Critical 또는 Warning 이벤트가 발생하지 않은, 정상 상태의 서버 수를 나타냅니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "mstop",
                children: "Inactive"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "서버 Down, Agent Down, 네트워크 통신 장애 등으로 인해 정상적인 데이터 수집이 불가능한 서버 수를 나타냅니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Cores"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "그룹 내 각 서버의 물리 코어 수를 합산한 총 코어 수를 나타냅니다."
            })]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
        id: "지시선-b-서버-그룹-차트",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 b",
          src: (__webpack_require__(77191)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 서버 그룹 차트"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["그룹 내 서버의 상태와 성능 데이터를 시각화하여 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "2차 그룹화"
          })
        }), "가 적용된 경우 차트 내에서 서브 그룹 형태로 데이터가 추가적으로 구분되어 표시됩니다. 또한 서브 그룹에 마우스를 올리면 해당 그룹에 포함된 서버들의 주요 상태 정보를 팝오버 형식으로 간략히 확인할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
        id: "지시선-c-메트릭스",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 c",
          src: (__webpack_require__(90070)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 메트릭스"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "그룹별 주요 지표 정보를 간략하게 제공합니다. 각 지표에 대한 상세 정보는 다음 표를 참고하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "구분"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "CPU(%)"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "전체 CPU 사용률 중 사용자 모드(User)와 커널 모드(Sys)에서의 사용률 합계를 표시합니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Memory(%)"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "사용자 프로세스와 커널이 사용 중인 메모리의 비율을 표시하며, 버퍼 및 캐시 영역은 제외됩니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Swap(%)"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "현재 사용 중인 Swap 영역의 크기를 백분율로 표시합니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Disk Busy(%)"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "단위 시간당 각 디스크가 작업한 시간 비율이며, 서버에서 가장 사용률이 높은 디스크의 값을 표시합니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Network RX"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "수신(Rx)된 데이터의 양을 bps 단위로 표시합니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Network TX"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "송신(Tx)된 데이터의 양을 bps 단위로 표시합니다."
            })]
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Avg"
              })
            }), ": 그룹에 속한 모든 서버의 평균 메트릭 값을 표시합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Max"
              })
            }), ": 해당 메트릭의 최대값을 표시합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Max Server"
              })
            }), ": 최대값을 기록한 서버의 이름을 표시합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "요약-보기",
        children: "요약 보기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["서버 인벤토리 맵 차트에서 그룹 선택 시 오른쪽 영역에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "요약 보기"
        }), " 패널을 확인할 수 있습니다. 요약 보기 패널은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "그룹 정보"
          })
        }), " 탭과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "메트릭스"
          })
        }), " 탭을 제공합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "server-inventory-map-summary.png",
        desc: "서버 인벤토리 맵 요약 보기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "상세 보기"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["요약 보기 패널 오른쪽 위에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "상세 보기 아이콘",
            src: (__webpack_require__(71543)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "상세 보기"
            })
          }), " 버튼을 클릭하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "상세 보기"
            })
          }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "server-inventory-map-details",
            children: "다음 문서"
          }), "를 참조하세요."]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "그룹-정보",
        children: "그룹 정보"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "group_info",
          className: "uitext"
        }), "  탭에서 다음과 같이 선택한 서버 그룹의 주요 운영 상태와 자원 정보를 효과적으로 확인할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08660",
          className: "uitext"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["서버가 부팅된 이후 운영 기간을 기준으로 구간을 나누어 해당 구간에 속한 서버 대수를 바 차트 형태로 시각화하여 표시합니다. 바 차트 선택 시 해당 구간에 속하는 서버의 세부 정보가 하단의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08767",
          className: "uitext"
        }), " 목록에서 하이라이팅됩니다. 동일한 바 차트 클릭 시 선택이 해제됩니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "-1",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08767",
          className: "uitext"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["선택한 서버 그룹의 서버 관련 주요 정보를 목록 형식으로 조회할 수 있습니다. 오른쪽 입력창에서 Hostname 또는 IP 주소를 입력하여 필터링할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "서버 이름"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "IP Adress"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "OS 버전"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "CPU Cores"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Memory(GB)"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "서버 업타임"
          })
        }), " 컬럼을 제공합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "-2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08662",
          className: "uitext"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "서버의 파일 시스템 상태를 직관적으로 조회할 수 있습니다. 각 서버의 마운트 포인트는 하나의 블록으로 표현됩니다. 블록 색상은 해당 마운트 포인트의 사용률(Used, %)을 나타냅니다. 또한 동일한 색상 범위 내에서도 사용률 수치가 높아질 수록 색상 강도가 높아집니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              class: "vslow",
              children: "빨간색"
            }), ": 사용률이 90% 이상일 경우를 의미합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              class: "slow",
              children: "주황색"
            }), ": 사용률이 80% 이상 90% 미만일 경우를 의미합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              class: "snormal",
              children: "녹색"
            }), ": 사용률이 80% 미만일 경우를 의미합니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "마운트 포인트 블록 위에 마우스를 올릴 경우 해당 서버명, 마운트 포인트, 사용률 및 전체 용량 정보를 확인할 수 있습니다."
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "메트릭스",
        children: "메트릭스"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "metrics",
          className: "uitext"
        }), " 탭에서 주요 서버 성능 지표를 차트 형식으로 조회할 수 있습니다. 그룹별 자원 상태를 직관적으로 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "구분"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "[CPU] User + Sys (%)"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "전체 CPU 사용률 중 사용자 모드(User)와 커널 모드(Sys)에서의 사용률 합계를 표시합니다. 이를 통해 전체 CPU 자원의 활용도를 나타냅니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "[MEM] Used (%)"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "사용자 프로세스 또는 커널에 의해 사용된 메모리의 비율을 표시합니다. 버퍼 및 캐시 영역은 제외하고, 순수 메모리 사용량만 반영됩니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "[SWAP] Used (%)"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "현재 사용 중인 Swap 메모리 크기를 백분율로 표시한 값입니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "[NET] Rx (bps)"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "네트워크에서 수신(Rx)된 데이터의 양을 bps(초당 비트) 단위로 표시합니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "[NET] Tx (bps)"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "네트워크를 통해 송신(Tx)된 데이터의 양을 bps(초당 비트) 단위로 표시합니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "[Disk] Read (Bytes)"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "전체 디스크의 초당 읽기 속도 합계를 Bytes 단위로 표시합니다."
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "[Disk] Write (Bytes)"
                })
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "전체 디스크의 초당 쓰기 속도 합계를 Bytes 단위로 표시합니다."
            })]
          })]
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

/***/ 90070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTcuNSIgY3k9IjE3LjUiIHI9IjE3LjUiIGZpbGw9IiNGOUMxMkEiLz4KPHBhdGggZD0iTTE3LjgyODEgMjMuMjY1NkMxOC4yOTY5IDIzLjI2NTYgMTguNzEzNSAyMy4xNjY3IDE5LjA3ODEgMjIuOTY4OEMxOS40NTMxIDIyLjc3MDggMTkuNzUgMjIuNDYzNSAxOS45Njg4IDIyLjA0NjlDMjAuMTg3NSAyMS42MTk4IDIwLjMwNzMgMjEuMDY3NyAyMC4zMjgxIDIwLjM5MDZIMjMuNzVDMjMuNzI5MiAyMS41ODg1IDIzLjQ1MzEgMjIuNjM1NCAyMi45MjE5IDIzLjUzMTJDMjIuMzkwNiAyNC40MTY3IDIxLjY4MjMgMjUuMTA0MiAyMC43OTY5IDI1LjU5MzhDMTkuOTIxOSAyNi4wNzI5IDE4Ljk0NzkgMjYuMzEyNSAxNy44NzUgMjYuMzEyNUMxNi43NjA0IDI2LjMxMjUgMTUuNzg2NSAyNi4xMzU0IDE0Ljk1MzEgMjUuNzgxMkMxNC4xMzAyIDI1LjQxNjcgMTMuNDQ3OSAyNC44OTA2IDEyLjkwNjIgMjQuMjAzMUMxMi4zNjQ2IDIzLjUxNTYgMTEuOTU4MyAyMi42ODIzIDExLjY4NzUgMjEuNzAzMUMxMS40MjcxIDIwLjcxMzUgMTEuMjk2OSAxOS41ODMzIDExLjI5NjkgMTguMzEyNVYxNi43ODEyQzExLjI5NjkgMTUuNTIwOCAxMS40MjcxIDE0LjM5NTggMTEuNjg3NSAxMy40MDYyQzExLjk1ODMgMTIuNDE2NyAxMi4zNjQ2IDExLjU3ODEgMTIuOTA2MiAxMC44OTA2QzEzLjQ0NzkgMTAuMjAzMSAxNC4xMzAyIDkuNjgyMjkgMTQuOTUzMSA5LjMyODEyQzE1Ljc3NiA4Ljk2MzU0IDE2Ljc0NDggOC43ODEyNSAxNy44NTk0IDguNzgxMjVDMTkuMDQ2OSA4Ljc4MTI1IDIwLjA3MjkgOS4wMzEyNSAyMC45Mzc1IDkuNTMxMjVDMjEuODEyNSAxMC4wMjA4IDIyLjQ5NDggMTAuNzM5NiAyMi45ODQ0IDExLjY4NzVDMjMuNDc0IDEyLjYzNTQgMjMuNzI5MiAxMy43OTY5IDIzLjc1IDE1LjE3MTlIMjAuMzI4MUMyMC4zMDczIDE0LjQ0MjcgMjAuMTk3OSAxMy44MzMzIDIwIDEzLjM0MzhDMTkuODAyMSAxMi44NDM4IDE5LjUyMDggMTIuNDY4OCAxOS4xNTYyIDEyLjIxODhDMTguODAyMSAxMS45Njg4IDE4LjM1NDIgMTEuODQzOCAxNy44MTI1IDExLjg0MzhDMTcuMjE4OCAxMS44NDM4IDE2LjcyOTIgMTEuOTU4MyAxNi4zNDM4IDEyLjE4NzVDMTUuOTY4OCAxMi40MDYyIDE1LjY3NzEgMTIuNzI5MiAxNS40Njg4IDEzLjE1NjJDMTUuMjcwOCAxMy41ODMzIDE1LjEzMDIgMTQuMTA0MiAxNS4wNDY5IDE0LjcxODhDMTQuOTc0IDE1LjMyMjkgMTQuOTM3NSAxNi4wMTA0IDE0LjkzNzUgMTYuNzgxMlYxOC4zMTI1QzE0LjkzNzUgMTkuMTA0MiAxNC45NzQgMTkuODA3MyAxNS4wNDY5IDIwLjQyMTlDMTUuMTE5OCAyMS4wMjYgMTUuMjU1MiAyMS41NDE3IDE1LjQ1MzEgMjEuOTY4OEMxNS42NjE1IDIyLjM5NTggMTUuOTU4MyAyMi43MTg4IDE2LjM0MzggMjIuOTM3NUMxNi43MjkyIDIzLjE1NjIgMTcuMjI0IDIzLjI2NTYgMTcuODI4MSAyMy4yNjU2WiIgZmlsbD0iIzMzMzMzMyIvPgo8L3N2Zz4K");

/***/ }),

/***/ 71543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZnVsbHNjcmVlbjwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjQuMDAwMDAwLCAtMzI0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iZGlyZWN0aW9uYWwtaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMTE5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLWZ1bGxzY3JlZW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNC4wMDAwMDAsIDIwNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjAwMDAwMCwgMy4wMDAwMDApIiBpZD0iSWNvbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLDEyIEwyLDE2IEw2LDE2IEw2LDE4IEwtMS41ODA5NTc1OWUtMTMsMTggTC0xLjU4MDk1NzU5ZS0xMywxMiBMMiwxMiBaIE0xOCwxMiBMMTgsMTggTDEyLDE4IEwxMiwxNiBMMTYsMTYgTDE2LDEyIEwxOCwxMiBaIE02LDIuNDg2ODk5NThlLTE0IEw2LDIgTDIsMiBMMiw2IEwtMS41ODA5NTc1OWUtMTMsNiBMLTEuNTgwOTU3NTllLTEzLDMuNjYwOTYwNDJlLTE0IEwtMS41ODA5NTc1OWUtMTMsMy42NjA5NjA0MmUtMTQgTDYsMi40ODY4OTk1OGUtMTQgWiBNMTgsLTMuMTk3NDQyMzFlLTE0IEwxOCw2IEwxNiw2IEwxNiwyIEwxMiwyIEwxMiwtMy4xOTc0NDIzMWUtMTQgTDE4LC0zLjE5NzQ0MjMxZS0xNCBMMTgsLTMuMTk3NDQyMzFlLTE0IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

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