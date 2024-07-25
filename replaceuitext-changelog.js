const fs = require('fs');
const path = require('path');
const readline = require('readline');
const jsonFile = require('./src/components/ui-text/whatap-locale.json');

const mdxFilepath = path.resolve(__dirname, './crw-data/crwld-service-23q3/_import-23q3-service-Container.mdx');
// const mdxFilepath = path.resolve(__dirname, './blog/2024-2q-summary.mdx');
let mdxContent = fs.readFileSync(mdxFilepath, 'utf-8');

function getServiceIdByKeyword(keyword) {
  var matchedIDs = [];
  for (let key in jsonFile) {
    if (jsonFile[key].ko === keyword.trim()) {
        matchedIDs.push(key);
    }
  }
  return matchedIDs;
}

const matches = [...mdxContent.matchAll(/<span class="uitext">(.*?)<\/span>/g)];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let index = 0;

function askQuestion() {
  if (index >= matches.length) {
    fs.writeFileSync(mdxFilepath, mdxContent); // 변경된 내용을 mdx 파일에 다시 기록
    rl.close();
  } else {
    const keyword = matches[index][1];
    const serviceIds = getServiceIdByKeyword(keyword);
    if (serviceIds.length === 1) {
      mdxContent = mdxContent.replace(`<span class="uitext">${keyword}</span>`, `<Cmdname sid="${serviceIds[0]}" className="uitext" />`);
      index++;
      askQuestion();
    } else if (serviceIds.length > 1) {
        console.log(serviceIds);
        rl.question(`There are multiple service IDs matching with <span class="uitext">${keyword}</span>. Please enter the service ID you want to use: `, (serviceId) => {
        if (serviceIds.includes(serviceId)) {
          mdxContent = mdxContent.replace(`<span class="uitext">${keyword}</span>`, `<Cmdname sid="${serviceId}" className="uitext" />`);
        } else {
          console.log("The provided service ID is not found in the matching set. Please try again.");
        }
        index++;
        askQuestion();
      });
    } else {
      index++;
      askQuestion();
    }
  }
}

askQuestion();
