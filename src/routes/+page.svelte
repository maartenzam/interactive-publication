<script>
    import pages from '$lib/data/pages.json'
    import Tag from '$lib/components/Tag.svelte';

    const done = 104
</script>

<main>
<h1>Data visualisation knowledge base</h1>

{#each pages as page }
    <h2 class={page.id < done ? "done" : "todo"}>
        {#if page.id < done}
        <a href={`/${page.slug}`}>{page.id + '. ' + page.title}</a>
        {:else}
        {page.id + '. ' + page.title}
        {/if}</h2>
    <div class="tag-container">
        <Tag tagType={'t1'} tag={page.t1} root={true}/>
        <Tag tagType={'m1'} tag={page.m1} root={true}/>

        {#if page.t2}
          {#if page.t1 != page.t2}
          <Tag tagType={'t2'} tag={page.t2} root={true}/>
          {/if}
        {/if}

        {#if page.m2}
          <Tag tagType={'m2'} tag={page.m2} root={true}/>
        {/if}

        {#if page.metatags}
          {#each page.metatags.split(', ') as tag}
            <Tag tagType={'meta'} {tag} root={true}/>
          {/each}
        {/if}
      </div>
{/each}
</main>

<style>
    h2 a {
        text-decoration: none;
    }
    h2.todo {
        opacity: 0.3;
    }
</style>
