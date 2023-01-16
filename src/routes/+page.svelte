<script>
    import pages from '$lib/data/pages.js'
</script>

<main>
<h1>Data visualisation knowledge base</h1>

{#each pages as page }
    <p><a href={`/${page.slug}`}>{page.title}</a></p>
{/each}
</main>
