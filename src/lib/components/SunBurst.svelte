<script>
	import toc from '$lib/data/toc.json';
	import textlengths from '$lib/data/textlengths.json';
	import { hierarchy, partition } from 'd3-hierarchy';
	import { arc } from 'd3-shape';
	import { topicColors } from '$lib/styles/colors.js';
	import { base } from '$app/paths';

	export let filter;
	export let maxLabelLevel = 10;
	export let minLabelValue = 0;

	$: tocToVisualise = !filter
		? toc
		: filter.m1
		? toc.find((d) => d.title == filter.t1).children.filter((d) => d.title == filter.m1)
		: toc.filter((d) => d.title == filter.t1);

	function getNodeTopicColor(node) {
		if (node.depth == 0) {
			return 'none';
		}
		if (node.depth == 1) {
			return topicColors[node.data.title];
		}
		if (node.depth == 2) {
			return topicColors[node.parent.data.title];
		}
		if (node.depth == 3) {
			return topicColors[node.parent.parent.data.title];
		}
	}

	$: root = hierarchy(filter ? tocToVisualise[0] : { id: 'root', children: tocToVisualise }).sum(
		(d) => {
			if (d.slug && textlengths.find((p) => p.slug == d.slug)) {
				return textlengths.find((p) => p.slug == d.slug).nchar;
			} else {
				return 0;
			}
		}
	);
	//.sort((a, b) => b.value - a.value);

	$: radius = width / 2;
	const padding = 0;

	$: partition()
		.size([2 * Math.PI, radius])
		.padding(0)(root);

	$: arcGenerator = arc()
		.startAngle((d) => d.x0)
		.endAngle((d) => d.x1)
		.padAngle((d) => Math.min((d.x1 - d.x0) / 2, (2 * padding) / radius))
		.padRadius(radius / 2)
		.innerRadius((d) => d.y0)
		.outerRadius((d) => d.y1 - padding);

	let width;
</script>

<div bind:clientWidth={width}>
    {#if width}
	<svg width={'100%'} height={width}>
		<g transform={`translate(${width / 2},${width / 2})`}>
			{#each root.descendants() as node}
				<!--{#if node.depth != root.height}-->
					{#if node.depth != 0}
						<a
							href={!filter && node.depth == 3
								? `${base}/${node.data.slug}`
								: filter && filter.m1 && node.depth == 1
								? `${base}/${node.data.slug}`
								: filter && !filter.m1 && node.depth == 2
								? `${base}/${node.data.slug}`
								: `${base}/tag/${node.data.slug}`}
						>
							<path
								d={arcGenerator(node)}
								fill={!filter ? getNodeTopicColor(node) : topicColors[filter.t1]}
								stroke={'white'}
								stroke-width={2 - (50 * node.depth) / 100}
								style:filter={`brightness(${100 + 7 * node.depth}%)`}
							/>
						</a>
					{:else}
						<path
							d={arcGenerator(node)}
							fill={!filter ? getNodeTopicColor(node) : topicColors[filter.t1]}
							stroke={'white'}
							stroke-width={1}
						/>
					{/if}
				<!--{/if}-->
                <!--{#if node.depth == root.height}
                        <circle
                        cx={arcGenerator.centroid(node)[0]}
						cy={arcGenerator.centroid(node)[1] + 5} 
                        r={4}
                        fill={!filter ? getNodeTopicColor(node) : topicColors[filter.t1]}
                        stroke={'#ffffff'}
                        stroke-width={1}
                        ></circle>
                {/if}-->
			{/each}
			{#if filter}
				<text
					text-anchor="middle"
					x={0}
					y={0}
					fill={'#ffffff'}
					style:text-transform={'uppercase'}
					style:text-shadow={`-1px -1px ${topicColors[filter.t1]}, -1px 1px ${
						topicColors[filter.t1]
					}, 1px 1px ${topicColors[filter.t1]}, 1px -1px ${topicColors[filter.t1]}, -1px 0 ${
						topicColors[filter.t1]
					}, 0 1px ${topicColors[filter.t1]}, 1px 0 ${topicColors[filter.t1]}, 0 -1px ${
						topicColors[filter.t1]
					}`}>{filter.m1 ? filter.m1 : filter.t1}</text
				>
			{/if}
			{#each root.descendants() as node}
				{#if node.depth > 0 && node.depth <= maxLabelLevel && node.value > minLabelValue}
					<text
						fill="white"
						text-anchor="middle"
						style:text-transform={node.depth == 1 ? 'uppercase' : ''}
						x={arcGenerator.centroid(node)[0]}
						y={arcGenerator.centroid(node)[1] + 5}
						style:text-shadow={`-1px -1px ${
							!filter ? getNodeTopicColor(node) : topicColors[filter.t1]
						}, -1px 1px ${!filter ? getNodeTopicColor(node) : topicColors[filter.t1]}, 1px 1px ${
							!filter ? getNodeTopicColor(node) : topicColors[filter.t1]
						}, 1px -1px ${!filter ? getNodeTopicColor(node) : topicColors[filter.t1]}, -1px 0 ${
							!filter ? getNodeTopicColor(node) : topicColors[filter.t1]
						}, 0 1px ${!filter ? getNodeTopicColor(node) : topicColors[filter.t1]}, 1px 0 ${
							!filter ? getNodeTopicColor(node) : topicColors[filter.t1]
						}, 0 -1px ${!filter ? getNodeTopicColor(node) : topicColors[filter.t1]}`}
						transform={`
                    rotate(${
											(((node.x0 + node.x1) / 2) * 180) / Math.PI < 180
												? (((node.x0 + node.x1) / 2) * 180) / Math.PI - 90
												: (((node.x0 + node.x1) / 2) * 180) / Math.PI + 90
										},
                    ${arcGenerator.centroid(node)[0]},
                    ${arcGenerator.centroid(node)[1] + 5})`}>{node.data.title}</text
					>
				{/if}
			{/each}
		</g>
	</svg>
    {/if}
</div>

<style>
	text {
		pointer-events: none;
		font-size: 0.7rem;
	}
</style>
