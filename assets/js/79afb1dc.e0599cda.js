"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[59946],{

/***/ 55678:
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
	id: 'node-timeline',
	title: '노드 타임라인',
	description: '노드 타임라인 메뉴를 안내합니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'대시보드',
		'노드 타임라인'
	],
	toc_max_heading_level: 3,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/node-timeline",
  "title": "노드 타임라인",
  "description": "노드 타임라인 메뉴를 안내합니다.",
  "source": "@site/docs/kubernetes/node-timeline.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/node-timeline",
  "permalink": "/whatap-docs/kubernetes/node-timeline",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/node-timeline.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "node-timeline",
    "title": "노드 타임라인",
    "description": "노드 타임라인 메뉴를 안내합니다.",
    "keywords": [
      "쿠버네티스",
      "쿠버네티스 모니터링",
      "대시보드",
      "노드 타임라인"
    ],
    "toc_max_heading_level": 3,
    "isTranslationMissing": false
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "노드 디스크 목록",
    "permalink": "/whatap-docs/kubernetes/node-disk-list"
  },
  "next": {
    "title": "오브젝트 매니페스트",
    "permalink": "/whatap-docs/kubernetes/object-manifest"
  }
};
const assets = {

};

/*

타임라인은 1.7.11 버전 이상에서 수집된 데이터부터 표시됩니다.

> 예시, 노드 생성 시간이 9:00이고 에이전트가 9:15에 업데이트된 경우 9:15부터 타임라인에 표시됩니다.

*/
/*

<Cmdname sid="side_nodeTimeline" className="uitext" /> 메뉴에서 시간의 흐름에 따라 노드 상태를 추적할 수 있습니다. 이를 통해 이미 사라진 노드가 언제 제거되었는지, 해당 시점에 노드가 어떤 상태였는지를 파악할 수 있습니다.

*/
/*

<Cmdname sid="side_nodeTimeline" className="uitext" /> 메뉴에 진입 시 다음과 같이 최근 7일간 수집한 노드 목록이 표시됩니다.

* 타임라인에 마우스 커서를 올리면 해당 구간의 시작 및 종료 시간과 노드 상태를 확인할 수 있습니다.

*/
/*

타임라인 상에서 특정 기간을 선택하면 시 해당 기간 동안의 노드 상태를 ***상세 보기***를 통해 자세히 확인할 수 있습니다. 또한 구간을 드래그하여 시간 범위를 조정할 수 있습니다. 원하는 기간을 설정하여 과거 데이터를 확인할 수 있습니다. 자세한 내용은 다음 상세 보기 안내를 참조하세요.

<ImgLang img='k8s-node-timeline-drag.gif' />

*/
/*<Cmdname sid="TTL08441" className="uitext" type="node" /> 탭에서 노드가 해당 시간 구간에서 어떤 상태였는지 요약 정보를 제공합니다. 노드의 운영 상태와 함께 전반적인 리소스 사용량을 확인할 수 있습니다. CPU, 메모리, 디스크, 네트워크 클릭 시 조회 기간 동안 사용량 추이를 확인할 수 있는 <Cmdname sid="metrics" className="uitext" /> 탭으로 이동합니다.*/
/** ***AVG***: 조회 기간 동안 평균 사용량을 확인할 수 있습니다.

* ***MAX***: 조회 기간 동안 최대 사용량을 확인할 수 있습니다.*/
/*이러한 데이터를 통해 특정 기간 동안 발생한 자원 사용 패턴을 분석하고, 이상 징후를 파악할 수 있습니다.*/
/*

개요
노드 타임라인은 시간의 흐름에 따른 노드 상태를 추적하는 메뉴입니다. 사용자는 이미 사라진 노드가 언제 사라졌고, 그 시점에 어떤 상태였는지 파악할 수 있습니다. 이를 통해 노드의 상태 변화를 시각적으로 이해하고, 과거 데이터를 바탕으로 문제를 진단할 수 있습니다.

권한
이 메뉴는 **클러스터 프로젝트(CP)**에서만 제공되며, 쿠버네티스 에이전트 1.7.11 이상 버전이 필요합니다. 에이전트가 1.7.11 이상 버전에서 수집한 데이터부터 타임라인에 표시됩니다. 예를 들어, 노드 생성 시간이 9:00이고 에이전트가 9:15에 업데이트된 경우, 9:15부터 타임라인에 표시됩니다 ￼.

기능 설명

•	타임라인 보기: 노드 타임라인에 진입하면 최근 7일간 수집된 노드 목록이 표시됩니다. 타임라인에 마우스를 올리면 해당 구간의 시작 및 종료 시간과 노드 상태를 확인할 수 있습니다. 특정 구간을 드래그하여 해당 기간으로 시간을 재설정할 수 있습니다.
•	상세 정보: 특정 구간을 선택하면 그 시점의 노드에 대한 상세 정보를 확인할 수 있으며, 노드 이름을 클릭하면 특정 노드의 전체 상태를 볼 수 있습니다.
•	노드 구성: 선택한 노드의 구성 및 해당 기간 동안의 전반적인 리소스 사용량을 요약하여 보여줍니다. 조회 기간 동안의 평균(AVG) 및 **최대값(MAX)**을 확인할 수 있으며, CPU, 메모리, 디스크, 네트워크 사용량 추이도 메트릭 탭에서 볼 수 있습니다.
•	네트워크 사용량: 원하는 네트워크 인터페이스를 선택하여 확인할 수 있으며, Total 또는 In/Out 지표를 각각 또는 합산하여 볼 수 있습니다.
•	이벤트: 해당 노드에서 발생한 쿠버네티스 이벤트 및 와탭 이벤트를 확인할 수 있습니다.

*/
/*

**노드 타임라인 메뉴 안내**

**개요**
노드 타임라인 메뉴는 노드 상태의 변화를 시간에 따라 추적할 수 있는 기능을 제공합니다. 이 메뉴를 통해 노드가 생성되거나 삭제된 시점, 그리고 그 시점에서의 상태 변화를 시각적으로 파악할 수 있습니다. 이미 삭제된 노드가 언제 사라졌는지와 그 당시의 상태 정보를 정확하게 확인할 수 있어, 클러스터 운영 시 발생한 이슈를 분석하거나 과거 상황을 복구하는 데 매우 유용합니다.

**요구 사항**
- **클러스터 프로젝트(CP)**의 **읽기 권한**이 필요합니다.
- **와탭 쿠버네티스 에이전트 1.7.11 버전 이상**이 필요합니다. 타임라인 데이터는 1.7.11 이상 버전에서 수집된 시점부터 제공됩니다. 즉, 에이전트가 업데이트된 이후 수집된 데이터부터 타임라인에 반영됩니다.

**주요 기능**

1. **타임라인 시각화**
노드 타임라인 메뉴는 최근 7일 동안 수집된 노드 상태 데이터를 시각적으로 보여줍니다. 시간 축을 따라 노드의 상태 변화를 시각적으로 확인할 수 있으며, 각 시간 구간에 마우스를 올리면 해당 구간의 시작 시간과 종료 시간, 그리고 노드의 상태(Ready, NotReady 등)가 툴팁으로 표시됩니다.

- **시간 조정**: 타임라인 상에서 특정 기간을 선택하면, 해당 기간 동안의 노드 상태를 자세히 확인할 수 있습니다. 특정 구간을 드래그하여 시간 범위를 조정할 수 있으며, 원하는 기간으로 설정하여 과거 데이터를 확인할 수 있습니다.

2. **상세 정보 확인**
선택한 시간 구간에서 노드의 세부 정보를 확인할 수 있습니다. 노드의 이름을 클릭하면 그 노드의 전체 상태를 볼 수 있으며, 해당 노드가 생성된 시점부터 현재까지의 상태 변화를 타임라인에서 시각적으로 파악할 수 있습니다.

- **상태 요약**: 노드가 해당 시간 구간에서 어떤 상태였는지를 요약하여 제공하며, 노드의 운영 상태(Ready, NotReady 등)와 함께 주요 메트릭(CPU, 메모리, 디스크, 네트워크 사용량)을 확인할 수 있습니다.

3. **리소스 사용량 분석**
선택한 노드의 리소스 사용 현황을 기간별로 분석할 수 있습니다. 조회 기간 동안의 **평균(AVG)**, **최대값(MAX)**, **최소값(MIN)**을 기준으로 CPU, 메모리, 디스크, 네트워크 사용량의 변화를 확인할 수 있습니다. 이러한 데이터를 통해 특정 기간 동안 발생한 자원 사용 패턴을 분석하고, 이상 징후를 파악할 수 있습니다.

4. **네트워크 사용량 모니터링**
사용자는 노드의 네트워크 인터페이스를 선택하여 원하는 네트워크 사용량 데이터를 조회할 수 있습니다. **Total**, **In/Out** 지표를 각각 또는 합산하여 볼 수 있으며, 이를 통해 네트워크 트래픽 상태를 분석할 수 있습니다. 네트워크 트래픽이 급증하거나 감소한 시점을 식별하여 원인을 추적하는 데 유용합니다.

5. **이벤트 로그**
타임라인에 표시된 시간 동안 발생한 **쿠버네티스 이벤트**와 **와탭 이벤트**를 확인할 수 있습니다. 쿠버네티스 이벤트는 노드의 상태 변화를 포함한 클러스터 내의 중요한 작업 기록을 포함하며, 와탭 이벤트는 사용자가 설정한 경고나 알림 기준에 따른 이벤트 발생 정보를 제공합니다. 이를 통해 노드의 상태 변화와 그에 따른 이벤트 발생 상황을 종합적으로 분석할 수 있습니다.

6. **이벤트 필터링 및 정렬**
다양한 필터 옵션을 제공하여 특정 이벤트 유형 또는 기간을 기준으로 이벤트 로그를 필터링할 수 있습니다. 예를 들어, 특정 상태(예: NotReady)의 노드에 발생한 이벤트만을 필터링하거나, 중요한 이벤트만 우선적으로 볼 수 있습니다. 이를 통해 문제 발생 시점과 그 원인을 빠르게 추적할 수 있습니다.

**활용 예시**
노드 타임라인을 통해 관리자는 노드가 사라지거나 비정상적인 상태에 빠졌을 때의 상황을 파악하고, 그 시점에 어떤 이벤트가 발생했는지를 분석할 수 있습니다. 예를 들어, 노드가 **NotReady** 상태로 전환된 시점을 확인하고, 그에 따른 리소스 사용량 변화를 살펴보며 원인을 추적할 수 있습니다. 또한, 네트워크 트래픽이나 메모리 과부하와 같은 특정 지표를 통해 장애 발생 전후의 상황을 명확히 분석할 수 있습니다.

**결론**
노드 타임라인 메뉴는 클러스터 내 노드의 상태 변화를 시간의 흐름에 따라 추적하고, 문제 발생 시점을 정확하게 파악할 수 있도록 도와줍니다. 이를 통해 관리자는 클러스터 운영의 안정성을 높이고, 과거 데이터를 바탕으로 미래의 문제를 예방할 수 있는 중요한 도구를 제공합니다.

*/
/*‘노드 구성’ 탭에서는 해당 노드의 하드웨어 및 소프트웨어 구성 요소를 종합적으로 확인할 수 있습니다. 이를 통해 사용자는 노드의 리소스 사용 현황 및 각 구성 요소의 상태를 파악하고, 성능 및 운영 안정성을 모니터링할 수 있습니다.

주요 항목 안내:

•	Architecture: 노드가 사용하고 있는 하드웨어 아키텍처(예: amd64).
•	Image: 노드가 실행 중인 운영 체제 이미지 정보 (예: Amazon Linux 2).
•	CapacityMemory: 노드의 총 메모리 용량 (예: 3.77 GiB).
•	CapacityCpu: 노드의 총 CPU 용량 (예: 2).

소프트웨어 구성:

•	Container Runtime: 노드에서 사용되는 컨테이너 런타임의 버전 정보 (예: containerd v1.7.11).
•	kubelet: 노드에서 실행 중인 쿠버네티스 kubelet의 버전 정보 (예: v1.30.2-eks).
•	kube-proxy: 네트워크 관리 역할을 하는 kube-proxy의 버전 정보 (예: v1.30.2-eks).

리소스 사용 현황:

•	CPU 사용량: 노드의 CPU 사용량 (예: 1380m, 69%).
•	메모리 사용량: 노드의 메모리 사용량 (예: 1.04 GiB, 30.50%).
•	디스크 사용량: 노드에서 사용 중인 디스크 용량과 사용 비율 (예: /dev/nvme0n1p1, 4.51 GiB, 5.64%).
•	네트워크 사용량: 네트워크 전송량 (예: 396.50 KiB).

이 정보를 통해 노드의 각 구성 요소별로 성능과 리소스 사용량을 모니터링하고, 필요에 따라 추가적인 조치를 취할 수 있습니다.*/


const toc = [{
  "value": "기본 화면 안내",
  "id": "기본-화면-안내",
  "level": 2
}, {
  "value": "노드 타임라인 상세",
  "id": "노드-타임라인-상세",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
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
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_cluster",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeTimeline",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "요구 사항"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["쿠버네티스 클러스터 프로젝트(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "my",
              children: "CP"
            }), ") ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "읽기 권한"
            }), "이 필요합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "와탭 쿠버네티스 에이전트 1.7.11 버전 이상이 필요합니다. 타임라인 데이터는 1.7.11 버전 이상에서 수집된 시점부터 제공됩니다. 즉 에이전트가 업데이트된 이후 수집된 데이터부터 반영합니다."
          }), "\n", "\n"]
        }), "\n"]
      })]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeTimeline",
        className: "uitext"
      }), " 메뉴는 노드 상태의 변화를 시간에 따라 추적할 수 있는 기능을 제공합니다. 이를 통해 이미 사라진 노드가 언제 제거되었는지, 해당 시점에 노드가 어떤 상태였는지를 시각적으로 파악할 수 있습니다. 클러스터 운영 시 발생한 이슈를 분석하거나 과거 상황을 확인하는 데 유용합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "기본-화면-안내",
        children: "기본 화면 안내"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_nodeTimeline",
          className: "uitext"
        }), " 메뉴에 진입 시 다음과 같이 최근 7일 동안 수집된 노드 목록이 나타납니다. 시간 축을 따라 노드의 상태 변화를 시각적으로 확인할 수 있습니다. 각 시간 구간에 마우스를 올리면 해당 구간의 시작 시간과 종료 시간, 그리고 노드의 상태(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Ready"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "NotReady"
          })
        }), " 등)가 툴팁으로 표시됩니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-timeline.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "타임라인 상에서 구간을 드래그하여 시간 범위를 조정할 수 있습니다. 원하는 기간을 설정하여 과거 데이터를 확인해 보세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-timeline-drag.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["또한 특정 기간 선택 시 해당 기간 동안의 노드 상태를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "상세 보기"
        }), "를 통해 자세히 확인할 수 있습니다. 자세한 내용은 다음 노드 타임라인 상세 안내를 참조하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["노드 상태에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://kubernetes.io/docs/concepts/architecture/nodes/#node-status",
            children: "다음 문서"
          }), "를 참조하세요."]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "노드-타임라인-상세",
        children: "노드 타임라인 상세"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "노드 타임라인 상세는 다음과 같이 특정 구간 또는 특정 노드를 선택하여 확인할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-timeline-stage.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["세부 정보를 조회하고자 하는 구간을 선택하여 오른쪽 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "상세 보기"
            }), " 창을 통해 해당 시점의 노드에 대한 상세를 조회할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["차트 왼쪽 목록에서 조회하고자 하는 노드 이름을 선택하여 오른쪽 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "상세 보기"
            }), " 창을 통해 해당 노드의 전체 상태를 볼 수 있습니다. 해당 노드가 생성된 시점부터 현재까지의 상태 변화를 타임라인에서 시각적으로 파악할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08441",
          className: "uitext",
          type: "node"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "TTL08441",
          className: "uitext",
          type: "node"
        }), " 탭에서 선택한 노드 구성 및 전반적인 리소스 사용량 정보를 요약해서 제공합니다. 해당 노드의 하드웨어 및 소프트웨어 구성 요소를 종합적으로 확인할 수 있습니다. 사용자는 노드의 리소스 사용 현황 및 각 구성 요소의 상태를 파악하고 성능 및 운영 안정성을 모니터링할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-timeline-config.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "노드 시스템 사양"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Architecture"
                  })
                }), ": 노드가 사용하고 있는 하드웨어 아키텍처"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Image"
                  })
                }), ": 노드가 실행 중인 운영 체제 이미지 정보"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "CapacityMemory"
                  })
                }), ": 노드의 총 메모리 용량"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "CapacityCpu"
                  })
                }), ": 노드의 총 CPU 용량"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "소프트웨어 구성"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Container Runtime"
                  })
                }), ": 노드에서 사용되는 컨테이너 런타임의 버전 정보"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "kubelet"
                  })
                }), ": 노드에서 실행 중인 쿠버네티스 kubelet의 버전 정보"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "kube-proxy"
                  })
                }), ": 네트워크 관리 역할을 하는 kube-proxy의 버전 정보"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "리소스 사용 현황"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "CPU"
                  })
                }), ": 노드의 CPU 사용량"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "메모리"
                  })
                }), ": 노드의 메모리 사용량"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "디스크"
                  })
                }), ": 노드에서 사용 중인 디스크 용량과 사용 비율"]
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "네트워크"
                  })
                }), ": 네트워크 전송량"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["CPU, 메모리, 디스크, 네트워크 클릭 시 조회 기간 동안 사용량 추이를 확인할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "metrics",
                className: "uitext"
              }), " 탭으로 이동합니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "AVG"
                })
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                  children: "MAX"
                })
              }), " 버튼을 클릭하여 조회 기간동안 평균 사용량과 최대 사용량을 확인할 수 있습니다."]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "-1",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "resource",
          className: "uitext"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "resource",
          className: "uitext"
        }), " 탭에서 선택한 노드에 스케줄링된 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Pod"
          })
        }), " 및 해당 Pod에서 실행 중인 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "컨테이너"
          })
        }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "애플리케이션"
          })
        }), " 목록을 확인할 수 있습니다. 해당 정보는 선택한 시간 구간의 마지막 시점을 기준으로 1분간의 리소스 데이터를 반영하여 표시합니다. 이를 통해 해당 시점의 노드 상태와 각 Pod, 컨테이너, 애플리케이션의 동작 상태를 보다 명확하게 파악할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-timeline-resource.png"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "-2",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "metrics",
          className: "uitext"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "metrics",
          className: "uitext"
        }), " 탭에서 노드의 리소스 사용량 추이를 제공합니다. 조회 기간 동안의 평균(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "AVG"
          })
        }), "), 최대값(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "MAX"
          })
        }), ")을 기준으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "CPU"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "메모리"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "네트워크"
          })
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "디스크"
          })
        }), " 사용량의 변화를 확인할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-timeline-metrics.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "AVG"
              })
            }), ": 조회 기간 동안 평균 사용량"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "MAX"
              })
            }), ": 조회 기간 동안 최대 사용량"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Total"
              })
            }), ": 여러 네트워크 인터페이스의 전체 트래픽 사용량 합산"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "In/Out"
              })
            }), ": 특정 네트워크 인터페이스의 Inbound(수신) 및 Outbound(송신) 트래픽 사용량"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "-3",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "event",
          className: "uitext"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "event",
          className: "uitext"
        }), " 탭에서 타임라인에 표시된 시간 동안 발생한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "K8s Node 이벤트"
          })
        }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "WhaTap Node 이벤트"
          })
        }), "를 확인할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "K8s Node 이벤트"
          })
        }), "는 노드의 상태 변화를 포함한 클러스터 내의 중요한 작업 기록을 포함하며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "WhaTap Node 이벤트"
          })
        }), "는 사용자가 설정한 경고 알림 기준에 따른 이벤트 발생 정보를 제공합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "k8s-node-timeline-event.png"
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