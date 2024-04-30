const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://docs.whatap.io/release-notes/service/service-2_4_x';
const segments = url.split('/');
const lastUrl = segments[segments.length - 1];
const seg2 = lastUrl.split('-');
const lastUrl2 = seg2[0];

// 구성17 가능. 조금만 손보면 될 것 같음
axios.get(url)
    .then(response => {
        const $ = cheerio.load(response.data);

        $('section.remark-sectionize-h2').each((index, element) => {
            const version = $(element).find('h2').text().trim();
            const date = $(element).find('h2 + p').text().trim();

            $(element).find('h3').each((index, h3Element) => {
                const productName = $(h3Element).text().trim();

                // 파일명 생성
                const fileName = `./crw-data/crwd/_import-2test-${lastUrl2}-${productName}.mdx`;

                let mdxContent = '';

                // 이미 존재하는 파일인 경우 파일 내용을 읽어오기
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

                // 파일에 내용을 추가
                updateMDXContent(fileName, mdxContent, version, featuresByFeatureName, productName);
            });
        });
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });

// 기존 MDX 파일과 새로운 기능을 비교하고 내용을 업데이트
function updateMDXContent(fileName, existingContent, version, newContent, productName) {
    let updatedContent = existingContent;

    Object.keys(newContent).forEach(featureName => {
        const featureHeader = `#### ${featureName}`;
        if (!updatedContent.includes(featureHeader)) {
            updatedContent += `${featureHeader}\n\n`;
        }

        newContent[featureName].forEach(feature => {
            // 중복되는 기능명이 있는 경우, 해당 기능명 아래에 추가
            const existingFeature = `#### ${featureName}`;
            const newFeatureContent = `- ${feature} <code class='changelog-service'>${version}</code>`;
            if (updatedContent.includes(existingFeature)) {
                updatedContent = updatedContent.replace(existingFeature, `${existingFeature}\n\n${newFeatureContent}`);
            } else {
                updatedContent += `${newFeatureContent}\n\n`;
            }
        });
    });

    // '####' 옆이 완전히 비어있는 경우 해당 부분을 빼기
    updatedContent = updatedContent.replace(/^\s*####\s*$/gm, "");

    // 파일에 내용 쓰기
    fs.writeFileSync(fileName, updatedContent);
    console.log(`MDX file updated: ${fileName}`);

    // 백업 파일 생성
    const backupFileName = `./crw-data/arranged/_import-arranged-${lastUrl2}-${productName}.mdx`;
    fs.copyFileSync(fileName, backupFileName);
    console.log(`Backup file created: ${backupFileName}`);
}
