<script>
	import { slide } from 'svelte/transition';
	export let module;
    export let topicColor;

	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);

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

<li class="module" on:click={toggle} on:keydown={toggle} aria-expanded={isOpen} style:color={isOpen ? 'white' : topicColor} style:background-color={isOpen ? topicColor : 'white'}>
	{module.id} <svg
	style="tran"
	width="20"
	height="20"
	fill="none"
	stroke-linecap="round"
	stroke-linejoin="round"
	stroke-width="3"
	viewBox="0 0 24 24"
	style:float={'right'}
	style:transform={isOpen ? 'rotate(0.75turn)' : 'rotate(0.25turn)'}
	stroke={isOpen ? 'white' : topicColor}><path d="M9 5l7 7-7 7" /></svg
>
</li>

{#if isOpen}
	<ul transition:slide={{ duration: 300 }}>
		{#each module.children as page}
			<li class="page-link" color={topicColors[topicColor]}><a href={page.id}>{page.id}</a></li>
		{/each}
	</ul>
{/if}

<style>
    ul {
        padding: 0;
    }
	li {
		list-style-type: none;
		cursor: pointer;
	}
	li.module {
        padding: 0.3rem 0.3rem 0.3rem 1.2rem;
	}
    li.page-link {
        padding: 0.3rem 0.3rem 0.3rem 1.6rem;
    }
	svg {
		transition: transform 0.2s ease-in;
	}
	svg {
		transform: rotate(0.25turn);
	}
</style>
