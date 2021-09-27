import { FC, HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLInputElement> {
    value: string;
    backgroundColor?: "white" | "black";
    size?: "sm" | "md" | "lg";
}
declare const Input: FC<Props>;
export default Input;
