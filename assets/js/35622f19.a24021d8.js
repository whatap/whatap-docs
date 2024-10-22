"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[13861],{

/***/ 95828:
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
;// CONCATENATED MODULE: ./docs/release-notes/k8s/k8s-agent.json
const k8s_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_13/","ver":"v1.7.13","date":"2024-10-21","Lists":[{"ver":"v1.7.13","hash":"v1713","product":"Kubernetes Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> <span class=\\"uitext\\">분석</span> &gt; <span class=\\"uitext\\">메트릭스 조회</span> <code>kube_ingress</code> 카테고리 추가</p>","details":"<p>Ingress 리소스에 대한 메타 데이터 및 관련 정보를 수집합니다. 해당 카테고리는 향후 Ingress 리스트 및 라우팅 정책과 관련된 대시보드 구현 시 활용될 예정입니다.</p>"},{"ver":"v1.7.13","hash":"v1713","product":"Kubernetes Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> <span class=\\"uitext\\">분석</span> &gt; <span class=\\"uitext\\">메트릭스 조회</span> <code>kube_oom_event</code> 카테고리에 컨테이너 식별 관련 메트릭스 추가</p>","details":"<p><em><strong>태그</strong></em>로 <em><strong>namespace</strong></em>, <em><strong>podUid</strong></em>, <em><strong>containerName</strong></em> 값을 추가하여 OOMKilled 이벤트 발생 시 컨테이너 식별이 가능합니다.</p>"},{"ver":"v1.7.13","hash":"v1713","product":"Kubernetes Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> <span class=\\"uitext\\">분석</span> &gt; <span class=\\"uitext\\">메트릭스 조회</span> <code>container</code> 카테고리에 포트 정보 관련 메트릭스 추가</p>","details":"<p>컨테이너가 사용하는 <strong>containerPort</strong>와 관련된 메트릭스를 추가하였습니다. 쿠버네티스 서비스는 파드 내 컨테이너 포트를 기반으로 라우팅을 수행하므로, 해당 메트릭스를 통해 서비스, 파드, 컨테이너 간의 관계를 표현할 수 있습니다.</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_5","ver":"v1.7.5","date":"2024-06-18","Lists":[{"ver":"v1.7.5","hash":"v175","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 파일 시스템이 nfs인 디스크에 대한 지표 수집 옵션 추가</p>","details":"<ul>\\n<li><code>collect_nfs_disk_enabled</code>: nfs 디스크 수집 여부를 결정하는 옵션입니다. 기본값은 <code>true</code>입니다.</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_11","ver":"v1.7.11","date":"2024-09-11","Lists":[{"ver":"v1.7.11","hash":"v1711","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> 태그 카운트 <code>kube_stat</code> 카테고리에 Pod 상태 지표 추가</p>","details":"<ul>\\n<li>\\n<p><code>pending_pod</code>: 대기 중인 Pod 수입니다.</p>\\n</li>\\n<li>\\n<p><code>running_pod</code>: 실행 중인 Pod 수입니다.</p>\\n</li>\\n<li>\\n<p><code>succeeded_pod</code>: 성공적으로 완료된 Pod 수입니다.</p>\\n</li>\\n<li>\\n<p><code>failed_pod</code>: 실패한 Pod 수입니다.</p>\\n</li>\\n<li>\\n<p><code>unknown_pod</code>: 상태를 알 수 없는 Pod 수입니다.</p>\\n</li>\\n</ul>"},{"ver":"v1.7.11","hash":"v1711","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> 태그카운트 <code>kube_node</code> 카테고리에  각 노드의 생성 시간을 나타내는 <code>creationTimeStamp</code> 필드 추가</p>","details":"<p><code>creationTimeStamp</code> 필드를 통해 노드가 생성된 시간을 추적할 수 있습니다.</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_9","ver":"v1.7.9","date":"2024-08-19","Lists":[{"ver":"v1.7.9","hash":"v179","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> cgroup v2 환경에서 rss 관련 매트릭 지표 추가 수집</p>","details":"<p><code>container::mem_totalrss</code>: cgroup v2 환경에서 컨테이너의 메모리 RSS(Resident Set Size)를 수집하는 지표입니다. 이 지표는 컨테이너가 실제로 사용하고 있는 물리 메모리의 양을 나타냅니다.</p>"},{"ver":"v1.7.9","hash":"v179","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> 컨테이너의 request, limit 설정 여부에 대한 지표 추가</p>","details":"<ul>\\n<li>\\n<p><strong>Memory 관련 지표</strong></p>\\n<ul>\\n<li>\\n<p><code>container::memory_limit_contained</code>: 컨테이너의 메모리 limit이 설정되어 있는지 여부를 나타내는 지표입니다. 값이 <code>true</code>이면 limit이 설정되어 있고, <code>false</code>이면 설정되지 않았음을 나타냅니다.</p>\\n</li>\\n<li>\\n<p><code>container::memory_request_contained</code>: 컨테이너의 메모리 request가 설정되어 있는지 여부를 나타내는 지표입니다. 값이 <code>true</code>이면 request가 설정되어 있고, <code>false</code>이면 설정되지 않았음을 나타냅니다.</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>CPU 관련 지표</strong></p>\\n<ul>\\n<li>\\n<p><code>container::cpu_limit_contained</code>: 컨테이너의 CPU limit이 설정되어 있는지 여부를 나타내는 지표입니다. 값이 <code>true</code>이면 limit이 설정되어 있고, <code>false</code>이면 설정되지 않았음을 나타냅니다.</p>\\n</li>\\n<li>\\n<p><code>container::cpu_request_contained</code>: 컨테이너의 CPU request가 설정되어 있는지 여부를 나타내는 지표입니다. 값이 <code>true</code>이면 request가 설정되어 있고, <code>false</code>이면 설정되지 않았음을 나타냅니다.</p>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>Ephemeral-Storage 관련 지표</strong></p>\\n<ul>\\n<li>\\n<p><code>container::ephemeral_storage_limit_contained</code>: 컨테이너의 ephemeral-storage limit이 설정되어 있는지 여부를 나타내는 지표입니다. 값이 <code>true</code>이면 limit이 설정되어 있고, <code>false</code>이면 설정되지 않았음을 나타냅니다.</p>\\n</li>\\n<li>\\n<p><code>container::ephemeral_storage_request_contained</code>: 컨테이너의 ephemeral-storage request가 설정되어 있는지 여부를 나타내는 지표입니다. 값이 <code>true</code>이면 request가 설정되어 있고, <code>false</code>이면 설정되지 않았음을 나타냅니다.</p>\\n</li>\\n</ul>\\n</li>\\n</ul>"},{"ver":"v1.7.9","hash":"v179","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> 노드 라벨 지표 리스트 형태로 추가</p>","details":"<ul>\\n<li>\\n<p><code>kube_node::labelKey</code>: Kubernetes 노드의 라벨 키(Key)를 수집하는 지표입니다. 노드에 적용된 각 라벨의 키를 나타냅니다.</p>\\n</li>\\n<li>\\n<p><code>kube_node::labelValue</code>: Kubernetes 노드의 라벨 값(Value)을 수집하는 지표입니다. 노드에 적용된 각 라벨의 값을 나타냅니다.</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_12","ver":"v1.7.12","date":"2024-09-30","Lists":[{"ver":"v1.7.12","hash":"v1712","product":"Kubernetes Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> 태그 카운트 <code>kube_process</code> 카테고리 추가</p>","details":"<p>노드(Node)에서 실행 중인 쿠버네티스 관련 프로세스를 모니터링할 수 있는 태그 카운트를 추가했습니다. 이를 통해 특정 노드에서 동작 중인 프로세스를 추적하고, 성능 지표를 수집할 수 있습니다.</p>"},{"ver":"v1.7.12","hash":"v1712","product":"Kubernetes Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code> <strong>whatap-control-plane-helper</strong> 컨테이너에 <code>kube_client_tls_verify</code> 옵션 추가</p>"},{"ver":"v1.7.12","hash":"v1712","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> 태그 카운트 <code>kube_stat</code> 카테고리에 노드(Node) 상태별 카운트 지표 추가</p>","details":"<p>클러스터 내 노드 상태에 따른 카운트 지표를 추가했습니다. 이는 노드의 Conditions(type<!-- -->:Ready<!-- -->) 필드를 기반으로 집계된 노드의 수를 보여줍니다.</p>"},{"ver":"v1.7.12","hash":"v1712","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> 태그 카운트 <code>kube_pod_stat</code> 카테고리에 Pod 상태(Phase)별 카운트 지표 추가</p>","details":"<p>클러스터 내 Pod 상태(Phase)에 따른 카운트 지표를 추가했습니다. 이를 통해 현재 클러스터에서 실행 중인 Pod의 상태(Phase)를 빠르게 파악할 수 있습니다.</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_7","ver":"v1.7.7","date":"2024-07-11","Lists":[{"ver":"v1.7.7","hash":"v177","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Java 애플리케이션과 쿠버네티스 에이전트 연동 방식 추가</p>","details":"<ul>\\n<li>\\n<p>Java 에이전트 컨테이너 환경변수에 <code>WHATAP_JAVA_AGENT_PATH</code> 값을 추가해 컨테이너 ID 연동 기능 추가</p>\\n</li>\\n<li>\\n<p>에이전트 프로세스 ID를 이용하여 proc 정보 조회, 해당 정보로 애플리케이션 컨테이너 process name에서 와탭 자바 홈(<code>$WHATAP_HOME</code>) 추출</p>\\n</li>\\n<li>\\n<p>위 과정에서 와탭 자바 홈(<code>$WHATAP_HOME</code>)을 찾지 못하면 runtimeAPI를 사용해 에이전트 이미지에서 와탭 자바 홈 추출</p>\\n</li>\\n<li>\\n<p>에이전트의 버전과 형식 체크하고, 다음을 기준 충족해야 valid 버전으로 containerID 연동 기능 수행</p>\\n<p>1. 파일 이름이 <em>whatap.agent-<code>X.Y.Z</code>.jar</em>이고 버전 정보가 2.2.33보다 크거나 같은 경우(<code>X.Y.Z</code> &gt;= 2.2.33)</p>\\n<p>2. 파일 이름이 <em>whatap.agent.kube.jar</em>인 경우</p>\\n</li>\\n</ul>"},{"ver":"v1.7.7","hash":"v177","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 이벤트 수집 방식 변경: 에이전트 기동 시점 이후 생성된 이벤트에 대해서만 데이터 수집(<code>kube_event</code>)</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_8","ver":"v1.7.8","date":"2024-07-24","Lists":[{"ver":"v1.7.8","hash":"v178","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <span class=\\"uitext\\">클러스터</span> &gt; <span class=\\"uitext\\">노드 디스크 목록</span> 메뉴 추가</p>","details":"<p>와탭 쿠버네티스 모니터링의 <span class=\\"uitext\\">노드 디스크 목록</span>에서 각 노드에 마운트된 개별 디스크의 현재 사용량, 여유 공간, 성능 지표를 실시간으로 모니터링하여 디스크의 상태를 쉽게 확인할 수 있습니다. 이를 통해 클러스터의 디스크 자원을 효율적으로 관리하고, 잠재적인 문제를 사전에 파악하여 대응할 수 있습니다.</p>"},{"ver":"v1.7.8","hash":"v178","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <span class=\\"uitext\\">워크로드</span> &gt; <span class=\\"uitext\\">Service 목록</span> 메뉴 추가</p>","details":"<p>Kubernetes 클러스터 내에서 실행 중인 모든 서비스들의 상태와 정보를 종합적으로 제공합니다. 와탭 쿠버네티스 모니터링의 <span class=\\"uitext\\">Service 목록</span> 메뉴를 통해 클러스터 내 네트워크 구성을 쉽게 파악하고 각 서비스의 구성과 현재 상태를 효율적으로 모니터링할 수 있습니다.</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_6","ver":"v1.7.6","date":"2024-07-01","Lists":[{"ver":"v1.7.6","hash":"v176","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 태그 카운트 추가</p>","details":"<ul>\\n<li><strong>kube_service_pod_mapping</strong> 항목 추가</li>\\n<li><strong>kube_pod</strong> 카네고리에 <code>podUid</code> 태그 추가</li>\\n<li><strong>kube_service</strong> 카테고리에 <code>externalIp</code> 태그, PORT(<code>portName</code>, <code>nodePort</code>, <code>servicePort</code>, <code>targetPort</code>) 필드 추가</li>\\n<li><strong>kube_event</strong> 카테고리에 <code>watch_event_type</code>, <code>resource_version</code> 데이터 추가</li>\\n<li><strong>kube_event</strong> 중복 알림 현상 제거</li>\\n</ul>"},{"ver":"v1.7.6","hash":"v176","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <strong>whatap-node-helper</strong> 컨테이너 환경변수(<code>env</code>)에 <code>WHATAP_JAVA_AGENT_PATH</code> 추가</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_10","ver":"v1.7.10","date":"2024-08-29","Lists":[{"ver":"v1.7.10","hash":"v1710","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> 태그 카운트 <code>kube_node</code> 카테고리에 노드(Node) <strong>capacity</strong>와 <strong>allocatable</strong> 관련 지표 추가</p>","details":"<ul>\\n<li>\\n<p><code>allocatable_ephemeral_storage</code>: 노드에서 사용할 수 있는 임시 볼륨(ephemeral storage)을 나타냅니다.</p>\\n</li>\\n<li>\\n<p><code>capacityEphemeralStorage</code>: 노드의 임시 볼륨(ephemeral storage)의 총 용량입니다.</p>\\n</li>\\n<li>\\n<p><code>capacityPods</code>: 노드에 스케쥴링할 수 있는 최대 Pod 수입니다.</p>\\n</li>\\n</ul>"},{"ver":"v1.7.10","hash":"v1710","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code> 더 정확한 CPU 할당 데이터 제공을 위해 <code>allocatable_cpu</code> 지표에서 밀리코어 단위의 값이 누락되는 현상 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_6_1","ver":"v1.6.1","date":"2024-04-17","Lists":[{"ver":"v1.6.1","hash":"v161","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 쿠버네티스 이벤트가 일정 시간 뒤 누락되는 버그 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_3","ver":"v1.7.3","date":"2024-06-04","Lists":[{"ver":"v1.7.3","hash":"v173","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> whatap-master-agent에서 Pod 이벤트 감시로 인해 발생하던 apiserver의 과도한 감사 로그 생성 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_0","ver":"v1.7.0","date":"2024-05-13","Lists":[{"ver":"v1.7.0","hash":"v170","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <b>TagCount</b>에 데이터 추가</p>","details":"<ul>\\n<li>\\n<p><code>kube_pod</code> 카테고리에 <code>reason</code>, <code>message</code> 필드 추가</p>\\n<ul>\\n<li><code>reason</code>: 파드 status의 reason</li>\\n<li><code>message</code>: 파드 status의 message</li>\\n</ul>\\n</li>\\n<li>\\n<p><code>container</code> 카테고리에 <code>kube_state</code>(컨테이너 state) 필드 추가</p>\\n</li>\\n<li>\\n<p>pending 상태 파드, 컨테이너 데이터(<code>kube_pending_pod</code>, <code>kube_pending_container</code>)를 수집</p>\\n<p>관련 데이터는 <span class=\\"uitext\\">실험실</span> &gt; <span class=\\"uitext\\">Pending Pod 현황</span> 메뉴에서 확인할 수 있습니다.</p>\\n</li>\\n<li>\\n<p>서비스(<code>kube_service</code>)에 대한 데이터 수집</p>\\n</li>\\n<li>\\n<p>에이전트 부팅 시 <code>#whatapEvent</code> 카테고리로 사용자 설치 Runtime, 클러스터의 Runtime을 전송</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_5_9","ver":"v1.5.9","date":"2024-04-04","Lists":[{"ver":"v1.5.9","hash":"v159","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 노드와 같은 특정 쿠버네티스 이벤트가 누락되는 현상 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_1","ver":"v1.7.1","date":"2024-05-17","Lists":[{"ver":"v1.7.1","hash":"v171","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <strong>OOMKilled</strong> 컨테이너 수집 로직 수정</p>","details":"<blockquote>\\n<p><code>lastState</code>가 <strong>OOMKilled</strong>인 컨테이너의 경우 컨테이너의 <code>state</code>가 <strong>Running</strong>임에도 불구하고 <strong>OOMKilled</strong>로 보여지는 버그 수정</p>\\n</blockquote>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_2","ver":"v1.7.2","date":"2024-06-02","Lists":[{"ver":"v1.7.2","hash":"v172","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>server_disk</code> 카테고리에 다음 지표 추가</p>","details":"<ul>\\n<li>\\n<p><code>blksize</code>: 디스크 블록 크기. 디스크의 기본 읽기/쓰기 단위 크기를 나타냅니다.</p>\\n</li>\\n<li>\\n<p><code>readIops</code>: 초당 수행되는 읽기 작업 수, Input/Output Operations Per Second입니다.</p>\\n</li>\\n<li>\\n<p><code>writeIops</code>: 초당 수행되는 쓰기 작업 수입니다.</p>\\n</li>\\n<li>\\n<p><code>queueLength</code>: 디스크 I/O 요청의 대기열 길이입니다. 대기 중인 I/O 요청의 수를 나타냅니다.</p>\\n</li>\\n<li>\\n<p><code>readBps</code>: 초당 읽은 데이터의 양(Bytes per Second)입니다.</p>\\n</li>\\n<li>\\n<p><code>writeBps</code>: 초당 쓴 데이터의 양입니다.</p>\\n</li>\\n<li>\\n<p><code>ioPercent</code>: 디스크의 I/O 작업에 소요된 시간의 비율입니다. 이는 전체 시간 대비 I/O 작업에 사용된 시간의 백분율을 나타냅니다.</p>\\n</li>\\n<li>\\n<p><code>totalInode</code>: 파일 시스템에서 사용 가능한 전체 inode 수입니다.</p>\\n</li>\\n<li>\\n<p><code>usedInode</code>: 사용 중인 inode 수입니다.</p>\\n</li>\\n<li>\\n<p><code>usedInodePercent</code>: 사용 중인 inode의 백분율입니다.</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_7_4","ver":"v1.7.4","date":"2024-06-07","Lists":[{"ver":"v1.7.4","hash":"v174","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> whatap-node-helper 컨테이너에서 agent 연동 실패 시 발생하는 에러 로그를 디버그 처리</p>"},{"ver":"v1.7.4","hash":"v174","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 노드 디스크 성능 데이터 수집 시 발생하는 오류 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_6_0","ver":"v1.6.0","date":"2024-04-05","Lists":[{"ver":"v1.6.0","hash":"v160","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <span class=\\"uitext\\">클러스터</span> &gt; <span class=\\"uitext\\">오브젝트 매니페스트</span> 메뉴의 warning 이벤트를 연계 로직 버그 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_5_8","ver":"v1.5.8","date":"2024-03-26","Lists":[{"ver":"v1.5.8","hash":"v158","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> apiserver의 endpoint가 IPV6 형태인 경우 apiserver 대시보드에 데이터가 출력되지 않는 문제 수정</p>"},{"ver":"v1.5.8","hash":"v158","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 최초 Warning 이벤트 발생 시 수집하는 오브젝트 매니페스트의 중복 수집 방지 로직 추가</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_5_7","ver":"v1.5.7","date":"2024-03-07","Lists":[{"ver":"v1.5.7","hash":"v157","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> whatap-node-helper는 노드 디스크 및 컨테이너의 이미지, 성능 데이터를 수집합니다. 해당 컨테이너의 로깅 및 설정 기능을 추가해 디버깅과 문제가 발생할 경우 해당 기능에 대한 옵션 처리가 가능합니다.</p>","details":"<ul>\\n<li>\\n<p><strong>collect_volume_detail_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>기본값 <code>true</code></p>\\n<p>노드 에이전트에서 모든 컨테이너에 대한 <code>exec df</code> 명령어를 이용해 컨테이너 볼륨 정보 조회를 활성화합니다. 노드에 실행 중인 모든 컨테이너의 스토리지 사용량 및 볼륨 정보를 수집하는 기능을 활성화할 수 있습니다.</p>\\n</li>\\n<li>\\n<p><strong>inject_container_id_to_apm_agent_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>기본값 <code>true</code></p>\\n<p>와탭 APM 컨테이너에 <code>exec</code>를 이용한 container ID 주입을 활성화합니다. 와탭 APM으로 식별되는 컨테이너의 ID를 자동으로 추출하고, 이를 APM 도구에 주입하여 성능 모니터링 데이터와 컨테이너를 연결하는 데 사용할 수 있습니다.</p>\\n<div class=\\"theme-admonition theme-admonition-note admonition_xJq3 alert alert--secondary\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 14 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z\\"></path></svg></span>노트</div><div class=\\"admonitionContent_BuS1\\"><p>이 옵션은 <a href=\\"/release-notes/java/java-2_2_33\\">Java 에이전트 2.2.33 버전</a> 이상부터 사용할 수 있습니다.</p></div></div>\\n</li>\\n</ul>"},{"ver":"v1.5.7","hash":"v157","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 마스터 에이전트에서 쿠버네티스 이벤트 수집 시, 에이전트가 재기동되면 이벤트 중복 수집을 중지하는 로직을 삭제하였습니다. 서버 사이드에서 중복 이벤트 드롭 로직을 수행하도록 변경하였습니다.</p>"},{"ver":"v1.5.7","hash":"v157","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> watchLog 기능을 이용하면 노드 시스템의 특정 로그 파일(예, <em>/var/log/message</em>)을 와탭 대시보드에서 감시할 수 있습니다. 시스템의 로그 로테이션 로직에 의해 파일이 변경된 경우 로그의 추가 수집을 실패하는 버그를 수정했습니다.</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_5_5","ver":"v1.5.5","date":"2024-02-14","Lists":[{"ver":"v1.5.5","hash":"v155","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> ReplicationController list 권한이 없는 경우 마스터 에이전트가 30초 간격으로 로그를 생성하는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_5_3","ver":"v1.5.3","date":"2024-01-30","Lists":[{"ver":"v1.5.3","hash":"v153","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 메트리스 수집 시 <code>server_disk</code>, <code>server_network</code>, <code>server_base</code> 카테고리의 수집 간격을 5초 단위로 맞춤</p>"},{"ver":"v1.5.3","hash":"v153","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> 메트릭스 수집 시 <code>kube_node</code> 카테고리에 노드의 <b>external-ip</b>, <b>internal-ip</b> 추가</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_5_2","ver":"v1.5.2","date":"2024-01-26","Lists":[{"ver":"v1.5.2","hash":"v152","product":"Kubernetes Agent","type":"Changed","desc":"<li><code class=\\"Changed\\">Changed</code> 마스터 에이전트 버전 정보를 네임스페이스 프로젝트에 전송하도록 수정</li>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_5_6","ver":"v1.5.6","date":"2024-02-23","Lists":[{"ver":"v1.5.6","hash":"v156","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <span class=\\"uitext\\">컨테이너</span> &gt; <span class=\\"uitext\\">컨테이너 볼륨</span> 메뉴에서 MountType 속성을 조회하는 기능 추가</p>"},{"ver":"v1.5.6","hash":"v156","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> IPv6 주소를 사용하는 경우 <span class=\\"uitext\\">컨테이너</span> &gt; <span class=\\"uitext\\">컨테이너 볼륨</span> 메뉴에서 조회되지 않는 문제 수정</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_5_1","ver":"v1.5.1","date":"2024-01-25","Lists":[{"ver":"v1.5.1","hash":"v151","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> kube workload(ReplicationController)를 메트릭스(<code>container</code>, <code>kube_pod</code>, <code>kube_pod_stat</code>), 오브젝트 메니페스트에 추가</p>"},{"ver":"v1.5.1","hash":"v151","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> crio 런타임에서 <code>overlay_config_path</code> 옵션을 커스텀 설정하는 경우\\nwhatap-node-helper 컨테이너 env에 <code>overlay_config_path</code> 옵션을 추가해 경로를 설정할 수 있도록 수정</p>"},{"ver":"v1.5.1","hash":"v151","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 네임스페이스 프로젝트 버전 전송 간격 변경: 5분 동안 5초 전송 이후 timeout → 5분 동안 5초 전송 이후 1분마다 전송</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_4_9","ver":"v1.4.9","date":"2024-01-08","Lists":[{"ver":"v1.4.9","hash":"v149","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>collect_control_plane_monitoring_enabled</code> 옵션 추가, 이 옵션의 값을 <code>true</code>로 설정하면 컨트롤 플레인(Control Plane) 지표를 수집합니다.</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_5_0","ver":"v1.5.0","date":"2024-01-16","Lists":[{"ver":"v1.5.0","hash":"v150","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 오브젝트 매니페스트 수집 기능 추가</p>","details":"<p>하루에 한번 사용자가 설정한 타임존의 자정 시각에 클러스터의 오브젝트 정보를 수집하여 저장하는 기능 추가했습니다. 이 기능을 이용하려면 다음과 같이 에이전트 옵션을 설정하세요. 자세한 내용은 <a href=\\"/kubernetes/object-manifest\\">다음 문서</a>를 참조하세요.</p>"},{"ver":"v1.5.0","hash":"v150","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> 컨트롤 플레인 모니터링 에이전트 성능 개선, 클러스터와 통신하는 클라이언트의 성능 개선 포함</p>"}]},{"url":"https://docs.whatap.io/release-notes/k8s/k8s-1_5_4","ver":"v1.5.4","date":"2024-02-06","Lists":[{"ver":"v1.5.4","hash":"v154","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>kube_pod</code> 카테고리에서 <code>cpu_per_limit</code> 필드 값이 100 이상되는 문제 수정</p>"}]}]');
;// CONCATENATED MODULE: ./docs/release-notes/k8s/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Kubernetes Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/k8s/index",
  "title": "Kubernetes Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/docs/release-notes/k8s/index.mdx",
  "sourceDirName": "release-notes/k8s",
  "slug": "/release-notes/k8s/",
  "permalink": "/whatap-docs/release-notes/k8s/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/k8s/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Kubernetes Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Server HP-UX",
    "permalink": "/whatap-docs/release-notes/server-hpux/server-hpux-1_3_4"
  },
  "next": {
    "title": "Kubernetes Agent v1.7.13",
    "permalink": "/whatap-docs/release-notes/k8s/k8s-1_7_13"
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
        filePath: k8s_agent_namespaceObject,
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