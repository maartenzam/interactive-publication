Missing values in data need to be identified, understood and dealt with before any further processing of the data.

There are numerous ways to store missing values in data. Values may be missing completely (like empty cells in a spreadsheet), they can consist of empty strings (””), special characters (NA, null) or impossible values (like -1 or -9999).

The value of 0 deserves special attention. Does it really mean 0, or is it maybe used as a replacement for missing data? Missing date values might be present in the data as January 1, 1900 or as January 1, 1970, so these dates are suspicious and might be an indication of missing values.  Make sure that you know how missing values in your data are stored, and that you are able to identify them.

Missing data can also be “hidden”. Take for example a time series data with monthly values. If the data for August would be missing, the data could look like this:

| Month | Value |
| --- | --- |
| January | 123 |
| February | 126 |
| March | 145 |
| April | 136 |
| May | 111 |
| June | 98 |
| July | 128 |
| August |  |
| September | 154 |
| October | 167 |
| November | 183 |
| December | 186 |

In the table above, the value for August is not hidden, and explicitly missing. This method of storing missing data is preferred over “hiding” missing data, like in the table below:

| Month | Value |
| --- | --- |
| January | 123 |
| February | 126 |
| March | 145 |
| April | 136 |
| May | 111 |
| June | 98 |
| July | 128 |
| September | 154 |
| October | 167 |
| November | 183 |
| December | 186 |

You also need to know why values are missing. Was the data never collected for the records with missing values? Or maybe the data is a result of joining 2 tables together, when not all records were available in both tables? Or maybe the column with missing data is the result of a calculation that generated an error for some rows in the data?

If you know why values are missing, you will have a better idea of how to handle them: should you filter them out, set them to 0 or some other value, or should you try to recover missing values from some additional data sources?