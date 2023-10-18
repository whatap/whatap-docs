var path = require('path');
var fs = require('fs');

var googleAPI = require('./auth_google_sheet');
var UTILS = require('./utils');

const LOCALE_FILE_ID = '1WOiovbegEh1cbPrxklY6gCcSj3dUXfztp_6VxWHPPzw';

function readSpringMessage(file) {
  var fileContents = fs.readFileSync(file, 'utf-8');
  return UTILS.keyValueToJson(fileContents);
}

function readSpringMessages() {
  var resourceFolder = getParentsFolder('resources');

  if (!resourceFolder) return;

  var messageFolder = path.resolve(resourceFolder, 'locale');
  var messageFiles = fs.readdirSync(messageFolder);

  var rd = {};
  for (var i = 0; i < messageFiles.length; i++) {
    var fileName = messageFiles[i];
    var json = readSpringMessage(path.resolve(messageFolder, fileName));

    var locale = localFromFile(fileName);
    rd[locale] = json;
  }
  return rd;
}

function writeSpringMessage(filePath, json) {
  var messages = UTILS.jsonToKeyValue(json);
  fs.writeFileSync(filePath, messages, 'utf-8');
}

function localFromFile(filename) {
  if (!filename || filename.indexOf('messages') < 0 || filename.indexOf('.properties') < 0) return;

  var locale = filename.replace('messages', '').replace('.properties', '');
  if (locale.length == 0) {
    return 'en';
  } else {
    return locale.replace('_', '');
  }
}

function getParentsFolder(folderName, folder) {
  folder = folder != undefined ? folder : './';

  var p = path.resolve(folder);

  var currentFolder = path.basename(p);

  if (!p || p == '/') {
    return undefined;
  } else if (currentFolder == folderName) {
    return p;
  } else {
    return getParentsFolder(folderName, path.dirname(p));
  }
}

googleAPI.getAuth().then(function (clientAuth) {
  googleAPI
    .getFileData(clientAuth, LOCALE_FILE_ID)
    .then(function (data) {
      if (data) {
        fs.writeFileSync('./src/components/ui-text/whatap-locale.json', JSON.stringify(data, null, 2), 'utf-8');
      } else {
        console.log('스프레드시트의 헤더를 확인해주세요. (빈칸) en ja ko zh');
      }
    })
    .catch(function (err) {
      console.log('\x1b[31m');
      console.log('error has occured!');
      console.log(err);
      console.log('\x1b[37m');
    });
});