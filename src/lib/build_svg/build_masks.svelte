<script lang="ts">
    let { maskId, innerMaskId, bubblesId, x, y, width, height }: { maskId: string, innerMaskId: string, bubblesId: string, x: number, y: number, width: number, height: number } = $props();
</script>



<mask id={maskId}>
    <rect fill="#fff" x={x} y={y} width={width} height={height} />
    <use href={bubblesId} fill="#000" />
</mask>
<mask id={innerMaskId}>
    <rect fill="#000" x={x} y={y} width={width} height={height} />
    <use href={bubblesId} fill="#fff" />
</mask>