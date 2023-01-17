<script>
	import Tag from '$lib/components/Tag.svelte';
	import PageNavigation from '$lib/components/PageNavigation.svelte';
	export let data;

	let activeTag;
</script>

<article>
  <PageNavigation
  previousSlug={data.previous}
  previousTitle={data.previousTitle}
  nextSlug={data.next}
  nextTitle={data.nextTitle}
/>
	<h1>{data.title}</h1>
	<div class="tag-container">
		<Tag tagType={'t1'} tag={data.t1} bind:activeTag />
		<Tag tagType={'m1'} tag={data.m1} bind:activeTag />
		{#if data.t2 && data.m2}
			<Tag tagType={'t2'} tag={data.t2} bind:activeTag />
			<Tag tagType={'m2'} tag={data.m2} bind:activeTag />
		{/if}
		{#if data.metatags}
			{#each data.metatags as tag}
				<Tag tagType={'meta'} {tag} bind:activeTag />
			{/each}
		{/if}
	</div>
	<div class="content">
		<svelte:component this={data.content} />
	</div>
</article>

<PageNavigation
	previousSlug={data.previous}
	previousTitle={data.previousTitle}
	nextSlug={data.next}
	nextTitle={data.nextTitle}
/>

<style>
	.tag-container {
		margin-bottom: 1rem;
	}
</style>
