"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[47872],{

/***/ 93676:
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
      children: "When collecting Windows event logs, you can set the options as follows:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "# Require an Administarotr role\nNew-Item -type \"Directory\" -Path \"C:\\Program Files\\WhatapInfra\\extension\"\n\n$contentToAdd = @\"\n[[inputs.win_eventlog]]\n    category = \"win_event_log\"\n    stats_category = \"win_event_log_stats\"\n    stats_enabled = true\n    enabled = true\n    [[inputs.win_eventlog.file]]\n        #true | false\n        enabled = true\n\t\t\t\t# Application, Security, Setup, System, Forwarded\n\t\t\t\tfile = \"Application\"\n\t\t\t\t#1: Information, 2: Warning 3: Critical 4: Audit Success 5 Audit Fail\n\t\t\t\t#event_type = \n\t\t\t\t#event id\n\t\t\t\t#event_id = \n\t\t\t\t#event source name\n\t\t\t\t#source_name = \"\"\n\n\"@\n\nNew-Item -path \"C:\\Program Files\\WhatapInfra\\extension\" -name \"win_eventlog.conf\" -type \"file\" -value $contentToAdd -Force\n\nRestart-Service \"Whatap Infra\"\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Support version 2.5.2"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "OS: Windows"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["It is required to specify the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "category"
          }), "."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "win_event_log"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["It is required to specify the statistics category (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stats_category"
          }), ")."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "win_event_log_stats"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["The statistics category On/Off (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "stats_enabled"
          }), ") is required."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "true"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "false"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["The collection On/Off (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "enabled"
          }), ") is required."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "true"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "false"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["The file-based collection On/Off (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "enabled"
          }), ") is required."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "true"
            }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "false"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["The file (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "file"
          }), ") is required."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
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
          children: ["The event type (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "event_type"
          }), ") is optional."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
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
              children: "Event type"
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
          children: ["The event ID (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "event_id"
          }), ") is optional."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["The event source name (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "source_name"
          }), ") is optional."]
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

/***/ 39696:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-exp.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));



/*

아래는 필드명 관련 컨펌 후 추가 예정 .. 현재 수정 임시로 남겨둠

:::caution

If you select a field or tag name with multiple periods (.) with the **_Selector_** mode selected in **_Event Rule_** and **_Filtering event targets_**, be sure to select **Direct Input** mode and then enter a grouped value in the `${field or tag name}` format.

For example, if you enter `webcheck.ping.status_code` field name, operator value as `!=`, and the value as `200`, select the **_Direct Input_** mode and then enter `${webcheck.ping.status_code` } != 200\`.

:::

:::note

**Field naming convention**

If the field name contains multiple periods (_._), enter it as follows:

> e.g. `webcheck.ping.status_code` → `${webcheck.ping.status_code}`

:::

*/


const toc = [{
  "value": "MySQL instances",
  "id": "mysql-instances",
  "level": 3
}, {
  "value": "Checking the web URL performance",
  "id": "checking-the-web-url-performance",
  "level": 3
}, {
  "value": "Redis Instances",
  "id": "redis-instances",
  "level": 3
}, {
  "value": "Memcached Server List",
  "id": "memcached-server-list",
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
      children: "To use the extension pack function after installation, create the configuration file and then restart the agent as follows."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "mysql-instances",
        children: "MySQL instances"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The MySQL/MariaDB monitoring agent is available."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "checking-the-web-url-performance",
        children: "Checking the web URL performance"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The WhaTap infrastructure agent accesses the given web address and then collects the access status and response time. The collected web URL performance can be checked in ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "category",
          className: "uitext"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "server_webcheck"
        }), ". Add web addresses to check with the following command. For more information about URL monitoring, see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../url/url-intro",
          children: "the following"
        }), "."]
      }), (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "server-user-script",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "lxs",
          label: "Linux Shell",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "echo \"web address to check\" | sudo tee -a /usr/whatap/infra/conf/webcheck.conf\necho \"webcheck.enabled=true\" | sudo tee -a /usr/whatap/infra/conf/whatap.conf\nsudo service whatap-infra restart\n"
            })
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "wps",
          label: "Windows Powershell",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "Add-Content -Path \"C:\\Program Files\\WhatapInfra\\webcheck.conf\" -Value \"web address to check\"\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"webcheck.enabled=true\"\nRestart-Service \"Whatap Infra\"\n"
            })
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "redis-instances",
        children: "Redis Instances"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The WhaTap infrastructure agent accesses the given Redis address and collects multiple performance metrics including the number of connections. The collected performance data can be checked in ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "category",
          className: "uitext"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "server_redis"
        }), ". You can add the connection data to the Redis server to be checked with the following command."]
      }), (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "server-user-script",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "lxs",
          label: "Linux Shell",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "sudo echo \"addr=Redis address:port\" | sudo tee /usr/whatap/infra/conf/redis.conf\nsudo echo \"password=Redis password\" | sudo tee -a /usr/whatap/infra/conf/redis.conf\nsudo service whatap-infra restart\n"
            })
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "wps",
          label: "Windows Powershell",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "Add-Content -Path \"C:\\Program Files\\WhatapInfra\\redis.conf\" -Value \"addr=Redis address:port\"\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\redis.conf\" -Value \"password=Redis password\"\nRestart-Service \"Whatap Infra\"\n"
            })
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "memcached-server-list",
        children: "Memcached Server List"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The WhaTap infrastructure agent accesses the given Memcached address and collects multiple performance metrics including the number of connections. The collected performance data can be checked in ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "category",
          className: "uitext"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "server_memcached"
        }), ". You can add the connection data to the Memcached server to be checked with the following command."]
      }), (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "server-user-script",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "lxs",
          label: "Linux Shell",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "sudo echo \"addr=Memcached address:port\" | sudo tee /usr/whatap/infra/conf/memcached.conf\nsudo echo \"password=Memcached password\" | sudo tee -a /usr/whatap/infra/conf/memcached.conf\nsudo service whatap-infra restart\n"
            })
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "wps",
          label: "Windows Powershell",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "Add-Content -Path \"C:\\Program Files\\WhatapInfra\\memcached.conf\" -Value \"addr=Memcached address\"\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\memcached.conf\" -Value \"password=Memcached password\"\nRestart-Service \"Whatap Infra\"\n"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-tcp-port.mdx


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
      children: "You can be notified when the network daemon's listening port has been disabled."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Select Home > Select Project > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_event",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_eventSetting",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "server",
        className: "uitext"
      }), " tab, and then select ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "+"
        })
      }), " ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "add_alert_setting",
        className: "uitext"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "server-adf-tcp-port.png",
      desc: "TCP port"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Click the ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "number-s",
            src: (__webpack_require__(31511)/* ["default"] */ .A) + "",
            width: "35",
            height: "35"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "port",
            className: "uitext"
          }), " metric toggle button and then change it to ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Select ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "number-s",
            src: (__webpack_require__(47228)/* ["default"] */ .A) + "",
            width: "35",
            height: "35"
          }), " ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "save",
            className: "uitext"
          }), " to save the settings."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Add the following command on the target server."
        }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
          groupId: "server-user-script",
          children: [(0,jsx_runtime.jsx)(TabItem, {
            value: "lxs",
            label: "Linux Shell",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                metastring: "title=SH",
                children: "#Specify the IP to be monitored in the following variable.\nexport TARGET_IP=127.0.0.1\n#Specify the port to be monitored in the following variable.\nexport TARGET_PORT=80\necho \"tcp.check.$TARGET_PORT=tcp://$TARGET_IP:$TARGET_PORT\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
              })
            })
          }), (0,jsx_runtime.jsx)(TabItem, {
            value: "wps",
            label: "Windows Powershell",
            children: (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                metastring: "title=SH",
                children: "#Specify the IP to be monitored in the following variable.\n$TARGET_IP=\"127.0.0.1\"\n#Specify the port to be monitored in the following variable.\n$TARGET_PORT=\"80\"\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"tcp.check.$TARGET_PORT=tcp://$TARGET_IP:$TARGET_PORT\"\n"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-pnpc.mdx


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
      children: ["The process network performance can be checked in the ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "sms_summary_process",
        className: "uitext"
      }), " widget under ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_serverList",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_serverDetail",
        className: "uitext"
      }), "."]
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
            children: "# The admin role is required.\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"process.fdcheck=true\"\n"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-collect-spec.mdx


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
      children: ["It collects the specifications for CPU, memory, disk, and NIC, installed packages, and meta data of virtual machines.\nFor each ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "category",
        className: "uitext"
      }), ", you can check the following."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "server_package"
        }), ": Installed package."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "server_inventory"
        }), ": Specifications for CPU, memory, disk, and NIC."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "server_pending_security_update"
        }), ": Waiting list for Linux security patches."]
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
            children: "# The admin role is required.\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"inventory.product.enabled=true\"\n"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-collect-lcp.mdx


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
      children: ["It collects the performance for CPU, memory, disk, and NIC in the Linux containers. The collected performance data can be checked in ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "category",
        className: "uitext"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server_container"
      }), "."]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-collect-wss.mdx


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
      children: ["It collects the Windows service operation status. The collected service operation status can be checked in ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "category",
        className: "uitext"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server_windows_service"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title='Windows Powershell'",
        children: "# The admin role is required.\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"winservice.enabled=true\"\n"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-file-check.mdx


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
      children: "You can monitor the files and directories that exist or can exist on the file system."
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "server-user-script",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "lxs",
        label: "Linux Shell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "echo \"filecheck.enabled=true\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\necho \"Full path of the file or directory to monitor\" |sudo tee -a /usr/whatap/infra/conf/filesystem.conf\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "wps",
        label: "Windows Powershell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "Add-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"filecheck.enabled=true\"\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\filesystem.conf\" -Value \"Full path of the file or directory to monitor\"\n"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-nvidia.mdx


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
      children: ["If the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nvidia-smi"
      }), " command is embedded, the GPU performance data is collected every 5 seconds to upload to WhaTap. The data is collected to the metrics ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "category",
        className: "uitext"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server_nvidiasmi"
      }), "."]
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
                children: "Metrics"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Remarks"
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
                children: "gauge, Framebuffer memory free (in MiB)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "UsedFbMemoryUsageGpu"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, Framebuffer memory used (in MiB)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "GpuTemp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, GPU temperature (in C)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "GpuUtil"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, GPU utilization (in %)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MemClock"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, Memory clock frequency (in MHz)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "MemoryUtil"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, Memory utilization (in %)"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "SmClock"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "gauge, SM clock frequency (in MHz)"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-agent-log-ch.mdx


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
      children: ["Change the path of the WhaTap agent logs (", (0,jsx_runtime.jsx)(_components.code, {
        children: "whatap_infrad.log"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "whatap_infra.log"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "whatap_infrad.fork.stdout.log"
      }), "). If the specified path does not exist, the WhaTap agent attempts to create the path. It is available in the agent 2.0.6 or later."]
    }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
      groupId: "server-user-script",
      children: [(0,jsx_runtime.jsx)(TabItem, {
        value: "lxs",
        label: "Linux Shell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "echo \"agent.log.prefix=Desired Directory\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
          })
        })
      }), (0,jsx_runtime.jsx)(TabItem, {
        value: "wps",
        label: "Windows Powershell",
        children: (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "Add-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"agent.log.prefix=Directory to change\"\n"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "In case of Windows, enter \"\\\" as the path delimiter."
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-netstat.mdx


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
      children: ["If the netstat command is embedded, collection is uploaded to ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "category",
        className: "uitext"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server_netstat"
      }), " (netstat connection statistics) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "server_netstat_s"
      }), " (result of netstat -s command)."]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-user-script.mdx


const _server_adf_user_script_frontMatter = {};
const _server_adf_user_script_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_user_script_toc = [{
  "value": "Running the BAT script",
  "id": "running-the-bat-script",
  "level": 4
}, {
  "value": "Running the PowerShell script",
  "id": "running-the-powershell-script",
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
        children: "It periodically runs the executable user script on the Linux server and uploads the results. Write your own script noting the following example"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Write the script as follows and then run it."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='Linux Shell'",
              children: "#!/bin/bash\n\nurls=(\"https://www.whatap.io\"  \"https://blog.whatap.io\"  \"https://service.whatap.io\")\n\nfor url in ${urls[*]}; do\n\necho \"M $url url $url\"\ncurl -w @- -o /dev/null -s \"$url\" <<'EOF'\nM %{url_effective} url %{url_effective}\\n\nH %{url_effective} time_namelookup %{time_namelookup}\\n\nH %{url_effective} time_connect %{time_connect}\\n\nH %{url_effective} time_appconnect %{time_appconnect}\\n\nH %{url_effective} time_pretransfer %{time_pretransfer}\\n\nH %{url_effective} time_redirect %{time_redirect}\\n\nH %{url_effective} time_starttransfer %{time_starttransfer}\\n\nH %{url_effective} time_total %{time_total}\\n\nEOF\n\ndone\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Check whether the out is as follows:"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='Linux Shell'",
              children: "$ ./curl.sh\nM https://www.whatap.io/ url https://www.whatap.io/\nH https://www.whatap.io/ time_namelookup 0.007289\nH https://www.whatap.io/ time_connect 0.010702\nH https://www.whatap.io/ time_appconnect 0.033637\nH https://www.whatap.io/ time_pretransfer 0.033831\nH https://www.whatap.io/ time_redirect 0.000000\nH https://www.whatap.io/ time_starttransfer 0.043230\nH https://www.whatap.io/ time_total 0.043312\nM https://blog.whatap.io/ url https://blog.whatap.io/\nH https://blog.whatap.io/ time_namelookup 0.000000\nH https://blog.whatap.io/ time_connect 0.000000\nH https://blog.whatap.io/ time_appconnect 0.000000\nH https://blog.whatap.io/ time_pretransfer 0.000000\nH https://blog.whatap.io/ time_redirect 0.000000\nH https://blog.whatap.io/ time_starttransfer 0.000000\nH https://blog.whatap.io/ time_total 0.005654\nM https://service.whatap.io/ url https://service.whatap.io/\nH https://service.whatap.io/ time_namelookup 0.004296\nH https://service.whatap.io/ time_connect 0.007282\nH https://service.whatap.io/ time_appconnect 0.038404\nH https://service.whatap.io/ time_pretransfer 0.038607\nH https://service.whatap.io/ time_redirect 0.000000\nH https://service.whatap.io/ time_starttransfer 0.055226\nH https://service.whatap.io/ time_total 0.055307\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Check whether the collection is normal and register the script to the WhaTap server monitoring agent as follows:"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='Linux Shell'",
              children: "export USER_SCRIPT=Absolute path to the script to run\nsuco chmod +x $USER_SCRIPT\nsudo mkdir /usr/whatap/infra/ext/\nsudo cp -r $USER_SCRIPT /usr/whatap/infra/ext/\nexport RUNAS_USER=Account to run the script. Root account is excluded.\nsudo WHATAP_HOME=/usr/whatap/infra/conf /usr/whatap/infra/whatap_infrad --user=$RUNAS_USER init-script\nsudo service whatap-infra restart\n"
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The collected data can be viewed in ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "category",
          className: "uitext"
        }), " 'server_ext_folder_runscript' under ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_analysis",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_counter",
          className: "uitext"
        }), "."]
      })]
    }), (0,jsx_runtime.jsxs)(TabItem, {
      value: "wps",
      label: "Windows Powershell",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "It periodically runs the executable user script on the Windows server and uploads the results. Write your own script noting the following example"
      }), (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "server-user-script",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "wps",
          label: "BAT",
          children: (0,jsx_runtime.jsxs)(_components.section, {
            className: "remark-sectionize-h4",
            children: [(0,jsx_runtime.jsx)(_components.h4, {
              id: "running-the-bat-script",
              children: "Running the BAT script"
            }), (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Write the script as follows and then run it."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bash",
                    metastring: "title='BAT'",
                    children: "@echo off\nsetlocal enabledelayedexpansion\n\nset urls=https://www.whatap.io https://blog.whatap.io https://service.whatap.io\n\nfor %%u in (%urls%) do (\n    echo M %%u url %%u\n\n    rem Use curl to fetch the URL and get the total time taken for the request\n    for /f \"tokens=*\" %%i in ('curl -o nul -s -w \"M %%{url_effective} url %%{url_effective}\" %%u') do (\n        echo %%i\n    )\n\n    rem Measure the start time\n    set startTime=!time!\n\n    rem Perform the curl request and measure the end time\n    curl -o nul -s %%u\n\n    set endTime=!time!\n\n    rem Parse the start time\n    for /F \"tokens=1-4 delims=:.,\" %%a in (\"!startTime!\") do (\n        set /A \"startH=%%a, startM=%%b, startS=%%c, startMS=%%d\"\n    )\n\n    rem Parse the end time\n    for /F \"tokens=1-4 delims=:.,\" %%a in (\"!endTime!\") do (\n        set /A \"endH=%%a, endM=%%b, endS=%%c, endMS=%%d\"\n    )\n\n    rem Calculate the elapsed time in milliseconds\n    set /A \"elapsedMS=(endH*3600000 + endM*60000 + endS*1000 + endMS) - (startH*3600000 + startM*60000 + startS*1000 + startMS)\"\n    \n    rem Convert milliseconds to seconds and milliseconds part\n    set /A \"elapsedSec=elapsedMS/1000\"\n    set /A \"elapsedMSPart=elapsedMS %% 1000\"\n\n    echo H %%u time_total !elapsedSec!.!elapsedMSPart!\n)\n\nendlocal\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Check whether the out is as follows:"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bash",
                    metastring: "title='BAT'",
                    children: ">webcheck.bat\nM https://www.whatap.io url https://www.whatap.io\nM https://www.whatap.io/ url https://www.whatap.io/\nH https://www.whatap.io time_total 0.38\nM https://blog.whatap.io url https://blog.whatap.io\nM https://blog.whatap.io/ url https://blog.whatap.io/\nH https://blog.whatap.io time_total 0.1\nM https://service.whatap.io url https://service.whatap.io\nM https://service.whatap.io/ url https://service.whatap.io/\nH https://service.whatap.io time_total 0.922\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Check whether the collection is normal and register the script to the WhaTap server monitoring agent as follows:"
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
              id: "running-the-powershell-script",
              children: "Running the PowerShell script"
            }), (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Write the script as follows and then run it."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bash",
                    metastring: "title='PowerShell'",
                    children: "$urls = @(\"https://www.whatap.io\", \"https://blog.whatap.io\", \"https://service.whatap.io\")\n\n# Hide progress bar\n$ProgressPreference = 'SilentlyContinue'\n\nforeach ($url in $urls) {\n    Write-Output \"M $url url $url\"\n\n    $startTime = Get-Date\n    try {\n        $response = Invoke-WebRequest -Uri $url -UseBasicParsing\n        $endTime = Get-Date\n        \n        $timeTotal = ($endTime - $startTime).TotalSeconds\n        \n        Write-Output \"M $($response.BaseResponse.ResponseUri) url $($response.BaseResponse.ResponseUri)\"\n        Write-Output (\"H {0} time_total {1}\" -f $url, $timeTotal)\n    } catch {\n        Write-Output \"Failed to access $url\"\n    }\n}\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Check whether the out is as follows:"
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bash",
                    metastring: "title='PowerShell'",
                    children: "> .\\webcheck.ps1                     \nM https://www.whatap.io url https://www.whatap.io\nM  url \nH https://www.whatap.io time_total 0.376979\nM https://blog.whatap.io url https://blog.whatap.io\nFailed to access https://blog.whatap.io\nM https://service.whatap.io url https://service.whatap.io\nFailed to access https://service.whatap.io\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Check whether the collection is normal and register the script to the WhaTap server monitoring agent as follows:"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-ntp.mdx


const _server_adf_ntp_frontMatter = {};
const _server_adf_ntp_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _server_adf_ntp_toc = [{
  "value": "Guide to additional key metrics",
  "id": "guide-to-additional-key-metrics",
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
          children: "Preliminary checking"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Operating system: Linux"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "WhaTap Server Monitoring Agent version: 2.5.4 or later"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can enable the server time synchronization (NTP) monitoring through the following option:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "echo \"ntpq.enabled=true\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "guide-to-additional-key-metrics",
        children: "Guide to additional key metrics"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The metrics to be added when activating the server time synchronization monitoring are as follows:"
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
              children: "Tag name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "refid"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Time synchronization source of the corresponding remote (", (0,jsx_runtime.jsx)(_components.code, {
                children: "remote"
              }), ")."]
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "-"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "remote"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Server to which the host performs time synchronization."
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
              children: "Field name"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Unit"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Remarks"
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
              children: "Time taken for the server to return a reply packet in response to a query."
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
              children: "Error threshold estimated as the difference in offset measurements between two samples."
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
              children: "Difference between the server setting time and client setting time."
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
              children: ["Polling interval to the remote host defined by the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "minpoll"
              }), " value in the ", (0,jsx_runtime.jsx)(_components.em, {
                children: "ntp.conf"
              }), " file."]
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
              children: "You can see how successful the attempts to reach the server were. It records the success or failure of the most recent query at the position 2^0 and operates as an 8-bit shift register."
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
              children: "Stratum level of the remote host."
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
              children: "1: The synchronization server exists."
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "2",
              children: "-"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "0: The synchronization server does not exist."
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
              children: "Available types are as follows."
            }), (0,jsx_runtime.jsx)(_components.td, {
              rowSpan: "5",
              children: "-"
            })]
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "l: Local (e.g. GPS clock)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "u: Unicast (general type)"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "m: Multicast"
            })
          }), (0,jsx_runtime.jsx)(_components.tr, {
            children: (0,jsx_runtime.jsx)(_components.td, {
              children: "b: Broadcast"
            })
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "when"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "second"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Seconds elapsed after the remote host responded."
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-linux-system-log.mdx


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
      children: "By uploading the Linux system logs in real time, you can check the logs generated upon failure. The log files to collect are as follows:"
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
      children: "The configuration is as follows:"
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_server-adf-log-plugin.mdx


const _server_adf_log_plugin_frontMatter = {};
const _server_adf_log_plugin_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*

0214 로그 모니터링 요청-추가 업데이트

stats_enabled = false ## 로그 발생량 통계 별도 데이터로 전송 여부
stats_category = "serverlog_stats" ## 로그 발생량 통계 카테고리

- `stats_enabled`: Set whether or not to generate statistical data while collecting extra logs. The default value is `false`. If set to `true`, statistical data is generated to the category set in `stats_category`.
- `stats_category`: Set the metrics category to store extra log collection statistical data. Statistical data fields are as follows:

*/


const _server_adf_log_plugin_toc = [{
  "value": "Linux Shell",
  "id": "linux-shell",
  "level": 3
}, {
  "value": "Windows Powershell",
  "id": "windows-powershell",
  "level": 3
}, {
  "value": "Configuring options",
  "id": "configuring-options",
  "level": 3
}];
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
      children: "You can arbitrarily collect the logs. The following configuration requires restart of the agent."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "linux-shell",
        children: "Linux Shell"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell' {7-12,14,15,25,26} showLineNumbers",
          children: "cd /usr/whatap/infra\nsudo mkdir extension\n\ncat >extension/logsink.conf<<EOL\n[[inputs.logsink]]\n  category = \"serverlog\"\n  ## Whether or not to send the data with separate log generation statistics\n  stats_enabled = true \n  ## Category for log generation statistics\n  stats_category = \"logsink_stats\"\n  ## Set the log non-target file names to be excluded with asterisk (*) in the log file path \n  excludeNames = [ \".gz\",\".zip\" ] \n  [[inputs.logsink.file]]\n    ## When setting a log file, you can set the date pattern (strftime.org).\n    path = \"/some/path/%Y-%m-%d/.log\" \n    disabled = false\n    encoding = \"utf-8\"\n\n  [[inputs.logsink.file]]\n    path = \"/some/other/log\"\n    disabled = false\n    encoding = \"utf-8\"\n\n  [[inputs.logsink.file]]\n    ## When searching for the keyword in the line-by-line log, merge it with the previous log.\n    nowrap_keywords = [\"Caused by:\", \"Test\"]EOL\n\nsudo service whatap-infra restart\n"
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
          children: "# Require an Administarotr role\nNew-Item -type \"Directory\" -Path \"C:\\Program Files\\WhatapInfra\\extension\"\n\n$contentToAdd = @\"\n[[inputs.logsink]]\ncategory = \"serverlog\"\n## Whether or not to send the data with separate log generation statistics\nstats_enabled = true \n## Category for log generation statistics\nstats_category = \"logsink_stats\"\n## Set the log non-target file names to be excluded with asterisk (*) in the log file path \nexcludeNames = [ \".gz\",\".zip\" ] \n[[inputs.logsink.file]]\n## When setting a log file, you can set the date pattern (strftime.org).\npath = \"c:\\\\whatap\\\\logs%Y-%m-%d_.log\"\ndisabled = false\nencoding = \"utf-8\"\n\n[[inputs.logsink.file]]\n## When searching for the keyword in the line-by-line log, merge it with the previous log. \nnowrap_keywords = [\"Caused by:\", \"Test\"]\n\"@\n\nNew-Item -path \"C:\\Program Files\\WhatapInfra\\extension\" -name \"logsink.conf\" -type \"file\" -value $contentToAdd -Force\n\nRestart-Service \"Whatap Infra\"\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "configuring-options",
        children: "Configuring options"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "stats_enabled"
            }), ": Set whether or not to collect the collection status data. The default value is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), ". The value must be set to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), ". If set to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), ", statistical data is generated in the category (", (0,jsx_runtime.jsx)(_components.code, {
              children: "logsink_stats"
            }), ") set in the following ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stats_category"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "stats_category"
            }), ": Set the metrics category to store the collection status data in. The value must be set to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "logsink_stats"
            }), ". Statistical data fields are as follows:"]
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
            }), ": By including asterisks (*) in the log file path, you can set the file name to exclude non log files. You can set multiple values using comma (,) as the delimiter."]
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
            }), ": While searching logs by line, if any keyword is detected by a specified option value, it is merged with the previous log."]
          }), "\n"]
        }), "\n"]
      })]
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


// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_log-server-windows-event.mdx
var _log_server_windows_event = __webpack_require__(93676);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/server/advanced-feature.mdx


const advanced_feature_frontMatter = {
	id: 'advanced-feature',
	title: 'Advanced functions',
	description: 'It guides you to the advanced functions of the server agent.',
	tags: [
		'Server',
		'Advanced functions'
	]
};
const advanced_feature_contentTitle = undefined;
const metadata = {
  "id": "server/advanced-feature",
  "title": "Advanced functions",
  "description": "It guides you to the advanced functions of the server agent.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/server/advanced-feature.mdx",
  "sourceDirName": "server",
  "slug": "/server/advanced-feature",
  "permalink": "/en/server/advanced-feature",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/server/advanced-feature.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Server",
      "permalink": "/en/tags/server"
    },
    {
      "inline": true,
      "label": "Advanced functions",
      "permalink": "/en/tags/advanced-functions"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "advanced-feature",
    "title": "Advanced functions",
    "description": "It guides you to the advanced functions of the server agent.",
    "tags": [
      "Server",
      "Advanced functions"
    ]
  },
  "sidebar": "serverSidebar",
  "previous": {
    "title": "Configuring the Windows performance counter",
    "permalink": "/en/server/agent-pcounter"
  },
  "next": {
    "title": "Agent Update",
    "permalink": "/en/server/agent-update"
  }
};
const assets = {

};




















const advanced_feature_toc = [{
  "value": "Expansion pack settings",
  "id": "expansion-pack-settings",
  "level": 2
}, ...toc, {
  "value": "TCP port monitoring",
  "id": "tcp-port-monitoring",
  "level": 2
}, ..._server_adf_tcp_port_toc, {
  "value": "Process network performance measurement",
  "id": "process-network-performance-measurement",
  "level": 2
}, ..._server_adf_pnpc_toc, {
  "value": "Collecting the server specifications",
  "id": "collecting-the-server-specifications",
  "level": 2
}, ..._server_adf_collect_spec_toc, {
  "value": "Collecting the Linux container performance",
  "id": "collecting-the-linux-container-performance",
  "level": 2
}, ..._server_adf_collect_lcp_toc, {
  "value": "Collecting the Windows server service opertions status",
  "id": "collecting-the-windows-server-service-opertions-status",
  "level": 2
}, ..._server_adf_collect_wss_toc, {
  "value": "File monitoring",
  "id": "file-monitoring",
  "level": 2
}, ..._server_adf_file_check_toc, {
  "value": "Nvidia GPU monitoring",
  "id": "nvidia-gpu-monitoring",
  "level": 2
}, ..._server_adf_nvidia_toc, {
  "value": "Changing the location of the WhaTap agent logs",
  "id": "changing-the-location-of-the-whatap-agent-logs",
  "level": 2
}, ..._server_adf_agent_log_ch_toc, {
  "value": "Netstat monitoring",
  "id": "netstat-monitoring",
  "level": 2
}, ..._server_adf_netstat_toc, {
  "value": "User script monitoring",
  "id": "user-script-monitoring",
  "level": 2
}, ..._server_adf_user_script_toc, {
  "value": "Server time synchronization monitoring",
  "id": "ntp-monitoring",
  "level": 2
}, ..._server_adf_ntp_toc, {
  "value": "Linux system log monitoring",
  "id": "linux-system-log-monitoring",
  "level": 2
}, ..._server_adf_linux_system_log_toc, {
  "value": "Log monitoring plug-in",
  "id": "log-monitoring-plug-in",
  "level": 2
}, ..._server_adf_log_plugin_toc, {
  "value": "Configuring the log options for Windows events",
  "id": "configuring-the-log-options-for-windows-events",
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
        id: "expansion-pack-settings",
        children: "Expansion pack settings"
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "tcp-port-monitoring",
        children: "TCP port monitoring"
      }), (0,jsx_runtime.jsx)(_server_adf_tcp_port_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "process-network-performance-measurement",
        children: "Process network performance measurement"
      }), (0,jsx_runtime.jsx)(_server_adf_pnpc_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "collecting-the-server-specifications",
        children: "Collecting the server specifications"
      }), (0,jsx_runtime.jsx)(_server_adf_collect_spec_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "collecting-the-linux-container-performance",
        children: "Collecting the Linux container performance"
      }), (0,jsx_runtime.jsx)(_server_adf_collect_lcp_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "collecting-the-windows-server-service-opertions-status",
        children: "Collecting the Windows server service opertions status"
      }), (0,jsx_runtime.jsx)(_server_adf_collect_wss_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "file-monitoring",
        children: "File monitoring"
      }), (0,jsx_runtime.jsx)(_server_adf_file_check_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "nvidia-gpu-monitoring",
        children: "Nvidia GPU monitoring"
      }), (0,jsx_runtime.jsx)(_server_adf_nvidia_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "changing-the-location-of-the-whatap-agent-logs",
        children: "Changing the location of the WhaTap agent logs"
      }), (0,jsx_runtime.jsx)(_server_adf_agent_log_ch_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "netstat-monitoring",
        children: "Netstat monitoring"
      }), (0,jsx_runtime.jsx)(_server_adf_netstat_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "user-script-monitoring",
        children: "User script monitoring"
      }), (0,jsx_runtime.jsx)(_server_adf_user_script_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "ntp-monitoring",
        children: "Server time synchronization monitoring"
      }), (0,jsx_runtime.jsx)(_server_adf_ntp_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "linux-system-log-monitoring",
        children: "Linux system log monitoring"
      }), (0,jsx_runtime.jsx)(_server_adf_linux_system_log_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "log-monitoring-plug-in",
        children: "Log monitoring plug-in"
      }), (0,jsx_runtime.jsx)(_server_adf_log_plugin_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "configuring-the-log-options-for-windows-events",
        children: "Configuring the log options for Windows events"
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

/***/ 31511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 47228:
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