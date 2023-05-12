<script>
  export let sidebarOpen
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { location } from '$lib/stores/stores.js';

  const upperLowerX = tweened(8, {
		duration: 1000,
		easing: cubicOut
	});
  const arrowHeadRotation = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

  $: if(sidebarOpen){
    upperLowerX.set(80)
    arrowHeadRotation.set(45)
  }
  $: if(!sidebarOpen){
    upperLowerX.set(8)
    arrowHeadRotation.set(0)
  }
</script>

<div class="hamburger-container">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128">
  <g id="home" class={!sidebarOpen && $location.type == "home" ? "light" : "dark"}>
    <line x1={$upperLowerX} y1={28} x2={120} y2={28}/>
    <line x1={8} y1={64} x2={120} y2={64}/>
    <line x1={$upperLowerX} y1={100} x2={120} y2={100}/>
    <line x1={8} y1={64} x2={40} y2={64} transform={`rotate(${$arrowHeadRotation},8,64)`}/>
    <line x1={8} y1={64} x2={40} y2={64} transform={`rotate(${-$arrowHeadRotation},8,64)`}/>
  </g>
</svg>
</div>

<style>
  .hamburger-container {
    width: 20px;
    height: 20px;
    float: right;
  }
  line {
    transition: stroke 1s;
    stroke-width: 14;
    stroke-linecap: round;
  }
  .dark {
    stroke: #000000;
  }
  .light {
    stroke: #ffffff;
  }
</style>