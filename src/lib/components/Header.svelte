<script>
  import { base } from '$app/paths';
  import SearchBar from '$lib/components/SearchBar.svelte'
</script>

<header>
  <a href="{base}/" class="title">Data Visualisation Academy</a>

  <nav>
    <div class="search-bar"><SearchBar></SearchBar></div>
  </nav>
</header>

<style>
    header {
      padding: 1rem;
      background: #004494;
      color: white;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
    }
    
    .search-bar {
      width: 20rem;
      margin-right: 1rem;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }
    a.title {
      font-weight: bold;
    }
    </style>