<script lang="ts">
    import { bubbleList, selectedBubbleList } from "$lib/stores";
    import type { BubbleGroup } from "$lib/types";

    let { group }: { group: BubbleGroup } = $props();

    function changeX(e: Event & { currentTarget: EventTarget & HTMLInputElement; }) {
        let blist = $bubbleList;
        blist[$selectedBubbleList].x = e.currentTarget.valueAsNumber;
        $bubbleList = blist;
    }

    function changeY(e: Event & { currentTarget: EventTarget & HTMLInputElement; }) {
        let blist = $bubbleList;
        blist[$selectedBubbleList].y = e.currentTarget.valueAsNumber;
        $bubbleList = blist;
    }

    function changeW(e: Event & { currentTarget: EventTarget & HTMLInputElement; }) {
        let blist = $bubbleList;
        blist[$selectedBubbleList].width = e.currentTarget.valueAsNumber;
        $bubbleList = blist;
    }

    function changeH(e: Event & { currentTarget: EventTarget & HTMLInputElement; }) {
        let blist = $bubbleList;
        blist[$selectedBubbleList].height = e.currentTarget.valueAsNumber;
        $bubbleList = blist;
    }

    function changeZW(e: Event & { currentTarget: EventTarget & HTMLInputElement; }) {
        let blist = $bubbleList;
        blist[$selectedBubbleList].zoomWidth = e.currentTarget.valueAsNumber;
        $bubbleList = blist;
    }

    function changeZH(e: Event & { currentTarget: EventTarget & HTMLInputElement; }) {
        let blist = $bubbleList;
        blist[$selectedBubbleList].zoomHeight = e.currentTarget.valueAsNumber;
        $bubbleList = blist;
    }


    function changeThinking(e: Event & { currentTarget: EventTarget & HTMLInputElement; }) {
        let blist = $bubbleList;
        blist[$selectedBubbleList].thinking = e.currentTarget.checked;
        $bubbleList = blist;
    }
</script>



<table>
    <tbody>
        <tr>
            <td><span>X:</span></td>
            <td><input type="number" value={group.x} oninput={changeX} /></td>
        </tr>
        <tr>
            <td><span>Y:</span></td>
            <td><input type="number" value={group.y} oninput={changeY} /></td>
        </tr>
        <tr>
            <td><span>Width:</span></td>
            <td><input type="number" value={group.width} oninput={changeW} /></td>
        </tr>
        <tr>
            <td><span>Height:</span></td>
            <td><input type="number" value={group.height} oninput={changeH} /></td>
        </tr>
        <tr>
            <td><span>Zoom Width:</span></td>
            <td><input type="number" value={group.zoomWidth} oninput={changeZW} /></td>
        </tr>
        <tr>
            <td><span>Zoom Height:</span></td>
            <td><input type="number" value={group.zoomHeight} oninput={changeZH} /></td>
        </tr>
        <tr>
            <td colspan="2"><hr /></td>
        </tr>
        <tr>
            <td><span>Thinking:</span></td>
            <td><input type="checkbox" checked={group.thinking} oninput={changeThinking} /></td>
        </tr>
    </tbody>
</table>



<style>
    table {
        table-layout: fixed;
        width: 100%;
        max-width: 100%;
        border-collapse: collapse;
    }

    td {
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    input[type="number"] {
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
    }
</style>