<script>
    import { base } from '$app/paths';

	export let result;
    export let searchInput
</script>

<li class="search-result"><a on:click={() => searchInput = ''} href={`${base}/${result.slug}`}>{result.title}</a></li>

<style>
	li.search-result {
		list-style: none;
		border-bottom: 1px solid #d4d4d4;
        border-left: 1px solid #d4d4d4;
        border-right: 1px solid #d4d4d4;
		margin: 0;
		padding: 4px;
		cursor: pointer;
		background-color: #fff;
        color: black;
        font-size: 0.9rem;
	}
	li.search-result:hover {
		background-color: lightgray;
	}
    a {
        text-decoration: none;
        color: black;
    }
</style>
