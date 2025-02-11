<script lang="ts">
    import BubbleGroupRender from "./bubble_group_render.svelte";
    import { bubbleList, mainCanvas } from "./stores";


</script>



<div class="mainCanvas" style={`width: ${$mainCanvas.width}px;height: ${$mainCanvas.height}px;`}>
    {#each $bubbleList as bubbleGroup, i}
        <BubbleGroupRender group={bubbleGroup} {i} />
    {/each}
</div>



<style>
    .mainCanvas {
        position: absolute;

        border-width: 2px;
        border-color: hsl(var(--first-color), var(--primary-color-border));
        border-style: solid;
        border-radius: 5px;

        overflow: hidden;
        resize: both;

        background-color: hsl(0, 0%, 87%);
    }
</style>