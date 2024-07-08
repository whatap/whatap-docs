import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import styles from './styles.module.css';

export default function GenerateTOC({ className, device, ...props }) {
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
  }, []);

  const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
  const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

  if (device === 'desktop') {
    return (
      <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
        <TOCItems
          toc={tocItems}
          linkClassName={LINK_CLASS_NAME}
          linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
          {...props}
        />
      </div>
    );
  }
}
