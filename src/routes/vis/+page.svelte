<script>
	import pages from '$lib/data/pages.json';
	import ForceGraph from '$lib/components/ForceGraph.svelte';
	//import calculateGraph from '$lib/utils/calculateGraph.js'

	$: designPages = pages.filter(d => d.t1 == "Design principles")
</script>

<main>
	<h1>Visualisation</h1>
	<ForceGraph
		pagesData={designPages}
		chargeStrength={-2}
		labelLevel={2}
		nodeScaling={3}
		depth={3}
		root={false}
		secondaryModules={true}/>
</main>