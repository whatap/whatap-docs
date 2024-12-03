"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["37898"], {
"28808": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "사용하기 전에",
  "id": "사용하기-전에",
  "level": 2
}, {
  "value": "DB 권한 설정",
  "id": "db-권한-설정",
  "level": 3
}, {
  "value": "에이전트 설정",
  "id": "에이전트-설정",
  "level": 3
}, {
  "value": "기본 화면 안내",
  "id": "기본-화면-안내",
  "level": 2
}, {
  "value": "테이블스페이스 사이즈 변화 확인하기",
  "id": "table_space",
  "level": 2
}, {
  "value": "테이블스페이스 사이즈 상세 확인하기",
  "id": "table_space_detail",
  "level": 2
}, {
  "value": " TABLESPACE TYPE",
  "id": "-tablespace-type",
  "level": 3
}, {
  "value": " TABLESPACE",
  "id": "-tablespace",
  "level": 3
}, {
  "value": " DATAFILE",
  "id": "-datafile",
  "level": 3
}, {
  "value": "세그먼트 사이즈 확인하기",
  "id": "TTL08164",
  "level": 2
}, {
  "value": "세그먼트 사이즈 확인하기",
  "id": "checkSegmentSize",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, ImgLang, InDoc, ProdImg, UI, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  if (!UI) _missingMdxReference("UI", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_reportStat",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_tableSpace",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "데이터베이스 테이블스페이스의 사용 현황을 모니터링하고 관리할 수 있는 메뉴입니다. 이 메뉴는 테이블스페이스의 전체 크기와 사용량을 시각적으로 제공하며, 세부적인 사용 내역을 확인할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "테이블스페이스의 크기와 사용량 변화를 시간대별로 시각적으로 확인할 수 있습니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "각 테이블스페이스의 전체 크기, 사용 크기, 사용 비율을 상세히 제공합니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "altibase,tibero",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "상위 50개의 세그먼트 크기를 확인할 수 있습니다."
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "테이블스페이스의 사용 현황을 실시간으로 모니터링함으로써 사용량을 확인하고 적절한 용량 관리를 할 수 있습니다. 사용량이 높은 테이블스페이스와 세그먼트를 추적해 용량 관리와 성능 최적화를 위한 조치를 취하세요. 또한 테이블스페이스의 과도한 사용을 사전에 감지하고 대응할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Xclude, {
      product: "altibase,tibero",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
        className: "remark-sectionize-h2",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
          id: "사용하기-전에",
          children: "사용하기 전에"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "테이블스페이스 사이즈 데이터를 수집하기 위해서는 데이터베이스 권한 설정과 에이전트 옵션 설정이 필요합니다. 세그먼트 사이즈 데이터는 하루에 한 번 수집하며, 다음과 같이 설정을 완료해야 합니다."
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "db-권한-설정",
          children: "DB 권한 설정"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "세그먼트 사이즈 데이터를 수집하려면 모니터링 유저에게 적절한 데이터베이스 권한을 부여해야 합니다. 다음 SQL 명령어를 사용하여 권한을 설정하세요."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-sql",
            metastring: "title=\"SQL\"",
            children: "grant select any dictionary to monitoring_user;\n-- or --\ngrant select on dba_segments to monitoring_user;\n"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "에이전트-설정",
          children: "에이전트 설정"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "에이전트 옵션을 통해 세그먼트 사이즈 데이터 수집 기준을 설정할 수 있습니다. 기본 설정은 10MB 이상의 세그먼트를 매일 새벽 5시에 수집하는 것입니다."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "segments_min_size=10\nsegments_hour=5\n"
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "기본-화면-안내",
        children: "기본 화면 안내"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
        product: "altibase",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
          img: "db-stat-table-space.png",
          desc: "Tablespace size"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        product: "altibase",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Altibase 모니터링에서는 다른 DBMS와 달리 메모리 테이블스페이스를 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_tableSpace",
            className: "uitext"
          }), " 메뉴에서는 디스크와 메모리 테이블스페이스의 사용량과 추이를 확인할 수 있습니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "tip",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "메모리 테이블스페이스는 디스크보다 훨씬 빠른 데이터 접근 속도를 제공합니다. 메모리 테이블스페이스의 사용량을 모니터링함으로써 데이터가 메모리에 적절히 로드되고 있는지, 메모리 자원이 효율적으로 사용되고 있는지를 확인할 수 있습니다."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "디스크와 메모리 테이블스페이스의 사용량을 동시에 모니터링하면 각각의 자원이 어떻게 사용되고 있는지 파악할 수 있습니다. 이를 통해 메모리와 디스크 자원의 균형을 맞추고 필요한 경우 적절한 리소스 조정을 통해 성능 저하를 방지할 수 있습니다."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "사용량의 추이를 분석하면 메모리나 디스크 테이블스페이스의 증설이 필요한 시점을 예측할 수 있습니다. 이를 통해 자원 고갈로 인한 성능 문제를 사전에 방지할 수 있고, 적절한 확장 계획을 수립할 수 있습니다."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "메모리 테이블스페이스와 디스크 테이블스페이스 간의 사용량을 비교함으로써 특정 워크로드가 과도하게 디스크나 메모리에 집중되지 않도록 로드 분산을 최적화할 수 있습니다."
              }), "\n"]
            }), "\n"]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "디스크(Disk) 테이블스페이스"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
              img: "db-stat-table-space-disk-altibase.png",
              desc: "Tablespace size"
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "메모리(Memory) 테이블스페이스"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
              img: "db-stat-table-space-mem-altibase.png",
              desc: "Tablespace size"
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "기본 사용법은 다음과 같습니다."
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "time",
              className: "uitext"
            }), "에서 분석할 기간을 설정하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "instance",
              className: "uitext"
            }), "에서 분석할 데이터베이스 인스턴스를 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "검색 아이콘",
              src: (__webpack_require__(60396)/* ["default"] */.Z) + "",
              width: "35",
              height: "29"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "조회 시간은 최대 62일까지 설정할 수 있습니다. 3일 이상 조회할 경우 그래프에는 1일 평균으로 표시됩니다"
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "조회 시간은 최대 3주까지 선택할 수 있습니다. 임의의 날짜와 시간을 조회하려면 시계 표시 부분을 선택하세요. 날짜와 시간 텍스트 영역을 클릭하면 날짜와 시간을 선택할 수 있는 옵션이 나타납니다."
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "table_space",
        children: "테이블스페이스 사이즈 변화 확인하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "table_space",
          className: "uitext"
        }), " 섹션에서는 시간대별로 테이블스페이스의 전체 크기와 사용량 변화를 시각적으로 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "oracle,oracle-pro",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "db-stat-table-space-check-trend-oracle-pro.png",
          desc: "Tablespace size"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "tibero",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "db-stat-table-space-check-trend-tibero.png",
          desc: "Tablespace size"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "altibase",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "db-stat-table-space-check-trend-altibase.png",
          desc: "Tablespace size"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "각 색상은 개별 테이블스페이스를 나타냅니다. 차트에서 특정 시간대의 데이터를 확인하려면 마우스를 차트 위로 오버한 상태에서 이동하세요. 해당 시간대의 상세 정보를 툴팁으로 확인할 수 있습니다."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "table_space_detail",
        children: "테이블스페이스 사이즈 상세 확인하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "table_space_detail",
          className: "uitext"
        }), " 섹션에서는 각 테이블스페이스의 상세 정보를 제공합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "oracle,oracle-pro",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "db-stat-table-space-size-details-oracle-pro.png",
          desc: "Tablespace size"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "tibero",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "db-stat-table-space-size-details-tibero.png",
          desc: "Tablespace size"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        product: "oracle,oracle-pro,tibero",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["최초 조회한 시간과 현재 시간을 비교하여 각 테이블스페이스의 사용량 변화를 확인할 수 있습니다. 테이블스페이스의 세부 내역을 확인하려면 테이블스페이스 이름 옆의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "화살표 아이콘",
            src: (__webpack_require__(74570)/* ["default"] */.Z) + "",
            width: "24",
            height: "24"
          }), " 버튼을 선택하세요."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "table_space_total",
                className: "uitext"
              }), ": 테이블스페이스의 전체 크기입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "table_space_used",
                className: "uitext"
              }), ": 현재 사용 중인 크기입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "table_space_usage",
                className: "uitext"
              }), ": 전체 크기 대비 사용 비율입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "table_space_changed_amount",
                className: "uitext"
              }), ": 최초 조회한 시간 대비 현재 시간의 사용량 변화입니다."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        product: "altibase",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "db-stat-table-space-size-details-altibase.png",
          desc: "Tablespace size"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["최초 조회한 시간과 현재 시간을 비교하여 각 테이블스페이스의 사용량 변화를 확인할 수 있습니다. 테이블스페이스의 세부 내역을 확인하려면 테이블스페이스 이름 옆의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "화살표 아이콘",
            src: (__webpack_require__(74570)/* ["default"] */.Z) + "",
            width: "24",
            height: "24"
          }), " 버튼을 선택하세요. Altibase에서 제공하는 테이블스페이스 및 데이터 파일 사이즈 정보는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "MAX"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "ALLOC"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "CURR"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "USED"
          }), " 등 다양한 값을 포함합니다. 화면에 표시된 값은 이러한 항목을 기반으로 구성했습니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
          id: "-tablespace-type",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            src: (__webpack_require__(12979)/* ["default"] */.Z) + "",
            width: "35",
            height: "35"
          }), " TABLESPACE TYPE"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["DISK, MEMORY, TEMP, UNDO 등 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "V$TABLESPACES.TYPE"
          }), " 별로 테이블스페이스의 사이즈를 확인할 수 있습니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                children: "TOTAL"
              }), ": 테이블스페이스의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "TOTAL"
              }), " 크기의 합계입니다"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                children: "USED"
              }), ": 테이블스페이스의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "USED"
              }), " 크기의 합계입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                children: "USAGE"
              }), ": (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "USED"
              }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "TOTAL"
              }), ") 🞨 100으로 계산된 사용 비율입니다."]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
          id: "-tablespace",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            src: (__webpack_require__(39701)/* ["default"] */.Z) + "",
            width: "35",
            height: "35"
          }), " TABLESPACE"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "하나의 테이블스페이스는 여러 개의 데이터 파일로 구성됩니다."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                children: "TOTAL"
              }), ": 데이터 파일의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "TOTAL"
              }), " 크기(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "V$DATAFILES.CURRSIZE"
              }), " 🞨 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "PAGESIZE"
              }), ")의 합계입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                children: "USED"
              }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "X$SEGMENT.TOTAL_USED_SIZE"
              }), "를 기반으로 계산된 사용된 크기입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                children: "USAGE"
              }), ": (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "USED"
              }), " / ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "TOTAL"
              }), " ) 🞨 100으로 계산된 사용 비율입니다."]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
          id: "-datafile",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            src: (__webpack_require__(90604)/* ["default"] */.Z) + "",
            width: "35",
            height: "35"
          }), " DATAFILE"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
            children: "TOTAL"
          }), ": 데이터 파일의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "TOTAL"
          }), " 크기(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "V$DATAFILES.CURRSIZE"
          }), " 🞨 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "PAGESIZE"
          }), ")의 합계입니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "note",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Altibase에서는 데이터 파일 단위의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "USED"
            }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "USAGE"
            }), " 정보를 제공하지 않습니다."]
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Xclude, {
        product: "altibase,tibero",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
          id: "TTL08164",
          children: "세그먼트 사이즈 확인하기"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL08164",
            className: "uitext"
          }), " 섹션에서는 상위 50개의 세그먼트 크기를 나열하여 세부 사용 내역을 제공합니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "db-stat-table-space-size-top50-oracle-pro.png",
          desc: "Tablespace size"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08165",
                className: "uitext"
              }), ": 세그먼트가 속한 컨테이너 이름입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08166",
                className: "uitext"
              }), ": 세그먼트가 속한 테이블스페이스 이름입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08167",
                className: "uitext"
              }), ": 세그먼트를 소유하고 있는 사용자 또는 스키마입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08168",
                className: "uitext"
              }), ": 세그먼트의 이름입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08169",
                className: "uitext"
              }), ": 세그먼트의 유형입니다. (예: TABLE, INDEX)"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL08177",
                className: "uitext"
              }), ": 해당하는 경우 세그먼트의 파티션 이름입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "table_space_size",
                className: "uitext"
              }), ": 세그먼트의 크기입니다."]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        product: "altibase",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
          id: "checkSegmentSize",
          children: "세그먼트 사이즈 확인하기"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL08164",
            className: "uitext"
          }), "은 섹션 테이블스페이스 내에서 가장 많은 공간을 차지하는 상위 50개의 세그먼트 정보를 제공합니다. 이 정보를 통해 사용자는 특정 세그먼트가 얼마나 많은 공간을 사용하고 있는지 파악할 수 있습니다. 각 세그먼트는 다양한 속성을 기반으로 상세하게 표시됩니다. 이러한 정보를 통해 비정상적으로 큰 세그먼트를 식별하고, 필요 시 공간 최적화 작업을 수행할 수 있습니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "db-stat-table-space-size-top50-altibase.png",
          desc: "Segment size"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Tablespace Type"
                })
              }), ": 테이블스페이스의 유형입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Tablespace"
                })
              }), ": 해당 세그먼트가 속한 테이블스페이스의 이름입니다. 테이블스페이스는 데이터베이스에서 데이터를 저장하는 논리적인 공간입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Table"
                })
              }), ": 해당 세그먼트가 속한 테이블의 이름입니다. 이를 통해 어떤 테이블이 공간을 차지하고 있는지 식별할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "User"
                })
              }), ": 해당 세그먼트를 소유하고 있는 데이터베이스 사용자 계정의 이름입니다. 어떤 사용자가 해당 데이터를 관리하는지 파악할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Segment Type"
                })
              }), ": 세그먼트의 유형입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Partition"
                })
              }), ": 파티셔닝된 테이블이나 인덱스의 경우 해당 세그먼트가 어떤 파티션에 속하는지를 나타냅니다. 파티셔닝은 큰 테이블을 더 작은 단위로 나누어 관리하는 방법입니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "mbytes"
                })
              }), ": 해당 세그먼트가 차지하고 있는 메가바이트(MB) 단위의 공간 크기입니다. 이를 통해 각 세그먼트가 사용하고 있는 물리적 저장 공간의 양을 확인할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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



}),
"60372": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_oracle_pro_table_space_size_mdx_e2e_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-oracle-pro-table-space-size-mdx-e2e.json
var site_docs_oracle_pro_table_space_size_mdx_e2e_namespaceObject = JSON.parse('{"id":"oracle-pro/table-space-size","title":"테이블스페이스 사이즈","description":"각 테이블 스페이스별 최대 용량과 사용량을 시간의 흐름에 따라 조회할 수 있습니다.","source":"@site/docs/oracle-pro/table-space-size.mdx","sourceDirName":"oracle-pro","slug":"/oracle-pro/table-space-size","permalink":"/oracle-pro/table-space-size","draft":false,"unlisted":false,"editUrl":"undefined/docs/oracle-pro/table-space-size.mdx","tags":[],"version":"current","frontMatter":{"id":"table-space-size","title":"테이블스페이스 사이즈","description":"각 테이블 스페이스별 최대 용량과 사용량을 시간의 흐름에 따라 조회할 수 있습니다.","keywords":["Oracle Pro","데이터베이스","통계"],"isTranslationMissing":false},"sidebar":"dboracledmaSidebar","previous":{"title":"SQL 통계","permalink":"/oracle-pro/stat"},"next":{"title":"SGA 사이즈","permalink":"/oracle-pro/sga-size"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_db-tablespace-size.mdx
var _db_tablespace_size = __webpack_require__("28808");
;// CONCATENATED MODULE: ./docs/oracle-pro/table-space-size.mdx


const frontMatter = {
	id: 'table-space-size',
	title: '테이블스페이스 사이즈',
	description: '각 테이블 스페이스별 최대 용량과 사용량을 시간의 흐름에 따라 조회할 수 있습니다.',
	keywords: [
		'Oracle Pro',
		'데이터베이스',
		'통계'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*테이블 스페이스 사이즈 Oracle Pro, tibero*/



const toc = [..._db_tablespace_size/* toc */.d$];
function _createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", (0,jsx_runtime.jsx)(_db_tablespace_size/* default */.ZP, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
"74570": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzY1XzE5NDYpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjUgNkwxNi41IDEyTDguNSAxOEw4LjUgNloiIGZpbGw9IiM3NTc1NzUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF82NV8xOTQ2Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");

}),
"60396": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg==");

}),
"12979": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

}),
"39701": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

}),
"90604": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC");

}),
"50065": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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


}),

}]);