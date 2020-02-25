<script>
  import Display from "./Display.svelte";
  import TitleBar from "./TitleBar.svelte";
</script>

<style>
  :global(body) {
    padding: 0px 0px;
    background-color: #f1f1f1;
    scroll-behavior: smooth;
  }
</style>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
  <script
    src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">

  </script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js">

  </script>
  <script
    src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js">

  </script>
</svelte:head>
<main style="height:100%">
  
  <div style="height:89%">
    <Display/>
  </div>
</main>
