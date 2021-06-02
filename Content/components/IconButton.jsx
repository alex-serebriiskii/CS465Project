import { IconButtonStyles } from "../jss/IconButton.js";
import React from "react";
import injectSheet from "react-jss";

export const IconButton = injectSheet(IconButtonStyles)((props) => {
  const { classes, children } = props;
  return (
    <button type="submit" className={classes.button} {...props}>
      {children}
    </button>
  );
});
