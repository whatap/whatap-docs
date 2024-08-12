"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[24479],{

/***/ 24514:
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
  "value": "ファイアウォール設定の確認",
  "id": "ファイアウォール設定の確認",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ファイアウォール設定の確認",
      children: "ファイアウォール設定の確認"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["WhaTapのデータ収集サーバーにTCPアウトバウンドポリシーを設定しない場合、モニタリング情報を送信できません。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "ファイアウォール遮断"
      }), "を", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "解除"
      }), "してください。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "telnet"
      }), "コマンドを使用して、\"Connected to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "IP"
      }), "\"を確認します。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-sh",
        children: "$ telnet 52.193.60.176 6600\r\nTrying 52.193.60.176...\r\nConnected to 52.193.60.176.\r\nEscape character is '^]'.\n"
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["収集サーバーの情報は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/",
          children: "WhaTapモニタリングサービス"
        }), "からプロジェクトを選択した後、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "管理"
          })
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "エージェントインストール"
          })
        }), " メニューから確認できます。"]
      })
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

/***/ 32417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ agent_troubleshooting_contentTitle),
  "default": () => (/* binding */ agent_troubleshooting_MDXContent),
  frontMatter: () => (/* binding */ agent_troubleshooting_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ agent_troubleshooting_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_check-firewall.mdx
var _check_firewall = __webpack_require__(24514);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_python-permission-denied.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Permission deniedエラー",
  "id": "permission-deniedエラー",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "permission-deniedエラー",
      children: "Permission deniedエラー"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WhaTap Pythonモニタリングを使用するには", (0,jsx_runtime.jsx)(_components.strong, {
        children: "読み取りおよび書き込み"
      }), "権限が必要です。"]
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["_$WHATAP_HOME/whatap.conf_WhaTap設定ファイルの", (0,jsx_runtime.jsx)(_components.strong, {
          children: "読み取りおよび書き込み"
        }), "権限"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["_$WHATAP_HOME/logs_WhaTapログディレクトリと下位ファイルの", (0,jsx_runtime.jsx)(_components.strong, {
          children: "読み取りおよび書き込み"
        }), "権限"]
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["権限拒否エラー(Permission denied error)が発生すると、次のように", (0,jsx_runtime.jsx)(_components.code, {
        children: "$WHATAP_HOME"
      }), "に権限を付与してください。"]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "$ echo `sudo chmod -R 777 $WHATAP_HOME`\n"
      })
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_python-agent-data-error.mdx


const _python_agent_data_error_frontMatter = {};
const _python_agent_data_error_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _python_agent_data_error_toc = [{
  "value": "プロジェクトエージェントの未登録およびモニタリングデータの収集エラー",
  "id": "プロジェクトエージェントの未登録およびモニタリングデータの収集エラー",
  "level": 2
}, {
  "value": "ポートの競合発生",
  "id": "ポートの競合発生",
  "level": 3
}, {
  "value": "$WHATAP_HOME 環境変数の設定不可",
  "id": "whatap_home-環境変数の設定不可",
  "level": 3
}];
function _python_agent_data_error_createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "プロジェクトエージェントの未登録およびモニタリングデータの収集エラー",
        children: "プロジェクトエージェントの未登録およびモニタリングデータの収集エラー"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ログファイル(", (0,jsx_runtime.jsx)(_components.em, {
          children: "$WHATAP_HOME/logs/"
        }), ")を確認し、それぞれの問題について次のように解決してください。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "whatap-hook.log"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "CONF FILE ERROR：設定ファイルを作成する権限がありません。ファイルを作成してください。"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "CONF READ ERROR：設定ファイルは存在しますが、読み取り権限がありません。権限を付与してください。"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "LOG FILE ERROR：ログディレクトリを作成する権限がありません。ディレクトリを作成してください。"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "LOGGING ERROR：ログディレクトリは存在しますが、書き込み権限がありません。権限を付与してください。"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsxs)(_components.em, {
            children: ["whatap-boot-", (0,jsx_runtime.jsx)(_components.code, {
              children: "yyyymmdd"
            }), ".log"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "license or whatp.server.host error：アクセスキーまたは収集サーバーのアドレスが無効です。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "ポートの競合発生",
        children: "ポートの競合発生"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["内部通信を行うエージェントは、基本的にUDP 6600番ポートを使用します。内部ポートが競合する場合、", (0,jsx_runtime.jsx)(_components.code, {
          children: "net_udp_port=xxx"
        }), "オプションでポート番号を変更してください。"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "whatap_home-環境変数の設定不可",
        children: "$WHATAP_HOME 環境変数の設定不可"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Apache HTTPD"
            }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Apacheでウェブサーバーを実行する場合は、次のように環境変数を設定してください。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "<VirtualHost *:80>\r\n    #ServerName\r\n    #DocumentRoot\r\n\r\n        SetEnv WHATAP_HOME \"application path\"\r\n    # Directory\r\n</VirtualHost>\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "環境変数の手動設定"
            }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "必要に応じて、次のように手動で環境変数を設定してください。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-python",
              metastring: "title=Python",
              children: "---\r\nimport os\r\nos.environ.setdefault(\"WHATAP_HOME\", [application path]\")\r\nimport whatap\r\n---\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function _python_agent_data_error_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_python_agent_data_error_createMdxContent, {
      ...props
    })
  }) : _python_agent_data_error_createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/python/agent-troubleshooting.mdx


const agent_troubleshooting_frontMatter = {
	id: 'agent-troubleshooting',
	title: 'インストール問題の解決',
	description: 'Pythonエージェントのインストール問題の解決',
	tags: [
		'Python',
		'問題解決',
		'Troubleshooting'
	]
};
const agent_troubleshooting_contentTitle = undefined;
const metadata = {
  "id": "python/agent-troubleshooting",
  "title": "インストール問題の解決",
  "description": "Pythonエージェントのインストール問題の解決",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/python/agent-troubleshooting.mdx",
  "sourceDirName": "python",
  "slug": "/python/agent-troubleshooting",
  "permalink": "/ja/python/agent-troubleshooting",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/python/agent-troubleshooting.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Python",
      "permalink": "/ja/tags/python"
    },
    {
      "inline": true,
      "label": "問題解決",
      "permalink": "/ja/tags/問題解決"
    },
    {
      "inline": true,
      "label": "Troubleshooting",
      "permalink": "/ja/tags/troubleshooting"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-troubleshooting",
    "title": "インストール問題の解決",
    "description": "Pythonエージェントのインストール問題の解決",
    "tags": [
      "Python",
      "問題解決",
      "Troubleshooting"
    ]
  },
  "sidebar": "pySidebar",
  "previous": {
    "title": "インストールチェックリスト",
    "permalink": "/ja/python/install-check"
  },
  "next": {
    "title": "エージェント設定",
    "permalink": "/ja/python/set-agent"
  }
};
const assets = {

};

/*길이, 공통 사항인지 별개인지
프로젝트에 에이전트가 등록되지 않는 경우 모니터링 데이터 수집이 이루어지지 않는 경우
*/





const agent_troubleshooting_toc = [..._check_firewall/* toc */.RM, ...toc, ..._python_agent_data_error_toc];
function agent_troubleshooting_createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_check_firewall/* default */.Ay, {}), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_python_agent_data_error_MDXContent, {})]
  });
}
function agent_troubleshooting_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_troubleshooting_createMdxContent, {
      ...props
    })
  }) : agent_troubleshooting_createMdxContent(props);
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