import { TextProps } from "../types";

export function Text({ children, size = "1rem", color, className, ...rest }: TextProps) {
 
  return <p className={`${className}`} style={{color , fontSize: size}}  {...rest}>
    {children}
    </p>;
}
