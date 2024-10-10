"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[43503],{

/***/ 48158:
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
;// CONCATENATED MODULE: ./docs/release-notes/db/dbx-agent.json
const dbx_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/release-notes/db/dbx-1_9_2","ver":"v1.9.2","date":"2024-07-30","Lists":[{"ver":"v1.9.2","hash":"v192","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\" type=\\"1\\">Changed</code> <code>db_oracle_plan_save</code> 카테고리에 <code>object_owner</code> 추가 및 <code>other_xml</code> 제거</p>","category":"Oracle"},{"ver":"v1.9.2","hash":"v192","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\" type=\\"1\\">Changed</code> DB 파라미터의 uptime 포맷 변경</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_9_0","ver":"v1.9.0","date":"2024-07-04","Lists":[{"ver":"v1.9.0","hash":"v190","product":"DBX","type":"New","desc":"<p><code class=\\"New\\">New</code> Oracle V2 출시에 따른 기능 추가</p>","category":"Oracle","details":"<ul>\\n<li>\\n<p><code>ora_hidden_param=true</code> 옵션을 설정하면 hidden parameter 기능 추가</p>\\n</li>\\n<li>\\n<p><code>ora_invalid_object=true</code> 옵션을 설정하면 invalid object 수집</p>\\n</li>\\n<li>\\n<p><code>ora_unusable_index=true</code> 옵션을 설정하면 unsable index 수집</p>\\n</li>\\n<li>\\n<p>plan 변화 체크 및 저장 기능 추가</p>\\n</li>\\n<li>\\n<p>bind 파라미터 저장 기능 추가</p>\\n</li>\\n<li>\\n<p>segment size 수집</p>\\n</li>\\n<li>\\n<p><code>sorts (disk)</code>, <code>user rollbacks</code> 지표 추가</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_9_1","ver":"v1.9.1","date":"2024-07-19","Lists":[{"ver":"v1.9.1","hash":"v191","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> Too big data 알림의 status 추가</p>","category":"공통","details":"<p>에이전트에서 데이터 전송 시 팩 사이즈가 5MB 이상일 때 알림을 발생할 수 있도록 status 추가</p>"},{"ver":"v1.9.1","hash":"v191","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> db size 및 collection 정보 수집</p>","category":"Mongodb"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_9_4","ver":"v1.9.4","date":"2024-08-08","Lists":[{"ver":"v1.9.4","hash":"v194","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> <code>db_mysql_sqlstat</code> 카테고리의 데이터가 누적되는 버그 수정</p>","category":"MySQL"},{"ver":"v1.9.4","hash":"v194","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> <code>db_oracle_sqlstat</code> 카테고리의 데이터가 누적되는 버그 수정</p>","category":"Oracle"},{"ver":"v1.9.4","hash":"v194","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> Cpu_cores 데이터를 수집하지 않도록 수정</p>","category":"Tibero"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_9_5","ver":"v1.9.5","date":"2024-08-13","Lists":[{"ver":"v1.9.5","hash":"v195","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> RAC 지표 추가</p>","category":"Oracle"},{"ver":"v1.9.5","hash":"v195","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\" type=\\"1\\">Changed</code> AIX Oracle 환경에서는 <code>osstat</code> 데이터를 수집하지 않도록 수정</p>","category":"Oracle"},{"ver":"v1.9.5","hash":"v195","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\" type=\\"1\\">Changed</code> <code>osstat</code> 데이터를 Tibero 버전에 따라 수집하도록 수정</p>","category":"Tibero"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-2_0_0","ver":"v2.0.0","date":"2024-08-14","Lists":[{"ver":"v2.0.0","hash":"v200","product":"DBX","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> Altibase <code class=\\"my\\">V2</code> 추가</p>","category":"Altibase"},{"ver":"v2.0.0","hash":"v200","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> <code>obj_invalid_cnt</code> 지표 추가</p>","category":"Altibase"},{"ver":"v2.0.0","hash":"v200","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> tablespace lock 데이터를 수집할 수 있는 에이전트 옵션 추가</p>","category":"Altibase"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_9_3","ver":"v1.9.3","date":"2024-08-08","Lists":[{"ver":"v1.9.3","hash":"v193","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\" type=\\"1\\">Changed</code> lock 정보 수집 시 holder와 waiter의 sid가 같을 경우 수집하지 않도록 수정</p>","category":"Oracle"},{"ver":"v1.9.3","hash":"v193","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\" type=\\"1\\">Changed</code> <code>DbAgentInfoPack</code> 카테고리에 <code>isV2</code> 필드 추가</p>","category":"Oracle"},{"ver":"v1.9.3","hash":"v193","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> <code>pq_sessions</code>, <code>lock_wait_sessions</code> 지표 이름의 공백 제거</p>","category":"Oracle"},{"ver":"v1.9.3","hash":"v193","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> <code>db_mysql_tables</code> 카테고리에서 ALL 값이 맞지 않는 버그 수정</p>","category":"MySQL"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_8_2","ver":"v1.8.2","date":"2024-06-28","Lists":[{"ver":"v1.8.2","hash":"v182","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> communication fail error 메시지 추가</p>","category":"MySQL"},{"ver":"v1.8.2","hash":"v182","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <em>setup.bat</em> 파일에 대한 백업 파일(.bak) 추가</p>","category":"MySQL"},{"ver":"v1.8.2","hash":"v182","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <em>setup.sh</em> 파일을 demon으로 실행 시 default yes → no로 수정</p>","category":"MySQL"},{"ver":"v1.8.2","hash":"v182","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 데이터베이스 이름 버그 수정</p>","category":"MySQL"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_8_1","ver":"v1.8.1","date":"2024-06-27","Lists":[{"ver":"v1.8.1","hash":"v181","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> XOS 에이전트 v1.1.8f 업데이트</p>"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_7_7","ver":"v1.7.7","date":"2024-06-18","Lists":[{"ver":"v1.7.7","hash":"v177","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> PostgreSQL 9.6 버전의 replication delay 버그 수정</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_7_2","ver":"v1.7.2","date":"2024-03-29","Lists":[{"ver":"v1.7.2","hash":"v172","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Agent info의 <code>db_loc</code> 정보 오류 수정 (AWS RDS)</p>","category":"MySQL"},{"ver":"v1.7.2","hash":"v172","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> MongoDbSize <code>type</code> 에러 수정</p>","category":"MongoDB"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_7_8","ver":"v1.7.8","date":"2024-06-21","Lists":[{"ver":"v1.7.8","hash":"v178","product":"DBX","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> DB Connection 알림 원복 기능 제거</p>"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_7_3","ver":"v1.7.3","date":"2024-04-23","Lists":[{"ver":"v1.7.3","hash":"v173","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 알림 원복 끄기(OFF) 기능 개선</p>","category":"공통"},{"ver":"v1.7.3","hash":"v173","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> slave broken 체크 버그 수정</p>","category":"MySQL"},{"ver":"v1.7.3","hash":"v173","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>delta</code> 1초 값 옵션 추가: 에이전트에서 5초 단위로 수집한 데이터를 초 단위로 환산해 보고하는 옵션</p>","category":"Oracle"},{"ver":"v1.7.3","hash":"v173","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>sqlstat</code> 지표 추가</p>","category":"Oracle"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_7_6","ver":"v1.7.6","date":"2024-05-20","Lists":[{"ver":"v1.7.6","hash":"v176","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Autoscale EventPack에 Status On 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_8_0","ver":"v1.8.0","date":"2024-06-26","Lists":[{"ver":"v1.8.0","hash":"v180","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 빠른 에이전트 설정을 위한 <em>setup.sh</em> 추가</p>","category":"MySQL"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_7_5","ver":"v1.7.5","date":"2024-05-17","Lists":[{"ver":"v1.7.5","hash":"v175","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> DB Connection Failed 발생하면 <code>fatal count</code>를 전송하도록 수정</p>","category":"MongoDB, Redis"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_7_0","ver":"v1.7.0","date":"2024-03-25","Lists":[{"ver":"v1.7.0","hash":"v170","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>cpu</code> 지표에서 <code>xos2</code> 지표를 없애고 <code>xos</code> 지표를 백분률 값으로 변경</p>","category":"공통"},{"ver":"v1.7.0","hash":"v170","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> MongoDB <code class=\\"my\\">V2</code> 추가</p>","category":"MongoDB","details":"<ul>\\n<li>\\n<p>카테고리 이름 통일</p>\\n<ul>\\n<li><code>agentinfo</code> → <code>db_agentinfo</code></li>\\n<li><code>session</code> → <code>db_mongo_active_session</code></li>\\n<li><code>stat</code> → <code>db_mongodb_counter</code></li>\\n<li><code>dbsize</code> → <code>db_dbsize</code></li>\\n</ul>\\n</li>\\n<li>\\n<p>기본 지표 간소화</p>\\n<p><code>v2=true</code>로 설정하면 <code>serverStatus</code> 값 중 <code>opcounters</code>, <code>globalLock</code>, <code>extra_info</code>, <code>connections</code>, <code>network</code>, <code>mem</code>, <code>opLatencies</code>, <code>asserts</code> 지표만 수집 및 저장함</p>\\n<div class=\\"theme-admonition theme-admonition-note admonition_xJq3 alert alert--secondary\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 14 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z\\"></path></svg></span>노트</div><div class=\\"admonitionContent_BuS1\\"><p><code>v2=false</code>가 기본값이며, v1과 동일하게 <code>serverStatus</code> 결과를 모두 수집합니다.</p></div></div>\\n</li>\\n<li>\\n<p>지표 추가 옵션: <code>category=network,repl,indexStats…</code> 등 serverStatus의 output을 추가로 지정하면 추가 수집 가능</p>\\n</li>\\n<li>\\n<p>데이터베이스 사이즈 수집 정보 추가: <code>index size</code>, <code>storage size</code>, <code>total size</code> 수집</p>\\n</li>\\n<li>\\n<p>Collection size 신규 수집: <code>storage size</code>, <code>index size</code>, <code>total size</code> 수집</p>\\n</li>\\n<li>\\n<p>기존 언더바로 표기했던 xos 지표들(<code>xos_cpu</code>, <code>xos_mem</code> 등)을 상품 통일성을 위해 괄호로 변경한 값도 함께 전송</p>\\n</li>\\n</ul>"},{"ver":"v1.7.0","hash":"v170","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Redis <code class=\\"my\\">V2</code> 추가</p>","category":"Redis","details":"<ul>\\n<li>\\n<p>카테고리 이름 통일</p>\\n<ul>\\n<li><code>agentinfo</code> → <code>db_agentinfo</code></li>\\n<li><code>session</code> → <code>db_redis_active_session</code></li>\\n<li><code>stat</code> → <code>db_redis_couter</code></li>\\n</ul>\\n</li>\\n<li>\\n<p><code>db_redis_clusterinfo</code>, <code>db_redis_clusternodes</code>, <code>db_redis_master</code>, <code>db_redis_slave</code> 카테고리 추가</p>\\n</li>\\n<li>\\n<p>기존 언더바로 표기했던 xos 지표들(<code>xos_cpu</code>, <code>xos_mem</code> 등)을 상품 통일성을 위해 괄호로 변경한 값도 함께 전송</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_7_4","ver":"v1.7.4","date":"2024-05-16","Lists":[{"ver":"v1.7.4","hash":"v174","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <span class=\\"uitext\\">관리</span> &gt; <span class=\\"uitext\\">에이전트 목록</span> 메뉴에 <strong>Agent IP</strong>(에이전트 IP 주소) 추가</p>","category":"공통"},{"ver":"v1.7.4","hash":"v174","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <strong>DB connection failed</strong> 문구 수정</p>","category":"공통"},{"ver":"v1.7.4","hash":"v174","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> OOM 발생 시 HeapDumpFile을 생성하지 않도록 수정</p>","category":"공통"},{"ver":"v1.7.4","hash":"v174","product":"DBX","type":"Feature","desc":"<li><code class=\\"Feature\\">Feature</code> <strong>connection fail</strong> / <strong>success</strong> 알림 추가</li>","category":"MongoDB, Redis"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_7_1","ver":"v1.7.1","date":"2024-03-28","Lists":[{"ver":"v1.7.1","hash":"v171","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Whatap에서 수행하는 쿼리들에 수집 쿼리임을 알 수 있는 주석 추가</p>","category":"Postgresql, Oracle"},{"ver":"v1.7.1","hash":"v171","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <strong>DocumentDB</strong>의 <strong>process</strong> 및 <strong>replication delay</strong> 처리 버그 수정</p>","category":"MongoDB"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_35","ver":"v1.6.35","date":"2024-03-15","Lists":[{"ver":"v1.6.35","hash":"v1635","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>db_agentinfo</code> 수정: <code>dbInstNo</code>, <code>db_inst no</code> 지표를 <code>db_inst_id</code> 지표로 통일</p>","category":"Postgresql/Oracle/MySQL"},{"ver":"v1.6.35","hash":"v1635","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 에이전트 설치 파일에 <em>setup.bat</em> 추가</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_32","ver":"v1.6.32","date":"2024-03-11","Lists":[{"ver":"v1.6.32","hash":"v1632","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 데이터베이스 파라미터 실시간 조회 로직 수정, <code>unit</code>, <code>start_time</code>, <code>uptime</code> 데이터 추가</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_25","ver":"v1.6.25","date":"2024-02-26","Lists":[{"ver":"v1.6.25","hash":"v1625","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>active_session</code> 지표 수집 시 <code>state</code> 조건에 대한 옵션 처리 추가</p>","category":"PostgreSQL","details":"<ul>\\n<li><code>state</code> 값이 <code>idle</code>이 아닌 경우: <code>pg_opt=0</code>(default)</li>\\n<li><code>state</code> 값이 <code>active</code>인 경우: <code>pg_opt=1</code></li>\\n<li><code>state</code> 값이 <code>active</code> 또는 <code>idle in transaction</code>인 경우: <code>pg_opt=2</code></li>\\n</ul>"},{"ver":"v1.6.25","hash":"v1625","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> object, table 수집 옵션의 기본값을 <code>true</code>로 수정</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_33","ver":"v1.6.33","date":"2024-03-13","Lists":[{"ver":"v1.6.33","hash":"v1633","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 에이전트 설치 파일에 <em>setup.sh</em> 추가</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_30","ver":"v1.6.30","date":"2024-02-29","Lists":[{"ver":"v1.6.30","hash":"v1630","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 이벤트 해소 알림 기능 추가</p>"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_24","ver":"v1.6.24","date":"2024-02-21","Lists":[{"ver":"v1.6.24","hash":"v1624","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> PostgreSQL 14 버전 이상에서 <code>active_session</code> 지표 수집 시 <code>query_id</code> 추가</p>","category":"PostgreSQL"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_26","ver":"v1.6.26","date":"2024-02-28","Lists":[{"ver":"v1.6.26","hash":"v1626","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code class=\\"my\\">V2</code> 업그레이드 관련해 wait event 수집 쿼리 버그 및 multi 구성 버그 수정</p>","category":"Oracle"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_31","ver":"v1.6.31","date":"2024-03-04","Lists":[{"ver":"v1.6.31","hash":"v1631","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 에이전트가 종료된 후 재기동 시 기본값으로 해소 알림을 받을 수 있도록 처리</p>"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_21","ver":"v1.6.21","date":"2024-02-07","Lists":[{"ver":"v1.6.21","hash":"v1621","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> PG SQL 통계 데이터가 수집되지 않는 버그 수정</p>","category":"PostgreSQL"},{"ver":"v1.6.21","hash":"v1621","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>rep_gap_max</code> 지표 추가</p>","category":"Altibase"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_20","ver":"v1.6.20","date":"2024-02-02","Lists":[{"ver":"v1.6.20","hash":"v1620","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 데이터베이스 알람 원복을 위한 stateful 추가</p>","category":"공통"},{"ver":"v1.6.20","hash":"v1620","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Redis autoscale 기능 추가</p>","category":"Redis"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_22","ver":"v1.6.22","date":"2024-02-15","Lists":[{"ver":"v1.6.22","hash":"v1622","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 에이전트 설정값의 형식이 boolean이면 <code>true</code> / <code>false</code> 값으로 통일</p>","category":"공통"},{"ver":"v1.6.22","hash":"v1622","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>redo entries</code> 지표 추가</p>","category":"Oracle"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_17","ver":"v1.6.17","date":"2024-01-16","Lists":[{"ver":"v1.6.17","hash":"v1617","product":"DBX","type":"Fixed","desc":"<li><code class=\\"Fixed\\">Fixed</code> MariaDB 10.2 버전 이하의 slave 정보 수집 버그 수정</li>","category":"MySQL"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_19","ver":"v1.6.19","date":"2024-02-01","Lists":[{"ver":"v1.6.19","hash":"v1619","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> DBX 에이전트 로그 파일명을 <em>dbx.log</em>에서 <em>whatap.log</em>로 변경</p>","details":"<ul>\\n<li>변경 전: 25MB 기준으로 과거 로그는 <em>dbx.log.n</em> 파일로 분리되었습니다.</li>\\n<li>변경 후: 현재 날짜의 기동 로그는 <em>whatap.log</em> 파일에 기록되고 날짜가 변경되면 <em>whatap-yyyymmdd.log</em> 파일로 분리됩니다. 파일 크기 제한 없이 60일까지 보관합니다.</li>\\n</ul>"},{"ver":"v1.6.19","hash":"v1619","product":"DBX","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 에이전트 기동 시 AgentInfo bootParam init 순서로 인한 NullPointerExeception 버그 수정</p>"},{"ver":"v1.6.19","hash":"v1619","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>disk_usage_interval=60</code> 옵션을 기본 수집하도록 변경</p>"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_18","ver":"v1.6.18","date":"2024-01-25","Lists":[{"ver":"v1.6.18","hash":"v1618","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 데이터베이스 알림도 원복 메세지를 받을 수 있도록 <code>uuid</code>, <code>statefulset</code> 추가</p>","category":"공통"},{"ver":"v1.6.18","hash":"v1618","product":"DBX","type":"Changed","desc":"<li><code class=\\"Changed\\">Changed</code> <code>show slave status</code> 명령으로 connection full이 발생하지 않도록 timeout 3회 이상 발생 시 재시도하지 않도록 변경</li>","category":"MySQL"}]},{"url":"https://docs.whatap.io/release-notes/db/dbx-1_6_23","ver":"v1.6.23","date":"2024-02-20","Lists":[{"ver":"v1.6.23","hash":"v1623","product":"DBX","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 테이블 레이아웃 실시간 조회 기능 추가</p>","category":"MySQL"},{"ver":"v1.6.23","hash":"v1623","product":"DBX","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Redis cluster, replica 정보 추가</p>","category":"Redis"}]}]');
;// CONCATENATED MODULE: ./docs/release-notes/db/dbx-agent.mdx


const frontMatter = {
	id: 'dbx-agent',
	title: 'DBX Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/db/dbx-agent",
  "title": "DBX Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/docs/release-notes/db/dbx-agent.mdx",
  "sourceDirName": "release-notes/db",
  "slug": "/release-notes/db/dbx-agent",
  "permalink": "/whatap-docs/release-notes/db/dbx-agent",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/db/dbx-agent.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "dbx-agent",
    "title": "DBX Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Kubernetes Agent 지난 버전",
    "permalink": "/whatap-docs/release-notes/k8s/k8s-previous"
  },
  "next": {
    "title": "DBX v2.1.2",
    "permalink": "/whatap-docs/release-notes/db/dbx-2_1_2"
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
        filePath: dbx_agent_namespaceObject,
        sort: "date",
        category: "agent",
        platform: "db"
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