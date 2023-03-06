(function (w, h, _a, t, a, b) {
    w = w[a] = w[a] || {
      config: {
        projectAccessKey: "x4rlr21vl48m6-x3p90pdqgusqpp-z6g3nepfnvhr8m",
        pcode: 28347,
        sampleRate: 100,
        ignoreOrigins: [ 'http://localhost:\d+', 'https://whatap-docs.github.com/' ]
      },
    };
    a = h.createElement(_a);
    a.async = 1;
    a.src = t;
    t = h.getElementsByTagName(_a)[0];
    t.parentNode.insertBefore(a, t);
  })(window, document, 'script', 'https://repo.whatap.io/rum/prod/v1/whatap-browser-agent.js', 'WhatapBrowserAgent', '');