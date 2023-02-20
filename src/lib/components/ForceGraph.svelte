<script>
	import { onMount } from 'svelte';
	import { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } from 'd3-force';
	import { slugify } from '$lib/utils/slugs.js';
	import { linkVertical, linkHorizontal } from 'd3-shape'

	export let data;
	export let activePageData;
	export let chargeStrength;
	export let labelLevel;
	export let nodeScaling;
	//export let tagPages;

	let width = 960;
	let height = 960;

	$: edges = data.edges;
	$: nodes = data.nodes;

	const colorScale = {
		root: '#eeeeee',
		'Design principles': '#C73938',
		'Data storytelling': '#316DB0',
		Pitfalls: '#661188',
		'Dataviz in practice': '#53793F',
		'Chart types': '#D96694',
		Accessibility: '#707070',
		'Grammar of Graphics': '#E49A3E'
	};

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
					.distance(0.5)
					.strength(0.5)
			)
			.force(
				'collide',
				forceCollide().radius((d) =>
					d.depth == 0 ? 100 : d.depth == 1 ? 0 : d.depth == 2 ? 100 : 4
				)
			)
			.force('charge', forceManyBody().strength(chargeStrength))
			.force('center', forceCenter(width / 2, height / 2).strength(0.01))
			.on('tick', () => {
				simulation.tick();
				nodes = [...nodes];
				edges = [...edges];
			});
	}

	onMount(network);

	let linkGenerator = linkHorizontal().x(d => d.x).y(d => d.y)
</script>

<svg {width} {height}>
	{#each edges as edge}
		{#if edge.source && (edge.depth || edge.depth == 0)}
			<g stroke="#C73938" stroke-opacity="0.6">
				<path
					d={linkGenerator(edge)}
					fill="none"
					stroke-width={edge.depth == 0 ? 6 : edge.depth == 1 ? 0 : edge.depth == 2 ? 2 : 1}
					stroke={colorScale[edge.target.id]}><title>{edge.source.id}</title></path>
				<!--line
					x1={edge.source.x}
					y1={edge.source.y}
					x2={edge.target.x}
					y2={edge.target.y}
					stroke-width={edge.depth == 0 ? 6 : edge.depth == 1 ? 0 : edge.depth == 2 ? 2 : 1}
					stroke={colorScale[edge.target.id]}
				>
					<title>{edge.source.id}</title>
				</line-->
			</g>
		{/if}
	{/each}

	{#each nodes as point}
		{#if activePageData && point.id == activePageData.title}
			<circle r={10 * nodeScaling} stroke={'black'} stroke-width={3} cx={point.x} cy={point.y} />
		{/if}
		{#if point.depth || point.depth == 0}
			<a href={point.depth == 3 ? point.id : 'tag/' + slugify(point.id)}>
				<circle
					class="node"
					r={point.depth == 0
						? 12 * nodeScaling
						: point.depth == 1
						? 0 * nodeScaling
						: point.depth == 2
						? 5 * nodeScaling
						: (4 * nodeScaling) / 2}
					fill={colorScale[point.id]
						? colorScale[point.id]
						: edges.find((d) => d.source.id == point.id) &&
						  colorScale[edges.find((d) => d.source.id == point.id).target.id]
						? colorScale[edges.find((d) => d.source.id == point.id).target.id]
						: '#C73938'}
					cx={point.x}
					cy={point.y}
				>
					<title>{point.id}</title></circle
				>
			</a>
		{/if}
	{/each}

	{#each nodes as point}
		{#if point.depth || point.depth == 0}
			{#if point.depth <= labelLevel && point.depth > 1}
				<a href={'tag/' + slugify(point.id)}>
					<text
						class={point.depth < 2 ? 'texthalo caps' : 'texthalo'}
						x={point.x}
						y={point.y}
						dy={5}
						text-anchor={'middle'}
						fill={colorScale[point.id] ? colorScale[point.id] : '#C73938'}>{point.id}</text
					>
				</a>
			{/if}
		{/if}
	{/each}
</svg>

<style>
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
