<script>
	import Header from '$lib/components/Header.svelte';
	import AccordionMenu from '../lib/components/AccordionMenu.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import '$lib/styles/style.css';
	import '$lib/styles/code-highlighting.css';

	let sidebarOpen = true;
	const toggleSidebar = function () {
		sidebarOpen = !sidebarOpen;
	};
</script>

<Header />
<Breadcrumbs />

<div class={sidebarOpen ? 'sidebar-toggle open' : 'sidebar-toggle closed'}>
	<button on:click={() => toggleSidebar()}>TOPICS {sidebarOpen ? '<<' : '>>'}</button>
</div>

<div class="container">
<div class={sidebarOpen ? 'sidebar open' : 'sidebar closed'}><AccordionMenu /></div>
<div class={sidebarOpen ? 'content open' : 'content closed'}>
	<slot />
</div>
</div>

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
		width: 100px;
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
	.sidebar.open {
		left: 0;
		display: block;
	}
	.sidebar.closed {
		left: -30%;
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
</style>
