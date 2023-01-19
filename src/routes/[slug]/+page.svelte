<script>
	import Tag from '$lib/components/Tag.svelte';
	import PageNavigation from '$lib/components/PageNavigation.svelte';
	export let data;
</script>

<article>
  <PageNavigation
  previousSlug={data.previous}
  previousTitle={data.previousTitle}
  nextSlug={data.next}
  nextTitle={data.nextTitle}
  nextID={data.nextID}
/>
<div class="tag-container">
  <Tag tagType={'t1'} tag={data.t1} root={true}/>
  <Tag tagType={'m1'} tag={data.m1} root={true}/>
  {#if data.t2 && data.m2}
    {#if data.t1 != data.t2}
    <Tag tagType={'t2'} tag={data.t2} root={true}/>
    {/if}
    <Tag tagType={'m2'} tag={data.m2} root={true}/>
  {/if}
  {#if data.metatags}
    {#each data.metatags as tag}
      <Tag tagType={'meta'} {tag} root={true}/>
    {/each}
  {/if}
</div>
	<h1>{data.title}</h1>

	<div class="content">
		<svelte:component this={data.content} />
	</div>
</article>

<PageNavigation
	previousSlug={data.previous}
	previousTitle={data.previousTitle}
	nextSlug={data.next}
	nextTitle={data.nextTitle}
  nextID={data.nextID}
/>

<style>
	.tag-container {
		margin-bottom: 1rem;
	}
</style>
