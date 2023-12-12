import {Rect} from "./types";

export const clear_canvas = (canvas: HTMLCanvasElement): void => {
    const ctx:CanvasRenderingContext2D = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export const draw_rect = (canvas: HTMLCanvasElement, rect: Rect, color = '#fff', thickness = 1): void => {
    const ctx:CanvasRenderingContext2D = canvas.getContext('2d');
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.stroke();
    ctx.restore();
}