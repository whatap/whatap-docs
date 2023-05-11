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
                                ignoreOrigins: [ 'http://localhost:*/', 'http://localhost:*/*', '/^(https?://)([^/]*)(ngrok-free.app)(/)(.*)/i' ],
                              },
                            };
                            a = h.createElement(_a);
                            a.async = 1;
                            a.src = t;
                            t = h.getElementsByTagName(_a)[0];
                            t.parentNode.insertBefore(a, t);
                          })(window, document, 'script', 'https://repo.whatap-browser-agent.io/rum/prod/v1/whatap-browser-agent.js', 'WhatapBrowserAgent', '');`
                    },
                ],
            };
        },
    };
};