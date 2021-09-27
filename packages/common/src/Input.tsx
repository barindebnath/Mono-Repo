import { FC, HTMLAttributes } from "react";

export interface Props extends HTMLAttributes<HTMLInputElement> {
  value: string;
  backgroundColor?: "white" | "black";
  size?: "sm" | "md" | "lg";
}

const Input: FC<Props> = ({
  backgroundColor = "white",
  size = "md",
  style,
  ...rest
}) => {
  const myRem = {
    sm: ".7rem",
    md: "1rem",
    lg: "1.3rem",
  };

  const styles = {
    ...style,
    backgroundColor,
    padding: `calc(${myRem[size]} / 3) calc(${myRem[size]}/2)`,
    borderRadius: `calc(${myRem[size]} / 3)`,
    fontSize: myRem[size],
    color: backgroundColor === "black" ? "white" : "black",
    border: "1px solid gray",
  };

  return <input style={styles} {...rest} />;
};

export default Input;
