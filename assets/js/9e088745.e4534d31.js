"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[18259],{

/***/ 3550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ PDFDownloads)
});

// UNUSED EXPORTS: getStaticProps

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/file-saver/dist/FileSaver.min.js
var FileSaver_min = __webpack_require__(93162);
// EXTERNAL MODULE: ./node_modules/pdf-lib/es/index.js + 155 modules
var es = __webpack_require__(69495);
;// CONCATENATED MODULE: ./src/components/dl-release-notes/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"_dlLabel":"_dlLabel_lOAM","_dlHeading2":"_dlHeading2_OVIX","dlList":"dlList_XSHF","dlTable":"dlTable_Ju72","dlIcon":"dlIcon_cjKA","dlListItem":"dlListItem_xNPd","inputBox":"inputBox_Ju1D","dlBtn":"dlBtn_gzxi","dlButton":"dlButton_RAT5"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(31984);
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
        if (selectedFiles.length === 1) {
            // 선택한 파일이 1개일 경우 개별 파일 다운로드
            console.log(selectedFiles[0].url);
            (0,FileSaver_min.saveAs)(selectedFiles[0].url, selectedFiles[0].name + '.pdf');
        } else if (selectedFiles.length > 1) {
            // 파일명을 역순으로 정렬
            const sortedFiles = selectedFiles.slice().sort((a, b)=>b.name.localeCompare(a.name));
            // 선택한 파일이 2개 이상일 경우 zip 파일로 압축하여 다운로드
            const mergedPdf = await es.PDFDocument.create();
            const pdfPromises = sortedFiles.map((file)=>fetch(file.url).then((response)=>response.arrayBuffer()));
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
    };
    return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement("div", {
        className: styles_module.dlList
    }, /*#__PURE__*/ react.createElement("table", {
        className: styles_module.dlTable
    }, /*#__PURE__*/ react.createElement("thead", null, /*#__PURE__*/ react.createElement("tr", null, /*#__PURE__*/ react.createElement("th", null, /*#__PURE__*/ react.createElement("input", {
        type: "checkbox",
        id: `select-all-${typeName}`,
        name: `select-all-${typeName}`,
        className: styles_module.inputBox,
        onChange: handleSelectAll,
        checked: selectedFiles.length === pdfList1.length
    }), /*#__PURE__*/ react.createElement("label", {
        className: styles_module._dlLabel,
        htmlFor: "select-all"
    }, "Select All")), /*#__PURE__*/ react.createElement("th", null, /*#__PURE__*/ react.createElement("p", null, "Release Notes")), /*#__PURE__*/ react.createElement("th", null, /*#__PURE__*/ react.createElement("p", null, "Release Date")), /*#__PURE__*/ react.createElement("th", null, /*#__PURE__*/ react.createElement("p", null, "Download PDF")))), /*#__PURE__*/ react.createElement("tbody", null, pdfList1.map((pdf, index)=>/*#__PURE__*/ react.createElement("tr", null, /*#__PURE__*/ react.createElement("td", {
            key: index,
            className: styles_module.dlListItem
        }, /*#__PURE__*/ react.createElement("p", null, /*#__PURE__*/ react.createElement("input", {
            type: "checkbox",
            id: `${typeName}-${index}`,
            className: styles_module.inputBox,
            name: pdf.name,
            onChange: (event)=>handleCheckboxChange(event, pdf),
            checked: selectedFiles.includes(pdf)
        }), /*#__PURE__*/ react.createElement("label", {
            className: styles_module._dlLabel,
            htmlFor: `${typeName}-${index}`
        }, /*#__PURE__*/ react.createElement(Link/* default */.Z, {
            to: pdf.docs,
            target: "_blank"
        }, pdf.name)))), /*#__PURE__*/ react.createElement("td", null, /*#__PURE__*/ react.createElement("p", null, /*#__PURE__*/ react.createElement(Link/* default */.Z, {
            to: pdf.docs,
            target: "_blank"
        }, pdf.name))), /*#__PURE__*/ react.createElement("td", null, /*#__PURE__*/ react.createElement("p", null, pdf.date)), /*#__PURE__*/ react.createElement("td", null, /*#__PURE__*/ react.createElement("p", null, /*#__PURE__*/ react.createElement("img", {
            src: "/img/ico-download.svg",
            className: styles_module.dlIcon
        }), " ", /*#__PURE__*/ react.createElement("a", {
            href: pdf.url
        }, "Download")))))))), /*#__PURE__*/ react.createElement("div", {
        className: styles_module.dlBtn
    }, /*#__PURE__*/ react.createElement("button", {
        className: styles_module.dlButton,
        onClick: handleDownload
    }, "Download")));
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

/***/ 1171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BM: () => (/* binding */ etcList),
/* harmony export */   E4: () => (/* binding */ svList),
/* harmony export */   Gh: () => (/* binding */ nodejsList),
/* harmony export */   J4: () => (/* binding */ xosList),
/* harmony export */   Oy: () => (/* binding */ browserList),
/* harmony export */   Su: () => (/* binding */ serverList),
/* harmony export */   TY: () => (/* binding */ dotnetList),
/* harmony export */   Ty: () => (/* binding */ k8sList),
/* harmony export */   _m: () => (/* binding */ phpList),
/* harmony export */   c0: () => (/* binding */ dbxList),
/* harmony export */   dK: () => (/* binding */ javaBatchList),
/* harmony export */   iG: () => (/* binding */ goList),
/* harmony export */   o4: () => (/* binding */ javaList),
/* harmony export */   s: () => (/* binding */ pyList)
/* harmony export */ });
const svList = [
    {
        "name": 'Service-1.112.x',
        "date": '2023-11-17',
        "url": '/pdf/release-notes/service-1.112.x.pdf',
        "docs": '/release-notes/service/service-1_112_x'
    },
    {
        "name": 'Service-1.110.x',
        "date": '2023-10-25',
        "url": '/pdf/release-notes/service-1.110.x.pdf',
        "docs": '/release-notes/service/service-1_110_x'
    },
    {
        "name": 'Service-1.108.x',
        "date": '2023-09-21',
        "url": '/pdf/release-notes/service-1.108.x.pdf',
        "docs": '/release-notes/service/service-1_108_x'
    },
    {
        "name": 'Service-1.106.x',
        "date": '2023-07-26',
        "url": '/pdf/release-notes/service-1.106.x.pdf',
        "docs": '/release-notes/service/service-1_106_x'
    },
    {
        "name": 'Service-1.104.x',
        "date": '2023-06-28',
        "url": '/pdf/release-notes/service-1.104.x.pdf',
        "docs": '/release-notes/service/service-1_104_x'
    },
    {
        "name": 'Service-1.102.x',
        "date": '2023-05-24',
        "url": '/pdf/release-notes/service-1.102.x.pdf',
        "docs": '/release-notes/service/service-1_102_x'
    },
    {
        "name": 'Service-1.100.x',
        "date": '2023-04-26',
        "url": '/pdf/release-notes/service-1.100.x.pdf',
        "docs": '/release-notes/service/service-1_100_x'
    },
    {
        "name": 'Service-1.98.x',
        "date": '2023-03-29',
        "url": '/pdf/release-notes/service-1.98.x.pdf',
        "docs": '/release-notes/service/service-1_98_x'
    },
    {
        "name": 'Service-1.96.0',
        "date": '2023-02-22',
        "url": '/pdf/release-notes/service-1.96.0.pdf',
        "docs": '/release-notes/service/service-1_96_0'
    },
    {
        "name": 'Service-1.94.0',
        "date": '2023-01-11',
        "url": '/pdf/release-notes/service-1.94.0.pdf',
        "docs": '/release-notes/service/service-1_94_0'
    },
    {
        "name": 'Service-1.92.0',
        "date": '2022-11-24',
        "url": '/pdf/release-notes/service-1.92.0.pdf',
        "docs": '/release-notes/service/service-1_92_0'
    },
    {
        "name": 'Service-1.90.0',
        "date": '2022-10-18',
        "url": '/pdf/release-notes/service-1.90.0.pdf',
        "docs": '/release-notes/service/service-1_90_0'
    },
    {
        "name": 'Service-1.88.0',
        "date": '2022-09-28',
        "url": '/pdf/release-notes/service-1.88.0.pdf',
        "docs": '/release-notes/service/service-1_88_0'
    },
    {
        "name": 'Service-1.86.0',
        "date": '2022-09-14',
        "url": '/pdf/release-notes/service-1.86.0.pdf',
        "docs": '/release-notes/service/service-1_86_0'
    },
    {
        "name": 'Service-1.84.0',
        "date": '2022-08-24',
        "url": '/pdf/release-notes/service-1.84.0.pdf',
        "docs": '/release-notes/service/service-1_84_0'
    },
    {
        "name": 'Service-1.82.0',
        "date": '2022-07-27',
        "url": '/pdf/release-notes/service-1.82.0.pdf',
        "docs": '/release-notes/service/service-1_82_0'
    },
    {
        "name": 'Service-1.80.0',
        "date": '2022-07-13',
        "url": '/pdf/release-notes/service-1.80.0.pdf',
        "docs": '/release-notes/service/service-1_80_0'
    },
    {
        "name": 'Service-1.78.0',
        "date": '2022-06-22',
        "url": '/pdf/release-notes/service-1.78.0.pdf',
        "docs": '/release-notes/service/service-1_78_0'
    },
    {
        "name": 'Service-1.76.0',
        "date": '2022-06-08',
        "url": '/pdf/release-notes/service-1.76.0.pdf',
        "docs": '/release-notes/service/service-1_76_0'
    },
    {
        "name": 'Service-1.74.0',
        "date": '2022-05-25',
        "url": '/pdf/release-notes/service-1.74.0.pdf',
        "docs": '/release-notes/service/service-1_74_0'
    },
    {
        "name": 'Service-1.72.0',
        "date": '2022-05-11',
        "url": '/pdf/release-notes/service-1.72.0.pdf',
        "docs": '/release-notes/service/service-1_72_0'
    },
    {
        "name": 'Service-1.70.0',
        "date": '2022-04-20',
        "url": '/pdf/release-notes/service-1.70.0.pdf',
        "docs": '/release-notes/service/service-1_70_0'
    },
    {
        "name": 'Service-1.68.0',
        "date": '2022-04-06',
        "url": '/pdf/release-notes/service-1.68.0.pdf',
        "docs": '/release-notes/service/service-1_68_0'
    },
    {
        "name": 'Service-1.66.0',
        "date": '2022-03-23',
        "url": '/pdf/release-notes/service-1.66.0.pdf',
        "docs": '/release-notes/service/service-1_66_0'
    },
    {
        "name": 'Service-1.64.0',
        "date": '2022-03-09',
        "url": '/pdf/release-notes/service-1.64.0.pdf',
        "docs": '/release-notes/service/service-1_64_0'
    },
    {
        "name": 'Service-1.62.0',
        "date": '2022-02-20',
        "url": '/pdf/release-notes/service-1.62.0.pdf',
        "docs": '/release-notes/service/service-1_62_0'
    },
    {
        "name": 'Service-1.60.0',
        "date": '2022-02-09',
        "url": '/pdf/release-notes/service-1.60.0.pdf',
        "docs": '/release-notes/service/service-1_60_0'
    },
    {
        "name": 'Service-1.58.0',
        "date": '2022-01-19',
        "url": '/pdf/release-notes/service-1.58.0.pdf',
        "docs": '/release-notes/service/service-1_58_0'
    },
    {
        "name": 'Service-1.56.0',
        "date": '2022-01-05',
        "url": '/pdf/release-notes/service-1.56.0.pdf',
        "docs": '/release-notes/service/service-1_56_0'
    },
    {
        "name": 'Service-1.54.0',
        "date": '2021-12-28',
        "url": '/pdf/release-notes/service-1.54.0.pdf',
        "docs": '/release-notes/service/service-1_54_0'
    }
];
const javaList = [
    {
        "name": 'Java-agent-v2.2.23',
        "date": '2023-11-22',
        "url": '/pdf/release-notes/java-agent-v2.2.23.pdf',
        "docs": '/release-notes/java/java-2_2_23'
    },
    {
        "name": 'Java-agent-v2.2.22',
        "date": '2023-11-16',
        "url": '/pdf/release-notes/java-agent-v2.2.22.pdf',
        "docs": '/release-notes/java/java-2_2_22'
    },
    {
        "name": 'Java-agent-v2.2.21',
        "date": '2023-11-02',
        "url": '/pdf/release-notes/java-agent-v2.2.21.pdf',
        "docs": '/release-notes/java/java-2_2_21'
    },
    {
        "name": 'Java-agent-v2.2.20',
        "date": '2023-10-19',
        "url": '/pdf/release-notes/java-agent-v2.2.20.pdf',
        "docs": '/release-notes/java/java-2_2_20'
    },
    {
        "name": 'Java-agent-v2.2.19',
        "date": '2023-10-10',
        "url": '/pdf/release-notes/java-agent-v2.2.19.pdf',
        "docs": '/release-notes/java/java-2_2_19'
    },
    {
        "name": 'Java-agent-v2.2.18',
        "date": '2023-09-26',
        "url": '/pdf/release-notes/java-agent-v2.2.18.pdf',
        "docs": '/release-notes/java/java-2_2_18'
    },
    {
        "name": 'Java-agent-v2.2.17',
        "date": '2023-09-18',
        "url": '/pdf/release-notes/java-agent-v2.2.17.pdf',
        "docs": '/release-notes/java/java-2_2_17'
    },
    {
        "name": 'Java-agent-v2.2.16',
        "date": '2023-09-08',
        "url": '/pdf/release-notes/java-agent-v2.2.16.pdf',
        "docs": '/release-notes/java/java-2_2_16'
    },
    {
        "name": 'Java-agent-v2.2.15',
        "date": '2023-08-31',
        "url": '/pdf/release-notes/java-agent-v2.2.15.pdf',
        "docs": '/release-notes/java/java-2_2_15'
    },
    {
        "name": 'Java-agent-v2.2.14',
        "date": '2023-08-17',
        "url": '/pdf/release-notes/java-agent-v2.2.14.pdf',
        "docs": '/release-notes/java/java-2_2_14'
    },
    {
        "name": 'Java-agent-v2.2.13',
        "date": '2023-08-08',
        "url": '/pdf/release-notes/java-agent-v2.2.13.pdf',
        "docs": '/release-notes/java/java-2_2_13'
    },
    {
        "name": 'Java-agent-v2.2.12',
        "date": '2023-07-21',
        "url": '/pdf/release-notes/java-agent-v2.2.12.pdf',
        "docs": '/release-notes/java/java-2_2_12'
    },
    {
        "name": 'Java-agent-v2.2.11',
        "date": '2023-07-10',
        "url": '/pdf/release-notes/java-agent-v2.2.11.pdf',
        "docs": '/release-notes/java/java-2_2_11'
    },
    {
        "name": 'Java-agent-v2.2.10',
        "date": '2023-06-29',
        "url": '/pdf/release-notes/java-agent-v2.2.10.pdf',
        "docs": '/release-notes/java/java-2_2_10'
    },
    {
        "name": 'Java-agent-v2.2.09',
        "date": '2023-06-16',
        "url": '/pdf/release-notes/java-agent-v2.2.9.pdf',
        "docs": '/release-notes/java/java-2_2_9'
    },
    {
        "name": 'Java-agent-v2.2.08',
        "date": '2023-06-09',
        "url": '/pdf/release-notes/java-agent-v2.2.8.pdf',
        "docs": '/release-notes/java/java-2_2_8'
    },
    {
        "name": 'Java-agent-v2.2.07',
        "date": '2023-06-05',
        "url": '/pdf/release-notes/java-agent-v2.2.7.pdf',
        "docs": '/release-notes/java/java-2_2_7'
    },
    {
        "name": 'Java-agent-v2.2.06',
        "date": '2023-06-01',
        "url": '/pdf/release-notes/java-agent-v2.2.6.pdf',
        "docs": '/release-notes/java/java-2_2_6'
    },
    {
        "name": 'Java-agent-v2.2.05',
        "date": '2023-05-30',
        "url": '/pdf/release-notes/java-agent-v2.2.5.pdf',
        "docs": '/release-notes/java/java-2_2_5'
    },
    {
        "name": 'Java-agent-v2.2.04',
        "date": '2023-05-25',
        "url": '/pdf/release-notes/java-agent-v2.2.4.pdf',
        "docs": '/release-notes/java/java-2_2_4'
    },
    {
        "name": 'Java-agent-v2.2.03',
        "date": '2023-02-14',
        "url": '/pdf/release-notes/java-agent-v2.2.3.pdf',
        "docs": '/release-notes/java/java-2_2_3'
    },
    {
        "name": 'Java-agent-v2.2.02',
        "date": '2022-12-21',
        "url": '/pdf/release-notes/java-agent-v2.2.2.pdf',
        "docs": '/release-notes/java/java-2_2_2'
    },
    {
        "name": 'Java-agent-v2.2.0',
        "date": '2022-11-01',
        "url": '/pdf/release-notes/java-agent-v2.2.0.pdf',
        "docs": '/release-notes/java/java-2_2_0'
    },
    {
        "name": 'Java-agent-v2.1.3',
        "date": '2022-09-01',
        "url": '/pdf/release-notes/java-agent-v2.1.3.pdf',
        "docs": '/release-notes/java/java-2_1_3'
    },
    {
        "name": 'Java-agent-v2.1.2',
        "date": '2022-08-01',
        "url": '/pdf/release-notes/java-agent-v2.1.2.pdf',
        "docs": '/release-notes/java/java-2_1_2'
    },
    {
        "name": 'Java-agent-v2.1.1',
        "date": '2022-07-12',
        "url": '/pdf/release-notes/java-agent-v2.1.1.pdf',
        "docs": '/release-notes/java/java-2_1_1'
    },
    {
        "name": 'Java-agent-v2.1.0',
        "date": '2022-12-15',
        "url": '/pdf/release-notes/java-agent-v2.1.0.pdf',
        "docs": '/release-notes/java/java-2_1_0'
    }
];
const javaBatchList = [
    {
        "name": "java-batch-agent-v2.2.20",
        "date": "2023-10-19",
        "url": "/pdf/release-notes/java-batch-agent-v2.2.20.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_20"
    },
    {
        "name": "java-batch-agent-v2.2.19",
        "date": "2023-10-10",
        "url": "/pdf/release-notes/java-batch-agent-v2.2.19.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_19"
    }
];
const phpList = [
    {
        "name": 'php-agent-v2.6.3',
        "date": '2023-11-22',
        "url": '/pdf/release-notes/php-agent-v2.6.3.pdf',
        "docs": '/release-notes/php/php-2_6_3'
    },
    {
        "name": 'php-agent-v2.6.2',
        "date": '2023-09-13',
        "url": '/pdf/release-notes/php-agent-v2.6.2.pdf',
        "docs": '/release-notes/php/php-2_6_2'
    },
    {
        "name": 'php-agent-v2.6.1',
        "date": '2023-02-15',
        "url": '/pdf/release-notes/php-agent-v2.6.1.pdf',
        "docs": '/release-notes/php/php-2_6_1'
    },
    {
        "name": 'php-agent-v2.6.0',
        "date": '2023-01-04',
        "url": '/pdf/release-notes/php-agent-v2.6.0.pdf',
        "docs": '/release-notes/php/php-2_6_0'
    },
    {
        "name": 'php-agent-v2.5.4',
        "date": '2022-11-16',
        "url": '/pdf/release-notes/php-agent-v2.5.4.pdf',
        "docs": '/release-notes/php/php-2_5_4'
    },
    {
        "name": 'php-agent-v2.5.3',
        "date": '2022-08-31',
        "url": '/pdf/release-notes/php-agent-v2.5.3.pdf',
        "docs": '/release-notes/php/php-2_5_3'
    },
    {
        "name": 'php-agent-v2.5.2',
        "date": '2022-07-06',
        "url": '/pdf/release-notes/php-agent-v2.5.2.pdf',
        "docs": '/release-notes/php/php-2_5_2'
    },
    {
        "name": 'php-agent-v2.5.1',
        "date": '2022-05-18',
        "url": '/pdf/release-notes/php-agent-v2.5.1.pdf',
        "docs": '/release-notes/php/php-2_5_1'
    },
    {
        "name": 'php-agent-v2.5.0',
        "date": '2022-05-18',
        "url": '/pdf/release-notes/php-agent-v2.5.0.pdf',
        "docs": '/release-notes/php/php-2_5_0'
    },
    {
        "name": 'php-agent-v2.4.1',
        "date": '2022-02-16',
        "url": '/pdf/release-notes/php-agent-v2.4.1.pdf',
        "docs": '/release-notes/php/php-2_4_1'
    },
    {
        "name": 'php-agent-v2.4.0',
        "date": '2021-12-16',
        "url": '/pdf/release-notes/php-agent-v2.4.0.pdf',
        "docs": '/release-notes/php/php-2_4_0'
    },
    {
        "name": 'php-agent-v2.3.3',
        "date": '2021-11-10',
        "url": '/pdf/release-notes/php-agent-v2.3.3.pdf',
        "docs": '/release-notes/php/php-2_3_3'
    }
];
const nodejsList = [
    {
        "name": 'Node.js-agent-v0.4.81',
        "date": '2023-11-08',
        "url": '/pdf/release-notes/nodejs-agent-v0.4.81.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_81'
    },
    {
        "name": 'Node.js-agent-v0.4.80',
        "date": '2023-10-31',
        "url": '/pdf/release-notes/nodejs-agent-v0.4.80.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_80'
    },
    {
        "name": 'Node.js-agent-v0.4.77',
        "date": '2023-06-23',
        "url": '/pdf/release-notes/nodejs-agent-v0.4.77.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_77'
    }
];
const pyList = [
    {
        "name": 'Python-agent-v1.4.8',
        "date": '2023-10-25',
        "url": '/pdf/release-notes/python-agent-v1.4.8.pdf',
        "docs": '/release-notes/python/python-1_4_8'
    },
    {
        "name": 'Python-agent-v1.4.6',
        "date": '2023-10-12',
        "url": '/pdf/release-notes/python-agent-v1.4.6.pdf',
        "docs": '/release-notes/python/python-1_4_6'
    },
    {
        "name": 'Python-agent-v1.4.4',
        "date": '2023-08-17',
        "url": '/pdf/release-notes/python-agent-v1.4.4.pdf',
        "docs": '/release-notes/python/python-1_4_4'
    },
    {
        "name": 'Python-agent-v1.4.3',
        "date": '2023-08-02',
        "url": '/pdf/release-notes/python-agent-v1.4.3.pdf',
        "docs": '/release-notes/python/python-1_4_3'
    },
    {
        "name": 'Python-agent-v1.4.2',
        "date": '2023-07-12',
        "url": '/pdf/release-notes/python-agent-v1.4.2.pdf',
        "docs": '/release-notes/python/python-1_4_2'
    },
    {
        "name": 'Python-agent-v1.4.1',
        "date": '2023-07-10',
        "url": '/pdf/release-notes/python-agent-v1.4.1.pdf',
        "docs": '/release-notes/python/python-1_4_1'
    },
    {
        "name": 'Python-agent-v1.4.0',
        "date": '2023-07-04',
        "url": '/pdf/release-notes/python-agent-v1.4.0.pdf',
        "docs": '/release-notes/python/python-1_4_0'
    },
    {
        "name": 'Python-agent-v1.3.9',
        "date": '2023-06-28',
        "url": '/pdf/release-notes/python-agent-v1.3.9.pdf',
        "docs": '/release-notes/python/python-1_3_9'
    },
    {
        "name": 'Python-agent-v1.3.6',
        "date": '2023-05-18',
        "url": '/pdf/release-notes/python-agent-v1.3.6.pdf',
        "docs": '/release-notes/python/python-1_3_6'
    },
    {
        "name": 'Python-agent-v1.3.4',
        "date": '2023-04-26',
        "url": '/pdf/release-notes/python-agent-v1.3.4.pdf',
        "docs": '/release-notes/python/python-1_3_4'
    },
    {
        "name": 'Python-agent-v1.3.3',
        "date": '2023-04-10',
        "url": '/pdf/release-notes/python-agent-v1.3.4.pdf',
        "docs": '/release-notes/python/python-1_3_4'
    },
    {
        "name": 'Python-agent-v1.3.2',
        "date": '2023-03-29',
        "url": '/pdf/release-notes/python-agent-v1.3.2.pdf',
        "docs": '/release-notes/python/python-1_3_2'
    },
    {
        "name": 'Python-agent-v1.3.1',
        "date": '2023-03-15',
        "url": '/pdf/release-notes/python-agent-v1.3.1.pdf',
        "docs": '/release-notes/python/python-1_3_1'
    },
    {
        "name": 'Python-agent-v1.3.0',
        "date": '2023-01-19',
        "url": '/pdf/release-notes/python-agent-v1.3.0.pdf',
        "docs": '/release-notes/python/python-1_3_0'
    },
    {
        "name": 'Python-agent-v1.2.4',
        "date": '2022-09-26',
        "url": '/pdf/release-notes/python-agent-v1.2.4.pdf',
        "docs": '/release-notes/python/python-1_2_4'
    },
    {
        "name": 'Python-agent-v1.2.1',
        "date": '2022-07-18',
        "url": '/pdf/release-notes/python-agent-v1.2.1.pdf',
        "docs": '/release-notes/python/python-1_2_1'
    },
    {
        "name": 'Python-agent-v1.2.0',
        "date": '2022-02-07',
        "url": '/pdf/release-notes/python-agent-v1.2.0.pdf',
        "docs": '/release-notes/python/python-1_2_0'
    },
    {
        "name": 'Python-agent-v1.1.6',
        "date": '2022-01-25',
        "url": '/pdf/release-notes/python-agent-v1.1.6.pdf',
        "docs": '/release-notes/python/python-1_1_6'
    }
];
const dotnetList = [
    {
        "name": '.NET-agent-v2.2.0',
        "date": '2023-11-10',
        "url": '/pdf/release-notes/dotnet-agent-v2.2.0.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_2_0'
    },
    {
        "name": '.NET-agent-v2.1.9',
        "date": '2023-11-03',
        "url": '/pdf/release-notes/dotnet-agent-v2.1.9.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_9'
    },
    {
        "name": '.NET-agent-v2.1.8',
        "date": '2023-10-24',
        "url": '/pdf/release-notes/dotnet-agent-v2.1.8.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_8'
    },
    {
        "name": '.NET-agent-v2.1.8',
        "date": '2023-10-24',
        "url": '/pdf/release-notes/dotnet-agent-v2.1.8.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_8'
    },
    {
        "name": '.NET-agent-v2.1.7',
        "date": '2023-10-16',
        "url": '/pdf/release-notes/dotnet-agent-v2.1.7.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_7'
    },
    {
        "name": '.NET-agent-v2.1.6',
        "date": '2023-10-05',
        "url": '/pdf/release-notes/dotnet-agent-v2.1.6.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_6'
    },
    {
        "name": '.NET-agent-v2.1.5',
        "date": '2023-09-13',
        "url": '/pdf/release-notes/dotnet-agent-v2.1.5.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_5'
    },
    {
        "name": '.NET-agent-v2.1.4',
        "date": '2023-08-29',
        "url": '/pdf/release-notes/dotnet-agent-v2.1.4.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_4'
    },
    {
        "name": '.NET-agent-v2.1.3',
        "date": '2023-08-16',
        "url": '/pdf/release-notes/dotnet-agent-v2.1.3.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_3'
    },
    {
        "name": '.NET-agent-v2.1.2',
        "date": '2023-07-20',
        "url": '/pdf/release-notes/dotnet-agent-v2.1.2.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_2'
    },
    {
        "name": '.NET-agent-v2.1.1',
        "date": '2023-07-17',
        "url": '/pdf/release-notes/dotnet-agent-v2.1.1.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_1'
    },
    {
        "name": '.NET-agent-v2.1.0',
        "date": '2023-07-06',
        "url": '/pdf/release-notes/dotnet-agent-v2.1.0.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_0'
    },
    {
        "name": '.NET-agent-v2.0.9',
        "date": '2023-06-09',
        "url": '/pdf/release-notes/dotnet-agent-v2.0.9.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_9'
    },
    {
        "name": '.NET-agent-v2.0.8',
        "date": '2023-05-31',
        "url": '/pdf/release-notes/dotnet-agent-v2.0.8.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_8'
    },
    {
        "name": '.NET-agent-v2.0.7',
        "date": '2023-05-30',
        "url": '/pdf/release-notes/dotnet-agent-v2.0.7.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_7'
    },
    {
        "name": '.NET-agent-v2.0.6',
        "date": '2023-05-02',
        "url": '/pdf/release-notes/dotnet-agent-v2.0.6.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_6'
    },
    {
        "name": '.NET-agent-v2.0.5',
        "date": '2022-01-10',
        "url": '/pdf/release-notes/dotnet-agent-v2.0.5.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_5'
    },
    {
        "name": '.NET-agent-v2.0.4',
        "date": '2021-05-10',
        "url": '/pdf/release-notes/dotnet-agent-v2.0.4.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_4'
    },
    {
        "name": '.NET-agent-v2.0.3',
        "date": '2021-04-23',
        "url": '/pdf/release-notes/dotnet-agent-v2.0.3.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_3'
    },
    {
        "name": '.NET-agent-v2.0.2',
        "date": '2021-04-02',
        "url": '/pdf/release-notes/dotnet-agent-v2.0.2.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_2'
    },
    {
        "name": '.NET-agent-v2.0.1',
        "date": '2021-02-09',
        "url": '/pdf/release-notes/dotnet-agent-v2.0.1.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_1'
    },
    {
        "name": '.NET-agent-v2.0.0',
        "date": '2020-12-16',
        "url": '/pdf/release-notes/dotnet-agent-v2.0.0.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_0'
    }
];
const goList = [
    {
        "name": 'Go-agent-v0.2.4',
        "date": '2023-11-22',
        "url": '/pdf/release-notes/Go-agent-v0.2.4.pdf',
        "docs": '/release-notes/golang/golang-0_2_4'
    },
    {
        "name": 'Go-agent-v0.2.3',
        "date": '2023-09-13',
        "url": '/pdf/release-notes/Go-agent-v0.2.3.pdf',
        "docs": '/release-notes/golang/golang-0_2_3'
    },
    {
        "name": 'Go-agent-v0.2.2',
        "date": '2023-06-21',
        "url": '/pdf/release-notes/Go-agent-v0.2.2.pdf',
        "docs": '/release-notes/golang/golang-0_2_2'
    },
    {
        "name": 'Go-agent-v0.1.14',
        "date": '2022-12-14',
        "url": '/pdf/release-notes/Go-agent-v0.1.14.pdf',
        "docs": '/release-notes/golang/golang-0_1_14'
    },
    {
        "name": 'Go-agent-v0.1.13',
        "date": '2022-08-31',
        "url": '/pdf/release-notes/Go-agent-v0.1.13.pdf',
        "docs": '/release-notes/golang/golang-0_1_13'
    },
    {
        "name": 'Go-agent-v0.1.12',
        "date": '2022-08-02',
        "url": '/pdf/release-notes/Go-agent-v0.1.12.pdf',
        "docs": '/release-notes/golang/golang-0_1_12'
    },
    {
        "name": 'Go-agent-v0.1.11',
        "date": '2022-05-26',
        "url": '/pdf/release-notes/Go-agent-v0.1.11.pdf',
        "docs": '/release-notes/golang/golang-0_1_11'
    },
    {
        "name": 'Go-agent-v0.1.10',
        "date": '2022-05-12',
        "url": '/pdf/release-notes/Go-agent-v0.1.10.pdf',
        "docs": '/release-notes/golang/golang-0_1_10'
    },
    {
        "name": 'Go-agent-v0.1.09',
        "date": '2022-04-27',
        "url": '/pdf/release-notes/Go-agent-v0.1.9.pdf',
        "docs": '/release-notes/golang/golang-0_1_9'
    },
    {
        "name": 'Go-agent-v0.1.08',
        "date": '2022-01-19',
        "url": '/pdf/release-notes/Go-agent-v0.1.8.pdf',
        "docs": '/release-notes/golang/golang-0_1_8'
    },
    {
        "name": 'Go-agent-v0.1.07',
        "date": '2022-01-04',
        "url": '/pdf/release-notes/Go-agent-v0.1.7.pdf',
        "docs": '/release-notes/golang/golang-0_1_7'
    },
    {
        "name": 'Go-agent-v0.1.06',
        "date": '2021-11-23',
        "url": '/pdf/release-notes/Go-agent-v0.1.6.pdf',
        "docs": '/release-notes/golang/golang-0_1_6'
    },
    {
        "name": 'Go-agent-v0.1.05',
        "date": '2021-09-01',
        "url": '/pdf/release-notes/Go-agent-v0.1.5.pdf',
        "docs": '/release-notes/golang/golang-0_1_5'
    }
];
const serverList = [
    {
        "name": "Server-agent-v2.4.4",
        "date": "2023-11-08",
        "url": "/pdf/release-notes/server-agent-v2.4.4.pdf",
        "docs": "/release-notes/server/server-2_4_4"
    },
    {
        "name": "Server-agent-v2.4.3",
        "date": "2023-10-31",
        "url": "/pdf/release-notes/server-agent-v2.4.3.pdf",
        "docs": "/release-notes/server/server-2_4_3"
    },
    {
        "name": "Server-agent-v2.4.2",
        "date": "2023-10-06",
        "url": "/pdf/release-notes/Server-agent-v2.4.2.pdf",
        "docs": "/release-notes/server/server-2_4_2"
    },
    {
        "name": "Server-agent-v2.4.1",
        "date": "2023-10-04",
        "url": "/pdf/release-notes/Server-agent-v2.4.1.pdf",
        "docs": "/release-notes/server/server-2_4_1"
    },
    {
        "name": "Server-agent-v2.4.0",
        "date": "2023-07-24",
        "url": "/pdf/release-notes/Server-agent-v2.4.0.pdf",
        "docs": "/release-notes/server/server-2_4_0"
    },
    {
        "name": "Server-agent-v2.3.9",
        "date": "2023-07-06",
        "url": "/pdf/release-notes/Server-agent-v2.3.9.pdf",
        "docs": "/release-notes/server/server-2_3_9"
    },
    {
        "name": "Server-agent-v2.3.8",
        "date": "2023-06-19",
        "url": "/pdf/release-notes/Server-agent-v2.3.8.pdf",
        "docs": "/release-notes/server/server-2_3_8"
    },
    {
        "name": "Server-agent-v2.3.7",
        "date": "2023-06-08",
        "url": "/pdf/release-notes/Server-agent-v2.3.7.pdf",
        "docs": "/release-notes/server/server-2_3_7"
    },
    {
        "name": "Server-agent-v2.3.6",
        "date": "2023-05-30",
        "url": "/pdf/release-notes/Server-agent-v2.3.6.pdf",
        "docs": "/release-notes/server/server-2_3_6"
    },
    {
        "name": "Server-agent-v2.3.4",
        "date": "2023-04-18",
        "url": "/pdf/release-notes/Server-agent-v2.3.4.pdf",
        "docs": "/release-notes/server/server-2_3_4"
    },
    {
        "name": "Server-agent-v2.3.3",
        "date": "2023-02-28",
        "url": "/pdf/release-notes/Server-agent-v2.3.3.pdf",
        "docs": "/release-notes/server/server-2_3_3"
    },
    {
        "name": "Server-agent-v2.3.2",
        "date": "2023-02-21",
        "url": "/pdf/release-notes/Server-agent-v2.3.2.pdf",
        "docs": "/release-notes/server/server-2_3_2"
    },
    {
        "name": "Server-agent-v2.3.1",
        "date": "2023-01-25",
        "url": "/pdf/release-notes/Server-agent-v2.3.1.pdf",
        "docs": "/release-notes/server/server-2_3_1"
    },
    {
        "name": "Server-agent-v2.3.0",
        "date": "2023-01-11",
        "url": "/pdf/release-notes/Server-agent-v2.3.0.pdf",
        "docs": "/release-notes/server/server-2_3_0"
    },
    {
        "name": "Server-agent-v2.2.9",
        "date": "2022-12-14",
        "url": "/pdf/release-notes/Server-agent-v2.2.9.pdf",
        "docs": "/release-notes/server/server-2_2_9"
    },
    {
        "name": "Server-agent-v2.2.8",
        "date": "2022-11-29",
        "url": "/pdf/release-notes/Server-agent-v2.2.8.pdf",
        "docs": "/release-notes/server/server-2_2_8"
    },
    {
        "name": "Server-agent-v2.2.7",
        "date": "2022-10-04",
        "url": "/pdf/release-notes/Server-agent-v2.2.7.pdf",
        "docs": "/release-notes/server/server-2_2_7"
    },
    {
        "name": "Server-agent-v2.2.6",
        "date": "2022-08-24",
        "url": "/pdf/release-notes/Server-agent-v2.2.6.pdf",
        "docs": "/release-notes/server/server-2_2_6"
    },
    {
        "name": "Server-agent-v2.2.5",
        "date": "2022-08-16",
        "url": "/pdf/release-notes/Server-agent-v2.2.5.pdf",
        "docs": "/release-notes/server/server-2_2_5"
    },
    {
        "name": "Server-agent-v2.2.4",
        "date": "2022-07-29",
        "url": "/pdf/release-notes/Server-agent-v2.2.4.pdf",
        "docs": "/release-notes/server/server-2_2_4"
    },
    {
        "name": "Server-agent-v2.2.3",
        "date": "2022-06-16",
        "url": "/pdf/release-notes/Server-agent-v2.2.3.pdf",
        "docs": "/release-notes/server/server-2_2_3"
    },
    {
        "name": "Server-agent-v2.2.2",
        "date": "2022-06-08",
        "url": "/pdf/release-notes/Server-agent-v2.2.2.pdf",
        "docs": "/release-notes/server/server-2_2_2"
    },
    {
        "name": "Server-agent-v2.2.1",
        "date": "2022-05-29",
        "url": "/pdf/release-notes/Server-agent-v2.2.1.pdf",
        "docs": "/release-notes/server/server-2_2_1"
    },
    {
        "name": "Server-agent-v2.2.0",
        "date": "2022-05-24",
        "url": "/pdf/release-notes/Server-agent-v2.2.0.pdf",
        "docs": "/release-notes/server/server-2_2_0"
    },
    {
        "name": "Server-agent-v2.1.9",
        "date": "2022-05-14",
        "url": "/pdf/release-notes/Server-agent-v2.1.9.pdf",
        "docs": "/release-notes/server/server-2_1_9"
    },
    {
        "name": "Server-agent-v2.1.8",
        "date": "2022-04-22",
        "url": "/pdf/release-notes/Server-agent-v2.1.8.pdf",
        "docs": "/release-notes/server/server-2_1_8"
    },
    {
        "name": "Server-agent-v2.1.7",
        "date": "2023-03-17",
        "url": "/pdf/release-notes/Server-agent-v2.1.7.pdf",
        "docs": "/release-notes/server/server-2_1_7"
    }
];
const k8sList = [
    {
        "name": "Kubernetes-agent-v1.4.4",
        "date": "2023-11-22",
        "url": "/pdf/release-notes/k8s-agent-v1.4.4.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_4"
    },
    {
        "name": "Kubernetes-agent-v1.4.3",
        "date": "2023-11-21",
        "url": "/pdf/release-notes/k8s-agent-v1.4.3.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_3"
    },
    {
        "name": "Kubernetes-agent-v1.4.2",
        "date": "2023-11-15",
        "url": "/pdf/release-notes/k8s-agent-v1.4.2.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_2"
    },
    {
        "name": "Kubernetes-agent-v1.4.1",
        "date": "2023-11-08",
        "url": "/pdf/release-notes/k8s-agent-v1.4.1.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_1"
    },
    {
        "name": "Kubernetes-agent-v1.4.0",
        "date": "2023-10-31",
        "url": "/pdf/release-notes/k8s-agent-v1.4.0.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_0"
    },
    {
        "name": "Kubernetes-agent-v1.3.9",
        "date": "2023-10-25",
        "url": "/pdf/release-notes/k8s-agent-v1.3.9.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_9"
    },
    {
        "name": "Kubernetes-agent-v1.3.8",
        "date": "2023-10-04",
        "url": "/pdf/release-notes/k8s-agent-v1.3.8.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_8"
    },
    {
        "name": "Kubernetes-agent-v1.3.7",
        "date": "2023-09-27",
        "url": "/pdf/release-notes/k8s-agent-v1.3.7.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_7"
    },
    {
        "name": "Kubernetes-agent-v1.3.6",
        "date": "2023-09-25",
        "url": "/pdf/release-notes/k8s-agent-v1.3.6.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_6"
    },
    {
        "name": "Kubernetes-agent-v1.3.5",
        "date": "2023-09-12",
        "url": "/pdf/release-notes/k8s-agent-v1.3.5.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_5"
    },
    {
        "name": "Kubernetes-agent-v1.3.4",
        "date": "2023-08-11",
        "url": "/pdf/release-notes/k8s-agent-v1.3.4.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_4"
    },
    {
        "name": "Kubernetes-agent-v1.3.3",
        "date": "2023-08-04",
        "url": "/pdf/release-notes/k8s-agent-v1.3.3.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_3"
    },
    {
        "name": "Kubernetes-agent-v1.3.2",
        "date": "2023-07-28",
        "url": "/pdf/release-notes/k8s-agent-v1.3.2.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_2"
    },
    {
        "name": "Kubernetes-agent-v1.3.1",
        "date": "2023-06-28",
        "url": "/pdf/release-notes/k8s-agent-v1.3.1.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_1"
    },
    {
        "name": "Kubernetes-agent-v1.2.9",
        "date": "2023-06-07",
        "url": "/pdf/release-notes/k8s-agent-v1.2.9.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_9"
    },
    {
        "name": "Kubernetes-agent-v1.2.8",
        "date": "2023-06-01",
        "url": "/pdf/release-notes/k8s-agent-v1.2.8.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_8"
    },
    {
        "name": "Kubernetes-agent-v1.2.7",
        "date": "2023-05-11",
        "url": "/pdf/release-notes/k8s-agent-v1.2.7.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_7"
    },
    {
        "name": "Kubernetes-agent-v1.2.6",
        "date": "2023-05-02",
        "url": "/pdf/release-notes/k8s-agent-v1.2.6.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_6"
    },
    {
        "name": "Kubernetes-agent-v1.2.5",
        "date": "2023-04-03",
        "url": "/pdf/release-notes/k8s-agent-v1.2.5.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_5"
    },
    {
        "name": "Kubernetes-agent-v1.2.2",
        "date": "2023-01-26",
        "url": "/pdf/release-notes/k8s-agent-v1.2.2.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_2"
    },
    {
        "name": "Kubernetes-agent-v1.2.1",
        "date": "2023-01-11",
        "url": "/pdf/release-notes/k8s-agent-v1.2.1.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_1"
    },
    {
        "name": "Kubernetes-agent-v1.2.0",
        "date": "2022-11-21",
        "url": "/pdf/release-notes/k8s-agent-v1.2.0.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_0"
    },
    {
        "name": "Kubernetes-agent-v1.1.55",
        "date": "2022-10-28",
        "url": "/pdf/release-notes/k8s-agent-v1.1.55.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_55"
    },
    {
        "name": "Kubernetes-agent-v1.1.54",
        "date": "2022-09-01",
        "url": "/pdf/release-notes/k8s-agent-v1.1.54.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_54"
    },
    {
        "name": "Kubernetes-agent-v1.1.52",
        "date": "2022-08-03",
        "url": "/pdf/release-notes/k8s-agent-v1.1.52.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_52"
    },
    {
        "name": "Kubernetes-agent-v1.1.51",
        "date": "2022-08-02",
        "url": "/pdf/release-notes/k8s-agent-v1.1.51.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_51"
    },
    {
        "name": "Kubernetes-agent-v1.1.50",
        "date": "2022-07-20",
        "url": "/pdf/release-notes/k8s-agent-v1.1.50.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_50"
    },
    {
        "name": "Kubernetes-agent-v1.1.49",
        "date": "2022-07-14",
        "url": "/pdf/release-notes/k8s-agent-v1.1.49.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_49"
    },
    {
        "name": "Kubernetes-agent-v1.1.48",
        "date": "2022-06-09",
        "url": "/pdf/release-notes/k8s-agent-v1.1.48.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_48"
    },
    {
        "name": "Kubernetes-agent-v1.1.46",
        "date": "2022-05-31",
        "url": "/pdf/release-notes/k8s-agent-v1.1.46.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_46"
    },
    {
        "name": "Kubernetes-agent-v1.1.45",
        "date": "2022-05-19",
        "url": "/pdf/release-notes/k8s-agent-v1.1.45.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_45"
    },
    {
        "name": "Kubernetes-agent-v1.1.44",
        "date": "2022-05-17",
        "url": "/pdf/release-notes/k8s-agent-v1.1.44.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_44"
    },
    {
        "name": "Kubernetes-agent-v1.1.43",
        "date": "2022-05-11",
        "url": "/pdf/release-notes/k8s-agent-v1.1.43.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_43"
    },
    {
        "name": "Kubernetes-agent-v1.1.42",
        "date": "2022-02-07",
        "url": "/pdf/release-notes/k8s-agent-v1.1.42.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_42"
    },
    {
        "name": "Kubernetes-agent-v1.1.41",
        "date": "2022-01-28",
        "url": "/pdf/release-notes/k8s-agent-v1.1.41.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_41"
    },
    {
        "name": "Kubernetes-agent-v1.1.40",
        "date": "2022-01-25",
        "url": "/pdf/release-notes/k8s-agent-v1.1.40.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_40"
    }
];
const dbxList = [
    {
        "name": "DBX-agent-v1.6.13",
        "date": "2023-11-03",
        "url": "/pdf/release-notes/dbx-agent-v1.6.13.pdf",
        "docs": "release-notes/db/dbx-1_6_13"
    },
    {
        "name": "DBX-agent-v1.6.12",
        "date": "2023-10-13",
        "url": "/pdf/release-notes/dbx-agent-v1.6.12.pdf",
        "docs": "release-notes/db/dbx-1_6_12"
    },
    {
        "name": "DBX-agent-v1.6.11",
        "date": "2023-10-04",
        "url": "/pdf/release-notes/dbx-agent-v1.6.11.pdf",
        "docs": "release-notes/db/dbx-1_6_11"
    },
    {
        "name": "DBX-agent-v1.6.10",
        "date": "2023-09-15",
        "url": "/pdf/release-notes/dbx-agent-v1.6.10.pdf",
        "docs": "release-notes/db/dbx-1_6_10"
    },
    {
        "name": "DBX-agent-v1.6.9",
        "date": "2023-08-25",
        "url": "/pdf/release-notes/dbx-agent-v1.6.9.pdf",
        "docs": "release-notes/db/dbx-1_6_9"
    },
    {
        "name": "DBX-agent-v1.6.8",
        "date": "2023-08-18",
        "url": "/pdf/release-notes/dbx-agent-v1.6.8.pdf",
        "docs": "release-notes/db/dbx-1_6_8"
    },
    {
        "name": "DBX-agent-v1.6.7",
        "date": "2023-06-23",
        "url": "/pdf/release-notes/dbx-agent-v1.6.7.pdf",
        "docs": "release-notes/db/dbx-1_6_7"
    },
    {
        "name": "DBX-agent-v1.6.6",
        "date": "",
        "url": "/pdf/release-notes/dbx-agent-v1.6.6.pdf",
        "docs": "release-notes/db/dbx-1_6_6"
    },
    {
        "name": "DBX-agent-v1.6.5",
        "date": "",
        "url": "/pdf/release-notes/dbx-agent-v1.6.5.pdf",
        "docs": "release-notes/db/dbx-1_6_5"
    }
];
const xosList = [
    {
        "name": "XOS-agent-v1.1.6j",
        "date": "2023-10-13",
        "url": "/pdf/release-notes/xos-agent-v1.1.6j.pdf",
        "docs": "release-notes/db/xos-1_1_6j"
    },
    {
        "name": "XOS-agent-v1.1.6g",
        "date": "2023-07-11",
        "url": "/pdf/release-notes/xos-agent-v1.1.6g.pdf",
        "docs": "release-notes/db/xos-1_1_6g"
    },
    {
        "name": "XOS-agent-v1.1.4",
        "date": "2022-07-13",
        "url": "/pdf/release-notes/xos-agent-v1.1.4.pdf",
        "docs": "release-notes/db/xos-1_1_4"
    },
    {
        "name": "XOS-agent-v1.1.3b",
        "date": "2022-06-07",
        "url": "/pdf/release-notes/xos-agent-v1.1.3b.pdf",
        "docs": "release-notes/db/xos-1_1_3b"
    },
    {
        "name": "XOS-agent-v1.1.3",
        "date": "2022-01-10",
        "url": "/pdf/release-notes/xos-agent-v1.1.3.pdf",
        "docs": "release-notes/db/xos-1_1_3"
    },
    {
        "name": "XOS-agent-v1.1.2",
        "date": "2021-12-23",
        "url": "/pdf/release-notes/xos-agent-v1.1.2.pdf",
        "docs": "release-notes/db/xos-1_1_2"
    },
    {
        "name": "XOS-agent-v1.1.1b",
        "date": "2021-12-22",
        "url": "/pdf/release-notes/xos-agent-v1.1.1b.pdf",
        "docs": "release-notes/db/xos-1_1_1b"
    },
    {
        "name": "XOS-agent-v1.1.1a",
        "date": "2021-12-20",
        "url": "/pdf/release-notes/xos-agent-v1.1.1a.pdf",
        "docs": "release-notes/db/xos-1_1_1a"
    },
    {
        "name": "XOS-agent-v1.1.1",
        "date": "2021-11-10",
        "url": "/pdf/release-notes/xos-agent-v1.1.1.pdf",
        "docs": "release-notes/db/xos-1_1_1"
    },
    {
        "name": "XOS-agent-v1.1.0b",
        "date": "2021-09-13",
        "url": "/pdf/release-notes/xos-agent-v1.1.0b.pdf",
        "docs": "release-notes/db/xos-1_1_0b"
    },
    {
        "name": "XOS-agent-v1.1.0a",
        "date": "2021-09-10",
        "url": "/pdf/release-notes/xos-agent-v1.1.0a.pdf",
        "docs": "release-notes/db/xos-1_1_0a"
    },
    {
        "name": "XOS-agent-v1.1.0",
        "date": "2021-09-01",
        "url": "/pdf/release-notes/xos-agent-v1.1.0.pdf",
        "docs": "release-notes/db/xos-1_1_0"
    },
    {
        "name": "XOS-agent-old-version",
        "date": "~2021-07-23",
        "url": "/pdf/release-notes/xos-agent-old-version.pdf",
        "docs": "release-notes/db/xos-previous"
    }
];
const browserList = [
    {
        "name": "Browser-agent-v1.3.2",
        "date": "2022-10-24",
        "url": "/pdf/release-notes/browser-agent-v1.3.2.pdf",
        "docs": "release-notes/browser/browser-v1_3_2"
    },
    {
        "name": "Browser-agent-v1.3.1",
        "date": "2022-09-25",
        "url": "/pdf/release-notes/browser-agent-v1.3.1.pdf",
        "docs": "release-notes/browser/browser-v1_3_1"
    },
    {
        "name": "Browser-agent-v1.3.0",
        "date": "2022-09-06",
        "url": "/pdf/release-notes/browser-agent-v1.3.0.pdf",
        "docs": "release-notes/browser/browser-v1_3_0"
    },
    {
        "name": "Browser-agent-v1.2.2",
        "date": "2022-08-08",
        "url": "/pdf/release-notes/browser-agent-v1.2.2.pdf",
        "docs": "release-notes/browser/browser-v1_2_2"
    },
    {
        "name": "Browser-agent-v1.2.1",
        "date": "2022-07-06",
        "url": "/pdf/release-notes/browser-agent-v1.2.1.pdf",
        "docs": "release-notes/browser/browser-v1_2_1"
    },
    {
        "name": "Browser-agent-v1.2.0",
        "date": "2022-06-21",
        "url": "/pdf/release-notes/browser-agent-v1.2.0.pdf",
        "docs": "release-notes/browser/browser-v1_2_0"
    },
    {
        "name": "Browser-agent-v1.1.4",
        "date": "2022-05-30",
        "url": "/pdf/release-notes/browser-agent-v1.1.4.pdf",
        "docs": "release-notes/browser/browser-v1_1_4"
    },
    {
        "name": "Browser-agent-v1.1.3",
        "date": "2022-05-23",
        "url": "/pdf/release-notes/browser-agent-v1.1.3.pdf",
        "docs": "release-notes/browser/browser-v1_1_3"
    },
    {
        "name": "Browser-agent-v1.1.2",
        "date": "2022-05-15",
        "url": "/pdf/release-notes/browser-agent-v1.1.2.pdf",
        "docs": "release-notes/browser/browser-v1_1_2"
    },
    {
        "name": "Browser-agent-v1.1.1",
        "date": "2022-04-28",
        "url": "/pdf/release-notes/browser-agent-v1.1.1.pdf",
        "docs": "release-notes/browser/browser-v1_1_1"
    },
    {
        "name": "Browser-agent-v1.1.0",
        "date": "2022-04-28",
        "url": "/pdf/release-notes/browser-agent-v1.1.0.pdf",
        "docs": "release-notes/browser/browser-v1_1_0"
    }
];
const etcList = [
    {
        "name": "URL-Release-Notes",
        "date": "2022-01-05",
        "url": "/pdf/release-notes/url-release-notes.pdf",
        "docs": "release-notes/url/url-release-notes"
    },
    {
        "name": "Amazon-ECS-Release-Notes",
        "date": "2023-03-02",
        "url": "/pdf/release-notes/amazon-ecs-release-notes.pdf",
        "docs": "release-notes/amazon-ecs/amazon-ecs-release-notes"
    },
    {
        "name": "Telegraf-Release-Notes",
        "date": "2020-08-28",
        "url": "/pdf/release-notes/telegraf-release-notes.pdf",
        "docs": "release-notes/telegraf/telegraf-release-notes"
    },
    {
        "name": "Focus-Release-Notes",
        "date": "2020-08-28",
        "url": "/pdf/release-notes/focus-release-notes.pdf",
        "docs": "release-notes/focus/focus-release-notes"
    }
];



/***/ }),

/***/ 82710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Dlreleasenotes)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/dl-release-notes/PdfDownload.js + 1 modules
var PdfDownload = __webpack_require__(3550);
// EXTERNAL MODULE: ./src/components/dl-release-notes/pdfList.js
var pdfList = __webpack_require__(1171);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 71 modules
var Layout = __webpack_require__(99031);
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
    return /*#__PURE__*/ react.createElement(Layout/* default */.Z, null, /*#__PURE__*/ react.createElement("div", {
        className: styles_module.dlmain
    }, /*#__PURE__*/ react.createElement("div", {
        className: styles_module.contents
    }, /*#__PURE__*/ react.createElement("h1", {
        className: styles_module.dlHeading1
    }, "Download Release Notes"), /*#__PURE__*/ react.createElement(PdfDownload/* default */.Z, {
        h2title: "Service",
        typeName: "service",
        pdfList: pdfList/* svList */.E4
    }), /*#__PURE__*/ react.createElement("hr", null), /*#__PURE__*/ react.createElement(PdfDownload/* default */.Z, {
        h2title: "Java Agent",
        typeName: "java",
        pdfList: pdfList/* javaList */.o4
    }), /*#__PURE__*/ react.createElement("hr", null), /*#__PURE__*/ react.createElement(PdfDownload/* default */.Z, {
        h2title: "PHP Agent",
        typeName: "php",
        pdfList: pdfList/* phpList */._m
    }), /*#__PURE__*/ react.createElement("hr", null), /*#__PURE__*/ react.createElement(PdfDownload/* default */.Z, {
        h2title: "Node.js Agent",
        typeName: "nodejs",
        pdfList: pdfList/* nodejsList */.Gh
    }), /*#__PURE__*/ react.createElement("hr", null), /*#__PURE__*/ react.createElement(PdfDownload/* default */.Z, {
        h2title: "Python Agent",
        typeName: "python",
        pdfList: pdfList/* pyList */.s
    }), /*#__PURE__*/ react.createElement("hr", null), /*#__PURE__*/ react.createElement(PdfDownload/* default */.Z, {
        h2title: ".NET Agent",
        typeName: "dotnet",
        pdfList: pdfList/* dotnetList */.TY
    }), /*#__PURE__*/ react.createElement("hr", null), /*#__PURE__*/ react.createElement(PdfDownload/* default */.Z, {
        h2title: "Go Agent",
        typeName: "go",
        pdfList: pdfList/* goList */.iG
    }), /*#__PURE__*/ react.createElement("hr", null), /*#__PURE__*/ react.createElement(PdfDownload/* default */.Z, {
        h2title: "Server Agent",
        typeName: "server",
        pdfList: pdfList/* serverList */.Su
    }), /*#__PURE__*/ react.createElement("hr", null), /*#__PURE__*/ react.createElement(PdfDownload/* default */.Z, {
        h2title: "Kubernetes Agent",
        typeName: "k8s",
        pdfList: pdfList/* k8sList */.Ty
    }), /*#__PURE__*/ react.createElement("hr", null), /*#__PURE__*/ react.createElement(PdfDownload/* default */.Z, {
        h2title: "DBX Agent",
        typeName: "dbx",
        pdfList: pdfList/* dbxList */.c0
    }), /*#__PURE__*/ react.createElement("hr", null), /*#__PURE__*/ react.createElement(PdfDownload/* default */.Z, {
        h2title: "XOS Agent",
        typeName: "xos",
        pdfList: pdfList/* xosList */.J4
    }), /*#__PURE__*/ react.createElement("hr", null), /*#__PURE__*/ react.createElement(PdfDownload/* default */.Z, {
        h2title: "ETC",
        typeName: "etc",
        pdfList: pdfList/* etcList */.BM
    })), /*#__PURE__*/ react.createElement("div", {
        className: styles_module.dltocs
    }, /*#__PURE__*/ react.createElement("div", {
        className: styles_module.dltocItem
    }, /*#__PURE__*/ react.createElement("ul", {
        className: styles_module.tocList
    }, /*#__PURE__*/ react.createElement("li", null, /*#__PURE__*/ react.createElement("a", {
        href: "#service",
        onClick: onClickMenu,
        class: "table-of-contents__link"
    }, "Service")), /*#__PURE__*/ react.createElement("li", null, /*#__PURE__*/ react.createElement("a", {
        href: "#java",
        onClick: onClickMenu,
        class: "table-of-contents__link"
    }, "Java Agent")), /*#__PURE__*/ react.createElement("li", null, /*#__PURE__*/ react.createElement("a", {
        href: "#php",
        onClick: onClickMenu,
        class: "table-of-contents__link"
    }, "PHP Agent")), /*#__PURE__*/ react.createElement("li", null, /*#__PURE__*/ react.createElement("a", {
        href: "#nodejs",
        onClick: onClickMenu,
        class: "table-of-contents__link"
    }, "Node.js Agent")), /*#__PURE__*/ react.createElement("li", null, /*#__PURE__*/ react.createElement("a", {
        href: "#python",
        onClick: onClickMenu,
        class: "table-of-contents__link"
    }, "Python Agent")), /*#__PURE__*/ react.createElement("li", null, /*#__PURE__*/ react.createElement("a", {
        href: "#dotnet",
        onClick: onClickMenu,
        class: "table-of-contents__link"
    }, ".NET Agent")), /*#__PURE__*/ react.createElement("li", null, /*#__PURE__*/ react.createElement("a", {
        href: "#go",
        onClick: onClickMenu,
        class: "table-of-contents__link"
    }, "Go Agent")), /*#__PURE__*/ react.createElement("li", null, /*#__PURE__*/ react.createElement("a", {
        href: "#server",
        onClick: onClickMenu,
        class: "table-of-contents__link"
    }, "Server Agent")), /*#__PURE__*/ react.createElement("li", null, /*#__PURE__*/ react.createElement("a", {
        href: "#k8s",
        onClick: onClickMenu,
        class: "table-of-contents__link"
    }, "Kubernetes Agent")), /*#__PURE__*/ react.createElement("li", null, /*#__PURE__*/ react.createElement("a", {
        href: "#dbx",
        onClick: onClickMenu,
        class: "table-of-contents__link"
    }, "DBX Agent")), /*#__PURE__*/ react.createElement("li", null, /*#__PURE__*/ react.createElement("a", {
        href: "#xos",
        onClick: onClickMenu,
        class: "table-of-contents__link"
    }, "XOS Agent")), /*#__PURE__*/ react.createElement("li", null, /*#__PURE__*/ react.createElement("a", {
        href: "#etc",
        onClick: onClickMenu,
        class: "table-of-contents__link"
    }, "ETC")))))), /*#__PURE__*/ react.createElement("div", {
        class: styles_module.lastdiv
    }));
}


/***/ })

}]);