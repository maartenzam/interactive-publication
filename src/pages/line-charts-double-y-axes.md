Adding a secondary y axis is an often used technique to show the evolution of two time series in different units, and to show how both series are connected. But this technique suffers from some issues.

The first issue is that the user needs to know which time series should be read on which axis. If this isn’t obvious, the reader will get confused. Usually this connection is made through the use of colour, like on this chart shared by US President Biden on Twitter.

![A chart showing the oil price and the gasoline price on a single chart with 2 y axes. Red and blue are used to communicate what line should be read from which axis](Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/double-y-axis-biden.png)

Source: [@POTUS](https://twitter.com/POTUS/status/1504073842871963653)

But look what happens when this chart is printed in black and white.

![The same chart as above, but in greyscale. It is not possible anymore to know what line belongs to what axis](Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/double-y-axis-bw-100.jpg)

Source: [@POTUS](https://twitter.com/POTUS/status/1504073842871963653)

It has become impossible to read the chart correctly, now that the colour has been removed.

Another issue is how the upper and lower values of the y axes are chosen. Double y axis charts almost never have axes starting at zero (see also the <span class='internal-link'>[scales in line charts](scales-in-line-charts)</span> page). The reason for this is that chart authors making use of double axes often have the intent to show some kind of correlation between the 2 time series on the chart. And as a chart author you can control the upper and lower values of both axis, which makes “fitting the lines” quite easy.

“Spurious correlations”, [a website](https://www.tylervigen.com/spurious-correlations) and book by Tyler Vigen, proofs that you can show correlations (and suggest causality, see the <span class='internal-link'>[correlation is not causation](correlation-is-not-causation)</span>) between many completely unrelated time series.

![A double y axis chart titled 'Number of people who drowned by falling into a pool correlates with Films Nicolage Cage appeared in', with a black and a red line seemingly very correlated](Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/spurious-correlations-1.png)

Source: [tylervigen.com/spurious-correlations](https://www.tylervigen.com/spurious-correlations)

![A double y axis chart titled 'Per capita cheese consumption correlates with Number of people who died by becoming tangled in their bedsheets', with a black and a red line seemingly very correlated](Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/spurious-correlations-2.png)

Source: [tylervigen.com/spurious-correlations](https://www.tylervigen.com/spurious-correlations)

The easiest technique to avoid the secondary y axis is just to make **2 separate charts** and put them side by side or on top of each other.

You could also index both time series and make them relative to their first value. To do so, you  divide all values by the first value in the time series (and multiply them by 100 if you want the indexed values to be relative to 100). Doing so resolves the issue of the time series being in different units.

<iframe width="100%" height="450" src="https://www.youtube.com/embed/qs7h19vaqQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

_Source: [youtube.com/@eagereyes](https://www.youtube.com/@eagereyes)_

An interesting alternative chart type for showing correlation between different time series is to use a connected scatterplot. In a connected scatterplot the values of the 2 time series are plotted on the x and y axis, and time is shown by connecting the dots in the scatterplot in chronological order. Below is an example of a double axis line chart next to a connected scatterplot based on the same data (US military budget vs number of troops).

![Two time series (the number of troops and the budget of the US army) plotted on a double y axis chart on the left, and on a connected scatter plot on the right](Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/connected-scatter-troop-costs.png)

Source: [steveharoz.com/research/connected_scatterplot](http://steveharoz.com/research/connected_scatterplot/)