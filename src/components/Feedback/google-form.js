const { googleFormsToJson } = require('react-google-forms-hooks')
const fs = require('fs')
const path = require('path')

const saveJsonToFile = (filename, json) => {
  const filePath = path.resolve(__dirname, filename)
  fs.writeFile(filePath, JSON.stringify(json), 'utf8', function (err) {
    if (err) throw err
  })
}

const run = async () => {
  const result = await googleFormsToJson(
    //'https://docs.google.com/forms/d/e/1FAIpQLSemcyCE9n_zq8rHzKWtuuywnzggYq9NeFsB4w3FwLSKI_v6iA/viewform'
    'https://docs.google.com/forms/d/e/1FAIpQLSe9AF5F2-1GSLxv2BJeC3Y1b9psRWcKETsxCV7JhWxjHnCSuw/viewform'
  )
  saveJsonToFile('./form.json', result)
}

run()