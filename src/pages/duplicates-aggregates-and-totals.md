Duplicate rows in your data (rows containing the exact same values for all columns) are also suspicious. The same is true for a column containing unique id numbers that still occur more than once. So check that unique id’s are indeed unique, and when they are not or when you find duplicate rows in your data, you should investigate why this is the case before proceeding.

A special case of duplication is when aggregate values are mixed into data tables containing the raw data. For example, a table could contain numbers for males and for females, but also total values for males and females combined.

| Country | Sex | Number |
| --- | --- | --- |
| Belgium | Female | 1456 |
| Luxembourg | Female | 256 |
| Belgium | Male | 1567 |
| Luxembourg | Male | 244 |
| Belgium | Total | 3023 |
| Luxembourg | Total | 500 |

People overlooking the total values in the data might try to calculate the totals themselves by summing the “Number” column, which would result in doubling the actual numbers.

The same error can occur when the total value for the EU27 is contained in a dataset containing the values for the 27 member states. To avoid this mistake, it is best not to mix unaggregated and aggregated data together.