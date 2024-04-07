import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import styles from './styles.module.css';
import { translate } from "@docusaurus/Translate";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}) {
  const {
    navbar: {hideOnScroll},
    docs: {
      sidebar: {hideable},
    },
  } = useThemeConfig();
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  let whataphome, docshome;
  if (currentLocale == 'ko') {
    whataphome = 'https://www.whatap.io';
    docshome = '/';
  } else {
    whataphome = 'https://www.whatap.io/' + currentLocale;
    docshome = '/' + currentLocale;
  }
  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}>
      <div className='hold-menu'>
        <ul>
          <li><a href={docshome} className='home'>
            {
              translate({
                id: "docs_Name",
                message: "WhaTap Docs",
              })
            }
          </a></li>
          <li><Link to={whataphome} target='_blank' className='ext' rel="noopener noreferrer">
            {
              translate({
                id: "whatap_link_go",
                message: "와탭 홈페이지 바로가기",
              })
            }
          </Link></li>
        </ul>
      </div>
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      <Content path={path} sidebar={sidebar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}
export default React.memo(DocSidebarDesktop);
