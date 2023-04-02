<script>
	//import Tag from '$lib/components/Tag.svelte';
	import PageNavigation from '$lib/components/PageNavigation.svelte';
	//import { base } from '$app/paths';
	import { location } from '$lib/stores/stores.js';
	export let data;

	$: location.set({
		type: 'page',
		title: data.title,
		slug: data.slug,
		t1: data.t1,
		m1: data.m1,
		t2: data.t2,
		m2: data.m2
	});
</script>

<main>
	<!--div class="tag-container">
		<Tag tagType={'t1'} tag={data.t1} root={true} />
		<Tag tagType={'m1'} tag={data.m1} root={true} />
		{#if data.t2 && data.m2}
			{#if data.t1 != data.t2}
				<Tag tagType={'t2'} tag={data.t2} root={true} />
			{/if}
			<Tag tagType={'m2'} tag={data.m2} root={true} />
		{/if}
		{#if data.metatags}
			{#each data.metatags as tag}
				<Tag tagType={'meta'} {tag} root={true} />
			{/each}
		{/if}
	</div-->
	<h1>{data.title}</h1>
	<p class="reading-time">{Math.round(data.textlength/5/200) < 1.5 ? "1 minute read" : Math.round(data.textlength/5/200) + " minutes read"}</p>

	<PageNavigation
		previousSlug={data.previous}
		previousTitle={data.previousTitle}
		nextSlug={data.next}
		nextTitle={data.nextTitle}
		nextID={data.nextID}
	/>

	<div class="content">
		<svelte:component this={data.content} />
	</div>

	<h3>Related pages</h3>
	{#each data.relatedPages as relatedPage}
		<p><span class="internal-link"><a href={relatedPage.slug}>{relatedPage.title}</a></span></p>
	{/each}

	<PageNavigation
		previousSlug={data.previous}
		previousTitle={data.previousTitle}
		nextSlug={data.next}
		nextTitle={data.nextTitle}
		nextID={data.nextID}
	/>
</main>

<!--
{#if data.incomingLinks.length > 0}
	<h2>This page is linked to from</h2>
	{#each data.incomingLinks as incomingLink}
		<p>
			<span class="internal-link"
				><a href={`${base}/${incomingLink.fromSlug}`}>{incomingLink.fromTitle}</a></span
			>
		</p>
	{/each}
{/if}
-->

<style>
	h1 {
		text-align: center;
		margin: 3rem 0rem;
	}
	.reading-time {
		text-align: center;
		font-size: 0.9rem;
		font-style: italic;
	}
	/*.tag-container {
		margin-bottom: 1rem;
	}*/
</style>
