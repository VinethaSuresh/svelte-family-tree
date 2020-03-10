<script>
  import ListItem from "./ListItem.svelte";
  export let currentDirectory;
  export let displayChildren;
  export let clickHandler;
</script>

<div class=" display-container" class:container-height={currentDirectory.children.length==0}>
  <div class="parent-container">
    <ListItem member={currentDirectory} {displayChildren} />
    <button type="button" on:click={clickHandler}>Back To Parent</button>
    </div>
  <div class="children-container">
   {#if currentDirectory.children.length>0}
    <div class="OffSpringClass">OFFSPRING</div>
    {/if}
      {#each currentDirectory.children as member}
        <ListItem {member} {displayChildren} />
      {/each}
    
  </div>
  </div>
<style>

.display-container
{
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  height:35em;
  width:100%;

}

.container-height
{
  height:15em;
}
.OffSpringClass
{
  font-size:40px;
  font-weight:50px;
  font-family: Verdana, sans-serif;
  color:darkgreen;
  height:2.5em;
  margin-left:8em;
  padding-top:0.5em;
  width:100%;
  
}
 
 button
 {
  width:15vw;
  height:10vh;
  background-color:darkgreen;
  color:white;
  font-size:20px;
  font-weight:5px; 
  align-self:center;
  margin-left:22em;
  
 }
 
 .parent-container
 {
   text-align:center;
   display:flex;
   justify-content:flex-start;
   height:10em;
 

 }
 
 
</style>