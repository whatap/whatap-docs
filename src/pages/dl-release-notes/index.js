import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { saveAs } from 'file-saver';

const pdfList = [
    {
        name: 'service-1.104.x',
        url: '/pdf/release-notes/service-1.104.x.pdf',
    },
    {
        name: 'service-1.102.x',
        url: '/pdf/release-notes/service-1.102.x.pdf',
    },
    {
        name: 'service-1.100.x',
        url: '/pdf/release-notes/service-1.100.x.pdf',
    },
    // 추가적인 PDF 파일들을 원하는 만큼 목록에 추가할 수 있습니다.
];

const downloadFilesAsZip = (selectedFiles) => {
    // JSZip을 사용하여 zip 파일 생성
    const JSZip = require('jszip');
    const zip = new JSZip();
    console.log(selectedFiles);
    // 선택한 파일들을 zip에 추가
    selectedFiles.forEach((file) => {
        fetch(file.url)
        .then((response) => response.blob())
        .then((blob) => {
            console.log(file.name + '.pdf');
            zip.file(file.name + '.pdf', blob, { binary: true });
            if (file === selectedFiles[selectedFiles.length - 1]) {
                // 마지막 파일일 경우 zip 파일을 생성하고 다운로드
                zip.generateAsync({ type: 'blob' }).then((content) => {
                    saveAs(content, 'download.zip');
            });
            }
        });
    });
};

const PDFDownloads = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleCheckboxChange = (event, file) => {
    if (event.target.checked) {
        setSelectedFiles([...selectedFiles, file]);
    } else {
        setSelectedFiles(selectedFiles.filter((selectedFile) => selectedFile !== file));
    }
    };

    const handleDownload = () => {
    if (selectedFiles.length === 1) {
        // 선택한 파일이 1개일 경우 개별 파일 다운로드
        saveAs(selectedFiles[0].url, selectedFiles[0].name + '.pdf');
    } else if (selectedFiles.length > 1) {
        // 선택한 파일이 2개 이상일 경우 zip 파일로 압축하여 다운로드
        downloadFilesAsZip(selectedFiles);
    }
    };

    return (
    <Layout>
        <div className="container">
        <h1>PDF Downloads</h1>
        {pdfList.map((pdf, index) => (
            <div key={index}>
            <input
                type="checkbox"
                id={`checkbox-${index}`}
                name={pdf.name}
                onChange={(event) => handleCheckboxChange(event, pdf)}
            />
            <label htmlFor={`checkbox-${index}`}>{pdf.name}</label>
            </div>
        ))}
        <button onClick={handleDownload}>Download</button>
        </div>
    </Layout>
    );
};
  
export default PDFDownloads;

<PDFDownloads/>