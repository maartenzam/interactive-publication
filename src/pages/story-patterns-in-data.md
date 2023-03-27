Some patterns in data have a natural storytelling capacity. If one of these patterns is present in your data, chances are that your story or message will be built around it. Visualisations should show and highlight these patterns in the clearest way possible.

The most obvious pattern in data with storytelling capacity is **evolution over time**. Things that change over time reveal something about how the world we are living in is changing. These changes may affect our lives, and we might have to react to them. That is the reason line charts are so ubiquitous: they are excellent devices for showing changes over time.

![ ](Patterns%20for%20data%20driven%20stories%2034fe0220a7d64297ae6ccf534303e18f/hockey-stick-chart-time.png)

A version of the famous “hockey stick chart”, showing the recent observed global warming in a historical context. Source: ['Widespread and Severe.' The Climate Crisis Is Here, But There’s Still Time to Limit the Damage](https://time.com/6088531/ipcc-climate-report-hockey-stick-curve/)

Related to evolutions over time are **intersections**: moments in timey at which lines in a line chart cross each other. At those intersections, the values of one category become bigger than the values of another category. As a result, the categories have switched and a new situation has emerged in which the smaller category became bigger than the one that was previously the biggest.

![The win probabilities of Donald Trump and Hillary Clinton during election night visualised with 2 crossing lines](Patterns%20for%20data%20driven%20stories%2034fe0220a7d64297ae6ccf534303e18f/intersection-trump-clinton.png)

Source: [Live Presidential Forecast](https://www.nytimes.com/elections/2016/forecast/president), nytimes.com

Some chart types can show rankings, and are therefore good choices to show intersections. The chart below shows how one-person households became the most common household type in the United States.

![A bump chart showing that the most common household in the US are one person households](Patterns%20for%20data%20driven%20stories%2034fe0220a7d64297ae6ccf534303e18f/flowingdata-bumpchart.png)

Source: [Change in Common Household Types in the U.S.](https://flowingdata.com/2022/03/01/change-in-common-household-types-in-the-u-s/), flowingdata.com

The ebb and flow of things overtaking other things can be very engaging, as the below “racing bar chart” shows.

<video src="https://next-media-api.ft.com/renditions/15530111823550/1280x720.mp4" width="100%" controls/>

Source: [Bar chart race: the most populous cities through time](https://www.ft.com/video/83703ffe-cd5c-4591-9b4f-a3c087aa6d19), ft.com

**Correlations** are another powerful storytelling patters. They show us how something changes when something else changes, so they make the relationship between things apparent. When the relationship is a causal one, visualisations can show the cause and effect of things.

![A heatmap showing the incidence of measles before and after the introduction of the vaccine](Patterns%20for%20data%20driven%20stories%2034fe0220a7d64297ae6ccf534303e18f/wallstreetjournal-correlation.png)

The incidence of measles in the United States, and the effect of vaccine introduction. Source: [Battling Infectious Diseases in the 20th Century: The Impact of Vaccines](https://graphics.wsj.com/infectious-diseases-and-vaccines/), graphics.wsj.com

The most common chart type to visualise correlations are scatterplots. But they have to be used carefully, because people will read a causal relationship where there might not be one, as the below chart (with real data!) shows.

![A scatter plot of countries showing the clear correlation between the per capita chocolate consumption and the number of Nobel laureates per 10 million inhabitants](Patterns%20for%20data%20driven%20stories%2034fe0220a7d64297ae6ccf534303e18f/1101321-chocolate_countries_large.jpg)

Can you explain the correlation between the per capita chocolate consumption and number of Nobel laureates in countries? Source: [Chocolate Consumption, Cognitive Function, and Nobel Laureates](https://www.biostat.jhsph.edu/courses/bio621/misc/Chocolate%20consumption%20cognitive%20function%20and%20nobel%20laurates%20(NEJM).pdf)

**Outliers**, items with extreme high or extreme low values automatically grab attention and trigger curiosity. Outliers are special data points, different from all other data points, and as a reader you want to know what is special about them and how their extreme values can be explained.

What strikes your eye in the chart below, and what data point would you like to see explained?

![A line chart showing the number of births per 1.000 people in Japan, showing a sudden dip in 1966](Patterns%20for%20data%20driven%20stories%2034fe0220a7d64297ae6ccf534303e18f/birth-rate-japan-ourworldindata.png)

[Explanation](https://blogs.worldbank.org/opendata/curse-fire-horse-how-superstition-impacted-fertility-rates-japan). Source: [ourworldindata.org](https://ourworldindata.org/grapher/birth-rate-the-number-of-births-per-1000-people-in-the-population?time=1950..latest&country=~JPN)

Outliers are interesting data points to build a story around, but sometimes the story is not about the outliers. In those cases, they hinder the view on the other data points. They can be pointed out and removed to get a better view on the rest of the data.

![A dot plot of the GDP/capita of EU regions, with an arrow pointing to the Inner London - West region, which has a much higher GDP than other regions](Patterns%20for%20data%20driven%20stories%2034fe0220a7d64297ae6ccf534303e18f/outlier-eu-regions.png)

Source: [Why Budapest, Warsaw, and Lithuania split themselves in two](https://pudding.cool/2019/04/eu-regions/), pudding.cool

![The same chart as above, but with the outlier removed](Patterns%20for%20data%20driven%20stories%2034fe0220a7d64297ae6ccf534303e18f/eu-regions-outlier-removed.png)

Source: [Why Budapest, Warsaw, and Lithuania split themselves in two](https://pudding.cool/2019/04/eu-regions/), pudding.cool

![A line chart titled Terrorism Killed More Westerners in the 1970s and 1980s, with an outlier for the year 2001](Patterns%20for%20data%20driven%20stories%2034fe0220a7d64297ae6ccf534303e18f/remove-outlier-nytimes.png)

Source: [Is Terrorism Getting Worse? In the West, yes. In the World, No.](https://www.nytimes.com/2016/08/16/upshot/is-terrorism-getting-worse-in-the-west-yes-in-the-world-no.html), nytimes.com

When data contains information about how something is composed out of **components**, the breakdown into these subcomponents is also a great storytelling pattern. Classical chart types to show how parts add up to a whole include pie charts and stacked area charts. But many other kinds of visualisations exist to show components.

![Grouped bubbles showing the US departments and their budgets](Patterns%20for%20data%20driven%20stories%2034fe0220a7d64297ae6ccf534303e18f/components-budget.png)

Source: [Four Ways to Slice Obama’s 2013 Budget Proposal](https://archive.nytimes.com/www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html), nytimes.com

When subcomponents in their turn are composed of smaller units, the data has a multi-level hierarchical structure. Specific chart types exist to visualise this kind of data.

![A Voronoi treemap showing languages and the number of people that speak them](Patterns%20for%20data%20driven%20stories%2034fe0220a7d64297ae6ccf534303e18f/world-of-languages-scmp.png)

Source. [In graphics: a world of languages - and how many speak them](https://www.scmp.com/infographics/article/1810040/infographic-world-languages), scmp.com