"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[27691],{

/***/ 90042:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_db-agent-network.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "エージェントをインストールしているデータベースサーバーとWhaTap収集サーバー間のネットワーク通信の設定です。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "license"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "エージェントのインストール時にサーバーから付与されたプロジェクトアクセスキーを設定します。プロジェクトアクセスキーには、エージェントが属するプロジェクトとセキュリティ通信のためのパスワードキーが含まれています。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "whatap.server.host"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "127.0.0.1,127.0.1"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "エージェントが収集したデータを送信するWhaTap収集サーバーのIPアドレスを設定します。収集サーバーの冗長化で2つ以上のIPを所有する場合は、コンマ(,)を区切り文字として使用します。設定したIPアドレスには、収集サーバーproxyデーモンがリスニング状態でサービスされる必要があります。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "whatap.server.port"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "6600"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["収集サーバーのポート(port)を設定します。ポートは1つのみ設定ができるので、", (0,jsx_runtime.jsx)(_components.code, {
            children: "whatap_server_host"
          }), "に設定した収集サーバは同一ポートを使用する必要があります。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "dbms"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モニタリングするデータベースの種類を設定します。DBの種類は次のいずれかを設定できます。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "oracle"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "postgresql"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mysql"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mssql"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "db_ip"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "モニタリングするデータベースサーバーのIPアドレスを設定します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "db_port"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "データベースが通信に使用するポートを設定します。各データベースのデフォルトポートは、次のとおりです。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Oracle: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1521"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["PostgreSQL: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "5432"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["EDB: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "5444"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["MySQL: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "3306"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["MS SQL: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1433"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "db"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "データベース接続に必要なdb名を設定します。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Oracleの場合、SIDを設定します。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PostgreSQLとEDBで設定しない場合は、デフォルトでPostgreSQLのDBが使用されます。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "MS SQLの場合、設定しなければ既定値としてmasterのDBを使用します。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "MySQLの場合、設定しなくてもいいです。"
          }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/altibase-v1/agent-network.mdx


const agent_network_frontMatter = {
	id: 'agent-network',
	title: 'エージェントネットワーク通信',
	description: 'データベースエージェントのネットワーク通信に関する設定です。',
	keywords: [
		'Altibase',
		'データベース',
		'データベースモニタリング',
		'エージェント',
		'ネットワーク',
		'通信'
	],
	isTranslationMissing: false
};
const agent_network_contentTitle = undefined;
const metadata = {
  "id": "altibase-v1/agent-network",
  "title": "エージェントネットワーク通信",
  "description": "データベースエージェントのネットワーク通信に関する設定です。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/altibase-v1/agent-network.mdx",
  "sourceDirName": "altibase-v1",
  "slug": "/altibase-v1/agent-network",
  "permalink": "/ja/altibase-v1/agent-network",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/altibase-v1/agent-network.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-network",
    "title": "エージェントネットワーク通信",
    "description": "データベースエージェントのネットワーク通信に関する設定です。",
    "keywords": [
      "Altibase",
      "データベース",
      "データベースモニタリング",
      "エージェント",
      "ネットワーク",
      "通信"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "altibasev1Sidebar",
  "previous": {
    "title": "設定",
    "permalink": "/ja/altibase-v1/agent-settings"
  },
  "next": {
    "title": "エージェント名の識別",
    "permalink": "/ja/altibase-v1/agent-naming"
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