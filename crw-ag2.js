//dbx 반복문, 배열 필요함. 조건문 말고 반복문으로 월요일에 짜기

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

        const ulContents2 = $('h2').next('ul');
        const featureInUl2 = ulContents2.find('code.Feature, code.New');

        const pContents2 = $('h2').next('p');
        const featureInP2 = pContents2.find('code.Feature, code.New');

        const product2 = ulContents2.prev('h2').first().text();
        const product3 = pContents2.prev('h2').first().text();

        const product4 = ulContents2.prev('h2');
        const product5 = pContents2.prev('h2');

        // const productn = new Set();

        // product4.each((idx, h2) => {
        //   productn.add($(h2).text().trim());
        // });

        // product5.each((idx, h2) => {
        //   productn.add($(h2).text().trim());
        // });


        const features = new Set();
        featureInUl.each((idx, code) => {
            features.add($(code).parent().html().trim());
        });

        featureInP.each((idx, code) => {
          features.add($(code).parent().html().trim());
        });

        featureInUl2.each((idx, code) => {
          features.add($(code).parent().html().trim());
        });

        featureInP2.each((idx, code) => {
          features.add($(code).parent().html().trim());
        });

        product4.each((idx, h2) => {
          features.add($(h2).text().trim());
        });

        product5.each((idx, h2) => {
          features.add($(h2).text().trim());
        });

        console.log(features.size);

        if (features.size === 0) return;

        const content = `#### ${version}` + ` - ${date}` + `\n`;
        if (!contentSet.has(content)) {
            mdxContent += content + '\n';
            contentSet.add(content);
        }

        $('section.remark-sectionize-h2').find('h2').each((index, h3Element) => {
          if(product4.length > 0){
            mdxContent += `##### ${product2}` + `\n\n`;
            mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n') +
              '\n\n';
          } else if(product5.length > 0){
            mdxContent += [...features].map(feature => `##### ${feature}`) + `\n\n`;
            mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n') +
              '\n\n';
          } 
        });

        if('h2'.length === 0) {
          mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n') +
            '\n\n';
        }

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