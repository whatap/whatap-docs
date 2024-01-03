import React from 'react';
import {
    InstantSearch,
    Hits,
    SearchBox,
    Stats,
    Highlight,
    ClearRefinements,
    RefinementList,
    Configure,
    Snippet,
    Pagination
} from 'react-instantsearch-dom';
import Layout from '@theme/Layout';
import './style.css';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function App() {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    const lang = currentLocale;

    const docsURL = "https://docs.whatap.io";

    const { searchClient } = instantMeiliSearch(
        'https://meilsearch.whatap.io',
        'dgoMBc2t6fVzILDGqhh63uBXACGOmJbKNnE_Xv8_Hqk',
        {
            placeholderSearch: false,
            finitePagination: true,
        }
    );
    
    const Hit = ({ hit }) => {
        const titles = [ hit.hierarchy_radio_lvl0, hit.hierarchy_radio_lvl1, hit.hierarchy_radio_lvl2, hit.hierarchy_radio_lvl3, hit.hierarchy_radio_lvl4, hit.hierarchy_radio_lvl5 ];
        const title = titles.filter(
            (element, i) => element !== null
        );
        const durl = hit.url.replace(docsURL, "").replace("#__docusaurus_skipToContent_fallback", "")
        return (
            <div key={hit.id}>
                <Link to={durl}>
                    <h3>{title[0]}</h3>
                    <div className='hit-breadcrums'>
                        <div className="hit-name lvl0">
                            <Highlight attribute="hierarchy_lvl0" hit={hit} />
                        </div>
                        {hit.hierarchy_lvl1 && (
                            <div className="hit-name">
                                <Highlight attribute="hierarchy_lvl1" hit={hit} />
                            </div>
                        )}
                        {hit.hierarchy_lvl2 && (
                            <div className="hit-name">
                                <Highlight attribute="hierarchy_lvl2" hit={hit} />
                            </div>
                        )}
                        {hit.hierarchy_lvl3 && (
                            <div className="hit-name">
                                <Highlight attribute="hierarchy_lvl3" hit={hit} />
                            </div>
                        )}
                        {hit.hierarchy_lvl4 && (
                            <div className="hit-name">
                                <Highlight attribute="hierarchy_lvl4" hit={hit} />
                            </div>
                        )}
                        {hit.hierarchy_lvl5 && (
                            <div className="hit-name last">
                                <Highlight attribute="hierarchy_lvl5" hit={hit} />
                            </div>
                        )}
                    </div>
                </Link>
                {hit.content && (
                    <div className="hit-name">
                        <Snippet attribute="content" hit={hit} />
                    </div>
                )}
            </div>
        )
    }

    return (
        <Layout>
            <div className="ais-InstantSearch">
            <h1>
                {translate({
                    id: 'theme.SearchPage.emptyResultsTitle',
                    message: 'Search the documentation',
                    description: 'The search page title for empty query',
                })}
            </h1>
            <InstantSearch 
                indexName="whatap" 
                searchClient={searchClient}
                >
                <div className="left-panel">
                    <ClearRefinements />
                    <h2>Category</h2>
                    <RefinementList 
                        searchable
                        attribute="hierarchy_lvl0" 
                        limit="50"
                        // transformItems={transformItems}
                    />
                    <Configure
                        hitsPerPage={20}
                        attributesToSnippet={['description:20']}
                        snippetEllipsisText={'...'}
                        // filters={`lang=${lang} AND hierarchy_lvl0!=Documentation`}
                        filters={`lang=${lang}`}
                    />
                    <Stats />
                </div>
                <div className="right-panel">
                    <SearchBox />
                    <Pagination showLast={true} />
                    <Hits hitComponent={Hit} />
                    <Pagination showLast={true} />
                </div>
            </InstantSearch>
            </div>
        </Layout>
    );
}