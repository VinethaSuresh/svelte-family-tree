<script>
  import Display from "./Display.svelte";
  import TitleBar from "./TitleBar.svelte";
  import SideTree from "./SideTree.svelte";
  import root from "./JsonData.js";
  let currentDirectory = root;
  console.log("root",root);

  function displayChildren(child) {
    currentDirectory = child;
  
  }

  function clickHandler() {
    currentDirectory = currentDirectory.parent;
  }
</script>

<style>
  :global(body) {
    padding: 0px 0px;
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
  <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>
<main style="height:100%">
    <TitleBar {root}{displayChildren} />
    <div style="display:flex;flex-direction:row;height:90%;justify-content:space-evenly">
    <SideTree {root} {displayChildren} />
    <Display {currentDirectory} {displayChildren} {clickHandler}/>  
    
    </div>
</main>
