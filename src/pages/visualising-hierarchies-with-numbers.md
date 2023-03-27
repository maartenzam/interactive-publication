Both the nodes and edges in a graph can have properties. When the lowest levels in a hierarchy have a numerical property, specific visualisations can be used to visualise both the structure of the hierarchy as well as the numerical values attached to the nodes.

In packed circles, the circles can be sized according to the numerical properties.

![ ](Visualising%20hierarchies%20and%20networks%208bba0c0b346b49f1878fd362f1b4f86c/circle-packing-population.svg)

Packed circles showing the most populous cities by continent. The circles representing the circles are scaled according to their population. Source: made with [RAWgraphs](https://app.rawgraphs.io/), Maarten Lambrechts CC BY SA 4.0

**Treemaps** divide the plain into rectangles to show a hierarchy and the numerical proportions in it. The surface area of each rectangle is proportional to the number of the node they represent, and grouped together they also show their summed values at the higher level of the hierarchies.

![A treemaps showing the most populous cities and their population, grouped by country and by region](Visualising%20hierarchies%20and%20networks%208bba0c0b346b49f1878fd362f1b4f86c/treemap-cities.svg)

Source: made with [RAWgraphs](https://app.rawgraphs.io/), Maarten Lambrechts CC BY SA 4.0

Different layouts can be used to calculate the layout of a treemap. The treemap above uses an algorithm that tries to make the rectangles approximate squares as much as possible. The one below uses a “slice and dice” algorithm.

![The same treemap as above, but with a different layout applied to it](Visualising%20hierarchies%20and%20networks%208bba0c0b346b49f1878fd362f1b4f86c/treemap-cities-slice-dice.svg)

Source: made with [RAWgraphs](https://app.rawgraphs.io/), Maarten Lambrechts CC BY SA 4.0

Comparing the surface area of rectangles to read exact values from treemaps is not very easy, so if this is important for your visualisation, you might be better off with another chart type. But if making comparisons between surface areas in a treemap is not important at all, you don’t have to stick to rectangles. The **Voronoi treemap** divides a polygon into irregular shapes.

![ ](Visualising%20hierarchies%20and%20networks%208bba0c0b346b49f1878fd362f1b4f86c/voronoi-treemap-cities.svg)

A Voronoi tree map of the most populous cities by continent. The Voronoi treemap is named after Ukrainian mathematician Georgy Voronoi, who invented the [Voronoi diagram](https://en.wikipedia.org/wiki/Voronoi_diagram). Source: made with [RAWgraphs](https://app.rawgraphs.io/), Maarten Lambrechts CC BY SA 4.0

And just as dendrograms have a circular equivalent, treemaps can be turned into so called **sunburst diagrams**. A difference between a treemap and a sunburst diagram is that the higher level nodes in the hierarchy (in this case the countries and continents) have their own visual element on the inner rings of a sunburst diagram, while on a treemap the higher order nodes are only present as the collection of their children.

![A sunburst diagram showing the populous cities data set](Visualising%20hierarchies%20and%20networks%208bba0c0b346b49f1878fd362f1b4f86c/cities-sunburst.svg)

Source: made with [RAWgraphs](https://app.rawgraphs.io/), Maarten Lambrechts CC BY SA 4.0