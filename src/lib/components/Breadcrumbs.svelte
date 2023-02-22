<script>
	import { base } from '$app/paths';
	import { slugify } from '$lib/utils/slugs.js';
	import { location } from '$lib/stores/stores.js';
	import { topicColors } from '$lib/styles/colors.js'

	$: console.log($location)
</script>

<nav class="breadcrumbs">
	<ol>
		{#if $location}
		{#if $location.type == 'home'}
		<li class="crumb">Home</li>
		{/if}
		
		{#if $location.t1}
			<li class="crumb"><a href="{base}/">Home</a> ></li>
			{#if !$location.m1}
				<li class="crumb end" style:color={topicColors[$location.t1]}>{$location.t1}</li>
			{/if}
			{#if $location.m1}
				<li class="crumb"><a href={`${base}/tag/` + slugify($location.t1)} style:border-bottom={`2px solid ${topicColors[$location.t1]}`}>{$location.t1}</a> ></li>
			{/if}
		{/if}

		{#if $location.m1}
			{#if !$location.title}
				<li class="crumb end" style:color={topicColors[$location.t1]}>{$location.m1}</li>
			{/if}
			{#if $location.title}
				<li class="crumb"><a href={`${base}/tag/` + slugify($location.m1)}
					style:border-bottom={`2px solid ${topicColors[$location.t1]}`}>{$location.m1}</a> ></li>
			{/if}
		{/if}
		{#if $location.title}
			<li class="crumb end" style:color={topicColors[$location.t1]}>{$location.title}</li>
		{/if}

		{#if $location.t2 && $location.m2}
			<li class="crumb">&lt; <a href={`${base}/tag/` + slugify($location.m2)} style:border-bottom={`2px solid ${topicColors[$location.t2]}`}>{$location.m2}</a></li>
			<li class="crumb">&lt; <a href={`${base}/tag/` + slugify($location.t2)} style:border-bottom={`2px solid ${topicColors[$location.t2]}`}>{$location.t2}</a></li>
			<li class="crumb">&lt; <a href="{base}/">Home</a></li>
		{/if}
		{/if}
	</ol>
</nav>

<style>
	nav.breadcrumbs {
		background-color: #f5f5f5;
		border-bottom: 1px solid #cecdcd;
		padding: 0.5rem 1rem;
		color: #a0a0a0;
		font-size: 0.8rem;
		font-weight: 400;
	}
	.breadcrumbs ol {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	.crumb {
		display: inline-block;
	}

	.crumb a {
		text-decoration: none;
		color: #a0a0a0;
		padding-bottom: 3px;
		border-bottom: 1px solid #a0a0a0;
	}
	.crumb.end {
		font-weight: bold;
	}
</style>
