<script>
    const pages = [
        {id: 1, title: "Graphic design: introduction", slug: "graphic-design-introduction"},
        {id: 2, title: "The grid", slug: "the-grid"},
        {id: 3, title: "Arrangement and reading direction", slug: "arrangement-and-reading-direction"},
        {id: 4, title: "Chart anatomy", slug: "chart-anatomy"},
        {id: 5, title: "Breaking the grid", slug: "breaking-the-grid"},
        {id: 6, title: "Application of graphic design in data visualisation", slug: "application-of-graphic-design-in-data-visualisation"},
    ]
</script>

<h1>Data visualisation knowledge base</h1>

{#each pages as page }
    <p><a href={`/${page.slug}`}>{page.title}</a></p>
{/each}
