When it is important to be able to compare between the values represented by the slices of a pie chart, a traditional bar chart works better than a pie.

![Maarten Lambrechts, CC BY SA 4.0](A%20deep%20dive%20into%20pie%20charts%208f7a2fa9981a492ebaaad63e57d36d6e/pies.png)

![Maarten Lambrechts, CC BY SA 4.0](A%20deep%20dive%20into%20pie%20charts%208f7a2fa9981a492ebaaad63e57d36d6e/bars.png)

The same data visualised as pie charts and as bar charts. Comparing the lengths of the bars is much easier than comparing the sizes of the slices of the pies. Maarten Lambrechts, CC BY SA 4.0

But what if the part-to-whole aspect of the data is more important than comparing between all values? When the guidelines described above in this module are respected, a pie chart can work just fine. Research has shown that the pie chart’s little nephew, the **donut chart**, works just as well for this purpose.

<p class='center'>
<img src='A%20deep%20dive%20into%20pie%20charts%208f7a2fa9981a492ebaaad63e57d36d6e/donut-chart2x.png' alt='A donut chart' class='max-600' />
</p>

A donut chart. Source: Maarten Lambrechts, CC BY SA 4.0

Simple **stacked bar charts** have shown to be less performant in estimating the share of each part in the total, due to the shifting baseline problem described in the <span class='internal-link'>[stacked bars](stacked-bars)</span>. So for showing proportions of a whole, these should be avoided.

Pie charts cannot deal with negative values. So if you would like to show how a total is composed as the cumulative sum of subcomponents, including subcomponents with negative values, a **waterfall chart** is probably a good option. It shows a starting value, the amounts of added positive values and subtracted negative values and the resulting final value.

![A waterfall chart showing the growth and shrink of the EU’s territory over the years. Source: [@Arnold_Platon](https://twitter.com/Arnold_Platon/status/1014252269557239808)](A%20deep%20dive%20into%20pie%20charts%208f7a2fa9981a492ebaaad63e57d36d6e/waterfall-chart-eu-arnold-platon.jpeg)

A waterfall chart showing the growth and shrink of the EU’s territory over the years. Source: [@Arnold_Platon](https://twitter.com/Arnold_Platon/status/1014252269557239808)

Probably the best alternative to pie charts are **waffle charts**. Instead of slices of a pie, waffle charts show the proportion of categories in the data as coloured cells arranged in a grid.

The cells are usually square, and a 10 by 10 grid makes it easy to read values from a waffle chart.

![Waffle charts showing voter turnout in EU member states. Source: [@Arnold_Platon](https://twitter.com/Arnold_Platon/status/1014252269557239808)](A%20deep%20dive%20into%20pie%20charts%208f7a2fa9981a492ebaaad63e57d36d6e/waffle-chart-arnold-platon.jpg)

Waffle charts showing voter turnout in EU member states. Source: [@Arnold_Platon](https://twitter.com/Arnold_Platon/status/1014252269557239808)

Waffle charts can also be used to show absolute numbers instead of percentages. When each cell represents one item in the data, a chart like this is sometimes called a **unit chart**.

![Source: [github.com/hrbrmstr/waffle/blob/master/README.md](https://github.com/hrbrmstr/waffle/blob/master/README.md)](A%20deep%20dive%20into%20pie%20charts%208f7a2fa9981a492ebaaad63e57d36d6e/waffle-bars-1.png)

Source: [github.com/hrbrmstr/waffle/blob/master/README.md](https://github.com/hrbrmstr/waffle/blob/master/README.md)

A last alternative to pie charts, are **tree maps**. Tree maps are mainly used to show hierarchical data (see <span class='internal-link'>[Visualising hierarchies](visualising-hierarchies)</span>), but they can just as well be used to show categories and their numerical values.

![Source: [Managing plastic and food waste for a sustainable future](https://datatopics.worldbank.org/sdgatlas/goal-12-responsible-consumption-and-production/), Sustainable Development Goals Atlas 2020, World Bank](A%20deep%20dive%20into%20pie%20charts%208f7a2fa9981a492ebaaad63e57d36d6e/treemap-waste-yaryna.jpg)

Source: [Managing plastic and food waste for a sustainable future](https://datatopics.worldbank.org/sdgatlas/goal-12-responsible-consumption-and-production/), Sustainable Development Goals Atlas 2020, World Bank