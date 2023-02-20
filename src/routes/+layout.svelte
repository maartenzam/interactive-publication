<script>
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import '$lib/styles/style.css'
    import '$lib/styles/code-highlighting.css'
</script>

<Header/>

  <slot />

<Footer/>
