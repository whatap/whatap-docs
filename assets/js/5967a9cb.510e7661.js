"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["90403"], {
"69216": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_server_server_inventory_map_group_mdx_596_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-server-server-inventory-map-group-mdx-596.json
var site_docs_server_server_inventory_map_group_mdx_596_namespaceObject = JSON.parse('{"id":"server/server-inventory-map-group","title":"서버 인벤토리 맵 그룹화","description":"서버 인벤토리 맵 그룹화에 대하여 안내합니다.","source":"@site/docs/server/server-inventory-map-group.mdx","sourceDirName":"server","slug":"/server/server-inventory-map-group","permalink":"/server/server-inventory-map-group","draft":false,"unlisted":false,"editUrl":"undefined/docs/server/server-inventory-map-group.mdx","tags":[],"version":"current","frontMatter":{"id":"server-inventory-map-group","title":"서버 인벤토리 맵 그룹화","description":"서버 인벤토리 맵 그룹화에 대하여 안내합니다.","keywords":["대시보드","서버 인벤토리 맵","분석하기","Server"],"isTranslationMissing":false},"sidebar":"serverSidebar","previous":{"title":"서버 인벤토리 맵 상세","permalink":"/server/server-inventory-map-details"},"next":{"title":"Flex 보드","permalink":"/server/flex-board"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/server/server-inventory-map-group.mdx


const frontMatter = {
	id: 'server-inventory-map-group',
	title: '서버 인벤토리 맵 그룹화',
	description: '서버 인벤토리 맵 그룹화에 대하여 안내합니다.',
	keywords: [
		'대시보드',
		'서버 인벤토리 맵',
		'분석하기',
		'Server'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*<Cmdname sid="side_serverInventoryMap" className="uitext" />의 카드는 다음 세 가지 요소로 구성됩니다*/


const toc = [{
  "value": "그룹화 &amp; 카드",
  "id": "그룹화--카드",
  "level": 2
}, {
  "value": "주요 그룹화 속성",
  "id": "주요-그룹화-속성",
  "level": 2
}, {
  "value": "카드별 메트릭 데이터",
  "id": "카드별-메트릭-데이터",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_dashboard",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_serverInventoryMap",
        className: "uitext"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_serverInventoryMap",
        className: "uitext"
      }), "은 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_serverInventory",
        className: "uitext"
      }), " 메뉴에서 사용자가 설정한 컬럼 정보를 기반으로 모든 서버 정보를 한눈에 확인할 수 있는 대시보드입니다. 하지만 서버 상태와 정보를 모니터링할 때, 사용자마다 중요하게 여기는 기준은 다를 수 있습니다. 이를 반영하여 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_serverInventoryMap",
        className: "uitext"
      }), "은 사용자 관심사에 따라 데이터를 그룹화할 수 있는 기능을 제공합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "예를 들어 인프라 담당자는 서버의 하드웨어 구성 정보와 리소스 사용률에 주로 관심을 두는 반면, 애플리케이션 담당자는 특정 서비스와 관련된 서버 그룹이나 개별 서버 상태에 집중합니다. 운영 담당자는 특정 기간 동안 리소스 변화나 주요 이벤트를 기반으로 서버 상태를 분석하고자 할 수도 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["이처럼 다양한 관점과 필요를 충족하기 위해 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_serverInventoryMap",
        className: "uitext"
      }), "은 유연한 그룹화 기능을 제공합니다. 이를 통해 사용자는 관심사에 따라 데이터를 재구성하여 서버 상태를 보다 효율적으로 모니터링하고 관리할 수 있습니다."]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "server-inventory-map-group.png",
      desc: "서버 인벤토리 맵 그룹화"
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "그룹화--카드",
        children: "그룹화 & 카드"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_serverInventoryMap",
          className: "uitext"
        }), "은 그룹화 한 서버 구성 정보별로 카드를 제공합니다. 그룹화를 적용하지 않은 상태일 경우 전체 서버 정보가 하나의 큰 카드 내에 표현됩니다. 그룹화 적용 시 각 그룹 단위로 카드를 구성합니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["그룹화 적용 시 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "1차 그룹"
          })
        }), "과 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "2차 그룹"
          })
        }), "을 순차적으로 선택하여 서버를 분류할 수 있습니다. 1차 및 2차 그룹화에 따라 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "1차 그룹"
          })
        }), "은 카드 방식으로 데이터를 분류하며 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "2차 그룹"
          })
        }), "은 카드 내 차트 영역에서 서브 그룹 형식으로 각 그룹화된 데이터를 표현합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "1차 그룹"
              })
            }), ": 1차 그룹은 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "그룹 구분"
            }), "과 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "그룹명"
            }), " 정보를 바탕으로 표시됩니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["예, ", (0,jsx_runtime.jsx)("code", {
                class: "custom-cl",
                children: "Infra_domain"
              }), " ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "ALL"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "2차 그룹"
              })
            }), ": 2차 그룹은 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "그룹명"
            }), "과 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "그룹 내 서버의 개수"
            }), " 정보를 바탕으로 표시됩니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["예, ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "Finance(31)"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
          children: "서버 그룹 또는 서버에 마우스를 올리면 해당 그룹 및 서버의 주요 상태 정보를 팝오버 형식으로 간략히 확인할 수 있습니다."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "주요-그룹화-속성",
        children: "주요 그룹화 속성"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_serverInventory",
          className: "uitext"
        }), " 기반으로 조회 가능한 컬럼 중 기본 수집 항목과 사용자 정의 항목이 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "그룹화"
          })
        }), " 목록에 표시됩니다. 기본 수집 항목은 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "서버 타입"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "기본 그룹"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "OS 타입"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "OS 버전"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "모델"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "시리얼"
          })
        }), "입니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["예시 이미지에서 확인할 수 있는 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "인프라 도메인"
        }), "(", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Infra_Domain"
          })
        }), ") 및 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "업무별 대분류"
        }), "(", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Biz_MainCategory"
          })
        }), ") 등과 같은 그외의 항목은 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_serverInventory",
          className: "uitext"
        }), " 메뉴에서 커스텀 컬럼(", (0,jsx_runtime.jsx)("code", {
          class: "custom-cl",
          children: "custom"
        }), ")을 통해 추가한 사용자 정의 항목입니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["사용자 정의 항목을 통해 서버를 물리적 또는 논리적 구성에 따라 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "인프라 도메인"
        }), "으로 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1차 그룹화"
        }), " 후 업무 목적에 따라 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "업무별 대분류"
        }), " 기준으로 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2차 그룹화"
        }), "를 적용하여 뷰를 세분화할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "서버 인벤토리 커스텀 컬럼 예시",
          src: (__webpack_require__(24163)/* ["default"] */.Z) + "",
          width: "1208",
          height: "500"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["예시 이미지는 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_serverInventory",
          className: "uitext"
        }), " 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "인프라 도메인"
        }), " 항목을 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "DB"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "WAS"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "WEB"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "WEBWAS"
          })
        }), ", 그리고 사용자가 정의한 인프라 도메인이 포함된 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ALL"
          })
        }), " 등으로 항목 값을 분류하였습니다. 또한 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "업무별 대분류"
        }), " 항목을 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "External_System"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Processing_System"
          })
        }), ", ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Finance"
          })
        }), " 등으로 항목 값을 분류하였습니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["이와 같은 정보를 바탕으로 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_serverInventoryMap",
          className: "uitext"
        }), " 대시보드를 구성하여 전체 운영현황을 모니터링할 수 있습니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "카드별-메트릭-데이터",
        children: "카드별 메트릭 데이터"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "각 카드 아래에는 그룹화된 서버들에 대한 주요 지표 정보를 간략하게 제공합니다. 각 지표에 대한 상세 정보는 다음 표를 참고하세요."
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "구분"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "CPU(%)"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "전체 CPU 사용률 중 사용자 모드(User)와 커널 모드(Sys)에서의 사용률 합계를 표시합니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Memory(%)"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "사용자 프로세스와 커널이 사용 중인 메모리의 비율을 표시하며, 버퍼 및 캐시 영역은 제외됩니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Swap(%)"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "현재 사용 중인 Swap 영역의 크기를 백분율로 표시합니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Disk Busy(%)"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "단위 시간당 각 디스크가 작업한 시간 비율이며, 서버에서 가장 사용률이 높은 디스크의 값을 표시합니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Network RX"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "수신(Rx)된 데이터의 양을 bps 단위로 표시합니다."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Network TX"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "송신(Tx)된 데이터의 양을 bps 단위로 표시합니다."
            })]
          })]
        })]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Avg"
              })
            }), ": 그룹에 속한 모든 서버의 평균 메트릭 값을 표시합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Max"
              })
            }), ": 해당 메트릭의 최대값을 표시합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Max Server"
              })
            }), ": 최대값을 기록한 서버의 이름을 표시합니다."]
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
"24163": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/server-inventory-custom-cl-ex-d8363d0f9ea10fb1bcd5a871d513990b.png");

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