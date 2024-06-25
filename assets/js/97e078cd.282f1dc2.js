"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[71324],{

/***/ 22248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ metrics_kubernetes_contentTitle),
  "default": () => (/* binding */ metrics_kubernetes_MDXContent),
  frontMatter: () => (/* binding */ metrics_kubernetes_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ metrics_kubernetes_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_metrics-kubernetes.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "컨테이너(<code>container</code>) 지표",
  "id": "container",
  "level": 3
}, {
  "value": "Tags",
  "id": "container-tags",
  "level": 4
}, {
  "value": "Fields",
  "id": "container-fields",
  "level": 4
}, {
  "value": "쿠버네티스 노드(<code>kube_node</code>) 지표",
  "id": "kube_node",
  "level": 3
}, {
  "value": "Tags",
  "id": "kube_node-tags",
  "level": 4
}, {
  "value": "Fields",
  "id": "kube_node-fields",
  "level": 4
}, {
  "value": "쿠버네티스 이벤트(<code>kube_event</code>) 지표",
  "id": "kube_event",
  "level": 3
}, {
  "value": "Tags",
  "id": "kube_event-tags",
  "level": 4
}, {
  "value": "Fields",
  "id": "kube_event-fields",
  "level": 4
}, {
  "value": "쿠버네티스 클러스터(<code>kube_stat</code>) 지표",
  "id": "kube_stat",
  "level": 3
}, {
  "value": "Tags",
  "id": "kube_stat-tags",
  "level": 4
}, {
  "value": "Fields",
  "id": "kube_stat-fields",
  "level": 4
}, {
  "value": "Pod(<code>kube_pod</code>) 지표",
  "id": "kube_pod",
  "level": 3
}, {
  "value": "Tags",
  "id": "kube_pod-tags",
  "level": 4
}, {
  "value": "Fields",
  "id": "kube_pod-fields",
  "level": 4
}, {
  "value": "쿠버네티스 Pod 통계(<code>kube_pod_stat</code>) 지표",
  "id": "kube_pod_stat",
  "level": 3
}, {
  "value": "Tags",
  "id": "kube_pod_stat-tags",
  "level": 4
}, {
  "value": "Fields",
  "id": "kube_pod_stat-fields",
  "level": 4
}, {
  "value": "쿠버네티스 Horizontal Pod Autoscaler(HPA)(<code>kube_hpa_stat</code>) 지표",
  "id": "kube_hpa_stat",
  "level": 3
}, {
  "value": "Tags",
  "id": "kube_hpa_stat-tags",
  "level": 4
}, {
  "value": "Fields",
  "id": "kube_hpa_stat-fields",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    section: "section",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "쿠버네티스에서 수집되는 지표 일부는 서버 모니터링, 애플리케이션과 동일합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "container",
        children: ["컨테이너(", (0,jsx_runtime.jsx)(_components.code, {
          children: "container"
        }), ") 지표"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "container"
        }), " 카테고리는 컨테이너의 pod에 설정된 모든 사용자 정의 라벨들을 태그로 수집합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "대상: 클러스터 프로젝트, 네임스페이스 프로젝트"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "수집 간격: 5초"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "통계 데이터: 5분"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "container-tags",
        children: "Tags"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "태그명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "agentOid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 에이전트 고유 ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "고유값"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "agentPcode"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "프로젝트 코드"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "고유값"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "command"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "실행 명령어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerId"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "고유값"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerKey"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 Key"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "created"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너가 생성된 TimeStamp"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "image"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 이미지명"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "imageHash"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이미지 해시 값"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "imageId"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이미지 ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "k8s-app"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod의 레이블 k8s-app에 대한 값"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "microOid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너에 설치된 와탭 APM 에이전트의 고유 ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "namespace"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너가 소속된 네임스페이스"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "namespaceHash"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너가 소속된 네임스페이스 해시 값"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "okind"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너에 설치된 와탭 APM 에이전트에 지정한 OKIND 고유 ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "okindName"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너에 설치된 와탭 APM 에이전트에 지정한 OKIND 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "oname"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너에 설치된 와탭 APM 에이전트 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "onode"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너가 작동 중인 노드 에이전트의 고유 ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "onodeName"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너가 작동 중인 노드 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "podHash"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너의 Pod 해시 값"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "podName"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너의 Pod 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "replicaSetHash"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너의 레플리카셋 해시 값"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "replicaSetName"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너의 레플리카셋 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap_project"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너가 속한 와탭 프로젝트 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "-"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "container-fields",
        children: "Fields"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "필드명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "단위"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명 (Shortname, Name, Description)"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_rbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoReadBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Block I/O Read Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 전체 블럭 디바이스의 초당 읽은 바이트 합"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_riops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoReadIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Block I/O Read IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 전체 블럭 디바이스의 초당 읽은 건수 합"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_wbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoWriteBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Block I/O Write Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 전체 블럭 디바이스의 초당 쓴 바이트 합"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_wiops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoWriteIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Block I/O Write IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 전체 블럭 디바이스의 초당 쓴 건수 합"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_quota"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Usage by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU Limit 기준 CPU 전체 사용률"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_quota"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "밀리 코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Limit (core)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["컨테이너 CPU Limit 할당량", (0,jsx_runtime.jsx)("br", {}), "Limit 미설정인 경우 컨테이너가 작동 중인 해당 노드의 CPU 전체 코어가 밀리코어 단위로 표시된다."]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_quota_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuLimitByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Limit by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["노드 CPU 대비 컨테이너 CPU Limit 할당량", (0,jsx_runtime.jsx)("br", {}), "Limit 미설정인 경우 컨테이너가 작동 중인 해당 노드의 CPU 전체 코어가 퍼센트로 표시된다."]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_sys"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuSysByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Sys Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 CPU 대비 컨테이너 CPU System 사용률"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_throttledperiods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuThrottledCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Throttling Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 CPU Throttled 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_throttledtime"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "나노세컨드"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuThrottledTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Throttling Time"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 CPU Throttled 시간"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_total"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 CPU 대비 컨테이너 CPU 사용률"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_total_milli"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "밀리코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuTotUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Usage (millicore)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 CPU 사용량"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_user"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuUserByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU User Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 CPU 대비 컨테이너 CPU User 사용률"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "밀리코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Request (core)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 CPU 요청"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Usage by Request (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["컨테이너 CPU 요청 대비 사용률", (0,jsx_runtime.jsx)("br", {}), "= cpu_total_milli / cpu_request * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_failcnt"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemFailCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Failure Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 메모리 Limit 도달 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_limit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Limit (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 메모리 Limit 크기"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_maxusage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemMaxUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Max Usage (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 메모리 최대 사용량 기록 값"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWsByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Working Set by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["컨테이너 메모리 Limit 기준 working set 사용량", (0,jsx_runtime.jsx)("br", {}), "= mem_working_set / mem_limit * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalcache"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotCache"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total Cache (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 전체 캐시 크기"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalpgfault"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "횟수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotPageFaultCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total Page Fault Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 Page Fault 횟수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalrss"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotRss"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total RSS (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 RSS 메모리 전체 크기"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalrss_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotRssByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total RSS by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 RSS 메모리 전체 사용률"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalunevictable"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotUnevictable"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total Unevictable (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 Unevictable Memory 전체 크기"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_usage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Usage (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 메모리 사용량"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_working_set"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWs"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Working Set (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["컨테이너 메모리 working set", (0,jsx_runtime.jsx)("br", {}), "= mem_usage - inactive file"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_working_set_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWsByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Working Set by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["컨테이너 메모리 Limit 기준 working set 사용량", (0,jsx_runtime.jsx)("br", {}), "= mem_working_set / mem_limit * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Request (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 메모리 Request 크기"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWsByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Working Set by Request (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["컨테이너 메모리 Request 기준 working set 사용량", (0,jsx_runtime.jsx)("br", {}), "= mem_working_set / mem_request * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 전체 블럭 디바이스의 초당 읽기 바이트 합"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rdropped"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxDropped"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive Dropped"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 네트워크 수신 dropped 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rerror"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxError"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive Error"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 네트워크 수신 에러 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_riops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 네트워크 수신 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxByes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 네트워크 송신 데이터 크기"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wdropped"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxDropped"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit Dropped"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 네트워크 송신 dropped 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_werror"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxError"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit Error"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 네트워크 송신 에러 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wiops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 네트워크 송신 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "node_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConNodeCpu"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Work Node CPU Usage (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너가 실행 중인 노드의 CPU 사용량"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "node_mem"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConNodeMem"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Work Node Memory Usage (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너가 실행 중인 노드의 메모리 사용량"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "phase"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "문자열"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Pod 라이프사이클 ", (0,jsx_runtime.jsx)("br", {}), " ① PENDING", (0,jsx_runtime.jsx)("br", {}), " ② RUNNING ", (0,jsx_runtime.jsx)("br", {}), "③ SUCCEEDED ", (0,jsx_runtime.jsx)("br", {}), "④ FAILED ", (0,jsx_runtime.jsx)("br", {}), "⑤ UNKNOWN"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "restart_count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConRestartCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Restart Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "컨테이너 다시 시작 횟수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "state"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConState"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Current State"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["컨테이너 상태 코드", (0,jsx_runtime.jsx)("br", {}), "① RUNNING = 114", (0,jsx_runtime.jsx)("br", {}), "② PAUSE = 112", (0,jsx_runtime.jsx)("br", {}), "③ RESTARTING = 101", (0,jsx_runtime.jsx)("br", {}), "④ OOMKILLED = 111M", (0,jsx_runtime.jsx)("br", {}), "⑤ DEAD = 100", (0,jsx_runtime.jsx)("br", {}), "⑥ WAITING = 119"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "status"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "문자열"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConStatus"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Current Status"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["컨테이너 상태 정보", (0,jsx_runtime.jsx)("br", {}), "① running 상태:  uptime 정보 표시", (0,jsx_runtime.jsx)("br", {}), "② waiting/terminated 상태: 상태에 대한 reason 정보 표시"]
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "kube_node",
        children: ["쿠버네티스 노드(", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_node"
        }), ") 지표"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kube_node"
        }), " 카테고리는 노드에 설정된 모든 사용자 정의 라벨들을 태그로 수집합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "대상: 클러스터 프로젝트, 네임스페이스 프로젝트"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "수집 간격: 5초"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "통계 데이터: 5분, 1시간"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "kube_node-tags",
        children: "Tags"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "태그명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "nodeName"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "kube_node-fields",
        children: "Fields"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "필드명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "단위"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "allocatable_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "밀리 코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 할당 가능한 CPU량"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "allocatable_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 할당 가능한 메모리량"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "allocatable_pods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 할당 가능한 Pod 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "limit_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "밀리 코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 CPU Limit 합계"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "limit_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 메모리 Limit 합계"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "pods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 Pod 총개수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "request_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "밀리 코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 CPU Request 합계"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "request_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 메모리 Request 합계"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "kube_event",
        children: ["쿠버네티스 이벤트(", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_event"
        }), ") 지표"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kube_event"
        }), " 카테고리는 클러스터 프로젝트의 경우 클러스터 전체를 대상으로 데이터를 수집하며 네임스페이스 프로젝트는 해당 네임스페이스에서 발생한 이벤트에 대해서만 수집합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "대상: 클러스터 프로젝트, 네임스페이스 프로젝트"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "수집 간격: 5초"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "통계 데이터: 5분, 1시간"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "kube_event-tags",
        children: "Tags"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "태그명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "field_path"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Field Path"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "kind"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "종류"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트가 발생한 오브젝트 종류"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "오브젝트 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트가 발생한 쿠버네티스 오브젝트 이름"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "namespace"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "네임스페이스 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트가 발생한 네임스페이스"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "reason"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트 발생 사유"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "type"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트 유형"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Warning 또는 Normal"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "uid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "UID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트가 발생한 오브젝트"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "kube_event-fields",
        children: "Fields"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "필드명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "단위"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "action"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "문자열"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "액션 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "event_time"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트 최초 발생 TimeStamp"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "first_timestamp"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트 최초 발생 시간"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "last_timestamp"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트 마지막 발생 시간"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "message"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "문자열"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트 메시지"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "reasonFiled"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "문자열"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "이벤트 Reason"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "reporting_component"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "문자열"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "현재 이벤트를 보고하는 컴포넌트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "reporting_instance"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "문자열"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "현재 이벤트를 보고하는 인스턴스"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "series_last_observed_time"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "series last observed time"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "kube_stat",
        children: ["쿠버네티스 클러스터(", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_stat"
        }), ") 지표"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kube_stat"
        }), " 카테고리는 클러스터 프로젝트의 경우 클러스터 전체 대상으로 수집하고 네임스페이스 프로젝트는 해당 네임스페이스와 연관된 오브젝트를 대상으로만 수집합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "대상: 클러스터 프로젝트, 네임스페이스 프로젝트"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "수집 간격: 5초"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "통계 데이터: 5분, 1시간"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "kube_stat-tags",
        children: "Tags"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "태그명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "kube_stat"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "고정 값"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "kube_stat-fields",
        children: "Fields"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "필드명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "단위"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "밀리 코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "클러스터 전체 코어 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "클러스터 프로젝트 Only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_ephemeral-storage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "클러스터 전체 할당 가능한 ephemeral storage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "클러스터 프로젝트 Only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_hugepages-1gi"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "클러스터 전체 할당 가능한 hugepages-1Gi"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "클러스터 프로젝트 Only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_hugepages-2mi"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "클러스터 전체 할당 가능한 hugepages-2Mi"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "클러스터 프로젝트 Only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "클러스터 전체 할당 가능한 메모리"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "클러스터 프로젝트 Only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_pods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "할당 가능한 Pod 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "available_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Phase가 Running 상태인 Pod의 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "desired_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "정수"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "metadata.ownerReferences"
              }), " 없이 배포된 Pod 수와 쿠버네티스 오브젝트(ReplicaSet, Daemonset, StatefulSet)에 정의된 Desired Pod 수의 합"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "kubectl get pods -A"
              }), "로 조회한 Pod 수와 동일"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "nodes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "pod_phase_Pending"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pending 상태 Pod 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "pod_phase_Running"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Running 상태 Pod 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "running_containers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Running 컨테이너 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "stopped_containers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Stopped 컨테이너 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_available_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "할당 가능한 CPU 총합"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_available_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "할당 가능한 Memory 총합"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_limit_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "밀리 코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Limit CPU 총합"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_limit_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Limit Memory 총합"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_request_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "밀리 코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Request CPU 총합"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_request_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Request Memory 총합"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "unavailable_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Phase가 Running 상태가 아닌(Pending, Failed, Succedded) Pod 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "waiting_containers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Waiting Container 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "kube_pod",
        children: ["Pod(", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_pod"
        }), ") 지표"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kube_pod"
        }), " 카테고리는 Pod에 설정된 모든 사용자 정의 라벨들을 태그로 수집합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "대상: 마스터(클러스터) 프로젝트, 네임스페이스 프로젝트"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "수집 간격: 5초"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "통계 데이터: 5분"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "kube_pod-tags",
        children: "Tags"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "태그명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "agentOid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 에이전트 고유 ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "고유값"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "agentPcode"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "프로젝트 코드"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "고유값"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "command"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "실행 명령어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerIds"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 에 속해있는 컨테이너 ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerIdsCount"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "containerIds 의 개수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerKeys"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 에 속해있는 컨테이너 ID 의 해시 값"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerKeysCount"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "containerKeys 의 개수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "DaemonSet"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod의 DaemonSet 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Deployment"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Deployment"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "k8s-app"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod의 레이블 k8s-app에 대한 값"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "microOid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 의 컨테이너 내부 애플리케이션에서 실행중인 에이전트의 id"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "microOids"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 안의 복수개 컨테이너 내부 애플리케이션에서 실행 중인 에이전트의 복수개 id"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "microOidsCount"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "microOids 의 개수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "onames"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 의 컨테이너 내부 애플리케이션에서 실행중인 에이전트의 명칭"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "onamesCount"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "onames 의 개수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "podName"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "namespace"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod가 소속된 네임스페이스"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "namespaceHash"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod가 소속된 네임스페이스 해시 값"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "replicaSetHash"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod의 ReplicaSet 해시 값"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "replicaSetName"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod의 ReplicaSet 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap_project"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod가 속한 와탭 프로젝트 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "kube_pod-fields",
        children: "Fields"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "필드명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "단위"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "(Shortname, Name, Description)"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_rbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoReadBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Block I/O Read Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 전체 블럭 디바이스의 초당 읽은 바이트 합"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_riops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoReadIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Block I/O Read IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 전체 블럭 디바이스의 초당 읽은 건수 합"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_wbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoWriteBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Block I/O Write Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 전체 블럭 디바이스의 초당 쓴 바이트 합"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_wiops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoWriteIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Block I/O Write IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 전체 블럭 디바이스의 초당 쓴 건수 합"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_limit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU Limit 기준 CPU 전체 사용률"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU Limit 기준 CPU 전체 사용률"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_quota_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuLimitByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Limit by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["노드 CPU 대비 Pod CPU Limit 할당량", (0,jsx_runtime.jsx)("br", {}), "Limit 미설정인 경우 Pod가 작동 중인 해당 노드의 CPU 전체 코어가 퍼센트로 표시된다."]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_sys"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuSysByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Sys Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 CPU 대비 Pod CPU System 사용률"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_throttledperiods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuThrottledCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Throttling Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Throttled 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_throttledtime"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "나노세컨드"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuThrottledTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Throttling Time"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Throttled 시간"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_total"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 CPU 대비 Pod CPU 사용률"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_total_milli"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "밀리코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuTotUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage (millicore)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU 사용률"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_user"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuUserByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU User Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "노드 CPU 대비 Pod CPU User 사용률"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "밀리코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Request (core)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU 요청"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage by Request (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Pod CPU 요청 대비 사용률", (0,jsx_runtime.jsx)("br", {}), "= cpu_total_milli / cpu_request * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalcache"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotCache"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total Cache (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 전체 캐시 크기"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalpgfault"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "횟수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotPageFaultCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total Page Fault Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Page Fault 횟수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalrss"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotRss"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total RSS (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod RSS 메모리 전체 크기"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalrss_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotRssByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total RSS by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod RSS 메모리 전체 사용률"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalunevictable"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotUnevictable"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total Unevictable (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Unevictable Memory 전체 크기"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_usage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Usage (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 메모리 사용량"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_working_set"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWs"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Working Set (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Pod 메모리 working set", (0,jsx_runtime.jsx)("br", {}), "= mem_usage - inactive file"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "memory_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Request (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 메모리 요청량"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "memory_limit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Limit (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 메모리 Limit 할당량"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "memory_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Working Set By Request (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 메모리 요청량 기준 Working Set 사용량"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "memory_per_limit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "퍼센트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod MMemory Working Set By Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 메모리 Limit 기준 Working Set 사용량"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 전체 블럭 디바이스의 초당 읽기 바이트 합"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rdropped"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxDropped"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive Dropped"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 네트워크 수신 dropped 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rerror"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxError"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive Error"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 네트워크 수신 에러 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_riops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 네트워크 수신 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxByes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 네트워크 송신 데이터 크기"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wdropped"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxDropped"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit Dropped"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 네트워크 송신 dropped 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_werror"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxError"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit Error"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 네트워크 송신 에러 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wiops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod 네트워크 송신 건수"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "phase"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "문자열"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Phase"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Current Phase"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Pod 라이프사이클 ", (0,jsx_runtime.jsx)("br", {}), " ① PENDING", (0,jsx_runtime.jsx)("br", {}), " ② RUNNING ", (0,jsx_runtime.jsx)("br", {}), "③ SUCCEEDED ", (0,jsx_runtime.jsx)("br", {}), "④ FAILED ", (0,jsx_runtime.jsx)("br", {}), "⑤ UNKNOWN"]
            })
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음 필드는 내부용으로 예약되었습니다."
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "필드명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "kube_sless_normal"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "쿠버네티스 정보성 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "kube_sless_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "쿠버네티스 경고 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sful_critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "apm 심각 상태 기반 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sful_info"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "apm 정보성 상태 기반 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sful_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "apm 경고 상태 기반 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sless_critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "apm 심각 무상태 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sless_info"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "apm 정보성 무상태 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sless_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "apm 경고 무상태 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sful_critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "메트릭스 심각 상태 기반 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sful_info"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "메트릭스 정보성 상태 기반 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sful_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "메트릭스 경고 상태 기반 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sless_critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "메트릭스 심각 무상태 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sless_info"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "메트릭스 정보성 무상태 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sless_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "메트릭스 경고 무상태 이벤트 발생 건수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "kube_pod_stat",
        children: ["쿠버네티스 Pod 통계(", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_pod_stat"
        }), ") 지표"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kube_pod_stat"
        }), " 카테고리 클러스터 프로젝트는 클러스터 전체를 대상으로 데이터를 수집하며 네임스페이스 프로젝트는 해당 네임스페이스에 소속된 Pod에 대해서만 수집합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "대상: 클러스터 프로젝트, 네임스페이스 프로젝트"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "수집 간격: 5초"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "통계 데이터: 5분, 1시간"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "kube_pod_stat-tags",
        children: "Tags"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "태그명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "kind"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "유형"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "클러스터 프로젝트의 경우 cluster 고정 값을 가지며 네임스페이스 프로젝트의 경우 Deployment 또는 ReplicaSet에 대해서만 수집합니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "쿠버네티스 자원 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "클러스터 프로젝트는 name 값이 없으며 네임스페이스 프로젝트는 Deployment 또는 ReplicaSet의 이름입니다."
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "kube_pod_stat-fields",
        children: "Fields"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "필드명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "단위"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "available_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Phase가 Running 상태인 Pod의 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "desired_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "정수"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "metadata.ownerReferences"
              }), " 없이 배포된 Pod 수와 쿠버네티스 오브젝트(ReplicaSet, Daemonset, StatefulSet)에 정의된 Desired Pod 수의 합"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "kubectl get pods -A"
              }), "로 조회한 Pod 수와 동일"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "limit_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "밀리 코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU Limit 사용량"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "limit_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Memory Limit 사용량"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "request_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "밀리 코어"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU Request 사용량"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "request_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "바이트"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Memory Request 사용량"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "running_container"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Running Container 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "stopped_container"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Stopped Container 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "waiting_container"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Waiting Container 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "kube_hpa_stat",
        children: ["쿠버네티스 Horizontal Pod Autoscaler(HPA)(", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_hpa_stat"
        }), ") 지표"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "와탭에서 사용하는 ClusterRole에 HPA가 추가되어야 지표 수집이 시작됩니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "대상: 클러스터 프로젝트"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "수집 간격: 5초"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "통계 데이터: 5분, 1시간"
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "kube_hpa_stat-tags",
        children: "Tags"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "태그명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HPA 이름"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "kube_hpa_stat-fields",
        children: "Fields"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "필드명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "단위"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "currentReplicas"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "현재 레플리카 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "desiredReplicas"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Desired 레플리카 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "lastScaleTime"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "마지막으로 스케일이 변경된 TimeStamp"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "maxReplicas"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "최대 레플리카 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "minReplicas"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "정수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "최소 레플리카 수"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          })]
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/kubernetes/metrics-kubernetes.mdx


const metrics_kubernetes_frontMatter = {
	id: 'metrics-kubernetes',
	title: '쿠버네티스 지표',
	description: '쿠버네티스에서 수집되는 지표를 안내합니다.',
	tags: [
		'메트릭스',
		'쿠버네티스',
		'쿠버네티스 모니터링'
	]
};
const metrics_kubernetes_contentTitle = undefined;
const metadata = {
  "id": "kubernetes/metrics-kubernetes",
  "title": "쿠버네티스 지표",
  "description": "쿠버네티스에서 수집되는 지표를 안내합니다.",
  "source": "@site/docs/kubernetes/metrics-kubernetes.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/metrics-kubernetes",
  "permalink": "/whatap-docs/kubernetes/metrics-kubernetes",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/metrics-kubernetes.mdx",
  "tags": [
    {
      "inline": true,
      "label": "메트릭스",
      "permalink": "/whatap-docs/tags/메트릭스"
    },
    {
      "inline": true,
      "label": "쿠버네티스",
      "permalink": "/whatap-docs/tags/쿠버네티스"
    },
    {
      "inline": true,
      "label": "쿠버네티스 모니터링",
      "permalink": "/whatap-docs/tags/쿠버네티스-모니터링"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "metrics-kubernetes",
    "title": "쿠버네티스 지표",
    "description": "쿠버네티스에서 수집되는 지표를 안내합니다.",
    "tags": [
      "메트릭스",
      "쿠버네티스",
      "쿠버네티스 모니터링"
    ]
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "메트릭스",
    "permalink": "/whatap-docs/kubernetes/metrics-intro"
  },
  "next": {
    "title": "메트릭스 조회",
    "permalink": "/whatap-docs/kubernetes/metrics-search"
  }
};
const assets = {

};




const metrics_kubernetes_toc = [...toc];
function metrics_kubernetes_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(MDXContent, {});
}
function metrics_kubernetes_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(metrics_kubernetes_createMdxContent, {
      ...props
    })
  }) : metrics_kubernetes_createMdxContent(props);
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