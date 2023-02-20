<script>
	import pages from '$lib/data/pages.json';
	import ForceGraph from '$lib/components/ForceGraph.svelte';
	import calculateGraph from '$lib/utils/calculateGraph.js'

	$: designPages = pages.filter(d => d.t1 == "Design principles")
</script>

<main>
	<h1>Visualisation</h1>
	<ForceGraph
		data={calculateGraph(designPages, 3, false, true)}
		chargeStrength={-200}
		labelLevel={2}
		nodeScaling={3}/>
</main>