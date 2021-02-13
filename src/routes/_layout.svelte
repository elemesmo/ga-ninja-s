<script>
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import SwipeListener from "swipe-listener";
  import PageTransition from "../components/PageTransition.svelte";
  import Nav from "../components/Nav.svelte";
  import Head from "../components/Head.svelte";
  export let segment;

  let main;
  onMount(() => {
    let listener = SwipeListener(main);
    main.addEventListener("swipe", (e) => {
      let directions = e.detail.directions;
      if (segment === "about" && directions.right) goto("/");
      if (segment === undefined && directions.left) goto("/about");
    });
    return () => listener.off();
  });
</script>

<svelte:head>
  <meta name="msapplication-TileColor" content="#1a1a1a" />
  <meta name="theme-color" content="#1a1a1a" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="194x194" href="/favicon-194x194.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1a1a1a" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,400&display=swap"
    rel="stylesheet" />
</svelte:head>

<Head {segment} />

<main bind:this={main}>
  <Nav {segment} />
  <PageTransition refresh={segment}>
    <slot />
  </PageTransition>
</main>

<style>
  main {
    position: relative;
    display: flex;
    max-width: 420px;
    padding: 0 2em;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 10px);
  }

  @media screen and (max-width: 580px) {
    main {
      max-width: 400px;
      margin: 0 25px;
    }
  }
</style>
