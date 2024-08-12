"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[45391],{

/***/ 4494:
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
	id: 'correlations',
	title: '連携プロジェクト管理',
	description: 'タグ情報を使用して、プロジェクト間のデータを連携して提供します。',
	tags: [
		'Kubernetes',
		'Kubernetesモニタリング',
		'連携分析',
		'連携プロジェクト管理'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/correlations",
  "title": "連携プロジェクト管理",
  "description": "タグ情報を使用して、プロジェクト間のデータを連携して提供します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/kubernetes/correlations.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/correlations",
  "permalink": "/ja/kubernetes/correlations",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/correlations.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Kubernetes",
      "permalink": "/ja/tags/kubernetes"
    },
    {
      "inline": true,
      "label": "Kubernetesモニタリング",
      "permalink": "/ja/tags/kubernetesモニタリング"
    },
    {
      "inline": true,
      "label": "連携分析",
      "permalink": "/ja/tags/連携分析"
    },
    {
      "inline": true,
      "label": "連携プロジェクト管理",
      "permalink": "/ja/tags/連携プロジェクト管理"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "correlations",
    "title": "連携プロジェクト管理",
    "description": "タグ情報を使用して、プロジェクト間のデータを連携して提供します。",
    "tags": [
      "Kubernetes",
      "Kubernetesモニタリング",
      "連携分析",
      "連携プロジェクト管理"
    ]
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "ネームスペース管理",
    "permalink": "/ja/kubernetes/namespace"
  },
  "next": {
    "title": "Kubernetesエージェント",
    "permalink": "/ja/kubernetes/agent-manage"
  }
};
const assets = {

};



const toc = [{
  "value": "基本画面ガイド",
  "id": "基本画面ガイド",
  "level": 2
}, {
  "value": "連携プロジェクトの追加",
  "id": "連携プロジェクトの追加",
  "level": 4
}, {
  "value": "連携プロジェクトの削除",
  "id": "連携プロジェクトの削除",
  "level": 4
}, {
  "value": "連携分析活用の例",
  "id": "連携分析活用の例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    del: "del",
    em: "em",
    h2: "h2",
    h4: "h4",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["本文書は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "correlatedProjectManagement",
        className: "uitext"
      }), "メニューを案内します。 WhaTapは、プロジェクト間のデータ連携に基づいて統合された可視性を提供します。 タグ情報を通じて連携プロジェクトを検索し、そのプロジェクトから問題の原因になりえる主な指標を素早く確認できます。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "連携プロジェクトの照会や追加、削除などの管理機能を提供します。"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "追加したプロジェクト間の連携分析が可能です。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "基本画面ガイド",
        children: "基本画面ガイド"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["ホーム画面 > プロジェクト選択 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "management",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "correlatedProjectManagement",
          className: "uitext"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-cor-pj-em.png",
        desc: "連携プロジェクトの管理"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["次は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "correlatedProjectManagement",
          className: "uitext"
        }), "メニューの基本画面の構成を案内します。 上段の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL07015",
          className: "uitext"
        }), "と下段の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL07016",
          className: "uitext"
        }), " 画面で構成されています。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "連携プロジェクトの追加",
        children: "連携プロジェクトの追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["連携プロジェクトを追加できます。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "project_selection",
          className: "uitext"
        }), "画面をクリックすると、次のように連携登録できるプロジェクトを照会できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-cor-pj-add.png",
        desc: "連携プロジェクトの追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_selection",
              className: "uitext"
            }), "画面で", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_code",
              className: "uitext"
            }), "及び", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_name",
              className: "uitext"
            }), "で検索できます。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["プロジェクト選択時、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "add",
              className: "uitext"
            }), "ボタンが活性化されます。 複数のプロジェクトを選択できます。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["プロジェクト選択後、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "add",
              className: "uitext"
            }), "ボタンをクリックすると、案内メッセージとともに下段の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07016",
              className: "uitext"
            }), "から当該プロジェクトが追加されたことを確認できます。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "連携プロジェクトの削除",
        children: "連携プロジェクトの削除"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["追加したプロジェクトを連携対象から除外したい場合", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL07151",
          className: "uitext"
        }), "一覧右側の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "削除アイコン",
          src: (__webpack_require__(96267)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "delete",
          className: "uitext"
        }), "アイコンを選択して削除します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["現在", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://docs.whatap.io/server/introduction",
                children: "Server"
              }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://docs.whatap.io/postgresql/monitoring-intro",
                children: "PostgreSQL"
              }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://docs.whatap.io/mysql/monitoring-intro",
                children: "MySQL"
              }), "サービスに対応しています。"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["追加した連携プロジェクトがリストに表示されない場合は、しばらく待ってから", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "更新アイコン",
                src: (__webpack_require__(75323)/* ["default"] */ .A) + "",
                width: "24",
                height: "24"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: "更新"
                })
              }), "アイコンを選択して更新してください。"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "delete",
                className: "uitext"
              }), "の場合、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                children: "プロジェクト修正権限"
              }), "が必要です。"]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "連携分析活用の例",
        children: "連携分析活用の例"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "hitmap",
          className: "uitext"
        }), "をドラッグして", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06209",
          className: "uitext"
        }), "画面に移動 > トランザクション項目の選択 > 右側の詳細分析画面から", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "table_view",
          className: "uitext"
        }), "を選択"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "次に、連携プロジェクトに基づく連携分析の活用例を案内します。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-cor-tbv.png",
        desc: "連携分析の活用例トレース分析 sc"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "serviceDashboard",
              className: "uitext"
            }), "の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "hitmap",
              className: "uitext"
            }), "をドラッグして", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL06209",
              className: "uitext"
            }), "画面に移動します。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["照会するトランザクションを選択し、右側の詳細分析画面から", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "指示線",
              src: (__webpack_require__(69625)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "table_view",
              className: "uitext"
            }), "を選択します。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["一覧画面から", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "指示線",
              src: (__webpack_require__(78250)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), "領域の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "指示線",
              src: (__webpack_require__(20912)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "連携アイコン"
              })
            }), "を選択すると、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "指示線",
              src: (__webpack_require__(38619)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), "連携プロジェクトの主な指標を確認できます。 連携シナリオが複数ある場合は、ドロップダウン方式で分析シナリオの一覧を提供します。"]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "照会時間"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "ユーザーが照会した最後の時間に基づいて、10分間のデータを表示します。"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["例、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "hitmap",
              className: "uitext"
            }), "で34分", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.del, {
              children: "36分の範囲をドラッグする場合、26分"
            }), "36分間のデータを表示します。"]
          }), "\n"]
        })]
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

/***/ 69625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIxNy41IiBmaWxsPSIjRjlDMTJBIi8+DQo8cGF0aCBkPSJNMTkuNjcxOSAyMi41NjI1VjE0LjE0MDZDMTkuNjcxOSAxMy41NTczIDE5LjU4ODUgMTMuMDg4NSAxOS40MjE5IDEyLjczNDRDMTkuMjY1NiAxMi4zODAyIDE5LjAzMTIgMTIuMTI1IDE4LjcxODggMTEuOTY4OEMxOC40MTY3IDExLjgwMjEgMTguMDM2NSAxMS43MTg4IDE3LjU3ODEgMTEuNzE4OEMxNy4wOTkgMTEuNzE4OCAxNi42OTI3IDExLjgxNzcgMTYuMzU5NCAxMi4wMTU2QzE2LjAzNjUgMTIuMjEzNSAxNS43OTE3IDEyLjQ4NDQgMTUuNjI1IDEyLjgyODFDMTUuNDU4MyAxMy4xNjE1IDE1LjM3NSAxMy41NDY5IDE1LjM3NSAxMy45ODQ0SDExLjczNDRDMTEuNzM0NCAxMy4zMDczIDExLjg2OTggMTIuNjU2MiAxMi4xNDA2IDEyLjAzMTJDMTIuNDIxOSAxMS40MDYyIDEyLjgyMjkgMTAuODQ5IDEzLjM0MzggMTAuMzU5NEMxMy44NjQ2IDkuODY5NzkgMTQuNDk0OCA5LjQ4NDM4IDE1LjIzNDQgOS4yMDMxMkMxNS45NzQgOC45MjE4OCAxNi43OTY5IDguNzgxMjUgMTcuNzAzMSA4Ljc4MTI1QzE4Ljc4NjUgOC43ODEyNSAxOS43NSA4Ljk2MzU0IDIwLjU5MzggOS4zMjgxMkMyMS40Mzc1IDkuNjgyMjkgMjIuMDk5IDEwLjI2MDQgMjIuNTc4MSAxMS4wNjI1QzIzLjA2NzcgMTEuODU0MiAyMy4zMTI1IDEyLjg5NTggMjMuMzEyNSAxNC4xODc1VjIyLjA3ODFDMjMuMzEyNSAyMi44NTk0IDIzLjM1OTQgMjMuNTU3MyAyMy40NTMxIDI0LjE3MTlDMjMuNTU3MyAyNC43NzYgMjMuNjk3OSAyNS4zMDIxIDIzLjg3NSAyNS43NVYyNkgyMC4xNzE5QzIwLjAwNTIgMjUuNTkzOCAxOS44ODAyIDI1LjA3MjkgMTkuNzk2OSAyNC40Mzc1QzE5LjcxMzUgMjMuODAyMSAxOS42NzE5IDIzLjE3NzEgMTkuNjcxOSAyMi41NjI1Wk0yMC4xNTYyIDE1LjcwMzFMMjAuMTcxOSAxOC4wNjI1SDE4LjQyMTlDMTcuOTAxIDE4LjA2MjUgMTcuNDMyMyAxOC4xMzU0IDE3LjAxNTYgMTguMjgxMkMxNi41OTkgMTguNDE2NyAxNi4yNDQ4IDE4LjYxNDYgMTUuOTUzMSAxOC44NzVDMTUuNjcxOSAxOS4xMjUgMTUuNDUzMSAxOS40MzIzIDE1LjI5NjkgMTkuNzk2OUMxNS4xNTEgMjAuMTYxNSAxNS4wNzgxIDIwLjU2MjUgMTUuMDc4MSAyMUMxNS4wNzgxIDIxLjUzMTIgMTUuMTUxIDIxLjk2MzUgMTUuMjk2OSAyMi4yOTY5QzE1LjQ1MzEgMjIuNjMwMiAxNS42NzcxIDIyLjg4MDIgMTUuOTY4OCAyMy4wNDY5QzE2LjI3MDggMjMuMjAzMSAxNi42MzU0IDIzLjI4MTIgMTcuMDYyNSAyMy4yODEyQzE3LjY0NTggMjMuMjgxMiAxOC4xNTEgMjMuMTU2MiAxOC41NzgxIDIyLjkwNjJDMTkuMDE1NiAyMi42NDU4IDE5LjM0OSAyMi4zMzMzIDE5LjU3ODEgMjEuOTY4OEMxOS44MTc3IDIxLjYwNDIgMTkuOTExNSAyMS4yNzA4IDE5Ljg1OTQgMjAuOTY4OEwyMC42ODc1IDIyLjQ4NDRDMjAuNjA0MiAyMi44ODAyIDIwLjQ0NzkgMjMuMjk2OSAyMC4yMTg4IDIzLjczNDRDMjAgMjQuMTcxOSAxOS43MTM1IDI0LjU4ODUgMTkuMzU5NCAyNC45ODQ0QzE5LjAwNTIgMjUuMzgwMiAxOC41NzgxIDI1LjcwMzEgMTguMDc4MSAyNS45NTMxQzE3LjU3ODEgMjYuMTkyNyAxNyAyNi4zMTI1IDE2LjM0MzggMjYuMzEyNUMxNS4zOTU4IDI2LjMxMjUgMTQuNTUyMSAyNi4xMTQ2IDEzLjgxMjUgMjUuNzE4OEMxMy4wNzI5IDI1LjMyMjkgMTIuNDg5NiAyNC43NTUyIDEyLjA2MjUgMjQuMDE1NkMxMS42NDU4IDIzLjI2NTYgMTEuNDM3NSAyMi4zNjk4IDExLjQzNzUgMjEuMzI4MUMxMS40Mzc1IDIwLjQ4NDQgMTEuNTc4MSAxOS43MTg4IDExLjg1OTQgMTkuMDMxMkMxMi4xNDA2IDE4LjM0MzggMTIuNTU3MyAxNy43NTUyIDEzLjEwOTQgMTcuMjY1NkMxMy42NjE1IDE2Ljc2NTYgMTQuMzU0MiAxNi4zODAyIDE1LjE4NzUgMTYuMTA5NEMxNi4wMzEyIDE1LjgzODUgMTcuMDE1NiAxNS43MDMxIDE4LjE0MDYgMTUuNzAzMUgyMC4xNTYyWiIgZmlsbD0iIzMzMzMzMyIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 78250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIxNy41IiBmaWxsPSIjRjlDMTJBIi8+DQo8cGF0aCBkPSJNMTIuODQzOCA1SDE2LjQ2ODhWMjUuMzc1TDE2LjE4NzUgMjlIMTIuODQzOFY1Wk0yNS41NzgxIDE5Ljg5MDZWMjEuMjE4OEMyNS41NzgxIDIyLjU3MjkgMjUuNDYzNSAyMy43NTUyIDI1LjIzNDQgMjQuNzY1NkMyNS4wMDUyIDI1Ljc3NiAyNC42NjE1IDI2LjYxOTggMjQuMjAzMSAyNy4yOTY5QzIzLjc0NDggMjcuOTc0IDIzLjE3MTkgMjguNDc5MiAyMi40ODQ0IDI4LjgxMjVDMjEuNzk2OSAyOS4xNDU4IDIwLjk5NDggMjkuMzEyNSAyMC4wNzgxIDI5LjMxMjVDMTkuMjI0IDI5LjMxMjUgMTguNDg0NCAyOS4xMjUgMTcuODU5NCAyOC43NUMxNy4yNDQ4IDI4LjM2NDYgMTYuNzI0IDI3LjgyODEgMTYuMjk2OSAyNy4xNDA2QzE1Ljg4MDIgMjYuNDQyNyAxNS41NDY5IDI1LjYxNDYgMTUuMjk2OSAyNC42NTYyQzE1LjA1NzMgMjMuNjk3OSAxNC44ODAyIDIyLjY0MDYgMTQuNzY1NiAyMS40ODQ0VjE5LjYyNUMxNC44Njk4IDE4LjQ2ODggMTUuMDQxNyAxNy40MTE1IDE1LjI4MTIgMTYuNDUzMUMxNS41MzEyIDE1LjQ4NDQgMTUuODY0NiAxNC42NTYyIDE2LjI4MTIgMTMuOTY4OEMxNi42OTc5IDEzLjI3MDggMTcuMjE4OCAxMi43MzQ0IDE3Ljg0MzggMTIuMzU5NEMxOC40Njg4IDExLjk3NCAxOS4yMDgzIDExLjc4MTIgMjAuMDYyNSAxMS43ODEyQzIwLjk4OTYgMTEuNzgxMiAyMS43OTY5IDExLjk0NzkgMjIuNDg0NCAxMi4yODEyQzIzLjE3MTkgMTIuNjE0NiAyMy43NDQ4IDEzLjExOTggMjQuMjAzMSAxMy43OTY5QzI0LjY2MTUgMTQuNDYzNSAyNS4wMDUyIDE1LjMwNzMgMjUuMjM0NCAxNi4zMjgxQzI1LjQ2MzUgMTcuMzM4NSAyNS41NzgxIDE4LjUyNiAyNS41NzgxIDE5Ljg5MDZaTTIxLjkzNzUgMjEuMjE4OFYxOS44OTA2QzIxLjkzNzUgMTkuMDM2NSAyMS44OTA2IDE4LjI5NjkgMjEuNzk2OSAxNy42NzE5QzIxLjcxMzUgMTcuMDQ2OSAyMS41NjI1IDE2LjUzMTIgMjEuMzQzOCAxNi4xMjVDMjEuMTM1NCAxNS43MDgzIDIwLjg0MzggMTUuMzk1OCAyMC40Njg4IDE1LjE4NzVDMjAuMDkzOCAxNC45NzkyIDE5LjYxOTggMTQuODc1IDE5LjA0NjkgMTQuODc1QzE4LjU0NjkgMTQuODc1IDE4LjExNDYgMTQuOTc0IDE3Ljc1IDE1LjE3MTlDMTcuMzk1OCAxNS4zNjk4IDE3LjA5MzggMTUuNjUxIDE2Ljg0MzggMTYuMDE1NkMxNi41OTM4IDE2LjM2OTggMTYuMzk1OCAxNi43ODEyIDE2LjI1IDE3LjI1QzE2LjEwNDIgMTcuNzA4MyAxNi4wMDUyIDE4LjIwMzEgMTUuOTUzMSAxOC43MzQ0VjIyLjM3NUMxNi4wMjYgMjMuMDcyOSAxNi4xNzE5IDIzLjcxMzUgMTYuMzkwNiAyNC4yOTY5QzE2LjYxOTggMjQuODgwMiAxNi45NDc5IDI1LjM0MzggMTcuMzc1IDI1LjY4NzVDMTcuODEyNSAyNi4wMzEyIDE4LjM4MDIgMjYuMjAzMSAxOS4wNzgxIDI2LjIwMzFDMTkuNjMwMiAyNi4yMDMxIDIwLjA4ODUgMjYuMTA5NCAyMC40NTMxIDI1LjkyMTlDMjAuODE3NyAyNS43MzQ0IDIxLjEwOTQgMjUuNDM3NSAyMS4zMjgxIDI1LjAzMTJDMjEuNTU3MyAyNC42MjUgMjEuNzEzNSAyNC4xMDk0IDIxLjc5NjkgMjMuNDg0NEMyMS44OTA2IDIyLjg0OSAyMS45Mzc1IDIyLjA5MzggMjEuOTM3NSAyMS4yMTg4WiIgZmlsbD0iIzMzMzMzMyIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 38619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIxNy41IiBmaWxsPSIjRjlDMTJBIi8+DQo8cGF0aCBkPSJNMTcuODI4MSAyMy4yNjU2QzE4LjI5NjkgMjMuMjY1NiAxOC43MTM1IDIzLjE2NjcgMTkuMDc4MSAyMi45Njg4QzE5LjQ1MzEgMjIuNzcwOCAxOS43NSAyMi40NjM1IDE5Ljk2ODggMjIuMDQ2OUMyMC4xODc1IDIxLjYxOTggMjAuMzA3MyAyMS4wNjc3IDIwLjMyODEgMjAuMzkwNkgyMy43NUMyMy43MjkyIDIxLjU4ODUgMjMuNDUzMSAyMi42MzU0IDIyLjkyMTkgMjMuNTMxMkMyMi4zOTA2IDI0LjQxNjcgMjEuNjgyMyAyNS4xMDQyIDIwLjc5NjkgMjUuNTkzOEMxOS45MjE5IDI2LjA3MjkgMTguOTQ3OSAyNi4zMTI1IDE3Ljg3NSAyNi4zMTI1QzE2Ljc2MDQgMjYuMzEyNSAxNS43ODY1IDI2LjEzNTQgMTQuOTUzMSAyNS43ODEyQzE0LjEzMDIgMjUuNDE2NyAxMy40NDc5IDI0Ljg5MDYgMTIuOTA2MiAyNC4yMDMxQzEyLjM2NDYgMjMuNTE1NiAxMS45NTgzIDIyLjY4MjMgMTEuNjg3NSAyMS43MDMxQzExLjQyNzEgMjAuNzEzNSAxMS4yOTY5IDE5LjU4MzMgMTEuMjk2OSAxOC4zMTI1VjE2Ljc4MTJDMTEuMjk2OSAxNS41MjA4IDExLjQyNzEgMTQuMzk1OCAxMS42ODc1IDEzLjQwNjJDMTEuOTU4MyAxMi40MTY3IDEyLjM2NDYgMTEuNTc4MSAxMi45MDYyIDEwLjg5MDZDMTMuNDQ3OSAxMC4yMDMxIDE0LjEzMDIgOS42ODIyOSAxNC45NTMxIDkuMzI4MTJDMTUuNzc2IDguOTYzNTQgMTYuNzQ0OCA4Ljc4MTI1IDE3Ljg1OTQgOC43ODEyNUMxOS4wNDY5IDguNzgxMjUgMjAuMDcyOSA5LjAzMTI1IDIwLjkzNzUgOS41MzEyNUMyMS44MTI1IDEwLjAyMDggMjIuNDk0OCAxMC43Mzk2IDIyLjk4NDQgMTEuNjg3NUMyMy40NzQgMTIuNjM1NCAyMy43MjkyIDEzLjc5NjkgMjMuNzUgMTUuMTcxOUgyMC4zMjgxQzIwLjMwNzMgMTQuNDQyNyAyMC4xOTc5IDEzLjgzMzMgMjAgMTMuMzQzOEMxOS44MDIxIDEyLjg0MzggMTkuNTIwOCAxMi40Njg4IDE5LjE1NjIgMTIuMjE4OEMxOC44MDIxIDExLjk2ODggMTguMzU0MiAxMS44NDM4IDE3LjgxMjUgMTEuODQzOEMxNy4yMTg4IDExLjg0MzggMTYuNzI5MiAxMS45NTgzIDE2LjM0MzggMTIuMTg3NUMxNS45Njg4IDEyLjQwNjIgMTUuNjc3MSAxMi43MjkyIDE1LjQ2ODggMTMuMTU2MkMxNS4yNzA4IDEzLjU4MzMgMTUuMTMwMiAxNC4xMDQyIDE1LjA0NjkgMTQuNzE4OEMxNC45NzQgMTUuMzIyOSAxNC45Mzc1IDE2LjAxMDQgMTQuOTM3NSAxNi43ODEyVjE4LjMxMjVDMTQuOTM3NSAxOS4xMDQyIDE0Ljk3NCAxOS44MDczIDE1LjA0NjkgMjAuNDIxOUMxNS4xMTk4IDIxLjAyNiAxNS4yNTUyIDIxLjU0MTcgMTUuNDUzMSAyMS45Njg4QzE1LjY2MTUgMjIuMzk1OCAxNS45NTgzIDIyLjcxODggMTYuMzQzOCAyMi45Mzc1QzE2LjcyOTIgMjMuMTU2MiAxNy4yMjQgMjMuMjY1NiAxNy44MjgxIDIzLjI2NTZaIiBmaWxsPSIjMzMzMzMzIi8+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ 20912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS41NjU1NiAxNC4wNTAyTDkuMTAxMDkgMTAuNTE0Nkw3Ljc1NzU5IDkuMTcxMTJMNC4yMjIwNiAxMi43MDY3QzIuMjcwNDQgMTQuNjU4MyAyLjI3MDQ0IDE3LjgyNjEgNC4yMjIwNiAxOS43Nzc3QzYuMTczNjcgMjEuNzI5MyA5LjM0MTUxIDIxLjcyOTMgMTEuMjkzMSAxOS43Nzc3TDE0LjgyODcgMTYuMjQyMkwxMy40ODUyIDE0Ljg5ODdMOS45NDk2MiAxOC40MzQyQzguNzQwNDcgMTkuNjQzNCA2Ljc3NDcxIDE5LjY0MzQgNS41NjU1NiAxOC40MzQyQzQuMzU2NDEgMTcuMjI1MSA0LjM1NjQxIDE1LjI1OTMgNS41NjU1NiAxNC4wNTAyWk05LjE3MTggMTYuMjQyMkwxNi4yNDI5IDkuMTcxMTJMMTQuODI4NyA3Ljc1NjkxTDcuNzU3NTkgMTQuODI4TDkuMTcxOCAxNi4yNDIyVjE2LjI0MjJaTTkuMTcxOCA3Ljc1NjkxTDEwLjUxNTMgOS4xMDA0MUwxNC4wNTA4IDUuNTY0ODhDMTUuMjYgNC4zNTU3MiAxNy4yMjU4IDQuMzU1NzIgMTguNDM0OSA1LjU2NDg4QzE5LjY0NDEgNi43NzQwMyAxOS42NDQxIDguNzM5NzggMTguNDM0OSA5Ljk0ODk0TDE0Ljg5OTQgMTMuNDg0NUwxNi4yNDI5IDE0LjgyOEwxOS43Nzg0IDExLjI5MjRDMjEuNzMgOS4zNDA4MyAyMS43MyA2LjE3Mjk5IDE5Ljc3ODQgNC4yMjEzN0MxNy44MjY4IDIuMjY5NzYgMTQuNjU5IDIuMjY5NzYgMTIuNzA3MyA0LjIyMTM3TDkuMTcxOCA3Ljc1NjkxWiIgZmlsbD0iIzc1NzU3NSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 75323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjQiIGZpbGw9IiM5Nzk3OTciLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMTcuMjYyM0wxMiAxOS4zMzM0VjE3Ljk5NEM4LjY4NjI5IDE3Ljk5NCA2IDE1LjI5NTQgNiAxMS45NjY2QzYgMTAuNzYyNyA2LjM1MTM0IDkuNjQxMjkgNi45NTY2MyA4LjcwMDEyTDguMDI1MiA5LjUwOTAzQzcuNTg2NDcgMTAuMjIzNiA3LjMzMzMzIDExLjA2NTQgNy4zMzMzMyAxMS45NjY2QzcuMzMzMzMgMTQuNTU1NyA5LjQyMjY3IDE2LjY1NDYgMTIgMTYuNjU0NlYxNS4zMTUxTDE1IDE3LjI2MjNaTTkgNi42MTM4OEwxMiA4LjY4NTAxVjcuMjc4NjJDMTQuNTc3MyA3LjI3ODYyIDE2LjY2NjcgOS4zNzc1IDE2LjY2NjcgMTEuOTY2NkMxNi42NjY3IDEyLjg4NjQgMTYuNDAzIDEzLjc0NDMgMTUuOTQ3NCAxNC40NjgyTDE3LjAxNTIgMTUuMjc2NUMxNy42Mzc3IDE0LjMyNjUgMTggMTMuMTg5IDE4IDExLjk2NjZDMTggOC42Mzc3NiAxNS4zMTM3IDUuOTM5MiAxMiA1LjkzOTJWNC42NjY3NUw5IDYuNjEzODhaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 96267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMCAyMkg0VjZoMnYxNGgxMlY2aDJ2MTZ6bTItMThoLTVsLTEuMTQzLTJIOC4xNDNMNyA0SDJ2MmgyMFY0eiINCiAgICBmaWxsPSIjNzU3NTc1IiAvPg0KICA8cGF0aCBkPSJNOSA4aDJ2MTBIOVY4ek0xMyA4aDJ2MTBoLTJWOHoiIGZpbGw9IiM3NTc1NzUiIC8+DQo8L3N2Zz4=");

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