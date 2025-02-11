<script lang="ts">
    import BuildBorder from "./build_svg/build_border.svelte";
import BuildMasks from "./build_svg/build_masks.svelte";
    import BuildText from "./build_svg/build_text.svelte";
    import BuildType from "./build_svg/build_type.svelte";
    import { selectedBubble } from "./stores";
    import { BubbleType, type Bubble } from "./types";

    let { bubble, i, thinking }: { bubble: Bubble, i:number, thinking: boolean } = $props();

    let padding = 5;
</script>



<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox={`-${bubble.width + padding} -${bubble.height + padding} ${bubble.width * 2 + padding * 2} ${bubble.height * 2 + padding * 2}`} fill="none">
    <defs>
        <g id={`bubbles-${i}`} stroke-linejoin="miter" stroke-miterlimit="200" >
            <BuildType x={-(bubble.width / 2)} y={-(bubble.height / 2)} type={bubble.type} width={bubble.width} height={bubble.height} />
        </g>
    </defs>

    <BuildMasks maskId={`stroke-mask-${i}`} innerMaskId={`inner-mask-${i}`} bubblesId={`#bubbles-${i}`} x={-(bubble.width / 2)} y={-(bubble.height / 2)} width={bubble.width} height={bubble.height}  />
    <BuildBorder bubblesId={`#bubbles-${i}`} maskId={`url(#stroke-mask-${i})`} {thinking} />
    
    <BuildText text={bubble.text} x={0} y={0} />
</svg>