import React, { useEffect, useState } from 'react';

export let toc = [];

export default function GenerateTOC() {
  const [tocItems, setTocItems] = useState([]);

  useEffect(() => {
    // 페이지가 렌더링된 후에 TOC를 생성합니다.
    const headers = document.querySelectorAll('h2, h3');
    const collectedToc = Array.from(headers).map(header => ({
      value: header.innerText,
      id: header.id,
      level: parseInt(header.tagName[1], 10),
    }));

    // TOC 데이터 수집
    setTocItems(collectedToc);
    toc = collectedToc; // 외부로 내보낼 TOC 데이터 설정
  }, []);

  return (
    <nav>
      <ul>
        {tocItems.map(item => (
          <li key={item.id} style={{ marginLeft: (item.level - 1) * 20 }}>
            <a href={`#${item.id}`}>{item.value}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}