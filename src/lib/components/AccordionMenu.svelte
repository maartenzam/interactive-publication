<script>
    import toc from '$lib/data/toc.json'
    import TopMenuItem from './TopMenuItem.svelte';

    const topicColors = {
        'Design principles': '#C73938',
        'Data storytelling': '#316DB0',
        'Pitfalls': '#661188',
        'Dataviz in practice': '#53793F',
        'Chart types': '#D96694',
        'Accessibility': '#707070',
        'Grammar of Graphics': '#E49A3E'

    }
</script>

<div class="menu-container">
    <ul>
    {#each toc as training}
        <TopMenuItem {training}></TopMenuItem>
    {/each}
</ul>
</div>

<style>
    .menu-container {
        width: 100%;
        min-width: 300px;
        background-color: #F5F5F5;
        float: left;
    }
    ul {
        padding: 0;
        margin: 0;
	}
</style>