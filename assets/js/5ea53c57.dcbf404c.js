"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[66037],{

/***/ 40574:
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
    code: "code",
    em: "em",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {TabItem, Tabs} = _components;
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["선택한 프로젝트의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "관리"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "에이전트 설치"
        })
      }), " 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "프로젝트 코드"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "수집 서버 IP"
      }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "프로젝트 액세스 키"
      }), "를 확인합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
      groupId: "operating-systems",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "lx",
        label: "Linux Shell",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"SH\"",
            children: "export WHATAP_LICENSE=xxxx-xxxxxx-xxxxxx\nexport WHATAP_HOST=xxxx.xxxx.xxxx\nexport WHATAP_PCODE=xxx\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "wd",
        label: "Windows Powershell",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"SH\"",
            children: "$WHATAP_LICENSE=xxxx-xxxxxx-xxxxxx\n$WHATAP_HOST=xxxx.xxxx.xxxx\n$WHATAP_PCODE=xxx\n"
          })
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

/***/ 74138:
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
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "다음 예시는 top 명령을 실행하여 특정 프로세스의 CPU, memory 사용량을 계속하여 수집합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title='Linux Shell'",
        children: "#매트릭 카테고리\nCATEGORY=\"my_category\"\n\nexport PID=수집하기 원하는 프로세스의 PID\ntop -b -p $PID | awk '/'$PID'/{ printf \"{\\\"pid\\\": %s, \\\"cpuPercent\\\": %s, \\\"memoryPercent\\\": %s, \\\"cmd\\\": \\\"%s\\\"}\\n\",$1, $9, $10, $12}; system(\"\")' | \\\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -category $CATEGORY\n"
      })
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

/***/ 76893:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28453);
/* harmony import */ var _common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40574);
/* harmony import */ var _common_items_top_collect_cpu_memory_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74138);


const frontMatter = {
	id: 'focus-setting',
	title: '설정하기',
	description: 'Focus 설정 방법에 대해 알아봅니다.',
	keywords: [
		'Focus',
		'설정하기'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "focus/focus-setting",
  "title": "설정하기",
  "description": "Focus 설정 방법에 대해 알아봅니다.",
  "source": "@site/docs/focus/focus-setting.mdx",
  "sourceDirName": "focus",
  "slug": "/focus/focus-setting",
  "permalink": "/whatap-docs/focus/focus-setting",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/focus/focus-setting.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "focus-setting",
    "title": "설정하기",
    "description": "Focus 설정 방법에 대해 알아봅니다.",
    "keywords": [
      "Focus",
      "설정하기"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "pluginSidebar",
  "previous": {
    "title": "설치하기",
    "permalink": "/whatap-docs/focus/install-focus"
  },
  "next": {
    "title": "사용 예시",
    "permalink": "/whatap-docs/focus/focus-usage"
  }
};
const assets = {

};





const toc = [{
  "value": "프로젝트 액세스 키 및 수집 서버 IP 확인",
  "id": "프로젝트-액세스-키-및-수집-서버-ip-확인",
  "level": 2
}, ..._common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "필터를 위한 특정 태그 추가",
  "id": "addtagfilter",
  "level": 2
}, {
  "value": "알림 보내기",
  "id": "알림-보내기",
  "level": 2
}, {
  "value": "SQL Query 결과 수집",
  "id": "sql-query-결과-수집",
  "level": 2
}, {
  "value": "로그 파일 키워드 매칭 로그 수집",
  "id": "로그-파일-키워드-매칭-로그-수집",
  "level": 2
}, {
  "value": "와탭 로그 분석 서비스",
  "id": "와탭-로그-분석-서비스",
  "level": 2
}, {
  "value": "OS 자원 사용량 수집",
  "id": "os-자원-사용량-수집",
  "level": 2
}, {
  "value": "임의 프로그램 및 스크립트 실행 결과 수집",
  "id": "임의-프로그램-및-스크립트-실행-결과-수집",
  "level": 2
}, ..._common_items_top_collect_cpu_memory_mdx__WEBPACK_IMPORTED_MODULE_2__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {TabItem, Tabs} = _components;
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "와탭 프로젝트에서 임의의 수집 데이터를 업로드할 수 있습니다. Focus는 해당 프로젝트의 기본 에이전트가 설치되지 않아도 사용할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "프로젝트-액세스-키-및-수집-서버-ip-확인",
        children: "프로젝트 액세스 키 및 수집 서버 IP 확인"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "addtagfilter",
        children: "필터를 위한 특정 태그 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "사용자가 필터를 위한 특정 문자열을 태그로 설정할 수 있습니다. 설정을 통해 와탭 모니터링 서비스 화면에서 수집된 데이터를 해당 태그의 이름 및 값으로 필터링할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\" showLineNumbers {5,6}",
              children: "# -tag.[사용자 태그 키 이름][공백][사용자태그 값]\n\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -tag.CustomTagName CustomTagValue \\\n    -tag.MyServer1 server_01 \\\n    ...\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\" showLineNumbers {5,6}",
              children: "# -tag.[사용자 태그 키 이름][공백][사용자태그 값]\n\n.\\focus.exe -license $WHATAP_LICENSE `\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\n    -tag.CustomTagName CustomTagValue `\n    -tag.MyServer1 server_01 `\n    ...\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "알림-보내기",
        children: "알림 보내기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "사용자 정의 알림을 즉시 보낼 수 있습니다. 알림을 보낸 후 Focus는 종료합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\"",
              children: "#알림의 심각도를 선택합니다.\nlevel={info|warn|fatal}\n#알림의 제목\ntitle=원하는 알림의 제목\n#알림의 본문\nmessage=원하는 알림의 본문\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -alert -level $level -title $title -message $message\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\"",
              children: "#알림의 심각도를 선택합니다.\n$level=\"{info|warn|fatal}\"\n#알림의 제목\n$title=\"원하는 알림의 제목\"\n#알림의 본문\n$message=\"원하는 알림의 본문\"\n.\\focus.exe -license $WHATAP_LICENSE `\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\n    -alert -level $level -title $title -message $message\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "sql-query-결과-수집",
        children: "SQL Query 결과 수집"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "사용자 정의 SQL Query의 실행 결과를 시계열로 무기한 수집합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\"",
              children: "#매트릭 카테고리\ncategory=my_category\n#데이터 베이스 드라이버\ndriver={mysql|postgres}\n#데이터베이스 접속 정보\ndburl=\"아이디:패스워드@tcp(아이피:포트)/데이터베이스\"\n#Sql Query\nsqlquery=\"select some, columns from sometable\"\n./focus -license $WHATAP_LICENSE \\\n    -category $category \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -rdb $driver -rdb.connect $dburl \\\n    -rdb.sql $sqlquery\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\"",
              children: "#매트릭 카테고리\n$CATEGORY=\"my_category\"\n#데이터 베이스 드라이버\n$driver=\"{mysql|postgres}\"\n#데이터베이스 접속 정보\n$dburl=\"아이디:패스워드@tcp(아이피:포트)/데이터베이스\"\n#Sql Query\n$sqlquery=\"select some, columns from sometable\"\n\n.\\focus.exe -license $WHATAP_LICENSE `\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\n    -category $CATEGORY `\n    -rdb $driver -rdb.connect $dburl `\n    -rdb.sql $sqlquery\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "로그-파일-키워드-매칭-로그-수집",
        children: "로그 파일 키워드 매칭 로그 수집"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "지정한 텍스트 로그 파일에서 로그 발생 시 키워드를 포함하면 해당 로그 라인을 수집합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\"",
              children: "#매트릭 카테고리\ncategory=my_category\n#로그 파일\nLOG_FILE=로그 파일 경로\n#2개 이상의 로그 키워드를 입력할때 키워드 사이에 사용할 구분자\nLOG_KEYWORDS_SEPERATOR=,\n#로그 키워드를 ,로 연결하여 입력\nLOG_KEYWORDS=keyword1,keyword2\n./focus -license $WHATAP_LICENSE \\\n    -category $category \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -tail $LOG_FILE \\\n    -tail.keys $LOG_KEYWORDS \\\n    -tail.seperator $LOG_KEYWORDS_SEPERATOR\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\"",
              children: "#매트릭 카테고리\n$CATEGORY=\"my_category\"\n#로그 파일\nLOG_FILE=로그 파일 경로\n#2개 이상의 로그 키워드를 입력할때 키워드 사이에 사용할 구분자\nLOG_KEYWORDS_SEPERATOR=,\n#로그 키워드를 구분자로 연결하여 입력\nLOG_KEYWORDS=keyword1,keyword2\n\n.\\focus.exe -license $WHATAP_LICENSE `\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\n    -category $CATEGORY `\n    -tail $LOG_FILE `\n    -tail.keys $LOG_KEYWORDS `\n    -tail.seperator $LOG_KEYWORDS_SEPERATOR\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "와탭-로그-분석-서비스",
        children: "와탭 로그 분석 서비스"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "지정한 텍스트 로그 파일에서 로그 발생 시 와탭 로그 분석 서비스로 실시간 업로드합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\"",
              children: "#카테고리\ncategory=my_category\n#로그 파일 wildcard(*), 날짜패턴(http://strftime.org) 포함 가능\nLOG_FILE=로그 파일 경로\n./focus -license $WHATAP_LICENSE \\\n    -category $category \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -logsink $LOG_FILE\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\"",
              children: "#카테고리\n$CATEGORY=\"my_category\"\n#로그 파일 wildcard(*), 날짜패턴(http://strftime.org) 포함 가능\n$LOG_FILE=로그 파일 경로\n.\\focus.exe -license $WHATAP_LICENSE `\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\n    -category $CATEGORY `\n    -logsink $LOG_FILE\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "os-자원-사용량-수집",
        children: "OS 자원 사용량 수집"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Focus가 작동 중인 서버의 자원 사용량을 수집합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell'",
          children: "#매트릭 카테고리\ncategory=my_category\n#디스크 모니터링 활성화 여부\ndiskenabled=true|false\n#모니터링할 디스크 마운트\ndiskmount=/mypartition\n#NIC 모니터링 활성화 여부\nnicenabled=true|false\n#모니터링할 NIC\nnic=eth0\n\n./focus -license $WHATAP_LICENSE \\\n    -category $category \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -sys \\\n    -sys.disk.enabled $diskenabled \\\n    -sys.disk $diskmount \\\n    -sys.net.enabled $nicenabled \\\n    -sys.net $nic\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "임의-프로그램-및-스크립트-실행-결과-수집",
        children: "임의 프로그램 및 스크립트 실행 결과 수집"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "임의의 프로그램 및 스크립트를 실행하고 stdout으로 출력되는 결과를 지속적으로 수집합니다. 와탭 Focus는 json dictionary 형식으로 stdin으로 입력되면 해당 dictionary의 key, value를 수집합니다. 입력 수단으로 파이프를 사용하게 되므로 버퍼링을 사용하지 않도록 설정하는 것이 필요합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["지속적으로 수집하는 것이 아니라 일회성으로 수집하기 원하면 다음 옵션을 적용할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "-onetime"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["수집 시간을 지정하고 싶으면 다음 옵션으로 지정할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "-now {unix epoch time(second)}"
            })]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell'",
          children: "#매트릭 카테고리\nCATEGORY=\"my_category\"\n\n\n프로그램 혹은 스크립트 | \\\njson dictionary 형태로 재가공 | \\\n./focus -license $WHATAP_LICENSE \\\n    -category $category \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_top_collect_cpu_memory_mdx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {})]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
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