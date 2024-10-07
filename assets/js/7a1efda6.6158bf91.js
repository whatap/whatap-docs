"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[29070],{

/***/ 45472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/release-notes/java/java-agent.json
const java_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/release-notes/java/java-2_2_39","ver":"v2.2.39","date":"2024-09-30","Lists":[{"ver":"v2.2.39","hash":"v2239","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Java 21 지원</p>"},{"ver":"v2.2.39","hash":"v2239","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> dyanmodb-2.25 추적 (dynamodb-enhanced)</p>"},{"ver":"v2.2.39","hash":"v2239","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> retrofit-2.5 추적</p>"},{"ver":"v2.2.39","hash":"v2239","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> undertow-server-2.2, undertow-servlet-2.2 추적</p>"},{"ver":"v2.2.39","hash":"v2239","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> vertx-4.5 추적</p>"},{"ver":"v2.2.39","hash":"v2239","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> http-call에서 exception이 있는 경우에도 <code>httpc_status_url_ignore_set</code>, <code>httpc_status_ignore</code> 옵션을 적용할 수 있도록 수정</p>"},{"ver":"v2.2.39","hash":"v2239","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> overflow 발생 시 에이전트 로그와 알림 분리 및 알림 비활성화</p>"},{"ver":"v2.2.39","hash":"v2239","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> <code>log_overflow_enabled</code> 옵션 폐기</p>"}]},{"url":"https://docs.whatap.io/release-notes/java/java-2_2_36","ver":"v2.2.36","date":"2024-07-18","Lists":[{"ver":"v2.2.36","hash":"v2236","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 위빙 플러그인 컴파일 버전과 사용자 코드 타겟 버전이 차이가 나면 원본 클래스를 반환하는 설정 추가</p>"},{"ver":"v2.2.36","hash":"v2236","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> System 로그를 남기는 경우 다른 트랜잭션에 해당 로그가 포함되는 문제 수정</p>","details":"<blockquote>\\n<p>예, System.out, System.err, hibernate System 로그 (<code>org.hibernate.engine.jdbc.spi.SqlStatementLogger.logStatement</code>)</p>\\n</blockquote>"},{"ver":"v2.2.36","hash":"v2236","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> logback, log4j 사용 시 Exception stack을 포함한 로그가 발생했을 때 사용자의 로그 콘텐츠를 수집하지 못하는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/java/java-2_2_38","ver":"v2.2.38","date":"2024-08-14","Lists":[{"ver":"v2.2.38","hash":"v2238","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> spring-boot-3.2 추적</p>"},{"ver":"v2.2.38","hash":"v2238","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\" type=\\"1\\">Changed</code> spring-kafka batch 추적 시 트랜잭션이름 수정</p>","details":"<ul>\\n<li>\\n<p>기존: <code>[kafka] {topic} (cnt: {Number of polls in Kafka})</code></p>\\n</li>\\n<li>\\n<p>수정: <code>[kafka-batch] {topic}</code></p>\\n</li>\\n</ul>"},{"ver":"v2.2.38","hash":"v2238","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\" type=\\"1\\">Deprecated</code> lettuce 드라이버의 key, param 추적 중단</p>"}]},{"url":"https://docs.whatap.io/release-notes/java/java-2_2_32","ver":"v2.2.32","date":"2024-04-16","Lists":[{"ver":"v2.2.32","hash":"v2232","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> aws.mysql 라이브러리를 사용할 경우 <code>executeBatchInternal</code> 메소드 추적</p>","details":"<ul>\\n<li>\\n<code>software.aws.rds.jdbc.mysql.shading.com.mysql.cj.jdbc.ClientPreparedStatement.executeBatchInternal</code>\\n</li>\\n</ul>"},{"ver":"v2.2.32","hash":"v2232","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Spring-boot-2.7.x에서 사용자가 NettyRoutingFilter 클래스를 구현하여 사용하는 경우에도 연계 추적할 수 있도록 수정</p>","details":"<ul>\\n<li>Class NettyRoutingFilter <code>org.springframework.cloud.gateway.filter.NettyRoutingFilter</code></li>\\n</ul>"},{"ver":"v2.2.32","hash":"v2232","product":"Java Agent","type":"Deprecate","desc":"<p><code class=\\"Deprecate\\">Deprecate</code> <span class=\\"uitext\\">인스턴스 성능 관리</span> &gt; <span class=\\"uitext\\">환경변수</span> 메뉴에서 <code>jvm.uptime</code> 데이터 수집 중단</p>"}]},{"url":"https://docs.whatap.io/release-notes/java/java-2_2_37","ver":"v2.2.37","date":"2024-07-31","Lists":[{"ver":"v2.2.37","hash":"v2237","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> spring-boot ExceptionHandler를 통과하는 예외(exception)가 발생하면 이전에 발생한 예외를 대체</p>","details":"<p><span class=\\"uitext\\">트레이스 분석</span> 창의 <span class=\\"uitext\\">레코드 요약</span> 탭에서 예외(exception)를 spring-boot의 ExceptionHandler에 등록한 예외(exception)로 표시할 수 있습니다.</p>"},{"ver":"v2.2.37","hash":"v2237","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\" type=\\"1\\">Changed</code> <code>trace_http_parameter_enabled</code> 옵션의 값이 <code>true</code>일 때, HTTP 파라미터 키에 해당하는 값(value)가 없거나 HTTP 파라미터가 없는 경우 <span class=\\"uitext\\">트레이스 분석</span> 창에서 HTTP 파라미터 스텝을 생성하지 않도록 수정</p>"},{"ver":"v2.2.37","hash":"v2237","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> Windows 환경에서 기본 CPU 수집이 안 되는 문제 수정</p>"},{"ver":"v2.2.37","hash":"v2237","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> Windows 환경에서 sigar 라이브러리를 활용할 때 모니터링 지표가 수집되지 않는 문제 수정</p>"},{"ver":"v2.2.37","hash":"v2237","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> Windows 환경에서 oshi 라이브러리를 활용할 때 모니터링 지표가 수집되지 않는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/java/java-2_2_35","ver":"v2.2.35","date":"2024-06-20","Lists":[{"ver":"v2.2.35","hash":"v2235","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> spring-boot-3.0.5 이상 (spring-webflux-6.0.7 이상) 버전에서 WebClient 사용 시 연계 추적 기능 추가</p>"},{"ver":"v2.2.35","hash":"v2235","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> spring-boot-2.5 미만에서 spring-cloud-gateway를 통해 트랜잭션을 호출하면 연결되지 않는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/java/java-2_2_33","ver":"v2.2.33","date":"2024-05-28","Lists":[{"ver":"v2.2.33","hash":"v2233","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 쿠버네티스 에이전트에서 <code>continerId</code>를 자바 에이전트에 전달하는 방식 추가</p>"},{"ver":"v2.2.33","hash":"v2233","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Spring-boot-2.5.x ~ 2.6.x 환경을 이용하는 사용자가 <code>NettyRoutingFilter</code> 클래스를 구현하여 사용하는 경우에도 연계 추적할 수 있도록 수정</p>","details":"<ul>\\n<li>Class NettyRoutingFilter <code>org.springframework.cloud.gateway.filter.NettyRoutingFilter</code></li>\\n</ul>"},{"ver":"v2.2.33","hash":"v2233","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>db_pool_detail</code> 카테고리의 메트릭스에서 <code>$okind</code>, <code>$onode</code> 값을 각각 <code>okindName</code>, <code>onodeName</code>으로 변경</p>"}]},{"url":"https://docs.whatap.io/release-notes/java/java-2_2_34","ver":"v2.2.34","date":"2024-06-14","Lists":[{"ver":"v2.2.34","hash":"v2234","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> camel-cxf-3.15 플러그인 사용 시 에이전트 로그 수정</p>"},{"ver":"v2.2.34","hash":"v2234","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>heapdump_root</code> 옵션에 <code>log_root</code> 경로가 등록되는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/java/java-2_2_31","ver":"v2.2.31","date":"2024-04-03","Lists":[{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> spring-boot-2.7.x에서 kafka-batch 추적</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> JDBC 드라이버에서 SqlException 발생 시 추적 여부 설정 옵션 추가</p>","details":"<p>옵션 값을 <code>false</code>로 설정하면 사용자 정의 예외 처리로 <code>biz_exceptions</code> 처리할 수 있습니다.</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> URL + HTTP method 설정 옵션 추가</p>","details":"<ul>\\n<li>예시, /api/user+GET, /api/user+POST</li>\\n<li><span class=\\"uitext\\">통계</span> 또는 <span class=\\"uitext\\">트랜잭션 검색</span> 메뉴에서 URL+method로 확인 가능</li>\\n<li>통계 데이터에서 URL을 변경한 URL+method로 수집</li>\\n</ul>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> oshi-core-6.1.6으로 업데이트</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 자바 에이전트에서 netstat 지표 수집, Maximum Transmission Unit(MTU) 지표 추가</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>trace_basetime</code> 또는 <code>profile_basetime</code> 옵션과 무관하게 에러가 있는 상세 트레이스를 기본 수집하도록 수정</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> oshi 배포 디렉토리를 lib4에서 lib5로 업데이트</p>"},{"ver":"v2.2.31","hash":"v2231","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> oshi, sigar 라이브러리 적용 시 에이전트 로그 오타 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/java/java-2_2_30","ver":"v2.2.30","date":"2024-03-21","Lists":[{"ver":"v2.2.30","hash":"v2230","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Java 1.5 ~ 1.7 환경에서 Java 에이전트 2.2.28, 2.2.29 버전이 동작하지 않는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/java/java-2_2_28","ver":"v2.2.28","date":"2024-02-27","Lists":[{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> logback-1.2.8 추적 시 appender 제외 옵션 추가</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> logback-1.2.8 추적 시 지정한 appender만 수집하는 옵션 사용 중단</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> log4j-2.17 추적 시 appender 제외 옵션 추가</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> log4j-2.17 추적 시 지정한 appender만 수집하는 옵션 사용 중단</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 컨테이너 환경에서 Pod 이름을 설정하지 않은 경우 환경 변수(<code>env</code>)의 <code>HOSTNAME</code>에서 추출하도록 변경</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> JBoss Connection Pool 연결 시 로그 숫자 제한하도록 수정</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 통계 데이터 전송 시 로그 수정</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>trace_sampling_enabled</code> 옵션을 사용할 경우 TPS를 과하게 수집하는 문제 수정</p>"},{"ver":"v2.2.28","hash":"v2228","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> spring-boot-3.x의 spring-security exception 수집 시 발생하는 에러 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/java/java-2_2_29","ver":"v2.2.29","date":"2024-03-15","Lists":[{"ver":"v2.2.29","hash":"v2229","product":"Java Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> jboss-logging-3.3 로그 수집 추가</p>"},{"ver":"v2.2.29","hash":"v2229","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>com.mysql.cj.jdbc.ClientPreparedStatement.executeBatchInternal</code> 메소드 사용 시 SQL 데이터 수집 추가</p>"},{"ver":"v2.2.29","hash":"v2229","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Jboss 환경에서 HTTP 파라미터 수집 시 버그가 발생하면 트랜잭션을 종료하지 못하는 현상 방지</p>"},{"ver":"v2.2.29","hash":"v2229","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> <code>env</code>의 <b>HOSTNAME</b> 데이터 수집 중단</p>"}]},{"url":"https://docs.whatap.io/release-notes/java/java-2_2_27","ver":"v2.2.27","date":"2024-02-06","Lists":[{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> mule-3.9.5 추적 범위 확대</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> camel-cxf-3.15 추적</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>OracleCallableStatement</code> 추적 추가</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> Lettuce 드라이버 사용 시 Redis의 key 수집 중단</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> spring-boot에서 netty 사용 시 request의 URL에서 querystring 분리</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> spring-boot에서 netty 사용 시 request의 HTTP 파라미터를 수집하지 못하는 문제 수정</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 히트맵의 트랜잭션 건수, 에러 건수 오류 수정</p>"},{"ver":"v2.2.27","hash":"v2227","product":"Java Agent","type":"Deprecate","desc":"<p><code class=\\"Deprecate\\">Deprecate</code> Lettuce 드라이버 사용 시 Redis의 value 수집 중단</p>"}]},{"url":"https://docs.whatap.io/release-notes/java/java-2_2_26","ver":"v2.2.26","date":"2024-01-11","Lists":[{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> spring-boot-2.5 이상에서 reactor-kafka-1.3 추적</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> spring-boot-2.5 이상에서 RxJava 사용 시 RxJava의 schedule 추적</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> spring-boot-3.0 이상에서 RxJava3 사용 시 RxJava3의 schedule 추적</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 에이전트 로그에 <code>threadName</code>, <code>className</code>, <code>methodName</code>, <code>lineNumber</code> 수집하여 표시</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 에이전트 로그 형태 수정</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Tibero의 <code>CallableStatement</code> 추적</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 에이전트 로그의 텍스트 색상 변경</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 에이전트 기동 시 에이전트 로그의 파일명을 <em>whatap-<code>date</code>.log</em>에서 <em>whatap.log</em>로 변경</p>"},{"ver":"v2.2.26","hash":"v2226","product":"Java Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> UTC 기준 날짜가 변경되면 <em>whatap.log</em> 파일명을 <em>whatap-<code>date</code>.log</em>로 저장</p>"}]}]');
;// CONCATENATED MODULE: ./docs/release-notes/java/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Java Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/java/index",
  "title": "Java Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/docs/release-notes/java/index.mdx",
  "sourceDirName": "release-notes/java",
  "slug": "/release-notes/java/",
  "permalink": "/whatap-docs/release-notes/java/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/java/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Java Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "v1.0.3",
    "permalink": "/whatap-docs/release-notes/mobile/mobile-app-v1_0_3"
  },
  "next": {
    "title": "Java Agent v2.2.39",
    "permalink": "/whatap-docs/release-notes/java/java-2_2_39"
  }
};
const assets = {

};




const toc = [{
  "value": "Release history for 2024",
  "id": "release-history-for-2024",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head, ImportJson} = _components;
  if (!Head) _missingMdxReference("Head", true);
  if (!ImportJson) _missingMdxReference("ImportJson", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "release-history-for-2024",
        children: "Release history for 2024"
      }), (0,jsx_runtime.jsx)(ImportJson, {
        filePath: java_agent_namespaceObject,
        sort: "date",
        category: "agent"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
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