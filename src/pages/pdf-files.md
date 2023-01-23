The PDF file format (Portable Document File) was developed by Adobe with the goal of having a file format that could present documents with text and images in a way that is independent from operating system and software. PDF encapsulates information on the layout and fonts for the document, and it is a very popular file format for publishing documents.

It is also often used to publish data, as PDF files can contain tables as well. But the file format was not designed for this purpose: getting data out of pdf files is very difficult. This is because pdf lacks the concept of a table, the file only specifies where on the page every number and text in the table should be displayed.

You can select and copy text in a PDF file, but when you paste it into a tool like Excel, chances are high that you will not end up with nice and clean table to start working on the data.

<aside>
🔎 Take for example <a href="https://ec.europa.eu/eurostat/documents/2995521/14497757/2-29042022-AP-EN.pdf/664dc8bd-4460-46f6-69ea-04c1763abd28?t=1651154566195">this PDF file published by Eurostat</a>. Open it and try to select and copy-paste the tables in the file into Excel.

</aside>

Luckily, tools exist for extracting data from PDF files. Many of these tools are not free, but [Tabula](https://tabula.technology/) is an open source and free tool developed to extract PDF data (see also <span class='internal-link'>[Cleaning data: tools](cleaning-data-tools)</span>). For files that are not too large and that have consistent table layouts, Tabula works well.

If the data in a PDF is contained in images of tables (as can be the case for scanned documents, for example), Tabula will not be able to extract the data. In that case, extracting data is much harder and will require tools that have [optical character recognition](https://nl.wikipedia.org/wiki/Optical_character_recognition) (OCR). Excel has a “[Insert data from image](https://support.microsoft.com/en-us/office/insert-data-from-picture-3c1bb58d-2c59-4bc0-b04a-a671a6868fd7#ID0EAABAAA=iOS/Android)” function that can be of use in this situation, but this function is unfortunately only available on Mac, iOs and Android, and not on Windows.