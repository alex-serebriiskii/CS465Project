import React from "react";
import injectSheet from "react-jss";

import { IconButtonStyles } from "../jss/IconButton.js";

export const IconButton = injectSheet(IconButtonStyles)((props) => {
  const { classes, children } = props;
  return (
    <button type="submit" className={classes.button} {...props}>
      {children}
    </button>
  );
});
