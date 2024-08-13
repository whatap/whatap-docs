"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[35024],{

/***/ 28276:
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
	id: 'introduction',
	title: 'Kubernetes 모니터링',
	description: '멀티 클라우드와 하이브리드 클라우드를 지원하여 쿠버네티스 기반의 시스템을 통합 모니터링합니다.',
	keywords: [
		'쿠버네티스 모니터링',
		'Kubernetes'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/introduction",
  "title": "Kubernetes 모니터링",
  "description": "멀티 클라우드와 하이브리드 클라우드를 지원하여 쿠버네티스 기반의 시스템을 통합 모니터링합니다.",
  "source": "@site/docs/kubernetes/introduction.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/introduction",
  "permalink": "/whatap-docs/kubernetes/introduction",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/introduction.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "introduction",
    "title": "Kubernetes 모니터링",
    "description": "멀티 클라우드와 하이브리드 클라우드를 지원하여 쿠버네티스 기반의 시스템을 통합 모니터링합니다.",
    "keywords": [
      "쿠버네티스 모니터링",
      "Kubernetes"
    ]
  },
  "sidebar": "kubeSidebar",
  "next": {
    "title": "프로젝트 개념 이해하기",
    "permalink": "/whatap-docs/kubernetes/before-starting"
  }
};
const assets = {

};



const toc = [{
  "value": "쿠버네티스 모니터링이란?",
  "id": "쿠버네티스-모니터링이란",
  "level": 2
}, {
  "value": "쿠버네티스 모니터링 주요 특장점",
  "id": "쿠버네티스-모니터링-주요-특장점",
  "level": 2
}, {
  "value": "모니터링 대상",
  "id": "모니터링-대상",
  "level": 2
}, {
  "value": "모니터링 절차",
  "id": "모니터링-절차",
  "level": 2
}, {
  "value": "쿠버네티스 클러스터 모니터링 절차",
  "id": "쿠버네티스-클러스터-모니터링-절차",
  "level": 3
}, {
  "value": "쿠버네티스의 애플리케이션 모니터링 절차",
  "id": "쿠버네티스의-애플리케이션-모니터링-절차",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Videos} = _components;
  if (!Videos) _missingMdxReference("Videos", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "컨테이너 가상화 기술은 도커가 등장하면서 크게 대중화되었습니다. 그리고 도커 사용이 증가하면서 컨테이너를 잘 사용하고 관리하기 위한 방안이 필요하게 되었으며 이에 다양한 컨테이너 오케스트레이션 도구들이 등장했습니다. 많은 컨테이너 오케스트레이션 도구 중 가장 널리 사용하는 것은 쿠버네티스입니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "쿠버네티스는 컴퓨팅 리소스를 효율적으로 사용하기 위한 스케줄링 기능, 애플리케이션 업데이트를 위한 배포 기능, 그 외 컨테이너에 필요한 스토리지, 네트워크 등 다양한 기능을 제공합니다. 물론 그 자체로 거대한 플랫폼인 쿠버네티스도 모니터링은 필수적입니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "하지만 쿠버네티스의 다양한 리소스들은 각기 다른 데이터 수집 방안을 필요로 합니다. 또 쿠버네티스 사용자마다 관심있는 지표가 다릅니다. 게다가 단순히 데이터를 수집하고 나열하는 것만으로는 모니터링 가시성을 확보할 수 없습니다. 다양한 모니터링 니즈를 충족하면서 문제 상황을 직관적으로 감지할 수 있는 UI가 필요합니다. 많은 사용자들이 와탭의 쿠버네티스 모니터링 솔루션을 찾는 이유이기도 합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Videos, {
      url: "https://img.whatap.io/23/11/06/022318en_kubernetes_.mp4"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "쿠버네티스-모니터링이란",
        children: "쿠버네티스 모니터링이란?"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "컨테이너 환경에서의 애플리케이션은 컨테이너화(Containerization)됩니다. 하지만 쿠버네티스는 컨테이너화된 애플리케이션을 Pod라는 단위로 배포합니다. 쿠버네티스의 최소 배포 단위는 컨테이너가 아닌 Pod이기 때문입니다. 컨테이너는 Pod에 담겨있으며, 1개 Pod에는 서로 다른 2개 이상의 컨테이너가 들어갈 수 있습니다. 따라서 쿠버네티스 모니터링을 위해서는 컨테이너 관점, Pod 관점의 모니터링이 모두 필요합니다. 와탭은 컨테이너와 Pod의 각각의 다양한 모니터링 데이터를 수집하여 별도의 카테고리에 저장합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "카테고리는 사용자 프로젝트로부터 수집하는 메트릭스(Metrics) 데이터를 구분하는 이름입니다. 각 카테고리는 서로 다른 태그와 필드로 구성되어 있습니다. 와탭 쿠버네티스의 컨테이너 맵은 크게 컨테이너 뷰와 Pod 뷰를 제공하여 사용자가 원하는 분석 대상을 선택할 수 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "쿠버네티스-모니터링-주요-특장점",
        children: "쿠버네티스 모니터링 주요 특장점"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "쿠버네티스 기반의 통합 모니터링"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "멀티 클라우드와 하이브리드 클라우드를 지원하여 쿠버네티스 기반의 시스템을 통합 모니터링합니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "MSA에서 서비스별 호출관계 분석"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Pod 단위의 분산 애플리케이션 환경에서 트랜잭션의 API 호출 관계를 추적합니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "상관관계를 한번에 파악"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Host, 컨테이너, 애플리케이션을 함께 모니터링하여 'Root Cause Analysis'를 해결할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "컨테이너화된 애플리케이션의 상세 분석"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "컨테이너에 숨어있는 Java, Node.js, Python 기반의 애플리케이션 분석에 필요한 히트맵, 트레이스 기능을 제공합니다. 특히, 모던 애플리케이션 환경에 유용한 멀티 서비스 대시보드, MSA 분석, 멀티 트랜잭션 추적까지 와탭 하나로 끝내세요."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "컨테이너 맵을 통한 통합적이고 유연한 가시성 확보"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "쿠버네티스 플랫폼 리소스 정보와 쿠버네티스에서 실행 중인 애플리케이션의 메트릭스, 이벤트 정보, 로그를 통합으로 제공합니다. 단일 뷰를 보며 인프라 담당자와 애플리케이션 담당자 사이의 원활한 의사 소통은 물론, 다양한 관점의 가시성을 확보할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "리소스 상세 모니터링 및 사용량 추이 확인"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "컨테이너와 Node의 리소스 사용량 및 추이 정보가 담긴 대시보드를 제공해 컨테이너들이 여러 Node 위에서 원활히 실행되도록 관리할 수 있습니다. 사용자는 와탭 프로젝트 내에 속한 컨테이너 또는 Node의 전체 목록에서 시작해 개별 대상에 대한 세부 상태까지 확인해 컨테이너와 Node를 더욱 면밀히 관찰할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "마스터에 접속하지 않아도 메타 정보 조회 가능"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "주요 리소스의 기본 메타 정보를 컨테이너 맵 상에서 바로 확인할 수 있으며, 별도 마스터 메타 대시보드를 통해 다양한 구성 요소의 전체 메타 정보를 한 눈에 확인할 수 있습니다. 명령어 기반으로 일일이 메타 정보를 확인할 필요가 없어 시간을 절약할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "로그 관리 업무에서 벗어나 로그 분석에 집중"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "컨테이너의 각종 로그 파일과 표준 출력을 실시간으로 저장해 수명 주기가 일정하지 않은 컨테이너 환경에서 로그를 확인할 수 있습니다. 컨테이너에 일일이 접속하지 않아도 애플리케이션에서 발생한 의미 있는 정보를 비롯해 주요 콘텐츠에 대한 분류 및 인덱싱 작업을 수행하여 로그 분석에만 집중할 수 있습니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "모니터링-대상",
        children: "모니터링 대상"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "쿠버네티스 모니터링 대상은 쿠버네티스 클러스터와 쿠버네티스 상에서 실행 중인 애플리케이션입니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "쿠버네티스 클러스터 모니터링"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "개별 컨테이너의 CPU, Memory, Disk(Volume), Network"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "Namespace, Deployment, ReplicaSet, Pod 등 서비스를 이루는 쿠버네티스 구성 요소"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "개별 Node(호스트)의 CPU, Memory, Disk, Network"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "쿠버네티스에서 실행 중인 애플리케이션 모니터링: Java, Node.js, Python 등"
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "이어서 설명할 모니터링 절차도 클러스터 모니터링을 위한 절차와 애플리케이션 모니터링을 위한 절차로 구분되어 진행합니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "모니터링-절차",
        children: "모니터링 절차"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "쿠버네티스-클러스터-모니터링-절차",
        children: "쿠버네티스 클러스터 모니터링 절차"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "와탭 모니터링 서비스"
            }), "에서 클러스터 프로젝트를 생성하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["와탭 모니터링 서비스 상에서 신규 쿠버네티스(Kubernetes) 프로젝트를 생성하면 해당 프로젝트가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "클러스터 프로젝트"
            }), "입니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "install#create-project",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["쿠버네티스 환경 내에 마스터 에이전트(whatap-master-agent) 및 노드 에이전트(whatap-node-agent)를 설치하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "install-master-node-agent",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "마스터 에이전트, 노드 에이전트는 사용자의 클러스터 내에서 Pod 형태로 실행합니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["(선택사항) 클러스터 프로젝트 내 다수의 Namespace 존재 시 사용자는 와탭 모니터링 서비스에서 각 네임스페이스(Namespace) 프로젝트로 분리 가능합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "create-name-space-project",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "tip",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["쿠버네티스 Namespace는 다수의 팀과 사용자가 존재하는 환경에서 단일 클러스터 내 리소스 그룹 격리를 위한 매커니즘입니다. 사용자 쿠버네티스 클러스터 내의 Namespace 목록은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "kubectl get namespace"
          }), " 명령어를 통해 확인할 수 있습니다."]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "쿠버네티스의-애플리케이션-모니터링-절차",
        children: "쿠버네티스의 애플리케이션 모니터링 절차"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "컨테이너 내에서 실행 중인 애플리케이션 모니터링을 위한 마이크로 애플리케이션 에이전트 설치합니다. 지원하는 마이크로 애플리케이션은 Java, Node.js, Python 등입니다."
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