import React from "react";
import injectSheet from "react-jss";
import { Form, Formik } from "formik";
import { Button } from "./Button.jsx";
import { FormField } from "./FormField.jsx";
import * as Yup from "yup";
import { Helmet } from "react-helmet";

import { ForgotPasswordPageStyles } from "../jss/ForgotPasswordPage.js";

import Logo from "../svg/logo.svg";

const ForgotFormSchema = Yup.object().shape({
  username: Yup.string().min(3).max(24).required("Required"),
});

const ForgotForm = () => {
  return (
    <Formik
      initialValues={{ username: "" }}
      validationSchema={ForgotFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit, isSubmitting, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <FormField name="Username" touched={touched} errors={errors} />
          <Button color="blue" type="submit" disabled={isSubmitting}>
            Send email
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export const ForgotPasswordPage = injectSheet(ForgotPasswordPageStyles)((props) => {
  const { classes } = props;
  return (
    <>
      <Helmet>
        <title>Forgot password</title>
        <meta name="description" content="Secure your chats - forgot password page" />
      </Helmet>
      <div className={classes.wrapper}>
        <a href="/">
          <Logo />
          Home
        </a>
        <h1>Forgot password?</h1>
        <ForgotForm />
      </div>
    </>
  );
});
