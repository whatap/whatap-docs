import React from 'react';
import MDXContents from '@theme-original/MDXContent';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function InDoc({ children, product, pages }) {
  const { i18n: { currentLocale }, siteConfig } = useDocusaurusContext();
  const location = useLocation();

  // baseUrl을 사용해 URL prefix 길이를 계산
  const baseParts = siteConfig.baseUrl.split('/').filter(Boolean);
  const pathParts = location.pathname.split('/').filter(Boolean);

  // baseUrl 다음 segment부터 사용
  const relativeParts = pathParts.slice(baseParts.length);

  if (product) {
    const prods = Array.isArray(product) ? product : product.split(',');
    const cProd = currentLocale === 'ko' ? relativeParts[0] : relativeParts[1];
    const isProduct = prods.includes(cProd);

    return isProduct ? <MDXContents>{children}</MDXContents> : null;
  }

  if (pages) {
    const Pages = Array.isArray(pages) ? pages : pages.split(',');
    const lastPath = relativeParts[relativeParts.length - 1];
    const isPage = Pages.includes(lastPath);

    return isPage ? <MDXContents>{children}</MDXContents> : null;
  }

  return <MDXContents>{children}</MDXContents>;
}