Tidying data is the practice of turning untidy data into tidy data, and is a necessary step in the preparation of data visualisation based on the Grammar of Graphics. Below are some of the more common operations for tidying data.

## Separating data

This table contains 2 variables in the rate column:

<div style="overflow-x:auto;">

| country | year | rate |
| --- | --- | --- |
| Belgium | 2020 | 14.444/11.522.440 |
| Belgium | 2021 | 14.791/11.554.767 |
| Bulgaria | 2020 | 23.128/6.916.548 |
| Bulgaria | 2021 | 22.305/6.951.482 |
| Czechia | 2020 | 8.610/10.494.836 |
| Czechia | 2021 | 8.990/10.693.939 |

</div>

To make the table tidy, the values in the rate column need to be split into 2 new columns. This operation is often called **separating** or **spreading** a column into new columns. In order to separate or spread a column, you need to provide the character (or characters) that are used as the separator between the values in the column. In this case, the separator is the forward slash “/”.

After separating the values in a column, you need to give the newly created columns new column names (which are the variable names of the created tidy data set).

## Making data wider

The table below is untidy, because the `count` column contains the values for 2 variables (`cases` and `population`). 

<div style="overflow-x:auto;">

| country | year | type | count |
| --- | --- | --- | --- |
| Belgium | 2020 | cases | 14.444 |
| Belgium | 2020 | population | 11.522.440 |
| Belgium | 2021 | cases | 14.791 |
| Belgium | 2021 | population | 11.554.767 |
| Bulgaria | 2020 | cases | 23.128 |
| Bulgaria | 2020 | population | 6.916.548 |
| Bulgaria | 2021 | cases | 22.305 |
| Bulgaria | 2021 | population | 6.951.482 |
| Czechia | 2020 | cases | 8.610 |
| Czechia | 2020 | population | 10.494.836 |
| Czechia | 2021 | cases | 8.990 |
| Czechia | 2021 | population | 10.693.939 |

</div>

To make the data tidy, the values in the `count` column need to be organised in two columns, based on the values in the type column. This operation is called **making data wider**, or **pivot data wider**.

## Making data longer

Consider the following untidy data table:

<div style="overflow-x:auto;">

| country | 2020 | 2021 |
| --- | --- | --- |
| Belgium | 14.444 | 14.791 |
| Bulgaria | 23.128 | 22.305 |
| Czechia | 8.610 | 8.990 |

</div>

This table is untidy, because the 2020 and 2021 column names are values of the `year` variable, so this variable is spread over multiple columns. The tidy version of this table looks like this:

<div style="overflow-x:auto;">

| country | year | cases |
| --- | --- | --- |
| Belgium | 2020 | 14.444 |
| Bulgaria | 2020 | 23.128 |
| Czechia | 2020 | 8.610 |
| Belgium | 2021 | 14.791 |
| Bulgaria | 2021 | 22.305 |
| Czechia | 2021 | 8.990 |

</div>

The operation of taking the names of multiple columns and “collapsing” them into a single column (in this case this is the `year` column) and putting the values of the original columns into another column (this is the `cases` column here) is called **making data longer**, **pivotting data longer** or **unpivotting data**).

This operation usually results in tables that are longer (with more rows, and less columns) than the original table. You can read more about wide and long data in <span class='internal-link'>[Wide versus long data](wide-versus-long-data)</span>.

## Transposing data

Below is another example of an untidy data table:

<div style="overflow-x:auto;">

| country | Belgium | Belgium | Bulgaria | Bulgaria | Czechia | Czechia |
| --- | --- | --- | --- | --- | --- | --- |
| year | 2020 | 2021 | 2020 | 2021 | 2020 | 2021 |
| cases | 14.444 | 14.791 | 23.128 | 22.305 | 8.610 | 8.990 |
| population | 11.522.440 | 11.554.767 | 6.916.548 | 6.951.482 | 10.494.836 | 10.693.939 |

</div>

This table is untidy, because it has the variables as rows and the observations in the columns, instead of vice versa. The operation to make this data table tidy is called **transposing** a table. Transposing a table will make rows out of the columns, and columns out of the rows.