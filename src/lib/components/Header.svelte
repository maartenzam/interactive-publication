<script>
  import { base } from '$app/paths';
  import { isMobile } from '$lib/stores/stores.js'
  import SearchBar from '$lib/components/SearchBar.svelte'
</script>

<header>
  {#if !$isMobile}
  <div>
    <div class="icon-container">
    <a href="{base}/" class="title"><img class="home-icon" src={`${base}/icons/home-filled.svg`} alt="Home icon"/></a>
  </div>
    <a href="{base}/" class="title">Data Visualisation Guide</a>
  </div>
  {/if}

  <nav style:width={$isMobile ? '100%' : 'auto'}>
    <div class="search-bar" style:width={$isMobile ? '100%' : '20rem'}><SearchBar type="search-in-header" /></div>
  </nav>
</header>

<style>
    header {
      height: 50px;
      padding: 1rem;
      background: #0E47CB;
      color: white;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }
    a.title {
      font-weight: bold;
    }
    .home-icon {
      width: 100%;
    }
    .icon-container {
      height: 18px;
		  max-width: 18px;
      float: left;
      margin-right: 6px;
    }
    </style>