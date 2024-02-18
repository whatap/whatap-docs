import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import NavbarSearch from '@theme/Navbar/Search';
import SearchBar from '@theme/SearchBar';
import styles from './styles.module.css';
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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
          <li><a href={whataphome} target='_blank' className='ext' rel="noopener noreferrer">
            {
              translate({
                id: "whatap_link_go",
                message: "와탭 홈페이지 바로가기",
              })
            }
          </a></li>
        </ul>
      </div>
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      <Content path={path} sidebar={sidebar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}
export default React.memo(DocSidebarDesktop);
