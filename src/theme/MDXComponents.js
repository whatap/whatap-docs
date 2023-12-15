import React from 'react';
// 원본 mapper 가져오기
import MDXComponents from '@theme-original/MDXComponents';
import InDoc from '@site/src/components/InDoc.js';
import Xclude from '@site/src/components/XcludeDoc.js';
import TR from '@site/src/components/TR';
import ProdImg from '@site/src/components/ImagepathbyProduct.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';
import Status from '@site/src/components/Highlight';
import UI from '@site/src/components/UItext';
import ImgLang from '@site/src/components/ChangeImgNamebyLocale.js'
import Link from '@docusaurus/Link';
import LinkImage from '@site/src/components/LinkImage.js';
import Youtube from '@site/src/components/OutputbyLang.js';
import Cmdname from '@site/src/components/ui-text/locale-text.js';
import Appname from '@site/src/components/ui-text/mobile-locale.js';
import ScrollToLink from '@site/src/components/OnClickeventOffset.js';

export default {
  // 기본 mapping 재사용
  ...MDXComponents,
  Status,
  UI,
  InDoc,
  Xclude,
  TR,
  ProdImg,
  Tabs,
  TabItem,
  DocCardList,
  ImgLang,
  Link,
  LinkImage,
  Youtube,
  Cmdname,
  Appname,
  ScrollToLink
};