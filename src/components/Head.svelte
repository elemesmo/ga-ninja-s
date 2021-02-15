<script>
  import { fade } from "svelte/transition";
  let romaji = true;
  const changeLogoText = () =>
    setTimeout(() => {
      romaji = !romaji;
      changeLogoText();
    }, 5000);
  changeLogoText();
  export let segment;
</script>

<header>
  <div class="bar" />
  <div class="logo">
    <a href={segment === "about" ? "/" : "/about"}>
      <div class="triangle" />
      {#if romaji}
        <span transition:fade>ra</span>
      {:else}
        <span transition:fade>ら</span>
      {/if}
    </a>
  </div>
</header>

<style>
  header {
    z-index: 999;
  }
  .logo {
    position: absolute;
    left: 50%;
    top: -10px;
    transform: translate(-50%);
    cursor: pointer;
    z-index: 999;
    transition: all 0.3s ease;
  }
  .logo:hover {
    top: 0;
  }
  .logo::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-left: 120px solid transparent;
    border-right: 120px solid transparent;
    border-top: 120px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
    z-index: -1;
  }
  .logo:hover::before {
    top: 10px;
  }
  .logo span {
    position: absolute;
    color: #1a1a1a;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.2em;
    font-weight: 100;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
  .triangle {
    width: 0;
    height: 0;
    border-left: 120px solid transparent;
    border-right: 120px solid transparent;
    border-top: 120px solid #f0f0f0;
  }
  .bar {
    background-color: #f0f0f0;
    position: relative;
    height: 10px;
  }
</style>
