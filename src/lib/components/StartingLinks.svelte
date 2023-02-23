<script>
	import { base } from '$app/paths';
	import { slugify } from '$lib/utils/slugs.js';
	import { topicColors } from '$lib/styles/colors.js';

	const startingLinks = [
		{ t1: 'Design principles', title: 'Graphic design: introduction' },
		{ t1: 'Data storytelling', title: 'Storytelling and data visualisation' },
		{ t1: 'Pitfalls', title: 'Pitfalls in metadata: 3 stories' },
		{ t1: 'Dataviz in practice', title: 'CSV files' },
		{ t1: 'Chart types', title: 'Vertical versus horizontal bars' },
		{ t1: 'Accessibility', title: 'What is accessibility' },
		{ t1: 'Grammar of Graphics', title: 'From data to visualisation' }
	];
</script>

<ul>
	{#each startingLinks as link}
		<li>
			<div class="tag" style:background-color={topicColors[link.t1]}
				><a href={`${base}/tag/${slugify(link.t1)}`}>{link.t1}</a>
        </div>
		<div class="link-container">
            <a
                class="internal-link"
                href={`${base}/${slugify(link.title)}`}
                style:color={topicColors[link.t1]}
                >{link.title}</a>
        </div>
		</li>
	{/each}
</ul>

<style>
	ul {
		padding-left: 0px;
        list-style-type: none;
	}
    li {
        margin-bottom: 6px;
    }
	.tag {
		padding: 2px 4px 0px 4px;
		margin-right: 6px;
		margin-top: 6px;
		display: inline-block;
        text-transform: uppercase;
        font-size: 0.9rem;
	}
	.tag a {
		text-decoration: none;
		color: white;
	}
    .link-container {
        margin-top: 2px;
    }
	.internal-link {
		transition: background-color 0.2s;
        text-decoration: none;
        font-weight: bold;
	}

	.internal-link:hover {
		background-color: rgb(226, 226, 226);
	}

	.internal-link:before {
		content: '🔗 ';
	}
</style>
