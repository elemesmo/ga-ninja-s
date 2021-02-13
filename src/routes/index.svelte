<script>
  import TiSocialInstagram from "svelte-icons/ti/TiSocialInstagram.svelte";
  import IoLogoLinkedin from "svelte-icons/io/IoLogoLinkedin.svelte";
  import IoLogoGithub from "svelte-icons/io/IoLogoGithub.svelte";
  import IoIosMail from "svelte-icons/io/IoIosMail.svelte";
  import meJpg from "images/me.jpg";
</script>

<svelte:head>
  <title>Rafael Garrido - Full-Stack Dev - Contact</title>
</svelte:head>

<figure>
  <img src={meJpg} alt="Face of Rafael Garrido" />
</figure>
<h1>Rafael Garrido</h1>
<h2>Full-Stack Developer</h2>

<ul>
  <li>
    <a target="_blank" href="https://instagram.com/itadakimiausu">
      <TiSocialInstagram />
    </a>
  </li>
  <li>
    <a target="_blank" href="https://linkedin.com/in/ragarrido">
      <IoLogoLinkedin />
    </a>
  </li>
  <li>
    <a target="_blank" href="https://github.com/elemesmo">
      <IoLogoGithub />
    </a>
  </li>
  <li>
    <a target="_blank" href="mailto:rafa@garrido.ninja?subject=Hi Rafa">
      <IoIosMail />
    </a>
  </li>
</ul>

<style>
  img {
    position: relative;
    display: block;
    width: 140px;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 50%;
    opacity: 1;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
  figure {
    position: relative;
    user-select: none;
  }
  figure::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: #f0f0f0;
    border-radius: 50%;
    opacity: 0.3;
  }
  figure:active::before {
    width: calc(100% + 50px);
    height: calc(100% + 50px);
    opacity: 0;
    transition: all 0.1s ease;
  }
  h1,
  h2 {
    text-align: center;
  }
  h1 {
    margin-bottom: 5px;
  }
  h2 {
    font-size: 1em;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 20px;
  }
  li {
    text-align: center;
    display: inline-block;
    width: 35px;
    margin: 0 auto;
  }
  li a {
    display: block;
    opacity: 0.8;
    transform: scale(1);
    transition: all 0.3s ease;
  }
  li a:hover {
    opacity: 1;
    transform: scale(1.2);
  }
</style>
