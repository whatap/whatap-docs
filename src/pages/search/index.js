import React from 'react';
import {
    InstantSearch,
    Hits,
    Breadcrumb,
    SearchBox,
    Stats,
    Highlight,
    ClearRefinements,
    RefinementList,
    Configure,
    SortBy,
    Snippet,
    Pagination
} from 'react-instantsearch-dom';
import Layout from '@theme/Layout';
import './style.css';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';

const lang = document.documentElement.lang.split("-")[0];
const docsURL = "https://docs.whatap.io";

const { searchClient } = instantMeiliSearch(
    'https://meilsearch.whatap.io',
    'dgoMBc2t6fVzILDGqhh63uBXACGOmJbKNnE_Xv8_Hqk',
    {
        placeholderSearch: false,
        finitePagination: true,
    }
)

const App = () => (
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
                    filters={`lang=${lang}`}
                />
                <Stats />
            </div>
            <div className="right-panel">
                <SearchBox />
                <Hits hitComponent={Hit} />
            </div>
            <Pagination showLast={true} />
        </InstantSearch>
        </div>
    </Layout>
)



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






export default App