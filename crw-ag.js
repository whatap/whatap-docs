const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://docs.whatap.io/release-notes/db/dbx-1_7_0';

const segments = url.split('/');
const lastUrl = segments[segments.length - 1];
const seg2 = lastUrl.split('-');
const lastUrl2 = seg2[0];

axios.get(url)
    .then(response => {
        const $ = cheerio.load(response.data);
        let mdxContent = '';
        let contentSet = new Set();

        const version = $('header').text().trim();
        const date = $('header + p').text().trim();
        const ulContents = $('header + p').next('ul');
        const featureInUl = ulContents.find('code.Feature, code.New');

        const pContents = $('header + p').next('p');
        const featureInP = pContents.find('code.Feature, code.New');

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