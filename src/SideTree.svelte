<script>
    export let root;
    import Member from './Member.svelte'
export let displayChildren;
</script>
<div class="container-size">  
    <Member obj={root} {displayChildren}/>
</div>
<style>
    .container-size
    {
       
        display:inline-block;
        width:15%;
        padding-top:40px; 
        padding-left:40px;
        background-color:white;
        color:darkgreen;
        font-size: 15px;
        font-weight:10px;
        font-family: Verdana, sans-serif;
       
       
    }

</style>