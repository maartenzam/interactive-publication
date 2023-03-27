Managing a collection of styled templates is a good way of ensuring a consistent styling for your visualisations. But this requires some work: the templates need to be created, and making changes to your visualisation style requires updating all templates.

That is why some tools take a different approach. Instead of having a styled template for each chart type, these tools use a theming system that can be applied to any chart you make with the tool. The theming system is independent from the chart type, and because of this, the styling only needs to be managed in the theme.

A tool using this approach is Datawrapper. In the Layout tab, you can select a theme with a dropdown menu.

<p class='center'>
<img src='Reproducing%20and%20reusing%20visualisations%20f0a47303bda6460eb93956910177ad23/datawrapper-themes.png' alt='A list of available chart styles in Datawrapper' class='max-400' />
</p>

Available themes in Datawrapper free accounts. Source: Maarten Lambrechts, CC BY SA 4.0

Datawrapper offers custom themes, with custom fonts, colours and logos, but only for paying plans.

A free and open source tool that is also using a theming system is the ggplot2 package of the R programming language. The package has some built in themes, and additional packages provide more themes.

![A scatter plot witht the default ggplot2 theming](Reproducing%20and%20reusing%20visualisations%20f0a47303bda6460eb93956910177ad23/ggtheme-1.png)

The default ggplot2 theme. Source: [ggplot2 reference](https://ggplot2.tidyverse.org/reference/ggtheme.html)

![A scatter plot themed with ggplot2's theme_dark](Reproducing%20and%20reusing%20visualisations%20f0a47303bda6460eb93956910177ad23/ggtheme-5.png)

theme_dark. Source: [ggplot2 reference](https://ggplot2.tidyverse.org/reference/ggtheme.html)

![A scatter plot themed with ggplot2's theme_bw](Reproducing%20and%20reusing%20visualisations%20f0a47303bda6460eb93956910177ad23/ggtheme-2.png)

theme_bw. Source: [ggplot2 reference](https://ggplot2.tidyverse.org/reference/ggtheme.html)

![A scatter plot themed with ggplot2's theme_minimal](Reproducing%20and%20reusing%20visualisations%20f0a47303bda6460eb93956910177ad23/ggtheme-6.png)

theme_minimal. Source: [ggplot2.tidyverse.org/reference/ggtheme.html](https://ggplot2.tidyverse.org/reference/ggtheme.html)

Changing the theme of ggplot visualisation is as easy as adding one line to the code of your visualisation. If needed, the theming of specific elements on the chart can be overridden, and if you want you can develop a full theme to style your and your organisations charts.

The BBC produces many of its charts with R and ggplot2. In order to maintain a consistent styling and to save time on styling charts, it developed [its own theme](https://bbc.github.io/rcookbook/) to create publication-ready graphics in their in-house styling.

![ ](Reproducing%20and%20reusing%20visualisations%20f0a47303bda6460eb93956910177ad23/bbc-default-ggplot.png)

A chart using the default ggplot2 theme. Source: Maarten Lambrechts, CC BY SA 4.0

![ ](Reproducing%20and%20reusing%20visualisations%20f0a47303bda6460eb93956910177ad23/bbc_style.png)

The same chart styled with the BBC ggplot2 theme. Source: Maarten Lambrechts, CC BY SA 4.0