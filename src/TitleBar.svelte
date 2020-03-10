<script>
  let searchString = "";
  export let root;
  export let displayChildren;
  function findNode(node, name) {
    if (node.name.toLowerCase() == name) {
      displayChildren(node);
      return;
    }

    for (let i = 0; i < node.children.length; i++) {
      findNode(node.children[i], name);
    }
  }
  $: {
    findNode(root, searchString);
    console.log(searchString);
  }
  function goToRoot() {
    displayChildren(root);
  }
  function imageHandler()
  {
    displayChildren(root);
  }
</script>
<style>
  .titlebar-container
   {
    color:white;
    width:100%;
    height:4em;
    background-color:darkgreen;
    display:flex;
    justify-content: space-evenly;
   
   }

  h1{
    text-align:center;
    display: inline-block;
    width: 40%;
    padding-top:10px;
   
  }
  img{
    width: 90px;
    height:80px;
   
  }
  input{
    
     width:250px;
     height:40px;
     margin-top:10px;
  }
 .home-style
 {
   margin-top:10px;
 }
</style>

<div class="titlebar-container">
<img src="https://i.ibb.co/HdMB7Yk/trees.jpg" alt="familyTreeLogo"  on:click={imageHandler}/> 
<h1 style="width:50%">QUEEN ELIZABETH FAMILY TREE</h1>
  <input text="text" bind:value={searchString} placeholder="Search Here..." />
  <div class="fa fa-home home-style" style="font-size:36px;color:white" on:click={goToRoot}></div>
</div>


