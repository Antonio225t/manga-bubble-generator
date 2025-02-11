<script lang="ts">
    let { bubblesId, maskId, thinking }: { bubblesId: string, maskId: string, thinking: boolean } = $props();
</script>



<use href={bubblesId} fill="#fff" />
<use href={bubblesId} stroke="#000" stroke-width="2" mask={maskId} stroke-dasharray={thinking ? "4" : "0"} />