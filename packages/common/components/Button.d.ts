import { FC, HTMLAttributes, ReactNode } from "react";
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    backgroundColor?: string;
    size?: "sm" | "md" | "lg";
    color?: "white" | "black";
}
declare const Button: FC<Props>;
export default Button;
