import React from 'react';
import PdfDownload from '@site/src/components/dl-release-notes/PdfDownload';
import { svList, javaList } from '@site/src/components/dl-release-notes/pdfList.js';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Dlreleasenotes() {
    return (
        <Layout>
            <h1 className={styles.dlHeading1}>Release Notes</h1>

            <PdfDownload h2title='Service' typeName='service' pdfList={svList} />

            <PdfDownload h2title='Java agent' typeName='java' pdfList={javaList} />
            
        </Layout>
    );
}