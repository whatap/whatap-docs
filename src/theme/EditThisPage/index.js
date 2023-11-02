import React from 'react';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import IconEdit from '@theme/Icon/Edit';
import {useDoc} from '@docusaurus/theme-common/internal';
import Feedback from '../../components/Feedback';

export default function EditThisPage({editUrl}) {
  const {metadata} = useDoc();
  return (
    <>
      <Feedback resource={metadata.unversionedId} />
    </>
    // <Link to={editUrl} className={ThemeClassNames.common.editThisPage}>
    //   <IconEdit />
    //   <Translate
    //     id="theme.common.editThisPage"
    //     description="The link label to edit the current page">
    //     Edit this page
    //   </Translate>
    // </Link>
  );
}
