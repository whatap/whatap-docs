"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[41044],{

/***/ 32579:
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
	id: 'container-map-log',
	title: 'Log',
	description: 'You can immediately check the logs output by the containers or applications inside containers.',
	tags: [
		'Kubernetes',
		'Kubernetes Monitoring',
		'Log'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/container-map-log",
  "title": "Log",
  "description": "You can immediately check the logs output by the containers or applications inside containers.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/kubernetes/container-map-log.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/container-map-log",
  "permalink": "/en/kubernetes/container-map-log",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/container-map-log.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Kubernetes",
      "permalink": "/en/tags/kubernetes"
    },
    {
      "inline": true,
      "label": "Kubernetes Monitoring",
      "permalink": "/en/tags/kubernetes-monitoring"
    },
    {
      "inline": true,
      "label": "Log",
      "permalink": "/en/tags/log"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "container-map-log",
    "title": "Log",
    "description": "You can immediately check the logs output by the containers or applications inside containers.",
    "tags": [
      "Kubernetes",
      "Kubernetes Monitoring",
      "Log"
    ]
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "Metrics",
    "permalink": "/en/kubernetes/container-map-metrics"
  },
  "next": {
    "title": "Event",
    "permalink": "/en/kubernetes/container-map-event"
  }
};
const assets = {

};

/*

실시간으로 발생하는 로그는 컨테이너 **_Stdout/Stderr_** 탭의 최근 로그 메시지와 **_로그 검색_** 탭을 통해 조회할 수 있습니다. >

*/
/*>

- Add the `logsink_enabled=true` setting in **_Management_** > **_Agent CONFIG._** on the WhaTap monitoring service page.
- To add the settings for all nodes in the cluster project, go to **_Project Default_** > **_Nodes_**.
- To add settings for some nodes, first select one or more nodes.

**_Management_** > **_Agent CONFIG._** > Select Node Agent > **_+ Add Option_** > Select options for all agents > Select node to apply

![Agent configuration](https://img.whatap.io/media/images/whatap_kubernetes_container_map_logsink_enabled.png)

:::note

For more information about the WhaTap Log Monitoring service, see [the following](../log/introduction).

:::

### Go to Log Search

![Log search moving sc](/img/k8s-log-search-to-log-search.png)

Click **_Log search_** on the right of the **_Log_** tab. **_Log_** > **_Log search_** appears where you can search in detail through the functions such as Filtering.

:::note

For more information about the WhaTap Log Monitoring service, see [the following](../log/introduction).

:::

*/


const toc = [{
  "value": "Kubernetes logs",
  "id": "kubernetes-logs",
  "level": 2
}, {
  "value": "Recent log messages (Container Stdout/Stderr)",
  "id": "recent-log-messages-container-stdoutstderr",
  "level": 2
}, {
  "value": "Log Search",
  "id": "log-search",
  "level": 2
}, {
  "value": "General blocks and micro blocks",
  "id": "block",
  "level": 4
}, {
  "value": "Group",
  "id": "group",
  "level": 4
}, {
  "value": "Adding the node agent settings to save Standard Out",
  "id": "adding-the-node-agent-settings-to-save-standard-out",
  "level": 4
}, {
  "value": "Adding the application agent settings for collecting application logs inside containers",
  "id": "adding-the-application-agent-settings-for-collecting-application-logs-inside-containers",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Dashboard"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Container Map"
        })
      }), " > Target selection, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Display Detail"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Log"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "kubernetes-logs",
        children: "Kubernetes logs"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "The WhaTap Kubernetes monitoring service collects and stores the logs that occur in Kubernetes."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Kubernetes has two types of logs:"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Standard out logs for each container"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Logs output by applications running inside each container"
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "These logs serve to compensate for monitoring blind spots that are difficult to check with the container status or metrics data. You can check these logs as follows:"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Standard Out logs of each container can be checked through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "kubectl logs"
            }), " command provided by Kubernetes without entering into the container."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Application logs in each container must be checked in the container or for that purpose, a separate log collection method must be devised."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "recent-log-messages-container-stdoutstderr",
        children: "Recent log messages (Container Stdout/Stderr)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "This function allows you to immediately check the current container logs. You can fetch logs directly from your cluster environment to view real-time logs for the selected containers or applications within the selected pods. To check the container logs, the following command is used."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "kubectl logs pod/<Pod명> -n <Namespace명>\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "If there are multiple containers in a pod, select each individual container to view logs."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "kubectl logs pod/<Pod명> -c <container name> -n <Namespace명>\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["It is very inconvenient to access the terminal screen and run the command line tools every time to check logs. By using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Log"
          })
        }), " function of WhaTap Kubernetes Monitoring, you can conveniently check the current logs."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-container-log.png",
        desc: "Recent log messages"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["However, there are things to think about. If you exit the container, you cannot see logs any longer. Even if the container is still running, you can check only the logs for a specific period or amount. The WhaTap's Recent Log Messages (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Container Stdout/Stderr"
          })
        }), ") function allows you to see the logs in the Kubernetes environment. The disappeared logs from the user environment are difficult to check even through WhaTap."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Therefore, a separate method is required for stable and continuous management of log data. In particular, as the microservice architecture spreads and the number of containers for businesses increases, the log checking and management methods are becoming more complex."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Any good idea?"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "log-search",
        children: "Log Search"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["All the related logs disappear when the container is shut down, but you can check the logs that have occurred on the selected container or pod through ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Log search"
          })
        }), ". When storing the container Standard Out logs, you can set the storage period and check information for specific targets or perform correlation analysis."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-log-search.png",
        desc: "Log Search"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 1",
              src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " time selector, you can select a desired time for searching data."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["By specifying the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 2",
              src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " category through the options on the left, you can search data. For more information about the categories to view, see the following guide to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "#block",
              children: "Bock"
            }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "#group",
              children: "Group"
            }), "."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["If you select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 2",
              src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Hide tag"
              })
            }), " on the right, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "timestamp"
              })
            }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "message"
              })
            }), " can be seen excluding tags during log recording."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Click ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 2",
              src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Log search"
              })
            }), " on the right. Then ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Log"
              })
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Log search"
              })
            }), " appears where you can search in detail through the functions such as Filtering."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["If you select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "number 3",
              src: (__webpack_require__(86865)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "More icon",
              src: (__webpack_require__(60156)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "More"
              })
            }), ", the parsed key values and log messages can be displayed. For more information, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../log/log-search",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "block",
        children: "General blocks and micro blocks"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Container block sc",
          src: (__webpack_require__(40190)/* ["default"] */ .A) + "",
          width: "373",
          height: "188"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "a icon",
              src: (__webpack_require__(69625)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "General block"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["A single polygon in the container map is called a block. In the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "containerStdout"
            }), " category of the log, you can see the information whose ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "containerid"
            }), " matches."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "b icon",
              src: (__webpack_require__(78250)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Micro block"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Blocks with agents installed are called microblocks. In addition to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "containerStdout"
            }), " category, you can also see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "App*"
            }), " related categories such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "AppLog"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "AppStdOut"
            }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "AppStdErr"
            }), ". If you select the category, you can see the logs that match ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "microOid"
            }), " (agent ID in the block)."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "group",
        children: "Group"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Container block group sc",
          src: (__webpack_require__(91222)/* ["default"] */ .A) + "",
          width: "1210",
          height: "547"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["When all blocks are selected on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Container map"
          })
        }), " screen or multiple blocks are selected from the card on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "View Detailed"
        }), " screen, the multiple blocks are called a group. When selecting a group, you can see all the logs in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "containerStdout"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "App*"
        }), " categories in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Log search"
          })
        }), " tab."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "adding-the-node-agent-settings-to-save-standard-out",
        children: "Adding the node agent settings to save Standard Out"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["To save the container's standard outputs through the WhaTap log service, set the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "logsink_enabled=true"
        }), " option in the WhaTap Kubernetes node agent. For more information about the settings and the WhaTap log monitoring service, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "../log/log-k8s#k8s-log-node",
          children: "the following"
        }), "."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "adding-the-application-agent-settings-for-collecting-application-logs-inside-containers",
        children: "Adding the application agent settings for collecting application logs inside containers"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["To collect the logs of applications running on containers through the WhaTap log service, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "../log/log-k8s#k8s-log-app",
          children: "the following"
        }), ". Java, Python, and Go are supported."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "caution",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["If you enable the WhaTap log service and use the container's standard output log storage function, an additional fee is incurred. For more information about pricing, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://www.whatap.io/en/pricing/",
            children: "the following"
          }), "."]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Some older versions of the agent do not provide the function to save container standard output logs. The agent upgrade method is as follows:"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bahs",
            metastring: "title='Agent update'",
            children: "kubectl set image daemonset/whatap-node-agent whatap-node-agent=whatap/kube_mon:<에이전트버전> -n whatap-monitoring\n"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["The latest version of the WhaTap Kubernetes agent can be checked in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://hub.docker.com/r/whatap/kube_mon/tags",
            children: "the following"
          }), "."]
        })]
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

/***/ 69625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIxNy41IiBmaWxsPSIjRjlDMTJBIi8+DQo8cGF0aCBkPSJNMTkuNjcxOSAyMi41NjI1VjE0LjE0MDZDMTkuNjcxOSAxMy41NTczIDE5LjU4ODUgMTMuMDg4NSAxOS40MjE5IDEyLjczNDRDMTkuMjY1NiAxMi4zODAyIDE5LjAzMTIgMTIuMTI1IDE4LjcxODggMTEuOTY4OEMxOC40MTY3IDExLjgwMjEgMTguMDM2NSAxMS43MTg4IDE3LjU3ODEgMTEuNzE4OEMxNy4wOTkgMTEuNzE4OCAxNi42OTI3IDExLjgxNzcgMTYuMzU5NCAxMi4wMTU2QzE2LjAzNjUgMTIuMjEzNSAxNS43OTE3IDEyLjQ4NDQgMTUuNjI1IDEyLjgyODFDMTUuNDU4MyAxMy4xNjE1IDE1LjM3NSAxMy41NDY5IDE1LjM3NSAxMy45ODQ0SDExLjczNDRDMTEuNzM0NCAxMy4zMDczIDExLjg2OTggMTIuNjU2MiAxMi4xNDA2IDEyLjAzMTJDMTIuNDIxOSAxMS40MDYyIDEyLjgyMjkgMTAuODQ5IDEzLjM0MzggMTAuMzU5NEMxMy44NjQ2IDkuODY5NzkgMTQuNDk0OCA5LjQ4NDM4IDE1LjIzNDQgOS4yMDMxMkMxNS45NzQgOC45MjE4OCAxNi43OTY5IDguNzgxMjUgMTcuNzAzMSA4Ljc4MTI1QzE4Ljc4NjUgOC43ODEyNSAxOS43NSA4Ljk2MzU0IDIwLjU5MzggOS4zMjgxMkMyMS40Mzc1IDkuNjgyMjkgMjIuMDk5IDEwLjI2MDQgMjIuNTc4MSAxMS4wNjI1QzIzLjA2NzcgMTEuODU0MiAyMy4zMTI1IDEyLjg5NTggMjMuMzEyNSAxNC4xODc1VjIyLjA3ODFDMjMuMzEyNSAyMi44NTk0IDIzLjM1OTQgMjMuNTU3MyAyMy40NTMxIDI0LjE3MTlDMjMuNTU3MyAyNC43NzYgMjMuNjk3OSAyNS4zMDIxIDIzLjg3NSAyNS43NVYyNkgyMC4xNzE5QzIwLjAwNTIgMjUuNTkzOCAxOS44ODAyIDI1LjA3MjkgMTkuNzk2OSAyNC40Mzc1QzE5LjcxMzUgMjMuODAyMSAxOS42NzE5IDIzLjE3NzEgMTkuNjcxOSAyMi41NjI1Wk0yMC4xNTYyIDE1LjcwMzFMMjAuMTcxOSAxOC4wNjI1SDE4LjQyMTlDMTcuOTAxIDE4LjA2MjUgMTcuNDMyMyAxOC4xMzU0IDE3LjAxNTYgMTguMjgxMkMxNi41OTkgMTguNDE2NyAxNi4yNDQ4IDE4LjYxNDYgMTUuOTUzMSAxOC44NzVDMTUuNjcxOSAxOS4xMjUgMTUuNDUzMSAxOS40MzIzIDE1LjI5NjkgMTkuNzk2OUMxNS4xNTEgMjAuMTYxNSAxNS4wNzgxIDIwLjU2MjUgMTUuMDc4MSAyMUMxNS4wNzgxIDIxLjUzMTIgMTUuMTUxIDIxLjk2MzUgMTUuMjk2OSAyMi4yOTY5QzE1LjQ1MzEgMjIuNjMwMiAxNS42NzcxIDIyLjg4MDIgMTUuOTY4OCAyMy4wNDY5QzE2LjI3MDggMjMuMjAzMSAxNi42MzU0IDIzLjI4MTIgMTcuMDYyNSAyMy4yODEyQzE3LjY0NTggMjMuMjgxMiAxOC4xNTEgMjMuMTU2MiAxOC41NzgxIDIyLjkwNjJDMTkuMDE1NiAyMi42NDU4IDE5LjM0OSAyMi4zMzMzIDE5LjU3ODEgMjEuOTY4OEMxOS44MTc3IDIxLjYwNDIgMTkuOTExNSAyMS4yNzA4IDE5Ljg1OTQgMjAuOTY4OEwyMC42ODc1IDIyLjQ4NDRDMjAuNjA0MiAyMi44ODAyIDIwLjQ0NzkgMjMuMjk2OSAyMC4yMTg4IDIzLjczNDRDMjAgMjQuMTcxOSAxOS43MTM1IDI0LjU4ODUgMTkuMzU5NCAyNC45ODQ0QzE5LjAwNTIgMjUuMzgwMiAxOC41NzgxIDI1LjcwMzEgMTguMDc4MSAyNS45NTMxQzE3LjU3ODEgMjYuMTkyNyAxNyAyNi4zMTI1IDE2LjM0MzggMjYuMzEyNUMxNS4zOTU4IDI2LjMxMjUgMTQuNTUyMSAyNi4xMTQ2IDEzLjgxMjUgMjUuNzE4OEMxMy4wNzI5IDI1LjMyMjkgMTIuNDg5NiAyNC43NTUyIDEyLjA2MjUgMjQuMDE1NkMxMS42NDU4IDIzLjI2NTYgMTEuNDM3NSAyMi4zNjk4IDExLjQzNzUgMjEuMzI4MUMxMS40Mzc1IDIwLjQ4NDQgMTEuNTc4MSAxOS43MTg4IDExLjg1OTQgMTkuMDMxMkMxMi4xNDA2IDE4LjM0MzggMTIuNTU3MyAxNy43NTUyIDEzLjEwOTQgMTcuMjY1NkMxMy42NjE1IDE2Ljc2NTYgMTQuMzU0MiAxNi4zODAyIDE1LjE4NzUgMTYuMTA5NEMxNi4wMzEyIDE1LjgzODUgMTcuMDE1NiAxNS43MDMxIDE4LjE0MDYgMTUuNzAzMUgyMC4xNTYyWiIgZmlsbD0iIzMzMzMzMyIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 78250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxNy41IiByPSIxNy41IiBmaWxsPSIjRjlDMTJBIi8+DQo8cGF0aCBkPSJNMTIuODQzOCA1SDE2LjQ2ODhWMjUuMzc1TDE2LjE4NzUgMjlIMTIuODQzOFY1Wk0yNS41NzgxIDE5Ljg5MDZWMjEuMjE4OEMyNS41NzgxIDIyLjU3MjkgMjUuNDYzNSAyMy43NTUyIDI1LjIzNDQgMjQuNzY1NkMyNS4wMDUyIDI1Ljc3NiAyNC42NjE1IDI2LjYxOTggMjQuMjAzMSAyNy4yOTY5QzIzLjc0NDggMjcuOTc0IDIzLjE3MTkgMjguNDc5MiAyMi40ODQ0IDI4LjgxMjVDMjEuNzk2OSAyOS4xNDU4IDIwLjk5NDggMjkuMzEyNSAyMC4wNzgxIDI5LjMxMjVDMTkuMjI0IDI5LjMxMjUgMTguNDg0NCAyOS4xMjUgMTcuODU5NCAyOC43NUMxNy4yNDQ4IDI4LjM2NDYgMTYuNzI0IDI3LjgyODEgMTYuMjk2OSAyNy4xNDA2QzE1Ljg4MDIgMjYuNDQyNyAxNS41NDY5IDI1LjYxNDYgMTUuMjk2OSAyNC42NTYyQzE1LjA1NzMgMjMuNjk3OSAxNC44ODAyIDIyLjY0MDYgMTQuNzY1NiAyMS40ODQ0VjE5LjYyNUMxNC44Njk4IDE4LjQ2ODggMTUuMDQxNyAxNy40MTE1IDE1LjI4MTIgMTYuNDUzMUMxNS41MzEyIDE1LjQ4NDQgMTUuODY0NiAxNC42NTYyIDE2LjI4MTIgMTMuOTY4OEMxNi42OTc5IDEzLjI3MDggMTcuMjE4OCAxMi43MzQ0IDE3Ljg0MzggMTIuMzU5NEMxOC40Njg4IDExLjk3NCAxOS4yMDgzIDExLjc4MTIgMjAuMDYyNSAxMS43ODEyQzIwLjk4OTYgMTEuNzgxMiAyMS43OTY5IDExLjk0NzkgMjIuNDg0NCAxMi4yODEyQzIzLjE3MTkgMTIuNjE0NiAyMy43NDQ4IDEzLjExOTggMjQuMjAzMSAxMy43OTY5QzI0LjY2MTUgMTQuNDYzNSAyNS4wMDUyIDE1LjMwNzMgMjUuMjM0NCAxNi4zMjgxQzI1LjQ2MzUgMTcuMzM4NSAyNS41NzgxIDE4LjUyNiAyNS41NzgxIDE5Ljg5MDZaTTIxLjkzNzUgMjEuMjE4OFYxOS44OTA2QzIxLjkzNzUgMTkuMDM2NSAyMS44OTA2IDE4LjI5NjkgMjEuNzk2OSAxNy42NzE5QzIxLjcxMzUgMTcuMDQ2OSAyMS41NjI1IDE2LjUzMTIgMjEuMzQzOCAxNi4xMjVDMjEuMTM1NCAxNS43MDgzIDIwLjg0MzggMTUuMzk1OCAyMC40Njg4IDE1LjE4NzVDMjAuMDkzOCAxNC45NzkyIDE5LjYxOTggMTQuODc1IDE5LjA0NjkgMTQuODc1QzE4LjU0NjkgMTQuODc1IDE4LjExNDYgMTQuOTc0IDE3Ljc1IDE1LjE3MTlDMTcuMzk1OCAxNS4zNjk4IDE3LjA5MzggMTUuNjUxIDE2Ljg0MzggMTYuMDE1NkMxNi41OTM4IDE2LjM2OTggMTYuMzk1OCAxNi43ODEyIDE2LjI1IDE3LjI1QzE2LjEwNDIgMTcuNzA4MyAxNi4wMDUyIDE4LjIwMzEgMTUuOTUzMSAxOC43MzQ0VjIyLjM3NUMxNi4wMjYgMjMuMDcyOSAxNi4xNzE5IDIzLjcxMzUgMTYuMzkwNiAyNC4yOTY5QzE2LjYxOTggMjQuODgwMiAxNi45NDc5IDI1LjM0MzggMTcuMzc1IDI1LjY4NzVDMTcuODEyNSAyNi4wMzEyIDE4LjM4MDIgMjYuMjAzMSAxOS4wNzgxIDI2LjIwMzFDMTkuNjMwMiAyNi4yMDMxIDIwLjA4ODUgMjYuMTA5NCAyMC40NTMxIDI1LjkyMTlDMjAuODE3NyAyNS43MzQ0IDIxLjEwOTQgMjUuNDM3NSAyMS4zMjgxIDI1LjAzMTJDMjEuNTU3MyAyNC42MjUgMjEuNzEzNSAyNC4xMDk0IDIxLjc5NjkgMjMuNDg0NEMyMS44OTA2IDIyLjg0OSAyMS45Mzc1IDIyLjA5MzggMjEuOTM3NSAyMS4yMTg4WiIgZmlsbD0iIzMzMzMzMyIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 60156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF82NV8xOTQ2KSI+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNSA2TDE2LjUgMTJMOC41IDE4TDguNSA2WiIgZmlsbD0iIzc1NzU3NSIvPg0KPC9nPg0KPGRlZnM+DQo8Y2xpcFBhdGggaWQ9ImNsaXAwXzY1XzE5NDYiPg0KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPg0KPC9jbGlwUGF0aD4NCjwvZGVmcz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 40190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 91222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-container-group-8801e654191b838c95e45e0ffae6c3f5.png");

/***/ }),

/***/ 29859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 93000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

/***/ }),

/***/ 86865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC");

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