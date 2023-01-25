In the Grammar of Graphics, geometric objects are the visual elements of which the properties are used to encode data. Many geometric objects exist, and this module intends to give an overview of the available geometries.

Here, we step away from the abstract Grammar of Graphics, and we are going to reference the visualisation tools based on the Grammar that are introduced in <span class='internal-link'>[Implementations of the Grammar of Graphics](implementations-of-the-grammar-of-graphics)</span>. These tools are:

- [ggplot2](https://ggplot2.tidyverse.org/), a visualisation package for the R programming language (the “gg” stands for Grammar of Graphics)
- [Vega-Lite](https://vega.github.io/vega-lite/), a language to describe visualisations with the Grammar, using the JavaScript Object Notation syntax (JSON)
- [Observable Plot](https://observablehq.com/@observablehq/plot), an open-source JavaScript library

All three tools share the Grammar of Graphics philosophy, but their practical implementation and terminology differ a little bit between them. For example, geometric objects are called **geometries** (or **geoms** for short) in ggplot2, while they are called **marks** in Vega-Lite and Observable Plot. In this training, we are using the term “geometries”.

This <span class='internal-link'>[Geometric objects in detail](tag/geometric-objects-in-detail)</span> pages give an overview of the geometries available in the 3 tools, without going too much into detail about how the geometries can be used in each tool. This is discussed in:

- <span class='internal-link'><a href='grammar-of-graphics-in-practice-ggplot2'>Grammar of Graphics in practice: ggplot2</a></span>
- <span class='internal-link'><a href='grammar-of-graphics-in-practice-vegalite'>Grammar of Graphics in practice: Vega-Lite</a></span>
- <span class='internal-link'><a href='grammar-of-graphics-in-practice-observable-plot'>Grammar of Graphics in practice: Observable Plot</a></span>