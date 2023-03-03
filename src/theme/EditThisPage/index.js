import React from 'react';
import {useDoc} from '@docusaurus/theme-common/internal';
import Feedback from '../../components/Feedback';

export default function EditThisPageWrapper(props) {
  const {metadata} = useDoc();

  return (
    <>
      {/* <Feedback resource={metadata.unversionedId} /> */}
      {/* <EditThisPage {...props} /> */}
    </>
  );
}
