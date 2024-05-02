const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// URL 배열 정의
const urls = [
    'https://docs.whatap.io/release-notes/java/java-2_2_32',
];

// 순차적으로 각 URL을 처리하는 함수
const processUrlsSequentially = async () => {
    for (const url of urls) {
        try {
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);
            let mdxContent = '';
            let contentSet = new Set();

            const version = $('header').text().trim();
            const date = $('header + p').text().trim();

            // 기능 상세 데이터 처리 로직
            const sectionElements = $('*').find('section.remark-sectionize-h2');
            if (sectionElements.length > 0) {
                $('section.remark-sectionize-h2').each((index, element) => {
                    $(element).find('h2').each((index, h2Element) => {
                        // 제품군 내 제품명
                        const productName = $(h2Element).text().trim();

                        // 기능 상세
                        const nextUl = $(h2Element).next('ul').first();
                        const nextP = $(h2Element).next('p').first();

                        const featureInUl = nextUl.find('code.Feature, code.New, code.Deprecated, code.Deprecate');
                        const featureInP = nextP.find('code.Feature, code.New, code.Deprecated, code.Deprecate');

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

            } else {

                const ulContents = $('header + p').next('ul');
                const featureInUl = ulContents.find('code.Feature, code.New, code.Deprecated, code.Deprecate');

                const pContents = $('header + p').next('p');
                const featureInP = pContents.find('code.Feature, code.New, code.Deprecated, code.Deprecate');

                const features = new Set();
                featureInUl.each((idx, code) => {
                    features.add($(code).parent().html().trim());
                });
                featureInP.each((idx, code) => {
                    features.add($(code).parent().html().trim());
                });

                if (features.size === 0) return;

                const content = `#### ${version}` + ` - ${date}` + `\n`;
                if (!contentSet.has(content)) {
                    mdxContent += content + '\n';
                    contentSet.add(content);
                }
                mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n') +
                    '\n\n';
            }

            // mdx 파일 생성
            const segments = url.split('/');
            const lastUrl = segments[segments.length - 1];
            const seg2 = lastUrl.split('-');
            const lastUrl2 = seg2[0];
            const fileName = `./crw-data/crwld-agent/_import-agent-${lastUrl2}.mdx`;
            let existingContent = '';
            if (fs.existsSync(fileName)) {
                existingContent = fs.readFileSync(fileName, 'utf-8');
            }

            const updatedContent = existingContent + mdxContent;

            fs.writeFileSync(fileName, updatedContent);
            console.log(`MDX file updated for ${url}`);
        } catch (error) {
            console.error('Error fetching web page:', error);
        }
    }
};

// 함수 호출
processUrlsSequentially();
