"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[14083],{

/***/ 716:
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
	title: 'ipckey値を確認する',
	description: '1つのサーバーに複数のデータベースをインストールした環境でipckeyを確認する方法を案内します。',
	displayed_sidebar: 'dboracledmaSidebar',
	tags: [
		'Oracle Pro',
		'データベース',
		'エージェント',
		'ipckey'
	],
	pagination_prev: 'oracle-pro/install-agent'
};
const contentTitle = undefined;
const metadata = {
  "id": "oracle-pro/check-ipckey",
  "title": "ipckey値を確認する",
  "description": "1つのサーバーに複数のデータベースをインストールした環境でipckeyを確認する方法を案内します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/oracle-pro/check-ipckey.mdx",
  "sourceDirName": "oracle-pro",
  "slug": "/oracle-pro/check-ipckey",
  "permalink": "/ja/oracle-pro/check-ipckey",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/oracle-pro/check-ipckey.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Oracle Pro",
      "permalink": "/ja/tags/oracle-pro"
    },
    {
      "inline": true,
      "label": "データベース",
      "permalink": "/ja/tags/データベース"
    },
    {
      "inline": true,
      "label": "エージェント",
      "permalink": "/ja/tags/エージェント"
    },
    {
      "inline": true,
      "label": "ipckey",
      "permalink": "/ja/tags/ipckey"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "check-ipckey",
    "title": "ipckey値を確認する",
    "description": "1つのサーバーに複数のデータベースをインストールした環境でipckeyを確認する方法を案内します。",
    "displayed_sidebar": "dboracledmaSidebar",
    "tags": [
      "Oracle Pro",
      "データベース",
      "エージェント",
      "ipckey"
    ],
    "pagination_prev": "oracle-pro/install-agent"
  },
  "sidebar": "dboracledmaSidebar",
  "previous": {
    "title": "エージェントのインストール",
    "permalink": "/ja/oracle-pro/install-agent"
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
      children: ["1つのサーバーに複数のデータベースをインストールした環境で", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ipckey"
      }), "を確認する方法を案内します。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "sysresv"
      }), "コマンドを実行してコンソールに出力する", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Shared Memory:"
      }), "の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "KEY"
      }), "値を使います。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "sysresv"
      }), "コマンドを実行する前に、モニタリング対象に該当するOracleを使用できるようにOracle接続環境変数を設定する必要があります。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["モニタリングエージェントを実行する環境でもOracle接続環境変数を設定する必要があります。 OCI libraryを呼び出すので", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LD_LIBRARY_PATH=$ORACLE_HOME/lib:$LD_LIBRARY_PATH"
      }), "の設定も必要です。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Oracleバージョンによって", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Shared Memory:"
      }), "の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "KEY"
      }), "値がコンソールに出力される場所が異なる場合があります。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
      groupId: "oracle-pro",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "10g",
        label: "10g",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"BASH\" showLineNumbers {6}",
            children: "oracle@localhost:ORA10:/home/oracle/products/10.2.0.2>sysresv\r\n\r\nIPC Resources for ORACLE_SID \"ORA10\" :\r\nShared Memory:\r\nID              KEY\r\n3276807         0xebd3a364\t\t\t<------------- 0xebd3a364\r\nSemaphores:\r\nID              KEY\r\n131073          0x76138448\r\n163842          0x76138449\r\n196611          0x7613844a\r\n229380          0x7613844b\r\n262149          0x7613844c\r\n294918          0x7613844d\r\n327687          0x7613844e\r\n360456          0x7613844f\r\n393225          0x76138450\r\nOracle Instance alive for sid \"ORA10\"\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "11g",
        label: "11g",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"BASH\" showLineNumbers {6}",
            children: "oracle:/home/oracle>sysresv\r\n\r\nIPC Resources for ORACLE_SID \"ORA11\" :\r\nShared Memory:\r\nID              KEY\r\n98304           0xc3122e28\t\t\t<------------ 0xc3122e28\r\nSemaphores:\r\nID              KEY\r\n163840          0x111c2e60\r\nOracle Instance alive for sid \"ORA11\"\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "12c",
        label: "12c",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"BASH\" showLineNumbers {63}",
            children: "oracle:/home/oracle>sysresv\r\n\r\nIPC Resources for ORACLE_SID \"ORA122\" :\r\nMaximum shared memory segment size (shmmax): 18446744073692774399 bytes\r\nTotal system shared memory (shmall): 18446744004990070784 bytes\r\nTotal system shared memory count (shmmni): 4096\r\n*********************** Dumping ipcs output ********************\r\n\r\n------ Message Queues --------\r\nkey        msqid      owner      perms      used-bytes   messages\r\n\r\n------ Shared Memory Segments --------\r\nkey        shmid      owner      perms      bytes      nattch     status\r\n0x0052e2c1 0          postgres   600        56         7\r\n0x005311a1 720897     enterprise 600        56         9\r\n0x5a6abf3f 753666     enterprise 600        6928       9\r\n0x00000000 1179651    oracle     600        8798208    164\r\n0x00000000 1212420    oracle     600        1879048192 84\r\n0x00000000 1245189    oracle     600        7979008    84\r\n0x4ec047f4 1277958    oracle     600        12288      84\r\n0x6a9debe5 819208     enterprise 600        168        1\r\n\r\n------ Semaphore Arrays --------\r\nkey        semid      owner      perms      nsems\r\n0x2e058d0c 1376256    oracle     600        125\r\n0x2e058d0d 1409025    oracle     600        125\r\n0x2e058d0e 1441794    oracle     600        125\r\n0x2e058d0f 1474563    oracle     600        125\r\n0x2e058d10 1507332    oracle     600        125\r\n0x2e058d11 1540101    oracle     600        125\r\n0x2e058d12 1572870    oracle     600        125\r\n0x2e058d13 1605639    oracle     600        125\r\n0x2e058d14 1638408    oracle     600        125\r\n\r\n*********************** End of ipcs command dump **************\r\n\r\n\r\n***************** Dumping Resource Limits(s/h) *****************\r\ncore file size                         0 KB/UNLIMITED\r\ndata seg size                     UNLIMITED/UNLIMITED\r\nscheduling priority                    0 KB/0 KB\r\nfile size                         UNLIMITED/UNLIMITED\r\npending signals                       18 KB/18 KB\r\nmax locked memory                     64 KB/64 KB\r\nmax memory size                   UNLIMITED/UNLIMITED\r\nopen files                             4 KB/4 KB\r\nPOSIX message queues                 800 KB/800 KB\r\nreal-time priority                     0 KB/0 KB\r\nstack size                            32 MB/UNLIMITED\r\ncpu time                          UNLIMITED/UNLIMITED\r\nmax user processes                    18 KB/18 KB\r\nvirtual memory                    UNLIMITED/UNLIMITED\r\nfile locks                        UNLIMITED/UNLIMITED\r\n\r\n***************** End of Resource Limits Dump ******************\r\nMaximum map count configured per process:  65530\r\nTotal /dev/shm size: 2452357120 bytes, used: 147456 bytes\r\nShared Memory:\r\nID              KEY\r\n1212420         0x00000000\r\n1245189         0x00000000\r\n1179651         0x00000000\r\n1277958         0x4ec047f4\t\t\t<------------------   0x4ec047f4\r\nSemaphores:\r\nID              KEY\r\n1376256         0x2e058d0c\r\n1409025         0x2e058d0d\r\n1441794         0x2e058d0e\r\n1474563         0x2e058d0f\r\n1507332         0x2e058d10\r\n1540101         0x2e058d11\r\n1572870         0x2e058d12\r\n1605639         0x2e058d13\r\n1638408         0x2e058d14\r\nOracle Instance alive for sid \"ORA122\"\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "18c",
        label: "18c or later",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"BASH\" showLineNumbers {50}",
            children: "oracle:/home/oracle>sysresv\r\n\r\nIPC Resources for ORACLE_SID \"ORA18\" :\r\nMaximum shared memory segment size (shmmax): 18446744073692774399 bytes\r\nTotal system shared memory (shmall): 18446744004990070784 bytes\r\nTotal system shared memory count (shmmni): 4096\r\n*********************** Dumping ipcs output ********************\r\n\r\n------ Message Queues --------\r\nkey        msqid      owner      perms      used-bytes   messages\r\n\r\n------ Shared Memory Segments --------\r\nkey        shmid      owner      perms      bytes      nattch     status\r\n0x7f30f7d0 65536      oracle     600        8192       74\r\n0x0052e2c1 98305      postgres   600        56         7\r\n\r\n------ Semaphore Arrays --------\r\nkey        semid      owner      perms      nsems\r\n0x4e02e3f8 196608     oracle     600        250\r\n0x4e02e3f9 229377     oracle     600        250\r\n\r\n*********************** End of ipcs command dump **************\r\n\r\n\r\n***************** Dumping Resource Limits(s/h) *****************\r\ncore file size                         0 KB/UNLIMITED\r\ndata seg size                     UNLIMITED/UNLIMITED\r\nscheduling priority                    0 KB/0 KB\r\nfile size                         UNLIMITED/UNLIMITED\r\npending signals                       11 KB/11 KB\r\nmax locked memory                     64 KB/64 KB\r\nmax memory size                   UNLIMITED/UNLIMITED\r\nopen files                             4 KB/4 KB\r\nPOSIX message queues                 800 KB/800 KB\r\nreal-time priority                     0 KB/0 KB\r\nstack size                            32 MB/UNLIMITED\r\ncpu time                          UNLIMITED/UNLIMITED\r\nmax user processes                    11 KB/11 KB\r\nvirtual memory                    UNLIMITED/UNLIMITED\r\nfile locks                        UNLIMITED/UNLIMITED\r\n\r\n***************** End of Resource Limits Dump ******************\r\nMaximum map count configured per process:  65530\r\nTotal /dev/shm size: 737280000 bytes, used: 754982912 bytes\r\nShared Memory:\r\nID              KEY\r\n1               0x????????\r\n2               0x????????\r\n0               0x????????\r\n65536           0x7f30f7d0\t\t\t<--------------- 0x7f30f7d0\r\nSemaphores:\r\nID              KEY\r\n196608          0x4e02e3f8\r\n229377          0x4e02e3f9\n"
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