<script>
	import { onMount } from 'svelte';
	import { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } from 'd3-force';
	import { slugify } from '$lib/utils/slugs.js';
	import { linkVertical, linkHorizontal } from 'd3-shape'
	import calculateGraph from '$lib/utils/calculateGraph.js'
	import { topicColors } from '$lib/styles/colors.js'
	import { base } from '$app/paths';

	export let pagesData;
	export let activePageData;
	export let chargeStrength;
	export let labelLevel;
	export let nodeScaling;
	export let depth;
	export let root;
	export let secondaryModules
	export let height;
	//export let tagPages;

	$: data = calculateGraph(pagesData, depth, root, secondaryModules)

	$: edges = data.edges;
	$: nodes = data.nodes;

	function getNodeTopicColor(nodeID){
		if(topicColors[nodeID]){
			return topicColors[nodeID]
		}
		else if(edges.find((d) => d.source.id == nodeID) && topicColors[edges.find((d) => d.source.id == nodeID).target.id]){
			return topicColors[edges.find((d) => d.source.id == nodeID).target.id]
		}
		else if(edges.find((d) => d.source.id == nodeID)) {
			let m1 = edges.find((d) => d.source.id == nodeID).target.id
			let t1 = edges.find(d => d.source.id == m1).target.id
			return topicColors[t1]
		}
	}

	function getEdgeTopicColor(edge){
		if(edge.depth == 0){
			return topicColors[edge.source.id]
		}
		if(edge.depth == 1){
			return topicColors[edge.target.id]
		}
		if(edge.depth == 2){
			return getNodeTopicColor(edge.target.id)
		}
	}

	/*$: taggedNodes = nodes.filter((d) =>
    tagPages.map((d) => d.title).includes(d.id)
  );*/

	let simulation;
	function network() {
		simulation = forceSimulation(nodes)
			.force(
				'link',
				forceLink(edges)
					.id((d) => d.id)
					.distance(0.1)
					.strength(0.2)
			)
			.force(
				'collide',
				forceCollide().radius((d) =>
					d.depth == 0 ? 0 : d.depth == 1 ? 0 : d.depth == 2 ? 0 : 4
				)
			)
			.force('charge', forceManyBody().strength(chargeStrength))
			.force('center', forceCenter(width / 2, height / 2).strength(1))
			.on('tick', () => {
				simulation.tick();
				nodes = [...nodes];
				edges = [...edges];
			});
	}

	onMount(network);

	//let linkGenerator = linkHorizontal().x(d => d.x).y(d => d.y)

	let width
</script>
<div class="graph-container" bind:clientWidth={width}>
<svg width={'100%'} {height}>
	{#each edges as edge}
		{#if edge.source && (edge.depth || edge.depth == 0)}
			<g>
				<!--path
					d={linkGenerator(edge)}
					fill="none"
					stroke-width={edge.depth == 0 ? 6 : edge.depth == 1 ? 0 : edge.depth == 2 ? 2 : 1}
					stroke={colorScale[edge.target.id]}><title>{edge.source.id}</title></path-->
				<line
					x1={edge.source.x}
					y1={edge.source.y}
					x2={edge.target.x}
					y2={edge.target.y}
					stroke-width={edge.depth == 0 ? 6 : edge.depth == 1 ? 3 : edge.depth == 2 ? 2 : 1}
					opacity={edge.depth == 0 ? 1 : edge.depth == 1 ? 0.7 : 0.3}
					stroke={getEdgeTopicColor(edge)}
				>
					<title>{edge.source.id}</title>
				</line>
			</g>
		{/if}
	{/each}

	{#each nodes as point}
		{#if activePageData && point.id == activePageData.title}
			<circle r={10 * nodeScaling} stroke={'black'} stroke-width={3} cx={point.x} cy={point.y} />
		{/if}
		{#if point.depth}
			<a href={point.depth == 3 ? `${base}/${point.id }`: `${base}/tag/${slugify(point.id)}`}>
				<circle
					class="node"
					r={point.depth == 0
						? 0 * nodeScaling
						: point.depth == 1
						? 7 * nodeScaling
						: point.depth == 2
						? 5 * nodeScaling
						: (4 * nodeScaling) / 2}
					fill={getNodeTopicColor(point.id)}
					cx={point.x}
					cy={point.y}
				>
					<title>{point.id}</title></circle
				>
			</a>
		{/if}
		{#if point.depth == 0}
				<circle
					class="node"
					r={point.depth == 0
						? 0 * nodeScaling
						: point.depth == 1
						? 7 * nodeScaling
						: point.depth == 2
						? 5 * nodeScaling
						: (4 * nodeScaling) / 2}
					fill={getNodeTopicColor(point.id)}
					cx={point.x}
					cy={point.y}
				>
					<title>{point.id}</title></circle
				>
		{/if}
	{/each}

	{#each nodes as point}
		{#if point.depth || point.depth == 0}
			{#if point.depth <= labelLevel && point.depth != 0}
				<a href={point.depth == 3 ? `${base}/${point.id }`: `${base}/tag/${slugify(point.id)}`}>
					<text
						class={point.depth < 2 ? 'texthalo caps' : 'texthalo'}
						x={point.x}
						y={point.y}
						dy={5}
						text-anchor={'middle'}
						fill={getNodeTopicColor(point.id)}>{point.id}</text
					>
				</a>
			{/if}
		{/if}
	{/each}
</svg>
</div>

<style>
	.graph-container {
		width: 100%;
	}
	circle {
		stroke: #fff;
		stroke-width: 1.5;
	}
	.texthalo {
		text-shadow: -1px -1px white, -1px 1px white, 1px 1px white, 1px -1px white, -1px 0 white,
			0 1px white, 1px 0 white, 0 -1px white;
	}
	.caps {
		text-transform: uppercase;
	}
</style>
