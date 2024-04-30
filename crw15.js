const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://docs.whatap.io/release-notes/service/service-2_2_x';
const segments = url.split('/');
const lastUrl = segments[segments.length - 1];
const seg2 = lastUrl.split('-');
const lastUrl2 = seg2[0];

axios.get(url)
    .then(response => {
        const $ = cheerio.load(response.data);

        $('section.remark-sectionize-h2').each((index, element) => {
            const version = $(element).find('h2').text().trim();
            const date = $(element).find('h2 + p').text().trim();

            $(element).find('h3').each((index, h3Element) => {
                const productName = $(h3Element).text().trim();

                const fileName = `./crw-data/_import-2test-${lastUrl2}-${productName}.mdx`;

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

                updateMDXContent(fileName, mdxContent, version, featuresByFeatureName, productName);
            });
        });
    })
    .catch(error => {
        console.error('Error fetching web page:', error);
    });

function updateMDXContent(fileName, existingContent, version, newContent, productName) {
    let updatedContent = existingContent;

    Object.keys(newContent).forEach(featureName => {
        const featureHeader = `#### ${featureName}`;
        if (!updatedContent.includes(featureHeader)) {
            updatedContent += `\n\n${featureHeader}\n\n`;
        }

        newContent[featureName].forEach(feature => {
            const newFeatureContent = `- ${feature} <code class='changelog-service'>${version}</code>`;
            if (!updatedContent.includes(newFeatureContent)) {
                updatedContent += `${newFeatureContent}\n\n`;
            }
        });
    });

    fs.writeFileSync(fileName, updatedContent);
    console.log(`MDX file updated: ${fileName}`);
}
