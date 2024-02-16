"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[34495],{

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

/***/ 98918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dlreleasenotes)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./src/components/dl-release-notes/PdfDownload.js + 1 modules
var PdfDownload = __webpack_require__(51738);
// EXTERNAL MODULE: ./src/components/dl-release-notes/pdfList.js
var pdfList = __webpack_require__(72995);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 67 modules
var Layout = __webpack_require__(98636);
;// CONCATENATED MODULE: ./src/pages/dl-release-notes/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"dlmain":"dlmain_qja4","contents":"contents_TFPp","dltocs":"dltocs_PM2E","dltocItem":"dltocItem_V7vU","tocList":"tocList_Iwqw","dlHeading1":"dlHeading1_bNyW","lastdiv":"lastdiv_xnS5"});
;// CONCATENATED MODULE: ./src/pages/dl-release-notes/index.js






function Dlreleasenotes() {
    const onClickMenu = (e)=>{
        e.preventDefault();
        console.log(e.target.hash);
        const headerOffset = 97;
        const targetHash = e.target.hash;
        const targetSection = document.querySelector(targetHash);
        const targetPostion = targetSection.getBoundingClientRect().top;
        const offsetPosition = targetPostion + window.pageYOffset - headerOffset;
        console.log(offsetPosition);
        if (targetSection) {
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: styles_module.dlmain,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: styles_module.contents,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                className: styles_module.dlHeading1,
                                children: "Download Release Notes"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PdfDownload/* default */.A, {
                                h2title: "Service",
                                typeName: "service",
                                pdfList: pdfList/* svList */.a6
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PdfDownload/* default */.A, {
                                h2title: "Java Agent",
                                typeName: "java",
                                pdfList: pdfList/* javaList */.rR
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PdfDownload/* default */.A, {
                                h2title: "PHP Agent",
                                typeName: "php",
                                pdfList: pdfList/* phpList */.vy
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PdfDownload/* default */.A, {
                                h2title: "Node.js Agent",
                                typeName: "nodejs",
                                pdfList: pdfList/* nodejsList */.wo
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PdfDownload/* default */.A, {
                                h2title: "Python Agent",
                                typeName: "python",
                                pdfList: pdfList/* pyList */._r
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PdfDownload/* default */.A, {
                                h2title: ".NET Agent",
                                typeName: "dotnet",
                                pdfList: pdfList/* dotnetList */.vM
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PdfDownload/* default */.A, {
                                h2title: "Go Agent",
                                typeName: "go",
                                pdfList: pdfList/* goList */.b0
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PdfDownload/* default */.A, {
                                h2title: "Server Agent",
                                typeName: "server",
                                pdfList: pdfList/* serverList */.IK
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PdfDownload/* default */.A, {
                                h2title: "Kubernetes Agent",
                                typeName: "k8s",
                                pdfList: pdfList/* k8sList */.Tm
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PdfDownload/* default */.A, {
                                h2title: "DBX Agent",
                                typeName: "dbx",
                                pdfList: pdfList/* dbxList */.N
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PdfDownload/* default */.A, {
                                h2title: "XOS Agent",
                                typeName: "xos",
                                pdfList: pdfList/* xosList */.vZ
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PdfDownload/* default */.A, {
                                h2title: "ETC",
                                typeName: "etc",
                                pdfList: pdfList/* etcList */.Bq
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: styles_module.dltocs,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: styles_module.dltocItem,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                className: styles_module.tocList,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "#service",
                                            onClick: onClickMenu,
                                            class: "table-of-contents__link",
                                            children: "Service"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "#java",
                                            onClick: onClickMenu,
                                            class: "table-of-contents__link",
                                            children: "Java Agent"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "#php",
                                            onClick: onClickMenu,
                                            class: "table-of-contents__link",
                                            children: "PHP Agent"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "#nodejs",
                                            onClick: onClickMenu,
                                            class: "table-of-contents__link",
                                            children: "Node.js Agent"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "#python",
                                            onClick: onClickMenu,
                                            class: "table-of-contents__link",
                                            children: "Python Agent"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "#dotnet",
                                            onClick: onClickMenu,
                                            class: "table-of-contents__link",
                                            children: ".NET Agent"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "#go",
                                            onClick: onClickMenu,
                                            class: "table-of-contents__link",
                                            children: "Go Agent"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "#server",
                                            onClick: onClickMenu,
                                            class: "table-of-contents__link",
                                            children: "Server Agent"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "#k8s",
                                            onClick: onClickMenu,
                                            class: "table-of-contents__link",
                                            children: "Kubernetes Agent"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "#dbx",
                                            onClick: onClickMenu,
                                            class: "table-of-contents__link",
                                            children: "DBX Agent"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "#xos",
                                            onClick: onClickMenu,
                                            class: "table-of-contents__link",
                                            children: "XOS Agent"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "#etc",
                                            onClick: onClickMenu,
                                            class: "table-of-contents__link",
                                            children: "ETC"
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                class: styles_module.lastdiv
            })
        ]
    });
}


/***/ })

}]);