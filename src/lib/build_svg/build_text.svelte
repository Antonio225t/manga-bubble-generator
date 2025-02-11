<script lang="ts">
    let { text, x, y }: { text: string, x: number, y: number } = $props();

    let textes = $derived(text.split("\n"));
    let textLen = $derived(.5 - ((.25 * textes.length) + (.25 * (textes.length - 1))));
</script>



<style>
    tspan {
        font-size: .85rem;
        font-family: 'DigitalStrip BB', sans-serif;
        text-anchor: middle;
    }
</style>
<text {y} fill="#000">
    {#each textes as text, i}
        {#if i === 0}
            <tspan {x} dy={`${textLen}rem`}>{text}</tspan>
        {:else}
            <tspan {x} dy="1rem">{text}</tspan>
        {/if}
    {/each}
</text>