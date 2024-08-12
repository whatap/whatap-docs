"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[56886],{

/***/ 2363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ agent_network_contentTitle),
  "default": () => (/* binding */ agent_network_MDXContent),
  frontMatter: () => (/* binding */ agent_network_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ agent_network_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_common-network-security.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Network &amp; security",
  "id": "network--security",
  "level": 2
}, {
  "value": "収集サーバーのアドレスとポート",
  "id": "収集サーバーのアドレスとポート",
  "level": 3
}, {
  "value": "通信接続およびセキュリティ",
  "id": "通信接続およびセキュリティ",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "network--security",
        children: "Network & security"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "WhaTapは、エージェントにサーバー通信でTCP接続してからモニタリングデータを送信します。"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          src: "https://img.whatap.io/media/agent_node/agent_net.png",
          alt: "WhaTapエージェントのネットワーク"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "エージェントは、1つのTCP セッションを介してデータ送信とサーバーの制御要求を処理します。ノードエージェントはUDPを使用しません。ノードエージェントからWhaTap収集サーバーの通信はファイアウォールを開きます。"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "収集サーバーのアドレスとポート",
        children: "収集サーバーのアドレスとポート"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "WhaTapサーバーは、データリージョンサーバーとフロントサーバー、ユーレカなどに区分します。データリージョンにはProxy、Yard、Gateway、Keeperなどがあります。エージェントは、Proxyサーバーと通信します。"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["NodeエージェントにWhaTapサーバのproxyサーバのアドレスを設定します。(ex,", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.server.host=10.0.3.1/10.0.3.2"
        }), ")サーバアドレスを設定する場合、proxyサーバの数を入力します。WhaTapサーバは、インストール方法によって、proxyサーバを1つまたは複数使用できます。"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "WhaTap Proxyサーバは6600番ポートでリスニング(Listening)します。エージェントで何も設定しない場合、エージェントは6600番ポートへの接続を試みます。"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "whatap.server.port=6600\n"
        })
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "2つのProxyサーバーが異なるポートを使用することはできません。複数のProxyサーバーを使用している場合は、(Listening) ポートが同じである必要があります。"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "通信接続およびセキュリティ",
        children: "通信接続およびセキュリティ"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "WhaTapは、パブリックネットワークからモニタリングデータを収集することを前提に設計されています。その結果、すべてのモニタリングデータは暗号化され、サーバーに送信されます。大量のデータを暗号化して送信すると、オーバーヘッドを引き起こす可能性があります。WhaTapはデータを自動的に暗号化します。エージェントとサーバー間の通信プロセスは次のとおりです。"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["プロジェクト作成メニューから", (0,jsx_runtime.jsx)(_components.strong, {
            children: "プロジェクトアクセスキー"
          }), "を生成してコピーします。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "プロジェクトアクセスキー"
          }), "には、秘密鍵が含まれています。外部に知られないように注意してください。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "アプリケーションサーバーを再起動します。"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "WhaTapエージェントは、サーバーへのTCP セッションを確立します。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "プロジェクトアクセスキー"
          }), "に含まれる通信シークレットキーを使用し、データを暗号化して、新しいセッション用のセキュリティキーを要求します。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "サーバーは、エージェントによって要求されたセッション用のセキュリティキーを新しく生成して、エージェントに送信します。"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "セッション用のセキュリティキーには、2つの暗号化キーを含まれています。ASCアルゴリズム用の暗号キーと単純なパスワードの暗号化キーです。"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "その後、エージェントはテキストや制御などの機密データにASC暗号化キーを使用します。数値データなどの比較的安全なデータは、単純な暗号化によってデータをサーバーに送信します。"
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "変更を有効にするには、サーバーを再起動してください。"
        })
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/server/agent-network.mdx


const agent_network_frontMatter = {
	id: 'agent-network',
	title: 'エージェントの通信設定',
	description: 'エージェントとサーバー間の接続設定',
	tags: [
		'Server',
		'エージェント',
		'通信設定'
	]
};
const agent_network_contentTitle = undefined;
const metadata = {
  "id": "server/agent-network",
  "title": "エージェントの通信設定",
  "description": "エージェントとサーバー間の接続設定",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/server/agent-network.mdx",
  "sourceDirName": "server",
  "slug": "/server/agent-network",
  "permalink": "/ja/server/agent-network",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/server/agent-network.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Server",
      "permalink": "/ja/tags/server"
    },
    {
      "inline": true,
      "label": "エージェント",
      "permalink": "/ja/tags/エージェント"
    },
    {
      "inline": true,
      "label": "通信設定",
      "permalink": "/ja/tags/通信設定"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-network",
    "title": "エージェントの通信設定",
    "description": "エージェントとサーバー間の接続設定",
    "tags": [
      "Server",
      "エージェント",
      "通信設定"
    ]
  },
  "sidebar": "serverSidebar",
  "previous": {
    "title": "エージェント名の識別",
    "permalink": "/ja/server/agent-name"
  },
  "next": {
    "title": "Windows性能カウンターの設定",
    "permalink": "/ja/server/agent-pcounter"
  }
};
const assets = {

};




const agent_network_toc = [...toc];
function agent_network_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(MDXContent, {});
}
function agent_network_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_network_createMdxContent, {
      ...props
    })
  }) : agent_network_createMdxContent(props);
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