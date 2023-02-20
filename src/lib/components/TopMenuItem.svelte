<script>
	import { slide } from 'svelte/transition';
	import MiddleMenuItem from './MiddleMenuItem.svelte';
	import { location } from '$lib/stores/stores.js'
	
	export let training;

	$: isOpen = training.id == $location.t1;
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

<li class="training" on:click={toggle} on:keydown={toggle} aria-expanded={isOpen} style:background-color={topicColors[training.id]}>
	{training.id} <svg
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
	stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
>
</li>

{#if isOpen}
	<ul transition:slide={{ duration: 300 }}>
		{#each training.children as module}
		<MiddleMenuItem {module} topicColor={topicColors[training.id]}></MiddleMenuItem>
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
	li.training {
		text-transform: uppercase;
		color: white;
		padding: 0.5rem;
	}
	svg {
		transition: transform 0.2s ease-in;
	}
	svg {
		transform: rotate(0.25turn);
	}
</style>
