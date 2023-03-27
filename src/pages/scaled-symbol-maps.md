An alternative to <span class='internal-link'>[choropleth maps](choropleth-maps)</span> are scaled symbol maps. These maps use the size of symbols to encode numerical variables. The symbols can be placed on exact locations, or they can be placed somewhere in the polygons for which they represent data.

Circles are the most used symbols for scaled symbol maps. The surface area of the circles on a scaled symbol map should be proportional to the values they represent.

In the map below, the colour of the circles is used to encode a secondary numerical variable.

![A bubble map of EU regions, with the size of the bubbles proportional to the GDP of each region, and its colour representing the GDP per inhabitant](Maps%20e22d0627fc944d47be79a1d1a4f8acef/proportional-symbol-choropleth.png)

Source: [Eurostat-map.js](https://observablehq.com/@joewdavies/eurostat-map-js#bivariate) on observablehq.com

Other symbols, like squares, are also an option.

![The same map as above, but using squares instead of circles](Maps%20e22d0627fc944d47be79a1d1a4f8acef/proportional-squares.png)

Source: [Eurostat-map.js](https://observablehq.com/@joewdavies/eurostat-map-js#bivariate) on observablehq.com

**Spike maps** are a special kind of scaled symbol maps. They use triangles that are scaled only in one direction. Spike maps have some advantages over scaled symbol maps that use circles or squares:

- the spikes overlap less, because they only grow in one direction
- because they are narrower, the spikes are better tied to a geographical location
- values can be compared better because it is easier to compare lengths than it is to compare areas

The spike map below encodes two additional numerical values with the colour and the width of the spikes.

![Spike map of Belgian municipalities, with the height of the spikes proportional to the number of Covid-19 cases per 100.000 inhabitants, their widht proportional to the population and the colour representing the trend in cases](Maps%20e22d0627fc944d47be79a1d1a4f8acef/covid-spike-map-belgium.jpg)

Source: Maarten Lambrechts, CC BY SA 4.0