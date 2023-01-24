Providing a table with the numbers contained in a visualisation is a good way to make the visualisation accessible: screen readers are able to traverse the cells in a HTML `<table>`.

HTML tables can be optimised for accessibility by implementing the following options:

- add a `<caption>` element as the first child of the `<table>` element. This will be read out by screen readers, so users can decide if the content of the table is relevant to them and start to traverse the table.
- avoid nested tables (`<table>` elements within other `<table>` elements). This makes the HTML confusing and less accessible for screen readers.
- use `<th>` (table header) instead of `<td>` (table data) elements for cells containing the column or row headers. To associate a header with either a row or a column, set the `role` attribute to “row” or “column”. This associates the headers to the cell values in each column or row, which helps screen readers reading the table values.

<aside>
🔗 <a href='https://officepublicationseu.github.io/accessible-html-dataviz/accessible-tables.html'>The <code>accessible-tables.html</code> page</a> contains a <code>table</code> with the values displayed on a chart. Try navigating it with your keyboard and ChromeVox. <a href='https://github.com/officepublicationseu/accessible-html-dataviz/blob/master/accessible-tables.html'>Check the source HTML of the page</a>.
</aside>