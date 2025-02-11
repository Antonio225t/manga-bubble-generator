<script lang="ts">
    import BubbleRender from "$lib/bubble_render.svelte";
    import { bubbleList, selectedBubble, selectedBubbleList } from "$lib/stores";
    import type { BubbleGroup } from "$lib/types";
    import Fieldset from "$lib/utils/fieldset.svelte";
    import BubbleEditMain from "./bubble_edit_main.svelte";

    let { group }: { group: BubbleGroup } = $props();

    function select(i: number) {
        if ($selectedBubble === i) {
            $selectedBubble = -1;
        } else {
            $selectedBubble = i;
        }
    }
</script>



<ul>
    {#key $selectedBubble}
        {#each group.bubbles as bubble, i}
            <li>
                <details open={$selectedBubble === i}>
                    <summary onclick={() => {select(i);}}>
                        <BubbleRender {bubble} {i} thinking={group.thinking} />
                    </summary>

                    <Fieldset legend="Bubble">
                        <BubbleEditMain {bubble} />
                    </Fieldset>
                </details>
            </li>
        {/each}
    {/key}
</ul>



<style>
    ul {
        padding: 0;
        width: 90%;
        flex-grow: 1;

        overflow: scroll;
    }

    li {
        list-style-type: none;
        width: 100%;
        padding-bottom: 10px;
    }

    summary::marker {
        content: "";
    }

    details {
        border-radius: 10px;
        background-color: hsl(var(--first-color), var(--secondary-color));

        padding: 5px;
        color: #fff;
    }

    summary {
        transition: all .15s ease-in;
        width: 100%;
        height: 12rem;
        user-select: none;
    }

    details[open] summary {
        transition: all .15s ease-in;
        background-color: hsl(var(--first-color), var(--secondary-color));
    }

    summary:hover, details[open] summary:hover {
        transition: all .15s ease-out;
        background-color: hsl(var(--first-color), var(--tertiary-color));

        cursor: pointer;

        border-radius: 13px;
    }
</style>