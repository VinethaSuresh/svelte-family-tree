<script>
  export let member;
  import Display from "./Display.svelte";
  export let displayChildren;
  function showChildren() {
    displayChildren(member);
  }
</script>
  <link rel="stylesheet" type="text/css" href="./ListItem.css" />

<div class=" containerClass card" on:click={showChildren}>
  <div class=" card-body-class card-body">
    <img
      src="imagesun.jpg"
      class=" cardTitleClass card-title"
      alt="Card image" />
    <p class=" cardFooterClass card-footer">{member.name}</p>
  </div>
</div>
<style>
.containerClass {
    width: 200px;
    text-align: center;
    height: 200px;
    margin-left: 20px;
    display: inline-block;
  }

  .card-body-class {
    padding: 0px 0px;
  }

  .cardTitleClass {
    height: 150px;
  }
  .cardFooterClass {
    height: 40px;
    color: white;
    text-align: center;
    padding-top: 8px;
    background-color: #1489b8;
    font-size: 20px;

    font-weight: 20px;
  }

  img {
    width: 200px;
  }
</style>