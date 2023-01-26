A common pattern in online data visualisation is revealing details about an item in the visualisation when it is hovered by the mouse, or touched on touch enabled screens. A **tooltip** is shown that identifies the data point, reveals the exact data values and sometimes also some additional information about the selected data point.

<iframe src='https://datawrapper.dwcdn.net/lsM4n/3/' width='100%' height='600px' style='border: none;'></iframe>

Use your mouse to reveal the tooltips in this scatter plot. Source: [academy.datawrapper.de](https://academy.datawrapper.de/article/148-examples-of-datawrapper-scatter-plots)

Sometimes the viewer of a visualisation is given some control over what data a visualisation should show. This can be a **filtering** mechanism, in which the viewer can add or remove data points from the visualisation.

![An interactive chart with filtering functionality. Source: [babynames-stat.ch/en](https://babynames-stat.ch/en/index.html)](Accessible%20interactivity%201a5231a2445b406ab293908e35bc18c6/babynames-explorer-bfs.png)

An interactive chart with filtering functionality. Source: [babynames-stat.ch/en](https://babynames-stat.ch/en/index.html)

Accessible navigation and filtering of the data points is currently implemented in the [Accessibility module](https://www.highcharts.com/docs/accessibility/accessibility-module) of <span class='internal-link'>[Highcharts](highcharts)</span>. Highcharts is a JavaScript library for data visualisation, and it is the most advanced of its kind in terms of accessibility.

<aside>
🔗 Visit <a href='https://officepublicationseu.github.io/accessible-html-dataviz/highcharts-accessibility.html'>the <code>highcharts-accessibility.html</code> page</a> to explore the accessibility features in Highcharts. Try to navigate the elements on the visualisation with keyboard keys (tab, enter/space bar and  arrow keys), filter the data by enabling and disabling time series with the chart legend, and visit the page with a screen reader enabled. The source of this visualisation is <a href='https://www.highcharts.com/demo/accessible-line'>highcharts.com/demo/accessible-line</a>[]().
</aside>

For other interactive features of a visualisation, sticking to <span class='internal-link'>[semantic HTML](semantic-html)</span> is the safest bet. When you allow viewers to change the data dimension(s) shown on a visualisation for example, use `<input>` to create radio buttons or use a `<select>` element to create a dropdown in the user interface. Try to avoid using non-semantic HTML and don’t rely on complex user interactions, like dragging over a visualisation to select data points, for example.

When a visualisation is part of a sequence of views on the data, like in a <span class='internal-link'>[scrollytelling](tag/scrollytelling)</span> article or in a slideshow-like format in which the user advances from slide to slide, the transitions between the data views can include

- highlighting data items (by making them bigger, fade out other data items, …)
- zooming in on parts of a visualisation
- animating between different chart types showing the same data

Consider offering static versions for each view on the data, each with an appropriate description accessible to screen readers.