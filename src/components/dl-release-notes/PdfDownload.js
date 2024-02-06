import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { PDFDocument } from 'pdf-lib';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function PDFDownloads({typeName, pdfList}) {
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
        const corsproxy = "https://corsproxy.io/?";
        try {
            if (selectedFiles.length === 1) {
                // 선택한 파일이 1개일 경우 개별 파일 다운로드
                saveAs(selectedFiles[0].url, selectedFiles[0].name + '.pdf');
            } else if (selectedFiles.length > 1) {
                // 파일명을 역순으로 정렬
                const sortedFiles = selectedFiles.slice().sort((a, b) => b.name.localeCompare(a.name));
                const mergedPdf = await PDFDocument.create();
                const pdfPromises = sortedFiles.map((file) => fetch(corsproxy + encodeURIComponent(file.url)).then((response) => response.arrayBuffer()));
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
        } catch(error) {
            alert("An error occurred during the PDF download and merge process: ", error);
        }
    };
    const downIcon = useBaseUrl('/img/ico-download.svg');
    return (
        <>
            <div className={styles.dlList}>
                <table className={styles.dlTable}>
                    <thead>
                        <tr>
                            <th>
                            <input
                                type='checkbox'
                                id={`select-all-${typeName}`}
                                name={`select-all-${typeName}`}
                                className={styles.inputBox}
                                onChange={handleSelectAll}
                                checked={selectedFiles.length === pdfList.length}
                            />
                            <label className={styles._dlLabel} htmlFor='select-all'>Select All</label>
                            </th>
                            <th><p>Release Notes</p></th>
                            <th><p>Release Date</p></th>
                            <th><p>Download PDF</p></th>
                        </tr>
                    </thead>
                    <tbody>
                    {pdfList.map((pdf, index) => (
                        <tr>
                            <td key={index} className={styles.dlListItem}>
                            <p>
                                <input
                                    type="checkbox"
                                    id={`${typeName}-${index}`}
                                    className={styles.inputBox}
                                    name={pdf.name}
                                    onChange={(event) => handleCheckboxChange(event, pdf)} checked={selectedFiles.includes(pdf)}
                                />
                                <label className={styles._dlLabel} htmlFor={`${typeName}-${index}`}>
                                    <Link to={pdf.docs} target='_blank'>{pdf.name}</Link>
                                </label>
                            </p>
                            </td>
                            <td>
                                <p><Link to={pdf.docs} target='_blank'>{pdf.name}</Link></p>
                            </td>
                            <td>
                                <p>{pdf.date}</p>
                            </td>
                            <td>
                                <p><img src={downIcon} className={styles.dlIcon}/> <a href={pdf.url}>Download</a></p>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
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