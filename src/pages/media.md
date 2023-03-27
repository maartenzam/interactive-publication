The medium a visualisation is published in also has an influence on what the optimal chart type is.

The most obvious property of a medium are the dimensions it can provide for a visualisation. Many visualisations today are consumed on mobile phones and other devices with limited screen sizes. The design of a visualisation can be optimised to fit on smaller screens, but these optimisations have their limits: at some point, it makes more sense to display a different chart type on smaller screens.

For example, displaying a world map (which has a wide layout) on mobile phones (which have a long layout, with a limited width) is not ideal. An alternative on small screens is to use 2 hemispheres stacked on top of each other.

![A world map showing circles in shades of blue](Choosing%20the%20right%20chart%20type%20for%20your%20story%20534c70625e194b62ad932d52825d1579/worldmap-wattenberger.png)

Source: [Amelia Wattenberger](https://svelte.recipes/components/world-map/)

<p class='center'>
<img src='Choosing%20the%20right%20chart%20type%20for%20your%20story%20534c70625e194b62ad932d52825d1579/hemispheres-wattenberger.png' alt='2 hemispheres positioned on top of each other, showing the same circles as the map above' class='max-400' />
</p>

Source: [Amelia Wattenberger](https://svelte.recipes/components/world-map/)

More creative visualisations and layouts, like radial layouts or grid layouts based on geography, can be simplified to regular bar charts and simple grids:

![A tablet showing a map inside a circular bar chart, and a phone showing the same map on top of a regular bar chart](Choosing%20the%20right%20chart%20type%20for%20your%20story%20534c70625e194b62ad932d52825d1579/reuters-mobile-radial-to-bar.jpg)

Source: [Prasanta Kumar Dutta](https://twitter.com/Da_Pacific/status/1500890436529192961), Reuters

![A tablet showing a tile grid map of the United States with small multiple area charts, and a phone showing the same area charts, but not arranged in the shape of the US map](Choosing%20the%20right%20chart%20type%20for%20your%20story%20534c70625e194b62ad932d52825d1579/reuters-mobile-geogrid-to-grid.jpg)

Source: [Prasanta Kumar Dutta](https://twitter.com/Da_Pacific/status/1500890436529192961), Reuters

![A laptop showing a full screen visualisation with a lot of people icons](Choosing%20the%20right%20chart%20type%20for%20your%20story%20534c70625e194b62ad932d52825d1579/reuters-people-to-bars.jpeg)

Source: [Gurman Bhatia](https://www.gurmanbhatia.com/talk/2020/11/28/responsive-data-viz-phone.html), Reuters

![A tablet showing a reduced version of the visualisation above, and a phone with an even more condensed version of the visualisation](Choosing%20the%20right%20chart%20type%20for%20your%20story%20534c70625e194b62ad932d52825d1579/reuters-people-to-bar-mobile.jpeg)

Source: [Gurman Bhatia](https://www.gurmanbhatia.com/talk/2020/11/28/responsive-data-viz-phone.html), Reuters

For visualisations on smaller screens, you might ask yourself if it even makes sense to make a visualisation suited for smaller screens: it might take a lot of time and effort to get it working on small screens. A simple table with the most relevant values could make more sense in those cases (bar charts with horizontal bars usually work well too on mobile phones).

Just like more data in the same space requires more <span class='internal-link'>[data dense visualisations](tag/high-data-density-visualisations)</span>, the same data in smaller space also requires more data dense chart types. So a fallback for a scatter plot on smaller screens could be a hexbinned scatter plot, for example.