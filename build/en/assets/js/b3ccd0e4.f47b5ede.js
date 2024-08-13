"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[65487],{

/***/ 19964:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/k8s/k8s-agent.json
const k8s_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_7_8","ver":"v1.7.8","date":"2024-07-24","Lists":[{"ver":"v1.7.8","hash":"v178","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the <span class=\\"uitext\\">Cluster</span> &gt; <span class=\\"uitext\\">Node Disk List</span> menu.</p>","details":"<p>You can easily check the status of disks by monitoring the current usage, free space, and performance meetrics of individual disks mounted on each node in real time in <span class=\\"uitext\\">Node Disk List</span> for WhaTap Kubernetes Monitoring. This allows you to efficiently manage disk resources in the cluster and proactively find and respond to potential problems.</p>"},{"ver":"v1.7.8","hash":"v178","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the <span class=\\"uitext\\">Workload</span> &gt; <span class=\\"uitext\\">Service List</span> menu.</p>","details":"<p>It provides comprehensive status and information about all services running within the Kubernetes cluster. Through the <span class=\\"uitext\\">Service List</span> menu of WhaTap Kubernetes Monitoring, you can easily check the network configuration within the cluster and efficiently monitor the configuration and status of each service.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_7_1","ver":"v1.7.1","date":"2024-05-17","Lists":[{"ver":"v1.7.1","hash":"v171","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Modified the logic to collect the <strong>OOMKilled</strong> container.</p>","details":"<blockquote>\\n<p>Fixed the bug where, in case of a container whose <code>lastState</code> is <strong>OOMKilled</strong>, it is displayed as <strong>OOMKilled</strong> even though its <code>state</code> is <strong>Running</strong>.</p>\\n</blockquote>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_7_7","ver":"v1.7.7","date":"2024-07-11","Lists":[{"ver":"v1.7.7","hash":"v177","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the integration method for Java applications and Kubernetes agents.</p>","details":"<ul>\\n<li>\\n<p>Added the container ID syncing feature by adding <code>WHATAP_JAVA_AGENT_PATH</code> value to the Java agent container environment variables.</p>\\n</li>\\n<li>\\n<p>It can view the proc information using the agent process ID, and extract WhaTap Java Home (<code>$WHATAP_HOME</code>) from the application container\'s process name by using the proc information.</p>\\n</li>\\n<li>\\n<p>If WhaTap Java Home (<code>$WHATAP_HOME</code>) is not found in the above procedure, extract WhaTap Java Home from the agent image by using the runtimeAPI.</p>\\n</li>\\n<li>\\n<p>It can check the version and format of the agent and perform the containerID syncing feature with a valid version only when the following criteria are met.</p>\\n<ol>\\n<li>\\n<p>If the file name is <em>whatap.agent-<code>X.Y.Z</code>.jar</em> and the version is greater than or equal to 2.2.33 (<code>X.Y.Z</code> &gt;= 2.2.33)</p>\\n</li>\\n<li>\\n<p>If the file name is <em>whatap.agent.kube.jar</em></p>\\n</li>\\n</ol>\\n</li>\\n</ul>"},{"ver":"v1.7.7","hash":"v177","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Changed the event collection method: collects data only for the events generated after agent startup (<code>kube_event</code>).</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_7_3","ver":"v1.7.3","date":"2024-06-04","Lists":[{"ver":"v1.7.3","hash":"v173","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the apiserver\'s excessive audit log generation issue that is followed by the Pod event monitoring in whatap-master-agent.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_7_2","ver":"v1.7.2","date":"2024-06-02","Lists":[{"ver":"v1.7.2","hash":"v172","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the following metrics in the <code>server_disk</code> category.</p>","details":"<ul>\\n<li>\\n<p><code>blksize</code>: Disk block size. It indicates the unit size for basic read/write on the disk.</p>\\n</li>\\n<li>\\n<p><code>readIops</code>: Number of read operations executed per second, or input/output operations per second.</p>\\n</li>\\n<li>\\n<p><code>writeIops</code>: Number of write operations executed per second.</p>\\n</li>\\n<li>\\n<p><code>queueLength</code>: Queue length for disk I/O requests. It indicates the number of pending I/O requests.</p>\\n</li>\\n<li>\\n<p><code>readBps</code>: Amount of data read per second (Bytes per second).</p>\\n</li>\\n<li>\\n<p><code>writeBps</code>: Amount of data written per second.</p>\\n</li>\\n<li>\\n<p><code>ioPercent</code>: Percentage of time spent on I/O operations on the disk. This represents the percentage of time used for I/O operations against the total time.</p>\\n</li>\\n<li>\\n<p><code>totalInode</code>: Total number of inodes available in the file system.</p>\\n</li>\\n<li>\\n<p><code>usedInode</code>: Number of inodes in use.</p>\\n</li>\\n<li>\\n<p><code>usedInodePercent</code>: Percentage of inodes in use.</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_7_4","ver":"v1.7.4","date":"2024-06-07","Lists":[{"ver":"v1.7.4","hash":"v174","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> It debugs the error logs that occur when agent syncing fails in the whatap-node-helper container.</p>"},{"ver":"v1.7.4","hash":"v174","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed errors that occur while collecting the node disk performance data.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_7_5","ver":"v1.7.5","date":"2024-06-18","Lists":[{"ver":"v1.7.5","hash":"v175","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the metrics collection option for the disks with the nfs file system.</p>","details":"<ul>\\n<li><code>collect_nfs_disk_enabled</code>: This option determines whether to collect the nfs disks. The default value is <code>true</code>.</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_7_6","ver":"v1.7.6","date":"2024-07-01","Lists":[{"ver":"v1.7.6","hash":"v176","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the tag count.</p>","details":"<ul>\\n<li>Added <strong>kube_service_pod_mapping</strong>.</li>\\n<li>Added the <code>podUid</code> tag in the <strong>kube_pod</strong> category.</li>\\n<li>Added the <code>externalIp</code> tag and PORT(<code>portName</code>, <code>nodePort</code>, <code>servicePort</code>, <code>targetPort</code>) field in the <strong>kube_service</strong> category.</li>\\n<li>Added the data for <code>watch_event_type</code> and <code>resource_version</code> in the <strong>kube_event</strong> category.</li>\\n<li>Removed duplicate <strong>kube_event</strong> notifications.</li>\\n</ul>"},{"ver":"v1.7.6","hash":"v176","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added <code>WHATAP_JAVA_AGENT_PATH</code> in the <strong>whatap-node-helper</strong> container environment variable (<code>env</code>).</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_6_0","ver":"v1.6.0","date":"2024-04-05","Lists":[{"ver":"v1.6.0","hash":"v160","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> In <span class=\\"uitext\\">Cluster</span> &gt; <span class=\\"uitext\\">Object Manifest</span>, fixed the warning event linking logic bug.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_5_5","ver":"v1.5.5","date":"2024-02-14","Lists":[{"ver":"v1.5.5","hash":"v155","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where the master agent generates logs at an interval of 30 seconds when it does not have the role for the ReplicationController list.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_6_1","ver":"v1.6.1","date":"2024-04-17","Lists":[{"ver":"v1.6.1","hash":"v161","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the bug where Kubernetes events are missing after a specific time.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_5_9","ver":"v1.5.9","date":"2024-04-04","Lists":[{"ver":"v1.5.9","hash":"v159","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where specific Kubernetes events such as nodes are missing.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_7_0","ver":"v1.7.0","date":"2024-05-13","Lists":[{"ver":"v1.7.0","hash":"v170","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added data in <b>TagCount</b>.</p>","details":"<ul>\\n<li>\\n<p>Added the <code>reason</code> and <code>message</code> fields to the <code>kube_pod</code> category.</p>\\n<ul>\\n<li><code>reason</code>: Reason of the Pod status</li>\\n<li><code>message</code>: Message of the Pod status</li>\\n</ul>\\n</li>\\n<li>\\n<p>Added the <code>kube_state</code> (Container state) field to the <code>container</code> category.</p>\\n</li>\\n<li>\\n<p>Collected the pending status pod and container data (<code>kube_pending_pod</code>, <code>kube_pending_container</code>).</p>\\n<p>The collected data can be seen in <span class=\\"uitext\\">Laboratory</span> &gt; <span class=\\"uitext\\">Pending Pod Status</span>.</p>\\n</li>\\n<li>\\n<p>Collected the data related to the service (<code>kube_service</code>).</p>\\n</li>\\n<li>\\n<p>Upon booting the agent, modify to send the user installation runtime and cluster runtime to the <code>#whatapEvent</code> category.</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_5_8","ver":"v1.5.8","date":"2024-03-26","Lists":[{"ver":"v1.5.8","hash":"v158","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where data does not appear on the apiserver dashboard when the apiserver\'s endpoint was in IPV6 format.</p>"},{"ver":"v1.5.8","hash":"v158","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Added a logic to prevent duplicate collection of object manifests collected when the first warning event occurs.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_5_6","ver":"v1.5.6","date":"2024-02-23","Lists":[{"ver":"v1.5.6","hash":"v156","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> In <span class=\\"uitext\\">Container</span> &gt; <span class=\\"uitext\\">Container volume</span>, added the function to view the MountType property.</p>"},{"ver":"v1.5.6","hash":"v156","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> When using the IPv6 address, in <span class=\\"uitext\\">Container</span> &gt; <span class=\\"uitext\\">Container volume</span>, fixed the search issue.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_5_7","ver":"v1.5.7","date":"2024-03-07","Lists":[{"ver":"v1.5.7","hash":"v157","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> The whatap-node-helper collects images and performance data from node disks and containers. After adding the logging and configuration functions for the container, you can handle the options of the corresponding function.</p>","details":"<p>The following options have been added.</p>"},{"ver":"v1.5.7","hash":"v157","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> When collecting Kubernetes events from the master agent, the logic that stops collecting duplicate events when the agent is restarted has been deleted. It modified to perform the duplicate event drop logic on the server side.</p>"},{"ver":"v1.5.7","hash":"v157","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Through the watchLog feature, you can monitor a specific log file (e.g. <em>/var/log/message</em>) on the node system from the WhaTap dashboard. We fixed the bug where additional log collection fails if the file was changed by the system\'s log rotation logic.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_5_4","ver":"v1.5.4","date":"2024-02-06","Lists":[{"ver":"v1.5.4","hash":"v154","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> In the <code>kube_pod</code> category, fixed the problem where the value of the <code>cpu_per_limit</code> field is 100 or more.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_5_3","ver":"v1.5.3","date":"2024-01-30","Lists":[{"ver":"v1.5.3","hash":"v153","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> The collection interval has been set to 5 seconds for <code>server_disk</code>, <code>server network</code>, and <code>server_base</code> categories when collecting metrics.</p>"},{"ver":"v1.5.3","hash":"v153","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> When collecting metrics, added <b>external-ip</b> and <b>internal-ip</b> of the node in the <code>kube_node</code> category.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_5_2","ver":"v1.5.2","date":"2024-01-26","Lists":[{"ver":"v1.5.2","hash":"v152","product":"Kubernetes Agent","type":"Changed","desc":"<li><code class=\\"Changed\\">Changed</code> Modified to transmit the master agent version to the namespace project.</li>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_5_1","ver":"v1.5.1","date":"2024-01-25","Lists":[{"ver":"v1.5.1","hash":"v151","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Added kube workload(ReplicationController) to the metrics (<code>container</code>, <code>kube_pod</code>, and <code>kube_pod_stat</code>) and Object Manifest.</p>"},{"ver":"v1.5.1","hash":"v151","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> In case the <code>overlay_config_path</code> option is customized in the crio runtime,\\nmodified to set the path by adding the <code>overlay_config_path</code> option in the whatap-node-helper container environment.</p>"},{"ver":"v1.5.1","hash":"v151","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Changed the namespace project\'s version transmission interval: when timeout occurs after transmission in 5-second increments for 5 minutes → transmits every minute.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_5_0","ver":"v1.5.0","date":"2024-01-16","Lists":[{"ver":"v1.5.0","hash":"v150","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the Object Manifest collection function.</p>","details":"<p>Added the function to collect and store the cluster objects once a day at midnight in the specified time zone. To use this function, set the agent options as follows. For more information, see <a href=\\"/kubernetes/object-manifest\\">the following</a>.</p>"},{"ver":"v1.5.0","hash":"v150","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Improved the performance of the control plane monitoring agent, including the performance improvements for clients that communicate with the cluster.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/k8s/k8s-1_4_9","ver":"v1.4.9","date":"2024-01-08","Lists":[{"ver":"v1.4.9","hash":"v149","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Added the <code>collect_control_plane_monitoring_enabled</code> option. If this option\'s value is set to <code>true</code>, the Control Plane metric is collected.</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/k8s/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Kubernetes Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/k8s/index",
  "title": "Kubernetes Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/k8s/index.mdx",
  "sourceDirName": "release-notes/k8s",
  "slug": "/release-notes/k8s/",
  "permalink": "/en/release-notes/k8s/",
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
    "toc_min_heading_level": 2
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Server Agent AIX v1.2.7",
    "permalink": "/en/release-notes/server-aix/server-aix-1_2_7"
  },
  "next": {
    "title": "Kubernetes Agent v1.7.8",
    "permalink": "/en/release-notes/k8s/k8s-1_7_8"
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