"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[60905],{

/***/ 41045:
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
	id: 'software-proxy',
	title: 'ソフトウェアプロキシ',
	description: 'モニタリング対象サーバーから外部ネットワークへの直接アクセスを遮断し、単一チャンネルを介して外部接続を許可することができます。',
	tags: [
		'Java',
		'アプリケーションモニタリング',
		'ソフトウェアプロキシ'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "software-proxy",
  "title": "ソフトウェアプロキシ",
  "description": "モニタリング対象サーバーから外部ネットワークへの直接アクセスを遮断し、単一チャンネルを介して外部接続を許可することができます。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/software-proxy.mdx",
  "sourceDirName": ".",
  "slug": "/software-proxy",
  "permalink": "/ja/software-proxy",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/software-proxy.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Java",
      "permalink": "/ja/tags/java"
    },
    {
      "inline": true,
      "label": "アプリケーションモニタリング",
      "permalink": "/ja/tags/アプリケーションモニタリング"
    },
    {
      "inline": true,
      "label": "ソフトウェアプロキシ",
      "permalink": "/ja/tags/ソフトウェアプロキシ"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "software-proxy",
    "title": "ソフトウェアプロキシ",
    "description": "モニタリング対象サーバーから外部ネットワークへの直接アクセスを遮断し、単一チャンネルを介して外部接続を許可することができます。",
    "tags": [
      "Java",
      "アプリケーションモニタリング",
      "ソフトウェアプロキシ"
    ]
  },
  "sidebar": "indexSidebar",
  "previous": {
    "title": "WhaTap決済アカウント",
    "permalink": "/ja/about-billing"
  },
  "next": {
    "title": "ホーム画面(UI)",
    "permalink": "/ja/main-ui-intro-v2"
  }
};
const assets = {

};



const toc = [{
  "value": "ソフトウェアプロキシ",
  "id": "ソフトウェアプロキシ",
  "level": 2
}, {
  "value": "エージェントのインストール",
  "id": "エージェントのインストール",
  "level": 3
}, {
  "value": "エージェント設定",
  "id": "エージェント設定",
  "level": 3
}, {
  "value": "パブリックサブネット(Public Subnet)",
  "id": "パブリックサブネットpublic-subnet",
  "level": 4
}, {
  "value": "プライベートサブネット(Private Subnet)",
  "id": "プライベートサブネットprivate-subnet",
  "level": 4
}, {
  "value": "エージェント実行",
  "id": "エージェント実行",
  "level": 3
}, {
  "value": "ソフトウェアプロキシ終了",
  "id": "ソフトウェアプロキシ終了",
  "level": 3
}, {
  "value": "HAProxy",
  "id": "haproxy",
  "level": 2
}, {
  "value": "プライベートサブネット(Private Subnet)",
  "id": "プライベートサブネットprivate-subnet-1",
  "level": 3
}, {
  "value": "パブリックサブネット(Public Subnet)",
  "id": "パブリックサブネットpublic-subnet-1",
  "level": 3
}, {
  "value": "Nginxリバースプロキシ",
  "id": "nginxリバースプロキシ",
  "level": 2
}, {
  "value": "プライベートサブネット(Private Subnet)",
  "id": "プライベートサブネットprivate-subnet-2",
  "level": 3
}, {
  "value": "パブリックサブネット(Public Subnet)",
  "id": "パブリックサブネットpublic-subnet-2",
  "level": 3
}, {
  "value": "エージェントのインストール確認",
  "id": "エージェントのインストール確認",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "モニタリング対象サーバーから外部ネットワークへの直接的なアクセスを遮断し、単一チャンネルを介して外部への接続を許可しようとする場合、TCP/UDP Proxy サーバーを構成して、WhaTapサーバーにデータを送信できます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["ユーザーが直接Proxyサーバーを構成することが難しい状況にある場合、WhaTapが提供するソフトウェアベースの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "WhaTap Software Proxy"
      }), "を使用できます。\nこれにより、ユーザーは多数のサーバーが外部ネットワークに直接接続することなく", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "WhaTap Software Proxy"
      }), "を経由するように制御できます。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.haproxy.org",
        children: "HAProxy"
      }), "といった汎用プロキシを使用することもできます。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        src: (__webpack_require__(51568)/* ["default"] */ .A) + "",
        width: "1408",
        height: "604"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "ソフトウェアプロキシ",
        children: "ソフトウェアプロキシ"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "エージェントのインストール",
        children: "エージェントのインストール"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["エージェントをインストール案内に従ってインストールすると、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.agent.java.tar.gz"
        }), "ファイルをダウンロードできます。 圧縮を解凍すると", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
          children: ["whatap.agent.proxy-", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "X.Y.Z"
          }), ".jar"]
        }), "ファイルをWhaTap収集サーバーと通信可能なサーバーの場所に保存してください。 インストール済みのエージェントがある場合は、その場所のファイルを利用できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "tip",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "ウィンドウズ環境でServerエージェントをインストールする場合は、プロキシを経由するポート番号を設定するには、次のコマンドを実行してください。"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-powershell",
            children: "whatap_infra.exe /SILENT /SERIAL={アクセスキー} /PROXYIP={プロキシサーバIP} /PROXYPORT=6600\n"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "エージェント設定",
        children: "エージェント設定"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["この文書では、エージェントが配置されているサーバーの帯域を", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "プライベートサブネット"
        }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Private Subnet"
        }), ")と呼び、ソフトウェアプロキシが配置されているサーバーの帯域を", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "パブリックサブネット"
        }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Public Subnet"
        }), ")と呼びます。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "パブリックサブネットpublic-subnet",
        children: "パブリックサブネット(Public Subnet)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
          children: ["whatap.agent.proxy-", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "X.Y.Z"
          }), ".jar"]
        }), "ファイルを適切なパスにコピーしたら、WhaTap収集サーバーIPとポート番号を設定するために", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "proxy.conf"
        }), "ファイルを作成してください。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
          children: ["whatap.agent.proxy-", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "X.Y.Z"
          }), ".jar"]
        }), "ファイルがあるパスは", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "$PROXY_HOME"
        }), "となります。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='$PROXY_HOME/proxy.conf'",
          children: "whatap.server.host=52.78.209.94/52.78.224.235 ## WhaTapアプリケーションモニタリング収集サーバーアドレス\nlisten_port=6600 ## ProxyがListenするポート番号\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "プライベートサブネットprivate-subnet",
        children: "プライベートサブネット(Private Subnet)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "$WHATAP_HOME"
        }), "は、エージェントをインストールしたパスです。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "$WHATAP_HOME"
        }), "_/whatap.conf_ファイルで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap.server.host"
        }), "項目を", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "パブリックサブネット"
        }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Public Subnet"
        }), ")サーバーのIPに変更してください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='$WHATAP_HOME/whatap.conf'",
          children: "whatap.server.host={パブリックサブネット(Public Subnet)プロキシサーバーIP}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["信頼性を確保するために", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "パブリックサブネット"
        }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Public Subnet"
        }), ")にプロキシを複数構成できます。 スラッシュ(/)を区切り文字として入力します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='$WHATAP_HOME/whatap.conf'",
          children: "whatap.server.host={パブリックサブネット(Public Subnet)プロキシサーバーIP #1}/{パブリックサブネット(Public Subnet)プロキシサーバーIP #2} \n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "エージェント実行",
        children: "エージェント実行"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["ソフトウェアプロキシは、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "java"
        }), "コマンドを使用して実行したり", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "proxy.sh"
        }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "proxy.bat"
        }), ")ファイルを作成して実行してください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='java command'",
          children: "java -jar whatap.agent.proxy-X.Y.Z.jar &\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='proxy.sh (Windows: proxy.bat)'",
          children: "#!/usr/bin/env bash \nEXE_JAR=`ls *.proxy* | sort -V | tail -1` \n${JAVA_HOME}/bin/java ${JAVA_OPTS} -jar $EXE_JAR\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "sh proxy.sh &\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "proxy.sh"
          }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "proxy.bat"
          }), ")ファイルを作成して実行する場合、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "$ chmod +x proxy.sh"
          }), "コマンドを使用して実行権限を付与してください。"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "ソフトウェアプロキシ終了",
        children: "ソフトウェアプロキシ終了"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["ソフトウェアプロキシが動作している場合は、_", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "$PROXY_HOME"
        }), "/", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "{PID}"
        }), ".proxy.run_ファイルを作成します。 このファイルを削除すると、ソフトウェアプロキシは終了します。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "haproxy",
        children: "HAProxy"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "HAProxy"
        }), "を利用してプロキシサーバーを構築する方法を紹介します。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "プライベートサブネットprivate-subnet-1",
        children: "プライベートサブネット(Private Subnet)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='$WHATAP_HOME/whatap.conf'",
          children: "license=<プロジェクトアクセスキー>\nwhatap.server.host=192.168.203.60 ## プロキシサーバーのIP\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "パブリックサブネットpublic-subnet-1",
        children: "パブリックサブネット(Public Subnet)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["次を参照して", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "haproxy.cfg"
        }), "ファイルを設定してください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='/etc/haproxy/haproxy.cfg'",
          children: "frontend proxy_in\n  mode              tcp\n  bind              *:6600\n  default_backend   proxy_out\n  log               global\n  option            httplog\n\nbackend proxy_out\n  mode      tcp\n  server    server1 13.124.11.223:6600 maxconn 32 \n  server    server2 13.209.172.35:6600 maxconn 32\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "13.124.11.223:6600と13.209.172.35:6600は、WhaTapアプリケーションモニタリング収集サーバーのアドレスとポート番号です。"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "nginxリバースプロキシ",
        children: "Nginxリバースプロキシ"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Nginxリバースプロキシ"
        }), "を使用してプロキシサーバーを構築する方法を説明します。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "プライベートサブネットprivate-subnet-2",
        children: "プライベートサブネット(Private Subnet)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='$WHATAP_HOME/whatap.conf'",
          children: "license=<プロジェクトアクセスキー>\nwhatap.server.host=192.168.203.60 ## プロキシサーバーのIP\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "パブリックサブネットpublic-subnet-2",
        children: "パブリックサブネット(Public Subnet)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["次を参照して", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "nginx.conf"
        }), "ファイルを設定してください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-apacheconf",
          metastring: "title='/etc/nginx/nginx.conf'",
          children: "stream {\n  upstream tcp_proxy {\n    server 13.124.11.223:6600;\n    server 13.209.172.35:6600;\n  }\n  server {\n    listen 6600;\n    proxy_pass tcp_proxy;\n  }\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "13.124.11.223:6600と13.209.172.35:6600は、WhaTapアプリケーションモニタリング収集サーバーのアドレスとポート番号です。"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "エージェントのインストール確認",
        children: "エージェントのインストール確認"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["エージェントをインストールしたサーバーと収集サーバーが接続されている場合は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io",
          children: "WhaTapモニタリングサービス"
        }), "で確認できます。"]
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

/***/ 51568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/software-proxy-1842a16e6c8e9c6c67edf1515cc82c07.png");

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