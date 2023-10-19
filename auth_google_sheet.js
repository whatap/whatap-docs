var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');

var UTILS = require('./utils');

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/sheets.googleapis.com-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
// var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
//     process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = 'sheets.googleapis.com-whatap-locale.json';

var Promise = require('promise');

var getAuth = function () {
  return new Promise(function (resolve, reject) {
    fs.readFile('client_secret.json', 'utf-8', function processClientSecrets(err, content) {
      if (err) {
        console.log('Error loading client secret file: ' + err);
        reject(err);
        return;
      }
      authorize(JSON.parse(content), function (auth) {
        resolve(auth);
      });
    });
  });
};

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function (err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', function (code) {
    rl.close();
    oauth2Client.getToken(code, function (err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
// /https://docs.google.com/a/whatap.io/spreadsheets/d/1lsz-sQpyZCf6fAYCQSg4YPMkw2fniY4Z6zmbOKd4wfk/edit?usp=sharing

function getFileData(auth, fileId) {
  var sheets = google.sheets('v4');
  return new Promise(function (resolve, reject) {
    sheets.spreadsheets.values.get(
      {
        auth: auth,
        spreadsheetId: fileId,
        range: 'locale!A1:Z10000',
      },
      function (err, response) {
        if (err) {
          reject(err);
          return;
        }
        // fs.writeFileSync('./src/components/ui-text/data.json', JSON.stringify(response.values, null, 2), 'utf-8');
        var json = UTILS.colsToJson(response.values);
        resolve(json);
      },
    );
  });
}

function writeFileData(authClient, fileId, range, values) {
  var sheets = google.sheets('v4');

  return new Promise(function (resolve, reject) {
    var request = {
      spreadsheetId: fileId,
      range: range,
      valueInputOption: 'RAW',
      resource: {
        values: values,
      },
      auth: authClient,
      // values: values
    };

    sheets.spreadsheets.values.update(request, function (err, response) {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      resolve(JSON.stringify(response, null, 2));
      // TODO: Change code below to process the `response` object:
      // console.log(JSON.stringify(response, null, 2));
    });
  });
}

function getSheetProperties(authClient) {
  var sheets = google.sheets('v4');

  var request = {
    // The spreadsheet to request.
    spreadsheetId: fileId, // TODO: Update placeholder value.

    // The ranges to retrieve from the spreadsheet.
    ranges: [], // TODO: Update placeholder value.

    // True if grid data should be returned.
    // This parameter is ignored if a field mask was set in the request.
    includeGridData: false, // TODO: Update placeholder value.

    auth: authClient,
  };

  sheets.spreadsheets.get(request, function (err, response) {
    if (err) {
      console.log(err);
      return;
    }

    // TODO: Change code below to process the `response` object:
    // console.log(JSON.stringify(response, null, 2));
  });
}

module.exports = {
  getFileData: getFileData,
  writeFileData: writeFileData,
  getAuth: getAuth,
};