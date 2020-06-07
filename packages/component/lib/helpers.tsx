export const px = (value: number) => `${value}px`;

export const percent = (value: number) => `${value}%`;

export const vh = (value: number) => `${value}vh`;

export const vw = (value: number) => `${value}vw`;

export const multiplePx = (...rest: number[]) => {
    return rest.map((value) => px(value)).join(" ");
};

export const boxShadow = (
    offsetX: number,
    offsetY: number,
    blurRadius: number,
    color: string
) => [px(offsetX), px(offsetY), px(blurRadius), color].join(" ");

export const border = (
    lineWidth: number,
    lineStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset",
    color: string
) => [px(lineWidth), lineStyle, color].join(" ");
