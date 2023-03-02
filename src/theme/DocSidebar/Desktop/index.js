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
function DocSidebarDesktop({path, sidebar, onCollapse, isHidden}) {
  const {
    navbar: {hideOnScroll},
    docs: {
      sidebar: {hideable},
    },
  } = useThemeConfig();
  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}>
      <div className='hold-menu'>
        <ul>
          <li><a href='/' className='home'>
            {
              translate({
                id: "docs_Name",
                message: "와탭 Docs",
              })
            }
          </a></li>
          <li><a href='https://www.whatap.io' target='_blank' className='ext'>
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
