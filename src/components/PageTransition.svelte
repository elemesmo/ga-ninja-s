<script>
  import { fly } from "svelte/transition";
  export let refresh = "";
  let xAmount = 10;
  let flyInOpt = { x: xAmount, duration: 250, delay: 300 };
  let flyOutOpt = { x: xAmount, duration: 250 };
  $: if (refresh === "about") {
    flyOutOpt.x = -xAmount;
    flyInOpt.x = xAmount;
  }
  $: if (refresh === undefined) {
    flyOutOpt.x = xAmount;
    flyInOpt.x = -xAmount;
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
