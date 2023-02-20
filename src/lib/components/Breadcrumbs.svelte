<script>
    import { base } from '$app/paths';
    import {slugify } from '$lib/utils/slugs.js'
	import { location } from '$lib/stores/stores.js'
</script>

<nav class="breadcrumbs">
	<ol>
		<li class="crumb"><a href="{base}/">Home</a> ></li>
		<li class="crumb"><a  href={'tag/' + slugify($location.t1)}>{$location.t1}</a> ></li>
		<li class="crumb"><a  href={'tag/' + slugify($location.m1)}>{$location.m1}</a> ></li>
		<li class="crumb">{$location.title}</li>
		{#if $location.t2 && $location.m2}
			<li class="crumb">&lt; <a  href={'tag/' + slugify($location.m2)}>{$location.m2}</a> ></li>
			<li class="crumb">&lt; <a  href={'tag/' + slugify($location.t2)}>{$location.t2}</a></li>
			<li class="crumb">&lt; <a href="{base}/">Home</a></li>
		{/if}
	</ol>
</nav>

<style>
    	nav.breadcrumbs {
		background-color: #f5f5f5;
		border-bottom: 1px solid #cecdcd;
		padding: 0.5rem 1rem;
		color: #a0a0a0;
		font-size: 0.8rem;
        font-weight: 400;
	}
	.breadcrumbs ol {
		list-style-type: none;
		padding: 0;
    margin: 0;
	}

	.crumb {
		display: inline-block;
	}

    .crumb a {
        text-decoration: none;
        color: #a0a0a0;
        padding-bottom: 3px;
        border-bottom: 1px solid #a0a0a0;
    }
</style>