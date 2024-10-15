"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[93814],{

/***/ 74275:
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



/*### 다중 파일 지정 및 파일 분리*/
/*여러 개의 로그 파일을 동일한 카테고리로 지정하려면, 각 파일에 대해 `[[inputs.logsink.file]]` 항목을 추가하고 `path`에 해당 파일 경로를 설정해야 합니다. 다음 예시는 `serverlog` 카테고리로 /root/test2 경로에 있는 파일을 로그 파일로 지정한 설정입니다.*/
/*<Columns>

<Column className="text--left width--45">

```bash {7,10-17,19} showLineNumbers
[[inputs.logsink]]
category = "serverlog"
stats_enabled = true
stats_category = "logsink_stats"
excludeNames = [ ".gz",".zip" ]
#[[inputs.logsink.file]]
#  path = "/some/path/%Y-%m-%d/.log"
#  disabled = false
#  encoding = "euc-kr"
[[inputs.logsink.file]]
path = "/root/test1"
disabled = false
encoding = "utf-8"
[[inputs.logsink.file]]
path = "/root/test2"
disabled = false
encoding = "utf-8"
#[[inputs.logsink.file]]
#  nowrap_keywords = ["Caused by:", "Test"]
```

</Column>

<Column className="text--left">

* 카테고리를 지정합니다. `category`


* 로그 파일 설정 시 예시의 라인 7과 같이 `path` 옵션을 통해 날짜 패턴(strftime.ort)을 적용할 수 있습니다.

```bash
path = "/some/path/%Y-%m-%d/.log"
```

* 로그 파일 설정 시 예시의 라인 19와 같이 `nowrap_keywords` 옵션을 통해 특정 키워드 기준으로 로그를 병합할 수 있습니다.

```bash
nowrap_keywords = ["Caused by:", "Test"]
```

</Column>

</Columns>*/


const toc = [{
  "value": "다중 파일 지정",
  "id": "multiple-file-specification",
  "level": 4
}, {
  "value": "파일 분리",
  "id": "file-separation",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h4: "h4",
    img: "img",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, Column, Columns} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "multiple-file-specification",
        children: "다중 파일 지정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["여러 로그 파일을 동일한 카테고리로 설정하려면, 각 로그 파일 경로를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "[[inputs.logsink.file]]"
        }), " 항목에 추가하고, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "path"
        }), " 설정을 통해 파일 경로를 지정합니다. 또한, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "category"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "stats_enabled"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "stats_category"
        }), " 등의 옵션을 사용하여 로그 발생량 통계 설정과 같은 부가적인 설정을 할 수 있습니다. 예시는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "/root/test1"
        }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "/root/test2"
        }), " 파일을 동일한 카테고리(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "serverlog"
        }), ")로 지정한 경우입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "{2,7-15}",
          children: "[[inputs.logsink]]\n  category = \"serverlog\"\n  stats_enabled = true\n  stats_category = \"logsink_stats\"\n  excludeNames = [ \".gz\",\".zip\" ]\n\n[[inputs.logsink.file]]\n  path = \"/root/test1\"\n  disabled = false\n  encoding = \"utf-8\"\n\n[[inputs.logsink.file]]\n  path = \"/root/test2\"\n  disabled = false\n  encoding = \"utf-8\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "category"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stats_enabled"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stats_category"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "nowrap_keywords"
          }), " 등의 옵션에 대한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "#server-log-settings",
            children: "상단"
          }), " 안내를 참조하세요."]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["해당 예시의 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_logTail",
          className: "uitext"
        }), " 메뉴에서는 다음과 같이 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "다중 파일 지정",
          src: (__webpack_require__(50124)/* ["default"] */ .A) + "",
          width: "1200",
          height: "631"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "file-separation",
        children: "파일 분리"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["서로 다른 카테고리로 로그 파일을 지정하려면, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
          children: ["logsink{", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
            children: "숫자"
          }), "}.conf"]
        }), " 파일을 각각 생성한 후, 각 파일 내에서 다른 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "category"
        }), " 값을 설정하세요. 다음 예시는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "logsink.conf"
        }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
          children: ["logsink", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
            children: "1"
          }), ".conf"]
        }), "를 통해 각각 다른 로그 카테고리를 설정한 경우입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Columns, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Column, {
          className: "text--left width--50-2",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='logsink.conf' {1,3,9}",
              children: "# cat logsink.conf\n[[inputs.logsink]]\n  category = \"serverlog1\"\n  stats_enabled = true\n  stats_category = \"logsink_stats\"\n  excludeNames = [ \".gz\",\".zip\" ]\n\n[[inputs.logsink.file]]\n  path = \"/root/test1\"\n  disabled = false\n  encoding = \"utf-8\"\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Column, {
          className: "text--left",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='logsink1.conf' {1,3,9}",
              children: "#cat logsink1.conf\n[[inputs.logsink]]\n  category = \"serverlog2\"\n  stats_enabled = true\n  stats_category = \"logsink_stats\"\n  excludeNames = [ \".gz\",\".zip\" ]\n\n[[inputs.logsink.file]]\n  path = \"/root/test2\"\n  disabled = false\n  encoding = \"utf-8\"\n"
            })
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "category"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stats_enabled"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stats_category"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "nowrap_keywords"
          }), " 등의 옵션에 대한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "#server-log-settings",
            children: "상단"
          }), " 안내를 참조하세요."]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["해당 예시의 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_logTail",
          className: "uitext"
        }), " 메뉴에서는 다음과 같이 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "파일 분리",
          src: (__webpack_require__(50839)/* ["default"] */ .A) + "",
          width: "1201",
          height: "535"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 34656:
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
    blockquote: "blockquote",
    code: "code",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "윈도우 이벤트 로그 수집 시 다음과 같이 옵션을 설정할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        metastring: "showLineNumbers",
        children: "# 관리자 권한 필요\nNew-Item -type \"Directory\" -Path \"C:\\Program Files\\WhatapInfra\\extension\"\n\n$contentToAdd = @\"\n[[inputs.win_eventlog]]\n    category = \"win_event_log\"\n    stats_category = \"win_event_log_stats\"\n    stats_enabled = true\n    enabled = true\n    [[inputs.win_eventlog.file]]\n        #true | false\n        enabled = true\n\t\t\t\t# Application, Security, Setup, System, Forwarded\n\t\t\t\tfile = \"Application\"\n\t\t\t\t#1: Information, 2: Warning 3: Critical 4: Audit Success 5 Audit Fail\n\t\t\t\t#event_type = \n\t\t\t\t#event id\n\t\t\t\t#event_id = \n\t\t\t\t#event source name\n\t\t\t\t#source_name = \"\"\n\n\"@\n\nNew-Item -path \"C:\\Program Files\\WhatapInfra\\extension\" -name \"win_eventlog.conf\" -type \"file\" -value $contentToAdd -Force\n\nRestart-Service \"Whatap Infra\"\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "지원 버전 2.5.2"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "운영체제: Windows"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["카테고리 지정(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "category"
          }), ") 필수"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "win_event_log"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["통계 카테고리 지정(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stats_category"
          }), ") 필수"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "win_event_log_stats"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["통계 카테고리 On/Off(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stats_enabled"
          }), ") 필수"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "true"
            }), " 혹은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "false"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["수집 기능 On/Off(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "enabled"
          }), ") 필수"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "true"
            }), " 혹은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "false"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["파일별 수집 기능 On/Off(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "enabled"
          }), ") 필수"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "true"
            }), " 혹은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "false"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["파일(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "file"
          }), ") 필수"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Application"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Security"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Setup"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "System"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Forwarded"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["이벤트 타입(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "event_type"
          }), ") 비필수"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "1"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "2"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "3"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "4"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "5"
            })]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "이벤트 타입"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "Information"
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "Warning"
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "Critical"
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "Audit Success"
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "Audit Fail"
              }), "\n"]
            }), "\n"]
          })]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["이벤트 아이디(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "event_id"
          }), ") 비필수"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["이벤트 소스 이름(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "source_name"
          }), ") 비필수"]
        }), "\n"]
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



/***/ }),

/***/ 63126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ advanced_feature_contentTitle),
  "default": () => (/* binding */ advanced_feature_MDXContent),
  frontMatter: () => (/* binding */ advanced_feature_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ advanced_feature_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(74235);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(15947);
;// CONCATENATED MODULE: ./docs/common-items/_server-adf-exp.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));



/*

아래는 필드명 관련 컨펌 후 추가 예정 .. 현재 수정 임시로 남겨둠

:::caution

***이벤트 발생 조건***과 ***이벤트 대상 필터링***에서 ***선택 입력*** 모드를 선택한 상태에서 마침표(.)가 2개 이상인 필드 또는 태그 이름을 선택했다면 ***직접 입력*** 모드를 선택한 다음 `${필드 또는 태그 이름}`과 같은 형식으로 묶어서 입력해야 합니다.

예를 들어 `webcheck.ping.status_code` 필드 이름과 연산자는 `!=`, 값은 `200`을 입력할 경우, ***직접 입력*** 모드를 선택한 다음 `${webcheck.ping.status_code} != 200`으로 직접 입력하세요.

:::

:::note

**필드명 규칙**

필드명에 마침표(*.*)가 2개 이상 포함된 경우 다음과 같이 입력해 주세요.

> 예시, `webcheck.ping.status_code` → `${webcheck.ping.status_code}`

:::

*/


const toc = [{
  "value": "MySQL 서버 목록",
  "id": "mysql-서버-목록",
  "level": 3
}, {
  "value": "웹 URL 성능 체크",
  "id": "웹-url-성능-체크",
  "level": 3
}, {
  "value": "Redis 서버 목록",
  "id": "redis-서버-목록",
  "level": 3
}, {
  "value": "Memcached 서버 목록",
  "id": "memcached-서버-목록",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, TabItem, Tabs} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "정상적으로 설치 후 확장팩 기능을 사용하려면 다음과 같이 설정 파일을 생성하고 에이전트를 다시 시작하세요."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "mysql-서버-목록",
        children: "MySQL 서버 목록"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "MySQL/MariaDB 모니터링 에이전트를 이용할 수 있습니다."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "웹-url-성능-체크",
        children: "웹 URL 성능 체크"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 인프라 에이전트가 주어진 웹 주소로 접속하여 접속 여부 및 응답 시간을 수집합니다. 수집된 웹 URL 성능은 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "category",
          className: "uitext"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "server_webcheck"
        }), "에서 확인할 수 있습니다. 다음 명령으로 체크할 웹 주소를 추가하세요. URL 모니터링 서비스에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../url/url-intro",
          children: "다음 문서"
        }), "를 참조하세요."]
      }), (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "server-user-script",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "lxs",
          label: "Linux Shell",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "echo \"체크할 웹 주소\" | sudo tee -a /usr/whatap/infra/conf/webcheck.conf\necho \"webcheck.enabled=true\" | sudo tee -a /usr/whatap/infra/conf/whatap.conf\nsudo service whatap-infra restart\n"
            })
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "wps",
          label: "Windows Powershell",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "Add-Content -Path \"C:\\Program Files\\WhatapInfra\\webcheck.conf\" -Value \"체크할 웹 주소\"\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"webcheck.enabled=true\"\nRestart-Service \"Whatap Infra\"\n"
            })
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "redis-서버-목록",
        children: "Redis 서버 목록"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 인프라 에이전트가 주어진 Redis 주소로 접속하여 연결 개수를 포함한 여러 개의 성능 지수를 수집합니다. 수집된 성능 정보는 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "category",
          className: "uitext"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "server_redis"
        }), "에서 확인할 수 있습니다. 다음 명령으로 체크할 Redis 서버의 접속 정보를 추가할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "server-user-script",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "lxs",
          label: "Linux Shell",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "sudo echo \"addr=Redis 주소:포트\" | sudo tee /usr/whatap/infra/conf/redis.conf\nsudo echo \"password=Redis 패스워드\" | sudo tee -a /usr/whatap/infra/conf/redis.conf\nsudo service whatap-infra restart\n"
            })
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "wps",
          label: "Windows Powershell",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "Add-Content -Path \"C:\\Program Files\\WhatapInfra\\redis.conf\" -Value \"addr=Redis 주소:포트\"\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\redis.conf\" -Value \"password=Redis 패스워드\"\nRestart-Service \"Whatap Infra\"\n"
            })
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "memcached-서버-목록",
        children: "Memcached 서버 목록"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 인프라 에이전트가 주어진 Memcached 주소로 접속하여 연결 개수를 포함한 여러 개의 성능 지수를 수집합니다. 수집된 정보는 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "category",
          className: "uitext"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "server_memcached"
        }), "에서 확인할 수 있습니다. 다음 명령으로 체크할 Memcached 서버의 접속 정보를 추가할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "server-user-script",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "lxs",
          label: "Linux Shell",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "sudo echo \"addr=Memcached 주소:포트\" | sudo tee /usr/whatap/infra/conf/memcached.conf\nsudo echo \"password=Memcached 패스워드\" | sudo tee -a /usr/whatap/infra/conf/memcached.conf\nsudo service whatap-infra restart\n"
            })
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "wps",
          label: "Windows Powershell",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "Add-Content -Path \"C:\\Program Files\\WhatapInfra\\memcached.conf\" -Value \"addr=Memcached 주소\"\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\memcached.conf\" -Value \"password=Memcached 패스워드\"\nRestart-Service \"Whatap Infra\"\n"
            })
          })
        })]
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


;// CONCATENATED MODULE: ./docs/common-items/_server-adf-tcp-port.mdx


const _server_adf_tcp_port_frontMatter = {};
const _server_adf_tcp_port_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_tcp_port_toc = [];
function _server_adf_tcp_port_createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang, TabItem, Tabs} = _components;
  if (!Cmdname) _server_adf_tcp_port_missingMdxReference("Cmdname", true);
  if (!ImgLang) _server_adf_tcp_port_missingMdxReference("ImgLang", true);
  if (!TabItem) _server_adf_tcp_port_missingMdxReference("TabItem", true);
  if (!Tabs) _server_adf_tcp_port_missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "네트워크 데몬의 수신 포트 비활성화 시 알림을 받을 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_event",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_eventSetting",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "server",
        className: "uitext"
      }), " 탭을 선택하고 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "+"
        })
      }), " ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "add_alert_setting",
        className: "uitext"
      }), " 버튼을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "server-adf-tcp-port.png",
      desc: "TCP 포트"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            alt: "number-s",
            src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
            width: "35",
            height: "35"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "port",
            className: "uitext"
          }), " 지표 토글 버튼을 클릭하여 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "사용"
          }), " 상태로 변경하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            alt: "number-s",
            src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
            width: "35",
            height: "35"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "save",
            className: "uitext"
          }), " 버튼을 선택하여 저장하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "대상 서버에서 다음 명령을 추가하세요."
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "server-user-script",
          children: [(0,jsx_runtime.jsx)(TabItem, {
            value: "lxs",
            label: "Linux Shell",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                metastring: "title=SH",
                children: "#아래 변수에 모니터링 대상 아이피를 지정합니다.\nexport TARGET_IP=127.0.0.1\n#아래 변수에 모니터링 대상 포트를 지정합니다.\nexport TARGET_PORT=80\necho \"tcp.check.$TARGET_PORT=tcp://$TARGET_IP:$TARGET_PORT\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
              })
            })
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "wps",
            label: "Windows Powershell",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                metastring: "title=SH",
                children: "#아래 변수에 모니터링 대상 아이피를 지정합니다.\n$TARGET_IP=\"127.0.0.1\"\n#아래 변수에 모니터링 대상 포트를 지정합니다.\n$TARGET_PORT=\"80\"\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"tcp.check.$TARGET_PORT=tcp://$TARGET_IP:$TARGET_PORT\"\n"
              })
            })
          })]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _server_adf_tcp_port_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_server_adf_tcp_port_createMdxContent, {
      ...props
    })
  }) : _server_adf_tcp_port_createMdxContent(props);
}
function _server_adf_tcp_port_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/common-items/_server-adf-pnpc.mdx


const _server_adf_pnpc_frontMatter = {};
const _server_adf_pnpc_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_pnpc_toc = [];
function _server_adf_pnpc_createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, TabItem, Tabs} = _components;
  if (!Cmdname) _server_adf_pnpc_missingMdxReference("Cmdname", true);
  if (!TabItem) _server_adf_pnpc_missingMdxReference("TabItem", true);
  if (!Tabs) _server_adf_pnpc_missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["프로세스 네트워크 성능은 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_serverList",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_serverDetail",
        className: "uitext"
      }), " 화면의 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "sms_summary_process",
        className: "uitext"
      }), " 위젯에서 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "server-user-script",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "lxs",
        label: "Linux Shell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "echo \"process.fdcheck=true\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "wps",
        label: "Windows Powershell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "# 관리자 권한이 필요합니다.\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"process.fdcheck=true\"\n"
          })
        })
      })]
    })]
  });
}
function _server_adf_pnpc_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_server_adf_pnpc_createMdxContent, {
      ...props
    })
  }) : _server_adf_pnpc_createMdxContent(props);
}
function _server_adf_pnpc_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/common-items/_server-adf-collect-spec.mdx


const _server_adf_collect_spec_frontMatter = {};
const _server_adf_collect_spec_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_collect_spec_toc = [];
function _server_adf_collect_spec_createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, TabItem, Tabs} = _components;
  if (!Cmdname) _server_adf_collect_spec_missingMdxReference("Cmdname", true);
  if (!TabItem) _server_adf_collect_spec_missingMdxReference("TabItem", true);
  if (!Tabs) _server_adf_collect_spec_missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["CPU, MEMORY, DISK, NIC의 스펙과 설치된 패키지 및 가상 머신의 메타 정보를 수집합니다.\n각 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "category",
        className: "uitext"
      }), "에서 다음 내용을 확인하실 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "server_package"
        }), ": 설치된 패키지입니다."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "server_inventory"
        }), ": CPU, MEMORY, DISK, NIC의 스펙입니다."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "server_pending_security_update"
        }), ": 리눅스의 보안 패치 대기 목록입니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "server-user-script",
      s: true,
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "lxs",
        label: "Linux Shell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "echo \"inventory.product.enabled=true\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "wps",
        label: "Windows Powershell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "# 관리자 권한이 필요합니다.\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"inventory.product.enabled=true\"\n"
          })
        })
      })]
    })]
  });
}
function _server_adf_collect_spec_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_server_adf_collect_spec_createMdxContent, {
      ...props
    })
  }) : _server_adf_collect_spec_createMdxContent(props);
}
function _server_adf_collect_spec_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/common-items/_server-adf-collect-lcp.mdx


const _server_adf_collect_lcp_frontMatter = {};
const _server_adf_collect_lcp_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_collect_lcp_toc = [];
function _server_adf_collect_lcp_createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _server_adf_collect_lcp_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["리눅스 컨테이너의 CPU, MEMORY, DISK, NIC 성능을 수집합니다. 수집된 성능 정보는 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "category",
        className: "uitext"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server_container"
      }), "에서 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title='Linux Shell'",
        children: "echo \"container.enabled=true\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
      })
    })]
  });
}
function _server_adf_collect_lcp_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_server_adf_collect_lcp_createMdxContent, {
      ...props
    })
  }) : _server_adf_collect_lcp_createMdxContent(props);
}
function _server_adf_collect_lcp_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/common-items/_server-adf-collect-wss.mdx


const _server_adf_collect_wss_frontMatter = {};
const _server_adf_collect_wss_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_collect_wss_toc = [];
function _server_adf_collect_wss_createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _server_adf_collect_wss_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["윈도우 서버 서비스 운영 상태를 수집합니다. 수집된 서비스 운영 상태는 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "category",
        className: "uitext"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server_windows_service"
      }), "에서 확인할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title='Windows Powershell'",
        children: "# 관리자 권한이 필요합니다.\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"winservice.enabled=true\"\n"
      })
    })]
  });
}
function _server_adf_collect_wss_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_server_adf_collect_wss_createMdxContent, {
      ...props
    })
  }) : _server_adf_collect_wss_createMdxContent(props);
}
function _server_adf_collect_wss_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/common-items/_server-adf-file-check.mdx


const _server_adf_file_check_frontMatter = {};
const _server_adf_file_check_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_file_check_toc = [];
function _server_adf_file_check_createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {TabItem, Tabs} = _components;
  if (!TabItem) _server_adf_file_check_missingMdxReference("TabItem", true);
  if (!Tabs) _server_adf_file_check_missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "파일 시스템상에 존재하거나 존재할 가능성이 있는 파일 및 디렉터리를 감시할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "server-user-script",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "lxs",
        label: "Linux Shell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "echo \"filecheck.enabled=true\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\necho \"감시를 원하는 파일 혹은 디렉터리 전체 경로\" |sudo tee -a /usr/whatap/infra/conf/filesystem.conf\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "wps",
        label: "Windows Powershell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "Add-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"filecheck.enabled=true\"\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\filesystem.conf\" -Value \"감시를 원하는 파일 혹은 디렉터리 전체 경로\"\n"
          })
        })
      })]
    })]
  });
}
function _server_adf_file_check_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_server_adf_file_check_createMdxContent, {
      ...props
    })
  }) : _server_adf_file_check_createMdxContent(props);
}
function _server_adf_file_check_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/common-items/_server-adf-nvidia.mdx


const _server_adf_nvidia_frontMatter = {};
const _server_adf_nvidia_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_nvidia_toc = [];
function _server_adf_nvidia_createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
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
  }, {Cmdname, TabItem, Tabs} = _components;
  if (!Cmdname) _server_adf_nvidia_missingMdxReference("Cmdname", true);
  if (!TabItem) _server_adf_nvidia_missingMdxReference("TabItem", true);
  if (!Tabs) _server_adf_nvidia_missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "nvidia-smi"
      }), " 명령이 탑재된 경우 GPU 성능을 5초 간격으로 수집해 와탭으로 업로드합니다. 수집된 정보는 메트릭스 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "category",
        className: "uitext"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server_nvidiasmi"
      }), "로 수집됩니다."]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "server-user-script",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "lxs",
        label: "Linux Shell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "echo \"nvidiasmi.enabled=true\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "wps",
        label: "Windows Powershell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "Add-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"nvidiasmi.enabled=true\"\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "category server_nvidiasmi"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "메트릭스"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "비고"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "DecoderUtil"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, Decoder utilization (in %)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "EncoderUtil"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, Encoder utilization (in %)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "FreeFbMemoryUsageGpu"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, Framebuffer memory free (in MiB)."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "UsedFbMemoryUsageGpu"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, Framebuffer memory used (in MiB)."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "GpuTemp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, GPU temperature (in C)."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "GpuUtil"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, GPU utilization (in %)."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MemClock"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, Memory clock frequency (in MHz)."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MemoryUtil"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, Memory utilization (in %)."
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SmClock"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, SM clock frequency (in MHz)."
              })]
            })]
          })]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _server_adf_nvidia_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_server_adf_nvidia_createMdxContent, {
      ...props
    })
  }) : _server_adf_nvidia_createMdxContent(props);
}
function _server_adf_nvidia_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/common-items/_server-adf-agent-log-ch.mdx


const _server_adf_agent_log_ch_frontMatter = {};
const _server_adf_agent_log_ch_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_agent_log_ch_toc = [];
function _server_adf_agent_log_ch_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {TabItem, Tabs} = _components;
  if (!TabItem) _server_adf_agent_log_ch_missingMdxReference("TabItem", true);
  if (!Tabs) _server_adf_agent_log_ch_missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 에이전트 로그(", (0,jsx_runtime.jsx)(_components.code, {
        children: "whatap_infrad.log"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "whatap_infra.log"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "whatap_infrad.fork.stdout.log"
      }), ")의 경로를 변경합니다. 지정 경로가 없는 경우 와탭 에이전트가 생성을 시도합니다. 에이전트 버전 2.0.6 이상 지원됩니다."]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "server-user-script",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "lxs",
        label: "Linux Shell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "echo \"agent.log.prefix=변경을 원하는 디렉터리\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "wps",
        label: "Windows Powershell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "Add-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"agent.log.prefix=변경을 원하는 디렉터리\"\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["윈도우의 경우 경로 구분자를 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\\\"
        }), "로 입력할 수 있습니다."]
      })
    })]
  });
}
function _server_adf_agent_log_ch_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_server_adf_agent_log_ch_createMdxContent, {
      ...props
    })
  }) : _server_adf_agent_log_ch_createMdxContent(props);
}
function _server_adf_agent_log_ch_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/common-items/_server-adf-netstat.mdx


const _server_adf_netstat_frontMatter = {};
const _server_adf_netstat_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_netstat_toc = [];
function _server_adf_netstat_createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, TabItem, Tabs} = _components;
  if (!Cmdname) _server_adf_netstat_missingMdxReference("Cmdname", true);
  if (!TabItem) _server_adf_netstat_missingMdxReference("TabItem", true);
  if (!Tabs) _server_adf_netstat_missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["netstat 명령이 탑재된 경우 1분 간격으로 수집하여 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "category",
        className: "uitext"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server_netstat"
      }), " (netstat connection 통계), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server_netstat_s"
      }), " (netstat -s 명령 실행 결과)로 업로드됩니다."]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "server-user-script",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "lxs",
        label: "Linux Shell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "echo \"netstats.enabled=true\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "wps",
        label: "Windows Powershell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "Add-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"netstats.enabled=true\"\n"
          })
        })
      })]
    })]
  });
}
function _server_adf_netstat_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_server_adf_netstat_createMdxContent, {
      ...props
    })
  }) : _server_adf_netstat_createMdxContent(props);
}
function _server_adf_netstat_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/common-items/_server-adf-user-script.mdx


const _server_adf_user_script_frontMatter = {};
const _server_adf_user_script_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_user_script_toc = [{
  "value": "BAT 스크립트 실행",
  "id": "bat-스크립트-실행",
  "level": 4
}, {
  "value": "PowerShell 스크립트 실행",
  "id": "powershell-스크립트-실행",
  "level": 4
}];
function _server_adf_user_script_createMdxContent(props) {
  const _components = {
    code: "code",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, TabItem, Tabs} = _components;
  if (!Cmdname) _server_adf_user_script_missingMdxReference("Cmdname", true);
  if (!TabItem) _server_adf_user_script_missingMdxReference("TabItem", true);
  if (!Tabs) _server_adf_user_script_missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(Tabs, {
    groupId: "server-user-script",
    children: [(0,jsx_runtime.jsxs)(TabItem, {
      value: "lxs",
      label: "Linux Shell",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "리눅스 서버에서 실행 가능한 사용자 스크립트를 주기적으로 실행하여 결과를 업로드합니다. 다음 예시를 참조하여 사용자 스크립트를 작성하세요."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "스크립트를 다음과 같이 작성 후 실행하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='Linux Shell'",
              children: "#!/bin/bash\n\nurls=(\"https://www.whatap.io\"  \"https://blog.whatap.io\"  \"https://service.whatap.io\")\n\nfor url in ${urls[*]}; do\n\necho \"M $url url $url\"\ncurl -w @- -o /dev/null -s \"$url\" <<'EOF'\nM %{url_effective} url %{url_effective}\\n\nH %{url_effective} time_namelookup %{time_namelookup}\\n\nH %{url_effective} time_connect %{time_connect}\\n\nH %{url_effective} time_appconnect %{time_appconnect}\\n\nH %{url_effective} time_pretransfer %{time_pretransfer}\\n\nH %{url_effective} time_redirect %{time_redirect}\\n\nH %{url_effective} time_starttransfer %{time_starttransfer}\\n\nH %{url_effective} time_total %{time_total}\\n\nEOF\n\ndone\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "다음과 같이 출력되는지 확인하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='Linux Shell'",
              children: "$ ./curl.sh\nM https://www.whatap.io/ url https://www.whatap.io/\nH https://www.whatap.io/ time_namelookup 0.007289\nH https://www.whatap.io/ time_connect 0.010702\nH https://www.whatap.io/ time_appconnect 0.033637\nH https://www.whatap.io/ time_pretransfer 0.033831\nH https://www.whatap.io/ time_redirect 0.000000\nH https://www.whatap.io/ time_starttransfer 0.043230\nH https://www.whatap.io/ time_total 0.043312\nM https://blog.whatap.io/ url https://blog.whatap.io/\nH https://blog.whatap.io/ time_namelookup 0.000000\nH https://blog.whatap.io/ time_connect 0.000000\nH https://blog.whatap.io/ time_appconnect 0.000000\nH https://blog.whatap.io/ time_pretransfer 0.000000\nH https://blog.whatap.io/ time_redirect 0.000000\nH https://blog.whatap.io/ time_starttransfer 0.000000\nH https://blog.whatap.io/ time_total 0.005654\nM https://service.whatap.io/ url https://service.whatap.io/\nH https://service.whatap.io/ time_namelookup 0.004296\nH https://service.whatap.io/ time_connect 0.007282\nH https://service.whatap.io/ time_appconnect 0.038404\nH https://service.whatap.io/ time_pretransfer 0.038607\nH https://service.whatap.io/ time_redirect 0.000000\nH https://service.whatap.io/ time_starttransfer 0.055226\nH https://service.whatap.io/ time_total 0.055307\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "스크립트 정상 수집을 확인하고 다음과 같이 와탭 서버 모니터링 에이전트에 스크립트를 등록하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='Linux Shell'",
              children: "export USER_SCRIPT=실행할 사용자 스크립트 절대 경로\nsudo chmod +x $USER_SCRIPT\nsudo mkdir /usr/whatap/infra/ext/\nsudo cp -r $USER_SCRIPT /usr/whatap/infra/ext/\nexport RUNAS_USER=사용자 스크립트를 실행할 계정. root 계정제외\nsudo WHATAP_HOME=/usr/whatap/infra/conf /usr/whatap/infra/whatap_infrad --user=$RUNAS_USER init-script\nsudo service whatap-infra restart\n"
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["수집된 데이터는 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_analysis",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_counter",
          className: "uitext"
        }), "에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "category",
          className: "uitext"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "server_ext_폴더_실행스크립트"
        }), "에서 찾을 수 있습니다."]
      })]
    }), (0,jsx_runtime.jsxs)(TabItem, {
      value: "wps",
      label: "Windows Powershell",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "윈도우 서버에서 실행 가능한 사용자 스크립트를 주기적으로 실행하여 결과를 업로드합니다. 다음 예시를 참조하여 사용자 스크립트를 작성하세요."
      }), (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "server-user-script",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "wps",
          label: "BAT",
          children: (0,jsx_runtime.jsxs)(_components.section, {
            className: "remark-sectionize-h4",
            children: [(0,jsx_runtime.jsx)(_components.h4, {
              id: "bat-스크립트-실행",
              children: "BAT 스크립트 실행"
            }), (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "스크립트를 다음과 같이 작성 후 실행하세요."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bash",
                    metastring: "title='BAT'",
                    children: "@echo off\nsetlocal enabledelayedexpansion\n\nset urls=https://www.whatap.io https://blog.whatap.io https://service.whatap.io\n\nfor %%u in (%urls%) do (\n    echo M %%u url %%u\n\n    rem Use curl to fetch the URL and get the total time taken for the request\n    for /f \"tokens=*\" %%i in ('curl -o nul -s -w \"M %%{url_effective} url %%{url_effective}\" %%u') do (\n        echo %%i\n    )\n\n    rem Measure the start time\n    set startTime=!time!\n\n    rem Perform the curl request and measure the end time\n    curl -o nul -s %%u\n\n    set endTime=!time!\n\n    rem Parse the start time\n    for /F \"tokens=1-4 delims=:.,\" %%a in (\"!startTime!\") do (\n        set /A \"startH=%%a, startM=%%b, startS=%%c, startMS=%%d\"\n    )\n\n    rem Parse the end time\n    for /F \"tokens=1-4 delims=:.,\" %%a in (\"!endTime!\") do (\n        set /A \"endH=%%a, endM=%%b, endS=%%c, endMS=%%d\"\n    )\n\n    rem Calculate the elapsed time in milliseconds\n    set /A \"elapsedMS=(endH*3600000 + endM*60000 + endS*1000 + endMS) - (startH*3600000 + startM*60000 + startS*1000 + startMS)\"\n    \n    rem Convert milliseconds to seconds and milliseconds part\n    set /A \"elapsedSec=elapsedMS/1000\"\n    set /A \"elapsedMSPart=elapsedMS %% 1000\"\n\n    echo H %%u time_total !elapsedSec!.!elapsedMSPart!\n)\n\nendlocal\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "다음과 같이 출력되는지 확인하세요."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bash",
                    metastring: "title='BAT'",
                    children: ">webcheck.bat\nM https://www.whatap.io url https://www.whatap.io\nM https://www.whatap.io/ url https://www.whatap.io/\nH https://www.whatap.io time_total 0.38\nM https://blog.whatap.io url https://blog.whatap.io\nM https://blog.whatap.io/ url https://blog.whatap.io/\nH https://blog.whatap.io time_total 0.1\nM https://service.whatap.io url https://service.whatap.io\nM https://service.whatap.io/ url https://service.whatap.io/\nH https://service.whatap.io time_total 0.922\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "스크립트 정상 수집을 확인하고 다음과 같이 와탭 서버 모니터링 에이전트에 스크립트를 등록하세요."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bat",
                    metastring: "title='BAT'",
                    children: "cd \"\\Program Files\\WhatapInfra\"\nwhtap_infra.exe init-script\nsc stop \"Whatap Infra\"\nsc start \"Whatap Infra\"\n"
                  })
                }), "\n"]
              }), "\n"]
            })]
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "wps2",
          label: "PowerShell",
          children: (0,jsx_runtime.jsxs)(_components.section, {
            className: "remark-sectionize-h4",
            children: [(0,jsx_runtime.jsx)(_components.h4, {
              id: "powershell-스크립트-실행",
              children: "PowerShell 스크립트 실행"
            }), (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "스크립트를 다음과 같이 작성 후 실행하세요."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bash",
                    metastring: "title='PowerShell'",
                    children: "$urls = @(\"https://www.whatap.io\", \"https://blog.whatap.io\", \"https://service.whatap.io\")\n\n# Hide progress bar\n$ProgressPreference = 'SilentlyContinue'\n\nforeach ($url in $urls) {\n    Write-Output \"M $url url $url\"\n\n    $startTime = Get-Date\n    try {\n        $response = Invoke-WebRequest -Uri $url -UseBasicParsing\n        $endTime = Get-Date\n        \n        $timeTotal = ($endTime - $startTime).TotalSeconds\n        \n        Write-Output \"M $($response.BaseResponse.ResponseUri) url $($response.BaseResponse.ResponseUri)\"\n        Write-Output (\"H {0} time_total {1}\" -f $url, $timeTotal)\n    } catch {\n        Write-Output \"Failed to access $url\"\n    }\n}\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "다음과 같이 출력되는지 확인하세요."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bash",
                    metastring: "title='PowerShell'",
                    children: "> .\\webcheck.ps1                     \nM https://www.whatap.io url https://www.whatap.io\nM  url \nH https://www.whatap.io time_total 0.376979\nM https://blog.whatap.io url https://blog.whatap.io\nFailed to access https://blog.whatap.io\nM https://service.whatap.io url https://service.whatap.io\nFailed to access https://service.whatap.io\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "스크립트 정상 수집을 확인하고 다음과 같이 와탭 서버 모니터링 에이전트에 스크립트를 등록하세요."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bash",
                    metastring: "title='PowerShell'",
                    children: "cd \"\\Program Files\\WhatapInfra\"\n.\\whatap_infra.exe init-script\nRestart-Service \"Whatap Infra\"\n"
                  })
                }), "\n"]
              }), "\n"]
            })]
          })
        })]
      })]
    })]
  });
}
function _server_adf_user_script_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_server_adf_user_script_createMdxContent, {
      ...props
    })
  }) : _server_adf_user_script_createMdxContent(props);
}
function _server_adf_user_script_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/common-items/_server-adf-ntp.mdx


const _server_adf_ntp_frontMatter = {};
const _server_adf_ntp_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_ntp_toc = [{
  "value": "추가 지표 안내",
  "id": "추가-지표-안내",
  "level": 3
}, {
  "value": "<code>server_ntpq</code>",
  "id": "server_ntpq",
  "level": 4
}, {
  "value": "Tags",
  "id": "tags",
  "level": 5
}, {
  "value": "Fields",
  "id": "fields",
  "level": 5
}];
function _server_adf_ntp_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    pre: "pre",
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
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "사전 확인"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "운영체제: 리눅스"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "와탭 서버 모니터링 에이전트 버전: 2.5.4 이상"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "다음 옵션을 통해 서버 시간 동기화(NTP) 모니터링 기능을 활성화 할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "echo \"ntpq.enabled=true\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "추가-지표-안내",
        children: "추가 지표 안내"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "서버 시간 동기화 모니터링 기능 활성화 시 추가되는 메트릭은 다음과 같습니다."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h4",
      children: (0,jsx_runtime.jsx)(_components.h4, {
        id: "server_ntpq",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "server_ntpq"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h5",
      children: [(0,jsx_runtime.jsx)(_components.h5, {
        id: "tags",
        children: "Tags"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "태그명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "refid"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["해당 리모트(", (0,jsx_runtime.jsx)(_components.code, {
                children: "remote"
              }), ")의 시간 동기화 소스를 의미합니다."]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "remote"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "호스트가 시간 동기화를 수행할 대상 서버를 의미합니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h5",
      children: [(0,jsx_runtime.jsx)(_components.h5, {
        id: "fields",
        children: "Fields"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "필드명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "단위"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "비고"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "delay"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ms"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "서버가 보낸 쿼리에 대한 응답으로 회신 패킷을 반환하는데 걸린 시간을 의미합니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "jitter"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "두 샘플 간의 오프셋 측정 차이로 추정한 오차 경계치를 의미합니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "offset"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "ms"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "서버 설정 시간과 클라이언트 설정 시간 간의 차이를 의미합니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "poll"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "second"
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "ntp.conf"
              }), " 파일에서 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "minpoll"
              }), " 값으로 정의된 원격 호스트로의 폴링 간격을 의미합니다."]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "reach"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "서버에 도달하는 시도가 얼마나 성공적인지 확인할 수 있습니다. 2^0 위치에 가장 최근 질의 성공 여부를 기록하고 8 비트 쉬프트 레지스터로 작동합니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "st"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "원격 호스트의 스트래텀 레벨을 의미합니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "sync_client"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1: 동기화 서버가 존재합니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "-"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "0: 동기화 서버가 존재하지 않습니다."
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "5",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "t"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "5",
              children: "-"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "사용 가능한 유형은 다음과 같습니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "5",
              children: "-"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "l : 로컬(예 GPS시계)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "u: 유니캐스트(일반적인 유형)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "m: 멀티캐스트"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "b: 브로드캐스트"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "when"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "second"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "원격 호스트 응답 이후 지난 초 수를 의미합니다."
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          })]
        })]
      })]
    })]
  });
}
function _server_adf_ntp_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_server_adf_ntp_createMdxContent, {
      ...props
    })
  }) : _server_adf_ntp_createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/common-items/_server-adf-linux-system-log.mdx


const _server_adf_linux_system_log_frontMatter = {};
const _server_adf_linux_system_log_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_linux_system_log_toc = [];
function _server_adf_linux_system_log_createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "리눅스 시스템 로그를 실시간 업로드하여 장애 시 해당 시간에 발생한 로그를 확인할 수 있습니다. 수집 대상 로그 파일은 다음과 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "/var/log/syslog"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "/var/log/messages"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "설정 방법은 다음과 같습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title='Linux Shell'",
        children: "echo \"systemlog.enabled=true\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
      })
    })]
  });
}
function _server_adf_linux_system_log_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_server_adf_linux_system_log_createMdxContent, {
      ...props
    })
  }) : _server_adf_linux_system_log_createMdxContent(props);
}


// EXTERNAL MODULE: ./docs/common-items/_log-server-multi-file-category.mdx
var _log_server_multi_file_category = __webpack_require__(74275);
;// CONCATENATED MODULE: ./docs/common-items/_server-adf-log-plugin.mdx


const _server_adf_log_plugin_frontMatter = {};
const _server_adf_log_plugin_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*

0214 로그 모니터링 요청-추가 업데이트

stats_enabled = false ## 로그 발생량 통계 별도 데이터로 전송 여부
stats_category = "serverlog_stats" ## 로그 발생량 통계 카테고리

* `stats_enabled`: 별도의 로그 수집 통계 데이터 발생 여부를 설정합니다. 기본값은 `false`입니다. 값을 `true`로 설정하면 `stats_category`에서 설정한 카테고리로 통계 데이터가 발생합니다.
* `stats_category`: 별도의 로그 수집 통계 데이터를 저장할 메트릭스 카테고리를 설정합니다. 통계 데이터 필드는 다음과 같습니다.

*/
/*다중 파일 및 파일 분리 241014*/



const _server_adf_log_plugin_toc = [{
  "value": "Linux Shell",
  "id": "linux-shell",
  "level": 3
}, {
  "value": "Windows Powershell",
  "id": "windows-powershell",
  "level": 3
}, {
  "value": "옵션 설정",
  "id": "server-log-settings",
  "level": 3
}, ..._log_server_multi_file_category/* toc */.RM];
function _server_adf_log_plugin_createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "임의의 로그를 수집할 수 있습니다. 다음 설정은 에이전트 재시작이 필요합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "linux-shell",
        children: "Linux Shell"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell' {7-12,14,15,25,26} showLineNumbers",
          children: "cd /usr/whatap/infra\nsudo mkdir extension\n\ncat <<EOL | sudo tee extension/logsink.conf > /dev/null\n[[inputs.logsink]]\n  category = \"serverlog\"\n  ## 로그 발생량 통계 별도 데이터로 전송 여부\n  stats_enabled = true \n  ## 로그 발생량 통계 카테고리\n  stats_category = \"logsink_stats\"\n  ## 로그 파일 경로(path)에 별표(*)가 포함되어 제외할 로그 비대상 파일명 설정 \n  excludeNames = [ \".gz\",\".zip\" ] \n  [[inputs.logsink.file]]\n    ## 로그 파일 지정 시, 날짜 패턴(strftime.org) 지정 가능\n    path = \"/some/path/%Y-%m-%d/.log\" \n    disabled = false\n    encoding = \"euc-kr\"\n\n  [[inputs.logsink.file]]\n    path = \"/some/other/log\"\n    disabled = false\n    encoding = \"utf-8\"\n\n  [[inputs.logsink.file]]\n    ## 줄 단위 로그에서 해당 키워드 검색 시, 이전 로그에 병합\n    nowrap_keywords = [\"Caused by:\", \"Test\"]\nEOL\n\nsudo service whatap-infra restart\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "windows-powershell",
        children: "Windows Powershell"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Windows Powershell' {7-11,14,15,19,20} showLineNumbers",
          children: "# 관리자 권한 필요\nNew-Item -type \"Directory\" -Path \"C:\\Program Files\\WhatapInfra\\extension\"\n\n$contentToAdd = @\"\n[[inputs.logsink]]\ncategory = \"serverlog\"\n## 로그 발생량 통계 별도 데이터로 전송 여부\nstats_enabled = true \n## 로그 발생량 통계 카테고리\nstats_category = \"logsink_stats\"\n## 로그 파일 경로(path)에 별표(*)가 포함되어 제외할 로그 비대상 파일명 설정 \nexcludeNames = [ \".gz\",\".zip\" ] \n[[inputs.logsink.file]]\n## 로그 파일 지정 시, 날짜 패턴(strftime.org) 지정 가능\npath = \"c:\\\\whatap\\\\logs%Y-%m-%d_.log\"\ndisabled = false\nencoding = \"euc-kr\"\n[[inputs.logsink.file]]\n## 줄 단위 로그에서 해당 키워드 검색 시, 이전 로그에 병합\nnowrap_keywords = [\"Caused by:\", \"Test\"]\n\"@\n\nNew-Item -path \"C:\\Program Files\\WhatapInfra\\extension\" -name \"logsink.conf\" -type \"file\" -value $contentToAdd -Force\n\nRestart-Service \"Whatap Infra\"\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "server-log-settings",
        children: "옵션 설정"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "stats_enabled"
            }), ": 수집 현황 데이터의 수집 여부를 설정합니다. 기본값은 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), "입니다. 값을 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), "로 설정해야 합니다. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), "로 설정하면 다음 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stats_category"
            }), "에서 설정한 카테고리(", (0,jsx_runtime.jsx)(_components.code, {
              children: "logsink_stats"
            }), ")로 통계 데이터가 발생합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "stats_category"
            }), ": 수집 현황 데이터를 저장할 메트릭스 카테고리를 설정합니다. 값을 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "logsink_stats"
            }), "로 설정해야 합니다. 통계 데이터 필드는 다음과 같습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "file"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "checkInterval"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "encoding"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "filepos"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "checkedLocalTime"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "lastupdatedLocalTime"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "fileSize"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "error"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "firstCheck"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "transferBytes"
              })
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "excludeNames"
            }), ": 로그 파일 경로(path)에 별표(*)를 포함한 경우 로그 비대상 파일을 제외하도록 파일명을 설정할 수 있습니다. 쉼표(,)를 구분자로 이용해 복수 설정할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='Example'",
              children: "excludeNames = [ \".gz\",\".zip\" ]\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "nowrap_keywords"
            }), ": 줄 단위 로그 검색 시 해당 옵션값으로 지정한 키워드가 검색될 경우 이전 로그에 병합합니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_log_server_multi_file_category/* default */.Ay, {})]
    })]
  });
}
function _server_adf_log_plugin_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_server_adf_log_plugin_createMdxContent, {
      ...props
    })
  }) : _server_adf_log_plugin_createMdxContent(props);
}


// EXTERNAL MODULE: ./docs/common-items/_log-server-windows-event.mdx
var _log_server_windows_event = __webpack_require__(34656);
;// CONCATENATED MODULE: ./docs/server/advanced-feature.mdx


const advanced_feature_frontMatter = {
	id: 'advanced-feature',
	title: '고급 기능',
	description: '서버 에이전트의 고급 기능을 안내합니다.',
	keywords: [
		'Server',
		'고급 기능'
	],
	isTranslationMissing: false
};
const advanced_feature_contentTitle = undefined;
const metadata = {
  "id": "server/advanced-feature",
  "title": "고급 기능",
  "description": "서버 에이전트의 고급 기능을 안내합니다.",
  "source": "@site/docs/server/advanced-feature.mdx",
  "sourceDirName": "server",
  "slug": "/server/advanced-feature",
  "permalink": "/whatap-docs/server/advanced-feature",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/server/advanced-feature.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "advanced-feature",
    "title": "고급 기능",
    "description": "서버 에이전트의 고급 기능을 안내합니다.",
    "keywords": [
      "Server",
      "고급 기능"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "serverSidebar",
  "previous": {
    "title": "윈도우 성능 카운터 설정",
    "permalink": "/whatap-docs/server/agent-pcounter"
  },
  "next": {
    "title": "에이전트 업데이트",
    "permalink": "/whatap-docs/server/agent-update"
  }
};
const assets = {

};




















const advanced_feature_toc = [{
  "value": "확장팩 설정",
  "id": "확장팩-설정",
  "level": 2
}, ...toc, {
  "value": "TCP 포트 감시",
  "id": "tcp-포트-감시",
  "level": 2
}, ..._server_adf_tcp_port_toc, {
  "value": "프로세스 네트워크 성능 측정",
  "id": "프로세스-네트워크-성능-측정",
  "level": 2
}, ..._server_adf_pnpc_toc, {
  "value": "서버 스펙 수집",
  "id": "서버-스펙-수집",
  "level": 2
}, ..._server_adf_collect_spec_toc, {
  "value": "리눅스 컨테이너 성능 수집",
  "id": "리눅스-컨테이너-성능-수집",
  "level": 2
}, ..._server_adf_collect_lcp_toc, {
  "value": "윈도우 서버 서비스 운영 상태 수집",
  "id": "윈도우-서버-서비스-운영-상태-수집",
  "level": 2
}, ..._server_adf_collect_wss_toc, {
  "value": "파일 감시",
  "id": "파일-감시",
  "level": 2
}, ..._server_adf_file_check_toc, {
  "value": "Nvidia GPU 모니터링",
  "id": "nvidia-gpu-모니터링",
  "level": 2
}, ..._server_adf_nvidia_toc, {
  "value": "와탭 에이전트 로그 위치 변경",
  "id": "와탭-에이전트-로그-위치-변경",
  "level": 2
}, ..._server_adf_agent_log_ch_toc, {
  "value": "Netstat 모니터링",
  "id": "netstat-모니터링",
  "level": 2
}, ..._server_adf_netstat_toc, {
  "value": "사용자 스크립트 모니터링",
  "id": "사용자-스크립트-모니터링",
  "level": 2
}, ..._server_adf_user_script_toc, {
  "value": "서버 시간 동기화 모니터링",
  "id": "ntp-monitoring",
  "level": 2
}, ..._server_adf_ntp_toc, {
  "value": "리눅스 시스템 로그 모니터링",
  "id": "리눅스-시스템-로그-모니터링",
  "level": 2
}, ..._server_adf_linux_system_log_toc, {
  "value": "로그 모니터링 플러그인",
  "id": "로그-모니터링-플러그인",
  "level": 2
}, ..._server_adf_log_plugin_toc, {
  "value": "윈도우 이벤트 로그 옵션 설정",
  "id": "윈도우-이벤트-로그-옵션-설정",
  "level": 3
}, ..._log_server_windows_event/* toc */.RM];
function advanced_feature_createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "확장팩-설정",
        children: "확장팩 설정"
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "tcp-포트-감시",
        children: "TCP 포트 감시"
      }), (0,jsx_runtime.jsx)(_server_adf_tcp_port_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "프로세스-네트워크-성능-측정",
        children: "프로세스 네트워크 성능 측정"
      }), (0,jsx_runtime.jsx)(_server_adf_pnpc_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "서버-스펙-수집",
        children: "서버 스펙 수집"
      }), (0,jsx_runtime.jsx)(_server_adf_collect_spec_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "리눅스-컨테이너-성능-수집",
        children: "리눅스 컨테이너 성능 수집"
      }), (0,jsx_runtime.jsx)(_server_adf_collect_lcp_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "윈도우-서버-서비스-운영-상태-수집",
        children: "윈도우 서버 서비스 운영 상태 수집"
      }), (0,jsx_runtime.jsx)(_server_adf_collect_wss_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "파일-감시",
        children: "파일 감시"
      }), (0,jsx_runtime.jsx)(_server_adf_file_check_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "nvidia-gpu-모니터링",
        children: "Nvidia GPU 모니터링"
      }), (0,jsx_runtime.jsx)(_server_adf_nvidia_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "와탭-에이전트-로그-위치-변경",
        children: "와탭 에이전트 로그 위치 변경"
      }), (0,jsx_runtime.jsx)(_server_adf_agent_log_ch_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "netstat-모니터링",
        children: "Netstat 모니터링"
      }), (0,jsx_runtime.jsx)(_server_adf_netstat_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "사용자-스크립트-모니터링",
        children: "사용자 스크립트 모니터링"
      }), (0,jsx_runtime.jsx)(_server_adf_user_script_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "ntp-monitoring",
        children: "서버 시간 동기화 모니터링"
      }), (0,jsx_runtime.jsx)(_server_adf_ntp_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "리눅스-시스템-로그-모니터링",
        children: "리눅스 시스템 로그 모니터링"
      }), (0,jsx_runtime.jsx)(_server_adf_linux_system_log_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "로그-모니터링-플러그인",
        children: "로그 모니터링 플러그인"
      }), (0,jsx_runtime.jsx)(_server_adf_log_plugin_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "윈도우-이벤트-로그-옵션-설정",
        children: "윈도우 이벤트 로그 옵션 설정"
      }), (0,jsx_runtime.jsx)(_log_server_windows_event/* default */.Ay, {})]
    })]
  });
}
function advanced_feature_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(advanced_feature_createMdxContent, {
      ...props
    })
  }) : advanced_feature_createMdxContent(props);
}



/***/ }),

/***/ 15947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function TabItem({ children , hidden , className  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "tabpanel",
        className: (0,clsx/* default */.A)(styles_module.tabItem, className),
        hidden,
        children: children
    });
};


/***/ }),

/***/ 74235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(52204);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(13321);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(57641);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(73094);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js + 1 modules
var storageUtils = __webpack_require__(57237);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp) {
    const { props  } = comp;
    return !!props && typeof props === 'object' && 'value' in props;
}
function sanitizeTabsChildren(children) {
    var ref;
    var ref1;
    return (ref1 = (ref = react.Children.toArray(children).filter((child)=>child !== '\n').map((child)=>{
        if (!child || /*#__PURE__*/ (0,react.isValidElement)(child) && isTabItem(child)) {
            return child;
        }
        // child.type.name will give non-sensical values in prod because of
        // minification, but we assume it won't throw in prod.
        throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
        typeof child.type === 'string' ? child.type : child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);
    })) === null || ref === void 0 ? void 0 : ref.filter(Boolean)) !== null && ref1 !== void 0 ? ref1 : [];
}
function extractChildrenTabValues(children) {
    return sanitizeTabsChildren(children).map(({ props: { value , label , attributes , default: isDefault  }  })=>({
            value,
            label,
            attributes,
            default: isDefault
        }));
}
function ensureNoDuplicateValue(values) {
    const dup = (0,jsUtils/* duplicates */.XI)(values, (a, b)=>a.value === b.value);
    if (dup.length > 0) {
        throw new Error(`Docusaurus error: Duplicate values "${dup.map((a)=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);
    }
}
function useTabValues(props) {
    const { values: valuesProp , children  } = props;
    return (0,react.useMemo)(()=>{
        const values = valuesProp !== null && valuesProp !== void 0 ? valuesProp : extractChildrenTabValues(children);
        ensureNoDuplicateValue(values);
        return values;
    }, [
        valuesProp,
        children
    ]);
}
function isValidValue({ value , tabValues ,  }) {
    return tabValues.some((a)=>a.value === value);
}
function getInitialStateValue({ defaultValue , tabValues ,  }) {
    if (tabValues.length === 0) {
        throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');
    }
    if (defaultValue) {
        // Warn user about passing incorrect defaultValue as prop.
        if (!isValidValue({
            value: defaultValue,
            tabValues
        })) {
            throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map((a)=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);
        }
        return defaultValue;
    }
    var ref;
    const defaultTabValue = (ref = tabValues.find((tabValue)=>tabValue.default)) !== null && ref !== void 0 ? ref : tabValues[0];
    if (!defaultTabValue) {
        throw new Error('Unexpected error: 0 tabValues');
    }
    return defaultTabValue.value;
}
function getStorageKey(groupId) {
    if (!groupId) {
        return null;
    }
    return `docusaurus.tab.${groupId}`;
}
function getQueryStringKey({ queryString =false , groupId ,  }) {
    if (typeof queryString === 'string') {
        return queryString;
    }
    if (queryString === false) {
        return null;
    }
    if (queryString === true && !groupId) {
        throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);
    }
    return groupId !== null && groupId !== void 0 ? groupId : null;
}
function useTabQueryString({ queryString =false , groupId ,  }) {
    const history = (0,react_router/* useHistory */.W6)();
    const key = getQueryStringKey({
        queryString,
        groupId
    });
    const value = (0,historyUtils/* useQueryStringValue */.aZ)(key);
    const setValue = (0,react.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        const searchParams = new URLSearchParams(history.location.search);
        searchParams.set(key, newValue);
        history.replace(_objectSpreadProps(_objectSpread({}, history.location), {
            search: searchParams.toString()
        }));
    }, [
        key,
        history
    ]);
    return [
        value,
        setValue
    ];
}
function useTabStorage({ groupId  }) {
    const key = getStorageKey(groupId);
    const [value, storageSlot] = (0,storageUtils/* useStorageSlot */.Dv)(key);
    const setValue = (0,react.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        storageSlot.set(newValue);
    }, [
        key,
        storageSlot
    ]);
    return [
        value,
        setValue
    ];
}
function useTabs(props) {
    const { defaultValue , queryString =false , groupId  } = props;
    const tabValues = useTabValues(props);
    const [selectedValue, setSelectedValue] = (0,react.useState)(()=>getInitialStateValue({
            defaultValue,
            tabValues
        }));
    const [queryStringValue, setQueryString] = useTabQueryString({
        queryString,
        groupId
    });
    const [storageValue, setStorageValue] = useTabStorage({
        groupId
    });
    // We sync valid querystring/storage value to state on change + hydration
    const valueToSync = (()=>{
        const value = queryStringValue !== null && queryStringValue !== void 0 ? queryStringValue : storageValue;
        if (!isValidValue({
            value,
            tabValues
        })) {
            return null;
        }
        return value;
    })();
    // Sync in a layout/sync effect is important, for useScrollPositionBlocker
    // See https://github.com/facebook/docusaurus/issues/8625
    (0,useIsomorphicLayoutEffect/* default */.A)(()=>{
        if (valueToSync) {
            setSelectedValue(valueToSync);
        }
    }, [
        valueToSync
    ]);
    const selectValue = (0,react.useCallback)((newValue)=>{
        if (!isValidValue({
            value: newValue,
            tabValues
        })) {
            throw new Error(`Can't select invalid tab value=${newValue}`);
        }
        setSelectedValue(newValue);
        setQueryString(newValue);
        setStorageValue(newValue);
    }, [
        setQueryString,
        setStorageValue,
        tabValues
    ]);
    return {
        selectedValue,
        selectValue,
        tabValues
    };
} //# sourceMappingURL=tabsUtils.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(12075);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
function Tabs_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function Tabs_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            Tabs_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function Tabs_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function Tabs_objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        Tabs_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TabList({ className , block , selectedValue , selectValue , tabValues  }) {
    const tabRefs = [];
    const { blockElementScrollPositionUntilNextRender  } = (0,scrollUtils/* useScrollPositionBlocker */.a_)();
    const handleTabChange = (event)=>{
        const newTab = event.currentTarget;
        const newTabIndex = tabRefs.indexOf(newTab);
        const newTabValue = tabValues[newTabIndex].value;
        if (newTabValue !== selectedValue) {
            blockElementScrollPositionUntilNextRender(newTab);
            selectValue(newTabValue);
        }
    };
    const handleKeydown = (event)=>{
        let focusElement = null;
        switch(event.key){
            case 'Enter':
                {
                    handleTabChange(event);
                    break;
                }
            case 'ArrowRight':
                {
                    const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
                    var _nextTab;
                    focusElement = (_nextTab = tabRefs[nextTab]) !== null && _nextTab !== void 0 ? _nextTab : tabRefs[0];
                    break;
                }
            case 'ArrowLeft':
                {
                    const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
                    var _prevTab;
                    focusElement = (_prevTab = tabRefs[prevTab]) !== null && _prevTab !== void 0 ? _prevTab : tabRefs[tabRefs.length - 1];
                    break;
                }
            default:
                break;
        }
        focusElement === null || focusElement === void 0 ? void 0 : focusElement.focus();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        role: "tablist",
        "aria-orientation": "horizontal",
        className: (0,clsx/* default */.A)('tabs', {
            'tabs--block': block
        }, className),
        children: tabValues.map(({ value , label , attributes  })=>{
            /*#__PURE__*/ return (0,jsx_runtime.jsx)("li", Tabs_objectSpreadProps(Tabs_objectSpread({
                // TODO extract TabListItem
                role: "tab",
                tabIndex: selectedValue === value ? 0 : -1,
                "aria-selected": selectedValue === value,
                ref: (tabControl)=>tabRefs.push(tabControl),
                onKeyDown: handleKeydown,
                onClick: handleTabChange
            }, attributes), {
                className: (0,clsx/* default */.A)('tabs__item', styles_module.tabItem, attributes === null || attributes === void 0 ? void 0 : attributes.className, {
                    'tabs__item--active': selectedValue === value
                }),
                children: label !== null && label !== void 0 ? label : value
            }), value);
        })
    });
}
function TabContent({ lazy , children , selectedValue  }) {
    const childTabs = (Array.isArray(children) ? children : [
        children
    ]).filter(Boolean);
    if (lazy) {
        const selectedTabItem = childTabs.find((tabItem)=>tabItem.props.value === selectedValue);
        if (!selectedTabItem) {
            // fail-safe or fail-fast? not sure what's best here
            return null;
        }
        return /*#__PURE__*/ (0,react.cloneElement)(selectedTabItem, {
            className: (0,clsx/* default */.A)('margin-top--md', selectedTabItem.props.className)
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "margin-top--md",
        children: childTabs.map((tabItem, i)=>/*#__PURE__*/ (0,react.cloneElement)(tabItem, {
                key: i,
                hidden: tabItem.props.value !== selectedValue
            }))
    });
}
function TabsComponent(props) {
    const tabs = useTabs(props);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.A)('tabs-container', styles_module.tabList),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabList, Tabs_objectSpread({}, tabs, props)),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContent, Tabs_objectSpread({}, tabs, props))
        ]
    });
}
function Tabs(props) {
    const isBrowser = (0,useIsBrowser/* default */.A)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabsComponent, Tabs_objectSpreadProps(Tabs_objectSpread({}, props), {
        children: sanitizeTabsChildren(props.children)
    }), String(isBrowser));
};


/***/ }),

/***/ 50839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/log-server-file-separation-af237414158ecee71d1f3a5b0d4eaf5c.png");

/***/ }),

/***/ 50124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/log-server-multi-file-1e5a871211c7e49e273626f7b4c956cb.png");

/***/ }),

/***/ 15856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 29675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

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