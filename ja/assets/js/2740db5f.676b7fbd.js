"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[18881],{

/***/ 64955:
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
    em: "em",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["収集したデータを表示するには、ホーム画面でプロジェクトを選択し、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "サイトマップ"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "メトリクス表示"
        })
      }), "を選択してください。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      children: ["例えば、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        children: props.category
      }), "という名前のカテゴリを選択し、関連する指標を検索すると、次のようにカテゴリに対応するタグ(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Tags"
      }), ")とフィールド(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Fields"
      }), ")項目を表示できます。"]
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

/***/ 12529:
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
  "value": "メトリクスデータの検索と可視化",
  "id": "メトリクスデータの検索と可視化",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "メトリクスデータの検索と可視化",
      children: "メトリクスデータの検索と可視化"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["WhaTapは、ユーザーが指定した条件に従って収集したソースデータの一覧と利便性のために様々な形で可視化されたチャートを次のように提供します。 メトリクスの元のデータを表示できる", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "tag_count",
        className: "uitext"
      }), "、可視化したチャートでメトリクスデータを表示する", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "tag_count_chart",
        className: "uitext"
      }), "、AIが学習したメトリクス指標のパターンと比較して予想パターンから外れた異常を検知できる", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "tag_count_anomaly_detection",
        className: "uitext"
      }), "メニューを確認してください。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "metrics-views.png",
      desc: "メトリクスビュー",
      className: "noneborder"
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

/***/ 38576:
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
  "value": "メトリクスとは?",
  "id": "メトリクスとは",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "メトリクスとは",
      children: "メトリクスとは?"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["WhaTapは、モニタリング対象からデータを収集し、ユーザーに提供します。エージェントから収集されるデータを", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "メトリクス"
      }), "と呼びます。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "metrics-overview.png",
      desc: ""
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "メトリクス"
      }), "は、次の情報で構成されています。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Category"
          })
        }), "：関連する指標をバインドする単位"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Tags"
          })
        }), "：収集対象を特定できる個別情報を含むデータ"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Fields"
          })
        }), "：エージェントから収集された指標"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Time"
          })
        }), "：メトリクスが収集された時間"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Oid"
          })
        }), "：メトリクスを収集したエージェントの固有番号"]
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

/***/ 95296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ metrics_intro_contentTitle),
  "default": () => (/* binding */ metrics_intro_MDXContent),
  frontMatter: () => (/* binding */ metrics_intro_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ metrics_intro_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./src/components/ChangeImgName.js
var ChangeImgName = __webpack_require__(93356);
// EXTERNAL MODULE: ./src/components/Variable.js
var Variable = __webpack_require__(19870);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_metrics-intro-exam.mdx
var _import_metrics_intro_exam = __webpack_require__(64955);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_import_metrics-chart-example-desc.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = (/* unused pure expression or super */ null && ([]));
function _createMdxContent(props) {
  return _jsxs("p", {
    children: ["メトリクスチャート画面の例では、選択した時間にモニタリング対象から収集した指標(", _jsx("code", {
      children: props.metric
    }), ")をチャートで確認できます。"]
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


// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_metrics-intro.desc.mdx
var _metrics_intro_desc = __webpack_require__(38576);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_metrics-intro-data-search-desc.mdx
var _metrics_intro_data_search_desc = __webpack_require__(12529);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/cubrid/metrics-intro.mdx


const metrics_intro_frontMatter = {
	id: 'metrics-intro',
	title: 'メトリクス',
	description: 'データベースモニタリング分析のメトリクスメニューについて学習します。',
	keywords: [
		'CUBRID',
		'メトリクス',
		'データベース',
		'データベースモニタリング'
	]
};
const metrics_intro_contentTitle = undefined;
const metadata = {
  "id": "cubrid/metrics-intro",
  "title": "メトリクス",
  "description": "データベースモニタリング分析のメトリクスメニューについて学習します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/cubrid/metrics-intro.mdx",
  "sourceDirName": "cubrid",
  "slug": "/cubrid/metrics-intro",
  "permalink": "/ja/cubrid/metrics-intro",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/cubrid/metrics-intro.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "metrics-intro",
    "title": "メトリクス",
    "description": "データベースモニタリング分析のメトリクスメニューについて学習します。",
    "keywords": [
      "CUBRID",
      "メトリクス",
      "データベース",
      "データベースモニタリング"
    ]
  },
  "sidebar": "cubridSidebar",
  "previous": {
    "title": "ロックツリー",
    "permalink": "/ja/cubrid/analysis-lock-and-deadlock"
  },
  "next": {
    "title": "CUBRID指標",
    "permalink": "/ja/cubrid/metrics-data-list"
  }
};
const assets = {

};

/*개요*/
/*메트릭스 데이터 조회 및 시각화*/








const metrics_intro_toc = [..._metrics_intro_desc/* toc */.RM, ..._import_metrics_intro_exam/* toc */.RM, ..._metrics_intro_data_search_desc/* toc */.RM];
function metrics_intro_createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", (0,jsx_runtime.jsx)(_metrics_intro_desc/* default */.Ay, {}), "\n", (0,jsx_runtime.jsx)(_import_metrics_intro_exam/* default */.Ay, {
      category: "db_cubrid_counter"
    }), "\n", (0,jsx_runtime.jsx)(ChangeImgName/* default */.A, {
      img: "metrics-example-00.png",
      desc: ""
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_metrics_intro_data_search_desc/* default */.Ay, {})]
  });
}
function metrics_intro_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(metrics_intro_createMdxContent, {
      ...props
    })
  }) : metrics_intro_createMdxContent(props);
}



/***/ }),

/***/ 93356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ChangeImgName)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _site_src_components_CheckProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82265);
/* harmony import */ var _docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92469);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90062);





function ChangeImgName({ img , desc , className  }) {
    const { i18n: { currentLocale  } ,  } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)();
    const product = (0,_site_src_components_CheckProduct__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
    let fext = img.substr(img.lastIndexOf('.') + 1);
    let fileName = img.replace('.' + fext, '');
    let imgFilePath;
    if (currentLocale != 'ko') {
        imgFilePath = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay)('/img/' + fileName + product + '-' + currentLocale + '.' + fext);
    } else {
        imgFilePath = (0,_docusaurus_useBaseUrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay)('/img/' + fileName + product + '.' + fext);
    }
    function onError(e) {
        if (currentLocale != 'ko') {
            e.target.src = '/' + currentLocale + '/img/' + fileName + product + '.' + fext;
        } else {
            e.target.src = '/img/' + fileName + product + '.' + fext;
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            loading: "lazy",
            src: imgFilePath,
            alt: desc,
            class: className,
            onError: (e)=>onError(e)
        })
    });
}; // agent-setting.png
 // 국문일 경우 agent-setting-java.png (e) => agent-setting.png
 // 다국어일 경우 agent-setting-java-en.png (e) => agent-setting-java.png (e) => agent-setting.png


/***/ }),

/***/ 82265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CheckProduct)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _docusaurus_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56347);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90062);



function CheckProduct() {
    let location = (0,_docusaurus_router__WEBPACK_IMPORTED_MODULE_2__/* .useLocation */ .zy)();
    let cProdt;
    const { i18n: { currentLocale  } ,  } = (0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
    // console.log(currentLocale);
    if (currentLocale == 'ko') {
        cProdt = location.pathname.split("/")[1];
    } else {
        cProdt = location.pathname.split("/")[2];
    }
    var product;
    if (cProdt === 'nodejs') {
        product = '-nodejs';
    } else if (cProdt === 'java') {
        product = '-java';
    } else if (cProdt === 'php') {
        product = '-php';
    } else if (cProdt === 'python') {
        product = '-python';
    } else if (cProdt === 'golang') {
        product = '-golang';
    } else if (cProdt === 'dotnet') {
        product = '-dotnet';
    } else if (cProdt === 'server') {
        product = '-server';
    } else if (cProdt === 'kubernetes') {
        product = '-k8s';
    } else if (cProdt === 'postgresql') {
        product = '-postgresql';
    } else if (cProdt === 'oracle-cloud') {
        product = '-oci';
    } else if (cProdt === 'oracle-pro') {
        product = '-oracle-pro';
    } else if (cProdt === 'oracle') {
        product = '-oracle-pro';
    } else if (cProdt === 'oracle-v1') {
        product = '-oracle';
    } else if (cProdt === 'mysql') {
        product = '-mysql';
    } else if (cProdt === 'mssql') {
        product = '-mssql';
    } else if (cProdt === 'tibero') {
        product = '-tibero';
    } else if (cProdt === 'cubrid') {
        product = '-cubrid';
    } else if (cProdt === 'altibase') {
        product = '-altibase';
    } else if (cProdt === 'redis') {
        product = '-redis';
    } else if (cProdt === 'mongodb') {
        product = '-mongodb';
    } else if (cProdt === 'url') {
        product = '-url';
    } else if (cProdt === 'amazon-cloudwatch') {
        product = '-aws-cloudwatch';
    } else if (cProdt === 'amazon-ecs') {
        product = '-aws-ecs';
    } else if (cProdt === 'azure') {
        product = '-azure';
    } else if (cProdt === 'ncloud') {
        product = '-ncloud';
    } else if (cProdt === 'aws-log') {
        product = '-aws-log';
    } else if (cProdt === 'log') {
        product = '-log';
    } else if (cProdt === 'browser') {
        product = '-browser';
    } else if (cProdt === 'npm') {
        product = '-npm';
    } else if (cProdt === 'feature') {
        product = '-feature';
    } else {
        product = '';
    }
    return product;
};


/***/ }),

/***/ 19870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);


function Status({ name  }) {
    return /*#__PURE__*/ _jsx("code", {
        children: name
    });
};


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