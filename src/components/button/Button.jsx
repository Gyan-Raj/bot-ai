import React from "react";
import style from "./Button.module.css";

const Button = ({ type, onClick, children, styles }) => {
  return (
    <button type={type} onClick={onClick} className={style[styles]}>
      {children}
    </button>
  );
};

export default Button;
