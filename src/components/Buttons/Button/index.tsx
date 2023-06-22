import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import "./styles.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
}

const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  const buttonClasses = classNames("button", variant);

  return (
    <button className={buttonClasses} {...props}>
      {props.children}
    </button>
  );
};

export default Button;