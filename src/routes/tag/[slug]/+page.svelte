<script>
    //import Tag from '$lib/components/Tag.svelte';
    import { base } from '$app/paths';
    import { location } from '$lib/stores/stores.js'
    import ForceGraph from '$lib/components/ForceGraph.svelte';

    export let data

    $: location.set(data.crumbs)
</script>

<main>
<h1>{data.title}</h1>
<ForceGraph
		pagesData={data.tagPages}
		chargeStrength={data.tagPages.length > 20 ? -100 : -400}
		labelLevel={data.tagPages.length > 20 ? 2 : 3}
		nodeScaling={3}
		depth={3}
		root={false}
		secondaryModules={false}
    height={700}
	/>
{#each data.tagPages as page}
<h2>
    <a href={`${base}/${page.slug}`}>{page.id + '. ' + page.title}</a></h2>
<!--div class="tag-container">
    <Tag tagType={'t1'} tag={page.t1} root={false}/>
    <Tag tagType={'m1'} tag={page.m1} root={false}/>

    {#if page.t2}
      {#if page.t1 != page.t2}
      <Tag tagType={'t2'} tag={page.t2} root={false}/>
      {/if}
    {/if}

    {#if page.m2}
      <Tag tagType={'m2'} tag={page.m2} root={false}/>
    {/if}

    {#if page.metatags}
      {#each page.metatags.split(', ') as tag}
        <Tag tagType={'meta'} {tag} root={false}/>
      {/each}
    {/if}
  </div-->
{/each}
</main>

<style>
    h1 {
      text-align: center;
    }
    h2 a {
        text-decoration: none;
    }
</style>
