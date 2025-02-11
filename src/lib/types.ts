
export enum BubbleType {
    NORMAL,
    ANGRY,
    NARRATOR
}

export interface Bubble {
    type: BubbleType,
    text: string,
    x: number,
    y: number,
    width: number,
    height: number
}

export interface BubbleGroup {
    bubbles: Bubble[],
    thinking: boolean,
    x: number,
    y: number,
    width: number,
    height: number,
    zoomWidth: number,
    zoomHeight: number
}


export interface MainCanvas {
    width: number,
    height: number
}