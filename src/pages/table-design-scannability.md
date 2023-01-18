 A common reason to publish data as a table, is that tables are much more effective for looking up values, across multiple dimensions, than visualisations are. And in order to allow for looking up values efficiently, tables should be quickly scannable. This has some consequences for their design.

## Colours

Colours should be used sparingly: any colour should help the reader complete the task of looking up values, and not distract the reader.

The table header contains the necessary information to interpret the data in a table correctly. So stressing the table header by giving it some (background)colour tells the reader that the table header is different than the rows below it containing the table data.

When some rows are more important than others, giving the text and/or the background of the cells some colour will help highlighting them.

## Alignment

Scanning a column of text is the easiest when the text is left-aligned, so that all words start at the same horizontal position. So columns containing text values should be aligned left.

Comparing numbers is easiest when they are aligned to the right, so columns containing numbers should be aligned right.

The formatting of numbers should be consistent within a colum. So all numbers should have the same rounding and amount of significant digits, and have no or consistent pre- or suffixes (like currency symbols). Together with the use of tabular numerals (in wich every number character has the same width), this guarantees that numbers are printed nicely aligned, so that comparing them becomes easy. See the <span class='internal-link'>[fonts for numbers](fonts-for-numbers)</span> and the <span class='internal-link'>[number formatting](number-formatting)</span> pages for more details.

To ensure that column names in the table header are easily identifiable for each column, the column header should copy the alignment of the data it contains (left for text, right for numbers).

## Spacing

Column widths should reflect the data they contain: columns with cells that only contain a limited amount of characters should be narrower than columns with a lot of text. If possible, cell content should not flow over multiple lines, so that every row in the table has the same height.

Vertical spacing between the text in each row should strike a balance between having enough whitespace to not overcrowd the table and keep the table compact so that it remains scannable. When there are groups of rows belonging together, the distinction between the groups can be emphasised by increasing the margin between the group.

## Ordering

If the main column for looking up values is a text column, it should be the first column in the table, and be sorted in alphabetical order. When the main column is a number column, the rows in the table should be ordered according to the values in that column, and that column should be the first or second column in the table. In case it is the second column, the first column should contain the name or id of the row items.