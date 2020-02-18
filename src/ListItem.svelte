<script>
export let member;
import Display from './Display.svelte'
export let displayChildren;
function showChildren()
{
    console.log("member.name",member.name);
    displayChildren(member.name);
}
</script>
<button type="button" value={member.name} on:click={showChildren}>{member.name}</button>