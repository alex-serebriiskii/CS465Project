import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";

import { Button } from "./Button.jsx";
import { Helmet } from "react-helmet";
import { IndexPageStyles } from "../jss/IndexPage.js";
import Logo from "../svg/logo.svg";
import injectSheet from "react-jss";

import { __bp_medium__ } from '../constants.js';

const RegisterPage = Object.freeze({
  None: 0,
  Login: 1,
  Signup: 2,
});

const FormField = ({ name, touched, errors }) => {
  const lower = name.toLowerCase();
  const type = lower === "confirm" ? "password" : lower;
  return (
    <>
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
    </>
  );
};

const LoginFormSchema = Yup.object().shape({
  username: Yup.string().min(3).max(24).required("Required"),
  password: Yup.string().min(8).max(32).required("Required"),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginFormSchema}
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
  return (
    <Formik
      initialValues={{ username: "", password: "", confirm: "" }}
      validationSchema={SignupFormSchema}
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
      <button className="logo" onClick={() => setPage(RegisterPage.None)}>
        <Logo />
      </button>
      <h1 className="title">Log in</h1>
      <button className="instead" onClick={() => setPage(RegisterPage.Signup)}>
        Sign up instead
      </button>
      <LoginForm />
      <a href="/forgot">Forgot password?</a>
    </div>
  );
};

const Signup = ({ setPage }) => {
  return (
    <div className="page signup">
      <button className="logo" onClick={() => setPage(RegisterPage.None)}>
        <Logo />
      </button>
      <h1 className="title">Sign up</h1>
      <button className="instead" onClick={() => setPage(RegisterPage.Login)}>
        Log in instead
      </button>
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

    window.addEventListener('resize', handler);
    handler();

    return () => window.removeEventListener('resize', handler);
  });

  return (
    <>
      <Helmet>
        <title>Discordium</title>
        <meta name="description" content="Secure your chats - homepage" />
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
