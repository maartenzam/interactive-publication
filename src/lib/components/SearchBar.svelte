<script>
	import SearchResult from './SearchResult.svelte';
    import pages from '$lib/data/pages.json'

	export let possibleResults = pages;
	let results = [];
	let searchInput = '';
	let isFocused = false;

	const onFocus = () => (isFocused = true);
	const onBlur = () => (isFocused = false);

	const typeahead = () => {
        let resultsIncludes = possibleResults.filter(possibleResults => possibleResults.title.toLowerCase().includes(searchInput.toLowerCase()) )

		let resultsStartWith = possibleResults.filter((possibleResults) =>
			possibleResults.title.toLowerCase().startsWith(searchInput.toLowerCase())
		);
		results = resultsStartWith.concat(resultsIncludes)//.sort();
        results = [...new Set(results)]
	};

</script>

<div class="search-container">
<input
	id="searchfield"
	type="text"
	name="searchfield"
	placeholder="Search"
	bind:value={searchInput}
	on:input={typeahead}
	on:focus={onFocus}
	on:blur={onBlur}
/>
<ul class="typeahead-results-list">
	<!--{#if isFocused === true}-->
    {#if true}
		{#if searchInput.length > 0}
			{#each results as result}
				<SearchResult {result} bind:searchInput/>
			{/each}
		{/if}
	{/if}
</ul>
</div>

<style>
    .search-container {
        width: 100%;
    }
	input[type='text'] {
		width: 100%;
		border: 1px solid black;
		border-radius: 0;
        padding: 6px;
        font-size: 1rem;
	}
	input[type='text']:focus {
		background-color: whitesmoke;
		outline: none;
	}
	ul {
		max-height: 215px;
		overflow: auto;
	}

	ul.typeahead-results-list {
		position: absolute;
		right: 1.15rem;
		top: 50px;
		margin: 0px;
		padding: 0px;
		z-index: 99;
		background-color: whitesmoke;
        font-size: 1rem;
        width: 20.8rem;
	}
</style>
