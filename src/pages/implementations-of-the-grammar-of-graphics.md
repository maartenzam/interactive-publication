The Grammar of Graphics was not intended to be a real software programme with which you can make any visualisation imaginable. But the abstract concepts introduced in the book proved to be a good foundation for implementing the Grammar of Graphics and its concepts into existing or new software programmes.

## ggplot2

[**ggplot2**](https://ggplot2.tidyverse.org/) is a package for the R programming language that implements the Grammar of Graphics (the “gg” in the package’s names stands for “grammar of graphics”). The package was initially created by statistician and software developer Hadley Wickham in 2005. Version 1.0 of the package was released in 2014, and since then ggplot2 has been replacing the built-in graphics capabilities of R for many R users.

```r
ggplot(mtcars.col, aes(x = disp, y = hp, color = as.factor(cyl))) +
  geom_point(size = 3) +
  scale_color_discrete(name = "Cylinders") +
  ylab("Horsepower") +
  xlab("Engine displacement (cubic inch)") +
  ggtitle("Bigger engines have more power") +
  theme_minimal() +
  theme(legend.position = "top")
```

ggplot2 integrates nicely with a set of related R packages to work with data in R called the tidyverse.

<aside>
🔗 A full introduction to ggplot2 can be found in <span class='internal-link'><a href='grammar-of-graphics-in-practice-ggplot2'>Grammar of graphics in practice: ggplot2</a></span>.
</aside>

## Vega-Lite

[Vega](https://vega.github.io/vega/) was designed as a language to store and exchange descriptions of visualisations. These descriptions are called specifications, and are using the <span class='internal-link'>[JavaScript Object Notation (JSON)](json-files)</span>.

JSON is a widely used file format for exchanging data, and as a result, Vega has been adopted by many software programmes to store specifications of charts internally. Vega is also used to exchange chart specifications between different software programmes.

Vega has a smaller sister called [**Vega-Lite**](https://vega.github.io/vega-lite/). With Vega-Lite it is easier to create visualisation specifications, but it is not as flexible as Vega is. But just like with Vega, you can also describe the interactive behaviour of a visualisation.

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing horsepower and miles per gallons for various cars.",
  "data": {"url": "data/cars.json"},
  "mark": "point",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
  }
}
```

![Source: [vega.github.io/vega-lite/examples](https://vega.github.io/vega-lite/examples/point_2d.html)](Introduction%20and%20the%20origins%20of%20the%20Grammar%20of%20Gra%20750f4e73349846d4910a836da171d66d/vega-lite-scatter-plot-example.png)

Source: [vega.github.io/vega-lite/examples](https://vega.github.io/vega-lite/examples/point_2d.html)

<aside>
🔗 A full introduction to Vega-Lite can be found in <span class='internal-link'><a href='grammar-of-graphics-in-practice-vegalite'>Grammar of graphics in practice: Vega-Lite</a></span>.

</aside>

## Observable Plot

[Observable Plot](https://observablehq.com/@observablehq/plot?collection=@observablehq/plot) is a free and open-source JavaScript visualisation library based on the principles of the Grammar of Graphics. Plot is developed by [Observable](https://observablehq.com/), a platform for programmable notebooks based on JavaScript, with a heavy focus on data and data visualisation.

[A scatter plot of male (orange) and female (blue) athlete heights and weights made with Observable Plot. Source: [observablehq.com/@observablehq/plot](https://observablehq.com/@observablehq/plot)](https://observablehq.com/embed/@observablehq/plot?cells=dotplot)

A scatter plot of male (orange) and female (blue) athlete heights and weights made with Observable Plot. Source: [observablehq.com/@observablehq/plot](https://observablehq.com/@observablehq/plot)

<aside>
🔗 A full introduction to Observable and Observable Plot can be found in <span class='internal-link'><a href='grammar-of-graphics-in-practice-observable-plot'>Grammar of graphics in practice: Observable Plot</a></span>

</aside>

## Tableau

One of the biggest data visualisation software programmes, **[Tableau](https://www.tableau.com/)**, also has its roots in the Grammar of Graphics. Tableau is different from the above mentioned implementations, because it uses a graphical user interface instead of code and text. Users can drag columns in their data and drop them onto visual properties of the elements of a visualisation. Behind the scenes, Tableau is using a Grammar of Graphics based language to store the specifications of visualisations created with the tool.

![Source: [tableau.com](https://www.tableau.com/learn/tutorials/on-demand/tableau-interface?ssologin=true&check_logged_in=1)](Introduction%20and%20the%20origins%20of%20the%20Grammar%20of%20Gra%20750f4e73349846d4910a836da171d66d/tableau-interface.png)

Source: [tableau.com](https://www.tableau.com/learn/tutorials/on-demand/tableau-interface?ssologin=true&check_logged_in=1)

<aside>
🔗 A full introduction to Tableau can be found in <span class='internal-link'><a href='grammar-of-graphics-in-practice-tableau'>Grammar of graphics in practice: Tableau</a></span>

</aside>
