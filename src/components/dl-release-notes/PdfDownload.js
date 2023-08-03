import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { PDFDocument } from 'pdf-lib';
import styles from './styles.module.css';

const downloadFilesAsZip = (selectedFiles) => {
    // JSZip을 사용하여 zip 파일 생성
    const zip = new JSZip();
    const promises = [];

    // 선택한 파일들을 zip에 추가
    selectedFiles.forEach((file) => {
        const promise = fetch(file.url)
        .then((response) => response.blob())
        .then((blob) => {
            zip.file(file.name + '.pdf', blob, { binary: true });
        });
        promises.push(promise);
    });
    // 모든 파일을 로드한 후에 zip으로 압축하고 다운로드
    Promise.all(promises).then(() => {
        zip.generateAsync({ type: 'blob'}).then((content) => {
            saveAs(content, 'download.zip')
        })
    });
};

export default function PDFDownloads({h2title, typeName, pdfList}) {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleCheckboxChange = (event, file) => {
        if (event.target.checked) {
            setSelectedFiles([...selectedFiles, file]);
        } else {
            setSelectedFiles(selectedFiles.filter((selectedFile) => selectedFile !== file));
        }
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedFiles(pdfList);
        } else {
            setSelectedFiles([]);
        }
    };

    const handleDownload = async () => {
        if (selectedFiles.length === 1) {
            // 선택한 파일이 1개일 경우 개별 파일 다운로드
            saveAs(selectedFiles[0].url, selectedFiles[0].name + '.pdf');
        } else if (selectedFiles.length > 1) {
            // 파일명을 역순으로 정렬
            const sortedFiles = selectedFiles.slice().sort((a, b) => b.name.localeCompare(a.name));
            
            // 선택한 파일이 2개 이상일 경우 zip 파일로 압축하여 다운로드
            const mergedPdf = await PDFDocument.create();
            const pdfPromises = sortedFiles.map((file) => fetch(file.url).then((response) => response.arrayBuffer()));
            const pdfArrayBuffers = await Promise.all(pdfPromises);

            for (const pdfBuffer of pdfArrayBuffers) {
                const pdfDoc = await PDFDocument.load(pdfBuffer);
                const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
                pages.forEach((page) => mergedPdf.addPage(page));
            }

            const mergedPdfBytes = await mergedPdf.save();
            const mergedPdfBlob = new Blob([mergedPdfBytes], {type: 'application/pdf'});
            const downloadLink = URL.createObjectURL(mergedPdfBlob);
            const a = document.createElement('a');
            a.href = downloadLink;
            a.download = 'merged.pdf';
            a.click();
            URL.revokeObjectURL(downloadLink);
        }
    };

    return (
        <>
            <h2>{h2title}</h2>
            <div>
                <input
                    type='checkbox'
                    id={`select-all-${typeName}`}
                    name={`select-all-${typeName}`}
                    className={styles.inputBox}
                    onChange={handleSelectAll}
                    checked={selectedFiles.length === pdfList.length}
                />
                <label htmlFor='select-all'>Select All</label>
            </div>
            <ul className={styles.dlList}>
                {pdfList.map((pdf, index) => (
                    <li key={index} className={styles.dlListItem}>
                    <input
                        type="checkbox"
                        id={`${typeName}-${index}`}
                        className={styles.inputBox}
                        name={pdf.name}
                        onChange={(event) => handleCheckboxChange(event, pdf)} checked={selectedFiles.includes(pdf)}
                    />
                    <label htmlFor={`${typeName}-${index}`}>{pdf.name}</label>
                    </li>
                ))}
            </ul>
            <div className={styles.dlBtn}>
                <button className={styles.dlButton} onClick={handleDownload}>Download</button>
            </div>
        </>
    );
};

export async function getStaticProps() {
    // 여기서는 간단히 pdfList 데이터를 props로 전달합니다.
    return {
      props: {
        pdfList,
      },
    };
}