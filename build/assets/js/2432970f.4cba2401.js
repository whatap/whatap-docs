"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[99292],{

/***/ 16114:
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
  "value": "기본 화면 안내",
  "id": "기본-화면-안내",
  "level": 2
}, {
  "value": "시간별 변화량 확인하기",
  "id": "시간별-변화량-확인하기",
  "level": 2
}, {
  "value": "테이블별 사이즈 확인하기",
  "id": "테이블별-사이즈-확인하기",
  "level": 2
}, {
  "value": "조회 데이터 다운로드하기",
  "id": "조회-데이터-다운로드하기",
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
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_reportStat",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_dbSize",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "데이터베이스별 테이블의 사이즈를 집계하여 추이 정보를 차트로 제공합니다. 데이터베이스의 용량이 증가하는 추세를 식별하여 관리할 수 있습니다. 용량이 빠르게 증가할 경우를 미리 파악해 대비할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "데이터베이스 사이즈는 성능에도 큰 영향을 미칠 수 있습니다. 사이즈의 증가로 쿼리의 실행 시간이 늘어날 수 있기 때문에 성능 문제 해결을 준비할 수 있습니다. 잘못된 쿼리나 데이터베이스의 구조 문제로 사이즈가 증가할 수 있는 문제를 미리 파악하고 예방하는 것도 필요합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "데이터베이스 사이즈의 추이를 통해 사용량 패턴 및 데이터 성장을 이해할 수 있습니다. 미래 용량 요구 사항을 예측하고 조치를 취할 수 있습니다. 이러한 변화를 모니터링하는 것은 리소스 및 비용을 최적화하는데 도움이 됩니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
      product: "mysql",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["MySQL의 데이터베이스 사이즈 정보는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "information_schema.tables"
        }), "에서 조회하며 모니터링 계정에게 테이블 조회 권한이 있어야 집계됩니다. 다음과 같이 권한 설정이 필요합니다."]
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
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "performance_schema"
              }), "의 사이즈는 수집하지 않습니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "수집 주기는 1시간에 1번씩 수집합니다."
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
      product: "postgresql",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["전체 데이터베이스 사이즈는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "pg_database_size"
        }), " 함수로 조회하며 모니터링 계정에 connect 권한 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "pg_read_all_stats"
        }), " 권한이 있어야 합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "template database"
        }), "는 수집에서 제외됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["개별 테이블 사이즈는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "pg_relation_size"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "pg_indexes_size"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "pg_total_relation_size"
        }), " 함수로 조회하며 해당 스키마의 조회 권한이 필요합니다."]
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
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "sys"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "information_schema"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "pg_toast"
              }), " 스키마의 사이즈는 수집하지 않습니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "수집 주기는 1시간에 1번씩 수집합니다."
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "기본-화면-안내",
        children: "기본 화면 안내"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
        img: "db-database-size.png",
        desc: "데이터베이스 사이즈"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "time",
              className: "uitext"
            }), "에서 조회하고 싶은 시간을 설정하세요. 녹색 버튼을 선택해 조회 시간을 선택할 수도 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "instance",
              className: "uitext"
            }), "에서 조회하려는 대상을 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "검색 아이콘",
              src: (__webpack_require__(305)/* ["default"] */ .A) + "",
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
              children: "조회 시간은 최대 62일까지 설정할 수 있습니다. 3일 이상 조회할 경우 그래프에는 1일 평균으로 표시됩니다."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "임의의 날짜와 시간을 조회하려면 시계 표시 부분을 선택하세요. 날짜와 시간 텍스트 영역을 클릭하면 날짜와 시간을 선택할 수 있는 옵션이 나타납니다."
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "시간별-변화량-확인하기",
        children: "시간별 변화량 확인하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06025",
          className: "uitext"
        }), "에서 특정 시간의 그래프 바를 선택하면 시작 시간부터 선택한 시간까지의 데이터베이스 사이즈 추이와 변화량을 리스트 형태로 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
        img: "db-database-size-select-db.png",
        desc: "데이터베이스 사이즈"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "테이블별-사이즈-확인하기",
        children: "테이블별 사이즈 확인하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06026",
          className: "uitext"
        }), "에서 데이터베이스를 선택하면 해당 데이터베이스 내의 사이즈 TOP 50에 해당하는 테이블별 사이즈를 목록으로 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
        img: "db-database-size-top50.png",
        desc: "데이터베이스 사이즈"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        product: "mysql",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["기본적으로 테이블별 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "DATA SIZE"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "INDEX SIZE"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "ROWS"
          }), "를 표시합니다. 이는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "information_schema.tables"
          }), "의 정보로 실제 사이즈와 차이가 있을 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "information_schema.innodb_tablespaces"
          }), "의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "FILE SIZE"
          }), "를 함께 확인하려면 DBX 에이전트에 다음 옵션을 설정하세요. 이 사이즈는 실제 사이즈와 유사합니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='whatap.conf'",
            children: "table_filesize=true\n"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "note",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["모니터링 계정에 조회 권한이 있는 테이블을 대상으로 합니다. 모니터링용 계정 생성에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "install-agent#uid",
              children: "다음 문서"
            }), "를 참조하세요."]
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
        product: "postgresql,mysql",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["테이블별 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "DATA SIZE"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "INDEX SIZE"
          }), "를 표시합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL06572",
            className: "uitext"
          }), " 섹션의 테이블 목록에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "uitext",
            children: "TABLENAME"
          }), " 컬럼 항목을 선택하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "column"
          }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "index"
          }), " 구성을 확인할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Object detail"
            })
          }), " 창이 나타납니다."]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "db-database-size-objectdetail-postgresql.png",
          desc: "Object detail"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
          type: "note",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["이 기능은 DBX 에이전트 1.6.15 버전 이상에서 지원합니다. 데이터베이스 권한과 관련한 설정은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "install-agent#uid",
              children: "다음 문서"
            }), "를 참조하세요."]
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "조회-데이터-다운로드하기",
        children: "조회 데이터 다운로드하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["조회한 데이터를 CSV 형식의 파일로 다운로드할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "다운로드 아이콘",
          src: (__webpack_require__(36966)/* ["default"] */ .A) + "",
          width: "49",
          height: "24"
        }), " 버튼을 선택한 다음 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06026",
          className: "uitext"
        }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL06572",
          className: "uitext"
        }), "을 선택하세요."]
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

/***/ 42035:
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
/* harmony import */ var _common_items_db_databasesize_new_feature_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16114);


const frontMatter = {
	id: 'database-size',
	title: '데이터베이스 사이즈',
	description: 'MongoDB 데이터베이스별 테이블의 사이즈를 집계하여 추이 정보를 차트로 제공합니다.',
	tags: [
		'MongoDB',
		'데이터베이스',
		'데이터베이스 사이즈'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "mongodb/database-size",
  "title": "데이터베이스 사이즈",
  "description": "MongoDB 데이터베이스별 테이블의 사이즈를 집계하여 추이 정보를 차트로 제공합니다.",
  "source": "@site/docs/mongodb/database-size.mdx",
  "sourceDirName": "mongodb",
  "slug": "/mongodb/database-size",
  "permalink": "/mongodb/database-size",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/mongodb/database-size.mdx",
  "tags": [
    {
      "inline": true,
      "label": "MongoDB",
      "permalink": "/tags/mongo-db"
    },
    {
      "inline": true,
      "label": "데이터베이스",
      "permalink": "/tags/데이터베이스"
    },
    {
      "inline": true,
      "label": "데이터베이스 사이즈",
      "permalink": "/tags/데이터베이스-사이즈"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "database-size",
    "title": "데이터베이스 사이즈",
    "description": "MongoDB 데이터베이스별 테이블의 사이즈를 집계하여 추이 정보를 차트로 제공합니다.",
    "tags": [
      "MongoDB",
      "데이터베이스",
      "데이터베이스 사이즈"
    ]
  },
  "sidebar": "mongodbSidebar",
  "previous": {
    "title": "메트릭스 이상 탐지",
    "permalink": "/mongodb/metrics-detect-anormal"
  },
  "next": {
    "title": "보고서",
    "permalink": "/mongodb/report-intro"
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