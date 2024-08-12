"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[4825],{

/***/ 11904:
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
  "value": "基本画面ガイド",
  "id": "基本画面ガイド",
  "level": 2
}, {
  "value": "時間別変化量を確認する",
  "id": "時間別変化量を確認する",
  "level": 2
}, {
  "value": "テーブル別のサイズを確認する",
  "id": "テーブル別のサイズを確認する",
  "level": 2
}, {
  "value": "照会データのダウンロード",
  "id": "照会データのダウンロード",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, InDoc, ProdImg} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["ホーム画面 > プロジェクト選択 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_reportStat",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_dbSize",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "データベースごとのテーブルのサイズを集計し、推移情報をチャートで提供します。 データベースの容量が増加する傾向を識別して管理できます。 容量が急速に増加する場合を事前に把握して備えることができます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "データベースのサイズは、性能にも大きな影響を与える可能性があります。 サイズの増加により、クエリの実行時間が長くなる可能性があるため、性能問題の解決を準備することができます。 間違ったクエリやデータベース構造によりサイズが増加する可能性のある問題を事前に把握して予防することも必要です。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "データベースサイズの推移により、使用量のパターンとデータの成長が理解できます。 将来の容量要件を予測し、対策を講じることができます。 これらの変化をモニタリングすることは、リソースとコストを最適化するのに役立ちます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
      product: "mysql",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["MySQLのデータベースサイズ情報は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "information_schema.tables"
        }), "で照会するため、モニタリングアカウントにテーブル照会権限が必要です。 次のように権限設定が必要です。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-sql",
          children: "grant select on {DB_NAME}.* to whatap;\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "information_schema"
              }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "performance_schema"
              }), "のサイズは収集されません。"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "収集サイクルは1時間に1回収集します。"
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
      product: "postgresql",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["全データベースサイズは、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "pg_database_size"
        }), "関数で照会するため、モニタリングアカウントにconnect権限または", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "pg_read_all_stats"
        }), "権限が必要です。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "template database"
        }), "は収集から除外されます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["個別テーブルのサイズは、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "pg_relation_size"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "pg_indexes_size"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "pg_total_relation_size"
        }), "関数で照会するため、その照会権限が必要です。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-sql",
          children: "grant pg_read_all_stats to whatap;\r\ngrant usage on schema {schema_name} to whatap;\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pg_catalog"
              }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "sys"
              }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "information_schema"
              }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pg_toast"
              }), "スキーマのサイズは収集しません。"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "収集サイクルは1時間に1回収集します。"
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "基本画面ガイド",
        children: "基本画面ガイド"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
        img: "db-database-size.png",
        desc: "データベースのサイズ"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "time",
              className: "uitext"
            }), "で照会したい時間を設定してください。 緑のボタンを選択して照会時間を選択することもできます。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "instance",
              className: "uitext"
            }), "で照会したい対象を選択してください。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "検索アイコン",
              src: (__webpack_require__(305)/* ["default"] */ .A) + "",
              width: "35",
              height: "29"
            }), "ボタンを選択してください。"]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "照会時間は最大62日まで設定できます。 3日以上照会する場合、グラフには1日平均で表示されます。"
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "日付と時間を検索するには、時計の表示を選択してください。 日付と時間テキスト領域をクリックして、日付と時間を選択するオプションを表示します。"
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "時間別変化量を確認する",
        children: "時間別変化量を確認する"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06025",
          className: "uitext"
        }), "から特定時間のグラフバーを選択すると、開始時間から選択した時間までのデータベースサイズ推移と変化量を一覧形式で確認できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
        img: "db-database-size-select-db.png",
        desc: "DBサイズ"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "テーブル別のサイズを確認する",
        children: "テーブル別のサイズを確認する"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06026",
          className: "uitext"
        }), "でデータベースを選択すると、そのデータベース内のサイズTOP50に該当するテーブル別サイズを一覧で確認できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
        img: "db-database-size-top50.png",
        desc: "DBサイズ"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        product: "mysql",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["基本的にテーブル別", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "DATA SIZE"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "INDEX SIZE"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "ROWS"
          }), "を表示します。 これは", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "information_schema.tables"
          }), "の情報で、実際のサイズと異なる場合があります。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "information_schema.innodb_tablespaces"
          }), "の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "FILE SIZE"
          }), "を一緒に確認するには、DBXエージェントに次のオプションを設定します。 このサイズは実際のサイズに似ています。"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='whatap.conf'",
            children: "table_filesize=true\n"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "note",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["モニタリングアカウントに照会権限があるテーブルを対象とします。 モニタリング用アカウント作成の詳細については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "install-agent#uid",
              children: "次の文書"
            }), "を参照してください。"]
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        product: "postgresql,mysql",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["テーブル別", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "DATA SIZE"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "INDEX SIZE"
          }), "を表示します。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL06572",
            className: "uitext"
          }), "セクションのテーブル一覧から", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "uitext",
            children: "TABLENAME"
          }), "カラム項目を選択すると", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "column"
          }), "及び", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "index"
          }), "構成が確認できる", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "Object detail"
            })
          }), "ウィンドウが表示されます。"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "db-database-size-objectdetail-postgresql.png",
          desc: "Object detail"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "note",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["この機能は、DBXエージェント1.6.15バージョン以降に対応しています。 データベース権限に関する設定は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "install-agent#uid",
              children: "次の文書"
            }), "を参考にしてください。"]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "照会データのダウンロード",
        children: "照会データのダウンロード"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["照会したデータをCSV形式のファイルでダウンロードできます。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "ダウンロードアイコン",
          src: (__webpack_require__(36966)/* ["default"] */ .A) + "",
          width: "49",
          height: "24"
        }), "ボタンを選択した後", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06026",
          className: "uitext"
        }), "または", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06572",
          className: "uitext"
        }), "を選択してください。"]
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

/***/ 94317:
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
/* harmony import */ var _common_items_db_databasesize_new_feature_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11904);


const frontMatter = {
	id: 'database-size',
	title: 'データベースのサイズ',
	description: 'データベースごとのテーブルのサイズを集計し、推移情報をチャートで提供します。',
	tags: [
		'MySQL',
		'データベース',
		'データベースのサイズ'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "mysql/database-size",
  "title": "データベースのサイズ",
  "description": "データベースごとのテーブルのサイズを集計し、推移情報をチャートで提供します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/mysql/database-size.mdx",
  "sourceDirName": "mysql",
  "slug": "/mysql/database-size",
  "permalink": "/ja/mysql/database-size",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/mysql/database-size.mdx",
  "tags": [
    {
      "inline": true,
      "label": "MySQL",
      "permalink": "/ja/tags/my-sql"
    },
    {
      "inline": true,
      "label": "データベース",
      "permalink": "/ja/tags/データベース"
    },
    {
      "inline": true,
      "label": "データベースのサイズ",
      "permalink": "/ja/tags/データベースのサイズ"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "database-size",
    "title": "データベースのサイズ",
    "description": "データベースごとのテーブルのサイズを集計し、推移情報をチャートで提供します。",
    "tags": [
      "MySQL",
      "データベース",
      "データベースのサイズ"
    ]
  },
  "sidebar": "mysqlSidebar",
  "previous": {
    "title": "テーブルサイズの増減",
    "permalink": "/ja/mysql/table-size"
  },
  "next": {
    "title": "レポート",
    "permalink": "/ja/mysql/report-intro"
  }
};
const assets = {

};




const toc = [..._common_items_db_databasesize_new_feature_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM];
function _createMdxContent(props) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_db_databasesize_new_feature_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {});
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



/***/ }),

/***/ 36966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0OSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNzUgMTEuMzkzOVY2Ljc1SDExLjI1VjExLjM5MzlIOC45MTY2N0wxMyAxNS40OTE3TDE3LjA4MzMgMTEuMzkzOUgxNC43NVpNNy43NSAxNi42NjI1VjE3LjgzMzNIMTguMjVWMTYuNjYyNUg3Ljc1VjE2LjY2MjVaIiBmaWxsPSIjQURBREFEIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjMxIDExLjA4OUMyNi4yOTI5IDEwLjczNyAyNi4yNTIzIDEwLjQ0NzQgMjYuMTg4MSAxMC4yMkMyNi4xMjM5IDkuOTkyNzEgMjYuMDM2MiA5LjgxMzA1IDI1LjkyNSA5LjY4MTA1QzI1LjgxMzggOS41NDkwNSAyNS42ODMzIDkuNDU5MjIgMjUuNTMzNiA5LjQxMTU1QzI1LjM4MzkgOS4zNjM4OCAyNS4yMTQ5IDkuMzQwMDUgMjUuMDI2NyA5LjM0MDA1QzI0LjgwNDIgOS4zNDAwNSAyNC41OTQ2IDkuMzg1ODggMjQuMzk3OCA5LjQ3NzU1QzI0LjIwMTEgOS41NjkyMiAyNC4wMzIxIDkuNzE1ODggMjMuODkwOSA5LjkxNzU1QzIzLjc0OTggMTAuMTE5MiAyMy42Mzg1IDEwLjM4NSAyMy41NTczIDEwLjcxNUMyMy40NzYgMTEuMDQ1MSAyMy40MzUzIDExLjQ0NDcgMjMuNDM1MyAxMS45MTRDMjMuNDM1MyAxMi4zOTA3IDIzLjQ3NiAxMi43OTIyIDIzLjU1NzMgMTMuMTE4NUMyMy42Mzg1IDEzLjQ0NDkgMjMuNzQ5OCAxMy43MDg5IDIzLjg5MDkgMTMuOTEwNUMyNC4wMzIxIDE0LjExMjIgMjQuMjAxMSAxNC4yNTg5IDI0LjM5NzggMTQuMzUwNUMyNC41OTQ2IDE0LjQ0MjIgMjQuODA0MiAxNC40ODggMjUuMDI2NyAxNC40ODhDMjUuMjgzMyAxNC40ODggMjUuNDkwOCAxNC40NDA0IDI1LjY0OTEgMTQuMzQ1QzI1LjgwNzQgMTQuMjQ5NyAyNS45MzM2IDE0LjEyMzIgMjYuMDI3NyAxMy45NjU1QzI2LjEyMTggMTMuODA3OSAyNi4xODgxIDEzLjYyODIgMjYuMjI2NiAxMy40MjY1QzI2LjI2NTEgMTMuMjI0OSAyNi4yOTI5IDEzLjAxNzcgMjYuMzEgMTIuODA1SDI4LjMxMkMyOC4zMTIgMTMuMjU5NyAyOC4yMzcxIDEzLjY4MTQgMjguMDg3NCAxNC4wN0MyNy45Mzc3IDE0LjQ1ODcgMjcuNzE3NCAxNC43OTk3IDI3LjQyNjUgMTUuMDkzQzI3LjEzNTYgMTUuMzg2NCAyNi43NzYzIDE1LjYxNTUgMjYuMzQ4NSAxNS43ODA1QzI1LjkyMDcgMTUuOTQ1NSAyNS40Mjg4IDE2LjAyOCAyNC44NzI3IDE2LjAyOEMyNC4zNTA4IDE2LjAyOCAyMy44NzgxIDE1Ljk0MzcgMjMuNDU0NiAxNS43NzVDMjMuMDMxMSAxNS42MDY0IDIyLjY2OTYgMTUuMzUxNiAyMi4zNzAyIDE1LjAxMDVDMjIuMDcwNyAxNC42Njk1IDIxLjgzOTcgMTQuMjQyNCAyMS42NzcyIDEzLjcyOUMyMS41MTQ2IDEzLjIxNTcgMjEuNDMzMyAxMi42MTA3IDIxLjQzMzMgMTEuOTE0QzIxLjQzMzMgMTEuMjI0NyAyMS41MTQ2IDEwLjYyMTYgMjEuNjc3MiAxMC4xMDQ1QzIxLjgzOTcgOS41ODc1NSAyMi4wNzA3IDkuMTU4NTUgMjIuMzcwMiA4LjgxNzU1QzIyLjY2OTYgOC40NzY1NSAyMy4wMzExIDguMjIxNzIgMjMuNDU0NiA4LjA1MzA1QzIzLjg3ODEgNy44ODQzOCAyNC4zNTA4IDcuODAwMDUgMjQuODcyNyA3LjgwMDA1QzI1LjQ0NTkgNy44MDAwNSAyNS45NDg1IDcuODg0MzggMjYuMzgwNiA4LjA1MzA1QzI2LjgxMjYgOC4yMjE3MiAyNy4xNzQxIDguNDU0NTUgMjcuNDY1IDguNzUxNTVDMjcuNzU1OSA5LjA0ODU1IDI3Ljk3MTkgOS4zOTY4OCAyOC4xMTMxIDkuNzk2NTVDMjguMjU0MyAxMC4xOTYyIDI4LjMyMDYgMTAuNjI3IDI4LjMxMiAxMS4wODlIMjYuMzFaTTMwLjM4MjQgMTMuMzg4QzMwLjM5OTYgMTMuNzg0MSAzMC40OTc5IDE0LjA3NzQgMzAuNjc3NiAxNC4yNjhDMzAuODU3MyAxNC40NTg3IDMxLjE2MSAxNC41NTQgMzEuNTg4OCAxNC41NTRDMzEuOTQ4MSAxNC41NTQgMzIuMjIxOSAxNC40Njc5IDMyLjQxMDEgMTQuMjk1NUMzMi41OTgzIDE0LjEyMzIgMzIuNjkyNCAxMy44OTQxIDMyLjY5MjQgMTMuNjA4QzMyLjY5MjQgMTMuMzg4IDMyLjU5MTkgMTMuMjEyIDMyLjM5MDkgMTMuMDhDMzIuMTg5OCAxMi45NDggMzEuOTM1MyAxMi44MzI1IDMxLjYyNzMgMTIuNzMzNUMzMS4zMTkzIDEyLjYzNDUgMzAuOTg5OSAxMi41MzM3IDMwLjYzOTEgMTIuNDMxQzMwLjI4ODMgMTIuMzI4NCAyOS45NTg5IDEyLjE5MDkgMjkuNjUwOSAxMi4wMTg1QzI5LjM0MjkgMTEuODQ2MiAyOS4wODg0IDExLjYyMjYgMjguODg3NCAxMS4zNDc1QzI4LjY4NjMgMTEuMDcyNSAyOC41ODU4IDEwLjcxMTQgMjguNTg1OCAxMC4yNjRDMjguNTg1OCA5Ljg5MDA1IDI4LjY1MjEgOS41NTA4OCAyOC43ODQ3IDkuMjQ2NTVDMjguOTE3MyA4Ljk0MjIxIDI5LjEwOTggOC42ODE4OCAyOS4zNjIyIDguNDY1NTVDMjkuNjE0NiA4LjI0OTIxIDI5LjkyMDQgOC4wODQyMiAzMC4yNzk4IDcuOTcwNTVDMzAuNjM5MSA3Ljg1Njg4IDMxLjA0NTUgNy44MDAwNSAzMS40OTg5IDcuODAwMDVDMzIuMzgwMiA3LjgwMDA1IDMzLjA2NjcgNy45ODE1NSAzMy41NTg3IDguMzQ0NTVDMzQuMDUwNiA4LjcwNzU1IDM0LjM2OTMgOS4yODEzOCAzNC41MTQ4IDEwLjA2NkgzMi42MTU0QzMyLjU5ODMgOS43OTQ3MSAzMi40OTk5IDkuNTgwMjIgMzIuMzIwMyA5LjQyMjU1QzMyLjE0MDYgOS4yNjQ4OCAzMS44OTI1IDkuMTg2MDUgMzEuNTc1OSA5LjE4NjA1QzMxLjI2NzkgOS4xODYwNSAzMS4wMjYzIDkuMjcwMzggMzAuODUwOSA5LjQzOTA1QzMwLjY3NTUgOS42MDc3MiAzMC41ODc4IDkuODEzMDUgMzAuNTg3OCAxMC4wNTVDMzAuNTg3OCAxMC4yODk3IDMwLjY4ODMgMTAuNDcxMiAzMC44ODk0IDEwLjU5OTVDMzEuMDkwNCAxMC43Mjc5IDMxLjM0NDkgMTAuODQxNSAzMS42NTI5IDEwLjk0MDVDMzEuOTYwOSAxMS4wMzk1IDMyLjI5MDMgMTEuMTQwNCAzMi42NDExIDExLjI0M0MzMi45OTE5IDExLjM0NTcgMzMuMzIxMyAxMS40OTA1IDMzLjYyOTMgMTEuNjc3NUMzMy45MzczIDExLjg2NDUgMzQuMTkxOCAxMi4xMTIgMzQuMzkyOSAxMi40MkMzNC41OTM5IDEyLjcyODEgMzQuNjk0NCAxMy4xMzE0IDM0LjY5NDQgMTMuNjNDMzQuNjk0NCAxNC4wMDQxIDM0LjYxNTMgMTQuMzM3NyAzNC40NTcgMTQuNjMxQzM0LjI5ODggMTQuOTI0NCAzNC4wODA2IDE1LjE3NTUgMzMuODAyNSAxNS4zODQ1QzMzLjUyNDUgMTUuNTkzNSAzMy4xOTI5IDE1Ljc1MyAzMi44MDc5IDE1Ljg2M0MzMi40MjI5IDE1Ljk3MyAzMi4wMDM3IDE2LjAyOCAzMS41NTAzIDE2LjAyOEMzMC40NjM3IDE2LjAyOCAyOS42NzIzIDE1Ljc5NTIgMjkuMTc2MSAxNS4zMjk1QzI4LjY3OTkgMTQuODYzOSAyOC40MzE4IDE0LjIxNjcgMjguNDMxOCAxMy4zODhIMzAuMzgyNFpNMzguNzAyNyAxNS44OTZMNDEuMjk1MSA3LjkzMjA1SDM5LjQ3MjdMMzcuODgxNCAxMy40MUgzNy44NTU3TDM2LjI5MDEgNy45MzIwNUgzNC4zOTA3TDM2Ljk4MzEgMTUuODk2SDM4LjcwMjdaIiBmaWxsPSIjQURBREFEIi8+DQo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjIzIiByeD0iMy41IiBzdHJva2U9IiM5Nzk3OTciLz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg==");

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