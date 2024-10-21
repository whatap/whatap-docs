"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[98287],{

/***/ 88486:
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
	id: 'real-time-monitoring-for-it-infra',
	title: 'DX IT 운영을 위한 와탭 모니터링',
	description: 'IT 모니터링이 직면한 주요 과제와 이를 해결하기 위한 Best Practices로서 통합 모니터링, 실시간 옵저버빌리티, 그리고 DX-IT 운영을 실현하기 위한 방법론을 제시합니다.',
	displayed_sidebar: 'learningSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "best-practice-guides/real-time-monitoring-for-it-infra",
  "title": "DX IT 운영을 위한 와탭 모니터링",
  "description": "IT 모니터링이 직면한 주요 과제와 이를 해결하기 위한 Best Practices로서 통합 모니터링, 실시간 옵저버빌리티, 그리고 DX-IT 운영을 실현하기 위한 방법론을 제시합니다.",
  "source": "@site/docs/best-practice-guides/real-time-monitoring-for-it-infra.mdx",
  "sourceDirName": "best-practice-guides",
  "slug": "/best-practice-guides/real-time-monitoring-for-it-infra",
  "permalink": "/whatap-docs/best-practice-guides/real-time-monitoring-for-it-infra",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/best-practice-guides/real-time-monitoring-for-it-infra.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "real-time-monitoring-for-it-infra",
    "title": "DX IT 운영을 위한 와탭 모니터링",
    "description": "IT 모니터링이 직면한 주요 과제와 이를 해결하기 위한 Best Practices로서 통합 모니터링, 실시간 옵저버빌리티, 그리고 DX-IT 운영을 실현하기 위한 방법론을 제시합니다.",
    "displayed_sidebar": "learningSidebar",
    "isTranslationMissing": false
  },
  "sidebar": "learningSidebar",
  "previous": {
    "title": "학습하기",
    "permalink": "/whatap-docs/learning-guides"
  },
  "next": {
    "title": "DX IT 운영을 위한 와탭 모니터링",
    "permalink": "/whatap-docs/best-practice-guides/real-time-monitoring-for-it-infra"
  }
};
const assets = {

};



const toc = [{
  "value": "IT 모니터링 직면 과제",
  "id": "it-모니터링-직면-과제",
  "level": 2
}, {
  "value": "IT 환경의 변화",
  "id": "it-환경의-변화",
  "level": 3
}, {
  "value": "디지털 트랜스포메이션(DX)의 영향",
  "id": "디지털-트랜스포메이션dx의-영향",
  "level": 4
}, {
  "value": "IT 기술의 진화",
  "id": "it-기술의-진화",
  "level": 4
}, {
  "value": "마이크로서비스 아키텍처(MSA)의 확산",
  "id": "마이크로서비스-아키텍처msa의-확산",
  "level": 4
}, {
  "value": "컨테이너 기술의 도입",
  "id": "컨테이너-기술의-도입",
  "level": 4
}, {
  "value": "서비스 운영성의 향상",
  "id": "서비스-운영성의-향상",
  "level": 4
}, {
  "value": "IT 시스템의 복잡성 증가",
  "id": "it-시스템의-복잡성-증가",
  "level": 4
}, {
  "value": "모니터링 환경의 변화",
  "id": "모니터링-환경의-변화",
  "level": 3
}, {
  "value": "관측 대상의 변화",
  "id": "관측-대상의-변화",
  "level": 4
}, {
  "value": "모니터링 기술의 진화",
  "id": "모니터링-기술의-진화",
  "level": 4
}, {
  "value": "모니터링 사용자의 변화",
  "id": "모니터링-사용자의-변화",
  "level": 4
}, {
  "value": "모니터링 니즈의 변화",
  "id": "모니터링-니즈의-변화",
  "level": 3
}, {
  "value": "옵션에서 필수로의 전환",
  "id": "옵션에서-필수로의-전환",
  "level": 4
}, {
  "value": "모니터링 대상 자원의 증가",
  "id": "모니터링-대상-자원의-증가",
  "level": 4
}, {
  "value": "성능 모니터링의 중요성",
  "id": "성능-모니터링의-중요성",
  "level": 4
}, {
  "value": "DX-IT 운영",
  "id": "dx-it-운영",
  "level": 4
}, {
  "value": "통합 모니터링",
  "id": "통합-모니터링",
  "level": 4
}, {
  "value": "가시화의 필요성",
  "id": "가시화의-필요성",
  "level": 4
}, {
  "value": "IT 모니터링 분야의 주요 과제",
  "id": "it-모니터링-분야의-주요-과제",
  "level": 3
}, {
  "value": "DX를 지탱하는 IT 운영",
  "id": "dx를-지탱하는-it-운영",
  "level": 4
}, {
  "value": "운영 효율화와 비용 절감",
  "id": "운영-효율화와-비용-절감",
  "level": 4
}, {
  "value": "운영 담당자의 부재와 스케일링 대응",
  "id": "운영-담당자의-부재와-스케일링-대응",
  "level": 4
}, {
  "value": "성능 모니터링과 시스템 품질 유지",
  "id": "성능-모니터링과-시스템-품질-유지",
  "level": 4
}, {
  "value": "비즈니스 변화에 대한 대응성",
  "id": "비즈니스-변화에-대한-대응성",
  "level": 4
}, {
  "value": "과제 해결 방안",
  "id": "과제-해결-방안",
  "level": 2
}, {
  "value": "통합 모니터링",
  "id": "통합-모니터링-1",
  "level": 3
}, {
  "value": "지금까지의 모니터링",
  "id": "지금까지의-모니터링",
  "level": 4
}, {
  "value": "모니터링에서의 통합",
  "id": "모니터링에서의-통합",
  "level": 4
}, {
  "value": "실시간 옵저버빌리티",
  "id": "실시간-옵저버빌리티",
  "level": 3
}, {
  "value": "옵저버빌리티의 주요 구성 요소",
  "id": "옵저버빌리티의-주요-구성-요소",
  "level": 4
}, {
  "value": "분산 시스템과 실시간 옵저버빌리티의 필요성",
  "id": "분산-시스템과-실시간-옵저버빌리티의-필요성",
  "level": 4
}, {
  "value": "실시간 옵저버빌리티 구현의 주요 과제",
  "id": "실시간-옵저버빌리티-구현의-주요-과제",
  "level": 4
}, {
  "value": "실시간 옵저버빌리티의 이점",
  "id": "실시간-옵저버빌리티의-이점",
  "level": 4
}, {
  "value": "DX-IT 운영",
  "id": "dx-it-운영-1",
  "level": 3
}, {
  "value": "DX-IT 운영의 필요성",
  "id": "dx-it-운영의-필요성",
  "level": 4
}, {
  "value": "ITIL4 기반의 IT 운영 모델",
  "id": "itil4-기반의-it-운영-모델",
  "level": 4
}, {
  "value": "모니터링 관점에서의 DX-IT 운영 실현",
  "id": "모니터링-관점에서의-dx-it-운영-실현",
  "level": 4
}, {
  "value": "IT 모니터링 직면 과제의 해결",
  "id": "it-모니터링-직면-과제의-해결",
  "level": 4
}, {
  "value": "WhaTap Monitoring",
  "id": "whatap-monitoring",
  "level": 2
}, {
  "value": "통합 모니터링 플랫폼",
  "id": "통합-모니터링-플랫폼",
  "level": 3
}, {
  "value": "환경 및 리전 통합 관리",
  "id": "환경-및-리전-통합-관리",
  "level": 3
}, {
  "value": "실시간 문제 탐지 및 대응",
  "id": "실시간-문제-탐지-및-대응",
  "level": 3
}, {
  "value": "연계 추적",
  "id": "연계-추적",
  "level": 3
}, {
  "value": "통합 모니터링의 주요 기능",
  "id": "통합-모니터링의-주요-기능",
  "level": 3
}, {
  "value": "DX-IT 운영의 실현",
  "id": "dx-it-운영의-실현",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Head, ImgLang} = _components;
  if (!Head) _missingMdxReference("Head", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["현대 IT 환경은 빠르게 진화하고 있으며, 이에 따라 IT 운영과 모니터링에 대한 요구도 급격히 변화하고 있습니다. 디지털 전환(Digital Transformation, DX)과 클라우드 기술의 확산은 IT 인프라의 복잡성을 증가시키고, 기존의 모니터링 방식으로는 이러한 변화를 따라잡기 어렵게 만들었습니다. 이 문서에서는 IT 모니터링이 직면한 주요 과제와 이를 해결하기 위한 Best Practices로서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "통합 모니터링"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "실시간 옵저버빌리티"
      }), ", 그리고 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "DX-IT 운영"
      }), "을 실현하기 위한 방법론을 제시합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "it-모니터링-직면-과제",
        children: "IT 모니터링 직면 과제"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "it-환경의-변화",
        children: "IT 환경의 변화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "현대의 IT 환경은 디지털 트랜스포메이션(DX)과 기술의 발전으로 인해 빠르게 변화하고 있습니다. 이러한 변화는 기업이 비즈니스 목표를 달성하기 위해 IT 운영 방식을 재구성하고 최적화하는 것을 요구합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "디지털-트랜스포메이션dx의-영향",
        children: "디지털 트랜스포메이션(DX)의 영향"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "디지털 트랜스포메이션은 기존의 비즈니스 모델을 재구성하고 기술을 통해 새로운 가치를 창출하는 과정입니다. 클라우드, 인공지능(AI), 빅데이터, 블록체인 등의 기술은 기업이 디지털 혁신을 통해 경쟁 우위를 확보할 수 있도록 지원합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "DX",
          src: (__webpack_require__(27827)/* ["default"] */ .A) + "",
          width: "1200",
          height: "392"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "기술 기반의 혁신"
            }), ": 클라우드 서비스, IoT, 가상 현실(VR) 등의 기술은 비즈니스의 효율성을 높이고 새로운 시장 기회를 창출합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "신규 비즈니스 모델 도입"
            }), ": DX는 기존의 레거시 시스템을 혁신하고 새로운 비즈니스 모델을 도입함으로써 기업의 경쟁력을 강화합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "it-기술의-진화",
        children: "IT 기술의 진화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "IT 기술은 클라우드 컴퓨팅, 컨테이너화, 서버리스 아키텍처 등으로 빠르게 진화하고 있습니다. 이러한 기술들은 자원을 효율적으로 활용하고 온디맨드로 대규모 자원을 활용할 수 있게 합니다. 특히, 클라우드 기술의 진화는 다른 소프트웨어 기술의 진화를 견인하고 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "IT technology",
          src: (__webpack_require__(53336)/* ["default"] */ .A) + "",
          width: "1200",
          height: "547"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "클라우드와 컨테이너 기술의 도입"
            }), ": 기업은 퍼블릭 클라우드와 프라이빗 클라우드를 결합한 하이브리드 클라우드를 통해 인프라의 유연성을 극대화하고 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "온디맨드 자원 활용"
            }), ": 대규모 데이터 처리가 필요한 작업에서 자원을 효율적으로 사용하고 필요한 시점에 자원을 확장하거나 축소할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "마이크로서비스-아키텍처msa의-확산",
        children: "마이크로서비스 아키텍처(MSA)의 확산"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "마이크로서비스 아키텍처(MicroService Architecture, MSA)는 애플리케이션을 여러 개의 독립적인 서비스로 분리하여 운영하는 방식으로 IT 환경의 유연성과 확장성을 크게 향상시킵니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "MSA",
          src: (__webpack_require__(26049)/* ["default"] */ .A) + "",
          width: "1200",
          height: "608"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "애플리케이션의 경량화"
            }), ": 각 서비스는 독립적으로 개발되고 배포될 수 있어 변경이 필요할 때마다 전체 시스템을 수정할 필요가 없습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "서비스 간의 격리"
            }), ": 문제가 발생해도 다른 서비스에 영향을 주지 않도록 설계되어 시스템 안정성이 향상됩니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "컨테이너-기술의-도입",
        children: "컨테이너 기술의 도입"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "컨테이너는 애플리케이션과 그에 필요한 모든 것을 패키징하여 경량화된 단위로 실행할 수 있게 합니다. 이는 자원의 효율성을 높이고 배포와 관리의 복잡성을 줄이는 데 기여합니다. 또한 적은 자원으로 서비스 단위의 격리와 운영을 가능케 하여 마이크로서비스의 확산을 더욱 가속화하고 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Container",
          src: (__webpack_require__(42958)/* ["default"] */ .A) + "",
          width: "1200",
          height: "433"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "컨테이너의 경량화"
            }), ": 애플리케이션을 컨테이너화하여 다양한 환경에서 동일한 방식으로 실행할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "자동화된 배포와 관리"
            }), ": 컨테이너 오케스트레이션 도구인 Kubernetes를 통해 컨테이너의 배포와 관리를 자동화할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "서비스-운영성의-향상",
        children: "서비스 운영성의 향상"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "IT 기술의 진보는 서비스의 운영성을 크게 향상시켰습니다. 특히 클라우드 기술의 발전은 서비스의 유연성과 확장성을 높여주었으며 이는 기업의 비즈니스 민첩성을 강화하는 데 중요한 역할을 합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/dx-it-image-05.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "동적 스케일링"
            }), ": 필요에 따라 서비스의 규모를 자동으로 조정하여 자원을 효율적으로 활용할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "서비스의 단위 확장"
            }), ": 각 서비스는 독립적으로 확장 가능하며 이는 장애 확산을 방지하는 데 도움을 줍니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "it-시스템의-복잡성-증가",
        children: "IT 시스템의 복잡성 증가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "기술이 진보함에 따라 IT 시스템의 복잡성도 증가하고 있습니다. 특히 클라우드와 마이크로서비스 아키텍처의 도입으로 시스템 구성 요소가 다양해지고 상호 의존성이 높아졌습니다. 이러한 상황에서 기존의 IT 모니터링 방식으로는 시스템 전체를 파악하기 어렵다는 문제가 대두되고 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          src: "https://ik.imagekit.io/h4gmuu7ol/d76285_129d9a09cb084c9ca10e8225d7e98_0e59b3f687.png?sp=racwdl&st=2023-11-29T13:26:55Z&se=2050-11-29T21:26:55Z&spr=https&sv=2022-11-02&sr=c&sig=cjlnEtXAZeiBo5U0aBoOwBU2azK6HmLaRgvCD9aT9Aw%3D&tr=w-2048",
          alt: "Obervability"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["출처: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://www.worth.nl/en/articles/5-reasons-to-fight-complexity-in-your-it-systems",
          children: "https://www.worth.nl/en/articles/5-reasons-to-fight-complexity-in-your-it-systems"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "복잡성의 증가"
            }), ": 다양한 서비스와 기술이 결합되면서 시스템의 복잡성이 높아졌습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "새로운 관측 방식 필요"
            }), ": 기존의 모니터링 방식으로는 이러한 복잡한 시스템을 관리하기 어려워 새로운 관측 방식이 요구됩니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "모니터링-환경의-변화",
        children: "모니터링 환경의 변화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "현대의 IT 환경은 기술의 발전과 함께 급격하게 변화하고 있습니다. 이러한 변화는 모니터링 환경에도 큰 영향을 미치며, 기존의 모니터링 방식으로는 복잡하고 동적인 IT 시스템을 효과적으로 관리하기 어려워졌습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "관측-대상의-변화",
        children: "관측 대상의 변화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "전통적인 모니터링 방식은 주로 서버나 데이터베이스와 같은 특정 자원의 내부에 국한되어 있었습니다. 그러나 클라우드 서비스의 도입과 컨테이너, 쿠버네티스(Kubernetes) 등의 활용이 증가하면서 모니터링 대상이 크게 확장되었습니다. 이제는 자원의 내부뿐만 아니라 자원의 외부에서 발생하는 다양한 지표와 데이터를 수집해야 합니다. 클라우드 활용이 일반화되면서 클라우드 벤더가 확보하고 있는 플랫폼 정보 또한 함께 모니터링해야 하는 상황입니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Obervability",
          src: (__webpack_require__(61733)/* ["default"] */ .A) + "",
          width: "1200",
          height: "544"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "MSA 환경으로의 전환에 컨테이너 환경까지 결합되면서, 모니터링 대상이 확대되어 리소스, 애플리케이션, 그리고 서비스 호출 흐름까지 관측 대상에 포함되었습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "모니터링-기술의-진화",
        children: "모니터링 기술의 진화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "모니터링 기술은 IT 시스템의 복잡성과 데이터 양이 증가함에 따라 지속적으로 발전하고 있습니다. 특히, 기존의 모니터링 방식으로는 수집할 수 없었던 데이터를 수집하기 위한 새로운 시도가 이루어지고 있으며 인공지능(AI)과 머신러닝(ML) 기술을 활용한 분석이 증가하고 있습니다. 다음은 그 대표적인 사례입니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Obervability",
          src: (__webpack_require__(60866)/* ["default"] */ .A) + "",
          width: "1200",
          height: "390"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "eBPF"
            }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Extended Berkeley Packet Filter"
            }), "): 리눅스 커널에서 실행되는 프로그램으로 커널 공간에서 데이터를 수집하는 데 사용됩니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Telegraf와 같은 데이터 수집 도구"
            }), ": 다양한 데이터 소스에서 메트릭을 수집하고 전송하는 역할을 합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "AI/ML을 통한 분석"
            }), ": 수집된 데이터를 기반으로 이상 탐지 및 예측 분석을 수행합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "모니터링-사용자의-변화",
        children: "모니터링 사용자의 변화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "모니터링 대상이 확장됨에 따라 사용자층도 넓어졌습니다. 과거에는 주로 시스템 엔지니어(SE)나 운영자만이 모니터링 도구를 사용했습니다. 그러나 최근에는 애플리케이션을 서비스 단위로 개발하고 배포하는 체계에서 이전과 같은 역할 분담이 명확하지 않게 되었습니다. DevOps 팀과 개발자들도 모니터링 도구를 사용하여 시스템의 상태를 실시간으로 확인하고 문제를 해결하는 데 적극적으로 참여하고 있습니다. 더 나아가 SRE(Site Reliability Engineering)라는 직종이 등장하면서 모니터링 능력이 엔지니어 개인의 역량을 평가하는 중요한 요소가 되었습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "이러한 변화는 IT 시스템의 복잡성이 증가함에 따라, 모든 관련 팀이 시스템 상태를 이해하고 문제가 발생했을 때 빠르게 대응할 수 있도록 하기 위함입니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "모니터링-니즈의-변화",
        children: "모니터링 니즈의 변화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "현대의 IT 환경은 디지털 트랜스포메이션(DX)의 가속화와 함께 빠르게 변화하고 있습니다. 이러한 변화는 모니터링 요구 사항의 변화를 초래하였으며 옵션에 그쳤던 요소가 이제는 필수 요소로 자리 잡고 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "옵션에서-필수로의-전환",
        children: "옵션에서 필수로의 전환"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "과거에는 특정 요소만 모니터링하는 것이 옵션 사항에 불과했지만, 현재는 모든 요소를 필수적으로 모니터링해야 하는 상황으로 변화하고 있습니다. 이는 시스템 구성 요소의 다양화와 더불어 관리 포인트가 증가한 결과입니다. 각 요소의 상태를 모니터링하는 것은 이제 비즈니스 연속성 유지와 시스템 안정성을 위해 필수적입니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Obervability",
          src: (__webpack_require__(24523)/* ["default"] */ .A) + "",
          width: "943",
          height: "618"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "관리 포인트의 증가"
            }), ": 다양한 클라우드 서비스, 클라이언트, 웹, 모바일 등 복합적인 요소들이 추가되면서 모니터링 요구가 증가했습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "필수적인 모니터링"
            }), ": 모든 IT 자원과 서비스를 필수적으로 모니터링해야 할 필요성이 높아지고 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "모니터링-대상-자원의-증가",
        children: "모니터링 대상 자원의 증가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "모놀리식 아키텍처에서 마이크로서비스 아키텍처(MSA)로의 전환은 모니터링 대상 자원의 범위를 크게 확장했습니다. 이로 인해 기업들은 단일 서버나 네트워크 장치를 넘어, 분산 서버, 클라우드 서비스, 가상 네트워크 등 다양한 자원을 모니터링해야 하는 필요성이 생겼습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Increase taget to monitoring",
          src: (__webpack_require__(42517)/* ["default"] */ .A) + "",
          width: "1200",
          height: "485"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "모니터링 대상의 확장"
            }), ": 기존의 전통적인 서버와 네트워크 장비뿐만 아니라, 가상 서버, 클라우드 데이터베이스, 분산 애플리케이션 등 새로운 자원들도 모니터링 대상에 포함해야 합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "분산 아키텍처 지원"
            }), ": 분산된 서버와 네트워크에서의 성능을 효과적으로 모니터링하며 시스템 전반의 상태를 파악할 수 있는 능력이 필요합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "성능-모니터링의-중요성",
        children: "성능 모니터링의 중요성"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "마이크로서비스 아키텍처의 도입으로 인해 모니터링 대상이 확대됨에 따라 리소스와 애플리케이션의 성능을 모니터링하는 것이 중요해졌습니다. 이는 각 서비스 호출의 흐름과 성능을 모니터링하는 것을 포함하여 시스템의 전반적인 성능을 유지하는 데 필수적입니다. 또한 현대의 분산 아키텍처 환경에서는 가용 자원에 대한 동적 측정 및 평가, 증설 등을 자동으로 운영합니다. 이러한 이유로 서비스에 대한 성능 평가가 운영을 위한 기준으로서 중요해 졌습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "마이크로서비스 아키텍처의 도입으로 모니터링 대상이 확대되면서, 리소스와 애플리케이션 성능을 모니터링하는 것이 더욱 중요해졌습니다. 각 서비스 호출의 흐름과 성능을 모니터링하는 것은 시스템 전반의 성능을 유지하는 데 필수적입니다. 또한 현대의 분산 아키텍처 환경에서는 가용 자원에 대한 동적 측정 및 평가, 그리고 증설이 자동으로 이루어집니다. 이러한 이유로 서비스 성능 평가가 운영의 기준으로서 중요해졌습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/dx-it-image-11.png",
        desc: "Performance monitoring"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "애플리케이션 성능 모니터링"
            }), ": 애플리케이션 성능을 실시간으로 모니터링하여 시스템 성능 저하를 조기에 감지하고 대응할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "서비스 호출 흐름 모니터링"
            }), ": 분산 환경에서 서비스 간 호출 흐름을 모니터링하여 시스템의 성능 문제를 신속히 파악할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "dx-it-운영",
        children: "DX-IT 운영"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "성능 모니터링"
        }), "은 시스템의 다양한 지표를 실시간으로 관측하고 분석함으로써 인프라 자원의 활용도를 최적화할 수 있습니다. 이는 시스템의 품질을 유지하는 데 있어 중요한 역할을 합니다. 특히, 클라우드와 같은 유동적인 인프라 환경에서는 리소스의 적절한 배분과 확장이 비즈니스 성과에 직결되기 때문에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "성능 모니터링"
        }), "은 필수적인 도구입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/dx-it-image-12.png",
        desc: "DX IT"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["과거에는 비즈니스와 IT 기술이 각기 독립적으로 운영되거나 최소한의 접점에서 융합하는 수준에 그쳤습니다. 그러나 디지털 트랜스포메이션(DX)의 가속화와 함께 IT는 단순한 지원 역할을 넘어 비즈니스 전략의 핵심으로 자리 잡게 되었습니다. 이제 IT와 비즈니스는 완전히 통합된 상태로 운영되어야 합니다. 이 과정에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "성능 모니터링"
        }), "은 필수적인 도구로 자리 잡게 되었습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "성능 모니터링"
        }), "은 DX-IT 운영의 필수 요소로서 IT와 비즈니스의 일체화를 지원하는 핵심 도구입니다. 이는 단순히 시스템의 성능을 모니터링하는 것을 넘어 비즈니스 성과를 극대화하고, 기업의 경쟁력을 강화하는 데 필수적인 역할을 합니다. 앞으로도 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "성능 모니터링"
        }), "은 IT 운영의 중요한 부분으로 비즈니스와 IT가 일체화된 운영 모델을 실현하는 데 있어 중요한 역할을 지속적으로 담당하게 될 것입니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "통합-모니터링",
        children: "통합 모니터링"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["IT 시스템의 복잡성이 증가함에 따라 단일 도구로는 모든 모니터링 요구를 충족시키기 어려워졌습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "통합 모니터링"
        }), "은 다양한 IT 자산(서버, 네트워크, 애플리케이션 등)을 하나의 플랫폼에서 모니터링하고 관리할 수 있는 능력을 제공합니다. 이는 DX-IT 운영을 지원하는 핵심 요소입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/dx-it-image-13.png",
        desc: "Integrated Monitoring"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "시스템 전체의 가시성 확보"
            }), ": 통합 모니터링을 통해 모든 시스템 요소의 상태를 한눈에 파악할 수 있습니다. 이는 문제 발생 시 신속한 대응을 가능하게 하며 시스템의 안정성을 유지하는 데 필수적입니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "효율적인 리소스 관리"
            }), ": 통합 모니터링은 리소스의 사용 현황을 정확히 파악하고 필요에 따라 최적화 방안을 마련할 수 있게 합니다. 이를 통해 불필요한 리소스 낭비를 줄이고 비용 효율성을 높일 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "단일 뷰 제공"
            }), ": 다양한 시스템과 애플리케이션에서 수집된 데이터를 한 곳에서 통합적으로 볼 수 있는 단일 뷰를 제공함으로써 운영자는 시스템 전반의 상태를 쉽게 모니터링할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "가시화의-필요성",
        children: "가시화의 필요성"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "모니터링 데이터를 통해 시스템 상태를 가시화하는 것은 운영 효율성을 높이는 데 필수적입니다. 가시화된 데이터는 운영자에게 중요한 인사이트를 제공하며 빠른 의사결정을 지원합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/dx-it-image-14.png",
        desc: "Integrated Monitoring"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "데이터 가시화"
            }), ": 다양한 자원에서 수집된 데이터를 효과적으로 시각화하여 운영자에게 중요한 정보를 직관적으로 제공할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "장애 탐지 및 대응"
            }), ": 시각화된 데이터를 통해 장애를 신속하게 탐지하고 효과적으로 대응할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["장애 탐지 시간과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://chronosphere.io/learn/why-are-we-so-bad-at-mean-time-to-repair-mttr/?utm_source=the+new+stack&utm_medium=referral&utm_content=inline-mention&utm_campaign=tns+platform",
            children: "복구 시간"
          }), "이 길어지면 운영에 부정적인 영향을 미칩니다. 이는 클라우드와 하이브리드 환경이 복잡해지면서 가시성이 낮아져 장애 발생 시 신속하게 서비스를 복구하는 것이 더 어려워지기 때문입니다."]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "it-모니터링-분야의-주요-과제",
        children: "IT 모니터링 분야의 주요 과제"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "현대 IT 환경에서 모니터링은 필수적인 요소로 자리 잡았습니다. 그러나 모니터링 시스템이 효과적으로 작동하기 위해서는 여러 가지 도전과제를 극복해야 합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "dx를-지탱하는-it-운영",
        children: "DX를 지탱하는 IT 운영"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "IT 퍼포먼스의 향상은 비즈니스 속도와 성과에 직접적인 영향을 미칩니다. IT 시스템의 성능이 최적화될수록 비즈니스의 성장과 발전이 가속화되며, 현대의 디지털 전환 시대에서 매우 중요한 요소로 자리 잡고 있습니다. IT와 비즈니스는 이제 분리될 수 없는 관계를 형성하고 있으며, IT 운영의 성공 여부가 곧 비즈니스 성과로 이어집니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "디지털 트랜스포메이션 과정에서 성공적인 IT 운영은 단순히 시스템을 안정적으로 유지하는 것을 넘어, 비즈니스 속도를 높이고 경쟁력을 강화하는 핵심적인 역할을 담당합니다. 따라서 IT 퍼포먼스를 높이는 것은 디지털 전환의 성공을 좌우하는 중요한 요소이며, 궁극적으로 기업의 지속 가능한 성장과 성과를 보장하는 필수적인 조건으로 자리매김하고 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "운영-효율화와-비용-절감",
        children: "운영 효율화와 비용 절감"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "IT 모니터링 시스템의 구축과 운영에는 상당한 비용이 소요됩니다. 특히, 다양한 환경과 업무에 맞춰 각각의 모니터링 솔루션을 구축하고 유지하는 데는 많은 자원이 필요합니다. 운영 효율성을 극대화하고 비용을 절감하기 위해서는 통합된 모니터링 솔루션이 필요합니다. 이러한 통합은 중복된 투자와 유지 비용을 줄이고 운영 효율성을 높이는 데 기여할 수 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "운영-담당자의-부재와-스케일링-대응",
        children: "운영 담당자의 부재와 스케일링 대응"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "IT 시스템의 복잡성이 증가함에 따라 이를 관리할 수 있는 운영 담당자의 역할이 더욱 중요해졌습니다. 그러나 많은 기업들이 충분한 인력을 확보하지 못하거나 미성숙한 DevOps 환경에서 운영과 개발을 동시에 담당해야 하는 어려움을 겪고 있습니다. 또한 트래픽 증가할 때 시스템의 신속한 스케일링(확장)이 필요한데 이를 효과적으로 지원할 수 있는 운영 체계가 부족한 경우가 많습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "자동화된 모니터링과 스케일링 솔루션을 통해 운영 부담을 줄이고 비즈니스 요구에 맞춰 신속하게 대응할 수 있는 체계 구축이 필요합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["지난 2016년부터 2021년 동안 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://uptimeinstitute.com/about-ui/press-releases/uptime-institute-releases-3rd-annual-outage-analysis?utm_source=the+new+stack&utm_medium=referral&utm_content=inline-mention&utm_campaign=tns+platform",
                children: "42%의 기업"
              }), "이 휴먼 에러로 인해 다운 타임을 경험했습니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://cpl.thalesgroup.com/cloud-security-research?utm_source=the+new+stack&utm_medium=referral&utm_content=inline-mention&utm_campaign=tns+platform",
                children: "전 세계 기업의 40%"
              }), "가 지난 12개월 동안 클라우드 기반 데이터 유출을 경험했습니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["고객을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://opsworks.co/how-to-improve-website-performance-with-devops/?utm_source=the+new+stack&utm_medium=referral&utm_content=inline-mention&utm_campaign=tns+platform",
                children: "3초 이상"
              }), " 기다리게 한다면 잠재 고객의 50%가 웹사이트를 이탈합니다."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "성능-모니터링과-시스템-품질-유지",
        children: "성능 모니터링과 시스템 품질 유지"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "시스템 성능을 모니터링하고, 이를 기반으로 시스템 품질을 유지하는 것은 IT 운영의 핵심 과제 중 하나입니다. 그러나 분산된 애플리케이션과 복잡한 인프라에서 성능 데이터를 효과적으로 수집하고 분석하는 것은 매우 어려운 작업입니다. 이에 따라 성능 모니터링을 강화하고 시스템 품질을 유지하는 방법론이 요구됩니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "고성능 모니터링 도구를 도입하여 실시간으로 성능 데이터를 수집하고 이를 바탕으로 시스템의 품질을 유지할 수 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "비즈니스-변화에-대한-대응성",
        children: "비즈니스 변화에 대한 대응성"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "IT 환경은 비즈니스 요구에 따라 빠르게 변화합니다. 이러한 변화에 신속하게 대응하기 위해서는 모니터링 시스템도 유연하고 민첩하게 운영되어야 합니다. 그러나 기존의 고정된 모니터링 시스템은 비즈니스 변화에 대응하는 데 한계가 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "유연한 모니터링 솔루션을 도입하여 비즈니스 변화에 민첩하게 대응할 수 있도록 시스템을 설계해야 합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "과제-해결-방안",
        children: "과제 해결 방안"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "통합-모니터링-1",
        children: "통합 모니터링"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "현대의 IT 환경은 복잡하고 다양한 시스템이 상호 연관되어 작동하는 환경입니다. 이러한 환경에서 각 시스템의 상태를 효과적으로 파악하고 관리하기 위해서는 모니터링이 필수적입니다. 그러나 전통적인 모니터링 방식은 특정 대상이나 시스템에 국한되어 있었으며, 이는 전체적인 IT 인프라의 상태를 종합적으로 파악하는 데 한계가 있습니다. 이러한 문제를 해결하기 위해 통합 모니터링의 필요성이 점점 강조되고 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "지금까지의-모니터링",
        children: "지금까지의 모니터링"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "대상별 모니터링"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "전통적인 모니터링 방식은 특정 자원이나 시스템에 집중하여 개별적으로 모니터링하는 형태였습니다. 예를 들어, 서버 모니터링, 네트워크 모니터링, 애플리케이션 모니터링 등 각기 다른 도구를 사용하여 각 요소를 독립적으로 모니터링하는 방식입니다. 이러한 접근 방식은 개별 시스템의 상태를 파악하는 데는 유용하지만, 시스템 간의 상호작용이나 전체적인 성능을 종합적으로 이해하는 데는 한계가 있었습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Monitoring by target",
              src: (__webpack_require__(18312)/* ["default"] */ .A) + "",
              width: "1200",
              height: "621"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "사일로화된 정보"
                }), ": 각 시스템 간의 데이터가 분리되어 있어 전체적인 IT 인프라의 상태를 종합적으로 파악하기 어렵습니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "장애 대응 지연"
                }), ": 특정 시스템에서 문제가 발생했을 때 해당 문제가 다른 시스템에 어떻게 영향을 미치는지를 파악하기 어렵기 때문에 장애 대응이 지연될 수 있습니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "운영 비효율성"
                }), ": 여러 시스템에서 중복된 모니터링이 이루어지면서 운영의 효율성이 떨어지고 각 시스템 간의 데이터 일관성을 유지하기 어려워집니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "담당별 모니터링"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "기존의 모니터링은 주로 시스템 엔지니어, 네트워크 관리자, 애플리케이션 관리자 등 각기 다른 담당자가 각각의 도구를 사용하여 자신이 관리하는 영역만을 모니터링하는 방식이었습니다. 이러한 방식은 각 팀이 특정 영역의 성능과 상태를 깊이 있게 파악할 수 있도록 했지만 문제가 발생했을 때 서로 다른 팀 간의 협력이 어려워지고, 문제의 원인을 종합적으로 분석하는 데 시간이 소요되었습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Monitoring by manage",
              src: (__webpack_require__(80291)/* ["default"] */ .A) + "",
              width: "1200",
              height: "475"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "커뮤니케이션 부족"
                }), ": 각 팀이 사용하는 도구와 관점이 다르기 때문에 문제가 발생하면 서로 다른 데이터를 기반으로 의사소통을 해야 하며 이로 인해 오해나 의사결정의 지연이 발생할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "문제의 근본 원인 파악의 어려움"
                }), ": 문제의 원인이 어느 시스템에 있는지 명확하지 않을 때는 각 팀이 서로에게 책임을 떠넘기며 문제 해결이 지연될 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "시스템별 모니터링"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "시스템별 모니터링은 각기 다른 시스템을 독립적으로 모니터링하는 방식입니다. 예를 들어, 데이터베이스 시스템은 데이터베이스 모니터링 도구로, 네트워크는 네트워크 모니터링 도구로 모니터링하는 식입니다. 이러한 방식은 각 시스템의 성능을 독립적으로 최적화할 수 있지만 시스템 간의 연계성이나 종합적인 성능을 모니터링하는 데는 한계가 있습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Monitoring by system",
              src: (__webpack_require__(90458)/* ["default"] */ .A) + "",
              width: "1200",
              height: "335"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "워크로드 관리의 비효율성"
                }), ": 각 시스템이 서로 다른 워크로드를 가지고 있어 이를 효율적으로 관리하기 위해서는 통합된 모니터링 솔루션이 필요합니다."]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "비용 증가"
                }), ": 각 시스템을 개별적으로 모니터링하다 보면 모니터링 도구의 중복 사용으로 인한 비용이 증가할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "모니터링에서의-통합",
        children: "모니터링에서의 통합"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "모니터링 환경의 변화에 따라 개별 시스템이나 영역에 국한된 모니터링 방식은 한계를 드러내고 있습니다. 이를 해결하기 위해 모니터링 대상, 기술, 업무, 그리고 환경을 통합하는 새로운 접근 방식이 필요합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/dx-it-image-18.png",
        desc: "Integrated Monitoring"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "대상/기술의 통합"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "통합 모니터링의 첫 번째 단계는 다양한 모니터링 대상을 통합하는 것입니다. 서버, 네트워크, 애플리케이션, 데이터베이스 등 모든 IT 자원을 하나의 플랫폼에서 통합적으로 모니터링할 수 있어야 합니다. 또한 이들 기술을 통합하여 단일한 대시보드를 통해 모든 자원의 상태를 한눈에 파악할 수 있는 시스템이 필요합니다. 이를 통해 시스템 간의 연계성을 파악하고 전체 IT 인프라의 상태를 실시간으로 모니터링할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "업무의 통합"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "통합 모니터링은 IT 운영 팀 내에서의 업무 통합을 촉진합니다. 기존의 담당별 모니터링에서 벗어나 통합 모니터링을 통해 모든 팀이 동일한 데이터를 기반으로 협력할 수 있습니다. 예를 들어, 시스템 엔지니어, 네트워크 관리자, 애플리케이션 관리자가 모두 동일한 모니터링 플랫폼을 사용하여 협업함으로써 문제 발생 시 신속하고 효과적으로 대응할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "환경/지역의 통합"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "현대의 IT 환경은 하이브리드 클라우드, 멀티 클라우드, 온프레미스 환경 등 다양한 인프라를 포함하고 있습니다. 이러한 환경의 통합 모니터링은 필수적입니다. 퍼블릭 클라우드와 프라이빗 클라우드, 온프레미스 환경을 아우르는 통합 모니터링을 통해 다양한 지역과 환경에서 운영되는 시스템을 일관되게 관리할 수 있습니다. 이는 글로벌 비즈니스를 운영하는 기업에게 특히 중요합니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "실시간-옵저버빌리티",
        children: "실시간 옵저버빌리티"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["현대의 IT 환경에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "옵저버빌리티"
        }), "는 시스템의 가용성과 성능을 유지하고 비즈니스 요구에 신속하게 대응하는 데 필수적인 요소로 자리 잡고 있습니다. 복잡하고 분산된 시스템 구조에서는 단순한 모니터링만으로는 충분하지 않으며 시스템의 상태를 실시간으로 파악하고 문제를 즉시 해결할 수 있는 능력이 필요합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "옵저버빌리티의-주요-구성-요소",
        children: "옵저버빌리티의 주요 구성 요소"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "모니터링은 단순히 시스템의 활동을 관찰하고 기록하는 프로세스입니다. 모니터링 도구는 애플리케이션이 어떻게 작동하는지에 대한 데이터를 수집합니다. 모니터링을 통해 애플리케이션의 상태를 파악하여 알려진 장애 지점에 대한 경계를 유지할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["모니터링의 상위 개념인 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "옵저버빌리티"
        }), "에는 이러한 모든 기능과 그 이상의 기능을 포함합니다. 복잡한 클라우드 네이티브 분산 시스템의 문제를 해결할 때는 더 많고 다양한 도구가 필요하기 때문입니다. 어떤 종류의 장애가 발생할지 예측할 수도 없고 미리 알 수도 없습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "옵저버빌리티"
        }), "는 새로운 클라우드 네이티브 세계에서 소위 '알려지지 않은 미지의 문제'를 발견하고 해결하는 데 도움이 됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["모니터링은 애플리케이션 성능을 감시하고 개선하는 데 사용됩니다. 반면에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "옵저버빌리티"
        }), "는 클라우드 네이티브 시스템의 내부 측정을 통해 비즈니스 중심적인 결과나 목표에 영향을 미치는 것에 더 가깝습니다. 예를 들어, 사용자에게 미치는 영향은 무엇인가? 고객에게 어떤 영향을 미치나? 어떻게 하면 더 민첩하게 반복할 수 있을까? 그리고 어떻게 하면 비즈니스 전체에 더 많은 혜택을 더 빨리 제공할 수 있을까? ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "옵저버빌리티"
        }), "는 시스템을 계속 가동하고 운영하기 위해 더 큰 그림으로 접근하는 것입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["다음은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "옵저버빌리티"
        }), "를 구성하는 주요 요소입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "메트릭스"
            }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Metrics"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "메트릭스"
            }), "는 시스템의 성능과 상태를 정량적으로 나타내는 지표입니다. CPU 사용률 및 메모리 사용량, 네트워크 대역폭, 트랜잭션 처리 속도 등이 대표적인 메트릭스입니다. 실시간 옵저버빌리티를 구현하기 위해서는 이러한 메트릭스를 초단위로 수집하여 분석하는 것이 중요합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "로그"
            }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Log"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "로그"
            }), "는 시스템에서 발생하는 이벤트나 에러 정보를 기록한 데이터입니다. 로그를 통해 시스템에서 발생한 일련의 사건들을 추적하고 특정 문제의 원인을 파악할 수 있습니다. 실시간 옵저버빌리티에서는 로그 데이터를 실시간으로 수집하고 분석하여 문제가 발생한 시점과 원인을 신속하게 파악할 수 있어야 합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "트레이스"
            }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Trace"
            }), ") / 스팬(Span)"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "트레이스"
            }), "는 애플리케이션 내에서 수행된 작업의 흐름을 추적하는 데 사용됩니다. 이는 특히 분산 시스템에서 중요하며 각 서비스 간의 호출 관계와 처리 시간을 분석하여 병목 현상이나 성능 저하의 원인을 파악하는 데 유용합니다. 트레이스를 통해 모니터링 대상의 복잡한 실행 흐름을 가시화하고 문제 발생 시 신속하게 해결할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "프로파일러"
            }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Profiler"
            }), ")"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "프로파일러"
            }), "는 애플리케이션의 성능을 세부적으로 분석하고 최적화하는 데 사용합니다. 특정 코드나 함수의 실행 시간을 측정하고 리소스 소비를 모니터링하여 애플리케이션 내에서 성능 병목이 발생하는 부분을 식별하는 데 유용합니다. 실시간 옵저버빌리티 환경에서 프로파일러는 모니터링 대상의 성능을 심층적으로 분석하여 시스템이 최적의 상태에서 동작할 수 있도록 지원합니다. 이를 통해 성능 저하를 사전에 방지하고 최적화된 성능을 유지할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "분산-시스템과-실시간-옵저버빌리티의-필요성",
        children: "분산 시스템과 실시간 옵저버빌리티의 필요성"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "현대 IT 시스템은 마이크로서비스 아키텍처와 클라우드 환경의 도입으로 인해 더욱 복잡해지고 있습니다. 이러한 분산 시스템에서는 다양한 서비스와 애플리케이션이 상호작용하며 이들 간의 상태를 실시간으로 파악하는 것이 매우 중요합니다. 실시간 옵저버빌리티는 이러한 복잡한 시스템을 관리하고 문제를 즉시 파악하여 신속하게 대응할 수 있는 능력을 제공합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Distributed system",
          src: (__webpack_require__(78365)/* ["default"] */ .A) + "",
          width: "1200",
          height: "676"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "복잡성 증가"
            }), ": 분산 시스템과 마이크로서비스 아키텍처의 도입으로 시스템 간의 상호작용이 더욱 복잡해졌으며, 이를 관리하려면 실시간으로 데이터를 수집하고 분석할 수 있는 실시간 옵저버빌리티가 필요합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "동적 변화"
            }), ": 클라우드 환경에서 서비스의 동적인 변화에 빠르게 대응하기 위해서는 실시간으로 시스템 상태를 파악하고, 이를 기반으로 자동화된 조치를 취할 수 있는 기능이 중요합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "실시간-옵저버빌리티-구현의-주요-과제",
        children: "실시간 옵저버빌리티 구현의 주요 과제"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "실시간 옵저버빌리티"
        }), "란 즉시성이 요구되는 IT 서비스에서의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "옵저버빌리티"
        }), "를 의미합니다. 사용자가 문제를 인지하기 전에, 시스템의 상태를 초 단위로 감시하고 복잡한 상황을 시각화할 수 있어야 합니다. 장애가 발생했을 때는 서비스 관점에서 문제 발생 지점과 유형을 빠르게 식별할 수 있어야 합니다. 마지막으로, 신속한 원인 분석을 위해 장애 재현이나 추가 정보 수집 없이 상시 기록된 고해상도 데이터를 통해 바로 문제의 원인을 탐색할 수 있어야 합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/dx-it-image-19.png",
        desc: "Real-time Objevability"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "실시간 옵저버빌리티를 성공적으로 구현하기 위해서는 몇 가지 핵심 과제를 해결해야 합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "통합된 데이터 수집"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "효과적인 옵저버빌리티를 위해서는 시스템 전반에서 수집된 데이터를 통합하여 관리하는 것이 중요합니다. 성능 지표(메트릭스), 이벤트 기록(로그), 작업 흐름 기록(트레이스) 등의 데이터를 다양한 소스에서 실시간으로 수집하여 하나의 플랫폼에서 관리해야 합니다. 이를 통해 시스템의 전반적인 상태를 한눈에 파악할 수 있으며 문제가 발생했을 때 신속하게 원인을 분석할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "자동화된 경고 및 알림 시스템"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "실시간 옵저버빌리티는 특정 조건이 발생했을 때 자동으로 경고를 발생시키고 이를 운영팀에 알리는 기능을 포함해야 합니다. 이러한 자동화된 경고 시스템은 문제 발생 시 신속한 대응을 가능하게 하며 시스템의 가용성을 유지하는 데 중요한 역할을 합니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "통합된 가시성 제공"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "현대 IT 환경에서는 다양한 소스에서 많은 데이터가 유입되며, 이를 관리하기 위해 여러 도구를 사용하는 경우가 많습니다. 하지만 이러한 도구들 간에 전환 없이 모든 데이터를 한곳에서 통합해 볼 수 있는 시스템이 필요합니다. 통합된 가시성은 사용자가 여러 시스템과 애플리케이션에서 들어오는 데이터를 하나의 화면에서 쉽게 모니터링할 수 있도록 해줍니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "이를 통해 운영자는 시스템의 상태를 보다 명확하게 파악하고 필요한 조치를 신속하게 취할 수 있습니다. 이처럼 모든 데이터를 한눈에 볼 수 있는 통합된 뷰를 제공함으로써 전체 시스템에 대한 이해도를 높이고 운영 효율성을 극대화할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "고해상도 데이터 분석"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "초단위로 수집되는 고해상도 데이터를 실시간으로 분석하여 시스템의 미세한 변화도 즉시 감지할 수 있어야 합니다. 이를 통해 잠재적인 문제를 조기에 발견하고, 서비스 중단을 예방할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "상호 운용성 수용"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "데이터는 다양한 소스에서 다양한 형식으로 제공될 수 있습니다. 오픈 소스 도구, 상용 도구, 클라우드 환경 등에서 생성된 데이터를 하나의 플랫폼에서 통합적으로 관리하고 분석할 수 있어야 합니다. 이를 통해 전체 시스템에 대한 일관된 가시성을 확보하고 데이터를 일관되게 분석할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "풍부한 맥락 제공"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "데이터 자체도 중요하지만, 이를 둘러싼 상황적 정보(맥락)를 함께 이해하는 것이 매우 중요합니다. 문제 발생 시 해당 시점의 시스템 구성, 서버 상태, 그리고 평소와 다른 작업량이 있었는지를 파악하는 것이 문제 해결에 크게 기여할 수 있습니다. 이러한 맥락적 정보를 통해 데이터를 더 풍부하게 만들고, 이를 바탕으로 불필요한 정보를 제거하여 실제 문제를 식별할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "맞춤형 검색 및 분석 도구"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "각 조직의 비즈니스 요구 사항에 맞춘 맞춤형 검색 및 분석 도구는 옵저버빌리티의 가치를 극대화합니다. IT 운영 팀은 핵심 성과 지표(KPI)를 설정하고, 해당 지표를 바탕으로 시스템 성능을 모니터링할 수 있어야 합니다. 또한 자동화된 워크플로우와 외부 데이터를 실시간으로 통합하여 데이터를 분석하고 필요한 조치를 취할 수 있는 도구가 필요합니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "이러한 도구는 데이터 분석과 자동화된 워크플로우를 지원하며 IT 운영 팀이 신속하게 결정을 내리고 조치를 취할 수 있도록 도와줍니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "실시간-옵저버빌리티의-이점",
        children: "실시간 옵저버빌리티의 이점"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "실시간 옵저버빌리티를 도입하면 다음과 같은 이점을 얻을 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "신속한 문제 해결"
            }), ": 문제가 발생했을 때 이를 실시간으로 감지하고 원인을 신속하게 파악하여 즉각적으로 대응할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "서비스 가용성 유지"
            }), ": 시스템의 상태를 실시간으로 파악하여 서비스 중단을 예방하고 비즈니스 연속성을 유지할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "운영 효율성 증대"
            }), ": 시스템 운영의 자동화를 통해 운영 효율성을 높이고, 인력 리소스를 절감할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "장애를 특정하고 원인을 찾는 데 오랜 시간이 걸린다면, 비즈니스 속도를 가속화하기 위해 빠르게 구현하고 운영해야 하는 IT에게는 큰 걸림돌이 될 수 있습니다. 실시간 옵저버빌리티는 이러한 문제를 해결하는 데 중요한 역할을 합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "dx-it-운영-1",
        children: "DX-IT 운영"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "현대의 IT 운영 환경은 디지털 트랜스포메이션(DX)의 요구에 부응하기 위해 빠르게 변화하고 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "dx-it-운영의-필요성",
        children: "DX-IT 운영의 필요성"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "디지털 트랜스포메이션은 더 이상 선택이 아닌 필수입니다. 기업들은 디지털 기술을 활용해 운영의 효율성을 높이고 혁신을 가속화하며 시장에서의 경쟁 우위를 확보하려고 노력하고 있습니다. DX-IT 운영은 이러한 디지털 트랜스포메이션을 지원하는 핵심적인 역할을 합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "비즈니스와 IT의 융합"
            }), ": 비즈니스 속도와 IT 퍼포먼스의 일치가 중요해졌으며 비즈니스 요구 사항에 맞춰 IT 시스템을 빠르게 확장하고 최적화하는 것이 필수적입니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "IT 운영의 민첩성"
            }), ": 빠르게 변화하는 비즈니스 환경에서 IT 시스템이 민첩하게 대응할 수 있도록 지원하는 운영 모델이 요구됩니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "itil4-기반의-it-운영-모델",
        children: "ITIL4 기반의 IT 운영 모델"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["비즈니스와 애플리케이션의 변화 속도에 대응하려면 수동적이고 매뉴얼한 대응에서 벗어나 자동화와 셀프 서비스로의 진화가 필요합니다. DX-IT 운영을 효과적으로 구현하기 위해서는 최신의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "ITIL4"
        }), " 운영 모델이 필수적입니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "ITIL4"
        }), "는 IT 운영의 표준 프레임워크로서, 서비스 관리의 효율성을 극대화하고 비즈니스와 IT의 연계성을 강화합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/dx-it-image-20.png",
        desc: "ITIL4"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "프로세스 중심의 접근"
            }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "ITIL4"
            }), "는 서비스 제공의 모든 단계를 체계적으로 관리하며 문제 해결, 변경 관리, 서비스 수준 관리 등을 통해 운영의 안정성을 확보합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "자동화와 표준화"
            }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "ITIL4"
            }), " 기반의 운영 모델은 반복적인 작업의 자동화와 프로세스의 표준화를 통해 운영 효율성을 극대화할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "모니터링-관점에서의-dx-it-운영-실현",
        children: "모니터링 관점에서의 DX-IT 운영 실현"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "기존 IT 운영과 DX-IT 운영의 차이점"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "기존 IT 운영 방식에서는 장애 발생 시 시니어 엔지니어에 의한 트러블슈팅이 주요 대응 방식이었습니다. 시스템의 리소스에 대한 임계치 설정은 최대 부하를 예상하여 이루어졌으며, 온프레미스와 클라우드를 각각 다른 워크로드로 관리했습니다. 이러한 운영 방식은 암묵적인 지식에 의존하였고, OJT(On-the-Job Training)로 인력을 육성하는 방식이었습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "반면 DX-IT 운영에서는 자동화된 에러 로그 분석과 특정이 가능해져 신속하게 대책을 수립할 수 있습니다. 시스템의 응답 시간에 따라 병목 현상을 자동으로 분석할 수 있으며, 온프레미스와 클라우드 환경을 일관된 워크로드로 관리할 수 있습니다. 또한 운영에서 개발까지 동일한 도구를 사용하여 실시간으로 정보를 공유함으로써 옵저버빌리티를 높이고 운영 레벨의 향상과 스킬의 균일화를 이루어낼 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "통합된 워크로드 관리"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "기존의 사일로식(Siloed) 모니터링 도구 대신 DX-IT 운영에서는 온프레미스와 클라우드 환경을 통합적으로 관리할 수 있는 시스템이 도입됩니다. 이로 인해 다양한 환경과 워크로드를 일관되게 모니터링할 수 있어 운영의 효율성을 높이고 비용 절감 효과를 기대할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "실시간 정보 공유와 운영 레벨의 향상"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "DX-IT 운영에서는 개발과 운영이 동일한 도구를 통해 실시간으로 정보를 공유할 수 있습니다. 이는 장애 발생 시 빠른 대응을 가능하게 하고 팀 간의 협력을 강화합니다. 또한 운영의 옵저버빌리티를 통해 운영 레벨을 향상시키고 전체적인 스킬을 균일하게 유지할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "it-모니터링-직면-과제의-해결",
        children: "IT 모니터링 직면 과제의 해결"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "DX-IT 운영의 성공적인 실현을 위해서는 IT 모니터링의 주요 과제들을 해결해야 합니다. 이 과제들은 주로 시스템의 복잡성 증가와 운영 효율성 저하와 관련이 있으며, 이를 해결하기 위한 전략적 접근이 필요합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "통합 모니터링과 실시간 옵저버빌리티"
            }), ": 시스템 전반을 아우르는 통합 모니터링과 실시간 옵저버빌리티를 도입하여 시스템의 상태를 종합적으로 파악하고 실시간으로 문제를 감지할 수 있어야 합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "비용 절감과 운영 효율화"
            }), ": 중복된 모니터링 도구의 사용을 줄이고, 자동화된 시스템을 통해 운영 비용을 절감해 효율성을 극대화해야 합니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "whatap-monitoring",
        children: "WhaTap Monitoring"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["현대 IT 운영에서 DX-IT 운영은 빠르게 변화하는 비즈니스 환경에 대응하기 위한 필수적인 전략입니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "와탭"
        }), "을 통한 통합 모니터링 및 실시간 옵저버빌리티 구현을 중심으로 DX-IT 운영을 어떻게 실현할 수 있는지 살펴보겠습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/dx-it-image-21.png",
        desc: "WhaTap"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "통합-모니터링-플랫폼",
        children: "통합 모니터링 플랫폼"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "와탭"
        }), "은 SaaS형과 온프레미스형을 모두 지원하는 통합 모니터링 및 옵저버빌리티 플랫폼으로, 다양한 환경에서 운영되는 IT 시스템을 일원화하여 통합 모니터링할 수 있도록 설계되었습니다. 이를 통해 하이브리드 클라우드, 멀티 클라우드, 온프레미스 등 다양한 인프라 환경을 통합 관리할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "다양한 환경의 통합 관리"
            }), ": 클라우드, 온프레미스, 하이브리드 환경을 아우르는 통합 모니터링 기능을 제공하여 모든 IT 자원을 하나의 플랫폼에서 관리할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "다양한 데이터 수집"
            }), ": 메트릭, 로그, 트레이스 데이터를 실시간으로 수집하여 이를 종합적으로 분석함으로써 시스템의 상태를 전반적으로 파악합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "End-to-End 풀 스택 통합 모니터링"
            }), ": IT 서비스를 이용하는 사용자가 처음 체감하는 프론트엔드의 브라우저에서 백엔드의 데이터베이스까지, 메트릭, 트레이스, 로그를 통해 End-to-End 풀 스택으로 통합 모니터링합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "환경-및-리전-통합-관리",
        children: "환경 및 리전 통합 관리"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "와탭"
        }), "은 클라우드 및 온프레미스 환경에 걸쳐 있는 다양한 시스템을 통합 관리합니다. 특히 시스템이 위치한 환경이나 리전을 통합하여 일원화된 관리가 가능하며, 이를 통해 글로벌 비즈니스 환경에서도 효율적인 운영이 가능합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "환경 및 리전 통합"
            }), ": 클라우드와 온프레미스 환경을 아우르는 통합 모니터링을 통해, 다양한 워크로드를 통합적으로 관리할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "일원화된 데이터 수집 및 저장"
            }), ": 각 환경에서 수집된 모니터링 데이터는 서비스가 위치한 환경에서 직접 수집되고 저장되어, 데이터의 일관성과 신뢰성을 높입니다 ."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "실시간-문제-탐지-및-대응",
        children: "실시간 문제 탐지 및 대응"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "와탭"
        }), "은 초단위의 실시간 데이터 수집을 통해 시스템 상태를 모니터링하고, 문제가 발생할 경우 즉시 인지할 수 있는 능력을 제공합니다. 일반적인 모니터링 시스템이 60초에서 300초 간격으로 문제를 감지하는 반면, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "와탭"
        }), "은 5초 간격으로 시스템을 감시하여 실시간으로 문제 상황을 인지하고, 즉시 원인 조사에 착수할 수 있습니다. 또한 수행 중인 트랜잭션에서 발생하는 문제를 즉각적으로 탐지하고 신속히 문제를 해결할 수 있도록 지원합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "초단위 모니터링"
            }), ": 5초 간격으로 시스템을 모니터링하여 실시간으로 문제를 감지하고 이를 기반으로 신속한 대응이 가능합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "장애 상황 인지"
            }), ": 수행 중인 트랜잭션에서 발생하는 문제를 즉각적으로 탐지하여 실시간으로 원인 조사를 시작할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "신속한 문제 해결"
            }), ": 상시 수집된 데이터를 활용해 문제가 발생한 즉시 원인 조사를 시작하며 프로파일링 없이도 문제를 신속하게 해결할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "연계-추적",
        children: "연계 추적"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "와탭"
        }), "은 IT 시스템의 다양한 구성 요소 간의 상호작용을 실시간으로 추적할 수 있는 강력한 연계 추적 기능을 제공합니다. 이를 통해 애플리케이션과 데이터베이스, 브라우저와 애플리케이션 간의 상호작용을 추적하여 문제 발생 시 원인을 신속하게 파악할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Application - Database 연계 추적"
            }), ": 애플리케이션과 데이터베이스 간의 연계된 트랜잭션을 실시간으로 추적하여 문제 발생 시 어느 지점에서 문제가 발생했는지를 빠르게 파악할 수 있습니다. 복잡한 분산 시스템에서도 신속하게 문제를 해결할 수 있는 능력을 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Application - Database",
              src: (__webpack_require__(11595)/* ["default"] */ .A) + "",
              width: "1200",
              height: "532"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Browser - Application 연계 추적"
            }), ": 브라우저에서 발생한 성능 문제를 애플리케이션과 연계하여 추적할 수 있습니다. 이를 통해 사용자가 겪는 문제를 신속하게 파악하고 문제의 원인을 정확히 진단하여 전체적인 성능 문제를 실시간으로 해결할 수 있습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Browser - Application",
              src: (__webpack_require__(61684)/* ["default"] */ .A) + "",
              width: "1200",
              height: "576"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "통합-모니터링의-주요-기능",
        children: "통합 모니터링의 주요 기능"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "와탭"
        }), "은 브라우저, 서버, 네트워크, 애플리케이션, 데이터베이스 등 IT 시스템의 다양한 요소를 하나의 화면에서 통합 관리할 수 있습니다. 이러한 기능은 운영자가 시스템 상태를 한눈에 파악하고 필요한 조치를 신속히 취할 수 있도록 지원합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/dx-it-image-22.png",
        desc: "Dashboard"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "통합 모니터링 대시보드"
            }), ": 모든 시스템 데이터를 한 화면에서 통합적으로 관리하여 운영의 효율성을 극대화합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "자동화된 경고 및 알림"
            }), ": 문제 발생 시 실시간으로 경고를 제공하고 자동화된 알림 시스템을 통해 빠르게 문제를 해결할 수 있도록 돕습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "dx-it-운영의-실현",
        children: "DX-IT 운영의 실현"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "와탭"
        }), "은 DX-IT 운영을 실현하기 위한 핵심 솔루션으로 자리 잡고 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "와탭"
        }), "은 통합 모니터링과 실시간 옵저버빌리티를 통해 IT 시스템의 상태를 실시간으로 파악하고 빠르게 문제를 해결할 수 있는 기능을 제공합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "실시간 모니터링과 문제 해결을 통해 시스템 가용성을 높이고, 비즈니스 연속성을 유지할 수 있습니다. 자동화된 모니터링과 문제 해결 기능을 통해 운영 효율성을 극대화하고 비용을 절감할 수 있습니다."
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

/***/ 27827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-01-b22d2d8006b4b1911a77c107b05c7d98.png");

/***/ }),

/***/ 53336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-02-d0bbef5d8aac758fa03f5a1b0b12ce51.png");

/***/ }),

/***/ 26049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-03-ae06d6998dcc5fe81178385e42dbf54a.png");

/***/ }),

/***/ 42958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-04-a73aa1cd66a9db6200ec219fd185558c.png");

/***/ }),

/***/ 61733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-07-450706f15240a54fd8a3545d71d688e2.png");

/***/ }),

/***/ 60866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-08-d90264e1be6a9d0937aa27179c6184f8.png");

/***/ }),

/***/ 24523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-09-fc736a6e63823db479a65567704a79fc.png");

/***/ }),

/***/ 42517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-10-aa21566204a0359cec808b4ae167db84.png");

/***/ }),

/***/ 18312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-15-0518ba3ade0820013088e1196134755d.png");

/***/ }),

/***/ 80291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-16-34696ffb7dd09a92862d5443f94d5e81.png");

/***/ }),

/***/ 90458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-17-d16ed236ffc1924605984bbc9579b0d0.png");

/***/ }),

/***/ 11595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-23-c97ea6b32c894cddec854c0630881b78.png");

/***/ }),

/***/ 61684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-24-917e52bd354f9f11b387efd954914bb3.png");

/***/ }),

/***/ 78365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dx-it-image-25-6626c059edbefbfc76feecd30253c8bc.png");

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