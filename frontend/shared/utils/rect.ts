import {Point, Rect} from "./types";

export const is_point_inside = (rect: Rect, point: Point): boolean => {
    if (!rect || !point) return null;
    return (
        rect.x <= point.x &&
        rect.x + rect.width >= point.x &&
        rect.y <= point.y &&
        rect.y + rect.height >= point.y
    )
}

export const snap_value_to_range = (value: number, min: number, max: number): number => {
    if (value < min)
        return min;
    if (value > max)
        return max;
    return value;
}

export const snap_point_to_rect = (point: Point, rect: Rect): Point => {
    if (is_point_inside(rect, point))
        return point;

    return {
        x: snap_value_to_range(point.x, rect.x, rect.x + rect.width),
        y: snap_value_to_range(point.y, rect.y, rect.y + rect.height)
    }
}