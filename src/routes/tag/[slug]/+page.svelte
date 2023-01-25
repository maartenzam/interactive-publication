<script>
    import Tag from '$lib/components/Tag.svelte';
    export let data

    const done = 402
</script>

<h1>{data.tag}</h1>
{#each data.tagPages as page}
<h2 class={page.id < done ? "done" : "todo"}>
    {#if page.id < done}
    <a href={`/${page.slug}`}>{page.id + '. ' + page.title}</a>
    {:else}
    {page.id + '. ' + page.title}
    {/if}</h2>
<div class="tag-container">
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
  </div>
{/each}

<style>
    h2 a {
        text-decoration: none;
    }
    h2.todo {
        opacity: 0.3;
    }
</style>
