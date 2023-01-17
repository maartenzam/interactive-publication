<script>
	export let tagType;
	export let tag;
    export let root;

	const slugify = (str) =>
		str
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, '')
			.replace(/[\s_-]+/g, '-')
			.replace(/^-+|-+$/g, '');
</script>

<a class={'tag ' + tagType} href={root ? 'tag/' + slugify(tag) : slugify(tag)}>
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
