"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["40607"], {
"10693": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_mssql_database_size_mdx_08f_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-mssql-database-size-mdx-08f.json
var site_docs_mssql_database_size_mdx_08f_namespaceObject = JSON.parse('{"id":"mssql/database-size","title":"데이터베이스 사이즈","description":"SQL Server 데이터베이스별 테이블의 사이즈를 집계하여 추이 정보를 차트로 제공합니다.","source":"@site/docs/mssql/database-size.mdx","sourceDirName":"mssql","slug":"/mssql/database-size","permalink":"/mssql/database-size","draft":false,"unlisted":false,"editUrl":"undefined/docs/mssql/database-size.mdx","tags":[],"version":"current","frontMatter":{"id":"database-size","title":"데이터베이스 사이즈","description":"SQL Server 데이터베이스별 테이블의 사이즈를 집계하여 추이 정보를 차트로 제공합니다.","keywords":["SQL Server","데이터베이스","데이터베이스 사이즈"],"isTranslationMissing":false},"sidebar":"mssqlSidebar","previous":{"title":"프로시저 통계","permalink":"/mssql/procedure-stat"},"next":{"title":"보고서","permalink":"/mssql/report-intro"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/mssql/database-size.mdx


const frontMatter = {
	id: 'database-size',
	title: '데이터베이스 사이즈',
	description: 'SQL Server 데이터베이스별 테이블의 사이즈를 집계하여 추이 정보를 차트로 제공합니다.',
	keywords: [
		'SQL Server',
		'데이터베이스',
		'데이터베이스 사이즈'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "기본 화면 안내",
  "id": "기본-화면-안내",
  "level": 2
}, {
  "value": "컬럼 항목 안내",
  "id": "컬럼-항목-안내",
  "level": 3
}, {
  "value": "오브젝트 상세 정보 조회하기",
  "id": "오브젝트-상세-정보-조회하기",
  "level": 3
}, {
  "value": "컬럼 항목 안내",
  "id": "컬럼-항목-안내-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        sid: "side_dbSize",
        className: "uitext"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "데이터베이스별 테이블의 사이즈를 집계하여 추이 정보를 차트로 제공합니다. 데이터베이스의 용량이 증가하는 추세를 식별하여 관리할 수 있습니다. 용량이 빠르게 증가할 경우를 미리 파악해 대비할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "데이터베이스 사이즈는 성능에도 큰 영향을 미칠 수 있습니다. 사이즈의 증가로 쿼리의 실행 시간이 늘어날 수 있기 때문에 성능 문제 해결을 준비할 수 있습니다. 잘못된 쿼리나 데이터베이스의 구조 문제로 사이즈가 증가할 수 있는 문제를 미리 파악하고 예방하는 것도 필요합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "데이터베이스 사이즈의 추이를 통해 사용량 패턴 및 데이터 성장을 이해할 수 있습니다. 미래 용량 요구 사항을 예측하고 조치를 취할 수 있습니다. 이러한 변화를 모니터링하는 것은 리소스 및 비용을 최적화하는데 도움이 됩니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "기본-화면-안내",
        children: "기본 화면 안내"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "db-database-size-mssql.png",
        desc: "Database size"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "time",
              className: "uitext"
            }), "에서 조회하고 싶은 시간을 설정하세요. 녹색 버튼을 선택해 조회 시간을 선택할 수도 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "instance",
              className: "uitext"
            }), "에서 조회하려는 대상을 선택하세요."]
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
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "조회 시간은 최대 62일까지 설정할 수 있습니다. 3일 이상 조회할 경우 그래프에는 1일 평균으로 표시됩니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "임의의 날짜와 시간을 조회하려면 시계 표시 부분을 선택하세요. 날짜와 시간 텍스트 영역을 클릭하면 날짜와 시간을 선택할 수 있는 옵션이 나타납니다."
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "TTL06025",
        children: (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06025"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "조회한 시간 동안 데이터베이스의 저장 용량 변화를 그래프로 표시합니다. 이를 통해 데이터베이스 크기의 증가 또는 감소 추세를 한눈에 파악할 수 있습니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "특정 데이터베이스의 저장 용량 증가 추세를 확인하여 데이터 증가 패턴을 예측할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "여러 데이터베이스의 저장 용량 변화를 비교하여, 저장소를 가장 많이 소비하는 데이터베이스를 식별할 수 있습니다."
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "db-database-size-select-db-mssql.png",
        desc: "Database size"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "차트에서 각 데이터베이스의 크기를 색상으로 구분하여 표시하며, 마우스를 차트 위로 오버한 상태에서 좌우로 이동하세요. 특정 시점의 각 데이터베이스 크기를 툴팁을 통해 상세히 확인할 수 있습니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "시간 축"
            }), "(X 축): 데이터베이스 저장 공간 변화가 기록된 시간입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "용량 축"
            }), "(Y축): 데이터베이스의 총 크기(MiB 단위)입니다. 시간에 따라 데이터베이스가 차지하는 용량의 변화를 시각적으로 표시합니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "TTL06026",
        children: (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06026"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "데이터베이스 및 파일 그룹의 저장 용량과 사용 현황을 세부적으로 확인할 수 있습니다. 데이터베이스의 파일 크기, 사용량, 최대 크기 등을 통해 저장 공간의 효율성을 분석하고, 용량 부족 시 사전 조치를 취할 수 있습니다."
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "db-database-size-details-db-mssql.png",
        desc: "Database size"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "각 데이터베이스와 파일 그룹의 사용량을 트리 구조로 확장하여 확인할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "동일 데이터베이스의 다른 시간대 사용량 변화를 비교하여 데이터 증가량을 분석할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(UI, {
              children: "USAGE"
            }), " 값이 높은 데이터베이스 또는 파일 그룹을 식별하여 저장 용량 부족 문제를 사전에 예방할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "컬럼-항목-안내",
        children: "컬럼 항목 안내"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06026",
          className: "uitext"
        }), " 섹션의 각 컬럼에 대한 자세한 내용은 다음을 참조하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "DB NAME/FILE GROUP"
              })
            }), ": 데이터베이스 이름 및 해당 데이터베이스의 파일 그룹 이름입니다. 각 데이터베이스와 파일 그룹의 구조를 트리 형태로 확장하거나 축소할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "MAX SIZE"
              })
            }), ": 데이터베이스 또는 파일 그룹의 설정된 최대 크기입니다. ", (0,jsx_runtime.jsx)(UI, {
              children: "UNLIMITED"
            }), "는 크기 제한이 없는 경우를 의미합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SIZE"
              })
            }), ": 현재 데이터베이스 또는 파일 그룹의 총 크기를 나타냅니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "USED"
              })
            }), ": 실제 사용 중인 저장 공간 크기입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "USAGE"
              })
            }), ": 사용률을 백분율(%)로 표시합니다. 데이터베이스 크기 대비 사용 중인 용량의 비율로, 사용률이 높은 경우 추가 용량 확보를 검토하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "CHANGED AMOUNT"
              })
            }), ": 조회 시간 범위 동안 사용량의 변화를 나타냅니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "TTL06572",
        children: (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06572"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06026",
          className: "uitext"
        }), " 섹션에서 데이터베이스를 선택하면 해당 데이터베이스 내의 사이즈 TOP 50에 해당하는 테이블별 사이즈를 목록으로 확인할 수 있습니다. 저장 공간을 가장 많이 사용하는 상위 50개의 테이블에 대한 정보를 제공합니다. 이를 통해 대규모 데이터를 보유한 테이블을 식별하고 최적화할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "db-database-size-top50-mssql.png",
        desc: "Database size"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "가장 많은 저장 공간을 사용하는 테이블을 빠르게 식별하여, 데이터 구조 최적화나 저장소 관리를 수행할 수 있습니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(UI, {
              children: "UNUSED SPACE SIZE"
            }), " 값을 확인하여 불필요하게 많은 여유 공간을 차지하는 테이블을 파악할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "각 테이블의 행 수를 비교하여, 데이터량이 비정상적으로 많은 테이블을 식별하고 추가 분석 및 튜닝 작업을 수행할 수 있습니다."
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06572",
            className: "uitext"
          }), " 섹션에서 테이블 컬럼의 순서를 변경하거나 특정 컬럼을 숨기려면 오른쪽 상단에 ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "컬럼 아이콘",
            src: (__webpack_require__(3195)/* ["default"] */.Z) + "",
            width: "24",
            height: "24"
          }), " 버튼을 선택하세요. 컬럼 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "instance-monitoring#change-column",
            children: "다음 문서"
          }), "를 참조하세요."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "오브젝트-상세-정보-조회하기",
        children: "오브젝트 상세 정보 조회하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(UI, {
          children: "TABLENAME"
        }), " 컬럼 항목을 선택하면 해당 테이블의 오브젝트 상세 정보를 확인할 수 있는 ", (0,jsx_runtime.jsx)(UI, {
          children: "Object Detail"
        }), " 창이 열립니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(UI, {
          children: "Object Detail"
        }), " 기능을 이용하려면 SQL Server에서 사용자에게 적절한 오브젝트 조회 권한을 부여해야 합니다. 다음 명령어를 실행하여 권한을 설정할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-sql",
          children: "grant view any definition to {DB_User};\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "컬럼-항목-안내-1",
        children: "컬럼 항목 안내"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06572",
          className: "uitext"
        }), " 섹션의 각 컬럼에 대한 자세한 내용은 다음을 참조하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "DB"
              })
            }), ": 테이블이 속한 데이터베이스의 이름입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "FILEGROUP"
              })
            }), ": 해당 테이블이 저장된 파일 그룹의 이름입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "SCHEMANAME"
              })
            }), ": 테이블이 속한 스키마의 이름입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TABLENAME"
              })
            }), ": 테이블의 이름입니다. 테이블 이름을 클릭하면 오브젝트의 상세 정보를 확인할 수 있는 ", (0,jsx_runtime.jsx)(UI, {
              children: "Object Detail"
            }), " 창이 표시됩니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "TOTAL SPACE SIZE"
              })
            }), ": 테이블이 사용하는 총 저장 공간의 크기(MiB)입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "USED SPACE SIZE"
              })
            }), ": 테이블에서 실제로 사용 중인 공간의 크기(MiB)입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "UNUSED SPACE SIZE"
              })
            }), ": 테이블에서 사용하지 않는 여유 공간의 크기(MiB)입니다. 이 값이 크면 테이블 구조를 최적화하거나 데이터를 정리할 필요가 있을 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "ROWS"
              })
            }), ": 테이블에 저장된 데이터 행(Row)의 개수입니다."]
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
"3195": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtY29sdW1uPC90aXRsZT4gLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Mi4wMDAwMDAsIC0zMDMxLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iYXBwbGljYXRpb24taWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMjM0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1jb2x1bW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4wMDAwMDAsIDY4NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgNC4wMDAwMDApIiBpZD0iU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwwIEwwLDE2IEwyMCwxNiBMMjAsMCBMMCwwIFogTTEyLDIgTDEyLDE0IEw4LDE0IEw4LDIgTDEyLDIgWiBNMiwyIEw2LDIgTDYsMTQgTDIsMTQgTDIsMiBaIE0xOCwxNCBMMTQsMTQgTDE0LDIgTDE4LDIgTDE4LDE0IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

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