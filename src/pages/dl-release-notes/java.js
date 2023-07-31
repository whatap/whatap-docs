import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { javaList } from './pdfList.js';
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

const PDFDownloads = () => {
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
            setSelectedFiles(javaList);
        } else {
            setSelectedFiles([]);
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
        <>
            <h2>Java Agent</h2>
            <div>
                <input
                    type='checkbox'
                    id='select-all'
                    name='select-all'
                    className={styles.inputBox}
                    onChange={handleSelectAll}
                    checked={selectedFiles.length === javaList.length}
                />
                <label htmlFor='select-all'>Select All</label>
            </div>
            <div className={styles.dlList}>
                {javaList.map((pdf, index) => (
                    <div key={index} className={styles.dlListItem}>
                    <input
                        type="checkbox"
                        id={`java-${index}`}
                        className={styles.inputBox}
                        name={pdf.name}
                        onChange={(event) => handleCheckboxChange(event, pdf)} checked={selectedFiles.includes(pdf)}
                    />
                    <label htmlFor={`java-${index}`}>{pdf.name}</label>
                    </div>
                ))}
            </div>
            <div className={styles.dlBtn}>
                <button className={styles.dlButton} onClick={handleDownload}>Download</button>
            </div>

        </>
    );
};

export default PDFDownloads;