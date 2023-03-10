<script>
	import { base } from '$app/paths';
	import { topicColors } from '$lib/styles/colors.js';
	import { location, isMobile } from '$lib/stores/stores.js';
	import toc from '$lib/data/toc.json'

	export let previousSlug;
	export let previousTitle;
	export let nextSlug;
	export let nextTitle;
	export let nextID;

	let w;
	$: margin = w * 0.1

	$: modulePages = toc.find(d => d.title == $location.t1).children.find(d => d.title == $location.m1).children
	//$: modulePages2 = $location.t2 && $location.m2 ? toc.find(d => d.id == $location.t2).children.find(d => d.id == $location.m2).children : null

	//$: currentPageIndex = modulePages2 ? modulePages2.map(d => d.id).indexOf($location.slug) : null

</script>

<div class="page-navigation-container" bind:clientWidth={w}>
	<div class="previous-next-buttons">
		<div class="module-container">
			<div class="module"><span style:background-color={topicColors[$location.t1]}>{$location.m1}</span></div>
		</div>
	{#if previousSlug}
		<a
			href={base + '/' + previousSlug}
			class="left button"
			style:left={$isMobile ? '0px' : '-30px'}
			style:color={topicColors[$location.t1]}>← {previousTitle}</a
		>{/if}
	{#if nextSlug && nextID}<a
			href={base + '/' + nextSlug}
			class="right button"
			style:right={$isMobile ? '0px' : '-30px'}
			style:color={topicColors[$location.t1]}>{nextTitle} →</a
		>{/if}
	</div>
	<div class="dots">
		{#if w && margin}
		<svg width={w} height={50}>
			<line
				x1={margin}
				x2={w - margin}
				y1={25}
				y2={25}
				style:stroke={topicColors[$location.t1]}
				stroke-width={2}
			/>
			{#each modulePages as page, i}
				<circle
					cx={margin + i * (w - 2*margin) / (modulePages.length - 1)}
					cy={25}
					r={page.slug == $location.slug ? 8 : 6}
					stroke={page.slug == $location.slug ? 'white' : topicColors[$location.t1]}
					stroke-width={2}
					fill={page.slug == $location.slug ? topicColors[$location.t1] : 'white'}
				/>
			{/each}
		</svg>
		{/if}
	</div>

	<!--
	{#if modulePages2}
	<div class="previous-next-buttons">
		<div class="module-container">
			<div class="module"><span style:background-color={topicColors[$location.t2]}>{$location.m2}</span></div>
		</div>
	{#if currentPageIndex > 0}
		<a
			href={base + '/' + modulePages2[currentPageIndex - 1].id}
			class="left button"
			style:color={topicColors[$location.t2]}>← {deslugify(modulePages2[currentPageIndex - 1].id)}</a
		>{/if}
	{#if currentPageIndex < modulePages2.length - 1}<a
			href={base + '/' + modulePages2[currentPageIndex + 1].id}
			class="right button"
			style:color={topicColors[$location.t2]}>{deslugify(modulePages2[currentPageIndex + 1].id)} →</a
		>{/if}
	</div>
	<div class="dots">
		<svg width={w} height={50}>
			<line
				x1={margin}
				x2={w - margin}
				y1={25}
				y2={25}
				style:stroke={topicColors[$location.t2]}
				stroke-width={2}
			/>
			{#each modulePages2 as page, i}
				<circle
					cx={margin + i * (w - 2*margin) / (modulePages2.length - 1)}
					cy={25}
					r={page.id == $location.slug ? 8 : 6}
					stroke={page.id == $location.slug ? 'white' : topicColors[$location.t2]}
					stroke-width={2}
					fill={page.id == $location.slug ? topicColors[$location.t2] : 'white'}
				/>
			{/each}
		</svg>
	</div>
	{/if}
	-->
</div>

<style>
	.previous-next-buttons {
		height: 50px;
		position: relative;
	}
	.module-container {
		width: 100%;
		margin-top: 2rem;
	}
	.module {
		text-align: center;
		color: white;
	}
	.module span {
		padding: 0.3rem;
	}
	.left {
		bottom: 0px;
		max-width: 20rem;
		text-align: left;
	}
	.right {
		bottom: 0px;
		max-width: 20rem;
		text-align: right;
	}
	.button {
		position: absolute;
		text-decoration: none;
		line-height: 1.25rem;
		padding: 0rem;
		min-width: 160px;
	}
	svg {
		overflow: visible;
	}
	circle {
		transition: fill 1s, stroke 1s, r 1s;
	}
</style>
