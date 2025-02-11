<script lang="ts">
    import { BubbleType } from "$lib/types";

    let { type, x, y, width, height }: { type: BubbleType, x: number, y: number, width: number, height: number } = $props();
</script>



{#if type === BubbleType.NORMAL}
    <ellipse cx={x + width / 2} cy={y + height / 2} rx={width} ry={height} />
{:else if type === BubbleType.NARRATOR}
    <rect x={x} y={y} width={width} height={height} />
{/if}