<script>
    import Header from '$lib/components/Header.svelte'
    import AccordionMenu from '../lib/components/AccordionMenu.svelte';
    import Footer from '$lib/components/Footer.svelte'
    import '$lib/styles/style.css'
    import '$lib/styles/code-highlighting.css'

    let sidebarOpen = true
    const toggleSidebar = function (){
        sidebarOpen = !sidebarOpen
    }
</script>

<Header/>
<div class={sidebarOpen ? "sidebar-toggle open" : "sidebar-toggle closed"}><button on:click={() => toggleSidebar()}>TOPICS {sidebarOpen ? '<<' : '>>'}</button></div>
<div class={sidebarOpen ? "sidebar open" : "sidebar closed"}><AccordionMenu></AccordionMenu></div>
<div class={sidebarOpen ? "content open" : "content closed"}>
  <slot />
</div>

<Footer/>

<style>
  .sidebar-toggle.open {
    width: 25%;
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
  }
  .sidebar {
    position: relative;
    width: 25%;
    transition: width 1s, left 1s;
    /*overflow-x: hidden;*/
  }
  .content {
    transition: margin-left 1s;
  }
  .sidebar.open {
    /*width: 25%;*/
    left: 0;
    display: block;
  }
  .sidebar.closed {
    /*width: 25%;*/
    position: absolute;
    left: -25%;
  }
  .content.open {
    margin-left: 25%;
  }
  .content.closed {
    margin-left: 0%;
  }
</style>
