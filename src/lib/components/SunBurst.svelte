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

	// The filter is used for the SunBurst on the tag pages
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

	let sunburstPartition = partition().padding(0)

	let layout
	$: if(radius){
		sunburstPartition.size([2 * Math.PI, radius])
		layout = sunburstPartition(root)
	}

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

	// For the tooltip
	let mousePos;
  function updateMouse(evt) {
    mousePos = { x: evt.offsetX, y: evt.offsetY };
  }

  let activeTitle
</script>

<div bind:clientWidth={width}>
	{#if width}
		<svg width={'100%'} height={width} on:mousemove={updateMouse}>
			<g transform={`translate(${width / 2},${width / 2})`}>
				{#each layout.descendants() as node}
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
									stroke={activeTitle == node.data.title ? 'black' : '#ffffff'}
									stroke-width={2 - (50 * node.depth) / 100}
									style:filter={`brightness(${100 + 7 * node.depth}%)`}
                                    opacity={filter && filter.m1 && node.depth == 1
                                        ? node.data.title != filter.m1
                                            ? 0.1
                                            : 1
                                        : 1}
									on:mouseover={() => activeTitle = node.data.title}
									on:mouseleave={() => activeTitle = null}
									on:focus={() => activeTitle = node.data.title}
									on:blur={() => activeTitle = null}
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

				<!-- Outline on hover-->
				{#each layout.descendants() as node}
					{#if dots && node.data.title == activeTitle}
						{#if node.depth != 0 && node.depth != layout.height}
								<path
									class="outline"
									d={arcGenerator(node)}
									fill={'none'}
									stroke={'black'}
									stroke-width={2 - (50 * node.depth) / 100 + 1}
								/>
						{/if}
					{/if}
				{/each}

				{#if dots}
					{#each layout.descendants().filter((d) => d.depth == layout.height - 1) as twig}
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
									stroke={activeTitle == child.data.title ? 'black' : '#ffffff'}
									stroke-width={activeTitle == child.data.title ? 2 : 1}
                                    opacity={filter && filter.m1
                                        ? twig.data.title != filter.m1
                                            ? 0.2
                                            : 1
                                        : 1}
									on:mouseover={() => activeTitle = child.data.title}
									on:mouseout={() => activeTitle = null}
									on:focus={() => activeTitle = child.data.title}
									on:blur={() => activeTitle = null}
								/>
							</a>
						{/each}
					{/each}
				{/if}

				{#if filter}
					<text
						text-anchor="middle"
						x={0}
						y={5}
						fill={'#ffffff'}
						style:text-transform={'uppercase'}
						style:text-shadow={`-1px -1px ${topicColors[filter.t1]}, -1px 1px ${
							topicColors[filter.t1]
						}, 1px 1px ${topicColors[filter.t1]}, 1px -1px ${topicColors[filter.t1]}, -1px 0 ${
							topicColors[filter.t1]
						}, 0 1px ${topicColors[filter.t1]}, 1px 0 ${topicColors[filter.t1]}, 0 -1px ${
							topicColors[filter.t1]
						}`}>{filter.t1}</text>
				{/if}

				{#each layout.descendants() as node}
					{#if node.depth > 0 && node.depth <= maxLabelLevel && node.value > minLabelValue}
						<text
							style:text-transform={node.depth == 1 && !filter ? 'uppercase' : 'normal'}
							fill="white"
							text-anchor="middle"
							x={arcGenerator.centroid(node)[0]}
							y={arcGenerator.centroid(node)[1] + 6}
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
                    ${arcGenerator.centroid(node)[1] + 5})`}>{node.data.title}</text>
					{/if}
				{/each}
			</g>
		</svg>
	{/if}
	{#if mousePos && activeTitle}
		<div
			class="tooltip"
			style:left={mousePos.x > width/2 ? mousePos.x - 10 + "px" : mousePos.x + 10 + "px"}
			style:transform={mousePos.x > width/2 ? "translateX(-100%)" : "translateX(0)"}
			style:top={mousePos.y + 10 + "px"}>{activeTitle}</div>
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
    path, circle {
        transition: opacity 0.5s;
    }
	.tooltip {
		position: absolute;
		pointer-events: none;
		border: 1px solid #cccccc;
		padding: 4px;
		background-color: white;
		box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
		max-width: 300px;
	}
	.outline {
		pointer-events: none;
	}
</style>
