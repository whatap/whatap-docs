"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[24525],{

/***/ 38577:
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
	id: 'openapi-call-server-spot',
	title: 'Spot information API',
	description: 'It provides the description of the open API for spot information API (Server).',
	tags: [
		'Open API',
		'API',
		'Spot information API',
		'Server',
		'Server Monitoring'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "apidoc/openapi-call-server-spot",
  "title": "Spot information API",
  "description": "It provides the description of the open API for spot information API (Server).",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/apidoc/openapi-call-server-spot.mdx",
  "sourceDirName": "apidoc",
  "slug": "/apidoc/openapi-call-server-spot",
  "permalink": "/en/apidoc/openapi-call-server-spot",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/apidoc/openapi-call-server-spot.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Open API",
      "permalink": "/en/tags/open-api"
    },
    {
      "inline": true,
      "label": "API",
      "permalink": "/en/tags/api"
    },
    {
      "inline": true,
      "label": "Spot information API",
      "permalink": "/en/tags/spot-information-api"
    },
    {
      "inline": true,
      "label": "Server",
      "permalink": "/en/tags/server"
    },
    {
      "inline": true,
      "label": "Server Monitoring",
      "permalink": "/en/tags/server-monitoring"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "openapi-call-server-spot",
    "title": "Spot information API",
    "description": "It provides the description of the open API for spot information API (Server).",
    "tags": [
      "Open API",
      "API",
      "Spot information API",
      "Server",
      "Server Monitoring"
    ]
  },
  "sidebar": "openapiSidebar",
  "previous": {
    "title": "Viewing the statistical data",
    "permalink": "/en/apidoc/openapi-call-apm-stat-data"
  },
  "next": {
    "title": "Viewing the statistical data",
    "permalink": "/en/apidoc/openapi-call-server-stat-data"
  }
};
const assets = {

};



const toc = [{
  "value": "Active agent count",
  "id": "active-agent-count",
  "level": 2
}, {
  "value": "Inactive agent count",
  "id": "inactive-agent-count",
  "level": 2
}, {
  "value": "Host count",
  "id": "host-count",
  "level": 2
}, {
  "value": "Sum of CPU cores of the host",
  "id": "sum-of-cpu-cores-of-the-host",
  "level": 2
}, {
  "value": "CPU Utilization",
  "id": "cpu-utilization",
  "level": 2
}, {
  "value": "Sum of disk IOPS",
  "id": "sum-of-disk-iops",
  "level": 2
}, {
  "value": "Sum of network traffic (IN/OUT)",
  "id": "sum-of-network-traffic-inout",
  "level": 2
}, {
  "value": "Process status",
  "id": "process-status",
  "level": 2
}, {
  "value": "Server List",
  "id": "server-list",
  "level": 2
}, {
  "value": "Server monitoring details",
  "id": "server-monitoring-details",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "active-agent-count",
        children: "Active agent count"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/open/json/act_agent",
          children: "https://service.whatap.io/open/json/act_agent"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://service.whatap.io/open/json/act_agent\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='Sever monitoring response'",
          children: "{\r\n  \"pname\": \"LOCAL_INFRA\",\r\n  \"values\": \"57.0\"\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "inactive-agent-count",
        children: "Inactive agent count"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/open/json/inact_agent",
          children: "https://service.whatap.io/open/json/inact_agent"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://service.whatap.io/open/json/inact_agent\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"pname\": \"LOCAL_INFRA\",\r\n  \"values\": \"4.0\"\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "host-count",
        children: "Host count"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/open/json/host",
          children: "https://service.whatap.io/open/json/host"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://service.whatap.io/open/json/host\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"pname\": \"LOCAL_INFRA\",\r\n  \"values\":\"57.0\"\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "sum-of-cpu-cores-of-the-host",
        children: "Sum of CPU cores of the host"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/open/json/cpucore",
          children: "https://service.whatap.io/open/json/cpucore"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://service.whatap.io/open/json/cpucore\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"pname\":\"LOCAL_INFRA\",\r\n  \"values\":\"108.0\"\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "cpu-utilization",
        children: "CPU Utilization"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/open/json/infra_cpu",
          children: "https://service.whatap.io/open/json/infra_cpu"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://api.whatap.io/open/json/infra_cpu\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"pname\": \"LOCAL_INFRA\",\r\n  \"values\": {\r\n    \"s-p-gtw-03\": 2.802803,\r\n    \"t-a-yrd-01\": 8.709015,\r\n    (...)\r\n  }\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "sum-of-disk-iops",
        children: "Sum of disk IOPS"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/open/json/infra_disk_iops",
          children: "https://service.whatap.io/open/json/infra_disk_iops"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://service.whatap.io/open/json/infra_disk_iops\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"pname\":\"LOCAL_INFRA\",\r\n  \"values\":{\r\n    \"s-a-yrd-01-1\": {\r\n      \"bps\": 4447.892,\r\n      \"iops\": 0.77481234\r\n    },\r\n    \"h-i-yrd-02\": {\r\n      \"bps\": 6203241.5,\r\n      \"iops\": 396.4099\r\n    },\r\n    (...)\r\n  }\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "sum-of-network-traffic-inout",
        children: "Sum of network traffic (IN/OUT)"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/open/json/infra_net_traffic",
          children: "https://service.whatap.io/open/json/infra_net_traffic"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://service.whatap.io/open/json/infra_net_traffic\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"pname\":\"LOCAL_INFRA\",\r\n  \"values\":{\r\n    \"s-p-gtw-03\": 4487137.014340188,\r\n    \"t-a-yrd-01\": 2500277.566511181,\r\n    (...)\r\n  }\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "process-status",
        children: "Process status"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/open/json/infra_proc",
          children: "https://service.whatap.io/open/json/infra_proc"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://service.whatap.io/open/json/infra_proc\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"pname\":\"LOCAL_INFRA\",\r\n  \"values\":{\r\n    \"s-p-gtw-03\": [\r\n      {\r\n        \"memoryBytes\": 1274269696,\r\n        \"bps\": 819.2,\r\n        \"cmd1\": \"java\",\r\n        \"cpu\": 2.8507125\r\n      },\r\n      {\r\n        \"memoryBytes\": 2895872,\r\n        \"bps\": 0,\r\n        \"cmd1\": \"rsyslogd\",\r\n        \"cpu\": 0\r\n      },\r\n      (...)\r\n    ],\r\n    \"t-a-yrd-01\": [\r\n      {\r\n        \"memoryBytes\": 2583621632,\r\n        \"bps\": 1175961.5,\r\n        \"cmd1\": \"java\",\r\n        \"cpu\": 10.621243\r\n      },\r\n      (...)\r\n    ],\r\n    (...)\r\n  }\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "server-list",
        children: "Server List"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/open/json/sm_servers",
          children: "https://service.whatap.io/open/json/sm_servers"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://service.whatap.io/open/json/sm_servers\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"pname\":\"LOCAL_INFRA\",\r\n  \"values\":[\r\n    {\r\n      \"os.status\": \"ok\",\r\n      \"oname\": \"h-db-prx-01\",\r\n      \"os.name\": \"linux\",\r\n      \"oid\": -1359816680,\r\n      \"isActive\": true\r\n    },\r\n    {\r\n      \"os.status\": \"ok\",\r\n      \"oname\": \"h-db-prx-02\",\r\n      \"os.name\": \"linux\",\r\n      \"oid\": 1745981315,\r\n      \"isActive\": true\r\n    },\r\n    (...)\r\n  ]\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "server-monitoring-details",
        children: "Server monitoring details"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "apitype",
          children: "GET"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://service.whatap.io/open/json/sm",
          children: "https://service.whatap.io/open/json/sm"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='command'",
          children: "$ curl -w \"\\n\" -H \"x-whatap-token: {{PROJECT API TOKEN}}\" -H \"x-whatap-pcode: {{projectCode}}\" \"https://service.whatap.io/open/json/sm\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-json",
          metastring: "title='response'",
          children: "{\r\n  \"pname\":\"LOCAL_INFRA\",\r\n  \"values\":{\r\n    \"servers\": [\r\n      {\r\n        \"public_ip\": \"192.168.0.1\",\r\n        \"os_cpuvendor\": \"Intel(R) Xeon(R) CPU E5-2640 v3 @ 2.60GHz\",\r\n        \"agent_created\": \"49572130779\",\r\n        \"ip\": \"127.0.0.1,10.128.0.1\",\r\n        \"os_arch\": \"amd64\",\r\n        \"actTime\": 1570672662216,\r\n        \"cpu_cores\": \"1\",\r\n        \"oid\": -1359816680,\r\n        \"isActive\": true,\r\n        \"version\": \"1.2.5\",\r\n        \"tags\": [\r\n          \"gateway\",\r\n          \"python\",\r\n          \"network:10.0.0.0/8\",\r\n          \"@PRX\"\r\n        ],\r\n        \"inactTime\": 0,\r\n        \"oname\": \"h-db-prx-01\",\r\n        \"os_name\": \"linux\",\r\n        \"startTime\": 1570672662000,\r\n        \"os_memory\": \"2088476672\",\r\n        \"os_status\": \"ok\",\r\n        \"snapshot\": {\r\n          \"disk\": {\r\n            \"/boot\": {\r\n              \"writeIops\": 0,\r\n              \"fileSystem\": \"ext4\",\r\n              \"mountPoint\": \"/boot\",\r\n              \"queueLength\": 0,\r\n              \"usedSpace\": 58863616,\r\n              \"blksize\": 4096,\r\n              \"freeSpace\": 841175040,\r\n              \"display\": true,\r\n              \"count\": 1,\r\n              \"readBps\": 0,\r\n              \"totalSpace\": 966778880,\r\n              \"ioPercent\": 0,\r\n              \"mountOption\": \"rw,relatime\",\r\n              \"deviceId\": \"/dev/sda1\",\r\n              \"usedPercent\": 6.540122985839844,\r\n              \"freePercent\": 93.45987701416016,\r\n              \"writeBps\": 0,\r\n              \"readIops\": 0\r\n            },\r\n            \"/home\": {\r\n              \"writeIops\": 0,\r\n              \"fileSystem\": \"ext4\",\r\n              \"mountPoint\": \"/home\",\r\n              \"queueLength\": 0,\r\n              \"usedSpace\": 1670574080,\r\n              \"blksize\": 4096,\r\n              \"freeSpace\": 69533446144,\r\n              \"display\": true,\r\n              \"count\": 1,\r\n              \"readBps\": 0,\r\n              \"totalSpace\": 75039498240,\r\n              \"ioPercent\": 0,\r\n              \"mountOption\": \"rw,relatime\",\r\n              \"deviceId\": \"/dev/sda3\",\r\n              \"usedPercent\": 2.3461761474609375,\r\n              \"freePercent\": 97.65382385253906,\r\n              \"writeBps\": 0,\r\n              \"readIops\": 0\r\n            },\r\n            \"/\": {\r\n              \"writeIops\": 0,\r\n              \"fileSystem\": \"ext4\",\r\n              \"mountPoint\": \"/\",\r\n              \"queueLength\": 0,\r\n              \"usedSpace\": 5079060480,\r\n              \"blksize\": 4096,\r\n              \"freeSpace\": 22798901248,\r\n              \"display\": true,\r\n              \"count\": 1,\r\n              \"readBps\": 0,\r\n              \"totalSpace\": 29394726912,\r\n              \"ioPercent\": 0,\r\n              \"mountOption\": \"rw,relatime\",\r\n              \"deviceId\": \"/dev/sda2\",\r\n              \"usedPercent\": 18.218902587890625,\r\n              \"freePercent\": 81.78109741210938,\r\n              \"writeBps\": 0,\r\n              \"readIops\": 0\r\n            }\r\n          },\r\n          \"memory\": {\r\n            \"shared\": 21590016,\r\n            \"swapused\": 0,\r\n            \"buffers\": 182550528,\r\n            \"available\": 1746370560,\r\n            \"swaptotal\": 0,\r\n            \"used\": 342106112,\r\n            \"pused\": 16.380653381347656,\r\n            \"slab\": 85729280,\r\n            \"total\": 2088476672,\r\n            \"sunreclaim\": 23261184,\r\n            \"cached\": 521756672,\r\n            \"pavailable\": 83.61934661865234,\r\n            \"pagefaults\": 0,\r\n            \"sreclaimable\": 62468096,\r\n            \"free\": 1167208448,\r\n            \"swappused\": 0\r\n          },\r\n          \"cpu\": {\r\n            \"softirq\": 0,\r\n            \"usr\": 0,\r\n            \"idle\": 100,\r\n            \"steal\": 0,\r\n            \"irq\": 0,\r\n            \"load5\": 0,\r\n            \"iowait\": 0,\r\n            \"sys\": 0,\r\n            \"nice\": 0,\r\n            \"load1\": 0,\r\n            \"load15\": 0\r\n          },\r\n          \"open_filedescriptors\": 249,\r\n          \"netstat\": {\r\n            \"established\": 1,\r\n            \"syn_sent\": 1,\r\n            \"syn_recv\": 0,\r\n            \"closing\": 0,\r\n            \"time_wait\": 19,\r\n            \"last_ack\": 0,\r\n            \"fin_wait1\": 0,\r\n            \"close_wait\": 0,\r\n            \"fin_wait2\": 0,\r\n            \"listen\": 3,\r\n            \"unknown\": 0\r\n          },\r\n          \"uptime\": 16313689,\r\n          \"network\": {\r\n            \"lo\": {\r\n              \"errorOut\": 0,\r\n              \"packetOut\": 0.3991734786600438,\r\n              \"trafficIn\": 281.0181289766709,\r\n              \"trafficOut\": 281.0181289766709,\r\n              \"hwAddr\": \"\",\r\n              \"errorIn\": 0,\r\n              \"ip\": \"127.0.0.1\",\r\n              \"count\": 1,\r\n              \"droppedIn\": 0,\r\n              \"droppedOut\": 0,\r\n              \"packetIn\": 0.3991734786600438,\r\n              \"desc\": \"lo\"\r\n            },\r\n            \"eth0\": {\r\n              \"errorOut\": 0,\r\n              \"packetOut\": 8.1830563125309,\r\n              \"trafficIn\": 11314.173079140282,\r\n              \"trafficOut\": 19447.731880317337,\r\n              \"hwAddr\": \"00:1d:d8:b7:87:18\",\r\n              \"errorIn\": 0,\r\n              \"ip\": \"10.128.112.133\",\r\n              \"count\": 1,\r\n              \"droppedIn\": 0,\r\n              \"droppedOut\": 0,\r\n              \"packetIn\": 24.549168937592693,\r\n              \"desc\": \"eth0\"\r\n            }\r\n          }\r\n        }\r\n      },\r\n      (...)\r\n    ],\r\n    \"max\": {\r\n      \"disk\": {\r\n        \"writeIops\": 240.9893,\r\n        \"usedPercent\": 94.38699,\r\n        \"freePercent\": 100,\r\n        \"usedSpace\": 2.46495681E+12,\r\n        \"freeSpace\": 0,\r\n        \"writeBps\": 2917852,\r\n        \"readBps\": 118646.15,\r\n        \"readIops\": 75.80727,\r\n        \"totalSpace\": 9.223372E+18,\r\n        \"ioPercent\": 100,\r\n        \"freespace\": 1.58926471E+11\r\n      },\r\n      \"nic\": {\r\n        \"errorOut\": 0,\r\n        \"packetOut\": 2175.8743,\r\n        \"trafficIn\": 4856648,\r\n        \"trafficOut\": 2503208.8,\r\n        \"errorIn\": 1,\r\n        \"droppedIn\": 1,\r\n        \"droppedOut\": 0,\r\n        \"packetIn\": 2175.8743\r\n      },\r\n      \"compound_eye_traffic\": 1000000000\r\n    },\r\n    \"count\": {\r\n      \"total\": 14,\r\n      \"paused\": 0,\r\n      \"inactive\": 0,\r\n      \"warning\": 1,\r\n      \"ok\": 13,\r\n      \"close\": 0,\r\n      \"fatal\": 0\r\n    },\r\n    \"tags\": {\r\n      (...)\r\n    }\r\n  }\r\n}\n"
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