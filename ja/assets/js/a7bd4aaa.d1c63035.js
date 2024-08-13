"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[67098],{

/***/ 19367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocVersionRoot)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(86560);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsSearch.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

/** The search tag to append as each doc's metadata. */ function getDocsVersionSearchTag(pluginId, versionName) {
    return `docs-${pluginId}-${versionName}`;
}
/**
 * Gets the relevant docs tags to search.
 * This is the logic that powers the contextual search feature.
 *
 * If user is browsing Android 1.4 docs, he'll get presented with:
 * - Android '1.4' docs
 * - iOS 'preferred | latest' docs
 *
 * The result is generic and not coupled to Algolia/DocSearch on purpose.
 */ function useDocsContextualSearchTags() {
    const allDocsData = useAllDocsData();
    const activePluginAndVersion = useActivePluginAndVersion();
    const docsPreferredVersionByPluginId = useDocsPreferredVersionByPluginId();
    // This can't use more specialized hooks because we are mapping over all
    // plugin instances.
    function getDocPluginTags(pluginId) {
        const activeVersion = (activePluginAndVersion === null || activePluginAndVersion === void 0 ? void 0 : activePluginAndVersion.activePlugin.pluginId) === pluginId ? activePluginAndVersion.activeVersion : undefined;
        const preferredVersion = docsPreferredVersionByPluginId[pluginId];
        const latestVersion = allDocsData[pluginId].versions.find((v)=>v.isLast);
        var ref;
        const version = (ref = activeVersion !== null && activeVersion !== void 0 ? activeVersion : preferredVersion) !== null && ref !== void 0 ? ref : latestVersion;
        return getDocsVersionSearchTag(pluginId, version.name);
    }
    return [
        ...Object.keys(allDocsData).map(getDocPluginTags)
    ];
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/docsVersion.js
var docsVersion = __webpack_require__(58965);
// EXTERNAL MODULE: ./node_modules/react-router-config/esm/react-router-config.js
var react_router_config = __webpack_require__(22831);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(63067);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionRoot/index.js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocVersionRootMetadata(props) {
    const { version  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchMetadata/* default */.A, {
                version: version.version,
                tag: getDocsVersionSearchTag(version.pluginId, version.version)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be, {
                children: version.noIndex && /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            })
        ]
    });
}
function DocVersionRootContent(props) {
    const { version , route  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(metadataUtils/* HtmlClassNameProvider */.e3, {
        className: version.className,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(docsVersion/* DocsVersionProvider */.n, {
            version: version,
            children: (0,react_router_config/* renderRoutes */.v)(route.routes)
        })
    });
}
function DocVersionRoot(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocVersionRootMetadata, _objectSpread({}, props)),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DocVersionRootContent, _objectSpread({}, props))
        ]
    });
};


/***/ })

}]);