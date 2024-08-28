"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[767],{

/***/ 56666:
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
      children: ["In ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Management"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Agent Installation"
        })
      }), " for the selected project, check the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "project code"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "collection server IP"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "project access key"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
      groupId: "operating-systems",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "lx",
        label: "Linux Shell",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "export WHATAP_LICENSE=xxxx-xxxxxx-xxxxxx\nexport WHATAP_HOST=xxxx.xxxx.xxxx\nexport WHATAP_PCODE=xxx\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "wd",
        label: "Windows Powershell",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title='SH'",
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

/***/ 74726:
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
      children: "The following example executes the top command to continuously collect the CPU and memory usage of a specific process."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title='Linux Shell'",
        children: "#Metric category\nCATEGORY=\"my_category\"\n\nexport PID=PID of the process to collect\ntop -b -p $PID | awk '/'$PID'/{ printf \"{\\\"pid\\\": %s, \\\"cpuPercent\\\": %s, \\\"memoryPercent\\\": %s, \\\"cmd\\\": \\\"%s\\\"}\\n\",$1, $9, $10, $12}; system(\"\")' | \\\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -category $CATEGORY\n"
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

/***/ 96345:
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
/* harmony import */ var _common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56666);
/* harmony import */ var _common_items_top_collect_cpu_memory_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74726);


const frontMatter = {
	id: 'focus-setting',
	title: 'Configuration',
	description: 'Let\'s learn about the Focus setting method.',
	keywords: [
		'Focus',
		'Configuration'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "focus/focus-setting",
  "title": "Configuration",
  "description": "Let's learn about the Focus setting method.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/focus/focus-setting.mdx",
  "sourceDirName": "focus",
  "slug": "/focus/focus-setting",
  "permalink": "/en/focus/focus-setting",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/focus/focus-setting.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "focus-setting",
    "title": "Configuration",
    "description": "Let's learn about the Focus setting method.",
    "keywords": [
      "Focus",
      "Configuration"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "pluginSidebar",
  "previous": {
    "title": "Installation",
    "permalink": "/en/focus/install-focus"
  },
  "next": {
    "title": "Usage examples",
    "permalink": "/en/focus/focus-usage"
  }
};
const assets = {

};





const toc = [{
  "value": "Checking the project access key and collection server IP",
  "id": "checking-the-project-access-key-and-collection-server-ip",
  "level": 2
}, ..._common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "Adding specific tags for filtering",
  "id": "addtagfilter",
  "level": 2
}, {
  "value": "Sending alerts",
  "id": "sending-alerts",
  "level": 2
}, {
  "value": "Collecting the SQL query result",
  "id": "collecting-the-sql-query-result",
  "level": 2
}, {
  "value": "Collecting the keyword matching logs of the log file",
  "id": "collecting-the-keyword-matching-logs-of-the-log-file",
  "level": 2
}, {
  "value": "WhaTap log analyzing service",
  "id": "whatap-log-analyzing-service",
  "level": 2
}, {
  "value": "Collecting the OS resource usage",
  "id": "collecting-the-os-resource-usage",
  "level": 2
}, {
  "value": "Collecting results of running the temporary programs and scripts",
  "id": "collecting-results-of-running-the-temporary-programs-and-scripts",
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
      children: "You can upload any collected data from the WhaTap project. Focus can be used even if the default agent has not been installed for the project."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "checking-the-project-access-key-and-collection-server-ip",
        children: "Checking the project access key and collection server IP"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "addtagfilter",
        children: "Adding specific tags for filtering"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "You can set specific strings as tags for filtering. Through the settings, you can filter the data collected from the WhaTap monitoring service screen by the name and value for the tag."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\" showLineNumbers {5,6}",
              children: "# -tag.[User tag key name][Blank][User tag value]\n\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -tag.CustomTagName CustomTagValue \\\n    -tag.MyServer1 server_01 \\\n    ...\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\" showLineNumbers {5,6}",
              children: "# -tag.[User tag key name][Blank][User tag value]\n\n.\\focus.exe -license $WHATAP_LICENSE `\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\n    -tag.CustomTagName CustomTagValue `\n    -tag.MyServer1 server_01 `\n    ...\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "sending-alerts",
        children: "Sending alerts"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Custom alerts can be sent immediately. After sending an alert, the Focus is ended."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\"",
              children: "#Select a severity of the alert.\nlevel={info|warn|fatal}\n#Alert title\ntitle=Desired alert title\n#Alert body\nmessage=Desired alert body\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -alert -level $level -title $title -message $message\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\"",
              children: "#Select a severity of the alert.\n$level=\"{info|warn|fatal}\"\n#Alert title\n$title=\"Desired alert title\"\n#Alert body\n$message=Desired alert body\n.\\focus.exe -license $WHATAP_LICENSE `\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\n    -alert -level $level -title $title -message $message\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "collecting-the-sql-query-result",
        children: "Collecting the SQL query result"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "It collects the execution results of custom SQL queries in time series indefinitely."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\"",
              children: "#Metric category\ncategory=my_category\n#Database driver\ndriver={mysql|postgres}\n#Database connection info\ndburl=\"ID:password@tcp(IP:Port)/Database\"\n#Sql Query\nsqlquery=\"select some, columns from sometable\"\n./focus -license $WHATAP_LICENSE \\\n    -category $category \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -rdb $driver -rdb.connect $dburl \\\n    -rdb.sql $sqlquery\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\"",
              children: "#Metric category\n$CATEGORY=\"my_category\"\n#Database driver\n$driver=\"{mysql|postgres}\"\n#Database connection info\n$dburl=\"ID:password@tcp(IP:port)/Database\"\n#Sql Query\n$sqlquery=\"select some, columns from sometable\"\n\n.\\focus.exe -license $WHATAP_LICENSE `\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\n    -category $CATEGORY `\n    -rdb $driver -rdb.connect $dburl `\n    -rdb.sql $sqlquery\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "collecting-the-keyword-matching-logs-of-the-log-file",
        children: "Collecting the keyword matching logs of the log file"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "If a keyword is included when a log occurs in the specified text log file, the log line is collected."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\"",
              children: "#Metric category\ncategory=my_category\n#Log file\nLOG_FILE=Log file path\n#Delimiter to use between keywords when entering multiple log keywords\nLOG_KEYWORDS_SEPERATOR=,\n#Enter log keywords by using the delimiter (,).\nLOG_KEYWORDS=keyword1,keyword2\n./focus -license $WHATAP_LICENSE \\\n    -category $category \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -tail $LOG_FILE \\\n    -tail.keys $LOG_KEYWORDS \\\n    -tail.seperator $LOG_KEYWORDS_SEPERATOR\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\"",
              children: "#Metric category\n$CATEGORY=\"my_category\"\n#Log file\nLOG_FILE=Log file path\n#Delimiter to use between keywords when entering multiple log keywords\nLOG_KEYWORDS_SEPERATOR=,\n#Enter log keywords by using the delimiter\nLOG_KEYWORDS=keyword1,keyword2\n\n.\\focus.exe -license $WHATAP_LICENSE `\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\n    -category $CATEGORY `\n    -tail $LOG_FILE `\n    -tail.keys $LOG_KEYWORDS `\n    -tail.seperator $LOG_KEYWORDS_SEPERATOR\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "whatap-log-analyzing-service",
        children: "WhaTap log analyzing service"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "When a log occurs in the specified text log file, it is uploaded in real time to the WhaTap log analysis service."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\"",
              children: "#Category\ncategory=my_category\n#Can include the log file wildcard (*) and date pattern (http://strftime.org)\nLOG_FILE=log file path\n./focus -license $WHATAP_LICENSE \\\n    -category $category \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -logsink $LOG_FILE\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\"",
              children: "#Category\n$CATEGORY=\"my_category\"\n#Can include the log file wildcard (*) and date pattern (http://strftime.org)\n$LOG_FILE=log file path\n.\\focus.exe -license $WHATAP_LICENSE `\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\n    -category $CATEGORY `\n    -logsink $LOG_FILE\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "collecting-the-os-resource-usage",
        children: "Collecting the OS resource usage"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "It collects the resource usage of the server on which Focus is running."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell'",
          children: "#Metric category\ncategory=my_category\n#Whether or not to enable the disk monitoring\ndiskenabled=true|false\n#Disk mount to monitor\ndiskmount=/mypartition\n#Whether or not to enable the NIC monitoring\nnicenabled=true|false\n#NIC to monitor\nnic=eth0\n\n./focus -license $WHATAP_LICENSE \\\n    -category $category \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -sys \\\n    -sys.disk.enabled $diskenabled \\\n    -sys.disk $diskmount \\\n    -sys.net.enabled $nicenabled \\\n    -sys.net $nic\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "collecting-results-of-running-the-temporary-programs-and-scripts",
        children: "Collecting results of running the temporary programs and scripts"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "It runs programs and scripts and continuously collects results to stdout. WhaTap Focus collects the keys and values of the dictionary when any value is input to stdin in the json dictionary format. Because the pipe is to be used as an input method, it is required to disable buffering."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["For continuous collection instead of one-time collection, you can apply the following option. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "-onetime"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["To specify the collection time, you can enter it with the following option. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "-now {unix epoch time(second)}"
            })]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell'",
          children: "#Metric category\nCATEGORY=\"my_category\"\n\n\nProgram or script | \\\nReprocessing in the json format | \\\n./focus -license $WHATAP_LICENSE \\\n    -category $category \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST\n"
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