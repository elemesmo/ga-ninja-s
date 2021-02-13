<script>
  import { fly } from "svelte/transition";
  export let refresh = "";
  let flyInOpt = { x: 30, duration: 250, delay: 300 };
  let flyOutOpt = { x: 30, duration: 250 };
  $: if (refresh === "about") {
    flyOutOpt.x = -30;
    flyInOpt.x = 30;
  }
  $: if (refresh === undefined) {
    flyOutOpt.x = 30;
    flyInOpt.x = -30;
  }
</script>

{#key refresh}
  <div in:fly={flyInOpt} out:fly={flyOutOpt}>
    <slot />
  </div>
{/key}

<style>
  div {
    position: absolute;
  }
</style>
