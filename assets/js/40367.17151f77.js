"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["40367"], {
"34709": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  diagram: function() { return diagram; }
});
/* ESM import */var _chunk_UI5P3W6P_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92453);
/* ESM import */var _chunk_HK56VNYQ_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94159);
/* ESM import */var _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5995);
/* ESM import */var _mermaid_js_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3194);




// src/diagrams/info/infoParser.ts

var parser = {
  parse: /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */.eW)(async (input) => {
    const ast = await (0,_mermaid_js_parser__WEBPACK_IMPORTED_MODULE_2__/* .parse */.Qc)("info", input);
    _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_1__/* .log.debug */.cM.debug(ast);
  }, "parse")
};

// src/diagrams/info/infoDb.ts
var DEFAULT_INFO_DB = { version: _chunk_UI5P3W6P_mjs__WEBPACK_IMPORTED_MODULE_3__/* .version */.i };
var getVersion = /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */.eW)(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};

// src/diagrams/info/infoRenderer.ts
var draw = /* @__PURE__ */ (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_1__/* .__name */.eW)((text, id, version2) => {
  _chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_1__/* .log.debug */.cM.debug("rendering info diagram\n" + text);
  const svg = (0,_chunk_HK56VNYQ_mjs__WEBPACK_IMPORTED_MODULE_0__/* .selectSvgElement */.P)(id);
  (0,_chunk_P27NXTFD_mjs__WEBPACK_IMPORTED_MODULE_1__/* .configureSvgSize */.v2)(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version2}`);
}, "draw");
var renderer = { draw };

// src/diagrams/info/infoDiagram.ts
var diagram = {
  parser,
  db,
  renderer
};



}),

}]);