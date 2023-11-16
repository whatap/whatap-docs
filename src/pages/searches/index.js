import React from 'react';
import ReactDOM from 'react-dom';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const searchClient = algoliasearch('38IOA0JIBS', '38a630985eb8e5474430fd5de27aca59');

function Hit({ hit }) {
    
    return (
        <article>
            <h1>{hit.product}</h1>
        </article>
    );
}

function App() {
  return (
    <Layout>
        <InstantSearch searchClient={searchClient} indexName="whatap">
            <SearchBox />
            <Hits hitComponent={Hit} />
        </InstantSearch>
    </Layout>
  );
}


export default App;