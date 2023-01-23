Less common in data visualisation than <span class='internal-link'>[CSV](csv-files)</span> and <span class='internal-link'>[XLSX](excel-files)</span> files, but still important for exchanging data, is the XML format. XML stands for Extensible Markup Language, and it was designed to be both readable by humans as well as by computers.

Like CSV files, XML files can be opened and edited with any text editor. XML contains elements which each have a start and end tag (this is called the markup), with the element content embedded in between them.

```xml
<note>
  <date>2015-09-01</date>
  <hour>08:30</hour>
  <to>Tove</to>
  <from>Jani</from>
  <body>Don't forget me this weekend!</body>
</note>
```

From the example XML above, you can see that XML data is not tabular. XML data is hierarchical, with parent elements containing child elements.

Microsoft Excel can [import](https://support.microsoft.com/en-us/office/import-xml-data-6eca3906-d6c9-4f0d-b911-c736da817fa4) and [export](https://support.microsoft.com/en-us/office/export-xml-data-0b21f51b-56d6-48f0-83d9-a89637cd4360) XML, but because the structure of data stored in an XML file can be complex, importing XML is not straightforward.

Examples of XML are the [data exported from the iPhone Health app](https://support.apple.com/en-gb/guide/iphone/iph5ede58c3d/ios#:~:text=Share%20your%20health%20and%20fitness%20data%20in%20XML%20format&text=data%20between%20apps.-,Tap%20your%20profile%20picture%20or%20initials%20at%20the%20top%20right,method%20for%20sharing%20your%20data.) and the [GPX file format](https://en.wikipedia.org/wiki/GPS_Exchange_Format) used by GPS devices. HTML, the language for displaying web pages in a browser is also based on XML.

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```