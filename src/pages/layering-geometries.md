One powerful feature of the 3 tools implementing the Grammar of Graphics is the possibility to layer geometries on top of each other. A common technique in line charts, for example, is to mark the data points with a dot. In the Grammar of Graphics, this is as simple as layering a point geometry over a line geometry.

![A line chart with 5 lines, with each of the data points overlaid as a circle in the same colour as the line it belongs to](Chart%20types%20and%20the%20Grammar%20of%20Graphics%20263c3fb1faf44d64a3e2670baf5bcc26/vega-lite-lines-dots.png)

Source: [vega.github.io/vega-lite/examples/line_overlay_stroked.html](https://vega.github.io/vega-lite/examples/line_overlay_stroked.html)

Some chart types use geometrical objects that might not be available directly in one of the implementations of the Grammar. But in many cases, these specific geometrical objects can be constructed by layering 2 or more of the available primitive geometries on top of each other. For example, the chart below (called a dumbbell chart in chart template language, see <span class='internal-link'>[Grouped bars](grouped-bars)</span>) can be created by layering point geometries on top of a line geometry.

![A dumbbell chart showing life expectancy for 5 countries in 1955 and 2000](Chart%20types%20and%20the%20Grammar%20of%20Graphics%20263c3fb1faf44d64a3e2670baf5bcc26/dumbbell-vega-lite.png)

Source: [vega.github.io/vega-lite/examples/layer_ranged_dot.html](https://vega.github.io/vega-lite/examples/layer_ranged_dot.html)

Showing the distribution of the values of a numerical variable can be enhanced by both showing the individual observations on top of a geometry that summarises the distribution, like a <span class='internal-link'>[box plot](box-plots)</span> geometry.

![3 box plots comparing the bill lengths of 3 species of penguins. The individual data points are plotted on top of the box plots](Chart%20types%20and%20the%20Grammar%20of%20Graphics%20263c3fb1faf44d64a3e2670baf5bcc26/penguin-boxplots-jitter.png)

Box plots with the data points plotted on top of them. The x position of the points is jittered, which means that their x position is randomised. ggplot2 has a <code><a href='https://ggplot2.tidyverse.org/reference/geom_jitter.html'>jitter geometry</a></code> for jittering point geometries. Source: adapted from [Allison Horst](https://allisonhorst.github.io/palmerpenguins/articles/examples.html)

Similarly, layering a best fit curve to a series of data points (see <span class='internal-link'>[Smoothing lines](smoothing-lines)</span>) can help in seeing trends and patterns in a data set.

![A fitted line plotted on top of the points in a scatter plot](Chart%20types%20and%20the%20Grammar%20of%20Graphics%20263c3fb1faf44d64a3e2670baf5bcc26/geom_smooth-layer-ggplot2.png)

Source: [ggplot2.tidyverse.org/reference/geom_smooth.html](https://ggplot2.tidyverse.org/reference/geom_smooth.html)

Different geometry layers in a single plot share the same position aesthetics (x and y), but they don’t have to use the same data. In the box plot example above, the boxplot geometry transforms the data internally to construct the box plots. But the <span class='internal-link'>[transformation](gog-building-blocks-transformations)</span> can also be explicitly done outside of a geometry.

In the chart below, daily maximum temperatures are used to plot point geometries. But on top of the dots, a line geometry is added that is using a 30 day rolling average of the daily maximum temperatures. This 30 day rolling average was computed using a transformation of the original data, all within Vega-Lite.

![A scatter plot showing the maximum daily temperature over the course of 4 years. A 30 day rolling average is plotted on top of the dots](Chart%20types%20and%20the%20Grammar%20of%20Graphics%20263c3fb1faf44d64a3e2670baf5bcc26/moving-average-layer-vega-lite.png)

Source: [vega.github.io/vega-lite/examples/layer_line_rolling_mean_point_raw.html](https://vega.github.io/vega-lite/examples/layer_line_rolling_mean_point_raw.html)

<p><span class='internal-link'><a href='text-geometries'>Text geometries</a></span> can be used in versatile ways to add data labels and annotations. The bar chart below layers a text layer with the values for each bar on top of a bar geometry.</p>

![A horizontal bar chart with 3 bars, each labelled with the value they represent](Chart%20types%20and%20the%20Grammar%20of%20Graphics%20263c3fb1faf44d64a3e2670baf5bcc26/vega-lite-data-labels-bars.png)

Source: [vega.github.io/vega-lite/examples/layer_bar_labels.html](https://vega.github.io/vega-lite/examples/layer_bar_labels.html)

Because layers in a plot do not have to share the same data, layering geometries can also be used creatively to add annotations to a plot. The plot below uses 3 geometry layers: a line geometry, a point geometry (which is helpful for indicating the irregular intervals between the observations), and a rect geometry to add annotations indicating 2 different time frames.

![A line chart with the data points plotted on top of the line, and with 2 rectangles in the background to highlight 2 periods in time](Chart%20types%20and%20the%20Grammar%20of%20Graphics%20263c3fb1faf44d64a3e2670baf5bcc26/annotations-vega-lite.png)

Source: [vega.github.io/vega-lite/examples/layer_falkensee.html](https://vega.github.io/vega-lite/examples/layer_falkensee.html)