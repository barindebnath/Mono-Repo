import { FC, HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLTextAreaElement> {
    value: string;
    backgroundColor?: "white" | "black";
    size?: "sm" | "md" | "lg";
}
declare const TextArea: FC<Props>;
export default TextArea;
