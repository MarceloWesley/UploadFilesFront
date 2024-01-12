'use client'
import React from "react";
import { TitleProps } from "../types";

export function Title({ Tag = 'h1', size, color, children, ...rest }: TitleProps) {
    const titleStyle = {
        fontSize: size,
        color: color,
    };

    return React.createElement(Tag, { ...rest, style: titleStyle }, children);
}
