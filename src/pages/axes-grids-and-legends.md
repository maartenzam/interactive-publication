To give the reader some guides to interpret the data and read data values in a chart, you can provide axes, grids and legends.

## Axes

Axes let readers assess the position and/or size of data marks. If a chart uses cartesian coordinates, the x axis is the horizontal axis and the y axis is the vertical axis.

The building blocks of an axis are the ticks, with their associated tick marks and axis labels, and an optional axis line. Next to the tick marks and labels, grid lines can also be attached to the axis ticks.

![A line chart with annotations in bright pink pointing to the grid lines, axis labels, axis line and tick marks](Design%20of%20chart%20elements%204102ea0d355c42149d1061e60bfd32a8/axis-grids2x.png)

Source: Maarten Lambrechts, CC BY 4.0

Notice that the y axis of this chart does not have an axis line. Many data visualisation tools draw axis lines by default. But in many cases, these axis lines do not serve any real purpose, and they can be left out without any problem. This is especially true for bar charts, from which axis lines can be removed without any consequences.

<p class='center'>
<img src='Design%20of%20chart%20elements%204102ea0d355c42149d1061e60bfd32a8/bars-axis-line.gif' alt='An animated gif showing how an axis line on a bar chart can be removed without any problem' class='max-600' />
</p>

A comparison of a bar chart with and without axis line. Source: Maarten Lambrechts, CC BY 4.0

Axis labels, however, are indispensable to interpret the data on a visualisation. Without axis labels, a visualisation is meaningless.

<p class='center'>
<img src='Design%20of%20chart%20elements%204102ea0d355c42149d1061e60bfd32a8/bars-no-labels2x-100.jpg' alt='The same bar chart as above, but with the axis labels removed, rendering the chart unreadable' class='max-600' />
</p>

Source: Maarten Lambrechts, CC BY 4.0

The only exception to this are visualisations where enough data points are labelled so that axis labels are not needed.

<p class='center'>
<img src='Design%20of%20chart%20elements%204102ea0d355c42149d1061e60bfd32a8/bars-data-labels2x-100.jpg' alt='The same bar chart as above, but with value labels for each bar and with the grid lines removed' class='max-600' />
</p>

Source: Maarten Lambrechts, CC BY 4.0

Another example of a chart type that doesn’t require axis labels, is a slope chart.

<p class='center'>
<img src='Design%20of%20chart%20elements%204102ea0d355c42149d1061e60bfd32a8/slopechart2x.png' alt='An example of a slope graph with the grid lines removed. Because the added value labels offer enough context to interpret the chart, chart grids are not needed' class='max-400' />
</p>

Source: Maarten Lambrechts, CC BY 4.0

Many visualisation tools put the y axis on the left of charts. This creates space for labels on the right side of the chart. But on line charts showing time series data, the most interesting values on the chart are usually the most recent data. So when no labelling is applied, it makes sense to move the y axis to the right of the chart.

<p class='center'>
<img src='Design%20of%20chart%20elements%204102ea0d355c42149d1061e60bfd32a8/axis-right2x.png' alt='A line chart with the y axis on teh right' class='max-600' />
</p>

Source: Maarten Lambrechts, CC BY 4.0

In the same way, some chart types, like heatmaps, benefit from moving the x axis to the top, instead of having it at the bottom, where many visualisation tools put them by default.

As a rule of thumb, numerical and date axes should at least have 2 labels and up to 8 at most. More than 8 labels will create busy axes. The **number of labels** should depend on

- the available space: small charts should have less axis labels than charts with big dimensions
- the length of the labels: too many long labels will cause labels to overlap. See the <span class='internal-link'>[number formatting](number-formatting)</span> and <span class='internal-link'>[date formatting](date-formatting)</span> pages for techniques to shorten long time and numerical labels
- the resolution you want the reader to distinguish values at: if for example on a line chart with yearly values it is really important to see which value corresponds to which year, you could decide to label every year and draw a grid line for each of the years

## Grid

In order to improve the legibility of the data values, you can choose to attach a grid line to each of the axis labels. But remember that grid lines, and all other elements of axes, are there to support the reading of the data. So they shouldn’t compete for attention with the graphical elements representing the data.

It is good practice to give all supporting elements on a chart a grey colour. **The grid lines especially need to be muted**, as they run across the whole visualisation and often overlap with the data elements. A (light) grey colour, some opacity, a small stroke width and dashing the grid lines are all techniques to mute the chart grid.

## Legends

Another suboptimal behaviour in chart tools defaults, is the creation of separate legends to identify colours on a chart.

![A line chart  with 3 coloured lines, identifiable through a separate colour label](Design%20of%20chart%20elements%204102ea0d355c42149d1061e60bfd32a8/anatomy-legend2x.png)

Source: Maarten Lambrechts, CC BY 4.0

Separate legends create unnecessary cognitive load for the chart reader: they require readers to look back and forth between the chart and the legend to identify the elements with different colours on the chart. On top of that, many colour legend will loose their functionality for colour blind people, or when printed on black and white.

![A greyscale version of the chart above. Because the colours are removed, the chart becomes unreadable](Design%20of%20chart%20elements%204102ea0d355c42149d1061e60bfd32a8/legend-black-white.png)

Source: Maarten Lambrechts, CC BY 4.0

A solution to this problem is a technique called direct labelling: integrating the names of elements and categories in the chart and positioning their labels next to the elements. This removes the drawbacks separate legends suffer from.

<p class='center'>
<img src='Design%20of%20chart%20elements%204102ea0d355c42149d1061e60bfd32a8/eu272x.png' alt='The same line chart as above, but with the names of the lines directly next to the lines, instead of with a separate colour legend' class='max-600' />
</p>

Source: Maarten Lambrechts, CC BY 4.0

Direct labelling has its limits though: when many elements are close together on a chart, it is tricky to direct label each of them without creating overlapping text. And most visualisation tools don’t have an option to apply direct labelling. So in that case direct labelling means manually adding the labels.

Another technique that can work really well and that integrates a visualisation and the surrounding text, is to reuse the colours on the chart in the surrounding text.

![The same line chart as above, with an introductory text added in which the names of the countries highlighted on the chart are the same colours as the lines on the chart](Design%20of%20chart%20elements%204102ea0d355c42149d1061e60bfd32a8/anatomy-text-labels2x.png)

Source: Maarten Lambrechts, CC BY 4.0