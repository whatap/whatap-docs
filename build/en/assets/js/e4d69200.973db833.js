"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[74027],{

/***/ 48428:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_metrics-kubernetes.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Container(<code>container</code>) metric",
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
  "value": "Kubernetes node (<code>kube_node</code>) metric",
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
  "value": "Kubernetes event (<code>kube_event</code>) metric",
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
  "value": "Kubernetes Cluster (<code>kube_stat</code>) metric",
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
  "value": "Pod (<code>kube_pod</code>) metric",
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
  "value": "Kubernetes Pod Statistics (<code>kube_pod_stat</code>) metric",
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
  "value": "Kubernetes Horizontal Pod Autoscaler (HPA) (<code>kube_hpa_stat</code>) metric",
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
      children: "Some metrics collected by Kubernetes are the same as those of server and application monitoring."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "container",
        children: ["Container(", (0,jsx_runtime.jsx)(_components.code, {
          children: "container"
        }), ") metric"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "container"
        }), " category collects all custom labels set on the container's pods as tags."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Target: Cluster project, Namespace project"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Collection interval: 5 seconds"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Statistical data: 5 minutes"
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
              children: "Tag name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "Remarks"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "agentOid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Node agent's unique ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Unique value"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "agentPcode"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "pcode"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Unique value"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "command"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Execution command"
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
              children: "Container ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Unique value"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerKey"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Container key"
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
              children: "Time stamp generated by the container"
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
              children: "Container image name"
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
              children: "Image hash value"
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
              children: "Image ID"
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
              children: "Value for the pod's label k8s-app"
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
              children: "Unique ID of the WhaTap APM agent installed in the container"
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
              children: "Container name"
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
              children: "Namespace to which the container belongs"
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
              children: "Hash value of the namespace to which the container belongs"
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
              children: "Unique ID of OKIND specified in the WhaTap APM agent installed in the container"
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
              children: "Name of OKIND specified in the WhaTap APM agent installed in the container"
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
              children: "Name of the WhaTap APM agent installed in the container"
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
              children: "Unique ID of the node agent on which the container is running"
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
              children: "Node name on which the container is running"
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
              children: "Hash value of the container's Pod"
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
              children: "Container's Pod name"
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
              children: "Hash value of the container's replica set"
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
              children: "Name of the container's replica set"
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
              children: "Name of the WhaTab project to which the container belongs"
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
              children: "Field name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Unit"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Shortname, Name, Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_rbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoReadBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Block I/O Read Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of bytes read per second across all block devices in the container"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_riops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoReadIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Block I/O Read IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of counts read per second across all block devices in the container"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_wbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoWriteBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Block I/O Write Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of bytes written per second across all block devices in the container"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_wiops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoWriteIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Block I/O Write IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of counts written per second across all block devices in the container"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_quota"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Usage by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU utilization by limit"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_quota"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Millicore"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Limit (core)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Container CPU Limit Quota ", (0,jsx_runtime.jsx)("br", {}), " If the limit is not set, the total CPU cores of the node where the container is running appears in millicores."]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_quota_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuLimitByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Limit by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Container CPU Limit Quota against Node CPU", (0,jsx_runtime.jsx)("br", {}), " If the limit is not set, the total CPU cores of the node where the container is running appears in percentage."]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_sys"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuSysByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Sys Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU System Utilization against Node CPU"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_throttledperiods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuThrottledCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Throttling Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Throttled Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_throttledtime"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Nanosecond"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuThrottledTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Throttling Time"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Throttled Time"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_total"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Utilization against Node CPU"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_total_milli"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Millicore"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuTotUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Usage (millicore)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Usage"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_user"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuUserByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU User Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU User Utilization against Node CPU"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Millicore"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Request (core)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Request"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU Usage by Request (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Utilization against Container CPU Request", (0,jsx_runtime.jsx)("br", {}), "= cpu_total_milli/cpu_request * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_failcnt"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemFailCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Failure Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Limit reached Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_limit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Limit (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Limit Size"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_maxusage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemMaxUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Max Usage (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Recorded Value for Container Memory Maximum Usage"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWsByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Working Set by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Working Set Usage based on Container Memory Limit", (0,jsx_runtime.jsx)("br", {}), "= mem_usage/mem_limit * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalcache"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotCache"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total Cache (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container's Total Cache Size"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalpgfault"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotPageFaultCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total Page Fault Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container's Page Fault Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalrss"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotRss"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total RSS (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container's Total RSS Memory Size"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalrss_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotRssByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total RSS By Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container's Total RSS Memory Utilization"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalunevictable"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotUnevictable"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Total Unevictable (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container's Total Unevictable Memory Size"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_usage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Usage (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Usage"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_working_set"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWs"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Working Set (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Container memory working set", (0,jsx_runtime.jsx)("br", {}), "= mem_usage - inactive file"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_working_set_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWsByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Working Set by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Working Set Usage based on Container Memory Limit", (0,jsx_runtime.jsx)("br", {}), "= mem_usage/mem_limit * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Request (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Request Size"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWsByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Memory Working Set by Request (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Working Set Usage based on Container Memory Request", (0,jsx_runtime.jsx)("br", {}), "= mem_working_set / mem_request * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of bytes read per second across all block devices in the container"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rdropped"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxDropped"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive Dropped"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive Dropped Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rerror"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxError"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive Error"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive Error Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_riops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Receive Error Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxByes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit Data Size"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wdropped"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxDropped"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit Dropped"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit Dropped Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_werror"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxError"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit Error"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit Error Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wiops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Network Transmit Error Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "node_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConNodeCpu"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Work Node CPU Usage (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU Usage of the Node where the container is running"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "node_mem"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConNodeMem"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Work Node Memory Usage (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Memory Usage of the Node where the container is running"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "phase"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "String"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Pod lifecycle ", (0,jsx_runtime.jsx)("br", {}), " ① PENDING", (0,jsx_runtime.jsx)("br", {}), " ② RUNNING ", (0,jsx_runtime.jsx)("br", {}), "③ SUCCEEDED ", (0,jsx_runtime.jsx)("br", {}), "④ FAILED ", (0,jsx_runtime.jsx)("br", {}), "⑤ UNKNOWN"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "restart_count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConRestartCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Restart Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Restart Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "state"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConState"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Current State"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Container State Code", (0,jsx_runtime.jsx)("br", {}), "① RUNNING = 114", (0,jsx_runtime.jsx)("br", {}), "② PAUSE = 112", (0,jsx_runtime.jsx)("br", {}), "③ RESTARTING = 101", (0,jsx_runtime.jsx)("br", {}), "④ OOMKILLED = 111M", (0,jsx_runtime.jsx)("br", {}), "⑤ DEAD = 100", (0,jsx_runtime.jsx)("br", {}), "⑥ WAITING = 119"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "status"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "String"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ConStatus"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container Current Status"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Container State Information", (0,jsx_runtime.jsx)("br", {}), "① running: Displays the uptime information", (0,jsx_runtime.jsx)("br", {}), "② waiting/terminated: Displays the reason of the state"]
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "kube_node",
        children: ["Kubernetes node (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_node"
        }), ") metric"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_node"
        }), " category collects all custom labels set on the node as tags."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Target: Cluster project, Namespace project"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Collection interval: 5 seconds"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Statistical data: 5 minutes, 1 hour"
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
              children: "Tag name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "nodeName"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Node name"
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
              children: "Field name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Unit"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "allocatable_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Millicore"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU size that can be assigned to node"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "allocatable_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Memory size that can be assigned to node"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "allocatable_pods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of Pods that can be assigned to node"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "limit_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Millicore"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of node CPU limits"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "limit_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of node memory limits"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "pods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Total number of node Pods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "request_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Millicore"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of node CPU requests"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "request_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of node memory requests"
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
        children: ["Kubernetes event (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_event"
        }), ") metric"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_event"
        }), " category collects cluster-wide data for cluster projects, and collects data only for events that occurred in the namespace for namespace projects."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Target: Cluster project, Namespace project"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Collection interval: 5 seconds"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Statistical data: 5 minutes, 1 hour"
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
              children: "Tag name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
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
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Object type on which the event occurred"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Object name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Kubernetes object name on which the event occurred"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "namespace"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Namespace name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Namespace on which the event occurred"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "reason"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Event occurrence cause"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "type"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Event type"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Warning or normal"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "uid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "UID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Object on which the event occurred"
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
              children: "Field name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Unit"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "action"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "String"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Action name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Event occurrence count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "event_time"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Time stamp for the first event"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "first_timestamp"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "First event occurrence time"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "last_timestamp"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Last event occurrence time"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "message"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "String"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Event Message"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "reasonFiled"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "String"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Event reason"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "reporting_component"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "String"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Component that reports the current event"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "reporting_instance"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "String"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Instance that reports the current event"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "series_last_observed_time"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Series last observed time"
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
        children: ["Kubernetes Cluster (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_stat"
        }), ") metric"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_stat"
        }), " category collects all the clusters for the cluster project, and the namespace projects collects objects associated with the namespace."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Target: Cluster project, Namespace project"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Collection interval: 5 seconds"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Statistical data: 5 minutes, 1 hour"
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
              children: "Tag name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "kube_stat"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fixed value"
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
              children: "Field name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Unit"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Millicore"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of cluster cores"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cluster project only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_ephemeral-storage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Ephemeral storage that can be allocated to all clusters"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cluster project only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_hugepages-1gi"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hugepages-1Gi that can be allocated to all clusters"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cluster project only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_hugepages-2mi"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hugepages-2Gi that can be allocated to all clusters"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cluster project only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Memory that can be allocated to all clusters"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Cluster project only"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "alloctable_pods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of pods that can be allocated"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "available_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of pods whose phase is in Running state"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "desired_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "Positive number"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Sum of the number of pods deployed without ", (0,jsx_runtime.jsx)(_components.code, {
                children: "metadata.ownerReferences"
              }), " and the number of desired pods defined in Kubernetes objects (ReplicaSet, Daemonset, StatefulSet)"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: ["Same as the number of pods retrieved by ", (0,jsx_runtime.jsx)(_components.code, {
                children: "kubectl get pods -A"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "nodes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of nodes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "pod_phase_Pending"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of pending pods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "pod_phase_Running"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of running pods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "running_containers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of running containers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "stopped_containers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of stopped containers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_available_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Total allocatable CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_available_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Total sum of allocatable memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_limit_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Millicore"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Total sum of limit CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_limit_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Total sum of limit memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_request_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Millicore"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Total sum of request CPU"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "total_request_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Total sum of request memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "unavailable_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of pods whose phase is not in Running state (Pending, Failed, Succedded)"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "waiting_containers"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Waiting container count"
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
        children: ["Pod (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_pod"
        }), ") metric"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_pod"
        }), " category collects all custom labels set on the Pod as tags."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Target: Master (cluster) project, Namespace project"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Collection interval: 5 seconds"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Statistical data: 5 minutes"
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
              children: "Tag name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "agentOid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Node agent's unique ID"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unique value"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "agentPcode"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "pcode"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unique value"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "command"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Execution command"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerIds"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Container ID that belongs to the pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerIdsCount"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of containerIds"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerKeys"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hash value for the container ID that belongs to the pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "containerKeysCount"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of containerKeys"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "DaemonSet"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "DaemonSet name of the pod"
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
              children: "Value for the pod's label k8s-app"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "microOid"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ID of the agent running on the applications inside the pod's container."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "microOids"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Multiple IDs of the agents running on applications inside multiple containers in the pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "microOidsCount"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of microOids"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "onames"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Name of the agent running on the applications inside the pod's container."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "onamesCount"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of onames"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "podName"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "namespace"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Namespace to which the Pod belongs"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "namespaceHash"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hash value of the namespace to which the Pod belongs"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "replicaSetHash"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Hash value of ReplicaSet of the Pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "replicaSetName"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ReplicaSet name of the Pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "whatap_project"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Name of the WhaTab project to which the Pod belongs"
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
              children: "Field name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Unit"
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
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoReadBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Block I/O Read Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of bytes read per second across all block devices in the Pod"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_riops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoReadIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Block I/O Read IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of cases read per second across all block devices in the Pod"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_wbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoWriteBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Block I/O Write Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of bytes written per second across all block devices in the Pod"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "blkio_wiops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "IoWriteIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Block I/O Write IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of cases written per second across all block devices in the Pod"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_limit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU utilization by limit"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Container CPU utilization by limit"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_quota_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuLimitByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Limit by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Pod CPU limit quota against node CPU", (0,jsx_runtime.jsx)("br", {}), "If the limit is not set, the total CPU cores of the node where the Pod is running appears in percentage."]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_sys"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuSysByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Sys Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU System Utilization against Node CPU"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_throttledperiods"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuThrottledCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Throttling Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Throttled Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_throttledtime"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Nanosecond"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuThrottledTime"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Throttling Time"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Throttled Time"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_total"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Utilization against Node CPU"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_total_milli"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Millicore"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuTotUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage (millicore)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU usage"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_user"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuUserByNode"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU User Usage by Node (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU User Utilization against Node CPU"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Millicore"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Request (core)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Request"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "cpu_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CpuByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod CPU Usage by Request (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Utilization against Pod CPU Request", (0,jsx_runtime.jsx)("br", {}), "= cpu_total_milli/cpu_request * 100"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalcache"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotCache"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total Cache (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Total Pod Cache Size"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalpgfault"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotPageFaultCnt"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total Page Fault Count"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod's Page Fault Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalrss"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotRss"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total RSS (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod's Total RSS Memory Size"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalrss_percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotRssByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total RSS by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod's Total RSS Memory Utilization"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_totalunevictable"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemTotUnevictable"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Total Unevictable (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod's Total Unevictable Memory Size"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_usage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemUsage"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Usage (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Usage"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "mem_working_set"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemWs"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Working Set (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Pod Memory working set", (0,jsx_runtime.jsx)("br", {}), "= mem_usage - inactive file"]
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "memory_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Request (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod memory requests"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "memory_limit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Limit (byte)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod memory limit quota"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "memory_per_request"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemByRequest"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Working Set by Request (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Working Set usage based on the Pod memory request"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "memory_per_limit"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Percent"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "MemByLimit"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Memory Working Set by Limit (%)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Working Set usage based on the Pod memory limit"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxBytes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Sum of bytes read per second across all block devices in the Pod"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rdropped"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxDropped"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive Dropped"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive Dropped Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_rerror"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxError"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive Error"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive Error Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_riops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetRxIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Receive Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wbps"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxByes"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit Byte"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit Data Size"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wdropped"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxDropped"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit Dropped"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit Dropped Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_werror"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxError"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit Error"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit Error Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "network_wiops"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "NetTxIops"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit IOPS"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Network Transmit Count"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "phase"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "3",
              children: "String"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Phase"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "Pod Current Phase"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Pod lifecycle ", (0,jsx_runtime.jsx)("br", {}), " ① PENDING", (0,jsx_runtime.jsx)("br", {}), " ② RUNNING ", (0,jsx_runtime.jsx)("br", {}), "③ SUCCEEDED ", (0,jsx_runtime.jsx)("br", {}), "④ FAILED ", (0,jsx_runtime.jsx)("br", {}), "⑤ UNKNOWN"]
            })
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The following fields are reserved for internal use."
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Field name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "kube_sless_normal"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of Kubernetes informative events"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "kube_sless_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of Kubernetes warning events"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sful_critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of APM events that are critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sful_info"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "APM informative event count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sful_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "APM warning event count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sless_critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of APM events that are not critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sless_info"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of APM events that are not informative"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "micro_sless_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of APM events that are not for warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sful_critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of events that are critical in the metric"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sful_info"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of events that are informative in the metric"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sful_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of events that are for warning in the metric"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sless_critical"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of events that are not critical in the metric"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sless_info"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of events that are not informative in the metric"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "sless_warning"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of events that are not for warning in the metric"
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
        children: ["Kubernetes Pod Statistics (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_pod_stat"
        }), ") metric"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_pod_stat"
        }), " category cluster project collects data for all clusters, and the namespace project collects data only for pods that belong to the namespace."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Target: Cluster project, Namespace project"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Collection interval: 5 seconds"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Statistical data: 5 minutes, 1 hour"
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
              children: "Tag name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "kind"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Type"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The cluster project has cluster as the fixed value, and the namespace projects collect only for Deployment or ReplicaSet."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Kubernetes resource name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The cluster project has no name value and the namespace projects have the name for Deployment or ReplicaSet."
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
              children: "Field name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Unit"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "available_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Number of pods whose phase is in Running state"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "desired_pod"
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "Positive number"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Sum of the number of pods deployed without ", (0,jsx_runtime.jsx)(_components.code, {
                children: "metadata.ownerReferences"
              }), " and the number of desired pods defined in Kubernetes objects (ReplicaSet, Daemonset, StatefulSet)"]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsxs)(_components.td, {
              children: ["Same as the number of pods retrieved by ", (0,jsx_runtime.jsx)(_components.code, {
                children: "kubectl get pods -A"
              })]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "limit_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Millicore"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU Limit Usage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "limit_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Memory Limit Usage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "request_cpu"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Millicore"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "CPU Request Usage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "request_memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Byte"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Memory Request Usage"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "running_container"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Running Container Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "stopped_container"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Stopped Container Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "waiting_container"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Waiting container count"
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
        children: ["Kubernetes Horizontal Pod Autoscaler (HPA) (", (0,jsx_runtime.jsx)(_components.code, {
          children: "kube_hpa_stat"
        }), ") metric"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Metric collection starts only when HPA is added to the ClusterRole used by WhaTap."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Target: Cluster project"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Collection interval: 5 seconds"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Statistical data: 5 minutes, 1 hour"
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
              children: "Tag name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,jsx_runtime.jsx)(_components.tbody, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "name"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "HPA name"
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
              children: "Field name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Unit"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "currentReplicas"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Current Replica Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "desiredReplicas"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Desired Replica Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "lastScaleTime"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Last scaled TimeStamp"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "maxReplicas"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Maximum Replica Count"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "minReplicas"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Positive number"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Minimum Replica Count"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/kubernetes/metrics-kubernetes.mdx


const metrics_kubernetes_frontMatter = {
	id: 'metrics-kubernetes',
	title: 'Kubernetes metrics',
	description: 'It guides you to the metrics collected by Kubernetes.',
	tags: [
		'Metrics',
		'Kubernetes',
		'Kubernetes Monitoring'
	]
};
const metrics_kubernetes_contentTitle = undefined;
const metadata = {
  "id": "kubernetes/metrics-kubernetes",
  "title": "Kubernetes metrics",
  "description": "It guides you to the metrics collected by Kubernetes.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/kubernetes/metrics-kubernetes.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/metrics-kubernetes",
  "permalink": "/en/kubernetes/metrics-kubernetes",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/metrics-kubernetes.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Metrics",
      "permalink": "/en/tags/metrics"
    },
    {
      "inline": true,
      "label": "Kubernetes",
      "permalink": "/en/tags/kubernetes"
    },
    {
      "inline": true,
      "label": "Kubernetes Monitoring",
      "permalink": "/en/tags/kubernetes-monitoring"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "metrics-kubernetes",
    "title": "Kubernetes metrics",
    "description": "It guides you to the metrics collected by Kubernetes.",
    "tags": [
      "Metrics",
      "Kubernetes",
      "Kubernetes Monitoring"
    ]
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "Metrics",
    "permalink": "/en/kubernetes/metrics-intro"
  },
  "next": {
    "title": "Metrics Search",
    "permalink": "/en/kubernetes/metrics-search"
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