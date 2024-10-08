import React, {memo} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from '@docusaurus/plugin-content-blog/client';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
const ListComponent = ({items}) => {
  return (
    <BlogSidebarItemList
      items={items}
      ulClassName={clsx(styles.sidebarItemList, 'clean-list')}
      liClassName={styles.sidebarItem}
      linkClassName={styles.sidebarItemLink}
      linkActiveClassName={styles.sidebarItemLinkActive}
    />
  );
};
function BlogSidebarDesktop({sidebar}) {
  const sidebarData = require('../_meta.json');
  const sideitems = useVisibleBlogSidebarItems(sidebar.items);
  const getItemTitle = (permalink) => {
    const item = sideitems.find((sideitem) => sideitem.permalink.replace(/(\/en|\/ja)/g, "") === permalink);
    return item ? item.title : permalink;
  };
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog recent posts navigation',
          description: 'The ARIA label for recent posts in the blog sidebar',
        })}>
        {/* <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        <BlogSidebarContent
          items={items}
          ListComponent={ListComponent}
          yearGroupHeadingClassName={styles.yearGroupHeading}
        /> */}
        <ul className={clsx(styles.sidebarItemList, 'clean-list')}>
          {sidebarData.map((category, index) => (
            <li key={index} className={category.className ? styles[category.className] : ''}>
              <div>
                {category.link ? (
                  <Link isNavLink to={category.link}>
                    {category.tr_code ? (
                      <>
                        {
                          translate({
                            id: `${category.tr_code}`,
                          })
                        }
                      </>
                    ) : (
                      <>{category.label}</>
                    )}
                  </Link>
                ) : (
                  <span>{category.label}</span>
                )}
              </div>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={item.className ? styles[item.className] : ''}>
                  <Link
                    isNavLink
                    to={item.link}
                    className={styles.sidebarItemLink}
                    activeClassName={styles.sidebarItemLinkActive}>
                    {getItemTitle(item.link)}
                  </Link>
                </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
export default memo(BlogSidebarDesktop);
