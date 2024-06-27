<script>
    import { onMount, afterUpdate } from "svelte";
    import { mathjaxLoad, mathjaxTypeset } from "../utilities";
  
    onMount(async () => {
      mathjaxLoad();
    });
  
    afterUpdate(() => {
      mathjaxTypeset();
    });
</script>