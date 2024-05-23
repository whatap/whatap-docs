const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const urls = [
    // 'https://docs.whatap.io/release-notes/service/service-1_110_x',
    // 'https://docs.whatap.io/release-notes/service/service-1_112_x',
    // 'https://docs.whatap.io/release-notes/service/service-1_114_x',
    'https://docs.whatap.io/release-notes/service/service-2_0_x',
];

async function extractFeaturesAndUpdateMDXDocument() {
    const allFeatures = {};

    try {
        for (const url of urls) {
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);

            $('section.remark-sectionize-h2').each((index, element) => {
                const version = $(element).find('h2').text().trim();
                const date = $(element).find('h2 + p').text().trim();

                $(element).find('h3').each((index, h3Element) => {
                    const featureName = $(h3Element).text().trim().replace(/\u200B/g, '');

                    const nextUl = $(h3Element).next('ul').first();
                    const nextP = $(h3Element).next('p').first();
                    const featureInUl = nextUl.find('code.Feature, code.New');
                    const featureInP = nextP.find('code.Feature, code.New');

                    const featureDetails = [];

                    featureInUl.each((idx, code) => {
                        featureDetails.push($(code).parent().html().trim());
                    });
                    featureInP.each((idx, code) => {
                        featureDetails.push($(code).parent().html().trim());
                    });

                    if (featureDetails.length > 0) {
                        const featureKey = `${featureName}_${date}`;
                        if (!allFeatures[featureKey]) {
                            allFeatures[featureKey] = { date: date, feature: featureName, versions: [] };
                        }
                        allFeatures[featureKey].versions.push({ version: version, details: featureDetails });
                    }
                });
            });
        }

        updateOrCreateMDXDocument(allFeatures);
    } catch (error) {
        console.error('Error extracting features and updating document:', error);
    }
}

function updateOrCreateMDXDocument(newFeatures) {
    const mdxFilePath = './crw-data/overview/_changelog_overview_d.mdx';
    let existingFeatures = {};

    if (fs.existsSync(mdxFilePath)) {
        const content = fs.readFileSync(mdxFilePath, 'utf-8');

        let currentFeature;
        let currentDate;
        let currentDetail;

        content.trim().split('\n').forEach(line => {
            const featureMatch = line.match(/<code class='changelog-overview'>(.*?)<\/code>/);
            const dateMatch = line.match(/<code class='changelog-date'>(.*?)<\/code>/);
            const detailMatch = line.match(/<li>(.*?)<\/li>/);
            if (featureMatch) {
                currentFeature = featureMatch[1].trim();
            }
            if (dateMatch) {
                currentDate = dateMatch[1].trim();
            }
            if (detailMatch) {
                currentDetail = detailMatch[1].trim();
            }

            console.log('Line:', line);
            console.log('Feature:', currentFeature);
            console.log('Date:', currentDate);
            console.log('Detail:', currentDetail);

            if (currentFeature && currentDate && currentDetail) {
                const key = `${currentFeature}_${currentDate}`;
                if (!existingFeatures[key]) {
                    existingFeatures[key] = {
                        feature: currentFeature,
                        date: currentDate,
                        details: [currentDetail]
                    };
                } else {
                    existingFeatures[key].details.push(currentDetail);
                }
            }
        });
    }

    if (Object.keys(newFeatures).length === 0) {
        console.log('No new features to update or create.');
        return;
    }

    const filteredNewFeatures = {};
    Object.keys(newFeatures).forEach(key => {
        if (!existingFeatures[key]) {
            filteredNewFeatures[key] = newFeatures[key];
        }
    });

    const allFeatures = { ...existingFeatures, ...filteredNewFeatures };

    createOrUpdateMDXDocument(mdxFilePath, allFeatures);

    sortByDateAndRewriteMDXWithBackup(mdxFilePath);
}

function createOrUpdateMDXDocument(filename, features) {
    try {
        let documentContent = '';

        Object.keys(features).forEach(key => {
            const feature = features[key];
            documentContent += `- <code class='changelog-overview'>${feature.feature}</code> <code class='changelog-date'>${feature.date}</code>\n`;
            feature.versions.forEach(version => {
                version.details.forEach(detail => {
                    documentContent += `  - ${detail}<code class='changelog-service'>${version.version}</code>\n`;
                });
            });
            documentContent += '\n';
        });

        fs.writeFileSync(filename, documentContent);
        console.log(`MDX Document updated or created: ${filename}`);
    } catch (error) {
        console.error('Error updating or creating MDX document:', error);
    }
}

function sortByDateAndRewriteMDXWithBackup(filename) {
    sortByDateAndRewriteMDX(filename);

    createBackup(filename);
}

function createBackup(filename) {
    const backupFolder = './crw-data/backup';
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
            const dateMatch = line.match(/<code class='changelog-date'>(.*?)<\/code>/);
            return { line, date: dateMatch ? parseDate(dateMatch[1]) : null };
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
