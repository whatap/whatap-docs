"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[56524],{

/***/ 43773:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_metrics-kubernetes.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "コンテナ(<code>container</code>) 指標",
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
  "value": "Kubernetesノード(<code>kube_node</code>) 指標",
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
  "value": "Kubernetesイベント(<code>kube_event</code>) 指標",
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
  "value": "Kubernetesクラスター(<code>kube_stat</code>) 指標",
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
  "value": "Pod(<code>kube_pod</code>) 指標",
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
  "value": "Kubernetes Pod統計(<code>kube_pod_stat</code>) 指標",
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
  "value": "Kubernetes Horizontal Pod Autoscaler(HPA)(<code>kube_hpa_stat</code>) 指標",
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
      children: "Kubernetesから収集される指標の一部は、サーバーモニタリング、アプリケーションと同じです。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "container",
        children: ["コンテナ(", (0,jsx_runtime.jsx)(_components.code, {
          children: "container"
        }), ") 指標"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "container"
        }), "カテゴリは、コンテナのPODに設定されているすべてのユーザー定義ラベルをタグとして収集します。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "対象：クラスタープロジェクト、ネームスペースプロジェクト"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "収集間隔：5秒"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "統計データ：5分"
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
              children: "タグ名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "備考"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "agentOid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ノードエージェント固有ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "ユニーク値"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "agentPcode"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "プロジェクトコード"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "ユニーク値"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "command"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "実行コマンド"
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
              children: "コンテナID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "ユニーク値"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerKey"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナKey"
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
              children: "コンテナが生成されたTimeStamp"
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
              children: "コンテナイメージ名"
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
              children: "イメージハッシュ値"
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
              children: "イメージID"
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
              children: "Podのラベルk8s-appに対する値"
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
              children: "コンテナにインストールされたWhaTap APMエージェントの固有ID"
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
              children: "コンテナ名"
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
              children: "コンテナが所属するネームスペース"
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
              children: "コンテナが所属するネームスペースのハッシュ値"
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
              children: "コンテナにインストールされているWhaTap APMエージェントに指定したOKINDの固有ID"
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
              children: "コンテナにインストールされているWhaTap APMエージェントに指定したOKIND名"
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
              children: "コンテナにインストールされているWhaTap APMエージェント名"
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
              children: "コンテナが実行されているノードエージェントの固有ID"
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
              children: "コンテナが動作しているノード名"
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
              children: "コンテナのPodハッシュ値"
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
              children: "コンテナのPod名"
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
              children: "コンテナのレプリカセットハッシュ値"
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
              children: "コンテナのレプリカセット名"
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
              children: "コンテナが属するWhaTapプロジェクト名"
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
              children: "フィールド名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "単位"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明（Shortname、 Name、 Description）"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_rbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoReadBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Block I/O Read Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナ全体ブロックデバイスの1秒当たり読み込んだバイトの合計"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_riops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoReadIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Block I/O Read IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナ全体ブロックデバイスの1秒当たり読み込んだ数の合計"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_wbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoWriteBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Block I/O Write Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナ全体ブロックデバイスの1秒当たり書き込んだバイトの合計"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_wiops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoWriteIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Block I/O Write IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナ全体ブロックデバイスの1秒当たり書き込んだ数の合計"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_quota"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Usage by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU Limit基準CPUの全体使用率"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_quota"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "ミリコア"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Limit (core)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["コンテナのCPU Limit割当量", (0,jsx_runtime.jsx)("br", {}), "Limitが未設定の場合、コンテナが実行中のノードのCPU全体コアがミリコア単位で表示されます。"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_quota_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuLimitByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Limit by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["ノードCPUに対するコンテナCPU Limit割当量", (0,jsx_runtime.jsx)("br", {}), "Limit未設定の場合、コンテナが作動中の当該ノードのCPU全体コアがパーセントで表示される。"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_sys"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuSysByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Sys Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "ノードCPUに対するコンテナCPU System使用率"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_throttledperiods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuThrottledCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Throttling Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナCPU Throttled数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_throttledtime"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "ナノ秒"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuThrottledTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Throttling Time"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナCPU Throttled時間"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_total"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "ノードCPUに対するコンテナCPU使用率"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_total_milli"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "ミリコア"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuTotUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Usage (millicore)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナCPU使用量"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_user"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuUserByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU User Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "ノードCPUに対するコンテナCPU User使用率"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "ミリコア"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Request (core)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナCPU要求"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Usage by Request (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["コンテナCPUリクエストに対する使用率", (0,jsx_runtime.jsx)("br", {}), "= cpu_total_milli / cpu_request * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_failcnt"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemFailCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Failure Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナメモリLimit到達件数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_limit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Limit (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナのメモリLimitサイズ"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_maxusage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemMaxUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Max Usage (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナメモリの最大使用量の記録値"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWsByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Working Set by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["コンテナメモリLimit基準working set使用量", (0,jsx_runtime.jsx)("br", {}), "= mem_working_set / mem_limit * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalcache"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotCache"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total Cache (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナ全体のキャッシュサイズ"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalpgfault"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "回数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotPageFaultCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total Page Fault Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナPage Fault回数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalrss"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotRss"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total RSS (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナRSSメモリ全体サイズ"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalrss_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotRssByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total RSS by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナRSSメモリ全体使用率"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalunevictable"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotUnevictable"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total Unevictable (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナUnevictable Memory全体サイズ"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_usage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Usage (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナメモリ使用量"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_working_set"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWs"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Working Set (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["コンテナメモリworking set", (0,jsx_runtime.jsx)("br", {}), "= mem_usage - inactive file"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_working_set_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWsByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Working Set by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["コンテナメモリLimit基準working set使用量", (0,jsx_runtime.jsx)("br", {}), "= mem_working_set / mem_limit * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Request (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナのメモリRequestサイズ"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWsByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Working Set by Request (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["コンテナメモリRequest基準working set使用量", (0,jsx_runtime.jsx)("br", {}), "= mem_working_set / mem_request * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナ全体ブロックデバイスの1秒当たり読み取りバイトの合計"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rdropped"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxDropped"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive Dropped"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナネットワーク受信dropped数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rerror"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxError"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive Error"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナのネットワーク受信エラー数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_riops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナのネットワーク受信数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxByes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナのネットワーク送信データサイズ"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wdropped"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxDropped"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit Dropped"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナのネットワーク送信dropped数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_werror"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxError"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit Error"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナのネットワーク送信エラー数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wiops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナのネットワーク送信数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "node_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConNodeCpu"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Work Node CPU Usage (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナ実行中のノードのCPU使用量"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "node_mem"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConNodeMem"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Work Node Memory Usage (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナ実行中のノードのメモリ使用量"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "phase"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "文字列"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Podライフサイクル", (0,jsx_runtime.jsx)("br", {}), " ① PENDING", (0,jsx_runtime.jsx)("br", {}), " ② RUNNING ", (0,jsx_runtime.jsx)("br", {}), "③ SUCCEEDED ", (0,jsx_runtime.jsx)("br", {}), "④ FAILED ", (0,jsx_runtime.jsx)("br", {}), "⑤ UNKNOWN"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "restart_count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConRestartCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Restart Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "コンテナの再起動回数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "state"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConState"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Current State"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["コンテナステータスコード", (0,jsx_runtime.jsx)("br", {}), "① RUNNING = 114", (0,jsx_runtime.jsx)("br", {}), "② PAUSE = 112", (0,jsx_runtime.jsx)("br", {}), "③ RESTARTING = 101", (0,jsx_runtime.jsx)("br", {}), "④ OOMKILLED = 111M", (0,jsx_runtime.jsx)("br", {}), "⑤ DEAD = 100", (0,jsx_runtime.jsx)("br", {}), "⑥ WAITING = 119"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "status"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "文字列"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConStatus"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Current Status"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["コンテナステータス情報", (0,jsx_runtime.jsx)("br", {}), "① runningステータス：uptime情報表示", (0,jsx_runtime.jsx)("br", {}), "② waiting/terminatedステータス：ステータスに対するreason情報の表示"]
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "kube_node",
        children: ["Kubernetesノード(", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_node"
        }), ") 指標"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kube_node"
        }), "カテゴリは、ノードに設定されているすべてのユーザー定義ラベルをタグとして収集します。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "対象：クラスタープロジェクト、ネームスペースプロジェクト"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "収集間隔：5秒"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "統計データ：5分、1時間"
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
              children: "タグ名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "備考"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "nodeName"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ノード名"
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
              children: "フィールド名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "単位"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "備考"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "allocatable_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ミリコア"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ノード割り当て可能なCPU量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "allocatable_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ノード割り当て可能なメモリ量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "allocatable_pods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ノード割り当て可能なPod数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "limit_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ミリコア"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ノードCPU Limit合計"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "limit_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ノードメモリLimit合計"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "pods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ノードPodの総個数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "request_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ミリコア"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ノードCPU Request合計"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "request_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ノードメモリRequest合計"
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
        children: ["Kubernetesイベント(", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_event"
        }), ") 指標"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kube_event"
        }), "カテゴリは、クラスタープロジェクトの場合は、クラスター全体を対象としてデータを収集し、ネームスペースプロジェクトの場合は、ネームスペースで発生したイベントのみ収集します。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "対象：クラスタープロジェクト、ネームスペースプロジェクト"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "収集間隔：5秒"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "統計データ：5分、1時間"
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
              children: "タグ名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "備考"
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
              children: "種類"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "イベントが発生したオブジェクトの種類"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "オブジェクト名"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "イベントが発生したKubernetesオブジェクト名"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "namespace"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ネームスペース名"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "イベントが発生したネームスペース"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "reason"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "イベント発生理由"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "type"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "イベントタイプ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "WarningまたはNormal"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "uid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "UID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "イベントが発生したオブジェクト"
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
              children: "フィールド名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "単位"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "備考"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "action"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "文字列"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "アクション名"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "イベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "event_time"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "イベント初期発生TimeStamp"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "first_timestamp"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "イベント初期発生時間"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "last_timestamp"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "イベント最終発生時間"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "message"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "文字列"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "イベントメッセージ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "reasonFiled"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "文字列"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "イベントReason"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "reporting_component"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "文字列"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "現在のイベントを報告するコンポーネント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "reporting_instance"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "文字列"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "現在のイベントを報告するインスタンス"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "series_last_observed_time"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
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
        children: ["Kubernetesクラスター(", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_stat"
        }), ") 指標"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kube_stat"
        }), "カテゴリは、クラスタープロジェクトのクラスター全体を対象として収集し、ネームスペースプロジェクトは、そのネームスペースに関連するオブジェクトのみ対象に収集します。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "対象：クラスタープロジェクト、ネームスペースプロジェクト"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "収集間隔：5秒"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "統計データ：5分、1時間"
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
              children: "タグ名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "備考"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "kube_stat"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "固定値"
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
              children: "フィールド名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "単位"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "備考"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ミリコア"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "クラスター全体のコア数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "クラスタープロジェクトOnly"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_ephemeral-storage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "クラスター全体の割り当て可能なephemeral storage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "クラスタープロジェクトOnly"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_hugepages-1gi"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "クラスター全体の割り当て可能なhugepages-1Gi"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "クラスタープロジェクトOnly"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_hugepages-2mi"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "クラスター全体の割り当て可能なhugepages-2Mi"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "クラスタープロジェクトOnly"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "クラスタ全体の割り当て可能なメモリ"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "クラスタープロジェクトOnly"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_pods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "割り当て可能なPod数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "available_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "PhaseがRunning状態のPodの数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "desired_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "整数"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "metadata.ownerReferences"
              }), "なしで配布されたPod数とクバネティスオブジェクト(ReplicaSet, Daemonset, StatefulSet)に定義されたDesired Pod数の合計"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "kubectl get pods -A"
              }), "で参照したPod数と同じ"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "nodes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ノード数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "pod_phase_Pending"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "PendingステータスPod数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "pod_phase_Running"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Running状態Pod数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "running_containers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Runningコンテナ数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "stopped_containers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Stoppedコンテナ数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_available_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "割り当て可能なCPUの合計"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_available_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "割り当て可能なMemory合計"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_limit_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ミリコア"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Limit CPU合計"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_limit_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Limit Memory合計"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_request_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ミリコア"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Request CPU合計"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_request_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Request Memory合計"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "unavailable_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "PhaseがRunning状態ではない(Pending, Failed, Succedded) Pod数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "waiting_containers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Waiting Container数"
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
        }), ") 指標"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kube_pod"
        }), "カテゴリは、Podに設定されているすべてのユーザー定義ラベルをタグとして収集します。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "対象：マスター(クラスター) プロジェクト、ネームスペースプロジェクト"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "収集間隔：5秒"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "統計データ：5分"
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
              children: "タグ名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "備考"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "agentOid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ノードエージェント固有ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ユニーク値"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "agentPcode"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "プロジェクトコード"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ユニーク値"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "command"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "実行コマンド"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerIds"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Podに属しているコンテナID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerIdsCount"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "containerIdsの個数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerKeys"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Podに属しているコンテナIDのハッシュ値"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerKeysCount"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "containerKeysの個数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "DaemonSet"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "PodのDaemonSet名"
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
              children: "Podのラベルk8s-appに対する値"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "microOid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Podのコンテナ内部アプリケーションで実行中のエージェントのid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "microOids"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Podの複数コンテナ内部のアプリケーションで実行中のエージェントの複数id"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "microOidsCount"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "microOidsの個数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod名"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "onames"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Podのコンテナ内部アプリケーションで実行中のエージェントの名称"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "onamesCount"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "onamesの個数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "podName"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod名"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "namespace"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Podが所属するネームスペース"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "namespaceHash"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Podが所属するネームスペースハッシュ値"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "replicaSetHash"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "PodのReplicaSetハッシュ値"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "replicaSetName"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "PodのReplicaSet名"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap_project"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Podが属するWhaTapプロジェクト名"
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
              children: "フィールド名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "単位"
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
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoReadBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Block I/O Read Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod全体ブロックデバイスの1秒あたり読み込みバイトの合計"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_riops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoReadIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Block I/O Read IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod全体ブロックデバイスの1秒当たり読み込み件数の合計"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_wbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoWriteBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Block I/O Write Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod全体ブロックデバイスの1秒あたり書き込みバイトの合計"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_wiops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoWriteIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Block I/O Write IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod全体ブロックデバイスの1秒当たり書き込み件数の合計"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_limit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU Limit基準CPUの全体使用率"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU Limit基準CPUの全体使用率"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_quota_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuLimitByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Limit by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["ノードCPUに対するPod CPU Limit割当量", (0,jsx_runtime.jsx)("br", {}), "Limit未設定の場合、Podが実行中のノードのCPU全体コアがパーセントで表示される。"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_sys"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuSysByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Sys Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "ノードCPUに対するPod CPU System使用率"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_throttledperiods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuThrottledCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Throttling Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Throttled件数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_throttledtime"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "ナノ秒"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuThrottledTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Throttling Time"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Throttled時間"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_total"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "ノードCPUに対するPod CPU使用率"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_total_milli"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "ミリコア"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuTotUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage (millicore)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU使用量"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_user"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuUserByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU User Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "ノードCPUに対するPod CPU User使用率"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "ミリコア"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Request (core)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPUリクエスト"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage by Request (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Pod CPUリクエストに対する使用率", (0,jsx_runtime.jsx)("br", {}), "= cpu_total_milli / cpu_request * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalcache"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotCache"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total Cache (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod全体のキャッシュサイズ"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalpgfault"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "回数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotPageFaultCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total Page Fault Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod PageFault回数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalrss"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotRss"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total RSS (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod RSSメモリ全体サイズ"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalrss_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotRssByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total RSS by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod RSSメモリ全体使用率"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalunevictable"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotUnevictable"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total Unevictable (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Unevictable Memory全体サイズ"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_usage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Usage (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Podメモリ使用量"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_working_set"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWs"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Working Set (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Podメモリworking set", (0,jsx_runtime.jsx)("br", {}), "= mem_usage - inactive file"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "memory_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Request (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Podメモリー要求量"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "memory_limit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Limit (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "PodメモリLimit割当量"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "memory_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Working Set By Request (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Podメモリの要求基準のWorking Set使用量"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "memory_per_limit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "パーセント"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod MMemory Working Set By Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "PodメモリのLimit基準のWorking Set使用量"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod全体ブロックデバイスの1秒あたり読み込みバイトの合計"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rdropped"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxDropped"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive Dropped"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Podネットワーク受信のdropped件数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rerror"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxError"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive Error"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Podネットワーク受信エラー件数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_riops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Podネットワーク受信件数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxByes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Podネットワーク送信データサイズ"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wdropped"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxDropped"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit Dropped"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Podネットワーク送信dropped件数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_werror"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxError"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit Error"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Podネットワーク送信エラー件数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wiops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Podネットワーク送信件数"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "phase"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "文字列"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Phase"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Current Phase"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Podライフサイクル", (0,jsx_runtime.jsx)("br", {}), " ① PENDING", (0,jsx_runtime.jsx)("br", {}), " ② RUNNING ", (0,jsx_runtime.jsx)("br", {}), "③ SUCCEEDED ", (0,jsx_runtime.jsx)("br", {}), "④ FAILED ", (0,jsx_runtime.jsx)("br", {}), "⑤ UNKNOWN"]
            })
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "次のフィールドは内部用に予約されています。"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "フィールド名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "備考"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "kube_sless_normal"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Kubernetes情報イベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "kube_sless_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Kubernetes警告イベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sful_critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "apm重要ステータスベースのイベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sful_info"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "apm情報ステータスベースのイベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sful_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "apm警告ステータスベースのイベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sless_critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "apm深刻状態イベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sless_info"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "apm情報状態イベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sless_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "apm警告状態イベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sful_critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "メトリクス重要状態ベースのイベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sful_info"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "メトリクス情報ステータスベースのイベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sful_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "メトリクス警告ステータスベースのイベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sless_critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "メトリクス重要状態イベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sless_info"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "メトリクス情報状態イベント発生件数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sless_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "メトリクス警告状態イベント発生件数"
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
        children: ["Kubernetes Pod統計(", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_pod_stat"
        }), ") 指標"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kube_pod_stat"
        }), "カテゴリのクラスタープロジェクトは、クラスター全体のデータを収集し、ネームスペースプロジェクトは、ネームスペースに所属するPodのデータのみ収集します。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "対象：クラスタープロジェクト、ネームスペースプロジェクト"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "収集間隔：5秒"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "統計データ：5分、1時間"
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
              children: "タグ名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "備考"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "kind"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "種類"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "クラスタープロジェクトの場合は、clusterに固定値を持ち、ネームスペースプロジェクトの場合は、DeploymentまたはReplicaSet のみ収集します。"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Kubernetesリソース名"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "クラスタープロジェクトにはname値がなく、ネームスペースプロジェクトはDeploymentまたはReplicaSetの名前です。"
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
              children: "フィールド名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "単位"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "備考"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "available_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "PhaseがRunning状態のPodの数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "desired_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "整数"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "metadata.ownerReferences"
              }), "なしで配布されたPod数とクバネティスオブジェクト(ReplicaSet, Daemonset, StatefulSet)に定義されたDesired Pod数の合計"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "kubectl get pods -A"
              }), "で参照したPod数と同じ"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "limit_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ミリコア"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU Limit使用量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "limit_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Memory Limit使用量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "request_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ミリコア"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU Request使用量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "request_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "バイト"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Memory Request使用量"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "running_container"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Running Container数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "stopped_container"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Stopped Container数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "waiting_container"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Waiting Container数"
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
        children: ["Kubernetes Horizontal Pod Autoscaler(HPA)(", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_hpa_stat"
        }), ") 指標"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "WhaTapで使用するCluster RoleにHPAが追加されると、指標収集が開始されます。"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "対象：クラスタープロジェクト"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "収集間隔：5秒"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "統計データ：5分、1時間"
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
              children: "タグ名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "備考"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HPA名"
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
              children: "フィールド名"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "単位"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "備考"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "currentReplicas"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "現在のレプリカ数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "desiredReplicas"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Desiredレプリカ数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "lastScaleTime"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "最後にスケールが変更されたTimeStamp"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "maxReplicas"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "最大レプリカ数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "minReplicas"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "整数"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "最小レプリカ数"
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/kubernetes/metrics-kubernetes.mdx


const metrics_kubernetes_frontMatter = {
	id: 'metrics-kubernetes',
	title: 'Kubernetes指標',
	description: 'Kubernetesで収集される指標について説明します。',
	keywords: [
		'メトリクス',
		'Kubernetes',
		'Kubernetesモニタリング'
	],
	isTranslationMissing: false
};
const metrics_kubernetes_contentTitle = undefined;
const metadata = {
  "id": "kubernetes/metrics-kubernetes",
  "title": "Kubernetes指標",
  "description": "Kubernetesで収集される指標について説明します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/kubernetes/metrics-kubernetes.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/metrics-kubernetes",
  "permalink": "/ja/kubernetes/metrics-kubernetes",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/metrics-kubernetes.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "metrics-kubernetes",
    "title": "Kubernetes指標",
    "description": "Kubernetesで収集される指標について説明します。",
    "keywords": [
      "メトリクス",
      "Kubernetes",
      "Kubernetesモニタリング"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "メトリクス",
    "permalink": "/ja/kubernetes/metrics-intro"
  },
  "next": {
    "title": "メトリクス照会",
    "permalink": "/ja/kubernetes/metrics-search"
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