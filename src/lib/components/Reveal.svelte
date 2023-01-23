<script>
    import { slide } from 'svelte/transition';
	export let label;
	export let content;
	let show = false;
</script>

<div class="reveal">
	<input type="checkbox" id={'id'} bind:checked={show} /><label for={'id'}>{show ? '▼' : '▶'} {label}</label>
	{#if show}
		<div transition:slide class="content">
			{@html content}
		</div>
	{/if}
</div>

<style>
.reveal {
  display: inline;
  line-height: inherit;
  position: relative;

  pointer-events: all;
}

  input {
    display: none;
  }
  .content {
    margin-top: 1rem;
    background-color: #eeeeee;
    padding: 4px;
    border-radius: 3px;
  }
</style>
