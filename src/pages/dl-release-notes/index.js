import React from 'react';
import PdfDownload from '@site/src/components/dl-release-notes/PdfDownload';
import { svList, javaList, phpList, nodejsList, pyList } from '@site/src/components/dl-release-notes/pdfList.js';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Dlreleasenotes() {
    return (
        <Layout>
            <h1 className={styles.dlHeading1}>Download Release Notes</h1>

            <PdfDownload h2title='Service' typeName='service' pdfList={svList} />

            <hr/>

            <PdfDownload h2title='Java Agent' typeName='java' pdfList={javaList} />

            <hr/>

            <PdfDownload h2title='PHP Agent' typeName='php' pdfList={phpList} />

            <hr/>

            <PdfDownload h2title='Node.js Agent' typeName='nodejs' pdfList={nodejsList} />

            <hr/>

            <PdfDownload h2title='Python Agent' typeName='python' pdfList={pyList} />
            
            <div class={styles.lastdiv}></div>
        </Layout>
    );
}