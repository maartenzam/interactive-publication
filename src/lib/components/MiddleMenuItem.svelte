<script>
	import { slide } from 'svelte/transition';
	import { location } from '$lib/stores/stores.js'
	import { base } from '$app/paths';

	export let module;
    export let topicColor;
	export let sidebarOpen

	$: isOpen = module.title == $location.m1;
	const toggle = () => (isOpen = !isOpen);
</script>

<li class="module" on:click={toggle} on:keydown={toggle} aria-expanded={isOpen} style:color={isOpen ? 'white' : topicColor} style:background-color={isOpen ? topicColor : '#f5f5f5'}>
	{module.title} <svg
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
			<li class="page-link"
				style:background-color={page.slug == $location.slug ? topicColor : '#f5f5f5'}
			><a
				href={base + '/' + page.slug}
				style:color={page.slug == $location.slug ? 'white': topicColor}
				on:click={() => sidebarOpen = false}
				>{page.title}</a>
			</li>
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
		transition: background-color 0.5s;
	}
	li.module {
        padding: 0.3rem 0.3rem 0.3rem 1.6rem;
	}
    li.page-link {
        padding: 0.3rem 0.3rem 0.3rem 2.2rem;
		font-size: 0.9rem;
    }
	li.page-link a {
		text-decoration: none;
		display: block;
  		width: 100%;
	}
	svg {
		transition: transform 0.2s ease-in;
		float: right;
	}
</style>
