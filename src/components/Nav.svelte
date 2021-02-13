<script>
  export let segment;
</script>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? "page" : undefined} href=".">
        Contact
      </a>
    </li>
    <li>
      <a aria-current={segment === "about" ? "page" : undefined} href="about">
        About
      </a>
    </li>
  </ul>
</nav>

<style>
  nav {
    font-weight: 300;
    padding: 0 1em;
    position: absolute;
    bottom: 35px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::before {
    position: absolute;
    content: "";
    width: calc(100% - 0.9em);
    height: 3px;
    display: block;
    top: -3px;
    animation: rainbow-bg 10s ease infinite;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>
