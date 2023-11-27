import React from 'react';
import {useDoc} from '@docusaurus/theme-common/internal';
import Feedback from '@site/src/components/Feedback';

export default function EditThisPageWrapper(props) {
  const {metadata} = useDoc();

  return (
    <>
      <Feedback />
      {/* <EditThisPage {...props} /> */}
    </>
  );
}
