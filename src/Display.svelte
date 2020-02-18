<script>
import ListItem from "./ListItem.svelte"
let familyTree =
{
    "name": "Rama chandra",
    "children":
        [
            {
                "name": "padamaja",
                "children": [
                    {
                        "name":"rajesh",
                        "children":[]
                        
                    },
                    {
                        "name":"vinetha",
                        "children":[]
                        
                        
                    },

                    {
                        "name":"thulasi",
                        "children":[]
                        
                    },
                ]

            },
            {
                "name": "kumar",
                "children": [
                    {
                        "name":"sai",
                        "children":[]
                        
                    }
                ]

            },
            {
                "name": "uma",
                "children": [
                    {
                        "name":"praveen",
                        "spouse":"jannu",
                        "children":[]
                        
                    },
                    {
                        "name":"moni",
                        "spouse":"tejubava",
                        "children":[
                            {
                                "name":"teju",
                                "children":[]
                            }
                        ]
                    }
                ]

            },
            {
                "name": "Radhika",
                "children": [
                    {
                        "name":"janani",
                        "children":[]
                        
                    },
                    {
                        "name":"abi",
                        "children":[]
                        
                    },
                    {
                        "name":"keerthi",
                        "children":[]
                        
                    }
                ]

            },

            {
                "name": "jaya",
                "children": [
                    {
                        "name":"baabi",
                        "children":[]
                        
                    },
                    {
                        "name":"chinni",
                        "children":[]
                        
                    }
                    
                ]

            },

        ]

}
let currentDirectory=familyTree;
function displayChildren(a)
{
    console.log("a value",a);
    console.log("now current currentDirectory",currentDirectory);
   for(let i=0;i<currentDirectory.children.length;i++)
   {
        if(currentDirectory.children[i].name==a){
            currentDirectory=currentDirectory.children[i];
            console.log("after currentDirectory",currentDirectory);
        }
    }
}
</script>
<p>{currentDirectory.name}</p>

{#each currentDirectory.children as member}
<ListItem {member} {displayChildren}/>
{/each}

<style>

</style>