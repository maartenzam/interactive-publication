<script>
	import toc from '$lib/data/toc.json';
    import textlengths from '$lib/data/textlengths.json';
	import { hierarchy, partition } from 'd3-hierarchy';
	import { arc } from 'd3-shape';
    import { topicColors } from '$lib/styles/colors.js'

    function getNodeTopicColor(node){
        if(node.depth == 0){
            return 'none'
        }
        if(node.depth == 1) {
            console.log(node)
            return topicColors[node.data.title]
        }
        if(node.depth == 2){
            return topicColors[node.parent.data.title]
        }
        if(node.depth == 3){
            return topicColors[node.parent.parent.data.title]
        }
    }

	let root = hierarchy({ id: 'root', children: toc })
        .sum((d) => {
            if(d.slug && textlengths.find(p => p.slug == d.slug)){
                return textlengths.find(p => p.slug == d.slug).nchar
            }
            else { return 0}
        })
        .sort((a, b) => b.value - a.value);

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
	<svg width={'100%'} height={width}>
		<g transform={`translate(${width / 2},${width / 2})`}>
			{#each root.descendants() as node}
				<path
                    d={arcGenerator(node)}
                    fill={getNodeTopicColor(node)}
                    stroke={'white'}
                    stroke-width={1} />
			{/each}
		</g>
	</svg>
</div>
