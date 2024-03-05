"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[78912],{

/***/ 15680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xA: () => (/* binding */ MDXProvider),
/* harmony export */   yg: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 33322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ DocCardList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20053);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51538);
/* harmony import */ var _theme_DocCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46647);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}





function DocCardListForCurrentSidebarCategory({ className }) {
    const category = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentSidebarCategory */ .$S)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocCardList, {
        items: category.items,
        className: className
    });
}
function DocCardList(props) {
    const { items, className } = props;
    if (!items) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DocCardListForCurrentSidebarCategory, _object_spread({}, props));
    }
    const filteredItems = (0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .filterDocCardListItems */ .d1)(items);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)('row', className),
        children: filteredItems.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("article", {
                className: "col col--6 margin-bottom--lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_DocCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
                    item: item
                })
            }, index))
    });
}


/***/ }),

/***/ 51738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ PDFDownloads)
});

// UNUSED EXPORTS: getStaticProps

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/file-saver/dist/FileSaver.min.js
var FileSaver_min = __webpack_require__(4213);
// EXTERNAL MODULE: ./node_modules/pdf-lib/es/index.js + 155 modules
var es = __webpack_require__(20960);
;// CONCATENATED MODULE: ./src/components/dl-release-notes/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"_dlLabel":"_dlLabel_lOAM","_dlHeading2":"_dlHeading2_OVIX","dlList":"dlList_XSHF","dlTable":"dlTable_Ju72","dlIcon":"dlIcon_cjKA","dlListItem":"dlListItem_xNPd","inputBox":"inputBox_Ju1D","dlBtn":"dlBtn_gzxi","dlButton":"dlButton_RAT5"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(89546);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(92469);
;// CONCATENATED MODULE: ./src/components/dl-release-notes/PdfDownload.js







function PDFDownloads({ typeName, pdfList: pdfList1 }) {
    const [selectedFiles, setSelectedFiles] = (0,react.useState)([]);
    const handleCheckboxChange = (event, file)=>{
        if (event.target.checked) {
            setSelectedFiles([
                ...selectedFiles,
                file
            ]);
        } else {
            setSelectedFiles(selectedFiles.filter((selectedFile)=>selectedFile !== file));
        }
    };
    const handleSelectAll = (e)=>{
        if (e.target.checked) {
            setSelectedFiles(pdfList1);
        } else {
            setSelectedFiles([]);
        }
    };
    const handleDownload = async ()=>{
        const corsproxy = "https://corsproxy.io/?";
        try {
            if (selectedFiles.length === 1) {
                // 선택한 파일이 1개일 경우 개별 파일 다운로드
                (0,FileSaver_min.saveAs)(selectedFiles[0].url, selectedFiles[0].name + '.pdf');
            } else if (selectedFiles.length > 1) {
                // 파일명을 역순으로 정렬
                const sortedFiles = selectedFiles.slice().sort((a, b)=>b.name.localeCompare(a.name));
                const mergedPdf = await es.PDFDocument.create();
                const pdfPromises = sortedFiles.map((file)=>fetch(corsproxy + encodeURIComponent(file.url)).then((response)=>response.arrayBuffer()));
                const pdfArrayBuffers = await Promise.all(pdfPromises);
                for (const pdfBuffer of pdfArrayBuffers){
                    const pdfDoc = await es.PDFDocument.load(pdfBuffer);
                    const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
                    pages.forEach((page)=>mergedPdf.addPage(page));
                }
                const mergedPdfBytes = await mergedPdf.save();
                const mergedPdfBlob = new Blob([
                    mergedPdfBytes
                ], {
                    type: 'application/pdf'
                });
                const downloadLink = URL.createObjectURL(mergedPdfBlob);
                const a = document.createElement('a');
                a.href = downloadLink;
                a.download = 'merged.pdf';
                a.click();
                URL.revokeObjectURL(downloadLink);
            }
        } catch (error) {
            alert("An error occurred during the PDF download and merge process: ", error);
        }
    };
    const downIcon = (0,useBaseUrl/* default */.A)('/img/ico-download.svg');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: styles_module.dlList,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
                    className: styles_module.dlTable,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("thead", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("th", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                type: "checkbox",
                                                id: `select-all-${typeName}`,
                                                name: `select-all-${typeName}`,
                                                className: styles_module.inputBox,
                                                onChange: handleSelectAll,
                                                checked: selectedFiles.length === pdfList1.length
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                className: styles_module._dlLabel,
                                                htmlFor: "select-all",
                                                children: "Select All"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: "Release Notes"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: "Release Date"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("th", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: "Download PDF"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                            children: pdfList1.map((pdf, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            className: styles_module.dlListItem,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                        type: "checkbox",
                                                        id: `${typeName}-${index}`,
                                                        className: styles_module.inputBox,
                                                        name: pdf.name,
                                                        onChange: (event)=>handleCheckboxChange(event, pdf),
                                                        checked: selectedFiles.includes(pdf)
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                        className: styles_module._dlLabel,
                                                        htmlFor: `${typeName}-${index}`,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                                                            to: pdf.docs,
                                                            target: "_blank",
                                                            children: pdf.name
                                                        })
                                                    })
                                                ]
                                            })
                                        }, index),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
                                                    to: pdf.docs,
                                                    target: "_blank",
                                                    children: pdf.name
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                children: pdf.date
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                        src: downIcon,
                                                        className: styles_module.dlIcon
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                        href: pdf.url,
                                                        children: "Download"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: styles_module.dlBtn,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: styles_module.dlButton,
                    onClick: handleDownload,
                    children: "Download"
                })
            })
        ]
    });
}
async function getStaticProps() {
    // 여기서는 간단히 pdfList 데이터를 props로 전달합니다.
    return {
        props: {
            pdfList
        }
    };
}


/***/ }),

/***/ 72995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bq: () => (/* binding */ etcList),
/* harmony export */   IK: () => (/* binding */ serverList),
/* harmony export */   N: () => (/* binding */ dbxList),
/* harmony export */   Tm: () => (/* binding */ k8sList),
/* harmony export */   _r: () => (/* binding */ pyList),
/* harmony export */   a6: () => (/* binding */ svList),
/* harmony export */   b0: () => (/* binding */ goList),
/* harmony export */   rR: () => (/* binding */ javaList),
/* harmony export */   rU: () => (/* binding */ browserList),
/* harmony export */   vM: () => (/* binding */ dotnetList),
/* harmony export */   vZ: () => (/* binding */ xosList),
/* harmony export */   vy: () => (/* binding */ phpList),
/* harmony export */   wo: () => (/* binding */ nodejsList),
/* harmony export */   xl: () => (/* binding */ javaBatchList)
/* harmony export */ });
const svList = [
    {
        "name": 'Service-2.1.x',
        "date": '2024-02-26',
        "url": 'https://content.whatap.io/24/03/05/003514service-21x.pdf',
        "docs": '/release-notes/service/service-2_1_x'
    },
    {
        "name": 'Service-2.0.x',
        "date": '2024-01-19',
        "url": 'https://content.whatap.io/24/02/01/065728service-20x.pdf',
        "docs": '/release-notes/service/service-2_0_x'
    },
    {
        "name": 'Service-1.114.x',
        "date": '2023-12-21',
        "url": 'https://content.whatap.io/24/02/01/065728service-1114x.pdf',
        "docs": '/release-notes/service/service-1_114_x'
    },
    {
        "name": 'Service-1.112.x',
        "date": '2023-11-17',
        "url": 'https://content.whatap.io/24/02/01/065728service-1112x.pdf',
        "docs": '/release-notes/service/service-1_112_x'
    },
    {
        "name": 'Service-1.110.x',
        "date": '2023-10-25',
        "url": 'https://content.whatap.io/24/02/01/065728service-1100x.pdf',
        "docs": '/release-notes/service/service-1_110_x'
    },
    {
        "name": 'Service-1.108.x',
        "date": '2023-09-21',
        "url": 'https://content.whatap.io/24/02/01/065728service-1108x.pdf',
        "docs": '/release-notes/service/service-1_108_x'
    },
    {
        "name": 'Service-1.106.x',
        "date": '2023-07-26',
        "url": 'https://content.whatap.io/24/02/01/065728service-1106x.pdf',
        "docs": '/release-notes/service/service-1_106_x'
    },
    {
        "name": 'Service-1.104.x',
        "date": '2023-06-28',
        "url": 'https://content.whatap.io/24/02/01/065728service-1104x.pdf',
        "docs": '/release-notes/service/service-1_104_x'
    },
    {
        "name": 'Service-1.102.x',
        "date": '2023-05-24',
        "url": 'https://content.whatap.io/24/02/01/065728service-1102x.pdf',
        "docs": '/release-notes/service/service-1_102_x'
    },
    {
        "name": 'Service-1.100.x',
        "date": '2023-04-26',
        "url": 'https://content.whatap.io/24/02/01/065728service-1100x.pdf',
        "docs": '/release-notes/service/service-1_100_x'
    },
    {
        "name": 'Service-1.98.x',
        "date": '2023-03-29',
        "url": 'https://content.whatap.io/24/02/01/065728service-198x.pdf',
        "docs": '/release-notes/service/service-1_98_x'
    },
    {
        "name": 'Service-1.96.0',
        "date": '2023-02-22',
        "url": 'https://content.whatap.io/24/02/01/065727service-1960.pdf',
        "docs": '/release-notes/service/service-1_96_0'
    },
    {
        "name": 'Service-1.94.0',
        "date": '2023-01-11',
        "url": 'https://content.whatap.io/24/02/01/065727service-1940.pdf',
        "docs": '/release-notes/service/service-1_94_0'
    },
    {
        "name": 'Service-1.92.0',
        "date": '2022-11-24',
        "url": 'https://content.whatap.io/24/02/01/065727service-1920.pdf',
        "docs": '/release-notes/service/service-1_92_0'
    },
    {
        "name": 'Service-1.90.0',
        "date": '2022-10-18',
        "url": 'https://content.whatap.io/24/02/01/065727service-1900.pdf',
        "docs": '/release-notes/service/service-1_90_0'
    },
    {
        "name": 'Service-1.88.0',
        "date": '2022-09-28',
        "url": 'https://content.whatap.io/24/02/01/065727service-1880.pdf',
        "docs": '/release-notes/service/service-1_88_0'
    },
    {
        "name": 'Service-1.86.0',
        "date": '2022-09-14',
        "url": 'https://content.whatap.io/24/02/01/065727service-1860.pdf',
        "docs": '/release-notes/service/service-1_86_0'
    },
    {
        "name": 'Service-1.84.0',
        "date": '2022-08-24',
        "url": 'https://content.whatap.io/24/02/01/065727service-1840.pdf',
        "docs": '/release-notes/service/service-1_84_0'
    },
    {
        "name": 'Service-1.82.0',
        "date": '2022-07-27',
        "url": 'https://content.whatap.io/24/02/01/065727service-1820.pdf',
        "docs": '/release-notes/service/service-1_82_0'
    },
    {
        "name": 'Service-1.80.0',
        "date": '2022-07-13',
        "url": 'https://content.whatap.io/24/02/01/065727service-1800.pdf',
        "docs": '/release-notes/service/service-1_80_0'
    },
    {
        "name": 'Service-1.78.0',
        "date": '2022-06-22',
        "url": 'https://content.whatap.io/24/02/01/065727service-1780.pdf',
        "docs": '/release-notes/service/service-1_78_0'
    },
    {
        "name": 'Service-1.76.0',
        "date": '2022-06-08',
        "url": 'https://content.whatap.io/24/02/01/065727service-1760.pdf',
        "docs": '/release-notes/service/service-1_76_0'
    },
    {
        "name": 'Service-1.74.0',
        "date": '2022-05-25',
        "url": 'https://content.whatap.io/24/02/01/065727service-1740.pdf',
        "docs": '/release-notes/service/service-1_74_0'
    },
    {
        "name": 'Service-1.72.0',
        "date": '2022-05-11',
        "url": 'https://content.whatap.io/24/02/01/065727service-1720.pdf',
        "docs": '/release-notes/service/service-1_72_0'
    },
    {
        "name": 'Service-1.70.0',
        "date": '2022-04-20',
        "url": 'https://content.whatap.io/24/02/01/065726service-1700.pdf',
        "docs": '/release-notes/service/service-1_70_0'
    },
    {
        "name": 'Service-1.68.0',
        "date": '2022-04-06',
        "url": 'https://content.whatap.io/24/02/01/065726service-1680.pdf',
        "docs": '/release-notes/service/service-1_68_0'
    },
    {
        "name": 'Service-1.66.0',
        "date": '2022-03-23',
        "url": 'https://content.whatap.io/24/02/01/065726service-1660.pdf',
        "docs": '/release-notes/service/service-1_66_0'
    },
    {
        "name": 'Service-1.64.0',
        "date": '2022-03-09',
        "url": 'https://content.whatap.io/24/02/01/065726service-1640.pdf',
        "docs": '/release-notes/service/service-1_64_0'
    },
    {
        "name": 'Service-1.62.0',
        "date": '2022-02-20',
        "url": 'https://content.whatap.io/24/02/01/065726service-1620.pdf',
        "docs": '/release-notes/service/service-1_62_0'
    },
    {
        "name": 'Service-1.60.0',
        "date": '2022-02-09',
        "url": 'https://content.whatap.io/24/02/01/065726service-1600.pdf',
        "docs": '/release-notes/service/service-1_60_0'
    },
    {
        "name": 'Service-1.58.0',
        "date": '2022-01-19',
        "url": 'https://content.whatap.io/24/02/01/065726service-1580.pdf',
        "docs": '/release-notes/service/service-1_58_0'
    },
    {
        "name": 'Service-1.56.0',
        "date": '2022-01-05',
        "url": 'https://content.whatap.io/24/02/01/065726service-1560.pdf',
        "docs": '/release-notes/service/service-1_56_0'
    },
    {
        "name": 'Service-1.54.0',
        "date": '2021-12-28',
        "url": 'https://content.whatap.io/24/02/01/065726service-1540.pdf',
        "docs": '/release-notes/service/service-1_54_0'
    }
];
const javaList = [
    {
        "name": 'Java-agent-v2.2.28',
        "date": '2024-02-27',
        "url": 'https://content.whatap.io/24/03/05/003739java-agent-v2228.pdf',
        "docs": '/release-notes/java/java-2_2_28'
    },
    {
        "name": 'Java-agent-v2.2.27',
        "date": '2024-02-06',
        "url": 'https://content.whatap.io/24/03/05/003739java-agent-v2227.pdf',
        "docs": '/release-notes/java/java-2_2_27'
    },
    {
        "name": 'Java-agent-v2.2.26',
        "date": '2024-01-11',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2226.pdf',
        "docs": '/release-notes/java/java-2_2_26'
    },
    {
        "name": 'Java-agent-v2.2.25',
        "date": '2023-12-20',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2225.pdf',
        "docs": '/release-notes/java/java-2_2_25'
    },
    {
        "name": 'Java-agent-v2.2.24',
        "date": '2023-11-30',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2224.pdf',
        "docs": '/release-notes/java/java-2_2_24'
    },
    {
        "name": 'Java-agent-v2.2.23',
        "date": '2023-11-22',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2223.pdf',
        "docs": '/release-notes/java/java-2_2_23'
    },
    {
        "name": 'Java-agent-v2.2.22',
        "date": '2023-11-16',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2222.pdf',
        "docs": '/release-notes/java/java-2_2_22'
    },
    {
        "name": 'Java-agent-v2.2.21',
        "date": '2023-11-02',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2221.pdf',
        "docs": '/release-notes/java/java-2_2_21'
    },
    {
        "name": 'Java-agent-v2.2.20',
        "date": '2023-10-19',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2220.pdf',
        "docs": '/release-notes/java/java-2_2_20'
    },
    {
        "name": 'Java-agent-v2.2.19',
        "date": '2023-10-10',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2219.pdf',
        "docs": '/release-notes/java/java-2_2_19'
    },
    {
        "name": 'Java-agent-v2.2.18',
        "date": '2023-09-26',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2218.pdf',
        "docs": '/release-notes/java/java-2_2_18'
    },
    {
        "name": 'Java-agent-v2.2.17',
        "date": '2023-09-18',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2217.pdf',
        "docs": '/release-notes/java/java-2_2_17'
    },
    {
        "name": 'Java-agent-v2.2.16',
        "date": '2023-09-08',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2216.pdf',
        "docs": '/release-notes/java/java-2_2_16'
    },
    {
        "name": 'Java-agent-v2.2.15',
        "date": '2023-08-31',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2215.pdf',
        "docs": '/release-notes/java/java-2_2_15'
    },
    {
        "name": 'Java-agent-v2.2.14',
        "date": '2023-08-17',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2214.pdf',
        "docs": '/release-notes/java/java-2_2_14'
    },
    {
        "name": 'Java-agent-v2.2.13',
        "date": '2023-08-08',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2213.pdf',
        "docs": '/release-notes/java/java-2_2_13'
    },
    {
        "name": 'Java-agent-v2.2.12',
        "date": '2023-07-21',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2212.pdf',
        "docs": '/release-notes/java/java-2_2_12'
    },
    {
        "name": 'Java-agent-v2.2.11',
        "date": '2023-07-10',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v2211.pdf',
        "docs": '/release-notes/java/java-2_2_11'
    },
    {
        "name": 'Java-agent-v2.2.10',
        "date": '2023-06-29',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v2210.pdf',
        "docs": '/release-notes/java/java-2_2_10'
    },
    {
        "name": 'Java-agent-v2.2.09',
        "date": '2023-06-16',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v229.pdf',
        "docs": '/release-notes/java/java-2_2_9'
    },
    {
        "name": 'Java-agent-v2.2.08',
        "date": '2023-06-09',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v228.pdf',
        "docs": '/release-notes/java/java-2_2_8'
    },
    {
        "name": 'Java-agent-v2.2.07',
        "date": '2023-06-05',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v227.pdf',
        "docs": '/release-notes/java/java-2_2_7'
    },
    {
        "name": 'Java-agent-v2.2.06',
        "date": '2023-06-01',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v226.pdf',
        "docs": '/release-notes/java/java-2_2_6'
    },
    {
        "name": 'Java-agent-v2.2.05',
        "date": '2023-05-30',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v225.pdf',
        "docs": '/release-notes/java/java-2_2_5'
    },
    {
        "name": 'Java-agent-v2.2.04',
        "date": '2023-05-25',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v224.pdf',
        "docs": '/release-notes/java/java-2_2_4'
    },
    {
        "name": 'Java-agent-v2.2.03',
        "date": '2023-02-14',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v223.pdf',
        "docs": '/release-notes/java/java-2_2_3'
    },
    {
        "name": 'Java-agent-v2.2.02',
        "date": '2022-12-21',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v222.pdf',
        "docs": '/release-notes/java/java-2_2_2'
    },
    {
        "name": 'Java-agent-v2.2.0',
        "date": '2022-11-01',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v220.pdf',
        "docs": '/release-notes/java/java-2_2_0'
    },
    {
        "name": 'Java-agent-v2.1.3',
        "date": '2022-09-01',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v213.pdf',
        "docs": '/release-notes/java/java-2_1_3'
    },
    {
        "name": 'Java-agent-v2.1.2',
        "date": '2022-08-01',
        "url": 'https://content.whatap.io/24/02/01/065715java-agent-v212.pdf',
        "docs": '/release-notes/java/java-2_1_2'
    },
    {
        "name": 'Java-agent-v2.1.1',
        "date": '2022-07-12',
        "url": 'https://content.whatap.io/24/02/01/065715java-agent-v211.pdf',
        "docs": '/release-notes/java/java-2_1_1'
    },
    {
        "name": 'Java-agent-v2.1.0',
        "date": '2022-12-15',
        "url": 'https://content.whatap.io/24/02/01/065715java-agent-v210.pdf',
        "docs": '/release-notes/java/java-2_1_0'
    }
];
const javaBatchList = [
    {
        "name": "java-batch-agent-v2.2.24",
        "date": "2024-02-27",
        "url": "https://content.whatap.io/24/03/05/003514java-batch-agent-v2224.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_24"
    },
    {
        "name": "java-batch-agent-v2.2.23",
        "date": "2024-02-06",
        "url": "https://content.whatap.io/24/03/05/003514java-batch-agent-v2223.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_23"
    },
    {
        "name": "java-batch-agent-v2.2.22",
        "date": "2023-12-20",
        "url": "https://content.whatap.io/24/02/01/065717java-batch-agent-v2222.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_22"
    },
    {
        "name": "java-batch-agent-v2.2.21",
        "date": "2023-11-23",
        "url": "https://content.whatap.io/24/02/01/065717java-batch-agent-v2221.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_21"
    },
    {
        "name": "java-batch-agent-v2.2.20",
        "date": "2023-10-19",
        "url": "https://content.whatap.io/24/02/01/065717java-batch-agent-v2220.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_20"
    },
    {
        "name": "java-batch-agent-v2.2.19",
        "date": "2023-10-10",
        "url": "https://content.whatap.io/24/02/01/065717java-batch-agent-v2219.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_19"
    }
];
const phpList = [
    {
        "name": 'php-agent-v2.7.1',
        "date": '2024-01-24',
        "url": 'https://content.whatap.io/24/02/01/065722php-agent-v271.pdf',
        "docs": '/release-notes/php/php-2_7_1'
    },
    {
        "name": 'php-agent-v2.7.0',
        "date": '2024-01-10',
        "url": 'https://content.whatap.io/24/02/01/065722php-agent-v270.pdf',
        "docs": '/release-notes/php/php-2_7_0'
    },
    {
        "name": 'php-agent-v2.6.3',
        "date": '2023-11-22',
        "url": 'https://content.whatap.io/24/02/01/065722php-agent-v263.pdf',
        "docs": '/release-notes/php/php-2_6_3'
    },
    {
        "name": 'php-agent-v2.6.2',
        "date": '2023-09-13',
        "url": 'https://content.whatap.io/24/02/01/065722php-agent-v262.pdf',
        "docs": '/release-notes/php/php-2_6_2'
    },
    {
        "name": 'php-agent-v2.6.1',
        "date": '2023-02-15',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v261.pdf',
        "docs": '/release-notes/php/php-2_6_1'
    },
    {
        "name": 'php-agent-v2.6.0',
        "date": '2023-01-04',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v260.pdf',
        "docs": '/release-notes/php/php-2_6_0'
    },
    {
        "name": 'php-agent-v2.5.4',
        "date": '2022-11-16',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v254.pdf',
        "docs": '/release-notes/php/php-2_5_4'
    },
    {
        "name": 'php-agent-v2.5.3',
        "date": '2022-08-31',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v253.pdf',
        "docs": '/release-notes/php/php-2_5_3'
    },
    {
        "name": 'php-agent-v2.5.2',
        "date": '2022-07-06',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v252.pdf',
        "docs": '/release-notes/php/php-2_5_2'
    },
    {
        "name": 'php-agent-v2.5.1',
        "date": '2022-05-18',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v251.pdf',
        "docs": '/release-notes/php/php-2_5_1'
    },
    {
        "name": 'php-agent-v2.5.0',
        "date": '2022-05-18',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v250.pdf',
        "docs": '/release-notes/php/php-2_5_0'
    },
    {
        "name": 'php-agent-v2.4.1',
        "date": '2022-02-16',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v241.pdf',
        "docs": '/release-notes/php/php-2_4_1'
    },
    {
        "name": 'php-agent-v2.4.0',
        "date": '2021-12-16',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v240.pdf',
        "docs": '/release-notes/php/php-2_4_0'
    },
    {
        "name": 'php-agent-v2.3.3',
        "date": '2021-11-10',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v233.pdf',
        "docs": '/release-notes/php/php-2_3_3'
    }
];
const nodejsList = [
    {
        "name": 'Node.js-agent-v0.4.90',
        "date": '2024-02-05',
        "url": 'https://content.whatap.io/24/03/05/003514nodejs-agent-v0490.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_90'
    },
    {
        "name": 'Node.js-agent-v0.4.89',
        "date": '2024-01-22',
        "url": 'https://content.whatap.io/24/02/01/065721nodejs-agent-v0489.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_89'
    },
    {
        "name": 'Node.js-agent-v0.4.88',
        "date": '2024-01-11',
        "url": 'https://content.whatap.io/24/02/01/065721nodejs-agent-v0488.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_88'
    },
    {
        "name": 'Node.js-agent-v0.4.86',
        "date": '2024-01-04',
        "url": 'https://content.whatap.io/24/02/01/065720nodejs-agent-v0486.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_86'
    },
    {
        "name": 'Node.js-agent-v0.4.83',
        "date": '2023-12-11',
        "url": 'https://content.whatap.io/24/02/01/065720nodejs-agent-v0483.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_83'
    },
    {
        "name": 'Node.js-agent-v0.4.81',
        "date": '2023-11-08',
        "url": 'https://content.whatap.io/24/02/01/065720nodejs-agent-v0481.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_81'
    },
    {
        "name": 'Node.js-agent-v0.4.80',
        "date": '2023-10-31',
        "url": 'https://content.whatap.io/24/02/01/065720nodejs-agent-v0480.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_80'
    },
    {
        "name": 'Node.js-agent-v0.4.77',
        "date": '2023-06-23',
        "url": 'https://content.whatap.io/24/02/01/065720nodejs-agent-v0477.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_77'
    }
];
const pyList = [
    {
        "name": 'Python-agent-v1.5.8',
        "date": '2024-02-18',
        "url": 'https://content.whatap.io/24/03/05/003514python-agent-v158.pdf',
        "docs": '/release-notes/python/python-1_5_8'
    },
    {
        "name": 'Python-agent-v1.5.7',
        "date": '2024-02-06',
        "url": 'https://content.whatap.io/24/03/05/003514python-agent-v157.pdf',
        "docs": '/release-notes/python/python-1_5_7'
    },
    {
        "name": 'Python-agent-v1.5.6',
        "date": '2024-02-02',
        "url": 'https://content.whatap.io/24/03/05/003514python-agent-v156.pdf',
        "docs": '/release-notes/python/python-1_5_6'
    },
    {
        "name": 'Python-agent-v1.5.5',
        "date": '2024-02-01',
        "url": 'https://content.whatap.io/24/03/05/003514python-agent-v155.pdf',
        "docs": '/release-notes/python/python-1_5_5'
    },
    {
        "name": 'Python-agent-v1.5.4',
        "date": '2024-01-09',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v154.pdf',
        "docs": '/release-notes/python/python-1_5_4'
    },
    {
        "name": 'Python-agent-v1.5.3',
        "date": '2024-01-05',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v153.pdf',
        "docs": '/release-notes/python/python-1_5_3'
    },
    {
        "name": 'Python-agent-v1.5.2',
        "date": '2024-01-03',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v152.pdf',
        "docs": '/release-notes/python/python-1_5_2'
    },
    {
        "name": 'Python-agent-v1.5.0',
        "date": '2023-12-29',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v150.pdf',
        "docs": '/release-notes/python/python-1_5_0'
    },
    {
        "name": 'Python-agent-v1.4.9',
        "date": '2023-12-28',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v149.pdf',
        "docs": '/release-notes/python/python-1_4_9'
    },
    {
        "name": 'Python-agent-v1.4.8',
        "date": '2023-10-25',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v148.pdf',
        "docs": '/release-notes/python/python-1_4_8'
    },
    {
        "name": 'Python-agent-v1.4.6',
        "date": '2023-10-12',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v146.pdf',
        "docs": '/release-notes/python/python-1_4_6'
    },
    {
        "name": 'Python-agent-v1.4.4',
        "date": '2023-08-17',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v144.pdf',
        "docs": '/release-notes/python/python-1_4_4'
    },
    {
        "name": 'Python-agent-v1.4.3',
        "date": '2023-08-02',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v143.pdf',
        "docs": '/release-notes/python/python-1_4_3'
    },
    {
        "name": 'Python-agent-v1.4.2',
        "date": '2023-07-12',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v142.pdf',
        "docs": '/release-notes/python/python-1_4_2'
    },
    {
        "name": 'Python-agent-v1.4.1',
        "date": '2023-07-10',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v141.pdf',
        "docs": '/release-notes/python/python-1_4_1'
    },
    {
        "name": 'Python-agent-v1.4.0',
        "date": '2023-07-04',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v140.pdf',
        "docs": '/release-notes/python/python-1_4_0'
    },
    {
        "name": 'Python-agent-v1.3.9',
        "date": '2023-06-28',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v139.pdf',
        "docs": '/release-notes/python/python-1_3_9'
    },
    {
        "name": 'Python-agent-v1.3.6',
        "date": '2023-05-18',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v136.pdf',
        "docs": '/release-notes/python/python-1_3_6'
    },
    {
        "name": 'Python-agent-v1.3.4',
        "date": '2023-04-26',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v134.pdf',
        "docs": '/release-notes/python/python-1_3_4'
    },
    {
        "name": 'Python-agent-v1.3.3',
        "date": '2023-04-10',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v133.pdf',
        "docs": '/release-notes/python/python-1_3_4'
    },
    {
        "name": 'Python-agent-v1.3.2',
        "date": '2023-03-29',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v132.pdf',
        "docs": '/release-notes/python/python-1_3_2'
    },
    {
        "name": 'Python-agent-v1.3.1',
        "date": '2023-03-15',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v131.pdf',
        "docs": '/release-notes/python/python-1_3_1'
    },
    {
        "name": 'Python-agent-v1.3.0',
        "date": '2023-01-19',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v130.pdf',
        "docs": '/release-notes/python/python-1_3_0'
    },
    {
        "name": 'Python-agent-v1.2.4',
        "date": '2022-09-26',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v124.pdf',
        "docs": '/release-notes/python/python-1_2_4'
    },
    {
        "name": 'Python-agent-v1.2.1',
        "date": '2022-07-18',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v121.pdf',
        "docs": '/release-notes/python/python-1_2_1'
    },
    {
        "name": 'Python-agent-v1.2.0',
        "date": '2022-02-07',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v120.pdf',
        "docs": '/release-notes/python/python-1_2_0'
    },
    {
        "name": 'Python-agent-v1.1.6',
        "date": '2022-01-25',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v116.pdf',
        "docs": '/release-notes/python/python-1_1_6'
    }
];
const dotnetList = [
    {
        "name": '.NET-agent-v2.2.0',
        "date": '2023-11-10',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v220.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_2_0'
    },
    {
        "name": '.NET-agent-v2.1.9',
        "date": '2023-11-03',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v219.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_9'
    },
    {
        "name": '.NET-agent-v2.1.8',
        "date": '2023-10-24',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v218.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_8'
    },
    {
        "name": '.NET-agent-v2.1.7',
        "date": '2023-10-16',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v217.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_7'
    },
    {
        "name": '.NET-agent-v2.1.6',
        "date": '2023-10-05',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v216.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_6'
    },
    {
        "name": '.NET-agent-v2.1.5',
        "date": '2023-09-13',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v215.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_5'
    },
    {
        "name": '.NET-agent-v2.1.4',
        "date": '2023-08-29',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v214.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_4'
    },
    {
        "name": '.NET-agent-v2.1.3',
        "date": '2023-08-16',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v213.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_3'
    },
    {
        "name": '.NET-agent-v2.1.2',
        "date": '2023-07-20',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v212.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_2'
    },
    {
        "name": '.NET-agent-v2.1.1',
        "date": '2023-07-17',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v211.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_1'
    },
    {
        "name": '.NET-agent-v2.1.0',
        "date": '2023-07-06',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v210.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_0'
    },
    {
        "name": '.NET-agent-v2.0.9',
        "date": '2023-06-09',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v209.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_9'
    },
    {
        "name": '.NET-agent-v2.0.8',
        "date": '2023-05-31',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v208.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_8'
    },
    {
        "name": '.NET-agent-v2.0.7',
        "date": '2023-05-30',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v207.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_7'
    },
    {
        "name": '.NET-agent-v2.0.6',
        "date": '2023-05-02',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v206.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_6'
    },
    {
        "name": '.NET-agent-v2.0.5',
        "date": '2022-01-10',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v205.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_5'
    },
    {
        "name": '.NET-agent-v2.0.4',
        "date": '2021-05-10',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v204.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_4'
    },
    {
        "name": '.NET-agent-v2.0.3',
        "date": '2021-04-23',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v203.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_3'
    },
    {
        "name": '.NET-agent-v2.0.2',
        "date": '2021-04-02',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v202.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_2'
    },
    {
        "name": '.NET-agent-v2.0.1',
        "date": '2021-02-09',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v201.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_1'
    },
    {
        "name": '.NET-agent-v2.0.0',
        "date": '2020-12-16',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v200.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_0'
    }
];
const goList = [
    {
        "name": 'Go-agent-v0.3.1',
        "date": '2024-01-24',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v031.pdf',
        "docs": '/release-notes/golang/golang-0_3_1'
    },
    {
        "name": 'Go-agent-v0.3.0',
        "date": '2024-01-10',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v030.pdf',
        "docs": '/release-notes/golang/golang-0_3_0'
    },
    {
        "name": 'Go-agent-v0.2.4',
        "date": '2023-11-22',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v024.pdf',
        "docs": '/release-notes/golang/golang-0_2_4'
    },
    {
        "name": 'Go-agent-v0.2.3',
        "date": '2023-09-13',
        "url": 'https://content.whatap.io/24/02/01/065715go-agent-v023.pdf',
        "docs": '/release-notes/golang/golang-0_2_3'
    },
    {
        "name": 'Go-agent-v0.2.2',
        "date": '2023-06-21',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v022.pdf',
        "docs": '/release-notes/golang/golang-0_2_2'
    },
    {
        "name": 'Go-agent-v0.1.14',
        "date": '2022-12-14',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v0114.pdf',
        "docs": '/release-notes/golang/golang-0_1_14'
    },
    {
        "name": 'Go-agent-v0.1.13',
        "date": '2022-08-31',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v0113.pdf',
        "docs": '/release-notes/golang/golang-0_1_13'
    },
    {
        "name": 'Go-agent-v0.1.12',
        "date": '2022-08-02',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v0112.pdf',
        "docs": '/release-notes/golang/golang-0_1_12'
    },
    {
        "name": 'Go-agent-v0.1.11',
        "date": '2022-05-26',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v0111.pdf',
        "docs": '/release-notes/golang/golang-0_1_11'
    },
    {
        "name": 'Go-agent-v0.1.10',
        "date": '2022-05-12',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v0110.pdf',
        "docs": '/release-notes/golang/golang-0_1_10'
    },
    {
        "name": 'Go-agent-v0.1.09',
        "date": '2022-04-27',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v019.pdf',
        "docs": '/release-notes/golang/golang-0_1_9'
    },
    {
        "name": 'Go-agent-v0.1.08',
        "date": '2022-01-19',
        "url": 'https://content.whatap.io/24/02/01/065714Go-agent-v018.pdf',
        "docs": '/release-notes/golang/golang-0_1_8'
    },
    {
        "name": 'Go-agent-v0.1.07',
        "date": '2022-01-04',
        "url": 'https://content.whatap.io/24/02/01/065714Go-agent-v017.pdf',
        "docs": '/release-notes/golang/golang-0_1_7'
    },
    {
        "name": 'Go-agent-v0.1.06',
        "date": '2021-11-23',
        "url": 'https://content.whatap.io/24/02/01/065714Go-agent-v016.pdf',
        "docs": '/release-notes/golang/golang-0_1_6'
    },
    {
        "name": 'Go-agent-v0.1.05',
        "date": '2021-09-01',
        "url": 'https://content.whatap.io/24/02/01/065714Go-agent-v015.pdf',
        "docs": '/release-notes/golang/golang-0_1_5'
    }
];
const serverList = [
    {
        "name": "Server-agent-v2.5.2",
        "date": "2024-02-13",
        "url": "https://content.whatap.io/24/03/05/003514server-agent-v252.pdf",
        "docs": "/release-notes/server/server-2_5_2"
    },
    {
        "name": "Server-agent-v2.5.1",
        "date": "2024-01-26",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v251.pdf",
        "docs": "/release-notes/server/server-2_5_1"
    },
    {
        "name": "Server-agent-v2.5.0",
        "date": "2024-01-24",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v250.pdf",
        "docs": "/release-notes/server/server-2_5_0"
    },
    {
        "name": "Server-agent-v2.4.9",
        "date": "2023-12-29",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v249.pdf",
        "docs": "/release-notes/server/server-2_4_9"
    },
    {
        "name": "Server-agent-v2.4.8",
        "date": "2023-12-21",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v248.pdf",
        "docs": "/release-notes/server/server-2_4_8"
    },
    {
        "name": "Server-agent-v2.4.7",
        "date": "2023-12-19",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v247.pdf",
        "docs": "/release-notes/server/server-2_4_7"
    },
    {
        "name": "Server-agent-v2.4.6",
        "date": "2023-12-14",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v246.pdf",
        "docs": "/release-notes/server/server-2_4_6"
    },
    {
        "name": "Server-agent-v2.4.5",
        "date": "2023-11-29",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v245.pdf",
        "docs": "/release-notes/server/server-2_4_5"
    },
    {
        "name": "Server-agent-v2.4.4",
        "date": "2023-11-08",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v244.pdf",
        "docs": "/release-notes/server/server-2_4_4"
    },
    {
        "name": "Server-agent-v2.4.3",
        "date": "2023-10-31",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v243.pdf",
        "docs": "/release-notes/server/server-2_4_3"
    },
    {
        "name": "Server-agent-v2.4.2",
        "date": "2023-10-06",
        "url": "https://content.whatap.io/24/02/01/065725server-agent-v242.pdf",
        "docs": "/release-notes/server/server-2_4_2"
    },
    {
        "name": "Server-agent-v2.4.1",
        "date": "2023-10-04",
        "url": "https://content.whatap.io/24/02/01/065725server-agent-v241.pdf",
        "docs": "/release-notes/server/server-2_4_1"
    },
    {
        "name": "Server-agent-v2.4.0",
        "date": "2023-07-24",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v240.pdf",
        "docs": "/release-notes/server/server-2_4_0"
    },
    {
        "name": "Server-agent-v2.3.9",
        "date": "2023-07-06",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v239.pdf",
        "docs": "/release-notes/server/server-2_3_9"
    },
    {
        "name": "Server-agent-v2.3.8",
        "date": "2023-06-19",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v238.pdf",
        "docs": "/release-notes/server/server-2_3_8"
    },
    {
        "name": "Server-agent-v2.3.7",
        "date": "2023-06-08",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v237.pdf",
        "docs": "/release-notes/server/server-2_3_7"
    },
    {
        "name": "Server-agent-v2.3.6",
        "date": "2023-05-30",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v236.pdf",
        "docs": "/release-notes/server/server-2_3_6"
    },
    {
        "name": "Server-agent-v2.3.4",
        "date": "2023-04-18",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v234.pdf",
        "docs": "/release-notes/server/server-2_3_4"
    },
    {
        "name": "Server-agent-v2.3.3",
        "date": "2023-02-28",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v233.pdf",
        "docs": "/release-notes/server/server-2_3_3"
    },
    {
        "name": "Server-agent-v2.3.2",
        "date": "2023-02-21",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v232.pdf",
        "docs": "/release-notes/server/server-2_3_2"
    },
    {
        "name": "Server-agent-v2.3.1",
        "date": "2023-01-25",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v231.pdf",
        "docs": "/release-notes/server/server-2_3_1"
    },
    {
        "name": "Server-agent-v2.3.0",
        "date": "2023-01-11",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v230.pdf",
        "docs": "/release-notes/server/server-2_3_0"
    },
    {
        "name": "Server-agent-v2.2.9",
        "date": "2022-12-14",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v229.pdf",
        "docs": "/release-notes/server/server-2_2_9"
    },
    {
        "name": "Server-agent-v2.2.8",
        "date": "2022-11-29",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v228.pdf",
        "docs": "/release-notes/server/server-2_2_8"
    },
    {
        "name": "Server-agent-v2.2.7",
        "date": "2022-10-04",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v227.pdf",
        "docs": "/release-notes/server/server-2_2_7"
    },
    {
        "name": "Server-agent-v2.2.6",
        "date": "2022-08-24",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v226.pdf",
        "docs": "/release-notes/server/server-2_2_6"
    },
    {
        "name": "Server-agent-v2.2.5",
        "date": "2022-08-16",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v225.pdf",
        "docs": "/release-notes/server/server-2_2_5"
    },
    {
        "name": "Server-agent-v2.2.4",
        "date": "2022-07-29",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v224.pdf",
        "docs": "/release-notes/server/server-2_2_4"
    },
    {
        "name": "Server-agent-v2.2.3",
        "date": "2022-06-16",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v223.pdf",
        "docs": "/release-notes/server/server-2_2_3"
    },
    {
        "name": "Server-agent-v2.2.2",
        "date": "2022-06-08",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v222.pdf",
        "docs": "/release-notes/server/server-2_2_2"
    },
    {
        "name": "Server-agent-v2.2.1",
        "date": "2022-05-29",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v221.pdf",
        "docs": "/release-notes/server/server-2_2_1"
    },
    {
        "name": "Server-agent-v2.2.0",
        "date": "2022-05-24",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v220.pdf",
        "docs": "/release-notes/server/server-2_2_0"
    },
    {
        "name": "Server-agent-v2.1.9",
        "date": "2022-05-14",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v219.pdf",
        "docs": "/release-notes/server/server-2_1_9"
    },
    {
        "name": "Server-agent-v2.1.8",
        "date": "2022-04-22",
        "url": "https://content.whatap.io/24/02/01/065723Server-agent-v218.pdf",
        "docs": "/release-notes/server/server-2_1_8"
    },
    {
        "name": "Server-agent-v2.1.7",
        "date": "2023-03-17",
        "url": "https://content.whatap.io/24/02/01/065723Server-agent-v217.pdf",
        "docs": "/release-notes/server/server-2_1_7"
    }
];
const k8sList = [
    {
        "name": "Kubernetes-agent-v1.5.6",
        "date": "2024-02-23",
        "url": "https://content.whatap.io/24/03/05/003514k8s-agent-v156.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_6"
    },
    {
        "name": "Kubernetes-agent-v1.5.5",
        "date": "2024-02-14",
        "url": "https://content.whatap.io/24/03/05/003514k8s-agent-v155.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_5"
    },
    {
        "name": "Kubernetes-agent-v1.5.4",
        "date": "2024-02-06",
        "url": "https://content.whatap.io/24/03/05/003514k8s-agent-v154.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_4"
    },
    {
        "name": "Kubernetes-agent-v1.5.3",
        "date": "2024-01-30",
        "url": "https://content.whatap.io/24/03/05/003514k8s-agent-v153.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_3"
    },
    {
        "name": "Kubernetes-agent-v1.5.2",
        "date": "2024-01-26",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v152.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_2"
    },
    {
        "name": "Kubernetes-agent-v1.5.1",
        "date": "2024-01-25",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v151.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_1"
    },
    {
        "name": "Kubernetes-agent-v1.4.9",
        "date": "2024-01-08",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v149.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_9"
    },
    {
        "name": "Kubernetes-agent-v1.4.8",
        "date": "2023-12-14",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v148.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_8"
    },
    {
        "name": "Kubernetes-agent-v1.4.4",
        "date": "2023-11-22",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v144.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_4"
    },
    {
        "name": "Kubernetes-agent-v1.4.3",
        "date": "2023-11-21",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v143.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_3"
    },
    {
        "name": "Kubernetes-agent-v1.4.2",
        "date": "2023-11-15",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v142.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_2"
    },
    {
        "name": "Kubernetes-agent-v1.4.1",
        "date": "2023-11-08",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v141.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_1"
    },
    {
        "name": "Kubernetes-agent-v1.4.0",
        "date": "2023-10-31",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v140.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_0"
    },
    {
        "name": "Kubernetes-agent-v1.3.9",
        "date": "2023-10-25",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v139.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_9"
    },
    {
        "name": "Kubernetes-agent-v1.3.8",
        "date": "2023-10-04",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v138.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_8"
    },
    {
        "name": "Kubernetes-agent-v1.3.7",
        "date": "2023-09-27",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v137.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_7"
    },
    {
        "name": "Kubernetes-agent-v1.3.6",
        "date": "2023-09-25",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v136.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_6"
    },
    {
        "name": "Kubernetes-agent-v1.3.5",
        "date": "2023-09-12",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v135.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_5"
    },
    {
        "name": "Kubernetes-agent-v1.3.4",
        "date": "2023-08-11",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v134.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_4"
    },
    {
        "name": "Kubernetes-agent-v1.3.3",
        "date": "2023-08-04",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v133.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_3"
    },
    {
        "name": "Kubernetes-agent-v1.3.2",
        "date": "2023-07-28",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v132.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_2"
    },
    {
        "name": "Kubernetes-agent-v1.3.1",
        "date": "2023-06-28",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v131.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_1"
    },
    {
        "name": "Kubernetes-agent-v1.2.9",
        "date": "2023-06-07",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v129.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_9"
    },
    {
        "name": "Kubernetes-agent-v1.2.8",
        "date": "2023-06-01",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v128.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_8"
    },
    {
        "name": "Kubernetes-agent-v1.2.7",
        "date": "2023-05-11",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v127.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_7"
    },
    {
        "name": "Kubernetes-agent-v1.2.6",
        "date": "2023-05-02",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v126.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_6"
    },
    {
        "name": "Kubernetes-agent-v1.2.5",
        "date": "2023-04-03",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v125.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_5"
    },
    {
        "name": "Kubernetes-agent-v1.2.2",
        "date": "2023-01-26",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v122.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_2"
    },
    {
        "name": "Kubernetes-agent-v1.2.1",
        "date": "2023-01-11",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v121.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_1"
    },
    {
        "name": "Kubernetes-agent-v1.2.0",
        "date": "2022-11-21",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v120.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_0"
    },
    {
        "name": "Kubernetes-agent-v1.1.55",
        "date": "2022-10-28",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v1155.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_55"
    },
    {
        "name": "Kubernetes-agent-v1.1.54",
        "date": "2022-09-01",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1154.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_54"
    },
    {
        "name": "Kubernetes-agent-v1.1.52",
        "date": "2022-08-03",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1152.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_52"
    },
    {
        "name": "Kubernetes-agent-v1.1.51",
        "date": "2022-08-02",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1151.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_51"
    },
    {
        "name": "Kubernetes-agent-v1.1.50",
        "date": "2022-07-20",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1150.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_50"
    },
    {
        "name": "Kubernetes-agent-v1.1.49",
        "date": "2022-07-14",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1149.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_49"
    },
    {
        "name": "Kubernetes-agent-v1.1.48",
        "date": "2022-06-09",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1148.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_48"
    },
    {
        "name": "Kubernetes-agent-v1.1.46",
        "date": "2022-05-31",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1146.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_46"
    },
    {
        "name": "Kubernetes-agent-v1.1.45",
        "date": "2022-05-19",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1145.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_45"
    },
    {
        "name": "Kubernetes-agent-v1.1.44",
        "date": "2022-05-17",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1144.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_44"
    },
    {
        "name": "Kubernetes-agent-v1.1.43",
        "date": "2022-05-11",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1143.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_43"
    },
    {
        "name": "Kubernetes-agent-v1.1.42",
        "date": "2022-02-07",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1142.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_42"
    },
    {
        "name": "Kubernetes-agent-v1.1.41",
        "date": "2022-01-28",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1141.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_41"
    },
    {
        "name": "Kubernetes-agent-v1.1.40",
        "date": "2022-01-25",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1140.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_40"
    }
];
const dbxList = [
    {
        "name": "DBX-agent-v1.6.30",
        "date": "2024-02-29",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1630.pdf",
        "docs": "release-notes/db/dbx-1_6_30"
    },
    {
        "name": "DBX-agent-v1.6.26",
        "date": "2024-02-28",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1626.pdf",
        "docs": "release-notes/db/dbx-1_6_26"
    },
    {
        "name": "DBX-agent-v1.6.25",
        "date": "2024-02-26",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1625.pdf",
        "docs": "release-notes/db/dbx-1_6_25"
    },
    {
        "name": "DBX-agent-v1.6.24",
        "date": "2024-02-21",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1624.pdf",
        "docs": "release-notes/db/dbx-1_6_24"
    },
    {
        "name": "DBX-agent-v1.6.23",
        "date": "2024-02-20",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1623.pdf",
        "docs": "release-notes/db/dbx-1_6_23"
    },
    {
        "name": "DBX-agent-v1.6.22",
        "date": "2024-02-15",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1622.pdf",
        "docs": "release-notes/db/dbx-1_6_22"
    },
    {
        "name": "DBX-agent-v1.6.21",
        "date": "2024-02-07",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1621.pdf",
        "docs": "release-notes/db/dbx-1_6_21"
    },
    {
        "name": "DBX-agent-v1.6.20",
        "date": "2024-02-02",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1620.pdf",
        "docs": "release-notes/db/dbx-1_6_20"
    },
    {
        "name": "DBX-agent-v1.6.19",
        "date": "2024-02-01",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1619.pdf",
        "docs": "release-notes/db/dbx-1_6_19"
    },
    {
        "name": "DBX-agent-v1.6.18",
        "date": "2024-01-25",
        "url": "https://content.whatap.io/24/02/01/065713dbx-agent-v1618.pdf",
        "docs": "release-notes/db/dbx-1_6_18"
    },
    {
        "name": "DBX-agent-v1.6.17",
        "date": "2024-01-16",
        "url": "https://content.whatap.io/24/02/01/065713dbx-agent-v1617.pdf",
        "docs": "release-notes/db/dbx-1_6_17"
    },
    {
        "name": "DBX-agent-v1.6.16",
        "date": "2024-01-03",
        "url": "https://content.whatap.io/24/02/01/065713dbx-agent-v1616.pdf",
        "docs": "release-notes/db/dbx-1_6_16"
    },
    {
        "name": "DBX-agent-v1.6.15",
        "date": "2023-12-09",
        "url": "https://content.whatap.io/24/02/01/065713dbx-agent-v1615.pdf",
        "docs": "release-notes/db/dbx-1_6_15"
    },
    {
        "name": "DBX-agent-v1.6.14",
        "date": "2023-11-24",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v1614.pdf",
        "docs": "release-notes/db/dbx-1_6_14"
    },
    {
        "name": "DBX-agent-v1.6.13",
        "date": "2023-11-03",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v1613.pdf",
        "docs": "release-notes/db/dbx-1_6_13"
    },
    {
        "name": "DBX-agent-v1.6.12",
        "date": "2023-10-13",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v1612.pdf",
        "docs": "release-notes/db/dbx-1_6_12"
    },
    {
        "name": "DBX-agent-v1.6.11",
        "date": "2023-10-04",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v1611.pdf",
        "docs": "release-notes/db/dbx-1_6_11"
    },
    {
        "name": "DBX-agent-v1.6.10",
        "date": "2023-09-15",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v1610.pdf",
        "docs": "release-notes/db/dbx-1_6_10"
    },
    {
        "name": "DBX-agent-v1.6.9",
        "date": "2023-08-25",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v169.pdf",
        "docs": "release-notes/db/dbx-1_6_9"
    },
    {
        "name": "DBX-agent-v1.6.8",
        "date": "2023-08-18",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v168.pdf",
        "docs": "release-notes/db/dbx-1_6_8"
    },
    {
        "name": "DBX-agent-v1.6.7",
        "date": "2023-06-23",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v167.pdf",
        "docs": "release-notes/db/dbx-1_6_7"
    },
    {
        "name": "DBX-agent-v1.6.6",
        "date": "",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v166.pdf",
        "docs": "release-notes/db/dbx-1_6_6"
    },
    {
        "name": "DBX-agent-v1.6.5",
        "date": "",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v165.pdf",
        "docs": "release-notes/db/dbx-1_6_5"
    }
];
const xosList = [
    {
        "name": "XOS-agent-v1.1.8a",
        "date": "2024-01-25",
        "url": "https://content.whatap.io/24/03/05/003514xos-agent-v118a.pdf",
        "docs": "release-notes/db/xos-1_1_8a"
    },
    {
        "name": "XOS-agent-v1.1.6j",
        "date": "2023-10-13",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v116j.pdf",
        "docs": "release-notes/db/xos-1_1_6j"
    },
    {
        "name": "XOS-agent-v1.1.6g",
        "date": "2023-07-11",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v116g.pdf",
        "docs": "release-notes/db/xos-1_1_6g"
    },
    {
        "name": "XOS-agent-v1.1.4",
        "date": "2022-07-13",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v114.pdf",
        "docs": "release-notes/db/xos-1_1_4"
    },
    {
        "name": "XOS-agent-v1.1.3b",
        "date": "2022-06-07",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v113b.pdf",
        "docs": "release-notes/db/xos-1_1_3b"
    },
    {
        "name": "XOS-agent-v1.1.3",
        "date": "2022-01-10",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v113.pdf",
        "docs": "release-notes/db/xos-1_1_3"
    },
    {
        "name": "XOS-agent-v1.1.2",
        "date": "2021-12-23",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v112.pdf",
        "docs": "release-notes/db/xos-1_1_2"
    },
    {
        "name": "XOS-agent-v1.1.1b",
        "date": "2021-12-22",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v111b.pdf",
        "docs": "release-notes/db/xos-1_1_1b"
    },
    {
        "name": "XOS-agent-v1.1.1a",
        "date": "2021-12-20",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v111a.pdf",
        "docs": "release-notes/db/xos-1_1_1a"
    },
    {
        "name": "XOS-agent-v1.1.1",
        "date": "2021-11-10",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v111.pdf",
        "docs": "release-notes/db/xos-1_1_1"
    },
    {
        "name": "XOS-agent-v1.1.0b",
        "date": "2021-09-13",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v110b.pdf",
        "docs": "release-notes/db/xos-1_1_0b"
    },
    {
        "name": "XOS-agent-v1.1.0a",
        "date": "2021-09-10",
        "url": "https://content.whatap.io/24/02/01/065728xos-agent-v110a.pdf",
        "docs": "release-notes/db/xos-1_1_0a"
    },
    {
        "name": "XOS-agent-v1.1.0",
        "date": "2021-09-01",
        "url": "https://content.whatap.io/24/02/01/065728xos-agent-v110.pdf",
        "docs": "release-notes/db/xos-1_1_0"
    },
    {
        "name": "XOS-agent-old-version",
        "date": "~2021-07-23",
        "url": "https://content.whatap.io/24/02/01/065728xos-agent-old-version.pdf",
        "docs": "release-notes/db/xos-previous"
    }
];
const browserList = [
    {
        "name": "Browser-agent-v1.3.3",
        "date": "2023-12-27",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v133.pdf",
        "docs": "release-notes/browser/browser-v1_3_2"
    },
    {
        "name": "Browser-agent-v1.3.2",
        "date": "2023-10-24",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v132.pdf",
        "docs": "release-notes/browser/browser-v1_3_2"
    },
    {
        "name": "Browser-agent-v1.3.1",
        "date": "2023-09-25",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v131.pdf",
        "docs": "release-notes/browser/browser-v1_3_1"
    },
    {
        "name": "Browser-agent-v1.3.0",
        "date": "2023-09-06",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v130.pdf",
        "docs": "release-notes/browser/browser-v1_3_0"
    },
    {
        "name": "Browser-agent-v1.2.2",
        "date": "2023-08-08",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v122.pdf",
        "docs": "release-notes/browser/browser-v1_2_2"
    },
    {
        "name": "Browser-agent-v1.2.1",
        "date": "2023-07-06",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v121.pdf",
        "docs": "release-notes/browser/browser-v1_2_1"
    },
    {
        "name": "Browser-agent-v1.2.0",
        "date": "2023-06-21",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v120.pdf",
        "docs": "release-notes/browser/browser-v1_2_0"
    },
    {
        "name": "Browser-agent-v1.1.4",
        "date": "2023-05-30",
        "url": "https://content.whatap.io/24/02/01/065711browser-agent-v114.pdf",
        "docs": "release-notes/browser/browser-v1_1_4"
    },
    {
        "name": "Browser-agent-v1.1.3",
        "date": "2023-05-23",
        "url": "https://content.whatap.io/24/02/01/065711browser-agent-v113.pdf",
        "docs": "release-notes/browser/browser-v1_1_3"
    },
    {
        "name": "Browser-agent-v1.1.2",
        "date": "2023-05-15",
        "url": "https://content.whatap.io/24/02/01/065711browser-agent-v112.pdf",
        "docs": "release-notes/browser/browser-v1_1_2"
    },
    {
        "name": "Browser-agent-v1.1.1",
        "date": "2023-04-28",
        "url": "https://content.whatap.io/24/02/01/065711browser-agent-v111.pdf",
        "docs": "release-notes/browser/browser-v1_1_1"
    },
    {
        "name": "Browser-agent-v1.1.0",
        "date": "2023-04-28",
        "url": "https://content.whatap.io/24/02/01/065711browser-agent-v110.pdf",
        "docs": "release-notes/browser/browser-v1_1_0"
    }
];
const etcList = [
    {
        "name": "URL-Release-Notes",
        "date": "2022-01-05",
        "url": "https://content.whatap.io/24/02/01/065728url-release-notes.pdf",
        "docs": "release-notes/url/url-release-notes"
    },
    {
        "name": "Amazon-ECS-Release-Notes",
        "date": "2023-11-23",
        "url": "https://content.whatap.io/24/02/01/065711amazon-ecs-release-notes.pdf",
        "docs": "release-notes/amazon-ecs/amazon-ecs-release-notes"
    },
    {
        "name": "Telegraf-Release-Notes",
        "date": "2020-08-28",
        "url": "https://content.whatap.io/24/02/01/065728telegraf-release-notes.pdf",
        "docs": "release-notes/telegraf/telegraf-release-notes"
    },
    {
        "name": "Focus-Release-Notes",
        "date": "2023-03-22",
        "url": "https://content.whatap.io/24/02/01/065714focus-release-notes.pdf",
        "docs": "release-notes/focus/focus-release-notes"
    }
];



/***/ }),

/***/ 46647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DocCard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(89546);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
var docsUtils = __webpack_require__(51538);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(11410);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(15418);
;// CONCATENATED MODULE: ./src/theme/DocCard/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"cardContainer":"cardContainer_S8oU","cardTitle":"cardTitle_HoSo","cardDescription":"cardDescription_c27F"});
;// CONCATENATED MODULE: ./src/theme/DocCard/index.js








function CardContainer({ href, children }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.A, {
        href: href,
        className: (0,clsx_m/* default */.A)('card padding--lg', styles_module.cardContainer),
        children: children
    });
}
function CardLayout({ href, title, description }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContainer, {
        href: href,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                className: (0,clsx_m/* default */.A)('text--truncate', styles_module.cardTitle),
                title: title,
                children: title
            }),
            description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: (0,clsx_m/* default */.A)('text--truncate', styles_module.cardDescription),
                title: description,
                children: description
            })
        ]
    });
}
function CardCategory({ item }) {
    const href = (0,docsUtils/* findFirstCategoryLink */._o)(item);
    // Unexpected: categories that don't have a link have been filtered upfront
    if (!href) {
        return null;
    }
    var _item_description;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLayout, {
        href: href,
        // icon="🗃️"
        title: item.label,
        description: (_item_description = item.description) !== null && _item_description !== void 0 ? _item_description : (0,Translate/* translate */.T)({
            message: '{count} items',
            id: 'theme.docs.DocCard.categoryDescription',
            description: 'The default description for a category card in the generated index about how many items this category includes'
        }, {
            count: item.items.length
        })
    });
}
function CardLink({ item }) {
    const icon = (0,isInternalUrl/* default */.A)(item.href) ? '📄️' : '🔗';
    var _item_docId;
    const doc = (0,docsUtils/* useDocById */.cC)((_item_docId = item.docId) !== null && _item_docId !== void 0 ? _item_docId : undefined);
    var _item_description;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLayout, {
        href: item.href,
        // icon={icon}
        title: item.label,
        description: (_item_description = item.description) !== null && _item_description !== void 0 ? _item_description : doc === null || doc === void 0 ? void 0 : doc.description
    });
}
function DocCard({ item }) {
    switch(item.type){
        case 'link':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardLink, {
                item: item
            });
        case 'category':
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardCategory, {
                item: item
            });
        default:
            throw new Error(`unknown item type ${JSON.stringify(item)}`);
    }
}


/***/ }),

/***/ 40621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15680);
/* harmony import */ var _theme_DocCardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33322);
/* harmony import */ var _site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51738);
/* harmony import */ var _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72995);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function _define_property(obj, key, value) {
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


const frontMatter = {
    id: 'reference',
    title: '참조 문서',
    description: '와탭 Docs에서 사용하는 주요 개념 및 용어에 대한 자료집입니다.',
    tags: [
        '참조 문서',
        '자료집',
        '와탭',
        'Docs'
    ],
    toc_max_heading_level: 4
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "reference",
    "id": "reference",
    "title": "참조 문서",
    "description": "와탭 Docs에서 사용하는 주요 개념 및 용어에 대한 자료집입니다.",
    "source": "@site/docs/reference.mdx",
    "sourceDirName": ".",
    "slug": "/reference",
    "permalink": "/whatap-docs/reference",
    "draft": false,
    "editUrl": "undefined/docs/reference.mdx",
    "tags": [
        {
            "label": "참조 문서",
            "permalink": "/whatap-docs/tags/참조-문서"
        },
        {
            "label": "자료집",
            "permalink": "/whatap-docs/tags/자료집"
        },
        {
            "label": "와탭",
            "permalink": "/whatap-docs/tags/와탭"
        },
        {
            "label": "Docs",
            "permalink": "/whatap-docs/tags/docs"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "reference",
        "title": "참조 문서",
        "description": "와탭 Docs에서 사용하는 주요 개념 및 용어에 대한 자료집입니다.",
        "tags": [
            "참조 문서",
            "자료집",
            "와탭",
            "Docs"
        ],
        "toc_max_heading_level": 4
    },
    "sidebar": "referSidebar",
    "next": {
        "title": "메트릭스",
        "permalink": "/whatap-docs/metrics/common-metrics-intro"
    }
};
const assets = {};



const toc = [
    {
        value: ' Docs 다운로드',
        id: 'pdf-download',
        level: 2
    },
    {
        value: '상품별, 종류별 문서 다운로드',
        id: '상품별-종류별-문서-다운로드',
        level: 3
    },
    {
        value: '릴리스 노트 다운로드',
        id: '릴리스-노트-다운로드',
        level: 3
    },
    {
        value: 'Service',
        id: 'service',
        level: 4
    },
    {
        value: 'Java agent',
        id: 'java-agent',
        level: 4
    },
    {
        value: 'Java batch agent',
        id: 'java-batch-agent',
        level: 4
    },
    {
        value: 'PHP agent',
        id: 'php-agent',
        level: 4
    },
    {
        value: 'Node.js agent',
        id: 'nodejs-agent',
        level: 4
    },
    {
        value: 'Python agent',
        id: 'python-agent',
        level: 4
    },
    {
        value: '.NET agent',
        id: 'net-agent',
        level: 4
    },
    {
        value: 'Go agent',
        id: 'go-agent',
        level: 4
    },
    {
        value: 'Server agent',
        id: 'server-agent',
        level: 4
    },
    {
        value: 'Kubernetes agent',
        id: 'kubernetes-agent',
        level: 4
    },
    {
        value: 'DBX agent',
        id: 'dbx-agent',
        level: 4
    },
    {
        value: 'XOS agent',
        id: 'xos-agent',
        level: 4
    },
    {
        value: 'Browser agent',
        id: 'browser-agent',
        level: 4
    },
    {
        value: 'ETC',
        id: 'etc',
        level: 4
    }
];
const layoutProps = {
    toc
};
const MDXLayout = "wrapper";
function MDXContent(_param) {
    var { components } = _param, props = _object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `와탭 Docs에서 사용하는 주요 개념 및 용어에 대한 자료집입니다. 다음 자료 외에 기술 문서와 관련한 궁금한 사항이나 추가 내용 요청 등의 피드백은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "mailto:docs@whatap.io"
    }, `docs@whatap.io`), `로 보내주세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_DocCardList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "DocCardList"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "pdf-download"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        src: (__webpack_require__(20528)/* ["default"] */ .A),
        width: "28",
        height: "28"
    }), ` Docs 다운로드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "상품별-종류별-문서-다운로드"
    }, `상품별, 종류별 문서 다운로드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `주요 상품군 및 기타 문서를 PDF 파일로 다음과 같이 제공합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "download-pdf"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("th", {
        parentName: "tr",
        "align": null
    }, `상품 분류`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("th", {
        parentName: "tr",
        "align": null
    }, `다운로드 링크`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `Application`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235153whatap-apm-java-monitoring.pdf"
    }, `Java`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235153whatap-apm-php-monitoring.pdf"
    }, `PHP`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235153whatap-apm-nodejs-monitoring.pdf"
    }, `Node.js`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235153whatap-apm-python-monitoring.pdf"
    }, `Python`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235152whatap-apm-dotnet-monitoring.pdf"
    }, `.NET`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235153whatap-apm-go-monitoring.pdf"
    }, `Go`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `Server`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235156whatap-server-monitoring.pdf"
    }, `Server`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `Container`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235155whatap-kubernetes-monitoring.pdf"
    }, `Kubernetes`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `Database`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `PostgreSQL `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/02/01/052911whatap-db-postgresql-monitoring-v1.pdf"
    }, `V1`), ` / `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235155whatap-db-postgresql-monitoring.pdf"
    }, `V2`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235155whatap-db-oracle-monitoring.pdf"
    }, `Oracle`), ` `, `|`, ` MySQL `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/02/01/052910whatap-db-mysql-monitoring-v1.pdf"
    }, `V1`), ` / `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235154whatap-db-mysql-monitoring.pdf"
    }, `V2`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235154whatap-db-mssql-monitoring.pdf"
    }, `SQL Server`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235155whatap-db-tibero-monitoring.pdf"
    }, `Tibero`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235154whatap-db-cubrid-monitoring.pdf"
    }, `CUBRID`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235154whatap-db-altibase-monitoring.pdf"
    }, `Altibase`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235155whatap-db-redis-monitoring.pdf"
    }, `Redis`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235154whatap-db-mongodb-monitoring.pdf"
    }, `MongoDB`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `AWS`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235152whatap-amazon-cloudwatch.pdf"
    }, `Amazon CloudWatch`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235152whatap-amazon-ecs.pdf"
    }, `Amazon ECS`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235154whatap-aws-log-monitoring.pdf"
    }, `AWS Log`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `Azure`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235154whatap-azure.pdf"
    }, `Azure Monitor`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `NCP`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235155whatap-ncloud.pdf"
    }, `Naver Cloud Monitoring`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `OCI`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235156whatap-oracle-cloud.pdf"
    }, `Oracle Cloud Monitor`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `NPM`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235156whatap-network-performance-monitoring.pdf"
    }, `Network Performance Monitoring`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `URL`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235156whatap-url-monitoring.pdf"
    }, `URL`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `Log`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/02/01/052912whatap-log-monitoring.pdf"
    }, `Log`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `Browser`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235154whatap-browser-monitoring.pdf"
    }, `Browser`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `기타`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235155whatap-extensions.pdf"
    }, `확장 도구(Extensions)`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235155whatap-manage.pdf"
    }, `관리 기능`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235156whatap-open-api.pdf"
    }, `Open API`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/03/04/235156whatap-reference.pdf"
    }, `참조 문서`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, `교육 자료`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/02/01/052908whatap-best-practice-guides-about-apm-dashboard.pdf"
    }, `애플리케이션 대시보드`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/02/01/052909whatap-best-practice-guides-about-apm-hitmap-class.pdf"
    }, `애플리케이션 히트맵 트랜잭션`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/02/01/052909whatap-best-practice-guides-about-server-dashboard.pdf"
    }, `서버 리소스 보드`), ` `, `|`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "td",
        "href": "https://content.whatap.io/24/02/01/052909whatap-best-practice-guides-about-apm-dbc.pdf"
    }, `DB 연결 지연과 커넥션 풀`)))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "download-release-notes"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "릴리스-노트-다운로드"
    }, `릴리스 노트 다운로드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `릴리스 노트를 PDF 문서로 다운로드할 수 있습니다. 각 버전별 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Download`)), ` 링크를 선택하면 다운로드할 수 있습니다. 여러 개의 릴리스 노트를 병합해 다운로드하려면 체크 박스를 선택한 다음 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Download`), ` 버튼을 선택하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "service"
    }, `Service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "service",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .svList */ .a6,
        mdxType: "PdfDownload"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "java-agent"
    }, `Java agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "java",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .javaList */ .rR,
        mdxType: "PdfDownload"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "java-batch-agent"
    }, `Java batch agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "javabatch",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .javaBatchList */ .xl,
        mdxType: "PdfDownload"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "php-agent"
    }, `PHP agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "php",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .phpList */ .vy,
        mdxType: "PdfDownload"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "nodejs-agent"
    }, `Node.js agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "nodejs",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .nodejsList */ .wo,
        mdxType: "PdfDownload"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "python-agent"
    }, `Python agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "python",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .pyList */ ._r,
        mdxType: "PdfDownload"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "net-agent"
    }, `.NET agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "dotnet",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .dotnetList */ .vM,
        mdxType: "PdfDownload"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "go-agent"
    }, `Go agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "go",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .goList */ .b0,
        mdxType: "PdfDownload"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "server-agent"
    }, `Server agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "server",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .serverList */ .IK,
        mdxType: "PdfDownload"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "kubernetes-agent"
    }, `Kubernetes agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "k8s",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .k8sList */ .Tm,
        mdxType: "PdfDownload"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "dbx-agent"
    }, `DBX agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "dbx",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .dbxList */ .N,
        mdxType: "PdfDownload"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "xos-agent"
    }, `XOS agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "xos",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .xosList */ .vZ,
        mdxType: "PdfDownload"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "browser-agent"
    }, `Browser agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "browser",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .browserList */ .rU,
        mdxType: "PdfDownload"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "etc"
    }, `ETC`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_dl_release_notes_PdfDownload__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        typeName: "etc",
        pdfList: _site_src_components_dl_release_notes_pdfList_js__WEBPACK_IMPORTED_MODULE_4__/* .etcList */ .Bq,
        mdxType: "PdfDownload"
    })));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 20528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjM0MjM4IDMuOTgzNjlDNS40OTA1OSAzLjY4NzI1IDUuNzkzNTcgMy41IDYuMTI1IDMuNUgyMS44NzVDMjIuMjA2NCAzLjUgMjIuNTA5NCAzLjY4NzI1IDIyLjY1NzYgMy45ODM2OUwyNC40MDc2IDcuNDgzNjlDMjQuNDY4NCA3LjYwNTE5IDI0LjUgNy43MzkxNiAyNC41IDcuODc1VjIyLjc1QzI0LjUgMjMuMjE0MSAyNC4zMTU2IDIzLjY1OTIgMjMuOTg3NCAyMy45ODc0QzIzLjY1OTIgMjQuMzE1NiAyMy4yMTQxIDI0LjUgMjIuNzUgMjQuNUg1LjI1QzQuNzg1ODcgMjQuNSA0LjM0MDc1IDI0LjMxNTYgNC4wMTI1NiAyMy45ODc0QzMuNjg0MzcgMjMuNjU5MiAzLjUgMjMuMjE0MSAzLjUgMjIuNzVWNy44NzVDMy41IDcuNzM5MTYgMy41MzE2MyA3LjYwNTE5IDMuNTkyMzggNy40ODM2OUw1LjM0MjM4IDMuOTgzNjlaTTYuNjY1NzggNS4yNUw1LjI1IDguMDgxNTZWMjIuNzVIMjIuNzVWOC4wODE1NkwyMS4zMzQyIDUuMjVINi42NjU3OFoiIGZpbGw9IiMwNjFDM0QiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjY2ODg4IDE1Ljc5NEMxMC4wMTA2IDE1LjQ1MjMgMTAuNTY0NiAxNS40NTIzIDEwLjkwNjMgMTUuNzk0TDEzLjk5OTkgMTguODg3NkwxNy4wOTM1IDE1Ljc5NEMxNy40MzUyIDE1LjQ1MjMgMTcuOTg5MiAxNS40NTIzIDE4LjMzMDkgMTUuNzk0QzE4LjY3MjYgMTYuMTM1NyAxOC42NzI2IDE2LjY4OTcgMTguMzMwOSAxNy4wMzE0TDE0LjYxODYgMjAuNzQzN0MxNC40NTQ1IDIwLjkwNzggMTQuMjMyIDIxIDEzLjk5OTkgMjFDMTMuNzY3OCAyMSAxMy41NDUzIDIwLjkwNzggMTMuMzgxMiAyMC43NDM3TDkuNjY4ODggMTcuMDMxNEM5LjMyNzE3IDE2LjY4OTcgOS4zMjcxNyAxNi4xMzU3IDkuNjY4ODggMTUuNzk0WiIgZmlsbD0iIzA2MUMzRCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDEwLjVDMTQuNDgzMiAxMC41IDE0Ljg3NSAxMC44OTE4IDE0Ljg3NSAxMS4zNzVWMjAuMTI1QzE0Ljg3NSAyMC42MDgyIDE0LjQ4MzIgMjEgMTQgMjFDMTMuNTE2OCAyMSAxMy4xMjUgMjAuNjA4MiAxMy4xMjUgMjAuMTI1VjExLjM3NUMxMy4xMjUgMTAuODkxOCAxMy41MTY4IDEwLjUgMTQgMTAuNVoiIGZpbGw9IiMwNjFDM0QiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjUgNy44NzVDMy41IDcuMzkxNzUgMy44OTE3NSA3IDQuMzc1IDdIMjMuNjI1QzI0LjEwODIgNyAyNC41IDcuMzkxNzUgMjQuNSA3Ljg3NUMyNC41IDguMzU4MjUgMjQuMTA4MiA4Ljc1IDIzLjYyNSA4Ljc1SDQuMzc1QzMuODkxNzUgOC43NSAzLjUgOC4zNTgyNSAzLjUgNy44NzVaIiBmaWxsPSIjMDYxQzNEIi8+Cjwvc3ZnPgo=");

/***/ })

}]);