import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { PagefindUI } from '@pagefind/default-ui'; // Pagefind UI 초기화

export default function SearchPage() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    async function loadPagefind() {
      if (typeof window.pagefind === "undefined") {
        try {
          window.pagefind = await import(
            "./pagefind/pagefind.js"
            // @ts-expect-error pagefind.js generated after build
            /* webpackIgnore: true */ 
          );
        } catch (e) {
          window.pagefind = { search: () => ({ results: [] }) };
        }
      }
    }
    loadPagefind();
  }, []);

  async function handleSearch() {
    if (window.pagefind) {
      const search = await window.pagefind.search(query);
      setResults(search.results);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onInput={handleSearch}
      />
      <div id="results">
        {results.map((result, index) => (
          <Result key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}

function Result({ result }) {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const data = await result.data();
      setData(data);
    }
    fetchData();
  }, [result]);

  if (!data) return null;

  return (
    <Link href={data.url}>
      <h3>{data.meta.title}</h3>
      <p>{data.excerpt}</p>
    </Link>
  );
}