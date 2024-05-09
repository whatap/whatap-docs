import React from 'react';
import ApiDoc from '@theme/ApiDoc';
import useSpecData from '@theme/useSpecData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function CustomPage() {
  const specDataKo = useSpecData('openapi-spec');
  const specDataEn = useSpecData('openapi-spec-en');
  const specDataJa = useSpecData('openapi-spec-ja');

  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  if (currentLocale == 'ko') {
    return (
      <ApiDoc
        layoutProps={{
          title: `${specDataKo.spec.info?.title}`,
          description: 'Open API를 통해 수집 중인 모니터링 정보를 추출해 활용할 수 있습니다.',
        }}
        specProps={specDataKo}
      />
    );
  } else if (currentLocale == 'en') {
    return (
      <ApiDoc
        layoutProps={{
          title: `${specDataEn.spec.info?.title}`,
          description: 'You can extract and use the monitoring data being collected through the Open API.',
        }}
        specProps={specDataEn}
      />
    );
  } else if (currentLocale == 'ja') {
    return (
      <ApiDoc
        layoutProps={{
          title: `${specDataJa.spec.info?.title}`,
          description: 'Open APIを通じて収集中のモニタリング情報を抽出して活用することができます。',
        }}
        specProps={specDataJa}
      />
    );
  }
}

export default CustomPage;