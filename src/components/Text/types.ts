import { HtmlHTMLAttributes, ReactNode } from "react"

export type TextProps = {
    children?: ReactNode
    size?: string;
    color?: string;
    className?: string;
} & HtmlHTMLAttributes<HTMLParagraphElement>;

export type TitleProps = {
    children?: ReactNode
    Tag?: keyof JSX.IntrinsicElements;
    size?: string;
    color?: string;
} & HtmlHTMLAttributes<HTMLHeadingElement >;