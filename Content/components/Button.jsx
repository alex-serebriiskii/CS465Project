import React from "react";
import injectSheet from "react-jss";

import { ButtonStyles } from "../jss/Button.js";

export const Button = injectSheet(ButtonStyles)(({ classes, children, onClick, color }) => {
  return (
    <button onClick={onClick} className={`${classes.wrapper} ${color}`}>
      {children}
    </button>
  )
});
