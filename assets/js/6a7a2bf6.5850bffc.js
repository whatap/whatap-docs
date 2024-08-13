"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[87876],{

/***/ 74242:
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
	id: 'check-ipckey',
	title: 'ipckey 값 확인하기',
	description: '한 서버에 여러 개의 데이터베이스를 설치한 환경에서 ipckey를 확인하는 방법을 안내합니다.',
	displayed_sidebar: 'dboracledmaSidebar',
	keywords: [
		'Oracle Pro',
		'데이터베이스',
		'에이전트',
		'ipckey'
	],
	pagination_prev: 'oracle-pro/install-agent'
};
const contentTitle = undefined;
const metadata = {
  "id": "oracle-pro/check-ipckey",
  "title": "ipckey 값 확인하기",
  "description": "한 서버에 여러 개의 데이터베이스를 설치한 환경에서 ipckey를 확인하는 방법을 안내합니다.",
  "source": "@site/docs/oracle-pro/check-ipckey.mdx",
  "sourceDirName": "oracle-pro",
  "slug": "/oracle-pro/check-ipckey",
  "permalink": "/oracle-pro/check-ipckey",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/oracle-pro/check-ipckey.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "check-ipckey",
    "title": "ipckey 값 확인하기",
    "description": "한 서버에 여러 개의 데이터베이스를 설치한 환경에서 ipckey를 확인하는 방법을 안내합니다.",
    "displayed_sidebar": "dboracledmaSidebar",
    "keywords": [
      "Oracle Pro",
      "데이터베이스",
      "에이전트",
      "ipckey"
    ],
    "pagination_prev": "oracle-pro/install-agent"
  },
  "sidebar": "dboracledmaSidebar",
  "previous": {
    "title": "에이전트 설치",
    "permalink": "/oracle-pro/install-agent"
  }
};
const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {TabItem, Tabs} = _components;
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["한 서버에 여러 개의 데이터베이스를 설치한 환경에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ipckey"
      }), "를 확인하는 방법을 안내합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "sysresv"
      }), " 명령어를 실행해 콘솔에 출력하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Shared Memory:"
      }), "의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "KEY"
      }), " 값을 사용합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "sysresv"
      }), " 명령어를 실행하기 전에 모니터링 대상에 해당하는 Oracle을 사용할 수 있도록 Oracle 접속 환경 변수를 설정해야 합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["모니터링 에이전트를 실행하는 환경에서도 Oracle 접속 환경 변수를 설정해야 합니다. OCI library를 호출 하므로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LD_LIBRARY_PATH=$ORACLE_HOME/lib:$LD_LIBRARY_PATH"
      }), "의 설정도 필요합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Oracle 버전에 따라 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Shared Memory:"
      }), "의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "KEY"
      }), " 값이 콘솔에 출력되는 위치가 다를 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
      groupId: "oracle-pro",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "10g",
        label: "10g",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"BASH\" showLineNumbers {6}",
            children: "oracle@localhost:ORA10:/home/oracle/products/10.2.0.2>sysresv\n\nIPC Resources for ORACLE_SID \"ORA10\" :\nShared Memory:\nID              KEY\n3276807         0xebd3a364\t\t\t<------------- 0xebd3a364\nSemaphores:\nID              KEY\n131073          0x76138448\n163842          0x76138449\n196611          0x7613844a\n229380          0x7613844b\n262149          0x7613844c\n294918          0x7613844d\n327687          0x7613844e\n360456          0x7613844f\n393225          0x76138450\nOracle Instance alive for sid \"ORA10\"\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "11g",
        label: "11g",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"BASH\" showLineNumbers {6}",
            children: "oracle:/home/oracle>sysresv\n\nIPC Resources for ORACLE_SID \"ORA11\" :\nShared Memory:\nID              KEY\n98304           0xc3122e28\t\t\t<------------ 0xc3122e28\nSemaphores:\nID              KEY\n163840          0x111c2e60\nOracle Instance alive for sid \"ORA11\"\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "12c",
        label: "12c",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"BASH\" showLineNumbers {63}",
            children: "oracle:/home/oracle>sysresv\n\nIPC Resources for ORACLE_SID \"ORA122\" :\nMaximum shared memory segment size (shmmax): 18446744073692774399 bytes\nTotal system shared memory (shmall): 18446744004990070784 bytes\nTotal system shared memory count (shmmni): 4096\n*********************** Dumping ipcs output ********************\n\n------ Message Queues --------\nkey        msqid      owner      perms      used-bytes   messages\n\n------ Shared Memory Segments --------\nkey        shmid      owner      perms      bytes      nattch     status\n0x0052e2c1 0          postgres   600        56         7\n0x005311a1 720897     enterprise 600        56         9\n0x5a6abf3f 753666     enterprise 600        6928       9\n0x00000000 1179651    oracle     600        8798208    164\n0x00000000 1212420    oracle     600        1879048192 84\n0x00000000 1245189    oracle     600        7979008    84\n0x4ec047f4 1277958    oracle     600        12288      84\n0x6a9debe5 819208     enterprise 600        168        1\n\n------ Semaphore Arrays --------\nkey        semid      owner      perms      nsems\n0x2e058d0c 1376256    oracle     600        125\n0x2e058d0d 1409025    oracle     600        125\n0x2e058d0e 1441794    oracle     600        125\n0x2e058d0f 1474563    oracle     600        125\n0x2e058d10 1507332    oracle     600        125\n0x2e058d11 1540101    oracle     600        125\n0x2e058d12 1572870    oracle     600        125\n0x2e058d13 1605639    oracle     600        125\n0x2e058d14 1638408    oracle     600        125\n\n*********************** End of ipcs command dump **************\n\n\n***************** Dumping Resource Limits(s/h) *****************\ncore file size                         0 KB/UNLIMITED\ndata seg size                     UNLIMITED/UNLIMITED\nscheduling priority                    0 KB/0 KB\nfile size                         UNLIMITED/UNLIMITED\npending signals                       18 KB/18 KB\nmax locked memory                     64 KB/64 KB\nmax memory size                   UNLIMITED/UNLIMITED\nopen files                             4 KB/4 KB\nPOSIX message queues                 800 KB/800 KB\nreal-time priority                     0 KB/0 KB\nstack size                            32 MB/UNLIMITED\ncpu time                          UNLIMITED/UNLIMITED\nmax user processes                    18 KB/18 KB\nvirtual memory                    UNLIMITED/UNLIMITED\nfile locks                        UNLIMITED/UNLIMITED\n\n***************** End of Resource Limits Dump ******************\nMaximum map count configured per process:  65530\nTotal /dev/shm size: 2452357120 bytes, used: 147456 bytes\nShared Memory:\nID              KEY\n1212420         0x00000000\n1245189         0x00000000\n1179651         0x00000000\n1277958         0x4ec047f4\t\t\t<------------------   0x4ec047f4\nSemaphores:\nID              KEY\n1376256         0x2e058d0c\n1409025         0x2e058d0d\n1441794         0x2e058d0e\n1474563         0x2e058d0f\n1507332         0x2e058d10\n1540101         0x2e058d11\n1572870         0x2e058d12\n1605639         0x2e058d13\n1638408         0x2e058d14\nOracle Instance alive for sid \"ORA122\"\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "18c",
        label: "18c or later",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"BASH\" showLineNumbers {50}",
            children: "oracle:/home/oracle>sysresv\n\nIPC Resources for ORACLE_SID \"ORA18\" :\nMaximum shared memory segment size (shmmax): 18446744073692774399 bytes\nTotal system shared memory (shmall): 18446744004990070784 bytes\nTotal system shared memory count (shmmni): 4096\n*********************** Dumping ipcs output ********************\n\n------ Message Queues --------\nkey        msqid      owner      perms      used-bytes   messages\n\n------ Shared Memory Segments --------\nkey        shmid      owner      perms      bytes      nattch     status\n0x7f30f7d0 65536      oracle     600        8192       74\n0x0052e2c1 98305      postgres   600        56         7\n\n------ Semaphore Arrays --------\nkey        semid      owner      perms      nsems\n0x4e02e3f8 196608     oracle     600        250\n0x4e02e3f9 229377     oracle     600        250\n\n*********************** End of ipcs command dump **************\n\n\n***************** Dumping Resource Limits(s/h) *****************\ncore file size                         0 KB/UNLIMITED\ndata seg size                     UNLIMITED/UNLIMITED\nscheduling priority                    0 KB/0 KB\nfile size                         UNLIMITED/UNLIMITED\npending signals                       11 KB/11 KB\nmax locked memory                     64 KB/64 KB\nmax memory size                   UNLIMITED/UNLIMITED\nopen files                             4 KB/4 KB\nPOSIX message queues                 800 KB/800 KB\nreal-time priority                     0 KB/0 KB\nstack size                            32 MB/UNLIMITED\ncpu time                          UNLIMITED/UNLIMITED\nmax user processes                    11 KB/11 KB\nvirtual memory                    UNLIMITED/UNLIMITED\nfile locks                        UNLIMITED/UNLIMITED\n\n***************** End of Resource Limits Dump ******************\nMaximum map count configured per process:  65530\nTotal /dev/shm size: 737280000 bytes, used: 754982912 bytes\nShared Memory:\nID              KEY\n1               0x????????\n2               0x????????\n0               0x????????\n65536           0x7f30f7d0\t\t\t<--------------- 0x7f30f7d0\nSemaphores:\nID              KEY\n196608          0x4e02e3f8\n229377          0x4e02e3f9\n"
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