const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://docs.whatap.io/release-notes/db/dbx-1_6_18';

const segments = url.split('/');
const lastUrl = segments[segments.length - 1];
const seg2 = lastUrl.split('-');
const lastUrl2 = seg2[0];

axios.get(url)
    .then(response => {

        const $ = cheerio.load(response.data);
        let mdxContent = '';
        let contentSet = new Set();

        // 버전 정보
        const version = $('header').text().trim();
        // 날짜 정보
        const date = $('header + p').text().trim();

        console.log(version);

        $('section.remark-sectionize-h2').each((index, element) => {

          $(element).find('h2').each((index, h2Element) => {
            // 제품군 내 제품명
            const productName = $(h2Element).text().trim();
            console.log(productName);

            // 기능 상세
            const nextUl = $(h2Element).next('ul').first();
            const nextP = $(h2Element).next('p').first();

            const featureInUl = nextUl.find('code.Feature, code.New');
            const featureInP = nextP.find('code.Feature, code.New');

            // 중복 제거한 기능 상세 가져오기
            const features = new Set();
            featureInUl.each((idx, code) => {
                features.add($(code).parent().html().trim());
            });
            featureInP.each((idx, code) => {
                features.add($(code).parent().html().trim());
            });

            // 출력할 필요 없는 경우는 건너뛰기
            if (features.size === 0) return;

            // 중복 체크 및 MDX 형식으로 데이터 생성하여 파일 내용에 추가
            const content = `#### ${version}` + ` - ${date}` + `\n`;
            if (!contentSet.has(content)) {
                mdxContent += content + '\n';
                contentSet.add(content);
            }
            mdxContent += `##### ${productName}` + `\n\n` + [...features].map(feature => `- ${feature}`).join('\n\n') +
                '\n\n';
          });

        });

        const fileName = `./crw-data/_import-${lastUrl2}-agent.mdx`;
        let existingContent = '';
        if (fs.existsSync(fileName)) {
            existingContent = fs.readFileSync(fileName, 'utf-8');
        }

        const updatedContent = existingContent + mdxContent;

        fs.writeFileSync(fileName, updatedContent);
        console.log(`MDX file updated: ${fileName}`);

      })
      .catch(error => {
          console.error('Error fetching web page:', error);
      });