<script lang="ts">
    let { icon, title, onclick, disabled }: { icon?: string, title?: string, onclick?: (e: MouseEvent) => void, disabled?: boolean } = $props();
</script>



<button {disabled} {title} {onclick}>
    <img src={icon ? icon : "test.svg"} alt={title} />
</button>



<style>
    button {
        transition: all .15s ease-in;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: hsla(var(--first-color), calc(var(--primary-color) + 20%), .5);
        opacity: .5;
        border: none;
        border-radius: 8px;
        padding: 4px;
    }

    button:hover {
        transition: all .15s ease-out;
        opacity: 1;
        background-color: hsla(var(--first-color), calc(var(--primary-color) + 20%), .8);
        cursor: pointer;
    }

    button:disabled {
        transition: all .15s ease-in;
        background-color: hsla(var(--first-color), calc(var(--primary-color) + 8%), .8);
        opacity: .2;
    }

    button:disabled:hover {
        transition: all .15s ease-out;
        opacity: .3;
        cursor: not-allowed;
    }

    img {
        width: 28px;
        height: 28px;
    }
</style>