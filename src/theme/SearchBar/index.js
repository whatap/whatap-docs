import React, { useEffect } from 'react';
import './style.css';
import 'meilisearch-docsearch/css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Component() {
    const {i18n: {currentLocale} } = useDocusaurusContext();

    useEffect(() => {
            const docsearch = require('meilisearch-docsearch').default
            const destroy = docsearch({
            host: 'https://meilsearch.whatap.io',
            apiKey:
                'dgoMBc2t6fVzILDGqhh63uBXACGOmJbKNnE_Xv8_Hqk',
            indexUid: 'whatap',
            container: '#docsearch',
            searchParams: { filter: [`lang = ${currentLocale}`], limit: 50 },
        })

        return () => destroy()
    }, [])

    return <div id="docsearch" />
}