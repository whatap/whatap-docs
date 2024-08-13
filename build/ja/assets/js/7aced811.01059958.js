"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[74857],{

/***/ 2903:
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
  "value": "アクセスキーの確認",
  "id": "check-accesskey",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, InDoc} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "check-accesskey",
      children: "アクセスキーの確認"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "アクセスキー"
      }), "は、WhaTapサービスを有効にするための固有IDです。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["インストール手順セクションで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "issue_project_access_key",
        className: "uitext"
      }), "ボタンをクリックします。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "アクセスキー"
      }), "を自動的に発行した後、次のステップを進みます。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "kubernetes",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "caution",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "アクセスキー"
          }), "は、他のプロジェクトに重複して使用することができません。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "ネームスペースプロジェクト"
          }), "には、別の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "アクセスキー"
          }), "が必要です。"]
        })
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["プロジェクトを作成すると、自動的に", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), "ページに移動します。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), "ページが移動しない場合は、画面左側のメニューから", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "management",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), "を選択してください。"]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 23086:
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
  "value": "プロジェクト作成",
  "id": "create-project",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, InDoc, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "create-project",
      children: "プロジェクト作成"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
      product: "kafka",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["エージェントをインストールする前に、まず", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Featureプロジェク"
        }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          class: "Features",
          children: "Features"
        }), ")を生成します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "WhaTapモニタリングサービス"
            }), "に移動し、ログインします。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["プロジェクトを作成するには、左のサイドメニューから", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN07332",
              className: "uitext"
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "+"
              })
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN06696",
              className: "uitext"
            }), "ボタンを選択します。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07073",
              className: "uitext"
            }), "画面で、プロジェクトにインストールする", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Feature商品"
            }), "を選択します。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_name",
              className: "uitext"
            }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "data_server_region",
              className: "uitext"
            }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_time_zone",
              className: "uitext"
            }), "項目を順番に設定します。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "create-project-v3.png",
            desc: "プロジェクトの生成"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07727",
              className: "uitext"
            }), "で、警告通知メッセージの言語を選択します。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["すべての設定を完了した後は ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "creating_a_project",
              className: "uitext"
            }), " ボタンを選択します。"]
          }), "\n"]
        }), "\n"]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Xclude, {
      product: "kafka",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "エージェントをインストールする前にプロジェクトを作成してください。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "WhaTapモニタリングサービス"
            }), "に移動し、ログインします。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["プロジェクトを作成するには、左のサイドメニューから", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN07332",
              className: "uitext"
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "+"
              })
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN06696",
              className: "uitext"
            }), "ボタンを選択します。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07073",
              className: "uitext"
            }), " 画面でプロジェクトにインストールする製品を選択してください。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_name",
              className: "uitext"
            }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "data_server_region",
              className: "uitext"
            }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_time_zone",
              className: "uitext"
            }), "項目を順番に設定します。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "create-project-v3.png",
            desc: "プロジェクトの生成"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07727",
              className: "uitext"
            }), "で、警告通知メッセージの言語を選択します。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["すべての設定を完了した後は ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "creating_a_project",
              className: "uitext"
            }), " ボタンを選択します。"]
          }), "\n"]
        }), "\n"]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "data_server_region",
              className: "uitext"
            }), "は、リージョン(クラウドサービスを提供するためにインストールしたデータセンターのグループ)を意味します。特定のリージョンを選択すると、そのリージョンに所属するデータセンターにユーザーのデータが保存されます。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_time_zone",
              className: "uitext"
            }), "は通知とレポートを生成する基準時間です。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["複数のプロジェクトをグループで管理する場合は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_groups",
              className: "uitext"
            }), "からグループを選択するか、グループを追加してください。 グループの詳細については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../project/group",
              children: "次の文書"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["組織を選択してプロジェクトを追加する場合は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "group_of_organization",
              className: "uitext"
            }), "を必須に設定する必要があります。"]
          }), "\n"]
        }), "\n"]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 55202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ install_agent_contentTitle),
  "default": () => (/* binding */ install_agent_MDXContent),
  frontMatter: () => (/* binding */ install_agent_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ install_agent_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/getting-started/_create-project-v2.mdx
var _create_project_v2 = __webpack_require__(23086);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/getting-started/_accesskey-v2.mdx
var _accesskey_v2 = __webpack_require__(2903);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_go-docker-setting-library.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Goライブラリーの設定する",
  "id": "goライブラリーの設定する",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {InDoc} = _components;
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "goライブラリーの設定する",
      children: "Goライブラリーの設定する"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Goアプリケーションのソースコードに", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/whatap/go-api",
        children: "github.com/whatap/go-api"
      }), "パッケージを追加してください。"]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "go get github.com/whatap/go-api\n"
      })
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "trace.Init()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trace.Shutdown()"
      }), "関数で初期化と終了を設定してください。 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trace.Start()」"
      }), ",", (0,jsx_runtime.jsx)(_components.code, {
        children: "trace.End()"
      }), "関数でトランザクションの開始終了を設定してください。"]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-go",
        metastring: "title='Go'",
        children: "import \"github.com/whatap/go-api/trace\"\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.    \n    defer trace.Shutdown()    \n\n    ctx, _ := trace.Start(context.Bacground(), \"Start Tx\")\n\n    ...\n\n    trace.End(ctx, err)\n}\n"
      })
    }), (0,jsx_runtime.jsx)(InDoc, {
      product: "golang",
      children: (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ライブラリ設定の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
            href: "api-guide",
            children: "次の文書"
          }), "を参照してください。"]
        })
      })
    }), (0,jsx_runtime.jsx)(InDoc, {
      product: "kubernetes",
      children: (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ライブラリ設定の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
            href: "../golang/api-guide",
            children: "次の文書"
          }), "を参照してください。"]
        })
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/golang/install-agent.mdx


const install_agent_frontMatter = {
	id: 'install-agent',
	title: 'エージェントのインストール',
	description: 'Go環境のアプリケーションサーバーにエージェントをインストールする方法について説明します。',
	tags: [
		'Go',
		'エージェントのインストール'
	]
};
const install_agent_contentTitle = undefined;
const metadata = {
  "id": "golang/install-agent",
  "title": "エージェントのインストール",
  "description": "Go環境のアプリケーションサーバーにエージェントをインストールする方法について説明します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/golang/install-agent.mdx",
  "sourceDirName": "golang",
  "slug": "/golang/install-agent",
  "permalink": "/ja/golang/install-agent",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/golang/install-agent.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Go",
      "permalink": "/ja/tags/go"
    },
    {
      "inline": true,
      "label": "エージェントのインストール",
      "permalink": "/ja/tags/エージェントのインストール"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "install-agent",
    "title": "エージェントのインストール",
    "description": "Go環境のアプリケーションサーバーにエージェントをインストールする方法について説明します。",
    "tags": [
      "Go",
      "エージェントのインストール"
    ]
  },
  "sidebar": "goSidebar",
  "previous": {
    "title": "サポート環境",
    "permalink": "/ja/golang/supported-spec"
  },
  "next": {
    "title": "Docker環境インストール",
    "permalink": "/ja/golang/install-agent-docker"
  }
};
const assets = {

};

/*Go 라이브러리 설정하기*/





const install_agent_toc = [..._create_project_v2/* toc */.RM, ..._accesskey_v2/* toc */.RM, {
  "value": "エージェントダウンロード",
  "id": "エージェントダウンロード",
  "level": 2
}, {
  "value": "エージェント設定",
  "id": "set-agent",
  "level": 2
}, {
  "value": "基本設定",
  "id": "基本設定",
  "level": 3
}, {
  "value": "<code>WHATAP_HOME</code>環境変数の設定",
  "id": "whatap_home環境変数の設定",
  "level": 3
}, {
  "value": "プロセス別エージェント名の設定",
  "id": "duplicate_appname",
  "level": 3
}, ...toc, {
  "value": "モニタリングの開始",
  "id": "モニタリングの開始",
  "level": 2
}];
function install_agent_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Filetree, FiletreeItem, ImgLang, TabItem, Tabs} = _components;
  if (!Filetree) install_agent_missingMdxReference("Filetree", true);
  if (!FiletreeItem) install_agent_missingMdxReference("FiletreeItem", true);
  if (!ImgLang) install_agent_missingMdxReference("ImgLang", true);
  if (!TabItem) install_agent_missingMdxReference("TabItem", true);
  if (!Tabs) install_agent_missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "モニタリング対象アプリケーションサーバーからTCP通信にデータを配信します。また、WhaTap収集サーバーにデータを送信するには、同じサーバにエージェントをインストールする必要があります。インストール方式は、パッケージインストールで可能です。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["エージェントは基本", (0,jsx_runtime.jsx)(_components.strong, {
          children: "127.0.0.1:6600"
        }), "TCPサーバーで動作します。Goアプリケーションからデータを受信し、WhaTap収集サーバーにOutbound 6600ポートに送信します。"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "WhaTapリポジトリ(Repository)をインストールします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "whatap-agent Linuxパッケージ(yum, apt-get)をインストールします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "whatap-agentサービスを実行してください。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "golang_system.png",
      desc: "Go Monitoring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["WhaTapモニタリングサービスを使用するには、", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.whatap.io/ja/signup/",
        children: "会員登録"
      }), "後、プロジェクトを作成し、ターゲットサーバーにエージェントをインストールする必要があります。"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_create_project_v2/* default */.Ay, {}), "\n", "\n", (0,jsx_runtime.jsx)(_accesskey_v2/* default */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "エージェントダウンロード",
        children: "エージェントダウンロード"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "アクセスキー"
        }), "が発行されたら、次のコマンドを使用してエージェントをダウンロードしてください。"]
      }), (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "golang",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "rc",
          label: "Red Hat/CentOS",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='SH'",
              children: "## パッケージリポジトリ登録\n$ sudo rpm -Uvh https://repo.whatap.io/centos/5/noarch/whatap-repo-1.0-1.noarch.rpm\n\n## パッケージインストール\n$ sudo yum install whatap-agent\n"
            })
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "du",
          label: "Debian/Ubuntu",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='SH'",
              children: "## パッケージリポジトリ登録\n$ wget https://repo.whatap.io/debian/release.gpg -O -|sudo apt-key add -\n$ wget https://repo.whatap.io/debian/whatap-repo_1.0_all.deb\n$ sudo dpkg -i whatap-repo_1.0_all.deb\n$ sudo apt-get update\n\n## パッケージインストール\n$ sudo apt-get install whatap-agent\n"
            })
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "al",
          label: "Amazon Linux",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='SH'",
              children: "## パッケージリポジトリ登録\n$ sudo rpm --import https://repo.whatap.io/centos/release.gpg\n$ echo \"[whatap]\" | sudo tee /etc/yum.repos.d/whatap.repo > /dev/null\n$ echo \"name=whatap packages for enterprise linux\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n$ echo \"baseurl=https://repo.whatap.io/centos/latest/\\$basearch\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n$ echo \"enabled=1\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n$ echo \"gpgcheck=0\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n\n## パッケージインストール\n$ sudo yum install whatap-agent\n"
            })
          })
        }), (0,jsx_runtime.jsxs)(TabItem, {
          value: "apl",
          label: "Alpine Linux",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz",
              children: "whatap-agent.tar.gz"
            }), "ファイルをダウンロードし、「/」ディレクトリを基準に圧縮して解凍します。", (0,jsx_runtime.jsx)(_components.em, {
              children: "/usr/whatap/agent"
            }), " パスにモニタリングファイルを作成します。"]
          }), (0,jsx_runtime.jsxs)(Tabs, {
            children: [(0,jsx_runtime.jsx)(TabItem, {
              value: "x64",
              label: "x64",
              default: true,
              children: (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-docker",
                  metastring: "title='x64'",
                  children: "wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz\ntar -xvzf whatap-agent.tar.gz -C /\n"
                })
              })
            }), (0,jsx_runtime.jsx)(TabItem, {
              value: "aarch64",
              label: "AArch64",
              default: true,
              children: (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-docker",
                  metastring: "title='AArch64'",
                  children: "wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/aarch64/whatap-agent.tar.gz\ntar -xvzf whatap-agent.tar.gz -C /\n"
                })
              })
            })]
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "エージェントは、モニタリング情報を収集するためのトレーサー、収集した情報をサーバーに転送するためのエージェント、トレーサーとエージェントをサーバーに動的に適用するためのインストールスクリプトファイルで構成します。エージェントファイルの詳細な説明については、次を参照してください。"
      }), (0,jsx_runtime.jsxs)(Filetree, {
        name: "whatap",
        children: [(0,jsx_runtime.jsx)(FiletreeItem, {
          name: "whatap-agent",
          type: "file",
          children: "エージェントおよび、トレーサーからUDPで送信された情報を収集サーバーに送信するプログラムです。"
        }), (0,jsx_runtime.jsx)(FiletreeItem, {
          name: "whatap_agent",
          type: "file",
          children: "サービスの実行ファイルです。"
        }), (0,jsx_runtime.jsx)(FiletreeItem, {
          name: "whatap.conf",
          type: "file",
          children: "設定情報および収集サーバーのIP、アクセスキーを入力するファイルです。"
        }), (0,jsx_runtime.jsxs)(FiletreeItem, {
          name: "whatap-boot-yyyymmdd.log",
          type: "file",
          children: ["エージェントログファイルです。(パス：", (0,jsx_runtime.jsx)(_components.em, {
            children: "/usr/whata/agent/log"
          }), ")"]
        }), (0,jsx_runtime.jsx)(FiletreeItem, {
          name: "/etc/init.d",
          type: "folder",
          children: (0,jsx_runtime.jsx)(FiletreeItem, {
            name: "whatap-agent",
            type: "file",
            children: "サービスのスクリプトファイルです。"
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "set-agent",
        children: "エージェント設定"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "基本設定",
        children: "基本設定"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["次のコマンドを順番に実行して、", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.conf"
        }), "ファイルに", (0,jsx_runtime.jsx)(_components.strong, {
          children: "アクセスキー"
        }), "と", (0,jsx_runtime.jsx)(_components.strong, {
          children: "収集サーバーIPアドレス"
        }), "などを設定してください。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["アプリケーションの開始スクリプトパスに", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.conf"
            }), "ファイルを作成してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "WHATAP_HOME"
            }), "環境変数を設定しない場合は、アプリケーション起動スクリプトのパスを", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.conf"
            }), "ファイルパスとして認識します。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='SH'",
          children: "# スクリプトの実行パスにwhatap.confファイルを作成\n$ echo \"license={アクセスキー}\" >> ./whatap.conf\n$ echo \"whatap.server.host={収集サーバーのIPアドレス}\" >> ./whatap.conf\n$ echo \"app_name={アプリケーション名}\" >> ./whatap.conf\n\n# アプリケーション実行\n./app\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "license"
            }), "：", (0,jsx_runtime.jsx)(_components.strong, {
              children: "アクセスキー"
            }), "を入力してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "whatap.server.host"
            }), "：", (0,jsx_runtime.jsx)(_components.strong, {
              children: "収集サーバーのIPアドレス"
            }), "を入力してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "app_name"
            }), "：アプリケーション名を入力してください。文字列を使用してユーザー設定することができます。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "app_name"
              }), "はエージェント名を決定するための構成要素です。詳細については、", (0,jsx_runtime.jsx)(_components.a, {
                href: "agent-name",
                children: "次の文書"
              }), "を参照してください。"]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "whatap_home環境変数の設定",
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "WHATAP_HOME"
        }), "環境変数の設定"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.conf"
        }), "ファイルパスを", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHATAP_HOME"
        }), "環境変数に設定できます。", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHATAP_HOME"
        }), "パスを最初に作成してください。"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "# WHATAP_HOMEパスを作成した後、whatap.confファイルパスを設定\nmkdir ./whatap_home\necho \"license={アクセスキー}\" >> ./whatap_home/whatap.conf\necho \"whatap.server.host={収集サーバーのIPアドレス}\" >> ./whatap_home/whatap.conf\necho \"app_name={アプリケーション名}\" >> ./whatap_home/whatap.conf\n\n# アプリケーション実行\nWHATAP_HOME=./whatap_home ./app\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "duplicate_appname",
        children: "プロセス別エージェント名の設定"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["2つ以上のプロセスで実行されるアプリケーションは、1つの", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.conf"
        }), "ファイルを共有しても、ユーザーが設定した変更が反映されない場合があります。 プロセスごとにそれぞれの", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.conf"
        }), "ファイルを設定することをお勧めします。"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["エージェント名が重複しないように、ユーザーは文字列にエージェント名を追加して区別ができます。", (0,jsx_runtime.jsx)(_components.code, {
          children: "app_name"
        }), "オプションで設定した値は、エージェント名の最前列に追加されます。"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "同じインスタンスで、同じコマンドで実行されるエージェント名が重複する現象を回避できます。"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "# WHATAP_HOMEパスを先に作成した後、whatap.confファイルパス設定\nmkdir ./whatap_home\necho \"license={アクセスキー}\" >> ./whatap_home/whatap.conf\necho \"whatap.server.host={収集サーバーのIPアドレス}\" >> ./whatap_home/whatap.conf\necho \"app_name={アプリケーション名-1}\" >> ./whatap_home/whatap.conf\n\n# アプリケーション実行\nWHATAP_HOME=./whatap_home ./app \n\n# WHATAP_HOMEパスを先に作成した後、whatap.confファイルパス設定\nmkdir ./whatap_home1\necho \"license={アクセスキー}\" >> ./whatap_home1/whatap.conf\necho \"whatap.server.host={収集サーバーのIPアドレス}\" >> ./whatap_home1/whatap.conf\necho \"app_name={アプリケーション名-2}\" >> ./whatap_home1/whatap.conf\n\n# アプリケーション実行\nWHATAP_HOME=./whatap_home1 ./app\n\n"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "モニタリングの開始",
        children: "モニタリングの開始"
      }), (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "golang",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "rc",
          label: "Red Hat/CentOS",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "アプリケーションサーバーを再起動すると、エージェントが情報収集を開始します。"
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "du",
          label: "Debian/Ubuntu",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "アプリケーションサーバーを再起動すると、エージェントが情報収集を開始します。"
          })
        }), (0,jsx_runtime.jsxs)(TabItem, {
          value: "al",
          label: "Amazon Linux",
          children: [(0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "次のコマンドを実行して、WhaTapエージェントデーモンを実行してください。"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "/usr/whatap/php/whatap-agent start\n"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "次のコマンドを実行して、WhaTapサービスが正常に実行されていることを確認してください。"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "ps -elf | grep whatap_agent_static\n"
                })
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "アプリケーションサーバーを再起動すると、エージェントが情報収集を開始します。"
          })]
        })]
      })]
    })]
  });
}
function install_agent_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(install_agent_createMdxContent, {
      ...props
    })
  }) : install_agent_createMdxContent(props);
}
function install_agent_missingMdxReference(id, component) {
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