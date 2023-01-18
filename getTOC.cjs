const PublicGoogleSheetsParser = require('public-google-sheets-parser')
const fs = require('fs');

const spreadsheetId = '1hP54K7fcr5643k-VlTKBpRx8wU1Mom9I7gNuKhWGtbE'

// 1. You can pass spreadsheetId when parser instantiation
const parser = new PublicGoogleSheetsParser(spreadsheetId)

parser.parse(spreadsheetId, 'toc').then((items) => {
  fs.writeFile('src/lib/data/pages.json', JSON.stringify(items), err => {
    if (err) {
      console.error(err);
    }
    console.log('pages.json saved')
  })
})