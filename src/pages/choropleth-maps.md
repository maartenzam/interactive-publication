Choropleth maps are a popular map type to show numerical values associated with administrative units (countries, provinces, municipalities, …) or other predefined geographical entities.

![ ](Maps%20e22d0627fc944d47be79a1d1a4f8acef/choropleth-sequential.png)

A choropleth map showing unemployment in Spanish regions. Source: [Eurostat-map.js](https://observablehq.com/@joewdavies/eurostat-map-js) on observablehq.com

Crucial for choropleth maps is that the numbers shown are scaled for population (or in other words: the <span class='internal-link'>[data should be normalised](normalising-data)</span>). Below is a choropleth map of the number of soldiers by country. Can you see how the most populous countries (China, India, United States) have the most soldiers, and why the map is more of a population map than a map about army sizes?

![A world choropleth map showing the number of soldiers in each country](Maps%20e22d0627fc944d47be79a1d1a4f8acef/1280px-Countries_by_soldier_count.svg.png)

Source: [Danalm000](https://commons.wikimedia.org/wiki/File:Countries_by_soldier_count.svg), CC-BY-SA 3.0

The colour palette of a choropleth map can be sequential, with light colours for small values and dark colours for high numbers like in the maps above, but when the values shown are deviations from a central value (like zero), the colour palette can also be diverging. In a diverging colour palette, two sequential colour palettes are combined to show the values on either side of the central value.

![ ](Maps%20e22d0627fc944d47be79a1d1a4f8acef/choropleth-population-change-joedavis-eurostat.png)

A choropleth map showing population change in European regions using a diverging colour palette. Source: [Eurostat-map.js](https://observablehq.com/@joewdavies/eurostat-map-js#bivariate) on observablehq.com

[ColorBrewer](https://colorbrewer2.org/) is a good tool to pick good colour palettes for choropleth maps.

Choropleth maps, and especially world choropleth maps, should use a map projection in which the surface areas of countries are proportional (these projections are called equal area projections). So choropleth maps using the Mercator projection should be avoided.

Choropleth maps can also be used to show categorical data instead of numerical.

![A choropleth map showing the classification of EU regions into rural, intermediate and urban regions](Maps%20e22d0627fc944d47be79a1d1a4f8acef/categorical-choropleth.png)

Source: [Eurostat-map.js](https://observablehq.com/@joewdavies/eurostat-map-js) on observablehq.com

A special type of choropleth maps are bivariate choropleth maps. Instead of showing just one numerical value, bivariate choropleths show two. They do this by using a colour palette that goes in two directions.

As the example below shows, bivariate choropleth can reveal interesting patterns, but they are not so easy to read and interpret. Plotting a choropleth map for each of the two variables separately next to each other might be a better option. 

![A bivariate choropleth map showing unemployment rates and population density of EU regions](Maps%20e22d0627fc944d47be79a1d1a4f8acef/bivariate-choropleth.png)

Source: [Eurostat-map.js](https://observablehq.com/@joewdavies/eurostat-map-js#bivariate) on observablehq.com