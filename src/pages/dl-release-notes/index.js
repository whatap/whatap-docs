import React from 'react';
import PdfDownload from '@site/src/components/dl-release-notes/PdfDownload';
import { svList, javaList, phpList, nodejsList, pyList, dotnetList, goList, serverList, k8sList, dbxList, xosList, etcList } from '@site/src/components/dl-release-notes/pdfList.js';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Dlreleasenotes() {
    const onClickMenu = (e) => {
        e.preventDefault();
        console.log(e.target.hash);
        const headerOffset = 97;
        const targetHash = e.target.hash;
        const targetSection = document.querySelector(targetHash);
        const targetPostion = targetSection.getBoundingClientRect().top;
        const offsetPosition = targetPostion + window.pageYOffset - headerOffset;
        console.log(offsetPosition);
        if (targetSection) {
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    }
    return (
        <Layout>
            <div className={styles.dlmain}>
                <div className={styles.contents}>
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

                <hr/>

                <PdfDownload h2title='DBX Agent' typeName='dbx' pdfList={dbxList} />

                <hr/>

                <PdfDownload h2title='XOS Agent' typeName='xos' pdfList={xosList} />

                <hr/>

                <PdfDownload h2title='ETC' typeName='etc' pdfList={etcList} />
                </div>
                <div className={styles.dltocs}>
                    <div className={styles.dltocItem}>
                        <ul className={styles.tocList}>
                            <li><a href='#service' onClick={onClickMenu} class='table-of-contents__link'>Service</a></li>
                            <li><a href='#java' onClick={onClickMenu} class='table-of-contents__link'>Java Agent</a></li>
                            <li><a href='#php' onClick={onClickMenu} class='table-of-contents__link'>PHP Agent</a></li>
                            <li><a href='#nodejs' onClick={onClickMenu} class='table-of-contents__link'>Node.js Agent</a></li>
                            <li><a href='#python' onClick={onClickMenu} class='table-of-contents__link'>Python Agent</a></li>
                            <li><a href='#dotnet' onClick={onClickMenu} class='table-of-contents__link'>.NET Agent</a></li>
                            <li><a href='#go' onClick={onClickMenu} class='table-of-contents__link'>Go Agent</a></li>
                            <li><a href='#server' onClick={onClickMenu} class='table-of-contents__link'>Server Agent</a></li>
                            <li><a href='#k8s' onClick={onClickMenu} class='table-of-contents__link'>Kubernetes Agent</a></li>
                            <li><a href='#dbx' onClick={onClickMenu} class='table-of-contents__link'>DBX Agent</a></li>
                            <li><a href='#xos' onClick={onClickMenu} class='table-of-contents__link'>XOS Agent</a></li>
                            <li><a href='#etc' onClick={onClickMenu} class='table-of-contents__link'>ETC</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class={styles.lastdiv}></div>
        </Layout>
        
    );
}