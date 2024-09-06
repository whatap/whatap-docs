module.exports = function () {
    return {
        name: 'whatap-plugin-browser',
        injectHtmlTags() {
            return {
              headTags: [
                {
                    tagName: 'script',
                    innerHTML: `(function (w, h, _a, t, a, b) {
                        w = w[a] = w[a] || {
                          config: {
                            projectAccessKey: "x4t5020boh2ln-z6pi7d91ds6c1a-z7t4b2lrgnub4o",
                            pcode: 29856,
                            sampleRate: 100,
                            sessionReplaySampleRate: 50,
                            ignoreOrigins: [/^.*localhost.*$/i, /^.*ngrok-free.app.*$/i, /^.*whatap.github.io.*$/i],
                            collectUserClick: true
                          },
                        };
                        a = h.createElement(_a);
                        a.async = 1;
                        a.src = t;
                        t = h.getElementsByTagName(_a)[0];
                        t.parentNode.insertBefore(a, t);
                      })(window, document, 'script', 'https://repo.whatap-browser-agent.io/rum/prod/v1/whatap-browser-agent.js', 'WhatapBrowserAgent', '');`
                },
                {
                  tagName: 'script',
                  innerHTML: `let curLang = document.documentElement.lang.split('-')[0];
                  CRISP_RUNTIME_CONFIG = {locale : curLang};
                  window.$crisp=[];window.CRISP_WEBSITE_ID="9a0c342f-a5b1-4c4a-a22f-92c7b4b9b477";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
                },
                {
                  tagName: "script",
                  innerHTML: `
                  (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
                  r.type="text/javascript";
                  r.integrity="sha384-5fhzC8Xw3m+x5cBag4AMKRdf900vw3AoaLty2vYfcKIX1iEsYRHZF4RLXIsu2o+F"
                  r.crossOrigin="anonymous";r.async=true;
                  r.src="https://cdn.amplitude.com/libs/amplitude-8.21.4-min.gz.js";
                  r.onload=function(){if(!e.amplitude.runQueuedFunctions){console.log(
                  "[Amplitude] Error: could not load SDK")}};var s=t.getElementsByTagName("script"
                  )[0];s.parentNode.insertBefore(r,s);function i(e,t){e.prototype[t]=function(){
                  this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
                  var o=function(){this._q=[];return this};var a=["add","append","clearAll",
                  "prepend","set","setOnce","unset","preInsert","postInsert","remove"];for(
                  var c=0;c<a.length;c++){i(o,a[c])}n.Identify=o;var l=function(){this._q=[];
                  return this};var u=["setProductId","setQuantity","setPrice","setRevenueType",
                  "setEventProperties"];for(var p=0;p<u.length;p++){i(l,u[p])}n.Revenue=l;var d=[
                  "init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut",
                  "setVersionName","setDomain","setDeviceId","enableTracking",
                  "setGlobalUserProperties","identify","clearUserProperties","setGroup",
                  "logRevenueV2","regenerateDeviceId","groupIdentify","onInit","onNewSessionStart"
                  ,"logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId",
                  "getDeviceId","getUserId","setMinTimeBetweenSessionsMillis",
                  "setEventUploadThreshold","setUseDynamicConfig","setServerZone","setServerUrl",
                  "sendEvents","setLibrary","setTransport"];function v(t){function e(e){t[e
                  ]=function(){t._q.push([e].concat(Array.prototype.slice.call(arguments,0)))}}
                  for(var n=0;n<d.length;n++){e(d[n])}}v(n);n.getInstance=function(e){e=(
                  !e||e.length===0?"$default_instance":e).toLowerCase();if(
                  !Object.prototype.hasOwnProperty.call(n._iq,e)){n._iq[e]={_q:[]};v(n._iq[e])}
                  return n._iq[e]};e.amplitude=n})(window,document);
                  
                  amplitude.getInstance().init("02434e2a648821186600db8943872ab5");
                  `
                },
              ]
            };
        },
    };
};