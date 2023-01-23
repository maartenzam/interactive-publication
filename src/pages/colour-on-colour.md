<script>
    import Reveal from '$lib/components/Reveal.svelte'
</script>

Which of the 2 circles in the image below is darker, and which one is lighter?

![contrast-illusion@2x.png](Pitfalls%20in%20dataviz%20colours%2043f748a84c564ae5a1b4d6678b8171d7/contrast-illusion2x.png)

<Reveal label="Click here to reveal the answer" content="<p>Both circles are the exact same grey colour. 
<img src='Pitfalls%20in%20dataviz%20colours%2043f748a84c564ae5a1b4d6678b8171d7/contrast-illusion-nogradient2x.png' alt='' /></p>"></Reveal>

Our perception of the intensity of a colour is not only determined by the colour itself, but also by the contrast of the colour with its surroundings. So when you use colour to encode numerical values, you need to make sure that the background has the same colour, or at least does not have wildly varying colours and colour intensities.
