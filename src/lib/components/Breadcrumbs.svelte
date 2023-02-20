<script>
    import { base } from '$app/paths';
    import {slugify } from '$lib/utils/slugs.js'
    export let data
</script>

<nav class="breadcrumbs">
	<ol>
		<li class="crumb"><a href="{base}/">Home</a> ></li>
		<li class="crumb"><a  href={'tag/' + slugify(data.t1)}>{data.t1}</a> ></li>
		<li class="crumb"><a  href={'tag/' + slugify(data.m1)}>{data.m1}</a> ></li>
		<li class="crumb">{data.title}</li>
	</ol>
</nav>

<style>
    	nav.breadcrumbs {
		width: 100%;
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