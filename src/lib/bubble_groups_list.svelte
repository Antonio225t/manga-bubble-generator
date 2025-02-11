<script lang="ts">
    import BubbleGroupRender from "./bubble_group_render.svelte";
    import BubbleEditSelector from "./bubbles_list/bubble_edit_selector.svelte";
    import BubbleGroupEdit from "./bubbles_list/bubble_group_edit.svelte";
    import BubblesList from "./bubbles_list/bubbles_list.svelte";
    import { bubbleList, DEFAULT_BUBBLE, DEFAULT_BUBBLE_GROUP, selectedBubble, selectedBubbleList } from "./stores";
    import Button from "./utils/button.svelte";
    import Fieldset from "./utils/fieldset.svelte";

    function add_bubble_list(e: MouseEvent) {
        $bubbleList = [...$bubbleList, DEFAULT_BUBBLE_GROUP];

        if (!e.shiftKey) {
            $selectedBubbleList = $bubbleList.length - 1;
        }
    }

    function remove_bubble_list(e: MouseEvent) {
        let list = [];
        for (let i = 0;i < $bubbleList.length;i++) {
            console.log(i, $selectedBubbleList);
            if (i !== $selectedBubbleList) {
                list.push($bubbleList[i]);
            }
        }
        $bubbleList = list;
        $selectedBubbleList = -1;
    }


    function add_bubble_to_group(e: MouseEvent) {
        let list = $bubbleList;
        let group = list[$selectedBubbleList];
        group.bubbles.push(DEFAULT_BUBBLE);
        list[$selectedBubble] = group;
        $bubbleList = list;

        if (!e.shiftKey) {
            $selectedBubble = group.bubbles.length-1;
        }
    }

    function remove_bubble_from_group(e: MouseEvent) {

    }

    function select(i: number) {
        if ($selectedBubbleList === i) {
            $selectedBubbleList = -1;
        } else {
            $selectedBubbleList = i;
        }
    }
</script>



<div class="bubbleList">
    <ul>
        {#if $bubbleList.length === 0}
            <p>Credits to <a target="_blank" href="https://www.cdnfonts.com/digital-strip.font">cdnfonts</a> for the DigitalStrip font! Remember that this font is for personal use only!</p>
            <p>To start, click on the + icon</p>
        {:else}
            {#each $bubbleList as bubbleGroup, i}
                <li>
                    {#key $selectedBubbleList}
                        <details class="bubbleGroup" open={i === $selectedBubbleList}>
                            <summary onclick={() => {select(i)}}>
                                <BubbleGroupRender group={bubbleGroup} {i} noPosResize={true} />
                            </summary>
        
                            <Fieldset legend="Group options">
                                <BubbleGroupEdit group={bubbleGroup} />
                            </Fieldset>
                            <Fieldset legend="Boubles">
                                {#key bubbleGroup.bubbles.length}
                                    <div class="bubbleChildList">
                                        <BubblesList group={bubbleGroup} />
                                    </div>
                                {/key}
                            </Fieldset>
                        </details>
                    {/key}
                </li>
            {/each}
        {/if}
    </ul>
    <div class="listBtns">
        <Button title="Add a new bubble group" icon="add_bubble_list.svg" onclick={add_bubble_list} />
        {#key $selectedBubbleList}
            <Button title="Remove the selected bubble group" icon="remove_bubble_list.svg" disabled={$selectedBubbleList < 0} onclick={remove_bubble_list} />
            <Button title="Add a bubble in the selected bubble group" icon="add_bubble.svg" disabled={$selectedBubbleList < 0} onclick={add_bubble_to_group} />
            <Button title="Remove the selected bubble in the selected group" icon="remove_bubble.svg" disabled={$selectedBubbleList < 0 || $selectedBubble < 0} onclick={remove_bubble_from_group} />
        {/key}
    </div>
</div>



<style>
    p {
        color: #fff;
        font-family: 'DigitalStrip BB', sans-serif;
    }

    .bubbleList {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
    }

    .listBtns {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: 100%;
        height: 10%;
        border-top: 2px solid hsl(var(--first-color), var(--primary-color-border));
    }

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

    .bubbleChildList {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 7px;
    }
</style>