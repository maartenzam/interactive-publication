<script>
	export let previousSlug;
	export let previousTitle;
	export let nextSlug;
	export let nextTitle;
</script>

<div class="page-navigation-container">
	{#if previousSlug}<a href={previousSlug} class="left button">&lt;&lt; {previousTitle}</a
		>{/if}
	{#if nextSlug}<a href={nextSlug} class="right button">{nextTitle} >></a>{/if}
    </div>

<style>
    .page-navigation-container {
        position: relative;
        height: 46px;
    }
	.left {
		left: 0px;
	}
	.right {
		right: 0px;
	}
	.button {
        position: absolute;
		border: 2px solid #004494;
		text-decoration: none;
		color: #004494;
		line-height: 1.25rem;
		font-weight: 700;
		padding: 1rem;
	}
</style>
