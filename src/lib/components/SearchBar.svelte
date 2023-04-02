<script>
	import SearchResult from './SearchResult.svelte';
	import pages from '$lib/data/pages.json';

	export let possibleResults = pages;
	export let type;
	let results = [];
	let searchInput = '';
	let isFocused = false;

	const onFocus = () => (isFocused = true);
	const onBlur = () => (isFocused = false);

	const typeahead = () => {
		if (searchInput == '') {
			results = [];
		} else {
			let resultsIncludes = possibleResults.filter((possibleResults) =>
				possibleResults.title.toLowerCase().includes(searchInput.toLowerCase())
			);

			let resultsStartWith = possibleResults.filter((possibleResults) =>
				possibleResults.title.toLowerCase().startsWith(searchInput.toLowerCase())
			);
			results = resultsStartWith.concat(resultsIncludes); //.sort();
			results = [...new Set(results)];
		}
	};
</script>

<div class="search-container">
	<label for={type} class="visuallyhidden">Search</label>
	<input
		id={type}
		type="text"
		name="searchfield"
		placeholder="Search"
		bind:value={searchInput}
		on:input={typeahead}
		on:focus={onFocus}
		on:blur={onBlur}
	/>
	<ul
		class="typeahead-results-list"
		style:border={results.length > 0 ? '1px solid #707070' : 'none'}
	>
		{#if searchInput.length > 0 && results.length == 0}
			<li class="no-results">No results found</li>
		{/if}
		{#each results as result}
			<SearchResult {result} bind:searchInput bind:results />
		{/each}
	</ul>
</div>

<style>
	.search-container {
		width: 100%;
		position: relative;
		top: -8px;
	}
	input[type='text'] {
		position: absolute;
		right: 0px;
		top: 0px;
		width: 100%;
		border: 1px solid #707070;
		border-radius: 0;
		padding: 6px;
		font-size: 1rem;
	}
	input[type='text']:focus {
		background-color: whitesmoke;
		outline: none;
	}
	ul {
		max-height: 320px;
		overflow: auto;
	}

	ul.typeahead-results-list {
		position: absolute;
		right: 0px;
		top: 32px;
		margin: 0px;
		padding: 0px;
		z-index: 99;
		background-color: whitesmoke;
		font-size: 1rem;
		width: 100%;
		border: 1px solid #707070;
		box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
	}
	label {
		border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
	}
	li.no-results {
		list-style: none;
		border-bottom: 1px solid #d4d4d4;
		border-left: 1px solid #d4d4d4;
		border-right: 1px solid #d4d4d4;
		margin: 0;
		padding: 4px;
		background-color: #fff;
		color: black;
		font-size: 1rem;
	}
</style>
