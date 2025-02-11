<script lang="ts">
    import type { Snippet } from "svelte";

    let { legend, children }: { legend?: string, children?: Snippet } = $props();
</script>



<div class="fieldset">
    {#if legend !== void 0}
        <div class="legend">{legend}</div>
    {/if}
    <div class="padding">
        {@render children?.()}
    </div>
</div>



<style>
    .fieldset {
        border: solid #fff 1px;
        border-top: none;
        margin-top: 20px;
    }

    .fieldset .legend {
        font: 1em normal;
        position: relative;
        top: -.65rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fieldset .legend::before,
    .fieldset .legend::after {
        content: "";
        background-color: #fff;
        height: 1px;
        flex: 1;
    }

    .fieldset .legend::before {
        margin-right: 10px;
    }

    .fieldset .legend::after {
        margin-left: 10px;
    }

    .padding {
        padding: 10px;
        overflow: hidden;
    }
</style>