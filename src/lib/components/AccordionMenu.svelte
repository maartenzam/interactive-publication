<script>
    import toc from '$lib/data/toc.json'
    import TopMenuItem from './TopMenuItem.svelte';

    export let sidebarOpen
</script>

<div class="menu-container">
    <ul>
    {#each toc as training}
        <TopMenuItem {training} bind:sidebarOpen></TopMenuItem>
    {/each}
</ul>
</div>

<style>
    .menu-container {
        width: 100%;
        background-color: #F5F5F5;
    }
    ul {
        padding: 0;
        margin: 0;
	}
</style>