<script>
    import Reveal from '$lib/components/Reveal.svelte'
</script>

The illusion that <span class='internal-link'>[distorts our view on the difference between 2 lines in a line chart](line-charts-perception-of-differences-between-lines)</span> is also relevant for stacked area charts, because in stacked area charts we also compare lines to estimate differences: the upper and lower boundaries of the areas:

<p class='center'>
<img src='Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/difference-areas2x.png' alt='' class='max-600' />
</p>

Source: Maarten Lambrechts, CC BY SA 4.0

The major drawback of stacked charts is that the shape of the “upper” areas is determined by the underlying shapes which they stacked upon. Changing the stacking order will produce results that are visually very different.

<p class='center'>
<img src='Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/difference-stack-reverse2x.png' alt='' class='max-600' />
</p>

Source: Maarten Lambrechts, CC BY SA 4.0

Stacked bar charts suffer from a related problem. Try to identify the longest bar for each colour in the chart below.

![Source: Maarten Lambrechts, CC BY SA 4.0](Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/stacked-bars2x.png)

Source: Maarten Lambrechts, CC BY SA 4.0

You will probably be able to tell which of the pink bars is the longest. But you will have a much harder time identifying the longest green and blue bar.

<Reveal label="Click on the little triangle on the left to reveal which of the green and blue bars are the longest." content="These are the values used to scale the bars in this visualisation. Notice how the used values for each colour are the same, they are just shuffled. <p class='center'>
<img src='Pitfalls%20in%20dataviz%20chart%20types%20f47a4f1dddfb41d0925e9a5a62833d98/stacked-bars-labels2x.png' alt='' />
</p><p>Source: Maarten Lambrechts, CC BY SA 4.0</p>"></Reveal>

The reason why it is harder to find the longest bar in the green and blue bars is that the bars do not share a common baseline. All the green and blue bars start at a different x position, while the pink bars all share the same starting point. In the example above, the baseline for the green and blue bars has only shifted a little bit, in real life stacked bar charts, this shift can be much bigger, making comparisons even harder.

A rule of thumb for stacked area and stacked bar charts is to only use them if the totals (the sum of all stacked shapes) is more important than the individual series. If you want the reader to be able to easily compare values and see the trends easily for individual series, using another, non-stacked chart type is more appropriate. These could be line charts or small multiples, for example.