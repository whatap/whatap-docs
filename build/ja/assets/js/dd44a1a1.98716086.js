"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[67435],{

/***/ 73310:
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



/*node js, java*/


const toc = [{
  "value": "Agent CONF. <code class=\"oldfunc\">Old</code>",
  "id": "agent_configuration",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    p: "p",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "agent_configuration",
      children: ["Agent CONF. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "oldfunc",
        children: "Old"
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["ホーム画面> プロジェクト選択> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentSetting",
        className: "uitext"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "oldfunc",
        children: "Old"
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["モニタリング対象サーバーに位置する", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "whatap.conf"
      }), "ファイルを直接修正することなく、エージェント設定オプションを追加、変更、または削除できます。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "BTN08153",
        className: "uitext"
      }), "ボタンをクリックする時に選択したエージェントの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "whatap.conf"
      }), "ファイルをダウンロードします。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["エージェント設定機能は、使用性と機能を改善した", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_management",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_agentSetting",
          className: "uitext"
        }), "メニューの利用をお勧めします。 画面右上の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "new_agents_setting",
          className: "uitext"
        }), "ボタンを選択してください。 詳細については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "set-agent#set-agent-service",
          children: "次の文書"
        }), "を参照にしてください。"]
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

/***/ 2984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports frontMatter, contentTitle, toc, default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "エージェントログ",
  "id": "agent_log",
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
    section: "section",
    ..._provideComponents(),
    ...props.components
  }, {Cmdname, ProdImg} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return _jsxs(_components.section, {
    className: "remark-sectionize-h2",
    children: [_jsx(_components.h2, {
      id: "agent_log",
      children: "エージェントログ"
    }), _jsxs(_components.p, {
      children: ["ホーム画面 > プロジェクト選択 > ", _jsx(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", _jsx(Cmdname, {
        sid: "side_agentLog",
        className: "uitext"
      })]
    }), _jsx(ProdImg, {
      img: "ipa-agent-log.png",
      desc: "エージェントログ"
    }), _jsxs(_components.p, {
      children: ["モニタリング対象サーバーに保存されているエージェントログを照会できます。 ログのファイル名は、", _jsxs(_components.em, {
        children: ["whatap-", _jsx(_components.code, {
          children: "YYYYMMDD"
        }), ".log"]
      }), "形式です。 各ログを選択して、ログに含まれてあるエラーやイベントに関する情報が確認できます。"]
    }), _jsx(_components.admonition, {
      type: "note",
      children: _jsxs(_components.p, {
        children: ["ログに関連するエージェント設定は、", _jsx(_components.a, {
          href: "agent-log",
          children: "次の文書"
        }), "を参照にしてください。"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ..._provideComponents(),
    ...props.components
  };
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 89199:
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
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["ホーム画面> プロジェクト選択> ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "アプリケーションの環境を確認し、性能に関連する設定を確認できます。 エージェントおよびアプリケーションに関する詳細情報を確認できます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "右上のテキスト入力欄から希望する項目がフィルタリングできます。"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["モニタリング対象サーバーに位置するエージェントおよびアプリケーションの変更が自動的に反映されない場合は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "更新アイコン",
            src: (__webpack_require__(70240)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "refresh",
            className: "uitext"
          }), "ボタンを選択してください。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "エージェントリスト"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "画面左側のアプリケーション一覧では、プロジェクトに割り当てられたエージェントの一覧を確認できます。 個々のエージェント項目を選択すると、右画面に、設定された環境変数、エージェント設定及びに性能に関する情報を照会できます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "ipa-agent-list.png",
        desc: "エージェントリスト",
        width: "400",
        height: "auto"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["エージェント一覧を更新するか、非活性化されたエージェントを再起動しても一覧に自動的に表示されない場合は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "更新アイコン",
          src: (__webpack_require__(70240)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), "ボタンを選択してください。"]
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

/***/ 78111:
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
  "value": "環境変数",
  "id": "side_environmentVariable",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, InDoc, ProdImg} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "side_environmentVariable",
      children: "環境変数"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["ホーム画面 > プロジェクト選択 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_environmentVariable",
        className: "uitext"
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
      img: "ipa-env-var.png",
      desc: "環境変数"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["アプリケーションの実行に関連する環境変数情報を照会できます。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "boot_env",
        className: "uitext"
      }), "メニューは、照会時点の環境変数情報を収集して提供します。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "System.getProperty()"
      }), "を使用して、パラメータとして渡されたキーの値を照会します。 主な確認事項は次のとおりです。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "(アプリケーション).version"
          }), ": アプリケーションのバージョンを確認できます。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "file.encoding"
          }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "utf-8"
          }), "といったファイルエンコーディング形式を確認できます。"]
        }), "\n"]
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "java",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["アプリケーションステータス情報: 例えば", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "catalina.home"
          }), "環境変数が照会される場合、tomcat環境であることが把握できます。"]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["OS環境変数: 例えば", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "(env) LANG"
        }), "環境変数のように接尾辞", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "(env)"
        }), "形式で提供されます。"]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 37247:
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
  "value": "インスタンス性能管理",
  "id": "side_agentsConfiguration",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, InDoc, ProdImg} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "side_agentsConfiguration",
      children: "インスタンス性能管理"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["ホーム画面 > プロジェクト選択 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_bootEnvironmentVariable",
        className: "uitext"
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
      img: "ipa-run-env-var.png",
      desc: "実行環境変数"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["エージェントの実行に関連する環境変数を照会できます。 環境変数のうち、重要な情報またはアプリケーションの状態情報をWhaTapサーバーに保存し、エージェントがダウンしても照会が可能です。 エージェントバージョンやインストールパス、名前、IPアドレスなどを確認できます。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "sms_summary_download_csv",
        className: "uitext"
      }), "ボタンをクリックすると、環境変数情報をダウンロードできます。 主な確認事項は次のとおりです。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "(アプリケーション).version"
          }), ": アプリケーションのバージョンを確認できます。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "file.encoding"
          }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "utf-8"
          }), "といったファイルエンコーディング形式を確認できます。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "os.name"
          }), ": OSを確認できます。"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "user.language"
          }), ": ユーザー言語を確認できます。"]
        }), "\n"]
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "java",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "-Xms"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "-Xms"
            }), ": ヒープメモリ設定に関連する環境変数を確認できます。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "(アプリケーション).start"
            }), ": アプリケーションの開始時間を確認できます。"]
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

/***/ 51719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ instance_performance_analysis_contentTitle),
  "default": () => (/* binding */ instance_performance_analysis_MDXContent),
  frontMatter: () => (/* binding */ instance_performance_analysis_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ instance_performance_analysis_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-common.mdx
var _import_instance_performance_common = __webpack_require__(89199);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-run-env.mdx
var _import_instance_performance_run_env = __webpack_require__(37247);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-env.mdx
var _import_instance_performance_env = __webpack_require__(78111);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-heap.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "ヒープヒストグラム",
  "id": "side_heapHistogram",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_heapHistogram",
      children: "ヒープヒストグラム"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ホーム画面 > プロジェクト選択 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_heapHistogram",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-heap-histogram-java.png",
      desc: "ヒープヒストグラム"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JVM(Java仮想マシン)のメモリにロードされているヒープ占有オブジェクトの状況(ヒープメモリ上のオブジェクト別サイズ)を照会することができます。 つまり、オブジェクトそのもののサイズを照会します。 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "count",
        className: "uitext"
      }), "カラムを通じて主要オブジェクトの数を確認することが容易です。"]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["GC前まで維持されるオブジェクトの数を照会するため、実際に使用されていなくても、該当一覧には表示されます。 正確な照会のために", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "システムGC"
          })
        }), "実行後にその一覧を確認することをお勧めします。 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "システムGC"
          })
        }), "については、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#side_systemGarbageCollection",
          children: "次の文書"
        }), "を参照してください。"]
      })]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Java 6~8バージョンでは、JVMオプションなしで標準対応しますが、一部のJavaバージョンによっては次のようにJVMオプションを適用する必要があります。"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Java 9 ~ Java 15バージョン"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "-Djdk.attach.allowAttachSelf=true\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"example\"",
              children: "java -javaagent:{WHATAP_HOME}/whatap.agent-X.Y.Z.jar -Djdk.attach.allowAttachSelf=true -jar {application.jar}\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Java 16バージョン以降"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "-Djdk.attach.allowAttachSelf=true\r\n--add-opens=jdk.attach/sun.tools.attach=ALL-UNNAMED\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"example\"",
              children: "java -javaagent:{WHATAP_HOME}/whatap.agent-X.Y.Z.jar -Djdk.attach.allowAttachSelf=true --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=jdk.attach/sun.tools.attach=ALL-UNNAMED -jar {application.jar}\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Java 5以前の旧バージョン、IBM Javaには対応していません。"
          }), "\n"]
        }), "\n"]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-loaded-class.mdx


const _import_instance_performance_loaded_class_frontMatter = {};
const _import_instance_performance_loaded_class_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*<Cmdname sid="side_loadedClasses" className="uitext" /> 메뉴는 애플리케이션 성능 최적화 및 메모리 관리와 클래스 종속성 문제 등의 해결을 도울 수 있습니다.*/


const _import_instance_performance_loaded_class_toc = [{
  "value": "ロード済クラス",
  "id": "side_loadedClasses",
  "level": 2
}];
function _import_instance_performance_loaded_class_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_loaded_class_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_loaded_class_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_loadedClasses",
      children: "ロード済クラス"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ホーム画面 > プロジェクト選択 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_loadedClasses",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-loaded-class-java.png",
      desc: "ロード済クラス"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Javaアプリケーションにロードされたクラス情報を確認できます。 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_loadedClasses",
        className: "uitext"
      }), "メニューを通じてアプリケーションでロードされたクラスリストと関連詳細データを照会し、中断なくクラスの動作を変更できます。"]
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL08085",
            className: "uitext"
          }), ": ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "bsm_button_show",
            className: "uitext"
          }), "カラムで", (0,jsx_runtime.jsx)(_components.img, {
            alt: "詳細表示アイコン",
            src: (__webpack_require__(60164)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), "アイコンをクリックすると", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL08085",
            className: "uitext"
          }), "を確認できます。 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL08085",
            className: "uitext"
          }), "は、クラス内のメソッド及び継承関係情報を提供します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "redefine",
            className: "uitext"
          }), ": ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "redefine",
            className: "uitext"
          }), "カラムで", (0,jsx_runtime.jsx)(_components.img, {
            alt: "修正アイコン",
            src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), "アイコンをクリックすると、そのクラスを再定義できます。 ランタイムに既にロードされたクラスを再びロードした後、バイトコード挿入(BCI)を通じてアプリケーションを中断することなく、該当クラスの動作変更が可能です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "resource",
            className: "uitext"
          }), ": そのクラスが物理的にどのファイルからロードされたかを確認できます。 アプリケーションの複雑な多階層構造の特性上、クラスが正確にどの", (0,jsx_runtime.jsx)(_components.em, {
            children: "jar"
          }), "ファイルからロードされたかを把握する", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "resource",
            className: "uitext"
          }), "情報の確認が必要です。"]
        }), "\n"]
      }), "\n"]
    }), (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), "機能と", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "resource",
          className: "uitext"
        }), "情報確認活用の詳細は、", (0,jsx_runtime.jsx)(_components.a, {
          href: "../best-practice-guides/about-instance-performance-analysis#advanced-use-loaded-classes",
          children: "次の文書"
        }), "を参照してください。"]
      })
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "BCI(ByteCode Instrumentation)"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Javaバイトコードは、プラットフォームに独立的な中間コードでJVMで実行されます。 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BCI"
        }), "つまり、バイトコード挿入は、ソースファイルの修正なしでランタイムまたはビルドタイムにバイトコードを動的に変更して追加機能を実装する技術です。 詳細については、次の文書を参照してください。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.oracle.com/javase/specs/",
              children: "Java SE Specifications"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/package-summary.html",
              children: "Java Package Summary"
            })
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function _import_instance_performance_loaded_class_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_loaded_class_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_loaded_class_createMdxContent(props);
}
function _import_instance_performance_loaded_class_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-library-version.mdx


const _import_instance_performance_library_version_frontMatter = {};
const _import_instance_performance_library_version_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*<ImgLang img='ipa-library-version-java.png' desc='라이브러리 버전' />*/
/*Java 애플리케이션을 구성하는 라이브러리의 버전을 확인할 수 있습니다.*/


const _import_instance_performance_library_version_toc = [{
  "value": "ライブラリバージョン",
  "id": "side_libraryVersion",
  "level": 2
}];
function _import_instance_performance_library_version_createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_library_version_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_library_version_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_libraryVersion",
      children: "ライブラリバージョン"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ホーム画面 > プロジェクト選択 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_libraryVersion",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "library-version-java.png",
      desc: "ライブラリバージョン"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Javaアプリケーションに配布されたコンポーネントのリストを照会できます。 オープンソースライブラリを多く使用する環境では、", (0,jsx_runtime.jsx)(_components.em, {
        children: "jar"
      }), "ファイルのバージョン情報を確認し、互換性の問題を迅速に識別して解決できます。 また、バージョン情報の確認は、セキュリティの脆弱性があるバージョンを見つけてパッチするなど、セキュリティ管理にも容易です。"]
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["コンポーネント一覧情報: 当該", (0,jsx_runtime.jsx)(_components.em, {
            children: "jar"
          }), "ファイルの", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "name",
            className: "uitext"
          }), "及びバージョン情報を", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "detail",
            className: "uitext"
          }), "で提供します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "sms_summary_download_csv",
            className: "uitext"
          }), ": ダウンロードボタンをクリックして、バージョン情報をダウンロードできます。"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _import_instance_performance_library_version_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_library_version_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_library_version_createMdxContent(props);
}
function _import_instance_performance_library_version_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-thread-dump.mdx


const _import_instance_performance_thread_dump_frontMatter = {};
const _import_instance_performance_thread_dump_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*이를 통해 Java 애플리케이션의 성능 문제를 진단하는데 이용할 수 있습니다. * <Cmdname sid="status" className="uitext" />: このスレッドの現在の状態を確認できます。 また、Javaアプリケーションの性能問題を診断するのに活用できます。*/
/*<ScrollToLink anchor='thread-details' />*/


const _import_instance_performance_thread_dump_toc = [{
  "value": "スレッドリスト/ダンプ",
  "id": "side_threadList",
  "level": 2
}, {
  "value": "スレッドダンプ分析",
  "id": "thread-details",
  "level": 3
}, {
  "value": "スレッド状態",
  "id": "stateofthread",
  "level": 4
}, {
  "value": "スレッドダンプ情報",
  "id": "スレッドダンプ情報",
  "level": 4
}];
function _import_instance_performance_thread_dump_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang, LinkImage} = _components;
  if (!Cmdname) _import_instance_performance_thread_dump_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_thread_dump_missingMdxReference("ImgLang", true);
  if (!LinkImage) _import_instance_performance_thread_dump_missingMdxReference("LinkImage", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "side_threadList",
        children: "スレッドリスト/ダンプ"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ホーム画面 > プロジェクト選択 > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_agentsConfiguration",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "ipa-thread-list-java.png",
        desc: "スレッドリスト/ダンプ"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Javaプロセス内のすべてのスレッド状態のスナップショット情報を提供します。 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), "はCPU最適化作業において重要なメニューです。 プロセスではなくスレッド単位で状態を確認することで、CPUリソースをより細かく管理できます。 例えば、照会時点でCPUを最も多く使用しているスレッドを特定した後、該当スレッドのスタック情報を確認して性能問題を識別できます。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "thread_dump",
              className: "uitext"
            }), ": 上段右側の", (0,jsx_runtime.jsx)("code", {
              class: "my",
              children: "スレッドダンプ"
            }), "ボタンをクリックして、全体のスレッドダンプを作成できます。 スレッド全体のダンプを作成した後、スレッド一覧の下段でその情報を確認できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["個別スレッドダンプ: 各スレッドごとに", (0,jsx_runtime.jsx)(_components.img, {
              alt: "拡張アイコン",
              src: (__webpack_require__(67490)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), "アイコンを選択すると、個々のスレッドダンプ情報を確認できます。 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "stack",
              className: "uitext"
            }), "及び", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "stack_trace",
              className: "uitext"
            }), "で、スレッドの状態と実行パスに関する詳細及びスタックトレースを照会できます。 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "更新アイコン",
              src: (__webpack_require__(36495)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), "更新して確認できます。 詳細については", (0,jsx_runtime.jsx)(_components.a, {
              href: "#thread-details",
              children: "次の文書"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "thread_cpu_time",
              className: "uitext"
            }), ": 該当スレッドがCPUを占有した累積時間を意味します。 ミリ秒単位の時間を使用します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL08126",
              className: "uitext"
            }), ": スレッドリストの上段で", (0,jsx_runtime.jsx)(_components.img, {
              alt: "更新アイコン",
              src: (__webpack_require__(36495)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), "更新アイコンをクリックすると、既存のスレッドのCPU時間と現在のスレッドのCPU時間の差値が追加されます。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "tip",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "thread_cpu_time",
            className: "uitext"
          }), "は、当該スレッドがCPUを占有した総累積時間であるため、照会時点で最も多くCPUを使用しているスレッドを特定するためには", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL08126",
            className: "uitext"
          }), "値の確認が必要です。 詳細については、", (0,jsx_runtime.jsx)(_components.a, {
            href: "../best-practice-guides/about-instance-performance-analysis#advanced-use-thread-list-dump",
            children: "次の文書"
          }), "を参照にしてください。"]
        })
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CPU使用量急増タイプ"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "ヒープメモリがいっぱいの場合: 頻繁なGCによりCPU使用量が急増"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "実際のリクエストが多い場合: 大量のクライアントリクエスト処理によりCPU使用量が急増"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "誤ったコードロジック: 非効率的なアルゴリズムや無限ループによりCPU使用量が急増"
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "thread-details",
        children: "スレッドダンプ分析"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "thread_list",
          className: "uitext"
        }), "メニューで確認できる個々のスレッドダンプ情報について案内します。"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "stateofthread",
        children: "スレッド状態"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["スレッドの状態は、", (0,jsx_runtime.jsx)(_components.code, {
          children: "java.lang.Thread"
        }), "クラス内に", (0,jsx_runtime.jsx)(_components.code, {
          children: "State"
        }), "という名前のEnumerated Types(列挙型)と宣言された項目です。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "NEW"
            }), "：スレッドは作成されましたが、まだ実行されていません。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RUNNABLE"
            }), "：現在CPUを占有し、作業を行っている状態です。 OSのリソース分配により", (0,jsx_runtime.jsx)(_components.code, {
              children: "WAITING"
            }), "状態になる可能性があります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "WAITING"
            }), "：", (0,jsx_runtime.jsx)(_components.code, {
              children: "wait()"
            }), "、", (0,jsx_runtime.jsx)(_components.code, {
              children: "join()"
            }), "、", (0,jsx_runtime.jsx)(_components.code, {
              children: "park()"
            }), "メソッドなどを利用して待機している状態です。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TIMED_WAITING"
            }), "：", (0,jsx_runtime.jsx)(_components.code, {
              children: "sleep()"
            }), "、", (0,jsx_runtime.jsx)(_components.code, {
              children: "wait()"
            }), "、", (0,jsx_runtime.jsx)(_components.code, {
              children: "join()"
            }), "、", (0,jsx_runtime.jsx)(_components.code, {
              children: "park()"
            }), "メソッド等を用いて待機している状態、", (0,jsx_runtime.jsx)(_components.code, {
              children: "WAITING"
            }), "状態と異なる点は、与えられた時間に待機している状態です。 外部的な変化だけでなく、時間によっても待機状態が解除されることがあります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BLOCKED"
            }), "：使用しようとする個体のロック(Lock)が解除されるまで待機している状態です。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TERMINATED"
            }), "：実行済みの状態です。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "スレッドダンプ情報",
        children: "スレッドダンプ情報"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["スレッド一覧で各スレッドの", (0,jsx_runtime.jsx)(LinkImage, {
          img: "ico-expander-black.svg",
          className: "ico black"
        }), "ボタンをクリックすると、個別スレッドダンプ情報を確認できます。"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "ipa-java-thread-list.png",
        desc: "スレッドダンプ情報"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h5",
      children: [(0,jsx_runtime.jsx)(_components.h5, {
        id: "",
        children: (0,jsx_runtime.jsx)(Cmdname, {
          sid: "stack"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "項目"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "プロパティ"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "説明"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "thread_id",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "threadId"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "スレッドに割り当てられた固有ID"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "lock_owner_id",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "lockOwnerId"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "スレッドがブロックされたオブジェクト(Monitor) のモニタのロックを維持するスレッドID"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "waited_count",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "waitedCount"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["スレッドが", (0,jsx_runtime.jsx)(_components.code, {
                children: "WAITING"
              }), "または", (0,jsx_runtime.jsx)(_components.code, {
                children: "TIMED_WAITING"
              }), "状態になった総回数"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "blocked_count",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "blockedCount"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["スレッドが", (0,jsx_runtime.jsx)(_components.code, {
                children: "BLOCKED"
              }), "状態になった総回数"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "waited_time",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "waitedTime"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["スレッドが", (0,jsx_runtime.jsx)(_components.code, {
                children: "WAITING"
              }), "状態を継続した経過時間(ミリ秒)、スレッド競合モニタリングが非活性化された場合", (0,jsx_runtime.jsx)(_components.code, {
                children: "-1"
              }), "を返還"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "thread_cpu_time",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "threadCpuTime"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["スレッドのCPU時間合計(ナノ秒)をミリ秒で計算して表示、CPU時間測定を非活性化した場合", (0,jsx_runtime.jsx)(_components.code, {
                children: "-1"
              }), "を返還"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "status",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "threadstate"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "スレッド状態"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "blocked_time",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "blockedTime"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["スレッドが", (0,jsx_runtime.jsx)(_components.code, {
                children: "BLOCKED"
              }), "状態になってからの経過時間(ミリ秒)、スレッド競合監視が非活性化された場合", (0,jsx_runtime.jsx)(_components.code, {
                children: "-1"
              }), "を返還"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "thread_name",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "threadName"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "スレッドの固有名"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "lock_name",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "lockName"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["スレッドの入力がブロックされたり", (0,jsx_runtime.jsx)(_components.code, {
                children: "Object.wait"
              }), "メソッドを介して通知を待つモニターロックを表示した文字列"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "lock_owner_name",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "lockOwnerName"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "スレッドがブロックされるオブジェクトのモニターロックを受け入れるスレッド名"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "thread_user_time",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "threadUserTime"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "スレッドがユーザモードで実行したCPU時間(ナノ秒)をミリ秒で計算して表示"
            })]
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["スレッド情報の詳細については", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.oracle.com/javase/8/docs/api/java/lang/management/ThreadInfo.html",
            children: "次のリンク"
          }), "を参考にしてください。"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h5",
      children: [(0,jsx_runtime.jsx)(_components.h5, {
        id: "-1",
        children: (0,jsx_runtime.jsx)(Cmdname, {
          sid: "stack_trace"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "例外が発生した時のスタック(Stack) 追跡を表示します。 スタックフレーム一覧には、コードが呼び出したメソッド情報が含まれています。"
      })]
    })]
  });
}
function _import_instance_performance_thread_dump_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_thread_dump_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_thread_dump_createMdxContent(props);
}
function _import_instance_performance_thread_dump_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-open-socket.mdx


const _import_instance_performance_open_socket_frontMatter = {};
const _import_instance_performance_open_socket_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_open_socket_toc = [{
  "value": "ソケットオプーン数",
  "id": "side_openSocket",
  "level": 2
}];
function _import_instance_performance_open_socket_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_open_socket_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_open_socket_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_openSocket",
      children: "ソケットオプーン数"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ホーム画面 > プロジェクト選択 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_openSocket",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-open-socket-java.png",
      desc: "ソケットオプーン数"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaアプリケーションがTCP機能を実行するためにオープンしたソケット(Socket)情報が確認できます。これにより、アプリケーションインスタンスがデータベースなど、どの外部システムに依存するか、ネットワーク依存性(Network Dependency)を照会できます。 また、誰とアウトバウンドコールを行っているかを追跡できます。 これらの情報は、TCP通信の効率性、安定性、及び性能最適化のために重要です。"
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "count",
            className: "uitext"
          }), ": 外部システムへの接続試行回数を意味します。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "stack",
            className: "uitext"
          }), ": ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "get_stack",
            className: "uitext"
          }), "を選択して、次の接続時に確保したスタックを照会・削除できます。"]
        }), "\n"]
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmdname, {
        sid: "count",
        className: "uitext"
      }), "基準にソートした後、", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "host",
        className: "uitext"
      }), "及び", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "port",
        className: "uitext"
      }), "を確認して、どのようなサービスまたはシステムとの接続が多いかを確認できます。 以後、", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "stack",
        className: "uitext"
      }), "を確保して詳細を照会してみてください。"]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "データベースとコネクションプール"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["例えば、3306", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "port",
          className: "uitext"
        }), "の", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "count",
          className: "uitext"
        }), "が増加時に、コネクションプールを使用しなかったり、あるいはコネクションプールを頻繁に切って作り直すなど、MySQLのコネクション管理が正しく行われていない状況である可能性があります。 該当3306", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "port",
          className: "uitext"
        }), "がどのようなコード経路で使用されているかを把握するため", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "stack",
          className: "uitext"
        }), "を確保して追跡できます。"]
      })]
    })]
  });
}
function _import_instance_performance_open_socket_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_open_socket_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_open_socket_createMdxContent(props);
}
function _import_instance_performance_open_socket_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-method-stat.mdx


const _import_instance_performance_method_stat_frontMatter = {};
const _import_instance_performance_method_stat_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_method_stat_toc = [{
  "value": "メソッド性能状態",
  "id": "side_methodStat",
  "level": 2
}];
function _import_instance_performance_method_stat_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _import_instance_performance_method_stat_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_methodStat",
      children: "メソッド性能状態"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ホーム画面 > プロジェクト選択 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_methodStat",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "Javaアプリケーションで実行されたメソッド(Method)の性能統計情報を提供します。"
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "refresh",
            className: "uitext"
          }), ": データを再呼び出しします。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "reset",
            className: "uitext"
          }), ": 登録されたメソッド統計データを初期化します。"]
        }), "\n"]
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_methodStat",
          className: "uitext"
        }), "メニューを使うには、", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "agent_configuration",
          className: "uitext"
        }), "メニューから次のカスタムオプションを追加してください。 そして再起動または", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_loadedClasses",
          className: "uitext"
        }), "メニューから", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), "してください。"]
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hook_method_stat_patterns=io.home.test.baseapp.app.post.mapper.PostMapperImpl.*"
          })
        }), "\n"]
      })]
    })]
  });
}
function _import_instance_performance_method_stat_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_method_stat_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_method_stat_createMdxContent(props);
}
function _import_instance_performance_method_stat_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-datasource.mdx


const _import_instance_performance_datasource_frontMatter = {};
const _import_instance_performance_datasource_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_datasource_toc = [{
  "value": "データソース状態",
  "id": "dataSourceStatus",
  "level": 2
}];
function _import_instance_performance_datasource_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_datasource_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_datasource_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "dataSourceStatus",
      children: "データソース状態"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ホーム画面 > プロジェクト選択 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_dataSourceStatus",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-datasource-java.png",
      desc: "データソース状態"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "データソース(DataSource)の状態を確認できます。 アプリケーションが使用するデータベースコネクションプールの現在の状態と構成、接続設定情報、接続状態と設定の不一致などの情報を提供します。"
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: "コネクションプールオブジェクトの生成と同時にモニタリングが開始されるため、そのオブジェクトが使用されていなくても、データソースの状態情報に表示される可能性があります。"
      })]
    })]
  });
}
function _import_instance_performance_datasource_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_datasource_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_datasource_createMdxContent(props);
}
function _import_instance_performance_datasource_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-agent-log.mdx
var _import_instance_performance_agent_log = __webpack_require__(2984);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-system-gc.mdx


const _import_instance_performance_system_gc_frontMatter = {};
const _import_instance_performance_system_gc_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_system_gc_toc = [{
  "value": "システムGC",
  "id": "side_systemGarbageCollection",
  "level": 2
}];
function _import_instance_performance_system_gc_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_system_gc_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_system_gc_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_systemGarbageCollection",
      children: "システムGC"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ホーム画面 > プロジェクト選択 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_systemGarbageCollection",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-system-gc-java.png",
      desc: "システムGC"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "System.gc()"
      }), "を呼び出してJVM(Java仮想マシン)のヒープ領域で 動的に割り当てたメモリのうち、不要になったメモリオブジェクト(garbage)を集めて削除することができます。 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "BTN07740",
        className: "uitext"
      }), "ボタンを選択するとGCプロセスが実行され、実行前後のメモリ容量を確認できます。"]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "-XX:+DisableExplicitGC"
        }), "のように明示的なGCリクエストを非活性化するオプションが設定されている場合、", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_systemGarbageCollection",
          className: "uitext"
        }), "が動作しません。"]
      })]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "システムGCとメモリリーク"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Heapメモリ使用量が持続的に上昇した場合、メモリリークの可能性を確認し、正確に診断するため", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "システムGC"
          })
        }), "が必要です。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "メモリリクエスト有無"
            }), ": アプリケーションが継続的にメモリをリクエストしている状態であることを確認します。 メモリリクエストの増加が予想値以上であるか、またはメモリ解除が正確に行われているかを調べます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "メモリ使用量の確認"
            }), ": 実際にメモリが過剰に使用されているかを確認します。 GC実行により不要なオブジェクトを解除し、メモリ使用量の変化を調べます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "GC周期"
            }), ": メモリが十分に空いている状況でも、GCが実行されていない状態であるかを確認します。 GC周期または設定を調べます。"]
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function _import_instance_performance_system_gc_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_system_gc_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_system_gc_createMdxContent(props);
}
function _import_instance_performance_system_gc_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-heap-dump.mdx


const _import_instance_performance_heap_dump_frontMatter = {};
const _import_instance_performance_heap_dump_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_heap_dump_toc = [{
  "value": "ヒープダンプ",
  "id": "side_heapDump",
  "level": 2
}];
function _import_instance_performance_heap_dump_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_heap_dump_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_heap_dump_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_heapDump",
      children: "ヒープダンプ"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ホーム画面 > プロジェクト選択 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_heapDump",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-heap-dump-java.png",
      desc: "ヒープダンプ"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Javaアプリケーションの実行中にメモリ漏れなどの問題が発生すると、関連した問題を整理してダンプファイルを作成できます。 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "dump_heap",
        className: "uitext"
      }), "ボタンを選択します。 生成されたダンプファイルは、アプリケーションサーバーに保存されます。 エージェントをインストールしたパス下位の", (0,jsx_runtime.jsx)(_components.em, {
        children: "dump"
      }), "ディレクトリから確認できます。"]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["この機能は、Javaエージェント1.5.2バージョン以降に対応しています。 エージェント設定で", (0,jsx_runtime.jsx)(_components.code, {
          children: "heapdump_enabled"
        }), "オプションを", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "に設定してください。 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "dump_heap",
          className: "uitext"
        }), "ボタンを選択して、ヒープダンプファイルを作成する機能を活性化します。 毎回ヒープダンプを自動作成するわけではなく、そのオプションが性能に影響を与えることはありません。 ただし、ダンプの確保作業は性能に影響を与える可能性があります。"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ヒップダンプの確保"
        }), "作業は、", (0,jsx_runtime.jsx)(_components.strong, {
          children: "負荷"
        }), "の大きい作業だと言えます。 負荷とは別に、ヒープダンプがすべて抽出されるまでアプリケーションのコードは実行中止(stop the world)になるため、ユーザーが感じる性能の差はさらに激しくなる可能性があります。"]
      })]
    })]
  });
}
function _import_instance_performance_heap_dump_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_heap_dump_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_heap_dump_createMdxContent(props);
}
function _import_instance_performance_heap_dump_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-throttling.mdx


const _import_instance_performance_throttling_frontMatter = {};
const _import_instance_performance_throttling_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_throttling_toc = [{
  "value": "スロットル設定",
  "id": "side_throttlingConfiguration",
  "level": 2
}];
function _import_instance_performance_throttling_createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_throttling_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_throttling_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_throttlingConfiguration",
      children: "スロットル設定"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ホーム画面 > プロジェクト選択 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_throttlingConfiguration",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-set-throttling-java.png",
      desc: "スロットル設定"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Javaアプリケーションの負荷量制御に関連するエージェント設定を確認し、オプションを設定できます。 負荷量制御に関するエージェント設定の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
        href: "agent-load-amount",
        children: "次の文書"
      }), "を参照にしてください。"]
    })]
  });
}
function _import_instance_performance_throttling_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_throttling_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_throttling_createMdxContent(props);
}
function _import_instance_performance_throttling_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-agent-config.mdx
var _import_instance_performance_agent_config = __webpack_require__(73310);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/java/instance-performance-analysis.mdx


const instance_performance_analysis_frontMatter = {
	id: 'instance-performance-analysis',
	title: 'インスタンスの性能管理',
	description: 'Javaアプリケーションの環境を確認し、性能に関連する設定を確認できます。',
	toc_max_heading_level: 2,
	tags: [
		'Java',
		'アプリケーション',
		'インスタンスの性能管理'
	]
};
const instance_performance_analysis_contentTitle = undefined;
const metadata = {
  "id": "java/instance-performance-analysis",
  "title": "インスタンスの性能管理",
  "description": "Javaアプリケーションの環境を確認し、性能に関連する設定を確認できます。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/java/instance-performance-analysis.mdx",
  "sourceDirName": "java",
  "slug": "/java/instance-performance-analysis",
  "permalink": "/ja/java/instance-performance-analysis",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/instance-performance-analysis.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Java",
      "permalink": "/ja/tags/java"
    },
    {
      "inline": true,
      "label": "アプリケーション",
      "permalink": "/ja/tags/アプリケーション"
    },
    {
      "inline": true,
      "label": "インスタンスの性能管理",
      "permalink": "/ja/tags/インスタンスの性能管理"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "instance-performance-analysis",
    "title": "インスタンスの性能管理",
    "description": "Javaアプリケーションの環境を確認し、性能に関連する設定を確認できます。",
    "toc_max_heading_level": 2,
    "tags": [
      "Java",
      "アプリケーション",
      "インスタンスの性能管理"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "イベント受信フォーマット",
    "permalink": "/ja/java/set-event-format"
  },
  "next": {
    "title": "Log 모니터링",
    "permalink": "/ja/log/introduction"
  }
};
const assets = {

};

/*인스턴스 성능 관리 공통*/
/*실행 환경 변수 {#side_agentsConfiguration}*/
/*환경 변수 {#side_environmentVariable}*/
/*힙 히스토그램 {#side_heapHistogram}*/
/*로딩된 클래스*/
/*라이브러리 버전 {#side_libraryVersion}*/
/*스레드 목록/덤프 {#side_threadList}*/
/*소켓 오픈 개수 {#side_openSocket}*/
/*메소드 성능 상태 {#side_methodStat}*/
/*데이터소스 상태 {#dataSourceStatus}*/
/*에이전트 로그 {#agent_log}*/
/*시스템 GC {#side_systemGarbageCollection}*/
/*힙 덤프 {#side_heapDump}*/
/*쓰로틀링 설정 {#side_throttlingConfiguration}*/
/*에이전트 설정 <code class='oldfunc'>Old</code> {#agent_configuration}*/

















const instance_performance_analysis_toc = [..._import_instance_performance_common/* toc */.RM, ..._import_instance_performance_run_env/* toc */.RM, ..._import_instance_performance_env/* toc */.RM, ...toc, ..._import_instance_performance_loaded_class_toc, ..._import_instance_performance_library_version_toc, ..._import_instance_performance_thread_dump_toc, ..._import_instance_performance_open_socket_toc, ..._import_instance_performance_method_stat_toc, ..._import_instance_performance_datasource_toc, ..._import_instance_performance_system_gc_toc, ..._import_instance_performance_heap_dump_toc, ..._import_instance_performance_throttling_toc, ..._import_instance_performance_agent_config/* toc */.RM];
function instance_performance_analysis_createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_common/* default */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_run_env/* default */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_env/* default */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_loaded_class_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_library_version_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_thread_dump_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_open_socket_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_method_stat_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_datasource_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<Instanceperformanceagent_log />"
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_system_gc_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_heap_dump_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_throttling_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_agent_config/* default */.Ay, {})]
  });
}
function instance_performance_analysis_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(instance_performance_analysis_createMdxContent, {
      ...props
    })
  }) : instance_performance_analysis_createMdxContent(props);
}



/***/ }),

/***/ 60164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1wYWdldmlldzwvdGl0bGU+IC0tPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OC4wMDAwMDAsIC0yNzExLjAwMDAwMCkiIGZpbGw9ImdyZXkiPg0KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9ImljLXBhZ2V2aWV3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC4wMDAwMDAsIDM2NS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDQuMDAwMDAwKSIgaWQ9InBhZ2V2aWV3Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCwwIEMxOS4wMzUyOTQxLDAgMTkuODkzNDI1NiwwLjc5NzIzMTgzNCAxOS45OTA3OTk5LDEuODA4MTAwOTYgTDIwLDIgTDE5Ljk5OSw1LjMzMyBMMTcuOTk5LDUuMzMzIEwxOCwyIEwyLDIgTDIsMTQgTDEyLDE0IEwxMiwxNiBMMiwxNiBDMC45NjQ3MDU4ODIsMTYgMC4xMDY1NzQzOTQsMTUuMjAyNzY4MiAwLjAwOTIwMDA4MTQyLDE0LjE5MTg5OSBMLTUuMzI5MDcwNTJlLTE1LDE0IEwtNS4zMjkwNzA1MmUtMTUsMiBDLTUuMzI5MDcwNTJlLTE1LDAuOTY0NzA1ODgyIDAuNzk3MjMxODM0LDAuMTA2NTc0Mzk0IDEuODA4MTAwOTYsMC4wMDkyMDAwODE0MiBMMiwwIEwxOCwwIFogTTEzLjE2NjY2NjcsNCBDMTUuNjU2NjY2Nyw0IDE3LjY2NjY2NjcsNi4wMSAxNy42NjY2NjY3LDguNSBDMTcuNjY2NjY2Nyw5LjM4IDE3LjQwNjY2NjcsMTAuMTkgMTYuOTY2NjY2NywxMC44OSBMMTkuODc2NjY2NywxMy43OSBMMTguNDU2NjY2NywxNS4yMSBMMTUuNTQ2NjY2NywxMi4zIEMxNC44NTY2NjY3LDEyLjc0IDE0LjAzNjY2NjcsMTMgMTMuMTU2NjY2NywxMyBDMTAuNjc2NjY2NywxMyA4LjY2NjY2NjY3LDEwLjk5IDguNjY2NjY2NjcsOC41IEM4LjY2NjY2NjY3LDYuMDEgMTAuNjc2NjY2Nyw0IDEzLjE2NjY2NjcsNCBaIE0xMy4xNjY2NjY3LDYgQzExLjc4NjY2NjcsNiAxMC42NjY2NjY3LDcuMTIgMTAuNjY2NjY2Nyw4LjUgQzEwLjY2NjY2NjcsOS44OCAxMS43ODY2NjY3LDExIDEzLjE2NjY2NjcsMTEgQzE0LjU0NjY2NjcsMTEgMTUuNjY2NjY2Nyw5Ljg4IDE1LjY2NjY2NjcsOC41IEMxNS42NjY2NjY3LDcuMTIgMTQuNTQ2NjY2Nyw2IDEzLjE2NjY2NjcsNiBaIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");

/***/ }),

/***/ 85663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1lZGl0PC90aXRsZT4gLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY4LjAwMDAwMCwgLTEzOTUuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+DQogICAgICAgICAgICA8ZyBpZD0iZWRpdG9yLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDEzNTAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9ImljLWVkaXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjAwMDAwMCwgNDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLDE4IEwyMCwyMCBMMCwyMCBMMCwxOCBMMjAsMTggWiBNMTIuOTM5MzM5OCwxIEwxNy45MzMyMTA4LDYuMDA2NDA3NzggTDE3LjkwMSw2LjAzOCBMMTcuOTAzNzA4NSw2LjA0IEw4LjAwNDIxMzU2LDE1LjkzOTQ5NDkgTDgsMTUuOTM1IEw4LDE1Ljk0IEwzLDE1Ljk0IEwzLDEwLjk0IEwzLjAwNSwxMC45NCBMMywxMC45MzU1MzM5IEwxMi44OTk0OTQ5LDEuMDM2MDM4OTcgTDEyLjkwMSwxLjAzOCBMMTIuOTM5MzM5OCwxIFogTTEyLjkzNSwzLjgyOCBMNSwxMS43NjMgTDUsMTMuOTQgTDcuMTc1LDEzLjk0IEwxNS4xMDgsNi4wMDYgTDEyLjkzNSwzLjgyOCBaIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");

/***/ }),

/***/ 67490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyNHB4O2hlaWdodDogMjRweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1jYXJldC1yaWdodDwvdGl0bGU+IC0tPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjQuMDAwMDAwLCAtMjQ0LjAwMDAwMCkiIGZpbGw9IiM5NTk1OTUiPg0KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtY2FyZXQtcmlnaHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNC4wMDAwMDAsIDEyNS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4wMDAwMDAsIDYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgNi4wMDAwMDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTI3MC4wMDAwMDApIHRyYW5zbGF0ZSgtNC4wMDAwMDAsIC02LjAwMDAwMCkgIiBkPSJNLTIgMiA0IDEwIDEwIDJ6Ij48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");

/***/ }),

/***/ 36495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMWU1MDAyNS1hY2U4LTQ4OGUtYTMyNy1lYzYzYzFlZjUwOTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRFQzI5Mjc1MkE4MTFFRDlCM0E5NTc3MjZCNzA3NDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRFQzI5MjY1MkE4MTFFRDlCM0E5NTc3MjZCNzA3NDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIwMjMgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjBmOTFjYzItZTZiYy00YjUwLThhZTQtOGNmZThmOGI4OTQ2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDJiOGIwNTktYWQ4YS1hZjRhLTljNTMtMjlkMzcxNTBkOGY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+M9zsYQAABPJJREFUeNrEWGtoHFUU/u6du5vdbZJNk8Zqi602pFRDTULVBCpaW3yCYH8YTREpqH9aBBF8oIj0jw/6Q0EMhVBQRBvwR18ICmrQtiLUojVNbGObxtjm/Wx3N7uZmXs9Z6ZpLCo720nTC8Psnb0z57vnfOc7Z0bsOuigs1cnKpPYfvCI3Xx+RCeVBVcIGFyjYQyE48JaXimnHlsf2TMyhY9qbpEZVZIQsZ5+t3Xf984WNq8UIHBtB23UszM4qtF6IFd/R7Wqa7zd2ib7hty3jnfbW3I2LZLXHshlQPDtsV22TzieFfXPpc3opPbQioVCcmXIvGNJmeyQQ+N6yvPIdQAyGzK2TzgWyYXgSJCQEQ5HhgEiaUfTOQPbCe9Zvl1erWspNTEwalC52EJFUnjzsKNgMOzK3IzBhbRBXbWF3a/EkSwWOHfWRWrawNVX7yVV6A1ZSsV0VuCNZ2J4tdm/ffM9CqWLJP4a1vhzQENrg/JS4YXRFCCdYmXTxUk6J4Msdl3WBYM3t8bxwuZ/7yOdBY6edNGy38a+H2awhMIXiwroYIC6rbKa11+jH7G8WnApRHweHDdYXCKxZoUf5T3fOcQfjZuW+Nee2KAwkRY43OFCWcJT2wBjLC8YeYmsExcNIkogUUT8GNFo+9ZGx1lg/VqFl1uyeHtXDp+227DIOEk7HrrLIv2w8M0xG0URgQBpmx9MOmuwarnC0w9GcPqcS6kMxAlQhHZ77JSDn7pcpCm9QeHI0Nr9h22MXBB44E4LG+ok9h5yMTyhPUD5wMh8KTxCIamvltixNYqnNkU9D3HY+OHLKCxdvWSM1sSiwOJSvibQ0pbFzjbbe8ZLTVHKsnlIbZuelyQS3ldrefOuXo2omuMRj+I4ccKaqzFRAllM6fAFhSxDXmzepLB6hYVU1oQDkyU9oZ4DG9cpj7Q/djpeiPKRvbxU4mSfi997fSVcsVQimwsJhgWsNA5UlFDenZ8LXZAywaQ/0qm9eV2VQDoTMkyzss9Cd+tSwKLVgTSDmzRay2HiwaSXMiQY5sfwFHCCUvjmGwS526KiGACN8MWRPcLjdD8RvCgkGBarsUmDU32ON3+kQWGMuJMvVJMpjXVrFB6+2+faoeMOiaQIB4ZFTmuNlr0z3nz74wpVK5VXg2ZFjAk7PHFlG6FdgTIqnhMpoK3d8fSHn5Vv5BU9atjR0aNRv1qhtkri3lqFn7s1Os+4iESYCwIb6hV6BgwuZoxXixKU7oNjGl8fdfELrWXAYj4UeNZDR05orF1lkdRLT41TOS4RfnN14J0EHm1U6B0y+O2M9nQnHhPop3rFAIuigXqKsUBVm3c1foElXeLDF+N48n7r8n/skRvLuWb589YvHezck8NUypAmFdSddAeqp7NCxrvc9v40Fb8IGshDjTUKNSvFFT30XB9jUGh3XVA/I4T/njNJ9YkzrSIpUUwBbv8gQWrNXrHx3mczKIkbaraEJ5rz7pl/eoi1p7LMN5TKaDq4n3HxyVczOP6Hg6Xl0uNYgUAK98z/9sQ2K7XBoljgru4/PSPDvt1r4/ODC2gIIH4n6TgI/bkhGgn30sT2CYeSFOOk0YV18fP+rk32CUdaNm2MvMtu5mxYaEBsz7drQDg+llSJd9SujnxeFPERLhQetsP22C7bJxy7FQlZdtUy6/mG26xfr+eXK8KR+VuAAQDQvDP0Yp7wsgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 70240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1yZWZyZXNoPC90aXRsZT4gLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY0Ny4wMDAwMDAsIC0yMjQyLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPg0KICAgICAgICAgICAgPGcgaWQ9InRpbWUtaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzLjAwMDAwMCwgMjE5Ny4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcmVmcmVzaCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjA0LjAwMDAwMCwgNDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLDIyIEwxNC41LDE4LjkwNzQyNDIgTDEwLDE2IEwxMCwyMiBaIE0xMCw2LjEgTDUuNSwzLjAwNzQyNDE5IEwxMCwwLjEgTDEwLDYuMSBaIiBpZD0iSWNvbiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMi40MzQ4MDAxLDYuMTIyNzg2MTggTDQuMDM3OTAzMDksNy4zMzAyNDM0OSBDMy4zNzk3Mzc3LDguMzk3MjYzMTYgMyw5LjY1NDI4NTM0IDMsMTEgQzMsMTQuODY1OTkzMiA2LjEzNDAwNjc1LDE4IDEwLDE4IEMxMC41Nzc4NzY0LDE4IDExLjEzOTM5NzgsMTcuOTI5OTc1OSAxMS42NzY1NDE5LDE3Ljc5Nzk0OTkgTDEzLjYwMjY0NjgsMTkuMjQ5OTY0NCBDMTIuNDk5NTE2NywxOS43MzIzNjY2IDExLjI4MTAxMjksMjAgMTAsMjAgQzUuMDI5NDM3MjUsMjAgMSwxNS45NzA1NjI3IDEsMTEgQzEsOS4yMDI1MDE4MSAxLjUyNjk1MDk2LDcuNTI4MDc5NjEgMi40MzQ4MDAxLDYuMTIyNzg2MTggWiBNMTAsMiBDMTQuOTcwNTYyNywyIDE5LDYuMDI5NDM3MjUgMTksMTEgQzE5LDEyLjgyNTM2OTcgMTguNDU2NTgwOCwxNC41MjM4MTcxIDE3LjUyMjY5NTEsMTUuOTQyMzg5NCBMMTUuOTIwOTg4NiwxNC43MzU1ODIzIEMxNi42MDQ0MjUsMTMuNjU0NTg4NyAxNywxMi4zNzM0OTAxIDE3LDExIEMxNyw3LjEzNDAwNjc1IDEzLjg2NTk5MzIsNCAxMCw0IEM5LjM4NzgxMjE3LDQgOC43OTM5NzkxNiw0LjA3ODU4NjM1IDguMjI4MDM4NzcsNC4yMjYyMjEyNyBMNi4zMTU0NTgxMywyLjc4NjMzNzg5IEM3LjQ0MDA1NzQsMi4yODEwNzg1OSA4LjY4NzIwMzk5LDIgMTAsMiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+");

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