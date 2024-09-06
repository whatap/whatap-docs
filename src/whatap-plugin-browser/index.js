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
                  !function(){"use strict";!function(e,t){var r=e.amplitude||{_q:[],_iq:{}};if(r.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{var n=function(e,t){e.prototype[t]=function(){return this._q.push({name:t,args:Array.prototype.slice.call(arguments,0)}),this}},s=function(e,t,r){return function(n){e._q.push({name:t,args:Array.prototype.slice.call(r,0),resolve:n})}},o=function(e,t,r){e._q.push({name:t,args:Array.prototype.slice.call(r,0)})},i=function(e,t,r){e[t]=function(){if(r)return{promise:new Promise(s(e,t,Array.prototype.slice.call(arguments)))};o(e,t,Array.prototype.slice.call(arguments))}},a=function(e){for(var t=0;t<g.length;t++)i(e,g[t],!1);for(var r=0;r<m.length;r++)i(e,m[r],!0)};r.invoked=!0;var c=t.createElement("script");c.type="text/javascript",c.integrity="sha384-BHj/6N+ZSiRDYRUHPEqr/nwkUsSk3s9r1ryQeFBc4x2OiVz4peW3jSccKZsoU8Ry",c.crossOrigin="anonymous",c.async=!0,c.src="https://cdn.amplitude.com/libs/analytics-browser-2.6.2-beta.0-min.js.gz",c.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var u=t.getElementsByTagName("script")[0];u.parentNode.insertBefore(c,u);for(var l=function(){return this._q=[],this},p=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],d=0;d<p.length;d++)n(l,p[d]);r.Identify=l;for(var f=function(){return this._q=[],this},v=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],y=0;y<v.length;y++)n(f,v[y]);r.Revenue=f;var g=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset","extendSession"],m=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];a(r),r.createInstance=function(e){return r._iq[e]={_q:[]},a(r._iq[e]),r._iq[e]},e.amplitude=r}}(window,document)}();
                  amplitude.init("02434e2a648821186600db8943872ab5");
                  console.debug("Amplitude Initialized.");
                  `
                },
              ]
            };
        },
    };
};