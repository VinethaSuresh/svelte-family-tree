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
        height:400px
    }

</style>