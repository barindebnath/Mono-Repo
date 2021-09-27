import { FC, HTMLAttributes, ReactNode } from "react";

export interface Props extends HTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
  backgroundColor?: "white" | "black";
  size?: "sm" | "md" | "lg";
}

const Select: FC<Props> = ({
  children,
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
    cursor: "pointer",
    border: "1px solid gray",
  };

  return (
    <select style={styles} {...rest}>
      {children}
    </select>
  );
};

export default Select;
