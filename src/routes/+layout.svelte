<script>
	import Header from '$lib/components/Header.svelte';
	import AccordionMenu from '../lib/components/AccordionMenu.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { location, isMobile } from '$lib/stores/stores.js';
	import '$lib/styles/style.css';
	import '$lib/styles/code-highlighting.css';
	import AnimatedHamburger from '$lib/components/AnimatedHamburger.svelte'

	$: sidebarOpen = $isMobile ? false : true;
	const toggleSidebar = function () {
		sidebarOpen = !sidebarOpen;
	};

</script>

<svelte:window/>

<svelte:head>
    <title>{$location.type == 'home'
		? 'Data Visualisation Guide'
		: $location.title
			? $location.title 
			: $location.m1
				? $location.m1
				: $location.t1}</title> 
</svelte:head>

<Header />
<Breadcrumbs />

<!--Toggle to open and close the sidebar-->
{#if !($isMobile && $location.type == 'home')}
<div
	class={sidebarOpen ? 'sidebar-toggle open' : 'sidebar-toggle closed'}
	style:width={sidebarOpen && !$isMobile ? '380px' : sidebarOpen && $isMobile ? '100%' : '40px'}>
	<button on:click={() => toggleSidebar()}>
		<div class="hamburger"><AnimatedHamburger {sidebarOpen}></AnimatedHamburger></div>
	</button>
</div>
{/if}

<!--The sidebar on desktop-->
{#if !$isMobile}
<div class="container">
	<div class={sidebarOpen ? 'sidebar open' : 'sidebar closed'}><AccordionMenu/></div>
	<div class={sidebarOpen ? 'content open' : 'content closed'}>
		<slot />
	</div>
</div>
{/if}

<!--The sidebar on mobile-->
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
	.sidebar-toggle {
		transition: width 1s;
		height: 36px;
		overflow: hidden;
	}
	.sidebar-toggle button {
		width: 100%;
		border-radius: 0px;
		border: none;
		text-align: right;
		padding: 0.5rem;
		background-color: #f5f5f5;
		display: flex;
		justify-content: flex-end;
		flex-wrap: wrap;
	}
	.sidebar {
		position: relative;
		transition: left 1s;
		min-width: 380px;
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
		left: -400px;
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
		margin-left: -400px;
	}
	.content.closed.mobile {
		margin-left: 0%;
	}
	.hamburger {
		align-self: center;
	}
	.hamburger {
		margin-left: 6px;
	}
</style>
