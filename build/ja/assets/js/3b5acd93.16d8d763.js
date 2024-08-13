"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[54279],{

/***/ 30648:
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
  "value": "次の段階",
  "id": "次の段階",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "次の段階",
      children: "次の段階"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["アプリケーションを実行してモニタリングの準備ができましたら、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "install-check",
            children: "次の文書"
          }), "をご参照の上、チェック事項を確認してください。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["エージェントを通じてAPMの様々なデータを収集するように構成できます。 エージェント設定の詳細については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "set-agent",
            children: "次の文書"
          }), "を参照にしてください。"]
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

/***/ 71929:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _common_items_apm_install_next_step_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30648);


const frontMatter = {
	id: 'install-agent-nextjs',
	title: 'Next.js環境インストール',
	description: 'Next.jsなどのサーバーサイドレンダリング(SSR)フレームワークでNode.jsアプリケーションモニタリングのためのCustom Server設定を案内します。',
	tags: [
		'Node.js',
		'Next.js',
		'エージェント'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "nodejs/install-agent-nextjs",
  "title": "Next.js環境インストール",
  "description": "Next.jsなどのサーバーサイドレンダリング(SSR)フレームワークでNode.jsアプリケーションモニタリングのためのCustom Server設定を案内します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/nodejs/install-agent-nextjs.mdx",
  "sourceDirName": "nodejs",
  "slug": "/nodejs/install-agent-nextjs",
  "permalink": "/ja/nodejs/install-agent-nextjs",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/nodejs/install-agent-nextjs.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Node.js",
      "permalink": "/ja/tags/node-js"
    },
    {
      "inline": true,
      "label": "Next.js",
      "permalink": "/ja/tags/next-js"
    },
    {
      "inline": true,
      "label": "エージェント",
      "permalink": "/ja/tags/エージェント"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "install-agent-nextjs",
    "title": "Next.js環境インストール",
    "description": "Next.jsなどのサーバーサイドレンダリング(SSR)フレームワークでNode.jsアプリケーションモニタリングのためのCustom Server設定を案内します。",
    "tags": [
      "Node.js",
      "Next.js",
      "エージェント"
    ]
  },
  "sidebar": "nodejsSidebar",
  "previous": {
    "title": "Docker環境インストール",
    "permalink": "/ja/nodejs/install-agent-docker"
  },
  "next": {
    "title": "Nuxt.js環境インストール",
    "permalink": "/ja/nodejs/install-agent-nuxtjs"
  }
};
const assets = {

};

/*다음 단계*/



const toc = [{
  "value": "エージェントインストール",
  "id": "installagent",
  "level": 2
}, {
  "value": "エージェントファイル構成",
  "id": "agentfiles",
  "level": 2
}, {
  "value": "server.jsコードを作成する",
  "id": "serverjsコードを作成する",
  "level": 2
}, {
  "value": "Whatapエージェント初期化",
  "id": "whatapエージェント初期化",
  "level": 3
}, {
  "value": "Next.js及びその他の必要モジュールの読み込み",
  "id": "nextjs及びその他の必要モジュールの読み込み",
  "level": 3
}, {
  "value": "アプリケーション設定",
  "id": "アプリケーション設定",
  "level": 3
}, {
  "value": "Next.jsアプリケーションのインスタンス作成",
  "id": "nextjsアプリケーションのインスタンス作成",
  "level": 3
}, {
  "value": "全体コードを見る",
  "id": "fullcode",
  "level": 3
}, {
  "value": "アプリケーションを実行する",
  "id": "アプリケーションを実行する",
  "level": 2
}, ..._common_items_apm_install_next_step_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Filetree, FiletreeItem} = _components;
  if (!Filetree) _missingMdxReference("Filetree", true);
  if (!FiletreeItem) _missingMdxReference("FiletreeItem", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Next.js"
      }), "などのサーバーサイドレンダリング(Server-side Rendering、SSR)フレームワークでアプリケーションをモニタリングするためにCustom Serverの設定が必要です。 一般的なNode.jsフレームワーク(例、Express.js、Nest.js)とは異なるアプローチが求められます。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["参考資料：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://nextjs.org/docs/pages/building-your-application/configuring/custom-server",
          children: "Next.js Custom Server Configuration"
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "installagent",
        children: "エージェントインストール"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "次のコマンドを実行してエージェントをインストールしてください。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=\"BASH\"",
          children: "npm install whatap\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "agentfiles",
        children: "エージェントファイル構成"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "エージェントのファイル構成については、以下を参照してください。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Filetree, {
        name: "whatap",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FiletreeItem, {
          name: "package.json",
          type: "file",
          children: "サンプルアプリケーション情報と依存関係(dependency)管理文書ファイルです。"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FiletreeItem, {
          name: "whatap.conf",
          type: "file",
          children: "モニタリングのためのエージェントの情報とアクセスキー、WhaTapデータ収集サーバーのIP情報などを保存する設定ファイルです。"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FiletreeItem, {
          name: "security.conf (or paramkey.txt)",
          type: "file",
          children: "SQL変数、HTTPクエリの照会、Thread中止機能を利用する時に入力するセキュリティキーを保存します。"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FiletreeItem, {
          name: "server.js",
          type: "file",
          children: ["例のファイル名です。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Next.js"
          }), "アプリインスタンス用のサーバー設定ファイルです。"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "serverjsコードを作成する",
        children: "server.jsコードを作成する"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Next.js"
        }), "アプリケーションインスタンスのための", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "server.js"
        }), "ファイルを作成してください。 このファイルは、プロジェクトのルート(Root) 経路に位置する必要があります。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "whatapエージェント初期化",
        children: "Whatapエージェント初期化"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=\"server.js\"",
          children: "var WhatapAgent = require('whatap').NodeAgent;\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "nextjs及びその他の必要モジュールの読み込み",
        children: "Next.js及びその他の必要モジュールの読み込み"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=\"server.js\"",
          children: "const {createServer} = require('http')\nconst {parse} = require('url')\nconst next = require('next')\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アプリケーション設定",
        children: "アプリケーション設定"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=\"server.js\"",
          children: "const dev = process.env.NODE_ENV !== 'production'\nconst hostname = 'localhost'\nconst port = 3000\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "nextjsアプリケーションのインスタンス作成",
        children: "Next.jsアプリケーションのインスタンス作成"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["次のコードで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "dev"
        }), "は開発モードの起動有無を示し、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "hostname"
        }), "と", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "port"
        }), "には、サーバーのホスト名とポート番号を設定してください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=\"server.js\"",
          children: "const app = next({dev, hostname, port})\nconst handle = app.getRequestHandler()\n\napp.prepare().then(() => {\n    createServer(async (req, res) => {\n        try {\n            const parsedUrl = parse(req.url, true)\n            const {pathname, query} = parsedUrl\n\n            /**\n            * Render the page.\n            */\n            await handle(req, res, parsedUrl);\n        } catch (err) {\n            console.error('Error occurred handling', req.url, err)\n            res.statusCode = 500\n            res.end('internal server error')\n        }\n    })\n    .once('error', (err) => {\n        console.error(err)\n        process.exit(1)\n    })\n    .listen(port, () => {\n        console.log(`> Ready on http://${hostname}:${port}`)\n    })\n})\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "fullcode",
        children: "全体コードを見る"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "完成した完全なコードを参照してください。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=\"server.js\"",
          children: "var WhatapAgent = require('whatap').NodeAgent;\n\nconst {createServer} = require('http')\nconst {parse} = require('url')\nconst next = require('next')\n\nconst dev = process.env.NODE_ENV !== 'production'\nconst hostname = 'localhost'\nconst port = 3000\n\nconst app = next({dev, hostname, port})\nconst handle = app.getRequestHandler()\n\napp.prepare().then(() => {\n    createServer(async (req, res) => {\n        try {\n            const parsedUrl = parse(req.url, true)\n            const {pathname, query} = parsedUrl\n\n            /**\n            * Render the page.\n            */\n            await handle(req, res, parsedUrl);\n        } catch (err) {\n            console.error('Error occurred handling', req.url, err)\n            res.statusCode = 500\n            res.end('internal server error')\n        }\n    })\n    .once('error', (err) => {\n        console.error(err)\n        process.exit(1)\n    })\n    .listen(port, () => {\n        console.log(`> Ready on http://${hostname}:${port}`)\n    })\n})\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "アプリケーションを実行する",
        children: "アプリケーションを実行する"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=\"SH\"",
          children: "node server.js\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_apm_install_next_step_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {})]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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