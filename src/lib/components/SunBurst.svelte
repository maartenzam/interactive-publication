<script>
    import toc from '$lib/data/toc.json'

    let width;

</script>

<div bind:clientWidth={width}>
    <svg width={'100%'} height={width}>
    <rect {width} height={width} fill="gold"></rect>
</svg>
</div>