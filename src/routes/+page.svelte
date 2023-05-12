<script>
	import { location, isMobile } from '$lib/stores/stores.js';
	import AccordionMenu from '$lib/components/AccordionMenu.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import HighlightedTopics from '$lib/components/HighlightedTopics.svelte';
	import StartingLinks from '$lib/components/StartingLinks.svelte';
	import { base } from '$app/paths';

	$location = { type: 'home' };
</script>
	<div class={$isMobile ? "intro" : "intro desktop"}>
		<div class="intro-text">
		<h1>Data Visualisation</h1>
		<h2>A Comprehensive Guide to Unlocking Your Data’s Potential</h2>
		<p>
			This guide leads you through 7 important topics linked to data visualisation and is ordered in
			growing complexity. It starts with five topics for beginner and advanced users, followed by
			two topics for experienced users.
		</p>
		<p>
			There are 3 ways to explore it: use the thematic links below, search for your topic of
			interest, or navigate by following the sequence of pages.
		</p>
		</div>
	</div>
<div
	class="navigation-blocks"
	style:flex-direction={$isMobile ? 'column' : 'row'}
	style:align-items={$isMobile ? 'center' : 'normal'}
>
	<div class="block topics">
		<div class="icon">
			<img src={`${base}/icons/topics.svg`} alt="Icon representing topics" />
		</div>
		<h2>Suggested topics</h2>
		<p>
			Explore the topics and subtopics of the Data Visualisation Guide through the table of content,
			or get started with some suggested topics.
		</p>
		{#if $isMobile}
			<p><AccordionMenu /></p>
		{/if}
		<HighlightedTopics />
	</div>
	<div class="block search">
		<div class="icon">
			<img src={`${base}/icons/search.svg`} alt="Magnifying glass icons representing search" />
		</div>
		<h2>Search</h2>
		<p>Find the data visualisation topic you are looking for by using the search bar below.</p>
		<p>
			Try for example "Line charts", "Fonts", "Tools", "Colours", "Annotations" or any other term
			related to data visualisation.
		</p>
		<p><SearchBar type="search-in-text" /></p>
	</div>
	<div class="block chain">
		<div class="icon">
			<img src={`${base}/icons/chain.svg`} alt="Icon representing a sequence of linked pages" />
		</div>
		<h2>Sequence of pages</h2>
		<p>
			Use the Guide as a training course, and navigate through its complete content by following the
			sequence of pages.
		</p>
		<p>
			Below are links to the starting pages for each of the main topics. On each page of the Guide
			you will find a link to the next one in the sequence.
		</p>
		<StartingLinks />
	</div>
</div>

<style>
	.intro {
		min-height: 316px;
		padding: 10px 2rem;
		margin: auto;
		text-align: center;
    	background-image: url($lib/headers/header_1351x563_flipped.jpg);
		color: white;
		text-align: center;
		background-size: cover;
	}
	.intro.desktop {
		margin-top: -36px;
		text-align: left;
	}
	.intro.desktop .intro-text {
		max-width: 50rem;
	}
	.icon {
		margin: auto;
		height: 100px;
		max-width: 100px;
	}
	.navigation-blocks {
		margin: auto;
		width: 100%;
		display: flex;
		max-width: 80rem;
	}
	.block {
		flex: 1;
		padding: 1rem;
		max-width: 50rem;
	}
	.block h2 {
		text-align: center;
	}
</style>
