One of the most used file formats to exchange data are CSV files. CSV stands for Comma Separated Values and it is a text based format, which means you can open and edit it with any text editor. CSV files have a `.csv` file extension.

```
Year,Make,Model
1997,Ford,E350
2000,Mercury,Cougar
```

CSV files contain data in a tabular format, with the first line of the file containing the column names separated by commas. Each subsequent line contains the values for a record in the data, also separated by comma’s.

CSV is an open file format, and most spreadsheet programs are able to open and export CSV files. Many data visualisation tools also accept the format as input.

However, the CSV file format is not standardised and some variations exist. Because in many countries, including many European ones, the comma is used as the decimal sign for numbers, a semicolon “;” is used as the delimiter instead of a comma “,”. This can create some confusion, as most of these files still carry the `.csv` extension.

Other delimiters are used too: TSV files use tabs as the delimiter, for example. Most software programs that are able to import or export CSV files have an option to set the delimiter to be used.

Some pitfalls to watch out for when working with CSV files are:

- unequal number of commas between rows. If a record in a CSV file has a different number of commas than the first line containing the column names, many software will treat the file as corrupt.

```csv
Year,Make,Model
1997,Ford,E350,
2000,Mercury
```

- the above error can occur when a string value contains text that has the delimiter the file is using in it. For this reason, the content of cells containing text should be enclosed in quotation marks.

```
Year,Make,Model,Description
1997,Ford,E350,A very fast car
2000,Mercury,Cougar,A slow, but very nice car
```

```
Year,Make,Model,Description
1997,"Ford","E350","A very fast car"
2000,"Mercury","Cougar","A slow, but very nice car"
```

- using quotation marks to enclose text can lead to invalid CSV files when the text contains quotation marks itself.
