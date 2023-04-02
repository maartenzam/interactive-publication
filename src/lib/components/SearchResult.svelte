<script>
	import { base } from '$app/paths';
	import { topicColors } from '$lib/styles/colors.js';

	export let result;
	export let searchInput;
	export let results;

	function handleClick(){
		searchInput = ''
		results = []
	}
</script>

<li class="search-result">
	<a on:click={handleClick} href={`${base}/${result.slug}`}>{result.title}
		<div class="tags">
			<span class="tag" style:background-color={topicColors[result.t1]}
				>{result.t1}</span
			> >
			<span class="tag" style:background-color={topicColors[result.t1]}
				>{result.m1}</span
			>
	
			{#if result.t2 && result.m2}
				<br />
				<span class="tag" style:background-color={topicColors[result.t2]}
					>{result.t2}</span
				> >
				<span class="tag" style:background-color={topicColors[result.t2]}
					>{result.m2}</span
				>
			{/if}
		</div>
	</a>
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
		color: white;
		font-size: 0.9rem;
	}
</style>
