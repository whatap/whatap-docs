"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["55113"], {
"89444": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, ImgLang, InDoc, LinkImage, Title} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!LinkImage) _missingMdxReference("LinkImage", true);
  if (!Title) _missingMdxReference("Title", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title, {
      level: props.level,
      hashid: "filtering",
      children: "조회 결과 필터링하기"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title, {
      level: props.level + 1,
      children: "필터 조건 추가하기"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      pages: "stat",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "조회된 결과에서 SQL 텍스트 값 또는 에이전트 이름, DB 유저 이름 등을 기준으로 원하는 필터링할 수 있습니다."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
      pages: "analysis-sql",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "조회된 결과에서 다음 항목의 값을 기준으로 원하는 결과를 필터링할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "info",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "sql_id"
                })
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "sql_hash_value"
                })
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "after_plan_hash_value"
                })
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "before_plan_hash_value"
                })
              })
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "filter",
            className: "uitext"
          }), " 옵션에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LinkImage, {
            img: "ico-add.svg",
            className: "ico"
          }), " 버튼을 선택하세요."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
          pages: "stat",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "db-sql-filter-adding.png",
            desc: "조건 추가하기"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
          pages: "analysis-sql,job-info,backup-recovery-history,procedure-stat",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "db-analysis-sql-plan-change-filter-01.png",
            desc: "조건 추가하기"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL06740",
            className: "uitext"
          }), " 항목에서 원하는 필터링 기준을 선택하세요."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["선택한 항목의 값이 문자에 해당한다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "includes",
                className: "uitext"
              }), "(파란색), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "excludes",
                className: "uitext"
              }), "(빨간색) 조건을 선택할 수 있습니다."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
              pages: "stat",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
                img: "db-sql-filter-condition-color.png",
                desc: "example",
                multi: true
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
              pages: "analysis-sql",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
                img: "db-sql-analysis-filter-condition-color.png",
                desc: "example",
                multi: true
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["선택한 항목의 값이 숫자에 해당한다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "=="
              }), "(같음), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: ">="
              }), "(보다 크거나 같음), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "<="
              }), "(보다 작거나 같음) 조건을 선택할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "condition",
            className: "uitext"
          }), " 항목에서 조건을 선택하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "조건과 일치시킬 문자열 또는 숫자를 입력하세요."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "apply",
            className: "uitext"
          }), " 버튼을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["필터링 조건을 추가하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "bsm_button_add",
              className: "uitext"
            }), " 버튼을 선택한 다음 1 ~ 5의 과정을 반복하세요. 추가한 조건은 AND(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "&&"
            }), ") 조건으로 적용됩니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["조건 추가 중 일부 항목을 삭제하려면 필터 조건 오른쪽에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "삭제 아이콘",
              src: (__webpack_require__(10054)/* ["default"] */.Z) + "",
              width: "24",
              height: "24"
            }), " 버튼을 선택하세요. 전체 조건을 삭제하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "삭제 아이콘",
              src: (__webpack_require__(10054)/* ["default"] */.Z) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN06616",
              className: "uitext"
            }), " 버튼 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "filter",
              className: "uitext"
            }), " 옵션에 적용된 조건을 빠르게 삭제하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LinkImage, {
              img: "ico-remove.svg",
              className: "ico"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        pages: "stat",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "sqlText"
              }), "에 'WhaTap'이 포함된 경우 제외하도록 기본 설정되어 있습니다."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
              img: "db-sql-filter-default.png",
              desc: "WhaTap"
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title, {
      level: props.level + 1,
      children: "필터 조건 수정하기"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      pages: "stat",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "db-sql-filter-modify.png",
        desc: "필터 수정하기"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      pages: "analysis-sql,job-info,backup-recovery-history,procedure-stat",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "db-sql-analysis-filter-modify.png",
        desc: "필터 수정하기"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "filter",
        className: "uitext"
      }), " 옵션에 적용된 항목을 클릭하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "TTL06737",
        className: "uitext"
      }), " 창이 나타나면 원하는 항목을 수정하고 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "apply",
        className: "uitext"
      }), " 버튼을 선택하세요."]
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
"83797": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_mssql_procedure_stat_mdx_d88_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-mssql-procedure-stat-mdx-d88.json
var site_docs_mssql_procedure_stat_mdx_d88_namespaceObject = JSON.parse('{"id":"mssql/procedure-stat","title":"프로시저 통계","description":"SQL Server에 등록된 저장 프로시저(Stored Procedure)의 성능 관련 정보를 제공합니다.","source":"@site/docs/mssql/procedure-stat.mdx","sourceDirName":"mssql","slug":"/mssql/procedure-stat","permalink":"/mssql/procedure-stat","draft":false,"unlisted":false,"editUrl":"undefined/docs/mssql/procedure-stat.mdx","tags":[],"version":"current","frontMatter":{"id":"procedure-stat","title":"프로시저 통계","description":"SQL Server에 등록된 저장 프로시저(Stored Procedure)의 성능 관련 정보를 제공합니다.","keywords":["SQL Server","통계","프로시저 통계"],"isTranslationMissing":false},"sidebar":"mssqlSidebar","previous":{"title":"SQL 통계","permalink":"/mssql/stat"},"next":{"title":"데이터베이스 사이즈","permalink":"/mssql/database-size"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_db-sql-filter.mdx
var _db_sql_filter = __webpack_require__("89444");
;// CONCATENATED MODULE: ./docs/mssql/procedure-stat.mdx


const frontMatter = {
	id: 'procedure-stat',
	title: '프로시저 통계',
	description: 'SQL Server에 등록된 저장 프로시저(Stored Procedure)의 성능 관련 정보를 제공합니다.',
	keywords: [
		'SQL Server',
		'통계',
		'프로시저 통계'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*필터 조건추가하기*/



const toc = [{
  "value": "기본 사용 안내",
  "id": "기본-사용-안내",
  "level": 2
}, {
  "value": "섹션별 화면 안내",
  "id": "섹션별-화면-안내",
  "level": 2
}, {
  "value": "프로시저 상세 정보 확인하기",
  "id": "procedurestat",
  "level": 2
}, ..._db_sql_filter/* toc */.d$, {
  "value": "조회 결과 다운로드하기",
  "id": "조회-결과-다운로드하기",
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
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, ImgLang, UI} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!UI) _missingMdxReference("UI", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_reportStat",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_dbProcedureStat",
        className: "uitext"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SQL Server에 등록된 저장 프로시저(Stored Procedure)의 실행 횟수, 총 실행 시간, 논리적/물리적 읽기 및 쓰기와 같은 성능 관련 정보를 제공합니다. 이를 통해 저장 프로시저의 사용량과 성능을 모니터링하고 최적화가 필요한 프로시저를 식별할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "실행 횟수와 총 실행 시간을 분석하여 사용량이 많은 프로시저를 확인할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "논리적/물리적 읽기 데이터를 통해 I/O 성능 병목을 탐지하고 최적화 대상을 식별합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "프로시저 내부 쿼리의 실행 데이터를 확인하여, 자원을 많이 소비하는 쿼리를 식별할 수 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "총 실행 시간과 CPU 사용 시간을 비교하여 비효율적인 쿼리를 식별할 수 있습니다."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "저장 프로시저"
        }), "는 SQL Server에서 특정 작업을 수행하기 위해 미리 작성된 SQL 명령 집합입니다. 재사용 가능하며, 매개변수화된 동적 작업을 수행할 수 있어 코드 관리 및 성능 향상에 유리합니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://learn.microsoft.com/sql/relational-databases/stored-procedures/stored-procedures-database-engine?view=sql-server-ver16",
          children: "다음 링크"
        }), "를 참조하세요."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "기본-사용-안내",
        children: "기본 사용 안내"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "time",
              className: "uitext"
            }), "에서 데이터를 조회할 시간과 날짜를 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "instance",
              className: "uitext"
            }), "에서 데이터를 조회할 대상을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "검색 아이콘",
              src: (__webpack_require__(60396)/* ["default"] */.Z) + "",
              width: "35",
              height: "29"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(UI, {
              children: "Procedure Statistics"
            }), " 섹션에서 조회된 결과를 확인하고 ", (0,jsx_runtime.jsx)(UI, {
              children: "definition"
            }), " 컬럼 항목을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "db-procedure-stat-mssql.png",
            desc: "프로시저 통계",
            className: "width-800"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["선택한 프로시저에 대한 개별 쿼리 실행 정보가 ", (0,jsx_runtime.jsx)(UI, {
              children: "Query Statistics"
            }), " 섹션에 표시됩니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["원하는 결과가 표시될 수 있도록 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL07772",
                className: "uitext"
              }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL07773",
                className: "uitext"
              }), " 옵션을 설정할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(UI, {
                children: "Procedure Statistic"
              }), " 섹션의 목록에서 ", (0,jsx_runtime.jsx)(_components.img, {
                alt: "상세 아이콘",
                src: (__webpack_require__(56319)/* ["default"] */.Z) + "",
                width: "24",
                height: "24"
              }), " 버튼을 선택하면 해당 프로시저에 대한 상세 정보를 확인할 수 있는 ", (0,jsx_runtime.jsx)(UI, {
                children: "Procedure Detail"
              }), " 창이 나타납니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "#procedurestat",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(UI, {
                children: "defintion"
              }), " 컬럼 항목에 마우스를 오버하면 SQL 정의 코드를 미리보기할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "섹션별-화면-안내",
        children: "섹션별 화면 안내"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(UI, {
            children: "Procedure Statistics"
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "프로시저별 주요 통계 정보를 표시하는 영역으로, 실행 횟수, 총 실행 시간 등 프로시저의 전반적인 성능 데이터를 제공합니다. 실행 시간이 길거나 논리적/물리적 읽기가 많은 프로시저를 식별할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(UI, {
            children: "Query Statistics"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(UI, {
              children: "Procedure Statistics"
            }), " 섹션에서 특정 프로시저의 ", (0,jsx_runtime.jsx)(UI, {
              children: "definition"
            }), " 컬럼을 선택하면, 해당 프로시저에 대한 개별 쿼리 실행 정보가 표시됩니다. 쿼리 통계를 분석하여 반복적으로 실행되는 쿼리를 확인할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "db-procedure-stat-mssql.png",
            desc: "프로시저 통계"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(UI, {
              children: "query"
            }), " 컬럼 항목을 선택하면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL06224",
              className: "uitext"
            }), " 창을 확인할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "db-sql-details-mssql.png",
            desc: "SQL 상세"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06224",
            className: "uitext"
          }), " 창에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "stat#querydetails",
            children: "다음 문서"
          }), "를 참조하세요."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "procedurestat",
        children: "프로시저 상세 정보 확인하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(UI, {
          children: "Procedure Statistic"
        }), " 섹션의 목록에서 ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "상세 아이콘",
          src: (__webpack_require__(56319)/* ["default"] */.Z) + "",
          width: "24",
          height: "24"
        }), " 버튼을 선택하면 해당 프로시저에 대한 상세 정보를 확인할 수 있는 ", (0,jsx_runtime.jsx)(UI, {
          children: "Procedure Detail"
        }), " 창이 나타납니다."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "db-procedure-stat-details-mssql.png",
        desc: "Procedure Detail"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Procedure Info"
              })
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "논리적/물리적 읽기, 쓰기, 실행 횟수, 최대/최소 실행 시간 등 프로시저의 실행 성능 데이터를 포함한 상세 정볼를 확인할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Procedure Definition"
              })
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "해당 프로시저의 SQL 정의 코드를 확인할 수 있습니다."
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_db_sql_filter/* default */.ZP, {
        level: 2
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "조회-결과-다운로드하기",
        children: "조회 결과 다운로드하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["각 섹션별 조회 결과를 CSV 파일 형식으로 다운로드할 수 있습니다. 화면 오른쪽 상단의 ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "csv 아이콘",
          src: (__webpack_require__(67307)/* ["default"] */.Z) + "",
          width: "24",
          height: "25"
        }), " 버튼을 클릭한 후 ", (0,jsx_runtime.jsx)(UI, {
          children: "Procedure Statistics"
        }), " 또는 ", (0,jsx_runtime.jsx)(UI, {
          children: "Query Statistics"
        }), "를 선택하세요."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다운받은 CSV 파일의 이름 형식은 다음과 같습니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(UI, {
              children: "Procedure Statistics"
            }), ": ", (0,jsx_runtime.jsxs)(_components.em, {
              children: ["Procedure_Statistics_", (0,jsx_runtime.jsx)(_components.code, {
                children: "YYYYMMDD_HHMMSS"
              }), ".csv"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(UI, {
              children: "Query Statistics"
            }), ": ", (0,jsx_runtime.jsxs)(_components.em, {
              children: ["Query_Statistics_", (0,jsx_runtime.jsx)(_components.code, {
                children: "YYYYMMDD_HHMMSS"
              }), ".csv"]
            })]
          }), "\n"]
        }), "\n"]
      })]
    })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
"60396": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg==");

}),
"56319": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcGFnZXZpZXc8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjguMDAwMDAwLCAtMjcxMS4wMDAwMDApIiBmaWxsPSIjMjk2Y2YyIj4KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcGFnZXZpZXciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjAwMDAwMCwgMzY1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCA0LjAwMDAwMCkiIGlkPSJwYWdldmlldyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCwwIEMxOS4wMzUyOTQxLDAgMTkuODkzNDI1NiwwLjc5NzIzMTgzNCAxOS45OTA3OTk5LDEuODA4MTAwOTYgTDIwLDIgTDE5Ljk5OSw1LjMzMyBMMTcuOTk5LDUuMzMzIEwxOCwyIEwyLDIgTDIsMTQgTDEyLDE0IEwxMiwxNiBMMiwxNiBDMC45NjQ3MDU4ODIsMTYgMC4xMDY1NzQzOTQsMTUuMjAyNzY4MiAwLjAwOTIwMDA4MTQyLDE0LjE5MTg5OSBMLTUuMzI5MDcwNTJlLTE1LDE0IEwtNS4zMjkwNzA1MmUtMTUsMiBDLTUuMzI5MDcwNTJlLTE1LDAuOTY0NzA1ODgyIDAuNzk3MjMxODM0LDAuMTA2NTc0Mzk0IDEuODA4MTAwOTYsMC4wMDkyMDAwODE0MiBMMiwwIEwxOCwwIFogTTEzLjE2NjY2NjcsNCBDMTUuNjU2NjY2Nyw0IDE3LjY2NjY2NjcsNi4wMSAxNy42NjY2NjY3LDguNSBDMTcuNjY2NjY2Nyw5LjM4IDE3LjQwNjY2NjcsMTAuMTkgMTYuOTY2NjY2NywxMC44OSBMMTkuODc2NjY2NywxMy43OSBMMTguNDU2NjY2NywxNS4yMSBMMTUuNTQ2NjY2NywxMi4zIEMxNC44NTY2NjY3LDEyLjc0IDE0LjAzNjY2NjcsMTMgMTMuMTU2NjY2NywxMyBDMTAuNjc2NjY2NywxMyA4LjY2NjY2NjY3LDEwLjk5IDguNjY2NjY2NjcsOC41IEM4LjY2NjY2NjY3LDYuMDEgMTAuNjc2NjY2Nyw0IDEzLjE2NjY2NjcsNCBaIE0xMy4xNjY2NjY3LDYgQzExLjc4NjY2NjcsNiAxMC42NjY2NjY3LDcuMTIgMTAuNjY2NjY2Nyw4LjUgQzEwLjY2NjY2NjcsOS44OCAxMS43ODY2NjY3LDExIDEzLjE2NjY2NjcsMTEgQzE0LjU0NjY2NjcsMTEgMTUuNjY2NjY2Nyw5Ljg4IDE1LjY2NjY2NjcsOC41IEMxNS42NjY2NjY3LDcuMTIgMTQuNTQ2NjY2Nyw2IDEzLjE2NjY2NjcsNiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

}),
"67307": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI1cHgiIHZpZXdCb3g9IjAgMCAyNCAyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZG93bmxvYWQ8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODM2LjAwMDAwMCwgLTI3MTEuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+CiAgICAgICAgICAgIDxnIGlkPSJhcHBsaWNhdGlvbi1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAyMzQ2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLWRvd25sb2FkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTYuMDAwMDAwLCAzNjUuMDY3Mjg0KSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wMDAwMDAsIDIuMDAwMDAwKSIgaWQ9Ikljb24iPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIsNy45MzI3MTYxMiBMMTIsNC40MjcyOTU0OGUtMTQgTDYsNC40MjcyOTU0OGUtMTQgTDYsNy45MzI3MTYxMiBMMiw3LjkzMjcxNjEyIEw5LDE0LjkzMjcxNjEgTDE2LDcuOTMyNzE2MTIgTDEyLDcuOTMyNzE2MTIgWiBNMCwxNi45MzI3MTYxIEwwLDE4LjkzMjcxNjEgTDE4LDE4LjkzMjcxNjEgTDE4LDE2LjkzMjcxNjEgTDAsMTYuOTMyNzE2MSBMMCwxNi45MzI3MTYxIFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

}),
"10054": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwIDIySDRWNmgydjE0aDEyVjZoMnYxNnptMi0xOGgtNWwtMS4xNDMtMkg4LjE0M0w3IDRIMnYyaDIwVjR6IgogICAgZmlsbD0iIzc1NzU3NSIgLz4KICA8cGF0aCBkPSJNOSA4aDJ2MTBIOVY4ek0xMyA4aDJ2MTBoLTJWOHoiIGZpbGw9IiM3NTc1NzUiIC8+Cjwvc3ZnPg==");

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