<script>
	import pages from '$lib/data/pages.json';
	import ForceGraph from '$lib/components/ForceGraph.svelte';
	import calculateGraph from '$lib/utils/calculateGraph.js'
</script>

<main>
	<h1>Visualisation</h1>
	<ForceGraph data={calculateGraph(pages, 3, true)} />
</main>