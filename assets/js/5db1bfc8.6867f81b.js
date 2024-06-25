"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[49762],{

/***/ 8643:
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
  "value": "보고서와 통합 보고서의 차이",
  "id": "보고서와-통합-보고서의-차이",
  "level": 2
}, {
  "value": "보고서 생성 방법",
  "id": "보고서-생성-방법",
  "level": 2
}, {
  "value": "작업 목록 확인",
  "id": "작업-목록-확인",
  "level": 2
}, {
  "value": "조회 및 공유",
  "id": "조회-및-공유",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
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
      children: ["홈 화면 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 모니터링 서비스 초기 화면에서 프로젝트를 선택하지 않고 사이드 메뉴의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      }), "를 선택하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      }), "는 여러 프로젝트에 대한 보고서를 간편하게 생성할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "보고서 종류와 원하는 프로젝트를 선택하여 보고서를 생성할 수 있고, 보고서 생성 목록에서 작업 진행 상태를 확인할 수 있습니다. 보고서 생성 중 특정 프로젝트에서 에러가 발생한 경우 에러 내용을 확인할 수 있습니다. 작업이 완료된 보고서를 바로 조회하거나, 다운로드 및 인쇄 기능을 통해 다른 사람에게 보고서를 공유할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "integration_report_01.png"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      }), "의 기능은 다음과 같습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "멀티 프로젝트 지원"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), " 메뉴에서 여러 프로젝트를 선택해 한 번에 보고서를 생성할 수 있어 편리합니다. 기존 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_report",
            className: "uitext"
          }), " 메뉴는 프로젝트마다 보고서를 생성해야 했습니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "업무 단위 보고서 생성"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "create_report",
            className: "uitext"
          }), " 메뉴에서 업무 단위로 프로젝트를 선택해 템플릿으로 저장할 수 있습니다. 보통 업무 단위로 프로젝트를 나누어 사용하는 마이크로 서비스 아키텍처(MSA, Micro Service Architecture) 환경에서 유용한 기능입니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "대용량 데이터 최적화"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), " 메뉴는 보고서 생성 시간이 획기적으로 줄어들었습니다. 그리고 일부 프로젝트 보고서 작성 과정에서 오류가 발생하더라도 보고서 결과를 조회할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "보고서 생성 중 동시 작업 가능"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), " 메뉴에서 보고서를 생성하는 동시에 다른 업무를 보는 것이 가능합니다. 기존 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_report",
            className: "uitext"
          }), " 메뉴는 생성 작업이 완료될 때까지 기다려야만 했습니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), " 메뉴에서 보고서 생성을 시작한 후 다른 페이지로 이동할 수 있습니다. 또한 보고서 결과 목록에서 진행 상태와 완료된 보고서를 조회할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "보고서 작업 공유"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "동일 프로젝트 권한을 가진 사용자라면 누구든 생성한 보고서를 조회할 수 있습니다. 관련 보고서가 이미 생성됐는지 확인할 수 있어 중복으로 작성하지 않을 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "보고서와-통합-보고서의-차이",
        children: "보고서와 통합 보고서의 차이"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_report",
          className: "uitext"
        }), "는 하나의 프로젝트에 대한 보고서를 생성하는 메뉴입니다. 따라서 프로젝트를 선택 후 좌측의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_reportStat",
          className: "uitext"
        }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_report",
          className: "uitext"
        }), " 메뉴를 통해 접근이 가능합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_integratedReport",
          className: "uitext"
        }), "는 여러 프로젝트에 대한 보고서를 생성하는 메뉴입니다. 프로젝트를 선택하지 않고 기본 메뉴에서 접근이 가능합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_report",
          className: "uitext"
        }), "의 상세 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "report-intro",
          children: "다음 문서"
        }), "에서 확인할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "보고서-생성-방법",
        children: "보고서 생성 방법"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "보고서 종류 선택"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "integration_report_02.png"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "report_type",
              className: "uitext"
            }), "에서 원하는 보고서 유형을 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "create_report",
              className: "uitext"
            }), " 버튼이 활성화됩니다. 보고서 이름 앞의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "아이콘"
            }), "은 보고서의 양식이 지원하는 프로젝트 플랫폼을 의미합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "플랫폼 애플리케이션 icon",
                src: (__webpack_require__(94938)/* ["default"] */ .A) + "",
                width: "32",
                height: "32"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Application"
              }), " 프로젝트 플랫폼을 나타냅니다."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "플랫폼 쿠버네티스 icon",
                src: (__webpack_require__(68516)/* ["default"] */ .A) + "",
                width: "32",
                height: "32"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Kubernetes"
              }), " 프로젝트 플랫폼을 나타냅니다."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "플랫폼 서버 icon",
                src: (__webpack_require__(94521)/* ["default"] */ .A) + "",
                width: "30",
                height: "30"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Server"
              }), " 프로젝트 플랫폼을 나타냅니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "상세 설정"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "master_report.png"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["보고서 종류 선택 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "create_report",
              className: "uitext"
            }), " 버튼을 클릭하세요. 다음과 같이 상세 설정을 할 수 있습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "보고서 제목"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "같은 타입의 보고서가 여러 개인 경우 이름을 지정하면 보고서 결과를 구분하기 쉽습니다."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "시간"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "보고서에 사용될 데이터의 기간을 선택하세요. 기간은 보고서 타입(일, 주, 월)에 따라 달라집니다."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "프로젝트 선택"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "보고서를 작성할 프로젝트를 선택하세요. 그룹 및 개별 프로젝트 단위로 선택이 가능합니다."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "보고서 양식 저장과 불러오기"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "지금 입력된 보고서의 설정을 템플릿으로 저장하고 다음 생성 시 타입 목록에서 불러올 수 있습니다. 업무 단위로 프로젝트를 자주 사용하시는 분들에게 유용한 기능입니다."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "보고서 생성"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["설정을 완료했다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "create_report",
              className: "uitext"
            }), " 버튼을 눌러 보고서를 생성하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "작업-목록-확인",
        children: "작업 목록 확인"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "integration_report_03.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "generation_report_list",
          className: "uitext"
        }), "에서 이전에 만들었던 보고서와 현재 작업 중인 보고서를 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "all",
          className: "uitext"
        }), " 목록에서는 내가 생성한 보고서 외에도 나와 같은 권한을 가진 사람이 생성한 보고서를 함께 볼 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "my_report",
          className: "uitext"
        }), " 목록에서는 내가 생성한 보고서만 필터링하여 볼 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["에러 없이 생성된 보고서는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          class: "woer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "체크 icon",
            src: (__webpack_require__(63664)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 체크"]
        }), " 아이콘으로 표시되며, 에러가 포함된 경우는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          class: "wer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "경고 icon",
            src: (__webpack_require__(43420)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 경고"]
        }), " 아이콘이 함께 표시됩니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          class: "wer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "경고 icon",
            src: (__webpack_require__(43420)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 경고"]
        }), " 아이콘을 클릭하시면 어떤 프로젝트에서 에러가 발생했는지 확인할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "조회-및-공유",
        children: "조회 및 공유"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "integration_report_04.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "보고서는 3가지 방식으로 제공됩니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "화면 조회"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "작업 목록에서 생성한 보고서를 선택하면 화면에서 바로 조회하여 볼 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "다운로드"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "download",
              className: "uitext"
            }), " 버튼을 클릭하면 바로 보기의 보고서와 같은 파일이 html 형식으로 다운로드 됩니다. 모니터링 관리 권한이 없는 사람에게 보고서를 공유할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "인쇄 및 PDF 저장"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "print",
              className: "uitext"
            }), " 버튼을 누르면 컴퓨터에 연결된 프린터로 인쇄하거나 또는 PDF 형식으로 저장할 수 있습니다."]
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

/***/ 25668:
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
/* harmony import */ var _common_items_integrated_report_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8643);


const frontMatter = {
	id: 'integrated-report',
	title: '통합 보고서',
	description: '통합 보고서를 안내합니다.',
	tags: [
		'Go',
		'통합 보고서',
		'분석하기',
		'UI'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "golang/integrated-report",
  "title": "통합 보고서",
  "description": "통합 보고서를 안내합니다.",
  "source": "@site/docs/golang/integrated-report.mdx",
  "sourceDirName": "golang",
  "slug": "/golang/integrated-report",
  "permalink": "/whatap-docs/golang/integrated-report",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/golang/integrated-report.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Go",
      "permalink": "/whatap-docs/tags/go"
    },
    {
      "inline": true,
      "label": "통합 보고서",
      "permalink": "/whatap-docs/tags/통합-보고서"
    },
    {
      "inline": true,
      "label": "분석하기",
      "permalink": "/whatap-docs/tags/분석하기"
    },
    {
      "inline": true,
      "label": "UI",
      "permalink": "/whatap-docs/tags/ui"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "integrated-report",
    "title": "통합 보고서",
    "description": "통합 보고서를 안내합니다.",
    "tags": [
      "Go",
      "통합 보고서",
      "분석하기",
      "UI"
    ]
  },
  "sidebar": "goSidebar",
  "previous": {
    "title": "애플리케이션 보고서",
    "permalink": "/whatap-docs/golang/report-apm"
  },
  "next": {
    "title": "경고 알림",
    "permalink": "/whatap-docs/golang/apm-set-notice"
  }
};
const assets = {

};




const toc = [..._common_items_integrated_report_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM];
function _createMdxContent(props) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_integrated_report_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {});
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



/***/ }),

/***/ 63664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC40NTI3IDZMOS41NzQ3NiAxNS4xMTFMNS41NDczMyAxMC43Nzc2TDQgMTIuMzA1MUw5LjU3NDc2IDE4TDIwIDcuNTI3NTRMMTguNDUyNyA2VjZaIiBmaWxsPSIjNDQ4NUZGIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 43420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4xMjYgMy40MTg0QzExLjUxOSAyLjc5OTI3IDEyLjQyMjcgMi43OTk3NyAxMi44MTUgMy40MTkzMkwyMi4yODcxIDE4LjM3NjFDMjIuNzA4OCAxOS4wNDE5IDIyLjIzMDQgMTkuOTExMSAyMS40NDIzIDE5LjkxMTFIMi40NzUxNkMxLjY4NjU2IDE5LjkxMTEgMS4yMDgyNiAxOS4wNDA5IDEuNjMwOTEgMTguMzc1MUwxMS4xMjYgMy40MTg0Wk00LjI5NDcxIDE3LjkxMTFMMTkuNjI1NiAxNy45MTExTDExLjk2OTQgNS44MjE3OUw0LjI5NDcxIDE3LjkxMTFaTTEwLjk5OTkgMTQuOTU0NUgxMi45OTk5VjE2Ljk1NDVIMTAuOTk5OVYxNC45NTQ1Wk0xMi45OTk5IDguOTU0NTRIMTAuOTk5OVYxMy45NTQ1SDEyLjk5OTlWOC45NTQ1NFoiIGZpbGw9IiNGRjk5MDAiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 94938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOS4zMzMzIDQuNjY2NjlDMjkuMzMzMyAzLjU2MjEyIDI4LjQzNzkgMi42NjY2OSAyNy4zMzMzIDIuNjY2NjlINC42NjY2N0MzLjU2MjEgMi42NjY2OSAyLjY2NjY3IDMuNTYyMTIgMi42NjY2NyA0LjY2NjY5VjI3LjMzMzRDMi42NjY2NyAyOC40Mzc5IDMuNTYyMSAyOS4zMzM0IDQuNjY2NjcgMjkuMzMzNEgyNy4zMzMzQzI4LjQzNzkgMjkuMzMzNCAyOS4zMzMzIDI4LjQzNzkgMjkuMzMzMyAyNy4zMzM0VjQuNjY2NjlaTTIxLjMzMzMgMTAuMzQzMkwxOS40NDc3IDEyLjIyODhMMjMuMjE5IDE2TDE5LjQ0NzcgMTkuNzcxM0wyMS4zMzMzIDIxLjY1NjlMMjUuMTA0NiAxNy44ODU2TDI2Ljk5MDIgMTZMMjUuMTA0NiAxNC4xMTQ0TDIxLjMzMzMgMTAuMzQzMlpNMTIuNTUyMyAxMi4yMjg4TDEwLjY2NjcgMTAuMzQzMkw2Ljg5NTQ0IDE0LjExNDRMNS4wMDk4MiAxNkw2Ljg5NTQ0IDE3Ljg4NTZMMTAuNjY2NyAyMS42NTY5TDEyLjU1MjMgMTkuNzcxM0w4Ljc4MTA1IDE2TDEyLjU1MjMgMTIuMjI4OFpNMTkuNTMzMSAxMC4xOTE0TDE3LjAyNzIgOS4yNzkzOEwxMi40NjY5IDIxLjgwODZMMTQuOTcyOCAyMi43MjA3TDE5LjUzMzEgMTAuMTkxNFoiIGZpbGw9IiMwMEIwRTIiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 68516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC42NjY3IDBIMTcuMzMzM1Y0LjA3MzI0QzIwLjc0NDggNC40NTAzNiAyMy43MjUzIDYuMjU3NTUgMjUuNjYyIDguODgyMDZMMjkuMTg5NyA2Ljg0NTNMMzAuNTIzMSA5LjE1NDdMMjYuOTk3MyAxMS4xOTAzQzI3LjY0MjIgMTIuNjYyOCAyOCAxNC4yODk2IDI4IDE2QzI4IDE3LjcxMDQgMjcuNjQyMiAxOS4zMzcyIDI2Ljk5NzMgMjAuODA5N0wzMC41MjMxIDIyLjg0NTNMMjkuMTg5NyAyNS4xNTQ3TDI1LjY2MiAyMy4xMTc5QzIzLjcyNTMgMjUuNzQyNCAyMC43NDQ4IDI3LjU0OTYgMTcuMzMzMyAyNy45MjY4VjMySDE0LjY2NjdWMjcuOTI2OEMxMS4yNTUyIDI3LjU0OTYgOC4yNzQ3MyAyNS43NDI0IDYuMzM4MDMgMjMuMTE3OUwyLjgxMDI2IDI1LjE1NDdMMS40NzY5MyAyMi44NDUzTDUuMDAyNzQgMjAuODA5N0M0LjM1Nzg0IDE5LjMzNzIgNCAxNy43MTA0IDQgMTZDNCAxNC4yODk2IDQuMzU3ODQgMTIuNjYyOCA1LjAwMjc0IDExLjE5MDNMMS40NzY5MyA5LjE1NDdMMi44MTAyNiA2Ljg0NTNMNi4zMzgwMyA4Ljg4MjA2QzguMjc0NzMgNi4yNTc1NSAxMS4yNTUyIDQuNDUwMzYgMTQuNjY2NyA0LjA3MzI0VjBaTTI1LjMzMzMgMTZDMjUuMzMzMyAxNy4yMjQ1IDI1LjA5NzUgMTguMzkzOSAyNC42Njg4IDE5LjQ2NTRMMTkuOTMzMyAxNi43MzEzQzE5Ljk3NzEgMTYuNDk0MiAyMCAxNi4yNDk4IDIwIDE2QzIwIDE1Ljc1MDIgMTkuOTc3MSAxNS41MDU4IDE5LjkzMzMgMTUuMjY4N0wyNC42Njg4IDEyLjUzNDZDMjUuMDk3NSAxMy42MDYxIDI1LjMzMzMgMTQuNzc1NSAyNS4zMzMzIDE2Wk0xOC41OTk0IDEyLjk1OTZMMjMuMzMzNyAxMC4yMjYzQzIxLjg4NDcgOC4zODgzMSAxOS43NTk1IDcuMTA4MjIgMTcuMzMzMyA2Ljc2MTE5VjEyLjIyNzZDMTcuODAxNSAxMi4zOTMxIDE4LjIyOTYgMTIuNjQzMiAxOC41OTk0IDEyLjk1OTZaTTE0LjY2NjcgMTIuMjI3NlY2Ljc2MTE5QzEyLjI0MDUgNy4xMDgyMiAxMC4xMTUzIDguMzg4MzEgOC42NjYzMyAxMC4yMjYzTDEzLjQwMDYgMTIuOTU5NkMxMy43NzA0IDEyLjY0MzIgMTQuMTk4NSAxMi4zOTMxIDE0LjY2NjcgMTIuMjI3NlpNMTIuMDY2NyAxNS4yNjg3TDcuMzMxMTYgMTIuNTM0NkM2LjkwMjQ4IDEzLjYwNjEgNi42NjY2NyAxNC43NzU1IDYuNjY2NjcgMTZDNi42NjY2NyAxNy4yMjQ1IDYuOTAyNDggMTguMzkzOSA3LjMzMTE2IDE5LjQ2NTRMMTIuMDY2NyAxNi43MzEzQzEyLjAyMjkgMTYuNDk0MiAxMiAxNi4yNDk4IDEyIDE2QzEyIDE1Ljc1MDIgMTIuMDIyOSAxNS41MDU4IDEyLjA2NjcgMTUuMjY4N1pNMTMuNDAwNiAxOS4wNDA0QzEzLjc3MDQgMTkuMzU2OCAxNC4xOTg1IDE5LjYwNjkgMTQuNjY2NyAxOS43NzI0VjI1LjIzODhDMTIuMjQwNSAyNC44OTE4IDEwLjExNTMgMjMuNjExNyA4LjY2NjMzIDIxLjc3MzdMMTMuNDAwNiAxOS4wNDA0Wk0xNy4zMzMzIDE5Ljc3MjRDMTcuODAxNSAxOS42MDY5IDE4LjIyOTYgMTkuMzU2OCAxOC41OTk0IDE5LjA0MDRMMjMuMzMzNyAyMS43NzM3QzIxLjg4NDcgMjMuNjExNyAxOS43NTk1IDI0Ljg5MTggMTcuMzMzMyAyNS4yMzg4VjE5Ljc3MjRaIiBmaWxsPSIjNDQ4NUZGIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 94521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNS41IDIuMTY2NjlWOS4xNjY2OUg0LjVWMi4xNjY2OUgyNS41Wk00LjUgMTEuNUgyNS41VjE4LjVINC41VjExLjVaTTQuNSAyMC44MzM0VjI3LjgzMzRIMjUuNVYyMC44MzM0SDQuNVpNNi44MzMzMyA0LjUwMDAySDkuMTY2NjdWNi44MzMzNUg2LjgzMzMzVjQuNTAwMDJaTTkuMTY2NjcgMTMuODMzNEg2LjgzMzMzVjE2LjE2NjdIOS4xNjY2N1YxMy44MzM0Wk02LjgzMzMzIDIzLjE2NjdIOS4xNjY2N1YyNS41SDYuODMzMzNWMjMuMTY2N1pNMjMuMTY2NyA0LjUwMDAySDEyLjY2NjdWNi44MzMzNUgyMy4xNjY3VjQuNTAwMDJaTTEyLjY2NjcgMTMuODMzNEgyMy4xNjY3VjE2LjE2NjdIMTIuNjY2N1YxMy44MzM0Wk0yMy4xNjY3IDIzLjE2NjdIMTIuNjY2N1YyNS41SDIzLjE2NjdWMjMuMTY2N1oiIGZpbGw9IiMwMEM1QjEiLz4KPC9zdmc+Cg==");

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