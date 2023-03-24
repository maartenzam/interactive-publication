<script>
	import Katex from "$lib/components/Katex.svelte"
</script>

Choosing the best chart type to deliver your data message is not easy: many different chart types exist, and they all highlight different aspects of your data.

![A comic in which Brewster Rockit talks about different chart types](Choosing%20the%20right%20chart%20type%20for%20your%20story%20534c70625e194b62ad932d52825d1579/brewster-rocket-comic.jpg)

Source: [gocomics.com/brewsterrockit](https://www.gocomics.com/brewsterrockit/2020/05/03)

Picking a chart type is a lot more than just looking at the columns in your data to see what kind of data you have at hand. If there would be a function to calculate the chart type to use, it might look like this:

<p class="center">
<Katex math={"ChartType = f(dataTypes, message, dataSize,audience, medium)"}></Katex>
</p>

In this module, we break down this formula to learn how we can use it to pick an appropriate chart type.