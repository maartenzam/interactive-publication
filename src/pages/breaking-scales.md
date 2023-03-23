In its essence, data visualisation uses mathematical rules to convert numbers into visual properties (position, length, width, colour, ...) of the geometrical shapes in a chart. For the human eye and brain this visual representation of abstract numbers is much easier to process, and hence the power of data visualisation.

These rules converting numbers into visual properties are called **scales**. A scale converts the numbers of a column in your data to the lengths of the bars in a bar chart, and convert two columns of numbers in the data into the horizontal and vertical position of dots in a scatterplot, for example.

But sometimes scales are fiddled with, and the resulting visualisations can become confusing or even misleading.

## Breaking scales

A first pitfall regarding scales are bar charts with a numerical axis that does not start at zero (an axis is a visual representation of a scale). This is a very common pitfall.

Here is a recent example, shared by US vice-president Kamala Harris on Twitter.

![A bar chart titled 'The Biden-Harris Administration Reduced the Deficit Last Year'. The chart shows a bar for the year 2020 and one for the year 2021. The bar for 2021 is clearly smaller, but the y axis only starts at a value of 2000](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/biden-harris-bars.png)

Source: [@KamalaHarris](https://twitter.com/KamalaHarris/status/1510408494628941825)

The numerical scale in a bar chart converts numbers into the lengths of the bars. But when the scale does not start at zero, the lengths of the bars are not proportional anymore to the numbers they are supposed to represent. The lower part of the bars are “cut off”.

This is how the chart should look like in reality:

![A corrected version of the bar chart above, with the y axis starting at zero. The differences between the bar for 2020 and the one for 2021 are much smaller than before](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/Artboard_12x.png)

Source: Maarten Lambrechts, CC BY SA 4.0

In the case you want to highlight relatively small differences between large quantities, it can be tempting to leave out part of the bars by not starting the y axis at zero. But instead of doing that, it might be better to consider some other options:

- maybe you can try to not plot the absolute numbers, but plot the deviation from a reference value (the average, ...) or the difference you want to highlight instead. In the chart above, this would mean plotting the difference of 354 billion dollar and put that number in context to the difference between 2019 and 2020, for example.
- you could consider a chart type that does not use length as the visual property computed by the scale. A dot plot (which uses position instead of length) or slope chart are options here.

Sometimes breaking a scale is more subtle than cutting a part of it off. Inspect the y axis on the below chart, also published by the White House, closely. Can you see what is going on?

![A bar chart with a grid line for every whole number, except for the value 5.5 which is added using the same axis interval as the whole numbers, distorting the bars](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/economic-growth-white-house.jpg)

Source: [@WhiteHouse](https://twitter.com/WhiteHouse/status/1486709480351952901)

The scale is non-linear, because the upper end of the scale is stretched out. As a result the white bar with the value for 2021 is longer than it should be compared to the bars for the other years.

This “mistake” (it wasn’t clear if this was intentional or not) was corrected, and below is what the chart looks like with a linear scale.

![A corrected version of the chart above](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/economic-growth-white-house-corrected.jpg)

Source: [@WhiteHouse](https://twitter.com/WhiteHouse/status/1486709480351952901) 

When dates are not recognised properly by the software used to make a visualisation, time scales can be broken accidentally. When dates are treated as strings instead of dates (see the <span class='internal-link'>[data type mismatches](data-type-mismatches)</span> page), a categorical scale will be used instead of a time scale. Categorical scales evenly space all values in a data column, which leads to breaks in the scale in the case the time data contains irregular time intervals.

This is best illustrated with a real life example. The charts below were published in Flemish newspaper De Tijd a couple of years ago. The chart shows the decline in extreme poverty globally and in different regions in the world. The charts seem to suggest a strong reduction in extreme poverty worldwide between 1999 and 2012.

![Line charts showing regional trends in poverty rates. The charts seem to suggest a very strong drop in poverty between 1999 and 2012](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/armoede_MFNgraph_TIJD_06102015_ipadgraph.jpg)

Source: De Tijd

But if you focus on the horizontal axis, you’ll notice that the time intervals are not equidistant: the first interval (between 1990 and 1999) spans 9 years, the second one 13 years and the last one only 3 years. So the apparent dip in extreme poverty in the middle of the charts is a result of the non-linearity of the time scale, and not due to patterns in the data.

Below are the corrected versions of these charts. The dip has completely vanished now that the time scale is linear.

![A corrected version of the line charts above. The sudden drop in poverty rates between 1999 and 2012 has disappeared](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/armoede_correctie2_MFNgraph_TIJD_061020151.jpg)

Source: De Tijd