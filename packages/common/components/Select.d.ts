import { FC, HTMLAttributes, ReactNode } from "react";
export interface Props extends HTMLAttributes<HTMLSelectElement> {
    children?: ReactNode;
    backgroundColor?: "white" | "black";
    size?: "sm" | "md" | "lg";
}
declare const Select: FC<Props>;
export default Select;
