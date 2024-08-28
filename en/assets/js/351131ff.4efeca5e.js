"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[89053],{

/***/ 86831:
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
	id: 'about-instance-performance-analysis',
	title: 'Using the Instance Performance Management',
	description: 'The following provides the main features and usage examples of the Instance Performance Management menu among the application monitoring menus.',
	keywords: [
		'Application',
		'Application Monitoring',
		'APM',
		'Instance Performance Management'
	],
	toc_max_heading_level: 2,
	displayed_sidebar: 'learningSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "best-practice-guides/about-instance-performance-analysis",
  "title": "Using the Instance Performance Management",
  "description": "The following provides the main features and usage examples of the Instance Performance Management menu among the application monitoring menus.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/best-practice-guides/about-instance-performance-analysis.mdx",
  "sourceDirName": "best-practice-guides",
  "slug": "/best-practice-guides/about-instance-performance-analysis",
  "permalink": "/en/best-practice-guides/about-instance-performance-analysis",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/best-practice-guides/about-instance-performance-analysis.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "about-instance-performance-analysis",
    "title": "Using the Instance Performance Management",
    "description": "The following provides the main features and usage examples of the Instance Performance Management menu among the application monitoring menus.",
    "keywords": [
      "Application",
      "Application Monitoring",
      "APM",
      "Instance Performance Management"
    ],
    "toc_max_heading_level": 2,
    "displayed_sidebar": "learningSidebar",
    "isTranslationMissing": false
  },
  "sidebar": "learningSidebar",
  "previous": {
    "title": "데이터베이스",
    "permalink": "/en/best-practice-guides/set-db-metric-warning-notice"
  },
  "next": {
    "title": "Using the TCP port monitoring",
    "permalink": "/en/best-practice-guides/about-tcp-port"
  }
};
const assets = {

};

/*예를 들어 새로운 서비스 패턴 지정으로 추가적인 트랜잭션 시작점을 설정하여 응답 시간을 측정하는 등 트레이스 및 후킹과 관련된 와탭 설정 변경 시 해당 클래스를 목록에서 찾아 ![수정 아이콘](/img/ico-edit.svg) <Cmdname sid="redefine" className="uitext" />를 클릭하세요.*/
/*해당 기능을 선택 해 재정의

The redefine function for redefinition

You can modify already loaded classes to specify new service patterns and set additional transaction start points. This allows you to trace the response times.

서비스 패턴을 새로 지정해 새로운 트랜잭션 시작점을 설정하여 응답시간을 추적하고자 할 때*/
/*으로 클래스간 충돌 방지, 디버깅, 성능 최적화 등을 도울 수 있습니다.*/
/*\* **클래스 충돌 방지**

The same class can exist in multiple *jar* files with different versions of third-party libraries. You can prevent class conflicts by identifying duplicate classes, adjusting priorities, explicitly excluding conflicting *jar* files, or including specific files.*/
/*
At this point, you can avoid class conflicts by checking which *jar* file the class has been loaded from. It prevents the same class from being loaded from multiple *jar* files.
If the same class exists in multiple *jar* files (e.g. loading different versions of third party libraries), you can avoid class conflicts by checking which *jar* file the class was loaded from.*/
/*\* **디버깅**

Unexpected behavior or bug may occur if a specific class was loaded from the unintended *jar* file. This can make debugging easier, especially in complex classpaths or multi-module environments, by allowing you to see exactly which path a module was loaded from.*/
/*\* **성능 최적화**

Class loading may cause the performance issues. After checking which *jar* files are overloading classes, you can optimize the loading time of the class by adjusting the class path so that the *jar* files containing frequently used classes can be loaded from appropriate locations.*/
/*
You can optimize the performance by checking from which *jar* files classes are being overloaded.
If you are experiencing performance issues when loading classes, you can manage the performance by finding which *jar* file overloads classes.*/
/*자바 애플리케이션의 다계층 구조 특성상 <Cmdname sid="resource" className="uitext" /> 정보 확인이 필요합니다.*/
/*스레드 목록을 보고 하는 중요한 행위-> 스레드 cpu 누적 시간 보여줌 -> 시계열 정보 확인 가능하다는 얘기를 추가하기*/
/*:::note

The thread in the example may have tried to get elements from the `RequestQueue`, and an exception occurs, causing `wait` to be called. Use the snapshot information to determine what caused the wait state.

- Check the line 58 of the `RequestQueue.get` method to see under which conditions the `wait` is called.

- Check the line 54 of the `ZipSendProxyThread.run` method to see under which situations the `RequestQueue.get` method is called.

:::*/
/*

Finding out which threads are using a lot of CPU or which threads are blocked

You can identify which threads are using a lot of CPU or which threads are blocked, thereby identifying the cause of the bottleneck. After specifying a thread, you can use the thread snapshot to find frequently called or long-running methods.*/
/*### 증가량

![Thread List/Dump](/img/best-p/about-instance-thread-list-dump1.png)

![스레드 목록/덤프 델타값](/img/best-p/about-instance-thread-list-dump2.png)*/
/*## 소켓 오픈 개수 {#advanced-use-opened-socket-count}*/
/*이때 가장 먼저 확인하는 것은 식별이 용이한 힙 메모리입니다. If the heap memory is full, the JVM performs GC frequently, which may cause CPU usage to spike. ~~Especially when a full GC occurs, the application temporarily stops operation and the CPU usage increases significantly. For example, if the application has a memory leak where objects are not properly freed and are occupying memory, you may run out of heap memory, and at this time, the JVM repeatedly run GC to reclaim memory, which can cause the CPU usage to increase rapidly. ~~ In this case, you can easily check it through the <Cmdname sid="AA010" className="uitext" /> graph of <Cmdname sid="application_dashboard" className="uitext" />.

If there are lots of requests actually where the applications process a large number of client requests, it results in high CPU usage. Each request is processed by creating a Java thread, causing the CPU to perform a lot of work. ~~An example is to be a large-scale discount event on a shopping mall site that results in a spike in web surfer traffic. When a large number of users visit a website, the server generates many threads to process a large number of HTTP requests, which significantly increases the CPU usage. ~~ In this case, you can see the situation through the TPS metrics in <Cmdname sid="application_dashboard" className="uitext" />.

The third is the case when the problem is caused by a wrong code logic. If the application code contains inefficient algorithms or infinite loops, it may abnormally result in a high CPU usage. In this case, you can specify the thread with high CPU usage through the <Cmdname sid="side_threadList" className="uitext" /> menu and then check the thread dump to find the problematic code.*/


const toc = [{
  "value": "Loaded Classes",
  "id": "advanced-use-loaded-classes",
  "level": 2
}, {
  "value": "Redefine",
  "id": "redefine",
  "level": 4
}, {
  "value": "Resources",
  "id": "resources",
  "level": 4
}, {
  "value": "Thread List/Dump",
  "id": "advanced-use-thread-list-dump",
  "level": 2
}, {
  "value": "Checking the threads with high CPU usage",
  "id": "checking-the-threads-with-high-cpu-usage",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h4: "h4",
    img: "img",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " menu provides useful features for checking the application environment and managing its performance. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " provides detailed information on frequently used main menus and usage examples as follows."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "advanced-use-loaded-classes",
        children: "Loaded Classes"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Home > Select Project > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_agentsConfiguration",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_loadedClasses",
          className: "uitext"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_loadedClasses",
          className: "uitext"
        }), " menu provides detailed information about the structure and method signatures for the classes loaded into the application, and also provides the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), " feature to allow uninterrupted changes to class behaviors."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "redefine",
        children: "Redefine"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), " allows you to change the behaviors of classes loaded at runtime without stopping the application by calling the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "redefineClasses"
        }), " method of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Instrumentation"
        }), ". It is useful if you need to make modifications or changes to the running service. For example, when setting an additional transaction start point and measure the response time by specifying a new service pattern, you can find the class in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_loadedClasses",
          className: "uitext"
        }), " list after changing the related WhaTab settings and then click the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Edit icon",
          src: (__webpack_require__(63582)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " icon for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), "."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "/best-p/about-instance-loaded-class1.png",
        desc: "Loaded Classes redefine"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "resources",
        children: "Resources"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["You can view which file the class was physically loaded from through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "resource",
          className: "uitext"
        }), " column. Due to the multi-layered nature of Java applications, it is required to check information like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "resource",
          className: "uitext"
        }), ". In complex application environments, it is important to identify exactly which ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "jar"
        }), " file a class was loaded from."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Unexpected behavior or bug may occur if a specific class was loaded from the unintended ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "jar"
        }), " file. This can make debugging easier, especially in complex classpaths or multi-module environments, by allowing you to see exactly which path a module was loaded from."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "advanced-use-thread-list-dump",
        children: "Thread List/Dump"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Home > Select Project > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_agentsConfiguration",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), " menu allows you to check a list of running threads and view individual snapshots and a full thread dump for those threads. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "hitmap",
          className: "uitext"
        }), " is the core of transaction response time-oriented optimization, while ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), " is the core element of CPU optimization, which plays an important role in optimizing the application performance, diagnosing problems, and maintaining stability."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Determining which threads are using a lot of CPU is important for identifying the cause of the bottleneck. In particular, you must be able to query the time series data to identify threads that have spikes in CPU usage during a specific period. In ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "thread_cpu_time",
          className: "uitext"
        }), " means the total accumulated time that the thread has occupied the CPU. Upon ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Refresh"
          })
        }), ", the difference between the current thread CPU time and the previous thread CPU time, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08126",
          className: "uitext"
        }), " is provided, allowing you to identify the thread using the most CPU at the time of query. Click the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08126",
          className: "uitext"
        }), " column to sort in descending order to see the thread with the highest growth."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "/best-p/about-instance-thread-list-dump3.png",
        desc: "Thread List/Dump delta values"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "After specifying a thread in this manner, you can check the thread snapshot to find frequently called or long-running methods. This allows early detection and response to abnormal signs, for stable management of the system."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "/best-p/about-instance-thread-list-dump4.png",
        desc: "Thread List/Dump each thread dump"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "checking-the-threads-with-high-cpu-usage",
        children: "Checking the threads with high CPU usage"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "A spike in application CPU usage could be due to various causes. We can categorize these issues into three types: in case the heap memory is full, in case there are lots of requests, and in case there is a logic problem."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["At this time, the first thing to check is the heap memory that is easy to identify. If the heap memory is full, the JVM performs GC frequently, which may cause CPU usage to spike. In this case, you can easily check it through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "AA010",
          className: "uitext"
        }), " graph of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "application_dashboard",
          className: "uitext"
        }), ". If there are lots of requests actually where the applications process a large number of client requests, it results in high CPU usage. Each request is processed by creating a Java thread, causing the CPU to perform a lot of work. In this case, you can check through the TPS-related metrics in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "application_dashboard",
          className: "uitext"
        }), "."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["If the application code contains inefficient algorithms or infinite loops, it may abnormally result in a high CPU usage. In this case, you can specify the thread with high CPU usage through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), " menu and then check the thread dump to find the problematic code."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Check ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "thread_cpu_time",
            className: "uitext"
          }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "refresh",
            className: "uitext"
          }), " → Sort the list by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL08126",
            className: "uitext"
          }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Identify threads with high CPU usage"
          })]
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

/***/ 63582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZWRpdDwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OC4wMDAwMDAsIC0xMzk1LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iZWRpdG9yLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDEzNTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtZWRpdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguMDAwMDAwLCA0NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLDE4IEwyMCwyMCBMMCwyMCBMMCwxOCBMMjAsMTggWiBNMTIuOTM5MzM5OCwxIEwxNy45MzMyMTA4LDYuMDA2NDA3NzggTDE3LjkwMSw2LjAzOCBMMTcuOTAzNzA4NSw2LjA0IEw4LjAwNDIxMzU2LDE1LjkzOTQ5NDkgTDgsMTUuOTM1IEw4LDE1Ljk0IEwzLDE1Ljk0IEwzLDEwLjk0IEwzLjAwNSwxMC45NCBMMywxMC45MzU1MzM5IEwxMi44OTk0OTQ5LDEuMDM2MDM4OTcgTDEyLjkwMSwxLjAzOCBMMTIuOTM5MzM5OCwxIFogTTEyLjkzNSwzLjgyOCBMNSwxMS43NjMgTDUsMTMuOTQgTDcuMTc1LDEzLjk0IEwxNS4xMDgsNi4wMDYgTDEyLjkzNSwzLjgyOCBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

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