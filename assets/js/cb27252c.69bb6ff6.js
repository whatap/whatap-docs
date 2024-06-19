"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[26619],{

/***/ 85349:
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
      children: "Apache 및 PHP-FPM 다시 시작 후 적용됩니다."
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

/***/ 79534:
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
// EXTERNAL MODULE: ./docs/common-items/_php-restart-apply.mdx
var _php_restart_apply = __webpack_require__(85349);
;// CONCATENATED MODULE: ./docs/common-items/_php-trs-profile.mdx


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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션 트레이스의 최대 스텝 수를 지정합니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1024"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "수집 가능한 트레이스 스텝의 최대 개수를 설정합니다. 수집된 트레이스 스텝 수가 이 값을 초과하면 이후 수집되는 스텝들은 모두 버려집니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본 스텝의 수집 개수가 초과되면, 실행 시간이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_heavy_time"
        }), "을 초과하는 스텝만 수집합니다. 해당 스텝의 수집 가능한 개수를 설정합니다. Default 설정일 경우 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_normal_count"
        }), "가 800 이면 최대 200개의 스텝이 수집됩니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "100"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Heavy 한 스텝의 기준을 지정합니다. 지정된 값보다 수행 시간이 긴 경우 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_normal_count"
        }), "를 초과하는 경우라도 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_heavy_count"
        }), " 이내에서 기록됩니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "500"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션이 설정된 값 이하의 시간 내에 종료된 경우 트레이스 정보를 수집하지 않습니다. 단 5분 단위로 최초 호출된 URL, 에러가 발생한 트랜잭션에 대한 트레이스 정보는 수집됩니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["트랜잭션 URL의 쿼리 스트링을 함께 수집하는 기능을 활성화합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.query_string_urls"
        }), "에 등록된 URL만 적용됩니다."]
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
        children: "트랜잭션에서 쿼리 스트링을 수집할 URL들을 등록합니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "compile_file"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compile_string"
        }), " 함수의 추적 여부를 설정합니다. PHP 내부 함수인 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compile_file"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compile_string"
        }), " 함수는 스크립트 실행 전에 컴파일하는 함수로 Main, include, require 및 autoload 스크립트의 컴파일 시점 및 스크립트 파일 경로와 실행 시간을 확인할 수 있습니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "200"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "실행 시간의 기준을 설정합니다. 설정한 시간을 초과하여 실행되는 경우만 정보를 수집합니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "caution",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "whatap.profile_compile_file_basetime"
          }), "을 지나치게 작게 설정할 경우 과도한 수집으로 서버에 부하를 줄 수 있습니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["실행 시간이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_method_time"
        }), " 설정값(기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1초"
        }), ")을 초과하는 사용자 함수의 정보를 트랜잭션 상세 정보에서 확인할 수 있습니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_method_enabled"
        }), " 설정으로 수집되는 함수의 실행 시간을 설정합니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "사용자 함수의 스택 정보를 트랜잭션 상세 정보에서 확인할 수 있습니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHP 내부 함수의 추적 여부를 설정합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_internal_method_time"
        }), " 설정값(기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1초"
        }), ")보다 오래 걸리는 경우만 추적합니다."]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "caution",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "이 옵션은 사용자 정의 함수가 아닌 PHP의 내장 함수를 모두 확인하므로 성능에 부하가 발생할 수 있습니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHP 내부 함수를 추적할 때(", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_internal_method_enabled"
        }), ") 함수의 실행 시간을 설정합니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHP 내부 함수를 추적할 때(", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_internal_method_enabled"
        }), ") 부가적으로 함수 파라미터 정보를 수집합니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "이면 트랜잭션 시작 시점을 수집하지 않습니다."]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "시작 시점을 수집하지 않아 진행 중인 트랜잭션 수를 계산하는 액티브 트랜잭션 정보에 조금 늦게 반영될 수 있습니다. 액티브 스테이터스는 정상적으로 표기됩니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면 설정된 응답시간보다 빠른 트랜잭션의 트레이스 정보를 수집하지 않습니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트레이스 정보 수집을 제외하는 트랜잭션의 응답시간을 설정합니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "트레이스 정보를 수집하지 않기 때문에 SQL, HTTPC 등의 통계에는 반영되지 않습니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면 설정된 응답시간이 소요되는 트랜잭션 및 트레이스 정보를 수집하지 않습니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "30"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션 및 트레이스 정보 수집을 제외하는 트랜잭션의 응답시간을 설정합니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.net_udp_trace_ignoretime_enabled"
        }), " 설정으로 트랜잭션의 정보 수집이 제외되는 경우 TPS, 평균 응답시간, Apdex 지표를 공유 메모리에서 수집하면 제외된 트랜잭션의 정보가 통계에 반영됩니다."]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "수집이 안 된 트랜잭션의 경우 TPS, 평균 응답시간, Apdex 지표에는 정상적으로 반영되지만, 그 외 통계 데이터에는 반영되지 않습니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "일정량의 프로파일을 가상 트랜잭션으로 분리해 더 많은 프로파일 정보를 수집합니다. 여러 개의 트랜잭션 목록으로 분할 표기됩니다."
      }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "동시에 설정된 경우 우선 순위는 다음과 같습니다."
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "1. split"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "2. large"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "3. circular"
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "일정량의 프로파일을 압축 및 분할 전송해 메모리 증가 없이 더 많은 프로파일 정보를 수집할 수 있습니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["약 만 건 이하의 프로파일(스탭) 정보를 수집할 수 있습니다. 더 많은 양은 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "whatap.split_profile_enabled"
              }), " 옵션 사용을 권장합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "동시에 설정된 경우 우선 순위는 다음과 같습니다."
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "1. split"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "2. large"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "3. circular"
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "마지막 1024개의 프로파일링 정보를 수집합니다."
      }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "동시에 설정된 경우 우선 순위는 다음과 같습니다."
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "1. split"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "2. large"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "3. circular"
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["프로파일 정보를 압축 전송합니다. 기본값은 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "로 설정되어 있습니다."]
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


;// CONCATENATED MODULE: ./docs/common-items/_php-track-trs.mdx


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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "수집 정보를 확인하는 대시보드의 액티브 트랜잭션 아크 이퀄라이저 그래프에서 Slow 구간으로 표기될 수 있는 트랜잭션 응답 시간의 기준을 지정합니다. 트랜잭션의 응답시간이 지정 시간을 초과할 경우 Slow 액티브 트랜잭션의 개수에 포함됩니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "300000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션의 종료를 기다리는 제한 시간 5분 안에 트랜잭션이 끝나지 않는 경우 트랜잭션을 정보를 더 이상 수집하지 않습니다. 트랜잭션의 트레이스 정보에서 \"Lost Connection\"를 확인할 수 있습니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면 트랜잭션의 유저 에이전트 정보를 수집합니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "이면 트랜잭션의 Refere 정보를 수집합니다."]
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


;// CONCATENATED MODULE: ./docs/common-items/_php-track-http-trs.mdx


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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션 URL을 변환하여 일반화하는 기능을 활성화 합니다."
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
        children: "트랜잭션 URL을 변환하고 일반화할 대상 URL을 지정합니다. 호출 URL패턴을 변환하여 패스 파라미터를 제거합니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["예시, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), " 라고 설정하면 해당 형식으로 호출되는 트랜잭션 URL은 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), " 형식으로 변환됩니다. 여러 개를 등록할 때는 콤마(,)를 사용합니다."]
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Empty"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "특정 URL을 설정하면 트랜잭션 추적 대상에서 제외됩니다. 설정된 URL은 트랜잭션 정보를 수집하지 않아, 트랜잭션 목록에서 확인되지 않습니다. 트랜잭션 추적 대상에서 제외할 URL을 지정합니다. 2개 이상의 값을 지정하려면 쉼표(,)를 구분자로 이용하세요"
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이 옵션을 통해 등록한 URL은 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_hitmap",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06527",
            className: "uitext"
          }), " 창에서 수집 제외됩니다."]
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Empty"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션 추적 대상에서 제외할 URL prefix를 지정합니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이 옵션을 통해 등록한 URL은 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_hitmap",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06527",
            className: "uitext"
          }), " 창에서 수집 제외됩니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트레이스 내역에 http 헤더 정보를 기록하고자 할 때 사용합니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "host,accept,user-agent,referer, accept-language, connection"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "HTTP 헤더 이름을 지정해 수집 정보에서 제외하는 기능을 추가했습니다. 지정된 HTTP 헤더 이름의 값은 수집에서 제외되며, \"#\"으로 표기됩니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트레이스 내역에 http 파라미터 정보를 기록하고자 할 때 사용합니다. 파라미터는 별도 보안키를 입력해야 조회할 수 있습니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Get, Post 파라미터 중 text 타입의 이름과 값을 수집합니다. 최대 40개(Get 20개, Post 20개) 를 수집하며 파라메터 이름과 값은 최대 256 byte 까지 수집됩니다."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["파라미터 정보는 별도 암호화되어 전송되며, 해당 애플리케이션 서버의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "/usr/whatap/php/security.conf"
        }), " 에 있는 키(", (0,jsx_runtime.jsx)(_components.code, {
          children: "paramkey"
        }), ")로 복호화하여 볼 수 있습니다."]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)("code", {
                class: "my",
                children: "PHP agent v2.8.0 or later"
              }), ": 보안 키는 ", (0,jsx_runtime.jsx)(_components.em, {
                children: "whatap.ini"
              }), " 파일이 위치한 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "WHATAP_HOME"
              }), (0,jsx_runtime.jsx)(_components.em, {
                children: "/security.conf"
              }), " 파일 내에 6자리(", (0,jsx_runtime.jsx)(_components.code, {
                children: "paramkey"
              }), ")로 설정합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)("code", {
                class: "my",
                children: "Below PHP agent v2.8.0"
              }), ": 보안 키는 ", (0,jsx_runtime.jsx)(_components.em, {
                children: "whatap.ini"
              }), " 파일이 위치한 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "WHATAP_HOME"
              }), (0,jsx_runtime.jsx)(_components.em, {
                children: "/paramkey.txt"
              }), " 파일 내에 6자리로 설정합니다. ", (0,jsx_runtime.jsx)(_components.em, {
                children: "paramkey.txt"
              }), " 파일이 존재하지 않는 경우 랜덤 값으로 자동 생성합니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트레이스 내역에 http 파라미터 정보를 기록할 대상 URL의 prefix를 정의 할 때 사용합니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["트랜잭션의 Host 정보를 출력합니다. 값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "일 경우 트랜잭션의 URL에 URI만 표기하고, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "일 경우 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/xxx.aaa.com/URL"
        }), " 형식으로 출력됩니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.ignore_http_method"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Empty"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "설정한 HTTP 메소드(Method)로 요청된 트랜잭션 정보는 수집하지 않습니다. 여러 개를 설정하려면 쉼표(,)를 구분자로 이용하세요."
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title=\"whatap.ini\"",
          children: "# e.g. http_method가 OPTIONS, HEAD인 트랜잭션 \"추적\"\nwhatap.ignore_http_method=PATCH,TRACE\n\n# e.g. http_method가 OPTIONS, HEAD인 트랜잭션 \"무시\"\nwhatap.ignore_http_method=OPTIONS,HEAD\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이 옵션을 통해 등록한 HTTP 메소드는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_hitmap",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06527",
            className: "uitext"
          }), " 창에서 수집 제외됩니다."]
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


;// CONCATENATED MODULE: ./docs/common-items/_php-multi-trace.mdx


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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "멀티 트랜잭션 추적 기능(MTID) 사용 여부를 설정합니다. MTID를 추적하면 등록된 모든 애플리케이션 간의 호출을 확인할 수 있습니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "10"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "최초 트랜잭션이 발생할 때 발급받는 MTID(Multi Transaction ID)의 발급비율을 설정하는 옵션입니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x-wtap-po"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "MTID 추적에 사용할 Caller 프로젝트 정보를 전달할 Key Name을 설정합니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x-wtap-mst"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "MTID 추적에 사용할 Caller Key Name을 정합니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x-wtap-tx"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "MTID 추적에 사용할 Callee Key Name을 정합니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "80"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Http Caller는 Callee에게 자신의 URL을 넘겨줍니다. 이때 URL 길이를 제한하고 있습니다. 이 길이를 지정합니다."
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


;// CONCATENATED MODULE: ./docs/php/agent-transaction.mdx


const agent_transaction_frontMatter = {
	id: 'agent-transaction',
	title: '트랜잭션',
	description: 'PHP 애플리케이션 내 각 트랜잭션의 성능 데이터를 에이전트가 추적하고 분석할 수 있는 설정 방법을 안내합니다. 트랜잭션의 요청 처리, 응답 시간, 자원 사용량 등을 추적하여 애플리케이션 성능을 평가합니다.',
	tags: [
		'PHP',
		'트랜잭션',
		'설정하기',
		'애플리케이션'
	]
};
const agent_transaction_contentTitle = undefined;
const metadata = {
  "id": "php/agent-transaction",
  "title": "트랜잭션",
  "description": "PHP 애플리케이션 내 각 트랜잭션의 성능 데이터를 에이전트가 추적하고 분석할 수 있는 설정 방법을 안내합니다. 트랜잭션의 요청 처리, 응답 시간, 자원 사용량 등을 추적하여 애플리케이션 성능을 평가합니다.",
  "source": "@site/docs/php/agent-transaction.mdx",
  "sourceDirName": "php",
  "slug": "/php/agent-transaction",
  "permalink": "/whatap-docs/php/agent-transaction",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/php/agent-transaction.mdx",
  "tags": [
    {
      "label": "PHP",
      "permalink": "/whatap-docs/tags/php"
    },
    {
      "label": "트랜잭션",
      "permalink": "/whatap-docs/tags/트랜잭션"
    },
    {
      "label": "설정하기",
      "permalink": "/whatap-docs/tags/설정하기"
    },
    {
      "label": "애플리케이션",
      "permalink": "/whatap-docs/tags/애플리케이션"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-transaction",
    "title": "트랜잭션",
    "description": "PHP 애플리케이션 내 각 트랜잭션의 성능 데이터를 에이전트가 추적하고 분석할 수 있는 설정 방법을 안내합니다. 트랜잭션의 요청 처리, 응답 시간, 자원 사용량 등을 추적하여 애플리케이션 성능을 평가합니다.",
    "tags": [
      "PHP",
      "트랜잭션",
      "설정하기",
      "애플리케이션"
    ]
  },
  "sidebar": "phpSidebar",
  "previous": {
    "title": "에이전트 로그 설정",
    "permalink": "/whatap-docs/php/agent-log"
  },
  "next": {
    "title": "DB, SQL",
    "permalink": "/whatap-docs/php/agent-dbsql"
  }
};
const assets = {

};







const agent_transaction_toc = [{
  "value": "트랜잭션 트레이싱",
  "id": "php-trs-trc",
  "level": 2
}, ...toc, ..._php_track_trs_toc, {
  "value": "예외 처리",
  "id": "exception",
  "level": 2
}, {
  "value": "HTTP 트랜잭션 추적",
  "id": "php-track-http-trs",
  "level": 2
}, ..._php_track_http_trs_toc, {
  "value": "멀티 트랜잭션 추적",
  "id": "멀티-트랜잭션-추적",
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
        children: ["트랜잭션에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "track-transactions-intro",
          children: "다음 문서"
        }), "를 참조하세요. 예를 들어 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "히트맵"
          })
        }), "을 활용한 트랜잭션 분석 안내는 하위 메뉴인 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "trs-view",
          children: "다음 문서"
        }), "를 참조하세요."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "php-trs-trc",
        children: "트랜잭션 트레이싱"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음은 애플리케이션 내의 각 트랜잭션의 실행 경로를 상세하게 추적할 수 있는 에이전트 옵션입니다. 최소 응답 시간부터 트랜잭션의 실행 스텝 수까지 다양한 측면을 조정할 수 있습니다."
      }), (0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsx)(_php_track_trs_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "exception",
        children: "예외 처리"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["다음은 애플리케이션에서 발생하는 예외를 관리하고 모니터링하기 위한 옵션입니다. 비즈니스 예외를 등록하고 관련 통계를 수집하여 애플리케이션의 안정성을 확인할 수 있습니다. 또한 특정 예외를 무시하거나 HTTP 상태 코드가 에러인 경우 에러로 처리할지 여부를 설정할 수도 있습니다. 예외로 처리된 항목들은 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_hitmap",
          className: "uitext"
        }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06209",
          className: "uitext"
        }), " 창에서 정상 트랜잭션으로 표시됩니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.biz_exceptions"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "String"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Empty"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "특정 Error 또는 Exception을 Business Exception으로 지정합니다. 히트맵에서는 에러로 표기되지 않고 통계 정보에만 수집됩니다. 수집되는 Error Class 명과 동일하게 적용합니다. 쉼표(,)를 구분자로 여러 개를 등록할 수 있습니다."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title=\"whatap.conf\"",
              children: "whatap.biz_exceptions=HttpConnectionServerError(400), GuzzleHttp\\Exception\\ServerException, CustomException\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "tip",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["에러 클래스 수집 / 히트맵 표시 레벨: ", (0,jsx_runtime.jsx)("span", {
                class: "normal",
                children: "INFO"
              }), "(파란색) / 에러 통계 포함"]
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
            children: "등록한 Exception의 에러 자체를 무시합니다."
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Exception의 경우 Custom Exception Class가 정의되어 있지 않으면, 기본으로 Exception으로 수집됩니다. 특정 Exception을 구분하기 위해서는 Custom Exception Class를 정의하고 해당 이름을 지정하면 제외할 수 있습니다."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title=\"whatap.conf\"",
              children: "whatap.ignore_exceptions=HttpConnectionServerError(400), GuzzleHttp\\Exception\\ServerException, CustomException\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "tip",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["에러 클래스 무시 / 히트맵 표시 레벨: ", (0,jsx_runtime.jsx)("span", {
                class: "normal",
                children: "INFO"
              }), "(파란색) / 에러 통계 미포함"]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "php-track-http-trs",
        children: "HTTP 트랜잭션 추적"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음은 HTTP 요청 및 응답에 관련된 다양한 정보를 추적하고 기록하는 에이전트 옵션입니다. 이를 통해 사용자는 애플리케이션의 HTTP 트랜잭션을 세밀하게 모니터링하고 분석할 수 있습니다. 트랜잭션 이름에 파라미터 값을 추가하거나 특정 URL이나 HTTP 메소드를 제외할 수 있습니다. 또한 HTTP 헤더 정보와 파라미터 정보를 포함하여 트랜잭션을 보다 상세하게 기록할 수 있습니다."
      }), (0,jsx_runtime.jsx)(_php_track_http_trs_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "멀티-트랜잭션-추적",
        children: "멀티 트랜잭션 추적"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음은 애플리케이션 간 호출을 추적하고 모니터링하기 위한 옵션입니다. 이 옵션을 통해 사용자는 여러 애플리케이션 간의 상호작용을 이해하는 데 도움이 받을 수 있습니다. 제공하는 다양한 옵션을 통해 멀티 트랜잭션 추적의 세부적인 동작을 조정할 수 있습니다."
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