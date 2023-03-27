Traditional bar charts only use the length of rectangles to encode numerical data. But rectangles have other visual properties that can be used to encode data.

The width of the bars can also be used to encode numerical values. This is especially useful when absolute numbers are combined with a rate of change, for example. The chart below shows total populations (width of the rectangles) and rate of population change (height of the rectangles) for EU member states (Malta not shown). The result is that the surface area of the rectangles represents the population growth in absolute numbers:

![A chart titled Shrinking and growing populations in the EU, with bars representing countries. The height of the rectangles is proportional to population growth rate and the width is proportional to the population size, so the surface area of each rectangle represents the growth or shrink of the population in absolute numbers](A%20deep%20dive%20into%20bar%20charts%20047791ead2e848bdb3d0afcd1bf2bd4a/population-rectangles.png)

Source: Maarten Lambrechts, CC BY SA 4.0

This technique can be combined with shifting the baseline of stacked bars to show a dichotomy in the categories. For example, the chart below shows the total amount of electricity production in European countries (width of the bars) and their share of clean electricity (the coloured area of the bars, above the 0% line).

![A chart titled 'How European countries generated electricity in 2018', with rectangles representing countries. The width of the rectangle is proportional to the total energy production, the coloured part of the rectangle is clean energy and the grey part of the rectangle is the conventional thermal energy](A%20deep%20dive%20into%20bar%20charts%20047791ead2e848bdb3d0afcd1bf2bd4a/electricity-bars-karim.png)

Source: [observablehq.com/@karimdouieb](https://observablehq.com/@karimdouieb/europe-electricity-production)

When both the width and height of stacked bars are used to encode data, and when both the x and y axis are percentages, the resulting chart is called a **Marimekko chart** or **mosaic plot**. In the chart below, the population distribution among age classes is represented by the bar widths, and the proportion of each vaccination status within each age group is represented by the height of the stacked bars.

![A stacked bar chart showing the vaccination rate in different age classes of the London population, with the width of the bars proportional to the number of people in each age class](A%20deep%20dive%20into%20bar%20charts%20047791ead2e848bdb3d0afcd1bf2bd4a/marimekko-vaccines-london.png)

Source: [data.london.gov.uk](https://data.london.gov.uk/dataset/coronavirus--covid-19--cases)