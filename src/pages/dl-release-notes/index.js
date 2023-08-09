import React from 'react';
import PdfDownload from '@site/src/components/dl-release-notes/PdfDownload';
import { svList, javaList, phpList, nodejsList, pyList, dotnetList, goList, serverList, k8sList } from '@site/src/components/dl-release-notes/pdfList.js';
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

            <hr/>

            <PdfDownload h2title='.NET Agent' typeName='dotnet' pdfList={dotnetList} />

            <hr/>

            <PdfDownload h2title='Go Agent' typeName='go' pdfList={goList} />

            <hr/>

            <PdfDownload h2title='Server Agent' typeName='server' pdfList={serverList} />

            <hr/>

            <PdfDownload h2title='Kubernetes Agent' typeName='k8s' pdfList={k8sList} />
            
            <div class={styles.lastdiv}></div>
        </Layout>
    );
}