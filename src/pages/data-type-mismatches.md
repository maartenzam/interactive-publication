In order to be processed correctly and prepared for visualisation, the data need to be in the correct type.

The most common mismatch between data types is numerical data being treated by software as text.

<p class='center'>
<img src='Pitfalls%20in%20data%20eb8fedacd9fb46a98a3c448baaa69495/textasnumber.png' alt='A screenshot showing a Microsoft Excel table with three numbers, and a generated warning with the words "Number Stored as Text" warning' class='max-600' />
</p>

Microsoft Excel generates a warning when it suspects numerical values are stored as text. Source: Maarten Lambrechts, CC BY SA 4.0

Common origins of this misinterpretation of numbers as text are 

- strings present among the numerical values in the column, like “NA” or “null”
- a misinterpretation of the decimal sign, for example when a dot is used when the software program expects a comma
- when numbers contain characters as a thousands separator (like a space in “100 250 000”)
- when the units of the values are added to the numbers in the same column, like “225 euro”
- when numbers are enclosed in quotation marks

Because performing mathematical calculations on text is not valid, you should make sure the numbers are correctly formatted and interpreted as numbers. If not, visualisations based on the data will result in errors, or will lead to unsuspected results.

The reverse can also happen. Administrative units usually have unique codes to identify them unambiguously. These codes should be treated as strings, but when these codes only consists of  numbers and when they start with a 0 (for example, the code for an administrative unit can be 037), software like Microsoft Excel will remove the leading 0 and convert the “037” string to the number 37. If you can, avoid all-numerical id codes that can have 0 as the first digit.