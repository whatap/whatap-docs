"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[25845],{

/***/ 56320:
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
	title: 'Spot情報照会',
	description: 'Spot情報検索(Server)のOpenAPIについて説明します。',
	tags: [
		'Open API',
		'API',
		'Spot情報照会',
		'Server',
		'Serverモニタリング'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "apidoc/openapi-call-server-spot",
  "title": "Spot情報照会",
  "description": "Spot情報検索(Server)のOpenAPIについて説明します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/apidoc/openapi-call-server-spot.mdx",
  "sourceDirName": "apidoc",
  "slug": "/apidoc/openapi-call-server-spot",
  "permalink": "/ja/apidoc/openapi-call-server-spot",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/apidoc/openapi-call-server-spot.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Open API",
      "permalink": "/ja/tags/open-api"
    },
    {
      "inline": true,
      "label": "API",
      "permalink": "/ja/tags/api"
    },
    {
      "inline": true,
      "label": "Spot情報照会",
      "permalink": "/ja/tags/spot情報照会"
    },
    {
      "inline": true,
      "label": "Server",
      "permalink": "/ja/tags/server"
    },
    {
      "inline": true,
      "label": "Serverモニタリング",
      "permalink": "/ja/tags/serverモニタリング"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "openapi-call-server-spot",
    "title": "Spot情報照会",
    "description": "Spot情報検索(Server)のOpenAPIについて説明します。",
    "tags": [
      "Open API",
      "API",
      "Spot情報照会",
      "Server",
      "Serverモニタリング"
    ]
  },
  "sidebar": "openapiSidebar",
  "previous": {
    "title": "統計データの参照",
    "permalink": "/ja/apidoc/openapi-call-apm-stat-data"
  },
  "next": {
    "title": "統計データの参照",
    "permalink": "/ja/apidoc/openapi-call-server-stat-data"
  }
};
const assets = {

};



const toc = [{
  "value": "活性化状態のエージェント数",
  "id": "活性化状態のエージェント数",
  "level": 2
}, {
  "value": "非活性化状態のエージェント数",
  "id": "非活性化状態のエージェント数",
  "level": 2
}, {
  "value": "ホスト(HOST) 数",
  "id": "ホストhost-数",
  "level": 2
}, {
  "value": "ホストCPUコアの合計",
  "id": "ホストcpuコアの合計",
  "level": 2
}, {
  "value": "CPU使用率",
  "id": "cpu使用率",
  "level": 2
}, {
  "value": "ディスクIOPSの合計",
  "id": "ディスクiopsの合計",
  "level": 2
}, {
  "value": "ネットワークトラフィック（IN／OUT）の合計",
  "id": "ネットワークトラフィックinoutの合計",
  "level": 2
}, {
  "value": "プロセス状況",
  "id": "プロセス状況",
  "level": 2
}, {
  "value": "サーバーリスト",
  "id": "サーバーリスト",
  "level": 2
}, {
  "value": "サーバーモニタリングの詳細",
  "id": "サーバーモニタリングの詳細",
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
        id: "活性化状態のエージェント数",
        children: "活性化状態のエージェント数"
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
          children: "{\n  \"pname\": \"LOCAL_INFRA\",\n  \"values\": \"57.0\"\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "非活性化状態のエージェント数",
        children: "非活性化状態のエージェント数"
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
          children: "{\n  \"pname\": \"LOCAL_INFRA\",\n  \"values\": \"4.0\"\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "ホストhost-数",
        children: "ホスト(HOST) 数"
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
          children: "{\n  \"pname\": \"LOCAL_INFRA\",\n  \"values\":\"57.0\"\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "ホストcpuコアの合計",
        children: "ホストCPUコアの合計"
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
          children: "{\n  \"pname\":\"LOCAL_INFRA\",\n  \"values\":\"108.0\"\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "cpu使用率",
        children: "CPU使用率"
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
          children: "{\n  \"pname\": \"LOCAL_INFRA\",\n  \"values\": {\n    \"s-p-gtw-03\": 2.802803,\n    \"t-a-yrd-01\": 8.709015,\n    (...)\n  }\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "ディスクiopsの合計",
        children: "ディスクIOPSの合計"
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
          children: "{\n  \"pname\":\"LOCAL_INFRA\",\n  \"values\":{\n    \"s-a-yrd-01-1\": {\n      \"bps\": 4447.892,\n      \"iops\": 0.77481234\n    },\n    \"h-i-yrd-02\": {\n      \"bps\": 6203241.5,\n      \"iops\": 396.4099\n    },\n    (...)\n  }\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "ネットワークトラフィックinoutの合計",
        children: "ネットワークトラフィック（IN／OUT）の合計"
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
          children: "{\n  \"pname\":\"LOCAL_INFRA\",\n  \"values\":{\n    \"s-p-gtw-03\": 4487137.014340188,\n    \"t-a-yrd-01\": 2500277.566511181,\n    (...)\n  }\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "プロセス状況",
        children: "プロセス状況"
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
          children: "{\n  \"pname\":\"LOCAL_INFRA\",\n  \"values\":{\n    \"s-p-gtw-03\": [\n      {\n        \"memoryBytes\": 1274269696,\n        \"bps\": 819.2,\n        \"cmd1\": \"java\",\n        \"cpu\": 2.8507125\n      },\n      {\n        \"memoryBytes\": 2895872,\n        \"bps\": 0,\n        \"cmd1\": \"rsyslogd\",\n        \"cpu\": 0\n      },\n      (...)\n    ],\n    \"t-a-yrd-01\": [\n      {\n        \"memoryBytes\": 2583621632,\n        \"bps\": 1175961.5,\n        \"cmd1\": \"java\",\n        \"cpu\": 10.621243\n      },\n      (...)\n    ],\n    (...)\n  }\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "サーバーリスト",
        children: "サーバーリスト"
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
          children: "{\n  \"pname\":\"LOCAL_INFRA\",\n  \"values\":[\n    {\n      \"os.status\": \"ok\",\n      \"oname\": \"h-db-prx-01\",\n      \"os.name\": \"linux\",\n      \"oid\": -1359816680,\n      \"isActive\": true\n    },\n    {\n      \"os.status\": \"ok\",\n      \"oname\": \"h-db-prx-02\",\n      \"os.name\": \"linux\",\n      \"oid\": 1745981315,\n      \"isActive\": true\n    },\n    (...)\n  ]\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "サーバーモニタリングの詳細",
        children: "サーバーモニタリングの詳細"
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
          children: "{\n  \"pname\":\"LOCAL_INFRA\",\n  \"values\":{\n    \"servers\": [\n      {\n        \"public_ip\": \"192.168.0.1\",\n        \"os_cpuvendor\": \"Intel(R) Xeon(R) CPU E5-2640 v3 @ 2.60GHz\",\n        \"agent_created\": \"49572130779\",\n        \"ip\": \"127.0.0.1,10.128.0.1\",\n        \"os_arch\": \"amd64\",\n        \"actTime\": 1570672662216,\n        \"cpu_cores\": \"1\",\n        \"oid\": -1359816680,\n        \"isActive\": true,\n        \"version\": \"1.2.5\",\n        \"tags\": [\n          \"gateway\",\n          \"python\",\n          \"network:10.0.0.0/8\",\n          \"@PRX\"\n        ],\n        \"inactTime\": 0,\n        \"oname\": \"h-db-prx-01\",\n        \"os_name\": \"linux\",\n        \"startTime\": 1570672662000,\n        \"os_memory\": \"2088476672\",\n        \"os_status\": \"ok\",\n        \"snapshot\": {\n          \"disk\": {\n            \"/boot\": {\n              \"writeIops\": 0,\n              \"fileSystem\": \"ext4\",\n              \"mountPoint\": \"/boot\",\n              \"queueLength\": 0,\n              \"usedSpace\": 58863616,\n              \"blksize\": 4096,\n              \"freeSpace\": 841175040,\n              \"display\": true,\n              \"count\": 1,\n              \"readBps\": 0,\n              \"totalSpace\": 966778880,\n              \"ioPercent\": 0,\n              \"mountOption\": \"rw,relatime\",\n              \"deviceId\": \"/dev/sda1\",\n              \"usedPercent\": 6.540122985839844,\n              \"freePercent\": 93.45987701416016,\n              \"writeBps\": 0,\n              \"readIops\": 0\n            },\n            \"/home\": {\n              \"writeIops\": 0,\n              \"fileSystem\": \"ext4\",\n              \"mountPoint\": \"/home\",\n              \"queueLength\": 0,\n              \"usedSpace\": 1670574080,\n              \"blksize\": 4096,\n              \"freeSpace\": 69533446144,\n              \"display\": true,\n              \"count\": 1,\n              \"readBps\": 0,\n              \"totalSpace\": 75039498240,\n              \"ioPercent\": 0,\n              \"mountOption\": \"rw,relatime\",\n              \"deviceId\": \"/dev/sda3\",\n              \"usedPercent\": 2.3461761474609375,\n              \"freePercent\": 97.65382385253906,\n              \"writeBps\": 0,\n              \"readIops\": 0\n            },\n            \"/\": {\n              \"writeIops\": 0,\n              \"fileSystem\": \"ext4\",\n              \"mountPoint\": \"/\",\n              \"queueLength\": 0,\n              \"usedSpace\": 5079060480,\n              \"blksize\": 4096,\n              \"freeSpace\": 22798901248,\n              \"display\": true,\n              \"count\": 1,\n              \"readBps\": 0,\n              \"totalSpace\": 29394726912,\n              \"ioPercent\": 0,\n              \"mountOption\": \"rw,relatime\",\n              \"deviceId\": \"/dev/sda2\",\n              \"usedPercent\": 18.218902587890625,\n              \"freePercent\": 81.78109741210938,\n              \"writeBps\": 0,\n              \"readIops\": 0\n            }\n          },\n          \"memory\": {\n            \"shared\": 21590016,\n            \"swapused\": 0,\n            \"buffers\": 182550528,\n            \"available\": 1746370560,\n            \"swaptotal\": 0,\n            \"used\": 342106112,\n            \"pused\": 16.380653381347656,\n            \"slab\": 85729280,\n            \"total\": 2088476672,\n            \"sunreclaim\": 23261184,\n            \"cached\": 521756672,\n            \"pavailable\": 83.61934661865234,\n            \"pagefaults\": 0,\n            \"sreclaimable\": 62468096,\n            \"free\": 1167208448,\n            \"swappused\": 0\n          },\n          \"cpu\": {\n            \"softirq\": 0,\n            \"usr\": 0,\n            \"idle\": 100,\n            \"steal\": 0,\n            \"irq\": 0,\n            \"load5\": 0,\n            \"iowait\": 0,\n            \"sys\": 0,\n            \"nice\": 0,\n            \"load1\": 0,\n            \"load15\": 0\n          },\n          \"open_filedescriptors\": 249,\n          \"netstat\": {\n            \"established\": 1,\n            \"syn_sent\": 1,\n            \"syn_recv\": 0,\n            \"closing\": 0,\n            \"time_wait\": 19,\n            \"last_ack\": 0,\n            \"fin_wait1\": 0,\n            \"close_wait\": 0,\n            \"fin_wait2\": 0,\n            \"listen\": 3,\n            \"unknown\": 0\n          },\n          \"uptime\": 16313689,\n          \"network\": {\n            \"lo\": {\n              \"errorOut\": 0,\n              \"packetOut\": 0.3991734786600438,\n              \"trafficIn\": 281.0181289766709,\n              \"trafficOut\": 281.0181289766709,\n              \"hwAddr\": \"\",\n              \"errorIn\": 0,\n              \"ip\": \"127.0.0.1\",\n              \"count\": 1,\n              \"droppedIn\": 0,\n              \"droppedOut\": 0,\n              \"packetIn\": 0.3991734786600438,\n              \"desc\": \"lo\"\n            },\n            \"eth0\": {\n              \"errorOut\": 0,\n              \"packetOut\": 8.1830563125309,\n              \"trafficIn\": 11314.173079140282,\n              \"trafficOut\": 19447.731880317337,\n              \"hwAddr\": \"00:1d:d8:b7:87:18\",\n              \"errorIn\": 0,\n              \"ip\": \"10.128.112.133\",\n              \"count\": 1,\n              \"droppedIn\": 0,\n              \"droppedOut\": 0,\n              \"packetIn\": 24.549168937592693,\n              \"desc\": \"eth0\"\n            }\n          }\n        }\n      },\n      (...)\n    ],\n    \"max\": {\n      \"disk\": {\n        \"writeIops\": 240.9893,\n        \"usedPercent\": 94.38699,\n        \"freePercent\": 100,\n        \"usedSpace\": 2.46495681E+12,\n        \"freeSpace\": 0,\n        \"writeBps\": 2917852,\n        \"readBps\": 118646.15,\n        \"readIops\": 75.80727,\n        \"totalSpace\": 9.223372E+18,\n        \"ioPercent\": 100,\n        \"freespace\": 1.58926471E+11\n      },\n      \"nic\": {\n        \"errorOut\": 0,\n        \"packetOut\": 2175.8743,\n        \"trafficIn\": 4856648,\n        \"trafficOut\": 2503208.8,\n        \"errorIn\": 1,\n        \"droppedIn\": 1,\n        \"droppedOut\": 0,\n        \"packetIn\": 2175.8743\n      },\n      \"compound_eye_traffic\": 1000000000\n    },\n    \"count\": {\n      \"total\": 14,\n      \"paused\": 0,\n      \"inactive\": 0,\n      \"warning\": 1,\n      \"ok\": 13,\n      \"close\": 0,\n      \"fatal\": 0\n    },\n    \"tags\": {\n      (...)\n    }\n  }\n}\n"
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