<script context="module">
  export async function preload({ params }) {
    return { category: params.category };
  }
</script>

<script>
  export let category;
</script>

<h1>{category}</h1>