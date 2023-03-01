<script>
	import toc from '$lib/data/toc.json';
	import textlengths from '$lib/data/textlengths.json';
	import { hierarchy, partition } from 'd3-hierarchy';
	import { arc, line, curveNatural } from 'd3-shape';
	import { topicColors } from '$lib/styles/colors.js';
	import { base } from '$app/paths';
	import { scaleSqrt } from 'd3-scale';

	export let filter;
	export let maxLabelLevel = 10;
	export let minLabelValue = 0;
	export let dots = true;

	$: tocToVisualise = !filter
		? toc
		//: filter.m1
		//? toc.find((d) => d.title == filter.t1).children.filter((d) => d.title == filter.m1)
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

	$: lineGenerator = line()
		.x((d) => Math.cos(d.x0 + (d.x1 - d.x0) / 2 - Math.PI / 2) * (d.y0 + (d.y1 - d.y0) / 2))
		.y((d) => Math.sin(d.x0 + (d.x1 - d.x0) / 2 - Math.PI / 2) * (d.y0 + (d.y1 - d.y0) / 2))
		.curve(curveNatural);

	let radiusScale = scaleSqrt().domain([0, 20333]).range([0, 12]);

	let width;
</script>

<div bind:clientWidth={width}>
	{#if width}
		<svg width={'100%'} height={width}>
			<g transform={`translate(${width / 2},${width / 2})`}>
				{#each root.descendants() as node}
					{#if dots}
						{#if node.depth != 0 && node.depth != root.height}
							<a
								href={!filter && node.depth == 3
									? `${base}/${node.data.slug}`
									: filter && filter.m1 && node.depth == 1
									? `${base}/tag/${node.data.slug}`
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
                                    opacity={filter && filter.m1 && node.depth == 1
                                        ? node.data.title != filter.m1
                                            ? 0.1
                                            : 1
                                        : 1}
								/>
							</a>
						{/if}
					{/if}
					{#if !dots}
						<a
							href={!filter && node.depth == 3
								? `${base}/${node.data.slug}`
								: filter && filter.m1 && node.depth == 1
								? `${base}/tag/${node.data.slug}`
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
                                opacity={filter && filter.m1
                                    ? (node.depth == 1 && node.data.title == filter.m1) || (node.depth == 2 && node.parent.data.title == filter.m1 )
                                        ? 1
                                        : 0.1
                                    : 1
                                }
							/>
						</a>
					{/if}
					{#if node.depth == 0}
						<path
							d={arcGenerator(node)}
							fill={!filter ? getNodeTopicColor(node) : topicColors[filter.t1]}
							stroke={'white'}
							stroke-width={1}
						/>
					{/if}
				{/each}

				{#if dots}
					{#each root.descendants().filter((d) => d.depth == root.height - 1) as twig, i}
						<path
							d={lineGenerator(twig.children)}
							stroke={!filter ? getNodeTopicColor(twig) : topicColors[filter.t1]}
							stroke-width={1.5}
							fill="none"
                            opacity={filter && filter.m1
                                ? twig.data.title != filter.m1
                                    ? 0.2
                                    : 1
                                : 1}
						/>
						{#each twig.children as child}
							<a href={`${base}/${child.data.slug}`} title={child.data.title}>
								<circle
									cx={Math.cos(child.x0 + (child.x1 - child.x0) / 2 - Math.PI / 2) *
										(child.y0 + (child.y1 - child.y0) / 2)}
									cy={Math.sin(child.x0 + (child.x1 - child.x0) / 2 - Math.PI / 2) *
										(child.y0 + (child.y1 - child.y0) / 2)}
									r={radiusScale(child.value)}
									fill={!filter ? getNodeTopicColor(twig) : topicColors[filter.t1]}
									stroke={'#ffffff'}
									stroke-width={1}
                                    opacity={filter && filter.m1
                                        ? twig.data.title != filter.m1
                                            ? 0.2
                                            : 1
                                        : 1}
								/>
							</a>
						{/each}
					{/each}
				{/if}

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
						}`}>{filter.t1}</text
					>
				{/if}
				{#each root.descendants() as node}
					{#if node.depth > 0 && node.depth <= maxLabelLevel && node.value > minLabelValue}
						<text
							fill="white"
							text-anchor="middle"
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
	svg {
		overflow: visible;
	}
	text {
		pointer-events: none;
		font-size: 0.7rem;
	}
</style>
