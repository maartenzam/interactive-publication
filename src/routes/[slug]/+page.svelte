<script>
  export let data;
</script>

<article>
  <h1>{ data.title }</h1>
  <p>ID: {data.id}</p>
  <p>{#if data.previous}<a href={data.previous}>Previous</a>{/if} {#if data.next}<a href={data.next}>Next</a>{/if}</p>
  <svelte:component this={data.content} />
</article>