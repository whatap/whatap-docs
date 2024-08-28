"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[9628],{

/***/ 32365:
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
        children: "要求事項"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Kubernetesクラスタープロジェクト(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            class: "my",
            children: "CP"
          }), ")の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "読み込み権限"
          }), "が必要です。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "WhaTap Kubernetesエージェント1.5.6バージョン以降が必要です。"
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

/***/ 73138:
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
          children: "分類"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
          children: "メトリクス"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
          children: "説明"
        })]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          rowSpan: "3",
          children: "API GETリクエスト"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "1分当たりのGETリクエスト状況"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverのGETリクエストに対する1分当たりのリクエスト数"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "1秒当たりのGETリクエスト数の推移"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverのGETリクエストに対する1秒当たりのリクエスト数の推移"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "Resource & Subresource別の1分当たりのGETリクエスト数の推移"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverに入ってきたGETリクエストのResourceとSubresourceごとの1分当たりのリクエスト数の推移"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          rowSpan: "3",
          children: "API POSTリクエスト"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "1分あたりのPOSTリクエストの状況"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverのPOSTリクエストに対する1分当たりのリクエスト数"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "1秒当たりのPOSTリクエスト数の推移"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverのPOSTリクエストに対する1秒当たりのリクエスト数の推移"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "Resource & Subresource別のPOST1分当たりのリクエスト数の推移"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverに入ってきたPOSTリクエストに対してResourceとSubresourceごとにグループ化した1分当たりのリクエスト数の推移"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          rowSpan: "9",
          children: "APIレスポンスコード別のリクエスト"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 2xx ] 1分あたりのレスポンスのリクエスト状況"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverリクエストのうち、200以上300未満のレスポンスコードが出されたリクエスト数に対する1分当たりの現況"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 2xx ] 1分当たりのレスポンスコードごとのリクエスト数の推移"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverリクエストのうち、200以上300未満のレスポンスコードが出されたリクエスト数に対するレスポンスコードごとの1分当たりの現況"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 2xx ] 1分当たりのResource & Subresourceごとのリクエスト数の推移"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverリクエストのうち、200以上300未満のレスポンスコードが出されたリクエストに対しResourceとSubresourceごとにグループ化した1分当たりのリクエスト数の推移"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 3xx ] 1分あたりのレスポンスのリクエスト状況"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverリクエストのうち、300以上400未満のレスポンスコードが出されたリクエスト数に対する1分当たりの現況"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 3xx ] 1分当たりのレスポンスコードごとのリクエスト数の推移"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverリクエストのうち、300以上400未満のレスポンスコードが出されたリクエスト数に対するレスポンスコードごとの1分当たりの現況"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 3xx ] 1分当たりのResource & Subresourceごとのリクエスト数の推移"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverリクエストのうち、300以上400未満のレスポンスコードが出されたリクエストに対しResourceとSubresourceごとにグループ化した1分当たりのリクエスト数の推移"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 400~ ] 1分あたりのレスポンスのリクエスト状況"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverリクエストのうち、400以上のレスポンスコードが出されたリクエスト数に対する1分当たりの現況"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 400~ ] 1分当たりのレスポンスコードごとのリクエスト数の推移"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverリクエストのうち、400以上のレスポンスコードが出されたリクエスト数に対するレスポンスコードごとの1分当たりの現況"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "[ 400~ ] 1分当たりのResource & Subresourceごとのリクエスト数の推移"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "kube-apiserverリクエストのうち、400以上のレスポンスコードが出されたリクエストに対しResourceとSubresourceごとにグループ化した1分当たりのリクエスト数の推移"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          rowSpan: "2",
          children: "Go Metrics"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "ゴルーチン数"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "現在存在するゴルーチンの数"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "スレッド数"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "現在存在するOSスレッド数"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "現在実行中のリクエスト数(1秒)"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "直近1秒以内に実行中のリクエスト数"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
          children: "データ収集時にkube-apiserverで1秒以内に行われていたリクエスト数"
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

/***/ 51672:
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
      children: ["WhaTap Kubernetesエージェントのインストール時にダウンロードした", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "yaml"
      }), "ファイルを以下の案内に従って修正し、kube-apiserverモニタリングを活性化してください。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "whatap-master-agent"
          }), " deploymentのspec下位にkube-apiserverモニタリングのためのエージェントコンテナspecを追加してください。"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-yaml",
            children: "containers:\n  - name: whatap-control-plane-helper\n    image: whatap/kube_mon\n    imagePullPolicy: Always\n    ports:\n      - containerPort: 9496\n    command: [\"/data/agent/master/whatap_control_plane_helper\"]\n    args: [\"-collect_control_plane_monitoring_enabled=true\"]\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "次の例を参照にしてください。"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-yaml",
            metastring: "{17-23}",
            children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: whatap-master-agent\n  namespace: whatap-monitoring\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      name: whatap-master-agent\n  template:\n    metadata:\n      labels:\n        name: whatap-master-agent\n    spec:\n      containers:\n        - name: whatap-control-plane-helper\n          image: whatap/kube_mon\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 9496\n          command: [\"/data/agent/master/whatap_control_plane_helper\"]\n          args: [\"-collect_control_plane_monitoring_enabled=true\"]\n        - name: whatap-master-agent\n          image: whatap/kube_mon\n          imagePullPolicy: Always\n          resources:\n            requests:\n              memory: 300Mi\n              cpu: 100m\n            limits:\n              memory: 350Mi\n              cpu: 200m\n          ports:\n            - containerPort: 6600\n          command: ['/bin/entrypoint.sh']\n          env:\n            - name: WHATAP_LICENSE\n              value: \"xxxxxxxx-12345xxxxxx-x00e000000xxx8\"\n            - name: WHATAP_HOST\n              value: \"13.124.11.223/13.209.172.35\"\n            - name: WHATAP_PORT\n              value: \"6600\"\n            - name: WHATP_MEM_LIMIT\n              valueFrom:\n                resourceFieldRef:\n                  containerName: whatap-master-agent\n                  resource: limits.memory\n          volumeMounts:\n            - name: start-script-volume\n              mountPath: /bin/entrypoint.sh\n              readOnly: true\n              subPath: entrypoint.sh\n            - mountPath: /whatap_conf\n              name: whatap-config-volume\n      volumes:\n        - name: start-script-volume\n          configMap:\n            defaultMode: 0700\n            name: master-start-script\n        - name: whatap-config-volume\n          emptyDir: {}\n      serviceAccount: whatap\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "whatap-master-agent"
          }), " deploymentの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "whatap-master-agent"
          }), "コンテナspecのenv設定に次の内容を追加してください。"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-yaml",
            children: "env:\n  - name: collect_control_plane_monitoring_enabled\n    value: \"true\"\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "次の例を参照にしてください。"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-yaml",
            metastring: "{38-39}",
            children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: whatap-master-agent\n  namespace: whatap-monitoring\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      name: whatap-master-agent\n  template:\n    metadata:\n      labels:\n        name: whatap-master-agent\n    spec:\n      containers:\n        - name: whatap-control-plane-helper\n          image: whatap/kube_mon\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 9496\n          command: [\"/data/agent/master/whatap_control_plane_helper\"]\n          args: [\"-collect_control_plane_monitoring_enabled=true\"]\n        - name: whatap-master-agent\n          image: whatap/kube_mon\n          imagePullPolicy: Always\n          resources:\n            requests:\n              memory: 300Mi\n              cpu: 100m\n            limits:\n              memory: 350Mi\n              cpu: 200m\n          ports:\n            - containerPort: 6600\n          command: ['/bin/entrypoint.sh']\n          env:\n            - name: collect_control_plane_monitoring_enabled\n              value: \"true\"\n            - name: WHATAP_LICENSE\n              value: \"xxxxxxxx-12345xxxxxx-x00e000000xxx8\"\n            - name: WHATAP_HOST\n              value: \"13.124.11.223/13.209.172.35\"\n            - name: WHATAP_PORT\n              value: \"6600\"\n            - name: WHATP_MEM_LIMIT\n              valueFrom:\n                resourceFieldRef:\n                  containerName: whatap-master-agent\n                  resource: limits.memory\n          volumeMounts:\n            - name: start-script-volume\n              mountPath: /bin/entrypoint.sh\n              readOnly: true\n              subPath: entrypoint.sh\n            - mountPath: /whatap_conf\n              name: whatap-config-volume\n      volumes:\n        - name: start-script-volume\n          configMap:\n            defaultMode: 0700\n            name: master-start-script\n        - name: whatap-config-volume\n          emptyDir: {}\n      serviceAccount: whatap\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["コントロールプレーンモニタリング性能指標を収集するために", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "whatap"
          }), " ClusterRoleに次の権限を追加してください。"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-yaml",
            children: "rules:\n  - nonResourceURLs: [\"/metrics\"]\n    verbs: [\"*\"]\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "次の例を参照にしてください。"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-yaml",
            metastring: "{18-19}",
            children: "apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  annotations:\n    rbac.authorization.kubernetes.io/autoupdate: \"true\"\n  name: whatap\n  namespace: whatap-monitoring\nrules:\n  - apiGroups: [\"*\"]\n    resources: [\"namespaces\", \"pods\", \"pods/log\", \"configmaps\",\"services\", \"endpoints\",\"daemonsets\",\"ingresses\",\"deployments\",\"nodes\",\"persistentvolumes\",\"persistentvolumeclaims\", \"events\", \"replicasets\", \"roles\", \"rolebindings\", \"clusterroles\", \"clusterrolebindings\", \"jobs\", \"cronjobs\", \"statefulsets\", \"serviceaccounts\", \"configmaps\", \"storageclasses\", \"horizontalpodautoscalers\" ]\n    verbs: [\"get\",\"list\",\"watch\"]\n  - apiGroups: [\"\"]\n    resources: [\"pods/exec\"]\n    verbs: [\"create\"]\n  - apiGroups: [\"\"]\n    resources: [\"configmaps\"]\n    verbs: [\"*\"]\n  - nonResourceURLs: [\"/metrics\"]\n    verbs: [\"*\"]\n---\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "kubectl apply"
        }), "または", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "kubectl edit"
        }), "コマンドを通じてkube-apiserverモニタリングを活性化することもできます。"]
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

/***/ 10140:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28453);
/* harmony import */ var _common_items_k8s_kube_apiserver_common_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32365);
/* harmony import */ var _common_items_k8s_kube_apiserver_monitoring_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51672);
/* harmony import */ var _common_items_k8s_kube_apiserver_metric_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73138);


const frontMatter = {
	id: 'kube-apiserver-dashboard',
	title: 'kube-apiserver ダッシュボード',
	description: 'kube-apiserverダッシュボードを案内します。',
	keywords: [
		'Kubernetes',
		'Kubernetesモニタリング',
		'kube-apiserver',
		'コントロールプレーン'
	],
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/kube-apiserver-dashboard",
  "title": "kube-apiserver ダッシュボード",
  "description": "kube-apiserverダッシュボードを案内します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/kubernetes/kube-apiserver-dashboard.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/kube-apiserver-dashboard",
  "permalink": "/ja/kubernetes/kube-apiserver-dashboard",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/kube-apiserver-dashboard.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "kube-apiserver-dashboard",
    "title": "kube-apiserver ダッシュボード",
    "description": "kube-apiserverダッシュボードを案内します。",
    "keywords": [
      "Kubernetes",
      "Kubernetesモニタリング",
      "kube-apiserver",
      "コントロールプレーン"
    ],
    "toc_max_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "Object Manifest情報",
    "permalink": "/ja/kubernetes/object-manifest"
  },
  "next": {
    "title": "apiserver メトリクス照会",
    "permalink": "/ja/kubernetes/kube-apiserver-metrics-search"
  }
};
const assets = {

};






const toc = [..._common_items_k8s_kube_apiserver_common_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "基本画面ガイド",
  "id": "基本画面ガイド",
  "level": 2
}, {
  "value": "kube-apiserverモニタリング活性化",
  "id": "kube-apiserverモニタリング活性化",
  "level": 2
}, ..._common_items_k8s_kube_apiserver_monitoring_mdx__WEBPACK_IMPORTED_MODULE_2__/* .toc */ .RM, {
  "value": "kube-apiserverメトリクス",
  "id": "kube-apiserever-metric",
  "level": 2
}, ..._common_items_k8s_kube_apiserver_metric_mdx__WEBPACK_IMPORTED_MODULE_3__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["ホーム画面 > クラスタープロジェクト選択 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "クラスター"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "kube-apiserverダッシュボード"
        })
      })]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_k8s_kube_apiserver_common_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["kube-apiserverは、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "コントロールプレーン"
      }), "(Control Plane) 内外部のリクエストを処理するコンポーネントです。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "kube-apiserverダッシュボード"
        })
      }), "メニューを通じてkube-apiserverの状態と性能メトリクスを収集した後、kube-apiserverのリスポンスタイム、処理量、リクエストの失敗などを追跡し、クラスターの可用性と性能を簡単にモニタリングできます。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "基本画面ガイド",
        children: "基本画面ガイド"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-kube-apiserver.png",
        desc: "kube-apiserver ダッシュボード"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "kube-apiserverダッシュボード"
          })
        }), "メニューは、直近1時間のkube-apiserverの主要な指標を1分周期で反映します。 以下の指標を確認することができます。 指標詳細は、下段の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "#kube-apiserever-metric",
          children: "メトリクス案内"
        }), "を参考にしてください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "クラスタの負荷と使用量をモニタリングするために、メソッド、リソース、リスポンスコードごとのリクエスト回数の状況と推移を提供します。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "クラスターの負荷状態を把握できるように、現在処理中のAPIリクエスト数を提供します。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "生成されたOSスレッドと現在存在するゴルーチンの数を提供します。"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "kube-apiserverモニタリング活性化",
        children: "kube-apiserverモニタリング活性化"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_k8s_kube_apiserver_monitoring_mdx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "kube-apiserever-metric",
        children: "kube-apiserverメトリクス"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_k8s_kube_apiserver_metric_mdx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay, {})]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
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