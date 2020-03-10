<script>
export let displayChildren;
export let obj;
let childVisibility=false;

function toggleVisible()
{
    childVisibility=!childVisibility;
     displayChildren(obj);
}
</script>

<div> 
    <div on:click={toggleVisible} class:bold-text={childVisibility && obj.children.length>0}>{obj.name}</div>
        {#if childVisibility}
            <div class="text-indent" >
                {#each obj.children as child}
                    <svelte:self obj={child} {displayChildren}></svelte:self>
                {/each}
            </div>
        {/if}
</div>

<style>
    
  
    .bold-text
    {
        font-weight: bold;
    }
    .text-indent
    {
        margin-left:1em;
    }
   
</style>