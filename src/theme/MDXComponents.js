import React from 'react';
// 원본 mapper 가져오기
import MDXComponents from '@theme-original/MDXComponents';
import InDoc from '@site/src/components/InDoc.js';
import Xclude from '@site/src/components/XcludeDoc.js';
import TR from '@site/src/components/TR';
import ProdImg from '@site/src/components/ChangeImgName.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';
import Status from '@site/src/components/Highlight';
import UI from '@site/src/components/UItext';

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
  DocCardList
};