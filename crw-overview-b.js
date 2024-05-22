// 백업 추가(working)
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const urls = [
    // 'https://docs.whatap.io/release-notes/service/service-1_112_x',
    'https://docs.whatap.io/release-notes/service/service-1_114_x',
];

async function extractFeaturesAndUpdateMDXDocument() {
    const allFeatures = [];

    try {
        for (const url of urls) {
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);

            const features = [];
            $('section.remark-sectionize-h2').each((index, element) => {
                const version = $(element).find('h2').text().trim();
                const date = $(element).find('h2 + p').text().trim();

                $(element).find('h3').each((index, h3Element) => {
                    const featureName = $(h3Element).text().trim().replace(/\u200B/g, '');

                    const nextUl = $(h3Element).next('ul').first();
                    const nextP = $(h3Element).next('p').first();
                    const featureInUl = nextUl.find('code.Feature, code.New, code.Changed');
                    const featureInP = nextP.find('code.Feature, code.New, code.Changed');

                    const featureDetails = [];

                    featureInUl.each((idx, code) => {
                        featureDetails.push($(code).parent().html().trim());
                    });
                    featureInP.each((idx, code) => {
                        featureDetails.push($(code).parent().html().trim());
                    });

                    if (featureDetails.length > 0) {
                        features.push({ version: version, date: date, feature: featureName, details: featureDetails });
                    }
                });
            });

            features.sort((a, b) => parseDate(b.date) - parseDate(a.date));
            allFeatures.push(...features);
        }

        updateOrCreateMDXDocument(allFeatures);
    } catch (error) {
        console.error('Error extracting features and updating document:', error);
    }
}

function updateOrCreateMDXDocument(newFeatures) {
    const mdxFilePath = './crw-data/overview/_changelog_overview.mdx';
    let existingFeatures = [];

    if (fs.existsSync(mdxFilePath)) {
        const content = fs.readFileSync(mdxFilePath, 'utf-8');

        existingFeatures = content.trim().split('\n\n').map(line => {
            const match = line.match(/<code class='changelog-date'>(.*?)<\/code>/);
            const featureMatch = line.match(/<code class="Feature">(.*?)<\/code>/);
            return {
                line,
                date: match ? parseDate(match[1]) : null,
                feature: featureMatch ? featureMatch[1] : ''
            };
        });
    }

    const filteredNewFeatures = newFeatures.filter(newFeature => {
        return !existingFeatures.some(existingFeature => {
            return existingFeature.feature === newFeature.feature && existingFeature.date.getTime() === parseDate(newFeature.date).getTime();
        });
    });

    const allFeatures = [...existingFeatures, ...filteredNewFeatures];

    allFeatures.sort((a, b) => b.date - a.date);

    createOrUpdateMDXDocument(mdxFilePath, allFeatures);

    // 날짜 재정렬 후에 백업 파일 생성
    sortByDateAndRewriteMDXWithBackup(mdxFilePath);
}

function createOrUpdateMDXDocument(filename, features) {
    try {
        let documentContent = '';

        features.forEach(feature => {
            if (feature.line) {
                documentContent += `${feature.line}\n\n`;
            } else {
                feature.details.forEach(detail => {
                    documentContent += `- <code class="Feature">${feature.feature}</code> ${detail}<code class='changelog-service'>${feature.version}</code><code class='changelog-date'>${feature.date}</code>\n\n`;
                });
            }
        });

        fs.writeFileSync(filename, documentContent);
        console.log(`MDX Document updated or created: ${filename}`);
    } catch (error) {
        console.error('Error updating or creating MDX document:', error);
    }
}

function sortByDateAndRewriteMDXWithBackup(filename) {
    sortByDateAndRewriteMDX(filename);

    // 백업 파일 생성
    createBackup(filename);
}

function createBackup(filename) {
    const backupFolder = './crw-data/backup'; // 백업 파일을 저장할 폴더
    if (!fs.existsSync(backupFolder)) {
        fs.mkdirSync(backupFolder);
    }

    const backupFileName = path.join(backupFolder, `_changelog_overview_backup_${Date.now()}.mdx`);
    fs.copyFileSync(filename, backupFileName);
    console.log(`Backup created: ${backupFileName}`);
}

function sortByDateAndRewriteMDX(filename) {
    try {
        const content = fs.readFileSync(filename, 'utf-8');

        const features = content.trim().split('\n\n').map(line => {
            const match = line.match(/<code class='changelog-date'>(.*?)<\/code>/);
            return { line, date: match ? parseDate(match[1]) : null };
        });

        features.sort((a, b) => b.date - a.date);

        const sortedContent = features.map(item => item.line).join('\n\n');
        fs.writeFileSync(filename, sortedContent);

        console.log(`MDX file sorted and updated: ${filename}`);
    } catch (error) {
        console.error('Error sorting and rewriting MDX file:', error);
    }
}

function parseDate(dateString) {
    const match = dateString.match(/(\d+)년 (\d+)월 (\d+)일/);
    if (match) {
        const year = parseInt(match[1]);
        const month = parseInt(match[2]) - 1;
        const day = parseInt(match[3]);
        return new Date(year, month, day);
    } else {
        console.error('Invalid date format:', dateString);
        return null;
    }
}

extractFeaturesAndUpdateMDXDocument();
