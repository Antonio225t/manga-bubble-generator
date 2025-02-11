<script lang="ts">
    import { bubbleList, selectedBubble, selectedBubbleList } from "$lib/stores";
    import { BubbleType, type Bubble } from "$lib/types";

    let { bubble }: { bubble: Bubble } = $props();

    function changeX(e: Event & { currentTarget: EventTarget & HTMLInputElement; }) {
        let list = $bubbleList;
        list[$selectedBubbleList].bubbles[$selectedBubble].x = e.currentTarget.valueAsNumber;
        $bubbleList = list;
    }

    function changeY(e: Event & { currentTarget: EventTarget & HTMLInputElement; }) {
        let list = $bubbleList;
        list[$selectedBubbleList].bubbles[$selectedBubble].y = e.currentTarget.valueAsNumber;
        $bubbleList = list;
    }

    function changeW(e: Event & { currentTarget: EventTarget & HTMLInputElement; }) {
        let list = $bubbleList;
        list[$selectedBubbleList].bubbles[$selectedBubble].width = e.currentTarget.valueAsNumber;
        $bubbleList = list;
    }

    function changeH(e: Event & { currentTarget: EventTarget & HTMLInputElement; }) {
        let list = $bubbleList;
        list[$selectedBubbleList].bubbles[$selectedBubble].height = e.currentTarget.valueAsNumber;
        $bubbleList = list;
    }


    function changeText(e: Event & { currentTarget: EventTarget & HTMLTextAreaElement; }) {
        let list = $bubbleList;
        list[$selectedBubbleList].bubbles[$selectedBubble].text = e.currentTarget.value;
        $bubbleList = list;
    }

    function changeType(e: Event & { currentTarget: EventTarget & HTMLSelectElement; }) {
        let list = $bubbleList;
        switch(e.currentTarget.value) {
            case "0":
                list[$selectedBubbleList].bubbles[$selectedBubble].type = BubbleType.NORMAL;
                break;
            case "1":
                list[$selectedBubbleList].bubbles[$selectedBubble].type = BubbleType.ANGRY;
                break;
            case "2":
                list[$selectedBubbleList].bubbles[$selectedBubble].type = BubbleType.NARRATOR;
                break;

        }
        $bubbleList = list;
    }
</script>



<table>
    <tbody>
        <tr>
            <td><span>X:</span></td>
            <td><input type="number" value={bubble.x} oninput={changeX} /></td>
        </tr>
        <tr>
            <td><span>Y:</span></td>
            <td><input type="number" value={bubble.y} oninput={changeY} /></td>
        </tr>
        <tr>
            <td><span>Width:</span></td>
            <td><input type="number" value={bubble.width} oninput={changeW} /></td>
        </tr>
        <tr>
            <td><span>Height:</span></td>
            <td><input type="number" value={bubble.height} oninput={changeH} /></td>
        </tr>
        <tr>
            <td colspan="2"><hr /></td>
        </tr>
        <tr>
            <td><span>Text:</span></td>
            <td><textarea oninput={changeText}>{bubble.text}</textarea></td>
        </tr>
        <tr>
            <td><span>Type:</span></td>
            <td>
                <select onchange={changeType}>
                    <option value="0" selected={bubble.type === BubbleType.NORMAL}>NORMAL</option>
                    <option value="1" selected={bubble.type === BubbleType.ANGRY}>ANGRY</option>
                    <option value="2" selected={bubble.type === BubbleType.NARRATOR}>NARRATOR</option>
                </select>
            </td>
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

    * {
        box-sizing: border-box;
        width: 100%;
        max-width: 100%;
    }
</style>