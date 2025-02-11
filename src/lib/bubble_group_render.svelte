<script lang="ts">
    import BuildBorder from "./build_svg/build_border.svelte";
import BuildMasks from "./build_svg/build_masks.svelte";
    import BuildText from "./build_svg/build_text.svelte";
    import BuildType from "./build_svg/build_type.svelte";
import type { BubbleGroup } from "./types";

    let { group, i, noPosResize }: { group: BubbleGroup, i: number, noPosResize?: boolean } = $props();
</script>



<div style={`${noPosResize ? "" : `position: absolute;left: ${group.x}px;top: ${group.y}px;`}width: ${noPosResize ? "100%" : group.width + "px"};height: ${noPosResize ? "100%" : group.height + "px"};`}>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox={`0 0 ${group.zoomWidth} ${group.zoomHeight}`} fill="none">
        <defs>
            <g id={`group-${i}-${noPosResize}`} stroke-linejoin="miter" stroke-miterlimit="200" >
                {#each group.bubbles as bubble}
                    <BuildType x={bubble.x} y={bubble.y} type={bubble.type} width={bubble.width} height={bubble.height} />
                {/each}
            </g>
        </defs>
        <BuildMasks bubblesId={`#group-${i}-${noPosResize}`} maskId={`group-stroke-mask-${i}-${noPosResize}`} innerMaskId={`group-inner-mask-${i}-${noPosResize}`} x={0} y={0} width={group.zoomWidth} height={group.zoomHeight} />
        
        <BuildBorder bubblesId={`#group-${i}-${noPosResize}`} maskId={`url(#group-stroke-mask-${i}-${noPosResize})`} thinking={group.thinking} />
        {#each group.bubbles as bubble}
            <BuildText text={bubble.text} x={bubble.x + bubble.width / 2} y={bubble.y + bubble.height / 2} />
        {/each}
    </svg>
</div>