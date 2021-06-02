import * as Yup from "yup";

import { Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "./Button.jsx";
import { FormField } from "./FormField.jsx";
import { Helmet } from "react-helmet";
import { IconButton } from "./IconButton.jsx";
import { IndexPageStyles } from "../jss/IndexPage.js";
import Logo from "../svg/logo.svg";
import { __bp_medium__ } from "../constants.js";
import injectSheet from "react-jss";
import { useQuery } from "../hooks/useQuery.js";

const RegisterPage = Object.freeze({
  None: 0,
  Login: 1,
  Signup: 2,
});

const LoginFormSchema = Yup.object().shape({
  username: Yup.string().min(3).max(24).required("Required"),
  password: Yup.string().min(8).max(32).required("Required"),
});

const LoginForm = () => {
  // Workaround since Formik does not run validation before doing default form actions
  // since validation runs asynchronously.
  // See more: https://github.com/formium/formik/issues/556#issuecomment-472047486
  const formEl = useRef(null);

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginFormSchema}
      onSubmit={() => {
        formEl.current.submit();
      }}
    >
      {({ handleSubmit, isSubmitting, errors, touched }) => (
        <Form
          onSubmit={handleSubmit}
          action="/accounts/login"
          method="POST"
          ref={formEl}
        >
          <FormField name="Username" touched={touched} errors={errors} />
          <FormField name="Password" touched={touched} errors={errors} />
          <Button color="red" type="submit" disabled={isSubmitting}>
            Log in
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const SignupFormSchema = Yup.object().shape({
  username: Yup.string().min(3).max(24).required("Required"),
  password: Yup.string().min(8).max(32).required("Required"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const SignupForm = () => {
  // Workaround since Formik does not run validation before doing default form actions
  // since validation runs asynchronously.
  // See more: https://github.com/formium/formik/issues/556#issuecomment-472047486
  const formEl = useRef(null);

  return (
    <Formik
      initialValues={{ username: "", password: "", confirm: "" }}
      validationSchema={SignupFormSchema}
      onSubmit={() => {
        formEl.current.submit();
      }}
    >
      {({ handleSubmit, isSubmitting, errors, touched }) => (
        <Form
          onSubmit={handleSubmit}
          action="/accounts/register"
          method="POST"
          ref={formEl}
        >
          <FormField name="Username" touched={touched} errors={errors} />
          <FormField name="Password" touched={touched} errors={errors} />
          <FormField name="Confirm" touched={touched} errors={errors} />
          <Button color="blue" type="submit" disabled={isSubmitting}>
            Sign up
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const Login = ({ setPage }) => {
  return (
    <div className="page login">
      <IconButton className="logo" onClick={() => setPage(RegisterPage.None)}>
        <Logo />
      </IconButton>
      <h1 className="title">Log in</h1>
      <IconButton
        className="instead"
        onClick={() => setPage(RegisterPage.Signup)}
      >
        Sign up instead
      </IconButton>
      <LoginForm />
      <a href="/forgot">Forgot password?</a>
    </div>
  );
};

const Signup = ({ setPage }) => {
  return (
    <div className="page signup">
      <IconButton className="logo" onClick={() => setPage(RegisterPage.None)}>
        <Logo />
      </IconButton>
      <h1 className="title">Sign up</h1>
      <IconButton
        className="instead"
        onClick={() => setPage(RegisterPage.Login)}
      >
        Log in instead
      </IconButton>
      <SignupForm />
      <a href="/forgot">Forgot password?</a>
    </div>
  );
};

const Register = ({ pageHook }) => {
  const [page, setPage] = pageHook;

  if (page === RegisterPage.Login) {
    return <Login setPage={setPage} />;
  }

  return <Signup setPage={setPage} />;
};

export const IndexPage = injectSheet(IndexPageStyles)(({ classes }) => {
  const [page, setPage] = useState(RegisterPage.None);

  useEffect(() => {
    const handler = () => {
      const width = window.innerWidth;
      if (width > __bp_medium__ && page === RegisterPage.None) {
        setPage(RegisterPage.Signup);
        return;
      }
    };

    window.addEventListener("resize", handler);
    handler();

    return () => window.removeEventListener("resize", handler);
  });

  const params = useQuery();
  const error = params.get("error");

  return (
    <>
      <Helmet>
        <title>Discordium</title>
        <meta name="description" content="Secure your chats - home page" />
      </Helmet>
      <div className={classes.wrapper}>
        <div className="brand">
          <div className="name">
            <Logo />
            <h1>Discordium</h1>
          </div>
          <p>
            Secure <b>your</b> chats
          </p>
          {error && <div className={classes.error}>{error}</div>}
        </div>
        <div className="buttons">
          <div>
            <Button color="blue" onClick={() => setPage(RegisterPage.Signup)}>
              Sign up
            </Button>
          </div>
          <div>
            <Button color="red" onClick={() => setPage(RegisterPage.Login)}>
              Log in
            </Button>
          </div>
        </div>
        {page !== RegisterPage.None ? (
          <div className="pageWrapper">
            <Register pageHook={[page, setPage]} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
});
