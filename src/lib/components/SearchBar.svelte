<script>
	import SearchResult from './SearchResult.svelte';
	import pages from '$lib/data/pages.json';

	export let possibleResults = pages;
	let results = [];
	let searchInput = '';
	let isFocused = false;

	const onFocus = () => (isFocused = true);
	const onBlur = () => (isFocused = false);

	const typeahead = () => {
		let resultsIncludes = possibleResults.filter((possibleResults) =>
			possibleResults.title.toLowerCase().includes(searchInput.toLowerCase())
		);

		let resultsStartWith = possibleResults.filter((possibleResults) =>
			possibleResults.title.toLowerCase().startsWith(searchInput.toLowerCase())
		);
		results = resultsStartWith.concat(resultsIncludes); //.sort();
		results = [...new Set(results)];
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
	<!--{#if isFocused === true && searchInput.length > 0}-->
	{#if true}
		<ul class="typeahead-results-list">
			{#each results as result}
				<SearchResult {result} bind:searchInput />
			{/each}
		</ul>
	{/if}
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
</style>
