import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import injectSheet from "react-jss";

import { __bp_medium__ } from "../constants.js";

import { IndexPageStyles } from "../jss/IndexPage.js";

import Logo from "../svg/logo.svg";
import { Button } from "./Button.jsx";

const RegisterPage = Object.freeze({
  None: 0,
  Login: 1,
  Signup: 2,
})

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
      <form>
        inputs
      </form>
      <div className='action'>
        <Button color='blue' onClick={() => alert("SIGN UP")}>Sign up</Button>
      </div>
      <a href="/forgot">Forgot password?</a>
    </div>
  )
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
      <form>
        inputs
      </form>
      <div className='action'>
        <Button color='red' onClick={() => alert("LOG IN")}>Log in</Button>
      </div>
      <a href="/forgot">Forgot password?</a>
    </div>
  )
};

const Register = ({ pageHook }) => {
  const [page, setPage] = pageHook;

  if (page === RegisterPage.Login) {
    return (
      <Login setPage={setPage} />
    )
  }

  return (
    <Signup setPage={setPage} />
  )
};

export const IndexPage = injectSheet(IndexPageStyles)(({ classes }) => {
  const [page, setPage] = useState(RegisterPage.None);

  return (
    <>
      <Helmet>
        <title>Discordium</title>
        <meta name="description" content="Secure your chats - homepage" />
      </Helmet>
      <div className={classes.wrapper}>
        <div className='brand'>
          <div className='name'>
            <Logo />
            <h1>Discordium</h1>
          </div>
          <p>Secure <b>your</b> chats</p>
        </div>
        <div className='buttons'>
          <div>
            <Button color='blue' onClick={() => setPage(RegisterPage.Signup)}>Sign up</Button>
          </div>
          <div>
            <Button color='red' onClick={() => setPage(RegisterPage.Login)}>Log in</Button>
          </div>
        </div>
        {page !== RegisterPage.None
          ? <Register pageHook={[page,setPage]} />
          : <></>}
      </div>
    </>
  );
});


