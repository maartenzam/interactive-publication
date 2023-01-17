<script>
    export let tagType;
    export let tag;
    export let activeTag;
  </script>
  
  <div
    class={'tag ' + tagType}
    on:click={() => {
      activeTag = tag;
    }}
  >
    {tag}
  </div>
  
  <style>
    .tag {
      padding: 3px;
      display: inline;
      border-radius: 2px;
      margin-right: 3px;
      cursor: pointer;
    }
    .t1, .m1 {
      background-color: gold;
    }
    .m2, .t2 {
      background-color: salmon;
    }
    .meta {
      background-color: lightskyblue;
    }
  </style>