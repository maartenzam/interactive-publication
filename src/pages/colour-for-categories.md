Chart types like line charts, stacked area and stacked bar charts need colour to tell the categories visualised apart.

<p class='center'>
<img src='Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/stacked-bars2x.png' alt='A stacked bar chart with 3 colours (grey, red and purple) representing 3 categories in the data' class='max-600' />
</p>

Source: Maarten Lambrechts, CC BY 4.0

Other chart types, like scatter plots and bar charts, don’t necessary need colour to distinguish between categories...

![A bubble chart with bubbles of the same pink colour](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/gapminder-single-colour.png)

In this Gapminder bubble chart, each bubble represents a country. Source: [Gapminder](https://www.gapminder.org/tools/#$model$markers$bubble$encoding$color$data$constant=_default;&scale$type:null&domain:null&zoomed:null&palette$palette$_default=%23f44cab;;;;;;;;&chart-type=bubbles&url=v1)

...but they can if needed. This adds an additional dimension to a visualisation.

![ ](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/gapminder.png)

In this bubble chart, the countries (bubbles) are coloured according to the region they are part of. Source: [Gapminder](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1)

So, many visualisations use colours to indicate some **categorical values** (sometimes also called qualitative or nominal values) in the data. What should you consider when picking colours for categorical colour palettes?

First of all, the colours should be different enough, so readers can tell them apart. A simple approach to this is to take the color wheel, and extract colors that are as far apart as possible. For a four colour palette, you can select the “Square” colour harmony in the [Adobe Color Wheel](https://color.adobe.com/create/color-wheel), and optionally set the saturation and brightness of the colours to the same values for all the colours (avoid fully saturated colours when you do this):

![A screenshot of the Adobe Color Wheel interface](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/square-colour-wheel.png)

Set the Color Mode in the bottom left corner to adjust the H(ue) and B(rightness) of the colours. Source: [Adobe Color](https://color.adobe.com/create/color-wheel)

This palette looks to work fine for different kind of visualisations.

![The colour palette of the Adobe Color Wheel above applied to a stacked area chart, a line chart and a scatter plot](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/viz-palette-1.png)

Source: Maarten Lambrechts, CC BY 4.0

When some categories in the data are related to each other, or in other words, you have categories and subcategories in the data, you can consider a “Complementary” colour harmony. Keep the hue for the complementary colours constant, and adjust the saturation and lightness of the colours (see the <span class='internal-link'>[Describing colours: HSL](describing-colours-hsl)</span> page) to make them distinctive enough.

![Screenshot of the Adobe Color Wheel showing complementary pink and green colours](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/complementary-colour-wheel.png)

Source: [Adobe Color](https://color.adobe.com/create/color-wheel)

This palette also looks to work ok.

![The green - pink colour palette applied to a stacked area chart, a line chart and a scatter plot](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/viz-palette-2.png)

Source: Maarten Lambrechts, CC BY 4.0

These colour palettes are a good start. But there are other things to consider. Probably the most important one is accessibility: how do people with colour blindness see these colour palettes? 

Here we run into issues with the first palette. It works ok for deuteranomaly and protanomaly (both are mild forms of red - green colour blindness), but doesn’t work for protanopia and deuteranopia (full red-green and blue-green colour blindness).

![ ](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/deuteranomaly.png)

The colours of the first categorical palette as [seen through eyes with deuteranomaly](https://projects.susielu.com/viz-palette?colors=[%22#60f070%22,%22#f0c960%22,%22#6080f0%22,%22#f06085%22]&backgroundColor=%22white%22&fontColor=%22black%22&mode=%22deuteranomaly%22)

![ ](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/protanomaly.png)

The colours of the first categorical palette as [seen through eyes with protanomaly](https://projects.susielu.com/viz-palette?colors=[%22#60f070%22,%22#f0c960%22,%22#6080f0%22,%22#f06085%22]&backgroundColor=%22white%22&fontColor=%22black%22&mode=%22protanomaly%22)

![ ](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/protanopia.png)

The colours of the first categorical palette as [seen through eyes with protanopia](https://projects.susielu.com/viz-palette?colors=[%22#60f070%22,%22#f0c960%22,%22#6080f0%22,%22#f06085%22]&backgroundColor=%22white%22&fontColor=%22black%22&mode=%22protanopia%22)

![ ](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/deuteranopia.png)

The colours of the first categorical palette as [seen through eyes with deuteranopia](https://projects.susielu.com/viz-palette?colors=[%22#60f070%22,%22#f0c960%22,%22#6080f0%22,%22#f06085%22]&backgroundColor=%22white%22&fontColor=%22black%22&mode=%22deuteranopia%22)

These “colour blind visualisation previews” are generated with a tool called [Viz Palette](https://projects.susielu.com/viz-palette). For every combination of colours, this tool will generate a small colour report indicating which colours are too similar.

Below you can see that the palette we were using is a good palette for people without any kind of colour blindness. But the report confirms that we have an issue for people with deuteranopia.

![The color report of the colour palette as evaluated by Viz Palette](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/viz-palette-report-deuteranopia.png)

No issues detected for people with normal vision. Source: [Viz Palette](https://projects.susielu.com/viz-palette)

![ ](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/viz-palette-report-original.png)

The line connecting the light orange and the orange indicates that these colours are too similar for people suffering from deuteranopia. Source: [Viz Palette](https://projects.susielu.com/viz-palette)

Another issue is that the colour palette is not fit to be printed in greyscales:

![The colour applied to a stacked area chart, a line chart and a scatter plot, but in greyscale. The palette seems to have only 1 dark and 1 lighter grey](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/greyscale.png)

Source: [Viz Palette](https://projects.susielu.com/viz-palette)

<aside>
🔎 As a little exercise, evaluate how the categorical palette we designed with the “complementary” colour harmony performs for people with different kinds of colour blindness.  Use the following link and click the buttons on top of the visualisation previews on Viz Palette: <a href="https://projects.susielu.com/viz-palette?colors=%5B%22#ffb3f8%22,%22#e063d5%22,%22#941688%22,%22#86e063%22,%22#389414%22%5D">projects.susielu.com/viz-palette?colors=["#ffb3f8","#e063d5","#941688","#86e063","#389414"]</a>

</aside>

It is not easy to design colour-blind friendly categorical colour palettes. Luckily, researchers have studied this subject and developed and published palettes like this. The most known tool in this area is [ColorBrewer](https://colorbrewer2.org/).

![A web browser displaying the Color Brewer interface](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/ColorBrewer.png)

Source: [ColorBrewer](https://colorbrewer2.org/#type=qualitative&scheme=Set1&n=5)

ColorBrewer was designed to assist picking colours in cartography, but it just works as well for charts. When the “qualitative” option is selected under “Nature of your data”, ColorBrewer presents categorical palettes to choose from. Under “Only show”, you can select to show only colour blind safe palettes. But notice that only a single categorical palette with a maximum of 4 different colours is available when this option is selected. This suggests that colour blind safe categorical colour palettes are rare and hard to design.

![A web browser displaying the Color Brewer interface, showing a 4 colour qualitative colourblind safe palette with greens and blues](Colour%20use%20in%20data%20visualisation%20acd08b9e488e4cd9bd518e063a86f6b7/ColorBrewer-colourblind-safe.png)

Source: [ColorBrewer](https://colorbrewer2.org/#type=qualitative&scheme=Set1&n=5)

General guidelines for categorical colours palettes are:

- don’t use too many categories with different colours in your visualisation. Seven is a good maximum.
- avoid sequential colour palettes (see <span class='internal-link'>[Colour for numerical data](colour-for-numerical-data-introduction)</span>) for categorical data, because that suggests numerical data
- avoid overly saturated and very bright colours. Try to use colours with similar saturation and lightness
- you can use <span class='internal-link'>[colour harmonies](colour-harmonies)</span> to pick colours
- perform colour blindness tests on your picked colours