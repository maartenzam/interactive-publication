<script>
	import { base } from '$app/paths';
	import { slugify } from '$lib/utils/slugs.js';
	import { topicColors } from '$lib/styles/colors.js';

	export let result;
	export let searchInput;
</script>

<li class="search-result">
	<a on:click={() => (searchInput = '')} href={`${base}/${result.slug}`}>{result.title}</a>
	<div class="tags">
		<span class="tag" style:background-color={topicColors[result.t1]}
			><a on:click={() => (searchInput = '')} href={`${base}/tag/${slugify(result.t1)}`}
				>{result.t1}</a
			></span
		>
		<span class="tag" style:background-color={topicColors[result.t1]}
			><a on:click={() => (searchInput = '')} href={`${base}/tag/${slugify(result.m1)}`}
				>{result.m1}</a
			></span
		>

		{#if result.t2 && result.m2}
			<span class="tag" style:background-color={topicColors[result.t2]}
				><a on:click={() => (searchInput = '')} href={`${base}/tag/${slugify(result.t2)}`}
					>{result.t2}</a
				></span
			>
			<span class="tag" style:background-color={topicColors[result.t2]}
				><a on:click={() => (searchInput = '')} href={`${base}/tag/${slugify(result.m2)}`}
					>{result.m2}</a
				></span
			>
		{/if}
	</div>
</li>

<style>
	li.search-result {
		list-style: none;
		border-bottom: 1px solid #d4d4d4;
		border-left: 1px solid #d4d4d4;
		border-right: 1px solid #d4d4d4;
		margin: 0;
		padding: 4px;
		background-color: #fff;
		color: black;
		font-size: 1rem;
	}
	li.search-result:hover {
		background-color: #e5e5e5;
	}
	a {
		text-decoration: none;
		color: black;
	}
	.tag {
		padding: 0 2px 2px 2px;
	}
	.tag a {
		color: white;
		font-size: 0.9rem;
	}
</style>
