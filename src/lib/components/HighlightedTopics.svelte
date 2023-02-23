<script>
    import { base } from '$app/paths';
    import { topicColors } from '$lib/styles/colors.js'
    import { slugify } from '$lib/utils/slugs.js'

    const highlightedTopics = [
		{t1: 'Design principles', m1: 'Colour'},
		{t1: 'Design principles', m1: 'Typography'},
		{t1: 'Data storytelling', m1: 'Storytelling'},
		{t1: 'Data storytelling', m1: 'Text annotations'},
		{t1: 'Pitfalls', m1: 'Pitfalls in statistics'},
		{t1: 'Pitfalls', m1: 'Pitfalls in dataviz: chart types'},
		{t1: 'Dataviz in practice', m1: 'Data visualisation tools'},
		{t1: 'Dataviz in practice', m1: 'Data file formats'},
		{t1: 'Chart types', m1: 'A deep dive into line charts'},
		{t1: 'Chart types', m1: 'Visualising distributions'},
		{t1: 'Accessibility', m1: 'a11?'},
		{t1: 'Accessibility', m1: 'HTML 101'},
		{t1: 'Grammar of Graphics', m1: 'Grammar of Graphics: introduction'},
		{t1: 'Grammar of Graphics', m1: 'Grammar of Graphics in practice'},
	]

</script>
<p>
{#each highlightedTopics as topic}
<span class="tag" style:background-color={topicColors[topic.t1]}
			><a href={`${base}/tag/${slugify(topic.m1)}`}
				>{topic.m1}</a
			></span
		> 
{/each}
</p>

<style>
	.tag {
		padding: 3px 4px;
        margin-right: 6px;
        margin-top: 6px;
        display:inline-block;
	}
	.tag a {
        text-decoration: none;
		color: white;
	}
</style>