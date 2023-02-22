Just like <span class='internal-link'>[scales](scales)</span> have <span class='internal-link'>[default configuration](scale-configuration)</span> in all three implementations of the Grammar of Graphics, plots have default **theming** settings. The theming of a plot consists of the used **colours**, the **spacing** between elements and the used **fonts**.

Colours used in scales are specified in the scales themselves. But the **colours of non-data elements** in a plot can be set in the theming. In the plot below, a background colour is applied to an Observable Plot visualisation. The plot is also using a customised **font** family, font size and font colour. 

![Source: [observablehq.com/@observablehq/plot-cheatsheets-layouts](https://observablehq.com/@observablehq/plot-cheatsheets-layouts)](Scales,%20guides,%20facets%20and%20theming%209e76a2b3e0f343a6bdfd6888555b52ca/observable-plot-theming.png)

Source: [observablehq.com/@observablehq/plot-cheatsheets-layouts](https://observablehq.com/@observablehq/plot-cheatsheets-layouts)

Apart from colours and fonts, the spacing between elements on a plot is an important part of its theming. Below is a schematic representation of the available spacing options in an Observable Plot visualisation.

![Source: [observablehq.com/@observablehq/plot-cheatsheets-layouts](https://observablehq.com/@observablehq/plot-cheatsheets-layouts)](Scales,%20guides,%20facets%20and%20theming%209e76a2b3e0f343a6bdfd6888555b52ca/observable-plot-layout.png)

Source: [observablehq.com/@observablehq/plot-cheatsheets-layouts](https://observablehq.com/@observablehq/plot-cheatsheets-layouts)

Below is a similar schema, illustrating all chart elements that can be themed with the theming system in ggplot2.

![Source: [Henry Wang](https://twitter.com/henrywangnl/status/1259396196713537536)](Scales,%20guides,%20facets%20and%20theming%209e76a2b3e0f343a6bdfd6888555b52ca/ggplot2-theming-theme_elements.png)

Source: [Henry Wang](https://twitter.com/henrywangnl/status/1259396196713537536)

More about the theming in each of the 3 implementations of the Grammar of Graphics can be found in their respective introduction pages:

- <span class='internal-link'><a href='grammar-of-graphics-in-practice-vega-lite'>Grammar of Graphics in practice: Vega-Lite</a></span>
- <span class='internal-link'><a href='grammar-of-graphics-in-practice-observable-plot'>Grammar of Graphics in practice: Observable Plot</a></span>
- <span class='internal-link'><a href='grammar-of-graphics-in-practice-ggplot2'>Grammar of Graphics in practice: ggplot2</a></span>