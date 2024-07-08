"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[39395],{

/***/ 55211:
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
	title: '인스턴스 성능 관리 활용하기',
	description: '애플리케이션 모니터링 메뉴 중 인스턴스 성능 관리 메뉴의 주요 기능 및 활용 예시를 안내합니다.',
	tags: [
		'애플리케이션',
		'애플리케이션 모니터링',
		'APM',
		'고급 활용',
		'인스턴스 성능 관리'
	],
	keywords: [
		'애플리케이션',
		'애플리케이션 모니터링',
		'APM',
		'인스턴스 성능 관리'
	],
	toc_max_heading_level: 2,
	displayed_sidebar: 'learningSidebar'
};
const contentTitle = undefined;
const metadata = {
  "id": "best-practice-guides/about-instance-performance-analysis",
  "title": "인스턴스 성능 관리 활용하기",
  "description": "애플리케이션 모니터링 메뉴 중 인스턴스 성능 관리 메뉴의 주요 기능 및 활용 예시를 안내합니다.",
  "source": "@site/docs/best-practice-guides/about-instance-performance-analysis.mdx",
  "sourceDirName": "best-practice-guides",
  "slug": "/best-practice-guides/about-instance-performance-analysis",
  "permalink": "/whatap-docs/best-practice-guides/about-instance-performance-analysis",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/best-practice-guides/about-instance-performance-analysis.mdx",
  "tags": [
    {
      "inline": true,
      "label": "애플리케이션",
      "permalink": "/whatap-docs/tags/애플리케이션"
    },
    {
      "inline": true,
      "label": "애플리케이션 모니터링",
      "permalink": "/whatap-docs/tags/애플리케이션-모니터링"
    },
    {
      "inline": true,
      "label": "APM",
      "permalink": "/whatap-docs/tags/apm"
    },
    {
      "inline": true,
      "label": "고급 활용",
      "permalink": "/whatap-docs/tags/고급-활용"
    },
    {
      "inline": true,
      "label": "인스턴스 성능 관리",
      "permalink": "/whatap-docs/tags/인스턴스-성능-관리"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "about-instance-performance-analysis",
    "title": "인스턴스 성능 관리 활용하기",
    "description": "애플리케이션 모니터링 메뉴 중 인스턴스 성능 관리 메뉴의 주요 기능 및 활용 예시를 안내합니다.",
    "tags": [
      "애플리케이션",
      "애플리케이션 모니터링",
      "APM",
      "고급 활용",
      "인스턴스 성능 관리"
    ],
    "keywords": [
      "애플리케이션",
      "애플리케이션 모니터링",
      "APM",
      "인스턴스 성능 관리"
    ],
    "toc_max_heading_level": 2,
    "displayed_sidebar": "learningSidebar"
  },
  "sidebar": "learningSidebar",
  "previous": {
    "title": "데이터베이스",
    "permalink": "/whatap-docs/best-practice-guides/set-db-metric-warning-notice"
  }
};
const assets = {

};

/*예를 들어 새로운 서비스 패턴 지정으로 추가적인 트랜잭션 시작점을 설정하여 응답 시간을 측정하는 등 트레이스 및 후킹과 관련된 와탭 설정 변경 시 해당 클래스를 목록에서 찾아 ![수정 아이콘](/img/ico-edit.svg) <Cmdname sid="redefine" className="uitext" />를 클릭하세요.*/
/*해당 기능을 선택 해 재정의

재정의 기능은 redefine 함수

이미 로딩된 클래스를 수정해 새로운 서비스 패턴을 지정하고 추가적인 트랜잭션 시작점을 설정할 수 있습니다. 이를 통해 응답 시간을 추적할 수 있습니다.

서비스 패턴을 새로 지정해 새로운 트랜잭션 시작점을 설정하여 응답시간을 추적하고자 할 때*/
/*으로 클래스간 충돌 방지, 디버깅, 성능 최적화 등을 도울 수 있습니다.*/
/** **클래스 충돌 방지**

서드파티 라이브러리의 다양한 버전으로 동일한 클래스가 여러 *jar* 파일에 존재할 수 있습니다. 중복된 클래스를 식별하고 우선순위를 조정하며 충돌이 발생하는 *jar* 파일을 명시적으로 제외 또는 특정 파일을 포함하는 등 조치해 클래스 충돌을 방지할 수 있습니다.*/
/*
이때 클래스가 정확히 어느 *jar* 파일에서 로딩되었는지 확인해 클래스 충돌을 방지할 수 있습니다. 동일한 클래스가 여러 *jar* 파일에서 로딩되는 것을 방지할 수 있습니다.
다양한 버전의 서드파티 라이브러리가 로딩되는 등 동일한 클래스가 여러 *jar* 파일에 존재할 경우 클래스가 정확히 어느 *jar* 파일에서 로딩되었는지 확인해 클래스 충돌을 방지할 수 있습니다.*/
/** **디버깅**

특정 클래스가 의도하지 않은 *jar* 파일에서 로딩된 경우 예상치 못한 동작이나 버그가 발생할 수 있습니다. 특히 클래스패스가 복잡하거나 다중 모듈 환경에서 정확히 어느 경로에서 로딩되었는지 확인하여 디버깅을 용이하게 할 수 있습니다.*/
/** **성능 최적화**

클래스 로딩이 성능 문제의 원인이 될 수 있습니다. 클래스가 어떤 *jar* 파일에서 과도하게 로딩되는지 확인 후 자주 사용되는 클래스를 포함한 *jar* 파일이 적절한 위치에서 로딩되도록 클래스패스를 조정해 해당 클래스 로딩 시간을 최적화할 수 있습니다.*/
/*
클래스가 어떤 *jar* 파일에서 과도하게 로딩되는지 확인하여 성능을 최적화할 수 있습니다.
클래스 로딩 시 성능 문제가 발생하는 경우 어떤 *jar* 파일에서 클래스가 과도하게 로딩되고 있는지 여부를 파악해 성능을 관리할 수 있습니다.*/
/*자바 애플리케이션의 다계층 구조 특성상 <Cmdname sid="resource" className="uitext" /> 정보 확인이 필요합니다.*/
/*스레드 목록을 보고 하는 중요한 행위-> 스레드 cpu 누적 시간 보여줌 -> 시계열 정보 확인 가능하다는 얘기를 추가하기*/
/*:::note

예시의 스레드는 `RequestQueue`에서 요소를 가져오려 시도하다 예외가 발생해 `wait`가 호출되었을 가능성이 있습니다. 스냅샷 정보를 바탕으로 대기 상태가 발생한 원인을 확인해 보세요.

* `RequestQueue.get` 메소드의 58번째 줄을 확인하여 어떤 조건에서 `wait`가 호출되는지 확인해 보세요.

* `ZipSendProxyThread.run` 메소드의 54번째 줄을 확인하여 어떤 상황에서 `RequestQueue.get` 메소드를 호출하는지 확인해 보세요.

:::*/
/*

어떤 스레드가 CPU를 많이 사용하고 있는지 또는 어떤 스레드가 블록된 상태인지 파악하는 것은

어떤 스레드가 CPU를 많이 사용하고 있는지 또는 어떤 스레드가 블록된 상태인지 파악해 병목 현상을 일으키는 원인을 식별할 수 있습니다. 스레드 특정 후 해당 스레드 스냅샷을 통해 자주 호출되거나 오래 실행되는 메소드 등을 찾아낼 수 있습니다.*/
/*### 증가량

![스레드 목록/덤프](/img/best-p/about-instance-thread-list-dump1.png)

![스레드 목록/덤프 델타값](/img/best-p/about-instance-thread-list-dump2.png)*/
/*## 소켓 오픈 개수 {#advanced-use-opened-socket-count}*/
/*이때 가장 먼저 확인하는 것은 식별이 용이한 힙 메모리입니다. 힙 메모리가 가득 찬 경우 JVM이 GC를 빈번히 실행해 CPU 사용량이 급증할 수 있습니다. ~~특히 Full GC 발생 시 애플리케이션이 일시적으로 멈추며 CPU 사용량이 크게 상승합니다. 예를 들어 애플리케이션에서 객체가 적절히 해제되지 않고 메모리를 점유하는 메모리 누수가 발생한 경우 힙 메모리가 부족할 수 있으며 이때 메모리를 회수하기 위해 JVM이 GC를 반복적으로 실행하여 CPU 사용률이 급격히 증가하게 됩니다.~~ 이 경우 <Cmdname sid="application_dashboard" className="uitext" />의 <Cmdname sid="AA010" className="uitext" /> 그래프를 통해 쉽게 확인할 수 있습니다.

두 번째는 실제 요청이 많은 것으로 애플리케이션이 많은 수의 클라이언트 요청을 처리해 CPU 사용량이 높아진 경우입니다. 각 요청은 자바 스레드를 생성해 처리되기에 CPU가 많은 작업을 수행하게 됩니다. ~~쇼핑몰 사이트의 대규모 할인 이벤트 등으로 웹 서퍼 트래픽이 급증한 경우를 예로 들 수 있습니다. 많은 사용자가 웹 페이지를 방문해 서버가 다수의 HTTP 요청을 처리하기 위해 마찬가지로 많은 스레드를 생성해 CPU 사용률이 크게 상승하게 됩니다.~~ 이 경우 <Cmdname sid="application_dashboard" className="uitext" />에서 TPS 관련 지표를 통해 확인할 수 있습니다.

세 번째는 잘못된 코드 로직으로 문제가 발생한 경우입니다. 애플리케이션 코드에 비효율적인 알고리즘이나 무한 루프 등이 포함되어 있을 경우 CPU 사용률이 비정상적으로 높아질 수 있습니다. 이 경우 <Cmdname sid="side_threadList" className="uitext" /> 메뉴를 통해 CPU 사용량이 높은 스레드를 특정 후 해당 스레드 덤프를 확인해 문제가 되는 코드를 확인할 수 있습니다.*/


const toc = [{
  "value": "로딩된 클래스",
  "id": "advanced-use-loaded-classes",
  "level": 2
}, {
  "value": "재정의",
  "id": "재정의",
  "level": 4
}, {
  "value": "리소스",
  "id": "리소스",
  "level": 4
}, {
  "value": "스레드 목록/덤프",
  "id": "advanced-use-thread-list-dump",
  "level": 2
}, {
  "value": "CPU 사용량이 높은 스레드 확인",
  "id": "cpu-사용량이-높은-스레드-확인",
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
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " 메뉴는 애플리케이션의 환경을 확인하고 성능을 관리하는데에 유용한 기능을 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), "에서 자주 사용하는 주요 메뉴 상세 및 활용 예시를 다음과 같이 안내합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "advanced-use-loaded-classes",
        children: "로딩된 클래스"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_agentsConfiguration",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_loadedClasses",
          className: "uitext"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_loadedClasses",
          className: "uitext"
        }), " 메뉴는 애플리케이션에 로딩된 클래스의 구조와 메소드 시그니처 등 상세 정보를 제공하고 또한 중단없는 클래스 동작 변경이 가능하도록 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), " 기능을 제공합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "재정의",
        children: "재정의"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), "는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Instrumentation"
        }), "의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "redefineClasses"
        }), " 메소드를 호출하여 애플리케이션을 중단시키지 않고도 런타임 중에 이미 로딩된 클래스의 동작을 변경할 수 있게 합니다. 이는 운영 중인 서비스에 대한 수정이나 변경이 필요한 경우 유용합니다. 예를 들어 새로운 서비스 패턴 지정으로 추가적인 트랜잭션 시작점을 설정하고 응답 시간을 측정하고자 할 때, 관련된 와탭 설정 변경 후 해당 클래스를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_loadedClasses",
          className: "uitext"
        }), " 목록에서 찾아 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "수정 아이콘",
          src: (__webpack_require__(63582)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " 아이콘을 클릭해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), "할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "/best-p/about-instance-loaded-class1.png",
        desc: "로딩된 클래스 재정의"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "리소스",
        children: "리소스"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "resource",
          className: "uitext"
        }), " 컬럼을 통해 해당 클래스가 물리적으로 어느 파일에서 로딩되었는지 조회할 수 있습니다. 자바 애플리케이션의 다계층 구조 특성상 이와 같은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "resource",
          className: "uitext"
        }), " 정보 확인이 필요합니다. 복잡한 애플리케이션 환경에서는 클래스가 정확히 어느 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "jar"
        }), " 파일에서 로딩되었는지 파악하는 것이 중요합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["특정 클래스가 의도하지 않은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "jar"
        }), " 파일에서 로딩된 경우 예상치 못한 동작이나 버그가 발생할 수 있습니다. 특히 클래스패스가 복잡하거나 다중 모듈 환경에서 정확히 어느 경로에서 로딩되었는지 확인하여 디버깅을 용이하게 할 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "advanced-use-thread-list-dump",
        children: "스레드 목록/덤프"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_agentsConfiguration",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), " 메뉴는 현재 실행 중인 스레드 목록을 확인하고 해당 스레드의 개별 스냅샷 및 전체 스레드 덤프 정보를 조회할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "hitmap",
          className: "uitext"
        }), "이 트랜잭션 응답 시간 위주 최적화 작업의 핵심이라면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), "는 CPU 최적화의 핵심 요소라고 할 수 있으며 이는 애플리케이션의 성능 최적화, 문제 진단, 그리고 안정성 유지에 중요한 역할을 합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["어떤 스레드가 CPU를 많이 사용하고 있는지 파악하는 것은 병목 발생 원인 식별에 있어 중요합니다. 특히 특정 시간대에 CPU 사용이 급증한 스레드 식별을 위해 시계열 데이터를 조회할 수 있어야 합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), " 메뉴의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "thread_cpu_time",
          className: "uitext"
        }), "은 해당 스레드가 CPU를 점유한 총 누적 시간을 의미합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "새로 고침"
          })
        }), " 시 현재 스레드 CPU 시간과 기존 스레드 CPU 시간의 차이인 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08126",
          className: "uitext"
        }), "을 제공하여 조회 시점에 가장 많이 CPU를 사용하고 있는 스레드를 특정할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08126",
          className: "uitext"
        }), " 컬럼을 클릭해 내림차순 정렬 방식으로 증가량이 가장 높은 스레드를 확인해 보세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "/best-p/about-instance-thread-list-dump3.png",
        desc: "스레드 목록/덤프 델타값 sc"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "이렇게 스레드 특정 후 해당 스레드 스냅샷을 확인해 자주 호출되거나 오래 실행되는 메소드 등을 찾아낼 수 있습니다. 이를 통해 이상 징후를 조기에 발견하고 대응하여 시스템을 안정적으로 관리할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "/best-p/about-instance-thread-list-dump4.png",
        desc: "스레드 목록/덤프 개별 스레드 덤프"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "cpu-사용량이-높은-스레드-확인",
        children: "CPU 사용량이 높은 스레드 확인"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "애플리케이션 CPU 사용량이 급증한 경우는 여러가지 원인에 기인할 수 있습니다. 이를 힙 메모리가 가득 찬 경우, 실제 요청이 많은 경우, 그리고 로직 문제인 경우 세 가지 유형으로 분류할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["이때 가장 먼저 확인하는 것은 식별이 용이한 힙 메모리입니다. 힙 메모리가 가득 찬 경우 JVM이 GC를 빈번히 실행해 CPU 사용량이 급증할 수 있습니다. 이 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "application_dashboard",
          className: "uitext"
        }), "의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "AA010",
          className: "uitext"
        }), " 그래프를 통해 쉽게 확인할 수 있습니다. 두 번째는 실제 요청이 많은 것으로 애플리케이션이 많은 수의 클라이언트 요청을 처리해 CPU 사용량이 높아진 경우입니다. 각 요청은 자바 스레드를 생성해 처리되기에 CPU가 많은 작업을 수행하게 됩니다. 이 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "application_dashboard",
          className: "uitext"
        }), "에서 TPS 관련 지표를 통해 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["세 번째로 애플리케이션 코드에 비효율적인 알고리즘이나 무한 루프 등이 포함되어 있을 경우 CPU 사용률이 비정상적으로 높아질 수 있습니다. 이 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), " 메뉴를 통해 CPU 사용량이 높은 스레드를 특정 후 해당 스레드 덤프를 확인해 문제가 되는 코드를 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "thread_cpu_time",
            className: "uitext"
          }), " 확인 → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "refresh",
            className: "uitext"
          }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL08126",
            className: "uitext"
          }), " 기준으로 목록 정렬 → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "CPU 사용량 높은 스레드 식별"
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