<script>
    import Katex from "$lib/components/Katex.svelte"
</script>

You might be worse at estimating and comparing the difference between lines and curves than you think.

Check the curves on the line chart below. Where do you think difference between both curves is the biggest?

<p class='center'>
<img src='Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/difference-line-chart2x.png' alt='A line chart with 2 lines, who seem to be closer together where the values for both lines strongly rise' class='max-400' />
</p>

Source: Maarten Lambrechts, CC BY SA, 4.0

It may surprise you that both curves are identical, the only difference being that the orange curve is shifted up by a constant. The curves represent

<p class="center">
<Katex math={"y = x^3"}></Katex>
</p>

and

<p class="center">
<Katex math={"y = x^3 + 1000"}></Katex>
</p>

Below, the vertical distance between both curves are highlighted:

<p class='center'>
<img src='Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/difference-line-annotations2x.png' alt='The same line chart as above, but with arrows showing the vertical distance between both lines on three locations on the chart' class='max-400' />
</p>

Source: Maarten Lambrechts, CC BY SA, 4.0

Even when you know that that the shapes of the 2 curves are identical, it is still difficult to see that the vertical distance between the two lines is the same across the whole of the chart. This illusion makes it difficult to visually estimate differences between lines, especially lines with steep slopes.

Here is an example of this optical illusion at work with real life data.

<p class='center'>
<img src='Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/observable-optical-illusion-1.png' alt='A line chart showing 2 lines. An annotation points to a line highlighting the shortest difference between the 2 lines' class='max-600' />
</p>

Source: [Analyzing Time Series Data](https://observablehq.com/@observablehq/analyzing-time-series-data#cell-615), observablehq.com

<p class='center'>
<img src='Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/observable-optical-illusion-2.png' alt='The same chart as above, but with the vertical distance between both lines highlighted, which is much bigger than what we perceive' class='max-600' />
</p>

Source: [Analyzing Time Series Data](https://observablehq.com/@observablehq/analyzing-time-series-data#cell-615), observablehq.com

A solution for this illusion is to plot the difference instead of the absolute values.

<p class='center'>
<img src='Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/observable-optical-illusion-3.png' alt='A different version of the charts above, with the lines removed and the differences between them highlighted' class='max-600' />
</p>

Source: [Analyzing Time Series Data](https://observablehq.com/@observablehq/analyzing-time-series-data#cell-615), observablehq.com

The differences can be aligned, to create an even clearer view.

<p class='center'>
<img src='Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/observable-optical-illusion-4.png' alt='On this chart, the differences between the lines are shifte to have a common baseline' class='max-600' />
</p>

Source: [Analyzing Time Series Data](https://observablehq.com/@observablehq/analyzing-time-series-data#cell-615), observablehq.com