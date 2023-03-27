<script>
	import Katex from "$lib/components/Katex.svelte"
</script>

The following chart was shown on German tv and is supposed to show that out of 1,6 million vaccinations with the AstraZenica covid-19 vaccine, 8 people were affected by blood clots in cerebral veins.

![A graphic in which 25 black icons of people represent 1,6 million vaccinations and 8 yellow icons represent 8 people affected by blood clots in cerebral veins](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/impfungen-ard.jpg)

Source: [@FabianHabersack](https://twitter.com/FabianHabersack/status/1372528459822555141)

The proportions are completely off in this graphic: it shows 33 icons, of which 8 developed blood clots (the orange icons on the right). The graphic suggest that almost a quarter of vaccinated people develop blood clots, while in reality, it is only 0,00005%.

Of course, it is difficult to visualise 8 cases out of 1,6 million on television. But that it is possible, proofs the following chart on the same topic. It shows the number of cases of blood clots in the treatment and control groups in the AstraZeneca clinical trial, and preserves the proportions in the data completely.

![A visual showing the proportions 4 out of 12.021 and 8 out of 11.724 with little squares](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/blood-clots-philippe-desmet.png)

Source: [@pfsmet](https://twitter.com/pfsmet/status/1371544322735288321)

A common way of (accidentally) distorting proportions happens when surface area is used to visualise numerical data. Take for example these two circles, meant to show the difference between the numbers 37,7 and 69,2:

![A blue circle representing the number 37,7 and a red circle representing the number 69,2](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/demorgen-cirkels.jpg)

Source: De Morgen

 Looking at the numbers, the blue circle should fit less than 2 times in the red circle. But the red circle is much bigger than 2 times the blue one.

![The same circles as above, with all text removed](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/demorgencirkels_nooverlap.jpg)

Source: Maarten Lambrechts, CC BY SA 4.0

In fact the blue one fits around 3 times in the red one.

![The blue circle copied 3 times and overlaid over the red circle](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/demorgencirkels_allcirkels.jpg)

Source: Maarten Lambrechts, CC BY SA 4.0

What probably happened here with the circles was that the designer of the circles took the numbers 37,7 and 69, 2 and mapped them to the radius of the circles. From the image on the left below, you can see that the radii of the circles more or less have the correct proportions.

![The radii of both circles represented as lines](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/demorgencirkels_staven.jpg)

Source: Maarten Lambrechts, CC BY SA 4.0

![The radii of both circles visualised in their circles](Pitfalls%20in%20dataviz%20scales%20and%20proportions%20c55dba398451424aa684d319018f8380/demorgencirkels_stralen.jpg)

You might remember that the formula to calculate the surface area of a circle is

<p class="center">
<Katex math={"area = \pi*radius^2"}></Katex>
</p>

So while the proportions between the bigger and smaller numbers is

<p class="center">
<Katex math={"69,2/37,7 = 1,84"}></Katex>
</p>

the proportions between the areas of the bigger and smaller circles is

<p class="center">
<Katex math={"\pi*69,2^2/\pi*37,7^2 = 69,2^2/37,7^2 = 4788/1421 = 3,37"}></Katex>
</p>

So when using the surface area of circles to encode numbers, you should take the square root of the numbers first before using them as the radius for scaling the circles.

The following video shows that this also applies to the surface area of squares, and explains what this means if you scale the width and height of icons to communicate numbers.

<iframe width="100%" height="450" src="https://www.youtube.com/embed/BW3YNLsmn8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

_Source: [eagereyes - Robert Kosara](https://eagereyes.org/eagereyestv/new-video-linear-vs-quadratic-change)_