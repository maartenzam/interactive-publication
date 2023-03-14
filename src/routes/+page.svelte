<script>
	import { location, isMobile } from '$lib/stores/stores.js';
	import AccordionMenu from '$lib/components/AccordionMenu.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import HighlightedTopics from '$lib/components/HighlightedTopics.svelte';
	import StartingLinks from '$lib/components/StartingLinks.svelte';
	import ForceGraph from '$lib/components/ForceGraph.svelte';
	import pages from '$lib/data/pages.json';
	import SunBurst from '$lib/components/SunBurst.svelte';

	$location = { type: 'home' };
</script>

<div class="intro">
	<h1>Data Visualisation Academy</h1>
	<h2>Find information and learn about data visualisation</h2>
	<p>The Data Visualisation Academy is both a knowledge base and an educational tool to learn about data visualisation. It contains almost 400 pages about all aspects of data visualisation, organised into 7 broad topics.</p>
	<p>If you want to learn more about a specific topic, use the links to suggested topics below, or search for a topic of interest. You can explore all pages in the Academy by navigating the table of contents, or by browsing the Academy by following the sequence of pages of the page chain.</p>
</div>
<div
	class="navigation-blocks"
	style:flex-direction={$isMobile ? 'column' : 'row'}
	style:align-items={$isMobile ? 'center' : 'normal'}
>
	<div class="block topics">
		<div class="icon">
			<img src="icons/topics.svg" alt="Icon representing topics">
		</div>
		<h2>Suggested topics</h2>
		<p>
			Explore the topics and subtopics of the Data Visualisation Academy through the table of
			content, or get started with some suggested topics.
		</p>
		{#if $isMobile}
			<p><AccordionMenu /></p>
		{/if}
		<HighlightedTopics />
	</div>
	<div class="block search">
		<div class="icon">
			<img src="icons/search.svg" alt="Magnifying glass icons representing search">
		</div>
		<h2>Search</h2>
		<p>
			Find the data visualisation topic you are looking for by using the search bar below.
		</p>
		<p>
			Try for example "Line charts", "Fonts", "Tools", "Colours", "Annotations" or any other term related to data visualisation.
		</p>
		<p><SearchBar /></p>
	</div>
	<div class="block chain">
		<div class="icon">
			<img src="icons/chain.svg" alt="Icon representing a sequence of linked pages">
		</div>
		<h2>String of pages</h2>
		<p>
			Use the Academy as a training course, and navigate through its complete content by following the string
			of pages. 
		</p>
		<p>These are the starting pages for the main topics. Click the link the next page on each page to browse the Academy.</p>
		<StartingLinks />
	</div>
</div>
<div class="knowledge-graph">
	<h2>Data Visualisation Academy Visualisation</h2>
	<SunBurst maxLabelLevel={2} minLabelValue={18000} dots={true}></SunBurst>
	<!--SunBurst maxLabelLevel={2} minLabelValue={18000} dots={false}></SunBurst>
	<ForceGraph
		pagesData={pages}
		chargeStrength={-100}
		labelLevel={1}
		nodeScaling={2}
		depth={2}
		root={true}
		secondaryModules={true}
		height={800}
	/>
	<ForceGraph
		pagesData={pages}
		chargeStrength={-10}
		labelLevel={1}
		nodeScaling={2}
		depth={3}
		root={true}
		secondaryModules={true}
		height={800}
	/-->
</div>

<style>
	.intro {
		text-align: center;
		max-width: 50rem;
		margin: auto;
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
	.knowledge-graph {
		text-align: center;
		max-width: 100rem;
		margin: auto;
	}
	/*h2 a {
		text-decoration: none;
	}
	h2.todo {
		opacity: 0.3;
	}*/
</style>
