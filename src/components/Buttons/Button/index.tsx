"use client";
import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import "./styles.css";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
}

const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  const buttonClasses = classNames("button", variant);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={buttonClasses}
      {...props}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
