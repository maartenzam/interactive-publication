<script>
	import { base } from '$app/paths';
	import { location } from '$lib/stores/stores.js'

	$location = {type: 'home'}

	const done = 397;
</script>

	<div class="intro">
		<h1>Data Visualisation Academy</h1>
		<p>Intro: what is the Data Visualisaition Academy? Almost 400 pages, 3 ways to navigate, ...</p>
	</div>
	<div class="navigation-blocks">
		<div class="block topics">
			<h2>Topics</h2>
			<p>Explore the topics and subtopics of the Data Visualisation Academy through the table of content in the sidebar.
			</p>
			<p>Here are some suggested topics to get started:</p>
		</div>
		<div class="block search">
			<h2>Search</h2>
			<p>Find the data visualisation topic you are looking for by using the powerful search bar below.</p>
		</div>
		<div class="block chain">
			<h2>Page chain</h2>
			<p>Use the Academy as a course, and navigate through its complete content by following the chain of pages.
			</p>
			<p>Here are the starting pages for the main topics:</p>
		</div>
	</div>
	<div class="knowledge-graph">
		<h2>Knowledge graph</h2>
	</div>


<style>
	.intro {
		text-align: center;
		max-width: 50rem;
		margin: auto;
	}
	.navigation-blocks {
		margin: auto;
		width: 100%;
		display: flex;
		max-width: 80rem;
		flex-wrap: wrap;
	}
	.block {
		flex: 1;
		padding: 1rem;
		min-width: 250px;
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
