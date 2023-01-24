A common data type mismatch are dates and timestamps not recognised as such, or the reverse: when certain character strings are mistaken for dates (Microsoft Excel is notorious for automatically converting different kinds of text and numbers into dates). When working with time series data, always make sure your date columns are correctly recognised as dates.

Dates can be formatted in many ways, which can create confusion and ambiguity. For example what date do you think 03/06/12 represents? Depending on where you live, you could read it as either 3 June 2012, 6 March 2012, 12 June 2003 or 6 December 2003. So make sure you know how the dates in your data are formatted, and that they are interpreted correctly by the software you use.

If you can choose the format of the dates yourself, the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard is a good choice. It uses 4 digits for the year and 2 digits for both the month and the day, in the format YYYY-MM-DD (for example 2012-06-03). Because this is a standard way of representing dates, many software programs will recognise dates in this format correctly. Another advantage of this format is that alphabetical sorting of dates in this format equals chronological sorting. This means you can use it in file names on your computer, for example, and get easy, chronological sorting for free.