<script>
  export let data;
</script>

<article>
  <h1>{ data.title }</h1>
  <p>ID: {data.id}</p>
  <svelte:component this={data.content} />
</article>