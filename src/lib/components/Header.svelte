<script>
  import { base } from '$app/paths';
</script>

<header>
  <a href="{base}/" class="title">Data Visualisation Academy</a>

  <nav>
    <ul>
      <li>
        <a href="/vis">Visualisation</a>
      </li>
    </ul>
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
    
    ul {
      margin: 0;
      list-style-type: none;
      display: flex;
      gap: 1rem;
    }
    
    a {
      text-decoration: none;
      color: inherit;
    }
    a.title {
      font-weight: bold;
    }
    </style>