import React from 'react';
import ApiDoc from '@theme/ApiDoc';
import useSpecData from '@theme/useSpecData';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';
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
      <Layout
        title={specDataKo.spec.info?.title}
        description="Open API를 통해 수집 중인 모니터링 정보를 추출해 활용할 수 있습니다."
      >
        <Redoc {...specDataKo} />
      </Layout>
    );
  } else if (currentLocale == 'en') {
    return (
      <Layout
        title={specDataEn.spec.info?.title}
        description="You can extract and use the monitoring data being collected through the Open API."
      >
        <Redoc {...specDataEn} />
      </Layout>
    );
  } else if (currentLocale == 'ja') {
    return (
      <Layout
        title={specDataJa.spec.info?.title}
        description="Open APIを通じて収集中のモニタリング情報を抽出して活用することができます。"
      >
        <Redoc {...specDataJa} />
      </Layout>
    );
  }
}

export default CustomPage;