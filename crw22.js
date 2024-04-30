const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://docs.whatap.io/release-notes/service/service-2_4_x';
const segments = url.split('/');
const lastUrl = segments[segments.length - 1];
const seg2 = lastUrl.split('-');
const lastUrl2 = seg2[0];

// 제품명별로 생성된 파일명을 묶는 객체
const productFiles = {};

// 새로 생성된 파일명 목록을 담는 MDX 파일명
const newFilesMDX = `./crw-data/crwd/_import-new-files-${lastUrl2}.mdx`;

// 기존 MDX 파일 업데이트
axios.get(url)
    .then(response => {
        const $ = cheerio.load(response.data);

        $('section.remark-sectionize-h2').each((index, element) => {
            const version = $(element).find('h2').text().trim();
            const date = $(element).find('h2 + p').text().trim();

            $(element).find('h3').each((index, h3Element) => {
                let productName = $(h3Element).text().trim().replace(/\u200B/g, ''); // 제품명에서 U+200B 제거

                const fileName = `./crw-data/crwd/_import-2test-${lastUrl2}-${productName}.mdx`.trim(); // trim() 추가

                let mdxContent = '';

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
                            if (!featuresByFeatureName[featureName].includes(feature)) {
                                featuresByFeatureName[featureName].push(feature);
                            }
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
                        if (!featuresByFeatureName[""].includes(feature)) {
                            featuresByFeatureName[""].push(feature);
                        }
                    });
                }

                // 파일에 내용을 추가합니다.
                updateMDXContent(fileName, mdxContent, version, featuresByFeatureName, productName);

                // 제품명에 해당하는 파일명을 묶습니다.
                if (!productFiles[productName]) {
                    productFiles[productName] = [];
                }

                if (!productFiles[productName].includes(fileName)) {
                    productFiles[productName].push(fileName);
                }
            });
        });

        // 제품명별로 생성된 파일명 목록을 MDX 파일에 저장합니다.
        let productFilesContent = '';

        Object.keys(productFiles).forEach(productName => {
            const filesList = productFiles[productName].map(file => {
                const cleanFileName = file.replace(/\u200B/g, ''); // U+200B 제거
                return `import ${productName}_1q from "${cleanFileName}";\n\n<${productName}_1q />\n`;
            }).join('\n');
            const cleanProductName = productName.replace(/\u200B/g, ''); // U+200B 제거
            productFilesContent += `## ${cleanProductName}\n\n${filesList}\n`;
        });

        // 파일명 목록 MDX 파일이 이미 있는지 확인합니다.
        if (fs.existsSync(newFilesMDX)) {
          // 기존 파일명 목록 MDX 파일이 이미 있는 경우, 추가된 파일명을 기존 파일에 추가합니다.
          const existingFilesContent = fs.readFileSync(newFilesMDX, 'utf-8');
          const existingFilesSet = new Set(existingFilesContent.split('\n').map(line => line.trim()));
          const newFilesSet = new Set(productFilesContent.split('\n').map(line => line.trim()));
          const mergedFilesSet = new Set([...existingFilesSet, ...newFilesSet]);
          const mergedFilesArray = Array.from(mergedFilesSet);
          
          // 빈 줄을 포함하여 파일명 목록을 병합합니다.
          const mergedFilesContent = mergedFilesArray.join('\n') + '\n\n';
      
          productFilesContent = mergedFilesContent;
      }
      

        fs.writeFileSync(newFilesMDX, productFilesContent);
        console.log(`New files MDX updated: ${newFilesMDX}`);
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });

// 기존 MDX 파일 업데이트 함수
function updateMDXContent(fileName, existingContent, version, newContent, productName) {
    let updatedContent = existingContent;

    Object.keys(newContent).forEach(featureName => {
        const featureHeader = `#### ${featureName}`;

        if (!updatedContent.includes(featureHeader)) {
            updatedContent += `${featureHeader}\n\n`;
        }

        newContent[featureName].forEach(feature => {
            const newFeatureContent = `- ${feature} <code class='changelog-service'>${version}</code>`;
            const existingFeatureIndex = updatedContent.indexOf(featureHeader);

            if (existingFeatureIndex !== -1) {
                const featureEndIndex = updatedContent.indexOf('\n\n', existingFeatureIndex);
                const featureDetail = updatedContent.substring(existingFeatureIndex, featureEndIndex);

                if (!featureDetail.includes(feature)) {
                    updatedContent = updatedContent.substring(0, featureEndIndex) +
                        `\n\n${newFeatureContent}` +
                        updatedContent.substring(featureEndIndex);
                }
            } else {
                updatedContent += `${newFeatureContent}\n\n`;
            }
        });
    });

    // updatedContent = updatedContent.replace(/^\s*####\s*$/gm, "");

    fs.writeFileSync(fileName, updatedContent);
    console.log(`MDX file updated: ${fileName}`);

    const backupFileName = `./crw-data/arranged/_import-arranged-${lastUrl2}-${productName}.mdx`;
    fs.copyFileSync(fileName, backupFileName);
    console.log(`Backup file created: ${backupFileName}`);
}
