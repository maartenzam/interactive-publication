To make a line chart of the employment rate by country, many visualisation tools expect your data to look like this:

| Country | 2017 | 2018 | 2019 | 2020 | 2021 |
| --- | --- | --- | --- | --- | --- |
| Belgium | 69,8 | 71 | 71,8 | 71,5 | 71,9 |
| Bulgaria | 71,4 | 72,4 | 75 | 73,4 | 73,2 |
| Czechia | 78,4 | 79,8 | 80,2 | 79,6 | 79,8 |
| Denmark | 77,8 | 78,7 | 79,4 | 78,8 | 79,8 |

However, you might notice that the data you downloaded from the source is structured differently. It might look like this:

| Country | Year | Value |
| --- | --- | --- |
| Belgium | 2017 | 69,8 |
| Belgium | 2018 | 71 |
| Belgium | 2019 | 71,8 |
| Belgium | 2020 | 71,5 |
| Belgium | 2021 | 71,9 |
| Bulgaria | 2017 | 71,4 |
| Bulgaria | 2018 | 72,4 |
| Bulgaria | 2019 | 75 |
| Bulgaria | 2020 | 73,4 |
| Bulgaria | 2021 | 73,2 |
| Czechia | 2017 | 78,4 |
| Czechia | 2018 | 79,8 |
| Czechia | 2019 | 80,2 |
| Czechia | 2020 | 79,6 |
| Czechia | 2021 | 79,8 |
| Denmark | 2017 | 77,8 |
| Denmark | 2018 | 78,7 |
| Denmark | 2019 | 79,4 |
| Denmark | 2020 | 78,8 |
| Denmark | 2021 | 79,8 |

Both tables contain exactly the same data, but the tables are structured very differently.

The first table is using the **wide data format**. This is a common structure in spreadsheets, and is very convenient to look up values: you quickly know where to look in the table when you want to know what the employment rate in Bulgaria in 2019 was, for example.

With this format, it is also easy to calculate the average employment rate for each country: you can add a column to the right of the table to calculate it with a spreadsheet formula. In the same manner you can add a row at the bottom of the table to calculate the average employment rate over all countries by year.

The wide format is also efficient: it does not contain cells with the same values.

But the wide format has its limitations. What if you would like to publish employment data for men and for women separately, and maybe also break the data down by age class? With the wide format, you need to create a separate table for each combination of gender and age, which is not handy to work with.

The **long data format** has repeated values (in the table above each country name is present 5 times, and each year 4 times), is less effective for looking up values visually, and requires some work if you want to calculate averages. But it has a major advantage over the wide format: if the data needs to be broken down by gender and age, you can just add these columns to your data:

| Country | Year | Value | Gender | Age |
| --- | --- | --- | --- | --- |
| Belgium | 2017 | 69,8 | M | 18-30 |
| Belgium | 2018 | 71 | M | 18-30 |
| Belgium | 2019 | 71,8 | M | 18-30 |
| Belgium | 2020 | 71,5 | M | 18-30 |
| Belgium | 2021 | 71,9 | M | 18-30 |
| Belgium | 2017 | 71,4 | F | 18-30 |
| Belgium | 2018 | 72,4 | F | 18-30 |
| Belgium | 2019 | 75 | F | 18-30 |
| Belgium | 2020 | 73,4 | F | 18-30 |
| Belgium | 2021 | 73,2 | F | 18-30 |
| Belgium | 2017 | 78,4 | M | 30-50 |
| Belgium | 2018 | 79,8 | M | 30-50 |
| Belgium | 2019 | 80,2 | M | 30-50 |
| Belgium | 2020 | 79,6 | M | 30-50 |
| Belgium | 2021 | 79,8 | M | 30-50 |
| Belgium | 2017 | 77,8 | F | 30-50 |
| Belgium | 2018 | 78,7 | F | 30-50 |
| Belgium | 2019 | 79,4 | F | 30-50 |
| Belgium | 2020 | 78,8 | F | 30-50 |
| Belgium | 2021 | 79,8 | F | 30-50 |
| Bulgaria | ... |  |  |  |

This table is of course a little wider than the long table that did not contain the gender and age breakdown. But it is still called a 'long' table because each row contains a value for one numerical variable only. In this example: the value for the employment rate. The other cells in each row contain values for the dimensions country, year, gender and age, specifying to which value of the respective dimension the employment rate refers to. These dimensions are categorical variables that can be used to break down the values of the numerical variable.

Compared to the wide format, the long format data has column names that “make sense”: they describe what they contain. In the wide format, the column names “2017”, “2018”, ... do not describe what they contain: they are actually part of the data.

The long data format reflects how data is stored in databases. It is a format that is very machine readable, and it allows for easy data processing like filtering and aggregating over multiple dimensions.

### (Un)pivoting

Because the first two tables in this section contain the exact same data, they can be transformed into one another. The process of going from long data to wide data is called “pivotting” a table. You choose which one of the two dimensions (Country or Year) goes in the rows and which of them goes in the columns, and Excel (or any other spreadsheet or data analysis tool) will take care of putting the values in the right cells of the wide table. Pivotting a table in Excel is demonstrated in the [Working with data: cleaning data in practice]() LINK video.

Unpivoting data (going from wide to long format) is also possible but is less common and not straight forward in Excel.