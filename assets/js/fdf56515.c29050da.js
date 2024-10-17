"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[57043],{

/***/ 71807:
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
;// CONCATENATED MODULE: ./docs/release-notes/nodejs/nodejs-agent.json
const nodejs_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/release-notes/nodejs/nodejs-0_5_2","ver":"v0.5.2","date":"2024-10-17","Lists":[{"ver":"v0.5.2","hash":"v052","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> SQL 프로파일 수정</p>","details":"<ul><li><p>SQL 조회 오류가 발생하면 에러 스택을 프로파일 하단에 표기합니다.</p></li><li><p>수정된 SQL 모듈은 다음과 같습니다. <strong>MySQL</strong>, <strong>MariaDB</strong>, <strong>PostgreSQL</strong>, <strong>SQL Server</strong></p></li></ul>"}]},{"url":"https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_98","ver":"v0.4.98","date":"2024-07-09","Lists":[{"ver":"v0.4.98","hash":"v0498","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> IP 주소별 트랜잭션 통계를 수집하는 에이전트 설정 옵션 추가</p>","details":"<blockquote>\\n<p><strong>stat_ipurl_enabled</strong> <span class=\\"type\\">Boolean</span>, 기본값 <code>false</code></p>\\n</blockquote>"},{"ver":"v0.4.98","hash":"v0498","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> License, Server Host 값을 환경변수와 <em>whatap.conf</em> 파일에 동시 적용할 수 있도록 수정</p>","details":"<p>환경변수와 <em>whatap.conf</em> 파일에 모두 적용하면 환경변수 값 기준으로 설정됩니다.</p>"},{"ver":"v0.4.98","hash":"v0498","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> ONODE NAME 설정 시 ONODE 값 생성 로직 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_90","ver":"v0.4.90","date":"2024-02-05","Lists":[{"ver":"v0.4.90","hash":"v0490","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 에이전트 설정 옵션 추가</p>","details":"<ul>\\n<li>\\n<p><strong>httpc_not_found_ignore</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>기본값 <code>false</code></p>\\n<p>Not Found 오류가 특정 시간(<code>httpc_not_found_ignore_time</code>)에 50건 이상 발생하면 모니터링 감지를 무시합니다.</p>\\n</li>\\n<li>\\n<p><strong>httpc_not_found_ignore_time</strong> <span class=\\"type\\">Milisecond</span></p>\\n<p>기본값 <code>300000</code></p>\\n<p><code>httpc_not_found_ignore</code> 값이 <code>true</code>이면 Not Found 오류를 무시할 시간을 설정합니다.</p>\\n</li>\\n</ul>"},{"ver":"v0.4.90","hash":"v0490","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Mongoose 트래킹이 되지 않는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/nodejs/nodejs-0_5_0","ver":"v0.5.0","date":"2024-08-12","Lists":[{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> whatap 에이전트 로그 파일의 경로를 설정하는 에이전트 옵션 추가</p>","details":"<blockquote>\\n<p><strong>log_root</strong> <span class=\\"type\\">String</span> 기본값 없음</p>\\n</blockquote>"},{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> Node.js 내장 함수인 <code>fetch</code>에 대한 모니터링 기능 추가</p>"},{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> Redis 모니터링 패키지 추가(<a href=\\"https://www.npmjs.com/package/ioredis\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ioredis</a>)</p>"},{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\" type=\\"1\\">Changed</code> 빌드 파일 모니터링 무시 옵션 명칭 수정</p>","details":"<ul>\\n<li><code>ignore_nextjs_build_file_enabled</code> → <code>ignore_build_file_enabled</code></li>\\n<li><code>ignore_nextjs_build_file_path</code> → <code>ignore_build_file_path</code></li>\\n</ul>"},{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code>  <code>auto_oname_prefix</code> 옵션의 값이 <code>false</code>임에도 <code>true</code>로 적용되는 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_95","ver":"v0.4.95","date":"2024-04-29","Lists":[{"ver":"v0.4.95","hash":"v0495","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 프로파일 데이터 압축 전송을 위한 에이전트 옵션 추가</p>","details":"<p><strong>profile_zip_enabled</strong> <span class=\\"type\\">Boolean</span> </p>"},{"ver":"v0.4.95","hash":"v0495","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> SQL 변수, HTTP 쿼리 조회에 필요한 보안키가 작성된 파일 이름 변경</p>","details":"<p><em>paramkey.txt</em> → <em>security.conf</em></p>"}]},{"url":"https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_96","ver":"v0.4.96","date":"2024-05-30","Lists":[{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 서버에서 클라이언트로 데이터 전송 시 데이터 수집을 위한 websocket 패키지 모니터링 추가</p>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 에이전트 설정 옵션 추가</p>","details":"<ul>\\n<li>\\n<p><strong>ignore_nextjs_build_file_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>기본값 <code>true</code></p>\\n<p><em>Next.js</em> 빌드 파일에 대한 모니터링 여부를 설정합니다. 이 옵션값을 <code>true</code>로 설정하면 <em>Next.js</em> 빌드 파일을 모니터링하지 않습니다.</p>\\n</li>\\n<li>\\n<p><strong>ignore_nextjs_build_file_path</strong> <span class=\\"type\\">String</span></p>\\n<p>기본값 <code>/next/</code></p>\\n<p>모니터링에서 제외할 <em>Next.js</em> 빌드 파일의 시작 경로를 지정할 수 있습니다. <code>ignore_nextjs_build_file_enabled</code> 값이 <code>true</code>일 경우에 적용됩니다. 쉼표(,)를 구분자로 여러 개의 경로를 설정할 수 있습니다.</p>\\n<div class=\\"language-ini codeBlockContainer_Ckt0 theme-code-block\\" style=\\"--prism-color:#bfc7d5;--prism-background-color:#292d3e\\"><div class=\\"codeBlockTitle_Ktv7\\">whatap.conf</div><div class=\\"codeBlockContent_biex\\"><pre tabindex=\\"0\\" class=\\"prism-code language-ini codeBlock_bY9V thin-scrollbar\\" style=\\"color:#bfc7d5;background-color:#292d3e\\"><code class=\\"codeBlockLines_e6Vv\\"><span class=\\"token-line\\" style=\\"color:#bfc7d5\\"><span class=\\"token key attr-name\\" style=\\"color:rgb(255, 203, 107)\\">ignore_nextjs_build_file_path</span><span class=\\"token punctuation\\" style=\\"color:rgb(199, 146, 234)\\">=</span><span class=\\"token value attr-value\\">/next/abc/,/next/def/</span><br></span></code></pre><div class=\\"buttonGroup__atx\\"><button type=\\"button\\" aria-label=\\"클립보드에 코드 복사\\" title=\\"복사\\" class=\\"clean-btn\\"><span class=\\"copyButtonIcons_eSgA\\" aria-hidden=\\"true\\"><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonIcon_y97N\\"><path fill=\\"currentColor\\" d=\\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\\"></path></svg><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonSuccessIcon_LjdS\\"><path fill=\\"currentColor\\" d=\\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\\"></path></svg></span></button></div></div></div>\\n</li>\\n</ul>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>trace_sampling_enabled</code> 옵션의 기본값을 <code>true</code>로 변경</p>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> HTTP 모니터링에서 socket 오류에 대한 통계 데이터 수집을 무시하도록 수정</p>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 트랜잭션의 결과가 <b>Lost Connection</b>일 경우 URL이 표시되지 않는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_94","ver":"v0.4.94","date":"2024-03-07","Lists":[{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <a href=\\"http://socket.io\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">socket.io</a> 모니터링 모듈 추가</p>","details":"<p><code>trace_sampling_enabled</code> ,<code>trace_sampling_tps</code> 옵션을 사용하여 샘플링된 데이터를 확인할 수 있습니다. <code>trace_ignore_url_prefix</code> 옵션에 <code>/socket.io</code> 경로를 추가해 추적할 수 없도록 설정하세요.</p>"},{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 에이전트 설정 옵션 추가</p>","details":"<ul>\\n<li>\\n<p><strong>profile_http_header_ignore_keys</strong> <span class=\\"type\\">String</span></p>\\n<p>기본값: <code>Cookie,cookie,accept,user-agent,referer</code></p>\\n<p>HTTP 헤더 이름을 지정해 수집 정보에서 제외할 수 있습니다. 지정한 HTTP 헤더 이름의 값은 수집에서 제외되며, \'#\'으로 표시됩니다.</p>\\n</li>\\n<li>\\n<p><strong>profile_http_parameter_keys</strong> <span class=\\"type\\">String</span></p>\\n<p>설정된 키에 해당하는 파라미터 정보만 기록합니다. 여러 개를 등록할 때는 쉼표(,)를 구분자로 이용하세요. 설정하지 않을 경우 모든 파라미터 정보가 기록됩니다.</p>\\n</li>\\n</ul>"},{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>profile_http_parameter_enabled</code> 옵션이 <code>true</code>로 설정된 경우</p>","details":"<ul>\\n<li>HTTP 요청의 Body 데이터를 출력하지 않도록 수정</li>\\n<li>HTTP 파라미터 정보를 암호화하고, <em>paramkey.txt</em> 값으로 복호화할 수 있도록 수정</li>\\n</ul>"},{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Mongoose 모니터링 예외 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/nodejs/nodejs-0_5_1","ver":"v0.5.1","date":"2024-08-28","Lists":[{"ver":"v0.5.1","hash":"v051","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> 포트(port) 번호를 추가하여 에이전트 이름(ONAME)을 생성하는 에이전트 옵션 추가 (예, NODE-14-103-3000)</p>","details":"<blockquote>\\n<p><strong>oname_port_postfix_enabled</strong> <span class=\\"type\\">Boolean</span> 기본값 <code>false</code></p>\\n</blockquote>"},{"ver":"v0.5.1","hash":"v051","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> 로그 모니터링을 위한 에이전트 옵션 추가</p>","details":"<ul>\\n<li>\\n<p><strong>logsink_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>기본값 <code>false</code></p>\\n<p>로그 모니터링 활성화 여부를 설정합니다.</p>\\n</li>\\n<li>\\n<p><strong>logsink_trace_txid_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>기본값 <code>true</code></p>\\n<p>로그에 트랜잭션 ID를 삽입하여 트랜잭션 트레이스의 로그 탭 노출 여부를 설정합니다.</p>\\n</li>\\n<li>\\n<p><strong>logsink_limit_content_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>기본값 <code>true</code></p>\\n<p>로그 메시지의 최대 크기 제한 여부를 설정합니다.</p>\\n</li>\\n<li>\\n<p><strong>logsink_limit_content_length</strong> <span class=\\"type\\">Number</span></p>\\n<p>기본값 <code>10,000</code></p>\\n<p>로그 메시지의 최대 길이를 설정합니다. 이 값은 <code>logsink_limit_content_enabled</code> 옵션이 <code>true</code>로 설정된 경우에만 적용됩니다.</p>\\n</li>\\n</ul>"},{"ver":"v0.5.1","hash":"v051","product":"Node.js Agent","type":"Fixed","desc":"<li><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> Global 패키지의 fetch 함수 모니터링 중 예외 발생 시 오류 메세지를 출력되도록 수정</li>"}]},{"url":"https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_97","ver":"v0.4.97","date":"2024-06-03","Lists":[{"ver":"v0.4.97","hash":"v0497","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> 쿠버네티스 환경 사용 여부를 환경변수로 적용 가능</p>"}]},{"url":"https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_88","ver":"v0.4.88","date":"2024-01-11","Lists":[{"ver":"v0.4.88","hash":"v0488","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>trace_http_client_ip_header_key=x-forwarded-for</code> 옵션을 설정한 상태에서 헤더로 <code>x-forwarded-for</code> 값에 여러 개의 IP가 전달될 경우(쉼표 기준) 첫 번째 값으로 IP를 설정하도록 수정</p>"},{"ver":"v0.4.88","hash":"v0488","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> TCP, UDP 소켓 모니터링 수정</p>"},{"ver":"v0.4.88","hash":"v0488","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>profile_http_header_enabled</code> 옵션의 값이 <code>true</code>이면 profile의 headers 값을 나타내는 방식 수정 (JSON → key=value\\\\n)</p>"}]},{"url":"https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_86","ver":"v0.4.86","date":"2024-01-04","Lists":[{"ver":"v0.4.86","hash":"v0486","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 에이전트 옵션 추가</p>","details":"<ul>\\n<li>\\n<p><strong>httpc_status_ignore</strong> <span class=\\"type\\">String</span></p>\\n<p>기본값 <code>Empty</code></p>\\n<p>무시할 <code>HTTPC_ERROR</code> 코드를 설정합니다. 여러 값을 대상으로 할 경우 쉼표(,)를 구분자로 사용하세요.</p>\\n<div class=\\"language-ini codeBlockContainer_Ckt0 theme-code-block\\" style=\\"--prism-color:#bfc7d5;--prism-background-color:#292d3e\\"><div class=\\"codeBlockTitle_Ktv7\\">whatap.conf</div><div class=\\"codeBlockContent_biex\\"><pre tabindex=\\"0\\" class=\\"prism-code language-ini codeBlock_bY9V thin-scrollbar\\" style=\\"color:#bfc7d5;background-color:#292d3e\\"><code class=\\"codeBlockLines_e6Vv\\"><span class=\\"token-line\\" style=\\"color:#bfc7d5\\"><span class=\\"token key attr-name\\" style=\\"color:rgb(255, 203, 107)\\">httpc_status_ignore</span><span class=\\"token punctuation\\" style=\\"color:rgb(199, 146, 234)\\">=</span><span class=\\"token value attr-value\\">404,500</span><br></span></code></pre><div class=\\"buttonGroup__atx\\"><button type=\\"button\\" aria-label=\\"클립보드에 코드 복사\\" title=\\"복사\\" class=\\"clean-btn\\"><span class=\\"copyButtonIcons_eSgA\\" aria-hidden=\\"true\\"><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonIcon_y97N\\"><path fill=\\"currentColor\\" d=\\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\\"></path></svg><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonSuccessIcon_LjdS\\"><path fill=\\"currentColor\\" d=\\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\\"></path></svg></span></button></div></div></div>\\n</li>\\n<li>\\n<p><strong>httpc_status_ignore_set</strong> <span class=\\"type\\">String</span></p>\\n<p>기본값 <code>Empty</code></p>\\n<p><code>whatap.error.HTTPC_ERROR</code>를 무시합니다. 여러 값을 대상으로 할 경우 쉼표(,)를 구분자로 이용하세요.</p>\\n<div class=\\"theme-admonition theme-admonition-note admonition_xJq3 alert alert--secondary\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 14 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z\\"></path></svg></span>노트</div><div class=\\"admonitionContent_BuS1\\"><p><code>httpc_status_ignore_set=/a/b/c:400,/a/ab/c:404</code>와 같이 설정하세요. 이때 url은 통계/에러 분석에서 <code>HTTPC_URL</code> 값을 입력합니다.</p></div></div>\\n</li>\\n</ul>"},{"ver":"v0.4.86","hash":"v0486","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> MariaDB 모니터링 안 되는 문제 수정</p>"},{"ver":"v0.4.86","hash":"v0486","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> SQL(MySQL, SQL Server) 커넥션 정보 출력 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/nodejs/nodejs-0_4_89","ver":"v0.4.89","date":"2024-01-22","Lists":[{"ver":"v0.4.89","hash":"v0489","product":"Node.js Agent","type":"Fixed","desc":"<li><code class=\\"Fixed\\">Fixed</code> ONODE 설정 오류 수정</li>"}]}]');
;// CONCATENATED MODULE: ./docs/release-notes/nodejs/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Node.js Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/nodejs/index",
  "title": "Node.js Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/docs/release-notes/nodejs/index.mdx",
  "sourceDirName": "release-notes/nodejs",
  "slug": "/release-notes/nodejs/",
  "permalink": "/whatap-docs/release-notes/nodejs/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/nodejs/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Node.js Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "PHP Agent 지난 버전",
    "permalink": "/whatap-docs/release-notes/php/php-previous"
  },
  "next": {
    "title": "Node.js Agent v0.5.2",
    "permalink": "/whatap-docs/release-notes/nodejs/nodejs-0_5_2"
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
        filePath: nodejs_agent_namespaceObject,
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