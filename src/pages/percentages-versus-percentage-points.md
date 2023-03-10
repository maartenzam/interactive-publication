<script>
	import Katex from "$lib/components/Katex.svelte"
	import {Tweet} from 'sveltekit-embed'
</script>

In November 2020, Danish researchers published the results of a study on the effects of mask wearing on the spread of covid-19. The researchers had recruited 5.000 volunteers and divided these people into 2 group: 2.500 people would wear masks whenever they would move in public spaces, and the other 2.500, the control group, would wear no masks.

After a period of 1 month, all participants in the study were tested for covid-19. Among the people who didn’t wear masks 2,1 percent tested positive, while 1,8 percent of the mask wearers tested positive.

“A very small effect, wearing masks only reduces infections by 0,3 percent!” people against the wearing of masks argued. But others argued that the reduction in infections was in fact a 14 percent reduction, a much higher number that confused a lot of people.

<Tweet tweetLink="ClarkeMicah/status/1339653223926423553"></Tweet>

So what happened?

The people behind the 0,3 percent number calculated the difference between two percentages (2,1% and 1,8%) and mistakenly called it a **percentage difference**. But in order to calculate a percentage difference, you need to take the difference of the initial value and the new value, and make that difference relative to the initial value:

<p class="center">
<Katex math={"percentageChange = (newValue - initialValue)/initialValue"}></Katex>
</p>

Putting in the values from the study, the effect of the wearing of masks can be calculated:

<p class="center">
<Katex math={"percentageChange = (2,1 - 1,8)/2,1 = 0,14 = 14"}></Katex>%
</p>

So the effect of mask wearing the researchers had found, was indeed 14 percent. The simple difference between the two percentages is not called a percentage, but a **percentage point** difference. So you could either say that the study had measured an effect of 0,3 percentage points, or an effect of 14 percent.

In the end, it didn’t really matter, as the study was inconclusive given the sample size and the measured effect. But in order to avoid any misunderstanding about the size of an effect or of a change in values, make sure to call the result of a simple subtraction of percentages a difference in percentage points.