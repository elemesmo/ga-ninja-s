<script context="module">
  export async function preload() {
    let response = await this.fetch("/projects.json");
    let projects = await response.json();
    return { projects };
  }
</script>

<script>
  export let projects;
</script>

<h1>Projects</h1>

{#if projects.length > 0}
  <ul>
    {#each projects as project}
      <li>{project.title}</li>
    {/each}
  </ul>
{/if}
