<script>
  import ListItem from "./ListItem.svelte";
  import SideTree from "./SideTree.svelte";
  import TitleBar from './TitleBar.svelte';
  import root from "./JsonData.js";
  let currentDirectory = root;
  function displayChildren(child) {
    currentDirectory = child;
    console.log("currentDirectory",currentDirectory);

  }
  function clickHandler() {
    currentDirectory = currentDirectory.parent;
  }
</script>
<div style="height:10%">
    <TitleBar {root}{displayChildren} />
  </div>
<link rel="stylesheet" type="text/css" href="./Display.css" />
<div class="display-container">
  <div class="sidetree-container">
    <!-- <SideTree {root} {displayChildren} /> -->
  </div>
  <div class="parent-children-container">
  <div class="parent-container">
    <ListItem member={currentDirectory} {displayChildren} />
    <button type="button" on:click={clickHandler}>Back To Parent</button>
  </div>
  <div class="children-container">
      <div class="OffSpringClass">OffSpring</div>
    <div class="childrenStyle">
      {#each currentDirectory.children as member}
        <ListItem {member} {displayChildren} />
      {/each}
    </div>
  </div>
</div>
</div>

<style>
  /* .childrenStyle {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
   
  }
  .colorContainer {
    background-color: #f7e0d4;
   
  }
  .parent-container{
    
    background-color: #fc600a;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:70%;
    display:inline-block;
  }

  button {
     color: #092834;
    font-size: 20px;
    background-color: #f7e0d4;
    text-align: center;
    
  }
  .OffSpringContainer {
    text-align: center;
    text-align: center;
 
  }
  .OffSpringClass {
    font-weight: 50px;
    line-height: 30px;
    font-size: 30px;
    color: #092834;
  } */
  .sidetree-container {
    display: inline-block;
    width:30%;
  }
  .display-container {
    display: inline;
  }
</style>