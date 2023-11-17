import React from 'react';
import ReactDOM from 'react-dom';
import algoliasearch from 'algoliasearch/lite';
import algoliaSearchHelper from 'algoliasearch-helper';
import { InstantSearch, SearchBox, Configure, Menu, useMenu, Hits, Highlight, RefinementList, Pagination, Snippet, DynamicWidgets } from 'react-instantsearch';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const searchClient = algoliasearch('38IOA0JIBS', '38a630985eb8e5474430fd5de27aca59');
const indexName = "whatap";

function Hit({ hit }) {
    const hierarchies = hit.hierarchy;
    const titles = Object.keys(hierarchies).reduce((acc, key) => {
        if (hierarchies[key]) {
            acc.push(hierarchies[key]);
        }
        return acc;
    }, []);
    const title = titles[titles.length-1];
    const docPath = hit.breadcrums;
    
    const summary = hit._snippetResult ? hit._snippetResult.content.value : '';

    return (
        <article>
            <h2>
                {docPath == ""
                      ? <Link to={hit.url} dangerouslySetInnerHTML={{__html: title}} />
                      : <Link to={hit.url} dangerouslySetInnerHTML={{__html: docPath.replace("Docs > ", "")}} />
                }
            </h2>
            <h3>{title}</h3>
            {summary && (
                <p dangerouslySetInnerHTML={{__html: summary}} />
            )}
        </article>
    );
}

function App() {
    const { i18n: {currentLocale} } = useDocusaurusContext();

    return (
        <Layout>
            <InstantSearch 
                searchClient={searchClient}
                indexName={indexName} 
                future={{
                    preserveSharedStateOnUnmount: true,
                }}
                >
                <Configure
                    analytics={true}
                    filters={`language: ${currentLocale}`}
                    hitsPerPage={40}
                    attributesToSnippet={['content:80']}
                />
                <SearchBox autoFocus />
                <RefinementList 
                    attribute='product' 
                    showMore='true' 
                    sortBy={['count:desc']} 
                />
                {/* <CurrentRefinements includedAttributes={['product']} /> */}
                <Hits hitComponent={Hit} />
                <Pagination/>
            </InstantSearch>
        </Layout>
    );
}


export default App;