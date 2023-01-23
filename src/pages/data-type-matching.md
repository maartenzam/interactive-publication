All <span class='internal-link'>[mismatched data types](data-type-mismatches)</span> (numbers, dates and timestamps not recognised as such) should be corrected. It is probably also worthwhile to investigate why the data type of a column wasn’t properly recognised, because it is a sign that something might be off in the values contained in the column.

Possible sources for the values in a numerical column not recognised correctly as numbers are:

- the data uses a different decimal sign than the one your data tool is using (dot instead of comma, or vice versa). Make sure that the decimal sign in the data is the same one as the one used by your software.
- the data contains strings (like “NA” or “null”) to encode missing data. It is best to just leave cells with missing data blank.
- the units of the numbers are stored together with the numbers themselves, like “21 euros” or “849 kg”. The units should best be stored in a separate column or specified in the column header or in the metadata. A similar problem can arise when string characters like “k” for thousands and “m” for millions are used. These should all be removed, and the numbers should all be standardised to the same units.
- the numbers contain non-numerical characters, like dots or spaces as thousand separators. Numerical data should not contain any characters like this.