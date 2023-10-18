var Promise = require('promise');

function rowsToJson(data) {
  const defaultCol = 1;
  const rd = {}; // resultData
  if (!data || data.length < 1) return undefined;

  const header = data[0];
  if (header[0] && header[0].toUpperCase() != 'ID') return undefined;

  const colCount = header.length;

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    for (let j = 1; j < colCount; j++) {
      if (['ID', 'en', 'ko', 'ja', 'zh', 'service_id'].includes(data[0][j])) {
        const headerName = header[j].trim();
        const value = row[j];
        if (!rd[headerName]) rd[headerName] = {};
        if (!value || value.length < 1) {
          rd[headerName][row[0]] = row[defaultCol];
        } else {
          rd[headerName][row[0]] = value;
        }
      }
    }
  }
  return rd;
}

function jsonToKeyValue(json) {
  var str = '';
  for (var k in json) {
    var v = json[k];
    str += k + '=' + json[k] + '\n';
  }
  return str;
}

function keyValueToJson(contents) {
  if (!contents || contents.constructor != String) return;

  var lines = contents.split('\n');
  var rd = {};
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();

    if ((line[0] && line[0] == '#') || line.indexOf('=') < 1) continue;

    var kv = line.split('=');
    rd[kv[0].trim()] = kv[1].trim();
  }
  return rd;
}

function jsonToArray(json) {
  var arr = [];
  var localeKeys = ['ID'];
  var defaultLocale = json['en'];
  var values = [];

  var IDS = {};

  for (var k in json) {
    localeKeys.push(k);
    values.push(json[k]);
  }

  arr.push(localeKeys);

  for (var key = 1; key < localeKeys.length; key++) {
    var localeData = json[localeKeys[key]];
    for (var k in localeData) {
      IDS[k] = true;
    }
  }

  for (var id in IDS) {
    var ar = [id];
    for (var i = 1; i < localeKeys.length; i++) {
      var localeKey = localeKeys[i];
      var v = json[localeKey][id];
      if (!v) {
        ar.push(defaultLocale[id]);
      } else {
        ar.push(v);
      }
    }
    arr.push(ar);
  }
  return arr;
}

module.exports = {
  keyValueToJson: keyValueToJson,
  jsonToKeyValue: jsonToKeyValue,
  rowsToJson: rowsToJson,
  jsonToArray: jsonToArray,
};