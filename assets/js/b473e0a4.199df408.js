"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[32007],{

/***/ 62863:
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
	slug: '2024-summary',
	title: '와탭 24년 안내',
	authors: 'ysj',
	date: '2024-11-19T19:30',
	toc_max_heading_level: 2,
	tags: [
		'새로운 기능',
		2024
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/whatap-docs/blog/2024-summary",
  "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-summary.mdx",
  "source": "@site/blog/2024-summary.mdx",
  "title": "와탭 24년 안내",
  "description": "와탭의 2024년 1월부터 10월까지 진행된 서비스 신규 기능 및 주목할 만한 변경 사항 개요를 안내합니다. 와탭이 새롭게 제공하는 기능들을 한 눈에 살펴보세요.",
  "date": "2024-11-19T19:30:00.000Z",
  "tags": [
    {
      "inline": true,
      "label": "새로운 기능",
      "permalink": "/whatap-docs/blog/tags/새로운-기능"
    },
    {
      "inline": true,
      "label": "2024",
      "permalink": "/whatap-docs/blog/tags/2024"
    }
  ],
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "TW J",
      "email": "ysjo@whatap.io",
      "title": "테크니컬 라이터",
      "imageURL": "./img/teamtwj.svg",
      "key": "ysj",
      "page": null
    }
  ],
  "frontMatter": {
    "slug": "2024-summary",
    "title": "와탭 24년 안내",
    "authors": "ysj",
    "date": "2024-11-19T19:30",
    "toc_max_heading_level": 2,
    "tags": [
      "새로운 기능",
      "2024"
    ],
    "isTranslationMissing": false
  },
  "unlisted": false,
  "prevItem": {
    "title": "서비스 개요",
    "permalink": "/whatap-docs/blog/overview"
  },
  "nextItem": {
    "title": "3분기 안내",
    "permalink": "/whatap-docs/blog/2024-3q-summary"
  }
};
const assets = {
"authorsImageUrls": [(__webpack_require__(82799)/* ["default"] */ .A)],
};

/*새로운 기능 sc 이미지 국문과 영문*/
/*truncate*/
/*> * <Cmdname sid="side_eventSettingV2" className="uitext" /> 메뉴 및 <Cmdname sid="side_integratedRealtimeAlert" className="uitext" /> 등 경고 알림 기능이 개선되었습니다.*/
/*공통 메뉴 개선 또는 이벤트 v2 메뉴 개선

> * 편의성 향상을 위해 <Cmdname sid="side_eventSettingV2" className="uitext" /> <code class="newfunc">New</code> 메뉴가 개선되었습니다.

*/
/*> * `Node.js` 상품이 로그 모니터링을 제공합니다.
> * `.NET` 상품이 멀티 트랜잭션을 지원합니다.*/
/*> * `.NET` Core 라이브러리 지원 범위가 확대되었으며 멀티 트랜잭션을 지원합니다.*/
/*> * 애플리케이션과 데이터베이스 상품 연계 모니터링을 지원합니다. (10월)*/
/*

> * 쿠버네티스 노드 모니터링 확장의 일환으로 <Cmdname sid="side_nodeMap" className="uitext" />, <Cmdname sid="side_nodeTimeline" className="uitext" />, <Cmdname sid="side_nodeDiskList" className="uitext" />과 같은 신규 메뉴가 추가되었으며, 기존 <Cmdname sid="side_nodeList" className="uitext" /> 메뉴가 개선되었습니다.
> * 쿠버네티스 구성 요소의 분석 기능을 강화하여 <Cmdname sid="TTL08317" className="uitext" type="container" />, <Cmdname sid="TTL08317" className="uitext" type="kube_pod" /> 기능을 새롭게 제공합니다.
> * 쿠버네티스 모니터링 정보 확장의 일환으로 <Cmdname sid="side_kubeServiceList" className="uitext" /> 메뉴를 새롭게 제공합니다.

*/
/*> * 애플리케이션과 데이터베이스 상품 연계 모니터링을 지원합니다. (10월, 10월에 또 클라우드 지표 긁어오는 거 가능)*/
/*

오버뷰 추가 건들

- node.js: svelt 설치 가능 문서 업데이트 (완)

- PostgreSQL: 티맥스 지원 (완)

체인지로그 추가 건들

- 디비 전 제품 지표 업데이트

*/
/*상품별 신규 기능 외 변경 사항 개요 및 해당 릴리스 버전, 에이전트 변경 사항은 다음 안내를 통해 확인할 수 있습니다.*/
/*와탭 2024년 1분기 `공통` 부분의 주목할 만한 신규 기능으로 사이드 메뉴 개편, SSO 계정 연동 기능 추가 및 새로운 이벤트 설정 기능을 소개합니다.*/
/*사용자 편의성 향상을 위해 5년 만에 와탭 모니터링의 **사이드 메뉴**가 새롭게 개편되었습니다. 와탭 서비스 이용에는 프로젝트 선택이 선행됩니다. 프로젝트 생성 및 선택 이후 동선을 편리하게 활용할 수 있도록 기존과 비교해 UI 혼잡도를 줄여 프로젝트 선택과 메뉴의 영역을 확보하는 구조로 개편되었습니다.

프로젝트 목록을 선택한 부분만 펼쳐서 확인할 수 있으며, 세로 영역을 확보해 보다 편하게 다양한 기능 메뉴를 조회할 수 있습니다. 또한 간단한 별 모양(<LinkImage img='ic-star.svg' desc='비교하기 아이콘'/>) 아이콘 클릭으로 상품별 프로젝트 메뉴 내 자주 쓰는 기능들을 즐겨찾기 할 수 있습니다.

<ImgLang img='release/release-main-ui.png' desc='사이드 메뉴 개편 cl 분기 예시' />*/
/*![공통 메트릭스 차트 v2 분기 예시2](/img/changelog/changelog-24q3-common-add_chart.gif)*/
/*다음 개요 안내를 통해 2024년 공통 부분의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요.

<details className='changelog'>
<summary><b>신규 기능 및 주요 변경 사항 안내</b></summary>

import Common_1q from "../crw-data/crwld-service/_import-service-Common.mdx";

<Common_1q />

</details>*/
/*와탭 2024년 1분기 `Application` 상품군의 주목할 만한 신규 기능 및 변경 사항으로 `Go` 상품의 정식 출시, <Cmdname sid="side_transaction_map" className="uitext" />의 고도화, 그리고 <Cmdname sid="side_statistics" className="uitext" /> 및 <Cmdname sid="side_agentsConfiguration" className="uitext" /> 메뉴 구조의 개선을 소개합니다.*/
/*그외에도 ***Top 30*** 섹션에 IP 필터 기능을 추가했고, <Cmdname sid="multi_transaction" className="uitext" /> 탭에서 프로잭트 선택 상태를 저장하는 등 트랜잭션 분석 시 편의성을 전반적으로 향상시켰습니다.*/
/*안정적으로 각 기능을 사용할 수 있도록 / 기존 문제 개선 및 다양한 안정화 작업을 진행했습니다.*/
/*다음 개요 안내를 통해 2024년 1분기 `Application` 상품군의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요.*/
/*<code class="New">New</code> `Go` 모니터링 상품 **정식 서비스** 시작 <code class='changelog-service'>Service 2.2.4​</code>*/
/*<details className='changelog'>
<summary><b>신규 기능 및 주요 변경 사항 안내</b></summary>

import Application_1q from "../crw-data/crwld-service/_import-service-Application.mdx";

<Application_1q />
</details>

<details className='changelog2'>
<summary><b>에이전트 안내</b></summary>

### `Java`

import Java_agent_1q from "../crw-data/crwld-agent/_import-agent-java.mdx";

<Java_agent_1q />

### `PHP`

import PHP_agent_1q from "../crw-data/crwld-agent/_import-agent-php.mdx";

<PHP_agent_1q />

### `Python`

import Python_agent_1q from "../crw-data/crwld-agent/_import-agent-python.mdx";

<Python_agent_1q />

### `Node.js`

import Node_agent_1q from "../crw-data/crwld-agent/_import-agent-nodejs.mdx";

<Node_agent_1q />

### `Go`

import Go_agent_1q from "../crw-data/crwld-agent/_import-agent-golang.mdx";

<Go_agent_1q />

</details>*/
/*와탭 2024년 1분기 `Server` 상품의 주목할 만한 신규 기능 및 변경 사항으로 **Unix** `AIX` 설치 패키지에 대해 소개합니다.*/
/*이번 1분기에 새롭게 **Unix** `AIX` **에이전트 설치 패키지**를 제공합니다. IBM이 개발한 AIX는 엔터프라이즈 서버에서 주로 사용됩니다. 확장성, 호환성, 엔터프라이즈 환경에서의 견고함을 위해 특별히 설계된 운영체제입니다.

와탭은 **AIX 버전 6.1** 이상을 지원합니다. `AIX` 설치 패키지를 통해*/
/*![AIX sc cl](/img/changelog/changelog-server-aix.png)*/
/*

서버 구성 정보 활용 예시 요약1:

•	라이선스 산정: 서버의 CPU, X86 socket, 물리 및 logical core 정보 등을 자동 수집하여 라이선스 비용 산정을 빠르게 처리할 수 있습니다.
•	H/W 장애 대응: 장애 발생 시, 와탭 서버 구성정보를 활용해 관련 서버와 담당자 정보를 신속히 확인하고 파트 교체 작업을 효율적으로 진행할 수 있습니다.
•	필터링 지원: 자동 수집된 서버 데이터를 바탕으로 특정 IP 대역의 서버를 필터링하여, 작업 시간에 대비한 사전 준비를 손쉽게 할 수 있습니다.
•	커뮤니케이션 지원: 사용자 정의 컬럼을 통해 서버와 서비스를 연결, 인프라와 현업 간의 의사소통을 원활하게 할 수 있습니다.

서버 구성 정보 활용 예시 요약2:

•	서버 상태 확인: 운영 중인 물리적 및 가상 서버의 현재 상태를 빠르게 파악할 수 있습니다. 예를 들어, 서버별 OS 버전이나 펌웨어 상태를 한눈에 볼 수 있어 업그레이드나 패치가 필요한 서버를 즉시 확인할 수 있습니다.
•	운영 담당자 관리: 대시보드에 커스텀 항목으로 운영 담당자 정보를 추가하면, 각 서버의 담당자와 직접적인 소통이 가능하여 문제 발생 시 빠른 대응이 가능합니다.
•	장비 교체 및 관리: 모델 번호와 시리얼 번호를 기준으로 특정 장비의 교체 주기나 보증 기간 등을 관리할 수 있습니다.

서버 구성 정보 대시보드는 서버의 중요한 데이터를 효율적으로 관리하고, 필요한 정보에 신속하게 접근할 수 있도록 돕는 핵심 기능입니다. 사용자는 이를 통해 서버 자산을 체계적으로 관리하고, 운영 효율성을 크게 향상시킬 수 있습니다.

서버 구성 정보 활용 예시:

1.	라이선스 산정 요청에 대한 신속한 응답 처리
•	S/W 라이선스를 도입할 때, 각 서버의 CPU 정보를 확인해야 하는 상황이 발생할 수 있습니다. 예를 들어, X86 소켓 개수, 물리 코어 개수, 또는 논리 코어 개수를 요구할 때가 있습니다.
•	서버 구성정보가 자동으로 수집되고 최신 상태를 유지하면, 인프라 운영자는 해당 정보를 빠르게 필터링해 CSV 파일로 다운로드하여 요청자에게 제공할 수 있습니다.
•	이를 통해 서버에 일일이 로그인해 수작업으로 데이터를 수집하는 번거로운 과정을 생략할 수 있으며, 업무 효율성을 크게 향상시킬 수 있습니다.

2.	H/W 장애 대응
•	예를 들어 F/C Adapter(파이버 채널 어댑터) 장애가 발생하여 교체가 필요한 상황에서, 여러 개의 OS가 설치된 하드웨어의 정보를 정확하게 파악해야 합니다.
•	와탭의 서버 구성정보를 통해 해당 하드웨어의 시리얼 번호 및 설치된 OS 목록, 담당자 정보를 미리 파악할 수 있습니다.
•	사용자 정의 컬럼을 사용하여 OS별 담당자나 물리적 위치 등의 추가 정보를 관리함으로써, 해당 정보를 기반으로 신속하게 작업 일정을 잡고 파트 교체 작업을 진행할 수 있습니다.

3.	다양한 필터를 통한 작업 지원
•	네트워크 스위치 교체 작업 시, 서비스에 영향을 줄 수 있는 서버들을 필터링하여 담당자들에게 작업 시간 동안 대기 요청을 할 필요가 있습니다.
•	와탭을 통해 서버의 IP 목록을 자동으로 수집하고, 특정 IP 대역을 사용하는 서버들만 필터링하여 필요한 정보를 신속하게 파악할 수 있습니다.

4.	인프라와 현업(서비스) 간의 커뮤니케이션 개선
•	인프라 운영자는 서버 이름을, 현업 담당자는 서비스 이름을 기준으로 작업하는 경우가 많아, 장애 발생 시 의사소통에 어려움이 생길 수 있습니다.
•	이를 해결하기 위해 사용자 정의 컬럼을 활용해 서버와 관련된 서비스를 연결하는 서비스 토폴로지 맵을 구성할 수 있습니다. 이를 통해 인프라 담당자와 현업 담당자가 효율적으로 소통하고, 장애 대응 속도를 높일 수 있습니다.

결론적으로, 서버 구성정보의 자동화와 현행화는 업무 효율성을 크게 높이고, 다양한 상황에서 신속한 대응과 협업을 가능하게 합니다.

서버 구성 정보 다중 정렬 기본 예시:
•	OS 타입으로 정렬하면 운영 체제별 서버 상태를 한눈에 확인할 수 있어, 특정 OS에 대한 패치나 관리 작업이 필요한 경우 유용합니다.
•	모델 기준 정렬은 서버 하드웨어의 종류나 스펙에 따라 자원을 최적화하고, 특정 모델에서 발생하는 문제를 분석하는 데 도움이 됩니다.
•	시리얼 정보는 개별 서버를 고유하게 식별할 수 있어, 특히 대규모 환경에서 특정 서버를 신속하게 찾아야 할 때 편리합니다.

*/
/*다음 개요 안내를 통해 2024년 1분기 `Server` 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요.*/
/*<details className='changelog'>
<summary><b>신규 기능 및 주요 변경 사항 안내</b></summary>

import Server_1q from "../crw-data/crwld-service/_import-service-Server.mdx";

<Server_1q />

</details>

<details className='changelog2'>
<summary><b>에이전트 안내</b></summary>

import Server_agent_1q from "../crw-data/crwld-agent/_import-agent-server.mdx";

<Server_agent_1q />

</details>*/
/*와탭 2024년 1분기 `Database` 상품군의 주목할 만한 신규 기능 및 변경 사항으로 **Redis**와 **MongoDB** 상품 <code class="my">V2</code> 출시에 대해 소개합니다.*/
/*<ImgLang img='linked-project-management.png' desc='연계 프로젝트 관리 분기 예시' />*/
/*다음 개요 안내를 통해 2024년 1분기 `Database` 상품군의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요.*/
/*<details className='changelog'>
<summary><b>신규 기능 및 주요 변경 사항 안내</b></summary>

import Database_1q from "../crw-data/crwld-service/_import-service-Database.mdx";

<Database_1q />

</details>

<details className='changelog2'>
<summary><b>에이전트 안내</b></summary>

import DBX_agent_1q from "../crw-data/crwld-agent/_import-agent-dbx.mdx";

<DBX_agent_1q />

</details>*/
/*:::note

현재 애플리케이션과 데이터베이스 연계 분석은 **Java** 플랫폼만 지원합니다. 또한 연계 DB 세션 기능의 경우 Java 에이전트 2.2.33 버전 이상이 필요합니다. **연계 분석**에 대한 자세한 내용은 [다음 문서](../oracle/linked-projects)를 참조하세요. 애플리케이션 프로젝트에서 데이터베이스 프로젝트를 연계하는 방법에 대한 자세한 내용은 [다음 문서](../java/linked-projects)를 참조하세요.

:::*/
/*와탭 2024년 1분기 `Browser` 상품의 주목할 만한 신규 기능 및 변경 사항으로 <Cmdname sid="TTL07736" className="uitext" /> 기능 및 ***사용자 정의 이벤트 수집 기능***을 소개합니다.*/
/****사용자 정의 이벤트 수집*** 기능은 브라우저 모니터링이 제공하는 기본 정보 외 사용자가 원하는 이벤트를 추가적으로 수집할 수 있는 인터페이스를 제공합니다. 브라우저 에이전트에서 제공하는 인터페이스 중 `addCustomEvent` 메소드를 이용해 사용자 정의형 이벤트를 수집 후 <Cmdname sid="side_userSessionEventSearch" className="uitext" /> 메뉴 또는 <Cmdname sid="side_flexboard" className="uitext" />를 통해 수집한 데이터를 조회할 수 있습니다.*/
/*사용자가 웹 페이지를 탐색하는 방식을 이해할 수 있도록 돕습니다. 파악을 돕습니다.*/
/*다음 개요 안내를 통해 2024년 1분기 `Browser` 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요.

<details className='changelog'>
<summary><b>신규 기능 및 주요 변경 사항 안내</b></summary>

import Browser_1q from "../crw-data/crwld-service/_import-service-Browser.mdx";

<Browser_1q />

</details>

<details className='changelog2'>
<summary><b>에이전트 안내</b></summary>

import Browser_agent_1q from "../crw-data/crwld-agent/_import-agent-browser.mdx";

<Browser_agent_1q />

</details>*/
/*최근 네트워크 시장은 클라우드와 가상화라는 큰 틀에서 성장하고 있습니다. 기존 장비 중심의 네트워크 모니터링 뿐만 아니라 작업을 수행하는 프로세스가 중요한 모니터링 대상이 되고 있습니다. 와탭 네트워크 성능 모니터링을 통해 프로세스 단위의 네트워크 지표를 안정적으로 모니터링해 보세요.*/
/*다음 개요 안내를 통해 2024년 1분기 `Network` 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요.

<details className='changelog'>
<summary><b>신규 기능 및 주요 변경 사항 안내</b></summary>

import Network_1q from "../crw-data/crwld-service/_import-service-Network.mdx";

<Network_1q />

</details>*/
/*- <code class="Beta">Beta</code> 피쳐 프로젝트(<code class='Features'>Features</code>) <code class='changelog-overview2'>Aerospike</code> <b>베타</b> 서비스 시작

- <code class="Beta">Beta</code> 피쳐 프로젝트(<code class='Features'>Features</code>) <code class='changelog-overview2'>Apache Pulsar</code> <b>베타</b> 서비스 시작*/
/*## `Log`

와탭 2024년 1분기 `Log` 상품의 주목할 만한 신규 기능 및 변경 사항으로 개편된 **로그 검색 필터 기능**을 소개합니다.

<Cmdname sid="side_logSearch" className="uitext" /> 및 <Cmdname sid="side_logTail" className="uitext" /> 메뉴 내 **로그 검색 필터 기능**이 개편되었습니다. 검색 값 입력 시 안내 가이드 UI를 통해 지원하는 검색 문법을 확인할 수 있고, 키보드 입력으로 태그를 생성 및 수정하고 연산자를 클릭해 수정할 수 있는 기능이 추가되었습니다.

또한 에이전트 옵션이 설정된 경우 로그 레벨(<span class='logwr'>WARN</span>, <span class='loger'>ERROR</span>, <span class='logft'>FATAL</span>)을 수집해 로그 목록 왼쪽에서 해당 기준 색상을 표시하는 기능이 추가되었습니다.

![로그 에이전트 옵션 cl분기 예시 ](/img/log-agent-option-level.png)

다음 개요 안내를 통해 2024년 1분기 `Log` 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요.

<details className='changelog'>
<summary><b>신규 기능 및 주요 변경 사항 안내</b></summary>

import Log_1q from "../crw-data/crwld-service/_import-service-Log.mdx";

<Log_1q />

</details>

<br/>*/
/*와탭 2024년 1분기 `Kubernetes` 상품의 주목할 만한 신규 기능 및 변경 사항으로 새로운 기능인 **컨트롤 플레인 모니터링**, <Cmdname sid="side_kubernetesAgentList" className="uitext" />, <Cmdname sid="side_deploymentList" className="uitext" />, 그리고 개편된 기능인 <Cmdname sid="side_podInitPerf" className="uitext" />과 <Cmdname sid="side_objectManifest" className="uitext" />, 아울러 새로 추가된 **Helm** 차트 설치 지원 등에 대해서 소개합니다.*/
/*

뿐만 아니라 Deployment 기준으로 리소스 관계도 및 트레이스, 로그, 메트릭스와 같은 옵저버빌리티의 핵심 데이터를 한 눈에 확인할 수 있습니다.

클러스터 관리 효율성 향상*/
/*다음 개요 안내를 통해 2024년 1분기 `Kubernetes` 상품의 신규 기능 및 주요 변경 사항을 해당 릴리스 버전과 함께 확인해 보세요.

<details className='changelog'>
<summary><b>신규 기능 및 주요 변경 사항 안내</b></summary>

import Kubernetes_1q from "../crw-data/crwld-service/_import-service-Kubernetes.mdx";

<Kubernetes_1q />

</details>

<details className='changelog2'>
<summary><b>에이전트 안내</b></summary>

import Kubernetes_agent_1q from "../crw-data/crwld-agent/_import-agent-k8s.mdx";

<Kubernetes_agent_1q />

</details>*/


const toc = [{
  "value": "<code>공통</code>",
  "id": "공통",
  "level": 2
}, {
  "value": "SSO 계정 연동",
  "id": "sso-계정-연동",
  "level": 3
}, {
  "value": "이벤트 설정 <code class=\"newfunc\">New</code>",
  "id": "이벤트-설정-new",
  "level": 3
}, {
  "value": "메트릭스 차트 <code class=\"newfunc\">New</code>",
  "id": "메트릭스-차트-new",
  "level": 3
}, {
  "value": "<code>Application</code>",
  "id": "application",
  "level": 2
}, {
  "value": "<code>Go</code> 정식 출시",
  "id": "go-정식-출시",
  "level": 3
}, {
  "value": "공통 메뉴 개선",
  "id": "공통-메뉴-개선",
  "level": 3
}, {
  "value": "트랜잭션 맵 고도화",
  "id": "트랜잭션-맵-고도화",
  "level": 3
}, {
  "value": "애플리케이션 대시보드 프리셋",
  "id": "애플리케이션-대시보드-프리셋",
  "level": 3
}, {
  "value": "<code>Server</code>",
  "id": "server",
  "level": 2
}, {
  "value": "Unix 기반 운영체제 지원 확대 및 설치 개선",
  "id": "unix-기반-운영체제-지원-확대-및-설치-개선",
  "level": 3
}, {
  "value": "서버 구성 정보",
  "id": "서버-구성-정보",
  "level": 3
}, {
  "value": "<code>Database</code>",
  "id": "database",
  "level": 2
}, {
  "value": "데이터베이스 <code class=\"my\">V2</code>",
  "id": "데이터베이스-v2",
  "level": 3
}, {
  "value": "Oracle Pro 출시",
  "id": "oracle-pro-출시",
  "level": 3
}, {
  "value": "사용자 정의형 위젯",
  "id": "사용자-정의형-위젯",
  "level": 3
}, {
  "value": "애플리케이션 연계 분석",
  "id": "애플리케이션-연계-분석",
  "level": 3
}, {
  "value": "<code>Browser</code>",
  "id": "browser",
  "level": 2
}, {
  "value": "사용자 세션 분석",
  "id": "사용자-세션-분석",
  "level": 3
}, {
  "value": "세션 리플레이",
  "id": "세션-리플레이",
  "level": 3
}, {
  "value": "페이지 로드 통계",
  "id": "페이지-로드-통계",
  "level": 3
}, {
  "value": "<code>Network</code>",
  "id": "network",
  "level": 2
}, {
  "value": "<code>Features</code>",
  "id": "features",
  "level": 2
}, {
  "value": "<code>Kubernetes</code>",
  "id": "kubernetes",
  "level": 2
}, {
  "value": "컨트롤 플레인 모니터링",
  "id": "컨트롤-플레인-모니터링",
  "level": 3
}, {
  "value": "Deployment 목록과 쿠버네티스 에이전트 목록",
  "id": "deployment-목록과-쿠버네티스-에이전트-목록",
  "level": 3
}, {
  "value": "Pod 시작 분석과 오브젝트 매니페스트",
  "id": "pod-시작-분석과-오브젝트-매니페스트",
  "level": 3
}, {
  "value": "Pending Pod 현황",
  "id": "pending-pod-현황",
  "level": 3
}, {
  "value": "리소스 관계",
  "id": "리소스-관계",
  "level": 3
}, {
  "value": "노드 모니터링 확장",
  "id": "노드-모니터링-확장",
  "level": 3
}, {
  "value": "구성 요소 분석 강화",
  "id": "구성-요소-분석-강화",
  "level": 3
}, {
  "value": "쿠버네티스 진입부 모니터링 확장",
  "id": "쿠버네티스-진입부-모니터링-확장",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    strong: "strong",
    table: "table",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, UI} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!UI) _missingMdxReference("UI", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "와탭의 2024년 1월부터 10월까지 진행된 서비스 신규 기능 및 주목할 만한 변경 사항 개요를 안내합니다. 와탭이 새롭게 제공하는 기능들을 한 눈에 살펴보세요."
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "changelog/changelog-new3.png",
      desc: "새로운 기능 sc"
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      class: "faq",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.table, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "공통"
              })
            })
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "SSO 계정 연동"
            }), " 기능이 추가되었습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_eventSettingV2",
              className: "uitext"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "newfunc",
              children: "New"
            }), " 메뉴를 새롭게 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Application"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Kubernetes"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Database"
            }), " 상품군에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_metricsChart",
              className: "uitext"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "newfunc",
              children: "New"
            }), " 메뉴를 새롭게 제공합니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.table, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Application"
              })
            })
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: "공통 메뉴가 개선되었습니다."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_transaction_map",
              className: "uitext"
            }), "이 고도화되었습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Go"
            }), " 상품 베타 서비스를 종료하고 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "정식"
            }), " 서비스를 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "application_dashboard",
              className: "uitext"
            }), "에 기본 프리셋 변경 기능이 추가되었습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Java"
            }), " 상품이 데이터베이스 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "연계 분석"
            }), "을 제공합니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.table, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Server"
              })
            })
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["Unix ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "AIX"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Oracle Solaris"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "HP-UX"
            }), " 설치 패키지를 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_serverInventory",
              className: "uitext"
            }), " 메뉴를 새롭게 제공합니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.table, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Kubernetes"
              })
            })
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "컨트롤 플레인 모니터링"
            }), "을 새롭게 제공합니다. 컨트롤 플레인 컴포넌트 중 kube-apiserver 모니터링을 위해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_kubeApiserverDashboard",
              className: "uitext"
            }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_kubeApiserverMetricsSearch",
              className: "uitext"
            }), " 기능이 추가되었습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["기존의 Pod 초기화 성능 기능 및 마스터 메타 정보 기능을 개편해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_podInitPerf",
              className: "uitext"
            }), "과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_objectManifest",
              className: "uitext"
            }), " 기능을 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["Deployment 기준으로 관련 정보를 조회할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_deploymentList",
              className: "uitext"
            }), ", 마스터 및 노드 에이전트 설치 현황을 확인할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_kubernetesAgentList",
              className: "uitext"
            }), " 기능이 추가되었습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["마스터 및 노드 에이전트 설치 시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "Helm"
            }), " 차트 설치를 지원합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "agentInstall",
              className: "uitext"
            }), " 화면이 보다 손쉬운 옵션 선택 방식으로 개편되었습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_pendingPod",
              className: "uitext"
            }), " 메뉴가 새롭게 개편되었습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_containerMap",
              className: "uitext"
            }), " 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "리소스 관계도"
              })
            }), "를 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_nodeMap",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_nodeTimeline",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_nodeDiskList",
              className: "uitext"
            }), "과 같은 신규 메뉴가 추가되었으며, 기존 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_nodeList",
              className: "uitext"
            }), " 메뉴가 개선되었습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08317",
              className: "uitext",
              type: "container"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08317",
              className: "uitext",
              type: "kube_pod"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08317",
              className: "uitext",
              type: "node"
            }), " 기능을 새롭게 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_kubeServiceList",
              className: "uitext"
            }), " 메뉴를 새롭게 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
              children: "Ingress 목록"
            }), " 메뉴를 새롭게 제공합니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.table, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Database"
              })
            })
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "MongoDB"
            }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Redis"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Oracle"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Altibase"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Cubrid"
            }), " 상품에서 차트 및 수집 기능을 강화한 새로운 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "my",
              children: "V2"
            }), " 서비스를 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Oracla Pro"
            }), " 상품 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "정식"
            }), " 서비스를 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_multiInstance",
              className: "uitext"
            }), " 메뉴의 개선이 이루어졌습니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "PostgreSQL"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "MySQL"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Oracle"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "my",
              children: "V2"
            }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Oracla Pro"
            }), " 상품이 애플리케이션 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "연계 분석"
            }), "을 제공합니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["현재 데이터베이스 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                class: "my",
                children: "V2"
              }), " 지원 플랫폼은 다음과 같습니다."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "PostgreSQL"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "MySQL"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "MongoDB"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Redis"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Altibase"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Cubrid"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Oracle"
              }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Oracle Pro"
              })]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["데이터베이스 플랫폼별 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                class: "my",
                children: "V2"
              }), " 지원 에이전트 버전은 다음과 같습니다."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "PostgreSQL"
              }), "(v1.6.7), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "MySQL"
              }), "(v1.6.8), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "MongoDB"
              }), "(v1.7.0), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Redis"
              }), "(v1.7.0), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Altibase"
              }), "(v2.0.0), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Cubrid"
              }), "(v2.1.0), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Oracle"
              }), "(v1.9.0), ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "Oracle Pro"
              }), "(에이전트 별도 제공)"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.table, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Browser"
              })
            })
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07736",
              className: "uitext"
            }), " 기능을 새롭게 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08103",
              className: "uitext"
            }), " 기능을 새롭게 제공합니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
              children: "페이지 로드 통계"
            }), " 기능을 새롭게 제공합니다."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.table, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Network"
              })
            })
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "네트워크 성능 모니터링"
          }), "(Network Performance Monitoring) 상품이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "정식"
          }), "으로 출시되었습니다."]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.table, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Features"
              })
            })
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "KAFKA"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Aerospike"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Apache Pulsar"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "NGINX"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "vCenter"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "APACHE"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "베타"
          }), " 서비스를 제공합니다."]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.table, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tr, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Log"
              })
            })
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
            children: "로그 검색"
          }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
            children: "라이브 테일"
          }), " 메뉴에서 검색 조건 즐겨찾기 기능을 제공합니다."]
        }), "\n"]
      })]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "공통",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "공통"
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "sso-계정-연동",
      children: "SSO 계정 연동"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "SSO 계정 연동 기능"
      }), "이 추가되었습니다. 클라우드 기반 사용자 계정 관리 및 접근 권한 관리 솔루션 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Okta"
      }), "와 와탭 모니터링을 연동할 수 있습니다. 조직 내에서 사용 중인 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Okta"
      }), " 계정을 이용해 와탭 서비스에 로그인 후 서비스를 이용할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "sso-check-sso-info.png",
      desc: "sso-info cl 분기 예시"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "이벤트-설정-new",
      children: ["이벤트 설정 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "newfunc",
        children: "New"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["새로운 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_eventSetting",
        className: "uitext"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "newfunc",
        children: "New"
      }), " 기능은 필드(Field) 중심의 사용자 경험을 강화하여 카테고리보다 필드를 먼저 선택하는 방식으로 사용자가 인지하는 지표와 이벤트 설정의 불일치를 해소했습니다. 또한 상품에 적합한 기본 이벤트 템플릿을 제공해 보다 쉽게 경고 알림 이벤트를 설정할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "이벤트 v2 cl 분기 예시",
        src: (__webpack_require__(74118)/* ["default"] */ .A) + "",
        width: "800",
        height: "513"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["기존 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_eventSettingV2",
        className: "uitext"
      }), " 및 새로운 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_eventSettingV2",
        className: "uitext"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "newfunc",
        children: "New"
      }), " 메뉴에 검색 기능이 추가되었습니다. 이벤트 목록 오른쪽 상단의 검색 입력창을 통해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "event_title",
        className: "uitext"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "ITM07659",
        className: "uitext"
      }), "를 기준으로 문자열을 입력하거나 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "event_name",
        className: "uitext"
      }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "event_tag",
        className: "uitext"
      }), " 중 원하는 기준을 선택 후 문자열을 입력하여 이벤트를 검색할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "공통 이벤트 검색 분기 예시",
        src: (__webpack_require__(42310)/* ["default"] */ .A) + "",
        width: "1208",
        height: "463"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "메트릭스-차트-new",
      children: ["메트릭스 차트 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "newfunc",
        children: "New"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Application"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Kubernetes"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Database"
      }), " 상품군 공통으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_metricsChart",
        className: "uitext"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "newfunc",
        children: "New"
      }), " 메뉴가 새롭게 개편되었습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_metricsChart",
        className: "uitext"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "newfunc",
        children: "New"
      }), "는 사용자 경험을 대폭 개선하여 모니터링 작업을 더욱 효율적으로 수행할 수 있도록 설계되었습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "공통 메트릭스 차트 v2 분기 예시",
        src: (__webpack_require__(51491)/* ["default"] */ .A) + "",
        width: "1200",
        height: "661"
      })
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["사용자는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "시간"
        })
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "대상"
        })
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "인터벌"
        })
      }), " 설정을 한 번에 처리하고 쉽게 차트를 추가할 수 있습니다. 또한 대시보드 위젯의 시간 범위를 자유롭게 변경할 수 있으며 일괄 변경 기능과 프리셋 기능을 통해 설정 관리가 간편해졌습니다. 이와 더불어 대시보드 레이아웃과 위젯도 자유롭게 조정할 수 있어 차트 분석이 더욱 효율적으로 개선되었습니다."]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["사이드 메뉴 개편에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://www.whatap.io/bbs/board.php?bo_table=blog&wr_id=214",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["SSO 계정 연동 기능에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://docs.whatap.io/account/sso",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["새로운 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_eventSetting",
              className: "uitext"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "newfunc",
              children: "New"
            }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://docs.whatap.io/java/warning-notice-v2",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["새로운 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_metricsChart",
              className: "uitext"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "newfunc",
              children: "New"
            }), " 메뉴에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../java/metrics-chart-v2",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "application",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Application"
      })
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "go-정식-출시",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Go"
      }), " 정식 출시"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Go"
      }), " 애플리케이션 모니터링이 베타 버전 종료 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "정식"
      }), " 서비스를 시작했습니다. 와탭의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Go"
      }), " 애플리케이션 모니터링은 웹 프레임워크를 지원하고, Go Runtime 패키지의 정보를 지속적으로 수집합니다. 또한 MSA 환경에서 연계 추적을 통해 호출 관계를 수집합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "공통-메뉴-개선",
      children: "공통 메뉴 개선"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_statistics",
        className: "uitext"
      }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " 메뉴의 경우 각 메뉴의 탭 메뉴 구성을 개별 하위 메뉴로 구성하는 등 동선과 안정성 향상을 위한 개선 작업이 이루어졌습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "통계 및 인스턴스 성능 모니터링 sc cl",
        src: (__webpack_require__(21959)/* ["default"] */ .A) + "",
        width: "1191",
        height: "665"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "트랜잭션-맵-고도화",
      children: "트랜잭션 맵 고도화"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_transaction_map",
        className: "uitext"
      }), "은 성능 테스트 또는 장애 상황 발생 시 단기간 트랜잭션별 현황을 상세히 확인할 수 있는 메뉴입니다. 다음과 같이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_transaction_map",
        className: "uitext"
      }), " 고도화 작업이 이루어졌습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["기존 TX 트레이스 섹션을 제거한 대신 차트 드래그 시 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "TTL06209",
        className: "uitext"
      }), " 팝업 창을 통해 상세 정보를 확인할 수 있도록 구조를 개선했습니다. 또한 트레이스 분석 건수를 기존 100건에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "1000"
      }), "건으로 확장해 이전보다 10배 많은 트레이스를 분석할 수 있게 되었습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["그외에도 한 화면에서 필터를 적용해 동작을 최소화하는 방향으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "필터"
      }), " 기능을 개선하였습니다. 예를 들어 트랜잭션 필터를 이용해 선택한 트랜잭션만 선별해 조회할 수 있습니다. 그리고 기존 실시간 최대 5분 뿐만 아니라 과거 시점 최대 10분까지 데이터를 조회할 수 있도록 변경해 전반적으로 편의성을 향상시켰습니다."]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "changelog/changelog-app-tx-map.png",
      desc: "sc",
      className: "changelog-img"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["또한 응답 시간 분포도 차트에서 선택한 항목만을 조회할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "커스텀 필터"
      }), " 기능을 새롭게 제공합니다. 기존 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "TOP 30"
        })
      }), " 섹션 옆의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "custom",
        className: "uitext"
      }), " 탭에서 조회를 원하는 특정 트랜잭션, 도메인, IP 항목에서 원하는 값을 직접 입력하거나 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "TOP 30"
        })
      }), " 목록에서 제공하는 항목을 선택하세요. 선택한 항목들의 응답 시간 분포도가 차트에 실시간으로 필터링됩니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      align: "center",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "트랜잭션 맵 커스텀 필터 분기 예시",
          src: (__webpack_require__(99378)/* ["default"] */ .A) + "",
          width: "1627",
          height: "942"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "애플리케이션-대시보드-프리셋",
      children: "애플리케이션 대시보드 프리셋"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "application_dashboard",
        className: "uitext"
      }), " 메뉴로 처음 진입했을 때 조회할 수 있는 대시보드 기본 프리셋을 변경할 수 있습니다. 선호하는 대시보드 구성을 기본 프리셋으로 설정함으로써 보다 개인화된 사용자 경험을 제공합니다. 위젯 선택과 배치를 원하는대로 수정 후 대시보드 오른쪽 위에 있는 프리셋 선택 상자에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "BTN08106",
        className: "uitext"
      }), " 옵션을 활용해 보세요. 기본으로 지정한 대시보드는 프리셋 목록에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "default-tag",
        children: "기본"
      }), " 태그가 표시됩니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "애플리케이션 대시보드 기본 프리셋 분기 예시",
        src: (__webpack_require__(48360)/* ["default"] */ .A) + "",
        width: "1234",
        height: "725"
      })
    }), "\n", "\n", "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["애플리케이션 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: ".NET"
            }), " 상품의 지원 범위가 기존 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: ".NET"
            }), " Framework뿐만 아니라 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: ".NET"
            }), " Core까지 확대되었습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: ".NET"
            }), " 상품이 멀티 트랜잭션을 지원합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Node.js"
            }), " 상품이 로그 모니터링을 제공합니다."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_transaction_map",
              className: "uitext"
            }), " 메뉴의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "커스텀 필터"
            }), " 기능에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://docs.whatap.io/java/dashboard-transactionmap#custom",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "application_dashboard",
              className: "uitext"
            }), " 기본 프리셋 변경에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://docs.whatap.io/java/dashboard#changepreset",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_statIp",
              className: "uitext"
            }), " 메뉴에 대한 자세한 설명은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../java/analysis-apm-trs#statiptx",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_threadList",
              className: "uitext"
            }), " 메뉴에 대한 활용 안내는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../best-practice-guides/about-instance-performance-analysis#advanced-use-thread-list-dump",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "server",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Server"
      })
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "unix-기반-운영체제-지원-확대-및-설치-개선",
      children: "Unix 기반 운영체제 지원 확대 및 설치 개선"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Unix"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "AIX"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Solaris"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "HP-UX"
      }), " 설치 패키지를 제공합니다. 해당 패키지를 다운로드 받은 후 실행하는 것만으로 간단하게 설치할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "AIX"
          }), " 6.1 버전 이상을 지원"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Solaris"
          }), " 버전 11.2 이상을 지원"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "HP-UX"
          }), " Itanium 버전 11.23과 PA-RISC-UX 버전 11.23을 지원"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "또한 서버 모니터링 상품 설치 과정이 보다 직관적인 방식으로 개선되었습니다. 기존의 운영 체제별 탭 분리 방식 대신 사용자가 운영 체제를 먼저 선택 후 해당 OS에 맞는 개별 설치 페이지로 이동합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "서버 모니터링 설치 페이지 sc",
        src: (__webpack_require__(42986)/* ["default"] */ .A) + "",
        width: "1012",
        height: "735"
      })
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "서버-구성-정보",
      children: "서버 구성 정보"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭은 새롭게 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverInventory",
        className: "uitext"
      }), " 메뉴를 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverInventory",
        className: "uitext"
      }), "는 서버의 물리적 특성 및 가상적 특성, 운영 환경 등을 체계적으로 관리하기 위한 기능입니다. 자동으로 수집된 서버 구성 요소와 사용자 정의 항목을 통해 서버의 구성을 상세하게 파악하고 관리하는 것이 가능합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "서버 구성 요소 sc",
        src: (__webpack_require__(40638)/* ["default"] */ .A) + "",
        width: "1210",
        height: "444"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["사용자 정의 항목을 통해 커스텀 컬럼을 구성하여 서버 상태 및 성능을 더욱 세밀하게 모니터링하고 이슈 상황에 대응할 수 있습니다. 예를 들어 각 서버 담당자와 직접적인 소통이 용이하도록 운영 담당자 정보를 추가하여 문제 시 빠른 대응이 가능합니다. 또한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_serverInventory",
        className: "uitext"
      }), " 메뉴는 3단계의 다중 정렬을 통해 조건에 맞는 서버를 빠르게 필터링 할 수 있습니다. 기본 정렬은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "OS 타입"
        })
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "모델"
        })
      }), ", 그리고 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "시리얼 정보"
        })
      }), " 기준입니다."]
    }), "\n", "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_serverInventory",
          className: "uitext"
        }), " 메뉴에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "../server/server-inventory",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "database",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Database"
      })
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "데이터베이스-v2",
      children: ["데이터베이스 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "my",
        children: "V2"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Database"
      }), " 상품군이  ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "my",
        children: "V2"
      }), "로 전환되고 있습니다. 23년 4분기 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "PostgreSQL"
      }), "과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "MySQL"
      }), "에 뒤이어 24년 와탭 데이터베이스 상품군 중 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Redis"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "MongoDB"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Altibase"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Cubrid"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Oracle"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "my",
        children: "V2"
      }), " 서비스를 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "my",
        children: "V2"
      }), "는 전반적으로 차트 및 수집 기능이 강화되었습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "데이터베이스 sc cl ",
        src: (__webpack_require__(13837)/* ["default"] */ .A) + "",
        width: "772",
        height: "484"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_dashboard",
        className: "uitext"
      }), " 메뉴의 UI 및 기능을 개선하였으며, 해당 메뉴에서 데이터베이스의 성능 지표 정보를 바로 확인할 수 있습니다. 또한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_multiInstance",
        className: "uitext"
      }), " 메뉴에서 클러스터별 에이전트를 선택할 수 있습니다. 그리고 데이터베이스 로그를 검색하고 추이를 확인하고 로그 관련 알림을 받을 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_log",
        className: "uitext"
      }), " 메뉴를 제공합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "my",
        children: "V2"
      }), " 전환과 동시에 기존 XOS와 XOS2로 나누어져 있던 지표를 %로 확인할 수 있는 백분률 표기로 변경하고 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "XOS"
      }), "로 통합해 제공합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "oracle-pro-출시",
      children: "Oracle Pro 출시"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Oracle Pro"
      }), " 정식 서비스가 시작되었습니다. 와탭 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Oracle Pro"
      }), "는 데이터베이스 서버의 메모리에 직접 접근해 성능 지표를 모니터링하며, 최대 1초에 20번까지 최신 성능 정보를 수집합니다. 디스크 I/O를 거치지 않아 시스템 부하를 최소화하고, 쿼리 실행 시간과 버퍼 캐시 상태 등의 정밀한 성능 분석을 제공합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "db-multi-instance-oracle-pro.png",
      desc: "오라클 v2 신규 분기 예시"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "사용자-정의형-위젯",
      children: "사용자 정의형 위젯"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_multiInstance",
        className: "uitext"
      }), " 메뉴 개선과 함께 새롭게 사용자 정의형 위젯을 제공합니다. 대시보드에서 기본 제공되는 지표 외에 사용자가 원하는 지표를 추가할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "사용자 정의형 위젯 분기 예시",
        src: (__webpack_require__(36920)/* ["default"] */ .A) + "",
        width: "1200",
        height: "713"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "애플리케이션-연계-분석",
      children: "애플리케이션 연계 분석"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "연계 프로젝트"
        })
      }), "를 통해 애플리케이션과 데이터베이스 프로젝트 간 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "연계 분석"
        })
      }), " 기능을 제공합니다. 데이터베이스 프로젝트 내 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "인스턴스 모니터링"
        })
      }), " 메뉴에서 실시간으로 데이터베이스에서 활성화된 세션과 연동된 애플리케이션의 액티브 트랜잭션 정보를 조회하여 애플리케이션과 데이터베이스 간 상호작용을 살펴볼 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "db-linked-project-instance-monitoring-postgresql.png",
      desc: "연계 분석 분기 예시"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Java 프로젝트 내 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "애플리케이션 대시보드"
        })
      }), "에서는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "연계 DB 세션"
        })
      }), " 기능을 통해 액티브 트랜잭션과 연계된 데이터베이스의 SQL 성능을 조회할 수 있습니다. 연계 프로젝트 관리 기능은 여러 프로젝트의 데이터를 통합적으로 확인하여 문제 원인을 빠르게 파악하고 효율적으로 성능 관리를 할 수 있도록 돕습니다."]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["현재 애플리케이션과 데이터베이스 연계 분석은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Java"
      }), " 플랫폼만 지원합니다. 또한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "연계 DB 세션"
        })
      }), " 기능의 경우 Java 에이전트 2.2.33 버전 이상이 필요합니다. 데이터베이스 플랫폼의 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PostgreSQL"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MySQL"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Oracle"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "my",
        children: "V2"
      }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Oracle Pro"
      }), " 플랫폼이 해당 기능을 지원합니다."]
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Oracle Pro"
            }), " 상품에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../oracle-pro/monitoring-intro",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_multiInstance",
              className: "uitext"
            }), " 메뉴의 사용자 정의 위젯에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../oracle/multi-instance-monitoring#customwidget",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "연계 분석"
            }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../oracle/linked-projects",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["애플리케이션 프로젝트에서 데이터베이스 프로젝트를 연계하는 방법에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../java/linked-projects",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "browser",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Browser"
      })
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "사용자-세션-분석",
      children: "사용자 세션 분석"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["새롭게 제공하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "TTL07736",
        className: "uitext"
      }), " 기능은 사용자의 웹 페이지 탐색 방식을 파악하고자 할 때 활용할 수 있습니다. 사용자가 어떻게 움직이고, 어떤 페이지에 머무르고 있는지, 화면의 어떤 요소를 클릭하는지, 화면에서 발생하는 에러 등에 관한 사용자의 전반적인 활동을 분석해 사용자가 서비스를 이용하는 방식에 대한 통찰을 얻는 것뿐 아니라 사용자의 행동 패턴을 이해하는 데에 더 가까워질 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_userSessionEventSearch",
        className: "uitext"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_ajaxAnalytics",
        className: "uitext"
      }), "과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_rumPageLoadHitmap",
        className: "uitext"
      }), "을 이용해 사용자의 페이지 내 행동 분석 및 세션 중 발생하는 여러 에러 추적이 가능합니다. 세션 로그 정보를 통해 최종 사용자의 경로, 이탈 원인, 성능 및 사용자 경험 등을 분석할 수 있습니다. 또한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "AJAX 히트맵"
        })
      }), "과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_rumPageLoadHitmap",
        className: "uitext"
      }), "에서 실시간으로 문제를 겪고 있는 사용자를 파악할 수 있습니다. 이러한 정보를 통해 사용자의 서비스 경험과 서비스의 현재 성능 상태를 확인할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "browser-search-user-session-log-analysis.png",
      desc: "사용자 세션 분석 분기 예시",
      className: "changelog-img"
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "세션-리플레이",
      children: "세션 리플레이"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["새롭게 제공하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "TTL08103",
        className: "uitext"
      }), " 기능은 사용자가 웹 사이트에서 수행하는 모든 이벤트를 자동으로 기록하고 재생할 수 있는 기능입니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "사용자의 클릭, 스크롤, 입력, 페이지 전환 등과 같은 모든 이벤트를 정확하게 재현하여 웹 사이트와 사용자 사이의 상호작용을 분석할 수 있습니다. 이를 통해 실제 사용자 경험을 재현하여 잠재적인 문제를 빠르게 식별하고 해결할 수 있으며, 사용자의 웹 사이트 사용 방식에 대한 통찰을 제공하여 최적화를 도울 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "세션 리플레이 sc",
        src: (__webpack_require__(65258)/* ["default"] */ .A) + "",
        width: "1288",
        height: "613"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "페이지-로드-통계",
      children: "페이지 로드 통계"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["새롭게 제공하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
        children: "페이지 로드 통계"
      }), " 기능은 웹 사이트의 페이지별 로드 성능 정보를 제공합니다. 각 페이지의 로드 과정을 추적하여 성능 저하 원인을 파악하고, 최적화된 페이지의 개선 효과를 확인할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "페이지 그룹"
        })
      }), "을 기준으로 페이지 로드 시간 및 DOM 로드 시간, 네트워크 지연 시간, 리소스 로드 시간 등 다양한 성능 지표를 제공합니다. 이를 통해 페이지 성능 최적화 여부를 확인할 수 있습니다"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "browser-pageload-statistics.png",
      desc: "페이지 로드 통계 분기 예시"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07736",
              className: "uitext"
            }), " 기능에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../browser/user-session-log-search#analysisusersession",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08103",
              className: "uitext"
            }), " 기능에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../browser/session-replay",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
              children: "페이지 로드 통계"
            }), " 기능에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../browser/pageload-stat",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "network",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Network"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 2024년 1분기에 네트워크 간의 혼잡 및 장애를 파악하고 사용자의 네트워크 성능 개선을 위해 프로세스의 네트워크 정보를 수집하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "네트워크 성능 모니터링"
      }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Network Performance Monitoring"
      }), ") 상품이 정식으로 출시되었습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "네트워크 모니터링 sc cl ",
        src: (__webpack_require__(87937)/* ["default"] */ .A) + "",
        width: "972",
        height: "984"
      })
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Network"
      }), " 상품은 각 프로세스가 수행하는 네트워크 동작을 추적해 복잡한 구성 요소와 상태 정보를 토폴로지를 통해 직관적으로 이해할 수 있도록 시각화했습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "품질 지표"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Latency"
        })
      }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Jitter"
        })
      }), ", 그리고 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "네트워크 사용량 지표"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "bps"
        })
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "pps"
        })
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "session count"
        })
      }), "를 조회할 수 있습니다. 또한 태그 옵션으로 가시성을 확보하였으며, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_flexboard",
        className: "uitext"
      }), "를 통해 다양한 사용자 커스텀 차트를 제공합니다."]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Network"
            }), " 상품에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://docs.whatap.io/npm/introduction",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["AWS 리소스 식별 관련한 에이전트 옵션 안내에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://docs.whatap.io/npm/set-aws-resource-options",
              children: "다음 문서"
            }), "를 확인하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "features",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Features"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 피쳐 프로젝트(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "Features",
        children: "Features"
      }), ") 방식으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "KAFKA"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Aerospike"
      }), ",", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Apache Pulsar"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "vCenter"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NGINX"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "APACHE"
      }), " 모니터링 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "베타"
      }), " 서비스를 시작하였습니다. 추후 정식 배포 예정이며 지원 범위 역시 확대될 예정입니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "피쳐 프로젝트 분기 예시",
        src: (__webpack_require__(54383)/* ["default"] */ .A) + "",
        width: "857",
        height: "596"
      })
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "Beta",
              children: "Beta"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "KAFKA"
            }), " 모니터링에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../features/kafka-introduction",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "Beta",
              children: "Beta"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Aerospike"
            }), " 모니터링에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../features/aerospike-introduction",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "Beta",
              children: "Beta"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "Apache Pulsar"
            }), " 모니터링에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../features/apache-pulsar-introduction",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "Beta",
              children: "Beta"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "vCenter"
            }), " 모니터링에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../features/vcenter-introduction",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "Beta",
              children: "Beta"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "NGINX"
            }), " 모니터링에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../features/nginx-introduction",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              class: "Beta",
              children: "Beta"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "APACHE"
            }), " 모니터링에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../features/apache-introduction",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "kubernetes",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Kubernetes"
      })
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "컨트롤-플레인-모니터링",
      children: "컨트롤 플레인 모니터링"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 쿠버네티스 모니터링은 새롭게 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "컨트롤 플레인 모니터링"
      }), "을 제공합니다. 쿠버네티스 클러스터 전반을 관리하는 컨트롤 플레인 컴포넌트 중 클러스터 내 API 요청을 처리하는 kube-apiserver에 대한 가시성 확보를 위해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_kubeApiserverDashboard",
        className: "uitext"
      }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_kubeApiserverMetricsSearch",
        className: "uitext"
      }), " 기능이 추가되었습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_kubeApiserverDashboard",
        className: "uitext"
      }), "는 kube-apiserver의 상태 및 성능 메트릭 수집, 응답 시간, 처리량, 요청 실패 등을 추적하여 클러스터의 가용성과 성능을 모니터링할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_kubeApiserverMetricsSearch",
        className: "uitext"
      }), "를 통해서는 kube-apiserver 수집 지표 목록을 조회할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "컨트롤 플레인 모니터링 sc cl",
        src: (__webpack_require__(30471)/* ["default"] */ .A) + "",
        width: "1082",
        height: "774"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "deployment-목록과-쿠버네티스-에이전트-목록",
      children: "Deployment 목록과 쿠버네티스 에이전트 목록"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["또한 Deployment 기준으로 관련 정보를 조회할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_deploymentList",
        className: "uitext"
      }), ", 마스터 및 노드 에이전트 설치 현황을 확인할 수 있는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_kubernetesAgentList",
        className: "uitext"
      }), " 기능이 추가되었습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["개별 Pod 보다 Pod 집합 상태를 모니터링하는 것이 서비스 안정성과 성능 확보를 위해 중요합니다. 애플리케이션 배포 및 업데이트를 담당하는 Deployment 모니터링은 그러한 의미에서 필수적입니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_deploymentList",
        className: "uitext"
      }), "에서 리소스 관계도 및 클러스터 내 Pod, 컨테이너, 애플리케이션 현황 및 CPU, 메모리, 트랜잭션 수 등 주요 성능 지표를 Deployment 단위로 조회할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["또한 새롭게 추가된 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_kubernetesAgentList",
        className: "uitext"
      }), "에서는 마스터 및 노드 에이전트 설치 현황을 한 눈에 살펴볼 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "pod-시작-분석과-오브젝트-매니페스트",
      children: "Pod 시작 분석과 오브젝트 매니페스트"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["기존의 Pod 초기화 성능 기능 및 마스터 메타 정보 기능을 개편해 각 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_podInitPerf",
        className: "uitext"
      }), "과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_objectManifest",
        className: "uitext"
      }), " 기능을 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_podInitPerf",
        className: "uitext"
      }), "은 Pod별 시작 시점 정밀 분석을 통해 기동에 소요되는 시간과 리소스 사용량에 대한 상세 데이터를 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_objectManifest",
        className: "uitext"
      }), "는 오브젝트별 과거 조회 및 비교 기능이 추가되어 클러스터 내 변동 사항을 쉽게 추적할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "오브젝트 매니페스트 및 Pod 시작 분석 sc cl",
        src: (__webpack_require__(82326)/* ["default"] */ .A) + "",
        width: "1010",
        height: "771"
      })
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["아울러 마스터 및 노드 에이전트 설치 시 기존 Yaml 파일 방식 외 운영 복잡도를 덜어줄 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Helm"
      }), " 차트 설치 방식을 공식적으로 지원합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "pending-pod-현황",
      children: "Pending Pod 현황"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_lab",
        className: "uitext"
      }), " 메뉴에서 제공되던 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_pendingPod",
        className: "uitext"
      }), " 기능이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "my",
        children: "V2"
      }), "로 개편되면서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_workload",
        className: "uitext"
      }), " 하위 메뉴로 정식 배포되었습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_pendingPod",
        className: "uitext"
      }), " 기능은 Pending 상태의 Pod에 대한 실시간 가시성을 제공함은 물론 Pending의 원인 분석을 가능하게 하는 연계 데이터를 함께 제공합니다. 이를 통해 클러스터 및 서비스의 가용성을 높일 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "k8s-pending-pod-status-detail.png",
      desc: "Pending Pod 상세 분기 예시"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "리소스-관계",
      children: "리소스 관계"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_containerMap",
        className: "uitext"
      }), "에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "TTL07237",
        className: "uitext"
      }), " 기능이 추가되었습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "TTL07237",
        className: "uitext"
      }), " 기능을 사용하면 쿠버네티스 리소스 간 계층 구조 및 연결 관계를 시각적으로 확인할 수 있기에 쿠버네티스 환경 분석은 물론 문제 발생 시 원인 파악 및 영향도를 한 눈에 파악할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      align: "center",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "리소스 관계 분기 예시",
          src: (__webpack_require__(45440)/* ["default"] */ .A) + "",
          width: "600",
          height: "203"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "노드-모니터링-확장",
      children: "노드 모니터링 확장"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 쿠버네티스 모니터링은 노드 모니터링 확장과 함께 여러 가지 새로운 기능을 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeMap",
        className: "uitext"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeTimeline",
        className: "uitext"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeDiskList",
        className: "uitext"
      }), "과 같은 신규 메뉴가 추가되었으며, 기존 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeList",
        className: "uitext"
      }), " 메뉴가 보다 효율적으로 개선되었습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeMap",
        className: "uitext"
      }), "을 통해 클러스터 관점에서 노드 상태를 모니터링할 수 있습니다. 노드의 실시간 상태, 리소스 사용 현황 및 노드 간 관계를 직관적으로 파악할 수 있으며, 그룹화, 임계치 설정, 라벨 등의 사용자 설정을 통해 사용자가 원하는 방식으로 대시보드를 구성할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "k8s-node-map-custom.png",
      desc: "k8s 노드맵 분기 예시"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeTimeline",
        className: "uitext"
      }), " 메뉴에서 시간에 따라 노드의 상태 변화를 추적할 수 있습니다. 예를 들어 특정 노드의 제거 시점 및 해당 시점의 상태를 시각적으로 파악할 수 있습니다. 이를 통해 클러스터 운영 중 발생한 이슈 분석이나 과거 상황을 확인하는 데 유용합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "k8s-node-timeline-stage.png",
      desc: "k8s 노드 타임라인 분기 예시"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeDiskList",
        className: "uitext"
      }), "을 통해 노드에 마운트된 개별 디스크의 상태를 실시간으로 모니터링할 수 있습니다. 그리고 기존 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeList",
        className: "uitext"
      }), " 메뉴의 비교 및 상세 정보 조회 기능이 개선되었습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeDetail",
        className: "uitext"
      }), " 메뉴로 이동하는 대신 선택한 노드의 구성 및 리소스, 메트릭스, 이벤트 정보를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_nodeList",
        className: "uitext"
      }), " 상세 모달을 통해 확인할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "구성-요소-분석-강화",
      children: "구성 요소 분석 강화"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "TTL08317",
        className: "uitext",
        type: "container"
      }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "TTL08317",
        className: "uitext",
        type: "kube_pod"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "TTL08317",
        className: "uitext",
        type: "node"
      }), " 기능이 새롭게 제공되어, 각 구성 요소의 성능과 상태를 종합적으로 분석할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_containerMap",
        className: "uitext"
      }), "과 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
        children: "노드 맵"
      }), "의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "TTL06782",
        className: "uitext"
      }), " 탭에서 원하는 요약 분석 정보를 확인할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "k8s 성능 요약 분석 분기 예시",
        src: (__webpack_require__(98546)/* ["default"] */ .A) + "",
        width: "2532",
        height: "1414"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "쿠버네티스-진입부-모니터링-확장",
      children: "쿠버네티스 진입부 모니터링 확장"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 쿠버네티스 모니터링 정보 확대의 일환으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_kubeServiceList",
        className: "uitext"
      }), " 메뉴와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
        children: "Ingess 목록"
      }), " 메뉴가 새롭게 추가되어, 각 서비스의 구성과 연결된 파드 상태 및 쿠버네티스 클러스터로 들어오는 외부 트래픽의 흐름까지 확인할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "k8s-service-list.png",
      desc: "k8s Service 목록 분기 예시"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "k8s-ingress-list.png",
      desc: "k8s 인그레스 목록 분기 예시"
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_kubeApiserverDashboard",
              className: "uitext"
            }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://docs.whatap.io/kubernetes/kube-apiserver-dashboard",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_kubeApiserverMetricsSearch",
              className: "uitext"
            }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://docs.whatap.io/kubernetes/kube-apiserver-metrics-search",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_deploymentList",
              className: "uitext"
            }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://docs.whatap.io/kubernetes/deployment-list",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_kubernetesAgentList",
              className: "uitext"
            }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://docs.whatap.io/kubernetes/agent-list",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["마스터 및 노드 에이전트 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "Helm"
            }), " 차트 설치 방식에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://docs.whatap.io/kubernetes/install-master-node-agent#create-kubernetes-agent",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_nodeMap",
              className: "uitext"
            }), " 메뉴에 대한 더 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../kubernetes/node-map",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_nodeTimeline",
              className: "uitext"
            }), " 메뉴에 대한 더 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../kubernetes/node-timeline",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_nodeDiskList",
              className: "uitext"
            }), " 메뉴에 대한 더 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../kubernetes/node-disk-list",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08317",
              className: "uitext",
              type: "container"
            }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL08317",
              className: "uitext",
              type: "kube_pod"
            }), " 기능에 대한 더 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../kubernetes/container-map-target-info#kube-resource-summary-analysis",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_kubeServiceList",
              className: "uitext"
            }), " 메뉴에 대한 더 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../kubernetes/service-list",
              children: "다음 문서"
            }), "를 참조하세요."]
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

/***/ 82799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/teamtwj-8ca548071cd575b2056335d511c4c2fc.svg");

/***/ }),

/***/ 48360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-24q2-app-preset-396ec7afa5ede6de8e3df27c48c20156.png");

/***/ }),

/***/ 99378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-24q2-app-trs-map-f8697673ccb5a5e11ecb2cbc60f1598c.gif");

/***/ }),

/***/ 65258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-24q2-browser1-9a2a14b2625639c2309b88bb0facfd3e.png");

/***/ }),

/***/ 42986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-24q2-server-c38fd8c9740e5fa7f83184f12e6ba18c.png");

/***/ }),

/***/ 51491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-24q3-common-metrics-chart-a2b9ddcc453253d55e7b04e9d4e81f13.gif");

/***/ }),

/***/ 42310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-24q3-common1-804675c07c8dd9dd134a5365091f6350.png");

/***/ }),

/***/ 36920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-24q3-db-custom-ccb5765068080580ae6ca203ab7316d5.png");

/***/ }),

/***/ 54383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-24q3-feature-c643cb72621cdd4f2b8c97ffd367ba85.png");

/***/ }),

/***/ 98546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-24q3-k8s-summary-44e90958eb6e7b7b8fa528d1e8dce1dc.gif");

/***/ }),

/***/ 40638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-24q3-server-inventory-f487dcc54c2c467739cfc7fea9745b97.png");

/***/ }),

/***/ 21959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-app-stat-instance-83702c43a9311376acaefff7da6bc96c.png");

/***/ }),

/***/ 74118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-common-event-v2-1dca8eba6848781ab8443580555a0057.png");

/***/ }),

/***/ 13837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-db-9736874a75406ed11ee29e0f828baa55.png");

/***/ }),

/***/ 30471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-k8s-kube-apiserver-c3a6ec1b34e8e287f3c9967d770287c9.png");

/***/ }),

/***/ 82326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-k8s-om-podinit-539a2c819836711bd67ccce0f57fdbf3.png");

/***/ }),

/***/ 87937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/changelog-network-03e52d28329611577b24b6bab5268f43.png");

/***/ }),

/***/ 45440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-container-detail-rr-s-65b4b14aa928dfc3f09abaf91b64f4da.png");

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