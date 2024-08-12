"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[57559],{

/***/ 83458:
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
	id: 'server-detail',
	title: 'Server details',
	description: 'It guides you to the method how to add the process group.',
	tags: [
		'Server details',
		'Server List',
		'Analysis',
		'UI',
		'Server'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "server/server-detail",
  "title": "Server details",
  "description": "It guides you to the method how to add the process group.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/server/server-detail.mdx",
  "sourceDirName": "server",
  "slug": "/server/server-detail",
  "permalink": "/en/server/server-detail",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/server/server-detail.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Server details",
      "permalink": "/en/tags/server-details"
    },
    {
      "inline": true,
      "label": "Server List",
      "permalink": "/en/tags/server-list"
    },
    {
      "inline": true,
      "label": "Analysis",
      "permalink": "/en/tags/analysis"
    },
    {
      "inline": true,
      "label": "UI",
      "permalink": "/en/tags/ui"
    },
    {
      "inline": true,
      "label": "Server",
      "permalink": "/en/tags/server"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "server-detail",
    "title": "Server details",
    "description": "It guides you to the method how to add the process group.",
    "tags": [
      "Server details",
      "Server List",
      "Analysis",
      "UI",
      "Server"
    ]
  },
  "sidebar": "serverSidebar",
  "previous": {
    "title": "Server List",
    "permalink": "/en/server/server-list"
  },
  "next": {
    "title": "Adding the process group",
    "permalink": "/en/server/server-detail-process-group"
  }
};
const assets = {

};

/*

갱신 시간 이미지

<div style={{textAlign: 'center'}}>

![sc](/img/server-detail-data.png)

</div>

*/


const toc = [{
  "value": " Options at the top",
  "id": "-options-at-the-top",
  "level": 2
}, {
  "value": "Data update time",
  "id": "data-update-time",
  "level": 3
}, {
  "value": "Select Server",
  "id": "select-server",
  "level": 3
}, {
  "value": " Detail",
  "id": "-detail",
  "level": 2
}, {
  "value": "Server resources",
  "id": "server-resources",
  "level": 3
}, {
  "value": "Process List",
  "id": "process-list",
  "level": 3
}, {
  "value": "Align",
  "id": "align",
  "level": 4
}, {
  "value": "Grouping",
  "id": "grouping",
  "level": 4
}, {
  "value": "Server information panel",
  "id": "server-information-panel",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverList",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverDetail",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Select a project in the initial screen of the WhaTap monitoring service, and then select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverDetail",
        className: "uitext"
      }), " under ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverList",
        className: "uitext"
      }), ". ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverDetail",
        className: "uitext"
      }), " provides detailed information on the server resource status and running processes."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "server-detail.png",
      desc: "Server Details"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
        id: "-options-at-the-top",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " Options at the top"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["In the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "number1",
          src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " area at the top, you can set the data for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "data update time"
          })
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "server"
          })
        }), ". You can see the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Summary Info"
          })
        }), " of the server, along with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Data Update Time"
          })
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Server"
          })
        }), " options."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "data-update-time",
        children: "Data update time"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "The data on the server detail page is automatically updated every 5 seconds."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Pause icon",
              src: (__webpack_require__(88354)/* ["default"] */ .A) + "",
              width: "20",
              height: "20"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Pause"
              })
            }), " : You can stop automatic update of the data."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Playback icon",
              src: (__webpack_require__(92138)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Playback"
              })
            }), " : You can restart the auto update you have stopped."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Refresh icon",
              src: (__webpack_require__(10169)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Refresh"
              })
            }), " : You can update the data based on the current time."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "select-server",
        children: "Select Server"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "select_server",
          className: "uitext"
        }), " option allows you to set the server to view. If you select a server to inquire from the list, you can see the server resources and detailed information of running processes in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "number2",
          src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " area."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
        id: "-detail",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " Detail"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "server-resources",
        children: "Server resources"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["In the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "number2",
          src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " area, you can see the resources of the server through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "CPU Usage"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Memory Usage"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Network"
          })
        }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Disk I/O"
          })
        }), " charts."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "csv icon",
              src: (__webpack_require__(19065)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " : You can save the chart records in a CSV file."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Camera icon",
              src: (__webpack_require__(37181)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " : The chart data is saved in an image data."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Detail icon",
              src: (__webpack_require__(70247)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " : You can see the charts for CPU utilization, memory utilization, network, and disk I/O."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "CPU Utilization"
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "CPU Usage"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "CPU Idle"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "CPU Nice"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "CPU I/O Wait"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "CPU Steal"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "CPU IRQ"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "CPU Soft IRQ"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "CPU Load"
                  })
                })]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "Memory utilization"
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Memory Usage"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Memory Available"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Memory SReclaimable"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Memory SUnreclaim"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Memory Slab"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Memory Swap Used"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Memory Page Faults"
                  })
                })]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "Network"
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Traffic in/out"
                  })
                }), ". ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Packet in/out"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Error in/out"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Dropped in/out"
                  })
                })]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "Disk I/O"
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Disk I/O"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "IOPS read/write"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Disk Bph Read/Write"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Used space"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Queue length"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Inode Used"
                  })
                }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "Free space"
                  })
                })]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "process-list",
        children: "Process List"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "align",
        children: "Align"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["You can search by setting a sorting in descending or ascending order according to the selected metric at the top of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "sms_summary_process",
              className: "uitext"
            }), " list."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["According to the metric selected at the top of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "sms_summary_process",
              className: "uitext"
            }), " list, you can check by setting the top ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "10"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "20"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "30"
              })
            }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "all",
              className: "uitext"
            }), " processes."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "grouping",
        children: "Grouping"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["A process group is a set of multiple processes with the same behaviors in an instance. You can add process groups by selecting the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "groupby",
          className: "uitext"
        }), " button. For more information about process grouping, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "server-detail-process-group",
          children: "the following"
        }), "."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "server-information-panel",
        children: "Server information panel"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["You can see the following in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "server_info",
          className: "uitext"
        }), " panel. In case of *** Agent Name*** and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Memo"
          })
        }), ", you can edit only in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "server_info",
          className: "uitext"
        }), " panel."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Alert icon",
              src: (__webpack_require__(68250)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "server_alert_list",
              className: "uitext"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["At the top of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "server_info",
              className: "uitext"
            }), " panel, if you select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Alert icon",
              src: (__webpack_require__(68250)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "server_alert_list",
              className: "uitext"
            }), ", the alerts for the current server appear."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Agent Name / ID"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["You can check the agent name (alias for ONAME) and ID (OID) of the selected server. You can modify the agent name by selecting the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Edit icon",
              src: (__webpack_require__(12900)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " button."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "ONAME is set to the host name by default."
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "OS"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "You can see the OS information of the selected server."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "IP Address"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "You can see the IP address of the selected server."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Agent"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "You can see the agent version of the selected server."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Memo"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["By checking the written memo or selecting ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Edit icon",
              src: (__webpack_require__(12900)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), ", you can modify or add any memo."]
          }), "\n"]
        }), "\n"]
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

/***/ 68250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS41Mzg5NSA3LjE2ODdDMi4xOTAwNiA0LjkxNDI5IDMuNDYwMiAzLjExMjkxIDUuMzMxNDUgMS43OTg1NUM1Ljc4ODQ5IDEuNDc3NTIgNi40MjM2NyAxLjU4MTU5IDYuNzUwMTYgMi4wMzA5OUM3LjA3NjY1IDIuNDgwMzkgNi45NzA4MSAzLjEwNDk0IDYuNTEzNzcgMy40MjU5N0M1LjAyMjIyIDQuNDczNjMgNC4wMjIxMyA1Ljg5MiAzLjQ5NTYgNy43MTUwN0MzLjM0MjE2IDguMjQ2MzUgMi43Nzk3NiA4LjU1NDcyIDIuMjM5NDQgOC40MDM4NUMxLjY5OTEzIDguMjUyOTcgMS4zODU1IDcuNjk5OTggMS41Mzg5NSA3LjE2ODdaTTIyLjQ2MTEgNy4xNjg3QzIxLjgwOTkgNC45MTQyOSAyMC41Mzk4IDMuMTEyOTEgMTguNjY4NiAxLjc5ODU1QzE4LjIxMTUgMS40Nzc1MiAxNy41NzYzIDEuNTgxNTkgMTcuMjQ5OCAyLjAzMDk5QzE2LjkyMzMgMi40ODAzOSAxNy4wMjkyIDMuMTA0OTQgMTcuNDg2MiAzLjQyNTk3QzE4Ljk3NzggNC40NzM2MyAxOS45Nzc5IDUuODkyIDIwLjUwNDQgNy43MTUwN0MyMC42NTc4IDguMjQ2MzUgMjEuMjIwMiA4LjU1NDcyIDIxLjc2MDYgOC40MDM4NUMyMi4zMDA5IDguMjUyOTcgMjIuNjE0NSA3LjY5OTk4IDIyLjQ2MTEgNy4xNjg3WiIgZmlsbD0iIzc1NzU3NSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4wMjQ4IDMuNUMxNC4wMjQ4IDMuNTk2NCAxNC4wMTc5IDMuNjkxMiAxNC4wMDQ4IDMuNzgzOTZDMTYuOTA2NSA0LjYzODA4IDE5LjAyNDggNy4zMjE2NyAxOS4wMjQ4IDEwLjVWMTYuNUgyMEMyMC41NTIzIDE2LjUgMjEgMTYuOTQ3NyAyMSAxNy41QzIxIDE4LjA1MjMgMjAuNTUyMyAxOC41IDIwIDE4LjVIMTkuMDI0OEg1LjAyNDc3SDRDMy40NDc3MiAxOC41IDMgMTguMDUyMyAzIDE3LjVDMyAxNi45NDc3IDMuNDQ3NzIgMTYuNSA0IDE2LjVINS4wMjQ3N1YxMC41TDUuMDI4ODIgMTAuMjU5M0M1LjEzMjYyIDcuMTg2ODQgNy4yMTY1NCA0LjYxNjQ0IDEwLjA0NDggMy43ODM5NkMxMC4wMzE2IDMuNjkxMiAxMC4wMjQ4IDMuNTk2NCAxMC4wMjQ4IDMuNUMxMC4wMjQ4IDIuMzk1NDMgMTAuOTIwMiAxLjUgMTIuMDI0OCAxLjVDMTMuMTI5MyAxLjUgMTQuMDI0OCAyLjM5NTQzIDE0LjAyNDggMy41Wk03LjAyODU0IDEwLjI5MzFDNy4xMTg0NiA3LjYzOTk5IDkuMzI3NTggNS41IDEyLjAyNDggNS41QzE0Ljc4NjIgNS41IDE3LjAyNDggNy43Mzg1OCAxNy4wMjQ4IDEwLjVWMTYuNUg3LjAyNDc3VjEwLjVMNy4wMjg1NCAxMC4yOTMxWk0xMi4wMjQ4IDIyLjVDMTAuMzY3OSAyMi41IDkuMDI0NzcgMjEuMTU2OSA5LjAyNDc3IDE5LjVIMTUuMDI0OEMxNS4wMjQ4IDIxLjE1NjkgMTMuNjgxNiAyMi41IDEyLjAyNDggMjIuNVoiIGZpbGw9IiM3NTc1NzUiLz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 37181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOSAzTDcuMTcgNS45OTA1M0gyQzIgNS45OTA1MyAyIDYuODkwMzYgMiA3Ljk5MDE0VjE5LjAwMDRDMiAyMC4xMDAyIDIgMjEgMiAyMUgyMkMyMiAyMSAyMiAyMC4xMDAyIDIyIDE5LjAwMDRWNy45OTAxNEMyMiA2Ljg5MDM2IDIyIDUuOTkwNTMgMjIgNS45OTA1M0gxNi44M0wxNSAzSDlaTTQgOEg4LjI0MDg2TDEwLjAyMDEgNC45OTE4MkgxNC4wMTE1TDE2LjA5NzggOEgyMFYxOUg0TDQgOFpNMTIgMTdDOS43OTIgMTcgOCAxNS4yMDggOCAxM0M4IDEwLjc5MiA5Ljc5MiA5IDEyIDlDMTQuMjA4IDkgMTYgMTAuNzkyIDE2IDEzQzE2IDE1LjIwOCAxNC4yMDggMTcgMTIgMTdaTTEyIDE1QzEzLjEwNDYgMTUgMTQgMTQuMTA0NiAxNCAxM0MxNCAxMS44OTU0IDEzLjEwNDYgMTEgMTIgMTFDMTAuODk1NCAxMSAxMCAxMS44OTU0IDEwIDEzQzEwIDE0LjEwNDYgMTAuODk1NCAxNSAxMiAxNVoiIGZpbGw9IiM3NTc1NzUiLz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 19065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQgM1YyMUgwVjNIMjRaTTIyIDVIMlYxOUgyMlY1Wk03Ljg3NTUgMTAuMjJDNy45MzA1IDEwLjQ0NzMgNy45NjUzMyAxMC43MzcgNy45OCAxMS4wODlIOS42OTZDOS43MDMzMyAxMC42MjcgOS42NDY1IDEwLjE5NjIgOS41MjU1IDkuNzk2NUM5LjQwNDUgOS4zOTY4MyA5LjIxOTMzIDkuMDQ4NSA4Ljk3IDguNzUxNUM4LjcyMDY3IDguNDU0NSA4LjQxMDg0IDguMjIxNjcgOC4wNDA1IDguMDUzQzcuNjcwMTcgNy44ODQzMyA3LjIzOTM0IDcuOCA2Ljc0OCA3LjhDNi4zMDA2NiA3LjggNS44OTU1IDcuODg0MzMgNS41MzI1IDguMDUzQzUuMTY5NSA4LjIyMTY3IDQuODU5NjcgOC40NzY1IDQuNjAzIDguODE3NUM0LjM0NjMzIDkuMTU4NSA0LjE0ODMzIDkuNTg3NSA0LjAwOSAxMC4xMDQ1QzMuODY5NjcgMTAuNjIxNSAzLjggMTEuMjI0NyAzLjggMTEuOTE0QzMuOCAxMi42MTA3IDMuODY5NjcgMTMuMjE1NyA0LjAwOSAxMy43MjlDNC4xNDgzMyAxNC4yNDIzIDQuMzQ2MzMgMTQuNjY5NSA0LjYwMyAxNS4wMTA1QzQuODU5NjcgMTUuMzUxNSA1LjE2OTUgMTUuNjA2MyA1LjUzMjUgMTUuNzc1QzUuODk1NSAxNS45NDM3IDYuMzAwNjYgMTYuMDI4IDYuNzQ4IDE2LjAyOEM3LjIyNDY3IDE2LjAyOCA3LjY0NjMzIDE1Ljk0NTUgOC4wMTMgMTUuNzgwNUM4LjM3OTY3IDE1LjYxNTUgOC42ODc2NyAxNS4zODYzIDguOTM3IDE1LjA5M0M5LjE4NjMzIDE0Ljc5OTcgOS4zNzUxNyAxNC40NTg3IDkuNTAzNSAxNC4wN0M5LjYzMTgzIDEzLjY4MTMgOS42OTYgMTMuMjU5NyA5LjY5NiAxMi44MDVINy45OEM3Ljk2NTMzIDEzLjAxNzcgNy45NDE1IDEzLjIyNDggNy45MDg1IDEzLjQyNjVDNy44NzU1IDEzLjYyODIgNy44MTg2NyAxMy44MDc4IDcuNzM4IDEzLjk2NTVDNy42NTczMyAxNC4xMjMyIDcuNTQ5MTcgMTQuMjQ5NyA3LjQxMzUgMTQuMzQ1QzcuMjc3ODMgMTQuNDQwMyA3LjEgMTQuNDg4IDYuODggMTQuNDg4QzYuNjg5MzMgMTQuNDg4IDYuNTA5NjcgMTQuNDQyMiA2LjM0MSAxNC4zNTA1QzYuMTcyMzMgMTQuMjU4OCA2LjAyNzUgMTQuMTEyMiA1LjkwNjUgMTMuOTEwNUM1Ljc4NTUgMTMuNzA4OCA1LjY5MDE3IDEzLjQ0NDggNS42MjA1IDEzLjExODVDNS41NTA4MyAxMi43OTIyIDUuNTE2IDEyLjM5MDcgNS41MTYgMTEuOTE0QzUuNTE2IDExLjQ0NDcgNS41NTA4MyAxMS4wNDUgNS42MjA1IDEwLjcxNUM1LjY5MDE3IDEwLjM4NSA1Ljc4NTUgMTAuMTE5MiA1LjkwNjUgOS45MTc1QzYuMDI3NSA5LjcxNTgzIDYuMTcyMzMgOS41NjkxNyA2LjM0MSA5LjQ3NzVDNi41MDk2NyA5LjM4NTgzIDYuNjg5MzMgOS4zNCA2Ljg4IDkuMzRDNy4wNDEzMyA5LjM0IDcuMTg2MTcgOS4zNjM4MyA3LjMxNDUgOS40MTE1QzcuNDQyODMgOS40NTkxNyA3LjU1NDY3IDkuNTQ5IDcuNjUgOS42ODFDNy43NDUzMyA5LjgxMyA3LjgyMDUgOS45OTI2NyA3Ljg3NTUgMTAuMjJaTTExLjcyMzcgMTQuMjY4QzExLjU2OTcgMTQuMDc3MyAxMS40ODUzIDEzLjc4NCAxMS40NzA3IDEzLjM4OEg5Ljc5ODY3QzkuNzk4NjcgMTQuMjE2NyAxMC4wMTEzIDE0Ljg2MzggMTAuNDM2NyAxNS4zMjk1QzEwLjg2MiAxNS43OTUyIDExLjU0MDMgMTYuMDI4IDEyLjQ3MTcgMTYuMDI4QzEyLjg2MDMgMTYuMDI4IDEzLjIxOTcgMTUuOTczIDEzLjU0OTcgMTUuODYzQzEzLjg3OTcgMTUuNzUzIDE0LjE2MzggMTUuNTkzNSAxNC40MDIyIDE1LjM4NDVDMTQuNjQwNSAxNS4xNzU1IDE0LjgyNzUgMTQuOTI0MyAxNC45NjMyIDE0LjYzMUMxNS4wOTg4IDE0LjMzNzcgMTUuMTY2NyAxNC4wMDQgMTUuMTY2NyAxMy42M0MxNS4xNjY3IDEzLjEzMTMgMTUuMDgwNSAxMi43MjggMTQuOTA4MiAxMi40MkMxNC43MzU4IDEyLjExMiAxNC41MTc3IDExLjg2NDUgMTQuMjUzNyAxMS42Nzc1QzEzLjk4OTcgMTEuNDkwNSAxMy43MDczIDExLjM0NTcgMTMuNDA2NyAxMS4yNDNDMTMuMTA2IDExLjE0MDMgMTIuODIzNyAxMS4wMzk1IDEyLjU1OTcgMTAuOTQwNUMxMi4yOTU3IDEwLjg0MTUgMTIuMDc3NSAxMC43Mjc4IDExLjkwNTIgMTAuNTk5NUMxMS43MzI4IDEwLjQ3MTIgMTEuNjQ2NyAxMC4yODk3IDExLjY0NjcgMTAuMDU1QzExLjY0NjcgOS44MTMgMTEuNzIxOCA5LjYwNzY3IDExLjg3MjIgOS40MzlDMTIuMDIyNSA5LjI3MDMzIDEyLjIyOTcgOS4xODYgMTIuNDkzNyA5LjE4NkMxMi43NjUgOS4xODYgMTIuOTc3NyA5LjI2NDgzIDEzLjEzMTcgOS40MjI1QzEzLjI4NTcgOS41ODAxNyAxMy4zNyA5Ljc5NDY3IDEzLjM4NDcgMTAuMDY2SDE1LjAxMjdDMTQuODg4IDkuMjgxMzMgMTQuNjE0OCA4LjcwNzUgMTQuMTkzMiA4LjM0NDVDMTMuNzcxNSA3Ljk4MTUgMTMuMTgzIDcuOCAxMi40Mjc3IDcuOEMxMi4wMzkgNy44IDExLjY5MDcgNy44NTY4MyAxMS4zODI3IDcuOTcwNUMxMS4wNzQ3IDguMDg0MTcgMTAuODEyNSA4LjI0OTE3IDEwLjU5NjIgOC40NjU1QzEwLjM3OTggOC42ODE4MyAxMC4yMTQ4IDguOTQyMTcgMTAuMTAxMiA5LjI0NjVDOS45ODc1IDkuNTUwODQgOS45MzA2NyA5Ljg5IDkuOTMwNjcgMTAuMjY0QzkuOTMwNjcgMTAuNzExMyAxMC4wMTY4IDExLjA3MjUgMTAuMTg5MiAxMS4zNDc1QzEwLjM2MTUgMTEuNjIyNSAxMC41Nzk3IDExLjg0NjIgMTAuODQzNyAxMi4wMTg1QzExLjEwNzcgMTIuMTkwOCAxMS4zOSAxMi4zMjgzIDExLjY5MDcgMTIuNDMxQzExLjk5MTMgMTIuNTMzNyAxMi4yNzM3IDEyLjYzNDUgMTIuNTM3NyAxMi43MzM1QzEyLjgwMTcgMTIuODMyNSAxMy4wMTk4IDEyLjk0OCAxMy4xOTIyIDEzLjA4QzEzLjM2NDUgMTMuMjEyIDEzLjQ1MDcgMTMuMzg4IDEzLjQ1MDcgMTMuNjA4QzEzLjQ1MDcgMTMuODk0IDEzLjM3IDE0LjEyMzIgMTMuMjA4NyAxNC4yOTU1QzEzLjA0NzMgMTQuNDY3OCAxMi44MTI3IDE0LjU1NCAxMi41MDQ3IDE0LjU1NEMxMi4xMzggMTQuNTU0IDExLjg3NzcgMTQuNDU4NyAxMS43MjM3IDE0LjI2OFpNMjAuODI0MyA3LjkzMkwxOC42MDIzIDE1Ljg5NkgxNy4xMjgzTDE0LjkwNjMgNy45MzJIMTYuNTM0M0wxNy44NzYzIDEzLjQxSDE3Ljg5ODNMMTkuMjYyMyA3LjkzMkgyMC44MjQzWiIgZmlsbD0iIzc1NzU3NSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 12900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQuOTM5MyAzTDE0LjkwMTQgMy4wMzc5NEwxNC44OTk1IDMuMDM2MDRMNSAxMi45MzU1TDUuMDA0NDcgMTIuOTRINVYxNS45NFYxNy45NEg3SDEwVjE3LjkzNTNMMTAuMDA0MiAxNy45Mzk1TDE5LjkwMzcgOC4wNEwxOS45MDE3IDguMDM3OTVMMTkuOTMzMiA4LjAwNjQxTDE0LjkzOTMgM1pNOS4xNzUyOCAxNS45NEg3VjEzLjc2NEwxNC45MzU3IDUuODI4MjlMMTcuMTA4NiA4LjAwNjY4TDkuMTc1MjggMTUuOTRaTTIyIDIwSDJWMjJIMjJWMjBaIiBmaWxsPSIjNzU3NTc1Ii8+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ 92138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMkMxNy41MjI4IDIgMjIgNi40NzcxNSAyMiAxMkMyMiAxNy41MjI4IDE3LjUyMjggMjIgMTIgMjJDNi40NzcxNSAyMiAyIDE3LjUyMjggMiAxMkMyIDYuNDc3MTUgNi40NzcxNSAyIDEyIDJaTTEyIDRDNy41ODE3MiA0IDQgNy41ODE3MiA0IDEyQzQgMTYuNDE4MyA3LjU4MTcyIDIwIDEyIDIwQzE2LjQxODMgMjAgMjAgMTYuNDE4MyAyMCAxMkMyMCA3LjU4MTcyIDE2LjQxODMgNCAxMiA0Wk0xNSAxMkwxMCA4VjE2TDE1IDEyWiIgZmlsbD0iIzAwQjU0MyIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 10169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNSAxOS44OTMzTDEyIDIzVjIwLjk5MDlDNy4wMjk0NCAyMC45OTA5IDMgMTYuOTQzIDMgMTEuOTQ5OEMzIDEwLjE0NCAzLjUyNzAxIDguNDYxODIgNC40MzQ5NCA3LjA1MDA2TDYuMDM3OCA4LjI2MzQyQzUuMzc5NyA5LjMzNTI4IDUgMTAuNTk4IDUgMTEuOTQ5OEM1IDE1LjgzMzQgOC4xMzQwMSAxOC45ODE3IDEyIDE4Ljk4MTdWMTYuOTcyNkwxNi41IDE5Ljg5MzNaTTcuNSAzLjkyMDdMMTIgNy4wMjc0VjQuOTE3ODFDMTUuODY2IDQuOTE3ODEgMTkgOC4wNjYxMyAxOSAxMS45NDk4QzE5IDEzLjMyOTQgMTguNjA0NSAxNC42MTYzIDE3LjkyMTEgMTUuNzAyMkwxOS41MjI4IDE2LjkxNDZDMjAuNDU2NiAxNS40ODk2IDIxIDEzLjc4MzQgMjEgMTEuOTQ5OEMyMSA2Ljk1NjUxIDE2Ljk3MDYgMi45MDg2OCAxMiAyLjkwODY4VjFMNy41IDMuOTIwN1oiIGZpbGw9IiM3NTc1NzUiLz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 88354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy41IDEuNjY2MDJINVYxOC4zMzI3SDcuNVYxLjY2NjAyWk0xNSAxLjY2NjAySDEyLjVWMTguMzMyN0gxNVYxLjY2NjAyWiIgZmlsbD0iIzc1NzU3NSIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 70247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF81MjNfMTQ3ODgpIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC41MDAyNyA0LjUwMDI2QzcuNTk0ODkgMS40MDU2NSAxMi42MTIyIDEuNDA1NjUgMTUuNzA2OSA0LjUwMDI2QzE4LjU2NDMgNy4zNTc3MiAxOC43ODMzIDExLjg1NDUgMTYuMzYzOCAxNC45NjMyTDIyLjA3NzQgMjAuNjc2OEwyMC42NzY2IDIyLjA3NzdMMTQuOTYzIDE2LjM2NEMxMS44NTQyIDE4Ljc4MzMgNy4zNTc2NCAxOC41NjQyIDQuNTAwMjcgMTUuNzA2OUMxLjQwNTY1IDEyLjYxMjIgMS40MDU2NSA3LjU5NDg4IDQuNTAwMjcgNC41MDAyNlpNMTQuMjc2MiAxNC4zMzU5QzExLjk1MjkgMTYuNjI3IDguMjEyMjYgMTYuNjE3MSA1LjkwMTMgMTQuMzA2MUMzLjU4MDMzIDExLjk4NTEgMy41ODAzMyA4LjIyMjEgNS45MDEzIDUuOTAxMTRDOC4yMjIyNiAzLjU4MDE3IDExLjk4NTMgMy41ODAxNyAxNC4zMDYyIDUuOTAxMTRDMTYuNjE3MiA4LjIxMjEgMTYuNjI3MiAxMS45NTI3IDE0LjMzNjEgMTQuMjc2TDE0LjI3NjIgMTQuMzM1OVpNMTMuMDc0OCA5LjExMjk4VjExLjA5NEwxMS4wOTQgMTEuMDk0TDExLjA5NCAxMy4wNzUzSDkuMTEyODlMOS4xMTI4OSAxMS4wOTRMNy4xMzE1NiAxMS4wOTRWOS4xMTI5OEg5LjExMjg5VjcuMTMyMDdMMTEuMDk0IDcuMTMyMDdWOS4xMTI5OEwxMy4wNzQ4IDkuMTEyOThaIiBmaWxsPSIjNzU3NTc1Ii8+DQo8L2c+DQo8ZGVmcz4NCjxjbGlwUGF0aCBpZD0iY2xpcDBfNTIzXzE0Nzg4Ij4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4NCjwvY2xpcFBhdGg+DQo8L2RlZnM+DQo8L3N2Zz4NCg==");

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