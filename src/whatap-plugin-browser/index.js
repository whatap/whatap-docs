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
                                ignoreOrigins: [/^.*localhost.*$/i,/^.*ngrok-free.app.*$/i],
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
                        innerHTML: `(function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();
                        ChannelIO('boot', {
                          "pluginKey": "65effdff-6d63-4830-b329-c32aaac3c3d3"
                        });`
                    }
                ],
            };
        },
    };
};