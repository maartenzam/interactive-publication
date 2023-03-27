Next to <span class='internal-link'>[point geometries](point-geometries)</span>, `text` geometries are important zero-dimensional geometries. In order to be displayed, text geometries require an aesthetic to be mapped to the text content of the geometry.

![A scatter plot of cars with their engine displacement on the x axis, their horsepower on the y axis and their name plotted with a text geometry](Geometric%20objects%20in%20detail%20bd1876bee7c94755a7803c7578a39cd9/geom_text.png)

Source: Maarten Lambrechts, CC BY SA 4.0

All 3 implementations of the Grammar of Graphics have a `text` geometry. ggplot2 offers an alternative geometry called `geom_label`. It produces text with a coloured background.

| Implementation | Geometry name | Required aesthetics | Additional aesthetics |
| --- | --- | --- | --- |
| ggplot2 | geom_text, geom_label | x, y, label |  |
| Vega-Lite | text | x, y, text |  |
| Observable Plot | text | x, y, text |  |

![The same chart as above, but using ggplot2's geom_label instead of geom_text](Geometric%20objects%20in%20detail%20bd1876bee7c94755a7803c7578a39cd9/geom_label.png)

An example of the ggplot2 geom_label geometry. Source: Maarten Lambrechts, CC BY SA 4.0