"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[32551],{

/***/ 9221:
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





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "기본 정보: 노드의 클러스터 버전, 기동 시간, 현재 상태, 스케줄링 가능 여부, 내부 IP 주소, 그리고 리전 및 존 정보를 제공합니다."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "운영체제 및 하드웨어 정보: 노드가 실행되는 운영체제, OS 이미지, CPU 아키텍처, 코어 수, 총 메모리 크기를 제공합니다. 노드의 메모리와 CPU에 대한 할당 가능 및 현재 사용량을 확인할 수 있습니다."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "리소스 사용 현황: 노드에서 실행 중인 모든 컨테이너의 요청(Request)과 할당 가능 자원(CPU, 메모리)의 차이를 통해 잔여 자원을 파악합니다. 실제 CPU 사용률과 메모리 사용률을 포함하여 리소스 사용 상태를 요약합니다."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "디스크 사용 현황: 노드에 연결된 디스크 정보, 파일 시스템 유형, 디바이스 ID, 마운트 지점, 총 용량 및 사용 중인 용량, 그리고 사용률을 제공합니다."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Pod 상태 및 리소스 여유: 노드의 할당 가능한 전체 Pod 수와 현재 실행 중인 Pod 수를 비교하여, 추가 실행 가능한 Pod 수를 확인할 수 있습니다. 또한 MemoryPressure, DiskPressure, PidPressure 등의 상태를 통해 노드의 안정성을 점검합니다."
      }), "\n"]
    }), "\n"]
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



/***/ }),

/***/ 16165:
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
  "value": "프로세스 상세",
  "id": "k8s-node-process-details",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
    h3: "h3",
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
  }, {Cmdname, ImgLang, InDoc} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08441",
          className: "uitext",
          type: "node"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08441",
          className: "uitext",
          type: "node"
        }), " 탭에서 선택한 노드 구성 및 전반적인 리소스 사용량 정보를 요약해서 제공합니다. 해당 노드의 하드웨어 및 소프트웨어 구성 요소를 종합적으로 확인할 수 있습니다. 사용자는 노드의 리소스 사용 현황 및 각 구성 요소의 상태를 파악하고 성능 및 운영 안정성을 모니터링할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-timeline-config.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "노드 시스템 사양"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Architecture"
                  })
                }), ": 노드가 사용하고 있는 하드웨어 아키텍처"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Image"
                  })
                }), ": 노드가 실행 중인 운영 체제 이미지 정보"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "CapacityMemory"
                  })
                }), ": 노드의 총 메모리 용량"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "CapacityCpu"
                  })
                }), ": 노드의 총 CPU 용량"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "소프트웨어 구성"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Container Runtime"
                  })
                }), ": 노드에서 사용되는 컨테이너 런타임의 버전 정보"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "kubelet"
                  })
                }), ": 노드에서 실행 중인 쿠버네티스 kubelet의 버전 정보"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "kube-proxy"
                  })
                }), ": 네트워크 관리 역할을 하는 kube-proxy의 버전 정보"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "리소스 사용 현황"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "CPU"
                  })
                }), ": 노드의 CPU 사용량"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "메모리"
                  })
                }), ": 노드의 메모리 사용량"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "디스크"
                  })
                }), ": 노드에서 사용 중인 디스크 용량과 사용 비율"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "네트워크"
                  })
                }), ": 네트워크 전송량"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["CPU, 메모리, 디스크, 네트워크 클릭 시 조회 기간 동안 사용량 추이를 확인할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "metrics",
                className: "uitext"
              }), " 탭으로 이동합니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "AVG"
                })
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "MAX"
                })
              }), " 버튼을 클릭하여 조회 기간동안 평균 사용량과 최대 사용량을 확인할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-node-list",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "노드 구성"
              })
            }), " 탭은 클러스터 프로젝트(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "my",
              children: "CP"
            }), ")일 경우 조회할 수 있습니다."]
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        pages: "resource-node-list",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "-1",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "resource",
            className: "uitext"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "resource",
            className: "uitext"
          }), " 탭에서 선택한 노드에 스케줄링된 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Pod"
            })
          }), " 및 해당 Pod에서 실행 중인 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "컨테이너"
            })
          }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "애플리케이션"
            })
          }), " 목록을 확인할 수 있습니다. 해당 정보는 선택한 시간 구간의 마지막 시점을 기준으로 1분간의 리소스 데이터를 반영하여 표시합니다. 이를 통해 해당 시점의 노드 상태와 각 Pod, 컨테이너, 애플리케이션의 동작 상태를 보다 명확하게 파악할 수 있습니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "k8s-node-timeline-resource.png"
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "-2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "process",
          className: "uitext"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "process",
          className: "uitext"
        }), " 탭에서 선택한 노드 내부에 있는 주요 쿠버네티스 관리 프로세스 정보를 확인할 수 있습니다. 프로세스 문제로 발생하는 클러스터 장애를 예방하고 다운타임을 최소화할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-process.png"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "k8s-node-process-details",
        children: "프로세스 상세"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["프로세스 목록 왼쪽 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08422",
              className: "uitext"
            }), " 컬럼에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "상세 보기 아이콘",
              src: (__webpack_require__(65557)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " 아이콘 선택 시 해당 프로세스에 대한 상세 정보를 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "AVG"
              })
            }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "MAX"
              })
            }), " 버튼을 클릭하여 3일 이상의 장기 데이터 조회 시 불러올 통계 데이터의 합산 방식을 선택할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "프로세스 주요 정보 값 클릭 시 해당 값이 복사됩니다."
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "process",
            className: "uitext"
          }), " 탭은 쿠버네티스 에이전트 버전 1.7.14 이상부터 지원합니다."]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "-3",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "metrics",
          className: "uitext"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "metrics",
          className: "uitext"
        }), " 탭에서 선택한 노드의 리소스 사용량 추이를 확인할 수 있습니다. 조회 기간 동안의 평균(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "AVG"
          })
        }), "), 최대값(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "MAX"
          })
        }), ")을 기준으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "CPU"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "메모리"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "네트워크"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "디스크"
          })
        }), " 사용량의 변화를 조회할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-timeline-metrics.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "AVG"
              })
            }), ": 조회 기간 동안 평균 사용량"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "MAX"
              })
            }), ": 조회 기간 동안 최대 사용량"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Total"
              })
            }), ": 여러 네트워크 인터페이스의 전체 트래픽 사용량 합산"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "In/Out"
              })
            }), ": 특정 네트워크 인터페이스의 Inbound(수신) 및 Outbound(송신) 트래픽 사용량"]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "K8s CPU Request / Allocatable CPU (%)"
            })
          }), " 위젯은 쿠버네티스 에이전트 버전 1.7.10 이상부터 지원합니다."]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        pages: "resource-node-list",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "-4",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "trace",
            className: "uitext"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "trace",
            className: "uitext"
          }), " 탭에서 선택한 노드에서 실행 중인 애플리케이션 트레이스 정보를 확인할 수 있습니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "k8s-resource-node-list-trace.png"
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "-5",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "event",
          className: "uitext"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "event",
          className: "uitext"
        }), " 탭에서 선택한 노드에서 발생한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "K8s Node 이벤트"
          })
        }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "WhaTap Node 이벤트"
          })
        }), "를 확인할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "K8s Node 이벤트"
          })
        }), "는 노드의 상태 변화를 포함한 클러스터 내의 중요한 작업 기록을 포함하며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "WhaTap Node 이벤트"
          })
        }), "는 사용자가 설정한 경고 알림 기준에 따른 이벤트 발생 정보를 제공합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-timeline-event.png"
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

/***/ 81337:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28453);
/* harmony import */ var _common_items_import_k8s_node_summary_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9221);
/* harmony import */ var _common_items_k8s_node_details_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16165);


const frontMatter = {
	id: 'node-map',
	title: '노드 맵',
	description: '노드 맵 메뉴를 안내합니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'대시보드',
		'노드 맵'
	],
	toc_max_heading_level: 3,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/node-map",
  "title": "노드 맵",
  "description": "노드 맵 메뉴를 안내합니다.",
  "source": "@site/docs/kubernetes/node-map.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/node-map",
  "permalink": "/whatap-docs/kubernetes/node-map",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/node-map.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "node-map",
    "title": "노드 맵",
    "description": "노드 맵 메뉴를 안내합니다.",
    "keywords": [
      "쿠버네티스",
      "쿠버네티스 모니터링",
      "대시보드",
      "노드 맵"
    ],
    "toc_max_heading_level": 3,
    "isTranslationMissing": false
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "Call Information",
    "permalink": "/whatap-docs/kubernetes/container-map-call-information"
  },
  "next": {
    "title": "퍼포먼스 요약",
    "permalink": "/whatap-docs/kubernetes/performance-summary"
  }
};
const assets = {

};

/*사용자가 특정 기준에 따라 노드를 선별하여 모니터링할 수 있도록 커스터마이징된 모니터링 환경을 제공합니다.*/
/*해당 범위에 속할 경우 지정된 색상이 적용됩니다.*/
/*

* <span class='normal'>Normal</span>: <span class='normal'>파란색</span>

* <span class='slow'>Warning</span>: <span class='slow'>주황색</span>

* <span class='vslow'>Error</span>: <span class='vslow'>빨간색</span>

*/
/** **우선 순위** 예시 이미지 사용해서 노드 A, B 비교*/
/*

또한 *String* 타입 지표의 경우 특정 문자열이 포함될 때 <span class='vslow'>Error</span>로 지정됩니다. 예를 들어 ***Status (string)*** 지표에 `NotReady`라는 텍스트가 포함될 경우 해당 노드는 <span class='vslow'>Error</span>로 지정되어 <span class='vslow'>빨간색</span>으로 표시됩니다.

*/
/*

:::note[]

**우선 순위**

예시 이미지 사용해서 노드 A, B 비교

:::

*/
/*사용자는 노드 블록 내부에 텍스트 라벨을 설정하여 지정한 주요 정보를 한눈에 볼 수 있습니다. <Cmdname sid="label" className="uitext" />을 ***CpuUsedPercent*** 지표 기준으로 설정한 경우 위의 예시 이미지와 같이 노드 블록 내부에서 해당 정보를 확인할 수 있습니다.*/
/*#### 노드 구성

<Cmdname sid="TTL08441" className="uitext" type="node"/> 탭에서 노드 내 CPU, 메모리, 디스크, 네트워크 구성 및 사용량과 Container Runtime, kubelet, kube-proxy 등 쿠버네티스 시스템 프로세스 정보를 확인할 수 있습니다.

#### 메트릭스

<Cmdname sid="metrics" className="uitext" /> 탭에서 선택한 노드의 주요 메트릭 정보를 조회하고 리소스 사용 패턴을 확인할 수 있습니다. 이를 통해 리소스 관련 성능 최적화 및 문제점을 빠르게 식별할 수 있습니다.

:::note[]

***K8s CPU Request / Allocatable CPU (%)*** 위젯은 마스터 에이전트 버전 1.7.9 이상부터 지원합니다.

:::

#### 이벤트

<Cmdname sid="event" className="uitext" /> 탭에서 ***K8s Node 이벤트***와 사용자가 설정한 ***WhaTap Node 이벤트***를 확인하여 클러스터 내 발생한 주요 이벤트 및 경고를 모니터링할 수 있습니다.*/
/*

노드 맵은 크게 **사용자 설정 영역**과 **차트 영역**으로 구성되어 있습니다.

![그룹화, 임계치 및 라벨 설정을 적용한 노드 맵](https://prod-files-secure.s3.us-west-2.amazonaws.com/fced27a0-70f8-4c70-a95b-1d18cb4f56e1/164dae9a-0833-4592-8966-0082e4053d2a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-19_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_8.29.55.png)

### 사용자 설정

#### 그룹화

사용자는 노드를 다양한 조건에 따라 그룹화하여 표시할 수 있으며, 각 그룹에 속한 노드의 관계를 한눈에 파악할 수 있습니다. 그룹화는 최대 2단계까지 지원됩니다.

#### 임계치 설정

사용자는 임계치 설정을 통해 노드 상태를 색상으로 표현할 수 있습니다. 각 지표별로 정상(Normal), 경고(Warning), 오류(Error) 구간을 설정하여, 해당 범위에 속할 때 지정된 색상이 적용됩니다. 여러 지표 중 하나라도 Error 구간에 속하면 해당 노드는 우선적으로 빨간색으로 표시됩니다.

<aside>
📌 **우선 순위 설명**
노드 A (Pods: 11, CPU 사용률: 10%)와 노드 B (Pods: 6, CPU 사용률: 91%) 모두 CPU 사용률로 인해 빨간색으로 표시됩니다.
</aside>

텍스트 기반 지표의 경우, 특정 문자열(예: "NotReady")이 포함될 때 Error로 표시됩니다.

#### 라벨 설정

사용자는 노드 블록 내부에 텍스트 라벨을 표시하여 주요 정보를 한눈에 볼 수 있습니다.

#### 필터 설정

필터를 사용하여 특정 조건을 만족하는 노드만 선택하여 집중적으로 모니터링할 수 있습니다.

#### 프리셋 설정

설정한 옵션을 프리셋으로 저장하고, 필요시 불러올 수 있습니다. 이는 프로젝트 단위로 저장되어, 팀 내에서 동일한 설정으로 클러스터를 모니터링할 수 있습니다.

#### 추가 설정

노드 맵 우측 상단의 ⚙️ 아이콘을 통해 세부 설정을 조정할 수 있습니다.

- **레이아웃**: 그룹화된 위젯의 열 고정
- **정렬 순서**: 노드 수 또는 이름 기준 정렬
- **1분 내 사라진 노드 표시**: 최근 1분 이내에 사라진 노드 표시
- **1분 내 생성된 노드 표시**: 최근 1분 이내에 생성된 노드 표시
- **경고 팝오버**: 특정 노드가 Warning 또는 Error 상태일 때 팝업 알림 표시
- **위젯 하단 메트릭스**: 평균, 합계, 최대값, 최소값 표시 여부 설정

### 노드 맵 차트

노드 맵 차트는 세 가지 영역으로 구성됩니다:

1. **위젯 상단 영역**: 노드의 총 개수와 선택한 메트릭스별 상태 표시
2. **중앙 시각화 영역**: 노드 상태를 직관적으로 확인할 수 있는 시각적 대시보드
3. **위젯 하단 영역**: 선택된 메트릭스의 통계값(평균, 합계 등)을 확인 가능

### 요약보기 및 상세 분석

#### 대상 정보

선택된 노드의 주요 속성 정보를 요약하여 제공하며, CPU, 메모리, 디스크, 네트워크 자원 사용 현황을 포함한 상세 정보를 확인할 수 있습니다.

#### 메트릭스

선택한 노드의 메트릭스를 확인하고 리소스 사용 패턴을 분석할 수 있습니다. 이를 통해 성능 최적화 및 문제점을 빠르게 식별할 수 있습니다.

#### 이벤트

*Kubernetes*와 *WhaTap* 이벤트를 확인하여 클러스터 내 발생한 주요 이벤트 및 경고를 모니터링할 수 있습니다.

*/




const toc = [{
  "value": "기본 화면 안내",
  "id": "기본-화면-안내",
  "level": 2
}, {
  "value": "사용자 설정",
  "id": "사용자-설정",
  "level": 3
}, {
  "value": "그룹화",
  "id": "그룹화",
  "level": 4
}, {
  "value": "임계치 설정",
  "id": "임계치-설정",
  "level": 4
}, {
  "value": "문자열 타입 지표",
  "id": "문자열-타입-지표",
  "level": 5
}, {
  "value": "노드 상태 표시 우선 순위",
  "id": "노드-상태-표시-우선-순위",
  "level": 5
}, {
  "value": "라벨",
  "id": "라벨",
  "level": 4
}, {
  "value": "필터",
  "id": "필터",
  "level": 4
}, {
  "value": "프리셋",
  "id": "프리셋",
  "level": 4
}, {
  "value": "추가 설정",
  "id": "추가-설정",
  "level": 4
}, {
  "value": "노드 맵 차트",
  "id": "노드-맵-차트",
  "level": 3
}, {
  "value": "요약 보기 및 상세 분석",
  "id": "요약-보기-및-상세-분석",
  "level": 2
}, {
  "value": "Node 요약 분석",
  "id": "node-summary-analysis",
  "level": 4
}, ..._common_items_import_k8s_node_summary_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, ..._common_items_k8s_node_details_mdx__WEBPACK_IMPORTED_MODULE_2__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, Column, Columns, ImgLang, UI} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!UI) _missingMdxReference("UI", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_dashboard",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeMap",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "요구 사항"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["쿠버네티스 클러스터 프로젝트(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "my",
              children: "CP"
            }), ") ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "읽기 권한"
            }), "이 필요합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "와탭 쿠버네티스 에이전트 1.4.1 버전 이상이 필요합니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeMap",
        className: "uitext"
      }), " 메뉴는 클러스터 관점에서 노드의 상태를 모니터링하는 기능을 제공합니다. 노드의 상태, 리소스 사용량, 에이전트 상태 정보를 시각화하여 사용자가 직관적으로 이해할 수 있도록 돕습니다. 또한, 과거 시점의 노드 상태를 조회할 수 있어, 이전의 상태를 쉽게 확인할 수 있는 기능을 지원합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "k8s-node-map.png"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "기본-화면-안내",
        children: "기본 화면 안내"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_nodeMap",
          className: "uitext"
        }), " 메뉴는 크게 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "사용자 설정"
        }), " 영역과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "노드 맵 차트"
        }), " 영역으로 구성되어 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "사용자-설정",
        children: "사용자 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_nodeMap",
          className: "uitext"
        }), " 상단의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "사용자 설정"
        }), " 영역에서는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "groupby",
          className: "uitext"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08456",
          className: "uitext"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "label",
          className: "uitext"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "filter",
          className: "uitext"
        }), ", 프리셋 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "설정 아이콘",
          src: (__webpack_require__(12289)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " 추가 설정을 구성할 수 있습니다. 다음 예시 이미지는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "groupby",
          className: "uitext"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08456",
          className: "uitext"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "label",
          className: "uitext"
        }), "이 적용되어있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-map-custom.png",
        desc: "노드 맵 사용자 설정"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "그룹화",
        children: "그룹화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["사용자는 다양한 조건에 따라 노드를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "groupby",
          className: "uitext"
        }), "하여 표시할 수 있습니다. 이를 통해 각 그룹 내 노드의 관계를 쉽게 파악할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "groupby",
          className: "uitext"
        }), " 기능은 최대 2단계까지 지원됩니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_nodeMap",
          className: "uitext"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "groupby",
          className: "uitext"
        }), "를 통해 사용자는 특정 기준으로 노드를 선별하여 맞춤형 모니터링 환경을 구성할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "임계치-설정",
        children: "임계치 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["사용자는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08456",
          className: "uitext"
        }), "을 통해 노드 상태를 색상으로 표현할 수 있습니다. 지표는 하나 이상 설정 가능하며 각 지표별로 경고(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "slow",
          children: "Warning"
        }), ")와 오류(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "vslow",
          children: "Error"
        }), ") 구간을 지정할 수 있습니다. 정상(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "normal",
          children: "Normal"
        }), ") 구간은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "normal",
          children: "파란색"
        }), "으로 표시됩니다. 설정한 범위에 따라 해당 상태에 맞는 색상이 적용됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08456",
              className: "uitext"
            }), " 옵션을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["원하는 지표를 선택 후 각 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              class: "slow",
              children: "Warning"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              class: "vslow",
              children: "Error"
            }), " 구간을 설정하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["지표 추가를 원하는 경우 하단의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
              children: "+"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN08454",
              className: "uitext"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["원하는 지표별 임계치 설정을 마쳤으면 하단의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 클릭하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["이상 상태 구간인 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "slow",
            children: "Warning"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "vslow",
            children: "Error"
          }), "는 기본적으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "slow",
            children: "주황색"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "vslow",
            children: "빨간색"
          }), "으로 설정되어 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL08456",
            className: "uitext"
          }), "에서 각 상태에 대한 색상을 사용자가 지정할 수 있습니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "노드 맵 상태 구간 색 설정",
            src: (__webpack_require__(47951)/* ["default"] */ .A) + "",
            width: "554",
            height: "381"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h5",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
        id: "문자열-타입-지표",
        children: "문자열 타입 지표"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["문자열 타입(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "String"
        }), ")의 지표일 경우 특정 문자열이 포함될 때 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "vslow",
          children: "Error"
        }), "로 지정됩니다. 예를 들어 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Status (string)"
          })
        }), " 지표에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NotReady"
        }), "라는 텍스트가 포함될 경우 해당 노드는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "vslow",
          children: "Error"
        }), "로 지정되어 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "vslow",
          children: "빨간색"
        }), "으로 표시됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "지표 명"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "값"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: "Error 상태"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Status"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Ready *"
              }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "NotReady *"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "NotReady *"
              })
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Ready"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "true"
              }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "false"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "false"
              })
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "PIDPressure"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "true"
              }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "false"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "true"
              })
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "DiskPressure"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "true"
              }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "false"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "true"
              })
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "MemoryPressure"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "true"
              }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "false"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "true"
              })
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: "Unschedulable"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "true"
              }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "false"
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "true"
              })
            })]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h5",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h5, {
        id: "노드-상태-표시-우선-순위",
        children: "노드 상태 표시 우선 순위"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["상태 표시 우선 순위는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "vslow",
          children: "Error"
        }), " 구간이 가장 높습니다. 여러 지표 중 하나의 항목이라도 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "vslow",
          children: "Error"
        }), " 구간에 속할 경우 해당 노드는 우선적으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "vslow",
          children: "빨간색"
        }), "으로 표시됩니다. 다음 예시의 경우 노드 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 a",
          src: (__webpack_require__(89332)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), "와 노드 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 b",
          src: (__webpack_require__(77191)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 모두 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "vslow",
          children: "Error"
        }), "로 표시됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "노드 상태 표시 우선 순위 sc",
          src: (__webpack_require__(25502)/* ["default"] */ .A) + "",
          width: "795",
          height: "452"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "라벨",
        children: "라벨"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Columns, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Column, {
          className: "text--left width--20",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "라벨 sc",
              src: (__webpack_require__(36764)/* ["default"] */ .A) + "",
              width: "300",
              height: "300"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Column, {
          className: "text--left",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["사용자는 노드 블록 내부에 텍스트 라벨을 설정하여 지정한 주요 정보를 한눈에 볼 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "label",
              className: "uitext"
            }), "을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "CpuUsedPercent"
              })
            }), " 지표 기준으로 설정한 경우 왼쪽 예시 이미지와 같이 노드 블록 내부에서 해당 정보를 확인할 수 있습니다."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "필터",
        children: "필터"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "사용자는 필터를 통해 특정 조건을 만족하는 노드를 선택하여 집중적으로 모니터링할 수 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "프리셋",
        children: "프리셋"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["사용자는 설정한 옵션을 프리셋으로 저장하고 필요 시 불러올 수 있습니다. 프리셋은 프로젝트 단위로 저장됩니다. 이를 통해 프로젝트 멤버들이 동일한 설정으로 클러스터를 모니터링할 수 있습니다. 기본 프리셋(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Default"
          })
        }), ")을 제공하며 기본 프리셋의 경우 삭제할 수 없습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "기본 프리셋"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_nodeMap",
            className: "uitext"
          }), "의 기본 프리셋은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "CpuUsedPercent (pct)"
            })
          }), " 지표의 임계치가 다음과 같이 설정되어있습니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "normal",
                children: "Normal"
              }), ": 값이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "80"
              }), " 이하"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "slow",
                children: "Warning"
              }), ": 값이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "80"
              }), " 초과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "90"
              }), " 이하"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "vslow",
                children: "Error"
              }), ": 값이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "90"
              }), " 초과"]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "추가-설정",
        children: "추가 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_nodeMap",
          className: "uitext"
        }), " 오른쪽 상단의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "설정 아이콘",
          src: (__webpack_require__(12289)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " 아이콘을 통해 다음과 같은 추가적인 세부 설정을 조정할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-map-addtional-settings.png",
        desc: "노드 맵 추가 설정 sc"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "layout",
              className: "uitext"
            }), ": 그룹화된 위젯의 컬럼을 고정합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07772",
              className: "uitext"
            }), ": 그룹화된 위젯을 노드 수 또는 이름 기준으로 정렬합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "ITM06977",
              className: "uitext",
              type: "node"
            }), ": 최근 1분 이내에 사라진 노드를 표시합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "ITM07792",
              className: "uitext",
              type: "node"
            }), ": 최근 1분 이내에 생성된 노드를 표시합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN08458",
              className: "uitext"
            }), ": 특정 노드가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08456",
              className: "uitext"
            }), "에 따라 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              class: "slow",
              children: "Warning"
            }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              class: "vslow",
              children: "Error"
            }), " 상태일 때 경고 팝오버를 표시합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN08459",
              className: "uitext"
            }), ": 위젯 하단에 평균, 합계, 최대값, 최소값 표시 여부를 설정합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN08460",
              className: "uitext"
            }), ": 위젯 하단에 표시할 지표를 선택합니다. 특정 지표를 선택하고 그룹화된 모든 노드에 대하여 해당 지표를 평균, 합계, 최대값, 최소값 중 원하는 방식으로 데이터를 표시하도록 설정합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "노드-맵-차트",
        children: "노드 맵 차트"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_nodeMap",
          className: "uitext"
        }), " 차트는 다음 세 가지 영역으로 구성되어있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-map-chart.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 1",
          src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "위젯 상단 영역"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "노드의 전체 개수 또는 그룹화된 경우 그룹회된 항목들의 총 개수와 선택한 메트릭스의 상태별 개수를 표시합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 2",
          src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "중앙 시각화 영역"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "전체 노드 상태와 개수를 직관적으로 확인할 수 있는 시각화된 대시보드를 제공합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "지시선 3",
          src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "위젯 하단 영역"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["선택한 메트릭스의 통계값을 표시합니다. 추가 설정의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN08460",
          className: "uitext"
        }), "을 통해 설정한대로 합계, 최대값, 최소값 중 원하는 방식으로 데이터를 표시합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_nodeMap",
            className: "uitext"
          }), "에서는 노드 에이전트가 설치된 노드만 표시합니다."]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "요약-보기-및-상세-분석",
        children: "요약 보기 및 상세 분석"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_nodeMap",
          className: "uitext"
        }), "에서 조회를 원하는 노드를 선택하세요. 오른쪽에 나타나는 요약 보기 화면을 통해 해당 객체의 요약 정보를 확인할 수 있습니다. 요약 보기 화면에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "BTN07712",
          className: "uitext"
        }), " 버튼을 클릭해 상세 분석 화면을 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-map-summary.png"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "node-target-info",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06782",
          className: "uitext"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06782",
          className: "uitext"
        }), " 탭에서 사용자가 선택한 노드의 주요 속성 정보를 확인할 수 있습니다. 또한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "resource-node-list",
          children: "노드 목록"
        }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "container-map",
          children: "컨테이너 맵"
        }), " 메뉴로 이동할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "node-summary-analysis",
        children: "Node 요약 분석"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["노드의 자원 할당 및 사용 현황 요약 정보를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Node 요약 분석"
          })
        }), "을 통해 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_import_k8s_node_summary_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Labels"
            })
          }), " 지표는 쿠버네티스 에이전트 버전 1.7.9 이상부터 지원합니다."]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_k8s_node_details_mdx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {})]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
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

/***/ 12289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS40Mjg3IDFIMTMuNDI4N0MxNS4wNjQ0IDEgMTYuMzk0NCAyLjMwOTA3IDE2LjQyODEgMy45MzU2OUMxNi43NjggNC4xMDQ1IDE3LjA5NjcgNC4yOTQ2MiAxNy40MTIyIDQuNTA0NzVDMTguODM4NiAzLjcyMDIxIDIwLjYzNzIgNC4yMTc0NiAyMS40NTUgNS42MzM5N0wyMi40NTUgNy4zNjYwM0MyMy4yNzMxIDguNzgyOTUgMjIuODAzOSAxMC41ODk4IDIxLjQxMSAxMS40MzIxQzIxLjQyMjggMTEuNjIwNiAyMS40Mjg3IDExLjgxIDIxLjQyODcgMTJDMjEuNDI4NyAxMi4xOSAyMS40MjI4IDEyLjM3OTQgMjEuNDExIDEyLjU2NzlDMjIuODA0MSAxMy40MTA4IDIzLjI3MjkgMTUuMjE3MyAyMi40NTUgMTYuNjM0TDIxLjQ1NSAxOC4zNjZDMjAuNjM3MSAxOS43ODI3IDE4LjgzODEgMjAuMjc5OSAxNy40MTIyIDE5LjQ5NTNDMTcuMDk2NiAxOS43MDU0IDE2Ljc2OCAxOS44OTU1IDE2LjQyODEgMjAuMDY0M0MxNi4zOTM4IDIxLjY5MTUgMTUuMDY0MSAyMyAxMy40Mjg3IDIzSDExLjQyODdDOS43OTMzNSAyMyA4LjQ2MzU5IDIxLjY5MTQgOC40Mjk0IDIwLjA2NDNDOC4wODk1IDE5Ljg5NTUgNy43NjA4MiAxOS43MDU0IDcuNDQ1MjYgMTkuNDk1M0M2LjAxODg2IDIwLjI3OTggNC4yMjAyOCAxOS43ODI1IDMuNDAyNDUgMTguMzY2TDIuNDAyNDUgMTYuNjM0QzEuNTg0MzkgMTUuMjE3MSAyLjA1MzU1IDEzLjQxMDIgMy40NDY0MiAxMi41Njc5QzMuNDM0NjUgMTIuMzc5NCAzLjQyODczIDEyLjE5IDMuNDI4NzMgMTJDMy40Mjg3MyAxMS44MSAzLjQzNDY1IDExLjYyMDYgMy40NDY0MiAxMS40MzIxQzIuMDUzNCAxMC41ODkyIDEuNTg0NTIgOC43ODI3MiAyLjQwMjQ1IDcuMzY2MDNMMy40MDI0NSA1LjYzMzk3QzQuMjIwMzkgNC4yMTcyNiA2LjAxOTM1IDMuNzIwMDcgNy40NDUyNyA0LjUwNDc0QzcuNzYwODIgNC4yOTQ2MSA4LjA4OTUgNC4xMDQ0OSA4LjQyOTQxIDMuOTM1NjhDOC40NjM2MyAyLjMwODUyIDkuNzkzMzcgMSAxMS40Mjg3IDFaTTEzLjQzNjYgMi44MzMzM0gxMS4zOTk2QzEwLjgzNzEgMi44MzMzMyAxMC4zODExIDMuMjg5MzQgMTAuMzgxMSAzLjg1MTg1TDEwLjM4MSA1LjE2NTYzQzkuMjk2NzYgNS40ODgzMyA4LjMyMDU5IDYuMDYyMDIgNy41MTk5IDYuODE5MzNMNi4zODAxMyA2LjE2MThDNS44OTI5OCA1Ljg4MDU0IDUuMjcwMDYgNi4wNDc0NSA0Ljk4ODgxIDYuNTM0NkwzLjk3MDI5IDguMjk4NzNDMy42ODkwMyA4Ljc4NTg4IDMuODU1OTQgOS40MDg4IDQuMzQzMDkgOS42OTAwNUw1LjQ4MDk0IDEwLjM0NzZDNS4zNTUwOSAxMC44Nzc5IDUuMjg4NDggMTEuNDMxMiA1LjI4ODQ4IDEyQzUuMjg4NDggMTIuNTY4OCA1LjM1NTA5IDEzLjEyMjEgNS40ODA5NCAxMy42NTI0TDQuMzQzMDkgMTQuMzA5OUMzLjg1NTk0IDE0LjU5MTIgMy42ODkwMyAxNS4yMTQxIDMuOTcwMjkgMTUuNzAxM0w0Ljk4ODgxIDE3LjQ2NTRDNS4yNzAwNiAxNy45NTI1IDUuODkyOTggMTguMTE5NSA2LjM4MDEzIDE3LjgzODJMNy41MTk5IDE3LjE4MDdDOC4zMjA1OSAxNy45MzggOS4yOTY3NiAxOC41MTE3IDEwLjM4MSAxOC44MzQ0TDEwLjM4MTEgMjAuMTQ4MUMxMC4zODExIDIwLjcxMDcgMTAuODM3MSAyMS4xNjY3IDExLjM5OTYgMjEuMTY2N0gxMy40MzY2QzEzLjk5OTEgMjEuMTY2NyAxNC40NTUyIDIwLjcxMDcgMTQuNDU1MiAyMC4xNDgxTDE0LjQ1NTggMTguODM0MkMxNS41Mzk5IDE4LjUxMTQgMTYuNTE1OCAxNy45Mzc4IDE3LjMxNjMgMTcuMTgwN0wxOC40NTYxIDE3LjgzODJDMTguOTQzMiAxOC4xMTk1IDE5LjU2NjIgMTcuOTUyNSAxOS44NDc0IDE3LjQ2NTRMMjAuODY1OSAxNS43MDEzQzIxLjE0NzIgMTUuMjE0MSAyMC45ODAzIDE0LjU5MTIgMjAuNDkzMSAxNC4zMDk5TDE5LjM1NTMgMTMuNjUyNEMxOS40ODExIDEzLjEyMjEgMTkuNTQ3NyAxMi41Njg4IDE5LjU0NzcgMTJDMTkuNTQ3NyAxMS40MzEyIDE5LjQ4MTEgMTAuODc3OSAxOS4zNTUzIDEwLjM0NzZMMjAuNDkzMSA5LjY5MDA1QzIwLjk4MDMgOS40MDg4IDIxLjE0NzIgOC43ODU4OCAyMC44NjU5IDguMjk4NzNMMTkuODQ3NCA2LjUzNDZDMTkuNTY2MiA2LjA0NzQ1IDE4Ljk0MzIgNS44ODA1NCAxOC40NTYxIDYuMTYxOEwxNy4zMTYzIDYuODE5MzNDMTYuNTE1OCA2LjA2MjE3IDE1LjUzOTkgNS40ODg1NiAxNC40NTU4IDUuMTY1ODJMMTQuNDU1MiAzLjg1MTg1QzE0LjQ1NTIgMy4yODkzNCAxMy45OTkxIDIuODMzMzMgMTMuNDM2NiAyLjgzMzMzWk0xMi40NzYzIDE1LjY2NjdDMTQuNTAxNCAxNS42NjY3IDE2LjE0MyAxNC4wMjUgMTYuMTQzIDEyQzE2LjE0MyA5Ljk3NDk2IDE0LjUwMTQgOC4zMzMzMyAxMi40NzYzIDguMzMzMzNDMTAuNDUxMyA4LjMzMzMzIDguODA5NjcgOS45NzQ5NiA4LjgwOTY3IDEyQzguODA5NjcgMTQuMDI1IDEwLjQ1MTMgMTUuNjY2NyAxMi40NzYzIDE1LjY2NjdaTTEyLjQ3NjMgMTMuODMzM0MxMS40NjM4IDEzLjgzMzMgMTAuNjQzIDEzLjAxMjUgMTAuNjQzIDEyQzEwLjY0MyAxMC45ODc1IDExLjQ2MzggMTAuMTY2NyAxMi40NzYzIDEwLjE2NjdDMTMuNDg4OSAxMC4xNjY3IDE0LjMwOTcgMTAuOTg3NSAxNC4zMDk3IDEyQzE0LjMwOTcgMTMuMDEyNSAxMy40ODg5IDEzLjgzMzMgMTIuNDc2MyAxMy44MzMzWiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 65557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcGFnZXZpZXc8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjguMDAwMDAwLCAtMjcxMS4wMDAwMDApIiBmaWxsPSIjMjk2Y2YyIj4KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcGFnZXZpZXciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjAwMDAwMCwgMzY1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCA0LjAwMDAwMCkiIGlkPSJwYWdldmlldyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCwwIEMxOS4wMzUyOTQxLDAgMTkuODkzNDI1NiwwLjc5NzIzMTgzNCAxOS45OTA3OTk5LDEuODA4MTAwOTYgTDIwLDIgTDE5Ljk5OSw1LjMzMyBMMTcuOTk5LDUuMzMzIEwxOCwyIEwyLDIgTDIsMTQgTDEyLDE0IEwxMiwxNiBMMiwxNiBDMC45NjQ3MDU4ODIsMTYgMC4xMDY1NzQzOTQsMTUuMjAyNzY4MiAwLjAwOTIwMDA4MTQyLDE0LjE5MTg5OSBMLTUuMzI5MDcwNTJlLTE1LDE0IEwtNS4zMjkwNzA1MmUtMTUsMiBDLTUuMzI5MDcwNTJlLTE1LDAuOTY0NzA1ODgyIDAuNzk3MjMxODM0LDAuMTA2NTc0Mzk0IDEuODA4MTAwOTYsMC4wMDkyMDAwODE0MiBMMiwwIEwxOCwwIFogTTEzLjE2NjY2NjcsNCBDMTUuNjU2NjY2Nyw0IDE3LjY2NjY2NjcsNi4wMSAxNy42NjY2NjY3LDguNSBDMTcuNjY2NjY2Nyw5LjM4IDE3LjQwNjY2NjcsMTAuMTkgMTYuOTY2NjY2NywxMC44OSBMMTkuODc2NjY2NywxMy43OSBMMTguNDU2NjY2NywxNS4yMSBMMTUuNTQ2NjY2NywxMi4zIEMxNC44NTY2NjY3LDEyLjc0IDE0LjAzNjY2NjcsMTMgMTMuMTU2NjY2NywxMyBDMTAuNjc2NjY2NywxMyA4LjY2NjY2NjY3LDEwLjk5IDguNjY2NjY2NjcsOC41IEM4LjY2NjY2NjY3LDYuMDEgMTAuNjc2NjY2Nyw0IDEzLjE2NjY2NjcsNCBaIE0xMy4xNjY2NjY3LDYgQzExLjc4NjY2NjcsNiAxMC42NjY2NjY3LDcuMTIgMTAuNjY2NjY2Nyw4LjUgQzEwLjY2NjY2NjcsOS44OCAxMS43ODY2NjY3LDExIDEzLjE2NjY2NjcsMTEgQzE0LjU0NjY2NjcsMTEgMTUuNjY2NjY2Nyw5Ljg4IDE1LjY2NjY2NjcsOC41IEMxNS42NjY2NjY3LDcuMTIgMTQuNTQ2NjY2Nyw2IDEzLjE2NjY2NjcsNiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ 47951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-node-map-custom-color-57e42601a23b3ca1e976e21ced5e5776.png");

/***/ }),

/***/ 25502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-node-map-custom-err-col-064354c25ced8d204363d3500f0786a9.png");

/***/ }),

/***/ 36764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABF5SURBVHgB7d1NbBTnHcfxZ9bGvFZCQSByASMlOUCkJEhALqW2lFOJVBok59IqtiCXEilEStJj4JpWaiIlOYEMtxQVwiHuKRIkpwSkhEo4h+RguxciUBAS72B7Ov/dLszOPjs7s971zm/3+5EQ9nq9L+OZ3/6fZ57nmcBlsH8yXD84f/9FVxr4QxiGI86Fw9HN6x0AtOZm9O9yEJQuR5ny9ZlDK89l+aUg7YcWVKXFh28HYXjEEVAAOmc2DIKTQ6XFU59PrJ5tdKeGgXXg+P23o/+OOoIKwPKJgis8dvbg6pO+H3oD67UT9/8RhO6IA4AuCAP30dmDq95J3l4XWAdOPJh0YTjuAKCboibimYMrJ+I3leLfWGVFWAEohCiLypkU87jCeu3EvfEgDCYdABRIGLp3zr656iP7uhxY+yfvDQ8sBudd6IYdABRKcHNhYGjbuYngZrlJWFosvUFYASim8jjQ8knAcoV14MT9GQILQHFVqqzSgeMP9hNWAIqtMtsmahIujDgAKLgwCPZHgVV6wQFA8f3OOt1fdABQeMGwBRZzBQEICNeXHACIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAAyCCwAMggsADIILAA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");

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