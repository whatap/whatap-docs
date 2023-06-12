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
                    // {
                    //     tagName: 'script',
                    //     innerHTML: `(function (w) {
                    //         var url_view = w.location.href;
                    //         var url_path = w.location.pathname;
                    //         var url_hash = w.location.hash;
                    //         if (url_path.endsWith("en/") || url_path.endsWith("ja/")) {
                    //             //Skip
                    //         } else if (url_path.endsWith("/") || url_hash.endsWith("/")) {
                    //             //Skip Home Page
                    //             if(url_path !== "/"){
                    //                 url_view = url_view.slice(0,-1);
                    //                 w.location.replace(url_view);
                    //             }
                    //         }
                    //     })(window);`
                    // }
                ],
            };
        },
    };
};