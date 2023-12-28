import React from 'react'
import {
  InstantSearch,
  InfiniteHits,
  SearchBox,
  Stats,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  SortBy,
  Snippet,
} from 'react-instantsearch-dom'
import Layout from '@theme/Layout';
import './style.css'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

const { searchClient } = instantMeiliSearch(
    'https://meilsearch.whatap.io',
    'dgoMBc2t6fVzILDGqhh63uBXACGOmJbKNnE_Xv8_Hqk',
)
  
const App = () => (
<Layout>
    <div className="ais-InstantSearch">
    <h1>검색 테스트를 위한 임시 페이지</h1>
    <p>
        이 페이지는 검색 테스트를 위한 임시 페이지입니다.
    </p>
    <InstantSearch indexName="whatap" searchClient={searchClient}>
        <Stats />
        {/* <div className="left-panel">
        <ClearRefinements />
        <SortBy
            defaultRefinement="whatap"
            items={[
            { value: 'whatap', label: 'Relevant' },
            {
                value: 'whatap:recommendationCount:desc',
                label: 'Most Recommended',
            },
            {
                value: 'whatap:recommendationCount:asc',
                label: 'Least Recommended',
            },
            ]}
        />
        <h2>Genres</h2>
        <RefinementList attribute="genres" />
        <h2>Players</h2>
        <RefinementList attribute="players" />
        <h2>Platforms</h2>
        <RefinementList attribute="platforms" />
        <h2>Misc</h2>
        <RefinementList attribute="misc" />
        <Configure
            hitsPerPage={6}
            attributesToSnippet={['description:50']}
            snippetEllipsisText={'...'}
        />
        </div> */}
        <div className="right-panel">
        <SearchBox />
        <InfiniteHits hitComponent={Hit} />
        </div>
    </InstantSearch>
    </div>
</Layout>
)

const Hit = ({ hit }) => {
return (
    <div key={hit.id}>
    <div className="hit-name">
        <Highlight attribute="hierarchy_lvl0" hit={hit} />
    </div>
    <div className="hit-name">
        <Highlight attribute="hierarchy_lvl1" hit={hit} />
    </div>
    <div className="hit-name">
        <Snippet attribute="hierarchy_lvl2" hit={hit} />
    </div>
    <div className="hit-name">
        <Snippet attribute="hierarchy_lvl3" hit={hit} />
    </div>
    <div className="hit-name">
        <Snippet attribute="hierarchy_lvl4" hit={hit} />
    </div>
    <div className="hit-name">
        <Snippet attribute="content" hit={hit} />
    </div>
    </div>
)
}

export default App