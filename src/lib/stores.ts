import { writable } from "svelte/store";
import { BubbleType, type Bubble, type BubbleGroup, type MainCanvas } from "./types";


export const bubbleList = writable<BubbleGroup[]>([]);
export const selectedBubbleList = writable<number>(-1);
export const selectedBubble = writable<number>(-1);
export const mainCanvas = writable<MainCanvas>({
    width: 280,
    height: 560
});


export const DEFAULT_BUBBLE: Bubble = {
    type: BubbleType.NORMAL,
    text: "Hello\nWorld!",
    x: 0,
    y: 0,
    width: 350,
    height: 255
};

export const DEFAULT_BUBBLE_GROUP: BubbleGroup = {
    bubbles: [DEFAULT_BUBBLE],
    thinking: false,
    x: 0,
    y: 0,
    width: 500,
    height: 500,
    zoomWidth: 500,
    zoomHeight: 500
};