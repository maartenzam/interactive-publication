<script>
	import Header from '$lib/components/Header.svelte';
	import AccordionMenu from '../lib/components/AccordionMenu.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { location, isMobile } from '$lib/stores/stores.js';
	import '$lib/styles/style.css';
	import '$lib/styles/code-highlighting.css';

	$: sidebarOpen = $isMobile ? false : true;
	const toggleSidebar = function () {
		sidebarOpen = !sidebarOpen;
	};

</script>

<svelte:head>
    <title>{$location.type == 'home'
		? 'Data Visualisation Academy'
		: $location.title
			? $location.title 
			: $location.m1
				? $location.m1
				: $location.t1}</title> 
</svelte:head>

<Header />
<Breadcrumbs />

{#if !($isMobile && $location.type == 'home')}
<div class={sidebarOpen ? 'sidebar-toggle open' : 'sidebar-toggle closed'}>
	<button on:click={() => toggleSidebar()}>TABLE OF CONTENTS {sidebarOpen ? '<<' : '>>'}</button>
</div>
{/if}

{#if !$isMobile}
<div class="container">
	<div class={sidebarOpen ? 'sidebar open' : 'sidebar closed'}><AccordionMenu /></div>
	<div class={sidebarOpen ? 'content open' : 'content closed'}>
		<slot />
	</div>
</div>
{/if}

{#if $isMobile}
<div class="container mobile">
	<div class={sidebarOpen ? 'content mobile open' : 'content mobile closed'}>
		<slot />
	</div>
	{#if $location.type != 'home'}
	<div class={sidebarOpen ? 'sidebar mobile open' : 'sidebar mobile closed'}><AccordionMenu bind:sidebarOpen/></div>
	{/if}
</div>
{/if}

<Footer />

<style>
	.container {
		display: flex;
	}
	.sidebar-toggle.open {
		/** Todo: set the width properly**/
		width: 23%;
	}
	.sidebar-toggle.closed {
		width: 180px;
	}
	.sidebar-toggle {
		transition: width 1s;
	}
	.sidebar-toggle button {
		width: 100%;
		border-radius: 0px;
		border: none;
		text-align: right;
		padding: 0.5rem;
		background-color: #f5f5f5;
	}
	.sidebar {
		position: relative;
		width: 30%;
		transition: left 1s;
		background-color: #f5f5f5;
	}
	.sidebar.mobile {
		width: 100%;
		position: absolute;
	}
	.sidebar.open {
		left: 0;
		display: block;
	}
	.sidebar.closed {
		left: -30%;
	}
	.sidebar.mobile.closed {
		left: -100%;
	}
	.sidebar.mobile.open {
		left: 0%;
	}
	.content {
		width: 100%;
		transition: margin-left 1s;
	}
	.content.open {
		margin-left: 0%;
	}
	.content.closed {
		margin-left: -30%;
	}
	.content.closed.mobile {
		margin-left: 0%;
	}
</style>
