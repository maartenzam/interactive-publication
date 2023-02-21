<script>
	import { base } from '$app/paths';
	import { topicColors } from '$lib/styles/colors.js';
	import { location } from '$lib/stores/stores.js';
	import { modulePages } from '$lib/stores/stores.js';

	export let previousSlug;
	export let previousTitle;
	export let nextSlug;
	export let nextTitle;
	export let nextID;

	let w;
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
			style:color={topicColors[$location.t1]}>← {previousTitle}</a
		>{/if}
	{#if nextSlug && nextID}<a
			href={base + '/' + nextSlug}
			class="right button"
			style:color={topicColors[$location.t1]}>{nextTitle} →</a
		>{/if}
	</div>
	<div class="dots">
		<svg width={w} height={50}>
			<line
				x1={0}
				x2={w}
				y1={25}
				y2={25}
				style:stroke={topicColors[$location.t1]}
				stroke-width={2}
			/>
			{#each $modulePages as page, i}
				<circle
					cx={(i * w) / ($modulePages.length - 1)}
					cy={25}
					r={page.id == $location.slug ? 10 : 8}
					stroke={page.id == $location.slug ? 'white' : topicColors[$location.t1]}
					stroke-width={2}
					fill={page.id == $location.slug ? topicColors[$location.t1] : 'white'}
				/>
			{/each}
		</svg>
	</div>
</div>

<style>
	.page-navigation-container {
		
	}
	.previous-next-buttons {
		height: 50px;
		position: relative;
	}
	.module-container {
		width: 100%;
	}
	.module {
		text-align: center;
		color: white;
	}
	.module span {
		padding: 0.3rem;
	}
	.left {
		left: -30px;
		bottom: 0px;
		max-width: 20rem;
		text-align: left;
	}
	.right {
		right: -30px;
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
