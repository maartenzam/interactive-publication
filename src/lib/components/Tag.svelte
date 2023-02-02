<script>
	export let tagType;
	export let tag;
    export let root;
	import { base } from '$app/paths';
	import {slugify } from '$lib/utils/slugs.js'


</script>

<a class={'tag ' + tagType} href={root ? `${base}/tag/${slugify(tag)}` : slugify(tag)}>
	{tag}
</a>

<style>
	.tag {
		padding: 3px;
		display: inline;
		border-radius: 2px;
		margin-right: 3px;
		cursor: pointer;
        text-decoration: none;
        color: #404040;
	}
	.t1,
	.t2 {
		background-color: gold;
	}
	.m1,
	.m2 {
		background-color: salmon;
	}
	.meta {
		background-color: lightskyblue;
	}
</style>
