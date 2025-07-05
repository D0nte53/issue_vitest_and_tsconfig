import * as React from "react";

export enum EColor {
    DEFAULT = "default",
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
}

export const jsonEColorTailwindColor: Record<EColor, string | { className?: string; style?: React.CSSProperties }> = {
    [EColor.SUCCESS]: "green",
    [EColor.DANGER]: "red",
    [EColor.WARNING]: "yellow",
    [EColor.PRIMARY]: "blue",
    [EColor.SECONDARY]: "purple",
    [EColor.DEFAULT]: "gray",
};
