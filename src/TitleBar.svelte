<script>

let searchString="";
export let root;
export let displayChildren;
function findNode(node,name)
{
  console.log("recurisve")
  if(node.name.toLowerCase()==name)
  {
    console.log("match");
    displayChildren(node);
    return;
  }
 for(let i=0;i<node.children.length;i++)
 {
  findNode(node.children[i],name)
 }
}
$: 
{
  findNode(root,searchString);
  console.log(searchString);
}

</script>

<style>
  div {
    
    background-color:#FC600A;
    color:black;
    font-size: 30px;
    font-weight: 50px;
    line-height: 65px;
    padding-left: 70px;
    
    
  }
</style>

<div>My family Tree
 <input text="text" bind:value={searchString} >
 
 
 </div>
