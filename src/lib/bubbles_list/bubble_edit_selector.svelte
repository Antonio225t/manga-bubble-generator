<script lang="ts">
    import { BubbleType, type Bubble } from "$lib/types";
    import BubbleEditMain from "./bubble_edit_main.svelte";
    import NormalEdit from "./normal_edit.svelte";

    let { bubble }: { bubble: Bubble } = $props();
</script>



<BubbleEditMain {bubble} />
{#key bubble.type}
    {#if bubble.type === BubbleType.NORMAL}
        <NormalEdit {bubble} />
    {/if}
{/key}