"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[45230],{

/***/ 61699:
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
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
    type: "note",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
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
          children: "와탭 쿠버네티스 에이전트 1.5.6 버전 이상이 필요합니다."
        }), "\n"]
      }), "\n"]
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



/***/ }),

/***/ 43440:
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
          children: "분류"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
          children: "메트릭"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
          children: "설명"
        })]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          rowSpan: "3",
          children: "API GET 요청"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "분당 GET 요청 현황"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 의 GET 요청에 대한 분당 요청 수"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "초당 GET 요청 수 추이"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 의 GET 요청에 대한 초당 요청 수 추이"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "Resource & Subresource 별 분당 GET 요청 수 추이"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 에 들어온 GET 요청의 Resource 와 Subresource 별 분당 요청 수 추이"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          rowSpan: "3",
          children: "API POST 요청"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "분당 POST 요청 현황"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 의 POST 요청에 대한 분당 요청 수"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "초당 POST 요청 수 추이"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 의 POST 요청에 대한 초당 요청 수 추이"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "Resource & Subresource 별 POST 분당 요청 수 추이"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 에 들어온 POST 요청에 대해  Resource 와 Subresource 별로 그룹화 한 분당 요청 수 추이"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          rowSpan: "9",
          children: "API 응답 코드별 요청"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 2xx ] 분당 응답 요청 현황"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 요청 중 200 이상 300 미만의 응답 코드가 내려진 요청 수에 대한 분당 현황"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 2xx ] 분당 응답 코드별 요청 수 추이"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 요청 중 200 이상 300 미만의 응답 코드가 내려진 요청 수에 대한 응답 코드별 분당 현황"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 2xx ] 분당 Resource & Subresource 별 요청 수 추이"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 요청 중 200 이상 300 미만의 응답 코드가 내려진 요청에 대해 Resource 와 Subresource 별로 그룹화 한 분당 요청 수 추이"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 3xx ] 분당 응답 요청 현황"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 요청 중 300 이상 400 미만의 응답 코드가 내려진 요청 수에 대한 분당 현황"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 3xx ] 분당 응답 코드별 요청 수 추이"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 요청 중 300 이상 400 미만의 응답 코드가 내려진 요청 수에 대한 응답 코드별 분당 현황"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 3xx ] 분당 Resource & Subresource 별 요청 수 추이"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 요청 중 300 이상 400 미만의 응답 코드가 내려진 요청에 대해 Resource 와 Subresource 별로 그룹화 한 분당 요청 수 추이"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 400~ ] 분당 응답 요청 현황"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 요청 중 400 이상의 응답 코드가 내려진 요청 수에 대한 분당 현황"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 400~ ] 분당 응답 코드별 요청 수 추이"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 요청 중 400 이상의 응답 코드가 내려진 요청 수에 대한 응답 코드별 분당 현황"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 400~ ] 분당 Resource & Subresource 별 요청 수 추이"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserver 요청 중 400 이상의 응답 코드가 내려진 요청에 대해 Resource 와 Subresource 별로 그룹화 한 분당 요청 수 추이"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          rowSpan: "2",
          children: "Go Metrics"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "고루틴 수"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "현재 존재하는 고루틴 수"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "스레드 수"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "현재 존재하는 OS 스레드 수"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "현재 실행 중인 요청 수 (1초)"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "최근 1초 내 실행 중인 요청 수"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "데이터 수집 시 kube-apiserver 에서 1초 내에 진행되고 있던 요청 수"
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



/***/ }),

/***/ 84038:
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
    admonition: "admonition",
    code: "code",
    em: "em",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 쿠버네티스 에이전트 설치 시 다운로드한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "yaml"
      }), " 파일을 다음 안내에 따라 수정해 kube-apiserver 모니터링을 활성화하세요."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "whatap-master-agent"
          }), " deployment의 spec 하위에 kube-apiserver 모니터링을 위한 에이전트 컨테이너 spec을 추가하세요."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-yaml",
            children: "containers:\r\n  - name: whatap-control-plane-helper\r\n    image: whatap/kube_mon\r\n    imagePullPolicy: Always\r\n    ports:\r\n      - containerPort: 9496\r\n    command: [\"/data/agent/master/whatap_control_plane_helper\"]\r\n    args: [\"-collect_control_plane_monitoring_enabled=true\"]\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "다음 예시를 참조하세요."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-yaml",
            metastring: "{17-23}",
            children: "apiVersion: apps/v1\r\nkind: Deployment\r\nmetadata:\r\n  name: whatap-master-agent\r\n  namespace: whatap-monitoring\r\nspec:\r\n  replicas: 1\r\n  selector:\r\n    matchLabels:\r\n      name: whatap-master-agent\r\n  template:\r\n    metadata:\r\n      labels:\r\n        name: whatap-master-agent\r\n    spec:\r\n      containers:\r\n        - name: whatap-control-plane-helper\r\n          image: whatap/kube_mon\r\n          imagePullPolicy: Always\r\n          ports:\r\n            - containerPort: 9496\r\n          command: [\"/data/agent/master/whatap_control_plane_helper\"]\r\n          args: [\"-collect_control_plane_monitoring_enabled=true\"]\r\n        - name: whatap-master-agent\r\n          image: whatap/kube_mon\r\n          imagePullPolicy: Always\r\n          resources:\r\n            requests:\r\n              memory: 300Mi\r\n              cpu: 100m\r\n            limits:\r\n              memory: 350Mi\r\n              cpu: 200m\r\n          ports:\r\n            - containerPort: 6600\r\n          command: ['/bin/entrypoint.sh']\r\n          env:\r\n            - name: WHATAP_LICENSE\r\n              value: \"xxxxxxxx-12345xxxxxx-x00e000000xxx8\"\r\n            - name: WHATAP_HOST\r\n              value: \"13.124.11.223/13.209.172.35\"\r\n            - name: WHATAP_PORT\r\n              value: \"6600\"\r\n            - name: WHATP_MEM_LIMIT\r\n              valueFrom:\r\n                resourceFieldRef:\r\n                  containerName: whatap-master-agent\r\n                  resource: limits.memory\r\n          volumeMounts:\r\n            - name: start-script-volume\r\n              mountPath: /bin/entrypoint.sh\r\n              readOnly: true\r\n              subPath: entrypoint.sh\r\n            - mountPath: /whatap_conf\r\n              name: whatap-config-volume\r\n      volumes:\r\n        - name: start-script-volume\r\n          configMap:\r\n            defaultMode: 0700\r\n            name: master-start-script\r\n        - name: whatap-config-volume\r\n          emptyDir: {}\r\n      serviceAccount: whatap\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "whatap-master-agent"
          }), " deployment의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "whatap-master-agent"
          }), " 컨테이너 spec에서 env 설정에 다음 내용을 추가하세요."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-yaml",
            children: "env:\r\n  - name: collect_control_plane_monitoring_enabled\r\n    value: \"true\"\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "다음 예시를 참조하세요."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-yaml",
            metastring: "{38-39}",
            children: "apiVersion: apps/v1\r\nkind: Deployment\r\nmetadata:\r\n  name: whatap-master-agent\r\n  namespace: whatap-monitoring\r\nspec:\r\n  replicas: 1\r\n  selector:\r\n    matchLabels:\r\n      name: whatap-master-agent\r\n  template:\r\n    metadata:\r\n      labels:\r\n        name: whatap-master-agent\r\n    spec:\r\n      containers:\r\n        - name: whatap-control-plane-helper\r\n          image: whatap/kube_mon\r\n          imagePullPolicy: Always\r\n          ports:\r\n            - containerPort: 9496\r\n          command: [\"/data/agent/master/whatap_control_plane_helper\"]\r\n          args: [\"-collect_control_plane_monitoring_enabled=true\"]\r\n        - name: whatap-master-agent\r\n          image: whatap/kube_mon\r\n          imagePullPolicy: Always\r\n          resources:\r\n            requests:\r\n              memory: 300Mi\r\n              cpu: 100m\r\n            limits:\r\n              memory: 350Mi\r\n              cpu: 200m\r\n          ports:\r\n            - containerPort: 6600\r\n          command: ['/bin/entrypoint.sh']\r\n          env:\r\n            - name: collect_control_plane_monitoring_enabled\r\n              value: \"true\"\r\n            - name: WHATAP_LICENSE\r\n              value: \"xxxxxxxx-12345xxxxxx-x00e000000xxx8\"\r\n            - name: WHATAP_HOST\r\n              value: \"13.124.11.223/13.209.172.35\"\r\n            - name: WHATAP_PORT\r\n              value: \"6600\"\r\n            - name: WHATP_MEM_LIMIT\r\n              valueFrom:\r\n                resourceFieldRef:\r\n                  containerName: whatap-master-agent\r\n                  resource: limits.memory\r\n          volumeMounts:\r\n            - name: start-script-volume\r\n              mountPath: /bin/entrypoint.sh\r\n              readOnly: true\r\n              subPath: entrypoint.sh\r\n            - mountPath: /whatap_conf\r\n              name: whatap-config-volume\r\n      volumes:\r\n        - name: start-script-volume\r\n          configMap:\r\n            defaultMode: 0700\r\n            name: master-start-script\r\n        - name: whatap-config-volume\r\n          emptyDir: {}\r\n      serviceAccount: whatap\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["컨트롤 플레인 모니터링 성능 지표를 수집하기 위해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "whatap"
          }), " ClusterRole에 다음의 권한을 추가하세요."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-yaml",
            children: "rules:\r\n  - nonResourceURLs: [\"/metrics\"]\r\n    verbs: [\"*\"]\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "다음 예시를 참조하세요."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-yaml",
            metastring: "{18-19} ",
            children: "apiVersion: rbac.authorization.k8s.io/v1\r\nkind: ClusterRole\r\nmetadata:\r\n  annotations:\r\n    rbac.authorization.kubernetes.io/autoupdate: \"true\"\r\n  name: whatap\r\n  namespace: whatap-monitoring\r\nrules:\r\n  - apiGroups: [\"*\"]\r\n    resources: [\"namespaces\", \"pods\", \"pods/log\", \"configmaps\",\"services\", \"endpoints\",\"daemonsets\",\"ingresses\",\"deployments\",\"nodes\",\"persistentvolumes\",\"persistentvolumeclaims\", \"events\", \"replicasets\", \"roles\", \"rolebindings\", \"clusterroles\", \"clusterrolebindings\", \"jobs\", \"cronjobs\", \"statefulsets\", \"serviceaccounts\", \"configmaps\", \"storageclasses\", \"horizontalpodautoscalers\" ]\r\n    verbs: [\"get\",\"list\",\"watch\"]\r\n  - apiGroups: [\"\"]\r\n    resources: [\"pods/exec\"]\r\n    verbs: [\"create\"]\r\n  - apiGroups: [\"\"]\r\n    resources: [\"configmaps\"]\r\n    verbs: [\"*\"]\r\n  - nonResourceURLs: [\"/metrics\"]\r\n    verbs: [\"*\"]\r\n---\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "kubectl apply"
        }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "kubectl edit"
        }), " 명령을 통해 kube-apiserver 모니터링을 활성화할 수도 있습니다."]
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



/***/ }),

/***/ 93421:
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



/*>
<InDoc pages="resource-container-list,resource-pod-list,resource-application-list,resource-node-list,">

<ImgLang img='k8s-resource-container-list-add-filter.png' desc='필터 추가' />

</InDoc>
*/


const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang, InDoc} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "필터"
        })
      }), " 옵션 활용 시 원하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-node-list",
        children: "노드 목록"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-pod-list",
        children: "Pod 목록"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-application-list",
        children: "애플리케이션 목록"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "resource-container-list",
        children: "컨테이너 목록"
      }), "을 선택해 조회할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "and"
      }), " 조건을 통해 여러 개의 필터를 적용할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "필터 아이콘",
            src: (__webpack_require__(46817)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "필터"
            })
          }), " 입력 창에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "필터 더하기 아이콘",
            src: (__webpack_require__(86792)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "더하기 아이콘"
            })
          }), " 선택 시 다음과 같이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "필터 추가하기"
            })
          }), " 창이 나타납니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "k8s-resource-container-list-add-filter.png",
          desc: "필터 추가"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "필터 키"
                })
              }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "조건"
                })
              }), "을 선택하세요."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "조건에 맞는 값을 선택하세요."
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["필터 설정 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "적용"
            })
          }), " 버튼을 선택해 해당 필터를 적용하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["여러 개의 필터를 추가하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "필터"
            })
          }), " 입력 창 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "필터 추가하기"
            })
          }), " 창에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "필터 더하기 아이콘",
            src: (__webpack_require__(86792)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "더하기 아이콘"
            })
          }), "을 선택하세요."]
        }), "\n"]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 21856:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28453);
/* harmony import */ var _common_items_k8s_kube_apiserver_common_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61699);
/* harmony import */ var _common_items_k8s_list_filter_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93421);
/* harmony import */ var _common_items_k8s_kube_apiserver_monitoring_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84038);
/* harmony import */ var _common_items_k8s_kube_apiserver_metric_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43440);


const frontMatter = {
	id: 'kube-apiserver-metrics-search',
	title: 'kube-apiserver 메트릭스 조회',
	description: 'kube-apiserver 메트릭스 조회 메뉴를 안내합니다.',
	tags: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'kube-apiserver',
		'컨트롤 플레인',
		'메트릭스 조회'
	],
	toc_max_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/kube-apiserver-metrics-search",
  "title": "kube-apiserver 메트릭스 조회",
  "description": "kube-apiserver 메트릭스 조회 메뉴를 안내합니다.",
  "source": "@site/docs/kubernetes/kube-apiserver-metrics-search.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/kube-apiserver-metrics-search",
  "permalink": "/kubernetes/kube-apiserver-metrics-search",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/kube-apiserver-metrics-search.mdx",
  "tags": [
    {
      "inline": true,
      "label": "쿠버네티스",
      "permalink": "/tags/쿠버네티스"
    },
    {
      "inline": true,
      "label": "쿠버네티스 모니터링",
      "permalink": "/tags/쿠버네티스-모니터링"
    },
    {
      "inline": true,
      "label": "kube-apiserver",
      "permalink": "/tags/kube-apiserver"
    },
    {
      "inline": true,
      "label": "컨트롤 플레인",
      "permalink": "/tags/컨트롤-플레인"
    },
    {
      "inline": true,
      "label": "메트릭스 조회",
      "permalink": "/tags/메트릭스-조회"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "kube-apiserver-metrics-search",
    "title": "kube-apiserver 메트릭스 조회",
    "description": "kube-apiserver 메트릭스 조회 메뉴를 안내합니다.",
    "tags": [
      "쿠버네티스",
      "쿠버네티스 모니터링",
      "kube-apiserver",
      "컨트롤 플레인",
      "메트릭스 조회"
    ],
    "toc_max_heading_level": 2
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "kube-apiserver 대시보드",
    "permalink": "/kubernetes/kube-apiserver-dashboard"
  },
  "next": {
    "title": "네임스페이스 현황",
    "permalink": "/kubernetes/resource-namespace"
  }
};
const assets = {

};







const toc = [..._common_items_k8s_kube_apiserver_common_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "기본 화면 안내",
  "id": "기본-화면-안내",
  "level": 2
}, {
  "value": "필터",
  "id": "필터",
  "level": 3
}, ..._common_items_k8s_list_filter_mdx__WEBPACK_IMPORTED_MODULE_2__/* .toc */ .RM, {
  "value": "kube-apiserver 모니터링 활성화",
  "id": "kube-apiserver-모니터링-활성화",
  "level": 2
}, ..._common_items_k8s_kube_apiserver_monitoring_mdx__WEBPACK_IMPORTED_MODULE_3__/* .toc */ .RM, {
  "value": "kube-apiserver 메트릭",
  "id": "kube-apiserver-메트릭",
  "level": 2
}, ..._common_items_k8s_kube_apiserver_metric_mdx__WEBPACK_IMPORTED_MODULE_4__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 클러스터 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "cluster",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "kube-apiserver 메트릭스 조회"
        })
      })]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_k8s_kube_apiserver_common_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["kube-apiserver는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "컨트롤 플레인"
      }), "(Control Plane) 내/외부 요청을 처리하는 컴포넌트입니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "kube-apiserver 메트릭스 조회"
        })
      }), " 메뉴를 통해 kube-apiserver에서 수집되는 지표의 원본 데이터 정합성(Data Consistency)을 확인할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "기본-화면-안내",
        children: "기본 화면 안내"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-apiserver-metrics-search.png",
        desc: "kube-apiserver 메트릭스 조회"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "kube-apiserver 메트릭스 조회"
          })
        }), " 메뉴는 kube-apiserver 대상으로 수집한 모니터링 원본 데이터를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "category",
          className: "uitext"
        }), "별로 조회하는 기능을 제공합니다. 최근 5분 동안 수집한 데이터가 1분 간격으로 반영됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["상단 왼쪽 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "시간 선택자"
              })
            }), "를 통해 과거 특정 시점의 데이터를 조회할 수 있습니다. 과거 데이터 조회 시 원하는 옵션 선택 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "돋보기 아이콘",
              src: (__webpack_require__(89944)/* ["default"] */ .A) + "",
              width: "28",
              height: "28"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "search",
              className: "uitext"
            }), " 아이콘을 클릭하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["조회할 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "max_count",
              className: "uitext"
            }), "를 설정할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "메트릭스를 필터링해 원본 데이터를 필요에 따라 가공할 수 있습니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["상단 오른쪽 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "download",
              className: "uitext"
            }), " 아이콘을 선택해 원하는 데이터를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "CSV"
            }), " 형식의 파일로 다운로드할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "필터",
        children: "필터"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_k8s_list_filter_mdx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "kube-apiserver-모니터링-활성화",
        children: "kube-apiserver 모니터링 활성화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_k8s_kube_apiserver_monitoring_mdx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "kube-apiserver-메트릭",
        children: "kube-apiserver 메트릭"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_k8s_kube_apiserver_metric_mdx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay, {})]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .R)(),
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

/***/ 89944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgcng9IjQiIGZpbGw9IiMyOTZDRjIiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTguMzIwMiAxNi45MDZDMjAuNzYyNyAxMy43Njc2IDIwLjU0MTYgOS4yMjc4NyAxNy42NTY5IDYuMzQzMTVDMTQuNTMyNyAzLjIxODk1IDkuNDY3MzQgMy4yMTg5NSA2LjM0MzE1IDYuMzQzMTVDMy4yMTg5NSA5LjQ2NzM0IDMuMjE4OTUgMTQuNTMyNyA2LjM0MzE1IDE3LjY1NjlDOS4yMjc4NyAyMC41NDE2IDEzLjc2NzYgMjAuNzYyNyAxNi45MDYgMTguMzIwMkwyMS45NDk0IDIzLjM2MzZMMjMuMzYzNiAyMS45NDk0TDE4LjMyMDIgMTYuOTA2Wk0xNi4yNDI2IDE2LjI0MjZDMTMuODk5NSAxOC41ODU4IDEwLjEwMDUgMTguNTg1OCA3Ljc1NzM2IDE2LjI0MjZDNS40MTQyMSAxMy44OTk1IDUuNDE0MjEgMTAuMTAwNSA3Ljc1NzM2IDcuNzU3MzZDMTAuMTAwNSA1LjQxNDIxIDEzLjg5OTUgNS40MTQyMSAxNi4yNDI2IDcuNzU3MzZDMTguNTg1OCAxMC4xMDA1IDE4LjU4NTggMTMuODk5NSAxNi4yNDI2IDE2LjI0MjZaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 86792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1wbHVzPC90aXRsZT4gLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2MC4wMDAwMDAsIC03ODIuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+DQogICAgICAgICAgICA8ZyBpZD0ic3VnZ2VzdGVkLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDczNy4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcGx1cyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIwLjAwMDAwMCwgNDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCA0LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTksMCBMOSw3IEwxNiw3IEwxNiw5IEw5LDkgTDksMTYgTDcsMTYgTDcsOC45OTkgTDAsOSBMMCw3IEw3LDYuOTk5IEw3LDAgTDksMCBaIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");

/***/ }),

/***/ 46817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1maWx0ZXI8L3RpdGxlPiAtLT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTI1NTEuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+DQogICAgICAgICAgICA8ZyBpZD0iYXBwbGljYXRpb24taWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMjM0Ni4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtZmlsdGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTIuMDAwMDAwLCAyMDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAyLjAwMDAwMCkiIGlkPSJJY29uIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDAgTDAsMS45NTE3MTE0NCBMOS4wNTQ2NDk2LDExLjY2NjY2NjcgTDkuMDU0NjQ5NiwyMCBMMTAuOTg2NDg3OSwxOC41NTY0MDI0IEwxMC45ODY0ODc5LDExLjY2NjY2NjcgTDIwLDEuOTUxNzExNDQgTDIwLDAgTDAsMCBaIE0zLjQ0NzI3ODExLDMgTDE2LjYxNDY0NTQsMyBMMTAuMDE0NTA0MiwxMCBMMy40NDcyNzgxMSwzIFoiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==");

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