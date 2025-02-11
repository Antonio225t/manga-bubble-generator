<script lang="ts">
    import BubbleGroupsList from "$lib/bubble_groups_list.svelte";
    import MainCanvas from "$lib/main_canvas.svelte";


</script>



<main>
    <aside>
        <BubbleGroupsList />
    </aside>
    <article>
        <MainCanvas />
    </article>
</main>



<style>
    :global(body) {
        --first-color: 210, 23%;
        --primary-color: 13%;
        --primary-color-border: 39%;
        --secondary-color: 19%;
        --tertiary-color: 21%;

        --bubble-list-item-color: 208, 100%;
        --bubble-list-item: 97%;
        --bubble-list-item-selected: 84%;
        --bubble-list-item-focus: 90%;
    }

    :global(fieldset) {
        display: table-cell;
    }

    :global(*) {
        box-sizing: border-box;
    }


    main {
        display: flex;
        flex-direction: row;
        
        width: 100lwh;
        height: 100lvh;
    }

    aside {
        width: 16%;
        height: 100%;

        overflow: scroll;

        background-color: hsl(var(--first-color), var(--primary-color));

        border-right-width: 2px;
        border-right-color: hsl(var(--first-color), var(--primary-color-border));
        border-right-style: solid;


        display: flex;
        flex-direction: column;
        align-items: center;
    }

    article {
        flex-grow: 1;
        height: 100%;

        background-color: hsl(var(--first-color), var(--tertiary-color));

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>