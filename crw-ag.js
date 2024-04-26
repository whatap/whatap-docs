// 크롤링에 필요한 모듈 불러오기
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// 크롤링할 웹 페이지 URL
const url = 'https://docs.whatap.io/release-notes/java/java-2_2_28';

// URL을 '/'로 분할하여 배열로 만든 후 배열의 마지막 요소 가져오기
const segments = url.split('/');
const lastUrl = segments[segments.length - 1];

const seg2 = lastUrl.split('-')
const lastUrl2 = seg2[0];
console.log(lastUrl2);

// Axios를 사용하여 웹 페이지 HTML 가져오기
axios.get(url)
    .then(response => {

      // Cheerio를 사용하여 HTML 파싱
      const $ = cheerio.load(response.data);

      // MDX 파일로 데이터 저장할 변수
      let mdxContent = '';

      // 중복을 제거하기 위한 Set
      let contentSet = new Set();

      // 에이전트 버전 정보 가져오기
      const version = $('*').find('header').text().trim();
      // 날짜 정보 가져오기
      const date = $('*').find('header + p').text().trim();

      // 상세 정보 가져오기
      const ulContents= $('*').find('header + p').next('ul');

      //console.log(ulContents.length);

      const featureInUl = ulContents.find('code.Feature, code.New');

      const features = new Set();

      featureInUl.each((idx, code) => {
          features.add($(code).parent().html().trim());
      });

      // console.log('버전: ' + version + ' 날짜: ' + date + ' 상세: ' + [...features].map(feature => `- ${feature}`).join('\n\n')); 

      // 출력할 필요 없는 경우는 건너뛰기
      if (features.size === 0) return;

      const content = `#### ${version}` + ` - ${date}`+ `\n`;
      if (!contentSet.has(content)) {
          mdxContent += content + '\n';
          contentSet.add(content);
      }
      mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n') +
          '\n\n';

      // MDX 파일로 데이터 저장
      const fileName = `./crw-data/_import-${lastUrl2}-agent.mdx`; // 파일 경로 및 이름 설정
      fs.writeFileSync(fileName, mdxContent);
      console.log(`MDX file saved: ${fileName}`);

    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });