"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[5866],{

/***/ 37235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ sga_size_contentTitle),
  "default": () => (/* binding */ sga_size_MDXContent),
  frontMatter: () => (/* binding */ sga_size_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ sga_size_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_db-sga-size.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "기본 사용 안내",
  "id": "기본-사용-안내",
  "level": 2
}, {
  "value": "모니터링 항목",
  "id": "모니터링-항목",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, InDoc, ProdImg} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_reportStat",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_sga",
        className: "uitext"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "서버 메모리 영역인 System Global Area(SGA) 요약 정보를 매 시간 저장하여 시간별 변화량을 모니터링할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "성능 최적화"
          }), ": SGA 내 여러 메모리 영역의 크기 및 사용률을 모니터링함으로써 성능 문제를 사전에 예방하고 메모리 자원을 최적으로 관리할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "병목 현상 감지"
          }), ": 각 메모리 영역에서 발생하는 병목 현상을 조기에 파악하여 시스템의 가용성과 안정성을 높일 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "리소스 관리"
          }), ": 메모리 자원의 적정 할당 여부를 확인하여 불필요한 메모리 사용을 줄이고 메모리 관련 자원을 효율적으로 배분할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "문제 해결"
          }), ": SGA 영역 중 어느 부분이 과도하게 사용되고 있는지 확인하여 성능 저하 원인을 신속히 해결할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "기본-사용-안내",
        children: "기본 사용 안내"
      }), (0,jsx_runtime.jsx)(ProdImg, {
        img: "db-stat-sga-size.png",
        alt: "SGA 사이즈"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "time",
              className: "uitext"
            }), " 에서 조회하고 싶은 시간을 설정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "인스턴스에서 추이 정보를 조회하려는 인스턴스 이름을 선택하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "검색 아이콘",
              src: (__webpack_require__(13732)/* ["default"] */ .A) + "",
              width: "35",
              height: "29"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "조회 시간은 최대 3주까지 선택할 수 있습니다. 임의의 날짜와 시간을 조회하려면 시계 표시 부분을 선택하세요. 날짜와 시간 텍스트 영역을 클릭하면 날짜와 시간을 선택할 수 있는 옵션이 나타납니다."
        })
      }), (0,jsx_runtime.jsxs)(InDoc, {
        product: "tibero",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "모니터링-항목",
          children: "모니터링 항목"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "다음 항목들을 지속적으로 모니터링하여 데이터베이스의 효율성을 높이고 장애 발생을 예방하세요."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "SHARED MEMORY"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "데이터베이스에서 여러 프로세스 간에 공유되는 메모리 영역입니다. 주요 데이터와 프로그램 코드가 저장되어 여러 프로세스가 동시에 접근할 수 있습니다. 데이터베이스가 사용 중인 메모리의 용량과 효율성을 파악할 수 있으며 메모리 부족 현상이나 병목 현상을 미리 방지할 수 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "FIXED MEMORY"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "데이터베이스가 부팅 시에 초기화되는 고정된 메모리 영역으로 데이터베이스 운영에 필요한 다양한 고정 구조체들이 위치합니다. FIXED MEMORY는 고정 크기로 설정되기 때문에 변동이 없으나 전체 메모리 사용량 중 어느 정도를 차지하는지 확인할 수 있습니다. 메모리 부족 문제 발생 시 고정된 메모리 영역을 확인해 보세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "SHARED POOL MEMORY"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "SQL과 PL/SQL 커서, 라이브러리 캐시, 데이터 딕셔너리 캐시 등을 포함한 메모리 영역입니다. 이 메모리는 SQL 재사용성과 관련해 중요한 역할을 합니다. 이 메모리를 모니터링하여 SQL 재사용률을 확인하고 메모리 부족으로 인해 SQL 하드 파싱이 증가하는지 확인할 수 있습니다. 성능 저하를 예방하는 데 도움이 됩니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "SHARED POOL ALLOCATORS (LC)"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "라이브러리 캐시(Library Cache)에서 사용하는 메모리 할당량입니다. 라이브러리 캐시는 실행 계획과 SQL 문 등을 캐싱하여 성능을 향상시킵니다. 실행 계획 캐싱이 효율적으로 이뤄지고 있는지, 또는 불필요한 메모리 사용으로 성능이 저하되고 있는지를 파악하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "SHARED POOL ALLOCATORS (DD)"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "데이터 딕셔너리 캐시(Dictionary Cache)에서 사용하는 메모리 할당량입니다. 데이터베이스 객체 정보를 저장합니다. 데이터 딕셔너리 캐시를 적절한 크기로 유지하면 데이터베이스 객체에 대한 정보를 빠르게 조회할 수 있어 성능을 향상시킬 수 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "SHARED POOL ALLOCATORS (SLAB)"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "메모리 슬랩(SLAB)은 메모리 할당을 더욱 효율적으로 관리하기 위해 사용하는 공간입니다. SLAB 메모리를 모니터링하여 메모리 관리의 효율성을 높일 수 있습니다. 불필요한 메모리 사용이나 리소스 낭비를 줄여 보세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "SHARED POOL ALLOCATORS (MISC)"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "기타 다양한 목적으로 사용되는 SHARED POOL의 메모리 영역입니다. 기타 메모리 사용량을 추적하여 비정상적인 메모리 사용이 발생하는지 확인하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "SHARED POOL ALLOCATORS (Total)"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "SHARED POOL에서 할당된 총 메모리 크기입니다. LC, DD, SLAB, MISC 등을 포함한 총합입니다. 전반적인 메모리 사용 상태를 파악할 수 있으며 메모리 부족으로 인한 성능 저하를 예방할 수 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Database Buffers"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "데이터베이스 버퍼 캐시는 데이터 블록을 메모리에 저장하여 물리적인 디스크 I/O를 줄여주는 역할을 합니다. 데이터베이스 버퍼의 사용량을 모니터링하여 캐시 히트율을 높이고, 성능을 최적화할 수 있습니다. 데이터 블록이 적절하게 캐싱되고 있는지 확인하세요."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Redo Buffers"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "데이터베이스에서 트랜잭션이 발생할 때 변경 사항을 기록하는 버퍼입니다. 이 정보는 이후에 로그로 저장됩니다. Redo 버퍼 사용량을 모니터링하면 로그 기록에 병목 현상이 발생하지 않도록 관리할 수 있습니다. 이를 통해 트랜잭션 성능 향상에 기여할 수 있습니다."
            }), "\n"]
          }), "\n"]
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


;// CONCATENATED MODULE: ./docs/tibero/sga-size.mdx


const sga_size_frontMatter = {
	id: 'sga-size',
	title: 'SGA 사이즈',
	description: 'Tibero 서버 메모리 영역인 SGA 요약 정보를 매 시간 저장하여 시간별 변화량을 모니터링할 수 있습니다.',
	keywords: [
		'Tibero',
		'데이터베이스',
		'통계'
	],
	isTranslationMissing: true
};
const sga_size_contentTitle = undefined;
const metadata = {
  "id": "tibero/sga-size",
  "title": "SGA 사이즈",
  "description": "Tibero 서버 메모리 영역인 SGA 요약 정보를 매 시간 저장하여 시간별 변화량을 모니터링할 수 있습니다.",
  "source": "@site/docs/tibero/sga-size.mdx",
  "sourceDirName": "tibero",
  "slug": "/tibero/sga-size",
  "permalink": "/ja/tibero/sga-size",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/tibero/sga-size.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "sga-size",
    "title": "SGA 사이즈",
    "description": "Tibero 서버 메모리 영역인 SGA 요약 정보를 매 시간 저장하여 시간별 변화량을 모니터링할 수 있습니다.",
    "keywords": [
      "Tibero",
      "데이터베이스",
      "통계"
    ],
    "isTranslationMissing": true
  },
  "sidebar": "tiberoSidebar",
  "previous": {
    "title": "테이블스페이스 사이즈",
    "permalink": "/ja/tibero/table-space-size"
  },
  "next": {
    "title": "レポート",
    "permalink": "/ja/tibero/report-intro"
  }
};
const assets = {

};

/*oracle, tibero*/



const sga_size_toc = [...toc];
function sga_size_createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {})]
  });
}
function sga_size_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(sga_size_createMdxContent, {
      ...props
    })
  }) : sga_size_createMdxContent(props);
}



/***/ }),

/***/ 13732:
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