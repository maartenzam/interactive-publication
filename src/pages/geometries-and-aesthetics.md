Many <span class='internal-link'>[geometries](gog-building-blocks-geometric-objects)</span> share the same <span class='internal-link'>[aesthetics](gog-building-blocks-aesthetics)</span>, but some geometries have aesthetics specific to them. The different implementations of the Grammar of Graphics also differ a little bit in their implemented aesthetics.

## 0-dimensional geometries

### Point geometries

The common aesthetics for <span class='internal-link'>[point geometries](point-geometries)</span>point geometries over all 3 implementations are:

- `x`
- `y`
- `shape`
- `size`
- `fill`
- `stroke`
- `opacity`

Observable Plot and Vega-Lite offer some additional aesthetics for point geometries:

- `stroke width`
- `fill opacity`
- `stroke opacity`
- `rotation`
- `stroke dash pattern`

### Text geometries

<span class='internal-link'><a href='text-geometries'>Text geometries</a></span> share some aesthetics with point geometries. Those are the following:

- `x`
- `y`
- `fill`
- `opacity`
- `rotation`

But text geometries also have some very specific aesthetics. Most importantly, the **`text content`** aesthetic needs to mapped from the data. In the following plot the `country` variable is mapped `text content` of the text geometry. Like in the previous variations of this plot, population is mapped to the `size` aesthetic and the continent is mapped to the `fill` colour aesthetic.

![gapminder_text_colours.png](Aesthetics%20in%20detail%208b116c4f111e4dfc916bb4ebbd00f00e/gapminder_text_colours.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

Other than the text content, the text specific aesthetics are:

- font `size`
- `font family`: for example “Arial”, “Times New Roman”, …
- `font weight`: for example “normal” or “bold”
- `horizontal text alignment`: the horizontal alignment of the the text relative to the x and y position of the text
- `vertical text alignment`

![The same plot as above, but with the `population` variable mapped to the `rotation` aesthetic of the text geometry. As you can see, not all aesthetic mappings are effective or make sense. Source: Maarten Lambrechts, CC BY SA 4.0](Aesthetics%20in%20detail%208b116c4f111e4dfc916bb4ebbd00f00e/gapminder_rotation.png)

Source: Maarten Lambrechts, CC-BY-SA 4.0

The same plot as above, but with the `population` variable mapped to the `rotation` aesthetic of the text geometry. As you can see, not all aesthetic mappings are effective or make sense. Source: Maarten Lambrechts, CC BY SA 4.0

## 1-dimensional geometries

1-dimensional geometries are straight lines, curved lines or lines following a path connecting multiple data points. Different kinds of 1-dimensional lines require different aesthetics to be generated, see <span class='internal-link'><a href='1dimensional-geometries'>1-dimensional geometries</a></span> for an overview of the required aesthetics for the different kinds of line geometries.

Apart from the required position aesthetics, line geometries can also have the following aesthetics:

- `stroke colour`: the colour of the line
- `stroke width`: the width of the line
- `opacity`
- `stroke dash pattern`: a line can be solid (no dash pattern), or can have a specific dash pattern

![A line chart using the stroke dash pattern aesthetic. Source: [vega.github.io/vega-lite/examples/line_strokedash.html](https://vega.github.io/vega-lite/examples/line_strokedash.html)](Aesthetics%20in%20detail%208b116c4f111e4dfc916bb4ebbd00f00e/vega-lite-stroke-dash.png)

A line chart using the stroke dash pattern aesthetic. Source: [vega.github.io/vega-lite/examples/line_strokedash.html](https://vega.github.io/vega-lite/examples/line_strokedash.html)

Remember that for multi-series line charts, an aesthetic needs to be provided that groups the values in each series together. This can be done implicitly, for example by mapping the grouping variable to the `stroke colour` aesthetic, or explicitly by using the `group` aesthetic. The aesthetic for grouping observations together has different names in the different implementations. It is called

- `group` in ggplot2
- `detail` in Vega-Lite
- `z` in Observable Plot

## 2-dimensional geometries

Apart from the aesthetics required to shape and position 2-dimensional geometries (see <span class='internal-link'><a href='2dimensional-geometries'>2-dimensional geometries</a></span>), the other aesthetics of these geometries are very similar to the ones of point geometries. This makes sense since 0-dimensional geometries use 2-dimensional objects, like circles, to represent dimensionless points.

So 2-dimensional geometries (rectangles and areas) share the following aesthetics with 0-dimensional ones:

- `fill` colour
- `stroke` colour
- `opacity`
- `stroke dash pattern`
- `stroke width`
- `fill opacity`
- `stroke opacity`

The last 2 aesthetics are not supported by ggplot2.