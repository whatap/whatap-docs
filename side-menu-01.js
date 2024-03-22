const fs = require('fs');

// 주어진 JSON 데이터
const data = fs.readFileSync('./menu-locale.json', 'utf-8');
const jsonData = JSON.parse(data);
let jsfile;

for (const i in jsonData) {
    jsfile = jsonData[i].name;
    
    fs.writeFileSync(jsfile, Buffer.from(jsonData[i].content, 'base64').toString('utf8').replace(/export const tag = \{[^>]+\n/g, 'module.exports = { menuData };').replace(/export default /g, 'const menuData = '));
        koData = Buffer.from(jsonData[i].content, 'base64').toString('utf8').replace(/export const tag = \{[^>]+\n/g, '').replace(/export default /g, '').replace(';', '');
}
