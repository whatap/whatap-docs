import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function XcludeDoc({ children, product, pages }) {
  const {
    i18n: { currentLocale },
    siteConfig,
  } = useDocusaurusContext();
  const location = useLocation();

  const baseParts = siteConfig.baseUrl.split('/').filter(Boolean);
  const pathParts = location.pathname.split('/').filter(Boolean);
  const relativeParts = pathParts.slice(baseParts.length); // baseUrl을 제외한 경로

  if (product) {
    const prods = Array.isArray(product) ? product : product.split(',');
    const cProd = currentLocale === 'ko' ? relativeParts[0] : relativeParts[1];
    const isProduct = prods.includes(cProd);
    return isProduct ? null : <MDXContent>{children}</MDXContent>;
  }

  if (pages) {
    const Pages = Array.isArray(pages) ? pages : pages.split(',');
    const lastPath = relativeParts[relativeParts.length - 1];
    const isPage = Pages.includes(lastPath);
    return isPage ? null : <MDXContent>{children}</MDXContent>;
  }

  // product, pages 둘 다 없을 경우 기본 출력
  return <MDXContent>{children}</MDXContent>;
}
