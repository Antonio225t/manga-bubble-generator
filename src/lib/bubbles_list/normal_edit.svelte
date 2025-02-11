<script lang="ts">
    import type { Bubble } from "$lib/types";

    let { bubble }: { bubble: Bubble } = $props();
</script>



<p>{bubble.type}</p>