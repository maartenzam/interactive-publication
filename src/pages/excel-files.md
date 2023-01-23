Probably even more popular for exchanging data than CSV files, are spreadsheet files, of which Excel files are the most used. These files have an `.xlsx` extension (older files can have an `.xls` extension, and when a file contains macro’s, the extension is `.xlsm`).

XSLX files follow an open standard, and many other spreadsheet software like Apple Numbers, Google Sheets and OpenOffice can open and save XLSX files.

XLSX files and Excel are very versatile, and you can use them for much more than just exchanging data. But this flexibility comes at a cost when it comes to publishing and sharing data: data may not be properly structured and formatted in order to be used directly.

The website [clean-sheet.org](http://www.clean-sheet.org/) contains 10 helpful tips for structuring your data in  a spreadsheet. It was set up to help people publishing data in spreadsheets, but the tips are valuable for anyone who works with data in spreadsheets.

Below these 10 tips are listed.

1. **Don’t merge cells**. Sorting and other manipulations people may want to apply to your data assume that each cell belongs to one row and column.
2. **Don’t mix data and metadata** (for example the date of release of the data, or the name of the author) in the same sheet.
3. **The first row of a data sheet should contain column headers**. None of these headers should be duplicates or blank. The column header should clearly indicate which units are used in that column, where this makes sense.
4. **The remaining rows should contain data, one datum per row**. Don’t include aggregate statistics such as TOTAL or AVERAGE. You can put aggregate statistics in a separate sheet, if they are important.
5. **Numbers in cells should just be numbers**. Don’t put commas in them, or stars after them, or anything else. If you need to add an annotation to some rows, use a separate column.
6. **Use standard identifiers**: identify countries using [ISO 3166](http://en.wikipedia.org/wiki/ISO_3166) codes rather than names, and use  [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) for dates and times
7. **Don’t use only colour or other stylistic cues to encode information**. If you want to colour cells according to their value, use conditional formatting.
8. **Leave the cell blank if a value is not available**.
9. If you provide pivot tables, make sure the **underlying data is available separately too**.
10. If you also want to create a **human-friendly presentation of the data, do so by creating another sheet** in the same workbook and referencing the appropriate cells in the canonical data sheet.