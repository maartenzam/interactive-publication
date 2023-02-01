<script>
  import { onMount } from "svelte";
  import {
    forceSimulation,
    forceLink,
    forceManyBody,
    forceCenter,
    forceCollide
  } from "d3-force";

  export let data;
  export let activePageData;
  //export let tagPages;

  let width = 960;
  let height = 960;

  $: edges = data.edges;
  $: nodes = data.nodes;

  const colorScale = {
    'root': 'black',
    'Design principles': '#C73938',
    'Data storytelling': '#316DB0',
    'Pitfalls': '#661188',
    'Dataviz in practice': '#53793F',
    'Chart types': '#D96694',
    'Accessibility': '#707070',
    'Grammar of Graphics': '#E49A3E',
  }

  /*$: taggedNodes = nodes.filter((d) =>
    tagPages.map((d) => d.title).includes(d.id)
  );*/

  let simulation;
  function network() {
    simulation = forceSimulation(nodes)
      .force("link",forceLink(edges).id((d) => d.id).distance(0).strength(0.8))
      .force("collide", forceCollide().radius(d => d.depth == 0 ? 32 : d.depth == 1 ? 24 : d.depth == 2 ? 12 : 4))
      .force("charge", forceManyBody().strength(-10))
      .force("center", forceCenter(width / 2, height / 2).strength(0.01))
      .on("tick", () => {
        simulation.tick();
        nodes = [...nodes];
        edges = [...edges];
      });
  }

  onMount(network);
</script>

<svg {width} {height}>
  {#each edges as edge}
  {#if edge.source && (edge.depth || edge.depth == 0)}
    <g stroke="#999" stroke-opacity="0.6">
      <line
        x1={edge.source.x}
        y1={edge.source.y}
        x2={edge.target.x}
        y2={edge.target.y}
        stroke-width={edge.depth == 0 ? 6 : edge.depth == 1 ? 2 : edge.depth == 2 ? 1 : 1}
        stroke={colorScale[edge.target.id]}
      >
        <title>{edge.source.id}</title>
      </line>
    </g>
    {/if}
  {/each}

  {#each nodes as point}
    {#if activePageData && point.id == activePageData.title}
      <circle
        r={10}
        stroke={"black"}
        stroke-width={3}
        cx={point.x}
        cy={point.y}
      />
    {/if}
    {#if point.depth || point.depth == 0}
    <circle
      class="node"
      r={point.depth == 0
        ? 12
        : point.depth == 1
        ? 7
        : point.depth == 2
        ? 5
        : 4}
      fill={colorScale[point.id]
        ? colorScale[point.id]
        : edges.find(d => d.source.id == point.id) && colorScale[edges.find(d => d.source.id == point.id).target.id]
          ? colorScale[edges.find(d => d.source.id == point.id).target.id]
          : '#bbbbbb'}
      cx={point.x}
      cy={point.y}
    >
      <title>{point.id}</title></circle
    >
    {/if}
  {/each}
</svg>

<style>
  circle {
    stroke: #fff;
    stroke-width: 1.5;
  }
</style>
