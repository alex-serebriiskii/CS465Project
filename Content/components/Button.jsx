import { ButtonStyles } from "../jss/Button.js";
import React from "react";
import injectSheet from "react-jss";

export const Button = injectSheet(ButtonStyles)((props) => {
  const { classes, children, onClick, color, disabled, type } = props;
  return (
    <button
      onClick={onClick}
      className={`${classes.wrapper} ${color}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
});
