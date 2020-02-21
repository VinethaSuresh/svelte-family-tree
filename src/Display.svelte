<script>
  import ListItem from "./ListItem.svelte";
  import root from "./JsonData.js";

  let currentDirectory = root;
  function displayChildren(child) {
    currentDirectory = child;
  }

  function clickHandler() {
    currentDirectory = currentDirectory.parent;
  }
</script>
  <link rel="stylesheet" type="text/css" href="./Display.css" />

<div class="parent">
  <ListItem member={currentDirectory} {displayChildren} {clickHandler} />
  <button type="button" on:click={clickHandler}>Back To Parent</button>
</div>

<div class="colorContainer">
  <div class="OffSpringContainer">
    <div class="OffSpringClass">OffSpring</div>
  </div>
  <div class="childrenStyle">
    {#each currentDirectory.children as member}
      <ListItem {member} {displayChildren} />
    {/each}
  </div>
</div>
<style>
  .childrenStyle {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    margin-top: 40px;
  }
  .colorContainer {
    background-color: #f7e0d4;
    height: 50%;
  }

  .parent {
    height: 50%;
    background-color: #fc600a;
    padding-top: 50px;
    padding-left: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    width: 100px;
    height: 100px;
    color: #092834;
    font-size: 20px;
    background-color: #f7e0d4;
    margin-right: 50px;
    text-align: center;
    margin-top: 40px;
  }
  .OffSpringContainer {
    height: 30px;
    padding-top: 20px;
    text-align: center;
    text-align: center;
    margin-left: 10px;
  }
  .OffSpringClass {
    font-weight: 50px;
    line-height: 30px;
    font-size: 30px;
    width: 250px;
    color: #092834;
  }
</style>
