const fs = require('fs');

const whatapjson = require('./src/components/ui-text/whatap-locale.json');

const koData = require('./menu.ko');
const koMenuKey = Object.keys(koData.menuData);

// console.log(koData.menuData["usage"].title);

const enData = require('./menu.en');

// console.log(enData.menuData["usage"].title);

const jaData = require('./menu.ja');

let sid;

for (let i in koMenuKey) {
    sid = koMenuKey[i];
    const enVal = enData.menuData[`${sid}`]?.title;
    const jaVal = jaData.menuData[`${sid}`]?.title;
    const koVal = koData.menuData[`${sid}`]?.title;
    
    whatapjson[`side_${sid}`] = {
        "en": enVal,
        "ja": jaVal,
        "ko": koVal
    }
}

fs.writeFileSync('./src/components/ui-text/whatap-locale.json', JSON.stringify(whatapjson, null, 2), 'utf-8')