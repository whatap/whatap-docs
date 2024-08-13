"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[44260],{

/***/ 34404:
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
	id: 'install-agent-with-buildpack',
	title: 'ビルドパックを使用したJavaエージェントのインストール',
	description: 'ビルドパックを使用してJavaエージェントをインストールする方法を説明します。',
	keywords: [
		'Java',
		'エージェント',
		'プロジェクト',
		'アプリケーション'
	],
	displayed_sidebar: 'javaSidebar'
};
const contentTitle = undefined;
const metadata = {
  "id": "java/install-agent-with-buildpack",
  "title": "ビルドパックを使用したJavaエージェントのインストール",
  "description": "ビルドパックを使用してJavaエージェントをインストールする方法を説明します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/java/install-agent-with-buildpack.mdx",
  "sourceDirName": "java",
  "slug": "/java/install-agent-with-buildpack",
  "permalink": "/ja/java/install-agent-with-buildpack",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/install-agent-with-buildpack.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "install-agent-with-buildpack",
    "title": "ビルドパックを使用したJavaエージェントのインストール",
    "description": "ビルドパックを使用してJavaエージェントをインストールする方法を説明します。",
    "keywords": [
      "Java",
      "エージェント",
      "プロジェクト",
      "アプリケーション"
    ],
    "displayed_sidebar": "javaSidebar"
  },
  "sidebar": "javaSidebar"
};
const assets = {

};



const toc = [{
  "value": "WhaTap buildpack基本設定",
  "id": "whatap-buildpack基本設定",
  "level": 2
}, {
  "value": "オプション設定",
  "id": "オプション設定",
  "level": 2
}, {
  "value": "Tomcat10環境",
  "id": "tomcat10環境",
  "level": 2
}, {
  "value": "Container実行オプション",
  "id": "container実行オプション",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Gradleを使用するJavaアプリケーションで実行可能なドッカーイメージをビルドする場合は、ビルドパックを使用してエージェントをインストールできます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "whatap-buildpack基本設定",
        children: "WhaTap buildpack基本設定"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='build.gradle'",
          children: "tasks.named(\"bootBuildImage\") {\n\tbuildpacks = [\"urn:cnb:builder:paketo-buildpacks/java\",\t\n\t\t\t\t\t\t\t\t\"docker.io/whatap/paketo-buildpack-apm\"]\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "オプション設定",
        children: "オプション設定"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["WhaTap収集サーバーに接続されていないとデータは収集されません。 アクセスキー(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "accesskey"
        }), ")、WhaTap収集サーバーアドレス(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap.server.host"
        }), ")情報は必須です。 その他、環境や機能の必要に応じてオプションを追加設定できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='build.gradle'",
          children: "tasks.named(\"bootBuildImage\") {\n  // Whatap \n  environment[\"BP_WHATAP_ENABLED\"] = \"true\"\n  // java 17, There must be a space at the beginning.\n  environment[\"BPE_APPEND_JAVA_TOOL_OPTIONS\"] = \" --add-opens=java.base/java.lang=ALL-UNNAMED \"\n  // add multi options, delimeter is linefeed character\n  environment[\"BP_WHATAP_OPTIONS\"] = \"accesskey=aaa-bbb-ccc\\nwhatap.server.host=1.1.1.1/2.2.2.2\"\n\n  buildpacks = [\"urn:cnb:builder:paketo-buildpacks/java\",\t\"docker.io/whatap/paketo-buildpack-apm\"]\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "BP_WHATAP_ENABLED"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["WhaTapエージェントの有効の有無を設定します。 値が", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "false"
            }), "の場合、インストールは続行されますが、モニタリングが停止した状態で開始されます。 後で、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "WhaTapモニタリングサービス"
            }), "の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "管理"
              })
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "エージェント設定"
              })
            }), "メニューから", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "true"
            }), "に変更できます。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "BPE_APPEND_JAVA_TOOL_OPTIONS"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Java17バージョン以降を使用する場合は、必要に応じてjvmオプションを追加してください。"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-java",
              children: "environment[\"BPE_DELIM_JAVA_TOOL_OPTIONS\"] = \" \"\nenvironment[\"BPE_APPEND_JAVA_TOOL_OPTIONS\"] = \"--add-opens=java.base/java.lang=ALL-UNNAMED\"\n"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "delimeter環境変数を使用しない場合は、前後に空白を追加してください。"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-java",
              children: "environment[\"BPE_APPEND_JAVA_TOOL_OPTIONS\"] = \" --add-opens=java.base/java.lang=ALL-UNNAMED \"\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "BP_WHATAP_OPTIONS"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["WhaTapエージェント設定を追加できます。 ラインフィード\"\\n\"を区切り文字としてプションを設定します。 オプションは", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "key=value"
            }), "となります。 設定したオプション値は、Docker Image生成段階で", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "whatap.conf"
            }), "ファイルに保存されます。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-java",
              children: "environment[\"BP_WHATAP_OPTIONS\"] = \"accesskey={アクセスキー}\\nwhatap.server.host={収集サーバーアドレス}\"\n// 例：environment[\"BP_WHATAP_OPTIONS\"] = \"accesskey=aaa-bbb-ccc\\nwhatap.server.host=1.1.1.1/2.2.2.2\"\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "tomcat10環境",
        children: "Tomcat10環境"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Tomcat環境では、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "weaving=tomcat10"
        }), "オプションを必須で追加する必要があります。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-java",
          children: "environment[\"BP_WHATAP_OPTIONS\"] = \"accesskey={アクセスキー}\\nwhatap.server.host={収集サーバーアドレス}\\nweaving=tomcat10\"\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "container実行オプション",
        children: "Container実行オプション"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "コンテナ(Container) の実行時、環境変数としてアクセスキーとWhaTap収集サーバーアドレスを次のように設定できます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-docker",
          children: "docker run --rm -p 8080:8080 \\\n  -e accesskey={アクセスキー} \\\n  -e whatap.server.host={収集サーバーのアドレス} \\\n  -e weaving=tomcat10,webflux-6.0 \\\n  spring-boot-gradle-hello-world-pcketo-buildpack-whatap\n"
        })
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