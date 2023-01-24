Just like overplotted scatter plots can be summarised with <span class='internal-link'>[binned scatter plots](binned-scatter-plots)</span>, a map with a lot of points can be summarised by creating a grid and counting how many points fall into each grid.

The used grid could consist of squares, but usually hexagons are used because they cover the plane in a nicer way. The **hexbin map** below shows the density of farmer markets in the US.

![Source: [d3-hexgrid](https://npmmirror.com/package/d3-hexgrid)](Maps%20e22d0627fc944d47be79a1d1a4f8acef/farmer-markets-verspohl.jpg)

Source: [d3-hexgrid](https://npmmirror.com/package/d3-hexgrid)

When the number of points in each hexagon is used to scale the hexagons in size, their colour can be used to encode a secondary variable. In the hexbin map below the hexagons are scaled according to how many Walmart stores they contain, and the colour of each hexagon represent the median opening year of the stores it contains.

![Source: [observablehq.com/@d3](https://observablehq.com/@d3/hexbin-map)](Maps%20e22d0627fc944d47be79a1d1a4f8acef/hexbin-map-d3.png)

Source: [observablehq.com/@d3](https://observablehq.com/@d3/hexbin-map)