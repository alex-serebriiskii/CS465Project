import React from "react";
import injectSheet from "react-jss";

import { IndexPageStyles } from "../jss/IndexPage.js";

export const IndexPage = injectSheet(IndexPageStyles)(({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <h1>Index Page</h1>
    </div>
  );
});


