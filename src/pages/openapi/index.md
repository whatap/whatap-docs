import {Redirect} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const App = () => {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  if (currentLocale == 'ko') {
    return <Redirect to="./openapi-spec" />;
  } else if (currentLocale == 'en') {
    return <Redirect to="./en/openapi-spec-en" />;
  } else if (currentLocale == 'ja') {
    return <Redirect to="./ja/openapi-spec-ja" />;
  }
};

<App/>
