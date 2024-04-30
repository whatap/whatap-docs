// 크롤링에 필요한 모듈 불러오기
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// 크롤링할 웹 페이지 URL
const url = 'https://docs.whatap.io/release-notes/service/service-2_3_x';

// URL을 '/'로 분할하여 배열로 만든 후 배열의 마지막 요소 가져오기
const segments = url.split('/');
const lastUrl = segments[segments.length - 1];
const seg2 = lastUrl.split('-');
const lastUrl2 = seg2[0];

// 구성8
axios.get(url)
    .then(response => {
        const $ = cheerio.load(response.data);

        $('section.remark-sectionize-h2').each((index, element) => {
            const version = $(element).find('h2').text().trim();
            const date = $(element).find('h2 + p').text().trim();

            $(element).find('h3').each((index, h3Element) => {
                const productName = $(h3Element).text().trim();

                // 파일명을 생성합니다.
                const fileName = `./crw-data/_import-2test-${lastUrl2}-${productName}.mdx`;

                let mdxContent = '';

                // 이미 존재하는 파일인 경우 파일 내용을 읽어옵니다.
                if (fs.existsSync(fileName)) {
                    mdxContent = fs.readFileSync(fileName, 'utf-8');
                }

                const featuresByFeatureName = {};

                const h4Elements = $(h3Element).nextUntil('h3', 'h4');
                if (h4Elements.length > 0) {
                    h4Elements.each((index, h4Element) => {
                        const featureName = $(h4Element).text().trim();
                        const nextUl = $(h4Element).next('ul').first();
                        const nextP = $(h4Element).next('p').first();
                        const featureInUl = nextUl.find('code.Feature, code.New, code.Changed');
                        const featureInP = nextP.find('code.Feature, code.New, code.Changed');
                        const features = new Set();
                        featureInUl.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });
                        featureInP.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });

                        if (features.size === 0) return;

                        if (!featuresByFeatureName[featureName]) {
                            featuresByFeatureName[featureName] = [];
                        }

                        features.forEach(feature => {
                            featuresByFeatureName[featureName].push(feature);
                        });
                    });
                } else {
                    const nextUl = $(h3Element).next('ul').first();
                    const nextP = $(h3Element).next('p').first();
                    const featureInUl = nextUl.find('code.Feature, code.New, code.Changed');
                    const featureInP = nextP.find('code.Feature, code.New, code.Changed');
                    const features = new Set();
                    featureInUl.each((idx, code) => {
                        features.add($(code).parent().html().trim());
                    });
                    featureInP.each((idx, code) => {
                        features.add($(code).parent().html().trim());
                    });

                    if (features.size === 0) return;

                    featuresByFeatureName[""] = [];

                    features.forEach(feature => {
                        featuresByFeatureName[""].push(feature);
                    });
                }

                // 제품명과 기능을 파일 내용에 추가합니다.
                mdxContent += `### ${productName}\n\n`;

                Object.keys(featuresByFeatureName).forEach(featureName => {
                    if (featureName !== "") {
                        // 이미 존재하는 featureName인 경우 해당 내용을 찾아서 뒤에 추가합니다.
                        const existingFeatureIndex = mdxContent.indexOf(`#### ${featureName}`);
                        if (existingFeatureIndex !== -1) {
                            const existingFeatureEndIndex = mdxContent.indexOf("####", existingFeatureIndex + 1);
                            const existingFeatureContent = mdxContent.substring(existingFeatureIndex, existingFeatureEndIndex !== -1 ? existingFeatureEndIndex : undefined);
                            mdxContent = mdxContent.replace(existingFeatureContent, `${existingFeatureContent}\n\n`); // 추가
                        } else {
                            mdxContent += `#### ${featureName}\n\n`;
                        }
                    }

                    featuresByFeatureName[featureName].forEach(feature => {
                        mdxContent += `- ${feature} <code class='changelog-service'>${version}</code>\n\n`;
                    });
                });

                // 파일에 내용을 씁니다.
                fs.writeFileSync(fileName, mdxContent);
                console.log(`MDX file updated: ${fileName}`);
            });
        });
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });