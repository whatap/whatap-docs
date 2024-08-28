"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[72785],{

/***/ 36641:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'about-tcp-port',
	title: 'Using the TCP port monitoring',
	description: 'It guides you to the need of TCP port monitoring and its use cases.',
	keywords: [
		'Server',
		'Server Monitoring',
		'TCP port'
	],
	toc_max_heading_level: 2,
	displayed_sidebar: 'learningSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "best-practice-guides/about-tcp-port",
  "title": "Using the TCP port monitoring",
  "description": "It guides you to the need of TCP port monitoring and its use cases.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/best-practice-guides/about-tcp-port.mdx",
  "sourceDirName": "best-practice-guides",
  "slug": "/best-practice-guides/about-tcp-port",
  "permalink": "/en/best-practice-guides/about-tcp-port",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/best-practice-guides/about-tcp-port.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "about-tcp-port",
    "title": "Using the TCP port monitoring",
    "description": "It guides you to the need of TCP port monitoring and its use cases.",
    "keywords": [
      "Server",
      "Server Monitoring",
      "TCP port"
    ],
    "toc_max_heading_level": 2,
    "displayed_sidebar": "learningSidebar",
    "isTranslationMissing": false
  },
  "sidebar": "learningSidebar",
  "previous": {
    "title": "인스턴스 성능 관리 활용",
    "permalink": "/en/best-practice-guides/about-instance-performance-analysis"
  }
};
const assets = {

};

/*문제 발생 시 관리자가 즉각적으로 대응할 수 있도록 알림을 발송합니다.*/
/*IT 인프라 관리에서 서비스별 TCP 포트를 모니터링하는 것은 운영 중인 서비스의 가용성과 상태를 평가하는 기본적이면서도 중요한 방법 중 하나입니다. TCP ports are the main communication paths for applications and services on the network, directly or indirectly indicating the running status of each service. Therefore, the TCP port monitoring plays an essential role in ensuring stable operation of the server and services.

The TCP port monitoring allows you to check in real time whether a specific service is running normally. For example, if the HTTP port (such as port 80 or 443) used by the web server is not responding, this may indicate a downtime of the web server or a network problem. In this situation, the TCP port monitoring can quickly detect problems and send notifications, allowing the administrator to respond immediately.

By using the WhaTap's server monitoring agent, you can check the status of the monitored servers in real time and also check in detail the TCP communication status between servers and the connection status to other services. This helps prevent service interruptions, maximize the system availability, and ensure the business continuity.*/
/*IT 인프라 관리에 있어 서비스별 TCP 포트를 모니터링하는 것은 운영 중인 서비스의 상태를 체크하는 기본적인 방법 중 하나입니다.

The TCP port monitoring allows you to check whether a specific service is running normally. For example, if the web server port is not responding, it indicates that the web server is down or there is a network problem. The TCP port monitoring can help you detect and respond to these issues quickly.

By using WhaTap's server monitoring agent, you can check the status of the servers being monitored as well as the TCP communication status with other services.*/
/*다음과 같이 알림 템플릿 내 ***재시작***과 ***미수신*** 항목 활성화만으로 추가적인 조작이 필요없이 기본 알림 설정이 완료됩니다.

First, let's look at the basic notifications of the servers being monitored.*/


const toc = [{
  "value": "TCP port monitoring",
  "id": "tcp-port-monitoring",
  "level": 2
}, {
  "value": "Activating an alert",
  "id": "activating-an-alert",
  "level": 2
}, {
  "value": "Default notifications",
  "id": "default-notifications",
  "level": 3
}, {
  "value": "Alerting the TCP port monitoring",
  "id": "alerting-the-tcp-port-monitoring",
  "level": 3
}, {
  "value": "Confirming activation",
  "id": "confirming-activation",
  "level": 3
}, {
  "value": "<em>whatap.conf</em>",
  "id": "whatapconf",
  "level": 4
}, {
  "value": "Metrics Search",
  "id": "metrics-search",
  "level": 4
}, {
  "value": "WhaTap server monitoring and TCP port monitoring",
  "id": "whatap-server-monitoring-and-tcp-port-monitoring",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, TabItem, Tabs} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The following describes the need of TCP port monitoring and explains how to activate the TCP port monitoring through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_eventSetting",
        className: "uitext"
      }), " menu."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "tcp-port-monitoring",
        children: "TCP port monitoring"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "In IT infrastructure management, TCP port monitoring is one of the basic and important ways to check the status of running services. TCP ports are the main communication paths for applications and services on the network. Each service communicates through a specific TCP port, directly or indirectly indicating the availability and performance of each service. Like this way, the TCP port monitoring plays an important role in ensuring the stability of the system by monitoring in real time whether the service is running normally."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "For example, if an HTTP port such as 80 or 443 used by a web server, is not responding, the web server may be down or its access may be blocked due to network issues. In this situation, the TCP port monitoring can quickly detect problems and send notifications, allowing the administrator to respond immediately."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "The WhaTap's server monitoring agent checks the status of the monitored servers in real time and also monitors the TCP communication status between the server and other services. This helps prevent service interruptions, maximize the system availability, and maintain the business continuity."
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "activating-an-alert",
        children: "Activating an alert"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Click Home > Select Project > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_event",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_eventSetting",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "server",
            className: "uitext"
          }), " tab and select the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "+"
            })
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "add_alert_setting",
            className: "uitext"
          }), " button."]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/about-server-adf-tcp-port.png",
        desc: "Set up tcp port monitoring notifications"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "default-notifications",
        children: "Default notifications"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["The WhaTap Server Monitoring provides the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "default notification"
        }), ". You can complete basic notification settings without any additional actions by simply enabling the server ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Restart"
          })
        }), " and data ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Not received"
          })
        }), " within the event template as follows:"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Restart"
              })
            }), ": A notification is sent when the monitored server performs the system reboot."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Not received"
              })
            }), ": If data is not received from the monitoring agent for a set period of time due to server downtime or network issues, a notification is sent for the condition."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "alerting-the-tcp-port-monitoring",
        children: "Alerting the TCP port monitoring"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["After activating ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Port"
          })
        }), " in the WhaTab server Monitoring event template, set the monitoring target endpoint and TCP port through the following script."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "server-user-script",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lxs",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "#Specify the IP to be monitored in the following variable.\nexport TARGET_IP=127.0.0.1\n#Specify the port to be monitored in the following variable.\nexport TARGET_PORT=80\necho \"tcp.check.$TARGET_PORT=tcp://$TARGET_IP:$TARGET_PORT\" |sudo tee -a /usr/whatap/infra/conf/whatap.conf\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wps",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "#Specify the IP to be monitored in the following variable.\n$TARGET_IP=\"127.0.0.1\"\n#Specify the port to be monitored in the following variable.\n$TARGET_PORT=\"80\"\nAdd-Content -Path \"C:\\Program Files\\WhatapInfra\\whatap.conf\" -Value \"tcp.check.$TARGET_PORT=tcp://$TARGET_IP:$TARGET_PORT\"\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "confirming-activation",
        children: "Confirming activation"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "whatapconf",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["If the setting is completed to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "127.0.0.1"
        }), " in the Linux environment, the following content is added to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "whatap.conf"
        }), " file in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "/usr/whatap/infra/conf"
        }), " path."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "license=xxxxxxxxxx\nwhatap.server.host=xxx.xxx.xxx.xxx\ncreatedtime=xxxxxxxxxx\ntcp.check.8080=tcp://127.0.0.1:8080\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "metrics-search",
        children: "Metrics Search"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Once setup is completed, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "server_tcpport"
        }), " category is added to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Analyze"
          })
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Metrics Search"
          })
        }), " menu. Metrics notifications can be used based on the value of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "isAlive"
        }), " field in the category."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/about-server-adf-tcp-port-ms.png",
        desc: "View metrics related to tcp port monitoring notifications"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "whatap-server-monitoring-and-tcp-port-monitoring",
        children: "WhaTap server monitoring and TCP port monitoring"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "By using the TCP port monitoring provided by WhaTap's server monitoring, you can effectively check the TCP status even in the environments where agents cannot be installed or private network areas where monitoring data cannot be directly transmitted to outside."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        align: "center",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "best-p/about-tcp-port-rs.png",
          desc: "tcp port monitoring"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "The WhaTap's server agent periodically checks the TCP status for the monitored servers and other endpoints within the server. Therefore, in the environments where network communication is possible, more comprehensive and wide-ranging monitoring can be performed through the agents. This feature thoroughly monitors server status and connection status in complex network environments, enabling rapid response upon a failure."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "By enabling various features of the WhaTap server monitoring, you can quickly understand and respond to the network and server issues of the operating system. WhaTab can help you ensure business continuity and maximize the stability of the services."
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