"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[4260],{

/***/ 88715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ agent_performance_contentTitle),
  "default": () => (/* binding */ agent_performance_MDXContent),
  frontMatter: () => (/* binding */ agent_performance_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ agent_performance_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_dotnet-agent-performance.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "エージェントの性能オプションを有効にするには、設定後に、WhaTap .NET Windows サービスを再起動する必要があります。"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "エージェントのパフォーマンスを拡大すると、CPU、メモリ使用率が増加する可能性があります。"
        }), "\n"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "tx_max_count"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "5000"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "トランザクションを保存する最大数です。 同時に処理するトランザクションが多い場合は、そのサイズをさらに大きくしてください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "tx_default_capacity"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "101"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "トランザクションを保存するバッファのデフォルトサイズです。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "tx_load_factor"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String(Float)"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.75"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "トランザクションを保存するバッファのサイズを徐々に増加させるための基準です。 101個から75％以上保存すると、バッファのサイズが2倍になります。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "queue_log_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "queue関連ログを出力します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "queue_tcp_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TCPデータ送信処理に使用するChannelの代わりに別のQueueを使用します。 データ優先順位キューを使用します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "queue_tcp_sender_thread_count"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "2"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TCPデータ送信を処理するスレッドの数を設定します。 スレッド数を増やすと、データ送信をより迅速に処理できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "net_send_buffer_size"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "1024"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "TCPデータ処理のChannelバッファを設定します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "queue_udp_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UDPデータ受信処理にChannelに代わり、他のQueueを使用します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "queue_udp_size"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "2048"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UDPデータ受信のバッファを設定します。 チャンネル、キューバッファを設定します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "queue_udp_read_thread_count"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "3"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UDPデータ受信を処理するスレッドの数を設定します。 スレッド数を増やすと、UDPバッファからより早くデータを読むことができます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "queue_udp_overflowed_size"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          }), "\n既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "4096"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UDPデータ受信にQueueを使用する場合は、overflowed Queueバッファサイズを設定します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "queue_udp_process_thread_count"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "1"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UDPデータを処理するスレッドの数を設定します。 スレッド数を増やすと、UDPから読み取ったデータより迅速に処理できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "queue_profile_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "トレース情報を処理するためにChannelの変わりに他のQueueを使用します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "queue_profile_size"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "512"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "トレース情報を処理するためのバッファを設定します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "queue_profile_process_thread_count"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "1"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "トレース情報を処理するスレッドの数を設定します。 スレッド数を増やすと、より迅速に処理できます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "queue_text_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "テキストデータ処理をするためにChannelの変わりにQueueを使用します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "queue_text_size"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "512"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "テキストデータを処理するためのバッファを設定します。"
        }), "\n"]
      }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/dotnet/agent-performance.mdx


const agent_performance_frontMatter = {
	id: 'agent-performance',
	title: 'エージェント性能',
	description: 'エージェント性能に関するオプションです。',
	tags: [
		'.NET',
		'エージェント性能'
	]
};
const agent_performance_contentTitle = undefined;
const metadata = {
  "id": "dotnet/agent-performance",
  "title": "エージェント性能",
  "description": "エージェント性能に関するオプションです。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/dotnet/agent-performance.mdx",
  "sourceDirName": "dotnet",
  "slug": "/dotnet/agent-performance",
  "permalink": "/ja/dotnet/agent-performance",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/dotnet/agent-performance.mdx",
  "tags": [
    {
      "inline": true,
      "label": ".NET",
      "permalink": "/ja/tags/net"
    },
    {
      "inline": true,
      "label": "エージェント性能",
      "permalink": "/ja/tags/エージェント性能"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-performance",
    "title": "エージェント性能",
    "description": "エージェント性能に関するオプションです。",
    "tags": [
      ".NET",
      "エージェント性能"
    ]
  },
  "sidebar": "dotNetSidebar",
  "previous": {
    "title": "エージェントの通信設定",
    "permalink": "/ja/dotnet/agent-network"
  },
  "next": {
    "title": "エージェントログ",
    "permalink": "/ja/dotnet/agent-log"
  }
};
const assets = {

};




const agent_performance_toc = [...toc];
function agent_performance_createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: ".NETエージェントの性能に関するオプションです。"
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {})]
  });
}
function agent_performance_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_performance_createMdxContent, {
      ...props
    })
  }) : agent_performance_createMdxContent(props);
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