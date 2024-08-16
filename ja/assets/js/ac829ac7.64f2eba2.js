"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[28057],{

/***/ 29503:
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
	id: 'about-tcp-port',
	title: 'TCPポートモニタリングの活用',
	description: 'TCPポートモニタリングの必要性と活用例をご案内します。',
	keywords: [
		'サーバーモニタリング',
		'Server',
		'詳細',
		'TCPポート'
	],
	toc_max_heading_level: 2,
	displayed_sidebar: 'learningSidebar'
};
const contentTitle = undefined;
const metadata = {
  "id": "best-practice-guides/about-tcp-port",
  "title": "TCPポートモニタリングの活用",
  "description": "TCPポートモニタリングの必要性と活用例をご案内します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/best-practice-guides/about-tcp-port.mdx",
  "sourceDirName": "best-practice-guides",
  "slug": "/best-practice-guides/about-tcp-port",
  "permalink": "/ja/best-practice-guides/about-tcp-port",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/best-practice-guides/about-tcp-port.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "about-tcp-port",
    "title": "TCPポートモニタリングの活用",
    "description": "TCPポートモニタリングの必要性と活用例をご案内します。",
    "keywords": [
      "サーバーモニタリング",
      "Server",
      "詳細",
      "TCPポート"
    ],
    "toc_max_heading_level": 2,
    "displayed_sidebar": "learningSidebar"
  },
  "sidebar": "learningSidebar",
  "previous": {
    "title": "인스턴스 성능 관리 활용",
    "permalink": "/ja/best-practice-guides/about-instance-performance-analysis"
  }
};
const assets = {

};

/*문제 발생 시 관리자가 즉각적으로 대응할 수 있도록 알림을 발송합니다.*/
/*IT 인프라 관리에서 서비스별 TCP 포트를 모니터링하는 것은 운영 중인 서비스의 가용성과 상태를 평가하는 기본적이면서도 중요한 방법 중 하나입니다. TCP ポートは、ネットワーク上のアプリケーションおよびサービスが通信する主要なパスであり、各サービスの動作状態を直接または間接的に示します。 従って、TCPポートのモニタリングは、サーバとサービスの安定した運用を保証するために不可欠な役割を果たします。

TCPポートモニタリングを通じて、特定のサービスが正常に動作しているかどうかをリアルタイムで確認できます。 例えば、Webサーバーが使用するHTTP ポート(例、ポート80や443)が応答しない場合、これはウェブサーバーのダウンタイムまたはネットワークの問題を暗示する可能性があります。 このような状況でTCPポートモニタリングは問題を迅速に感知し、通知を送信して管理者が直ちに対応できるようにサポートします。

WhaTapのサーバーモニタリングエージェントを活用すると、モニタリング対象サーバーの状態をリアルタイムで確認できるだけでなく、サーバー間のTCP通信状態と他のサービス間の接続状態まで詳細に点検できます。 これは、サービスの中断を防ぎ、システムの可用性を最大化し、ビジネスの継続性を保障する上で重要な役割を果たします。*/
/*IT 인프라 관리에 있어 서비스별 TCP 포트를 모니터링하는 것은 운영 중인 서비스의 상태를 체크하는 기본적인 방법 중 하나입니다.

TCPポートモニタリングにより、特定のサービスが正常に動作しているかどうかを確認できます。 例えば、Webサーバー ポートで応答しない場合、Webサーバーがダウンしているか、ネットワークの問題が発生している可能性があります。 TCPポートモニタリングにより、これらの問題を迅速に検出して対応できます。

WhaTapのサーバーモニタリングエージェントを活用すれば、モニタリング対象サーバーの状態をチェックすることはもちろん、他のサービスとのTCP通信状態も確認できます。*/
/*다음과 같이 알림 템플릿 내 ***재시작***과 ***미수신*** 항목 활성화만으로 추가적인 조작이 필요없이 기본 알림 설정이 완료됩니다.

まず、モニタリング対象サーバーの基本通知を説明します。*/


const toc = [{
  "value": "TCPポートモニタリング",
  "id": "tcpポートモニタリング",
  "level": 2
}, {
  "value": "アラート活性化",
  "id": "アラート活性化",
  "level": 2
}, {
  "value": "基本通知",
  "id": "基本通知",
  "level": 3
}, {
  "value": "TCPポートモニタリングの通知",
  "id": "tcpポートモニタリングの通知",
  "level": 3
}, {
  "value": "活性化確認",
  "id": "活性化確認",
  "level": 3
}, {
  "value": "<em>whatap.conf</em>",
  "id": "whatapconf",
  "level": 4
}, {
  "value": "メトリクス照会",
  "id": "メトリクス照会",
  "level": 4
}, {
  "value": "WhaTapサーバーモニタリングとTCPポートモニタリング",
  "id": "whatapサーバーモニタリングとtcpポートモニタリング",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, TabItem, Tabs} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["TCPポートモニタリングの必要性とサーバー", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_eventSetting",
        className: "uitext"
      }), "メニューを通じたTCPポートモニタリングの活性化方法についてご案内します。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "tcpポートモニタリング",
        children: "TCPポートモニタリング"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "ITインフラ管理においてTCPポートのモニタリングは、運用中のサービスの状態を確認する基本的かつ重要な方法の1つです。 TCPポートは、ネットワーク上のアプリケーションおよびサービスが通信する主要パスであり、各サービスは特定のTCPポートを通じて通信し、各サービスの可用性と性能を直接または間接的に示します。 このようにTCPポートモニタリングは、サービスが正常に動作しているかをリアルタイムでモニタリングし、システムの安定性を保障するのに重要な役割を果たします。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "例えば、Webサーバが使用する80や443のようなHTTPポートが応答しない場合、Webサーバがダウンしたり、ネットワークの問題によってアクセスが遮断された可能性があります。 このような状況でTCPポートモニタリングは問題を迅速に感知し、通知を送信して管理者が直ちに対応できるようにサポートします。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "WhaTapのサーバーモニタリングエージェントは、モニタリング対象サーバーの状態をリアルタイムで確認できるだけでなく、サーバーと他のサービス間のTCP通信状態までモニタリングします。 これにより、サービスの中断を防ぎ、システムの可用性を最大化し、ビジネスの継続性を保持できます。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "アラート活性化",
        children: "アラート活性化"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["ホーム画面> プロジェクト選択> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_event",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_eventSetting",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "server",
            className: "uitext"
          }), "タブをクリックして***+*** ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "add_alert_setting",
            className: "uitext"
          }), "ボタンを選択"]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/about-server-adf-tcp-port.png",
        desc: "tcp ポート監視通知の設定"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "基本通知",
        children: "基本通知"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["WhaTapサーバモニタリングは", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "基本通知"
        }), "を提供します。 ユーザーは、以下のようにイベントテンプレート内でサーバー", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "再起動"
          })
        }), "およびデータ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "未受信"
          })
        }), "アイテムを活性化するだけで、追加の操作なしで基本的な通知設定を完了できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "再起動"
              })
            }), ": モニタリング対象のサーバーがシステムの再起動を実行している場合、通知が送信されます。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "未受信"
              })
            }), ": サーバーのダウンタイムやネットワークの問題により、設定された時間の間にモニタリングエージェントからデータが受信されない場合、その状態に関する通知が送信されます。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "tcpポートモニタリングの通知",
        children: "TCPポートモニタリングの通知"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["WhaTapサーバーのモニタリングイベントテンプレートで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "ポート"
          })
        }), "アイテムを活性化し、次のスクリプトでモニタリング対象のエンドポイントとTCPポートを設定します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "server-user-script",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lxs",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "#以下の変数にモニタリング対象IPを指定します。\nexport TARGET_IP=127.0.0.1\n#以下の変数にモニタリング対象ポート番号を指定します。\nexport TARGET_PORT=80\necho \"tcp.check.$TARGET_PORT=tcp://$TARGET_IP:$TARGET_PORT\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wps",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "#以下の変数にモニタリング対象IPを指定します。\n$TARGET_IP=\"127.0.0.1\"\n#以下の変数にモニタリング対象ポート番号を指定します。\n$TARGET_PORT=\"80\"\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"tcp.check.$TARGET_PORT=tcp://$TARGET_IP:$TARGET_PORT\"\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "活性化確認",
        children: "活性化確認"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatapconf",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Linux環境で", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "127.0.0.1"
        }), "で設定が完了した場合、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "/usr/whatap/infra/conf"
        }), "パスの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), "ファイルに次のような内容が追加されます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "license=xxxxxxxxxx\nwhatap.server.host=xxx.xxx.xxx.xxx\ncreatedtime=xxxxxxxxxx\ntcp.check.8080=tcp://127.0.0.1:8080\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "メトリクス照会",
        children: "メトリクス照会"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["設定が完了した場合", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "分析"
          })
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "メトリクス照会"
          })
        }), "メニューで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "server_tcpport"
        }), "カテゴリが追加されます。 当該カテゴリの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "isAlive"
        }), "フィールド値に応じて、メトリクス通知を使用できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/about-server-adf-tcp-port-ms.png",
        desc: "tcp ポート監視通知に関するメトリックスの照会"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "whatapサーバーモニタリングとtcpポートモニタリング",
        children: "WhaTapサーバーモニタリングとTCPポートモニタリング"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "WhaTapのサーバモニタリングで提供するTCPポートのモニタリング機能を活用すると、エージェントをインストールできない環境やモニタリングデータを外部に直接転送できないプライベートネットワーク領域でもTCP状態を効果的に確認できます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        align: "center",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "best-p/about-tcp-port-rs.png",
          desc: "tcpポート監視"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "WhaTapのサーバーエージェントはモニタリング対象サーバーだけでなく、当該サーバー内部の他のエンドポイントに対しても周期的にTCP状態を点検します。 従って、ネットワーク通信が可能な環境ではエージェントを通じて、より包括的で広範囲なモニタリングを実行できます。 これらの機能は、複雑なネットワーク環境でのサーバー状態と接続状態を徹底的にモニタリングし、障害発生時の迅速な対応を可能にします。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "このようなWhaTapサーバーモニタリングの様々な機能を活性化して、運用中のシステムのネットワークとサーバーの状態を迅速に把握して対応します。 WhaTapにより、ビジネスの継続性を確保し、サービスの安定性を最大化できます。"
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