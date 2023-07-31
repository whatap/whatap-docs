import React from 'react';
import PdfDownload from '@site/src/components/dl-release-notes/PdfDownload';
import { svList, javaList } from '@site/src/components/dl-release-notes/pdfList.js';
import Layout from '@theme/Layout';

export default function Dlreleasenotes() {
    return (
        <Layout>
            <h1>Release Notes</h1>

            <PdfDownload h2title='Service' typeName='service' pdfList={svList} />

            <PdfDownload h2title='Java Agent' typeName='java' pdfList={javaList} />
            
        </Layout>
    );
}