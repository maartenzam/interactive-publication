The size of your data, expressed in the number of rows of the corresponding data table, also determines what the optimal chart type should be.

If, instead of plotting the life expectancy of the 27 EU member states, you would like to visualise the life expectancy for all countries in the world, then a bar chart will not work very well, for example. Instead of a bar chart, you could consider using a dot plot or a barcode plot. They pack more data in less pixels, so they have a higher data density than bar charts.

![An example of a dot plot, showing the life expectancy of all countries worldwide. Source: Maarten Lambrechts, CC-BY 4.0](Choosing%20the%20right%20chart%20type%20for%20your%20story%20534c70625e194b62ad932d52825d1579/dotplot.png)

An example of a dot plot, showing the life expectancy of all countries worldwide. Source: Maarten Lambrechts, CC-BY 4.0

A downside of these kind of charts is that they require interactivity to identify each country, because there is too little space available to put all country names in the visualisation.

Scatterplots are a data dense visualisation type too: plotting the data for 200 countries usually is not a problem. But what if you need to plot thousands instead of hundreds of points? Then overlapping dots can become a problem. 

![Source: Maarten Lambrechts, CC-BY 4.0](Choosing%20the%20right%20chart%20type%20for%20your%20story%20534c70625e194b62ad932d52825d1579/overplotting-bryant.png)

Source: Maarten Lambrechts, CC-BY 4.0

This can be tackled partially by reducing the size of the dots, or by giving them some transparency.

![Source: Maarten Lambrechts, CC-BY 4.0](Choosing%20the%20right%20chart%20type%20for%20your%20story%20534c70625e194b62ad932d52825d1579/still-overplotting-bryant.png)

Source: Maarten Lambrechts, CC-BY 4.0

But this technique also has its limits. When the number of dots is still too high and there is still too much overplotting in the dots, the data can be visually aggregated with a [hexagonal binned scatterplot](https://rawgraphs.io/learning/how-to-make-an-hexagonal-binning/)...

![Source: Maarten Lambrechts, CC-BY 4.0. Visualisation made with [RAWGraphs](https://rawgraphs.io/)](Choosing%20the%20right%20chart%20type%20for%20your%20story%20534c70625e194b62ad932d52825d1579/hexbins-bryant.png)

Source: Maarten Lambrechts, CC-BY 4.0. Visualisation made with [RAWGraphs](https://rawgraphs.io/)

...or a [contour plot](https://rawgraphs.io/learning/how-to-make-a-contour-plot/).

![Source: Maarten Lambrechts, CC-BY 4.0. Visualisation made with [RAWGraphs](https://rawgraphs.io/)](Choosing%20the%20right%20chart%20type%20for%20your%20story%20534c70625e194b62ad932d52825d1579/contour-bryant.png)

Source: Maarten Lambrechts, CC-BY 4.0. Visualisation made with [RAWGraphs](https://rawgraphs.io/)

Another example of a data dense chart type are horizon charts. They can be used as an alternative to line charts when the number of series to display is high. The horizon chart below shows more than 70 time series in a single chart, which would be very difficult to do with a traditional line chart.

![Source: [Frédérik Ruys](https://www.vizualism.nl/winnaar-infographicjaarprijs-2009/) for Financieele Dagblad](Choosing%20the%20right%20chart%20type%20for%20your%20story%20534c70625e194b62ad932d52825d1579/horizon-chart-ruys.png)

Source: [Frédérik Ruys](https://www.vizualism.nl/winnaar-infographicjaarprijs-2009/) for Financieele Dagblad

More on horizon charts can be found on the <span class='internal-link'>[How to introduce less common chart types](how-to-introduce-less-common-chart-types)</span> and the High data density visualisations LINK pages. They can be produced with the [RAWGraphs](https://rawgraphs.io/learning/how-to-make-a-horizon-graph/) visualisation tool.