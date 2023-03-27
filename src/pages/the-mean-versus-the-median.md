Most Americans believe that there is such a thing as a soulmate, as you can see from the chart below:

![A stacked bar chart showing the proportion of different demographics that believe in soulmates](Pitfalls%20in%20statistics%20averages,%20medians%20and%20distr%20cf84343854f04c8ebb618b372c38843e/yougov-soulmates-2021.png)

Source: [Do Americans believe in the idea of soulmates?](https://today.yougov.com/topics/lifestyle/articles-reports/2021/02/10/soulmates-poll-survey-data), yougov.com

We know this because YouGov, a survey and research company, polls around 15.000 Americans each year to ask them this question.

In 2015, the share of Americans believing in soulmates was a bit higher: 68 percent instead of 60 percent in 2021. But the most striking conclusion from the 2015 survey was that when the people believing in soulmates were asked the question “How many soulmates do you think a person can have?”, the average answer was... 3.741.057!

![A table showing the average number of soulmates that people answered someone can have for males and females and by age class](Pitfalls%20in%20statistics%20averages,%20medians%20and%20distr%20cf84343854f04c8ebb618b372c38843e/yougov-soulmates-mean.png)

Source: [YouGov](http://cdn.yougov.com/cumulus_uploads/document/210ti0sx4y/tabs_OPI_soulmates_20150330.pdf)

Clearly, some participants in the survey were taking this question not very seriously, and answered the question with extremely high numbers of soulmates (the only category where the mean didn’t ended up in the hundred thousands are the 65+).

This illustrates the high sensitivity of the mean for extreme values: these values have a significant effect on the mean. A classical way to explain this is the following. Imagine you are sitting in a bar with 2 friends, and all 3 of you have a normal income. But suddenly Elon Musk walks into the bar. What happens to the mean income of the people in the bar? The mean income of the people in the bar is now several millions of dollars. But concluding anything about the income of you and your 2 friends based on this mean income does not make any sense: Musk’s income has completely skewed the average income.

A better metric to summarise how many soulmates Americans think you can have (or to summarise the income of the 3 friends plus Elon Musk in the bar), is the median. The median is the middle value when all values are ranked from low to high (or vice versa). The way the median is calculated makes it much less sensitive to extreme values.

We can see that from the median of the answers to the soulmates question:

![The same table as above, but with a row added with the medians. For all demographics, the median is 1 or 2](Pitfalls%20in%20statistics%20averages,%20medians%20and%20distr%20cf84343854f04c8ebb618b372c38843e/yougov-soulmates-medians.png)

Source: [YouGov](http://cdn.yougov.com/cumulus_uploads/document/210ti0sx4y/tabs_OPI_soulmates_20150330.pdf)

Looking at the median of the number of soul mates one can have, all demographic groups agree that you can have 2, except for the younger people who think you can only have one.

The full results for this survey question below show that the average value for the “Northeast” region is even negative! The median value is still 1.

![A table showing more demographics, like white, black and hispanic, and a breakdown by region](Pitfalls%20in%20statistics%20averages,%20medians%20and%20distr%20cf84343854f04c8ebb618b372c38843e/yougov-soulmates-allresults.png)

Source: [YouGov](http://cdn.yougov.com/cumulus_uploads/document/210ti0sx4y/tabs_OPI_soulmates_20150330.pdf)

So whenever your data contains outliers (extreme high or low values), using the median instead of the mean might make more sense because it is less sensitive to these outliers.

An often heard argument against the median, is that many people don’t know what the median is and how it is calculated, while most people are familiar with the concept of an average value. But the median lends itself very well to being explained visually: it is the value for which half of the values are above and half of the values are below.

<iframe src='https://graphics.axios.com/2019-04-06-occupation-demographics/index.html' width='100%' height='700px' style='border: none;'></iframe>

_Source: [The millennials who are making it](https://www.axios.com/the-oldest-and-youngest-jobs-in-the-us-millennials-d9738704-4c84-4208-8f15-8d997db170ac.html), axios.com_