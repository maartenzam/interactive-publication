Especially in news graphics, annotations highlighting and explaining data values and patterns in the data are popular and widespread (they also improve the <span class='internal-link'>[understandability](pour-caf-principles-understandable)</span> of visualisations). Of course, when the dimensions of a visualisation are reduced, there is less space to place these text elements. That is why they are often repositioned, reduced in length or even removed altogether in smaller versions of the visualisation.

Check the number, content and the placement of the text elements (including the chart title) on the following versions of the same chart, each designed to be shown on screens with decreasing size.

![A bar chart showing the Total cost of major natural disasters over the 1980 - 2017 period. The biggest 5 disasters are labelled: with their names and total cost](Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/natural-disasters-nytimes-desktop.png)

Desktop version. Source: [Techniques for Flexible Responsive Visualization Design](https://dl.acm.org/doi/abs/10.1145/3313831.3376777), Hoffswell et al

<p class='center'>
<img src='Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/natural-disasters-nytimes-mobile-landscape.png' alt='The same chart as above, but with smaller dimensions. The title and subtitle are moved outside of the chart, the biggest disasters are still labelled' class='max-600' />
</p>

Tablet/phone in portrait mode version. Source: [Techniques for Flexible Responsive Visualization Design](https://dl.acm.org/doi/abs/10.1145/3313831.3376777), Hoffswell et al

<p class='center'>
<img src='Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/natural-disasters-nytimes-mobile-portrait.png' alt='In the version for phones, the cost of the disasters is removed from the text annotations, and the annotations are moved into the chart. The number of axis labels and grid lines on the y axis are also reduced' class='max-400' />
</p>

Phone portrait version. Source: [Techniques for Flexible Responsive Visualization Design](https://dl.acm.org/doi/abs/10.1145/3313831.3376777), Hoffswell et al

<p class='center'>
<img src='Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/natural-disasters-nytimes-thumbnail.png' alt='In the thumbnail version of the chart, only hurrican Katrina ia annotated and both the x and the y axis have only 2 labels' class='max-200' />
</p>

Thumbnail version. Source: [Techniques for Flexible Responsive Visualization Design](https://dl.acm.org/doi/abs/10.1145/3313831.3376777), Hoffswell et al

Other text elements in a chart are the axis labels and legends (together sometimes called <span class='internal-link'>[guides](guides)</span>). The number of axis labels can be reduced on smaller displays, and their formatting can be made more compact. Rotating the labels of the x axis is also an option, but because this compromises legibility, this is not good practice.

Consider the two following versions of a chart designed for small displays.

<p class='center'>
<img src='Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/linechart-small-scaled2x.png' alt='A line chart with a line for every EU member state, with Sweden, Ireland and the EU average labelled and highlighted with colour' class='max-400' />
</p>

Source: Maarten Lambrechts, CC BY 4.0

<p class='center'>
<img src='Responsiveness%20and%20data%20visualisation%20for%20small%20sc%20bfcc7f2b3f63483d9213104e4137aec4/linechart-small-less-ticks2x.png' alt='The same line chart as above, but with all but the three coloured lines removed, and the number of labels and grid lines for the y axis reduced' class='max-400' />
</p>

Source: Maarten Lambrechts, CC BY 4.0

In the latter version, the data in the background is left out, and the number of labels on both the x and y axis are reduced. The formatting for the years on the x axis is also made more compact.

When data points are sufficiently labelled, axes can be left out completely, just as legends.

Another solution when many annotations are present and when the annotations are important and can not be left out, is to move them out of the chart, to a separate space below the chart for example.

<iframe src='https://datawrapper.dwcdn.net/iUPVd/5/' width='100%' height='800px' style='border: none;'></iframe>

Annotations can be integrated into a visualisation when its dimensions allow it. Source: [Datawrapper](https://blog.datawrapper.de/better-more-responsive-annotations-in-datawrapper-data-visualizations/)

<p class="center">
<iframe src='https://datawrapper.dwcdn.net/iUPVd/5/' width='400px' height='600px' style='border: none;'></iframe>
</p>

When space is limited, the annotations can be listed below the visualisation. Source: [Datawrapper](https://blog.datawrapper.de/better-more-responsive-annotations-in-datawrapper-data-visualizations/)