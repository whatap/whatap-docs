"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[53925],{

/***/ 80537:
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
  "value": " 시간과 카테고리 선택",
  "id": "-시간과-카테고리-선택",
  "level": 2
}, {
  "value": " 태그와 필드 선택",
  "id": "-태그와-필드-선택",
  "level": 2
}, {
  "value": " 메트릭스 테이블",
  "id": "-메트릭스-테이블",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, InDoc, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "amazon-cloudwatch,amazon-ecs,azure,ncloud,browser",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_analysis",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_metricsSearch",
          className: "uitext"
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "amazon-cloudwatch,amazon-ecs,azure,ncloud",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_metrics",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_metricsSearch",
          className: "uitext"
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "browser",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_lab",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_metricsSearch",
          className: "uitext"
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_metricsSearch",
        className: "uitext"
      }), " 메뉴에서 태그 기반으로 특정 메트릭스를 조회할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "metrics-search.png",
      desc: "메트릭스 조회"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
        id: "-시간과-카테고리-선택",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 시간과 카테고리 선택"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "number 1",
          src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 영역에서 메트릭스가 수집된 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "time_selector",
          className: "uitext"
        }), "과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "max_count",
          className: "uitext"
        }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "category",
          className: "uitext"
        }), "를 지정할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "time_selector",
          className: "uitext"
        }), "과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "category",
          className: "uitext"
        }), "는 반드시 지정해야 합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "time_selector",
              className: "uitext"
            }), ": 메트릭스가 수집된 시간을 지정해 조회할 수 있습니다. 기본값은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "1시간"
            }), "입니다. 기본 옵션으로 제공하는 조회 시간 외 사용자가 직접 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "time_selector",
              className: "uitext"
            }), " 탭을 선택해 날짜와 시간을 지정할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "max_count",
              className: "uitext"
            }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 3",
              src: (__webpack_require__(86865)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 목록에 조회할 메트릭스 최대 개수를 지정할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "10"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "50"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "100"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "200"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "300"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "1000"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "2000"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "3000"
            }), " 개까지 설정할 수있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "category",
              className: "uitext"
            }), ": 유관 지표들의 분류 단위입니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "category",
              className: "uitext"
            }), " 탭을 선택해 원하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "category",
              className: "uitext"
            }), "를 지정할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "새로고침 아이콘",
              src: (__webpack_require__(75323)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "refresh_tag_options",
              className: "uitext"
            }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "category",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "tags",
              className: "uitext"
            }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "field",
              className: "uitext"
            }), " 옵션을 다시 불러올 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
        id: "-태그와-필드-선택",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 태그와 필드 선택"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "number 2",
          src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 영역에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "tags",
          className: "uitext"
        }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "field",
          className: "uitext"
        }), "를 선택합니다. 사용자가 개별적으로 지정하지 않는다면 기본 설정은 전체 선택입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "tags",
              className: "uitext"
            }), ": 수집된 대상을 구분할 수 있는 고유 정보 데이터입니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "field",
              className: "uitext"
            }), ": 모니터링 대상으로부터 수집된 지표입니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "filter",
              className: "uitext"
            }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "필터링 아이콘",
              src: (__webpack_require__(46817)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "filter_by_tag_value",
              className: "uitext"
            }), " 버튼을 선택하고 태그 값을 설정해 필터링할 수 있습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["예시, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "oname"
              }), "의 값을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "demo-8101"
              }), "로 설정해 필터링한 데이터를 조회할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "검색 아이콘",
              src: (__webpack_require__(89944)/* ["default"] */ .A) + "",
              width: "28",
              height: "28"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "search",
              className: "uitext"
            }), ": 조건을 설정 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "search",
              className: "uitext"
            }), " 아이콘을 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 3",
              src: (__webpack_require__(86865)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 영역에서 해당 메트릭스의 원본 데이터를 조회할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "CSV 다운로드 아이콘",
              src: (__webpack_require__(36966)/* ["default"] */ .A) + "",
              width: "49",
              height: "24"
            }), " : 해당 메트릭스 원본 데이터를 CSV 파일로 다운로드할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "npm",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "note",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["네트워크 성능 지표 중 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "npm_process_tag_data"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "npm_process_tag_list"
            }), " 카테고리는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "tag",
              className: "uitext"
            }), " 항목을 제공하지 않습니다."]
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
        id: "-메트릭스-테이블",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          src: (__webpack_require__(86865)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 메트릭스 테이블"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["수집되는 메트릭스를 사전에 특정할 수 없기에 수집 중인 모든 메트릭스의 원본 데이터를 확인하는 것이 중요합니다. 위의 조건 영역에서 원하는 조건을 설정 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "number 3",
          src: (__webpack_require__(86865)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " 영역에서 해당 메트릭스의 원본 데이터를 테이블 형식으로 조회할 수 있습니다. 사용자가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "tags",
          className: "uitext"
        }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "field",
          className: "uitext"
        }), " 각 조건을 지정함에 따라 테이블의 컬럼이 변경됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["메트릭스 조회 시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "time_selector",
                className: "uitext"
              }), "과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "category",
                className: "uitext"
              }), "는 반드시 지정해야 합니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["메트릭스 조회 시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "tags",
                className: "uitext"
              }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "field",
                className: "uitext"
              }), " 지정은 선택 사항입니다."]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
          product: "npm",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["네트워크 성능 지표 중 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "npm_process_tag_data"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "npm_process_tag_list"
              }), " 카테고리는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "tag",
                className: "uitext"
              }), " 항목을 제공하지 않습니다."]
            }), "\n"]
          })
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

/***/ 6724:
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
/* harmony import */ var _common_items_metrics_search_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80537);


const frontMatter = {
	id: 'metrics-search',
	title: '메트릭스 조회',
	description: '메트릭스 Raw Data를 조회할 수 있습니다.',
	tags: [
		'메트릭스',
		'메트릭스 조회',
		'UI'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "oracle-v1/metrics-search",
  "title": "메트릭스 조회",
  "description": "메트릭스 Raw Data를 조회할 수 있습니다.",
  "source": "@site/docs/oracle-v1/metrics-search.mdx",
  "sourceDirName": "oracle-v1",
  "slug": "/oracle-v1/metrics-search",
  "permalink": "/oracle-v1/metrics-search",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/oracle-v1/metrics-search.mdx",
  "tags": [
    {
      "inline": true,
      "label": "메트릭스",
      "permalink": "/tags/메트릭스"
    },
    {
      "inline": true,
      "label": "메트릭스 조회",
      "permalink": "/tags/메트릭스-조회"
    },
    {
      "inline": true,
      "label": "UI",
      "permalink": "/tags/ui"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "metrics-search",
    "title": "메트릭스 조회",
    "description": "메트릭스 Raw Data를 조회할 수 있습니다.",
    "tags": [
      "메트릭스",
      "메트릭스 조회",
      "UI"
    ]
  },
  "sidebar": "dboracleSidebar",
  "previous": {
    "title": "메트릭스 차트",
    "permalink": "/oracle-v1/metrics-chart"
  },
  "next": {
    "title": "메트릭스 이상 탐지",
    "permalink": "/oracle-v1/metrics-detect-anormal"
  }
};
const assets = {

};




const toc = [..._common_items_metrics_search_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM];
function _createMdxContent(props) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_metrics_search_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {});
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

/***/ 75323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjQiIGZpbGw9IiM5Nzk3OTciLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMTcuMjYyM0wxMiAxOS4zMzM0VjE3Ljk5NEM4LjY4NjI5IDE3Ljk5NCA2IDE1LjI5NTQgNiAxMS45NjY2QzYgMTAuNzYyNyA2LjM1MTM0IDkuNjQxMjkgNi45NTY2MyA4LjcwMDEyTDguMDI1MiA5LjUwOTAzQzcuNTg2NDcgMTAuMjIzNiA3LjMzMzMzIDExLjA2NTQgNy4zMzMzMyAxMS45NjY2QzcuMzMzMzMgMTQuNTU1NyA5LjQyMjY3IDE2LjY1NDYgMTIgMTYuNjU0NlYxNS4zMTUxTDE1IDE3LjI2MjNaTTkgNi42MTM4OEwxMiA4LjY4NTAxVjcuMjc4NjJDMTQuNTc3MyA3LjI3ODYyIDE2LjY2NjcgOS4zNzc1IDE2LjY2NjcgMTEuOTY2NkMxNi42NjY3IDEyLjg4NjQgMTYuNDAzIDEzLjc0NDMgMTUuOTQ3NCAxNC40NjgyTDE3LjAxNTIgMTUuMjc2NUMxNy42Mzc3IDE0LjMyNjUgMTggMTMuMTg5IDE4IDExLjk2NjZDMTggOC42Mzc3NiAxNS4zMTM3IDUuOTM5MiAxMiA1LjkzOTJWNC42NjY3NUw5IDYuNjEzODhaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 89944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgcng9IjQiIGZpbGw9IiMyOTZDRjIiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTguMzIwMiAxNi45MDZDMjAuNzYyNyAxMy43Njc2IDIwLjU0MTYgOS4yMjc4NyAxNy42NTY5IDYuMzQzMTVDMTQuNTMyNyAzLjIxODk1IDkuNDY3MzQgMy4yMTg5NSA2LjM0MzE1IDYuMzQzMTVDMy4yMTg5NSA5LjQ2NzM0IDMuMjE4OTUgMTQuNTMyNyA2LjM0MzE1IDE3LjY1NjlDOS4yMjc4NyAyMC41NDE2IDEzLjc2NzYgMjAuNzYyNyAxNi45MDYgMTguMzIwMkwyMS45NDk0IDIzLjM2MzZMMjMuMzYzNiAyMS45NDk0TDE4LjMyMDIgMTYuOTA2Wk0xNi4yNDI2IDE2LjI0MjZDMTMuODk5NSAxOC41ODU4IDEwLjEwMDUgMTguNTg1OCA3Ljc1NzM2IDE2LjI0MjZDNS40MTQyMSAxMy44OTk1IDUuNDE0MjEgMTAuMTAwNSA3Ljc1NzM2IDcuNzU3MzZDMTAuMTAwNSA1LjQxNDIxIDEzLjg5OTUgNS40MTQyMSAxNi4yNDI2IDcuNzU3MzZDMTguNTg1OCAxMC4xMDA1IDE4LjU4NTggMTMuODk5NSAxNi4yNDI2IDE2LjI0MjZaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 46817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1maWx0ZXI8L3RpdGxlPiAtLT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTI1NTEuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+DQogICAgICAgICAgICA8ZyBpZD0iYXBwbGljYXRpb24taWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMjM0Ni4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtZmlsdGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTIuMDAwMDAwLCAyMDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAyLjAwMDAwMCkiIGlkPSJJY29uIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDAgTDAsMS45NTE3MTE0NCBMOS4wNTQ2NDk2LDExLjY2NjY2NjcgTDkuMDU0NjQ5NiwyMCBMMTAuOTg2NDg3OSwxOC41NTY0MDI0IEwxMC45ODY0ODc5LDExLjY2NjY2NjcgTDIwLDEuOTUxNzExNDQgTDIwLDAgTDAsMCBaIE0zLjQ0NzI3ODExLDMgTDE2LjYxNDY0NTQsMyBMMTAuMDE0NTA0MiwxMCBMMy40NDcyNzgxMSwzIFoiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==");

/***/ }),

/***/ 29859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 93000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

/***/ }),

/***/ 86865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC");

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