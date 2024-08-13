"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[87008],{

/***/ 89505:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _common_items_integrated_report_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88279);


const frontMatter = {
	id: 'integrated-report',
	title: 'Integrated Report',
	description: 'It guides you to the integrated report.',
	keywords: [
		'Altibase',
		'Database',
		'Database Monitoring',
		'Integrated Report'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "altibase/integrated-report",
  "title": "Integrated Report",
  "description": "It guides you to the integrated report.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/altibase/integrated-report.mdx",
  "sourceDirName": "altibase",
  "slug": "/altibase/integrated-report",
  "permalink": "/en/altibase/integrated-report",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/altibase/integrated-report.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "integrated-report",
    "title": "Integrated Report",
    "description": "It guides you to the integrated report.",
    "keywords": [
      "Altibase",
      "Database",
      "Database Monitoring",
      "Integrated Report"
    ]
  },
  "sidebar": "altibaseSidebar",
  "previous": {
    "title": "Report",
    "permalink": "/en/altibase/report-intro"
  },
  "next": {
    "title": "Alert Settings",
    "permalink": "/en/altibase/set-notice"
  }
};
const assets = {

};




const toc = [..._common_items_integrated_report_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM];
function _createMdxContent(props) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_integrated_report_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
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

/***/ 88279:
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





const toc = [{
  "value": "Difference between the report and integrated report",
  "id": "difference-between-the-report-and-integrated-report",
  "level": 2
}, {
  "value": "How to create reports",
  "id": "how-to-create-reports",
  "level": 2
}, {
  "value": "Checking the job list",
  "id": "checking-the-job-list",
  "level": 2
}, {
  "value": "Viewing and sharing reports",
  "id": "viewing-and-sharing-reports",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
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
      children: ["Home > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["On the initial screen of the WhaTap monitoring service, select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      }), " from the side menu without selecting a project. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      }), " allows you to easily generate reports for multiple projects."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can proceed with creating a report after selecting a report type and a desired report, and then you can check its progress in the report generation list. If an error occurs in a project during creation, you can check the error details. You can view a created report right away or share it with others by downloading and printing."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "integration_report_01.png"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The functions of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_integratedReport",
        className: "uitext"
      }), " are as follows."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Supporting multiple projects"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["In ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), ", you can easily select and create multiple projects at a time. Under the previous ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_report",
            className: "uitext"
          }), " menu, the reports must be created for each project."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Create Report by Kind"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["In ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "create_report",
            className: "uitext"
          }), ", you can select a project by the business and save it as a template. This function is useful in the micro service architecture (MSA) environment where projects are divided into business units."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Big Data Optimization"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["With an aid of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), ", the report creation time has been drastically reduced. Even if an error occurs while creating a project report, you can view the result of the report."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Simultaneous operation during report generation"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["In ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), ", you can create a report while performing other tasks. In the previous ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_report",
            className: "uitext"
          }), " menu, you have to wait until the generation task is finished."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["In ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_integratedReport",
            className: "uitext"
          }), ", you can go to another page while creating a report. You can also see its progress and view the created report from the report result list."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Sharing the report work"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Any user with project permission can view the created reports. You can check whether the related report has already been created, so you can avoid creating duplicates."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "difference-between-the-report-and-integrated-report",
        children: "Difference between the report and integrated report"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_report",
          className: "uitext"
        }), " menu generates a report for a single project. Accordingly, this menu can be accessed through ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_reportStat",
          className: "uitext"
        }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_report",
          className: "uitext"
        }), " after selecting a project."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_integratedReport",
          className: "uitext"
        }), " menu is used to create a report for multiple projects. It can be accessed from the main menus without selecting a project. For more information about the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_report",
          className: "uitext"
        }), ", see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "report-intro",
          children: "the following"
        }), "."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "how-to-create-reports",
        children: "How to create reports"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Selecting the report type"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "integration_report_02.png"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["If you select a desired report type in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "report_type",
              className: "uitext"
            }), ", the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "create_report",
              className: "uitext"
            }), " button is activated. The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "icon"
              })
            }), " before the report name indicates the project platform supported by the report form."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "Platform Application icon",
                src: (__webpack_require__(94938)/* ["default"] */ .A) + "",
                width: "32",
                height: "32"
              }), " indicates the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Application"
              }), " project platform."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "Platform Kubernetes icon",
                src: (__webpack_require__(68516)/* ["default"] */ .A) + "",
                width: "32",
                height: "32"
              }), " indicates the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Kubernetes"
              }), " project platform."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "Platform Server icon",
                src: (__webpack_require__(94521)/* ["default"] */ .A) + "",
                width: "30",
                height: "30"
              }), " indicates the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Server"
              }), " project platform."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Detailed settings"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "master_report.png"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["After selecting a report type, click ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "create_report",
              className: "uitext"
            }), ". The detailed settings are configured as follows:"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Report Title"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "If there are multiple reports of the same type, the report names make it easier to distinguish the report results."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Time"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "Select a period for the data to be used in the report. The period differs depending on the report type (daily, weekly, monthly)."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Select Project"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "Select a project for report creation. Selection is possible on the group and project basis."
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "Saving and importing report forms"
                })
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "You can save the specified report settings as a template and import it from the type list upon later creation. This function is useful for those who frequently use projects on a task basis."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Create Report"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["After configuration, click ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "create_report",
              className: "uitext"
            }), " to create a report."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "checking-the-job-list",
        children: "Checking the job list"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "integration_report_03.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["You can see the reports that were created and are being created in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "generation_report_list",
          className: "uitext"
        }), "."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["In the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "all",
          className: "uitext"
        }), " list, as well as the reports created by you, the reports created by other people with the same permission can be seen. In the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "my_report",
          className: "uitext"
        }), " list, you can see your own reports after being filtered."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["A report created with no error has the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          class: "woer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "Check icon",
            src: (__webpack_require__(63664)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " check"]
        }), " icon. In case of a report with any error, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          class: "wer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "Warning icon",
            src: (__webpack_require__(43420)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " warning"]
        }), " icon is displayed together. If you click the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          class: "wer",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "Warning icon",
            src: (__webpack_require__(43420)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " warning"]
        }), " icon, you can see in which project the error occurred."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "viewing-and-sharing-reports",
        children: "Viewing and sharing reports"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "integration_report_04.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "The reports are provided in three different ways:"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Viewing on the screen"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "If you select a report created in the job list, the report can be seen on the screen."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Download"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["If you click ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "download",
              className: "uitext"
            }), ", the files same as reports in the quick view are downloaded in HTML format. Reports can be shared with the people with no management permission for monitoring."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Printing and saving PDF"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["If you click ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "print",
              className: "uitext"
            }), ", you can print it with the printer connected to your computer or save it in PDF format."]
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

/***/ 63664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC40NTI3IDZMOS41NzQ3NiAxNS4xMTFMNS41NDczMyAxMC43Nzc2TDQgMTIuMzA1MUw5LjU3NDc2IDE4TDIwIDcuNTI3NTRMMTguNDUyNyA2VjZaIiBmaWxsPSIjNDQ4NUZGIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 43420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4xMjYgMy40MTg0QzExLjUxOSAyLjc5OTI3IDEyLjQyMjcgMi43OTk3NyAxMi44MTUgMy40MTkzMkwyMi4yODcxIDE4LjM3NjFDMjIuNzA4OCAxOS4wNDE5IDIyLjIzMDQgMTkuOTExMSAyMS40NDIzIDE5LjkxMTFIMi40NzUxNkMxLjY4NjU2IDE5LjkxMTEgMS4yMDgyNiAxOS4wNDA5IDEuNjMwOTEgMTguMzc1MUwxMS4xMjYgMy40MTg0Wk00LjI5NDcxIDE3LjkxMTFMMTkuNjI1NiAxNy45MTExTDExLjk2OTQgNS44MjE3OUw0LjI5NDcxIDE3LjkxMTFaTTEwLjk5OTkgMTQuOTU0NUgxMi45OTk5VjE2Ljk1NDVIMTAuOTk5OVYxNC45NTQ1Wk0xMi45OTk5IDguOTU0NTRIMTAuOTk5OVYxMy45NTQ1SDEyLjk5OTlWOC45NTQ1NFoiIGZpbGw9IiNGRjk5MDAiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 94938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOS4zMzMzIDQuNjY2NjlDMjkuMzMzMyAzLjU2MjEyIDI4LjQzNzkgMi42NjY2OSAyNy4zMzMzIDIuNjY2NjlINC42NjY2N0MzLjU2MjEgMi42NjY2OSAyLjY2NjY3IDMuNTYyMTIgMi42NjY2NyA0LjY2NjY5VjI3LjMzMzRDMi42NjY2NyAyOC40Mzc5IDMuNTYyMSAyOS4zMzM0IDQuNjY2NjcgMjkuMzMzNEgyNy4zMzMzQzI4LjQzNzkgMjkuMzMzNCAyOS4zMzMzIDI4LjQzNzkgMjkuMzMzMyAyNy4zMzM0VjQuNjY2NjlaTTIxLjMzMzMgMTAuMzQzMkwxOS40NDc3IDEyLjIyODhMMjMuMjE5IDE2TDE5LjQ0NzcgMTkuNzcxM0wyMS4zMzMzIDIxLjY1NjlMMjUuMTA0NiAxNy44ODU2TDI2Ljk5MDIgMTZMMjUuMTA0NiAxNC4xMTQ0TDIxLjMzMzMgMTAuMzQzMlpNMTIuNTUyMyAxMi4yMjg4TDEwLjY2NjcgMTAuMzQzMkw2Ljg5NTQ0IDE0LjExNDRMNS4wMDk4MiAxNkw2Ljg5NTQ0IDE3Ljg4NTZMMTAuNjY2NyAyMS42NTY5TDEyLjU1MjMgMTkuNzcxM0w4Ljc4MTA1IDE2TDEyLjU1MjMgMTIuMjI4OFpNMTkuNTMzMSAxMC4xOTE0TDE3LjAyNzIgOS4yNzkzOEwxMi40NjY5IDIxLjgwODZMMTQuOTcyOCAyMi43MjA3TDE5LjUzMzEgMTAuMTkxNFoiIGZpbGw9IiMwMEIwRTIiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 68516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC42NjY3IDBIMTcuMzMzM1Y0LjA3MzI0QzIwLjc0NDggNC40NTAzNiAyMy43MjUzIDYuMjU3NTUgMjUuNjYyIDguODgyMDZMMjkuMTg5NyA2Ljg0NTNMMzAuNTIzMSA5LjE1NDdMMjYuOTk3MyAxMS4xOTAzQzI3LjY0MjIgMTIuNjYyOCAyOCAxNC4yODk2IDI4IDE2QzI4IDE3LjcxMDQgMjcuNjQyMiAxOS4zMzcyIDI2Ljk5NzMgMjAuODA5N0wzMC41MjMxIDIyLjg0NTNMMjkuMTg5NyAyNS4xNTQ3TDI1LjY2MiAyMy4xMTc5QzIzLjcyNTMgMjUuNzQyNCAyMC43NDQ4IDI3LjU0OTYgMTcuMzMzMyAyNy45MjY4VjMySDE0LjY2NjdWMjcuOTI2OEMxMS4yNTUyIDI3LjU0OTYgOC4yNzQ3MyAyNS43NDI0IDYuMzM4MDMgMjMuMTE3OUwyLjgxMDI2IDI1LjE1NDdMMS40NzY5MyAyMi44NDUzTDUuMDAyNzQgMjAuODA5N0M0LjM1Nzg0IDE5LjMzNzIgNCAxNy43MTA0IDQgMTZDNCAxNC4yODk2IDQuMzU3ODQgMTIuNjYyOCA1LjAwMjc0IDExLjE5MDNMMS40NzY5MyA5LjE1NDdMMi44MTAyNiA2Ljg0NTNMNi4zMzgwMyA4Ljg4MjA2QzguMjc0NzMgNi4yNTc1NSAxMS4yNTUyIDQuNDUwMzYgMTQuNjY2NyA0LjA3MzI0VjBaTTI1LjMzMzMgMTZDMjUuMzMzMyAxNy4yMjQ1IDI1LjA5NzUgMTguMzkzOSAyNC42Njg4IDE5LjQ2NTRMMTkuOTMzMyAxNi43MzEzQzE5Ljk3NzEgMTYuNDk0MiAyMCAxNi4yNDk4IDIwIDE2QzIwIDE1Ljc1MDIgMTkuOTc3MSAxNS41MDU4IDE5LjkzMzMgMTUuMjY4N0wyNC42Njg4IDEyLjUzNDZDMjUuMDk3NSAxMy42MDYxIDI1LjMzMzMgMTQuNzc1NSAyNS4zMzMzIDE2Wk0xOC41OTk0IDEyLjk1OTZMMjMuMzMzNyAxMC4yMjYzQzIxLjg4NDcgOC4zODgzMSAxOS43NTk1IDcuMTA4MjIgMTcuMzMzMyA2Ljc2MTE5VjEyLjIyNzZDMTcuODAxNSAxMi4zOTMxIDE4LjIyOTYgMTIuNjQzMiAxOC41OTk0IDEyLjk1OTZaTTE0LjY2NjcgMTIuMjI3NlY2Ljc2MTE5QzEyLjI0MDUgNy4xMDgyMiAxMC4xMTUzIDguMzg4MzEgOC42NjYzMyAxMC4yMjYzTDEzLjQwMDYgMTIuOTU5NkMxMy43NzA0IDEyLjY0MzIgMTQuMTk4NSAxMi4zOTMxIDE0LjY2NjcgMTIuMjI3NlpNMTIuMDY2NyAxNS4yNjg3TDcuMzMxMTYgMTIuNTM0NkM2LjkwMjQ4IDEzLjYwNjEgNi42NjY2NyAxNC43NzU1IDYuNjY2NjcgMTZDNi42NjY2NyAxNy4yMjQ1IDYuOTAyNDggMTguMzkzOSA3LjMzMTE2IDE5LjQ2NTRMMTIuMDY2NyAxNi43MzEzQzEyLjAyMjkgMTYuNDk0MiAxMiAxNi4yNDk4IDEyIDE2QzEyIDE1Ljc1MDIgMTIuMDIyOSAxNS41MDU4IDEyLjA2NjcgMTUuMjY4N1pNMTMuNDAwNiAxOS4wNDA0QzEzLjc3MDQgMTkuMzU2OCAxNC4xOTg1IDE5LjYwNjkgMTQuNjY2NyAxOS43NzI0VjI1LjIzODhDMTIuMjQwNSAyNC44OTE4IDEwLjExNTMgMjMuNjExNyA4LjY2NjMzIDIxLjc3MzdMMTMuNDAwNiAxOS4wNDA0Wk0xNy4zMzMzIDE5Ljc3MjRDMTcuODAxNSAxOS42MDY5IDE4LjIyOTYgMTkuMzU2OCAxOC41OTk0IDE5LjA0MDRMMjMuMzMzNyAyMS43NzM3QzIxLjg4NDcgMjMuNjExNyAxOS43NTk1IDI0Ljg5MTggMTcuMzMzMyAyNS4yMzg4VjE5Ljc3MjRaIiBmaWxsPSIjNDQ4NUZGIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 94521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNS41IDIuMTY2NjlWOS4xNjY2OUg0LjVWMi4xNjY2OUgyNS41Wk00LjUgMTEuNUgyNS41VjE4LjVINC41VjExLjVaTTQuNSAyMC44MzM0VjI3LjgzMzRIMjUuNVYyMC44MzM0SDQuNVpNNi44MzMzMyA0LjUwMDAySDkuMTY2NjdWNi44MzMzNUg2LjgzMzMzVjQuNTAwMDJaTTkuMTY2NjcgMTMuODMzNEg2LjgzMzMzVjE2LjE2NjdIOS4xNjY2N1YxMy44MzM0Wk02LjgzMzMzIDIzLjE2NjdIOS4xNjY2N1YyNS41SDYuODMzMzNWMjMuMTY2N1pNMjMuMTY2NyA0LjUwMDAySDEyLjY2NjdWNi44MzMzNUgyMy4xNjY3VjQuNTAwMDJaTTEyLjY2NjcgMTMuODMzNEgyMy4xNjY3VjE2LjE2NjdIMTIuNjY2N1YxMy44MzM0Wk0yMy4xNjY3IDIzLjE2NjdIMTIuNjY2N1YyNS41SDIzLjE2NjdWMjMuMTY2N1oiIGZpbGw9IiMwMEM1QjEiLz4KPC9zdmc+Cg==");

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