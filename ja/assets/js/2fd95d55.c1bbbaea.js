"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[52279],{

/***/ 4266:
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
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "ApacheおよびPHP-FPMの再起動後に有効になります。"
    })
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

/***/ 82374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ agent_transaction_contentTitle),
  "default": () => (/* binding */ agent_transaction_MDXContent),
  frontMatter: () => (/* binding */ agent_transaction_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ agent_transaction_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_php-restart-apply.mdx
var _php_restart_apply = __webpack_require__(4266);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_php-trs-profile.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));



/*문장 부자연스러움*/
/*두 개가 어떻게 다른지? 0309 수정완*/



const toc = [..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_step_normal_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクショントレースの最大ステップ数を指定します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_step_max_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1024"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "収集可能なトレースステップの最大数を設定します。収集されたトレースステップの数がこの値を超えると、その後収集されるステップはすべて捨てられます。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_step_heavy_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["基本ステップの収集数を超えるた場合は、実行時間が", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_heavy_time"
        }), "を超えるステップのみを収集します。そのステップの収集可能な数を設定します。Default設定の", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_normal_count"
        }), "が800の場合、最大200個のステップが収集されます。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_step_heavy_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Millisecond"
        }), " "]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "100"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Heavyなステップの基準を指定します。指定された値より実行時間が長い場合は、", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_normal_count"
        }), "を超える場合でも", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_heavy_count"
        }), "以内で記録されます。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_basetime"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Millisecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "500"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクションが設定値以下の時間内に終了した場合、トレース情報を収集しません。ただし、5分単位で最初に呼び出されたURL、エラーが発生したトランザクションに関するトレース情報は収集されます。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.query_string_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["トランザクションURLのクエリストリングをまとめて収集する機能を有効にします。", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.query_string_urls"
        }), "に登録されたURLのみ適用されます。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.query_string_urls"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクションからクエリストリングを収集するURLを登録します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.whatap.profile_compile_file_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "compile_file"
        }), "、", (0,jsx_runtime.jsx)(_components.code, {
          children: "compile_string"
        }), " 関数が追跡されるかどうかを設定します。PHPの内部関数である", (0,jsx_runtime.jsx)(_components.code, {
          children: "compile_file"
        }), "、", (0,jsx_runtime.jsx)(_components.code, {
          children: "compile_string"
        }), " 関数はスクリプトを実行する前にコンパイルする関数で、Main、include、requireおよびautoloadスクリプトのコンパイル時間およびスクリプトファイルのパスと実行時間を確認できます。"]
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_compile_file_basetime"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Millisecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "200"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "実行時間の基準を設定します。設定した時間を超えて発生した場合のみ、情報を収集します。"
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "caution",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "whatap.profile_compile_file_basetime"
          }), "を小さく設定しすぎると、過剰な収集でサーバーに負荷をかける可能性があります。"]
        })
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_method_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["実行時間が", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_method_time"
        }), "の設定値(既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "1秒"
        }), ")を超えるユーザ関数の情報をトランザクション詳細情報を確認できます。"]
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_method_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Milliseconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_method_enabled"
        }), "設定で収集される関数の実行時間を設定します。"]
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_method_stack_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "ユーザー関数のスタック情報をトランザクションの詳細から確認できます。"
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_internal_method_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHP内部関数を追跡するかどうかを設定します。", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_internal_method_time"
        }), "の設定値(既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "1秒"
        }), ")より長くかかる場合のみ追跡します。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "caution",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "このオプションは、ユーザ定義関数ではなく、PHPの内蔵関数をすべて確認するため、性能に負荷が発生する可能性があります。"
        })
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_internal_method_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Milliseconds"
        }), " "]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHP内部関数を追跡する場合、(", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_internal_method_enabled"
        }), ")関数の実行時間を設定します。"]
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_internal_method_param_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Milliseconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHPの内部関数を追跡する場合、(", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_internal_method_enabled"
        }), ")追加で関数のパラメータ情報を収集します。"]
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.net_udp_flush_start"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["値が", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "の場合、トランザクションの開始ポイントは収集しません。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "開始時点で収集されていないため、進行中のトランザクション数を計算するアクティブトランザクション情報が少し遅れて反映される可能性があります。アクティブステータスは通常通り表示されます。"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.net_udp_profile_basetime_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["値が", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "の場合、設定された応答時間より速いトランザクションのトレース情報は収集しません。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.net_udp_profile_basetime"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Miliseconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トレース情報の収集を除外するトランザクションの応答時間を設定します。"
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "トレース情報を収集しないため、SQL、HTTPCなどの統計には反映されません。"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.net_udp_trace_ignoretime_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["値が", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "の場合、設定された応答時間を要するトランザクションおよびトレース情報を収集しません。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.net_udp_trace_ignoretime"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Miliseconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "30"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクションおよびトレース情報の収集を除くトランザクションの応答時間を設定します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.shm_tx_counter_enable"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["値が", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "であれば、", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.net_udp_trace_ignoretime_enabled"
        }), "設定でトランザクションの情報収集が除外される場合、TPS、平均応答時間、Apdex指標を共有メモリから収集すると、除外されたトランザクションの情報が統計に反映されます。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "収集されていないトランザクションの場合、TPS、平均応答時間、Apdex指標に反映されますが、その他の統計データには反映されません。"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.split_profile_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "一定量のプロファイルを仮想トランザクションに分割して、より多くのプロファイル情報を収集します。複数のトランザクション一覧に分割されます。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "同時に設定された場合、優先順位は次の通りです。"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "split"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "large"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "large"
            }), "\n"]
          }), "\n"]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.large_profile_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "一定量のプロファイルを圧縮および分割して、メモリを増やことなく多くのプロファイル情報を収集できます。"
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["約1万件のプロファイル(ステップ) 情報を収集できます。大量の場合は、", (0,jsx_runtime.jsx)(_components.code, {
                children: "whatap.split_profile_enabled"
              }), "オプションの使用をお勧めします。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "同時に設定された場合、優先順位は次の通りです。"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "split"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "large"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "large"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.circular_profile_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "最新の1024個のプロファイリング情報を収集します。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "同時に設定された場合、優先順位は次の通りです。"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "split"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "large"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "large"
            }), "\n"]
          }), "\n"]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_zip_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["プロファイル情報を圧縮して送信します。既定値は、", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "に設定されています。"]
      }), "\n"]
    }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_php-track-trs.mdx


const _php_track_trs_frontMatter = {};
const _php_track_trs_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _php_track_trs_toc = [];
function _php_track_trs_createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_active_transaction_slow_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Millisecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "収集情報を確認するダッシュボードのアクティブトランザクションアークイコライザーグラフでSlow区間として表示できるトランザクション応答時間の基準を指定します。トランザクションの応答時間が指定時間を超えた場合、Slowアクティブトランザクションの数に含まれます。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_active_transaction_very_slow_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Millisecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "8000"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_active_transaction_lost_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Millisecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "300000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクションが終了する制限時間の5分以内にトランザクションが終了しない場合、トランザクション情報はそれ以上収集されません。トランザクションのトレース情報から\"Lost Connection\"を確認できます。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_useragent_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["値が", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "の場合、トランザクションのユーザーエージェント情報を収集します。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_referer_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["値が", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "であれば、トランザクションのRefere情報を収集します。"]
      }), "\n"]
    }), "\n"]
  });
}
function _php_track_trs_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_php_track_trs_createMdxContent, {
      ...props
    })
  }) : _php_track_trs_createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_php-track-http-trs.mdx


const _php_track_http_trs_frontMatter = {};
const _php_track_http_trs_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _php_track_http_trs_toc = [];
function _php_track_http_trs_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ScrollToLink} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ScrollToLink) _missingMdxReference("ScrollToLink", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_normalize_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクションURLを変換して一般化する機能を有効にします。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_normalize_urls"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクションURLを変換して一般化する対象URLを指定します。呼び出しURLパターンを変換してパスパラメータを削除します。"
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["例えば、", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), "と設定すると、その形式で呼び出されたトランザクションURLは、", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), "形式として変換されます。複数の登録するときはコンマ(,)を使います。"]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_ignore_url_set"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "特定のURLを設定すると、トランザクション追跡対象から除外されます。設定されたURLはトランザクション情報を収集せず、トランザクション 一覧で確認できません。トランザクション追跡対象から除外するURLを指定します。2つ以上の値を指定する場合は、コンマ(,)を区切り文字として使用します。"
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["このオプションを通じて登録したURLは、", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_hitmap",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), "または", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06527",
            className: "uitext"
          }), "画面で収集が除外されます。"]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_ignore_url_prefix"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクション追跡対象から除外するURL prefixを指定します。"
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["このオプションを通じて登録したURLは、", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_hitmap",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), "または", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06527",
            className: "uitext"
          }), "画面で収集が除外されます。"]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_http_header_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トレース履歴にHTTPヘッダーの情報を記録する場合に使用します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_http_header_ignore_keys"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "host,accept,user-agent,referer, accept-language, connection"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "HTTP Header名を指定して、収集する情報から除外する機能を追加しました。指定されたHTTP Header名の値は収集から除外され、\"#\"として表示されます。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_http_parameter_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        }), (0,jsx_runtime.jsx)(ScrollToLink, {
          anchor: "profile_http_parameter"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トレース履歴にHTTPパラメータ情報を記録する場合に使用します。パラメータは、別のセキュリティ キーを入力しないと参照できません。"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Get、Postパラメータで、textタイプの名前と値を収集します。最大40個(Get 20個、Post 20個) を収集し、パラメータ名と値は最大256 byteまで収集されます。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["パラメータの情報は、別途に暗号化されて送信され、当該アプリケーションサーバの_/usr/whatap/php/security.conf_にあるキー(", (0,jsx_runtime.jsx)(_components.code, {
          children: "paramkey"
        }), ")で復号化して参照できます。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)("code", {
                class: "my",
                children: "PHP agent v2.8.0 or later"
              }), ": セキュリティキーは", (0,jsx_runtime.jsx)(_components.em, {
                children: "whatap.ini"
              }), "ファイルがある", (0,jsx_runtime.jsx)(_components.code, {
                children: "WHATAP_HOME"
              }), (0,jsx_runtime.jsx)(_components.em, {
                children: "/security.conf"
              }), "ファイル内の6桁(", (0,jsx_runtime.jsx)(_components.code, {
                children: "paramkey"
              }), ")に設定します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)("code", {
                class: "my",
                children: "Below PHP agent v2.8.0"
              }), "：セキュリティキーは、", (0,jsx_runtime.jsx)(_components.em, {
                children: "whatap.ini"
              }), "ファイルがある", (0,jsx_runtime.jsx)(_components.code, {
                children: "WHATAP_HOME"
              }), (0,jsx_runtime.jsx)(_components.em, {
                children: "/paramkey.txt"
              }), "ファイルに６ケタで設定します。", (0,jsx_runtime.jsx)(_components.em, {
                children: "paramkey.txt"
              }), "ファイルがない場合は、ランダムに値が自動生成されます。"]
            }), "\n"]
          }), "\n"]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_http_parameter_url_prefix"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トレース履歴にHTTPパラメータ情報を記録するために、対象URLのprefixを定義する場合に使用します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_http_host_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["トランザクションのHost情報を出力します。値が", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "の場合、トランザクションのURLはURIのみ表示され、", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "の場合は、", (0,jsx_runtime.jsx)(_components.code, {
          children: "/xxx.aaa.com/URL"
        }), "形式で出力されます。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.ignore_http_method"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "設定したHTTPメソッド(Method)で要求されたトランザクション情報は収集しません。複数設定するには、コンマ(,)を区切り文字として利用してください。"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title=\"whatap.ini\"",
          children: "#例。http_methodがOPTIONS, HEADであるトランザクション\"追跡\"\nignore_http_method=PATCH,TRACE\n\n#例。http_methodがOPTIONS, HEADであるトランザクション\"無視\"\nignore_http_method=OPTIONS,HEAD\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["このオプションを通じて登録したHTTPメソッドは、", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_hitmap",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), "または", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06527",
            className: "uitext"
          }), "画面で収集が除外されます。"]
        })
      }), "\n"]
    }), "\n"]
  });
}
function _php_track_http_trs_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_php_track_http_trs_createMdxContent, {
      ...props
    })
  }) : _php_track_http_trs_createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_php-multi-trace.mdx


const _php_multi_trace_frontMatter = {};
const _php_multi_trace_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _php_multi_trace_toc = [];
function _php_multi_trace_createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.mtrace_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "マルチトランザクション追跡機能(MTID) を使用可否を設定します。MTIDを追跡すると、登録されたすべてのアプリケーション間の呼び出しを確認できます。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.mtrace_rate"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Percentage"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "10"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "最初のトランザクションが発生したときに発行されるMTID(Multi Transaction ID)の発行比率を設定するオプションです。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.mtrace_poid_key"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "x-wtap-po"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "MTID追跡に使用するCallerプロジェクトの情報を渡すためのKey Nameを設定します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.mtrace_caller_key"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x-wtap-mst"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "MTID追跡に使用するCaller Key Nameを設定します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.mtrace_callee_key"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x-wtap-tx"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "MTID追跡に使用するCallee Key Nameを定義します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.mtrace_send_url_length"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "80"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "HTTP Callerは、CalleeにURLを渡します。この時、URLの長さを制限しています。この長さを指定します。"
      }), "\n"]
    }), "\n"]
  });
}
function _php_multi_trace_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_php_multi_trace_createMdxContent, {
      ...props
    })
  }) : _php_multi_trace_createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/php/agent-transaction.mdx


const agent_transaction_frontMatter = {
	id: 'agent-transaction',
	title: 'トランザクション',
	description: 'PHPアプリケーション内の各トランザクションの性能データをエージェントが追跡し分析できる設定方法を案内します。トランザクションのリクエスト処理、応答時間、リソース使用量などを追跡して、アプリケーションの性能を評価します。',
	keywords: [
		'PHP',
		'トランザクション',
		'設定',
		'アプリケーション'
	]
};
const agent_transaction_contentTitle = undefined;
const metadata = {
  "id": "php/agent-transaction",
  "title": "トランザクション",
  "description": "PHPアプリケーション内の各トランザクションの性能データをエージェントが追跡し分析できる設定方法を案内します。トランザクションのリクエスト処理、応答時間、リソース使用量などを追跡して、アプリケーションの性能を評価します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/php/agent-transaction.mdx",
  "sourceDirName": "php",
  "slug": "/php/agent-transaction",
  "permalink": "/ja/php/agent-transaction",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/php/agent-transaction.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-transaction",
    "title": "トランザクション",
    "description": "PHPアプリケーション内の各トランザクションの性能データをエージェントが追跡し分析できる設定方法を案内します。トランザクションのリクエスト処理、応答時間、リソース使用量などを追跡して、アプリケーションの性能を評価します。",
    "keywords": [
      "PHP",
      "トランザクション",
      "設定",
      "アプリケーション"
    ]
  },
  "sidebar": "phpSidebar",
  "previous": {
    "title": "エージェントログの設定",
    "permalink": "/ja/php/agent-log"
  },
  "next": {
    "title": "DB、SQL",
    "permalink": "/ja/php/agent-dbsql"
  }
};
const assets = {

};







const agent_transaction_toc = [{
  "value": "トランザクショントレーシング",
  "id": "php-trs-trc",
  "level": 2
}, ...toc, ..._php_track_trs_toc, {
  "value": "例外処理",
  "id": "exception",
  "level": 2
}, {
  "value": "HTTPトランザクションの追跡",
  "id": "php-track-http-trs",
  "level": 2
}, ..._php_track_http_trs_toc, {
  "value": "マルチトランザクショントレース",
  "id": "マルチトランザクショントレース",
  "level": 2
}, ..._php_multi_trace_toc];
function agent_transaction_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) agent_transaction_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["トランザクションの詳細については、", (0,jsx_runtime.jsx)(_components.a, {
          href: "track-transactions-intro",
          children: "次の文書"
        }), "を参照してください。例として、", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "ヒットマップ"
          })
        }), "を使用したトランザクション分析のガイドについては、サブメニューである", (0,jsx_runtime.jsx)(_components.a, {
          href: "trs-view",
          children: "次の文書"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "php-trs-trc",
        children: "トランザクショントレーシング"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "以下は、アプリケーションの各トランザクションの実行パスを詳細に追跡できるエージェントのオプションです。最小応答時間からトランザクションの実行ステップ数まで、様々な部分を調整可能です。"
      }), (0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsx)(_php_track_trs_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "exception",
        children: "例外処理"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["以下は、アプリケーションで発生する例外を管理およびモニタリングするためのオプションです。ビジネス例外を登録し、関連する統計を収集することで、アプリケーションの安定性を確認できます。また、特定の例外を無視したりHTTPステータスコードがエラーの場合、エラーとして処理するかどうかを設定できます。例外として処理された項目は、", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_hitmap",
          className: "uitext"
        }), "または", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06209",
          className: "uitext"
        }), "画面で、正常なトランザクションとして表示されます。"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.biz_exceptions"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "String"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "特定のErrorまたはExceptionをBusiness Exceptionに指定します。ヒートマップではエラーとして表記されず、統計情報にのみ収集されます。収集されるError Class 名と同様に適用します。コンマ(,)を区切り文字として複数登録できます。"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title=\"whatap.conf\"",
              children: "whatap.biz_exceptions=HttpConnectionServerError(400), GuzzleHttp\\Exception\\ServerException, CustomException\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "tip",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["エラークラス収集 / ヒットマップ表示レベル：", (0,jsx_runtime.jsx)("span", {
                class: "normal",
                children: "INFO"
              }), "(青色) / エラー統計を含む"]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.ignore_exceptions"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "String"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "登録したExceptionのエラー自体を無視します。"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Exceptionの場合、Custom Exception Classが定義されていない場合、基本的にExceptionとして収集されます。特定のExceptionを区別するために、Custom Exception Classを定義し、その名前を指定することで除外できます。"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title=\"whatap.conf\"",
              children: "whatap.ignore_exceptions=HttpConnectionServerError(400), GuzzleHttp\\Exception\\ServerException, CustomException\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "tip",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["エラークラス無視 / ヒットマップ表示レベル：", (0,jsx_runtime.jsx)("span", {
                class: "normal",
                children: "INFO"
              }), "(青色) / エラー統計を含まない"]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "php-track-http-trs",
        children: "HTTPトランザクションの追跡"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "以下は、HTTPリクエストと応答に関連する様々な情報を追跡および記録するエージェントのオプションです。これにより、ユーザーはアプリケーションのHTTPトランザクションを細かくモニタリングし分析できます。トランザクション名にパラメータ値を追加または特定のURLやHTTPメソッドを除外できます。またHTTPヘッダー情報やパラメータ情報を含め、トランザクションをより詳細に記録できます。"
      }), (0,jsx_runtime.jsx)(_php_track_http_trs_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "マルチトランザクショントレース",
        children: "マルチトランザクショントレース"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "以下は、アプリケーション間の呼び出しを追跡しモニタリングするためのオプションです。このオプションにより、ユーザーは複数のアプリケーション間の相互作用を理解できます。提供する様々なオプションにより、マルチトランザクションの追跡に対する詳細な動作を調整できます。"
      }), (0,jsx_runtime.jsx)(_php_multi_trace_MDXContent, {})]
    })]
  });
}
function agent_transaction_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_transaction_createMdxContent, {
      ...props
    })
  }) : agent_transaction_createMdxContent(props);
}
function agent_transaction_missingMdxReference(id, component) {
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