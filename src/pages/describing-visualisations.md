The procedures laid out in <span class='internal-link'>[From data to visualisation](from-data-to-visualisation)</span> not only describe how software produces visualisations from raw data. They also provide us with a very concise way of describing the resulting scatter plot. Instead of describing the visualisation as a “scatterplot of X and Y”, we can describe it as a visualisation in which

- circles are used to represent each car in the source data
- the x position of the circles is calculated from the `Engine displacement` column in the data, using a linear scale
- the y position of the circles is calculated from the `Horsepower` column in the data, also using a linear scale
- the colour of the circles is determined by the `Cylinders` column, using a colour scale with the colours red, green and blue
- the values on the x axis run from 100 to 400 and are labelled every 100 units
- the values on the y axis run from 50 to 350 and are labelled every 100 units
- the title of the plot is “Bigger engines have more power”

With this description, anyone with some data visualisation skills and the right tools at hand, will be able to recreate the same scatter plot from the same data set.

You could even imagine that no human needs to be involved to generate the same visualisation in different visualisation software programmes. As long as the description of the chart provides all the needed information to generate the graphical elements represented in a visualisation, the description could be used as an interchangeable format of visualisation descriptions between different software programs.