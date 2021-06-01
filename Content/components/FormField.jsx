import React from "react";
import { ErrorMessage, Field } from "formik";
import injectSheet from "react-jss";

import { FormFieldStyles } from "../jss/FormField.js";

export const FormField = injectSheet(FormFieldStyles)(({ classes, name, touched, errors }) => {
  const lower = name.toLowerCase();
  const type = lower === "confirm" ? "password" : lower;
  return (
    <div className={classes.wrapper}>
      <label htmlFor={lower}>{name}</label>
      <Field
        type={type}
        name={lower}
        id={lower}
        className={touched[lower] && errors[lower] ? "invalid" : ""}
      />
      <span>
        <ErrorMessage name={lower} />
      </span>
    </div>
  );
});

