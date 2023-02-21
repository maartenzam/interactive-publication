const PublicGoogleSheetsParser = require('public-google-sheets-parser')
const fs = require('fs');

const spreadsheetId = '1hP54K7fcr5643k-VlTKBpRx8wU1Mom9I7gNuKhWGtbE'

// 1. You can pass spreadsheetId when parser instantiation
const parser = new PublicGoogleSheetsParser(spreadsheetId)

function getPages(pages, module){
  return pages.filter(d => d.m1 == module).map(d => { return {id: d.slug}})
}

function getModules(pages, training){
  return [...new Set(pages.filter(d => d.t1 == training).map(d => d.m1))].map(d => {return {id: d, children: getPages(pages, d)}})
}

parser.parse(spreadsheetId, 'toc').then((items) => {
  fs.writeFile('src/lib/data/pages.json', JSON.stringify(items), err => {
    if (err) {
      console.error(err);
    }
    console.log('pages.json saved')
  })
  
  let toc = [...new Set(items.map(d => d.t1))]
    .map(d => {return {id: d, children: getModules(items, d)}})
  fs.writeFile('src/lib/data/toc.json', JSON.stringify(toc), err => {
    if (err) {
      console.error(err);
    }
    console.log('toc.json saved')
  })
})