<script>
	import { base } from '$app/paths';

	export let previousSlug;
	export let previousTitle;
	export let nextSlug;
	export let nextTitle;
	export let nextID;
</script>

<div class="page-navigation-container">
	{#if previousSlug}<a href={base + '/' + previousSlug} class="left button">&lt;&lt; {previousTitle}</a
		>{/if}
	{#if nextSlug && nextID}<a href={base + '/' + nextSlug} class="right button">{nextTitle} >></a>{/if}
    </div>

<style>
    .page-navigation-container {
        position: relative;
        height: 72px;
		margin-bottom: 30px;
    }
	.left {
		left: 0px;
		max-width: 20rem;
	}
	.right {
		right: 0px;
		max-width: 20rem;
	}
	.button {
        position: absolute;
		border: 2px solid #004494;
		text-decoration: none;
		color: #004494;
		line-height: 1.25rem;
		font-weight: 700;
		padding: 1rem;
        min-width: 160px;
        text-align: center;
	}
</style>
